/**
 * 存储在元素属性上的事件名
 */
export const SymbolEvents = Symbol(
	"events_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
);
