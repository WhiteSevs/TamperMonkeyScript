import { utils } from "@/env";
import { NetDiskRuleData } from "../data/NetDiskRuleData";
import { NetDiskRuleUtils } from "../rule/NetDiskRuleUtils";

type UriOption = {
	/** 包名 @example "idm.internet.download.manager.plus" */
	package: string;
	/** activity名 @example "idm.internet.download.manager.UrlHandlerDownloader" */
	activity: string;
	/** @example "android.intent.action.VIEW" */
	intentAction: string;
	/** 传递的数据 @example "https://www.baidu.com" */
	intentData: string;
	intentExtra: string;
};

/** 网盘-直链进行Scheme过滤 */
export const NetDiskFilterScheme = {
	protocol: "jumpwsv",
	pathname: "go",
	/**
	 * 把链接转为scheme的uri链接
	 * @param key 规则名
	 * @param intentData 需要处理的数据
	 */
	parseDataToSchemeUri(key: string, intentData: string): string {
		/** 是否启用 */
		let isEnable = this.isEnableForward(key);
		if (!isEnable) {
			return intentData;
		}
		/** 转发的scheme */
		let schemeUri = NetDiskRuleData.schemeUri.uri(key);
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
	 * 是否启用转发
	 * @param key
	 * @returns
	 */
	isEnableForward(key: string) {
		return NetDiskRuleData.schemeUri.enable(key);
	},
	/**
	 * 是否转发下载链接
	 * @param key
	 */
	isForwardDownloadLink(key: string) {
		return (
			this.isEnableForward(key) &&
			NetDiskRuleData.schemeUri.isForwardLinearChain(key)
		);
	},
	/**
	 * 是否转发新标签页的链接
	 * @param key
	 */
	isForwardBlankLink(key: string) {
		return (
			this.isEnableForward(key) &&
			NetDiskRuleData.schemeUri.isForwardBlankLink(key)
		);
	},
	/**
	 * 获取转发的uri链接
	 * @param option
	 */
	getSchemeUri(option: UriOption) {
		return `${this.protocol}://${this.pathname}?${utils.toSearchParamsStr(
			option
		)}`;
	},
	/**
	 * 获取1dm的intent的配置
	 * @param intentData
	 */
	get1DMSchemeUriOption(intentData = ""): UriOption {
		return {
			package: "idm.internet.download.manager.plus",
			activity: "idm.internet.download.manager.UrlHandlerDownloader",
			intentAction: "android.intent.action.VIEW",
			intentData: intentData,
			intentExtra: "",
		};
	},
};
