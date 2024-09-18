import { log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_weiyun = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	if (window.location.hostname === "share.weiyun.com") {
		/* 桌面端 */
		log.success(["自动填写链接", netDiskInfo]);
		utils.waitNode<HTMLInputElement>("#app input.input-txt").then((element) => {
			if (!utils.isVisible(element)) {
				log.error("输入框不可见，不输入密码");
				return;
			}
			Qmsg.success("自动填入访问码");
			element.value = netDiskInfo.accessCode;
			utils.dispatchEvent(element, "input");
			utils.dispatchEvent(element, "change");
			setTimeout(() => {
				document.querySelector<HTMLElement>(".form-item button.btn-main")!.click();
			}, 500);
		});

		/* ------------------------------------ */

		/* 移动端 */
		utils
			.waitNode<HTMLInputElement>(".input-wrap input.pw-input")
			.then((element) => {
				if (!utils.isVisible(element)) {
					log.error("输入框不可见，不输入密码");
					return;
				}
				Qmsg.success("自动填入访问码");
				element.value = netDiskInfo.accessCode;
				utils.dispatchEvent(element, "input");
				utils.dispatchEvent(element, "change");
				setTimeout(() => {
					document.querySelector<HTMLElement>(".pw-btn-wrap button.btn")!.click();
				}, 500);
			});
	}
};
