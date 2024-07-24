export declare interface UtilsCoreOption {
    document: Document;
    window: Window | typeof globalThis;
    globalThis: Window | typeof globalThis;
    self: Window | typeof globalThis;
    top: Window | typeof globalThis;
}
declare const UtilsCore: {
    init(option?: UtilsCoreOption): void;
    readonly document: Document;
    readonly window: typeof globalThis | Window;
    readonly globalThis: typeof globalThis | Window;
    readonly self: typeof globalThis | Window;
    readonly top: typeof globalThis | Window;
};
export { UtilsCore };
