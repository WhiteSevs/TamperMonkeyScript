import { PopsPanel } from "@/setting/setting";
import "./css/OwnCSS.css";
import { $$, addStyle, DOMUtils, httpx, log, pops, utils } from "@/env";
import Qmsg from "qmsg";
import { GreasyforkApi } from "@/api/GreasyForkApi";
import { GM_getResourceText, GM_getValue, GM_setValue } from "ViteGM";
import { GreasyforkBeautify } from "./beautify/GreasyforkBeautify";
import { GreasyforkMenu } from "./GreasyforkMenu";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import { GreasyforkAccount } from "./GreasyforkAccount";
import Viewer from "viewerjs";
import ViewerCSS from "viewerjs/dist/viewer.css?raw";
import { GreasyforkForum as GreasyforkDiscussions } from "./navigator/discussions/GreasyforkDiscussions";
import i18next from "i18next";
import { GreasyforkScripts } from "./navigator/scripts/GreasyforkScripts";
import { GreasyforkScriptsList } from "./navigator/scripts/GreasyforkScriptsList";
import { CommonUtil } from "@/utils/CommonUtil";
import { GreasyforkUsers } from "./navigator/users/GreasyforkUsers";
import { GreasyforkShortCut } from "./GreasyforkShortCut";
import { GreasyforkConversations } from "./navigator/users/conversations/GreasyforkConversations";
import { GreasyforkRememberFormTextArea } from "./GreasyforkRememberFormTextArea";
import { GreasyforkScriptsSearch } from "./navigator/scripts-search/GreasyforkScriptsSearch";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import { GreasyforkElementUtils } from "@/utils/GreasyforkElementUtils";
import { PanelUISize } from "@/setting/panel-ui-size";

const Greasyfork = {
	init() {
		if (GreasyforkRouter.isImageSource()) {
			log.info(`Router: 资源界面，不执行脚本功能`);
			return;
		}
		PopsPanel.execMenu("checkPage", () => {
			this.checkPage();
		});
		GreasyforkBeautify.init();
		GreasyforkShortCut.init();
		if (GreasyforkRouter.isScript()) {
			GreasyforkScripts.init();
		}
		if (
			GreasyforkRouter.isScriptList() ||
			GreasyforkRouter.isScriptLibraryList() ||
			GreasyforkRouter.isScriptCodeSearch() ||
			GreasyforkRouter.isScriptsBySite()
		) {
			GreasyforkScriptsList.init();
		}
		if (GreasyforkRouter.isDiscuessions()) {
			log.info(`Router: 讨论页面`);
			GreasyforkDiscussions.init();
		} else if (GreasyforkRouter.isUsers()) {
			log.info(`Router: 用户页面`);
			GreasyforkUsers.init();
			if (GreasyforkRouter.isUsersConversations()) {
				log.info(`Router-next: 私聊用户页面`);
				GreasyforkConversations.init();
			}
		} else if (GreasyforkRouter.isScriptSearch()) {
			log.info(`Router: 脚本搜索页面`);
			GreasyforkScriptsSearch.init();
		}
		PopsPanel.execMenuOnce("scripts-addOperationPanelBtnWithNavigator", () => {
			this.addOperationPanelBtnWithNavigator();
		});
		DOMUtils.ready(() => {
			GreasyforkMenu.initEnv();
			GreasyforkAccount.init();
			GreasyforkRememberFormTextArea.init();
			GreasyforkMenu.handleLocalGotoCallBack();
			PopsPanel.execMenuOnce("fixImageWidth", () => {
				Greasyfork.fixImageWidth();
			});
			Greasyfork.languageSelectorLocale();
			PopsPanel.execMenuOnce("optimizeImageBrowsing", () => {
				Greasyfork.optimizeImageBrowsing();
			});
			PopsPanel.execMenuOnce("overlayBedImageClickEvent", () => {
				Greasyfork.overlayBedImageClickEvent();
			});
			/* 不在/code页面添加Markdown复制按钮 */
			if (!GreasyforkRouter.isCodeStrict()) {
				PopsPanel.execMenuOnce("addMarkdownCopyButton", () => {
					Greasyfork.addMarkdownCopyButton();
				});
			}
		});
	},
	/**
	 * 修复图片宽度显示问题
	 */
	fixImageWidth() {
		if (window.innerWidth < window.innerHeight) {
			log.info("修复图片显示问题");
			addStyle(/*css*/ `
            img.lum-img{
                width: 100% !important;
                height: 100% !important;
            }
          `);
		}
	},
	/**
	 * 优化图片浏览
	 */
	optimizeImageBrowsing() {
		log.info("优化图片浏览");
		if (import.meta.env.DEV) {
			addStyle(ViewerCSS);
		} else {
			addStyle(GM_getResourceText("ViewerCSS"));
		}
		addStyle(/*css*/ `
        @media (max-width: 460px) {
          .lum-lightbox-image-wrapper {
              display:flex;
              overflow: auto;
              -webkit-overflow-scrolling: touch
          }
      
          .lum-lightbox-caption {
              width: 100%;
              position: absolute;
              bottom: 0
          }
      
          .lum-lightbox-position-helper {
              margin: auto
          }
      
          .lum-lightbox-inner img {
              max-width:100%;
              max-height:100%;
          }
        }
        `);
		/**
		 * 查看图片
		 * @param imgList
		 * @param viewIndex
		 */
		function viewIMG(imgList: string[] = [], viewIndex = 0) {
			let viewerULNodeHTML = "";
			imgList.forEach((item) => {
				viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
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
			viewIndex = viewIndex < 0 ? 0 : viewIndex;
			viewer.view(viewIndex);
			viewer.zoomTo(1);
			viewer.show();
		}
		/**
		 * 获取<img>标签上的src属性
		 * @param element
		 */
		function getImgElementSrc(element: HTMLImageElement) {
			return (
				element.getAttribute("data-src") ||
				element.getAttribute("src") ||
				element.getAttribute("alt")
			);
		}
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			"img",
			function (event) {
				let $img = event.target as HTMLImageElement;
				/* 在超链接标签里 */
				if (
					$img.parentElement?.localName === "a" &&
					$img.hasAttribute("data-screenshots")
				) {
					return;
				}
				/* Viewer的图片浏览 */
				if ($img.closest(".viewer-container")) {
					return;
				}
				/* GreasFork自带的图片浏览 */
				if ($img.closest(".lum-lightbox-position-helper")) {
					return;
				}
				/* 判断是否是user-content内的，如果是，多图片模式 */
				let userContentElement = $img.closest(".user-content");
				/* 图片链接数组 */
				let imgList: string[] = [];
				/* 当前图片的下标 */
				let imgIndex = 0;
				/* 图片元素数组 */
				let imgElementList: HTMLImageElement[] = [];
				/* 当前的图片的链接 */
				let currentImgSrc = getImgElementSrc($img);
				if (currentImgSrc) {
					if (currentImgSrc.startsWith("https://img.shields.io")) {
						/** shields.io的图标 */
						return;
					} else if (currentImgSrc.startsWith("/vite/assets/")) {
						// gf的资源
						return;
					}
				}

				if (userContentElement) {
					userContentElement
						.querySelectorAll("img")
						.forEach((childImgElement) => {
							imgElementList.push(childImgElement);
							let imgSrc = getImgElementSrc(childImgElement);
							let $parent = childImgElement.parentElement as HTMLAnchorElement;
							if ($parent?.localName === "a") {
								imgSrc = $parent.getAttribute("data-href") || $parent.href;
							}
							imgList.push(imgSrc as string);
						});
					imgIndex = imgElementList.indexOf($img);
					if (imgIndex === -1) {
						imgIndex = 0;
					}
				} else {
					imgList.push(currentImgSrc as string);
					imgIndex = 0;
				}

				log.success("点击浏览图片👉", imgList, imgIndex);
				viewIMG(imgList, imgIndex);
			}
		);
		/* 把上传的图片使用自定义图片预览 */
		document.querySelectorAll(".user-screenshots").forEach((element) => {
			let linkElement = element.querySelector<HTMLAnchorElement>("a");
			if (!linkElement) {
				return;
			}
			let imgSrc =
				linkElement.getAttribute("data-href") ||
				linkElement.getAttribute("href");
			let imgElement = element.querySelector<HTMLImageElement>("img");
			if (!imgElement) {
				return;
			}
			imgElement.setAttribute("data-screenshots", "true");
			imgElement.setAttribute("data-src", imgSrc as string);
			linkElement.setAttribute("href", "javascript:;");
			/* img标签添加a标签后面 */
			DOMUtils.after(linkElement, imgElement);
			/* a标签删除 */
			linkElement.remove();
		});
	},
	/**
	 * 覆盖图床图片的parentElement的a标签
	 */
	overlayBedImageClickEvent() {
		log.info("覆盖图床图片的parentElement的a标签");
		document
			.querySelectorAll<HTMLImageElement>(".user-content a>img")
			.forEach((imgElement) => {
				let $link = imgElement.parentElement as HTMLAnchorElement;
				let url = $link.getAttribute("href")!;
				$link.setAttribute("data-href", url);
				$link.removeAttribute("href");
				if (url.startsWith("/rails/active_storage/blobs/redirect")) {
					log.info(`该图片是上传到Greasyfork的图片，拦截默认行为，不做提示`);
					return;
				}
				DOMUtils.on($link, "click", () => {
					Qmsg.warning(
						/*html*/ `<div style="overflow-wrap: anywhere;">${i18next.t(
							"拦截跳转："
						)}<a href="${url}" target="_blank">${url}</a></div>`,
						{
							html: true,
							zIndex: utils.getMaxZIndex() + 105,
						}
					);
				});
			});
	},
	/**
	 * 在Markdown右上角添加复制按钮
	 */
	addMarkdownCopyButton() {
		log.info("在Markdown右上角添加复制按钮");
		addStyle(/*css*/ `
        pre{
          position: relative;
          margin-bottom: 0px !important;
          width: 100%;
        }
        `);
		addStyle(/*css*/ `
        .snippet-clipboard-content{
            display: flex;
            justify-content: space-between;
            background: rgb(246, 248, 250);
            margin-bottom: 16px;
            position: relative;
        }
        .zeroclipboard-container {
            right: 0;
            top: 0;
            position: absolute;
            box-sizing: border-box;
            display: flex;
            font-size: 16px;
            line-height: 24px;
            text-size-adjust: 100%;
            overflow-wrap: break-word;
            width: fit-content;
            height: fit-content;
        }
        .zeroclipboard-container svg{
            vertical-align: text-bottom;
            display: inline-block;
            overflow: visible;
            fill: currentColor;
            margin: 8px;
        }
        .zeroclipboard-container svg[aria-hidden="true"]{
            display: none;
        }
        clipboard-copy.js-clipboard-copy {
            position: relative;
            padding: 0px;
            color: rgb(36, 41, 47);
            background-color: rgb(246, 248, 250);
            transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
            transition-property: color,background-color,box-shadow,border-color;
            display: inline-block;
            font-size: 14px;
            line-height: 20px;
            white-space: nowrap;
            vertical-align: middle;
            cursor: pointer;
            -webkit-user-select: none;
            user-select: none;
            border: 1px solid rgba(31, 35, 40, 0.15);
            -webkit-appearance: none;
            appearance: none;
            box-shadow: rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
            margin: 8px;
            overflow-wrap: break-word;
            text-wrap: nowrap;
            border-radius: 6px;
        }
        clipboard-copy.js-clipboard-copy[success]{
            border-color: rgb(31, 136, 61);
            box-shadow: 0 0 0 0.2em rgba(52,208,88,.4);
        }
        clipboard-copy.js-clipboard-copy:hover{
            background-color: rgb(243, 244, 246);
            border-color: rgba(31, 35, 40, 0.15);
            transition-duration: .1s;
        }
        clipboard-copy.js-clipboard-copy:active{
            background-color: rgb(235, 236, 240);
            border-color: rgba(31, 35, 40, 0.15);
            transition: none;
        }
        `);
		addStyle(/*css*/ `
        .pops-tip.github-tooltip {
            border-radius: 6px;
            padding: 6px 8px;
        }
        
        .pops-tip.github-tooltip, .pops-tip.github-tooltip .pops-tip-arrow::after {
            background: rgb(36, 41, 47);
            color: #fff;
        }
        
        .pops-tip.github-tooltip .pops-tip-arrow::after {
            width: 8px;
            height: 8px;
        }
        `);
		/**
		 * 获取复制按钮元素
		 */
		function createCopyElement() {
			let $copy = DOMUtils.createElement("div", {
				className: "zeroclipboard-container",
				innerHTML: /*html*/ `
				<clipboard-copy class="js-clipboard-copy">
				<svg height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-copy">
					<path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
				</svg>
				<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-check-copy">
					<path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
				</svg>
				</clipboard-copy>
            `,
			});
			let clipboardCopyElement = $copy.querySelector<HTMLElement>(
				".js-clipboard-copy"
			) as HTMLElement;
			let octiconCopyElement = $copy.querySelector<HTMLElement>(
				".octicon-copy"
			) as HTMLElement;
			let octiconCheckCopyElement = $copy.querySelector<HTMLElement>(
				".octicon-check-copy"
			) as HTMLElement;
			DOMUtils.on($copy, "click", () => {
				// .snippet-clipboard-content
				let $parent = DOMUtils.parent($copy);
				let $code = $parent.querySelector<HTMLElement>("code");
				if (!$code && $parent.className.includes("prettyprinted")) {
					/* 在gf的/code的复制 */
					$code = $copy.parentElement;
				}
				if (!$code) {
					// <code>元素也没有，只有<pre>
					$code = $parent.querySelector<HTMLElement>("pre");
				}
				if (!$code) {
					Qmsg.error(i18next.t("未找到{{selector}}元素", { selector: "code" }));
					return;
				}
				utils.setClip(DOMUtils.text($code));
				clipboardCopyElement.setAttribute("success", "true");
				octiconCopyElement.setAttribute("aria-hidden", "true");
				octiconCheckCopyElement.removeAttribute("aria-hidden");
				let tooltip = pops.tooltip({
					target: clipboardCopyElement,
					content: i18next.t("✅ 复制成功!"),
					position: "left",
					className: "github-tooltip",
					alwaysShow: true,
				});
				tooltip.toolTip.onToolTipAnimationFinishEvent();
				setTimeout(() => {
					clipboardCopyElement.removeAttribute("success");
					octiconCheckCopyElement.setAttribute("aria-hidden", "true");
					octiconCopyElement.removeAttribute("aria-hidden");
					tooltip.toolTip.close();
				}, 2000);
			});
			return $copy;
		}

		$$<HTMLPreElement>("pre").forEach((preElement) => {
			let zeroclipboardElement = preElement.querySelector(
				"div.zeroclipboard-container"
			);
			if (zeroclipboardElement) {
				return;
			}
			let copyElement = createCopyElement();
			let snippetClipboardContentElement = DOMUtils.createElement("div", {
				className: "snippet-clipboard-content",
			});
			DOMUtils.before(preElement, snippetClipboardContentElement);
			snippetClipboardContentElement.appendChild(preElement);
			snippetClipboardContentElement.appendChild(copyElement);
		});
	},
	/**
	 * 固定当前语言
	 */
	languageSelectorLocale() {
		let localeLanguage = PopsPanel.getValue<string>("language-selector-locale");
		let currentLocaleLanguage = window.location.pathname
			.split("/")
			.filter((item) => Boolean(item))[0];
		log.success("选择语言：" + localeLanguage);
		log.success("当前语言：" + currentLocaleLanguage);
		if (utils.isNull(localeLanguage)) {
			return;
		}
		if (localeLanguage === currentLocaleLanguage) {
			return;
		} else {
			let timer = null as any;
			let url = GreasyforkUrlUtils.getSwitchLanguageUrl(localeLanguage);
			GreasyforkApi.switchLanguage(url);
			log.success("新Url：" + url);
			Qmsg.loading(
				i18next.t(
					"当前语言：{{currentLocaleLanguage}}，，3秒后切换至：{{localeLanguage}}",
					{
						currentLocaleLanguage,
						localeLanguage,
					}
				),
				{
					timeout: 3000,
					showClose: true,
					onClose() {
						clearTimeout(timer);
					},
				}
			);
			Qmsg.info(i18next.t("导航至：") + url, {
				timeout: 3000,
			});
			timer = setTimeout(() => {
				window.location.href = url;
			}, 3000);
		}
	},
	/**
	 * 检测gf页面是否正确加载，有时候会出现
	 * We're down for maintenance. Check back again soon.
	 */
	checkPage() {
		log.info("检测gf页面是否正确加载，有时候会出现");
		DOMUtils.ready(() => {
			if (
				(document.body.firstElementChild as any) &&
				(document.body.firstElementChild as any).localName === "p" &&
				(document.body.firstElementChild as any).innerText.includes(
					"We're down for maintenance. Check back again soon."
				)
			) {
				// 先获取上一次刷新页面的时间
				let latestRefreshPageTime = parseInt(
					GM_getValue<string | number>(
						"greasyfork-check-page-time",
						0
					) as string
				);
				let checkPageTimeout = PopsPanel.getValue(
					"greasyfork-check-page-timeout",
					5
				);
				let checkPageTimeoutStamp = checkPageTimeout * 1000;
				if (
					latestRefreshPageTime &&
					Date.now() - latestRefreshPageTime < checkPageTimeoutStamp
				) {
					/* 上次重载时间在xx秒内的话就拒绝重载 */
					Qmsg.warning(
						i18next.t("上次重载时间 {{time}}，{{timeout}}秒内拒绝反复重载", {
							time: utils.formatTime(
								latestRefreshPageTime,
								"yyyy-MM-dd HH:mm:ss"
							),
							timeout: checkPageTimeout,
						})
					);
					return;
				}
				GM_setValue("greasyfork-check-page-time", Date.now());
				window.location.reload();
			}
		});
	},
	/**
	 * 在顶部导航栏添加【操作面板】按钮
	 */
	addOperationPanelBtnWithNavigator() {
		log.info("添加【操作面板】按钮");
		// 隐藏右侧列表
		CommonUtil.addBlockCSS(
			".sidebarred .sidebar",
			".sidebarred-main-content .open-sidebar"
		);
		addStyle(/*css*/ `
		.sidebarred .sidebarred-main-content{
			max-width: 100%;
		}	
		`);
		DOMUtils.ready(() => {
			let $nav = document.querySelector<HTMLElement>("#site-nav nav");
			let $subNav = document.querySelector<HTMLElement>(
				"#site-nav .with-submenu nav"
			);
			// 右侧的过滤菜单
			let $scriptsOptionGroups =
				document.querySelector<HTMLDivElement>("#script-list-option-groups")! ||
				document.querySelector<HTMLDivElement>(".list-option-groups")!;
			if (!$scriptsOptionGroups) {
				log.warn("不存在右侧面板元素#script-list-option-groups");
				return;
			}
			$scriptsOptionGroups = $scriptsOptionGroups.cloneNode(
				true
			) as HTMLDivElement;
			$scriptsOptionGroups.classList.add("option-panel-groups");
			GreasyforkElementUtils.registerTopNavMenu({
				name: i18next.t("操作面板"),
				className: "filter-scripts",
				clickEvent(event) {
					let $dialog = pops.alert({
						title: {
							text: i18next.t("操作面板"),
							position: "center",
						},
						content: {
							text: "",
							html: true,
						},
						btn: {
							ok: { enable: false },
						},
						mask: {
							enable: true,
							clickEvent: {
								toClose: true,
							},
						},
						drag: true,
						useShadowRoot: true,
						width: PanelUISize.setting.width,
						height: PanelUISize.setting.height,
						zIndex: utils.getMaxZIndex(100),
						style: /*css*/ `
						.pops-drawer-content div:first-child{
							margin: 20px;
						}
						.option-panel-groups > div{
						
						}
						.option-panel-groups ul{
							margin: .5em 0 0;
							list-style-type: none;
							padding: 1em 0;
							box-shadow: 0 0 5px #ddd;
							border: 1px solid #BBBBBB;
							border-radius: 5px;
							background-color: #fff;
						}
						.option-panel-groups ul li{
						
						}
						li.list-current{
							border-left: 7px solid #800;
							box-shadow: inset 0 1px #0000001a, inset 0 -1px #0000001a;
							margin: 0 0 0 -4px;
							padding: .4em 1em .4em calc(1em - 3px);
							background: linear-gradient(#fff, #eee);
						}
						.list-option-group a {
							padding: .35em 1em;
							display: block;
						}
						.list-option-group {
							margin-bottom: 1em;
						}
						form.sidebar-search{
							display: flex;
							align-items: center;
							gap: 10px;
						}
						form.sidebar-search input[type="search"]{
							display: inline-flex;
							justify-content: center;
							align-items: center;
							line-height: 1;
							height: 32px;
							white-space: nowrap;
							cursor: text;
							text-align: center;
							box-sizing: border-box;
							outline: 0;
							transition: 0.1s;
							font-weight: 500;
							user-select: none;
							-webkit-user-select: none;
							-moz-user-select: none;
							-ms-user-select: none;
							vertical-align: middle;
							-webkit-appearance: none;
							appearance: none;
							background-color: transparent;
							border: 0;
							padding: 8px 8px;
							font-size: 14px;
							text-align: start;
							/* width: 100%; */
							// flex: 1;
							display: flex;
							align-items: center;
							border: 1px solid #dcdfe6;
							border-radius: 4px;
							background-color: #ffffff;
						}
						form.sidebar-search input[type="submit"]{
							width: 32px;
							height: 32px;
						}
						`,
					});
					let $content = $dialog.$shadowRoot.querySelector<HTMLDivElement>(
						".pops-alert-content"
					)!;
					$content.appendChild($scriptsOptionGroups);
				},
			});
		});
	},
};

export { Greasyfork };
