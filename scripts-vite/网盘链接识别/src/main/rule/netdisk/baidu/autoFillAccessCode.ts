import { log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_baidu = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	if (
		window.location.hostname === "pan.baidu.com" &&
		window.location.pathname === "/share/init" &&
		window.location.search.startsWith("?surl=")
	) {
		log.success("自动填写链接", netDiskInfo);
		utils
			.waitNode<HTMLInputElement>("div.verify-form #accessCode")
			.then(($ele) => {
				if (!utils.isVisible($ele)) {
					log.error("输入框不可见，不输入密码");
					return;
				}
				Qmsg.success("自动填入访问码");
				$ele.value = netDiskInfo.accessCode;
				utils.dispatchEvent($ele, "input");
				document
					.querySelector<HTMLElement>("div.verify-form #submitBtn")
					?.click();
			});
	}
	if (
		window.location.hostname === "pan.baidu.com" &&
		window.location.pathname === "/wap/init" &&
		window.location.search.startsWith("?surl=")
	) {
		log.success("自动填写链接", netDiskInfo);
		utils
			.waitNode<HTMLInputElement>(
				"div.extractWrap div.extract-content div.extractInputWrap.extract input[type=text]"
			)
			.then(($input) => {
				if (!utils.isVisible($input)) {
					log.error("输入框不可见，不输入密码");
					return;
				}
				Qmsg.success("自动填入访问码");
				$input.value = netDiskInfo.accessCode;
				utils.dispatchEvent($input, "input");
				document
					.querySelector<HTMLElement>(
						"div.extractWrap div.extract-content button.m-button"
					)
					?.click();
			});
	}
};
