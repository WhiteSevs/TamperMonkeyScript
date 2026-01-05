import { NetDisk } from "@/main/NetDisk";
import { Panel } from "@components/setting/panel";
import { PanelComponents, type PanelComponentsType } from "@components/setting/panel-components";
import { PanelContent } from "@components/setting/panel-content";
import { PanelMenu } from "@components/setting/panel-menu";
import { GM_getValue, GM_setValue } from "ViteGM";
import { DOMUtils, log } from "./env";
import { NetDiskAuthorization } from "./main/authorization/NetDiskAuthorization";
import { NetDiskAutoFillAccessCode } from "./main/auto-fill-accesscode/NetDiskAutoFillAccessCode";
import { NetDiskRuleManager } from "./main/NetDiskRuleManager";
import { NetDiskRule } from "./main/rule/NetDiskRule";
import { NetDiskUserRule } from "./main/rule/user-rule/NetDiskUserRule";
import { NetDiskUserRuleUI } from "./main/rule/user-rule/NetDiskUserRuleUI";
import { NetDiskShortcut } from "./main/shortcut/NetDiskShortcut";
import { NetDiskView } from "./main/view/NetDiskView";
import { NetDiskSettingView } from "./main/view/setting/NetDiskSettingView";
import { WebsiteRule } from "./main/website-rule/WebsiteRule";
import { NetDiskWorker } from "./main/worker/NetDiskWorker";
import { PanelUI_allSetting } from "./setting/view/all-setting";

try {
  let GLOBAL_RESOURCE_ICON;
  if (import.meta.env.DEV) {
    const RESOURCE_ICON_TEXT = (await import("@/../网盘链接识别-图标.js?raw")).default;
    GLOBAL_RESOURCE_ICON = new Function(`return (() => { ${RESOURCE_ICON_TEXT} ;return RESOURCE_ICON; })()`)();
  } else {
    GLOBAL_RESOURCE_ICON = RESOURCE_ICON;
  }
  NetDiskView.$inst.icon.assign(GLOBAL_RESOURCE_ICON);
  Object.assign(NetDiskView.$inst.icon.src, GLOBAL_RESOURCE_ICON);
} catch (error) {
  log.error("init NetDisk icon error", error);
}
// 更新面板组件存储Api
(["input", "select-multiple", "select", "slider", "switch", "textarea"] as PanelComponentsType[]).forEach((type) => {
  PanelComponents.setStorageApi(type as PanelComponentsType, {
    get<T>(key: string, defaultValue: T) {
      return GM_getValue(key, defaultValue);
    },
    set(key: string, value: any) {
      GM_setValue(key, value);
    },
  });
});
// 初始化网站规则
WebsiteRule.init();
// 初始化用户规则
NetDiskUserRule.init();
// 初始化规则
NetDiskRule.init();

// 初始化配置默认
PanelContent.addContentConfig([PanelUI_allSetting()]);
PanelContent.addContentConfig(NetDiskRule.getRulePanelContent());
let settingMenu = PanelMenu.getMenuOption(0);
settingMenu.callback = () => {
  NetDiskSettingView.show();
};
// 注册油猴菜单
PanelMenu.updateMenuOption(settingMenu);
PanelMenu.addMenuOption([
  {
    key: "showNetDiskHistoryMatch",
    text: "⚙ 历史匹配记录",
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      return text;
    },
    callback() {
      NetDiskView.$inst.historyMatch.show();
    },
  },
  {
    key: "ruleManager",
    text: "⚙ 规则管理器",
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      return text;
    },
    callback() {
      NetDiskRuleManager.showView();
    },
  },
  {
    key: "showUserRule",
    text: "⚙ 添加链接识别规则",
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      return text;
    },
    callback() {
      NetDiskUserRuleUI.show(false);
    },
  },
  {
    key: "showMatchPasteText",
    text: "⚙ 识别文本",
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      return text;
    },
    callback() {
      NetDiskView.$inst.matchPasteText.show();
    },
  },
]);
Panel.init();
// 初始化配置数据
NetDisk.init();
NetDiskShortcut.init();
DOMUtils.onReady(() => {
  // 初始化自动填充访问码
  NetDiskAutoFillAccessCode.init();
  // 初始化鉴权处理
  NetDiskAuthorization.init();
  // 初始化匹配处理
  NetDiskWorker.init();
  // 规则管理器初始化处理
  NetDiskRuleManager.init();
});
