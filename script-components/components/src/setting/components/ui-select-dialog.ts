import type {
  PopsPanelSelectConfig,
  PopsPanelSelectDataOption,
} from "@whitesev/pops/dist/types/src/components/panel/types/components-select";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "../panel-config";
import { log } from "../../base.env";
import { Panel } from "../panel";
import { PanelComponents, type PanelComponentsStorageApiValue } from "../panel-components";

/**
 * 下拉列表（自定义弹窗式）
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param data 下拉列表的数据
 * @param selectCallBack （可选）选择列表的某一项的回调，如果返回true，则阻止默认行为（存储值）
 * @param description （可选）左边的文字下面的描述
 * @param valueChangeCallBack （可选）选择列表的某项后且存储值后的回调
 * @param placeholder （可选）提示文字
 * @param selectedTextAlign （可选）已选中文字的显示文字的对齐方式
 * @param selectConfirmDialogConfig （可选）弹出的下拉列表弹窗的配置
 */
export const UISelectDialog = function <T extends any>(
  text: string,
  key: string,
  defaultValue: T,
  data: PopsPanelSelectConfig<T>["data"],
  selectCallBack?: ((isSelectedInfo: PopsPanelSelectDataOption<T>) => void | boolean) | undefined,
  description?: string,
  valueChangeCallBack?: ((isSelectedInfo: PopsPanelSelectDataOption<T>) => void | boolean) | undefined,
  placeholder?: PopsPanelSelectConfig<T>["placeholder"],
  selectedTextAlign?: PopsPanelSelectConfig<T>["selectedTextAlign"],
  selectConfirmDialogConfig?: PopsPanelSelectConfig<T>["selectConfirmDialogConfig"]
): PopsPanelSelectConfig<T> {
  const result: PopsPanelSelectConfig<T> = {
    text: text,
    type: "select",
    description: description,
    attributes: {},
    props: {},
    getValue() {
      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      return storageApiValue.get(key, defaultValue);
    },
    callback(isSelectedInfo) {
      if (isSelectedInfo == null) {
        // 未选择
        return;
      }
      const value = isSelectedInfo.value;
      log.info(`选择：${isSelectedInfo.text}`);

      if (typeof selectCallBack === "function") {
        const result = selectCallBack(isSelectedInfo);
        if (result) {
          return;
        }
      }
      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      storageApiValue.set(key, value);

      if (typeof valueChangeCallBack === "function") {
        valueChangeCallBack(isSelectedInfo);
      }
    },
    data: data,
    useDialog: true,
    placeholder,
    selectConfirmDialogConfig,
    selectedTextAlign,
  };
  Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
  Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

  PanelComponents.initComponentsStorageApi("select", result as Required<PopsPanelSelectConfig<T>>, {
    get<T>(key: string, defaultValue: T) {
      return Panel.getValue(key, defaultValue);
    },
    set(key: string, value: any) {
      Panel.setValue(key, value);
    },
  });
  return result;
};
