/**
 * config实例配置
 */
export interface PopsInstConfig {
  /** 固定id */
  guid: string;
  /** 动画元素 */
  $anim: HTMLDivElement;
  /** 主元素 */
  $pops: HTMLDivElement;
  /** 遮罩层元素 */
  $mask?: HTMLDivElement;
}
/**
 * config实例通用配置
 */
export interface PopsInstGeneralConfig extends PopsInstConfig {
  /** shadow容器 */
  $shadowContainer: HTMLDivElement;
  /** shadow容器的shandowRoot */
  $shadowRoot: ShadowRoot | HTMLElement;
  /** 移除实例前的回调函数 */
  beforeRemoveCallBack?: (instCommonConfig: PopsInstGeneralConfig) => void;
  /** 配置 */
  config: any;
  /** 销毁元素 */
  destory(): void | Promise<void>;
}
