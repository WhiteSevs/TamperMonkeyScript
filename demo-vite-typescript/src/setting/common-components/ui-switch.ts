import { log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY } from "../config";

/**
 * 获取checkbox按钮配置
 * @param text 文字
 * @param key 键
 * @param defaultValue 默认值
 * @param clickCallBack （可选）点击回调
 * @param description （可选）描述
 */
const UISwitch = function (
    text: string,
    key: string,
    defaultValue: boolean | undefined,
    clickCallBack?: ((event: InputEvent, value: boolean) => boolean | void) | undefined,
    description?: string | undefined,
): PopsPanelSwitchDetails {
    let result: PopsPanelSwitchDetails = {
        text: text,
        type: "switch",
        description: description,
        attributes: {} as { [key: string]: any },
        getValue() {
            return Boolean(PopsPanel.getValue(key, defaultValue));
        },
        callback(event: InputEvent, value: boolean) {
            log.success(`${value ? "开启" : "关闭"} ${text}`);
            if (typeof clickCallBack === "function") {
                if (clickCallBack(event, value)) {
                    return;
                }
            }
            PopsPanel.setValue(key, Boolean(value));
        },
        afterAddToUListCallBack: void 0,
    };
    // @ts-ignore
    result.attributes[ATTRIBUTE_KEY] = key;
    // @ts-ignore
    result.attributes[ATTRIBUTE_DEFAULT_VALUE] =
        Boolean(defaultValue);
    return result;
};

export {
    UISwitch
}