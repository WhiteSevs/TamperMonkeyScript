/**
 * config.data
 */
export interface PopsSearchSuggestionData<T = any> {
	/**
	 * 存储的值
	 */
	value: T;
	/**
	 * li元素的html
	 */
	text: string;
}

/**
 * 搜索建议悬浮窗
 * pops.searchSuggestion
 */
export interface PopsSearchSuggestionDetails<T = any> {
	/**
	 * 当前的环境，可以是document，可以是shadowroot，默认是document
	 */
	selfDocument?: Document;
	/**
	 * 目标元素，一般是跟随它的位置变化，监听它的focus/click
	 */
	target: HTMLElement;
	/**
	 * 目标input元素，监听它的focus/click/input事件
	 */
	inputTarget?: HTMLInputElement;
	/**
	 * 数据
	 */
	data: PopsSearchSuggestionData<T>[];
	/**
	 * 右边的删除按钮图标
	 */
	deleteIcon?: {
		/**
		 * 是否启用，默认true
		 */
		enable?: boolean;
		/**
		 * 点击回调
		 */
		callback?: (
			event: MouseEvent | PointerEvent,
			liElement: HTMLLIElement,
			data: PopsSearchSuggestionData<T>
		) => void;
	};
	/**
	 * 自定义的className
	 */
	className?: string;
	/**
	 * position是否使用absolut，默认true
	 */
	isAbsolute?: boolean;
	/**
	 * 是否启用动画，默认true
	 */
	isAnimation?: true;
	/**
	 * 建议框的宽度，默认250px
	 */
	width?: string;
	/**
	 * 是否和config.target的宽度同步，默认true
	 */
	followTargetWidth?: true;
	/**
	 * 建议框的最大高度，默认300px
	 */
	maxHeight?: string;
	/**
	 * 建议框距离元素的距离，默认0
	 */
	topDistance?: number;
	/**
	 * 建议框显示的位置，默认是auto(自动判断位置)
	 */
	position?: "top" | "bottom" | "auto";
	/**
	 * 当位置在上面时（包括auto自动判断在上面时），是否对搜索项进行反转，默认true
	 */
	positionTopToReverse?: boolean;
	/**
	 * 层级，默认10000
	 */
	zIndex?: 10000;
	/**
	 * 搜索中的提示
	 */
	searchingTip?: string;
	/**
	 * 没有搜索结果的提示的html
	 */
	toSearhNotResultHTML?: string;
	/**
	 * 没有搜索结果是否隐藏提示框，默认false
	 */
	toHideWithNotResult?: boolean;
	/**
	 * 跟随目标的位置，默认为target的位置
	 */
	followPosition?: "target" | "input" | "inputCursor";
	/**
	 * 获取每一项的html
	 */
	getItemHTML: (item: PopsSearchSuggestionData<T>) => string;
	/**
	 * 当config.target触发input时自动调用该函数来获取数据
	 * @param value 当前输入框的值
	 */
	getData: (value: string) => Promise<any[]>;
	/**
	 * 每一项的点击回调
	 * @param event 触发的事件
	 * @param liElement 每一项的元素
	 * @param data config.data的数据
	 */
	itemClickCallBack?: (
		event: MouseEvent | PointerEvent,
		liElement: HTMLLIElement,
		data: PopsSearchSuggestionData<T>
	) => void;
	/**
	 * 键盘的上下键选择的回调
	 * @param event 触发的事件
	 * @param liElement 每一项的元素
	 * @param data config.data的数据
	 */
	selectCallBack?: (
		event: MouseEvent,
		liElement: HTMLLIElement,
		data: PopsSearchSuggestionData<T>
	) => void;
	/**
	 * （可选）自定义style
	 */
	style?: string;
}

/**
 * pops.searchSuggestion的函数返回值
 */
export interface PopsSearchSuggestionResult<T = any> {
	/**
	 * 根元素
	 */
	root: HTMLElement;
	/**
	 * ul元素
	 */
	hintULElement: HTMLUListElement;
	/**
	 * 初始化
	 */
	init: () => void;
	/**
	 * 获取显示出搜索建议框的html
	 */
	getSearchSelectElement: () => HTMLElement;
	/**
	 * 获取显示出搜索建议框的每一项的html
	 */
	getSearchItemLiElement: (
		data: PopsSearchSuggestionData<T>,
		index: number
	) => HTMLElement;
	/**
	 * 获取data-value值
	 */
	getItemDataValue: (
		data: PopsSearchSuggestionData<T>
	) => PopsSearchSuggestionData<T>;
	/**
	 * 设置搜索建议框每一项的点击事件
	 */
	setSearchItemClickEvent: (liElement: HTMLLIElement) => void;
	/**
	 * 监听输入框内容改变
	 */
	setInputChangeEvent: () => void;
	/**
	 * 移除输入框内容改变的监听
	 */
	removeInputChangeEvent: () => void;
	/**
	 * 设置显示搜索建议框的事件
	 */
	setShowEvent: () => void;
	/**
	 * 移除显示搜索建议框的事件
	 */
	removeShowEvent: () => void;
	/**
	 * 设置隐藏搜索建议框的事件
	 */
	setHideEvent: () => void;
	/**
	 * 移除隐藏搜索建议框的事件
	 */
	removeHideEvent: () => void;
	/**
	 * 设置所有监听
	 */
	setAllEvent: () => void;
	/**
	 * 移除所有监听
	 */
	removeAllEvent: () => void;
	/**
	 * 获取删除按钮的html
	 */
	getDeleteIconHTML: (size: number, fill: string) => void;
	/**
	 * 设置当前正在搜索中的提示
	 */
	setPromptsInSearch: () => void;
	/**
	 * 移除正在搜索中的提示
	 */
	removePromptsInSearch: () => void;
	/**
	 * 清空所有的搜索结果
	 */
	clearAllSearchItemLi: () => void;
	/**
	 * 修改搜索建议框的位置(top、left)
	 * 因为目标元素可能是动态隐藏的
	 */
	changeHintULElementPosition: () => void;
	/**
	 * 修改搜索建议框的width
	 * 因为目标元素可能是动态隐藏的
	 */
	changeHintULElementWidth: () => void;
	/**
	 * 更新页面显示的搜索结果
	 */
	update: (data: PopsSearchSuggestionData<T>) => void;
	/**
	 * 清空当前的搜索结果并显示无结果
	 */
	clear: () => void;
	/**
	 * 隐藏搜索建议框
	 */
	hide: () => void;
	/**
	 * 显示搜索建议框
	 */
	show: () => void;
}
