declare const jQuery: any;
declare interface Window {
  webkitMutationObserver: MutationObserver;
  MozMutationObserver: MutationObserver;
  jQuery: any;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  DOMUtils: typeof import("./../index").DOMUtils;
  trustedTypes: any;
}
declare type IArray<T> = T | T[];
