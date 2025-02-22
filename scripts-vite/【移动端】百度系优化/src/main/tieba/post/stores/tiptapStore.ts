import { defineStore } from "pinia";

export const useTiptapStore = defineStore({
	id: "tiptap",
	state: () => ({
		/**
		 * 是否异步加载完成实例
		 */
		isLoaded: false,
	}),
});
