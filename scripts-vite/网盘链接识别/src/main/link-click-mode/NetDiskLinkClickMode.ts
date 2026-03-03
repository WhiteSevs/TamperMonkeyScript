import { $, DOMUtils, log, utils } from "@/env";
import { NetDiskHandlerUtil } from "@/utils/NetDiskHandlerUtil";
import Qmsg from "qmsg";
import { GM_openInTab } from "ViteGM";
import { NetDiskRuleData } from "@/main/data/NetDiskRuleData";
import type { NetDiskDebugHandlerConfig } from "@/main/debug/NetDiskDebug";
import { NetDisk } from "@/main/NetDisk";
import { NetDiskRuleUtils } from "@/main/rule/NetDiskRuleUtils";
import { NetDiskAutoFillAccessCode } from "@/main/handler/auto-fill-accesscode/NetDiskAutoFillAccessCode";
import { NetDiskParseRule } from "@/main/handler/parse/NetDiskParse";
import { NetDiskFilterScheme } from "@/main/scheme/NetDiskFilterScheme";
import { CommonUtil } from "@components/utils/CommonUtil";

export const NetDiskLinkClickModeUtils = {
  /**
   * 获取用于跳转的url
   * @param handlerConfig 配置
   */
  getBlankUrl(handlerConfig: {
    /** 规则键名 */
    ruleKeyName: string;
    /** 规则的索引下标 */
    ruleIndex: number;
    /** 分享码 */
    shareCode: string;
    /** 访问码 */
    accessCode: AccessCodeType;
    /**
     * （可选）当前调试的配置
     */
    debugConfig?: NetDiskDebugHandlerConfig;
  }) {
    let ruleConfig =
      handlerConfig.debugConfig?.config ?? NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
    let blankUrl = ruleConfig.blank;
    if (handlerConfig.shareCode) {
      blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, {
        shareCode: handlerConfig.shareCode,
      });
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [`正则: blank`, "作用: 用于点击跳转的链接", "备注: 对shareCode进行参数替换", `结果: ${blankUrl}`],
      });
    }
    if (handlerConfig.accessCode && handlerConfig.accessCode !== "") {
      blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, {
        accessCode: handlerConfig.accessCode,
      });
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [`正则: blank`, "作用: 用于点击跳转的链接", "备注: 对accessCode进行参数替换", `结果: ${blankUrl}`],
      });
    } else {
      blankUrl = NetDiskHandlerUtil.replaceText(blankUrl, NetDisk.$extraRule.noAccessCodeRegExp, "");
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: 内置的noAccessCodeRegExp`,
          "作用: 因accessCode为空，使用该正则去除不需要的字符串",
          `结果: ${blankUrl}`,
        ],
      });
    }
    if (ruleConfig.paramMatch) {
      /**
       * 当前字典
       */
      let currentDict = NetDisk.$match.matchedInfo.get(handlerConfig.ruleKeyName).get(handlerConfig.shareCode);
      let matchText = handlerConfig.debugConfig?.matchText || currentDict.matchText;
      let paramMatchArray = matchText.match(ruleConfig.paramMatch);
      let replaceParamData: {
        [key: string]: string;
      } = {};
      if (paramMatchArray) {
        for (let index = 0; index < paramMatchArray.length; index++) {
          replaceParamData[`$${index}`] = paramMatchArray[index];
        }
      }
      blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, replaceParamData);
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: paramMatch`,
          `作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...`,
          `参数: ` + CommonUtil.toStr(replaceParamData, 4),
          `结果: ${blankUrl}`,
        ],
      });
    }
    return blankUrl;
  },
  /**
   * 获取用于复制到剪贴板的网盘信息
   * @param handlerConfig 配置
   */
  getCopyUrlInfo(handlerConfig: {
    /** 规则键名 */
    ruleKeyName: string;
    /** 规则的索引下标 */
    ruleIndex: number;
    /** 分享码 */
    shareCode: string;
    /** 访问码 */
    accessCode: AccessCodeType;
    /**
     * （可选）当前调试的配置
     */
    debugConfig?: NetDiskDebugHandlerConfig;
  }) {
    let ruleConfig =
      handlerConfig.debugConfig?.config ?? NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
    let copyUrl = ruleConfig["copyUrl"];
    if (handlerConfig.shareCode) {
      copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, {
        shareCode: handlerConfig.shareCode,
      });
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [`正则: copyUrl`, "作用: 用于复制到剪贴板的链接", "备注: 对shareCode进行参数替换", `结果: ${copyUrl}`],
      });
    }
    if (handlerConfig.accessCode && handlerConfig.accessCode !== "") {
      copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, {
        accessCode: handlerConfig.accessCode,
      });
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [`正则: copyUrl`, "作用: 用于复制到剪贴板的链接", "备注: 对accessCode进行参数替换", `结果: ${copyUrl}`],
      });
    } else {
      copyUrl = NetDiskHandlerUtil.replaceText(copyUrl, NetDisk.$extraRule.noAccessCodeRegExp, "");
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: 内置的noAccessCodeRegExp`,
          "作用: 因accessCode为空，使用该正则去除不需要的字符串",
          `结果: ${copyUrl}`,
        ],
      });
    }
    if (ruleConfig.paramMatch) {
      /**
       * 当前字典
       */
      let currentDict = NetDisk.$match.matchedInfo.get(handlerConfig.ruleKeyName).get(handlerConfig.shareCode);
      let matchText = handlerConfig.debugConfig?.matchText || currentDict.matchText;
      let paramMatchArray = matchText.match(ruleConfig.paramMatch);
      let replaceParamData: {
        [key: string]: string;
      } = {};
      if (paramMatchArray) {
        for (let index = 0; index < paramMatchArray.length; index++) {
          replaceParamData[`$${index}`] = paramMatchArray[index];
        }
      }
      copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, replaceParamData);
      handlerConfig.debugConfig?.logCallBack?.({
        status: true,
        msg: [
          `正则: paramMatch`,
          `作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...`,
          `参数: ` + CommonUtil.toStr(replaceParamData, 4),
          `结果: ${copyUrl}`,
        ],
      });
    }

    handlerConfig.debugConfig?.logCallBack?.({
      status: true,
      msg: "处理完毕的copyUrl: " + copyUrl,
    });
    return copyUrl;
  },
};

/** 链接点击动作 */
export const NetDiskLinkClickMode = {
  /**
   * 复制到剪贴板
   * @param ruleKeyName 规则键名
   * @param ruleIndex 规则的索引下标
   * @param shareCode 分享码
   * @param accessCode 提取码
   * @param toastText 复制成功的提示的文字
   */
  copy(
    ruleKeyName: string,
    ruleIndex: number,
    shareCode: string,
    accessCode: AccessCodeType,
    toastText: string = "已复制"
  ) {
    utils
      .copy(
        NetDiskLinkClickModeUtils.getCopyUrlInfo({
          ruleKeyName,
          ruleIndex,
          shareCode,
          accessCode,
        })
      )
      .then((status) => {
        if (status) {
          Qmsg.success(toastText);
        } else {
          Qmsg.error("执行复制失败", { consoleLogContent: true });
        }
      })
      .catch(() => {
        Qmsg.error("执行复制失败", { consoleLogContent: true });
      });
  },
  /**
   * 链接解析
   * @param ruleKeyName 规则键名
   * @param ruleIndex 规则的索引下标
   * @param shareCode 分享码
   * @param accessCode 提取码
   */
  async parseFile(ruleKeyName: string, ruleIndex: number, shareCode: string, accessCode: AccessCodeType) {
    log.success(`链接解析：`, CommonUtil.toStr({ ruleKeyName, ruleIndex, shareCode, accessCode }));
    const ParserInst = NetDiskParseRule[ruleKeyName as keyof typeof NetDiskParseRule];
    if (ParserInst) {
      const netDiskInfo: ParseFileInitConfig = {
        ruleIndex,
        shareCode,
        accessCode: accessCode ?? "",
      };
      const parser = new ParserInst();
      // 参数初始化
      parser.ruleIndex = netDiskInfo.ruleIndex;
      parser.shareCode = netDiskInfo.shareCode;
      parser.accessCode = netDiskInfo.accessCode;
      log.info("文件解析：", netDiskInfo);
      await parser.init(netDiskInfo);
    } else {
      log.error(`${ruleKeyName} 未配置解析函数`, [ruleKeyName, ruleIndex, shareCode, accessCode]);
      Qmsg.error("该链接未配置解析函数");
    }
  },
  /**
   * 新标签页打开
   * @param url 跳转的网址
   * @param ruleKeyName 规则键名
   * @param ruleIndex 规则的索引下标
   * @param shareCode 分享码
   * @param accessCode 提取码
   * @param isOpenInBackEnd 是否使用后台打开，默认false
   */
  openBlankUrl(
    url: string,
    ruleKeyName: string,
    ruleIndex: number,
    shareCode: string,
    accessCode: AccessCodeType,
    isOpenInBackEnd: boolean = false
  ) {
    log.success(
      `新标签页打开${isOpenInBackEnd ? "（后台打开）" : ""}`,
      CommonUtil.toStr({ url, ruleKeyName, ruleIndex, shareCode, accessCode, isOpenInBackEnd })
    );
    if (NetDiskAutoFillAccessCode.$data.enable) {
      // 自动填充访问码
      NetDiskAutoFillAccessCode.addValue({
        url: url,
        ruleKeyName: ruleKeyName,
        ruleIndex: ruleIndex,
        shareCode: shareCode,
        accessCode: accessCode!,
        time: Date.now(),
      });
    }
    if (NetDiskFilterScheme.isForwardBlankLink(ruleKeyName)) {
      url = NetDiskFilterScheme.parseDataToSchemeUri(ruleKeyName, url);
    }
    // 百度网盘会拒绝referrer不安全访问
    $("meta[name='referrer']")?.setAttribute("content", "no-referrer");

    /**
     * 新标签页打开链接
     */
    let openUrl = () => {
      if (isOpenInBackEnd) {
        // 后台打开
        GM_openInTab(url, {
          active: false,
        });
      } else {
        // 新标签页打开（自动获取焦点）
        try {
          const blankWindow = window.open(url, "_blank");
          if (blankWindow) {
            blankWindow.focus();
          }
        } catch (error) {
          log.error(error, url);
          const $blank = DOMUtils.createElement("a");
          $blank.setAttribute("href", url);
          $blank.setAttribute("target", "_blank");
          $blank.click();
          $blank.remove();
        }
      }
    };
    if (
      utils.isNotNull(accessCode) &&
      NetDiskRuleData.linkClickMode_openBlank.openBlankWithCopyAccessCode(ruleKeyName)
    ) {
      // 等待复制完毕再跳转
      utils.copy(accessCode).then(() => {
        openUrl();
      });
    } else {
      openUrl();
    }
  },
  /**
   * 将链接转为Scheme格式并打开
   * @param ruleKeyName 规则键名
   * @param ruleIndex 规则的索引下标
   * @param shareCode
   * @param accessCode
   */
  openBlankWithScheme(ruleKeyName: string, ruleIndex: number, shareCode: string, accessCode: AccessCodeType) {
    log.success("scheme新标签页打开", CommonUtil.toStr({ ruleKeyName, ruleIndex, shareCode, accessCode }));
    let url = NetDiskLinkClickModeUtils.getBlankUrl({
      ruleKeyName,
      ruleIndex,
      shareCode,
      accessCode,
    });
    url = NetDiskFilterScheme.parseDataToSchemeUri(ruleKeyName, url);
    window.open(url, "_blank");
  },
};
