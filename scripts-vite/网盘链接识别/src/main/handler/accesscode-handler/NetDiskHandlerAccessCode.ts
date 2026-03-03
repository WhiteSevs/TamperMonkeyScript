import { NetDiskAccessCodeHandler_baidu } from "@/main/rule/default-rule/baidu/accessCodeHandler";

/**
 * 规则配置
 */
export const NetDiskHandlerAccessCodeRule: Record<
  string,
  (handlerConfig: NetDiskHandlerAccessCodeOption, accessCode: AccessCodeType) => AccessCodeType
> = {
  /**
   * 百度网盘
   */
  baidu: NetDiskAccessCodeHandler_baidu,
};

/**
 * 处理访问码
 */
export const NetDiskHandlerAccessCode = {
  handler(handlerConfig: NetDiskHandlerAccessCodeOption, accessCode: AccessCodeType): AccessCodeType {
    const handle = NetDiskHandlerAccessCodeRule[handlerConfig.ruleKeyName];
    if (!handle) {
      // 不存在处理函数
      return accessCode;
    }
    const accessCodeHandlerResult = handle(handlerConfig, accessCode);
    if (
      (typeof accessCodeHandlerResult === "string" && accessCodeHandlerResult.trim() != "") ||
      accessCodeHandlerResult === null ||
      accessCodeHandlerResult === void 0
    ) {
      return accessCodeHandlerResult;
    }
  },
};
