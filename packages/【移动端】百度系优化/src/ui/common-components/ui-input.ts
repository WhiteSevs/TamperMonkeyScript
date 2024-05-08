import { PopsPanel } from "..";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY } from "../config";


/**
 * 获取输入框配置
 * @param {string} text 文字
 * @param {string|undefined} description 描述
 * @param {string} [placeholder=""] 提示
 * @param {string} key 键
 * @param {boolean} defaultValue 默认值
 * @param {?(event:Event,value: string)=>boolean} changeCallBack 输入回调
 * @returns {PopsPanelInputDetails}
 */
const UIInput = function (
    text: string,
    key: string,
    defaultValue: string,
    description?: string | undefined,
    changeCallBack?: ((event: InputEvent, value: string, valueAsNumber?: number | undefined) => void | boolean) | undefined,
    placeholder = "",
    isNumber?: boolean,
    isPassword?: boolean,
) {
    let result: PopsPanelInputDetails = {
        text: text,
        type: "input",
        isNumber: Boolean(isNumber),
        isPassword: Boolean(isPassword),
        attributes: {} as { [key: string]: any },
        description: description,
        getValue() {
            let localValue = PopsPanel.getValue(key, defaultValue);
            return localValue;
        },
        callback(event, value) {
            if (typeof changeCallBack === "function") {
                if (changeCallBack(event, value)) {
                    return;
                }
            }
            PopsPanel.setValue(key, value);
        },
        placeholder: placeholder,
    };
    if (result.attributes) {
        result.attributes[ATTRIBUTE_KEY] = key;
        result.attributes[ATTRIBUTE_DEFAULT_VALUE] =
            Boolean(defaultValue);
    }
    return result;
};

export {
    UIInput
}