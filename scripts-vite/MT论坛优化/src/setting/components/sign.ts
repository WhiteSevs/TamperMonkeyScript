import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "../common-components/ui-switch";
import { MTAutoSignIn } from "@/main/sign/MTAutoSignIn";
import Qmsg from "qmsg";
import { DOMUtils, pops, utils } from "@/env";
import { UIButton } from "../common-components/ui-button";
import Utils from "@whitesev/utils";

export const Component_Sign: PopsPanelContentConfig = {
	id: "component-sigh",
	title: "签到",
	forms: [
		{
			text: "自动签到",
			type: "forms",
			forms: [
				UISwitch("启用", "mt-auto-sign", true, void 0, "自动请求签到"),
				UISwitch("使用fetch请求", "mt-auto-sign-useFetch", false, void 0, ""),
				UIButton(
					"签到信息",
					`上次签到时间：${
						MTAutoSignIn.getSignTime() == null
							? "尚未签到"
							: Utils.formatTime(MTAutoSignIn.getSignTime())
					}`,
					"清空信息",
					void 0,
					void 0,
					void 0,
					"primary",
					(event) => {
						let $click = event.composedPath()[0] as HTMLElement;
						let $desc = $click
							.closest("li")!
							.querySelector<HTMLElement>(".pops-panel-item-left-desc-text")!;
						pops.confirm({
							title: {
								text: "提示 ",
								position: "center",
							},
							content: {
								text: "<p>是否清空脚本签到记录的时间?</p>",
								html: true,
							},
							btn: {
								ok: {
									enable: true,
									callback: (event) => {
										MTAutoSignIn.clearSignTime();
										Qmsg.success("删除成功");
										DOMUtils.text(
											$desc,
											`上次签到时间：${
												MTAutoSignIn.getSignTime() == null
													? "尚未签到"
													: Utils.formatTime(MTAutoSignIn.getSignTime())
											}`
										);
										event.close();
									},
								},
							},
							mask: {
								enable: true,
							},
							width: "300px",
							height: "200px",
						});
					}
				),
			],
		},
	],
};
