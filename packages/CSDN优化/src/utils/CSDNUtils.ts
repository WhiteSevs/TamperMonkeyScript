import { utils } from "@/env";

/**
 * 移除元素（未出现也可以等待出现）
 * @param selectorText 元素选择器
 */
export function waitForElementToRemove(selectorText = "") {
    utils.waitNodeList<HTMLElement>(selectorText).then(() => {
        document.querySelectorAll(selectorText).forEach((item) => {
            item.remove();
        });
    });
};