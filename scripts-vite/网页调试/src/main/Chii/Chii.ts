import { ChiiPluginHeight } from "./plugin/ChiiPluginHeight";
import { unsafeWin, console } from "@/env";
import { GlobalSettingConfig } from "@/setting/config";
import { Panel } from "@components/setting/panel";

export const Chii = () => {
  const debugUrl = Panel.getValue(
    GlobalSettingConfig.chii_debug_url.key,
    GlobalSettingConfig.chii_debug_url.defaultValue
  );
  if (
    window.location.href.startsWith(debugUrl) &&
    Panel.getValue(
      GlobalSettingConfig.chii_check_script_load.key,
      GlobalSettingConfig.chii_disable_run_in_debug_url.defaultValue
    )
  ) {
    console.log("禁止在调试端运行 ==> href包含debugUrl");
    return;
  }
  Panel.execMenu(GlobalSettingConfig.chii_embedded_height_enable.key, () => {
    ChiiPluginHeight.init();
  });
  if (Panel.getValue(GlobalSettingConfig.chii_check_script_load.key)) {
    function checkChiiScriptLoad(event: any) {
      if (event.target === $script) {
        globalThis.alert(
          `调试工具【Chii】脚本加载失败
      可能原因1：CSP策略阻止了加载第三方域的js文件
      可能原因2：目标js无效`
        );
        unsafeWin.removeEventListener("error", checkChiiScriptLoad, {
          capture: true,
        });
      }
    }
    unsafeWin.addEventListener("error", checkChiiScriptLoad, {
      capture: true,
    });
  }
  const scriptJsUrl = Panel.getValue(
    GlobalSettingConfig.chii_target_js.key,
    GlobalSettingConfig.chii_target_js.defaultValue
  );
  const scriptEmbedded = Panel.getValue(
    GlobalSettingConfig.chii_script_embedded.key,
    GlobalSettingConfig.chii_script_embedded.defaultValue
  );
  const $script = document.createElement("script");
  $script.src = scriptJsUrl;
  $script.setAttribute("type", "application/javascript");
  if (scriptEmbedded) {
    $script.setAttribute("embedded", "true");
  }
  (document.head || document.body || document.documentElement).appendChild($script);
};
