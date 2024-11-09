import { PopsPanel } from "@/setting/setting";
import { console, copy, GM_Menu, unsafeWin, utils } from "@/env";
import { PanelSettingConfig } from "@/setting/panel-setting-config";
import type {
	UtilsGMMenuClickCallBackData,
	UtilsGMMenuOption,
} from "@whitesev/utils/dist/types/src/types/UtilsGMMenu";
import { ToolsConfig } from "./ToolsConfig";
import { WebSiteDebugUtil } from "@/utils/WebSiteDebugUtil";
import { GM_getResourceText } from "ViteGM";

export const Tools = {
	$data: {
		/** 当前的调试工具是否已执行 */
		isLoadDebugTool: false,
		/** 当前已执行的调试工具名 */
		loadDebugToolName: void 0 as undefined | string,
		/** 当前执行了调试工具的iframe */
		iframeUrlList: [] as string[],
	},
	$ele: {
		/** 隐藏调试工具的style元素 */
		hideDebugToolCSSNode: void 0 as HTMLStyleElement | undefined,
	},
	/**
	 * 处理当在iframe内加载时，是否允许执行，如果允许，那么把url添加到菜单中
	 */
	handleIframe() {
		if (PopsPanel.isTopWindow()) {
			return true;
		}
		if (!PopsPanel.getValue(PanelSettingConfig.allowRunInIframe.key)) {
			return false;
		}
		this.$data.iframeUrlList.push(window.location.href);
		try {
			// @ts-ignore
			top.console.log("iframe信息：" + window.location.href);
		} catch (error) {
			console.error(error);
		}
		GM_Menu.add({
			key: "iframeUrl",
			text: window.location.href,
			autoReload: false,
			isStoreValue: false,
			showText(text) {
				return text;
			},
			callback() {
				copy(window.location.href, "text");
			},
		});
		return true;
	},
	/**
	 * 执行当前的调试工具
	 */
	runDebugTool() {
		/* 当前的调试工具，默认为eruda */
		let debugTool = PopsPanel.getValue<string>(
			PanelSettingConfig.debugTool.key
		);
		debugTool = debugTool.toString().toLowerCase();
		console.log(`网页调试：当前使用的调试工具【${debugTool}】`);
		if (debugTool === "vconsole") {
			/* vConsole */
			this.$data.isLoadDebugTool = true;
			this.$data.loadDebugToolName = "vconsole";
			this.vConsole();
		} else if (debugTool === "pagespy") {
			/* PageSpy */
			this.$data.isLoadDebugTool = true;
			this.$data.loadDebugToolName = "pagespy";
			this.pageSpy();
		} else if (debugTool === "eruda") {
			/* eruda */
			this.$data.isLoadDebugTool = true;
			this.$data.loadDebugToolName = "eruda";
			this.eruda();
		} else if (debugTool === "chii") {
			/* chii */
			this.$data.isLoadDebugTool = true;
			this.$data.loadDebugToolName = "chii";
			this.chii();
		} else {
			console.error("当前未配置该调试工具的运行");
		}
	},
	/**
	 * 在脚本菜单中添加控制当前的调试工具状态的菜单按钮
	 */
	addControlDebugToolScriptMenu() {
		if (!PopsPanel.isTopWindow()) {
			console.warn("不在iframe内重复添加菜单按钮");
			return;
		}
		let menuData: UtilsGMMenuOption = {
			key: "debug_tool_show_hide_control",
			text: "☯ 加载并显示调试工具",
			autoReload: false,
			isStoreValue: false,
			showText(text) {
				return text;
			},
			callback: (data) => {
				changeMenu(data);
			},
		};
		/**
		 *
		 * @param data
		 */
		const changeMenu = (data: UtilsGMMenuClickCallBackData) => {
			if (Tools.$data.isLoadDebugTool) {
				/* 状态：已加载 */
				if (Tools.$ele.hideDebugToolCSSNode) {
					/* 状态：已加载且添加了隐藏CSS */
					/* 进行移除隐藏CSS */
					/* 菜单状态：【隐藏调试工具】 */
					this.showDebugTool();
					menuData.text = "🌑 隐藏调试工具";
					GM_Menu.update(menuData);
				} else {
					/* 状态：已加载且未添加隐藏CSS */
					/* 进行添加隐藏CSS */
					/* 菜单状态：【显示调试工具】 */
					this.hideDebugTool();
					menuData.text = "🌕 显示调试工具";
					GM_Menu.update(menuData);
				}
			} else {
				/* 状态：未加载，加载并显示 */
				/* 进行执行调试工具 */
				/* 菜单状态：【隐藏调试工具】 */
				this.showDebugTool();
				menuData.text = "🌑 隐藏调试工具";
				GM_Menu.update(menuData);
			}
		};
		GM_Menu.add(menuData);
	},
	/**
	 * 判断页面中是否已存在隐藏调试工具的CSS元素节点
	 * @returns
	 */
	hasHideDebugToolCSSNode() {
		return Boolean(
			this.$ele.hideDebugToolCSSNode &&
				document.documentElement.contains(this.$ele.hideDebugToolCSSNode!)
		);
	},
	/**
	 * 创建隐藏调试工具的CSS元素
	 * @returns
	 */
	createHideDebugToolCSSNode() {
		let cssNode = document.createElement("style");
		cssNode.setAttribute("type", "text/css");
		cssNode.setAttribute("data-from", "hide-debug-tool");
		cssNode.innerHTML = /*css*/ `
        #eruda{
            display: none !important;
        }
        #__vconsole{
            display: none !important;
        }
        #__pageSpy{
            display: none !important;
        }
        .__chobitsu-hide__ > iframe,
        .__chobitsu-hide__:has(iframe){
            display: none !important;
        }
        `;
		return cssNode;
	},
	/**
	 * 隐藏当前的调试工具
	 */
	hideDebugTool() {
		if (this.$ele.hideDebugToolCSSNode == null) {
			console.log("未创建隐藏【调试工具】的style元素 => 创建元素");
			this.$ele.hideDebugToolCSSNode = this.createHideDebugToolCSSNode();
		}
		if (!this.hasHideDebugToolCSSNode()) {
			console.log("页面不存在隐藏【调试工具】的style元素 => 添加元素");
			document.documentElement.appendChild(this.$ele.hideDebugToolCSSNode);
		}
	},
	/**
	 * 显示当前的调试工具
	 */
	showDebugTool() {
		if (this.$ele.hideDebugToolCSSNode) {
			console.log("页面存在隐藏【调试工具】的style元素 => 移除元素");
			document.documentElement.removeChild(this.$ele.hideDebugToolCSSNode);
			this.$ele.hideDebugToolCSSNode = void 0;
		}
		if (!this.$data.isLoadDebugTool) {
			console.log("尚未运行【调试工具】 => 运行调试工具");
			this.runDebugTool();
		}
	},
	eruda() {
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
		ToolsConfig.eruda.version = Eruda.version;
		Eruda.init({
			tool: inintPanelList,
		});
		console.log(`eruda当前版本：${Eruda.version}`);
		console.log(`eruda项目地址：${ToolsConfig.eruda.homeUrl}`);
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
			PopsPanel.getValue(
				PanelSettingConfig.eruda_plugin_Resource_erudaTiming.key
			)
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
			PopsPanel.getValue(
				PanelSettingConfig.eruda_plugin_Resource_erudaPixel.key
			)
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
	},
	vConsole() {
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
				if (
					PopsPanel.getValue(PanelSettingConfig.vconsole_auto_open_panel.key)
				) {
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
		ToolsConfig.vConsole.version = vConsole.version;
		unsafeWin.vConsole = vConsole;
		console.log(`VConsole当前版本：${vConsole.version}`);
		console.log(`VConsole项目地址：${ToolsConfig.vConsole.homeUrl}`);
		console.log("VConsole的实例化的全局变量名: vConsole");
		if (
			PopsPanel.getValue(
				PanelSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key
			)
		) {
			try {
				vConsolePlugin.State(vConsole, VConsole);
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
				vConsolePlugin.exportLog(vConsole, VConsole);
			} catch (error) {
				console.error(
					"插件【vconsole-outputlog-plugin】加载失败，原因：",
					error
				);
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
	},
	pageSpy() {
		let api = PopsPanel.getValue(
			PanelSettingConfig.pagespy_api.key,
			PanelSettingConfig.pagespy_api.defaultValue
		);
		let clientOrigin = PopsPanel.getValue(
			PanelSettingConfig.pagespy_clientOrigin.key,
			PanelSettingConfig.pagespy_clientOrigin.defaultValue
		);
		if (
			PopsPanel.getValue(
				PanelSettingConfig.pagespy_disable_run_in_debug_client.key
			)
		) {
			if (window.location.hostname.includes(api)) {
				return;
			}
			if (window.location.origin.includes(clientOrigin)) {
				return;
			}
		}
		let __pageSpy__ = new initPageSpy(unsafeWin);
		if (!__pageSpy__) {
			alert("调试工具【PageSpy】获取失败，请反馈开发者");
			return;
		}
		let $pageSpy = new __pageSpy__({
			// SDK 会从引入的路径自动分析并决定 Server 的地址（api）和调试端的地址（clientOrigin）
			// 假设你从 https://example.com/page-spy/index.min.js 引入，那么 SDK 会在内部设置：
			//   - api: "example.com"
			//   - clientOrigin: "https://example.com"
			// 如果你的服务部署在别处，就需要在这里手动指定去覆盖。
			api: api,
			clientOrigin: clientOrigin,

			// project 作为信息的一种聚合，可以在调试端房间列表进行搜索
			project: PopsPanel.getValue(
				PanelSettingConfig.pagespy_project.key,
				PanelSettingConfig.pagespy_project.defaultValue
			),

			// title 供用户提供自定义参数，可以用于区分当前调试的客户端
			// 对应的信息显示在每个调试连接面板的「设备id」下方
			title: PopsPanel.getValue(
				PanelSettingConfig.pagespy_title.key,
				PanelSettingConfig.pagespy_title.defaultValue
			),

			// 指示 SDK 初始化完成，是否自动在客户端左下角渲染「圆形白底带 Logo」的控件
			// 如果设置为 false, 可以调用 window.$pageSpy.render() 手动渲染
			autoRender: PopsPanel.getValue(
				PanelSettingConfig.pagespy_autoRender.key,
				PanelSettingConfig.pagespy_autoRender.defaultValue
			),

			// 手动指定 PageSpy 服务的 scheme。
			// 这在 SDK 无法正确分析出 scheme 可以使用，例如 PageSpy 的浏览器插件
			// 是通过 chrome-extension://xxx/sdk/index.min.js 引入 SDK，这会
			// 被 SDK 解析成无效的 "chrome-extension://" 并回退到 ["http://", "ws://"]。
			//   - （默认）传值 undefined 或者 null：SDK 会自动分析；
			//   - 传递 boolean 值：
			//     - true：SDK 将通过 ["https://", "wss://"] 访问 PageSpy 服务
			//     - false：SDK 将通过 ["http://", "ws://"] 访问 PageSpy 服务
			enableSSL: PopsPanel.getValue(
				PanelSettingConfig.pagespy_enableSSL.key,
				PanelSettingConfig.pagespy_enableSSL.defaultValue
			),

			// 在 PageSpy@1.7.4 支持离线回放功能后，客户端集成的 SDK 可以不用和调试端建立连接，
			// 通过 DataHarborPlugin 收集数据、导出离线日志，成为新的使用方式。
			// 默认值 false。用户设置为其他值时，会进入 "离线模式"，具体表现为 PageSpy 不会创建房间、建立 WebSocket 连接。
			// 仅适用浏览器环境的 SDK
			offline: PopsPanel.getValue(
				PanelSettingConfig.pagespy_offline.key,
				PanelSettingConfig.pagespy_offline.defaultValue
			),

			// PageSpy 内置的插件都是开箱即用的，你可以手动指定禁用哪些插件
			// disabledPlugins: [],

			// 是否允许 SDK 在收集离线日志时，序列化非基本类型的数据，序列化的目的是方便在回放时查看
			serializeData: PopsPanel.getValue(
				PanelSettingConfig.pagespy_serializeData.key,
				PanelSettingConfig.pagespy_serializeData.defaultValue
			),

			// 是否启用权限认证功能。启用后，SDK 会生成 6 位数的随机 “密钥”；调试端进入房间时要求输入对应的密钥
			useSecret: PopsPanel.getValue(
				PanelSettingConfig.pagespy_useSecret.key,
				PanelSettingConfig.pagespy_useSecret.defaultValue
			),

			// SDK 在调试端进入房间之前会在内存中缓存数据，以便于调试端进入房间后可以看到之前的数据。
			// 但数据体积会越来越大，因此可以指定 SDK 在本地最多缓存多少条数据记录。
			messageCapacity: PopsPanel.getValue(
				PanelSettingConfig.pagespy_messageCapacity.key,
				PanelSettingConfig.pagespy_messageCapacity.defaultValue
			),
		});
		unsafeWin.$pageSpy = $pageSpy;
		console.log($pageSpy);
		ToolsConfig.pageSpy.version = unsafeWin.$pageSpy.version;
		console.log("PageSpy全局变量：$pageSpy");
		utils
			.waitPropertyByInterval(
				unsafeWin.$pageSpy,
				function () {
					return unsafeWin.$pageSpy.root != null;
				},
				250,
				10000
			)
			.then(() => {
				let contentElement: HTMLElement =
					unsafeWin.$pageSpy.root.querySelector(".page-spy-content");
				let goToRoomListElement = document.createElement("div");
				let goToDebugElement = document.createElement("div");
				goToDebugElement.className = "page-spy-content__btn";
				goToDebugElement.innerHTML = "前往调试";
				goToRoomListElement.className = "page-spy-content__btn";
				goToRoomListElement.innerHTML = "前往房间列表";
				goToDebugElement.addEventListener(
					"click",
					function () {
						window.open(
							`${clientOrigin}/#/devtools?${utils.toSearchParamsStr({
								version: unsafeWin.$pageSpy.name,
								address: unsafeWin.$pageSpy.address,
							})}`,
							"_blank"
						);
					},
					{
						capture: true,
					}
				);
				goToRoomListElement.addEventListener(
					"click",
					function () {
						window.open(`${clientOrigin}/#/room-list`, "_blank");
					},
					{
						capture: true,
					}
				);
				contentElement.appendChild(goToRoomListElement);
				contentElement.appendChild(goToDebugElement);
			});
	},
	chii() {
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
			console.log("禁止在调试端运行");
			return;
		}
		ChiiHeight.init();
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
	},
};
