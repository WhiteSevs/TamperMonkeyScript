import { httpx, log, utils } from "@/env";
import { HttpxDetails } from "@whitesev/utils/dist/types/src/Httpx";
import { unsafeWindow } from "ViteGM";

/** 网盘-引用/获取文件 */
export const NetDiskRequire = {
	requiredFileMap: new Map<string, number>(),
	/**
	 * 网络加载文件
	 * @param url 网络文件路径
	 * @param options
	 */
	async file(url: string, options?: HttpxDetails) {
		if (utils.isNull(url)) {
			log.error("NetDiskRequire.file的参数path为空", url);
			return false;
		}
		if (this.requiredFileMap.has(url)) {
			log.warn("NetDiskRequire.file的参数path已引入过", url);
			return true;
		}
		let getResp = await httpx.get(url, options!);
		if (!getResp.status) {
			return false;
		}
		let jsText = getResp.data.responseText;
		let count = this.requiredFileMap.get(url)!;
		this.requiredFileMap.set(url, count++);
		log.info("加载js文件", url);
		unsafeWindow.eval(
			`
		let exports = void 0;
		let module = void 0;
		let define = void 0;
		` + jsText
		);
		await utils.sleep(300);
		return true;
	},
};
