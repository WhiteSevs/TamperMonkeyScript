import { console, unsafeWin } from "@/env";
import { GlobalSettingConfig } from "@/setting/config";
import { WebSiteDebugUtil } from "@/utils/WebSiteDebugUtil";
import { Panel } from "@components/setting/panel";
import { GM_getResourceText } from "ViteGM";
import { DebugToolConfig } from "../DebugToolConfig";
import { zh_CN_language } from "./language/zh-CN/zh-CN";
import { ErudaLanguage } from "./language/ErudaLanguage";

export const Eruda = async () => {
  if (import.meta.env.DEV) {
    const jsCode = await import("@lib/Eruda/index?raw");
    window.initEruda = new Function(`return (() => { ${jsCode.default} ;return initEruda; })()`)();
  }
  initEruda("Eruda", unsafeWin);
  const Eruda =
    unsafeWin.Eruda ||
    // @ts-expect-error
    globalThis.Eruda;
  if (!Eruda) {
    alert("调试工具【eruda】注册全局失败，请反馈开发者");
    return;
  }
  const inintPanelList: string[] = [];
  if (Panel.getValue(GlobalSettingConfig.eruda_panel_console.key)) {
    inintPanelList.push("console");
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_panel_elements.key)) {
    inintPanelList.push("elements");
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_panel_network.key)) {
    inintPanelList.push("network");
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_panel_resources.key)) {
    inintPanelList.push("resources");
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_panel_sources.key)) {
    inintPanelList.push("sources");
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_panel_info.key)) {
    inintPanelList.push("info");
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_panel_snippets.key)) {
    inintPanelList.push("snippets");
  }
  DebugToolConfig.eruda.version = Eruda.version;
  ErudaLanguage.init();
  Eruda.init({
    tool: inintPanelList,
  });
  console.log(`eruda当前版本：${Eruda.version}`);
  console.log(`eruda项目地址：${DebugToolConfig.eruda.homeUrl}`);
  console.log("eruda的全局变量名: Eruda");
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.resource),
        "erudaMonitor"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-monitor】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.resource),
        "erudaFeatures"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-features】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.resource),
        "erudaTiming"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-timing】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaCode.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaCode.resource),
        "erudaCode"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-code】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.resource),
        "erudaBenchmark"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-benchmark】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.resource),
        "erudaGeolocation"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-geolocation】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.resource),
        "erudaOrientation"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-orientation】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.resource),
        "erudaTouches"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-touches】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.resource),
        "erudaOutlinePlugin"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-outline-plugin】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.resource),
        "erudaPixel"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-pixel】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaVue.key)) {
    try {
      const plugin = await WebSiteDebugUtil.evalPlugin(
        GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaVue.resource),
        "erudaVue"
      );
      Eruda.add(plugin);
    } catch (error) {
      console.error("插件【eruda-vue】加载失败，原因：", error);
    }
  }
  if (Panel.getValue(GlobalSettingConfig.eruda_auto_open_panel.key)) {
    let defaultShowName = Panel.getValue(
      GlobalSettingConfig.eruda_default_show_panel_name.key,
      GlobalSettingConfig.eruda_default_show_panel_name.defaultValue
    );
    Eruda.show();
    setTimeout(() => {
      Eruda.show(defaultShowName);
    }, 250);
  }
};
