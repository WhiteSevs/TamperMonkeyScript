export const SymbolEvents = Symbol(
	"events_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
);
