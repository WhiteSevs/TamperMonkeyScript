import { Panel } from "@components/setting/panel";
import { CSDN } from "./main/CSDN";
import { GM_Menu, log, utils } from "./env";
import { M_CSDN } from "./m-main/m-CSDN";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";
import Qmsg from "qmsg";
import { PanelContent } from "@components/setting/panel-content";
import { PanelMenu } from "@components/setting/panel-menu";
import { SettingUICommon } from "./setting/view/PanelCommon";
import { SettingUIBlog } from "./setting/view/PanelBlog";
import { SettingUILink } from "./setting/view/PanelLink";
import { SettingUIHuaWeiCloud } from "./setting/view/PanelHuaWeiCloud";
import { SettingUIWenKu } from "./setting/view/PanelWenKu";
import { SettingUISo } from "./setting/view/PanelSo";
import { MSettingUICommon } from "./setting/m-view/MPanelCommon";
import { MSettingUIBlog } from "./setting/m-view/MPanelBlog";
import { MSettingUILink } from "./setting/m-view/MPanelLink";
import { MSettingUIHuaWeiCloud } from "./setting/m-view/MPanelHuaWeiCloud";
import { MSettingUIWenKu } from "./setting/m-view/MPanelWenKu";
import { MSettingUISo } from "./setting/m-view/MPanelSo";
import { MSettingUIDownload } from "./setting/m-view/MPanelDownload";

PanelMenu.deleteMenuOption(0);
PanelMenu.addMenuOption([
  {
    key: "show_pops_panel_setting",
    text: "⚙ PC端设置",
    autoReload: false,
    isStoreValue: false,
    showText(text: string) {
      return text;
    },
    callback: () => {
      Panel.showPanel(PanelContent.getConfig(0));
    },
  },
  {
    key: "m_show_pops_panel_setting",
    text: "⚙ 移动端端设置",
    autoReload: false,
    isStoreValue: false,
    showText(text: string) {
      return text;
    },
    callback: () => {
      Panel.showPanel(PanelContent.getConfig(1));
    },
  },
  {
    key: "gotoCSDNCKnow",
    text: "⚙ 前往C知道",
    isStoreValue: false,
    autoReload: false,
    showText(text: string) {
      return text;
    },
    callback() {
      window.open("https://so.csdn.net/chat", "_blank");
    },
  },
]);
PanelContent.addContentConfig([
  SettingUICommon,
  SettingUIBlog,
  SettingUILink,
  SettingUIHuaWeiCloud,
  SettingUIWenKu,
  SettingUISo,
]);
PanelContent.addContentConfig([
  MSettingUICommon,
  MSettingUIBlog,
  MSettingUILink,
  MSettingUIHuaWeiCloud,
  MSettingUIWenKu,
  MSettingUISo,
  MSettingUIDownload,
]);
Panel.init();

let isMobile = utils.isPhone();
let CHANGE_ENV_SET_KEY = "change_env_set";
let chooseMode = GM_getValue(CHANGE_ENV_SET_KEY);

GM_Menu.add({
  key: CHANGE_ENV_SET_KEY,
  text: `⚙ 自动: ${isMobile ? "移动端" : "PC端"}`,
  autoReload: false,
  isStoreValue: false,
  showText(text: string) {
    if (chooseMode == null) {
      return text;
    }
    return text + ` 手动: ${chooseMode == 1 ? "移动端" : chooseMode == 2 ? "PC端" : "未知"}`;
  },
  callback: () => {
    let allowValue = [0, 1, 2];
    let chooseText = window.prompt("请输入当前脚本环境判定\n\n自动判断: 0\n移动端: 1\nPC端: 2", "0");
    if (!chooseText) {
      /* 取消 */
      return;
    }
    let chooseMode = parseInt(chooseText);
    if (isNaN(chooseMode)) {
      Qmsg.error("输入的不是规范的数字");
      return;
    }
    if (!allowValue.includes(chooseMode)) {
      Qmsg.error("输入的值必须是0或1或2");
      return;
    }
    if (chooseMode == 0) {
      GM_deleteValue(CHANGE_ENV_SET_KEY);
    } else {
      GM_setValue(CHANGE_ENV_SET_KEY, chooseMode);
    }
  },
});
if (chooseMode != null) {
  log.info(`手动判定为${chooseMode === 1 ? "移动端" : "PC端"}`);
  if (chooseMode == 1) {
    /* 移动端 */
    M_CSDN.init();
  } else if (chooseMode == 2) {
    /* PC端 */
    CSDN.init();
  } else {
    Qmsg.error("意外，手动判定的值不在范围内");
    GM_deleteValue(CHANGE_ENV_SET_KEY);
  }
} else {
  if (isMobile) {
    log.info("自动判定为移动端");
    /* 移动端 */
    M_CSDN.init();
  } else {
    log.info("自动判定为PC端");
    CSDN.init();
  }
}
