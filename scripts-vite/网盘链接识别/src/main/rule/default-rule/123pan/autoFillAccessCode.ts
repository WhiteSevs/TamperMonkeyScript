import { log, utils } from "@/env";
import { ReactUtils } from "@/utils/ReactUtils";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_123pan = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	if (window.location.hostname === "www.123pan.com") {
		/* 桌面端 */
		log.success("自动填写链接", netDiskInfo);
		utils
			.waitNode<HTMLInputElement>("#app .ca-fot input.ant-input[type=text]")
			.then((element) => {
				if (!utils.isVisible(element)) {
					log.error("输入框不可见，不输入密码");
					return;
				}
				Qmsg.success("自动填充访问码");
				ReactUtils.waitReactPropsToSet(element, "reactProps", {
					check(reactInstance) {
						return typeof reactInstance?.onChange === "function";
					},
					set(reactInstance) {
						reactInstance.onChange({
							target: {
								value: netDiskInfo.accessCode,
							},
						});
					},
				});
				let $next = element.nextSibling as HTMLElement;
				$next?.click();
			});

		/* ------------------------------------ */

		/* 移动端 */
		utils
			.waitNode<HTMLInputElement>("#app .appinput input.ant-input[type=text]")
			.then((element) => {
				if (!utils.isVisible(element)) {
					log.error("输入框不可见，不输入密码");
					return;
				}
				Qmsg.success("自动填充访问码");
				ReactUtils.waitReactPropsToSet(element, "reactProps", {
					check(reactInstance) {
						return typeof reactInstance?.onChange === "function";
					},
					set(reactInstance) {
						reactInstance.onChange({
							target: {
								value: netDiskInfo.accessCode,
							},
						});
					},
				});
				let $next = element.nextSibling as HTMLElement;
				$next?.click();
			});
	}
};
