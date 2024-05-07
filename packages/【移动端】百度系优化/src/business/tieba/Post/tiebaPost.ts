import { DOMUtils, Qmsg, Viewer, httpx, log, utils } from "@/env";
import { PopsPanel } from "@/ui";
import { TiebaComment } from "./comment";
import { TiebaData } from "../Home/data";
import { CommonUtil } from "@/util/CommonUtil";
import { TieBaApi } from "../api/TieBaApi";
import { TiebaCore } from "../core";

interface PostImg {
    bsize: string;
    origin_size: number | string;
    origin_src: string;
    size: string;
    src: string;
    type: number
}

const TiebaPost = {
    mainPostImgList: [] as PostImg[],
    init() {
        PopsPanel.execMenu("baidu_tieba_optimize_see_comments", () => {
            log.success("优化查看评论");
            TiebaComment.init();
        });
        PopsPanel.execMenu("baidu_tieba_optimize_image_preview", () => {
            log.success("优化图片预览");
            TiebaPost.optimizeImagePreview();
        });
        PopsPanel.execMenu("baidu_tieba_repairErrorThread", () => {
            log.success("强制查看-贴子不存在或者已被删除");
            TiebaPost.repairErrorThread();
        });
    },
    /**
     * 注册全局贴吧图片点击预览(只预览通过贴吧上传的图片，非其它图床图片)
     */
    optimizeImagePreview() {
        /**
         * 查看图片
         * @param {Array} imgList
         * @param {Number} _index_
         */
        function viewIMG(imgList: string[] = [], _index_ = 0) {
            let viewerULNodeHTML = "";
            imgList.forEach((item) => {
                viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
            });
            let viewerULNode = DOMUtils.createElement("ul", {
                innerHTML: viewerULNodeHTML,
            });
            let viewer = new Viewer(viewerULNode, {
                inline: false,
                url: "data-src",
                zIndex: utils.getMaxZIndex() + 100,
                hidden: () => {
                    viewer.destroy();
                },
            }) as NestedObjectWithToString;
            _index_ = _index_ < 0 ? 0 : _index_;
            viewer.view(_index_);
            viewer.zoomTo(1);
            viewer.show();
        }
        DOMUtils.on(document, "click", "img", function (event) {
            let clickElement = event.target as HTMLImageElement;
            let clickParentElement = clickElement.parentElement as HTMLDivElement;
            let imgSrc =
                clickElement.getAttribute("data-src") ||
                clickElement.getAttribute("src");
            if (
                clickParentElement.className === "viewer-canvas" ||
                clickParentElement.hasAttribute("data-viewer-action")
            ) {
                return;
            }
            if (
                imgSrc?.match(/^http(s|):\/\/(tiebapic|imgsa).baidu.com\/forum/g)
            ) {
                log.info(`点击图片👇`);
                log.info(clickElement);
                if (clickParentElement.className === "img-box") {
                    /* 帖子主体内的图片 */
                    let parentMain = clickElement.closest(
                        ".img-sudoku.main-img-sudoku"
                    );
                    log.info(parentMain);
                    if (!parentMain) {
                        viewIMG([imgSrc]);
                        return;
                    }
                    utils.preventEvent(event);
                    let lazyImgList: string[] = [];
                    if (TiebaPost.mainPostImgList.length) {
                        TiebaPost.mainPostImgList.forEach((item) => {
                            lazyImgList.push(item.src);
                        });
                    } else {
                        Array.from(parentMain.querySelectorAll("img.img")).forEach(
                            (item) => {
                                let _imgSrc_ =
                                    (item.getAttribute("data-src") ||
                                        item.getAttribute("src") as string);
                                log.info(`获取图片: ${_imgSrc_}`);
                                let imgUrlInfo = new URL(_imgSrc_);
                                if (imgUrlInfo.pathname.startsWith("/forum/")) {
                                    let picName = imgUrlInfo.pathname.split("/").pop() as string;
                                    let picIdSplit = picName.split(".");
                                    if (picIdSplit) {
                                        let picId = picIdSplit[0];
                                        if (TiebaData.imageMap.has(picId)) {
                                            _imgSrc_ = TiebaData.imageMap.get(picId) as string;
                                            log.success(["替换成高清图片", _imgSrc_]);
                                        }
                                    }
                                }
                                lazyImgList.push(_imgSrc_);
                            }
                        );
                    }

                    log.info("图片列表👇");
                    log.info(lazyImgList);
                    viewIMG(lazyImgList, lazyImgList.indexOf(imgSrc));
                } else if (
                    clickParentElement.className === "text-content"
                ) {
                    /* 评论区内的图片 */
                    let lazyImgList: string[] = [];
                    log.info(clickParentElement);
                    clickParentElement.querySelectorAll("img.BDE_Image").forEach((item) => {
                        let _imgSrc_ =
                            (item.getAttribute("data-src") || item.getAttribute("src") as string);
                        log.info(`获取图片: ${_imgSrc_}`);
                        let imgUrlInfo = new URL(_imgSrc_);
                        if (imgUrlInfo.pathname.startsWith("/forum/")) {
                            let picName = imgUrlInfo.pathname.split("/").pop();
                            let picIdSplit = picName?.split(".");
                            if (picIdSplit) {
                                let picId = picIdSplit[0];
                                if (TiebaData.imageMap.has(picId)) {
                                    _imgSrc_ = TiebaData.imageMap.get(picId) as string;
                                    log.success(["替换成高清图片", _imgSrc_]);
                                }
                            }
                        }
                        lazyImgList.push(_imgSrc_);
                    });
                    log.info("评论区图片列表👇");
                    log.info(lazyImgList);
                    viewIMG(lazyImgList, lazyImgList.indexOf(imgSrc));
                } else {
                    /* 单个图片预览 */
                    viewIMG([imgSrc]);
                }
            }
        });
        DOMUtils.ready(function () {
            utils.waitNodeWithInterval("div.img-sudoku", 10000).then(() => {
                utils
                    .waitNodeWithInterval("div.img-sudoku img", 10000)
                    .then(() => {
                        let imgSudoKuElement =
                            document.querySelector("div.img-sudoku") as HTMLDivElement;
                        let imgSudoKuImageElementList =
                            Array.from(imgSudoKuElement.querySelectorAll("img.img")) as HTMLImageElement[];
                        log.success([
                            "重构主内容的图片",
                            imgSudoKuElement,
                            imgSudoKuImageElementList,
                        ]);
                        imgSudoKuImageElementList.forEach((element) => {
                            if (element.hasAttribute("data-src")) {
                                element.src = element.getAttribute("data-src") as string;
                            }
                        });
                        /* 通过重新赋值innerHTML来覆盖原有的事件 */
                        imgSudoKuElement.innerHTML = imgSudoKuElement.innerHTML;
                    });
                utils
                    .waitVueByInterval(
                        () => {
                            return document.querySelector("div.img-sudoku") as HTMLElement;
                        },
                        (__vue__) => {
                            return __vue__?.imgs != null;
                        },
                        250,
                        10000
                    )
                    .then((isFind) => {
                        if (!isFind) {
                            return;
                        }
                        let imgSudoKuElement =
                            document.querySelector("div.img-sudoku") as HTMLDivElement;
                        TiebaPost.mainPostImgList = CommonUtil.getVue(imgSudoKuElement)?.imgs;
                        log.success([
                            "Vue上隐藏的帖子高清图片列表",
                            TiebaPost.mainPostImgList,
                        ]);
                    });
            });
        });
    },
    /**
     * 初始化帖子内图片信息
     */
    initPostImageInfo() {
        let forumName = TiebaCore.getCurrentForumName();
        let tid = TiebaCore.getCurrentForumPostTid();
        if (forumName && tid) {
            TieBaApi
                .getPictureGuide(forumName, tid)
                .then((result) => {
                    if (!result) {
                        log.error("获取图片信息失败");
                        return;
                    }
                    log.success(["请求本贴图片信息", result]);
                    Object.values(result["pic_list"]).forEach((item) => {
                        /* 图片id */
                        let id =
                            item?.["img"]?.["original"]?.["id"] ||
                            item?.["img"]?.["medium"]?.["id"] ||
                            item?.["img"]?.["screen"]?.["id"];
                        let pictureUrl =
                            item?.["img"]?.["original"]?.["waterurl"] ||
                            item?.["img"]?.["screen"]?.["waterurl"];

                        if (id != null && pictureUrl != null) {
                            TiebaData.imageMap.set(id, pictureUrl);
                        }
                    });
                });
        }
    },
    /**
     * 强制查看-贴子不存在或者已被删除
     */
    repairErrorThread() {
        /**
         * 获取页面信息
         */
        async function getPageInfo() {
            let getResp = await httpx.get(window.location.href, {
                headers: {
                    "User-Agent": utils.getRandomPCUA(),
                },
            });
            if (!getResp.status) {
                return;
            }
            log.info(getResp);
            let pageDOM = DOMUtils.parseHTML(
                getResp.data.responseText,
                true,
                true
            );
            let postListFirstElement = pageDOM.querySelector(
                "#j_p_postlist .l_post"
            );
            if (!postListFirstElement) {
                log.error("未找到#j_p_postlist .l_post元素");
                Qmsg.error("未找到#j_p_postlist .l_post元素");
                return;
            }
            if (!postListFirstElement.hasAttribute("data-field")) {
                log.error("未找到 data-field 属性");
                Qmsg.error("未找到 data-field 属性");
                return;
            }
            let field = utils.toJSON(
                postListFirstElement.getAttribute("data-field")
            );
            let PageData = null;
            let PageDataScriptString = "";
            Array.from(pageDOM.querySelectorAll("script")).forEach(
                (scriptElement) => {
                    if (scriptElement.innerHTML.includes("var PageData")) {
                        PageDataScriptString = `
                ${PageDataScriptString}

                ${scriptElement.innerHTML}

                `;
                    }
                }
            );
            if (PageDataScriptString === "") {
                log.error("未找到 PageData的script标签");
                Qmsg.error("未找到 PageData的script标签");
                return;
            }
            PageData = new Function(`
              ${PageDataScriptString}

              return PageData;
              `)();
            if (!PageData) {
                log.error("未找到 PageData");
                Qmsg.error("未找到 PageData");
                return;
            }
            let time =
                (pageDOM.querySelector(
                    "#j_p_postlist .post-tail-wrap span.tail-info:nth-child(6)"
                ) as HTMLSpanElement)?.innerText || "";
            if (utils.isNotNull(time)) {
                time = (utils.formatToTimeStamp(time) / 1000) as unknown as string;
            }
            return {
                field: field,
                PageData: PageData,
                time: time as unknown as number,
            };
        }
        /**
         * 获取帖子列表信息
         * @param field
         * @param PageData
         * @param time 帖子时间
         * @returns
         */
        function getPostList(field: NestedObjectWithToString, PageData: NestedObjectWithToString, time: number) {
            let data = {
                agree: {
                    agree_num: 0,
                    disagree_num: 0,
                },
                author: {
                    /* author.user_id */
                    id: field.author.user_id,
                    /* author.user_name */
                    name: field.author.user_name,
                    /* author.user_nickname */
                    name_show: field.author.user_nickname,
                    /* author.portrait */
                    portrait: field.author.portrait,
                    /* author.user_nickname */
                    show_nickname: field.author.user_nickname,
                    type: 1,
                    userhide: 0,
                },
                content: [
                    {
                        /* content.content */
                        text: field.content.content,
                        /* parseInt(content.type) */
                        type: parseInt(field.content.type),
                    },
                ],
                floor: 1,
                game_info: [null],
                /* content.post_id */
                id: parseInt(field.content.post_id),
                is_bub: 0,
                is_voice: 0,
                is_vote: 0,
                ptype: 0,
                reply_num: PageData.thread.reply_num,
                sub_post_number: 0,
                time: time,
                title: PageData.thread.title,
                index: 0,
            };
            let firstData = data;
            let secondData = data;
            secondData.floor = 3;
            return [firstData, secondData];
        }
        utils.waitNodeWithInterval(".app-view", 10000).then(async () => {
            await utils.waitPropertyByInterval(
                () => {
                    return CommonUtil.getVue(document.querySelector(".app-view"));
                },
                () => {
                    return (
                        typeof CommonUtil.getVue(document.querySelector(".app-view"))?.isErrorThread === "boolean"
                    );
                },
                void 0,
                10000
            );
            let appViewVue = CommonUtil.getVue(document.querySelector(".app-view"));
            if (!(appViewVue && appViewVue.isErrorThread)) {
                return;
            }
            /* 该帖子不能查看 */
            log.warn("该帖子不能查看 修复中...");
            Qmsg.info("该帖子不能查看 修复中...");
            let pageInfo = await getPageInfo();
            if (!pageInfo) {
                return;
            }
            log.info(["获取到的页面信息", pageInfo]);
            let postList = getPostList(
                pageInfo.field,
                pageInfo.PageData,
                pageInfo.time
            );
            appViewVue.postList = postList;
            appViewVue.postAuthorId = postList[0].author.id;
            appViewVue.thread = {
                agree: {
                    agree_num: 0,
                    disagree_num: 0,
                },
                collect_mark_pid: "0",
                collect_status: 0,
                create_time: postList[0].time,
                id: appViewVue.tid,
                is_frs_mask: 0,
                is_share_thread: 0,
                reply_num: postList[0].reply_num,
                robot_thread_type: 0,
                t_share_img: "",
                thread_type: 0,
                valid_post_num: 0,
                works_info: {},
            };
            appViewVue.forum = {
                /* PageData.forum.avatar */
                avatar: pageInfo.PageData.forum.avatar,
                /* PageData.forum.first_class */
                first_dir: pageInfo.PageData.forum.first_class,
                /* PageData.forum.id */
                id: pageInfo.PageData.forum.id,
                is_exists: 1,
                is_forbidden: 0,
                is_forum_merged: 0,
                /* PageData.forum.name */
                name: pageInfo.PageData.forum.name,
                /* PageData.forum.second_class */
                second_dir: pageInfo.PageData.forum.second_class,
            };
            /* 固定一下值吧，没测出什么作用 */
            appViewVue.postNum = 100;

            appViewVue.isErrorThread = false;
            setTimeout(() => {
                DOMUtils.append(
                    document.querySelector(
                        "div.app-view div.thread-main-wrapper .thread-text"
                    ) as HTMLDivElement,
                    postList[0].content[0].text
                );
            }, 300);
        });
    },
};

export {
    TiebaPost
}