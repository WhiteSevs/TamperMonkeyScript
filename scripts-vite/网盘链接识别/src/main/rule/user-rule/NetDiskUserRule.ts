import { Cryptojs, DOMUtils, httpx, log, pops, SCRIPT_NAME, utils } from "@/env";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { NetDiskAutoFillAccessCode } from "../../auto-fill-accesscode/NetDiskAutoFillAccessCode";
import { NetDiskAuthorization } from "../../authorization/NetDiskAuthorization";
import { NetDiskCheckLinkValidity } from "../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskParse } from "../../parse/NetDiskParse";
import { NetDiskRequire } from "./NetDiskRequire";
import { NetDiskView } from "../../view/NetDiskView";
import { NetDiskRuleDataKEY } from "@/main/data/NetDiskRuleDataKey";
import { StorageUtils } from "@components/utils/StorageUtils";
import { NetDiskRuleUtils } from "../NetDiskRuleUtils";
import {
  NetDiskUserRuleReplaceParam_matchRange_html,
  NetDiskUserRuleReplaceParam_matchRange_text,
} from "./NetDiskUserRuleReplaceParam";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import type { RulePanelContentOption, RuleSubscribeOption } from "@components/utils/RulePanelView";
import { NetDiskUserRuleUI } from "./NetDiskUserRuleUI";
import { PanelUISize } from "@components/setting/panel-ui-size";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { PROPS_STORAGE_API } from "@components/setting/panel-config";
import { UIInput } from "@components/setting/components/ui-input";
import { NetDiskUserRuleSubscribeRule } from "./NetDiskUserRuleSubscribeRule";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";

const NetDiskUserRuleStorageApi = new StorageUtils("userRule");

/** 用户规则上下文存储的数据 */
const NetDiskUserRuleBindContextStorageApi = new StorageUtils("userRuleBindContext");

/** 网盘-链接识别规则 */
export const NetDiskUserRule = {
  $data: {
    STORAGE_KEY: "rule",
    EXPORT_CONFIG_KEY: "rule-export-config",
    __userRule: null as any as UtilsDictionary<string, NetDiskRuleOption>,
    get userRule() {
      if (this.__userRule == null) {
        this.__userRule = new utils.Dictionary<string, NetDiskRuleOption>();
      }
      return this.__userRule;
    },
  },
  /**
   * 初始化
   */
  init() {
    // 把旧的数据转换
    let oldUserRule = GM_getValue("userRule");
    if (Array.isArray(oldUserRule)) {
      GM_deleteValue("userRule");
      this.setRule(oldUserRule);
    }
    // 先把本地规则进行转换
    let userRule = this.parseRule(this.getAllRule());
    // 再把订阅规则进行转换
    let subscribeRule = this.parseRule(NetDiskUserRuleSubscribeRule.getAllSubscribeRule());
    userRule = userRule.concat(subscribeRule);
    userRule.forEach((item) => {
      this.$data.userRule.set(item.setting.key, item);
    });
  },
  /**
   * 把输入的规则字符串解析为规则对象
   */
  parseRuleStrToRule(ruleText: string | NetDiskUserCustomRule) {
    /**
     * 检测regexp项是否符合规定
     * @param ruleRegExp
     */
    function checkRegExp(ruleRegExp: NetDiskUserCustomRuleRegexp) {
      if (typeof ruleRegExp["link_innerText"] !== "string") {
        return {
          success: false,
          msg: "regexp缺失的键名: link_innerText，类型: string",
        };
      }
      if (typeof ruleRegExp["link_innerHTML"] !== "string") {
        return {
          success: false,
          msg: "regexp缺失的键名: link_innerHTML，类型: string",
        };
      }
      if (typeof ruleRegExp["shareCode"] !== "string") {
        return {
          success: false,
          msg: "regexp缺失的键名: shareCode，类型: string",
        };
      }
      if (
        typeof ruleRegExp["shareCodeNeedRemoveStr"] !== "string" &&
        !Array.isArray(ruleRegExp["shareCodeNeedRemoveStr"])
      ) {
        return {
          success: false,
          msg: "regexp缺失的键名: shareCodeNeedRemoveStr，类型: string|string[]",
        };
      }
      if (typeof ruleRegExp["uiLinkShow"] !== "string") {
        return {
          success: false,
          msg: "regexp缺失的键名: uiLinkShow，类型: string",
        };
      }
      if (typeof ruleRegExp["blank"] !== "string") {
        return {
          success: false,
          msg: "regexp缺失的键名: blank，类型: string",
        };
      }
      if (typeof ruleRegExp["copyUrl"] !== "string") {
        return {
          success: false,
          msg: "regexp缺失的键名: copyUrl，类型: string",
        };
      }
      if (typeof ruleRegExp["accessCode"] === "string" && typeof ruleRegExp["checkAccessCode"] !== "string") {
        return {
          success: false,
          msg: "regexp设置了accessCode但是没有设置checkAccessCode",
        };
      }
      if (typeof ruleRegExp["accessCode"] !== "string" && typeof ruleRegExp["checkAccessCode"] === "string") {
        return {
          success: false,
          msg: "regexp设置了checkAccessCode但是没有设置accessCode",
        };
      }
      return {
        success: true,
        msg: "校验rule成功",
      };
    }
    /**
     * 检测设置项是否符合规定
     * @param ruleSetting
     */
    function checkSetting(ruleSetting: NetDiskUserCustomRuleSetting) {
      if (typeof ruleSetting["name"] !== "string") {
        return {
          success: false,
          msg: "setting缺失的键名: name，类型: string",
        };
      }
      if (typeof ruleSetting["enable"] !== "boolean") {
        return {
          success: false,
          msg: "setting缺失的键名: enable，类型: boolean",
        };
      }
      return {
        success: true,
        msg: "校验setting成功",
      };
    }
    try {
      let ruleJSON = typeof ruleText === "string" ? utils.toJSON<NetDiskUserCustomRule>(ruleText) : ruleText;
      log.info(`解析出的规则对象：`, ruleJSON);
      if (typeof ruleJSON !== "object") {
        return {
          success: false,
          msg: "该规则不是object类型",
        };
      }
      if (Object.keys(ruleJSON).length === 0) {
        return {
          success: false,
          msg: "该规则为空",
        };
      }
      if (typeof ruleJSON["key"] !== "string") {
        return {
          success: false,
          msg: "缺失的键名: key，类型: string",
        };
      }
      if (typeof ruleJSON["regexp"] !== "object") {
        return {
          success: false,
          msg: "缺失的键名: regexp，类型: object|Arrany",
        };
      }
      if (typeof ruleJSON["setting"] !== "object") {
        return {
          success: false,
          msg: "缺失的键名: setting，类型: object",
        };
      }
      if (Array.isArray(ruleJSON["regexp"])) {
        for (const regexpItem of ruleJSON["regexp"]) {
          let result = checkRegExp(regexpItem);
          if (!result.success) {
            return result;
          }
        }
      } else {
        let result = checkRegExp(ruleJSON["regexp"]);
        if (!result.success) {
          return result;
        }
      }
      let checkSettingResult = checkSetting(ruleJSON["setting"]);
      if (!checkSettingResult.success) {
        return checkSettingResult;
      }
      return {
        success: true,
        msg: "解析成功",
        data: ruleJSON,
      };
    } catch (error: any) {
      log.error(error);
      return {
        success: false,
        msg: error.message,
      };
    }
  },
  /**
   * 上下文环境
   * @param rule
   */
  getBindContext(rule: NetDiskUserCustomRule) {
    return {
      rule: rule,
      NetDiskRequire: NetDiskRequire,
      CryptoJS: Cryptojs,
      httpx: httpx,
      utils: utils,
      DOMUtils: DOMUtils,
      window: window,
      unsafeWindow: unsafeWindow,
      NetDiskCheckLinkValidity: NetDiskCheckLinkValidity,
      NetDiskCheckLinkValidityStatus: NetDiskCheckLinkValidityStatus,
      log: log,
      Qmsg: Qmsg,
      pops: pops,
      setValue: NetDiskUserRuleBindContextStorageApi.set.bind(NetDiskUserRuleBindContextStorageApi),
      getValue: NetDiskUserRuleBindContextStorageApi.get.bind(NetDiskUserRuleBindContextStorageApi),
      deleteValue: NetDiskUserRuleBindContextStorageApi.delete.bind(NetDiskUserRuleBindContextStorageApi),
    };
  },
  /**
   * 把用户链接识别规则进行转换成脚本规则
   * @param localRule 用户的规则
   */
  parseRule(localRule: NetDiskUserCustomRule[]): NetDiskRuleOption[] {
    /**
     * 这里是第1步骤的处理函数
     *
     * 规则转换
     *
     * 把字符串类型的转为正则
     * @param ruleKey 规则键
     * @param userRuleConfig 用户规则配置
     * @param ruleRegExp 用户的匹配规则
     */
    function parseUserRuleToScriptRule(
      ruleKey: string,
      userRuleConfig: NetDiskUserCustomRule,
      ruleRegExp: NetDiskUserCustomRuleRegexp
    ): NetDiskMatchRuleConfig {
      let {
        shareCode,
        shareCodeNeedRemoveStr,
        shareCodeNotMatch,
        checkAccessCode,
        accessCode,
        acceesCodeNotMatch,
        accessCodeNeedRemoveStr,
        paramMatch,
        ...otherRuleParams
      } = ruleRegExp;
      // 这里的值需要获取最新的，而不是配置默认值
      let netDiskRegularOption = {
        ...otherRuleParams,
      } as NetDiskMatchRuleConfig;
      // 处理link_innerText
      // 处理link_innerHTML
      // 把某些关键字参数替换为规定的数值
      netDiskRegularOption.link_innerText = NetDiskRuleUtils.replaceParam(
        netDiskRegularOption.link_innerText,
        NetDiskUserRuleReplaceParam_matchRange_text(ruleKey)
      );
      netDiskRegularOption.link_innerHTML = NetDiskRuleUtils.replaceParam(
        netDiskRegularOption.link_innerText,
        NetDiskUserRuleReplaceParam_matchRange_html(ruleKey)
      );

      if (typeof shareCode === "string") {
        netDiskRegularOption.shareCode = new RegExp(shareCode, "ig");
      }
      if (shareCodeNeedRemoveStr) {
        if (typeof shareCodeNeedRemoveStr === "string") {
          shareCodeNeedRemoveStr = [shareCodeNeedRemoveStr];
        }
        if (Array.isArray(shareCodeNeedRemoveStr)) {
          // 字符串转正则
          if (Array.isArray(netDiskRegularOption.shareCodeNeedRemoveStr)) {
            netDiskRegularOption.shareCodeNeedRemoveStr.length = 0;
          } else {
            netDiskRegularOption.shareCodeNeedRemoveStr = [];
          }
          for (const shareCodeNeedRemoveStrItem of shareCodeNeedRemoveStr) {
            if (typeof shareCodeNeedRemoveStrItem === "string") {
              const shareCodeNeedRemoveStrItemRegExp = new RegExp(shareCodeNeedRemoveStrItem, "ig");
              netDiskRegularOption.shareCodeNeedRemoveStr.push(shareCodeNeedRemoveStrItemRegExp);
            }
          }
        }
      }
      if (shareCodeNotMatch) {
        if (typeof shareCodeNotMatch === "string") {
          shareCodeNotMatch = [shareCodeNotMatch];
        }
        if (Array.isArray(shareCodeNotMatch)) {
          // 字符串转正则
          if (Array.isArray(netDiskRegularOption.shareCodeNotMatch)) {
            netDiskRegularOption.shareCodeNotMatch.length = 0;
          } else {
            netDiskRegularOption.shareCodeNotMatch = [];
          }
          for (const shareCodeNotMatchItem of shareCodeNotMatch) {
            if (typeof shareCodeNotMatchItem === "string") {
              const shareCodeNotMatchItemRegExp = new RegExp(shareCodeNotMatchItem, "ig");
              netDiskRegularOption.shareCodeNotMatch.push(shareCodeNotMatchItemRegExp);
            }
          }
        }
      }
      if (typeof checkAccessCode === "string") {
        netDiskRegularOption.checkAccessCode = new RegExp(checkAccessCode, "ig");
      }
      if (typeof accessCode === "string") {
        netDiskRegularOption.accessCode = new RegExp(accessCode, "ig");
      }
      if (acceesCodeNotMatch) {
        if (typeof acceesCodeNotMatch === "string") {
          acceesCodeNotMatch = [acceesCodeNotMatch];
        }
        if (Array.isArray(acceesCodeNotMatch)) {
          // 字符串转正则
          if (Array.isArray(netDiskRegularOption.acceesCodeNotMatch)) {
            netDiskRegularOption.acceesCodeNotMatch.length = 0;
          } else {
            netDiskRegularOption.acceesCodeNotMatch = [];
          }
          for (const acceesCodeNotMatchItem of acceesCodeNotMatch) {
            if (typeof acceesCodeNotMatchItem === "string") {
              const acceesCodeNotMatchItemRegExp = new RegExp(acceesCodeNotMatchItem, "ig");
              netDiskRegularOption.acceesCodeNotMatch.push(acceesCodeNotMatchItemRegExp);
            }
          }
        }
      }
      if (accessCodeNeedRemoveStr) {
        if (typeof accessCodeNeedRemoveStr === "string") {
          accessCodeNeedRemoveStr = [accessCodeNeedRemoveStr];
        }
        if (Array.isArray(accessCodeNeedRemoveStr)) {
          // 字符串转正则
          if (Array.isArray(netDiskRegularOption.accessCodeNeedRemoveStr)) {
            netDiskRegularOption.accessCodeNeedRemoveStr.length = 0;
          } else {
            netDiskRegularOption.accessCodeNeedRemoveStr = [];
          }
          for (const accessCodeNeedRemoveStrItem of accessCodeNeedRemoveStr) {
            if (typeof accessCodeNeedRemoveStrItem === "string") {
              const accessCodeNeedRemoveStrItemRegExp = new RegExp(accessCodeNeedRemoveStrItem, "ig");
              netDiskRegularOption.accessCodeNeedRemoveStr.push(accessCodeNeedRemoveStrItemRegExp);
            }
          }
        }
      }
      if (typeof paramMatch === "string") {
        netDiskRegularOption.paramMatch = new RegExp(paramMatch, "i");
      }

      return netDiskRegularOption;
    }

    let netDiskRuleConfigList: NetDiskRuleOption[] = [];
    // 遍历传入的规则
    for (const userRuleItemConfig of localRule) {
      // 得配置全初始项
      let netDiskRuleConfig: NetDiskRuleOption = {
        subscribeUUID: userRuleItemConfig.subscribeUUID,
        rule: [],
        setting: {
          name: userRuleItemConfig.setting.name,
          key: userRuleItemConfig.key,
          configurationInterface: <Required<NetDiskRuleOption["setting"]["configurationInterface"]>>{
            matchRange_text: {},
            matchRange_html: {},
            function: {},
            linkClickMode_openBlank: {},
            schemeUri: {},
            ownFormList: [],
          },
        },
        isUserRule: true,
        afterRenderUrlBox: void 0,
      };
      // 规则
      const userRuleList = userRuleItemConfig.regexp;
      // 唯一键
      const ruleKey = userRuleItemConfig.key;

      // 1. 转换rule
      if (Array.isArray(userRuleList)) {
        userRuleList.forEach((userRuleItem) => {
          netDiskRuleConfig.rule.push(parseUserRuleToScriptRule(ruleKey, userRuleItemConfig, userRuleItem));
        });
      } else {
        netDiskRuleConfig.rule.push(parseUserRuleToScriptRule(ruleKey, userRuleItemConfig, userRuleList));
      }

      // 2. 转换setting
      if (userRuleItemConfig.setting) {
        // 其它的规则，也就是界面设置的规则
        /* 是否启用，初始化默认值 */
        this.initDefaultValue(NetDiskRuleDataKEY.function.enable(ruleKey), Boolean(userRuleItemConfig.setting.enable));
        // 添加默认值
        netDiskRuleConfig.setting!.configurationInterface!.function!.enable = Boolean(
          userRuleItemConfig.setting.enable
        );

        if (typeof userRuleItemConfig.setting["isBlank"] === "boolean") {
          /* 新标签页打开（旧） */
          this.initDefaultValue(NetDiskRuleDataKEY.function.linkClickMode(ruleKey), "openBlank");
          netDiskRuleConfig.setting!.configurationInterface!.function!.linkClickMode = {
            openBlank: {
              default: true,
              enable: true,
            },
          };
        }
        if (typeof userRuleItemConfig.setting.linkClickMode === "object") {
          // 点击动作
          let data = utils.assign(
            NetDiskRuleUtils.getDefaultLinkClickMode(),
            userRuleItemConfig.setting.linkClickMode || {}
          );
          let default_value: null | NetDiskRuleSettingConfigurationInterface_linkClickMode = null;
          let selectData: {
            value: string;
            text: string;
          }[] = [];
          const dataKeys = Object.keys(data);
          for (const keyName of dataKeys) {
            let itemData = data[keyName as keyof typeof data];
            if (!itemData.enable) {
              continue;
            }
            if (itemData.default) {
              default_value = keyName as keyof typeof data;
            }
            selectData.push({
              value: keyName,
              text: itemData.text!,
            });
          }
          if (default_value == null) {
            // 直接取可选菜单的第一个值
            default_value = selectData[0].value as NetDiskRuleSettingConfigurationInterface_linkClickMode;
          }
          this.initDefaultValue(NetDiskRuleDataKEY.function.linkClickMode(ruleKey), default_value);
        }
        if (typeof userRuleItemConfig.setting["openBlankWithCopyAccessCode"] === "boolean") {
          /* 跳转时复制访问码 */
          this.initDefaultValue(
            NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(ruleKey),
            Boolean(userRuleItemConfig.setting["openBlankWithCopyAccessCode"])
          );
          netDiskRuleConfig.setting!.configurationInterface!.linkClickMode_openBlank!.openBlankWithCopyAccessCode =
            Boolean(userRuleItemConfig.setting["openBlankWithCopyAccessCode"]);
        }
        if (typeof userRuleItemConfig.setting["openBlankAutoFilleAccessCode"] === "boolean") {
          /* 自动填充访问码 */
          this.initDefaultValue(
            NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankAutoFilleAccessCode(ruleKey),
            Boolean(userRuleItemConfig.setting["openBlankAutoFilleAccessCode"])
          );
          netDiskRuleConfig.setting.configurationInterface!.linkClickMode_openBlank!.openBlankAutoFilleAccessCode =
            Boolean(userRuleItemConfig.setting["openBlankAutoFilleAccessCode"]);
        }
        if (typeof userRuleItemConfig.setting["checkLinkValidity"] === "boolean") {
          /* 用于验证链接有效性 */
          this.initDefaultValue(
            NetDiskRuleDataKEY.function.checkLinkValidity(ruleKey),
            Boolean(userRuleItemConfig.setting["checkLinkValidity"])
          );
          netDiskRuleConfig.setting!.configurationInterface!.function!.checkLinkValidity = Boolean(
            userRuleItemConfig.setting["checkLinkValidity"]
          );
        }
        if (typeof userRuleItemConfig.setting["checkLinkValidityHoverTip"] === "boolean") {
          /* 用于验证链接有效性结果的悬停提示 */
          this.initDefaultValue(
            NetDiskRuleDataKEY.function.checkLinkValidityHoverTip(ruleKey),
            Boolean(userRuleItemConfig.setting["checkLinkValidityHoverTip"])
          );
        }
        if (typeof userRuleItemConfig.setting["isForward"] === "boolean") {
          /* 直接进行scheme转发链接 */
          this.initDefaultValue(
            NetDiskRuleDataKEY.schemeUri.enable(ruleKey),
            Boolean(userRuleItemConfig.setting["isForward"])
          );
          netDiskRuleConfig.setting!.configurationInterface!.schemeUri!.enable = Boolean(
            userRuleItemConfig.setting["isForward"]
          );
        }
        if (typeof userRuleItemConfig.setting["schemeUri"] === "string") {
          /* scheme转发的字符串格式 */
          this.initDefaultValue(NetDiskRuleDataKEY.schemeUri.uri(ruleKey), userRuleItemConfig.setting["schemeUri"]);
          netDiskRuleConfig.setting!.configurationInterface!.schemeUri!.uri = userRuleItemConfig.setting["schemeUri"];
        }
        if (typeof userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"] === "number") {
          /* text-提取码间隔前的字符长度 */
          this.initDefaultValue(
            NetDiskRuleDataKEY.matchRange_text.before(ruleKey),
            userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"]
          );
          netDiskRuleConfig.setting!.configurationInterface!.matchRange_text!.before =
            userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"];
        }
        if (typeof userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"] === "number") {
          /* text-提取码间隔后的字符长度 */
          this.initDefaultValue(
            NetDiskRuleDataKEY.matchRange_text.after(ruleKey),
            userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"]
          );
          netDiskRuleConfig.setting!.configurationInterface!.matchRange_text!.after =
            userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"];
        }
        if (typeof userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"] === "number") {
          /* html-提取码间隔前的字符长度 */
          this.initDefaultValue(
            NetDiskRuleDataKEY.matchRange_html.before(ruleKey),
            userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"]
          );
          netDiskRuleConfig.setting!.configurationInterface!.matchRange_html!.before =
            userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"];
        }
        if (typeof userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"] === "number") {
          /* html-提取码间隔后的字符长度 */
          this.initDefaultValue(
            NetDiskRuleDataKEY.matchRange_html.after(ruleKey),
            userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"]
          );
          netDiskRuleConfig.setting!.configurationInterface!.matchRange_html!.after =
            userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"];
        }
      }

      // 3. 配置图标字典数据
      if (typeof userRuleItemConfig.icon === "string") {
        // 配置图标
        let ruleIcon = userRuleItemConfig.icon;
        NetDiskView.$inst.icon.addIcon(ruleKey, ruleIcon);
      }

      // 4. 把规则的自定义解析函数进行转换
      const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      if (typeof userRuleItemConfig.checkLinkValidityFunction === "string") {
        // 自定义校验链接有效性函数
        try {
          let context = this.getBindContext(userRuleItemConfig);
          Reflect.set(NetDiskCheckLinkValidity.ruleCheckValidFunction, ruleKey, {
            init: new AsyncFunction(
              "netDiskInfo",
              userRuleItemConfig.checkLinkValidityFunction
              // 绑定作用域
            ).bind(context),
          });
        } catch (error) {
          log.error(error);
        }
      }
      if (typeof userRuleItemConfig.AuthorizationFunction === "string") {
        // 自定义鉴权函数
        try {
          let context = this.getBindContext(userRuleItemConfig);
          // 删除没必要的属性
          // NetDiskCheckLinkValidity是有效性校验函数中需要的
          Reflect.deleteProperty(context, "NetDiskCheckLinkValidity" as keyof typeof context);
          NetDiskAuthorization.netDisk[ruleKey] = new AsyncFunction(userRuleItemConfig.AuthorizationFunction).bind(
            // 绑定作用域
            context
          );
        } catch (error) {
          log.error(error);
        }
      }
      if (typeof userRuleItemConfig.AutoFillAccessCodeFunction === "string") {
        // 自定义填充访问码函数
        try {
          let context = this.getBindContext(userRuleItemConfig);
          // 删除没必要的属性
          // NetDiskCheckLinkValidity是有效性校验函数中需要的
          Reflect.deleteProperty(context, "NetDiskCheckLinkValidity" as keyof typeof context);
          NetDiskAutoFillAccessCode.netDisk[ruleKey] = new AsyncFunction(
            "netDiskInfo",
            userRuleItemConfig.AutoFillAccessCodeFunction
            // 绑定作用域
          ).bind(context);
        } catch (error) {
          log.error(error);
        }
      }
      if (typeof userRuleItemConfig.parseFunction === "string") {
        // 自定义文件解析函数
        try {
          let context = this.getBindContext(userRuleItemConfig);
          // 删除没必要的属性
          // NetDiskCheckLinkValidity是有效性校验函数中需要的
          Reflect.deleteProperty(context, "NetDiskCheckLinkValidity" as keyof typeof context);
          Reflect.set(NetDiskParse.rule, ruleKey, new AsyncFunction(userRuleItemConfig.parseFunction).bind(context));
        } catch (error) {
          log.error(error);
        }
      }

      if (typeof userRuleItemConfig.afterRenderUrlBox === "string") {
        // 渲染后的链接元素触发的回调
        try {
          let context = this.getBindContext(userRuleItemConfig);
          // 删除没必要的属性
          // NetDiskCheckLinkValidity是有效性校验函数中需要的
          Reflect.deleteProperty(context, "NetDiskCheckLinkValidity" as keyof typeof context);
          netDiskRuleConfig.afterRenderUrlBox = new AsyncFunction(
            "option",
            userRuleItemConfig.afterRenderUrlBox
            // 绑定作用域
          ).bind(context);
        } catch (error) {
          log.error(error);
        }
      }

      // 检测已处理的规则中是否存在重复key的规则
      // 存在 => 追加新的rule
      let findValue = netDiskRuleConfigList.find((item) => item.setting.key === netDiskRuleConfig.setting.key);
      if (findValue) {
        /* 已存在相同key规则，追加新的 */
        findValue.rule = findValue.rule.concat(netDiskRuleConfig.rule);
      } else {
        netDiskRuleConfigList.push(netDiskRuleConfig);
      }
    }
    return netDiskRuleConfigList;
  },
  /**
   * 获取配置
   */
  getNetDiskRuleConfig() {
    return this.$data.userRule.values();
  },
  /**
   * 初始化默认值
   */
  initDefaultValue(key: string, value?: any) {
    let localValue = GM_getValue(key);
    if (localValue == null) {
      GM_setValue(key, value);
    }
  },
  /**
   * 获取模板规则
   */
  getTemplateRule() {
    let templateRule = <NetDiskUserCustomRule>{
      key: "规则名",
      icon: "图标链接字符串或图片的base64字符串",
      regexp: [
        {
          link_innerText: "",
          link_innerHTML: "",
          shareCode: "",
          shareCodeNeedRemoveStr: "",
          uiLinkShow: "",
          blank: "",
          copyUrl: "",
        },
      ],
      setting: {
        name: "设置界面的名字",
        enable: true,
        linkClickMode: "openBlank",
        openBlankWithCopyAccessCode: true,
      },
    };
    return templateRule;
  },
  /**
   * 获取规则面板视图的配置
   * @param quickAddData 用于快速添加数据
   */
  getRulePanelViewOption(quickAddData?: NetDiskUserCustomRule) {
    const that = this;
    let addData = () => {
      return quickAddData ?? this.getTemplateRule();
    };

    let rulePanelViewOption: RulePanelContentOption<NetDiskUserCustomRule> = {
      id: "user-rule",
      title: "链接识别",
      headerTitle: "链接识别规则",
      subscribe: {
        enable: true,
        data() {
          return NetDiskUserRuleSubscribeRule.getAllSubscribe();
        },
        getData: (data) => {
          let findValue = NetDiskUserRuleSubscribeRule.getSubscribe(data.uuid);
          return findValue ?? data;
        },
        getDataItemName(subscribeOption) {
          return /*html*/ `
						<style>
							.subscribe-rule-title-info-wrapper{
								display: flex;
								flex-direction: column;
								gap: 4px;
							}
							.subscribe-rule-title-info-wrapper .rule-name-text{
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								font-weight: 600;
								font-size: 16px;
								line-height: 24px;
							}
							.subscribe-rule-title-info-wrapper .subscribe-rule-small-span-text{
								font-size: 14px;
								line-height: 16px;
								white-space: pre-wrap;
							}
						</style>
						<div class="subscribe-rule-title-info-wrapper">
							<div class="rule-name-text" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-size: 16px;font-weight: 600;line-height: 24px;">${
                subscribeOption.data.title || subscribeOption.subscribeData.title || subscribeOption.data.url
              }</div>
								<div class="subscribe-rule-small-span-text">${
                  subscribeOption.subscribeData.ruleData.length
                } 条规则，更新于：${utils.formatTime(
                  subscribeOption.data.latestUpdateTime,
                  "yyyy年MM月dd日 HH:mm:ss"
                )}${
                  typeof subscribeOption.data.updateFailedTime === "number"
                    ? `，<span style="color: red;">更新失败于：${utils.formatTime(
                        subscribeOption.data.updateFailedTime,
                        "yyyy年MM月dd日 HH:mm:ss"
                      )}</span>`
                    : ``
                }</div>
								${
                  subscribeOption.subscribeData.homePage
                    ? `<a href="${subscribeOption.subscribeData.homePage}" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">转到主页</a>`
                    : ""
                }
								<a href="${
                  subscribeOption.data.url
                }" class="subscribe-rule-small-span-text" target="_blank" style="color:#67b279;">订阅地址</a>
						</div>`;
        },
        addData: (data) => {
          return NetDiskUserRuleSubscribeRule.addSubscribe(data);
        },
        updateData: (data) => {
          return NetDiskUserRuleSubscribeRule.updateSubscribe(data);
        },
        deleteData: (data) => {
          return NetDiskUserRuleSubscribeRule.deleteSubscribe(data);
        },
        btnControls: {
          add: {
            enable: true,
          },
          filter: {
            enable: true,
            title: "过滤订阅",
            option: [
              {
                name: "过滤【已启用】的订阅",
                filterCallBack(data) {
                  return data.data.enable;
                },
              },
              {
                name: "过滤【未启用】的订阅",
                filterCallBack(data) {
                  return !data.data.enable;
                },
              },
            ],
          },
          clearAll: {
            enable: true,
            callback: () => {
              NetDiskUserRuleSubscribeRule.deleteAllSubscribe();
            },
          },
          ruleEnable: {
            enable: true,
            getEnable(data) {
              return data.data.enable;
            },
            async callback(data, enable) {
              data.data.enable = enable;
              NetDiskUserRuleSubscribeRule.updateSubscribe(data);
            },
          },
          ruleEdit: {
            enable: true,
            callback: (option) => {
              let subscribeUUID = option.ruleData.uuid;
              option.enterDeepMenu<NetDiskUserCustomRule>({
                headerTitle:
                  // 自己重新命名的
                  option.ruleData.data.title ||
                  // 订阅的规则自带的
                  option.ruleData.subscribeData.title ||
                  // 订阅的链接
                  option.ruleData.data.url,
                data() {
                  let currentData = NetDiskUserRuleSubscribeRule.getSubscribe(subscribeUUID);
                  return currentData?.subscribeData?.ruleData ?? option.ruleData.subscribeData.ruleData;
                },
                getData(data) {
                  let currentData = NetDiskUserRuleSubscribeRule.getSubscribeRule(subscribeUUID, data.key);
                  return currentData ?? data;
                },
                getDataItemName(data) {
                  return data.setting.name;
                },
                addData(data) {
                  // TODO
                  return true;
                },
                updateData(data) {
                  return NetDiskUserRuleSubscribeRule.updateSubscribeRule(subscribeUUID, data);
                },
                deleteData(data) {
                  return NetDiskUserRuleSubscribeRule.deleteSubscribeRule(subscribeUUID, data);
                },
                btnControls: {
                  filter: {
                    enable: true,
                    title: "规则过滤",
                    option: [
                      {
                        name: "仅显示【已启用】的规则",
                        filterCallBack(data) {
                          return data.setting.enable;
                        },
                      },
                      {
                        name: "仅显示【未启用】的规则",
                        filterCallBack(data) {
                          return !data.setting.enable;
                        },
                      },
                    ],
                  },
                  clearAll: {
                    enable: true,
                    callback: () => {
                      NetDiskUserRuleSubscribeRule.clearSubscribe(subscribeUUID);
                    },
                  },
                  ruleEdit: {
                    enable: true,
                    callback(option) {
                      NetDiskUserRuleUI.showSubscribe(subscribeUUID, option.ruleData.key, async (subscribeRule) => {
                        // 更新视图
                        let $ruleItem = await option.context.updateRuleItemElement(
                          option.option,
                          option.subscribeOption,
                          subscribeRule,
                          option.$ruleItem,
                          option.$section
                        );
                        option.$ruleItem = $ruleItem;
                      });
                      return false;
                    },
                  },
                  ruleDelete: {
                    enable: true,
                    deleteCallBack(data) {
                      return NetDiskUserRuleSubscribeRule.deleteSubscribeRule(subscribeUUID, data);
                    },
                  },
                },
              });
              return false;
            },
          },
          ruleDelete: {
            enable: true,
            deleteCallBack: (data) => {
              return NetDiskUserRuleSubscribeRule.deleteSubscribe(data);
            },
          },
          import: {
            enable: true,
            callback(updateView) {
              NetDiskUserRuleSubscribeRule.importSubscribe(() => {
                updateView();
              });
            },
          },
          export: {
            enable: true,
            callback() {
              NetDiskUserRuleSubscribeRule.exportSubscribe(SCRIPT_NAME + "-网站规则-订阅.json");
            },
          },
        },
        getSubscribeInfo: NetDiskUserRuleSubscribeRule.getSubscribeInfo.bind(NetDiskUserRuleSubscribeRule),
      },
      ruleOption: {
        btnControls: {
          add: {
            enable: true,
            callback(option) {
              NetDiskUserRuleUI.show(false, void 0, (rule) => {
                this.updateRuleContaienrElement(rulePanelViewOption.ruleOption, void 0, option.$section);
              });
              return false;
            },
          },
          filter: {
            enable: true,
            title: "规则过滤",
            option: [
              {
                name: "仅显示【已启用】的规则",
                filterCallBack(data) {
                  return data.setting.enable;
                },
              },
              {
                name: "仅显示【未启用】的规则",
                filterCallBack(data) {
                  return !data.setting.enable;
                },
              },
            ],
          },
          clearAll: {
            enable: true,
            callback: () => {
              that.clearRule();
            },
          },
          import: {
            enable: true,
            callback: (updateView) => {
              that.importRule(() => {
                updateView();
              });
            },
          },
          export: {
            enable: true,
            callback: () => {
              that.exportRule(SCRIPT_NAME + "-链接识别规则.json", SCRIPT_NAME + "-链接识别规则-订阅模式.json");
            },
          },
          ruleEdit: {
            enable: true,
            callback(option) {
              NetDiskUserRuleUI.show(true, option.ruleData.key, async (rule) => {
                let $ruleItem = await option.context.updateRuleItemElement(
                  option.option,
                  option.subscribeOption,
                  rule,
                  option.$ruleItem,
                  option.$section
                );
                option.$ruleItem = $ruleItem;
              });
              return false;
            },
          },
          ruleDelete: {
            enable: true,
            deleteCallBack: (data) => {
              return that.deleteRule(data.key);
            },
          },
        },
        data: () => {
          return this.getAllRule();
        },
        getAddData: () => {
          return addData();
        },
        getData: (data) => {
          let allData = this.getAllRule();
          let findValue = allData.find((item) => item.key === data.key);
          return findValue ?? data;
        },
        getDataItemName: (data) => {
          return data.setting.name;
        },
        updateData: (data) => {
          return this.updateRule(data.key, data);
        },
        deleteData: (data) => {
          return this.deleteRule(data.key);
        },
      },
    };
    return rulePanelViewOption;
  },
  /**
   * 添加规则
   * @param userRule
   */
  addRule(userRule: NetDiskUserCustomRule) {
    let localRule = this.getAllRule();
    localRule.push(userRule);
    this.setRule(localRule);
  },
  /**
   * 设置规则到本地
   * @param oldRuleKey 旧规则的键名
   * @param userRule
   */
  setRule(userRule: NetDiskUserCustomRule[] | NetDiskUserCustomRule) {
    userRule = Array.isArray(userRule) ? userRule : [userRule];
    NetDiskUserRuleStorageApi.set(this.$data.STORAGE_KEY, userRule);
  },
  /**
   * 更新规则
   */
  updateRule(key: string, rule: NetDiskUserCustomRule) {
    let localRule = this.getAllRule();
    let findRuleIndex = localRule.findIndex((item) => item.key === key);
    if (findRuleIndex !== -1) {
      localRule.splice(findRuleIndex, 1, rule);
      this.setRule(localRule);
      return true;
    } else {
      return false;
    }
  },
  /**
   * 删除单条规则
   * @param ruleKey 规则的key名
   */
  deleteRule(ruleKey: string) {
    let localRule = this.getAllRule();
    let findIndex = localRule.findIndex((rule) => rule.key === ruleKey);
    if (findIndex !== -1) {
      localRule.splice(findIndex, 1);
      this.setRule(localRule);
      return true;
    } else {
      return false;
    }
  },
  /**
   * 清空规则
   */
  clearRule() {
    NetDiskUserRuleStorageApi.delete(this.$data.STORAGE_KEY);
  },
  /**
   * 获取本地所有的规则
   */
  getAllRule() {
    let result = NetDiskUserRuleStorageApi.get<NetDiskUserCustomRule[]>(this.$data.STORAGE_KEY, []);
    return result;
  },
  /**
   * 获取规则
   */
  getRule(key: string) {
    let localRule = this.getAllRule();
    return localRule.find((item) => item.key === key);
  },
  /**
   * 获取格式化后的规则
   * @param rule
   */
  getFormatRule(rule?: NetDiskUserCustomRule) {
    return JSON.stringify(rule || this.getAllRule(), void 0, 4);
  },
  /**
   * 导出规则
   */
  exportRule(fileName = "rule.json", subscribeFileName = "rule-subscribe.json") {
    let $alert = NetDiskPops.alert({
      title: {
        text: "请选择导出方式",
        position: "center",
      },
      content: {
        text: /*html*/ `
                    <div class="btn-control" data-mode="only-export-rule-list">导出规则</div>
                    <div class="btn-control" data-mode="export-to-subscribe">导出订阅规则</div>
                `,
        html: true,
      },
      btn: {
        ok: { enable: false },
        close: {
          enable: true,
          callback(details, event) {
            details.close();
          },
        },
      },
      mask: { enable: true },
      drag: true,
      width: PanelUISize.info.width,
      height: PanelUISize.info.height,
      style: /*css*/ `
      .btn-control{
          display: inline-block;
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          cursor: pointer;
        }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}`,
    });
    /** 仅导出规则 */
    let $onlyExportRuleList = $alert.$shadowRoot.querySelector<HTMLElement>(
      ".btn-control[data-mode='only-export-rule-list']"
    )!;
    /** 导出为订阅规则 */
    let $exportToSubscribe = $alert.$shadowRoot.querySelector<HTMLElement>(
      ".btn-control[data-mode='export-to-subscribe']"
    )!;
    /**
     * 导出文件
     */
    let exportFile = (__fileName__: string, __data__: any) => {
      let blob = new Blob([JSON.stringify(__data__, null, 4)]);
      let blobUrl = window.URL.createObjectURL(blob);
      let $a = document.createElement("a");
      $a.href = blobUrl;
      $a.download = __fileName__;
      $a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1500);
    };
    // 仅导出规则
    DOMUtils.on($onlyExportRuleList, "click", (event) => {
      DOMUtils.preventEvent(event);
      try {
        let allRule = this.getAllRule();
        if (allRule.length === 0) {
          Qmsg.warning("规则为空，无需导出");
          return;
        }
        exportFile(fileName, allRule);
        $alert.close();
      } catch (error: any) {
        Qmsg.error(error.toString(), { consoleLogContent: true });
      }
    });
    // 导出为订阅规则
    DOMUtils.on($exportToSubscribe, "click", (event) => {
      DOMUtils.preventEvent(event);
      const that = this;
      $alert.close();
      try {
        let allRule = this.getAllRule();
        if (allRule.length === 0) {
          Qmsg.warning("规则为空，无需导出");
          return;
        }
        let panelHandlerComponents = pops.config.PanelHandlerComponents();
        /**
         * 自定义存储api的配置
         * @param uuid
         */
        let generateStorageApi = function (data: any) {
          return {
            get(key: string, defaultValue: any) {
              return data[key] ?? defaultValue;
            },
            set(key: string, value: any) {
              data[key] = value;
              NetDiskUserRuleStorageApi.set(that.$data.EXPORT_CONFIG_KEY, data);
            },
          };
        };
        /**
         * 按下导出的按钮的回调
         */
        let exportCallBack = () => {
          let configData = NetDiskUserRuleStorageApi.get<
            Partial<RuleSubscribeOption<NetDiskUserCustomRule>["subscribeData"]>
          >(this.$data.EXPORT_CONFIG_KEY, {});
          if (configData?.title === "" || configData.title == null) {
            Qmsg.error("订阅标题不能为空");
            return;
          }
          if (configData.version == null) {
            Qmsg.error("版本号不能为空");
            return;
          } else {
            configData.version = Number(configData.version);
          }
          if (configData.homePage == null) {
            configData.homePage = void 0;
          }
          configData.lastModified = Date.now();
          configData.ruleData = this.getAllRule();

          exportFile(subscribeFileName, configData);
          $exportSubscribeDialog.close();
        };
        let $exportSubscribeDialog = NetDiskPops.alert({
          title: {
            text: "请填写导出配置",
            position: "center",
          },
          content: {
            text: /*html*/ `
							
						`,
            html: true,
          },
          btn: {
            ok: {
              enable: true,
              text: "导出",
              callback(details, event) {
                exportCallBack();
              },
            },
            close: {
              enable: true,
              callback(details, event) {
                details.close();
              },
            },
          },
          mask: {
            enable: true,
          },
          drag: true,
          width: PanelUISize.info.width,
          height: PanelUISize.info.height,
          style: /*css*/ `
						${pops.config.cssText.panelCSS}

						.pops-alert-content li{
							list-style-type: none;
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin: 10px;
						}
					`,
        });
        let $content = $exportSubscribeDialog.$shadowRoot.querySelector<HTMLElement>(".pops-alert-content")!;
        let configData = NetDiskUserRuleStorageApi.get<
          Partial<RuleSubscribeOption<NetDiskUserCustomRule>["subscribeData"]>
        >(this.$data.EXPORT_CONFIG_KEY, {});
        // 订阅名称
        let title_template = UIInput("订阅标题", "title", "", "", void 0, "");
        Reflect.set(title_template.props!, PROPS_STORAGE_API, generateStorageApi(configData));
        let $title = panelHandlerComponents.createSectionContainerItem_input(title_template);

        // 版本号
        let version_template = UIInput("版本号", "version", "", "", void 0, "", false);
        Reflect.set(version_template.props!, PROPS_STORAGE_API, generateStorageApi(configData));
        let $version = panelHandlerComponents.createSectionContainerItem_input(version_template);

        // 主页地址
        let homePage_template = UIInput("主页地址", "homePage", "", "", void 0, "选填");
        Reflect.set(homePage_template.props!, PROPS_STORAGE_API, generateStorageApi(configData));
        let $homePage = panelHandlerComponents.createSectionContainerItem_input(homePage_template);

        DOMUtils.append($content, $title);
        DOMUtils.append($content, $version);
        DOMUtils.append($content, $homePage);
      } catch (error: any) {
        Qmsg.error(error.toString(), { consoleLogContent: true });
      }
    });
  },
  /**
   * 导入规则
   * @param importEndCallBack 导入完毕后的回调
   */
  importRule(importEndCallBack?: () => void) {
    let $alert = NetDiskPops.alert({
      title: {
        text: "请选择导入方式",
        position: "center",
      },
      content: {
        text: /*html*/ `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
        html: true,
      },
      btn: {
        ok: { enable: false },
        close: {
          enable: true,
          callback(details, event) {
            details.close();
          },
        },
      },
      mask: { enable: true },
      drag: true,
      width: PanelUISize.info.width,
      height: PanelUISize.info.height,
      style: /*css*/ `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `,
    });
    /** 本地导入 */
    let $local = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='local']")!;
    /** 网络导入 */
    let $network = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='network']")!;
    /** 剪贴板导入 */
    let $clipboard = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='clipboard']")!;
    /**
     * 将获取到的规则更新至存储
     */
    let updateRuleToStorage = (data: NetDiskUserCustomRule[]) => {
      let allData = this.getAllRule();
      let addNewData: typeof allData = [];
      for (let index = 0; index < data.length; index++) {
        const dataItem = data[index];
        let findIndex = allData.findIndex((it) => it.key === dataItem.key);
        if (findIndex !== -1) {
          // 存在相同的规则
        } else {
          // 追加
          addNewData.push(dataItem);
        }
      }
      allData = allData.concat(addNewData);
      if (addNewData.length) {
        NetDiskUserRuleStorageApi.set(this.$data.STORAGE_KEY, allData);
        log.info(["新增的规则：", addNewData]);
        Qmsg.success(`共 ${data.length} 条规则，新增 ${addNewData.length} 条`);
      } else {
        Qmsg.error("未新增规则，请删除旧规则再重新导入");
      }
      importEndCallBack?.();
    };
    /**
     * @param subscribeText 订阅文件文本
     */
    let importFile = (subscribeText: string) => {
      return new Promise<boolean>((resolve) => {
        let data: NetDiskUserCustomRule[] | NetDiskUserCustomRule = utils.toJSON(subscribeText);
        if (Array.isArray(data)) {
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
        } else {
          // 单个规则
          data = [data];
        }
        let checkedData: NetDiskUserCustomRule[] = [];
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          let parseResult = this.parseRuleStrToRule(dataItem);
          if (!parseResult.success) {
            if (data.length === 1) {
              Qmsg.error(parseResult.msg, { timeout: 4000 });
              return;
            }
            continue;
          }
          parseResult.data && checkedData.push(parseResult.data);
        }
        let notCheckedRuleCount = data.length - checkedData.length;
        if (notCheckedRuleCount > 0) {
          if (notCheckedRuleCount === data.length) {
            Qmsg.error("所有规则均未通过规则检查，请检查规则", {
              timeout: 4000,
            });
          } else {
            Qmsg.warning(`检测到有 ${notCheckedRuleCount}条未通过规则检查的规则，已忽略`, { timeout: 4000 });
          }
        }
        if (!checkedData.length) {
          return;
        }
        updateRuleToStorage(checkedData);
        resolve(true);
      });
    };
    // 本地导入
    DOMUtils.on($local, "click", (event) => {
      DOMUtils.preventEvent(event);
      $alert.close();
      let $input = DOMUtils.createElement("input", {
        type: "file",
        accept: ".json",
      });
      DOMUtils.on($input, ["propertychange", "input"], (event) => {
        if (!$input.files?.length) {
          return;
        }
        let uploadFile = $input.files![0];
        let fileReader = new FileReader();
        fileReader.onload = () => {
          importFile(fileReader.result as string);
        };
        fileReader.readAsText(uploadFile, "UTF-8");
      });
      $input.click();
    });
    // 网络导入
    DOMUtils.on($network, "click", (event) => {
      DOMUtils.preventEvent(event);
      $alert.close();
      let $prompt = NetDiskPops.prompt({
        title: {
          text: "网络导入",
          position: "center",
        },
        content: {
          text: "",
          placeholder: "请填写URL",
          focus: true,
        },
        btn: {
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
          ok: {
            text: "导入",
            callback: async (eventDetails, event) => {
              let url = eventDetails.text;
              if (utils.isNull(url)) {
                Qmsg.error("请填入完整的url");
                return;
              }
              let $loading = Qmsg.loading("正在获取配置...");
              let response = await httpx.get(url, {
                allowInterceptConfig: false,
              });
              $loading.close();
              if (!response.status) {
                log.error(response);
                Qmsg.error("获取配置失败", { consoleLogContent: true });
                return;
              }
              let flag = await importFile(response.data.responseText);
              if (!flag) {
                return;
              }
              eventDetails.close();
            },
          },
          cancel: {
            enable: false,
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: "auto",
      });
      let $promptInput = $prompt.$shadowRoot.querySelector<HTMLInputElement>("input")!;
      let $promptOk = $prompt.$shadowRoot.querySelector<HTMLElement>(".pops-prompt-btn-ok")!;
      DOMUtils.on($promptInput, ["input", "propertychange"], (event) => {
        let value = DOMUtils.val($promptInput);
        if (value === "") {
          DOMUtils.attr($promptOk, "disabled", "true");
        } else {
          DOMUtils.removeAttr($promptOk, "disabled");
        }
      });
      DOMUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
        if (keyName === "Enter" && otherCodeList.length === 0) {
          let value = DOMUtils.val($promptInput);
          if (value !== "") {
            DOMUtils.trigger($promptOk, "click");
          }
        }
      });
      DOMUtils.trigger($promptInput, "input");
    });
    // 剪贴板导入
    DOMUtils.on($clipboard, "click", async (event) => {
      DOMUtils.preventEvent(event);
      $alert.close();
      let clipboardInfo = await utils.getClipboardInfo();
      if (clipboardInfo.error != null) {
        Qmsg.error(clipboardInfo.error.toString());
        return;
      }
      if (clipboardInfo.content.trim() === "") {
        Qmsg.warning("获取到的剪贴板内容为空");
        return;
      }
      let flag = await importFile(clipboardInfo.content);
      if (!flag) {
        return;
      }
    });
  },
};
