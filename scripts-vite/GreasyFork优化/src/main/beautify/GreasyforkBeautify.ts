import { Panel } from "@components/setting/panel";
import beautifyMarkdownCSS from "./css/beautifyMarkdown.css?raw";
import beautifyButtonCSS from "./css/beautifyButton.css?raw";
import beautifyRadioCSS from "./css/beautifyRadio.css?raw";
import beautifyInputCSS from "./css/beautifyInput.css?raw";
import beautifyTextAreaCSS from "./css/beautifyTextArea.css?raw";
import beautifyUploadImageCSS from "./css/beautifyUploadImage.css?raw";
import compatibleBeautifyCSS from "./css/compatibleBeautify.css?raw";
import beautifyTopNavigationBarCSS from "./css/beautifyTopNavigationBar.css?raw";
import beautifyHomeCSS from "./css/beautifyHome.css?raw";
import beautifyFeedbackCSS from "./css/beautifyFeedback.css?raw";
import { $, $$, addStyle, DOMUtils, log, utils } from "@/env";
import i18next from "i18next";
import { CommonUtil } from "@components/utils/CommonUtil";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";

export const GreasyforkBeautify = {
	init() {
		Panel.execMenuOnce("beautifyPage", () => {
			return this.beautifyPageElement();
		});
		Panel.execMenuOnce("beautifyGreasyforkBeautify", () => {
			return this.beautifyGreasyforkBeautify();
		});
		Panel.execMenuOnce("beautifyUploadImage", () => {
			return this.beautifyUploadImage();
		});
		Panel.execMenuOnce("beautifyTopNavigationBar", () => {
			return this.beautifyTopNavigationBar();
		});
	},
	/**
	 * 美化页面元素，包括Markdown
	 */
	beautifyPageElement() {
		log.info("美化页面元素");
		let result = [];
		result.push(addStyle(beautifyMarkdownCSS));
		result.push(addStyle(beautifyButtonCSS));
		result.push(addStyle(beautifyRadioCSS));
		result.push(addStyle(beautifyInputCSS));
		result.push(addStyle(beautifyTextAreaCSS));
		result.push(
			addStyle(/*css*/ `
			p:has(input[type="submit"][name="update-and-sync"]){
			  margin-top: 10px;
			}
			`)
		);
		DOMUtils.ready(() => {
			let $markupChoice = $<HTMLAnchorElement>(
				'a[target="markup_choice"][href*="daringfireball.net"]'
			);
			if ($markupChoice) {
				$markupChoice.parentElement!.replaceChild(
					DOMUtils.createElement("span", {
						textContent: "Markdown",
					}),
					$markupChoice
				);
			}

			// markdown 解析任务列表并转换
			// [x]
			// []
			$$<HTMLLIElement>(".user-content ul li").forEach(($li) => {
				let $first = $li.firstChild;
				if ($first?.nodeName === "#text") {
					if ($first.textContent?.startsWith("[x] ")) {
						$first.textContent = $first.textContent!.replace("[x] ", "");
						DOMUtils.prepend(
							$li,
							/*html*/ `
							<input type="checkbox" disabled="" class="task-list-item-checkbox" checked="">
						`
						);
					} else if ($first.textContent?.startsWith("[ ] ")) {
						$first.textContent = $first.textContent!.replace("[ ] ", "");
						DOMUtils.prepend(
							$li,
							/*html*/ `
							<input type="checkbox" disabled="" class="task-list-item-checkbox">
						`
						);
					}
				}
			});

			// github风格的警告列表
			// > [!NOTE]
			// > 有用的信息，用户在浏览内容时应该知道。

			// > [!TIP]
			// > 提供更好或更容易做事的有益建议。

			// > [!IMPORTANT]
			// > 用户为了实现目标所需的关键信息。

			// > [!WARNING]
			// > 紧急信息，需要用户立即注意以避免问题。

			// > [!CAUTION]
			// > 关于某些操作的风险或负面结果的建议。
			let warningListMap = {
				"[!NOTE]": /*html*/ `
					<p class="markdown-alert-title" data-type="NOTE">
						<svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16">
							<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
						</svg>Note
					</p>
				`,
				"[!TIP]": /*html*/ `
					<p class="markdown-alert-title" data-type="TIP">
						<svg class="octicon octicon-light-bulb mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
							<path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
						</svg>Tip
					</p>
				`,
				"[!IMPORTANT]": /*html*/ `
					<p class="markdown-alert-title" data-type="IMPORTANT">
						<svg class="octicon octicon-report mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
						</svg>Important
					</p>
				`,
				"[!WARNING]": /*html*/ `
					<p class="markdown-alert-title" data-type="WARNING">
						<svg class="octicon octicon-alert mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
						</svg>Warning
					</p>
				`,
				"[!CAUTION]": /*html*/ `
					<p class="markdown-alert-title" data-type="CAUTION">
						<svg class="octicon octicon-stop mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
						</svg>Caution
					</p>
				`,
			};
			let warningList = Object.keys(warningListMap);
			$$<HTMLElement>(".user-content blockquote").forEach(($blockQuote) => {
				Array.from($blockQuote.children).forEach(($child) => {
					let htmlStr = DOMUtils.html($child as HTMLElement);
					if ($child.nodeName === "P") {
						let findValue = warningList.find((value) => {
							return htmlStr.toLowerCase().startsWith(value.toLowerCase());
						});
						if (findValue) {
							DOMUtils.html(
								$child as HTMLElement,
								htmlStr.replace(findValue, "")
							);
							DOMUtils.before(
								$child as HTMLElement,
								warningListMap[findValue as keyof typeof warningListMap]
							);
							if (DOMUtils.html($child as HTMLElement) === "") {
								$child.remove();
							}
						}
					}
				});
			});
			// 把警告列表的样式进行迁移合并
			$$<HTMLElement>(".user-content > blockquote").forEach(($blockQuote) => {
				Array.from(
					$blockQuote.querySelectorAll<HTMLElement>(".markdown-alert-title")
				).forEach(($markdownAlertTitle) => {
					let $markdownAlert = DOMUtils.createElement(
						"div",
						{
							className: "markdown-alert markdown-alert-tip",
						},
						{
							"data-type": $markdownAlertTitle.getAttribute("data-type")!,
						}
					);
					while ($markdownAlertTitle.nextSibling) {
						if (
							(
								$markdownAlertTitle.nextSibling as HTMLElement
							)?.classList?.contains("markdown-alert-title")
						) {
							break;
						}
						DOMUtils.append(
							$markdownAlert,
							$markdownAlertTitle.nextSibling as HTMLElement
						);
					}
					DOMUtils.prepend($markdownAlert, $markdownAlertTitle);
					DOMUtils.before($blockQuote, $markdownAlert);
				});
			});

			if (GreasyforkRouter.isHome()) {
				result.push(addStyle(beautifyHomeCSS));
			} else if (GreasyforkRouter.isScriptsFeedback()) {
				result.push(addStyle(beautifyFeedbackCSS));
				let $noRating = $<HTMLElement>(
					'.radio-label[for*="discussion_rating_0"]'
				);
				if ($noRating) {
					$noRating.innerHTML = $noRating.innerHTML.replace(
						"不评分",
						'<span class="rating-icon rating-icon-none">不评分</span>'
					);
				}
				let $badRating = $<HTMLElement>(
					'.radio-label[for*="discussion_rating_2"]'
				);
				if ($badRating) {
					$badRating.innerHTML = $badRating.innerHTML.replace(
						"差评",
						'<span class="rating-icon rating-icon-bad">差评</span>'
					);
				}
				let $okRating = $<HTMLElement>(
					'.radio-label[for*="discussion_rating_3"]'
				);
				if ($okRating) {
					$okRating.innerHTML = $okRating.innerHTML.replace(
						"一般",
						'<span class="rating-icon rating-icon-ok">一般</span>'
					);
				}
				let $goodRating = $<HTMLElement>(
					'.radio-label[for*="discussion_rating_4"]'
				);
				if ($goodRating) {
					$goodRating.innerHTML = $goodRating.innerHTML.replace(
						"好评",
						'<span class="rating-icon rating-icon-good">好评</span>'
					);
				}
			} else if (GreasyforkRouter.isScriptAdmin()) {
				if (!$('input[type="submit"][name="update-only"]')) {
					result.push(
						addStyle(/*css*/ `
					.indented{
						padding-left: unset;
					}
					`)
					);
				}
			}
		});

		return result;
	},
	/**
	 * 美化 Greasyfork Beautify脚本
	 */
	beautifyGreasyforkBeautify() {
		log.info("美化 Greasyfork Beautify脚本");
		let result = [];
		result.push(addStyle(compatibleBeautifyCSS));
		if (utils.isPhone()) {
			/* 移动端 */
			result.push(
				addStyle(/*css*/ `
				section#script-info,
				section.text-content,
				div.width-constraint table.text-content.log-table{
					margin-top: 80px;
				}
				
				div.width-constraint div.sidebarred{
					padding-top: 80px;
				}
				div.width-constraint div.sidebarred .sidebar{
					top: 80px;
				}`)
			);
		} else {
			result.push(
				addStyle(/*css*/ `
				section#script-info{
					margin-top: 10px;
				}`)
			);
		}
		return result;
	},
	/**
	 * 美化上传图片
	 */
	beautifyUploadImage() {
		log.info("美化上传图片");
		let result = [];
		result.push(addStyle(beautifyUploadImageCSS));
		DOMUtils.ready(() => {
			/**
			 * 清空错误的提示
			 * @param element
			 */
			function clearErrorTip(element: HTMLElement) {
				while (element.nextElementSibling) {
					element.parentElement!.removeChild(element.nextElementSibling);
				}
			}
			let $fileInputList = $$<HTMLInputElement>('input[type="file"]');

			$fileInputList.forEach(($input) => {
				if ($input.getAttribute("name") === "code_upload") {
					return;
				}
				if (
					$input.hasAttribute("accept") &&
					$input.getAttribute("accept")!.includes("javascript")
				) {
					return;
				}
				DOMUtils.on($input, ["propertychange", "input"], function (event) {
					clearErrorTip(event.target as HTMLInputElement);
					let chooseImageFiles = (event.currentTarget as HTMLInputElement)
						.files;
					if (!chooseImageFiles) {
						return;
					}
					if (chooseImageFiles.length === 0) {
						return;
					}
					log.info("选择的图片", chooseImageFiles);
					if (chooseImageFiles.length > 5) {
						DOMUtils.after(
							$input,
							DOMUtils.createElement("p", {
								textContent: i18next.t(`❌ 最多同时长传5张图片`),
							})
						);
					}
					let notAllowImage: File[] = [];
					Array.from(chooseImageFiles).forEach((imageFile) => {
						if (
							imageFile.size > 204800 ||
							!imageFile.type.match(/png|jpg|jpeg|gif|apng|webp/i)
						) {
							notAllowImage.push(imageFile);
						}
					});
					if (notAllowImage.length === 0) {
						return;
					}
					notAllowImage.forEach((imageFile) => {
						DOMUtils.after(
							$input,
							DOMUtils.createElement("p", {
								textContent: i18next.t("❌ 图片：{{name}} 大小：{{size}}", {
									name: imageFile.name,
									size: imageFile.size,
								}),
							})
						);
					});
				});
			});
			let $textAreaSelectorString = [
				/* 某条反馈内的回复框 */
				"textarea#comment_text",
				/* 反馈页面的回复框 */
				"textarea.comment-entry",
			];
			$textAreaSelectorString.forEach((selector) => {
				DOMUtils.on(selector, "paste", (event) => {
					log.info("触发粘贴事件", event);
					setTimeout(() => {
						/* 主动触发input */
						DOMUtils.trigger($fileInputList, "input");
					}, 100);
				});
			});
		});
		return result;
	},
	/**
	 * 美化顶部导航栏
	 */
	beautifyTopNavigationBar() {
		log.info("美化顶部导航栏");
		let result: (HTMLStyleElement | undefined)[] = [];
		result.push(addStyle(beautifyTopNavigationBarCSS));
		if (window.outerWidth > 550) {
			result.push(CommonUtil.addBlockCSS(".with-submenu"));
			DOMUtils.ready(() => {
				let $siteNav = $<HTMLElement>("#site-nav")!;
				let $siteNavNav = $siteNav.querySelector<HTMLElement>("nav")!;
				// 把更多的内容添加到顶部导航栏中
				$$<HTMLLIElement>(".with-submenu nav li").forEach(($ele) => {
					$siteNavNav.appendChild($ele);
				});
			});
		}

		return result;
	},
};
