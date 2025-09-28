import { DebugToolConfig } from "@/main/DebugToolConfig";

export const GlobalSettingConfig = {
  debugTool: {
    key: "currentDebug",
    defaultValue: "eruda",
  },
  allowRunInIframe: {
    key: "allowRunInIframe",
    defaultValue: false,
  },
  autoLoadDebugTool: {
    key: "autoLoadDebugTool",
    defaultValue: true,
  },
  eruda_auto_open_panel: {
    key: "eruda-auto-open-panel",
    defaultValue: false,
  },
  eruda_default_show_panel_name: {
    key: "eruda-default-show-panel-name",
    defaultValue: "console",
  },
  eruda_panel_console: {
    key: "eruda-panel-console",
    defaultValue: true,
  },
  eruda_panel_elements: {
    key: "eruda-panel-elements",
    defaultValue: true,
  },
  eruda_panel_network: {
    key: "eruda-panel-network",
    defaultValue: true,
  },
  eruda_panel_resources: {
    key: "eruda-panel-resources",
    defaultValue: true,
  },
  eruda_panel_sources: {
    key: "eruda-panel-sources",
    defaultValue: true,
  },
  eruda_panel_info: {
    key: "eruda-panel-info",
    defaultValue: true,
  },
  eruda_panel_snippets: {
    key: "eruda-panel-snippets",
    defaultValue: true,
  },
  eruda_plugin_Resource_erudaMonitor: {
    key: "eruda_plugin_Resource_erudaMonitor",
    defaultValue: false,
    resource: "Resource_erudaMonitor",
  },
  eruda_plugin_Resource_erudaFeatures: {
    key: "eruda_plugin_Resource_erudaFeatures",
    defaultValue: false,
    resource: "Resource_erudaFeatures",
  },
  eruda_plugin_Resource_erudaTiming: {
    key: "eruda_plugin_Resource_erudaTiming",
    defaultValue: false,
    resource: "Resource_erudaTiming",
  },
  eruda_plugin_Resource_erudaCode: {
    key: "eruda_plugin_Resource_erudaCode",
    defaultValue: false,
    resource: "Resource_erudaCode",
  },
  eruda_plugin_Resource_erudaBenchmark: {
    key: "eruda_plugin_Resource_erudaBenchmark",
    defaultValue: false,
    resource: "Resource_erudaBenchmark",
  },
  eruda_plugin_Resource_erudaGeolocation: {
    key: "eruda_plugin_Resource_erudaGeolocation",
    defaultValue: false,
    resource: "Resource_erudaGeolocation",
  },
  eruda_plugin_Resource_erudaOrientation: {
    key: "eruda_plugin_Resource_erudaOrientation",
    defaultValue: false,
    resource: "Resource_erudaOrientation",
  },
  eruda_plugin_Resource_erudaVue: {
    key: "eruda_plugin_Resource_erudaVue",
    defaultValue: false,
    resource: "Resource_erudaVue",
  },
  eruda_plugin_Resource_erudaTouches: {
    key: "eruda_plugin_Resource_erudaTouches",
    defaultValue: false,
    resource: "Resource_erudaTouches",
  },
  eruda_plugin_Resource_erudaOutlinePlugin: {
    key: "eruda_plugin_Resource_erudaOutlinePlugin",
    defaultValue: false,
    resource: "Resource_erudaOutlinePlugin",
  },
  eruda_plugin_Resource_erudaPixel: {
    key: "eruda_plugin_Resource_erudaPixel",
    defaultValue: false,
    resource: "Resource_erudaPixel",
  },
  vconsole_auto_open_panel: {
    key: "vconsole-auto-open-panel",
    defaultValue: false,
  },
  vconsole_default_show_panel_name: {
    key: "vconsole-default-show-panel-name",
    defaultValue: "default",
  },
  vConsole_panel_system: {
    key: "vConsole-panel-system",
    defaultValue: true,
  },
  vConsole_panel_network: {
    key: "vConsole-panel-network",
    defaultValue: true,
  },
  vConsole_panel_element: {
    key: "vConsole-panel-element",
    defaultValue: true,
  },
  vConsole_panel_storage: {
    key: "vConsole-panel-storage",
    defaultValue: true,
  },
  vConsole_theme: {
    key: "vConsole-theme",
    defaultValue: "light",
  },
  vconsole_disableLogScrolling: {
    key: "vconsole-disableLogScrolling",
    defaultValue: false,
  },
  vconsole_showTimestamps: {
    key: "vconsole-showTimestamps",
    defaultValue: false,
  },
  vconsole_maxLogNumber: {
    key: "vconsole-maxLogNumber",
    defaultValue: 1000,
  },
  vconsole_maxNetworkNumber: {
    key: "vconsole-maxNetworkNumber",
    defaultValue: 1000,
  },
  vConsole_storage_defaultStorages_cookies: {
    key: "vConsole-storage-defaultStorages-cookies",
    defaultValue: true,
  },
  vConsole_storage_defaultStorages_localStorage: {
    key: "vConsole-storage-defaultStorages-localStorage",
    defaultValue: true,
  },
  vConsole_storage_defaultStorages_sessionStorage: {
    key: "vConsole-storage-defaultStorages-sessionStorage",
    defaultValue: true,
  },
  vConsole_plugin_Resource_vConsole_Stats: {
    key: "vConsole_plugin_Resource_vConsole_Stats",
    defaultValue: false,
  },
  vConsole_plugin_Resource_vConsole_ExportLog: {
    key: "vConsole_plugin_Resource_vConsole_ExportLog",
    defaultValue: false,
  },
  vConsole_plugin_Resource_vConsoleVueDevtools: {
    key: "vConsole_plugin_Resource_vConsoleVueDevtools",
    defaultValue: false,
    resource: "Resource_vConsoleVueDevtools",
  },
  pagespy_disable_run_in_debug_client: {
    key: "pagespy-disable-run-in-debug-client",
    defaultValue: true,
  },
  pagespy_api: {
    key: "pagespy-api",
    defaultValue: DebugToolConfig.pageSpy.defaultConfig.api,
  },
  pagespy_clientOrigin: {
    key: "pagespy-clientOrigin",
    defaultValue: DebugToolConfig.pageSpy.defaultConfig.cliennOrigin,
  },
  pagespy_project: {
    key: "pagespy-project",
    defaultValue: "default",
  },
  pagespy_title: {
    key: "pagespy-title",
    defaultValue: "--",
  },
  pagespy_autoRender: {
    key: "pagespy-autoRender",
    defaultValue: true,
  },
  pagespy_enableSSL: {
    key: "pagespy-enableSSL",
    defaultValue: true,
  },
  pagespy_offline: {
    key: "pagespy-offline",
    defaultValue: false,
  },
  pagespy_serializeData: {
    key: "pagespy-serializeData",
    defaultValue: false,
  },
  pagespy_useSecret: {
    key: "pagespy-useSecret",
    defaultValue: false,
  },
  pagespy_messageCapacity: {
    key: "pagespy-messageCapacity",
    defaultValue: 1000,
  },
  chii_script_embedded: {
    key: "chii-script-embedded",
    defaultValue: true,
  },
  chii_disable_run_in_debug_url: {
    key: "chii-disable-run-in-debug-url",
    defaultValue: true,
  },
  chii_check_script_load: {
    key: "chii-check-script-load",
    defaultValue: true,
  },
  chii_debug_url: {
    key: "chii-debug-url",
    defaultValue: DebugToolConfig.chii.defaultConfig.url,
  },
  chii_target_js: {
    key: "chii-target-js",
    defaultValue: DebugToolConfig.chii.defaultConfig.scriptJs,
  },
  chii_embedded_height_enable: {
    key: "chii-embedded-height-enable",
    defaultValue: false,
  },
  chii_embedded_height: {
    key: "chii-embedded-height",
    defaultValue: parseInt((window.innerHeight / 2).toString()),
  },
};
