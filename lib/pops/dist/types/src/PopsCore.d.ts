declare const PopsCoreDefaultEnv: {
    document: Document;
    window: Window & typeof globalThis;
    globalThis: typeof globalThis;
    self: Window & typeof globalThis;
};
declare const PopsCore: {
    init(option?: typeof PopsCoreDefaultEnv): void;
    readonly document: Document;
    readonly window: Window & typeof globalThis;
    readonly globalThis: typeof globalThis;
    readonly self: Window & typeof globalThis;
};
declare const OriginPrototype: {
    Object: {
        defineProperty: <T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>) => T;
    };
};
export { PopsCore, OriginPrototype };
