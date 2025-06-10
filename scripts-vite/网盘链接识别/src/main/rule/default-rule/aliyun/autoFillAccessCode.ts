import { log, utils } from "@/env";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_aliyun = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	if (
		window.location.hostname === "www.aliyundrive.com" ||
		window.location.hostname === "www.alipan.com"
	) {
		/* 桌面端 */
		log.success("自动填写链接", netDiskInfo);
		utils
			.waitNode<HTMLInputElement>("#root input.ant-input")
			.then((element) => {
				if (!utils.isVisible(element)) {
					log.error("输入框不可见，不输入密码");
					return;
				}
				Qmsg.success("自动填充访问码");
				element.value = netDiskInfo.accessCode;
				ReactUtils.waitReactPropsToSet(element, "reactFiber", {
					check(reactInstance) {
						return typeof reactInstance?.memoizedProps?.onChange === "function";
					},
					set(reactInstance) {
						reactInstance.memoizedProps.onChange({
							currentTarget: element,
							target: element,
						});
					},
				});
				document
					.querySelector<HTMLElement>('#root button[type="submit"]')!
					.click();
			});

		/* ------------------------------------ */

		/* 移动端 */
		utils
			.waitNode<HTMLInputElement>("#root input[name=pwd]")
			.then((element) => {
				if (!utils.isVisible(element)) {
					log.error("输入框不可见，不输入密码");
					return;
				}
				Qmsg.success("自动填充访问码");
				element.value = netDiskInfo.accessCode;
				ReactUtils.waitReactPropsToSet(element, "reactFiber", {
					check(reactInstance) {
						return typeof reactInstance?.memoizedProps?.onChange === "function";
					},
					set(reactInstance) {
						reactInstance.memoizedProps.onChange({
							currentTarget: element,
							target: element,
						});
					},
				});
				document
					.querySelector<HTMLElement>('#root button[type="submit"]')!
					.click();
			});
	}
};
