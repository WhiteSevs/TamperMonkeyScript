/* 数据 */
const DOMUtilsData = {
	/** .on绑定的事件 */
	SymbolEvents: Symbol(
		"events_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
	),
};

export { DOMUtilsData };
