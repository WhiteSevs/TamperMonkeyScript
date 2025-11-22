import Utils from "@whitesev/utils";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { UIButton } from "./components/ui-button";
import { UIButtonShortCut } from "./components/ui-button-shortcut";
import { UIInput } from "./components/ui-input";
import { UIInputDateTime } from "./components/ui-input-datetime";
import { UIInputFile } from "./components/ui-input-file";
import { UIInputNumber } from "./components/ui-input-number";
import { UIInputPassword } from "./components/ui-input-password";
import { UIOwn } from "./components/ui-own";
import { UISelect } from "./components/ui-select";
import { UISelectDialog } from "./components/ui-select-dialog";
import { UISelectHorizontal } from "./components/ui-select-horizontal";
import { UISelectMultiple } from "./components/ui-select-multiple";
import { UISlider } from "./components/ui-slider";
import { UISwitch } from "./components/ui-switch";
import { UITextArea } from "./components/ui-textarea";
import { PROPS_STORAGE_API } from "./panel-config";

type PanelComponentsType = "input" | "select-multiple" | "select" | "slider" | "switch" | "textarea";

type PanelComponentsStorageApiValue = {
  /**
   * 获取值时自动调用
   * @param key 键名
   * @param defaultValue 默认值
   */
  get<T>(key: string, defaultValue: T): T;
  /**
   * 存储值时自动调用
   * @param key 键名
   * @param value 值
   */
  set(key: string, value: any): void;
};

type PanelComponentsConfig = {
  props: {
    [key: string]: any;
  };
};

const PanelComponents = {
  $data: {
    __storeApiFn: null as null | UtilsDictionary<PanelComponentsType, PanelComponentsStorageApiValue>,
    get storeApiValue() {
      if (!this.__storeApiFn) {
        this.__storeApiFn = new Utils.Dictionary();
      }
      return this.__storeApiFn;
    },
  },
  /**
   * 获取自定义的存储接口
   * @param type 组件类型
   */
  getStorageApi(type: PanelComponentsType) {
    if (!this.hasStorageApi(type)) {
      return;
    }
    return this.$data.storeApiValue.get(type);
  },
  /**
   * 判断是否存在自定义的存储接口
   * @param type 组件类型
   */
  hasStorageApi(type: PanelComponentsType) {
    return this.$data.storeApiValue.has(type);
  },
  /**
   * 设置自定义的存储接口
   * @param type 组件类型
   * @param storageApiValue 存储接口
   */
  setStorageApi(type: PanelComponentsType, storageApiValue: PanelComponentsStorageApiValue) {
    this.$data.storeApiValue.set(type, storageApiValue);
  },
  /**
   * 初始化组件的存储接口属性
   *
   * @param type 组件类型
   * @param config 组件配置，必须包含prop属性
   * @param storageApiValue 存储接口
   */
  initComponentsStorageApi(
    type: PanelComponentsType,
    config: PanelComponentsConfig,
    storageApiValue: PanelComponentsStorageApiValue
  ) {
    let propsStorageApi: PanelComponentsStorageApiValue;
    if (this.hasStorageApi(type)) {
      propsStorageApi = this.getStorageApi(type)!;
    } else {
      propsStorageApi = storageApiValue;
    }
    this.setComponentsStorageApiProperty(config, propsStorageApi);
  },
  /**
   * 设置组件的存储接口属性
   * @param config 组件配置，必须包含prop属性
   * @param storageApiValue 存储接口
   */
  setComponentsStorageApiProperty(config: PanelComponentsConfig, storageApiValue: PanelComponentsStorageApiValue) {
    Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
  },
};

export {
  PanelComponents,
  UIButton,
  UIButtonShortCut,
  UIInput,
  UIInputDateTime,
  UIInputFile,
  UIInputNumber,
  UIInputPassword,
  UIOwn,
  UISelect,
  UISelectDialog,
  UISelectHorizontal,
  UISelectMultiple,
  UISlider,
  UISwitch,
  UITextArea,
  type PanelComponentsConfig,
  type PanelComponentsStorageApiValue,
  type PanelComponentsType,
};
