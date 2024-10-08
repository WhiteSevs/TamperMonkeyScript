import { log, utils } from "@/env";
import { NetDiskRuleData } from "@/main/data/NetDiskRuleData";
import {
	NetDiskLinkClickMode,
	NetDiskLinkClickModeUtils,
} from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskParseObject } from "@/main/parse/NetDiskParseObject";
import { NetDiskView } from "@/main/view/NetDiskView";
import Qmsg from "qmsg";
import { GM_getValue } from "ViteGM";

export class NetDiskParse_Chengtong extends NetDiskParseObject {
	/**
	 * 入口
	 * @param netDiskIndex 网盘名称索引下标
	 * @param shareCode
	 * @param accessCode
	 */
	init(netDiskIndex: number, shareCode: string, accessCode: string) {
		let netDiskName = "chengtong";
		if (netDiskIndex !== 3) {
			log.warn(
				`解析站暂时只支持单文件解析，非单文件链接的点击动作为新标签页打开`
			);
			NetDiskView.netDiskUrlClickEvent({
				data: {
					netDiskName: netDiskName,
					netDiskIndex: netDiskIndex,
					shareCode: shareCode,
					accessCode: accessCode,
				},
				clickMode: "openBlank",
			});
			return;
		}
		let apiHost = GM_getValue<string>("chengtong-parse-file-api-host");
		if (utils.isNull(apiHost)) {
			Qmsg.error("请先配置文件解析接口地址");
			return;
		}
		if (!apiHost.endsWith("/")) {
			apiHost += "/";
		}
		let url = apiHost + "?file=" + shareCode;
		if (utils.isNotNull(accessCode)) {
			url += "&pass=" + accessCode;
		}
		window.open(url, "_blank");
	}
}
