import { DOMUtils, log, utils } from "@/env";

/**
 * 点击输入框，输入其它文字，有提示，禁止百度篡改，且极大地增加搜索速度
 */
const HandleInputEvent = {
    init() {
        let suggestListSelector = "#se-box .suggest-content";
        let suggestListBtnSelectorList = "#se-box .suggest-content button";
        let suggestList2Selector = "#se-box2 .suggest-content";
        let suggestListBtn2SelectorList = "#se-box2 .suggest-content button";
        let suggestList_HOME_Selector = "#index-box .suggest-content";
        let suggestListBtn_HOME_SelectorList =
            "#index-box .suggest-content button";
        let searchInputSelector = "#kw";
        let searchInput2Selector = "#kw2";
        let searchBtnSelector = "#se-bn";
        let searchBtn2Selector = "#se-bn2";
        let searchInput_HOME_Selector = "#index-kw";
        let searchBtn_HOME_Selector = "#index-bn";
        /* 顶部搜索输入框点击后的搜索建议 */
        utils.waitNode(suggestListSelector).then((element) => {
            utils.mutationObserver(element, {
                callback: () => {
                    HandleInputEvent.mutationObserverFunction(
                        suggestListBtnSelectorList
                    );
                },
                config: { childList: true, attributes: true },
            });
        });
        /* 底部搜索输入框点击后的搜索建议 */
        utils.waitNode(suggestList2Selector).then((element) => {
            utils.mutationObserver(element, {
                callback: () => {
                    HandleInputEvent.mutationObserverFunction(
                        suggestListBtn2SelectorList
                    );
                },
                config: { childList: true, attributes: true },
            });
        });
        /* 百度主页的搜索输入框点击后的搜索建议 */
        utils.waitNode(suggestList_HOME_Selector).then((element) => {
            utils.mutationObserver(element, {
                callback: () => {
                    HandleInputEvent.mutationObserverFunction(
                        suggestListBtn_HOME_SelectorList
                    );
                },
                config: { childList: true, attributes: true },
            });
        });
        /* 顶部搜索按钮 */
        DOMUtils.on(searchBtnSelector, "click", function (event) {
            return HandleInputEvent.searchBtnJump(
                event as PointerEvent | MouseEvent,
                document.querySelector(searchInputSelector) as HTMLInputElement
            );
        });
        /* 顶部搜索输入框 */
        DOMUtils.on(searchInputSelector, "keydown", function (event) {
            return HandleInputEvent.enterKeyDownEvent(
                event as KeyboardEvent,
                document.querySelector(searchInputSelector) as HTMLInputElement
            );
        });
        /* 底部搜索按钮 */
        DOMUtils.on(searchBtn2Selector, "click", function (event) {
            return HandleInputEvent.searchBtnJump(
                event as PointerEvent | MouseEvent,
                document.querySelector(searchInput2Selector) as HTMLInputElement
            );
        });
        /* 底部部搜索输入框 */
        DOMUtils.on(
            document.querySelector(searchInput2Selector) as HTMLElement,
            "keydown",
            function (event) {
                return HandleInputEvent.enterKeyDownEvent(
                    event as KeyboardEvent,
                    document.querySelector(searchInput2Selector) as HTMLInputElement
                );
            }
        );
        /* 百度主页搜索按钮 */
        DOMUtils.on(searchBtn_HOME_Selector, "click", function (event) {
            return HandleInputEvent.searchBtnJump(
                event as MouseEvent | PointerEvent,
                document.querySelector(searchInput_HOME_Selector) as HTMLInputElement
            );
        });
        /* 百度主页搜索输入框 */
        DOMUtils.on(searchInput_HOME_Selector, "keydown", function (event) {
            return HandleInputEvent.enterKeyDownEvent(
                event as KeyboardEvent,
                document.querySelector(searchInput_HOME_Selector) as HTMLInputElement
            );
        });
    },
    /**
     * 设置搜索建议自定义click事件
     * @param elementSelector
     */
    mutationObserverFunction(elementSelector: string) {
        log.success("设置搜索建议自定义click事件");
        document.querySelectorAll(elementSelector).forEach((item) => {
            DOMUtils.on(item as HTMLElement, "click", function (event) {
                utils.preventEvent(event);
                window?.stop();
                let searchText = (event.target as HTMLElement).textContent;
                let redirectURL =
                    window.location.origin + "/s?word=" + searchText;
                log.success("点击按钮跳转搜索 -> " + searchText);
                log.success(redirectURL);
                window.location.href = redirectURL;
                return false;
            });
        });
    },
    /**
     * 搜索按钮点击跳转
     * @param event
     * @param searchInputElement
     * @returns
     */
    searchBtnJump(event: PointerEvent | MouseEvent, searchInputElement: HTMLInputElement) {
        utils.preventEvent(event);
        window?.stop();
        let redirectURL =
            window.location.origin + "/s?word=" + searchInputElement.value;
        log.success("点击按钮跳转搜索 -> " + searchInputElement.value);
        log.success(redirectURL);
        window.location.href = redirectURL;
        return false;
    },
    /**
     * 判决回车搜索事件
     * @param event
     * @param searchInputElement
     * @returns
     */
    enterKeyDownEvent(event: KeyboardEvent, searchInputElement: HTMLInputElement) {
        if (event.keyCode === 108 || event.keyCode === 13) {
            window?.stop();
            utils.preventEvent(event);
            let redirectURL =
                window.location.origin + "/s?word=" + searchInputElement.value;
            log.success("回车键跳转搜索 -> " + searchInputElement.value);
            log.success(redirectURL);
            window.location.href = redirectURL;
            return false;
        }
        return true;
    },
};

export {
    HandleInputEvent
}