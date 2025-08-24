interface PopsCoreOption {
    document: Document;
    window: Window;
    globalThis: typeof globalThis;
    self: typeof globalThis;
    setTimeout: Window["setTimeout"];
    setInterval: Window["setInterval"];
    clearTimeout: Window["clearTimeout"];
    clearInterval: Window["clearInterval"];
}
declare const PopsCore: {
    init(option?: PopsCoreOption): void;
    readonly document: Document;
    readonly window: Window;
    readonly globalThis: typeof globalThis;
    readonly self: typeof globalThis;
    readonly setTimeout: (handler: TimerHandler, timeout?: number, ...arguments: any[]) => number;
    readonly setInterval: (handler: TimerHandler, timeout?: number, ...arguments: any[]) => number;
    readonly clearTimeout: (id: number | undefined) => void;
    readonly clearInterval: (id: number | undefined) => void;
};
declare const OriginPrototype: {
    Object: {
        defineProperty: <T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>) => T;
    };
};
export { PopsCoreOption, PopsCore, OriginPrototype };
