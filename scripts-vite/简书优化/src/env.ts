import { SCRIPT_NAME } from "@components/base.env";

const _SCRIPT_NAME_ = SCRIPT_NAME || "简书优化";

export { _SCRIPT_NAME_ as SCRIPT_NAME };
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
