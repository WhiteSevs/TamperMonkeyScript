const VueUtils = {
  /** 标签 */
  ReactiveFlags: {
    IS_REACTIVE: Symbol("isReactive"),
  },
  /**
   * 判断是否是对象
   * @param value
   */
  isObject(value: any) {
    return typeof value === "object" && value !== null;
  },
  /**
   * 判断是否是函数
   * @param val
   */
  isFunction(val: any) {
    return typeof val === "function";
  },
  /**
   * 处理对象再次代理，可以直接返回
   * @param value
   */
  isReactive(value: any) {
    return !!(value && value[VueUtils.ReactiveFlags.IS_REACTIVE]);
  },
  /**
   * 判断是否是数组
   * @param value
   */
  isArray(value: any): boolean {
    return Array.isArray(value);
  },
};

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

class ReactiveEffect {
  deps: any[] = [];
  active = true;
  fn;
  scheduler;
  options;
  constructor(fn: (...args: any[]) => any, scheduler: any, options: ObjectWatchOptionItem) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.options = options; // 默认值为'same'
  }
  run(cb?: (activeEffect: any) => void) {
    if (!this.active) {
      this.fn();
    }
    try {
      if (typeof cb === "function") {
        cb(this);
      }
      return this.fn();
    } finally {
      if (typeof cb === "function") {
        cb(undefined);
      }
    }
  }
  stop() {
    if (this.active) {
      // 清除依赖关系
      if (this.deps && this.deps.length) {
        this.deps.forEach((dep: any) => {
          dep.delete(this);
        });
        this.deps.length = 0;
      }
      this.active = false;
    }
  }
}
class RefImpl {
  _value;
  _isRef = true;
  _rawValue;
  _vue: Vue;
  constructor(vueIns: Vue, rawValue: any) {
    this._vue = vueIns;
    this._rawValue = rawValue;
    this._value = this._vue.toReactive(rawValue);
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (newValue !== this._rawValue) {
      this._value = this._vue.toReactive(newValue);
      this._rawValue = newValue;
    }
  }
}
class ObjectRefImpl {
  object;
  key;
  constructor(object: any, key: any) {
    this.object = object;
    this.key = key;
  }
  get value() {
    return this.object[this.key];
  }
  set value(newValue) {
    this.object[this.key] = newValue;
  }
}
export class Vue {
  private reactMap = new WeakMap();
  private targetMap = new WeakMap();
  private activeEffect = undefined as any as ReactiveEffect;
  constructor() {
    // 将数据转化成响应式的数据，只能做对象的代理
  }
  /**
   * 生成一个被代理的对象
   * @param target 需要代理的对象
   */
  reactive<T extends object>(target: T): T {
    const that = this;
    if (!(typeof target === "object" && target !== null)) {
      return void 0 as any as T;
    }
    if (VueUtils.isReactive(target)) {
      return target;
    }
    const exisProxy = this.reactMap.get(target);
    if (exisProxy) {
      return exisProxy;
    }
    const proxy = new Proxy(target, {
      get(target, key, receiver) {
        if (key === VueUtils.ReactiveFlags.IS_REACTIVE) {
          return true;
        }
        that.track(target, "get", key);
        return Reflect.get(target, key, receiver);
      },
      set(target, key, value, receiver) {
        const oldValue = target[key as keyof T];
        const result = Reflect.set(target, key, value, receiver);
        that.trigger(target, "set", key, oldValue, value);
        return result;
      },
    });
    that.reactMap.set(target, proxy);
    return proxy;
  }
  /**
   * 观察被reactive的对象值改变
   * @param source 被观察的对象，这里采用函数返回对象
   * @param changeCallBack 值改变的回调
   * @param options 配置项
   */
  watch<T>(
    source: () => T,
    changeCallBack: (newValue: T | undefined, oldValue: T | undefined) => void,
    options?: ObjectWatchOptionItem
  ) {
    let getter;
    if (VueUtils.isReactive(source)) {
      getter = () => this.traversal(source);
    } else if (VueUtils.isFunction(source)) {
      getter = source;
    } else {
      return;
    }
    let oldValue: any;
    const unwatch = () => {
      effect.stop();
    };
    const job = () => {
      const newValue = effect.run((activeEffect) => {
        this.activeEffect = activeEffect;
      });
      changeCallBack(newValue, oldValue);
      if (options?.once) {
        // 仅触发一次
        unwatch();
      }
      oldValue = newValue;
    };
    const effect = new ReactiveEffect(getter, job, {
      triggerMethod: "not-same",
      ...(options ?? {}),
    });
    oldValue = effect.run((activeEffect) => {
      this.activeEffect = activeEffect;
    });
    if (options) {
      if (options.immediate) {
        job();
      }
    }
    return {
      unwatch,
    };
  }
  toReactive(value: any) {
    return VueUtils.isObject(value) ? this.reactive(value) : value;
  }
  ref(value: any) {
    return new RefImpl(this, value);
  }
  toRef(object: any, key: any) {
    return new ObjectRefImpl(object, key);
  }
  toRefs(object: any) {
    const result = VueUtils.isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
      (result as any)[key as any] = this.toRef(object, key);
    }
    return result;
  }
  private trigger(target: any, type: "set", key: string | symbol, oldValue: any, value: any) {
    const depsMap = this.targetMap.get(target);
    if (!depsMap) return;
    const effects = depsMap.get(key);
    this.triggerEffect(effects, type, "effects", oldValue, value);
  }
  private triggerEffect(
    effects: (typeof ReactiveEffect)["prototype"][],
    _type: "set",
    _name: string,
    oldValue: any,
    value: any
  ) {
    if (effects) {
      const isSame = oldValue === value;
      effects.forEach((effect) => {
        if (effect.options.triggerMethod === "not-same") {
          if (isSame) {
            return;
          }
          if (effect.scheduler) {
            effect.scheduler();
          } else {
            effect.run();
          }
        } else if (effect.options.triggerMethod === "set") {
          if (effect.scheduler) {
            effect.scheduler();
          } else {
            effect.run();
          }
        }
      });
    }
  }
  private track(target: WeakKey, _type: "get", key: string | symbol) {
    if (!this.activeEffect) return;
    let depsMap = this.targetMap.get(target);
    if (!depsMap) {
      this.targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }
    this.trackEffect(dep);
  }
  private trackEffect(dep: any) {
    if (this.activeEffect) {
      const shouldTrack = !dep.has(this.activeEffect);
      if (shouldTrack) {
        dep.add(this.activeEffect);
        this.activeEffect.deps.push(dep);
      }
    }
  }
  private traversal(value: any, set = new Set()) {
    if (!VueUtils.isObject(value)) return value;
    if (set.has(value)) {
      return value;
    }
    set.add(value);
    for (const key in value) {
      this.traversal(value[key], set);
    }
    return value;
  }
}
