import {
	GM,
	GM_addElement,
	GM_addStyle,
	GM_addValueChangeListener,
	GM_cookie,
	GM_deleteValue,
	GM_deleteValues,
	GM_download,
	GM_getResourceText,
	GM_getResourceURL,
	GM_getTab,
	GM_getTabs,
	GM_getValue,
	GM_getValues,
	GM_info,
	GM_listValues,
	GM_log,
	GM_notification,
	GM_openInTab,
	GM_registerMenuCommand,
	GM_removeValueChangeListener,
	GM_saveTab,
	GM_setClipboard,
	GM_setValue,
	GM_setValues,
	GM_unregisterMenuCommand,
	GM_webRequest,
	GM_xmlhttpRequest,
	unsafeWindow,
} from "ViteGM";

/**
 * 测试Api支持情况
 */
export const ApiSupportTest = {
	unsafeWindow() {
		return typeof unsafeWindow === "object" && unsafeWindow != null;
	},
	GM() {
		return typeof GM === "object" && GM != null;
	},
	addElement() {
		return typeof GM_addElement === "function";
	},
	addElement_async() {
		return this.GM() && typeof GM.addElement === "function";
	},
	addStyle() {
		return typeof GM_addStyle === "function";
	},
	addStyle_async() {
		return this.GM() && typeof GM.addStyle === "function";
	},
	addValueChangeListener() {
		return typeof GM_addValueChangeListener === "function";
	},
	addValueChangeListener_async() {
		return this.GM() && typeof GM.addValueChangeListener === "function";
	},
	removeValueChangeListener() {
		return typeof GM_removeValueChangeListener === "function";
	},
	removeValueChangeListener_async() {
		return this.GM() && typeof GM.removeValueChangeListener === "function";
	},
	cookie() {
		return typeof GM_cookie === "function";
	},
	cookie_async() {
		return this.GM() && typeof GM.cookie === "object";
	},
	deleteValue() {
		return typeof GM_deleteValue === "function";
	},
	deleteValue_async() {
		return this.GM() && typeof GM.deleteValue === "function";
	},
	deleteValues() {
		return typeof GM_deleteValues === "function";
	},
	deleteValues_async() {
		return this.GM() && typeof GM.deleteValues === "function";
	},
	download() {
		return typeof GM_download === "function";
	},
	download_async() {
		return this.GM() && typeof GM.download === "function";
	},
	getResourceText() {
		return typeof GM_getResourceText === "function";
	},
	getResourceText_async() {
		return this.GM() && typeof GM.getResourceText === "function";
	},
	getResourceUrl() {
		return typeof GM_getResourceURL === "function";
	},
	getResourceUrl_async() {
		return this.GM() && typeof GM.getResourceUrl === "function";
	},
	getTab() {
		return typeof GM_getTab === "function";
	},
	getTab_async() {
		return this.GM() && typeof GM.getTab === "function";
	},
	getTabs() {
		return typeof GM_getTabs === "function";
	},
	getTabs_async() {
		return this.GM() && typeof GM.getTabs === "function";
	},
	getValue() {
		return typeof GM_getValue === "function";
	},
	getValue_async() {
		return this.GM() && typeof GM.getValue === "function";
	},
	setValue() {
		return typeof GM_setValue === "function";
	},
	setValue_async() {
		return this.GM() && typeof GM.setValue === "function";
	},
	getValues() {
		return typeof GM_getValues === "function";
	},
	getValues_async() {
		return this.GM() && typeof GM.getValues === "function";
	},
	setValues() {
		return typeof GM_setValues === "function";
	},
	setValues_async() {
		return this.GM() && typeof GM.setValues === "function";
	},
	info() {
		return typeof GM_info === "object" && GM_info != null;
	},
	info_async() {
		return this.GM() && typeof GM.info === "object";
	},
	listValues() {
		return typeof GM_listValues === "function";
	},
	listValues_async() {
		return this.GM() && typeof GM.listValues === "function";
	},
	log() {
		return typeof GM_log === "function";
	},
	log_async() {
		return this.GM() && typeof GM.log === "function";
	},
	notification() {
		return typeof GM_notification === "function";
	},
	notification_async() {
		return this.GM() && typeof GM.notification === "function";
	},
	openInTab() {
		return typeof GM_openInTab === "function";
	},
	openInTab_async() {
		return this.GM() && typeof GM.openInTab === "function";
	},
	registerMenuCommand() {
		return typeof GM_registerMenuCommand === "function";
	},
	registerMenuCommand_async() {
		return this.GM() && typeof GM.registerMenuCommand === "function";
	},
	unregisterMenuCommand() {
		return typeof GM_unregisterMenuCommand === "function";
	},
	unregisterMenuCommand_async() {
		return this.GM() && typeof GM.unregisterMenuCommand === "function";
	},
	saveTab() {
		return typeof GM_saveTab === "function";
	},
	saveTab_async() {
		return this.GM() && typeof GM.saveTab === "function";
	},
	setClipboard() {
		return typeof GM_setClipboard === "function";
	},
	setClipboard_async() {
		return this.GM() && typeof GM.setClipboard === "function";
	},
	webRequest() {
		return typeof GM_webRequest === "function";
	},
	webRequest_async() {
		return this.GM() && typeof GM.webRequest === "function";
	},
	xmlHttpRequest() {
		return typeof GM_xmlhttpRequest === "function";
	},
	xmlHttpRequest_async() {
		return this.GM() && typeof GM.xmlHttpRequest === "function";
	},
};
