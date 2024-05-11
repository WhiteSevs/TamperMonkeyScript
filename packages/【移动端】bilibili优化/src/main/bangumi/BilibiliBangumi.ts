import { DOMUtils, Qmsg, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting"
import { unsafeWindow } from "ViteGM";

const BilibiliOpenApp = {
    getUrl($ele: HTMLElement | null | Element) {
        if ($ele == null) {
            return;
        }
        return $ele.getAttribute("universallink");
    },
    /**
     * 直接跳转Url
     * @param event 
     */
    jumpToUrl(event: Event) {
        let $click = event.target as HTMLElement;
        let $biliOpenApp = $click.querySelector("bili-open-app");
        if ($biliOpenApp) {
            let url = BilibiliOpenApp.getUrl($biliOpenApp);
            if (url) {
                window.location.href = url
            } else {
                Qmsg.error("获取bili-open-app的Url失败")
                log.error("获取bili-open-app的Url失败")
            }
        } else {
            Qmsg.error("未获取到<bili-open-app>元素")
            log.error("未获取到<bili-open-app>元素")
        }
    }
}

const BilibiliBangumi = {
    init() {
        PopsPanel.execMenuOnce("bili-bangumi-hook-callApp", () => {
            this.hookCallApp();
        })
        PopsPanel.execMenu("bili-bangumi-setPay", () => {
            this.setPay();
        })
        PopsPanel.execMenu("bili-bangumi-cover-clicl-event-chooseEp", () => {
            this.setChooseEpClickEvent();
        })
        PopsPanel.execMenu("bili-bangumi-cover-clicl-event-other", () => {
            this.setClickOtherVideo();
        })
        PopsPanel.execMenu("bili-bangumi-cover-clicl-event-recommend", () => {
            this.setRecommendClickEvent();
        })
    },
    /**
     * 阻止唤醒App
     */
    hookCallApp() {
        let oldSetTimeout = unsafeWindow.setTimeout;
        (unsafeWindow as any).setTimeout = function (...args: any) {
            let callString = args[0].toString();
            if (callString.includes("autoOpenApp")) {
                log.success(["阻止唤醒App", args])
                return;
            }
            return oldSetTimeout.apply(this, args);
        }
    },
    /**
     * 设置已购买番剧(会员？)
     * 
     * + __vue__.$store.state.userStat.pay `1`
     */
    setPay() {
        utils.waitNode("#app").then(($app: any) => {
            let check = function (__vue__: any) {
                return __vue__ != null &&
                    typeof __vue__?.$store?.state?.userStat?.pay === "number"
            }
            utils.waitVueByInterval($app, check, 250, 10000).then(() => {
                if (check($app.__vue__)) {
                    log.success("成功设置参数 pay");
                    $app.__vue__.$store.state.userStat.pay = 1;
                }
            })
        })
    },
    /**
     * 覆盖【选集】的点击事件
     */
    setChooseEpClickEvent() {
        utils.waitNode(".ep-list-pre-wrapper ul.ep-list-pre-container").then(() => {
            log.info("覆盖【选集】的点击事件")
            DOMUtils.on<PointerEvent | MouseEvent>(
                ".ep-list-pre-wrapper ul.ep-list-pre-container",
                "click",
                "li.episode-item",
                function (event) {
                    utils.preventEvent(event)
                    BilibiliOpenApp.jumpToUrl(event);
                }, {
                capture: true
            })
        })
        utils.waitNode(".ep-list-pre-wrapper ul.season-list-wrapper").then(() => {
            log.info("覆盖【xx季】的点击事件")
            DOMUtils.on<PointerEvent | MouseEvent>(
                ".ep-list-pre-wrapper ul.season-list-wrapper",
                "click",
                "li",
                function (event) {
                    utils.preventEvent(event)
                    BilibiliOpenApp.jumpToUrl(event);
                }, {
                capture: true
            })
        })
        utils.waitNode(".ep-list-pre-header").then(() => {
            log.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件")
            DOMUtils.on<PointerEvent | MouseEvent>(".ep-list-pre-header", "click", function (event) {
                utils.preventEvent(event)
            }, {
                capture: true
            })
        })
    },
    /**
     * 覆盖【PV&其他】、【预告】、【主题曲】的点击事件
     */
    setClickOtherVideo() {
        utils.waitNode(".section-preview-wrapper ul.ep-list-pre-container").then(() => {
            log.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件")
            DOMUtils.on<PointerEvent | MouseEvent>(
                ".section-preview-wrapper .ep-list-pre-container",
                "click",
                "li.section-preview-item",
                function (event) {
                    utils.preventEvent(event)
                    BilibiliOpenApp.jumpToUrl(event);
                }, {
                capture: true
            })
        })
        utils.waitNode(".section-preview-header").then(() => {
            log.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件")
            DOMUtils.on<PointerEvent | MouseEvent>(".section-preview-header", "click", function (event) {
                utils.preventEvent(event)
            }, {
                capture: true
            })
        })
    },
    /**
     * 覆盖【更多推荐】番剧的点击事件
     */
    setRecommendClickEvent() {
        utils.waitNode(".recom-wrapper ul.recom-list").then(() => {
            log.info("覆盖【更多推荐】番剧的点击事件")
            DOMUtils.on<PointerEvent | MouseEvent>(
                ".recom-wrapper ul.recom-list",
                "click",
                "li.recom-item-v2",
                function (event) {
                    utils.preventEvent(event)
                    BilibiliOpenApp.jumpToUrl(event);
                }, {
                capture: true
            })
        })
    }
}

export {
    BilibiliBangumi
}