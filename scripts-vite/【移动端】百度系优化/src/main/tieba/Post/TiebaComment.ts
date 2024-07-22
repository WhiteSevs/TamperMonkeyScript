import {
	DOMUtils,
	addStyle,
	httpx,
	loadingView,
	log,
	pops,
	utils,
} from "@/env";
import { TieBaApi, TiebaPageDataApi, TiebaUrlApi } from "../api/TiebaApi";
import { PopsPanel } from "@/setting/setting";
import { TiebaCore } from "../TiebaCore";
import { TiebaData } from "../Home/data";
import { LoadingView } from "@/utils/LoadingView";
import type { HttpxDetails } from "@whitesev/utils/dist/src/Httpx";
import { TiebaSearch } from "../TiebaSearch";
import { ref } from "vue";
import { Toolbar } from "./Toolbar";
import Qmsg from "qmsg";
import { CommonUtils } from "@/utils/CommonUtils";
import { TiebaPostApi } from "../api/TiebaPostApi";
import { TiebaPost } from "./TiebaPost";
import { VueUtils } from "@/utils/VueUtils";
import { TiebaReply } from "./TiebaReply";
import { dataType } from "element-plus/es/components/table-v2/src/common";
import { FloorCommentData, LzlItemData, PageComment } from "../types/PostsType";
import { CommentData } from "../types/CommentType";

interface AffixOption {
	/**
	 * 偏移距离，默认0
	 */
	offset: number;
	/**
	 * 固钉位置，默认top
	 */
	position: "top" | "bottom";
	/**
	 * 指定容器（CSS 选择器）
	 */
	target: string;
	/**
	 * 指定根元素
	 */
	root: Element | Document | null | undefined;
	/**
	 * z-index，默认100
	 */
	"z-index": number | string;
	/**
	 * 固钉状态改变时触发的事件素
	 */
	change: ($target: HTMLElement, isIntersecting: boolean) => void;
}
/**
 * 设置元素固钉
 */
function setAffix(option: Partial<AffixOption>) {
	let defaultOption: AffixOption = {
		offset: 0,
		position: "top",
		target: "",
		"z-index": 100,
		root: null,
		change: () => {},
	};
	utils.assign(defaultOption, option);
	if (utils.isNull(defaultOption)) {
		throw new TypeError("target不能为空");
	}
	utils
		.waitNode<HTMLDivElement>(defaultOption.target, 10000)
		.then(($target) => {
			if (!$target) {
				return;
			}
			addStyle(/*css*/ `
			.affix-container-top-fixed[data-target="${defaultOption.target}"]{
				position: fixed;
				top: ${defaultOption.offset}px;
				left: 0;
				z-index: ${defaultOption["z-index"]};
			}
			`);
			let checkOffset = defaultOption.offset;
			let $affixLine = document.createElement("div");
			$affixLine.className = "affix-line";
			$target.setAttribute("data-target", defaultOption.target);
			DOMUtils.before($target, $affixLine);
			let rootMargin = `0px`;
			if (defaultOption.position === "bottom") {
				rootMargin = `0px 0px ${-checkOffset}px 0px`;
			} else {
				rootMargin = `${-checkOffset}px 0px 0px 0px`;
			}
			let threshold = [0.01, 0.99];
			let thresholdMinValue = threshold[0] * checkOffset;
			let thresholdMaxValue = threshold[threshold.length - 1] * checkOffset;
			let lockFunc = new utils.LockFunction(
				(entries: IntersectionObserverEntry[]) => {
					let intersectionObserverEntry = entries[0];
					let boundTop = intersectionObserverEntry.boundingClientRect.top;
					// let boundTop = $target.getBoundingClientRect().top;
					// let boundTop = $affixLine.getBoundingClientRect().top;
					if (defaultOption.position === "top") {
						/* top */
						if (boundTop < thresholdMaxValue) {
							// 固定
							$affixLine.style.height = DOMUtils.outerHeight($target) + "px";
							$target.classList.add("affix-container-top-fixed");
						} else {
							// 取消固定
							$affixLine.style.height = "";
							$target.classList.remove("affix-container-top-fixed");
						}
					} else {
						/* bottom */
					}
				},
				0
			);
			const observer = new IntersectionObserver(
				(entries) => {
					lockFunc.run(entries);
				},
				{
					root: null,
					threshold: threshold, // threshold 设置为 1 表示目标元素完全可见时触发回调函数
					rootMargin: rootMargin, // rootMargin 设置为 0px 表示目标元素与视窗之间的距离
				}
			);

			observer.observe($affixLine);
		});
}

const TiebaComment = {
	/**
	 * 当前页
	 */
	page: 1,
	/**
	 * 当前最大页
	 */
	maxPage: 1,
	/**
	 * 楼层数量
	 */
	floor_num: 1,
	/**
	 * 滚动监听锁
	 */
	funcLock: null as unknown as {
		lock: () => void;
		unlock: () => void;
		run: () => any;
	},
	/**
	 * tbs值
	 */
	tbs: null as unknown as string,
	/**
	 * tid
	 */
	param_tid: null as unknown as string,
	/**
	 * 帖子id
	 */
	param_forum_id: null as unknown as string,
	/**
	 * 发帖人的id
	 */
	postAuthorId: null as unknown as string,
	/**
	 * 本帖子post的id
	 */
	pid: null as unknown as number,
	/**
	 * 帖子回复的数量
	 */
	reply_num: ref(0),
	/**
	 * 是否已对当前帖子点赞
	 */
	has_agree: ref(false),
	/**
	 * 帖子点赞的数量
	 */
	agree_num: ref(0),
	/**
	 * 当前已登录用户的信息
	 */
	userInfo: ref({
		/**
		 * 用户id
		 */
		id: null as number | null,
		/**
		 * 是否已登录，如果是0，那么其它数据不存在
		 * + 1 已登录
		 * + 0 未登录
		 */
		is_login: 0,
		/**
		 * 用户名
		 */
		name: null as string | null,
		/**
		 * 显示的用户名
		 */
		name_show: null as string | null,
		/**
		 * 用户的tb
		 */
		portrait: null as string | null,
		/**
		 * 显示的用户名
		 */
		show_nickname: null as string | null,
	}),
	forumInfo: ref({
		/**
		 * 当前吧id，简称tid
		 */
		id: null as number | null,
		/**
		 * 当前吧名，简称kw
		 */
		name: null as string | null,
	}),
	/**
	 * 进过百度验证的额外安全参数
	 */
	extraSearchSignParams: "",
	/**
	 * vue根元素
	 */
	vueRootView: null as unknown as HTMLElement,
	/**
	 * 判断是否在底部附近的误差值
	 * @type
	 */
	isNearBottomValue: 250,
	init() {
		let urlSignParams = new URLSearchParams(window.location.search);
		if (
			urlSignParams.has("p_tk") &&
			urlSignParams.has("p_sign") &&
			urlSignParams.has("p_signature")
		) {
			log.error("当前页面是经过百度验证后的网站，添加验证参数");
			urlSignParams.forEach((value, key) => {
				if (["pn", "tid", "pid", "fid", "t", "see_lz"].includes(key)) {
					return;
				}
				log.success(`设置额外参数：${key}=${value}`);
				/* tiebaCommentConfig.extraSearchSignParams += `&${key}=${value}`; */
			});
			log.error(["百度验证后的参数👇", TiebaComment.extraSearchSignParams]);
		}
		utils.waitNode<HTMLDivElement>(".main-page-wrap").then(() => {
			TiebaComment.insertLoadingHTML();
		});
		utils
			.waitAnyNode<HTMLDivElement>([
				".recommend-item[data-banner-info]",
				"div.app-view.transition-fade.pb-page-wrapper.mask-hidden .post-item",
			])
			.then(() => {
				DOMUtils.remove(".post-item");
				TiebaComment.initReplyDialogCSS();
				TiebaComment.initMainComment(false);
				TiebaComment.insertReverseBtn();
				TiebaComment.insertOnlyLZ();
				utils
					.waitNode<HTMLDivElement>('.nav-bar-v2-fixed[main-type="forum"]')
					.then(($navBar) => {
						setAffix({
							target: "#replySwitch",
							position: "top",
							root: $navBar,
							offset: 49,
							change() {},
						});
					});
			});

		VueUtils.waitVuePropToSet(".app-view", [
			{
				msg: "设置参数 isHitMedicalPost",
				check(vueObj) {
					return typeof vueObj?.isHitMedicalPost === "boolean";
				},
				set(vueObj) {
					vueObj.isHitMedicalPost = false;
					log.success("成功设置参数 isHitMedicalPost=false");
				},
			},
			{
				msg: "获取参数 __vue__.postAuthorId",
				check(vueObj) {
					return typeof vueObj?.postAuthorId === "number";
				},
				set(vueObj) {
					TiebaComment.postAuthorId = vueObj.postAuthorId;
					log.success("获取当前帖子的作者ID：" + TiebaComment.postAuthorId);
				},
			},
			{
				msg: "获取参数 __vue__.currentReplyObj.pid",
				check(vueObj) {
					return typeof vueObj?.currentReplyObj?.pid === "number";
				},
				set(vueObj) {
					TiebaComment.pid = vueObj.currentReplyObj.pid as number;
					log.success("获取当前帖子的pid：" + TiebaComment.pid);
				},
			},
		]);
		Toolbar.updateEnvParam();
		this.initCSS();
		this.setUserCommentHandler();
	},
	initCSS() {
		/* 此处是百度贴吧帖子的css，应对贴吧前端重新编译文件 */
		addStyle(/*css*/ `
		/* 去除底部高度设定 */
		.pb-page-wrapper{
			margin-bottom: 0 !important;
		}
		.post-item[data-v-74eb13e2] {
			overflow: hidden;
			margin: .16rem .13rem 0;
		}
		.post-item .content[data-v-74eb13e2]{
			margin-top: .06rem;
			margin-bottom: .06rem;
		}
		.post-item .user-line-post[data-v-74eb13e2] {
			margin-bottom: .06rem;
		}
		.user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
		}
		.user-line-wrapper[data-v-188c0e84] {
			-webkit-box-pack: justify;
			-moz-box-pack: justify;
			-webkit-justify-content: space-between;
			-moz-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}
		.post-item .content[data-v-74eb13e2] {
			padding-left: .44rem;
			width: auto;
		}
		.user-line[data-v-188c0e84] {
			-webkit-box-align: center;
			-moz-box-align: center;
			-webkit-align-items: center;
			-moz-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: left;
			-moz-box-pack: left;
			-webkit-justify-content: left;
			-moz-justify-content: left;
			-ms-flex-pack: left;
			justify-content: left;
		}
		.user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
		}
		.user-line .avatar[data-v-188c0e84] {
			position: relative;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			width: .36rem;
			height: .36rem;
			margin-right: .08rem;
			border-radius: 50%;
			background-repeat: no-repeat;
			background-position: 50%;
			background-size: cover;
			-webkit-box-flex: 0;
			-webkit-flex: none;
			-ms-flex: none;
			flex: none;
		}
		.tbfe-1px-border {
			position: relative;
			border-radius: .08rem;
			font-size: 0;
		}
		.user-line .user-info[data-v-188c0e84] {
			position: relative;
			overflow: hidden;
			-webkit-box-flex: 0;
			-webkit-flex: none;
			-ms-flex: none;
			flex: none;
		}
		.user-line .avatar[data-v-188c0e84]:after {
			border-radius: 50%;
		}
		.tbfe-1px-border:after {
			content: "";
			position: absolute;
			z-index: 100;
			top: 0;
			left: 0;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			border: 1px solid rgba(0,0,0,.12);
			-webkit-transform-origin: 0 0;
			-ms-transform-origin: 0 0;
			transform-origin: 0 0;
			pointer-events: none;
		}
		.user-line .user-info .username[data-v-188c0e84],
		#whitesev-reply-dialog .whitesev-reply-dialog-user-username {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			overflow: hidden;
			font-size: .15rem;
			line-height: .28rem;
			white-space: nowrap;
			-o-text-overflow: ellipsis;
			text-overflow: ellipsis;
			font-weight: 400;
		}
		.whitesev-reply-dialog-user-info{
			display: flex;
			align-items: center;
		}
		.desc-info[data-v-188c0e84] {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			font-size: .12rem;
			line-height: .18rem;
			overflow: hidden;
			white-space: nowrap;
			-o-text-overflow: ellipsis;
			text-overflow: ellipsis;
			color: #a3a2a8;
			margin: 0.06rem;
		}
		.floor-info[data-v-188c0e84],
		.user-line .user-info .forum-info[data-v-188c0e84] {
			margin-right: .08rem;
		}
		.post-item .content .post-text[data-v-74eb13e2] {
			display: unset;
			font-size: .16rem;
			line-height: .24rem;
		}
		.thread-text[data-v-ab14b3fe] {
			font-size: .13rem;
			line-height: .21rem;
			text-align: justify;
			word-break: break-all;
		}
		.post-item .content .lzl-post[data-v-74eb13e2] {
			/* margin-top: .06rem; */
		}
		.lzl-post[data-v-5b60f30b] {
			padding: .08rem .12rem;
			background: #f8f7fd;
			border-radius: .08rem;
		}
		.post-item .content .post-split-line[data-v-74eb13e2] {
			margin-top: .12rem;
			background-color: #ededf0;
			height: 1px;
			width: 200%;
			-webkit-transform: scale(.5);
			-ms-transform: scale(.5);
			transform: scale(.5);
			-webkit-transform-origin: top left;
			-ms-transform-origin: top left;
			transform-origin: top left;
		}
		.lzl-post .lzl-post-item[data-v-5b60f30b]:first-child {
			margin-top: 0;
		}
		.lzl-post .lzl-post-item[data-v-5b60f30b] {
			margin-top: .04rem;
		}
		.lzl-post .lzl-post-item .text-box[data-v-5b60f30b] {
			font-size: .13rem;
			line-height: .2rem;
		}
		.lzl-post .lzl-post-item .text-box .link[data-v-5b60f30b] {
			display: -webkit-inline-box;
			display: -webkit-inline-flex;
			display: -ms-inline-flexbox;
			display: inline-flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			font-weight: 600;
			color: #a4a1a8;
		}
		.lzl-post .lzl-post-item .lzl-post-text[data-v-5b60f30b] {
			display: inline;
		}
		.thread-text[data-v-ab14b3fe] {
			font-size: .13rem;
			line-height: .26rem;
			text-align: justify;
			word-break: break-all;
		}
		.lzl-post .lzl-post-item .text-box .link .landlord[data-v-5b60f30b] {
			width: .28rem;
			height: .28rem;
			margin-left: .04rem;
		}
		.user-line .user-info .username .landlord[data-v-188c0e84],
		#whitesev-reply-dialog .landlord[data-v-188c0e84]{
			width: .28rem;
			height: .28rem;
			margin-left: .04rem
		}

		/* 修复帖子主内容底部的高度 */
		.post-resource-list + .interaction-bar{
			padding: 0.09rem !important;
		}
		/* 修复全部回复距离上面的空白区域 */
		#replySwitch{
			padding-top: 0.06rem;
			width: -webkit-fill-available;
			width: -moz-available;
			background: #ffffff;
		}
		`);
		addStyle(/*css*/ `
		.thread-text .BDE_Smiley {
			width: .2rem;
			height: .2rem;
			vertical-align: middle;
		}
		.thread-text .BDE_Image{
			margin-top: 8px;
			max-width: 350px;
			cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
			height: auto;
			width: auto;
			width: 100%;
		}
		.text-content .at{
			font-weight: 600;
			color: #614FBC;
		}`);
		/* 隐藏百度贴吧精选帖子的底部空栏 */
		addStyle(/*css*/ `
		body > div.main-page-wrap > div.app-view.transition-fade.pb-page-wrapper.mask-hidden > div.placeholder,
		div.app-view.transition-fade.pb-page-wrapper.mask-hidden .post-item[data-track]{
			display: none;
		}`);
		addStyle(this.getLevelCSS());
		addStyle(/*css*/ `
		/* 更多的按钮 */
		.user-comment-handler{
			display: flex;
			align-items: center;
		}
		.user-comment-handler .icon{
		    width: 0.16rem;
		    height: 0.16rem;
		}
		`);
	},
	/**
	 * 设置每条评论右边的更多按钮的事件
	 */
	setUserCommentHandler() {
		async function deleteItem(id: number) {
			let comment_id = id;
			let thread_id = TiebaComment.param_tid;
			let kw = TiebaComment.forumInfo.value.name as any as string;
			let tbs = TiebaComment.tbs;
			let forum_id = TiebaComment.param_forum_id;
			return await TiebaPostApi.deleteCommit({
				tbs: tbs,
				fid: forum_id,
				kw: kw,
				tid: thread_id,
				pid: comment_id,
			});
		}
		function clickCallBack(data: {
			user: string;
			content: string;
			userId: number;
			userPostId: number;
			$item: HTMLElement;
			successDeleteCallBack?: Function;
		}) {
			let $drawer = pops.drawer({
				title: {
					enable: false,
				},
				content: {
					text: /*html*/ `
					<div class="handler-container">
						<div class="reply-content-info">
							<div class="reply-content-name">${data.user}：</div>
							<div class="reply-content-text">${data.content}</div>
						</div>
						<div class="reply-tool">
							<div class="reply-tool-item">
								<div class="reply-tool-delete">
									<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20049"><path d="M288 256V128c0-38.4 25.6-64 70.4-64h310.4c41.6 0 67.2 25.6 67.2 64v128h160c19.2 0 32 12.8 32 32s-12.8 32-32 32H128c-19.2 0-32-12.8-32-32s12.8-32 32-32h160z m64 0h320V128H352v128zM256 896h512V416c0-16 12.8-32 32-32 16 0 32 12.8 32 32v480c0 38.4-22.4 64-60.8 64H252.8C214.4 960 192 934.4 192 896V416c0-19.2 12.8-32 32-32s32 12.8 32 32v480z m256-512c19.2 0 32 12.8 32 32v352c0 19.2-12.8 32-32 32s-32-12.8-32-32V416c0-19.2 12.8-32 32-32z" p-id="20050"></path></svg>
									<p>删除</p>
								</div>
							</div>
						</div>
					</div>
					`,
					html: true,
				},
				btn: {
					ok: {
						enable: false,
					},
					cancel: {
						text: "取消",
						type: "tieba-cancel",
						enable: true,
					},
				},
				direction: "bottom",
				size: "30%",
				zIndex: utils.getMaxZIndex(100),
				mask: {
					enable: true,
					clickEvent: {
						toClose: true,
						toHide: false,
					},
				},
				style: /*css*/ `
				.pops[type-value="drawer"]{
					height: unset !important;
					max-height: 32%;
					border-top-left-radius: 16px !important;
					border-top-right-radius: 16px !important;
				}
				.pops-drawer-content{
					padding: 20px 20px 0px 20px !important
				}
				.pops-drawer-btn{
					align-self: center;
				}
				.pops-drawer-btn-cancel[type="tieba-cancel"]{
					border-color: transparent;
					background: transparent;
				}

				.reply-content-info{
					display: flex;
					font-size: 0.14rem;
					justify-content: center;
				}
				.reply-content-name{
					color: #a3a2a8;
				}
				.reply-content-text{
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
				.reply-tool{
					padding: 20px;
				}
				.reply-tool-item > div{
					padding: 0px 20px;
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				.reply-tool-item > div > p{
					padding-top: 6px;
				}
				.reply-tool .reply-tool-item{
					display: flex;
					border-bottom: 1px solid #e5e5e5;
					padding: 6px 0px;
				}
				.reply-tool .reply-tool-item svg{
					width: 28px;
					height: 28px;
				}
				.reply-tool .reply-tool-item:last-child{
					border-bottom: 0;
				}
				`,
			});

			let $deleteBtn = $drawer.$shadowRoot.querySelector(".reply-tool-delete");
			if (
				(TiebaComment.userInfo.value.id != null &&
					TiebaComment.userInfo.value.id.toString() ===
						data.userId.toString()) ||
				(TiebaComment.userInfo.value.id != null &&
					TiebaComment.userInfo.value.id.toString() ===
						TiebaComment.postAuthorId.toString())
			) {
				/* 要求 该回复用户id和已登录用户id一致 */
				/* 或者 本帖楼主id和已登录用户id一致 */
				DOMUtils.on($deleteBtn, "click", function () {
					$drawer.close();
					pops.confirm({
						title: {
							text: "",
						},
						content: {
							text: "确定删除此条回复贴",
							style: "text-align:center;",
						},
						btn: {
							position: "space-around",
							reverse: true,
							ok: {
								enable: true,
								text: "确认",
								type: "tieba-confirm",
								async callback(event) {
									let comment_id = data.userPostId;
									let deleteStatus = await deleteItem(comment_id);
									if (deleteStatus) {
										Qmsg.success("删除成功", {
											zIndex: utils.getMaxZIndex(10),
										});
										data.$item.remove();
										event.close();
										if (typeof data.successDeleteCallBack === "function") {
											data.successDeleteCallBack();
										}
									}
								},
							},
							cancel: {
								enable: true,
								text: "取消",
								type: "tieba-confirm",
							},
							close: {
								enable: false,
							},
						},
						mask: {
							enable: true,
							clickEvent: {
								toClose: true,
							},
						},
						width: "80vw",
						height: "180px",
						zIndex: utils.getMaxZIndex(100),
						style: /*css*/ `
						.pops[type-value="confirm"]{
							--container-title-height: 0;
							--container-bottom-btn-height: 40px;
						}
						.pops-confirm-title{
							display: none !important;
						}
						.pops-confirm-content{
							height: calc(100% - var(--container-bottom-btn-height)) !important;
							align-content: center;
						}
						.pops-confirm-btn{
							padding: 5px 10px 5px 10px;
						}
						.pops-confirm-btn button{
							border-color: transparent;
							background: transparent;
							color: #7557ff;
						}
						`,
					});
				});
			} else {
				$deleteBtn?.remove();
			}
		}
		/* 楼中楼的更多按钮 */
		DOMUtils.on(
			document,
			"click",
			".post-item .user-comment-handler",
			function (event) {
				utils.preventEvent(event);
				let $click = event.target as HTMLDivElement;
				let $item = $click.closest(".post-item") as HTMLDivElement;
				let $textContent = $item.querySelector(
					".text-content"
				) as HTMLDivElement;
				let data = ($item as any)["data-whitesev"] as FloorCommentData;
				log.info(["获取本条回复的数据", data]);
				if (!data) {
					Qmsg.error("获取本条回复的数据失败");
					return;
				}
				let userId = data["userId"];
				let user = data["userShowName"] || data["userName"];
				let userPostId = data["userPostId"] as number;

				let content = $textContent.innerText;
				clickCallBack({
					$item: $item,
					content: content,
					userId: userId,
					user: user,
					userPostId: userPostId,
					successDeleteCallBack() {
						let $appView = document.querySelector<HTMLDivElement>(".app-view");
						let $interactionBar = document.querySelector<HTMLDivElement>(
							".main-thread-content .interaction-bar"
						);
						if ($interactionBar) {
							let vueObj = VueUtils.getVue($interactionBar);
							if (!vueObj) {
								return;
							}
							if (vueObj?.interactionNum?.reply) {
								vueObj.interactionNum.reply--;
							}
						} else if ($appView) {
							let vueObj = VueUtils.getVue($appView);
							if (!vueObj) {
								return;
							}
							if (vueObj?.interactionNum?.reply) {
								vueObj.interactionNum.reply--;
							}
						}
					},
				});
			}
		);
		DOMUtils.on(
			document,
			"click",
			"#whitesev-reply-dialog .user-comment-handler",
			function (event) {
				utils.preventEvent(event);
				let $click = event.target as HTMLDivElement;
				let $item = $click.closest(
					".whitesev-reply-dialog-sheet-other-content-item"
				) as HTMLDivElement;
				let $textContent = $item.querySelector(
					".whitesev-reply-dialog-user-comment"
				) as HTMLDivElement;
				let data = ($item as any)["data-lzl-item"] as LzlItemData;
				log.info(["获取本条楼中楼回复的数据", data]);
				if (!data) {
					Qmsg.error("获取本条回复的数据失败");
					return;
				}
				let userId = data["userInfo"]["user_id"];
				let user =
					data["userInfo"]["user_name"] ||
					data["userInfo"]["user_nickname"] ||
					data["userInfo"]["nickname"];
				let userPostId = data["data"]["comment_id"] as number;

				let content = $textContent.innerText;
				clickCallBack({
					$item: $item,
					content: content,
					userId: userId,
					user: user,
					userPostId: userPostId,
					successDeleteCallBack() {
						let $commentNum = $item.querySelector<HTMLDivElement>(
							".whitesev-reply-dialog-sheet-comment-num"
						);
						if (!$commentNum) {
							return;
						}
						let commentNum = parseInt($commentNum.innerText);
						if (!isNaN(commentNum)) {
							return;
						}
						$commentNum.innerText = (commentNum - 1).toString() + "条回复";
					},
				});
			}
		);
	},
	/** 用户贴吧等级CSS */
	getLevelCSS() {
		let colorConversion = new utils.ColorConversion();
		let colorLightLevel = 0.7;
		return /*css*/ `
          .forum-level-container{
            display: flex;
            align-items: center;
            margin: 0 0.03rem;
          }
          .forum-level[data-level]{
            padding: 0px 0.03rem;
            border-radius: 3px;
            font-size: 0.1rem;
            line-height: 0.16rem;
            font-weight: 700;
            color: #ffffff;
            background: #000000;
          }
          .forum-level[data-level="0"],
          .forum-level[data-level="1"],
          .forum-level[data-level="2"],
          .forum-level[data-level="3"]{
            background: ${colorConversion.getLightColor(
							"#5dc7a0",
							colorLightLevel
						)};
            color: #5dc7a0;
          }
          .forum-level[data-level="4"],
          .forum-level[data-level="5"],
          .forum-level[data-level="6"],
          .forum-level[data-level="7"],
          .forum-level[data-level="8"],
          .forum-level[data-level="9"]{
            background: ${colorConversion.getLightColor(
							"#6BA7FF",
							colorLightLevel
						)};
            color: #6BA7FF;
          }
          .forum-level[data-level="10"],
          .forum-level[data-level="11"],
          .forum-level[data-level="12"],
          .forum-level[data-level="13"],
          .forum-level[data-level="14"],
          .forum-level[data-level="15"]{
            background: ${colorConversion.getLightColor(
							"#F9B341",
							colorLightLevel
						)};
            color: #F9B341;
          }
          .forum-level[data-level="16"],
          .forum-level[data-level="17"],
          .forum-level[data-level="18"]{
            background: ${colorConversion.getLightColor(
							"#FBA71A",
							colorLightLevel
						)};
            color: #FBA71A;
          }
          `;
	},
	/**
	 * 滚动事件
	 * @param isPrev
	 * @param pageDOM
	 * @param pageCommentList
	 * @returns
	 */
	scrollEvent(
		isNext: boolean,
		pageDOM: Document,
		pageCommentList: {
			commentList: any;
			userList: any;
		}
	) {
		log.info("成功获取评论和楼中楼评论");
		let comments = Array.from(
			pageDOM.querySelectorAll<HTMLDivElement>(".l_post.l_post_bright")
		);
		if (TiebaComment.page == 1) {
			/* 为第一页时，去除第一个，也就是主评论 */
			comments.splice(0, 1);
		}
		if (isNext) {
			/* 正序 */
		} else {
			/* 逆序 */
			comments.reverse();
		}
		comments.forEach((ele) => {
			TiebaComment.insertNewCommentInnerElement(
				TiebaComment.getNewCommentInnerElement(ele, pageCommentList)
			);
			TiebaComment.floor_num++;
		});
		let $onlyLz = document.querySelector<HTMLDivElement>(".white-only-lz");
		if ($onlyLz && $onlyLz.classList.contains("white-only-lz-qx")) {
			document
				.querySelectorAll<HTMLDivElement>(".post-item")
				.forEach(($postItem) => {
					let landlord = $postItem.getAttribute("landlord");
					if (landlord == "0") {
						$postItem.classList.add("white-only-lz-none");
					}
				});
		}
		loadingView.hide();
		if (
			(isNext && TiebaComment.page >= TiebaComment.maxPage) ||
			(!isNext && TiebaComment.page <= 1)
		) {
			log.info("已加载所有的评论");
			loadingView.setText("已加载所有的评论");
			loadingView.hide();
			TiebaComment.removeScrollListener();
			return;
		}
		if (isNext) {
			TiebaComment.page++;
		} else {
			TiebaComment.page--;
		}
		TiebaComment.triggerScrollEvent();
	},
	/**
	 * 主动触发滚动事件
	 */
	triggerScrollEvent() {
		setTimeout(() => {
			document.dispatchEvent(new Event("scroll"));
		}, 400);
	},
	/**
	 * scroll事件触发 自动加载下一页的评论
	 */
	nextPageScrollEvent: async (event: Event) => {
		if ((event as any).jsTrigger) {
			/* js主动触发 */
		} else if (!utils.isNearBottom(TiebaComment.isNearBottomValue)) {
			return;
		} else if (TiebaSearch.isShowSearchContainer()) {
			return;
		}
		loadingView.setText("Loading...", true);
		loadingView.show();
		let timeStamp = Date.now();
		let nextPageUrl = TiebaUrlApi.getPost(
			`${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
		);
		let nextPageAllCommentUrl = TiebaUrlApi.getPost(
			`totalComment?t=${timeStamp}&tid=${TiebaComment.param_tid}&fid=${TiebaComment.param_forum_id}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
		);
		let pageCommentInfo = await TiebaComment.getPageComment(nextPageUrl);
		if (!pageCommentInfo.success) {
			loadingView.setHTML(
				`<a href="${pageCommentInfo.data}" target="_blank">触发百度安全验证，点击前往验证</a>`
			);
			return;
		}
		let pageDOM = pageCommentInfo.data as Document;
		let pageCommentList = await TiebaComment.getPageCommentList(
			nextPageAllCommentUrl
		);
		if (
			pageCommentList == null ||
			(pageCommentList.commentList && !pageCommentList.commentList)
		) {
			loadingView.setText("获取评论失败");
			log.error("获取评论失败");
			TiebaComment.removeScrollListener();
			return;
		}
		TiebaComment.scrollEvent(true, pageDOM, pageCommentList);
	},
	/**
	 * scroll事件触发 自动加载上一页的评论
	 */
	prevPageScrollEvent: async (event: Event) => {
		if ((event as any).jsTrigger) {
			/* js主动触发 */
		} else if (!utils.isNearBottom(TiebaComment.isNearBottomValue)) {
			return;
		} else if (TiebaSearch.isShowSearchContainer()) {
			return;
		}
		loadingView.setText("Loading...", true);
		loadingView.show();
		let timeStamp = Date.now();
		let pageUrl = TiebaUrlApi.getPost(
			`${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
		);
		let pageAllCommentUrl = TiebaUrlApi.getPost(
			`totalComment?t=${timeStamp}&tid=${TiebaComment.param_tid}&fid=${TiebaComment.param_forum_id}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
		);
		let pageCommentInfo = await TiebaComment.getPageComment(pageUrl);
		if (!pageCommentInfo.success) {
			loadingView.setHTML(
				`<a href="${pageCommentInfo.data}" target="_blank">触发百度安全验证，点击前往验证</a>`
			);
			return;
		}
		let pageDOM = pageCommentInfo.data as Document;
		let pageCommentList = await TiebaComment.getPageCommentList(
			pageAllCommentUrl
		);
		if (
			pageCommentList == null ||
			(pageCommentList.commentList && !pageCommentList.commentList)
		) {
			loadingView.setText("评论数据获取失败");
			log.error("评论数据获取失败");
			return;
		}
		TiebaComment.scrollEvent(false, pageDOM, pageCommentList);
	},
	/**
	 * 设置自动加载下一页的scrol事件
	 */
	setNextPageScrollListener() {
		TiebaComment.funcLock = new utils.LockFunction(
			TiebaComment.nextPageScrollEvent,
			this
		);
		document.addEventListener("scroll", TiebaComment.funcLock.run);
		utils.dispatchEvent(document, "scroll", { jsTrigger: true });
		log.success("scroll监听事件【下一页】");
	},
	/**
	 * 设置自动加载上一页的scrol事件
	 */
	setPrevPageScrollListener() {
		TiebaComment.funcLock = new utils.LockFunction(
			TiebaComment.prevPageScrollEvent,
			this
		);
		document.addEventListener("scroll", TiebaComment.funcLock.run);
		utils.dispatchEvent(document, "scroll", { jsTrigger: true });
		log.success("scroll监听事件【上一页】");
	},
	/**
	 * 移除scoll事件
	 */
	removeScrollListener() {
		if (TiebaComment.funcLock) {
			document.removeEventListener("scroll", TiebaComment.funcLock.run);
			log.success("取消绑定scroll", "#f400ff");
		}
	},
	/**
	 * 获取时间差
	 * @param timeStr
	 */
	getDifferTime(timeStr: string) {
		/* 结束时间 */
		let currentTime = new Date();
		/* 时间差的毫秒数 */
		let timeDifference =
			currentTime.getTime() - new Date(timeStr.replace(/-/g, "/")).getTime();

		/* ------------------------------ */

		/* 计算出相差天数 */
		let days = Math.floor(timeDifference / (24 * 3600 * 1000));
		if (days > 0) {
			timeStr = days + "天前";
		} else {
			/* 计算天数后剩余的毫秒数 */
			let leave1 = timeDifference % (24 * 3600 * 1000);
			/* 计算出小时数 */
			let hours = Math.floor(leave1 / (3600 * 1000));
			if (hours > 0) {
				timeStr = hours + "小时前";
			} else {
				/* 计算相差分钟数 */
				let leave2 = leave1 % (3600 * 1000);
				/* 计算小时数后剩余的毫秒数 */
				let minutes = Math.floor(leave2 / (60 * 1000));
				if (minutes > 0) {
					timeStr = minutes + "分钟前";
				} else {
					/* 计算相差秒数 */
					let leave3 = leave2 % (60 * 1000);
					/* 计算分钟数后剩余的毫秒数 */
					let seconds = Math.round(leave3 / 1000);
					timeStr = seconds + "秒前";
				}
			}
		}
		return timeStr;
	},
	/**
	 * 根据dom获取需要插入的评论的html
	 * @param element
	 * @param pageCommentList
	 */
	getNewCommentInnerElement: (
		element: HTMLElement,
		pageCommentList: PageComment
	) => {
		/**
		 * 解析评论底部信息
		 * @param ele
		 * @returns
		 */
		function parseCommentBottomInfo(ele: HTMLElement) {
			let $tailWrap = ele.querySelector(".post-tail-wrap");
			/* 获取用户ip位置 */
			let userIpPosition = "";
			/* 获取用户楼层 */
			let userFloor = "";
			/* 获取用户评论时间 */
			let userCommentTime = "1970-1-1 00:00:00";
			if ($tailWrap) {
				let childrenElement = $tailWrap.querySelectorAll("span.tail-info");
				let childSpanElementList = Array.from(
					$tailWrap.querySelectorAll("span")
				);
				for (const childSpanElement of childSpanElementList) {
					if (childSpanElement.hasAttribute("class")) {
						continue;
					}
					if (!childSpanElement?.textContent?.match("来自|禁言")) {
						userIpPosition = childSpanElement.textContent as string;
						break;
					}
				}
				if (childrenElement.length == 3 || childrenElement.length == 2) {
					userFloor = childrenElement[childrenElement.length - 2]
						.textContent as string;
					userCommentTime = childrenElement[childrenElement.length - 1]
						.textContent as string;
				} else {
					log.error("获取PC端的数据楼层和时间信息失败👇");
					log.error(childrenElement);
					userFloor = "";
					userCommentTime = "";
				}
			} else {
				$tailWrap = element.querySelector(".acore_reply_tail");
				userIpPosition = data_field["content"]["ip_address"];
				/* 评论楼层 */
				userFloor = data_field["content"]["post_no"];
				userCommentTime = data_field["content"]["date"];
			}
			/* 对评论时间进行转换 */
			userCommentTime = TiebaComment.getDifferTime(userCommentTime);

			return {
				userFloor: parseInt(userFloor),
				userIpPosition,
				userCommentTime,
			};
		}
		let data_field = utils.toJSON(element.getAttribute("data-field"));
		if (Object.keys(data_field).length == 0) {
			return;
		}
		/* 获取用户id */
		let user_id = data_field["author"]["user_id"];
		/* 获取楼主id */
		let builderId = data_field["content"]["builderId"];

		/* 获取用户评论 */
		let userComment = data_field["content"]["content"] as string;
		if (!userComment) {
			/* 如果评论获取为空的话，可能是因为【该楼层疑似违规已被系统折叠】，直接获取innerHTML */
			userComment =
				element.querySelector<HTMLDivElement>(".d_post_content")?.innerHTML ||
				"";
		}
		/* 获取用户主页 */
		let userHomeUrl = element
			.querySelector(".p_author_face")
			?.getAttribute("href");
		/* 用户真实的名字 */
		let userName = data_field["author"]["user_name"] as string;
		/* 用户显示出的名字 */
		let $userShowName = element.querySelector<HTMLDivElement>(".p_author_name");
		let userShowName =
			$userShowName?.textContent ||
			element
				.querySelector<HTMLImageElement>(".p_author_face > img")
				?.getAttribute("username") ||
			userName;
		/* 获取用户头像 */
		let userAvatar =
			element
				.querySelector<HTMLImageElement>(".p_author_face > img")
				?.getAttribute("data-tb-lazyload") ||
			element.querySelector<HTMLImageElement>(".p_author_face > img")?.src ||
			"";

		/* 判断是否楼主 */
		let is_landlord = 0;
		if (user_id == builderId) {
			is_landlord = 1;
		}
		/* 用户本吧等级 */
		let userForumLevel = -1;
		/* 用户本吧等级的名字 */
		let userForumLevelName = void 0 as unknown as string;
		if (element.querySelector<HTMLDivElement>(".user_badge .d_badge_lv")) {
			userForumLevel = parseInt(
				element.querySelector<HTMLDivElement>(".user_badge .d_badge_lv")
					?.textContent as string
			);
		}
		if (element.querySelector<HTMLDivElement>(".user_badge .d_badge_title")) {
			userForumLevelName = element.querySelector<HTMLDivElement>(
				".user_badge .d_badge_title"
			)?.textContent as string;
		}
		let { userFloor, userIpPosition, userCommentTime } =
			parseCommentBottomInfo(element);

		/* 如果头像地址以//开头，则加上https */
		if (userAvatar.startsWith("//")) {
			userAvatar = "https:" + userAvatar;
		}
		let userAvatarObj = new URL(userAvatar);
		let userPortrait = data_field["author"]["portrait"];
		/* 如果不存在用户id，那么从头像地址中获取用户id */
		if (!userPortrait) {
			let userAvatarObjMatch = userAvatarObj.pathname.match(/\/item\/(.+)/i);
			if (userAvatarObjMatch) {
				userPortrait = userAvatarObjMatch[1];
			}
		}
		if (PopsPanel.getValue("baidu_tieba_shield_commnets_baodating")) {
			/* 屏蔽贴吧包打听 */
			if (user_id != null && user_id.toString() === "6421022725") {
				return;
			} else if (
				userPortrait != null &&
				userPortrait.toString().includes("tb.1.4c46bb61.pOGb2yswbMUBKOIUpteLvg")
			) {
				return;
			}
		}
		let post_id = data_field["content"]["post_id"];
		let newUserCommentHTML = "";
		if (pageCommentList.commentList[post_id]) {
			Array.from(pageCommentList.commentList[post_id].comment_info).forEach(
				(result) => {
					let u_user_name = result["show_nickname"];
					let u_content = result["content"];
					let u_user_id = result["user_id"];
					let u_user_portrait = pageCommentList.userList[u_user_id]["portrait"];
					let u_user_home_url = "/home/main?id=" + u_user_portrait;
					if (builderId == u_user_id) {
						u_user_name += /*html*/ `<svg data-v-5b60f30b="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>`;
					}
					/* 每一项楼中楼的回复html */
					let lzlCommentItemHTML = /*html*/ `
					<div data-v-5b60f30b="" class="lzl-post-item" style="">
						<div data-v-5b60f30b="" class="text-box">
							<span data-v-5b60f30b="" class="link username" data-home-url="${u_user_home_url}">${u_user_name}</span>
							<div data-v-ab14b3fe="" data-v-5b60f30b="" class="thread-text lzl-post-text">
								<span data-v-ab14b3fe="" class="text-content">${u_content}</span>
							</div>
						</div>
					</div>`;
					newUserCommentHTML += lzlCommentItemHTML;
				}
			);
		}

		if (newUserCommentHTML) {
			newUserCommentHTML = /*html*/ `
            <div data-v-5b60f30b="" data-v-74eb13e2="" class="lzl-post lzl-post" style="max-height: 2.35rem;overflow-y: hidden;">
              ${newUserCommentHTML}
            </div>
            `;
		}
		let newCommentElement = DOMUtils.createElement(
			"div",
			{
				className: "post-item",
				innerHTML: /*html*/ `
				<div
					data-v-188c0e84=""
					data-v-74eb13e2=""
					class="user-line-wrapper user-line-post">
					<div data-v-188c0e84="" class="user-line">
						<div data-v-188c0e84="" class="tbfe-1px-border avatar" data-home-url="${userHomeUrl}"
							data-src="${userAvatar}"
							lazy="loaded"
							style="background-image: url(${userAvatar});"></div>
						<div data-v-188c0e84="" class="user-info">
							<div data-v-188c0e84="" class="username" data-home-url="${userHomeUrl}">
							${userShowName}
							${
								is_landlord
									? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>`
									: ""
							}
							${
								userForumLevel &&
								userForumLevel >= 0 &&
								PopsPanel.getValue("baidu_tieba_show_forum_level")
									? `
								<div class="forum-level-container">
									<span class="forum-level" data-level="${userForumLevel}">Lv.${userForumLevel} ${userForumLevelName}</span>
								</div>`
									: ""
							}
							</div>
						</div>
					</div>
					<div class="user-comment-handler">
						<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2304"><path d="M448 191.004444a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m0 320a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m0 320a64 64 0 1 0 128 0 64 64 0 0 0-128 0z" fill="#000000" fill-opacity=".65" p-id="2305"></path>
						</svg>
					</div>
				</div>
				<div data-v-74eb13e2="" class="content">
					<p data-v-ab14b3fe="" data-v-74eb13e2="" class="thread-text post-text">
						<span data-v-ab14b3fe="" class="text-content">
							${userComment}
						</span>
					</p>
					<p data-v-188c0e84="" class="desc-info">
						<span data-v-188c0e84="" class="floor-info">
							第${userFloor}楼
						</span>
						<span data-v-188c0e84="" class="time" style="margin-right: .08rem;">
							${userCommentTime}
						</span>
						<span data-v-188c0e84="" class="ip">
							${userIpPosition}
						</span>
					</p>
					${newUserCommentHTML}
					<div data-v-74eb13e2="" class="post-split-line"></div>
				</div>
              `,
				"data-whitesev": {
					userId: user_id,
					userPostId: post_id,
					userPortrait: userPortrait,
					userFloor: userFloor,
					userComment: userComment,
					userHomeUrl: userHomeUrl,
					userForumLevel: userForumLevel,
					userForumLevelName: userForumLevelName,
					userAvatar: userAvatar,
					userName: userName,
					userShowName: userShowName,
					userCommentTime: userCommentTime,
					userIpPosition: userIpPosition,
					pageCommentList: pageCommentList,
				} as FloorCommentData,
			},
			{
				"data-v-74eb13e2": "",
				"data-v-602e287c": "",
				"data-floor": TiebaComment.floor_num,
				landlord: is_landlord,
			}
		);
		/* 过滤掉<embed>该元素没啥作用 */
		newCommentElement
			.querySelectorAll(".text-content embed.BDE_Music")
			.forEach((ele) => ele.remove());
		return newCommentElement;
	},
	/**
	 * 根据评论的html插入页面中
	 * @param newCommentDOM
	 */
	insertNewCommentInnerElement: (newCommentDOM: HTMLDivElement | undefined) => {
		if (newCommentDOM == null) {
			return;
		}

		/* 评论，点击头像跳转到这个人的空间 */
		newCommentDOM
			.querySelectorAll(".tbfe-1px-border.avatar")
			.forEach((item) => {
				if (item.hasAttribute("data-home-url")) {
					(item as HTMLDivElement).onclick = function (event) {
						utils.preventEvent(event);
						window.open(item.getAttribute("data-home-url") as string, "_blank");
					};
				}
			});
		/* 评论，点击名字跳转到这个人的空间 */
		newCommentDOM.querySelectorAll(".user-info .username").forEach((item) => {
			if (item.hasAttribute("data-home-url")) {
				(item as HTMLDivElement).onclick = function (event) {
					utils.preventEvent(event);
					window.open(item.getAttribute("data-home-url") as string, "_blank");
				};
			}
		});
		/* 评论的回复，点击头像跳转到这个人的空间 */
		/* newCommentDOM.querySelectorAll(".link.username").forEach((item) => {
          if (item.hasAttribute("data-home-url")) {
            item.onclick = function () {
              window.open(item.getAttribute("data-home-url"), "_blank");
            };
          }
        }); */
		/* 评论的回复的回复，点击头像跳转到这个人的空间 */
		newCommentDOM.querySelectorAll("a.at").forEach((item) => {
			item.removeAttribute("onclick");
			item.removeAttribute("onmouseover");
			item.removeAttribute("onmouseout");
			if (item.hasAttribute("portrait")) {
				item.setAttribute(
					"href",
					"/home/main?id=" + item.getAttribute("portrait")
				);
			}
		});

		if (document.querySelector(".post-cut-guide")) {
			DOMUtils.before(
				document.querySelector(".post-cut-guide") as HTMLElement,
				newCommentDOM
			);
		} else {
			/* 老版帖子 */
			DOMUtils.append(
				document.querySelector(".pb-page-wrapper") as HTMLElement,
				newCommentDOM
			);
		}
		/* 如果评论存在不可见的，添加一个 查看全部xx条回复 */
		let lzlPostElement = newCommentDOM.querySelector(
			".lzl-post.lzl-post"
		) as HTMLElement;
		if (lzlPostElement) {
			let lzlPostElementHeight = DOMUtils.height(lzlPostElement);
			let lzlPostItemList = Array.from(
				lzlPostElement.querySelectorAll(".lzl-post-item")
			) as HTMLElement[];
			let currentLzlPostElementHeight = 0;
			let addSeeAllReply = false;
			for (const lzlPostItem of lzlPostItemList) {
				currentLzlPostElementHeight += DOMUtils.outerHeight(lzlPostItem);
				if (currentLzlPostElementHeight > lzlPostElementHeight) {
					addSeeAllReply = true;
					break;
				}
			}
			if (addSeeAllReply) {
				let lzlItemData = (newCommentDOM as any)[
					"data-whitesev"
				] as FloorCommentData;
				let lzlCommentNums =
					lzlItemData["pageCommentList"]["commentList"][
						lzlItemData["userPostId"]
					]["comment_num"];
				let seeAllReplyElement = DOMUtils.createElement(
					"div",
					{
						className: "whitesev-see-all-reply",
						innerHTML: /*html*/ `查看全部${lzlCommentNums}条回复`,
					},
					{
						style: "color: #6251B3;margin-top: 5px 0 0 10px;",
					}
				);
				// 查看全部xx条回复的点击事件
				DOMUtils.on(seeAllReplyElement, "click", (event) => {
					utils.preventEvent(event);
					lzlPostElement.click();
				});
				DOMUtils.after(lzlPostElement, seeAllReplyElement);
			}
			DOMUtils.on(
				lzlPostElement,
				"click",
				(event) => {
					utils.preventEvent(event);
					log.success(`点击查看全部回复`);
					TiebaComment.showReplyDialog(lzlPostElement);
				},
				{
					capture: true,
				}
			);
		}
	},
	/**
	 * 初始化评论的弹窗的所有设置包括CSS
	 */
	initReplyDialogCSS() {
		log.success("初始化回复的弹窗");
		addStyle(/*css*/ `
		/* 主 */
		#whitesev-reply-dialog{
			z-index: 99999;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		/* 背景 */
		.whitesev-reply-dialog-bg{
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,.5);
			transition-timing-function: ease-in;
			transition-duration: .1s;
			transition-property: background-color,opacity;
		}
		/* 内容容器 */
		.whitesev-reply-dialog-sheet{
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: 2;
			width: 100%;
			background-color: #fff;
			transition: .1s ease-in;
			transition-property: transform;
			transform: translate(0,100%);
			border-radius: 10px 10px 0px 0px;
		}
		/* 关闭 */
		.whitesev-reply-dialog-close{
			position: absolute;
		}
		/* 标题 */
		.whitesev-reply-dialog-sheet-title{
			display: block;
			width: 100%;
			box-sizing: border-box;
			padding: 15px;
			color: #222;
			line-height: 20px;
			text-align: center;
			border-bottom: 1px solid #dbdbdb;
		}
		/* 内容 */
		.whitesev-reply-dialog-sheet-content{
			height: 100%;
			overflow-y: auto;
		}
		/* 内容中主内容和其它内容 */
		.whitesev-reply-dialog-sheet-main-content,
		.whitesev-reply-dialog-sheet-other-content{
			margin: 20px 10px 10px 10px;
		}
		/* 内容中其它内容 */
		.whitesev-reply-dialog-sheet-ohter-content{

		}
		/* 弹出 */
		#whitesev-reply-dialog[data-on] .whitesev-reply-dialog-bg{
			transition-timing-function: ease-in;
			transition-duration: .2s;
		}
		#whitesev-reply-dialog[data-on] .whitesev-reply-dialog-bg{
			background-color: rgba(0,0,0,.5);
		}
		#whitesev-reply-dialog[data-on] .whitesev-reply-dialog-sheet{
			transition: .2s ease-in;
			transform: translate(0,0);
		}

		/* 头像 */
		.whitesev-reply-dialog-avatar {
			position: relative;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			width: .36rem;
			height: .36rem;
			margin-right: .08rem;
			border-radius: 50%;
			background-repeat: no-repeat;
			background-position: 50%;
			background-size: cover;
			-webkit-box-flex: 0;
			-moz-box-flex: 0;
			-webkit-flex: none;
			-ms-flex: none;
			flex: none;
		}
		
		/* 用户行 */
		.whitesev-reply-dialog-user-line {
			display: flex;
			align-items: center;
		}
		.whitesev-reply-dialog-user-line,
		.whitesev-reply-dialog-user-comment,
		.whitesev-reply-dialog-user-desc-info {
			margin-bottom: 8px;
		}
		.whitesev-reply-dialog-user-line-wrapper{
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		/* 评论 */
		.whitesev-reply-dialog-user-comment {
			margin-left: .44rem;
		}
		/* 评论的贴吧自带表情 */
		.whitesev-reply-dialog-user-comment img.BDE_Smiley{
			width: .2rem;
			height: .2rem;
			vertical-align: middle;
		}
		/* 评论的贴吧自己上传的图片 */
		.whitesev-reply-dialog-user-comment img:not(.BDE_Smiley){
			margin-top: 8px;
			max-width: 350px;
			cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
			height: auto;
			width: auto;
			width: 100%;
		}
		/* 底部信息 */
		.whitesev-reply-dialog-user-desc-info{
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			margin-left: .44rem;
			border-bottom: 1px solid #dfdfdf;
		}
		.whitesev-reply-dialog-user-desc-info span{
			margin-right: .08rem;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-moz-box-align: center;
			-webkit-align-items: center;
			-moz-align-items: center;
			-ms-flex-align: center;
			align-items: center;
			font-size: .12rem;
			line-height: .18rem;
			overflow: hidden;
			white-space: nowrap;
			-o-text-overflow: ellipsis;
			text-overflow: ellipsis;
			color: #a3a2a8;
		}
		/* 第xx楼 */
		.whitesev-reply-dialog-user-desc-info span[data-floor-info]::before {
			content:"第"
		}
		.whitesev-reply-dialog-user-desc-info span[data-floor-info]::after {
			content:"楼"
		}
		/* 中间行 */
		.whitesev-reply-dialog-sheet-main-content-bottom-line {
			background: #ebebeb;
			height: 6px;
		}
		/* 隐藏顶部主回复的底部边框 */
		.whitesev-reply-dialog-sheet-main-content .whitesev-reply-dialog-user-desc-info{
			border-bottom: none;
		}
		/* 其它回复中的最后一个 */
		.whitesev-reply-dialog-sheet-other-content > div:last-child{
		
		}
		/* 其它回复的每一项 */
		.whitesev-reply-dialog-sheet-other-content-item{
			margin-top: 12px;
		}
		/* 其它回复的底部边框 */
		.whitesev-reply-dialog-sheet-other-content-item .whitesev-reply-dialog-user-desc-info{
			padding-bottom: 12px;
		}
		/* xx条回复 */
		.whitesev-reply-dialog-sheet-comment-num {
			margin-top: -10px;
			margin-bottom: 20px;
		}
		/* 查看全部xx条回复 */
		.whitesev-see-all-reply{
			padding-top: 10px;
			padding-left: 10px;
		}`);
	},
	/**
	 * 获取楼中楼评论的元素
	 */
	getLzlItemElement(data: {
		portrait: string;
		avatar: string;
		show_nickname: string;
		content: string;
		isLandlord?: boolean;
		userForumLevel?: number;
		time?: Date | number | string;
		ip?: string;
	}) {
		let $otherCommentItem = document.createElement("div");
		$otherCommentItem.className =
			"whitesev-reply-dialog-sheet-other-content-item whitesev-reply-dialog-content-item";
		$otherCommentItem.innerHTML = /*html*/ `
		<div class="whitesev-reply-dialog-user-line-wrapper" data-portrait="${
			data.portrait
		}">
			<div class="whitesev-reply-dialog-user-line" data-portrait="${data.portrait}">
				<div class="whitesev-reply-dialog-avatar" style="background-image: url(${
					data.avatar
				});"></div>
				<div class="whitesev-reply-dialog-user-info">
					<div class="whitesev-reply-dialog-user-username">
					${data.show_nickname}
					${
						data.isLandlord
							? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>`
							: ""
					}
					${
						data.userForumLevel &&
						data.userForumLevel >= 0 &&
						PopsPanel.getValue("baidu_tieba_show_forum_level")
							? `
						<div class="forum-level-container">
							<span class="forum-level" data-level="${data.userForumLevel}">Lv.${data.userForumLevel}</span>
						</div>`
							: ""
					}
					</div>
				</div>
			</div>
			<div class="user-comment-handler">
				<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2304"><path d="M448 191.004444a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m0 320a64 64 0 1 0 128 0 64 64 0 0 0-128 0z m0 320a64 64 0 1 0 128 0 64 64 0 0 0-128 0z" fill="#000000" fill-opacity=".65" p-id="2305"></path>
				</svg>
			</div>
		</div>
		<div class="whitesev-reply-dialog-user-comment">${data.content}</div>
		<div class="whitesev-reply-dialog-user-desc-info">
			<span data-time="">${data.time}</span>
			<span data-ip="">${data.ip}</span>
		</div>
		`;
		return $otherCommentItem;
	},
	/**
	 * 显示评论的弹窗
	 * @param element
	 */
	showReplyDialog(element: HTMLElement) {
		let contentElement = element.closest("div.post-item") as any;
		let data = {} as FloorCommentData;
		if (contentElement && contentElement["data-whitesev"]) {
			data = contentElement["data-whitesev"];
		}
		log.success(["data-whitesev数据", data]);
		/* 当前评论数据信息JSON */
		let currentCommentData =
			data["pageCommentList"]["commentList"][data["userPostId"]][
				"comment_info"
			];
		log.success(["当前评论数据信息JSON", currentCommentData]);
		/* 楼中楼评论的总共数量 */
		let currentCommentListNum =
			data["pageCommentList"]["commentList"][data["userPostId"]]["comment_num"];
		/* 用户信息JSON */
		let userList = data["pageCommentList"]["userList"];
		let mainUserAvatar = data["userAvatar"];

		let userAvatarHostName = new URL(mainUserAvatar).hostname;
		let userAvatarPath = new URL(mainUserAvatar).pathname.split("/")[1];
		let landlordInfo = TiebaCore.getLandlordInfo();
		log.success(["头像加密值路径是", userAvatarPath]);
		log.success(["本帖楼主的信息", landlordInfo]);

		let $ohterCommentFragment = document.createDocumentFragment();
		currentCommentData.forEach((item) => {
			/* 根据user_id获取用户映射的信息 */
			let itemUserInfo = userList[item["user_id"]];
			/* 用户id值 */
			let userPortrait = itemUserInfo["portrait"];
			/* 判断是否是楼主 */
			let isLandlord = Boolean(
				landlordInfo && landlordInfo.id === item["user_id"]
			);
			/* 获取时间差 */
			let itemUserCommentTime =
				utils.getDaysDifference(item["now_time"] * 1000, void 0, "auto") + "前";
			/* 用户ip？好像没有 */
			let itemUserCommentIp = "";
			if (item["location"] && item["location"]["name"]) {
				itemUserCommentIp = item["location"]["name"];
			}
			if (userAvatarHostName === "imgsa.baidu.com") {
				userAvatarHostName = "gss0.bdstatic.com";
				userAvatarPath = "6LZ1dD3d1sgCo2Kml5_Y_D3";
			}
			let itemUserAvatar = `https://${userAvatarHostName}/${userAvatarPath}/sys/portrait/item/${userPortrait}`;
			if (userAvatarPath === "sys") {
				itemUserAvatar = itemUserAvatar.replace(
					"/sys/sys/portrait/item/",
					"/sys/portrait/item/"
				);
			}
			/* 获取用户的关注的吧 */
			let userLikeForum = itemUserInfo?.["card"]?.["like_forum"];
			let lzlUserForumLevel = -1;
			if (userLikeForum) {
				Object.keys(userLikeForum).forEach((itemForumLevel) => {
					let itemForumInfo = userLikeForum[itemForumLevel];
					if (
						itemForumInfo["forum_list"] &&
						Array.isArray(itemForumInfo["forum_list"]) &&
						itemForumInfo["forum_list"].includes(TiebaData.forumName!)
					) {
						lzlUserForumLevel = itemForumLevel as unknown as number;
					}
				});
			}

			let $otherCommentItem = this.getLzlItemElement({
				portrait: userPortrait,
				avatar: itemUserAvatar,
				isLandlord: isLandlord,
				userForumLevel: lzlUserForumLevel,
				show_nickname: item["show_nickname"],
				content: item["content"],
				time: itemUserCommentTime,
				ip: itemUserCommentIp,
			});
			($otherCommentItem as any)["data-lzl-item"] = {
				data: item,
				userInfo: itemUserInfo,
				portrait: userPortrait,
			} as LzlItemData;
			$ohterCommentFragment.appendChild($otherCommentItem);
		});
		log.success(["显示评论的弹窗", data]);
		let dialog = DOMUtils.createElement("div", {
			id: "whitesev-reply-dialog",
			innerHTML: /*html*/ `
            <div class="whitesev-reply-dialog-bg"></div>
            <div class="whitesev-reply-dialog-sheet" style="height: ${
							document.documentElement.clientHeight * 0.92
						}px;">
              <div class="whitesev-reply-dialog-sheet-title">
                <div class="whitesev-reply-dialog-close">
                  <svg t="1694574625629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2306" width="20" height="20"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z" fill="#444444" p-id="2307"></path></svg>
                </div>
                ${data.userFloor}楼的回复
              </div>
              <div class="whitesev-reply-dialog-sheet-content">
              <div class="whitesev-reply-dialog-sheet-main-content whitesev-reply-dialog-content-item">
                  <div class="whitesev-reply-dialog-user-line" data-portrait="${
										data["userPortrait"]
									}">
                    <div class="whitesev-reply-dialog-avatar" style="background-image: url(${
											data["userAvatar"]
										});"></div>
                    <div class="whitesev-reply-dialog-user-info">
                      <div class="whitesev-reply-dialog-user-username">${
												data["userShowName"] || data["userName"]
											}</div>
                      ${
												data["userForumLevel"] &&
												data["userForumLevel"] >= 0 &&
												PopsPanel.getValue("baidu_tieba_show_forum_level")
													? `
                          <div class="forum-level-container">
                            <span class="forum-level" data-level="${data["userForumLevel"]}">Lv.${data["userForumLevel"]} ${data["userForumLevelName"]}</span>
                          </div>`
													: ""
											}
                    </div>
                  </div>
                  <div class="whitesev-reply-dialog-user-comment">${
										data["userComment"]
									}</div>
                  <div class="whitesev-reply-dialog-user-desc-info" style="border-bottom: none;">
                      <span data-floor-info="">${data["userFloor"]}</span>
                      <span data-time="">${data["userCommentTime"]}</span>
                      <span data-ip="">${data["userIpPosition"]}</span>
                  </div>
              </div>
              <div class="whitesev-reply-dialog-sheet-main-content-bottom-line"></div>
              <div class="whitesev-reply-dialog-sheet-other-content">
                <div class="whitesev-reply-dialog-sheet-comment-num">${currentCommentListNum}条回复</div>
              </div>
              </div>
            </div>
            `,
		});
		(dialog as any)["data-whitesev"] = data;
		let dialogTitleElement = dialog.querySelector<HTMLDivElement>(
			".whitesev-reply-dialog-sheet-title"
		)!;
		let dialogContentElement = dialog.querySelector<HTMLDivElement>(
			".whitesev-reply-dialog-sheet-content"
		)!;
		let dialogOhterContentElement = dialog.querySelector<HTMLDivElement>(
			".whitesev-reply-dialog-sheet-other-content"
		)!;
		dialogOhterContentElement.appendChild($ohterCommentFragment);

		let isClosingDialog = false;
		/**
		 * 设置浏览器历史地址
		 * @param event
		 */
		function popstateEvent(event: Event) {
			utils.preventEvent(event);
			if (isClosingDialog) {
				return;
			}
			log.success("触发popstate事件");
			removePopStateEvent();
		}

		/**
		 * 设置popstate事件
		 */
		function setPopStateEvent() {
			/* 监听地址改变 */
			log.success("监听popstate事件");
			window.history.pushState({}, "", "#/seeLzlReply");
			DOMUtils.on(window, "popstate", popstateEvent, {
				capture: true,
			});
		}

		/**
		 * 允许浏览器后退并关闭小窗
		 */
		async function removePopStateEvent() {
			isClosingDialog = true;
			log.success("location地址后退并关闭评论弹窗");
			closeDialogByUrlChange();
			while (true) {
				if (globalThis.location.hash.endsWith("seeLzlReply")) {
					log.info("后退！");
					globalThis.history.back();
					// VueUtils.getVue(TiebaComment.vueRootView)?.$router.back();
					await utils.sleep(150);
				} else {
					break;
				}
			}
			log.success("停止popstate事件监听");
			DOMUtils.off(window, "popstate", popstateEvent, { capture: true });
			isClosingDialog = false;
		}

		/**
		 * 关闭楼中楼弹窗
		 * @param event 事件
		 */
		function closeDialog(event: MouseEvent) {
			dialog.removeAttribute("data-on");
			DOMUtils.on(dialog, utils.getTransitionEndNameList() as any, function () {
				DOMUtils.off(dialog, utils.getTransitionEndNameList() as any);
				log.success("关闭楼中楼回复弹窗_click");
				dialog.remove();
				if (PopsPanel.getValue("baidu_tieba_lzl_ban_global_back")) {
					removePopStateEvent();
				}
			});
		}
		/**
		 * 关闭楼中楼弹窗(来自url改变)
		 */
		function closeDialogByUrlChange() {
			dialog.removeAttribute("data-on");
			DOMUtils.on(dialog, utils.getTransitionEndNameList() as any, function () {
				DOMUtils.off(dialog, utils.getTransitionEndNameList() as any);
				log.success("关闭楼中楼回复弹窗_urlchange");
				dialog.remove();
			});
		}
		/* 关闭图标的点击事件 */
		DOMUtils.on(
			dialog.querySelector(".whitesev-reply-dialog-close"),
			"click",
			closeDialog
		);
		/* 点击遮罩层则关闭弹窗 */
		DOMUtils.on(
			dialog.querySelector(".whitesev-reply-dialog-bg"),
			"click",
			closeDialog
		);
		/* 处理评论的头像点击新标签页打开主页 */
		DOMUtils.on(
			dialog,
			"click",
			".whitesev-reply-dialog-avatar",
			function (event) {
				utils.preventEvent(event);
				window.open(
					"/home/main?id=" +
						(event.target as HTMLDivElement)
							?.closest(".whitesev-reply-dialog-user-line")
							?.getAttribute("data-portrait"),
					"_blank"
				);
			}
		);
		/* 处理评论的名字点击新标签页打开主页 */
		DOMUtils.on(
			dialog,
			"click",
			".whitesev-reply-dialog-user-info",
			function (event) {
				utils.preventEvent(event);
				window.open(
					"/home/main?id=" +
						(event.target as HTMLDivElement)
							?.closest(".whitesev-reply-dialog-user-line")
							?.getAttribute("data-portrait"),
					"_blank"
				);
			}
		);
		/* 去除楼中楼回复@的超链接错误跳转 */
		dialog
			.querySelectorAll(".whitesev-reply-dialog-user-comment a[portrait]")
			.forEach((item) => {
				item.setAttribute(
					"href",
					"/home/main?id=" + item.getAttribute("portrait")
				);
				item.removeAttribute("onclick");
				item.removeAttribute("onmouseover");
				item.removeAttribute("onmouseout");
			});
		const lzlLoadingView = new LoadingView(false);
		/* 初始页数为2 */
		let lzlPage = 2;
		/* 处理楼中楼的滚动加载更多回复 */
		async function lzlReplyCommentScrollEvent(event: Event) {
			let scrollElement = event.target as HTMLElement;
			if (
				scrollElement.scrollTop + scrollElement.clientHeight + 50 <
				scrollElement.scrollHeight
			) {
				return;
			}
			log.success("加载更多回复");
			lzlLoadingView.show();
			let replyInfo = await TiebaComment.getLzlCommentReply(
				TiebaComment.param_tid,
				data["userPostId"].toString(),
				lzlPage
			);
			log.success(["加载更多回复的数据", replyInfo]);
			if (replyInfo === "暂无更多回复") {
				log.error("暂无更多回复");
				lzlLoadingView.setText("暂无更多回复");
				DOMUtils.off(
					dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
					"scroll"
				);
				log.error("取消绑定楼中楼scroll监听事件【下一页】");
				return;
			} else if (typeof replyInfo === "string") {
				lzlLoadingView.setText(replyInfo);
				return;
			}
			let commentHTML = "";
			replyInfo["data"].forEach((item) => {
				/* 判断是否是楼主 */
				let isLandlord = false;
				if (landlordInfo) {
					// @ts-ignore
					if (landlordInfo.id === item["user_id"]) {
						isLandlord = true;
					} else if (
						utils.isNotNull(item["userPortrait"]) &&
						(landlordInfo.portrait as string).includes(item["userPortrait"])
					) {
						/* 用includes是因为landlordInfo.portrait获取到的后面可能会带时间参数?t=1660430754 */
						isLandlord = true;
					}
				}
				commentHTML += /*html*/ `
              <div class="whitesev-reply-dialog-sheet-other-content-item" data-lazy-load-level="true" data-username="${
								item["userName"]
							}">
                <div class="whitesev-reply-dialog-user-line" data-portrait="${
									item["userPortrait"]
								}">
                  <div class="whitesev-reply-dialog-avatar" style="background-image: url(${
										item["userAvatar"]
									});"></div>
                  <div class="whitesev-reply-dialog-user-info">
                    <div class="whitesev-reply-dialog-user-username">
                    ${item["userShowName"]}
                    ${
											isLandlord
												? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>`
												: ""
										}
                    </div>
                  </div>
                </div>
                <div class="whitesev-reply-dialog-user-comment">${
									item["userReplyContent"]
								}</div>
                <div class="whitesev-reply-dialog-user-desc-info">
                    <span data-time="">${item["userReplyTime"]}</span>
                    <span data-ip=""></span>
                </div>
              </div>
              `;
			});
			if (scrollElement.querySelector("." + loadingView.config.className)) {
				DOMUtils.before(
					scrollElement.querySelector(
						"." + loadingView.config.className
					) as HTMLDivElement,
					commentHTML
				);
			} else {
				DOMUtils.append(
					scrollElement.querySelector(
						".whitesev-reply-dialog-sheet-other-content"
					) as HTMLDivElement,
					commentHTML
				);
			}
			/* 懒加载用户本吧等级 */
			if (PopsPanel.getValue("baidu_tieba_show_forum_level")) {
				document
					.querySelectorAll(
						".whitesev-reply-dialog-sheet-other-content-item[data-lazy-load-level]"
					)
					.forEach(async (ele) => {
						if (!ele.hasAttribute("data-username")) {
							return;
						}
						let userInfo = await TieBaApi.getUserHomeInfo({
							un: ele.getAttribute("data-username") as string,
						});
						if (!userInfo) {
							return;
						}
						let grade = userInfo?.["honor"]?.["grade"];
						ele.removeAttribute("data-lazy-load-level");
						if (!grade) {
							return;
						}
						Object.keys(grade).forEach((likeForumLevel) => {
							let likeForumInfo = grade[likeForumLevel];
							if (
								likeForumInfo["forum_list"] &&
								Array.isArray(likeForumInfo["forum_list"]) &&
								likeForumInfo["forum_list"].includes(
									TiebaData.forumName as string
								)
							) {
								let $userInfo = ele.querySelector(
									".whitesev-reply-dialog-user-info"
								);
								DOMUtils.append(
									$userInfo as HTMLDivElement,
									/*html*/ `
                                    <div class="forum-level-container">
                                        <span class="forum-level" data-level="${likeForumLevel}">Lv.${likeForumLevel}</span>
                                    </div>`
								);
							}
						});
					});
			}
			/* 去除楼中楼回复@的超链接错误跳转 */
			scrollElement
				.querySelectorAll(".whitesev-reply-dialog-user-comment a[portrait]")
				.forEach((item) => {
					item.setAttribute(
						"href",
						"/home/main?id=" + item.getAttribute("portrait")
					);
					item.removeAttribute("onclick");
					item.removeAttribute("onmouseover");
					item.removeAttribute("onmouseout");
				});

			if (!replyInfo["nextPage"]) {
				log.error("暂无更多回复");
				lzlLoadingView.setText("暂无更多回复");
				DOMUtils.off(
					dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
					"scroll"
				);
				log.error("取消绑定楼中楼scroll监听事件【下一页】");
				return;
			}
			// @ts-ignore
			lzlPage = replyInfo["nextPage"];
		}
		let lzlScrollEventLock = new utils.LockFunction(
			lzlReplyCommentScrollEvent,
			this
		);
		/* 监听楼中楼内滚动 */
		DOMUtils.on(
			dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
			"scroll",
			lzlScrollEventLock.run
		);
		log.success("绑定楼中楼scroll监听事件【下一页】");
		/* 插入楼中楼弹窗 */
		document.body.appendChild(dialog);

		DOMUtils.append(
			dialog.querySelector(
				".whitesev-reply-dialog-sheet-other-content"
			) as HTMLDivElement,
			lzlLoadingView.getLoadingViewElement()
		);
		lzlLoadingView
			.getLoadingViewElement()
			.style.setProperty("color", "#c5c5c5");
		lzlLoadingView
			.getLoadingViewElement()
			.style.setProperty("font-size", "14px");
		lzlLoadingView.setText("加载更多");
		lzlLoadingView.hide();
		/* 延迟显示 */
		setTimeout(() => {
			dialog.setAttribute("data-on", "true");
			/* 修改根据标题高度设置内容margin-bottom */
			dialogContentElement.style.setProperty(
				"height",
				`calc(100% - ${DOMUtils.height(dialogTitleElement)}px)`
			);
			this.vueRootView = document.querySelector(
				".main-page-wrap"
			) as HTMLDivElement;
			log.success(["成功获取Vue根元素", VueUtils.getVue(this.vueRootView)]);
			if (PopsPanel.getValue("baidu_tieba_lzl_ban_global_back")) {
				setPopStateEvent();
			}
		}, 0);
	},
	/**
	 * 获取楼中楼评论
	 * @param tid 帖子id
	 * @param pid 回复主体id
	 * @param pn 当前页
	 */
	async getLzlCommentReply(tid = "", pid = "", pn: string | number = 1) {
		let getResp = await httpx.get({
			url: TiebaUrlApi.getPost(
				`comment?tid=${tid}&pid=${pid}&pn=${pn}&t=${new Date().getTime()}${
					TiebaComment.extraSearchSignParams
				}`
			),
			headers: {
				"User-Agent": utils.getRandomPCUA(),
				Host: "tieba.baidu.com",
				Referer: window.location.href,
			},
		});
		if (!getResp.status) {
			log.error(getResp);
			return "请求失败";
		}
		let respData = getResp.data;
		log.success(respData);
		let parseDOM = DOMUtils.parseHTML(respData.responseText, false, true);
		let lzlPostList = Array.from(
			parseDOM.querySelectorAll("li.lzl_single_post")
		) as HTMLLIElement[];
		if (!lzlPostList.length) {
			return "暂无更多回复";
		}
		let result = {
			data: [],
		} as {
			data: CommentData[];
			nextPage?: number;
		};
		lzlPostList.forEach((item) => {
			let dataFieldJSON = utils.toJSON(item.getAttribute("data-field"));
			let userName = dataFieldJSON["user_name"];
			let userShowName = dataFieldJSON["showname"];
			let userPostId = dataFieldJSON["spid"];
			let userPortrait = dataFieldJSON["portrait"];
			let userHomeUrl = (
				item.querySelector("a[data-field]") as HTMLAnchorElement
			)?.href;
			let userAvatar = (
				item.querySelector("a[data-field] img") as HTMLImageElement
			)?.src;
			let userReplyContent = (
				item.querySelector("span.lzl_content_main") as HTMLSpanElement
			).innerHTML;
			let userReplyTimeStr = (
				item.querySelector("span.lzl_time") as HTMLSpanElement
			).innerHTML;
			let userReplyTimeNumber = utils.formatToTimeStamp(userReplyTimeStr);
			let userReplyTime =
				utils.getDaysDifference(
					new Date().getTime(),
					userReplyTimeNumber,
					"auto"
				) + "前";

			if (utils.isNull(userName)) {
				/* 某些情况下获取到的user_name是空的 */
				userName = userShowName;
			}
			result["data"].push({
				userName: userName,
				userShowName: userShowName,
				userPostId: userPostId,
				userPortrait: userPortrait,
				userHomeUrl: userHomeUrl,
				userAvatar: userAvatar,
				userReplyContent: userReplyContent,
				userReplyTime: userReplyTime,
			});
		});
		parseDOM.querySelectorAll("p.j_pager a").forEach((item) => {
			if (item?.textContent?.trim() === "下一页") {
				(result as any)["nextPage"] = parseInt(
					item.getAttribute("href")?.replace("#", "") as string
				);
			}
		});
		if (!result["data"].length) {
			return "解析回复失败";
		} else {
			return result;
		}
	},
	/**
	 * 获取第XX页的评论（不包括楼中楼评论）
	 * @param url
	 */
	async getPageComment(url: string) {
		let getDetails: HttpxDetails = {
			url: url,
			headers: {
				"User-Agent": utils.getRandomPCUA(),
				Referer: "tieba.baidu.com",
			},
			allowInterceptConfig: false,
		};
		let getResp = await httpx.get(getDetails);
		let respData = getResp.data;
		log.success(["获取评论", getResp]);
		if (getResp.status) {
			let pageCommentHTMLElement = DOMUtils.parseHTML(
				respData.responseText,
				true,
				true
			);
			if (
				pageCommentHTMLElement.title === "百度安全验证" ||
				respData.finalUrl.startsWith("https://wappass.baidu.com")
			) {
				log.error("触发百度安全验证 👇" + respData.finalUrl);
				log.error(respData);
				return {
					success: false,
					msg: "触发百度安全验证",
					data: respData.finalUrl,
				};
			} else {
				return {
					success: true,
					msg: "获取成功",
					data: pageCommentHTMLElement,
				};
			}
		} else if (getResp.type === "onerror") {
			if (
				typeof (respData as any).error === "string" &&
				(respData as any).error.match("wappass.baidu.com")
			) {
				let url = (respData as any).error.match(/"(.*?)"/)[1];
				log.error("触发百度校验: " + url);
				return {
					success: false,
					msg: "触发百度安全验证",
					data: url,
				};
			} else {
				log.error("获取评论数据失败 👇");
				log.error(respData);
				return {
					success: false,
					msg: "获取评论数据失败",
					data: null,
				};
			}
		}
		return {
			success: false,
			msg: "未知状态",
			data: null,
		};
	},
	/**
	 * 获取第XX页的所有评论
	 * @param url
	 */
	async getPageCommentList(url: string) {
		let getResp = await httpx.get({
			url: url,
			responseType: "json",
			headers: {
				Accept: "application/json, text/javascript, */*; q=0.01",
				"User-Agent": utils.getRandomPCUA(),
				Referer: "tieba.baidu.com",
			},
			allowInterceptConfig: false,
		});
		log.info(["获取楼中楼评论", getResp]);
		let respData = getResp.data;
		let data = utils.toJSON(respData.responseText);
		if (getResp.status && data["errno"] === 0) {
			log.success(["帖子评论信息JSON", data]);
			return {
				commentList: data["data"]["comment_list"],
				userList: data["data"]["user_list"],
			};
		} else {
			log.error("获取楼中楼评论数据失败 👇");
			log.error(getResp);
		}
	},
	/**
	 * 插入加载中的html
	 */
	insertLoadingHTML() {
		if (!loadingView.isExists()) {
			log.info("插入loading");
			loadingView.initLoadingView();
			loadingView.hide();
			let $mainPageWrap =
				document.querySelector<HTMLDivElement>(".main-page-wrap");
			if ($mainPageWrap) {
				$mainPageWrap.appendChild(loadingView.getLoadingViewElement());
			} else {
				log.error("元素.main-page-wrap不存在，插入loading失败");
			}
		}
	},
	/**
	 * 插入只看楼主的按钮
	 */
	insertOnlyLZ() {
		let replyRightContainer = document.querySelector(".reply-right-container");
		if (!replyRightContainer) {
			log.error("元素.reply-right-container不存在");
			return;
		}
		addStyle(/*css*/ `
          .white-only-lz{
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -moz-box-align: center;
            -webkit-align-items: center;
            -moz-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            line-height: .24rem;
            border-radius: .14rem;
            font-size: .13rem;
            color: #614ec2;
            margin-right: 16px;
          }
          .white-only-lz-qx:before {
            content: "取消";
          }
          .white-only-lz-none {
            display: none;
          }
          `);
		let onlyLzInnerElement = DOMUtils.createElement("div", {
			className: "white-only-lz",
			textContent: "只看楼主",
		});
		replyRightContainer.appendChild(onlyLzInnerElement);

		let $whiteOnlyLz = document.querySelector<HTMLDivElement>(".white-only-lz");
		if (!$whiteOnlyLz) {
			throw new TypeError("$whiteOnlyLz is null");
		}
		DOMUtils.on($whiteOnlyLz, "click", (event) => {
			let $postItemList =
				document.querySelectorAll<HTMLDivElement>(".post-item");
			if (Array.from($whiteOnlyLz.classList).includes("white-only-lz-qx")) {
				/* 取消只看楼主 => 只看楼主 */
				$whiteOnlyLz.classList.remove("white-only-lz-qx");
				$postItemList.forEach(($postItem) => {
					$postItem.classList.remove("white-only-lz-none");
				});
			} else {
				/* 只看楼主 => 取消只看楼主 */
				$whiteOnlyLz.classList.add("white-only-lz-qx");
				$postItemList.forEach(($postItem) => {
					let landlord = $postItem.getAttribute("landlord");
					if (landlord == "0") {
						$postItem.classList.add("white-only-lz-none");
					}
				});
				TiebaComment.triggerScrollEvent();
			}
		});
	},
	/**
	 * 插入 正序=倒序的按钮
	 */
	insertReverseBtn() {
		let replySwitchElement = document.querySelector("#replySwitch");
		if (!replySwitchElement) {
			log.error("元素#replySwitch不存在");
			return;
		}
		addStyle(/*css*/ `
          .reply-right-container {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }
          .btn-comment-reverse-pack{
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: inline-block;
            white-space: nowrap;
            text-align: center;
            height: .29rem;
            line-height: .29rem;
            border-radius: .15rem;
            color: #a3a2a8;
            font-size: 13px;
            background-color: #f3f2f5;
          }
          .btn-comment-reverse-pack .tab-item{
            display: inline-block;
            width: .48rem;
          }
          .btn-comment-reverse-pack .selected-tab-item{
            position: relative;
            z-index: 99;
            color: #141414;
          }
          .btn-comment-reverse-pack .selected-tab-item:after{
            content: "";
            z-index: -99;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: block;
            height: .29rem;
            width: .48rem;
            border-radius: .15rem;
            border: .01rem solid #f3f2f5;
            background-color: #fff;
            color: #141414;
          }
          `);
		let replyRightContainer = DOMUtils.createElement("div", {
			className: "reply-right-container",
		});
		let btnElement = DOMUtils.createElement("div", {
			className: "btn-comment-reverse-pack",
			innerHTML: /*html*/ `
              <span class="tab-item selected-tab-item" data-positive>正序</span>
              <span class="tab-item" data-reverse>倒序</span>`,
		});
		/**
		 * 正序
		 */
		const positiveElement = btnElement.querySelector(
			".tab-item[data-positive]"
		) as HTMLSpanElement;
		/**
		 * 倒序
		 */
		const reverseElement = btnElement.querySelector(
			".tab-item[data-reverse]"
		) as HTMLSpanElement;
		replyRightContainer.appendChild(btnElement);
		replySwitchElement.appendChild(replyRightContainer);
		let isReverse = false;
		function clearSelected() {
			positiveElement.classList.remove("selected-tab-item");
			reverseElement.classList.remove("selected-tab-item");
		}
		DOMUtils.on(btnElement, "click", () => {
			isReverse = !isReverse;
			TiebaComment.removeScrollListener();
			DOMUtils.remove(".post-item");
			clearSelected();
			if (isReverse) {
				/* 倒序 */
				reverseElement.classList.add("selected-tab-item");
				positiveElement.classList.remove("selected-tab-item");
				reverseElement.classList.add("selected-tab-item");
				TiebaComment.initMainComment(true);
				log.info("获取评论===>倒序");
			} else {
				/* 正序 */
				positiveElement.classList.add("selected-tab-item");
				reverseElement.classList.remove("selected-tab-item");
				positiveElement.classList.add("selected-tab-item");
				TiebaComment.initMainComment(false);
				log.info("获取评论===>正序");
			}
		});
	},
	/**
	 * 查看 正序/倒序
	 * @param [isReverse=false] 是否是倒序，默认false：正序
	 */
	async initMainComment(isReverse = false) {
		let tag = isReverse ? "倒序: " : "正序: ";
		log.info(tag + `查看内容`);
		TiebaComment.param_tid = TiebaCore.getCurrentForumPostTid();
		if (!TiebaComment.param_tid) {
			log.error(tag + "未找到本页参数p");
			return;
		}
		TiebaComment.param_forum_id = TiebaPageDataApi.getForumId();
		if (!TiebaComment.param_forum_id) {
			log.warn(
				tag + "param_forum_id参数不存在，尝试从其它地方获取，max-time: 5s"
			);
			let recommendItemElement = await utils.waitNode<HTMLDivElement>(
				".recommend-item",
				5000
			);
			if (recommendItemElement) {
				log.info(
					tag + "等待.recommend-item的data-banner-info属性，max-time: 10s"
				);
				await utils.waitPropertyByInterval(
					recommendItemElement,
					() => {
						return recommendItemElement.hasAttribute("data-banner-info");
					},
					250,
					10000
				);
				log.info(tag + "成功等待.recommend-item的data-banner-info属性");
				TiebaComment.param_forum_id = TiebaPageDataApi.getForumId();
				if (!TiebaComment.param_forum_id) {
					log.error(tag + "获取参数data-banner-info失败");
					Qmsg.error("获取参数data-banner-info失败");
					return;
				}
				log.info(
					tag + "重新获取param_forum_id成功：" + TiebaComment.param_forum_id
				);
			} else {
				log.error(tag + "获取元素.recommend-item失败");
				Qmsg.error("获取元素.recommend-item失败");
				return;
			}
		}
		log.info(tag + "开始请求评论Api");

		// 重置page页数为第一页
		if (isReverse) {
			TiebaComment.page = TiebaComment.maxPage;
		} else {
			TiebaComment.page = 1;
		}
		log.info(tag + "初始化当前页数：" + TiebaComment.page);
		loadingView.setText("Loading...", true);
		loadingView.show();
		// 获取所有评论的接口
		let url = TiebaUrlApi.getPost(
			`totalComment?t=${Date.now()}&tid=${TiebaComment.param_tid}&fid=${
				TiebaComment.param_forum_id
			}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
		);
		// 获取帖子链接，目的是解析页面的内容
		let pcPageUrl = TiebaUrlApi.getPost(
			`${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
		);
		// 解析页面内容
		let pcPageCommentInfo = await TiebaComment.getPageComment(pcPageUrl);
		if (!pcPageCommentInfo.success) {
			// 请求失败，触发验证
			loadingView.setHTML(
				/*html*/ `<a href="${pcPageCommentInfo.data}" target="_blank">触发百度安全验证，点击前往验证</a>`
			);
			return;
		}
		// PC页面的内容DOM
		let $pcPageDoc = pcPageCommentInfo.data as Document;
		// 获取评论列表JSON信息
		let pageCommentList = await TiebaComment.getPageCommentList(url);
		if (
			pageCommentList == null ||
			(pageCommentList.commentList && !pageCommentList.commentList)
		) {
			loadingView.setText("评论数据获取失败");
			log.error(tag + "评论数据获取失败");
			return;
		}
		log.info(tag + "成功获取第一页评论和楼中楼评论");
		// 获取跳转xx页的按钮，解析出本帖的评论最大页
		let $jumpInputBright =
			$pcPageDoc.querySelector<HTMLElement>(".jump_input_bright");
		// 初始化默认最大页为1
		TiebaComment.maxPage = 1;
		if ($jumpInputBright) {
			// 多页评论
			let maxPage = parseInt($jumpInputBright.getAttribute("max-page")!);
			if (TiebaComment.maxPage <= 1 && maxPage > 1) {
				TiebaComment.maxPage = maxPage;
				log.info(tag + "设置解析出的最大页：" + TiebaComment.maxPage);
			}
			if (isReverse) {
				TiebaComment.setPrevPageScrollListener();
				log.info(tag + "当前为多页，设置滚动监听加载下一页");
			} else {
				TiebaComment.setNextPageScrollListener();
				log.info(tag + "当前为多页，设置滚动监听加载上一页");
			}
		} else {
			// 单页评论
			let comments = Array.from(
				$pcPageDoc.querySelectorAll<HTMLElement>(".l_post.l_post_bright")
			);
			// 先把页面上的原有的评论移除
			document.querySelectorAll(".post-item").forEach((ele) => ele.remove());
			// 移除第一个元素，因为第一个元素是楼主
			if (TiebaComment.page == 1) {
				// 如果是第一页，移除第一个元素，因为第一个是主内容
				comments.shift();
				log.info(tag + "当前为第1页，移除第一个，因为它是主内容");
			}
			// 初始化楼层数量
			TiebaComment.floor_num = 1;
			if (isReverse) {
				// 倒序排列
				comments.reverse();
			}
			comments.forEach((element) => {
				TiebaComment.insertNewCommentInnerElement(
					TiebaComment.getNewCommentInnerElement(element, pageCommentList)
				);
				TiebaComment.floor_num++;
			});
			loadingView.hide();
		}
		log.info(
			tag +
				`共 ${TiebaComment.maxPage} 页评论，当前所在 ${TiebaComment.page} 页`
		);
	},
};

export { TiebaComment };
