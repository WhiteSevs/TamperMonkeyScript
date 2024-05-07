import { unsafeWindow } from "$";
import { hasFormHash, getFormHash, hasHash, getHash } from "../../api/param";

/**
 * 签到
 */
export function sign() {
    

}

/**
 * 获取账号的formhash
 */
export function getFormHashs() {
    let $formhash: HTMLInputElement | null = (top || unsafeWindow).document.querySelector("input[name=formhash]");
    let formhash: string | undefined = $formhash?.value;
    /* 左侧导航栏登录才有的退出图标 */
    let $exitContainer: HTMLAnchorElement | null = (top || unsafeWindow).document.querySelector(
        ".sidenv_exit > a"
    );
    /* 论坛浏览图片下的点赞按钮，获取formhash */
    let comiis_recommend_addkey: HTMLAnchorElement | null = (top || unsafeWindow).document.querySelector(
        "a.comiis_recommend_addkey"
    );
    if ($exitContainer && hasFormHash($exitContainer.href)) {
        formhash = getFormHash($exitContainer.href)
    }
    if (comiis_recommend_addkey && hasHash(comiis_recommend_addkey.href)) {
        formhash = getHash(comiis_recommend_addkey.href)
    }
    return formhash;
}