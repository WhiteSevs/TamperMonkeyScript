import { log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_lanzou = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	if (window.location.hostname.match(/lanzou[a-z]{1}.com/gi)) {
		log.success("自动填写链接", netDiskInfo);
		utils.waitNode<HTMLInputElement>("#pwd").then(($input) => {
			if (!utils.isVisible($input)) {
				log.error("输入框不可见，不输入密码");
				return;
			}
			Qmsg.success("自动填充访问码");
			$input.value = netDiskInfo.accessCode;
			utils.dispatchEvent($input, "input");
			(
				document.querySelector<HTMLElement>(
					"#passwddiv div.passwddiv-input > div"
				) || ($input.nextElementSibling as HTMLElement)
			)?.click();
			document.querySelector<HTMLElement>("#sub")?.click();
		});
		utils.waitNode<HTMLInputElement>("#f_pwd").then((element) => {
			utils.mutationObserver(element, {
				config: {
					attributes: true,
					attributeFilter: ["style"],
				},
				callback: (mutations, observer) => {
					let inputElement =
						document.querySelector<HTMLInputElement>("#f_pwd #pwd")!;
					if (!utils.isVisible(inputElement)) {
						log.error("输入框不可见，不输入密码");
						return;
					}
					observer.disconnect();
					log.success("自动填充访问码并关闭观察者");
					Qmsg.success("自动填充访问码");
					inputElement.value = netDiskInfo.accessCode;
					utils.dispatchEvent(inputElement, "input");
					document.querySelector<HTMLElement>("#f_pwd #sub")?.click();
				},
			});
		});
	}
};
