import { XHSUrlApi } from "@/api/XHSUrlApi";
import { $, $$, addStyle, DOMUtils, log, utils } from "@/env";
import { VueUtils } from "@components/utils/VueUtils";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";

/**
 * 一些信息
 *
 * 笔记页面，当页面宽度<960px时，会触发笔记布局改变，即变为竖向列表布局
 * ↓
 * 图
 * 介绍
 * 评论区
 *
 * >=960px时
 *
 * 图   文
 *      介绍
 *      评论区
 *
 */

export const XHSArticle = {
  init() {
    if (Panel.getValue("pc-xhs-search-open-blank-btn") || Panel.getValue("pc-xhs-search-open-blank-keyboard-enter")) {
      this.optimizationSearch();
    }
    Panel.exec(
      ["pc-xhs-search-open-blank-btn", "pc-xhs-search-open-blank-keyboard-enter"],
      () => {
        return this.optimizationSearch();
      },
      (keyList) => {
        const execFlag = keyList.some((__key__) => {
          let flag = !!Panel.getValue(__key__);
          let disabled = Panel.$data.contentConfigInitDisabledKeys.includes(__key__);
          if (disabled) {
            // 被禁用
            flag = false;
            log.warn(`.exec ${__key__} 被禁用`);
          }
          return flag;
        });
        return execFlag;
      }
    );
    Panel.execMenuOnce("pc-xhs-article-fullWidth", () => {
      return this.fullWidth();
    });
  },
  /**
   * 优化搜索
   */
  optimizationSearch() {
    function blankSearchText(searchText?: string, isBlank: boolean = true) {
      if (searchText == null) {
        let $searchText = $<HTMLInputElement>("#search-input");
        if ($searchText) {
          let searchText = $searchText.value;
          let searchUrl = XHSUrlApi.getSearchUrl(searchText);
          log.info("搜索内容: " + searchText);
          window.open(searchUrl, isBlank ? "_blank" : "_self");
        } else {
          Qmsg.error("未找到搜索的输入框");
        }
      } else {
        log.info("搜索内容: " + searchText);
        window.open(searchText, isBlank ? "_blank" : "_self");
      }
    }
    DOMUtils.waitNode<HTMLInputElement>("#search-input").then(($searchInput) => {
      /* 搜索输入框 */
      $searchInput.placeholder = "搜索小红书";
      Panel.execMenu("pc-xhs-search-open-blank-keyboard-enter", () => {
        DOMUtils.onKeyboard($searchInput, "keydown", (keyName, keyValue, otherCodeList, event) => {
          if (keyName === "Enter" && !otherCodeList.length) {
            log.info("按下回车键");
            DOMUtils.preventEvent(event);
            $searchInput.blur();
            blankSearchText();
          }
        });
      });
    });
    DOMUtils.waitNode<HTMLDivElement>("#search-input + .input-button .search-icon").then(($searchIconBtn) => {
      /* 右侧的搜索按钮 */
      Panel.execMenu("pc-xhs-search-open-blank-btn", () => {
        DOMUtils.on<PointerEvent | MouseEvent>(
          $searchIconBtn,
          "click",
          (event) => {
            DOMUtils.preventEvent(event);
            log.info("点击搜索按钮");
            blankSearchText();
          },
          {
            capture: true,
          }
        );
      });
    });
  },
  /**
   * 笔记宽屏
   */
  fullWidth() {
    log.info("笔记宽屏");
    let noteContainerWidth = Panel.getValue("pc-xhs-article-fullWidth-widthSize", 90);
    return addStyle(/*css*/ `
		.main-container .main-content{
			padding-left: 0 !important;
		}
		.outer-link-container{
			width: 100% !important;
		}
		/* 隐藏左侧工具栏 */
		.main-container .side-bar{
			display: none !important;
		}
		#noteContainer{
			width: ${noteContainerWidth}vw;
		}
		`);
  },
  /**
   * 转换笔记发布时间
   */
  transformPublishTime() {
    log.info(`转换笔记发布时间`);
    let lockFn = new utils.LockFunction(() => {
      $$<HTMLElement>(".note-content:not([data-edit-date])").forEach(($noteContent) => {
        let vueInstance = VueUtils.getVue($noteContent);
        if (!vueInstance) {
          return;
        }
        let note = vueInstance?._?.props?.note;
        if (note == null) {
          return;
        }
        let publishTime = note.time;
        let lastUpdateTime = note.lastUpdateTime;
        let ipLocation = note.ipLocation;
        if (typeof publishTime === "number") {
          let detailTimeLocationInfo = [];
          detailTimeLocationInfo.push(`发布：${utils.formatTime(publishTime)}`);
          if (typeof lastUpdateTime === "number") {
            detailTimeLocationInfo.push(`修改：${utils.formatTime(lastUpdateTime)}`);
          }
          if (typeof ipLocation === "string" && utils.isNotNull(ipLocation)) {
            detailTimeLocationInfo.push(ipLocation);
          }
          let $date = $noteContent.querySelector<HTMLElement>(".date")!;
          DOMUtils.html($date, detailTimeLocationInfo.join("<br>"));
          $noteContent.setAttribute("data-edit-date", "");
        }
      });
    });
    const observer = utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      immediate: true,
      callback: () => {
        lockFn.run();
      },
    });
    return [
      () => {
        observer?.disconnect();
      },
    ];
  },
};
