import { DOMUtils, unsafeWin, utils, console, $ } from "@/env";
import { PanelSettingConfig } from "@/setting/panel-setting-config";
import { PopsPanel } from "@/setting/setting";
import { DebugToolConfig } from "../DebugToolConfig";

export const PageSpy = () => {
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
			console.log("禁止在调试端运行 ==> hostname包含api");
			return;
		}
		if (window.location.origin.includes(clientOrigin)) {
			console.log("禁止在调试端运行 ==> origin包含clientOrigin");
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
	DebugToolConfig.pageSpy.version = unsafeWin.$pageSpy.version;
	console.log("PageSpy全局变量：$pageSpy");
};
