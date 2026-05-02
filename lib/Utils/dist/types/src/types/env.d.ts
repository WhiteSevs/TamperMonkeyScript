/* eslint-disable no-var */
declare var jQuery: any;
declare var unsafeWindow: Window;

declare var mozIndexedDB: IDBFactory | null;
declare var webkitIndexedDB: IDBFactory | null;
declare var msIndexedDB: IDBFactory | null;

declare type IPromise<T> = T | Promise<T>;

declare type IFunction<T> = T | (() => T);

declare type IArray<T> = T | Array<T>;

/**
 * 提取数组中的元素类型
 */
declare type ArrayElementType<T> = T extends Array<infer U> ? U : never;

/**
 * 让对象的某个属性必选
 */
declare type RequiredProperty<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * 让对象的某个属性非空
 */
declare type NonNullableProperty<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};

declare type DeepRequired<T> = T extends any[]
  ? T
  : // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    T extends Function
    ? T
    : T extends object
      ? T extends Node
        ? T
        : {
            [K in keyof T]-?: DeepRequired<T[K]>;
          }
      : T;
