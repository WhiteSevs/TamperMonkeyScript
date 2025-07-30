export type JSTypeMap = {
	string: string;
	number: number;
	boolean: boolean;
	object: object;
	symbol: symbol;
	bigint: bigint;
	undefined: undefined;
	null: null;
};

export type JSTypeNames = keyof JSTypeMap;

export type ArgsType<T extends JSTypeNames[]> = {
	[I in keyof T]: JSTypeMap[T[I]];
};

export declare interface UtilsOwnObject<V extends any> {
	[key: string]: V | UtilsOwnObject<V>;
}

export declare interface AnyObject {
	[key: string]: any | AnyObject;
	toString(): string;
}

export type PartialKeys<T, K extends keyof T> = {
	[P in K]?: T[P];
};

export type Values<T> = T[keyof T];
