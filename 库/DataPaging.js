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
    DataPaging.prototype.config = {
      data: [] /* 数据 */,
      pageCount: 5 /* 每一页显示的数据数量 */,
      pageStep: 3 /* 当前能最多显示出来的页码 */,
      currentPage: 1 /* 当前页码 */,
      /* 当前页码改变的回调 */
      pageChangeCallBack: function () {},
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
    DataPaging.prototype.pageConfig = {
      dataPagingNode: null,
      getCurrentPage: function () {
        return parseInt(
          this.dataPagingNode
            ?.querySelector("a[data-current-page]")
            ?.getAttribute("page-id")
        );
      },
      maxPage: 1 /* 最大页码 */,
    };
    /**
     * 初始化
     * @param {object} details 配置
     * @this {DataPaging}
     */
    DataPaging.prototype.init = function (details) {
      this.config = Object.assign(this.config, details);
      this.addCSS();
    };
    /**
     * 添加CSS
     */
    DataPaging.prototype.addCSS = function () {
      if (this.isAddCSS) {
        return;
      }
      this.isAddCSS = true;
      let cssNode = document.createElement("style");
      cssNode.setAttribute("type", "text/css");
      cssNode.innerHTML = `@charset "utf-8";
      #whitesev-datapaging {
        text-align: center;
        display: inline-block;
      }
      /* 第一页 */
      #whitesev-datapaging .pg-first::before {
        content: "\u21E4";
      }
      /* 上一页 */
      #whitesev-datapaging .pg-prev::before {
        content: "\u2190";
      }
      /* 下一页 */
      #whitesev-datapaging .pg-next::before {
        content: "\u2192";
      }
      /* 最后一页 */
      #whitesev-datapaging .pg-last::before {
        content: "\u21E5";
      }
      #whitesev-datapaging .pg-first,
      #whitesev-datapaging .pg-prev,
      #whitesev-datapaging .pg-next,
      #whitesev-datapaging .pg-last {
        font-family: Arial, sans-serif;
        display: inline-block;
        text-align: center;
        color: #333;
        font-size: 22px;
      }
      #whitesev-datapaging a,
      #whitesev-datapaging span {
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
      #whitesev-datapaging a:hover,
      #whitesev-datapaging span:hover {
        border-color: #3897cd;
        color: #3897cd;
        position: relative;
        z-index: 1;
      }
      #whitesev-datapaging a {
        cursor: pointer;
      }
      #whitesev-datapaging a[data-current-page] {
        background-color: #222a35;
        color: #fff;
        border-color: #ebebeb;
        position: relative;
        z-index: 1;
      }
      #whitesev-datapaging a.pg-first[disabled="true"],
      #whitesev-datapaging a.pg-prev[disabled="true"],
      #whitesev-datapaging a.pg-next[disabled="true"],
      #whitesev-datapaging a.pg-last[disabled="true"]{
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
      let dataPagingNode = document.createElement("div");
      dataPagingNode.id = "whitesev-datapaging";
      let firstBtnNode = document.createElement("a"); /* 第一页 */
      let prevBtnNode = document.createElement("a"); /* 上一页 */
      let nextBtnNode = document.createElement("a"); /* 下一页 */
      let lastBtnNode = document.createElement("a"); /* 最后一页 */
      firstBtnNode.className = "pg-first";
      prevBtnNode.className = "pg-prev";
      nextBtnNode.className = "pg-next";
      lastBtnNode.className = "pg-last";
      /* 自动校正超出或小于的当前页码 */
      if (this.config.currentPage < 1) {
        this.config.currentPage = 1;
      } else if (this.config.currentPage > this.config.data.length) {
        this.config.currentPage = this.config.data.length;
      }
      /* 计算总数据量除以显示的数据量 得出分页的数量 */
      this.pageConfig.maxPage = Math.ceil(
        this.config.data.length / this.config.pageCount
      );
      /* 超过1 才开启分页 */
      if (this.pageConfig.maxPage < 2) {
        return dataPagingNode;
      }
      if (this.config.firstBtn.enable) {
        this.setFirstBtnClickEvent(firstBtnNode, dataPagingNode);
        dataPagingNode.appendChild(firstBtnNode);
      }
      if (this.config.prevBtn.enable) {
        this.setPrevBtnClickEvent(prevBtnNode, dataPagingNode);
        dataPagingNode.appendChild(prevBtnNode);
      }
      let currentPage = this.config.currentPage;
      if (this.config.pageStep > this.pageConfig.maxPage) {
        /* 计算出的分的页数 不超过限制的最大页 */
        for (currentPage; currentPage <= this.pageConfig.maxPage; currentPage++) {
          let pageBtnNode = document.createElement("a");
          pageBtnNode.setAttribute("page-id", currentPage);
          pageBtnNode.innerText = currentPage;
          if (this.config.currentPage === currentPage) {
            pageBtnNode.setAttribute("data-current-page", "");
          }
          this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
          dataPagingNode.appendChild(pageBtnNode);
        }
      } else {
        /* 计算出的分的页数 超过限制的最大页，要添加...省略号代替（pageStep大于） */
        if (currentPage + this.config.pageCount >= this.pageConfig.maxPage) {
          /* 如果 当前页 + 限制的页码 大于等于 最大页，那么 从最后一页倒序着添加 */
          currentPage = this.pageConfig.maxPage;
          let needAppendNodeList = [];
          for (let i = 0; i < this.config.pageStep; i++) {
            let pageBtnNode = document.createElement("a");
            pageBtnNode.setAttribute("page-id", currentPage);
            pageBtnNode.innerText = currentPage;
            if (this.config.currentPage === currentPage) {
              pageBtnNode.setAttribute("data-current-page", "");
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
          for (let i = 0; i < this.config.pageStep; i++) {
            let pageBtnNode = document.createElement("a");
            pageBtnNode.setAttribute("page-id", currentPage);
            pageBtnNode.innerText = currentPage;
            if (this.config.currentPage === currentPage) {
              pageBtnNode.setAttribute("data-current-page", "");
            }
            this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
            dataPagingNode.appendChild(pageBtnNode);
            currentPage++;
          }
        }
      }
  
      if (this.config.nextBtn.enable) {
        this.setNextBtnClickEvent(nextBtnNode, dataPagingNode);
        dataPagingNode.appendChild(nextBtnNode);
      }
      if (this.config.lastBtn.enable) {
        this.setLastBtnClickEvent(lastBtnNode, dataPagingNode);
        dataPagingNode.appendChild(lastBtnNode);
      }
      if (this.config.currentPage === 1) {
        dataPagingNode.querySelector("a.pg-prev").setAttribute("disabled", true);
      } else if (this.config.currentPage === this.pageConfig.maxPage) {
        dataPagingNode.querySelector("a.pg-next").setAttribute("disabled", true);
      }
      this.pageConfig.dataPagingNode = dataPagingNode;
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
        let currentNode = dataPagingNode.querySelector("a[data-current-page]");
        if (parseInt(currentNode.getAttribute("page-id")) === 1) {
          return;
        }
        that.config.firstBtn.callBack();
        let allPageNode = dataPagingNode.querySelectorAll("a[page-id]");
        for (let i = 0; i < that.config.pageStep; i++) {
          let item = allPageNode[i];
          if (i === 0) {
            item.setAttribute("data-current-page", "");
          } else {
            item.removeAttribute("data-current-page");
          }
          item.setAttribute("page-id", i + 1);
          item.innerText = i + 1;
        }
        dataPagingNode.querySelectorAll("a[class][disabled]").forEach((item) => {
          item.removeAttribute("disabled");
        });
        if (dataPagingNode.querySelector("a[page-id='1']")) {
          dataPagingNode
            .querySelector("a.pg-prev")
            .setAttribute("disabled", true);
          dataPagingNode
            .querySelector("a.pg-first")
            .setAttribute("disabled", true);
        }
        that.config.pageChangeCallBack(1);
      };
    };
    /**
     * 设置 上一页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    DataPaging.prototype.setPrevBtnClickEvent = function (
      btnNode,
      dataPagingNode
    ) {
      let that = this;
      btnNode.onclick = function () {
        let currentNode = dataPagingNode.querySelector("a[data-current-page]");
        if (parseInt(currentNode.getAttribute("page-id")) === 1) {
          return;
        }
        that.config.prevBtn.callBack();
        if (currentNode.previousElementSibling.hasAttribute("page-id")) {
          currentNode.previousElementSibling.click();
        } else {
          let allPageNode = dataPagingNode.querySelectorAll("a[page-id]");
          allPageNode.forEach((item, index) => {
            let page = parseInt(item.getAttribute("page-id"));
            page--;
            item.setAttribute("page-id", page);
            item.innerText = page;
          });
          that.config.pageChangeCallBack(that.pageConfig.getCurrentPage());
        }
        dataPagingNode.querySelectorAll("a[class][disabled]").forEach((item) => {
          item.removeAttribute("disabled");
        });
  
        if (dataPagingNode.querySelector("a[page-id='1']")) {
          dataPagingNode
            .querySelector("a.pg-prev")
            .setAttribute("disabled", true);
          dataPagingNode
            .querySelector("a.pg-first")
            .setAttribute("disabled", true);
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
        let currentNode = dataPagingNode.querySelector("a[data-current-page]");
        if (
          parseInt(currentNode.getAttribute("page-id")) ===
          that.pageConfig.maxPage
        ) {
          return;
        }
        that.config.nextBtn.callBack();
        if (currentNode.nextElementSibling.hasAttribute("page-id")) {
          currentNode.nextElementSibling.click();
        } else {
          let allPageNode = dataPagingNode.querySelectorAll("a[page-id]");
          allPageNode.forEach((item, index) => {
            let page = parseInt(item.getAttribute("page-id"));
            page++;
            if (page > that.pageConfig.maxPage) {
              return;
            }
            item.setAttribute("page-id", page);
            item.innerText = page;
          });
          that.config.pageChangeCallBack(that.pageConfig.getCurrentPage());
        }
        dataPagingNode.querySelectorAll("a[class][disabled]").forEach((item) => {
          item.removeAttribute("disabled");
        });
        if (
          dataPagingNode.querySelector(`a[page-id='${that.pageConfig.maxPage}']`)
        ) {
          dataPagingNode
            .querySelector("a.pg-next")
            .setAttribute("disabled", true);
          dataPagingNode
            .querySelector("a.pg-last")
            .setAttribute("disabled", true);
        }
        
      };
    };
    /**
     * 设置 最后一页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    DataPaging.prototype.setLastBtnClickEvent = function (
      btnNode,
      dataPagingNode
    ) {
      let that = this;
      btnNode.onclick = function () {
        let currentNode = dataPagingNode.querySelector("a[data-current-page]");
        if (
          parseInt(currentNode.getAttribute("page-id")) ===
          that.pageConfig.maxPage
        ) {
          return;
        }
        that.config.lastBtn.callBack();
        let allPageNode = dataPagingNode.querySelectorAll("a[page-id]");
        allPageNode = Array.from(allPageNode);
        allPageNode.reverse();
        let pageCount = that.pageConfig.maxPage;
        let index = 0;
        while (true) {
          if (that.pageConfig.maxPage - pageCount >= 3) {
            break;
          }
          let item = allPageNode[index];
          if (index === 0) {
            item.setAttribute("data-current-page", "");
          } else {
            item.removeAttribute("data-current-page");
          }
          item.setAttribute("page-id", pageCount);
          item.innerText = pageCount;
          pageCount--;
          index++;
        }
        dataPagingNode.querySelectorAll("a[class][disabled]").forEach((item) => {
          item.removeAttribute("disabled");
        });
        dataPagingNode.querySelector("a.pg-next").setAttribute("disabled", true);
        dataPagingNode.querySelector("a.pg-last").setAttribute("disabled", true);
        that.config.pageChangeCallBack(that.pageConfig.maxPage);
      };
    };
  
    /**
     * 设置 页 点击事件
     * @param {HTMLElement} btnNode 元素
     * @param {HTMLElement} dataPagingNode 分页元素(主)
     */
    DataPaging.prototype.setPageBtnClickEvent = function (
      btnNode,
      dataPagingNode
    ) {
      let that = this;
      btnNode.onclick = function (event) {
        let eventBtnNode = event.target;
        dataPagingNode.querySelectorAll("a[page-id]").forEach((item) => {
          if (item == eventBtnNode) {
            if (!eventBtnNode.hasAttribute("data-current-page")) {
              eventBtnNode.setAttribute("data-current-page", "");
              that.config.pageChangeCallBack(that.pageConfig.getCurrentPage());
            }
          } else {
            item.removeAttribute("data-current-page");
          }
        });
      };
    };
    /**
     * 把分页添加到某个父元素下
     * @param {HTMLElement} parentNode
     */
    DataPaging.prototype.append = function (parentNode) {
      parentNode.appendChild(this.getDataPagingNode());
    };
  })((DataPaging = Object));
  