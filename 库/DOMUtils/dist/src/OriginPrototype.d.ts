declare const OriginPrototype: {
    Object: {
        defineProperty: <T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>) => T;
    };
};
export { OriginPrototype };
