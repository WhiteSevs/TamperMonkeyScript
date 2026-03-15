import type { BilibiliFailResponse } from "./BilibiliApiConfig";

export const BilibiliApiResponseCheck = {
  /**
   * check json has {code: 0, message: "0"}
   */
  isWebApiSuccess(json: any) {
    const message = (typeof json?.message === "string" ? json.message : "").toLowerCase();
    return json?.code === 0 && (json?.message === "0" || message === "success" || message === "ok");
  },
  /**
   * 是否是区域限制
   */
  isAreaLimit(data: BilibiliFailResponse) {
    const areaLimitCode = {
      "6002003": "抱歉您所在地区不可观看！",
    };
    const flag =
      Object.keys(areaLimitCode).findIndex((code) => {
        // 消息
        const codeMsg = areaLimitCode[code as keyof typeof areaLimitCode];
        if (data.code.toString() === code.toString() || data.message.includes(codeMsg)) {
          return true;
        }
      }) !== -1;

    return flag;
  },
};
