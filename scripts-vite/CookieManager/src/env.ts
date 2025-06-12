import { cookieManager, SCRIPT_NAME } from "@components/base.env";
import { GM_cookie } from "ViteGM";
const _SCRIPT_NAME_ = SCRIPT_NAME || "CookieManager";

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
} from "@components/base.env";

/**
 * 让对象内的函数属性的this指向固定为该对象
 */
let applyObjectThis = (obj: any) => {
	if ((typeof obj === "object" && obj != null) || typeof obj === "function") {
		Object.keys(obj).forEach((key) => {
			if (typeof obj[key] === "function") {
				obj[key] = obj[key].bind(obj);
			}
		});
	}
};

const __GM_cookie__ = GM_cookie;
applyObjectThis(__GM_cookie__);
applyObjectThis(cookieManager);

export {
	_SCRIPT_NAME_ as SCRIPT_NAME,
	__GM_cookie__ as GM_cookie,
	cookieManager as utilsCookieManager,
};
