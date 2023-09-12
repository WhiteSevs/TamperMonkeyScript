/* 

数据分页导航
例子

let dataPaging = new DataPaging({
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    pageCount: 3,
    currentPage: 1,
    pageChangeCallBack:function(page){
        console.log(page);
    }
});
dataPaging.append(document.querySelector("body > div"));
*/
let DataPaging = {};
(function () {
  class Paging {
    /**
     * 是否已添加CSS
     */
    isAddCSS = false;
    CONFIG = {
      data: [] /* 数据 */,
      pageCount: 5 /* 每一页显示的数据数量 */,
      pageStep: 3 /* 当前能最多显示出来的页码 */,
      currentPage: 1 /* 当前页码 */,
      /**
       * 当前页码改变的回调
       * @param {number} page 当前页
       */
      pageChangeCallBack: function (page) {},
      /* 上一页按钮 */
      prevBtn: {
        enable: true /* 是否启用 */,
        callBack: function () {} /* 点击事件回调 */,
      },
      /* 下一页按钮 */
      nextBtn: {
        enable: true /* 是否启用 */,
        callBack: function () {},
      },
      /* 第一页按钮 */
      firstBtn: {
        enable: true /* 是否启用 */,
        callBack: function () {},
      },
      /* 最后一页按钮 */
      lastBtn: {
        enable: true /* 是否启用 */,
        callBack: function () {},
      },
    };
    PAGE_CONFIG = {
      /**
       * 获取当前所在页
       * @returns {Number}
       */
      getCurrentPage: () => {
        return this.DOM_CONFIG.getAttributeWithPageId(
          this.DOM_CONFIG.getAttributeWithCurrentPage()
        );
      },
      maxPage: 1 /* 最大页码 */,
    };
    DOM_CONFIG = {
      /* 整个分页元素 */
      dataPagingNode: {
        localName: "div",
        id: "whitesev-datapaging",
        dom: null,
      },
      /* 第一页按钮 */
      firstBtnNode: {
        localName: "a",
        className: "pg-first",
        get: () => {
          return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
            `${this.DOM_CONFIG.firstBtnNode.localName}.${this.DOM_CONFIG.firstBtnNode.className}`
          );
        },
      },
      /* 上一页按钮 */
      prevBtnNode: {
        localName: "a",
        className: "pg-prev",
        get: () => {
          return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
            `${this.DOM_CONFIG.prevBtnNode.localName}.${this.DOM_CONFIG.prevBtnNode.className}`
          );
        },
      },
      /* 下一页按钮 */
      nextBtnNode: {
        localName: "a",
        className: "pg-next",
        get: () => {
          return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
            `${this.DOM_CONFIG.nextBtnNode.localName}.${this.DOM_CONFIG.nextBtnNode.className}`
          );
        },
      },
      /* 最后一页按钮 */
      lastBtnNode: {
        localName: "a",
        className: "pg-last",
        get: () => {
          return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
            `${this.DOM_CONFIG.lastBtnNode.localName}.${this.DOM_CONFIG.lastBtnNode.className}`
          );
        },
      },
      /**
       * 设置 元素的 页码 值
       * @param {HTMLElement} node
       */
      setAttributeWithPageId: (node, page) => {
        node.setAttribute("page-id", page);
      },
      /**
       * 获取 元素 的页码属性
       * @param {HTMLElement} node
       * @returns {Number|null}
       */
      getAttributeWithPageId: (node) => {
        return node?.getAttribute("page-id")
          ? parseInt(node.getAttribute("page-id"))
          : null;
      },
      /**
       * 判断 元素 是否存在页码属性
       * @param {HTMLElement} node
       * @returns {Boolean}
       */
      hasAttributeWithPageId: (node) => {
        return node.hasAttribute("page-id");
      },
      /**
       * 设置 元素的属性 为当前所在页码
       * @param {HTMLElement} node
       */
      setAttributeWithCurrentPage: (node) => {
        node.setAttribute("data-current-page", "");
      },
      /**
       * 获取当前页码的元素
       * @param {HTMLElement?} dataPagingNode
       * @returns {HTMLElement|null}
       */
      getAttributeWithCurrentPage: (dataPagingNode) => {
        return (
          dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom
        ).querySelector("a[data-current-page]");
      },
      /**
       * 判断 元素 是否存在 当前页的属性
       * @param {HTMLElement} node
       * @returns
       */
      hasAttributeWithCurrentPage: (node) => {
        return node.hasAttribute("data-current-page");
      },
      /**
       * 移除 当前页码的属性
       * @param {HTMLElement} node
       */
      removeAttributeWithCurrentPage: (node) => {
        node.removeAttribute("data-current-page");
      },
      /**
       * 设置 元素 禁用
       * @param {HTMLElement} node
       */
      setAttributeWithDisabled: (node) => {
        node.setAttribute("disabled", true);
      },
      /**
       * 移除当前页面的禁用的元素
       * @param {HTMLElement|null} dataPagingNode
       */
      removeAllAttributeWithDisabled: (dataPagingNode) => {
        (dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom)
          .querySelectorAll("a[class][disabled]")
          .forEach((item) => {
            item.removeAttribute("disabled");
          });
      },
      /**
       * 获取 第一页 元素节点
       * @param {HTMLElement?} dataPagingNode
       * @returns {HTMLElement|null}
       */
      getFirstPageNode: (dataPagingNode) => {
        return (
          dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom
        ).querySelector("a[page-id='1']");
      },
      /**
       * 获取 最后一页 元素节点
       * @param {HTMLElement?} dataPagingNode
       * @returns {HTMLElement|null}
       */
      getLastPageNode: (dataPagingNode) => {
        return (
          dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom
        ).querySelector(`a[page-id='${this.PAGE_CONFIG.maxPage}']`);
      },
      /**
       * 获取当前所有的页码元素节点
       * @param {HTMLElement?} dataPagingNode
       * @returns {NodeList}
       */
      getAllPageNode: (dataPagingNode) => {
        return (
          dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom
        ).querySelectorAll("a[page-id]");
      },
    };
    constructor(details) {
      Object.assign(this.CONFIG, details);
      this.addCSS();
    }
    /**
     * 添加CSS
     */
    addCSS() {
      if (this.isAddCSS) {
        return;
      }
      this.isAddCSS = true;
      let cssNode = document.createElement("style");
      cssNode.setAttribute("type", "text/css");
      cssNode.innerHTML = `@charset "utf-8";
      #${this.DOM_CONFIG.dataPagingNode.id} {
        text-align: center;
        display: inline-block;
      }
      /* 第一页 */
      #${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.firstBtnNode.className}::before {
        content: "\u21E4";
      }
      /* 上一页 */
      #${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.prevBtnNode.className}::before {
        content: "\u2190";
      }
      /* 下一页 */
      #${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.nextBtnNode.className}::before {
        content: "\u2192";
      }
      /* 最后一页 */
      #${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.lastBtnNode.className}::before {
        content: "\u21E5";
      }
      #${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.firstBtnNode.className},
      #${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.prevBtnNode.className},
      #${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.nextBtnNode.className},
      #${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.lastBtnNode.className} {
        font-family: Arial, sans-serif;
        display: inline-block;
        text-align: center;
        color: #333;
        font-size: 22px;
      }
      #${this.DOM_CONFIG.dataPagingNode.id} a,
      #${this.DOM_CONFIG.dataPagingNode.id} span {
        width: 45px;
        height: 40px;
        border: 1px solid #ebebeb;
        margin-left: -1px;
        color: #8a8a8a;
        line-height: 40px;
        float: left;
        font-size: 15px;
        text-decoration: none;
        margin: 0 2px;
        border-radius: 6px;
      }
      #${this.DOM_CONFIG.dataPagingNode.id} a:hover,
      #${this.DOM_CONFIG.dataPagingNode.id} span:hover {
        border-color: #3897cd;
        color: #3897cd;
        position: relative;
        z-index: 1;
      }
      #${this.DOM_CONFIG.dataPagingNode.id} a {
        cursor: pointer;
      }
      #${this.DOM_CONFIG.dataPagingNode.id} a[data-current-page] {
        background-color: #222a35;
        color: #fff;
        border-color: #ebebeb;
        position: relative;
        z-index: 1;
      }
      #${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.firstBtnNode.className}[disabled="true"],
      #${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.prevBtnNode.className}[disabled="true"],
      #${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.nextBtnNode.className}[disabled="true"],
      #${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.lastBtnNode.className}[disabled="true"]{
        cursor: not-allowed;
        border: 1px solid transparent;
        color: #8a8a8a;
      }
      `;
      document.head.appendChild(cssNode);
    }
    /**
     * 获取分页元素
     * @returns {Element}
     */
    getDataPagingNode() {
      let that = this;
      let dataPagingNode = document.createElement(
        that.DOM_CONFIG.dataPagingNode.localName
      );
      that.DOM_CONFIG.dataPagingNode.dom = dataPagingNode;
      dataPagingNode.id = that.DOM_CONFIG.dataPagingNode.id;
      let firstBtnNode = document.createElement(
        that.DOM_CONFIG.firstBtnNode.localName
      ); /* 第一页 */
      let prevBtnNode = document.createElement(
        that.DOM_CONFIG.prevBtnNode.localName
      ); /* 上一页 */
      let nextBtnNode = document.createElement(
        that.DOM_CONFIG.nextBtnNode.localName
      ); /* 下一页 */
      let lastBtnNode = document.createElement(
        that.DOM_CONFIG.lastBtnNode.localName
      ); /* 最后一页 */
      firstBtnNode.className = that.DOM_CONFIG.firstBtnNode.className;
      prevBtnNode.className = that.DOM_CONFIG.prevBtnNode.className;
      nextBtnNode.className = that.DOM_CONFIG.nextBtnNode.className;
      lastBtnNode.className = that.DOM_CONFIG.lastBtnNode.className;
      /* 计算总数据量除以显示的数据量 得出分页的数量 */
      that.PAGE_CONFIG.maxPage = Math.ceil(
        that.CONFIG.data.length / that.CONFIG.pageCount
      );
      /* 校正超出或小于的当前页码 */
      if (that.CONFIG.currentPage < 1) {
        that.CONFIG.currentPage = 1;
      } else if (that.CONFIG.currentPage > that.PAGE_CONFIG.maxPage) {
        that.CONFIG.currentPage = that.PAGE_CONFIG.maxPage;
      }
      /* 超过1 才开启分页 */
      if (that.PAGE_CONFIG.maxPage < 2) {
        return dataPagingNode;
      }
      /* 判断第一页按钮 是否开启 */
      if (that.CONFIG.firstBtn.enable) {
        this.setFirstBtnClickEvent(firstBtnNode, dataPagingNode);
        dataPagingNode.appendChild(firstBtnNode);
      }
      /* 判断上一页按钮 是否开启 */
      if (that.CONFIG.prevBtn.enable) {
        this.setPrevBtnClickEvent(prevBtnNode, dataPagingNode);
        dataPagingNode.appendChild(prevBtnNode);
      }
      let currentPage = that.CONFIG.currentPage;
      /* 计算出的最大页码在限制的显示页码数量内 */
      /* 比如计算出的页码总共有5个，设置中当前能显示出的页码按钮元素为3个 */
      if (that.CONFIG.pageStep > that.PAGE_CONFIG.maxPage) {
        for (
          currentPage;
          currentPage <= that.PAGE_CONFIG.maxPage;
          currentPage++
        ) {
          let pageBtnNode = document.createElement("a");
          that.DOM_CONFIG.setAttributeWithPageId(pageBtnNode, currentPage);
          pageBtnNode.innerText = currentPage;
          if (that.CONFIG.currentPage === currentPage) {
            that.DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
          }
          this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
          dataPagingNode.appendChild(pageBtnNode);
        }
      } else {
        /* 如果 当前页 + 限制显示的页码 大于等于 最大页，那么 从最后一页倒序着添加 */
        if (currentPage + that.CONFIG.pageStep > that.PAGE_CONFIG.maxPage) {
          currentPage = that.PAGE_CONFIG.maxPage;
          let needAppendNodeList = [];
          for (let i = 0; i < that.CONFIG.pageStep; i++) {
            let pageBtnNode = document.createElement("a");
            that.DOM_CONFIG.setAttributeWithPageId(pageBtnNode, currentPage);
            pageBtnNode.innerText = currentPage;
            if (that.CONFIG.currentPage === currentPage) {
              that.DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
            }
            this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
            needAppendNodeList = [...needAppendNodeList, pageBtnNode];
            currentPage--;
          }
          needAppendNodeList.reverse();
          needAppendNodeList.forEach((item) => {
            dataPagingNode.appendChild(item);
          });
        } else {
          /* 当前页 在计算出的页码内 */
          for (let i = 0; i < that.CONFIG.pageStep; i++) {
            let pageBtnNode = document.createElement("a");
            that.DOM_CONFIG.setAttributeWithPageId(pageBtnNode, currentPage);
            pageBtnNode.innerText = currentPage;
            if (that.CONFIG.currentPage === currentPage) {
              that.DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
            }
            this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
            dataPagingNode.appendChild(pageBtnNode);
            currentPage++;
          }
        }
      }
      /* 判断下一页按钮 是否开启 */
      if (that.CONFIG.nextBtn.enable) {
        this.setNextBtnClickEvent(nextBtnNode, dataPagingNode);
        dataPagingNode.appendChild(nextBtnNode);
      }
      /* 判断最后一页按钮 是否开启 */
      if (that.CONFIG.lastBtn.enable) {
        this.setLastBtnClickEvent(lastBtnNode, dataPagingNode);
        dataPagingNode.appendChild(lastBtnNode);
      }
      /* 配置中的当前页码为1时 设置 第一页、上一页按钮禁用 */
      if (that.CONFIG.currentPage === 1) {
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.firstBtnNode.get()
        );
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.prevBtnNode.get()
        );
      } else if (that.CONFIG.currentPage === that.PAGE_CONFIG.maxPage) {
        /* 如果为最大的页码 下一页、最后一页禁用 */
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.nextBtnNode.get()
        );
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.lastBtnNode.get()
        );
      }
      return dataPagingNode;
    }
    /**
     * 设置 第一页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    setFirstBtnClickEvent(btnNode, dataPagingNode) {
      let that = this;
      btnNode.onclick = function () {
        let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
        /* 当前页为第一页时无效 */
        if (that.DOM_CONFIG.getAttributeWithPageId(currentNode) === 1) {
          return;
        }
        that.CONFIG.firstBtn.callBack();
        let allPageNode = that.DOM_CONFIG.getAllPageNode(dataPagingNode);
        for (let i = 0; i < that.CONFIG.pageStep; i++) {
          let item = allPageNode[i];
          /* 设置当前页码为第一页 */
          if (i === 0) {
            that.DOM_CONFIG.setAttributeWithCurrentPage(item);
          } else {
            /* 移除其它设置的第一页 */
            that.DOM_CONFIG.removeAttributeWithCurrentPage(item);
          }
          that.DOM_CONFIG.setAttributeWithPageId(item, i + 1);
          item.innerText = i + 1;
        }
        that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
        /* 可视区域存在第一页的页码时，禁用第一页、上一页按钮 */
        if (that.DOM_CONFIG.getFirstPageNode(dataPagingNode)) {
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.firstBtnNode.get()
          );
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.prevBtnNode.get()
          );
        }
        that.CONFIG.pageChangeCallBack(1);
      };
    }
    /**
     * 设置 上一页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    setPrevBtnClickEvent(btnNode, dataPagingNode) {
      let that = this;
      btnNode.onclick = function () {
        let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
        /* 当前页为第一页时无效 */
        if (that.DOM_CONFIG.getAttributeWithPageId(currentNode) === 1) {
          return;
        }
        that.CONFIG.prevBtn.callBack();
        if (
          that.DOM_CONFIG.hasAttributeWithPageId(
            currentNode.previousElementSibling
          )
        ) {
          currentNode.previousElementSibling.click();
        } else {
          let allPageNode = that.DOM_CONFIG.getAllPageNode(dataPagingNode);
          allPageNode.forEach((item, index) => {
            let page = that.DOM_CONFIG.getAttributeWithPageId(item);
            page--;
            that.DOM_CONFIG.setAttributeWithPageId(item, page);
            item.innerText = page;
          });
          that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.getCurrentPage());
        }
        that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
        /* 如果当前第1页可见，且当前所在页不是第1页，则禁用上一页按钮和第一页按钮 */
        if (
          that.DOM_CONFIG.getFirstPageNode(dataPagingNode) &&
          that.PAGE_CONFIG.getCurrentPage() == 1
        ) {
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.firstBtnNode.get()
          );
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.prevBtnNode.get()
          );
        }
      };
    }
    /**
     * 设置 下一页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    setNextBtnClickEvent(btnNode, dataPagingNode) {
      let that = this;
      btnNode.onclick = function () {
        let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
        /* 当前页出于最后一页时 无效点击 */
        if (
          that.DOM_CONFIG.getAttributeWithPageId(currentNode) ===
          that.PAGE_CONFIG.maxPage
        ) {
          return;
        }
        that.CONFIG.nextBtn.callBack();
        /* 如果后面的按钮存在页码属性 点击 */
        if (
          that.DOM_CONFIG.hasAttributeWithPageId(currentNode.nextElementSibling)
        ) {
          currentNode.nextElementSibling.click();
        } else {
          let allPageNode = that.DOM_CONFIG.getAllPageNode(dataPagingNode);
          allPageNode.forEach((item, index) => {
            let page = that.DOM_CONFIG.getAttributeWithPageId(item);
            page++;
            if (page > that.PAGE_CONFIG.maxPage) {
              return;
            }
            that.DOM_CONFIG.setAttributeWithPageId(item, page);
            item.innerText = page;
          });
          that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.getCurrentPage());
        }
        that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
        if (
          that.DOM_CONFIG.getLastPageNode() &&
          that.PAGE_CONFIG.getCurrentPage() == that.PAGE_CONFIG.maxPage
        ) {
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.nextBtnNode.get()
          );
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.lastBtnNode.get()
          );
        }
      };
    }
    /**
     * 设置 最后一页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    setLastBtnClickEvent(btnNode, dataPagingNode) {
      let that = this;
      btnNode.onclick = function () {
        let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
        if (
          that.DOM_CONFIG.getAttributeWithPageId(currentNode) ===
          that.PAGE_CONFIG.maxPage
        ) {
          return;
        }
        that.CONFIG.lastBtn.callBack();
        let allPageNode = Array.from(
          that.DOM_CONFIG.getAllPageNode(dataPagingNode)
        );
        allPageNode.reverse();
        let pageCount = that.PAGE_CONFIG.maxPage;
        let index = 0;
        while (true) {
          if (that.PAGE_CONFIG.maxPage - pageCount > 3) {
            break;
          }
          let item = allPageNode[index];
          if (item == null) {
            break;
          }
          if (index === 0) {
            that.DOM_CONFIG.setAttributeWithCurrentPage(item);
          } else {
            that.DOM_CONFIG.removeAttributeWithCurrentPage(item);
          }

          that.DOM_CONFIG.setAttributeWithPageId(item, pageCount);
          item.innerText = pageCount;
          pageCount--;
          index++;
        }
        that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.nextBtnNode.get()
        );
        that.DOM_CONFIG.setAttributeWithDisabled(
          that.DOM_CONFIG.lastBtnNode.get()
        );
        that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.maxPage);
      };
    }
    /**
     * 设置 页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     * @this {Paging}
     */
    setPageBtnClickEvent(btnNode, dataPagingNode) {
      let that = this;
      btnNode.onclick = function (event) {
        let eventBtnNode = event.target;
        that.DOM_CONFIG.getAllPageNode(dataPagingNode).forEach((item) => {
          /* 是当前点击的页码 */
          if (item == eventBtnNode) {
            /* 如果 当前点击的页码不是current */
            if (!that.DOM_CONFIG.hasAttributeWithCurrentPage(eventBtnNode)) {
              that.DOM_CONFIG.setAttributeWithCurrentPage(eventBtnNode);
              that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.getCurrentPage());
            }
          } else {
            that.DOM_CONFIG.removeAttributeWithCurrentPage(item);
          }
        });
        that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
        /* 如果当前第1页可见，且当前所在页不是第1页，则禁用上一页按钮和第一页按钮 */
        if (
          that.DOM_CONFIG.getFirstPageNode(dataPagingNode) &&
          that.PAGE_CONFIG.getCurrentPage() == 1
        ) {
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.firstBtnNode.get()
          );
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.prevBtnNode.get()
          );
        }
        /* 如果当前最后一页可见，且当前所在页不是最后一页，则禁用下一页按钮和最后一页按钮 */
        if (
          that.DOM_CONFIG.getLastPageNode() &&
          that.PAGE_CONFIG.getCurrentPage() == that.PAGE_CONFIG.maxPage
        ) {
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.nextBtnNode.get()
          );
          that.DOM_CONFIG.setAttributeWithDisabled(
            that.DOM_CONFIG.lastBtnNode.get()
          );
        }
      };
    }
    /**
     * 把分页添加到某个父元素下
     * @param {HTMLElement} parentNode
     */
    append(parentNode) {
      let that = this;
      that.DOM_CONFIG.dataPagingNode.dom?.remove();
      that.DOM_CONFIG.dataPagingNode.dom = null;
      parentNode.appendChild(that.getDataPagingNode());
    }

    /**
     * 动态修改配置，注意，修改后需要.append修改原来的元素
     * @param {Object} details 配置
     */
    changeConfig(details) {
      this.init(details);
    }
  }
  DataPaging = Paging;
})();
