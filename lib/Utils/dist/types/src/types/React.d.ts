export declare interface ReactFiberNode {
	/**
	 * 指向当前节点在上一次更新时的对应节点。
	 */
	alternate: ReactFiberNode;
	/**
	 * 指向该 FiberNode 的第一个子节点
	 */
	child: ReactFiberNode | null;
	/**
	 * 代表子节点上的更新优先级。
	 */
	childLanes: number;
	/**
	 * 存储节点的依赖信息，用于处理 useEffect 等情况。
	 */
	dependencies: any | null;
	/**
	 * 大部分情况与 type 相同，某些情况不同，比如 FunctionComponent 使用 React.memo 包裹，表示元素的类型
	 */
	elementType: string;
	/**
	 * 存储 FiberNode 的标记，表示节点上的各种状态和变化（删除、新增、替换等）。flags 的定义在 packages\react-reconciler\src\ReactFiberFlags.js 文件中，flags 为 number 类型。
	 */
	flags: number;
	/**
	 * 当前节点在父节点的子节点列表中的索引
	 */
	index: number;
	/**
	 * 节点的唯一标识符，用于进行节点的 diff 和更新
	 */
	key: any | null;
	/**
	 * 代表当前节点上的更新优先级。
	 */
	lanes: number;
	/**
	 * 表示节点上一次渲染的 props 。在完成本次更新之前，memoizedProps 中存储的是上一次渲染时的 props ，用于对比新旧 props 是否发生变化。
	 */
	memoizedProps: any;
	/**
	 * 类组件保存上次渲染后的 state ，函数组件保存的 hooks 信息。
	 */
	memoizedState: any | null;
	/**
	 * 表示节点的模式，如 ConcurrentMode 、StrictMode 等。
	 */
	mode: number;
	/**
	 * 表示即将被应用到节点的 props 。当父组件发生更新时，会将新的 props 存储在 pendingProps 中，之后会被应用到节点。
	 */
	pendingProps: any;
	/**
	 * 存储 FiberNode 的引用信息，与 React 的 Ref 有关。使用 ref 引用值
	 */
	ref: any | null;
	/**
	 * 指向该 FiberNode 的父节点
	 */
	return: ReactFiberNode | null;
	/**
	 * 指向右边第一个兄弟 Fiber 节点
	 */
	sibling: ReactFiberNode | null;
	/**
	 * FiberNode 对应的真实 DOM 节点
	 */
	stateNode: HTMLElement;
	/**
	 * 表示节点类型的标记，例如 FunctionComponent 、ClassComponent 等
	 */
	tag: number;
	/**
	 * 表示元素的类型， 对于 FunctionComponent，指函数本身，对于ClassComponent，指 class，对于 HostComponent，指 DOM 节点 tagName
	 */
	type: string;
	/**
	 * 用于存储组件的更新状态，比如新的状态、属性或者 context 的变化。通过 updateQueue ，React 可以跟踪组件的更新并在合适的时机执行更新。
	 */
	updateQueue: any;
	[key: string | symbol | number]: any;
}

export declare interface ReactProps {
	$$typeof: symbol;
	children: ReactProps;
	key: string | null;
	ref: any;
	props: ReactProps;
	type: string;
	_owner: any;
	[key: string | symbol | number]: any;
}

export declare interface ReactEvents {
	[key: string | symbol | number]: any;
}

export declare interface ReactEventHandlers {
	[key: string | symbol | number]: any;
}

export declare interface ReactInternalInstance {
	[key: string | symbol | number]: any;
}

export declare interface ReactContainer {
	[key: string | symbol | number]: any;
}

export declare interface ReactInstance {
	reactFiber?: ReactFiberNode;
	reactProps?: ReactProps;
	reactEvents?: ReactEvents;
	reactEventHandlers?: ReactEventHandlers;
	reactInternalInstance?: ReactInternalInstance;
	reactContainer?: ReactContainer;
}
