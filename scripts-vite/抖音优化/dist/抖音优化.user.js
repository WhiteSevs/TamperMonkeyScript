// ==UserScript==
// @name         抖音优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.5.20.20
// @author       WhiteSevs
// @description  视频过滤，包括广告、直播或自定义规则，伪装登录、屏蔽登录弹窗、自定义清晰度选择、未登录解锁画质选择、禁止自动播放、自动进入全屏、双击进入全屏、屏蔽弹幕和礼物特效、手机模式、修复进度条拖拽、自定义视频和评论区背景色等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAF19JREFUeF7tnQl8U1X2x38vabqlLWOFrpStUMrWsrdUEARkEREQCoiAghswHQdQEFREGXfhD24MjOiMIqKD4IyICCObFCgt1JaC0ELpmq0L3ZLuyft/bkpL8pI07yUvaVre/Xz6KTT3nnvOud93381dzqXAU+riGzJarMMoGogGqD4A3RXAPQC8eKribhSjBVBJA0UUkAfgGgXq90YRzpZUybL4cAhlj5BAn9DxoOkFAGYB8LdHllCWsweuAfgvDWpvkUaWzrn07QI2ARDkExpPg14FGqNsrVgox58HaFCHAd2HRRrFEa5SOQEQ7B08VEdR7wCYxLUiIb8TPEDjB0qke1WpVv7BtjbWAARJQ9bQwPtsBQv52tID9CqVRrGNjQZsAKACpSG7ATzORqCQxzU8QIHerdQoFlvTplUAuvp19W/Q0gcAeqw1QcLnrugB+qRELJ5dWFl4y5J2FgFoanztYYAa6YqmCTqx9QCdLBGLp1qCwCIAgdLgEwA1jm01Qj5X9gB1SqWRPQCAZmppFoAgafBXNKhFrmySoBtnD+xRaeQLrQIQKA1eCVBbOYsXCri8ByhgrVIj/8BQUaMeIMgnqD9Ni664vCWCgjZ7QETTwxTVitRmAUYABHqHHACln9YVUsf1wFGVRj7ZBIAAafBkCtQvHddu85aJ40bYbbL2bIrdMpwpgKKouUq1bB+ps6UHCJCG/kyBnupMRVyhLj/VZbvUqN/5FWpfa2cTpBTOqdTyuBYAAqSh0RToNLs80U4L2wtAw76DqElY3/6sp6gJKrXsuL4HCJSGvAvgpfZnhf0a2wtA45GTqF6cYL8izpfwuUojf7oZgKsAIp2vQ9vXyARg2NVsTkr1u5aPtJWvmpQ5W1vBSU4bZL6l0sjvpTr7hkaIdXRmGyjgElUyARh+LRvfDBvOWrfClEvotGQTfChRS5knVVdxpNri9Dtr2Y7OqBNhDBUkDX2SBv1PR1fmqvKZAIy4lo09HAAgdmWMegwD1WT3VlNKKM7CfnWxq5rcoheZGCJLvR8CeN7ltXWQgkwARl7LxtccAUhauh4xKXdeHa+U3sQXlQoHacyr2D0EALKN6K7d4cMEIObaTeweNoyTl7P2/4I+r3/RUmZzWT62lBdwktE2malkKkAaco0C+raNAm1fKxOA2Myb+GooNwCIFckPLMaIklq9QadqyjFf2S5m1OWkByCjFbJ9+65MTABGZd7ElzYAcGnHNxj06X/0PizWNiAqP7k9+LOGANAIQNwetHWEjnwBQHS7GLcAQ6uIO4EJsjT8Ua9xhMq8yiQAmGwS4LUGFxfGBCAuMwf/GjrUJq1vHDyGLuu3w48S441budhRIbNJjjMLCQAw1gLuy8rBP4fYBgBpuLPLNmDUmUxcqKvCdPklZ7alTXUJADAAGJ2Vgy/sAMDwVRCvvIzEGteeERQAYAAwJisHn9sJQPOr4LCmFCuLr9v0ZDqrkAAAA4D7s3Kxa8gQu/2f/vFX6LLjAN4szcUBF54VFABgADD2ei4+G2w/AISggp9PomrtVswtSEeJtsFuqBwhQADAgQCQBqu/no+f5iZgxfWLjmg/u2UKADAAGHc9D/8YPNhuxxoJKK/CW7OfxsfnE/mVy4M0AQAGAA9cz8NOvgEgDUXTmLNtO85s/gR0RSUPTcePCAEABgDjb+RhRzTPPYBBWy0+cRKnjv+G+m8OgFa1/ZKxAAADgAk38vB3BwJAWFiReAb/69UV2sRkNJ5OQsOPR0GXts0GEgEABgATb+Rje3Q0P/1rK1I+/y0R2yN6oMpXqs/VeDYFdKECOpkCdHEp6JJS6IpvwdFbzgUAGAA8mJ2PT6McDwBp9CtZ2fiopAgnos1vx9TMWiIA4OhHkbkY5EwAmm376XwK9rhRuBgZbmSuAICjWx8AE4BJ2fn4xEk9ANO8vYnncBxapPcIQ/k9fhAAaAMAJmcX4OOoKCfUbLkKlaoY57NvomrLl0g5ew5FjQ0o0tajSNv0m88kjAEYY4ApNwvw0aC2BaC5gS8Pj8eAOuMQDsE5Z/hsfwgAMACYerMAHwoA8AqZSwtjjgEeulmAbQIALt1mvCpnCkAhtg0axGsdtgoTXgG2eo5DOSYA03IKsXUgewAq8mTo1D2UQ43sswoAsPeVzTmZADycU4j/4wDA5S/2oTpXhpGbVtqsg6WCAgC8u9RUIBOA6TkybBk4kHXNBIABW/chuYsX7n1+IXrPfJB1WWsZBQCseYiHz5kAPJIjw2YbACCqqGktMgb3xJCPNsDLv5Pd2gkAMFxIBQdCPKgfRIFdQJGfoC76f8PDHaiuAa2pBq2uBtQaNBw7zWoenQnAjFwZPhjAvQcwVPWGWIvioX3Q7Zm56DrK9i3mAgDkyFLcCLiNHw23cXH6xmeb2E6jOgKAVSXXscm/FzwoEdI7e0E8JQ7D1i1jq3pLvrsWAFG3UEgemwXJzKkQ9erO2XGkgK0AzMyV4/0BA1jX2TwGMCwwW3EZJEJIQqeueMW/Sf8ckRaKAd3h98AIRC6cBYmXp9U67joARJG94U4a/rFZoDr5WXVQaxlsBWBWrhzv8QQA0a+HxFMPwuO+gS3qVtJa3PDzQF1UOAKmjUPv6RPMmnLXAEBJveHx+ov6xodEwrnhO5eUIbi0DKHqanTT0ejr44OeL3yEvIIClOkaUU1rUa3T4d0ycu+ScWK+Ah7Nk+Pd/vz0AIY1TfS+B3N9AjBd2tlEBx1o1NA0akGjjiI/FBrETT8dfi1A1LMbPLe8Drf72Eeld6+tw8jLWZgAEaYOGgB/f9PT7edHxmNkjfWFFCYAs/PkeMcBADS3+jAPX8z1DUC8TwC8DOIKsaW+Qy0GiWOGwvubv4PyadoW1VoKkasQU6BErMQdU4YPgZdX67fRHY+NxwMa7gDMyVPg7f79ralzZ6B2ex7A3BigNSG9JF76HmGStz/6uXuzrq/DACB5ZDK8Ptti1XC/SjWeysrF8rFjrOY1zHBoVDweUnMHID5fgbf6OR4AQ10Dxe6I8vBBlLsU0eS3hw/I38ylDgGA53sb4P7kPKsNOj31Cp4L7YqIXj2s5mVm2B8Xj0er2gcA5ozzpkS4Vyxp+eksavr3dp5jDjh9P4DXzs2QzJzSaoP2y87HMzX1eDjG9kDO394Xj3mV3AGYm6/Am07uATjTzWMBpwLgvmQ+PN81jappaM/ylAwsj42Bp6eHXWbaCsC8fCX+1o/9hFNr8wB2GeCkwk4DgHzH9znVFETJUlqeeBGrJk/kxXRbAZhfoMSmSAEAXhrBUIjPyQMQ9YuwKPe53T/ghWVLeavXVgAeK1DiDQEA3tpBL8jzg41wXxxvUeizu77Di3/lPlfempa2ArCgQInXBQD4A0Aydwa8Pn7LosBlPx3H6nmz+avwtiTbAVDh9Uj2gdOFMUArTUf5+kB6aA9EfY1PvDQXWZ5yGavGcft+z5YUWwF4vFCFjX0FANj6udV8Hi+ugMeaFWbzRJ1Pw7f33w83NztjVNbWAeVVQFkV0NAIRPYA3CWwFYCFhSq8JgBgf/uTp548/aQXYCZdbgH+cUuN8WP019ZwT9dy8cdn38LvdDpCa+6EaW8WVCemIBPR6MUIy2NuFo25FrCosAgb+rIPnSy8Aiw0n+db6+H+tPkLxxd8/zNef4L7ZeSl+/8HzdbdCKtoCsrMNbEBYHFhEV4VAODqWtP8Pkk/g6z0MVOPU0n4NjbW7AqexVq1OmQl/A19Eu2LwM0GgCdkRXglQugB7CLAbcIY/SqfufT++QzMHH8/e/nZhchZ8gp6lNWwL2MhpwCAqWMcMhNoqfufkXIJH4wby74hswshm78GIbWm73mmkNS6Kn1AxtQ6Ncp1DSjTNqJc14ieEk/0dPPS//7czC0ezDHAk7JivBxhecKKWa8wBjDTnD6//dfsV79d1wtw/2CWJ2+ra5E/bgnCzAzyDKskjb67SomkWtsibzEBWCIrxnoBAPYPKTMnGf0TAJgpXF6Ew33Yv1szlr6CgSmtx9ndVl6A98rybVfWTICIpfJirOsj9AA2O1WycDa8trxhUn5ZRhZWx8awkluRdhV+iza2mndYwQXIG+tYyWstE7MHeEpejJcEAGz3q9cX2yCZZrqit09WiuiI3qwEX0zYhKGnLN/pO7QgBYpGfiJlMAF4Wl6CtX36sNKTZBLGAAxXSY9+B3G08a5art3/leFz0d/Cw9285551C1nJKADA85Ux5r7/L0+9glVjRrNqs8zTyYhYsdls3rdu5eGTikJWcthmYgLwjKIEa3oLPQBb/5nk8716GhRjm/aeHAVGDGS30fL7v7yG2SevmchNq1NjuuISGml+rzhiAvCsogQvCgDY3P7wk6UDjAWeQ0WV6NOT3RGvg8texsNnbpgo8FxRJn7UlNiumIWSTACeU5Tihd7sxirCGMCMU81dx36mRocune9l1XhHn3oJDybnGOW92VCD+wpTWZXnmomp7zJlKVaHCwBw9WNLfnMA/OHhCzc3N1YyTy56EWPTjL/bkyef9AB8J3Lc3DftmJHY5cpSrBIAsN3VTACkmmr8HsA+hs7/lqzFxAu5Rgq8VpqDzyrltitloSQ5ei79wfji9BXKW1gZbn4Dizkx5zduw8gDZ40+4vubCu+GGwjkfS2ACUCwshinwtnPrKUc+hXD1/3DyOZ5yiv4raacdz+Ym7TiCsCJmcsxLrtUAKDZA74ZJ0EF3DkBG5mdjx85xt49FjkF4yV3joc7agDo+c4rcF/6mFHjPS8vQQKHiaCk4XMQUycykjFNfglkcao9JN57AO+9O/QRPZrTkMyb+I7jZcy7Jy3GQsWdTR/rSrPxZaWSV3+S+AM+p/+rDzVjmF7OLsSTUezDxGX3fwS9xMbBHkYXpiK7wf7la14NtiCMdwA8N6yGe8Kd/f3heXIc5nDcmuh5YOeXGLJ1vz64AknkXP+H5fxOAEkWPAqvrZtM3PJOZi5mD2V3bVz66fOIWmF6wHVgfjJKXfSaOKbBvAPAdGyXkjKc6d6LM8xfT3kCj8uaniJHfAvw3rMdbhNNN6Z8kpmHSUPZ3Rl0eNM2TNlnPAAk+oblnuV9woqzA1kW4B0A8ZBBkP6yt6V6j7p6ZPjfCY/CUi+kpaajZv46xHr4oqCxDiMLLrAtajWfJ4lGsvxJs/m+zCrAqCHs9izsm5uAOVeLjOSotPUYnJ9iVQdXycA7AMQw7+93wW1MbIuNp9QNCA4M4GzzD39+FQ+dugZ3SoSxhb8jq6GaswxmAfHwaP1uZXMpLCkVxyaYj9djLv+h4bPwUJ1xSJvk2krMUGTYraezBDgEADKyJiPs5vThlWxMHTncJpu+W7kRsUd+xy+aW9h4y3iGkKtAMuDzvXTCYrFlv57F6hnTWIk9tWsvYrbt14eCM0z71EV43sUvjDbU1yEAUMEB8Ek82BL65dmUDLw4jsNGUEYT/Oulv6HfgTN6AMiikC3JbdI4eO/+xGJRt0I5jnh3QlhYV1biD49fhCnFpmvWm8vysaW8gJUMV8jkEACIYWSETQaEJI1Pv4odcTYeArntpezMG8h4Yj2WXTYddLXmSFFYCCTzZlo8odRc9pnTF7BmCrs4v1eOn0FAwmZ0FptGNBtTmIob7eQrILHdYQC4jR4J7/1f6P3bqaIKR7074Z4/2R8/9+W3P8Hu3Ew07DsINFi+kVs8MBKSeTP0jU918m31YXsoKxfbOFwZ/+ucBEzINB78kQou1akxWZ7uCg82ax0cBgDRwHBS6L30LMyKY7cn0Jr2Pfd+CxJkqvG3c6DLKpp+yisgCugMqkcYyFMvCmO//pAlNQ0zZ0mH0nwZqqb+Gd1FpkGc3i7Lw8c8z1dY84W9nzsUAMmch+H16bt6Haf9fgVbR7PbFWTNqAvJFzEnKQnuTy2wlrXVzwedPo/9U1qPV8QUkLj8NdyXaLphheSbJEtHRr1tYxS7DLGjsEMB0PcC+z+H2+gY/WvgkMQbAV1MI2Xaon9VZRWe27ELydMfBIktzCk1NmJRSgY2TBzPqVjZzXyUzlqFcJ3piWYy90/WANpbcjgA5Hu39/efg/LyxKoLlznH+7Pm0P8cPIyk2loc6x6MigGtnzugi0oQn5WL+d26Iaof+zMKzTokTVqKGIX5J3xNSTa+ruJ3vcKa7Xx87nAAiJLuyxbD84216FGgwMGe4fDwsC8CmCXDz6VdwpnyclRSFKpEFKokboCORoSmBj0oCpEBXRAVxf4uAMN6kl54GzFH08xW3R4Hf82GOAUAUhmJCkoGbq+lXsVCW+MC8IG8DTKyfzqOe9Z9inso88Es2uvTT1zhNABIZT6//4rQ+kZ87eePMA6jdBvajNciabHzEa3Rdbin3+kAkAp9s87ikQuXseURdlOuvLakDcLOLFiNuAzLS9Ht+elvEwBIpdKj/8Y7VbWYO5n9wosNbWd3kbOPJmDUddMJn2bB/9GUYLkDNqvarTgHAU59BRjqFfTdZ9gV1g3DbRyUcbDRpqznpj2L2HzL+xBzGmoRV3jRJtmuVKjNACBOGPb+RvxzzqMIMNhD6ArOSXpwKWKUrU/oTJCl4Y96jSuoa48OWgIAWWRv/fYFe6qwUvbhZUuwK2EF0CPEgbWwF508bjFGlLYehOovxVn4Xl3MXqjr5iwjAMgAtKn3n+kXjUXjJyDivRfazFUX3vwU0gMnENlgvL7PVGhDaQ52OeCMQlsYTgOZVKA09DxAs7+wx0GaksuU1vbsD9Gf5yN80QwH1WIq9ureg9Bs/w7Dyq3HG5guv4QL7WS7N0sHHiU9wNcAuAftY1kDl2wEgvc7hyOrTzBCVj+BsPsdx+WVf30P9e5DGFlk/T1OtnmtLLkOMvDrYOkjKkgasoYG3ncVw8gFSiv/FIZHpJ2R4Qmoo8IROGsiwh+2/yujWlWC63t+hPbAMQyrsLyXwNAXhzSlWF1yA5W6RldxEW96UKCWUF18Q0aLdDjNm1SeBJGLFgkIXd2a1g1kaERBty4QR/eBf+xg9Jw8FmIPy3cM1mlqoEzNQFHaVVQnpsLvphwRNTTIXTxsUka9BjsrZNjfMQZ7Zk3Wiqi++kt1AqUh5HCbPxvHODNPkNgdS/2CscQvGD4i03n4PKoRanfjv4u1NPwbdAig2J1GZtpDDnTsrJRjZ4Uc9bT56V9n+sCBdV1TaeT9mgHYBeApB1Zml+jeEq8WEOwS1ErhKp0W+9VF+sbP7XjvenOWv6fSyNc1AeATOh40bXxQ3lGetkNuhMQb06X36q9f7cvhssXWqjxWXYYj1bfwc3VpuznOZYcLW4rSoAYXaWTpLfeqBfqEnAWNUXwId4aMkZ5+eNDbHz3cPPVnCMlvc68JQ11qaZ0+vJxCW4eDmlIc1JTcVY3e7Asa1OEijewh8v8WAIJ8QuNpmv63MxrPUXWQbdrNQHR384RSW3+7wcnvOn3sYCEBNOgpRRrFESMAbg8GyR8nCU7qwB6g8YOqWt50YMOwByD/CfYOHqqjqPa/xNWB289e0yhKN0CpVv5hFgDyR1ebGLLXYKG8oQfoVSqNYpvhX4wv1739iStNDwsNyI8HKNC7lRrFYqY0swA07RUMPQHQHG534EdRQYojPECfVGkUD5iTbAkAdPXr6t+g1R4GKMetyDjCVkEmwwN0skQsnlpYWXiLEwAk820I9gPUOMGv7dED1CmJmHrUUuObfAuwZGKQNPgrGtSi9uiCu1jnPSqNnLRZq9G1Lb4CmI4LlAavBKitd7FD243pFLBWqZF/wEZh1gDovyL6BPWndaI3QWEWG+FCHqd74KiIptcrqhWsI2tzAqDZnABp8GRA9FcK9FSnmyhUaOoBCucoUFuVatk+ru6xCYA7IIRGU6BJrFWyiY/9ldtctRTym/MAGdX/AIr6RqWWHbfVRXYBYFhpZ9/QCDcd4mjQJMxmJA10pwASG44E/bXzinBbzesQ5Ui0zDKAKgTo6xSQrhXhXHGVPJEP6/4fAayH1yFvEgIAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.douyin.com/*
// @match        *://*.iesdouyin.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.0.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.2/dist/index.umd.js
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
		<p>注：开启是禁用该快捷键、关闭是不禁用该快捷键</p>
        <a href="javascript:;" class="keyboard-oneClickOpen">禁用全部快捷键</a>
        <br>
        <a href="javascript:;" class="keyboard-oneClickClose">取消禁用全部快捷键</a>
    `
    ),
    afterEnterDeepMenuCallBack
  };
  function getGPU() {
    const canvas = document.createElement("canvas"), gl = canvas.getContext("experimental-webgl"), debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    const info = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    return info;
  }
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
            type: "own",
            getLiElementCallBack(liElement) {
              let $left = domUtils.createElement("div", {
                className: "pops-panel-item-left-text",
                innerHTML: (
                  /*html*/
                  `
							<p class="pops-panel-item-left-main-text">WebGL</p>
							<p class="pops-panel-item-left-desc-text"></p>
							`
                )
              });
              let $leftDesc = $left.querySelector(
                ".pops-panel-item-left-desc-text"
              );
              let gpuInfo = "";
              try {
                gpuInfo = getGPU();
              } catch (error) {
                log.error(error);
                gpuInfo = error.toString();
              }
              domUtils.text($leftDesc, gpuInfo);
              domUtils.append(liElement, $left);
              return liElement;
            }
          },
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
                    "监听Router改变",
                    "dy-common-listenRouterChange",
                    true,
                    void 0,
                    "功能重载"
                  ),
                  UISwitch(
                    "移除某些Cookie",
                    "dy-cookie-remove__ac__",
                    false,
                    void 0,
                    "阻止触发验证弹窗（maybe）"
                  )
                ]
              },
              {
                text: "Url重定向",
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
            text: "禁用抖音快捷键",
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
            text: "布局屏蔽-全局",
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
            text: "布局屏蔽-左侧导航栏",
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
                    "【屏蔽】精选",
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
                  ),
                  UISwitch(
                    "【屏蔽】美好跨年季",
                    "shieldLeftNavigator-tab-activity_2644292",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】2025新春环游记",
                    "shieldLeftNavigator-tab-activity_2643710",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "布局屏蔽-顶部导航栏",
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
                    "【屏蔽】右侧菜单栏",
                    "shield-topNav-rightMenu",
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
                  ),
                  UISwitch(
                    "【屏蔽】更多",
                    "shield-topNav-rightMenu-more",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】登录头像",
                    "shield-topNav-rightMenu-loginAvatar",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】AI搜索",
                    "shield-topNav-ai-search",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "布局屏蔽-搜索",
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
            text: "布局屏蔽-鼠标悬浮提示",
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
  const DouYinRouter = {
    /**
     * 直播
     */
    isLive() {
      return window.location.hostname === "live.douyin.com" || this.isFollowLive() || this.isRootLive();
    },
    /**
     * 关注-直播
     *
     * + /follow/live/
     */
    isFollowLive() {
      return this.isIndex() && window.location.pathname.startsWith("/follow/live/");
    },
    /**
     * 刷视频时的点击进去的直播
     *
     * + /root/live/
     */
    isRootLive() {
      return this.isIndex() && window.location.pathname.startsWith("/root/live/");
    },
    /**
     * 是否是抖音主站
     */
    isIndex() {
      return window.location.hostname === "www.douyin.com";
    },
    /**
     * 推荐视频
     *
     * + /?recommend=1
     */
    isRecommend() {
      let searchParams = new URLSearchParams(window.location.search);
      return this.isIndex() && searchParams.has("recommend");
    },
    /**
     * 搜索
     *
     * + /search/
     * + /root/search/
     */
    isSearch() {
      return this.isIndex() && (window.location.pathname.startsWith("/search/") || this.isRootSearch());
    },
    /**
     * 其它地方进去的搜索
     *
     * + /root/search/
     */
    isRootSearch() {
      return this.isIndex() && window.location.pathname.startsWith("/root/search/");
    },
    /**
     * 例如：知识、二次元、游戏、美食等
     *
     * + /channel/
     */
    isChannel() {
      return this.isIndex() && window.location.pathname.startsWith("/channel/");
    },
    /**
     * 精选
     *
     * + /discover/
     */
    isDiscover() {
      return this.isIndex() && window.location.pathname.startsWith("/discover/");
    },
    /**
     * 用户主页
     *
     * + /user/
     */
    isUser() {
      return this.isIndex() && window.location.pathname.startsWith("/user/");
    },
    /**
     * 单个视频，一般是分享的视频链接
     *
     * + /video/
     */
    isVideo() {
      return this.isIndex() && window.location.pathname.startsWith("/video/");
    },
    /**
     * 笔记图文
     *
     * + /note/
     */
    isNote() {
      return this.isIndex() && window.location.pathname.startsWith("/note/");
    }
  };
  const DouYinMessageFilter = {
    key: "douyin-live-danmu-rule",
    $data: {
      rule: []
    },
    init() {
      this.initRule();
    },
    /**
     * 初始化解析规则
     */
    initRule() {
      this.$data.rule = [];
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
      this.execMessageFilter(
        Array.from(
          $$(
            "xg-danmu.xgplayer-danmu > div > div:not([data-is-filter])"
          )
        ),
        "弹幕"
      );
      this.execMessageFilter(
        Array.from(
          $$(
            "#chatroom .webcast-chatroom .webcast-chatroom___item:not([data-is-filter])"
          )
        ),
        "聊天室"
      );
      if (PopsPanel.getValue("live-message-shield-emoji-chat")) {
        domUtils.hide(
          $$(
            "xg-danmu.xgplayer-danmu > div:has(>img):not([data-is-filter])"
          ),
          false
        );
      }
    },
    /**
     * 执行过滤
     * @param messageQueue 消息元素队列
     * @param from 来自
     */
    execMessageFilter(messageQueue, from) {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      for (let index = 0; index < messageQueue.length; index++) {
        let $danmu = messageQueue[index];
        let react = utils.getReactObj($danmu);
        let messageIns = ((_c = (_b = (_a2 = react == null ? void 0 : react.reactFiber) == null ? void 0 : _a2.return) == null ? void 0 : _b.memoizedProps) == null ? void 0 : _c.message) || ((_i = (_h = (_g = (_f = (_e = (_d = react == null ? void 0 : react.reactFiber) == null ? void 0 : _d.memoizedProps) == null ? void 0 : _e.children) == null ? void 0 : _f.props) == null ? void 0 : _g.children) == null ? void 0 : _h.props) == null ? void 0 : _i.message);
        if (typeof messageIns !== "object" || messageIns == null) {
          continue;
        }
        let message = ((_j = messageIns == null ? void 0 : messageIns.payload) == null ? void 0 : _j.content) || ((_l = (_k = messageIns == null ? void 0 : messageIns.payload) == null ? void 0 : _k.common) == null ? void 0 : _l.describe);
        let method = messageIns.method;
        let chat_by = (_m = messageIns == null ? void 0 : messageIns.payload) == null ? void 0 : _m.chat_by;
        let biz_scene = (_n = messageIns == null ? void 0 : messageIns.payload) == null ? void 0 : _n.biz_scene;
        let flag = false;
        if (!flag) {
          if (method === "WebcastGiftMessage") {
            if (PopsPanel.getValue("live-danmu-shield-gift")) {
              flag = true;
            }
          } else if (method === "WebcastChatMessage") {
            if (chat_by === "0") ;
            else if (chat_by === "9" || chat_by === "10") {
              if (PopsPanel.getValue("live-danmu-shield-lucky-bag")) {
                flag = true;
              }
            } else ;
          } else if (method === "WebcastRoomMessage") ;
          else if (method === "WebcastFansclubMessage") ;
          else if (method === "WebcastEmojiChatMessage") {
            if (PopsPanel.getValue("live-message-shield-emoji-chat")) {
              flag = true;
            }
          } else ;
        }
        if (!flag && typeof biz_scene === "string") {
          if (biz_scene === "common_text_game_score") {
            if (PopsPanel.getValue(
              "live-message-shield-biz_scene-common_text_game_score"
            )) {
              flag = true;
            }
          }
        }
        if (!flag) {
          flag = typeof message === "string" && this.$data.rule.some((ruleText) => {
            if (message.match(ruleText)) {
              log.info("自定义规则过滤 " + from + " 消息: " + message);
              return true;
            }
          });
        }
        if (flag) {
          $danmu.setAttribute("data-is-filter", "true");
          domUtils.hide($danmu, false);
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
  const DouYinLiveMessage = {
    /**
     * 消息过滤
     */
    filterMessage() {
      let lockFn = new utils.LockFunction(() => {
        if (!DouYinRouter.isLive()) {
          return;
        }
        DouYinMessageFilter.change();
      });
      domUtils.ready(() => {
        log.success("消息过滤");
        DouYinMessageFilter.init();
        utils.mutationObserver(document.body, {
          config: {
            childList: true,
            subtree: true
          },
          immediate: true,
          callback: () => {
            lockFn.run();
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
      if (!Array.isArray(needSetList)) {
        needSetList = [needSetList];
      }
      needSetList.forEach((needSetOption) => {
        if (typeof needSetOption.msg === "string") {
          log.info(needSetOption.msg);
        }
        function checkReactInstance() {
          let target = getTarget();
          if (target == null) {
            return false;
          }
          let targetInstance = utils.getReactObj(target);
          if (targetInstance == null) {
            return false;
          }
          let targetInstanceProp = targetInstance[propName];
          if (targetInstanceProp == null) {
            return false;
          }
          let needOwnCheck = needSetOption.check(targetInstanceProp);
          return Boolean(needOwnCheck);
        }
        utils.waitPropertyByInterval(
          () => {
            return getTarget();
          },
          checkReactInstance,
          250,
          1e4
        ).then(() => {
          let target = getTarget();
          if (target == null) {
            return;
          }
          let targetInstance = utils.getReactObj(target);
          if (targetInstance == null) {
            return;
          }
          let targetInstanceProp = targetInstance[propName];
          if (targetInstanceProp == null) {
            return;
          }
          needSetOption.set(targetInstanceProp, target);
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
     * })
     */
    setGMResourceCSS(resourceMapData) {
      let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : "";
      if (typeof cssText === "string" && cssText) {
        addStyle(cssText);
      } else {
        CommonUtil.loadStyleLink(resourceMapData.url);
      }
    },
    /**
     * 添加<link>标签
     * @param url
     * @example
     * loadStyleLink("https://example.com/example.css")
     */
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
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
    async loadScript(url) {
      let $script = document.createElement("script");
      $script.src = url;
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
    fixUrl(url) {
      url = url.trim();
      if (url.match(/^http(s|):\/\//i)) {
        return url;
      } else {
        if (!url.startsWith("/")) {
          url += "/";
        }
        url = window.location.origin + url;
        return url;
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
    fixHttps(url) {
      if (url.startsWith("https://")) {
        return url;
      }
      if (!url.startsWith("http://")) {
        return url;
      }
      let urlInstance = new URL(url);
      urlInstance.protocol = "https:";
      return urlInstance.toString();
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
      PopsPanel.execMenuOnce("live-shieldLucky", () => {
        return this.shieldLucky();
      });
      PopsPanel.execMenuOnce("live-shielYellowCar", () => {
        return this.shieldYellowCar();
      });
      PopsPanel.execMenuOnce("live-shieldDanmuku", () => {
        return this.shieldDanmu();
      });
      DouYinLiveChatRoomBlock.init();
      DouYinLiveVideoAreaRightMenu.init();
    },
    /**
     * 屏蔽弹幕
     */
    shieldDanmu() {
      log.info("屏蔽弹幕");
      return [CommonUtil.addBlockCSS("xg-danmu.xgplayer-danmu")];
    },
    /**
     * 【屏蔽】顶栏信息
     * 包括直播作者、右侧的礼物展馆
     */
    shieldTopToolBarInfo() {
      log.info("【屏蔽】顶栏信息");
      return [
        CommonUtil.addBlockCSS(
          'div[data-e2e="living-container"] div[id*="living_room_player_container"] > pace-island[id^="island_"]',
          // 2024.12.26
          'div[data-e2e="living-container"] div[id*="living_room_player_container"] >div>div>pace-island[id^="island_"]:has(.__isFullPlayer)',
          // 全屏状态下的
          'div[data-e2e="living-container"] xg-bar.xg-top-bar'
        )
      ];
    },
    /**
     * 【屏蔽】礼物特效
     */
    shieldGiftEffects() {
      log.info("【屏蔽】礼物特效");
      let result = [
        CommonUtil.addBlockCSS(
          // ↓该屏蔽会把连麦的用户也屏蔽了
          // '.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div>div)'
          // 排除掉福袋
          '.basicPlayer[data-e2e="basicPlayer"] > pace-island[id^="island_"]:not(:has(.ShortTouchContainer)):has(>div > div:not([class*="video_layout_container"]) > div)'
        )
      ];
      domUtils.ready(() => {
        utils.waitNode(() => {
          return domUtils.selector(
            "xg-icon.pluginContainer > div:contains('屏蔽礼物特效')"
          );
        }, 1e4).then(($el) => {
          var _a2, _b, _c, _d;
          if (!$el) {
            log.error("屏蔽礼物特效按钮不存在，获取超时");
            return;
          }
          let { reactFiber } = utils.getReactObj($el);
          let onClick = (_d = (_c = (_b = (_a2 = reactFiber == null ? void 0 : reactFiber.memoizedProps) == null ? void 0 : _a2.children) == null ? void 0 : _b[1]) == null ? void 0 : _c.props) == null ? void 0 : _d.onClick;
          if (typeof onClick === "function") {
            log.info(`调用屏蔽礼物特效按钮的onClick函数`);
            onClick();
          } else {
            log.error(`调用屏蔽礼物特效按钮的onClick函数失败，未获取到`);
          }
        });
      });
      return result;
    },
    /**
     * 【屏蔽】福袋
     */
    shieldLucky() {
      log.info("【屏蔽】福袋");
      return [
        CommonUtil.addBlockCSS(
          '.basicPlayer[data-e2e="basicPlayer"] > pace-island[id^="island_"]:has(.ShortTouchContainer):has(>div > div:not([class*="video_layout_container"]) > div)'
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
    },
    /**
     * 【屏蔽】底部的礼物栏
     */
    shieldGiftColumn() {
      log.info("【屏蔽】底部的礼物栏");
      return [
        CommonUtil.addBlockCSS(
          // 2025.5.9
          'div[data-e2e="living-container"] [id^="living_room_player_container"] > :last-child:has(.gitBarOptimizeEnabled )',
          // Firefox上的CSS，多了个pace-island
          'div[data-e2e="living-container"] >div> div:has(>pace-island >.gitBarOptimizeEnabled)',
          // 全屏状态下的
          'div[data-e2e="living-container"] xg-controls > div:has(div[data-e2e="gifts-container"]):not(:has(video))'
        ),
        addStyle(
          /*css*/
          `
            /* 去除全屏状态下的礼物栏后，上面的工具栏bottom也去除 */
            div[data-e2e="living-container"] xg-controls xg-inner-controls:has(+div div[data-e2e="gifts-container"]){
                bottom: 0 !important;
            }`
        )
      ];
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
        addStyle(
          /*css*/
          `
            div[data-e2e="living-container"],
            div[data-e2e="living-container"] > div{
                margin-bottom: 0px !important;
            }`
        )
      ];
    },
    /**
     * 【屏蔽】评论区的贵宾席
     */
    shielChatRoomVipSeats() {
      log.info("【屏蔽】评论区的贵宾席");
      return [
        CommonUtil.addBlockCSS(
          "#chatroom > div > div:has(#audiencePanelScrollId)",
          // Firefox上的CSS，多了个pace-island
          "#chatroom > pace-island > div > div:has(#audiencePanelScrollId)"
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
          `#chatroom >div:nth-child(2)>div>div:nth-child(4):not(:has([id^="audiencePanelScrollId"]))`,
          // Firefox的，多了个pace-island
          `#chatroom >pace-island>div>div:first-child>div:nth-child(4):not(:has([id^="audiencePanelScrollId"]))`
        )
      ];
    }
  };
  const DouYinLiveVideoAreaRightMenu = {
    init() {
      PopsPanel.execMenuOnce("dy-live-blockVideoRightMenu-downloadClient", () => {
        return this.blockDownloadClient();
      });
    },
    /**
     * 【屏蔽】右键菜单-下载客户端
     */
    blockDownloadClient() {
      log.info(`【屏蔽】右键菜单-下载客户端`);
      return [
        CommonUtil.addBlockCSS(
          '.__menu_container_className:has(>a[href*="douyin-pc-web"])'
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
          let $playerIns = $(
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
      /** 配置 */
      __publicField(this, "$data");
      /** 是否存在等待按下的按键 */
      __publicField(this, "isWaitPress", false);
      /**
       * 当前等待按下的按键实例
       */
      __publicField(this, "currentWaitEnterPressInstanceHandler", null);
      if (typeof key === "string") {
        this.key = key;
      }
      this.$data = {
        /**
         * 其它实例的快捷键的配置
         *
         * 这里一般是用于在录入快捷键时判断是否存在重复的快捷键
         */
        otherShortCutOptions: []
      };
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
      const that = this;
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
            let result = {};
            try {
              const shortcutJSONString = JSON.stringify(currentOption);
              const allOptions = this.getLocalAllOptions();
              if (Array.isArray(this.$data.otherShortCutOptions)) {
                allOptions.push(...this.$data.otherShortCutOptions);
              }
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
                  result = {
                    status: false,
                    key: localValue.key,
                    option: currentOption
                  };
                  return;
                }
              }
              this.setOption(key, currentOption);
              result = {
                status: true,
                key,
                option: currentOption
              };
            } catch (error) {
              console.log(error);
              result = {
                status: false,
                key,
                option: currentOption
              };
            } finally {
              that.isWaitPress = false;
              keyboardListener.removeListen();
              that.currentWaitEnterPressInstanceHandler = null;
              resolve(result);
            }
          }
        );
        that.currentWaitEnterPressInstanceHandler = null;
        that.currentWaitEnterPressInstanceHandler = () => {
          that.isWaitPress = false;
          keyboardListener.removeListen();
        };
      });
    }
    /**
     * 取消当前的录入快捷键操作
     */
    cancelEnterShortcutKeys() {
      if (typeof this.currentWaitEnterPressInstanceHandler === "function") {
        this.currentWaitEnterPressInstanceHandler();
      }
    }
    /**
     * 初始化全局键盘监听
     * @param shortCutOption 快捷键配置 一般是{ "键名": { callback: ()=>{}}}，键名是本地存储的自定义快捷键的键名
     * @param config 配置
     */
    initGlobalKeyboardListener(shortCutOption, config) {
      let localOptions = this.getLocalAllOptions();
      if (!localOptions.length) {
        log.warn("没有设置快捷键");
        return;
      }
      const that = this;
      function setListenKeyboard($ele, option) {
        domUtils.listenKeyboard(
          $ele,
          "keydown",
          (keyName, keyValue, ohterCodeList, event) => {
            if (that.isWaitPress) {
              return;
            }
            if (config == null ? void 0 : config.isPrevent) {
              utils.preventEvent(event);
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
              if (findShortcut.key in option) {
                log.info(["调用快捷键", findShortcut]);
                option[findShortcut.key].callback();
              }
            }
          },
          {
            capture: Boolean(config == null ? void 0 : config.capture)
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
        },
        "dy-live-shortcut-changeVideoMuted": {
          target: "window",
          callback() {
            log.info(`触发快捷键 ==> 切换静音状态`);
            $$("video").forEach(($video) => {
              let muted = !$video.muted;
              log.success(`切换video标签的静音状态为 ${muted}`);
              $video.muted = muted;
            });
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
    origin: {
      label: "潮汐海灵",
      sign: 5
    },
    uhd: {
      label: "蓝光",
      sign: 4
    },
    hd: {
      label: "超清",
      sign: 3
    },
    sd: {
      label: "高清",
      sign: 2
    },
    ld: {
      label: "标清",
      sign: 1
    }
  };
  const DouYinLive = {
    init() {
      DouYinLiveBlock.init();
      DouYinLiveShortCut.init();
      PopsPanel.execMenuOnce("live-danmu-shield-rule-enable", () => {
        DouYinLiveMessage.filterMessage();
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
      domUtils.ready(() => {
        PopsPanel.execMenu("live-chooseQuality", (quality) => {
          if (quality === "auto") {
            return;
          }
          this.chooseQuality(quality);
        });
        PopsPanel.execMenu("live-autoEnterElementFullScreen", () => {
          this.autoEnterElementFullScreen();
        });
      });
    },
    /**
     * 自动进入网页全屏
     */
    autoEnterElementFullScreen() {
      ReactUtils.waitReactPropsToSet(
        "xg-icon.xgplayer-fullscreen + xg-icon  div:has(>svg)",
        "reactFiber",
        {
          check(reactInstance) {
            var _a2;
            return typeof ((_a2 = reactInstance == null ? void 0 : reactInstance.memoizedProps) == null ? void 0 : _a2.onClick) === "function";
          },
          set(reactInstance, $target) {
            log.success("自动进入网页全屏");
            reactInstance.memoizedProps.onClick();
          }
        }
      );
    },
    /**
     * 选择画质
     * @param quality 选择的画质
     */
    chooseQuality(quality = "origin") {
      ReactUtils.waitReactPropsToSet(
        'xg-inner-controls xg-right-grid >div:has([data-e2e="quality-selector"])',
        "reactProps",
        {
          check(reactInstance) {
            var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
            return typeof ((_d = (_c = (_b = (_a2 = reactInstance == null ? void 0 : reactInstance.children) == null ? void 0 : _a2.props) == null ? void 0 : _b.children) == null ? void 0 : _c.props) == null ? void 0 : _d.qualityHandler) === "object" && typeof ((_i = (_h = (_g = (_f = (_e = reactInstance == null ? void 0 : reactInstance.children) == null ? void 0 : _e.props) == null ? void 0 : _f.children) == null ? void 0 : _g.props) == null ? void 0 : _h.qualityHandler) == null ? void 0 : _i.getCurrentQualityList) === "function";
          },
          set(reactInstance) {
            let qualityHandler = reactInstance.children.props.children.props.qualityHandler;
            let currentQualityList = qualityHandler.getCurrentQualityList();
            if (!currentQualityList.includes(quality)) {
              Qmsg.warning(
                "当前直播没有【" + quality + "】画质，自动选择最高画质"
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
              quality = currentQualityList[currentQualityList.length - 1];
            }
            qualityHandler.setCurrentQuality(quality);
            log.success("成功设置画质为【" + quality + "】");
          }
        }
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
        function(event, clickNode) {
          var _a2, _b;
          utils.preventEvent(event);
          try {
            let reactInstance = utils.getReactObj(clickNode);
            let key = (_a2 = reactInstance == null ? void 0 : reactInstance.reactFiber) == null ? void 0 : _a2["key"];
            let parent = clickNode.closest("div[data-index]");
            let parentReactInstance = utils.getReactObj(parent);
            let current = (_b = parentReactInstance == null ? void 0 : parentReactInstance.reactProps) == null ? void 0 : _b["children"]["ref"]["current"];
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
      let checkDialogToClose = ($ele, from) => {
        var _a2, _b, _c, _d, _e, _f;
        let eleText = domUtils.text($ele);
        if (eleText.includes("长时间无操作") && eleText.includes("暂停播放")) {
          Qmsg.info(`检测${from}：出现【长时间无操作，已暂停播放】弹窗`, {
            consoleLogContent: true
          });
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
              Qmsg.success(`检测${from}：调用函数关闭弹窗`, {
                consoleLogContent: true
              });
              closeDialogFn();
            }
          }
        }
      };
      domUtils.ready(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback() {
            $$(
              "body > div[elementtiming='element-timing']"
            ).forEach(($elementTiming) => {
              checkDialogToClose($elementTiming, "1");
            });
            $$('body > div:not([id="root"])').forEach(($ele) => {
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
            showClose: true,
            onClose() {
              shortCut.cancelEnterShortcutKeys();
            }
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
                    "origin",
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
                    true,
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
            text: "消息过滤器",
            type: "deepMenu",
            description: "包括：弹幕、聊天室",
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
                  UISwitch(
                    "【屏蔽】送礼信息",
                    "live-danmu-shield-gift",
                    false,
                    void 0,
                    ""
                  ),
                  UISwitch(
                    "【屏蔽】福袋口令",
                    "live-danmu-shield-lucky-bag",
                    false,
                    void 0,
                    ""
                  )
                ]
              },
              {
                type: "forms",
                text: "聊天室",
                forms: [
                  UISwitch(
                    "【屏蔽】xxx 为主播加了 xx分",
                    "live-message-shield-biz_scene-common_text_game_score",
                    false,
                    void 0,
                    ""
                  ),
                  UISwitch(
                    "【屏蔽】emoji",
                    "live-message-shield-method-emoji-chat",
                    false,
                    void 0,
                    ""
                  )
                ]
              },
              {
                type: "forms",
                text: "",
                forms: [
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
                      let textarea = textareaDiv.querySelector("textarea");
                      textarea.value = DouYinMessageFilter.get();
                      domUtils.on(
                        textarea,
                        ["input", "propertychange"],
                        utils.debounce(function() {
                          DouYinMessageFilter.set(textarea.value);
                          DouYinMessageFilter.init();
                        }, 1e3)
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
                  ),
                  UIButtonShortCut(
                    "切换静音状态",
                    "切换video标签的muted属性",
                    "dy-live-shortcut-changeVideoMuted",
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
            text: "禁用抖音快捷键",
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
            text: "布局屏蔽-视频区域内",
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
                    "【屏蔽】福袋",
                    "live-shieldLucky",
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
              },
              {
                type: "forms",
                text: "右键菜单",
                forms: [
                  UISwitch(
                    "【屏蔽】下载客户端",
                    "dy-live-blockVideoRightMenu-downloadClient",
                    true,
                    void 0,
                    "屏蔽右键菜单项"
                  )
                ]
              }
            ]
          },
          {
            text: "布局屏蔽-聊天室",
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
  const MobileCSS$1 = '/* 竖屏且高度小于550px */\r\n@media screen and (max-width: 550px) and (orientation: portrait) {\r\n	/* 右侧工具栏放大 */\r\n	.basePlayerContainer .positionBox {\r\n		bottom: 80px !important;\r\n		padding-right: 5px !important;\r\n		scale: unset !important;\r\n		transform: scale3d(1.12, 1.12, 1.12) !important;\r\n	}\r\n	/* 右侧工具栏的svg再放大 */\r\n	.basePlayerContainer .positionBox svg {\r\n		transform: scale3d(1.12, 1.12, 1.12);\r\n	}\r\n	/* 重置关注按钮的scale */\r\n	.basePlayerContainer\r\n		.positionBox\r\n		.dy-tip-container\r\n		div[data-e2e="feed-follow-icon"]\r\n		svg {\r\n		scale: unset !important;\r\n	}\r\n\r\n	/* 调整顶部搜索框的宽度 */\r\n	#douyin-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]) {\r\n		width: 150px;\r\n		padding-right: 0;\r\n		max-width: unset;\r\n		flex: 1;\r\n	}\r\n	/* 搜索框获取焦点时自动放大宽度 */\r\n	#douyin-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]:focus) {\r\n		width: 100vw;\r\n		width: 100dvw;\r\n	}\r\n	/* 搜索页面 搜索详情的宽度、视频结果列表的宽度 */\r\n	#search-content-area > div,\r\n	#search-content-area > div div:has(+ #search-result-container),\r\n	#search-content-area > div #search-result-container {\r\n		width: 100%;\r\n		width: -webkit-fill-available;\r\n	}\r\n	/* 搜索页面 视频右侧的工具栏缩小 */\r\n	#search-content-area .basePlayerContainer .positionBox {\r\n		bottom: 28px !important;\r\n		transform: scale3d(0.6, 0.6, 0.6) !important;\r\n	}\r\n	/* 搜索页面 搜索出的用户信息换行 */\r\n	#search-content-area\r\n		#search-result-container\r\n		ul[data-e2e="scroll-list"]\r\n		li\r\n		.search-result-card\r\n		> div\r\n		> div {\r\n		flex-wrap: wrap;\r\n	}\r\n	/* 搜索页面 搜索结果筛选选项 综合、视频、用户、直播的超出宽度换行 */\r\n	#search-content-area div:has(> div > div > span[data-key="general"]) {\r\n		overflow: auto;\r\n		gap: 10px;\r\n	}\r\n	/* 搜索页面 搜索结果筛选选项 */\r\n	#search-content-area div:has(> span[data-key="general"]) {\r\n		gap: 10px;\r\n	}\r\n	/* 搜索页面 搜索结果筛选选项弹窗修复 */\r\n	#search-content-area div:has(> div > span[data-key="general"]) {\r\n		position: unset !important;\r\n	}\r\n	/* 搜索页面 搜索结果筛选选项 */\r\n	#search-content-area div:has(> span[data-key="general"]) > * {\r\n		white-space: nowrap !important;\r\n		width: auto !important;\r\n		width: fit-content !important;\r\n		margin-left: 0px !important;\r\n		margin-right: 0px !important;\r\n	}\r\n	/* 去除设置min-width超出浏览器宽度的问题 */\r\n	body {\r\n		min-width: 100% !important;\r\n	}\r\n	/* 去除设置width导致顶部工具栏超出浏览器宽度的问题 */\r\n	#douyin-right-container #douyin-header {\r\n		width: 100%;\r\n	}\r\n	/* 去除设置 */\r\n	#douyin-right-container #douyin-header > div[data-click="doubleClick"] {\r\n		min-width: 100%;\r\n	}\r\n\r\n	/* /video/xxx页面 */\r\n	/* 点赞、评论、分享偏移 */\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		.basePlayerContainer\r\n		.positionBox {\r\n		padding-right: 30px !important;\r\n	}\r\n	/* 底部工具栏右侧的按钮 */\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		.xgplayer.xgplayer-pc\r\n		.xg-right-grid {\r\n		margin-right: 35px !important;\r\n	}\r\n	/* 评论区全屏 */\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		> div:has(.comment-mainContent[data-e2e="comment-list"]),\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		> div\r\n		> div:has(.comment-mainContent[data-e2e="comment-list"]) {\r\n		width: 100vw !important;\r\n	}\r\n\r\n	/* 设置视频区域的高度 */\r\n	#slidelist {\r\n		width: 100vw;\r\n		height: calc(100vh - var(--header-height)) !important;\r\n	}\r\n	/* 修正网页全屏下的视频高度 */\r\n	#slidelist[class*="isCssFullScreen"] {\r\n		height: 100vh !important;\r\n	}\r\n	/* 去除视频区域右侧偏移 */\r\n	.is-mobile-pc div[data-e2e="slideList"] {\r\n		padding-right: 0px !important;\r\n		height: 100% !important;\r\n		min-height: 100% !important;\r\n	}\r\n}\r\n\r\n/* 横屏且高度小于550px */\r\n@media screen and (max-height: 550px) and (orientation: landscape) {\r\n	/* 右侧工具栏缩小 */\r\n	.basePlayerContainer .positionBox {\r\n		transform: scale(0.95) !important;\r\n		bottom: 42px !important;\r\n		padding-right: 10px !important;\r\n	}\r\n	/* 右侧工具栏的svg再缩小 */\r\n	.basePlayerContainer .positionBox svg {\r\n		transform: scale3d(0.95, 0.95, 0.95);\r\n	}\r\n	/* 修复全屏下不显示视频底部的控制栏 */\r\n	.isCssFullScreen [data-e2e="slideList"] {\r\n		min-height: auto !important;\r\n	}\r\n}\r\n';
  const DouYinVideoPlayerCommentBlockElement = {
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
  const DouYinVideoPlayerBlockElement_BottomToolbar = {
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
        // 修复屏蔽后视频信息区域未沉底
        DouYinVideoPlayer.removeStyleBottom(),
        addStyle(
          /*css*/
          `
				/* 视频标题往下移 */
				div:has(> #video-info-wrap){
					bottom: 0px !important;
				}
			`
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
  const DouYinVideoPlayerBlockElement_RightToolbar = {
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
				[data-e2e="video-player-share"]+div[data-e2e="video-share-container"] > div:first-child{
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
				[data-e2e="video-player-share"]+div[data-e2e="video-share-container"] > div:first-child{
					bottom: 0px !important;
				}
			`
        )
      ];
    }
  };
  const DouYinVideoPlayerBlockElement = {
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
      DouYinVideoPlayerBlockElement_BottomToolbar.init();
      DouYinVideoPlayerBlockElement_RightToolbar.init();
      DouYinVideoPlayerCommentBlockElement.init();
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
      if (DouYinRouter.isSearch() || DouYinRouter.isDiscover()) {
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
      if (DouYinRouter.isSearch() || DouYinRouter.isDiscover()) {
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
  class GestureBack {
    constructor(config) {
      /**
       * 是否正在后退
       */
      __publicField(this, "isBacking", false);
      __publicField(this, "config");
      this.config = config;
      this.enterGestureBackMode = this.enterGestureBackMode.bind(this);
      this.quitGestureBackMode = this.quitGestureBackMode.bind(this);
      this.popStateEvent = this.popStateEvent.bind(this);
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
      domUtils.on(this.config.win, "popstate", this.popStateEvent, {
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
      domUtils.off(this.config.win, "popstate", this.popStateEvent, {
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
  const DouYinVideoPlayerBlockMouseHoverTip = {
    init() {
      DouYinVideoPlayerBlockMouseHoverTip_RightToolBar.init();
      DouYinVideoPlayerBlockMouseHoverTip_BottomToolBar.init();
    }
  };
  const DouYinVideoPlayerBlockMouseHoverTip_RightToolBar = {
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
  const DouYinVideoPlayerBlockMouseHoverTip_BottomToolBar = {
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
  const DouYinVideoPlayer = {
    init() {
      DouYinVideoPlayerBlockElement.init();
      PopsPanel.onceExec("dy-short-cut", () => {
        DouYinVideoPlayerShortCut.init();
      });
      DouYinVideoPlayerBlockMouseHoverTip.init();
      PopsPanel.execMenuOnce("changeCommentToBottom", () => {
        DouYinVideoPlayer.changeCommentToBottom();
      });
      PopsPanel.execMenuOnce("fullScreen", () => {
        return this.fullScreen();
      });
      PopsPanel.execMenuOnce("parseVideo", () => {
        DouYinVideoPlayer.parseVideo();
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
      PopsPanel.execMenuOnce("dy-video-waitToRemovePauseDialog", () => {
        this.waitToRemovePauseDialog();
      });
      PopsPanel.execMenuOnce("dy-video-removeStyle-bottom", () => {
        return this.removeStyleBottom();
      });
      domUtils.ready(() => {
        DouYinVideoPlayer.chooseQuality(
          PopsPanel.getValue("chooseVideoDefinition")
        );
        PopsPanel.execMenuOnce("mobileMode", () => {
          return this.mobileMode();
        });
        PopsPanel.execMenuOnce("dy-video-titleInfoAutoHide", () => {
          this.titleInfoAutoHide();
        });
        PopsPanel.execMenuOnce("dy-video-videoControlsAutoHide", () => {
          this.videoControlsAutoHide();
        });
        PopsPanel.execMenuOnce("dy-video-rightToolBarAutoHide", () => {
          this.rightToolBarAutoHide();
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
      result.push(DouYinVideoPlayerBlockElement.shieldSearchFloatingBar());
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
          'xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon'
        ).then(($el) => {
          log.success("自动进入网页全屏");
          $el.click();
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
              DouYinVideoPlayer.autoEnterElementFullScreen(true);
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
    chooseQuality(mode = 0) {
      log.info("选择视频清晰度: " + mode);
      let QualitySessionKey = "MANUAL_SWITCH";
      let clarityReal = [
        "adapt_lowest_4_1",
        "adapt_lowest_1440_1",
        "normal_1080_0",
        "normal_540_0",
        "low_720_0",
        "normal_720_0",
        "low_540_0",
        "lower_540_0",
        "adapt_low_540_0",
        "adapt_lowest_1080_1",
        "adapt_lowest_720_1",
        "adapt_540_1",
        "adapt_lower_540_1"
      ];
      let definition = [
        {
          clarityReal,
          done: 1,
          gearClarity: "20",
          gearName: "超清 4K",
          gearType: -2,
          qualityType: 72
        },
        {
          clarityReal,
          done: 1,
          gearClarity: "10",
          gearName: "超清 2K",
          gearType: -1,
          qualityType: 7
        },
        {
          clarityReal,
          done: 1,
          gearClarity: "5",
          gearName: "高清 1080P",
          gearType: 1,
          qualityType: 2
        },
        {
          clarityReal,
          done: 1,
          gearClarity: "4",
          gearName: "高清 720P",
          gearType: 2,
          qualityType: 15
        },
        {
          clarityReal,
          done: 1,
          gearClarity: "3",
          gearName: "标清 540P",
          gearType: 3,
          qualityType: 21
        },
        {
          clarityReal,
          done: 1,
          gearClarity: "2",
          gearName: "极速",
          gearType: 4,
          qualityType: 21
        },
        {
          clarityReal,
          done: 1,
          gearClarity: "0",
          gearName: "智能",
          gearType: 0
        }
      ];
      let choose = definition.find((item) => item.gearType === mode);
      function setVideoQuality(value) {
        _unsafeWindow.sessionStorage.setItem(QualitySessionKey, value);
      }
      if (choose) {
        let chooseStr = JSON.stringify(choose);
        let intervalId = setInterval(() => {
          setVideoQuality(chooseStr);
        }, 250);
        setTimeout(() => {
          clearInterval(intervalId);
        }, 10 * 1e3);
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
        $$("xg-icon.xgplayer-playback-setting").forEach(
          ($playbackSetting) => {
            var _a2, _b, _c, _d;
            let $container = utils.getReactObj($playbackSetting).reactContainer;
            (_d = (_c = (_b = (_a2 = $container == null ? void 0 : $container.memoizedState) == null ? void 0 : _a2.element) == null ? void 0 : _b.props) == null ? void 0 : _c.xgCase) == null ? void 0 : _d.updatePlayBackRatio();
          }
        );
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
        srcList.forEach((url) => {
          contentHTML += /*html*/
          `
          		<div class="douyin-video-link-item"><a href="${url}" target="_blank">${url}</a></div>
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
        addStyle(MobileCSS$1)
      );
      PopsPanel.onceExec("repairProgressBar", () => {
        this.repairVideoProgressBar();
      });
      return result;
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
      domUtils.ready(() => {
        domUtils.on(
          document.body,
          "touchstart",
          "xg-progress",
          (event, selectorTarget) => {
            let $click = selectorTarget;
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
          document.body,
          "touchend",
          "xg-progress",
          (event, selectorTarget) => {
            let $click = selectorTarget;
            let $xg_outer = $click.querySelector("xg-outer");
            if ($xg_outer) {
              $xg_outer.style.height = "";
            }
          },
          {
            capture: true
          }
        );
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
          ),
          // 进入作者主页后的当前观看的视频
          $(
            '#slideMode[data-e2e="feed-active-video"] #video-info-wrap:not([data-is-inject-mouse-hide])'
          ),
          // 单个视频
          $(
            'div[data-e2e="video-detail"] #video-info-wrap:not([data-is-inject-mouse-hide])'
          )
        );
        if (!videoInfoList.length) {
          return;
        }
        videoInfoList.forEach(($el) => {
          if (!$el) {
            return;
          }
          $el.setAttribute("data-is-inject-mouse-hide", "");
          let timeId = setTimeout(() => {
            domUtils.trigger($el, "mouseleave");
          }, PopsPanel.getValue("dy-video-titleInfoAutoHide-delayTime"));
          domUtils.on($el, ["mouseenter", "touchstart"], (event) => {
            clearTimeout(timeId);
            domUtils.css($el, "opacity", "");
          });
          domUtils.on($el, ["mouseleave", "touchend"], (event) => {
            domUtils.css($el, "opacity", 0);
          });
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        }
      });
    },
    /**
     * 自动隐藏视频控件
     */
    videoControlsAutoHide() {
      log.info(`自动隐藏视频控件`);
      let lockFn = new utils.LockFunction(() => {
        let videoInfoList = [];
        videoInfoList.push(
          // 一般的推荐视频|单个视频的当前观看的视频
          $(
            `#sliderVideo[data-e2e="feed-active-video"] xg-controls.xgplayer-controls:not([data-is-inject-mouse-hide])`
          ),
          // 进入作者主页后的当前观看的视频
          $(
            '#slideMode[data-e2e="feed-active-video"] xg-controls.xgplayer-controls:not([data-is-inject-mouse-hide])'
          ),
          // 单个视频
          $(
            'div[data-e2e="video-detail"] xg-controls.xgplayer-controls:not([data-is-inject-mouse-hide])'
          )
        );
        if (!videoInfoList.length) {
          return;
        }
        videoInfoList.forEach(($el) => {
          if (!$el) {
            return;
          }
          $el.setAttribute("data-is-inject-mouse-hide", "");
          let timeId = setTimeout(() => {
            domUtils.trigger($el, "mouseleave");
          }, PopsPanel.getValue("dy-video-videoControlsAutoHide-delayTime"));
          domUtils.on($el, ["mouseenter", "touchstart"], (event) => {
            clearTimeout(timeId);
            domUtils.css($el, "opacity", "");
          });
          domUtils.on($el, ["mouseleave", "touchend"], (event) => {
            domUtils.css($el, "opacity", 0);
          });
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        }
      });
    },
    /**
     * 自动隐藏右侧工具栏
     */
    rightToolBarAutoHide() {
      log.info(`自动隐藏右侧工具栏`);
      addStyle(
        /*css*/
        `
			.positionBox{
				transition: opacity 0.5s;
			}
		`
      );
      let lockFn = new utils.LockFunction(() => {
        let videoInfoList = [];
        videoInfoList.push(
          // 一般的推荐视频|单个视频的当前观看的视频
          $(
            '#sliderVideo[data-e2e="feed-active-video"] .positionBox:not([data-is-inject-mouse-hide])'
          ),
          // 进入作者主页后的当前观看的视频
          $(
            '#slideMode[data-e2e="feed-active-video"] .positionBox:not([data-is-inject-mouse-hide])'
          ),
          // 单个视频
          $(
            'div[data-e2e="video-detail"] .positionBox:not([data-is-inject-mouse-hide])'
          )
        );
        if (!videoInfoList.length) {
          return;
        }
        videoInfoList.forEach(($el) => {
          if (!$el) {
            return;
          }
          $el.setAttribute("data-is-inject-mouse-hide", "");
          let timeId = setTimeout(() => {
            domUtils.trigger($el, "mouseleave");
          }, PopsPanel.getValue("dy-video-titleInfoAutoHide-delayTime"));
          domUtils.on($el, ["mouseenter", "touchstart"], (event) => {
            clearTimeout(timeId);
            domUtils.css($el, "opacity", "");
          });
          domUtils.on($el, ["mouseleave", "touchend"], (event) => {
            domUtils.css($el, "opacity", 0);
          });
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true
        },
        immediate: true,
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
        let $close = $($closeSelector);
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
    },
    /**
     * 信息区域
     *
     * 长时间无操作，已暂停播放
     */
    waitToRemovePauseDialog() {
      log.info("监听信息区域【长时间无操作，已暂停播放】弹窗");
      let checkDialogToClose = ($ele) => {
        let eleText = domUtils.text($ele);
        if (eleText.includes("长时间无操作") && eleText.includes("暂停播放")) {
          Qmsg.info(`出现【长时间无操作，已暂停播放】弹窗`, {
            consoleLogContent: true
          });
          let $rect = utils.getReactObj($ele);
          if (typeof $rect.reactProps === "object") {
            let closeDialogFn = utils.queryProperty($rect.reactProps, (obj) => {
              var _a2, _b;
              if (typeof ((_a2 = obj == null ? void 0 : obj["props"]) == null ? void 0 : _a2["onClose"]) === "function") {
                return {
                  isFind: true,
                  data: obj["props"]["onClose"]
                };
              } else {
                let children = ((_b = obj == null ? void 0 : obj["props"]) == null ? void 0 : _b["children"]) ?? (obj == null ? void 0 : obj["children"]);
                return {
                  isFind: false,
                  data: Array.isArray(children) ? children[0] : children
                };
              }
            });
            if (typeof closeDialogFn === "function") {
              Qmsg.success(`调用函数关闭弹窗`, { consoleLogContent: true });
              closeDialogFn();
            }
          }
        }
      };
      domUtils.ready(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback() {
            $$(
              `.basePlayerContainer xg-bar.xg-right-bar + div`
            ).forEach(($elementTiming) => {
              checkDialogToClose($elementTiming);
            });
          }
        });
      });
    },
    /**
     * 移除video的bottom偏移
     */
    removeStyleBottom() {
      log.info(`移除video的bottom偏移`);
      return addStyle(
        /*css*/
        `
			#sliderVideo[data-e2e="feed-active-video"] div:has( > div > #video-info-wrap),
			div:has( > div > pace-island > #video-info-wrap ),
			xg-video-container.xg-video-container{
				bottom: 0 !important;
			}
		`
      );
    }
  };
  const DouYinVideoPlayerShortCut = {
    shortCut: new ShortCut("video-short-cut"),
    $data: {
      rateMap: [
        "0.75",
        "1",
        "1.25",
        "1.5",
        "1.75",
        "2",
        "3"
      ]
    },
    init() {
      this.shortCut.initGlobalKeyboardListener(this.getShortCutMap());
    },
    getShortCutMap() {
      return {
        "dy-video-rate-low": {
          target: "window",
          callback() {
            log.info("触发快捷键 ==> 调用倍速：小");
            let currentRate = _unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
            let findIndex = DouYinVideoPlayerShortCut.$data.rateMap.findIndex(
              (rate) => {
                return rate === currentRate;
              }
            );
            if (findIndex === 0) {
              log.warn("触发快捷键 ==> 已是最小倍速: " + currentRate);
              return;
            }
            let prevRate = DouYinVideoPlayerShortCut.$data.rateMap[findIndex - 1];
            log.info("触发快捷键 ==> 设置倍速: " + prevRate);
            DouYinVideoPlayer.chooseVideoRate(prevRate);
          }
        },
        "dy-video-rate-up": {
          target: "window",
          callback() {
            log.info("触发快捷键 ==> 调用倍速：大");
            let currentRate = _unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
            let findIndex = DouYinVideoPlayerShortCut.$data.rateMap.findIndex(
              (rate) => {
                return rate === currentRate;
              }
            );
            if (findIndex === DouYinVideoPlayerShortCut.$data.rateMap.length - 1) {
              log.warn("触发快捷键 ==> 已是最大倍速: " + currentRate);
              return;
            }
            let nextRate = DouYinVideoPlayerShortCut.$data.rateMap[findIndex + 1];
            log.info("触发快捷键 ==> 设置倍速: " + nextRate);
            DouYinVideoPlayer.chooseVideoRate(nextRate);
          }
        },
        "dy-video-shortcut-immersionMode": {
          target: "window",
          callback() {
            log.info("触发快捷键 ==> 沉浸模式");
            let value = PopsPanel.getValue("fullScreen");
            PopsPanel.setValue("fullScreen", !value);
            PopsPanel.execMenuOnce("fullScreen", () => {
              return DouYinVideoPlayer.fullScreen();
            });
          }
        },
        "dy-video-shortcut-changeVideoMuted": {
          target: "window",
          callback() {
            log.info(`触发快捷键 ==> 切换静音状态`);
            $$("video").forEach(($video) => {
              let muted = !$video.muted;
              log.success(`切换video标签的静音状态为 ${muted}`);
              $video.muted = muted;
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
  const UIInput = function(text, key, defaultValue, description, changeCallBack, placeholder = "", isNumber, isPassword) {
    let result = {
      text,
      type: "input",
      isNumber: Boolean(isNumber),
      isPassword: Boolean(isPassword),
      props: {},
      attributes: {},
      description,
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, value) {
        this.props[PROPS_STORAGE_API].set(key, value);
      },
      placeholder
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
  const UISelectMultiple = function(text, key, defaultValue, data, callback, description, placeholder = "请至少选择一个选项", selectConfirmDialogDetails) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    let result = {
      text,
      type: "select-multiple",
      description,
      placeholder,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      selectConfirmDialogDetails,
      callback(selectInfo) {
        let value = [];
        selectInfo.forEach((selectedInfo) => {
          value.push(selectedInfo.value);
        });
        this.props[PROPS_STORAGE_API].set(key, value);
        log.info(`多选-选择：`, value);
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
  class RuleEditView {
    constructor(option) {
      __publicField(this, "option");
      this.option = option;
    }
    /**
     * 显示视图
     */
    async showView() {
      var _a2;
      let $dialog = __pops.confirm({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `
          ),
          html: true
        },
        btn: utils.assign(
          {
            ok: {
              callback: async () => {
                await submitSaveOption();
              }
            }
          },
          this.option.btn || {},
          true
        ),
        mask: {
          enable: true
        },
        style: (
          /*css*/
          `
                ${__pops.config.cssText.panelCSS}
                
                .rule-form-container {
                    
                }
                .rule-form-container li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 20px;
                    gap: 10px;
                }
                .pops-panel-item-left-main-text{
                    max-width: 150px;
                }
                .pops-panel-item-right-text{
                    padding-left: 30px;
                }
                .pops-panel-item-right-text,
                .pops-panel-item-right-main-text{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }

                ${((_a2 = this.option) == null ? void 0 : _a2.style) ?? ""}
            `
        ),
        width: typeof this.option.width === "function" ? this.option.width() : window.innerWidth > 500 ? "500px" : "88vw",
        height: typeof this.option.height === "function" ? this.option.height() : window.innerHeight > 500 ? "500px" : "80vh"
      });
      let $form = $dialog.$shadowRoot.querySelector(
        ".rule-form-container"
      );
      $dialog.$shadowRoot.querySelector(
        "input[type=submit]"
      );
      let $ulist = $dialog.$shadowRoot.querySelector(".rule-form-ulist");
      let view = await this.option.getView(await this.option.data());
      $ulist.appendChild(view);
      const submitSaveOption = async () => {
        let result = await this.option.onsubmit($form, await this.option.data());
        if (!result.success) {
          return;
        }
        $dialog.close();
        await this.option.dialogCloseCallBack(true);
      };
    }
  }
  class RuleFilterView {
    constructor(option) {
      __publicField(this, "option");
      this.option = option;
    }
    showView() {
      let $alert = __pops.alert({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                <div class="filter-container"></div>
                `
          )
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default"
          }
        },
        mask: {
          enable: true
        },
        width: window.innerWidth > 500 ? "350px" : "80vw",
        height: window.innerHeight > 500 ? "300px" : "70vh",
        style: (
          /*css*/
          `
            .filter-container{
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .filter-container button{
                text-wrap: wrap;
                padding: 8px;
                height: auto;
                text-align: left;
            }
            `
        )
      });
      let $filterContainer = $alert.$shadowRoot.querySelector(".filter-container");
      let $fragment = document.createDocumentFragment();
      this.option.filterOption.forEach((filterOption) => {
        let $button = document.createElement("button");
        $button.innerText = filterOption.name;
        let execFilterAndCloseDialog = async () => {
          let allRuleInfo = await this.option.getAllRuleInfo();
          allRuleInfo.forEach(async (ruleInfo) => {
            let filterResult = await filterOption.filterCallBack(ruleInfo.data);
            if (!filterResult) {
              domUtils.hide(ruleInfo.$el, false);
            } else {
              domUtils.show(ruleInfo.$el, false);
            }
          });
          if (typeof this.option.execFilterCallBack === "function") {
            await this.option.execFilterCallBack();
          }
          $alert.close();
        };
        domUtils.on($button, "click", async (event) => {
          utils.preventEvent(event);
          if (typeof filterOption.callback === "function") {
            let result = await filterOption.callback(
              event,
              execFilterAndCloseDialog
            );
            if (!result) {
              return;
            }
          }
          await execFilterAndCloseDialog();
        });
        $fragment.appendChild($button);
      });
      $filterContainer.appendChild($fragment);
    }
  }
  class RuleView {
    constructor(option) {
      __publicField(this, "option");
      this.option = option;
    }
    /**
     * 显示视图
     * @param filterCallBack 返回值为false隐藏，true则不隐藏（不处理）
     */
    async showView(filterCallBack) {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
      let $popsConfirm = __pops.confirm({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="rule-view-container">
                    </div>
                    `
          ),
          html: true
        },
        btn: {
          merge: true,
          reverse: false,
          position: "space-between",
          ok: {
            enable: ((_c = (_b = (_a2 = this.option) == null ? void 0 : _a2.bottomControls) == null ? void 0 : _b.add) == null ? void 0 : _c.enable) || true,
            type: "primary",
            text: "添加",
            callback: async (event) => {
              this.showEditView(
                false,
                await this.option.getAddData(),
                $popsConfirm.$shadowRoot
              );
            }
          },
          close: {
            enable: true,
            callback(event) {
              $popsConfirm.close();
            }
          },
          cancel: {
            enable: ((_f = (_e = (_d = this.option) == null ? void 0 : _d.bottomControls) == null ? void 0 : _e.filter) == null ? void 0 : _f.enable) || false,
            type: "default",
            text: "过滤",
            callback: (details, event) => {
              var _a3, _b2, _c2, _d2, _e2, _f2, _g2;
              if (typeof ((_c2 = (_b2 = (_a3 = this.option) == null ? void 0 : _a3.bottomControls) == null ? void 0 : _b2.filter) == null ? void 0 : _c2.callback) === "function") {
                this.option.bottomControls.filter.callback();
              }
              let getAllRuleElement = () => {
                return Array.from(
                  $popsConfirm.$shadowRoot.querySelectorAll(
                    ".rule-view-container .rule-item"
                  )
                );
              };
              let $button = event.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");
              if (domUtils.text($button).includes("取消")) {
                getAllRuleElement().forEach(($el) => {
                  domUtils.show($el, false);
                });
                domUtils.text($button, "过滤");
              } else {
                let ruleFilterView = new RuleFilterView({
                  title: ((_e2 = (_d2 = this.option.bottomControls) == null ? void 0 : _d2.filter) == null ? void 0 : _e2.title) ?? "过滤规则",
                  filterOption: ((_g2 = (_f2 = this.option.bottomControls) == null ? void 0 : _f2.filter) == null ? void 0 : _g2.option) || [],
                  execFilterCallBack() {
                    domUtils.text($button, "取消过滤");
                  },
                  getAllRuleInfo: () => {
                    return getAllRuleElement().map(($el) => {
                      return {
                        data: this.parseRuleItemElement($el).data,
                        $el
                      };
                    });
                  }
                });
                ruleFilterView.showView();
              }
            }
          },
          other: {
            enable: ((_i = (_h = (_g = this.option) == null ? void 0 : _g.bottomControls) == null ? void 0 : _h.clear) == null ? void 0 : _i.enable) || true,
            type: "xiaomi-primary",
            text: `清空所有(${(await this.option.data()).length})`,
            callback: (event) => {
              let $askDialog = __pops.confirm({
                title: {
                  text: "提示",
                  position: "center"
                },
                content: {
                  text: "确定清空所有的数据？",
                  html: false
                },
                btn: {
                  ok: {
                    enable: true,
                    callback: async (popsEvent) => {
                      var _a3, _b2, _c2;
                      log.success("清空所有");
                      if (typeof ((_c2 = (_b2 = (_a3 = this.option) == null ? void 0 : _a3.bottomControls) == null ? void 0 : _b2.clear) == null ? void 0 : _c2.callback) === "function") {
                        this.option.bottomControls.clear.callback();
                      }
                      let data = await this.option.data();
                      if (data.length) {
                        Qmsg.error("清理失败");
                        return;
                      } else {
                        Qmsg.success("清理成功");
                      }
                      await this.updateDeleteAllBtnText($popsConfirm.$shadowRoot);
                      this.clearContent($popsConfirm.$shadowRoot);
                      $askDialog.close();
                    }
                  },
                  cancel: {
                    text: "取消",
                    enable: true
                  }
                },
                mask: { enable: true },
                width: "300px",
                height: "200px"
              });
            }
          }
        },
        mask: {
          enable: true
        },
        width: window.innerWidth > 500 ? "500px" : "88vw",
        height: window.innerHeight > 500 ? "500px" : "80vh",
        style: (
          /*css*/
          `
            ${__pops.config.cssText.panelCSS}
            
            .rule-item{
                display: flex;
                align-items: center;
                line-height: normal;
                font-size: 16px;
                padding: 4px 8px;
                gap: 8px;
            }
            .rule-name{
                flex: 1;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .rule-controls{
                display: flex;
                align-items: center;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                gap: 8px;
                padding: 0px;
            }
            .rule-controls-enable{
                
            }
            .rule-controls-edit{
                
            }
            .rule-controls-delete{
                
            }
            .rule-controls-edit,
            .rule-controls-delete{
                width: 16px;
                height: 16px;
                cursor: pointer;
            }
            `
        )
      });
      let allData = await this.option.data();
      let changeButtonText = false;
      for (let index = 0; index < allData.length; index++) {
        let item = allData[index];
        let $ruleItemList = await this.appendRuleItemElement(
          $popsConfirm.$shadowRoot,
          item
        );
        let flag = typeof filterCallBack === "function" ? filterCallBack(item) : true;
        if (!flag) {
          changeButtonText = true;
          $ruleItemList.forEach(($el) => {
            domUtils.hide($el, false);
          });
        }
      }
      if (changeButtonText) {
        let $button = $popsConfirm.$shadowRoot.querySelector(
          ".pops-confirm-btn-cancel span"
        );
        domUtils.text($button, "取消过滤");
      }
    }
    /**
     * 解析弹窗内的各个元素
     */
    parseViewElement($shadowRoot) {
      let $container = $shadowRoot.querySelector(
        ".rule-view-container"
      );
      let $deleteBtn = $shadowRoot.querySelector(
        ".pops-confirm-btn button.pops-confirm-btn-other"
      );
      return {
        /** 容器 */
        $container,
        /** 左下角的清空按钮 */
        $deleteBtn
      };
    }
    /**
     * 解析每一项的元素
     */
    parseRuleItemElement($ruleElement) {
      let $enable = $ruleElement.querySelector(
        ".rule-controls-enable"
      );
      let $enableSwitch = $enable.querySelector(".pops-panel-switch");
      let $enableSwitchInput = $enable.querySelector(
        ".pops-panel-switch__input"
      );
      let $enableSwitchCore = $enable.querySelector(
        ".pops-panel-switch__core"
      );
      let $edit = $ruleElement.querySelector(".rule-controls-edit");
      let $delete = $ruleElement.querySelector(
        ".rule-controls-delete"
      );
      return {
        /** 启用开关 */
        $enable,
        /** 启用开关的container */
        $enableSwitch,
        /** 启用开关的input */
        $enableSwitchInput,
        /** 启用开关的core */
        $enableSwitchCore,
        /** 编辑按钮 */
        $edit,
        /** 删除按钮 */
        $delete,
        /** 存储在元素上的数据 */
        data: Reflect.get($ruleElement, "data-rule")
      };
    }
    /**
     * 创建一条规则元素
     */
    async createRuleItemElement(data, $shadowRoot) {
      let name = await this.option.getDataItemName(data);
      let $ruleItem = domUtils.createElement("div", {
        className: "rule-item",
        innerHTML: (
          /*html*/
          `
			<div class="rule-name">${name}</div>
			<div class="rule-controls">
				<div class="rule-controls-enable">
					<div class="pops-panel-switch">
						<input class="pops-panel-switch__input" type="checkbox">
						<span class="pops-panel-switch__core">
							<div class="pops-panel-switch__action">
							</div>
						</span>
					</div>
				</div>
				<div class="rule-controls-edit">
					${__pops.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${__pops.config.iconSVG.delete}
				</div>
			</div>
			`
        )
      });
      Reflect.set($ruleItem, "data-rule", data);
      let switchCheckedClassName = "pops-panel-switch-is-checked";
      const {
        $enable,
        $enableSwitch,
        $enableSwitchCore,
        $enableSwitchInput,
        $delete,
        $edit
      } = this.parseRuleItemElement($ruleItem);
      if (this.option.itemControls.enable.enable) {
        domUtils.on($enableSwitchCore, "click", async (event) => {
          let isChecked = false;
          if ($enableSwitch.classList.contains(switchCheckedClassName)) {
            $enableSwitch.classList.remove(switchCheckedClassName);
            isChecked = false;
          } else {
            $enableSwitch.classList.add(switchCheckedClassName);
            isChecked = true;
          }
          $enableSwitchInput.checked = isChecked;
          await this.option.itemControls.enable.callback(data, isChecked);
        });
        if (await this.option.itemControls.enable.getEnable(data)) {
          $enableSwitch.classList.add(switchCheckedClassName);
        }
      } else {
        $enable.remove();
      }
      if (this.option.itemControls.edit.enable) {
        domUtils.on($edit, "click", (event) => {
          utils.preventEvent(event);
          this.showEditView(true, data, $shadowRoot, $ruleItem, (newData) => {
            data = null;
            data = newData;
          });
        });
      } else {
        $edit.remove();
      }
      if (this.option.itemControls.delete.enable) {
        domUtils.on($delete, "click", (event) => {
          utils.preventEvent(event);
          let $askDialog = __pops.confirm({
            title: {
              text: "提示",
              position: "center"
            },
            content: {
              text: "确定删除该条数据？",
              html: false
            },
            btn: {
              ok: {
                enable: true,
                callback: async (popsEvent) => {
                  log.success("删除数据");
                  let flag = await this.option.itemControls.delete.deleteCallBack(
                    data
                  );
                  if (flag) {
                    Qmsg.success("成功删除该数据");
                    $ruleItem.remove();
                    await this.updateDeleteAllBtnText($shadowRoot);
                    $askDialog.close();
                  } else {
                    Qmsg.error("删除该数据失败");
                  }
                }
              },
              cancel: {
                text: "取消",
                enable: true
              }
            },
            mask: {
              enable: true
            },
            width: "300px",
            height: "200px"
          });
        });
      } else {
        $delete.remove();
      }
      return $ruleItem;
    }
    /**
     * 添加一个规则元素
     */
    async appendRuleItemElement($shadowRoot, data) {
      let { $container } = this.parseViewElement($shadowRoot);
      let $ruleItem = [];
      let iteratorData = Array.isArray(data) ? data : [data];
      for (let index = 0; index < iteratorData.length; index++) {
        let item = iteratorData[index];
        let $item = await this.createRuleItemElement(item, $shadowRoot);
        $container.appendChild($item);
        $ruleItem.push($item);
      }
      await this.updateDeleteAllBtnText($shadowRoot);
      return $ruleItem;
    }
    /**
     * 更新弹窗内容的元素
     */
    async updateRuleContaienrElement($shadowRoot) {
      this.clearContent($shadowRoot);
      const { $container } = this.parseViewElement($shadowRoot);
      let data = await this.option.data();
      await this.appendRuleItemElement($shadowRoot, data);
      await this.updateDeleteAllBtnText($shadowRoot);
    }
    /**
     * 更新规则元素
     */
    async updateRuleItemElement(data, $oldRuleItem, $shadowRoot) {
      let $newRuleItem = await this.createRuleItemElement(data, $shadowRoot);
      $oldRuleItem.after($newRuleItem);
      $oldRuleItem.remove();
    }
    /**
     * 清空内容
     */
    clearContent($shadowRoot) {
      const { $container } = this.parseViewElement($shadowRoot);
      domUtils.html($container, "");
    }
    /**
     * 设置删除按钮的文字
     */
    setDeleteBtnText($shadowRoot, text, isHTML = false) {
      const { $deleteBtn } = this.parseViewElement($shadowRoot);
      if (isHTML) {
        domUtils.html($deleteBtn, text);
      } else {
        domUtils.text($deleteBtn, text);
      }
    }
    /**
     * 更新【清空所有】的按钮的文字
     * @param $shadowRoot
     */
    async updateDeleteAllBtnText($shadowRoot) {
      let data = await this.option.data();
      this.setDeleteBtnText($shadowRoot, `清空所有(${data.length})`);
    }
    /**
     * 显示编辑视图
     * @param isEdit 是否是编辑状态
     * @param editData 编辑的数据
     */
    showEditView(isEdit, editData, $parentShadowRoot, $editRuleItemElement, updateDataCallBack) {
      let dialogCloseCallBack = async (isSubmit) => {
        if (isSubmit) ;
        else {
          if (!isEdit) {
            await this.option.deleteData(editData);
          }
          if (typeof updateDataCallBack === "function") {
            let newData = await this.option.getData(editData);
            updateDataCallBack(newData);
          }
        }
      };
      let editView = new RuleEditView({
        title: isEdit ? "编辑" : "添加",
        data: () => {
          return editData;
        },
        dialogCloseCallBack,
        getView: async (data) => {
          return await this.option.itemControls.edit.getView(data, isEdit);
        },
        btn: {
          ok: {
            enable: true,
            text: isEdit ? "修改" : "添加"
          },
          cancel: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            }
          },
          close: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            }
          }
        },
        onsubmit: async ($form, data) => {
          let result = await this.option.itemControls.edit.onsubmit(
            $form,
            isEdit,
            data
          );
          if (result.success) {
            if (isEdit) {
              Qmsg.success("修改成功");
              $parentShadowRoot && await this.updateRuleItemElement(
                result.data,
                $editRuleItemElement,
                $parentShadowRoot
              );
            } else {
              $parentShadowRoot && await this.appendRuleItemElement(
                $parentShadowRoot,
                result.data
              );
            }
          } else {
            if (isEdit) {
              Qmsg.error("修改失败");
            }
          }
          return result;
        },
        style: this.option.itemControls.edit.style,
        width: this.option.itemControls.edit.width,
        height: this.option.itemControls.edit.height
      });
      editView.showView();
    }
  }
  class DouYinVideoFilterBase {
    constructor() {
      __publicField(this, "$data", {
        dislike_request_queue: []
      });
    }
    /**
     * 解析awemeInfo转为规则过滤的字典
     * @param awemeInfo
     * @param showLog 是否显示日志输出
     */
    parseAwemeInfoDictData(awemeInfo, showLog = false) {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E;
      let authorInfo = (awemeInfo == null ? void 0 : awemeInfo["authorInfo"]) || // @ts-ignore
      (awemeInfo == null ? void 0 : awemeInfo["author"]);
      let nickname = (_a2 = authorInfo == null ? void 0 : authorInfo["nickname"]) == null ? void 0 : _a2.toString();
      let uid = (_b = authorInfo == null ? void 0 : authorInfo["uid"]) == null ? void 0 : _b.toString();
      let desc = (_c = awemeInfo == null ? void 0 : awemeInfo["desc"]) == null ? void 0 : _c.toString();
      let musicAlbum = (_d = awemeInfo == null ? void 0 : awemeInfo["music"]) == null ? void 0 : _d["album"];
      let musicAuthor = (_e = awemeInfo == null ? void 0 : awemeInfo["music"]) == null ? void 0 : _e["author"];
      let musicTitle = (_f = awemeInfo == null ? void 0 : awemeInfo["music"]) == null ? void 0 : _f["title"];
      let collectCount = ((_g = awemeInfo == null ? void 0 : awemeInfo["stats"]) == null ? void 0 : _g["collectCount"]) || // @ts-ignore
      ((_h = awemeInfo == null ? void 0 : awemeInfo["statistics"]) == null ? void 0 : _h["collect_count"]);
      let commentCount = ((_i = awemeInfo == null ? void 0 : awemeInfo["stats"]) == null ? void 0 : _i["commentCount"]) || // @ts-ignore
      ((_j = awemeInfo == null ? void 0 : awemeInfo["statistics"]) == null ? void 0 : _j["comment_count"]);
      let diggCount = ((_k = awemeInfo == null ? void 0 : awemeInfo["stats"]) == null ? void 0 : _k["diggCount"]) || // @ts-ignore
      ((_l = awemeInfo == null ? void 0 : awemeInfo["statistics"]) == null ? void 0 : _l["digg_count"]);
      let shareCount = ((_m = awemeInfo == null ? void 0 : awemeInfo["stats"]) == null ? void 0 : _m["shareCount"]) || // @ts-ignore
      ((_n = awemeInfo == null ? void 0 : awemeInfo["statistics"]) == null ? void 0 : _n["share_count"]);
      let duration = (_o = awemeInfo == null ? void 0 : awemeInfo["video"]) == null ? void 0 : _o["duration"];
      let textExtraInstance = (
        // @ts-ignore
        (awemeInfo == null ? void 0 : awemeInfo["textExtra"]) || (awemeInfo == null ? void 0 : awemeInfo["text_extra"])
      );
      let textExtra = [];
      let isLive = false;
      let isAds = false;
      let isSeriesInfo = false;
      let isMixInfo = false;
      let riskInfoContent = ((_p = awemeInfo == null ? void 0 : awemeInfo["riskInfos"]) == null ? void 0 : _p.content) || // @ts-ignore
      ((_q = awemeInfo == null ? void 0 : awemeInfo["risk_infos"]) == null ? void 0 : _q.content);
      let seriesInfoName = void 0;
      let seriesInfoContentTypes = [];
      let isPicture = (
        // @ts-ignore
        (awemeInfo == null ? void 0 : awemeInfo["aweme_type"]) === 68
      );
      if (typeof textExtraInstance === "object" && Array.isArray(textExtraInstance)) {
        textExtraInstance == null ? void 0 : textExtraInstance.forEach((item) => {
          let tagName = (item == null ? void 0 : item["hashtagName"]) || (item == null ? void 0 : item["hashtag_name"]);
          if (typeof tagName === "string" && tagName.trim() != "") {
            textExtra.push(tagName);
          }
        });
      }
      let mixInfoName = void 0;
      let mixInfoDesc = void 0;
      let videoTagInstance = (
        // @ts-ignore
        (awemeInfo == null ? void 0 : awemeInfo["videoTag"]) || (awemeInfo == null ? void 0 : awemeInfo["video_tag"])
      );
      let videoTag = [];
      let videoTagId = [];
      let awemeId = (
        // @ts-ignore
        (awemeInfo == null ? void 0 : awemeInfo["aweme_id"]) || (awemeInfo == null ? void 0 : awemeInfo["awemeId"])
      );
      if (typeof videoTagInstance === "object" && Array.isArray(videoTagInstance)) {
        videoTagInstance.forEach((item) => {
          let tagName = (item == null ? void 0 : item["tagName"]) || (item == null ? void 0 : item["tag_name"]);
          let tagId = (item == null ? void 0 : item["tagId"]) || (item == null ? void 0 : item["tag_id"]);
          if (typeof tagName === "string" && tagName.trim() != "") {
            videoTag.push(tagName);
          }
          if (typeof tagId === "number" || typeof tagId === "string") {
            let tagTdStr = tagId.toString();
            if (tagTdStr.trim() != "" && tagTdStr != "0") {
              videoTagId.push(tagTdStr);
            }
          }
        });
      }
      if (typeof awemeInfo["cellRoom"] === "object" || // @ts-ignore
      typeof awemeInfo["cell_room"] === "object") {
        isLive = true;
        if (showLog) {
          log.success("直播间：cellRoom is not null");
        }
      }
      if (awemeInfo["isAds"] || // @ts-ignore
      awemeInfo["is_ads"]) {
        isAds = true;
        if (showLog) {
          log.success("广告：isAds is true");
        }
      } else if (typeof awemeInfo["rawAdData"] === "string" && utils.isNotNull(awemeInfo["rawAdData"]) || // @ts-ignore
      typeof awemeInfo["raw_ad_data"] === "string" && // @ts-ignore
      utils.isNotNull(awemeInfo["raw_ad_data"])) {
        isAds = true;
        if (showLog) {
          log.success("广告：rawAdData is not null");
        }
      } else if (awemeInfo["webRawData"]) {
        if ((_s = (_r = awemeInfo["webRawData"]) == null ? void 0 : _r["brandAd"]) == null ? void 0 : _s["is_ad"]) {
          isAds = true;
          if (showLog) {
            log.success("广告：webRawData.brandAd.is_ad is true");
          }
        } else if ((_u = (_t = awemeInfo["webRawData"]) == null ? void 0 : _t["insertInfo"]) == null ? void 0 : _u["is_ad"]) {
          isAds = true;
          if (showLog) {
            log.success("广告：webRawData.insertInfo.is_ad is true");
          }
        }
      } else if (awemeInfo["web_raw_data"]) {
        if (typeof awemeInfo["web_raw_data"] === "string") ;
      }
      if (typeof riskInfoContent === "string" && riskInfoContent.trim() === "" || typeof riskInfoContent !== "string") {
        riskInfoContent = void 0;
      }
      let series_info = (awemeInfo == null ? void 0 : awemeInfo["seriesInfo"]) || // @ts-ignore
      (awemeInfo == null ? void 0 : awemeInfo["series_info"]);
      if (typeof series_info === "object" && series_info != null) {
        isSeriesInfo = true;
        seriesInfoName = (series_info == null ? void 0 : series_info["seriesName"]) || // @ts-ignore
        (series_info == null ? void 0 : series_info["series_name"]);
        let series_content_types = (series_info == null ? void 0 : series_info["seriesContentTypes"]) || // @ts-ignore
        (series_info == null ? void 0 : series_info["series_content_types"]);
        if (Array.isArray(series_content_types)) {
          series_content_types.forEach((it) => {
            let seriesInfoName2 = it["name"];
            seriesInfoContentTypes.push(seriesInfoName2);
          });
        }
      }
      let mixInfo = (awemeInfo == null ? void 0 : awemeInfo["mixInfo"]) || // @ts-ignore
      (awemeInfo == null ? void 0 : awemeInfo["mix_info"]);
      if (typeof mixInfo === "object" && utils.isNotNull(mixInfo)) {
        mixInfoName = (mixInfo == null ? void 0 : mixInfo["mixName"]) || (mixInfo == null ? void 0 : mixInfo["mix_name"]);
        mixInfoDesc = mixInfo == null ? void 0 : mixInfo["desc"];
      }
      if (isPicture) {
        duration = void 0;
      }
      let suggestWord = [];
      let suggestWords = (
        // @ts-ignore
        (awemeInfo == null ? void 0 : awemeInfo["suggest_words"]) || // @ts-ignore
        ((_v = awemeInfo == null ? void 0 : awemeInfo["suggest_words"]) == null ? void 0 : _v["suggest_words"]) || (awemeInfo == null ? void 0 : awemeInfo["suggestWords"])
      );
      if (Array.isArray(suggestWords)) {
        suggestWords.forEach((suggestWordItem) => {
          let words = suggestWordItem == null ? void 0 : suggestWordItem["words"];
          if (Array.isArray(words)) {
            words.forEach((wordItem) => {
              let word = wordItem == null ? void 0 : wordItem["word"];
              if (typeof word === "string" && word.trim() !== "") {
                suggestWord.push(word);
              }
            });
          }
        });
      }
      suggestWord = [...new Set(suggestWord)];
      let authorAccountCertInfo = "";
      let authorAccountCertInfoInsStr = (
        // @ts-ignore
        (_w = awemeInfo == null ? void 0 : awemeInfo["author"]) == null ? void 0 : _w["account_cert_info"]
      );
      if (typeof authorAccountCertInfoInsStr === "string") {
        let authorAccountCertInfoJSON = utils.toJSON(authorAccountCertInfoInsStr);
        if (typeof authorAccountCertInfoJSON["label_text"] === "string") {
          authorAccountCertInfo = authorAccountCertInfoJSON["label_text"];
        }
      } else {
        if (typeof ((_y = (_x = awemeInfo == null ? void 0 : awemeInfo["authorInfo"]) == null ? void 0 : _x["accountCertInfo"]) == null ? void 0 : _y["labelText"]) === "string") {
          authorAccountCertInfo = (_A = (_z = awemeInfo == null ? void 0 : awemeInfo["authorInfo"]) == null ? void 0 : _z["accountCertInfo"]) == null ? void 0 : _A["labelText"];
        }
      }
      let authorCustomVerify = (
        // @ts-ignore
        ((_B = awemeInfo == null ? void 0 : awemeInfo["author"]) == null ? void 0 : _B["custom_verify"]) || // @ts-ignore
        ((_C = awemeInfo == null ? void 0 : awemeInfo["authorInfo"]) == null ? void 0 : _C["customVerify"]) || ""
      );
      let authorEnterpriseVerifyReason = (
        // @ts-ignore
        ((_D = awemeInfo == null ? void 0 : awemeInfo["author"]) == null ? void 0 : _D["enterprise_verify_reason"]) || // @ts-ignore
        ((_E = awemeInfo == null ? void 0 : awemeInfo["authorInfo"]) == null ? void 0 : _E["enterpriseVerifyReason"]) || ""
      );
      return {
        awemeId,
        nickname,
        uid,
        desc,
        textExtra,
        videoTag,
        videoTagId,
        suggestWord,
        musicAlbum,
        musicAuthor,
        musicTitle,
        authorAccountCertInfo,
        authorCustomVerify,
        authorEnterpriseVerifyReason,
        riskInfoContent,
        seriesInfoName,
        seriesInfoContentTypes,
        mixInfoName,
        mixInfoDesc,
        collectCount,
        commentCount,
        diggCount,
        shareCount,
        duration,
        isLive,
        isAds,
        isSeriesInfo,
        isMixInfo,
        isPicture
      };
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
      } else if (typeof details.videoInfoValue === "object") {
        if (Array.isArray(details.videoInfoValue)) {
          let findValue = details.videoInfoValue.find((awemeInfoDictValue) => {
            if (typeof awemeInfoDictValue === "string" && details.ruleValue != null) {
              return Boolean(awemeInfoDictValue.match(details.ruleValue));
            } else {
              return false;
            }
          });
          if (findValue) {
            return true;
          }
        }
      } else if (typeof details.videoInfoValue === "number") {
        if (typeof details.ruleValue === "string") {
          let ruleValue = details.ruleValue.trim();
          let compareNumberMatch = ruleValue.match(/(\d+)/);
          if (!compareNumberMatch) {
            log.warn("过滤器-解析比较大小的数字失败: ", details);
            return false;
          }
          let compareNumber = Number(compareNumberMatch[1]);
          if (ruleValue.startsWith(">")) {
            if (ruleValue.startsWith(">=")) {
              if (details.videoInfoValue >= compareNumber) {
                return true;
              }
            } else {
              if (details.videoInfoValue > compareNumber) {
                return true;
              }
            }
          } else if (ruleValue.startsWith("<")) {
            if (ruleValue.startsWith("<=")) {
              if (details.videoInfoValue <= compareNumber) {
                return true;
              }
            } else {
              if (details.videoInfoValue < compareNumber) {
                return true;
              }
            }
          } else if (ruleValue.startsWith("=")) {
            if (details.videoInfoValue === compareNumber) {
              return true;
            }
          } else {
            log.warn("视频过滤器-未经允许的比较符号: ", details);
            return false;
          }
        }
      } else if (typeof details.videoInfoValue === "boolean") {
        if (typeof details.ruleValue === "string") {
          let trimRuleValue = details.ruleValue.trim();
          return details.videoInfoValue.toString() === trimRuleValue;
        }
      }
      return false;
    }
    /**
     * 检测视频是否可以屏蔽，可以屏蔽返回true
     * @param rule 规则
     * @param awemeInfo 视频信息结构
     */
    checkAwemeInfoIsFilter(rule, awemeInfo) {
      let transformAwemeInfo = this.parseAwemeInfoDictData(awemeInfo);
      let flag = false;
      let matchedFilterOption = null;
      outerLoop: for (let index = 0; index < rule.length; index++) {
        const filterOption = rule[index];
        const ruleNameList = Array.isArray(filterOption.data.ruleName) ? filterOption.data.ruleName : [filterOption.data.ruleName];
        for (let ruleNameIndex = 0; ruleNameIndex < ruleNameList.length; ruleNameIndex++) {
          const ruleName = ruleNameList[ruleNameIndex];
          if (!Reflect.has(transformAwemeInfo, ruleName)) {
            continue;
          }
          let tagKey = ruleName;
          let tagValue = transformAwemeInfo[tagKey];
          let details = {
            videoInfoKey: tagKey,
            videoInfoValue: tagValue,
            ruleKey: filterOption.data.ruleName,
            ruleValue: filterOption.data.ruleValue
          };
          flag = this.checkFilterWithRule(details);
          if (flag) {
            if (Array.isArray(filterOption.dynamicData) && filterOption.dynamicData.length) {
              let dynamicDetailsList = [];
              for (let dynamicIndex = 0; dynamicIndex < filterOption.dynamicData.length; dynamicIndex++) {
                const dynamicOption = filterOption.dynamicData[dynamicIndex];
                let dynamicTagKey = dynamicOption.ruleName;
                let dynamicTagValue = transformAwemeInfo[dynamicTagKey];
                let dynamicDetails = {
                  videoInfoKey: dynamicTagKey,
                  videoInfoValue: dynamicTagValue,
                  ruleKey: dynamicOption.ruleName,
                  ruleValue: dynamicOption.ruleValue
                };
                dynamicDetailsList.push(dynamicDetails);
                let dynamicCheckFlag = this.checkFilterWithRule(dynamicDetails);
                flag = flag && dynamicCheckFlag;
                if (!flag) {
                  break;
                }
              }
              if (flag) {
                log.success([
                  `视频过滤器-多组 ==> ${filterOption.name}`,
                  transformAwemeInfo,
                  details,
                  dynamicDetailsList,
                  awemeInfo,
                  filterOption
                ]);
              }
            } else {
              log.success([
                `视频过滤器 ==> ${filterOption.name}`,
                transformAwemeInfo,
                details,
                awemeInfo,
                filterOption
              ]);
            }
          }
          if (flag) {
            matchedFilterOption = filterOption;
            break outerLoop;
          }
        }
      }
      return {
        /** 是否允许过滤 */
        isFilter: flag,
        /** 命中的过滤规则 */
        matchedFilterOption,
        /** 解析出的视频信息 */
        transformAwemeInfo,
        /** 原始视频信息 */
        awemeInfo
      };
    }
    /**
     * 发送请求-不感兴趣
     * @param matchedFilterOption 命中的规则
     * @param awemeInfo 视频信息结构
     */
    async sendDislikeVideo(matchedFilterOption, awemeInfo) {
    }
    removeAweme(...args) {
      if (args.length === 1) {
        let $video = args[0];
        if ($video != null && $video instanceof HTMLElement) {
          $video.remove();
        }
      } else if (args.length === 2) {
        let videoList = args[0];
        let deleteIndex = args[1];
        if (typeof deleteIndex === "number") {
          let item = videoList[deleteIndex];
          if (item != null && item instanceof Element) {
            item == null ? void 0 : item.remove();
          }
          videoList.splice(deleteIndex, 1);
        }
      }
    }
  }
  const DouYinNetWorkHook = {
    __ajaxHooker: null,
    get ajaxHooker() {
      if (this.__ajaxHooker == null) {
        this.__ajaxHooker = utils.ajaxHooker();
      }
      return this.__ajaxHooker;
    },
    init() {
    },
    /**
     * 评论区的查看评论api
     */
    commentReply() {
      this.ajaxHooker.hook((request) => {
        let url = CommonUtil.fixUrl(request.url);
        let urlInstance = new URL(url);
        if (urlInstance.pathname.startsWith("/aweme/v1/web/comment/list/reply")) {
          urlInstance.searchParams.delete("whale_cut_token");
          urlInstance.searchParams.append("whale_cut_token", "");
          request.url = urlInstance.toString();
        }
      });
    },
    /**
     * 篡改未登录时的响应结果
     */
    hookUserNoLoginResponse() {
      this.ajaxHooker.hook((request) => {
        request.response = (response) => {
          var _a2, _b, _c;
          let data = utils.toJSON(response.responseText);
          if (typeof data["status_code"] === "number" && data["status_code"] !== 0) {
            data["status_code"] = 0;
            if (typeof data["status_msg"] === "string") {
              data["status_msg"] = "";
            }
          }
          if (typeof ((_a2 = data == null ? void 0 : data["user_collect_count"]) == null ? void 0 : _a2["status_code"]) === "number" && ((_b = data == null ? void 0 : data["user_collect_count"]) == null ? void 0 : _b["status_code"]) !== 0) {
            data["user_collect_count"]["status_code"] = 0;
            if (typeof ((_c = data == null ? void 0 : data["user_collect_count"]) == null ? void 0 : _c["status_msg"]) === "string") {
              data["user_collect_count"]["status_msg"] = "";
            }
          }
          response.responseText = JSON.stringify(data);
        };
      });
    }
  };
  const PanelUISize = {
    /**
     * 一般设置界面的尺寸
     */
    setting: {
      get width() {
        if (window.innerWidth < 550) {
          return "88vw";
        } else if (window.innerWidth < 700) {
          return "550px";
        } else {
          return "700px";
        }
      },
      get height() {
        if (window.innerHeight < 450) {
          return "70vh";
        } else if (window.innerHeight < 550) {
          return "450px";
        } else {
          return "550px";
        }
      }
    },
    /**
     * 信息界面，一般用于提示信息之类
     */
    info: {
      get width() {
        return window.innerWidth < 350 ? "350px" : "350px";
      },
      get height() {
        return window.innerHeight < 250 ? "250px" : "250px";
      }
    }
  };
  const UITextArea = function(text, key, defaultValue, description, changeCallBack, placeholder = "", disabled) {
    let result = {
      text,
      type: "textarea",
      attributes: {},
      props: {},
      description,
      placeholder,
      disabled,
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, value) {
        this.props[PROPS_STORAGE_API].set(key, value);
      }
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
  const DouYinVideoFilter = {
    $key: {
      STORAGE_KEY: "dy-video-filter-rule",
      ENABLE_KEY: "shieldVideo-exec-network-enable"
    },
    $data: {
      /** 已经过滤的信息 */
      isFilterAwemeInfoList: new Utils.Dictionary(),
      /**
       * 网络接口的视频信息字典
       */
      awemeInfoMap: new Utils.Dictionary(),
      /**
       * 当命中过滤规则，如果开启了仅显示被过滤的视频，则修改isFilter值
       */
      get isReverse() {
        return PopsPanel.getValue(
          "shieldVideo-only-show-filtered-video"
        );
      }
    },
    init() {
      if (DouYinRouter.isLive()) {
        PopsPanel.deleteExecMenuOnce(this.$key.ENABLE_KEY);
        return;
      }
      this.execFilter();
      PopsPanel.execMenuOnce("shieldVideo-add-parseVideoInfoButton", () => {
        this.addParseButton();
      });
    },
    /**
     * 执行过滤
     */
    execFilter() {
      const that = this;
      PopsPanel.execMenuOnce(this.$key.ENABLE_KEY, async () => {
        log.info(`执行视频过滤器`);
        let filterBase = new DouYinVideoFilterBase();
        let queryScopeFilterOptionList = (scopeName) => {
          if (!PopsPanel.getValue(that.$key.ENABLE_KEY)) {
            return [];
          }
          let filterOptionList = that.getData();
          if (!filterOptionList.length) {
            return [];
          }
          let scopeNameList = Array.isArray(scopeName) ? scopeName : [scopeName];
          let matchedFilterOptionList = filterOptionList.filter(
            (it) => it.enable && (it.data.scope.includes("all") || Array.from(scopeNameList).findIndex(
              (item) => it.data.scope.includes(
                item
              )
            ) !== -1)
          );
          return matchedFilterOptionList;
        };
        let checkFilterCallBack = (awemeFilterInfoResult) => {
          if (that.$data.isReverse) {
            awemeFilterInfoResult.isFilter = !awemeFilterInfoResult.isFilter;
            if (typeof awemeFilterInfoResult.transformAwemeInfo.awemeId === "string" && awemeFilterInfoResult.matchedFilterOption) {
              let filterOptionList = that.$data.isFilterAwemeInfoList.get(
                awemeFilterInfoResult.transformAwemeInfo.awemeId
              ) || [];
              filterOptionList.push(awemeFilterInfoResult.matchedFilterOption);
              that.$data.isFilterAwemeInfoList.set(
                awemeFilterInfoResult.transformAwemeInfo.awemeId,
                filterOptionList
              );
            }
          }
          if (typeof awemeFilterInfoResult.transformAwemeInfo.awemeId === "string") {
            DouYinVideoFilter.$data.awemeInfoMap.set(
              awemeFilterInfoResult.transformAwemeInfo.awemeId,
              {
                awemeInfo: awemeFilterInfoResult.awemeInfo,
                transformAwemeInfo: awemeFilterInfoResult.transformAwemeInfo
              }
            );
          }
        };
        let xhr_hook_callback_1 = (scopeName, request) => {
          request.response = (response) => {
            let filterOptionList = queryScopeFilterOptionList(scopeName);
            if (!filterOptionList.length) {
              return;
            }
            let data = utils.toJSON(response.responseText);
            let aweme_list = data["aweme_list"];
            if (Array.isArray(aweme_list)) {
              for (let index = 0; index < aweme_list.length; index++) {
                let awemeInfo = aweme_list[index] || {};
                let filterResult = filterBase.checkAwemeInfoIsFilter(
                  filterOptionList,
                  awemeInfo
                );
                checkFilterCallBack(filterResult);
                if (filterResult.isFilter) {
                  filterBase.sendDislikeVideo(
                    filterResult.matchedFilterOption,
                    awemeInfo
                  );
                  filterBase.removeAweme(aweme_list, index--);
                }
              }
              response.responseText = JSON.stringify(data);
            }
          };
        };
        let xhr_hook_callback_2 = (scopeName, request) => {
          request.response = (response) => {
            let filterOptionList = queryScopeFilterOptionList(scopeName);
            if (!filterOptionList.length) {
              return;
            }
            let data = utils.toJSON(response.responseText);
            let aweme_list = data["data"];
            if (Array.isArray(aweme_list)) {
              for (let index = 0; index < aweme_list.length; index++) {
                let awemeItem = aweme_list[index];
                let awemeInfo = awemeItem["aweme"] || {};
                if (typeof (awemeItem == null ? void 0 : awemeItem["cell_room"]) === "object" && (awemeItem == null ? void 0 : awemeItem["cell_room"]) != null) {
                  awemeInfo["cell_room"] = awemeItem == null ? void 0 : awemeItem["cell_room"];
                }
                let filterResult = filterBase.checkAwemeInfoIsFilter(
                  filterOptionList,
                  awemeInfo
                );
                checkFilterCallBack(filterResult);
                if (filterResult.isFilter) {
                  filterBase.sendDislikeVideo(
                    filterResult.matchedFilterOption,
                    awemeInfo
                  );
                  filterBase.removeAweme(aweme_list, index--);
                }
              }
              response.responseText = JSON.stringify(data);
            }
          };
        };
        let xhr_hook_callback_3 = (scopeName, request) => {
          request.response = (response) => {
            let filterOptionList = queryScopeFilterOptionList(scopeName);
            if (!filterOptionList.length) {
              return;
            }
            let data = utils.toJSON(response.responseText);
            let cards = data["cards"];
            if (Array.isArray(cards)) {
              for (let index = 0; index < cards.length; index++) {
                let awemeItem = cards[index];
                let awemeInfo = utils.toJSON((awemeItem == null ? void 0 : awemeItem["aweme"]) || "{}");
                let filterResult = filterBase.checkAwemeInfoIsFilter(
                  filterOptionList,
                  awemeInfo
                );
                checkFilterCallBack(filterResult);
                if (filterResult.isFilter) {
                  filterBase.sendDislikeVideo(
                    filterResult.matchedFilterOption,
                    awemeInfo
                  );
                  filterBase.removeAweme(cards, index--);
                }
              }
              response.responseText = JSON.stringify(data);
            }
          };
        };
        let xhr_hook_callback_4 = (scopeName, request) => {
          request.response = (response) => {
            let filterOptionList = queryScopeFilterOptionList(scopeName);
            if (!filterOptionList.length) {
              return;
            }
            let data = utils.toJSON(response.responseText);
            let aweme_list = data["data"];
            if (Array.isArray(aweme_list)) {
              for (let index = 0; index < aweme_list.length; index++) {
                let awemeItem = aweme_list[index];
                let awemeInfo = awemeItem["aweme_info"] || {};
                let awemeMixInfo = awemeItem == null ? void 0 : awemeItem["aweme_mix_info"];
                if (awemeInfo == null && typeof awemeMixInfo && awemeMixInfo != null) {
                  let awemeMixInfoItems = awemeMixInfo == null ? void 0 : awemeMixInfo["mix_items"];
                  if (Array.isArray(awemeMixInfoItems)) {
                    for (let mixIndex = 0; mixIndex < awemeMixInfoItems.length; mixIndex++) {
                      let mixItem = awemeMixInfoItems[mixIndex];
                      let filterResult = filterBase.checkAwemeInfoIsFilter(
                        filterOptionList,
                        mixItem
                      );
                      checkFilterCallBack(filterResult);
                      if (filterResult.isFilter) {
                        filterBase.sendDislikeVideo(
                          filterResult.matchedFilterOption,
                          mixItem
                        );
                        filterBase.removeAweme(awemeMixInfoItems, mixIndex--);
                      }
                    }
                    if (awemeMixInfoItems.length === 0) {
                      filterBase.removeAweme(aweme_list, index--);
                    }
                  }
                } else {
                  let filterResult = filterBase.checkAwemeInfoIsFilter(
                    filterOptionList,
                    awemeInfo
                  );
                  checkFilterCallBack(filterResult);
                  if (filterResult.isFilter) {
                    filterBase.sendDislikeVideo(
                      filterResult.matchedFilterOption,
                      awemeInfo
                    );
                    filterBase.removeAweme(aweme_list, index--);
                  }
                }
              }
              response.responseText = JSON.stringify(data);
            }
          };
        };
        DouYinNetWorkHook.ajaxHooker.hook((request) => {
          let url = CommonUtil.fixUrl(request.url);
          let urlInstance = new URL(url);
          if (urlInstance.pathname.startsWith("/aweme/v1/web/tab/feed")) {
            xhr_hook_callback_1("xhr-tab", request);
          } else if (urlInstance.pathname.startsWith("/aweme/v1/web/aweme/post/")) {
            xhr_hook_callback_1("xhr-userHome", request);
          } else if (urlInstance.pathname.startsWith("/aweme/v1/web/mix/aweme/")) {
            xhr_hook_callback_1("xhr-mix", request);
          } else if (urlInstance.pathname.startsWith("/aweme/v1/web/aweme/related/")) {
            xhr_hook_callback_1("xhr-related", request);
          } else if (urlInstance.pathname.startsWith("/aweme/v1/web/follow/feed")) {
            xhr_hook_callback_2("xhr-follow", request);
          } else if (urlInstance.pathname.startsWith("/aweme/v1/web/familiar/feed")) {
            xhr_hook_callback_2("xhr-familiar", request);
          } else if (urlInstance.pathname.startsWith("/aweme/v1/web/module/feed")) {
            xhr_hook_callback_3("xhr-module", request);
          } else if (urlInstance.pathname.startsWith(
            "/aweme/v1/web/general/search/single/"
          )) {
            xhr_hook_callback_4("xhr-search", request);
          } else if (urlInstance.pathname.startsWith("/aweme/v1/web/search/item/")) {
            xhr_hook_callback_4("xhr-search", request);
          }
        });
      });
    },
    /**
     * 添加解析按钮
     */
    addParseButton() {
      addStyle(
        /*css*/
        `
			.basePlayerContainer .gm-video-filter-parse-btn{
				margin-left: 4px;
			}
			.basePlayerContainer .gm-video-filter-parse-btn .semi-icon{
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.basePlayerContainer .gm-video-filter-parse-btn .semi-icon svg{
				
			}
			  /* 修复搜索结果单列页面 解析按钮的高度错位 */
  			.searchControl33px .xg-right-grid xg-icon.gm-video-filter-parse-btn span svg{
				transform: translateY(-6px) !important;
			}

		`
      );
      let filterBase = new DouYinVideoFilterBase();
      let awemeInfoClickCallBack = ($basePlayerContainer) => {
        var _a2, _b, _c, _d, _e, _f;
        let that = this;
        let reactFiber = (_a2 = utils.getReactObj($basePlayerContainer)) == null ? void 0 : _a2.reactFiber;
        let awemeInfo = ((_c = (_b = reactFiber == null ? void 0 : reactFiber.return) == null ? void 0 : _b.memoizedProps) == null ? void 0 : _c.awemeInfo) || ((_f = (_e = (_d = reactFiber == null ? void 0 : reactFiber.return) == null ? void 0 : _d.return) == null ? void 0 : _e.memoizedProps) == null ? void 0 : _f.awemeInfo);
        if (awemeInfo == null) {
          Qmsg.error("未获取到awemeInfo信息", { consoleLogContent: true });
          return;
        }
        if (typeof awemeInfo !== "object") {
          Qmsg.error("获取到的awemeInfo信息不是对象", {
            consoleLogContent: true
          });
          return;
        }
        let transformAwemeInfo;
        let transformAwemeInfoWithPage = filterBase.parseAwemeInfoDictData(
          awemeInfo,
          false
        );
        log.info(["视频页面原始awemeInfo：", awemeInfo]);
        log.info([
          "视频页面解析出的transformAwemeInfo：",
          transformAwemeInfoWithPage
        ]);
        if (typeof transformAwemeInfoWithPage.awemeId === "string" && DouYinVideoFilter.$data.awemeInfoMap.has(
          transformAwemeInfoWithPage.awemeId
        )) {
          let awemeInfoMapData = DouYinVideoFilter.$data.awemeInfoMap.get(
            transformAwemeInfoWithPage.awemeId
          );
          transformAwemeInfo = awemeInfoMapData.transformAwemeInfo;
          log.info([`视频网络接口解析出的Info：`, awemeInfoMapData]);
        } else {
          transformAwemeInfo = transformAwemeInfoWithPage;
        }
        let targetFilterOption = that.$data.isFilterAwemeInfoList.get(transformAwemeInfo.awemeId) || [];
        __pops.confirm({
          title: {
            text: "视频awemeInfo",
            position: "center"
          },
          content: {
            text: JSON.stringify(transformAwemeInfo, null, 4).trim(),
            html: false
          },
          drag: true,
          btn: {
            merge: targetFilterOption.length ? true : false,
            position: targetFilterOption.length ? "space-between" : "flex-end",
            ok: {
              enable: true,
              text: "添加过滤规则",
              callback(eventDetails, event) {
                let ruleView = that.getRuleViewInstance();
                ruleView.showEditView(false, that.getTemplateData());
              }
            },
            cancel: {
              enable: true,
              text: "规则管理器",
              callback(eventDetails, event) {
                that.showView();
              }
            },
            other: {
              enable: targetFilterOption.length ? true : false,
              text: `命中的规则（${targetFilterOption.length}）`,
              type: "xiaomi-primary",
              callback(eventDetails, event) {
                that.getRuleViewInstance().showView((data) => {
                  let find = targetFilterOption.find((it) => {
                    return data.uuid === it.uuid;
                  });
                  return Boolean(find);
                });
              }
            }
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true
            }
          },
          width: PanelUISize.setting.width,
          height: PanelUISize.setting.height,
          style: (
            /*css*/
            `
				.pops-confirm-content p{
					white-space: break-spaces;
				}
			`
          )
        });
      };
      let lockFn = new utils.LockFunction(() => {
        $$(
          ".basePlayerContainer xg-right-grid:not(:has(.gm-video-filter-parse-btn))"
        ).forEach(($xgRightGrid) => {
          let $gmFilterParseBtn = domUtils.createElement("xg-icon", {
            className: "gm-video-filter-parse-btn",
            innerHTML: (
              /*html*/
              `
						<div class="xgplayer-icon">
							<span role="img" class="semi-icon semi-icon-default">
								<svg
									viewBox="0 0 32 32"
									width="1em"
									height="1em"
									style="font-size: 32px"
									xmlns="http://www.w3.org/2000/svg"
									focusable="false"
									fill="none">
									<g>
										<path
											stroke="null"
											fill="currentColor"
											d="m9.78829,8.17117l1.77477,0l0,1.73974l-1.77477,0l0,4.34935a1.77477,1.73974 0 0 1 -1.77477,1.73974a1.77477,1.73974 0 0 1 1.77477,1.73974l0,4.34935l1.77477,0l0,1.73974l-1.77477,0c-0.9495,-0.23486 -1.77477,-0.78288 -1.77477,-1.73974l0,-3.47948a1.77477,1.73974 0 0 0 -1.77477,-1.73974l-0.88739,0l0,-1.73974l0.88739,0a1.77477,1.73974 0 0 0 1.77477,-1.73974l0,-3.47948a1.77477,1.73974 0 0 1 1.77477,-1.73974m12.42342,0a1.77477,1.73974 0 0 1 1.77477,1.73974l0,3.47948a1.77477,1.73974 0 0 0 1.77477,1.73974l0.88739,0l0,1.73974l-0.88739,0a1.77477,1.73974 0 0 0 -1.77477,1.73974l0,3.47948a1.77477,1.73974 0 0 1 -1.77477,1.73974l-1.77477,0l0,-1.73974l1.77477,0l0,-4.34935a1.77477,1.73974 0 0 1 1.77477,-1.73974a1.77477,1.73974 0 0 1 -1.77477,-1.73974l0,-4.34935l-1.77477,0l0,-1.73974l1.77477,0m-6.21171,10.43844a0.88739,0.86987 0 0 1 0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,-0.86987a0.88739,0.86987 0 0 1 0.88739,-0.86987m-3.54955,0a0.88739,0.86987 0 0 1 0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,-0.86987a0.88739,0.86987 0 0 1 0.88739,-0.86987m7.0991,0a0.88739,0.86987 0 0 1 0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,0.86987a0.88739,0.86987 0 0 1 -0.88739,-0.86987a0.88739,0.86987 0 0 1 0.88739,-0.86987z"
											clip-rule="evenodd"
											fill-rule="evenodd" />
									</g>
								</svg>
							</span>
						</div>
						<div class="xg-tips">解析信息</div>
					`
            )
          });
          domUtils.on($gmFilterParseBtn, "click", (event) => {
            utils.preventEvent(event);
            let $basePlayerContainer = $xgRightGrid.closest(
              ".basePlayerContainer"
            );
            awemeInfoClickCallBack($basePlayerContainer);
          });
          domUtils.prepend($xgRightGrid, $gmFilterParseBtn);
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        }
      });
    },
    /**
     * 获取规则视图实例
     */
    getRuleViewInstance() {
      let popsPanelContentUtils = __pops.config.panelHandleContentUtils();
      function generateStorageApi(data) {
        return {
          get(key, defaultValue) {
            return data[key] ?? defaultValue;
          },
          set(key, value) {
            data[key] = value;
          }
        };
      }
      let ruleView = new RuleView({
        title: "视频过滤器",
        data: () => {
          return this.getData();
        },
        getAddData: () => {
          return this.getTemplateData();
        },
        getDataItemName: (data) => {
          return data["name"];
        },
        updateData: (data) => {
          return this.updateData(data);
        },
        deleteData: (data) => {
          return this.deleteData(data);
        },
        getData: (data) => {
          let allData = this.getData();
          let findValue = allData.find((item) => item.uuid === data.uuid);
          return findValue ?? data;
        },
        itemControls: {
          enable: {
            enable: true,
            getEnable(data) {
              return data.enable;
            },
            callback: (data, enable) => {
              data.enable = enable;
              this.updateData(data);
            }
          },
          edit: {
            enable: true,
            getView: (data, isEdit) => {
              let $fragment = document.createDocumentFragment();
              if (!isEdit) {
                data = this.getTemplateData();
              }
              let enable_template = UISwitch("启用", "enable", true);
              Reflect.set(
                enable_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $enable = popsPanelContentUtils.createSectionContainerItem_switch(
                enable_template
              );
              let name_template = UIInput(
                "规则名称",
                "name",
                "",
                "",
                void 0,
                "必填"
              );
              Reflect.set(
                name_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $name = popsPanelContentUtils.createSectionContainerItem_input(
                name_template
              );
              let scope_template = UISelectMultiple(
                "作用域",
                "scope",
                [],
                [
                  {
                    text: "所有",
                    value: "all"
                  },
                  {
                    text: "精选",
                    value: "xhr-module"
                  },
                  {
                    text: "推荐",
                    value: "xhr-tab"
                  },
                  {
                    text: "关注",
                    value: "xhr-follow"
                  },
                  {
                    text: "朋友",
                    value: "xhr-familiar"
                  },
                  {
                    text: "搜索",
                    value: "xhr-search"
                  },
                  {
                    text: "用户主页",
                    value: "xhr-userHome"
                  },
                  {
                    text: "混合信息",
                    value: "xhr-mix"
                  },
                  {
                    text: "相关推荐",
                    value: "xhr-related"
                  }
                ],
                void 0,
                "选择需要在xxx上生效的作用域"
              );
              Reflect.set(
                scope_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $scope = popsPanelContentUtils.createSectionContainerItem_select_multiple_new(
                scope_template
              );
              let douYinVideoHandlerInfoKey = [
                "isLive",
                "isAds",
                "isSeriesInfo",
                "isMixInfo",
                "isPicture",
                "awemeId",
                "nickname",
                "uid",
                "desc",
                "textExtra",
                "videoTag",
                "videoTagId",
                "suggestWord",
                "musicAlbum",
                "musicAuthor",
                "musicTitle",
                "authorAccountCertInfo",
                "authorCustomVerify",
                "authorEnterpriseVerifyReason",
                "riskInfoContent",
                "seriesInfoName",
                "seriesInfoContentTypes",
                "mixInfoName",
                "mixInfoDesc",
                "collectCount",
                "commentCount",
                "diggCount",
                "shareCount",
                "duration"
              ];
              let getDynamicProp = (storageData) => {
                let ruleNameDefaultValue = Array.isArray(storageData["ruleName"]) ? storageData["ruleName"] : [storageData["ruleName"]];
                let ruleName_template = UISelectMultiple(
                  "属性名",
                  "ruleName",
                  ruleNameDefaultValue,
                  douYinVideoHandlerInfoKey.map((item) => {
                    return {
                      text: item,
                      value: item
                    };
                  }),
                  void 0,
                  "选择需要的属性名 "
                );
                Reflect.set(
                  ruleName_template.props,
                  PROPS_STORAGE_API,
                  generateStorageApi(storageData)
                );
                let $ruleName2 = popsPanelContentUtils.createSectionContainerItem_select_multiple_new(
                  ruleName_template
                );
                let ruleValue_template = UITextArea(
                  "属性值",
                  "ruleValue",
                  "",
                  "如果是字符串，可正则，注意转义"
                );
                Reflect.set(
                  ruleValue_template.props,
                  PROPS_STORAGE_API,
                  generateStorageApi(storageData)
                );
                let $ruleValue2 = popsPanelContentUtils.createSectionContainerItem_textarea(
                  ruleValue_template
                );
                let remarks_template = UITextArea(
                  "备注",
                  "remarks",
                  "",
                  ""
                );
                Reflect.set(
                  remarks_template.props,
                  PROPS_STORAGE_API,
                  generateStorageApi(storageData)
                );
                let $remarks2 = popsPanelContentUtils.createSectionContainerItem_textarea(
                  remarks_template
                );
                return {
                  $ruleName: $ruleName2,
                  $ruleValue: $ruleValue2,
                  $remarks: $remarks2
                };
              };
              let $dynamicContainer = domUtils.createElement("div", {
                className: "rule-form-ulist-dynamic",
                innerHTML: (
                  /*html*/
                  `
							<div class="rule-form-ulist-dynamic__inner">

							</div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`
                )
              });
              let $dynamicInner = $dynamicContainer.querySelector(
                ".rule-form-ulist-dynamic__inner"
              );
              let $addDynamicButton = $dynamicContainer.querySelector(
                ".pops-panel-button"
              );
              let addDynamicElementItem = (dynamicData = {
                ruleName: [],
                ruleValue: "",
                remarks: ""
              }) => {
                let $dynamicUListContainer = domUtils.createElement("div", {
                  className: "rule-form-ulist-dynamic__inner-container",
                  innerHTML: (
                    /*html*/
                    `
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms">

									</ul>
								`
                  )
                });
                let $dynamicDelete = $dynamicUListContainer.querySelector(
                  ".dynamic-control-delete"
                );
                domUtils.on($dynamicDelete, "click", (event) => {
                  utils.preventEvent(event);
                  $dynamicUListContainer.remove();
                  if (Array.isArray(data.dynamicData)) {
                    let findIndex = data.dynamicData.findIndex(
                      (it) => it == dynamicData
                    );
                    if (findIndex !== -1) {
                      data.dynamicData.splice(findIndex, 1);
                    }
                  }
                });
                let $dynamicUList = $dynamicUListContainer.querySelector(
                  ".dynamic-forms"
                );
                let {
                  $ruleName: $dynamic_ruleName,
                  $ruleValue: $dynamic_ruleValue,
                  $remarks: $dynamic_remarks
                } = getDynamicProp(dynamicData);
                $dynamicUList.appendChild($dynamic_ruleName);
                $dynamicUList.appendChild($dynamic_ruleValue);
                $dynamicUList.appendChild($dynamic_remarks);
                $dynamicInner.appendChild($dynamicUListContainer);
              };
              domUtils.on($addDynamicButton, "click", (event) => {
                utils.preventEvent(event);
                addDynamicElementItem();
              });
              if (Array.isArray(data.dynamicData)) {
                for (let index = 0; index < data.dynamicData.length; index++) {
                  const moreDataItem = data.dynamicData[index];
                  addDynamicElementItem(moreDataItem);
                }
              }
              let { $ruleName, $ruleValue, $remarks } = getDynamicProp(data.data);
              $fragment.append(
                $enable,
                $name,
                $scope,
                // $autoSendDisLikeRequest,
                $ruleName,
                $ruleValue,
                $remarks,
                $dynamicContainer
              );
              return $fragment;
            },
            onsubmit: ($form, isEdit, editData) => {
              let $ulist_li = $form.querySelectorAll(
                ".rule-form-ulist > li"
              );
              let data = this.getTemplateData();
              if (isEdit) {
                data.uuid = editData.uuid;
              }
              $ulist_li.forEach(($li) => {
                let formConfig = Reflect.get($li, "__formConfig__");
                if (!formConfig) {
                  return;
                }
                let attrs = Reflect.get(formConfig, "attributes");
                if (!attrs) {
                  return;
                }
                let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                let value = storageApi.get(key, defaultValue);
                if (Reflect.has(data, key)) {
                  Reflect.set(data, key, value);
                } else if (Reflect.has(data["data"], key)) {
                  Reflect.set(data["data"], key, value);
                } else {
                  log.error(`${key}不在数据中`);
                }
              });
              $form.querySelectorAll(
                ".rule-form-ulist-dynamic__inner-container"
              ).forEach(($inner) => {
                let dynamicData = {};
                $inner.querySelectorAll(".dynamic-forms > li").forEach(($li) => {
                  let formConfig = Reflect.get($li, "__formConfig__");
                  if (!formConfig) {
                    return;
                  }
                  let attrs = Reflect.get(formConfig, "attributes");
                  if (!attrs) {
                    return;
                  }
                  let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                  let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                  let defaultValue = Reflect.get(
                    attrs,
                    ATTRIBUTE_DEFAULT_VALUE
                  );
                  let value = storageApi.get(key, defaultValue);
                  Reflect.set(dynamicData, key, value);
                });
                data.dynamicData.push(dynamicData);
              });
              if (data.name.trim() === "") {
                Qmsg.error("规则名称不能为空");
                return {
                  success: false,
                  data
                };
              }
              if (data.data.scope.length === 0) {
                Qmsg.error("请选择作用域");
                return {
                  success: false,
                  data
                };
              }
              if (data.data.ruleName.length === 0) {
                Qmsg.error("请选择属性名");
                return {
                  success: false,
                  data
                };
              }
              if (data.data.ruleValue.trim() === "") {
                Qmsg.error("属性值不能为空");
                return {
                  success: false,
                  data
                };
              }
              if (isEdit) {
                return {
                  success: this.updateData(data),
                  data
                };
              } else {
                return {
                  success: this.addData(data),
                  data
                };
              }
            },
            style: (
              /*css*/
              `
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
					}
					.rule-form-ulist-dynamic{
						--button-margin-top: 0px;
						--button-margin-right: 0px;
						--button-margin-bottom: 0px;
						--button-margin-left: 0px;
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						padding: 5px 20px;
					}
					.rule-form-ulist-dynamic__inner{
						width: 100%;
					}
					.rule-form-ulist-dynamic__inner-container{
						display: flex;
						align-items: center;
					}
					.dynamic-forms{
						width: 100%;
					}
					.pops-panel-textarea textarea{
						height: 60px;
						min-height: 60px;
						width: 250px;
						max-width: 400px;
						min-width: 250px;
						resize: auto;
						transition: unset;
					}
                    `
            ),
            width: () => {
              return window.innerWidth > 700 ? "700px" : "88vw";
            }
          },
          delete: {
            enable: true,
            deleteCallBack: (data) => {
              return this.deleteData(data);
            }
          }
        },
        bottomControls: {
          filter: {
            enable: true,
            option: [
              {
                name: "过滤-已启用",
                filterCallBack(data) {
                  return data.enable;
                }
              },
              {
                name: "过滤-未启用",
                filterCallBack(data) {
                  return !data.enable;
                }
              }
            ]
          }
        }
      });
      return ruleView;
    },
    /**
     * 显示视图
     */
    showView() {
      let ruleView = this.getRuleViewInstance();
      ruleView.showView();
    },
    /**
     * 获取模板数据
     */
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        enable: true,
        name: "",
        data: {
          scope: [],
          // autoSendDisLikeRequest: false,
          ruleName: "nickname",
          ruleValue: "",
          remarks: ""
        },
        dynamicData: []
      };
    },
    /**
     * 获取数据
     */
    getData() {
      return _GM_getValue(this.$key.STORAGE_KEY, []);
    },
    /**
     * 设置数据
     * @param data
     */
    setData(data) {
      _GM_setValue(this.$key.STORAGE_KEY, data);
    },
    /**
     * 添加数据
     * @param data
     */
    addData(data) {
      let localData = this.getData();
      let findIndex = localData.findIndex((item) => item.uuid == data.uuid);
      if (findIndex === -1) {
        localData.push(data);
        _GM_setValue(this.$key.STORAGE_KEY, localData);
        return true;
      } else {
        return false;
      }
    },
    /**
     * 更新数据
     * @param data
     */
    updateData(data) {
      let localData = this.getData();
      let index = localData.findIndex((item) => item.uuid == data.uuid);
      let updateFlag = false;
      if (index !== -1) {
        updateFlag = true;
        localData[index] = data;
      }
      this.setData(localData);
      return updateFlag;
    },
    /**
     * 删除数据
     * @param data
     */
    deleteData(data) {
      let localData = this.getData();
      let index = localData.findIndex((item) => item.uuid == data.uuid);
      let deleteFlag = false;
      if (index !== -1) {
        deleteFlag = true;
        localData.splice(index, 1);
      }
      this.setData(localData);
      return deleteFlag;
    },
    /**
     * 清空数据
     */
    clearData() {
      _GM_deleteValue(this.$key.STORAGE_KEY);
    },
    /**
     * 导出规则
     */
    exportRule(fileName = "rule.json") {
      let allRule = this.getData();
      let blob = new Blob([JSON.stringify(allRule, null, 4)]);
      let blobUrl = window.URL.createObjectURL(blob);
      let $a = document.createElement("a");
      $a.href = blobUrl;
      $a.download = fileName;
      $a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1500);
    },
    /**
     * 导入规则
     */
    importRule() {
      let $alert = __pops.alert({
        title: {
          text: "请选择导入方式",
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `
          ),
          html: true
        },
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: (
          /*css*/
          `
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `
        )
      });
      let $local = $alert.$shadowRoot.querySelector(
        ".import-mode[data-mode='local']"
      );
      let $network = $alert.$shadowRoot.querySelector(
        ".import-mode[data-mode='network']"
      );
      domUtils.on($local, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json"
        });
        domUtils.on($input, ["propertychange", "input"], (event2) => {
          var _a2;
          if (!((_a2 = $input.files) == null ? void 0 : _a2.length)) {
            return;
          }
          let uploadFile = $input.files[0];
          let fileReader = new FileReader();
          fileReader.onload = () => {
            let data = utils.toJSON(fileReader.result);
            if (!Array.isArray(data)) {
              log.error("不是正确的规则文件", data);
              Qmsg.error("不是正确的规则文件");
              return;
            }
            this.setData(data);
            Qmsg.success(`成功导入 ${data.length}条规则`);
          };
          fileReader.readAsText(uploadFile, "UTF-8");
        });
        $input.click();
      });
      domUtils.on($network, "click", (event) => {
        utils.preventEvent(event);
        $alert.close();
        __pops.prompt({
          title: {
            text: "网络导入",
            position: "center"
          },
          content: {
            text: "",
            placeholder: "url",
            focus: true
          },
          btn: {
            ok: {
              callback: async (eventDetails, event2) => {
                let url = eventDetails.text;
                if (utils.isNull(url)) {
                  Qmsg.error("请填入完整的url");
                  return;
                }
                let response = await httpx.get(url);
                if (!response.status) {
                  return;
                }
                let data = utils.toJSON(response.data.responseText);
                if (!Array.isArray(data)) {
                  log.error("不是正确的规则文件", response, data);
                  Qmsg.error("不是正确的规则文件");
                  return;
                }
                this.setData(data);
                eventDetails.close();
                Qmsg.success(`成功导入 ${data.length}条规则`);
              }
            }
          },
          width: PanelUISize.info.width,
          height: "auto"
        });
      });
    }
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
                  UISelect(
                    "清晰度",
                    "chooseVideoDefinition",
                    -2,
                    [
                      {
                        text: "超清 4K",
                        // ↓gearType
                        value: -2
                      },
                      {
                        text: "超清 2K",
                        value: -1
                      },
                      {
                        text: "高清 1080P",
                        value: 1
                      },
                      {
                        text: "高清 720P",
                        value: 2
                      },
                      {
                        text: "标清 540P",
                        value: 3
                      },
                      {
                        text: "极速",
                        value: 4
                      },
                      {
                        text: "智能",
                        value: 0
                      }
                    ],
                    void 0,
                    "自行选择清晰度"
                  ),
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
                    "放大文字和图标，自动启用【initial-scale=1】和【修复进度条】功能"
                  ),
                  UISwitch(
                    "修复进度条",
                    "repairProgressBar",
                    false,
                    void 0,
                    "修复移动端不能点击拖拽和定位进度的问题（仅移动端使用）"
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
                  ),
                  UISwitch(
                    "监听并关闭【长时间无操作，已暂停播放】弹窗",
                    "dy-video-waitToRemovePauseDialog",
                    true,
                    void 0,
                    "自动监听并检测弹窗"
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
                  ),
                  UISwitch(
                    "移除video的bottom偏移",
                    "dy-video-removeStyle-bottom",
                    false,
                    void 0,
                    ""
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
                    "鼠标移入时自动显示，鼠标移除时自动隐藏"
                  ),
                  UISlider(
                    "延迟自动隐藏的时间",
                    "dy-video-titleInfoAutoHide-delayTime",
                    3e3,
                    0,
                    8e3,
                    void 0,
                    (value) => {
                      return `${value}ms`;
                    },
                    "设置延迟自动隐藏视频标题的时间，单位（ms）",
                    100
                  )
                ]
              },
              {
                type: "forms",
                text: "底部的视频控件",
                forms: [
                  UISwitch(
                    "自动隐藏视频控件",
                    "dy-video-videoControlsAutoHide",
                    false,
                    void 0,
                    "鼠标移入时自动显示，鼠标移除时自动隐藏"
                  ),
                  UISlider(
                    "延迟自动隐藏的时间",
                    "dy-video-videoControlsAutoHide-delayTime",
                    3e3,
                    0,
                    8e3,
                    void 0,
                    (value) => {
                      return `${value}ms`;
                    },
                    "设置延迟自动隐藏视频标题的时间，单位（ms）",
                    100
                  )
                ]
              },
              {
                type: "forms",
                text: "右侧工具栏",
                forms: [
                  UISwitch(
                    "自动隐藏右侧工具栏",
                    "dy-video-rightToolBarAutoHide",
                    false,
                    void 0,
                    "鼠标移入时自动显示，鼠标移除时自动隐藏"
                  ),
                  UISlider(
                    "延迟自动隐藏的时间",
                    "dy-video-rightToolBarAutoHide-delayTime",
                    3e3,
                    0,
                    8e3,
                    void 0,
                    (value) => {
                      return `${value}ms`;
                    },
                    "设置延迟自动隐藏视频标题的时间，单位（ms）",
                    100
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
                    DouYinVideoPlayerShortCut.shortCut
                  ),
                  UIButtonShortCut(
                    "倍速 -> 大",
                    "视频倍速变大",
                    "dy-video-rate-up",
                    void 0,
                    "点击录入快捷键",
                    void 0,
                    DouYinVideoPlayerShortCut.shortCut
                  ),
                  UIButtonShortCut(
                    "沉浸模式",
                    "移除右侧工具栏、底部信息栏等",
                    "dy-video-shortcut-immersionMode",
                    void 0,
                    "点击录入快捷键",
                    void 0,
                    DouYinVideoPlayerShortCut.shortCut
                  ),
                  UIButtonShortCut(
                    "切换静音状态",
                    "切换video标签的muted属性",
                    "dy-video-shortcut-changeVideoMuted",
                    void 0,
                    "点击录入快捷键",
                    void 0,
                    DouYinVideoPlayerShortCut.shortCut
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: "禁用抖音快捷键",
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
          },
          {
            text: "过滤器",
            type: "deepMenu",
            forms: [
              {
                text: '<a href="https://greasyfork.org/zh-CN/scripts/494643-%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "shieldVideo-exec-network-enable",
                    true,
                    void 0,
                    "开启后以下功能才会生效"
                  ),
                  UISwitch(
                    "仅显示被过滤的视频",
                    "shieldVideo-only-show-filtered-video",
                    false,
                    void 0,
                    "只会显示过滤规则命中的视频"
                  ),
                  UISwitch(
                    "新增 {...} 按钮",
                    "shieldVideo-add-parseVideoInfoButton",
                    false,
                    void 0,
                    "在视频的底部的工具栏中显示 {...} 按钮，用于查看视频信息以便于进行添加过滤规则"
                  ),
                  UIButton(
                    "视频过滤规则",
                    "可过滤视频",
                    "自定义",
                    void 0,
                    false,
                    false,
                    "primary",
                    () => {
                      DouYinVideoFilter.showView();
                    }
                  )
                ]
              },
              {
                type: "forms",
                text: "",
                forms: [
                  UIButton(
                    "数据导入",
                    "导入自定义规则数据",
                    "导入",
                    void 0,
                    false,
                    false,
                    "primary",
                    () => {
                      DouYinVideoFilter.importRule();
                    }
                  ),
                  UIButton(
                    "数据导出",
                    "导出自定义规则数据",
                    "导出",
                    void 0,
                    false,
                    false,
                    "primary",
                    () => {
                      DouYinVideoFilter.exportRule(
                        SCRIPT_NAME + "-视频过滤规则.json"
                      );
                    }
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
            text: "布局屏蔽-视频区域内",
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
                    "屏蔽元素，在右侧作者头像上方或者是在右侧区域"
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
            text: "布局屏蔽-评论区域内",
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
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "布局屏蔽",
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
            text: "布局屏蔽-主框架",
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
  const PanelUserConfig = {
    id: "panel-config-user",
    title: "用户",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "显示UID",
            "dy-user-addShowUserUID",
            true,
            void 0,
            "在用户信息区域下方显示当前用户的uid"
          )
        ]
      }
    ]
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
     * 移除已执行的仅执行一次的菜单
     * @param key 键
     */
    deleteExecMenuOnce(key) {
      this.$data.oneSuccessExecMenu.delete(key);
      let flag = false;
      for (const [
        listenerId,
        listenerData
      ] of this.$listener.listenData.entries()) {
        if (listenerData.key === key) {
          flag = true;
          this.removeValueChangeListener(listenerData.id);
          break;
        }
      }
      return flag;
    },
    /**
     * 移除已执行的仅执行一次的菜单
     * @param key 键
     */
    deleteOnceExec(key) {
      this.$data.onceExec.delete(key);
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
     *
     * 它会自动监听值改变（设置中的修改），改变后如果未执行，则执行一次
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
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [
        PanelCommonConfig,
        PanelVideoConfig,
        PanelSearchConfig,
        PanelLiveConfig,
        PanelUserConfig
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
  const $$ = document.querySelectorAll.bind(document);
  new utils.GM_Cookie();
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
      PopsPanel.execMenuOnce("shield-topNav-rightMenu", () => {
        return this.shieldRightMenu();
      });
      PopsPanel.execMenuOnce("shield-topNav-rightMenu-more", () => {
        return this.shieldRightMenuMore();
      });
      PopsPanel.execMenuOnce("shield-topNav-rightMenu-loginAvatar", () => {
        return this.shieldRightMenuLoginAvatar();
      });
      PopsPanel.execMenuOnce("shield-topNav-ai-search", () => {
        return this.shieldAISearch();
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
			/* 兼容手机模式 */
			@media screen and (max-width: 550px){
				.is-mobile-pc{
					--header-height: 0px !important;
				}
				
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
      const iconPath = `d="M12.8013 19.9762C12.3693 20.4436 11.6307 20.4436 11.1986 19.9762L3.11756 11.2346C2.74913 10.8361 2.72958 10.2274 3.07168 9.80599L6.92716 5.05714C7.13438 4.8019 7.44562 4.65369 7.77439 4.65369H16.2256C16.5544 4.65369 16.8656 4.8019 17.0728 5.05714L20.9283 9.80599C21.2704 10.2274 21.2508 10.8361 20.8824 11.2346L12.8013 19.9762ZM4.45944 10.4765L12 18.6334L19.5405 10.4765L16.031 6.15369H7.96901L4.45944 10.4765ZM16.0867 9.09336L16.0954 10.4557C15.3615 10.4557 14.6822 10.2315 14.1281 9.85065V12.5739C14.1281 13.9502 12.964 15.0659 11.5281 15.0659C10.0922 15.0659 8.9281 13.9502 8.9281 12.5739C8.9281 11.1976 10.0922 10.0819 11.5281 10.0819C11.6486 10.0819 11.7672 10.0897 11.8834 10.1049V11.4964C11.7713 11.4625 11.6519 11.4442 11.5281 11.4442C10.8771 11.4442 10.3494 11.95 10.3494 12.5739C10.3494 13.1978 10.8771 13.7036 11.5281 13.7036C12.179 13.7036 12.7067 13.1978 12.7067 12.5739V7.21604H14.1281C14.1281 8.25285 15.005 9.09336 16.0867 9.09336Z"`;
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
            '#douyin-header pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M12.8013 19.9762C12.3693 20.4436 11.6307 20.4436 11.1986 19.9762L3.11756 11.2346C2.74913 10.8361 2.72958 10.2274 3.07168 9.80599L6.92716 5.05714C7.13438 4.8019 7.44562 4.65369 7.77439 4.65369H16.2256C16.5544 4.65369 16.8656 4.8019 17.0728 5.05714L20.9283 9.80599C21.2704 10.2274 21.2508 10.8361 20.8824 11.2346L12.8013 19.9762ZM4.45944 10.4765L12 18.6334L19.5405 10.4765L16.031 6.15369H7.96901L4.45944 10.4765ZM16.0867 9.09336L16.0954 10.4557C15.3615 10.4557 14.6822 10.2315 14.1281 9.85065V12.5739C14.1281 13.9502 12.964 15.0659 11.5281 15.0659C10.0922 15.0659 8.9281 13.9502 8.9281 12.5739C8.9281 11.1976 10.0922 10.0819 11.5281 10.0819C11.6486 10.0819 11.7672 10.0897 11.8834 10.1049V11.4964C11.7713 11.4625 11.6519 11.4442 11.5281 11.4442C10.8771 11.4442 10.3494 11.95 10.3494 12.5739C10.3494 13.1978 10.8771 13.7036 11.5281 13.7036C12.179 13.7036 12.7067 13.1978 12.7067 12.5739V7.21604H14.1281C14.1281 8.25285 15.005 9.09336 16.0867 9.09336Z"])'
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
          'div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[download^="douyin-downloader"])',
          // ios
          'div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[href*="/douyin-pc-web/"])'
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
        // 2024.11.11
        CommonUtil.addBlockCSS(
          '#douyin-right-container #douyin-header-menuCt pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])'
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
    },
    /**
     * 【屏蔽】右侧菜单栏
     */
    shieldRightMenu() {
      log.info(`【屏蔽】右侧菜单栏`);
      return CommonUtil.addBlockCSS(`div[id^="douyin-header-menu"]`);
    },
    /**
     * 【屏蔽】更多
     */
    shieldRightMenuMore() {
      log.info(`【屏蔽】更多`);
      return CommonUtil.addBlockCSS(
        `#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M17 8.75H7V7.25H17V8.75ZM17 12.75H7V11.25H17V12.75ZM7 16.75H17V15.25H7V16.75Z"])`
      );
    },
    /**
     * 【屏蔽】登录头像
     */
    shieldRightMenuLoginAvatar() {
      log.info(`【屏蔽】登录头像`);
      return CommonUtil.addBlockCSS(
        // 未登录
        `#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M6.484 43.177c4.765-5.408 11.743-8.821 19.517-8.821 7.775 0 14.753 3.413 19.517 8.821C40.754 48.587 33.776 52 26.001 52c-7.774 0-14.752-3.413-19.517-8.822zM35.287 21.356a9.286 9.286 0 1 1-18.571 0 9.286 9.286 0 0 1 18.571 0z"])`,
        // 已登录
        `#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has([data-e2e="live-avatar"])`
      );
    },
    /**
     * 【屏蔽】AI搜索
     */
    shieldAISearch() {
      log.info(`【屏蔽】AI搜索`);
      return CommonUtil.addBlockCSS(
        `#douyin-header header div:has(>svg g[clip-path*="aiSearch"])`
      );
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
      if (DouYinRouter.isIndex()) {
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
            name: cookieName,
            firstPartyDomain: ""
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
            if (DouYinRouter.isIndex()) {
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
  const DouYinElement = {
    /**
     * 观察 #slidelist的加载每条视频
     * @param callback
     */
    watchFeedVideoListChange(callback) {
      let $os = null;
      domUtils.ready(() => {
        utils.waitAnyNode([
          "#slidelist",
          // 搜索页面的↓搜索结果列表
          '#search-content-area ul[data-e2e="scroll-list"]'
        ]).then(($ele) => {
          log.info(`启用观察器观察加载的视频`);
          let lockFn = new utils.LockFunction((observer) => {
            $os = $os || this.getOSElement();
            if (!$os) {
              log.error("watchVideDataListChange：获取osElement失败");
              return;
            }
            callback($os, observer);
          }, 50);
          utils.mutationObserver(document, {
            config: {
              childList: true,
              subtree: true
            },
            immediate: true,
            callback: (mutations, observer) => {
              lockFn.run(observer);
            }
          });
        });
      });
    },
    getOSElement() {
      return $("#root div[class*='-os']") || $("#douyin-right-container");
    }
  };
  const DouYinAccount = {
    /**
     * 伪装登录
     */
    disguiseLogin() {
      log.info("伪装登录");
      DouYinNetWorkHook.hookUserNoLoginResponse();
      const WAIT_TIME = 2e4;
      let uid = 114514;
      let info = {
        uid,
        secUid: "",
        shortId: "",
        realName: "",
        nickname: "乌萨奇",
        // 昵称
        desc: "除草证3级",
        // 描述
        gender: 0,
        // 性别
        avatarUrl: "https://www.z4a.net/images/2025/02/28/008DOnfHgy1hxpz9zshl4g30hs0hsnpj.gif",
        // 头像
        avatar300Url: "https://www.z4a.net/images/2025/02/28/008DOnfHgy1hxpz9zshl4g30hs0hsnpj.gif",
        followStatus: 0,
        followerStatus: 0,
        awemeCount: 0,
        // 作品数量
        watchLaterCount: 0,
        // 稍后再看数量
        followingCount: 0,
        // 关注
        followerCount: 0,
        followerCountStr: "",
        mplatformFollowersCount: 9999999,
        // 粉丝数量
        favoritingCount: 0,
        // 我的喜欢的数量
        totalFavorited: 9999999,
        // 获赞
        userCollectCount: {
          logPb: {
            impr_id: ""
          },
          collectCountList: [],
          statusCode: 0,
          extra: {
            fatal_item_ids: [],
            logid: "",
            now: Date.now()
          }
        },
        uniqueId: "",
        customVerify: "",
        generalPermission: {
          is_hit_active_fans_grayed: false
        },
        age: (/* @__PURE__ */ new Date()).getFullYear() - 2019,
        // 年龄
        country: "",
        province: "",
        city: "",
        district: "",
        school: "chiikawa",
        // 学校
        schoolVisible: 1,
        // 控制学校显示
        enterpriseVerifyReason: "",
        secret: 1,
        userCanceled: false,
        roomData: {},
        shareQrcodeUrl: "",
        shareInfo: {
          boolPersist: 1,
          shareDesc: "长按复制此条消息，打开抖音搜索，查看TA的更多作品。",
          shareImageUrl: {
            uri: "",
            url_list: []
          },
          shareQrcodeUrl: {
            uri: "",
            url_list: []
          },
          shareUrl: "",
          shareWeiboDesc: "长按复制此条消息，打开抖音搜索，查看TA的更多作品。"
        },
        coverAndHeadImageInfo: {
          profileCoverList: []
        },
        roomId: 0,
        favoritePermission: 1,
        viewHistoryPermission: true,
        isGovMediaVip: false,
        isStar: false,
        hideLocation: false,
        needSpecialShowFollowerCount: false,
        continuationState: 0,
        im_role_ids: [],
        accountCertInfo: {},
        close_consecutive_chat: 0
      };
      function getUserInfo(element) {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
        let userInfoList = [];
        let reactInstance = utils.getReactObj(element);
        let reactFiber = reactInstance == null ? void 0 : reactInstance.reactFiber;
        reactInstance == null ? void 0 : reactInstance.reactProps;
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
          if (!userInfo.isLogin) {
            userInfo.info = info;
            userInfo.isLogin = true;
            userInfo.statusCode = 0;
          }
        });
      }
      DouYinElement.watchFeedVideoListChange(($os) => {
        setLogin($os);
      });
      utils.waitNode("#root div[class*='-os']", WAIT_TIME).then(() => {
        let lockFn = new utils.LockFunction(() => {
          let $os = DouYinElement.getOSElement();
          if (!$os) {
            return;
          }
          setLogin($os);
        }, 70);
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          immediate: true,
          callback: () => {
            lockFn.run();
          }
        });
      }).catch((err) => {
      });
      if (DouYinRouter.isLive()) {
        log.info("伪装登录：live");
        utils.waitNode(
          `[id^="douyin-header"] div:has(.dy-tip-container)`,
          WAIT_TIME
        ).then(() => {
          let lockFn = new utils.LockFunction(() => {
            setLogin($(`[id^="douyin-header"]`));
          }, 70);
          utils.mutationObserver(document.body, {
            config: {
              subtree: true,
              childList: true
            },
            callback: () => {
              lockFn.run();
            }
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
          let lockFn = new utils.LockFunction(() => {
            setUserInfoBySearch($rootDiv);
          }, 70);
          utils.mutationObserver(document, {
            config: {
              subtree: true,
              childList: true
            },
            callback: () => {
              lockFn.run();
            }
          });
        });
      }
    },
    /**
     * 关闭登录弹窗
     */
    watchLoginDialogToClose() {
      log.info("监听登录弹窗并关闭");
      let result = [
        CommonUtil.addBlockCSS('body > div[id^="login-full-panel-"]')
      ];
      utils.waitNode("body").then(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback() {
            var _a2;
            if (!PopsPanel.getValue("watchLoginDialogToClose")) {
              return;
            }
            let $loginDialog = $(
              'body > div[id^="login-full-panel-"]'
            );
            if ($loginDialog) {
              let $loginDialogCloseBtn = $loginDialog.querySelector(".dy-account-close") || $loginDialog.querySelector(
                'div:has(>svg path[d="M12.7929 22.2426C12.4024 22.6331 12.4024 23.2663 12.7929 23.6568C13.1834 24.0474 13.8166 24.0474 14.2071 23.6568L18.5 19.3639L22.7929 23.6568C23.1834 24.0474 23.8166 24.0474 24.2071 23.6568C24.5976 23.2663 24.5976 22.6331 24.2071 22.2426L19.9142 17.9497L24.1066 13.7573C24.4971 13.3668 24.4971 12.7336 24.1066 12.3431C23.7161 11.9526 23.0829 11.9526 22.6924 12.3431L18.5 16.5355L14.3076 12.3431C13.9171 11.9526 13.2839 11.9526 12.8934 12.3431C12.5029 12.7336 12.5029 13.3668 12.8934 13.7573L17.0858 17.9497L12.7929 22.2426Z"])'
              );
              if ($loginDialogCloseBtn) {
                let reactInstance = utils.getReactObj($loginDialogCloseBtn);
                let onClick = (_a2 = reactInstance == null ? void 0 : reactInstance.reactProps) == null ? void 0 : _a2.onClick;
                if (typeof onClick === "function") {
                  onClick(new Event("click"));
                } else {
                  log.error("监听到登录弹窗但是关闭失败，未获取到onClick函数");
                }
              } else {
                log.error(
                  "未找到登录弹出的关闭按钮，此时键盘被聚焦在登录弹窗上从而导致'快捷键'失效",
                  $loginDialog
                );
              }
            }
          }
        });
      });
      return result;
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
  const MobileCSS = '/* 去除顶部的padding距离 */\r\n#douyin-right-container {\r\n	padding-top: 0;\r\n}\r\n/* 放大放大顶部的综合、视频、用户等header的宽度 */\r\n#search-content-area > div > div:nth-child(1) > div:nth-child(1) {\r\n	width: 100vw;\r\n}\r\n/* 放大顶部的综合、视频、用户等header */\r\n#search-content-area > div > div:nth-child(1) > div:nth-child(1) > div {\r\n	transform: scale(0.8);\r\n}\r\n/* 视频宽度 */\r\nul[data-e2e="scroll-list"] {\r\n	padding: 0px 10px;\r\n}\r\n#sliderVideo {\r\n	width: -webkit-fill-available;\r\n}\r\n/* 距离是顶部导航栏的高度 */\r\n#search-content-area {\r\n	margin-top: 65px;\r\n}\r\n/* 从其它页面进入搜索页面，例如路径是/root/search，会出现返回按钮 */\r\n#douyin-header header{\r\n	flex-direction: row-reverse !important;\r\n}\r\n#douyin-header header > div:nth-child(2) {\r\n	position: unset !important;\r\n}\r\n/* 调整视频列表的宽度 */\r\n@media screen and (max-width: 550px) {\r\n	#sliderVideo {\r\n		width: 100%;\r\n	}\r\n	/* 调整顶部搜索框的宽度 */\r\n	#component-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]) {\r\n		width: -webkit-fill-available;\r\n		padding-right: 0;\r\n	}\r\n}\r\n';
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
  const DouYinSearch = {
    init() {
      DouYinSearchHideElement.init();
      PopsPanel.execMenuOnce("mobileMode", () => {
        return this.mobileMode();
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
      result.push(addStyle(MobileCSS));
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
      return result;
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
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-activity_2644292", () => {
        return this.block_tab_activity_2644292();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator-tab-activity_2643710", () => {
        return this.block_tab_activity_2643710();
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
     * 【屏蔽】精选
     */
    block_tab_home() {
      log.info("【屏蔽】精选");
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
    },
    /**
     * 【屏蔽】美好跨年季
     */
    block_tab_activity_2644292() {
      log.info(`【屏蔽】美好跨年季`);
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has([class^="tab-activity_"] img[alt="抖音美好跨年季"])'
      );
    },
    /**
     * 【屏蔽】2025新春环游记
     */
    block_tab_activity_2643710() {
      log.info(`【屏蔽】2025新春环游记`);
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has([class^="tab-activity_"] img[alt="2025新春环游记"])'
      );
    }
  };
  const blockCSS$8 = '/* 从顶部往下弹出的下载抖音电脑版的drawer提示 */\r\n#douyin-web-download-guide-container\r\n/* 视频信息区域的 及时接收作品更新提醒 下载电脑客户端 */\r\n/* 但是这个CSS又会屏蔽右键菜单 */\r\n/*.basePlayerContainer xg-bar.xg-right-bar + div:not(:has(>svg))*/ ,\r\n/* 下载客户端，使用壁纸 */\r\ndiv:has(+#wallpaper-modal),\r\n/* 下载客户端，实时接收消息通知 */\r\n/* 下载客户端，实时接收好友消息 */\r\ndiv:has(> a[download*="douyin-downloade"]):has(+.popShadowAnimation),\r\ndiv:has(> a[download*="douyin-downloade"]):has(+div>[data-e2e="listDlgTest-container"]),\r\n/* 客户端登录访问更便捷 */\r\ndiv:has(> a[download*="douyin-downloade"]):has(+.userMenuPanelShadowAnimation),\r\n/* 前往电脑客户端，即享下载视频 */\r\n[data-e2e="video-share-container"] div:has(>div>div> a[download*="douyin-downloader"]):first-child,\r\n/* so.douyin.com的广告item */\r\n.card-item:has(.h5-ad-video-card),\r\n.card-item:has([data-is-ad="true"]) {\r\n	display: none !important;\r\n}\r\n';
  const blockCSS$7 = '/* 资料右边的 下载桌面客户端，桌面快捷访问 */\r\ndiv[data-e2e="user-detail"] div:has(> div > a[href*="douyin-pc"]) {\r\n	display: none !important;\r\n}\r\n';
  const DouYinUser = {
    init() {
      addStyle(blockCSS$7);
      domUtils.ready(() => {
        PopsPanel.execMenu("dy-user-addShowUserUID", () => {
          this.addShowUserUID();
        });
      });
    },
    /**
     * 显示UID
     */
    addShowUserUID() {
      ReactUtils.waitReactPropsToSet(
        `[data-e2e="user-detail"] [data-e2e="user-info"]`,
        "reactFiber",
        {
          msg: "显示UID",
          check(reactInstance) {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = reactInstance == null ? void 0 : reactInstance.return) == null ? void 0 : _a2.memoizedProps) == null ? void 0 : _b.userInfo) == null ? void 0 : _c.uid) === "string";
          },
          set(reactInstance, $target) {
            var _a2, _b, _c;
            let uid = (_c = (_b = (_a2 = reactInstance == null ? void 0 : reactInstance.return) == null ? void 0 : _a2.memoizedProps) == null ? void 0 : _b.userInfo) == null ? void 0 : _c.uid;
            domUtils.remove(
              $target.querySelectorAll(".gm-user-uid")
            );
            let $userUID = domUtils.createElement(
              "p",
              {
                className: "gm-user-uid",
                innerHTML: (
                  /*html*/
                  `
							<span>UID：${uid}</span>
						`
                )
              },
              {
                style: "color: var(--color-text-t3);margin-right: 20px;font-size: 12px;line-height: 20px;cursor: pointer;"
              }
            );
            domUtils.on($userUID, "click", (event) => {
              utils.preventEvent(event);
              utils.setClip(uid);
              Qmsg.success("复制成功");
            });
            $target.appendChild($userUID);
          }
        }
      );
    }
  };
  const blockCSS$6 = '/* 单个视频页面右侧的 下载客户端，桌面快捷访问 */\r\ndiv[data-e2e="video-detail"]\r\n	div\r\n	> :has(> div:last-child > a[href*="douyin-pc-web"]) {\r\n	display: none !important;\r\n}\r\n';
  const DouYinVideo = {
    init() {
      addStyle(blockCSS$6);
    }
  };
  const blockCSS$5 = '/* 右侧视频信息里的 下载客户端，桌面快捷访问 */\r\n[data-e2e="note-detail"]\r\n	div:has(> [data-e2e="user-info"])\r\n	> div:has(a[download*="douyin-downloader"]) {\r\n	display: none !important;\r\n}\r\n';
  const DouYinNote = {
    init() {
      addStyle(blockCSS$5);
    }
  };
  const DouYin = {
    init() {
      PopsPanel.onceExec("dy-global-block-css", () => {
        addStyle(blockCSS$8);
      });
      DouYinGestureBackClearHash();
      DouYinHook.init();
      DouYinVideoFilter.init();
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
      PopsPanel.execMenuOnce("dy-common-listenRouterChange", () => {
        this.listenRouterChange();
      });
      if (DouYinRouter.isLive()) {
        log.info("Router: 直播");
        DouYinLive.init();
      } else if (DouYinRouter.isIndex()) {
        DouYinVideoPlayer.init();
        if (DouYinRouter.isSearch()) {
          log.info("Router: 搜索");
          DouYinSearch.init();
        } else if (DouYinRouter.isUser()) {
          log.info(`Router: 用户页面`);
          DouYinUser.init();
        } else if (DouYinRouter.isVideo()) {
          log.info(`Router: 单个视频页面`);
          DouYinVideo.init();
        } else if (DouYinRouter.isChannel()) {
          log.info(`Router: Channel页面`);
        } else if (DouYinRouter.isNote()) {
          log.info(`Router:  笔记页面`);
          DouYinNote.init();
        } else {
          log.warn("子router: " + window.location.href);
        }
      } else {
        log.error("未适配router: " + window.location.href);
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
    },
    /**
     * 监听Router重载
     */
    listenRouterChange() {
      log.info(`监听Router重载`);
      domUtils.on(window, "wb_url_change", (event) => {
        log.info(`Router Change`);
        this.init();
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
      return this.isMDouYin() && (window.location.pathname.startsWith("/share/video/") || window.location.pathname.startsWith("/shipin/"));
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
          let url = DouYinUrlUtils.getCollectionUrl(currentPlaylet["mix_id"]);
          window.open(url, "_blank");
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
            let url = (_e = (_d = reactFiber == null ? void 0 : reactFiber.return) == null ? void 0 : _d.memoizedProps) == null ? void 0 : _e.productionUrl;
            window.open(url, "_blank");
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
  const blockCSS$3 = "/* 顶部 打开看看 登录 */\r\n.adapt-login-header,\r\n/* 视频描述信息区域中的 打开抖音看精彩视频 */\r\n.footer .img-button,\r\n/* 登录页面 */\r\n.login-page ,\r\n/* 底部左下角 打开抖音看精彩视频 */\r\n.footer .bottom-btn-con-new,\r\n/* 合集 打开抖音看精彩视频 */\r\n.container .end-page-info-button {\r\n	display: none !important;\r\n}\r\n";
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
          let url = DouYinUrlUtils.getNoteUrl(awemeId);
          window.open(url, "_blank");
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
          let url = DouYinUrlUtils.getUserHomeUrl(sec_id);
          window.open(url, "_blank");
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
          let url = DouYinUrlUtils.getHashTagUrl(hashtagId);
          window.open(url, "_blank");
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
          let url = DouYinUrlUtils.getMusicUrl(musicId);
          window.open(url, "_blank");
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
          let url = DouYinUrlUtils.getNoteUrl(awemeId);
          window.open(url, "_blank");
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
          let url = DouYinUrlUtils.getVideoUrl(currentList["aweme_id"]);
          window.open(url, "_blank");
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
          let url = DouYinUrlUtils.getVideoUrl(currentList["aweme_id"]);
          window.open(url, "_blank");
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