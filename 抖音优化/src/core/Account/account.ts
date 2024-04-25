import { utils } from "@/api/env";
import { DouYinElement } from "../Element/element";

const DouYinAccount = {
    /**
     * 伪装登录
     */
    disguiseLogin() {
        function setLogin(osElement: HTMLDivElement) {
            // @ts-ignore
            utils.getReactObj(osElement).reactFiber.alternate.return.memoizedProps.userInfo.info = {
                uid: parseInt((Math.random() * 1000000).toString()),
            };
            // @ts-ignore
            utils.getReactObj(osElement).reactFiber.alternate.return.memoizedProps.userInfo.isLogin = true;
        }
        DouYinElement.watch_slidelist((osElement) => {
            setLogin(osElement);
        });
    },
    /**
     * 关闭登录弹窗
     */
    watchLoginDialogToClose() {
        DouYinElement.addShieldStyle('div[id^="login-full-panel-"]');
        utils.waitNode("body").then(() => {
            utils.mutationObserver(document.body, {
                config: {
                    subtree: true,
                    childList: true,
                },
                callback() {
                    let accountCloseBtn = document.querySelector(
                        'body > div[id^="login-full-panel-"] .dy-account-close'
                    ) as HTMLDivElement;
                    if (accountCloseBtn) {
                        // @ts-ignore
                        utils.getReactObj(accountCloseBtn).reactProps.onClick(new Event("click"));
                    }
                },
            });
        });
    },
}

export {
    DouYinAccount
}