/**
 * config实例配置
 */
export interface PopsInstConfig {
	/** 固定id */
	guid: string;
	/** 动画元素 */
	animElement: HTMLDivElement;
	/** 主元素 */
	popsElement: HTMLDivElement;
	/** 遮罩层元素 */
	maskElement?: HTMLDivElement;
}
/**
 * config实例通用配置
 */
export interface PopsInstCommonConfig extends PopsInstConfig {
	/** shadow容器 */
	$shadowContainer: HTMLDivElement;
	/** shadow容器的shandowRoot */
	$shadowRoot: ShadowRoot | HTMLElement;
	/** 移除实例前的回调函数 */
	beforeRemoveCallBack?: (instCommonConfig: PopsInstCommonConfig) => void;
}
