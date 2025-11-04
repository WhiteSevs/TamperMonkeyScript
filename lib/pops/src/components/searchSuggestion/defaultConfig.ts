import type { PopsSearchSuggestionData, PopsSearchSuggestionConfig } from "./types/index";

export const PopsSearchSuggestionDefaultConfig = (): DeepRequired<PopsSearchSuggestionConfig<any>> => {
  const data: DeepRequired<PopsSearchSuggestionData<any>>[] = [];
  for (let index = 0; index < 10; index++) {
    data.push({
      value: `测试${index}`,
      enableDeleteButton: true,
      deleteButtonClickCallback(event, $dataItem, dataItem, config) {
        const value = dataItem.value;
        console.log("删除当前项：" + value, [event, $dataItem, dataItem, config]);
        return true;
      },
      itemView(dateItem) {
        return `${dateItem.value}-html`;
      },
      clickCallback(event, $dataItem, dataItem, config) {
        const isUpdateInputValue = index % 2 === 0 ? true : false;
        const value = dataItem.value;
        if (isUpdateInputValue) {
          console.log("item项的点击回调,更新input内的值：" + value, [event, $dataItem, dataItem, config, value]);
        } else {
          console.log("item项的点击回调：" + value, [event, $dataItem, dataItem, config, value]);
        }
        return isUpdateInputValue;
      },
      selectCallback(event, $dataItem, dataItem, config) {
        const value = dataItem.value;
        console.log("item项的选中回调：" + value, [event, $dataItem, dataItem, config]);
      },
    });
  }
  return {
    // @ts-ignore
    $target: null,
    // @ts-ignore
    $inputTarget: null,
    $selfDocument: document,
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
