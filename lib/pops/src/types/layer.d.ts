/**
 * config内存储饿实例配置
 */
export interface PopsLayerConfig {
	/** 固定id */
	guid: string;
	/** 动画元素 */
	animElement: HTMLDivElement;
	/** 主元素 */
	popsElement: HTMLDivElement;
	/** 遮罩层元素 */
	maskElement?: HTMLDivElement;
}

export interface PopsLayerCommonConfig extends PopsLayerConfig {
	/** shadow容器 */
	$shadowContainer: HTMLDivElement;
	/** shadow容器的shandowRoot */
	$shadowRoot: ShadowRoot;
	/** 移除实例前的回调函数 */
	beforeRemoveCallBack?: (layerCommonConfig: PopsLayerCommonConfig) => void;
}
