import { unsafeWindow } from "ViteGM";
import { OriginPrototype, addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";
import BaiKeShieldCSS from "./shield.css?raw";

const BaiduBaiKe = {
	init() {
		addStyle(BaiKeShieldCSS);
		log.info("插入CSS规则");
		Panel.execMenuOnce("baidu_baike_automatically_expand_next_page", () => {
			BaiduBaiKe.automaticallyExpandNextPage();
		});
	},
	/**
	 * 自动展开下一页
	 * + window.Box
	 */
	automaticallyExpandNextPage() {
		log.info("通过劫持window.Box自动展开下一页");
		let old_Box = null as any;
		OriginPrototype.Object.defineProperty(unsafeWindow, "Box", {
			get() {
				if (old_Box == null) {
					return;
				}
				return new Proxy(old_Box, {
					get(target, prop, receiver) {
						if (
							(prop === "isBox" || prop === "$isBox") &&
							Panel.getValue("baidu-baike-Box-isBox")
						) {
							return true;
						}
						if (
							(prop === "isLiteBox" || prop === "$isLiteBox") &&
							Panel.getValue("baidu-baike-Box-isLiteBox")
						) {
							return true;
						}
						if (
							(prop === "isInfoBox" || prop === "$isInfoBox") &&
							Panel.getValue("baidu-baike-Box-isInfoBox")
						) {
							return true;
						}
						if (
							(prop === "isIOS" || prop === "$isIOS") &&
							Panel.getValue("baidu-baike-Box-isIOS")
						) {
							return true;
						}
						if (
							(prop === "isAndroid" || prop === "$isAndroid") &&
							Panel.getValue("baidu-baike-Box-isAndroid")
						) {
							return true;
						}
						if (
							(prop === "isAndroid" || prop === "$isAndroid") &&
							Panel.getValue("baidu-baike-Box-isAndroid")
						) {
							return true;
						}
						if (prop === "android") {
							let android = Reflect.get(target, prop, receiver);
							if (
								android["invokeApp"] &&
								Panel.getValue("baidu-baike-Box-android.invokeApp")
							) {
								android["invokeApp"] = function (...args: any[]) {
									log.info(["阻止调用android.invokeApp", args]);
								};
							}
							if (
								android["invokeLiteApp"] &&
								Panel.getValue("baidu-baike-Box-android.invokeLiteApp")
							) {
								android["invokeLiteApp"] = function (...args: any[]) {
									log.info(["阻止调用android.invokeLiteApp", args]);
								};
							}
						}
						if (prop === "ios") {
							let ios = Reflect.get(target, prop, receiver);
							if (
								ios["invokeLiteApp"] &&
								Panel.getValue("baidu-baike-Box-ios.invokeApp")
							) {
								ios["invokeLiteApp"] = function (...args: any[]) {
									log.info(["阻止调用ios.invokeApp", args]);
								};
							}
						}
						return Reflect.get(target, prop, receiver);
					},
				});
			},
			set(value) {
				old_Box = value;
			},
		});
	},
};
export { BaiduBaiKe };
