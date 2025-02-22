import { defineStore } from "pinia";

/**
 * Toolbar的组件状态通知
 */
const useToolbarStateStore = defineStore({
	id: "ToolbarState",
	state: () => ({
		/** 是否显示小工具栏 */
		isShowSmallToolbar: true,
		/** 是否显示完整的工具栏 */
		isShowFullToolbar: false,
		/** 是否存在内容 */
		isEmpty: true,
	}),
});

export default useToolbarStateStore;
