import { $, $$, addStyle, DOMUtils, httpx, log, pops, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { MTRegExp } from "@/utils/MTRegExp";
import hljs, { type HLJSApi, type Language } from "highlight.js";
import Qmsg from "qmsg";
import { MTEditorOptimizationNormal } from "./MTEditorOptimization-normal";
import Viewer from "viewerjs";

export const MTForumPost = {
  $flag: {
    isSetHljsCSS: false,
  },
  init() {
    Panel.execMenuOnce("mt-forum-post-autoExpandContent", () => {
      return this.autoExpandContent();
    });
    Panel.execMenuOnce("mt-forum-post-repairImageWidth", () => {
      return this.repairImageWidth();
    });

    DOMUtils.onReady(() => {
      Panel.execMenu("mt-forum-post-removeFontStyle", () => {
        this.removeFontStyle();
      });
      Panel.execMenu("mt-forum-post-removeCommentFontStyle", () => {
        this.removeCommentFontStyle();
      });
      Panel.execMenu("mt-forum-post-addCommentOnBtn", () => {
        this.addCommentOnBtn();
      });
      Panel.execMenuOnce("mt-forum-post-loadNextPageComment", () => {
        this.loadNextPageComment();
      });
      Panel.execMenuOnce("mt-forum-post-codeQuoteOptimization", () => {
        this.codeQuoteOptimization();
      });
      Panel.execMenuOnce("mt-forum-post-editorOptimizationNormal", () => {
        MTEditorOptimizationNormal.init();
      });
      Panel.execMenu("mt-forum-post-optimizationImagePreview", () => {
        this.optimizationImagePreview();
      });
      Panel.execMenuOnce("mt-forum-post-setAttachmentsClickTip", () => {
        this.setAttachmentsClickTip();
      });
    });
  },
  /**
   * 自动展开帖子内容
   */
  autoExpandContent() {
    log.info(`自动展开帖子内容`);
    return addStyle(/*css*/ `
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `);
  },
  /**
   * 修复图片宽度
   */
  repairImageWidth() {
    log.info(`修复图片宽度`);
    return addStyle(/*css*/ `
        .comiis_messages img{
            max-width: 100% !important;
        }`);
  },
  /**
   * 移除帖子字体效果
   */
  removeFontStyle() {
    log.info(`移除帖子字体效果`);
    let $messageTable = $<HTMLElement>(".comiis_a.comiis_message_table");
    if (!$messageTable) {
      return;
    }
    DOMUtils.html($messageTable, DOMUtils.html($messageTable).replace(MTRegExp.fontSpecial, ""));
  },
  /**
   * 移除评论区的字体效果
   */
  removeCommentFontStyle() {
    log.info(`移除评论区的字体效果`);
    let $fontList = $$("font");
    /* 帖子主内容 */
    let $postForumMainContent = $(".comiis_postlist .comiis_postli")?.innerHTML || "";
    if ($postForumMainContent !== "") {
      $fontList.forEach(($font) => {
        /* font元素是帖子主内容的移除字体效果 */
        if (!$postForumMainContent.includes($font.innerHTML)) {
          /* log.info(hide[i].innerHTML); */
          $font.removeAttribute("color");
          $font.removeAttribute("style");
          $font.removeAttribute("size");
        }
      });
      /* 帖子评论 */
      $$<HTMLElement>(".comiis_message.message").forEach(($message) => {
        if ($postForumMainContent.includes($message.innerHTML)) {
          $message.innerHTML = $message.innerHTML.replace(MTRegExp.fontSpecial, "");
          let $next = $message.nextElementSibling;
          if ($next && $next.localName === "strike") {
            $next.outerHTML = $next.outerHTML.replace(/^<strike>(\n|)/g, "").replace(/<\/strike>$/g, "");
          }
        }
      });
    }
    /* 所有评论，包括帖子主体 */
    $$(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach((item) => {
      let $parent = item.parentElement;
      if ($parent && $parent.localName === "strike") {
        $parent.outerHTML = $parent.outerHTML.replace(/^<strike>(\n|)/g, "").replace(/<\/strike>$/g, "");
      }
    });
  },
  /**
   * 添加【点评】按钮
   */
  addCommentOnBtn() {
    log.info(`添加【点评】按钮`);
    DOMUtils.waitNodeList<NodeListOf<HTMLElement>>(".bottom_zhan:not([data-isaddreviews])").then(($bottomZhanList) => {
      $bottomZhanList.forEach(($bottmZhan) => {
        $bottmZhan.setAttribute("data-isaddreviews", "true");
        var replyNode = $bottmZhan.querySelector("a");
        if (!replyNode) {
          return;
        }
        var replyUrl =
          replyNode.getAttribute("datahref") || replyNode.getAttribute("data-href") || replyNode.href || "";
        var rewardUrl = replyUrl.replace("mod=post&", "mod=misc&").replace("action=reply&", "action=comment&");
        var reviewPage = replyUrl?.match(/&page=([\w]+)/i)?.[1];
        var reviewsUrl = `${rewardUrl}&extra=page%3D1&page=${reviewPage}`;
        var $postli = $bottmZhan?.closest(".comiis_postli[id]")!;
        var reviewsPID = $postli.getAttribute("id")?.replace("pid", "&pid=");
        reviewsUrl = reviewsUrl + reviewsPID;
        var reviewsUserName = $postli.querySelector(".top_user.f_b")?.textContent || "";
        var reviewsNode = DOMUtils.toElement(
          /*html*/ `
						<a href="${reviewsUrl}" class="f_c dialog">
							<i class="comiis_font mt_review" style="content: url(&quot;https://s1.ax1x.com/2020/04/26/Jcq8VU.png&quot;); height: 15px;"></i>
						</a>
						`,
          true,
          false
        );
        DOMUtils.on(reviewsNode, "click", function () {
          DOMUtils.waitNode<HTMLSpanElement>("div[id=ntcmsg_popmenu]>div>span.f_c").then((element) => {
            try {
              element.innerText = "点评 " + reviewsUserName;
            } catch (err) {
              log.error("修改点评失败", err);
            }
          });
        });
        DOMUtils.prepend($bottmZhan, reviewsNode);
      });
    });
  },
  /**
   * 自动加载下一页评论
   */
  loadNextPageComment() {
    log.info(`自动加载下一页评论`);
    if (document.title.includes("提示信息 - MT论坛")) {
      return;
    }

    function getLoadingCommentTip() {
      return $<HTMLElement>("#loading-comment-tip")!;
    }
    function getLoadingCommentTipParent() {
      return $<HTMLElement>("#loading-comment-tip")!.parentElement!;
    }

    /**
     * 自动加载下一页的评论
     * @param post_comments_list
     */
    function autoLoadNextPageComments(post_comments_list: HTMLElement) {
      let $loadingCommentTip = getLoadingCommentTip();
      let $loadingCommentTipParent = getLoadingCommentTipParent();
      DOMUtils.css($loadingCommentTipParent, "display", "");
      let $nextPage = Array.from(post_comments_list.querySelectorAll<HTMLAnchorElement>("a[href]")).find((item) => {
        return item.textContent?.trim() === "下一页";
      })!;
      let next_page_url = $nextPage.href;
      log.info("获取下一页url：", next_page_url);
      if (next_page_url.includes("javascript:;")) {
        log.info("暂无下一页的评论");
        DOMUtils.remove($loadingCommentTipParent);
        return;
      }
      /**
       * 移除加载监听
       */
      function removeLoadNextCommentsListener() {
        // 移除分页元素
        DOMUtils.remove(".comiis_page.bg_f");
        // 移除加载中的提示
        DOMUtils.remove($loadingCommentTipParent);
        // 移除加载中的点击事件
        DOMUtils.off($loadingCommentTip, "click", loadNextComments);
        // 移除滚动监听
        DOMUtils.off(window, "scroll", lockFn.run);
      }

      async function loadNextComments() {
        DOMUtils.text($loadingCommentTip, "正在加载评论中...");
        DOMUtils.css($loadingCommentTipParent, "display", "");
        log.info(`请求下一页评论：` + next_page_url);
        let url = next_page_url;
        let response = await httpx.get(url, {
          fetch: true,
        });
        if (!response.status) {
          return;
        }
        let nextPageDoc = DOMUtils.toElement(response.data.responseText, true, true);
        let $kqide = $<HTMLElement>(".comiis_postlist.kqide")!;
        let $nextPage_kqide = nextPageDoc.querySelector<HTMLElement>(".comiis_postlist.kqide")!;
        let $getNextPage = nextPageDoc.querySelector<HTMLAnchorElement>(".nxt");
        let queryNextPageUrl = $getNextPage?.getAttribute("href") || $getNextPage?.href;
        if (queryNextPageUrl) {
          log.success("成功获取到下一页评论");
          if (queryNextPageUrl === next_page_url) {
            log.warn("获取到下一页评论的url和上次请求的url相同，判定为已加载完全部评论，移除监听事件");
            removeLoadNextCommentsListener();
            return;
          }
          next_page_url = queryNextPageUrl;
        } else {
          log.error("评论全部加载完毕，移除监听事件");
          removeLoadNextCommentsListener();
        }
        let $pageStrong = $getNextPage?.parentElement!.querySelector("strong");
        if ($pageStrong) {
          // 修改页面的页码文字
          let $pageSelect = $<HTMLAnchorElement>("#select_a");
          if ($pageSelect) {
            let $pageText = Array.from($pageSelect.childNodes).find((item) => item.nodeName === "#text");
            if ($pageText) {
              $pageText.textContent! = `第 ${$pageStrong.textContent!} 页`;
            }
          }
        }

        Panel.execMenu("mt-forum-post-syncNextPageUrl", () => {
          if (window === top?.window) {
            let urlObj = new URL(url);
            let setLocationUrl = `${urlObj.pathname}${urlObj.search}`;
            window.history.pushState("forward", "", setLocationUrl);
          }
        });
        DOMUtils.append($kqide, $nextPage_kqide);

        // 重载帖子的功能
        MTForumPost.init();
      }
      var lockFn = new utils.LockFunction(async () => {
        if (utils.isNearBottom(50)) {
          /* load data */
          await loadNextComments();
        }
      });
      DOMUtils.text($loadingCommentTip, "请上下滑动或点击加载");
      DOMUtils.on(window, "scroll", lockFn.run);
      DOMUtils.on($loadingCommentTip, "click", loadNextComments);
      lockFn.run();
    }

    let tip_html = /*html*/ `
		<div class="comiis_multi_box bg_f b_t">
			<label class="comiis_loadbtn bg_e f_d" id="loading-comment-tip">正在等待页面加载完毕</label>
		</div>`;
    let $tip = DOMUtils.toElement(tip_html, true, false);
    let $bodybox = $<HTMLElement>(".comiis_bodybox")!;
    DOMUtils.append($bodybox, $tip);
    let commentsEle = $(".comiis_pltit span.f_d") || $("#comiis_foot_memu .comiis_kmvnum");
    if ($(".comiis_pltit h2") && $<HTMLElement>(".comiis_pltit h2")?.textContent!.includes("暂无评论")) {
      DOMUtils.remove(getLoadingCommentTipParent());
      log.info("暂无评论");
      return;
    }
    let commentsNum = parseInt(commentsEle!.textContent!);
    if (commentsNum >= 10) {
      DOMUtils.waitNode<HTMLElement>(".comiis_page.bg_f").then(($nextPage) => {
        autoLoadNextPageComments($nextPage);
      });
    } else {
      DOMUtils.remove(getLoadingCommentTipParent());
      log.info("无多页评论");
    }
  },
  /**
   * 代码块优化
   **/
  codeQuoteOptimization() {
    log.info(`代码块优化`);

    function hljs_smali(hljs: HLJSApi): Language {
      var smali_instr_low_prio = [
        "add",
        "and",
        "cmp",
        "cmpg",
        "cmpl",
        "const",
        "div",
        "double",
        "float",
        "goto",
        "if",
        "int",
        "long",
        "move",
        "mul",
        "neg",
        "new",
        "nop",
        "not",
        "or",
        "rem",
        "return",
        "shl",
        "shr",
        "sput",
        "sub",
        "throw",
        "ushr",
        "xor",
      ];
      var smali_instr_high_prio = [
        "aget",
        "aput",
        "array",
        "check",
        "execute",
        "fill",
        "filled",
        "goto/16",
        "goto/32",
        "iget",
        "instance",
        "invoke",
        "iput",
        "monitor",
        "packed",
        "sget",
        "sparse",
      ];
      var smali_keywords = [
        "transient",
        "constructor",
        "abstract",
        "final",
        "synthetic",
        "public",
        "private",
        "protected",
        "static",
        "bridge",
        "system",
      ];
      return {
        aliases: ["smali"],
        contains: [
          {
            className: "string",
            begin: '"',
            end: '"',
            relevance: 0,
          },
          hljs.COMMENT("#", "$", {
            relevance: 0,
          }),
          {
            className: "keyword",
            variants: [
              { begin: "\\s*\\.end\\s[a-zA-Z0-9]*" },
              { begin: "^[ ]*\\.[a-zA-Z]*", relevance: 0 },
              { begin: "\\s:[a-zA-Z_0-9]*", relevance: 0 },
              { begin: "\\s(" + smali_keywords.join("|") + ")" },
            ],
          },
          {
            className: "built_in",
            variants: [
              {
                begin: "\\s(" + smali_instr_low_prio.join("|") + ")\\s",
              },
              {
                begin: "\\s(" + smali_instr_low_prio.join("|") + ")((\\-|/)[a-zA-Z0-9]+)+\\s",
                relevance: 10,
              },
              {
                begin: "\\s(" + smali_instr_high_prio.join("|") + ")((\\-|/)[a-zA-Z0-9]+)*\\s",
                relevance: 10,
              },
            ],
          },
          {
            className: "class",
            begin: "L[^(;:\n]*;",
            relevance: 0,
          },
          {
            begin: "[vp][0-9]+",
          },
        ],
      };
    }
    if (!this.$flag.isSetHljsCSS) {
      hljs.registerLanguage("smali", hljs_smali);
      addStyle(/*css*/ `
			.hljs ol{margin:0 0 0 10px;padding:10px 10px 10px 25px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			select.code-select-language{height:40px;line-height:40px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0;margin-left:10px}
			`);
      addStyle(/*css*/ `
			.reader-copy-button{background:#000;background-size:cover;background-repeat:no-repeat;background-position:0;color:#fff;line-height:40px;display:block;text-align:center;border-radius:5px;cursor:pointer;font-size:15px;width:70px;user-select:none}
			.reader-copy-button i{display:inline-block;margin-right:6px;width:16px;height:16px;background-size:cover;vertical-align:sub;user-select:none}
			`);
      DOMUtils.on(document, "click", ".reader-copy-button", async function (event) {
        DOMUtils.preventEvent(event);
        let $click = event.target as HTMLElement;
        let codeElement = $<HTMLElement>($click.getAttribute("data-code-selector")!)!;
        await utils.copy(codeElement.outerText || codeElement.innerText);
        Qmsg.success("已复制到剪贴板");
        return false;
      });
    }
    let comiis_blockcode = $$<HTMLElement>(".comiis_blockcode.comiis_bodybg")!;
    comiis_blockcode.forEach(($comiis_bodybg) => {
      if ($comiis_bodybg.getAttribute("data-copy")) {
        return;
      }
      $comiis_bodybg.setAttribute("data-copy", "true");
      let $temp = DOMUtils.createElement(
        "div",
        {
          innerHTML: /*html*/ `
					<span class="reader-copy-button">
						<i>
						<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<title>复制按钮</title>
							<defs>
								<rect id="path-1" x="0" y="0" width="16" height="16"></rect>
							</defs>
							<g id="阅读页复制-拦截" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g>
									<mask id="mask-2" fill="white">
										<use xlink:href="#path-1"></use>
									</mask>
									<g id="矩形"></g>
									<path d="M4.11794319,3.55555556 L9.51168644,3.55555556 C10.4768443,3.55555556 11.2592593,4.33797056 11.2592593,5.30312837 L11.2592593,13.067242 C11.2592593,14.0323998 10.4768443,14.8148148 9.51168644,14.8148148 L4.11794319,14.8148148 C3.15278537,14.8148148 2.37037037,14.0323998 2.37037037,13.067242 L2.37037037,5.30312837 C2.37037037,4.33797056 3.15278537,3.55555556 4.11794319,3.55555556 Z" id="矩形" stroke="#DFDFDF" stroke-width="1.45631068" mask="url(#mask-2)"></path>
									<path d="M5.03703704,0.888888889 L12.1481481,0.888888889 C13.1299877,0.888888889 13.9259259,1.68482711 13.9259259,2.66666667 L13.9259259,12.7407407" id="形状" stroke="#DFDFDF" stroke-width="1.45631068" mask="url(#mask-2)"></path>
								</g>
							</g>
						</svg>
						</i>
					复制
					</span>`,
        },
        {
          style: "height: 34px;margin: 14px 0px;display: inline-flex;align-items: flex-end;",
        }
      );
      DOMUtils.before($comiis_bodybg, $temp);

      /**
       * 设置元素高亮
       * @param ele
       * @param language 语言，默认为Java
       */
      function setElementHighlight(ele: HTMLElement, language: string = "java") {
        // @ts-ignore
        if (!ele.oldValue) {
          // @ts-ignore
          ele.oldValue = ele.textContent;
        }
        ele.innerHTML = hljs
          // @ts-ignore
          .highlight(ele.oldValue, { language: language })
          .value.replace(/\\n$/gi, "");
      }

      /* 获取当前代码块的文本内容 */
      let codeLanguage = hljs.highlightAuto($comiis_bodybg.textContent!).language;
      let selectElementParentDiv = document.createElement("div");
      let selectElement = document.createElement("select");
      let selectLanguageList = hljs.listLanguages().sort();
      selectLanguageList = selectLanguageList.concat("自动检测");
      let selectInnerHTML = "";
      selectLanguageList.forEach((languageName) => {
        if (languageName.startsWith("自动检测")) {
          selectInnerHTML += `<option data-value="${codeLanguage}" selected="selected">${languageName}(${codeLanguage})</option>`;
        } else {
          selectInnerHTML += `<option data-value="${languageName}">${languageName}</option>`;
        }
      });
      selectElement.className = "code-select-language";
      selectElement.innerHTML = selectInnerHTML;
      DOMUtils.on(selectElement, "change", function () {
        let changeCodeLanguage = selectElement.selectedOptions[0].getAttribute("data-value")!;
        selectElement.setAttribute("aria-label", changeCodeLanguage);
        log.info("切换代码块语言: ", changeCodeLanguage);
        $comiis_bodybg.querySelectorAll("li").forEach((liElement) => {
          setElementHighlight(liElement, changeCodeLanguage);
        });
      });
      DOMUtils.preventEvent(selectElement, "click");
      selectElementParentDiv.appendChild(selectElement);
      $temp.append(selectElementParentDiv);
      DOMUtils.emit(selectElement, "change");
      $comiis_bodybg.className = "hljs";
      ($comiis_bodybg.firstChild as HTMLElement)!.removeAttribute("class");

      $temp
        .querySelector(".reader-copy-button")!
        .setAttribute("data-code-selector", DOMUtils.getElementSelector($comiis_bodybg));
    });
  },
  /**
   * 图片查看优化
   */
  optimizationImagePreview() {
    log.info(`图片查看优化`);

    /**
     * 查看图片
     * @param imgList
     * @param index
     */
    function viewIMG(imgList: string[] = [], index = 0) {
      let viewerULNodeHTML = "";
      imgList.forEach((item) => {
        viewerULNodeHTML += `<li><img data-src="${item}"></li>`;
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
      });
      log.info("查看的图片的下标", index);
      viewer.view(index);
      viewer.zoomTo(1);
      viewer.show();
    }
    let blackListNoViewIMG = [
      {
        hostName: "avatar-bbs.mt2.cn",
        pathName: "*",
      },
      {
        hostName: "cdn-bbs.mt2.cn",
        pathName: "^(/static(/|//)image|/template)",
      },
      {
        hostName: window.location.hostname,
        pathName: "^(/static(/|//)image|/template)",
      },
      {
        hostName: window.location.hostname,
        pathName: "/uc_server/avatar.php",
      },
    ];
    DOMUtils.waitNodeList("div.comiis_postlist.kqide .comiis_postli:not([data-isHandlingViewIMG])").then((nodeList) => {
      nodeList.forEach((item) => {
        item.setAttribute("data-isHandlingViewIMG", "true");
        /* 点击显示的图片组 */
        let clickShowIMGList: string[] = [];
        item.querySelectorAll("img").forEach(($img) => {
          /* 图片链接 */
          let IMG_URL = $img.src;
          /* 主机名 */
          let IMG_URL_HOSTNAME = new URL(IMG_URL).hostname;
          /* 路径 */
          let IMG_URL_PATHNAME = new URL(IMG_URL).pathname;
          /* img标签的父元素 */
          let imgParentNode = $img.parentElement!;
          if (imgParentNode.nodeName.toLowerCase() === "span") {
            imgParentNode.removeAttribute("onclick");
          }
          if (imgParentNode.nodeName.toLowerCase() === "a" && imgParentNode.getAttribute("href") === IMG_URL) {
            imgParentNode.setAttribute("href", "javascript:;");
            imgParentNode.removeAttribute("target");
          }
          let isMatching = false;
          /* 图片黑名单 */
          for (let item of blackListNoViewIMG) {
            if (IMG_URL_HOSTNAME.indexOf(item["hostName"]) != -1 && IMG_URL_PATHNAME.match(item["pathName"])) {
              isMatching = true;
              break;
            }
          }
          if (isMatching) {
            return;
          }
          clickShowIMGList = [...clickShowIMGList, IMG_URL];

          DOMUtils.on($img, "click", function () {
            log.info("点击图片", $img);
            let _index_ = clickShowIMGList.findIndex((_img_) => {
              return _img_ == IMG_URL;
            });
            viewIMG(clickShowIMGList, _index_);
          });
        });
        if (clickShowIMGList.length) {
          log.info("处理的图片", clickShowIMGList);
        }
      });
    });
  },
  /**
   * 附件点击提醒
   */
  setAttachmentsClickTip() {
    log.info(`附件点击提醒`);

    /**
     * 处理元素内的a标签的点击
     */
    function handleClick($ele: HTMLAnchorElement) {
      if ($ele.hasAttribute("href")) {
        let attachmentURL = $ele.getAttribute("href")!;
        let attachmentNameNode = $ele.querySelector<HTMLSpanElement>("span.f_ok")!;
        let attachmentDownloadInfo = $ele.querySelector<HTMLElement>(".attach_size")!;
        if (DOMUtils.text(attachmentDownloadInfo).indexOf("金币") === -1) {
          return;
        }
        log.info("发现附件", $ele);
        log.info("该附件是金币附件，拦截！");
        let attachmentName = DOMUtils.text(attachmentNameNode);
        $ele.setAttribute("data-href", $ele.getAttribute("href")!);
        $ele.removeAttribute("href");
        attachmentNameNode.innerText = "【已拦截】" + attachmentName;
        $ele.onclick = function () {
          log.info("附件url：", attachmentURL);
          pops.confirm({
            title: {
              text: "提示",
              position: "center",
            },
            content: {
              text: /*html*/ `<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${attachmentName}</a> ？<br /><br />`,
              html: true,
            },
            btn: {
              ok: {
                callback: (details) => {
                  window.open(attachmentURL, "_blank");
                  details.close();
                },
              },
            },
            mask: {
              enable: true,
            },
            width: "88vw",
            height: "200px",
          });
        };
      }
    }
    utils.mutationObserver(document.documentElement, {
      callback: () => {
        $$<HTMLAnchorElement>(".attnm a").forEach((item) => {
          handleClick(item);
        });
        $$<HTMLAnchorElement>(".comiis_attach a").forEach((item) => {
          handleClick(item);
        });
      },
      config: { childList: true, subtree: true },
    });
    DOMUtils.waitNodeList<NodeListOf<HTMLAnchorElement>>(".attnm a").then((nodeList) => {
      nodeList.forEach((item) => {
        handleClick(item);
      });
    });
    DOMUtils.waitNodeList<NodeListOf<HTMLAnchorElement>>(".comiis_attach a").then((nodeList) => {
      nodeList.forEach((item) => {
        handleClick(item);
      });
    });
  },
};
