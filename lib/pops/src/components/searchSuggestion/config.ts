import type { PopsSearchSuggestionDetails } from "./types/index";

export const searchSuggestionConfig = (): DeepRequired<PopsSearchSuggestionDetails> => {
	const data: any[] = [];
	for (let index = 0; index < 10; index++) {
		data.push({
			value: `测试${index}`,
			text: `测试${index}-html`,
		});
	}
	return {
		// @ts-ignore
		target: null,
		// @ts-ignore
		inputTarget: null,
		selfDocument: document,
		data: data,
		deleteIcon: {
			enable: true,
			callback(event, liElement, dataItem) {
				console.log("删除当前项", [event, liElement, dataItem]);
				data.splice(data.indexOf(dataItem), 1);
				liElement.remove();
			},
		},
		useShadowRoot: true,
		className: "",
		isAbsolute: true,
		isAnimation: false,
		useFoldAnimation: true,
		useArrow: false,
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
		async getData(value, data) {
			console.log("当前输入框的值是：", value);
			return data.filter((it) => it.value.includes(value));
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
