import { SCRIPT_NAME } from "@components/base.env";
const _SCRIPT_NAME_ = SCRIPT_NAME || "m3u8内容过滤器";

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
} from "@components/base.env";

export { _SCRIPT_NAME_ as SCRIPT_NAME };
