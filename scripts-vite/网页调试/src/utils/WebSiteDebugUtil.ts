import { DOMUtils, unsafeWin, utils } from "@/env";
import { GM_addElement } from "ViteGM";

export const WebSiteDebugUtil = {
  /**
   * 执行插件代码
   */
  evalPlugin: async (codeText: string, exportName: string) => {
    const tempExportName = `${exportName}_${Math.random().toString(36).substring(2)}`;
    let addElement = GM_addElement;
    if (typeof addElement !== "function") {
      // @ts-expect-error
      addElement = (tagName: string, attrs: Record<string, string>) => {
        const $el = DOMUtils.createElement(tagName, attrs);
        if (["meta", "link", "script", "style"].indexOf(tagName.toLowerCase()) !== -1) {
          (document.head || document.documentElement).appendChild($el);
        } else {
          (document.body || document.documentElement).appendChild($el);
        }
        return $el;
      };
    }
    await addElement("script", {
      textContent: `window["${tempExportName}"] = (() => { 
		try{
			var exports=void 0;
		}catch(error){
			console.warn(error);
		}

		try{
			var module=void 0;
		}catch(error){
			console.warn(error);
		}

		try{
			var define=void 0;
		}catch(error){
			console.warn(error);
		}

		${codeText}

		return ${exportName}; 
	})()`,
    });
    // @ts-expect-error
    const result = unsafeWin[tempExportName];
    // @ts-expect-error
    delete unsafeWin[tempExportName];
    // @ts-expect-error
    delete unsafeWin[exportName];
    return result;
  },
};
