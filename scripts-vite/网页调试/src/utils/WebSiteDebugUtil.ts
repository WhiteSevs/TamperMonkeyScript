import { unsafeWin } from "@/env";

export const WebSiteDebugUtil = {
	/**
	 * 执行插件代码
	 * @param args
	 */
	evalPlugin: (...args: string[]) => {
		const coverCMD = `
		try{let exports=void 0}catch(error){console.warn(error)}
		try{let module=void 0}catch(error){console.warn(error)}
		try{let define=void 0}catch(error){console.warn(error)}
		`;
		if (args.length === 0) {
			return;
		}
		const codeText = args.join("\n");
		return unsafeWin.eval(coverCMD + "\n" + codeText);
	},
};
