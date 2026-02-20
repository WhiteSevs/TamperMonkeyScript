type ObjectWatchOptionItem = {
    /**
     * 是否立即执行
     * @default false
     */
    immediate?: boolean;
    /**
     * 是否仅触发一次
     * @default false
     */
    once?: boolean;
    /**
     * 值改变触发监听器的条件
     * @default "not-same"
     * @desc
     * + `not-same`: 值改变时触发
     * + `set`: 值被设置时触发
     */
    triggerMethod: "not-same" | "set";
};
declare class RefImpl {
    _value: any;
    _isRef: boolean;
    _rawValue: any;
    _vue: Vue;
    constructor(vueIns: Vue, rawValue: any);
    get value(): any;
    set value(newValue: any);
}
declare class ObjectRefImpl {
    object: any;
    key: any;
    constructor(object: any, key: any);
    get value(): any;
    set value(newValue: any);
}
export declare class Vue {
    private reactMap;
    private targetMap;
    private activeEffect;
    constructor();
    /**
     * 生成一个被代理的对象
     * @param target 需要代理的对象
     */
    reactive<T extends object>(target: T): T;
    /**
     * 观察被reactive的对象值改变
     * @param source 被观察的对象，这里采用函数返回对象
     * @param changeCallBack 值改变的回调
     * @param options 配置项
     */
    watch<T>(source: () => T, changeCallBack: (newValue: T | undefined, oldValue: T | undefined) => void, options?: ObjectWatchOptionItem): {
        unwatch: () => void;
    } | undefined;
    toReactive(value: any): any;
    ref(value: any): RefImpl;
    toRef(object: any, key: any): ObjectRefImpl;
    toRefs(object: any): {};
    private trigger;
    private triggerEffect;
    private track;
    private trackEffect;
    private traversal;
}
export {};
