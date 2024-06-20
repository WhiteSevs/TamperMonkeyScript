// ==UserScript==
// @name         蛋仔乐消除
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @icon         https://favicon.yandex.net/favicon/v2/https://party.163.com/h5/20230120/xxl/player?size=32
// @version      2024.6.20
// @description  一键完成赚金币任务和分享获取门票，按钮在油猴菜单中
// @author       WhiteSev
// @match        https://party.163.com/h5/20230120/xxl/player/*
// @require      https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.6.0/jquery.min.js
// @require      https://update.greasyfork.org/scripts/462234/1252081/Message.js
// @require      https://update.greasyfork.org/scripts/455186/1279009/WhiteSevsUtils.js
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
	if (typeof unsafeWindow === "undefined") {
		if (
			typeof globalThis.unsafeWindow !== "undefined" &&
			globalThis.unsafeWindow != null
		) {
			var unsafeWindow = globalThis.unsafeWindow;
		} else {
			var unsafeWindow = globalThis || window || self;
		}
	}
  const utils = Utils.noConflict();
  let config = {
    score: 1566 /* 分数 */,
    scoreMax: 1600 /* 设置随机分数-最高 */,
    scoreMin: 1400 /* 设置随机分数-最低 */,
    credit: 20 /* 金币 */,
    delaytime: 6000 /* 延时时间 */,
    delaytimeMax: 6000,
    delaytimeMin: 4000,
    runCount: 5 /* 执行次数 */,
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
          if (success) {
            Qmsg.success(`成功分享`);
          } else {
            if (result.hasOwnProperty("msg")) {
              Qmsg.error(result["msg"]);
            } else {
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
  /**
   * 获取弹出内容
   * @param {number} runCount
   * @returns
   */
  function getQmsgLoadingText(runCount = 1) {
    return `
    <div style="text-align: left;">
      <div style="margin-bottom: 4px;">当前运行: <i style="color: red">${runCount}次</i></div>
      <div style="margin-bottom: 4px;">延时时间: <i style="color: red">${
        config.delaytime / 1000
      }秒</i></div>
      <div style="margin-bottom: 4px;">每局分数: <i style="color: red">${
        config.score
      }</i></div>
      <div style="margin-bottom: 4px;">每局金币: <i style="color: red">${
        config.credit
      }个</div>
      <div><i style="color: green">执行中...</div>
    </div>
  `;
  }
  /**
   * 设置随机值
   */
  function setRandValue() {
    config.delaytime = utils.getRandomValue(
      config.delaytimeMin,
      config.delaytimeMax
    );
    config.score = utils.getRandomValue(config.scoreMin, config.scoreMax);
  }
  async function auto() {
    config.loadingMsg = Qmsg.loading(getQmsgLoadingText(1), {
      html: true,
      autoClose: false,
    });
    for (let i = 0; i < config.runCount; i++) {
      console.log(`第 ${i + 1} 次执行`);
      Qmsg.success(`第 ${i + 1} 次执行`);
      try {
        setRandValue();
        config.loadingMsg.setHTML(getQmsgLoadingText(i + 1));
        let play_key = await gameStart();
        gameEnd(play_key);
        await utils.sleep(config.delaytime);
      } catch (error) {
        Qmsg.error("执行失败 " + error);
      }
    }
    Qmsg.success("执行完毕");
    config.loadingMsg?.close();
    console.log("执行结束");
  }
  new utils.GM_Menu(
    {
      run: {
        text: "启动",
        enable: false,
        showText: (_text_, _enable_) => {
          return "⚙ " + _text_;
        },
        callback: () => {
          let inputRunCount = prompt("请输入需要执行的次数", 5);
          config.runCount = isNaN(inputRunCount)
            ? config.runCount
            : parseInt(inputRunCount);

          let inputDelaytime = prompt(
            "请输入每次执行后延时的时间区间，单位（秒）",
            "40-60"
          );
          inputDelaytime = inputDelaytime.split("-");
          config.delaytimeMin = parseInt(inputDelaytime[0]) * 1000;
          config.delaytimeMax = parseInt(inputDelaytime[1]) * 1000;

          let inputScore = prompt(
            "请输入需要获得的分数区间",
            `${config.scoreMin}-${config.scoreMax}`
          );
          inputScore = inputScore.split("-");
          config.scoreMin = parseInt(inputScore[0]);
          config.scoreMax = parseInt(inputScore[1]);
          setRandValue();

          let inputCredit = prompt("请输入每局获取的金币数量", 20);
          config.credit = isNaN(inputCredit)
            ? config.credit
            : parseInt(inputCredit);

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
            await utils.sleep(500);
          }
          Qmsg.success("执行完毕");
        },
      },
    },
    false,
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand
  );
  Qmsg.config({
    position: "bottom",
    timeout: 3000,
    showReverse: true,
  });
})();
