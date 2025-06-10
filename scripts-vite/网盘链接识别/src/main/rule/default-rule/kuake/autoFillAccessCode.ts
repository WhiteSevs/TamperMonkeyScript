import { log, utils } from "@/env";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_kuake = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	if (window.location.hostname === "pan.quark.cn") {
		log.success("自动填写链接", netDiskInfo);
		utils
			.waitNode<HTMLInputElement>(
				"#ice-container input.ant-input[class*=ShareReceive]"
			)
			.then((element) => {
				if (!utils.isVisible(element)) {
					log.error("输入框不可见，不输入密码");
					return;
				}
				Qmsg.success("自动填充访问码");
				ReactUtils.waitReactPropsToSet(element, "reactProps", {
					check(reactInstance) {
						return reactInstance?.onChange === "function";
					},
					set(reactInstance) {
						reactInstance.onChange({
							target: {
								value: netDiskInfo.accessCode,
							},
						});
					},
				});
				ReactUtils.waitReactPropsToSet(element, "reactEventHandlers", {
					check(reactInstance) {
						return reactInstance?.onChange === "function";
					},
					set(reactInstance) {
						reactInstance.onChange({
							target: {
								value: netDiskInfo.accessCode,
							},
						});
					},
				});
			});
	}
};
