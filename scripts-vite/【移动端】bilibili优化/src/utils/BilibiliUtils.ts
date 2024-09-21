import { DOMUtils, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { Vue2Context } from "@whitesev/utils/dist/types/src/Utils";
import Qmsg from "qmsg";
import { VueUtils } from "./VueUtils";

export const BilibiliUtils = {
	/**
	 * 前往网址
	 * @param path
	 * @param [useRouter=false] 是否强制使用Router
	 */
	goToUrl(path: string, useRouter: boolean = false) {
		let $app = document.querySelector<HTMLDivElement>("#app");
		if ($app == null) {
			Qmsg.error("跳转Url: 获取根元素#app失败");
			log.error("跳转Url: 获取根元素#app失败：" + path);
			return;
		}
		let vueObj = VueUtils.getVue($app);
		if (vueObj == null) {
			log.error("获取#app的vue属性失败");
			Qmsg.error("获取#app的vue属性失败");
			return;
		}
		let $router = vueObj.$router;
		let isGoToUrlBlank = PopsPanel.getValue("bili-go-to-url-blank");
		log.info("即将跳转URL：" + path);
		if (useRouter) {
			isGoToUrlBlank = false;
		}
		if (isGoToUrlBlank) {
			/* 新标签打开 */
			window.open(path, "_blank");
		} else {
			/* 本页打开 */
			if (path.startsWith("http") || path.startsWith("//")) {
				if (path.startsWith("//")) {
					path = window.location.protocol + path;
				}
				let urlObj = new URL(path);
				if (urlObj.origin === window.location.origin) {
					/* 同域名 */
					path = urlObj.pathname + urlObj.search + urlObj.hash;
				} else {
					log.info("不同域名，直接本页打开，不用Router：" + path);
					window.location.href = path;
					return;
				}
			}
			log.info("$router push跳转Url：" + path);
			$router.push(path);
		}
	},
	/**
	 * 前往登录
	 */
	goToLogin(fromUrl: string = "") {
		window.open(
			`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(
				fromUrl
			)}`
		);
	},
	/**
	 * 转换时长为显示的时长
	 *
	 * + 30 => 0:30
	 * + 120 => 2:00
	 * + 14400 => 4:00:00
	 * @param duration 秒
	 */
	parseDuration(duration: number) {
		if (typeof duration !== "number") {
			duration = parseInt(duration);
		}
		if (isNaN(duration)) {
			return duration.toString();
		}
		/**
		 * 补零
		 * @param num
		 * @returns
		 */
		function zeroPadding(num: number) {
			if (num < 10) {
				return `0${num}`;
			} else {
				return num;
			}
		}
		if (duration < 60) {
			/* 1分钟内 */
			return `0:${zeroPadding(duration)}`;
		} else if (duration >= 60 && duration < 3600) {
			/* 1小时内 */
			return `${Math.floor(duration / 60)}:${zeroPadding(duration % 60)}`;
		} else {
			/* 超过1小时 */
			return `${Math.floor(duration / 3600)}:${zeroPadding(
				Math.floor(duration / 60) % 60
			)}:${zeroPadding(duration % 60)}`;
		}
	},
	/**
	 * 手势返回
	 */
	hookGestureReturnByVueRouter(option: {
		vueObj: Vue2Context;
		hash: string;
		/**
		 *
		 * @param isFromPopState 是否由popstate触发
		 * @returns
		 */
		callback: (isFromPopState: boolean) => boolean;
	}) {
		/**
		 * 浏览器地址改变事件
		 */
		function popstateEvent() {
			log.success("触发popstate事件");
			resumeBack(true);
		}

		/**
		 * 禁止浏览器后退按钮
		 */
		function banBack() {
			/* 监听地址改变 */
			log.success("监听地址改变");
			option.vueObj.$router.history.push(option.hash);
			DOMUtils.on(window, "popstate", popstateEvent);
		}

		/**
		 * 允许浏览器后退并关闭小窗
		 * @param [isFromPopState=false] 是否由popstate触发
		 */
		async function resumeBack(isFromPopState = false) {
			DOMUtils.off(window, "popstate", popstateEvent);
			let callbackResult = option.callback(isFromPopState);
			if (callbackResult) {
				return;
			}
			while (1) {
				if (option.vueObj.$router.history.current.hash === option.hash) {
					log.info("后退！");
					option.vueObj.$router.back();
					await utils.sleep(250);
				} else {
					return;
				}
			}
		}
		banBack();
		return {
			resumeBack,
		};
	},
	/**
	 * 加载<script>标签到页面
	 */
	loadScript(src: string) {
		let $script = document.createElement("script");
		$script.src = src;
		document.head.appendChild($script);
		return new Promise((resolve) => {
			$script.onload = function () {
				log.success("script标签加载完毕：" + src);
				setTimeout(() => {
					resolve(true);
				}, 100);
			};
		});
	},
	/**
	 * 添加屏蔽CSS
	 * @param args
	 * @example
	 * addBlockCSS("")
	 * addBlockCSS("","")
	 * addBlockCSS(["",""])
	 */
	addBlockCSS(...args: (string | string[])[]) {
		let selectorList: string[] = [];
		if (args.length === 0) {
			return;
		}
		if (
			args.length === 1 &&
			typeof args[0] === "string" &&
			args[0].trim() === ""
		) {
			return;
		}
		args.forEach((selector) => {
			if (Array.isArray(selector)) {
				selectorList = selectorList.concat(selector);
			} else {
				selectorList.push(selector);
			}
		});
		return addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
	},
};

/**
 * check json has {code: 0, message: "0"}
 */
export function isWebApiSuccess(json: any) {
	return (
		json?.code === 0 && (json?.message === "0" || json?.message === "success")
	);
}
