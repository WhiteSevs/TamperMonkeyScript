import { log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_115pan = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	if (window.location.hostname === "115.com") {
		log.success("自动填写链接", netDiskInfo);
		utils.waitNode<HTMLInputElement>("input.text").then((element) => {
			if (!utils.isVisible(element)) {
				log.error("输入框不可见，不输入密码");
				return;
			}
			Qmsg.success("自动填充访问码");
			element.value = netDiskInfo.accessCode;
			utils.dispatchEvent(element, "input");
			document
				.querySelector<HTMLElement>(
					"#js-share_code div.form-decode div.submit a"
				)!
				.click();
		});
	}
};
