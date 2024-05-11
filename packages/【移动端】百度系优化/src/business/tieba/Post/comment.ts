import { DOMUtils, httpx, loadingView, log, utils } from "@/env";
import { TieBaApi, TiebaPageDataApi, TiebaUrlApi } from "../api/TieBaApi";
import { GM_addStyle } from "ViteGM";
import { PopsPanel } from "@/ui/setting";
import { CommonUtil } from "@/util/CommonUtil";
import { TiebaCore } from "../core";
import { TiebaData } from "../Home/data";
import { LoadingView } from "@/util/LoadingView";

interface PageComment {
    commentList: {
        comment_info: {
            show_nickname: string;
            content: string;
            user_id: string;
            [key: string]: any;
        }[],
        [key: string]: any;
    }[],
    [key: string]: any;
}

interface CommentData {
    userAvatar: string,
    userHomeUrl: string;
    userName: string;
    userShowName: string;
    userPortrait: string;
    userPostId: number | string;
    userReplyContent: string;
    userReplyTime: string;
}

const TiebaComment = {
    /**
     * 当前页
     */
    page: 1,
    /**
     * 当前最大页
     */
    maxPage: 1,
    /**
     * 楼层数量
     */
    floor_num: 1,
    /**
     * 滚动监听锁
     */
    funcLock: null as unknown as { lock: () => void; unlock: () => void; run: () => any; },
    /**
     * tid
     */
    param_tid: null as unknown as string,
    /**
     * 帖子id
     */
    param_forum_id: null as unknown as string,
    /**
     * 帖子回复的数量
     */
    reply_num: 0,
    /**
     * 进过百度验证的额外安全参数
     */
    extraSearchSignParams: "",
    /**
     * vue根元素
     */
    vueRootView: null as unknown as HTMLElement,
    /**
     * 判断是否在底部附近的误差值
     * @type
     */
    isNearBottomValue: 250,
    init() {
        let urlSignParams = new URLSearchParams(window.location.search);
        if (
            urlSignParams.has("p_tk") &&
            urlSignParams.has("p_sign") &&
            urlSignParams.has("p_signature")
        ) {
            log.error("当前页面是经过百度验证后的网站，添加验证参数");
            urlSignParams.forEach((value, key) => {
                if (["pn", "tid", "pid", "fid", "t", "see_lz"].includes(key)) {
                    return;
                }
                log.success(`设置额外参数：${key}=${value}`);
                /* tiebaCommentConfig.extraSearchSignParams += `&${key}=${value}`; */
            });
            log.error([
                "百度验证后的参数👇",
                TiebaComment.extraSearchSignParams,
            ]);
        }
        utils.waitNode(".main-page-wrap").then(() => {
            TiebaComment.insertLoadingHTML();
        });
        utils
            .waitAnyNode(
                ".recommend-item[data-banner-info]",
                "div.app-view.transition-fade.pb-page-wrapper.mask-hidden .post-item"
            )
            .then(() => {
                DOMUtils.remove(".post-item");
                TiebaComment.initReplyDialogCSS();
                TiebaComment.mainPositive();
                TiebaComment.insertReverseBtn();
                TiebaComment.insertOnlyLZ();
            });

        utils.waitNodeWithInterval(".app-view", 10000).then(async () => {
            utils
                .waitPropertyByInterval(
                    () => {
                        return CommonUtil.getVue(document.querySelector(".app-view"));
                    },
                    () => {
                        return CommonUtil.getVue(document.querySelector(".app-view"))?.isHitMedicalPost;
                    },
                    void 0,
                    10000
                )
                .then(() => {
                    CommonUtil.getVue(document.querySelector(".app-view"))!.isHitMedicalPost = !1;
                });
            utils
                .waitPropertyByInterval(
                    () => {
                        return CommonUtil.getVue(document.querySelector(".app-view"));
                    },
                    () => {
                        return (
                            typeof CommonUtil.getVue(document.querySelector(".app-view"))?.thread?.reply_num === "number"
                        );
                    },
                    void 0,
                    10000
                )
                .then(() => {
                    TiebaComment.reply_num = CommonUtil.getVue(document.querySelector(".app-view"))?.thread?.reply_num;
                    log.success(
                        "当前帖子的回复数量：" + TiebaComment.reply_num
                    );
                });
        });
        this.addStyle();
    },
    addStyle() {
        /* 此处是百度贴吧帖子的css，应对贴吧前端重新编译文件 */
        GM_addStyle(`
          /* 去除底部高度设定 */
          .pb-page-wrapper{
            margin-bottom: 0 !important;
          }
          .post-item[data-v-74eb13e2] {
            overflow: hidden;
            margin: .16rem .13rem 0;
          }
          .post-item .user-line-post[data-v-74eb13e2] {
            margin-bottom: .06rem;
          }
          .user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
          }
          .user-line-wrapper[data-v-188c0e84] {
            -webkit-box-pack: justify;
            -moz-box-pack: justify;
            -webkit-justify-content: space-between;
            -moz-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
          }
          .post-item .content[data-v-74eb13e2] {
            padding-left: .44rem;
            width: auto;
          }
          .user-line[data-v-188c0e84] {
            -webkit-box-align: center;
            -moz-box-align: center;
            -webkit-align-items: center;
            -moz-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: left;
            -moz-box-pack: left;
            -webkit-justify-content: left;
            -moz-justify-content: left;
            -ms-flex-pack: left;
            justify-content: left;
          }
          .user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
          }
          .user-line .avatar[data-v-188c0e84] {
            position: relative;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: .36rem;
            height: .36rem;
            margin-right: .08rem;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            -webkit-box-flex: 0;
            -webkit-flex: none;
            -ms-flex: none;
            flex: none;
          }
          .tbfe-1px-border {
            position: relative;
            border-radius: .08rem;
            font-size: 0;
          }
          .user-line .user-info[data-v-188c0e84] {
            position: relative;
            overflow: hidden;
            -webkit-box-flex: 0;
            -webkit-flex: none;
            -ms-flex: none;
            flex: none;
          }
          .user-line .avatar[data-v-188c0e84]:after {
            border-radius: 50%;
          }
          .tbfe-1px-border:after {
            content: "";
            position: absolute;
            z-index: 100;
            top: 0;
            left: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border: 1px solid rgba(0,0,0,.12);
            -webkit-transform-origin: 0 0;
            -ms-transform-origin: 0 0;
            transform-origin: 0 0;
            pointer-events: none;
          }
          .user-line .user-info .username[data-v-188c0e84],
          #whitesev-reply-dialog .whitesev-reply-dialog-user-username {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            overflow: hidden;
            font-size: .15rem;
            line-height: .28rem;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            font-weight: 400;
          }
          .whitesev-reply-dialog-user-info{
            display: flex;
            align-items: center;
          }
          .user-line .user-info .desc-info[data-v-188c0e84] {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: .12rem;
            line-height: .18rem;
            overflow: hidden;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            color: #a3a2a8;
          }
          .user-line .user-info .floor-info[data-v-188c0e84], .user-line .user-info .forum-info[data-v-188c0e84] {
            margin-right: .08rem;
          }
          .post-item .content .post-text[data-v-74eb13e2] {
            display: unset;
            font-size: .16rem;
            line-height: .24rem;
          }
          .thread-text[data-v-ab14b3fe] {
            font-size: .13rem;
            line-height: .21rem;
            text-align: justify;
            word-break: break-all;
          }
          .post-item .content .lzl-post[data-v-74eb13e2] {
            margin-top: .06rem;
          }
          .lzl-post[data-v-5b60f30b] {
            padding: .08rem .12rem;
            background: #f8f7fd;
            border-radius: .08rem;
          }
          .post-item .content .post-split-line[data-v-74eb13e2] {
            margin-top: .12rem;
            background-color: #ededf0;
            height: 1px;
            width: 200%;
            -webkit-transform: scale(.5);
            -ms-transform: scale(.5);
            transform: scale(.5);
            -webkit-transform-origin: top left;
            -ms-transform-origin: top left;
            transform-origin: top left;
          }
          .lzl-post .lzl-post-item[data-v-5b60f30b]:first-child {
            margin-top: 0;
          }
          .lzl-post .lzl-post-item[data-v-5b60f30b] {
            margin-top: .04rem;
          }
          .lzl-post .lzl-post-item .text-box[data-v-5b60f30b] {
            font-size: .13rem;
            line-height: .2rem;
          }
          .lzl-post .lzl-post-item .text-box .link[data-v-5b60f30b] {
            display: -webkit-inline-box;
            display: -webkit-inline-flex;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            font-weight: 600;
            color: #a4a1a8;
          }
          .lzl-post .lzl-post-item .lzl-post-text[data-v-5b60f30b] {
            display: inline;
          }
          .thread-text[data-v-ab14b3fe] {
            font-size: .13rem;
            line-height: .26rem;
            text-align: justify;
            word-break: break-all;
          }
          .lzl-post .lzl-post-item .text-box .link .landlord[data-v-5b60f30b] {
            width: .28rem;
            height: .28rem;
            margin-left: .04rem;
          }
          .user-line .user-info .username .landlord[data-v-188c0e84],
          #whitesev-reply-dialog .landlord[data-v-188c0e84]{
            width: .28rem;
            height: .28rem;
            margin-left: .04rem
          }

          /* 修复帖子主内容底部的高度 */
          .post-resource-list + .interaction-bar{
            padding: 0.09rem !important;
          }
          /* 修复全部回复距离上面的空白区域 */
          #replySwitch{
            padding-top: 0.06rem;
          }
          `);
        GM_addStyle(`
          .thread-text .BDE_Smiley {
            width: .2rem;
            height: .2rem;
            vertical-align: middle;
          }
          .thread-text .BDE_Image{
            margin-top: 8px;
            max-width: 350px;
            cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
            height: auto;
            width: auto;
            width: 100%;
          }
          .text-content .at{
            font-weight: 600;
            color: #614FBC;
          }`);
        /* 隐藏百度贴吧精选帖子的底部空栏 */
        GM_addStyle(`
          body > div.main-page-wrap > div.app-view.transition-fade.pb-page-wrapper.mask-hidden > div.placeholder,
          div.app-view.transition-fade.pb-page-wrapper.mask-hidden .post-item[data-track]{
            display: none;
          }`);
        GM_addStyle(this.getLevelCSS());
    },
    /** 用户贴吧等级CSS */
    getLevelCSS() {
        let colorConversion = new utils.ColorConversion();
        let colorLightLevel = 0.7;
        return `
          .forum-level-container{
            display: flex;
            align-items: center;
            margin: 0 0.03rem;
          }
          .forum-level[data-level]{
            padding: 0px 0.03rem;
            border-radius: 3px;
            font-size: 0.1rem;
            line-height: 0.16rem;
            font-weight: 700;
            color: #ffffff;
            background: #000000;
          }
          .forum-level[data-level="0"],
          .forum-level[data-level="1"],
          .forum-level[data-level="2"],
          .forum-level[data-level="3"]{
            background: ${colorConversion.getLightColor(
            "#5dc7a0",
            colorLightLevel
        )};
            color: #5dc7a0;
          }
          .forum-level[data-level="4"],
          .forum-level[data-level="5"],
          .forum-level[data-level="6"],
          .forum-level[data-level="7"],
          .forum-level[data-level="8"],
          .forum-level[data-level="9"]{
            background: ${colorConversion.getLightColor(
            "#6BA7FF",
            colorLightLevel
        )};
            color: #6BA7FF;
          }
          .forum-level[data-level="10"],
          .forum-level[data-level="11"],
          .forum-level[data-level="12"],
          .forum-level[data-level="13"],
          .forum-level[data-level="14"],
          .forum-level[data-level="15"]{
            background: ${colorConversion.getLightColor(
            "#F9B341",
            colorLightLevel
        )};
            color: #F9B341;
          }
          .forum-level[data-level="16"],
          .forum-level[data-level="17"],
          .forum-level[data-level="18"]{
            background: ${colorConversion.getLightColor(
            "#FBA71A",
            colorLightLevel
        )};
            color: #FBA71A;
          }
          `;
    },
    /**
     * scroll事件触发 自动加载下一页的评论
     */
    nextPageScrollEvent: async (event: Event) => {
        if ((event as any).jsTrigger) {
            /* js主动触发 */
        } else if (
            !utils.isNearBottom(TiebaComment.isNearBottomValue)
        ) {
            return;
        }
        loadingView.setText("Loading...", true);
        loadingView.show();
        let timeStamp = Date.now();
        let nextPageUrl = TiebaUrlApi.getPost(
            `${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
        );
        let nextPageAllCommentUrl = TiebaUrlApi.getPost(
            `totalComment?t=${timeStamp}&tid=${TiebaComment.param_tid}&fid=${TiebaComment.param_forum_id}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
        );
        let pageDOM = await TiebaComment.getPageComment(nextPageUrl);
        let pageCommentList = await TiebaComment.getPageCommentList(
            nextPageAllCommentUrl
        );
        if (
            !pageDOM ||
            typeof pageDOM === "string" ||
            !pageCommentList?.commentList
        ) {
            loadingView.setText(
                typeof pageDOM === "string" ? (pageDOM as string) : "获取评论失败"
            )
            log.error(pageDOM);
            log.error(pageCommentList);
            TiebaComment.removeScrollListener();
            return;
        }
        log.info("成功获取下一页评论和楼中楼评论");
        let comments = Array.from(pageDOM.querySelectorAll(".l_post.l_post_bright")) as HTMLDivElement[];
        if (TiebaComment.page == 1) {
            /* 为第一页时，去除第一个，也就是主评论 */
            comments.splice(0, 1);
        }
        comments.forEach((ele) => {
            TiebaComment.insertNewCommentInnerElement(
                TiebaComment.getNewCommentInnerElement(ele, pageCommentList)
            );
            TiebaComment.floor_num += 1;
        });
        if ((document.querySelector(".white-only-lz") as HTMLElement).classList.contains("white-only-lz-qx")) {
            document.querySelectorAll(".post-item").forEach((ele) => {
                let landlord = ele.getAttribute("landlord");
                if (landlord == "0") {
                    ele.classList.add("white-only-lz-none");
                }
            });
        }
        loadingView.hide();
        if (TiebaComment.page >= TiebaComment.maxPage) {
            log.info("已加载所有的评论");
            loadingView.setText("已加载所有的评论");
            loadingView.hide();
            TiebaComment.removeScrollListener();
        }
        TiebaComment.page++;
    },
    /**
     * scroll事件触发 自动加载上一页的评论
     */
    prevPageScrollEvent: async (event: Event) => {
        if ((event as any).jsTrigger) {
            /* js主动触发 */
        } else if (
            !utils.isNearBottom(TiebaComment.isNearBottomValue)
        ) {
            return;
        }
        loadingView.setText("Loading...", true);
        loadingView.show();
        let timeStamp = Date.now();
        let pageUrl = TiebaUrlApi.getPost(
            `${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
        );
        let pageAllCommentUrl = TiebaUrlApi.getPost(
            `totalComment?t=${timeStamp}&tid=${TiebaComment.param_tid}&fid=${TiebaComment.param_forum_id}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
        );
        let pageDOM = await TiebaComment.getPageComment(pageUrl);
        let pageCommentList = await TiebaComment.getPageCommentList(
            pageAllCommentUrl
        );
        if (
            !pageDOM ||
            typeof pageDOM === "string" ||
            !pageCommentList?.commentList
        ) {
            loadingView.setText(
                typeof pageDOM === "string" ? pageDOM : "获取评论失败"
            )
            log.error(pageDOM);
            log.error(pageCommentList);
            TiebaComment.removeScrollListener();
            return;
        }
        log.info("成功获取上一页评论和楼中楼评论");
        let comments = Array.from(pageDOM.querySelectorAll(".l_post.l_post_bright")) as HTMLDivElement[];
        if (TiebaComment.page == 1) {
            /* 为第一页时，去除第一个，也就是主评论 */
            comments.splice(0, 1);
        }
        comments.reverse();
        comments.forEach((element) => {
            TiebaComment.insertNewCommentInnerElement(
                TiebaComment.getNewCommentInnerElement(
                    element,
                    pageCommentList
                )
            );
            TiebaComment.floor_num++;
        });
        if ((document.querySelector(".white-only-lz") as HTMLElement).classList.contains("white-only-lz-qx")) {
            document.querySelectorAll(".post-item").forEach((ele) => {
                let landlord = ele.getAttribute("landlord");
                if (landlord == "0") {
                    ele.classList.add("white-only-lz-none");
                }
            });
        }
        loadingView.hide();
        if (TiebaComment.page <= 1) {
            log.info("已加载所有的评论");
            loadingView.setText("已加载所有的评论");
            loadingView.hide();
            TiebaComment.removeScrollListener();
        }
        TiebaComment.page--;
    },
    /**
     * 设置自动加载下一页的scrol事件
     */
    setNextPageScrollListener() {
        TiebaComment.funcLock = new utils.LockFunction(
            TiebaComment.nextPageScrollEvent,
            this,
            void 0,
        );
        document.addEventListener("scroll", TiebaComment.funcLock.run);
        utils.dispatchEvent(document, "scroll", { jsTrigger: true });
        log.success("scroll监听事件【下一页】");
    },
    /**
     * 设置自动加载上一页的scrol事件
     */
    setPrevPageScrollListener() {
        TiebaComment.funcLock = new utils.LockFunction(
            TiebaComment.prevPageScrollEvent,
            this
        );
        document.addEventListener("scroll", TiebaComment.funcLock.run);
        utils.dispatchEvent(document, "scroll", { jsTrigger: true });
        log.success("scroll监听事件【上一页】");
    },
    /**
     * 移除scoll事件
     */
    removeScrollListener() {
        if (TiebaComment.funcLock) {
            document.removeEventListener(
                "scroll",
                TiebaComment.funcLock.run
            );
            log.success("取消绑定scroll", "#f400ff");
        }
    },
    /**
     * 获取时间差
     * @param timeStr
     */
    getDifferTime(timeStr: string) {
        /* 结束时间 */
        let currentTime = new Date();
        /* 时间差的毫秒数 */
        let timeDifference =
            currentTime.getTime() -
            new Date(timeStr.replace(/-/g, "/")).getTime();

        /* ------------------------------ */

        /* 计算出相差天数 */
        let days = Math.floor(timeDifference / (24 * 3600 * 1000));
        if (days > 0) {
            timeStr = days + "天前";
        } else {
            /* 计算天数后剩余的毫秒数 */
            let leave1 = timeDifference % (24 * 3600 * 1000);
            /* 计算出小时数 */
            let hours = Math.floor(leave1 / (3600 * 1000));
            if (hours > 0) {
                timeStr = hours + "小时前";
            } else {
                /* 计算相差分钟数 */
                let leave2 = leave1 % (3600 * 1000);
                /* 计算小时数后剩余的毫秒数 */
                let minutes = Math.floor(leave2 / (60 * 1000));
                if (minutes > 0) {
                    timeStr = minutes + "分钟前";
                } else {
                    /* 计算相差秒数 */
                    let leave3 = leave2 % (60 * 1000);
                    /* 计算分钟数后剩余的毫秒数 */
                    let seconds = Math.round(leave3 / 1000);
                    timeStr = seconds + "秒前";
                }
            }
        }
        return timeStr;
    },
    /**
     * 根据dom获取需要插入的评论的html
     * @param element
     * @param pageCommentList
     */
    getNewCommentInnerElement: (element: HTMLElement, pageCommentList: PageComment) => {
        /**
         * 解析评论底部信息
         * @param ele
         * @returns
         */
        function parseCommentBottomInfo(ele: HTMLElement) {
            let $tailWrap = ele.querySelector(".post-tail-wrap");
            /* 获取用户ip位置 */
            let userIpPosition = "";
            /* 获取用户楼层 */
            let userFloor = "";
            /* 获取用户评论时间 */
            let userCommentTime = "1970-1-1 00:00:00";
            if ($tailWrap) {
                let childrenElement =
                    $tailWrap.querySelectorAll("span.tail-info");
                let childSpanElementList = Array.from(
                    $tailWrap.querySelectorAll("span")
                );
                for (const childSpanElement of childSpanElementList) {
                    if (childSpanElement.hasAttribute("class")) {
                        continue;
                    }
                    if (!childSpanElement?.textContent?.match("来自|禁言")) {
                        userIpPosition = childSpanElement.textContent as string;
                        break;
                    }
                }
                if (childrenElement.length == 3 || childrenElement.length == 2) {
                    userFloor =
                        childrenElement[childrenElement.length - 2].textContent as string;
                    userCommentTime =
                        childrenElement[childrenElement.length - 1].textContent as string;
                } else {
                    log.error("获取PC端的数据楼层和时间信息失败👇");
                    log.error(childrenElement);
                    userFloor = "";
                    userCommentTime = "";
                }
            } else {
                $tailWrap = element.querySelector(".acore_reply_tail");
                userIpPosition = data_field["content"]["ip_address"];
                /* 评论楼层 */
                userFloor = data_field["content"]["post_no"];
                userCommentTime = data_field["content"]["date"];
            }
            /* 对评论时间进行转换 */
            userCommentTime = TiebaComment.getDifferTime(userCommentTime);

            return {
                userFloor: parseInt(userFloor),
                userIpPosition,
                userCommentTime,
            };
        }
        let data_field = utils.toJSON(element.getAttribute("data-field"));
        if (Object.keys(data_field).length == 0) {
            return;
        }
        /* 获取用户id */
        let user_id = data_field["author"]["user_id"];
        /* 获取楼主id */
        let builderId = data_field["content"]["builderId"];

        /* 获取用户评论 */
        let userComment = data_field["content"]["content"];
        if (!userComment) {
            /* 如果评论获取为空的话，可能是因为【该楼层疑似违规已被系统折叠】，直接获取innerHTML */
            userComment = element.querySelector(".d_post_content")?.innerHTML;
        }
        /* 获取用户主页 */
        let userHomeUrl = element.querySelector(".p_author_face")?.getAttribute("href");
        /* 获取楼主名字 */
        let user_landlord_name = data_field["author"]["user_name"];
        /* 用户显示出的名字 */
        let $userShowName = element.querySelector(".p_author_name");
        let userShowName = "";
        if (userShowName) {
            userShowName = $userShowName?.textContent as string;
        } else {
            userShowName = element
                .querySelector(".p_author_face > img")
                ?.getAttribute("username") as string;
        }
        /* 用户真实的名字 */
        let userName = data_field["author"]["user_name"];
        /* 获取用户头像 */
        let userAvatar =
            element
                .querySelector(".p_author_face > img")
                ?.getAttribute("data-tb-lazyload") ||
            (element.querySelector(".p_author_face > img") as HTMLImageElement)?.src

        /* 判断是否楼主 */
        let is_landlord = 0;
        if (user_id == builderId) {
            is_landlord = 1;
        }
        /* 用户本吧等级 */
        let userForumLevel = -1;
        /* 用户本吧等级的名字 */
        let userForumLevelName = void 0 as unknown as string;
        if (element.querySelector(".user_badge .d_badge_lv")) {
            userForumLevel = parseInt(
                element.querySelector(".user_badge .d_badge_lv")?.textContent as string
            );
        }
        if (element.querySelector(".user_badge .d_badge_title")) {
            userForumLevelName = element.querySelector(
                ".user_badge .d_badge_title"
            )?.textContent as string
        }
        let { userFloor, userIpPosition, userCommentTime } =
            parseCommentBottomInfo(element);

        /* 如果头像地址以//开头，则加上https */
        if (userAvatar.startsWith("//")) {
            userAvatar = "https:" + userAvatar;
        }
        let userAvatarObj = new URL(userAvatar);
        let userPortrait = data_field["author"]["portrait"];
        /* 如果不存在用户id，那么从头像地址中获取用户id */
        if (!userPortrait) {
            let userAvatarObjMatch =
                userAvatarObj.pathname.match(/\/item\/(.+)/i);
            if (userAvatarObjMatch) {
                userPortrait = userAvatarObjMatch[1];
            }
        }
        if (PopsPanel.getValue("baidu_tieba_shield_commnets_baodating")) {
            /* 屏蔽贴吧包打听 */
            if (user_id != null && user_id.toString() === "6421022725") {
                return;
            } else if (
                userPortrait != null &&
                userPortrait
                    .toString()
                    .includes("tb.1.4c46bb61.pOGb2yswbMUBKOIUpteLvg")
            ) {
                return;
            }
        }
        let post_id = data_field["content"]["post_id"];
        let newUserCommentHTML = "";
        if (pageCommentList.commentList[post_id]) {
            Array.from(
                pageCommentList.commentList[post_id].comment_info
            ).forEach((result) => {
                let u_user_name = result["show_nickname"];
                let u_content = result["content"];
                let u_user_id = result["user_id"];
                let u_user_portrait =
                    pageCommentList.userList[u_user_id]["portrait"];
                let u_user_home_url = "/home/main?id=" + u_user_portrait;
                if (builderId == u_user_id) {
                    u_user_name +=
                        '<svg data-v-5b60f30b="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>';
                }
                /* 每一项楼中楼的回复html */
                let lzlCommentItemHTML = `<div data-v-5b60f30b="" class="lzl-post-item" style="">
                  <div data-v-5b60f30b="" class="text-box">
                    <span data-v-5b60f30b="" class="link username" data-home-url="${u_user_home_url}">${u_user_name}</span>
                    <div data-v-ab14b3fe="" data-v-5b60f30b="" class="thread-text lzl-post-text">
                      <span data-v-ab14b3fe="" class="text-content">${u_content}</span>
                    </div>
                  </div>
                </div>
                `;
                newUserCommentHTML += lzlCommentItemHTML;
            });
        }

        if (newUserCommentHTML) {
            newUserCommentHTML = `
            <div data-v-5b60f30b="" data-v-74eb13e2="" class="lzl-post lzl-post" style="max-height: 2.35rem;overflow-y: hidden;">
              ${newUserCommentHTML}
            </div>
            `;
        }
        let newCommentElement = DOMUtils.createElement(
            "div",
            {
                className: "post-item",
                innerHTML: `
              <div
                data-v-188c0e84=""
                data-v-74eb13e2=""
                class="user-line-wrapper user-line-post">
                <div data-v-188c0e84="" class="user-line">
                  <div
                    data-v-188c0e84=""
                    class="tbfe-1px-border avatar"
                    data-home-url="${userHomeUrl}"
                    data-src="${userAvatar}"
                    lazy="loaded"
                    style="background-image: url(${userAvatar});"></div>
                  <div data-v-188c0e84="" class="user-info">
                    <div data-v-188c0e84="" class="username" data-home-url="${userHomeUrl}">
                      ${userShowName}
                      ${is_landlord
                        ? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>`
                        : ""
                    }
                      ${userForumLevel &&
                        userForumLevel >= 0 &&
                        PopsPanel.getValue("baidu_tieba_show_forum_level")
                        ? `
                          <div class="forum-level-container">
                            <span class="forum-level" data-level="${userForumLevel}">Lv.${userForumLevel} ${userForumLevelName}</span>
                          </div>`
                        : ""
                    }
                    </div>
                    <p data-v-188c0e84="" class="desc-info">
                      <span data-v-188c0e84="" class="floor-info">
                        ${userFloor}楼
                      </span>
                      <span data-v-188c0e84="" class="time" style="margin-right: .08rem;">
                        ${userCommentTime}
                      </span>
                      <span data-v-188c0e84="" class="ip">
                        ${userIpPosition}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div data-v-74eb13e2="" class="content">
                <p data-v-ab14b3fe="" data-v-74eb13e2="" class="thread-text post-text">
                  <span data-v-ab14b3fe="" class="text-content">
                    ${userComment}
                  </span>
                </p>
                ${newUserCommentHTML}
                <div data-v-74eb13e2="" class="post-split-line"></div>
              </div>
              `,
                "data-whitesev": {
                    userId: user_id,
                    userPostId: post_id,
                    userPortrait: userPortrait,
                    userFloor: userFloor,
                    userComment: userComment,
                    userHomeUrl: userHomeUrl,
                    userForumLevel: userForumLevel,
                    userForumLevelName: userForumLevelName,
                    userAvatar: userAvatar,
                    userName: userName,
                    userShowName: userShowName,
                    userCommentTime: userCommentTime,
                    userIpPosition: userIpPosition,
                    pageCommentList: pageCommentList,
                },
            },
            {
                "data-v-74eb13e2": "",
                "data-v-602e287c": "",
                "data-floor": TiebaComment.floor_num,
                landlord: is_landlord,
            }
        );
        return newCommentElement;
    },
    /**
     * 根据评论的html插入页面中
     * @param newCommentDOM
     */
    insertNewCommentInnerElement: (newCommentDOM: HTMLDivElement | undefined) => {
        if (newCommentDOM == null) {
            return;
        }

        /* 评论，点击头像跳转到这个人的空间 */
        newCommentDOM
            .querySelectorAll(".tbfe-1px-border.avatar")
            .forEach((item) => {
                if (item.hasAttribute("data-home-url")) {
                    (item as HTMLDivElement).onclick = function () {
                        window.open(item.getAttribute("data-home-url") as string, "_blank");
                    };
                }
            });
        /* 评论，点击名字跳转到这个人的空间 */
        newCommentDOM
            .querySelectorAll(".user-info .username")
            .forEach((item) => {
                if (item.hasAttribute("data-home-url")) {
                    (item as HTMLDivElement).onclick = function () {
                        window.open(item.getAttribute("data-home-url") as string, "_blank");
                    };
                }
            });
        /* 评论的回复，点击头像跳转到这个人的空间 */
        /* newCommentDOM.querySelectorAll(".link.username").forEach((item) => {
          if (item.hasAttribute("data-home-url")) {
            item.onclick = function () {
              window.open(item.getAttribute("data-home-url"), "_blank");
            };
          }
        }); */
        /* 评论的回复的回复，点击头像跳转到这个人的空间 */
        /* newCommentDOM.querySelectorAll("a.at").forEach((item) => {
          item.removeAttribute("onclick");
          item.removeAttribute("onmouseover");
          item.removeAttribute("onmouseout");
          if (item.hasAttribute("portrait")) {
            item.setAttribute(
              "href",
              "/home/main?id=" + item.getAttribute("portrait")
            );
          }
        }); */

        if (document.querySelector(".post-cut-guide")) {
            DOMUtils.before(
                document.querySelector(".post-cut-guide") as HTMLElement,
                newCommentDOM
            );
        } else {
            /* 老版帖子 */
            DOMUtils.append(
                document.querySelector(".pb-page-wrapper") as HTMLElement,
                newCommentDOM
            );
        }
        /* 如果评论存在不可见的，添加一个 查看全部xx条回复 */
        let lzlPostElement =
            newCommentDOM.querySelector(".lzl-post.lzl-post") as HTMLElement;
        if (lzlPostElement) {
            let lzlPostElementHeight = DOMUtils.height(lzlPostElement);
            let lzlPostItemList =
                Array.from(lzlPostElement.querySelectorAll(".lzl-post-item")) as HTMLElement[];
            let currentLzlPostElementHeight = 0;
            let addSeeAllReply = false;
            for (const lzlPostItem of lzlPostItemList) {
                currentLzlPostElementHeight += DOMUtils.outerHeight(lzlPostItem);
                if (currentLzlPostElementHeight > lzlPostElementHeight) {
                    addSeeAllReply = true;
                    break;
                }
            }
            if (addSeeAllReply) {
                let lzlCommentNums =
                    (newCommentDOM as any)["data-whitesev"]["pageCommentList"][
                    "commentList"
                    ][(newCommentDOM as any)["data-whitesev"]["userPostId"]]["comment_num"];
                let seeAllReplyElement = DOMUtils.createElement(
                    "div",
                    {
                        className: "whitesev-see-all-reply",
                        innerHTML: `查看全部${lzlCommentNums}条回复`,
                    },
                    {
                        style: "color: #6251B3;margin-top: 5px 0 0 10px;",
                    }
                );
                DOMUtils.on(seeAllReplyElement, "click", function () {
                    lzlPostElement.click();
                });
                DOMUtils.after(lzlPostElement, seeAllReplyElement);
            }
            DOMUtils.on(
                lzlPostElement,
                "click",
                function (event) {
                    utils.preventEvent(event);
                    log.success(`点击查看全部回复`);
                    TiebaComment.showReplyDialog(lzlPostElement);
                },
                {
                    capture: true,
                }
            );
        }
    },
    /**
     * 初始化评论的弹窗的所有设置包括CSS
     */
    initReplyDialogCSS() {
        log.success("初始化回复的弹窗");
        GM_addStyle(`
          /* 主 */
          #whitesev-reply-dialog{
            z-index: 99999;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          /* 背景 */
          .whitesev-reply-dialog-bg{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.5);
            transition-timing-function: ease-in;
            transition-duration: .1s;
            transition-property: background-color,opacity;
          }
          /* 内容容器 */
          .whitesev-reply-dialog-sheet{
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            background-color: #fff;
            transition: .1s ease-in;
            transition-property: transform;
            transform: translate(0,100%);
            border-radius: 10px 10px 0px 0px;
          }
          /* 关闭 */
          .whitesev-reply-dialog-close{
            position: absolute;
          }
          /* 标题 */
          .whitesev-reply-dialog-sheet-title{
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 15px;
            color: #222;
            line-height: 20px;
            text-align: center;
            border-bottom: 1px solid #dbdbdb;
          }
          /* 内容 */
          .whitesev-reply-dialog-sheet-content{
            height: 100%;
            overflow-y: auto;
          }
          /* 内容中主内容和其它内容 */
          .whitesev-reply-dialog-sheet-main-content,
          .whitesev-reply-dialog-sheet-other-content{
            margin: 20px 10px 10px 10px;
          }
          /* 内容中其它内容 */
          .whitesev-reply-dialog-sheet-ohter-content{

          }
          /* 弹出 */
          #whitesev-reply-dialog[data-on] .whitesev-reply-dialog-bg{
            transition-timing-function: ease-in;
            transition-duration: .2s;
          }
          #whitesev-reply-dialog[data-on] .whitesev-reply-dialog-bg{
            background-color: rgba(0,0,0,.5);
          }
          #whitesev-reply-dialog[data-on] .whitesev-reply-dialog-sheet{
            transition: .2s ease-in;
            transform: translate(0,0);
          }

          /* 头像 */
          .whitesev-reply-dialog-avatar {
            position: relative;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            width: .36rem;
            height: .36rem;
            margin-right: .08rem;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            -webkit-box-flex: 0;
            -moz-box-flex: 0;
            -webkit-flex: none;
            -ms-flex: none;
            flex: none;
          }
          
          /* 用户行 */
          .whitesev-reply-dialog-user-line {
              display: flex;
              align-items: center;
          }
          .whitesev-reply-dialog-user-line,
          .whitesev-reply-dialog-user-comment,
          .whitesev-reply-dialog-user-desc-info {
              margin-bottom: 8px;
          }
          /* 评论 */
          .whitesev-reply-dialog-user-comment {
              margin-left: .44rem;
          }
          /* 评论的贴吧自带表情 */
          .whitesev-reply-dialog-user-comment img.BDE_Smiley{
            width: .2rem;
            height: .2rem;
            vertical-align: middle;
          }
          /* 评论的贴吧自己上传的图片 */
          .whitesev-reply-dialog-user-comment img:not(.BDE_Smiley){
            margin-top: 8px;
            max-width: 350px;
            cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
            height: auto;
            width: auto;
            width: 100%;
          }
          /* 底部信息 */
          .whitesev-reply-dialog-user-desc-info{
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              margin-left: .44rem;
              border-bottom: 1px solid #dfdfdf;
          }
          .whitesev-reply-dialog-user-desc-info span{
              margin-right: .08rem;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -moz-box-align: center;
              -webkit-align-items: center;
              -moz-align-items: center;
              -ms-flex-align: center;
              align-items: center;
              font-size: .12rem;
              line-height: .18rem;
              overflow: hidden;
              white-space: nowrap;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              color: #a3a2a8;
          }
          /* 第xx楼 */
          .whitesev-reply-dialog-user-desc-info span[data-floor-info]::before {
              content:"第"
          }
          .whitesev-reply-dialog-user-desc-info span[data-floor-info]::after {
              content:"楼"
          }
          /* 中间行 */
          .whitesev-reply-dialog-sheet-main-content-bottom-line {
            background: #ebebeb;
            height: 6px;
          }
          /* 隐藏顶部主回复的底部边框 */
          .whitesev-reply-dialog-sheet-main-content .whitesev-reply-dialog-user-desc-info{
              border-bottom: none;
          }
          /* 其它回复中的最后一个 */
          .whitesev-reply-dialog-sheet-other-content > div:last-child{
            
          }
          /* 其它回复的每一项 */
          .whitesev-reply-dialog-sheet-other-content-item{
            margin-top: 12px;
          }
          /* 其它回复的底部边框 */
          .whitesev-reply-dialog-sheet-other-content-item .whitesev-reply-dialog-user-desc-info{
            padding-bottom: 12px;
          }
          /* xx条回复 */
          .whitesev-reply-dialog-sheet-comment-num {
            margin-top: -10px;
            margin-bottom: 20px;
          }
          /* 查看全部xx条回复 */
          .whitesev-see-all-reply{
            padding-top: 10px;
            padding-left: 10px;
          }
          `);
    },
    /**
     * 显示评论的弹窗
     * @param element
     */
    showReplyDialog(element: HTMLElement) {
        let contentElement = element.closest(
            "div.post-item[data-v-74eb13e2]"
        ) as any;
        let data = {} as NestedObjectWithToString;
        if (contentElement && contentElement["data-whitesev"]) {
            data = contentElement["data-whitesev"];
        }
        log.success(["data-whitesev数据", data]);
        /* 当前评论数据信息JSON */
        let currentCommentData =
            data["pageCommentList"]["commentList"][data["userPostId"]][
            "comment_info"
            ] as NestedObjectWithToString;
        log.success(["当前评论数据信息JSON", currentCommentData]);
        /* 楼中楼评论的总共数量 */
        let currentCommentListNum =
            data["pageCommentList"]["commentList"][data["userPostId"]][
            "comment_num"
            ];
        /* 用户信息JSON */
        let userList = data["pageCommentList"]["userList"];
        let mainUserAvatar = data["userAvatar"];
        let otherCommentsHTML = "";
        let userAvatarHostName = new URL(mainUserAvatar).hostname;
        let userAvatarPath = new URL(mainUserAvatar).pathname.split("/")[1];
        let landlordInfo = TiebaCore.getLandlordInfo();
        log.success(["头像加密值路径是", userAvatarPath]);
        log.success(["本帖楼主的信息", landlordInfo]);
        currentCommentData.forEach((item: any) => {
            /* 根据user_id获取用户映射的信息 */
            let itemUserInfo = userList[item["user_id"]];
            /* 用户id值 */
            let userPortrait = itemUserInfo["portrait"];
            /* 判断是否是楼主 */
            let isLandlord = Boolean(
                landlordInfo && landlordInfo.id === item["user_id"]
            );
            /* 获取时间差 */
            let itemUserCommentTime =
                utils.getDaysDifference(item["now_time"] * 1000, void 0, "auto") +
                "前";
            /* 用户ip？好像没有 */
            let itemUserCommentIp = "";
            if (item["location"] && item["location"]["name"]) {
                itemUserCommentIp = item["location"]["name"];
            }
            if (userAvatarHostName === "imgsa.baidu.com") {
                userAvatarHostName = "gss0.bdstatic.com";
                userAvatarPath = "6LZ1dD3d1sgCo2Kml5_Y_D3";
            }
            let itemUserAvatar = `https://${userAvatarHostName}/${userAvatarPath}/sys/portrait/item/${userPortrait}`;
            if (userAvatarPath === "sys") {
                itemUserAvatar = itemUserAvatar.replace(
                    "/sys/sys/portrait/item/",
                    "/sys/portrait/item/"
                );
            }
            /* 获取用户的关注的吧 */
            let userLikeForum = itemUserInfo?.["card"]?.["like_forum"];
            let lzlUserForumLevel = -1;
            if (userLikeForum) {
                Object.keys(userLikeForum).forEach((itemForumLevel) => {
                    let itemForumInfo = userLikeForum[itemForumLevel];
                    if (
                        itemForumInfo["forum_list"] &&
                        Array.isArray(itemForumInfo["forum_list"]) &&
                        itemForumInfo["forum_list"].includes(TiebaData.forumName)
                    ) {
                        lzlUserForumLevel = itemForumLevel as unknown as number;
                    }
                });
            }
            otherCommentsHTML += `
            <div class="whitesev-reply-dialog-sheet-other-content-item">
              <div class="whitesev-reply-dialog-user-line" data-portrait="${userPortrait}">
                <div class="whitesev-reply-dialog-avatar" style="background-image: url(${itemUserAvatar});"></div>
                <div class="whitesev-reply-dialog-user-info">
                  <div class="whitesev-reply-dialog-user-username">
                    ${item["show_nickname"]}
                    ${isLandlord
                    ? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>`
                    : ""
                }
                    ${lzlUserForumLevel &&
                    lzlUserForumLevel >= 0 &&
                    PopsPanel.getValue("baidu_tieba_show_forum_level")
                    ? `
                        <div class="forum-level-container">
                          <span class="forum-level" data-level="${lzlUserForumLevel}">Lv.${lzlUserForumLevel}</span>
                        </div>`
                    : ""
                }
                  </div>
                </div>
              </div>
              <div class="whitesev-reply-dialog-user-comment">${item["content"]
                }</div>
              <div class="whitesev-reply-dialog-user-desc-info">
                  <span data-time="">${itemUserCommentTime}</span>
                  <span data-ip="">${itemUserCommentIp}</span>
              </div>
            </div>
            `;
        });
        log.success(["显示评论的弹窗", data]);
        let dialog = DOMUtils.createElement("div", {
            id: "whitesev-reply-dialog",
            innerHTML: `
            <div class="whitesev-reply-dialog-bg"></div>
            <div class="whitesev-reply-dialog-sheet" style="height: ${document.documentElement.clientHeight * 0.92
                }px;">
              <div class="whitesev-reply-dialog-sheet-title">
                <div class="whitesev-reply-dialog-close">
                  <svg t="1694574625629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2306" width="20" height="20"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z" fill="#444444" p-id="2307"></path></svg>
                </div>
                ${data.userFloor}楼的回复
              </div>
              <div class="whitesev-reply-dialog-sheet-content">
              <div class="whitesev-reply-dialog-sheet-main-content">
                  <div class="whitesev-reply-dialog-user-line" data-portrait="${data["userPortrait"]
                }">
                    <div class="whitesev-reply-dialog-avatar" style="background-image: url(${data["userAvatar"]
                });"></div>
                    <div class="whitesev-reply-dialog-user-info">
                      <div class="whitesev-reply-dialog-user-username">${data["userName"]
                }</div>
                      ${data["userForumLevel"] &&
                    data["userForumLevel"] >= 0 &&
                    PopsPanel.getValue("baidu_tieba_show_forum_level")
                    ? `
                          <div class="forum-level-container">
                            <span class="forum-level" data-level="${data["userForumLevel"]}">Lv.${data["userForumLevel"]} ${data["userForumLevelName"]}</span>
                          </div>`
                    : ""
                }
                    </div>
                  </div>
                  <div class="whitesev-reply-dialog-user-comment">${data["userComment"]
                }</div>
                  <div class="whitesev-reply-dialog-user-desc-info" style="border-bottom: none;">
                      <span data-floor-info="">${data["userFloor"]}</span>
                      <span data-time="">${data["userCommentTime"]}</span>
                      <span data-ip="">${data["userIpPosition"]}</span>
                  </div>
              </div>
              <div class="whitesev-reply-dialog-sheet-main-content-bottom-line"></div>
              <div class="whitesev-reply-dialog-sheet-other-content">
                <div class="whitesev-reply-dialog-sheet-comment-num">${currentCommentListNum}条回复</div>
                ${otherCommentsHTML}
              </div>
              </div>
            </div>
            `,
        });

        let dialogTitleElement = dialog.querySelector(
            ".whitesev-reply-dialog-sheet-title"
        ) as HTMLDivElement;
        let dialogContentElement = dialog.querySelector(
            ".whitesev-reply-dialog-sheet-content"
        ) as HTMLDivElement;
        let dialogOhterContentElement = dialog.querySelector(
            ".whitesev-reply-dialog-sheet-other-content"
        ) as HTMLDivElement;
        /**
         * 设置浏览器历史地址
         */
        function popstateEvent() {
            log.success("触发popstate事件");
            resumeBack();
        }

        /**
         * 禁止浏览器后退按钮
         */
        function banBack() {
            /* 监听地址改变 */
            log.success("监听地址改变");
            CommonUtil.getVue(TiebaComment.vueRootView)?.$router.push("/seeLzlReply");
            DOMUtils.on(window, "popstate", popstateEvent);
        }

        /**
         * 允许浏览器后退并关闭小窗
         */
        async function resumeBack() {
            DOMUtils.off(window, "popstate", popstateEvent);
            log.success("浏览器地址后退，并关闭小窗");
            closeDialogByUrlChange();
            while (1) {
                if (
                    CommonUtil.getVue(TiebaComment.vueRootView)?.$router.history.current
                        .fullPath === "/seeLzlReply"
                ) {
                    log.info("后退！");
                    CommonUtil.getVue(TiebaComment.vueRootView)?.$router.back();
                    await utils.sleep(250);
                } else {
                    return;
                }
            }
        }

        /**
         * 关闭楼中楼弹窗
         * @param {Event|undefined} event 事件
         */
        function closeDialog() {
            dialog.removeAttribute("data-on");
            DOMUtils.on(dialog, utils.getTransitionEndNameList() as DOMUtils_EventType[], function () {
                DOMUtils.off(dialog, utils.getTransitionEndNameList() as DOMUtils_EventType[]);
                log.success("关闭楼中楼回复弹窗_click");
                dialog.remove();
                if (PopsPanel.getValue("baidu_tieba_lzl_ban_global_back")) {
                    resumeBack();
                }
            });
        }
        /**
         * 关闭楼中楼弹窗(来自url改变)
         */
        function closeDialogByUrlChange() {
            dialog.removeAttribute("data-on");
            DOMUtils.on(dialog, utils.getTransitionEndNameList() as DOMUtils_EventType[], function () {
                DOMUtils.off(dialog, utils.getTransitionEndNameList() as DOMUtils_EventType[]);
                log.success("关闭楼中楼回复弹窗_urlchange");
                dialog.remove();
            });
        }
        /* 关闭图标的点击事件 */
        DOMUtils.on(
            dialog.querySelector(".whitesev-reply-dialog-close"),
            "click",
            closeDialog
        );
        /* 点击遮罩层则关闭弹窗 */
        DOMUtils.on(
            dialog.querySelector(".whitesev-reply-dialog-bg"),
            "click",
            closeDialog
        );
        /* 处理评论的头像点击新标签页打开主页 */
        DOMUtils.on(
            dialog,
            "click",
            ".whitesev-reply-dialog-avatar",
            function (event) {
                window.open(
                    "/home/main?id=" +
                    (event.target as HTMLDivElement)
                        ?.closest(".whitesev-reply-dialog-user-line")
                        ?.getAttribute("data-portrait"),
                    "_blank"
                );
            }
        );
        /* 处理评论的名字点击新标签页打开主页 */
        DOMUtils.on(
            dialog,
            "click",
            ".whitesev-reply-dialog-user-info",
            function (event) {
                window.open(
                    "/home/main?id=" +
                    (event.target as HTMLDivElement)
                        ?.closest(".whitesev-reply-dialog-user-line")
                        ?.getAttribute("data-portrait"),
                    "_blank"
                );
            }
        );
        /* 去除楼中楼回复@的超链接错误跳转 */
        dialog
            .querySelectorAll(".whitesev-reply-dialog-user-comment a[portrait]")
            .forEach((item) => {
                item.setAttribute(
                    "href",
                    "/home/main?id=" + item.getAttribute("portrait")
                );
                item.removeAttribute("onclick");
                item.removeAttribute("onmouseover");
                item.removeAttribute("onmouseout");
            });
        const lzlLoadingView = new LoadingView(false);
        /* 初始页数为2 */
        let lzlPage = 2;
        /* 处理楼中楼的滚动加载更多回复 */
        async function lzlReplyCommentScrollEvent(event: Event) {
            let scrollElement = event.target as HTMLElement;
            if (
                scrollElement.scrollTop + scrollElement.clientHeight + 50 <
                scrollElement.scrollHeight
            ) {
                return;
            }
            log.success("加载更多回复");
            lzlLoadingView.show();
            let replyInfo = await TiebaComment.getLzlCommentReply(
                TiebaComment.param_tid,
                data["userPostId"],
                lzlPage
            );
            log.success(["加载更多回复的数据", replyInfo]);
            if (replyInfo === "暂无更多回复") {
                log.error("暂无更多回复");
                lzlLoadingView.setText("暂无更多回复");
                DOMUtils.off(
                    dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
                    "scroll"
                );
                log.error("取消绑定楼中楼scroll监听事件【下一页】");
                return;
            } else if (typeof replyInfo === "string") {
                lzlLoadingView.setText(replyInfo);
                return;
            }
            let commentHTML = "";
            replyInfo["data"].forEach((item) => {
                /* 判断是否是楼主 */
                let isLandlord = false;
                if (landlordInfo) {
                    // @ts-ignore
                    if (landlordInfo.id === item["user_id"]) {
                        isLandlord = true;
                    } else if (
                        utils.isNotNull(item["userPortrait"]) &&
                        (landlordInfo.portrait as string).includes(item["userPortrait"])
                    ) {
                        /* 用includes是因为landlordInfo.portrait获取到的后面可能会带时间参数?t=1660430754 */
                        isLandlord = true;
                    }
                }
                commentHTML += `
              <div class="whitesev-reply-dialog-sheet-other-content-item" data-lazy-load-level="true" data-username="${item["userName"]
                    }">
                <div class="whitesev-reply-dialog-user-line" data-portrait="${item["userPortrait"]
                    }">
                  <div class="whitesev-reply-dialog-avatar" style="background-image: url(${item["userAvatar"]
                    });"></div>
                  <div class="whitesev-reply-dialog-user-info">
                    <div class="whitesev-reply-dialog-user-username">
                    ${item["userShowName"]}
                    ${isLandlord
                        ? `<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>`
                        : ""
                    }
                    </div>
                  </div>
                </div>
                <div class="whitesev-reply-dialog-user-comment">${item["userReplyContent"]
                    }</div>
                <div class="whitesev-reply-dialog-user-desc-info">
                    <span data-time="">${item["userReplyTime"]}</span>
                    <span data-ip=""></span>
                </div>
              </div>
              `;
            });
            if (
                scrollElement.querySelector("." + loadingView.config.className)
            ) {
                DOMUtils.before(
                    scrollElement.querySelector("." + loadingView.config.className) as HTMLDivElement,
                    commentHTML
                );
            } else {
                DOMUtils.append(
                    scrollElement.querySelector(
                        ".whitesev-reply-dialog-sheet-other-content"
                    ) as HTMLDivElement,
                    commentHTML
                );
            }
            /* 懒加载用户本吧等级 */
            if (PopsPanel.getValue("baidu_tieba_show_forum_level")) {
                document
                    .querySelectorAll(
                        ".whitesev-reply-dialog-sheet-other-content-item[data-lazy-load-level]"
                    )
                    .forEach(async (ele) => {
                        if (!ele.hasAttribute("data-username")) {
                            return;
                        }
                        let userInfo = await TieBaApi.getUserHomeInfo({
                            un: ele.getAttribute("data-username") as string,
                        });
                        if (!userInfo) {
                            return;
                        }
                        let grade = userInfo?.["honor"]?.["grade"];
                        ele.removeAttribute("data-lazy-load-level");
                        if (!grade) {
                            return;
                        }
                        Object.keys(grade).forEach((likeForumLevel) => {
                            let likeForumInfo = grade[likeForumLevel];
                            if (
                                likeForumInfo["forum_list"] &&
                                Array.isArray(likeForumInfo["forum_list"]) &&
                                likeForumInfo["forum_list"].includes(TiebaData.forumName as string)
                            ) {
                                let $userInfo = ele.querySelector(
                                    ".whitesev-reply-dialog-user-info"
                                );
                                DOMUtils.append(
                                    $userInfo as HTMLDivElement,
                                    `
                                    <div class="forum-level-container">
                                        <span class="forum-level" data-level="${likeForumLevel}">Lv.${likeForumLevel}</span>
                                    </div>`
                                );
                            }
                        });
                    });
            }
            /* 去除楼中楼回复@的超链接错误跳转 */
            scrollElement
                .querySelectorAll(
                    ".whitesev-reply-dialog-user-comment a[portrait]"
                )
                .forEach((item) => {
                    item.setAttribute(
                        "href",
                        "/home/main?id=" + item.getAttribute("portrait")
                    );
                    item.removeAttribute("onclick");
                    item.removeAttribute("onmouseover");
                    item.removeAttribute("onmouseout");
                });

            if (!replyInfo["nextPage"]) {
                log.error("暂无更多回复");
                lzlLoadingView.setText("暂无更多回复");
                DOMUtils.off(
                    dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
                    "scroll"
                );
                log.error("取消绑定楼中楼scroll监听事件【下一页】");
                return;
            }
            // @ts-ignore
            lzlPage = replyInfo["nextPage"];
        }
        let lzlScrollEventLock = new utils.LockFunction(
            lzlReplyCommentScrollEvent,
            this
        );
        /* 监听楼中楼内滚动 */
        DOMUtils.on(
            dialog.querySelector(".whitesev-reply-dialog-sheet-content"),
            "scroll",
            lzlScrollEventLock.run
        );
        log.success("绑定楼中楼scroll监听事件【下一页】");
        /* 插入楼中楼弹窗 */
        document.body.appendChild(dialog);

        DOMUtils.append(
            dialog.querySelector(".whitesev-reply-dialog-sheet-other-content") as HTMLDivElement,
            lzlLoadingView.getLoadingViewElement()
        );
        lzlLoadingView
            .getLoadingViewElement()
            .style.setProperty("color", "#c5c5c5");
        lzlLoadingView
            .getLoadingViewElement()
            .style.setProperty("font-size", "14px");
        lzlLoadingView.setText("加载更多");
        lzlLoadingView.hide();
        /* 延迟显示 */
        setTimeout(() => {
            dialog.setAttribute("data-on", "true");
            /* 修改根据标题高度设置内容margin-bottom */
            dialogContentElement.style.setProperty(
                "height",
                `calc(100% - ${DOMUtils.height(dialogTitleElement)}px)`
            );
            this.vueRootView = document.querySelector(".main-page-wrap") as HTMLDivElement;
            log.success(["成功获取Vue根元素", CommonUtil.getVue(this.vueRootView)]);
            if (PopsPanel.getValue("baidu_tieba_lzl_ban_global_back")) {
                banBack();
            }
        }, 0);
    },
    /**
     * 获取楼中楼评论
     * @param tid 帖子id
     * @param pid 回复主体id
     * @param pn 当前页
     */
    async getLzlCommentReply(tid = "", pid = "", pn: string | number = 1) {
        let getResp = await httpx.get({
            url: TiebaUrlApi.getPost(
                `comment?tid=${tid}&pid=${pid}&pn=${pn}&t=${new Date().getTime()}${TiebaComment.extraSearchSignParams
                }`
            ),
            headers: {
                "User-Agent": utils.getRandomPCUA(),
                Host: "tieba.baidu.com",
                Referer: window.location.href,
            },
        });
        if (!getResp.status) {
            log.error(getResp);
            return "请求失败";
        }
        let respData = getResp.data;
        log.success(respData);
        let parseDOM = DOMUtils.parseHTML(respData.responseText, false, true);
        let lzlPostList = Array.from(parseDOM.querySelectorAll("li.lzl_single_post")) as HTMLLIElement[];
        if (!lzlPostList.length) {
            return "暂无更多回复";
        }
        let result = {
            data: [],
        } as {
            data: CommentData[],
            nextPage?: number,
        };
        lzlPostList.forEach((item) => {
            let dataFieldJSON = utils.toJSON(item.getAttribute("data-field"));
            let userName = dataFieldJSON["user_name"];
            let userShowName = dataFieldJSON["showname"];
            let userPostId = dataFieldJSON["spid"];
            let userPortrait = dataFieldJSON["portrait"];
            let userHomeUrl = (item.querySelector("a[data-field]") as HTMLAnchorElement)?.href;
            let userAvatar = (item.querySelector("a[data-field] img") as HTMLImageElement)?.src;
            let userReplyContent = (item.querySelector("span.lzl_content_main") as HTMLSpanElement).innerHTML;
            let userReplyTimeStr = (item.querySelector("span.lzl_time") as HTMLSpanElement).innerHTML;
            let userReplyTimeNumber = utils.formatToTimeStamp(userReplyTimeStr);
            let userReplyTime = utils.getDaysDifference(new Date().getTime(), userReplyTimeNumber, "auto") + "前";
            result["data"].push({
                userName: userName,
                userShowName: userShowName,
                userPostId: userPostId,
                userPortrait: userPortrait,
                userHomeUrl: userHomeUrl,
                userAvatar: userAvatar,
                userReplyContent: userReplyContent,
                userReplyTime: userReplyTime,
            });
        });
        parseDOM.querySelectorAll("p.j_pager a").forEach((item) => {
            if (item?.textContent?.trim() === "下一页") {
                (result as any)["nextPage"] = parseInt(
                    item.getAttribute("href")?.replace("#", "") as string
                );
            }
        });
        if (!result["data"].length) {
            return "解析回复失败";
        } else {
            return result;
        }
    },
    /**
     * 获取第XX页的评论（不包括楼中楼评论）
     * @param {string} url
     * @returns {?HTMLElement|string}
     */
    async getPageComment(url: string) {
        let getDetails: HttpxDetails = {
            url: url,
            headers: {
                "User-Agent": utils.getRandomPCUA(),
                Referer: "tieba.baidu.com",
            },
        };
        if (PopsPanel.getValue("baidu_tieba_request_with_cookie")) {
            log.success("贴吧-发送请求携带cookie");
            (getDetails.headers as any)["Cookie"] = document.cookie;
        }
        let getResp = await httpx.get(getDetails);
        let respData = getResp.data;
        log.success(["获取评论", getResp]);
        if (getResp.status) {
            let pageCommentHTMLElement = DOMUtils.parseHTML(
                respData.responseText,
                true,
                true
            );
            if (
                pageCommentHTMLElement.title === "百度安全验证" ||
                respData.finalUrl.startsWith("https://wappass.baidu.com")
            ) {
                log.error("触发百度安全验证 👇" + respData.finalUrl);
                log.error(respData);
                return "触发百度安全验证";
                /* let gotoBaiduWappass = confirm("触发百度安全验证，是否前往："+respData.finalUrl);
                if(gotoBaiduWappass){
                  window.location.href = respData.finalUrl;
                } */
            } else {
                return pageCommentHTMLElement;
            }
        } else if (getResp.type === "onerror") {
            if (
                typeof (respData as any).error === "string" &&
                (respData as any).error.match("wappass.baidu.com")
            ) {
                let url = (respData as any).error.match(/"(.*?)"/)[1];
                log.error("触发百度校验: " + url);
                let gotoBaiduWappass = confirm(
                    "触发百度安全验证，是否前往：" + url
                );
                if (gotoBaiduWappass) {
                    window.location.href = url;
                }
            } else {
                log.error("获取评论数据失败 👇");
                log.error(respData);
            }
        }
    },
    /**
     * 获取第XX页的所有评论
     * @param url
     */
    async getPageCommentList(url: string) {
        let getResp = await httpx.get({
            url: url,
            headers: {
                Accept: "application/json, text/javascript, */*; q=0.01",
                "User-Agent": utils.getRandomPCUA(),
                Referer: "tieba.baidu.com",
            },
        });
        log.info(["获取楼中楼评论", getResp]);
        let respData = getResp.data;
        if (getResp.status) {
            let data = utils.toJSON(respData.responseText);
            log.success(["帖子评论信息JSON", data]);
            return {
                commentList: data["data"]["comment_list"],
                userList: data["data"]["user_list"],
            };
        } else if (getResp.type === "onerror") {
            log.error("获取楼中楼评论数据失败 👇");
            log.error(getResp);
        }
    },
    /**
     * 插入加载中的html
     */
    insertLoadingHTML() {
        if (!loadingView.isExists()) {
            log.info("插入loading");
            loadingView.initLoadingView();
            loadingView.hide();
            (document.querySelector(".main-page-wrap") as HTMLDivElement).appendChild(loadingView.getLoadingViewElement());
        }
    },

    /**
     * 插入只看楼主的按钮
     */
    insertOnlyLZ() {
        let replyRightContainer = document.querySelector(
            ".reply-right-container"
        );
        if (!replyRightContainer) {
            log.error("元素.reply-right-container不存在");
            return;
        }
        GM_addStyle(`
          .white-only-lz{
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -moz-box-align: center;
            -webkit-align-items: center;
            -moz-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            line-height: .24rem;
            border-radius: .14rem;
            font-size: .13rem;
            color: #614ec2;
            margin-right: 16px;
          }
          .white-only-lz-qx:before {
            content: "取消";
          }
          .white-only-lz-none {
            display: none;
          }
          `);
        let onlyLzInnerElement = DOMUtils.createElement("div", {
            className: "white-only-lz",
            textContent: "只看楼主",
        });
        replyRightContainer.appendChild(onlyLzInnerElement);
        DOMUtils.on(
            document.querySelector(".white-only-lz"),
            "click",
            (event) => {
                TiebaComment.displayComment(
                    Array.from((event.currentTarget as HTMLElement).classList)
                );
            }
        );
    },
    /**
     * 插入 正序=倒序的按钮
     */
    insertReverseBtn() {
        let replySwitchElement = document.querySelector("#replySwitch");
        if (!replySwitchElement) {
            log.error("元素#replySwitch不存在");
            return;
        }
        GM_addStyle(`
          .reply-right-container {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }
          .btn-comment-reverse-pack{
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: inline-block;
            white-space: nowrap;
            text-align: center;
            height: .29rem;
            line-height: .29rem;
            border-radius: .15rem;
            color: #a3a2a8;
            font-size: 13px;
            background-color: #f3f2f5;
          }
          .btn-comment-reverse-pack .tab-item{
            display: inline-block;
            width: .48rem;
          }
          .btn-comment-reverse-pack .selected-tab-item{
            position: relative;
            z-index: 99;
            color: #141414;
          }
          .btn-comment-reverse-pack .selected-tab-item:after{
            content: "";
            z-index: -99;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            display: block;
            height: .29rem;
            width: .48rem;
            border-radius: .15rem;
            border: .01rem solid #f3f2f5;
            background-color: #fff;
            color: #141414;
          }
          `);
        let replyRightContainer = DOMUtils.createElement("div", {
            className: "reply-right-container",
        });
        let btnElement = DOMUtils.createElement("div", {
            className: "btn-comment-reverse-pack",
            innerHTML: `
              <span class="tab-item selected-tab-item" data-positive>正序</span>
              <span class="tab-item" data-reverse>倒序</span>`,
        });
        /**
         * 正序
         */
        const positiveElement = btnElement.querySelector(
            ".tab-item[data-positive]"
        ) as HTMLSpanElement;
        /**
         * 倒序
         */
        const reverseElement = btnElement.querySelector(
            ".tab-item[data-reverse]"
        ) as HTMLSpanElement;
        replyRightContainer.appendChild(btnElement);
        replySwitchElement.appendChild(replyRightContainer);
        let isReverse = false;
        function clearSelected() {
            positiveElement.classList.remove("selected-tab-item");
            reverseElement.classList.remove("selected-tab-item");
        }
        DOMUtils.on(btnElement, "click", () => {
            isReverse = !isReverse;
            TiebaComment.removeScrollListener();
            DOMUtils.remove(".post-item");
            clearSelected();
            if (isReverse) {
                /* 倒序 */
                reverseElement.classList.add("selected-tab-item");
                positiveElement.classList.remove("selected-tab-item");
                reverseElement.classList.add("selected-tab-item");
                TiebaComment.mainReverse();
                log.info("获取评论===>倒序");
            } else {
                /* 正序 */
                positiveElement.classList.add("selected-tab-item");
                reverseElement.classList.remove("selected-tab-item");
                positiveElement.classList.add("selected-tab-item");
                TiebaComment.mainPositive();
                log.info("获取评论===>正序");
            }
        });
    },
    /**
     * 动态显示只看楼主
     * @param classlist
     */
    displayComment(classlist: string[]) {
        if (classlist.includes("white-only-lz-qx")) {
            (document.querySelector(".white-only-lz") as HTMLDivElement).classList.remove("white-only-lz-qx");
            document.querySelectorAll(".post-item").forEach((ele) => {
                ele.classList.remove("white-only-lz-none");
            });
        } else {
            (document.querySelector(".white-only-lz") as HTMLDivElement).classList.add("white-only-lz-qx");
            document.querySelectorAll(".post-item").forEach((ele) => {
                let landlord = ele.getAttribute("landlord");
                if (landlord == "0") {
                    ele.classList.add("white-only-lz-none");
                }
            });
        }
    },
    /**
     * 查看-正序
     */
    async mainPositive() {
        TiebaComment.param_tid = TiebaCore.getCurrentForumPostTid();
        if (!TiebaComment.param_tid) {
            log.error("贴吧：未找到本页参数p");
            return;
        }
        TiebaComment.param_forum_id = TiebaPageDataApi.getForumId();
        if (!TiebaComment.param_forum_id) {
            let recommendItemElement = await utils.waitNode(".recommend-item");
            await utils.waitPropertyByInterval(
                recommendItemElement,
                () => {
                    return recommendItemElement.hasAttribute("data-banner-info");
                },
                250,
                10000
            );
            TiebaComment.param_forum_id = TiebaPageDataApi.getForumId();
        }
        if (!TiebaComment.param_forum_id) {
            return log.error("贴吧：获取参数data-banner-info失败");
        }

        let timeStamp = Date.now();
        TiebaComment.page = 1;
        loadingView.setText("Loading...", true);
        loadingView.show();
        let url = TiebaUrlApi.getPost(
            `totalComment?t=${timeStamp}&tid=${TiebaComment.param_tid}&fid=${TiebaComment.param_forum_id}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
        );
        let pageUrl = TiebaUrlApi.getPost(
            `${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
        );
        let pageDOM = await TiebaComment.getPageComment(pageUrl);
        let pageCommentList = await TiebaComment.getPageCommentList(
            url
        );
        if (pageCommentList == null) {
            loadingView.setText("获取评论失败");
            log.error("评论数据获取undefined");
            return;
        }
        if (
            !pageDOM ||
            typeof pageDOM === "string" ||
            !pageCommentList.commentList
        ) {
            loadingView.setText(
                typeof pageDOM === "string" ? pageDOM : "获取评论失败"
            );
            log.error("评论数据获取失败");
            return;
        }
        log.info("成功获取第一页评论和楼中楼评论");
        let jumpInputBrightDOM = pageDOM.querySelector(".jump_input_bright") as HTMLElement;
        TiebaComment.maxPage = 1;
        if (jumpInputBrightDOM) {
            TiebaComment.maxPage = parseInt(
                jumpInputBrightDOM.getAttribute("max-page") as string
            );
            TiebaComment.setNextPageScrollListener();
            log.info("当前为多页，执行监听");
        } else {
            let comments = Array.from(pageDOM.querySelectorAll(".l_post.l_post_bright")) as HTMLElement[];
            document
                .querySelectorAll(".post-item")
                .forEach((ele) => ele.remove());
            comments.shift();
            TiebaComment.floor_num = 1;
            comments.forEach((element) => {
                TiebaComment.insertNewCommentInnerElement(
                    TiebaComment.getNewCommentInnerElement(
                        element,
                        pageCommentList
                    )
                );
                TiebaComment.floor_num++;
            });
            loadingView.hide();
        }
        log.info(
            `共 ${TiebaComment.maxPage} 页评论，当前所在 ${TiebaComment.page} 页`
        );
    },
    /**
     * 查看-倒序
     */
    async mainReverse() {
        TiebaComment.param_tid = TiebaCore.getCurrentForumPostTid();
        if (!TiebaComment.param_tid) {
            log.error("贴吧：未找到本页参数p");
            return;
        }
        TiebaComment.param_forum_id = TiebaPageDataApi.getForumId();
        if (!TiebaComment.param_forum_id) {
            let recommendItemElement = await utils.waitNode(".recommend-item");
            await utils.waitPropertyByInterval(
                recommendItemElement,
                () => {
                    return recommendItemElement.hasAttribute("data-banner-info");
                },
                250,
                10000
            );
            TiebaComment.param_forum_id = TiebaPageDataApi.getForumId();
        }
        if (!TiebaComment.param_forum_id) {
            return log.error("贴吧：获取参数data-banner-info失败");
        }

        let timeStamp = Date.now();
        TiebaComment.page = 1;
        loadingView.setText("Loading...", true);
        loadingView.show();
        let url = TiebaUrlApi.getPost(
            `totalComment?t=${timeStamp}&tid=${TiebaComment.param_tid}&fid=${TiebaComment.param_forum_id}&pn=${TiebaComment.page}&see_lz=0${TiebaComment.extraSearchSignParams}`
        );
        let pageUrl = TiebaUrlApi.getPost(
            `${TiebaComment.param_tid}?pn=${TiebaComment.page}${TiebaComment.extraSearchSignParams}`
        );
        let pageDOM = await TiebaComment.getPageComment(pageUrl);
        let pageCommentList = await TiebaComment.getPageCommentList(
            url
        );
        if (pageCommentList == null) {
            loadingView.setText("获取评论失败")
            log.error("评论数据获取为undefined");
            return;
        }
        if (
            !pageDOM ||
            typeof pageDOM === "string" ||
            !pageCommentList.commentList
        ) {
            loadingView.setText(
                typeof pageDOM === "string" ? pageDOM : "获取评论失败"
            )
            log.error("评论数据获取失败");
            return;
        }
        log.info("成功获取第一页评论和楼中楼评论");
        TiebaComment.maxPage = 1;
        let jumpInputBrightDOM = pageDOM.querySelector(".jump_input_bright") as HTMLDivElement;
        if (jumpInputBrightDOM) {
            TiebaComment.maxPage = parseInt(
                jumpInputBrightDOM.getAttribute("max-page") as string
            );
            TiebaComment.page = TiebaComment.maxPage;
            TiebaComment.setPrevPageScrollListener();
            log.info("当前为多页");
        } else {
            let comment = Array.from(pageDOM.querySelectorAll(".l_post.l_post_bright")) as HTMLElement[];
            TiebaComment.maxPage = 1;
            document
                .querySelectorAll(".post-item")
                .forEach((ele) => ele.remove());
            comment.shift();

            TiebaComment.floor_num = 1;
            comment.reverse();
            comment.forEach((element) => {
                TiebaComment.insertNewCommentInnerElement(
                    TiebaComment.getNewCommentInnerElement(
                        element,
                        pageCommentList
                    )
                );
                TiebaComment.floor_num++;
            });
            loadingView.hide();
        }
        log.info(
            `共 ${TiebaComment.maxPage} 页评论，当前所在 ${TiebaComment.page} 页`
        );
    },
};


export {
    TiebaComment
}