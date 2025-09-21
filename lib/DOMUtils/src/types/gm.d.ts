/** GM中的unsafeWindow */
declare const unsafeWindow: Window & typeof globalThis;

declare interface Window {
  trustedTypes: any;
}
