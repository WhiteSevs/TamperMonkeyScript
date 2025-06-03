/** PopsPanel的存储键 */
const KEY = "GM_Panel";
/** 
 * 初始化配置时调用，该值是一个函数，如果该函数返回false则阻止默认行为（初始化默认值）
 * @example
 * Reflect.set(result.attributes!, ATTRIBUTE_INIT, ()=>{
 *     console.log("初始化操作");
 * })
 */
const ATTRIBUTE_INIT = "data-init";
/** 
 * 键
 * @example
 * Reflect.set(result.attributes!, ATTRIBUTE_KEY, key)
 */
const ATTRIBUTE_KEY = "data-key";
/** 
 * 默认值
 * @example
 * Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue)
 */
const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
/** 
 * 配置多项默认值时调用 
 * @example
 * Reflect.set(result.attributes!, ATTRIBUTE_INIT_MORE_VALUE, {
 *   "xx-key": "xx-default-value",
 *   "xxxx-key": "xxxx-default-value",
 * })
 */
const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
/**
 * 存储值的api
 * 
 * 在props属性上
 * @example
 * Reflect.set(result.props!, PROPS_STORAGE_API, {
 *   get(){
 *     ...
 *   },
 *   set(){
 *     ...
 *   },
 * })
 */
const PROPS_STORAGE_API = "data-storage-api";

export {
	KEY,
	ATTRIBUTE_KEY,
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_INIT,
	ATTRIBUTE_INIT_MORE_VALUE,
	PROPS_STORAGE_API,
};
