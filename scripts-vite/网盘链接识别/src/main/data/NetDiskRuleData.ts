import { NetDiskRuleDataKEY } from "./NetDiskRuleDataKey";
import { GeneratePanelStorage } from "./NetDiskDataUtils";
import { Panel } from "@components/setting/panel";

/**
 * 规则的数据
 */
export const NetDiskRuleData = {
  /** innerText的提取码间隔 */
  matchRange_text: {
    /**
     * 提取码间隔前的字符长度
     * @param key 规则键名
     * @param defaultValue 默认值: 20
     */
    before(key: string, defaultValue?: number) {
      key = NetDiskRuleDataKEY.matchRange_text.before(key);
      defaultValue = Panel.getDefaultValue(key) ?? 20;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return parseInt(panelData.value.toString());
    },
    /**
     * 提取码间隔后的字符长度
     * @param key 规则键名
     * @param defaultValue 默认值: 10
     */
    after(key: string, defaultValue?: number) {
      key = NetDiskRuleDataKEY.matchRange_text.after(key);
      defaultValue = Panel.getDefaultValue(key) ?? 10;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return parseInt(panelData.value.toString());
    },
  },
  /** innerHTML的提取码间隔 */
  matchRange_html: {
    /**
     * 提取码间隔前的字符长度
     * @param key 规则键名
     * @param defaultValue 默认值: 100
     */
    before(key: string, defaultValue?: number) {
      key = NetDiskRuleDataKEY.matchRange_html.before(key);
      defaultValue = Panel.getDefaultValue(key) ?? 100;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return parseInt(panelData.value.toString());
    },
    /**
     * 提取码间隔后的字符长度
     * @param key 规则键名
     * @param defaultValue 默认值: 15
     */
    after(key: string, defaultValue?: number) {
      key = NetDiskRuleDataKEY.matchRange_html.after(key);
      defaultValue = Panel.getDefaultValue(key) ?? 15;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return parseInt(panelData.value.toString());
    },
  },
  /** 功能 */
  function: {
    /**
     * 是否启用该规则
     * @param key 规则键名
     * @param defaultValue 默认值: true
     */
    enable(key: string, defaultValue?: boolean) {
      key = NetDiskRuleDataKEY.function.enable(key);
      defaultValue = Panel.getDefaultValue(key) ?? true;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return Boolean(panelData.value);
    },
    /**
     * 点击动作
     * @param key 规则键名
     * @param defaultValue 默认值: copy
     */
    linkClickMode(key: string, defaultValue?: NetDiskRuleSettingConfigurationInterface_linkClickMode) {
      key = NetDiskRuleDataKEY.function.linkClickMode(key);
      defaultValue = Panel.getDefaultValue(key) ?? "copy";
      const panelData = GeneratePanelStorage(key, defaultValue);
      return panelData.value;
    },
    /**
     * 是否进行校验链接有效性
     * @param key 规则键名
     * @param defaultValue 默认值: false
     */
    checkLinkValidity(key: string, defaultValue?: boolean) {
      key = NetDiskRuleDataKEY.function.checkLinkValidity(key);
      defaultValue = Panel.getDefaultValue(key) ?? false;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return Boolean(panelData.value);
    },
    /**
     * 是否添加验证结果图标悬停提示
     * @param key
     * @param defaultValue 默认值: true
     */
    checkLinlValidityHoverTip(key: string, defaultValue?: boolean) {
      key = NetDiskRuleDataKEY.function.checkLinkValidityHoverTip(key);
      defaultValue = Panel.getDefaultValue(key) ?? true;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return Boolean(panelData.value);
    },
  },
  linkClickMode_openBlank: {
    /**
     * 跳转时自动填充访问码（如果有的话）
     * @param key 规则键名
     * @param [defaultValue=true] 默认值: true
     */
    openBlankAutoFilleAccessCode(key: string, defaultValue?: boolean) {
      key = NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankAutoFilleAccessCode(key);
      defaultValue = Panel.getDefaultValue(key) ?? true;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return Boolean(panelData.value);
    },
    /**
     * 跳转时复制访问码
     * @param key 规则键名
     * @param defaultValue 默认值: false
     */
    openBlankWithCopyAccessCode(key: string, defaultValue?: boolean) {
      key = NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(key);
      defaultValue = Panel.getDefaultValue(key) ?? false;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return Boolean(panelData.value);
    },
  },
  schemeUri: {
    /**
     * 是否启用
     * @param key 规则键名
     * @param defaultValue 默认值: false
     */
    enable(key: string, defaultValue?: boolean) {
      key = NetDiskRuleDataKEY.schemeUri.enable(key);
      defaultValue = Panel.getDefaultValue(key) ?? false;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return Boolean(panelData.value);
    },
    /**
     * 转发直链（解析出的链接）
     * @param key 规则键名
     * @param defaultValue 默认值: false
     */
    isForwardLinearChain(key: string, defaultValue?: boolean) {
      key = NetDiskRuleDataKEY.schemeUri.isForwardLinearChain(key);
      defaultValue = Panel.getDefaultValue(key) ?? false;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return Boolean(panelData.value);
    },
    /**
     * 转发新标签页链接
     * @param key 规则键名
     * @param defaultValue 默认值: false
     */
    isForwardBlankLink(key: string, defaultValue?: boolean) {
      key = NetDiskRuleDataKEY.schemeUri.isForwardBlankLink(key);
      defaultValue = Panel.getDefaultValue(key) ?? false;
      const panelData = GeneratePanelStorage(key, defaultValue);
      return Boolean(panelData.value);
    },
    /**
     * Uri链接
     * @param key 规则键名
     * @param defaultValue 默认值: ""
     */
    uri(key: string, defaultValue?: string) {
      key = NetDiskRuleDataKEY.schemeUri.uri(key);
      defaultValue = Panel.getDefaultValue(key) ?? "";
      const panelData = GeneratePanelStorage(key, defaultValue);
      return panelData.value;
    },
  },
};
