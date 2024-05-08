import { DOMUtils, Qmsg, log, utils } from "@/env";
import { PopsPanel } from "@/ui";
import { TiebaCore } from "../core";
import { TieBaApi, TiebaUrlApi } from "../api/TieBaApi";
import { CommonUtil } from "@/util/CommonUtil";

/**
 * 贴吧 吧内功能
 */
const TiebaBaNei = {
    /**
     * __vue__
     */
    vueRootView: null as unknown as Vue2Context,
    init() {
        PopsPanel.execMenu("baidu_tieba_openANewTab", () => {
            TiebaBaNei.openANewTab();
        })
        PopsPanel.execMenu("baidu_tieba_remember_user_post_sort", () => {
            TiebaBaNei.rememberPostSort();
        })
        PopsPanel.execMenu("baidu_tieba_filterDuplicatePosts", () => {
            TiebaBaNei.filterDuplicatePosts();
        })
        PopsPanel.execMenu("baidu_tieba_removeForumSignInLimit", () => {
            TiebaBaNei.removeForumSignInLimit();
        })
    },
    /**
     * 解除签到限制
     */
    removeForumSignInLimit() {
        /* 修改页面中的APP内签到 */
        utils.waitNode(".tb-mobile-viewport").then(async () => {
            TiebaBaNei.vueRootView = CommonUtil.getVue(document.querySelector(
                ".tb-mobile-viewport"
            )) as Vue2Context;
            let isLogin = Boolean(
                TiebaBaNei.vueRootView?.["user"]?.["is_login"]
            );
            utils.waitNode(".tb-forum-user__join-btn").then((element) => {
                if (isLogin) {
                    (element.children[0] as HTMLElement).innerText = "点击签到";
                } else {
                    (element.children[0] as HTMLElement).innerText = "点击登录";
                }
                log.success("修改页面中的APP内签到");
                DOMUtils.on(
                    element,
                    "click",
                    async function (event) {
                        utils.preventEvent(event);
                        if (isLogin) {
                            /* 已登录-签到 */
                            let userPortrait =
                                TiebaBaNei.vueRootView["user"]["portrait"];
                            let forumName = TiebaBaNei.vueRootView["forum"]["name"];
                            let tbs =
                                TiebaBaNei.vueRootView["$store"]["state"]["common"][
                                "tbs"
                                ];
                            let signResult = await TieBaApi.forumSign(
                                forumName,
                                tbs
                            );
                            if (signResult && typeof signResult["data"] === "object") {
                                Qmsg.success(
                                    `今日本吧第${signResult["data"]["finfo"]["current_rank_info"]["sign_count"]}个签到`
                                );
                            } else {
                                Qmsg.error(signResult?.["error"]);
                            }
                        } else {
                            /* 未登录-前往登录 */
                            TiebaBaNei.vueRootView["isShowModal"] = true;
                        }
                    },
                    {
                        capture: true,
                    }
                );
            });
        });
    },
    /**
     * 新标签页打开
     */
    openANewTab() {
        DOMUtils.on(
            document,
            "click",
            "div.tb-threadlist__item",
            function (event) {
                utils.preventEvent(event);
                let vueObj = CommonUtil.getVue(event.target);
                let pbUrl = vueObj?.pbUrl;
                let tid = vueObj?.tid ?? vueObj?.thread?.tid;
                let id = vueObj?.id ?? vueObj?.thread?.id;
                let newUrl = "";
                if (pbUrl) {
                    newUrl = window.location.origin + pbUrl;
                } else if (tid || id) {
                    newUrl = TiebaUrlApi.getPost(tid ?? id);
                } else {
                    Qmsg.error("获取帖子链接失败");
                    return;
                }
                log.info("帖子链接: " + newUrl);
                window.open(newUrl, "_blank");
            },
            {
                capture: true,
            }
        );
    },
    /**
     * 记住当前用户的看帖排序
     * + -1 不知道什么作用
     * + 1  不知道什么作用
     * + 2  回复
     * + 3  发布
     */
    rememberPostSort() {
        let userSortModel = parseInt(
            PopsPanel.getValue("baidu-tieba-sort-model", 3).toString()
        );
        utils
            .waitNode(".tb-page__main .tb-sort .tab-pack")
            .then((element) => {
                let originChange = CommonUtil.getVue(element)?.change;
                originChange(userSortModel);
                (element as any).__vue__.change = function (index: number) {
                    PopsPanel.setValue("baidu-tieba-sort-model", index);
                    originChange(index);
                };
                log.info("注入记住当前选择的看帖排序");
            });
    },
    /**
     * 过滤重复帖子
     */
    filterDuplicatePosts() {
        utils.waitNode(".tb-threadlist").then(async (element) => {
            await utils.waitVueByInterval(
                element,
                (__vue__) => {
                    return Boolean(__vue__?.$props?.list);
                },
                100,
                10000
            );
            let tbThreadListVue = CommonUtil.getVue(document.querySelector(".tb-threadlist"));
            if (!tbThreadListVue) {
                log.error("未找到.tb-threadlist元素的vue属性");
                return;
            }
            log.success("监听帖子数量改变");
            tbThreadListVue.$watch(
                "list",
                function (newVal: any, oldVal: any) {
                    log.success("帖子数量触发改变");
                    let postsId = {} as NestedObjectWithToString;
                    // @ts-ignore
                    for (let index = 0; index < this.$props.list.length; index++) {
                        // @ts-ignore
                        let postsInfo = this.$props.list[index];
                        if (!postsInfo.id) {
                            /* 不存在id属性，可能是中间的广告？ */
                            continue;
                        }
                        if (postsId[postsInfo.id]) {
                            /* 重复帖子 */
                            log.error("移除重复帖子：" + postsInfo.title);
                            // @ts-ignore
                            this.$props.list.splice(index, 1);
                            index--;
                            continue;
                        }
                        postsId[postsInfo.id] = postsInfo.title ?? "";
                    }
                },
                {
                    deep: false,
                    immediate: true,
                }
            );
        });
    },
};

export {
    TiebaBaNei
}