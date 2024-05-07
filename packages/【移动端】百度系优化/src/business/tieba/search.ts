import { DOMUtils, httpx, loadingView, log, pops, utils } from "@/env";
import { TiebaComment } from "./Post/comment";
import { PopsPanel } from "@/ui";
import { TieBaApi, TiebaUrlApi } from "./api/TieBaApi";
import { TiebaData } from "./Home/data";
import { GM_addStyle } from "ViteGM";

interface SearchResultInfo {
    url: string;
    title: string;
    content: string;
    forum: string | null;
    author: string;
    authorHomeUrl: string;
    time: string | null;
    media: string[];
}

const TiebaSearch = {
    searchSuggestion: null as unknown as any,
    /**
     * 获取搜索建议
     * @param queryText 搜索内容
     * @async
     */
    async getSuggestion(queryText = "") {
        let getResp = await httpx.get({
            url: `https://tieba.baidu.com/suggestion?query=${queryText}&ie=utf-8&_=${new Date().getTime()}`,
            headers: {
                "User-Agent": utils.getRandomPCUA(),
                Accept: "application/json, text/javascript, */*; q=0.01",
                Host: "tieba.baidu.com",
                Referer: window.location.href,
            },
        });
        if (!getResp.status) {
            return;
        }
        let respData = getResp.data;
        return utils.toJSON(respData.responseText);
    },
    init() {
        utils.waitNode("div.more-btn-desc").then((element) => {
            element.outerHTML = `
              <input type="search" id="tieba-search" placeholder="请输入搜索内容..." autocomplete="off">
              <div class="more-btn-desc">搜索</div>
              <style>
              #tieba-search{
                display: none;
                padding: 0px 10px;
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                border-radius: 5px;
                box-sizing: border-box;
                appearance: none;
                border: 1px solid rgb(0, 0, 0);
                outline: none;
                flex: 1 1 0%;
                margin: 0px 1em;
                min-width: 80px;
              }
              .more-btn-desc{
                margin-right: 13px;
                font-size: .15rem;
                font-weight: 700;
                color: #614ec2;
              }
              </style>
              `;
            /* 用于判断是否已设置点击事件 */
            let isSetClickEvent_kw = false;
            let isSetClickEvent_p = false;
            let isSetClickEvent_home = false;

            let isFirstClick = true;
            DOMUtils.on(
                document.querySelector("div.more-btn-desc") as HTMLDivElement,
                "click",
                function () {
                    let searchParams = new URLSearchParams(window.location.search);
                    if (
                        window.location.pathname === "/f" &&
                        utils.isNotNull(searchParams.get("kw"))
                    ) {
                        /* 当前是在吧内，搜索按钮判定搜索帖子 */
                        if (!isSetClickEvent_kw) {
                            isSetClickEvent_kw = true;
                            loadingView.removeAll();
                            loadingView.initLoadingView();
                            DOMUtils.after(
                                document.querySelector("div.tb-page__main") as HTMLDivElement,
                                loadingView.getLoadingViewElement()
                            );
                            TiebaSearch.postsSearch(isFirstClick);
                        }
                    } else if (
                        window.location.href.startsWith("https://tieba.baidu.com/p/")
                    ) {
                        /* 当前是在帖子内，搜索按钮判定搜索帖子 */
                        if (!isSetClickEvent_p) {
                            isSetClickEvent_p = true;
                            TiebaSearch.postsSearch(isFirstClick);
                        }
                    } else {
                        /* 当前是在主页中，搜索按钮判定为搜索吧 */
                        TiebaSearch.frontPageSeach();
                        if (isSetClickEvent_home) {
                            isSetClickEvent_home = true;
                            utils.listenKeyboard(
                                document.querySelector("#tieba-search") as HTMLDivElement,
                                "keypress",
                                (keyName) => {
                                    if (keyName === "Enter") {
                                        TiebaSearch.frontPageSeach();
                                    }
                                }
                            );
                        }
                    }
                    if (isFirstClick) {
                        isFirstClick = false;
                    }
                }
            );

            async function getData(inputValue: string) {
                let result: PopsSearchSuggestionData[] = [];
                log.success("搜索中...");
                let suggestionData = await TiebaSearch.getSuggestion(
                    inputValue
                );
                if (utils.isNull(suggestionData)) {
                    return result;
                }
                log.success(suggestionData);
                result = suggestionData?.query_match.search_data || [];
                return result;
            }
            this.searchSuggestion = pops.searchSuggestion({
                selfDocument: document,
                className: "WhiteSevsSearchSelect",
                target: document.querySelector("#tieba-search") as HTMLElement,
                inputTarget: document.querySelector("#tieba-search") as HTMLInputElement,
                data: [],
                isAbsolute: false,
                followTargetWidth: true,
                deleteIcon: {
                    enable: false,
                },
                topDistance: 4,
                itemClickCallBack(event, liElement, data) {
                    window.location.href =
                        "https://tieba.baidu.com/f?ie=utf-8&kw=" + data.fname;
                },
                getData: getData,
                getItemHTML(item) {
                    return `
                <div class="forum_item">
                  <img class="forum_image" src="${item.fpic}">
                  <div class="forum_right">
                    <div class="forum_name">${item.fname}</div>
                    <div class="forum_desc">${item.forum_desc}</div>
                    <div class="forum_member">${item.member_num}</div>
                    <div class="forum_thread">${item.thread_num}</div>
                  </div>
                </div>
                `;
                },
                style: `
              .WhiteSevsSearchSelect .forum_item{
                display: flex;
                text-wrap: wrap;
                align-items: center;
              }
              .WhiteSevsSearchSelect .forum_image{
                float: left;
                width: 32px;
                height: 32px;
              }
              .WhiteSevsSearchSelect .forum_right{
                float: left;
                margin-left: 8px;
                color: #999;
                width: 88%;
              }
              .WhiteSevsSearchSelect .forum_name{
                color: #000;
                font-size: 14px;
                font-weight: 700;
              }
              .WhiteSevsSearchSelect .forum_name::after{
                content:"吧";
              }
              .WhiteSevsSearchSelect .forum_member,
              .WhiteSevsSearchSelect .forum_thread{
                margin: 4px 0px;
                padding: 0 0 0 18px;
                color: #999;
                font-weight: 400;
                font-size: 12px;
                background: url(//tb2.bdstatic.com/tb/static-common/img/suggestion/sugestion_ed6a819.png) no-repeat;
              }
              .WhiteSevsSearchSelect .forum_member{
                background-position: 0 0;
              }
              .WhiteSevsSearchSelect .forum_thread{
                background-position: 0 -26px;
              }
              `,
            });
            this.searchSuggestion.init();
            this.searchSuggestion.setAllEvent();
            log.success("初始化默认搜索...");
            getData("").then((result) => {
                if (result.length) {
                    this.searchSuggestion.update(result);
                }
            });
        });
    },
    /**
     * 帖子外搜索(也就是首页搜索吧)
     */
    frontPageSeach() {
        log.success("当前是在首页");
        let searchInputElement = document.querySelector("#tieba-search") as HTMLInputElement;
        let searchText = searchInputElement.value.trim();
        /* 搜索框隐藏的话就显示出来 */
        if (getComputedStyle(searchInputElement).display === "none") {
            (searchInputElement.previousElementSibling as HTMLElement).style.display = "none";
            searchInputElement.style.display = "block";
        } else {
            /* 已显示出来的话就跳转搜索 */
            if (utils.isNull(searchText)) {
                alert("请勿输入空内容");
                return;
            }
            window.location.href =
                "https://tieba.baidu.com/f?ie=utf-8&kw=" + searchText;
        }
    },
    /**
     * 帖子内搜索(搜索帖子)
     * @param isFirstClick 判断是否是首次点击
     * */
    postsSearch(isFirstClick = false) {
        let that = this;
        let gbkEncoder = new utils.GBKEncoder();
        let nextPageUrl = null as unknown as string;
        let lockFunction = null as unknown as { lock: () => void; unlock: () => void; run: () => Promise<void>; };
        /**
         * 0 按时间顺序
         * 1 按时间倒序
         * 2 按相关性顺序
         * 3 只看主题贴
         */
        let searchModel = 1;
        /**
         * 0 吧内搜索
         * 1 全吧搜索
         */
        let searchType = 0;
        /**
         * 当前搜索的内容
         */
        let currentSearchText = "";
        /**
         * 获取搜索结果
         * @param {string} [qw=""] 搜索的关键字
         * @param {number} [pn=0] 当前页码
         * @param {number} [sm=0] 搜索结果排序
         * @param {string} [kw=""] 搜索的目标吧，留空是全部
         * 0 按时间顺序
         * 1 按时间倒序 如果加上only_thread为1，就是只看主题贴
         * 2 按相关性顺序
         * @returns {Promise}
         */
        async function getSearchResult(qw = "", pn = 0, sm = 1, kw = "") {
            currentSearchText = qw;
            if (sm === 3) {
                // @ts-ignore
                sm = "1&only_thread=1";
            }
            let url = "";
            let originText = "";
            if (arguments.length === 1) {
                url = arguments[0];
                log.success(`请求的下一页url: ${url}`);
            } else {
                originText = qw;
                qw = gbkEncoder.encode(qw);
                kw = gbkEncoder.decode(kw);
                kw = gbkEncoder.encode(kw);
                log.success(`搜索内容gbk编码转换: ${originText} => ${qw}`);
                url = `https://tieba.baidu.com/f/search/res?isnew=1&kw=${kw}&qw=${qw}&un=&rn=10&pn=${pn}&sd=&ed=&sm=${sm}`;
            }

            log.success(
                `当前请求第 ${new URLSearchParams(new URL(url).search).get(
                    "pn"
                )} 页`
            );
            let getResp = await httpx.get(url, {
                fetch: true,
                headers: {
                    accept:
                        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    "accept-language":
                        "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                    "cache-control": "no-cache",
                    pragma: "no-cache",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": '"Windows"',
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "none",
                },
            });
            let respText = getResp.data.responseText;
            if (!getResp.status) {
                if (respText.trim() === "") {
                    log.error("获取内容为空，可能触发了百度校验，请刷新网页再试");
                    return "获取内容为空，可能触发了百度校验，请刷新网页再试";
                }
                if (
                    respText.match("wappass.baidu.com") ||
                    respText.match(
                        "https://seccaptcha.baidu.com/v1/webapi/verint/svcp.html"
                    )
                ) {
                    let wappassUrl = respText?.match(/href="(.*?)"/)?.[1] as string;
                    log.error("触发百度校验: " + wappassUrl);
                    window.location.href = wappassUrl;
                    return "触发百度校验";
                }
                log.error(respText);
                return;
            }
            log.success(getResp);
            let searchDoc = DOMUtils.parseHTML(respText, true, true) as Document;
            if (searchDoc.querySelector(".search_noresult")) {
                return "抱歉，没有找到与“" + originText + "”相关的结果。";
            }
            let result: SearchResultInfo[] = [];
            nextPageUrl = (searchDoc.querySelector(".pager-search a.next") as HTMLAnchorElement)?.href;
            searchDoc
                .querySelectorAll(".s_main .s_post_list .s_post")
                .forEach((item) => {
                    if (item.id === "post_user" || item.id === "no_head") {
                        return;
                    }
                    let url = (item.querySelector("span.p_title a") as HTMLAnchorElement).href;
                    let title = (item.querySelector("span.p_title a") as HTMLAnchorElement).innerHTML;
                    let content = (item.querySelector(".p_content") as HTMLDivElement).innerHTML;
                    /* 来自哪个贴吧 */
                    let forum = (item.querySelector(
                        "a.p_forum font.p_violet"
                    ) as HTMLElement).textContent;
                    let author = (
                        item.querySelector("a[href^='/home'] font.p_violet") ||
                        item.querySelectorAll("font.p_violet")[1]
                    ).textContent as string;
                    let authorHomeUrl =
                        "https://tieba.baidu.com/home/main?un=" +
                        gbkEncoder.encode(author);
                    let time = (item.querySelector(".p_date") as HTMLElement).textContent;
                    let imgList: string[] = [];
                    (Array.from(item
                        .querySelectorAll("img.p_pic")
                    ) as HTMLImageElement[]).forEach((pictureImg) =>
                        imgList.push(
                            pictureImg.getAttribute("original") || pictureImg.src
                        )
                    );
                    result.push({
                        url: url,
                        title: title,
                        content: content,
                        forum: forum,
                        author: author,
                        authorHomeUrl: authorHomeUrl,
                        time: time,
                        media: imgList,
                    });
                });
            return result;
        }
        function getItemElement(item: SearchResultInfo) {
            let time = item["time"] as string;
            let newTime = utils.getDaysDifference(
                utils.formatToTimeStamp(time),
                void 0,
                "auto"
            );
            if (
                newTime.endsWith("小时") ||
                newTime.endsWith("分钟") ||
                newTime.endsWith("秒")
            ) {
                /* 今天内的时间全都转换成xx时|分|秒前 */
                time = newTime + "前";
            }
            /* 高亮搜索关键字 */
            let splitText = currentSearchText.split(" ");
            splitText.filter((value, index, _splitText_) => {
                return _splitText_.indexOf(value) === index;
            });
            splitText.forEach((text) => {
                item["title"] = item["title"].replaceAll(
                    text,
                    "<em>" + text + "</em>"
                );
            });
            let resultElement = DOMUtils.createElement("div", {
                className: "s_post search_result",
                innerHTML: `
              <div class="search-result-media">
                <div class="search-result-media-left">
                  <img src="data:image/png;base64,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">
                </div>
                <div class="search-result-media-body">
                  <h4 class="search-result-media-body-author-name">${item["author"]}</h4>
                  <p class="search-result-media-body-time">${time}</p>
                </div>
              </div>
              <div class="search-result-title">
                <h1 class="search-result-title-h1">
                  <span class="search-result-title-span">${item["title"]}</span>
                </h1>
              </div>
              <div class="search-result-content">
                <span class="search-result-content-span">${item["content"]}</span>
              </div>
              <div class="search-result-bottom-toolbar">
                  <span class="search-result-bottom-toolbar-span">${item["forum"]}</span>
              </div>
              `,
            });
            let userAvatarElement = resultElement.querySelector(
                ".search-result-media-left img"
            ) as HTMLImageElement;
            let userNameElement = resultElement.querySelector(
                ".search-result-media-body-author-name"
            ) as HTMLElement;
            let mediaElement = resultElement.querySelector(
                ".search-result-media"
            ) as HTMLElement;
            let titleElement = resultElement.querySelector(
                ".search-result-title"
            ) as HTMLElement;
            let contentElement = resultElement.querySelector(
                ".search-result-content"
            ) as HTMLElement;
            let contentSpanElement = resultElement.querySelector(
                ".search-result-content-span"
            ) as HTMLSpanElement;
            let bottomToolBarElement = resultElement.querySelector(
                ".search-result-bottom-toolbar"
            ) as HTMLElement;
            /* 获取用户信息，替换用户头像 */
            if (PopsPanel.getValue("baidu_tieba_search_opt_user_info")) {
                TieBaApi
                    .getUserHomeInfo({
                        un: item["author"],
                    })
                    .then((userHomeInfo) => {
                        if (!userHomeInfo) {
                            return;
                        }
                        userAvatarElement.src = TiebaUrlApi.getUserAvatar(
                            userHomeInfo["portrait"]
                        );
                        userNameElement.innerText =
                            userHomeInfo["show_nickname"];
                    });
            }

            let eleList = [
                { element: mediaElement, url: item["authorHomeUrl"] },
                { element: [titleElement, contentElement], url: item["url"] },
                {
                    element: bottomToolBarElement,
                    url: `https://tieba.baidu.com/f?kw=${item["forum"]}`,
                },
            ];
            eleList.forEach((item) => {
                DOMUtils.on(
                    item.element,
                    "click",
                    void 0,
                    function (event) {
                        utils.preventEvent(event);
                        globalThis.open(item.url, "_blank");
                    },
                    {
                        capture: true,
                    }
                );
            });

            let content_BDE_Image = Array.from(resultElement.querySelectorAll(
                ".search-result-content img.BDE_Image"
            )) as HTMLImageElement[];
            let repetitiveImageList = [];
            content_BDE_Image.forEach((BDE_Image) => {
                /* 高清图片下标 */
                let originalImageIndex = (item["media"] as string[]).findIndex((src) => {
                    return src.includes(BDE_Image.src);
                });
                if (originalImageIndex !== -1) {
                    /* 存在对应的高清图片链接 */
                    let originalImage = item["media"][originalImageIndex];
                    BDE_Image.src = originalImage;
                    repetitiveImageList.push(originalImage);
                    item["media"].splice(originalImageIndex, 1);
                }
            });
            let imageContainerElement = DOMUtils.createElement("div", {
                className: "BDE_Image_container",
            });
            (item["media"] as string[]).forEach((mediaSrc) => {
                DOMUtils.append(
                    imageContainerElement,
                    DOMUtils.createElement("img", {
                        className: "BDE_Image",
                        src: mediaSrc,
                    })
                );
            });
            contentSpanElement.appendChild(imageContainerElement);
            /* 对贴吧表情进行处理，搜索到的表情是http的，换成https */
            (Array.from(resultElement
                .querySelectorAll(".search-result-content img.BDE_Smiley")
            ) as HTMLImageElement[]).forEach((BDE_Smiley) => {
                if (
                    !BDE_Smiley?.src?.startsWith("http://static.tieba.baidu.com")
                ) {
                    return;
                }
                let imagePathName = new URL(BDE_Smiley.src).pathname;
                BDE_Smiley.src = TiebaUrlApi.getImageSmiley(imagePathName);
            });
            return resultElement;
        }
        function setCSS() {
            GM_addStyle(`
            .search-result-content img.BDE_Smiley{
              width: .2rem;
              height: .2rem;
              vertical-align: middle;
            }
            .search-result-content img:not(.BDE_Smiley){
              margin-top: 8px;
              max-width: 350px;
              cursor: url(//tb2.bdstatic.com/tb/static-pb/img/cur_zin.cur),pointer;
              height: auto;
              width: auto;
              width: 100%;
            }
            .s_post.search_result {
              background: #f7f7fa;
              margin: 0.08rem .08rem;
              border-radius: .12rem;
              padding: .11rem .11rem;
            }

            .BDE_Image_container {
              display: flex;
              overflow: auto;
            }
            .BDE_Image_container img.BDE_Image {
              max-width: 100px;
              max-height: 150px;
            }
            `);
            if (
                globalThis.location.search.startsWith("?kw=") ||
                globalThis.location.pathname === "/f"
            ) {
                /* 吧内和贴内的background不同 */
                GM_addStyle(`
              .s_post.search_result{
                background: #ffffff;
              }
              `);
            }
            GM_addStyle(`
            .s_post,
            .s_order,
            .s_search {
              margin: 25px;
            }
            .s_post em{
              color: #e10900;
              font-style: normal;
            }


            .search-result-media {
              display: flex;
              align-items: center;
            }
            
            .search-result-media-left {
              padding-right: .08rem;
            }
            
            .search-result-media-left img {
              width: .35rem;
              height: .35rem;
              border-radius: 50%;
            }
            
            .search-result-media-body-author-name {
              margin-top: .02rem;
              color: #272829;
              font-weight: 400;
              font-size: .16rem;
              line-height: .15rem;
            }
            
            .search-result-media-body-time {
              margin-top: .06rem;
              color: #a2a6a8;
              font-size: .12rem;
              line-height: .12rem;
            }
            
            h1.search-result-title-h1 {
              font-size: 0.16rem;
            }
            .search-result-content {
              min-height: 66px;
            }
            span.search-result-content-span {
              color: #141414;
              text-overflow: ellipsis;
              display: inline;
              word-break: break-all;
            }
            
            .search-result-title ,
            .search-result-content,
            .search-result-bottom-toolbar{
              margin-top: 0.08rem;
            }
            
            span.search-result-bottom-toolbar-span {
              color: #b7b9c1;
            }
            span.search-result-bottom-toolbar-span::before{
              content:"贴吧："   
            }
            `);
        }

        /**
         * 设置搜索结果模式
         * @param searchElement
         * @param orderElement
         */
        function setCurrentOrderHTML(searchElement: HTMLElement, orderElement: HTMLElement) {
            for (const targetElement of Array.from(orderElement.querySelectorAll("a"))) {
                let targetElementHTML = DOMUtils.html(targetElement);
                let flag = false;
                if (
                    (targetElementHTML.includes("按时间顺序") &&
                        searchModel === 0) ||
                    (targetElementHTML.includes("按时间倒序") &&
                        searchModel === 1) ||
                    (targetElementHTML.includes("按相关性顺序") &&
                        searchModel === 2) ||
                    (targetElementHTML.includes("只看主题贴") && searchModel === 3)
                ) {
                    flag = true;
                }
                if (flag) {
                    log.success(`当前搜索模式-${targetElementHTML}`);
                    DOMUtils.replaceWith(
                        targetElement,
                        `<b>${targetElementHTML}</b>`
                    );
                    break;
                }
            }
            if (searchType === 1) {
                DOMUtils.val(searchElement.querySelector("#searchtb") as HTMLElement, true);
                log.success("当前搜索类型-全吧搜索");
            } else if (searchType === 0) {
                log.success("当前搜索类型-吧内搜索");
            } else {
                log.error("未知的搜索类型，请排查");
            }
        }
        /**
         * 设置搜索结果模式点击事件
         */
        function setOrderClickEvent() {
            DOMUtils.on(document, "click", ".s_order a", function (event) {
                let clickOrderElement = event.target as HTMLAnchorElement;
                let clickOrderHTML = DOMUtils.html(clickOrderElement);
                let orderBElement = document.querySelector(".s_order b") as HTMLElement;
                DOMUtils.replaceWith(
                    orderBElement,
                    `<a>${DOMUtils.html(orderBElement)}</a>`
                );
                clickOrderElement.replaceWith(`<b>${clickOrderHTML}</b>`);
                if (clickOrderHTML.includes("按时间顺序")) {
                    searchModel = 0;
                    log.success("设置当前搜索模式-按时间顺序");
                } else if (clickOrderHTML.includes("按相关性顺序")) {
                    searchModel = 2;
                    log.success("设置当前搜索模式-按相关性顺序");
                } else if (clickOrderHTML.includes("只看主题贴")) {
                    searchModel = 3;
                    log.success("设置当前搜索模式-只看主题贴");
                } else {
                    searchModel = 1;
                    log.success("设置当前搜索模式-按时间倒序");
                }
                (nextPageUrl as any) = null;
                removeScrollListener();
                (document.querySelector(".more-btn-desc") as HTMLElement).click();
            });
            DOMUtils.on(
                document,
                "change",
                ".s_search input[type='radio']",
                function (event) {
                    let changeNode = event.target as HTMLInputElement
                    if (changeNode.id === "searchtb") {
                        searchType = 1;
                        log.success("切换搜索模式-全吧搜索");
                    } else if (changeNode.id === "nowtb") {
                        searchType = 0;
                        log.success("切换搜索模式-吧内搜索");
                    } else {
                        log.error("未知的搜索类型，请排查");
                    }
                }
            );
        }
        async function _click_event_() {
            TiebaComment.removeScrollListener();
            searchInputElement.blur();
            let searchText = searchInputElement.value.trim();
            if (utils.isNull(searchText)) {
                alert("请勿输入纯空格或空内容");
                return;
            }
            if (PopsPanel.getValue("baidu_tieba_use_hybrid_search")) {
                /* 直接跳转到搜索综合 */
                window.open(TiebaUrlApi.getHybridSearch(searchText), "_blank");
                return;
            }
            let contentElement =
                (document.querySelector(".main-thread-content-margin") ||
                    document.querySelector(".main-thread-content") ||
                    document.querySelector(".tb-page__main")) as HTMLElement;
            DOMUtils.remove("#replySwitch");
            DOMUtils.remove(".post-item");
            DOMUtils.html(contentElement, "");
            loadingView.setText("Loading...", true);
            loadingView.show();
            if (searchType === 0) {
                if (utils.isNull(TiebaData.forumName)) {
                    loadingView.hide();
                    alert("获取当前吧失败");
                    return;
                }
                log.success("当前搜索的范围吧：" + TiebaData.forumName);
            }
            /* 搜索的吧，留空是全吧搜索 */
            let searchKW = searchType === 1 ? "" : TiebaData.forumName;
            let searchResult = await getSearchResult(
                searchText,
                void 0,
                searchModel,
                searchKW
            );
            TiebaComment.removeScrollListener();
            if (!searchResult) {
                loadingView.hide();
                alert("请求失败，详情请看控制台");
                return;
            }
            if (
                typeof searchResult === "string" &&
                (searchResult.startsWith("抱歉") ||
                    searchResult.startsWith("获取内容为空"))
            ) {
                DOMUtils.html(contentElement, "");
                searchModel = 1;
                loadingView.hide();
                alert(searchResult + " 已重置搜索模式为-按时间倒序");
                return;
            }
            DOMUtils.html(contentElement, "");
            log.success(searchResult);
            let searchElement = DOMUtils.createElement("div", {
                className: "s_search",
                innerHTML: `
              搜索类型：
              <input id="nowtb" name="tb" type="radio"checked="checked">
              <label for="nowtb">吧内搜索</label>
              <input id="searchtb" name="tb" type="radio">
              <label for="searchtb">全吧搜索</label>`,
            });
            let orderElement = DOMUtils.createElement("div", {
                className: "s_order",
                innerHTML: `
              排序结果：
              <a>按时间倒序</a>
              <span class="split_line">|</span>
              <a>按时间顺序</a>
              <span class="split_line">|</span>
              <a>按相关性顺序</a>
              <span class="split_line">|</span>
              <a>只看主题贴</a>
              `,
            });
            setCurrentOrderHTML(searchElement, orderElement);
            DOMUtils.append(contentElement, searchElement);
            DOMUtils.append(contentElement, orderElement);
            for (const searchResultItem of searchResult) {
                DOMUtils.append(contentElement, getItemElement(searchResultItem as SearchResultInfo));
            }
            loadingView.hide();
            if (nextPageUrl) {
                addScrollListener();
            }
        }
        /**
         * 添加滚动监听
         */
        function addScrollListener() {
            document.addEventListener("scroll", lockFunction.run);
            log.success("添加scroll事件监听");
        }
        /**
         * 移除滚动监听
         */
        function removeScrollListener() {
            document.removeEventListener("scroll", lockFunction.run);
            log.success("移除scroll事件监听");
        }
        /**
         * 滚动事件
         */
        async function _scroll_event_() {
            if (!utils.isNearBottom()) {
                return;
            }
            loadingView.show();
            if (!nextPageUrl) {
                removeScrollListener();
                log.success("已到达最后一页");
                loadingView.show();
                return;
            }
            let contentElement =
                (document.querySelector(".main-thread-content-margin") ||
                    document.querySelector(".main-thread-content") ||
                    document.querySelector(".tb-page__main")) as HTMLElement;
            let searchResult = await getSearchResult(nextPageUrl);
            if (!searchResult) {
                loadingView.hide();
                alert("请求下一页失败，详情请看控制台");
                return;
            }
            if (
                typeof searchResult === "string" &&
                (searchResult.startsWith("抱歉") ||
                    searchResult.startsWith("获取内容为空"))
            ) {
                loadingView.hide();
                alert(searchResult);
                return;
            }
            log.success(searchResult);
            for (const searchResultItem of searchResult) {
                DOMUtils.append(contentElement, getItemElement(searchResultItem as SearchResultInfo));
            }
            loadingView.hide();
            if (!nextPageUrl) {
                removeScrollListener();
                log.success("已到达最后一页");
                return;
            }
        }
        log.success("当前是在吧内");
        lockFunction = new utils.LockFunction(_scroll_event_, this);
        TiebaComment.removeScrollListener();
        this.searchSuggestion.removeAllEvent();
        let searchInputElement = document.querySelector("#tieba-search") as HTMLInputElement;
        /* 搜索框显示出来 */
        (searchInputElement.previousElementSibling as HTMLElement).style.display = "none";
        searchInputElement.style.display = "block";
        if (isFirstClick) {
            setTimeout(() => {
                searchInputElement.focus();
            }, 20);
        }
        DOMUtils.on(document
            .querySelector(".more-btn-desc"), "click", _click_event_)
        utils.listenKeyboard(
            searchInputElement,
            "keypress",
            (keyName, keyValue, otherKeyList, event) => {
                if (keyName === "Enter") {
                    _click_event_();
                }
            }
        );
        setOrderClickEvent();
        setCSS();
    },
};

export {
    TiebaSearch
}