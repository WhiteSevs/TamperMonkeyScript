import { log } from "../../env";
import { PopsPanel } from "../setting";

/**
 * 获取下拉列表配置
 * @param text 文字
 * @param description （可选）描述
 * @param key 键
 * @param defaultValue 默认值
 * @param data 数据
 * @param selectCallBack（可选）选择的回调
 * @returns {PopsPanelSelectDetails}
 */
const UISelect = function <T extends any>(
    text: string,
    description: string | undefined,
    key: string,
    defaultValue: T,
    data: {
        value: T;
        text: string;
        disable?: () => boolean;
    }[],
    selectCallBack: ((event: PointerEvent | TouchEvent, isSelectedValue: any, isSelectedText: string) => void) | undefined
): PopsPanelSelectDetails {
    return {
        text: text,
        type: "select",
        description: description,
        attributes: {
            "data-key": key,
            "data-default-value": defaultValue,
        },
        getValue() {
            return PopsPanel.getValue(key, defaultValue) as string;
        },
        callback(event: PointerEvent | TouchEvent, isSelectedValue: any, isSelectedText: string) {
            PopsPanel.setValue(key, isSelectedValue);
            log.success("下拉框选择: " + isSelectedText)
            if (typeof selectCallBack === "function") {
                selectCallBack(event, isSelectedValue, isSelectedText);
            }
        },
        data: data,
    };
}

export {
    UISelect
}