export interface DOMUtilsCoreOption {
    document: Document;
    window: Window | typeof globalThis;
    globalThis: Window | typeof globalThis;
    self: Window | typeof globalThis;
    top: Window | typeof globalThis;
}
declare const DOMUtilsCore: {
    init(option?: DOMUtilsCoreOption): void;
    readonly document: Document;
    readonly window: typeof globalThis | Window;
    readonly globalThis: typeof globalThis | Window;
    readonly self: typeof globalThis | Window;
};
export { DOMUtilsCore };
