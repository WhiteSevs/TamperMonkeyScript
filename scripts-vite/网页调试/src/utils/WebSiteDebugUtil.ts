import { unsafeWin } from "@/env";

export const WebSiteDebugUtil = {
	/**
	 * 执行插件代码
	 * @param args
	 */
	evalPlugin: (...args: string[]) => {
		if (args.length === 0) {
			return;
		}
		const codeText = args.join("\n");
		const coverCMD = `
		
		`;
		return unsafeWin.eval(`
(()=>{
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
		
})()
`);
	},
};
