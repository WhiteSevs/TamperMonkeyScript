import { log, MenuRegister, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import Utils from "@whitesev/utils";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { CharacterMapping } from "./character-mapping/CharacterMapping";
import { WebsiteRule } from "./website-rule/WebsiteRule";

export const NetDisk = {
  $data: {
    /**
     * 是否成功匹配到链接
     */
    isMatchedLink: false,
    /**
     * 剪贴板内容
     */
    clipboardText: "",
  },
  /** 匹配信息 */
  $match: {
    /**
     * 匹配到的链接信息
     *
     * Worker识别规则 -> 存储识别到的信息（访问码|分享码|规则下标...）
     *
     * <规则key,匹配信息>
     *
     * <分享码,匹配信息详情>
     */
    matchedInfo: new Utils.Dictionary<string, UtilsDictionary<string, NetDiskDictData>>(),
    /**
     * 黑名单-识别到的信息
     *
     * 如果Worker识别到的信息能在这里面找到对应的shareCode，则不会被识别
     */
    blackMatchedInfo: new Utils.Dictionary<string, UtilsDictionary<string, NetDiskDictData>>(),
    /**
     * （临时）链接字典
     */
    tempMatchedInfo: new Utils.Dictionary<string, UtilsDictionary<string, NetDiskWorkerHandleObject>>(),
    /**
     * 用于存储已匹配到的网盘规则名
     * 只有单独的名
     */
    matchedInfoRuleKey: new Set<string>(),
  },
  /** 规则 */
  $rule: {
    /** 执行匹配本文的规则 */
    ruleOption: {} as NetDiskMatchedRuleOption,
    /** 各个规则的设置项 */
    ruleSetting: {} as {
      [key: string]: NetDiskRuleSetting;
    },
    /** 各个规则 */
    rule: [] as NetDiskRuleOption[],
  },
  /** 额外规则，用于辅助处理 */
  $extraRule: {
    /**
     * 使用该正则判断提取到的shareCode是否正确
     */
    shareCodeNotMatchRegExpList: [
      /vipstyle|notexist|ajax|file|download|ptqrshow|xy-privacy/g,
      /comp|web|undefined|1125|unproved|console|account|favicon|setc/g,
    ],
    /**
     * 使用该正则判断提取到的accessCode是否正确
     */
    accessCodeNotMatchRegExpList: [/^(font|http)/gi],
    /**
     * 访问码需要去除的正则匹配规则
     */
    accessCodeNeedRemoveStr: ["：", " ", ":", "\n", "提取码", "密码", "?password=", "?pwd=", "&pwd=", "?p=", "访问码"],
    /**
     * 当没有accessCode时，使用该正则去除不需要的字符串
     */
    noAccessCodeRegExp: [
      /( |提取码:|\n密码：)/gi,
      /{#accessCode#}/gi,
      /{#encodeURI-accessCode#}|{#encodeURIComponent-accessCode#}/gi,
      /{#decodeURI-accessCode#}|{#decodeURIComponent-accessCode#}/gi,
      /(\?pwd=|&pwd=|\?password=|\?p=)/gi,
    ],
  },
  /**
   * 初始化
   */
  init() {
    this.initDictMapping();
  },
  /**
   * 初始化字典映射
   */
  initDictMapping() {
    const ruleOptionKeys = Object.keys(this.$rule.ruleOption);
    ruleOptionKeys.forEach((ruleKeyName) => {
      this.$match.matchedInfo.set(ruleKeyName, new utils.Dictionary());
      this.$match.blackMatchedInfo.set(ruleKeyName, new utils.Dictionary());
      this.$match.tempMatchedInfo.set(ruleKeyName, new utils.Dictionary());
    });

    // 这里是输出信息用的，无其它的作用
    const matchedUrlRuleList = WebsiteRule.getUrlMatchedRule();
    const TAG = CommonUtil.isTopWindow() ? "" : "iframe：";
    if (matchedUrlRuleList.length) {
      log.info(`${TAG}成功命中的网站规则 ==> `, matchedUrlRuleList);
      MenuRegister.add({
        key: "matchedUrlRuleList" + TAG,
        text: `${TAG}🌏 命中网站规则 ${matchedUrlRuleList.length} 条`,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
          log.info(`${TAG}当前网址：` + self.location.href);
          const ruleList: WebsiteRuleOption[] = [];
          const subscribeRuleList: WebsiteRuleOption[] = [];
          matchedUrlRuleList.forEach((rule) => {
            if (rule.subscribeUUID) {
              subscribeRuleList.push(rule);
            } else {
              ruleList.push(rule);
            }
          });
          let alertMessage = "";
          if (ruleList.length) {
            alertMessage += ["=====↓↓↓ 以下是本地的规则名 ↓↓↓====="]
              .concat(ruleList.map((it) => it.name ?? it.url))
              .join("\n");
          }
          if (subscribeRuleList.length) {
            alertMessage += "\n\n\n";
            alertMessage += ["=====↓↓↓ 以下是订阅的规则名 ↓↓↓====="]
              .concat(subscribeRuleList.map((it) => it.name ?? it.url))
              .join("\n");
          }
          log.info(alertMessage);
          globalThis.alert(alertMessage);
        },
      });
    }
    // 这里是输出信息用的，无其它的作用
    const matchedCharacterMappingRuleList = CharacterMapping.getUrlMatchedRule();
    if (matchedCharacterMappingRuleList.length) {
      log.info(`${TAG}成功命中的字符规则 ==> `, matchedCharacterMappingRuleList);
      MenuRegister.add({
        key: "characterMapping",
        text: `${TAG}🌏 命中字符规则 ${matchedCharacterMappingRuleList.length} 条`,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
          log.info(`${TAG}当前网址：` + self.location.href);
          const ruleList: CharacterMappingOption[] = [];
          const subscribeRuleList: CharacterMappingOption[] = [];
          matchedCharacterMappingRuleList.forEach((rule) => {
            if (rule.subscribeUUID) {
              subscribeRuleList.push(rule);
            } else {
              ruleList.push(rule);
            }
          });
          let alertMessage = "";
          if (ruleList.length) {
            alertMessage += ["=====↓↓↓ 以下是本地的规则名 ↓↓↓====="]
              .concat(ruleList.map((it) => it.name ?? it.data.url))
              .join("\n");
          }
          if (subscribeRuleList.length) {
            alertMessage += "\n\n\n";
            alertMessage += ["=====↓↓↓ 以下是订阅的规则名 ↓↓↓====="]
              .concat(subscribeRuleList.map((it) => it.name ?? it.data.url))
              .join("\n");
          }
          log.info(alertMessage);
          globalThis.alert(alertMessage);
        },
      });
    }
  },
  /**
   * 判断规则是否存在字典映射内
   */
  checkHasRuleOption(ruleKeyName: string, ruleIndex?: number): boolean {
    const ruleConfig = NetDisk.$rule.ruleOption?.[ruleKeyName];
    if (!Array.isArray(ruleConfig)) {
      return false;
    }
    if (typeof ruleIndex === "number") {
      if (ruleIndex < 0 || ruleConfig.length <= ruleIndex) {
        return false;
      }
    }
    return true;
  },
};
