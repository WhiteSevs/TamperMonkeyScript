import type { PopsAlertConfig } from "@whitesev/pops/dist/types/src/components/alert/types/index";
import type { PopsPanelSelectMultipleConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-selectMultiple";
import { log } from "../../base.env";
import { Panel } from "../panel";
import { PanelComponents, type PanelComponentsStorageApiValue } from "../panel-components";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "../panel-config";

/**
 * 下拉列表-多选
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param data 下拉列表的数据
 * @param selectCallBack （可选）选择列表的某一项的回调，如果返回true，则阻止默认行为（存储值）
 * @param description （可选）左边的文字下面的描述
 * @param selectConfirmDialogDetails （可选）弹窗配置
 * @param valueChangeCallBack （可选）选择列表的某项后且存储值后的回调
 */
export const UISelectMultiple = function <T>(
  text: string,
  key: string,
  defaultValue: T[],
  data: PopsPanelSelectMultipleConfig<T>["data"] | (() => PopsPanelSelectMultipleConfig<T>["data"]),
  selectCallBack?: (selectInfo: PopsPanelSelectMultipleConfig<T>["data"]) => void | boolean,
  description?: string,
  placeholder = "请至少选择一个选项",
  selectConfirmDialogDetails?: Partial<PopsAlertConfig>,
  valueChangeCallBack?: (selectInfo: PopsPanelSelectMultipleConfig<T>["data"]) => void | boolean
): PopsPanelSelectMultipleConfig<T> {
  let selectData: PopsPanelSelectMultipleConfig<T>["data"] = [];
  if (typeof data === "function") {
    selectData = data();
  } else {
    selectData = data;
  }
  const result: PopsPanelSelectMultipleConfig<T> = {
    text: text,
    type: "select-multiple",
    description: description,
    placeholder: placeholder,
    attributes: {},
    props: {},
    getValue() {
      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      return storageApiValue.get(key, defaultValue);
    },
    selectConfirmDialogConfig: selectConfirmDialogDetails,
    callback(selectInfo) {
      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      const value: T[] = [];
      selectInfo.forEach((selectedInfo) => {
        value.push(selectedInfo.value);
      });
      log.info(`多选-选择：`, value);

      if (typeof selectCallBack === "function") {
        const result = selectCallBack(selectInfo);
        if (result) {
          return;
        }
      }
      storageApiValue.set(key, value);

      if (typeof valueChangeCallBack === "function") {
        valueChangeCallBack(selectInfo);
      }
    },
    data: selectData,
  };

  Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
  Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

  PanelComponents.initComponentsStorageApi("select-multiple", result as Required<PopsPanelSelectMultipleConfig<T>>, {
    get<T>(key: string, defaultValue: T) {
      return Panel.getValue(key, defaultValue);
    },
    set(key: string, value: any) {
      Panel.setValue(key, value);
    },
  });
  return result;
};
