/**
 * 空对象
 * 
 * 类似
 * {
 *  "xxx": string,
 * }
 */
type NestedObjectWithToString = {
    [key: string]: any | NestedObjectWithToString;
    toString(): any;
}

declare type IPromise<T> = Promise<T> | T;