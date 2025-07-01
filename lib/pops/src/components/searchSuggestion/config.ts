import type { PopsSearchSuggestionDetails } from "./types/index";

export const searchSuggestionConfig =
	(): DeepRequired<PopsSearchSuggestionDetails> => {
		return {
			// @ts-ignore
			target: null,
			// @ts-ignore
			inputTarget: null,
			selfDocument: document,
			data: [
				{
					value: "数据1",
					text: "数据1-html",
				},
				{
					value: "数据2",
					text: "数据2-html",
				},
			],
			deleteIcon: {
				enable: true,
				callback(event, liElement, data) {
					console.log("删除当前项", [event, liElement, data]);
					liElement.remove();
				},
			},
			useShadowRoot: true,
			className: "",
			isAbsolute: true,
			isAnimation: true,
			width: "250px",
			maxHeight: "300px",
			followTargetWidth: true,
			topDistance: 0,
			position: "auto",
			positionTopToReverse: true,
			zIndex: 10000,
			searchingTip: "正在搜索中...",
			toSearhNotResultHTML: '<li data-none="true">暂无其它数据</li>',
			toHideWithNotResult: false,
			followPosition: "target",
			getItemHTML(item) {
				return item.text ?? item;
			},
			async getData(value) {
				console.log("当前输入框的值是：", value);
				return [];
			},
			itemClickCallBack(event, liElement, data) {
				console.log("item项的点击回调", [event, liElement, data]);
				this.inputTarget.value = data.value;
			},
			selectCallBack(event, liElement, data) {
				console.log("item项的选中回调", [event, liElement, data]);
			},
			style: "",
		};
	};
