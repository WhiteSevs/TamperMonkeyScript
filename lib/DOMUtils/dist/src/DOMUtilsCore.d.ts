export interface DOMUtilsCoreOption {
    document: Document;
    window: Window;
    globalThis: typeof globalThis;
    self: typeof globalThis;
}
declare const DOMUtilsCore: {
    init(option?: DOMUtilsCoreOption): void;
    readonly document: Document;
    readonly window: Window;
    readonly globalThis: typeof globalThis;
    readonly self: typeof globalThis;
};
export { DOMUtilsCore };
