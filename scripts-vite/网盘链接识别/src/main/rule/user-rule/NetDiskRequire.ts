import { httpx, log, utils } from "@/env";
import { HttpxDetails } from "@whitesev/utils/dist/types/src/Httpx";
import { unsafeWindow } from "ViteGM";

/** 网盘-引用/获取文件 */
export const NetDiskRequire = {
	requiredFileMap: new Map<string, number>(),
	/**
	 * 网络加载文件
	 * @param path
	 * @param options
	 */
	async file(path: string, options: HttpxDetails) {
		if (utils.isNull(path)) {
			log.error(["NetDiskRequire.file的参数path为空", path]);
			return false;
		}
		if (this.requiredFileMap.has(path)) {
			log.warn(["NetDiskRequire.file的参数path已引入过", path]);
			return true;
		}
		let getResp = await httpx.get(path, options);
		if (!getResp.status) {
			return false;
		}
		let jsText = getResp.data.responseText;
		let count = this.requiredFileMap.get(path)!;
		this.requiredFileMap.set(path, count++);
		log.info(["加载js文件", path]);
		unsafeWindow.eval(
			`
		let exports = void 0;
		let module = void 0;
		let define = void 0;
		` + jsText
		);
		await utils.sleep(300);
	},
};
