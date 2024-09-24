import { utils } from "@/env";
import { NetDiskRuleData } from "../data/NetDiskRuleData";
import { NetDiskRuleUtils } from "../rule/NetDiskRuleUtils";

/** 网盘-直链进行Scheme过滤 */
export const NetDiskFilterScheme = {
	protocol: "jumpwsv",
	pathname: "go",
	/**
	 * 处理链接
	 * @param name 规则名
	 * @param intentData 需要处理的数据
	 */
	parseDataToSchemeUri(name: string, intentData: string): string {
		/** 是否启用 */
		let isEnable = NetDiskRuleData.schemeUri.enable(name);
		if (!isEnable) {
			return intentData;
		}
		/** 转发的scheme */
		let schemeUri = NetDiskRuleData.schemeUri.uri(name);
		if (utils.isNull(schemeUri)) {
			schemeUri = this.getSchemeUri(this.get1DMSchemeUriOption(intentData));
		}
		if (schemeUri.startsWith(this.protocol)) {
			intentData = intentData.replace(/&/g, "{-and-}");
			intentData = intentData.replace(/#/g, "{-number-}");
		}
		schemeUri = NetDiskRuleUtils.replaceParam(schemeUri, {
			intentData: intentData,
		});
		return schemeUri;
	},
	/**
	 * 是否转发下载链接
	 * @param key
	 */
	isForwardDownloadLink(key: string) {
		return NetDiskRuleData.schemeUri.isForwardLinearChain(key);
	},
	/**
	 * 是否转发跳转链接
	 * @param key
	 */
	isForwardBlankLink(key: string) {
		return NetDiskRuleData.schemeUri.isForwardBlankLink(key);
	},
	/**
	 * 获取转发的uri链接
	 * @param option
	 */
	getSchemeUri(option: any) {
		return `${this.protocol}://${this.pathname}?package=${option["package"]}&activity=${option["activity"]}&intentAction=${option["intentAction"]}&intentData=${option["intentData"]}&intentExtra=${option["intentExtra"]}`;
	},
	/**
	 * 获取1dm的intent的配置
	 * @param intentData
	 */
	get1DMSchemeUriOption(intentData = "") {
		return {
			package: "idm.internet.download.manager.plus",
			activity: "idm.internet.download.manager.UrlHandlerDownloader",
			intentAction: "android.intent.action.VIEW",
			intentData: intentData,
			intentExtra: "",
		};
	},
};
