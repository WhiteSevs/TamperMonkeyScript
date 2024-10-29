import { $, $$, addStyle, DOMUtils, httpx, log, pops, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
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
		PopsPanel.execMenuOnce("mt-forum-post-autoExpandContent", () => {
			return this.autoExpandContent();
		});
		PopsPanel.execMenuOnce("mt-forum-post-repairImageWidth", () => {
			return this.repairImageWidth();
		});
		PopsPanel.execMenu("mt-forum-post-removeFontStyle", () => {
			this.removeFontStyle();
		});
		PopsPanel.execMenu("mt-forum-post-removeCommentFontStyle", () => {
			this.removeCommentFontStyle();
		});
		PopsPanel.execMenuOnce("mt-forum-post-hideBottomInfoBlock", () => {
			return this.hideBottomInfoBlock();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("mt-forum-post-loadNextPageComment", () => {
				this.loadNextPageComment();
			});
			PopsPanel.execMenuOnce("mt-forum-post-codeQuoteOptimization", () => {
				this.codeQuoteOptimization();
			});
			PopsPanel.execMenuOnce("mt-forum-post-optimizationImagePreview", () => {
				this.optimizationImagePreview();
			});
			PopsPanel.execMenuOnce("mt-forum-post-interceptionAttachment", () => {
				this.setAttachmentsClickTip();
			});
			PopsPanel.execMenu("mt-forum-post-detectingUserOnlineStatus", () => {
				this.detectingUserOnlineStatus();
			});
			PopsPanel.execMenu("mt-forum-post-showUserLevel", () => {
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
		log.info(`移除帖子字体效果`);
		let $messageTable = document.querySelector<HTMLElement>(
			".comiis_a.comiis_message_table"
		);
		if (!$messageTable) {
			return;
		}
		$messageTable.innerHTML = $messageTable.innerHTML.replace(
			MTRegExp.fontSpecial,
			""
		);
	},
	/**
	 * 移除评论区的字体效果
	 */
	removeCommentFontStyle() {
		log.info(`移除评论区的字体效果`);
		var fontNodeList = document.querySelectorAll("font");
		/* 帖子主内容 */
		var postForumMain =
			document.querySelector(".comiis_postlist .comiis_postli")?.innerHTML ||
			"";
		if (postForumMain !== "") {
			document.querySelectorAll("font").forEach(($font) => {
				/* font元素是帖子主内容的移除字体效果 */
				if (!postForumMain.includes($font.innerHTML)) {
					/* log.info(hide[i].innerHTML); */
					$font.removeAttribute("color");
					$font.removeAttribute("style");
					$font.removeAttribute("size");
				}
			});
			/* 帖子评论 */
			document
				.querySelectorAll<HTMLElement>(".comiis_message.message")
				.forEach(($message) => {
					if (postForumMain.includes($message.innerHTML)) {
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
		document
			.querySelectorAll(".comiis_postli.comiis_list_readimgs.nfqsqi")
			.forEach((item) => {
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
				headers: {
					"User-Agent": utils.getRandomPCUA(),
				},
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
					if (!pageInfo["url"]) {
						log.error("最后一页，取消监听");
						DOMUtils.off(document, "scroll", lockFn.run);
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
		DOMUtils.on(document, "scroll", lockFn.run);
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
		function viewIMG(imgList: string[] = [], index: number = 0) {
			/* 查看图片 */
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
		function handleImage() {
			document
				.querySelectorAll<HTMLElement>(
					"#postlist .comiis_vrx:not([data-isHandlingViewIMG])"
				)
				.forEach((item) => {
					item.setAttribute("data-isHandlingViewIMG", "true");
					let clickShowIMGList: string[] = []; /* 点击显示的图片组 */
					item.querySelectorAll("img").forEach(($img) => {
						/* 图片链接 */
						let IMG_URL = $img.src;
						/* 主机名 */
						let IMG_URL_HOSTNAME = new URL(IMG_URL).hostname;
						/* 路径 */
						let IMG_URL_PATHNAME = new URL(IMG_URL).pathname;
						/* img标签的父元素 */
						let imgParentNode = $img.parentElement!;
						if (
							imgParentNode.nodeName.toLowerCase() === "a" &&
							imgParentNode.getAttribute("href") === IMG_URL
						) {
							imgParentNode.setAttribute("href", "javascript:;");
							imgParentNode.removeAttribute("target");
						}
						let isMatching = false;
						/* 图片黑名单 */
						for (let item of blackListNoViewIMG) {
							if (
								IMG_URL_HOSTNAME.indexOf(item["hostName"]) != -1 &&
								IMG_URL_PATHNAME.match(item["pathName"])
							) {
								isMatching = true;
								break;
							}
						}
						if (isMatching) {
							return;
						}
						clickShowIMGList = [...clickShowIMGList, IMG_URL];
						$img.removeAttribute("onclick");
						$img.setAttribute("onclick", "");
						DOMUtils.on($img, "click", function () {
							log.info("点击图片", $img);
							let _index_ = clickShowIMGList.findIndex((_img_) => {
								return _img_ == IMG_URL;
							});
							viewIMG(clickShowIMGList, _index_);
						});
					});
				});
		}
		let lockFn = new utils.LockFunction(() => {
			handleImage();
		});
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
		var quanju: string[] = [];
		var cishu = 0;
		let $favatarList = Array.from(
			$$<HTMLElement>(".pls.favatar:not([data-is-detectingUserOnlineStatus])")
		);
		function getStatusIcon(isOffLine: boolean) {
			return DOMUtils.createElement(
				"img",
				{
					smilied: isOffLine ? "1353" : "1384",
					loading: "lazy",
					src: isOffLine
						? "https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png"
						: "https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png",
				},
				{
					style: "border:0;float:right;",
				}
			);
		}
		function setAvatarOnlineStatus($ele: HTMLElement, isOffLine: boolean) {
			let $icon = getStatusIcon(isOffLine);
			DOMUtils.prepend($ele, $icon);
		}
		for (let index = 0; index < $favatarList.length; index++) {
			const $favatar = $favatarList[index];
			var $sendMessage = $favatar.querySelector<HTMLElement>(".comiis_o.cl");
			if (!$sendMessage) {
				return;
			}
			let $kmfxx = $sendMessage.querySelector<HTMLAnchorElement>("a.kmfxx");
			if (!$kmfxx) {
				return;
			}
			$favatar.setAttribute("data-is-detectingUserOnlineStatus", "true");
			let sendMessageUrl = $kmfxx.href;
			let response = await httpx.get(sendMessageUrl, {
				fetch: true,
				allowInterceptConfig: false,
			});
			if (!response.status) {
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
				let userInfo = $userAvatar.querySelector<HTMLElement>("tr")!;
				let currentLevelText =
					$userAvatar.querySelector<HTMLElement>("p em")!.innerText;
				let userLevelText = document.createElement("td");
				userLevelText.setAttribute("style", "border-left: 1px solid #e3e3e3;");
				switch (currentLevelText) {
					case "幼儿园":
						userLevel = "1级";
						break;
					case "小学生":
						userLevel = "2级";
						break;
					case "初中生":
						userLevel = "3级";
						break;
					case "高中生":
						userLevel = "4级";
						break;
					case "大学生":
						userLevel = "5级";
						break;
					case "硕士生":
						userLevel = "6级";
						break;
					case "博士生":
					case "实习版主":
					case "版主":
					case "审核员":
						userLevel = "7级";
						break;
					case "博士后":
					case "超级版主":
					case "网站编辑":
						userLevel = "8级";
						break;
					case "管理员":
					case "信息监察员":
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
		`);
	},
};
