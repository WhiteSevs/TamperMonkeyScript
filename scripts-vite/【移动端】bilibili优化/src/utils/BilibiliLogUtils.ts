import { log, utils } from "@/env";

export const BilibiliLogUtils = {
	/**
	 * 过滤searchParam的敏感数据
	 */
	filteringSensitiveSearchParamData(data: any) {
		const sensitiveData = utils.assign({}, data, true);
		Reflect.deleteProperty(sensitiveData, "access_key");
		Reflect.deleteProperty(sensitiveData, "access_token");
		return sensitiveData;
	},
	/**
	 * 请求失败的信息弹窗
	 */
	failToast(data: any) {
		log.error(data);
		alert(JSON.stringify(data, null, 4));
	},
};
