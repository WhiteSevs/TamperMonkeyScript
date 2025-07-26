import type { QmsgPosition } from "qmsg/dist/src/QmsgConfig";

export const PanelSettingConfig = {
	/** Toast位置 */
	qmsg_config_position: {
		key: "qmsg-config-position",
		defaultValue: "bottom" as QmsgPosition,
	},
	/** 最多显示的数量 */
	qmsg_config_maxnums: {
		key: "qmsg-config-maxnums",
		defaultValue: 3,
	},
	/** 逆序弹出 */
	qmsg_config_showreverse: {
		key: "qmsg-config-showreverse",
		defaultValue: false,
	},
	/** Cookie配置-启用 */
	httpx_cookie_manager_enable: {
		key: "httpx-use-cookie-enable",
		defaultValue: false,
	},
	/** Cookie配置-使用document.cookie */
	httpx_cookie_manager_use_document_cookie: {
		key: "httpx-use-document-cookie",
		defaultValue: false,
	},
};
