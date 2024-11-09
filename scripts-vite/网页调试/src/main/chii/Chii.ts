import { PanelSettingConfig } from "@/setting/panel-setting-config";
import { PopsPanel } from "@/setting/setting";
import { ChiiPluginHeight } from "./plugin/ChiiPluginHeight";
import { unsafeWin, console } from "@/env";

export const Chii = () => {
	let debugUrl = PopsPanel.getValue(
		PanelSettingConfig.chii_debug_url.key,
		PanelSettingConfig.chii_debug_url.defaultValue
	);
	if (
		window.location.href.startsWith(debugUrl) &&
		PopsPanel.getValue(
			PanelSettingConfig.chii_check_script_load.key,
			PanelSettingConfig.chii_disable_run_in_debug_url.defaultValue
		)
	) {
		console.log("禁止在调试端运行 ==> href包含debugUrl");
		return;
	}
	ChiiPluginHeight.init();
	if (PopsPanel.getValue(PanelSettingConfig.chii_check_script_load.key)) {
		function checkChiiScriptLoad(event: any) {
			if (event.target === scriptNode) {
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
	let scriptJsUrl = PopsPanel.getValue(
		PanelSettingConfig.chii_target_js.key,
		PanelSettingConfig.chii_target_js.defaultValue
	);
	let scriptEmbedded = PopsPanel.getValue(
		PanelSettingConfig.chii_script_embedded.key,
		PanelSettingConfig.chii_script_embedded.defaultValue
	);
	let scriptNode = document.createElement("script");
	scriptNode.src = scriptJsUrl;
	scriptNode.setAttribute("type", "application/javascript");
	if (scriptEmbedded) {
		scriptNode.setAttribute("embedded", "true");
	}
	(document.head || document.body || document.documentElement).appendChild(
		scriptNode
	);
};
