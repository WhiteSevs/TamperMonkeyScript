import { $, $$, addStyle, DOMUtils, httpx, log, pops, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { MTRegExp } from "@/utils/MTRegExp";
import hljs, { type HLJSApi, type Language } from "highlight.js";
import Qmsg from "qmsg";
import Viewer from "viewerjs";
import { MTForumPostRightToolBar } from "./MTForumPostRightToolBar";
import "./css/beautify.css";

export const MTForumPost = {
	$flag: {
		isSetHljsCSS: false,
	},
	init() {
		MTForumPostRightToolBar.init();
		Panel.execMenuOnce("mt-forum-post-autoExpandContent", () => {
			return this.autoExpandContent();
		});
		Panel.execMenuOnce("mt-forum-post-repairImageWidth", () => {
			return this.repairImageWidth();
		});
		Panel.execMenuOnce("mt-forum-post-hideBottomInfoBlock", () => {
			return this.hideBottomInfoBlock();
		});
		DOMUtils.ready(() => {
			Panel.execMenu("mt-forum-post-removeFontStyle", () => {
				this.removeFontStyle();
			});
			Panel.execMenu("mt-forum-post-removeCommentFontStyle", () => {
				this.removeCommentFontStyle();
			});
			Panel.execMenuOnce("mt-forum-post-loadNextPageComment", () => {
				this.loadNextPageComment();
			});
			Panel.execMenuOnce("mt-forum-post-codeQuoteOptimization", () => {
				this.codeQuoteOptimization();
			});
			Panel.execMenuOnce("mt-forum-post-optimizationImagePreview", () => {
				this.optimizationImagePreview();
			});
			Panel.execMenuOnce("mt-forum-post-interceptionAttachment", () => {
				this.setAttachmentsClickTip();
			});
			Panel.execMenu("mt-forum-post-detectingUserOnlineStatus", () => {
				this.detectingUserOnlineStatus();
			});
			Panel.execMenu("mt-forum-post-showUserLevel", () => {
				this.showUserLevel();
			});
		});
	},
	/**
	 * 自动展开帖子内容
	 */
	autoExpandContent() {
		log.info(`自动展开帖子内容`);
		return addStyle(/*css*/ `
        div.comiis_message.bg_f.view_one.b_b.cl.message>div.comiis_messages.comiis_aimg_show.cl{max-height:inherit!important;overflow-y:inherit!important;position:inherit!important}
        .comiis_lookfulltext_bg,.comiis_lookfulltext_key{display:none!important} 
        `);
	},
	/**
	 * 修复图片宽度
	 */
	repairImageWidth() {
		log.info(`修复图片宽度`);
		return addStyle(/*css*/ `
        .comiis_messages img{
            max-width: 100% !important;
        }`);
	},
	/**
	 * 移除帖子字体效果
	 */
	removeFontStyle() {
		let $messageTable = document.querySelector<HTMLElement>(
			".comiis_a.comiis_message_table"
		);
		if (!$messageTable) {
			return;
		}
		log.info(`移除帖子字体效果`);
		DOMUtils.html(
			$messageTable,
			DOMUtils.html($messageTable).replace(MTRegExp.fontSpecial, "")
		);
	},
	/**
	 * 移除评论区的字体效果
	 */
	removeCommentFontStyle() {
		log.info(`移除评论区的字体效果`);
		let $fontList = $$("font");
		/* 帖子主内容 */
		let $postForumMainContent =
			$(".comiis_postlist .comiis_postli")?.innerHTML || "";
		if ($postForumMainContent !== "") {
			$fontList.forEach(($font) => {
				/* font元素是帖子主内容的移除字体效果 */
				if (!$postForumMainContent.includes($font.innerHTML)) {
					/* log.info(hide[i].innerHTML); */
					$font.removeAttribute("color");
					$font.removeAttribute("style");
					$font.removeAttribute("size");
				}
			});
			/* 帖子评论 */
			$$<HTMLElement>(".comiis_message.message").forEach(($message) => {
				if ($postForumMainContent.includes($message.innerHTML)) {
					$message.innerHTML = $message.innerHTML.replace(
						MTRegExp.fontSpecial,
						""
					);
					let $next = $message.nextElementSibling;
					if ($next && $next.localName === "strike") {
						$next.outerHTML = $next.outerHTML
							.replace(/^<strike>(\n|)/g, "")
							.replace(/<\/strike>$/g, "");
					}
				}
			});
		}
		/* 所有评论，包括帖子主体 */
		$$(".comiis_postli.comiis_list_readimgs.nfqsqi").forEach((item) => {
			let $parent = item.parentElement;
			if ($parent && $parent.localName === "strike") {
				$parent.outerHTML = $parent.outerHTML
					.replace(/^<strike>(\n|)/g, "")
					.replace(/<\/strike>$/g, "");
			}
		});
	},
	/**
	 * 自动加载下一页评论
	 */
	loadNextPageComment() {
		log.info(`自动加载下一页评论`);
		if (document.title.includes("提示信息 - MT论坛")) {
			return;
		}
		if ($$(".pgbtn").length == 0) {
			log.warn("没有找到下一页按钮");
			return;
		}

		var getPageInfo = async function (url: string) {
			let response = await httpx.get(url, {
				fetch: true,
				allowInterceptConfig: false,
			});
			if (!response.status) {
				Qmsg.error("网络异常，请求下一页失败");
				return;
			}
			var pageHTML = utils.parseFromString(response.data.responseText);
			var nextPageBtn = pageHTML.querySelector(".pgbtn a");
			pageHTML.querySelector("#postlistreply")?.remove();
			pageHTML.querySelector(".bm_h.comiis_snvbt")?.remove();
			return {
				url: nextPageBtn ? nextPageBtn.getAttribute("href") : null,
				postlist: pageHTML.querySelector<HTMLElement>("#postlist"),
				pgbtn: pageHTML.querySelector<HTMLElement>(".pgbtn"),
				pgs: pageHTML.querySelector<HTMLElement>(".pgs.mtm"),
			};
		};
		var scrollEvent = async function () {
			var nextURL = $<HTMLAnchorElement>(".pgbtn a")!.getAttribute("href");
			if (nextURL) {
				let pageInfo = await getPageInfo(nextURL);
				if (pageInfo) {
					if (
						pageInfo["postlist"]
							?.querySelector(".comiis_vrx")
							?.querySelector(".km1")
					) {
						// [楼主]标签
						// 这种情况可能是请求的第2页的内容返回的还是第一页的内容
						Object.keys(pageInfo).forEach((it) => {
							pageInfo[it as keyof typeof pageInfo] = null;
						});
						log.warn(
							`检测到请求的本页内容中存在【楼主】标识，判断为重复页请求`
						);
					}
					if (!pageInfo["url"] || pageInfo["url"] == nextURL) {
						log.error("最后一页，取消监听");
						DOMUtils.off(document, ["scroll", "wheel"], lockFn.run);
						DOMUtils.remove(".pgbtn");
					}
					if (pageInfo["postlist"]) {
						DOMUtils.append("#postlist", DOMUtils.html(pageInfo["postlist"]));
					}
					if (pageInfo["pgbtn"]) {
						DOMUtils.html(".pgbtn", DOMUtils.html(pageInfo["pgbtn"]));
					}
					if (pageInfo["pgs"]) {
						DOMUtils.html(".pgs.mtm", DOMUtils.html(pageInfo["pgs"]));
					}
					// 重载功能
					MTForumPost.init();
				}
			} else {
				log.error("获取下一页元素失败");
			}
		};
		let lockFn = new utils.LockFunction(async () => {
			if (utils.isNearBottom()) {
				await scrollEvent();
			}
		});
		DOMUtils.on(document, ["scroll", "wheel"], lockFn.run);
	},
	/**
	 * 代码块优化
	 **/
	codeQuoteOptimization() {
		log.info(`代码块优化`);
		function hljs_smali(hljs: HLJSApi): Language {
			var smali_instr_low_prio = [
				"add",
				"and",
				"cmp",
				"cmpg",
				"cmpl",
				"const",
				"div",
				"double",
				"float",
				"goto",
				"if",
				"int",
				"long",
				"move",
				"mul",
				"neg",
				"new",
				"nop",
				"not",
				"or",
				"rem",
				"return",
				"shl",
				"shr",
				"sput",
				"sub",
				"throw",
				"ushr",
				"xor",
			];
			var smali_instr_high_prio = [
				"aget",
				"aput",
				"array",
				"check",
				"execute",
				"fill",
				"filled",
				"goto/16",
				"goto/32",
				"iget",
				"instance",
				"invoke",
				"iput",
				"monitor",
				"packed",
				"sget",
				"sparse",
			];
			var smali_keywords = [
				"transient",
				"constructor",
				"abstract",
				"final",
				"synthetic",
				"public",
				"private",
				"protected",
				"static",
				"bridge",
				"system",
			];
			return {
				aliases: ["smali"],
				contains: [
					{
						className: "string",
						begin: '"',
						end: '"',
						relevance: 0,
					},
					hljs.COMMENT("#", "$", {
						relevance: 0,
					}),
					{
						className: "keyword",
						variants: [
							{ begin: "\\s*\\.end\\s[a-zA-Z0-9]*" },
							{ begin: "^[ ]*\\.[a-zA-Z]*", relevance: 0 },
							{ begin: "\\s:[a-zA-Z_0-9]*", relevance: 0 },
							{ begin: "\\s(" + smali_keywords.join("|") + ")" },
						],
					},
					{
						className: "built_in",
						variants: [
							{
								begin: "\\s(" + smali_instr_low_prio.join("|") + ")\\s",
							},
							{
								begin:
									"\\s(" +
									smali_instr_low_prio.join("|") +
									")((\\-|/)[a-zA-Z0-9]+)+\\s",
								relevance: 10,
							},
							{
								begin:
									"\\s(" +
									smali_instr_high_prio.join("|") +
									")((\\-|/)[a-zA-Z0-9]+)*\\s",
								relevance: 10,
							},
						],
					},
					{
						className: "class",
						begin: "L[^(;:\n]*;",
						relevance: 0,
					},
					{
						begin: "[vp][0-9]+",
					},
				],
			};
		}
		addStyle(/*css*/ `
			.hljs{text-align:left}
			.hljs ol{margin:0 0 0 10px;padding:10px 10px}
			.hljs li{padding-left:10px;list-style-type:decimal-leading-zero;font-family:Monaco,Consolas,'Lucida Console','Courier New',serif;font-size:12px;line-height:1.8em}
			.hljs li:hover{background:#2c313c}
			.hljs li::marker{unicode-bidi:isolate;font-variant-numeric:tabular-nums;text-transform:none;text-indent:0!important;text-align:start!important;text-align-last:start!important}
			.hljs em[onclick^=copycode]{color:#fff;background:#246fff;margin:5px 10px;border-radius:3px;padding:0 5px;cursor:pointer;height:32px;line-height:32px;display:inline-flex}
			.hljs .code-select-language{height:32px;line-height:32px;font-size:14px;border:1px solid #5c5c5c;border-radius:5px;text-align:center;outline:0}
		`);
		hljs.registerLanguage("smali", hljs_smali);
		let lockFn = new utils.LockFunction(
			() => {
				function setElementHighlight(ele: any, language = "java") {
					if (!ele.oldValue) {
						ele.oldValue = ele.textContent;
					}
					ele.innerHTML = hljs
						.highlight(ele.oldValue, { language: language })
						.value.replace(/\\n$/gi, "");
				}
				document
					.querySelectorAll<HTMLEmbedElement>("em[onclick^=copycode]")
					.forEach((coypCodeElement) => {
						if (
							coypCodeElement.nextElementSibling &&
							typeof coypCodeElement.nextElementSibling.className ===
								"string" &&
							coypCodeElement.nextElementSibling.className ==
								"code-select-language"
						) {
							return;
						}
						let codeLanguage = hljs.highlightAuto(
							DOMUtils.text(
								coypCodeElement.parentElement!.querySelector<HTMLDivElement>(
									"div[id^=code]"
								)!
							)
						).language;
						let selectElement = document.createElement("select");
						let selectLanguageList = hljs.listLanguages().sort();
						selectLanguageList = selectLanguageList.concat("自动检测");
						let selectInnerHTML = "";
						selectLanguageList.forEach((languageName) => {
							if (languageName.startsWith("自动检测")) {
								selectInnerHTML += `<option data-value="${codeLanguage}" selected="selected">${languageName}(${codeLanguage})</option>`;
							} else {
								selectInnerHTML += `<option data-value="${languageName}">${languageName}\</option>`;
							}
						});
						selectElement.className = "code-select-language";
						selectElement.innerHTML = selectInnerHTML;
						DOMUtils.on(selectElement, "change", () => {
							let changeCodeLanguage =
								selectElement.selectedOptions[0].getAttribute("data-value")!;
							log.info("切换代码块语言: ", changeCodeLanguage);
							DOMUtils.parent(selectElement)
								.querySelectorAll("li")
								.forEach((liElement) => {
									setElementHighlight(liElement, changeCodeLanguage);
								});
						});
						utils.preventEvent(selectElement, "click");
						utils.preventEvent(coypCodeElement, "click");
						coypCodeElement.insertAdjacentElement("afterend", selectElement);
						utils.dispatchEvent(selectElement, "change");
					});

				let blockcodeElementList = document.querySelectorAll(".blockcode");
				blockcodeElementList.forEach((ele) => (ele.className = "hljs"));
			},
			this,
			500
		);
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			callback: () => {
				lockFn.run();
			},
		});
	},
	/**
	 * 图片查看优化
	 */
	optimizationImagePreview() {
		log.info(`图片查看优化`);

		let blackListNoViewIMG = [
			{
				hostName: "avatar-bbs.mt2.cn",
				pathName: "*",
			},
			{
				hostName: "cdn-bbs.mt2.cn",
				pathName: "^(/static(/|//)image|/template)",
			},
			{
				hostName: window.location.hostname,
				pathName: "^(/static(/|//)image|/template)",
			},
			{
				hostName: window.location.hostname,
				pathName: "/uc_server/avatar.php",
			},
		];
		/**
		 * 查看图片
		 * @param [imgList=[]] 图片链接列表
		 * @param [index=0] 默认显示第几张图片
		 */
		function viewerViewImage(imgList: string[] = [], index: number = 0) {
			let viewerULNodeHTML = "";
			imgList.forEach((item) => {
				viewerULNodeHTML += `<li><img data-src="${item}"></li>`;
			});
			let viewerULNode = DOMUtils.createElement("ul", {
				innerHTML: viewerULNodeHTML,
			});
			let viewer = new Viewer(viewerULNode, {
				inline: false,
				url: "data-src",
				zIndex: utils.getMaxZIndex() + 100,
				hidden: () => {
					viewer.destroy();
				},
			});
			viewer.view(index);
			viewer.zoomTo(1);
			viewer.show();
		}
		/**
		 * 处理页面中的图片
		 */
		function handleImageClick() {
			$$<HTMLElement>(
				"#postlist .comiis_vrx:not([data-isHandlingViewIMG])"
			).forEach((item) => {
				item.setAttribute("data-isHandlingViewIMG", "true");
				/* 待显示的图片组 */
				let totalImageList: string[] = [];
				item.querySelectorAll("img").forEach(($img) => {
					/* 图片链接 */
					let currentImageUrl = $img.src;
					/* 主机名 */
					let imageUrlHostName = new URL(currentImageUrl).hostname;
					/* 路径 */
					let imageUrlPathName = new URL(currentImageUrl).pathname;
					/* img标签的父元素 */
					let $parent = $img.parentElement!;
					if (
						$parent.nodeName.toLowerCase() === "a" &&
						$parent.getAttribute("href") === currentImageUrl
					) {
						$parent.setAttribute("href", "javascript:;");
						$parent.removeAttribute("target");
					}
					/** 是否在黑名单中 */
					let isInBlackList = false;
					/* 图片黑名单 */
					for (let item of blackListNoViewIMG) {
						if (
							imageUrlHostName.indexOf(item["hostName"]) != -1 &&
							imageUrlPathName.match(item["pathName"])
						) {
							isInBlackList = true;
							break;
						}
					}
					if (isInBlackList) {
						return;
					}
					totalImageList.push(currentImageUrl);
					// 移除默认的点击事件
					$img.removeAttribute("onclick");
					$img.setAttribute("onclick", "");
					DOMUtils.on(
						$img,
						"click",
						function (event) {
							utils.preventEvent(event);
							log.info("点击图片", $img);
							let viewImageIndex = totalImageList.findIndex((imgUrl) => {
								return imgUrl == currentImageUrl;
							});
							viewerViewImage(totalImageList, viewImageIndex);
						},
						{ capture: true }
					);
				});
			});
		}
		let lockFn = new utils.LockFunction(() => {
			handleImageClick();
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
	/**
	 * 附件点击提醒
	 */
	setAttachmentsClickTip() {
		log.info(`附件点击提醒`);
		/**
		 * 处理元素内的a标签的点击
		 * @param item
		 */
		function handleClick(item: HTMLElement) {
			if (item.hasAttribute("href")) {
				let attachmentId = item.hasAttribute("id")
					? item.id
					: item.parentElement!.id;
				let attachmentURL = item.getAttribute("href")!;
				let attachmentName = item.innerText;
				let attachmentMenu = document.querySelector<HTMLElement>(
					`#${attachmentId}_menu`
				)!;
				if (attachmentMenu.innerText.indexOf("金币") === -1) {
					return;
				}
				console.log("发现附件", item);
				console.log("该附件是金币附件，拦截！");
				item.setAttribute("data-href", attachmentURL);
				item.style.setProperty("cursor", "pointer");
				item.removeAttribute("href");
				item.innerText = "【已拦截】" + attachmentName;
				item.onclick = function () {
					pops.confirm({
						title: {
							text: "提示",
							position: "center",
						},
						content: {
							text: /*html*/ `<br />确定花费2金币下载附件 <a style="color: #507daf !important;">${attachmentName}</a> ？<br /><br />`,
							html: true,
						},
						btn: {
							ok: {
								callback: (details) => {
									window.open(attachmentURL, "_blank");
									details.close();
								},
							},
						},
						mask: {
							enable: true,
						},
						width: "400px",
						height: "200px",
					});
				};
			}
		}
		utils.mutationObserver(document.documentElement, {
			callback: () => {
				document
					.querySelectorAll<HTMLAnchorElement>(".attnm a")
					.forEach((item) => {
						handleClick(item);
					});
				document
					.querySelectorAll<HTMLAnchorElement>(".comiis_attach a")
					.forEach((item) => {
						handleClick(item);
					});
				document
					.querySelectorAll<HTMLAnchorElement>("span[id*=attach_] a")
					.forEach((item) => {
						handleClick(item);
					});
			},
			immediate: true,
			config: { childList: true, subtree: true },
		});
	},
	/**
	 * 探测用户在线状态
	 */
	async detectingUserOnlineStatus() {
		log.info(`探测用户在线状态`);
		Panel.onceExec("mt-forum-post-detectingUserOnlineStatus", () => {
			addStyle(/*css*/ `
				.gm-user-status-icon{
					border: 0 !important;
					float: right !important;
					display: block !important;
					width: 40px !important;
					height: 40px !important;
				}
			`);
		});
		function getStatusIcon(isOffLine: boolean) {
			return DOMUtils.createElement("img", {
				className: "gm-user-status-icon",
				smilied: isOffLine ? "1353" : "1384",
				loading: "lazy",
				src: isOffLine
					? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAFAxJREFUeF7tWwuQVNWZ/u6rnzPd0/PoeTC8tNkJ7gQBt0pYHDESUZcNWrBi1qjlEl2q8LG7apngs2JMsFLRLV9sUINWiZTRlfhIJGKwhMEF14iERcmEEZhhGGZ6Xt093TPd97n5z+3Tc6ftngeDValKTtWt7pl777nn//7vf57bAv7Ch/AXLj/+CsBfGfDVIyBefvnlfwegSdf1ubIsn2cYxjRRFIOCIATp8ZZlxU3TjEuSdErX9c9lWT4CoPndd9/9HQDzq1ziV2UCyvLly1dZlrVGEIRlsuIJSoofsuyCJCuQJBmCKI2SyzINGIYOQ9eg6yoMLQVdS8cty9olCMKrO3fu3A5AO9tgnFUAmpqaqtxu9x2iKN6uuINBl9sHl9vL1iyJE1ekYYo5OdXMMNTMELRMnFjyVCaTebK5ubnnbAFxVgCIRCLuWbNm3U+Cu30VQbfHz7TMBRcsvch6OSgkMH0f+TQceOlZQIZT8RwQJ06ceKS1tTUzVSCmDMBFF110hcfj2ez2hmZ4/cykITu0zTVvWSYEQYQoGGOu2TBHL8m0bCA5CLphQUsnkBkeaE+n0+v27t37m6mAcMYAkNZnzpz5mKz4b5XdpfB6baqLljqiedGmsijY6hQE+3GWZRVcM53n5+jTdIDBzUIzBFiCDE1NQ88MQtdSz7S1td11pmw4IwAuueSSekmS3pbdZfO9/jIQxRXJFoprXIAJQRRyQjsBGE9jJHwOCNOe1zBtEFU96x8EBWQmmXQSeiZ20DCMb33wwQcd482df37SAFx22WVzLMv6reQKznB7SiDReiwNLnnEaCVRZMIz7WdZMNmFcaaYWWfAATANGxDdsqOIYSkMBEONtwuC8M333nvv6GSeNSkASHjDMPYqnlCYCS/YUUkWDIiSPRUJz7Sd1T6n/WQWxa/lTLBMK8cADoDGgbFkmJZIIRNaeiAqSdJFkwFhwgAQ7WVZ/pA0LyseZteSYHt3WbIgQGIgcO2T4FMRvhgIBIAFAwSKaZq2P6BliC5k0inASLbrur5kouYwIQCyDm+/IJfOpxAHU4ViO2dIgm3rI2HPpv9XBQCjvaHnAKC/NQOwIEM3JRh6GpY+eLCtrW3RRBzjhABYtmzZ8xB935VdfsiiAQHk9GwAyMY5AJz+oiSeFe07WeD0BU4ATMvESIQQAUGBrqYAc+jnu3btunk80xsXgCVLlqxyewKvK54gc3aKZDs78vYixXUHAMw5aRp0Q2f0pIPO06EoCtxu94ScIt2XyWSgadqoeWxzkyHJUo4BBABdT/mDQSmGSNFBooQJuppc/eGHH1IKXXSMB0DpxRdf3CK6K2vdigCYGiSJhLdswQSRLYbRUNPg9/lx/vzzcd5556G2thaBQACJRALd3d04fPgwfn/w90wwAoLf51yZoRu58+PNM5gcZGBwAAgE3eCRQYSmW7C0gdN79uxpADBYDIExAWhqavqxqAQ2KC4/YKnM3vMB4Nq+8sorQUdJSQlcLhdkOeskiBW6DlVVkUwmsWPHDnZQ4sSTJ1rc8PAwOyY7DzdDxoJsZNAMGQYUWEYGppbY2NzcfO+kAaDCxjTNo4qvOkipLXN2IAbYlKaDBHMpLqy/dT3mzZsHn8/HqE5H/iCG0DE0NIRDhw5h0zObGAsIBBKctH+m86ianX0SAAwIy2X/DQXaUHdcFMU5xQqoogxg2pdLNgiyFxLI9kcKGg5CKpXC3XffjQsuuIDRnTTPNZIPAC2MBjGBzOKTTz7B448/jnBVGF3dXVOeR5YVUL3Bs2zdEGHABV3LQLRSRVlQEAAKe9XV1d2yp5JVNxJUyBIVM5TPi4wFZMtXX301Vq1ahVAoxISfSNZHQHAQXnvtNWYORPtrrrkmB+KZzLN9+3bGPJYbUB1hKTAsEYYlwVL74t3d3dWFwmJBAMjzQ/S+TmEPlm7bvqjb1Vw20yMQnnzySYTDYUb9iSyas4IWSbQnJjz44IN4+OGHmfBkDpOdh0wqGo3ijjvuYMDSIAA05hCJBQpMNUHmWzAiFAJAXLx48XZBKb+KJTus0LFLWEpuKOEZHhrCZcsvwy233IKysjLm8Ca7cPIfBMTAwABjEN1/pvPEYjE899xz2PnuTrjcLtsP0JIFCZrpggADphZ/c9++favyW2yFAPAtWrQoKnvDfrJ9alRQzm87Pol99vf14d777sXSpUuZ5goJT9q477778NZbb8PtdmHlypVM29xPcJ/g9BV8nvHudd5D8xCT9u7dix8+/EMEgoFRAFB2aEGCqfal9u/fHwYw5Lz/SwBQg0PThR2KNwTLUCELKgt9zBdINgCdnZ144YUX0NDQUJT+d911F7Zu3Yq6ujoESgNIDCaYv3jggQeKZyXZM5O5lwAgMzh27Biuv/56VFVV2X6AymhBgm65GACGmoAiW1fmN1DyARAbGxsf9AfCD0myF4qoApYBQRjJ6IgF7e3teOutN1myU8z+6Rxpe9bMWWxRPT09GIgNsBA43pjMvRwA8gMrVvwj6upqWUjl/QSKBBBk1mhNJaI/OHz48MNOM/gSAAsXLnxR8VbeIFOhb+l2e4tAEAWmfWLB8ePH8corr4zJABKCFudkwNDQMFpa/jCe/AzYid7rZMDq1atRX1/PtE8A8DYaA4Gy1eHelw4cOHBTUQAo/AWDwd2yJ3whlbgsAkC1K7ssAATCiRMn8Oijj2LZsmVFfQDR+Nlnn2UM8Xg8SKfTzGk+8sgjbDFj+YDx7i3kA3bv3s1yCQ6AYdqOm3qKHAA93fdRPB5f6gyHoxiQBeAL2ROeRnkUCS8KOsv5nSB0dp7GVVetxJ133lk0CpAj27BhA7Zt28YWct1112Hjxo3MLFjePkYUGOvefOFpHooClFT98pdvoLamhmnfMGzWjgAgQU9HT8Xj8XOLAgDAt2DBgm6Xr6ZEFjVYpg7B0mztUw6QTYOTg0kMp4fxxhtvTDkPWLv2u9iy5edTzgMoKaNEqMRfwjAiAFhOQL1Di8pkN9ShruSnn35a7YwE+T7At3DhwpTirQasjJ3/W3bbi2yfs4BQJz9w00034dZbbz3jTHDz5s14+umncdttt2HdunVnnAlSQvbiiy9ixowZUGSFVYgcANZWFxUGgDbcjQMHDvjHAqB0/vz5Cbe/lgFA5S/v8XMW8DZX/0A/Ojo6WALS1NQ06VqgubmZ+YSqqjB6eqJTnoccZ3l5ua11apexuoDaZ0o+AAFneZzPgNIFCxZ0kglwAMgH0GC1fzYhIBCoAjt16hRD+plnnsHixYsnXA3u27ePMcflcmN6fT1OdnRAVTNnPA+tj5yf2+XOaZ47QQKA+oaCqEAd6iETqBsTgHnz5v3BW1pTZ5ka6/cTAISkJEo5X8AdEXn29pPtrDBav3491q5dO24/YMuWLdi0aRMDa86cOfD7/aCq8ujRoyyhmew8ZPckvNfjZevj2reLIrJ9MgEbgOHBrs5Dhw59bUwAGhsb3/eW1tB2NkQrwxyhKFrM/lk0yDpEDkIylURvby/6+/sZBZcvX45LL70Us2fPRkVFBfr6+pi/eP/997Fz5052XU1NDarD1SgNBKAoMjRNx2Aigc7Tp5k55M9D9cb23Z/h8Z0dWKj8ES37fpV7Hl1LnSin8Ll2ehYAS3Sz5Q4Pdv3u8OHDl44FgG/u3LlbvKXhayVJgWBmWC5AmSDv8uaDQLamZlTE4nEkEnHW9aFKL39QpRcMBplw9Emad3aNCIRUMsmyxXg8zg7nPOI3HsScFTeju+VTWO98D+WujB058jQ/alfJAQAVRIOxrl8cOXJk7ZhRoLGx8R7FE3pIVtw5BhAANIqBQOfIJ5BJpNMZ6LqWK02peqTSmbXAPF74/D5m+4UKKNYMTaft9ljabpFRTpAxZaj/9BKev30xtn4yiF1vvoXZR/4LJR47QXM6PZb88K1lgcxWBiQvNC0DdaiPUuGfFAWAEiFN0/6htCy83V9SCctMA0YaFu3zWRbLAzgQxAT2Pc8kyCmSA6JF8P0B8h+kbWqB2eF0ZP/fyRS7o2NveOiazhwatdG6jBDEq36KX/97I5Iq8C9bOxHd8QQiiT3MN3GPzyIAeX5KhSl7pe12yQNZ8SERj2IwFl2lKMo7Y2aCHR0d1TNnzvy8ojriN/RhWIbGzIDXA/lMyAeBh8lie4Nj9Q3y02P6W1M1tJQsQdPN9+GxFRTBgJ8dNPHqbz+H8OsNqBZ77dCX7YWxKpAtytY+MVmQfejpbEm1tbWdV19f3z1WJkiqKW9oaHg5UD59uUuR2SYDOUICgAtbCIRCbOCJU74/KEb//OtImKF0GscWPoDvr1+BlbPtK47FgYd29OCLHdtw7sltuY3YnPBZAEh4SH4YhoZYb9vOlpaW7wDoH7MaBOCvrq5eE66d/XwwFIalD7HGommqzAzyQcg3iUJA8Gu4gJwdo+jPNefQJlG7Ta9G1Zof4UdrGlBuO3M2Nn5k4OAnR2C+eTdqpIFR2NH8tGcAuZQxoL+vG9HTx2/u7u5+FUBqLABoIt+fWFbT0NBwqKquwU9NEctIMxA4C/IFce4Dct/gBIq+O/+fr+n8v0lwGmT/JyM3Yum1N+LGhXaOz8c77cBHn/Xgixc3YObwp7bAWZ/EvkteUKfYFNyInjqSamlpmQega9yOEEC5I4LTp0//QVXtOetLSwKAmba3qYz0iIfNrsSpzfwN0UJCF9I+F8pJYQKhy6hA6Ns/xTcvnIPzq0c7zs9jwOH2OD5+/WWEP3uO7U+Qk2YOl6hP+b/oweBgDD2nj206efLkQwDi+W+aFWyKkhkoihI555xzmsPT5vpFaIwB5Assk8wh23JyaCQfiHzaT5YB1NVpq74Ci9beicYZQUyjEsYxTqWA9riBz/bsgbb931gGytN1QSIAXDChMO0fO3asSdO01nz6szUWoiOFw9bW1vLp06ffX1k9a30gWM62xGFmYBgqC0+FQMg3jXwQCv3tfL7z3SHKKbRlD2DRihWoCbhRZjd1ciOmAgkV+Lj5f5HcdhvKSt1M+yS4nf66kIj343TH0S1dXV33RyKR/gnvC2TfVwsoijK7vr7+N+G6OWGP2832B6lCJCbweM/jbjG7LkZ558sThV6aorpAWfUEllz+DXgUEyWu0SaQVG0/se+DjxHbejvKA1QL8NLXhfSf6pNo59FoR0fHFZqmHQeQKPTWadGtMc6CysrKa2umzf7PyvB0ttnImEAh0bITnlHFh8OTFwOkEEtGha/sBVRj+Ff+EJesvhouhXaiR89Ij1I1E7t+tRvmm3ciSCwVbAaQCfRGT6Lr1PH/6O3t/UUx7Rc1geyjCHKyvHBdXd2Pq2pmrSkLVWUByOYFlt19ZZmYswbPZmPjgTDWeUqFT9deiX/+3j0I11QUvDTa1Yf/fuIp1Ha8jdJARY76sYEe9HSdeLWzs5N2haOFbD+niHEWySKCoijTa2pqXq6snjU35w+y2SEPjZzG+WDQ/OOZSf4ayGyoxD6ZcuPCO57A4ovno8zvSAIAxFIZ7NtzEAd+9n3MKDHg9ZXk7L63+8SRrq6u72iadrKQ53c+b7wXJIgFHgAhv9//tXA4vC1UNSNcWlr2JSbwSZ32zMHg53h8d16b/yIVjxZkXrTj0y7NwcX/ugFNi/4G54btXOCLaBLN+/+IPc9uRL3RhoqKStA+JoW8gZ72aDQavS6VSlH/nTKk9FhvnI8HAD2Pm0JFKBT6eklJyUuV1bOCX2ICU3Xh12ALOTknGMVCZEbNIB5PoMcIQJi9FLMXXsgAOH7gI1jHd6NKSiAQqoHXW4LBZILifTyZTN4wMDDwfwD6xqL+RE2AX0emQP6gPBQK/a3f799cEZ5Ry3wCMwU67A2UYiCciT8g4Cgckj9IJlOsbUaDymm3N4BAMMSEj8X60BdtP51KpdYNDAx8ls33KeUd9/X6iTAgH4QKv98/q7y8/KmyimlzK6rqHBXjSNF0toDgPX5NN+2yHNSVkhnlRdmDWH8XYn2njvT399+eSqVOODQ/rvDjRYFCSssxQVGUyqqqqrsCZeE1pcFK+Hz2uwQ5NjhNoohpjMsKCmtslfwz2+MTZAwNpTAY70UiFn21p6fnMU3TqC6mSm9Cmp+sCTjXykEoA1BaWVm5zOPx3BOqrK+l6lGigM1Ngn4DwE0jX9p8ULiQo1y0RB0X2w3RpyDDMC3EB6IY6O04nU6nf9Lb27sr2+OLZYUnRzThX2dMxgScS+OOkToUlDGWVlRUrJNl+duhynrfCBC0jiwIuc9x9T5a6KzwDsGHdF1/pa+vb7OmafT6G2V4dIwqcyfwFJtcE72wwHU8RFL5TED4PR5PRVlZ2Q2Koqz2l1YEyTQ8XipSsl0aVuY6lJMte20t85HVNtvYFJAeTjKqpwb74pqmvR6LxV5Kp9Pcw5Pg9MLDmKFuLBmnAgDNSysnA6VcgYI0HR5FUbzBYPDvXS7Xt0RRXOTz+X0ubwD0GyJFcUNxeXIvW9GrbdQLNKmXaNCrdBloagaZoQGy8yHTNPerqvp2PB7/H03TqN1MwiazB32fFOXzwZgqADm1RSIRpbW1lX42QgexwqUoCgGjlJeXf93lci00TXOGKIrnWpZF/iNoWZaPmqT0sznLsoYEQYiZpvmFKIrtqqoe6O/vp3iuaZpGgtIbUKTt4UgkMtza2mq/vzPFcbYAyAeCilfKXQkM+k4Ha9kotBMyxtBog8Ae9ElC00Gaz0QiEfVsCT6VKDARzJlpRCIRsbW1lYQnMyEwSHj6br/DNjK4JonOdJDwJLSRFZrOT4nqxRZ9thlQ6DlMUDIR+mxtbeW/mBz9y0lbQLqOfWY1TV+nTPOv0glOhA1/1tf8P+a/O+ZB7/yUAAAAAElFTkSuQmCC"
					: "data:image/png;base64,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",
			});
		}
		function setAvatarOnlineStatus($ele: HTMLElement, isOffLine: boolean) {
			let $icon = getStatusIcon(isOffLine);
			DOMUtils.prepend($ele, $icon);
		}
		let $favatarList = Array.from(
			$$<HTMLElement>(".pls.favatar:not([data-is-detectingUserOnlineStatus])")
		);
		for (let index = 0; index < $favatarList.length; index++) {
			const $favatar = $favatarList[index];
			// 发消息按钮
			let $kmfxx = $favatar.querySelector<HTMLAnchorElement>(
				".comiis_o.cl a.kmfxx"
			);
			if (!$kmfxx) {
				log.error("探测用户在线状态失败，未找到发消息按钮");
				return;
			}
			$favatar.setAttribute("data-is-detectingUserOnlineStatus", "true");
			let sendMessageUrl = $kmfxx.href;
			let response = await httpx.get(sendMessageUrl, {
				fetch: true,
				allowInterceptConfig: false,
			});
			if (!response.status) {
				log.error("探测用户在线状态，中止网络请求探测");
				setAvatarOnlineStatus($favatar, true);
				return;
			}
			let doc = DOMUtils.parseHTML(response.data.responseText, true, true);
			let $flb = doc.querySelector<HTMLElement>(".flb")!;
			if ($flb) {
				let statusText = DOMUtils.text($flb)?.trim();
				let isOffLine = statusText.endsWith("……[离线]");
				setAvatarOnlineStatus($favatar, isOffLine);
			} else {
				// 未找到在线状态元素
				// 强制离线状态
				setAvatarOnlineStatus($favatar, true);
			}
		}
	},
	/**
	 * 显示用户等级
	 */
	showUserLevel() {
		log.info(`显示用户等级`);
		$$<HTMLElement>(".pls.favatar:not([data-show-user-level])").forEach(
			($userAvatar) => {
				$userAvatar.setAttribute("data-show-user-level", "true");
				let userLevel = "0级";
				let userInfo = $userAvatar.querySelector<HTMLElement>(".tns tr")!;
				let currentLevelText =
					$userAvatar.querySelector<HTMLElement>("p em")!.innerText;
				let userLevelText = document.createElement("td");
				userLevelText.setAttribute("style", "border-left: 1px solid #e3e3e3;");
				switch (currentLevelText) {
					case "幼儿园":
					case "初级工程师":
						userLevel = "1级";
						break;
					case "小学生":
					case "中级工程师":
						userLevel = "2级";
						break;
					case "初中生":
					case "高级工程师":
						userLevel = "3级";
						break;
					case "高中生":
					case "专家":
						userLevel = "4级";
						break;
					case "大学生":
					case "高级专家":
						userLevel = "5级";
						break;
					case "硕士生":
					case "资深专家":
						userLevel = "6级";
						break;
					case "博士生":
					case "实习版主":
					case "版主":
					case "审核员":
					case "研究员":
						userLevel = "7级";
						break;
					case "博士后":
					case "超级版主":
					case "网站编辑":
					case "高级研究员":
					case "荣誉开发者":
						userLevel = "8级";
						break;
					case "管理员":
					case "信息监察员":
					case "资深研究员":
						userLevel = "9级";
						break;
				}
				userLevelText.innerHTML = `<p><a class="dj">${userLevel}</a></p>Lv`;
				userInfo.appendChild(userLevelText);
			}
		);
	},
	/**
	 * 隐藏底部信息块
	 */
	hideBottomInfoBlock() {
		log.info(`隐藏底部信息块`);
		return addStyle(/*css*/ `
			.pls .favatar>*:not([id^="userinfo"]+div){
				display: none;
			}
			.pls .favatar>div[id^="userinfo"],
			.pls .favatar>div.tns{
				display: block;
			}
			.t_f{
				min-height: 100px !important;
			}
		`);
	},
};
