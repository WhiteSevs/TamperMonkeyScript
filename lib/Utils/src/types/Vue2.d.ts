/**
 * Vue2实例
 */
export declare interface Vue2Instance {
	$attrs: any;
	$children: Vue2Instance[];
	$createElement: (...args: any[]) => any;
	$el: HTMLElement;
	$listeners: any;
	$options: any;
	$parent: Vue2Instance;
	$refs: any;
	$root: Vue2Instance;
	$scopedSlots: any;
	$slots: any;
	$store: any;
	$vnode: any;

	_data: any;
	_directInactive: boolean;
	_events: any;
	_hasHookEvent: boolean;
	_isBeingDestroyed: boolean;
	_isDestroyed: boolean;
	_isMounted: boolean;
	_isVue: boolean;

	$data: any;
	$isServer: boolean;
	$props: any;
	$route: {
		fullPath: string;
		hash: string;
		matched: any[];
		meta: any;
		name: string;
		params: any;
		path: string;
		query: any;
		[key: string]: any;
	};
	$router: {
		afterHooks: Function[];
		app: Vue2Instance;
		apps: Vue2Instance[];
		beforeHooks: Function[];
		fallback: boolean;
		history: {
			base: string;
			current: Vue2Instance["$route"];
			listeners: any[];
			router: Vue2Instance["$router"];
			/**
			 *
			 * @param delta 访问的距离。如果 delta < 0 则后退相应数量的记录，如果 > 0 则前进。
			 * @param triggerListeners 是否应该触发连接到该历史的监听器
			 */
			go: (delta: number, triggerListeners?: boolean) => void;
			/**
			 *
			 * @param to 要设置的地址
			 * @param data 可选的 HistoryState 以关联该导航记录
			 */
			push: (to: string, data?: any) => void;
			/**
			 *
			 * @param to 要设置的地址
			 * @param data 可选的 HistoryState 以关联该导航记录
			 */
			replace: (to: string, data?: any) => void;
			[key: string]: any;
		};
		matcher: {
			addRoute: (...args: any[]) => any;
			addRoutes: (...args: any[]) => any;
			getRoutes: () => any;
			match: (...args: any[]) => any;
			[key: string]: any;
		};
		mode: string;
		options: {
			mode: string;
			routes: any[];
			scrollBehavior: (...args: any[]) => any;
			[key: string]: any;
		};
		resolveHooks: ((...args: any[]) => any)[];
		currentRoute: Vue2Instance["$route"];
		beforeEach: (
			callback:
				| ((
						/** 即将要进入的目标 路由对象 */
						to: Vue2Instance["$route"],
						/** 当前导航正要离开的路由 */
						from: Vue2Instance["$route"],
						/**
						 *
						 * + next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
						 * + next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
						 * + next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
						 * + next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
						 */
						next: Function
				  ) => void)
				/** 移除上一个添加的监听 */
				| (() => void)
		) => void;

		afterEach: (
			callback:
				| ((
						/** 即将要进入的目标 路由对象 */
						to: Vue2Instance["$route"],
						/** 当前导航正要离开的路由 */
						from: Vue2Instance["$route"]
				  ) => void)
				/** 移除上一个添加的监听 */
				| (() => void)
		) => void;
		push: (...args: any[]) => void;
		back: () => void;
		go: (...args: any[]) => void;
		replace: (...args: any[]) => void;
		/** 添加路由 */
		addRoute: (...args: any[]) => void;
		addRoutes: (...args: any[]) => void;
		[key: string]: any;
	};
	$ssrContext: any;
	/** 观察者 @returns 取消观察者 */
	$watch: (
		/** 需要观察的属性 */
		key: string | string[] | (() => any),
		/** 属性改变时触发的回调 */
		handler: (
			this: Vue2Instance,
			/** 新值，也就是改变后的值 */
			newVal: any,
			/** 旧值，也就是改变前的值 */
			oldVal: any
		) => void,
		/** 监听配置 */
		options?: {
			/** 是否立即执行handler */
			immediate?: boolean;
			/** 是否深度监听 */
			deep?: boolean;
		}
	) => Function;

	[key: string]: any;
}

/**
 * 包含vue属性的HTMLElement
 */
export declare interface Vue2HTMLElement extends HTMLElement {
	__vue__: Vue2Instance;
}

/**
 * 包含vue属性的HTMLElement
 */
export declare interface Vue2HTMLDivElement extends HTMLDivElement {
	__vue__: Vue2Instance;
}
