// ==UserScript==
// @name         抖音优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.11.10
// @author       WhiteSevs
// @description  视频过滤，包括广告、直播或自定义规则，伪装登录、屏蔽登录弹窗、自定义清晰度选择、未登录解锁画质选择、禁止自动播放、自动进入全屏、双击进入全屏、屏蔽弹幕和礼物特效、手机模式、修复进度条拖拽、自定义视频和评论区背景色等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAF19JREFUeF7tnQl8U1X2x38vabqlLWOFrpStUMrWsrdUEARkEREQCoiAghswHQdQEFREGXfhD24MjOiMIqKD4IyICCObFCgt1JaC0ELpmq0L3ZLuyft/bkpL8pI07yUvaVre/Xz6KTT3nnvOud93381dzqXAU+riGzJarMMoGogGqD4A3RXAPQC8eKribhSjBVBJA0UUkAfgGgXq90YRzpZUybL4cAhlj5BAn9DxoOkFAGYB8LdHllCWsweuAfgvDWpvkUaWzrn07QI2ARDkExpPg14FGqNsrVgox58HaFCHAd2HRRrFEa5SOQEQ7B08VEdR7wCYxLUiIb8TPEDjB0qke1WpVv7BtjbWAARJQ9bQwPtsBQv52tID9CqVRrGNjQZsAKACpSG7ATzORqCQxzU8QIHerdQoFlvTplUAuvp19W/Q0gcAeqw1QcLnrugB+qRELJ5dWFl4y5J2FgFoanztYYAa6YqmCTqx9QCdLBGLp1qCwCIAgdLgEwA1jm01Qj5X9gB1SqWRPQCAZmppFoAgafBXNKhFrmySoBtnD+xRaeQLrQIQKA1eCVBbOYsXCri8ByhgrVIj/8BQUaMeIMgnqD9Ni664vCWCgjZ7QETTwxTVitRmAUYABHqHHACln9YVUsf1wFGVRj7ZBIAAafBkCtQvHddu85aJ40bYbbL2bIrdMpwpgKKouUq1bB+ps6UHCJCG/kyBnupMRVyhLj/VZbvUqN/5FWpfa2cTpBTOqdTyuBYAAqSh0RToNLs80U4L2wtAw76DqElY3/6sp6gJKrXsuL4HCJSGvAvgpfZnhf0a2wtA45GTqF6cYL8izpfwuUojf7oZgKsAIp2vQ9vXyARg2NVsTkr1u5aPtJWvmpQ5W1vBSU4bZL6l0sjvpTr7hkaIdXRmGyjgElUyARh+LRvfDBvOWrfClEvotGQTfChRS5knVVdxpNri9Dtr2Y7OqBNhDBUkDX2SBv1PR1fmqvKZAIy4lo09HAAgdmWMegwD1WT3VlNKKM7CfnWxq5rcoheZGCJLvR8CeN7ltXWQgkwARl7LxtccAUhauh4xKXdeHa+U3sQXlQoHacyr2D0EALKN6K7d4cMEIObaTeweNoyTl7P2/4I+r3/RUmZzWT62lBdwktE2malkKkAaco0C+raNAm1fKxOA2Myb+GooNwCIFckPLMaIklq9QadqyjFf2S5m1OWkByCjFbJ9+65MTABGZd7ElzYAcGnHNxj06X/0PizWNiAqP7k9+LOGANAIQNwetHWEjnwBQHS7GLcAQ6uIO4EJsjT8Ua9xhMq8yiQAmGwS4LUGFxfGBCAuMwf/GjrUJq1vHDyGLuu3w48S441budhRIbNJjjMLCQAw1gLuy8rBP4fYBgBpuLPLNmDUmUxcqKvCdPklZ7alTXUJADAAGJ2Vgy/sAMDwVRCvvIzEGteeERQAYAAwJisHn9sJQPOr4LCmFCuLr9v0ZDqrkAAAA4D7s3Kxa8gQu/2f/vFX6LLjAN4szcUBF54VFABgADD2ei4+G2w/AISggp9PomrtVswtSEeJtsFuqBwhQADAgQCQBqu/no+f5iZgxfWLjmg/u2UKADAAGHc9D/8YPNhuxxoJKK/CW7OfxsfnE/mVy4M0AQAGAA9cz8NOvgEgDUXTmLNtO85s/gR0RSUPTcePCAEABgDjb+RhRzTPPYBBWy0+cRKnjv+G+m8OgFa1/ZKxAAADgAk38vB3BwJAWFiReAb/69UV2sRkNJ5OQsOPR0GXts0GEgEABgATb+Rje3Q0P/1rK1I+/y0R2yN6oMpXqs/VeDYFdKECOpkCdHEp6JJS6IpvwdFbzgUAGAA8mJ2PT6McDwBp9CtZ2fiopAgnos1vx9TMWiIA4OhHkbkY5EwAmm376XwK9rhRuBgZbmSuAICjWx8AE4BJ2fn4xEk9ANO8vYnncBxapPcIQ/k9fhAAaAMAJmcX4OOoKCfUbLkKlaoY57NvomrLl0g5ew5FjQ0o0tajSNv0m88kjAEYY4ApNwvw0aC2BaC5gS8Pj8eAOuMQDsE5Z/hsfwgAMACYerMAHwoA8AqZSwtjjgEeulmAbQIALt1mvCpnCkAhtg0axGsdtgoTXgG2eo5DOSYA03IKsXUgewAq8mTo1D2UQ43sswoAsPeVzTmZADycU4j/4wDA5S/2oTpXhpGbVtqsg6WCAgC8u9RUIBOA6TkybBk4kHXNBIABW/chuYsX7n1+IXrPfJB1WWsZBQCseYiHz5kAPJIjw2YbACCqqGktMgb3xJCPNsDLv5Pd2gkAMFxIBQdCPKgfRIFdQJGfoC76f8PDHaiuAa2pBq2uBtQaNBw7zWoenQnAjFwZPhjAvQcwVPWGWIvioX3Q7Zm56DrK9i3mAgDkyFLcCLiNHw23cXH6xmeb2E6jOgKAVSXXscm/FzwoEdI7e0E8JQ7D1i1jq3pLvrsWAFG3UEgemwXJzKkQ9erO2XGkgK0AzMyV4/0BA1jX2TwGMCwwW3EZJEJIQqeueMW/Sf8ckRaKAd3h98AIRC6cBYmXp9U67joARJG94U4a/rFZoDr5WXVQaxlsBWBWrhzv8QQA0a+HxFMPwuO+gS3qVtJa3PDzQF1UOAKmjUPv6RPMmnLXAEBJveHx+ov6xodEwrnhO5eUIbi0DKHqanTT0ejr44OeL3yEvIIClOkaUU1rUa3T4d0ycu+ScWK+Ah7Nk+Pd/vz0AIY1TfS+B3N9AjBd2tlEBx1o1NA0akGjjiI/FBrETT8dfi1A1LMbPLe8Drf72Eeld6+tw8jLWZgAEaYOGgB/f9PT7edHxmNkjfWFFCYAs/PkeMcBADS3+jAPX8z1DUC8TwC8DOIKsaW+Qy0GiWOGwvubv4PyadoW1VoKkasQU6BErMQdU4YPgZdX67fRHY+NxwMa7gDMyVPg7f79ralzZ6B2ex7A3BigNSG9JF76HmGStz/6uXuzrq/DACB5ZDK8Ptti1XC/SjWeysrF8rFjrOY1zHBoVDweUnMHID5fgbf6OR4AQ10Dxe6I8vBBlLsU0eS3hw/I38ylDgGA53sb4P7kPKsNOj31Cp4L7YqIXj2s5mVm2B8Xj0er2gcA5ozzpkS4Vyxp+eksavr3dp5jDjh9P4DXzs2QzJzSaoP2y87HMzX1eDjG9kDO394Xj3mV3AGYm6/Am07uATjTzWMBpwLgvmQ+PN81jappaM/ylAwsj42Bp6eHXWbaCsC8fCX+1o/9hFNr8wB2GeCkwk4DgHzH9znVFETJUlqeeBGrJk/kxXRbAZhfoMSmSAEAXhrBUIjPyQMQ9YuwKPe53T/ghWVLeavXVgAeK1DiDQEA3tpBL8jzg41wXxxvUeizu77Di3/lPlfempa2ArCgQInXBQD4A0Aydwa8Pn7LosBlPx3H6nmz+avwtiTbAVDh9Uj2gdOFMUArTUf5+kB6aA9EfY1PvDQXWZ5yGavGcft+z5YUWwF4vFCFjX0FANj6udV8Hi+ugMeaFWbzRJ1Pw7f33w83NztjVNbWAeVVQFkV0NAIRPYA3CWwFYCFhSq8JgBgf/uTp548/aQXYCZdbgH+cUuN8WP019ZwT9dy8cdn38LvdDpCa+6EaW8WVCemIBPR6MUIy2NuFo25FrCosAgb+rIPnSy8Aiw0n+db6+H+tPkLxxd8/zNef4L7ZeSl+/8HzdbdCKtoCsrMNbEBYHFhEV4VAODqWtP8Pkk/g6z0MVOPU0n4NjbW7AqexVq1OmQl/A19Eu2LwM0GgCdkRXglQugB7CLAbcIY/SqfufT++QzMHH8/e/nZhchZ8gp6lNWwL2MhpwCAqWMcMhNoqfufkXIJH4wby74hswshm78GIbWm73mmkNS6Kn1AxtQ6Ncp1DSjTNqJc14ieEk/0dPPS//7czC0ezDHAk7JivBxhecKKWa8wBjDTnD6//dfsV79d1wtw/2CWJ2+ra5E/bgnCzAzyDKskjb67SomkWtsibzEBWCIrxnoBAPYPKTMnGf0TAJgpXF6Ew33Yv1szlr6CgSmtx9ndVl6A98rybVfWTICIpfJirOsj9AA2O1WycDa8trxhUn5ZRhZWx8awkluRdhV+iza2mndYwQXIG+tYyWstE7MHeEpejJcEAGz3q9cX2yCZZrqit09WiuiI3qwEX0zYhKGnLN/pO7QgBYpGfiJlMAF4Wl6CtX36sNKTZBLGAAxXSY9+B3G08a5art3/leFz0d/Cw9285551C1nJKADA85Ux5r7/L0+9glVjRrNqs8zTyYhYsdls3rdu5eGTikJWcthmYgLwjKIEa3oLPQBb/5nk8716GhRjm/aeHAVGDGS30fL7v7yG2SevmchNq1NjuuISGml+rzhiAvCsogQvCgDY3P7wk6UDjAWeQ0WV6NOT3RGvg8texsNnbpgo8FxRJn7UlNiumIWSTACeU5Tihd7sxirCGMCMU81dx36mRocune9l1XhHn3oJDybnGOW92VCD+wpTWZXnmomp7zJlKVaHCwBw9WNLfnMA/OHhCzc3N1YyTy56EWPTjL/bkyef9AB8J3Lc3DftmJHY5cpSrBIAsN3VTACkmmr8HsA+hs7/lqzFxAu5Rgq8VpqDzyrltitloSQ5ei79wfji9BXKW1gZbn4Dizkx5zduw8gDZ40+4vubCu+GGwjkfS2ACUCwshinwtnPrKUc+hXD1/3DyOZ5yiv4raacdz+Ym7TiCsCJmcsxLrtUAKDZA74ZJ0EF3DkBG5mdjx85xt49FjkF4yV3joc7agDo+c4rcF/6mFHjPS8vQQKHiaCk4XMQUycykjFNfglkcao9JN57AO+9O/QRPZrTkMyb+I7jZcy7Jy3GQsWdTR/rSrPxZaWSV3+S+AM+p/+rDzVjmF7OLsSTUezDxGX3fwS9xMbBHkYXpiK7wf7la14NtiCMdwA8N6yGe8Kd/f3heXIc5nDcmuh5YOeXGLJ1vz64AknkXP+H5fxOAEkWPAqvrZtM3PJOZi5mD2V3bVz66fOIWmF6wHVgfjJKXfSaOKbBvAPAdGyXkjKc6d6LM8xfT3kCj8uaniJHfAvw3rMdbhNNN6Z8kpmHSUPZ3Rl0eNM2TNlnPAAk+oblnuV9woqzA1kW4B0A8ZBBkP6yt6V6j7p6ZPjfCY/CUi+kpaajZv46xHr4oqCxDiMLLrAtajWfJ4lGsvxJs/m+zCrAqCHs9izsm5uAOVeLjOSotPUYnJ9iVQdXycA7AMQw7+93wW1MbIuNp9QNCA4M4GzzD39+FQ+dugZ3SoSxhb8jq6GaswxmAfHwaP1uZXMpLCkVxyaYj9djLv+h4bPwUJ1xSJvk2krMUGTYraezBDgEADKyJiPs5vThlWxMHTncJpu+W7kRsUd+xy+aW9h4y3iGkKtAMuDzvXTCYrFlv57F6hnTWIk9tWsvYrbt14eCM0z71EV43sUvjDbU1yEAUMEB8Ek82BL65dmUDLw4jsNGUEYT/Oulv6HfgTN6AMiikC3JbdI4eO/+xGJRt0I5jnh3QlhYV1biD49fhCnFpmvWm8vysaW8gJUMV8jkEACIYWSETQaEJI1Pv4odcTYeArntpezMG8h4Yj2WXTYddLXmSFFYCCTzZlo8odRc9pnTF7BmCrs4v1eOn0FAwmZ0FptGNBtTmIob7eQrILHdYQC4jR4J7/1f6P3bqaIKR7074Z4/2R8/9+W3P8Hu3Ew07DsINFi+kVs8MBKSeTP0jU918m31YXsoKxfbOFwZ/+ucBEzINB78kQou1akxWZ7uCg82ax0cBgDRwHBS6L30LMyKY7cn0Jr2Pfd+CxJkqvG3c6DLKpp+yisgCugMqkcYyFMvCmO//pAlNQ0zZ0mH0nwZqqb+Gd1FpkGc3i7Lw8c8z1dY84W9nzsUAMmch+H16bt6Haf9fgVbR7PbFWTNqAvJFzEnKQnuTy2wlrXVzwedPo/9U1qPV8QUkLj8NdyXaLphheSbJEtHRr1tYxS7DLGjsEMB0PcC+z+H2+gY/WvgkMQbAV1MI2Xaon9VZRWe27ELydMfBIktzCk1NmJRSgY2TBzPqVjZzXyUzlqFcJ3piWYy90/WANpbcjgA5Hu39/efg/LyxKoLlznH+7Pm0P8cPIyk2loc6x6MigGtnzugi0oQn5WL+d26Iaof+zMKzTokTVqKGIX5J3xNSTa+ruJ3vcKa7Xx87nAAiJLuyxbD84216FGgwMGe4fDwsC8CmCXDz6VdwpnyclRSFKpEFKokboCORoSmBj0oCpEBXRAVxf4uAMN6kl54GzFH08xW3R4Hf82GOAUAUhmJCkoGbq+lXsVCW+MC8IG8DTKyfzqOe9Z9inso88Es2uvTT1zhNABIZT6//4rQ+kZ87eePMA6jdBvajNciabHzEa3Rdbin3+kAkAp9s87ikQuXseURdlOuvLakDcLOLFiNuAzLS9Ht+elvEwBIpdKj/8Y7VbWYO5n9wosNbWd3kbOPJmDUddMJn2bB/9GUYLkDNqvarTgHAU59BRjqFfTdZ9gV1g3DbRyUcbDRpqznpj2L2HzL+xBzGmoRV3jRJtmuVKjNACBOGPb+RvxzzqMIMNhD6ArOSXpwKWKUrU/oTJCl4Y96jSuoa48OWgIAWWRv/fYFe6qwUvbhZUuwK2EF0CPEgbWwF508bjFGlLYehOovxVn4Xl3MXqjr5iwjAMgAtKn3n+kXjUXjJyDivRfazFUX3vwU0gMnENlgvL7PVGhDaQ52OeCMQlsYTgOZVKA09DxAs7+wx0GaksuU1vbsD9Gf5yN80QwH1WIq9ureg9Bs/w7Dyq3HG5guv4QL7WS7N0sHHiU9wNcAuAftY1kDl2wEgvc7hyOrTzBCVj+BsPsdx+WVf30P9e5DGFlk/T1OtnmtLLkOMvDrYOkjKkgasoYG3ncVw8gFSiv/FIZHpJ2R4Qmoo8IROGsiwh+2/yujWlWC63t+hPbAMQyrsLyXwNAXhzSlWF1yA5W6RldxEW96UKCWUF18Q0aLdDjNm1SeBJGLFgkIXd2a1g1kaERBty4QR/eBf+xg9Jw8FmIPy3cM1mlqoEzNQFHaVVQnpsLvphwRNTTIXTxsUka9BjsrZNjfMQZ7Zk3Wiqi++kt1AqUh5HCbPxvHODNPkNgdS/2CscQvGD4i03n4PKoRanfjv4u1NPwbdAig2J1GZtpDDnTsrJRjZ4Uc9bT56V9n+sCBdV1TaeT9mgHYBeApB1Zml+jeEq8WEOwS1ErhKp0W+9VF+sbP7XjvenOWv6fSyNc1AeATOh40bXxQ3lGetkNuhMQb06X36q9f7cvhssXWqjxWXYYj1bfwc3VpuznOZYcLW4rSoAYXaWTpLfeqBfqEnAWNUXwId4aMkZ5+eNDbHz3cPPVnCMlvc68JQ11qaZ0+vJxCW4eDmlIc1JTcVY3e7Asa1OEijewh8v8WAIJ8QuNpmv63MxrPUXWQbdrNQHR384RSW3+7wcnvOn3sYCEBNOgpRRrFESMAbg8GyR8nCU7qwB6g8YOqWt50YMOwByD/CfYOHqqjqPa/xNWB289e0yhKN0CpVv5hFgDyR1ebGLLXYKG8oQfoVSqNYpvhX4wv1739iStNDwsNyI8HKNC7lRrFYqY0swA07RUMPQHQHG534EdRQYojPECfVGkUD5iTbAkAdPXr6t+g1R4GKMetyDjCVkEmwwN0skQsnlpYWXiLEwAk820I9gPUOMGv7dED1CmJmHrUUuObfAuwZGKQNPgrGtSi9uiCu1jnPSqNnLRZq9G1Lb4CmI4LlAavBKitd7FD243pFLBWqZF/wEZh1gDovyL6BPWndaI3QWEWG+FCHqd74KiIptcrqhWsI2tzAqDZnABp8GRA9FcK9FSnmyhUaOoBCucoUFuVatk+ru6xCYA7IIRGU6BJrFWyiY/9ldtctRTym/MAGdX/AIr6RqWWHbfVRXYBYFhpZ9/QCDcd4mjQJMxmJA10pwASG44E/bXzinBbzesQ5Ui0zDKAKgTo6xSQrhXhXHGVPJEP6/4fAayH1yFvEgIAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.douyin.com/*
// @match        *://*.iesdouyin.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.0.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.1/dist/index.umd.js
// @connect      *
// @connect      www.toutiao.com
// @grant        GM_deleteValue
// @grant        GM_download
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils, pops) {
  "use strict";

  var _GM_deleteValue = (() => (typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0))();
  var _GM_download = (() => (typeof GM_download != "undefined" ? GM_download : void 0))();
  var _GM_getResourceText = (() => (typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0))();
  var _GM_getValue = (() => (typeof GM_getValue != "undefined" ? GM_getValue : void 0))();
  var _GM_info = (() => (typeof GM_info != "undefined" ? GM_info : void 0))();
  var _GM_listValues = (() => (typeof GM_listValues != "undefined" ? GM_listValues : void 0))();
  var _GM_registerMenuCommand = (() =>
    typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = (() => (typeof GM_setValue != "undefined" ? GM_setValue : void 0))();
  var _GM_setValues = (() => (typeof GM_setValues != "undefined" ? GM_setValues : void 0))();
  var _GM_unregisterMenuCommand = (() =>
    typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = (() => (typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0))();
  var _unsafeWindow = (() => (typeof unsafeWindow != "undefined" ? unsafeWindow : void 0))();
  var _monkeyWindow = (() => window)();
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const ATTRIBUTE_PLUGIN_SEARCH_CONFIG = "data-plugin-search-config";
  const PROPS_STORAGE_API = "data-storage-api";
  const PanelSizeUtil = {
    get width() {
      return globalThis.innerWidth;
    },
    get height() {
      return globalThis.innerHeight;
    },
  };
  const PanelUISize = {
    setting: {
      get width() {
        if (PanelSizeUtil.width < 550) {
          return "88vw";
        } else if (PanelSizeUtil.width < 700) {
          return "550px";
        } else {
          return "700px";
        }
      },
      get height() {
        if (PanelSizeUtil.height < 450) {
          return "70vh";
        } else if (PanelSizeUtil.height < 550) {
          return "450px";
        } else {
          return "550px";
        }
      },
    },
    settingMiddle: {
      get width() {
        return PanelSizeUtil.width < 350 ? "88vw" : "350px";
      },
    },
    info: {
      get width() {
        return PanelSizeUtil.width < 350 ? "88vw" : "350px";
      },
      get height() {
        return PanelSizeUtil.height < 250 ? "88vh" : "250px";
      },
    },
  };
  class StorageUtils {
    storageKey;
    listenerData;
    constructor(key) {
      if (typeof key === "string") {
        const trimKey = key.trim();
        if (trimKey == "") {
          throw new Error("key参数不能为空字符串");
        }
        this.storageKey = trimKey;
      } else {
        throw new Error("key参数类型错误，必须是字符串");
      }
      this.listenerData = new Utils.Dictionary();
      this.getLocalValue = this.getLocalValue.bind(this);
      this.set = this.set.bind(this);
      this.get = this.get.bind(this);
      this.getAll = this.getAll.bind(this);
      this.delete = this.delete.bind(this);
      this.has = this.has.bind(this);
      this.keys = this.keys.bind(this);
      this.values = this.values.bind(this);
      this.clear = this.clear.bind(this);
      this.addValueChangeListener = this.addValueChangeListener.bind(this);
      this.removeValueChangeListener = this.removeValueChangeListener.bind(this);
      this.triggerValueChangeListener = this.triggerValueChangeListener.bind(this);
    }
    getLocalValue() {
      let localValue = _GM_getValue(this.storageKey);
      if (localValue == null) {
        localValue = {};
        this.setLocalValue(localValue);
      }
      return localValue;
    }
    setLocalValue(value) {
      _GM_setValue(this.storageKey, value);
    }
    set(key, value) {
      const oldValue = this.get(key);
      const localValue = this.getLocalValue();
      Reflect.set(localValue, key, value);
      this.setLocalValue(localValue);
      this.triggerValueChangeListener(key, oldValue, value);
    }
    get(key, defaultValue) {
      const localValue = this.getLocalValue();
      return Reflect.get(localValue, key) ?? defaultValue;
    }
    getAll() {
      const localValue = this.getLocalValue();
      return localValue;
    }
    delete(key) {
      const oldValue = this.get(key);
      const localValue = this.getLocalValue();
      Reflect.deleteProperty(localValue, key);
      this.setLocalValue(localValue);
      this.triggerValueChangeListener(key, oldValue, void 0);
    }
    has(key) {
      const localValue = this.getLocalValue();
      return Reflect.has(localValue, key);
    }
    keys() {
      const localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue);
    }
    values() {
      const localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue).map((key) => Reflect.get(localValue, key));
    }
    clear() {
      _GM_deleteValue(this.storageKey);
    }
    addValueChangeListener(key, callback) {
      const listenerId = Math.random();
      const listenerData = this.listenerData.get(key) || [];
      listenerData.push({
        id: listenerId,
        key,
        callback,
      });
      this.listenerData.set(key, listenerData);
      return listenerId;
    }
    removeValueChangeListener(listenerId) {
      let flag = false;
      for (const [key, listenerData] of this.listenerData.entries()) {
        for (let index = 0; index < listenerData.length; index++) {
          const value = listenerData[index];
          if (
            (typeof listenerId === "string" && value.key === listenerId) ||
            (typeof listenerId === "number" && value.id === listenerId)
          ) {
            listenerData.splice(index, 1);
            index--;
            flag = true;
          }
        }
        this.listenerData.set(key, listenerData);
      }
      return flag;
    }
    async triggerValueChangeListener(...args) {
      const [key, oldValue, newValue] = args;
      if (!this.listenerData.has(key)) {
        return;
      }
      let listenerData = this.listenerData.get(key);
      for (let index = 0; index < listenerData.length; index++) {
        const data = listenerData[index];
        if (typeof data.callback === "function") {
          let value = this.get(key);
          let __newValue;
          let __oldValue;
          if (typeof oldValue !== "undefined" && args.length >= 2) {
            __oldValue = oldValue;
          } else {
            __oldValue = value;
          }
          if (typeof newValue !== "undefined" && args.length > 2) {
            __newValue = newValue;
          } else {
            __newValue = value;
          }
          await data.callback(key, __oldValue, __newValue);
        }
      }
    }
  }
  const PopsPanelStorageApi = new StorageUtils(KEY);
  const CommonUtil = {
    waitRemove(...args) {
      args.forEach((selector) => {
        if (typeof selector !== "string") {
          return;
        }
        DOMUtils.waitNodeList(selector).then((nodeList) => {
          nodeList.forEach(($el) => $el.remove());
        });
      });
    },
    createBlockCSSNode(...args) {
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
      return DOMUtils.createElement("style", {
        type: "text/css",
        innerHTML: `${selectorList.join(",\n")}{display: none !important;}`,
      });
    },
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
    setGMResourceCSS(resourceMapData) {
      const cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : null;
      if (typeof cssText === "string" && cssText) {
        return addStyle(cssText);
      } else {
        return CommonUtil.loadStyleLink(resourceMapData.url);
      }
    },
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      return new Promise((resolve) => {
        DOMUtils.ready(() => {
          document.head.appendChild($link);
          resolve($link);
        });
      });
    },
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
    fixUrl(url) {
      url = url.trim();
      if (url.startsWith("data:")) {
        return url;
      }
      if (url.match(/^http(s|):\/\//i)) {
        return url;
      } else if (url.startsWith("//")) {
        if (url.startsWith("///"));
        else {
          url = window.location.protocol + url;
        }
        return url;
      } else {
        if (!url.startsWith("/")) {
          url += "/";
        }
        url = window.location.origin + url;
        return url;
      }
    },
    fixHttps(url) {
      if (url.startsWith("https://")) {
        return url;
      }
      if (!url.startsWith("http://")) {
        return url;
      }
      try {
        let urlInstance = new URL(url);
        urlInstance.protocol = "https:";
        return urlInstance.toString();
      } catch {
        return url;
      }
    },
    lockScroll(...args) {
      let $hidden = document.createElement("style");
      $hidden.innerHTML = `
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;
      let $elList = [document.documentElement, document.body].concat(...(args || []));
      $elList.forEach(($el) => {
        $el.classList.add("pops-overflow-hidden-important");
      });
      (document.head || document.documentElement).appendChild($hidden);
      return {
        recovery() {
          $elList.forEach(($el) => {
            $el.classList.remove("pops-overflow-hidden-important");
          });
          $hidden.remove();
        },
      };
    },
    async getClipboardText() {
      function readClipboardText(resolve) {
        navigator.clipboard
          .readText()
          .then((clipboardText) => {
            resolve(clipboardText);
          })
          .catch((error) => {
            log.error("读取剪贴板内容失败👉", error);
            resolve("");
          });
      }
      function requestPermissionsWithClipboard(resolve) {
        navigator.permissions
          .query({
            name: "clipboard-read",
          })
          .then((permissionStatus) => {
            readClipboardText(resolve);
          })
          .catch((error) => {
            log.error("申请剪贴板权限失败，尝试直接读取👉", error.message ?? error.name ?? error.stack);
            readClipboardText(resolve);
          });
      }
      function checkClipboardApi() {
        if (typeof navigator?.clipboard?.readText !== "function") {
          return false;
        }
        if (typeof navigator?.permissions?.query !== "function") {
          return false;
        }
        return true;
      }
      return new Promise((resolve) => {
        if (!checkClipboardApi()) {
          resolve("");
          return;
        }
        if (document.hasFocus()) {
          requestPermissionsWithClipboard(resolve);
        } else {
          window.addEventListener(
            "focus",
            () => {
              requestPermissionsWithClipboard(resolve);
            },
            {
              once: true,
            }
          );
        }
      });
    },
    escapeHtml(unsafe) {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/©/g, "&copy;")
        .replace(/®/g, "&reg;")
        .replace(/™/g, "&trade;")
        .replace(/→/g, "&rarr;")
        .replace(/←/g, "&larr;")
        .replace(/↑/g, "&uarr;")
        .replace(/↓/g, "&darr;")
        .replace(/—/g, "&mdash;")
        .replace(/–/g, "&ndash;")
        .replace(/…/g, "&hellip;")
        .replace(/ /g, "&nbsp;")
        .replace(/\r\n/g, "<br>")
        .replace(/\r/g, "<br>")
        .replace(/\n/g, "<br>")
        .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    },
    interval(fn, intervalTime, timeout = 5e3) {
      let timeId;
      let maxTimeout = timeout - intervalTime;
      let intervalTimeCount = intervalTime;
      let loop = async (isTimeout) => {
        let result = await fn(isTimeout);
        if ((typeof result === "boolean" && !result) || isTimeout) {
          utils.workerClearTimeout(timeId);
          return;
        }
        intervalTimeCount += intervalTime;
        if (intervalTimeCount > maxTimeout) {
          loop(true);
          return;
        }
        timeId = utils.workerSetTimeout(() => {
          loop(false);
        }, intervalTime);
      };
      loop(false);
    },
    findParentNode($el, selector, parentSelector) {
      if (parentSelector) {
        let $parent = DOMUtils.closest($el, parentSelector);
        if ($parent) {
          let $target = $parent.querySelector(selector);
          return $target;
        }
      } else {
        if (DOMUtils.matches($el, selector)) {
          return $el;
        }
        let $parent = DOMUtils.closest($el, selector);
        return $parent;
      }
    },
    toStr(data) {
      const undefinedReplacedStr = `__undefined__placeholder__replaced__str__`;
      const dataStr = JSON.stringify(
        data,
        (key, value) => {
          return value === void 0 ? undefinedReplacedStr : value;
        },
        2
      ).replace(new RegExp(`"${undefinedReplacedStr}"`, "g"), "undefined");
      return dataStr;
    },
  };
  const PanelContent = {
    $data: {
      __contentConfig: null,
      get contentConfig() {
        if (this.__contentConfig == null) {
          this.__contentConfig = new utils.Dictionary();
        }
        return this.__contentConfig;
      },
      __defaultBottomContentConfig: [],
    },
    addContentConfig(configList) {
      if (!Array.isArray(configList)) {
        configList = [configList];
      }
      let index = this.$data.contentConfig.keys().length;
      this.$data.contentConfig.set(index, configList);
    },
    getAllContentConfig() {
      return this.$data.contentConfig.values().flat();
    },
    getConfig(index = 0) {
      return this.$data.contentConfig.get(index) ?? [];
    },
    getDefaultBottomContentConfig() {
      if (this.$data.__defaultBottomContentConfig.length) {
        return this.$data.__defaultBottomContentConfig;
      }
      let isDoubleClick = false;
      let timer = void 0;
      const exportToFile = (fileName, fileData) => {
        if (typeof fileData !== "string") {
          fileData = CommonUtil.toStr(fileData);
        }
        const blob = new Blob([fileData]);
        const blobUrl = globalThis.URL.createObjectURL(blob);
        const $anchor = domUtils.createElement("a", {
          href: blobUrl,
          download: fileName,
        });
        $anchor.click();
        utils.workerSetTimeout(() => {
          globalThis.URL.revokeObjectURL(blobUrl);
        }, 500);
      };
      const dbclick_callback = () => {
        const importConfig = (importEndCallBack) => {
          const $alert = __pops__.alert({
            title: {
              text: "请选择导入方式",
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(details, event) {
                  details.close();
                },
              },
            },
            drag: true,
            mask: {
              enable: true,
            },
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: `
          .btn-control{
              display: inline-block;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`,
          });
          const $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
          const $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
          const $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
          const updateConfigToStorage = async (data) => {
            const clearLocalStorage = confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）");
            if (clearLocalStorage) {
              if (typeof _GM_listValues === "function") {
                if (typeof _GM_deleteValue === "function") {
                  const localStorageKeys = _GM_listValues();
                  localStorageKeys.forEach((key) => {
                    _GM_deleteValue(key);
                  });
                  Qmsg.success("已清空脚本存储的配置");
                } else {
                  Qmsg.error("不支持GM_deleteValue函数，无法执行删除脚本配置");
                }
              } else {
                Qmsg.error("不支持GM_listValues函数，无法清空脚本存储的配置");
              }
            }
            if (typeof _GM_setValues === "function") {
              _GM_setValues(data);
            } else {
              const keys = Object.keys(data);
              keys.forEach((key) => {
                const value = data[key];
                _GM_setValue(key, value);
              });
            }
            Qmsg.success("配置导入完毕");
          };
          const importFile = (configText) => {
            return new Promise(async (resolve) => {
              const data = utils.toJSON(configText);
              if (Object.keys(data).length === 0) {
                Qmsg.warning("解析为空配置，不导入");
              } else {
                await updateConfigToStorage(data);
              }
              resolve(true);
            });
          };
          domUtils.on($local, "click", (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            const $input = domUtils.createElement("input", {
              type: "file",
              accept: ".json",
            });
            domUtils.on($input, ["propertychange", "input"], (event2) => {
              if (!$input.files?.length) {
                return;
              }
              const uploadFile = $input.files[0];
              const fileReader = new FileReader();
              fileReader.onload = () => {
                importFile(fileReader.result);
              };
              fileReader.readAsText(uploadFile, "UTF-8");
            });
            $input.click();
          });
          domUtils.on($network, "click", (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            const $prompt = __pops__.prompt({
              title: {
                text: "网络导入",
                position: "center",
              },
              content: {
                text: "",
                placeholder: "请填写URL",
                focus: true,
              },
              btn: {
                close: {
                  enable: true,
                  callback(details, event2) {
                    details.close();
                  },
                },
                ok: {
                  text: "导入",
                  callback: async (details, event2) => {
                    const url = details.text;
                    if (utils.isNull(url)) {
                      Qmsg.error("请填入完整的url");
                      return;
                    }
                    const $loading = Qmsg.loading("正在获取配置...");
                    const response = await httpx.get(url, {
                      allowInterceptConfig: false,
                    });
                    $loading.close();
                    if (!response.status) {
                      log.error(response);
                      Qmsg.error("获取配置失败", { consoleLogContent: true });
                      return;
                    }
                    const flag = await importFile(response.data.responseText);
                    if (!flag) {
                      return;
                    }
                    details.close();
                  },
                },
                cancel: {
                  enable: false,
                },
              },
              drag: true,
              mask: {
                enable: true,
              },
              width: PanelUISize.info.width,
              height: "auto",
            });
            const $promptInput = $prompt.$shadowRoot.querySelector("input");
            const $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
            domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
              const value = domUtils.val($promptInput);
              if (value === "") {
                domUtils.attr($promptOk, "disabled", "true");
              } else {
                domUtils.removeAttr($promptOk, "disabled");
              }
            });
            domUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
              if (keyName === "Enter" && otherCodeList.length === 0) {
                const value = domUtils.val($promptInput);
                if (value !== "") {
                  domUtils.trigger($promptOk, "click");
                }
              }
            });
            domUtils.trigger($promptInput, "input");
          });
          domUtils.on($clipboard, "click", async (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            let clipboardText = await CommonUtil.getClipboardText();
            if (clipboardText.trim() === "") {
              Qmsg.warning("获取到的剪贴板内容为空");
              return;
            }
            const flag = await importFile(clipboardText);
            if (!flag) {
              return;
            }
          });
        };
        const exportConfig = (
          fileName = `${SCRIPT_NAME}_panel-setting-${utils.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`,
          fileData
        ) => {
          const $alert = __pops__.alert({
            title: {
              text: "请选择导出方式",
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(details, event) {
                  details.close();
                },
              },
            },
            drag: true,
            mask: {
              enable: true,
            },
            width: PanelUISize.info.width,
            height: PanelUISize.info.height,
            style: `
          .btn-control{
              display: inline-block;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`,
          });
          const $exportToFile = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']");
          const $exportToClipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");
          domUtils.on($exportToFile, "click", (event) => {
            domUtils.preventEvent(event);
            try {
              exportToFile(fileName, fileData);
              $alert.close();
            } catch (error) {
              Qmsg.error(error.toString(), { consoleLogContent: true });
            }
          });
          domUtils.on($exportToClipboard, "click", async (event) => {
            const result = await utils.copy(fileData);
            if (result) {
              Qmsg.success("复制成功");
              $alert.close();
            } else {
              Qmsg.error("复制失败");
            }
          });
        };
        const $dialog = __pops__.confirm({
          title: {
            text: "配置",
            position: "center",
          },
          content: {
            text: `
            <textarea name="config-value" id="config" readonly></textarea>
          `,
            html: true,
          },
          btn: {
            ok: {
              enable: true,
              type: "primary",
              text: "导入",
              callback(eventDetails, event) {
                importConfig();
              },
            },
            cancel: {
              enable: true,
              text: "导出",
              callback(eventDetails, event) {
                exportConfig(void 0, configDataStr);
              },
            },
          },
          width: PanelSizeUtil.width < 450 ? "90vw" : "450px",
          height: "auto",
          style: `
          .pops-content textarea {
            --textarea-bd-color: #dcdfe6;
            display: inline-block;
            resize: vertical;
            padding: 5px 15px;
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            color: #606266;
            border: 0;
            border-radius: 0;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            width: 100%;
            height: 100%;
            appearance: none;
            resize: none;
          }
          .pops-content textarea{
            height: 500px;
          }
          .pops-content textarea:focus {
            --textarea-bd-color: #3677f0;
          }
          .pops-content textarea:hover {
            --textarea-bd-color: #c0c4cc;
          }
        `,
        });
        const $textarea = $dialog.$shadowRoot.querySelector("textarea");
        const configData = {};
        if (typeof _GM_listValues === "function") {
          const LocalKeys = _GM_listValues();
          LocalKeys.forEach((key) => {
            const value = _GM_getValue(key);
            Reflect.set(configData, key, value);
          });
        } else {
          Qmsg.warning("不支持函数GM_listValues，仅导出菜单配置");
          const panelLocalValue = _GM_getValue(KEY);
          Reflect.set(configData, KEY, panelLocalValue);
        }
        const configDataStr = CommonUtil.toStr(configData);
        $textarea.value = configDataStr;
      };
      const click_callback = () => {
        let supportURL = _GM_info?.script?.supportURL || _GM_info?.script?.namespace;
        if (typeof supportURL === "string" && utils.isNotNull(supportURL)) {
          window.open(supportURL, "_blank");
        }
      };
      return [
        {
          id: "script-version",
          title: `版本：${_GM_info?.script?.version || "未知"}`,
          isBottom: true,
          views: [],
          clickFirstCallback() {
            return false;
          },
          afterRender(config) {
            const anyTouch = new AnyTouch(config.$asideLiElement);
            anyTouch.on("tap", function (event) {
              clearTimeout(timer);
              timer = void 0;
              if (isDoubleClick) {
                isDoubleClick = false;
                dbclick_callback();
              } else {
                timer = setTimeout(() => {
                  isDoubleClick = false;
                  click_callback();
                }, 200);
                isDoubleClick = true;
              }
            });
          },
        },
      ];
    },
    setDefaultBottomContentConfig(config) {
      this.$data.__defaultBottomContentConfig = config;
    },
  };
  const PanelMenu = {
    $data: {
      __menuOption: [
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            Panel.showPanel(PanelContent.getConfig(0));
          },
        },
      ],
      get menuOption() {
        return this.__menuOption;
      },
    },
    init() {
      this.initExtensionsMenu();
    },
    initExtensionsMenu() {
      if (!Panel.isTopWindow()) {
        return;
      }
      GM_Menu.add(this.$data.menuOption);
    },
    addMenuOption(option) {
      if (!Array.isArray(option)) {
        option = [option];
      }
      this.$data.menuOption.push(...option);
    },
    updateMenuOption(option) {
      if (!Array.isArray(option)) {
        option = [option];
      }
      option.forEach((optionItem) => {
        let findIndex = this.$data.menuOption.findIndex((it) => {
          return it.key === optionItem.key;
        });
        if (findIndex !== -1) {
          this.$data.menuOption[findIndex] = optionItem;
        }
      });
    },
    getMenuOption(index = 0) {
      return this.$data.menuOption[index];
    },
    deleteMenuOption(index = 0) {
      this.$data.menuOption.splice(index, 1);
    },
  };
  const Panel = {
    $data: {
      __contentConfigInitDefaultValue: null,
      __onceExecMenuData: null,
      __urlChangeReloadMenuExecOnce: null,
      __onceExecData: null,
      __panelConfig: {},
      $panel: null,
      panelContent: [],
      get contentConfigInitDefaultValue() {
        if (this.__contentConfigInitDefaultValue == null) {
          this.__contentConfigInitDefaultValue = new utils.Dictionary();
        }
        return this.__contentConfigInitDefaultValue;
      },
      contentConfigInitDisabledKeys: [],
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) {
          this.__onceExecMenuData = new utils.Dictionary();
        }
        return this.__onceExecMenuData;
      },
      get urlChangeReloadMenuExecOnce() {
        if (this.__urlChangeReloadMenuExecOnce == null) {
          this.__urlChangeReloadMenuExecOnce = new utils.Dictionary();
        }
        return this.__urlChangeReloadMenuExecOnce;
      },
      get onceExecData() {
        if (this.__onceExecData == null) {
          this.__onceExecData = new utils.Dictionary();
        }
        return this.__onceExecData;
      },
      get scriptName() {
        return SCRIPT_NAME;
      },
      get panelConfig() {
        return this.__panelConfig;
      },
      set panelConfig(value) {
        this.__panelConfig = value;
      },
      key: KEY,
      attributeKeyName: ATTRIBUTE_KEY,
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE,
    },
    init() {
      this.initContentDefaultValue();
      PanelMenu.init();
    },
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
    },
    initContentDefaultValue() {
      const initDefaultValue = (config) => {
        if (!config.attributes) {
          return;
        }
        if (config.type === "button" || config.type === "container" || config.type === "deepMenu") {
          return;
        }
        const attributes = config.attributes;
        let __attr_init__ = attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          let __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) {
            return;
          }
        }
        let menuDefaultConfig = new Map();
        let key = attributes[ATTRIBUTE_KEY];
        if (key != null) {
          const defaultValue = attributes[ATTRIBUTE_DEFAULT_VALUE];
          menuDefaultConfig.set(key, defaultValue);
        }
        let moreMenuDefaultConfig = attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (typeof moreMenuDefaultConfig === "object" && moreMenuDefaultConfig) {
          Object.keys(moreMenuDefaultConfig).forEach((key2) => {
            const defaultValue = moreMenuDefaultConfig[key2];
            menuDefaultConfig.set(key2, defaultValue);
          });
        }
        if (!menuDefaultConfig.size) {
          log.warn(["请先配置键", config]);
          return;
        }
        if (config.type === "switch") {
          let disabled = typeof config.disabled === "function" ? config.disabled() : config.disabled;
          if (typeof disabled === "boolean" && disabled) {
            this.$data.contentConfigInitDisabledKeys.push(...menuDefaultConfig.keys());
          }
        }
        for (const [__key, __defaultValue] of menuDefaultConfig.entries()) {
          this.setDefaultValue(__key, __defaultValue);
        }
      };
      const loopInitDefaultValue = (configList) => {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childViews = configItem.views;
          if (childViews && Array.isArray(childViews)) {
            loopInitDefaultValue(childViews);
          }
        }
      };
      const contentConfigList = [...PanelContent.getAllContentConfig()];
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.views) {
          continue;
        }
        const rightContentConfigList = leftContentConfigItem.views;
        if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
          loopInitDefaultValue(rightContentConfigList);
        }
      }
      this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
    },
    setDefaultValue(key, defaultValue) {
      if (this.$data.contentConfigInitDefaultValue.has(key)) {
        log.warn("请检查该key(已存在): " + key);
      }
      this.$data.contentConfigInitDefaultValue.set(key, defaultValue);
    },
    getDefaultValue(key) {
      return this.$data.contentConfigInitDefaultValue.get(key);
    },
    setValue(key, value) {
      PopsPanelStorageApi.set(key, value);
    },
    getValue(key, defaultValue) {
      const localValue = PopsPanelStorageApi.get(key);
      if (localValue == null) {
        if (this.$data.contentConfigInitDefaultValue.has(key)) {
          return this.$data.contentConfigInitDefaultValue.get(key);
        }
        return defaultValue;
      }
      return localValue;
    },
    deleteValue(key) {
      PopsPanelStorageApi.delete(key);
    },
    hasKey(key) {
      return PopsPanelStorageApi.has(key);
    },
    addValueChangeListener(key, callback) {
      const listenerId = PopsPanelStorageApi.addValueChangeListener(key, (__key, __newValue, __oldValue) => {
        callback(key, __oldValue, __newValue);
      });
      return listenerId;
    },
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    triggerMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.triggerValueChangeListener(key, oldValue, newValue);
    },
    async exec(queryKey, callback, checkExec, once = true) {
      const that = this;
      let queryKeyFn;
      if (typeof queryKey === "string" || Array.isArray(queryKey)) {
        queryKeyFn = () => queryKey;
      } else {
        queryKeyFn = queryKey;
      }
      let isArrayKey = false;
      const queryKeyResult = queryKeyFn();
      let keyList = [];
      if (Array.isArray(queryKeyResult)) {
        isArrayKey = true;
        keyList = queryKeyResult;
      } else {
        keyList.push(queryKeyResult);
      }
      const findNotInDataKey = keyList.find((it) => !this.$data.contentConfigInitDefaultValue.has(it));
      if (findNotInDataKey) {
        log.warn(`${findNotInDataKey} 键不存在`);
        return;
      }
      const storageKey = JSON.stringify(keyList);
      if (once) {
        if (this.$data.onceExecMenuData.has(storageKey)) {
          return this.$data.onceExecMenuData.get(storageKey);
        }
      }
      let storeValueList = [];
      const listenerIdList = [];
      let destoryFnList = [];
      const addStoreValueCallback = (enableValue, args) => {
        let dynamicMenuStoreValueList = [];
        let dynamicDestoryFnList = [];
        let resultValueList = [];
        if (Array.isArray(args)) {
          resultValueList = resultValueList.concat(args);
        } else {
          const handlerArgs = (obj) => {
            if (typeof obj === "object" && obj != null) {
              if (obj instanceof Element) {
                resultValueList.push(obj);
              } else {
                const { $css, destory } = obj;
                if ($css != null) {
                  if (Array.isArray($css)) {
                    resultValueList = resultValueList.concat($css);
                  } else {
                    resultValueList.push($css);
                  }
                }
                if (typeof destory === "function") {
                  resultValueList.push(destory);
                }
              }
            } else {
              resultValueList.push(obj);
            }
          };
          if (args != null && Array.isArray(args)) {
            for (const it of args) {
              handlerArgs(it);
            }
          } else {
            handlerArgs(args);
          }
        }
        for (const it of resultValueList) {
          if (it == null) {
            continue;
          }
          if (it instanceof Element) {
            dynamicMenuStoreValueList.push(it);
            continue;
          }
          if (typeof it === "function") {
            destoryFnList.push(it);
            continue;
          }
        }
        if (enableValue) {
          storeValueList = storeValueList.concat(dynamicMenuStoreValueList);
          destoryFnList = destoryFnList.concat(dynamicDestoryFnList);
        } else {
          execClearStoreStyleElements();
          execDestory();
        }
      };
      const getMenuValue = (key) => {
        const value = this.getValue(key);
        return Boolean(value);
      };
      const execClearStoreStyleElements = () => {
        for (let index = 0; index < storeValueList.length; index++) {
          const $css = storeValueList[index];
          $css?.remove();
          storeValueList.splice(index, 1);
          index--;
        }
      };
      const execDestory = () => {
        for (let index = 0; index < destoryFnList.length; index++) {
          const destoryFnItem = destoryFnList[index];
          destoryFnItem();
          destoryFnList.splice(index, 1);
          index--;
        }
      };
      const checkMenuExec = () => {
        let flag = false;
        if (typeof checkExec === "function") {
          flag = checkExec(keyList);
        } else {
          flag = keyList.every((key) => getMenuValue(key));
        }
        return flag;
      };
      const valueChangeCallback = async (valueOption) => {
        const execFlag = checkMenuExec();
        if (execFlag) {
          const valueList = keyList.map((key) => this.getValue(key));
          const callbackResult = await callback({
            value: isArrayKey ? valueList : valueList[0],
            addStoreValue: (...args) => {
              return addStoreValueCallback(true, args);
            },
          });
          addStoreValueCallback(true, callbackResult);
        } else {
          addStoreValueCallback(false, []);
        }
      };
      once &&
        keyList.forEach((key) => {
          const listenerId = this.addValueChangeListener(key, (key2, newValue, oldValue) => {
            return valueChangeCallback();
          });
          listenerIdList.push(listenerId);
        });
      await valueChangeCallback();
      const result = {
        reload() {
          this.clearStoreStyleElements();
          this.destory();
          valueChangeCallback();
        },
        clear() {
          this.clearStoreStyleElements();
          this.destory();
          this.removeValueChangeListener();
          this.clearOnceExecMenuData();
        },
        clearStoreStyleElements: () => {
          return execClearStoreStyleElements();
        },
        destory() {
          return execDestory();
        },
        removeValueChangeListener: () => {
          listenerIdList.forEach((listenerId) => {
            this.removeValueChangeListener(listenerId);
          });
        },
        clearOnceExecMenuData() {
          once && that.$data.onceExecMenuData.delete(storageKey);
        },
      };
      this.$data.onceExecMenuData.set(storageKey, result);
      return result;
    },
    async execMenu(key, callback, isReverse = false, once = false) {
      return await this.exec(
        key,
        async (option) => {
          return await callback(option);
        },
        (keyList) => {
          const execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            const disabled = Panel.$data.contentConfigInitDisabledKeys.includes(__key__);
            if (disabled) {
              flag = false;
              log.warn(`.execMenu${once ? "Once" : ""} ${__key__} 被禁用`);
            }
            isReverse && (flag = !flag);
            return flag;
          });
          return execFlag;
        },
        once
      );
    },
    async execMenuOnce(key, callback, isReverse = false, listenUrlChange = false) {
      const result = await this.execMenu(key, callback, isReverse, true);
      if (listenUrlChange) {
        if (result) {
          const urlChangeEvent = () => {
            result.reload();
          };
          this.removeUrlChangeWithExecMenuOnceListener(key);
          this.addUrlChangeWithExecMenuOnceListener(key, urlChangeEvent);
        }
      }
      return result;
    },
    deleteExecMenuOnce(key) {
      key = this.transformKey(key);
      this.$data.onceExecMenuData.delete(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
      const flag = PopsPanelStorageApi.removeValueChangeListener(key);
      return flag;
    },
    onceExec(key, callback) {
      key = this.transformKey(key);
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExecData.has(key)) {
        return;
      }
      callback();
      this.$data.onceExecData.set(key, 1);
    },
    deleteOnceExec(key) {
      key = this.transformKey(key);
      this.$data.onceExecData.delete(key);
    },
    addUrlChangeWithExecMenuOnceListener(key, callback) {
      key = this.transformKey(key);
      this.$data.urlChangeReloadMenuExecOnce.set(key, callback);
    },
    removeUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
    },
    hasUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      return this.$data.urlChangeReloadMenuExecOnce.has(key);
    },
    async triggerUrlChangeWithExecMenuOnceEvent(config) {
      const values = this.$data.urlChangeReloadMenuExecOnce.values();
      for (const callback of values) {
        await callback(config);
      }
    },
    showPanel(
      content,
      title = `${SCRIPT_NAME}-设置`,
      preventDefaultContentConfig = false,
      preventRegisterSearchPlugin = false
    ) {
      this.$data.$panel = null;
      this.$data.panelContent = [];
      let checkHasBottomVersionContentConfig =
        content.findIndex((it) => {
          let isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
          return isBottom && it.id === "script-version";
        }) !== -1;
      if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig) {
        content.push(...PanelContent.getDefaultBottomContentConfig());
      }
      let $panel = __pops__.panel({
        ...{
          title: {
            text: title,
            position: "center",
            html: false,
            style: "",
          },
          content,
          btn: {
            close: {
              enable: true,
              callback: (details, event) => {
                details.close();
                this.$data.$panel = null;
              },
            },
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
              toHide: false,
            },
            clickCallBack: (originalRun, config) => {
              originalRun();
              this.$data.$panel = null;
            },
          },
          width: PanelUISize.setting.width,
          height: PanelUISize.setting.height,
          drag: true,
          only: true,
        },
        ...this.$data.panelConfig,
      });
      this.$data.$panel = $panel;
      this.$data.panelContent = content;
      if (!preventRegisterSearchPlugin) {
        this.registerConfigSearch({ $panel, content });
      }
    },
    registerConfigSearch(config) {
      const { $panel, content } = config;
      const asyncQueryProperty = async (target, handler) => {
        if (target == null) {
          return;
        }
        const handleResult = await handler(target);
        if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) {
          return handleResult.data;
        }
        return await asyncQueryProperty(handleResult.data, handler);
      };
      const scrollToElementAndListen = ($el, callback) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                callback?.();
                observer.disconnect();
              }
            });
          },
          {
            root: null,
            threshold: 1,
          }
        );
        observer.observe($el);
        $el.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      const addFlashingClass = ($el) => {
        const flashingClassName = "pops-flashing";
        domUtils.animationend($el, () => {
          $el.classList.remove(flashingClassName);
        });
        $el.classList.add(flashingClassName);
      };
      const dbclick_callback = (evt) => {
        if (evt.type === "dblclick" && isMobileTouch) {
          return;
        }
        domUtils.preventEvent(evt);
        clickElement = null;
        const $alert = __pops__.alert({
          title: {
            text: "搜索配置",
            position: "center",
          },
          content: {
            text: `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="请输入需要搜素的配置名称">
						</div>
						<div class="search-result-wrapper"></div>
					`,
            html: true,
          },
          btn: {
            ok: { enable: false },
          },
          mask: {
            clickEvent: {
              toClose: true,
            },
          },
          width: PanelUISize.settingMiddle.width,
          height: "auto",
          drag: true,
          style: `
					${__pops__.config.cssText.panelCSS}

					.search-wrapper{
						border-bottom: 1px solid rgb(235, 238, 245, 1);
					}
					.pops-content:has(.search-result-wrapper:empty) .search-wrapper{
						border-bottom: 0;
					}
					.search-config-text{
						width: 100%;
						border: 0;
						height: 32px;
						padding: 0px 10px;
						outline: none;
					}
					.search-result-wrapper{
						max-height: 400px;
						overflow: auto;
					}
					.search-result-item{
						cursor: pointer;
						padding: 5px 10px;
						display: flex;
						flex-direction: column;
					}
					.search-result-item:hover{
						background-color: #D8F1FD;
					}
					.search-result-item-path{
						display: flex;
    					align-items: center;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${config.searchDialogStyle ?? ""}
				`,
        });
        $alert.$shadowRoot.querySelector(".search-wrapper");
        const $searchInput = $alert.$shadowRoot.querySelector(".search-config-text");
        const $searchResultWrapper = $alert.$shadowRoot.querySelector(".search-result-wrapper");
        $searchInput.focus();
        const clearSearchResult = () => {
          domUtils.empty($searchResultWrapper);
        };
        const createSearchResultItem = (pathInfo) => {
          const searchPath = utils.queryProperty(pathInfo, (target) => {
            if (target?.next) {
              return {
                isFind: false,
                data: target.next,
              };
            } else {
              return {
                isFind: true,
                data: target,
              };
            }
          });
          const $item = domUtils.createElement("div", {
            className: "search-result-item",
            innerHTML: `
							<div class="search-result-item-path">${searchPath.matchedData?.path}</div>
							<div class="search-result-item-description">${searchPath.matchedData?.description ?? ""}</div>
						`,
          });
          const panelHandlerComponents = __pops__.config.PanelHandlerComponents();
          domUtils.on($item, "click", (clickItemEvent) => {
            const $asideItems2 = $panel.$shadowRoot.querySelectorAll(
              "aside.pops-panel-aside .pops-panel-aside-top-container li"
            );
            const $targetAsideItem = $asideItems2[pathInfo.index];
            if (!$targetAsideItem) {
              Qmsg.error(`左侧项下标${pathInfo.index}不存在`);
              return;
            }
            $targetAsideItem.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            $targetAsideItem.click();
            asyncQueryProperty(pathInfo.next, async (target) => {
              if (target?.next) {
                const $findDeepMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(
                    ($deepMenu) => {
                      const viewConfig = Reflect.get($deepMenu, panelHandlerComponents.$data.nodeStoreConfigKey);
                      return typeof viewConfig === "object" && viewConfig != null && viewConfig.text === target.name;
                    }
                  );
                }, 2500);
                if ($findDeepMenu) {
                  $findDeepMenu.click();
                } else {
                  Qmsg.error("未找到对应的二级菜单");
                  return {
                    isFind: true,
                    data: target,
                  };
                }
                return {
                  isFind: false,
                  data: target.next,
                };
              } else {
                const $findTargetMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(
                    ($menuItem) => {
                      const viewConfig = Reflect.get($menuItem, panelHandlerComponents.$data.nodeStoreConfigKey);
                      return viewConfig === target.matchedData?.formConfig;
                    }
                  );
                }, 2500);
                if ($findTargetMenu) {
                  scrollToElementAndListen($findTargetMenu);
                  const $fold = $findTargetMenu.closest(`.pops-panel-forms-fold[data-fold-enable]`);
                  if ($fold) {
                    const $foldWrapper = $fold.querySelector(".pops-panel-forms-fold-container");
                    $foldWrapper.click();
                    await utils.sleep(500);
                  }
                  scrollToElementAndListen($findTargetMenu, () => {
                    addFlashingClass($findTargetMenu);
                  });
                } else {
                  Qmsg.error("未找到对应的菜单项");
                }
                return {
                  isFind: true,
                  data: target,
                };
              }
            });
          });
          return $item;
        };
        const execSearch = (searchText) => {
          const searchTextRegExp = new RegExp(searchText, "i");
          const searchConfigResult = [];
          const loopContentConfig = (configList, path) => {
            for (let index = 0; index < configList.length; index++) {
              const configItem = configList[index];
              const childViewConfig = configItem.views;
              if (childViewConfig && Array.isArray(childViewConfig)) {
                const deepMenuPath = utils.deepClone(path);
                if (configItem.type === "deepMenu") {
                  const deepNext = utils.queryProperty(deepMenuPath, (target) => {
                    if (target?.next) {
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target,
                      };
                    }
                  });
                  deepNext.next = {
                    name: configItem.text,
                  };
                }
                loopContentConfig(childViewConfig, deepMenuPath);
              } else {
                let text;
                let description;
                if (configItem.type === "own") {
                  const searchConfig = Reflect.get(configItem.attributes || {}, ATTRIBUTE_PLUGIN_SEARCH_CONFIG);
                  if (searchConfig) {
                    if (typeof searchConfig.text === "string") {
                      text = searchConfig.text;
                    }
                    if (typeof searchConfig.desc === "string") {
                      description = searchConfig.desc;
                    }
                  }
                } else {
                  text = configItem.text;
                  description = Reflect.get(configItem, "description");
                }
                const delayMatchedTextList = [text, description];
                const matchedIndex = delayMatchedTextList.findIndex((configText) => {
                  if (typeof configText !== "string") {
                    return;
                  }
                  return configText.match(searchTextRegExp);
                });
                if (matchedIndex !== -1) {
                  const matchedPath = utils.deepClone(path);
                  const deepNext = utils.queryProperty(matchedPath, (target) => {
                    if (target?.next) {
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target,
                      };
                    }
                  });
                  deepNext.next = {
                    name: text,
                    matchedData: {
                      path: "",
                      formConfig: configItem,
                      matchedText: delayMatchedTextList[matchedIndex],
                      description,
                    },
                  };
                  const pathList = [];
                  utils.queryProperty(matchedPath, (target) => {
                    const name = target?.name;
                    if (typeof name === "string" && name.trim() !== "") {
                      pathList.push(name);
                    }
                    if (target?.next) {
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    } else {
                      return {
                        isFind: true,
                        data: target,
                      };
                    }
                  });
                  const pathStr = pathList.join(CommonUtil.escapeHtml(" - "));
                  deepNext.next.matchedData.path = pathStr;
                  searchConfigResult.push(matchedPath);
                }
              }
            }
          };
          for (let index = 0; index < content.length; index++) {
            const leftContentConfigItem = content[index];
            if (!leftContentConfigItem.views) {
              continue;
            }
            if (leftContentConfigItem.isBottom && leftContentConfigItem.id === "script-version") {
              continue;
            }
            const rightContentConfigList = leftContentConfigItem.views;
            if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
              let text = leftContentConfigItem.title;
              if (typeof text === "function") {
                text = text();
              }
              loopContentConfig(rightContentConfigList, {
                index,
                name: text,
              });
            }
          }
          const fragment = document.createDocumentFragment();
          for (const pathInfo of searchConfigResult) {
            let $resultItem = createSearchResultItem(pathInfo);
            fragment.appendChild($resultItem);
          }
          clearSearchResult();
          $searchResultWrapper.append(fragment);
        };
        domUtils.on(
          $searchInput,
          "input",
          utils.debounce((evt2) => {
            domUtils.preventEvent(evt2);
            let searchText = domUtils.val($searchInput).trim();
            if (searchText === "") {
              clearSearchResult();
              return;
            }
            execSearch(searchText);
          }, 200)
        );
      };
      const $asideItems = $panel.$shadowRoot.querySelectorAll(
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`
      );
      $asideItems.forEach(($asideItem) => {
        domUtils.on($asideItem, "dblclick", dbclick_callback);
      });
      let clickElement = null;
      let isDoubleClick = false;
      let timer = void 0;
      let isMobileTouch = false;
      domUtils.on(
        $panel.$shadowRoot,
        "touchend",
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
        (evt, selectorTarget) => {
          isMobileTouch = true;
          clearTimeout(timer);
          timer = void 0;
          if (isDoubleClick && clickElement === selectorTarget) {
            isDoubleClick = false;
            clickElement = null;
            dbclick_callback(evt);
          } else {
            timer = setTimeout(() => {
              isDoubleClick = false;
            }, 200);
            isDoubleClick = true;
            clickElement = selectorTarget;
          }
        },
        {
          capture: true,
        }
      );
      $panel.$shadowRoot.appendChild(
        domUtils.createElement("style", {
          type: "text/css",
          textContent: `
					.pops-flashing{
						animation: double-blink 1.5s ease-in-out;
					}
					@keyframes double-blink {
						 0% {
							background-color: initial;
						}
						25% {
							background-color: yellow;
						}
						50% {
							background-color: initial;
						}
						75% {
							background-color: yellow;
						}
						100% {
							background-color: initial;
						}
					}
				`,
        })
      );
    },
    transformKey(key) {
      if (Array.isArray(key)) {
        const keyArray = key.sort();
        return JSON.stringify(keyArray);
      } else {
        return key;
      }
    },
  };
  const PanelSettingConfig = {
    qmsg_config_position: {
      key: "qmsg-config-position",
      defaultValue: "bottom",
    },
    qmsg_config_maxnums: {
      key: "qmsg-config-maxnums",
      defaultValue: 3,
    },
    qmsg_config_showreverse: {
      key: "qmsg-config-showreverse",
      defaultValue: false,
    },
  };
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops__ = pops;
  const log = new utils.Log(_GM_info, _unsafeWindow.console || _monkeyWindow.console);
  const SCRIPT_NAME = _GM_info?.script?.name || void 0;
  const AnyTouch = pops.config.Utils.AnyTouch();
  const DEBUG = false;
  log.config({
    debug: false,
    logMaxCount: 250,
    autoClearConsole: true,
    tag: true,
  });
  Qmsg.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(qmsgInst) {
      const qmsgType = qmsgInst.setting.type;
      if (qmsgType === "loading") {
        return false;
      }
      const content = qmsgInst.setting.content;
      if (qmsgType === "warning") {
        log.warn(content);
      } else if (qmsgType === "error") {
        log.error(content);
      } else {
        log.info(content);
      }
      return true;
    },
    get position() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_position.key,
        PanelSettingConfig.qmsg_config_position.defaultValue
      );
    },
    get maxNums() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_maxnums.key,
        PanelSettingConfig.qmsg_config_maxnums.defaultValue
      );
    },
    get showReverse() {
      return Panel.getValue(
        PanelSettingConfig.qmsg_config_showreverse.key,
        PanelSettingConfig.qmsg_config_showreverse.defaultValue
      );
    },
    get zIndex() {
      let maxZIndex = Utils.getMaxZIndex();
      let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
      return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
    },
  });
  __pops__.GlobalConfig.setGlobalConfig({
    zIndex: () => {
      const maxZIndex = Utils.getMaxZIndex(void 0, void 0, ($ele) => {
        if ($ele?.classList?.contains("qmsg-shadow-container")) {
          return false;
        }
        if ($ele?.closest("qmsg") && $ele.getRootNode() instanceof ShadowRoot) {
          return false;
        }
      });
      const popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
      return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
    },
    mask: {
      enable: true,
      clickEvent: {
        toClose: false,
        toHide: false,
      },
    },
    drag: true,
  });
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand,
  });
  const httpx = new utils.Httpx({
    xmlHttpRequest: _GM_xmlhttpRequest,
    logDetails: DEBUG,
  });
  httpx.interceptors.request.use((data) => {
    return data;
  });
  httpx.interceptors.response.use(void 0, (data) => {
    log.error("拦截器-请求错误", data);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消", { consoleLogContent: true });
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常", { consoleLogContent: true });
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时", { consoleLogContent: true });
    } else {
      Qmsg.error("其它错误", { consoleLogContent: true });
    }
    return data;
  });
  ({
    Object: {
      defineProperty: _unsafeWindow.Object.defineProperty,
    },
    Function: {
      apply: _unsafeWindow.Function.prototype.apply,
      call: _unsafeWindow.Function.prototype.call,
    },
    Element: {
      appendChild: _unsafeWindow.Element.prototype.appendChild,
    },
    setTimeout: _unsafeWindow.setTimeout,
  });
  const addStyle = domUtils.addStyle.bind(domUtils);
  const $ = DOMUtils.selector.bind(DOMUtils);
  const $$ = DOMUtils.selectorAll.bind(DOMUtils);
  const cookieManager = new utils.GM_Cookie();
  const _SCRIPT_NAME_ = SCRIPT_NAME || "抖音优化";
  const DouYinRouter = {
    isIndex() {
      return window.location.hostname === "www.douyin.com";
    },
    isFollow() {
      return this.isIndex() && window.location.pathname.startsWith("/follow");
    },
    isLive() {
      return window.location.hostname === "live.douyin.com" || this.isFollowLive() || this.isRootLive();
    },
    isFollowLive() {
      return this.isIndex() && window.location.pathname.startsWith("/follow/live/");
    },
    isRootLive() {
      return this.isIndex() && window.location.pathname.startsWith("/root/live/");
    },
    isRecommend() {
      let searchParams = new URLSearchParams(window.location.search);
      return this.isIndex() && window.location.pathname === "/" && searchParams.has("recommend");
    },
    isSearch() {
      return this.isIndex() && (window.location.pathname.startsWith("/search/") || this.isRootSearch());
    },
    isRootSearch() {
      return this.isIndex() && window.location.pathname.startsWith("/root/search/");
    },
    isChannel() {
      return this.isIndex() && window.location.pathname.startsWith("/channel/");
    },
    isDiscover() {
      return this.isIndex() && window.location.pathname.startsWith("/discover/");
    },
    isUser() {
      return this.isIndex() && window.location.pathname.startsWith("/user/");
    },
    isVideo() {
      return this.isIndex() && window.location.pathname.startsWith("/video/");
    },
    isNote() {
      return this.isIndex() && window.location.pathname.startsWith("/note/");
    },
    isJingXuan() {
      return this.isIndex() && window.location.pathname.startsWith("/jingxuan");
    },
    isFriend() {
      return this.isIndex() && window.location.pathname.startsWith("/friend");
    },
  };
  const BlockTopNavigator = {
    init() {
      Panel.exec(
        ["shieldTopNavigator", "search-shieldTopNavigator"],
        () => {
          return this.shieldTopNavigator();
        },
        (keyList) => {
          const [mainKey, childKey] = keyList;
          let mainValue = Panel.getValue(mainKey);
          let childValue = Panel.getValue(childKey);
          if (DouYinRouter.isSearch()) {
            if (childValue == 1) {
              return true;
            } else if (childValue == 0) {
              return false;
            } else;
          }
          return mainValue;
        }
      );
      Panel.execMenuOnce(
        "shieldClientTip",
        () => {
          return this.shieldClientTip();
        },
        void 0,
        true
      );
      Panel.execMenuOnce(
        "shieldFillingBricksAndStones",
        () => {
          return this.shieldFillingBricksAndStones();
        },
        void 0,
        true
      );
      Panel.execMenuOnce(
        "shieldClient",
        () => {
          return this.shieldClient();
        },
        void 0,
        true
      );
      Panel.execMenuOnce(
        "shieldQuickAccess",
        () => {
          return this.shieldQuickAccess();
        },
        void 0,
        true
      );
      Panel.execMenuOnce(
        "shieldNotifitation",
        () => {
          return this.shieldNotifitation();
        },
        void 0,
        true
      );
      Panel.execMenuOnce(
        "shieldPrivateMessage",
        () => {
          return this.shieldPrivateMessage();
        },
        void 0,
        true
      );
      Panel.execMenuOnce(
        "shieldSubmission",
        () => {
          return this.shieldSubmission();
        },
        void 0,
        true
      );
      Panel.execMenuOnce(
        "shieldWallpaper",
        () => {
          return this.shieldWallpaper();
        },
        void 0,
        true
      );
      Panel.execMenuOnce("shieldBottomQuestionButton", () => {
        return this.shieldBottomQuestionButton();
      });
      Panel.execMenuOnce("shield-topNav-rightMenu", () => {
        return this.shieldRightMenu();
      });
      Panel.execMenuOnce("shield-topNav-rightMenu-more", () => {
        return this.shieldRightMenuMore();
      });
      Panel.execMenuOnce("shield-topNav-rightMenu-loginAvatar", () => {
        return this.shieldRightMenuLoginAvatar();
      });
      Panel.execMenuOnce("shield-topNav-ai-search", () => {
        return this.shieldAISearch();
      });
    },
    shieldTopNavigator() {
      log.info("【屏蔽】顶部导航栏");
      let result = [];
      result.push(CommonUtil.addBlockCSS("#douyin-header"));
      result.push(
        addStyle(
          `
			/* 修复视频的高度 */
			#douyin-right-container{
				padding-top: 0px !important;
			}
			/* 兼容手机模式 */
			@media screen and (max-width: 550px)  and (orientation: portrait) {
				.is-mobile-pc{
					--header-height: 0px !important;
				}
			}
		`
        )
      );
      result.push(
        addStyle(
          `
				#slidelist .page-recommend-container{
          --recommend-video-container-margin-height: 6px;
					margin: var(--recommend-video-container-margin-height) 0px !important;
					height: calc(100vh - calc(var(--recommend-video-container-margin-height) * 2)) !important;
					height: calc(100dvh - calc(var(--recommend-video-container-margin-height) * 2)) !important;
				}
			`
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          addStyle(
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
    shieldFillingBricksAndStones() {
      log.info("【屏蔽】充钻石");
      let result = [];
      const iconPath = `d="M12.8013 19.9762C12.3693 20.4436 11.6307 20.4436 11.1986 19.9762L3.11756 11.2346C2.74913 10.8361 2.72958 10.2274 3.07168 9.80599L6.92716 5.05714C7.13438 4.8019 7.44562 4.65369 7.77439 4.65369H16.2256C16.5544 4.65369 16.8656 4.8019 17.0728 5.05714L20.9283 9.80599C21.2704 10.2274 21.2508 10.8361 20.8824 11.2346L12.8013 19.9762ZM4.45944 10.4765L12 18.6334L19.5405 10.4765L16.031 6.15369H7.96901L4.45944 10.4765ZM16.0867 9.09336L16.0954 10.4557C15.3615 10.4557 14.6822 10.2315 14.1281 9.85065V12.5739C14.1281 13.9502 12.964 15.0659 11.5281 15.0659C10.0922 15.0659 8.9281 13.9502 8.9281 12.5739C8.9281 11.1976 10.0922 10.0819 11.5281 10.0819C11.6486 10.0819 11.7672 10.0897 11.8834 10.1049V11.4964C11.7713 11.4625 11.6519 11.4442 11.5281 11.4442C10.8771 11.4442 10.3494 11.95 10.3494 12.5739C10.3494 13.1978 10.8771 13.7036 11.5281 13.7036C12.179 13.7036 12.7067 13.1978 12.7067 12.5739V7.21604H14.1281C14.1281 8.25285 15.005 9.09336 16.0867 9.09336Z"`;
      result.push(
        CommonUtil.addBlockCSS(
          `div[id^="douyin-header-menu"] pace-island > div > div:has(path[${iconPath}])`,
          'body .semi-portal .semi-portal-inner li.semi-dropdown-item:has(a[href*="douyin_recharge"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(CommonUtil.addBlockCSS(`div[id^="douyin-header-menu"] >  div > div > div:has(path[${iconPath}])`));
      } else if (DouYinRouter.isLive()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-header pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M12.8013 19.9762C12.3693 20.4436 11.6307 20.4436 11.1986 19.9762L3.11756 11.2346C2.74913 10.8361 2.72958 10.2274 3.07168 9.80599L6.92716 5.05714C7.13438 4.8019 7.44562 4.65369 7.77439 4.65369H16.2256C16.5544 4.65369 16.8656 4.8019 17.0728 5.05714L20.9283 9.80599C21.2704 10.2274 21.2508 10.8361 20.8824 11.2346L12.8013 19.9762ZM4.45944 10.4765L12 18.6334L19.5405 10.4765L16.031 6.15369H7.96901L4.45944 10.4765ZM16.0867 9.09336L16.0954 10.4557C15.3615 10.4557 14.6822 10.2315 14.1281 9.85065V12.5739C14.1281 13.9502 12.964 15.0659 11.5281 15.0659C10.0922 15.0659 8.9281 13.9502 8.9281 12.5739C8.9281 11.1976 10.0922 10.0819 11.5281 10.0819C11.6486 10.0819 11.7672 10.0897 11.8834 10.1049V11.4964C11.7713 11.4625 11.6519 11.4442 11.5281 11.4442C10.8771 11.4442 10.3494 11.95 10.3494 12.5739C10.3494 13.1978 10.8771 13.7036 11.5281 13.7036C12.179 13.7036 12.7067 13.1978 12.7067 12.5739V7.21604H14.1281C14.1281 8.25285 15.005 9.09336 16.0867 9.09336Z"])'
          )
        );
      }
      return result;
    },
    shieldClient() {
      log.info("【屏蔽】客户端");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container',
          'div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[download^="douyin-downloader"])',
          'div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[href*="/douyin-pc-web/"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            'div:has(> div[data-e2e="something-button"] path[d="M18.404 19.018h-12v-1.5h12v1.5zM11.654 13.457v-8.19h1.5v8.19l3.22-3.22 1.06 1.061-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5 1.06-1.06 3.22 3.22z"])',
            'div[id^="douyin-header-menu"] >  div > div > div:has(a[download^="douyin-downloader"])'
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container:has(a)',
            '#douyin-header pace-island[id^="island"] > div[class] span:has(a[download][href*="client"])',
            '.semi-portal-inner .semi-dropdown-content .semi-dropdown-item:has(a[download][href*="client"])'
          )
        );
      }
      return result;
    },
    shieldQuickAccess() {
      log.info("【屏蔽】快捷访问");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          'header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(.quick-access-nav-icon)',

          'div[id^="douyin-header-menu"] pace-island > div > div:has(.quick-access-nav-icon)'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(CommonUtil.addBlockCSS("div:has(>div>div>.quick-access-nav-icon)"));
        domUtils.waitNode('li.semi-dropdown-item[role="menuitem"]:contains("快捷访问")', 1e4).then(($semi) => {
          $semi?.remove();
        });
      } else if (DouYinRouter.isLive());
      return result;
    },
    shieldNotifitation() {
      log.info("【屏蔽】通知");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-right-container #douyin-header-menuCt pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            'div[id^="douyin-header-menu"] >  div > div > ul:has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])'
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          CommonUtil.addBlockCSS(
            'div[id^="douyin-header-menu"] pace-island[id^="island"] > * > :has(path[d="M11.9998 4.50037C9.02034 4.50037 6.55167 6.81159 6.35561 9.78463L5.94855 15.9572H18.0507L17.6441 9.78506C17.4482 6.81184 14.9795 4.50037 11.9998 4.50037ZM7.85236 9.88334C7.99643 7.6987 9.81045 6.00037 11.9998 6.00037C14.1893 6.00037 16.0034 7.69888 16.1473 9.88365L16.4486 14.4572H7.55073L7.85236 9.88334Z"])'
          )
        );
      }
      return result;
    },
    shieldPrivateMessage() {
      log.info("【屏蔽】私信");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])',
          '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        log.info("搜索-【屏蔽】私信");
        result.push(
          CommonUtil.addBlockCSS(
            'ul:has( div>div[data-e2e="im-entry"] )',
            'div[id^="douyin-header-menu"] >  div > div > ul:has([data-e2e="im-entry"])'
          )
        );
      }
      return result;
    },
    shieldSubmission() {
      log.info("【屏蔽】投稿");
      let result = [];
      const iconPath = `d="M11.3487 4.90125H11.3164H11.3164C10.2479 4.90124 9.40104 4.90124 8.71799 4.95587C8.01959 5.01173 7.42807 5.12824 6.88626 5.39747C5.95866 5.8584 5.20716 6.60991 4.74622 7.53751C4.477 8.07932 4.36048 8.67084 4.30462 9.36923C4.24999 10.0523 4.24999 10.8991 4.25 11.9677V12V12.0322C4.24999 13.1008 4.24999 13.9477 4.30462 14.6307C4.36048 15.3291 4.477 15.9206 4.74622 16.4624C5.20716 17.39 5.95866 18.1415 6.88626 18.6025C7.42807 18.8717 8.01959 18.9882 8.71799 19.0441C9.40104 19.0987 10.2479 19.0987 11.3164 19.0987H11.3487H12.6513H12.6836C13.7521 19.0987 14.599 19.0987 15.282 19.0441C15.9804 18.9882 16.5719 18.8717 17.1137 18.6025C18.0413 18.1415 18.7928 17.39 19.2538 16.4624C19.523 15.9206 19.6395 15.3291 19.6954 14.6307C19.75 13.9477 19.75 13.1008 19.75 12.0322V12V11.9677C19.75 10.8991 19.75 10.0523 19.6954 9.36923C19.6395 8.67084 19.523 8.07932 19.2538 7.53751C18.7928 6.60991 18.0413 5.8584 17.1137 5.39747C16.5719 5.12824 15.9804 5.01173 15.282 4.95587C14.599 4.90124 13.7521 4.90124 12.6836 4.90125H12.6513H11.3487ZM7.55376 6.74077C7.8529 6.59212 8.22981 6.4997 8.83757 6.45109C9.45382 6.4018 10.2407 6.40125 11.3487 6.40125H12.6513C13.7593 6.40125 14.5462 6.4018 15.1624 6.45109C15.7702 6.4997 16.1471 6.59212 16.4462 6.74077C17.0809 7.05614 17.5951 7.57033 17.9105 8.205C18.0591 8.50414 18.1515 8.88105 18.2002 9.48882C18.2494 10.1051 18.25 10.8919 18.25 12C18.25 13.108 18.2494 13.8949 18.2002 14.5111C18.1515 15.1189 18.0591 15.4958 17.9105 15.7949C17.5951 16.4296 17.0809 16.9438 16.4462 17.2592C16.1471 17.4078 15.7702 17.5002 15.1624 17.5488C14.5462 17.5981 13.7593 17.5987 12.6513 17.5987H11.3487C10.2407 17.5987 9.45382 17.5981 8.83757 17.5488C8.22981 17.5002 7.8529 17.4078 7.55376 17.2592C6.91909 16.9438 6.4049 16.4296 6.08952 15.7949C5.94088 15.4958 5.84846 15.1189 5.79985 14.5111C5.75056 13.8949 5.75 13.108 5.75 12C5.75 10.8919 5.75056 10.1051 5.79985 9.48882C5.84846 8.88105 5.94088 8.50414 6.08952 8.205C6.4049 7.57033 6.91909 7.05614 7.55376 6.74077ZM11.25 15V12.75H9V11.25H11.25V8.99997H12.75V11.25H15V12.75H12.75V15H11.25Z"`;
      result.push(
        CommonUtil.addBlockCSS(`div[id^="douyin-header-menu"] pace-island > div > div:has(path[${iconPath}])`)
      );
      if (DouYinRouter.isSearch()) {
        result.push(CommonUtil.addBlockCSS(`div[id^="douyin-header-menu"] >  div > div > div:has(path[${iconPath}])`));
      } else if (DouYinRouter.isLive()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])'
          )
        );
      }
      return result;
    },
    shieldClientTip() {
      log.info("【屏蔽】客户端提示");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          'ul li div[data-e2e="something-button"] + div div:has(>a[download*="douyin-downloader"])',
          '#douyin-header pace-island[id^="island_"] ul > div:has(>a[class][download])',
          '#douyin-header pace-island[id^="island_"] ul[class] li div[data-e2e="im-entry"]  div>div div div:has(a[download][href])',
          '#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container div:has(+ #wallpaper-modal)'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
            'div[id^="douyin-header-menu"] ul li div[data-e2e="im-entry"] div > div > div:has(>a[download*="douyin-downloader"])',
            'div[id^="douyin-header-menu"] ul > div:has(>a[download*="douyin-downloader"])'
          )
        );
      }
      return result;
    },
    shieldWallpaper() {
      log.info("【屏蔽】壁纸");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          'div[id^="douyin-header-menu"] pace-island > div > div:has(span.semi-icon path[d="M9.10335 4.79386C8.86882 4.64984 8.57425 4.64585 8.3359 4.78346C8.09755 4.92108 7.95372 5.17818 7.96117 5.4533L8.05873 9.05336L5.31808 11.3898C5.10864 11.5683 5.01381 11.8473 5.07104 12.1165C5.12826 12.3857 5.32833 12.6019 5.59229 12.6798L9.0463 13.6995L10.4215 17.028C10.5266 17.2824 10.7625 17.4588 11.0362 17.4875C11.3099 17.5163 11.5774 17.3929 11.7331 17.1659L13.3237 14.8471L16.4638 19.3577L17.6949 18.5007L14.6505 14.1276L17.3608 13.9168C17.6352 13.8954 17.8758 13.7255 17.9878 13.4741C18.0997 13.2226 18.065 12.9301 17.8972 12.7119L15.7022 9.85673L16.5462 6.35562C16.6107 6.08806 16.5234 5.80667 16.3189 5.62251C16.1144 5.43835 15.8254 5.38101 15.566 5.47312L12.1723 6.67838L9.10335 4.79386ZM9.56789 9.37117L9.49812 6.79649L11.693 8.14425C11.8862 8.26291 12.1227 8.28777 12.3364 8.21188L14.7635 7.34991L14.16 9.85382C14.1068 10.0743 14.1563 10.3069 14.2945 10.4867L15.8643 12.5286L13.2964 12.7284C13.0704 12.746 12.8644 12.8649 12.7361 13.0519L11.2792 15.1758L10.2957 12.7954C10.2091 12.5858 10.0324 12.4267 9.81491 12.3624L7.34469 11.6332L9.30473 9.96224C9.47729 9.81513 9.57403 9.59784 9.56789 9.37117Z"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          CommonUtil.addBlockCSS(
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
    shieldBottomQuestionButton() {
      log.info("屏蔽底部问题按钮");
      return CommonUtil.addBlockCSS(["#douyin-sidebar", "#douyin-temp-sidebar"]);
    },
    shieldRightMenu() {
      log.info(`【屏蔽】右侧菜单栏`);
      return CommonUtil.addBlockCSS(`div[id^="douyin-header-menu"]`);
    },
    shieldRightMenuMore() {
      log.info(`【屏蔽】更多`);
      return CommonUtil.addBlockCSS(
        `#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M17 8.75H7V7.25H17V8.75ZM17 12.75H7V11.25H17V12.75ZM7 16.75H17V15.25H7V16.75Z"])`
      );
    },
    shieldRightMenuLoginAvatar() {
      log.info(`【屏蔽】登录头像`);
      return CommonUtil.addBlockCSS(
        `#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M6.484 43.177c4.765-5.408 11.743-8.821 19.517-8.821 7.775 0 14.753 3.413 19.517 8.821C40.754 48.587 33.776 52 26.001 52c-7.774 0-14.752-3.413-19.517-8.822zM35.287 21.356a9.286 9.286 0 1 1-18.571 0 9.286 9.286 0 0 1 18.571 0z"])`,
        `#douyin-header header div[id^="douyin-header-menu"] pace-island > div > div:has([data-e2e="live-avatar"])`
      );
    },
    shieldAISearch() {
      log.info(`【屏蔽】AI搜索/抖音`);
      return CommonUtil.addBlockCSS(`#douyin-header header div:has(>svg g[clip-path*="aiSearch"])`);
    },
  };
  const BlockSearchFrame = {
    init() {
      Panel.execMenuOnce("shieldSearch", () => {
        return this.shieldSearch();
      });
      Panel.execMenuOnce("shieldSearchPlaceholder", () => {
        return this.shieldSearchPlaceholder();
      });
      Panel.execMenuOnce("shieldSearchGuessYouWantToSearch", () => {
        return this.shieldSearchGuessYouWantToSearch();
      });
      Panel.execMenuOnce("shieldSearchTiktokHotspot", () => {
        return this.shieldSearchTiktokHotspot();
      });
    },
    shieldSearch() {
      log.info("【屏蔽】搜索框");
      return CommonUtil.addBlockCSS(
        '#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div:has(input[data-e2e="searchbar-input"])'
      );
    },
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
          `
			#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div input[data-e2e="searchbar-input"]::placeholder{
				color: transparent;
			}`
        )
      );
      return result;
    },
    shieldSearchGuessYouWantToSearch() {
      log.info("【屏蔽】搜索-猜你想搜");
      return CommonUtil.addBlockCSS(
        'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-guess-container"])',
        'button[data-e2e="searchbar-button"] + div div[data-e2e="search-guess-container"]'
      );
    },
    shieldSearchTiktokHotspot() {
      log.info("【屏蔽】搜索-抖音热点");
      return CommonUtil.addBlockCSS(
        'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-hot-container"])',
        'button[data-e2e="searchbar-button"] + div div[data-e2e="search-hot-container"]'
      );
    },
  };
  const Hook = {
    $data: {
      document_addEventListener: [],
      element_addEventListener: [],
      setTimeout: [],
      setInterval: [],
      function_apply: [],
      function_call: [],
      defineProperty: [],
    },
    document_addEventListener(handler) {
      this.$data.document_addEventListener.push(handler);
      log.info("document.addEventListener hook新增劫持判断回调");
      if (this.$data.document_addEventListener.length > 1) {
        return;
      }
      const that = this;
      const weakMap = new WeakMap();
      const originAddEventListener = _unsafeWindow.document.addEventListener;
      const originRemoveEventListener = _unsafeWindow.document.removeEventListener;
      _unsafeWindow.document.addEventListener = function (...args) {
        const target = this;
        const eventName = args[0];
        const listener = args[1];
        const options = args[2];
        for (let index = 0; index < that.$data.document_addEventListener.length; index++) {
          const callback = that.$data.document_addEventListener[index];
          const result = Reflect.apply(callback, this, [target, eventName, listener, options]);
          if (typeof result === "function") {
            args[1] = result;
            weakMap.set(listener, {
              eventName,
              fn: result,
              options,
            });
            break;
          } else if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originAddEventListener, this, args);
      };
      _unsafeWindow.document.removeEventListener = function (...args) {
        const eventName = args[0];
        const listener = args[1];
        const options = args[2];
        if (weakMap.has(listener)) {
          const { eventName: __eventName__, fn: __listener__, options: __options__ } = weakMap.get(listener);
          let flag = false;
          if (eventName === __eventName__) {
            if (typeof options === "boolean" && options === __options__) {
              flag = true;
            } else if (
              typeof options === "object" &&
              typeof __options__ === "object" &&
              options["capture"] === __options__["capture"]
            ) {
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
    element_addEventListener(handler) {
      this.$data.element_addEventListener.push(handler);
      log.info("Element.prototype.addEventListener hook新增劫持判断回调");
      if (this.$data.element_addEventListener.length > 1) {
        return;
      }
      const that = this;
      const weakMap = new WeakMap();
      const originAddEventListener = _unsafeWindow.Element.prototype.addEventListener;
      const originRemoveEventListener = _unsafeWindow.Element.prototype.removeEventListener;
      _unsafeWindow.Element.prototype.addEventListener = function (...args) {
        const target = this;
        const eventName = args[0];
        const listener = args[1];
        const options = args[2];
        for (let index = 0; index < that.$data.element_addEventListener.length; index++) {
          const callback = that.$data.element_addEventListener[index];
          const result = Reflect.apply(callback, this, [target, eventName, listener, options]);
          if (typeof result === "function") {
            args[1] = result;
            weakMap.set(listener, {
              eventName,
              fn: result,
              options,
            });
            break;
          } else if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originAddEventListener, this, args);
      };
      _unsafeWindow.Element.prototype.removeEventListener = function (...args) {
        const eventName = args[0];
        const listener = args[1];
        const options = args[2];
        if (weakMap.has(listener)) {
          const { eventName: __eventName__, fn: __listener__, options: __options__ } = weakMap.get(listener);
          let flag = false;
          if (__eventName__ === eventName) {
            if (typeof options === "boolean" && options === __options__) {
              flag = true;
            } else if (
              typeof options === "object" &&
              typeof __options__ === "object" &&
              options["capture"] === __options__["capture"]
            ) {
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
    setTimeout(handler) {
      this.$data.setTimeout.push(handler);
      log.info("window.setTimeout hook新增劫持");
      if (this.$data.setTimeout.length > 1) {
        return;
      }
      const that = this;
      const originSetTimeout = _unsafeWindow.setTimeout;
      _unsafeWindow.setTimeout = function (...args) {
        const fn = args[0];
        const timeout = args[1];
        for (let index = 0; index < that.$data.setTimeout.length; index++) {
          const item = that.$data.setTimeout[index];
          const result = item(fn, timeout);
          if (typeof result === "boolean" && !result) {
            return;
          }
          if (typeof result === "function") {
            args[0] = result;
            break;
          }
        }
        return Reflect.apply(originSetTimeout, this, args);
      };
    },
    setInterval(handler) {
      this.$data.setInterval.push(handler);
      log.info("window.setInterval hook新增劫持");
      if (this.$data.setInterval.length > 1) {
        return;
      }
      const that = this;
      const originSetInterval = _unsafeWindow.setInterval;
      _unsafeWindow.setInterval = function (...args) {
        const fn = args[0];
        const timeout = args[1];
        for (let index = 0; index < that.$data.setInterval.length; index++) {
          const item = that.$data.setInterval[index];
          const result = item(fn, timeout);
          if (typeof result === "boolean" && !result) {
            return;
          }
          if (typeof result === "function") {
            args[0] = result;
            break;
          }
        }
        return Reflect.apply(originSetInterval, this, args);
      };
    },
    function_apply(handler) {
      this.$data.function_apply.push(handler);
      log.info("Function.prototype.apply hook新增劫持");
      if (this.$data.function_apply.length > 1) {
        return;
      }
      const that = this;
      const originApply = _unsafeWindow.Function.prototype.apply;
      _unsafeWindow.Function.prototype.apply = function (...args) {
        const thisArg = args[0];
        const argArray = args[1];
        let fn = this;
        for (let index = 0; index < that.$data.function_apply.length; index++) {
          const item = that.$data.function_apply[index];
          if (typeof item.paramsHandler === "function") {
            const handlerResult = item.paramsHandler(fn, thisArg, argArray, args);
            if (handlerResult != null) {
              if (handlerResult.args) {
                if ("thisArg" in handlerResult.args) {
                  args[0] = handlerResult.args.thisArg;
                }
                if ("argArray" in handlerResult.args) {
                  args[1] = handlerResult.args.argArray;
                }
                if (typeof handlerResult.args.fn === "function") {
                  fn = handlerResult.args.fn;
                }
              }
              if (handlerResult.preventDefault) {
                if ("result" in handlerResult) {
                  return handlerResult.result;
                }
                return;
              }
              break;
            }
          }
        }
        let result = originApply.call(fn, ...args);
        for (let index = 0; index < that.$data.function_apply.length; index++) {
          const item = that.$data.function_apply[index];
          if (typeof item.returnsHandler === "function") {
            let handlerResult = item.returnsHandler(fn, args[0], args[1], result, args);
            if (handlerResult != null && "result" in handlerResult) {
              result = handlerResult.result;
            }
          }
        }
        return result;
      };
    },
    function_call(handler) {
      this.$data.function_call.push(handler);
      log.info("Function.prototype.call hook新增劫持");
      if (this.$data.function_call.length > 1) {
        return;
      }
      const that = this;
      const originCall = _unsafeWindow.Function.prototype.call;
      _unsafeWindow.Function.prototype.call = function (...args) {
        const thisArg = args[0];
        const argArray = args.slice(1);
        let fn = this;
        for (let index = 0; index < that.$data.function_call.length; index++) {
          const item = that.$data.function_call[index];
          if (typeof item.paramsHandler === "function") {
            const handlerResult = item.paramsHandler(fn, thisArg, argArray, args);
            if (handlerResult != null) {
              if (handlerResult.args) {
                if ("thisArg" in handlerResult.args) {
                  args[0] = handlerResult.args.thisArg;
                }
                if ("argArray" in handlerResult.args) {
                  args.splice(1, argArray.length, ...handlerResult.args.argArray);
                }
                if (typeof handlerResult.args.fn === "function") {
                  fn = handlerResult.args.fn;
                }
              }
              if (handlerResult.preventDefault) {
                if ("result" in handlerResult) {
                  return handlerResult.result;
                }
                return;
              }
              break;
            }
          }
        }
        let result = originCall.apply(fn, args);
        for (let index = 0; index < that.$data.function_call.length; index++) {
          const item = that.$data.function_call[index];
          if (typeof item.returnsHandler === "function") {
            const handlerResult = item.returnsHandler(fn, args[0], args[1], result, args);
            if (handlerResult != null && "result" in handlerResult) {
              result = handlerResult.result;
            }
          }
        }
        return result;
      };
    },
    defineProperty(handler) {
      this.$data.defineProperty.push(handler);
      log.info("Object.defineProperty hook新增劫持");
      if (this.$data.defineProperty.length > 1) {
        return;
      }
      const that = this;
      const originDefineProperty = _unsafeWindow.Object.defineProperty;
      _unsafeWindow.Object.defineProperty = function (...args) {
        const target = args[0];
        const key = args[1];
        const attributes = args[2];
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
    window_webpack(webpackName = "webpackJsonp", mainCoreData, handler) {
      let originWebPack = void 0;
      _unsafeWindow.Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originWebPack;
        },
        set(newValue) {
          log.success("成功劫持webpack，当前webpack名：" + webpackName);
          originWebPack = newValue;
          const originWebPackPush = originWebPack.push;
          originWebPack.push = function (...args) {
            let _mainCoreData = args[0][0];
            if (
              mainCoreData == _mainCoreData ||
              (Array.isArray(mainCoreData) &&
                Array.isArray(_mainCoreData) &&
                JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData))
            ) {
              Object.keys(args[0][1]).forEach((keyName) => {
                let originSwitchFunc = args[0][1][keyName];
                args[0][1][keyName] = function (..._args) {
                  let result = originSwitchFunc.call(this, ..._args);
                  _args[0] = handler(_args[0]);
                  return result;
                };
              });
            }
            return Reflect.apply(originWebPackPush, this, args);
          };
        },
      });
    },
  };
  const DouYinHook = {
    $data: {
      hookElementAddEventListener: [],
    },
    init() {
      Panel.onceExec("hookKeyboard", () => {
        DouYinHook.disableShortCut();
      });
      Panel.execMenu("dy-cookie-remove__ac__", () => {
        this.removeCookie();
      });
      if (DouYinRouter.isIndex()) {
        Panel.execMenuOnce("dy-video-disableDoubleClickLike", () => {
          DouYinHook.disableDoubleClickLike();
        });
      } else if (DouYinRouter.isLive()) {
        Panel.execMenuOnce("dy-live-disableDoubleClickLike", () => {
          DouYinHook.disableDoubleClickLike();
        });
      }
    },
    removeEnvCheck() {
      log.info("移除环境检测");
      Hook.setInterval((fn) => {
        const funcStr = fn.toString().trim();
        if (funcStr.includes("debugger")) {
          log.success(["拦截→", [funcStr]]);
          return false;
        }
        if (funcStr.includes("checkEXp")) {
          log.success(["拦截→", [funcStr]]);
          return false;
        }
      });
    },
    removeCookie() {
      const cookieHandler = new utils.GM_Cookie();
      const cookieNameList = ["__ac_signature", "__ac_referer", "__ac_nonce"];
      cookieNameList.forEach((cookieName) => {
        cookieHandler.delete(
          {
            name: cookieName,
            firstPartyDomain: "",
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
    disableShortCut() {
      const isInPopsComponentsRequireInputNode = ($el) => {
        if ($el == null) return false;
        const isInputNode = ["input", "textarea"].includes($el?.tagName?.toLowerCase());
        const isInPops = $el?.closest(".pops") && $el?.getRootNode() instanceof ShadowRoot;
        return isInputNode && isInPops;
      };
      Hook.document_addEventListener((target, eventName, listener, option) => {
        if (["keydown", "keypress", "keyup"].includes(eventName) && typeof listener === "function") {
          return function (...eventArgs) {
            const event = eventArgs[0];
            event.key;
            const code = event.code;
            event.charCode || event.keyCode || event.which;
            const otherCodeList = [];
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
            const $active = document.activeElement;
            const $shadowRootActive = $active?.shadowRoot?.activeElement;
            if (isInPopsComponentsRequireInputNode($shadowRootActive ?? $active)) {
              return;
            }
            const keyboardConfigList = [
              {
                enableKey: "dy-keyboard-hook-likeOrDislike",
                code: ["KeyZ"],
              },
              {
                enableKey: "dy-keyboard-hook-comment",
                code: ["KeyX"],
              },
              {
                enableKey: "dy-keyboard-hook-danmaku-enable",
                code: ["KeyB"],
              },
              {
                enableKey: "dy-keyboard-hook-collect-enable",
                code: ["KeyC"],
              },
              {
                enableKey: "dy-keyboard-hook-copyShareLink",
                code: ["KeyV"],
              },
              {
                enableKey: "dy-keyboard-hook-clearScreen",
                code: ["KeyJ"],
              },
              {
                enableKey: "dy-keyboard-hook-automaticBroadcast",
                code: ["KeyK"],
              },
              {
                enableKey: "dy-keyboard-hook-videoInfo",
                code: ["KeyI"],
              },
              {
                enableKey: "dy-keyboard-hook-notInterested",
                code: ["KeyR"],
              },
              {
                enableKey: "dy-keyboard-hook-enterAuthorHomePage",
                code: ["KeyF"],
              },
              {
                enableKey: "dy-keyboard-hook-follow",
                code: ["KeyG"],
              },
              {
                enableKey: "dy-keyboard-hook-search",
                code: ["KeyF"],
                otherCodeList: ["shift"],
              },
              {
                enableKey: "dy-keyboard-hook-closeTheCurrentPageWithOneClick",
                code: ["KeyQ"],
                otherCodeList: ["shift"],
              },
              {
                enableKey: "dy-keyboard-hook-pageUpAndDown",
                code: ["ArrowUp", "ArrowDown"],
              },
              {
                enableKey: "dy-keyboard-hook-fastForwardAndFastBack",
                code: ["ArrowLeft", "ArrowRight"],
              },
              {
                enableKey: "dy-keyboard-hook-pause",
                code: ["Space"],
              },
              {
                enableKey: "dy-keyboard-hook-fullScreenInsideThePage",
                code: ["KeyY"],
              },
              {
                enableKey: "dy-keyboard-hook-fullScreen",
                code: ["KeyH"],
              },
              {
                enableKey: "dy-keyboard-hook-watchItOutLater",
                code: ["KeyL"],
              },
              {
                enableKey: "dy-keyboard-hook-volumeAdjustment",
                code: ["Minus"],
                otherCodeList: ["shift"],
              },
              {
                enableKey: "dy-keyboard-hook-listOfCallShortcutKeys",
                code: ["Slash"],
                otherCodeList: ["shift"],
              },
              {
                enableKey: "dy-keyboard-hook-closeTheShortcutKeyList",
                code: ["Escape"],
              },
              {
                enableKey: "dy-keyboard-hook-relevantRecommendation",
                code: ["KeyN"],
              },
              {
                enableKey: "dy-keyboard-hook-listenToDouyin",
                code: ["KeyT"],
              },
              {
                enableKey: "dy-keyboard-hook-smallWindowPlay",
                code: ["KeyU"],
              },
              {
                enableKey: "dy-keyboard-hook-recommendVideo",
                code: ["KeyP"],
              },
            ];
            if (DouYinRouter.isIndex()) {
              keyboardConfigList.push(
                {
                  enableKey: "dy-keyboard-hook-arrowUp-w",
                  code: ["KeyW"],
                },
                {
                  enableKey: "dy-keyboard-hook-arrowDown-s",
                  code: ["KeyS"],
                },
                {
                  enableKey: "dy-keyboard-hook-videoRewind",
                  code: ["KeyA"],
                },
                {
                  enableKey: "dy-keyboard-hook-videoFastForward",
                  code: ["KeyD"],
                }
              );
            } else if (DouYinRouter.isLive()) {
              keyboardConfigList.push(
                {
                  enableKey: "dy-live-threeScreen",
                  code: ["KeyS"],
                },
                {
                  enableKey: "dy-live-refresh",
                  code: ["KeyE"],
                },
                {
                  enableKey: "dy-live-screenRotation",
                  code: ["KeyD"],
                },
                {
                  enableKey: "dy-live-enableSmallWindowMode",
                  code: ["KeyU"],
                },
                {
                  enableKey: "dy-live-switchLiveRoom",
                  code: ["ArrowUp", "ArrowDown"],
                }
              );
            }
            for (let index = 0; index < keyboardConfigList.length; index++) {
              const keyboardConfig = keyboardConfigList[index];
              if (keyboardConfig.code.includes(code)) {
                if (Array.isArray(keyboardConfig.otherCodeList)) {
                  const findValue = keyboardConfig.otherCodeList.find((item) => !otherCodeList.includes(item));
                  if (findValue) {
                    continue;
                  }
                }
                if (!Panel.getValue(keyboardConfig.enableKey)) {
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
    disableDoubleClickLike() {
      let latestClickTime = Date.now();
      Hook.element_addEventListener((target, eventName, listener, option) => {
        const listenerStr = listener.toString();
        if (
          eventName === "click" &&
          target instanceof HTMLElement &&
          target?.classList?.contains("xgplayer") &&
          listenerStr.match(/video|innerContainer|video.__canvas|mouse/)
        ) {
          return function (...eventArgs) {
            const currentClickTime = Date.now();
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
    },
  };
  const DouYinElement = {
    watchFeedVideoListChange(callback) {
      let $os = null;
      domUtils.ready(() => {
        domUtils.waitAnyNode(["#slidelist", '#search-content-area ul[data-e2e="scroll-list"]']).then(($ele) => {
          log.info(`启用观察器观察加载的视频`);
          let lockFn = new utils.LockFunction((observer) => {
            $os = $os || this.selectorRootOSNode();
            if (!$os) {
              log.error("watchVideDataListChange：获取osElement失败");
              return;
            }
            callback($os, observer);
          }, 50);
          utils.mutationObserver(document, {
            config: {
              childList: true,
              subtree: true,
            },
            immediate: true,
            callback: (mutations, observer) => {
              lockFn.run(observer);
            },
          });
        });
      });
    },
    selectorRootOSNode() {
      return $("#root div[class*='-os']") || $("#douyin-right-container");
    },
  };
  const DouYinAccount = {
    disguiseLogin() {
      log.info("伪装登录");
      let result = [CommonUtil.addBlockCSS(".login-tooltip-slot")];
      const WAIT_TIME = 2e4;
      const uid = parseInt((Math.random() * 1e10).toString());
      const info = {
        uid,
        secUid: "",
        shortId: parseInt((Math.random() * 1e9).toString()),
        realName: "乌萨奇",
        nickname: "乌萨奇",
        desc: "除草证3级",
        gender: 0,
        avatarUrl: "https://picshack.net/ib/F9JKlC3yhh.gif",
        avatar300Url: "https://picshack.net/ib/F9JKlC3yhh.gif",
        followStatus: 0,
        followerStatus: 0,
        awemeCount: 0,
        watchLaterCount: 0,
        followingCount: 0,
        followerCount: 0,
        followerCountStr: "",
        mplatformFollowersCount: 9999999,
        favoritingCount: 0,
        totalFavorited: 9999999,
        userCollectCount: {
          logPb: {
            impr_id: "",
          },
          collectCountList: [],
          statusCode: 0,
          extra: {
            fatal_item_ids: [],
            logid: "",
            now: Date.now(),
          },
        },
        uniqueId: "",
        customVerify: "",
        generalPermission: {
          is_hit_active_fans_grayed: false,
        },
        age: new Date().getFullYear() - 2019,
        country: "",
        province: "",
        city: "",
        district: "",
        school: "chiikawa",
        schoolVisible: 1,
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
            url_list: [],
          },
          shareQrcodeUrl: {
            uri: "",
            url_list: [],
          },
          shareUrl: "",
          shareWeiboDesc: "长按复制此条消息，打开抖音搜索，查看TA的更多作品。",
        },
        coverAndHeadImageInfo: {
          profileCoverList: [],
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
        close_consecutive_chat: 0,
        profileRankLabel: null,
      };
      Object.freeze(info);
      function getUserInfo(element) {
        let userInfoList = [];
        let reactInstance = utils.getReactInstance(element);
        let reactFiber = reactInstance?.reactFiber;
        reactInstance?.reactProps;
        if (reactFiber?.alternate?.return?.memoizedProps?.userInfo) {
          userInfoList.push(reactFiber?.alternate?.return?.memoizedProps?.userInfo);
        }
        if (reactFiber?.alternate?.return?.memoizedProps?.userInfo?.userInfo) {
          userInfoList.push(reactFiber?.alternate?.return?.memoizedProps?.userInfo.userInfo);
        }
        if (reactFiber?.alternate?.return?.return?.memoizedProps?.userInfo) {
          userInfoList.push(reactFiber?.alternate?.return?.return?.memoizedProps?.userInfo);
        }
        if (reactFiber?.alternate?.return?.return?.memoizedProps?.userInfo?.userInfo) {
          userInfoList.push(reactFiber?.alternate?.return?.return?.memoizedProps?.userInfo.userInfo);
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
      DouYinElement.watchFeedVideoListChange(setLogin);
      domUtils
        .waitNode("#root div[class*='-os']", WAIT_TIME)
        .then(() => {
          let lockFn = new utils.LockFunction(() => {
            let $os = DouYinElement.selectorRootOSNode();
            if (!$os) {
              return;
            }
            setLogin($os);
          }, 70);
          utils.mutationObserver(document.body, {
            config: {
              subtree: true,
              childList: true,
            },
            immediate: true,
            callback: () => {
              lockFn.run();
            },
          });
        })
        .catch((err) => {});
      if (DouYinRouter.isLive()) {
        log.info("伪装登录：live");
        domUtils.waitNode(`[id^="douyin-header"] div:has(.dy-tip-container)`, WAIT_TIME).then(() => {
          let lockFn = new utils.LockFunction(() => {
            setLogin($(`[id^="douyin-header"]`));
          }, 70);
          utils.mutationObserver(document.body, {
            config: {
              subtree: true,
              childList: true,
            },
            immediate: true,
            callback: () => {
              lockFn.run();
            },
          });
        });
      } else if (DouYinRouter.isSearch()) {
        let setUserInfoBySearch = function ($ele) {
          let $react = utils.getReactInstance($ele);
          $react?.reactFiber;
          let reactProps = $react?.reactProps;
          if (typeof reactProps?.children?.[1]?.props?.userInfo?.isLogin === "boolean") {
            Reflect.set(reactProps.children[1].props.userInfo, "isLogin", true);
          }
          if (typeof reactProps?.children?.[1]?.props?.isClient === "boolean") {
            Reflect.set(reactProps.children[1].props, "isClient", true);
          }
        };
        log.info("伪装登录：search");
        domUtils.waitNode("#root > div", WAIT_TIME).then(($rootDiv) => {
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
              childList: true,
            },
            immediate: true,
            callback: () => {
              lockFn.run();
            },
          });
        });
      }
      if (!Panel.getValue("watchLoginDialogToClose")) {
        result = result.concat(this.watchLoginDialogToClose());
      }
      result = result.concat(this.watchCommentDialogToClose());
      return result;
    },
    watchLoginDialogToClose() {
      log.info("监听登录弹窗并关闭");
      const lockFn = new utils.LockFunction(() => {
        if (!Panel.getValue("watchLoginDialogToClose") && !Panel.getValue("disguiseLogin")) {
          return;
        }
        domUtils.remove(".douyin_login_iframe:has(iframe)");
        const $loginDialog = $('div[id^="login-full-panel-"]');
        if ($loginDialog && $loginDialog.children.length) {
          const $loginDialogCloseBtn =
            $loginDialog.querySelector(".dy-account-close") ||
            $loginDialog.querySelector(
              'div:has(>svg path[d="M12.7929 22.2426C12.4024 22.6331 12.4024 23.2663 12.7929 23.6568C13.1834 24.0474 13.8166 24.0474 14.2071 23.6568L18.5 19.3639L22.7929 23.6568C23.1834 24.0474 23.8166 24.0474 24.2071 23.6568C24.5976 23.2663 24.5976 22.6331 24.2071 22.2426L19.9142 17.9497L24.1066 13.7573C24.4971 13.3668 24.4971 12.7336 24.1066 12.3431C23.7161 11.9526 23.0829 11.9526 22.6924 12.3431L18.5 16.5355L14.3076 12.3431C13.9171 11.9526 13.2839 11.9526 12.8934 12.3431C12.5029 12.7336 12.5029 13.3668 12.8934 13.7573L17.0858 17.9497L12.7929 22.2426Z"])'
            );
          if ($loginDialogCloseBtn) {
            const reactInst = utils.getReactInstance($loginDialogCloseBtn);
            const onClick = reactInst?.reactProps?.onClick;
            if (typeof onClick === "function") {
              onClick(new Event("click"));
              log.success(`调用onClick触发关闭弹窗`);
            } else {
              log.error("监听到登录弹窗但是关闭失败，原因：未获取到onClick函数");
            }
          } else {
            const $logPanelNew = $loginDialog.querySelector("#login-panel-new > div");
            if (!$logPanelNew || ($logPanelNew && $logPanelNew.children.length)) {
              log.error(
                "未找到登录弹出的关闭按钮，此时键盘被聚焦在登录弹窗上从而导致'快捷键'失效",
                $loginDialog.cloneNode(true)
              );
            }
          }
        }
        let $ohterDialog = $("body > div > div:contains('为保障更好的访问体验，请在登录后继续使用抖音')");
        if ($ohterDialog) {
          let reactInst = utils.getReactInstance($ohterDialog);
          let onClick = reactInst?.reactProps?.onClick;
          if (typeof onClick === "function") {
            onClick(new Event("click"));
          } else {
            log.error("监听到【为保障更好的访问体验，请在登录后继续使用抖音】但是关闭失败，原因：未获取到onClick函数");
          }
        }
      });
      const observer = utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        CommonUtil.addBlockCSS('div[id^="login-full-panel-"]', ".douyin_login_iframe:has(iframe)"),
        () => {
          observer.disconnect();
        },
      ];
    },
    watchCommentDialogToClose() {
      let lockFn = new utils.LockFunction(() => {
        let $cardLoginGuide = $('[id^="related-video-card-login-guide"]');
        if (!$cardLoginGuide) {
          return;
        }
        let $close = $cardLoginGuide.querySelector(".related-video-card-login-guide__footer-close");
        if (!$close) {
          log.error("监听到评论区的登录遮罩层但是未获取到关闭按钮");
          return;
        }
        $close.click();
      });
      const observer = utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        CommonUtil.addBlockCSS('[id^="related-video-card-login-guide"]'),
        addStyle(
          `
        /* 去除遮罩层 */
        [id^="related-video-card-login-guide"]+div{
          filter: none !important;
        }
      `
        ),
        () => {
          observer?.disconnect();
        },
      ];
    },
  };
  const DouYinUtils = {
    isVerticalScreen() {
      return !window.screen.orientation.type.includes("landscape");
    },
  };
  const MobileCSS$1 =
    '/* 竖屏且高度小于550px */\r\n@media screen and (max-width: 550px) and (orientation: portrait) {\r\n  /* 右侧工具栏放大 */\r\n  .basePlayerContainer .positionBox {\r\n    bottom: 80px !important;\r\n    padding-right: 5px !important;\r\n    scale: unset !important;\r\n    transform: scale3d(1.12, 1.12, 1.12) !important;\r\n  }\r\n  /* 右侧工具栏的svg再放大 */\r\n  .basePlayerContainer .positionBox svg {\r\n    transform: scale3d(1.12, 1.12, 1.12);\r\n  }\r\n  /* 重置关注按钮的scale */\r\n  .basePlayerContainer .positionBox .dy-tip-container div[data-e2e="feed-follow-icon"] svg {\r\n    scale: unset !important;\r\n  }\r\n\r\n  /* 调整顶部搜索框的宽度 */\r\n  #douyin-header\r\n    div[data-click="doubleClick"]\r\n    > div[data-click="doubleClick"]\r\n    > div:has(input[data-e2e="searchbar-input"]) {\r\n    width: 150px;\r\n    padding-right: 0;\r\n    max-width: unset;\r\n    flex: 1;\r\n  }\r\n  /* 搜索框获取焦点时自动放大宽度 */\r\n  #douyin-header\r\n    div[data-click="doubleClick"]\r\n    > div[data-click="doubleClick"]\r\n    > div:has(input[data-e2e="searchbar-input"]:focus) {\r\n    width: 100vw;\r\n    width: 100dvw;\r\n  }\r\n  /* 搜索页面 搜索详情的宽度、视频结果列表的宽度 */\r\n  #search-content-area > div,\r\n  #search-content-area > div div:has(+ #search-result-container),\r\n  #search-content-area > div #search-result-container {\r\n    width: 100%;\r\n    width: -webkit-fill-available;\r\n  }\r\n  /* 搜索页面 视频右侧的工具栏缩小 */\r\n  #search-content-area .basePlayerContainer .positionBox {\r\n    bottom: 28px !important;\r\n    transform: scale3d(0.6, 0.6, 0.6) !important;\r\n  }\r\n  /* 搜索页面 搜索出的用户信息换行 */\r\n  #search-content-area #search-result-container ul[data-e2e="scroll-list"] li .search-result-card > div > div {\r\n    flex-wrap: wrap;\r\n  }\r\n  /* 搜索页面 搜索结果筛选选项 综合、视频、用户、直播的超出宽度换行 */\r\n  #search-content-area div:has(> div > div > span[data-key="general"]) {\r\n    overflow: auto;\r\n    gap: 10px;\r\n  }\r\n  /* 搜索页面 搜索结果筛选选项 */\r\n  #search-content-area div:has(> span[data-key="general"]) {\r\n    gap: 10px;\r\n  }\r\n  /* 搜索页面 搜索结果筛选选项弹窗修复 */\r\n  #search-content-area div:has(> div > span[data-key="general"]) {\r\n    position: unset !important;\r\n  }\r\n  /* 搜索页面 搜索结果筛选选项 */\r\n  #search-content-area div:has(> span[data-key="general"]) > * {\r\n    white-space: nowrap !important;\r\n    width: auto !important;\r\n    width: fit-content !important;\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\r\n  }\r\n  /* 去除设置min-width超出浏览器宽度的问题 */\r\n  body {\r\n    min-width: 100% !important;\r\n  }\r\n  /* 去除设置width导致顶部工具栏超出浏览器宽度的问题 */\r\n  #douyin-right-container #douyin-header {\r\n    width: 100%;\r\n  }\r\n  /* 去除设置 */\r\n  #douyin-right-container #douyin-header > div[data-click="doubleClick"] {\r\n    min-width: 100%;\r\n  }\r\n\r\n  /* /video/xxx页面 */\r\n  /* 点赞、评论、分享偏移 */\r\n  div[data-e2e="video-detail"] .leftContainer .basePlayerContainer .positionBox {\r\n    padding-right: 30px !important;\r\n  }\r\n  /* 底部工具栏右侧的按钮 */\r\n  div[data-e2e="video-detail"] .leftContainer .xgplayer.xgplayer-pc .xg-right-grid {\r\n    margin-right: 35px !important;\r\n  }\r\n  /* 评论区全屏 */\r\n  div[data-e2e="video-detail"] .leftContainer > div:has(.comment-mainContent[data-e2e="comment-list"]),\r\n  div[data-e2e="video-detail"] .leftContainer > div > div:has(.comment-mainContent[data-e2e="comment-list"]) {\r\n    width: 100vw !important;\r\n  }\r\n\r\n  /* 设置视频区域的高度 */\r\n  #slidelist {\r\n    width: 100%;\r\n    height: calc(100vh - var(--header-height)) !important;\r\n  }\r\n  /* 修正网页全屏下的视频高度 */\r\n  #slidelist[class*="isCssFullScreen"] {\r\n    height: 100vh !important;\r\n  }\r\n  /* 去除视频区域右侧偏移 */\r\n  .is-mobile-pc div[data-e2e="slideList"] {\r\n    padding-right: 0px !important;\r\n  }\r\n}\r\n\r\n/* 横屏且高度小于550px */\r\n@media screen and (max-height: 550px) and (orientation: landscape) {\r\n  /* 右侧工具栏缩小 */\r\n  .basePlayerContainer .positionBox {\r\n    transform: scale(0.95) !important;\r\n    bottom: 42px !important;\r\n    padding-right: 10px !important;\r\n  }\r\n  /* 右侧工具栏的svg再缩小 */\r\n  .basePlayerContainer .positionBox svg {\r\n    transform: scale3d(0.95, 0.95, 0.95);\r\n  }\r\n  /* 修复全屏下不显示视频底部的控制栏 */\r\n  .isCssFullScreen [data-e2e="slideList"] {\r\n    min-height: auto !important;\r\n  }\r\n}\r\n';
  const DouYinVideoBlock_Comment = {
    init() {
      Panel.execMenuOnce("dy-video-shieldUserCommentToolBar", () => {
        return this.shieldUserCommentToolBar();
      });
      Panel.execMenuOnce("dy-video-shieldUserCommentEveryOneAllSearch", () => {
        return this.shieldUserCommentEveryOneAllSearch();
      });
    },
    shieldUserCommentToolBar() {
      log.info("【屏蔽】评论工具栏");
      return [CommonUtil.addBlockCSS(".comment-input-container")];
    },
    shieldUserCommentEveryOneAllSearch() {
      log.info("【屏蔽】大家都在搜");
      return [CommonUtil.addBlockCSS(".comment-header-with-search")];
    },
  };
  const DouYinVideoBlock_BottomToolbar_videoInfo = {
    init() {
      Panel.execMenuOnce("dy-video-bottom-shieldVideoInfoWrap", () => {
        return this.shieldVideoInfoWrap();
      });
      Panel.execMenuOnce("dy-video-blockClickRecommend", () => {
        return this.blockClickRecommend();
      });
      Panel.execMenuOnce("dy-video-blockTitleTopTag", () => {
        return this.blobkTitleTopTag();
      });
      Panel.execMenuOnce("dy-video-bottom-shieldVideoUnderTitleTag", () => {
        return this.shieldVideoUnderTitleTag();
      });
      Panel.execMenuOnce("dy-video-blockAIIdentifyTheScreen", () => {
        return this.blockAIIdentifyTheScreen();
      });
      Panel.execMenuOnce("dy-video-blockClickUpdateReminder", () => {
        return this.blockClickUpdateReminder();
      });
      Panel.execMenuOnce("dy-video-blockAuthorDeclaration", () => {
        return this.blockAuthorDeclaration();
      });
    },
    shieldVideoInfoWrap() {
      log.info("【屏蔽】视频信息");
      return [
        CommonUtil.addBlockCSS(
          "#video-info-wrap",
          '[data-e2e="feed-live"] [data-e2e="basicPlayer"] > div:has([aria-label*="直播"])'
        ),
      ];
    },
    blockClickRecommend() {
      log.info(`【屏蔽】点击推荐或共xx人推荐`);
      return CommonUtil.addBlockCSS(".xgplayer-recommend-tag");
    },
    blobkTitleTopTag() {
      log.info(`【屏蔽】视频标题上的标签`);
      return CommonUtil.addBlockCSS("span:has(+#video-info-wrap):has(img)", "span:has(+div #video-info-wrap):has(img)");
    },
    shieldVideoUnderTitleTag() {
      log.info(`【屏蔽】视频标题下的标签`);
      return [CommonUtil.addBlockCSS("#video-info-wrap .under-title-tag")];
    },
    blockAIIdentifyTheScreen() {
      log.info(`【屏蔽】识别画面`);
      return [
        CommonUtil.addBlockCSS(
          '.under-title-tag + div:has(svg g[filter*="icon_ai_svg__filter"])',
          '[data-e2e="video-desc"] + div:has(svg g[filter*="icon_ai_svg__filter"])'
        ),
      ];
    },
    blockClickUpdateReminder() {
      let lockFn = new utils.LockFunction(() => {
        let $reminder = $$(".basePlayerContainer div:has(>div>div):contains('及时接收作品更新提醒')");
        if ($reminder.length) {
          for (const $reminderItem of $reminder) {
            const $basePlayerContainer = $reminderItem.closest(".basePlayerContainer");
            const $videoInfoDetail = $basePlayerContainer?.querySelector(".video-info-detail");
            if ($videoInfoDetail) {
              domUtils.css($videoInfoDetail, "paddingBottom", "8px");
            }
          }
          domUtils.remove($reminder);
          log.success(`【屏蔽】及时接收作品更新提醒`);
        }
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
    },
    blockAuthorDeclaration() {
      log.info(`【屏蔽】作者声明`);
      return [CommonUtil.addBlockCSS("div:has(>a.safetyBar)")];
    },
  };
  const DouYinVideoBlock_Live_PlayerCompomemts = {
    init() {
      Panel.execMenuOnce("dy-video-live-block-playComponents-refresh", () => {
        return this.blockRefresh();
      });
    },
    blockRefresh() {
      log.info(`【屏蔽】刷新`);
      return CommonUtil.addBlockCSS('[data-e2e="feed-live"] xg-left-grid .xgplayer-play+.pluginContainer');
    },
  };
  const DouYinVideoBlock_Live = {
    init() {
      Panel.execMenuOnce("dy-video-live-block-tipClickOrKeyboardFEnterLiveRoom", () => {
        return this.tipClickOrKeyboardFEnterLiveRoom();
      });
      Panel.execMenuOnce("dy-video-live-block-yellowCar", () => {
        return this.blockYellowCar();
      });
      DouYinVideoBlock_Live_PlayerCompomemts.init();
    },
    tipClickOrKeyboardFEnterLiveRoom() {
      log.info(`【屏蔽】点击或按F进入直播间`);
      return [
        CommonUtil.addBlockCSS(
          '[data-e2e="feed-live"] .douyin-player > a',
          '[data-e2e="feed-live"] [data-e2e="basicPlayer"] > a',
          '.search-result-card [data-e2e="basicPlayer"] > a[href]',
          ".search-result-card .douyin-player > a[href]"
        ),
      ];
    },
    blockYellowCar() {
      log.info("【屏蔽】小黄车");
      return [
        CommonUtil.addBlockCSS(
          '[data-e2e="feed-live"] .douyin-player > div:has([data-e2e="yellowCart-container"])',
          '[data-e2e="feed-live"] [data-e2e="basicPlayer"] > div:has([data-e2e="yellowCart-container"])',
          '.search-result-card [data-e2e="basicPlayer"] > div:has([data-e2e="yellowCart-container"])'
        ),
      ];
    },
  };
  const DouYinVideoBlock_BottomToolbar_PlayerComponents = {
    init() {
      Panel.execMenuOnce("shieldBottomVideoToolBar", () => {
        return this.shieldBottomVideoToolBar();
      });
      Panel.execMenuOnce("shieldBottomVideoToolBar-play", () => {
        return this.blockPlay();
      });
      Panel.execMenuOnce("shieldBottomVideoToolBar-time", () => {
        return this.blockTime();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-blockChapterContainer", () => {
        return this.blockChapterContainer();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbarDanmuContainer", () => {
        return this.shieldBottomVideoToolbarDanmuContainer();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-autoPlay", () => {
        return this.autoPlay();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-aiNotes", () => {
        return this.aiNotes();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-clearScreen", () => {
        return this.clearScreen();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-playclarity", () => {
        return this.playclarity();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-playback", () => {
        return this.playback();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-watchLater", () => {
        return this.watchLater();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-miniMode", () => {
        return this.miniMode();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-volume", () => {
        return this.volume();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-pageFullScreen", () => {
        return this.pageFullScreen();
      });
      Panel.execMenuOnce("shieldBottomVideoToolbar-fullScreen", () => {
        return this.fullScreen();
      });
    },
    shieldBottomVideoToolBar() {
      log.info("【屏蔽】播放器组件");
      return [
        CommonUtil.addBlockCSS("xg-controls.xgplayer-controls"),
        DouYinVideoPlayer.removeStyleBottom(),
        addStyle(
          `
        /* 视频信息往下移 */
			  #sliderVideo[data-e2e="feed-active-video"] div:has( > div > #video-info-wrap),
        div:has(> #video-info-wrap){
            bottom: 0px !important;
        }
      `
        ),
      ];
    },
    blockPlay() {
      log.info(`【屏蔽】播放`);
      return CommonUtil.addBlockCSS(".xgplayer-play");
    },
    blockTime() {
      log.info(`【屏蔽】播放时长`);
      return CommonUtil.addBlockCSS(
        ".xgplayer-time",

        ".search-result-card .xgplayer[id^='oK_'] xg-controls.xgplayer-controls xg-left-grid.xg-left-grid .xgplayer-play+xg-icon.xgplayer-time"
      );
    },
    blockChapterContainer() {
      log.info(`【屏蔽】章节要点`);
      return CommonUtil.addBlockCSS('.chapterContainer[data-e2e="chapter-container"]');
    },
    shieldBottomVideoToolbarDanmuContainer() {
      log.info("【屏蔽】底部视频工具栏的弹幕容器");
      return CommonUtil.addBlockCSS('xg-controls xg-inner-controls .danmakuContainer[data-e2e="danmaku-container"]');
    },
    aiNotes() {
      log.info(`【屏蔽】AI笔记`);
      return CommonUtil.addBlockCSS('.ai-note-container[data-e2e="ai-note-container"]');
    },
    autoPlay() {
      log.info(`【屏蔽】连播`);
      return CommonUtil.addBlockCSS(
        ".xgplayer-autoplay-setting",
        '[data-e2e="feed-live"] xg-controls xg-right-grid .pluginContainer'
      );
    },
    clearScreen() {
      log.info(`【屏蔽】清屏`);
      return CommonUtil.addBlockCSS(".xgplayer-immersive-switch-setting");
    },
    playclarity() {
      log.info(`【屏蔽】清晰度`);
      return CommonUtil.addBlockCSS(".xgplayer-playclarity-setting");
    },
    playback() {
      log.info(`【屏蔽】倍速`);
      return CommonUtil.addBlockCSS(".xgplayer-playback-setting");
    },
    watchLater() {
      log.info(`【屏蔽】稍后再看`);
      return CommonUtil.addBlockCSS(".xgplayer-watch-later");
    },
    miniMode() {
      log.info(`【屏蔽】小窗模式`);
      return CommonUtil.addBlockCSS(".xgplayer-pip");
    },
    volume() {
      log.info(`【屏蔽】音量`);
      return CommonUtil.addBlockCSS(".xgplayer-volume");
    },
    pageFullScreen() {
      log.info(`【屏蔽】网页全屏`);
      return CommonUtil.addBlockCSS(".xgplayer-page-full-screen");
    },
    fullScreen() {
      log.info(`【屏蔽】进入全屏`);
      return CommonUtil.addBlockCSS(".xgplayer-fullscreen");
    },
  };
  const DouYinVideoBlock_RightToolbar = {
    init() {
      Panel.execMenuOnce("shieldPlaySwitchButton", () => {
        return this.shieldPlaySwitchButton();
      });
      Panel.execMenuOnce("blockAIDouYin", () => {
        return this.blockAIDouYin();
      });
      Panel.execMenuOnce("shieldAuthorAvatar", () => {
        return this.shieldAuthorAvatar();
      });
      Panel.execMenuOnce("shieldLikeButton", () => {
        return this.shieldLikeButton();
      });
      Panel.execMenuOnce("shieldCommentButton", () => {
        return this.shieldCommentButton();
      });
      Panel.execMenuOnce("shieldCollectionButton", () => {
        return this.shieldCollectionButton();
      });
      Panel.execMenuOnce("shieldSharenButton", () => {
        return this.shieldSharenButton();
      });
      Panel.execMenuOnce("shieldListenDouYinButton", () => {
        return this.shieldListenDouYinButton();
      });
      Panel.execMenuOnce("shieldRelatedRecommendationsButton", () => {
        return this.shieldRelatedRecommendationsButton();
      });
      Panel.execMenuOnce("shieldMoreButton", () => {
        return this.shieldMoreButton();
      });
    },
    shieldPlaySwitchButton() {
      log.info("【屏蔽】切换播放↑↓");
      return [
        CommonUtil.addBlockCSS(
          '.positionBox  .xgplayer-playswitch[data-state="normal"]',
          "div.xgplayer-playswitch",
          ".xgplayer-playswitch",
          '[data-e2e="feed-live"]>div:has(svg path[d="M7.269 16.316a1.393 1.393 0 0 1 0-1.97l5.056-5.055a1.393 1.393 0 0 1 1.97 0l.011.011 5.045 5.045a1.393 1.393 0 1 1-1.97 1.97l-4.071-4.072-4.071 4.071a1.393 1.393 0 0 1-1.97 0z"])'
        ),
        addStyle(
          `
			div[data-e2e="slideList"]{
				/* 修复屏蔽后的视频宽度占据 */
				padding: 0px !important;
			}
			`
        ),
      ];
    },
    blockAIDouYin() {
      log.info(`【屏蔽】AI抖音`);
      return CommonUtil.addBlockCSS(
        '.immersive-player-switch-on-hide-interaction-area > div:has(>svg path[d="M8.175 4.88C8.318 2.458 10.38.548 12.815.665l.12.008a4.428 4.428 0 0 1 3.08 1.586 4.354 4.354 0 0 1 1.014 2.948l-.005.108c-.016.282-.06.556-.129.82l-.113.444 1.927-.499.111-.027c2.335-.543 4.733.81 5.362 3.105l.05.182a4.351 4.351 0 0 1-.524 3.23l-.06.096a4.409 4.409 0 0 1-2.514 1.87l-.105.028h-.001a4.336 4.336 0 0 1-.827.133l-.458.03 1.075 1.67.06.096c1.221 2.003.705 4.63-1.222 5.957l-.095.063a4.44 4.44 0 0 1-3.424.605l-.11-.027a4.41 4.41 0 0 1-2.568-1.795l-.06-.09-.056-.09a4.355 4.355 0 0 1-.326-.65l-.17-.421-1.263 1.528c-1.53 1.85-4.265 2.207-6.162.774l-.09-.07a4.376 4.376 0 0 1-1.636-3.044l-.008-.112a4.361 4.361 0 0 1 .994-3.061 4.64 4.64 0 0 1 .592-.59l.352-.293-1.856-.722c-2.28-.886-3.468-3.423-2.606-5.68v-.001A4.407 4.407 0 0 1 3.68 6.245a4.448 4.448 0 0 1 3.991.37l.386.24.118-1.975zm4.57-2.218a2.413 2.413 0 0 0-2.547 2.165v.01l-.463 7.542a.046.046 0 0 1-.053.041l-.011-.003-.163-.064h-.001l-2.109-.821c.165-.28.28-.606.31-.978l.006-.09A2.422 2.422 0 0 0 6.475 8.23l-.081-.043-.104-.049a2.42 2.42 0 0 0-1.479-.153l-.102.024a2.403 2.403 0 0 0-1.652 1.446 2.396 2.396 0 0 0 1.285 3.076l.01.004 7.082 2.769a.044.044 0 0 1 .02.068l-.112.134v.001l-1.44 1.74a2.312 2.312 0 0 0-.775-.568l-.067-.03-.086-.033c-.856-.319-1.842-.147-2.517.48l-.066.064a2.38 2.38 0 0 0-.692 1.538c-.047.744.252 1.5.876 2.01a2.428 2.428 0 0 0 3.339-.265l.003-.004.003-.004 4.84-5.833a.046.046 0 0 1 .04-.016c.012 0 .022.005.03.012l.007.009.092.146.001.001 1.22 1.893c-.28.122-.547.302-.78.555l-.049.054v.001c-.64.74-.793 1.807-.337 2.682.282.545.737.927 1.257 1.13a2.418 2.418 0 0 0 2.19-.206 2.393 2.393 0 0 0 .78-3.24l-.002-.004-.003-.004-4.09-6.373-.001-.001-.005-.009a.043.043 0 0 1 .032-.055l.17-.044 2.195-.569c.032.325.133.654.328.974a2.445 2.445 0 0 0 2.462 1.146l.112-.022a2.405 2.405 0 0 0 1.358-.818l.29-.442a2.375 2.375 0 0 0 .206-1.621l-.018-.073a2.415 2.415 0 0 0-2.858-1.737l-.009.002-7.369 1.894h-.002a.043.043 0 0 1-.039-.009.043.043 0 0 1-.016-.037l.013-.204v-.002l.132-2.212c.32.07.67.077 1.034-.009.955-.225 1.708-.997 1.859-1.972a2.371 2.371 0 0 0-.296-1.56l-.055-.09a2.41 2.41 0 0 0-1.82-1.106l-.075-.005z"])',
        '.immersive-player-switch-on-hide-interaction-area > div:has(>svg g[filter*="entryIcon_svg__filter"])',
        '.immersive-player-switch-on-hide-interaction-area > div > div:has(>svg g[filter*="entryIcon_svg__filter"])',
        '.xgplayer div:has(>svg path[d="M22.94 21.309l.58 1.364a45.819 45.819 0 0 0 2.125 4.34l.528.947-.108.056-1.077.543-.102.052-.054-.102-.576-1.087a44.077 44.077 0 0 1-.22-.423 7.704 7.704 0 0 0-3.902.001c-.087.169-.154.3-.219.422l-.576 1.087-.054.102-.102-.052-1.077-.543-.108-.056.059-.106.468-.841a45.902 45.902 0 0 0 2.125-4.34l.58-1.364.038-.086.091.017c.482.086.97.086 1.451 0l.093-.017.037.086zm6.011-.019a3.731 3.731 0 0 0-.173.9c-.022.342-.034.69-.034 1.035v3.067c0 .345.012.694.034 1.035l.022.227c.029.226.08.452.151.673l.05.153h-1.92l.049-.153c.095-.295.153-.597.173-.9.022-.345.033-.694.033-1.035v-3.067c0-.34-.01-.689-.033-1.034a3.753 3.753 0 0 0-.173-.9l-.05-.154h1.921l-.05.153zM17.161 5.395l.123.008a4.527 4.527 0 0 1 3.14 1.602 4.367 4.367 0 0 1 1.033 2.978l-.005.109c-.015.284-.063.56-.13.828l-.117.447 1.964-.504.113-.027c2.38-.549 4.824.818 5.465 3.136l.05.184a4.368 4.368 0 0 1-.534 3.265l-.06.097a4.495 4.495 0 0 1-1.965 1.674c-3.71 1.444-5.893-1.51-6.663-3.187l.134-.034 2.236-.575c.033.329.136.661.333.984a2.5 2.5 0 0 0 2.51 1.157l.113-.021a2.456 2.456 0 0 0 1.384-.825l.297-.448a2.37 2.37 0 0 0 .209-1.637l-.018-.075c-.334-1.268-1.63-2.035-2.914-1.753h-.01l-7.51 1.916h-.022a.056.056 0 0 1-.02-.01.048.048 0 0 1-.017-.037l.014-.205.136-2.238c.327.071.682.079 1.054-.008.973-.227 1.74-1.006 1.894-1.992a2.371 2.371 0 0 0-.303-1.578l-.055-.09a2.46 2.46 0 0 0-1.855-1.118l-.076-.006c-1.323-.076-2.469.897-2.596 2.188v.009l-.47 7.62a.047.047 0 0 1-.053.04l-.013-.002-.166-.065-2.15-.83c.169-.284.285-.612.316-.987l.007-.092a2.443 2.443 0 0 0-1.263-2.256l-.084-.043-.105-.048a2.482 2.482 0 0 0-1.508-.155l-.104.024a2.443 2.443 0 0 0-1.683 1.46c-.487 1.219.104 2.59 1.31 3.109l.008.003 7.22 2.797c.03.012.036.048.02.068l-.114.136-1.467 1.759a2.335 2.335 0 0 0-.79-.573l-.068-.03-.086-.034c-.873-.321-1.878-.147-2.566.484l-.069.065a2.407 2.407 0 0 0 .188 3.584 2.49 2.49 0 0 0 3.404-.268l.006-.006 3.485-4.165v3.166l-.5.607v-.004l-1.29 1.543c-1.559 1.868-4.346 2.229-6.28.782l-.092-.07a4.41 4.41 0 0 1-1.668-3.076l-.009-.113a4.384 4.384 0 0 1 1.619-3.688l.357-.297-1.892-.729c-2.323-.895-3.535-3.457-2.656-5.739a4.475 4.475 0 0 1 2.565-2.555 4.577 4.577 0 0 1 4.068.373l.393.244.12-1.995h-.001c.146-2.447 2.248-4.375 4.728-4.258zm4.679 17.909a45.987 45.987 0 0 1-.964 2.191 9.16 9.16 0 0 1 2.417 0 45.878 45.878 0 0 1-.963-2.191l-.245-.6-.245.6z"])',
        '.immersive-player-switch-on-hide-interaction-area > div:has(> div >svg >defs+ g[clip-path*="__lottie_element_"])'
      );
    },
    shieldAuthorAvatar() {
      log.info("【屏蔽】作者头像");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-avatar"])',
          '.basePlayerContainer div[aria-describedby]:has([data-e2e="video-avatar"])'
        ),
      ];
    },
    shieldLikeButton() {
      log.info("【屏蔽】点赞");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-player-digg"])',
          '.basePlayerContainer div[aria-describedby]:has([data-e2e="video-player-digg"])'
        ),
      ];
    },
    shieldCommentButton() {
      log.info("【屏蔽】评论");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="feed-comment-icon"])',
          '.basePlayerContainer div[aria-describedby]:has([data-e2e="feed-comment-icon"])'
        ),
      ];
    },
    shieldCollectionButton() {
      log.info("【屏蔽】收藏");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-player-collect"])',
          '.basePlayerContainer div[data-e2e="video-player-collect"][data-e2e-state="video-player-no-collect"]'
        ),
      ];
    },
    shieldSharenButton() {
      log.info("【屏蔽】分享");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-player-share"])',
          '.basePlayerContainer div:has(>div[data-e2e="video-player-share"])'
        ),
      ];
    },
    shieldListenDouYinButton() {
      log.info("【屏蔽】听抖音");
      return [
        CommonUtil.addBlockCSS(
          '.basePlayerContainer div[aria-describedby]:has(path[d="M9.68718 12.4801C8.612 14.3927 8.1197 16.7374 8.05821 19.0767C8.23942 18.9661 8.4351 18.8725 8.64383 18.7988L9.16952 18.6132C10.7699 18.0482 12.5315 18.8701 13.1042 20.4491L15.3865 26.7417C15.9591 28.3206 15.126 30.0586 13.5257 30.6236L13 30.8092C11.4155 31.3686 9.85676 30.6485 8.86663 29.2939C8.83318 29.2583 8.80192 29.22 8.7732 29.1788C7.33136 27.1149 6.42117 24.618 6.13186 21.9841C5.75876 18.5873 6.12658 14.6403 7.8929 11.4983C9.70099 8.28189 12.9317 6 17.9885 6C23.0436 6 26.2778 8.27305 28.092 11.4819C29.8643 14.6168 30.2393 18.557 29.8725 21.9536C29.5881 24.5883 28.6825 27.0875 27.2445 29.155C27.2194 29.1911 27.1924 29.2251 27.1636 29.2569C26.1749 30.6354 24.6023 31.3737 23.0035 30.8092L22.4778 30.6236C20.8774 30.0586 20.0443 28.3206 20.617 26.7417L22.8993 20.4491C23.472 18.8701 25.2335 18.0482 26.8339 18.6132L27.3596 18.7988C27.5669 18.8719 27.7613 18.9648 27.9415 19.0744C27.8783 16.7301 27.382 14.3817 26.3001 12.468C24.846 9.89593 22.2949 8.02429 17.9885 8.02428C13.684 8.02428 11.1369 9.90129 9.68718 12.4801Z"])'
        ),
      ];
    },
    shieldRelatedRecommendationsButton() {
      log.info("【屏蔽】看相关");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])',
          'div.dy-tip-container:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])',
          '.basePlayerContainer div[aria-describedby]:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])',
          '.basePlayerContainer div[aria-describedby]:has(path[d="M14 8a8 8 0 0 0-8 8v4a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8v-4a8 8 0 0 0-8-8h-8zm8.5 10.866a1 1 0 0 0 0-1.732l-6-3.464a1 1 0 0 0-1.5.866v6.928a1 1 0 0 0 1.5.866l6-3.464z"])',
          '.basePlayerContainer div[aria-describedby]:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])'
        ),
        addStyle(
          `
				/* 修复分享的悬浮框距离底部的高度 */
				[data-e2e="video-player-share"]+div[data-e2e="video-share-container"] > div:first-child{
					bottom: 0px !important;
				}
			`
        ),
      ];
    },
    shieldMoreButton() {
      log.info("【屏蔽】更多");
      return [
        CommonUtil.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-play-more"])',
          '.basePlayerContainer div[data-e2e="video-play-more"]',
          '[data-e2e="feed-live"] [data-e2e="basicPlayer"] > div:has(svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"])'
        ),
        addStyle(
          `
				/* 修复分享的悬浮框距离底部的高度 */
				[data-e2e="video-player-share"]+div[data-e2e="video-share-container"] > div:first-child{
					bottom: 0px !important;
				}
			`
        ),
      ];
    },
  };
  const DouYinVideoBlock = {
    init() {
      Panel.execMenuOnce("shieldRightExpandCommentButton", () => {
        return this.shieldRightExpandCommentButton();
      });
      Panel.execMenuOnce(
        "shieldSearchFloatingBar",
        () => {
          return this.shieldSearchFloatingBar();
        },
        void 0,
        true
      );
      Panel.execMenuOnce(
        "shieldCloseFullScreenButton",
        () => {
          return this.shieldCloseFullScreenButton();
        },
        void 0,
        true
      );
      Panel.execMenuOnce("dy-video-blockShopInfo", () => {
        return this.blockShopInfo();
      });
      DouYinVideoBlock_BottomToolbar_videoInfo.init();
      DouYinVideoBlock_BottomToolbar_PlayerComponents.init();
      DouYinVideoBlock_RightToolbar.init();
      DouYinVideoBlock_Comment.init();
      DouYinVideoBlock_Live.init();
    },
    shieldRightExpandCommentButton() {
      log.info("【屏蔽】右侧的展开评论按钮");
      return [
        CommonUtil.addBlockCSS(
          '#sliderVideo[data-e2e="feed-active-video"] > div > div > button[type="button"]',
          '.playerContainer button[type=button] svg > g[filter] > path[d="M21.316 29.73a1.393 1.393 0 01-1.97 0l-5.056-5.055a1.393 1.393 0 010-1.97l.012-.011 5.044-5.045a1.393 1.393 0 011.97 1.97l-4.07 4.071 4.07 4.071a1.393 1.393 0 010 1.97z"]'
        ),
        addStyle(
          `
			.basePlayerContainer .positionBox{
				padding-right: 20px !important;
			}`
        ),
      ];
    },
    shieldSearchFloatingBar() {
      log.info("【屏蔽】搜索悬浮栏");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          "#slideMode + div",
          '.playerContainer .slider-video>div>div:has([data-e2e="searchbar-button"])'
        )
      );
      if (DouYinRouter.isSearch() || DouYinRouter.isDiscover()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-right-container > div > div > div > div:has( div> input[data-e2e="searchbar-input"])'
          )
        );
      }
      if (DouYinRouter.isUser()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-right-container > div > div > div > div:has( div> input[data-e2e="searchbar-input"])'
          )
        );
      }
      if (DouYinRouter.isVideo()) {
        result.push(
          CommonUtil.addBlockCSS(
            '[data-e2e="video-detail"] .video-detail-container > div > div > div:nth-child(2):has( div> input[data-e2e="searchbar-input"])'
          )
        );
      }
      return result;
    },
    shieldCloseFullScreenButton() {
      log.info("【屏蔽】网页全屏关闭按钮");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(
          '.playerContainer .slider-video > div > div:has(path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
        )
      );
      if (DouYinRouter.isSearch() || DouYinRouter.isDiscover()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-right-container  div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
          )
        );
      }
      if (DouYinRouter.isUser()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-right-container  div > div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
          )
        );
      }
      if (DouYinRouter.isVideo()) {
        result.push(
          CommonUtil.addBlockCSS(
            '#douyin-right-container  div > div > div:has( > svg > path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
          )
        );
      }
      return result;
    },
    blockShopInfo() {
      log.info(`【屏蔽】购物信息`);
      return CommonUtil.addBlockCSS(`.xgplayer-shop-anchor`);
    },
  };
  class ShortCut {
    key = "short-cut";
    $data;
    isWaitPress = false;
    currentWaitEnterPressInstanceHandler = null;
    constructor(key) {
      if (typeof key === "string") {
        this.key = key;
      }
      this.$data = {
        otherShortCutOptions: [],
      };
    }
    initConfig(key, option) {
      if (this.hasOption(key));
      else {
        this.setOption(key, option);
      }
    }
    getStorageKey() {
      return this.key;
    }
    getLocalAllOptions() {
      return _GM_getValue(this.key, []);
    }
    hasOption(key) {
      let localOptions = this.getLocalAllOptions();
      let findOption = localOptions.find((item) => item.key === key);
      return !!findOption;
    }
    hasOptionValue(key) {
      if (this.hasOption(key)) {
        let option = this.getOption(key);
        return !(option?.value == null);
      } else {
        return false;
      }
    }
    getOption(key, defaultValue) {
      let localOptions = this.getLocalAllOptions();
      let findOption = localOptions.find((item) => item.key === key);
      return findOption ?? defaultValue;
    }
    setOption(key, value) {
      let localOptions = this.getLocalAllOptions();
      let findIndex = localOptions.findIndex((item) => item.key === key);
      if (findIndex == -1) {
        localOptions.push({
          key,
          value,
        });
      } else {
        Reflect.set(localOptions[findIndex], "value", value);
      }
      _GM_setValue(this.key, localOptions);
    }
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
    translateKeyboardValueToButtonText(keyboardValue) {
      let result = "";
      keyboardValue.ohterCodeList.forEach((ohterCodeKey) => {
        result += utils.stringTitleToUpperCase(ohterCodeKey, true) + " + ";
      });
      result += utils.stringTitleToUpperCase(keyboardValue.keyName);
      return result;
    }
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
    async enterShortcutKeys(key) {
      const that = this;
      return new Promise((resolve) => {
        this.isWaitPress = true;
        let keyboardListener = domUtils.listenKeyboard(window, "keyup", (keyName, keyValue, ohterCodeList) => {
          const currentOption = {
            keyName,
            keyValue,
            ohterCodeList,
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
                  option: currentOption,
                };
                return;
              }
            }
            this.setOption(key, currentOption);
            result = {
              status: true,
              key,
              option: currentOption,
            };
          } catch (error) {
            console.log(error);
            result = {
              status: false,
              key,
              option: currentOption,
            };
          } finally {
            that.isWaitPress = false;
            keyboardListener.removeListen();
            that.currentWaitEnterPressInstanceHandler = null;
            resolve(result);
          }
        });
        that.currentWaitEnterPressInstanceHandler = null;
        that.currentWaitEnterPressInstanceHandler = () => {
          that.isWaitPress = false;
          keyboardListener.removeListen();
        };
      });
    }
    cancelEnterShortcutKeys() {
      if (typeof this.currentWaitEnterPressInstanceHandler === "function") {
        this.currentWaitEnterPressInstanceHandler();
      }
    }
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
            if (config?.isPrevent) {
              domUtils.preventEvent(event);
            }
            localOptions = that.getLocalAllOptions();
            let findShortcutIndex = localOptions.findIndex((item) => {
              let option2 = item.value;
              let tempOption = {
                keyName,
                keyValue,
                ohterCodeList,
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
            capture: Boolean(config?.capture),
          }
        );
      }
      let WindowShortCutOption = {};
      let ElementShortCutOption = {};
      Object.keys(shortCutOption).forEach((localKey) => {
        let option = shortCutOption[localKey];
        if (option.target == null || (typeof option.target === "string" && option.target === "")) {
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
            domUtils.waitNode(option.target, 1e4).then(($ele) => {
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
  const DouYinVideoPlayerShortCut = {
    shortCut: new ShortCut("video-short-cut"),
    $data: {
      rateMap: ["0.75", "1", "1.25", "1.5", "1.75", "2", "3"],
    },
    init() {
      this.shortCut.initGlobalKeyboardListener(this.shorCutMapOption(), {
        capture: true,
      });
    },
    shorCutMapOption() {
      return {
        "dy-video-rate-low": {
          callback() {
            log.info("触发快捷键 ==> 调用倍速：小");
            let currentRate = _unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
            let findIndex = DouYinVideoPlayerShortCut.$data.rateMap.findIndex((rate) => {
              return rate === currentRate;
            });
            if (findIndex === 0) {
              log.warn("触发快捷键 ==> 已是最小倍速: " + currentRate);
              return;
            }
            let prevRate = DouYinVideoPlayerShortCut.$data.rateMap[findIndex - 1];
            log.info("触发快捷键 ==> 设置倍速: " + prevRate);
            DouYinVideoPlayer.chooseVideoRate(prevRate);
          },
        },
        "dy-video-rate-up": {
          callback() {
            log.info("触发快捷键 ==> 调用倍速：大");
            let currentRate = _unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
            let findIndex = DouYinVideoPlayerShortCut.$data.rateMap.findIndex((rate) => {
              return rate === currentRate;
            });
            if (findIndex === DouYinVideoPlayerShortCut.$data.rateMap.length - 1) {
              log.warn("触发快捷键 ==> 已是最大倍速: " + currentRate);
              return;
            }
            let nextRate = DouYinVideoPlayerShortCut.$data.rateMap[findIndex + 1];
            log.info("触发快捷键 ==> 设置倍速: " + nextRate);
            DouYinVideoPlayer.chooseVideoRate(nextRate);
          },
        },
        "dy-video-shortcut-immersionMode": {
          callback() {
            log.info("触发快捷键 ==> 沉浸模式");
            let value = Panel.getValue("fullScreen");
            Panel.setValue("fullScreen", !value);
            Panel.execMenuOnce("fullScreen", () => {
              return DouYinVideoPlayer.fullScreen();
            });
          },
        },
        "dy-video-shortcut-changeVideoMuted": {
          callback() {
            log.info(`触发快捷键 ==> 切换静音状态`);
            const $videos = $$("video[src]");
            $videos.forEach(($video) => {
              if (utils.isNull($video.src)) return;
              let muted = !$video.muted;
              log.success(`切换video标签的静音状态为 ${muted}`);
              $video.muted = muted;
            });
          },
        },
        "dy-video-shortcut-parseVideo": {
          callback() {
            log.info(`触发快捷键 ==> 视频解析`);
            function getElementVisiblePercentage($el) {
              const rect = $el.getBoundingClientRect();
              const viewportWidth = window.innerWidth;
              const viewportHeight = window.innerHeight;
              const visibleLeft = Math.max(0, rect.left);
              const visibleTop = Math.max(0, rect.top);
              const visibleRight = Math.min(viewportWidth, rect.right);
              const visibleBottom = Math.min(viewportHeight, rect.bottom);
              const visibleWidth = Math.max(0, visibleRight - visibleLeft);
              const visibleHeight = Math.max(0, visibleBottom - visibleTop);
              const elementArea = rect.width * rect.height;
              const visibleArea = visibleWidth * visibleHeight;
              if (elementArea === 0) {
                return {
                  percentage: 0,
                  horizontal: 0,
                  vertical: 0,
                };
              }
              const percentage = (visibleArea / elementArea) * 100;
              const horizontalPercentage = (visibleWidth / rect.width) * 100;
              const verticalPercentage = (visibleHeight / rect.height) * 100;
              return {
                percentage: Math.round(percentage * 100) / 100,

                horizontal: Math.round(horizontalPercentage * 100) / 100,
                vertical: Math.round(verticalPercentage * 100) / 100,
              };
            }
            const $videos = $$("video");
            const videosInViewData = $videos
              .map(($video2) => {
                if (utils.isNull($video2.src) && utils.isNull($video2.currentSrc) && utils.isNull($video2.srcObject))
                  return;
                const visiblePercent = getElementVisiblePercentage($video2);
                if (visiblePercent.percentage <= 0) return;
                return {
                  $el: $video2,
                  percentage: visiblePercent.percentage,
                };
              })
              .filter((it) => it != null);
            utils.sortListByProperty(videosInViewData, (it) => it.percentage);
            if (!videosInViewData.length) {
              Qmsg.error("未找到在可视区域内的视频");
              return;
            }
            const $video = videosInViewData[0].$el;
            log.info(`当前在可视区域内占据面积最大的视频是：`, $video);
            DouYinVideoPlayer.hookDownloadButtonToParseVideo($video);
          },
        },
        "dy-video-shortcut-playbackRate": {
          callback() {
            log.info("触发快捷键 ==> 倍速播放");
            let enable = Boolean(Panel.getValue("dy-video-playbackrate"));
            enable = !enable;
            if (enable) {
              const rate = Panel.getValue("dy-video-playbackrate-select-value");
              Qmsg.success("开启倍速：" + rate);
            } else {
              Qmsg.info("关闭倍速");
            }
            Panel.setValue("dy-video-playbackrate", enable);
          },
        },
      };
    },
  };
  class GestureBack {
    isBacking = false;
    config;
    constructor(config) {
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
    popStateEvent(event) {
      domUtils.preventEvent(event);
      if (this.isBacking) {
        return;
      }
      this.quitGestureBackMode(true);
    }
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
        pushUrl =
          this.config.win.location.origin +
          this.config.win.location.pathname +
          this.config.win.location.search +
          pushUrl;
      }
      this.config.win.history.pushState({}, "", pushUrl);
      log.success("监听popstate事件");
      domUtils.on(this.config.win, "popstate", this.popStateEvent, {
        capture: true,
      });
    }
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
          await Utils.sleep(this.config.backDelayTime || 150);
        } else {
          break;
        }
      }
      log.success("移除popstate事件");
      domUtils.off(this.config.win, "popstate", this.popStateEvent, {
        capture: true,
      });
      this.isBacking = false;
      if (typeof this.config.afterHistoryBackCallBack === "function") {
        this.config.afterHistoryBackCallBack(isUrlChange);
      }
    }
  }
  const DouYinGestureBackHashConfig = {
    videoCommentDrawer: "videoCommentDrawer",
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
    },
  };
  const DouYinVideoPlayerBlockMouseHoverTip_RightToolBar = {
    init() {
      Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-enterUserHome", () => {
        return this.blockEnterUserHomeMouseHoverTip();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-follow", () => {
        return this.blockFollowMouseHoverTip();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-addLike", () => {
        return this.blockAddLikeMouseHoverTip();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-comment", () => {
        return this.blockCommentMouseHoverTip();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-collect", () => {
        return this.blockCollectMouseHoverTip();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-share", () => {
        return this.blockShareMouseHoverTip();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-seeCorrelation", () => {
        return this.blockSeeCorrelationMouseHoverTip();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-rightToolBar-more", () => {
        return this.blockMoreMouseHoverTip();
      });
    },
    blockEnterUserHomeMouseHoverTip() {
      log.info(`禁用进入作者主页按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(` div > div:has( >a[data-e2e="video-avatar"]) + .semi-portal`);
    },
    blockFollowMouseHoverTip() {
      log.info(`禁用关注按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`div[data-e2e="feed-follow-icon"]  .semi-portal`);
    },
    blockAddLikeMouseHoverTip() {
      log.info(`禁用点赞按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`div[data-e2e="video-player-digg"] + .semi-portal`);
    },
    blockCommentMouseHoverTip() {
      log.info(`禁用评论按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`div[data-e2e="feed-comment-icon"] + .semi-portal`);
    },
    blockCollectMouseHoverTip() {
      log.info(`禁用收藏按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`div[data-e2e="video-player-collect"] + .semi-always-dark`);
    },
    blockShareMouseHoverTip() {
      log.info(`禁用分享按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`div[data-e2e="video-share-container"]`);
    },
    blockSeeCorrelationMouseHoverTip() {
      log.info(`禁用看相关推荐按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`div:has(+[data-e2e="video-play-more"]) .semi-portal`);
    },
    blockMoreMouseHoverTip() {
      log.info(`禁用更多按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`[data-e2e="video-play-more"] > div:has([data-e2e="more-music-detail"])`);
    },
  };
  const DouYinVideoPlayerBlockMouseHoverTip_BottomToolBar = {
    init() {
      Panel.execMenuOnce("dy-video-mouseHoverTip-bottomToolBar-automaticBroadcast", () => {
        return this.blockAutomaticBroadcast();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-bottomToolBar-clearScreen", () => {
        return this.blockClearScreenMouseHoverTip();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-bottomToolBar-watchLater", () => {
        return this.blockWatchLaterMouseHoverTip();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-bottomToolBar-pageFullScreen", () => {
        return this.blockPageFullScreenMouseHoverTip();
      });
      Panel.execMenuOnce("dy-video-mouseHoverTip-bottomToolBar-fullScreen", () => {
        return this.blockFullScreenMouseHoverTip();
      });
    },
    blockAutomaticBroadcast() {
      log.info(`禁用自动连播按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`div[data-e2e="video-player-auto-play"] + .xgTips`);
    },
    blockClearScreenMouseHoverTip() {
      log.info(`禁用清屏按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`.xgplayer-immersive-switch-setting .xgTips`);
    },
    blockWatchLaterMouseHoverTip() {
      log.info(`禁用稍后再看按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`.xgplayer-watch-later .xgTips`, `.xgplayer-watch-later-item + .xgTips`);
    },
    blockPageFullScreenMouseHoverTip() {
      log.info(`禁用网页全屏按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`.xgplayer-page-full-screen .xgTips`);
    },
    blockFullScreenMouseHoverTip() {
      log.info(`禁用全屏按钮的悬浮提示`);
      return CommonUtil.addBlockCSS(`.xgplayer-fullscreen .xg-tips`);
    },
  };
  const DouYinVideoElementAutoHide = (delayTimeKey, selectors) => {
    let isInjectAttrName = "data-is-inject-mouse-hide";
    let opacityShowAttrName = "data-opacity-show";
    let opacityHideAttrName = "data-opacity-hide";
    let delayTime = () => Panel.getValue(delayTimeKey);
    const styleCSS = (__delayTime__ = delayTime()) => {
      if (__delayTime__ === 0) {
        return `
            ${selectors.join(",")}{
                opacity: 0 !important;
                
                &:hover,
                &[${opacityShowAttrName}]{
                    opacity: 1 !important;
                }
                ${__delayTime__ === 0 ? "transition: none !important;" : ""}
            }
            `;
      } else {
        return `
            ${selectors.join(",")}{
                &[${opacityHideAttrName}]{
                    opacity: 0 !important;
                }
                &:hover{
                    opacity: 1 !important;
                }
            }
            `;
      }
    };
    const $style = addStyle(styleCSS());
    const listenerId = Panel.addValueChangeListener(delayTimeKey, (key, oldValue, newValue) => {
      domUtils.html($style, styleCSS(newValue));
    });
    const lockFn = new utils.LockFunction(() => {
      selectors.forEach((selector) => {
        let $el = $(`${selector}:not([${isInjectAttrName}])`);
        if (!$el) {
          return;
        }
        $el.setAttribute(isInjectAttrName, "");
        let timeId = 0;
        domUtils.on($el, ["mouseenter", "touchstart"], (event) => {
          clearTimeout(timeId);
          if (delayTime() === 0) {
            $el.setAttribute(opacityShowAttrName, "");
          } else {
            $el.removeAttribute(opacityHideAttrName);
          }
        });
        domUtils.on($el, ["mouseleave", "touchend"], (event) => {
          if (delayTime() === 0) {
            $el.removeAttribute(opacityShowAttrName);
          } else {
            $el.setAttribute(opacityHideAttrName, "");
          }
        });
        if (delayTime() === 0);
        else {
          timeId = setTimeout(() => {
            $el.setAttribute(opacityHideAttrName, "");
          }, delayTime());
        }
      });
    });
    const observer = utils.mutationObserver(document, {
      config: {
        subtree: true,
        childList: true,
      },
      immediate: true,
      callback: (mutation, observer2) => {
        lockFn.run();
      },
    });
    return [
      () => {
        Panel.removeValueChangeListener(listenerId);
        observer?.disconnect();
      },
      $style,
    ];
  };
  const ReactUtils = {
    async waitReactPropsToSet($el, reactPropNameOrNameList, checkOption) {
      if (!Array.isArray(reactPropNameOrNameList)) {
        reactPropNameOrNameList = [reactPropNameOrNameList];
      }
      if (!Array.isArray(checkOption)) {
        checkOption = [checkOption];
      }
      function getTarget() {
        let __target__ = null;
        if (typeof $el === "string") {
          __target__ = domUtils.selector($el);
        } else if (typeof $el === "function") {
          __target__ = $el();
        } else if ($el instanceof HTMLElement) {
          __target__ = $el;
        }
        return __target__;
      }
      if (typeof $el === "string") {
        let $ele = await domUtils.waitNode($el, 1e4);
        if (!$ele) {
          return;
        }
      }
      checkOption.forEach((needSetOption) => {
        if (typeof needSetOption.msg === "string") {
          log.info(needSetOption.msg);
        }
        function checkTarget() {
          let $targetEl = getTarget();
          if ($targetEl == null) {
            return {
              status: false,
              isTimeout: true,
              inst: null,
              $el: $targetEl,
            };
          }
          let reactInst = utils.getReactInstance($targetEl);
          if (reactInst == null) {
            return {
              status: false,
              isTimeout: false,
              inst: null,
              $el: $targetEl,
            };
          }
          let findPropNameIndex = Array.from(reactPropNameOrNameList).findIndex((__propName__) => {
            let reactPropInst2 = reactInst[__propName__];
            if (!reactPropInst2) {
              return false;
            }
            let checkResult = needSetOption.check(reactPropInst2, $targetEl);
            checkResult = Boolean(checkResult);
            return checkResult;
          });
          let reactPropName = reactPropNameOrNameList[findPropNameIndex];
          let reactPropInst = reactInst[reactPropName];
          return {
            status: findPropNameIndex !== -1,
            isTimeout: false,
            inst: reactPropInst,
            $el: $targetEl,
          };
        }
        utils
          .waitPropertyByInterval(
            () => {
              return getTarget();
            },
            () => checkTarget().status,
            250,
            1e4
          )
          .then(() => {
            let checkTargetResult = checkTarget();
            if (checkTargetResult.status) {
              let reactInst = checkTargetResult.inst;
              needSetOption.set(reactInst, checkTargetResult.$el);
            } else {
              if (typeof needSetOption.failWait === "function") {
                needSetOption.failWait(checkTargetResult.isTimeout);
              }
            }
          });
      });
    },
  };
  class DouYinVideoFilterBase {
    $data = {
      dislike_request_queue: [],
    };
    parseAwemeInfoDictData(awemeInfo, showLog = false) {
      let authorInfo = awemeInfo?.["authorInfo"] || awemeInfo?.["author"];
      let nickname = authorInfo?.["nickname"]?.toString();
      let uid = authorInfo?.["uid"]?.toString();
      let desc = awemeInfo?.["desc"]?.toString();
      let musicAlbum = awemeInfo?.["music"]?.["album"];
      let musicAuthor = awemeInfo?.["music"]?.["author"];
      let musicTitle = awemeInfo?.["music"]?.["title"];
      let collectCount = awemeInfo?.["stats"]?.["collectCount"] || awemeInfo?.["statistics"]?.["collect_count"];
      let commentCount = awemeInfo?.["stats"]?.["commentCount"] || awemeInfo?.["statistics"]?.["comment_count"];
      let diggCount = awemeInfo?.["stats"]?.["diggCount"] || awemeInfo?.["statistics"]?.["digg_count"];
      let shareCount = awemeInfo?.["stats"]?.["shareCount"] || awemeInfo?.["statistics"]?.["share_count"];
      let duration = awemeInfo?.["video"]?.["duration"];
      let textExtraInstance = awemeInfo?.["textExtra"] || awemeInfo?.["text_extra"];
      let textExtra = [];
      let isLive = false;
      let isAds = false;
      let isSeriesInfo = false;
      let isMixInfo = false;
      let riskInfoContent = awemeInfo?.["riskInfos"]?.content || awemeInfo?.["risk_infos"]?.content;
      let seriesInfoName = void 0;
      let seriesInfoContentTypes = [];
      let isPicture = awemeInfo?.["aweme_type"] === 68;
      if (typeof textExtraInstance === "object" && Array.isArray(textExtraInstance)) {
        textExtraInstance?.forEach((item) => {
          let tagName = item?.["hashtagName"] || item?.["hashtag_name"];
          if (typeof tagName === "string" && tagName.trim() != "") {
            textExtra.push(tagName);
          }
        });
      }
      let mixInfoName = void 0;
      let mixInfoDesc = void 0;
      let videoTagInstance = awemeInfo?.["videoTag"] || awemeInfo?.["video_tag"];
      let videoTag = [];
      let videoTagId = [];
      let awemeId = awemeInfo?.["aweme_id"] || awemeInfo?.["awemeId"];
      let liveStreamRoomId = void 0;
      let liveStreamRoomTitle = void 0;
      let liveStreamNickName = void 0;
      let liveStreamRoomUserCount = void 0;
      let liveStreamRoomDynamicSpliceLabel = void 0;
      let videoBitRateList = [];
      let isProduct = false;
      let productId = void 0;
      let productTitle = void 0;
      if (typeof videoTagInstance === "object" && Array.isArray(videoTagInstance)) {
        videoTagInstance.forEach((item) => {
          let tagName = item?.["tagName"] || item?.["tag_name"];
          let tagId = item?.["tagId"] || item?.["tag_id"];
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
      const cell_room = awemeInfo?.["cellRoom"] || awemeInfo?.["cell_room"];
      if (typeof cell_room === "object" && cell_room != null) {
        isLive = true;
        if (showLog) {
          log.success("直播间：cellRoom is not null");
        }
        let rawDataJSON = cell_room["rawdata"];
        if (typeof rawDataJSON === "string") {
          rawDataJSON = utils.toJSON(rawDataJSON);
        }
        if (typeof rawDataJSON === "object" && rawDataJSON != null) {
          liveStreamRoomId = rawDataJSON?.["owner"]?.["web_rid"];
          liveStreamRoomTitle = rawDataJSON?.["title"];
          liveStreamNickName = rawDataJSON?.["owner"]?.["nickname"];
          liveStreamRoomUserCount = rawDataJSON?.["user_count"];
          liveStreamRoomDynamicSpliceLabel = rawDataJSON?.["dynamic_label"]?.["splice_label"]?.["text"];
          if (typeof liveStreamRoomId !== "string") {
            liveStreamRoomId = void 0;
          }
          if (typeof liveStreamRoomTitle !== "string") {
            liveStreamRoomTitle = void 0;
          }
          if (typeof liveStreamNickName !== "string") {
            liveStreamNickName = void 0;
          }
          if (typeof liveStreamRoomUserCount !== "number") {
            liveStreamRoomUserCount = void 0;
          }
          if (typeof liveStreamRoomDynamicSpliceLabel !== "string") {
            liveStreamRoomDynamicSpliceLabel = void 0;
          }
        }
      }
      isAds = [
        () => {
          if (awemeInfo["isAds"] || awemeInfo["is_ads"]) {
            showLog && log.success("广告：isAds is true");
            return true;
          }
        },
        () => {
          if (
            (typeof awemeInfo["rawAdData"] === "string" && utils.isNotNull(awemeInfo["rawAdData"])) ||
            (typeof awemeInfo["raw_ad_data"] === "string" && utils.isNotNull(awemeInfo["raw_ad_data"]))
          ) {
            showLog && log.success("广告：rawAdData is not null");
            return true;
          }
        },
        () => {
          if (awemeInfo["webRawData"]) {
            if (awemeInfo["webRawData"]?.["brandAd"]?.["is_ad"]) {
              showLog && log.success("广告：webRawData.brandAd.is_ad is 1");
              return true;
            }
            if (awemeInfo["webRawData"]?.["insertInfo"]?.["is_ad"]) {
              showLog && log.success("广告：webRawData.insertInfo.is_ad is true");
              return true;
            }
          }
        },
        () => {
          if (typeof awemeInfo?.["web_raw_data"] === "string") {
            const webRawData = utils.toJSON(awemeInfo["web_raw_data"]);
            if (typeof webRawData?.["brand_ad"] === "string") {
              const brandAd = utils.toJSON(webRawData["brand_ad"]);
              if (brandAd?.["is_ad"]) {
                showLog && log.success("广告：web_raw_data.brand_ad.is_ad is 1");
                return true;
              }
            }
          }
        },
      ].some((it) => it());
      if (
        (typeof riskInfoContent === "string" && riskInfoContent.trim() === "") ||
        typeof riskInfoContent !== "string"
      ) {
        riskInfoContent = void 0;
      }
      let series_info = awemeInfo?.["seriesInfo"] || awemeInfo?.["series_info"];
      if (typeof series_info === "object" && series_info != null) {
        isSeriesInfo = true;
        seriesInfoName = series_info?.["seriesName"] || series_info?.["series_name"];
        let series_content_types = series_info?.["seriesContentTypes"] || series_info?.["series_content_types"];
        if (Array.isArray(series_content_types)) {
          series_content_types.forEach((it) => {
            let seriesInfoName2 = it["name"];
            seriesInfoContentTypes.push(seriesInfoName2);
          });
        }
      }
      let mixInfo = awemeInfo?.["mixInfo"] || awemeInfo?.["mix_info"];
      if (typeof mixInfo === "object" && utils.isNotNull(mixInfo)) {
        mixInfoName = mixInfo?.["mixName"] || mixInfo?.["mix_name"];
        mixInfoDesc = mixInfo?.["desc"];
      }
      if (isPicture) {
        duration = void 0;
      }
      let suggestWord = [];
      let suggestWords =
        awemeInfo?.["suggest_words"] || awemeInfo?.["suggest_words"]?.["suggest_words"] || awemeInfo?.["suggestWords"];
      if (Array.isArray(suggestWords)) {
        suggestWords.forEach((suggestWordItem) => {
          let words = suggestWordItem?.["words"];
          if (Array.isArray(words)) {
            words.forEach((wordItem) => {
              let word = wordItem?.["word"];
              if (typeof word === "string" && word.trim() !== "") {
                suggestWord.push(word);
              }
            });
          }
        });
      }
      suggestWord = [...new Set(suggestWord)];
      let authorAccountCertInfo = "";
      let authorAccountCertInfoInsStr = awemeInfo?.["author"]?.["account_cert_info"];
      if (typeof authorAccountCertInfoInsStr === "string") {
        let authorAccountCertInfoJSON = utils.toJSON(authorAccountCertInfoInsStr);
        if (typeof authorAccountCertInfoJSON["label_text"] === "string") {
          authorAccountCertInfo = authorAccountCertInfoJSON["label_text"];
        }
      } else {
        if (typeof awemeInfo?.["authorInfo"]?.["accountCertInfo"]?.["labelText"] === "string") {
          authorAccountCertInfo = awemeInfo?.["authorInfo"]?.["accountCertInfo"]?.["labelText"];
        }
      }
      let authorCustomVerify =
        awemeInfo?.["author"]?.["custom_verify"] || awemeInfo?.["authorInfo"]?.["customVerify"] || "";
      let authorEnterpriseVerifyReason =
        awemeInfo?.["author"]?.["enterprise_verify_reason"] ||
        awemeInfo?.["authorInfo"]?.["enterpriseVerifyReason"] ||
        "";
      const entertainmentProductInfo =
        awemeInfo?.["entertainmentProductInfo"] || awemeInfo?.["entertainment_product_info"];
      if (typeof entertainmentProductInfo === "object" && entertainmentProductInfo != null) {
        if (typeof entertainmentProductInfo.product_id === "number") {
          productId = entertainmentProductInfo.product_id.toString();
        }
        if (typeof entertainmentProductInfo.title === "string") {
          productTitle = entertainmentProductInfo.title;
        }
        if (
          typeof entertainmentProductInfo?.["buy_schema"] === "string" ||
          typeof entertainmentProductInfo?.["buy_panel_schema"] === "string"
        ) {
          isProduct = true;
        }
      }
      const videoBitRateListData = awemeInfo?.["video"]?.["bitRateList"] || awemeInfo?.["video"]?.["bit_rate"];
      if (Array.isArray(videoBitRateListData)) {
        videoBitRateListData.forEach((item) => {
          const videoBitRateListItem = {};
          const bitRate = item?.["bitRate"] || item?.["bit_rate"];
          if (typeof bitRate === "number") {
            videoBitRateListItem["bitRate"] = bitRate;
          }
          const dataSize = item?.["dataSize"] || item?.["play_addr"]?.["data_size"];
          if (typeof dataSize === "number") {
            videoBitRateListItem["dataSize"] = dataSize;
          }
          const format = item?.["format"];
          if (typeof format === "string") {
            videoBitRateListItem["format"] = format;
          }
          const isH265 = item?.["isH265"] || item?.["is_h265"];
          if (typeof isH265 === "number") {
            videoBitRateListItem["isH265"] = isH265;
          }
          const fps = item?.["fps"] || item?.["FPS"];
          if (typeof fps === "number") {
            videoBitRateListItem["fps"] = fps;
          }
          const gearName = item?.["gearName"] || item?.["gear_name"];
          if (typeof gearName === "string") {
            videoBitRateListItem["gearName"] = gearName;
          }
          const qualityType = item?.["qualityType"] || item?.["quality_type"];
          if (typeof qualityType === "number") {
            videoBitRateListItem["qualityType"] = qualityType;
          }
          const width = item?.["width"] || item?.["play_addr"]?.["width"];
          if (typeof width === "number") {
            videoBitRateListItem["width"] = width;
          }
          const height = item?.["height"] || item?.["play_addr"]?.["height"];
          if (typeof height === "number") {
            videoBitRateListItem["height"] = height;
          }
          videoBitRateList.push(videoBitRateListItem);
        });
        videoBitRateList = [...new Set(videoBitRateList)];
      }
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
        liveStreamRoomId,
        liveStreamRoomTitle,
        liveStreamNickName,
        liveStreamRoomUserCount,
        liveStreamRoomDynamicSpliceLabel,
        videoBitRateList,
        productId,
        productTitle,
        isLive,
        isAds,
        isSeriesInfo,
        isMixInfo,
        isPicture,
        isProduct,
      };
    }
    async checkFilterWithRule(config, ruleDynamicOption) {
      if (config.videoInfoValue == null) {
        return false;
      }
      if (config.ruleValue == null) {
        return false;
      }
      const isFunctionHandler = Boolean(ruleDynamicOption.isFunctionHandler);
      if (isFunctionHandler && typeof config.ruleValue === "string") {
        const handlerFunction = utils.createFunction("data", ruleDynamicOption.ruleValue, true).bind({
          utils,
          DOMUtils,
          httpx,
          Qmsg,
          pops: __pops__,
          log,
          window,
          unsafeWindow: _unsafeWindow,
        });
        let handlerResult = await handlerFunction({
          ruleKey: config.ruleKey,
          transformAwemeInfo: config.transformAwemeInfo,
        });
        if (typeof handlerResult !== "boolean") {
          log.error(config, ruleDynamicOption);
          throw new Error("过滤器规则：函数返回值必须是true或false");
        }
        return handlerResult;
      }
      if (typeof config.videoInfoValue === "string") {
        if (Boolean(config.videoInfoValue.match(config.ruleValue))) {
          return true;
        }
      } else if (typeof config.videoInfoValue === "object") {
        if (Array.isArray(config.videoInfoValue)) {
          let findValue = config.videoInfoValue.find((awemeInfoDictValue) => {
            if (typeof awemeInfoDictValue === "string" && config.ruleValue != null) {
              return Boolean(awemeInfoDictValue.match(config.ruleValue));
            } else {
              return false;
            }
          });
          if (findValue) {
            return true;
          }
        }
      } else if (typeof config.videoInfoValue === "number") {
        if (typeof config.ruleValue === "string") {
          let ruleValue = config.ruleValue.trim();
          let compareNumberMatch = ruleValue.match(/(\d+)/);
          if (!compareNumberMatch) {
            log.warn("过滤器-解析比较大小的数字失败: ", config);
            return false;
          }
          let compareNumber = Number(compareNumberMatch[1]);
          if (ruleValue.startsWith(">")) {
            if (ruleValue.startsWith(">=")) {
              if (config.videoInfoValue >= compareNumber) {
                return true;
              }
            } else {
              if (config.videoInfoValue > compareNumber) {
                return true;
              }
            }
          } else if (ruleValue.startsWith("<")) {
            if (ruleValue.startsWith("<=")) {
              if (config.videoInfoValue <= compareNumber) {
                return true;
              }
            } else {
              if (config.videoInfoValue < compareNumber) {
                return true;
              }
            }
          } else if (ruleValue.startsWith("=")) {
            if (config.videoInfoValue === compareNumber) {
              return true;
            }
          } else {
            log.warn("视频过滤器-未经允许的比较符号: ", config);
            return false;
          }
        }
      } else if (typeof config.videoInfoValue === "boolean") {
        if (typeof config.ruleValue === "string") {
          let trimRuleValue = config.ruleValue.trim();
          return config.videoInfoValue.toString() === trimRuleValue;
        }
      }
      return false;
    }
    async checkAwemeInfoIsFilter(rules, awemeInfo, isQueryAllMatchedFilterRules) {
      let transformAwemeInfo = this.parseAwemeInfoDictData(awemeInfo);
      let flag = false;
      let matchedFilterOption = null;
      let matchedFilterOptionList = [];
      let notMatchedFilterRule = [];
      outerLoop: for (let index = 0; index < rules.length; index++) {
        const filterRule = rules[index];
        const ruleNameList = Array.isArray(filterRule.data.ruleName)
          ? filterRule.data.ruleName
          : [filterRule.data.ruleName];
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
            ruleKey: filterRule.data.ruleName,
            ruleValue: filterRule.data.ruleValue,
            transformAwemeInfo,
            rule: filterRule,
          };
          flag = await this.checkFilterWithRule(details, filterRule.data);
          if (flag) {
            if (Array.isArray(filterRule.dynamicData) && filterRule.dynamicData.length) {
              let dynamicDetailsList = [];
              for (let dynamicIndex = 0; dynamicIndex < filterRule.dynamicData.length; dynamicIndex++) {
                const dynamicOption = filterRule.dynamicData[dynamicIndex];
                let dynamicTagKey = dynamicOption.ruleName;
                let dynamicTagValue = transformAwemeInfo[dynamicTagKey];
                let dynamicDetails = {
                  videoInfoKey: dynamicTagKey,
                  videoInfoValue: dynamicTagValue,
                  ruleKey: dynamicOption.ruleName,
                  ruleValue: dynamicOption.ruleValue,
                  transformAwemeInfo,
                  rule: filterRule,
                };
                dynamicDetailsList.push(dynamicDetails);
                let dynamicCheckFlag = await this.checkFilterWithRule(dynamicDetails, dynamicOption);
                flag = flag && dynamicCheckFlag;
                if (!flag) {
                  break;
                }
              }
              if (flag) {
                log.success([
                  `视频过滤器-多组 ==> ${filterRule.name}`,
                  transformAwemeInfo,
                  details,
                  dynamicDetailsList,
                  awemeInfo,
                  filterRule,
                ]);
              }
            } else {
              log.success([`视频过滤器 ==> ${filterRule.name}`, transformAwemeInfo, details, awemeInfo, filterRule]);
            }
          }
          if (flag) {
            if (isQueryAllMatchedFilterRules) {
              matchedFilterOptionList.push(filterRule);
            } else {
              matchedFilterOption = filterRule;
              break outerLoop;
            }
          } else {
            if (isQueryAllMatchedFilterRules) {
              notMatchedFilterRule.push(filterRule);
            }
          }
        }
      }
      return {
        isFilter: flag,
        matchedFilterRule: isQueryAllMatchedFilterRules ? matchedFilterOptionList : matchedFilterOption,
        notMatchedFilterRule: isQueryAllMatchedFilterRules ? notMatchedFilterRule : null,
        transformAwemeInfo,
        awemeInfo,
      };
    }
    async sendDislikeVideo(rule, awemeInfo) {}
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
            item?.remove();
          }
          videoList.splice(deleteIndex, 1);
        }
      }
    }
  }
  const DouYinVideoPlayer = {
    $flag: {
      isWaitEnterFullScreen: false,
    },
    init() {
      DouYinVideoBlock.init();
      Panel.onceExec("dy-short-cut", () => {
        DouYinVideoPlayerShortCut.init();
      });
      DouYinVideoPlayerBlockMouseHoverTip.init();
      Panel.execMenuOnce("changeCommentToBottom", () => {
        return this.changeCommentToBottom();
      });
      Panel.execMenuOnce("fullScreen", () => {
        return this.fullScreen();
      });
      Panel.execMenuOnce("parseVideo", () => {
        return this.hookDownloadButtonToParseVideo();
      });
      Panel.execMenuOnce("dy-video-hookCopyLinkButton", () => {
        return this.hookCopyLinkButton();
      });
      Panel.exec(
        ["autoEnterElementFullScreen", "search-autoEnterElementFullScreen"],
        () => {
          this.autoEnterElementFullScreen();
        },
        (keyList) => {
          const [mainKey, childKey] = keyList;
          let mainValue = Panel.getValue(mainKey);
          let childValue = Panel.getValue(childKey);
          if (DouYinRouter.isSearch()) {
            if (mainValue) {
              if (childValue == 1) {
                return true;
              } else if (childValue == 0) {
                return false;
              } else;
            }
          }
          return mainValue;
        },
        false
      );
      Panel.execMenuOnce("dy-video-doubleClickEnterElementFullScreen", () => {
        return this.doubleClickEnterElementFullScreen();
      });
      Panel.execMenuOnce(["dy-video-bgColor-enable", "dy-video-changeBackgroundColor"], (option) => {
        return this.changeBackgroundColor(option.value[1]);
      });
      Panel.execMenuOnce("repairProgressBar", () => {
        let result = [];
        Panel.onceExec("repairProgressBar", () => {
          result.push(...this.repairVideoProgressBar());
        });
        return result;
      });
      Panel.execMenuOnce("dy-video-gestureBackCloseComment", () => {
        return this.gestureBackCloseComment();
      });
      Panel.execMenuOnce("dy-video-removeStyle-bottom", () => {
        return this.removeStyleBottom();
      });
      Panel.execMenuOnce("dy-video-disableRightToolbarTransform", () => {
        return this.disableRightToolbarTransform();
      });
      DouYinVideoPlayer.chooseQuality(Panel.getValue("chooseVideoDefinition"));
      Panel.execMenuOnce("dy-video-object-fit", (option) => {
        return this.objectFit(option.value);
      });
      Panel.execMenuOnce(["dy-video-playbackrate", "dy-video-playbackrate-select-value"], (option) => {
        return this.playbackrate(option.value[1]);
      });
      domUtils.ready(() => {
        DouYinVideoPlayer.chooseQuality(Panel.getValue("chooseVideoDefinition"));
        Panel.execMenuOnce("dy-video-waitToRemovePauseDialog", () => {
          return this.waitToRemovePauseDialog();
        });
        Panel.execMenuOnce("mobileMode", () => {
          return this.mobileMode();
        });
        Panel.execMenuOnce("dy-video-titleInfoAutoHide", () => {
          return this.titleInfoAutoHide();
        });
        Panel.execMenuOnce("dy-video-videoControlsAutoHide", () => {
          return this.videoControlsAutoHide();
        });
        Panel.execMenuOnce("dy-video-rightToolBarAutoHide", () => {
          return this.rightToolBarAutoHide();
        });
      });
    },
    fullScreen() {
      log.info("沉浸模式");
      let result = [];
      result.push(
        CommonUtil.addBlockCSS(".slider-video .positionBox", "#video-info-wrap", "xg-controls.xgplayer-controls")
      );
      result.push(DouYinVideoBlock_BottomToolbar_videoInfo.blobkTitleTopTag());
      result.push(DouYinVideoBlock.shieldSearchFloatingBar());
      result.push(DouYinVideoBlock_BottomToolbar_videoInfo.blockClickRecommend());
      result.push(
        addStyle(
          `
			/* 视频全屏 */
			xg-video-container.xg-video-container{
				bottom: 0px !important;
			}
			/* 图文的图片全屏 */
			.basePlayerContainer  .focusPanel .dySwiperSlide img[src]{
				height: 99% !important;
			}
      /* 修复有时候背景为全黑的问题 */
      .isCssFullScreen .basePlayerContainer video{
        height: calc(100% - 2px) !important;
      }
      `
        )
      );
      return result;
    },
    autoEnterElementFullScreen(userKeyBoard = false) {
      if (this.$flag.isWaitEnterFullScreen) {
        log.warn(`已存在等待进入全屏...`);
        return;
      }
      this.$flag.isWaitEnterFullScreen = true;
      if (userKeyBoard) {
        domUtils.ready(() => {
          let keydownEvent = new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            key: "Y",
            code: "KeyY",
            keyCode: 89,
            which: 89,
          });
          document.dispatchEvent(keydownEvent);
          this.$flag.isWaitEnterFullScreen = false;
          log.success("成功自动进入网页全屏-快捷键");
        });
      } else {
        domUtils.ready(() => {
          ReactUtils.waitReactPropsToSet(
            () => {
              return (
                $('xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon') ||
                $('[data-e2e="feed-active-video"] dy-icon.douyin-player-page-full-screen .douyin-player-icon')
              );
            },
            "reactProps",
            {
              check(reactInstance) {
                return typeof reactInstance?.onClick === "function";
              },
              set: (reactInstance, $target) => {
                this.$flag.isWaitEnterFullScreen = false;
                log.success("成功自动进入网页全屏-点击按钮");
                $target.click();
              },
            }
          );
        });
      }
    },
    doubleClickEnterElementFullScreen() {
      let isDouble = false;
      log.info("注册双击进入网页全屏事件");
      const result = domUtils.on(document, "click", [".newVideoPlayer", "#sliderVideo"], (event) => {
        if (isDouble) {
          isDouble = false;
          DouYinVideoPlayer.autoEnterElementFullScreen(true);
        } else {
          isDouble = true;
          setTimeout(() => {
            isDouble = false;
          }, 250);
        }
      });
      return [result.off];
    },
    changeCommentToBottom() {
      log.info("评论区移到中间");
      return [
        addStyle(
          `
      /* 竖屏样式 */
      @media screen and (orientation: portrait) {
        #sliderVideo[data-e2e="feed-video"] #videoSideBar #relatedVideoCard,
        #sliderVideo[data-e2e="feed-video"] #videoSideCard #relatedVideoCard{
          display: none !important;
        }
        /* 左侧的视频宽度撑满 */
        #sliderVideo[data-e2e] .playerContainer,
        #slideMode[data-e2e] .playerContainer{
          width: 100% !important;
        }
        /* 右侧的评论区宽度撑满，position使用absolute */
        #sliderVideo[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
        #slideMode[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
        #sliderVideo[data-e2e="feed-active-video"] #videoSideCard:has(#relatedVideoCard),
        #slideMode[data-e2e="feed-active-video"] #videoSideCard:has(#relatedVideoCard){
          width: 100%;
          height: 75%;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          transition: height .15s linear !important;
          position: absolute;
        }
      }
		`
        ),
      ];
    },
    chooseQuality(mode = 0) {
      log.info("选择视频清晰度: " + mode);
      let QualitySessionKey = "MANUAL_SWITCH";
      let definition = [
        {
          done: 1,
          gearClarity: "20",
          gearName: "超清 4K",
          gearType: -2,
          qualityType: 72,
        },
        {
          done: 1,
          gearClarity: "10",
          gearName: "超清 2K",
          gearType: -1,
          qualityType: 7,
        },
        {
          done: 1,
          gearClarity: "5",
          gearName: "高清 1080P",
          gearType: 1,
          qualityType: 2,
        },
        {
          done: 1,
          gearClarity: "4",
          gearName: "高清 720P",
          gearType: 2,
          qualityType: 15,
        },
        {
          done: 1,
          gearClarity: "3",
          gearName: "标清 540P",
          gearType: 3,
          qualityType: 21,
        },
        {
          done: 1,
          gearClarity: "2",
          gearName: "极速",
          gearType: 4,
          qualityType: 21,
        },
        {
          done: 1,
          gearClarity: "0",
          gearName: "智能",
          gearType: 0,
        },
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
        log.success("设置当前视频的清晰度: " + choose.gearName);
      } else {
        log.error("该清晰度不存在: " + mode);
      }
    },
    chooseVideoRate(rate = "1") {
      let Definition_Key = "player_playbackratio";
      function setRate(value = "1") {
        _unsafeWindow.sessionStorage.setItem(Definition_Key, value);
        $$("xg-icon.xgplayer-playback-setting").forEach(($playbackSetting) => {
          let $container = utils.getReactInstance($playbackSetting).reactContainer;
          $container?.memoizedState?.element?.props?.xgCase?.updatePlayBackRatio();
        });
      }
      setRate(rate);
    },
    hookDownloadButtonToParseVideo($parseNode) {
      log.info("修改页面的分享-下载按钮变成解析视频");
      function showParseInfoDialog(info) {
        let contentHTML = "";
        info.downloadUrlInfoList.forEach((downloadInfo) => {
          let videoQualityInfo = `${downloadInfo.width}x${downloadInfo.height} @${downloadInfo.fps}`;
          let downloadFileName = info.downloadFileName;
          [["{quality}", videoQualityInfo]].forEach(([key, value]) => {
            downloadFileName = downloadFileName.replace(key, value);
          });
          downloadFileName = downloadFileName + "." + downloadInfo.format;
          contentHTML += `
        <div class="douyin-video-link-item">
					<div class="dy-video-name">
						<span>清晰度信息：</span>
						<span>${videoQualityInfo}</span>
					</div>
					<div class="dy-video-size">
						<span>视频大小：</span>
						<span>${utils.formatByteToSize(downloadInfo.dataSize)}</span>
					</div>
					<div class="dy-video-download-uri">
						<span>下载地址：</span>
						<a href="${downloadInfo.url}" data-file-name="${downloadFileName}">${downloadInfo.url}</a>
					</div>
					${
            downloadInfo.backUrl.length
              ? `
						<div class="dy-video-back-uri">
							<span>备用地址：</span>
							${downloadInfo.backUrl
                .map((url, index) => {
                  return `
									<a href="${url}" data-file-name="${downloadFileName}">地址${index + 1}</a>
								`;
                })
                .join("，")}
						</div>
					`
              : ""
          }
				</div>`;
        });
        contentHTML = `
      <div class="douyin-video-link-info">
        <div class="douyin-video-name">
          <span>作者：</span>
          <span>${info.author}</span>
        </div>
        <div class="douyin-video-desc">
          <span>文案：</span>
          <span>${info.desc}</span>
        </div>
      </div>
      <div class="douyin-video-link-container">${contentHTML}</div>
      `;
        const $dialog = __pops__.alert({
          title: {
            text: "视频解析",
            position: "center",
          },
          content: {
            text: contentHTML,
            html: true,
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
            },
          },
          btn: {
            ok: {
              enable: false,
            },
          },
          width: window.innerWidth > 550 ? "550px" : "88vw",
          height: window.innerHeight > 550 ? "550px" : "80vh",
          drag: true,
          dragLimit: true,
          style: `
          .douyin-video-link-item,
          .douyin-video-link-container a{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .douyin-video-link-item,
          .douyin-video-name,
          .douyin-video-desc{
            margin: 10px;
          }
          .douyin-video-name,
          .douyin-video-desc,
          .dy-video-download-uri,
          .dy-video-back-uri{
            display: flex;
          }
          
          .douyin-video-name span:first-child,
          .douyin-video-desc span:first-child{
            white-space: nowrap;
          }
          .douyin-video-link-info,
          .douyin-video-link-container{
            border: 1px solid #000000;
            border-radius: 5px;
            margin: 10px;
          }
          `,
        });
        domUtils.on(
          $dialog.$pops,
          "click",
          "a",
          (event, selectorTarget) => {
            domUtils.preventEvent(event);
            const url = selectorTarget.getAttribute("href");
            let fileName = selectorTarget.getAttribute("data-file-name");
            const isSupport_GM_download = function () {
              try {
                return typeof _GM_download === "function";
              } catch (error) {
                log.error(error);
                return false;
              }
            };
            const popupDownloadRenameFileName = Panel.getValue("dy-video-popupDownloadRenameFileName");
            if (popupDownloadRenameFileName) {
              const renameFileName = globalThis.prompt("请确认下载的文件名", fileName);
              if (typeof renameFileName === "string") {
                log.info(`重命名下载的文件名：${fileName} -> ${renameFileName}`);
                fileName = renameFileName;
              } else {
                Qmsg.info("取消下载");
                return;
              }
            }
            if (!isSupport_GM_download()) {
              log.error("当前脚本环境不支持API 【GM_download】");
              window.open(url, "_blank");
              return;
            }
            Qmsg.info(`调用【GM_download】下载视频`);
            let abortDownload = null;
            let isSuccessDownload = false;
            let isDownloadEnd = false;
            let downloadingQmsg = Qmsg.loading("下载中...", {
              showClose: true,
              onClose() {
                if (!isSuccessDownload && typeof abortDownload === "function") {
                  abortDownload();
                }
              },
            });
            let result = _GM_download({
              url,
              name: fileName,
              headers: {
                Referer: window.location.href,
              },
              onload() {
                isSuccessDownload = true;
                downloadingQmsg.close();
                Qmsg.success(`下载 ${fileName} 已完成`, {
                  consoleLogContent: true,
                });
              },
              onprogress(details) {
                if (typeof details === "object" && "loaded" in details && "total" in details && !isDownloadEnd) {
                  let progressNum = details.loaded / details.total;
                  let formatProgressNum = (progressNum * 100).toFixed(2);
                  downloadingQmsg.setText(`下载中...${formatProgressNum}%`);
                  if (details.loaded === details.total) {
                    isDownloadEnd = true;
                  }
                }
              },
              onerror(error) {
                downloadingQmsg.close();
                log.error("下载失败error👉", error);
                if (typeof error === "object" && error["error"]) {
                  Qmsg.error(`下载 ${fileName} 失败或已取消 原因：${error["error"]}`, {
                    timeout: 6e3,
                  });
                } else {
                  Qmsg.error(`下载 ${fileName} 失败或已取消`);
                }
              },
              ontimeout() {
                downloadingQmsg.close();
                Qmsg.error(`下载 ${fileName} 请求超时`);
              },
            });
            if (typeof result === "object" && result != null && "abort" in result) {
              abortDownload = result.abort;
            }
          },
          {
            capture: true,
          }
        );
      }
      const transformDownloadFileName = (data) => {
        let fileNameTemplate = Panel.getValue("dy-video-parseVideo-downloadFileName");
        for (const key in data) {
          if (!Object.hasOwn(data, key)) continue;
          const value = data[key].toString();
          fileNameTemplate = fileNameTemplate.replace(`{${key}}`, value);
        }
        return fileNameTemplate;
      };
      const callback = ($click) => {
        if ($click.closest('[data-e2e="feed-live"]')) {
          Qmsg.error("无法解析直播video的下载信息");
          return;
        }
        const parentReactFilber = utils.getReactInstance($click?.parentElement)?.reactFiber;
        const $basePlayerContainer = $click.closest(".basePlayerContainer");
        const basePlayerContainerReactFiber = utils.getReactInstance($basePlayerContainer)?.reactFiber;
        if (!parentReactFilber && !basePlayerContainerReactFiber) {
          log.error([$click, parentReactFilber, $basePlayerContainer, basePlayerContainerReactFiber]);
          Qmsg.error("获取rectFiber属性失败");
          return;
        }
        const reactFiber = parentReactFilber || basePlayerContainerReactFiber;
        try {
          const awemeInfo =
            reactFiber?.return?.memoizedProps?.awemeInfo ||
            reactFiber?.return?.memoizedProps?.xgplayerConfig?.awemeInfo;
          if (!awemeInfo) {
            log.error([$click, reactFiber]);
            Qmsg.error("获取awemeInfo属性失败");
            return;
          }
          log.info([`解析的awemeInfo: `, awemeInfo]);
          let videoDownloadUrlList = [];
          const bitRateList = awemeInfo?.video?.bitRateList;
          if (bitRateList != null && Array.isArray(bitRateList)) {
            videoDownloadUrlList = videoDownloadUrlList.concat(
              bitRateList
                .map((item) => {
                  let result = {
                    url: item.playApi,
                    width: item.width,
                    height: item.height,
                    format: item.format,
                    fps: 0,
                    dataSize: item.dataSize,
                    backUrl: [],
                  };
                  if (typeof item.fps === "number") {
                    result.fps = item.fps;
                  }
                  if (Array.isArray(item.playAddr)) {
                    result.backUrl = result.backUrl.concat(item.playAddr.map((it) => it.src));
                  }
                  return result;
                })
                .filter((it) => it != null)
            );
          }
          if (!videoDownloadUrlList.length) {
            Qmsg.error("未获取到视频的有效链接信息", {
              consoleLogContent: true,
            });
            return;
          }
          let uniqueVideoDownloadUrlList = [];
          for (let index = 0; index < videoDownloadUrlList.length; index++) {
            const videoDownloadInfo = videoDownloadUrlList[index];
            let findIndex = uniqueVideoDownloadUrlList.findIndex(
              (it) =>
                it.width === videoDownloadInfo.width &&
                it.height === videoDownloadInfo.height &&
                it.fps === videoDownloadInfo.fps
            );
            if (findIndex != -1) {
              let findValue = uniqueVideoDownloadUrlList[findIndex];
              if (findValue.dataSize < videoDownloadInfo.dataSize) {
                uniqueVideoDownloadUrlList.splice(findIndex, 1, videoDownloadInfo);
              }
            } else {
              uniqueVideoDownloadUrlList.push(videoDownloadInfo);
            }
          }
          uniqueVideoDownloadUrlList = uniqueVideoDownloadUrlList.map((item) => {
            if (item.url.startsWith("http:")) {
              item.url = item.url.replace("http:", "");
            }
            return item;
          });
          utils.sortListByProperty(uniqueVideoDownloadUrlList, (it) => it.width);
          const filterBase = new DouYinVideoFilterBase();
          const transformAwemeInfo = filterBase.parseAwemeInfoDictData(awemeInfo);
          if (transformAwemeInfo.nickname == null) {
            transformAwemeInfo.nickname = "未知作者";
          }
          if (transformAwemeInfo.desc == null) {
            transformAwemeInfo.desc = "未知视频文案";
          }
          const downloadFileName = transformDownloadFileName({
            uid: transformAwemeInfo.uid,
            nickname: transformAwemeInfo.nickname,
            desc: transformAwemeInfo.desc,
            downloadTime: utils.formatTime(void 0, "yyyy-MM-dd_HH:mm:ss"),
          });
          showParseInfoDialog({
            author: transformAwemeInfo.nickname,
            desc: transformAwemeInfo.desc,
            downloadFileName,
            downloadUrlInfoList: uniqueVideoDownloadUrlList,
          });
        } catch (error) {
          log.error(error);
          Qmsg.error("解析视频失败");
        }
      };
      if ($parseNode) {
        callback($parseNode);
      } else {
        const result = domUtils.on(
          document,
          "click",
          'div[data-e2e="video-share-container"] div[data-inuser="false"] button + div',
          (evt, selectorTarget) => {
            domUtils.preventEvent(evt);
            callback(selectorTarget);
          },
          {
            capture: true,
          }
        );
        return [result.off];
      }
    },
    hookCopyLinkButton() {
      log.info("修改页面的分享-复制链接");
      const result = domUtils.on(
        document,
        "click",
        'div[data-e2e="video-share-container"] div[data-inuser="false"] button:contains("复制链接")',
        (event) => {
          domUtils.preventEvent(event);
          let clickElement = event.target;
          let rectFiber = utils.getReactInstance(clickElement.parentElement)?.reactFiber;
          if (!rectFiber) {
            Qmsg.error("获取rectFiber属性失败");
            return;
          }
          let awemeInfo = rectFiber?.return?.return?.memoizedProps?.awemeInfo;
          if (awemeInfo == null || typeof awemeInfo !== "object") {
            Qmsg.error("获取awemeInfo属性失败");
            return;
          }
          log.info(`视频awemeInfo：`, awemeInfo);
          let shareUrl = awemeInfo?.shareInfo?.shareUrl;
          if (typeof shareUrl !== "string") {
            Qmsg.error("获取shareUrl属性失败");
            return;
          }
          log.info(`视频链接：` + shareUrl);
          utils.copy(shareUrl).then((copyFlag) => {
            let toast = rectFiber?.return?.return?.memoizedProps?.toast;
            if (copyFlag) {
              if (typeof toast === "function") {
                toast("已复制链接");
              } else {
                Qmsg.success("已复制链接");
              }
            } else {
              if (typeof toast === "function") {
                toast("复制链接失败");
              } else {
                Qmsg.error("复制链接失败");
              }
            }
          });
        },
        { capture: true }
      );
      return [result.off];
    },
    mobileMode() {
      log.info("启用手机模式");
      let result = [];
      DouYin.initialScale();
      result.push(CommonUtil.addBlockCSS("img#douyin-temp-sidebar"), addStyle(MobileCSS$1));
      Panel.onceExec("repairProgressBar", () => {
        result.push(...this.repairVideoProgressBar());
      });
      return result;
    },
    repairVideoProgressBar() {
      log.info("修复进度条按钮");
      let result = [
        addStyle(
          `
			/* 禁止触发touch事件，因为会影响到按钮点击不到 */
      @media screen and (max-width: 600px) and (orientation: portrait),
        screen and (max-height: 600px) and (orientation: landscape) {
        xg-outer,
        xg-inners {
          pointer-events: none;
        }
      }
			`
        ),
      ];
      const checkEnable = () => {
        return Panel.getValue("mobileMode") || Panel.getValue("repairProgressBar");
      };
      const isMobile = () => {
        if (DouYinUtils.isVerticalScreen()) {
          return window.innerWidth <= 600;
        } else {
          return window.innerHeight <= 600;
        }
      };
      domUtils.ready(() => {
        domUtils.on(
          document.body,
          "touchstart",
          "xg-progress",
          (event, $click) => {
            if (!checkEnable()) return;
            if (!isMobile()) return;
            const $xg_outer = $click.querySelector("xg-outer");
            if ($xg_outer) {
              $xg_outer.style.height = "6px";
            }
          },
          {
            capture: true,
          }
        );
        domUtils.on(
          document.body,
          "touchend",
          "xg-progress",
          (event, $click) => {
            if (!checkEnable()) return;
            if (!isMobile()) return;
            const $xg_outer = $click.querySelector("xg-outer");
            if ($xg_outer) {
              $xg_outer.style.height = "";
            }
          },
          {
            capture: true,
          }
        );
      });
      return result;
    },
    changeBackgroundColor(color) {
      log.info("修改视频背景颜色");
      return addStyle(
        `
		/* 推荐的直播间背景 */
		xgmask,
		#sliderVideo > div,
		/* 用户主页的视频 */
		.basePlayerContainer .imgBackground,
		/* 搜索的图文视频 */
		.basePlayerContainer .dySwiperSlide img+div{
			background: ${color}  !important;
		}
		`
      );
    },
    titleInfoAutoHide() {
      log.info(`自动隐藏视频信息`);
      return DouYinVideoElementAutoHide("dy-video-titleInfoAutoHide-delayTime", [
        '#sliderVideo[data-e2e="feed-active-video"] #video-info-wrap',
        '[data-e2e="feed-item"] [data-e2e="feed-live"] [data-e2e="basicPlayer"] > div:has([aria-label*="直播"])',
        '#slideMode[data-e2e="feed-active-video"] #video-info-wrap',
        'div[data-e2e="video-detail"] #video-info-wrap',
      ]);
    },
    videoControlsAutoHide() {
      log.info(`自动隐藏视频控件`);
      return DouYinVideoElementAutoHide("dy-video-videoControlsAutoHide-delayTime", [
        `#sliderVideo[data-e2e="feed-active-video"] xg-controls.xgplayer-controls`,
        `[data-e2e="feed-item"] [data-e2e="feed-live"] xg-controls.xgplayer-controls`,
        '#slideMode[data-e2e="feed-active-video"] xg-controls.xgplayer-controls',
        'div[data-e2e="video-detail"] xg-controls.xgplayer-controls',
      ]);
    },
    rightToolBarAutoHide() {
      log.info(`自动隐藏右侧工具栏`);
      const result = DouYinVideoElementAutoHide("dy-video-titleInfoAutoHide-delayTime", [
        '#sliderVideo[data-e2e="feed-active-video"] .positionBox',
        '[data-e2e="feed-item"] [data-e2e="feed-live"] [data-e2e="basicPlayer"] > div:has(svg path[d="M13.556 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM19.778 17.778a1.778 1.778 0 1 1-3.556 0 1.778 1.778 0 0 1 3.556 0zM24.222 19.556a1.778 1.778 0 1 0 0-3.556 1.778 1.778 0 0 0 0 3.556z"])',
        '#slideMode[data-e2e="feed-active-video"] .positionBox',
        'div[data-e2e="video-detail"] .positionBox',
      ]);
      result.push(
        addStyle(
          `
			.positionBox{
				transition: opacity 0.5s;
			}
		  `
        )
      );
      return result;
    },
    gestureBackCloseComment() {
      log.info(`手势返回关闭评论区`);
      let gestureback = new GestureBack({
        hash: DouYinGestureBackHashConfig.videoCommentDrawer,
        useUrl: true,
        beforeHistoryBackCallBack(isUrlChange) {
          if (isUrlChange) {
            closeComment();
          }
        },
      });
      const $closeSelector = `#relatedVideoCard .semi-tabs + div svg:has(path[d="M22.133 23.776a1.342 1.342 0 1 0 1.898-1.898l-4.112-4.113 4.112-4.112a1.342 1.342 0 0 0-1.898-1.898l-4.112 4.112-4.113-4.112a1.342 1.342 0 1 0-1.898 1.898l4.113 4.112-4.113 4.113a1.342 1.342 0 0 0 1.898 1.898l4.113-4.113 4.112 4.113z"])`;
      function closeComment() {
        let $close = $($closeSelector);
        if ($close) {
          let rect = utils.getReactInstance($close);
          if (rect) {
            let fn = rect.reactProps?.onClick;
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
      const result1 = domUtils.on(
        document,
        "click",
        `.xgplayer div[data-e2e="feed-comment-icon"]`,
        (event) => {
          log.info(`手势 => 打开评论区`);
          domUtils.waitNode($closeSelector, 1e4).then(($el) => {
            if (!$el) {
              return;
            }
            log.info(`手势 => 评论区出现`);
            gestureback.enterGestureBackMode();
          });
        },
        {
          capture: true,
        }
      );
      const result2 = domUtils.on(
        document,
        "click",
        $closeSelector,
        (event) => {
          log.info(`手势 => 关闭评论区`);
          gestureback.quitGestureBackMode();
        },
        {
          capture: true,
        }
      );
      return [result1.off, result2.off];
    },
    waitToRemovePauseDialog() {
      log.info("监听信息区域【长时间无操作，已暂停播放】弹窗");
      let checkDialogToClose = ($ele) => {
        let eleText = domUtils.text($ele);
        if (eleText.includes("长时间无操作") && eleText.includes("暂停播放")) {
          Qmsg.info(`出现【长时间无操作，已暂停播放】弹窗`, {
            consoleLogContent: true,
          });
          let $rect = utils.getReactInstance($ele);
          if (typeof $rect.reactProps === "object") {
            let closeDialogFn = utils.queryProperty($rect.reactProps, (obj) => {
              if (typeof obj?.["props"]?.["onClose"] === "function") {
                return {
                  isFind: true,
                  data: obj["props"]["onClose"],
                };
              } else {
                let children = obj?.["props"]?.["children"] ?? obj?.["children"];
                return {
                  isFind: false,
                  data: Array.isArray(children) ? children[0] : children,
                };
              }
            });
            if (typeof closeDialogFn === "function") {
              Qmsg.success(`调用函数关闭【长时间无操作，已暂停播放】弹窗`);
              closeDialogFn();
            }
          }
        }
      };
      let lockFn = new utils.LockFunction(() => {
        if (!Panel.getValue("dy-video-waitToRemovePauseDialog")) {
          return;
        }
        [
          ...Array.from($$(`.basePlayerContainer xg-bar.xg-right-bar + div`)),
          ...Array.from($$(`.basePlayerContainer div:has(>div):contains("长时间无操作")`)),
        ].forEach(($elementTiming) => {
          checkDialogToClose($elementTiming);
        });
      });
      const observer = utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        () => {
          observer?.disconnect();
        },
      ];
    },
    removeStyleBottom() {
      log.info(`移除video的bottom偏移`);
      return addStyle(
        `
			div:has( > div > pace-island > #video-info-wrap ),
			xg-video-container.xg-video-container{
				bottom: 0 !important;
			}
		`
      );
    },
    disableRightToolbarTransform() {
      log.info(`禁用右侧工具栏的transform`);
      return addStyle(
        `
			.basePlayerContainer .positionBox{
				transform: unset !important;
			}
		`
      );
    },
    objectFit(value) {
      const allowValue = ["fill", "contain", "cover", "none", "scale-down"];
      if (!allowValue.includes(value)) return;
      log.info(`自定义video object-fit`);
      return addStyle(
        `
		.xgplayer video {
			object-fit: ${value};
		}
		`
      );
    },
    playbackrate(rate) {
      log.info(`自定义播放倍速：${rate}`);
      const lockFn = new utils.LockFunction(() => {
        if (DouYinRouter.isLive()) return;
        $$("video").forEach(($video) => {
          if ($video.closest('[data-e2e="feed-live"]')) return;
          $video.playbackRate = rate;
        });
      });
      const observer = utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        () => {
          observer?.disconnect();
        },
        () => {
          $$("video").forEach(($video) => {
            $video.playbackRate = 1;
          });
        },
      ];
    },
  };
  const DouYinMessageFilter = {
    key: "douyin-live-danmu-rule",
    $data: {
      rule: [],
    },
    init() {
      this.initRule();
    },
    initRule() {
      this.$data.rule.length = 0;
      const localRule = this.get().trim();
      const localRuleSplit = localRule.split("\n");
      localRuleSplit.forEach((item) => {
        if (item.trim() == "") return;
        item = item.trim();
        const itemRegExp = new RegExp(item.trim());
        this.$data.rule.push(itemRegExp);
      });
    },
    change() {
      this.execMessageFilter(
        [
          ...Array.from($$("xg-danmu.xgplayer-danmu > div > div:not([data-is-filter])")),
          ...Array.from($$("#DanmakuLayout .danmu > div > div:not([data-is-filter])")),
        ],
        "弹幕"
      );
      this.execMessageFilter(
        Array.from($$("#chatroom .webcast-chatroom .webcast-chatroom___item:not([data-is-filter])")),
        "聊天室"
      );
      if (Panel.getValue("live-message-shield-emoji-chat")) {
        domUtils.hide(
          [
            ...Array.from($$("xg-danmu.xgplayer-danmu > div:has(>img):not([data-is-filter])")),
            ...Array.from($$("#DanmakuLayout .danmu > div > div:has(>img):not([data-is-filter])")),
          ],
          false
        );
      }
    },
    execMessageFilter(messageQueue, from) {
      for (let index = 0; index < messageQueue.length; index++) {
        let $danmu = messageQueue[index];
        let react = utils.getReactInstance($danmu);
        let messageIns =
          react?.reactFiber?.return?.memoizedProps?.message ||
          react?.reactFiber?.memoizedProps?.children?.props?.children?.props?.message ||
          react?.reactContainer?.memoizedState?.element?.props?.message;
        if (typeof messageIns !== "object" || messageIns == null) {
          continue;
        }
        let message = messageIns?.payload?.content || messageIns?.payload?.common?.describe;
        let method = messageIns.method;
        let chat_by = messageIns?.payload?.chat_by;
        let biz_scene = messageIns?.payload?.biz_scene;
        let flag = false;
        if (!flag) {
          if (method === "WebcastGiftMessage") {
            if (Panel.getValue("live-danmu-shield-gift")) {
              flag = true;
            }
          } else if (method === "WebcastChatMessage") {
            if (chat_by === "0");
            else if (chat_by === "9" || chat_by === "10") {
              if (Panel.getValue("live-danmu-shield-lucky-bag")) {
                flag = true;
              }
            } else;
          } else if (method === "WebcastRoomMessage");
          else if (method === "WebcastFansclubMessage");
          else if (method === "WebcastEmojiChatMessage") {
            if (Panel.getValue("live-message-shield-emoji-chat")) {
              flag = true;
            }
          } else;
        }
        if (!flag && typeof biz_scene === "string") {
          if (biz_scene === "common_text_game_score") {
            if (Panel.getValue("live-message-shield-biz_scene-common_text_game_score")) {
              flag = true;
            }
          }
        }
        if (!flag) {
          flag =
            typeof message === "string" &&
            this.$data.rule.some((ruleText) => {
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
    },
  };
  const DouYinLiveMessage = {
    filterMessage() {
      log.success("消息过滤");
      const lockFn = new utils.LockFunction(() => {
        if (!DouYinRouter.isLive()) return;
        DouYinMessageFilter.change();
      });
      DouYinMessageFilter.init();
      const observer = utils.mutationObserver(document.body, {
        config: {
          childList: true,
          subtree: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        addStyle(
          `
				/* 修复一下聊天室屏蔽了某些聊天导致上下抖动不停 */
				.webcast-chatroom___list > div{
					height: 100% !important;
				}
			`
        ),
        () => observer.disconnect(),
      ];
    },
  };
  const DouYinLiveBlock_ChatRoom = {
    init() {
      Panel.execMenuOnce("live-shieldChatRoom", () => {
        return this.shieldChatRoom();
      });
      Panel.execMenuOnce("live-shielChatRoomVipSeats", () => {
        return this.shielChatRoomVipSeats();
      });
      Panel.execMenuOnce("dy-live-shieldUserLevelIcon", () => {
        return this.shieldUserLevelIcon();
      });
      Panel.execMenuOnce("dy-live-shieldUserVIPIcon", () => {
        return this.shieldUserVIPIcon();
      });
      Panel.execMenuOnce("dy-live-shieldUserFansIcon", () => {
        return this.shieldUserFansIcon();
      });
      Panel.execMenuOnce("dy-live-shieldMessage", () => {
        return this.shieldMessage();
      });
    },
    shieldChatRoom() {
      log.info("【屏蔽】评论区（聊天室）");
      return [
        CommonUtil.addBlockCSS("#chatroom", "#RightBackgroundLayout"),
        addStyle(
          `
            div[data-e2e="living-container"],
            div[data-e2e="living-container"] > div{
                margin-bottom: 0px !important;
            }`
        ),
      ];
    },
    shielChatRoomVipSeats() {
      log.info("【屏蔽】评论区的贵宾席");
      return [
        CommonUtil.addBlockCSS(
          "#chatroom > div > div:has(#audiencePanelScrollId)",
          '#chatroom > div > div:has([data-e2e="live-room-audience"])',
          '#chatroom > pace-island > div > div:has([data-e2e="live-room-audience"])'
        ),
      ];
    },
    shieldUserLevelIcon() {
      log.info("【屏蔽】用户等级图标");
      return [CommonUtil.addBlockCSS('#chatroom .webcast-chatroom___item span:has(>img[src*="level"])')];
    },
    shieldUserVIPIcon() {
      log.info("【屏蔽】VIP图标");
      return [CommonUtil.addBlockCSS('#chatroom .webcast-chatroom___item span:has(>img[src*="subscribe"])')];
    },
    shieldUserFansIcon() {
      log.info("【屏蔽】粉丝牌");
      return [
        CommonUtil.addBlockCSS(
          '#chatroom .webcast-chatroom___item span:has(>div[style*="fansclub"])',
          '#chatroom .webcast-chatroom___item span:has(>img[src*="fansclub"])'
        ),
      ];
    },
    shieldMessage() {
      log.info("【屏蔽】信息播报");
      return [
        CommonUtil.addBlockCSS(
          "#chatroom .webcast-chatroom___bottom-message",
          `#chatroom > div > div> pace-island:has(div[style*="new_grade_enter"])`
        ),
      ];
    },
  };
  const DouYinLiveBlock_VideoAreaRightMenu = {
    init() {
      Panel.execMenuOnce("dy-live-blockVideoRightMenu-downloadClient", () => {
        return this.blockDownloadClient();
      });
    },
    blockDownloadClient() {
      log.info(`【屏蔽】右键菜单-下载客户端`);
      return [CommonUtil.addBlockCSS('.__menu_container_className:has(>a[href*="douyin-pc-web"])')];
    },
  };
  const DouYinLiveBlock = {
    init() {
      Panel.execMenuOnce("live-shieldGiftColumn", () => {
        return this.shieldGiftColumn();
      });
      Panel.execMenuOnce("live-shieldTopToolBarInfo", () => {
        return this.shieldTopToolBarInfo();
      });
      Panel.execMenuOnce("live-shieldGiftEffects", () => {
        return this.shieldGiftEffects();
      });
      Panel.execMenuOnce("live-shieldLucky", () => {
        return this.shieldLucky();
      });
      Panel.execMenuOnce("live-shielYellowCar", () => {
        return this.shieldYellowCar();
      });
      Panel.execMenuOnce("live-shieldDanmuku", () => {
        return this.shieldDanmu();
      });
      Panel.execMenuOnce("live-block-exhibition-banner-dylive-tooltip", () => {
        return this.block_exhibition_banner_dylive_tooltip();
      });
      DouYinLiveBlock_ChatRoom.init();
      DouYinLiveBlock_VideoAreaRightMenu.init();
    },
    shieldGiftColumn() {
      log.info("【屏蔽】底部的礼物栏");
      return [
        CommonUtil.addBlockCSS(
          'div[data-e2e="living-container"] [id^="living_room_player_container"] > :last-child:has(.gitBarOptimizeEnabled )',
          'div[data-e2e="living-container"] >div> div:has(>pace-island >.gitBarOptimizeEnabled)',
          'div[data-e2e="living-container"] xg-controls > div:has(div[data-e2e="gifts-container"]):not(:has(video))',
          "#BottomLayout",
          ".douyin-player .douyin-player-controls >div:nth-child(2):has(> .gitBarOptimizeEnabled )",
          `div[data-e2e="living-container"] >div div:has(>pace-island>.gitBarOptimizeEnabled)`
        ),
        addStyle(
          `
            /* 去除全屏状态下的礼物栏后，上面的工具栏bottom也去除 */
            div[data-e2e="living-container"] xg-controls xg-inner-controls:has(+div div[data-e2e="gifts-container"]){
                bottom: 0 !important;
            }`
        ),
      ];
    },
    shieldTopToolBarInfo() {
      log.info("【屏蔽】顶栏信息");
      return [
        CommonUtil.addBlockCSS(
          'div[data-e2e="living-container"] div[id*="living_room_player_container"] > pace-island[id^="island_"]',
          'div[data-e2e="living-container"] div[id*="living_room_player_container"] >div>div>pace-island[id^="island_"]:has(.__isFullPlayer)',
          'div[data-e2e="living-container"] xg-bar.xg-top-bar',
          "#HeaderLayout",
          ".douyin-player .douyin-player-top-bar"
        ),
        addStyle(
          `
				/* 去除屏蔽顶部后直播的video偏移 */
				#PlayerLayout [id^="living_player_containerdouyin-player"]{
					padding-top: 0 !important;
				}
			`
        ),
      ];
    },
    shieldGiftEffects() {
      domUtils.ready(() => {
        domUtils
          .waitNode(() => {
            return (
              domUtils.selector("xg-icon.pluginContainer > div:contains('屏蔽礼物特效')") ||
              domUtils.selector(`xg-icon[classname*="pluginContainer"] > div:contains('屏蔽礼物特效')`) ||
              domUtils.selector('.douyin-player-controls-right > slot > div:has([data-e2e="effect-switch"])')
            );
          }, 1e4)
          .then(($el) => {
            if (!$el) {
              log.error("【屏蔽】礼物特效失败，原因：获取按钮超时");
              return;
            }
            let { reactFiber } = utils.getReactInstance($el);
            let onClick = reactFiber?.memoizedProps?.children?.[1]?.props?.onClick;
            if (typeof onClick === "function") {
              log.info(`调用【屏蔽】礼物特效按钮的onClick函数`);
              onClick();
            } else {
              log.error(`【屏蔽】礼物特效失败，原因：未获取到onClick函数`);
            }
          });
      });
    },
    shieldLucky() {
      log.info("【屏蔽】福袋");
      return [
        CommonUtil.addBlockCSS(
          '.basicPlayer[data-e2e="basicPlayer"] > pace-island[id^="island_"]:has(.ShortTouchContainer):has(>div > div:not([class*="video_layout_container"]) > div)',
          "#ShortTouchLayout x-view",
          "#ShortTouchLayout .ShortTouchContainer"
        ),
      ];
    },
    shieldYellowCar() {
      log.info("【屏蔽】小黄车");
      return [
        CommonUtil.addBlockCSS(
          'div[id^="living_room_player_container"] .basicPlayer  > div:has(div[data-e2e="yellowCart-container"])',
          "#EcmoCardLayout"
        ),
      ];
    },
    shieldDanmu() {
      log.info("屏蔽弹幕");
      return [CommonUtil.addBlockCSS("xg-danmu.xgplayer-danmu", "#DanmakuLayout")];
    },
    block_exhibition_banner_dylive_tooltip() {
      log.info(`【屏蔽】点亮展馆帮主播集星`);
      return [CommonUtil.addBlockCSS('[data-e2e="exhibition-banner"] .dylive-tooltip')];
    },
  };
  const DouYinLivePlayerInstance = {
    $data: {
      playerInstance: null,
    },
    $el: {
      $playerIns: null,
    },
    initMenu() {
      GM_Menu.add({
        key: "live-parsePlayerInstance",
        text: "⚙ PlayerInstance",
        autoReload: false,
        showText(text, enable) {
          return text;
        },
        callback: () => {
          let $playerIns = $(`[id^="living_room_player_container"]`);
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
        },
      });
    },
    parseElementPlayerIns($ele) {
      let react = utils.getReactInstance($ele);
      return react?.reactFiber?.child?.child?.memoizedProps?.playerInstance;
    },
    showParseDialog() {
      log.info(["解析的信息：", this.$data.playerInstance]);
      let blobSrc = this.$data.playerInstance?.url || this.$data.playerInstance?.src;
      let pushSrc = this.$data.playerInstance?.config.url;
      __pops__.alert({
        title: {
          text: "解析信息",
          position: "center",
        },
        content: {
          text: `
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
                        <div class="live-dy-parse-item-value">${this.$data.playerInstance?.version}
                        </div>
                    </div>
                </div>
                `,
          html: true,
        },
        mask: {
          clickEvent: {
            toClose: true,
          },
        },
        btn: {
          ok: {
            enable: false,
          },
        },
        width: window.innerWidth > 550 ? "550px" : "88wv",
        height: window.innerHeight > 550 ? "550px" : "70vh",
        style: `
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
            `,
      });
    },
  };
  const DouYinLiveShortCut = {
    shortCut: new ShortCut("live-short-cut"),
    $data: {
      blockChatRoom: false,
    },
    init() {
      this.shortCut.initGlobalKeyboardListener(this.getShortCutMap());
    },
    getShortCutMap() {
      return {
        "dy-live-block-chatroom": {
          callback() {
            log.info("快捷键 ==> 【屏蔽】聊天室");
            let flag = Panel.getValue("live-shieldChatRoom");
            Panel.setValue("live-shieldChatRoom", !flag);
          },
        },
        "dy-live-shieldGiftEffects": {
          callback: () => {
            log.info("快捷键 ==> 【屏蔽】礼物特效");
            let flag = Panel.getValue("live-shieldGiftEffects");
            Panel.setValue("live-shieldGiftEffects", !flag);
          },
        },
        "dy-live-shortcut-changeVideoMuted": {
          callback() {
            log.info(`触发快捷键 ==> 切换静音状态`);
            $$("video").forEach(($video) => {
              let muted = !$video.muted;
              log.success(`切换video标签的静音状态为 ${muted}`);
              $video.muted = muted;
            });
          },
        },
      };
    },
  };
  const VideoQualityMap = {
    auto: {
      label: "自动",
      sign: 0,
    },
    origin: {
      label: "原画",
      sign: 5,
    },
    uhd: {
      label: "蓝光",
      sign: 4,
    },
    hd: {
      label: "超清",
      sign: 3,
    },
    sd: {
      label: "高清",
      sign: 2,
    },
    ld: {
      label: "标清",
      sign: 1,
    },
  };
  const DouYinLive = {
    init() {
      DouYinLiveBlock.init();
      DouYinLiveShortCut.init();
      Panel.execMenu("live-pauseVideo", () => {
        this.disableVideoAutoPlay();
      });
      Panel.exec(["live-bgColor-enable", "live-changeBackgroundColor"], () => {
        return this.changeBackgroundColor();
      });
      Panel.onceExec("live-parsePlayerInstance", () => {
        DouYinLivePlayerInstance.initMenu();
      });
      Panel.execMenuOnce("live-prevent-wheel-switchLiveRoom", () => {
        const result = domUtils.on(
          document,
          ["wheel", "mousewheel"],
          (evt) => {
            if (!Panel.getValue("live-prevent-wheel-switchLiveRoom")) {
              return;
            }
            if (!DouYinRouter.isLive()) {
              return;
            }
            domUtils.preventEvent(evt);
          },
          {
            capture: true,
          }
        );
        return [result.off];
      });
      domUtils.ready(() => {
        Panel.execMenuOnce("live-danmu-shield-rule-enable", () => {
          return DouYinLiveMessage.filterMessage();
        });
        Panel.execMenuOnce("live-waitToRemovePauseDialog", () => {
          return this.waitToRemovePauseDialog();
        });
        Panel.execMenu("live-chooseQuality", (option) => {
          if (option.value === "auto") {
            return;
          }
          this.chooseQuality(option.value);
        });
        Panel.execMenu("live-autoEnterElementFullScreen", () => {
          this.autoEnterElementFullScreen();
        });
        Panel.execMenu("dy-live-autoCloseChatRoom", () => {
          this.autoCloseChatRoom();
        });
      });
    },
    autoEnterElementFullScreen() {
      ReactUtils.waitReactPropsToSet("xg-icon.xgplayer-fullscreen + xg-icon  div:has(>svg)", "reactFiber", {
        check(reactInstance) {
          return typeof reactInstance?.memoizedProps?.onClick === "function";
        },
        set(reactInstance, $target) {
          let $xgIcon = $target.closest("xg-icon");
          if ($xgIcon && domUtils.text($xgIcon).includes("退出网页全屏")) {
            log.warn("抖音已自动进入网页全屏，不执行脚本的操作");
            return;
          }
          log.success("成功自动进入网页全屏");
          reactInstance.memoizedProps.onClick();
        },
      });
    },
    chooseQuality(quality = "origin") {
      ReactUtils.waitReactPropsToSet(
        'xg-inner-controls xg-right-grid >div:has([data-e2e="quality-selector"])',
        "reactProps",
        {
          check(reactInstance) {
            return (
              typeof reactInstance?.children?.props?.children?.props?.qualityHandler === "object" &&
              typeof reactInstance?.children?.props?.children?.props?.qualityHandler?.getCurrentQualityList ===
                "function"
            );
          },
          set(reactInstance) {
            let qualityHandler = reactInstance.children.props.children.props.qualityHandler;
            let currentQualityList = qualityHandler.getCurrentQualityList();
            if (!currentQualityList.includes(quality)) {
              Qmsg.warning("当前直播没有【" + quality + "】画质，自动选择最高画质");
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
          },
        }
      );
      ReactUtils.waitReactPropsToSet(
        "#PlayerLayout .douyin-player-controls .QualitySwitchNewPlugin > div",
        "reactFiber",
        {
          check(reactPropInst, $el) {
            return (
              typeof reactPropInst?.return?.memoizedProps?.qualityHandler?.setCurrentQuality === "function" &&
              Array.isArray(reactPropInst?.return?.memoizedProps?.qualityList)
            );
          },
          set(reactPropInst, $el) {
            let qualityHandler = reactPropInst.return.memoizedProps.qualityHandler;
            let currentQualityList = reactPropInst?.return?.memoizedProps?.qualityList;
            if (!currentQualityList.includes(quality)) {
              Qmsg.warning("当前直播没有【" + quality + "】画质，自动选择最高画质");
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
          },
        }
      );
    },
    unlockImageQuality() {
      log.info("解锁画质选择");
      domUtils.on(
        document,
        "click",
        'div[data-e2e="quality-selector"] > div',
        function (event, clickNode) {
          domUtils.preventEvent(event);
          try {
            let reactInst = utils.getReactInstance(clickNode);
            let $QualitySwitchNewPlugin = clickNode.closest(".QualitySwitchNewPlugin");
            let parent = clickNode.closest(".QualitySwitchNewPlugin > div") || clickNode.closest("div[data-index]");
            let parentReactInst = utils.getReactInstance(parent);
            let qualityHandler = {
              getCurrentQuality() {
                return reactInst?.reactFiber?.["key"];
              },
              getCurrentQualityList() {
                return (
                  parentReactInst?.reactFiber?.return?.memoizedProps?.qualityList ||
                  parentReactInst?.reactProps?.["children"]?.["ref"]?.["current"]
                );
              },
              setCurrentQuality(quality) {
                let setCurrentQuality =
                  parentReactInst?.reactFiber?.return?.memoizedProps?.qualityHandler?.setCurrentQuality ||
                  parentReactInst?.reactFiber?.child?.memoizedProps?.qualityHandler?.setCurrentQuality ||
                  parentReactInst?.reactFiber?.return?.memoizedProps?.qualityHandler?.setCurrentQuality ||
                  parentReactInst?.reactProps?.["children"]?.["ref"]?.["current"]?.setCurrentQuality;
                if (typeof setCurrentQuality === "function") {
                  setCurrentQuality(quality);
                } else {
                  throw new Error("not find function：setCurrentQuality ");
                }
              },
            };
            if ($QualitySwitchNewPlugin) {
              let QualitySwitchNewPluginReactInst = utils.getReactInstance($QualitySwitchNewPlugin);
              let current = QualitySwitchNewPluginReactInst?.reactFiber?.child?.ref?.current;
              if (
                typeof current === "object" &&
                current != null &&
                typeof current?.getCurrentQuality === "function" &&
                typeof current?.getCurrentQualityList === "function" &&
                typeof current?.setCurrentQuality === "function"
              ) {
                qualityHandler = current;
              }
            }
            let currentQuality = qualityHandler.getCurrentQuality();
            log.info("当前选择的画质: " + currentQuality);
            log.info(["所有的画质: ", qualityHandler.getCurrentQualityList()]);
            qualityHandler.setCurrentQuality(currentQuality);
          } catch (error) {
            log.error(error);
            Qmsg.error("切换画质失败");
          }
        },
        {
          capture: true,
        }
      );
    },
    waitToRemovePauseDialog() {
      log.info("监听【长时间无操作，已暂停播放】弹窗");
      let checkDialogToClose = ($ele, from) => {
        let eleText = domUtils.text($ele);
        if (eleText.includes("长时间无操作") && eleText.includes("暂停播放")) {
          Qmsg.info(`检测${from}：出现【长时间无操作，已暂停播放】弹窗`, {
            consoleLogContent: true,
          });
          let $rect = utils.getReactInstance($ele);
          if (typeof $rect.reactContainer === "object") {
            let closeDialogFn =
              utils.queryProperty($rect.reactContainer, (obj) => {
                if (typeof obj["onClose"] === "function") {
                  return {
                    isFind: true,
                    data: obj["onClose"],
                  };
                } else if (typeof obj?.["memoizedProps"]?.["onClose"] === "function") {
                  return {
                    isFind: true,
                    data: obj?.["memoizedProps"]?.["onClose"],
                  };
                } else {
                  return {
                    isFind: false,
                    data: obj["child"],
                  };
                }
              }) || $rect?.reactContainer?.memoizedState?.element?.props?.children?.props?.onClose;
            if (typeof closeDialogFn === "function") {
              Qmsg.success(`检测${from}：调用函数关闭弹窗`, {
                consoleLogContent: true,
              });
              closeDialogFn();
            }
          }
        }
      };
      let lockFn = new utils.LockFunction(() => {
        if (!Panel.getValue("live-waitToRemovePauseDialog")) {
          return;
        }
        $$("body > div[elementtiming='element-timing']").forEach(($elementTiming) => {
          checkDialogToClose($elementTiming, "1");
        });
        $$('body > div:not([id="root"]):not(:empty)').forEach(($ele) => {
          checkDialogToClose($ele, "2");
        });
      });
      const observer = utils.mutationObserver(document.body || document.documentElement, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback() {
          lockFn.run();
        },
      });
      return [
        () => {
          observer?.disconnect();
        },
      ];
    },
    disableVideoAutoPlay() {
      domUtils
        .waitAnyNode(['.basicPlayer[data-e2e="basicPlayer"] video', "#PlayerLayout .douyin-player video"], 1e4)
        .then(($video) => {
          if (!$video) {
            return;
          }
          $video.autoplay = false;
          $video.pause();
          const timeout = 3e3;
          const playListener = (evt) => {
            domUtils.preventEvent(evt);
            $video.autoplay = false;
            $video.pause();
            log.success("成功禁止自动播放视频(直播)");
          };
          domUtils.offAll($video, "play");
          domUtils.offAll($video, "pause");
          domUtils.on($video, "play", playListener, {
            capture: true,
          });
          const reloadVideo = () => {
            const keydownEvent = new KeyboardEvent("keydown", {
              bubbles: true,
              cancelable: true,
              key: "E",
              code: "KeyE",
            });
            document.body.dispatchEvent(keydownEvent);
          };
          const cb = () => {
            domUtils.off($video, "play", playListener, {
              capture: true,
            });
            log.info(`移除监听自动播放`);
            const listenPlayVideo = () => {
              domUtils.offAll($video, "play");
              domUtils.on(
                $video,
                "play",
                (evt) => {
                  log.info(`播放-视频重载`);
                  reloadVideo();
                },
                {
                  once: true,
                  capture: true,
                }
              );
            };
            domUtils.on(
              $video,
              "pause",
              (evt) => {
                listenPlayVideo();
              },
              {
                capture: true,
              }
            );
            listenPlayVideo();
          };
          setTimeout(cb, timeout);
        });
    },
    changeBackgroundColor() {
      log.info("修改视频背景颜色");
      let color = Panel.getValue("live-changeBackgroundColor");
      return addStyle(
        `
		div[id^="living_room_player_container"] div[data-anchor-id="living-background"] div:has(>.xgplayer-dynamic-bg),
		#LeftBackgroundLayout {
			background: ${color} !important;
		}
		div[id^="living_room_player_container"] div[data-anchor-id="living-background"] .xgplayer-dynamic-bg,
		#LeftBackgroundLayout .douyin-player-dynamic-background{
			visibility: hidden;
		}
		`
      );
    },
    autoCloseChatRoom() {
      ReactUtils.waitReactPropsToSet("#chatroom .chatroom_close", "reactFiber", {
        check(reactPropInst, $el) {
          return typeof reactPropInst?.memoizedProps?.onClick === "function";
        },
        set(reactPropInst, $el) {
          log.info(`自动关闭聊天室-点击关闭聊天室按钮`);
          $el.click();
        },
      });
    },
  };
  const DouYinRedirect = {
    init() {
      Panel.execMenu("douyin-redirect-url-home-to-root", () => {
        this.redirectUrlHomeToRoot();
      });
    },
    redirectUrlHomeToRoot() {
      if (window.location.pathname === "/home") {
        log.info("从首页跳转到根目录");
        window.location.href = window.location.origin + "/?is_from_mobile_home=1&recommend=1";
      }
    },
  };
  const MobileCSS =
    '/* 去除顶部的padding距离 */\r\n#douyin-right-container {\r\n  padding-top: 0;\r\n}\r\n/* 放大放大顶部的综合、视频、用户等header的宽度 */\r\n#search-content-area > div > div:nth-child(1) > div:nth-child(1) {\r\n  width: 100vw;\r\n}\r\n/* 放大顶部的综合、视频、用户等header */\r\n#search-content-area > div > div:nth-child(1) > div:nth-child(1) > div {\r\n  transform: scale(0.8);\r\n}\r\n/* 视频宽度 */\r\nul[data-e2e="scroll-list"] {\r\n  padding: 0px 10px;\r\n}\r\n#sliderVideo {\r\n  width: -webkit-fill-available;\r\n}\r\n/* 距离是顶部导航栏的高度 */\r\n#search-content-area {\r\n  margin-top: 65px;\r\n}\r\n/* 从其它页面进入搜索页面，例如路径是/root/search，会出现返回按钮 */\r\n#douyin-header header {\r\n  flex-direction: row-reverse !important;\r\n}\r\n#douyin-header header > div:nth-child(2) {\r\n  position: unset !important;\r\n}\r\n/* 调整视频列表的宽度 */\r\n@media screen and (max-width: 550px) {\r\n  #sliderVideo {\r\n    width: 100%;\r\n  }\r\n  /* 调整顶部搜索框的宽度 */\r\n  #component-header\r\n    div[data-click="doubleClick"]\r\n    > div[data-click="doubleClick"]\r\n    > div:has(input[data-e2e="searchbar-input"]) {\r\n    width: -webkit-fill-available;\r\n    padding-right: 0;\r\n  }\r\n}\r\n';
  const DouYinSearchBlock = {
    init() {
      Panel.execMenuOnce("douyin-search-shieldReleatedSearches", () => {
        return this.shieldReleatedSearches();
      });
      Panel.execMenuOnce("douyin-search-blockAIAsk", () => {
        return this.blockAIAsk();
      });
      Panel.execMenuOnce("douyin-search-blockAskAI", () => {
        return this.blockAskAI();
      });
      this.resizeSearchFilterBar();
    },
    resizeSearchFilterBar() {
      domUtils.ready(() => {
        const $searchFilter = $("div:has(+#search-result-container)");
        const $searchResultContainer = $("#search-result-container");
        if (!$searchFilter) {
          return;
        }
        if (!$searchResultContainer) {
          return;
        }
        const searchResultContainerWidth = domUtils.width($searchResultContainer);
        domUtils.css($searchFilter, "width", searchResultContainerWidth + "px");
      });
    },
    shieldReleatedSearches() {
      log.info("【屏蔽】相关搜索");
      let lockFn = new utils.LockFunction(() => {
        if (!DouYinRouter.isSearch()) return;
        $$('[id^="waterfall_item"]:has(.search-result-card p)').forEach(($el) => {
          const $p = $el.querySelector("p");
          const text = domUtils.text($p);
          if (text.includes("相关搜索")) {
            domUtils.remove($el);
          }
        });
      });
      const observer = utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        CommonUtil.addBlockCSS("#search-content-area > div > div:nth-child(2)"),
        addStyle(
          `
			/* 把搜索结果宽度自适应 */
			#search-result-container{
        width: auto !important;
			}`
        ),
        () => {
          observer.disconnect();
        },
      ];
    },
    blockAIAsk() {
      log.info(`【屏蔽】AI问一问`);
      return CommonUtil.addBlockCSS("#search-content-area > div > div:nth-child(2) > div > div:first-child");
    },
    blockAskAI() {
      log.info(`【屏蔽】问问AI`);
      return CommonUtil.addBlockCSS(
        '#search-toolbar-container>div:has(svg path[d="M14.837 12.506a42.284 42.284 0 0 0 1.96 4.006l.433.775-.992.5-.53-1.001-.208-.4-.017-.032-.034-.009a7.2 7.2 0 0 0-2.023-.233 7.247 7.247 0 0 0-1.647.234l-.034.009-.015.031-.21.4-.53 1-.99-.5.432-.774a42.367 42.367 0 0 0 1.96-4.006l.535-1.255c.456.082.918.082 1.375 0l.535 1.255zm4.538-1.914c-.09.28-.145.567-.164.855-.02.317-.032.64-.032.96v2.823c0 .32.01.643.032.96.019.288.074.575.164.854h-1.472c.09-.28.145-.566.164-.854.021-.32.032-.644.032-.96v-2.823c0-.316-.01-.64-.032-.96a3.556 3.556 0 0 0-.164-.855h1.472zm-6.086 2.411c-.28.684-.585 1.377-.907 2.06l-.063.133.146-.02a8.351 8.351 0 0 1 2.299 0l.145.02-.062-.133a42.237 42.237 0 0 1-.907-2.06l-.326-.796-.325.796z"])'
      );
    },
  };
  const DouYinSearch = {
    init() {
      DouYinSearchBlock.init();
      Panel.execMenuOnce("mobileMode", (option) => {
        return this.mobileMode(option);
      });
      Panel.execMenuOnce("dy-search-disableClickToEnterFullScreen", () => {
        return this.disableClickToEnterFullScreen();
      });
      Panel.execMenuOnce("live-setSearchResultFilterWithVideoStyle", (option) => {
        return this.setSearchResultFilterWithVideoStyle(option.value);
      });
    },
    mobileMode(option) {
      log.info("搜索-手机模式");
      let result = [];
      result.push(addStyle(MobileCSS));
      result.push(
        addStyle(
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
      domUtils.waitNode("#relatedVideoCard").then(($relatedVideoCard) => {
        log.info("评论区展开的className：" + $relatedVideoCard.className);
        option.addStoreValue(
          addStyle(
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
    disableClickToEnterFullScreen() {
      log.info("搜索-禁止点击视频区域进入全屏");
      const result1 = domUtils.on(
        document,
        "click",
        ".focusPanel",
        (event, selectorTarget) => {
          if (!DouYinRouter.isSearch()) {
            return;
          }
          domUtils.preventEvent(event);
          let $click = selectorTarget;
          let $parent = $click.parentElement?.parentElement;
          let $video = $parent.querySelector("video");
          if ($video) {
            if ($video.paused) {
              $video.play();
              log.info(".focusPanel：播放视频");
            } else {
              $video.pause();
              log.info(".focusPanel：暂停视频");
            }
          } else {
            Qmsg.error(".focusPanel未找到 video标签", {
              isHTML: false,
            });
          }
        },
        {
          capture: true,
        }
      );
      const result2 = domUtils.on(
        document,
        "click",
        "#sliderVideo video",
        (event, selectorTarget) => {
          if (!DouYinRouter.isSearch()) {
            return;
          }
          domUtils.preventEvent(event);
          let $video = selectorTarget;
          if ($video.paused) {
            $video.play();
            log.info("#sliderVideo video：播放视频");
          } else {
            $video.pause();
            log.info("#sliderVideo video：暂停视频");
          }
        },
        {
          capture: true,
        }
      );
      return [result1.off, result2.off];
    },
    setSearchResultFilterWithVideoStyle(lineMode = "one") {
      log.info(`设置搜索结果-按视频过滤的显示样式：${lineMode}`);
      if (lineMode === "one") {
        cookieManager.set({
          name: "SEARCH_RESULT_LIST_TYPE",
          value: encodeURIComponent(`"single"`),
        });
        return addStyle(
          `
			@media screen and (max-width: 800px){
				.search-horizontal-new-layout ul[data-e2e="scroll-list"] li{
					width: calc(100% - 21px);
				}
			}
			`
        );
      } else if (lineMode === "double") {
        cookieManager.set({
          name: "SEARCH_RESULT_LIST_TYPE",
          value: encodeURIComponent(`"multi"`),
        });
        return addStyle(
          `	
			@media screen and (max-width: 800px){
				.search-horizontal-new-layout ul[data-e2e="scroll-list"] li{
					width: calc(50% - 21px);
				}
			}
			`
        );
      }
    },
  };
  const BlockLeftNavigator = {
    init() {
      Panel.exec(
        ["shieldLeftNavigator", "search-shieldLeftNavigator"],
        () => {
          return this.shieldLeftNavigator();
        },
        (keyList) => {
          const [mainKey, childKey] = keyList;
          let mainValue = Panel.getValue(mainKey);
          let childValue = Panel.getValue(childKey);
          if (DouYinRouter.isSearch()) {
            if (childValue == 1) {
              return true;
            } else if (childValue == 0) {
              return false;
            } else;
          }
          return mainValue;
        }
      );
      Panel.execMenuOnce("shieldLeftNavigator-tab-home", () => {
        return this.block_tab_home();
      });
      Panel.execMenuOnce("shieldLeftNavigator-tab-recommend", () => {
        return this.block_tab_recommend();
      });
      Panel.execMenuOnce("shieldLeftNavigator-tab-follow", () => {
        return this.block_tab_follow();
      });
      Panel.execMenuOnce("shieldLeftNavigator-tab-friend", () => {
        return this.block_tab_friend();
      });
      Panel.execMenuOnce("shieldLeftNavigator-tab-user_self", () => {
        return this.block_tab_user_self();
      });
      Panel.execMenuOnce("shieldLeftNavigator-tab-live", () => {
        return this.block_tab_live();
      });
      Panel.execMenuOnce("shieldLeftNavigator-tab-vs", () => {
        return this.block_tab_vs();
      });
      Panel.execMenuOnce("shieldLeftNavigator-tab-series", () => {
        return this.block_tab_series();
      });
      Panel.execMenuOnce("shieldLeftNavigator-tab-ai-search", () => {
        return this.block_tab_ai_search();
      });
    },
    shieldLeftNavigator() {
      log.info("【屏蔽】左侧导航栏");
      let result = [];
      result.push(CommonUtil.addBlockCSS("#douyin-navigation"));
      result.push(
        addStyle(
          `
			/* 修复顶部导航栏的宽度 */
			#douyin-header{
				width: 100%;
			}`
        )
      );
      return result;
    },
    block_tab_home() {
      log.info("【屏蔽】精选");
      return CommonUtil.addBlockCSS('div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-discover)');
    },
    block_tab_recommend() {
      log.info("【屏蔽】推荐");
      return CommonUtil.addBlockCSS('div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-recommend)');
    },
    block_tab_follow() {
      log.info("【屏蔽】关注");
      return CommonUtil.addBlockCSS('div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-follow)');
    },
    block_tab_friend() {
      log.info("【屏蔽】朋友");
      return CommonUtil.addBlockCSS('div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-friend)');
    },
    block_tab_user_self() {
      log.info("【屏蔽】我的");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self)'
      );
    },
    block_tab_user_self_like() {
      log.info("【屏蔽】喜欢");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self_like)'
      );
    },
    block_tab_user_self_collection() {
      log.info("【屏蔽】收藏");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self_collection)'
      );
    },
    block_tab_user_self_record() {
      log.info("【屏蔽】观看历史");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div > div:has(.tab-user_self_record)'
      );
    },
    block_tab_live() {
      log.info("【屏蔽】直播");
      return CommonUtil.addBlockCSS('div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-live)');
    },
    block_tab_vs() {
      log.info("【屏蔽】放映厅");
      return CommonUtil.addBlockCSS('div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-vs)');
    },
    block_tab_series() {
      log.info(`短剧`);
      return CommonUtil.addBlockCSS('div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-series)');
    },
    block_tab_ai_search() {
      log.info(`【屏蔽】AI搜索`);
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has([class^="tab-aisearch"])'
      );
    },
    block_tab_channel_300203() {
      log.info("【屏蔽】知识");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300203)'
      );
    },
    block_tab_channel_300205() {
      log.info("【屏蔽】游戏");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300205)'
      );
    },
    block_tab_channel_300206() {
      log.info("【屏蔽】二次元");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300206)'
      );
    },
    block_tab_channel_300209() {
      log.info("【屏蔽】音乐");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300209)'
      );
    },
    block_tab_channel_300204() {
      log.info("【屏蔽】美食");
      return CommonUtil.addBlockCSS(
        'div[data-e2e="douyin-navigation"] > div > div > div > div:has(.tab-channel_300204)'
      );
    },
  };
  const blockCSS$8 =
    '/* 从顶部往下弹出的下载抖音电脑版的drawer提示 */\r\n#douyin-web-download-guide-container\r\n/* 视频信息区域的 及时接收作品更新提醒 下载电脑客户端 */\r\n/* 但是这个CSS又会屏蔽右键菜单 */\r\n/*.basePlayerContainer xg-bar.xg-right-bar + div:not(:has(>svg))*/ ,\r\n/* 下载客户端，使用壁纸 */\r\ndiv:has(+#wallpaper-modal),\r\n/* 下载客户端，实时接收消息通知 */\r\n/* 下载客户端，实时接收好友消息 */\r\ndiv:has(> a[download*="douyin-downloade"]):has(+.popShadowAnimation),\r\ndiv:has(> a[download*="douyin-downloade"]):has(+div>[data-e2e="listDlgTest-container"]),\r\n/* 客户端登录访问更便捷 */\r\ndiv:has(> a[download*="douyin-downloade"]):has(+.userMenuPanelShadowAnimation),\r\n/* 前往电脑客户端，即享下载视频 */\r\n[data-e2e="video-share-container"] div:has(>div>div> a[download*="douyin-downloader"]):first-child,\r\n/* so.douyin.com的广告item */\r\n.card-item:has(.h5-ad-video-card),\r\n.card-item:has([data-is-ad="true"]) {\r\n  display: none !important;\r\n}\r\n';
  const blockCSS$7 =
    '/* 资料右边的 下载桌面客户端，桌面快捷访问 */\r\ndiv[data-e2e="user-detail"] div:has(> div > a[href*="douyin-pc"]) {\r\n  display: none !important;\r\n}\r\n';
  const DouYinUser = {
    init() {
      addStyle(blockCSS$7);
      domUtils.ready(() => {
        Panel.execMenu("dy-user-addShowUserUID", () => {
          this.addShowUserUID();
        });
      });
    },
    addShowUserUID() {
      ReactUtils.waitReactPropsToSet(`[data-e2e="user-detail"] [data-e2e="user-info"]`, "reactFiber", {
        msg: "显示UID",
        check(reactInstance) {
          return typeof reactInstance?.return?.memoizedProps?.userInfo?.uid === "string";
        },
        set(reactInstance, $target) {
          let uid = reactInstance?.return?.memoizedProps?.userInfo?.uid;
          domUtils.remove($target.querySelectorAll(".gm-user-uid"));
          let $userUID = domUtils.createElement(
            "p",
            {
              className: "gm-user-uid",
              innerHTML: `
							<span>UID：${uid}</span>
						`,
            },
            {
              style:
                "color: var(--color-text-t3);margin-right: 20px;font-size: 12px;line-height: 20px;cursor: pointer;",
            }
          );
          domUtils.on($userUID, "click", (event) => {
            domUtils.preventEvent(event);
            utils.copy(uid);
            Qmsg.success("复制成功");
          });
          $target.appendChild($userUID);
        },
      });
    },
  };
  const blockCSS$6 =
    '/* 单个视频页面右侧的 下载客户端，桌面快捷访问 */\r\ndiv[data-e2e="video-detail"] div > :has(> div:last-child > a[href*="douyin-pc-web"]) {\r\n  display: none !important;\r\n}\r\n';
  const DouYinVideo = {
    init() {
      addStyle(blockCSS$6);
    },
  };
  const PanelComponents = {
    $data: {
      __storeApiFn: null,
      get storeApiValue() {
        if (!this.__storeApiFn) {
          this.__storeApiFn = new Utils.Dictionary();
        }
        return this.__storeApiFn;
      },
    },
    getStorageApi(type) {
      if (!this.hasStorageApi(type)) {
        return;
      }
      return this.$data.storeApiValue.get(type);
    },
    hasStorageApi(type) {
      return this.$data.storeApiValue.has(type);
    },
    setStorageApi(type, storageApiValue) {
      this.$data.storeApiValue.set(type, storageApiValue);
    },
    initComponentsStorageApi(type, config, storageApiValue) {
      let propsStorageApi;
      if (this.hasStorageApi(type)) {
        propsStorageApi = this.getStorageApi(type);
      } else {
        propsStorageApi = storageApiValue;
      }
      this.setComponentsStorageApiProperty(config, propsStorageApi);
    },
    setComponentsStorageApiProperty(config, storageApiValue) {
      Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
    },
  };
  const UIInput = function (
    text,
    key,
    defaultValue,
    description,
    changeCallback,
    placeholder = "",
    isNumber,
    isPassword,
    afterAddToUListCallBack,
    valueChangeCallback
  ) {
    const result = {
      text,
      type: "input",
      isNumber: Boolean(isNumber),
      isPassword: Boolean(isPassword),
      attributes: {},
      props: {},
      description,
      afterAddToUListCallBack,
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, value, valueAsNumber) {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      placeholder,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("input", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const UISelectMultiple = function (
    text,
    key,
    defaultValue,
    data,
    selectCallBack,
    description,
    placeholder = "请至少选择一个选项",
    selectConfirmDialogDetails,
    valueChangeCallBack
  ) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    const result = {
      text,
      type: "select-multiple",
      description,
      placeholder,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      selectConfirmDialogConfig: selectConfirmDialogDetails,
      callback(selectInfo) {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        const value = [];
        selectInfo.forEach((selectedInfo) => {
          value.push(selectedInfo.value);
        });
        log.info(`多选-选择：`, value);
        storageApiValue.set(key, value);
      },
      data: selectData,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("select-multiple", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const UISwitch = function (
    text,
    key,
    defaultValue,
    clickCallBack,
    description,
    afterAddToUListCallBack,
    disabled,
    valueChangeCallBack
  ) {
    const result = {
      text,
      type: "switch",
      description,
      disabled,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        const value = storageApiValue.get(key, defaultValue);
        return value;
      },
      callback(event, __value) {
        const value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
        if (typeof valueChangeCallBack === "function") {
          valueChangeCallBack(event, value);
        }
      },
      afterAddToUListCallBack,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("switch", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  class RuleEditView {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView() {
      let $dialog = __pops__.confirm({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist"></ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `,
          html: true,
        },
        btn: utils.assign(
          {
            ok: {
              callback: async () => {
                await submitSaveOption();
              },
            },
          },
          this.option.btn || {},
          true
        ),
        drag: true,
        mask: {
          enable: true,
        },
        style: `
                ${__pops__.config.cssText.panelCSS}
                
                .rule-form-container {
                    
                }
                .rule-form-container li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 20px;
                    gap: 10px;
                }
				.rule-form-ulist-dynamic{
					--button-margin-top: 0px;
					--button-margin-right: 0px;
					--button-margin-bottom: 0px;
					--button-margin-left: 0px;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					padding: 5px 0px 5px 20px;
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
				.pops-panel-item-left-desc-text{
					line-height: normal;
					margin-top: 6px;
					font-size: 0.8em;
					color: rgb(108, 108, 108);
				}

                ${this.option?.style ?? ""}
            `,
        width:
          typeof this.option.width === "function" ? this.option.width() : window.innerWidth > 500 ? "500px" : "88vw",
        height:
          typeof this.option.height === "function" ? this.option.height() : window.innerHeight > 500 ? "500px" : "80vh",
      });
      let $form = $dialog.$shadowRoot.querySelector(".rule-form-container");
      $dialog.$shadowRoot.querySelector("input[type=submit]");
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
    option;
    $data = {
      isFilteredData: [],
    };
    constructor(option) {
      this.option = option;
    }
    showView() {
      let $alert = __pops__.alert({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
                <div class="filter-container"></div>
                `,
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default",
          },
        },
        drag: true,
        mask: {
          enable: true,
        },
        width: window.innerWidth > 500 ? "350px" : "80vw",
        height: window.innerHeight > 500 ? "300px" : "70vh",
        style: `
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
            `,
      });
      let $filterContainer = $alert.$shadowRoot.querySelector(".filter-container");
      let $fragment = document.createDocumentFragment();
      this.option.filterOption.forEach((filterOption) => {
        let $button = domUtils.createElement(
          "button",
          {
            innerText: filterOption.name,
          },
          {
            type: "button",
          }
        );
        let execFilterAndCloseDialog = async () => {
          this.$data.isFilteredData = [];
          let allRuleInfo = await this.option.getAllRuleInfo();
          allRuleInfo.forEach(async (ruleInfo) => {
            let filterResult = await filterOption.filterCallBack(ruleInfo.data);
            if (filterResult) {
              domUtils.show(ruleInfo.$el, false);
            } else {
              domUtils.hide(ruleInfo.$el, false);
              this.$data.isFilteredData.push(ruleInfo.data);
            }
          });
          if (typeof this.option.execFilterCallBack === "function") {
            await this.option.execFilterCallBack();
          }
          $alert.close();
        };
        domUtils.on($button, "click", async (event) => {
          domUtils.preventEvent(event);
          if (typeof filterOption.callback === "function") {
            let result = await filterOption.callback(event, execFilterAndCloseDialog);
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
    getFilteredData() {
      return this.$data.isFilteredData;
    }
  }
  class RuleView {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView(filterCallBack) {
      let $popsConfirm = __pops__.confirm({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
                    <div class="rule-view-container">
                    </div>
                    `,
          html: true,
        },
        btn: {
          merge: true,
          reverse: false,
          position: "space-between",
          ok: {
            enable: this.option?.bottomControls?.add?.enable || true,
            type: "primary",
            text: "添加",
            callback: async (event) => {
              this.showEditView(false, await this.option.getAddData(), $popsConfirm.$shadowRoot);
            },
          },
          close: {
            enable: true,
            callback(event) {
              $popsConfirm.close();
            },
          },
          cancel: {
            enable: this.option?.bottomControls?.filter?.enable || false,
            type: "default",
            text: "过滤",
            callback: async (details, event) => {
              if (typeof this.option?.bottomControls?.filter?.callback === "function") {
                let result = await this.option.bottomControls.filter.callback();
                if (typeof result === "boolean" && !result) {
                  return;
                }
              }
              let getAllRuleElement = () => {
                return Array.from($popsConfirm.$shadowRoot.querySelectorAll(".rule-view-container .rule-item"));
              };
              let $button = event.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");
              if (domUtils.text($button).includes("取消")) {
                let cancelFilterResult = await this.option?.bottomControls?.filter?.cancelFilterCallback?.({
                  $button,
                  getAllRuleElement,
                });
                if (typeof cancelFilterResult === "boolean" && !cancelFilterResult) {
                  return;
                }
                getAllRuleElement().forEach(($el) => {
                  domUtils.show($el, false);
                });
                domUtils.text($button, "过滤");
              } else {
                let ruleFilterView = new RuleFilterView({
                  title: this.option.bottomControls?.filter?.title ?? "过滤规则",
                  filterOption: this.option.bottomControls?.filter?.option || [],
                  execFilterCallBack: async () => {
                    domUtils.text($button, "取消过滤");
                    await this.option.bottomControls?.filter?.execFilterCallBack?.();
                    const isFilteredData = ruleFilterView.getFilteredData();
                    if (isFilteredData.length) {
                      domUtils.text($button, `取消过滤(${isFilteredData.length})`);
                    }
                  },
                  getAllRuleInfo: () => {
                    return getAllRuleElement().map(($el) => {
                      return {
                        data: this.parseRuleItemElement($el).data,
                        $el,
                      };
                    });
                  },
                });
                ruleFilterView.showView();
              }
            },
          },
          other: {
            enable: this.option?.bottomControls?.clear?.enable || true,
            type: "xiaomi-primary",
            text: `清空所有(${(await this.option.data()).length})`,
            callback: (event) => {
              let $askDialog = __pops__.confirm({
                title: {
                  text: "提示",
                  position: "center",
                },
                content: {
                  text: "确定清空所有的数据？",
                  html: false,
                },
                btn: {
                  ok: {
                    enable: true,
                    callback: async (popsEvent) => {
                      log.success("清空所有");
                      if (typeof this.option?.bottomControls?.clear?.callback === "function") {
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
                    },
                  },
                  cancel: {
                    text: "取消",
                    enable: true,
                  },
                },
                mask: { enable: true },
                width: "300px",
                height: "200px",
              });
            },
          },
        },
        mask: {
          enable: true,
        },
        width: window.innerWidth > 500 ? "500px" : "88vw",
        height: window.innerHeight > 500 ? "500px" : "80vh",
        style: `
            ${__pops__.config.cssText.panelCSS}
            
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
            `,
      });
      let allData = await this.option.data();
      let changeButtonText = false;
      let isFilteredDataLength = 0;
      for (let index = 0; index < allData.length; index++) {
        let item = allData[index];
        let $ruleItemList = await this.appendRuleItemElement($popsConfirm.$shadowRoot, item);
        let isNotFilterFlag = true;
        if (typeof filterCallBack === "function") {
          isNotFilterFlag = filterCallBack(item);
        } else if (typeof filterCallBack === "number" && !isNaN(filterCallBack)) {
          isNotFilterFlag =
            (await this.option.bottomControls?.filter?.option[filterCallBack]?.filterCallBack(item)) ?? isNotFilterFlag;
        }
        if (!isNotFilterFlag) {
          changeButtonText = true;
          domUtils.hide($ruleItemList, false);
          isFilteredDataLength++;
        }
      }
      if (changeButtonText) {
        let $button = $popsConfirm.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");
        domUtils.text($button, `取消过滤${isFilteredDataLength ? `(${isFilteredDataLength})` : ""}`);
      }
    }
    showEditView(isEdit, editData, $parentShadowRoot, $editRuleItemElement, updateDataCallBack, submitCallBack) {
      let dialogCloseCallBack = async (isSubmit) => {
        if (isSubmit) {
          if (typeof submitCallBack === "function") {
            let newData = await this.option.getData(editData);
            submitCallBack(newData);
          }
        } else {
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
            text: isEdit ? "修改" : "添加",
          },
          cancel: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
          close: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
        },
        onsubmit: async ($form, data) => {
          let result = await this.option.itemControls.edit.onsubmit($form, isEdit, data);
          if (result.success) {
            if (isEdit) {
              Qmsg.success("修改成功");
              $parentShadowRoot &&
                (await this.updateRuleItemElement(result.data, $editRuleItemElement, $parentShadowRoot));
            } else {
              $parentShadowRoot && (await this.appendRuleItemElement($parentShadowRoot, result.data));
            }
          } else {
            if (isEdit) {
              log.error("修改失败");
            }
          }
          return result;
        },
        style: this.option.itemControls.edit.style,
        width: this.option.itemControls.edit.width,
        height: this.option.itemControls.edit.height,
      });
      editView.showView();
    }
    parseViewElement($shadowRoot) {
      let $container = $shadowRoot.querySelector(".rule-view-container");
      let $deleteBtn = $shadowRoot.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");
      return {
        $container,
        $deleteBtn,
      };
    }
    parseRuleItemElement($ruleElement) {
      let $enable = $ruleElement.querySelector(".rule-controls-enable");
      let $enableSwitch = $enable.querySelector(".pops-panel-switch");
      let $enableSwitchInput = $enable.querySelector(".pops-panel-switch__input");
      let $enableSwitchCore = $enable.querySelector(".pops-panel-switch__core");
      let $edit = $ruleElement.querySelector(".rule-controls-edit");
      let $delete = $ruleElement.querySelector(".rule-controls-delete");
      return {
        $enable,
        $enableSwitch,
        $enableSwitchInput,
        $enableSwitchCore,
        $edit,
        $delete,
        data: Reflect.get($ruleElement, "data-rule"),
      };
    }
    async createRuleItemElement(data, $shadowRoot) {
      let name = await this.option.getDataItemName(data);
      let $ruleItem = domUtils.createElement("div", {
        className: "rule-item",
        innerHTML: `
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
					${__pops__.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${__pops__.config.iconSVG.delete}
				</div>
			</div>
			`,
      });
      Reflect.set($ruleItem, "data-rule", data);
      let switchCheckedClassName = "pops-panel-switch-is-checked";
      const { $enable, $enableSwitch, $enableSwitchCore, $enableSwitchInput, $delete, $edit } =
        this.parseRuleItemElement($ruleItem);
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
          domUtils.preventEvent(event);
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
          domUtils.preventEvent(event);
          let $askDialog = __pops__.confirm({
            title: {
              text: "提示",
              position: "center",
            },
            content: {
              text: "确定删除该条数据？",
              html: false,
            },
            btn: {
              ok: {
                enable: true,
                callback: async (popsEvent) => {
                  log.success("删除数据");
                  let flag = await this.option.itemControls.delete.deleteCallBack(data);
                  if (flag) {
                    Qmsg.success("成功删除该数据");
                    $ruleItem.remove();
                    await this.updateDeleteAllBtnText($shadowRoot);
                    $askDialog.close();
                  } else {
                    Qmsg.error("删除该数据失败");
                  }
                },
              },
              cancel: {
                text: "取消",
                enable: true,
              },
            },
            mask: {
              enable: true,
            },
            width: "300px",
            height: "200px",
          });
        });
      } else {
        $delete.remove();
      }
      return $ruleItem;
    }
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
    async updateRuleContaienrElement($shadowRoot) {
      this.clearContent($shadowRoot);
      const { $container } = this.parseViewElement($shadowRoot);
      let data = await this.option.data();
      await this.appendRuleItemElement($shadowRoot, data);
      await this.updateDeleteAllBtnText($shadowRoot);
    }
    async updateRuleItemElement(data, $oldRuleItem, $shadowRoot) {
      let $newRuleItem = await this.createRuleItemElement(data, $shadowRoot);
      $oldRuleItem.after($newRuleItem);
      $oldRuleItem.remove();
    }
    clearContent($shadowRoot) {
      const { $container } = this.parseViewElement($shadowRoot);
      domUtils.html($container, "");
    }
    setDeleteBtnText($shadowRoot, text, isHTML = false) {
      const { $deleteBtn } = this.parseViewElement($shadowRoot);
      if (isHTML) {
        domUtils.html($deleteBtn, text);
      } else {
        domUtils.text($deleteBtn, text);
      }
    }
    async updateDeleteAllBtnText($shadowRoot) {
      let data = await this.option.data();
      this.setDeleteBtnText($shadowRoot, `清空所有(${data.length})`);
    }
  }
  class RuleStorage {
    option;
    constructor(option) {
      this.option = option;
    }
    getAllRule() {
      const allRules = _GM_getValue(this.option.STORAGE_API_KEY, []);
      return allRules;
    }
    setAllRule(rules) {
      _GM_setValue(this.option.STORAGE_API_KEY, rules);
    }
    clearAllRule() {
      this.setAllRule([]);
    }
    getRule(uuid) {
      const allRules = this.getAllRule();
      const findIndex = allRules.findIndex((item) => item.uuid === uuid);
      if (findIndex !== -1) {
        const rule = allRules[findIndex];
        return rule;
      }
    }
    setRule(rule) {
      const allRules = this.getAllRule();
      const findIndex = allRules.findIndex((item) => item.uuid === rule.uuid);
      let updateFlag = false;
      if (findIndex !== -1) {
        allRules[findIndex] = rule;
        this.setAllRule(allRules);
        updateFlag = true;
      }
      return updateFlag;
    }
    addRule(rule) {
      const allRules = this.getAllRule();
      const findIndex = allRules.findIndex((item) => item.uuid === rule.uuid);
      let addFlag = false;
      if (findIndex !== -1);
      else {
        allRules.push(rule);
        this.setAllRule(allRules);
        addFlag = true;
      }
      return addFlag;
    }
    updateRule(rule) {
      const allRules = this.getAllRule();
      const findIndex = allRules.findIndex((item) => item.uuid === rule.uuid);
      if (findIndex !== -1) {
        allRules[findIndex] = rule;
      } else {
        allRules.push(rule);
      }
      this.setAllRule(allRules);
    }
    deleteRule(rule) {
      const allRules = this.getAllRule();
      const ruleUUID = typeof rule === "string" ? rule : rule.uuid;
      const findIndex = allRules.findIndex((item) => item.uuid === ruleUUID);
      if (findIndex !== -1) {
        allRules.splice(findIndex, 1);
        this.setAllRule(allRules);
        return true;
      } else {
        return false;
      }
    }
    importRules(importEndCallBack) {
      const $alert = __pops__.alert({
        title: {
          text: "请选择导入方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
          html: true,
        },
        btn: {
          ok: { enable: false },
          close: {
            enable: true,
            callback(details, event) {
              details.close();
            },
          },
        },
        mask: { enable: true },
        drag: true,
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `,
      });
      const $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
      const $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
      const $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
      const updateRuleToStorage = async (data) => {
        let allData = this.getAllRule();
        const addNewData = [];
        const repeatData = [];
        let isRepeat = false;
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index];
          const findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
          if (findIndex !== -1) {
            repeatData.push({
              index: findIndex,
              data: dataItem,
            });
          } else {
            addNewData.push(dataItem);
          }
        }
        if (repeatData.length) {
          const confirmRepeat = await new Promise((resolve) => {
            __pops__.alert({
              title: {
                text: "覆盖规则",
                position: "center",
              },
              content: {
                text: `存在相同的uuid的规则 ${repeatData.length}条，是否进行覆盖？`,
                html: true,
              },
              btn: {
                close: {
                  callback(details, event) {
                    details.close();
                    resolve(false);
                  },
                },
                ok: {
                  text: "覆盖",
                  callback(details, event) {
                    details.close();
                    resolve(true);
                  },
                },
              },
              width: PanelUISize.info.width,
              height: PanelUISize.info.height,
              mask: { enable: true },
              drag: true,
            });
          });
          if (confirmRepeat) {
            for (const repeatDataItem of repeatData) {
              allData[repeatDataItem.index] = repeatDataItem.data;
            }
            isRepeat = true;
          }
        }
        if (addNewData.length) {
          allData = allData.concat(addNewData);
        }
        this.setAllRule(allData);
        const message = `共 ${data.length} 条规则，新增 ${addNewData.length} 条，覆盖 ${isRepeat ? repeatData.length : 0} 条`;
        Qmsg.success(message);
        importEndCallBack?.();
      };
      const importFile = (subscribeText) => {
        return new Promise(async (resolve) => {
          const data = utils.toJSON(subscribeText);
          if (!Array.isArray(data)) {
            log.error(data);
            Qmsg.error("导入失败，格式不符合（不是数组）", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          if (!data.length) {
            Qmsg.error("导入失败，解析出的数据为空", {
              consoleLogContent: true,
            });
            resolve(false);
            return;
          }
          await updateRuleToStorage(data);
          resolve(true);
        });
      };
      domUtils.on($local, "click", (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        const $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json",
        });
        domUtils.on($input, ["propertychange", "input"], (event2) => {
          if (!$input.files?.length) {
            return;
          }
          const uploadFile = $input.files[0];
          const fileReader = new FileReader();
          fileReader.onload = () => {
            importFile(fileReader.result);
          };
          fileReader.readAsText(uploadFile, "UTF-8");
        });
        $input.click();
      });
      domUtils.on($network, "click", (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        const $prompt = __pops__.prompt({
          title: {
            text: "网络导入",
            position: "center",
          },
          content: {
            text: "",
            placeholder: "请填写URL",
            focus: true,
          },
          btn: {
            close: {
              enable: true,
              callback(details, event2) {
                details.close();
              },
            },
            ok: {
              text: "导入",
              callback: async (details, event2) => {
                const url = details.text;
                if (utils.isNull(url)) {
                  Qmsg.error("请填入完整的url");
                  return;
                }
                const $loading = Qmsg.loading("正在获取配置...");
                const response = await httpx.get(url, {
                  allowInterceptConfig: false,
                });
                $loading.close();
                if (!response.status) {
                  log.error(response);
                  Qmsg.error("获取配置失败", { consoleLogContent: true });
                  return;
                }
                const flag = await importFile(response.data.responseText);
                if (!flag) {
                  return;
                }
                details.close();
              },
            },
            cancel: {
              enable: false,
            },
          },
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto",
        });
        const $promptInput = $prompt.$shadowRoot.querySelector("input");
        const $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
        domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
          const value = domUtils.val($promptInput);
          if (value === "") {
            domUtils.attr($promptOk, "disabled", "true");
          } else {
            domUtils.removeAttr($promptOk, "disabled");
          }
        });
        domUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
          if (keyName === "Enter" && otherCodeList.length === 0) {
            const value = domUtils.val($promptInput);
            if (value !== "") {
              domUtils.trigger($promptOk, "click");
            }
          }
        });
        domUtils.trigger($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        const clipboardInfo = await utils.getClipboardInfo();
        if (clipboardInfo.error != null) {
          Qmsg.error(clipboardInfo.error.toString());
          return;
        }
        if (clipboardInfo.content.trim() === "") {
          Qmsg.warning("获取到的剪贴板内容为空");
          return;
        }
        const flag = await importFile(clipboardInfo.content);
        if (!flag) {
          return;
        }
      });
    }
    exportRules(fileName = "rule.json") {
      const allRules = this.getAllRule();
      const blob = new Blob([JSON.stringify(allRules, null, 4)]);
      const blobUrl = globalThis.URL.createObjectURL(blob);
      const $a = document.createElement("a");
      $a.href = blobUrl;
      $a.download = fileName;
      $a.click();
      setTimeout(() => {
        globalThis.URL.revokeObjectURL(blobUrl);
      }, 1500);
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
  };
  const UITextArea = function (
    text,
    key,
    defaultValue,
    description,
    changeCallback,
    placeholder = "",
    disabled,
    valueChangeCallBack
  ) {
    const result = {
      text,
      type: "textarea",
      attributes: {},
      props: {},
      description,
      placeholder,
      disabled,
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        const value = storageApiValue.get(key, defaultValue);
        if (Array.isArray(value)) {
          return value.join("\n");
        }
        return value;
      },
      callback(event, value) {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("switch", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const DouYinVideoFilter = {
    $key: {
      ENABLE_KEY: "shieldVideo-exec-network-enable",
    },
    $data: {
      isFilterAwemeInfoListWithOnlyShowFilteredVideo: new Utils.Dictionary(),
      networkAwemeInfoMap: new Utils.Dictionary(),
      __videoFilterRuleStorage: null,
      get videoFilterRuleStorage() {
        if (this.__videoFilterRuleStorage == null) {
          this.__videoFilterRuleStorage = new RuleStorage({
            STORAGE_API_KEY: "dy-video-filter-rule",
          });
        }
        return this.__videoFilterRuleStorage;
      },
      get onlyShowFilteredVideo() {
        return Panel.getValue("shieldVideo-only-show-filtered-video");
      },
      videoFilterRules: [],
    },
    init() {
      if (DouYinRouter.isLive()) {
        Panel.deleteExecMenuOnce(this.$key.ENABLE_KEY);
        return;
      }
      this.execFilter();
      domUtils.ready(() => {
        Panel.execMenuOnce("shieldVideo-add-parseVideoInfoButton", () => {
          return this.addParseButton();
        });
      });
    },
    getFilterRules(scopeName, useEnableRule = true) {
      if (!Panel.getValue(this.$key.ENABLE_KEY)) {
        return [];
      }
      const videoFilterRules = this.$data.videoFilterRuleStorage.getAllRule();
      if (!videoFilterRules.length) {
        return [];
      }
      videoFilterRules.sort((a, b) => {
        if (a.data.isFunctionHandler && !b.data.isFunctionHandler) {
          return 1;
        }
        if (!a.data.isFunctionHandler && b.data.isFunctionHandler) {
          return -1;
        }
        return 0;
      });
      if (typeof scopeName === "string") {
        const scopeNameList = Array.isArray(scopeName) ? scopeName : [scopeName];
        const matchedFilterOptionList = videoFilterRules.filter((it) => {
          if (typeof useEnableRule === "boolean" && useEnableRule) {
            if (!it.enable) {
              return false;
            }
          }
          return (
            it.data.scope.includes("all") || scopeNameList.findIndex((item) => it.data.scope.includes(item)) !== -1
          );
        });
        return matchedFilterOptionList;
      } else {
        const matchedFilterOptionList = videoFilterRules.filter((it) => {
          if (typeof useEnableRule === "boolean" && useEnableRule) {
            if (!it.enable) {
              return false;
            }
          }
          return true;
        });
        return matchedFilterOptionList;
      }
    },
    execFilter() {
      const that = this;
      Panel.execMenuOnce(this.$key.ENABLE_KEY, async () => {
        log.info(`执行视频过滤器`);
        const filterBase = new DouYinVideoFilterBase();
        const checkFilterCallBack = (awemeFilterInfoResult) => {
          if (this.$data.onlyShowFilteredVideo) {
            awemeFilterInfoResult.isFilter = !awemeFilterInfoResult.isFilter;
            if (
              typeof awemeFilterInfoResult.transformAwemeInfo.awemeId === "string" &&
              awemeFilterInfoResult.matchedFilterRule
            ) {
              const filterOptionList =
                this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.get(
                  awemeFilterInfoResult.transformAwemeInfo.awemeId
                ) || [];
              filterOptionList.push(awemeFilterInfoResult.matchedFilterRule);
              this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.set(
                awemeFilterInfoResult.transformAwemeInfo.awemeId,
                filterOptionList
              );
            }
          }
          if (typeof awemeFilterInfoResult.transformAwemeInfo.awemeId === "string") {
            DouYinVideoFilter.$data.networkAwemeInfoMap.set(awemeFilterInfoResult.transformAwemeInfo.awemeId, {
              awemeInfo: awemeFilterInfoResult.awemeInfo,
              transformAwemeInfo: awemeFilterInfoResult.transformAwemeInfo,
            });
          }
        };
        const xhr_hook_callback_1 = (scopeName, request) => {
          request.response = async (response) => {
            const filterRules = that.getFilterRules(scopeName);
            if (!filterRules.length) {
              return;
            }
            const data = utils.toJSON(response.responseText);
            const aweme_list = data["aweme_list"];
            if (Array.isArray(aweme_list)) {
              for (let index = 0; index < aweme_list.length; index++) {
                const awemeInfo = aweme_list[index] || {};
                const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo);
                checkFilterCallBack(filterResult);
                if (filterResult.isFilter) {
                  filterBase.sendDislikeVideo(filterResult.matchedFilterRule, awemeInfo);
                  filterBase.removeAweme(aweme_list, index--);
                }
              }
              response.responseText = JSON.stringify(data);
            }
          };
        };
        const xhr_hook_callback_2 = (scopeName, request) => {
          request.response = async (response) => {
            const filterRules = that.getFilterRules(scopeName);
            if (!filterRules.length) {
              return;
            }
            const data = utils.toJSON(response.responseText);
            const aweme_list = data["data"];
            if (Array.isArray(aweme_list)) {
              for (let index = 0; index < aweme_list.length; index++) {
                const awemeItem = aweme_list[index];
                const awemeInfo = awemeItem["aweme"] || {};
                if (typeof awemeItem?.["cell_room"] === "object" && awemeItem?.["cell_room"] != null) {
                  awemeInfo["cell_room"] = awemeItem?.["cell_room"];
                }
                const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo);
                checkFilterCallBack(filterResult);
                if (filterResult.isFilter) {
                  filterBase.sendDislikeVideo(filterResult.matchedFilterRule, awemeInfo);
                  filterBase.removeAweme(aweme_list, index--);
                }
              }
              response.responseText = JSON.stringify(data);
            }
          };
        };
        const xhr_hook_callback_3 = (scopeName, request) => {
          request.response = async (response) => {
            const filterRules = that.getFilterRules(scopeName);
            if (!filterRules.length) {
              return;
            }
            const data = utils.toJSON(response.responseText);
            const cards = data["cards"];
            if (Array.isArray(cards)) {
              for (let index = 0; index < cards.length; index++) {
                const awemeItem = cards[index];
                const awemeInfo = utils.toJSON(awemeItem?.["aweme"] || "{}");
                const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo);
                checkFilterCallBack(filterResult);
                if (filterResult.isFilter) {
                  filterBase.sendDislikeVideo(filterResult.matchedFilterRule, awemeInfo);
                  filterBase.removeAweme(cards, index--);
                }
              }
              response.responseText = JSON.stringify(data);
            }
          };
        };
        const xhr_hook_callback_4 = (scopeName, request) => {
          request.response = async (response) => {
            const filterRules = that.getFilterRules(scopeName);
            if (!filterRules.length) {
              return;
            }
            const data = utils.toJSON(response.responseText);
            const aweme_list = data["data"];
            if (Array.isArray(aweme_list)) {
              for (let index = 0; index < aweme_list.length; index++) {
                const awemeItem = aweme_list[index];
                const awemeInfo = awemeItem["aweme_info"] || {};
                const awemeMixInfo = awemeItem?.["aweme_mix_info"];
                if (awemeInfo == null && typeof awemeMixInfo && awemeMixInfo != null) {
                  const awemeMixInfoItems = awemeMixInfo?.["mix_items"];
                  if (Array.isArray(awemeMixInfoItems)) {
                    for (let mixIndex = 0; mixIndex < awemeMixInfoItems.length; mixIndex++) {
                      const mixItem = awemeMixInfoItems[mixIndex];
                      const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, mixItem);
                      checkFilterCallBack(filterResult);
                      if (filterResult.isFilter) {
                        filterBase.sendDislikeVideo(filterResult.matchedFilterRule, mixItem);
                        filterBase.removeAweme(awemeMixInfoItems, mixIndex--);
                      }
                    }
                    if (awemeMixInfoItems.length === 0) {
                      filterBase.removeAweme(aweme_list, index--);
                    }
                  }
                } else {
                  const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo);
                  checkFilterCallBack(filterResult);
                  if (filterResult.isFilter) {
                    filterBase.sendDislikeVideo(filterResult.matchedFilterRule, awemeInfo);
                    filterBase.removeAweme(aweme_list, index--);
                  }
                }
              }
              response.responseText = JSON.stringify(data);
            }
          };
        };
        const xhr_hook_callback_5 = (scopeName, request) => {
          request.response = async (response) => {
            const filterRules = that.getFilterRules(scopeName);
            if (!filterRules.length) {
              return;
            }
            const data = utils.toJSON(response.responseText);
            const awemeInfo = data["aweme_detail"];
            if (typeof awemeInfo === "object" && awemeInfo != null) {
              const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo);
              checkFilterCallBack(filterResult);
              if (filterResult.isFilter) {
                filterBase.sendDislikeVideo(filterResult.matchedFilterRule, awemeInfo);
              }
              response.responseText = JSON.stringify(data);
            }
          };
        };
        DouYinNetWorkHook.ajaxHooker.hook((request) => {
          const url = CommonUtil.fixUrl(request.url);
          const urlInst = new URL(url);
          if (urlInst.pathname.startsWith("/aweme/v1/web/tab/feed")) {
            xhr_hook_callback_1("xhr-tab", request);
          } else if (urlInst.pathname.startsWith("/aweme/v1/web/aweme/post/")) {
            xhr_hook_callback_1("xhr-userHome", request);
          } else if (urlInst.pathname.startsWith("/aweme/v1/web/mix/aweme/")) {
            xhr_hook_callback_1("xhr-mix", request);
          } else if (urlInst.pathname.startsWith("/aweme/v1/web/aweme/related/")) {
            xhr_hook_callback_1("xhr-related", request);
          } else if (urlInst.pathname.startsWith("/aweme/v1/web/follow/feed")) {
            xhr_hook_callback_2("xhr-follow", request);
          } else if (urlInst.pathname.startsWith("/aweme/v1/web/familiar/feed")) {
            xhr_hook_callback_2("xhr-familiar", request);
          } else if (urlInst.pathname.startsWith("/aweme/v1/web/module/feed")) {
            xhr_hook_callback_3("xhr-module", request);
          } else if (
            urlInst.pathname.startsWith("/aweme/v1/web/general/search/single/") ||
            urlInst.pathname.startsWith("/aweme/v1/web/search/item/")
          ) {
            xhr_hook_callback_4("xhr-search", request);
          } else if (urlInst.pathname.startsWith("/aweme/v1/web/aweme/detail/")) {
            xhr_hook_callback_5("xhr-video", request);
          }
        });
      });
    },
    addParseButton() {
      const filterBase = new DouYinVideoFilterBase();
      const awemeInfoClickCallBack = async ($container) => {
        const that = this;
        const reactFiber = utils.getReactInstance($container)?.reactFiber;
        const awemeInfo =
          reactFiber?.return?.memoizedProps?.awemeInfo ||
          reactFiber?.return?.return?.memoizedProps?.awemeInfo ||
          reactFiber?.return?.memoizedProps?.originData;
        if (awemeInfo == null) {
          Qmsg.error("未获取到awemeInfo信息");
          return;
        }
        if (typeof awemeInfo !== "object") {
          Qmsg.error("获取到的awemeInfo信息不是对象");
          return;
        }
        let transformAwemeInfo;
        const transformAwemeInfoWithPage = filterBase.parseAwemeInfoDictData(awemeInfo, false);
        log.info(["DOM上的的awemeInfo：", awemeInfo]);
        log.info(["DOM上解析出的transformAwemeInfo：", transformAwemeInfoWithPage]);
        if (
          typeof transformAwemeInfoWithPage.awemeId === "string" &&
          DouYinVideoFilter.$data.networkAwemeInfoMap.has(transformAwemeInfoWithPage.awemeId)
        ) {
          const awemeInfoMapData = DouYinVideoFilter.$data.networkAwemeInfoMap.get(transformAwemeInfoWithPage.awemeId);
          transformAwemeInfo = awemeInfoMapData.transformAwemeInfo;
          log.info([`网络请求的awemeInfo：`, awemeInfoMapData.awemeInfo]);
          log.info([`网络请求解析出的transformAwemeInfo：`, awemeInfoMapData.transformAwemeInfo]);
        } else {
          transformAwemeInfo = transformAwemeInfoWithPage;
        }
        let targetFilterOption = [];
        let isHasMatchedRules = false;
        if (
          this.$data.onlyShowFilteredVideo &&
          this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.has(transformAwemeInfo.awemeId)
        ) {
          isHasMatchedRules = true;
          const matchedFilterOption = this.$data.isFilterAwemeInfoListWithOnlyShowFilteredVideo.get(
            transformAwemeInfo.awemeId
          );
          targetFilterOption = targetFilterOption.concat(matchedFilterOption);
        } else {
          const filterRules = this.getFilterRules();
          const filterResult = await filterBase.checkAwemeInfoIsFilter(filterRules, awemeInfo, true);
          if (filterResult.matchedFilterRule.length) {
            isHasMatchedRules = true;
            targetFilterOption = targetFilterOption.concat(filterResult.matchedFilterRule);
          } else {
            isHasMatchedRules = false;
            targetFilterOption = targetFilterOption.concat(filterResult.notMatchedFilterRule);
          }
        }
        __pops__.confirm({
          title: {
            text: "视频awemeInfo",
            position: "center",
          },
          content: {
            text: JSON.stringify(transformAwemeInfo, null, 4).trim(),
            html: false,
          },
          drag: true,
          btn: {
            merge: targetFilterOption.length ? true : false,
            position: targetFilterOption.length ? "space-between" : "flex-end",
            ok: {
              enable: true,
              text: "添加过滤规则",
              callback(eventDetails, event) {
                const ruleView = that.getRuleViewInstance();
                ruleView.showEditView(false, that.getTemplateData());
              },
            },
            cancel: {
              enable: true,
              text: "规则管理器",
              callback(eventDetails, event) {
                that.showView();
              },
            },
            other: {
              enable: Boolean(targetFilterOption.length),
              text: `${isHasMatchedRules ? "" : "非"}命中的规则(${targetFilterOption.length})`,
              type: isHasMatchedRules ? "xiaomi-primary" : "violet",
              callback(btnConfig, event) {
                that.getRuleViewInstance().showView((data) => {
                  const find = targetFilterOption.find((it) => {
                    return data.uuid === it.uuid;
                  });
                  return Boolean(find);
                });
              },
            },
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
            },
          },
          width: PanelUISize.setting.width,
          height: PanelUISize.setting.height,
          style: `
				.pops-confirm-content p{
					white-space: break-spaces;
				}
			`,
        });
      };
      const createFilterParseButton = () => {
        return domUtils.createElement("xg-icon", {
          className: "gm-video-filter-parse-btn",
          innerHTML: `
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
				`,
        });
      };
      const lockFn = new utils.LockFunction(() => {
        if (DouYinRouter.isLive()) {
          return;
        }
        $$(".basePlayerContainer xg-right-grid:not(:has(.gm-video-filter-parse-btn))").forEach(($xgRightGrid) => {
          const $gmFilterParseBtn = createFilterParseButton();
          domUtils.on($gmFilterParseBtn, "click", async (event) => {
            domUtils.preventEvent(event);
            const $basePlayerContainer = $xgRightGrid.closest(".basePlayerContainer");
            await awemeInfoClickCallBack($basePlayerContainer);
          });
          domUtils.prepend($xgRightGrid, $gmFilterParseBtn);
        });
        [
          ...Array.from($$('[data-e2e="feed-live"] xg-right-grid:not(:has(.gm-video-filter-parse-btn))')),
          ...Array.from(
            $$('[data-e2e="feed-live"] .douyin-player-controls-right:not(:has(.gm-video-filter-parse-btn))')
          ),
        ].forEach(($xgRightGrid) => {
          if (!utils.isVisible($xgRightGrid, false)) {
            return;
          }
          const $gmFilterParseBtn = createFilterParseButton();
          domUtils.on($gmFilterParseBtn, "click", async (event) => {
            domUtils.preventEvent(event);
            const $liveContainer = $xgRightGrid.closest('[data-e2e="feed-live"]');
            await awemeInfoClickCallBack($liveContainer);
          });
          domUtils.prepend($xgRightGrid, $gmFilterParseBtn);
        });
      });
      const observer = utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        addStyle(
          `
      xg-icon .xg-tips{
        display: none;
      }
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
			}`
        ),
        () => {
          domUtils.remove(".gm-video-filter-parse-btn");
          observer?.disconnect();
        },
      ];
    },
    getRuleViewInstance() {
      const panelHandlerComponents = __pops__.config.PanelHandlerComponents();
      const generateStorageApi = (data) => {
        return {
          get(key, defaultValue) {
            return data[key] ?? defaultValue;
          },
          set(key, value) {
            data[key] = value;
          },
        };
      };
      const ruleViewOption = {
        title: "视频过滤器",
        data: () => {
          return this.$data.videoFilterRuleStorage.getAllRule();
        },
        getAddData: () => {
          return this.getTemplateData();
        },
        getDataItemName: (data) => {
          return data.name;
        },
        updateData: (data) => {
          const setFlag = this.$data.videoFilterRuleStorage.setRule(data);
          return setFlag;
        },
        deleteData: (data) => {
          const deleteFlag = this.$data.videoFilterRuleStorage.deleteRule(data);
          return deleteFlag;
        },
        getData: (data) => {
          const allData = DouYinVideoFilter.$data.videoFilterRuleStorage.getAllRule();
          const findValue = allData.find((item) => item.uuid === data.uuid);
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
              ruleViewOption.updateData(data);
            },
          },
          edit: {
            enable: true,
            getView: (data, isEdit) => {
              const $fragment = document.createDocumentFragment();
              if (!isEdit) {
                data = this.getTemplateData();
              }
              const enable_template = UISwitch("启用", "enable", true);
              Reflect.set(enable_template.props, PROPS_STORAGE_API, generateStorageApi(data));
              const $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template);
              const name_template = UIInput("规则名称", "name", "", "", void 0, "必填");
              Reflect.set(name_template.props, PROPS_STORAGE_API, generateStorageApi(data));
              const $name = panelHandlerComponents.createSectionContainerItem_input(name_template);
              const scope_template = UISelectMultiple(
                "作用域",
                "scope",
                [],
                [
                  {
                    text: "所有",
                    value: "all",
                  },
                  {
                    text: "精选",
                    value: "xhr-module",
                  },
                  {
                    text: "推荐",
                    value: "xhr-tab",
                  },
                  {
                    text: "关注",
                    value: "xhr-follow",
                  },
                  {
                    text: "朋友",
                    value: "xhr-familiar",
                  },
                  {
                    text: "搜索",
                    value: "xhr-search",
                  },
                  {
                    text: "用户主页",
                    value: "xhr-userHome",
                  },
                  {
                    text: "混合信息",
                    value: "xhr-mix",
                  },
                  {
                    text: "相关推荐",
                    value: "xhr-related",
                  },
                ].map((it) => {
                  const result = {
                    ...it,
                    value: it.value,
                  };
                  return result;
                }),
                void 0,
                "选择需要在xxx上生效的作用域"
              );
              Reflect.set(scope_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
              const $scope = panelHandlerComponents.createSectionContainerItem_select_multiple(scope_template);
              const douYinVideoHandlerInfoKey = [
                "isLive",
                "isAds",
                "isSeriesInfo",
                "isMixInfo",
                "isPicture",
                "isProduct",
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
                "duration",
                "liveStreamRoomId",
                "liveStreamRoomTitle",
                "liveStreamNickName",
                "liveStreamRoomUserCount",
                "liveStreamRoomDynamicSpliceLabel",
                "videoBitRateList",
                "productId",
                "productTitle",
              ];
              const createDynamicItemNode = (storageData) => {
                const ruleNameDefaultValue = Array.isArray(storageData["ruleName"])
                  ? storageData["ruleName"]
                  : [storageData["ruleName"]];
                const ruleName_template = UISelectMultiple(
                  "属性名",
                  "ruleName",
                  ruleNameDefaultValue,
                  douYinVideoHandlerInfoKey.map((item) => {
                    return {
                      text: item,
                      value: item,
                    };
                  }),
                  void 0,
                  "选择需要的属性名 "
                );
                Reflect.set(ruleName_template.props, PROPS_STORAGE_API, generateStorageApi(storageData));
                const $ruleName = panelHandlerComponents.createSectionContainerItem_select_multiple(ruleName_template);
                const isFunctionHandler_template_valueChange = (_, enableValue) => {
                  if (enableValue) {
                    domUtils.html($ruleValueLeftMainText, `自定义函数`);
                    domUtils.html($ruleValueLeftDescText, `返回值必须为boolean值`);
                  } else {
                    domUtils.html($ruleValueLeftMainText, ruleValue_template.text);
                    domUtils.html($ruleValueLeftDescText, ruleValue_template.description ?? "");
                  }
                };
                const isFunctionHandler_template = UISwitch(
                  "是否使用自定义函数处理",
                  "isFunctionHandler",
                  false,
                  void 0,
                  "执行自定义函数来判断是否进行过滤",
                  void 0,
                  false,
                  isFunctionHandler_template_valueChange
                );
                Reflect.set(isFunctionHandler_template.props, PROPS_STORAGE_API, generateStorageApi(storageData));
                const $ownFunctionHandler =
                  panelHandlerComponents.createSectionContainerItem_switch(isFunctionHandler_template);
                const ruleValue_template = UITextArea("属性值", "ruleValue", "", "如果是字符串，可正则，注意转义");
                Reflect.set(ruleValue_template.props, PROPS_STORAGE_API, generateStorageApi(storageData));
                const $ruleValue = panelHandlerComponents.createSectionContainerItem_textarea(ruleValue_template);
                const $ruleValueLeftMainText = $ruleValue.querySelector(".pops-panel-item-left-main-text");
                const $ruleValueLeftDescText = $ruleValue.querySelector(".pops-panel-item-left-desc-text");
                const remarks_template = UITextArea("备注", "remarks", "", "");
                Reflect.set(remarks_template.props, PROPS_STORAGE_API, generateStorageApi(storageData));
                const $remarks = panelHandlerComponents.createSectionContainerItem_textarea(remarks_template);
                if (storageData.isFunctionHandler) {
                  isFunctionHandler_template_valueChange(null, isFunctionHandler_template.getValue());
                }
                return [$ruleName, $ownFunctionHandler, $ruleValue, $remarks];
              };
              const $dynamicContainer = domUtils.createElement("div", {
                className: "rule-form-ulist-dynamic",
                innerHTML: `
							<div class="rule-form-ulist-dynamic__inner"></div>
							<div class="pops-panel-button pops-panel-button-no-icon">
								<button class="pops-panel-button_inner" type="button" data-type="default">
									<i class="pops-bottom-icon" is-loading="false"></i>
									<span class="pops-panel-button-text">添加额外属性</span>
								</button>
							</div>
							`,
              });
              const $dynamicInner = $dynamicContainer.querySelector(".rule-form-ulist-dynamic__inner");
              const $addDynamicButton = $dynamicContainer.querySelector(".pops-panel-button");
              const addDynamicElementItem = (
                dynamicData = {
                  ruleName: [],
                  isFunctionHandler: false,
                  ruleValue: "",
                  remarks: "",
                }
              ) => {
                const $dynamicUListContainer = domUtils.createElement("div", {
                  className: "rule-form-ulist-dynamic__inner-container",
                  innerHTML: `
									<div class="dynamic-control-delete">
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="danger">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">×</span>
											</button>
										</div>
									</div>
									<ul class="dynamic-forms"></ul>
								`,
                });
                const $dynamicDelete = $dynamicUListContainer.querySelector(".dynamic-control-delete");
                domUtils.on($dynamicDelete, "click", (event) => {
                  domUtils.preventEvent(event);
                  $dynamicUListContainer.remove();
                  if (Array.isArray(data.dynamicData)) {
                    const findIndex = data.dynamicData.findIndex((it) => it == dynamicData);
                    if (findIndex !== -1) {
                      data.dynamicData.splice(findIndex, 1);
                    }
                  }
                });
                const $dynamicUList = $dynamicUListContainer.querySelector(".dynamic-forms");
                const dynamicItemNodes = createDynamicItemNode(dynamicData);
                $dynamicUList.append(...dynamicItemNodes);
                $dynamicInner.appendChild($dynamicUListContainer);
              };
              domUtils.on($addDynamicButton, "click", (event) => {
                domUtils.preventEvent(event);
                addDynamicElementItem();
              });
              if (Array.isArray(data.dynamicData)) {
                for (let index = 0; index < data.dynamicData.length; index++) {
                  const moreDataItem = data.dynamicData[index];
                  addDynamicElementItem(moreDataItem);
                }
              }
              $fragment.append($enable, $name, $scope, ...createDynamicItemNode(data.data), $dynamicContainer);
              return $fragment;
            },
            onsubmit: async ($form, isEdit, editData) => {
              const $ulist_li = $form.querySelectorAll(".rule-form-ulist > li");
              const data = this.getTemplateData();
              if (isEdit) {
                data.uuid = editData.uuid;
              }
              $ulist_li.forEach(($li) => {
                const viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
                if (!viewConfig) {
                  return;
                }
                const attrs = Reflect.get(viewConfig, "attributes");
                if (!attrs) {
                  return;
                }
                const storageApi = Reflect.get($li, PROPS_STORAGE_API);
                const key = Reflect.get(attrs, ATTRIBUTE_KEY);
                const defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                const value = storageApi.get(key, defaultValue);
                if (Reflect.has(data, key)) {
                  Reflect.set(data, key, value);
                } else if (Reflect.has(data.data, key)) {
                  Reflect.set(data.data, key, value);
                } else {
                  log.error(`${key}不在数据中`);
                }
              });
              $form.querySelectorAll(".rule-form-ulist-dynamic__inner-container").forEach(($inner) => {
                const dynamicData = {};
                $inner.querySelectorAll(".dynamic-forms > li").forEach(($li) => {
                  const viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
                  if (!viewConfig) {
                    return;
                  }
                  const attrs = Reflect.get(viewConfig, "attributes");
                  if (!attrs) {
                    return;
                  }
                  const storageApi = Reflect.get($li, PROPS_STORAGE_API);
                  const key = Reflect.get(attrs, ATTRIBUTE_KEY);
                  const defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                  const value = storageApi.get(key, defaultValue);
                  Reflect.set(dynamicData, key, value);
                });
                data.dynamicData.push(dynamicData);
              });
              if (data.name.trim() === "") {
                Qmsg.error("规则名称不能为空");
                return {
                  success: false,
                  data,
                };
              }
              if (data.data.scope.length === 0) {
                Qmsg.error("请选择作用域");
                return {
                  success: false,
                  data,
                };
              }
              if (data.data.ruleName.length === 0) {
                Qmsg.error("请选择属性名");
                return {
                  success: false,
                  data,
                };
              }
              if (data.data.ruleValue.trim() === "") {
                Qmsg.error((data.data.isFunctionHandler ? "自定义函数" : "属性值") + "不能为空");
                return {
                  success: false,
                  data,
                };
              }
              let successFlag = false;
              if (isEdit) {
                successFlag = Boolean(await ruleViewOption.updateData(data));
              } else {
                successFlag = this.$data.videoFilterRuleStorage.addRule(data);
              }
              return {
                success: successFlag,
                data,
              };
            },
            style: `
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
          li[data-key="isFunctionHandler"]:has(.pops-panel-switch-is-checked) + li[data-key="ruleValue"] .pops-panel-textarea {
            flex: 1;
            justify-items: end;
          }
          li[data-key="isFunctionHandler"]:has(.pops-panel-switch-is-checked) + li[data-key="ruleValue"] textarea {
            height: 200px;
            width: calc(100% - 100px);
            max-width: unset;
          }
          `,
            width: () => {
              return window.innerWidth > 700 ? "700px" : "88vw";
            },
          },
          delete: {
            enable: true,
            deleteCallBack: async (data) => {
              return await ruleViewOption.deleteData(data);
            },
          },
        },
        bottomControls: {
          filter: {
            enable: true,
            option: [
              {
                name: "过滤-已启用",
                filterCallBack(data) {
                  return data.enable;
                },
                callback(event, closeDialog) {
                  Panel.setValue("dy-video-ui-rule-filter-option-index", 0);
                  return true;
                },
              },
              {
                name: "过滤-未启用",
                filterCallBack(data) {
                  return !data.enable;
                },
                callback(event, closeDialog) {
                  Panel.setValue("dy-video-ui-rule-filter-option-index", 1);
                  return true;
                },
              },
            ],
            cancelFilterCallback(config) {
              Panel.deleteValue("dy-video-ui-rule-filter-option-index");
            },
          },
          clear: {
            enable: true,
            callback: () => {
              this.$data.videoFilterRuleStorage.clearAllRule();
            },
          },
        },
      };
      const ruleView = new RuleView(ruleViewOption);
      return ruleView;
    },
    showView() {
      const ruleView = this.getRuleViewInstance();
      ruleView.showView(Panel.getValue("dy-video-ui-rule-filter-option-index"));
    },
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        enable: true,
        name: "",
        data: {
          scope: [],
          ruleName: "nickname",
          isFunctionHandler: false,
          ruleValue: "",
          remarks: "",
        },
        dynamicData: [],
      };
    },
  };
  const blockCSS$5 =
    '/* 右侧视频信息里的 下载客户端，桌面快捷访问 */\r\n[data-e2e="note-detail"] div:has(> [data-e2e="user-info"]) > div:has(a[download*="douyin-downloader"]) {\r\n  display: none !important;\r\n}\r\n';
  const DouYinNote = {
    init() {
      addStyle(blockCSS$5);
    },
  };
  const DouYinRecommend = {
    init() {
      domUtils.ready(() => {
        Panel.execMenuOnce("dy-recommend-automaticContinuousPlayback", () => {
          return this.automaticContinuousPlayback();
        });
      });
    },
    automaticContinuousPlayback() {
      log.info(`自动连播`);
      const attrFlagName = "data-automaticContinuousPlayback";
      const queryActiveVideo = (withAttr = false) => {
        return $(
          `.page-recommend-container:not(:has([data-e2e="feed-live"])) [data-e2e="feed-active-video"] video${withAttr ? `:not([${attrFlagName}])` : ""}`
        );
      };
      const switchActiveVideo = () => {
        if (Panel.getValue("dy-keyboard-hook-pageUpAndDown")) {
          Qmsg.error("自动连播切换失败，请勿禁用↑↓翻页快捷键");
          return;
        }
        let keydownEvent = new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          key: "ArrowDown",
          code: "ArrowDown",
          keyCode: 40,
          which: 40,
        });
        document.body.dispatchEvent(keydownEvent);
      };
      const lockFn = new utils.LockFunction(() => {
        if (!DouYinRouter.isRecommend()) {
          return;
        }
        let $activeVideo = queryActiveVideo();
        if (!$activeVideo) {
          return;
        }
        if ($activeVideo.hasAttribute(attrFlagName)) {
          return;
        }
        $activeVideo.setAttribute(attrFlagName, "true");
        let currentVideoSrc = $activeVideo.src;
        domUtils.on(
          $activeVideo,
          "ended",
          (evt) => {
            log.success(`视频播放完毕，切换至下一个视频`);
            domUtils.preventEvent(evt);
            currentVideoSrc = $activeVideo.src;
            let isSlideMode = Boolean($activeVideo.closest("#slideMode"));
            CommonUtil.interval(
              (isTimeout) => {
                if (isTimeout) {
                  log.error(`切换视频超时，切换失败`);
                  return false;
                }
                let $playingVideo = queryActiveVideo();
                let playingSrc = $playingVideo?.src;
                if (isSlideMode) {
                  if (playingSrc && $activeVideo === $playingVideo && currentVideoSrc !== playingSrc) {
                    log.success("合集-切换视频成功");
                    return false;
                  }
                } else {
                  if ($activeVideo !== $playingVideo) {
                    log.success("切换视频成功");
                    return false;
                  }
                }
                switchActiveVideo();
              },
              500,
              5e3
            );
          },
          { capture: true }
        );
      });
      const observer = utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return [
        () => {
          observer?.disconnect();
        },
      ];
    },
  };
  const DouYin = {
    init() {
      Panel.onceExec("dy-global-block-css", () => {
        return this.removeAds();
      });
      DouYinGestureBackClearHash();
      DouYinHook.init();
      DouYinVideoFilter.init();
      DouYinRedirect.init();
      Panel.execMenuOnce("watchLoginDialogToClose", () => {
        return DouYinAccount.watchLoginDialogToClose();
      });
      Panel.execMenuOnce("disguiseLogin", () => {
        return DouYinAccount.disguiseLogin();
      });
      Panel.execMenuOnce("dy-initialScale", () => {
        return this.initialScale();
      });
      Panel.execMenu("dy-apple-removeMetaAppleItunesApp", () => {
        this.removeMetaAppleItunesApp();
      });
      BlockLeftNavigator.init();
      BlockTopNavigator.init();
      BlockSearchFrame.init();
      Panel.execMenuOnce(
        "dy-common-listenRouterChange",
        () => {
          return this.listenRouterChange();
        },
        void 0,
        false
      );
      Panel.execMenuOnce("dy-search-click-to-new-tab", () => {
        return this.navSearchClickToNewTab();
      });
      if (DouYinRouter.isLive()) {
        log.info("Router: 直播");
        DouYinLive.init();
      } else if (DouYinRouter.isIndex()) {
        DouYinVideoPlayer.init();
        if (DouYinRouter.isRecommend()) {
          log.info(`Router: 推荐`);
          DouYinRecommend.init();
        } else if (DouYinRouter.isSearch()) {
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
      } else if (window.location.hostname.startsWith("lf-zt.douyin.com"));
      else {
        log.error("未适配router: " + window.location.href);
      }
    },
    removeAds() {
      domUtils
        .waitNode(
          () =>
            domUtils.selector(
              '#douyin-navigation [data-e2e="douyin-navigation"] > div > div > div:regexp("下载抖音精选|条条都是宝藏视频")'
            ),
          1e4
        )
        .then(($el) => {
          if (!$el) {
            return;
          }
          domUtils.remove($el);
        });
      return [addStyle(blockCSS$8)];
    },
    async initialScale() {
      log.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>");
      await domUtils.ready();
      const $meta = domUtils.createElement(
        "meta",
        {},
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover",
        }
      );
      domUtils.remove("meta[name='viewport']");
      await domUtils.waitNode("head");
      document.head.appendChild($meta);
      return $meta;
    },
    async removeMetaAppleItunesApp() {
      const $metaList = await domUtils.waitNodeList(['meta[name="apple-itunes-app"]'], 1e4);
      if (!$metaList) {
        return;
      }
      domUtils.remove($metaList);
    },
    listenRouterChange() {
      log.info(`监听Router重载`);
      let url = window.location.href;
      const callback = () => {
        const beforeUrl = url;
        const currentUrl = window.location.href;
        url = currentUrl;
        log.info(`Router Change Before：` + beforeUrl);
        log.info(`Router Change Now：` + currentUrl);
        Panel.triggerUrlChangeWithExecMenuOnceEvent({
          url: currentUrl,
          beforeUrl,
        });
        this.init();
      };
      const listener = domUtils.on(window, "wb_url_change", callback);
      return [listener.off];
    },
    navSearchClickToNewTab() {
      log.info(`新标签页打开搜索结果`);
      const getSearchUrl = (searchText) => {
        const url = `https://www.douyin.com/search/${encodeURIComponent(searchText)}`;
        return url;
      };
      const result1 = domUtils.on(
        document,
        "click",
        [
          'div[data-click="doubleClick"]:has(input[data-e2e="searchbar-input"]) button[data-e2e="searchbar-button"]',
          'a[href*="douyin.com/search/"]',
        ],
        (evt, selectorTarget) => {
          domUtils.preventEvent(evt);
          let url;
          if (selectorTarget instanceof HTMLAnchorElement) {
            url = selectorTarget.href;
          } else {
            const $doubleClick = selectorTarget.closest('div[data-click="doubleClick"]');
            if (!$doubleClick) {
              Qmsg.error("未找到搜索框元素");
              return;
            }
            const $input = $doubleClick.querySelector("input");
            let searchValue = $input.value;
            if (searchValue == null || searchValue === "") {
              const $before = domUtils.prev($input);
              if ($before) {
                searchValue = domUtils.text($before);
              } else {
                const placeholder = $input.placeholder.trim();
                if (placeholder != null && placeholder !== "") {
                  searchValue = placeholder;
                } else {
                  log.error("搜索内容为空，不进行搜索");
                  return;
                }
              }
            }
            log.info(`当前的搜索内容：` + searchValue);
            url = getSearchUrl(searchValue);
          }
          log.info(`新标签页打开搜索：${url}`);
          window.open(url, "_blank");
        },
        {
          capture: true,
        }
      );
      const result2 = domUtils.on(
        document,
        "click",
        '[data-e2e="searchbar-button"] + div [data-text][data-index]',
        (evt, selectorTarget) => {
          const $click = evt.composedPath()[0];
          if ($click.closest(".icon[data-text]") || $click.matches(".icon[data-text]")) {
            return;
          }
          domUtils.preventEvent(evt);
          const searchText = selectorTarget.getAttribute("data-text");
          if (!searchText) {
            log.error("未找到搜索建议内容", selectorTarget);
            Qmsg.error("未找到搜索建议内容");
            return;
          }
          const url = getSearchUrl(searchText);
          window.open(url, "_blank");
        },
        { capture: true }
      );
      return [result1.off, result2.off];
    },
  };
  const MDouYinRouter = {
    isMDouYin() {
      return window.location.hostname === "m.douyin.com" || window.location.hostname === "www.iesdouyin.com";
    },
    isShareUser() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/user/");
    },
    isShareVideo() {
      return (
        this.isMDouYin() &&
        (window.location.pathname.startsWith("/share/video/") || window.location.pathname.startsWith("/shipin/"))
      );
    },
    isShareNote() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/note/");
    },
    isShareMusic() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/music/");
    },
    isShareChallenge() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/challenge/");
    },
  };
  const blockCSS$4 =
    "/* 顶部 打开看看 登录 */\r\n.adapt-login-header,\r\n/* 上面屏蔽后的空白区域 */\r\n.user-card .nav-bar-placeholder,\r\n/* 视频区域底部的【打开抖音App看更多内容】 */\r\n.select-list .img-button {\r\n  display: none !important;\r\n}\r\n";
  const DouYinUrlUtils = {
    getVideoUrl(videoId) {
      return "https://www.douyin.com/video/" + videoId;
    },
    getCollectionUrl(collectionId) {
      return "https://www.douyin.com/collection/" + collectionId;
    },
    getNoteUrl(noteId) {
      return "https://www.douyin.com/note/" + noteId;
    },
    getHashTagUrl(hashTagId) {
      return "https://www.douyin.com/hashtag/" + hashTagId;
    },
    getUserHomeUrl(sec_uid) {
      return "https://www.douyin.com/user/" + sec_uid;
    },
    getMusicUrl(musicId) {
      return "https://www.douyin.com/music/" + musicId;
    },
  };
  const MDouYinShareUser = {
    init() {
      addStyle(blockCSS$4);
      Panel.execMenuOnce("m-dy-share-user-coverPlayletList", () => {
        return this.coverPlayletList();
      });
      Panel.execMenuOnce("m-dy-share-user-coverPostListContainer", () => {
        return this.coverPostListContainer();
      });
    },
    coverPlayletList() {
      const result = domUtils.on(
        document,
        "click",
        ".user-playlet-list .playlet-item",
        (event) => {
          domUtils.preventEvent(event);
          let $click = event.target;
          let reactFiber = utils.getReactInstance($click)?.reactFiber;
          let key = reactFiber?.key;
          if (key == null) {
            Qmsg.error("获取视频合集key失败");
            return;
          }
          let index = reactFiber?.index;
          if (index == null) {
            Qmsg.error("获取视频合集index失败");
            return;
          }
          let playletList = reactFiber?.return?.return?.pendingProps?.playletList;
          if (playletList == null) {
            Qmsg.error("获取视频合集playletList失败");
            return;
          }
          let currentPlaylet = playletList[index];
          let url = DouYinUrlUtils.getCollectionUrl(currentPlaylet["mix_id"]);
          window.open(url, "_blank");
        },
        {
          capture: true,
        }
      );
      return [result.off];
    },
    coverPostListContainer() {
      const result = domUtils.on(
        document,
        "click",
        ".post-list-container .user-post-cover",
        (event) => {
          domUtils.preventEvent(event);
          let $click = event.target;
          let reactFiber = utils.getReactInstance($click)?.reactFiber;
          if (reactFiber?.return?.memoizedProps?.productionUrl) {
            let url = reactFiber?.return?.memoizedProps?.productionUrl;
            window.open(url, "_blank");
          } else {
            Qmsg.error("获取视频链接失败");
          }
        },
        {
          capture: true,
        }
      );
      return [result.off];
    },
  };
  const blockCSS$3 =
    "/* 顶部 打开看看 登录 */\r\n.adapt-login-header,\r\n/* 视频描述信息区域中的 打开抖音看精彩视频 */\r\n.footer .img-button,\r\n/* 登录页面 */\r\n.login-page ,\r\n/* 底部左下角 打开抖音看精彩视频 */\r\n.footer .bottom-btn-con-new,\r\n/* 合集 打开抖音看精彩视频 */\r\n.container .end-page-info-button {\r\n  display: none !important;\r\n}\r\n";
  const beautifyCSS =
    ".video-container {\r\n  height: 100% !important;\r\n  margin-top: 0 !important;\r\n}\r\n.footer {\r\n  bottom: 50px !important;\r\n}\r\n.mix-info {\r\n  bottom: 0px !important;\r\n}\r\n";
  const MDouYinShareVideo = {
    init() {
      addStyle(blockCSS$3);
      addStyle(beautifyCSS);
      Panel.execMenuOnce("m-dy-share-video-coverGlobalClick", () => {
        return this.coverGlobalClick();
      });
    },
    coverGlobalClick() {
      const result = DOMUtils.on(
        document,
        "click",
        [".right-con", ".footer", ".mix-info"],
        (event) => {
          return DOMUtils.preventEvent(event);
        },
        {
          capture: true,
        }
      );
      return [result.off];
    },
  };
  const blockCSS$2 =
    "/* 顶部 打开看看 登录 */\r\n.container .adapt-login-header,\r\n/* 底部中间的 App内打开 */\r\n.container .float-button-con {\r\n  display: none !important;\r\n}\r\n\r\n.gallery-container {\r\n  margin-top: 10px !important;\r\n}\r\n";
  const MDouYinShareNote = {
    init() {
      addStyle(blockCSS$2);
      Panel.execMenuOnce("m-dy-share-note-blockRecommend", () => {
        return this.blockRecommend();
      });
      Panel.execMenuOnce("m-dy-share-note-blockComment", () => {
        return this.blockComment();
      });
      Panel.execMenuOnce("m-dy-share-note-blockFooterToobar", () => {
        return this.blockFooterToobar();
      });
      Panel.execMenuOnce("m-dy-share-note-coverUser", () => {
        return this.coverUser();
      });
      Panel.execMenuOnce("m-dy-share-note-coverHashTag", () => {
        return this.coverHashTag();
      });
      Panel.execMenuOnce("m-dy-share-note-coverMusic", () => {
        return this.coverMusic();
      });
      Panel.execMenuOnce("m-dy-share-note-coverRecommend", () => {
        return this.coverRecommend();
      });
      Panel.execMenuOnce("m-dy-share-note-coverExcitingGraphicsAndText", () => {
        return this.coverExcitingGraphicsAndText();
      });
    },
    blockRecommend() {
      log.info("【屏蔽】相关推荐");
      return CommonUtil.addBlockCSS(".recommend-con");
    },
    blockComment() {
      log.info("【屏蔽】评论");
      return CommonUtil.addBlockCSS(".comment-con");
    },
    blockFooterToobar() {
      log.info("【屏蔽】底部工具栏");
      return CommonUtil.addBlockCSS(".footer-con");
    },
    coverRecommend() {
      log.info("覆盖相关推荐的点击事件");
      const result = domUtils.on(
        document,
        "click",
        "#masonry .card",
        (event) => {
          domUtils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactInstance($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let awemeId = rectFiber?.return?.memoizedProps.awemeId;
          let url = DouYinUrlUtils.getNoteUrl(awemeId);
          window.open(url, "_blank");
        },
        { capture: true }
      );
      return [result.off];
    },
    coverUser() {
      log.info("覆盖用户点击事件");
      const callback = (event, $click) => {
        domUtils.preventEvent(event);
        const rectFiber = utils.getReactInstance($click).reactFiber;
        if (!rectFiber) {
          log.error("获取reactFiber失败");
          Qmsg.error("获取reactFiber失败");
          return;
        }
        const sec_id = rectFiber?.return?.return?.memoizedProps?.video?.authorInfo?.sec_uid;
        const url = DouYinUrlUtils.getUserHomeUrl(sec_id);
        window.open(url, "_blank");
      };
      const result = domUtils.on(document, "click", ".message-con__top", callback, { capture: true });
      return [result.off];
    },
    coverHashTag() {
      log.info("覆盖话题点击事件");
      const callback = (event, $click) => {
        domUtils.preventEvent(event);
        const rectFiber = utils.getReactInstance($click).reactFiber;
        if (!rectFiber) {
          Qmsg.error("获取reactFiber失败");
          return;
        }
        const index = rectFiber.index;
        const splitStrArr = rectFiber?.return?.return?.return?.return?.memoizedProps?.video?.splitStrArr;
        const currentSplitStr = splitStrArr[index];
        const hashtagId = currentSplitStr["hashtagId"];
        const url = DouYinUrlUtils.getHashTagUrl(hashtagId);
        window.open(url, "_blank");
      };
      const result = domUtils.on(
        document,
        "click",
        ".message-con__content__body .message-con__content__body-text",
        callback,
        {
          capture: true,
        }
      );
      return [result.off];
    },
    coverMusic() {
      log.info("覆盖音乐点击事件");
      const result = domUtils.on(
        document,
        "click",
        ".message-con__footer",
        (event) => {
          domUtils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactInstance($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let musicId = rectFiber?.return?.return?.memoizedProps?.video?.musicId;
          let url = DouYinUrlUtils.getMusicUrl(musicId);
          window.open(url, "_blank");
        },
        { capture: true }
      );
      return [result.off];
    },
    coverExcitingGraphicsAndText() {
      log.info("覆盖精彩图文点击事件");
      const result1 = domUtils.on(
        document,
        "click",
        ".container .related-list-con .related-note-item",
        (event) => {
          domUtils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactInstance($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let itemData = rectFiber?.return?.memoizedProps?.itemData;
          let awemeId = itemData["awemeId"];
          let url = DouYinUrlUtils.getNoteUrl(awemeId);
          window.open(url, "_blank");
        },
        { capture: true }
      );
      const result2 = domUtils.on(document, "click", ".related-title-con", (event) => domUtils.preventEvent(event), {
        capture: true,
      });
      return [result1.off, result2.off];
    },
  };
  const blockCSS$1 =
    "/* 顶部 打开看看 登录 */\r\n.page-reflow-challenge .header,\r\n/* 底部的 打开抖音App看更多内容 */\r\n.page-reflow-challenge .bottom-btn__con {\r\n  display: none !important;\r\n}\r\n\r\n.page-reflow-challenge {\r\n  padding-top: 0 !important;\r\n}\r\n";
  const MDouYinShareChallenge = {
    init() {
      addStyle(blockCSS$1);
      Panel.onceExec("m-dy-share-challenge-coverTopJump", () => {
        return this.coverTopJump();
      });
      Panel.execMenuOnce("m-dy-share-challenge-coverVideoCard", () => {
        return this.coverVideoCard();
      });
    },
    coverTopJump() {
      log.info("阻止上面区域点击跳转至下载页面");
      domUtils.on(
        document,
        "click",
        ".challenge-body",
        (event) => {
          domUtils.preventEvent(event);
        },
        {
          capture: true,
        }
      );
    },
    coverVideoCard() {
      log.info("覆盖视频卡片点击事件");
      const callback = (event, $click) => {
        domUtils.preventEvent(event);
        let rectFiber = utils.getReactInstance($click).reactFiber;
        if (!rectFiber) {
          log.error("获取reactFiber失败");
          Qmsg.error("获取reactFiber失败");
          return;
        }
        let listData = rectFiber?.return?.return?.return?.memoizedProps.listData;
        let index = rectFiber.index;
        let currentList = listData[index];
        let url = DouYinUrlUtils.getVideoUrl(currentList["aweme_id"]);
        window.open(url, "_blank");
      };
      const result = domUtils.on(document, "click", "#pagelet-worklist li.item", callback, {
        capture: true,
      });
      return [result.off];
    },
  };
  const blockCSS =
    "/* 顶部 打开App，发现更多内容 */\r\n.page-reflow-music .header,\r\n/* ↑屏蔽后的 顶部空白区域 */\r\n.page-reflow-music .banner-placeholder ,\r\n/* 底部 打开抖音App看更多内容 */\r\n.page-reflow-music .bottom-btn__con {\r\n  display: none !important;\r\n}\r\n";
  const MDouYinShareMusic = {
    init() {
      addStyle(blockCSS);
      Panel.execMenuOnce("m-dy-share-music-coverVideoCard", () => {
        return this.coverVideoCard();
      });
    },
    coverVideoCard() {
      log.info("覆盖视频卡片点击事件");
      const callback = (event, $click) => {
        domUtils.preventEvent(event);
        let rectFiber = utils.getReactInstance($click).reactFiber;
        if (!rectFiber) {
          log.error("获取reactFiber失败");
          Qmsg.error("获取reactFiber失败");
          return;
        }
        let listData = rectFiber?.return?.return?.return?.memoizedProps.listData;
        let index = rectFiber.index;
        let currentList = listData[index];
        let url = DouYinUrlUtils.getVideoUrl(currentList["aweme_id"]);
        window.open(url, "_blank");
      };
      const result = domUtils.on(document, "click", "#pagelet-worklist li.item", callback, {
        capture: true,
      });
      return [result.off];
    },
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
    },
  };
  const UISelect = function (text, key, defaultValue, data, selectCallBack, description, valueChangeCallBack) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    const result = {
      text,
      type: "select",
      description,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        const value = isSelectedValue;
        log.info(`选择：${isSelectedText}`);
        if (typeof selectCallBack === "function") {
          const result2 = selectCallBack(event, value, isSelectedText);
          if (result2) {
            return;
          }
        }
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      data: selectData,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("select", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const afterEnterDeepMenuCallBack = (formConfig, container) => {
    let $oneClickOpen = container.$sectionBodyContainer.querySelector(".keyboard-oneClickOpen");
    let $oneClickClose = container.$sectionBodyContainer.querySelector(".keyboard-oneClickClose");
    let clickCallBack = (isOpen) => {
      container.$sectionBodyContainer?.querySelectorAll(".pops-panel-switch").forEach(($ele) => {
        let $input = $ele.querySelector(".pops-panel-switch__input");
        let $checkbox = $ele.querySelector(".pops-panel-switch__core");
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
      domUtils.preventEvent(event);
      clickCallBack(true);
    });
    domUtils.on($oneClickClose, "click", (event) => {
      domUtils.preventEvent(event);
      clickCallBack(false);
    });
  };
  const AutoOpenOrClose = {
    text: `
		<p>注：开启是禁用该快捷键、关闭是不禁用该快捷键</p>
        <a href="javascript:;" class="keyboard-oneClickOpen">禁用全部快捷键</a>
        <br>
        <a href="javascript:;" class="keyboard-oneClickClose">取消禁用全部快捷键</a>
    `,
    afterEnterDeepMenuCallBack,
  };
  const UIOwn = function (getLiElementCallBack, initConfig, searchConfig, attr, props, afterAddToUListCallBack) {
    const result = {
      type: "own",
      attributes: {},
      props: {},
      getLiElementCallBack,
      afterAddToUListCallBack,
    };
    if (typeof initConfig === "object" && initConfig !== null && Object.keys(initConfig).length > 0) {
      Reflect.set(result.attributes, ATTRIBUTE_INIT_MORE_VALUE, initConfig);
    } else {
      Reflect.set(result.attributes, ATTRIBUTE_INIT, () => false);
    }
    if (typeof searchConfig === "object" && searchConfig !== null) {
      Reflect.set(result.attributes, ATTRIBUTE_PLUGIN_SEARCH_CONFIG, searchConfig);
    }
    return result;
  };
  function getGPU() {
    const isFirefox = /Firefox/.test(window.navigator.userAgent);
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const debugRenderInfo = isFirefox ? null : gl.getExtension("WEBGL_debug_renderer_info");
    const info = gl.getParameter(debugRenderInfo?.UNMASKED_RENDERER_WEBGL ?? gl?.RENDERER);
    return info;
  }
  const PanelCommonConfig = {
    id: "panel-config-common",
    title: "通用",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "Toast配置",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISelect(
                    "Toast位置",
                    "qmsg-config-position",
                    "bottom",
                    [
                      {
                        value: "topleft",
                        text: "左上角",
                      },
                      {
                        value: "top",
                        text: "顶部",
                      },
                      {
                        value: "topright",
                        text: "右上角",
                      },
                      {
                        value: "left",
                        text: "左边",
                      },
                      {
                        value: "center",
                        text: "中间",
                      },
                      {
                        value: "right",
                        text: "右边",
                      },
                      {
                        value: "bottomleft",
                        text: "左下角",
                      },
                      {
                        value: "bottom",
                        text: "底部",
                      },
                      {
                        value: "bottomright",
                        text: "右下角",
                      },
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
                        text: "1",
                      },
                      {
                        value: 2,
                        text: "2",
                      },
                      {
                        value: 3,
                        text: "3",
                      },
                      {
                        value: 4,
                        text: "4",
                      },
                      {
                        value: 5,
                        text: "5",
                      },
                    ],
                    void 0,
                    "限制Toast显示的数量"
                  ),
                  UISwitch("逆序弹出", "qmsg-config-showreverse", false, void 0, "修改Toast弹出的顺序"),
                ],
              },
            ],
          },
        ],
      },
      {
        type: "container",
        text: "",
        views: [
          UIOwn(
            ($li) => {
              const $left = domUtils.createElement("div", {
                className: "pops-panel-item-left-text",
                innerHTML: `
							<p class="pops-panel-item-left-main-text">WebGL</p>
							<p class="pops-panel-item-left-desc-text"></p>
							`,
              });
              const $leftDesc = $left.querySelector(".pops-panel-item-left-desc-text");
              let gpuInfo = "";
              try {
                gpuInfo = getGPU();
              } catch (error) {
                log.error(error);
                gpuInfo = error.toString();
              }
              domUtils.text($leftDesc, gpuInfo);
              domUtils.append($li, $left);
              return $li;
            },
            void 0,
            {
              text: "WebGL",
            }
          ),
          {
            text: "功能",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch(
                    "伪装登录",
                    "disguiseLogin",
                    false,
                    void 0,
                    "该功能残缺，在部分区域内会失效或者导致功能异常"
                  ),
                  UISwitch("initial-scale=1", "dy-initialScale", false, void 0, "可配合手机模式放大页面"),
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
                    "当地址栏改变时，功能重载，建议开启"
                  ),
                  UISwitch("移除某些Cookie", "dy-cookie-remove__ac__", false, void 0, "阻止触发验证弹窗（maybe）"),
                  UISwitch(
                    "新标签页打开搜索结果",
                    "dy-search-click-to-new-tab",
                    false,
                    void 0,
                    "点击搜索框的<code>搜索</code>按钮时，点击视频区域的<code>#话题</code>时，新标签页打开"
                  ),
                ],
              },
              {
                text: "Url重定向",
                type: "container",
                views: [UISwitch("重定向/home", "douyin-redirect-url-home-to-root", false, void 0, "/home => /")],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "禁用抖音快捷键",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                type: "container",
                text: AutoOpenOrClose.text,
                views: [
                  UISwitch("赞|取消赞", "dy-keyboard-hook-likeOrDislike", false, void 0, "Z"),
                  UISwitch("评论", "dy-keyboard-hook-comment", false, void 0, "X"),
                  UISwitch("开启/关闭弹幕", "dy-keyboard-hook-danmaku-enable", false, void 0, "B"),
                  UISwitch("收藏/取消收藏", "dy-keyboard-hook-collect-enable", false, void 0, "C"),
                  UISwitch("复制分享口令", "dy-keyboard-hook-copyShareLink", false, void 0, "V"),
                  UISwitch("清屏", "dy-keyboard-hook-clearScreen", false, void 0, "J"),
                  UISwitch("自动连播", "dy-keyboard-hook-automaticBroadcast", false, void 0, "K"),
                  UISwitch("视频信息", "dy-keyboard-hook-videoInfo", false, void 0, "I"),
                  UISwitch("不感兴趣", "dy-keyboard-hook-notInterested", false, void 0, "R"),
                  UISwitch("进入作者主页", "dy-keyboard-hook-enterAuthorHomePage", false, void 0, "F"),
                  UISwitch("关注/取消关注", "dy-keyboard-hook-follow", false, void 0, "G"),
                  UISwitch("抖音搜索", "dy-keyboard-hook-search", false, void 0, "Shift+F"),
                  UISwitch(
                    "一键关闭当前页",
                    "dy-keyboard-hook-closeTheCurrentPageWithOneClick",
                    false,
                    void 0,
                    "Shift+Q"
                  ),
                  UISwitch("上下翻页", "dy-keyboard-hook-pageUpAndDown", false, void 0, "↑↓"),
                  UISwitch("快进快退", "dy-keyboard-hook-fastForwardAndFastBack", false, void 0, "← →"),
                  UISwitch("暂停", "dy-keyboard-hook-pause", false, void 0, "空格"),
                  UISwitch("网页内全屏", "dy-keyboard-hook-fullScreenInsideThePage", false, void 0, "Y"),
                  UISwitch("全屏", "dy-keyboard-hook-fullScreen", false, void 0, "H"),
                  UISwitch("稍后再看", "dy-keyboard-hook-watchItOutLater", false, void 0, "L"),
                  UISwitch("音量调整", "dy-keyboard-hook-volumeAdjustment", false, void 0, "Shift + / Shift -"),
                  UISwitch("呼出快捷键列表", "dy-keyboard-hook-listOfCallShortcutKeys", false, void 0, "?"),
                  UISwitch("关闭快捷键列表", "dy-keyboard-hook-closeTheShortcutKeyList", false, void 0, "ESC"),
                  UISwitch("相关推荐", "dy-keyboard-hook-relevantRecommendation", false, void 0, "N"),
                  UISwitch("听抖音", "dy-keyboard-hook-listenToDouyin", false, void 0, "T"),
                  UISwitch("小窗播放", "dy-keyboard-hook-smallWindowPlay", false, void 0, "U"),
                  UISwitch("推荐视频", "dy-keyboard-hook-recommendVideo", false, void 0, "P"),
                ],
              },
            ],
          },
        ],
      },
      {
        text: "",
        type: "container",
        views: [
          {
            text: "布局屏蔽-全局",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                type: "container",
                text: AutoOpenOrClose.text,
                views: [
                  UISwitch(
                    "【屏蔽】登录弹窗",
                    "watchLoginDialogToClose",
                    false,
                    void 0,
                    "屏蔽元素且自动等待元素出现并关闭登录弹窗"
                  ),
                  UISwitch("【屏蔽】底部？按钮", "shieldBottomQuestionButton", false, void 0, "屏蔽元素"),
                ],
              },
            ],
          },
          {
            text: "布局屏蔽-左侧导航栏",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                type: "container",
                text: AutoOpenOrClose.text,
                views: [
                  UISwitch("【屏蔽】左侧导航栏", "shieldLeftNavigator", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】精选", "shieldLeftNavigator-tab-home", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】推荐", "shieldLeftNavigator-tab-recommend", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】AI搜索/抖音", "shieldLeftNavigator-tab-ai-search", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】关注", "shieldLeftNavigator-tab-follow", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】朋友", "shieldLeftNavigator-tab-friend", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】我的", "shieldLeftNavigator-tab-user_self", false, void 0, "屏蔽元素"),

                  UISwitch("【屏蔽】直播", "shieldLeftNavigator-tab-live", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】放映厅", "shieldLeftNavigator-tab-vs", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】短剧", "shieldLeftNavigator-tab-series", false, void 0, "屏蔽元素"),
                ],
              },
            ],
          },
          {
            text: "布局屏蔽-顶部导航栏",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                text: AutoOpenOrClose.text,
                type: "container",
                views: [
                  UISwitch("【屏蔽】顶部导航栏", "shieldTopNavigator", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】右侧菜单栏", "shield-topNav-rightMenu", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】客户端提示", "shieldClientTip", true, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】充钻石", "shieldFillingBricksAndStones", true, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】客户端", "shieldClient", true, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】快捷访问", "shieldQuickAccess", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】通知", "shieldNotifitation", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】私信", "shieldPrivateMessage", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】投稿", "shieldSubmission", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】壁纸", "shieldWallpaper", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】更多", "shield-topNav-rightMenu-more", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】登录头像", "shield-topNav-rightMenu-loginAvatar", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】AI搜索", "shield-topNav-ai-search", false, void 0, "屏蔽元素"),
                ],
              },
            ],
          },
          {
            text: "布局屏蔽-搜索",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                text: AutoOpenOrClose.text,
                type: "container",
                views: [
                  UISwitch("【屏蔽】搜索框", "shieldSearch", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】搜索框的提示", "shieldSearchPlaceholder", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】猜你想搜", "shieldSearchGuessYouWantToSearch", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】抖音热点", "shieldSearchTiktokHotspot", false, void 0, "屏蔽元素"),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "布局屏蔽-鼠标悬浮提示",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                type: "container",
                text: AutoOpenOrClose.text + "<br>视频区域-右侧工具栏",
                views: [
                  UISwitch("进入作者主页", "dy-video-mouseHoverTip-rightToolBar-enterUserHome", false),
                  UISwitch("关注", "dy-video-mouseHoverTip-rightToolBar-follow", false),
                  UISwitch("点赞", "dy-video-mouseHoverTip-rightToolBar-addLike", false),
                  UISwitch("评论", "dy-video-mouseHoverTip-rightToolBar-comment", false),
                  UISwitch("收藏", "dy-video-mouseHoverTip-rightToolBar-collect", false),
                  UISwitch("分享", "dy-video-mouseHoverTip-rightToolBar-share", false),
                  UISwitch("看相关", "dy-video-mouseHoverTip-rightToolBar-seeCorrelation", false),
                  UISwitch("更多", "dy-video-mouseHoverTip-rightToolBar-more", false),
                ],
              },
              {
                type: "container",
                text: "视频区域-底部工具栏",
                views: [
                  UISwitch("自动连播", "dy-video-mouseHoverTip-bottomToolBar-automaticBroadcast", false),
                  UISwitch("清屏", "dy-video-mouseHoverTip-bottomToolBar-clearScreen", false),
                  UISwitch("稍后再看", "dy-video-mouseHoverTip-bottomToolBar-watchLater", false),
                  UISwitch("网页全屏", "dy-video-mouseHoverTip-bottomToolBar-pageFullScreen", false),
                  UISwitch("全屏", "dy-video-mouseHoverTip-bottomToolBar-fullScreen", false),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const UIButton = function (
    text,
    description,
    buttonText,
    buttonIcon,
    buttonIsRightIcon,
    buttonIconIsLoading,
    buttonType,
    clickCallBack,
    afterAddToUListCallBack,
    disable
  ) {
    const result = {
      text,
      type: "button",
      attributes: {},
      props: {},
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
      afterAddToUListCallBack,
    };
    Reflect.set(result.attributes, ATTRIBUTE_INIT, () => {
      result.disable = Boolean(disable);
    });
    return result;
  };
  const UIButtonShortCut = function (
    text,
    description,
    key,
    defaultValue,
    defaultButtonText,
    buttonType = "default",
    shortCut
  ) {
    const __defaultButtonText = defaultButtonText;
    const getButtonText = () => {
      return shortCut.getShowText(key, __defaultButtonText);
    };
    const result = UIButton(text, description, getButtonText, "keyboard", false, false, buttonType, async (event) => {
      const $click = event.target;
      const $btn = $click.closest(".pops-panel-button")?.querySelector("span");
      if (shortCut.isWaitPress) {
        Qmsg.warning("请先执行当前的录入操作");
        return;
      }
      if (shortCut.hasOptionValue(key)) {
        shortCut.emptyOption(key);
        Qmsg.success("清空快捷键");
      } else {
        const loadingQmsg = Qmsg.loading("请按下快捷键...", {
          showClose: true,
          onClose() {
            shortCut.cancelEnterShortcutKeys();
          },
        });
        const { status, option, key: isUsedKey } = await shortCut.enterShortcutKeys(key);
        loadingQmsg.close();
        if (status) {
          log.success(["成功录入快捷键", option]);
          Qmsg.success("成功录入");
        } else {
          Qmsg.error(`快捷键 ${shortCut.translateKeyboardValueToButtonText(option)} 已被 ${isUsedKey} 占用`);
        }
      }
      $btn.innerHTML = getButtonText();
    });
    result.attributes = {};
    Reflect.set(result.attributes, ATTRIBUTE_INIT, () => {
      return false;
    });
    return result;
  };
  const UISlider = function (
    text,
    key,
    defaultValue,
    min,
    max,
    changeCallback,
    getToolTipContent,
    description,
    step,
    valueChangeCallBack
  ) {
    const result = {
      text,
      type: "slider",
      description,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      getToolTipContent(value) {
        if (typeof getToolTipContent === "function") {
          return getToolTipContent(value);
        } else {
          return `${value}`;
        }
      },
      callback(event, value) {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      min,
      max,
      step,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("slider", result, {
      get(key2, defaultValue2) {
        return Panel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        Panel.setValue(key2, value);
      },
    });
    return result;
  };
  const PanelVideoConfig = {
    id: "panel-config-video",
    title: "视频",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "功能",
            type: "deepMenu",
            views: [
              {
                text: "功能",
                type: "container",
                views: [
                  UISelect(
                    "清晰度",
                    "chooseVideoDefinition",
                    -2,
                    [
                      {
                        text: "超清 4K",
                        value: -2,
                      },
                      {
                        text: "超清 2K",
                        value: -1,
                      },
                      {
                        text: "高清 1080P",
                        value: 1,
                      },
                      {
                        text: "高清 720P",
                        value: 2,
                      },
                      {
                        text: "标清 540P",
                        value: 3,
                      },
                      {
                        text: "极速",
                        value: 4,
                      },
                      {
                        text: "智能",
                        value: 0,
                      },
                    ],
                    void 0,
                    "自行选择清晰度"
                  ),
                  UISwitch("沉浸模式", "fullScreen", false, void 0, "移除右侧工具栏、底部信息栏等"),
                  UISwitch("手机模式", "mobileMode", false, void 0, "放大文字和图标"),
                  UISwitch("评论区移到中间", "changeCommentToBottom", true, void 0, "修改评论区为中间弹出而非右侧区域"),
                  UISwitch(
                    "修复进度条",
                    "repairProgressBar",
                    false,
                    void 0,
                    "修复移动端不能点击拖拽和定位进度的问题（仅移动端使用）"
                  ),
                  UISwitch("禁用双击点赞", "dy-video-disableDoubleClickLike", false, void 0, "禁止视频区域双击点赞"),
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
                    "修改复制链接内容",
                    "dy-video-hookCopyLinkButton",
                    true,
                    void 0,
                    "分享->复制链接，复制的内容仅为链接，不包含其它"
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
                  UISwitch("移除video的bottom偏移", "dy-video-removeStyle-bottom", false),
                  UISwitch("禁用右侧工具栏的transform", "dy-video-disableRightToolbarTransform", false),
                  UISelect(
                    "object-fit",
                    "dy-video-object-fit",
                    "",
                    [
                      {
                        text: "默认",
                        value: "",
                      },
                      {
                        text: "fill（拉伸填满容器）",
                        value: "fill",
                      },
                      {
                        text: "contain（等比缩放至容器内（可能有留白）",
                        value: "contain",
                      },
                      {
                        text: "cover（等比填充并裁剪超出部分）",
                        value: "cover",
                      },
                      {
                        text: "none（原始尺寸）",
                        value: "none",
                      },
                      {
                        text: "scale-down（根据容器大小选择填充或拉伸）",
                        value: "scale-down",
                      },
                    ],
                    void 0,
                    "对video的object-fit属性进行覆盖"
                  ),
                ],
              },
              {
                type: "container",
                text: "解析下载",
                views: [
                  UISwitch(
                    "视频解析",
                    "parseVideo",
                    true,
                    void 0,
                    "点击视频右侧工具栏的分享按钮-下载（无视<code>该视频不支持下载</code>的提示）"
                  ),
                  UISwitch(
                    "弹出下载重命名文件名弹窗",
                    "dy-video-popupDownloadRenameFileName",
                    false,
                    void 0,
                    "当点击下载时，如果启用该功能，则弹出下载重命名文件名弹窗，可自定义文件名"
                  ),
                  UIInput(
                    "自定义下载文件名",
                    "dy-video-parseVideo-downloadFileName",
                    "{uid}-{nickname}-{desc}-{quality}-{downloadTime}"
                  ),
                ],
              },
              {
                text: "视频区域背景色",
                type: "container",
                views: [
                  UISwitch("启用", "dy-video-bgColor-enable", false, void 0, "自定义视频背景色"),
                  UIOwn(
                    ($li) => {
                      const $left = domUtils.createElement("div", {
                        className: "pops-panel-item-left-text",
                        innerHTML: `
											<p class="pops-panel-item-left-main-text">视频背景颜色</p>
											<p class="pops-panel-item-left-desc-text">自定义视频背景颜色，包括评论区</p>
											`,
                      });
                      const $right = domUtils.createElement("div", {
                        className: "pops-panel-item-right",
                        innerHTML: `
											<input type="color" class="pops-color-choose" />
											`,
                      });
                      const $color = $right.querySelector(".pops-color-choose");
                      $color.value = Panel.getValue("dy-video-changeBackgroundColor");
                      const $style = domUtils.createElement("style");
                      domUtils.append(document.head, $style);
                      domUtils.on($color, ["input", "propertychange"], (event) => {
                        log.info("选择颜色：" + $color.value);
                        $style.innerHTML = `
												#sliderVideo > div{
													background: ${$color.value};
												}
												`;
                        Panel.setValue("dy-video-changeBackgroundColor", $color.value);
                      });
                      $li.appendChild($left);
                      $li.appendChild($right);
                      return $li;
                    },
                    {
                      "dy-video-changeBackgroundColor": "#000000",
                    },
                    {
                      text: "视频背景颜色",
                      desc: "自定义视频背景颜色，包括评论区",
                    }
                  ),
                ],
              },
              {
                type: "container",
                text: "视频信息",
                views: [
                  UISwitch(
                    "自动隐藏视频信息",
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
                    "设置首次延迟自动隐藏视频信息的时间，单位（ms）",
                    100
                  ),
                ],
              },
              {
                type: "container",
                text: "底部的视频控件",
                views: [
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
                    "设置首次延迟自动隐藏视频标题的时间，单位（ms）",
                    100
                  ),
                ],
              },
              {
                type: "container",
                text: "右侧工具栏",
                views: [
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
                    "设置首次延迟自动隐藏视频标题的时间，单位（ms）",
                    100
                  ),
                ],
              },
              {
                type: "container",
                text: "倍速播放",
                views: [
                  UISwitch("启用", "dy-video-playbackrate", false),
                  UISelect(
                    "倍速",
                    "dy-video-playbackrate-select-value",
                    1,
                    [
                      0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 5, 6, 7, 8, 9, 10,
                      11, 12, 13, 14, 15, 16,
                    ].map((it) => {
                      return {
                        text: String(it),
                        value: Number(String(it)),
                      };
                    }),
                    void 0,
                    "选择视频播放的速度"
                  ),
                ],
              },
            ],
          },
          {
            text: "自定义快捷键",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
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
                  ),
                  UIButtonShortCut(
                    "视频解析",
                    "解析视频链接",
                    "dy-video-shortcut-parseVideo",
                    void 0,
                    "点击录入快捷键",
                    void 0,
                    DouYinVideoPlayerShortCut.shortCut
                  ),
                  UIButtonShortCut(
                    "倍速播放",
                    "开启/关闭倍速播放功能",
                    "dy-video-shortcut-playbackRate",
                    void 0,
                    "点击录入快捷键",
                    void 0,
                    DouYinVideoPlayerShortCut.shortCut
                  ),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "禁用抖音快捷键",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                type: "container",
                text: AutoOpenOrClose.text,
                views: [
                  UISwitch("上翻页", "dy-keyboard-hook-arrowUp-w", false, void 0, "W"),
                  UISwitch("下翻页", "dy-keyboard-hook-arrowDown-s", false, void 0, "S"),
                  UISwitch("快退", "dy-keyboard-hook-videoRewind", false, void 0, "A"),
                  UISwitch("快进", "dy-keyboard-hook-videoFastForward", false, void 0, "D"),
                ],
              },
            ],
          },
          {
            text: "过滤器",
            type: "deepMenu",
            views: [
              {
                text: '<a href="https://greasyfork.org/zh-CN/scripts/494643-%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',
                type: "container",
                views: [
                  UISwitch("启用", "shieldVideo-exec-network-enable", true, void 0, "开启后以下功能才会生效"),
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
                    true,
                    void 0,
                    "在视频的底部的工具栏中显示 {...} 按钮，用于查看视频信息以便于进行添加过滤规则"
                  ),
                  UIButton("视频过滤规则", "可过滤视频", "自定义", void 0, false, false, "primary", () => {
                    DouYinVideoFilter.showView();
                  }),
                ],
              },
              {
                type: "container",
                text: "",
                views: [
                  UIButton("数据导入", "导入自定义规则数据", "导入", void 0, false, false, "primary", () => {
                    DouYinVideoFilter.$data.videoFilterRuleStorage.importRules();
                  }),
                  UIButton("数据导出", "导出自定义规则数据", "导出", void 0, false, false, "primary", () => {
                    DouYinVideoFilter.$data.videoFilterRuleStorage.exportRules(_SCRIPT_NAME_ + "-视频过滤规则.json");
                  }),
                ],
              },
            ],
          },
        ],
      },
      {
        text: "",
        type: "container",
        views: [
          {
            text: "布局屏蔽-播放器-右侧工具栏",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                text: AutoOpenOrClose.text,
                type: "container",
                views: [
                  UISwitch(
                    "【屏蔽】切换播放<code>↑</code><code>↓</code>",
                    "shieldPlaySwitchButton",
                    false,
                    void 0,
                    "在右侧作者头像上方或者是在右侧区域"
                  ),
                  UISwitch("【屏蔽】AI抖音", "blockAIDouYin", false),
                  UISwitch("【屏蔽】作者头像", "shieldAuthorAvatar", false),
                  UISwitch("【屏蔽】点赞", "shieldLikeButton", false),
                  UISwitch("【屏蔽】评论", "shieldCommentButton", false),
                  UISwitch("【屏蔽】收藏", "shieldCollectionButton", false),
                  UISwitch("【屏蔽】分享", "shieldSharenButton", false),
                  UISwitch("【屏蔽】听抖音", "shieldListenDouYinButton", false),
                  UISwitch("【屏蔽】看相关", "shieldRelatedRecommendationsButton", false),
                  UISwitch("【屏蔽】更多", "shieldMoreButton", false, void 0, "<code>...</code>按钮"),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "布局屏蔽-播放器-底部-视频信息",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                type: "container",
                text: AutoOpenOrClose.text,
                views: [
                  UISwitch(
                    "【屏蔽】视频信息",
                    "dy-video-bottom-shieldVideoInfoWrap",
                    false,
                    void 0,
                    "可代替【清屏】功能"
                  ),
                  UISwitch(
                    "【屏蔽】<code>点击推荐</code>或<code>共xx人推荐</code>",
                    "dy-video-blockClickRecommend",
                    false,
                    void 0,
                    ""
                  ),
                  UISwitch(
                    "【屏蔽】视频标题上面的标签",
                    "dy-video-blockTitleTopTag",
                    false,
                    void 0,
                    "例如：每周精选、抖音精选"
                  ),
                  UISwitch(
                    "【屏蔽】视频标题下面的标签",
                    "dy-video-bottom-shieldVideoUnderTitleTag",
                    false,
                    void 0,
                    "例如：相关搜索、AI搜索、合集...等"
                  ),
                  UISwitch("【屏蔽】及时接收作品更新提醒", "dy-video-blockClickUpdateReminder", false),
                  UISwitch(
                    "【屏蔽】作者声明",
                    "dy-video-blockAuthorDeclaration",
                    false,
                    void 0,
                    "例如：<code>作者声明：虚构演绎，仅供娱乐</code>"
                  ),
                  UISwitch("【屏蔽】识别画面", "dy-video-blockAIIdentifyTheScreen", false),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "布局屏蔽-播放器-底部-播放器组件",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                type: "container",
                text: AutoOpenOrClose.text,
                views: [
                  UISwitch("【屏蔽】播放器组件", "shieldBottomVideoToolBar", false, void 0, "整个播放器组件"),
                  UISwitch("【屏蔽】播放", "shieldBottomVideoToolBar-play", false, void 0, "播放|暂停按钮"),
                  UISwitch("【屏蔽】播放时长", "shieldBottomVideoToolBar-time", false),
                  UISwitch("【屏蔽】章节要点", "shieldBottomVideoToolbar-blockChapterContainer", false),
                  UISwitch("【屏蔽】弹幕容器", "shieldBottomVideoToolbarDanmuContainer", false),
                  UISwitch("【屏蔽】AI笔记", "shieldBottomVideoToolbar-aiNotes", false),
                  UISwitch("【屏蔽】连播", "shieldBottomVideoToolbar-autoPlay", false),
                  UISwitch("【屏蔽】清屏", "shieldBottomVideoToolbar-clearScreen", false),
                  UISwitch("【屏蔽】清晰度", "shieldBottomVideoToolbar-playclarity", false),
                  UISwitch("【屏蔽】倍速", "shieldBottomVideoToolbar-playback", false),
                  UISwitch("【屏蔽】稍后再看", "shieldBottomVideoToolbar-watchLater", false),
                  UISwitch("【屏蔽】小窗模式", "shieldBottomVideoToolbar-miniMode", false),
                  UISwitch("【屏蔽】音量", "shieldBottomVideoToolbar-volume", false),
                  UISwitch("【屏蔽】网页全屏", "shieldBottomVideoToolbar-pageFullScreen", false),
                  UISwitch("【屏蔽】进入全屏", "shieldBottomVideoToolbar-fullScreen", false),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "布局屏蔽-播放器-其它",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                type: "container",
                text: AutoOpenOrClose.text,
                views: [
                  UISwitch("【屏蔽】右侧的展开评论按钮", "shieldRightExpandCommentButton", false),
                  UISwitch("【屏蔽】搜索悬浮栏", "shieldSearchFloatingBar", false, void 0, "一般出现在左上角"),
                  UISwitch(
                    "【屏蔽】网页全屏关闭按钮",
                    "shieldCloseFullScreenButton",
                    false,
                    void 0,
                    "一般开启网页全屏后出现在左上角"
                  ),
                  UISwitch(
                    "【屏蔽】购物信息",
                    "dy-video-blockShopInfo",
                    true,
                    void 0,
                    "该元素出现在视频底部的用户名、标题信息的上面"
                  ),
                ],
              },
            ],
          },
          {
            text: "布局屏蔽-评论区",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                text: AutoOpenOrClose.text,
                type: "container",
                views: [
                  UISwitch("【屏蔽】底部的评论工具栏", "dy-video-shieldUserCommentToolBar", false),
                  UISwitch(
                    "【屏蔽】大家都在搜",
                    "dy-video-shieldUserCommentEveryOneAllSearch",
                    false,
                    void 0,
                    "在评论区的顶部出现"
                  ),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "布局屏蔽-直播",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                type: "container",
                text: AutoOpenOrClose.text,
                views: [
                  UISwitch(
                    "【屏蔽】点击或按<code>F</code>进入直播间",
                    "dy-video-live-block-tipClickOrKeyboardFEnterLiveRoom",
                    false
                  ),
                  UISwitch("【屏蔽】小黄车", "dy-video-live-block-yellowCar", false),
                ],
              },
              {
                type: "container",
                text: "播放器组件",
                views: [UISwitch("【屏蔽】刷新", "dy-video-live-block-playComponents-refresh", false)],
              },
            ],
          },
        ],
      },
    ],
  };
  const PanelSearchConfig = {
    id: "panel-config-search",
    title: "搜索",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "功能",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
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
                    0,
                    () => [
                      {
                        text: `跟随主设置（${PopsPanelStorageApi.get("autoEnterElementFullScreen") ? "是" : "否"}）`,
                        value: -1,
                      },
                      {
                        text: "是",
                        value: 1,
                      },
                      {
                        text: "否",
                        value: 0,
                      },
                    ],
                    void 0,
                    ["视频", "功能", "自动进入网页全屏"].map((it) => `<code>${it}</code>`).join("-")
                  ),
                  UISelect(
                    "搜索结果-视频-显示样式",
                    "live-setSearchResultFilterWithVideoStyle",
                    "one",
                    [
                      {
                        text: "无",
                        value: "",
                      },
                      {
                        text: "单列",
                        value: "one",
                      },
                      {
                        text: "双列",
                        value: "double",
                      },
                    ],
                    void 0,
                    "当屏幕宽度<=<code>800px</code>时，该功能才会生效"
                  ),
                ],
              },
            ],
          },
        ],
      },
      {
        text: "",
        type: "container",
        views: [
          {
            text: "布局屏蔽",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                text: AutoOpenOrClose.text,
                type: "container",
                views: [
                  UISwitch(
                    "【屏蔽】相关搜索",
                    "douyin-search-shieldReleatedSearches",
                    false,
                    void 0,
                    "屏蔽右边的相关搜索"
                  ),
                  UISwitch("【屏蔽】AI问一问", "douyin-search-blockAIAsk", false, void 0, "相关搜索上面的问一问"),
                  UISwitch(
                    "【屏蔽】问问AI",
                    "douyin-search-blockAskAI",
                    false,
                    void 0,
                    "为你找到以下结果，问问AI智能总结内容"
                  ),
                ],
              },
            ],
          },
          {
            text: "布局屏蔽-左侧导航栏",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISelect(
                    "【屏蔽】左侧导航栏",
                    "search-shieldLeftNavigator",
                    -1,
                    () => [
                      {
                        text: `跟随主设置（${PopsPanelStorageApi.get("shieldLeftNavigator") ? "是" : "否"}）`,
                        value: -1,
                      },
                      {
                        text: "是",
                        value: 1,
                      },
                      {
                        text: "否",
                        value: 0,
                      },
                    ],
                    void 0,
                    ["通用", "布局屏蔽-左侧导航栏", "【屏蔽】左侧导航栏"].map((it) => `<code>${it}</code>`).join("-")
                  ),
                ],
              },
            ],
          },
          {
            text: "布局屏蔽-顶部导航栏",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISelect(
                    "【屏蔽】顶部导航栏",
                    "search-shieldTopNavigator",
                    -1,
                    () => [
                      {
                        text: `跟随主设置（${PopsPanelStorageApi.get("shieldTopNavigator") ? "是" : "否"}）`,
                        value: -1,
                      },
                      {
                        text: "是",
                        value: 1,
                      },
                      {
                        text: "否",
                        value: 0,
                      },
                    ],
                    void 0,
                    ["通用", "布局屏蔽-顶部导航栏", "【屏蔽】顶部导航栏"].map((it) => `<code>${it}</code>`).join("-")
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const PanelLiveConfig = {
    id: "panel-config-live",
    title: "直播",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "功能",
            type: "deepMenu",
            views: [
              {
                text: "功能",
                type: "container",
                views: [
                  UISelect(
                    "清晰度",
                    "live-chooseQuality",
                    "origin",
                    (() => {
                      return Object.keys(VideoQualityMap).map((key) => {
                        let item = VideoQualityMap[key];
                        return {
                          value: key,
                          text: item.label,
                        };
                      });
                    })(),
                    void 0,
                    "自行选择清晰度"
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
                  UISwitch("禁止自动播放", "live-pauseVideo", false, void 0, "3秒内禁止任何形式的播放"),
                  UISwitch("禁用双击点赞", "dy-live-disableDoubleClickLike", false, void 0, "禁止直播视频区域双击点赞"),
                  UISwitch("自动关闭聊天室", "dy-live-autoCloseChatRoom", false, void 0, "自动点击关闭聊天室按钮"),
                  UISwitch("禁用鼠标滚轮切换直播间", "live-prevent-wheel-switchLiveRoom", false, void 0, ""),
                ],
              },
              {
                text: "视频区域背景色",
                type: "container",
                views: [
                  UISwitch("启用", "live-bgColor-enable", false, void 0, "自定义视频背景色"),
                  UIOwn(
                    ($li) => {
                      const $left = domUtils.createElement("div", {
                        className: "pops-panel-item-left-text",
                        innerHTML: `
											<p class="pops-panel-item-left-main-text">视频背景颜色</p>
											<p class="pops-panel-item-left-desc-text">自定义视频背景颜色</p>
											`,
                      });
                      const $right = domUtils.createElement("div", {
                        className: "pops-panel-item-right",
                        innerHTML: `
											<input type="color" class="pops-color-choose" />
											`,
                      });
                      const $color = $right.querySelector(".pops-color-choose");
                      $color.value = Panel.getValue("live-changeBackgroundColor");
                      domUtils.on($color, ["input", "propertychange"], (event) => {
                        log.info("选择颜色：" + $color.value);
                        Panel.setValue("live-changeBackgroundColor", $color.value);
                      });
                      $li.appendChild($left);
                      $li.appendChild($right);
                      return $li;
                    },
                    {
                      "live-changeBackgroundColor": "#000000",
                    },
                    {
                      text: "视频背景颜色",
                      desc: "自定义视频背景颜色",
                    }
                  ),
                ],
              },
            ],
          },
          {
            text: "消息过滤器",
            type: "deepMenu",
            description: "包括：弹幕、聊天室",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("启用", "live-danmu-shield-rule-enable", false, void 0, "启用自定义的弹幕过滤规则"),
                  UISwitch("【屏蔽】送礼信息", "live-danmu-shield-gift", false, void 0, ""),
                  UISwitch("【屏蔽】福袋口令", "live-danmu-shield-lucky-bag", false, void 0, ""),
                ],
              },
              {
                type: "container",
                text: "聊天室",
                views: [
                  UISwitch(
                    "【屏蔽】xxx 为主播加了 xx分",
                    "live-message-shield-biz_scene-common_text_game_score",
                    false,
                    void 0,
                    ""
                  ),
                  UISwitch("【屏蔽】emoji", "live-message-shield-method-emoji-chat", false, void 0, ""),
                ],
              },
              {
                type: "container",
                text: "",
                views: [
                  UIOwn(($li) => {
                    const $textareaWrapper = domUtils.createElement(
                      "div",
                      {
                        className: "pops-panel-textarea",
                        innerHTML: `<textarea placeholder="请输入屏蔽规则，每行一个
例如：屏蔽包含'主播'的消息
主播" style="height:350px;"></textarea>`,
                      },
                      {
                        style: "width: 100%;",
                      }
                    );
                    const textarea = $textareaWrapper.querySelector("textarea");
                    textarea.value = DouYinMessageFilter.get();
                    domUtils.on(
                      textarea,
                      ["input", "propertychange"],
                      utils.debounce(function () {
                        DouYinMessageFilter.set(textarea.value);
                        DouYinMessageFilter.init();
                      }, 1e3)
                    );
                    $li.appendChild($textareaWrapper);
                    return $li;
                  }),
                ],
              },
            ],
          },
          {
            text: "自定义快捷键",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
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
                  ),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "禁用抖音快捷键",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                type: "container",
                text: AutoOpenOrClose.text,
                views: [
                  UISwitch("三屏画面", "dy-live-threeScreen", false, void 0, "S"),
                  UISwitch("刷新", "dy-live-refresh", false, void 0, "E"),
                  UISwitch("屏幕旋转", "dy-live-screenRotation", false, void 0, "D"),
                  UISwitch("开启小窗模式", "dy-live-enableSmallWindowMode", false, void 0, "U"),
                  UISwitch("切换直播间", "dy-live-switchLiveRoom", false, void 0, "↑↓"),
                ],
              },
            ],
          },
        ],
      },
      {
        text: "",
        type: "container",
        views: [
          {
            text: "布局屏蔽-视频区域内",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                text: AutoOpenOrClose.text,
                type: "container",
                views: [
                  UISwitch(
                    "【屏蔽】顶栏信息",
                    "live-shieldTopToolBarInfo",
                    false,
                    void 0,
                    "屏蔽元素，包括直播作者、右侧的礼物展馆"
                  ),
                  UISwitch("【屏蔽】底部的礼物栏", "live-shieldGiftColumn", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】礼物特效", "live-shieldGiftEffects", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】福袋", "live-shieldLucky", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】弹幕", "live-shieldDanmuku", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】小黄车", "live-shielYellowCar", false, void 0, "屏蔽元素"),
                  UISwitch(
                    "【屏蔽】点亮展馆帮主播集星",
                    "live-block-exhibition-banner-dylive-tooltip",
                    false,
                    void 0,
                    "屏蔽元素，礼物展馆下面的悬浮提示"
                  ),
                ],
              },
              {
                type: "container",
                text: "右键菜单",
                views: [
                  UISwitch(
                    "【屏蔽】下载客户端",
                    "dy-live-blockVideoRightMenu-downloadClient",
                    true,
                    void 0,
                    "屏蔽右键菜单项"
                  ),
                ],
              },
            ],
          },
          {
            text: "布局屏蔽-聊天室",
            type: "deepMenu",
            afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
            views: [
              {
                text: AutoOpenOrClose.text,
                type: "container",
                views: [
                  UISwitch("【屏蔽】聊天室", "live-shieldChatRoom", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】贵宾席", "live-shielChatRoomVipSeats", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】用户等级图标", "dy-live-shieldUserLevelIcon", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】VIP图标", "dy-live-shieldUserVIPIcon", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】粉丝牌", "dy-live-shieldUserFansIcon", false, void 0, "屏蔽元素"),
                  UISwitch(
                    "【屏蔽】信息播报",
                    "dy-live-shieldMessage",
                    false,
                    void 0,
                    "顶部左右滚动播报（xxx进入/加入直播间），底部滚动播报（xxx来了，xxx给主播点赞）"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const PanelUserConfig = {
    id: "panel-config-user",
    title: "用户",
    views: [
      {
        text: "功能",
        type: "container",
        views: [UISwitch("显示UID", "dy-user-addShowUserUID", true, void 0, "在用户信息区域下方显示当前用户的uid")],
      },
    ],
  };
  const MPanelShareUserConfig = {
    id: "m-panel-config-share-user",
    title: "主页",
    headerTitle: "/share/user<br />主页",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("视频合集", "m-dy-share-user-coverPlayletList", true, void 0, "正确跳转视频合集页面"),
                  UISwitch("视频列表", "m-dy-share-user-coverPostListContainer", true, void 0, "正确跳转视频页面"),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const MPanelShareNoteConfig = {
    id: "m-panel-config-share-note",
    title: "笔记",
    headerTitle: "/share/note<br />笔记",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch(
                    "精彩图文",
                    "m-dy-share-note-coverExcitingGraphicsAndText",
                    true,
                    void 0,
                    "正确跳转笔记页面"
                  ),
                  UISwitch("用户", "m-dy-share-note-coverUser", true, void 0, "正确跳转用户主页"),
                  UISwitch("话题", "m-dy-share-note-coverHashTag", true, void 0, "正确跳转相关话题"),
                  UISwitch("音乐", "m-dy-share-note-coverMusic", true, void 0, "正确跳转相关音乐"),
                  UISwitch("相关推荐", "m-dy-share-note-coverRecommend", true, void 0, "正确跳转笔记页面"),
                ],
              },
            ],
          },
          {
            text: "屏蔽元素",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("【屏蔽】评论", "m-dy-share-note-blockComment", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】相关推荐", "m-dy-share-note-blockRecommend", false, void 0, "屏蔽元素"),
                  UISwitch("【屏蔽】底部工具栏", "m-dy-share-note-blockFooterToobar", false, void 0, "屏蔽元素"),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const MPanelShareChallengeConfig = {
    id: "m-panel-config-share-challenge",
    title: "话题",
    headerTitle: "/share/challenge<br />话题",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("顶部区域", "m-dy-share-challenge-coverTopJump", true, void 0, "阻止跳转至下载页面"),
                  UISwitch("视频卡片", "m-dy-share-challenge-coverVideoCard", true, void 0, "正确跳转视频页面"),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const MPanelShareVideoConfig = {
    id: "m-panel-config-share-video",
    title: "视频",
    headerTitle: "/share/video<br />视频",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [UISwitch("全局点击", "m-dy-share-video-coverGlobalClick", true, void 0, "阻止跳转至下载页")],
              },
            ],
          },
        ],
      },
    ],
  };
  const MPanelShareMusicConfig = {
    id: "m-panel-config-share-music",
    title: "音乐",
    headerTitle: "/share/music<br />音乐",
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [UISwitch("视频卡片", "m-dy-share-music-coverVideoCard", true, void 0, "正确跳转视频页面")],
              },
            ],
          },
        ],
      },
    ],
  };
  const PanelRecommendConfig = {
    id: "panel-config-recommend",
    title: "推荐",
    views: [
      {
        text: "功能",
        type: "container",
        views: [
          UISwitch(
            "自动连播",
            "dy-recommend-automaticContinuousPlayback",
            false,
            void 0,
            "注意：请勿和推荐页面自带的<code>连播</code>功能同时使用"
          ),
        ],
      },
    ],
  };
  PanelContent.addContentConfig([
    PanelCommonConfig,
    PanelVideoConfig,
    PanelRecommendConfig,
    PanelSearchConfig,
    PanelLiveConfig,
    PanelUserConfig,
  ]);
  PanelContent.addContentConfig([
    MPanelShareUserConfig,
    MPanelShareNoteConfig,
    MPanelShareChallengeConfig,
    MPanelShareVideoConfig,
    MPanelShareMusicConfig,
  ]);
  PanelMenu.addMenuOption({
    key: "show_pops_m_panel_setting",
    text: "⚙ 移动端设置",
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      return text;
    },
    callback: () => {
      Panel.showPanel(PanelContent.getConfig(1), `${Panel.$data.scriptName}-移动端设置`);
    },
  });
  Panel.init();
  if (MDouYinRouter.isMDouYin()) {
    MDouYin.init();
  } else {
    DouYin.init();
  }
})(Qmsg, DOMUtils, Utils, pops);
