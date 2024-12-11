import { GM } from "ViteGM";
import { ApiTest_addElement } from "./gm/addElement";
import { ApiTest_addStyle } from "./gm/addStyle";
import { ApiTest_addValueChangeListener } from "./gm/addValueChangeListener";
import { ApiTest_cookie } from "./gm/cookie";
import { ApiTest_deleteValue } from "./gm/deleteValue";
import { ApiTest_deleteValues } from "./gm/deleteValues";
import { ApiTest_download } from "./gm/download";
import { ApiTest_getResourceText } from "./gm/getResourceText";
import { ApiTest_getResourceUrl } from "./gm/getResourceUrl";
import { ApiTest_getTab } from "./gm/getTab";
import { ApiTest_getTabs } from "./gm/getTabs";
import { ApiTest_getValue } from "./gm/getValue";
import { ApiTest_getValues } from "./gm/getValues";
import { ApiTest_info } from "./gm/info";
import { ApiTest_listValues } from "./gm/listValues";
import { ApiTest_log } from "./gm/log";
import { ApiTest_notification } from "./gm/notification";
import { ApiTest_openInTab } from "./gm/openInTab";
import { ApiTest_registerMenuCommand } from "./gm/registerMenuCommand";
import { ApiTest_removeValueChangeListener } from "./gm/removeValueChangeListener";
import { ApiTest_saveTab } from "./gm/saveTab";
import { ApiTest_setClipboard } from "./gm/setClipboard";
import { ApiTest_setValue } from "./gm/setValue";
import { ApiTest_setValues } from "./gm/setValues";
import { ApiTest_unregisterMenuCommand } from "./gm/unregisterMenuCommand";
import { ApiTest_unsafeWindow } from "./gm/unsafeWindow";
import { ApiTest_webRequest } from "./gm/webRequest";
import { ApiTest_xmlHttpRequest } from "./gm/xmlHttpRequest";
import { ApiTest_GM } from "./gm/GM";

export const GMTotal = {
	unsafeWindow: new ApiTest_unsafeWindow(),
	GM: new ApiTest_GM(),
	addElement: new ApiTest_addElement(),
	addStyle: new ApiTest_addStyle(),
	download: new ApiTest_download(),
	getResourceText: new ApiTest_getResourceText(),
	getResourceUrl: new ApiTest_getResourceUrl(),
	info: new ApiTest_info(),
	log: new ApiTest_log(),
	notification: new ApiTest_notification(),
	openInTab: new ApiTest_openInTab(),
	registerMenuCommand: new ApiTest_registerMenuCommand(),
	unregisterMenuCommand: new ApiTest_unregisterMenuCommand(),
	setClipboard: new ApiTest_setClipboard(),
	getTab: new ApiTest_getTab(),
	saveTab: new ApiTest_saveTab(),
	getTabs: new ApiTest_getTabs(),
	setValue: new ApiTest_setValue(),
	getValue: new ApiTest_getValue(),
	deleteValue: new ApiTest_deleteValue(),
	listValues: new ApiTest_listValues(),
	setValues: new ApiTest_setValues(),
	getValues: new ApiTest_getValues(),
	deleteValues: new ApiTest_deleteValues(),
	addValueChangeListener: new ApiTest_addValueChangeListener(),
	removeValueChangeListener: new ApiTest_removeValueChangeListener(),
	xmlHttpRequest: new ApiTest_xmlHttpRequest(),
	webRequest: new ApiTest_webRequest(),
	cookie: new ApiTest_cookie(),
};
