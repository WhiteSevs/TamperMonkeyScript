import type { PopsPanelSwitchDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-switch";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import type { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/types/components-common";
import { log } from "../../base.env";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY, PROPS_STORAGE_API } from "../panel-config";
import { Panel } from "../panel";
import { PanelComponents, type PanelComponentsStorageApiValue } from "../panel-components";

/**
 * 获取checkbox按钮配置
 * @param text 文字
 * @param key 键
 * @param defaultValue 默认值
 * @param clickCallBack （可选）点击后的回调，如果返回true，则阻止默认行为（存储值）
 * @param description （可选）左边的文字下面的描述，可以是html格式
 * @param afterAddToUListCallBack （可选）在添加到元素后触发该回调
 * @param disabled （可选）是否禁用
 * @param valueChangeCallBack （可选）在存储值后触发该回调
 */
export const UISwitch = function (
  text: string,
  key: string,
  defaultValue: boolean | undefined,
  clickCallBack?: ((event: MouseEvent | PointerEvent, value: boolean) => boolean | void) | undefined,
  description?: string | undefined,
  afterAddToUListCallBack?:
    | ((formConfig: PopsPanelFormsTotalDetails, container: PopsPanelRightAsideContainerOptions) => void)
    | undefined,
  disabled?: boolean | (() => boolean) | undefined,
  valueChangeCallBack?: ((event: MouseEvent | PointerEvent, value: boolean) => boolean | void) | undefined
) {
  const result: PopsPanelSwitchDetails = {
    text: text,
    type: "switch",
    description: description,
    disabled: disabled,
    attributes: {},
    props: {},
    getValue() {
      const storageApiValue = this.props![
        PROPS_STORAGE_API as keyof typeof this.props
      ] as PanelComponentsStorageApiValue;
      const value = storageApiValue.get(key, defaultValue)!;

      return value;
    },
    callback(event: MouseEvent | PointerEvent, __value: boolean) {
      const value = Boolean(__value);
      log.success(`${value ? "开启" : "关闭"} ${text}`);
      if (typeof clickCallBack === "function") {
        const result = clickCallBack(event, value);
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
    afterAddToUListCallBack: afterAddToUListCallBack,
  };

  Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
  Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

  PanelComponents.initComponentsStorageApi("switch", result as Required<PopsPanelSwitchDetails>, {
    get<T>(key: string, defaultValue: T) {
      return Panel.getValue(key, defaultValue);
    },
    set(key: string, value: boolean) {
      Panel.setValue(key, value);
    },
  });
  return result;
};
