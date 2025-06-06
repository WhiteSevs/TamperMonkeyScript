import { log, utils } from "@/env";
import { ParseFileAbstract } from "@/main/parse/NetDiskParseObject";
import { NetDiskView } from "@/main/view/NetDiskView";
import Qmsg from "qmsg";
import { GM_getValue } from "ViteGM";

export class NetDiskParse_Chengtong extends ParseFileAbstract {
	/**
	 * 入口
	 * @param ruleIndex
	 * @param shareCode
	 * @param accessCode
	 */
	init(
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeNonNullType
	) {
		let ruleKeyName = "chengtong";
		if (ruleIndex !== 3) {
			log.warn(
				`解析站暂时只支持单文件解析，非单文件链接的点击动作为新标签页打开`
			);
			NetDiskView.netDiskUrlClickEvent({
				data: {
					ruleKeyName: ruleKeyName,
					ruleIndex: ruleIndex,
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
