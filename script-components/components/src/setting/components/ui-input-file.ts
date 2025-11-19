import type { PopsPanelInputConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-input";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "../panel-config";
import { Panel } from "../panel";
import { PanelComponents, type PanelComponentsStorageApiValue } from "../panel-components";

/**
 * 密码输入框的配置
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param description （可选）左边的文字下面的描述
 * @param changeCallback （可选）输入框内容改变时的回调，如果返回true，则阻止默认行为（存储值）
 * @param placeholder （可选）输入框的默认提示内容
 * @param afterAddToUListCallBack （可选）
 * @param valueChangeCallback （可选）输入框内容改变且成功存储值后的回调
 * @param accept （可选）文件上传的格式
 * @param isMultiple （可选）是否允许多文件上传
 */
export const UIInputPassword = function (
  text: string,
  key: string,
  defaultValue: string | number,
  description?: string,
  changeCallback?: (
    /**
     * 输入框事件
     */
    event: InputEvent,
    /**
     * 上传的文件
     */
    value: FileList | null,
    /**
     * 文件上传的input元素
     */
    $input: HTMLInputElement
  ) => void | boolean,
  placeholder: string = "",
  afterAddToUListCallBack?: PopsPanelInputConfig["afterAddToUListCallBack"],
  valueChangeCallback?: (
    /**
     * 输入框事件
     */
    event: InputEvent,
    /**
     * 上传的文件
     */
    value: FileList | null,
    /**
     * 文件上传的input元素
     */
    $input: HTMLInputElement
  ) => void | boolean,
  accept: string = "",
  isMultiple: boolean = false
) {
  const result: PopsPanelInputConfig = {
    text: text,
    type: "input",
    inputType: "file",
    attributes: {},
    props: {},
    description: description,
    placeholder: placeholder,
    afterAddToUListCallBack: afterAddToUListCallBack,
    getValue() {
      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      return storageApiValue.get<any>(key, defaultValue);
    },
    callback(event) {
      const $input = event.target as HTMLInputElement;
      const files = $input.files;
      if (typeof changeCallback === "function") {
        const result = changeCallback(event, files, $input);
        if (result) {
          return;
        }
      }
      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      storageApiValue.set(key, files);

      if (typeof valueChangeCallback === "function") {
        valueChangeCallback(event, files, $input);
      }
    },
    handlerCallBack($li, $input) {
      $input.accept = accept;
      $input.multiple = isMultiple;
    },
  };
  Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
  Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

  PanelComponents.initComponentsStorageApi("input", result as Required<PopsPanelInputConfig>, {
    get<T>(key: string, defaultValue: T) {
      return Panel.getValue(key, defaultValue);
    },
    set(key: string, value: any) {
      Panel.setValue(key, value);
    },
  });
  return result;
};
