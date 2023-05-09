/* 

数据分页导航
例子

let dataPaging = new DataPaging();
dataPaging.init({
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    pageCount: 3,
    currentPage: 1,
    pageChangeCallBack:function(page){
        console.log(page);
    }
});
dataPaging.append(document.querySelector("body > div"));

*/

(function (DataPaging) {
  /**
   * 配置
   */
  const CONFIG = {
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

  /**
   * 整体配置动态计算的数据
   */
  const PAGE_CONFIG = {
    /**
     * 获取当前所在页
     * @returns {Number}
     */
    getCurrentPage: function () {
      return DOM_CONFIG.getAttributeWithPageId(
        DOM_CONFIG.getAttributeWithCurrentPage()
      );
    },
    maxPage: 1 /* 最大页码 */,
  };
  /**
   * 元素获取配置
   */
  const DOM_CONFIG = {
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
      get() {
        return DOM_CONFIG.dataPagingNode.dom.querySelector(
          `${this.localName}.${this.className}`
        );
      },
    },
    /* 上一页按钮 */
    prevBtnNode: {
      localName: "a",
      className: "pg-prev",
      get() {
        return DOM_CONFIG.dataPagingNode.dom.querySelector(
          `${this.localName}.${this.className}`
        );
      },
    },
    /* 下一页按钮 */
    nextBtnNode: {
      localName: "a",
      className: "pg-next",
      get() {
        return DOM_CONFIG.dataPagingNode.dom.querySelector(
          `${this.localName}.${this.className}`
        );
      },
    },
    /* 最后一页按钮 */
    lastBtnNode: {
      localName: "a",
      className: "pg-last",
      get() {
        return DOM_CONFIG.dataPagingNode.dom.querySelector(
          `${this.localName}.${this.className}`
        );
      },
    },
    /**
     * 设置 元素的 页码 值
     * @param {HTMLElement} node
     */
    setAttributeWithPageId(node, page) {
      node.setAttribute("page-id", page);
    },
    /**
     * 获取 元素 的页码属性
     * @param {HTMLElement} node
     * @returns {Number|null}
     */
    getAttributeWithPageId(node) {
      return node.getAttribute("page-id")
        ? parseInt(node.getAttribute("page-id"))
        : null;
    },
    /**
     * 判断 元素 是否存在页码属性
     * @param {HTMLElement} node
     * @returns {Boolean}
     */
    hasAttributeWithPageId(node) {
      return node.hasAttribute("page-id");
    },
    /**
     * 设置 元素的属性 为当前所在页码
     * @param {HTMLElement} node
     */
    setAttributeWithCurrentPage(node) {
      node.setAttribute("data-current-page", "");
    },
    /**
     * 获取当前页码的元素
     * @param {HTMLElement?} dataPagingNode
     * @returns {HTMLElement|null}
     */
    getAttributeWithCurrentPage(dataPagingNode) {
      return (dataPagingNode || this.dataPagingNode.dom).querySelector(
        "a[data-current-page]"
      );
    },
    /**
     * 判断 元素 是否存在 当前页的属性
     * @param {HTMLElement} node
     * @returns
     */
    hasAttributeWithCurrentPage(node) {
      return node.hasAttribute("data-current-page");
    },
    /**
     * 移除 当前页码的属性
     * @param {HTMLElement} node
     */
    removeAttributeWithCurrentPage(node) {
      node.removeAttribute("data-current-page");
    },
    /**
     * 设置 元素 禁用
     * @param {HTMLElement} node
     */
    setAttributeWithDisabled(node) {
      node.setAttribute("disabled", true);
    },
    /**
     * 移除当前页面的禁用的元素
     * @param {HTMLElement|null} dataPagingNode
     */
    removeAllAttributeWithDisabled(dataPagingNode) {
      (dataPagingNode || this.dataPagingNode.dom)
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
    getFirstPageNode(dataPagingNode) {
      return (dataPagingNode || this.dataPagingNode.dom).querySelector(
        "a[page-id='1']"
      );
    },
    /**
     * 获取 最后一页 元素节点
     * @param {HTMLElement?} dataPagingNode
     * @returns {HTMLElement|null}
     */
    getLastPageNode(dataPagingNode) {
      return (dataPagingNode || this.dataPagingNode.dom).querySelector(
        `a[page-id='${PAGE_CONFIG.maxPage}']`
      );
    },
    /**
     * 获取当前所有的页码元素节点
     * @param {HTMLElement?} dataPagingNode
     * @returns {NodeList}
     */
    getAllPageNode(dataPagingNode) {
      return (dataPagingNode || this.dataPagingNode.dom).querySelectorAll(
        "a[page-id]"
      );
    },
  };
  /**
   * 初始化
   * @param {object} details 配置
   * @this {DataPaging}
   */
  DataPaging.prototype.init = function (details) {
    Object.assign(CONFIG, details);
    this.addCSS();
  };
  /**
   * 添加CSS
   * @this {DataPaging}
   */
  DataPaging.prototype.addCSS = function () {
    if (this.isAddCSS) {
      return;
    }
    this.isAddCSS = true;
    let cssNode = document.createElement("style");
    cssNode.setAttribute("type", "text/css");
    cssNode.innerHTML = `@charset "utf-8";
    #${DOM_CONFIG.dataPagingNode.id} {
      text-align: center;
      display: inline-block;
    }
    /* 第一页 */
    #${DOM_CONFIG.dataPagingNode.id} .${DOM_CONFIG.firstBtnNode.className}::before {
      content: "\u21E4";
    }
    /* 上一页 */
    #${DOM_CONFIG.dataPagingNode.id} .${DOM_CONFIG.prevBtnNode.className}::before {
      content: "\u2190";
    }
    /* 下一页 */
    #${DOM_CONFIG.dataPagingNode.id} .${DOM_CONFIG.nextBtnNode.className}::before {
      content: "\u2192";
    }
    /* 最后一页 */
    #${DOM_CONFIG.dataPagingNode.id} .${DOM_CONFIG.lastBtnNode.className}::before {
      content: "\u21E5";
    }
    #${DOM_CONFIG.dataPagingNode.id} .${DOM_CONFIG.firstBtnNode.className},
    #${DOM_CONFIG.dataPagingNode.id} .${DOM_CONFIG.prevBtnNode.className},
    #${DOM_CONFIG.dataPagingNode.id} .${DOM_CONFIG.nextBtnNode.className},
    #${DOM_CONFIG.dataPagingNode.id} .${DOM_CONFIG.lastBtnNode.className} {
      font-family: Arial, sans-serif;
      display: inline-block;
      text-align: center;
      color: #333;
      font-size: 22px;
    }
    #${DOM_CONFIG.dataPagingNode.id} a,
    #${DOM_CONFIG.dataPagingNode.id} span {
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
    #${DOM_CONFIG.dataPagingNode.id} a:hover,
    #${DOM_CONFIG.dataPagingNode.id} span:hover {
      border-color: #3897cd;
      color: #3897cd;
      position: relative;
      z-index: 1;
    }
    #${DOM_CONFIG.dataPagingNode.id} a {
      cursor: pointer;
    }
    #${DOM_CONFIG.dataPagingNode.id} a[data-current-page] {
      background-color: #222a35;
      color: #fff;
      border-color: #ebebeb;
      position: relative;
      z-index: 1;
    }
    #${DOM_CONFIG.dataPagingNode.id} a.${DOM_CONFIG.firstBtnNode.className}[disabled="true"],
    #${DOM_CONFIG.dataPagingNode.id} a.${DOM_CONFIG.prevBtnNode.className}[disabled="true"],
    #${DOM_CONFIG.dataPagingNode.id} a.${DOM_CONFIG.nextBtnNode.className}[disabled="true"],
    #${DOM_CONFIG.dataPagingNode.id} a.${DOM_CONFIG.lastBtnNode.className}[disabled="true"]{
      cursor: not-allowed;
      border: 1px solid transparent;
      color: #8a8a8a;
    }
    `;
    document.head.appendChild(cssNode);
  };
  /**
   * 获取分页元素
   * @returns
   * @this {DataPaging}
   */
  DataPaging.prototype.getDataPagingNode = function () {
    let that = this;
    let dataPagingNode = document.createElement(
      DOM_CONFIG.dataPagingNode.localName
    );
    DOM_CONFIG.dataPagingNode.dom = dataPagingNode;
    dataPagingNode.id = DOM_CONFIG.dataPagingNode.id;
    let firstBtnNode = document.createElement(
      DOM_CONFIG.firstBtnNode.localName
    ); /* 第一页 */
    let prevBtnNode = document.createElement(
      DOM_CONFIG.prevBtnNode.localName
    ); /* 上一页 */
    let nextBtnNode = document.createElement(
      DOM_CONFIG.nextBtnNode.localName
    ); /* 下一页 */
    let lastBtnNode = document.createElement(
      DOM_CONFIG.lastBtnNode.localName
    ); /* 最后一页 */
    firstBtnNode.className = DOM_CONFIG.firstBtnNode.className;
    prevBtnNode.className = DOM_CONFIG.prevBtnNode.className;
    nextBtnNode.className = DOM_CONFIG.nextBtnNode.className;
    lastBtnNode.className = DOM_CONFIG.lastBtnNode.className;
    /* 计算总数据量除以显示的数据量 得出分页的数量 */
    PAGE_CONFIG.maxPage = Math.ceil(CONFIG.data.length / CONFIG.pageCount);
    /* 校正超出或小于的当前页码 */
    if (CONFIG.currentPage < 1) {
      CONFIG.currentPage = 1;
    } else if (CONFIG.currentPage > PAGE_CONFIG.maxPage) {
      CONFIG.currentPage = PAGE_CONFIG.maxPage;
    }
    /* 超过1 才开启分页 */
    if (PAGE_CONFIG.maxPage < 2) {
      return dataPagingNode;
    }
    /* 判断第一页按钮 是否开启 */
    if (CONFIG.firstBtn.enable) {
      this.setFirstBtnClickEvent(firstBtnNode, dataPagingNode);
      dataPagingNode.appendChild(firstBtnNode);
    }
    /* 判断上一页按钮 是否开启 */
    if (CONFIG.prevBtn.enable) {
      this.setPrevBtnClickEvent(prevBtnNode, dataPagingNode);
      dataPagingNode.appendChild(prevBtnNode);
    }
    let currentPage = CONFIG.currentPage;
    /* 计算出的最大页码在限制的显示页码数量内 */
    /* 比如计算出的页码总共有5个，设置中当前能显示出的页码按钮元素为3个 */
    if (CONFIG.pageStep > PAGE_CONFIG.maxPage) {
      for (currentPage; currentPage <= PAGE_CONFIG.maxPage; currentPage++) {
        let pageBtnNode = document.createElement("a");
        DOM_CONFIG.setAttributeWithPageId(pageBtnNode, currentPage);
        pageBtnNode.innerText = currentPage;
        if (CONFIG.currentPage === currentPage) {
          DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
        }
        this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
        dataPagingNode.appendChild(pageBtnNode);
      }
    } else {
      /* 如果 当前页 + 限制显示的页码 大于等于 最大页，那么 从最后一页倒序着添加 */
      if (currentPage + CONFIG.pageStep >= PAGE_CONFIG.maxPage) {
        currentPage = PAGE_CONFIG.maxPage;
        let needAppendNodeList = [];
        for (let i = 0; i < CONFIG.pageStep; i++) {
          let pageBtnNode = document.createElement("a");
          DOM_CONFIG.setAttributeWithPageId(pageBtnNode, currentPage);
          pageBtnNode.innerText = currentPage;
          if (CONFIG.currentPage === currentPage) {
            DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
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
        for (let i = 0; i < CONFIG.pageStep; i++) {
          let pageBtnNode = document.createElement("a");
          DOM_CONFIG.setAttributeWithPageId(pageBtnNode, currentPage);
          pageBtnNode.innerText = currentPage;
          if (CONFIG.currentPage === currentPage) {
            DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
          }
          this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
          dataPagingNode.appendChild(pageBtnNode);
          currentPage++;
        }
      }
    }
    /* 判断下一页按钮 是否开启 */
    if (CONFIG.nextBtn.enable) {
      this.setNextBtnClickEvent(nextBtnNode, dataPagingNode);
      dataPagingNode.appendChild(nextBtnNode);
    }
    /* 判断最后一页按钮 是否开启 */
    if (CONFIG.lastBtn.enable) {
      this.setLastBtnClickEvent(lastBtnNode, dataPagingNode);
      dataPagingNode.appendChild(lastBtnNode);
    }
    /* 配置中的当前页码为1时 设置 第一页、上一页按钮禁用 */
    if (CONFIG.currentPage === 1) {
      DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.firstBtnNode.get());
      DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.prevBtnNode.get());
    } else if (CONFIG.currentPage === PAGE_CONFIG.maxPage) {
      /* 如果为最大的页码 下一页、最后一页禁用 */
      DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.nextBtnNode.get());
      DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.lastBtnNode.get());
    }
    return dataPagingNode;
  };

  /**
   * 设置 第一页 点击事件
   * @param {HTMLElement} btnNode 元素
   * @param {HTMLElement} dataPagingNode 分页元素(主)
   * @this {DataPaging}
   */
  DataPaging.prototype.setFirstBtnClickEvent = function (
    btnNode,
    dataPagingNode
  ) {
    let that = this;
    btnNode.onclick = function () {
      let currentNode = DOM_CONFIG.getAttributeWithCurrentPage();
      /* 当前页为第一页时无效 */
      if (DOM_CONFIG.getAttributeWithPageId(currentNode) === 1) {
        return;
      }
      CONFIG.firstBtn.callBack();
      let allPageNode = DOM_CONFIG.getAllPageNode(dataPagingNode);
      for (let i = 0; i < CONFIG.pageStep; i++) {
        let item = allPageNode[i];
        /* 设置当前页码为第一页 */
        if (i === 0) {
          DOM_CONFIG.setAttributeWithCurrentPage(item);
        } else {
          /* 移除其它设置的第一页 */
          DOM_CONFIG.removeAttributeWithCurrentPage(item);
        }
        DOM_CONFIG.setAttributeWithPageId(item, i + 1);
        item.innerText = i + 1;
      }
      DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
      /* 可视区域存在第一页的页码时，禁用第一页、上一页按钮 */
      if (DOM_CONFIG.getFirstPageNode(dataPagingNode)) {
        DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.firstBtnNode.get());
        DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.prevBtnNode.get());
      }
      CONFIG.pageChangeCallBack(1);
    };
  };
  /**
   * 设置 上一页 点击事件
   * @param {HTMLElement} btnNode 元素
   * @param {HTMLElement} dataPagingNode 分页元素(主)
   * @this {DataPaging}
   */
  DataPaging.prototype.setPrevBtnClickEvent = function (
    btnNode,
    dataPagingNode
  ) {
    let that = this;
    btnNode.onclick = function () {
      let currentNode = DOM_CONFIG.getAttributeWithCurrentPage();
      /* 当前页为第一页时无效 */
      if (DOM_CONFIG.getAttributeWithPageId(currentNode) === 1) {
        return;
      }
      CONFIG.prevBtn.callBack();
      if (
        DOM_CONFIG.hasAttributeWithPageId(currentNode.previousElementSibling)
      ) {
        currentNode.previousElementSibling.click();
      } else {
        let allPageNode = DOM_CONFIG.getAllPageNode(dataPagingNode);
        allPageNode.forEach((item, index) => {
          let page = DOM_CONFIG.getAttributeWithPageId(item);
          page--;
          DOM_CONFIG.setAttributeWithPageId(item, page);
          item.innerText = page;
        });
        CONFIG.pageChangeCallBack(PAGE_CONFIG.getCurrentPage());
      }
      DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
      /* 可视区域存在第一页的页码时，禁用第一页、上一页按钮 */
      if (DOM_CONFIG.getFirstPageNode(dataPagingNode)) {
        DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.firstBtnNode.get());
        DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.prevBtnNode.get());
      }
    };
  };
  /**
   * 设置 下一页 点击事件
   * @param {HTMLElement} btnNode 元素
   * @param {HTMLElement} dataPagingNode 分页元素(主)
   * @this {DataPaging}
   */
  DataPaging.prototype.setNextBtnClickEvent = function (
    btnNode,
    dataPagingNode
  ) {
    let that = this;
    btnNode.onclick = function () {
      let currentNode = DOM_CONFIG.getAttributeWithCurrentPage();
      /* 当前页出于最后一页时 无效点击 */
      if (
        DOM_CONFIG.getAttributeWithPageId(currentNode) === PAGE_CONFIG.maxPage
      ) {
        return;
      }
      CONFIG.nextBtn.callBack();
      /* 如果后面的按钮存在页码属性 点击 */
      if (DOM_CONFIG.hasAttributeWithPageId(currentNode.nextElementSibling)) {
        currentNode.nextElementSibling.click();
      } else {
        let allPageNode = DOM_CONFIG.getAllPageNode(dataPagingNode);
        allPageNode.forEach((item, index) => {
          let page = DOM_CONFIG.getAttributeWithPageId(item);
          page++;
          if (page > PAGE_CONFIG.maxPage) {
            return;
          }
          DOM_CONFIG.setAttributeWithPageId(item, page);
          item.innerText = page;
        });
        CONFIG.pageChangeCallBack(PAGE_CONFIG.getCurrentPage());
      }
      DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
      if (DOM_CONFIG.getLastPageNode()) {
        DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.nextBtnNode.get());
        DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.lastBtnNode.get());
      }
    };
  };
  /**
   * 设置 最后一页 点击事件
   * @param {HTMLElement} btnNode 元素
   * @param {HTMLElement} dataPagingNode 分页元素(主)
   * @this {DataPaging}
   */
  DataPaging.prototype.setLastBtnClickEvent = function (
    btnNode,
    dataPagingNode
  ) {
    let that = this;
    btnNode.onclick = function () {
      let currentNode = DOM_CONFIG.getAttributeWithCurrentPage();
      if (
        DOM_CONFIG.getAttributeWithPageId(currentNode) === PAGE_CONFIG.maxPage
      ) {
        return;
      }
      CONFIG.lastBtn.callBack();
      let allPageNode = Array.from(DOM_CONFIG.getAllPageNode(dataPagingNode));
      allPageNode.reverse();
      let pageCount = PAGE_CONFIG.maxPage;
      let index = 0;
      while (true) {
        if (PAGE_CONFIG.maxPage - pageCount >= 3) {
          break;
        }
        let item = allPageNode[index];
        if(item == null){
          break;
        }
        if (index === 0) {
          DOM_CONFIG.setAttributeWithCurrentPage(item);
        } else {
          DOM_CONFIG.removeAttributeWithCurrentPage(item);
        }
        
        DOM_CONFIG.setAttributeWithPageId(item, pageCount);
        item.innerText = pageCount;
        pageCount--;
        index++;
      }
      DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
      DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.nextBtnNode.get());
      DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.lastBtnNode.get());
      CONFIG.pageChangeCallBack(PAGE_CONFIG.maxPage);
    };
  };

  /**
   * 设置 页 点击事件
   * @param {HTMLElement} btnNode 元素
   * @param {HTMLElement} dataPagingNode 分页元素(主)
   * @this {DataPaging}
   */
  DataPaging.prototype.setPageBtnClickEvent = function (
    btnNode,
    dataPagingNode
  ) {
    let that = this;
    btnNode.onclick = function (event) {
      let eventBtnNode = event.target;
      DOM_CONFIG.getAllPageNode(dataPagingNode).forEach((item) => {
        /* 是当前点击的页码 */
        if (item == eventBtnNode) {
          /* 如果 当前点击的页码不是current */
          if (!DOM_CONFIG.hasAttributeWithCurrentPage(eventBtnNode)) {
            DOM_CONFIG.setAttributeWithCurrentPage(eventBtnNode);
            CONFIG.pageChangeCallBack(PAGE_CONFIG.getCurrentPage());
          }
        } else {
          DOM_CONFIG.removeAttributeWithCurrentPage(item);
        }
      });
    };
    DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
    if (DOM_CONFIG.getFirstPageNode(dataPagingNode)) {
      DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.firstBtnNode.get());
      DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.prevBtnNode.get());
    }
    if (DOM_CONFIG.getLastPageNode()) {
      DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.nextBtnNode.get());
      DOM_CONFIG.setAttributeWithDisabled(DOM_CONFIG.lastBtnNode.get());
    }
  };
  /**
   * 把分页添加到某个父元素下
   * @param {HTMLElement} parentNode
   * @this {DataPaging}
   */
  DataPaging.prototype.append = function (parentNode) {
    DOM_CONFIG.dataPagingNode.dom?.remove();
    DOM_CONFIG.dataPagingNode.dom = null;
    parentNode.appendChild(this.getDataPagingNode());
  };

  /**
   * 动态修改配置，注意，修改后需要.append修改原来的元素
   * @param {Object} details 配置
   * @this {DataPaging}
   */
  DataPaging.prototype.changeConfig = function (details) {
    this.init(details);
    return this;
  };
})((DataPaging = function () {}));
