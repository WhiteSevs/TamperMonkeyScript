declare const QmsgCoreDefaultApi: {
    document: Document;
    window: Window & typeof globalThis;
    globalThis: typeof globalThis;
    self: Window & typeof globalThis;
    setTimeout: typeof setTimeout;
    setInterval: typeof setInterval;
    clearTimeout: typeof clearTimeout;
    clearInterval: typeof clearInterval;
};
declare const QmsgCore: {
    init(option?: typeof QmsgCoreDefaultApi): void;
    readonly document: Document;
    readonly window: Window & typeof globalThis;
    readonly globalThis: typeof globalThis;
    readonly self: Window & typeof globalThis;
    readonly setTimeout: typeof setTimeout;
    readonly setInterval: typeof setInterval;
    readonly clearTimeout: typeof clearTimeout;
    readonly clearInterval: typeof clearInterval;
};
export { QmsgCore };
