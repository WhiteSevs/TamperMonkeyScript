import type { PopsSearchSuggestionData, PopsSearchSuggestionDetails } from "./types/index";

export const searchSuggestionConfig = (): DeepRequired<PopsSearchSuggestionDetails<any>> => {
	const data: DeepRequired<PopsSearchSuggestionData>[] = [];
	for (let index = 0; index < 10; index++) {
		data.push({
			value: `测试${index}`,
			text: `测试${index}-html`,
			enableDeleteButton: true,
			deleteButtonClickCallback(event, $dataItem, dataItem, config) {
				console.log("删除当前项", [event, $dataItem, dataItem, config]);
				return true;
			},
			itemView(dateItem, $parent) {
				return dateItem.text;
			},
			clickCallback(event, $dataItem, dataItem, config) {
				console.log("item项的点击回调", [event, $dataItem, data, config]);
				// config.inputTarget!.value = dataItem.value;
				return index % 2 === 0 ? true : false;
			},
			selectCallback(event, $dataItem, dataItem, config) {
				console.log("item项的选中回调", [event, $dataItem, data, config]);
			},
		});
	}
	return {
		// @ts-ignore
		target: null,
		// @ts-ignore
		inputTarget: null,
		selfDocument: document,
		data: data,
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
		async inputTargetChangeRefreshShowDataCallback(value, data) {
			console.log("当前输入框的值是：", value);
			return data.filter((it) => it.value.includes(value));
		},
		style: "",
	};
};
