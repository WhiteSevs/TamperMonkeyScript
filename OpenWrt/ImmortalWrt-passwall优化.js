// ==UserScript==
// @name         ImmortalWrt-passwall优化
// @version      0.4
// @description  openWrt使用luci-theme-argon主题的passwall优化部分设置，添加一键测速和排序，请根据自己的openwrt地址设置本脚本匹配域
// @author       WhiteSevs
// @license      GPL-3.0-only
// @icon         http://192.168.6.1/luci-static/argon/favicon.ico
// @match        *://192.168.6.1/cgi-bin/luci/admin/services/passwall/node_list*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        unsafeWindow
// @run-at       document-start
// @require	     https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/462234-message/code/Message.js?version=1198446
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1213664
// ==/UserScript==

(function () {
  let log = new Utils.Log(GM_info);
  let httpx = new Utils.Httpx(GM_xmlhttpRequest);
  httpx.config({
    onabort: function () {
      Qmsg.error("请求被取消");
    },
    ontimeout: function () {
      Qmsg.error("请求超时");
    },
    onerror: function (response) {
      Qmsg.error("请求异常");
      log.error(["httpx-onerror", response]);
    },
  });
  /* 全局配置 */
  var GLOBAL_CONFIG = {
    /* 命名空间 */
    nameSpace: "GLOBAL_CONFIG",
    /* config数据 */
    data: {
      isTest: false /* 是否进行过一键测速 */,
      isTesting: false /* 是否正在进行一键测速 */,
      testSpeedList: [] /* 进行测速过的列表 */,
    },
  };

  /* 在document-start就插入的CSS */
  var GLOBAL_CSS = {
    /* 命名空间 */
    nameSpace: "GLOBAL_CSS",
    /* CSS数据 */
    data: [
      {
        /* 添加的CSS */
        css: `
        input[value="一键测速"]{
          background-color: #1a1616;
          color: #fff;
        }
        input[value="升序"]{
            background-color: #ff1a1a;
            color: #fff;
        }
        input[value="降序"]{
            background-color: #0022ff;
            color: #fff;
        }
        `,
        /* 该CSS的作用或描述 */
        desc: "一键测速、升序、降序的CSS",
      },
    ],
    /* 延迟添加的CSS元素列表 */
    delayCSSNode: [],
    /* 添加到页面的元素列表 */
    node: [],
    /**
     * 初始化全局CSS
     */
    init() {
      log.info("初始化全局CSS");
      this.data.forEach((item) => {
        this.node = [...this.node, GM_addStyle(item.css)];
        log.info(`添加全局CSS,作用: ${item.desc}`);
      });
      t;
    },
  };
  /* 全局执行函数，存在DOM未加载和加载完毕执行的函数 */
  var GLOBAL_RUN = {
    /* 命名空间 */
    nameSpace: "GLOBAL_RUN",
    /**
     * 初始化
     * @param {Array} domStartCallBack dom未加载回调
     * @param {Array} domReadyCallBack dom加载完毕回调
     */
    init(domStartCallBack = [], domReadyCallBack = []) {
      /* 首先加载全局CSS */
      GLOBAL_CSS.init();
      this.exec(domStartCallBack);
      /* 然后执行DOM加载完毕的函数 */
      $(() => {
        log.success("DOM加载完毕，执行回调");
        this.exec(domReadyCallBack);
      });
    },
    /**
     * 调用函数
     * @param {Function} callBackList 需要执行的函数数组
     */
    exec(callBackList = []) {
      /* 如果该函数url匹配成功执行，回调加载这个函数的CSS */
      var addGlobalCss = function () {
        if (typeof arguments[0] === "string" && arguments[0] != "") {
          let addCSSNode = GM_addStyle(arguments[0]);
          GLOBAL_CSS.delayCSSNode = [...GLOBAL_CSS.delayCSSNode, addCSSNode];
          return addCSSNode;
        }
      };
      callBackList.forEach((item) => {
        try {
          item(addGlobalCss);
        } catch (error) {
          log.error(error);
        }
      });
    },
  };

  /* 桌面端执行，设置的函数开头必须为domStart_或者domReady_，每个函数都会传入一个添加CSS的函数，调用该函数添加CSS，不使用GM_addStyle了 */
  var deskTop = {
    /* 命名空间 */
    nameSpace: "deskTop",
    /* 配置 */
    config: {},
    init() {
      /* 不被执行的keyName */
      var notExecFunctionNameList = ["config", "init"];
      /* dom start执行的函数 */
      var needExecFunctionNameListByDomStart = [];
      /* dom ready执行的函数 */
      var needExecFunctionNameListByDOMReady = [];
      Object.keys(this).forEach((functionName) => {
        if (
          notExecFunctionNameList.indexOf(functionName) != -1 ||
          typeof this[functionName] != "function"
        ) {
          return;
        }
        if (functionName.toLowerCase().startsWith("domStart_")) {
          needExecFunctionNameListByDomStart = [
            ...needExecFunctionNameListByDomStart,
            functionName,
          ];
        } else if (functionName.toLowerCase().startsWith("domReady_")) {
          needExecFunctionNameListByDomStart = [
            ...needExecFunctionNameListByDomStart,
            functionName,
          ];
        } else {
          log.error(`不被执行的函数名字 ${functionName}`);
        }
      });
      GLOBAL_RUN.init(
        needExecFunctionNameListByDomStart,
        needExecFunctionNameListByDOMReady
      );
    },
    /* 通用接口 */
    api: {
      /**
       * 根据id请求测速
       * < 500 green
       * 500 ~ 1000 #ffc20f
       * 1000 ~ 2000 #fb9a05
       * >2000 red
       * @param {String} id
       * @returns undefined | String
       */
      async testPanelPointSpeed(id) {
        if (id == null) {
          log.error("id不能为空");
          return;
        }
        let getResp = await httpx.get({
          url: `${
            window.location.origin
          }/cgi-bin/luci/admin/services/passwall/urltest_node?id=${id}&_=${Math.random()}`,
          responseType: "json",
        });
        if (!getResp.status) {
          return;
        }
        let respData = getResp.data;
        try {
          let resultJSON = JSON.parse(respData.responseText);
          return resultJSON["use_time"]; /* 测速时间单位 ms */
        } catch (error) {
          log.error(error);
        }
      },
    },
    /* 初始化-Qmsg配置 */
    domReady_initQmsgConfig() {
      Qmsg.config({
        showClose: false,
        timeout: 2500,
        autoClose: true,
        html: true,
        maxNums: 2,
      });
    },
    /**
     * 节点列表table中没有行首，自己加一个
     */
    domReady_insertTableView() {
      let tableOneLineList = [
        "来自",
        "节点名称",
        "ping",
        "延迟",
        "排序",
        "操作",
      ];
      $("tr.cbi-section-table-descr th").each((index, item) => {
        $(item).text(tableOneLineList[index]);
      });
    },
    /**
     * 在页面中插入按钮
     */
    domReady_insertViewButton() {
      let that = this;
      let obj = $("fieldset[id*='cbi-passwall-'] .cbi-value .cbi-value-field");
      let nodeCountBtn = obj[obj.length - 1].querySelector("#div_node_count");
      if (!nodeCountBtn) {
        log.error("未找到按钮");
        return;
      }
      nodeCountBtn = $(nodeCountBtn);
      let 一键测速 = $(
        `<input class="btn cbi-button" type="button" value="一键测速" size="0" testing="false">`
      );
      let 升序 = $(
        `<input class="btn cbi-button" type="button" value="升序" size="0">`
      );
      let 降序 = $(
        `<input class="btn cbi-button" type="button" value="降序" size="0">`
      );
      一键测速.on("click", async function () {
        if ($(this).val() === "点击停止") {
          Qmsg.info("正在停止中...");
          GLOBAL_CONFIG.data.isTesting = false;
          return;
        }
        var loadingMsg = Qmsg.loading("测速中...", {
          autoClose: false,
        });
        $(this).attr("testing", "true");
        $(this).val(`点击停止`);
        GLOBAL_CONFIG.data.isTesting = true;
        GLOBAL_CONFIG.data.isTest = false;
        GLOBAL_CONFIG.data.testSpeedList = [];
        let panelPoint = $(".cbi-section-table tr[id]");
        if (panelPoint.length === 0) {
          Qmsg.error("获取节点列表数量：0");
          GLOBAL_CONFIG.data.isTesting = false;
          $(this).val("一键测速");
          loadingMsg.close();

          return;
        }
        Qmsg.success("获取节点列表数量：" + panelPoint.length);
        panelPoint = Array.from(panelPoint);
        for (let index = 0; index < panelPoint.length; index++) {
          if (!GLOBAL_CONFIG.data.isTesting) {
            GLOBAL_CONFIG.data.isTesting = false;
            loadingMsg.close();
            $(this).val(`一键测速`);
            Qmsg.success("成功停止");
            return;
          }
          Qmsg.info(`正在测速第 ${index + 1} 个节点`);
          let item = panelPoint[index];
          let id = $(item).attr("id");
          if (id == null) {
            Qmsg.error("获取 id 失败");
            return;
          }
          id = id.replace("cbi-passwall-", "");
          let use_time = await that.api.testPanelPointSpeed(id);
          if (use_time) {
            GLOBAL_CONFIG.data.testSpeedList = [
              ...GLOBAL_CONFIG.data.testSpeedList,
              {
                id: id,
                use_time: use_time,
              },
            ];
            $(item).attr("test-speed", use_time);
            let fontColor = "green";
            if (use_time > 0 && use_time <= 500) {
              fontColor = "green";
            } else if (use_time > 500 && use_time <= 1000) {
              fontColor = "#ffc20f";
            } else if (use_time > 1000 && use_time <= 2000) {
              fontColor = "#fb9a05";
            } else {
              fontColor = "red";
            }
            $(item)
              .find("div[id*='url_test'][data-index]")
              .html(
                `<font style="color: ${fontColor}" class="gm_use_time" data-time="${use_time}">${use_time} ms</font>`
              );
          } else {
            $(item)
              .find("div[id*='url_test'][data-index]")
              .html(
                `<font style="color: red" class="gm_use_time" data-time="9999999999">失败</font>`
              );
          }
          await Utils.sleep(700);
        }
        loadingMsg.close();
        Qmsg.success("节点全部测试完毕!");
        GLOBAL_CONFIG.data.isTest = true;
        GLOBAL_CONFIG.data.isTesting = false;
        $(this).val("一键测速");
      });
      升序.on("click", function () {
        if (!GLOBAL_CONFIG.data.isTest) {
          Qmsg.error("请先点击 一键测速");
          return;
        }
        let panelPoint = $(".cbi-section-table tr[id]");
        if (panelPoint.length === 0) {
          Qmsg.error("获取节点列表数量：0");
          return;
        }
        var loadingMsg = Qmsg.loading("排序中...", {
          autoClose: false,
        });
        Utils.sortListByProperty(
          () => {
            return $(".cbi-section-table tr[id]");
          },
          (item) => {
            return parseInt(
              $(item.querySelector(".gm_use_time")).attr("data-time")
            );
          },
          false
        );
        loadingMsg.close();
        Qmsg.success("排序完毕");
      });
      降序.on("click", function () {
        if (!GLOBAL_CONFIG.data.isTest) {
          Qmsg.error("请先点击 一键测速");
          return;
        }
        let panelPoint = $(".cbi-section-table tr[id]");
        if (panelPoint.length === 0) {
          Qmsg.error("获取节点列表数量：0");
          return;
        }
        var loadingMsg = Qmsg.loading("排序中...", {
          autoClose: false,
        });
        Utils.sortListByProperty(
          () => {
            return $(".cbi-section-table tr[id]");
          },
          (item) => {
            return parseInt(
              $(item.querySelector(".gm_use_time")).attr("data-time")
            );
          },
          true
        );
        loadingMsg.close();
        Qmsg.success("排序完毕");
      });
      nodeCountBtn.before(一键测速);
      nodeCountBtn.before(升序);
      nodeCountBtn.before(降序);
    },
  };

  /* 移动端执行，设置的函数开头必须为domStart_或者domReady_ */
  var mobile = {
    /* 命名空间 */
    nameSpace: "mobile",
    config: {},
    init() {
      /* 不被执行的keyName */
      var notExecFunctionNameList = ["config", "init"];
      /* dom start执行的函数 */
      var needExecFunctionNameListByDomStart = [];
      /* dom ready执行的函数 */
      var needExecFunctionNameListByDOMReady = [];
      Object.keys(this).forEach((functionName) => {
        if (
          notExecFunctionNameList.indexOf(functionName) != -1 ||
          typeof this[functionName] != "function"
        ) {
          return;
        }
        if (functionName.toLowerCase().startsWith("domStart_")) {
          needExecFunctionNameListByDomStart = [
            ...needExecFunctionNameListByDomStart,
            functionName,
          ];
        } else if (functionName.toLowerCase().startsWith("domReady_")) {
          needExecFunctionNameListByDomStart = [
            ...needExecFunctionNameListByDomStart,
            functionName,
          ];
        } else {
          log.error(`不被执行的函数名字 ${functionName}`);
        }
      });
      GLOBAL_RUN.init(
        needExecFunctionNameListByDomStart,
        needExecFunctionNameListByDOMReady
      );
    },
  };
  /* 执行 桌面端初始化 */
  deskTop.init();
  /* 执行 移动端初始化 */
  mobile.init();
})();
