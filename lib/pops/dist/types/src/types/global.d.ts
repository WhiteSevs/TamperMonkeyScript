declare module "*.css" {
  const content: string;
  export default content;
}
declare module "*.svg" {
  const content: string;
  export default content;
}

declare let unsafeWindow: Window & typeof globalThis;

declare interface Window {
  trustedTypes: any;
}

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

declare type IPromise<T> = Promise<T> | T;
