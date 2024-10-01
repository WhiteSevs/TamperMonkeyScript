import type { BilibiliFailResponse } from "./BilibiliApiConfig";

export const BilibiliResponseCheck = {
	/**
	 * check json has {code: 0, message: "0"}
	 */
	isWebApiSuccess(json: any) {
		return (
			json?.code === 0 && (json?.message === "0" || json?.message === "success")
		);
	},
	/**
	 * 是否是区域限制
	 */
	isAreaLimit(data: BilibiliFailResponse) {
		let areaLimitCode = {
			"6002003": "抱歉您所在地区不可观看！",
		};
		let flag = false;
		Object.keys(areaLimitCode).forEach((code) => {
			// 消息
			let codeMsg = areaLimitCode[code as keyof typeof areaLimitCode];
			if (
				data.code.toString() === code.toString() ||
				data.message.includes(codeMsg)
			) {
				flag = true;
			}
		});

		return flag;
	},
};
