import { $, DOMUtils, log, utils } from "@/env";
import { ReactUtils } from "@components/utils/ReactUtils";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_aliyun = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	if (
		window.location.hostname === "www.aliyundrive.com" ||
		window.location.hostname === "www.alipan.com"
	) {
		log.success("自动填写链接", netDiskInfo);
		DOMUtils.ready(() => {
			utils
				.waitAnyNode<HTMLInputElement>([
					"#root input.ant-input[placeholder*='提取码']",
					"#root input[name=pwd][placeholder*='提取码']",
				])
				.then(($el) => {
					ReactUtils.waitReactPropsToSet($el, ["reactFiber", "reactProps"], {
						check(reactPropInst) {
							return (
								typeof reactPropInst?.memoizedProps?.onChange === "function" ||
								typeof reactPropInst?.onChange === "function"
							);
						},
						set(reactPropInst) {
							if (!utils.isVisible($el)) {
								log.error("输入框不可见，不输入密码");
								return;
							}
							Qmsg.success("自动填充访问码");
							$el.value = netDiskInfo.accessCode;
							let onChange =
								reactPropInst?.memoizedProps?.onChange ||
								reactPropInst?.onChange;
							onChange({
								currentTarget: $el,
								target: $el,
							});
							let $submit = $<HTMLElement>('#root button[type="submit"]');
							if (!$submit) {
								Qmsg.error("未找到提交按钮");
								return;
							}
							$submit.click();
						},
					});
				});
		});
	}
};
