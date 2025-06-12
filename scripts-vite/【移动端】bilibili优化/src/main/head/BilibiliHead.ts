import { BilibiliData } from "@/data/BlibiliData";
import { DOMUtils, addStyle, log, utils } from "@/env";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { BilibiliRecommend } from "./recommend/BilibiliRecommend";
import { VueUtils } from "@components/utils/VueUtils";
import { BilibiliSearchApi } from "@/api/BilibiliSearchApi";
import { BilibiliUrl } from "@/utils/BilibiliUrl";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";

export const BilibiliHead = {
	$flag: {
		isInit_reconfigurationTinyAppSettingButton: false,
		isInit_beautifyTopNavBar_css: false,
	},
	init() {
		Panel.execMenuOnce(
			"bili-head-supplementaryVideoStreamingInformation",
			() => {
				this.addVideoListUPInfo();
			}
		);
		Panel.execMenu("bili-head-recommend-enable", () => {
			BilibiliRecommend.init();
		});
	},
	/**
	 * 添加视频列表UP主信息
	 */
	addVideoListUPInfo() {
		log.info("添加视频列表UP主信息");
		addStyle(/*css*/ `
		${BilibiliData.className.head} .video-list .card-box .gm-up-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: var(--pd-width);
		}
		${BilibiliData.className.head} .video-list .card-box .gm-up-info .gm-up-name {
			display: flex;
			align-items: center;
			font-size: 3vmin;
			color: #999A9E;
		}
		${BilibiliData.className.head} .video-list .card-box .gm-up-info .gm-up-name svg {
			margin-right: calc(var(--pd-width) / 2);
			width: 3vmin;
			height: 3vmin;
		}
		${BilibiliData.className.head} .gm-video-duration{
			margin: 0 auto;
		}
        `);
		utils
			.waitNode<HTMLDivElement>(
				BilibiliData.className.head + " .video-list .card-box"
			)
			.then(() => {
				let lockFunc = new utils.LockFunction(() => {
					document
						.querySelectorAll<HTMLDivElement>(
							BilibiliData.className.head + " .video-list .card-box .v-card"
						)
						.forEach(($vcard) => {
							let vueObj = VueUtils.getVue($vcard);
							let upName = (vueObj?.info?.author?.name ||
								vueObj?.info?.owner?.name) as string | undefined;
							let duration = vueObj?.info?.duration as
								| string
								| number
								| undefined;

							if (upName && !$vcard.querySelector(".gm-up-info")) {
								/* up主名 */
								let $upInfo = document.createElement("div");
								$upInfo.innerHTML = /*html*/ `
                                    <div class="gm-up-name">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
                                            </path>
                                        </svg>
                                        ${upName}
                                    </div>
                                    <div class="gm-video-handle">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                                            </path>
                                        </svg>
                                    </div>`;
								$upInfo.className = "gm-up-info";
								$vcard.appendChild($upInfo);
							}
							if (duration) {
								/* 成功获取到播放时长，可能是数字，可能是已转化好的字符串 */
								let $count = $vcard.querySelector(".count");
								if ($count && !$count.querySelector(".gm-video-duration")) {
									/* 视频共计时间 */
									/* 转换时间 */
									let showDuration =
										typeof duration === "string"
											? duration
											: BilibiliUtils.parseDuration(duration);
									let $duration = document.createElement("span");
									$duration.className = "gm-video-duration";
									$duration.innerHTML = showDuration;
									$count.appendChild($duration);
								}
							}
						});
				}, 25);
				utils.mutationObserver(document.body, {
					config: {
						subtree: true,
						childList: true,
						attributes: true,
					},
					callback() {
						lockFunc.run();
					},
				});
			});
	},
	/**
	 * 重构tinyApp右上角的设置按钮图标，改为用户头像什么的
	 */
	async reconfigurationTinyAppSettingButton() {
		log.info(`重构tinyApp右上角的设置按钮图标`);
		if (!this.$flag.isInit_reconfigurationTinyAppSettingButton) {
			this.$flag.isInit_reconfigurationTinyAppSettingButton = true;
			addStyle(/*css*/ `

			.nav-bar .right{
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
			}
			.gm-face{
				width: 6.4vmin;
				height: 6.4vmin;
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				justify-content: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				margin-right: 3.2vmin;
				border-radius: 3.2vmin;
				overflow: hidden;
			}
			.gm-face-avatar{
				width: 100%;
				height: 100%;
				overflow: hidden;
			}
			.gm-face-avatar img{
				width: 100%;
				height: 100%;
				-o-object-fit: cover;
				object-fit: cover;
			}
			`);
		}
		let $iconConfig = await utils.waitNode(".nav-bar .icon-config", 10000);
		if (!$iconConfig) {
			log.error("未找到设置按钮图标，无法重构");
			return;
		}
		$iconConfig.outerHTML = /*html*/ `
		<div class="gm-face">
			<div class="gm-face-avatar">
				<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
			</div>
		</div>
		`;
		/** 是否已登录 */
		let isLogin = false;
		/** 当前已登录账号的uid */
		let uid: number | null | string = null;
		/** 当前已登录账号的用户名 */
		let userName: null | string = null;
		/** 头像元素 */
		let $gmFace = document.querySelector<HTMLDivElement>(".gm-face")!;
		/** 头像图片元素 */
		let $img = $gmFace.querySelector<HTMLImageElement>("img")!;
		VueUtils.waitVuePropToSet("#app", [
			{
				check(vueIns) {
					return (
						typeof vueIns?.$store?.state?.common?.userInfo?.isLogin ===
						"boolean"
					);
				},
				set(vueIns) {
					let userInfo = vueIns?.$store?.state?.common
						?.userInfo as BilibiliUserInfoType;
					isLogin = userInfo?.isLogin;
					if (isLogin) {
						uid = userInfo?.mid;
						if (uid == null) {
							log.warn(`当前是脚本设置的isLogin但其实未登录账号`);
							isLogin = false;
							return;
						}
						userName = userInfo?.uname;
						$img.src = userInfo?.face || $img.src;
					} else {
						log.warn(`经检测，Bilibili尚未登录账号`);
					}
				},
			},
		]);
		DOMUtils.on($gmFace, "click", (event) => {
			utils.preventEvent(event);
			if (isLogin) {
				// 前往个人空间
				if (uid != null) {
					let url = BilibiliUrl.getUserSpaceUrl(uid);
					BilibiliUtils.goToUrl(url, false);
				} else {
					Qmsg.error("获取用户id失败");
				}
			} else {
				// 前往登录
				BilibiliUtils.goToLogin(window.location.href);
			}
		});
	},
	/**
	 * 美化顶部navbar
	 */
	beautifyTopNavBar() {
		log.info(`美化顶部navbar`);
		if (!this.$flag.isInit_beautifyTopNavBar_css) {
			this.$flag.isInit_beautifyTopNavBar_css = true;
			addStyle(/*css*/ `
			/* 隐藏logo */
			.${BilibiliData.className.head} .m-navbar .logo,
			/* 隐藏原有的搜索图标 */
			.${BilibiliData.className.head} .m-navbar .icon-search{
				display: none !important;
			}
			/* 设置右侧的宽度撑开、逆反 */
			.${BilibiliData.className.head} .m-navbar .right{
				width: 100%;
				display: flex;
				flex-direction: row-reverse;
				justify-content: flex-end;
			}
			/* 头像 */
			.${BilibiliData.className.head} .m-navbar .gm-face{
				flex: 0 auto;
				margin-top: 1.86667vmin;
			}
			/* 新的输入框 */
			.${BilibiliData.className.head} .m-navbar .gm-input-area{
				flex: 1;
				margin-top: 1.86667vmin;
				height: 8vmin;
				line-height: 8vmin;
				padding: 0 3.2vmin;
				background: #f4f4f4;
				border-radius: 4.53333vmin;
				display: flex;
			}
			/* 输入框前面的搜索图标 */
			.${BilibiliData.className.head} .m-navbar .gm-input-area .ic_search_tab{
				color: #a0a0a0;
				vertical-align: middle;
				font-size: 4.33333vmin;
			}
			/* 输入框内容 */
			.${BilibiliData.className.head} .m-navbar .gm-input-area input[type="search"]{
				font-size: 3.46667vmin;
				color: #505050;
				border: none;
				background: transparent;
				width: 61.33333vmin;
				user-select: none !important;!i;!;
				padding-left: 2.122vmin;
				pointer-events: none;
			}
			/* 调整首页顶部搜索框的样式 */
			.${BilibiliData.className.head} .m-navbar .right .search {
				border: 1px solid #ccc;
				width: 100% !important;
				height: auto !important;
				border-radius: 1rem;
				display: flex;
				align-items: center;
				padding: 2px 6px;
			}
			`);
		}
		utils
			.waitNode<HTMLElement>(".m-head .m-navbar .icon-search", 10000)
			.then(async ($iconSearch) => {
				if (!$iconSearch) {
					return;
				}
				if ($iconSearch.parentElement!.querySelector(".gm-input-area")) {
					return;
				}
				// 创建一个新的输入框
				let $inputAreaContainer = DOMUtils.createElement("div", {
					className: "gm-input-area",
					innerHTML: /*html*/ `
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`,
				});
				let $input = $inputAreaContainer.querySelector("input")!;
				DOMUtils.on($inputAreaContainer, "click", (event) => {
					utils.preventEvent(event);
					BilibiliUtils.goToUrl("/search", true);
				});
				DOMUtils.after($iconSearch, $inputAreaContainer);

				// 获取热点词
				let hotWordInfo = await BilibiliSearchApi.getSearchInputPlaceholder();
				if (hotWordInfo != null) {
					log.info(`热点信息：`, hotWordInfo);
					$input.placeholder = hotWordInfo.show_name || hotWordInfo.name;
				}
			});
	},
};
