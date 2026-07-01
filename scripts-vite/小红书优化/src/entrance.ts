import { Panel } from "@components/setting/panel";
import { PanelContent } from "@components/setting/panel-content";
import { PanelMenu } from "@components/setting/panel-menu";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue } from "ViteGM";
import { addStyle, log, MenuRegister, utils } from "./env";
import { M_XHS } from "./m-main/M_XHS";
import { XHS } from "./main/XHS";
import { MSettingUI_Common } from "./setting/m-view/m-common";
import { MSettingUI_Home } from "./setting/m-view/m-home";
import { MSettingUI_Notes } from "./setting/m-view/m-note";
import { SettingUI_Article } from "./setting/view/article";
import { SettingUI_Common } from "./setting/view/common";

// 修复一下Qmsg的loading图标问题
addStyle(/*css*/ `
.qmsg svg.animate-turn {
  fill: none;
}
`);
PanelMenu.deleteMenuOption(0);
PanelMenu.addMenuOption([
  {
    key: "pc_setting",
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
    key: "m_setting",
    text: "⚙ 移动端设置",
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      return text;
    },
    callback: () => {
      Panel.showPanel(PanelContent.getConfig(1));
    },
  },
]);
PanelContent.addContentConfig([SettingUI_Common, SettingUI_Article]);
PanelContent.addContentConfig([MSettingUI_Common, MSettingUI_Home, MSettingUI_Notes]);
Panel.init();

let isMobile = utils.isPhone();
let CHANGE_ENV_SET_KEY = "change_env_set";
let chooseMode = GM_getValue(CHANGE_ENV_SET_KEY);

if (chooseMode != null) {
  if (chooseMode == 1) {
    // 移动端
    isMobile = true;
    log.info(`手动指定为移动端`);
  } else if (chooseMode == 2) {
    // PC端
    isMobile = false;
    log.info(`手动指定为PC端`);
  } else {
    Qmsg.error(`意外，手动指定的值不在允许范围内，自动判定为${chooseMode === 1 ? "移动端" : "PC端"}`);
    GM_deleteValue(CHANGE_ENV_SET_KEY);
  }
}

MenuRegister.add({
  key: CHANGE_ENV_SET_KEY,
  text: `🖥️ 自动: ${isMobile ? "移动端" : "PC端"}`,
  autoReload: false,
  isStoreValue: false,
  showText(text) {
    if (chooseMode == null) {
      return text;
    }
    return `🖥️ 手动: ${chooseMode == 1 ? "移动端" : chooseMode == 2 ? "PC端" : "未知"}`;
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

if (isMobile) {
  log.info("自动判定为移动端");
  MenuRegister.delete("pc_setting");
  M_XHS.init();
} else {
  log.info("自动判定为PC端");
  MenuRegister.delete("m_setting");
  XHS.init();
}
