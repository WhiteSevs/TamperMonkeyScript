import { log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_hecaiyun = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	if (window.location.hostname === "caiyun.139.com") {
		/* 桌面端 */
		log.success("自动填写链接", netDiskInfo);
		utils.waitNode<HTMLInputElement>("#token-input").then((element) => {
			if (!utils.isVisible(element)) {
				log.error("输入框不可见，不输入密码");
				return;
			}
			Qmsg.success("自动填充访问码");
			element.value = netDiskInfo.accessCode;
			utils.dispatchEvent(element, "input");
			document
				.querySelector<HTMLElement>("#homepage div.token div.token-form a")!
				.click();
		});
		/* 移动端 */
		utils
			.waitNode<HTMLInputElement>("#app div.token-form input[type=text]")
			.then((element) => {
				if (!utils.isVisible(element)) {
					log.error("输入框不可见，不输入密码");
					return;
				}
				Qmsg.success("自动填充访问码");
				element.value = netDiskInfo.accessCode;
				utils.dispatchEvent(element, "input");
				document
					.querySelector<HTMLElement>("div.token-form a.btn-token")!
					.click();
			});
	}
};
