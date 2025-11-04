import type { PopsPanelTextAreaConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-textarea";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "../panel-config";
import { Panel } from "../panel";
import { PanelComponents, type PanelComponentsStorageApiValue } from "../panel-components";

/**
 * 获取多行输入框配置
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param description （可选）左边的文字下面的描述
 * @param changeCallback （可选）输入框内容改变时的回调，如果返回true，则阻止默认行为（存储值）
 * @param placeholder （可选）输入框的默认提示内容，默认为空
 * @param disabled （可选）是否禁用
 * @param valueChangeCallBack （可选）输入框内容改变且存储值后的回调
 */
export const UITextArea = function (
  text: string,
  key: string,
  defaultValue: string,
  description?: string,
  changeCallback?: ((event: InputEvent, value: string) => void | boolean) | undefined,
  placeholder: string = "",
  disabled?: boolean,
  valueChangeCallBack?: ((event: InputEvent, value: string) => void | boolean) | undefined
) {
  const result: PopsPanelTextAreaConfig = {
    text: text,
    type: "textarea",
    attributes: {},
    props: {},
    description: description,
    placeholder: placeholder,
    disabled: disabled,
    getValue() {
      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      const value = storageApiValue.get(key, defaultValue);

      if (Array.isArray(value)) {
        // 处理数组的情况
        // 一般是换行合并
        return value.join("\n");
      }
      return value;
    },
    callback(event, value) {
      if (typeof changeCallback === "function") {
        const result = changeCallback(event, value);
        if (result) {
          return;
        }
      }
      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      storageApiValue.set(key, value);

      if (typeof valueChangeCallBack === "function") {
        valueChangeCallBack(event, value);
      }
    },
  };

  Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
  Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

  PanelComponents.initComponentsStorageApi("switch", result as Required<PopsPanelTextAreaConfig>, {
    get<T>(key: string, defaultValue: T) {
      return Panel.getValue(key, defaultValue);
    },
    set(key: string, value: any) {
      Panel.setValue(key, value);
    },
  });

  return result;
};
