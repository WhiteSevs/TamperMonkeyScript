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

class ReactiveEffect {
	deps: any[] = [];
	private active = true;
	private fn;
	// private scheduler;
	constructor(fn: Function, scheduler: any) {
		this.fn = fn;
		// this.scheduler = scheduler;
	}
	run(cb: (activeEffect: any) => void) {
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
		let exisProxy = this.reactMap.get(target);
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
				let oldValue = target[key as keyof T];
				let result = Reflect.set(target, key, value, receiver);
				if (oldValue !== value) {
					that.trigger(target, "set", key, oldValue, value);
				}
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
	 */
	watch<T>(
		source: () => T,
		changeCallBack: (newValue: T | undefined, oldValue: T | undefined) => void
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
		const job = () => {
			const newValue = effect.run((activeEffect) => {
				this.activeEffect = activeEffect;
			});
			changeCallBack(newValue, oldValue);
			oldValue = newValue;
		};
		const effect = new ReactiveEffect(getter, job);
		oldValue = effect.run((activeEffect) => {
			this.activeEffect = activeEffect;
		});
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
		for (let key in object) {
			(result as any)[key as any] = this.toRef(object, key);
		}
		return result;
	}
	private trigger(
		target: any,
		type: string,
		key: string | symbol,
		oldValue: any,
		value: any
	) {
		const depsMap = this.targetMap.get(target);
		if (!depsMap) return;
		const effects = depsMap.get(key);
		this.triggerEffect(effects, "effects");
	}
	private triggerEffect(effects: any[], name: string) {
		effects &&
			effects.forEach((effect) => {
				if (effect.scheduler) {
					effect.scheduler();
				} else {
					effect.run();
				}
			});
	}
	private track(target: WeakKey, type: string, key: string | symbol) {
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
			let shouldTrack = !dep.has(this.activeEffect);
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
		for (let key in value) {
			this.traversal(value[key], set);
		}
		return value;
	}
}
