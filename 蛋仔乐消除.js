// ==UserScript==
// @name         蛋仔乐消除
// @namespace    https://greasyfork.org/zh-CN/users/521923-whitesevs
// @version      0.1
// @description  自动生成的描述
// @author       WhiteSev
// @match        https://party.163.com/h5/20230120/xxl/player/*
// @require	     https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/462234-message/code/Message.js?version=1164153
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1164713
// @grant        GM_addStyle
// @connect      163.com
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

  let config = {
    score: 1566 /* 分数 */,
    credit: 20 /* 金币 */,
    delaytime: 6000 /* 延时时间 */,
    runCount: 1 /* 执行次数 */,
    shareCount: 5 /* 分享执行次数 */,
    loadingMsg: null,
  };
  /**
   * 游戏开始
   * @param play_key
   * @param score 分数
   * @param credit 赚的金币数
   * @returns
   */
  function gameEnd(play_key) {
    if (play_key == null) {
      console.error("play_key不能为空");
      Qmsg.error("play_key不能为空");
      return;
    }
    let eggkidInfo = window.localStorage.getItem("EggKid_INFO");
    if (!eggkidInfo) {
      console.error("获取蛋仔本地信息失败");
      Qmsg.error("获取蛋仔本地信息失败");
      return;
    }
    eggkidInfo = JSON.parse(eggkidInfo);
    let login_id = eggkidInfo["login_id"];
    let login_token = eggkidInfo["login_token"];
    GM_xmlhttpRequest({
      url: `https://u5game.webapp.163.com/game_end?play_key=${play_key}&score=${config.score}&credit=${config.credit}&login_id=${login_id}&login_token=${login_token}&callback=game_end`,
      method: "get",
      async: false,
      timeout: 5000,
      responseType: "json",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 12; M2012K11C Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.102 MQQBrowser/6.2 TBS/046317 Mobile Safari/537.36 V1_AND_SQ_8.9.25_3640_YYB_D QQ/8.9.25.10005 NetType/WIFI WebP/0.3.0  Edg/110.0.0.0",
      },
      onload: function (response) {
        let result = response.responseText
          .replace("game_end(", "")
          .replace(/\)$/gi, "");
        console.log(result);
      },
      onerror: function (response) {
        console.error("请求失败", response);
        Qmsg.error("请求失败");
      },
      ontimeout: function () {
        console.error("请求超时");
        Qmsg.error("请求超时");
      },
    });
  }
  /**
   * 游戏开始
   * @returns play_key
   */
  function gameStart() {
    return new Promise((resolve) => {
      let eggkidInfo = window.localStorage.getItem("EggKid_INFO");
      if (!eggkidInfo) {
        console.error("获取蛋仔本地信息失败");
        Qmsg.error("获取蛋仔本地信息失败");
        resolve(false);
        return;
      }
      eggkidInfo = JSON.parse(eggkidInfo);
      let login_id = eggkidInfo["login_id"];
      let login_token = eggkidInfo["login_token"];
      GM_xmlhttpRequest({
        url: `https://u5game.webapp.163.com/game_start?login_id=${login_id}&login_token=${login_token}&callback=game_start`,
        method: "get",
        async: false,
        timeout: 5000,
        responseType: "json",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 12; M2012K11C Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.102 MQQBrowser/6.2 TBS/046317 Mobile Safari/537.36 V1_AND_SQ_8.9.25_3640_YYB_D QQ/8.9.25.10005 NetType/WIFI WebP/0.3.0  Edg/110.0.0.0",
        },
        onload: function (response) {
          let result = response.responseText
            .replace("game_start(", "")
            .replace(/\)$/gi, "");
          result = eval(`(${result})`);
          console.log(result);
          let play_key = result["play_key"];
          Qmsg.success(`play_key ===> ${play_key}`);
          resolve(play_key);
        },
        onerror: function (response) {
          console.error("请求失败", response);
          Qmsg.error("请求失败");
          resolve(false);
        },
        ontimeout: function () {
          console.error("请求超时");
          Qmsg.error("请求超时");
          resolve(false);
        },
      });
    });
  }
  /**
   * 游戏分享，用于获取游戏次数
   */
  function gameShare() {
    return new Promise((resolve) => {
      let eggkidInfo = window.localStorage.getItem("EggKid_INFO");
      if (!eggkidInfo) {
        console.error("获取蛋仔本地信息失败");
        Qmsg.error("获取蛋仔本地信息失败");
        resolve(false);
        return;
      }
      eggkidInfo = JSON.parse(eggkidInfo);
      let login_id = eggkidInfo["login_id"];
      let login_token = eggkidInfo["login_token"];
      GM_xmlhttpRequest({
        url: `https://u5game.webapp.163.com/sharing?login_id=${login_id}&login_token=${login_token}&callback=sharing`,
        method: "get",
        async: false,
        timeout: 5000,
        onload: function (response) {
          let result = response.responseText
            .replace(/^sharing\(/gi, "")
            .replace(/\)$/gi, "");
          result = eval(`(${result})`);
          console.log(result);
          let success = result["success"];
          if(success){
            Qmsg.success(`成功分享`);
          }else{
            if(result.hasOwnProperty("msg")){
              Qmsg.error(result["msg"])
            }else{
              Qmsg.error(`分享失败`);
            }
          }
          
          resolve(success);
        },
        onerror: function (response) {
          console.error("请求失败", response);
          Qmsg.error("请求失败");
          resolve(false);
        },
        ontimeout: function () {
          console.error("请求超时");
          Qmsg.error("请求超时");
          resolve(false);
        },
      });
    });
  }
  async function auto() {
    for (let i = 0; i < config.runCount; i++) {
      console.log(`第 ${i + 1} 次执行`);
      Qmsg.success(`第 ${i + 1} 次执行`);
      try {
        let play_key = await gameStart();
        gameEnd(play_key);
        await Utils.sleep(config.delaytime);
      } catch (error) {
        Qmsg.error("执行失败 " + error);
      }
    }
    Qmsg.success("执行完毕");
    config.loadingMsg?.close();
    console.log("执行结束");
  }
  new Utils.GM_Menu(
    {
      run: {
        text: "启动",
        enable: false,
        showText: (_text_, _enable_) => {
          return "⚙ " + _text_;
        },
        callback: () => {
          config.loadingMsg = Qmsg.loading("执行中...");
          config.runCount = prompt("请输入需要执行的次数", 1);
          Qmsg.info("执行次数: " + config.runCount);
          config.delaytime = prompt(
            "请输入每次执行后延时的时间，单位（秒）",
            60
          );
          config.delaytime = parseInt(config.delaytime) * 1000;
          Qmsg.info("延时时间: " + config.delaytime + "秒");
          config.score = prompt("请输入需要获得的分数", 1500);
          Qmsg.info("获得分数: " + config.score);
          config.credit = prompt("请输入每局获取的金币数量", 20);
          Qmsg.info("赚取的金币", config.credit);
          Qmsg.success("开始执行");
          auto();
        },
      },
      share: {
        text: "一键分享",
        enable: false,
        showText: (_text_, _enable_) => {
          return "⚙ " + _text_;
        },
        callback: async () => {
          config.shareCount = parseInt(prompt("请输入需要分享的次数", 5));
          for (let i = 0; i < config.shareCount; i++) {
            Qmsg.info(`第 ${i + 1} 次分享`);
            await gameShare();
            await Utils.sleep(500);
          }
          Qmsg.success("执行完毕");
        },
      },
    },
    false
  );
  // Your code here...
})();
