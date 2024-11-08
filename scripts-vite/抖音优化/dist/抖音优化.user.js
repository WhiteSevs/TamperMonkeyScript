// ==UserScript==
// @name         抖音优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.11.8
// @author       WhiteSevs
// @description  视频过滤，包括广告、直播或自定义规则，伪装登录、屏蔽登录弹窗、自定义清晰度选择、未登录解锁画质选择、禁止自动播放、自动进入全屏、双击进入全屏、屏蔽弹幕和礼物特效、手机模式、修复进度条拖拽、自定义视频和评论区背景色等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAF19JREFUeF7tnQl8U1X2x38vabqlLWOFrpStUMrWsrdUEARkEREQCoiAghswHQdQEFREGXfhD24MjOiMIqKD4IyICCObFCgt1JaC0ELpmq0L3ZLuyft/bkpL8pI07yUvaVre/Xz6KTT3nnvOud93381dzqXAU+riGzJarMMoGogGqD4A3RXAPQC8eKribhSjBVBJA0UUkAfgGgXq90YRzpZUybL4cAhlj5BAn9DxoOkFAGYB8LdHllCWsweuAfgvDWpvkUaWzrn07QI2ARDkExpPg14FGqNsrVgox58HaFCHAd2HRRrFEa5SOQEQ7B08VEdR7wCYxLUiIb8TPEDjB0qke1WpVv7BtjbWAARJQ9bQwPtsBQv52tID9CqVRrGNjQZsAKACpSG7ATzORqCQxzU8QIHerdQoFlvTplUAuvp19W/Q0gcAeqw1QcLnrugB+qRELJ5dWFl4y5J2FgFoanztYYAa6YqmCTqx9QCdLBGLp1qCwCIAgdLgEwA1jm01Qj5X9gB1SqWRPQCAZmppFoAgafBXNKhFrmySoBtnD+xRaeQLrQIQKA1eCVBbOYsXCri8ByhgrVIj/8BQUaMeIMgnqD9Ni664vCWCgjZ7QETTwxTVitRmAUYABHqHHACln9YVUsf1wFGVRj7ZBIAAafBkCtQvHddu85aJ40bYbbL2bIrdMpwpgKKouUq1bB+ps6UHCJCG/kyBnupMRVyhLj/VZbvUqN/5FWpfa2cTpBTOqdTyuBYAAqSh0RToNLs80U4L2wtAw76DqElY3/6sp6gJKrXsuL4HCJSGvAvgpfZnhf0a2wtA45GTqF6cYL8izpfwuUojf7oZgKsAIp2vQ9vXyARg2NVsTkr1u5aPtJWvmpQ5W1vBSU4bZL6l0sjvpTr7hkaIdXRmGyjgElUyARh+LRvfDBvOWrfClEvotGQTfChRS5knVVdxpNri9Dtr2Y7OqBNhDBUkDX2SBv1PR1fmqvKZAIy4lo09HAAgdmWMegwD1WT3VlNKKM7CfnWxq5rcoheZGCJLvR8CeN7ltXWQgkwARl7LxtccAUhauh4xKXdeHa+U3sQXlQoHacyr2D0EALKN6K7d4cMEIObaTeweNoyTl7P2/4I+r3/RUmZzWT62lBdwktE2malkKkAaco0C+raNAm1fKxOA2Myb+GooNwCIFckPLMaIklq9QadqyjFf2S5m1OWkByCjFbJ9+65MTABGZd7ElzYAcGnHNxj06X/0PizWNiAqP7k9+LOGANAIQNwetHWEjnwBQHS7GLcAQ6uIO4EJsjT8Ua9xhMq8yiQAmGwS4LUGFxfGBCAuMwf/GjrUJq1vHDyGLuu3w48S441budhRIbNJjjMLCQAw1gLuy8rBP4fYBgBpuLPLNmDUmUxcqKvCdPklZ7alTXUJADAAGJ2Vgy/sAMDwVRCvvIzEGteeERQAYAAwJisHn9sJQPOr4LCmFCuLr9v0ZDqrkAAAA4D7s3Kxa8gQu/2f/vFX6LLjAN4szcUBF54VFABgADD2ei4+G2w/AISggp9PomrtVswtSEeJtsFuqBwhQADAgQCQBqu/no+f5iZgxfWLjmg/u2UKADAAGHc9D/8YPNhuxxoJKK/CW7OfxsfnE/mVy4M0AQAGAA9cz8NOvgEgDUXTmLNtO85s/gR0RSUPTcePCAEABgDjb+RhRzTPPYBBWy0+cRKnjv+G+m8OgFa1/ZKxAAADgAk38vB3BwJAWFiReAb/69UV2sRkNJ5OQsOPR0GXts0GEgEABgATb+Rje3Q0P/1rK1I+/y0R2yN6oMpXqs/VeDYFdKECOpkCdHEp6JJS6IpvwdFbzgUAGAA8mJ2PT6McDwBp9CtZ2fiopAgnos1vx9TMWiIA4OhHkbkY5EwAmm376XwK9rhRuBgZbmSuAICjWx8AE4BJ2fn4xEk9ANO8vYnncBxapPcIQ/k9fhAAaAMAJmcX4OOoKCfUbLkKlaoY57NvomrLl0g5ew5FjQ0o0tajSNv0m88kjAEYY4ApNwvw0aC2BaC5gS8Pj8eAOuMQDsE5Z/hsfwgAMACYerMAHwoA8AqZSwtjjgEeulmAbQIALt1mvCpnCkAhtg0axGsdtgoTXgG2eo5DOSYA03IKsXUgewAq8mTo1D2UQ43sswoAsPeVzTmZADycU4j/4wDA5S/2oTpXhpGbVtqsg6WCAgC8u9RUIBOA6TkybBk4kHXNBIABW/chuYsX7n1+IXrPfJB1WWsZBQCseYiHz5kAPJIjw2YbACCqqGktMgb3xJCPNsDLv5Pd2gkAMFxIBQdCPKgfRIFdQJGfoC76f8PDHaiuAa2pBq2uBtQaNBw7zWoenQnAjFwZPhjAvQcwVPWGWIvioX3Q7Zm56DrK9i3mAgDkyFLcCLiNHw23cXH6xmeb2E6jOgKAVSXXscm/FzwoEdI7e0E8JQ7D1i1jq3pLvrsWAFG3UEgemwXJzKkQ9erO2XGkgK0AzMyV4/0BA1jX2TwGMCwwW3EZJEJIQqeueMW/Sf8ckRaKAd3h98AIRC6cBYmXp9U67joARJG94U4a/rFZoDr5WXVQaxlsBWBWrhzv8QQA0a+HxFMPwuO+gS3qVtJa3PDzQF1UOAKmjUPv6RPMmnLXAEBJveHx+ov6xodEwrnhO5eUIbi0DKHqanTT0ejr44OeL3yEvIIClOkaUU1rUa3T4d0ycu+ScWK+Ah7Nk+Pd/vz0AIY1TfS+B3N9AjBd2tlEBx1o1NA0akGjjiI/FBrETT8dfi1A1LMbPLe8Drf72Eeld6+tw8jLWZgAEaYOGgB/f9PT7edHxmNkjfWFFCYAs/PkeMcBADS3+jAPX8z1DUC8TwC8DOIKsaW+Qy0GiWOGwvubv4PyadoW1VoKkasQU6BErMQdU4YPgZdX67fRHY+NxwMa7gDMyVPg7f79ralzZ6B2ex7A3BigNSG9JF76HmGStz/6uXuzrq/DACB5ZDK8Ptti1XC/SjWeysrF8rFjrOY1zHBoVDweUnMHID5fgbf6OR4AQ10Dxe6I8vBBlLsU0eS3hw/I38ylDgGA53sb4P7kPKsNOj31Cp4L7YqIXj2s5mVm2B8Xj0er2gcA5ozzpkS4Vyxp+eksavr3dp5jDjh9P4DXzs2QzJzSaoP2y87HMzX1eDjG9kDO394Xj3mV3AGYm6/Am07uATjTzWMBpwLgvmQ+PN81jappaM/ylAwsj42Bp6eHXWbaCsC8fCX+1o/9hFNr8wB2GeCkwk4DgHzH9znVFETJUlqeeBGrJk/kxXRbAZhfoMSmSAEAXhrBUIjPyQMQ9YuwKPe53T/ghWVLeavXVgAeK1DiDQEA3tpBL8jzg41wXxxvUeizu77Di3/lPlfempa2ArCgQInXBQD4A0Aydwa8Pn7LosBlPx3H6nmz+avwtiTbAVDh9Uj2gdOFMUArTUf5+kB6aA9EfY1PvDQXWZ5yGavGcft+z5YUWwF4vFCFjX0FANj6udV8Hi+ugMeaFWbzRJ1Pw7f33w83NztjVNbWAeVVQFkV0NAIRPYA3CWwFYCFhSq8JgBgf/uTp548/aQXYCZdbgH+cUuN8WP019ZwT9dy8cdn38LvdDpCa+6EaW8WVCemIBPR6MUIy2NuFo25FrCosAgb+rIPnSy8Aiw0n+db6+H+tPkLxxd8/zNef4L7ZeSl+/8HzdbdCKtoCsrMNbEBYHFhEV4VAODqWtP8Pkk/g6z0MVOPU0n4NjbW7AqexVq1OmQl/A19Eu2LwM0GgCdkRXglQugB7CLAbcIY/SqfufT++QzMHH8/e/nZhchZ8gp6lNWwL2MhpwCAqWMcMhNoqfufkXIJH4wby74hswshm78GIbWm73mmkNS6Kn1AxtQ6Ncp1DSjTNqJc14ieEk/0dPPS//7czC0ezDHAk7JivBxhecKKWa8wBjDTnD6//dfsV79d1wtw/2CWJ2+ra5E/bgnCzAzyDKskjb67SomkWtsibzEBWCIrxnoBAPYPKTMnGf0TAJgpXF6Ew33Yv1szlr6CgSmtx9ndVl6A98rybVfWTICIpfJirOsj9AA2O1WycDa8trxhUn5ZRhZWx8awkluRdhV+iza2mndYwQXIG+tYyWstE7MHeEpejJcEAGz3q9cX2yCZZrqit09WiuiI3qwEX0zYhKGnLN/pO7QgBYpGfiJlMAF4Wl6CtX36sNKTZBLGAAxXSY9+B3G08a5art3/leFz0d/Cw9285551C1nJKADA85Ux5r7/L0+9glVjRrNqs8zTyYhYsdls3rdu5eGTikJWcthmYgLwjKIEa3oLPQBb/5nk8716GhRjm/aeHAVGDGS30fL7v7yG2SevmchNq1NjuuISGml+rzhiAvCsogQvCgDY3P7wk6UDjAWeQ0WV6NOT3RGvg8texsNnbpgo8FxRJn7UlNiumIWSTACeU5Tihd7sxirCGMCMU81dx36mRocune9l1XhHn3oJDybnGOW92VCD+wpTWZXnmomp7zJlKVaHCwBw9WNLfnMA/OHhCzc3N1YyTy56EWPTjL/bkyef9AB8J3Lc3DftmJHY5cpSrBIAsN3VTACkmmr8HsA+hs7/lqzFxAu5Rgq8VpqDzyrltitloSQ5ei79wfji9BXKW1gZbn4Dizkx5zduw8gDZ40+4vubCu+GGwjkfS2ACUCwshinwtnPrKUc+hXD1/3DyOZ5yiv4raacdz+Ym7TiCsCJmcsxLrtUAKDZA74ZJ0EF3DkBG5mdjx85xt49FjkF4yV3joc7agDo+c4rcF/6mFHjPS8vQQKHiaCk4XMQUycykjFNfglkcao9JN57AO+9O/QRPZrTkMyb+I7jZcy7Jy3GQsWdTR/rSrPxZaWSV3+S+AM+p/+rDzVjmF7OLsSTUezDxGX3fwS9xMbBHkYXpiK7wf7la14NtiCMdwA8N6yGe8Kd/f3heXIc5nDcmuh5YOeXGLJ1vz64AknkXP+H5fxOAEkWPAqvrZtM3PJOZi5mD2V3bVz66fOIWmF6wHVgfjJKXfSaOKbBvAPAdGyXkjKc6d6LM8xfT3kCj8uaniJHfAvw3rMdbhNNN6Z8kpmHSUPZ3Rl0eNM2TNlnPAAk+oblnuV9woqzA1kW4B0A8ZBBkP6yt6V6j7p6ZPjfCY/CUi+kpaajZv46xHr4oqCxDiMLLrAtajWfJ4lGsvxJs/m+zCrAqCHs9izsm5uAOVeLjOSotPUYnJ9iVQdXycA7AMQw7+93wW1MbIuNp9QNCA4M4GzzD39+FQ+dugZ3SoSxhb8jq6GaswxmAfHwaP1uZXMpLCkVxyaYj9djLv+h4bPwUJ1xSJvk2krMUGTYraezBDgEADKyJiPs5vThlWxMHTncJpu+W7kRsUd+xy+aW9h4y3iGkKtAMuDzvXTCYrFlv57F6hnTWIk9tWsvYrbt14eCM0z71EV43sUvjDbU1yEAUMEB8Ek82BL65dmUDLw4jsNGUEYT/Oulv6HfgTN6AMiikC3JbdI4eO/+xGJRt0I5jnh3QlhYV1biD49fhCnFpmvWm8vysaW8gJUMV8jkEACIYWSETQaEJI1Pv4odcTYeArntpezMG8h4Yj2WXTYddLXmSFFYCCTzZlo8odRc9pnTF7BmCrs4v1eOn0FAwmZ0FptGNBtTmIob7eQrILHdYQC4jR4J7/1f6P3bqaIKR7074Z4/2R8/9+W3P8Hu3Ew07DsINFi+kVs8MBKSeTP0jU918m31YXsoKxfbOFwZ/+ucBEzINB78kQou1akxWZ7uCg82ax0cBgDRwHBS6L30LMyKY7cn0Jr2Pfd+CxJkqvG3c6DLKpp+yisgCugMqkcYyFMvCmO//pAlNQ0zZ0mH0nwZqqb+Gd1FpkGc3i7Lw8c8z1dY84W9nzsUAMmch+H16bt6Haf9fgVbR7PbFWTNqAvJFzEnKQnuTy2wlrXVzwedPo/9U1qPV8QUkLj8NdyXaLphheSbJEtHRr1tYxS7DLGjsEMB0PcC+z+H2+gY/WvgkMQbAV1MI2Xaon9VZRWe27ELydMfBIktzCk1NmJRSgY2TBzPqVjZzXyUzlqFcJ3piWYy90/WANpbcjgA5Hu39/efg/LyxKoLlznH+7Pm0P8cPIyk2loc6x6MigGtnzugi0oQn5WL+d26Iaof+zMKzTokTVqKGIX5J3xNSTa+ruJ3vcKa7Xx87nAAiJLuyxbD84216FGgwMGe4fDwsC8CmCXDz6VdwpnyclRSFKpEFKokboCORoSmBj0oCpEBXRAVxf4uAMN6kl54GzFH08xW3R4Hf82GOAUAUhmJCkoGbq+lXsVCW+MC8IG8DTKyfzqOe9Z9inso88Es2uvTT1zhNABIZT6//4rQ+kZ87eePMA6jdBvajNciabHzEa3Rdbin3+kAkAp9s87ikQuXseURdlOuvLakDcLOLFiNuAzLS9Ht+elvEwBIpdKj/8Y7VbWYO5n9wosNbWd3kbOPJmDUddMJn2bB/9GUYLkDNqvarTgHAU59BRjqFfTdZ9gV1g3DbRyUcbDRpqznpj2L2HzL+xBzGmoRV3jRJtmuVKjNACBOGPb+RvxzzqMIMNhD6ArOSXpwKWKUrU/oTJCl4Y96jSuoa48OWgIAWWRv/fYFe6qwUvbhZUuwK2EF0CPEgbWwF508bjFGlLYehOovxVn4Xl3MXqjr5iwjAMgAtKn3n+kXjUXjJyDivRfazFUX3vwU0gMnENlgvL7PVGhDaQ52OeCMQlsYTgOZVKA09DxAs7+wx0GaksuU1vbsD9Gf5yN80QwH1WIq9ureg9Bs/w7Dyq3HG5guv4QL7WS7N0sHHiU9wNcAuAftY1kDl2wEgvc7hyOrTzBCVj+BsPsdx+WVf30P9e5DGFlk/T1OtnmtLLkOMvDrYOkjKkgasoYG3ncVw8gFSiv/FIZHpJ2R4Qmoo8IROGsiwh+2/yujWlWC63t+hPbAMQyrsLyXwNAXhzSlWF1yA5W6RldxEW96UKCWUF18Q0aLdDjNm1SeBJGLFgkIXd2a1g1kaERBty4QR/eBf+xg9Jw8FmIPy3cM1mlqoEzNQFHaVVQnpsLvphwRNTTIXTxsUka9BjsrZNjfMQZ7Zk3Wiqi++kt1AqUh5HCbPxvHODNPkNgdS/2CscQvGD4i03n4PKoRanfjv4u1NPwbdAig2J1GZtpDDnTsrJRjZ4Uc9bT56V9n+sCBdV1TaeT9mgHYBeApB1Zml+jeEq8WEOwS1ErhKp0W+9VF+sbP7XjvenOWv6fSyNc1AeATOh40bXxQ3lGetkNuhMQb06X36q9f7cvhssXWqjxWXYYj1bfwc3VpuznOZYcLW4rSoAYXaWTpLfeqBfqEnAWNUXwId4aMkZ5+eNDbHz3cPPVnCMlvc68JQ11qaZ0+vJxCW4eDmlIc1JTcVY3e7Asa1OEijewh8v8WAIJ8QuNpmv63MxrPUXWQbdrNQHR384RSW3+7wcnvOn3sYCEBNOgpRRrFESMAbg8GyR8nCU7qwB6g8YOqWt50YMOwByD/CfYOHqqjqPa/xNWB289e0yhKN0CpVv5hFgDyR1ebGLLXYKG8oQfoVSqNYpvhX4wv1739iStNDwsNyI8HKNC7lRrFYqY0swA07RUMPQHQHG534EdRQYojPECfVGkUD5iTbAkAdPXr6t+g1R4GKMetyDjCVkEmwwN0skQsnlpYWXiLEwAk820I9gPUOMGv7dED1CmJmHrUUuObfAuwZGKQNPgrGtSi9uiCu1jnPSqNnLRZq9G1Lb4CmI4LlAavBKitd7FD243pFLBWqZF/wEZh1gDovyL6BPWndaI3QWEWG+FCHqd74KiIptcrqhWsI2tzAqDZnABp8GRA9FcK9FSnmyhUaOoBCucoUFuVatk+ru6xCYA7IIRGU6BJrFWyiY/9ldtctRTym/MAGdX/AIr6RqWWHbfVRXYBYFhpZ9/QCDcd4mjQJMxmJA10pwASG44E/bXzinBbzesQ5Ui0zDKAKgTo6xSQrhXhXHGVPJEP6/4fAayH1yFvEgIAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.douyin.com/*
// @match        *://*.iesdouyin.com/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.5.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.8.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.7/dist/index.umd.js
// @connect      *
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, Utils, DOMUtils, pops) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var _a;
  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const PROPS_STORAGE_API = "data-storage-api";
  const UISelect = function(text, key, defaultValue, data, callback, description) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    let result = {
      text,
      type: "select",
      description,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        let value = isSelectedValue;
        log.info(`选择：${isSelectedText}`);
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof callback === "function") {
          callback(event, value, isSelectedText);
        }
      },
      data: selectData
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    Reflect.set(result.props, PROPS_STORAGE_API, {
      get(key2, defaultValue2) {
        return PopsPanel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        PopsPanel.setValue(key2, value);
      }
    });
    return result;
  };
  const UISwitch = function(text, key, defaultValue, clickCallBack, description, afterAddToUListCallBack) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      props: {},
      getValue() {
        return Boolean(
          this.props[PROPS_STORAGE_API].get(key, defaultValue)
        );
      },
      callback(event, __value) {
        let value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        this.props[PROPS_STORAGE_API].set(key, value);
      },
      afterAddToUListCallBack
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    Reflect.set(result.props, PROPS_STORAGE_API, {
      get(key2, defaultValue2) {
        return PopsPanel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        PopsPanel.setValue(key2, value);
      }
    });
    return result;
  };
  const afterEnterDeepMenuCallBack = (formConfig, container) => {
    let $oneClickOpen = container.sectionBodyContainer.querySelector(
      ".keyboard-oneClickOpen"
    );
    let $oneClickClose = container.sectionBodyContainer.querySelector(
      ".keyboard-oneClickClose"
    );
    let clickCallBack = (isOpen) => {
      var _a2;
      (_a2 = container.sectionBodyContainer) == null ? void 0 : _a2.querySelectorAll(".pops-panel-switch").forEach(($ele) => {
        let $input = $ele.querySelector(
          ".pops-panel-switch__input"
        );
        let $checkbox = $ele.querySelector(
          ".pops-panel-switch__core"
        );
        if (isOpen) {
          if (!$input.checked) {
            $checkbox.click();
          }
        } else {
          if ($input.checked) {
            $checkbox.click();
          }
        }
      });
    };
    domUtils.on($oneClickOpen, "click", (event) => {
      utils.preventEvent(event);
      clickCallBack(true);
    });
    domUtils.on($oneClickClose, "click", (event) => {
      utils.preventEvent(event);
      clickCallBack(false);
    });
  };
  const AutoOpenOrClose = {
    text: (
      /*html*/
      `
        <a href="javascript:;" class="keyboard-oneClickOpen">一键开启</a>
        <br>
        <a href="javascript:;" class="keyboard-oneClickClose">一键关闭</a>
    `
    ),
    afterEnterDeepMenuCallBack
  };
  const PanelCommonConfig = {
    id: "panel-config-common",
    title: "通用",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "Toast配置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISelect(
                    "Toast位置",
                    "qmsg-config-position",
                    "bottom",
                    [
                      {
                        value: "topleft",
                        text: "左上角"
                      },
                      {
                        value: "top",
                        text: "顶部"
                      },
                      {
                        value: "topright",
                        text: "右上角"
                      },
                      {
                        value: "left",
                        text: "左边"
                      },
                      {
                        value: "center",
                        text: "中间"
                      },
                      {
                        value: "right",
                        text: "右边"
                      },
                      {
                        value: "bottomleft",
                        text: "左下角"
                      },
                      {
                        value: "bottom",
                        text: "底部"
                      },
                      {
                        value: "bottomright",
                        text: "右下角"
                      }
                    ],
                    (event, isSelectValue, isSelectText) => {
                      log.info("设置当前Qmsg弹出位置" + isSelectText);
                    },
                    "Toast显示在页面九宫格的位置"
                  ),
                  UISelect(
                    "最多显示的数量",
                    "qmsg-config-maxnums",
                    3,
                    [
                      {
                        value: 1,
                        text: "1"
                      },
                      {
                        value: 2,
                        text: "2"
                      },
                      {
                        value: 3,
                        text: "3"
                      },
                      {
                        value: 4,
                        text: "4"
                      },
                      {
                        value: 5,
                        text: "5"
                      }
                    ],
                    void 0,
                    "限制Toast显示的数量"
                  ),
                  UISwitch(
                    "逆序弹出",
                    "qmsg-config-showreverse",
                    false,
                    void 0,
                    "修改Toast弹出的顺序"
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        type: "forms",
        text: "",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "伪装登录",
                    "disguiseLogin",
                    false,
                    void 0,
                    "使用随机UID进行伪装"
                  ),
                  UISwitch(
                    "initial-scale=1",
                    "dy-initialScale",
                    false,
                    void 0,
                    "可配合手机模式放大页面"
                  ),
                  UISwitch(
                    "移除<meta> apple-itunes-app",
                    "dy-apple-removeMetaAppleItunesApp",
                    true,
                    void 0,
                    "Safari使用，移除顶部横幅【Open in the 抖音 app】"
                  ),
                  UISwitch(
                    "移除某些Cookie",
                    "dy-cookie-remove__ac__",
                    false,
                    void 0,
                    ""
                  )
                ]
              }
            ]
          },
          {
            text: "Url重定向",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "重定向/home",
                    "douyin-redirect-url-home-to-root",
                    false,
                    void 0,
                    "/home => /"
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: "快捷键禁用",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                type: "forms",
                text: AutoOpenOrClose.text,
                forms: [
                  UISwitch(
                    "赞|取消赞",
                    "dy-keyboard-hook-likeOrDislike",
                    false,
                    void 0,
                    "Z"
                  ),
                  UISwitch(
                    "评论",
                    "dy-keyboard-hook-comment",
                    false,
                    void 0,
                    "X"
                  ),
                  UISwitch(
                    "开启/关闭弹幕",
                    "dy-keyboard-hook-danmaku-enable",
                    false,
                    void 0,
                    "B"
                  ),
                  UISwitch(
                    "收藏/取消收藏",
                    "dy-keyboard-hook-collect-enable",
                    false,
                    void 0,
                    "C"
                  ),
                  UISwitch(
                    "复制分享口令",
                    "dy-keyboard-hook-copyShareLink",
                    false,
                    void 0,
                    "V"
                  ),
                  UISwitch(
                    "清屏",
                    "dy-keyboard-hook-clearScreen",
                    false,
                    void 0,
                    "J"
                  ),
                  UISwitch(
                    "自动连播",
                    "dy-keyboard-hook-automaticBroadcast",
                    false,
                    void 0,
                    "K"
                  ),
                  UISwitch(
                    "视频信息",
                    "dy-keyboard-hook-videoInfo",
                    false,
                    void 0,
                    "I"
                  ),
                  UISwitch(
                    "不感兴趣",
                    "dy-keyboard-hook-notInterested",
                    false,
                    void 0,
                    "R"
                  ),
                  UISwitch(
                    "进入作者主页",
                    "dy-keyboard-hook-enterAuthorHomePage",
                    false,
                    void 0,
                    "F"
                  ),
                  UISwitch(
                    "关注/取消关注",
                    "dy-keyboard-hook-follow",
                    false,
                    void 0,
                    "G"
                  ),
                  UISwitch(
                    "抖音搜索",
                    "dy-keyboard-hook-search",
                    false,
                    void 0,
                    "Shift+F"
                  ),
                  UISwitch(
                    "一键关闭当前页",
                    "dy-keyboard-hook-closeTheCurrentPageWithOneClick",
                    false,
                    void 0,
                    "Shift+Q"
                  ),
                  UISwitch(
                    "上下翻页",
                    "dy-keyboard-hook-pageUpAndDown",
                    false,
                    void 0,
                    "↑↓"
                  ),
                  UISwitch(
                    "快进快退",
                    "dy-keyboard-hook-fastForwardAndFastBack",
                    false,
                    void 0,
                    "← →"
                  ),
                  UISwitch(
                    "暂停",
                    "dy-keyboard-hook-pause",
                    false,
                    void 0,
                    "空格"
                  ),
                  UISwitch(
                    "网页内全屏",
                    "dy-keyboard-hook-fullScreenInsideThePage",
                    false,
                    void 0,
                    "Y"
                  ),
                  UISwitch(
                    "全屏",
                    "dy-keyboard-hook-fullScreen",
                    false,
                    void 0,
                    "H"
                  ),
                  UISwitch(
                    "稍后再看",
                    "dy-keyboard-hook-watchItOutLater",
                    false,
                    void 0,
                    "L"
                  ),
                  UISwitch(
                    "音量调整",
                    "dy-keyboard-hook-volumeAdjustment",
                    false,
                    void 0,
                    "Shift + / Shift -"
                  ),
                  UISwitch(
                    "呼出快捷键列表",
                    "dy-keyboard-hook-listOfCallShortcutKeys",
                    false,
                    void 0,
                    "?"
                  ),
                  UISwitch(
                    "关闭快捷键列表",
                    "dy-keyboard-hook-closeTheShortcutKeyList",
                    false,
                    void 0,
                    "ESC"
                  ),
                  UISwitch(
                    "相关推荐",
                    "dy-keyboard-hook-relevantRecommendation",
                    false,
                    void 0,
                    "N"
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "屏蔽-通用",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                type: "forms",
                text: AutoOpenOrClose.text,
                forms: [
                  UISwitch(
                    "【屏蔽】登录弹窗",
                    "watchLoginDialogToClose",
                    true,
                    void 0,
                    "屏蔽元素且自动等待元素出现并关闭登录弹窗"
                  ),
                  UISwitch(
                    "【屏蔽】底部？按钮",
                    "shieldBottomQuestionButton",
                    true,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽-左侧导航栏",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                type: "forms",
                text: AutoOpenOrClose.text,
                forms: [
                  UISwitch(
                    "【屏蔽】左侧导航栏",
                    "shieldLeftNavigator",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】首页",
                    "shieldLeftNavigator-tab-home",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】推荐",
                    "shieldLeftNavigator-tab-recommend",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】关注",
                    "shieldLeftNavigator-tab-follow",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】朋友",
                    "shieldLeftNavigator-tab-friend",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】我的",
                    "shieldLeftNavigator-tab-user_self",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】喜欢",
                    "shieldLeftNavigator-tab-user_self_like",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】收藏",
                    "shieldLeftNavigator-tab-user_self_collection",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】观看历史",
                    "shieldLeftNavigator-tab-user_self_record",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】看奥运",
                    "shieldLeftNavigator-tab-olympics",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】直播",
                    "shieldLeftNavigator-tab-live",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】放映厅",
                    "shieldLeftNavigator-tab-vs",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】短剧",
                    "shieldLeftNavigator-tab-series",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】知识",
                    "shieldLeftNavigator-tab-channel_300203",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】游戏",
                    "shieldLeftNavigator-tab-channel_300205",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】二次元",
                    "shieldLeftNavigator-tab-channel_300206",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】音乐",
                    "shieldLeftNavigator-tab-channel_300209",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】美食",
                    "shieldLeftNavigator-tab-channel_300204",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽-顶部导航栏",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                text: AutoOpenOrClose.text,
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】顶部导航栏",
                    "shieldTopNavigator",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】客户端提示",
                    "shieldClientTip",
                    true,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】充钻石",
                    "shieldFillingBricksAndStones",
                    true,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】客户端",
                    "shieldClient",
                    true,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】快捷访问",
                    "shieldQuickAccess",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】通知",
                    "shieldNotifitation",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】私信",
                    "shieldPrivateMessage",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】投稿",
                    "shieldSubmission",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】壁纸",
                    "shieldWallpaper",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽-搜索",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                text: AutoOpenOrClose.text,
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】搜索框",
                    "shieldSearch",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】搜索框的提示",
                    "shieldSearchPlaceholder",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】猜你想搜",
                    "shieldSearchGuessYouWantToSearch",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】抖音热点",
                    "shieldSearchTiktokHotspot",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: "屏蔽-鼠标悬浮提示",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                type: "forms",
                text: AutoOpenOrClose.text + "<br>视频区域-右侧工具栏",
                forms: [
                  UISwitch(
                    "进入作者主页",
                    "dy-video-mouseHoverTip-rightToolBar-enterUserHome",
                    false
                  ),
                  UISwitch(
                    "关注",
                    "dy-video-mouseHoverTip-rightToolBar-follow",
                    false
                  ),
                  UISwitch(
                    "点赞",
                    "dy-video-mouseHoverTip-rightToolBar-addLike",
                    false
                  ),
                  UISwitch(
                    "评论",
                    "dy-video-mouseHoverTip-rightToolBar-comment",
                    false
                  ),
                  UISwitch(
                    "收藏",
                    "dy-video-mouseHoverTip-rightToolBar-collect",
                    false
                  ),
                  UISwitch(
                    "分享",
                    "dy-video-mouseHoverTip-rightToolBar-share",
                    false
                  ),
                  UISwitch(
                    "看相关",
                    "dy-video-mouseHoverTip-rightToolBar-seeCorrelation",
                    false
                  )
                ]
              },
              {
                type: "forms",
                text: "视频区域-底部工具栏",
                forms: [
                  UISwitch(
                    "自动连播",
                    "dy-video-mouseHoverTip-bottomToolBar-automaticBroadcast",
                    false
                  ),
                  UISwitch(
                    "清屏",
                    "dy-video-mouseHoverTip-bottomToolBar-clearScreen",
                    false
                  ),
                  UISwitch(
                    "稍后再看",
                    "dy-video-mouseHoverTip-bottomToolBar-watchLater",
                    false
                  ),
                  UISwitch(
                    "网页全屏",
                    "dy-video-mouseHoverTip-bottomToolBar-pageFullScreen",
                    false
                  ),
                  UISwitch(
                    "全屏",
                    "dy-video-mouseHoverTip-bottomToolBar-fullScreen",
                    false
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const DouYinDanmuFilter = {
    key: "douyin-live-danmu-rule",
    $data: {
      rule: [],
      isFilterAttrName: "data-is-filter"
    },
    init() {
      this.parseRule();
    },
    /**
     * 解析规则
     */
    parseRule() {
      let localRule = this.get().trim();
      let localRuleSplit = localRule.split("\n");
      localRuleSplit.forEach((item) => {
        if (item.trim() == "") return;
        item = item.trim();
        let itemRegExp = new RegExp(item.trim());
        this.$data.rule.push(itemRegExp);
      });
    },
    /**
     * 通知弹幕改变(可能是新增)
     */
    change() {
      var _a2, _b, _c, _d, _e, _f, _g;
      let danmakuQueue = Array.from(
        document.querySelectorAll("xg-danmu.xgplayer-danmu > div > div")
      );
      if (!danmakuQueue.length) {
        return;
      }
      for (let messageIndex = 0; messageIndex < danmakuQueue.length; messageIndex++) {
        let $danmuItem = danmakuQueue[messageIndex];
        if ($danmuItem.hasAttribute(this.$data.isFilterAttrName)) {
          continue;
        }
        let $messageObj = (_d = (_c = (_b = (_a2 = utils.getReactObj($danmuItem)) == null ? void 0 : _a2.reactFiber) == null ? void 0 : _b.return) == null ? void 0 : _c.memoizedProps) == null ? void 0 : _d.message;
        let message = ((_e = $messageObj == null ? void 0 : $messageObj.payload) == null ? void 0 : _e.content) || ((_g = (_f = $messageObj == null ? void 0 : $messageObj.payload) == null ? void 0 : _f.common) == null ? void 0 : _g.describe);
        for (let index = 0; index < this.$data.rule.length; index++) {
          const ruleRegExp = this.$data.rule[index];
          if (typeof message === "string") {
            if (ruleRegExp.test(message)) {
              log.info("过滤弹幕: " + message);
              $danmuItem.setAttribute(this.$data.isFilterAttrName, "true");
              domUtils.hide($danmuItem);
              break;
            }
          }
        }
      }
    },
    set(value) {
      _GM_setValue(this.key, value);
    },
    get() {
      return _GM_getValue(this.key, "");
    }
  };
  const DouYinLiveDanmuku = {
    /**
     * 弹幕过滤
     */
    filterDanmu() {
      utils.waitNode("xg-danmu.xgplayer-danmu", 1e5).then(($danmu) => {
        if (!$danmu) {
          log.error("xg-danmu.xgplayer-danmu获取失败");
          return;
        }
        log.success("弹幕过滤");
        DouYinDanmuFilter.init();
        utils.mutationObserver($danmu, {
          config: {
            childList: true,
            subtree: true
          },
          callback: () => {
            DouYinDanmuFilter.change();
          }
        });
      });
    }
  };
  const ReactUtils = {
    /**
     * 等待react某个属性并进行设置
     */
    async waitReactPropsToSet($target, propName, needSetList) {
      function getTarget() {
        let __target__ = null;
        if (typeof $target === "string") {
          __target__ = document.querySelector($target);
        } else if (typeof $target === "function") {
          __target__ = $target();
        } else if ($target instanceof HTMLElement) {
          __target__ = $target;
        }
        return __target__;
      }
      if (typeof $target === "string") {
        let $ele = await utils.waitNode($target, 1e4);
        if (!$ele) {
          return;
        }
      }
      needSetList.forEach((needSetOption) => {
        if (typeof needSetOption.msg === "string") {
          log.info(needSetOption.msg);
        }
        function checkObj() {
          let target = getTarget();
          if (target == null) {
            return false;
          }
          let targetObj = utils.getReactObj(target);
          if (targetObj == null) {
            return false;
          }
          let targetObjProp = targetObj[propName];
          if (targetObjProp == null) {
            return false;
          }
          let needOwnCheck = needSetOption.check(targetObjProp);
          return Boolean(needOwnCheck);
        }
        utils.waitPropertyByInterval(
          () => {
            return getTarget();
          },
          checkObj,
          250,
          1e4
        ).then(() => {
          let target = getTarget();
          if (target == null) {
            return;
          }
          let targetObj = utils.getReactObj(target);
          if (targetObj == null) {
            return;
          }
          let targetObjProp = targetObj[propName];
          if (targetObjProp == null) {
            return;
          }
          needSetOption.set(targetObjProp);
        });
      });
    }
  };
  const CommonUtil = {
    /**
     * 添加屏蔽CSS
     * @param args
     * @example
     * addBlockCSS("")
     * addBlockCSS("","")
     * addBlockCSS(["",""])
     */
    addBlockCSS(...args) {
      let selectorList = [];
      if (args.length === 0) {
        return;
      }
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") {
        return;
      }
      args.forEach((selector) => {
        if (Array.isArray(selector)) {
          selectorList = selectorList.concat(selector);
        } else {
          selectorList.push(selector);
        }
      });
      return addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
    },
    /**
     * 设置GM_getResourceText的style内容
     * @param resourceMapData 资源数据
     * @example
     * setGMResourceCSS({
     *   keyName: "ViewerCSS",
     *   url: "https://example.com/example.css",
     *   devUrl: "viewerjs/dist/viewer.css",
     * })
     */
    setGMResourceCSS(resourceMapData) {
      {
        let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : "";
        if (typeof cssText === "string" && cssText) {
          addStyle(cssText);
        } else {
          CommonUtil.loadStyleLink(resourceMapData.url);
        }
      }
    },
    /**
     * 添加<link>标签
     * @param url
     * @example
     * loadStyleLink("https://example.com/example.css")
     */
    async loadStyleLink(url2) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url2;
      domUtils.ready(() => {
        document.head.appendChild($link);
      });
    },
    /**
     * 添加<script>标签
     * @param url
     * @example
     * loadStyleLink("https://example.com/example.js")
     */
    async loadScript(url2) {
      let $script = document.createElement("script");
      $script.src = url2;
      return new Promise((resolve) => {
        $script.onload = () => {
          resolve(null);
        };
        (document.head || document.documentElement).appendChild($script);
      });
    },
    /**
     * 将url修复，例如只有search的链接修复为完整的链接
     *
     * 注意：不包括http转https
     * @param url 需要修复的链接
     * @example
     * 修复前：`/xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`//xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     */
    fixUrl(url2) {
      url2 = url2.trim();
      if (url2.match(/^http(s|):\/\//i)) {
        return url2;
      } else {
        if (!url2.startsWith("/")) {
          url2 += "/";
        }
        url2 = window.location.origin + url2;
        return url2;
      }
    },
    /**
     * http转https
     * @param url 需要修复的链接
     * @example
     * 修复前：
     * 修复后：
     * @example
     * 修复前：
     * 修复后：
     */
    fixHttps(url2) {
      if (url2.startsWith("https://")) {
        return url2;
      }
      if (!url2.startsWith("http://")) {
        return url2;
      }
      let urlObj2 = new URL(url2);
      urlObj2.protocol = "https:";
      return urlObj2.toString();
    }
  };
  const DouYinLiveChatRoomBlock = {
    init() {
      PopsPanel.execMenuOnce("live-shieldChatRoom", () => {
        return this.shieldChatRoom();
      });
      PopsPanel.execMenuOnce("live-shielChatRoomVipSeats", () => {
        return this.shielChatRoomVipSeats();
      });
      PopsPanel.execMenuOnce("dy-live-shieldUserLevelIcon", () => {
        return this.shieldUserLevelIcon();
      });
      PopsPanel.execMenuOnce("dy-live-shieldUserVIPIcon", () => {
        return this.shieldUserVIPIcon();
      });
      PopsPanel.execMenuOnce("dy-live-shieldUserFansIcon", () => {
        return this.shieldUserFansIcon();
      });
      PopsPanel.execMenuOnce("dy-live-shieldMessage", () => {
        return this.shieldMessage();
      });
    },
    /**
     * 【屏蔽】评论区（聊天室）
     */
    shieldChatRoom() {
      log.info("【屏蔽】评论区（聊天室）");
      return [
        CommonUtil.addBlockCSS("#chatroom"),
        addStyle(`
            div[data-e2e="living-container"],
            div[data-e2e="living-container"] > div{
                margin-bottom: 0px !important;
            }`)
      ];
    },
    /**
     * 【屏蔽】评论区的贵宾席
     */
    shielChatRoomVipSeats() {
      log.info("【屏蔽】评论区的贵宾席");
      return [
        CommonUtil.addBlockCSS(
          "#chatroom > div > div:has(#audiencePanelScrollId)"
        )
      ];
    },
    /**
     * 【屏蔽】用户等级图标
     */
    shieldUserLevelIcon() {
      log.info("【屏蔽】用户等级图标");
      return [
        CommonUtil.addBlockCSS(
          '#chatroom .webcast-chatroom___item span:has(>img[src*="level"])'
        )
      ];
    },
    /**
     * 【屏蔽】VIP图标
     */
    shieldUserVIPIcon() {
      log.info("【屏蔽】VIP图标");
      return [
        CommonUtil.addBlockCSS(
          '#chatroom .webcast-chatroom___item span:has(>img[src*="subscribe"])'
        )
      ];
    },
    /**
     * 【屏蔽】粉丝牌
     */
    shieldUserFansIcon() {
      log.info("【屏蔽】粉丝牌");
      return [
        CommonUtil.addBlockCSS(
          '#chatroom .webcast-chatroom___item span:has(>div[style*="fansclub"])',
          '#chatroom .webcast-chatroom___item span:has(>img[src*="fansclub"])'
        )
      ];
    },
    /**
     * 【屏蔽】信息播报
     */
    shieldMessage() {
      log.info("【屏蔽】信息播报");
      return [
        CommonUtil.addBlockCSS(
          "#chatroom .webcast-chatroom___bottom-message",
          // 上面的滚动播报，xxx加入了直播间
          '#chatroom >div>div>div:has(>div[elementtiming="element-timing"])'
        )
      ];
    }
  };
  const DouYinLiveDanmuBlock = {
    init() {
      PopsPanel.execMenuOnce("live-shieldDanmuku", () => {
        return this.shieldDanmu();
      });
    },
    /**
     * 屏蔽弹幕
     */
    shieldDanmu() {
      log.info("屏蔽弹幕");
      return [CommonUtil.addBlockCSS("xg-danmu.xgplayer-danmu")];
    }
  };
  const DouYinLiveBlock = {
    init() {
      PopsPanel.execMenuOnce("live-shieldGiftColumn", () => {
        return this.shieldGiftColumn();
      });
      PopsPanel.execMenuOnce("live-shieldTopToolBarInfo", () => {
        return this.shieldTopToolBarInfo();
      });
      PopsPanel.execMenuOnce("live-shieldGiftEffects", () => {
        return this.shieldGiftEffects();
      });
      PopsPanel.execMenuOnce("live-shielYellowCar", () => {
        return this.shieldYellowCar();
      });
      DouYinLiveChatRoomBlock.init();
      DouYinLiveDanmuBlock.init();
    },
    /**
     * 【屏蔽】底部的礼物栏
     */
    shieldGiftColumn() {
      log.info("屏蔽底部的礼物栏");
      return [
        CommonUtil.addBlockCSS(
          'div[data-e2e="living-container"] >div> :last-child',
          /* 全屏状态下的礼物栏 */
          'div[data-e2e="living-container"] xg-controls > div:has(div[data-e2e="gifts-container"])'
        ),
        addStyle(`
            /* 去除全屏状态下的礼物栏后，上面的工具栏bottom也去除 */
            div[data-e2e="living-container"] xg-controls xg-inner-controls:has(+div div[data-e2e="gifts-container"]){
                bottom: 0 !important;
            }`)
      ];
    },
    /**
     * 【屏蔽】顶栏信息
     * 包括直播作者、右侧的礼物展馆
     */
    shieldTopToolBarInfo() {
      log.info("【屏蔽】顶栏信息");
      return [
        CommonUtil.addBlockCSS(
          'div[data-e2e="living-container"] > div > pace-island[id^="island_"]'
        )
      ];
    },
    /**
     * 【屏蔽】礼物特效
     */
    shieldGiftEffects() {
      log.info("【屏蔽】礼物特效");
      return [
        CommonUtil.addBlockCSS(
          // ↓该屏蔽会把连麦的用户也屏蔽了
          // '.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div>div)'
          '.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div:not([class*="video_layout_container"])>div)'
        )
      ];
    },
    /**
     * 【屏蔽】小黄车
     */
    shieldYellowCar() {
      log.info("【屏蔽】小黄车");
      return [
        CommonUtil.addBlockCSS(
          'div[id^="living_room_player_container"] .basicPlayer  > div:has(div[data-e2e="yellowCart-container"])'
        )
      ];
    }
  };
  const DouYinLivePlayerInstance = {
    $data: {
      playerInstance: null
    },
    $el: {
      $playerIns: null
    },
    /**
     * 添加油猴菜单
     */
    initMenu() {
      GM_Menu.add({
        key: "live-parsePlayerInstance",
        text: "⚙ PlayerInstance",
        autoReload: false,
        showText(text, enable) {
          return text;
        },
        callback: () => {
          let $playerIns = document.querySelector(
            `[id^="living_room_player_container"]`
          );
          if (!$playerIns) {
            log.error("获取playerInstance所在的元素失败");
            Qmsg.error("获取playerInstance所在的元素失败");
            return;
          }
          this.$el.$playerIns = $playerIns;
          let playerInstance = this.parseElementPlayerIns(this.$el.$playerIns);
          if (playerInstance == null) {
            log.error("获取playerInstance失败");
            log.error("获取playerInstance失败");
            return;
          }
          this.$data.playerInstance = playerInstance;
          this.showParseDialog();
        }
      });
    },
    /**
     * 解析元素上的播放器实例
     */
    parseElementPlayerIns($ele) {
      var _a2, _b, _c, _d;
      let react = utils.getReactObj($ele);
      return (_d = (_c = (_b = (_a2 = react == null ? void 0 : react.reactFiber) == null ? void 0 : _a2.child) == null ? void 0 : _b.child) == null ? void 0 : _c.memoizedProps) == null ? void 0 : _d.playerInstance;
    },
    /**
     * 显示解析的信息弹窗
     */
    showParseDialog() {
      var _a2, _b, _c, _d;
      log.info(["解析的信息：", this.$data.playerInstance]);
      let blobSrc = ((_a2 = this.$data.playerInstance) == null ? void 0 : _a2.url) || ((_b = this.$data.playerInstance) == null ? void 0 : _b.src);
      let pushSrc = (_c = this.$data.playerInstance) == null ? void 0 : _c.config.url;
      __pops.alert({
        title: {
          text: "解析信息",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                <div class="live-dy-parse-container">
                    <div class="live-dy-parse-item">
                        <div class="live-dy-parse-item-name">推流地址：</div>
                        <a class="live-dy-parse-item-value" href="${pushSrc}" target="_blank">${pushSrc}
                        </a>
                    </div>
                    <div class="live-dy-parse-item">
                        <div class="live-dy-parse-item-name">blob地址：</div>
                        <a class="live-dy-parse-item-value" href="${blobSrc}" target="_blank">${blobSrc}
                        </a>
                    </div>
                    <div class="live-dy-parse-item">
                        <div class="live-dy-parse-item-name">播放器版本：</div>
                        <div class="live-dy-parse-item-value">${(_d = this.$data.playerInstance) == null ? void 0 : _d.version}
                        </div>
                    </div>
                </div>
                `
          ),
          html: true
        },
        mask: {
          enable: false
        },
        width: window.innerWidth > 550 ? "550px" : "88wv",
        height: window.innerHeight > 550 ? "550px" : "70vh",
        style: (
          /*css*/
          `
            .live-dy-parse-container{
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .live-dy-parse-item{
                display: flex;
                flex-wrap: wrap;
                border: 1px solid #919191;
                border-left: 0px;
                border-right: 0px;
                width: 100%;
                background: #0af9ee;
                padding: 5px 5px;
            }
            `
        )
      });
    }
  };
  class ShortCut {
    constructor(key) {
      /** 存储的键 */
      __publicField(this, "key", "short-cut");
      /** 是否存在等待按下的按键 */
      __publicField(this, "isWaitPress", false);
      if (typeof key === "string") {
        this.key = key;
      }
    }
    /**
     * 初始化配置默认值
     */
    initConfig(key, option) {
      if (this.hasOption(key)) ;
      else {
        this.setOption(key, option);
      }
    }
    /** 获取存储的键 */
    getStorageKey() {
      return this.key;
    }
    /**
     * 获取本地存储的所有值
     */
    getLocalAllOptions() {
      return _GM_getValue(this.key, []);
    }
    /**
     * 判断是否存在该配置
     * @param key 键
     */
    hasOption(key) {
      let localOptions = this.getLocalAllOptions();
      let findOption = localOptions.find((item) => item.key === key);
      return !!findOption;
    }
    /**
     * 判断是否存在该配置的value值
     * @param key 键
     */
    hasOptionValue(key) {
      if (this.hasOption(key)) {
        let option = this.getOption(key);
        return !((option == null ? void 0 : option.value) == null);
      } else {
        return false;
      }
    }
    /**
     * 获取配置
     * @param key 键
     * @param defaultValue 默认值
     */
    getOption(key, defaultValue) {
      let localOptions = this.getLocalAllOptions();
      let findOption = localOptions.find((item) => item.key === key);
      return findOption ?? defaultValue;
    }
    /**
     * 设置配置
     * @param key 键
     * @param value 配置
     */
    setOption(key, value) {
      let localOptions = this.getLocalAllOptions();
      let findIndex = localOptions.findIndex((item) => item.key === key);
      if (findIndex == -1) {
        localOptions.push({
          key,
          value
        });
      } else {
        Reflect.set(localOptions[findIndex], "value", value);
      }
      _GM_setValue(this.key, localOptions);
    }
    /**
     * 清空当前已有配置录入的值
     * @param key
     */
    emptyOption(key) {
      let result = false;
      let localOptions = this.getLocalAllOptions();
      let findIndex = localOptions.findIndex((item) => item.key === key);
      if (findIndex !== -1) {
        localOptions[findIndex].value = null;
        result = true;
      }
      _GM_setValue(this.key, localOptions);
      return result;
    }
    /**
     * 删除配置
     * @param key 键
     */
    deleteOption(key) {
      let result = false;
      let localValue = this.getLocalAllOptions();
      let findValueIndex = localValue.findIndex((item) => item.key === key);
      if (findValueIndex !== -1) {
        localValue.splice(findValueIndex, 1);
        result = true;
      }
      _GM_setValue(this.key, localValue);
      return result;
    }
    /**
     * 把配置的快捷键转成文字
     * @param keyboardValue
     * @returns
     */
    translateKeyboardValueToButtonText(keyboardValue) {
      let result = "";
      keyboardValue.ohterCodeList.forEach((ohterCodeKey) => {
        result += utils.stringTitleToUpperCase(ohterCodeKey, true) + " + ";
      });
      result += utils.stringTitleToUpperCase(keyboardValue.keyName);
      return result;
    }
    /**
     * 获取快捷键显示的文字
     * @param key 本地存储的快捷键键名
     * @param defaultShowText 默认显示的文字
     */
    getShowText(key, defaultShowText) {
      if (this.hasOption(key)) {
        let localOption = this.getOption(key);
        if (localOption.value == null) {
          return defaultShowText;
        } else {
          return this.translateKeyboardValueToButtonText(localOption.value);
        }
      } else {
        return defaultShowText;
      }
    }
    /**
     * 录入快捷键
     * @param key 本地存储的快捷键键名
     */
    async enterShortcutKeys(key) {
      return new Promise((resolve) => {
        this.isWaitPress = true;
        let keyboardListener = domUtils.listenKeyboard(
          window,
          "keyup",
          (keyName, keyValue, ohterCodeList) => {
            const currentOption = {
              keyName,
              keyValue,
              ohterCodeList
            };
            const shortcutJSONString = JSON.stringify(currentOption);
            const allOptions = this.getLocalAllOptions();
            for (let index = 0; index < allOptions.length; index++) {
              let localValue = allOptions[index];
              if (localValue.key === key) {
                continue;
              }
              const localShortCutJSONString = JSON.stringify(localValue.value);
              let isUsedByOtherOption = false;
              if (localValue.value != null && shortcutJSONString === localShortCutJSONString) {
                isUsedByOtherOption = true;
              }
              if (isUsedByOtherOption) {
                this.isWaitPress = false;
                keyboardListener.removeListen();
                resolve({
                  status: false,
                  key: localValue.key,
                  option: currentOption
                });
                return;
              }
            }
            this.setOption(key, currentOption);
            this.isWaitPress = false;
            keyboardListener.removeListen();
            resolve({
              status: true,
              key,
              option: currentOption
            });
          }
        );
      });
    }
    /**
     * 初始化全局键盘监听
     * @param shortCutOption 快捷键配置 一般是{ "键名": { callback: ()=>{}}}，键名是本地存储的自定义快捷键的键名
     */
    initGlobalKeyboardListener(shortCutOption) {
      let localOptions = this.getLocalAllOptions();
      if (!localOptions.length) {
        log.warn("没有设置快捷键");
        return;
      }
      let that = this;
      function setListenKeyboard($ele, option) {
        domUtils.listenKeyboard(
          $ele,
          "keydown",
          (keyName, keyValue, ohterCodeList) => {
            if (that.isWaitPress) {
              return;
            }
            localOptions = that.getLocalAllOptions();
            let findShortcutIndex = localOptions.findIndex((item) => {
              let option2 = item.value;
              let tempOption = {
                keyName,
                keyValue,
                ohterCodeList
              };
              if (JSON.stringify(option2) === JSON.stringify(tempOption)) {
                return item;
              }
            });
            if (findShortcutIndex != -1) {
              let findShortcut = localOptions[findShortcutIndex];
              log.info(["调用快捷键", findShortcut]);
              if (findShortcut.key in option) {
                option[findShortcut.key].callback();
              }
            }
          }
        );
      }
      let WindowShortCutOption = {};
      let ElementShortCutOption = {};
      Object.keys(shortCutOption).forEach((localKey) => {
        let option = shortCutOption[localKey];
        if (option.target == null || typeof option.target === "string" && option.target === "") {
          option.target = "window";
        }
        if (option.target === "window") {
          Reflect.set(WindowShortCutOption, localKey, option);
        } else {
          Reflect.set(ElementShortCutOption, localKey, option);
        }
      });
      setListenKeyboard(window, WindowShortCutOption);
      domUtils.ready(() => {
        Object.keys(ElementShortCutOption).forEach(async (localKey) => {
          let option = ElementShortCutOption[localKey];
          if (typeof option.target === "string") {
            utils.waitNode(option.target, 1e4).then(($ele) => {
              if (!$ele) {
                return;
              }
              let __option = {};
              Reflect.set(__option, localKey, option);
              setListenKeyboard($ele, __option);
            });
          } else if (typeof option.target === "function") {
            let target = await option.target();
            if (target == null) {
              return;
            }
            let __option = {};
            Reflect.set(__option, localKey, option);
            setListenKeyboard(target, __option);
          } else {
            let __option = {};
            Reflect.set(__option, localKey, option);
            setListenKeyboard(option.target, __option);
          }
        });
      });
    }
  }
  const DouYinLiveShortCut = {
    shortCut: new ShortCut("live-short-cut"),
    $data: {
      blockChatRoom: false
    },
    init() {
      this.shortCut.initGlobalKeyboardListener(this.getShortCutMap());
    },
    getShortCutMap() {
      return {
        "dy-live-block-chatroom": {
          target: "window",
          callback() {
            log.info("快捷键 ==> 【屏蔽】聊天室");
            let flag = PopsPanel.getValue("live-shieldChatRoom");
            PopsPanel.setValue("live-shieldChatRoom", !flag);
          }
        },
        "dy-live-shieldGiftEffects": {
          target: "window",
          callback: () => {
            log.info("快捷键 ==> 【屏蔽】礼物特效");
            let flag = PopsPanel.getValue("live-shieldGiftEffects");
            PopsPanel.setValue("live-shieldGiftEffects", !flag);
          }
        }
      };
    }
  };
  const VideoQualityMap = {
    auto: {
      label: "自动",
      sign: 0
    },
    ld: {
      label: "标清",
      sign: 1
    },
    sd: {
      label: "高清",
      sign: 2
    },
    hd: {
      label: "超清",
      sign: 3
    },
    uhd: {
      label: "蓝光",
      sign: 4
    },
    origin: {
      label: "潮汐海灵",
      sign: 5
    }
  };
  const DouYinLive = {
    init() {
      DouYinLiveBlock.init();
      DouYinLiveShortCut.init();
      PopsPanel.execMenu("live-autoEnterElementFullScreen", () => {
        this.autoEnterElementFullScreen();
      });
      PopsPanel.execMenu("live-danmu-shield-rule-enable", () => {
        DouYinLiveDanmuku.filterDanmu();
      });
      PopsPanel.execMenu("live-chooseQuality", (quality) => {
        if (quality === "auto") {
          return;
        }
        this.chooseQuality(quality);
      });
      PopsPanel.execMenu("live-unlockImageQuality", () => {
        this.unlockImageQuality();
      });
      PopsPanel.execMenuOnce("live-waitToRemovePauseDialog", () => {
        this.waitToRemovePauseDialog();
      });
      PopsPanel.execMenu("live-pauseVideo", () => {
        this.pauseVideo();
      });
      PopsPanel.execMenu("live-bgColor-enable", () => {
        PopsPanel.execMenuOnce("live-changeBackgroundColor", (value) => {
          return this.changeBackgroundColor(value);
        });
      });
      PopsPanel.execMenuOnce("live-parsePlayerInstance", () => {
        DouYinLivePlayerInstance.initMenu();
      });
    },
    /**
     * 自动进入网页全屏
     */
    autoEnterElementFullScreen() {
      log.info("自动进入网页全屏");
      utils.waitNode(
        'xg-icon[classname] > div > div:has(path[d="M9.75 8.5a2 2 0 00-2 2v11a2 2 0 002 2h12.5a2 2 0 002-2v-11a2 2 0 00-2-2H9.75zM15 11.25h-3.75a1 1 0 00-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 01-1 1z"])'
      ).then((element) => {
        element.click();
      });
    },
    /**
     * 选择画质
     * @param [quality="origin"] 选择的画质
     */
    chooseQuality(quality = "origin") {
      ReactUtils.waitReactPropsToSet(
        'xg-inner-controls xg-right-grid >div:has([data-e2e="quality-selector"])',
        "reactProps",
        [
          {
            check(reactObj) {
              var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
              return typeof ((_d = (_c = (_b = (_a2 = reactObj == null ? void 0 : reactObj.children) == null ? void 0 : _a2.props) == null ? void 0 : _b.children) == null ? void 0 : _c.props) == null ? void 0 : _d.qualityHandler) === "object" && typeof ((_i = (_h = (_g = (_f = (_e = reactObj == null ? void 0 : reactObj.children) == null ? void 0 : _e.props) == null ? void 0 : _f.children) == null ? void 0 : _g.props) == null ? void 0 : _h.qualityHandler) == null ? void 0 : _i.getCurrentQualityList) === "function";
            },
            set(reactObj) {
              let qualityHandler = reactObj.children.props.children.props.qualityHandler;
              let currentQualityList = qualityHandler.getCurrentQualityList();
              if (currentQualityList.includes(quality)) {
                qualityHandler.setCurrentQuality(quality);
                log.success("成功设置画质为【" + quality + "】");
              } else {
                let __quality = quality;
                Qmsg.error(
                  "当前直播没有【" + __quality + "】画质，自动选择最高画质"
                );
                currentQualityList.sort((a, b) => {
                  if (!VideoQualityMap[a]) {
                    log.error("画质【" + a + "】不存在");
                    return 0;
                  }
                  if (!VideoQualityMap[b]) {
                    log.error("画质【" + b + "】不存在");
                    return 0;
                  }
                  return VideoQualityMap[a].sign - VideoQualityMap[b].sign;
                });
                __quality = currentQualityList[currentQualityList.length - 1];
                qualityHandler.setCurrentQuality(quality);
                log.success("成功设置画质为【" + quality + "】");
              }
            }
          }
        ]
      );
    },
    /**
     * 解锁画质选择
     *
     * 未登录情况下最高选择【高清】画质
     */
    unlockImageQuality() {
      log.info("解锁画质选择");
      domUtils.on(
        document,
        "click",
        'div[data-e2e="quality-selector"] > div',
        function(event) {
          var _a2, _b;
          utils.preventEvent(event);
          let clickNode = event.target;
          try {
            let reactObj = utils.getReactObj(clickNode);
            let key = (_a2 = reactObj == null ? void 0 : reactObj.reactFiber) == null ? void 0 : _a2["key"];
            let parent = clickNode.closest("div[data-index]");
            let parentReactObj = utils.getReactObj(parent);
            let current = (_b = parentReactObj == null ? void 0 : parentReactObj.reactProps) == null ? void 0 : _b["children"]["ref"]["current"];
            log.info("当前选择的画质: " + key);
            log.info(["所有的画质: ", current.getCurrentQualityList()]);
            current.setCurrentQuality(key);
          } catch (error) {
            log.error(error);
            Qmsg.error("切换画质失败");
          }
        },
        {
          capture: true
        }
      );
    },
    /**
     * 长时间无操作，已暂停播放
     * 累计节能xx分钟
     */
    waitToRemovePauseDialog() {
      log.info("监听【长时间无操作，已暂停播放】弹窗");
      function checkDialogToClose($ele, from) {
        var _a2, _b, _c, _d, _e, _f;
        let eleText = $ele.textContent || $ele.innerText;
        if (eleText.includes("长时间无操作") && eleText.includes("暂停播放")) {
          log.info(`检测${from}：出现【长时间无操作，已暂停播放】弹窗`);
          Qmsg.info(`检测${from}：出现【长时间无操作，已暂停播放】弹窗`);
          let $rect = utils.getReactObj($ele);
          if (typeof $rect.reactContainer === "object") {
            let closeDialogFn = utils.queryProperty($rect.reactContainer, (obj) => {
              var _a3, _b2;
              if (typeof obj["onClose"] === "function") {
                return {
                  isFind: true,
                  data: obj["onClose"]
                };
              } else if (typeof ((_a3 = obj == null ? void 0 : obj["memoizedProps"]) == null ? void 0 : _a3["onClose"]) === "function") {
                return {
                  isFind: true,
                  data: (_b2 = obj == null ? void 0 : obj["memoizedProps"]) == null ? void 0 : _b2["onClose"]
                };
              } else {
                return {
                  isFind: false,
                  data: obj["child"]
                };
              }
            }) || ((_f = (_e = (_d = (_c = (_b = (_a2 = $rect == null ? void 0 : $rect.reactContainer) == null ? void 0 : _a2.memoizedState) == null ? void 0 : _b.element) == null ? void 0 : _c.props) == null ? void 0 : _d.children) == null ? void 0 : _e.props) == null ? void 0 : _f.onClose);
            if (typeof closeDialogFn === "function") {
              log.success(`检测${from}：调用函数关闭弹窗`);
              Qmsg.success(`检测${from}：调用函数关闭弹窗`);
              closeDialogFn();
            }
          }
        }
      }
      domUtils.ready(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback() {
            document.querySelectorAll(
              "body > div[elementtiming='element-timing']"
            ).forEach(($elementTiming) => {
              checkDialogToClose($elementTiming, "1");
            });
            document.querySelectorAll('body > div:not([id="root"])').forEach(($ele) => {
              checkDialogToClose($ele, "2");
            });
          }
        });
      });
    },
    /**
     * 暂停视频
     */
    pauseVideo() {
      log.info("禁止自动播放视频(直播)");
      utils.waitNode('.basicPlayer[data-e2e="basicPlayer"] video').then(($video) => {
        domUtils.on(
          $video,
          "play",
          () => {
            $video.pause();
          },
          {
            capture: true,
            once: true
          }
        );
        $video.autoplay = false;
        $video.pause();
      });
    },
    /**
     * 修改视频背景颜色
     * @param color 颜色
     */
    changeBackgroundColor(color) {
      log.info("修改视频背景颜色");
      return addStyle(
        /*css*/
        `
		div[id^="living_room_player_container"] > div,
		#chatroom > div{
			background: ${color};
		}	
		`
      );
    }
  };
  const UIButton = function(text, description, buttonText, buttonIcon, buttonIsRightIcon, buttonIconIsLoading, buttonType, clickCallBack, afterAddToUListCallBack) {
    let result = {
      text,
      type: "button",
      description,
      buttonIcon,
      buttonIsRightIcon,
      buttonIconIsLoading,
      buttonType,
      buttonText,
      callback(event) {
        if (typeof clickCallBack === "function") {
          clickCallBack(event);
        }
      },
      afterAddToUListCallBack
    };
    return result;
  };
  const UIButtonShortCut = function(text, description, key, defaultValue, defaultButtonText, buttonType = "default", shortCut) {
    let __defaultButtonText = defaultButtonText;
    let getButtonText = () => {
      return shortCut.getShowText(key, __defaultButtonText);
    };
    let result = UIButton(
      text,
      description,
      getButtonText,
      "keyboard",
      false,
      false,
      buttonType,
      async (event) => {
        var _a2;
        let $click = event.target;
        let $btn = (_a2 = $click.closest(".pops-panel-button")) == null ? void 0 : _a2.querySelector("span");
        if (shortCut.isWaitPress) {
          Qmsg.warning("请先执行当前的录入操作");
          return;
        }
        if (shortCut.hasOptionValue(key)) {
          shortCut.emptyOption(key);
          Qmsg.success("清空快捷键");
        } else {
          let loadingQmsg = Qmsg.loading("请按下快捷键...", {
            showClose: true
          });
          let {
            status,
            option,
            key: isUsedKey
          } = await shortCut.enterShortcutKeys(key);
          loadingQmsg.close();
          if (status) {
            log.success(["成功录入快捷键", option]);
            Qmsg.success("成功录入");
          } else {
            Qmsg.error(
              `快捷键 ${shortCut.translateKeyboardValueToButtonText(
              option
            )} 已被 ${isUsedKey} 占用`
            );
          }
        }
        $btn.innerHTML = getButtonText();
      }
    );
    result.attributes = {};
    Reflect.set(result.attributes, ATTRIBUTE_INIT, () => {
      return false;
    });
    return result;
  };
  const PanelLiveConfig = {
    id: "panel-config-live",
    title: "直播",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISelect(
                    "清晰度",
                    "live-chooseQuality",
                    "auto",
                    (() => {
                      return Object.keys(VideoQualityMap).map((key) => {
                        let item = VideoQualityMap[key];
                        return {
                          value: key,
                          text: item.label
                        };
                      });
                    })(),
                    void 0,
                    "自行选择清晰度"
                  ),
                  UISwitch(
                    "解锁画质选择",
                    "live-unlockImageQuality",
                    true,
                    void 0,
                    "未登录的情况下选择原画实际上是未登录的情况下最高选择的画质"
                  ),
                  UISwitch(
                    "自动进入网页全屏",
                    "live-autoEnterElementFullScreen",
                    false,
                    void 0,
                    "网页加载完毕后自动点击网页全屏按钮进入全屏"
                  ),
                  UISwitch(
                    "监听并关闭【长时间无操作，已暂停播放】弹窗",
                    "live-waitToRemovePauseDialog",
                    true,
                    void 0,
                    "自动监听并检测弹窗"
                  ),
                  UISwitch(
                    "禁止自动播放",
                    "live-pauseVideo",
                    false,
                    void 0,
                    "暂停直播播放"
                  ),
                  UISwitch(
                    "解析直播信息",
                    "live-parsePlayerInstance",
                    false,
                    void 0,
                    "开启后将在油猴菜单中新增菜单【⚙ PlayerInstance】，可解析当前的直播信息"
                  ),
                  UISwitch(
                    "禁用双击点赞",
                    "dy-live-disableDoubleClickLike",
                    false,
                    void 0,
                    "禁止直播视频区域双击点赞"
                  )
                ]
              },
              {
                text: "视频区域背景色",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "live-bgColor-enable",
                    false,
                    void 0,
                    "自定义视频背景色"
                  ),
                  {
                    type: "own",
                    attributes: {
                      "data-key": "live-changeBackgroundColor",
                      "data-default-value": "#000000"
                    },
                    getLiElementCallBack(liElement) {
                      let $left = domUtils.createElement("div", {
                        className: "pops-panel-item-left-text",
                        innerHTML: `
											<p class="pops-panel-item-left-main-text">视频背景颜色</p>
											<p class="pops-panel-item-left-desc-text">自定义视频背景颜色，包括评论区</p>
											`
                      });
                      let $right = domUtils.createElement("div", {
                        className: "pops-panel-item-right",
                        innerHTML: `
											<input type="color" class="pops-color-choose" />
											`
                      });
                      let $color = $right.querySelector(
                        ".pops-color-choose"
                      );
                      $color.value = PopsPanel.getValue(
                        "live-changeBackgroundColor"
                      );
                      let $style = domUtils.createElement("style");
                      domUtils.append(document.head, $style);
                      domUtils.on(
                        $color,
                        ["input", "propertychange"],
                        (event) => {
                          log.info("选择颜色：" + $color.value);
                          $style.innerHTML = `
											div[id^="living_room_player_container"] > div,
											#chatroom > div{
												background: ${$color.value};
											}
											`;
                          PopsPanel.setValue(
                            "live-changeBackgroundColor",
                            $color.value
                          );
                        }
                      );
                      liElement.appendChild($left);
                      liElement.appendChild($right);
                      return liElement;
                    }
                  }
                ]
              }
            ]
          },
          {
            text: "过滤-弹幕",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "live-danmu-shield-rule-enable",
                    false,
                    void 0,
                    "启用自定义的弹幕过滤规则"
                  ),
                  {
                    type: "own",
                    getLiElementCallBack(liElement) {
                      let textareaDiv = domUtils.createElement(
                        "div",
                        {
                          className: "pops-panel-textarea",
                          innerHTML: `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`
                        },
                        {
                          style: "width: 100%;"
                        }
                      );
                      let textarea = textareaDiv.querySelector(
                        "textarea"
                      );
                      textarea.value = DouYinDanmuFilter.get();
                      domUtils.on(
                        textarea,
                        ["input", "propertychange"],
                        utils.debounce(function() {
                          DouYinDanmuFilter.set(textarea.value);
                        }, 200)
                      );
                      liElement.appendChild(textareaDiv);
                      return liElement;
                    }
                  }
                ]
              }
            ]
          },
          {
            text: "自定义快捷键",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UIButtonShortCut(
                    "【屏蔽】聊天室",
                    "",
                    "dy-live-block-chatroom",
                    void 0,
                    "点击录入快捷键",
                    void 0,
                    DouYinLiveShortCut.shortCut
                  ),
                  UIButtonShortCut(
                    "【屏蔽】礼物特效",
                    "",
                    "dy-live-shieldGiftEffects",
                    void 0,
                    "点击录入快捷键",
                    void 0,
                    DouYinLiveShortCut.shortCut
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: "快捷键禁用",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                type: "forms",
                text: AutoOpenOrClose.text,
                forms: [
                  UISwitch("刷新", "dy-live-refresh", false, void 0, "E"),
                  UISwitch(
                    "屏幕旋转",
                    "dy-live-screenRotation",
                    false,
                    void 0,
                    "D"
                  ),
                  UISwitch(
                    "开启小窗模式",
                    "dy-live-enableSmallWindowMode",
                    false,
                    void 0,
                    "U"
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "屏蔽-视频区域内",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                text: AutoOpenOrClose.text,
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】顶栏信息",
                    "live-shieldTopToolBarInfo",
                    false,
                    void 0,
                    "屏蔽元素，包括直播作者、右侧的礼物展馆"
                  ),
                  UISwitch(
                    "【屏蔽】底部的礼物栏",
                    "live-shieldGiftColumn",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】礼物特效",
                    "live-shieldGiftEffects",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】弹幕",
                    "live-shieldDanmuku",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】小黄车",
                    "live-shielYellowCar",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽-聊天室",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                text: AutoOpenOrClose.text,
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】聊天室",
                    "live-shieldChatRoom",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】贵宾席",
                    "live-shielChatRoomVipSeats",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】用户等级图标",
                    "dy-live-shieldUserLevelIcon",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】VIP图标",
                    "dy-live-shieldUserVIPIcon",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】粉丝牌",
                    "dy-live-shieldUserFansIcon",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】信息播报",
                    "dy-live-shieldMessage",
                    false,
                    void 0,
                    "底部滚动播报的的xxx来了，xxx给主播点赞"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const DouYinUtils = {
    /**
     * 判断是否是竖屏
     *
     * window.screen.orientation.type
     * + landscape-primary 横屏
     * + portrait-primary 竖屏
     */
    isVerticalScreen() {
      return !window.screen.orientation.type.includes("landscape");
    }
  };
  const MobileCSS$1 = '/* 去除顶部的padding距离 */\r\n#douyin-right-container {\r\n	padding-top: 0;\r\n}\r\n/* 放大放大顶部的综合、视频、用户等header的宽度 */\r\n#search-content-area > div > div:nth-child(1) > div:nth-child(1) {\r\n	width: 100vw;\r\n}\r\n/* 放大顶部的综合、视频、用户等header */\r\n#search-content-area > div > div:nth-child(1) > div:nth-child(1) > div {\r\n	transform: scale(0.8);\r\n}\r\n/* 视频宽度 */\r\nul[data-e2e="scroll-list"] {\r\n	padding: 0px 10px;\r\n}\r\n#sliderVideo {\r\n	width: -webkit-fill-available;\r\n}\r\n/* 距离是顶部导航栏的高度 */\r\n#search-content-area {\r\n	margin-top: 65px;\r\n}\r\n/* 调整视频列表的宽度 */\r\n@media screen and (max-width: 550px) {\r\n	#sliderVideo {\r\n		width: 100%;\r\n	}\r\n	/* 调整顶部搜索框的宽度 */\r\n	#component-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]) {\r\n		width: -webkit-fill-available;\r\n		padding-right: 0;\r\n	}\r\n}\r\n';
  const DouYinSearchHideElement = {
    init() {
      PopsPanel.execMenuOnce("douyin-search-shieldReleatedSearches", () => {
        return this.shieldReleatedSearches();
      });
    },
    /**
     * 【屏蔽】相关搜索
     */
    shieldReleatedSearches() {
      log.info("【屏蔽】相关搜索");
      return [
        CommonUtil.addBlockCSS("#search-content-area > div > div:nth-child(2)"),
        addStyle(
          /*css*/
          `
			#search-content-area > div > div:nth-child(1) > div:nth-child(1){
				width: 100vw;
			}`
        )
      ];
    }
  };
  const DouYinElement = {
    /**
     * 观察 #slidelist的加载每条视频
     * @param callback
     */
    watchVideDataListChange(callback) {
      let $os = null;
      domUtils.ready(() => {
        utils.waitAnyNode([
          "#slidelist",
          // 搜索页面的↓搜索结果列表
          '#search-content-area ul[data-e2e="scroll-list"]'
        ]).then(($ele) => {
          log.info(`启用观察器观察加载的视频`);
          utils.mutationObserver($ele, {
            config: {
              childList: true,
              subtree: true
            },
            callback: (mutations, observer) => {
              if (!$os) {
                $os = this.getOSElement();
              }
              if (!$os) {
                log.error("watchVideDataListChange：获取osElement失败");
                return;
              }
              callback($os, observer);
            },
            immediate: true
          });
        });
      });
    },
    getOSElement() {
      return document.querySelector("#root div[class*='-os']") || document.querySelector("#douyin-right-container");
    }
  };
  class DouYinVideoFilter {
    constructor(config) {
      /** 存储的键 */
      __publicField(this, "key");
      __publicField(this, "$data", {
        __rule: null,
        /**
         * 解析出的规则
         */
        get rule() {
          if (this.__rule == null) {
            this.__rule = new utils.Dictionary();
          }
          return this.__rule;
        },
        /**
         * 多组规则
         */
        moreRule: []
      });
      __publicField(this, "$flag", {
        /** 是否屏蔽在直播 */
        isBlockLiveVideo: false,
        /** 是否屏蔽广告 */
        isBlockAdsVideo: false
      });
      this.key = config.key;
      this.$flag.isBlockLiveVideo = Boolean(config.isBlockLiveVideo);
      this.$flag.isBlockAdsVideo = Boolean(config.isBlockAdsVideo);
      this.initLocalRule();
    }
    /**
     * 根据视频信息，判断是否需要屏蔽
     */
    checkFilterWithRule(details) {
      if (details.videoInfoValue == null) {
        return false;
      }
      if (details.ruleValue == null) {
        return false;
      }
      if (typeof details.videoInfoValue === "string") {
        if (Boolean(details.videoInfoValue.match(details.ruleValue))) {
          return true;
        }
      } else if (typeof details.videoInfoValue === "object" && Array.isArray(details.videoInfoValue)) {
        let findValue = details.videoInfoValue.find(
          (awemeInfoDictValue) => Boolean(awemeInfoDictValue.match(details.ruleValue))
        );
        if (findValue) {
          return true;
        }
      } else if (typeof details.videoInfoValue === "number" && typeof details.ruleValue === "string") {
        let compareNumberMatch = details.ruleValue.match(/(\d+)/);
        if (!compareNumberMatch) {
          log.warn(["过滤器-解析比较大小的数字失败: ", details]);
          return false;
        }
        let compareNumber = Number(compareNumberMatch[1]);
        if (details.ruleValue.startsWith(">")) {
          if (details.ruleValue.startsWith(">=") && details.videoInfoValue >= compareNumber) {
            return true;
          } else if (details.videoInfoValue > compareNumber) {
            return true;
          }
        } else if (details.ruleValue.startsWith("<")) {
          if (details.ruleValue.startsWith("<=") && details.videoInfoValue <= compareNumber) {
            return true;
          } else if (details.videoInfoValue < compareNumber) {
            return true;
          }
        } else if (details.ruleKey.startsWith("=")) {
          if (details.videoInfoValue === compareNumber) {
            return true;
          }
        } else {
          log.warn(["过滤器-自定义屏蔽-未经允许的比较符号: ", details]);
          return false;
        }
      }
      return false;
    }
    /**
     * 检测视频是否可以屏蔽，可以屏蔽返回true
     * @param awemeInfo 视频信息结构
     */
    checkAwemeInfoIsFilter(awemeInfo) {
      let awemeInfoTagDict = this.getAwemeInfoDictData(awemeInfo, true);
      let flag = false;
      if (!flag) {
        if (this.$flag.isBlockLiveVideo && awemeInfoTagDict.isLive) {
          log.success("过滤器-屏蔽直播");
          flag = true;
        }
      }
      if (!flag) {
        if (this.$flag.isBlockAdsVideo && awemeInfoTagDict.isAds) {
          log.success("过滤器-屏蔽广告");
          flag = true;
        }
      }
      if (!flag) {
        for (const [ruleKey, ruleValue] of this.$data.rule.entries()) {
          if (!Reflect.has(awemeInfoTagDict, ruleKey)) {
            continue;
          }
          let tagKey = ruleKey;
          let tagValue = awemeInfoTagDict[tagKey];
          let details = {
            videoInfoKey: tagKey,
            videoInfoValue: tagValue,
            ruleKey,
            ruleValue
          };
          let checkFlag = this.checkFilterWithRule(details);
          if (checkFlag) {
            flag = true;
            log.success(["过滤器-自定义屏蔽: ", details]);
            break;
          }
        }
      }
      if (!flag) {
        for (const rule of this.$data.moreRule) {
          let moreRuleFlag = true;
          for (const [ruleKey, ruleValue] of Object.entries(rule)) {
            if (!Reflect.has(awemeInfoTagDict, ruleKey)) {
              moreRuleFlag = false;
              break;
            }
            let tagKey = ruleKey;
            let tagValue = awemeInfoTagDict[tagKey];
            let details = {
              videoInfoKey: tagKey,
              videoInfoValue: tagValue,
              ruleKey,
              ruleValue
            };
            let checkFlag = this.checkFilterWithRule(details);
            if (!checkFlag) {
              moreRuleFlag = false;
              break;
            }
          }
          if (moreRuleFlag) {
            flag = true;
            log.success([
              "多组过滤器-自定义屏蔽: ",
              rule,
              this.getAwemeInfoDictData(awemeInfo)
            ]);
            break;
          }
        }
      }
      return flag;
    }
    /**
     * 解析awemeInfo转为规则过滤的字典
     * @param awemeInfo
     * @param showLog 是否显示日志输出
     */
    getAwemeInfoDictData(awemeInfo, showLog = false) {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      let nickname = (_b = (_a2 = awemeInfo == null ? void 0 : awemeInfo["authorInfo"]) == null ? void 0 : _a2["nickname"]) == null ? void 0 : _b.toString();
      let uid = (_d = (_c = awemeInfo == null ? void 0 : awemeInfo["authorInfo"]) == null ? void 0 : _c["uid"]) == null ? void 0 : _d.toString();
      let desc = (_e = awemeInfo == null ? void 0 : awemeInfo["desc"]) == null ? void 0 : _e.toString();
      let collectCount = (_f = awemeInfo == null ? void 0 : awemeInfo["stats"]) == null ? void 0 : _f["collectCount"];
      let commentCount = (_g = awemeInfo == null ? void 0 : awemeInfo["stats"]) == null ? void 0 : _g["commentCount"];
      let diggCount = (_h = awemeInfo == null ? void 0 : awemeInfo["stats"]) == null ? void 0 : _h["diggCount"];
      let shareCount = (_i = awemeInfo == null ? void 0 : awemeInfo["stats"]) == null ? void 0 : _i["shareCount"];
      let textExtra = [];
      let isLive = false;
      let isAds = false;
      if (typeof (awemeInfo == null ? void 0 : awemeInfo["textExtra"]) === "object" && Array.isArray(awemeInfo == null ? void 0 : awemeInfo["textExtra"])) {
        (_j = awemeInfo == null ? void 0 : awemeInfo["textExtra"]) == null ? void 0 : _j.forEach((item) => {
          textExtra.push(item["hashtagName"]);
        });
      }
      let videoTag = [];
      if (typeof (awemeInfo == null ? void 0 : awemeInfo["videoTag"]) === "object" && Array.isArray(awemeInfo == null ? void 0 : awemeInfo["videoTag"])) {
        awemeInfo == null ? void 0 : awemeInfo["videoTag"].forEach((item) => {
          videoTag.push(item["tagName"]);
        });
      }
      if (typeof awemeInfo["cellRoom"] === "object") {
        isLive = true;
        if (showLog) {
          log.success("直播间：cellRoom is not null");
        }
      }
      if (awemeInfo["isAds"]) {
        isAds = true;
        if (showLog) {
          log.success("广告：isAds is true");
        }
      } else if (typeof awemeInfo["rawAdData"] === "string" && utils.isNotNull(awemeInfo["rawAdData"])) {
        isAds = true;
        if (showLog) {
          log.success("广告：rawAdData is not null");
        }
      } else if ((_l = (_k = awemeInfo["webRawData"]) == null ? void 0 : _k["brandAd"]) == null ? void 0 : _l["is_ad"]) {
        isAds = true;
        if (showLog) {
          log.success("广告：webRawData.brandAd.is_ad is true");
        }
      } else if ((_n = (_m = awemeInfo["webRawData"]) == null ? void 0 : _m["insertInfo"]) == null ? void 0 : _n["is_ad"]) {
        isAds = true;
        if (showLog) {
          log.success("广告：webRawData.insertInfo.is_ad is true");
        }
      }
      return {
        nickname,
        uid,
        desc,
        textExtra,
        videoTag,
        collectCount,
        commentCount,
        diggCount,
        shareCount,
        isLive,
        isAds
      };
    }
    /**
     * 解析并初始化自定义规则
     */
    initLocalRule() {
      let localRule = this.get().trim();
      let localRuleSplit = localRule.split("\n");
      this.$data.rule.clear();
      this.$data.moreRule = [];
      localRuleSplit.forEach((item) => {
        if (utils.isNull(item)) {
          return;
        }
        let trimItem = item.trim();
        let itemSplit = trimItem.split("##");
        if (itemSplit.length < 2) {
          return;
        }
        let keyName = itemSplit[0];
        itemSplit.shift();
        if (keyName === "more") {
          let keyValue = itemSplit.join("##");
          let moreItemSplit = keyValue.split("##");
          let moreRule = {};
          for (let index = 0; index < moreItemSplit.length; index += 2) {
            let ruleKey = moreItemSplit[index];
            let ruleValue = moreItemSplit[index + 1];
            try {
              if (ruleValue.match(/^>|<|=/g)) {
                Reflect.set(moreRule, ruleKey, ruleValue.trim());
              } else {
                let regExpKeyValue = new RegExp(ruleValue, "g");
                Reflect.set(moreRule, ruleKey, regExpKeyValue);
              }
            } catch (error) {
              log.error(["多组-自定义视频过滤规则-正则解析错误：" + error]);
              log.error("多组-错误的规则：" + item);
            }
          }
          this.$data.moreRule.push(moreRule);
        } else {
          let keyValue = itemSplit.join("");
          try {
            if (keyValue.match(/^>|<|=/g)) {
              this.$data.rule.set(keyName, keyValue.trim());
            } else {
              let regExpKeyValue = new RegExp(keyValue, "g");
              this.$data.rule.set(keyName, regExpKeyValue);
            }
          } catch (error) {
            log.error(["自定义视频过滤规则-正则解析错误：" + error]);
            log.error("错误的规则：" + item);
          }
        }
      });
    }
    /**
     * 更新规则
     */
    updateRule(ruleText) {
      ruleText = ruleText.trim();
      if (ruleText == "") {
        return;
      }
      let localRule = this.get().trim();
      localRule = localRule + "\n" + ruleText;
      this.set(localRule);
      this.initLocalRule();
    }
    set(value) {
      _GM_setValue(this.key, value);
    }
    get() {
      return _GM_getValue(this.key, "");
    }
    /**
     * 清空存储的值
     */
    clear() {
      this.set("");
    }
    /**
     * 销毁存储的值
     */
    destory() {
      _GM_deleteValue(this.key);
    }
  }
  const DouYinSearchFilter = {
    __videoFilter: null,
    get videoFilter() {
      if (this.__videoFilter == null) {
        const KEY2 = "douyin-search-shield-rule";
        const isBlockLiveVideo = PopsPanel.getValue(
          "search-shieldVideo-live"
        );
        const isBlockAdsVideo = PopsPanel.getValue(
          "search-shieldVideo-ads"
        );
        this.__videoFilter = new DouYinVideoFilter({
          key: KEY2,
          isBlockLiveVideo,
          isBlockAdsVideo
        });
      }
      return this.__videoFilter;
    },
    init() {
      DouYinElement.watchVideDataListChange(
        utils.debounce((osElement) => {
          var _a2, _b, _c, _d;
          let $searchContentAreaScrollList = Array.from(
            document.querySelectorAll(
              '#search-content-area ul[data-e2e="scroll-list"] li'
            )
          );
          if (!$searchContentAreaScrollList.length) {
            log.error("未获取到搜索视频列表元素");
            return;
          }
          for (let index = 0; index < $searchContentAreaScrollList.length; index++) {
            const $searchContentAreaScrollItem = $searchContentAreaScrollList[index];
            let reactProps = (_a2 = utils.getReactObj(
              $searchContentAreaScrollItem
            )) == null ? void 0 : _a2.reactProps;
            if (reactProps == null) {
              log.error([
                "元素上不存在reactProps属性",
                $searchContentAreaScrollItem
              ]);
              return;
            }
            let awemeInfo = (_d = (_c = (_b = reactProps == null ? void 0 : reactProps.children) == null ? void 0 : _b.props) == null ? void 0 : _c.data) == null ? void 0 : _d.awemeInfo;
            if (awemeInfo == null) {
              log.error([
                "元素上不存在awemeInfo属性",
                $searchContentAreaScrollItem
              ]);
              return;
            }
            let flag = this.videoFilter.checkAwemeInfoIsFilter(awemeInfo);
            if (flag) {
              $searchContentAreaScrollItem.remove();
              index--;
            }
          }
        }, 50)
      );
    },
    get() {
      return this.videoFilter.get();
    },
    set(value) {
      this.videoFilter.set(value);
    }
  };
  const DouYinSearch = {
    init() {
      DouYinSearchHideElement.init();
      PopsPanel.execMenuOnce("search-shieldVideo", () => {
        DouYinSearchFilter.init();
      });
      PopsPanel.execMenuOnce("dy-search-disableClickToEnterFullScreen", () => {
        this.disableClickToEnterFullScreen();
      });
      PopsPanel.execMenuOnce(
        "live-setSearchResultFilterWithVideoStyle",
        (value) => {
          return this.setSearchResultFilterWithVideoStyle(value);
        }
      );
    },
    /**
     * 手机模式
     * (由通用统一调用，勿放在本函数的init内)
     */
    mobileMode() {
      log.info("搜索-手机模式");
      let result = [];
      result.push(addStyle(MobileCSS$1));
      result.push(
        addStyle(
          /*css*/
          `
			@media screen and (max-width: 550px){
				div#search-body-container {
					display: flex;
				}
				div#search-body-container #component-Navigation {
					flex: 0;
				}
				div#search-body-container #douyin-right-container {
					flex: 1 auto;
				}
				div#search-body-container #douyin-right-container #search-content-area > div {
					width: 100% !important;
				}
				div#search-body-container #douyin-right-container #search-content-area > div > div > div {
					width: 100% !important;
					margin-left: 0px;
					margin-right: 0px;
					padding-left: 0px;
					padding-right: 0px;
				}
				/* 上面的搜索结果筛选 */
				#search-content-area > div >div> div:first-child > div:first-child > div:last-child{
					overflow: auto;
					text-wrap: nowrap;
					height: auto;
				}
				/* 视频右侧的TA的作品↓ */
				#searchSideCard{
					width: unset !important;
				}
				#searchSideCard > div{
					padding: 0px !important;
				}
				#searchSideCard > div:has(>div+svg),
				#searchSideCard ul[data-e2e="scroll-list"]{
					padding: 0px 10px !important;
				}
				#searchSideCard ul[data-e2e="scroll-list"] .video-playing-item > div{
					width: auto;
				}
				/* 视频右侧的TA的作品↑ */
				/* 悬浮的筛选 */
				#douyin-right-container #douyin-header{
        			background-color: var(--color-bg-b0);
				}
				xg-right-grid{
					margin: auto !important;
				}
			}
		`
        )
      );
      utils.waitNode("#relatedVideoCard").then(($relatedVideoCard) => {
        log.info("评论区展开的className：" + $relatedVideoCard.className);
        result.push(
          addStyle(
            /*css*/
            `
					html[data-vertical-screen]
						#sliderVideo[data-e2e="feed-active-video"]
						#videoSideBar:has(#relatedVideoCard[class="${$relatedVideoCard.className}"]) {
							width: 100vw !important;
					}`
          )
        );
      });
    },
    /**
     * 禁止点击视频区域进入全屏
     */
    disableClickToEnterFullScreen() {
      log.info("搜索-禁止点击视频区域进入全屏");
      domUtils.on(
        document,
        "click",
        ".focusPanel",
        (event) => {
          var _a2;
          utils.preventEvent(event);
          let $click = event.target;
          let $parent = (_a2 = $click.parentElement) == null ? void 0 : _a2.parentElement;
          let $video = $parent.querySelector("video");
          if ($video) {
            if ($video.paused) {
              log.info(".focusPanel：播放视频");
              $video.play();
            } else {
              log.info(".focusPanel：视频暂停");
              $video.pause();
            }
          } else {
            log.error(".focusPanel未找到<video>标签");
            Qmsg.error(".focusPanel未找到<video>标签", {
              isHTML: false
            });
          }
        },
        {
          capture: true
        }
      );
      domUtils.on(
        document,
        "click",
        "xg-video-container",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let $video = $click.querySelector("video");
          if ($video) {
            if ($video.paused) {
              log.info("xg-video-container：播放视频");
              $video.play();
            } else {
              log.info("xg-video-container：视频暂停");
              $video.pause();
            }
          } else {
            log.error("xg-video-container未找到<video>标签");
            Qmsg.error("xg-video-container未找到<video>标签", {
              isHTML: false
            });
          }
        },
        {
          capture: true
        }
      );
    },
    /**
     * 设置搜索结果-按视频过滤的显示样式
     * @param lineMode 单列/双列
     */
    setSearchResultFilterWithVideoStyle(lineMode = "one") {
      log.info(`设置搜索结果-按视频过滤的显示样式：${lineMode}`);
      if (lineMode === "one") {
        return addStyle(
          /*css*/
          `
			@media screen and (max-width: 800px){
				.search-horizontal-new-layout ul[data-e2e="scroll-list"] li{
					width: calc(100% - 21px);
				}
			}
			`
        );
      } else if (lineMode === "double") {
        return addStyle(
          /*css*/
          `	
			@media screen and (max-width: 800px){
				.search-horizontal-new-layout ul[data-e2e="scroll-list"] li{
					width: calc(50% - 21px);
				}
			}
			`
        );
      }
    }
  };
  const url = globalThis.location.href;
  const urlObj = new URL(url);
  const host = urlObj.hostname;
  urlObj.pathname;
  urlObj.searchParams;
  const DouYinRouter = {
    /** 直播 */
    isLive() {
      return host === "live.douyin.com";
    },
    /**
     * 是否是抖音主站
     */
    isIndex() {
      return host === "www.douyin.com";
    },
    /** 视频 */
    isVideo() {
      return this.isIndex();
    },
    /** 搜索 */
    isSearch() {
      return this.isIndex() && window.location.pathname.startsWith("/search");
    },
    /**
     * 用户主页
     */
    isUser() {
      return this.isIndex() && window.location.pathname.startsWith("/user");
    }
  };
  const MobileCSS = '/* 右侧工具栏放大 */\r\n.basePlayerContainer .positionBox {\r\n	bottom: 80px !important;\r\n	padding-right: 5px !important;\r\n	scale: unset !important;\r\n	transform: scale3d(1.12, 1.12, 1.12) !important;\r\n}\r\n/* 右侧工具栏的svg再放大 */\r\n.basePlayerContainer .positionBox svg {\r\n	transform: scale3d(1.12, 1.12, 1.12);\r\n}\r\n/* 重置关注按钮的scale */\r\n.basePlayerContainer\r\n	.positionBox\r\n	.dy-tip-container\r\n	div[data-e2e="feed-follow-icon"]\r\n	svg {\r\n	scale: unset !important;\r\n}\r\n/* 设备处于横向方向，即宽度大于高度。 */\r\n@media screen and (orientation: landscape) {\r\n	/* 右侧工具栏放大 */\r\n	.basePlayerContainer .positionBox {\r\n		/*transform: scale(0.95) !important;\r\n		bottom: 42px !important;*/\r\n		padding-right: 10px !important;\r\n	}\r\n}\r\n/* 该设备是纵向的，即高度大于或等于宽度 */\r\n@media screen and (orientation: portrait) {\r\n	/* /video/xxx页面 */\r\n	/* 点赞、评论、分享偏移 */\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		.basePlayerContainer\r\n		.positionBox {\r\n		padding-right: 30px !important;\r\n	}\r\n	/* 底部工具栏右侧的按钮 */\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		.xgplayer.xgplayer-pc\r\n		.xg-right-grid {\r\n		margin-right: 35px !important;\r\n	}\r\n	/* 评论区全屏 */\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		> div:has(.comment-mainContent[data-e2e="comment-list"]),\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		> div\r\n		> div:has(.comment-mainContent[data-e2e="comment-list"]) {\r\n		width: 100vw !important;\r\n	}\r\n}\r\n\r\n/* 调整视频列表的宽度 */\r\n@media screen and (max-width: 550px) {\r\n	#slidelist {\r\n		width: 100vw;\r\n		height: 100vh;\r\n	}\r\n	/* 调整顶部搜索框的宽度 */\r\n	#douyin-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]) {\r\n		width: 150px;\r\n		padding-right: 0;\r\n		max-width: unset;\r\n	}\r\n	/* 搜索框获取焦点时自动放大宽度 */\r\n	#douyin-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]:focus) {\r\n		width: 100vw;\r\n		width: 100dvw;\r\n	}\r\n	/* 去除设置min-width超出浏览器宽度的问题 */\r\n	body {\r\n		min-width: 100% !important;\r\n	}\r\n	/* 去除设置width导致顶部工具栏超出浏览器宽度的问题 */\r\n	#douyin-right-container #douyin-header {\r\n		width: 100%;\r\n	}\r\n	/* 去除设置 */\r\n	#douyin-right-container #douyin-header > div[data-click="doubleClick"] {\r\n		min-width: 100%;\r\n	}\r\n}\r\n';
  const DouYinVideoCommentBlockElement = {
    init() {
      PopsPanel.execMenuOnce("dy-video-shieldUserCommentToolBar", () => {
        return this.shieldUserCommentToolBar();
      });
      PopsPanel.execMenuOnce(
        "dy-video-shieldUserCommentEveryOneAllSearch",
        () => {
          return this.shieldUserCommentEveryOneAllSearch();
        }
      );
    },
    /**
     * 【屏蔽】评论工具栏
     */
    shieldUserCommentToolBar() {
      log.info("【屏蔽】评论工具栏");
      return [CommonUtil.addBlockCSS(".comment-input-container")];
    },
    /**
     * 【屏蔽】大家都在搜
     */
    shieldUserCommentEveryOneAllSearch() {
      log.info("【屏蔽】大家都在搜");
      return [CommonUtil.addBlockCSS(".comment-header-with-search")];
    }
  };
  const DouYinVideoBlockElement_BottomToolbar = {
    init() {
      PopsPanel.execMenuOnce("shieldBottomVideoToolBar", () => {
        return this.shieldBottomVideoToolBar();
      });
      PopsPanel.execMenuOnce("dy-video-bottom-shieldVideoInfoWrap", () => {
        return this.shieldVideoInfoWrap();
      });
      PopsPanel.execMenuOnce("shieldBottomVideoToolbarDanmuContainer", () => {
        return this.shieldBottomVideoToolbarDanmuContainer();
      });
    },
    /**
     * 【屏蔽】底部视频工具栏
     */
    shieldBottomVideoToolBar() {
      log.info("【屏蔽】底部视频工具栏");
      return [
        CommonUtil.addBlockCSS("xg-controls.xgplayer-controls"),
        // 修复底部工具栏因屏蔽导致的空白区域
        addStyle(
          /*css*/
          `
			#sliderVideo[data-e2e="feed-active-video"] div:has( > div > #video-info-wrap),
			div:has( > div > pace-island > #video-info-wrap ),
			xg-video-container.xg-video-container{
				bottom: 0 !important;
			}`
        )
      ];
    },
    /**
     * 【屏蔽】视频信息
     */
    shieldVideoInfoWrap() {
      log.info("【屏蔽】视频信息");
      return [CommonUtil.addBlockCSS("#video-info-wrap")];
    },
    /**
     * 【屏蔽】底部视频工具栏的弹幕容器
     */
    shieldBottomVideoToolbarDanmuContainer() {
      log.info("【屏蔽】底部视频工具栏的弹幕容器");
      return [
        CommonUtil.addBlockCSS(
          'xg-controls xg-inner-controls .danmakuContainer[data-e2e="danmaku-container"]'
        )
      ];
    }
  };
  const DouYinVideoBlockElement_RightToolbar = {
    init() {
      PopsPanel.execMenuOnce("shieldPlaySwitchButton", () => {
        return this.shieldPlaySwitchButton();
      });
      PopsPanel.execMenuOnce("shieldAuthorAvatar", () => {
        return this.shieldAuthorAvatar();
      });
      PopsPanel.execMenuOnce("shieldLikeButton", () => {
        return this.shieldLikeButton();
      });
      PopsPanel.execMenuOnce("shieldCommentButton", () => {
        return this.shieldCommentButton();
      });
      PopsPanel.execMenuOnce("shieldCollectionButton", () => {
        return this.shieldCollectionButton();
      });
      PopsPanel.execMenuOnce("shieldSharenButton", () => {
        return this.shieldSharenButton();
      });
      PopsPanel.execMenuOnce("shieldRelatedRecommendationsButton", () => {
        return this.shieldRelatedRecommendationsButton();
      });
      PopsPanel.execMenuOnce("shieldMoreButton", () => {
        return this.shieldMoreButton();
      });
    },
    /**
     * 【屏蔽】切换播放
     */
    shieldPlaySwitchButton() {
      log.info("【屏蔽】切换播放");
      return [
        CommonUtil.addBlockCSS(
          '.positionBox  .xgplayer-playswitch[data-state="normal"]',
          "div.xgplayer-playswitch",
          /* 全屏下的右侧的切换播放 */
          ".xgplayer-playswitch"
        ),
        addStyle(
          /*css*/
          `
			div[data-e2e="slideList"]{
				/* 修复屏蔽后的视频宽度占据 */
				padding: 0px !important;
			}
			`
        )
      ];
    },
    /**
     * 【屏蔽】作者头像
     */
    shieldAuthorAvatar() {
      log.info("【屏蔽】作者头像");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-avatar"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[aria-describedby]:has([data-e2e="video-avatar"])'
        )
      ];
    },
    /**
     * 【屏蔽】点赞
     */
    shieldLikeButton() {
      log.info("【屏蔽】点赞");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-player-digg"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[aria-describedby]:has([data-e2e="video-player-digg"])'
        )
      ];
    },
    /**
     * 【屏蔽】评论
     */
    shieldCommentButton() {
      log.info("【屏蔽】评论");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="feed-comment-icon"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[aria-describedby]:has([data-e2e="feed-comment-icon"])'
        )
      ];
    },
    /**
     * 【屏蔽】收藏
     */
    shieldCollectionButton() {
      log.info("【屏蔽】收藏");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-player-collect"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[data-e2e="video-player-collect"][data-e2e-state="video-player-no-collect"]'
        )
      ];
    },
    /**
     * 【屏蔽】分享
     */
    shieldSharenButton() {
      log.info("【屏蔽】分享");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-player-share"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div:has(>div[data-e2e="video-player-share"])'
        )
      ];
    },
    /**
     * 【屏蔽】看相关
     */
    shieldRelatedRecommendationsButton() {
      log.info("【屏蔽】看相关");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])',
          'div.dy-tip-container:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[aria-describedby]:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])',
          // 2024.7.15
          '.basePlayerContainer div[aria-describedby]:has(path[d="M14 8a8 8 0 0 0-8 8v4a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8v-4a8 8 0 0 0-8-8h-8zm8.5 10.866a1 1 0 0 0 0-1.732l-6-3.464a1 1 0 0 0-1.5.866v6.928a1 1 0 0 0 1.5.866l6-3.464z"])',
          // 2024.7.16 移动端的屏蔽规则
          '.basePlayerContainer div[aria-describedby]:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])'
        ),
        addStyle(
          /*css*/
          `
				/* 修复分享的悬浮框距离底部的高度 */
				div[data-e2e="video-share-container"] > div:first-child{
					bottom: 0px !important;
				}
			`
        )
      ];
    },
    /**
     * 【屏蔽】更多
     */
    shieldMoreButton() {
      log.info("【屏蔽】更多");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-play-more"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[data-e2e="video-play-more"]'
        ),
        addStyle(
          /*css*/
          `
				/* 修复分享的悬浮框距离底部的高度 */
				div[data-e2e="video-share-container"] > div:first-child{
					bottom: 0px !important;
				}
			`
        )
      ];
    }
  };
  const DouYinVideoBlockElement = {
    init() {
      PopsPanel.execMenuOnce("shieldRightExpandCommentButton", () => {
        return this.shieldRightExpandCommentButton();
      });
      PopsPanel.execMenuOnce("shieldSearchFloatingBar", () => {
        return this.shieldSearchFloatingBar();
      });
      PopsPanel.execMenuOnce("shieldCloseFullScreenButton", () => {
        return this.shieldCloseFullScreenButton();
      });
      PopsPanel.execMenuOnce("dy-video-blockShopInfo", () => {
        return this.blockShopInfo();
      });
      DouYinVideoBlockElement_BottomToolbar.init();
      DouYinVideoBlockElement_RightToolbar.init();
      DouYinVideoCommentBlockElement.init();
    },
    /**
     * 【屏蔽】右侧的展开评论按钮
     */
    shieldRightExpandCommentButton() {
      log.info("【屏蔽】右侧的展开评论按钮");
      return [
        CommonUtil.addBlockCSS(
          '#sliderVideo[data-e2e="feed-active-video"] > div > div > button[type="button"]',
          '.playerContainer button[type=button] svg > g[filter] > path[d="M21.316 29.73a1.393 1.393 0 01-1.97 0l-5.056-5.055a1.393 1.393 0 010-1.97l.012-.011 5.044-5.045a1.393 1.393 0 011.97 1.97l-4.07 4.071 4.07 4.071a1.393 1.393 0 010 1.97z"]'
        ),
        addStyle(
          /*css*/
          `
			.basePlayerContainer .positionBox{
				padding-right: 20px !important;
			}`
        )
      ];
    },
    /**
     * 左上角的鼠标的快捷搜索热点的悬浮栏
     * 【屏蔽】搜索悬浮栏
     */
    shieldSearchFloatingBar() {
      log.info("【屏蔽】搜索悬浮栏");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          /* 看相关页面的 */
          "#slideMode + div",
          // 2024.7.16
          '.playerContainer .slider-video>div>div:has([data-e2e="searchbar-button"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            // 2024.7.30
            '#douyin-right-container> div>div>div> div:has( div> input[data-e2e="searchbar-input"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】网页全屏关闭按钮
     */
    shieldCloseFullScreenButton() {
      log.info("【屏蔽】网页全屏关闭按钮");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          // 2024.7.16
          '.playerContainer .slider-video>div>div:has(path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-right-container div>div:has(>svg>path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】购物信息
     */
    blockShopInfo() {
      log.info(`【屏蔽】购物信息`);
      return CommonUtil.addBlockCSS(`.xgplayer-shop-anchor`);
    }
  };
  const DouYinRecommendVideo = {
    /**
     * 获取当前播放的视频信息
     */
    getCurrentActiveVideoInfo() {
      var _a2, _b;
      let $currentActiveVideo = document.querySelector(
        `#sliderVideo[data-e2e="feed-active-video"] .basePlayerContainer`
      );
      if (!$currentActiveVideo) {
        log.error("未获取到当前播放的视频信息");
        return;
      }
      let { reactFiber } = utils.getReactObj($currentActiveVideo);
      if (reactFiber == null) {
        return;
      }
      let awemeInfo = (_b = (_a2 = reactFiber == null ? void 0 : reactFiber.return) == null ? void 0 : _a2.memoizedProps) == null ? void 0 : _b.awemeInfo;
      return awemeInfo;
    },
    /**
     * 获取当前所有视频的信息
     */
    getAllVideoAwemeInfo() {
      var _a2;
      let $videoList = document.querySelector(
        `#slidelist div[data-e2e="slideList"]`
      );
      if ($videoList == null) {
        log.error("未获取到视频列表元素");
        return [];
      }
      let reactFiber = (_a2 = utils.getReactObj($videoList)) == null ? void 0 : _a2.reactFiber;
      if (reactFiber == null) {
        log.error(["元素上不存在reactFiber属性", $videoList]);
        return [];
      }
      let awemeInfoList = reactFiber == null ? void 0 : reactFiber.return.memoizedProps.data;
      return awemeInfoList;
    }
  };
  const DouYinRecommendVideoFilter = {
    __videoFilter: null,
    get videoFilter() {
      if (this.__videoFilter == null) {
        const KEY2 = "douyin-shield-rule";
        const isBlockLiveVideo = PopsPanel.getValue("shieldVideo-live");
        const isBlockAdsVideo = PopsPanel.getValue("shieldVideo-ads");
        this.__videoFilter = new DouYinVideoFilter({
          key: KEY2,
          isBlockLiveVideo,
          isBlockAdsVideo
        });
      }
      return this.__videoFilter;
    },
    init() {
      let errorFindCount = 0;
      DouYinElement.watchVideDataListChange(
        utils.debounce((osElement, observer) => {
          let awemeInfoList = DouYinRecommendVideo.getAllVideoAwemeInfo();
          if (!awemeInfoList.length) {
            errorFindCount++;
            if (errorFindCount >= 50) {
              observer.disconnect();
              log.error("未获取到视频列表元素次数超过50次, 停止监听");
            }
            log.error("未获取到视频列表元素");
            return;
          }
          for (let index = 0; index < awemeInfoList.length; index++) {
            let awemeInfo = awemeInfoList[index];
            let flag = this.videoFilter.checkAwemeInfoIsFilter(awemeInfo);
            if (flag) {
              if (awemeInfoList.length === 1) {
                log.warn(
                  "检测到视频列表只剩最后一个，删除的话无法触发更新，暂不删除"
                );
                break;
              }
              awemeInfoList.splice(index, 1);
              index--;
            }
          }
        }, 50)
      );
    },
    get() {
      return this.videoFilter.get();
    },
    set(value) {
      return this.videoFilter.set(value);
    }
  };
  class GestureBack {
    constructor(config) {
      /**
       * 是否正在后退
       */
      __publicField(this, "isBacking", false);
      __publicField(this, "config");
      this.config = config;
      this.enterGestureBackMode.bind(this);
      this.quitGestureBackMode.bind(this);
      this.popStateEvent.bind(this);
      if (typeof this.config.backDelayTime !== "number" || isNaN(this.config.backDelayTime)) {
        this.config.backDelayTime = 150;
      }
      if (this.config.win == null) {
        this.config.win = self;
      }
    }
    /**
     * popstate事件函数
     * @param event
     */
    popStateEvent(event) {
      utils.preventEvent(event);
      if (this.isBacking) {
        return;
      }
      this.quitGestureBackMode(true);
    }
    /**
     * 进入手势模式
     */
    enterGestureBackMode() {
      log.success("进入手势模式");
      let pushUrl = this.config.hash;
      if (!pushUrl.startsWith("#")) {
        if (!pushUrl.startsWith("/")) {
          pushUrl = "/" + pushUrl;
        }
        pushUrl = "#" + pushUrl;
      }
      if (this.config.useUrl) {
        pushUrl = this.config.win.location.origin + this.config.win.location.pathname + this.config.win.location.search + pushUrl;
      }
      this.config.win.history.pushState({}, "", pushUrl);
      log.success("监听popstate事件");
      domUtils.on(this.config.win, "popstate", this.popStateEvent.bind(this), {
        capture: true
      });
    }
    /**
     * 退出手势模式
     * @param isUrlChange 是否是url改变触发的
     */
    async quitGestureBackMode(isUrlChange = false) {
      this.isBacking = true;
      log.success("退出手势模式");
      if (typeof this.config.beforeHistoryBackCallBack === "function") {
        this.config.beforeHistoryBackCallBack(isUrlChange);
      }
      let maxDate = Date.now() + 1e3 * 5;
      while (true) {
        if (Date.now() > maxDate) {
          log.error("未知情况，history.back()失败，无法退出手势模式");
          break;
        }
        if (this.config.win.location.hash.endsWith(this.config.hash)) {
          log.info("history.back()");
          this.config.win.history.back();
          await utils.sleep(this.config.backDelayTime || 150);
        } else {
          break;
        }
      }
      log.success("移除popstate事件");
      domUtils.off(this.config.win, "popstate", this.popStateEvent.bind(this), {
        capture: true
      });
      this.isBacking = false;
      if (typeof this.config.afterHistoryBackCallBack === "function") {
        this.config.afterHistoryBackCallBack(isUrlChange);
      }
    }
  }
  const DouYinGestureBackHashConfig = {
    /** 进入视频评论区 */
    videoCommentDrawer: "videoCommentDrawer"
  };
  const DouYinGestureBackClearHash = () => {
    let findValue = Object.values(DouYinGestureBackHashConfig).find((hash) => {
      return globalThis.location.hash.endsWith(hash);
    });
    if (findValue) {
      globalThis.location.hash = "";
      log.success(`发现残留的手势返回hash，已清理 ==> ` + findValue);
    }
  };
  const DouYinVideoBlockMouseHoverTip = {
    init() {
      DouYinVideoBlockMouseHoverTip_RightToolBar.init();
      DouYinVideoBlockMouseHoverTip_BottomToolBar.init();
    }
  };
  const DouYinVideoBlockMouseHoverTip_RightToolBar = {
    init() {
      PopsPanel.execMenuOnce(
        "dy-video-mouseHoverTip-rightToolBar-enterUserHome",
        () => {
          return this.blockEnterUserHomeMouseHoverTip();
        }
      );
      PopsPanel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-follow", () => {
        return this.blockFollowMouseHoverTip();
      });
      PopsPanel.execMenuOnce(
        "dy-video-mouseHoverTip-rightToolBar-addLike",
        () => {
          return this.blockAddLikeMouseHoverTip();
        }
      );
      PopsPanel.execMenuOnce(
        "dy-video-mouseHoverTip-rightToolBar-comment",
        () => {
          return this.blockCommentMouseHoverTip();
        }
      );
      PopsPanel.execMenuOnce(
        "dy-video-mouseHoverTip-rightToolBar-collect",
        () => {
          return this.blockCollectMouseHoverTip();
        }
      );
      PopsPanel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-share", () => {
        return this.blockShareMouseHoverTip();
      });
      PopsPanel.execMenuOnce(
        "dy-video-mouseHoverTip-rightToolBar-seeCorrelation",
        () => {
          return this.blockSeeCorrelationMouseHoverTip();
        }
      );
    },
    /**
     * 禁用进入作者主页按钮的悬浮提示
     */
    blockEnterUserHomeMouseHoverTip() {
      log.info(`禁用进入作者主页按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(
        ` div > div:has( >a[data-e2e="video-avatar"]) + .semi-portal`
      );
    },
    /**
     * 禁用关注按钮的悬浮提示
     */
    blockFollowMouseHoverTip() {
      log.info(`禁用关注按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(
        `div[data-e2e="feed-follow-icon"]  .semi-portal`
      );
    },
    /**
     * 禁用点赞按钮的悬浮提示
     */
    blockAddLikeMouseHoverTip() {
      log.info(`禁用点赞按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(
        `div[data-e2e="video-player-digg"] + .semi-portal`
      );
    },
    /**
     * 禁用评论按钮的悬浮提示
     */
    blockCommentMouseHoverTip() {
      log.info(`禁用评论按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(
        `div[data-e2e="feed-comment-icon"] + .semi-portal`
      );
    },
    /**
     * 禁用收藏按钮的悬浮提示
     */
    blockCollectMouseHoverTip() {
      log.info(`禁用收藏按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(
        `div[data-e2e="video-player-collect"] + .semi-always-dark`
      );
    },
    /**
     * 禁用分享按钮的悬浮提示
     */
    blockShareMouseHoverTip() {
      log.info(`禁用分享按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`div[data-e2e="video-share-container"]`);
    },
    /**
     * 禁用看相关推荐按钮的悬浮提示
     */
    blockSeeCorrelationMouseHoverTip() {
      log.info(`禁用看相关推荐按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(
        `div:has(+[data-e2e="video-play-more"]) .semi-portal`
      );
    }
  };
  const DouYinVideoBlockMouseHoverTip_BottomToolBar = {
    init() {
      PopsPanel.execMenuOnce(
        "dy-video-mouseHoverTip-bottomToolBar-automaticBroadcast",
        () => {
          return this.blockAutomaticBroadcast();
        }
      );
      PopsPanel.execMenuOnce(
        "dy-video-mouseHoverTip-bottomToolBar-clearScreen",
        () => {
          return this.blockClearScreenMouseHoverTip();
        }
      );
      PopsPanel.execMenuOnce(
        "dy-video-mouseHoverTip-bottomToolBar-watchLater",
        () => {
          return this.blockWatchLaterMouseHoverTip();
        }
      );
      PopsPanel.execMenuOnce(
        "dy-video-mouseHoverTip-bottomToolBar-pageFullScreen",
        () => {
          return this.blockPageFullScreenMouseHoverTip();
        }
      );
      PopsPanel.execMenuOnce(
        "dy-video-mouseHoverTip-bottomToolBar-fullScreen",
        () => {
          return this.blockFullScreenMouseHoverTip();
        }
      );
    },
    /**
     * 禁用自动连播按钮的悬浮提示
     */
    blockAutomaticBroadcast() {
      log.info(`禁用自动连播按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(
        `div[data-e2e="video-player-auto-play"] + .xgTips`
      );
    },
    /**
     * 禁用清屏按钮的悬浮提示
     */
    blockClearScreenMouseHoverTip() {
      log.info(`禁用清屏按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(
        `.xgplayer-immersive-switch-setting .xgTips`
      );
    },
    /**
     * 禁用稍后再看按钮的悬浮提示
     */
    blockWatchLaterMouseHoverTip() {
      log.info(`禁用稍后再看按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(
        `.xgplayer-watch-later .xgTips`,
        `.xgplayer-watch-later-item + .xgTips`
      );
    },
    /**
     * 禁用网页全屏按钮的悬浮提示
     */
    blockPageFullScreenMouseHoverTip() {
      log.info(`禁用网页全屏按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`.xgplayer-page-full-screen .xgTips`);
    },
    /**
     * 禁用全屏按钮的悬浮提示
     */
    blockFullScreenMouseHoverTip() {
      log.info(`禁用全屏按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`.xgplayer-fullscreen .xg-tips`);
    }
  };
  const DouYinVideo = {
    init() {
      DouYinVideoBlockElement.init();
      DouYinVideoShortcut.init();
      DouYinVideoBlockMouseHoverTip.init();
      if (!DouYinRouter.isSearch()) {
        PopsPanel.execMenuOnce("shieldVideo", () => {
          DouYinRecommendVideoFilter.init();
        });
      }
      PopsPanel.execMenuOnce("changeCommentToBottom", () => {
        DouYinVideo.changeCommentToBottom();
      });
      PopsPanel.execMenuOnce("fullScreen", () => {
        return this.fullScreen();
      });
      PopsPanel.execMenuOnce("parseVideo", () => {
        DouYinVideo.parseVideo();
      });
      PopsPanel.execInheritMenuOnce(
        "autoEnterElementFullScreen",
        "search-autoEnterElementFullScreen",
        () => {
          this.autoEnterElementFullScreen();
        },
        (mainValue, childValue) => {
          if (DouYinRouter.isSearch()) {
            if (mainValue) {
              if (childValue == 1) {
                return true;
              } else if (childValue == 0) {
                return false;
              } else ;
            }
          }
        }
      );
      PopsPanel.execMenuOnce("dy-video-doubleClickEnterElementFullScreen", () => {
        this.doubleClickEnterElementFullScreen();
      });
      PopsPanel.execMenu("dy-video-bgColor-enable", () => {
        PopsPanel.execMenuOnce(
          "dy-video-changeBackgroundColor",
          (value) => {
            return this.changeBackgroundColor(value);
          }
        );
      });
      PopsPanel.execMenuOnce("repairProgressBar", () => {
        PopsPanel.onceExec("repairProgressBar", () => {
          this.repairVideoProgressBar();
        });
      });
      PopsPanel.execMenuOnce("dy-video-gestureBackCloseComment", () => {
        this.gestureBackCloseComment();
      });
      domUtils.ready(() => {
        DouYinVideo.chooseVideoDefinition(
          PopsPanel.getValue("chooseVideoDefinition")
        );
        PopsPanel.execMenuOnce("mobileMode", () => {
          this.mobileMode();
          if (DouYinRouter.isSearch()) {
            DouYinSearch.mobileMode();
          }
        });
        PopsPanel.execMenuOnce("dy-video-titleInfoAutoHide", () => {
          this.titleInfoAutoHide();
        });
      });
    },
    /**
     * 全屏（沉浸模式）
     */
    fullScreen() {
      log.info("全屏");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          /* 右侧工具栏 */
          ".slider-video .positionBox",
          /* 中间底部的视频信息（描述、作者、话题等） */
          "#video-info-wrap",
          /* 中间底部的视频控制工具栏 */
          "xg-controls.xgplayer-controls"
        )
      );
      result.push(DouYinVideoBlockElement.shieldSearchFloatingBar());
      result.push(
        addStyle(
          /*css*/
          `
			/* 视频全屏 */
			xg-video-container.xg-video-container{
				bottom: 0px !important;
			}
        `
        )
      );
      return result;
    },
    /**
     * 自动进入网页全屏
     * @param [userKeyBoard=false] 是否使用键盘触发
     */
    autoEnterElementFullScreen(userKeyBoard = false) {
      if (userKeyBoard) {
        let keydownEvent = new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          key: "Y",
          code: "KeyY",
          keyCode: 89,
          which: 89
        });
        document.dispatchEvent(keydownEvent);
      } else {
        utils.waitNode(
          'xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon:has([d="M9.75 8.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2H9.75zM15 11.25h-3.75a1 1 0 0 0-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 0 1-1 1z"])'
        ).then((element) => {
          log.success("自动进入网页全屏");
          element.click();
        });
      }
    },
    /**
     * 双击进入网页全屏
     */
    doubleClickEnterElementFullScreen() {
      let isDouble = false;
      log.info("注册双击进入网页全屏事件");
      let selectorList = [".newVideoPlayer", "#sliderVideo"];
      selectorList.forEach((selector) => {
        domUtils.on(
          document,
          "click",
          selector,
          (event) => {
            if (isDouble) {
              isDouble = false;
              DouYinVideo.autoEnterElementFullScreen(true);
            } else {
              isDouble = true;
              setTimeout(() => {
                isDouble = false;
              }, 250);
            }
          }
        );
      });
    },
    /**
     * 评论区修改为底部
     */
    changeCommentToBottom() {
      log.info("评论区修改为底部");
      let ATTRIBUTE_KEY2 = "data-vertical-screen";
      function autoChangeCommentPosition() {
        if (DouYinUtils.isVerticalScreen()) {
          log.success("自动判断: 竖屏");
          document.documentElement.setAttribute(ATTRIBUTE_KEY2, "true");
        } else {
          log.success("自动判断: 横屏");
          document.documentElement.removeAttribute(ATTRIBUTE_KEY2);
        }
      }
      autoChangeCommentPosition();
      addStyle(
        /*css*/
        `
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e="feed-video"] #videoSideBar #relatedVideoCard,
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e="feed-video"] #videoSideCard #relatedVideoCard{
			display: none !important;
		}
		/* 左侧的视频宽度撑满 */
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e] .playerContainer,
		html[${ATTRIBUTE_KEY2}] #slideMode[data-e2e] .playerContainer{
			width: 100% !important;
		}
		/* 右侧的评论区宽度撑满，position使用absolute */
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
		html[${ATTRIBUTE_KEY2}] #slideMode[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e="feed-active-video"] #videoSideCard:has(#relatedVideoCard),
		html[${ATTRIBUTE_KEY2}] #slideMode[data-e2e="feed-active-video"] #videoSideCard:has(#relatedVideoCard){
			width: 100%;
			height: 75%;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.9);
			transition: height .15s linear !important;
			position: absolute;
		}
		`
      );
      PopsPanel.execMenuOnce(
        "douyin-video-autoCheckChangeCommentToBottom",
        () => {
          domUtils.on(window, "resize", autoChangeCommentPosition);
        }
      );
    },
    /**
     * 选择视频清晰度
     * @param [mode=0] 视频播放模式
     */
    chooseVideoDefinition(mode = 0) {
      log.info("选择视频清晰度: " + mode);
      let Definition_Key = "MANUAL_SWITCH";
      let definition = [
        {
          clarityReal: [
            "normal_1080_0",
            "normal_720_0",
            "low_720_0",
            "normal_540_0",
            "low_540_0",
            "adapt_low_540_0",
            "lower_540_0"
          ],
          done: 1,
          gearClarity: "5",
          gearName: "高清",
          gearType: 1,
          qualityType: 1
        },
        {
          clarityReal: [
            "normal_1080_0",
            "low_540_0",
            "low_720_0",
            "normal_720_0",
            "normal_540_0",
            "adapt_low_540_0",
            "lower_540_0",
            "adapt_lowest_720_1",
            "adapt_540_1",
            "adapt_lower_540_1"
          ],
          done: 1,
          gearClarity: "4",
          gearName: "清晰",
          gearType: 2,
          qualityType: 15
        },
        {
          clarityReal: [
            "normal_1080_0",
            "low_540_0",
            "low_720_0",
            "normal_720_0",
            "normal_540_0",
            "adapt_low_540_0",
            "lower_540_0",
            "adapt_lowest_720_1",
            "adapt_540_1",
            "adapt_lower_540_1"
          ],
          done: 1,
          gearClarity: "3",
          gearName: "流畅",
          gearType: 3,
          qualityType: 28
        },
        {
          clarityReal: [
            "normal_1080_0",
            "low_540_0",
            "low_720_0",
            "normal_720_0",
            "normal_540_0",
            "adapt_low_540_0",
            "lower_540_0",
            "adapt_lowest_720_1",
            "adapt_540_1",
            "adapt_lower_540_1"
          ],
          done: 1,
          gearClarity: "2",
          gearName: "极速",
          gearType: 4,
          qualityType: 21
        },
        {
          clarityReal: [
            "normal_1080_0",
            "low_540_0",
            "low_720_0",
            "normal_720_0",
            "normal_540_0",
            "adapt_low_540_0",
            "lower_540_0",
            "adapt_lowest_720_1",
            "adapt_540_1",
            "adapt_lower_540_1"
          ],
          done: 1,
          gearClarity: "0",
          gearName: "智能",
          gearType: 0
        }
      ];
      let choose = definition.find((item) => item.gearType === mode);
      function setStorage(value) {
        _unsafeWindow.sessionStorage.setItem(Definition_Key, value);
      }
      if (choose) {
        let count = 0;
        let chooseStr = JSON.stringify(choose);
        let interval = setInterval(() => {
          setStorage(chooseStr);
          count++;
          if (count >= 20) {
            clearInterval(interval);
          }
        }, 500);
        log.success("设置当前视频的清晰度: " + mode);
      } else {
        log.error("该清晰度不存在: " + mode);
      }
    },
    /**
     * 选择视频倍速
     * @param [rate="1"] 倍速
     */
    chooseVideoRate(rate = "1") {
      let Definition_Key = "player_playbackratio";
      function setRate(value = "1") {
        _unsafeWindow.sessionStorage.setItem(Definition_Key, value);
        document.querySelectorAll("xg-icon.xgplayer-playback-setting").forEach(($playbackSetting) => {
          var _a2, _b, _c, _d;
          let $container = utils.getReactObj($playbackSetting).reactContainer;
          (_d = (_c = (_b = (_a2 = $container == null ? void 0 : $container.memoizedState) == null ? void 0 : _a2.element) == null ? void 0 : _b.props) == null ? void 0 : _c.xgCase) == null ? void 0 : _d.updatePlayBackRatio();
        });
      }
      setRate(rate);
    },
    /**
     * 让下载按钮变成解析视频
     */
    parseVideo() {
      log.info("让下载按钮变成解析视频");
      function showParseInfoDialog(srcList) {
        let contentHTML = "";
        srcList.forEach((url2) => {
          contentHTML += /*html*/
          `
          		<div class="douyin-video-link-item"><a href="${url2}" target="_blank">${url2}</a></div>
            	`;
        });
        contentHTML = /*html*/
        `<div class="douyin-video-link-container">${contentHTML}</div>`;
        __pops.alert({
          title: {
            text: "视频解析",
            position: "center"
          },
          content: {
            text: contentHTML,
            html: true
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true
            }
          },
          width: window.innerWidth > 550 ? "550px" : "88vw",
          height: window.innerHeight > 550 ? "550px" : "80vh",
          drag: true,
          dragLimit: true,
          style: (
            /*css*/
            `
                .douyin-video-link-container{

                }
                .douyin-video-link-item{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 10px;
                }
                .douyin-video-link-item a{

                }
                `
          )
        });
      }
      domUtils.on(
        document,
        "click",
        'div[data-e2e="video-share-container"] div[data-inuser="false"] button + div',
        function(event) {
          var _a2, _b;
          let clickElement = event.target;
          let rectFiber = (_a2 = utils.getReactObj(
            clickElement.parentElement
          )) == null ? void 0 : _a2.reactFiber;
          if (!rectFiber) {
            log.error("获取rectFiber属性失败");
            Qmsg.error("获取rectFiber属性失败");
            return;
          }
          try {
            let awemeInfo = rectFiber.return.memoizedProps.awemeInfo;
            if (!awemeInfo) {
              log.error("获取awemeInfo属性失败");
              Qmsg.error("获取awemeInfo属性失败");
              return;
            }
            log.info([`解析的awemeInfo: `, awemeInfo]);
            let videoDownloadUrlList = [];
            let playAddr = awemeInfo.video.playAddr;
            if (playAddr != null && Array.isArray(playAddr)) {
              videoDownloadUrlList = videoDownloadUrlList.concat(
                playAddr.map((item) => item.src)
              );
            }
            let playAddrH265 = awemeInfo.video.playAddrH265;
            if (playAddrH265 != null && Array.isArray(playAddrH265)) {
              videoDownloadUrlList = videoDownloadUrlList.concat(
                playAddrH265.map((item) => item.src)
              );
            }
            let playApi = awemeInfo.video.playApi;
            if (typeof playApi === "string") {
              videoDownloadUrlList.push(playApi);
            }
            let playApiH265 = awemeInfo.video.playApiH265;
            if (typeof playApiH265 === "string") {
              videoDownloadUrlList.push(playApiH265);
            }
            let download = (_b = awemeInfo == null ? void 0 : awemeInfo.download) == null ? void 0 : _b.urlList;
            if (download != null && Array.isArray(download)) {
              videoDownloadUrlList = videoDownloadUrlList.concat(download);
            }
            if (!videoDownloadUrlList.length) {
              log.error("未获取到视频的有效链接信息");
              Qmsg.error("未获取到视频的有效链接信息");
              return;
            }
            let uniqueVideoDownloadUrlList = [...new Set(videoDownloadUrlList)];
            if (uniqueVideoDownloadUrlList.length != videoDownloadUrlList.length) {
              log.info("去重前视频链接数量: " + videoDownloadUrlList.length);
              log.info(
                "去重后视频链接数量: " + uniqueVideoDownloadUrlList.length
              );
            }
            uniqueVideoDownloadUrlList = uniqueVideoDownloadUrlList.map(
              (item) => {
                if (item.startsWith("http:")) {
                  item = item.replace("http:", "");
                }
                return item;
              }
            );
            showParseInfoDialog(uniqueVideoDownloadUrlList);
          } catch (error) {
            log.error(["解析视频失败", error]);
            Qmsg.error("解析视频失败");
          }
        },
        {
          capture: true
        }
      );
    },
    /**
     * 手机模式
     */
    mobileMode() {
      log.info("启用手机模式");
      let result = [];
      DouYin.initialScale();
      result.push(
        CommonUtil.addBlockCSS("img#douyin-temp-sidebar"),
        addStyle(MobileCSS)
      );
      PopsPanel.onceExec("repairProgressBar", () => {
        this.repairVideoProgressBar();
      });
    },
    /**
     * 修复进度条按钮
     */
    repairVideoProgressBar() {
      log.info("修复进度条按钮");
      addStyle(
        /*css*/
        `
		/* 禁止触发touch事件，因为会影响到按钮点击不到 */
		xg-outer,
		xg-inners {
			pointer-events: none;
		}
		`
      );
      domUtils.on(
        document,
        "touchstart",
        "xg-progress",
        (event) => {
          let $click = event.target;
          let $xg_outer = $click.querySelector("xg-outer");
          if ($xg_outer) {
            $xg_outer.style.height = "6px";
          }
        },
        {
          capture: true
        }
      );
      domUtils.on(
        document,
        "touchend",
        "xg-progress",
        (event) => {
          let $click = event.target;
          let $xg_outer = $click.querySelector("xg-outer");
          if ($xg_outer) {
            $xg_outer.style.height = "";
          }
        },
        {
          capture: true
        }
      );
    },
    /**
     * 修改视频背景颜色
     * @param color 颜色
     */
    changeBackgroundColor(color) {
      log.info("修改视频背景颜色");
      return addStyle(
        /*css*/
        `
		#sliderVideo > div,
		/* 推荐的直播间背景 */
		xgmask,
		/* 用户主页的视频 */
		.basePlayerContainer .imgBackground{
			background: ${color}  !important;
		}
		`
      );
    },
    /**
     * 自动隐藏视频标题
     */
    titleInfoAutoHide() {
      log.info(`自动隐藏视频标题`);
      let lockFn = new utils.LockFunction(() => {
        let videoInfoList = [];
        videoInfoList.push(
          // 一般的推荐视频|单个视频的当前观看的视频
          $(
            '#sliderVideo[data-e2e="feed-active-video"] #video-info-wrap:not([data-is-inject-mouse-hide])'
          )
        );
        videoInfoList.push(
          // 进入作者主页后的当前观看的视频
          $(
            '#slideMode[data-e2e="feed-active-video"] #video-info-wrap:not([data-is-inject-mouse-hide])'
          )
        );
        if (!videoInfoList.length) {
          return;
        }
        videoInfoList.forEach(($currentVideoInfo) => {
          if (!$currentVideoInfo) {
            return;
          }
          $currentVideoInfo.setAttribute("data-is-inject-mouse-hide", "");
          let timeId = setTimeout(() => {
            domUtils.trigger($currentVideoInfo, "mouseleave");
          }, PopsPanel.getValue("dy-video-titleInfoAutoHide-delayTime"));
          domUtils.on(
            $currentVideoInfo,
            ["mouseenter", "touchstart"],
            (event) => {
              clearTimeout(timeId);
              domUtils.css($currentVideoInfo, "opacity", "");
            }
          );
          domUtils.on($currentVideoInfo, ["mouseleave", "touchend"], (event) => {
            domUtils.css($currentVideoInfo, "opacity", 0);
          });
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true
        },
        callback: () => {
          lockFn.run();
        }
      });
    },
    /**
     * 手势返回关闭评论区
     */
    gestureBackCloseComment() {
      log.info(`手势返回关闭评论区`);
      let gestureback = new GestureBack({
        hash: DouYinGestureBackHashConfig.videoCommentDrawer,
        useUrl: true,
        beforeHistoryBackCallBack(isUrlChange) {
          if (isUrlChange) {
            closeComment();
          }
        }
      });
      const $closeSelector = `#relatedVideoCard .semi-tabs + div svg:has(path[d="M22.133 23.776a1.342 1.342 0 1 0 1.898-1.898l-4.112-4.113 4.112-4.112a1.342 1.342 0 0 0-1.898-1.898l-4.112 4.112-4.113-4.112a1.342 1.342 0 1 0-1.898 1.898l4.113 4.112-4.113 4.113a1.342 1.342 0 0 0 1.898 1.898l4.113-4.113 4.112 4.113z"])`;
      function closeComment() {
        var _a2;
        let $close = document.querySelector($closeSelector);
        if ($close) {
          let rect = utils.getReactObj($close);
          if (rect) {
            let fn = (_a2 = rect.reactProps) == null ? void 0 : _a2.onClick;
            if (typeof fn === "function") {
              fn();
            } else {
              Qmsg.error("调用关闭评论区按钮的onClick函数失败");
            }
          } else {
            Qmsg.error("获取关闭评论区按钮react信息失败");
          }
        } else {
          Qmsg.error("未找到关闭评论区的按钮");
        }
      }
      domUtils.on(
        document,
        "click",
        `.xgplayer div[data-e2e="feed-comment-icon"]`,
        (event) => {
          log.info(`手势 => 打开评论区`);
          utils.waitNode($closeSelector, 1e4).then(($el) => {
            if (!$el) {
              return;
            }
            log.info(`手势 => 评论区出现`);
            gestureback.enterGestureBackMode();
          });
        },
        {
          capture: true
        }
      );
      domUtils.on(
        document,
        "click",
        $closeSelector,
        (event) => {
          log.info(`手势 => 关闭评论区`);
          gestureback.quitGestureBackMode();
        },
        {
          capture: true
        }
      );
    }
  };
  const DouYinVideoShortcut = {
    shortCut: new ShortCut("video-short-cut"),
    $data: {
      rateMap: ["0.75", "1", "1.25", "1.5", "1.75", "2", "3"]
    },
    init() {
      this.shortCut.initGlobalKeyboardListener(this.getShortCutMap());
    },
    getShortCutMap() {
      return {
        "dy-video-rate-low": {
          target: "window",
          callback() {
            log.info("快捷键 ==> 调用倍速：小");
            let currentRate = _unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
            let findIndex = DouYinVideoShortcut.$data.rateMap.findIndex(
              (rate) => {
                return rate === currentRate;
              }
            );
            if (findIndex === 0) {
              log.warn("快捷键 ==> 已是最小倍速: " + currentRate);
              return;
            }
            let prevRate = DouYinVideoShortcut.$data.rateMap[findIndex - 1];
            log.info("快捷键 ==> 设置倍速: " + prevRate);
            DouYinVideo.chooseVideoRate(prevRate);
          }
        },
        "dy-video-rate-up": {
          target: "window",
          callback() {
            log.info("快捷键 ==> 调用倍速：大");
            let currentRate = _unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
            let findIndex = DouYinVideoShortcut.$data.rateMap.findIndex(
              (rate) => {
                return rate === currentRate;
              }
            );
            if (findIndex === DouYinVideoShortcut.$data.rateMap.length - 1) {
              log.warn("快捷键 ==> 已是最大倍速: " + currentRate);
              return;
            }
            let nextRate = DouYinVideoShortcut.$data.rateMap[findIndex + 1];
            log.info("快捷键 ==> 设置倍速: " + nextRate);
            DouYinVideo.chooseVideoRate(nextRate);
          }
        },
        "dy-video-shortcut-immersionMode": {
          target: "window",
          callback() {
            log.info("快捷键 ==> 沉浸模式");
            let value = PopsPanel.getValue("fullScreen");
            PopsPanel.setValue("fullScreen", !value);
            PopsPanel.execMenuOnce("fullScreen", () => {
              return DouYinVideo.fullScreen();
            });
          }
        }
      };
    }
  };
  const UISlider = function(text, key, defaultValue, min, max, changeCallBack, getToolTipContent, description, step) {
    let result = {
      text,
      type: "slider",
      description,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      getToolTipContent(value) {
        if (typeof getToolTipContent === "function") {
          return getToolTipContent(value);
        } else {
          return `${value}`;
        }
      },
      callback(event, value) {
        this.props[PROPS_STORAGE_API].set(key, value);
      },
      min,
      max,
      step
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    Reflect.set(result.props, PROPS_STORAGE_API, {
      get(key2, defaultValue2) {
        return PopsPanel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        PopsPanel.setValue(key2, value);
      }
    });
    return result;
  };
  const PanelVideoConfig = {
    id: "panel-config-video",
    title: "视频",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "沉浸模式",
                    "fullScreen",
                    false,
                    void 0,
                    "移除右侧工具栏、底部信息栏等"
                  ),
                  UISwitch(
                    "手机模式",
                    "mobileMode",
                    false,
                    void 0,
                    "放大文字和图标，及自动启用【initial-scale=1】和【修复进度条】功能"
                  ),
                  UISwitch(
                    "修复进度条",
                    "repairProgressBar",
                    false,
                    void 0,
                    "修复移动端不能点击拖拽和定位进度的问题(移动端使用)"
                  ),
                  UISwitch(
                    "禁用双击点赞",
                    "dy-video-disableDoubleClickLike",
                    false,
                    void 0,
                    "禁止视频区域双击点赞"
                  ),
                  UISwitch(
                    "手势返回关闭评论区",
                    "dy-video-gestureBackCloseComment",
                    false,
                    void 0,
                    "浏览器手势返回时关闭评论区"
                  )
                ]
              },
              {
                text: "视频区域背景色",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "dy-video-bgColor-enable",
                    false,
                    void 0,
                    "自定义视频背景色"
                  ),
                  {
                    type: "own",
                    attributes: {
                      "data-key": "dy-video-changeBackgroundColor",
                      "data-default-value": "#000000"
                    },
                    getLiElementCallBack(liElement) {
                      let $left = domUtils.createElement("div", {
                        className: "pops-panel-item-left-text",
                        innerHTML: (
                          /*html*/
                          `
											<p class="pops-panel-item-left-main-text">视频背景颜色</p>
											<p class="pops-panel-item-left-desc-text">自定义视频背景颜色，包括评论区</p>
											`
                        )
                      });
                      let $right = domUtils.createElement("div", {
                        className: "pops-panel-item-right",
                        innerHTML: (
                          /*html*/
                          `
											<input type="color" class="pops-color-choose" />
											`
                        )
                      });
                      let $color = $right.querySelector(
                        ".pops-color-choose"
                      );
                      $color.value = PopsPanel.getValue(
                        "dy-video-changeBackgroundColor"
                      );
                      let $style = domUtils.createElement("style");
                      domUtils.append(document.head, $style);
                      domUtils.on(
                        $color,
                        ["input", "propertychange"],
                        (event) => {
                          log.info("选择颜色：" + $color.value);
                          $style.innerHTML = /*css*/
                          `
												#sliderVideo > div{
													background: ${$color.value};
												}
												`;
                          PopsPanel.setValue(
                            "dy-video-changeBackgroundColor",
                            $color.value
                          );
                        }
                      );
                      liElement.appendChild($left);
                      liElement.appendChild($right);
                      return liElement;
                    }
                  }
                ]
              },
              {
                type: "forms",
                text: "视频标题",
                forms: [
                  UISwitch(
                    "自动隐藏视频标题",
                    "dy-video-titleInfoAutoHide",
                    false,
                    void 0,
                    "自动隐藏视频标题，鼠标移入时自动显示，鼠标移除时自动隐藏"
                  ),
                  UISlider(
                    "自动隐藏视频标题的延迟时间",
                    "dy-video-titleInfoAutoHide-delayTime",
                    3e3,
                    0,
                    8e3,
                    void 0,
                    (value) => {
                      return `${value}ms`;
                    },
                    "可设置隐藏视频标题的延迟时间，单位为ms",
                    100
                  )
                ]
              }
            ]
          },
          {
            text: "播放器",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISelect(
                    "清晰度",
                    "chooseVideoDefinition",
                    1,
                    [
                      {
                        text: "智能",
                        value: 0
                      },
                      {
                        text: "极速",
                        value: 4
                      },
                      {
                        text: "流畅",
                        value: 3
                      },
                      {
                        text: "清晰",
                        value: 2
                      },
                      {
                        text: "高清",
                        value: 1
                      }
                    ],
                    void 0,
                    "自行选择清晰度"
                  ),
                  UISwitch(
                    "视频解析",
                    "parseVideo",
                    true,
                    void 0,
                    "分享->下载(灰色的也可点击)"
                  ),
                  UISwitch(
                    "评论区移到中间",
                    "changeCommentToBottom",
                    true,
                    void 0,
                    "修改评论区为中间弹出而非右侧区域"
                  ),
                  UISwitch(
                    "↑自适应评论区位置",
                    "douyin-video-autoCheckChangeCommentToBottom",
                    true,
                    void 0,
                    "根据window.screen.orientation.type自动判断是否开启【评论区移到中间】"
                  ),
                  UISwitch(
                    "自动进入网页全屏",
                    "autoEnterElementFullScreen",
                    false,
                    void 0,
                    "网页加载完毕后自动点击网页全屏按钮进入全屏"
                  ),
                  UISwitch(
                    "双击进入网页全屏",
                    "dy-video-doubleClickEnterElementFullScreen",
                    false,
                    void 0,
                    "双击视频自动进入网页全屏，检测间隔250ms"
                  )
                ]
              }
            ]
          },
          {
            text: "自定义快捷键",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UIButtonShortCut(
                    "倍速 -> 小",
                    "视频倍速变小",
                    "dy-video-rate-low",
                    void 0,
                    "点击录入快捷键",
                    void 0,
                    DouYinVideoShortcut.shortCut
                  ),
                  UIButtonShortCut(
                    "倍速 -> 大",
                    "视频倍速变大",
                    "dy-video-rate-up",
                    void 0,
                    "点击录入快捷键",
                    void 0,
                    DouYinVideoShortcut.shortCut
                  ),
                  UIButtonShortCut(
                    "沉浸模式",
                    "移除右侧工具栏、底部信息栏等",
                    "dy-video-shortcut-immersionMode",
                    void 0,
                    "点击录入快捷键",
                    void 0,
                    DouYinVideoShortcut.shortCut
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: "快捷键禁用",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                type: "forms",
                text: AutoOpenOrClose.text,
                forms: [
                  UISwitch(
                    "上翻页",
                    "dy-keyboard-hook-arrowUp-w",
                    false,
                    void 0,
                    "W"
                  ),
                  UISwitch(
                    "下翻页",
                    "dy-keyboard-hook-arrowDown-s",
                    false,
                    void 0,
                    "S"
                  ),
                  UISwitch(
                    "快退",
                    "dy-keyboard-hook-videoRewind",
                    false,
                    void 0,
                    "A"
                  ),
                  UISwitch(
                    "快进",
                    "dy-keyboard-hook-videoFastForward",
                    false,
                    void 0,
                    "D"
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "屏蔽-视频区域内",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                text: AutoOpenOrClose.text + "<br>右侧工具栏",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】切换播放",
                    "shieldPlaySwitchButton",
                    false,
                    void 0,
                    "屏蔽元素，在右侧作者头像上方"
                  ),
                  UISwitch(
                    "【屏蔽】作者头像",
                    "shieldAuthorAvatar",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】点赞",
                    "shieldLikeButton",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】评论",
                    "shieldCommentButton",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】收藏",
                    "shieldCollectionButton",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】分享",
                    "shieldSharenButton",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】看相关",
                    "shieldRelatedRecommendationsButton",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】更多",
                    "shieldMoreButton",
                    false,
                    void 0,
                    "...按钮，屏蔽元素"
                  )
                ]
              },
              {
                text: "底部工具栏",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部视频工具栏",
                    "shieldBottomVideoToolBar",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】弹幕容器",
                    "shieldBottomVideoToolbarDanmuContainer",
                    false,
                    void 0,
                    "屏蔽元素（不包括屏蔽弹幕）"
                  ),
                  UISwitch(
                    "【屏蔽】视频信息",
                    "dy-video-bottom-shieldVideoInfoWrap",
                    false,
                    void 0,
                    "屏蔽元素，可代替【清屏】功能"
                  )
                ]
              },
              {
                text: "其它",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】右侧的展开评论按钮",
                    "shieldRightExpandCommentButton",
                    true,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】搜索悬浮栏",
                    "shieldSearchFloatingBar",
                    true,
                    void 0,
                    "屏蔽元素，一般出现在左上角"
                  ),
                  UISwitch(
                    "【屏蔽】网页全屏关闭按钮",
                    "shieldCloseFullScreenButton",
                    true,
                    void 0,
                    "屏蔽元素，一般开启网页全屏后出现在左上角"
                  ),
                  UISwitch(
                    "【屏蔽】购物信息",
                    "dy-video-blockShopInfo",
                    true,
                    void 0,
                    "屏蔽元素，该元素出现在视频底部的用户名、标题信息的上面"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽-评论区域内",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                text: AutoOpenOrClose.text,
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】评论工具栏",
                    "dy-video-shieldUserCommentToolBar",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】大家都在搜",
                    "dy-video-shieldUserCommentEveryOneAllSearch",
                    false,
                    void 0,
                    "在评论区的顶部出现"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const PanelSearchConfig = {
    id: "panel-config-search",
    title: "搜索",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "禁止点击视频区域进入全屏",
                    "dy-search-disableClickToEnterFullScreen",
                    false,
                    void 0,
                    "禁止点击视频区域时会触发自动进入全屏功能"
                  ),
                  UISelect(
                    "自动进入网页全屏",
                    "search-autoEnterElementFullScreen",
                    -1,
                    [
                      {
                        text: "跟随主设置",
                        value: -1
                      },
                      {
                        text: "是",
                        value: 1
                      },
                      {
                        text: "否",
                        value: 0
                      }
                    ],
                    void 0,
                    "网页加载完毕后自动点击网页全屏按钮进入全屏"
                  ),
                  UISelect(
                    "搜索结果-视频-显示样式",
                    "live-setSearchResultFilterWithVideoStyle",
                    "",
                    [
                      {
                        text: "默认",
                        value: ""
                      },
                      {
                        text: "单列",
                        value: "one"
                      },
                      {
                        text: "双列",
                        value: "double"
                      }
                    ],
                    void 0,
                    "自定义搜索结果，按视频筛选的结果项的显示样式"
                  )
                ]
              }
            ]
          },
          {
            text: "过滤-搜索结果",
            type: "deepMenu",
            forms: [
              {
                text: '<a href="https://greasyfork.org/zh-CN/scripts/494643-%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "search-shieldVideo",
                    true,
                    void 0,
                    "开启后可启用下面的屏蔽功能"
                  ),
                  UISwitch(
                    "【屏蔽】直播",
                    "search-shieldVideo-live",
                    true,
                    void 0,
                    "过滤掉直播"
                  ),
                  UISwitch(
                    "【屏蔽】广告",
                    "search-shieldVideo-ads",
                    true,
                    void 0,
                    "过滤掉广告"
                  ),
                  {
                    type: "own",
                    getLiElementCallBack(liElement) {
                      let textareaDiv = domUtils.createElement(
                        "div",
                        {
                          className: "pops-panel-textarea",
                          innerHTML: (
                            /*html*/
                            `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`
                          )
                        },
                        {
                          style: "width: 100%;"
                        }
                      );
                      let textarea = textareaDiv.querySelector(
                        "textarea"
                      );
                      textarea.value = DouYinSearchFilter.get();
                      domUtils.on(
                        textarea,
                        ["input", "propertychange"],
                        utils.debounce(function() {
                          DouYinSearchFilter.set(textarea.value);
                        }, 200)
                      );
                      liElement.appendChild(textareaDiv);
                      return liElement;
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "屏蔽",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            forms: [
              {
                text: AutoOpenOrClose.text,
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】相关搜索",
                    "douyin-search-shieldReleatedSearches",
                    false,
                    void 0,
                    "屏蔽右边的相关搜索"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽-主框架",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISelect(
                    "【屏蔽】左侧导航栏",
                    "search-shieldLeftNavigator",
                    -1,
                    [
                      {
                        text: "跟随主设置",
                        value: -1
                      },
                      {
                        text: "是",
                        value: 1
                      },
                      {
                        text: "否",
                        value: 0
                      }
                    ],
                    void 0,
                    "屏蔽元素"
                  ),
                  UISelect(
                    "【屏蔽】顶部导航栏",
                    "search-shieldTopNavigator",
                    -1,
                    [
                      {
                        text: "跟随主设置",
                        value: -1
                      },
                      {
                        text: "是",
                        value: 1
                      },
                      {
                        text: "否",
                        value: 0
                      }
                    ],
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MPanelShareUserConfig = {
    id: "m-panel-config-share-user",
    title: "主页",
    headerTitle: "/share/user<br />主页",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "视频合集",
                    "m-dy-share-user-coverPlayletList",
                    true,
                    void 0,
                    "正确跳转视频合集页面"
                  ),
                  UISwitch(
                    "视频列表",
                    "m-dy-share-user-coverPostListContainer",
                    true,
                    void 0,
                    "正确跳转视频页面"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MPanelShareVideoConfig = {
    id: "m-panel-config-share-video",
    title: "视频",
    headerTitle: "/share/video<br />视频",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "全局点击",
                    "m-dy-share-video-coverGlobalClick",
                    true,
                    void 0,
                    "阻止跳转至下载页"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MPanelShareNoteConfig = {
    id: "m-panel-config-share-note",
    title: "笔记",
    headerTitle: "/share/note<br />笔记",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "精彩图文",
                    "m-dy-share-note-coverExcitingGraphicsAndText",
                    true,
                    void 0,
                    "正确跳转笔记页面"
                  ),
                  UISwitch(
                    "用户",
                    "m-dy-share-note-coverUser",
                    true,
                    void 0,
                    "正确跳转用户主页"
                  ),
                  UISwitch(
                    "话题",
                    "m-dy-share-note-coverHashTag",
                    true,
                    void 0,
                    "正确跳转相关话题"
                  ),
                  UISwitch(
                    "音乐",
                    "m-dy-share-note-coverMusic",
                    true,
                    void 0,
                    "正确跳转相关音乐"
                  ),
                  UISwitch(
                    "相关推荐",
                    "m-dy-share-note-coverRecommend",
                    true,
                    void 0,
                    "正确跳转笔记页面"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽元素",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】评论",
                    "m-dy-share-note-blockComment",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】相关推荐",
                    "m-dy-share-note-blockRecommend",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】底部工具栏",
                    "m-dy-share-note-blockFooterToobar",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MPanelShareChallengeConfig = {
    id: "m-panel-config-share-challenge",
    title: "话题",
    headerTitle: "/share/challenge<br />话题",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "顶部区域",
                    "m-dy-share-challenge-coverTopJump",
                    true,
                    void 0,
                    "阻止跳转至下载页面"
                  ),
                  UISwitch(
                    "视频卡片",
                    "m-dy-share-challenge-coverVideoCard",
                    true,
                    void 0,
                    "正确跳转视频页面"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MPanelShareMusicConfig = {
    id: "m-panel-config-share-music",
    title: "音乐",
    headerTitle: "/share/music<br />音乐",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "视频卡片",
                    "m-dy-share-music-coverVideoCard",
                    true,
                    void 0,
                    "正确跳转视频页面"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const DouYinRecommendVideoFilterDebug = {
    init() {
      this.show();
    },
    /**
     * 显示调试面板
     */
    show() {
      const KEY2 = "temp-debug-recommend-video-filter-rule";
      let videoFilter = new DouYinVideoFilter({
        key: KEY2
      });
      videoFilter.clear();
      let choose = window.prompt(
        `请输入需要执行的操作：
1. 获取当前视频的信息字典
2. 获取所有视频的信息字典
3. 调试自定义规则`,
        "1"
      );
      let awemeInfo = void 0;
      if (choose === "1" || choose === "3") {
        awemeInfo = DouYinRecommendVideo.getCurrentActiveVideoInfo();
        if (awemeInfo == null) {
          Qmsg.error("获取当前播放的视频信息失败，详情请看控制台");
          return;
        }
        log.info(["当前视频awemeInfo信息：", awemeInfo]);
      }
      if (choose === "1" || choose === "2") {
        let videoInfoJSON = "";
        if (choose === "1") {
          videoInfoJSON = JSON.stringify(
            videoFilter.getAwemeInfoDictData(awemeInfo),
            null,
            4
          );
        } else if (choose === "2") {
          let allAwemeInfoList = DouYinRecommendVideo.getAllVideoAwemeInfo();
          let allAwemeDictInfoList = [];
          allAwemeInfoList.forEach((awemeInfo2) => {
            allAwemeDictInfoList.push(videoFilter.getAwemeInfoDictData(awemeInfo2));
          });
          log.info(["全部的awemeInfo信息↓", allAwemeInfoList]);
          log.info(["解析出全部的awemeInfo的字典信息↓", allAwemeDictInfoList]);
          videoInfoJSON = JSON.stringify(allAwemeDictInfoList, null, 4);
        }
        let $confirm = __pops.confirm({
          title: {
            text: "视频信息",
            position: "center"
          },
          content: {
            text: (
              /*html*/
              `
                    <div class="video-info">
                        <p class="copy-video-info-tip">是否复制以下信息到剪贴板？</p>
                        <textarea class="video-info-json" disabled="true"></textarea>
                    </div>
                    `
            ),
            html: true
          },
          btn: {
            ok: {
              text: "复制",
              callback: function() {
                utils.setClip(videoInfoJSON);
              }
            }
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true
            }
          },
          width: window.innerWidth > 500 ? "50vw" : "400px",
          height: window.innerHeight > 500 ? "60vh" : "400px",
          drag: true,
          dragLimit: true,
          style: (
            /*css*/
            `
                .video-info-json{
                    width: 100%;
                    height: ${window.innerHeight > 500 ? "55vh" : "300px"};
                }
                `
          )
        });
        $confirm.$shadowRoot.querySelector(
          ".copy-video-info-tip"
        );
        let $videoInfoJSON = $confirm.$shadowRoot.querySelector(
          ".video-info-json"
        );
        $videoInfoJSON.value = videoInfoJSON;
        $videoInfoJSON.readOnly = true;
      } else if (choose === "3") {
        let rule = window.prompt("请输入要调试的规则(单条规则)");
        if (utils.isNotNull(rule)) {
          videoFilter.updateRule(rule);
          log.info([
            "过滤器-视频信息tag字典：",
            videoFilter.getAwemeInfoDictData(awemeInfo)
          ]);
          let flag = videoFilter.checkAwemeInfoIsFilter(awemeInfo);
          if (flag) {
            let $qmsg = Qmsg.success(
              /*html*/
              `
						<div class="dy-tip-text">当前视频符合该屏蔽规则，是否复制该规则？</div>
						<a class="dy-tip-copy" href="javascript:;">复制</a>
						`,
              {
                timeout: 5e3,
                isHTML: true,
                customClass: "dy-video-filter-debug-rule-tip",
                style: (
                  /*css*/
                  `
							.dy-video-filter-debug-rule-tip{
								display: flex;
							}
							`
                )
              }
            );
            let $copy = $qmsg.$Qmsg.querySelector(
              ".dy-video-filter-debug-rule-tip .dy-tip-copy"
            );
            domUtils.on($copy, "click", (event) => {
              utils.preventEvent(event);
              utils.setClip(rule);
            });
          } else {
            Qmsg.error("当前视频不符合该屏蔽规则");
          }
        }
      } else {
        log.error("输入有误：" + choose);
      }
      videoFilter.destory();
    }
  };
  const PanelRecommendVideoConfig = {
    id: "panel-config-recommend-video",
    title: "推荐",
    forms: [
      {
        type: "forms",
        text: "",
        forms: [
          {
            text: "过滤-推荐视频",
            type: "deepMenu",
            forms: [
              {
                text: '<a href="https://greasyfork.org/zh-CN/scripts/494643-%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',
                type: "forms",
                forms: [
                  UIButton(
                    "调试规则",
                    "测试自定义规则对当前正在播放的视频是否生效",
                    "调试",
                    void 0,
                    false,
                    false,
                    "primary",
                    () => {
                      DouYinRecommendVideoFilterDebug.init();
                    }
                  ),
                  UISwitch(
                    "启用",
                    "shieldVideo",
                    true,
                    void 0,
                    "开启后可启用下面的屏蔽功能"
                  ),
                  UISwitch(
                    "【屏蔽】直播",
                    "shieldVideo-live",
                    true,
                    void 0,
                    "过滤掉直播"
                  ),
                  UISwitch(
                    "【屏蔽】广告",
                    "shieldVideo-ads",
                    true,
                    void 0,
                    "过滤掉广告"
                  ),
                  {
                    type: "own",
                    getLiElementCallBack(liElement) {
                      let textareaDiv = domUtils.createElement(
                        "div",
                        {
                          className: "pops-panel-textarea",
                          innerHTML: `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`
                        },
                        {
                          style: "width: 100%;"
                        }
                      );
                      let textarea = textareaDiv.querySelector(
                        "textarea"
                      );
                      textarea.value = DouYinRecommendVideoFilter.get();
                      domUtils.on(
                        textarea,
                        ["input", "propertychange"],
                        utils.debounce(function() {
                          DouYinRecommendVideoFilter.set(textarea.value);
                        }, 200)
                      );
                      liElement.appendChild(textareaDiv);
                      return liElement;
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const PanelUISize = {
    /**
     * 一般设置界面的尺寸
     */
    setting: {
      width: window.innerWidth < 550 ? "88vw" : "550px",
      height: window.innerHeight < 450 ? "70vh" : "450px"
    },
    /**
     * 功能丰富，aside铺满了的设置界面，要稍微大一点
     */
    settingBig: {
      width: window.innerWidth < 800 ? "92vw" : "800px",
      height: window.innerHeight < 600 ? "80vh" : "600px"
    },
    /**
     * 信息界面，一般用于提示信息之类
     */
    info: {
      width: window.innerWidth < 350 ? "350px" : "350px",
      height: window.innerHeight < 250 ? "250px" : "250px"
    }
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      __data: null,
      __oneSuccessExecMenu: null,
      __onceExec: null,
      __listenData: null,
      /**
       * 菜单项的默认值
       */
      get data() {
        if (PopsPanel.$data.__data == null) {
          PopsPanel.$data.__data = new utils.Dictionary();
        }
        return PopsPanel.$data.__data;
      },
      /**
       * 成功只执行了一次的项
       */
      get oneSuccessExecMenu() {
        if (PopsPanel.$data.__oneSuccessExecMenu == null) {
          PopsPanel.$data.__oneSuccessExecMenu = new utils.Dictionary();
        }
        return PopsPanel.$data.__oneSuccessExecMenu;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExec() {
        if (PopsPanel.$data.__onceExec == null) {
          PopsPanel.$data.__onceExec = new utils.Dictionary();
        }
        return PopsPanel.$data.__onceExec;
      },
      /** 脚本名，一般用在设置的标题上 */
      get scriptName() {
        return SCRIPT_NAME;
      },
      /** 菜单项的总值在本地数据配置的键名 */
      key: KEY,
      /** 菜单项在attributes上配置的菜单键 */
      attributeKeyName: ATTRIBUTE_KEY,
      /** 菜单项在attributes上配置的菜单默认值 */
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE
    },
    /** 监听器 */
    $listener: {
      /**
       * 值改变的监听器
       */
      get listenData() {
        if (PopsPanel.$data.__listenData == null) {
          PopsPanel.$data.__listenData = new utils.Dictionary();
        }
        return PopsPanel.$data.__listenData;
      }
    },
    init() {
      this.initPanelDefaultValue();
      this.initExtensionsMenu();
    },
    /** 判断是否是顶层窗口 */
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
    },
    initExtensionsMenu() {
      if (!this.isTopWindow()) {
        return;
      }
      GM_Menu.add([
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showPanel();
          }
        },
        {
          key: "show_pops_m_panel_setting",
          text: "⚙ 移动端设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showMPanel();
          }
        }
      ]);
    },
    /** 初始化菜单项的默认值保存到本地数据中 */
    initPanelDefaultValue() {
      let that = this;
      function initDefaultValue(config) {
        if (!config.attributes) {
          return;
        }
        let needInitConfig = {};
        let key = config.attributes[ATTRIBUTE_KEY];
        if (key != null) {
          needInitConfig[key] = config.attributes[ATTRIBUTE_DEFAULT_VALUE];
        }
        let __attr_init__ = config.attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          let __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) {
            return;
          }
        }
        let initMoreValue = config.attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (initMoreValue && typeof initMoreValue === "object") {
          Object.assign(needInitConfig, initMoreValue);
        }
        let needInitConfigList = Object.keys(needInitConfig);
        if (!needInitConfigList.length) {
          log.warn(["请先配置键", config]);
          return;
        }
        needInitConfigList.forEach((__key) => {
          let __defaultValue = needInitConfig[__key];
          if (that.$data.data.has(__key)) {
            log.warn("请检查该key(已存在): " + __key);
          }
          that.$data.data.set(__key, __defaultValue);
        });
      }
      function loopInitDefaultValue(configList) {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childForms = configItem.forms;
          if (childForms && Array.isArray(childForms)) {
            loopInitDefaultValue(childForms);
          }
        }
      }
      let contentConfigList = this.getPanelContentConfig().concat(
        this.getMPanelContentConfig()
      );
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        let rightContentConfigList = leftContentConfigItem.forms;
        if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
          loopInitDefaultValue(rightContentConfigList);
        }
      }
    },
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    setValue(key, value) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      locaData[key] = value;
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, value);
      }
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    getValue(key, defaultValue) {
      let locaData = _GM_getValue(KEY, {});
      let localValue = locaData[key];
      if (localValue == null) {
        if (this.$data.data.has(key)) {
          return this.$data.data.get(key);
        }
        return defaultValue;
      }
      return localValue;
    },
    /**
     * 删除值
     * @param key 键
     */
    deleteValue(key) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      Reflect.deleteProperty(locaData, key);
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, void 0);
      }
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key, callback) {
      let listenerId = Math.random();
      this.$listener.listenData.set(key, {
        id: listenerId,
        key,
        callback
      });
      return listenerId;
    },
    /**
     * 移除监听
     * @param listenerId 监听的id
     */
    removeValueChangeListener(listenerId) {
      let deleteKey = null;
      for (const [key, value] of this.$listener.listenData.entries()) {
        if (value.id === listenerId) {
          deleteKey = key;
          break;
        }
      }
      if (typeof deleteKey === "string") {
        this.$listener.listenData.delete(deleteKey);
      } else {
        console.warn("没有找到对应的监听器");
      }
    },
    /**
     * 主动触发菜单值改变的回调
     * @param key 菜单键
     * @param newValue 想要触发的新值，默认使用当前值
     * @param oldValue 想要触发的旧值，默认使用当前值
     */
    triggerMenuValueChange(key, newValue, oldValue) {
      if (this.$listener.listenData.has(key)) {
        let listenData = this.$listener.listenData.get(key);
        if (typeof listenData.callback === "function") {
          let value = this.getValue(key);
          let __newValue = value;
          let __oldValue = value;
          if (typeof newValue !== "undefined" && arguments.length > 1) {
            __newValue = newValue;
          }
          if (typeof oldValue !== "undefined" && arguments.length > 2) {
            __oldValue = oldValue;
          }
          listenData.callback(key, __oldValue, __newValue);
        }
      }
    },
    /**
     * 判断该键是否存在
     * @param key 键
     */
    hasKey(key) {
      let locaData = _GM_getValue(KEY, {});
      return key in locaData;
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     * @param [isReverse=false] 逆反判断菜单启用
     */
    execMenu(key, callback, isReverse = false) {
      if (!(typeof key === "string" || typeof key === "object" && Array.isArray(key))) {
        throw new TypeError("key 必须是字符串或者字符串数组");
      }
      let runKeyList = [];
      if (typeof key === "object" && Array.isArray(key)) {
        runKeyList = [...key];
      } else {
        runKeyList.push(key);
      }
      let value = void 0;
      for (let index = 0; index < runKeyList.length; index++) {
        const runKey = runKeyList[index];
        if (!this.$data.data.has(runKey)) {
          log.warn(`${key} 键不存在`);
          return;
        }
        let runValue = PopsPanel.getValue(runKey);
        if (isReverse) {
          runValue = !runValue;
        }
        if (!runValue) {
          break;
        }
        value = runValue;
      }
      if (value) {
        callback(value);
      }
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key
     * @param callback 回调
     * @param getValueFn 自定义处理获取当前值，值true是启用并执行回调，值false是不执行回调
     * @param handleValueChangeFn 自定义处理值改变时的回调，值true是启用并执行回调，值false是不执行回调
     */
    execMenuOnce(key, callback, getValueFn, handleValueChangeFn) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      if (this.$data.oneSuccessExecMenu.has(key)) {
        return;
      }
      this.$data.oneSuccessExecMenu.set(key, 1);
      let __getValue = () => {
        let localValue = PopsPanel.getValue(key);
        return typeof getValueFn === "function" ? getValueFn(key, localValue) : localValue;
      };
      let resultStyleList = [];
      let dynamicPushStyleNode = ($style) => {
        let __value = __getValue();
        let dynamicResultList = [];
        if ($style instanceof HTMLStyleElement) {
          dynamicResultList = [$style];
        } else if (Array.isArray($style)) {
          dynamicResultList = [
            ...$style.filter(
              (item) => item != null && item instanceof HTMLStyleElement
            )
          ];
        }
        if (__value) {
          resultStyleList = resultStyleList.concat(dynamicResultList);
        } else {
          for (let index = 0; index < dynamicResultList.length; index++) {
            let $css = dynamicResultList[index];
            $css.remove();
            dynamicResultList.splice(index, 1);
            index--;
          }
        }
      };
      let changeCallBack = (currentValue) => {
        let resultList = [];
        if (currentValue) {
          let result = callback(currentValue, dynamicPushStyleNode);
          if (result instanceof HTMLStyleElement) {
            resultList = [result];
          } else if (Array.isArray(result)) {
            resultList = [
              ...result.filter(
                (item) => item != null && item instanceof HTMLStyleElement
              )
            ];
          }
        }
        for (let index = 0; index < resultStyleList.length; index++) {
          let $css = resultStyleList[index];
          $css.remove();
          resultStyleList.splice(index, 1);
          index--;
        }
        resultStyleList = [...resultList];
      };
      this.addValueChangeListener(
        key,
        (__key, oldValue, newValue) => {
          let __newValue = newValue;
          if (typeof handleValueChangeFn === "function") {
            __newValue = handleValueChangeFn(__key, newValue, oldValue);
          }
          changeCallBack(__newValue);
        }
      );
      let value = __getValue();
      if (value) {
        changeCallBack(value);
      }
    },
    /**
     * 父子菜单联动，自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key 菜单键
     * @param childKey 子菜单键
     * @param callback 回调
     * @param replaceValueFn 用于修改mainValue，返回undefined则不做处理
     */
    execInheritMenuOnce(key, childKey, callback, replaceValueFn) {
      let that = this;
      const handleInheritValue = (key2, childKey2) => {
        let mainValue = that.getValue(key2);
        let childValue = that.getValue(childKey2);
        if (typeof replaceValueFn === "function") {
          let changedMainValue = replaceValueFn(mainValue, childValue);
          if (changedMainValue !== void 0) {
            return changedMainValue;
          }
        }
        return mainValue;
      };
      this.execMenuOnce(
        key,
        callback,
        () => {
          return handleInheritValue(key, childKey);
        },
        () => {
          return handleInheritValue(key, childKey);
        }
      );
      this.execMenuOnce(
        childKey,
        () => {
        },
        () => false,
        () => {
          this.triggerMenuValueChange(key);
          return false;
        }
      );
    },
    /**
     * 根据key执行一次
     * @param key
     */
    onceExec(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExec.has(key)) {
        return;
      }
      callback();
      this.$data.onceExec.set(key, 1);
    },
    /**
     * 显示设置面板
     */
    showPanel() {
      __pops.panel({
        title: {
          text: `${SCRIPT_NAME}-设置`,
          position: "center",
          html: false,
          style: ""
        },
        content: this.getPanelContentConfig(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
            toHide: false
          }
        },
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        drag: true,
        only: true
      });
    },
    /**
     * 显示移动端设置面板
     */
    showMPanel() {
      __pops.panel({
        title: {
          text: `${SCRIPT_NAME}-设置`,
          position: "center",
          html: false,
          style: ""
        },
        content: this.getMPanelContentConfig(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
            toHide: false
          }
        },
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        drag: true,
        only: true
      });
    },
    /**
     * 判断是否是移动端
     */
    isMobile() {
      return window.innerWidth < 550;
    },
    /**
     * 获取设置面板的宽度
     */
    getWidth() {
      if (window.innerWidth < 550) {
        return "92vw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.innerHeight < 450) {
        return "80vh";
      } else {
        return "450px";
      }
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [
        PanelCommonConfig,
        PanelVideoConfig,
        PanelRecommendVideoConfig,
        PanelSearchConfig,
        PanelLiveConfig
      ];
      return configList;
    },
    /**
     * 获取配置内容
     */
    getMPanelContentConfig() {
      let configList = [
        MPanelShareUserConfig,
        MPanelShareNoteConfig,
        MPanelShareChallengeConfig,
        MPanelShareVideoConfig,
        MPanelShareMusicConfig
      ];
      return configList;
    }
  };
  const _SCRIPT_NAME_ = "抖音优化";
  const utils = Utils.noConflict();
  let domUtils = DOMUtils.noConflict();
  const __pops = pops;
  const console$1 = _unsafeWindow.console || _monkeyWindow.console;
  const log = new utils.Log(_GM_info, console$1);
  let SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  log.config({
    debug: false,
    logMaxCount: 100,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config(
    Object.defineProperties(
      {
        html: true,
        autoClose: true,
        showClose: false,
        zIndex: 1e7
      },
      {
        position: {
          get() {
            return PopsPanel.getValue("qmsg-config-position", "bottom");
          }
        },
        maxNums: {
          get() {
            return PopsPanel.getValue("qmsg-config-maxnums", 5);
          }
        },
        showReverse: {
          get() {
            return PopsPanel.getValue("qmsg-config-showreverse", true);
          }
        }
      }
    )
  );
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const httpx = new utils.Httpx(_GM_xmlhttpRequest);
  httpx.interceptors.response.use(void 0, (data) => {
    log.error(["拦截器-请求错误", data]);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消");
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常");
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时");
    } else {
      Qmsg.error("其它错误");
    }
    return data;
  });
  const addStyle = utils.addStyle.bind(utils);
  const $ = document.querySelector.bind(document);
  document.querySelectorAll.bind(document);
  const BlockTopNavigator = {
    init() {
      PopsPanel.execInheritMenuOnce(
        "shieldTopNavigator",
        "search-shieldTopNavigator",
        () => {
          return this.shieldTopNavigator();
        },
        (mainValue, childValue) => {
          if (DouYinRouter.isSearch()) {
            if (childValue == 1) {
              return true;
            } else if (childValue == 0) {
              return false;
            } else ;
          }
        }
      );
      PopsPanel.execMenuOnce("shieldClientTip", () => {
        return this.shieldClientTip();
      });
      PopsPanel.execMenuOnce("shieldFillingBricksAndStones", () => {
        return this.shieldFillingBricksAndStones();
      });
      PopsPanel.execMenuOnce("shieldClient", () => {
        return this.shieldClient();
      });
      PopsPanel.execMenuOnce("shieldQuickAccess", () => {
        return this.shieldQuickAccess();
      });
      PopsPanel.execMenuOnce("shieldNotifitation", () => {
        return this.shieldNotifitation();
      });
      PopsPanel.execMenuOnce("shieldPrivateMessage", () => {
        return this.shieldPrivateMessage();
      });
      PopsPanel.execMenuOnce("shieldSubmission", () => {
        return this.shieldSubmission();
      });
      PopsPanel.execMenuOnce("shieldWallpaper", () => {
        return this.shieldWallpaper();
      });
      PopsPanel.execMenuOnce("shieldBottomQuestionButton", () => {
        return this.shieldBottomQuestionButton();
      });
    },
    /**
     * 【屏蔽】顶部导航栏
     */
    shieldTopNavigator() {
      log.info("【屏蔽】顶部导航栏");
      let result = [];
      result.push(CommonUtil.addBlockCSS("#douyin-header"));
      result.push(
        addStyle(
          /*css*/
          `
			/* 修复视频的高度 */
			#douyin-right-container{
				padding-top: 0px !important;
			}
		`
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          addStyle(
            /*css*/
            `
				/* 把搜索顶部的工具栏置顶 */
				#search-content-area > div > div:nth-child(1) > div:nth-child(1){
					top: 0;
				}`
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】充钻石
     */
    shieldFillingBricksAndStones() {
      log.info("【屏蔽】充钻石");
      let result = [];
      const iconPath = `d="M5.60303 11.9999C5.60303 8.46713 8.46689 5.60327 11.9996 5.60327C14.2773 5.60327 16.2777 6.79321 17.412 8.5889C18.0354 9.57571 18.3962 10.7445 18.3962 11.9999C18.3962 15.5326 15.5324 18.3965 11.9996 18.3965C8.46689 18.3965 5.60303 15.5326 5.60303 11.9999ZM11.9996 4.10327C7.63846 4.10327 4.10303 7.6387 4.10303 11.9999C4.10303 16.3611 7.63846 19.8965 11.9996 19.8965C16.3608 19.8965 19.8962 16.3611 19.8962 11.9999C19.8962 10.4527 19.4505 9.0073 18.6802 7.78781C17.2826 5.57536 14.8133 4.10327 11.9996 4.10327ZM14.1261 7.62271V7.12561H12.6261V13.5879H12.6272C12.6272 14.442 11.9421 15.1238 11.11 15.1238C10.2778 15.1238 9.59277 14.442 9.59277 13.5879C9.59277 12.7338 10.2778 12.052 11.11 12.052V10.552C9.43784 10.552 8.09277 11.917 8.09277 13.5879C8.09277 15.2588 9.43784 16.6238 11.11 16.6238C12.7821 16.6238 14.1272 15.2588 14.1272 13.5879H14.1261V10.3601C14.6219 10.6754 15.2097 10.8582 15.8413 10.8582V9.35821C14.8998 9.35821 14.1261 8.58701 14.1261 7.62271Z"`;
      result.push(
        CommonUtil.addBlockCSS(
          // 2024.8.12
          `div[id^="douyin-header-menu"] pace-island > div > div:has(path[${iconPath}])`,
          // 2024.7.16 更多 充钻石
          'body .semi-portal .semi-portal-inner li.semi-dropdown-item:has(a[href*="douyin_recharge"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            // 2024.8.12
            `div[id^="douyin-header-menu"] >  div > div > div:has(path[${iconPath}])`
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          CommonUtil.addBlockCSS(
            // 直播
            '#douyin-header pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】客户端
     */
    shieldClient() {
      log.info("【屏蔽】客户端");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container',
          // 2024.7.15
          'div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[download^="douyin-downloader"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            'div:has(> div[data-e2e="something-button"] path[d="M18.404 19.018h-12v-1.5h12v1.5zM11.654 13.457v-8.19h1.5v8.19l3.22-3.22 1.06 1.061-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5 1.06-1.06 3.22 3.22z"])',
            // 2024.7.15
            'div[id^="douyin-header-menu"] >  div > div > div:has(a[download^="douyin-downloader"])'
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          CommonUtil.addBlockCSS(
            // 直播
            '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container:has(a)',
            // 直播
            '#douyin-header pace-island[id^="island"] > div[class] span:has(a[download][href*="client"])',
            /* 直播 更多 客户端 */
            '.semi-portal-inner .semi-dropdown-content .semi-dropdown-item:has(a[download][href*="client"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】快捷访问
     */
    shieldQuickAccess() {
      log.info("【屏蔽】快捷访问");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          'header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(.quick-access-nav-icon)',
          // 直播 更多里面的 快捷访问
          // '.semi-portal-inner .semi-dropdown-content .semi-dropdown-item'
          // 2024.7.15 更新规则
          'div[id^="douyin-header-menu"] pace-island > div > div:has(.quick-access-nav-icon)'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS("div:has(>div>div>.quick-access-nav-icon)")
        );
        utils.waitNode('li.semi-dropdown-item[role="menuitem"]', 1e4).then(($semi) => {
          if (!$semi) {
            return;
          }
          let observer = utils.mutationObserver(document.body, {
            config: {
              subtree: true,
              childList: true
            },
            callback() {
              let isFind = false;
              document.querySelectorAll('li.semi-dropdown-item[role="menuitem"]').forEach(($ele) => {
                var _a2;
                if ((_a2 = $ele.textContent) == null ? void 0 : _a2.includes("快捷访问")) {
                  isFind = true;
                  log.success("搜索-更多-快捷访问 移除元素");
                  $ele.remove();
                }
              });
              if (isFind) {
                observer.disconnect();
              }
            }
          });
        });
      } else if (DouYinRouter.isLive()) ;
      return result;
    },
    /**
     * 【屏蔽】通知
     */
    shieldNotifitation() {
      log.info("【屏蔽】通知");
      let result = [];
      result.push(
        // 2024.8.12
        CommonUtil.addBlockCSS(
          '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            // 2024.8.12
            'div[id^="douyin-header-menu"] >  div > div > ul:has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])'
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          CommonUtil.addBlockCSS(
            // 直播
            'div[id^="douyin-header-menu"] pace-island[id^="island"] > * > :has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】私信
     */
    shieldPrivateMessage() {
      log.info("【屏蔽】私信");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])',
          // 直播
          '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        log.info("搜索-【屏蔽】私信");
        result.push(
          CommonUtil.addBlockCSS(
            'ul:has( div>div[data-e2e="im-entry"] )',
            // 2024.7.15
            'div[id^="douyin-header-menu"] >  div > div > ul:has([data-e2e="im-entry"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】投稿
     */
    shieldSubmission() {
      log.info("【屏蔽】投稿");
      let result = [];
      const iconPath = `d="M11.3487 4.90125H11.3164H11.3164C10.2479 4.90124 9.40104 4.90124 8.71799 4.95587C8.01959 5.01173 7.42807 5.12824 6.88626 5.39747C5.95866 5.8584 5.20716 6.60991 4.74622 7.53751C4.477 8.07932 4.36048 8.67084 4.30462 9.36923C4.24999 10.0523 4.24999 10.8991 4.25 11.9677V12V12.0322C4.24999 13.1008 4.24999 13.9477 4.30462 14.6307C4.36048 15.3291 4.477 15.9206 4.74622 16.4624C5.20716 17.39 5.95866 18.1415 6.88626 18.6025C7.42807 18.8717 8.01959 18.9882 8.71799 19.0441C9.40104 19.0987 10.2479 19.0987 11.3164 19.0987H11.3487H12.6513H12.6836C13.7521 19.0987 14.599 19.0987 15.282 19.0441C15.9804 18.9882 16.5719 18.8717 17.1137 18.6025C18.0413 18.1415 18.7928 17.39 19.2538 16.4624C19.523 15.9206 19.6395 15.3291 19.6954 14.6307C19.75 13.9477 19.75 13.1008 19.75 12.0322V12V11.9677C19.75 10.8991 19.75 10.0523 19.6954 9.36923C19.6395 8.67084 19.523 8.07932 19.2538 7.53751C18.7928 6.60991 18.0413 5.8584 17.1137 5.39747C16.5719 5.12824 15.9804 5.01173 15.282 4.95587C14.599 4.90124 13.7521 4.90124 12.6836 4.90125H12.6513H11.3487ZM7.55376 6.74077C7.8529 6.59212 8.22981 6.4997 8.83757 6.45109C9.45382 6.4018 10.2407 6.40125 11.3487 6.40125H12.6513C13.7593 6.40125 14.5462 6.4018 15.1624 6.45109C15.7702 6.4997 16.1471 6.59212 16.4462 6.74077C17.0809 7.05614 17.5951 7.57033 17.9105 8.205C18.0591 8.50414 18.1515 8.88105 18.2002 9.48882C18.2494 10.1051 18.25 10.8919 18.25 12C18.25 13.108 18.2494 13.8949 18.2002 14.5111C18.1515 15.1189 18.0591 15.4958 17.9105 15.7949C17.5951 16.4296 17.0809 16.9438 16.4462 17.2592C16.1471 17.4078 15.7702 17.5002 15.1624 17.5488C14.5462 17.5981 13.7593 17.5987 12.6513 17.5987H11.3487C10.2407 17.5987 9.45382 17.5981 8.83757 17.5488C8.22981 17.5002 7.8529 17.4078 7.55376 17.2592C6.91909 16.9438 6.4049 16.4296 6.08952 15.7949C5.94088 15.4958 5.84846 15.1189 5.79985 14.5111C5.75056 13.8949 5.75 13.108 5.75 12C5.75 10.8919 5.75056 10.1051 5.79985 9.48882C5.84846 8.88105 5.94088 8.50414 6.08952 8.205C6.4049 7.57033 6.91909 7.05614 7.55376 6.74077ZM11.25 15V12.75H9V11.25H11.25V8.99997H12.75V11.25H15V12.75H12.75V15H11.25Z"`;
      result.push(
        CommonUtil.addBlockCSS(
          // 2024.8.12 更新规则
          `div[id^="douyin-header-menu"] pace-island > div > div:has(path[${iconPath}])`
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            // 2024.8.12
            `div[id^="douyin-header-menu"] >  div > div > div:has(path[${iconPath}])`
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】客户端提示
     */
    shieldClientTip() {
      log.info("【屏蔽】客户端提示");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          /* 右上角 通知 下载客户端，实时接收消息通知 */
          'ul li div[data-e2e="something-button"] + div div:has(>a[download*="douyin-downloader"])',
          /* 右上角 个人信息 客户端登录访问更便捷 [下载] */
          '#douyin-header pace-island[id^="island_"] ul > div:has(>a[class][download])',
          /* 右上角 私信 下载客户端，实时接收好友消息 */
          '#douyin-header pace-island[id^="island_"] ul[class] li div[data-e2e="im-entry"]  div>div div div:has(a[download][href])',
          /* 右上角 壁纸 下载客户端，使用壁纸 */
          '#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container div:has(+ #wallpaper-modal)'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            /* 右上角 私信 下载客户端，实时接收好友消息 */
            'div[id^="douyin-header-menu"] ul li div[data-e2e="im-entry"] div > div > div:has(>a[download*="douyin-downloader"])',
            /* 右上角 个人信息 客户端登录访问更便捷 [下载] */
            'div[id^="douyin-header-menu"] ul > div:has(>a[download*="douyin-downloader"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】壁纸
     */
    shieldWallpaper() {
      log.info("【屏蔽】壁纸");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          // 2024.8.12
          'div[id^="douyin-header-menu"] pace-island > div > div:has(span.semi-icon path[d="M9.10335 4.79386C8.86882 4.64984 8.57425 4.64585 8.3359 4.78346C8.09755 4.92108 7.95372 5.17818 7.96117 5.4533L8.05873 9.05336L5.31808 11.3898C5.10864 11.5683 5.01381 11.8473 5.07104 12.1165C5.12826 12.3857 5.32833 12.6019 5.59229 12.6798L9.0463 13.6995L10.4215 17.028C10.5266 17.2824 10.7625 17.4588 11.0362 17.4875C11.3099 17.5163 11.5774 17.3929 11.7331 17.1659L13.3237 14.8471L16.4638 19.3577L17.6949 18.5007L14.6505 14.1276L17.3608 13.9168C17.6352 13.8954 17.8758 13.7255 17.9878 13.4741C18.0997 13.2226 18.065 12.9301 17.8972 12.7119L15.7022 9.85673L16.5462 6.35562C16.6107 6.08806 16.5234 5.80667 16.3189 5.62251C16.1144 5.43835 15.8254 5.38101 15.566 5.47312L12.1723 6.67838L9.10335 4.79386ZM9.56789 9.37117L9.49812 6.79649L11.693 8.14425C11.8862 8.26291 12.1227 8.28777 12.3364 8.21188L14.7635 7.34991L14.16 9.85382C14.1068 10.0743 14.1563 10.3069 14.2945 10.4867L15.8643 12.5286L13.2964 12.7284C13.0704 12.746 12.8644 12.8649 12.7361 13.0519L11.2792 15.1758L10.2957 12.7954C10.2091 12.5858 10.0324 12.4267 9.81491 12.3624L7.34469 11.6332L9.30473 9.96224C9.47729 9.81513 9.57403 9.59784 9.56789 9.37117Z"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            // 2024.8.12
            'div[id^="douyin-header-menu"] >  div > div > div:has(span.semi-icon path[d="M9.10335 4.79386C8.86882 4.64984 8.57425 4.64585 8.3359 4.78346C8.09755 4.92108 7.95372 5.17818 7.96117 5.4533L8.05873 9.05336L5.31808 11.3898C5.10864 11.5683 5.01381 11.8473 5.07104 12.1165C5.12826 12.3857 5.32833 12.6019 5.59229 12.6798L9.0463 13.6995L10.4215 17.028C10.5266 17.2824 10.7625 17.4588 11.0362 17.4875C11.3099 17.5163 11.5774 17.3929 11.7331 17.1659L13.3237 14.8471L16.4638 19.3577L17.6949 18.5007L14.6505 14.1276L17.3608 13.9168C17.6352 13.8954 17.8758 13.7255 17.9878 13.4741C18.0997 13.2226 18.065 12.9301 17.8972 12.7119L15.7022 9.85673L16.5462 6.35562C16.6107 6.08806 16.5234 5.80667 16.3189 5.62251C16.1144 5.43835 15.8254 5.38101 15.566 5.47312L12.1723 6.67838L9.10335 4.79386ZM9.56789 9.37117L9.49812 6.79649L11.693 8.14425C11.8862 8.26291 12.1227 8.28777 12.3364 8.21188L14.7635 7.34991L14.16 9.85382C14.1068 10.0743 14.1563 10.3069 14.2945 10.4867L15.8643 12.5286L13.2964 12.7284C13.0704 12.746 12.8644 12.8649 12.7361 13.0519L11.2792 15.1758L10.2957 12.7954C10.2091 12.5858 10.0324 12.4267 9.81491 12.3624L7.34469 11.6332L9.30473 9.96224C9.47729 9.81513 9.57403 9.59784 9.56789 9.37117Z"])'
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container:has(span.semi-icon)',
            '#douyin-header pace-island[id^="island"] > div[class] span:has(.semi-icon)'
          )
        );
      }
      return result;
    },
    /**
     * 屏蔽底部问题按钮
     */
    shieldBottomQuestionButton() {
      log.info("屏蔽底部问题按钮");
      return CommonUtil.addBlockCSS([
        "#douyin-sidebar",
        /* 推荐视频右下角的？按钮 */
        "#douyin-temp-sidebar"
      ]);
    }
  };
  const BlockSearchFrame = {
    init() {
      PopsPanel.execMenuOnce("shieldSearch", () => {
        return this.shieldSearch();
      });
      PopsPanel.execMenuOnce("shieldSearchPlaceholder", () => {
        return this.shieldSearchPlaceholder();
      });
      PopsPanel.execMenuOnce("shieldSearchGuessYouWantToSearch", () => {
        return this.shieldSearchGuessYouWantToSearch();
      });
      PopsPanel.execMenuOnce("shieldSearchTiktokHotspot", () => {
        return this.shieldSearchTiktokHotspot();
      });
    },
    /**
     * 【屏蔽】搜索框
     */
    shieldSearch() {
      log.info("【屏蔽】搜索框");
      return CommonUtil.addBlockCSS(
        '#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div:has(input[data-e2e="searchbar-input"])'
      );
    },
    /**
     * 【屏蔽】搜索框的提示
     */
    shieldSearchPlaceholder() {
      log.info("【屏蔽】搜索框的提示");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div div:has( + input[data-e2e="searchbar-input"])'
        )
      );
      result.push(
        addStyle(
          /*css*/
          `
			#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div input[data-e2e="searchbar-input"]::placeholder{
				color: transparent;
			}`
        )
      );
      return result;
    },
    /**
     * 【屏蔽】搜索-猜你想搜
     */
    shieldSearchGuessYouWantToSearch() {
      log.info("【屏蔽】搜索-猜你想搜");
      return CommonUtil.addBlockCSS(
        'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-guess-container"])',
        'button[data-e2e="searchbar-button"] + div div[data-e2e="search-guess-container"]'
      );
    },
    /**
     * 【屏蔽】搜索-抖音热点
     */
    shieldSearchTiktokHotspot() {
      log.info("【屏蔽】搜索-抖音热点");
      return CommonUtil.addBlockCSS(
        'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-hot-container"])',
        'button[data-e2e="searchbar-button"] + div div[data-e2e="search-hot-container"]'
      );
    }
  };
  const Hook = {
    $data: {
      document_addEventListener: [],
      element_addEventListener: [],
      setTimeout: [],
      setInterval: [],
      function_apply: [],
      function_call: [],
      defineProperty: []
    },
    /**
     * 劫持 document.addEventListener
     * @param handler
     */
    document_addEventListener(handler) {
      this.$data.document_addEventListener.push(handler);
      log.info("document.addEventListener hook新增劫持判断回调");
      if (this.$data.document_addEventListener.length > 1) {
        return;
      }
      const that = this;
      let weakMap = /* @__PURE__ */ new WeakMap();
      const originAddEventListener = _unsafeWindow.document.addEventListener;
      const originRemoveEventListener = _unsafeWindow.document.removeEventListener;
      _unsafeWindow.document.addEventListener = function(...args) {
        let target = this;
        let eventName = args[0];
        let listener = args[1];
        let options = args[2];
        for (let index = 0; index < that.$data.document_addEventListener.length; index++) {
          const callback = that.$data.document_addEventListener[index];
          const result = Reflect.apply(callback, this, [
            target,
            eventName,
            listener,
            options
          ]);
          if (typeof result === "function") {
            args[1] = result;
            weakMap.set(listener, {
              eventName,
              fn: result,
              options
            });
            break;
          } else if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originAddEventListener, this, args);
      };
      _unsafeWindow.document.removeEventListener = function(...args) {
        let eventName = args[0];
        let listener = args[1];
        let options = args[2];
        if (weakMap.has(listener)) {
          const {
            eventName: __eventName__,
            fn: __listener__,
            options: __options__
          } = weakMap.get(listener);
          let flag = false;
          if (eventName === __eventName__) {
            if (typeof options === "boolean" && options === __options__) {
              flag = true;
            } else if (typeof options === "object" && typeof __options__ === "object" && options["capture"] === __options__["capture"]) {
              flag = true;
            } else if (options == options) {
              flag = true;
            }
          }
          if (flag) {
            args[1] = __listener__;
          }
        }
        return Reflect.apply(originRemoveEventListener, this, args);
      };
    },
    /**
     * 劫持 Element.property.addEventListener
     * @param handler
     */
    element_addEventListener(handler) {
      this.$data.element_addEventListener.push(handler);
      log.info("Element.prototype.addEventListener hook新增劫持判断回调");
      if (this.$data.element_addEventListener.length > 1) {
        return;
      }
      const that = this;
      let weakMap = /* @__PURE__ */ new WeakMap();
      const originAddEventListener = _unsafeWindow.Element.prototype.addEventListener;
      const originRemoveEventListener = _unsafeWindow.Element.prototype.removeEventListener;
      _unsafeWindow.Element.prototype.addEventListener = function(...args) {
        let target = this;
        let eventName = args[0];
        let listener = args[1];
        let options = args[2];
        for (let index = 0; index < that.$data.element_addEventListener.length; index++) {
          const callback = that.$data.element_addEventListener[index];
          const result = Reflect.apply(callback, this, [
            target,
            eventName,
            listener,
            options
          ]);
          if (typeof result === "function") {
            args[1] = result;
            weakMap.set(listener, {
              eventName,
              fn: result,
              options
            });
            break;
          } else if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originAddEventListener, this, args);
      };
      _unsafeWindow.Element.prototype.removeEventListener = function(...args) {
        let eventName = args[0];
        let listener = args[1];
        let options = args[2];
        if (weakMap.has(listener)) {
          const {
            eventName: __eventName__,
            fn: __listener__,
            options: __options__
          } = weakMap.get(listener);
          let flag = false;
          if (__eventName__ === eventName) {
            if (typeof options === "boolean" && options === __options__) {
              flag = true;
            } else if (typeof options === "object" && typeof __options__ === "object" && options["capture"] === __options__["capture"]) {
              flag = true;
            } else if (options == __options__) {
              flag = true;
            }
          }
          if (flag) {
            args[1] = __listener__;
          }
        }
        return Reflect.apply(originRemoveEventListener, this, args);
      };
    },
    /**
     * 劫持 window.setTimeout
     *
     * @param handler
     */
    setTimeout(handler) {
      this.$data.setTimeout.push(handler);
      log.info("window.setTimeout hook新增劫持");
      if (this.$data.setTimeout.length > 1) {
        return;
      }
      const that = this;
      let originSetTimeout = _unsafeWindow.setTimeout;
      _unsafeWindow.setTimeout = function(...args) {
        let fn = args[0];
        let timeout = args[1];
        for (let index = 0; index < that.$data.setTimeout.length; index++) {
          const item = that.$data.setTimeout[index];
          const result = item(fn, timeout);
          if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originSetTimeout, this, args);
      };
    },
    /**
     * 劫持 window.setInterval
     * @param handler
     */
    setInterval(handler) {
      this.$data.setInterval.push(handler);
      log.info("window.setInterval hook新增劫持");
      if (this.$data.setInterval.length > 1) {
        return;
      }
      const that = this;
      let originSetInterval = _unsafeWindow.setInterval;
      _unsafeWindow.setInterval = function(...args) {
        let fn = args[0];
        let timeout = args[1];
        for (let index = 0; index < that.$data.setInterval.length; index++) {
          const item = that.$data.setInterval[index];
          const result = item(fn, timeout);
          if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originSetInterval, this, args);
      };
    },
    /**
     * 劫持 Function.prototype.apply
     * @param handler
     */
    function_apply(handler) {
      this.$data.function_apply.push(handler);
      log.info("Function.prototype.apply hook新增劫持");
      if (this.$data.function_apply.length > 1) {
        return;
      }
      const that = this;
      let originFunctionApply = _unsafeWindow.Function.prototype.apply;
      _unsafeWindow.Function.prototype.apply = function(...args) {
        let thisArg = args[0];
        let argArray = args[1];
        let context = this;
        for (let index = 0; index < that.$data.function_apply.length; index++) {
          const item = that.$data.function_apply[index];
          const result = item(context, thisArg, argArray);
          if (result != null) {
            args[0] = result.thisArg;
            args[1] = result.argArray;
            context = result.context;
            break;
          }
        }
        return Reflect.apply(originFunctionApply, context, args);
      };
    },
    /**
     * 劫持 Function.prototype.call
     * @param handler
     */
    function_call(handler) {
      this.$data.function_call.push(handler);
      log.info("Function.prototype.call hook新增劫持");
      if (this.$data.function_call.length > 1) {
        return;
      }
      const that = this;
      let originFunctionCall = _unsafeWindow.Function.prototype.call;
      _unsafeWindow.Function.prototype.call = function(...args) {
        let thisArg = args[0];
        let argArray = args.slice(1);
        let context = this;
        for (let index = 0; index < that.$data.function_call.length; index++) {
          const item = that.$data.function_call[index];
          const result = item(context, thisArg, argArray);
          if (result != null) {
            args[0] = result.thisArg;
            args.splice(1, argArray.length, ...result.argArray);
            context = result.context;
            break;
          }
        }
        return Reflect.apply(originFunctionCall, context, args);
      };
    },
    /**
     * 劫持 Object.defineProperty
     * @package handler
     */
    defineProperty(handler) {
      this.$data.defineProperty.push(handler);
      log.info("Object.defineProperty hook新增劫持");
      if (this.$data.defineProperty.length > 1) {
        return;
      }
      const that = this;
      let originDefineProperty = _unsafeWindow.Object.defineProperty;
      _unsafeWindow.Object.defineProperty = function(...args) {
        let target = args[0];
        let key = args[1];
        let attributes = args[2];
        for (let index = 0; index < that.$data.defineProperty.length; index++) {
          const item = that.$data.defineProperty[index];
          const result = item(target, key, attributes);
          if (result != null) {
            args[0] = result.target;
            args[1] = result.key;
            args[2] = result.attributes;
            break;
          }
        }
        return Reflect.apply(originDefineProperty, this, args);
      };
    },
    /**
     * 劫持webpack
     * @param webpackName 当前全局变量的webpack名
     * @param mainCoreData 需要劫持的webpack的顶部core
     * 例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
     * 此时mainCoreData是["core:0"]
     * @param handler 如果mainCoreData匹配上，则调用此回调函数，替换的话把传入的值进行处理后再返回它就行
     */
    window_webpack(webpackName = "webpackJsonp", mainCoreData, handler) {
      let originObject = void 0;
      _unsafeWindow.Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          log.success("成功劫持webpack，当前webpack名：" + webpackName);
          originObject = newValue;
          const originPush = originObject.push;
          originObject.push = function(...args) {
            let _mainCoreData = args[0][0];
            if (mainCoreData == _mainCoreData || Array.isArray(mainCoreData) && Array.isArray(_mainCoreData) && JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData)) {
              Object.keys(args[0][1]).forEach((keyName) => {
                let originSwitchFunc = args[0][1][keyName];
                args[0][1][keyName] = function(..._args) {
                  let result = originSwitchFunc.call(this, ..._args);
                  _args[0] = handler(_args[0]);
                  return result;
                };
              });
            }
            return Reflect.apply(originPush, this, args);
          };
        }
      });
    }
  };
  const DouYinHook = {
    $data: {
      hookElementAddEventListener: []
    },
    init() {
      PopsPanel.onceExec("hookKeyboard", () => {
        DouYinHook.disableShortCut();
      });
      PopsPanel.execMenu("dy-cookie-remove__ac__", () => {
        this.removeCookie();
      });
      if (DouYinRouter.isVideo()) {
        PopsPanel.execMenuOnce("dy-video-disableDoubleClickLike", () => {
          DouYinHook.disableDoubleClickLike();
        });
      } else if (DouYinRouter.isLive()) {
        PopsPanel.execMenuOnce("dy-live-disableDoubleClickLike", () => {
          DouYinHook.disableDoubleClickLike();
        });
      }
    },
    /**
     * 移除环境检测
     */
    removeEnvCheck() {
      log.info("移除环境检测");
      let originalSetInterval = _unsafeWindow.setInterval;
      _unsafeWindow.setInterval = function(callback, time) {
        let funcStr = callback.toString().trim();
        if (funcStr.includes("debugger")) {
          log.success(["拦截→", [funcStr]]);
          return;
        }
        if (funcStr.includes("checkEXp")) {
          log.success(["拦截→", [funcStr]]);
          return;
        }
        return originalSetInterval.call(this, callback, time);
      };
    },
    /**
     * 移除Cookie
     */
    removeCookie() {
      let cookieHandler = new utils.GM_Cookie();
      let cookieNameList = ["__ac_signature", "__ac_referer", "__ac_nonce"];
      cookieNameList.forEach((cookieName) => {
        cookieHandler.delete(
          {
            name: cookieName
          },
          (error) => {
            if (error) {
              log.error(`移除Cookie失败 ==> ${cookieName}`, error);
            } else {
              log.success(`移除Cookie成功 ==> ${cookieName}`);
            }
          }
        );
      });
    },
    /**
     * 禁用快捷键
     */
    disableShortCut() {
      Hook.document_addEventListener((target, eventName, listener, option) => {
        if (["keydown", "keypress", "keyup"].includes(eventName) && typeof listener === "function") {
          return function(...eventArgs) {
            let event = eventArgs[0];
            event.key;
            let code = event.code;
            event.charCode || event.keyCode || event.which;
            let otherCodeList = [];
            if (event.ctrlKey) {
              otherCodeList.push("ctrl");
            }
            if (event.altKey) {
              otherCodeList.push("alt");
            }
            if (event.metaKey) {
              otherCodeList.push("meta");
            }
            if (event.shiftKey) {
              otherCodeList.push("shift");
            }
            let keyboardConfigList = [
              {
                enableKey: "dy-keyboard-hook-likeOrDislike",
                code: ["KeyZ"]
              },
              {
                enableKey: "dy-keyboard-hook-comment",
                code: ["KeyX"]
              },
              {
                enableKey: "dy-keyboard-hook-danmaku-enable",
                code: ["KeyB"]
              },
              {
                enableKey: "dy-keyboard-hook-collect-enable",
                code: ["KeyC"]
              },
              {
                enableKey: "dy-keyboard-hook-copyShareLink",
                code: ["KeyV"]
              },
              {
                enableKey: "dy-keyboard-hook-clearScreen",
                code: ["KeyJ"]
              },
              {
                enableKey: "dy-keyboard-hook-automaticBroadcast",
                code: ["KeyK"]
              },
              {
                enableKey: "dy-keyboard-hook-videoInfo",
                code: ["KeyI"]
              },
              {
                enableKey: "dy-keyboard-hook-notInterested",
                code: ["KeyR"]
              },
              {
                enableKey: "dy-keyboard-hook-enterAuthorHomePage",
                code: ["KeyF"]
              },
              {
                enableKey: "dy-keyboard-hook-follow",
                code: ["KeyG"]
              },
              {
                enableKey: "dy-keyboard-hook-search",
                code: ["KeyF"],
                otherCodeList: ["shift"]
              },
              {
                enableKey: "dy-keyboard-hook-closeTheCurrentPageWithOneClick",
                code: ["KeyQ"],
                otherCodeList: ["shift"]
              },
              {
                enableKey: "dy-keyboard-hook-pageUpAndDown",
                code: ["ArrowUp", "ArrowDown"]
              },
              {
                enableKey: "dy-keyboard-hook-fastForwardAndFastBack",
                code: ["ArrowLeft", "ArrowRight"]
              },
              {
                enableKey: "dy-keyboard-hook-pause",
                code: ["Space"]
              },
              {
                enableKey: "dy-keyboard-hook-fullScreenInsideThePage",
                code: ["KeyY"]
              },
              {
                enableKey: "dy-keyboard-hook-fullScreen",
                code: ["KeyH"]
              },
              {
                enableKey: "dy-keyboard-hook-watchItOutLater",
                code: ["KeyL"]
              },
              {
                enableKey: "dy-keyboard-hook-volumeAdjustment",
                code: ["Minus"],
                otherCodeList: ["shift"]
              },
              {
                enableKey: "dy-keyboard-hook-listOfCallShortcutKeys",
                code: ["Slash"],
                otherCodeList: ["shift"]
              },
              {
                enableKey: "dy-keyboard-hook-closeTheShortcutKeyList",
                code: ["Escape"]
              },
              {
                enableKey: "dy-keyboard-hook-relevantRecommendation",
                code: ["KeyN"]
              }
            ];
            if (DouYinRouter.isVideo()) {
              keyboardConfigList.push(
                {
                  enableKey: "dy-keyboard-hook-arrowUp-w",
                  code: ["KeyW"]
                },
                {
                  enableKey: "dy-keyboard-hook-arrowDown-s",
                  code: ["KeyS"]
                },
                {
                  enableKey: "dy-keyboard-hook-videoRewind",
                  code: ["KeyA"]
                },
                {
                  enableKey: "dy-keyboard-hook-videoFastForward",
                  code: ["KeyD"]
                }
              );
            } else if (DouYinRouter.isLive()) {
              keyboardConfigList.push(
                {
                  enableKey: "dy-live-refresh",
                  code: ["KeyE"]
                },
                {
                  enableKey: "dy-live-screenRotation",
                  code: ["KeyD"]
                },
                {
                  enableKey: "dy-live-enableSmallWindowMode",
                  code: ["KeyU"]
                }
              );
            }
            for (let index = 0; index < keyboardConfigList.length; index++) {
              const keyboardConfig = keyboardConfigList[index];
              if (keyboardConfig.code.includes(code)) {
                if (Array.isArray(keyboardConfig.otherCodeList)) {
                  let findValue = keyboardConfig.otherCodeList.find(
                    (item) => !otherCodeList.includes(item)
                  );
                  if (findValue) {
                    continue;
                  }
                }
                if (!PopsPanel.getValue(keyboardConfig.enableKey)) {
                  continue;
                }
                return;
              }
            }
            return Reflect.apply(listener, this, eventArgs);
          };
        }
      });
    },
    /**
     * 禁用双击点赞
     */
    disableDoubleClickLike() {
      let latestClickTime = Date.now();
      Hook.element_addEventListener((target, eventName, listener, option) => {
        var _a2;
        const listenerStr = listener.toString();
        if (eventName === "click" && target instanceof HTMLElement && ((_a2 = target == null ? void 0 : target.classList) == null ? void 0 : _a2.contains("xgplayer")) && listenerStr.match(/video|innerContainer|video.__canvas|mouse/)) {
          return function(...eventArgs) {
            let currentClickTime = Date.now();
            if (currentClickTime - latestClickTime <= 288) {
              latestClickTime = currentClickTime;
              log.success("阻止触发双击点赞");
              return;
            }
            latestClickTime = currentClickTime;
            Reflect.apply(listener, this, eventArgs);
          };
        }
      });
    }
  };
  const DouYinAccount = {
    /**
     * 伪装登录
     */
    disguiseLogin() {
      log.info("伪装登录");
      const WAIT_TIME = 2e4;
      let uid = parseInt((Math.random() * 1e6).toString());
      let notChangeInfoUid = Object.defineProperty({}, "uid", {
        value: uid,
        writable: false
      });
      function getUserInfo(element) {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
        let userInfoList = [];
        let $react = utils.getReactObj(element);
        let reactFiber = $react == null ? void 0 : $react.reactFiber;
        $react == null ? void 0 : $react.reactProps;
        if ((_c = (_b = (_a2 = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _a2.return) == null ? void 0 : _b.memoizedProps) == null ? void 0 : _c.userInfo) {
          userInfoList.push(
            (_f = (_e = (_d = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _d.return) == null ? void 0 : _e.memoizedProps) == null ? void 0 : _f.userInfo
          );
        }
        if ((_j = (_i = (_h = (_g = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _g.return) == null ? void 0 : _h.memoizedProps) == null ? void 0 : _i.userInfo) == null ? void 0 : _j.userInfo) {
          userInfoList.push(
            (_m = (_l = (_k = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _k.return) == null ? void 0 : _l.memoizedProps) == null ? void 0 : _m.userInfo.userInfo
          );
        }
        if ((_q = (_p = (_o = (_n = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _n.return) == null ? void 0 : _o.return) == null ? void 0 : _p.memoizedProps) == null ? void 0 : _q.userInfo) {
          userInfoList.push(
            (_u = (_t = (_s = (_r = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _r.return) == null ? void 0 : _s.return) == null ? void 0 : _t.memoizedProps) == null ? void 0 : _u.userInfo
          );
        }
        if ((_z = (_y = (_x = (_w = (_v = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _v.return) == null ? void 0 : _w.return) == null ? void 0 : _x.memoizedProps) == null ? void 0 : _y.userInfo) == null ? void 0 : _z.userInfo) {
          userInfoList.push(
            (_D = (_C = (_B = (_A = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _A.return) == null ? void 0 : _B.return) == null ? void 0 : _C.memoizedProps) == null ? void 0 : _D.userInfo.userInfo
          );
        }
        return userInfoList;
      }
      function setLogin(element) {
        getUserInfo(element).forEach((userInfo) => {
          Object.defineProperties(userInfo, {
            info: {
              value: notChangeInfoUid,
              writable: false
            },
            isLogin: {
              value: true,
              writable: false
            }
          });
        });
      }
      DouYinElement.watchVideDataListChange(($os) => {
        setLogin($os);
      });
      utils.waitNode("#root div[class*='-os']", WAIT_TIME).then(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback: utils.debounce(() => {
            let $os = DouYinElement.getOSElement();
            if (!$os) {
              return;
            }
            setLogin($os);
          }, 70)
        });
      }).catch((err) => {
      });
      if (DouYinRouter.isLive()) {
        log.info("伪装登录：live");
        utils.waitNode(
          `#douyin-header div:has(.dy-tip-container)`,
          WAIT_TIME
        ).then(() => {
          utils.mutationObserver(document.body, {
            config: {
              subtree: true,
              childList: true
            },
            callback: utils.debounce(() => {
              setLogin(
                document.querySelector(`#douyin-header`)
              );
            }, 70)
          });
        });
      } else if (DouYinRouter.isSearch()) {
        let setUserInfoBySearch = function($ele) {
          var _a2, _b, _c, _d, _e, _f, _g;
          let $react = utils.getReactObj($ele);
          $react == null ? void 0 : $react.reactFiber;
          let reactProps = $react == null ? void 0 : $react.reactProps;
          if (typeof ((_d = (_c = (_b = (_a2 = reactProps == null ? void 0 : reactProps.children) == null ? void 0 : _a2[1]) == null ? void 0 : _b.props) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.isLogin) === "boolean") {
            Reflect.set(reactProps.children[1].props.userInfo, "isLogin", true);
          }
          if (typeof ((_g = (_f = (_e = reactProps == null ? void 0 : reactProps.children) == null ? void 0 : _e[1]) == null ? void 0 : _f.props) == null ? void 0 : _g.isClient) === "boolean") {
            Reflect.set(reactProps.children[1].props, "isClient", true);
          }
        };
        log.info("伪装登录：search");
        utils.waitNode("#root > div", WAIT_TIME).then(($rootDiv) => {
          if (!$rootDiv) {
            log.error("#root > div获取失败");
            return;
          }
          utils.mutationObserver(document.body, {
            config: {
              subtree: true,
              childList: true
            },
            callback: utils.debounce((mutation, observer) => {
              setUserInfoBySearch($rootDiv);
            }, 70)
          });
        });
      }
    },
    /**
     * 关闭登录弹窗
     */
    watchLoginDialogToClose() {
      log.info("监听登录弹窗并关闭");
      CommonUtil.addBlockCSS('div[id^="login-full-panel-"]');
      utils.waitNode("body").then(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback() {
            var _a2, _b;
            let accountCloseBtn = document.querySelector(
              'body > div[id^="login-full-panel-"] .dy-account-close'
            );
            if (accountCloseBtn) {
              (_b = (_a2 = utils.getReactObj(accountCloseBtn)) == null ? void 0 : _a2.reactProps) == null ? void 0 : _b.onClick(new Event("click"));
            }
          }
        });
      });
    }
  };
  const DouYinRedirect = {
    init() {
      PopsPanel.execMenu("douyin-redirect-url-home-to-root", () => {
        this.redirectUrlHomeToRoot();
      });
    },
    /**
     * 从首页到根目录
     */
    redirectUrlHomeToRoot() {
      if (window.location.pathname === "/home") {
        log.info("从首页跳转到根目录");
        window.location.href = window.location.origin + "/?is_from_mobile_home=1&recommend=1";
      }
    }
  };
  const BlockLeftNavigator = {
    init() {
      PopsPanel.execInheritMenuOnce(
        "shieldLeftNavigator",
        "search-shieldLeftNavigator",
        () => {
          return this.shieldLeftNavigator();
        },
        (mainValue, childValue) => {
          if (DouYinRouter.isSearch()) {
            if (childValue == 1) {
              return true;
            } else if (childValue == 0) {
              return false;
            } else ;
          }
        }
      );
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-home", () => {
        return this.block_tab_home();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-recommend", () => {
        return this.block_tab_recommend();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-follow", () => {
        return this.block_tab_follow();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-friend", () => {
        return this.block_tab_friend();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-user_self", () => {
        return this.block_tab_user_self();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-user_self_like", () => {
        return this.block_tab_user_self_like();
      });
      PopsPanel.execMenuOnce(
        "shieldLeftNavigator-tab-user_self_collection",
        () => {
          return this.block_tab_user_self_collection();
        }
      );
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-user_self_record", () => {
        return this.block_tab_user_self_record();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-olympics", () => {
        return this.block_tab_olympics();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-live", () => {
        return this.block_tab_live();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-vs", () => {
        return this.block_tab_vs();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-series", () => {
        return this.block_tab_series();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-channel_300203", () => {
        return this.block_tab_channel_300203();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-channel_300205", () => {
        return this.block_tab_channel_300205();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-channel_300206", () => {
        return this.block_tab_channel_300206();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-channel_300209", () => {
        return this.block_tab_channel_300209();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-channel_300204", () => {
        return this.block_tab_channel_300204();
      });
    },
    /**
     * 【屏蔽】左侧导航栏
     */
    shieldLeftNavigator() {
      log.info("【屏蔽】左侧导航栏");
      let result = [];
      result.push(CommonUtil.addBlockCSS("#douyin-navigation"));
      result.push(
        addStyle(
          /*css*/
          `
			/* 修复顶部导航栏的宽度 */
			#douyin-header{
				width: 100%;
			}`
        )
      );
      return result;
    },
    /**
     * 【屏蔽】首页
     */
    block_tab_home() {
      log.info("【屏蔽】首页");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-discover)'
      );
    },
    /**
     * 【屏蔽】推荐
     */
    block_tab_recommend() {
      log.info("【屏蔽】推荐");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-recommend)'
      );
    },
    /**
     * 【屏蔽】关注
     */
    block_tab_follow() {
      log.info("【屏蔽】关注");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-follow)'
      );
    },
    /**
     * 【屏蔽】朋友
     */
    block_tab_friend() {
      log.info("【屏蔽】朋友");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-friend)'
      );
    },
    /**
     * 【屏蔽】我的
     */
    block_tab_user_self() {
      log.info("【屏蔽】我的");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self)'
      );
    },
    /**
     * 【屏蔽】喜欢
     */
    block_tab_user_self_like() {
      log.info("【屏蔽】喜欢");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self_like)'
      );
    },
    /**
     * 【屏蔽】收藏
     */
    block_tab_user_self_collection() {
      log.info("【屏蔽】收藏");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self_collection)'
      );
    },
    /**
     * 【屏蔽】观看历史
     */
    block_tab_user_self_record() {
      log.info("【屏蔽】观看历史");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self_record)'
      );
    },
    /**
     * 【屏蔽】看奥运
     */
    block_tab_olympics() {
      log.info("【屏蔽】看奥运");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-olympics)'
      );
    },
    /**
     * 【屏蔽】直播
     */
    block_tab_live() {
      log.info("【屏蔽】直播");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-live)'
      );
    },
    /**
     * 【屏蔽】放映厅
     */
    block_tab_vs() {
      log.info("【屏蔽】放映厅");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-vs)'
      );
    },
    /**
     * 【屏蔽】短剧
     */
    block_tab_series() {
      log.info(`短剧`);
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-series)'
      );
    },
    /**
     * 【屏蔽】知识
     */
    block_tab_channel_300203() {
      log.info("【屏蔽】知识");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300203)'
      );
    },
    /**
     * 【屏蔽】游戏
     */
    block_tab_channel_300205() {
      log.info("【屏蔽】游戏");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300205)'
      );
    },
    /**
     * 【屏蔽】二次元
     */
    block_tab_channel_300206() {
      log.info("【屏蔽】二次元");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300206)'
      );
    },
    /**
     * 【屏蔽】音乐
     */
    block_tab_channel_300209() {
      log.info("【屏蔽】音乐");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300209)'
      );
    },
    /**
     * 【屏蔽】美食
     */
    block_tab_channel_300204() {
      log.info("【屏蔽】美食");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300204)'
      );
    }
  };
  const blockCSS$6 = "/* 从顶部往下弹出的下载抖音电脑版的drawer提示 */\r\n#douyin-web-download-guide-container {\r\n	display: none !important;\r\n}\r\n";
  const blockCSS$5 = '/* 资料右边的 下载桌面客户端，桌面快捷访问 */\r\ndiv[data-e2e="user-detail"] div:has(> div > a[href*="douyin-pc"]) {\r\n	display: none !important;\r\n}\r\n';
  const DouYinUser = {
    init() {
      addStyle(blockCSS$5);
    }
  };
  const DouYin = {
    init() {
      addStyle(blockCSS$6);
      DouYinGestureBackClearHash();
      DouYinHook.init();
      DouYinRedirect.init();
      PopsPanel.execMenuOnce("watchLoginDialogToClose", () => {
        DouYinAccount.watchLoginDialogToClose();
      });
      PopsPanel.execMenuOnce("disguiseLogin", () => {
        DouYinAccount.disguiseLogin();
      });
      PopsPanel.execMenuOnce("dy-initialScale", () => {
        this.initialScale();
      });
      PopsPanel.execMenu("dy-apple-removeMetaAppleItunesApp", () => {
        this.removeMetaAppleItunesApp();
      });
      BlockLeftNavigator.init();
      BlockTopNavigator.init();
      BlockSearchFrame.init();
      if (DouYinRouter.isLive()) {
        log.info("Router: 直播");
        DouYinLive.init();
      } else if (DouYinRouter.isIndex()) {
        if (DouYinRouter.isVideo()) {
          log.info("Router: 视频页面");
          DouYinVideo.init();
        }
        if (DouYinRouter.isSearch()) {
          log.info("Router: 搜索");
          DouYinSearch.init();
        } else if (DouYinRouter.isUser()) {
          log.info(`Router: 用户页面`);
          DouYinUser.init();
        } else {
          log.error("未适配router: " + window.location.hostname);
        }
      } else {
        log.error("未适配router: " + window.location.hostname);
      }
    },
    /**
     * 固定meta viewport缩放倍率为1
     */
    initialScale() {
      log.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>");
      domUtils.ready(() => {
        let meta = domUtils.createElement(
          "meta",
          {},
          {
            name: "viewport",
            content: "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"
          }
        );
        domUtils.remove("meta[name='viewport']");
        utils.waitNode("head").then(() => {
          document.head.appendChild(meta);
        });
      });
    },
    /**
     * 移除<meta>标签name="apple-itunes-app"
     */
    removeMetaAppleItunesApp() {
      utils.waitNodeList(
        ['meta[name="apple-itunes-app"]'],
        1e4
      ).then(($metaList) => {
        if (!$metaList) {
          return;
        }
        $metaList.forEach(($meta) => {
          $meta.remove();
        });
      });
    }
  };
  const MDouYinRouter = {
    /**
     * 是否是移动端抖音
     */
    isMDouYin() {
      return window.location.hostname === "m.douyin.com" || window.location.hostname === "www.iesdouyin.com";
    },
    /**
     * 用户主页
     */
    isShareUser() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/user/");
    },
    /**
     * 分享的视频
     */
    isShareVideo() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/video/");
    },
    /**
     * 笔记
     */
    isShareNote() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/note/");
    },
    /**
     * 音乐
     */
    isShareMusic() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/music/");
    },
    /**
     * 话题
     */
    isShareChallenge() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/challenge/");
    }
  };
  const blockCSS$4 = "/* 顶部 打开看看 登录 */\r\n.adapt-login-header,\r\n/* 上面屏蔽后的空白区域 */\r\n.user-card .nav-bar-placeholder,\r\n/* 视频区域底部的【打开抖音App看更多内容】 */\r\n.select-list .img-button{\r\n    display: none !important;\r\n}";
  const DouYinUrlUtils = {
    /**
     * 获取视频链接
     * @param videoId 视频id
     */
    getVideoUrl(videoId) {
      return "https://www.douyin.com/video/" + videoId;
    },
    /**
     * 获取视频合集链接
     * @param collectionId 合集id
     */
    getCollectionUrl(collectionId) {
      return "https://www.douyin.com/collection/" + collectionId;
    },
    /**
     * 获取笔记链接
     * @param noteId 笔记id
     */
    getNoteUrl(noteId) {
      return "https://www.douyin.com/note/" + noteId;
    },
    /**
     * 获取话题链接
     * @param hashTagId 话题id
     */
    getHashTagUrl(hashTagId) {
      return "https://www.douyin.com/hashtag/" + hashTagId;
    },
    /**
     * 获取用户主页链接
     * @param sec_uid
     */
    getUserHomeUrl(sec_uid) {
      return "https://www.douyin.com/user/" + sec_uid;
    },
    /**
     * 获取音乐链接
     * @param musicId 音乐id
     */
    getMusicUrl(musicId) {
      return "https://www.douyin.com/music/" + musicId;
    }
  };
  const MDouYinShareUser = {
    init() {
      addStyle(blockCSS$4);
      PopsPanel.execMenuOnce("m-dy-share-user-coverPlayletList", () => {
        this.coverPlayletList();
      });
      PopsPanel.execMenuOnce("m-dy-share-user-coverPostListContainer", () => {
        this.coverPostListContainer();
      });
    },
    /**
     * 覆盖视频合集点击事件
     */
    coverPlayletList() {
      domUtils.on(
        document,
        "click",
        ".user-playlet-list .playlet-item",
        (event) => {
          var _a2, _b, _c, _d;
          utils.preventEvent(event);
          let $click = event.target;
          let reactFiber = (_a2 = utils.getReactObj($click)) == null ? void 0 : _a2.reactFiber;
          let key = reactFiber == null ? void 0 : reactFiber.key;
          if (key == null) {
            Qmsg.error("获取视频合集key失败");
            return;
          }
          let index = reactFiber == null ? void 0 : reactFiber.index;
          if (index == null) {
            Qmsg.error("获取视频合集index失败");
            return;
          }
          let playletList = (_d = (_c = (_b = reactFiber == null ? void 0 : reactFiber.return) == null ? void 0 : _b.return) == null ? void 0 : _c.pendingProps) == null ? void 0 : _d.playletList;
          if (playletList == null) {
            Qmsg.error("获取视频合集playletList失败");
            return;
          }
          let currentPlaylet = playletList[index];
          let url2 = DouYinUrlUtils.getCollectionUrl(currentPlaylet["mix_id"]);
          window.open(url2, "_blank");
        },
        {
          capture: true
        }
      );
    },
    /**
     * 覆盖视频列表点击事件
     */
    coverPostListContainer() {
      domUtils.on(
        document,
        "click",
        ".post-list-container .user-post-cover",
        (event) => {
          var _a2, _b, _c, _d, _e;
          utils.preventEvent(event);
          let $click = event.target;
          let reactFiber = (_a2 = utils.getReactObj($click)) == null ? void 0 : _a2.reactFiber;
          if ((_c = (_b = reactFiber == null ? void 0 : reactFiber.return) == null ? void 0 : _b.memoizedProps) == null ? void 0 : _c.productionUrl) {
            let url2 = (_e = (_d = reactFiber == null ? void 0 : reactFiber.return) == null ? void 0 : _d.memoizedProps) == null ? void 0 : _e.productionUrl;
            window.open(url2, "_blank");
          } else {
            Qmsg.error("获取视频链接失败");
          }
        },
        {
          capture: true
        }
      );
    }
  };
  const blockCSS$3 = "/* 顶部 打开看看 登录 */\r\n.adapt-login-header,\r\n/* 视频描述信息区域中的 打开抖音看精彩视频 */\r\n.footer .img-button,\r\n/* 登录页面 */\r\n.login-page {\r\n	display: none !important;\r\n}\r\n";
  const beautifyCSS = ".video-container {\r\n	height: 100% !important;\r\n	margin-top: 0 !important;\r\n}\r\n.footer {\r\n	bottom: 50px !important;\r\n}\r\n.mix-info {\r\n	bottom: 0px !important;\r\n}\r\n";
  const MDouYinShareVideo = {
    init() {
      addStyle(blockCSS$3);
      addStyle(beautifyCSS);
      PopsPanel.execMenuOnce("m-dy-share-video-coverGlobalClick", () => {
        this.coverGlobalClick();
      });
    },
    /**
     * 阻止全局点击，会跳转
     */
    coverGlobalClick() {
      let selectorList = [".right-con", ".footer", ".mix-info"];
      selectorList.forEach((selector) => {
        DOMUtils.on(
          document,
          "click",
          selector,
          (event) => {
            return utils.preventEvent(event);
          },
          {
            capture: true
          }
        );
      });
    }
  };
  const blockCSS$2 = "/* 顶部 打开看看 登录 */\r\n.container .adapt-login-header,\r\n/* 底部中间的 App内打开 */\r\n.container .float-button-con {\r\n	display: none !important;\r\n}\r\n\r\n.gallery-container {\r\n	margin-top: 10px !important;\r\n}\r\n";
  const MDouYinShareNote = {
    init() {
      addStyle(blockCSS$2);
      PopsPanel.execMenuOnce("m-dy-share-note-blockRecommend", () => {
        return this.blockRecommend();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-blockComment", () => {
        return this.blockComment();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-blockFooterToobar", () => {
        return this.blockFooterToobar();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-coverUser", () => {
        this.coverUser();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-coverHashTag", () => {
        this.coverHashTag();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-coverMusic", () => {
        this.coverMusic();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-coverRecommend", () => {
        this.coverRecommend();
      });
      PopsPanel.execMenuOnce(
        "m-dy-share-note-coverExcitingGraphicsAndText",
        () => {
          this.coverExcitingGraphicsAndText();
        }
      );
    },
    /**
     * 【屏蔽】相关推荐
     */
    blockRecommend() {
      log.info("【屏蔽】相关推荐");
      return CommonUtil.addBlockCSS(".recommend-con");
    },
    /**
     * 【屏蔽】评论
     */
    blockComment() {
      log.info("【屏蔽】评论");
      return CommonUtil.addBlockCSS(".comment-con");
    },
    /**
     * 【屏蔽】底部工具栏
     */
    blockFooterToobar() {
      log.info("【屏蔽】底部工具栏");
      return CommonUtil.addBlockCSS(".footer-con");
    },
    /**
     * 覆盖相关推荐的点击事件
     */
    coverRecommend() {
      log.info("覆盖相关推荐的点击事件");
      domUtils.on(
        document,
        "click",
        "#masonry .card",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactObj($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let awemeId = rectFiber.return.memoizedProps.awemeId;
          let url2 = DouYinUrlUtils.getNoteUrl(awemeId);
          window.open(url2, "_blank");
        },
        { capture: true }
      );
    },
    /**
     * 覆盖用户点击事件
     */
    coverUser() {
      log.info("覆盖用户点击事件");
      domUtils.on(
        document,
        "click",
        ".message-con__top",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactObj($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let sec_id = rectFiber.return.return.memoizedProps.video.authorInfo.sec_uid;
          let url2 = DouYinUrlUtils.getUserHomeUrl(sec_id);
          window.open(url2, "_blank");
        },
        { capture: true }
      );
    },
    /**
     * 覆盖话题点击事件
     */
    coverHashTag() {
      log.info("覆盖话题点击事件");
      domUtils.on(
        document,
        "click",
        ".message-con__content__body .message-con__content__body-text",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactObj($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let index = rectFiber.index;
          let splitStrArr = rectFiber.return.return.return.return.memoizedProps.video.splitStrArr;
          let currentSplitStr = splitStrArr[index];
          let hashtagId = currentSplitStr["hashtagId"];
          let url2 = DouYinUrlUtils.getHashTagUrl(hashtagId);
          window.open(url2, "_blank");
        },
        { capture: true }
      );
    },
    /**
     * 覆盖音乐点击事件
     */
    coverMusic() {
      log.info("覆盖音乐点击事件");
      domUtils.on(
        document,
        "click",
        ".message-con__footer",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactObj($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let musicId = rectFiber.return.return.memoizedProps.video.musicId;
          let url2 = DouYinUrlUtils.getMusicUrl(musicId);
          window.open(url2, "_blank");
        },
        { capture: true }
      );
    },
    /**
     * 覆盖精彩图文点击事件
     */
    coverExcitingGraphicsAndText() {
      log.info("覆盖精彩图文点击事件");
      domUtils.on(
        document,
        "click",
        ".container .related-list-con .related-note-item",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactObj($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let itemData = rectFiber.return.memoizedProps.itemData;
          let awemeId = itemData["awemeId"];
          let url2 = DouYinUrlUtils.getNoteUrl(awemeId);
          window.open(url2, "_blank");
        },
        { capture: true }
      );
      domUtils.on(
        document,
        "click",
        ".related-title-con",
        (event) => utils.preventEvent(event),
        { capture: true }
      );
    }
  };
  const blockCSS$1 = "/* 顶部 打开看看 登录 */\r\n.page-reflow-challenge .header,\r\n/* 底部的 打开抖音App看更多内容 */\r\n.page-reflow-challenge .bottom-btn__con {\r\n	display: none !important;\r\n}\r\n\r\n.page-reflow-challenge {\r\n	padding-top: 0 !important;\r\n}\r\n";
  const MDouYinShareChallenge = {
    init() {
      addStyle(blockCSS$1);
      PopsPanel.onceExec("m-dy-share-challenge-coverTopJump", () => {
        this.coverTopJump();
      });
      PopsPanel.execMenuOnce("m-dy-share-challenge-coverVideoCard", () => {
        this.coverVideoCard();
      });
    },
    /**
     * 阻止上面区域点击跳转至下载页面
     */
    coverTopJump() {
      log.info("阻止上面区域点击跳转至下载页面");
      domUtils.on(
        document,
        "click",
        ".challenge-body",
        (event) => {
          utils.preventEvent(event);
        },
        {
          capture: true
        }
      );
    },
    /**
     * 覆盖视频卡片点击事件
     */
    coverVideoCard() {
      log.info("覆盖视频卡片点击事件");
      domUtils.on(
        document,
        "click",
        "#pagelet-worklist li.item",
        (event) => {
          utils.preventEvent(event);
          let $clikc = event.target;
          let rectFiber = utils.getReactObj($clikc).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let listData = rectFiber.return.return.return.memoizedProps.listData;
          let index = rectFiber.index;
          let currentList = listData[index];
          let url2 = DouYinUrlUtils.getVideoUrl(currentList["aweme_id"]);
          window.open(url2, "_blank");
        },
        {
          capture: true
        }
      );
    }
  };
  const blockCSS = "/* 顶部 打开App，发现更多内容 */\r\n.page-reflow-music .header,\r\n/* ↑屏蔽后的 顶部空白区域 */\r\n.page-reflow-music .banner-placeholder ,\r\n/* 底部 打开抖音App看更多内容 */\r\n.page-reflow-music .bottom-btn__con {\r\n	display: none !important;\r\n}\r\n";
  const MDouYinShareMusic = {
    init() {
      addStyle(blockCSS);
      PopsPanel.execMenuOnce("m-dy-share-music-coverVideoCard", () => {
        this.coverVideoCard();
      });
    },
    /**
     * 覆盖视频卡片点击事件
     */
    coverVideoCard() {
      log.info("覆盖视频卡片点击事件");
      domUtils.on(
        document,
        "click",
        "#pagelet-worklist li.item",
        (event) => {
          utils.preventEvent(event);
          let $clikc = event.target;
          let rectFiber = utils.getReactObj($clikc).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let listData = rectFiber.return.return.return.memoizedProps.listData;
          let index = rectFiber.index;
          let currentList = listData[index];
          let url2 = DouYinUrlUtils.getVideoUrl(currentList["aweme_id"]);
          window.open(url2, "_blank");
        },
        {
          capture: true
        }
      );
    }
  };
  const MDouYin = {
    init() {
      if (MDouYinRouter.isShareUser()) {
        log.info("M-Router: 分享用户");
        MDouYinShareUser.init();
      } else if (MDouYinRouter.isShareVideo()) {
        log.info("M-Router: 分享视频");
        MDouYinShareVideo.init();
      } else if (MDouYinRouter.isShareNote()) {
        log.info("M-Router: 分享笔记");
        MDouYinShareNote.init();
      } else if (MDouYinRouter.isShareChallenge()) {
        log.info("M-Router: 分享话题");
        MDouYinShareChallenge.init();
      } else if (MDouYinRouter.isShareMusic()) {
        log.info("M-Router: 分享音乐");
        MDouYinShareMusic.init();
      } else {
        log.error("未知M-router: " + window.location.hostname);
      }
    }
  };
  PopsPanel.init();
  if (MDouYinRouter.isMDouYin()) {
    MDouYin.init();
  } else {
    DouYin.init();
  }

})(Qmsg, Utils, DOMUtils, pops);