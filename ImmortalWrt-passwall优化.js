// ==UserScript==
// @name         ImmortalWrt-passwall优化
// @namespace    openWrt使用luci-theme-argon主题的passwall优化部分设置，添加一键测速和排序，请根据自己的openwrt地址设置本脚本匹配域
// @version      0.1
// @description  自动生成的描述
// @author       WhiteSev
// @icon         http://192.168.6.1/luci-static/argon/favicon.ico
// @match        *://192.168.6.1/cgi-bin/luci/admin/services/passwall/node_list*
// @require	     https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      // @require      https://greasyfork.org/scripts/462234-message/code/Message.js?version=1164153
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1160801
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";
  Qmsg.config({
    showClose: false,
    timeout: 2500,
    autoClose:true,
    html: true,
    maxNums: 2
  })
  var config = {
    isTest: false /* 是否进行过一键测速 */,
    isTesting: false /* 是否正在进行一键测速 */,
    testSpeedList: [] /* 进行测速过的列表 */,
  };
  // Your code here...
  /**
   * 根据id请求测速
   * < 500 green
   * 500 ~ 1000 #ffc20f
   * 1000 ~ 2000 #fb9a05
   * >2000 red
   * @param {String} id
   * @returns
   */
  function testPanelPointSpeed(id) {
    return new Promise((resolve) => {
      if (id == null) {
        console.error("id不能为空");
        resolve(false);
        return;
      }
      GM_xmlhttpRequest({
        url: `${
          window.location.origin
        }/cgi-bin/luci/admin/services/passwall/urltest_node?id=${id}&_=${Math.random()}`,
        async: false,
        timeout: 5000,
        responseType: "json",
        method: "get",
        onload: function (response) {
          try {
            let resultJSON = JSON.parse(response.responseText);
            let use_time = resultJSON["use_time"]; /* 测速时间单位 ms */
            resolve(use_time);
          } catch (error) {
            console.error(error);
            resolve(false);
          }
        },
        ontimeout: function () {
          Qmsg.error("请求超时");
          resolve(false);
        },
        onerror: function (response) {
          console.error(response);
          Qmsg.error("请求异常");
          resolve(false);
        },
      });
    });
  }

  /**
   * 在页面中插入按钮
   */
  function insertViewButton() {
    let css = `
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
    `;
    GM_addStyle(css);
    let obj = $("fieldset[id*='cbi-passwall-'] .cbi-value .cbi-value-field");
    let nodeCountBtn = obj[obj.length - 1].querySelector("#div_node_count");
    if (!nodeCountBtn) {
      console.error("未找到按钮");
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
        config.isTesting = false;
        return;
      }
      var loadingMsg = Qmsg.loading("测速中...", {
        autoClose: false,
      });
      $(this).attr("testing", "true");
      $(this).val(`点击停止`);
      config.isTesting = true;
      config.isTest = false;
      config.testSpeedList = [];
      let panelPoint = $(".cbi-section-table tr[id]");
      if (panelPoint.length === 0) {
        Qmsg.error("获取节点列表数量：0");
        config.isTesting = false;
        $(this).val("一键测速");
        loadingMsg.close();
        
        return;
      }
      Qmsg.success("获取节点列表数量：" + panelPoint.length);
      panelPoint = Array.from(panelPoint);
      for (let index = 0; index < panelPoint.length; index++) {
        if (!config.isTesting) {
          config.isTesting = false;
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
        let use_time = await testPanelPointSpeed(id);
        if (use_time) {
          config.testSpeedList = [
            ...config.testSpeedList,
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
      config.isTest = true;
      config.isTesting = false;
      $(this).val("一键测速");
    });
    function 排序(nodeListCallBack, valueCallBack, reverse = false) {
      let nodeList = nodeListCallBack();
      let nodeListLength = nodeList.length;
      for (var i = 0; i < nodeListLength - 1; i++) {
        for (var j = 0; j < nodeListLength - 1 - i; j++) {
          let beforeNode = nodeList[j];
          let afterNode = nodeList[j + 1];
          let beforeValue = valueCallBack(beforeNode);
          let afterValue = valueCallBack(afterNode);
          if (
            (reverse == true && beforeValue < afterValue) ||
            (reverse == false && beforeValue > afterValue)
          ) {
            /* 升序/降序 */
            //相邻元素两两对比
            let temp = beforeNode.nextElementSibling;
            afterNode.after(beforeNode);
            if(temp == null){
              /* 如果为空，那么是最后一个元素，使用append */
              temp.parentNode.appendChild(afterNode);
            }else{
              /* 不为空，使用before */
              temp.before(afterNode);
            }
            nodeList = nodeListCallBack();
          }
        }
      }
    }
    升序.on("click", function () {
      if (!config.isTest) {
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
      排序(
        ()=>{return $(".cbi-section-table tr[id]")},
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
      if (!config.isTest) {
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
      排序(
        ()=>{return $(".cbi-section-table tr[id]")},
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
  }

  /**
   * 节点列表table中没有行首，自己加一个
   */
  function insertTableView() {
    let tableOneLineList = ["来自", "节点名称", "ping", "延迟", "排序", "操作"];
    $("tr.cbi-section-table-descr th").each((index, item) => {
      $(item).text(tableOneLineList[index]);
    });
  }
  unsafeWindow.Qmsg = Qmsg;
  $(function () {
    insertViewButton();
    insertTableView();
  });
})();
