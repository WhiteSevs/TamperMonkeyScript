export declare interface UtilsCoreOption {
    document: Document;
    window: Window;
    globalThis: typeof globalThis;
    self: typeof globalThis;
    top: Window;
}
declare const UtilsCore: {
    init(option?: UtilsCoreOption): void;
    readonly document: Document;
    readonly window: Window;
    readonly globalThis: typeof globalThis;
    readonly self: typeof globalThis;
    readonly top: Window;
};
export { UtilsCore };
