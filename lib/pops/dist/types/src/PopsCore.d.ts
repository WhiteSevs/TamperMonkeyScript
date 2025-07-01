interface PopsCoreOption {
    document: Document;
    window: Window;
    globalThis: typeof globalThis;
    self: typeof globalThis;
}
declare const PopsCore: {
    init(option?: PopsCoreOption): void;
    readonly document: Document;
    readonly window: Window;
    readonly globalThis: typeof globalThis;
    readonly self: typeof globalThis;
};
declare const OriginPrototype: {
    Object: {
        defineProperty: <T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>) => T;
    };
};
export { PopsCoreOption, PopsCore, OriginPrototype };
