export declare interface UtilsCoreOption {
    document: Document;
    window: Window & typeof globalThis;
    globalThis: typeof globalThis | Window;
    self: Window & typeof globalThis;
    top: Window;
}
declare const UtilsCore: {
    init(option?: UtilsCoreOption): void;
    readonly document: Document;
    readonly window: Window & typeof globalThis;
    readonly globalThis: typeof globalThis | Window;
    readonly self: Window & typeof globalThis;
    readonly top: Window;
};
export { UtilsCore };
