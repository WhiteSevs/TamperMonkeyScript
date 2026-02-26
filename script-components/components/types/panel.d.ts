/**
 * 如果该函数返回false则阻止默认行为（初始化默认值）
 */
declare type PanelData_ATTRIBUTE_INIT = () => void | false;
/**
 * 默认值
 */
declare type PanelData_ATTRIBUTE_DEFAULT_VALUE = any;
/**
 * 配置多项默认值时调用
 */
declare type PanelData_ATTRIBUTE_INIT_MORE_VALUE = Record<string, PanelData_ATTRIBUTE_DEFAULT_VALUE>;
/**
 * panel面板的搜索插件的配置项
 */
declare type PanelData_ATTRIBUTE_PLUGIN_SEARCH_CONFIG = {
  /** 左侧文字 */
  text: string;
  /** 左侧描述文字 */
  desc?: string;
};
/**
 * 存储值的api
 */
declare type PanelData_PROPS_STORAGE_API<T> = {
  /** 获取值 */
  get<T>(key: string, defaultValue: T): T;
  /** 设置值 */
  set(key: string, value: T): void;
};
