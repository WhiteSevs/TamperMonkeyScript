import { DOMUtils, log, utils } from "@/env";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_kuake = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	if (window.location.hostname === "pan.quark.cn") {
		log.success("自动填写链接", netDiskInfo);
		DOMUtils.ready(() => {
			utils
				.waitNode<HTMLInputElement>(
					"#ice-container input.ant-input[class*=ShareReceive]"
				)
				.then(($el) => {
					ReactUtils.waitReactPropsToSet(
						$el,
						["reactProps", "reactEventHandlers"],
						{
							check(reactInstance) {
								return typeof reactInstance?.onChange === "function";
							},
							set(reactInstance) {
								if (!utils.isVisible($el)) {
									log.error("输入框不可见，不输入密码");
									return;
								}
								Qmsg.success("自动填充访问码");
								reactInstance.onChange({
									target: {
										value: netDiskInfo.accessCode,
									},
								});
							},
						}
					);
				});
		});
	}
};
