import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { GM } from "ViteGM";

type AsyncOption = {
	/**
	 * 异步写法的名字
	 */
	name: string;
	/**
	 * 是否支持该api
	 */
	isSupport: boolean;
};

export abstract class ApiTestBase {
	/**
	 * 显示在通用面板上的名字
	 */
	public abstract getApiName(): string;
	/**
	 * 获取异步写法的api信息
	 *
	 * 如果获取为空，那么就是不存在异步写法
	 */
	public abstract getAsyncApiOption(): AsyncOption | undefined;
	/**
	 * 是否支持该Api
	 */
	public abstract isSupport(): boolean;
	/**
	 * 获取界面配置
	 */
	public abstract getUIOption(): PopsPanelContentConfig | undefined;
	/**
	 * 是否支持GM函数
	 */
	public isSupportGM() {
		return typeof GM === "object" && GM != null;
	}
}
