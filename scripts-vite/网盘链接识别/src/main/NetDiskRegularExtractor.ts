import { DEBUG, log, utils } from "@/env";
import { NetDiskHandlerUtil } from "@/utils/NetDiskHandlerUtil";
import Qmsg from "qmsg";
import { NetDiskGlobalData } from "./data/NetDiskGlobalData";
import { WebsiteRuleDataKey } from "./data/NetDiskRuleDataKey";
import { NetDiskHandlerAccessCode } from "./handler/accesscode-handler/NetDiskHandlerAccessCode";
import { NetDiskAutoFillAccessCode } from "./handler/auto-fill-accesscode/NetDiskAutoFillAccessCode";
import { NetDisk } from "./NetDisk";
import { NetDiskRuleUtils } from "./rule/NetDiskRuleUtils";
import { WebsiteRule } from "./website-rule/WebsiteRule";
import { CommonUtil } from "@components/utils/CommonUtil";

export const NetDiskRegularExtractor = {
  /**
   * 对传入的url进行处理，返回shareCode
   * @param handlerConfig 配置
   */
  extractShareCode(handlerConfig: NetDiskHandlerShareCodeOption) {
    const handler = () => {
      // 当前执行的规则
      const ruleConfig =
        handlerConfig?.debugConfig?.config ??
        NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      const shareCodeMatch = handlerConfig.matchText
        .match(ruleConfig.shareCode)
        ?.filter((item) => utils.isNotNull(item));
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [`正则: shareCode`, "作用: 获取shareCode", "结果: ", CommonUtil.toStr(shareCodeMatch)],
      });
      if (utils.isNull(shareCodeMatch)) {
        if (DEBUG) {
          log.error(`Debug-匹配shareCode为空`, {
            匹配的文本: handlerConfig.matchText,
            规则: ruleConfig,
            正在使用的规则: ruleConfig.shareCode,
            网盘名称: handlerConfig.ruleKeyName,
            网盘名称索引下标: handlerConfig.ruleIndex,
          });
        }
        handlerConfig.debugConfig?.logCallBack?.({
          status: false,
          msg: `匹配shareCode为空`,
        });
        return;
      }
      // 匹配到的网盘链接，取第一个值就行
      let __shareCode__ = shareCodeMatch[0];
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [`取第一个值: ` + __shareCode__],
      });
      if (ruleConfig.shareCodeNeedRemoveStr) {
        let shareCodeNeedRemoveStrList = ruleConfig.shareCodeNeedRemoveStr;
        // 删除ShareCode前面不需要的字符串
        if (!Array.isArray(shareCodeNeedRemoveStrList)) {
          shareCodeNeedRemoveStrList = [shareCodeNeedRemoveStrList];
        }
        for (let i = 0; i < shareCodeNeedRemoveStrList.length; i++) {
          const shareCodeRemoveRegExp = shareCodeNeedRemoveStrList[i];
          // 删除ShareCode前面不需要的字符串
          __shareCode__ = __shareCode__.replace(shareCodeRemoveRegExp, "");
        }
        if (shareCodeNeedRemoveStrList.length) {
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: [`正则: shareCodeNeedRemoveStr`, "作用: 删除ShareCode前面不需要的字符串", `结果: ${__shareCode__}`],
          });
        }
      }
      // 判断是否是黑名单中的分享码
      // 如果是，强制返回
      for (let i = 0; i < NetDisk.$extraRule.shareCodeBlackList.length; i++) {
        const shareCodeBlackListItem = NetDisk.$extraRule.shareCodeBlackList[i];
        if (__shareCode__.match(shareCodeBlackListItem)) {
          if (DEBUG) {
            log.error(`Debug-不可能的shareCode => ${__shareCode__}`);
          }
          handlerConfig.debugConfig?.logCallBack?.({
            status: false,
            msg: [
              `正则: 内置的shareCodeNotMatchRegExpList`,
              "作用: 使用该正则判断提取到的shareCode是否正确",
              `结果: true 该shareCode不是正确的`,
            ],
          });
          return;
        }
      }
      let shareCodeNotMatch = ruleConfig.shareCodeNotMatch;
      if (shareCodeNotMatch != null) {
        if (!Array.isArray(shareCodeNotMatch)) {
          shareCodeNotMatch = [shareCodeNotMatch];
        }
        for (let i = 0; i < shareCodeNotMatch.length; i++) {
          const shareCodeNotMatchRegExp = shareCodeNotMatch[i];
          if (__shareCode__.match(shareCodeNotMatchRegExp)) {
            if (DEBUG) {
              log.error(`Debug-不可能的shareCode => ${__shareCode__}`);
            }
            handlerConfig.debugConfig?.logCallBack?.({
              status: false,
              msg: [
                `正则: shareCodeNotMatch`,
                "作用: 用于判断提取到的shareCode是否是错误的shareCode",
                `结果: true 该shareCode不是正确的`,
              ],
            });
            return;
          }
        }
      }
      // %E7%BD%91%E7%9B%98 => 网盘
      __shareCode__ = decodeURI(__shareCode__);
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: ["对shareCode进行解码: " + __shareCode__],
      });
      if (
        NetDiskGlobalData.shareCode.excludeIdenticalSharedCodes.value &&
        utils.isSameChars(__shareCode__, NetDiskGlobalData.shareCode.excludeIdenticalSharedCodesCoefficient.value)
      ) {
        // 排除掉由相同字符组成的分享码
        handlerConfig.debugConfig?.logCallBack?.({
          status: false,
          msg: ["已开启【排除分享码】且该分享码命中该规则"],
        });
        return;
      }
      // 排除掉以http|https结尾的分享码
      if (__shareCode__.endsWith("http") || __shareCode__.endsWith("https")) {
        handlerConfig.debugConfig?.logCallBack?.({
          status: false,
          msg: ["该分享码以http|https结尾"],
        });
        return;
      }
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: "处理完毕的shareCode: " + __shareCode__,
      });
      return __shareCode__;
    };
    const shareCode = handler();
    return shareCode;
  },
  /**
   * 对传入的url进行处理，返回accessCode
   * @param handlerConfig 配置
   * @returns "xxxx" || ""
   */
  extractAccessCode(handlerConfig: NetDiskHandlerAccessCodeOption) {
    let accessCode: AccessCodeType;
    /**
     * 处理函数
     */
    const handler = (__accessCode__: AccessCodeType) => {
      // 当前执行正则匹配的规则
      const ruleConfig =
        handlerConfig.debugConfig?.config ??
        NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
      if (utils.isNull(ruleConfig.checkAccessCode)) {
        // 不存在匹配提取码的正则
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: "因未配置规则checkAccessCode，所以设置accessCode的值为空字符串",
        });
        return "";
      }
      const accessCodeMatch = handlerConfig.matchText.match(ruleConfig.checkAccessCode);
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: checkAccessCode`,
          "作用: 用来判断link_innerText或者link_innerHTML匹配到的字符串中是否存在密码，如果匹配到，那对匹配到的字符串进行二次处理",
          `结果: `,
          CommonUtil.toStr(accessCodeMatch),
        ],
      });
      if (accessCodeMatch) {
        // 匹配出带提取码的字符串
        const accessCodeMatchValue = accessCodeMatch[accessCodeMatch.length - 1];
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: "取最后一个值: " + accessCodeMatchValue,
        });
        for (let index = 0; index < NetDisk.$extraRule.checkAccessCodeBlackList.length; index++) {
          const checkAccessCodeBlackListItem = NetDisk.$extraRule.checkAccessCodeBlackList[index];
          if (accessCodeMatchValue.match(checkAccessCodeBlackListItem)) {
            handlerConfig.debugConfig?.logCallBack?.({
              status: false,
              msg: [
                `正则: 内置的checkAccessCodeBlackList`,
                "作用: 匹配到提取码，但提取码中包含禁止的字符串",
                `结果: 返回空字符串`,
              ],
            });
            return "";
          }
        }
        if (!ruleConfig.accessCode) {
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: "因未配置规则accessCode，所以设置accessCode的值为空字符串",
          });
          return "";
        }
        // 进去提取码匹配，且过滤掉null或undefined或空字符串
        const accessCodeMatchArray = accessCodeMatchValue
          .match(ruleConfig.accessCode)
          ?.filter((item) => utils.isNotNull(item));
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: accessCode`,
            "作用: 用来提取link_innerText或者link_innerHTML匹配到的字符串中的密码",
            `结果: `,
            CommonUtil.toStr(accessCodeMatchArray),
          ],
        });
        if (utils.isNull(accessCodeMatchArray)) {
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: "因↑匹配到的结果为空，默认accessCode的值为空",
          });
          return "";
        }
        if (accessCodeMatchArray.length) {
          // 取第一个值
          // 例如，匹配到的字符串是  密码：oanm 大于150m
          // 如果是最后一个，那么会匹配到150m
          // 所以取第一个值
          __accessCode__ = accessCodeMatchArray[0];
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: "取第一个值: " + __accessCode__,
          });
        }
      }
      if (utils.isNotNull(__accessCode__)) {
        // 判断是否是黑名单中的访问码
        // 如果是，访问码置空
        for (let i = 0; i < NetDisk.$extraRule.accessCodeBlackList.length; i++) {
          const accessCodeBlackListItem = NetDisk.$extraRule.accessCodeBlackList[i];
          if (__accessCode__.match(accessCodeBlackListItem)) {
            __accessCode__ = "";
            handlerConfig.debugConfig?.logCallBack?.({
              status: true,
              msg: [
                `正则: 内置的accessCodeNotMatchRegExpList`,
                "作用: 使用该正则判断提取到的accessCode是否正确",
                `结果: true 重置accessCode为空`,
              ],
            });
            break;
          }
        }
        let accessCodeNotMatchRegExpList = ruleConfig.acceesCodeNotMatch;
        if (accessCodeNotMatchRegExpList) {
          if (!Array.isArray(accessCodeNotMatchRegExpList)) {
            accessCodeNotMatchRegExpList = [accessCodeNotMatchRegExpList];
          }
          for (let i = 0; i < accessCodeNotMatchRegExpList.length; i++) {
            const accessCodeNotMatchRegExp = accessCodeNotMatchRegExpList[i];
            if (__accessCode__.match(accessCodeNotMatchRegExp)) {
              __accessCode__ = "";
              handlerConfig.debugConfig?.logCallBack?.({
                status: true,
                msg: [
                  `正则: acceesCodeNotMatch`,
                  "作用: 用于判断提取到的accessCode是否是错误的accessCode",
                  `结果: true 重置accessCode为空`,
                ],
              });
              break;
            }
          }
        }
        for (let i = 0; i < NetDisk.$extraRule.removeNotNeedStrByAccessCode.length; i++) {
          const accessCodeNeedRemoveStrRegExp = NetDisk.$extraRule.removeNotNeedStrByAccessCode[i];
          __accessCode__ = NetDiskHandlerUtil.replaceText(__accessCode__, accessCodeNeedRemoveStrRegExp, "");
        }
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: 内置的accessCodeNeedRemoveStr`,
            "作用: 用于处理提取到的accessCode删除部分不需要的字符串",
            `结果: ${__accessCode__}`,
          ],
        });
        // 删除不需要的字符串
        const accessCodeNeedRemoveStr = ruleConfig.accessCodeNeedRemoveStr;
        if (accessCodeNeedRemoveStr) {
          __accessCode__ = NetDiskHandlerUtil.replaceText(__accessCode__, accessCodeNeedRemoveStr, "");
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: [
              `正则: accessCodeNeedRemoveStr`,
              "作用: 用于处理提取到的accessCode删除部分不需要的字符串",
              `结果: true 重置accessCode为空`,
            ],
          });
        }
      }
      return __accessCode__;
    };
    /**
     * 处理函数（从自动填入访问码存储的数据中获取）
     */
    const handlerByAutoFill = (__accessCode__: AccessCodeType) => {
      if (utils.isNotNull(__accessCode__)) {
        // 访问码不为空，则不覆盖处理
        return __accessCode__;
      }
      const autoFilleDataList = NetDiskAutoFillAccessCode.getValue();
      const findValue = autoFilleDataList.find((it) => {
        // 规则相同且分享码相同
        return it.ruleKeyName === handlerConfig.ruleKeyName && it.shareCode === handlerConfig.shareCode;
      });
      if (findValue) {
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: "从自动填入访问码存储数据中获取到的访问码: " + findValue.accessCode,
        });
        return findValue.accessCode;
      } else {
        return __accessCode__ ?? "";
      }
    };
    /**
     * 处理函数（从规则中获取自定义访问码）
     */
    const handlerByUserRuleCustomAccessCode = (__accessCode__: AccessCodeType) => {
      // 当前执行正则匹配的规则
      const ruleConfigList = WebsiteRule.getUrlMatchedRule();

      for (let index = 0; index < ruleConfigList.length; index++) {
        const ruleConfig = ruleConfigList[index];
        const ruleData = WebsiteRule.getRuleData(ruleConfig);
        /** 自定义的访问码 */
        const customAccessCode = Reflect.get(
          ruleData,
          WebsiteRuleDataKey.features.customAccessCode(handlerConfig.ruleKeyName)
        );
        /** 判断是否启用自定义访问码 */
        const customAccessCodeEnable = Reflect.get(
          ruleData,
          WebsiteRuleDataKey.features.customAccessCodeEnable(handlerConfig.ruleKeyName)
        );
        if (customAccessCodeEnable && typeof customAccessCode === "string") {
          if (DEBUG) {
            log.success(`Debug-使用自定义网站规则中的提取码 ${handlerConfig.ruleKeyName} ${customAccessCode}`);
          }
          handlerConfig.debugConfig?.logCallBack?.({
            status: true,
            msg: "使用自定义网站规则中的提取码: " + customAccessCode,
          });
          return customAccessCode;
        }
      }
      return __accessCode__;
    };
    /**
     * 处理函数（其它情况）
     *
     * + 访问码和分享码相同
     */
    const handlerOhter = (__accessCode__: AccessCodeType) => {
      if (__accessCode__ === handlerConfig.shareCode) {
        // 访问码和分享码相同
        // 置空
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: "因分享码和提取到的访问码相同，判断为空: " + __accessCode__,
        });
        return "";
      }
      return __accessCode__;
    };
    accessCode = handler(accessCode);
    // 强制重新设置访问码
    accessCode = handlerByAutoFill(accessCode);
    // 强制重新设置访问码
    accessCode = handlerByUserRuleCustomAccessCode(accessCode);
    // 强制重新设置访问码
    accessCode = handlerOhter(accessCode);
    // 强制重新设置访问码
    accessCode = NetDiskHandlerAccessCode.handler(handlerConfig, accessCode);

    handlerConfig.debugConfig?.logCallBack?.({
      status: true,
      msg: "访问码最终值: " + accessCode,
    });
    return accessCode;
  },
  /**
   * 获取在弹窗中显示出的链接
   * @param handlerConfig 配置
   */
  extractShowLink(handlerConfig: NetDiskHandlerShowLinkOption) {
    const checkFlag = handlerConfig.debugConfig?.config
      ? true
      : NetDisk.checkHasRuleOption(handlerConfig.ruleKeyName, handlerConfig.ruleIndex);
    if (!checkFlag) {
      log.error(`BUG: ${handlerConfig.ruleKeyName}不存在，分析参数`, handlerConfig);
      if (handlerConfig.showToast ?? true) {
        Qmsg.error(`规则：${handlerConfig.ruleKeyName}不存在`);
      }
      return;
    }
    const ruleConfig =
      handlerConfig.debugConfig?.config ?? NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
    let uiLink = NetDiskRuleUtils.replacePlaceholder(ruleConfig.uiLinkShow, {
      shareCode: handlerConfig.shareCode,
    });
    handlerConfig.debugConfig?.logCallBack?.({
      status: true,
      msg: [`正则: uiLinkShow`, "作用: 用于显示在弹窗中的字符串", "备注: 对shareCode进行参数替换", `结果: ${uiLink}`],
    });
    if (typeof handlerConfig.accessCode === "string" && handlerConfig.accessCode.trim() != "") {
      // 替换{#accessCode#}占位符
      uiLink = NetDiskRuleUtils.replacePlaceholder(uiLink, {
        accessCode: handlerConfig.accessCode,
      });
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: uiLinkShow`,
          "作用: 用于显示在弹窗中的字符串",
          "备注: 对accessCode进行参数替换",
          `结果: ${uiLink}`,
        ],
      });
    } else {
      uiLink = NetDiskHandlerUtil.replaceText(uiLink, NetDisk.$extraRule.removeNotNeedStrByNoAccessCode, "");
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: 内置的noAccessCodeRegExp`,
          "作用: 因accessCode为空，使用该正则去除不需要的字符串",
          `结果: ${uiLink}`,
        ],
      });
    }
    if (ruleConfig.paramMatch) {
      /**
       * 当前字典
       */
      const currentDict = NetDisk.$match.matchedInfo.get(handlerConfig.ruleKeyName).get(handlerConfig.shareCode);
      handlerConfig.matchText = handlerConfig.matchText ?? currentDict?.matchText;
      if (utils.isNotNull(handlerConfig.matchText)) {
        const paramMatchArray = handlerConfig.matchText.match(ruleConfig.paramMatch);
        const replaceParamData: {
          [key: string]: string;
        } = {};
        if (paramMatchArray) {
          for (let index = 0; index < paramMatchArray.length; index++) {
            // $1,$2,$3....
            replaceParamData[`$${index}`] = paramMatchArray[index];
          }
        }
        uiLink = NetDiskRuleUtils.replacePlaceholder(uiLink, replaceParamData);
        handlerConfig.debugConfig?.logCallBack?.({
          status: true,
          msg: [
            `正则: paramMatch`,
            `作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...`,
            `参数: ` + CommonUtil.toStr(replaceParamData),
            `结果: ${uiLink}`,
          ],
        });
      }
    }

    handlerConfig.debugConfig?.logCallBack?.({
      status: true,
      msg: "处理完毕的uiLink: " + uiLink,
    });
    return uiLink;
  },
};
