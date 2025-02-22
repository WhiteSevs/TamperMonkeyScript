//定义关于counter的store
import { defineStore } from "pinia";

//defineStore 是返回一个函数 函数命名最好有use前缀，根据函数来进行下一步操作
const useToolbarStore = defineStore({
	id: "ToolbarStore",
	state: () => ({
		/** 提示文字 */
		placeholder: "发帖千百度 文明第一步",
		/** 显示的 评论数量 */
		showCommentCount: "0",
		/** 显示的 点赞数量 */
		showGoodCount: "0",
	}),
});

export default useToolbarStore;
