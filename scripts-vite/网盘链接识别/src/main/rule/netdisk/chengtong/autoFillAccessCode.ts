import { log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_chengtong = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	log.success("自动填写链接", netDiskInfo);
	utils.waitNode<HTMLInputElement>("#passcode").then((element) => {
		if (!utils.isVisible(element)) {
			log.error("输入框不可见，不输入密码");
			return;
		}
		Qmsg.success("自动填入访问码");
		element.value = netDiskInfo.accessCode;
		utils.dispatchEvent(element, "input");
		document
			.querySelector<HTMLElement>(
				"#main-content .form-group button.btn[type=button]"
			)!
			.click();
	});
};
