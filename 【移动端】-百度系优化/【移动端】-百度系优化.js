// ==UserScript==
// @name         【移动端】-百度系优化
// @icon         https://www.baidu.com/favicon.ico
// @namespace    https://greasyfork.org/zh-CN/scripts/418349-移动端-百度系优化
// @supportURL   https://greasyfork.org/zh-CN/scripts/418349-移动端-百度系优化/feedback
// @version      1.2.3
// @author       WhiteSevs
// @description  用于【移动端】的百度系列产品优化，包括【百度搜索】、【百家号】、【百度贴吧】、【百度文库】、【百度经验】、【百度百科】、【百度知道】、【百度翻译】、【百度图片】、【百度地图】、【百度好看视频】、【百度爱企查】、【百度问题】、【百度识图】
// @match        *://m.baidu.com/*
// @match        *://www.baidu.com/*
// @match        *://baijiahao.baidu.com/*
// @match        *://tieba.baidu.com/*
// @match        *://wk.baidu.com/*
// @match        *://tanbi.baidu.com/*
// @match        *://jingyan.baidu.com/*
// @match        *://baike.baidu.com/*
// @match        *://wapbaike.baidu.com/*
// @match        *://zhidao.baidu.com/*
// @match        *://fanyi.baidu.com/*
// @match        *://fanyi-app.baidu.com/*
// @match        *://image.baidu.com/*
// @match        *://map.baidu.com/*
// @match        *://xue.baidu.com/*
// @match        *://mbd.baidu.com/*
// @match        *://aiqicha.baidu.com/*
// @match        *://pos.baidu.com/*
// @match        *://haokan.baidu.com/*
// @match        *://graph.baidu.com/*
// @connect      www.baidu.com
// @connect      m.baidu.com
// @connect      tieba.baidu.com
// @connect      baike.baidu.com
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        unsafeWindow
// @require	     https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/449471-viewer/code/Viewer.js?version=1170654
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1225092
// @run-at       document-start
// ==/UserScript==

(function () {
  const utils = Utils.noConflict();
  const jQuery = $.noConflict(true);
  const log = new utils.Log(GM_info);
  log.config({
    logMaxCount: 20000,
    autoClearConsole: true,
    tag: true,
  });
  const httpx = new utils.Httpx(GM_xmlhttpRequest);
  httpx.config({
    onabort: function () {
      log.error("请求取消");
    },
    ontimeout: function () {
      log.error("请求超时");
    },
    onerror: function (response) {
      log.error(["httpx-onerror 请求异常", response]);
    },
  });
  let GM_Menu = null; /* 菜单 */

  const CSDN_FLAG_CSS = `
    .csdn-flag-component-box .praise {
        padding-right: 20px;
        background: #ff5722;
        text-indent: 1em;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        background: -webkit-linear-gradient(left,#ff5722,#f78d6b);
        background: -o-linear-gradient(right,#ff5722,#f78d6b);
        background: -moz-linear-gradient(right,#ff5722,#f78d6b);
        background: linear-gradient(to right,#ff5722,#f78d6b);
    }
    .csdn-flag-component-box .praise,.csdn-flag-component-box .share {
        /*width: 110px;
        height: 34px;
        line-height: 34px;*/
        height:auto;
        line-height:normal;
        color: #fff;
        background: #ff0505;
        border-radius: 5px;
        padding: 2px;
    }
    .csdn-flag-component-box a {
        display: inline-block;
        font-size: 14px;
    }
    .csdn-flag-component-box {
        /*margin: 0 auto;
        text-align: center;
        display: inline;*/
        display: flex;
        margin: 0;
        text-align: left;
        font-size: 0;
        position: relative;
        width: 260px;
        margin: 5px 0px;
    }
`;

  class LoadingView {
    constructor() {
      this.loadingClassName = "whitesev-page-isloading";
      this.loadingTextClassName = "whitesev-isloading-text";
      this.loadingIconClassName = "whitesev-isloading-icon";
      this.loadingOutSideIconClassName = "whitesev-isloading-outside";
      this.loadingWithInIconClassName = "whitesev-isloading-within";
      this.html = `
      <div class="${this.loadingClassName}">
        <span class="${this.loadingTextClassName}">Loading...</span>
      </div>`;
      this.iconHTML = `
      <div class="${this.loadingIconClassName}">
        <div class="${this.loadingOutSideIconClassName}"></div>
        <div class="${this.loadingWithInIconClassName}"></div>
      </div>`;
    }
    /**
     * 获取经过jQuery转换过的Loading的HTML
     * @param {Boolean} withIcon
     * @returns {jQuery}
     */
    getLoadingNode(withIcon = false) {
      let parseHTML = jQuery(this.html);
      if (withIcon) {
        parseHTML
          .find(`.${this.loadingTextClassName}`)
          ?.after(jQuery(this.iconHTML));
      }
      return parseHTML;
    }
    /**
     * 设置Loading显示/关闭 true显示|false关闭
     * @param {Boolean} value
     */
    setVisible(value) {
      jQuery(`.${this.loadingClassName}`)?.css(
        "display",
        value ? "flex" : "none"
      );
    }
    /**
     * 设置Loading图标显示/关闭
     * @param {Boolean} value
     */
    setIconVisible(value) {
      jQuery(`.${this.loadingIconClassName}`)?.css(
        "display",
        value ? "unset" : "none"
      );
    }
    /**
     * 设置Loading的文本
     * @param {String} text 文本
     * @param {Boolean} withIcon 设置Icon图标
     */
    setText(text, withIcon = false) {
      jQuery(`.${this.loadingTextClassName}`)?.html(`<span>${text}</span>`);
      if (withIcon) {
        if (jQuery(`.${this.loadingIconClassName}`).length === 0) {
          jQuery(`.${this.loadingTextClassName}`)?.after(this.iconHTML);
        }
        jQuery(`.${this.loadingIconClassName}`)?.css("display", "unset");
      } else {
        jQuery(`.${this.loadingIconClassName}`)?.remove();
      }
    }
    /**
     * 删除Loading元素
     */
    destory() {
      /* 销毁 */
      jQuery(`.${this.loadingClassName}`)?.remove();
    }
    /**
     * 判断Loading是否已加载到页面中
     * @returns true|false
     */
    isExists() {
      return jQuery(`.${this.loadingClassName}`).length == 0 ? false : true;
    }
    /**
     * 判断Loading是否存在Loading图标
     * @returns true|false
     */
    isExistsIcon() {
      return jQuery(`.${this.loadingIconClassName}`).length == 0 ? false : true;
    }
    /**
     * 判断Loading中的文本是否存在
     * @returns true|false
     */
    isExistsText() {
      return jQuery(`.${this.loadingTextClassName}`).length == 0 ? false : true;
    }
    /**
     * 加载需要的CSS
     */
    setCSS() {
      GM_addStyle(`
        .${this.loadingClassName}{
          margin: 0.08rem;
          background: #fff;
          height: 45px;
          font-size: 15px;
          display: flex;
          text-align: center;
          align-items: center;
          width: inherit;
          justify-content: center;
          border-radius: 0.12rem;
        }
        .${this.loadingIconClassName}{
          margin:0px 0px 28px 15px;
        }
        .${this.loadingOutSideIconClassName},
        .${this.loadingWithInIconClassName}{
          position: absolute;
          margin-left: 140px;
        }
        .${this.loadingOutSideIconClassName}{
          background-color: rgba(0, 0, 0, 0);
          border: 5px solid rgba(0, 183, 229, 0.9);
          opacity: .9;
          border-right: 5px solid rgba(0, 0, 0, 0);
          border-left: 5px solid rgba(0, 0, 0, 0);
          border-radius: 50px;
          box-shadow: 0 0 35px #2187e7;
          width: 20px;
          height: 20px;
          margin: 0 auto;
          /*position: fixed;
          left: 50%;
          top: 50%;
          margin-left: -25px;
          margin-top: -25px;*/
          -moz-animation: spinPulse 1s infinite ease-in-out;
          -webkit-animation: spinPulse 1s infinite ease-in-out;
          -o-animation: spinPulse 1s infinite ease-in-out;
          -ms-animation: spinPulse 1s infinite ease-in-out;
        }
        .${this.loadingWithInIconClassName}{
          background: rgba(0, 0, 0, 0) no-repeat center center;
          border: 5px solid rgba(0, 183, 229, 0.9);
          opacity: .9;
          border-top: 5px solid rgba(0, 0, 0, 0);
          border-bottom: 5px solid rgba(0, 0, 0, 0);
          border-radius: 50px;
          box-shadow: 0 0 15px #2187e7;
          width: 20px;
          height: 20px;
          margin: 0 auto;
          /*position: fixed;
          left: 50%;
          top: 50%;
          margin-left: -15px;
          margin-top: -15px;*/
          -moz-animation: spinoffPulse 3s infinite linear;
          -webkit-animation: spinoffPulse 3s infinite linear;
          -o-animation: spinoffPulse 3s infinite linear;
          -ms-animation: spinoffPulse 3s infinite linear;
        }
        @-moz-keyframes spinPulse {
            0% {
                -moz-transform: rotate(160deg);
                opacity: 0;
                box-shadow: 0 0 1px #505050
            }
            50% {
                -moz-transform: rotate(145deg);
                opacity: 1
            }
            100% {
                -moz-transform: rotate(-320deg);
                opacity: 0
            }
        }
        @-moz-keyframes spinoffPulse {
            0% {
                -moz-transform: rotate(0deg)
            }
            100% {
                -moz-transform: rotate(360deg)
            }
        }
        @-webkit-keyframes spinPulse {
            0% {
                -webkit-transform: rotate(160deg);
                opacity: 0;
                box-shadow: 0 0 1px #505050
            }
            50% {
                -webkit-transform: rotate(145deg);
                opacity: 1
            }
            100% {
                -webkit-transform: rotate(-320deg);
                opacity: 0
            }
        }
        @-webkit-keyframes spinoffPulse {
            0% {
                -webkit-transform: rotate(0deg)
            }
            100% {
                -webkit-transform: rotate(360deg)
            }
        }
        @-o-keyframes spinPulse {
            0% {
                -o-transform: rotate(160deg);
                opacity: 0;
                box-shadow: 0 0 1px #505050
            }
            50% {
                -o-transform: rotate(145deg);
                opacity: 1
            }
            100% {
                -o-transform: rotate(-320deg);
                opacity: 0
            }
        }
        @-o-keyframes spinoffPulse {
            0% {
                -o-transform: rotate(0deg)
            }
            100% {
                -o-transform: rotate(360deg)
            }
        }
        @-ms-keyframes spinPulse {
            0% {
                -ms-transform: rotate(160deg);
                opacity: 0;
                box-shadow: 0 0 1px #505050
            }
            50% {
                -ms-transform: rotate(145deg);
                opacity: 1
            }
            100% {
                -ms-transform: rotate(-320deg);
                opacity: 0
            }
        }
        @-ms-keyframes spinoffPulse {
            0% {
                -ms-transform: rotate(0deg)
            }
            100% {
                -ms-transform: rotate(360deg)
            }
        }`);
    }
  }
  /**
   * 动态的搜索建议组件
   */
  class SearchSuggestion {
    constructor(paramConfig) {
      let that = this;
      this.config = {
        /**
         * 目标input元素
         * @type {Element}
         */
        targetElement: paramConfig.targetElement,
        /**
         * 搜索的数据
         * @type {array}
         */
        data: paramConfig.data || [],
        /**
         * 用于显示的数据
         * @type {array}
         */
        showData: paramConfig.showData || [],
        /**
         * 是否使用absoult显示建议框
         * @type {boolean}
         * + true 默认 position为absoulte
         * + false position为fixed
         */
        isAbsoulte:
          typeof paramConfig.isAbsoulte === "undefined"
            ? true
            : paramConfig.isAbsoulte,
        /**
         * 显示删除按钮
         * @type {boolean}
         * + true 默认 显示
         * + false 不显示
         */
        showDeleteIcon:
          typeof paramConfig.showDeleteIcon === "undefined"
            ? true
            : paramConfig.showDeleteIcon,
        element: {
          /**
           * @type {string} div元素的className
           */
          searchSelectClassName:
            (paramConfig.element &&
              paramConfig.element.searchSelectClassName) ||
            "WhiteSevsSearchSelect",
          /**
           * @type {string} ul元素的className
           */
          searchSelectHintClassName:
            (paramConfig.element &&
              paramConfig.element.searchSelectHintClassName) ||
            "whiteSevSearchHint",
          /**
           * @type {string} div元素隐藏的className
           */
          searchSelectHideClassName:
            (paramConfig.element &&
              paramConfig.element.searchSelectHideClassName) ||
            "WhiteSevsSearchSelectHide",
        },
        css: {
          falInDuration:
            (paramConfig.css && paramConfig.css.falInDuration) || 0.5,
          falInTiming:
            (paramConfig.css && paramConfig.css.falInTiming) || "linear",
          falOutDuration:
            (paramConfig.css && paramConfig.css.falOutDuration) || 0.5,
          falOutTiming:
            (paramConfig.css && paramConfig.css.falOutTiming) || "linear",
          /**
           * @type {number} 选择框距离输入框距离
           */
          PaddingTop: (paramConfig.css && paramConfig.css.PaddingTop) || 8,
        },
        /**
         * 搜索没结果的html
         * @type {string}
         */
        noSearchDataHTML:
          paramConfig.noSearchDataHTML || '<li class="none">暂无其它数据</li>',
        /**
         * input元素内容改变时的回调，用于获取搜索建议列表
         */
        searchInputChangeCallBack:
          paramConfig.searchInputChangeCallBack ||
          function () {
            return [];
          },
        /**
         * 当前项点击的回调
         * @param {string} 当前项点击的值
         */
        clickItemCallBack:
          paramConfig.clickItemCallBack ||
          function (text) {
            that.setTargetInputValue(text);
            that.config.targetElement.dispatchEvent(new Event("blur"));
          },
        /**
         * 搜索项的删除回调
         * @param {number} itemElementIndex 当前删除的项的下标
         * @param {Element} itemElement 当前删除的项的元素
         */
        deleteItemCallBack:
          paramConfig.deleteItemCallBack ||
          function (itemElementIndex, itemElement) {
            console.log("删除 ", that.config.showData[itemElementIndex]);
            that.config.data.splice(dataId, 1);
            that.config.showData.splice(dataId, 1);
            itemElement.remove();
            /* 把索引顺序重新排序一下 */
            that.getSearchSelectItemElementList().forEach((item2, index2) => {
              item2.setAttribute("data-id", index2);
            });
          },
        /**
         * 获取每一项的值，传入当前项，默认返回当前项
         * @param {any} value
         * @returns {any}
         */
        getItemValue:
          paramConfig.getItemValue ||
          function (value) {
            return value;
          },
        /**
         * 获取每一项的html，传入当前项，默认返回当前项
         * @param {any} value
         * @returns {any}
         */
        getItemHTML:
          paramConfig.getItemHTML ||
          function (value) {
            return value;
          },
      };
      /**
       * 该对象执行中的存储的一些用于判断的flag或存储的数据
       */
      this.details = {
        /**
         * 当前点击的是否是删除按钮
         * @type {boolean}
         */
        isDeleteClicked: false,
      };
      if (!this.getSearchSelectElement()) {
        this.setSearchSelectElement();
        this.setCSS();
      }
      this.setTargetInputEvent();
      this.setItemEvent();
      if (this.config.showData.length) {
        this.update(this.config.showData);
      }
    }
    /**
     * 获取显示出搜索建议框的html
     * @returns {string}
     */
    getSearchSelectHTML() {
      return `
      <div class="${this.config.element.searchSelectClassName}" style="display: none;">
        <ul class="${this.config.element.searchSelectHintClassName}">
            ${this.config.noSearchDataHTML}
        </ul>
      </div>`;
    }
    /**
     * 获取显示出搜索建议框的每一项的html
     * @param {any} item 当前项的值
     * @param {number} index 当前项的下标
     * @returns {string}
     */
    getSearchItemHTML(item, index) {
      return `
      <li 
          class="item"
          data-id="${index}"
          data-value="${this.config.getItemValue(item)}">
          ${this.config.getItemHTML(
            item
          )}${this.getSearchSelectDeleteIconHTML()}
      </li>`;
    }
    /**
     * 获取搜索建议框的元素
     * @param {Element|undefined} doc
     * @returns {Element|undefined}
     */
    getSearchSelectElement(doc) {
      return (doc || document).querySelector(
        "." + this.config.element.searchSelectClassName
      );
    }
    /**
     * 获取搜索建议框ul的元素
     * @param {Element|undefined} doc
     * @returns {Element|undefined}
     */
    getSearchSelectHintElement(doc) {
      return (doc || document).querySelector(
        "ul." + this.config.element.searchSelectHintClassName
      );
    }
    /**
     * 获取搜索建议框li的元素
     * @param {Element|undefined} doc
     * @returns {NodeList|undefined}
     */
    getSearchSelectItemElementList(doc) {
      return (doc || document).querySelectorAll(
        "ul." + this.config.element.searchSelectHintClassName + " li"
      );
    }
    /**
     * 获取删除按钮的html
     * @returns {string}
     */
    getDeleteIconHTML() {
      return `
      <svg t="1669172591973" data-delete-search viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2719" width="16" height="16" style="position: absolute;right: 8px;">
        <path data-delete-search d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z" p-id="2720" fill="#e3dfdd"></path>
        <path data-delete-search d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z" p-id="2721" fill="#e3dfdd"></path>
      </svg>
      `;
    }
    /**
     * 设置css
     */
    setCSS() {
      let css = `
      <style>
      div.${this.config.element.searchSelectClassName}{
          position: ${this.config.isAbsoulte ? "absolute" : "fixed"};
          z-index: ${utils.getMaxZIndex()};
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 0;
          margin-top: ${
            this.config.targetElement.getBoundingClientRect().bottom +
            this.config.css.PaddingTop
          }px;
      }
      div.${this.config.element.searchSelectHideClassName}{
          display: none;
      }
      div.${this.config.element.searchSelectClassName} ul.${
        this.config.element.searchSelectHintClassName
      }{
          width: ${this.config.targetElement.getBoundingClientRect().width}px;
          left: ${this.config.targetElement.getBoundingClientRect().left}px;
          max-height: 300px;
          overflow-x: hidden;
          overflow-y: auto;
          padding: 5px 0;
          background-color: #fff;
          box-sizing: border-box;
          border-radius: 4px;
          box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
          position: absolute;
          z-index: inherit;
      }
      div.${this.config.element.searchSelectClassName} ul.${
        this.config.element.searchSelectHintClassName
      } li{
          margin: 0;
          line-height: normal;
          padding: 7px 16px;
          clear: both;
          color: #515a6e;
          font-size: 14px!important;
          list-style: none;
          cursor: pointer;
          transition: background .2s ease-in-out;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-right: 32px;
      }
      div.${this.config.element.searchSelectClassName} ul.${
        this.config.element.searchSelectHintClassName
      } li:hover{
          background-color: rgba(0, 0, 0, .1);
      }
      div.${this.config.element.searchSelectClassName} ul.${
        this.config.element.searchSelectHintClassName
      } .none{
          padding: 0 16px;
          text-align: center;
          color: #ccc;
      }
      div.${this.config.element.searchSelectClassName} ul.${
        this.config.element.searchSelectHintClassName
      } .active{
          color: #57a3f3;
      }
      /*定义滚动条高宽及背景
      高宽分别对应横竖滚动条的尺寸*/
      div.${this.config.element.searchSelectClassName} ul.${
        this.config.element.searchSelectHintClassName
      }::-webkit-scrollbar {
          width: 5px;
          height: 5px;
          background-color: #fff;
      }
      /*定义滚动条轨道
      内阴影+圆角*/
      div.${this.config.element.searchSelectClassName} ul.${
        this.config.element.searchSelectHintClassName
      }::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
          border-radius: 2px;
          background-color: #fff;
      }
      /*定义滑块
      内阴影+圆角*/
      div.${this.config.element.searchSelectClassName} ul.${
        this.config.element.searchSelectHintClassName
      }::-webkit-scrollbar-thumb {
          border-radius: 2px;
          -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
          background-color: #ccc;
      }
      @keyframes searchSelectFalIn {
          from {
              opacity: 0;
              display:none;
          }
          to {
              display:block;
              opacity: 1;
          }
      }
      @keyframes searchSelectFalOut {
          from {
              display:block;
              opacity: 1;
          }
          to {
              opacity: 0;
              display:none;
          }
      }
  </style>`;
      document.body.appendChild(this.parseTextToElement(css));
    }
    /**
     * 把搜索元素添加到页面中
     */
    setSearchSelectElement() {
      document.body.appendChild(
        this.parseTextToElement(this.getSearchSelectHTML())
      );
    }
    /**
     * 字符串转元素
     * @param {string} text
     * @returns {Element}
     */
    parseTextToElement(text) {
      text = text
        .replace(/^[\n|\s]*/g, "")
        .replace(/[\n|\s]*$/g, ""); /* 去除前后的换行和空格 */
      let objE = document.createElement("div");
      objE.innerHTML = text;
      let result = objE.children.length == 1 ? objE.children[0] : objE.children;
      return result;
    }
    /**
     * 添加正在搜索中
     */
    addSearching() {
      this.getSearchSelectHintElement().appendChild(
        this.parseTextToElement(`<li class="searching">正在搜索中...</li>`)
      );
    }
    /**
     * 删除正在搜索中的提示
     */
    removeSearching() {
      this.getSearchSelectHintElement().querySelector("li.searching")?.remove();
    }
    /**
     * 删除已有的搜索结果
     */
    removeAllSearch() {
      this.getSearchSelectItemElementList().forEach((item) => item.remove());
    }
    /**
     * 动态设置搜索建议框的宽度，因为目标输入框元素可能是动态隐藏的
     */
    changeSelectCSS() {
      this.getSearchSelectHintElement().style.width =
        this.config.targetElement.getBoundingClientRect().width + "px";
      this.getSearchSelectHintElement().style.left =
        this.config.targetElement.getBoundingClientRect().left + "px";
    }
    /**
     * 获取后面的删除按钮html
     * @returns {string}
     */
    getSearchSelectDeleteIconHTML() {
      if (this.config.showDeleteIcon) {
        return `
        <svg data-delete-search t="1669172591973" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2719" width="16" height="16" style="position: absolute;right: 8px;">
          <path data-delete-search d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z" p-id="2720" fill="#e3dfdd"></path>
          <path data-delete-search d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z" p-id="2721" fill="#e3dfdd"></path>
        </svg>`;
      } else {
        return "";
      }
    }
    /**
     * 更新页面显示的搜索结果
     * @param {array} data
     */
    update(data) {
      if (!Array.isArray(data)) {
        console.log(data);
        throw "传入的数据不是数组";
      }
      let that = this;
      this.config.showData = this.arrayDistinct(data);
      this.removeAllSearch();
      let parentUlDOM = this.getSearchSelectHintElement();
      if (!this.config.showData.length) {
        this.clear();
        if (this.config.targetElement.value === "") {
          this.config.data.forEach((item, index) => {
            parentUlDOM.appendChild(
              that.parseTextToElement(that.getSearchItemHTML(item, index))
            );
          });
          this.setItemEvent();
        } else {
          this.config.targetElement.dispatchEvent(new Event("focus"));
        }
      } else {
        this.config.showData.forEach((item, index) => {
          parentUlDOM.appendChild(
            that.parseTextToElement(that.getSearchItemHTML(item, index))
          );
        });
        this.setItemEvent();
      }
    }
    /**
     * 数组去重
     * @param {array} data
     * @returns {array}
     */
    arrayDistinct(data = []) {
      let result = [];
      data = new Set(data);
      for (let item of data.values()) {
        result = [item, ...result];
      }
      return result;
    }
    /**
     * 清空当前的建议
     */
    clear() {
      this.config.showData = [];
      this.removeAllSearch();
      this.getSearchSelectHintElement().appendChild(
        this.parseTextToElement(this.config.noSearchDataHTML)
      );
    }
    /**
     * 隐藏建议框
     */
    hide() {
      this.getSearchSelectElement().setAttribute("style", "display: none;");
    }
    /**
     * 显示建议框
     */
    show() {
      this.getSearchSelectElement().removeAttribute("style");
    }
    /**
     * 设置目标输入框的值
     * @param {string} value
     */
    setTargetInputValue(value) {
      this.config.targetElement.value = value;
    }
    /**
     * 设置目标输入框的各种事件
     */
    setTargetInputEvent() {
      let that = this;
      function _focus_event_(event) {
        that.getSearchSelectElement().setAttribute(
          "style",
          `
                    -moz-animation: searchSelectFalIn ${
                      that.config.css.falInDuration
                    }s 1 ${that.config.css.falInTiming};
                    -webkit-animation: searchSelectFalIn ${
                      that.config.css.falInDuration
                    }s 1 ${that.config.css.falInTiming};
                    -o-animation: searchSelectFalIn ${
                      that.config.css.falInDuration
                    }s 1 ${that.config.css.falInTiming};
                    -ms-animation: searchSelectFalIn ${
                      that.config.css.falInDuration
                    }s 1 ${that.config.css.falInTiming};
                    margin-top: ${
                      that.config.targetElement.getBoundingClientRect().bottom +
                      that.config.css.PaddingTop
                    }px;
                    `
        );

        that.changeSelectCSS();
      }
      function _blur_event_(event) {
        setTimeout(() => {
          if (that.details.isDeleteClicked) {
            return;
          }
          if (
            getComputedStyle(that.getSearchSelectElement()).display === "none"
          ) {
            return;
          }
          that.getSearchSelectElement().setAttribute(
            "style",
            `
              -moz-animation: searchSelectFalOut ${that.falOutDuration}s 1 ${
              that.falOutTiming
            };
              -webkit-animation: searchSelectFalOut ${that.falOutDuration}s 1 ${
              that.falOutTiming
            };
              -o-animation: searchSelectFalOut ${that.falOutDuration}s 1 ${
              that.falOutTiming
            };
              -ms-animation: searchSelectFalOut ${that.falOutDuration}s 1 ${
              that.falOutTiming
            };
              margin-top: ${
                that.config.targetElement.getBoundingClientRect().bottom +
                that.config.css.PaddingTop
              }px;
                        `
          );
          setTimeout(() => {
            that
              .getSearchSelectElement()
              .setAttribute("style", "display:none;");
          }, that.falOutDuration * 1000);
        }, 100);
      }
      function _click_event(event) {
        event.target.dispatchEvent(new Event("focus"));
      }
      async function _propertychange_event_(event) {
        that.config.targetElement.dispatchEvent(new Event("focus"));
        let getListResult = await that.getList(event.target.value);
        that.update(getListResult);
      }
      /* 禁用输入框自动提示 */
      this.config.targetElement.setAttribute("autocomplete", "off");
      /* 输入框获取焦点事件 */
      this.config.targetElement.addEventListener("focus", _focus_event_, true);
      /* 输入框点击事件 */
      this.config.targetElement.addEventListener("click", _click_event, true);
      /* 输入框失去焦点事件 */
      this.config.targetElement.addEventListener("blur", _blur_event_, false);
      /* 输入框内容改变事件 */
      this.config.targetElement.addEventListener(
        "input",
        _propertychange_event_,
        true
      );
      const userDocumentClickEvent = function () {
        let checkDOM = that.getSearchSelectHintElement();
        let mouseClickPosX = Number(
          window.event.clientX
        ); /* 鼠标相对屏幕横坐标 */
        let mouseClickPosY = Number(
          window.event.clientY
        ); /* 鼠标相对屏幕纵坐标 */
        let elementPosXLeft = Number(
          checkDOM.getBoundingClientRect().left
        ); /* 要检测的元素的相对屏幕的横坐标最左边 */
        let elementPosXRight = Number(
          checkDOM.getBoundingClientRect().right
        ); /* 要检测的元素的相对屏幕的横坐标最右边 */
        let elementPosYTop = Number(
          checkDOM.getBoundingClientRect().top
        ); /* 要检测的元素的相对屏幕的纵坐标最上边 */
        let elementPosYBottom = Number(
          checkDOM.getBoundingClientRect().bottom
        ); /* 要检测的元素的相对屏幕的纵坐标最下边 */
        if (
          !(
            mouseClickPosX >= elementPosXLeft &&
            mouseClickPosX <= elementPosXRight &&
            mouseClickPosY >= elementPosYTop &&
            mouseClickPosY <= elementPosYBottom
          ) &&
          !(
            checkDOM.innerHTML.includes(window.event.target.innerHTML) ||
            that.config.targetElement.innerHTML.includes(
              window.event.target.innerHTML
            )
          )
        ) {
          /* 不在点击范围内或元素上，隐藏 */
          that.details.isDeleteClicked = false;
          that.config.targetElement.dispatchEvent(new Event("blur"));
        }
      };
      document.addEventListener("touchstart", userDocumentClickEvent);
      document.addEventListener("click", userDocumentClickEvent);

      this.removeTargetInputEvent = function () {
        this.config.targetElement.removeAttribute("autocomplete");
        this.config.targetElement.removeEventListener(
          "focus",
          _focus_event_,
          true
        );
        this.config.targetElement.removeEventListener(
          "click",
          _click_event,
          true
        );
        this.config.targetElement.removeEventListener(
          "blur",
          _blur_event_,
          false
        );
        this.config.targetElement.removeEventListener(
          "input",
          _propertychange_event_,
          true
        );
        document.removeEventListener("touchstart", userDocumentClickEvent);
        document.removeEventListener("click", userDocumentClickEvent);
      };
    }
    /**
     * 移除目标输入框的各种事件
     */
    removeTargetInputEvent() {}
    /**
     * 设置搜索建议各个项的事件
     */
    setItemEvent() {
      let that = this;
      this.getSearchSelectItemElementList().forEach((item, index) => {
        ((item2) => {
          item2.addEventListener(
            "click",
            function (event) {
              utils.preventEvent(event);
              that.details.isDeleteClicked = false;
              that.config.targetElement.dispatchEvent(new Event("focus"));
              let clickElement = event.target;
              if (
                clickElement.hasAttribute("data-delete-search") &&
                (clickElement.localName === "svg" ||
                  clickElement.localName === "path")
              ) {
                /* 是删除按钮 */
                that.details.isDeleteClicked = true;
                let dataId = parseInt(item2.getAttribute("data-id"));
                that.config.deleteItemCallBack(dataId, item2);
                if (that.config.data.length === 0) {
                  that.clear();
                }
              } else {
                that.config.clickItemCallBack(this.getAttribute("data-value"));
              }
            },
            true
          );
        })(item, index);
      });
    }
    /**
     * 获取数组数据
     * @param {string} text
     * @returns
     */
    getList(text) {
      let event = {};
      let that = this;
      event.text = text;
      event.targetElement = this.targetElement;
      event.data = this.config.data;
      event.showData = this.config.showData;
      this.removeSearching();
      this.addSearching();
      return new Promise(async (resolve) => {
        let result = await that.config.searchInputChangeCallBack(event);
        if (this.config.targetElement.value !== "" && result.length == 0) {
          this.config.targetElement.dispatchEvent(new Event("focus"));
        }
        that.removeSearching();
        resolve(result);
      });
    }
  }

  const baidu = {
    current_url: window.location.href,
    init() {
      this.search();
      this.searchHome();
      this.baijiahao();
      this.tieba();
      this.wenku();
      this.jingyan();
      this.baike();
      this.baiketashuo();
      this.zhidao();
      this.fanyi();
      this.fanyiApp();
      this.image();
      this.map();
      this.mbd();
      this.xue();
      this.aiqicha();
      this.pos();
      this.haokan();
      this.graph();
    },
    css: {
      search: `
			.c-container.na-ec-item,
			.c-container.ec-container,
			div[data-type="ad"],
			.c-result.sfc-log[data-tpl="adv_wenku_fc"],
			.c-recomm-wrap.new-ux-recom-wrapper.animation,
			#results-pre,
			.video-recommend,
			.c-result.sfc-log[data-tpl="search_recomm"],
			.sfc-image-content-waterfall-item[wat-item-data-id="no-img"],
			.se-results-pre,
			.ec_wise_ad,
			div#copyright + div,
			div#pop-up,
			div[class*='ad-wrapper__'],
			div[class*='rec-wrapper__'],
      .brand-entry,
      .barea-ad,
      .swan-ad-fc-rcmd.swan-ad-fc-base-wrap[data-platform],
      div#page-bd div.recommend,
      div.short-mini div[data-module="rec:undefined-undefined"],
      /* 相关软件 */
      div[srcid="sigma_celebrity_rela"]{
				display:none !important;
			}
			.searchboxtop.newsearch-white-style .se-form {
				border-color: #4e6ef2 !important;
			}
			.searchboxtop.newsearch-white-style .se-bn {
				color: #fff !important;
				background: #4e6ef2 !important;
			}
			.se-head-logo .se-logo img {
				display: inherit !important;
			}
			.se-head-tablink {
				border-bottom: 1px solid #e6e6e6 !important;
				//background-color: #fff !important;
				background-color: transparent !important;
			}

			a.se-tabitem span{
				color: #000 !important;
			}
			// div.c-peak-layer{
			//   display:none !important;
			// } 百度关键字背景
			.se-tablink-scroll-wrapper .se-tab-cur:after{
				border-bottom: 2px solid #38f !important;
			}
			.c-tags-scroll.c-padding-x{
				display: none !important;
			}
			.white-bdsearch-isredirecrt{  
				display: inline-flex;
				background: #43ba76;
				color: #fff;
				width: 28px;
				font-size: 16px;
				line-height: 25px;
				justify-content: center;
				align-items: center;
				border-radius: 5px;
				margin: 0 auto;
				margin-right: 6px;
			}
			/* 修复图片显示问题 */
			.image-strong-card div[class*="image-content__"] > div{
				display: inline-block;
				overflow: hidden;
				vertical-align: top;
			}
			.c-result-content div[class*="tieba-newxml-forum-img-class__"]{
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
				align-items: center;
			}
			
			.c-result-content div[class*="tieba-newxml-forum-img__"]{
				width: .553rem;
				height: .553rem;
			}
			
			.c-result-content div[class*="tieba-newxml-forum-img__"] img{
				width: 100%;
				height: 100%;
				border-radius: .09rem;
			}
			.c-result-content div[class*="tieba-newxml-forum-class__"]{
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-orient: vertical;
				-webkit-box-direction: normal;
				-webkit-flex-direction: column;
				flex-direction: column;
				-webkit-box-pack: center;
				-webkit-justify-content: center;
				justify-content: center;
				max-width: 2.2rem;
			}
			.c-result-content div[class*="c-img-content-btn__"]{
				position: absolute;
				right: 0;
				width: .55rem;
				text-align: center;
				line-height: .28rem;
				border: 1px solid rgba(31,31,31,.5);
				border-radius: .15rem;
				font-family: PingFangSC-Medium;
				font-size: .13rem;
				color: #1f1f1f;
			}
			.c-result-content div[class*="tieba-newxml-thread-comment-user__"]{
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
				align-items: center;
				margin-top: .03rem;
			}
			.c-result-content div[class*="tieba-newxml-thread-comment-user__"] img{
				width: .16rem;
				height: .16rem;
				border-radius: 50%;
			}
			.c-result-content div[class*="tieba-newxml-thread-comment-user__"] span{
				margin-right: .08rem;
			}
			
		`,
      searchHome: `
			html,
			body,
			div#header{
				height: calc( 100vh - 120px );
			}
			form#index-form{ /* fixed垂直水平居中 */
				position: fixed;
				top:0;
				right:0;
				bottom:0;
				left:0;
				margin:auto !important;
				width: 90%;
			}
			div#navs ~ div,
			#login-wraps,
			a.square-enterance,
			div#ts-image-uploader-icon,
			div.baiduappcall-wrap div.voice.call,
			div.tab_news,
			div#navs{
				display: none !important;
			}
		`,
      baijiahao: `
			.layer-wrap,
			.openImg,
			.oPadding,
			.infinite-scroll-component__outerdiv,
			.bottomTTSStruct,
			.undefined,
			.headDeflectorContainer,
			.followSuper,
			#searchwordSdk ~ div:nth-child(n+4),
			#searchwordSdk,
			div#commentModule div div span:last-child,
      /* 顶部打开APP横幅 */
      #headDeflectorContainer,
      /* 展开全文 */
      .foldMaskWrapper{
				display:none !important;
			}
			body.scrollHide{
				overflow:auto !important;
			}
			.mainContent,
      #mainContentContainer{
				height:  auto !important;
			}
		`,
      tieba: `
			.tb-backflow-defensive,
			.fixed-nav-bar-defensive,
			.post-cut-guide,
			.ertiao-wrap-defensive,
			.feed-warp.gray-background,
			.pb-page-wrapper.app-view.transition-fade nav:first-child,
			.comment-box,
			.only-lz,
			.nav-bar-v2 .nav-bar-bottom,
			.more-image-desc,
			.fengchao-banner-defensive,
			.wake-app,
			.banner-wrapper-defensive,
			.open-app,
      .topic-share-page-v2 .bav-bar-top{
				display:none !important;
			}
			body.tb-modal-open{
				overflow:auto !important;
			}
		`,
      wenku: `
			.reader-pop-manager-view-containter,
			.core-download,
			.card-wrap.card-vip,
			.pop-manager-view-containter,
			#carousel,
			.card-wrap,
			.n-card-wrap-exp,
			.pageNo .pager~div[class*="__wm"],
			.fold-pager,
			.vip-choice,
			.wk-bottom-btn,
			.continue-read-wrap.invite-clipboard,
			.wk-student,
			.search-pay-container,
			.wk-student-defense,
			.vip-rec-card-main,
      .back-dialog,
      div.middle-box-root{
				display:none !important;
			}
			.bartop{
				display: unset;
			}
			.reader-wrap{
				height:auto !important;
			}
			#view-rr-app{
				overflow-y:auto !important;
			}
			#view-app,
			#view-rr-app{
				max-height: 100% !important;
			}
			.top-card{
				margin-top: 10px !important;
			}
			*{
				-webkit-touch-callout: inherit !important;
				-khtml-user-select: auto !important;
				-moz-user-select: auto !important;
				-ms-user-select: auto !important;
				user-select: auto !important;
			}
		`,
      jingyan: `
			.article-feed-next,
			.wgt-rel-exp-feed,
			.article-feed-btn-fixed,
			.read-whole-mask.app,
			.asp-self-rander,
			.baobao-image-item,
			#wgt-ad-guess{
				display:none !important;
			}
			.exp-content-container{
				max-height: 100% !important;
				overflow:auto !important;
			}
		`,
      baike: `
			.BK-after-content-wrapper,
			.yitiao-container,
			.BK-content-load,
			#J-tashuo-button-fixed,
			#J-super-layer-promote{
				display:none !important;
			}
			#J-other-content{
				display:block !important;
			}
		`,
      zhidao: `
			/* .dec + div, */
			#feed-recommend,
			.dec,
			.wgt-topic-hot,
			#respect-footer,
			#wap-youx-change-asp,
			div.question-line + div:not(.replies-container),
			.wgt-asp-youx,
			.w-detail-display-btn,
			.ask-for-friend,
			#knowledge-answer-list,
			.go-to-ask,
			div[class*='ads']{
				display:none !important;
			}
			.w-detail-container{
				max-height: 100% !important;
				overflow: auto !important;
			}
		`,
      fanyi: `
			.app-bar,
			.jifeng-container,
			.intro-title,
      .sideQrContainer,
      .inner.clearfix,
      section.bottom-intro,
      #desktop-guide-wrapper{
				display:none !important;
			}
			.new-header-dl{
				visibility: hidden;
			}
		`,
      fanyiapp: `
			.fanyi-invoke-btn,
			.top-bn{
				display:none !important;
			}
		`,
      image: `
			#boxBanner{
				display:none !important;
			}
		`,
      map: `
			.index-widget-guidebanner,
			.common-widget-bottom-banner-changeId,
			#index-areaEntry-widget,
			div.common-widget-bottom-banner-changeId,
			#downloadnativepopup,
			.xiaoduVoiceCard,
			.index-widget-guidebanner,
      #message-center-panel,
      .xiaoduVoice-banner.-border-round{
				display:none !important;
			}
		`,
      mbd: `
			div.headDeflectorContainer,
      #bdrainrwDragButton,
			#page_wrapper .other div[class*='undefined'],
			#page_wrapper .other > div[class=""]{
				display: none !important;
			}
		`,
      xue: `
			.sc-dkcEsn,
			.sc-fHSyak,
			.sc-gikAfH,
			swan-view.strategy-institution-list,
			swan-view.strategy-wrapper,
			.swan-spider-tap,
			.booking,
			.head-bar,
			.head-bar-placeholder{
				display: none !important;
			}
			.sc-cHGmPC{
				width: auto !important;
			}
		`,
      aiqicha: `
      div.header-down-app,
      div.active-enter,
      div.app-enter,
      div.coupon-active,
      div.cpc-adv-container,
      div.detail-footer.detail-footer-test,
      div.index-more[data-show-id="indexMoreExposure"]
      {
        display: none !important;
      }
      .bread-crumbs.has-down,
      .border-bottom-line{
        top: 0 !important;
      }
    `,
      pos: `
      html,body{
        display: none !important;
      }`,
      haokan: `
      div.share-origin.wx-share-launch,
      div.open-app-top.share-origin-fixed.wx-share-launch,
      div.open-app-bottom.wx-share-launch{
        display: none !important;
      }
      `,
      graph: `
      #app section.vf-home-booth div.vf-w-button.vf-home-booth-camera,
      #viewport .graph-imagecut-banner-invoke{
        display: none !important;
      }
      `,
    },
    /**
     * 百度搜索-主页
     */
    searchHome() {
      if (
        !this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/$/g) &&
        !this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/\?ref=/g) &&
        !this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/\?tn=/g)
      ) {
        return;
      }
      GM_addStyle(this.css.searchHome);
      log.info("插入CSS规则-主页");
    },
    /**
     * 百度搜索
     */
    search() {
      if (!this.current_url.match(/^http(s|):\/\/(m|www).baidu.com\/.+/g)) {
        return;
      }

      /**
       * @param {Dictionary} originURLMap 链接字典
       */
      const handleItemURL = {
        originURLMap: null,
        /**
         * 为搜索结果每一条设置原始链接
         * @param {jQuery} jQDOM
         * @param {String} articleURL article的真实url
         */
        setArticleOriginUrl(jQDOM, articleURL) {
          /* 处理超链接 */
          jQDOM.find("a").each(async (index, item) => {
            if (handleItemURL.originURLMap.has(item.href)) {
              articleURL = handleItemURL.originURLMap.get(item.href);
            }
            let domOriginUrl = handleItemURL.parseDOMAttrOriginUrl(
              jQuery(item)
            );
            if (!utils.isNull(domOriginUrl)) {
              articleURL = domOriginUrl;
            }
            if (utils.isNull(articleURL) || articleURL === item.href) {
              return;
            }
            item.href = articleURL;
            log.info("替换成新链接: " + articleURL);
          });
          /* 这个是百度笔记(可能) */
          jQDOM
            .find("div[data-aftclk][class*=img-container]")
            .each((index, item) => {
              let domOriginUrl = handleItemURL.parseDOMAttrOriginUrl(
                jQuery(item)
              );
              if (!utils.isNull(domOriginUrl)) {
                item.setAttribute("href", domOriginUrl);
                item.setAttribute("rl-link-href", domOriginUrl);
                log.info("替换成新链接2: " + domOriginUrl);
              }
            });
          /* 对搜锁结果中存在的视频进行处理 */
          jQDOM
            .find("div.c-video-container div[data-aftclk]")
            .each((index, item) => {
              let domOriginUrl = handleItemURL.parseDOMAttrOriginUrl(
                jQuery(item)
              );
              if (!utils.isNull(domOriginUrl)) {
                item.setAttribute("href", domOriginUrl);
                item.setAttribute("rl-link-href", domOriginUrl);
                log.info("视频替换成新链接: " + domOriginUrl);
              }
            });
          /* 对搜锁结果中存在的视频进行处理 */
          jQDOM
            .find('div[data-module="sc_pc"] div[rl-link-href]')
            .each((index, item) => {
              let domOriginUrl = handleItemURL.parseDOMAttrOriginUrl(
                jQuery(item)
              );
              if (!utils.isNull(domOriginUrl)) {
                item.setAttribute("href", domOriginUrl);
                item.setAttribute("rl-link-href", domOriginUrl);
                log.info("视频替换成新链接: " + domOriginUrl);
              }
            });
        },
        /**
         * 解析在JSON数据中的urlParams中真正的链接，如果不存在，返回undefined
         * @param {object} data 传入 {"urlParams":{...}} 中的urlParams
         * @returns {undefined|string}
         */
        parseURLParamsOriginURL(data) {
          if (data["originUrl"]) {
            return data["originUrl"];
          } else if (data["log"]) {
            /* 隐藏在log的mu中 */
            let url = undefined;
            try {
              url = utils.toJSON(data["log"])["mu"];
              utils.isNull(url) && (url = undefined);
            } catch (error) {}
            return url;
          }
        },
        /**
         * 由于部分真实链接存储在 script 标签中，得取出
         * @param {jQuery} jqNode 目标元素
         * @returns {Map}
         */
        parseScriptDOMOriginUrlMap(jqNode) {
          let urlMap = new utils.Dictionary();
          jqNode.find("script[id^='atom-data-']").each((index, item) => {
            let json_data = utils.toJSON(item.innerHTML);
            if (json_data["data"]["resultAtomData"] == null) {
              return;
            }
            let resultAtomData = json_data["data"]["resultAtomData"];
            if (
              resultAtomData["abstract"] &&
              resultAtomData["abstract"]["urlParams"] &&
              resultAtomData["abstract"]["urlParams"]["tcUrl"]
            ) {
              let url = handleItemURL.parseURLParamsOriginURL(
                resultAtomData["abstract"]["urlParams"]
              );
              if (url) {
                urlMap.set(
                  resultAtomData["abstract"]["urlParams"]["tcUrl"],
                  url
                );
              }
            }
            if (
              resultAtomData["content"] &&
              resultAtomData["content"]["abstract"] &&
              resultAtomData["content"]["abstract"]["urlParams"] &&
              resultAtomData["content"]["abstract"]["urlParams"]["tcUrl"]
            ) {
              let url = handleItemURL.parseURLParamsOriginURL(
                resultAtomData["content"]["abstract"]["urlParams"]
              );
              if (url) {
                urlMap.set(
                  resultAtomData["content"]["abstract"]["urlParams"]["tcUrl"],
                  url
                );
              }
            }
            if (
              resultAtomData["content"] &&
              resultAtomData["content"]["links"] &&
              resultAtomData["content"]["links"]["list"]
            ) {
              resultAtomData["content"]["links"]["list"].forEach((item) => {
                item.forEach((item2) => {
                  if (item2["urlParams"]["tcUrl"]) {
                    let url = handleItemURL.parseURLParamsOriginURL(
                      item2["urlParams"]
                    );
                    if (url) {
                      urlMap.set(item2["urlParams"]["tcUrl"], url);
                    }
                  }
                });
              });
            }
            if (
              resultAtomData["content"] &&
              resultAtomData["content"]["site"]
            ) {
              resultAtomData["content"]["site"]["list"].forEach((item) => {
                if (item["urlParams"]["tcUrl"]) {
                  let url = handleItemURL.parseURLParamsOriginURL(
                    item["urlParams"]
                  );
                  if (url) {
                    urlMap.set(item["urlParams"]["tcUrl"], url);
                  }
                }
              });
            }
          });
          return urlMap;
        },
        /**
         * 解析DOM节点上隐藏在属性中的真正url
         * @param {jQuery} jQDOM
         * @returns {string|undefined}
         */
        parseDOMAttrOriginUrl(jQDOM) {
          let url = null;
          let dataLog = jQDOM.attr("data-log");
          if (dataLog) {
            try {
              dataLog = utils.toJSON(dataLog);
              url = dataLog.mu;
            } catch (error) {
              log.error("DOM的属性data-log不存在👇");
              log.error(error);
            }
          }
          if (utils.isNull(url)) {
            let dataIVK = jQDOM.attr("data-ivk");
            if (dataIVK) {
              try {
                dataIVK = utils.toJSON(dataIVK);
                url = dataIVK.control.default_url || dataIVK.control.dataUrl;
              } catch (error) {
                log.error("DOM的属性data-ivk不存在👇");
                log.error(error);
              }
            }
          }

          if (utils.isNull(url)) {
            let rlLinkDataLog = jQDOM.attr("rl-link-data-log");
            if (rlLinkDataLog) {
              try {
                rlLinkDataLog = utils.toJSON(rlLinkDataLog);
                if (utils.isNull(rlLinkDataLog.mu) && rlLinkDataLog.extra) {
                  try {
                    let rlLinkDataLogExtra = utils.toJSON(rlLinkDataLog.extra);
                    url = rlLinkDataLogExtra.loc || rlLinkDataLogExtra.log_loc;
                    url = decodeURIComponent(url);
                  } catch (error) {
                    log.error("DOM的属性rl-link-data-log的extra不存在👇");
                    log.error(error);
                  }
                } else {
                  url = rlLinkDataLog.mu;
                }
              } catch (error) {
                log.error("DOM的属性rl-link-data-log不存在👇");
                log.error(error);
              }
            }
          }
          if (utils.isNull(url)) {
            let articleDataLog = jQDOM
              .find("article")
              ?.attr("rl-link-data-log");
            if (articleDataLog) {
              try {
                articleDataLog = utils.toJSON(articleDataLog);
                url = articleDataLog.mu;
              } catch (error) {
                log.error("article DOM的属性的rl-link-data-log不存在👇");
                log.error(jQDOM);
              }
            }
          }
          if (utils.isNull(url)) {
            let articleLinkDataIVK = jQDOM
              .find("article")
              ?.attr("rl-link-data-ivk");
            if (articleLinkDataIVK) {
              try {
                articleLinkDataIVK = utils.toJSON(articleLinkDataIVK);
                url =
                  articleLinkDataIVK.control.default_url ||
                  articleLinkDataIVK.control.dataUrl;
              } catch (error) {
                log.error("article DOM的属性rl-link-data-ivk不存在👇");
                log.error(error);
              }
            }
          }

          if (utils.isNull(url)) {
            url = null;
            /* log.error(["未在元素节点中找到隐藏的原始URL", jQDOM]); */
          } else {
            /* 对每个中文字符进行编码 */
            let chineseArr = url.match(/[\u4e00-\u9fa5]/g);
            if (chineseArr) {
              for (let i = 0; i < chineseArr.length; i++) {
                url = url.replace(chineseArr[i], encodeURI(chineseArr[i]));
              }
            }
          }
          /* 因为链接中存在%25，需要正确替换成% */
          if (!utils.isNull(url) && url.startsWith("https://m.baidu.com/sf?")) {
            url = decodeURIComponent(url);
            /* url = url.replaceAll("%25","%") */
          }
          return url;
        },
        /**
         * 给元素添加【CSDN】下载标识
         * @param {jQuery} jQDOM
         */
        addCSDNFlag(jQDOM) {
          if (jQDOM.find(".csdn-flag-component-box").length) {
            return;
          }
          jQDOM
            .find(".c-title-text")
            ?.append(
              jQuery(
                `<div class="csdn-flag-component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>`
              )
            );
          log.success("插入CSDN下载提示标题");
        },
        /**
         * 移除广告、推广
         */
        removeAds() {
          if (
            GM_Menu.get("baidu_search_blocking_everyone_is_still_searching")
          ) {
            let pageRelativeElement = jQuery("#page-relative");
            if (pageRelativeElement.length) {
              log.success(
                `删除广告位 ==> 末尾 大家都在搜 ${pageRelativeElement.length}个`
              );
              pageRelativeElement.remove();
            }
            let centerRecommandWarpperElement = jQuery(
              ".c-recomm-wrap.new-ux-recom-wrapper.c-bg-color-white.animation"
            );
            if (centerRecommandWarpperElement.length) {
              log.success(
                `删除广告位 ==> 中间 大家都在搜 ${centerRecommandWarpperElement.length}个`
              );
              centerRecommandWarpperElement.remove();
            }
          }
          let popUpElement = jQuery("#pop-up");
          if (popUpElement.length) {
            log.success(`删除 ==> 跳转百度app提示 ${popUpElement.length}个`);
            popUpElement.remove();
          }
          let ecWiseAdElement = jQuery(".ec_wise_ad");
          if (ecWiseAdElement.length) {
            log.success(
              `删除 ==> 顶部的部分商品广告 ${ecWiseAdElement.length}个`
            );
            ecWiseAdElement.parent().remove();
          }

          jQuery(".c-result.result").each((index, item) => {
            item = jQuery(item);
            let dataLog = utils.toJSON(
              item.attr("data-log")
            ); /* 获取属性上的LOG */
            let searchArticleOriginal_link = dataLog["mu"]; /* 真实链接 */
            if (
              GM_Menu.get("baidu_search_blocking_everyone_is_still_searching")
            ) {
              if (
                searchArticleOriginal_link.match(/recommend_list.baidu.com/g) ||
                item.attr("tpl") === "recommend_list"
              ) {
                item?.remove();
                log.success("删除广告 ==> 大家还在搜");
              }
              if (item.text().substr(0, 5) === "大家还在搜") {
                item?.remove();
                log.success("删除广告 ==> 大家都在搜（能看到的）");
              }
              if (item.find(".c-atom-afterclick-recomm-wrap").length) {
                item.find(".c-atom-afterclick-recomm-wrap")?.remove();
                log.success("删除广告 ==> 大家还在搜:隐藏的(点击后，跳出来的)");
              }
              document.querySelectorAll("span").forEach((item) => {
                let resultParentElement = item.parentElement.parentElement;
                if (
                  item.innerText.match(/百度APP内打开/) ||
                  resultParentElement.getAttribute("data-from") === "etpl"
                ) {
                  resultParentElement.remove();
                  log.success(
                    "删除广告 ==> 百度APP内打开，隐藏的广告，会在滚动时跳出来的"
                  );
                }
              });
            }
            let bottomLogoElement = item.find(".c-color-source"); /* 底部标识 */
            if (bottomLogoElement.length) {
              bottomLogoElement.each((_index_, _item_) => {
                if (_item_.outerText.match(/百度(APP内打开|手机助手)/)) {
                  item.remove();
                  log.success("删除广告 ==> 百度APP内打开|百度手机助手");
                }
              });
            }

            if (
              searchArticleOriginal_link.match(
                /^http(s|):\/\/(download.csdn.net|www.iteye.com\/resource)/g
              )
            ) {
              handleItemURL.addCSDNFlag(item);
            }
            if (
              item.attr("srcid") &&
              item.attr("srcid").match(/(sigma|vid_fourfold)/g)
            ) {
              item.remove();
              log.success("删除推荐 ==> xxx 相关 xxx");
            }
            if (searchArticleOriginal_link.match(/expert.baidu.com/g)) {
              item?.remove();
              log.success("删除广告 ==> 百度健康");
            }
            if (searchArticleOriginal_link.match(/author.baidu.com\/home\//g)) {
              item?.remove();
              log.success("删除广告 ==> 百家号聚合");
            }
            if (dataLog["ensrcid"] == "wenda_inquiry") {
              item?.remove();
              log.success("删除广告 ==> 问一问");
            }
          });
        },
        /**
         * 重定向顶部的链接，如全部、视频、图片、贴吧、咨询...
         */
        redirectTopLink() {
          document.querySelectorAll(".se-head-tablink a").forEach((item) => {
            if (
              item.hasAttribute("data-sflink") &&
              !utils.isNull(item.getAttribute("data-sflink")) &&
              item
                .getAttribute("href")
                .startsWith("https://m.baidu.com/from=") &&
              item.getAttribute("href") !== item.getAttribute("data-sflink")
            ) {
              log.success(
                "重定向顶部按钮: " + item.outerText.trim(),
                "#ba00f8"
              );
              item.href = item.getAttribute("data-sflink");
            }
          });
        },
        /**
         * 删除script标签中的百度APP提示
         */
        replaceScriptBaiDuTip() {
          document.querySelectorAll("script").forEach((item) => {
            if (
              item.innerText.match(/define\(\"@molecule\/aftclk\/index\",/g)
            ) {
              item.remove();
              log.success("删除广告 ==> script元素 跳转百度app提示");
            }
          });
        },
        /**
         * 替换链接
         * @returns {Promise}
         */
        async replaceLink() {
          let searchResultList = Array.from(
            document.querySelectorAll(".c-result.result")
          );
          for (const searchResultIndex in searchResultList) {
            let item = jQuery(searchResultList[searchResultIndex]);
            let resultItemOriginURL =
              handleItemURL.parseDOMAttrOriginUrl(
                item
              ); /* 根据已获取的真实链接取值 */

            if (utils.isNull(resultItemOriginURL)) {
              /* 未取到值 */
              return;
            }
            let articleElement = item.find("article");
            /* 不处理没有article标签的元素 */
            if (articleElement.length === 0) {
              return;
            }

            if (
              item.attr("tpl") === "wenda_abstract" &&
              item.attr("preventClick") == null
            ) {
              /* 该item为搜索智能生成该为点击该块，获取url进行跳转 */
              item.attr("preventClick", "true");
              item.on("click", function (event) {
                event.preventDefault();
                let clickNode = event.target;
                if (
                  clickNode.localName &&
                  clickNode.localName === "sup" &&
                  jQuery(clickNode).attr("rl-type") === "stop"
                ) {
                  return;
                } else {
                  window.stop();
                  window.location.href = decodeURI(resultItemOriginURL);
                }
              });
              return;
            }

            /* 视频 */
            if (
              resultItemOriginURL.match(
                /^http(s|):\/\/www.internal.video.baidu.com/g
              )
            ) {
              let internalVideo = decodeURI(
                articleElement.getAttribute("rl-link-data-log")
              );
              let internalVideoMatch = internalVideo.match(
                /\/sf\?pd=video_pag(.*?)={/g
              );
              if (internalVideoMatch) {
                internalVideoMatch = internalVideoMatch[0];
                let newinternalVideo = internalVideoMatch.substring(
                  0,
                  internalVideoMatch.length - 2
                );
                log.info(`视频链接 ${newinternalVideo}`);
                handleItemURL.setArticleOriginUrl(item, newinternalVideo);
                articleElement.attr("rl-link-href", newinternalVideo);
              }
            } else if (
              resultItemOriginURL.match(
                /^http(s|):\/\/m.baidu.com\/productcard/g
              )
            ) {
              log.error("该链接不予替换: " + resultItemOriginURL);
            } else {
              handleItemURL.setArticleOriginUrl(item, resultItemOriginURL);
              articleElement.attr("rl-link-href", resultItemOriginURL);
            }
            if (
              !resultItemOriginURL.match(/^http(s|):\/\/m.baidu.com\/from/g)
            ) {
              if (!GM_Menu.get("menu_showisdirect")) {
                return;
              }
              if (item.find(".white-bdsearch-isredirecrt").length === 0) {
                let title_text_element = item.find(".c-title-text");
                let is_redirect_icon = document.createElement("div");
                is_redirect_icon.className = "white-bdsearch-isredirecrt";
                is_redirect_icon.innerHTML = "<span>重</span>";
                title_text_element.prepend(is_redirect_icon);
              }
            }
          }
        },
      };

      /**
       * 点击输入框，输入其它文字，有提示，禁止百度篡改，且极大地增加搜索速度
       */
      function clickOtherSearchEvent() {
        let suggestList = "#se-box .suggest-content";
        let suggestListBtn = "#se-box .suggest-content button";
        let suggestList2 = "#se-box2 .suggest-content";
        let suggestListBtn2 = "#se-box2 .suggest-content button";
        let suggestList_HOME = "#index-box .suggest-content";
        let suggestListBtn_HOME = "#index-box .suggest-content button";
        let searchInput = "#kw";
        let searchInput2 = "#kw2";
        let searchBtn = "#se-bn";
        let searchBtn2 = "#se-bn2";
        let searchInput_HOME = "#index-kw";
        let searchBtn_HOME = "#index-bn";
        function mutationObserverFunction(btnElement) {
          log.success("设置搜索建议自定义click事件");
          jQuery(btnElement)?.on("click", function (event) {
            event?.stopPropagation();
            event?.preventDefault();
            window?.stop();
            let redirectURL =
              window.location.origin + "/s?word=" + jQuery(this).text();
            log.success("点击按钮跳转搜索 -> " + jQuery(this).text());
            log.success(redirectURL);
            window.location.href = redirectURL;
            return false;
          });
        }
        function searchBtnJump(event, searchInput) {
          let searchInputElement = jQuery(searchInput);
          event?.stopPropagation();
          event?.preventDefault();
          window?.stop();
          let redirectURL =
            window.location.origin + "/s?word=" + searchInputElement.val();
          log.success("点击按钮跳转搜索 -> " + searchInputElement.val());
          log.success(redirectURL);
          window.location.href = redirectURL;
          return false;
        }

        function enterKeyDownEvent(event, searchInput) {
          if (event.keyCode === 108 || event.keyCode === 13) {
            window?.stop();
            let searchInputElement = jQuery(searchInput);
            event?.stopPropagation();
            event?.preventDefault();
            let redirectURL =
              window.location.origin + "/s?word=" + searchInputElement.val();
            log.success("回车键跳转搜索 -> " + searchInputElement.val());
            log.success(redirectURL);
            window.location.href = redirectURL;
            return false;
          }
          return true;
        }
        /* 顶部搜索输入框点击后的搜索建议 */
        utils.waitNode(suggestList).then((nodeList) => {
          utils.mutationObserver(nodeList[0], {
            callback: () => {
              /*  */
              mutationObserverFunction(suggestListBtn);
            },
            config: { childList: true, attributes: true },
          });
        });
        /* 底部搜索输入框点击后的搜索建议 */
        utils.waitNode(suggestList2).then((nodeList) => {
          utils.mutationObserver(nodeList[0], {
            callback: () => {
              mutationObserverFunction(suggestListBtn2);
            },
            config: { childList: true, attributes: true },
          });
        });
        /* 百度主页的搜索输入框点击后的搜索建议 */
        utils.waitNode(suggestList_HOME).then((nodeList) => {
          utils.mutationObserver(nodeList[0], {
            callback: () => {
              mutationObserverFunction(suggestListBtn_HOME);
            },
            config: { childList: true, attributes: true },
          });
        });
        /* 顶部搜索按钮 */
        jQuery(searchBtn)?.on("click", function (event) {
          return searchBtnJump(event, searchInput);
        });
        /* 顶部搜索输入框 */
        jQuery(searchInput)?.on("keydown", function (event) {
          return enterKeyDownEvent(event, searchInput);
        });
        /* 底部搜索按钮 */
        jQuery(searchBtn2)?.on("click", function (event) {
          return searchBtnJump(event, searchInput2);
        });
        /* 底部部搜索输入框 */
        jQuery(searchInput2)?.on("keydown", function (event) {
          return enterKeyDownEvent(event, searchInput2);
        });
        /* 百度主页搜索按钮 */
        jQuery(searchBtn_HOME)?.on("click", function (event) {
          return searchBtnJump(event, searchInput_HOME);
        });
        /* 百度主页搜索输入框 */
        jQuery(searchInput_HOME)?.on("keydown", function (event) {
          return enterKeyDownEvent(event, searchInput_HOME);
        });
      }

      /**
       * 自动加载下一页
       */
      function autoLoadNextPage() {
        /**
         * 滚动事件
         * @returns {Promise}
         */
        async function scrollEvent() {
          if (!utils.isNearBottom(window.innerHeight / 3)) {
            utils.sleep(150);
            return;
          }
          loadingView.setVisible(true);
          let nextPageUrl =
            jQuery(".new-nextpage").attr("href") ||
            jQuery(".new-nextpage-only").attr("href");
          if (!nextPageUrl) {
            log.info("获取不到下一页，怀疑已加载所有的搜索结果");
            removeNextPageScrollListener();
            loadingView.destory();
            return;
          }
          let params_pn = new URL(nextPageUrl).search.match(/[0-9]+/);
          log.info(
            `正在请求${
              params_pn.length == 0
                ? "第 10 条"
                : "第 " + parseInt(params_pn[0]) + " 条"
            }数据: ${nextPageUrl}`
          );

          loadingView.setText("Loading...", true);
          let getResp = await httpx.get({
            url: nextPageUrl,
            headers: {
              "User-Agent": utils.getRandomAndroidUA(),
            },
          });
          let respData = getResp.data;
          if (getResp.status) {
            loadingView.setVisible(false);
            let nextPageHTMLNode = utils.parseFromString(respData.responseText);
            let scriptAtomData = jQuery("<div></div>");
            nextPageHTMLNode
              .querySelectorAll("script[id^=atom-data]")
              .forEach((item) => {
                scriptAtomData.append(jQuery(item));
              });
            let nextPageScriptOriginUrlMap =
              handleItemURL.parseScriptDOMOriginUrlMap(scriptAtomData);
            log.info(["下一页的网址Map", nextPageScriptOriginUrlMap]);
            handleItemURL.originURLMap.concat(nextPageScriptOriginUrlMap);

            nextPageHTMLNode
              .querySelectorAll("style[data-vue-ssr-id]")
              .forEach((item) => {
                /* 插入vue打包的css需重新引入 */
                let dataVueSsrId = "data-vue-ssr-id";
                let dataVueSsrIdValue = item.getAttribute(dataVueSsrId);
                if (
                  !document.querySelector(
                    "style[data-vue-ssr-id='" + dataVueSsrIdValue + "']"
                  )
                ) {
                  let cssDOM = GM_addStyle(item.innerHTML);
                  cssDOM.setAttribute("data-vue-ssr-id", dataVueSsrIdValue);
                  log.info(`插入Vue的CSS id: ${dataVueSsrIdValue}`);
                }
              });

            let searchResultDOM =
              nextPageHTMLNode.querySelectorAll(".c-result.result");
            let nextPageControllerDOM =
              nextPageHTMLNode.querySelector("#page-controller");
            let currentResultsDOM = jQuery("#results");
            if (nextPageControllerDOM) {
              searchResultDOM.forEach((item) => {
                currentResultsDOM.append(item);
              });
              jQuery("#page-controller").html(nextPageControllerDOM.innerHTML);
            } else {
              log.info("已加载所有的搜索结果");
              removeNextPageScrollListener();
            }
            if (GM_Menu.get("baidu_search_sync_next_page_address")) {
              window.history.pushState("forward", null, nextPageUrl);
            }
          } else if (getResp.type === "onerror") {
            if (nextPageUrl == undefined) {
              log.error("未获取到下一页的url");
            } else {
              log.error("加载失败 👇");
              log.error(respData);
              loadingView.setText("加载失败");
            }
          } else if (getResp.type === "ontimeout") {
            log.error("请求超时 👇");
            loadingView.setText("请求超时");
          } else {
            log.error("未知错误");
            loadingView.setText("未知错误");
          }
        }
        function setNextPageScrollListener() {
          document.addEventListener("scroll", lockFunction.run);
        }
        function removeNextPageScrollListener() {
          document.removeEventListener("scroll", lockFunction.run);
          log.info("取消绑定scroll", "#f400ff");
        }
        let lockFunction = new utils.LockFunction(scrollEvent, this);
        jQuery("#page-controller").after(loadingView.getLoadingNode(true));
        loadingView.setCSS();
        loadingView.setVisible(false);
        setNextPageScrollListener();
      }
      GM_Menu = new utils.GM_Menu(
        {
          menu_autoloading: {
            text: "自动展开下一页",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          menu_showisdirect: {
            text: "显示已重定向图标",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          LOG: {
            text: "控制台输出日志",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_search_sync_next_page_address: {
            text: "同步下一页地址",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_search_disable_autoplay_video: {
            text: "禁止自动播放视频",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_search_blocking_everyone_is_still_searching: {
            text: "【屏蔽】大家还在搜",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      if (!GM_Menu.get("LOG")) {
        log.error("禁止控制台输出日志");
        log.disable();
      }
      if (GM_Menu.get("baidu_search_disable_autoplay_video")) {
        log.success("禁止百度搜索的视频自动播放");
        let funcLock = new utils.LockFunction(
          () => {
            let videoPlayerList = document.querySelectorAll(
              "[class*='-video-player']"
            );
            if (!utils.isNull(videoPlayerList)) {
              videoPlayerList.forEach((item) => {
                item.remove();
              });
              log.success(["删除视频", videoPlayerList]);
            }
          },
          undefined,
          250
        );
        utils.mutationObserver(document.documentElement, {
          config: {
            subtree: true,
            childList: true,
          },
          callback: funcLock.run,
        });
      }
      log.info("插入CSS规则");
      GM_addStyle(this.css.search);

      jQuery(function () {
        let searchUpdateRealLink = new utils.LockFunction(async () => {
          try {
            await handleItemURL.replaceLink();
          } catch (error) {
            log.error("替换为真实链接失败");
            log.error(error);
          }
        }, 600);
        utils.waitNode("div#page.search-page").then((nodeList) => {
          utils.mutationObserver(nodeList[0], {
            callback: async () => {
              await searchUpdateRealLink.run();
            },
            config: {
              childList: true,
              subtree: true,
            },
          });
        });
        utils
          .waitNode("style[class^='vsearch-sigma-style']")
          .then((nodeList) => {
            /* 这个style标签就是某些搜索置顶的卡片 */
            log.success(["删除sigma的CSS", nodeList]);
            nodeList.forEach((item) => item.remove());
          });
        handleItemURL.originURLMap = handleItemURL.parseScriptDOMOriginUrlMap(
          jQuery(document)
        );
        handleItemURL.removeAds();
        handleItemURL.replaceScriptBaiDuTip();
        handleItemURL.redirectTopLink();
        clickOtherSearchEvent();
        searchUpdateRealLink.run();
        if (GM_Menu.get("menu_autoloading")) {
          autoLoadNextPage();
        }
      });
    },
    /**
     * 百家号
     */
    baijiahao() {
      if (!this.current_url.match(/^http(s|):\/\/baijiahao.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.baijiahao);
      log.info("插入CSS规则");
    },
    /**
     * 百度贴吧
     */
    tieba() {
      if (!this.current_url.match(/^http(s|):\/\/tieba.baidu.com/g)) {
        return;
      }
      /* 贴吧加载评论 */
      const tiebaCommentConfig = {
        page: 1,
        maxPage: 1,
        floor_num: 1,
        funcLock: null,
        param_tid: null,
        param_forum_id: null,
        /**
         * 判断是否在底部附近的误差值
         * @type
         */
        isNearBottomValue: 250,
        /**
         * scroll事件触发 自动加载下一页的评论
         */
        nextPageScrollEvent: async () => {
          if (!utils.isNearBottom(tiebaCommentConfig.isNearBottomValue)) {
            return;
          }
          loadingView.setText("Loading...", true);
          loadingView.setVisible(true);
          let timeStamp = Date.now();
          let nextPageUrl = `https://tieba.baidu.com/p/${tiebaCommentConfig.param_tid}?pn=${tiebaCommentConfig.page}`;
          let nextPageAllCommentUrl = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${tiebaCommentConfig.param_tid}&fid=${tiebaCommentConfig.param_forum_id}&pn=${tiebaCommentConfig.page}&see_lz=0`;
          log.info("请求下一页评论的url: " + nextPageUrl);
          log.info("贴子所有评论的url: " + nextPageAllCommentUrl);
          let nextPageDOM = await tiebaCommentConfig.getPageComment(
            nextPageUrl
          );
          log.info("成功获取下一页评论");
          let pageCommentList = await tiebaCommentConfig.getPageCommentList(
            nextPageAllCommentUrl
          );
          log.info("成功获取下一页评论对应的数组");
          if (!nextPageDOM || !pageCommentList.commentList) {
            loadingView.setText("未知错误，请看控制台");
            log.error(nextPageDOM);
            log.error(pageCommentList);
            tiebaCommentConfig.removeScrollListener();
            return;
          }
          let comments = nextPageDOM.querySelectorAll(".l_post.l_post_bright");
          comments = Array.from(comments);
          if (tiebaCommentConfig.page == 1) {
            /* 为第一页时，去除第一个，也就是主评论 */
            comments.splice(0, 1);
          }
          comments.forEach((ele) => {
            tiebaCommentConfig.insertNewCommentInnerHTML(
              tiebaCommentConfig.getNewCommentInnerHTML(ele, pageCommentList)
            );
            tiebaCommentConfig.floor_num += 1;
          });
          if (
            Array.from(
              document.querySelector(".white-only-lz").classList
            ).includes("white-only-lz-qx")
          ) {
            jQuery(".post-item").each((index, ele) => {
              let landlord = ele.getAttribute("landlord");
              if (landlord == "0") {
                ele.classList.add("white-only-lz-none");
              }
            });
          }
          loadingView.setVisible(false);
          if (tiebaCommentConfig.page >= tiebaCommentConfig.maxPage) {
            log.info("已加载所有的评论");
            loadingView.setText("已加载所有的评论");
            loadingView.setVisible(false);
            tiebaCommentConfig.removeScrollListener();
          }
          tiebaCommentConfig.page++;
        },
        /**
         * scroll事件触发 自动加载上一页的评论
         */
        prevPageScrollEvent: async () => {
          if (!utils.isNearBottom(tiebaCommentConfig.isNearBottomValue)) {
            return;
          }
          loadingView.setText("Loading...", true);
          loadingView.setVisible(true);
          let timeStamp = Date.now();
          let pageUrl = `https://tieba.baidu.com/p/${tiebaCommentConfig.param_tid}?pn=${tiebaCommentConfig.page}`;
          let pageAllCommentUrl = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${tiebaCommentConfig.param_tid}&fid=${tiebaCommentConfig.param_forum_id}&pn=${tiebaCommentConfig.page}&see_lz=0`;
          log.info("请求上一页评论的url: " + pageUrl);
          log.info("贴子所有评论的url: " + pageAllCommentUrl);
          let nextPageDOM = await tiebaCommentConfig.getPageComment(pageUrl);
          log.info("成功获取上一页评论");
          let pageCommentList = await tiebaCommentConfig.getPageCommentList(
            pageAllCommentUrl
          );
          log.info("成功获取下一页评论对应的数组");
          if (!nextPageDOM || !pageCommentList.commentList) {
            loadingView.setText("未知错误，请看控制台");
            log.error(nextPageDOM);
            log.error(pageCommentList);
            tiebaCommentConfig.removeScrollListener();
            return;
          }
          let comments = nextPageDOM.querySelectorAll(".l_post.l_post_bright");
          comments = Array.from(comments);
          if (tiebaCommentConfig.page == 1) {
            /* 为第一页时，去除第一个，也就是主评论 */
            comments.splice(0, 1);
          }
          comments.reverse();
          comments.forEach((element) => {
            tiebaCommentConfig.insertNewCommentInnerHTML(
              tiebaCommentConfig.getNewCommentInnerHTML(
                element,
                pageCommentList
              )
            );
            tiebaCommentConfig.floor_num++;
          });
          if (
            Array.from(jQuery(".white-only-lz")[0].classList).includes(
              "white-only-lz-qx"
            )
          ) {
            let lzReply = jQuery(".post-item");
            Array.from(lzReply).forEach((ele) => {
              let landlord = ele.getAttribute("landlord");
              if (landlord == "0") {
                ele.classList.add("white-only-lz-none");
              }
            });
          }
          loadingView.setVisible(false);
          if (tiebaCommentConfig.page <= 1) {
            log.info("已加载所有的评论");
            loadingView.setText("已加载所有的评论");
            loadingView.setVisible(false);
            tiebaCommentConfig.removeScrollListener();
          }
          tiebaCommentConfig.page--;
        },
        /**
         * 设置自动加载下一页的scrol事件
         */
        setNextPageScrollListener() {
          tiebaCommentConfig.funcLock = new utils.LockFunction(
            tiebaCommentConfig.nextPageScrollEvent,
            this
          );
          document.addEventListener("scroll", tiebaCommentConfig.funcLock.run);
          utils.dispatchEvent(document, "scroll");
          log.success("scroll监听事件【下一页】");
        },
        /**
         * 设置自动加载上一页的scrol事件
         */
        setPrevPageScrollListener() {
          tiebaCommentConfig.funcLock = new utils.LockFunction(
            tiebaCommentConfig.prevPageScrollEvent,
            this
          );
          document.addEventListener("scroll", tiebaCommentConfig.funcLock.run);
          utils.dispatchEvent(document, "scroll");
          log.success("scroll监听事件【上一页】");
        },
        /**
         * 移除scoll事件
         */
        removeScrollListener() {
          if (tiebaCommentConfig.funcLock) {
            document.removeEventListener(
              "scroll",
              tiebaCommentConfig.funcLock.run
            );
            log.success("取消绑定scroll", "#f400ff");
          }
        },
        /**
         * 根据dom获取需要插入的评论的html
         * @param {HTMLElement} element
         * @param { {commentList: any, userList: array}} pageCommentList
         * @returns {string}
         */
        getNewCommentInnerHTML: (element, pageCommentList) => {
          let data_field = utils.toJSON(element.getAttribute("data-field"));
          if (Object.keys(data_field).length == 0) {
            return;
          }
          let user_id = data_field["author"]["user_id"];
          let builderId = data_field["content"]["builderId"];

          let userComment = data_field["content"]["content"];
          let userHomeUrl = element
            .querySelector(".p_author_face")
            .getAttribute("href");
          let user_landlord_name = data_field["author"]["user_name"];
          let userName = element.querySelector(".p_author_name");
          if (userName) {
            userName = userName.textContent;
          } else {
            userName = element
              .querySelector(".p_author_face > img")
              .getAttribute("username");
          }

          let userAvator =
            element
              .querySelector(".p_author_face > img")
              .getAttribute("data-tb-lazyload") ||
            element.querySelector(".p_author_face > img").getAttribute("src");

          let is_landlord = 0;
          if (user_id == builderId) {
            userName =
              userName +
              '<svg data-v-188c0e84="" class="landlord"><use xlink:href="#icon_landlord"></use></svg>';
            is_landlord = 1;
          }
          let ele_tail_wrap = element.querySelector(".post-tail-wrap");
          let user_ip_position = ele_tail_wrap;
          let user_floor = "";
          let user_comment_time = "1970-1-1 00:00:00";
          if (ele_tail_wrap) {
            let childrenElement = jQuery(ele_tail_wrap).find("span.tail-info");
            jQuery(ele_tail_wrap)
              .find("span")
              .filter(function (index) {
                if (!this.getAttribute("class")) {
                  user_ip_position = this.textContent;
                  if (user_ip_position.match("来自|禁言")) {
                    user_ip_position = "";
                  }
                  return this;
                }
              });
            if (childrenElement.length == 3 || childrenElement.length == 2) {
              user_floor =
                childrenElement[childrenElement.length - 2].textContent;
              user_comment_time =
                childrenElement[childrenElement.length - 1].textContent;
            } else {
              log.error("获取PC端的数据楼层和时间信息失败👇");
              log.error(childrenElement);
              user_floor = "";
              user_comment_time = "";
            }
          } else {
            ele_tail_wrap = element.querySelector(".acore_reply_tail");
            user_ip_position = data_field["content"]["ip_address"];
            user_floor = data_field["content"]["post_no"] + "楼"; /* 评论楼层 */
            user_comment_time = data_field["content"]["date"];
            if (!userComment) {
              userComment = element.querySelector(".d_post_content").innerHTML;
            }
            if (user_ip_position) {
              user_ip_position = "IP属地:" + user_ip_position;
            }
          }
          let currentTime = new Date(); /* 结束时间 */
          let timeDifference =
            currentTime.getTime() -
            new Date(
              user_comment_time.replace(/-/g, "/")
            ).getTime(); /* 时间差的毫秒数 */

          /* ------------------------------ */

          /* 计算出相差天数 */
          let days = Math.floor(timeDifference / (24 * 3600 * 1000));
          if (days > 0) {
            user_comment_time = days + "天前";
          } else {
            /* 计算出小时数 */
            let leave1 =
              timeDifference % (24 * 3600 * 1000); /* 计算天数后剩余的毫秒数 */
            let hours = Math.floor(leave1 / (3600 * 1000));
            if (hours > 0) {
              user_comment_time = hours + "小时前";
            } else {
              /* 计算相差分钟数 */
              let leave2 =
                leave1 % (3600 * 1000); /* 计算小时数后剩余的毫秒数 */
              let minutes = Math.floor(leave2 / (60 * 1000));
              if (minutes > 0) {
                user_comment_time = minutes + "分钟前";
              } else {
                /* 计算相差秒数 */
                let leave3 =
                  leave2 % (60 * 1000); /* 计算分钟数后剩余的毫秒数 */
                let seconds = Math.round(leave3 / 1000);
                user_comment_time = seconds + "秒前";
              }
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
              let newInnerHTML = `<div data-v-5b60f30b="" class="lzl-post-item" style="">
                  <div data-v-5b60f30b="" class="text-box">
                    <span data-v-5b60f30b="" class="link username" data-home-url="${u_user_home_url}">${u_user_name}</span>
                    <div data-v-ab14b3fe="" data-v-5b60f30b="" class="thread-text lzl-post-text">
                      <span data-v-ab14b3fe="" class="text-content">${u_content}</span>
                    </div>
                  </div>
                </div>
                `;
              newUserCommentHTML += newInnerHTML;
            });
          }

          if (newUserCommentHTML) {
            newUserCommentHTML = `
            <div data-v-5b60f30b="" data-v-74eb13e2="" class="lzl-post lzl-post" style="max-height: 2.35rem;overflow-y: auto;">
              ${newUserCommentHTML}
            </div>
            `;
          }
          let newCommentHTML = `
            <div
              data-v-74eb13e2=""
              data-v-602e287c=""
              class="post-item"
              data-floor="${tiebaCommentConfig.floor_num}"
              landlord=${is_landlord}>
              <div
                data-v-188c0e84=""
                data-v-74eb13e2=""
                class="user-line-wrapper user-line-post">
                <div data-v-188c0e84="" class="user-line">
                  <div
                    data-v-188c0e84=""
                    class="tbfe-1px-border avatar"
                    data-home-url="${userHomeUrl}"
                    data-src="${userAvator}"
                    lazy="loaded"
                    style="background-image: url(${userAvator});"></div>
                  <div data-v-188c0e84="" class="user-info">
                    <div data-v-188c0e84="" class="username" data-home-url="${userHomeUrl}">
                      ${userName}
                    </div>
                    <p data-v-188c0e84="" class="desc-info">
                      <span data-v-188c0e84="" class="floor-info">
                        ${user_floor}
                      </span>
                      <span data-v-188c0e84="" class="time" style="margin-right: .08rem;">
                        ${user_comment_time}
                      </span>
                      <span data-v-188c0e84="" class="ip">
                        ${user_ip_position}
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
            </div>
            `;
          return newCommentHTML;
        },
        /**
         * 根据评论的html插入页面中
         * @param {string} _html_
         */
        insertNewCommentInnerHTML: (_html_) => {
          let newCommentDOM = jQuery(_html_);
          /* 评论，点击头像跳转到这个人的空间 */
          newCommentDOM.find(".tbfe-1px-border.avatar").each((index, item) => {
            if (item.hasAttribute("data-home-url")) {
              item.onclick = function () {
                window.open(item.getAttribute("data-home-url"), "_blank");
              };
            }
          });
          /* 评论，点击名字跳转到这个人的空间 */
          newCommentDOM.find(".user-info .username").each((index, item) => {
            if (item.hasAttribute("data-home-url")) {
              item.onclick = function () {
                window.open(item.getAttribute("data-home-url"), "_blank");
              };
            }
          });
          /* 评论的回复，点击头像跳转到这个人的空间 */
          newCommentDOM.find(".link.username").each((index, item) => {
            if (item.hasAttribute("data-home-url")) {
              item.onclick = function () {
                window.open(item.getAttribute("data-home-url"), "_blank");
              };
            }
          });
          /* 评论的回复的回复，点击头像跳转到这个人的空间 */
          newCommentDOM.find("a.at").each((index, item) => {
            item.removeAttribute("onclick");
            item.removeAttribute("onmouseover");
            item.removeAttribute("onmouseout");
            if (item.hasAttribute("portrait")) {
              item.setAttribute(
                "href",
                "/home/main?id=" + item.getAttribute("portrait")
              );
            }
          });

          if (jQuery(".post-cut-guide").length) {
            jQuery(".post-cut-guide").before(newCommentDOM);
          } else {
            jQuery(".pb-page-wrapper").append(newCommentDOM); /* 老版帖子 */
          }
        },
        /**
         * 插入只看楼主的按钮
         */
        insertOnlyLZ: () => {
          let ele_parent = jQuery("#replySwitch");
          let onlyLzInnerHTML = `
                      <div style="display: -webkit-box;
                          display: -webkit-flex;
                          display: -ms-flexbox;
                          display: flex;
                          -webkit-box-align: center;
                          -webkit-align-items: center;
                          -ms-flex-align: center;
                          align-items: center;
                          line-height: .24rem;
                          border-radius: .14rem;
                          font-size: .13rem;
                          color: #614ec2;" class="white-only-lz">只看楼主</div>`;
          ele_parent.append(onlyLzInnerHTML);
          let quxiaoonlylz_css = `
                      .white-only-lz-qx:before {
                          content: "取消";
                      }
                      .white-only-lz-none {
                          display: none;
                      }`;
          GM_addStyle(quxiaoonlylz_css);
          jQuery(".white-only-lz").on("click", (event) => {
            tiebaCommentConfig.displayComment(
              Array.from(event.currentTarget.classList)
            );
          });
        },
        /**
         * 插入 正序=倒序的按钮
         */
        insertReverseBtn: () => {
          let ele_parent = jQuery("#replySwitch");
          let btnHTML = `
                      <div style="display: -webkit-box;
                          display: -webkit-flex;
                          display: -ms-flexbox;
                          display: flex;
                          -webkit-box-align: center;
                          -webkit-align-items: center;
                          -ms-flex-align: center;
                          align-items: center;
                          line-height: .24rem;
                          border-radius: .14rem;
                          font-size: .13rem;
                          color: #614ec2;
                          width: auto;
                          margin-left: auto;
                          margin-right: 15px;" class="white-btn-comment-reverse"></div>`;
          ele_parent.append(btnHTML);
          let btnCSS = `
                      .white-btn-comment:before {
                          content: "正序";
                      }
                      .white-btn-comment-reverse:before {
                          content: "倒序";
                      }
                      .white-btn-comment-reverse-none {
                          display: none;
                      }`;
          GM_addStyle(btnCSS);
          jQuery(".white-btn-comment-reverse").on("click", (event) => {
            tiebaCommentConfig.removeScrollListener();
            jQuery(".post-item")?.remove();
            if (
              event.currentTarget.getAttribute("class") === "white-btn-comment"
            ) {
              event.currentTarget.setAttribute(
                "class",
                "white-btn-comment-reverse"
              );
              tiebaCommentConfig.mainPositive();
              log.info("获取评论===>正序");
            } else {
              event.currentTarget.setAttribute("class", "white-btn-comment");
              tiebaCommentConfig.mainReverse();
              log.info("获取评论===>倒序");
            }
          });
        },
        /**
         * 获取第一页的评论（不包括评论的评论）
         * @param {string} url
         * @returns {HTMLElement|undefined}
         */
        getPageComment: async (url) => {
          let getResp = await httpx.get({
            url: url,
            headers: {
              "User-Agent": utils.getRandomPCUA(),
            },
          });
          let respData = getResp.data;
          if (getResp.status) {
            return utils.parseFromString(respData.responseText);
          } else if (getResp.type === "onerror") {
            if (
              typeof respData.error === "string" &&
              respData.error.match("wappass.baidu.com")
            ) {
              let url = respData.error.match(/"(.*?)"/)[1];
              log.error("触发百度校验: " + url);
              window.location.href = url;
            } else {
              log.error("获取评论数据失败 👇");
              log.error(respData);
            }
          }
        },
        /**
         * 获取第一页的评论的评论
         * @param {string} url
         * @returns {{commentList:array, userList:array} }
         */
        getPageCommentList: async (url) => {
          let getResp = await httpx.get({
            url: url,
            headers: {
              Accept: "application/json, text/javascript, */*; q=0.01",
              "User-Agent": utils.getRandomPCUA(),
            },
          });
          let respData = getResp.data;
          if (getResp.status) {
            let data = utils.toJSON(respData.responseText);
            log.success("帖子评论信息");
            log.success(data);
            return {
              commentList: data["data"]["comment_list"],
              userList: data["data"]["user_list"],
            };
          } else if (getResp.type === "onerror") {
            log.error("取第一页的评论的评论数据失败 👇");
            log.error(getResp);
          }
        },
        /**
         * 插入加载中的html
         */
        insertLoadingHTML: () => {
          if (!loadingView.isExists()) {
            log.info("插入loading");
            jQuery(".main-page-wrap").append(loadingView.getLoadingNode());
            loadingView.setCSS();
          }
        },
        /**
         * 动态显示只看楼主
         * @param {Array} classlist
         */
        displayComment: (classlist) => {
          if (classlist.includes("white-only-lz-qx")) {
            jQuery(".white-only-lz").removeClass("white-only-lz-qx");
            jQuery(".post-item").each((index, ele) => {
              ele.classList.remove("white-only-lz-none");
            });
          } else {
            jQuery(".white-only-lz").addClass("white-only-lz-qx");
            jQuery(".post-item").each((index, ele) => {
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
          tiebaCommentConfig.param_tid =
            window.location.pathname.match(/([0-9]+)/g);
          if (tiebaCommentConfig.param_tid) {
            tiebaCommentConfig.param_tid = tiebaCommentConfig.param_tid[0];
            tiebaCommentConfig.param_forum_id =
              jQuery(".recommend-item").attr("data-banner-info");
            if (tiebaCommentConfig.param_forum_id) {
              tiebaCommentConfig.param_forum_id = utils.toJSON(
                tiebaCommentConfig.param_forum_id
              )["forum_id"];
              let timeStamp = Date.now();
              tiebaCommentConfig.page = 1;
              tiebaCommentConfig.insertLoadingHTML();
              loadingView.setText("Loading...", true);
              loadingView.setVisible(true);
              let url = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${tiebaCommentConfig.param_tid}&fid=${tiebaCommentConfig.param_forum_id}&pn=${tiebaCommentConfig.page}&see_lz=0`;
              let pageUrl = `https://tieba.baidu.com/p/${tiebaCommentConfig.param_tid}?pn=${tiebaCommentConfig.page}`;
              let pageDOM = await tiebaCommentConfig.getPageComment(pageUrl);
              let pageCommentList = await tiebaCommentConfig.getPageCommentList(
                url
              );
              if (!pageDOM || !pageCommentList.commentList) {
                loadingView.setText("获取评论失败");
                log.error("新评论区获取失败");
                return;
              }
              log.info("成功获取评论HTML");
              let jumpInputBrightDOM =
                pageDOM.querySelector(".jump_input_bright");
              tiebaCommentConfig.maxPage = 1;
              if (jumpInputBrightDOM) {
                tiebaCommentConfig.maxPage = parseInt(
                  jumpInputBrightDOM.getAttribute("max-page")
                );
                tiebaCommentConfig.setNextPageScrollListener();
                log.info("当前为多页，执行监听");
              } else {
                let comments = pageDOM.querySelectorAll(
                  ".l_post.l_post_bright"
                );
                comments = Array.from(comments);
                document
                  .querySelectorAll(".post-item")
                  .forEach((ele) => ele.remove());
                comments.shift();
                tiebaCommentConfig.floor_num = 1;
                comments.forEach((element) => {
                  tiebaCommentConfig.insertNewCommentInnerHTML(
                    tiebaCommentConfig.getNewCommentInnerHTML(
                      element,
                      pageCommentList
                    )
                  );
                  tiebaCommentConfig.floor_num++;
                });
                loadingView.destory();
              }
              log.info(
                `共 ${tiebaCommentConfig.maxPage} 页评论，当前所在 ${tiebaCommentConfig.page} 页`
              );
            } else {
              log.error("贴吧：获取参数data-banner-info失败");
            }
          } else {
            log.error("贴吧：未找到本页参数p");
          }
        },
        /**
         * 查看-倒序
         */
        async mainReverse() {
          tiebaCommentConfig.param_tid =
            window.location.pathname.match(/([0-9]+)/g);
          if (tiebaCommentConfig.param_tid) {
            tiebaCommentConfig.param_tid = tiebaCommentConfig.param_tid[0];
            tiebaCommentConfig.param_forum_id =
              jQuery(".recommend-item").attr("data-banner-info");
            if (tiebaCommentConfig.param_forum_id) {
              tiebaCommentConfig.param_forum_id = utils.toJSON(
                tiebaCommentConfig.param_forum_id
              )["forum_id"];
              let timeStamp = Date.now();
              tiebaCommentConfig.page = 1;
              tiebaCommentConfig.insertLoadingHTML();
              loadingView.setText("Loading...", true);
              loadingView.setVisible(true);
              let url = `https://tieba.baidu.com/p/totalComment?t=${timeStamp}&tid=${tiebaCommentConfig.param_tid}&fid=${tiebaCommentConfig.param_forum_id}&pn=${tiebaCommentConfig.page}&see_lz=0`;
              let pageUrl = `https://tieba.baidu.com/p/${tiebaCommentConfig.param_tid}?pn=${tiebaCommentConfig.page}`;
              let pageDOM = await tiebaCommentConfig.getPageComment(pageUrl);
              let pageCommentList = await tiebaCommentConfig.getPageCommentList(
                url
              );
              if (!pageDOM || !pageCommentList.commentList) {
                loadingView.setText("获取评论失败");
                log.error("新评论区获取失败");
                return;
              }
              log.info("成功获取评论HTML");
              tiebaCommentConfig.maxPage = 1;
              let jumpInputBrightDOM =
                pageDOM.querySelector(".jump_input_bright");
              if (jumpInputBrightDOM) {
                tiebaCommentConfig.maxPage = parseInt(
                  jumpInputBrightDOM.getAttribute("max-page")
                );
                tiebaCommentConfig.page = tiebaCommentConfig.maxPage;
                tiebaCommentConfig.setPrevPageScrollListener();
                log.info("当前为多页");
              } else {
                let comment = pageDOM.querySelectorAll(".l_post.l_post_bright");
                tiebaCommentConfig.maxPage = 1;
                comment = Array.from(comment);
                document
                  .querySelectorAll(".post-item")
                  .forEach((ele) => ele.remove());
                comment.shift();

                tiebaCommentConfig.floor_num = 1;
                comment.reverse();
                comment.forEach((element) => {
                  tiebaCommentConfig.insertNewCommentInnerHTML(
                    tiebaCommentConfig.getNewCommentInnerHTML(
                      element,
                      pageCommentList
                    )
                  );
                  tiebaCommentConfig.floor_num++;
                });
                loadingView.destory();
              }
              log.info(
                `共 ${tiebaCommentConfig.maxPage} 页评论，当前所在 ${tiebaCommentConfig.page} 页`
              );
            } else {
              log.error(`贴吧：获取参数data-banner-info失败`);
            }
          } else {
            log.error(`贴吧：未找到本页参数p`);
          }
        },
        run() {
          utils.waitNode(".recommend-item[data-banner-info]").then(() => {
            jQuery(".post-item")?.remove();
            tiebaCommentConfig.mainPositive();
            tiebaCommentConfig.insertReverseBtn();
            tiebaCommentConfig.insertOnlyLZ();
          });
          /* 此处是百度贴吧帖子的css，应对贴吧前端重新编译文件 */
          GM_addStyle(`
      .post-item[data-v-74eb13e2] {
          overflow: hidden;
          margin: .16rem .13rem 0;
      }
      .post-item .user-line-post[data-v-74eb13e2] {
          margin-bottom: .06rem;
      }
      .user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
      }
      .user-line-wrapper[data-v-188c0e84] {
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
      }
      .post-item .content[data-v-74eb13e2] {
          padding-left: .44rem;
      }
      .user-line[data-v-188c0e84] {
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: left;
          -webkit-justify-content: left;
          -ms-flex-pack: left;
          justify-content: left;
      }
      .user-line-wrapper[data-v-188c0e84], .user-line[data-v-188c0e84] {
          display: -webkit-box;
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
      .user-line .user-info .username[data-v-188c0e84] {
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
          line-height: .21rem;
          white-space: nowrap;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          color: #141414;
          font-weight: 400;
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
          font-size: .16rem;
          line-height: .24rem;
      }
      .thread-text[data-v-ab14b3fe] {
          font-size: .13rem;
          line-height: .21rem;
          color: #141414;
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
          color: #141414;
          text-align: justify;
          word-break: break-all;
      }
      .lzl-post .lzl-post-item .text-box .link .landlord[data-v-5b60f30b] {
          width: .28rem;
          height: .28rem;
          margin-left: .04rem;
      }
      .user-line .user-info .username .landlord[data-v-188c0e84] {
          width: .28rem;
          height: .28rem;
          margin-left: .04rem
      }
      `);
          GM_addStyle(
            `
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
    color: #a3a1a9;
}
`
          );
        },
      };
      /**
       * 注册全局贴吧图片点击预览(只预览通过贴吧上传的图片，非其它图床图片)
       */
      function registerImagePreview() {
        /**
         * 查看图片
         * @param {Array} imgList
         * @param {Number} _index_
         */
        function viewIMG(imgList = [], _index_ = 0) {
          let viewerULNodeHTML = "";
          imgList.forEach((item) => {
            viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
          });
          let viewerULNode = jQuery(`<ul>${viewerULNodeHTML}</ul>`)[0];
          let viewer = new Viewer(viewerULNode, {
            inline: false,
            url: "data-src",
            zIndex: utils.getMaxZIndex() + 100,
            hidden: () => {
              viewer.destroy();
            },
          });
          _index_ = _index_ < 0 ? 0 : _index_;
          viewer.view(_index_);
          viewer.zoomTo(1);
          viewer.show();
        }
        jQuery(document).on("click", "img", function (event) {
          let cliclElement = event.target;
          let imgSrc =
            cliclElement.getAttribute("data-src") ||
            cliclElement.getAttribute("src");
          if (
            cliclElement.parentElement.getAttribute("data-viewer-action") ===
            "view"
          ) {
            return;
          }
          if (
            imgSrc &&
            imgSrc.match(/^http(s|):\/\/tiebapic.baidu.com\/forum/g)
          ) {
            log.info(`点击图片👇`);
            log.info(cliclElement);
            if (cliclElement.parentElement.className === "img-box") {
              /* 帖子主体内的图片 */
              let parentMain = cliclElement.closest(
                ".img-sudoku.main-img-sudoku"
              );
              log.info(parentMain);
              if (!parentMain) {
                viewIMG([imgSrc]);
                return;
              }
              let lazyImgList = [];
              parentMain.querySelectorAll("img.img").forEach((item) => {
                let _imgSrc_ =
                  item.getAttribute("data-src") || item.getAttribute("src");
                log.info(`获取图片: ${_imgSrc_}`);
                lazyImgList = [...lazyImgList, _imgSrc_];
              });
              log.info("图片列表👇");
              log.info(lazyImgList);
              viewIMG(lazyImgList, lazyImgList.indexOf(imgSrc));
            } else if (
              cliclElement.parentElement.className === "text-content"
            ) {
              /* 评论区内的图片 */
              let parentMain = cliclElement.parentElement;
              let lazyImgList = [];
              log.info(parentMain);
              parentMain.querySelectorAll("img.BDE_Image").forEach((item) => {
                let _imgSrc_ =
                  item.getAttribute("data-src") || item.getAttribute("src");
                log.info(`获取图片: ${_imgSrc_}`);
                lazyImgList = [...lazyImgList, _imgSrc_];
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
      }
      /**
       * 重定向跳转
       */
      function redirectJump() {
        log.info("话题热榜-阻止默认跳转");
        jQuery(document).on("click", ".topic-share-item", function (event) {
          event?.stopPropagation();
          event?.preventDefault();
          window?.stop();
          let clickNode = jQuery(this);
          let dataTrack = clickNode.attr("data-track");
          if (dataTrack == null) {
            log.error("未找到data-track");
            log.error(clickNode);
            return false;
          }
          dataTrack = utils.toJSON(dataTrack);
          let tid = dataTrack["tid"];
          if (tid == null) {
            log.error("未找到tid");
            log.error(dataTrack);
            return false;
          }
          log.success(`跳转至: https://tieba.baidu.com/p/${tid}`);
          window.location.href = `https://tieba.baidu.com/p/${tid}`;
          return false;
        });
        utils.waitNode(".thread-bottom .forum").then((nodeList) => {
          log.success("设置贴吧种类正确跳转");
          log.success(nodeList);
          nodeList.forEach((item) => {
            item.ontouchstart = function (event) {
              event?.stopPropagation();
              event?.preventDefault();
              window?.stop();
              window.location.href = `https://tieba.baidu.com/f?kw=${jQuery(
                this
              )
                .text()
                .trim()
                .replace(/吧$/g, "")}`;
              return false;
            };
          });
        });
        utils.waitNode(".topic-share-thread .list-content").then((nodeList) => {
          utils.mutationObserver(nodeList[0], {
            callback: (mutations) => {
              mutations.forEach((item) => {
                item.addedNodes.forEach((item2) => {
                  if (
                    typeof item2.className === "string" &&
                    item2.className.indexOf("topic-share-item") != -1
                  ) {
                    log.success("设置新增的帖子的贴吧种类正确跳转");
                    log.success(item2);
                    item2.querySelector(".thread-bottom .forum").ontouchstart =
                      function (event) {
                        event?.stopPropagation();
                        event?.preventDefault();
                        window?.stop();
                        window.location.href = `https://tieba.baidu.com/f?kw=${jQuery(
                          this
                        )
                          .text()
                          .trim()
                          .replace(/吧$/g, "")}`;
                        return false;
                      };
                  }
                });
              });
            },
            config: {
              childList: true,
              subtree: true,
            },
          });
        });

        jQuery(document).on(
          "touchstart",
          ".topic-share-item .forum",
          function (event) {
            event?.stopPropagation();
            event?.preventDefault();
            return false;
          }
        );
      }

      /* 贴吧搜索 */
      const tiebaSearchConfig = {
        isSetClickEvent: false,
        searchSuggestion: null,
        /**
         * 获取搜索建议
         * @param {string} queryText 搜索内容
         * @returns {Promise}
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
        run() {
          this.setSuggestionCSS();
          utils.waitNode("div.more-btn-desc").then((nodeList) => {
            nodeList[0].outerHTML = `
              <input type="search" id="tieba-search" placeholder="请输入搜索内容..." style="display: none;padding: 0 10px;height: 32px;line-height: 32px;font-size: 14px;border-radius: 5px;box-sizing: border-box;-webkit-appearance: none;-moz-appearance: none;-o-appearance: none;appearance: none;border: 1px solid #000000;outline: none;flex: 1;margin: 0px 40px;" autocomplete="off">
              <div class="more-btn-desc" style="margin-right: 13px;font-size: .15rem;font-weight: 700;color: #614ec2;">搜索</div>
              `;
            document
              .querySelector("div.more-btn-desc")
              .addEventListener("click", function () {
                if (
                  window.location.href.startsWith("https://tieba.baidu.com/p/")
                ) {
                  /* 当前是在吧内，搜索按钮判定搜索贴子 */
                  if(!tiebaSearchConfig.isSetClickEvent){
                    tiebaSearchConfig.isSetClickEvent = true;
                    tiebaSearchConfig.postsSearch();
                  }
                  
                } else {
                  /* 当前是在主页中，搜索按钮判定为搜索吧 */
                  tiebaSearchConfig.frontPageSeach();
                }
              });

            this.searchSuggestion = new SearchSuggestion({
              isAbsoulte: false,
              showDeleteIcon: false,
              targetElement: document.querySelector("#tieba-search"),
              getItemValue: function (item) {
                return item.fname;
              },
              getItemHTML: function (itemData) {
                return `
                  <div class="forum_item">
                    <img class="forum_image" src="${itemData.fpic}">
                    <div class="forum_right">
                      <div class="forum_name">${itemData.fname}</div>
                      <div class="forum_desc">${itemData.forum_desc}</div>
                    </div>
                  </div>`;
              },
              searchInputChangeCallBack: async (info) => {
                /* 
                  {
                      "text": "r",
                      "data": [],
                      "showData": []
                  }
                  */
                let searchText = info.text;
                let result = [];
                log.success("搜索中...");
                let suggestionData = await tiebaSearchConfig.getSuggestion(
                  searchText
                );
                if (utils.isNull(suggestionData)) {
                  return result;
                }
                log.success(suggestionData);
                result = suggestionData.query_match.search_data || [];
                return result;
              },
              clickItemCallBack: (text) => {
                window.location.href =
                  "https://tieba.baidu.com/f?ie=utf-8&kw=" + text;
              },
            });
            log.success("初始化默认搜索...");
            tiebaSearchConfig.searchSuggestion.config
              .searchInputChangeCallBack({
                text: "",
                data: [],
                showData: [],
              })
              .then((result) => {
                if (result.length) {
                  tiebaSearchConfig.searchSuggestion.update(result);
                }
              });
          });
        },
        setSuggestionCSS() {
          GM_addStyle(`
              .WhiteSevsSearchSelect .forum_item{
                /* height: 32px;
                padding: 6px 8px;
                line-height: 16px; */
                display: flex;
                text-wrap: wrap;
              }
              .WhiteSevsSearchSelect .forum_image{
                float: left;
                width: 32px;
                height: 32px;
              }
              .WhiteSevsSearchSelect .forum_right{
                /* height: 32px; */
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
              `);
        },
        /**
         * 帖子外搜索(也就是首页搜索吧)
         */
        frontPageSeach() {
          log.success("当前是在首页");
          let searchInputElement = document.querySelector("#tieba-search");
          let searchText = searchInputElement.value.trim();
          /* 搜索框隐藏的话就显示出来 */
          if (getComputedStyle(searchInputElement).display === "none") {
            searchInputElement.previousElementSibling.style.display = "none";
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
         * */
        postsSearch() {
          let that = this;
          let gbkEncoder = new utils.GBKEncoder();
          let nextPageUrl = null;
          let lockFunction = null;
          /**
           * 0 按时间顺序
           * 1 按时间倒序
           * 2 按相关性顺序
           * 3 只看主题贴
           */
          let searchModel = 1;
          /**
           * 获取搜索结果
           * @param {string} [qw=""] 搜索的关键字
           * @param {number} [pn=0] 当前页码
           * @param {number} [sm=0]
           * 0 按时间顺序
           * 1 按时间倒序 如果加上only_thread为1，就是只看主题贴
           * 2 按相关性顺序
           * @returns {Promise}
           */
          async function getSearchResult(qw = "", pn = 0, sm = 1) {
            if (sm === 3) {
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
              log.success(`搜索内容gbk编码转换: ${originText} => ${qw}`);
              url = `https://tieba.baidu.com/f/search/res?isnew=1&kw=&qw=${qw}&un=&rn=10&pn=${pn}&sd=&ed=&sm=${sm}`;
            }
            log.success(`当前请求第 ${new URLSearchParams(url).get("pn")} 页`);
            let getResp = await httpx.get({
              url: url,
              headers: {
                "User-Agent": utils.getRandomPCUA(),
                Referer: url,
                Host: "tieba.baidu.com",
                Accept:
                  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
              },
            });
            if (!getResp.status) {
              if (getResp.data.responseText === "") {
                log.error(getResp);
                return "获取内容为空，可能触发了百度验证，请刷新网页再试";
              }
              log.error(getResp);
              return;
            }
            log.success(getResp);
            let respData = getResp.data;
            let searchDoc = utils.parseFromString(respData.responseText);
            if (searchDoc.querySelector(".search_noresult")) {
              return "抱歉，没有找到与“" + originText + "”相关的结果。";
            }
            let result = [];
            nextPageUrl = searchDoc.querySelector(".pager-search a.next")?.href;
            searchDoc
              .querySelectorAll(".s_main .s_post_list .s_post")
              .forEach((item) => {
                if (item.id === "post_user") {
                  return;
                }
                let url = item.querySelector("span.p_title a").href;
                let title = item.querySelector("span.p_title a").innerHTML;
                let content = item.querySelector(".p_content").innerHTML;
                /* 来自哪个贴吧 */
                let forum = item.querySelector(
                  "a.p_forum font.p_violet"
                ).textContent;
                let author = (
                  item.querySelector("a[href^='/home'] font.p_violet") ||
                  item.querySelectorAll("font.p_violet")[1]
                ).textContent;
                let authorHomeUrl =
                  "https://tieba.baidu.com/home/main?un=" +
                  gbkEncoder.encode(author);
                let time = item.querySelector(".p_date").textContent;
                result = [
                  ...result,
                  {
                    url: url,
                    title: title,
                    content: content,
                    forum: forum,
                    author: author,
                    authorHomeUrl: authorHomeUrl,
                    time: time,
                  },
                ];
              });
            return result;
          }
          function getItemHTML(item) {
            return `
                    <div class="s_post">
                      <span class="p_title">
                        <a href="${item["url"]}" target="_blank">${item["title"]}</a>
                      </span>
                      <div class="p_content">${item["content"]}</div>
                      <div>
                        <a class="p_forum" href="https://tieba.baidu.com/f?kw=${item["forum"]}" target="_blank">
                          <font class="p_violet">${item["forum"]}</font>
                        </a>
                      </div>
                      <div>
                        <a class="p_author" href="${item["authorHomeUrl"]}" target="_blank">
                          <font class="p_violet">${item["author"]}</font>
                        </a>
                      </div>
                      <div>
                        <font class="p_date">${item["time"]}</font>
                      </div>
                    </div>`;
          }
          function setCSS() {
            GM_addStyle(`
            .s_post,
            .s_order {
              margin: 25px;
            }
            .s_post .p_title{
                
            }
            .s_post .p_content{
                
            }
            .s_post em{
              color: #e10900;
              font-style: normal;
            }
            .s_post a.p_forum::before{
              content:"贴吧：";
              color: #000000;
            }
            .s_post a.p_author::before{
              content:"作者：";
              color: #000000;
            }
            .s_post font.p_date::before{
              content:"时间：";
              color: #000000;
            }
            .s_post font.p_date{
                color: green;
            }
            .s_order a{
              color: -webkit-link;
            }
            `);
          }

          /**
           * 设置搜索结果模式
           * @param {jQuery} jQueryOrderElement 
           */
          function setCurrentOrderHTML(jQueryOrderElement){
            for (const iterator of jQueryOrderElement.find("a")) {
              let targetElement = jQuery(iterator);
              let targetElementHTML = targetElement.html();
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
                targetElement.replaceWith(`<b>${targetElementHTML}</b>`);
                break;
              }
            }
          }
          /**
           * 设置搜索结果模式点击事件
           */
          function setOrderClickEvent() {
            jQuery(document).on("click", ".s_order a", function () {
              let clickOrderElement = jQuery(this);
              let clickOrderHTML = clickOrderElement.html();
              jQuery(".s_order b").replaceWith(
                `<a>${jQuery(".s_order b").html()}</a>`
              );
              clickOrderElement.replaceWith(`<b>${clickOrderHTML}</b>`);
              console.log();
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
              nextPageUrl = null;
              removeScrollListener();
              document.querySelector(".more-btn-desc").click();
            });
          }
          async function _click_event_() {
            tiebaCommentConfig.removeScrollListener();
            let contentElement = jQuery(".main-thread-content-margin");
            jQuery("#replySwitch").remove();
            jQuery(".post-item").remove();
            contentElement.html("");
            searchInputElement.focus();
            let searchText = searchInputElement.value.trim();
            if (utils.isNull(searchText)) {
              alert("请勿输入纯空格或空内容");
              return;
            }
            loadingView.setVisible(true);
            let searchResult = await getSearchResult(
              searchText,
              undefined,
              searchModel
            );
            tiebaCommentConfig.removeScrollListener();
            if (!searchResult) {
              loadingView.setVisible(false);
              alert("请求失败，详情请看控制台");
              return;
            }
            if (
              typeof searchResult === "string" &&
              (searchResult.startsWith("抱歉") ||
                searchResult.startsWith("获取内容为空"))
            ) {
              contentElement.html("");
              alert(searchResult+" 已重置搜索模式为-按时间倒序");
              searchModel = 1;
              loadingView.setVisible(false);
              return;
            }
            contentElement.html("");
            log.success(searchResult);
            let orderElement = jQuery(`
            <div class="s_order">
              排序结果：
              <a>按时间倒序</a>
              <span class="split_line">|</span>
              <a>按时间顺序</a>
              <span class="split_line">|</span>
              <a>按相关性顺序</a>
              <span class="split_line">|</span>
              <a>只看主题贴</a>
              <span class="split_line">|</span>
            </div>
            `);
            setCurrentOrderHTML(orderElement);
            contentElement.append(orderElement);
            searchResult.forEach((item) => {
              contentElement.append(getItemHTML(item));
            });
            loadingView.setVisible(false);
            if (nextPageUrl) {
              addScrollListener();
            }
          }
          /**
           * 添加滚动监听
           */
          function addScrollListener() {
            document.addEventListener("scroll",lockFunction.run)
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
            loadingView.setVisible(true);
            if (!nextPageUrl) {
              removeScrollListener();
              log.success("已到达最后一页");
              loadingView.setVisible(false);
              return;
            }
            let contentElement = jQuery(".main-thread-content-margin");
            let searchResult = await getSearchResult(nextPageUrl);
            if (!searchResult) {
              loadingView.setVisible(false);
              alert("请求下一页失败，详情请看控制台");
              return;
            }
            if (
              typeof searchResult === "string" &&
              (searchResult.startsWith("抱歉") ||
                searchResult.startsWith("获取内容为空"))
            ) {
              loadingView.setVisible(false);
              alert(searchResult);
              return;
            }
            log.success(searchResult);
            searchResult.forEach((item) => {
              contentElement.append(getItemHTML(item));
            });
            loadingView.setVisible(false);
            if (!nextPageUrl) {
              removeScrollListener();
              log.success("已到达最后一页");
              return;
            }
          }
          log.success("当前是在吧内");
          lockFunction = new utils.LockFunction(_scroll_event_, this);
          tiebaCommentConfig.removeScrollListener();
          this.searchSuggestion.removeTargetInputEvent();
          let searchInputElement = document.querySelector("#tieba-search");
          /* 搜索框显示出来 */
          searchInputElement.previousElementSibling.style.display = "none";
          searchInputElement.style.display = "block";
          document
            .querySelector(".more-btn-desc")
            .addEventListener("click", _click_event_);
          utils.listenKeyPress(searchInputElement, (keyName,otherKey,event) => {
            if (keyName === "Enter") {
              _click_event_(event);
            }
          });
          setOrderClickEvent();
          setCSS();
        },
      };
      GM_addStyle(this.css.tieba);
      log.info("插入CSS规则");
      if (this.current_url.match(/^http(s|):\/\/tieba.baidu.com\/p\//g)) {
        tiebaCommentConfig.run();
        registerImagePreview();
      }
      if (
        this.current_url.match(
          /^http(s|):\/\/tieba.baidu.com\/mo\/q\/newtopic\/topicTemplate/g
        )
      ) {
        redirectJump();
      }
      tiebaSearchConfig.run();
    },
    /**
     * 百度文库
     */
    wenku() {
      if (!this.current_url.match(/^http(s|):\/\/(wk|tanbi).baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.wenku);
      log.info("插入CSS规则");
      GM_Menu = new utils.GM_Menu(
        {
          baidu_wenku_block_member_picks: {
            text: "屏蔽会员精选",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_wenku_blocking_app_featured: {
            text: "屏蔽APP精选",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_wenku_blocking_related_documents: {
            text: "屏蔽相关文档",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_wenku_blocking_bottom_toolbar: {
            text: "屏蔽底部工具栏",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_wenku_shield_next_btn: {
            text: "屏蔽下一篇按钮",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      /* 屏蔽会员精选 */
      if (GM_Menu.get("baidu_wenku_block_member_picks")) {
        GM_addStyle(`
          div[class*="vip-choice_"][data-ait-action="vipChoiceShow"]{
            display: none !important;
          }`);
      }
      /* 屏蔽APP精选 */
      if (GM_Menu.get("baidu_wenku_blocking_app_featured")) {
        GM_addStyle(`
          div[class*="app-choice_"][data-ait-action="appChoiceNewShow"],
          div.folder-wrap.invite-clipboard[data-clipboard-text]{
            display: none !important;
          }`);
      }
      /* 屏蔽相关文档 */
      if (GM_Menu.get("baidu_wenku_blocking_related_documents")) {
        GM_addStyle(`
          div.fold-page-conversion,
          div.newrecom-list.invite-clipboard[data-clipboard-text]{
            display: none !important;
          }`);
      }
      /* 屏蔽底部工具栏 */
      if (GM_Menu.get("baidu_wenku_blocking_bottom_toolbar")) {
        GM_addStyle(`
          div.barbottom{
            display: none !important;
          }`);
      }
      /* 屏蔽下一篇按钮 */
      if (GM_Menu.get("baidu_wenku_shield_next_btn")) {
        GM_addStyle(`
          div.next-page-container{
            display: none !important;
          }`);
      }
    },
    /**
     * 百度经验
     */
    jingyan() {
      if (!this.current_url.match(/^http(s|):\/\/jingyan.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.jingyan);
      log.info("插入CSS规则");
    },
    /**
     * 百度百科
     */
    baike() {
      if (
        !this.current_url.match(/^http(s|):\/\/(baike|wapbaike).baidu.com/g)
      ) {
        return;
      }
      let page = 1;
      GM_addStyle(this.css.baike);
      log.info("插入CSS规则");
      GM_Menu = new utils.GM_Menu(
        {
          baidu_baike_sync_next_page_address: {
            text: "同步下一页地址",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );

      /**
       * 获取到的图片大小要重新设置
       */
      function setImageWidthHeight() {
        document.querySelectorAll(".col-para").forEach((item) => {
          item.setAttribute("style", "width: 42.936vw;margin: 0 auto;");
          let content_img_item = item.querySelector(".content-img-item");
          let content_img_link = item.querySelector(".content-img-link");
          let content_album = item.querySelector(".content-album");
          content_album?.setAttribute("style", "");
          if (content_album) {
            content_img_item = item.querySelector(".content-album-item");
            content_img_link = item.querySelector(".content-album-link");
          }
          content_img_item?.setAttribute(
            "style",
            "max-height: 39vw;max-width: 30vw;border-radius: 0.09rem;margin: 0 auto;overflow: hidden;"
          );
          content_img_link?.setAttribute("style", "width: 30vw;");
        });
      }

      /**
       * 获取到的要重新将图片链接插入到img标签中
       */
      function insertUrlToImageNode() {
        document.querySelectorAll(".lazy-img").forEach((item) => {
          item = jQuery(item);
          let content_img = jQuery(item.parent().parent().parent());
          let img_url = content_img.attr("data-src")
            ? content_img.attr("data-src")
            : item.attr("data-url");
          if (img_url != null) {
            item.innerHTML = `<img src="${img_url}"></img>`;
          }
        });
      }
      /**
       * 循环加载更多内容
       */
      function loadMore() {
        utils.waitNode(".BK-main-content", "#J-gotoPC-top").then(async () => {
          let nextPageNode = document.querySelector("#J-gotoPC-top");
          let nextPageUrl = nextPageNode.href;
          let nextUrlObj = new URL(nextPageUrl);
          let itemId = nextUrlObj.pathname.match(
            new RegExp("/item/.+?/([0-9]+)", "i")
          );
          if (!itemId) {
            log.error(nextPageUrl);
            log.error("匹配id失败");
            return;
          }
          log.success(`获取下一页地址: ${nextPageUrl}`);
          loadingView.setCSS();
          jQuery(".BK-main-content").after(loadingView.getLoadingNode());
          while (1) {
            loadingView.setVisible(true);
            let nextPageUrl = `https://baike.baidu.com${
              nextUrlObj.pathname
            }?wpf=3&ldr=1&page=${page}&insf=1&_=${new Date().getTime()}`;
            log.info(nextPageUrl);
            let getResp = await httpx.get({
              url: nextPageUrl,
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/112.0.0.0",
              },
            });
            let respData = getResp.data;
            if (getResp.status) {
              let respObj = utils.parseFromString(respData.responseText);
              let main_content = respObj.querySelector(".BK-main-content");
              nextPageContent = main_content.innerHTML;
              if (main_content.children.length <= 2) {
                log.info("已到达最大页" + (page - 1));
                insertUrlToImageNode();
                setImageWidthHeight();
                loadingView.setText("已到达最大页" + (page - 1));
                break;
              } else {
                loadingView.setText("正在加载页 " + page, true);
                log.info(nextPageContent);
                jQuery(".BK-main-content").append(jQuery(nextPageContent));
                await utils.sleep(350);
              }
              if (GM_Menu.get("baidu_baike_sync_next_page_address")) {
                window.history.pushState("forward", null, respData.finalUrll);
              }
              page++;
            } else if (getResp.type === "onerror") {
              log.error("请求失败 👇");
              log.error(respData);
              insertUrlToImageNode();
              setImageWidthHeight();
              loadingView.setText("请求失败");
              loadingView.setIconVisible(false);
              break;
            } else if (getResp.type === "ontimeout") {
              log.error("请求超时 👇");
              insertUrlToImageNode();
              setImageWidthHeight();
              loadingView.setText("请求超时");
              loadingView.setIconVisible(false);
              break;
            } else {
              log.error("未知错误");
              insertUrlToImageNode();
              setImageWidthHeight();
              loadingView.setText("未知错误");
              loadingView.setIconVisible(false);
              break;
            }
          }
        });
      }
      loadMore();
    },
    /**
     * 百度百科-他说
     */
    baiketashuo() {
      if (!this.current_url.match(/^http(s|):\/\/baike.baidu.com\/tashuo/g)) {
        return;
      }
      /**
       * 去除底部广告
       */
      function remove_bottom_ad() {
        utils.waitNode("#index_tashuo_list").then(() => {
          utils.mutationObserver(document.querySelector("#index_tashuo_list"), {
            callback: (mutations, observer) => {
              Array.from(
                document.querySelector("#index_tashuo_list").children
              ).forEach((item) => {
                if (item.className !== "J-hot-item-container") {
                  log.info(["存在广告-删除！", item]);
                  item.remove();
                }
              });
            },
            config: { subtree: true, childList: true, attributes: true },
          });
        });
      }
      remove_bottom_ad();
    },
    /**
     * 百度知道
     */
    zhidao() {
      if (!this.current_url.match(/^http(s|):\/\/zhidao.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.zhidao);
      log.info("插入CSS规则");
      jQuery(".ec-ad")?.parent()?.remove();
      GM_Menu = new utils.GM_Menu(
        {
          baidu_zhidao_block_recommend_more_exciting_content: {
            text: "屏蔽-推荐更多精彩内容",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_zhidao_block_related_issues: {
            text: "屏蔽-相关问题",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_zhidao_block_other_answers: {
            text: "屏蔽-其他回答",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_fanyi_auto_focus: {
            text: "自动点击-展开更多回答",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      if (GM_Menu.get("baidu_zhidao_block_recommend_more_exciting_content")) {
        GM_addStyle(`
          .feed-recommend-title,
          #feed-recommend,
          .mm-content-box.mm-content-line.feed-recommend{
            display: none !important;
          }`);
      }
      if (GM_Menu.get("baidu_zhidao_block_other_answers")) {
        GM_addStyle(`
          .replies-container + div{
            display: none !important;
          }`);
      }
      if (GM_Menu.get("baidu_zhidao_block_related_issues")) {
        GM_addStyle(`
          div[id^=wahsd]{
            display: none !important;
          }`);
      }
    },
    /**
     * 百度翻译
     */
    fanyi() {
      if (!this.current_url.match(/^http(s|):\/\/fanyi.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.fanyi);
      log.info("插入CSS规则");
      GM_Menu = new utils.GM_Menu(
        {
          baidu_fanyi_recommended_shielding_bottom: {
            text: "屏蔽底部推荐",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_fanyi_other_shielding_bottom: {
            text: "屏蔽底部其它",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_fanyi_auto_focus: {
            text: "自动聚焦",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      if (GM_Menu.get("baidu_fanyi_recommended_shielding_bottom")) {
        GM_addStyle(`
        section.article.android-style{
          display: none !important;
        }`);
      }
      if (GM_Menu.get("baidu_fanyi_other_shielding_bottom")) {
        GM_addStyle(`
        .trans-other-wrap.clearfix{
          display: none !important;
        }`);
      }
      if (GM_Menu.get("baidu_fanyi_auto_focus")) {
        utils.waitNode("textarea#j-textarea").then(() => {
          setTimeout(() => {
            document.querySelector("textarea#j-textarea").focus();
          }, 2500);
        });
      }
    },
    /**
     * 百度翻译-APP
     */
    fanyiApp() {
      if (!this.current_url.match(/^http(s|):\/\/fanyi-app.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.fanyiapp);
      utils.waitNode("#page-content").then(() => {
        jQuery("#page-content")?.attr("style", "max-height:unset !important");
      });
      log.info("插入CSS规则");
    },
    /**
     * 百度图片
     */
    image() {
      if (!this.current_url.match(/^http(s|):\/\/image.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.image);
      log.info("插入CSS规则");
    },
    /**
     * 百度地图
     */
    map() {
      if (!this.current_url.match(/^http(s|):\/\/map.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.map);
      log.info("插入CSS规则");
    },
    /**
     * 百度知道
     */
    mbd() {
      if (!this.current_url.match(/^http(s|):\/\/mbd.baidu.com/g)) {
        return;
      }
      /* 
        示例
        https://mbd.baidu.com/newspage/data/landingsuper?p_from=7&n_type=-1&context=%7B%22nid%22%3A%22news_10287525329342817547%22%7D
        */
      GM_Menu = new utils.GM_Menu(
        {
          baidu_mdb_block_exciting_recommendations: {
            text: "屏蔽精彩推荐",
            enable: false,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      GM_addStyle(this.css.mbd);
      log.info("插入CSS规则");
      if (GM_Menu.get("baidu_mdb_block_exciting_recommendations")) {
        log.success("屏蔽精彩推荐");
        GM_addStyle(`
        div[class^="relateTitle"],
        .infinite-scroll-component__outerdiv{
          display: none !important;
        }
        `);
      }
    },
    /**
     * 百度知了好学
     */
    xue() {
      if (!this.current_url.match(/^http(s|):\/\/xue.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.xue);
      log.info("插入CSS规则");
    },
    /**
     * 百度-爱企查
     */
    aiqicha() {
      if (!this.current_url.match(/^http(s|):\/\/aiqicha.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.aiqicha);
      log.info("插入CSS规则");
      unsafeWindow.localStorage.setItem(
        "coupon_bottom_popup",
        new Date().getTime()
      );
      GM_Menu = new utils.GM_Menu(
        {
          baidu_aiqicha_shidld_carousel: {
            text: "屏蔽轮播图",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
          baidu_aiqicha_shidld_industry_host_news: {
            text: "屏蔽行业热点新闻",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      /**
       * 屏蔽轮播图
       */
      if (GM_Menu.get("baidu_aiqicha_shidld_carousel")) {
        GM_addStyle(`
        div.index-banner-container.van-swipe{
          display: none !important;
        }`);
      }
      /**
       * 屏蔽行业热点新闻
       */
      if (GM_Menu.get("baidu_aiqicha_shidld_industry_host_news")) {
        GM_addStyle(`
        div.hot-news{
          display: none !important;
        }`);
      }
    },
    /**
     * 百度网盟推广
     */
    pos() {
      if (!this.current_url.match(/^http(s|):\/\/pos.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.pos);
      log.info("插入CSS规则");
    },
    /**
     * 百度好看视频
     */
    haokan() {
      if (!this.current_url.match(/^http(s|):\/\/haokan.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.haokan);
      log.info("插入CSS规则");
      GM_Menu = new utils.GM_Menu(
        {
          baidu_haokan_shidld_may_also_like: {
            text: "屏蔽猜你喜欢",
            enable: true,
            showText: (_text_, _enable_) => {
              return (_enable_ ? "✅" : "❌") + " " + _text_;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
      if (GM_Menu.get("baidu_haokan_shidld_may_also_like")) {
        GM_addStyle(`
        div.top-video-list-container{display: none !important};
        `);
      }
    },
    /**
     * 百度识图
     */
    graph() {
      if (!this.current_url.match(/^http(s|):\/\/graph.baidu.com/g)) {
        return;
      }
      GM_addStyle(this.css.graph);
      log.info("插入CSS规则");
      async function uploadImage(event) {
        let uploadImageFile = event.target.files[0];
        if (!uploadImageFile) {
          alert("似乎并未正确上传图片？");
          return;
        }
        let formData = new FormData();
        formData.append("image", uploadImageFile);
        formData.append("tn", "pc");
        formData.append("from", "pc");
        formData.append("image_source", "PC_UPLOAD_FILE");
        formData.append("sdkParams", "undefined");
        let postResp = await httpx.post({
          url: `https://graph.baidu.com/upload?uptime=${Date.now()}`,
          data: formData,
          resposeType: "json",
          headers: {
            "user-agent": utils.getRandomPCUA(),
            Origin: "https://graph.baidu.com",
            Referer: "https://graph.baidu.com/pcpage/index?tpl_from=pc",
            Accept: "*/*",
          },
        });
        event.target.value = "";
        log.success(postResp);
        if (!postResp.status || postResp.data.status !== 200) {
          alert("图片上传失败，详情请看控制台");
          return;
        }
        let imageJSONData = utils.toJSON(postResp.data.responseText);
        log.success(imageJSONData);
        if (imageJSONData["status"] !== 0) {
          alert("图片API返回信息中status不为0，详情请看控制台");
        }
        if (window.location.pathname === "/s") {
          window.location.href = imageJSONData["data"]["url"];
        } else {
          window.open(imageJSONData["data"]["url"], "_blank");
        }
      }
      /* 重构主页的识图一下 */
      utils
        .waitNode(
          "#app section.vf-home-booth div.vf-w-button.vf-home-booth-camera"
        )
        .then((nodeList) => {
          let uploadImageDivDOM = jQuery(
            `<div class="vf-home-booth-camera"></div>`
          );
          uploadImageDivDOM.css("position", "absolute");
          uploadImageDivDOM.css("bottom", "-.42rem");
          uploadImageDivDOM.css("left", "50%");
          uploadImageDivDOM.css("width", "2.2rem");
          uploadImageDivDOM.css("height", ".74rem");
          uploadImageDivDOM.css(
            "background-image",
            "url(https://imgn0.bdstatic.com/image/mobile/n/static/wiseik/static/img/camera_5e72a3a.png)"
          );
          uploadImageDivDOM.css("background-repeat", "no-repeat");
          uploadImageDivDOM.css("background-size", "cover");
          uploadImageDivDOM.css("background-position", "top");
          uploadImageDivDOM.css("-webkit-transform", "translateX(-50%)");
          uploadImageDivDOM.css("-ms-transform", "translateX(-50%)");
          uploadImageDivDOM.css("transform", "translateX(-50%)");
          uploadImageDivDOM.css("-webkit-tap-highlight-color", "transparent");
          uploadImageDivDOM.on("click", function () {
            document.querySelector("input#whitesev-upload-image").click();
          });
          jQuery(nodeList).after(uploadImageDivDOM);
        });
      /* 如果出现识图没结果，重新识别，可能是因为后面参数多了tpl_from=pc的问题 */
      utils.waitNode("#app .graph-noresult-text1").then(() => {
        if (window.location.search.endsWith("&tpl_from=pc")) {
          window.location.href = window.location.href.replace(
            /&tpl_from=pc$/gi,
            ""
          );
        }
      });
      /* 在已搜索出相关结果的界面中的重构【重拍】按钮 */
      utils
        .waitNode("#viewport .graph-imagecut-banner-ctn")
        .then((nodeList) => {
          let retakeDivDOM = jQuery(`<div class="retake-image">重拍</div>`);
          retakeDivDOM.css("position", "absolute");
          retakeDivDOM.css("top", "50%");
          retakeDivDOM.css("right", "0");
          retakeDivDOM.css("padding", "0 .17rem");
          retakeDivDOM.css("font-size", "16px");
          retakeDivDOM.css("line-height", "60px");
          retakeDivDOM.css("color", "#000");
          retakeDivDOM.css("-webkit-transform", "translateY(-50%)");
          retakeDivDOM.css("transform", "translateY(-50%)");
          retakeDivDOM.on("click", function (event) {
            event.stopPropagation();
            event.preventDefault();
            document.querySelector("input#whitesev-upload-image").click();
            jQuery("input#whitesev-upload-image").trigger("click");
          });
          setTimeout(() => {
            jQuery(nodeList).append(retakeDivDOM);
          }, 2000);
        });
      jQuery(function () {
        let uploadImageInput = jQuery(
          `<input id="whitesev-upload-image" type="file" accept="image/*" style="display: none">`
        );
        uploadImageInput.on("change", uploadImage);
        jQuery(document.body).append(uploadImageInput);
      });
    },
  };

  const loadingView = new LoadingView();
  GM_addStyle(CSDN_FLAG_CSS);
  baidu.init();
})();
