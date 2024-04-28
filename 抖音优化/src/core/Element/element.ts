import { GM_addStyle } from "$";
import { DOMUtils, utils } from "@/api/env";

const DouYinElement = {
    /**
     * 观察 #slidelist的加载每条视频
     * @param callback
     */
    watch_slidelist(callback: (osElement: HTMLDivElement) => void) {
        DOMUtils.ready(() => {
            utils.waitAnyNode("#slidelist").then((slidelist) => {
                let osElement = this.getOSElement();
                utils.mutationObserver(slidelist, {
                    config: {
                        childList: true,
                        subtree: true,
                        attributes: true,
                    },
                    callback: () => {
                        callback(osElement);
                    },
                });
            });
        });
    },
    getOSElement() {
        return (document.querySelector("#root div[class*='-os']") ||
            document.querySelector("#douyin-right-container")) as HTMLDivElement;
    },
    /**
     * 添加屏蔽CSS
     * @param selector
     */
    addShieldStyle(...selector: (string | string[])[]) {
        let selectorList: string[] = [];
        if (arguments.length === 0) {
            console.log(arguments);
            return;
        }
        if (arguments.length > 1) {
            this.addShieldStyle(Array.from(arguments));
            return;
        }
        if (typeof selector === "string") {
            this.addShieldStyle([selector]);
            return;
        }
        selector.forEach((item) => {
            if (Array.isArray(item)) {
                selectorList = [...selectorList, ...item];
            } else {
                selectorList.push(item);
            }
        });
        GM_addStyle(`${selectorList.join(",")}{
          display: none !important;
          }`);
    },
};

export {
    DouYinElement
}