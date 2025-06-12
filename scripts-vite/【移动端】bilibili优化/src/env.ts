import { SCRIPT_NAME } from "@components/base.env";
import { monkeyWindow, unsafeWindow } from "ViteGM";

const _SCRIPT_NAME_ = SCRIPT_NAME || "【移动端】bilibili优化";
const QRCodeJS = monkeyWindow.QRCode || unsafeWindow.QRCode;

export {
	utils,
	DOMUtils,
	log,
	GM_Menu,
	httpx,
	addStyle,
	pops,
	$,
	$$,
	MountVue,
	VUE_ELE_NAME_ID,
	cookieManager,
	OriginPrototype,
} from "@components/base.env";

export { _SCRIPT_NAME_ as SCRIPT_NAME, QRCodeJS };
