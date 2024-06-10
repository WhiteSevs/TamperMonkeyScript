import { DOMUtils, addStyle, log, utils } from "@/env";
import { CommonUtils } from "@/utils/CommonUtils";
import Qmsg from "qmsg";
import { TiebaPost } from "./TiebaPost";
import { TiebaComment } from "./TiebaComment";
import { ref } from "vue";
import { VueUtils } from "@/utils/VueUtils";

interface TiebaVueCurrentReplyObj {
	/**
	 * 用户名，猜测是un|uname
	 */
	authorName: string;
	/**
	 * 用户楼层，可能是回复楼中楼的
	 */
	floor: number;
	/**
	 * 楼中楼的id
	 */
	lzlId: number;
	/**
	 * 发帖的主体id
	 *
	 * 如果是当前帖子，那就是当前帖子id，p是缩写的posts(帖子)
	 *
	 * 如果是楼中楼，那么是那条楼中楼的id
	 */
	pid: number;
	/**
	 * 输入框的提示，一般用如下字符串模板
	 *
	 * `回复 ${用户名}：`
	 *
	 * 但是这里一般不用改，因为删除了currentReplyObj.authorName后将自动重置为初始的
	 */
	placeholder: string;
	/**
	 * 待验证作用
	 */
	portrait: string;
}

interface TiebaReplyCurrentReplyMainData {
	/**
	 * 当前回复数据的类型
	 * 当前帖子，一般不用管，放行默认操作
	 */
	type: "main";
	/**
	 * 数据
	 */
	data: {
		/**
		 * 评论的内容
		 */
		content: string;
		/**
		 * 评论的id
		 */
		pid: number;
		/**
		 * 评论的用户
		 */
		authorName: string;
	};
}
interface TiebaReplyCurrentReplyCommentData {
	/**
	 * 当前回复数据的类型
	 * xx楼评论，需要设置target，插入到那条楼中楼评论的评论区（评论区不存在的话创建个新的）
	 */
	type: "comment";
	/**
	 * 数据
	 */
	data: {
		/**
		 * 当前所属页
		 */
		page: "pb";
		/**
		 * 当前用户评论的内容
		 */
		content: string;
		/**
		 * 评论的id
		 */
		pid: number;
		/**
		 * 评论的用户
		 */
		authorName: string;
	};
}
interface TiebaReplyCurrentReplyLzlCommentData {
	/**
	 * 当前回复数据的类型
	 * xx楼的楼中楼评论，需要设置target，当前应该是查看楼中楼评论状态，插入最底部就行
	 */
	type: "lzl-comment";
	/**
	 * 数据
	 */
	data: {
		/**
		 * 当前所属页
		 */
		page: "lzl";
		/**
		 * 当前用户评论的内容
		 */
		content: string;
		/**
		 * 当前用户所属楼层
		 */
		floor: number;
		/**
		 * 楼中楼评论的id
		 */
		lzlId: number;
		/**
		 * 评论的id
		 */
		pid: number;
		/**
		 * 用户的portrait，末尾不带?
		 */
		portrait: string;
		/**
		 * 评论的用户
		 */
		authorName: string;
	};
}
/**
 * 评论元素需要如下属性
 * document.querySelector(".comment-box-wrap");
 * + __vue__.isCanComment=true
 * + __vue__.isLogin=true
 *
 *
 * 回复当前帖子，那么需要设置的属性
 * __vue__.currentReplyObj => Partial<TiebaCurrentReplyObj> 不需要的属性需要删除
 *
 * ↓这个不用修改。只修改上面的currentReplyObj
 * __vue__.replyInfo => TiebaCurrentReplyObj
 *
 *
 */
export const TiebaReply = {
	$data: {
		/**
		 * 当前回复类型
		 */
		type: ref<
			| TiebaReplyCurrentReplyMainData["type"]
			| TiebaReplyCurrentReplyCommentData["type"]
			| TiebaReplyCurrentReplyLzlCommentData["type"]
		>(),
		/**
		 * 如果type=main，使用该数据
		 */
		replyMainData: ref<TiebaReplyCurrentReplyMainData>(),
		/**
		 * 如果type=comment，使用该数据
		 */
		replyCommentData: ref<TiebaReplyCurrentReplyCommentData>(),
		/**
		 * 如果type=lzl-comment，使用该数据
		 */
		replyLzlCommentData: ref<TiebaReplyCurrentReplyLzlCommentData>(),
		/**
		 * 是否已登录
		 */
		isLogin: ref<boolean>(false),
		/**
		 * 是否正在发送中
		 */
		isSending: ref<boolean>(false),
		/**
		 * 主动触发显示完整的编辑器
		 */
		isShowFullEditor: ref(false),
	},
	$vue: {
		handlerCommentSuccess: null as any,
	},
	init() {
		addStyle(`
		/* 由于lzl弹窗的z-index是99999，所以，回复框、toast、登录弹窗的z-index要大于99999 */
		/* 底部回复框 */
        .comment-box-wrap-lzl{
            z-index: calc(99999 + 10) !important;
        }
		/* 登录弹窗 */
		.login-wake-modal-mask{
			z-index: calc(99999 + 20) !important;
		}
		/* 消息toast */
		.tb-toast{
			z-index: calc(99999 + 100) !important;
		}
        `);
		this.setGlobalContentClick();
		DOMUtils.ready(() => {
			// this.setAvatarClickEvent();
			this.initLogin();
			this.cover_handlerCommentSuccess();
		});
	},
	/**
	 * 设置当前回复为发布本帖子的人
	 */
	setCurrentReplyMainUser() {
		let commentBoxVueObj = this.getCommentBoxWrapVue();
		if (!commentBoxVueObj) {
			return;
		}
		let replyInfo =
			commentBoxVueObj.replyInfo as Partial<TiebaVueCurrentReplyObj>;
		let currentReplyObj =
			commentBoxVueObj.currentReplyObj as Partial<TiebaVueCurrentReplyObj>;
		log.info([
			"设置本帖发帖人回复参数",
			{
				pid: TiebaComment.pid,
			},
		]);
		/* 设置当前页是pb */
		commentBoxVueObj.page = "pb";
		Object.keys(currentReplyObj).forEach((key) => {
			(currentReplyObj as any)[key] = void 0;
		});
		Object.keys(replyInfo).forEach((key) => {
			(currentReplyObj as any)[key] = void 0;
		});

		replyInfo.pid = TiebaComment.pid;

		currentReplyObj.pid = TiebaComment.pid;
	},
	/**
	 * 设置当前为回复xx用户
	 */
	setCurrentReplyUser(pid: number, authorName: string) {
		let commentBoxVueObj = this.getCommentBoxWrapVue();
		if (!commentBoxVueObj) {
			return;
		}
		let replyInfo =
			commentBoxVueObj.replyInfo as Partial<TiebaVueCurrentReplyObj>;
		let currentReplyObj =
			commentBoxVueObj.currentReplyObj as Partial<TiebaVueCurrentReplyObj>;
		log.info([
			"设置评论区回复参数",
			{
				pid,
				authorName,
			},
		]);
		/* 设置当前页是pb */
		commentBoxVueObj.page = "pb";
		Object.keys(currentReplyObj).forEach((key) => {
			(currentReplyObj as any)[key] = void 0;
		});
		Object.keys(replyInfo).forEach((key) => {
			(currentReplyObj as any)[key] = void 0;
		});

		replyInfo.pid = pid;
		replyInfo.authorName = authorName;

		currentReplyObj.pid = pid;
		currentReplyObj.authorName = authorName;
	},
	/**
	 * 设置当前为回复楼中楼用户
	 */
	setCurrentReplyLzlUser(
		pid: number,
		authorName: string,
		lzlId: number,
		floor: number,
		portrait: string
	) {
		let commentBoxVueObj = this.getCommentBoxWrapVue();
		if (!commentBoxVueObj) {
			return;
		}
		let replyInfo =
			commentBoxVueObj.replyInfo as Partial<TiebaVueCurrentReplyObj>;
		let currentReplyObj =
			commentBoxVueObj.currentReplyObj as Partial<TiebaVueCurrentReplyObj>;
		log.info([
			"设置楼中楼回复参数",
			{
				authorName,
				floor,
				lzlId,
				pid,
				portrait,
			},
		]);
		/* 设置当前页是楼中楼 */
		commentBoxVueObj.page = "lzl";

		Object.keys(currentReplyObj).forEach((key) => {
			(currentReplyObj as any)[key] = void 0;
		});
		Object.keys(replyInfo).forEach((key) => {
			(currentReplyObj as any)[key] = void 0;
		});

		replyInfo.authorName = authorName;
		replyInfo.floor = floor;
		replyInfo.lzlId = lzlId;
		replyInfo.pid = pid;
		// replyInfo.placeholder
		// 因为g.substring(0, g.indexOf('?'))
		replyInfo.portrait = portrait + "?";

		currentReplyObj.authorName = authorName;
		currentReplyObj.floor = floor;
		currentReplyObj.lzlId = lzlId;
		currentReplyObj.pid = pid;
		// currentReplyObj.placeholder
		// 因为g.substring(0, g.indexOf('?'))
		currentReplyObj.portrait = portrait + "?";
	},
	/**
	 * 设置全局监听点击内容事件
	 */
	setGlobalContentClick() {
		let that = this;
		/* 评论区内容 */
		DOMUtils.on(document, "click", ".post-item .content", (event) => {
			let $clickContent = event.target as HTMLDivElement;
			that.$data.replyCommentData.value = void 0;
			that.$data.type.value = void 0;
			log.info("点击内容，触发设置当前回复的对象");
			try {
				let $commentBoxWrap = that.getCommentBoxWrap();
				$commentBoxWrap.classList.remove("comment-box-wrap-lzl");
				let $postItem = $clickContent.closest(".post-item") as HTMLDivElement;
				let itemData = ($postItem as any)["data-whitesev"];
				let $textContent = $clickContent.querySelector(
					".text-content"
				) as HTMLDivElement;
				let textContent = $textContent.innerText;
				log.info(["获取元素上的数据", itemData]);

				let authorName = itemData["userName"] as string;
				let pid = itemData["userPostId"] as number;
				that.setCurrentReplyUser(pid, authorName);
				that.$data.replyCommentData.value = {
					type: "comment",
					data: {
						page: "pb",
						pid: pid,
						authorName: authorName,
						content: textContent,
					},
				};
				that.$data.type.value = "comment";
				that.$data.isShowFullEditor.value = true;
			} catch (error: any) {
				log.error(error);
				Qmsg.error(error.toString(), {
					zIndex: utils.getMaxZIndex() + 100,
				});
			}
		});
		/* 楼中楼弹窗的内容 */
		DOMUtils.on(
			document,
			"click",
			"#whitesev-reply-dialog .whitesev-reply-dialog-content-item",
			(event) => {
				let $clickContent = event.target as HTMLDivElement;
				if (
					$clickContent.classList.contains(
						"whitesev-reply-dialog-sheet-main-content"
					)
				) {
					/* 点击的是最顶部的层主 */
					return;
				}
				that.$data.replyLzlCommentData.value = void 0;
				that.$data.type.value = void 0;
				log.info("点击楼中楼内容，触发设置当前回复的对象");
				try {
					let $commentBoxWrap = that.getCommentBoxWrap();
					$commentBoxWrap.classList.add("comment-box-wrap-lzl");
					let $replyDialog = $clickContent.closest(
						"#whitesev-reply-dialog"
					) as HTMLDivElement;
					let $userComment = $clickContent.querySelector(
						".whitesev-reply-dialog-user-comment"
					) as HTMLDivElement;
					let userCommentText = $userComment.innerText;
					let mainData = ($replyDialog as any)["data-whitesev"];
					let itemData = ($clickContent as any)["data-lzl-item"];
					log.info(["主数据-获取元素上的数据", mainData]);
					log.info(["获取元素上的数据", itemData]);

					let authorName = (itemData["userInfo"]["user_nickname"] ||
						itemData["userInfo"]["user_name"]) as string;
					let pid = itemData["data"]["post_id"] as number;
					let lzlId = itemData["data"]["comment_id"] as number;
					let portrait = itemData["portrait"] as string;
					let floor = mainData["userFloor"] as number;

					that.setCurrentReplyLzlUser(pid, authorName, lzlId, floor, portrait);

					that.$data.replyLzlCommentData.value = {
						type: "lzl-comment",
						data: {
							page: "lzl",
							content: userCommentText,
							authorName,
							floor,
							lzlId,
							pid,
							portrait,
						},
					};
					that.$data.type.value = "lzl-comment";
					that.$data.isShowFullEditor.value = true;
				} catch (error: any) {
					log.error(error);
					Qmsg.error(error.toString(), {
						zIndex: utils.getMaxZIndex() + 100,
					});
				}
			}
		);
	},
	setInputValue(value: string) {
		let commentBoxVueObj = this.getCommentBoxWrapVue();
		if (!commentBoxVueObj) {
			return;
		}
		commentBoxVueObj.commentRef.value = value;
		commentBoxVueObj.inputValue = value;
		utils.dispatchEvent(commentBoxVueObj.commentRef, "input");
	},
	sendMsgBefore(submitTouchStartEvent: TouchEvent) {
		let commentBoxVueObj = this.getCommentBoxWrapVue();
		if (!commentBoxVueObj) {
			return;
		}
		commentBoxVueObj.submitTouchstart(submitTouchStartEvent);
	},
	sendMsg(submitTouchEndEvent: TouchEvent) {
		let commentBoxVueObj = this.getCommentBoxWrapVue();
		if (!commentBoxVueObj) {
			return;
		}
		commentBoxVueObj.submitTouchend(submitTouchEndEvent);
	},
	/**
	 * 覆盖函数handlerCommentSuccess
	 */
	cover_handlerCommentSuccess() {
		let that = this;
		VueUtils.waitVuePropToSet(".comment-box-wrap", [
			{
				msg: "等待属性 _events['comment-success'][0].fns => handlerCommentSuccess",
				check(vueObj) {
					return (
						typeof vueObj?._events?.["comment-success"]?.[0]?.fns === "function"
					);
				},
				set(vueObj) {
					log.success("成功覆盖函数  _events['comment-success'][0].fns");
					let old_handlerCommentSuccess =
						vueObj._events["comment-success"][0].fns;
					vueObj._events["comment-success"][0].fns = function (
						this: any,
						...args: any[]
					) {
						that.$vue.handlerCommentSuccess(...args);
					}.bind(vueObj);
				},
			},
		]);
	},
	/**
	 * 获取回复框容器元素
	 */
	getCommentBoxWrap() {
		return document.querySelector(".comment-box-wrap") as HTMLDivElement;
	},
	/**
	 * 等待评论框容器元素
	 * @param callback
	 * @returns
	 */
	waitCommentBoxWrap(callback: Function) {
		DOMUtils.ready(() => {
			utils.waitNode(".comment-box-wrap", 10000).then(($commentBoxWrap) => {
				if (!$commentBoxWrap) {
					log.error("启动失败，获取不到.comment-box-wrap元素");
					Qmsg.error("启动失败，获取不到.comment-box-wrap元素");
					return;
				}
				setTimeout(() => {
					callback();
				}, 200);
			});
		});
		return;
	},
	/**
	 * 获取.comment-box-wrap的vue实例
	 */
	getCommentBoxWrapVue() {
		let $commentBoxWrap = this.getCommentBoxWrap();
		if (!$commentBoxWrap) {
			log.error("获取不到.comment-box-wrap元素");
			Qmsg.error("获取不到.comment-box-wrap元素");
			return;
		}
		let vueObj = VueUtils.getVue($commentBoxWrap);
		if (!vueObj) {
			log.error("获取不到.comment-box-wrap元素上的vue属性");
			Qmsg.error("获取不到.comment-box-wrap元素上的vue属性");
			return;
		}
		return vueObj;
	},
	/**
	 * 获取app-view的vue实例
	 */
	getAppViewVue() {
		let $appView = document.querySelector<HTMLDivElement>(".app-view");
		if (!$appView) {
			log.error("获取不到app-view元素");
			Qmsg.error("获取不到app-view元素");
			return;
		}
		let vueObj = VueUtils.getVue($appView);
		if (!vueObj) {
			log.error("获取不到app-view元素上的vue属性");
			Qmsg.error("获取不到app-view元素上的vue属性");
			return;
		}
		return vueObj;
	},
	initLogin() {
		let that = this;
		VueUtils.waitVuePropToSet(".comment-box-wrap", [
			{
				msg: "等待参数 isLogin",
				check(vueObj) {
					return typeof vueObj.isLogin === "boolean";
				},
				set(vueObj) {
					that.$data.isLogin.value = vueObj.isLogin;
					log.success("成功获取参数 isLogin=" + that.$data.isLogin.value);
				},
			},
		]);
	},

	checkLogin() {
		if (this.$data.isLogin.value) {
			return;
		}
		let $commentBoxWrap = this.getCommentBoxWrap();
		let vueObj = VueUtils.getVue($commentBoxWrap);
		if (!vueObj) {
			log.error("获取回复框容器元素的vue属性失败");
			return;
		}
		this.$data.isLogin.value = vueObj.isLogin;
		if (!vueObj.isLogin) {
			/* 未登录 */
			log.error("未登录");
			this.showLoginWakeModal();
		}
	},
	/**
	 * 显示登录弹窗
	 */
	showLoginWakeModal() {
		let vueObj = this.getAppViewVue();
		if (!vueObj) {
			return;
		}
		vueObj.isShowLoginWakeModal = true;
	},
	/**
	 * 设置头像点击事件
	 * + 未登录 点击显示登录弹窗提示
	 * + 已登录 点击设置当前回复为当前帖子
	 */
	setAvatarClickEvent() {
		let that = this;
		utils
			.waitNode<HTMLDivElement>(".comment-box-wrap .avatar", 10000)
			.then(($avatar) => {
				if (!$avatar) {
					log.error("获取回复框头像元素.comment-box-wrap .avatar失败");
					return;
				}
				DOMUtils.on($avatar, "click", (event) => {
					let $commentBoxWrap = that.getCommentBoxWrap();
					let vueObj = VueUtils.getVue($commentBoxWrap);
					if (!vueObj) {
						log.error("获取回复框容器元素的vue属性失败");
						utils.preventEvent(event);
						return;
					}
					if (vueObj.isLogin) {
						/* 已登录 */
						log.info("重置默认当前回复为当前帖子");
						that.$data.type.value = "main";
						$commentBoxWrap.classList.remove("comment-box-wrap-lzl");
						let currentReplyObj =
							vueObj.currentReplyObj as Partial<TiebaVueCurrentReplyObj>;
						let replyInfo = vueObj.replyInfo as TiebaVueCurrentReplyObj;
						Object.keys(currentReplyObj).forEach((key) => {
							delete (currentReplyObj as any)[key];
						});
						currentReplyObj.pid = replyInfo.pid;
					} else {
						/* 未登录 */
						log.error("未登录");
						that.showLoginWakeModal();
					}
				});
			});
	},
};
