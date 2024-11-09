import { unsafeWin, utils, console } from "@/env";
import { PanelSettingConfig } from "@/setting/panel-setting-config";
import { PopsPanel } from "@/setting/setting";
import { WebSiteDebugUtil } from "@/utils/WebSiteDebugUtil";
import { GM_getResourceText } from "ViteGM";
import { DebugToolConfig } from "../DebugToolConfig";
import { vConsolePluginState } from "./plugin/vConsolePluginState";
import { vConsolePluginExportLog } from "./plugin/vConsolePluginExportLog";

export const vConsole = () => {
	initVConsole("VConsole", unsafeWin);
	// @ts-ignore
	let VConsole = unsafeWin.VConsole || globalThis.VConsole;
	if (!VConsole) {
		alert("调试工具【vConsole】注册全局失败，请反馈开发者");
		return;
	}
	let initPanelList: string[] = [];
	if (PopsPanel.getValue(PanelSettingConfig.vConsole_panel_system.key)) {
		initPanelList.push("system");
	}
	if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_network.key)) {
		initPanelList.push("network");
	}
	if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_elements.key)) {
		initPanelList.push("element");
	}
	if (PopsPanel.getValue(PanelSettingConfig.vConsole_panel_storage.key)) {
		initPanelList.push("storage");
	}
	let theme = "light";
	if (PopsPanel.getValue(PanelSettingConfig.vConsole_theme.key) === "auto") {
		if (utils.isThemeDark()) {
			theme = "dark";
		}
	} else {
		theme = PopsPanel.getValue(PanelSettingConfig.vConsole_theme.key);
	}
	let defaultStorages = [];
	if (
		PopsPanel.getValue(
			PanelSettingConfig.vConsole_storage_defaultStorages_cookies.key
		)
	) {
		defaultStorages.push("cookies");
	}
	if (
		PopsPanel.getValue(
			PanelSettingConfig.vConsole_storage_defaultStorages_localStorage.key
		)
	) {
		defaultStorages.push("localStorage");
	}
	if (
		PopsPanel.getValue(
			PanelSettingConfig.vConsole_storage_defaultStorages_sessionStorage.key
		)
	) {
		defaultStorages.push("sessionStorage");
	}
	let vConsole = new VConsole({
		defaultPlugins: initPanelList,
		theme: "light",
		onReady() {
			if (PopsPanel.getValue(PanelSettingConfig.vconsole_auto_open_panel.key)) {
				vConsole.show();
			}
		},
		disableLogScrolling: PopsPanel.getValue(
			PanelSettingConfig.vconsole_disableLogScrolling.key
		),
		log: {
			maxLogNumber: PopsPanel.getValue(
				PanelSettingConfig.vconsole_maxLogNumber.key,
				PanelSettingConfig.vconsole_maxLogNumber.defaultValue
			),
			showTimestamps: PopsPanel.getValue(
				PanelSettingConfig.vconsole_showTimestamps.key
			),
			maxNetworkNumber: PopsPanel.getValue(
				PanelSettingConfig.vconsole_maxNetworkNumber.key,
				PanelSettingConfig.vconsole_maxNetworkNumber.defaultValue
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
	if (
		PopsPanel.getValue(
			PanelSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key
		)
	) {
		try {
			vConsolePluginState(vConsole, VConsole);
		} catch (error) {
			console.error("插件【vconsole-stats-plugin】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(
			PanelSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key
		)
	) {
		try {
			vConsolePluginExportLog(vConsole, VConsole);
		} catch (error) {
			console.error("插件【vconsole-outputlog-plugin】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(
			PanelSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key
		)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools
						.resource
				)
			);
			const Devtools = unsafeWin.vueVconsoleDevtools;
			Devtools.initPlugin(vConsole);
		} catch (error) {
			console.error(
				"插件【vconsole-vue-devtools-plugin】加载失败，原因：",
				error
			);
		}
	}

	if (PopsPanel.getValue(PanelSettingConfig.vconsole_auto_open_panel.key)) {
		let defaultShowName = PopsPanel.getValue(
			PanelSettingConfig.vconsole_default_show_panel_name.key,
			PanelSettingConfig.vconsole_default_show_panel_name.defaultValue
		);
		vConsole.show();
		setTimeout(() => {
			vConsole.showPlugin(defaultShowName);
		}, 250);
	}
};
