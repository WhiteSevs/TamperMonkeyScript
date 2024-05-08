import { PopsPanel } from "@/setting/setting";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY } from "../config";

const UISelect = function <T extends any>(
    text: string,
    key: string,
    defaultValue: T,
    data: ({
        value: T;
        text: string;
        disable?(value: T): boolean;
    }[]) | (() => {
        value: T;
        text: string;
        disable?(value: T): boolean;
    }[]),
    callback?: (event: PointerEvent | TouchEvent, isSelectedValue: T, isSelectedText: string) => void,
    description?: string,
): PopsPanelSelectDetails<T> {
    let selectData: {
        value: T;
        text: string;
        disable?(value: T): boolean;
    }[] = [];
    if (typeof data === "function") {
        selectData = data();
    } else {
        selectData = data;
    }
    let result: PopsPanelSelectDetails<T> = {
        text: text,
        type: "select",
        description: description,
        attributes: {} as { [key: string]: any },
        getValue() {
            return PopsPanel.getValue(key, defaultValue);
        },
        callback(event, isSelectedValue, isSelectedText) {
            PopsPanel.setValue(key, isSelectedValue);
            if (typeof callback === "function") {
                callback(event, isSelectedValue, isSelectedText);
            }
        },
        data: selectData,
    }
    if (result.attributes) {
        result.attributes[ATTRIBUTE_KEY] = key;
        result.attributes[ATTRIBUTE_DEFAULT_VALUE] =
            Boolean(defaultValue);
    }
    return result
}

export {
    UISelect
}