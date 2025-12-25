import { Bilibili } from "@/main/Bilibili";
import { log, pops, SCRIPT_NAME, utils } from "./env";
import { PanelContent } from "@components/setting/panel-content";
import { PanelMenu } from "@components/setting/panel-menu";
import { BilibiliUtils } from "./utils/BilibiliUtils";
import { BilibiliQrCodeLogin } from "./account/BilibiliQrCodeLogin";
import { SettingUICommon } from "./setting/view/Common";
import { SettingUIHead } from "./setting/view/Head";
import { SettingUIVideo } from "./setting/view/Video";
import { SettingUIOpus } from "./setting/view/Opus";
import { SettingUIDynamic } from "./setting/view/Dynamic";
import { SettingUIBangumi } from "./setting/view/Bangumi";
import { SettingUISearch } from "./setting/view/Search";
import { SettingUISpace } from "./setting/view/Space";
import { SettingUILive } from "./setting/view/Live";
import { SettingUITopicDetail } from "./setting/view/TopicDetail";
import { Panel } from "@components/setting/panel";
import { unsafeWindow } from "ViteGM";

const RunningFlag = utils.formatTime(void 0, "yyyy-MM-dd_HH:mm:ss") + "BilibiliPerfScriptRunning";
if (Reflect.has(unsafeWindow, RunningFlag)) {
  log.error(`${SCRIPT_NAME}运行异常，请勿重复运行脚本：${RunningFlag}`);
} else {
  Reflect.set(unsafeWindow, RunningFlag, true);
  PanelContent.addContentConfig([
    SettingUICommon,
    SettingUIHead,
    SettingUIVideo,
    SettingUIOpus,
    SettingUIDynamic,
    SettingUIBangumi,
    SettingUITopicDetail,
    SettingUISearch,
    SettingUISpace,
    SettingUILive,
  ]);
  PanelMenu.addMenuOption([
    {
      key: "go_to_login",
      text: "🛠 前往登录",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback() {
        BilibiliUtils.goToLogin();
      },
    },
    {
      key: "go_to_login_to_parse_access_key",
      text: "🛠 扫码并解析access_key",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback() {
        BilibiliQrCodeLogin.init();
      },
    },
  ]);
  Panel.init();
  Bilibili.init();

  pops.config.cssText.index += /*css*/ `
  /* bilibili颜色 #FB7299 */
  .pops{
      --bili-color: #FB7299;
      --bili-color-rgb: 251, 114, 153;
  }
  `;
  pops.config.cssText.panelCSS += /*css*/ `

  .pops-slider{
      --pops-slider-main-bg-color: var(--bili-color);
      --pops-slider-color-primary: var(--bili-color);
  }
  aside.pops-panel-aside .pops-is-visited, aside.pops-panel-aside ul li:hover{
      color: rgb(var(--bili-color-rgb));
      background: rgba(var(--bili-color-rgb), 0.1);
  }
  /* switch的 */
  .pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core{
      border-color: rgb(var(--bili-color-rgb),var(--pops-bd-opacity));
      background-color: rgb(var(--bili-color-rgb),var(--pops-bg-opacity));
  }
  .pops button[type="primary"],
  .pops button[type="primary"]:active ,
  .pops button[type="primary"]:hover{
      --button-color: #ffffff;
      --button-bd-color: var(--bili-color);
      --button-bg-color: var(--bili-color);
  }
  `;
}
