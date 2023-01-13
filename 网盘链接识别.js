// ==UserScript==
// @name         网盘链接识别
// @namespace    https://tampermonkey.net/
// @version      23.01.13.16.50
// @description  识别网页中显示的网盘链接，目前包括百度网盘、蓝奏云、天翼云、中国移动云盘(原:和彩云)、阿里云、文叔叔、奶牛快传、123盘、腾讯微云、迅雷网盘、115网盘、夸克网盘、城通网盘(部分)、magnet格式，支持蓝奏云、天翼云、123盘、奶牛直链获取下载，页面动态监控链接
// @author       WhiteSevs
// @include      *
// @run-at       document-body
// @license      GPL-3.0-only
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_openInTab
// @connect      *
// @require	     https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://unpkg.com/any-touch/dist/any-touch.umd.min.js
// @require      https://greasyfork.org/scripts/455576-qmsg/code/Qmsg.js?version=1122361
// @require      https://greasyfork.org/scripts/456470-%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87%E5%BA%93/code/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87%E5%BA%93.js?version=1127486
// @require      https://greasyfork.org/scripts/456485-pops/code/pops.js?version=1134453
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1138028
// ==/UserScript==

(function () {
	"use strict";
	const NetDisk = {
		// 网盘链接获取
		isInit: false, // 是否初始化
		pageText: null, // 页面显示出的文字
		linkDict: null, // 链接字典
		isMatching: false, // 正在匹配链接中
		matchLink: null, // 匹配到的
		hasMatchLink: false, // 已存在匹配的链接

		regular: {
			baidu: {
				link_innerText:
					/pan.baidu.com\/s\/[0-9a-zA-Z-_]{8,24}([\s\S]{0,20}(密码|访问码|提取码)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi, // 百度网盘链接
				link_innerHTML:
					/pan.baidu.com\/s\/[0-9a-zA-Z-_]{8,24}([\s\S]{0,300}(密码|访问码|提取码)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi, // 百度网盘链接
				shareCode: /pan\.baidu\.com\/s\/([0-9a-zA-Z-_]+)/gi, // 链接参数
				shareCodeNeedRemoveStr: /pan\.baidu\.com\/s\//gi, // 需要替换空的字符串，比如pan.baidu.com/s/替换为空
				checkAccessCode: /(密码|访问码|提取码).+/g, // 用来判断是否存在密码
				accessCode: /[0-9a-zA-Z]{4}/i, // 提取码（如果存在的话）
				uiLinkShow:
					"pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#} 提取码: {#accessCode#}", // 用于显示的链接
				blank: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
			},
			lanzou: {
				link_innerText:
					/lanzou[a-z]{0,1}.com\/(tp\/|u\/|)([a-zA-Z0-9_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{1,20})([\s\S]{0,20}(密码|访问码|提取码)[\s\S]{0,10}[a-zA-Z0-9]{3,6}|)/gi,
				link_innerHTML:
					/lanzou[a-z]{0,1}.com\/(tp\/|u\/|)([a-zA-Z0-9_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{1,20})([\s\S]{0,300}(密码|访问码|提取码)[\s\S]{0,15}[a-zA-Z0-9]{3,6}|)/gi,
				shareCode:
					/lanzou[a-z]{0,1}.com\/(tp\/|u\/|)([a-zA-Z0-9_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{1,20})/gi,
				shareCodeNotMatch: /^(ajax|file|undefined|1125)/gi, // shareCode参数中不可能存在的链接，如果shareCode存在这些，那就拒绝匹配
				shareCodeNeedRemoveStr: /lanzou[a-z]{0,1}.com\/(tp\/|u\/|)/gi,
				checkAccessCode: /(密码|访问码|提取码).+/g,
				accessCode: /[0-9a-zA-Z]{4}/i,
				uiLinkShow: "lanzoux.com/s/{#shareCode#} 提取码: {#accessCode#}",
				blank: "https://www.lanzoux.com/s/{#shareCode#}",
			},
			tianyiyun: {
				link_innerText:
					/(cloud.189.cn\/web\/share\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn\/t\/([a-zA-Z0-9_\-]{8,14}))([\s\S]{0,20}(密码|访问码|提取码)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi,
				link_innerHTML:
					/(cloud.189.cn\/web\/share\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn\/t\/([a-zA-Z0-9_\-]{8,14}))([\s\S]{0,300}(密码|访问码|提取码)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi,
				shareCode:
					/cloud.189.cn\/web\/share\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn\/t\/([a-zA-Z0-9_\-]{8,14})/gi,
				shareCodeNeedRemoveStr:
					/cloud\.189\.cn\/t\/|cloud.189.cn\/web\/share\?code=/gi,
				checkAccessCode: /(密码|访问码|提取码).+/g,
				accessCode: /[0-9a-zA-Z]{4}/g,
				uiLinkShow: "cloud.189.cn/t/{#shareCode#} 提取码: {#accessCode#}",
				blank: "https://cloud.189.cn/t/{#shareCode#}",
			},
			hecaiyun: {
				link_innerText:
					/caiyun.139.com\/m\/i\?([a-zA-Z0-9_\-]{8,14})([\s\S]{0,20}(密码|访问码|提取码)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi,
				link_innerHTML:
					/caiyun.139.com\/m\/i\?([a-zA-Z0-9_\-]{8,14})([\s\S]{0,300}(密码|访问码|提取码)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi,
				shareCode: /caiyun\.139\.com\/m\/i\?([a-zA-Z0-9_\-]{8,14})/gi,
				shareCodeNeedRemoveStr: /caiyun\.139\.com\/m\/i\?/gi,
				checkAccessCode: /(密码|访问码|提取码).+/g,
				accessCode: /[0-9a-zA-Z]{4}/g,
				uiLinkShow: "caiyun.139.com/m/i?{#shareCode#} 提取码: {#accessCode#}",
				blank: "https://caiyun.139.com/m/i?{#shareCode#}",
			},
			aliyun: {
				link_innerText:
					/aliyundrive.com\/s\/([a-zA-Z0-9_\-]{8,14})([\s\S]{0,20}(密码|访问码|提取码)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi,
				link_innerHTML:
					/aliyundrive.com\/s\/([a-zA-Z0-9_\-]{8,14})([\s\S]{0,300}(密码|访问码|提取码)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi,
				shareCode: /aliyundrive\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
				shareCodeNotMatch: /undefined/gi, // shareCode参数中不可能存在的链接，如果shareCode存在这些，那就拒绝匹配
				shareCodeNeedRemoveStr: /aliyundrive\.com\/s\//gi,
				checkAccessCode: /(密码|访问码|提取码).+/g,
				accessCode: /[0-9a-zA-Z]{4}/g,
				acceesCodeNotMatch: /^(font)/gi,
				uiLinkShow: "aliyundrive.com/s/{#shareCode#} 提取码: {#accessCode#}",
				blank: "https://aliyundrive.com/s/{#shareCode#}",
			},
			wenshushu: {
				link_innerText:
					/(wss.ink\/f\/([a-zA-Z0-9_-]{8,14})|ws28.cn\/f\/([a-zA-Z0-9_-]{8,14})|wss1.cn\/f\/([a-zA-Z0-9_-]{8,14}))([\s\S]{0,20}(密码|访问码|提取码)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi,
				link_innerHTML:
					/(wss.ink\/f\/([a-zA-Z0-9_-]{8,14})|ws28.cn\/f\/([a-zA-Z0-9_-]{8,14})|wss1.cn\/f\/([a-zA-Z0-9_-]{8,14}))([\s\S]{0,300}(密码|访问码|提取码)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi,
				shareCode:
					/wss.ink\/f\/([a-zA-Z0-9_-]{8,14})|ws28.cn\/f\/([a-zA-Z0-9_-]{8,14})|wss1.cn\/f\/([a-zA-Z0-9_-]{8,14})/gi,
				shareCodeNeedRemoveStr: /wss.ink\/f\/|ws28.cn\/f\/|wss1.cn\/f\//gi,
				checkAccessCode: /(密码|访问码|提取码).+/g,
				accessCode: /[0-9a-zA-Z]{4}/g,
				uiLinkShow: "wss.ink/f/{#shareCode#} 提取码: {#accessCode#}",
				blank: "https://wss.ink/f/{#shareCode#}",
			},
			nainiu: {
				link_innerText:
					/cowtransfer.com\/s\/([a-zA-Z0-9_\-]{8,14})([\s\S]{0,20}(密码|访问码|提取码)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi,
				link_innerHTML:
					/cowtransfer.com\/s\/([a-zA-Z0-9_\-]{8,14})([\s\S]{0,300}(密码|访问码|提取码)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi,
				shareCode: /cowtransfer.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
				shareCodeNeedRemoveStr: /cowtransfer\.com\/s\//gi,
				checkAccessCode: /(密码|访问码|提取码).+/g,
				accessCode: /[0-9a-zA-Z]{4}/g,
				uiLinkShow: "cowtransfer.com/s/{#shareCode#} 提取码: {#accessCode#}",
				blank: "https://cowtransfer.com/s/{#shareCode#}",
			},
			_123pan: {
				link_innerText:
					/123pan.com\/s\/([a-zA-Z0-9_\-]{8,14})([\s\S]{0,20}(密码|访问码|提取码)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi,
				link_innerHTML:
					/123pan.com\/s\/([a-zA-Z0-9_\-]{8,14})([\s\S]{0,300}(密码|访问码|提取码)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi,
				shareCode: /123pan.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
				shareCodeNeedRemoveStr: /123pan.com\/s\//gi,
				checkAccessCode: /(密码|访问码|提取码).+/g,
				accessCode: /[0-9a-zA-Z]{4}/g,
				uiLinkShow: "123pan.com/s/{#shareCode#} 提取码: {#accessCode#}",
				blank: "https://123pan.com/s/{#shareCode#}",
			},
			weiyun: {
				link_innerText:
					/weiyun.com\/[0-9a-zA-Z\-_]{8,24}([\s\S]{0,20}(访问码|密码|提取码)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi,
				link_innerHTML:
					/weiyun.com\/[0-9a-zA-Z\-_]{8,24}([\s\S]{0,300}(访问码|密码|提取码)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi,
				shareCode: /weiyun.com\/([0-9a-zA-Z\-_]{8,24})/gi, // 链接参数
				shareCodeNotMatch:
					/^(ajax|file|download|ptqrshow|xy-privacy|comp|web)/gi, // shareCode参数中不可能存在的链接，如果shareCode存在这些，那就拒绝匹配
				shareCodeNeedRemoveStr: /weiyun.com\//gi, // 需要替换空的字符串，比如pan.baidu.com/s/替换为空
				checkAccessCode: /(提取码|密码|访问码).+/g, // 用来判断是否存在密码
				accessCode: /[0-9a-zA-Z]{4}/g, // 提取码（如果存在的话）
				uiLinkShow: "share.weiyun.com/{#shareCode#} 提取码: {#accessCode#}", // 用于显示的链接
				blank: "https://share.weiyun.com/{#shareCode#}",
			},
			xunlei: {
				link_innerText:
					/xunlei.com\/s\/[0-9a-zA-Z\-_]{8,30}([\s\S]{0,20}(访问码|提取码|密码|)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi, // 网盘链接
				link_innerHTML:
					/xunlei.com\/s\/[0-9a-zA-Z\-_]{8,30}([\s\S]{0,300}(访问码|提取码|密码|)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi, // 网盘链接
				shareCode: /xunlei.com\/s\/([0-9a-zA-Z\-_]{8,30})/gi, // 链接参数
				shareCodeNeedRemoveStr: /xunlei.com\/s\//gi, // 需要替换空的字符串，比如pan.baidu.com/s/替换为空
				checkAccessCode: /(提取码|密码|访问码).+/g, // 用来判断是否存在密码
				accessCode: /[0-9a-zA-Z]{4}/g, // 提取码（如果存在的话）
				uiLinkShow: "pan.xunlei.com/s/{#shareCode#} 提取码: {#accessCode#}", // 用于显示的链接
				blank: "https://pan.xunlei.com/s/{#shareCode#}",
			},
			_115pan: {
				link_innerText:
					/115.com\/s\/[0-9a-zA-Z\-_]{8,24}([\s\S]{0,20}(访问码|密码|提取码|\?password=)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi, // 网盘链接
				link_innerHTML:
					/115.com\/s\/[0-9a-zA-Z\-_]{8,24}([\s\S]{0,300}(访问码|密码|提取码|\?password=)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi, // 网盘链接
				shareCode: /115.com\/s\/([0-9a-zA-Z\-_]{8,24})/gi, // 链接参数
				shareCodeNeedRemoveStr: /115.com\/s\//gi, // 需要替换空的字符串，比如pan.baidu.com/s/替换为空
				checkAccessCode: /(提取码|密码|\?password=|访问码).+/gi, // 用来判断是否存在密码
				accessCode: /(\?password=|)([0-9a-zA-Z]{4})/i, // 提取码（如果存在的话）
				uiLinkShow: "115.com/s/{#shareCode#} 提取码: {#accessCode#}", // 用于显示的链接
				blank: "https://115.com/s/{#shareCode#}",
			},
			chengtong1: {
				link_innerText:
					/ctfile.com(\/d\/|\/f\/)[0-9a-zA-Z\-_]{8,24}([\s\S]{0,20}(访问码|密码|提取码|\?password=)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi, // 网盘链接
				link_innerHTML:
					/ctfile.com(\/d\/|\/f\/)[0-9a-zA-Z\-_]{8,24}([\s\S]{0,300}(访问码|密码|提取码|\?password=)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi, // 网盘链接
				shareCode: /ctfile.com(\/d\/|\/f\/)([0-9a-zA-Z\-_]{8,24})/gi, // 链接参数
				shareCodeNeedRemoveStr: /ctfile.com(\/d\/|\/f\/)/gi, // 需要替换空的字符串，比如pan.baidu.com/s/替换为空
				checkAccessCode: /(提取码|密码|访问码).+/gi, // 用来判断是否存在密码
				accessCode: /([0-9a-zA-Z]{4})/i, // 提取码（如果存在的话）
				uiLinkShow: "url95.ctfile.com/d/{#shareCode#} 提取码: {#accessCode#}", // 用于显示的链接
				blank: "https://url95.ctfile.com/d/{#shareCode#}",
			},
			chengtong2: {
				link_innerText:
					/(2k.us\/file\/|u062.com\/file\/|545c.com\/file\/)[0-9a-zA-Z\-_]{8,24}([\s\S]{0,20}(访问码|密码|提取码|\?password=)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi, // 网盘链接
				link_innerHTML:
					/(2k.us\/file\/|u062.com\/file\/|545c.com\/file\/)[0-9a-zA-Z\-_]{8,24}([\s\S]{0,300}(访问码|密码|提取码|\?password=)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi, // 网盘链接
				shareCode:
					/(2k.us\/file\/|u062.com\/file\/|545c.com\/file\/)([0-9a-zA-Z\-_]{8,24})/gi, // 链接参数
				shareCodeNeedRemoveStr:
					/2k.us\/file\/|u062.com\/file\/|545c.com\/file\//gi, // 需要替换空的字符串，比如pan.baidu.com/s/替换为空
				checkAccessCode: /(提取码|密码|访问码).+/gi, // 用来判断是否存在密码
				accessCode: /([0-9a-zA-Z]{4})/i, // 提取码（如果存在的话）
				uiLinkShow: "u062.com/file/{#shareCode#} 提取码: {#accessCode#}", // 用于显示的链接
				blank: "https://u062.com/file/{#shareCode#}",
			},
			kuake: {
				link_innerText:
					/quark.cn\/s\/[0-9a-zA-Z\-_]{8,24}([\s\S]{0,20}(访问码|密码|提取码|\?password=)[\s\S]{0,10}[0-9a-zA-Z]{4}|)/gi, // 网盘链接
				link_innerHTML:
					/quark.cn\/s\/[0-9a-zA-Z\-_]{8,24}([\s\S]{0,300}(访问码|密码|提取码|\?password=)[\s\S]{0,15}[0-9a-zA-Z]{4}|)/gi, // 网盘链接
				shareCode: /quark.cn\/s\/([0-9a-zA-Z\-_]{8,24})/gi, // 链接参数
				shareCodeNeedRemoveStr: /quark.cn\/s\//gi, // 需要替换空的字符串，比如pan.baidu.com/s/替换为空
				checkAccessCode: /(提取码|密码|访问码).+/gi, // 用来判断是否存在密码
				accessCode: /([0-9a-zA-Z]{4})/i, // 提取码（如果存在的话）
				uiLinkShow: "quark.cn/s/{#shareCode#} 提取码: {#accessCode#}", // 用于显示的链接
				blank: "https://pan.quark.cn/s/{#shareCode#}",
			},
			magnet: {
				link_innerText: /magnet:\?xt=urn:btih:[0-9a-fA-F]{32,40}/gi,
				link_innerHTML: /magnet:\?xt=urn:btih:[0-9a-fA-F]{32,40}/gi,
				shareCode: /magnet:\?xt=urn:btih:([0-9a-fA-F]{32,40})/gi, // 链接参数
				shareCodeNeedRemoveStr: /magnet:\?xt=urn:btih:/gi, // 需要替换空的字符串，比如pan.baidu.com/s/替换为空
				checkAccessCode: /(提取码|密码|访问码).+/gi, // 用来判断是否存在密码
				accessCode: /([0-9a-zA-Z]{4})/i, // 提取码（如果存在的话）
				uiLinkShow: "magnet:?xt=urn:btih:{#shareCode#}", // 用于显示的链接
				blank: "magnet:?xt=urn:btih:{#shareCode#}",
			},
		},
		initLinkDict() {
			// 初始化字典
			NetDisk.linkDict = new Utils.Dictionary();
			Object.keys(NetDisk.regular).forEach((keys) => {
				NetDisk.linkDict.set(keys, new Utils.Dictionary());
			});
		},
		matchPageLink(clipboardText) {
			// 检查页面是否存在链接
			let matchTextRange = GM_getValue("pageMatchRange", "innerText");
			let ignoreStr = [
				$(".whitesevPopOneFile"),
				$(".whitesevPopMoreFile"),
				$(".whitesevPop-whitesevPopSetting"),
			]; /* 忽略的文字，如：设置、直链弹窗 */
			if (matchTextRange.toLowerCase() === "all") {
				this.pageText = $("body").prop("innerText");
				ignoreStr.forEach((item) => {
					let _str_ = item.prop("innerText");
					_str_ = _str_ == null ? "" : _str_;
					this.pageText = this.pageText.replaceAll(_str_, "");
				});
				let pageHTML = $("body").prop("innerHTML");
				ignoreStr.forEach((item) => {
					let _str_ = item.prop("innerHTML");
					_str_ = _str_ == null ? "" : _str_;
					pageHTML = pageHTML.replaceAll(_str_, "");
				});
				this.pageText += pageHTML;
				this.pageText += clipboardText;
			} else {
				this.pageText = $("body").prop(matchTextRange) + clipboardText;
				if (matchTextRange.toLowerCase() === "innertext") {
					ignoreStr.forEach((item) => {
						let _str_ = item.prop("innerText");
						_str_ = _str_ == null ? "" : _str_;
						this.pageText = this.pageText.replaceAll(_str_, "");
					});
				} else {
					ignoreStr.forEach((item) => {
						let _str_ = item.prop("innerHTML");
						_str_ = _str_ == null ? "" : _str_;
						this.pageText = this.pageText.replaceAll(_str_, "");
						this.pageText = this.pageText.replaceAll(_str_, "");
					});
				}
			}
			if (!this.isInit) {
				this.matchLink = new Set();
				this.initLinkDict();
				this.isInit = true;
			}
			if (matchTextRange.toLowerCase() === "all") {
				$.each(this.regular, (netdiskName, item) => {
					window.GM_linkWorker.postMessage({
						regexp: item["link_innerText"],
						pageText: this.pageText,
						netdiskName: netdiskName,
					});
					window.GM_linkWorker.postMessage({
						regexp: item["link_innerHTML"],
						pageText: this.pageText,
						netdiskName: netdiskName,
					});
				});
			} else {
				$.each(this.regular, (netdiskName, item) => {
					window.GM_linkWorker.postMessage({
						regexp: item[`link_${matchTextRange}`],
						pageText: this.pageText,
						netdiskName: netdiskName,
					});
				});
			}
		},
		handleLink(netDiskName, url) {
			// 处理链接，将匹配到的链接转为参数和密码存入字典中
			let currentDict = this.linkDict.get(netDiskName);
			let shareCode = this.handleShareCode(netDiskName, url);
			if (shareCode == "" || shareCode == null) {
				return null;
			}
			let accessCode = this.handleAccessCode(netDiskName, url);
			if (currentDict.has(shareCode)) {
				let dictAccessCode = this.linkDict.get(netDiskName).get(shareCode);
				if (dictAccessCode == "" && accessCode != "" && accessCode != null) {
					currentDict.set(shareCode, accessCode);
					UI.view.changeLinkView(netDiskName, shareCode, accessCode);
					console.log(
						`设置密码 ${netDiskName}: ${shareCode}  ===> ${accessCode}`
					);
				}
			} else {
				this.hasMatchLink = true;
				currentDict.set(shareCode, accessCode);
				UI.matchIcon.add(netDiskName);
				UI.view.addLinkView(netDiskName, shareCode, accessCode);
				console.log(
					`%c${netDiskName}%c ${shareCode} ===> ${accessCode}`,
					"background:#24272A; color:#ffffff; padding: 0px 10px;",
					"color:#000000"
				);
			}
		},
		handleShareCode(netDiskName, url) {
			// 处理shareCode
			let shareCodeMatch = url.match(this.regular[netDiskName].shareCode);
			if (shareCodeMatch == null) {
				return "";
			}
			if (shareCodeMatch.length === 0) {
				return "";
			}
			let shareCode = shareCodeMatch[0].replace(
				this.regular[netDiskName].shareCodeNeedRemoveStr,
				""
			);
			let shareCodeNotMatch = this.regular[netDiskName].shareCodeNotMatch;
			if (shareCodeNotMatch != null && shareCode.match(shareCodeNotMatch)) {
				console.log("不可能的shareCode =>", shareCode);
				return "";
			}
			shareCode = decodeURIComponent(shareCode); // %E7%BD%91%E7%9B%98 => 网盘
			return shareCode;
		},
		handleAccessCode(netDiskName, url) {
			// 处理accessCode
			let accessCode = "";
			let accessCodeMatch = url.match(
				this.regular[netDiskName].checkAccessCode
			);
			if (accessCodeMatch) {
				accessCode = accessCodeMatch[0].match(
					this.regular[netDiskName].accessCode
				);
				if (accessCode == null) {
					return "";
				}
				$.each(accessCode, (i, v) => {
					if (!v.match(this.regular[netDiskName]["accessCodeNotMatch"])) {
						return accessCode[i];
					}
				});
				accessCode = accessCode[0];
			}
			return accessCode;
		},
		handleLinkShow(netDiskName, shareCode, accessCode) {
			// 处理显示在弹窗的网盘链接
			let netdisk_regular = NetDisk.regular[netDiskName];
			let uiLink = netdisk_regular["uiLinkShow"].replace(
				/{#shareCode#}/gi,
				shareCode
			);
			if (accessCode) {
				uiLink = uiLink.replace(/{#accessCode#}/g, accessCode);
			} else {
				uiLink = uiLink.replace(/( |提取码:|{#accessCode#}|\?pwd=)/g, "");
			}
			return uiLink;
		},
		getClipboardText() {
			/* 获取剪贴板文本 */
			return new Promise((res) => {
				navigator.permissions
					.query({
						name: "clipboard-read",
					})
					.then((result) => {
						const hasFocus = document.hasFocus(); //这个是重点，可判断是否为当前dom页面
						if (
							hasFocus &&
							(result.state === "granted" || result.state === "prompt")
						) {
							const clipboard = navigator.clipboard.readText();
							clipboard.then((clipText) => {
								res(clipText);
							});
						} else {
							res("");
						}
					});
			});
		},
	};

	const NetDiskLinkParse = {
		// 网盘直链解析
		netdisk: {
			baidu: {
				default(shareCode, accessCode) {
					let bdurl = GM_getValue("bdurl");
					let paramSurl = GM_getValue("paramSurl");
					let paramPwd = GM_getValue("paramPwd");
					let paramKey = GM_getValue("paramKey");
					let paramWebSiteKey = GM_getValue("paramWebSiteKey");
					let baidu_website_key_enable = GM_getValue(
						"baidu-website-key-enable"
					);

					if (!bdurl) {
						Qmsg.error("请完善配置 网址-Url", {
							html: true,
						});
						return null;
					}
					if (!paramSurl) {
						Qmsg.error("请完善配置 参数-Key", {
							html: true,
						});
						return null;
					}
					if (!paramPwd) {
						Qmsg.error("请完善配置 密码-Key", {
							html: true,
						});
						return null;
					}
					if (!paramKey) {
						Qmsg.error("请完善配置 密钥-Key", {
							html: true,
						});
						return null;
					}
					if (baidu_website_key_enable && !paramWebSiteKey) {
						Qmsg.error("请完善配置 密钥-Value", {
							html: true,
						});
						return null;
					}
					var temp = document.createElement("form");
					var list = {}; //表单数据
					list[paramSurl] = shareCode;
					list[paramPwd] = accessCode;
					if (baidu_website_key_enable) {
						list[paramKey] = paramWebSiteKey;
					}
					temp.action = bdurl; //解析网址
					temp.method = "post";
					temp.style.display = "none";
					temp.target = "_blank";
					for (var x in list) {
						var opt = document.createElement("textarea");
						opt.name = x;
						opt.value = list[x]; // alert(opt.name)
						temp.appendChild(opt);
					}
					document.body.appendChild(temp);
					temp.submit();
				},
			},
			lanzou: {
				// 流程：判断是否是多文件
				// 单文件 => 请求https://www.lanzoux.com/{shareToken} 判断链接类型和是否能正常获取
				//       => 请求https://www.lanzoux.com/tp/{shareToken} 获取文件sign
				//       => 请求https://www.lanzoux.com/ajaxm.php 获取下载参数，下载参数例如：https://develope.lanzoug.com/file/?xxxxxxxxx
				// 多文件 => 先请求https://www.lanzoux.com/{shareToken} 获取文件sign => 请求https://www.lanzoux.com/filemoreajax.php 获取json格式的文件参数，参数内容如{"info":"success","text":[{"duan":"xx","icon":"","id":"".....},{},{}]}
				url: {
					default: (replaced, shareCode) => {
						return NetDisk.regular.lanzou.blank
							.replace("/s/", replaced)
							.replace(/{#shareCode#}/g, shareCode);
					},
					tp: (shareCode) => {
						return NetDisk.regular.lanzou.blank
							.replace("/s/", "/tp/")
							.replace(/{#shareCode#}/gi, shareCode);
					},
					uiLink: (shareCode, accessCode) => {
						return NetDisk.regular.lanzou.uiLinkShow
							.replace(/{#shareCode#}/gi, shareCode)
							.replace(/{#accessCode#}/gi, accessCode);
					},
				},
				regexp: {
					unicode: {
						match: /[%\u4e00-\u9fa5]+/g, // 判断该链接是否是中文
						tip: "中文链接",
						isUnicode: false,
					},
					noFile: {
						match: /div>来晚啦...文件取消分享了<\/div>/g, //蓝奏文件取消分享
						tip: "来晚啦...文件取消分享了",
					},
					noExists: {
						match: /div>文件不存在，或已删除<\/div>/g, //蓝奏文件链接错误
						tip: "文件不存在，或已删除",
					},
					moreFile: {
						match: /<span id=\"filemore\" onclick=\"more\(\);\">/g, // 蓝奏多文件
					},
					sign: {
						match: /var[\s]*(posign|postsign)[\s]*=[\s]*'(.+?)';/, //蓝奏设置了密码的单文件请求需要的sign值;
					},
					fileName: {
						match: /<title>(.*)<\/title>/, //蓝奏文件名
					},
					size: {
						match: /<span class=\"mtt\">\((.*)\)<\/span>/, //蓝奏文件大小
					},
					loadDown: {
						match:
							/var[\s]*(loaddown|oreferr|spototo|domianload)[\s]*=[\s]*'(.+?)';/i,
					},
				},
				http: {
					UserAgent:
						"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36 Edg/91.0.864.59",
					ContentTypeJson: "application/json; charset=UTF-8",
					ContentTypeForm: "application/x-www-form-urlencoded; charset=UTF-8",
				},
				default(shareCode, accessCode) {
					this.regexp.unicode.isUnicode = shareCode.match(
						this.regexp.unicode.match
					)
						? true
						: false;
					this.replaced = this.regexp.unicode.isUnicode ? "/u/" : "/";

					this.getFileLink(shareCode, accessCode);
				},
				async getFileLink(
					shareCode,
					accessCode,
					getShareCodeByPageAgain = false
				) {
					// 获取文件下载链接
					let that = this;
					let _url_ = this.url.default(this.replaced, shareCode);
					console.log(_url_);
					GM_xmlhttpRequest({
						url: _url_,
						timeout: 5000,
						method: "GET",
						headers: {
							Accept: "*/*",
							"user-agent": that.http.UserAgent,
							referer: window.location.origin,
						},
						onload: function (r) {
							if (r.status == 200 && r.readyState == 4) {
								if (that.checkPageCode(r)) {
									if (that.isMoreFile(r)) {
										console.log("该链接为多文件");
										that.getMoreFile(r, shareCode, accessCode);
									} else {
										console.log("该链接为单文件");
										console.log(r);
										if (getShareCodeByPageAgain) {
											let shareCodeNewMatch = r.responseText.match(
												/var[\s]*link[\s]*=[\s]*\'tp\/(.+?)\';/i
											);
											shareCode =
												shareCodeNewMatch[shareCodeNewMatch.length - 1];
											console.log("新参数 => " + shareCode);
										}
										that.getLinkByTp(shareCode, accessCode);
									}
								}
							} else {
								console.log(r);
								Qmsg.error("请求失败，请重试", {
									html: true,
								});
							}
						},
						onerror: function () {
							Qmsg.error("网络异常", {
								html: true,
							});
						},
						onabort: function () {
							Qmsg.error("请求意外中止", {
								html: true,
							});
						},
						ontimeout: function () {
							Qmsg.error("请求超时", {
								html: true,
							});
						},
					});
				},
				getRedirectFinalUrl(url) {
					let that = this;
					Qmsg.success("获取重定向后的直链", {
						html: true,
					});
					console.log("开始获取重定向后的直链");
					return new Promise((res) => {
						GM_xmlhttpRequest({
							url: url,
							timeout: 5000,
							method: "HEAD",
							headers: {
								Accept: "*/*",
								"user-agent": Utils.getRandomPCUA(),
								referer: window.location.origin,
							},
							onload: function () {
								res(this.finalUrl);
							},
							onerror: function () {
								res(url);
							},
							onabort: function () {
								res(url);
							},
							ontimeout: function () {
								res(url);
							},
						});
					});
				},
				checkPageCode(resp) {
					// 页面检查，看看是否存在文件失效情况
					let pageText = resp.responseText;
					if (pageText.match(this.regexp.noFile.match)) {
						Qmsg.error(this.regexp.noFile.tip, {
							html: true,
						});
						return false;
					}
					if (pageText.match(this.regexp.noExists.match)) {
						Qmsg.error(this.regexp.noExists.tip, {
							html: true,
						});
						return false;
					}
					return true;
				},
				isMoreFile(resp) {
					// 判断是否是多文件的链接
					let pageText = resp.responseText;
					if (pageText.match(this.regexp.moreFile.match)) {
						console.log("该链接为多文件");
						return true;
					}
					return false;
				},
				getLinkByTp(shareCode, accessCode) {
					// 访问蓝奏tp获取sign
					let _url_ = this.url.tp(shareCode);
					let that = this;
					GM_xmlhttpRequest({
						url: _url_,
						timeout: 5000,
						method: "GET",
						headers: {
							Accept: "*/*",
							"user-agent": that.http.UserAgent,
							referer: window.location.origin,
						},
						onload: function (r) {
							console.log("by_tp ↓");
							console.log(r);
							if (r.status == 200 && r.readyState == 4) {
								that.getLink(r, shareCode, accessCode);
							} else {
								Qmsg.error("请求失败，请重试", {
									html: true,
								});
							}
						},
						onerror: function () {
							Qmsg.error("网络异常", {
								html: true,
							});
						},
						onabort: function () {
							Qmsg.error("请求意外中止", {
								html: true,
							});
						},
						ontimeout: function () {
							Qmsg.error("请求超时", {
								html: true,
							});
						},
					});
				},
				async getLink(resp, shareCode, accessCode) {
					// 获取链接
					let that = this;
					let pageText = resp.responseText;
					if (pageText == null) {
						console.log("shareCode错误，重新从页面中获取");
						this.getFileLink(shareCode, accessCode, true);
						return;
					}
					let sign = pageText.match(this.regexp.sign.match);
					let postData_p = "";
					let postData_sign = "";
					let fileNameMatch = pageText.match(this.regexp.fileName.match);
					let fileName = fileNameMatch ? fileNameMatch[1].trim() : "";
					let fileSizeMatch = pageText.match(this.regexp.size.match);
					let fileSize = fileSizeMatch ? fileSizeMatch[1].trim() : "";
					if (sign) {
						postData_sign = sign[sign.length - 1];
						console.log("获取Sign:" + postData_sign);
						if (accessCode) {
							console.log("传入参数=>有密码");
							postData_p = accessCode;
						} else {
							console.log("传入参数=>无密码");
						}
						GM_xmlhttpRequest({
							url: "https://www.lanzoux.com/ajaxm.php",
							timeout: 5000,
							method: "POST",
							responseType: "json",
							headers: {
								"Content-Type": that.http.ContentTypeForm,
								"user-agent": that.http.UserAgent,
								referer: window.location.origin,
							},
							data:
								"action=downprocess&sign=" + postData_sign + "&p=" + postData_p,
							onload: async (r) => {
								console.log(r);
								if (r.status == 200 && r.readyState == 4) {
									let json_data = JSON.parse(r.responseText);
									let downloadUrl =
										json_data["dom"] + "/file/" + json_data["url"];
									let zt = json_data["zt"];
									if ("密码不正确".indexOf(json_data["inf"]) != -1) {
										Qmsg.error("密码不正确!", {
											html: true,
										});
										pops.prompt({
											title: {
												text: "密码错误",
												placeholder: "请重新输入密码",
											},
											btn: {
												reverse: true,
												position: "end",
												cancel: {
													text: "取消",
												},
												ok: {
													type: "primary",
													callback: (event) => {
														let inputPwd = event.text.replace(/ /g, "");
														if (inputPwd != "") {
															let uiLink = that.url.uiLink(shareCode, inputPwd);
															$(
																`.netdisk-url a[data-netdisk=lanzou][data-sharecode=${shareCode}]`
															).attr("data-accesscode", inputPwd);
															$(
																`.netdisk-url a[data-netdisk=lanzou][data-sharecode=${shareCode}]`
															).html(uiLink);
														}
														console.log("重新输入的密码：" + inputPwd);
														that.getLink(resp, shareCode, inputPwd);
														event.close();
													},
												},
											},
											content: {
												focus: true,
											},
											width: "350px",
											height: "160px",
											mask: true,
											animation: GM_getValue(
												"popsAnimation",
												"pops-anim-fadein-zoom"
											),
											drag: GM_getValue("pcDrag", false),
										});
									} else {
										fileName = json_data["inf"] ? json_data["inf"] : fileName;
										downloadUrl = await that.getRedirectFinalUrl(downloadUrl);
										console.log(downloadUrl);
										downloadUrl = filterScheme.handleUrl(
											"lanzou-static-scheme-enable",
											"lanzou-static-scheme-forward",
											downloadUrl
										);
										UI.staticView.oneFile(
											"蓝奏云单文件直链",
											fileName,
											fileSize,
											downloadUrl
										);
									}
								} else {
									Qmsg.error("请求失败，请重试", {
										html: true,
									});
								}
							},
							onerror: () => {
								Qmsg.error("网络异常", {
									html: true,
								});
							},
							onabort: function () {
								Qmsg.error("请求意外中止", {
									html: true,
								});
							},
							ontimeout: function () {
								Qmsg.error("请求超时", {
									html: true,
								});
							},
						});
					} else {
						let loaddown = pageText.match(this.regexp.loadDown.match);
						if (loaddown == null) {
							loaddown = pageText.match(/cppat[\s]*\+[\s]*'(.+?)'/i);
						}
						if (loaddown != null) {
							let downloadUrl =
								"https://develope.lanzoug.com/file/" +
								loaddown[loaddown.length - 1];
							console.log(fileName, fileSize, downloadUrl);
							downloadUrl = await that.getRedirectFinalUrl(downloadUrl);
							console.log(downloadUrl);
							downloadUrl = filterScheme.handleUrl(
								"lanzou-static-scheme-enable",
								"lanzou-static-scheme-forward",
								downloadUrl
							);
							UI.staticView.oneFile(
								"蓝奏云单文件直链",
								fileName,
								fileSize,
								downloadUrl
							);
						} else {
							Qmsg.error("获取sign失败", {
								html: true,
							});
						}
					}
				},
				getMoreFile(resp, shareCode, accessCode) {
					// 多文件获取
					let _url_ = this.url.default(this.replaced, shareCode);
					let that = this;
					GM_xmlhttpRequest({
						url: _url_,
						timeout: 5000,
						method: "GET",
						headers: {
							Accept: "*/*",
							"user-agent": that.http.UserAgent,
							referer: window.location.origin,
						},
						onload: function (r) {
							console.log(r);
							if (r.status == 200 && r.readyState == 4) {
								let pageText = r.responseText;
								let fid = pageText
									.match(/\'fid\':(.+?),/)[1]
									.replaceAll("'", "");
								let uid = pageText
									.match(/\'uid\':(.+?),/)[1]
									.replaceAll("'", "");
								let pgs = 1;
								let t_name = pageText.match(/\'t\':(.+?),/)[1];
								let t_rexp = new RegExp(
									t_name + "[\\s]*=[\\s]*('|\")(.+?)('|\");"
								);
								let t = pageText.match(t_rexp)[2];
								let k_name = pageText.match(/\'k\':(.+?),/)[1];
								let k_rexp = new RegExp(
									k_name + "[\\s]*=[\\s]*('|\")(.+?)('|\");"
								);
								let k = pageText.match(k_rexp)[2];
								let lx = shareCode.match(that.regexp.unicode.match) ? 1 : 2;
								let postData = `lx=${lx}&fid=${fid}&uid=${uid}&pg=${pgs}&rep=0&t=${t}&k=${k}&up=1&ls=1&pwd=${accessCode}`;
								console.log("多文件请求参数：" + postData);
								GM_xmlhttpRequest({
									url: "https://www.lanzoux.com/filemoreajax.php",
									timeout: 5000,
									method: "POST",
									responseType: "json",
									headers: {
										"Content-Type": that.http.ContentTypeForm,
										"user-agent": that.http.UserAgent,
										referer: window.location.origin,
									},
									data: postData,
									onload: function (resp) {
										console.log(resp);
										let json_data = JSON.parse(resp.responseText);
										let zt = json_data["zt"];
										let info = json_data["info"];
										if (zt == 4) {
											Qmsg.error(info, {
												html: true,
											});
										} else if (zt == 1) {
											Qmsg.success("获取文件夹成功，解析文件直链中...", {
												html: true,
											});
											var folder = json_data["text"];
											var folderContent = "";
											var folderContextArray = [];
											console.log("本链接一共" + folder.length + "个文件");
											Promise.all(
												Array.from(folder).map(async (item, index) => {
													let _shareCode_ = item.id;
													let fileName = item.name_all;
													let fileSize = item.size;
													console.log(`第${index + 1}个开始解析`);
													let content = await that.parseMoreFile(
														_shareCode_,
														fileName,
														fileSize
													);
													console.log(`第${index + 1}个解析完毕`);
													folderContextArray = folderContextArray.concat({
														index: index,
														text: content,
													});
												})
											).then(() => {
												console.log("解析完毕,排序,弹出弹窗");
												folderContextArray.sort(
													Utils.sortListByProperty((item) => {
														return item["index"];
													}, false)
												);
												folderContextArray.forEach((item) => {
													folderContent = folderContent + item["text"];
												});
												UI.staticView.moreFile(
													"蓝奏云多文件直链",
													folderContent
												);
											});
										} else if ("密码不正确".indexOf(info) != -1) {
											Qmsg.error("密码不正确!", {
												html: true,
											});
											pops.prompt({
												title: {
													text: "密码错误",
													placeholder: "请重新输入密码",
												},
												btn: {
													reverse: true,
													position: "end",
													cancel: {
														text: "取消",
													},
													ok: {
														type: "primary",
														callback: (event) => {
															let inputPwd = event.text.replace(/ /g, "");
															if (inputPwd != "") {
																let uiLink = that.url.uiLink(
																	shareCode,
																	inputPwd
																);
																$(
																	`.netdisk-url a[data-netdisk=lanzou][data-sharecode=${shareCode}]`
																).attr("data-accesscode", inputPwd);
																$(
																	`.netdisk-url a[data-netdisk=lanzou][data-sharecode=${shareCode}]`
																).html(uiLink);
															}
															console.log("重新输入的密码：" + inputPwd);
															that.getMoreFile(resp, shareCode, inputPwd);
															event.close();
														},
													},
												},
												content: {
													focus: true,
												},
												width: "350px",
												height: "160px",
												mask: true,
												animation: GM_getValue(
													"popsAnimation",
													"pops-anim-fadein-zoom"
												),
												drag: GM_getValue("pcDrag", false),
											});
										} else if ("没有了".indexOf(info) != -1) {
											Qmsg.error("没有文件了", {
												html: true,
											});
										} else {
											Qmsg.error("未知错误", {
												html: true,
											});
										}
									},
									onerror: function () {
										Qmsg.error("网络异常", {
											html: true,
										});
									},
									onabort: function () {
										Qmsg.error("请求意外中止", {
											html: true,
										});
									},
									ontimeout: function () {
										Qmsg.error("请求超时", {
											html: true,
										});
									},
								});
							} else {
								Qmsg.error("请求失败，请重试", {
									html: true,
								});
							}
						},
						onerror: function () {
							Qmsg.error("网络异常", {
								html: true,
							});
						},
						onabort: function () {
							Qmsg.error("请求意外中止", {
								html: true,
							});
						},
						ontimeout: function () {
							Qmsg.error("请求超时", {
								html: true,
							});
						},
					});
				},
				parseMoreFile(shareCode, fileName, fileSize) {
					// 根据获取到的json中多文件链接来获取单文件直链
					let ret_content = "";
					let that = this;
					return new Promise((res) => {
						GM_xmlhttpRequest({
							url: that.url.tp(shareCode),
							timeout: 5000,
							method: "GET",
							headers: {
								Accept: "*/*",
								"user-agent": that.http.UserAgent,
								referer: window.location.origin,
							},
							onload: async function (r) {
								let pageText = r.responseText;
								let loaddown = pageText.match(
									NetDiskLinkParse.netdisk.lanzou.regexp.loadDown.match
								);
								if (loaddown == null) {
									loaddown = pageText.match(/cppat[\s]*\+[\s]*'(.+?)'/i);
								}
								let submit_url = "javascript:;";
								let downloadUrl = "";
								if (downloadUrl != null) {
									let needRedirectDownloadUrl = `https://develope.lanzoug.com/file/${
										loaddown[loaddown.length - 1]
									}`;
									downloadUrl = await that.getRedirectFinalUrl(
										needRedirectDownloadUrl
									);
									submit_url = filterScheme.handleUrl(
										"lanzou-static-scheme-enable",
										"lanzou-static-scheme-forward",
										downloadUrl
									);
								} else {
									fileSize = "解析直链失败";
								}

								ret_content = `
								<div class="netdisk-static-body">
									<div class="netdisk-static-filename">
										<a target="_blank" href="${submit_url}">${fileName}</a>
									</div>
									<div class="netdisk-static-filesize">${fileSize}</div>
								</div>
								`;
								res(ret_content);
							},
							onerror: function (r) {
								console.log(r);
								ret_content = `
								<div class="netdisk-static-body">
									<div class="netdisk-static-filename">
										<a href="javascript:;">${fileName}</a>
									</div>
									<div class="netdisk-static-filesize">解析失败，请求异常</div>
								</div>`;
								res(ret_content);
							},
							onabort: function () {
								console.log(r);
								ret_content = `
								<div class="netdisk-static-body">
									<div class="netdisk-static-filename">
										<a href="javascript:;">${fileName}</a>
									</div>
									<div class="netdisk-static-filesize">解析失败，请求中止</div>
								</div>`;
								res(ret_content);
							},
							ontimeout: function () {
								console.log(r);
								ret_content = `
								<div class="netdisk-static-body">
									<div class="netdisk-static-filename">
										<a href="javascript:;">${fileName}</a>
									</div>
									<div class="netdisk-static-filesize">解析失败，请求超时</div>
								</div>`;
								res(ret_content);
							},
						});
					});
				},
			},
			tianyiyun: {
				code: {
					ShareAuditNotPass: "抱歉，该内容审核不通过",
					FileNotFound: "抱歉，文件不存在",
					ShareExpiredError: "抱歉，您访问的页面地址有误，或者该页面不存在",
					ShareAuditWaiting: "抱歉，该链接处于审核中",
					ShareInfoNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在",
					FileTooLarge: "抱歉，文件太大，不支持下载",
					InvalidSessionKey:
						"天翼云Session已失效，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC才能进行登录)",
				},
				default(shareCode, accessCode) {
					console.log(shareCode, accessCode);
					this.shareCode = shareCode;
					this.accessCode = accessCode;
					this.getDownloadParams();
				},
				getDownloadParams() {
					let that = this;
					let post_url =
						"https://cloud.189.cn/api/open/share/getShareInfoByCodeV2.action";
					let post_data = "shareCode=" + that.shareCode;

					GM_xmlhttpRequest({
						url: post_url,
						timeout: 5000,
						method: "POST",
						data: post_data,
						headers: {
							accept: "application/json;charset=UTF-8",
							"content-type": "application/x-www-form-urlencoded",
							"user-agent":
								"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Mobile Safari/537.36 Edg/94.0.992.38",
							referer: "https://h5.cloud.189.cn/",
							origin: "https://h5.cloud.189.cn",
						},
						onload: function (r) {
							console.log(r);
							let json_data = JSON.parse(r.responseText);
							if (r.status == 200 && json_data.res_code == 0) {
								console.log(json_data);
								that.isFolder = json_data.isFolder;
								if (json_data["needAccessCode"] && !that.accessCode) {
									Qmsg.error("密码不正确!", {
										html: true,
									});
									pops.prompt({
										title: {
											text: "密码错误",
											placeholder: "请重新输入密码",
										},
										btn: {
											reverse: true,
											cancel: {
												text: "取消",
											},
											ok: {
												callback: (event) => {
													let inputPwd = this.getText().replace(/ /g, "");
													if (inputPwd != "") {
														let uiLink = NetDisk.regular.tianyiyun.uiLinkShow
															.replace(/{#shareCode#}/gi, that.shareCode)
															.replace(/{#accessCode#}/gi, inputPwd);
														$(
															`.netdisk-url a[data-netdisk=tianyiyun][data-sharecode=${that.shareCode}]`
														).attr("data-accesscode", inputPwd);
														$(
															`.netdisk-url a[data-netdisk=tianyiyun][data-sharecode=${that.shareCode}]`
														).html(uiLink);
													}
													console.log("重新输入的密码：" + inputPwd);
													that.accessCode = inputPwd;
													that.getDownloadParams();
													event.close();
												},
											},
										},
										content: {
											focus: true,
										},
										width: "350px",
										height: "160px",
										mask: true,
										animation: GM_getValue(
											"popsAnimation",
											"pops-anim-fadein-zoom"
										),
										drag: GM_getValue("pcDrag", false),
									});

									return;
								}
								if (that.isFolder) {
									console.log("该链接是文件夹");
									if (that.accessCode) {
										GM_setClipboard(that.accessCode);
										Qmsg.info("提取码已复制", {
											html: true,
										});
									}
									window.open(
										"https://cloud.189.cn/t/" + that.shareCode,
										"_blank"
									);
									return;
								}

								that.fileId = json_data.fileId;
								that.fileName = json_data.fileName;
								that.fileSize = json_data.fileSize;
								that.fileType = json_data.fileType;
								that.shareId = json_data.shareId;
								if (!that.shareId) {
									that.getShareId();
								} else {
									that.getDownloadUrl();
								}
							} else {
								if (that.code.hasOwnProperty(json_data["res_code"])) {
									Qmsg.error(that.code[json_data["res_code"]], {
										html: true,
									});
								} else {
									Qmsg.error("获取FileId失败", {
										html: true,
									});
								}
							}
						},
						onerror: function (r) {
							console.log(r);
							Qmsg.error("网络异常", {
								html: true,
							});
						},
						onabort: function () {
							Qmsg.error("请求意外中止", {
								html: true,
							});
						},
						ontimeout: function () {
							Qmsg.error("请求超时", {
								html: true,
							});
						},
					});
				},
				getCookie() {
					// 暂不需要获取cookie
					let cookie = "";
					return cookie;
				},
				getShareId() {
					let that = this;
					let post_url =
						"https://cloud.189.cn/api/open/share/checkAccessCode.action?noCache=0.44175365295952296&shareCode=" +
						that.shareCode +
						"&accessCode=" +
						that.accessCode;
					GM_xmlhttpRequest({
						url: post_url,
						timeout: 5000,
						headers: {
							accept: "application/json;charset=UTF-8",
							"cache-control": "no-cache",
							"user-agent":
								"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38",
							referer: "https://cloud.189.cn/web/share?code=" + that.shareCode,
						},
						onload: (r) => {
							console.log(r);
							let json_data = JSON.parse(r.responseText);
							if (r.status == 200 && json_data["res_message"] == "成功") {
								that.shareId = json_data["shareId"];
								that.getDownloadUrl();
							} else {
								Qmsg.error("获取shareId失败", {
									html: true,
								});
								console.log(json_data);
							}
						},
						onerror: (r) => {
							console.error(r);
							Qmsg.error("网络异常", {
								html: true,
							});
						},
						onabort: function () {
							Qmsg.error("请求意外中止", {
								html: true,
							});
						},
						ontimeout: function () {
							Qmsg.error("请求超时", {
								html: true,
							});
						},
					});
				},
				getDownloadUrl() {
					let that = this;
					let cookie_ = that.getCookie();
					let post_url =
						"https://cloud.189.cn/api/open/file/getFileDownloadUrl.action?noCache=0.8242175875972797&fileId=" +
						that.fileId +
						"&dt=1&shareId=" +
						that.shareId;
					GM_xmlhttpRequest({
						url: post_url,
						timeout: 5000,
						method: "GET",
						headers: {
							accept: "application/json;charset=UTF-8",
							"cache-control": "no-cache",
							"user-agent":
								"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38",
							referer: "https://cloud.189.cn/web/share?code=" + that.shareCode,
						},
						cookie: cookie_,
						onload: function (r) {
							let json_data = JSON.parse(r.responseText);
							console.log(json_data);
							if (r.status == 200 && json_data.res_code == 0) {
								let download_url = json_data.fileDownloadUrl;
								download_url = filterScheme.handleUrl(
									"tianyiyun-scheme-enable",
									"tianyiyun-scheme-forward",
									download_url
								);
								UI.staticView.oneFile(
									"天翼云单文件直链",
									that.fileName,
									Utils.formatByteToSize(that.fileSize),
									download_url
								);
							} else if (
								"InvalidSessionKey" === json_data["res_code"] ||
								"InvalidSessionKey" === json_data["errorCode"]
							) {
								var loginPops = pops.confirm({
									title: {
										position: "center",
										text: "天翼云",
									},
									content: {
										text: that.code[json_data.errorCode],
										html: false,
									},
									btn: {
										reverse: true,
										position: "end",
										ok: {
											text: "前往",
											enable: true,
											callback: (event) => {
												pops.iframe({
													title: {
														text: "天翼云登录",
													},
													loading: {
														text: "加载中...",
													},
													btn: {
														close: {
															callback: () => {
																loginPops?.close();
																var waitRegister = pops.loading({
																	parent: document.body,
																	only: false,
																	content: {
																		text: "等待5s，登录的账号注册Cookies",
																	},
																	animation: GM_getValue(
																		"popsAnimation",
																		"pops-anim-fadein-zoom"
																	),
																});
																var registerTianYiYunCookies = GM_openInTab(
																	"https://cloud.189.cn/web/main/",
																	{ active: false, setParent: true }
																);
																setTimeout(() => {
																	registerTianYiYunCookies?.close();
																	waitRegister?.close();
																	that.getDownloadUrl();
																}, 5000);
															},
														},
													},
													url: "https://cloud.189.cn/api/portal/loginUrl.action?redirectURL=https://cloud.189.cn/web/Fredirect.html",
													height: pops.isPhone() ? "400px" : "400px",
													width: pops.isPhone() ? "350px" : "350px",
													drag: GM_getValue("pcDrag", false),
													animation: GM_getValue(
														"popsAnimation",
														"pops-anim-fadein-zoom"
													),
													sandbox: true,
												});
											},
										},
									},
									animation: GM_getValue(
										"popsAnimation",
										"pops-anim-fadein-zoom"
									),
									mask: true,
									drag: GM_getValue("pcDrag", false),
									height: "180px",
									width: pops.isPhone() ? "350px" : "450px",
								});
							} else if (that.code.hasOwnProperty(json_data["res_code"])) {
								Qmsg.error(that.code[json_data["res_code"]], {
									html: true,
								});
							} else {
								Qmsg.error("请求失败", {
									html: true,
								});
								console.log(r.responseText);
							}
						},
						onerror: function (r) {
							console.log(r);
							Qmsg.error("网络异常", {
								html: true,
							});
						},
						onabort: function () {
							Qmsg.error("请求意外中止", {
								html: true,
							});
						},
						ontimeout: function () {
							Qmsg.error("请求超时", {
								html: true,
							});
						},
					});
				},
			},
			hecaiyun: {
				// 不行
				default(shareCode, accessCode) {
					console.log(shareCode, accessCode);
				},
			},
			aliyun: {
				// 不行
				default(shareCode, accessCode) {
					console.log(shareCode, accessCode);
				},
			},
			wenshushu: {
				code: {
					1004: "no token",
					1013: "糟糕，此任务已过期销毁，下次要记得续期",
					1088: "糟糕，您访问的页面不存在",
				},
				default(shareCode, accessCode) {
					this.tid = shareCode;
					Qmsg.info("正在请求直链中...", {
						html: true,
					});
					this.getWss();
				},
				getWss() {
					let that = this;
					let url = "https://www.wenshushu.cn/ap/login/anonymous";
					let post_data = {
						dev_info: "{}",
					};
					GM_xmlhttpRequest({
						url: url,
						timeout: 5000,
						method: "POST",
						dataType: "json",
						responseType: "json",
						data: JSON.stringify(post_data),
						headers: {
							accept: "application/json, text/plain, */*",
							"user-agent":
								"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36 Edg/91.0.864.59",
							referer: window.location.origin,
						},
						onload: function (r) {
							let json_data = JSON.parse(r.responseText);
							if (r.status == 200 && json_data["code"] == 0) {
								that.token = json_data["data"]["token"];
								that.getPid();
							} else if (json_data["code"] in that.code) {
								Qmsg.error(that.code[json_data["code"]], {
									html: true,
								});
							} else {
								Qmsg.error("获取wss失败", {
									html: true,
								});
							}
						},
						onerror: function () {
							Qmsg.error("网络异常");
						},
						onabort: function () {
							Qmsg.error("请求意外中止", {
								html: true,
							});
						},
						ontimeout: function () {
							Qmsg.error("请求超时", {
								html: true,
							});
						},
					});
				},
				getPid() {
					let that = this;
					let post_data = {
						tid: that.tid,
						password: "",
						ufileid: "",
					};
					GM_xmlhttpRequest({
						url: "https://www.wenshushu.cn/ap/task/mgrtask",
						timeout: 5000,
						method: "POST",
						dataType: "json",
						responseType: "json",
						data: JSON.stringify(post_data),
						headers: {
							accept: "application/json, text/plain, */*",
							"user-agent":
								"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36 Edg/91.0.864.59",
							referer: window.location.origin,
							"x-token": that.token,
						},
						onload: function (r) {
							let json_data = JSON.parse(r.responseText);
							if (r.status == 200 && json_data["code"] == 0) {
								let bid = json_data["data"]["boxid"];
								let pid = json_data["data"]["ufileid"];
								that.getFileNList(bid, pid);
							} else if (json_data["code"] in that.code) {
								Qmsg.error(that.code[json_data["code"]], {
									html: true,
								});
							} else {
								Qmsg.error("获取pid失败", {
									html: true,
								});
							}
						},
						onerror: function () {
							Qmsg.error("网络异常", {
								html: true,
							});
						},
						onabort: function () {
							Qmsg.error("请求意外中止", {
								html: true,
							});
						},
						ontimeout: function () {
							Qmsg.error("请求超时", {
								html: true,
							});
						},
					});
				},
				getFileNList(bid, pid) {
					let that = this;
					let url = "https://www.wenshushu.cn/ap/ufile/nlist";
					let post_data = {
						start: 0,
						sort: {
							name: "asc",
						},
						bid: bid,
						pid: pid,
						options: {
							uploader: "true",
						},
						size: 50,
					};
					GM_xmlhttpRequest({
						url: url,
						timeout: 5000,
						method: "POST",
						dataType: "json",
						responseType: "json",
						data: JSON.stringify(post_data),
						headers: {
							accept: "application/json, text/plain, */*",
							"user-agent":
								"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36 Edg/91.0.864.59",
							referer: window.location.origin,
							"x-token": that.token,
						},
						onload: function (r) {
							let json_data = JSON.parse(r.responseText);
							if (r.status == 200 && json_data["code"] == 0) {
								that.getDownloadUrl(json_data["data"]["fileList"][0]);
							} else if (json_data["code"] in that.code) {
								Qmsg.error(that.code[json_data["code"]], {
									html: true,
								});
							} else {
								Qmsg.error("获取文件信息失败", {
									html: true,
								});
							}
						},
						onerror: function () {
							Qmsg.error("网络异常", {
								html: true,
							});
						},
						onabort: function () {
							Qmsg.error("请求意外中止", {
								html: true,
							});
						},
						ontimeout: function () {
							Qmsg.error("请求超时", {
								html: true,
							});
						},
					});
				},
				getDownloadUrl(data) {
					let that = this;
					let file_name = data.fname;
					let file_size = Utils.formatByteToSize(data.size);
					let post_url = "https://www.wenshushu.cn/ap/dl/sign";
					let post_data = {
						ufileid: data.fid,
						consumeCode: 0,
					};
					GM_xmlhttpRequest({
						url: post_url,
						timeout: 5000,
						method: "POST",
						dataType: "json",
						responseType: "json",
						data: JSON.stringify(post_data),
						headers: {
							accept: "application/json, text/plain, */*",
							"user-agent":
								"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36 Edg/91.0.864.59",
							referer: window.location.origin,
							"x-token": that.token,
						},
						onload: function (r) {
							let json_data = JSON.parse(r.responseText);
							if (r.status == 200 && json_data["code"] == 0) {
								let download_url = json_data["data"]["url"];
								if (download_url == "") {
									Qmsg.error("对方的分享流量不足");
								} else {
									download_url = filterScheme.handleUrl(
										"wenshushu-static-scheme-enable",
										"wenshushu-static-scheme-forward",
										download_url
									);
									UI.staticView.oneFile(
										"文叔叔单文件直链",
										file_name,
										file_size,
										download_url
									);
								}
							} else if (json_data["data"] in that.code) {
								Qmsg.error(that.code[json_data["data"]], {
									html: true,
								});
							} else {
								Qmsg.error("获取下载链接失败", {
									html: true,
								});
							}
						},
						onerror: function () {
							Qmsg.error("网络异常", {
								html: true,
							});
						},
						onabort: function () {
							Qmsg.error("请求意外中止", {
								html: true,
							});
						},
						ontimeout: function () {
							Qmsg.error("请求超时", {
								html: true,
							});
						},
					});
				},
			},
			nainiu: {
				// 不行
				default(shareCode, accessCode) {
					console.log(shareCode, accessCode);
				},
			},
			_123pan: {
				code: {
					5103: "分享码错误或者分享地址错误",
					5104: "分享已过期",
					"-1000": "获取出错",
					"-2000": "网络异常",
					"-3000": "请求意外中止",
					"-4000": "请求超时",
				},
				async default(shareCode, accessCode) {
					console.log(shareCode, accessCode);
					this.shareCode = shareCode;
					this.accessCode = accessCode;
					this.panelList = [];
					this.panelContent = "";
					let infoLists = await this.getFiles(shareCode, accessCode, 0);
					if (infoLists[0]["error"] == null) {
						if (infoLists.length == 1 && infoLists[0]["Type"] == 0) {
							let downloadUrl = infoLists[0]["DownloadUrl"];
							let fileSize = "";
							if (downloadUrl == "") {
								let downloadInfo = await this.getFileDownloadInfo(
									infoLists[0]["Etag"],
									infoLists[0]["FileId"],
									infoLists[0]["S3KeyFlag"],
									this.shareCode,
									infoLists[0]["Size"]
								);
								if (downloadInfo["code"] == 0) {
									downloadUrl = filterScheme.handleUrl(
										"_123pan-static-scheme-enable",
										"_123pan-static-scheme-forward",
										downloadInfo["data"]["DownloadURL"]
									);
									fileSize = Utils.formatByteToSize(infoLists[0]["Size"]);
								} else {
									downloadUrl = "javascript:;";
									fileSize = "获取下载链接失败";
								}
							} else {
								downloadUrl = filterScheme.handleUrl(
									"_123pan-static-scheme-enable",
									"_123pan-static-scheme-forward",
									downloadUrl
								);
								fileSize = Utils.formatByteToSize(infoLists[0]["Size"]);
							}
							UI.staticView.oneFile(
								"123盘单文件直链",
								infoLists[0]["FileName"],
								fileSize,
								downloadUrl
							);
						} else {
							Qmsg.info("正在递归文件", {
								html: true,
							});

							this.folderNumber = 0;
							await this.recursiveAlgorithm(infoLists);
							this.panelList.sort(
								Utils.sortListByProperty((item) => {
									let timeStamp = new Date(item["updateTime"]).getTime();
									return timeStamp;
								})
							);
							console.log(this.panelList);
							this.panelList.forEach((item) => {
								if (
									item["url"] === "获取下载链接失败" ||
									item["fileSize"] === 0
								) {
									this.panelContent += `
										<div class="netdisk-static-body">
												<div class="netdisk-static-filename">
														<a href="javascript:;">${item["fileName"]}</a>
												</div>
												<div class="netdisk-static-filesize">${item["fileSize"]}-获取下载链接失败</div>
										</div>`;
								} else {
									this.panelContent += `
										<div class="netdisk-static-body">
												<div class="netdisk-static-filename">
														<a target="_blank" href="${item["url"]}">${item["fileName"]}</a>
												</div>
												<div class="netdisk-static-filesize">${item["fileSize"]}</div>
										</div>`;
								}
							});
							UI.staticView.moreFile("123盘多文件直链", this.panelContent);
							console.log("递归完毕");
						}
					} else {
						Qmsg.error(this.code[infoLists[0]["error"]], {
							html: true,
						});
					}
				},
				getFiles(shareCode, accessCode, parentFileId) {
					/* 获取文件 */
					let url = `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${shareCode}&SharePwd=${accessCode}&ParentFileId=${parentFileId}&Page=1`;
					return new Promise((res) => {
						GM_xmlhttpRequest({
							url: url,
							timeout: 5000,
							async: false,
							method: "GET",
							headers: {
								accept: "*/*",
								"user-agent":
									"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36 Edg/91.0.864.59",
								referer: "https://www.123pan.com/s/" + shareCode,
							},
							onload: (r) => {
								console.log(r);
								let json_data = JSON.parse(r.responseText);
								if (r.status == 200 && json_data["code"] == 0) {
									let infoList = json_data["data"]["InfoList"];
									res(infoList);
								} else {
									console.log(r);
									res([
										{
											error: json_data["code"],
										},
									]);
								}
							},
							onerror: (r) => {
								console.log(r);
								res([
									{
										error: -2000,
									},
								]);
							},
							onabort: function () {
								res([{ error: -3000 }]);
							},
							ontimeout: function () {
								res([{ error: -4000 }]);
							},
						});
					});
				},
				getFilesByRec(shareCode, accessCode, parentFileId) {
					// 递归算法使用的请求
					let url = `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${shareCode}&SharePwd=${accessCode}&ParentFileId=${parentFileId}&Page=1`;
					return new Promise((res) => {
						GM_xmlhttpRequest({
							url: url,
							timeout: 5000,
							async: false,
							method: "GET",
							headers: {
								accept: "*/*",
								"user-agent":
									"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36 Edg/91.0.864.59",
								referer: "https://www.123pan.com/s/" + shareCode,
							},
							onload: (r) => {
								console.log(r);
								let json_data = JSON.parse(r.responseText);
								if (r.status == 200 && json_data["code"] == 0) {
									let infoList = json_data["data"]["InfoList"];
									res(infoList);
								} else {
									console.log(r);
									res([]);
								}
							},
							onerror: (r) => {
								console.log(r);
								res([]);
							},
							onabort: function () {
								res([]);
							},
							ontimeout: function () {
								res([]);
							},
						});
					});
				},
				async recursiveAlgorithm(infoList) {
					// 异步递归算法
					let that = this;
					return Promise.all(
						Array.from(infoList).map(async (value, index) => {
							let fileType = value["Type"];
							console.log(fileType ? "文件夹" : "文件");
							if (fileType) {
								// 是文件夹
								let retList = await that.getFilesByRec(
									that.shareCode,
									that.accessCode,
									value["FileId"]
								);
								await that.recursiveAlgorithm(retList);
							} else {
								// 是文件
								let fileName = value["FileName"];
								let fileSize = Utils.formatByteToSize(value["Size"]);
								let fileDownloadUrl = value["DownloadUrl"];
								if (fileDownloadUrl == "") {
									let downloadInfo = await that.getFileDownloadInfo(
										value["Etag"],
										value["FileId"],
										value["S3KeyFlag"],
										that.shareCode,
										value["Size"]
									);
									if (downloadInfo["code"] == 0) {
										fileDownloadUrl = downloadInfo["data"]["DownloadURL"];
										filterScheme.handleUrl(
											"_123pan-static-scheme-enable",
											"_123pan-static-scheme-forward",
											fileDownloadUrl
										);
										that.panelList = [
											...that.panelList,
											{
												url: fileDownloadUrl,
												fileName: fileName,
												fileSize: fileSize,
												createTime: value["CreateAt"],
												updateTime: value["UpdateAt"],
											},
										];
									} else {
										that.panelList = [
											...that.panelList,
											{
												url: "获取下载链接失败",
												fileName: fileName,
												fileSize: 0,
												createTime: value["CreateAt"],
												updateTime: value["UpdateAt"],
											},
										];
									}
								} else {
									fileDownloadUrl = filterScheme.handleUrl(
										"_123pan-static-scheme-enable",
										"_123pan-static-scheme-forward",
										fileDownloadUrl
									);
									that.panelList = [
										...that.panelList,
										{
											url: fileDownloadUrl,
											fileName: fileName,
											fileSize: fileSize,
											createTime: value["CreateAt"],
											updateTime: value["UpdateAt"],
										},
									];
								}
							}
						})
					);
				},
				getFileDownloadInfo(Etag, FileID, S3keyFlag, ShareKey, Size) {
					/* 获取单文件下载链接 */
					let _this_ = this;
					return new Promise((res) => {
						GM_xmlhttpRequest({
							url: "http://www.123pan.com/a/api/share/download/info",
							method: "post",
							timeout: 5000,
							async: false,
							data: JSON.stringify({
								Etag: Etag,
								FileID: FileID,
								S3keyFlag: S3keyFlag,
								ShareKey: ShareKey,
								Size: Size,
							}),
							headers: {
								accept: "*/*",
								"user-agent":
									"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36 Edg/91.0.864.59",
							},
							onload: (r) => {
								let res_data = JSON.parse(r.responseText);
								console.log(res_data);
								res_data["data"]["DownloadURL"] = _this_.decodeDownloadUrl(
									res_data["data"]["DownloadURL"]
								);
								res(res_data);
							},
							onerror: () => {
								console.log(r);
								res({
									code: -2000,
								});
							},
							onabort: function () {
								res({
									code: -3000,
								});
							},
							ontimeout: function () {
								res({
									code: -4000,
								});
							},
						});
					});
				},
				decodeDownloadUrl(url) {
					/* 将直链的param参数解析成真正的直链 */
					const decodeURL = new URL(url);
					const params = decodeURL.search.replace(/^\?params=/gi, "");
					const atobURL = atob(params);
					return decodeURI(atobURL);
				},
			},
			weiyun: {
				// 不行
				default(shareCode, accessCode) {
					// https://share.weiyun.com/webapp/json/weiyunQdiskClient/DiskUserInfoGet?refer=chrome_windows&g_tk=
					// 不做解析 微云QQ或微信登录的有效期很短
					console.log(shareCode, accessCode);
				},
			},
			xunlei: {
				// 不行
				default(shareCode, accessCode) {
					console.log(shareCode, accessCode);
				},
			},
			_115pan: {
				// 不行
				default(shareCode, accessCode) {
					console.log(shareCode, accessCode);
				},
			},
			chengtong1: {
				// 不行
				default(shareCode, accessCode) {
					console.log(shareCode, accessCode);
				},
			},
			chengtong2: {
				// 不行
				default(shareCode, accessCode) {
					console.log(shareCode, accessCode);
				},
			},
			kuake: {
				// 不行-需要转存到自己的网盘中fied才可以通过验证传递回下载地址，通过分享到是不会传回来的
				code: {
					14001: "非法token",
					21001: "文件不存在",
					15000: "inner error",
				},
				async default(shareCode, accessCode) {
					Qmsg.error("抱歉，夸克不支持直链获取", {
						html: true,
					});
					return;
					this.shareCode = shareCode;
					this.accessCode = accessCode;
					console.log(shareCode, accessCode);
					this.url = NetDisk.regular.kuake.blank.replace(
						/{#shareCode#}/g,
						shareCode
					);
					this.shareStoken = await this.getShareStoken(); // 分享的stoken
					console.log(`stoken: ${this.shareStoken}`);
					if (this.shareStoken != "") {
						let data_list = await this.getFolderInfo();
						if (data_list.length == 0) {
							Qmsg.error("获取失败", {
								html: true,
							});
						} else if (data_list.length == 1 && data_list[0]["file"]) {
							console.log("夸克单文件直链");
							await this.parseFileLink(data_list[0]);
						} else {
							console.log("夸克多文件直链");
							await this.parseMoreFileLink(data_list);
							console.log("全部解析完毕");
						}
					}
				},
				getShareStoken() {
					let that = this;
					return new Promise((res) => {
						GM_xmlhttpRequest({
							url: "https://drive.quark.cn/1/clouddrive/share/sharepage/token?pr=ucpro&fr=h5",
							timeout: 5000,
							method: "POST",
							data: JSON.stringify({
								pwd_id: that.shareCode,
								passcode: that.accessCode,
							}),
							headers: {
								Accept: "application/json, text/plain, */*",
								"user-agent":
									"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
								referer: "https://pan.quark.cn/",
								origin: "https://pan.quark.cn",
							},
							onload: (r) => {
								let json_data = JSON.parse(r.responseText);

								if (json_data["status"] == 200) {
									res(json_data["data"]["stoken"]);
								} else {
									console.log(json_data);
									Qmsg.error(json_data["message"], {
										html: true,
									});
									res("");
								}
							},
							onerror: () => {
								Qmsg.error("网络异常", {
									html: true,
								});
								res("");
							},
							onabort: function () {
								Qmsg.error("请求意外中止", {
									html: true,
								});
								res("");
							},
							ontimeout: function () {
								Qmsg.error("请求超时", {
									html: true,
								});
								res("");
							},
						});
					});
				},
				getFolderInfo(pdir_fid) {
					let that = this;
					pdir_fid = pdir_fid == null ? "" : pdir_fid;
					return new Promise((res) => {
						GM_xmlhttpRequest({
							url: `https://drive.quark.cn/1/clouddrive/share/sharepage/detail?pr=ucpro&fr=pc&pwd_id=${that.shareCode}&stoken=${that.shareStoken}&pdir_fid=${pdir_fid}&force=0&_page=1&_size=50&_fetch_banner=0&_fetch_share=0&_fetch_total=1&_sort=file_type:asc,updated_at:desc`,
							timeout: 5000,
							method: "GET",
							headers: {
								Accept: "application/json, text/plain, */*",
								"user-agent":
									"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
								referer: "https://pan.quark.cn/",
								origin: "https://pan.quark.cn",
							},
							onload: (r) => {
								let json_data = JSON.parse(r.responseText);
								console.log(json_data);
								if (that.code[json_data["code"]] != null) {
									Qmsg.error(that.code[json_data["code"]], {
										html: true,
									});
									res([]);
								} else if (json_data["status"] == 200) {
									res(json_data["data"]["list"]);
								} else {
									Qmsg.error(json_data["message"], {
										html: true,
									});
									res([]);
								}
							},
							onerror: () => {
								Qmsg.error("网络异常", {
									html: true,
								});
								res([]);
							},
							onabort: function () {
								Qmsg.error("请求意外中止", {
									html: true,
								});
								res([]);
							},
							ontimeout: function () {
								Qmsg.error("请求超时", {
									html: true,
								});
								res([]);
							},
						});
					});
				},
				getLink(fids) {
					let that = this;
					return new Promise((res) => {
						GM_xmlhttpRequest({
							method: "POST",
							url: "https://drive.quark.cn/1/clouddrive/file/download?pr=ucpro&fr=pc",
							headers: {
								"Content-Type": "application/json;charset=utf-8",
							},
							data: JSON.stringify({
								fids: [fids],
							}),
							onload: function (r) {
								let json_data = JSON.parse(r.responseText);
								console.log(json_data);
								if (that.code[json_data["code"]] != null) {
									Qmsg.error(that.code[json_data["code"]], {
										html: true,
									});
									res([]);
								} else {
									res(json_data);
								}
							},
							onerror: () => {
								Qmsg.error("网络异常", {
									html: true,
								});
								res([]);
							},
							onabort: function () {
								Qmsg.error("请求意外中止", {
									html: true,
								});
								res([]);
							},
							ontimeout: function () {
								Qmsg.error("请求超时", {
									html: true,
								});
								res([]);
							},
						});
					});
				},
				async parseFileLink(_data_) {
					// 单文件
					let that = this;
					return new Promise(async (resolve) => {
						let downloadUrl = await that.getLink(_data_["fid"]);
						resolve(downloadUrl);
					});
				},
				async parseMoreFileLink(_data_) {
					// 多文件
					let that = this;
					return Promise.all(
						Array.from(_data_).map(async (item, index) => {
							if (item["file"]) {
								/* 是文件 */
								console.log("是文件");
								console.log(item);
								let fileInfo = await that.getLink(item["fid"]);
								console.log(fileInfo);
							} else {
								/* 是文件夹 */
								let folderInfo = await that.getFolderInfo(item["fid"]);
								if (folderInfo.length != 0) {
									await that.parseMoreFileLink(folderInfo);
								}
							}
						})
					);
				},
			},
		},
		parse(netdiskName, shareCode, accessCode) {
			Qmsg.info("正在获取直链", {
				html: true,
			});
			NetDiskLinkParse.netdisk[netdiskName].default(shareCode, accessCode);
		},
		setClipboard(uiLink, tip) {
			// 复制到剪贴板
			GM_setClipboard(uiLink);
			tip = tip ? tip : "提取码已复制";
			Qmsg.success(tip, {
				html: true,
			});
		},
		blank(url, accessCode) {
			// 新标签页打开
			if (accessCode) {
				this.setClipboard(accessCode);
			}
			document
				.querySelector("meta[name='referrer']")
				?.setAttribute(
					"content",
					"no-referrer"
				); /* 百度网盘会拒绝referrer不安全访问 */
			window.open(url);
		},
		scheme(netdiskName, shareCode, accessCode) {
			let url = NetDisk.regular[netdiskName].blank.replace(
				/{#shareCode#}/gi,
				shareCode
			);
			url = filterScheme.handleUrl(
				`${netdiskName}-scheme-enable`,
				`${netdiskName}-scheme-forward`,
				url
			);
			window.open(url);
		},
	};

	const filterScheme = {
		// android scheme调用
		defaultScheme:
			"jumpwsv://go?package=idm.internet.download.manager.plus&activity=idm.internet.download.manager.UrlHandlerDownloader&intentAction=android.intent.action.VIEW&intentData={#intentData#}&intentExtra=",
		packageIDM: "idm.internet.download.manager.plus",
		activityIDM: "idm.internet.download.manager.UrlHandlerDownloader",
		defaultAction: "android.intent.action.VIEW",
		defaultExtra: "",
		handleUrl(enable_key, forward_key, url) {
			// 参数 是否启用的key和转发的scheme和需要转发的url
			if (!GM_getValue(enable_key)) {
				return url;
			}
			url = url.replace(/&/g, "{-and-}");
			url = url.replace(/#/g, "{-number-}");
			let thisScheme = GM_getValue(forward_key)
				? GM_getValue(forward_key)
				: this.defaultScheme;
			thisScheme = thisScheme.replace("{#intentData#}", url);
			return thisScheme;
		},
	};

	const WorkerHandle = {
		blobUrl: "",
		insertDOMHandleTextMatch: () => {
			const handleMatch = `
			(()=>{
				this.addEventListener('message', function (e) {
					let data = e.data;
					let link_regexp = data["regexp"];
					let pageText = data["pageText"];
					let netdisk = data["netdiskName"];
					let matchLink = pageText.match(link_regexp);
					this.postMessage({
						"msg": matchLink ? "workercallback: 文本匹配完毕,当前文本匹配到网盘链接数量:"+matchLink.length.toString() : "workercallback: 文本匹配完毕,当前未匹配到",
						"netdisk": matchLink ? netdisk : "" ,
						"data": matchLink ? matchLink : []
					});
				}, false);

			})()`;
			var blob = new Blob([handleMatch]);
			WorkerHandle.blobUrl = window.URL.createObjectURL(blob);
			console.log("woker Blob:", WorkerHandle.blobUrl);
		},
		createWorkerObject: () => {
			window.GM_linkWorker = new Worker(WorkerHandle.blobUrl);

			window.GM_linkWorker.onmessage = function (e) {
				WorkerHandle.successCallBack(e.data["data"], e.data["netdisk"]);
			};
			window.GM_linkWorker.onerror = function (error) {
				WorkerHandle.errorCallBack(error);
			};
		},
		successCallBack: (matchLink, netdiskName) => {
			/* worker处理文件匹配后的回调 */
			if (!matchLink.length && UI.isHandling) {
				setTimeout(() => {
					UI.isHandling = false;
					/* 延迟赋值-防止页面子元素插入导致闪烁 */
				}, 800);
				return;
			}

			NetDisk.matchLink.add(netdiskName);
			/* 匹配到的可能很多，使用集合去重 */
			let matchLinkSet = new Set();
			matchLink.forEach((item) => {
				matchLinkSet.add(item);
			});
			Array.from(matchLinkSet).forEach((item) => {
				NetDisk.handleLink(netdiskName, item);
			});
			if (NetDisk.hasMatchLink) {
				UI.suspension.show();
			}
			setTimeout(() => {
				UI.isHandling = false;
			}, 800);
		},
		errorCallBack: (error) => {
			console.log("worker throw error: ", error);
		},
	};
	const UI = {
		matchIcon: new Set(),
		size: 50, // 高度和宽度
		opacity: 1, // 按钮透明度
		isCreatedUISetting: false, // 已创建设置界面
		isHandling: false, // 是否在处理页面链接中标识
		uiLinkAlias: null, // 链接层唯一标识
		uiSettingAlias: null, // 设置层唯一标识

		uiLinkParseAlias: "单文件直链层", // 单文件直链层唯一标识
		uiLinkParseMoreAlias: "多文件直链层", // 多文件直链层唯一标识
		uiPasswordAlias: "重输密码层", // 重输密码层唯一标识
		bgInterval: null, // 定时事件id
		src: {
			icon: {
				baidu: RESOURCE_ICON.baidu,
				lanzou: RESOURCE_ICON.lanzou,
				tianyiyun: RESOURCE_ICON.tianyiyun,
				hecaiyun: RESOURCE_ICON.hecaiyun,
				aliyun: RESOURCE_ICON.aliyun,
				wenshushu: RESOURCE_ICON.wenshushu,
				nainiu: RESOURCE_ICON.nainiu,
				_123pan: RESOURCE_ICON._123pan,
				weiyun: RESOURCE_ICON.weiyun,
				xunlei: RESOURCE_ICON.xunlei,
				_115pan: RESOURCE_ICON._115pan,
				chengtong1: RESOURCE_ICON.chengtong1,
				chengtong2: RESOURCE_ICON.chengtong2,
				kuake: RESOURCE_ICON.kuake,
				magnet: RESOURCE_ICON.magnet,
			}, // icon结尾处
		},
		suspension: {
			// 悬浮按钮  双击打开主界面，长按打开设置（不能移动，移动就不打开，只是移动按钮）
			isShow: false,
			show() {
				if (!UI.suspension.isShow) {
					this.createUI();
					this.initPop();
					this.setSuspensionEvent();
					this.setSuspensionDefaultPositionEvent();
					this.resizeEvent();

					UI.suspension.isShow = true;
				}
				this.randBg();
			},
			createUI() {
				UI.size = GM_getValue("size") ? parseInt(GM_getValue("size")) : 50;
				UI.opacity = GM_getValue("opacity")
					? parseFloat(GM_getValue("opacity"))
					: 1;
				if (UI.size < 15) {
					GM_setValue("size", 15);
					UI.size = 15;
				}
				if (UI.size > 250) {
					GM_setValue("size", 250);
					UI.size = 250;
				}
				if (UI.opacity < 0.1) {
					GM_setValue("opacity", 0.1);
					UI.opacity = 0.1;
				}
				if (UI.opacity > 1.0) {
					GM_setValue("opacity", 1);
					UI.opacity = 1;
				}
				this.loadCSS();
				let _html_ = `
				<div class="whitesevSuspension" id="whitesevSuspensionId" style="width:${UI.size}px;height:${UI.size}px;opacity:${UI.opacity}">
					<div class="whitesevSuspensionMain">
						<div class="whitesevSuspensionFloor">
							<div class="netdisk"></div>
						</div>
					</div>
				</div>
				`;
				let _settingHtml_ = `
				<div id="whitesevSuspensionContextMenu" class="whitesevSuspensionContextMenuHide">
					<ul>
						<li class="whitesevSuspensionSetting">
						设置
						</li>
					</ul>
				</div>
				`;

				$("body").append($(_html_)[0]);
				$("body").append($(_settingHtml_)[0]);
			},
			initPop() {
				Qmsg.config({
					position: "center",
				});

				GM_addStyle(`
				.whitesevPop{
					user-select: unset;
				}
        .whitesevPop .pops-alert-content{
          padding: 15px;
        }
				.whitesevPop-whitesevPopSetting .whitesevPop-buttonSpcl{
					display: none;
				}
				.whitesevPop-whitesevPopSetting .whitesevPop-content{
					overflow: auto;
				}
        .whitesevPopSetting .netdisk-setting-main{
          padding: 6px 20px 6px 20px;
        }
        .whitesevPopSetting details.netdisk-setting-menu {
          margin: 10px 0px;
        }
				.netdisk-setting-menu-item{
					display:flex;
          justify-content: space-between;
				}
				.netdisk-setting-menu-item label{
					width:150px;
				}
				.netdisk-setting-menu-item[type=checkbox],
        .netdisk-setting-menu-item[type="scheme"]{
					display: flex;
    			height: 50px;
				}
				.netdisk-setting-menu-item[type=checkbox] p,
        .netdisk-setting-menu-item[type="scheme"] p{
					align-self: center;
    			width: 150px;
				}
				.netdisk-setting-menu-item input[type=text],
				.netdisk-setting-menu-item input[type=number],
				.netdisk-setting-menu-item input[type=range]{
					border: none;
					border-bottom: 1px solid #8f8e8e;
					width: 60%;
          padding: 0px 2px;
				}
				.netdisk-setting-menu-item input[type=text]:focus,
				.netdisk-setting-menu-item input[type=number]:focus{
					outline: none;
    			border-bottom: 1px solid #2196f3;
				}
				.netdisk-setting-menu[type='百度'] .netdisk-setting-menu-item,
				.netdisk-setting-menu[type='总设置'] .netdisk-setting-menu-item{
					margin: 12px 0px;
				}
				.netdisk-setting-menu[type='总设置'] .netdisk-setting-menu-item{
					align-items: center;
					display: flex;
    			justify-content: space-between;
				}
				.netdisk-setting-menu-item select[data-key=pageMatchRange]{
					background-color: #fff;
				}
				/*checkbox美化*/
				/* CSS规则保持重复，以便您可以轻松获取每个按钮的CSS规则 :) */

				.netdisk-checkbox .knobs, 
				.netdisk-checkbox .layer{
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
				}
				.netdisk-checkbox{
					position: relative;
					top: 50%;
					width: 56px;
					height: 28px;
					margin: 0px auto 0 auto;
					overflow: hidden;
					transform: translateY(-50%);
				}
				.netdisk-checkbox input[type="checkbox"]{
						position: relative;
						width: 100%;
						height: 100%;
						padding: 0;
						margin: 0;
						opacity: 0;
						cursor: pointer;
						z-index: 3;
				}
				.netdisk-checkbox .knobs{
						z-index: 2;
				}
				.netdisk-checkbox .layer{
						width: 100%;
						background-color: #fcebeb;
						transition: 0.3s ease all;
						z-index: 1;
				}
				/*
				.netdisk-checkbox .knobs:before,
				.netdisk-checkbox .knobs span{
						position: absolute;
						display: inline;
						top: 5px;
						left: 6px;
						width: 20px;
						height: 10px;
						color: #fff;
						font-size: 10px;
						font-weight: bold;
						text-align: center;
						line-height: 1;
						padding: 9px 4px;
				}
				另类写法居中
				*/
				.netdisk-checkbox .knobs:before,
				.netdisk-checkbox .knobs span{
					position: relative;
					display: block;
					top: 50%;
					left: 30%;
					width: 35%;
    			height: 65%;
					color: #fff;
					font-size: 10px;
					font-weight: bold;
					text-align: center;
					line-height: 1;
					padding: 9px 4px;
					transform: translate(-50%,-50%);
				}			
				.netdisk-checkbox .knobs span{
						background-color: #F44336;
						border-radius: 2px;
						transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
						z-index: 1;
				}
				.netdisk-checkbox .knobs:before{
					transition: 0.3s ease all, left 0.5s cubic-bezier(0.18, 0.89, 0.35, 1.15);
					z-index: 2;
			}
			/*
				.netdisk-checkbox .knobs:before{
					content: 'N';
					display: inline;
					top: -2px;
					left: -10px;
				}
				.netdisk-checkbox input[type="checkbox"]:checked + .knobs:before{
						content: 'Y';
						display: inline;
						position: inherit;
						top: -2px;
						left: 20px;
				}

				.netdisk-checkbox input[type="checkbox"]:checked + .knobs span{
						left: 30px;
						background-color: #03A9F4;
				}
				另类写法居中 */
				.netdisk-checkbox input[type="checkbox"]:checked + .knobs span{
					left: 70%;
					background-color: #03A9F4;
			}
				.netdisk-checkbox input[type="checkbox"]:checked ~ .layer{
						background-color: #ebf7fc;
				}

				/*range美化*/
				.netdisk-setting-menu-item input[type=range] {
					background-size: 98% 3px;
					background: linear-gradient(to right, #ccc 0%, #ccc 100%);
					outline: none;
					-webkit-appearance: none;
					/*清除系统默认样式*/
					height: 1px;
					/*横条的高度*/
				}
				.netdisk-setting-menu-item input[type=range]::-webkit-slider-thumb {
						width: 15px;
						height: 15px;
						border-radius: 50%;
						background-color: #fff;
						box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);
						cursor: pointer;
						-webkit-appearance: none;
						border: 0;
				}
		
					/*message提示的css文件*/
					.qmsg.qmsg-wrapper{
						box-sizing: border-box;
						margin: 0;
						padding: 0;
						color: rgba(0, 0, 0, .55);
						font-size: 13px;
						font-variant: tabular-nums;
						line-height: 1;
						list-style: none;
						font-feature-settings: "tnum";
						position: fixed;
						top: 16px;
						left: 0;
						z-index: 50000;
						width: 100%;
						pointer-events: none;
					}
					.qmsg .qmsg-item{
							padding: 8px;
							text-align: center;
							-webkit-animation-duration: .3s;
							animation-duration: .3s;
							position: relative;
					}
					.qmsg .qmsg-item .qmsg-count{
							text-align: center;
							position: absolute;
							left: -4px;
							top: -4px;
							background-color: red;
							color: #fff;
							font-size: 12px;
							line-height: 16px;
							border-radius: 2px;
							display: inline-block;
							min-width: 16px;
							height: 16px;
							-webkit-animation-duration: .3s;
							animation-duration: .3s;
					}
					.qmsg .qmsg-item:first-child{
							margin-top: -8px;
					}
					.qmsg .qmsg-content{
							text-align: left;
							position: relative;
							display: inline-block;
							padding: 10px 16px;
							background: #fff;
							border-radius: 4px;
							box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
							pointer-events: all;
							/* min-width: 175px; */
							max-width: 80%;
							min-width: 80px;
					}
					.qmsg .qmsg-content [class^="qmsg-content-"]{
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
					}
					.qmsg .qmsg-content .qmsg-content-with-close{
							padding-right: 20px;
					}
					.qmsg .qmsg-icon{
							display: inline-block;
							color: inherit;
							font-style: normal;
							line-height: 0;
							text-align: center;
							text-transform: none;
							vertical-align: -.125em;
							text-rendering: optimizeLegibility;
							-webkit-font-smoothing: antialiased;
							-moz-osx-font-smoothing: grayscale;
							position: relative;
							top: 1px;
							margin-right: 8px;
							font-size: 16px;
					}
					.qmsg .qmsg-icon svg{
							display: inline-block;
					}
					
					.qmsg .qmsg-content-info .qmsg-icon{
							color: #1890ff;
					}
					.qmsg .qmsg-icon-close{
							position: absolute;
							top: 11px;
							right: 5px;
							padding: 0;
							overflow: hidden;
							font-size: 12px;
							line-height: 22px;
							background-color: transparent;
							border: none;
							outline: none;
							cursor: pointer;
							color: rgba(0, 0, 0, .45);
							transition: color .3s
					}
					.qmsg .qmsg-icon-close:hover>svg path{
							stroke: #555;
					}
					.qmsg .animate-turn{
							animation:MessageTurn 1s linear infinite;  
							-webkit-animation: MessageTurn 1s linear infinite;
					}
					@keyframes MessageTurn{
							0%{-webkit-transform:rotate(0deg);}
							25%{-webkit-transform:rotate(90deg);}
							50%{-webkit-transform:rotate(180deg);}
							75%{-webkit-transform:rotate(270deg);}
							100%{-webkit-transform:rotate(360deg);}
					}
					@-webkit-keyframes MessageTurn{
							0%{-webkit-transform:rotate(0deg);}
							25%{-webkit-transform:rotate(90deg);}
							50%{-webkit-transform:rotate(180deg);}
							75%{-webkit-transform:rotate(270deg);}
							100%{-webkit-transform:rotate(360deg);}
					}
					
					@-webkit-keyframes MessageMoveOut {
							0% {
									max-height: 150px;
									padding: 8px;
									opacity: 1
							}
					
							to {
									max-height: 0;
									padding: 0;
									opacity: 0
							}
					}
					
					@keyframes MessageMoveOut {
							0% {
									max-height: 150px;
									padding: 8px;
									opacity: 1
							}
					
							to {
									max-height: 0;
									padding: 0;
									opacity: 0
							}
					}
					
					
					@-webkit-keyframes MessageMoveIn {
							
							0% {
									transform: translateY(-100%);
									transform-origin: 0 0;
									opacity: 0
							}
					
							to {
									transform: translateY(0);
									transform-origin: 0 0;
									opacity: 1
							}
					}
					
					@keyframes MessageMoveIn {
							0% {
									transform: translateY(-100%);
									transform-origin: 0 0;
									opacity: 0
							}
					
							to {
									transform: translateY(0);
									transform-origin: 0 0;
									opacity: 1
							}
					}
					@-webkit-keyframes MessageShake {
							0%,
							100% {
								transform: translateX(0px);
								opacity: 1;
							}
						
							25%,
							75% {
									transform: translateX(-4px);
								opacity: 0.75;
							}
						
							50% {
									transform: translateX(4px);
									opacity: 0.25;
							}
						}
					@keyframes MessageShake {
							0%,
							100% {
								transform: translateX(0px);
								opacity: 1;
							}
						
							25%,
							75% {
									transform: translateX(-4px);
								opacity: 0.75;
							}
						
							50% {
									transform: translateX(4px);
									opacity: 0.25;
							}
						}

						/* select美化 无法美化option*/
						.netdisk-setting-menu-item select{
							height: 32px;
							line-height: 32px;
							font-size: 14px;
							width: 200px;
							border: 1px solid #5c5c5c;
							border-radius: 5px;
							text-align: center;
							outline: 0;
						}
						.netdisk-setting-menu-item select:focus{
							border: 1px solid #002bff;
						}
						/* select美化*/
				`);
				if (!pops.isPhone()) {
					GM_addStyle(`
					.whitesevPop ::-webkit-scrollbar
					{
							width: 11px;
							height: 16px;
							background-color: #ffffff;
					}
					/*定义滚动条轨道
					内阴影+圆角*/
					.whitesevPop ::-webkit-scrollbar-track
					{
							-webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 25%);
							border-radius:10px;
							background-color: #f2f2f2;
					}
					/*定义滑块
					内阴影+圆角*/
					.whitesevPop ::-webkit-scrollbar-thumb
					{
							border-radius: 16px;
							-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
							background-color: #3597ff;
					}
					`);
				}
			},
			openPop() {
				let ui_size = GM_getValue("size", 50);
				let ui_opacity = GM_getValue("opacity", 1);
				let _settingHtml_ = `
				<div class="netdisk-setting-body">
					<div class="netdisk-setting">
						<div class="netdisk-setting-main">
							<details class="netdisk-setting-menu" type="总设置">
									<summary>总设置</summary>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-size">大小${ui_size}</label>
											<input type="range" data-key="size" data-content="大小" min="15" max="250" data-default="50">
									</div>
									<div class="netdisk-setting-menu-item">
											<label data-id="netdisk-opacity" content="透明度">透明度${ui_opacity}</label>
											<input type="range" data-key="opacity" data-content="透明度" min="0.1" max="1" step="0.1" data-default="1">
									</div>
									<div class="netdisk-setting-menu-item">
											<label>匹配类型</label>
											<select data-key="pageMatchRange" data-default="all">
													<option data-value="all">全部</option>
													<option data-value="innerText">普通文本</option>
													<option data-value="innerHTML">超文本</option>
											</select>
									</div>
									<div class="netdisk-setting-menu-item">
											<label>弹窗动画</label>
											<select data-key="popsAnimation" data-default="pops-anim-fadein-zoom">
													<option data-value="pops-anim-spread">spread</option>
													<option data-value="pops-anim-shake">shake</option>
													<option data-value="pops-anim-rolling-left">rolling-left</option>
													<option data-value="pops-anim-rolling-right">rolling-right</option>
													<option data-value="pops-anim-slide-top">slide-top</option>
													<option data-value="pops-anim-slide-bottom">slide-bottom</option>
													<option data-value="pops-anim-slide-left">slide-left</option>
													<option data-value="pops-anim-slide-right">slide-right</option>
													<option data-value="pops-anim-fadein">fadein</option>
													<option data-value="pops-anim-fadein-zoom">fadein-zoom</option>
													<option data-value="pops-anim-fadein-alert">fadein-alert</option>
													<option data-value="pops-anim-don">don</option>
													<option data-value="pops-anim-roll">roll</option>
													<option data-value="pops-anim-sandra">sandra</option>
													<option data-value="pops-anim-gather">gather</option>
											</select>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>读取剪贴板</p>
											<div class="netdisk-checkbox" style="position: inherit;top: unset;transform: matrix(1, 0, 0, 1, 0, 0);">
												<input type="checkbox" data-key="readClipboard">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
									</div>
                  <div class="netdisk-setting-menu-item" type="checkbox">
											<p>PC端拖拽窗口</p>
											<div class="netdisk-checkbox" style="position: inherit;top: unset;transform: matrix(1, 0, 0, 1, 0, 0);">
												<input type="checkbox" data-key="pcDrag">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="百度">
									<summary>百度网盘</summary>
									<div class="netdisk-setting-menu-item">
											<label>网址-Url</label>
											<input type="text" data-key="bdurl" placeholder="如：https://www.example.com/">
									</div>
									<div class="netdisk-setting-menu-item">
											<label>参数-Key</label>
											<input type="text" data-key="paramSurl" placeholder="如：surl">
									</div>
									<div class="netdisk-setting-menu-item">
											<label>密码-Key</label>
											<input type="text" data-key="paramPwd" placeholder="如：pwd">
									</div>
									<div class="netdisk-setting-menu-item">
											<label>密钥-Key</label>
											<input type="text" data-key="paramKey" placeholder="如：Password">
									</div>
									<div class="netdisk-setting-menu-item">
											<label>密钥-Value</label>
											<input type="text" data-key="paramWebSiteKey"  placeholder="密钥，有就填">
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>网站存在密钥验证</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="baidu-website-key-enable">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
											
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>启用解析</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="baidu-static-enable" mutex=".netdisk-checkbox input[data-key='baidu-open-enable']">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
											
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="baidu-open-enable" mutex=".netdisk-checkbox input[data-key='baidu-static-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="蓝奏云">
								<summary>蓝奏云</summary>
								<div class="netdisk-setting-menu-item" type="checkbox">
										<p>单/多文件直链获取</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="lanzou-static-enable" mutex=".netdisk-checkbox input[data-key='lanzou-open-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
								<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="lanzou-open-enable" mutex=".netdisk-checkbox input[data-key='lanzou-static-enable']">
											<div class="knobs"><span></span></div>
											<div class="layer"></div>
										</div>
								</div>
								<div class="netdisk-setting-menu-item" type="checkbox">
										<p>直链调用scheme</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="lanzou-static-scheme-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
								</div>
								<div class="netdisk-setting-menu-item" type="scheme">
										<p>scheme转发</p>
										<input type="text" data-key="lanzou-static-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
								</div>
							</details>
							<details class="netdisk-setting-menu" type="天翼云">
									<summary>天翼云</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>单文件直链获取</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="tianyiyun-static-enable" mutex=".netdisk-checkbox input[data-key='tianyiyun-open-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="tianyiyun-open-enable" mutex=".netdisk-checkbox input[data-key='tianyiyun-static-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>直链调用scheme</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="tianyiyun-scheme-enable">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
									</div>
									<div class="netdisk-setting-menu-item" type="scheme">
											<p>scheme转发</p>
											<input type="text" data-key="tianyiyun-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
									</div>
									
							</details>
							<details class="netdisk-setting-menu" type="和彩云">
									<summary>中国移动云盘(原:和彩云)</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="hecaiyun-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="阿里云">
									<summary>阿里云</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="aliyun-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="文叔叔">
									<summary>文叔叔</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>单文件直链获取</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="wenshushu-static-enable" mutex=".netdisk-checkbox input[data-key='wenshushu-open-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="wenshushu-open-enable" mutex=".netdisk-checkbox input[data-key='wenshushu-static-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>直链调用scheme</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="wenshushu-static-scheme-enable">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
									</div>
									<div class="netdisk-setting-menu-item" type="scheme">
											<p>scheme转发</p>
											<input type="text" data-key="wenshushu-static-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
									</div>
									
							</details>
							<details class="netdisk-setting-menu" type="奶牛">
									<summary>奶牛</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="nainiu-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="123盘">
									<summary>123盘</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>单/多文件直链获取</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="_123pan-static-enable" mutex=".netdisk-checkbox input[data-key='_123pan-open-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="_123pan-open-enable" mutex=".netdisk-checkbox input[data-key='_123pan-static-enable']">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>直链调用scheme</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="_123pan-static-scheme-enable">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
									</div>
									<div class="netdisk-setting-menu-item" type="scheme">
											<p>scheme转发</p>
											<input type="text" data-key="_123pan-static-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
									</div>
									
							</details>
							<details class="netdisk-setting-menu" type="微云">
									<summary>微云</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="weiyun-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="迅雷云盘">
									<summary>迅雷云盘</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="xunlei-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="115盘">
									<summary>115盘</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="_115pan-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="城通网盘1">
									<summary>城通网盘1</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="chengtong1-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="城通网盘2">
									<summary>城通网盘2</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="chengtong2-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="夸克网盘">
									<summary>夸克网盘</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
										<p>新标签页打开</p>
										<div class="netdisk-checkbox">
											<input type="checkbox" data-key="kuake-open-enable">
											<div class="knobs"><span></span></div><div class="layer"></div>
										</div>
									</div>
							</details>
							<details class="netdisk-setting-menu" type="磁力magnet">
									<summary>磁力magnet</summary>
									<div class="netdisk-setting-menu-item" type="checkbox">
											<p>调用scheme</p>
											<div class="netdisk-checkbox">
												<input type="checkbox" data-key="magnet-scheme-enable">
												<div class="knobs"><span></span></div><div class="layer"></div>
											</div>
									</div>
									<div class="netdisk-setting-menu-item" type="scheme">
											<p>scheme转发</p>
											<input type="text" data-key="magnet-scheme-forward" placeholder="如: jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx">
									</div>
							</details>
						</div>
					</div>
				</div>
				`;
				UI.uiSettingAlias = pops.alert({
					title: {
						text: "设置",
						position: "center",
					},
					content: {
						text: _settingHtml_,
						html: true,
					},
					btn: {
						ok: {
							enable: true,
							callback: function (event) {
								event.close();
							},
						},
						close: {
							callback: function (event) {
								event.close();
							},
						},
					},
					animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
					class: "whitesevPopSetting",
					height: "350px",
					width: pops.isPhone() ? "350px" : "500px",
					drag: GM_getValue("pcDrag", false),
					mask: true,
				});

				this.setCheckBoxClickEvent();
				this.setSelectEvent();
			},
			setCheckBoxClickEvent() {
				/* 设置复选框是否选中 */
				$(".netdisk-setting input").each((i, v) => {
					let data_key = v.getAttribute("data-key");
					v.value = GM_getValue(data_key) ? GM_getValue(data_key) : "";
					switch (v.getAttribute("type")) {
						case "checkbox":
							v.checked = GM_getValue(data_key) ? true : false;
							let mutex = v.getAttribute("mutex");
							$(v).on("click", (e) => {
								if (mutex) {
									let mutexElement = $(mutex);
									let mutex_data_key = $(mutex).attr("data-key");
									if (v.checked) {
										mutexElement.prop("checked", !v.checked);
										GM_setValue(mutex_data_key, !v.checked);
									}
								}
								GM_setValue(data_key, v.checked);
							});
							break;
						case "range":
							$(v).on("input propertychange", (val) => {
								$(`.netdisk-setting label[data-id=netdisk-${data_key}]`).html(
									`${v.getAttribute("data-content")}${v.value}`
								);
								let itSize = $(".netdisk-setting input[data-key=size]").val();
								$("#whitesevSuspensionId").css({
									width: itSize + "px",
									height: itSize + "px",
									opacity: $(".netdisk-setting input[data-key=opacity]").val(),
								});
								UI.size = itSize;
								UI.suspension.setSuspensionDefaultPositionEvent();
								GM_setValue(data_key, v.value);
							});
							$(".netdisk-setting input[data-key=opacity]").val(
								GM_getValue("opacity") ? GM_getValue("opacity") : 1
							); // 初始化opacity的值
						default:
							$(v).on("input propertychange", (val) => {
								GM_setValue(data_key, v.value);
							});
					}
				});
			},
			setSelectEvent() {
				/* 设置下拉列表的默认值 */
				$(".netdisk-setting select").change(function (e) {
					let data_key = e.target.getAttribute("data-key");
					let data_value =
						e.target[e.target.selectedIndex].getAttribute("data-value");
					GM_setValue(data_key, data_value);
				});

				$(".netdisk-setting-menu-item select").each((index, item) => {
					item = $(item);
					let dataKey = item.attr("data-key");
					let dataDefaultValue = item.attr("data-default");
					let getDataValue = GM_getValue(dataKey, dataDefaultValue);
					item
						.find(`option[data-value=${getDataValue}]`)
						.attr("selected", true);
				});
			},
			setSuspensionEvent() {
				/* 设置悬浮按钮事件 */
				let needDragEle = document.getElementById("whitesevSuspensionId");
				let that = this;
				let _drag_ = new AnyTouch(needDragEle);
				let timerID = null;
				let isClicked = false;
				let isDouble = false;
				let click_deviation_x = 0; // 点击元素，距离元素左上角的X轴偏移
				let click_deviation_y = 0; // 点击元素，距离元素左上角的Y轴偏移
				_drag_.on("pan", (e) => {
					if (!isClicked) {
						isClicked = true;
						click_deviation_x = e.nativeEvent.offsetX
							? parseInt(e.nativeEvent.offsetX)
							: parseInt(e.getOffset().x);
						click_deviation_y = e.nativeEvent.offsetY
							? parseInt(e.nativeEvent.offsetY)
							: parseInt(e.getOffset().y);
						$("#whitesevSuspensionId").css({
							cursor: "move",
							transition: "none",
						});
					}
					if (e.phase == "move") {
						if (click_deviation_x > 250 || click_deviation_y > 250) {
							return;
						}
						var maxL = $(window).width() - UI.size;
						var maxT = $(window).height() - UI.size;
						var x = e.x - click_deviation_x;
						var y = e.y - click_deviation_y;
						x = x < maxL ? x : maxL;
						y = y < maxT ? y : maxT;
						x = x < 0 ? 0 : x;
						y = y < 0 ? 0 : y;
						GM_setValue("suspensionX", x);
						GM_setValue("suspensionY", y);
						$("#whitesevSuspensionId").css({
							left: x,
							top: y,
						});
					}

					if (e.phase == "end") {
						isClicked = false;
						$("#whitesevSuspensionId").css("cursor", "auto");
						let left_px = parseInt(
							$("#whitesevSuspensionId").css("left").replace("px", "")
						);
						let setCSSLeft = 0;
						if (left_px >= $(window).width() / 2) {
							setCSSLeft = $(window).width() - UI.size;
							GM_setValue("isRight", true);
						} else {
							GM_setValue("isRight", false);
						}

						GM_setValue("suspensionX", setCSSLeft);
						$("#whitesevSuspensionId").css({
							left: setCSSLeft,
							transition: "left 300ms ease 0s",
						});
					}
				});

				_drag_.on(["click", "tap"], (e) => {
					if (isDouble) {
						// 双
						clearTimeout(timerID);
						timerID = setTimeout(function () {
							isDouble = false;
							that.openPop();
						}, 300);
					} else {
						isDouble = true;
						timerID = setTimeout(function () {
							isDouble = false;
							UI.view.show();
						}, 300);
					}
				});
				$(window).on("click", (e) => {
					let targetId = e.target.id;
					let targetClassName = e.target.className;
					if (targetId != "whitesevSuspensionContextMenu") {
						$("#whitesevSuspensionContextMenu").addClass(
							"whitesevSuspensionContextMenuHide"
						);
					}
					if (targetClassName == "whitesevSuspensionSetting") {
						console.log("打开设置界面");
						that.openPop();
					}
				});
				$("#whitesevSuspensionId").on("contextmenu", (e) => {
					e.preventDefault();
					let settingEle = $("#whitesevSuspensionContextMenu");
					var maxL1 = $(window).width() - UI.size;
					var maxT1 = $(window).height() - UI.size;
					var x1 = e.clientX;
					var y1 = e.clientY;
					//不允许超出浏览器范围
					x1 = x1 < 0 ? 0 : x1;
					x1 = x1 < maxL1 ? x1 : maxL1;
					y1 = y1 < 0 ? 0 : y1;
					y1 = y1 < maxT1 ? y1 : maxT1;
					settingEle.removeClass("whitesevSuspensionContextMenuHide");
					settingEle.css({
						left: x1,
						top: y1,
					});
				});
			},
			setSuspensionDefaultPositionEvent() {
				// 设置悬浮按钮位置
				let maxY = $(window).height() - UI.size;
				let defaultX = $(window).width() - UI.size;
				let defaultY = $(window).height() / 2 - UI.size;
				let setX =
					GM_getValue("suspensionX") != null
						? GM_getValue("suspensionX")
						: defaultX;
				let setY =
					GM_getValue("suspensionY") != null
						? GM_getValue("suspensionY")
						: defaultY;

				setX = GM_getValue("isRight") ? defaultX : 0;
				setY = setY < maxY ? setY : maxY; // 超出高度那肯定是最底下了
				setY = setY < 0 ? 0 : setY;
				GM_setValue("suspensionX", setX);
				GM_setValue("suspensionY", setY);
				$("#whitesevSuspensionId").css({
					left: setX,
					top: setY,
				});
			},
			loadCSS() {
				GM_addStyle(`
					.whitesevSuspension{
						top: 0;
						position:fixed;
						right:10px;
						border-radius: 12px;
						z-index:4000;
					}
					.whitesevSuspension .whitesevSuspensionMain{
						background:#fff;
						border:1px solid #f2f2f2;
						box-shadow:0 0 15px #e4e4e4;
						box-sizing:border-box;
						border-radius: inherit;
						height: inherit;
						width: inherit;
					}
					.whitesevSuspension .whitesevSuspensionFloor{
						border-bottom:1px solid #f2f2f2;
						position:relative;
						box-sizing:border-box;
						border-radius: inherit;
						height: inherit;
						width: inherit;
					}
					.whitesevSuspension .whitesevSuspensionFloor .netdisk{
						background-position:center center;
						background-size:115% 115%;
						background-repeat:no-repeat;
						display:flex;
						align-items:center;
						justify-content:center;
						border-radius: inherit;
						height: inherit;
						width: inherit;
					}
					.whitesevSuspension .whitesevSuspensionFloor .netdisk:hover{
						transition:all 300ms linear;
						background-color:#e4e4e4;
						transform:scale(1.1);
					}
					#whitesevSuspensionContextMenu{
						position: fixed;
						z-index: 10000;
						width: 50px;
    				text-align: center;
						padding: 3px 0px;
						border-radius: 3px;
						font-size: 13px;
						font-weight: 500;
						background:#fff;
					}
					#whitesevSuspensionContextMenu:hover{
						background: #dfdfdf;
					}
					.whitesevSuspensionContextMenuHide{
						display: none;
					}
					.whitesevPop-content p[pop]{
						height: 100%;
					}
				`);
			},
			resizeEvent() {
				// 界面大小改变
				let that = this;
				$(window).resize(function () {
					that.setSuspensionDefaultPositionEvent();
				});
			},
			randBg() {
				// 悬浮按钮背景轮播淡入淡出
				clearInterval(this.bgInterval);
				let currentList = [];
				let currentIndex = 0;
				let switchBgTime = 1500;
				UI.matchIcon.forEach((item) => {
					currentList = currentList.concat(item);
				});
				let randBgSrc = UI.src.icon[currentList[currentIndex]];
				$(".whitesevSuspension .netdisk").css(
					"background-image",
					`url(${randBgSrc})`
				);
				if (currentList.length > 1) {
					this.bgInterval = setInterval(function () {
						$(".whitesevSuspension .netdisk").fadeOut(
							switchBgTime,
							function () {
								currentIndex++;
								currentIndex =
									currentIndex < currentList.length ? currentIndex : 0;
								randBgSrc = UI.src.icon[currentList[currentIndex]];
								$(".whitesevSuspension .netdisk").css(
									"background-image",
									`url(${randBgSrc})`
								);
								$(this).fadeIn(switchBgTime);
							}
						);
					}, switchBgTime * 2);
				}
			},
		},

		view: {
			// 主界面
			show() {
				if (!UI.uiLinkAlias) {
					this.addCSS();
					this.createView();
					this.registerIconGotoPagePosition();
				} else {
					UI.uiLinkAlias.show();
				}
			},
			addCSS() {
				GM_addStyle(`
				
				.netdisk-url-box-all{
					
				}
				.netdisk-url-box{

				}
				.netdisk-url-box:last-child {
					padding: 0 0 10px 0;
				}
				.netdisk-url-div{
					display: flex;
					align-items: center;
					width: 100%;
					margin: 10px 0px;
				}
				.netdisk-icon{
					margin: 0px 4px;
					display: contents;
				}
				.netdisk-icon img{
					width: 28px;
					height: 28px;
					font-size: 13px !important;
				}
				.netdisk-icon img,
				.netdisk-url a{
					border-radius: 10px;
					box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
				}
				.whitesevPop .netdisk-url{
					padding: 5px 0px;
					margin: 0px 10px;
				}
				.netdisk-url a{
					color: #ff4848 !important;
					min-height: 28px;
					overflow-x: hidden;
					overflow-y: auto;
					font-size: 14px;
					border: none;

					display: flex;
					align-items: center;
					width: 100%;
					height: 100%;
					padding: 2px 10px;
					word-break: break-word;
				}
				.whitesevPop-whitesevPopSetting *:focus-visible {
					outline-offset: 0px;
					outline:0px;
				}
        
				.netdisk-url a[isvisited=true]{
					color: #8b8888 !important;
				}
				.whitesevPop-content p[pop]{
					text-indent: 0px;
				}
				.whitesevPop-button[type="primary"] {
					border-color: #2d8cf0;
					background-color: #2d8cf0;
				}
				`);
			},
			createView() {
				let viewAddHTML = "";
				UI.matchIcon.forEach((netDiskName) => {
					let netDisk = NetDisk.linkDict.get(netDiskName);
					$.each(netDisk.getItems(), (shareCode, accessCode) => {
						let uiLink = NetDisk.handleLinkShow(
							netDiskName,
							shareCode,
							accessCode
						);
						viewAddHTML =
							viewAddHTML +
							this.getViewHTML(
								UI.src.icon[netDiskName],
								netDiskName,
								shareCode,
								accessCode,
								uiLink
							);
					});
				});
				let viewHTML = `
					<div class="netdisk-url-box-all">
						${viewAddHTML}
					</div>`;
				UI.uiLinkAlias = pops.alert({
					title: {
						text: "网盘",
						position: "center",
					},
					content: {
						text: viewHTML,
						html: true,
					},
					btn: {
						ok: {
							callback: function (event) {
								event.hide();
							},
						},
						close: {
							callback: function (event) {
								event.hide();
							},
						},
					},
					class: "whitesevPop",
					animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
					width: pops.isPhone() ? "350px" : "500px",
					drag: GM_getValue("pcDrag", false),
					mask: true,
					height: "350px",
				});
				this.setNetDiskUrlClickEvent();
			},
			getViewHTML(
				_netdiskicon_,
				_netdiskname_,
				_sharecode_,
				_accesscode_,
				_uilink_
			) {
				return `
				<div class="netdisk-url-box">
					<div class="netdisk-url-div">
						<div class="netdisk-icon">
							<img src="${_netdiskicon_}">
						</div>
						<div class="netdisk-url">
							<a href="javascript:;" isvisited="false" data-netdisk="${_netdiskname_}" data-sharecode="${_sharecode_}" data-accesscode="${_accesscode_}" data-open-enable-key="${_netdiskname_}-open-enable" data-static-enable-key="${_netdiskname_}-static-enable" data-scheme-enable-key="${_netdiskname_}-scheme-enable">${_uilink_}</a>
						</div>
					</div>
				</div>
				`;
			},
			setNetDiskUrlClickEvent() {
				/* 设置网盘链接点击事件 */
				function clickEvent(clickElement) {
					clickElement.target.setAttribute("isvisited", "true");
					let netdiskName = clickElement.target.getAttribute("data-netdisk");
					let shareCode = clickElement.target.getAttribute("data-sharecode");
					let accessCode = clickElement.target.getAttribute("data-accesscode");
					let openEnable = GM_getValue(
						clickElement.target.getAttribute("data-open-enable-key"),
						false
					);
					let staticEnable = GM_getValue(
						clickElement.target.getAttribute("data-static-enable-key"),
						false
					);
					let schemeEnable = GM_getValue(
						clickElement.target.getAttribute("data-scheme-enable-key"),
						false
					);
					if (openEnable) {
						let url = NetDisk.regular[netdiskName].blank.replace(
							/{#shareCode#}/gi,
							shareCode
						);
						url = url.replace(/{#accessCode#}/gi, accessCode);
						NetDiskLinkParse.blank(url, accessCode);
					} else if (staticEnable) {
						NetDiskLinkParse.parse(netdiskName, shareCode, accessCode);
					} else if (schemeEnable) {
						NetDiskLinkParse.scheme(netdiskName, shareCode, accessCode);
					} else {
						NetDiskLinkParse.setClipboard(
							clickElement.target.outerText,
							"已复制"
						);
					}
				}
				$("body").on("click", ".netdisk-url a", clickEvent);
			},
			addLinkView(_netdiskname_, _sharecode_, _accesscode_) {
				// 添加新的链接
				if (!UI.uiLinkAlias) {
					return null;
				}
				console.log("添加");
				let icon = UI.src.icon[_netdiskname_];
				let uiLink = NetDisk.regular[_netdiskname_].uiLinkShow.replace(
					/{#shareCode#}/gi,
					_sharecode_
				);
				uiLink = _accesscode_
					? uiLink.replace(/{#accessCode#}/gi, _accesscode_)
					: uiLink
							.replace(/{#accessCode#}/gi, "")
							.replace(/提取码:/gi, "")
							.replace(/ /g, "");
				let insertDOM = this.getViewHTML(
					icon,
					_netdiskname_,
					_sharecode_,
					_accesscode_,
					uiLink
				);
				let parentDOM = $(
					UI.uiLinkAlias.popsElement.querySelector(".netdisk-url-box-all")
				);
				parentDOM.append(insertDOM);
			},
			changeLinkView(_netdiskname_, _sharecode_, _accesscode_) {
				// 修改已存在的view
				if (!UI.uiLinkAlias) {
					return null;
				}
				console.log("修改");
				let uiLink = NetDisk.regular[_netdiskname_].uiLinkShow.replace(
					/{#shareCode#}/gi,
					_sharecode_
				);
				uiLink = _accesscode_
					? uiLink.replace(/{#accessCode#}/gi, _accesscode_)
					: uiLink
							.replace(/{#accessCode#}/gi, "")
							.replace(/提取码:/gi, "")
							.replace(/ /g, "");
				let needChangeDOM = $(
					UI.uiLinkAlias.popsElement.querySelector(
						`.netdisk-url a[data-sharecode=${_sharecode_}]`
					)
				);
				needChangeDOM.attr("data-accesscode", _accesscode_);
				needChangeDOM.html(uiLink);
			},
			registerIconGotoPagePosition() {
				/* 设置点击图标按钮导航至该网盘链接所在网页中位置 */
				$(document).on(
					"click",
					".whitesevPop .netdisk-icon img",
					function (event) {
						let dataSharecode =
							event.target.parentElement.nextElementSibling.firstElementChild.getAttribute(
								"data-sharecode"
							);
						Utils.findWindowPageString(dataSharecode, true);
					}
				);
			},
		},
		staticView: {
			// 直链弹窗
			isLoadCSS: false,
			addCSS() {
				if (!this.isLoadCSS) {
					this.isLoadCSS = true;
					GM_addStyle(`
					.netdisk-static-body{
						flex-wrap: wrap;
						letter-spacing: 1px;
						text-decoration: none;
						width: 100%;
						padding: 5px 16px;
						text-align: left;
					}
					.netdisk-static-filename{

					}
					.netdisk-static-filename a{
						color: #233df8 !important;
					}
					.netdisk-static-body .netdisk-static-filename:before{
						content: "文件: ";
						font-weight: bold;
    				text-overflow: ellipsis;
						display: contents;
    				position: inherit;
					}
					.netdisk-static-filesize{

					}
					.netdisk-static-body .netdisk-static-filesize:before{
						content: "大小: ";
						font-weight: bold;
						display: contents;
    				position: inherit;
					}
					`);
				}
			},
			oneFile(title, fileName, fileSize, downloadUrl) {
				this.addCSS();
				Qmsg.success("成功获取直链", {
					html: true,
				});
				pops.confirm({
					title: {
						text: title,
						position: "center",
					},
					content: {
						text: `<div class="netdisk-static-body"><div class="netdisk-static-filename"><a target="_blank" href="${downloadUrl}">${fileName}</a></div><div class="netdisk-static-filesize">${fileSize}</div></div>`,
						html: true,
					},
					btn: {
						reverse: true,
						position: "end",
						ok: {
							text: "下载",
							callback: (event) => {
								window.open(
									event.popsElement
										.querySelector(".netdisk-static-filename a")
										.getAttribute("href"),
									"_blank"
								);
							},
						},
					},
					class: "whitesevPopOneFile",
					height: "180px",
					animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
					width: pops.isPhone() ? "300px" : "400px",
					mask: true,
					drag: GM_getValue("pcDrag", false),
				});
			},
			moreFile(_title_, _content_) {
				this.addCSS();
				Qmsg.success("成功获取多文件直链", {
					html: true,
				});
				pops.alert({
					title: {
						text: _title_,
						position: "center",
					},
					content: {
						text: _content_,
						html: true,
					},
					btn: {
						ok: {
							text: "关闭",
						},
					},
					class: "whitesevPopMoreFile",
					mask: true,
					height: "400px",
					animation: GM_getValue("popsAnimation", "pops-anim-fadein-zoom"),
					width: pops.isPhone() ? "300px" : "400px",
					drag: GM_getValue("pcDrag", false),
				});
			},
		},
		monitorDOMInsert() {
			WorkerHandle.insertDOMHandleTextMatch();
			WorkerHandle.createWorkerObject();
			Utils.mutationObserver(document.body, {
				fn: async (mutations) => {
					var retStatus = false;
					$.each(mutations, (i, v) => {
						if (
							v.target.className != null &&
							typeof v.target.className == "string" &&
							v.target.className.match(/whitesevPop|netdisk-url-box/gi)
						) {
							retStatus = true;
							return null;
						}
					});
					if (retStatus) {
						return null;
					}
					if (UI.isHandling) {
						// 当前正在处理文本正则匹配中
						return null;
					}
					UI.isHandling = true;
					let clipboardText = "";
					if (GM_getValue("readClipboard", false)) {
						clipboardText = await NetDisk.getClipboardText();
					}
					NetDisk.matchPageLink(clipboardText);
				},
				config: {
					/* 子节点的变动（新增、删除或者更改） */
					childList: true,
					/* 属性的变动 */
					attributes: true,
					/* 节点内容或节点文本的变动 */
					characterData: true,
					/* 是否将观察器应用于该节点的所有后代节点 */
					subtree: true,
				},
			});
		},
	};
	$(document).ready(function () {
		UI.monitorDOMInsert();
	});
})();
