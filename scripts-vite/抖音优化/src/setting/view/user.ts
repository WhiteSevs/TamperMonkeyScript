import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UIButton } from "@components/setting/components/ui-button";
import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { DouYinUrlUtils } from "@/utils/DouYinUrlUtils";

export const PanelUserConfig: PopsPanelContentConfig = {
	id: "panel-config-user",
	title: "用户",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"显示UID",
					"dy-user-addShowUserUID",
					true,
					void 0,
					"在用户信息区域下方显示当前用户的uid"
				),
				UIButton(
					"跳转至用户主页",
					"输入用户UID自动跳转至用户主页",
					"跳转",
					void 0,
					false,
					false,
					"default",
					async (evt) => {
						utils.preventEvent(evt);
						let uid = prompt("请输入用户UID");
						if (typeof uid !== "string") {
							return;
						}
						let url = `https://www.toutiao.com/c/user/${uid}/`;
						let urlInst = new URL(url);
						let response = await httpx.options(url, {
							allowInterceptConfig: false,
							headers: {
								"User-Agent": utils.getRandomPCUA(),
								Host: urlInst.hostname,
								Origin: urlInst.origin,
								Referer: "https://www.toutiao.com/",
							},
						});
						if (!response.status) {
							log.error(response);
							Qmsg.error("获取用户sec_uid失败", { consoleLogContent: true });
							return;
						}
						let finalUrl = response.data.finalUrl;
						let sec_uid_match = finalUrl.match(/\/user\/token\/(.+)\//);
						if (!sec_uid_match) {
							Qmsg.error("正则获取用户sec_uid失败", {
								consoleLogContent: true,
							});
							return;
						}
						let sec_uid = sec_uid_match[sec_uid_match.length - 1];
						let userHomeUrl = DouYinUrlUtils.getUserHomeUrl(sec_uid);
						log.info(`用户sec_uid：` + sec_uid);
						log.info(`用户主页链接：` + userHomeUrl);
						window.open(userHomeUrl, "_blank");
					}
				),
			],
		},
	],
};
