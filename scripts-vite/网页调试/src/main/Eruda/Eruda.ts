import { PanelSettingConfig } from "@/setting/panel-setting-config";
import { PopsPanel } from "@/setting/setting";
import { WebSiteDebugUtil } from "@/utils/WebSiteDebugUtil";
import { GM_getResourceText } from "ViteGM";
import { DebugToolConfig } from "../DebugToolConfig";
import { unsafeWin, console } from "@/env";

export const Eruda = () => {
	initEruda("Eruda", unsafeWin);
	// @ts-ignore
	let Eruda = unsafeWin.Eruda || globalThis.Eruda;
	if (!Eruda) {
		alert("调试工具【eruda】注册全局失败，请反馈开发者");
		return;
	}
	let inintPanelList = [];
	if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_console.key)) {
		inintPanelList.push("console");
	}
	if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_elements.key)) {
		inintPanelList.push("elements");
	}
	if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_network.key)) {
		inintPanelList.push("network");
	}
	if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_resources.key)) {
		inintPanelList.push("resources");
	}
	if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_sources.key)) {
		inintPanelList.push("sources");
	}
	if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_info.key)) {
		inintPanelList.push("info");
	}
	if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_snippets.key)) {
		inintPanelList.push("snippets");
	}
	DebugToolConfig.eruda.version = Eruda.version;
	Eruda.init({
		tool: inintPanelList,
	});
	console.log(`eruda当前版本：${Eruda.version}`);
	console.log(`eruda项目地址：${DebugToolConfig.eruda.homeUrl}`);
	console.log("eruda的全局变量名: Eruda");
	if (
		PopsPanel.getValue(
			PanelSettingConfig.eruda_plugin_Resource_erudaMonitor.key
		)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaMonitor.resource
				)
			);
			Eruda.add(erudaMonitor);
		} catch (error) {
			console.error("插件【eruda-monitor】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(
			PanelSettingConfig.eruda_plugin_Resource_erudaFeatures.key
		)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaFeatures.resource
				)
			);
			Eruda.add(erudaFeatures);
		} catch (error) {
			console.error("插件【eruda-features】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(PanelSettingConfig.eruda_plugin_Resource_erudaTiming.key)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaTiming.resource
				)
			);
			Eruda.add(erudaTiming);
		} catch (error) {
			console.error("插件【eruda-timing】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(PanelSettingConfig.eruda_plugin_Resource_erudaCode.key)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaCode.resource
				)
			);
			Eruda.add(erudaCode);
		} catch (error) {
			console.error("插件【eruda-code】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(
			PanelSettingConfig.eruda_plugin_Resource_erudaBenchmark.key
		)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaBenchmark.resource
				)
			);
			Eruda.add(erudaBenchmark);
		} catch (error) {
			console.error("插件【eruda-benchmark】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(
			PanelSettingConfig.eruda_plugin_Resource_erudaGeolocation.key
		)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaGeolocation.resource
				)
			);
			Eruda.add(erudaGeolocation);
		} catch (error) {
			console.error("插件【eruda-geolocation】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(
			PanelSettingConfig.eruda_plugin_Resource_erudaOrientation.key
		)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaOrientation.resource
				)
			);
			Eruda.add(erudaOrientation);
		} catch (error) {
			console.error("插件【eruda-orientation】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(
			PanelSettingConfig.eruda_plugin_Resource_erudaTouches.key
		)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaTouches.resource
				)
			);
			Eruda.add(erudaTouches);
		} catch (error) {
			console.error("插件【eruda-touches】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(
			PanelSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key
		)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.resource
				)
			);
			Eruda.add(erudaOutlinePlugin);
		} catch (error) {
			console.error("插件【eruda-outline-plugin】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(PanelSettingConfig.eruda_plugin_Resource_erudaPixel.key)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaPixel.resource
				)
			);
			Eruda.add(erudaPixel);
		} catch (error) {
			console.error("插件【eruda-pixel】加载失败，原因：", error);
		}
	}
	if (
		PopsPanel.getValue(PanelSettingConfig.eruda_plugin_Resource_erudaVue.key)
	) {
		try {
			WebSiteDebugUtil.evalPlugin(
				GM_getResourceText(
					PanelSettingConfig.eruda_plugin_Resource_erudaVue.resource
				)
			);
			Eruda.add(erudaVue);
		} catch (error) {
			console.error("插件【eruda-vue】加载失败，原因：", error);
		}
	}
	if (PopsPanel.getValue(PanelSettingConfig.eruda_auto_open_panel.key)) {
		let defaultShowName = PopsPanel.getValue(
			PanelSettingConfig.eruda_default_show_panel_name.key,
			PanelSettingConfig.eruda_default_show_panel_name.defaultValue
		);
		Eruda.show();
		setTimeout(() => {
			Eruda.show(defaultShowName);
		}, 250);
	}
};
