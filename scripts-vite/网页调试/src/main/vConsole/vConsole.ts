import { unsafeWin, utils, console } from "@/env";
import { WebSiteDebugUtil } from "@/utils/WebSiteDebugUtil";
import { GM_getResourceText } from "ViteGM";
import { DebugToolConfig } from "../DebugToolConfig";
import { vConsolePluginState } from "./plugin/vConsolePluginState";
import { vConsolePluginExportLog } from "./plugin/vConsolePluginExportLog";
import { Panel } from "@components/setting/panel";
import { GlobalSettingConfig } from "@/setting/config";

export const vConsole = async () => {
  if (import.meta.env.DEV) {
    const jsCode = await import("@lib/VConsole/index?raw");
    window.initVConsole = new Function(`return (() => { ${jsCode.default} ;return initVConsole; })()`)();
  }
  initVConsole("VConsole", unsafeWin);
  // @ts-ignore
  let VConsole = unsafeWin.VConsole || globalThis.VConsole;
  if (!VConsole) {
    alert("调试工具【vConsole】注册全局失败，请反馈开发者");
    return;
  }
  let initPanelList: string[] = [];
  if (Panel.getValue(GlobalSettingConfig.vConsole_panel_system.key)) {
    initPanelList.push("system");
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_panel_network.key)) {
    initPanelList.push("network");
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_panel_elements.key)) {
    initPanelList.push("element");
  }
  if (Panel.getValue(GlobalSettingConfig.vConsole_panel_storage.key)) {
    initPanelList.push("storage");
  }
  let theme = "light";
  if (Panel.getValue<string>(GlobalSettingConfig.vConsole_theme.key) === "auto") {
    if (utils.isThemeDark()) {
      theme = "dark";
    }
  } else {
    theme = Panel.getValue(GlobalSettingConfig.vConsole_theme.key);
  }
  let defaultStorages = [];
  if (Panel.getValue(GlobalSettingConfig.vConsole_storage_defaultStorages_cookies.key)) {
    defaultStorages.push("cookies");
  }
  if (Panel.getValue(GlobalSettingConfig.vConsole_storage_defaultStorages_localStorage.key)) {
    defaultStorages.push("localStorage");
  }
  if (Panel.getValue(GlobalSettingConfig.vConsole_storage_defaultStorages_sessionStorage.key)) {
    defaultStorages.push("sessionStorage");
  }
  let vConsole = new VConsole({
    defaultPlugins: initPanelList,
    theme: "light",
    onReady() {
      if (Panel.getValue(GlobalSettingConfig.vconsole_auto_open_panel.key)) {
        vConsole.show();
      }
    },
    disableLogScrolling: Panel.getValue(GlobalSettingConfig.vconsole_disableLogScrolling.key),
    log: {
      maxLogNumber: Panel.getValue(
        GlobalSettingConfig.vconsole_maxLogNumber.key,
        GlobalSettingConfig.vconsole_maxLogNumber.defaultValue
      ),
      showTimestamps: Panel.getValue(GlobalSettingConfig.vconsole_showTimestamps.key),
      maxNetworkNumber: Panel.getValue(
        GlobalSettingConfig.vconsole_maxNetworkNumber.key,
        GlobalSettingConfig.vconsole_maxNetworkNumber.defaultValue
      ),
    },
    storage: {
      defaultStorages: defaultStorages,
    },
  });
  DebugToolConfig.vConsole.version = vConsole.version;
  unsafeWin.vConsole = vConsole;
  console.log(`VConsole当前版本：${vConsole.version}`);
  console.log(`VConsole项目地址：${DebugToolConfig.vConsole.homeUrl}`);
  console.log("VConsole的实例化的全局变量名: vConsole");
  if (Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key)) {
    try {
      vConsolePluginState(vConsole, VConsole);
    } catch (error) {
      console.error("插件【vconsole-stats-plugin】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key)) {
    try {
      vConsolePluginExportLog(vConsole, VConsole);
    } catch (error) {
      console.error("插件【vconsole-outputlog-plugin】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key)) {
    try {
      WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.resource)
      );
      const Devtools = unsafeWin.vueVconsoleDevtools;
      Devtools.initPlugin(vConsole);
    } catch (error) {
      console.error("插件【vconsole-vue-devtools-plugin】加载失败，原因：", error);
    }
  }

  if (Panel.getValue(GlobalSettingConfig.vconsole_auto_open_panel.key)) {
    let defaultShowName = Panel.getValue(
      GlobalSettingConfig.vconsole_default_show_panel_name.key,
      GlobalSettingConfig.vconsole_default_show_panel_name.defaultValue
    );
    vConsole.show();
    setTimeout(() => {
      vConsole.showPlugin(defaultShowName);
    }, 250);
  }
};
