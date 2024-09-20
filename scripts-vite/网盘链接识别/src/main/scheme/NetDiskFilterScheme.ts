import { utils } from "@/env";
import { NetDisk } from "../NetDisk";
import { NetDiskRuleData } from "../data/NetDiskRuleData";
import { NetDiskRuleUtils } from "../rule/NetDiskRuleUtils";

/** 网盘-直链进行Scheme过滤 */
export const NetDiskFilterScheme = {
	protocol: "jumpwsv",
	pathname: "go",
	/**
	 * 处理链接
	 * @param {string} name 规则名
	 * @param {string} intentData 需要处理的数据
	 * @returns {string}
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
			schemeUri = this.getSchemeUri(this.getIDMSchemeUriOption(intentData));
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
	 * @returns
	 */
	isForwardDownloadLink(key: string) {
		return NetDiskRuleData.schemeUri.isForwardLinearChain(key);
	},
	/**
	 * 是否转发跳转链接
	 * @param key
	 * @returns
	 */
	isForwardBlankLink(key: string) {
		return NetDiskRuleData.schemeUri.isForwardBlankLink(key);
	},
	/**
	 * 获取转发的uri链接
	 * @param option
	 * @returns
	 */
	getSchemeUri(option: any) {
		return `${this.protocol}://${this.pathname}?package=${option["package"]}&activity=${option["activity"]}&intentAction=${option["intentAction"]}&intentData=${option["intentData"]}&intentExtra=${option["intentExtra"]}`;
	},
	/**
	 * 获取idm的intent的配置
	 * @param intentData
	 * @returns
	 */
	getIDMSchemeUriOption(intentData = "") {
		return {
			package: "idm.internet.download.manager.plus",
			activity: "idm.internet.download.manager.UrlHandlerDownloader",
			intentAction: "android.intent.action.VIEW",
			intentData: intentData,
			intentExtra: "",
		};
	},
};
