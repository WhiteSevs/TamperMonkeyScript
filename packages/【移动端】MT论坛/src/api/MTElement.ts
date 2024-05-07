import { DOMUtils, Utils } from "./env";

/**
 * 自动将元素挂载到左侧的导航栏下面
 * @param element 需要挂载的元素
 */
export function mountLeftNavigatorBar(name: string, clickCallBack: (event: PointerEvent | MouseEvent) => void) {
    let $liItem = DOMUtils.createElement("li", {
        className: "comiis_left_Touch",
        innerHTML: `
        <a href="javascript:;" class="comiis_left_Touch">${name}</a>
        `,
    })
    DOMUtils.on($liItem, "click", (event) => {
        clickCallBack(event as PointerEvent);
    });
    document.querySelector(".sidenv_li > ul")?.appendChild($liItem);
}