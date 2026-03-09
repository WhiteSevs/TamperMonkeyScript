/* eslint-disable no-var */
declare var jQuery: any;
declare var unsafeWindow: Window;

declare var mozIndexedDB: IDBFactory | null;
declare var webkitIndexedDB: IDBFactory | null;
declare var msIndexedDB: IDBFactory | null;

declare type IPromise<T> = T | Promise<T>;

declare type IFunction<T> = T | (() => T);

declare type IArray<T> = T | Array<T>;
