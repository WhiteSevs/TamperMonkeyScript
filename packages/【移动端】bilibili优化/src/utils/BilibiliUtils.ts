import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import type { Vue2Context } from "@whitesev/utils/dist/src/Utils";
import Qmsg from "qmsg";

interface WaitSetVuePropOption {
	/**
	 * 在检测前输出日志
	 */
	msg?: string;
	/**
	 * 检测属性的函数
	 */
	check(vueObj: Vue2Context): boolean;
	/**
	 * 进行设置
	 */
	set(vueObj: Vue2Context): void;
}
export const BilibiliUtils = {
	/**
	 * 获取元素上的__vue__属性
	 * @param element
	 * @returns
	 */
	getVue(element: HTMLElement | Node | Element) {
		return (element as any).__vue__ as Vue2Context;
	},
	/**
	 * 等待vue属性并进行设置
	 */
	waitVuePropToSet($vue: HTMLElement, needSetList: WaitSetVuePropOption[]) {
		needSetList.forEach((needSetOption) => {
			if (typeof needSetOption.msg === "string") {
				log.info(needSetOption.msg);
			}
			utils
				.waitVueByInterval($vue, needSetOption.check, 250, 10000)
				.then((result) => {
					if (!result) {
						return;
					}
					let vueObj = BilibiliUtils.getVue($vue);
					needSetOption.set(vueObj);
				});
		});
	},
	/**
	 * 前往网址
	 * @param path
	 */
	goToUrl(path: string) {
		let $app = document.querySelector<HTMLDivElement>("#app");
		if ($app == null) {
			Qmsg.error("跳转Url: 获取根元素#app失败");
			return;
		}
		let vueObj = BilibiliUtils.getVue($app);
		let $router = vueObj.$router;
		let isGoToUrlBlank = PopsPanel.getValue("bili-go-to-url-blank");
		log.info("即将跳转URL：" + path);
		if (isGoToUrlBlank) {
			/* 新标签打开 */
			window.open(path, "_blank");
		} else {
			/* 本页打开 */
			if (path.startsWith("http") || path.startsWith("//")) {
				window.location.href = path;
			} else {
				$router.push(path);
			}
		}
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
};
