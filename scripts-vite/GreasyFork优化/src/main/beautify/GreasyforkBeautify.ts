import { PopsPanel } from "@/setting/setting";
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
import { addStyle, DOMUtils, log, utils } from "@/env";
import i18next from "i18next";
import { CommonUtil } from "@/utils/CommonUtil";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";

export const GreasyforkBeautify = {
	init() {
		PopsPanel.execMenuOnce("beautifyPage", () => {
			return this.beautifyPageElement();
		});
		PopsPanel.execMenuOnce("beautifyGreasyforkBeautify", () => {
			return this.beautifyGreasyforkBeautify();
		});
		PopsPanel.execMenuOnce("beautifyUploadImage", () => {
			return this.beautifyUploadImage();
		});
		PopsPanel.execMenuOnce("beautifyTopNavigationBar", () => {
			return this.beautifyTopNavigationBar();
		});
	},

	/**
	 * 美化页面元素
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
		DOMUtils.ready(function () {
			let markupChoiceELement = document.querySelector<HTMLAnchorElement>(
				'a[target="markup_choice"][href*="daringfireball.net"]'
			);
			if (markupChoiceELement) {
				markupChoiceELement.parentElement!.replaceChild(
					DOMUtils.createElement("span", {
						textContent: "Markdown",
					}),
					markupChoiceELement
				);
			}

			if (GreasyforkRouter.isHome()) {
				result.push(addStyle(beautifyHomeCSS));
			} else if (GreasyforkRouter.isScriptsFeedback()) {
				result.push(addStyle(beautifyFeedbackCSS));
				let $noRating = document.querySelector<HTMLElement>(
					'.radio-label[for*="discussion_rating_0"]'
				);
				if ($noRating) {
					$noRating.innerHTML = $noRating.innerHTML.replace(
						"不评分",
						'<span class="rating-icon rating-icon-none">不评分</span>'
					);
				}
				let $badRating = document.querySelector<HTMLElement>(
					'.radio-label[for*="discussion_rating_2"]'
				);
				if ($badRating) {
					$badRating.innerHTML = $badRating.innerHTML.replace(
						"差评",
						'<span class="rating-icon rating-icon-bad">差评</span>'
					);
				}
				let $okRating = document.querySelector<HTMLElement>(
					'.radio-label[for*="discussion_rating_3"]'
				);
				if ($okRating) {
					$okRating.innerHTML = $okRating.innerHTML.replace(
						"一般",
						'<span class="rating-icon rating-icon-ok">一般</span>'
					);
				}
				let $goodRating = document.querySelector<HTMLElement>(
					'.radio-label[for*="discussion_rating_4"]'
				);
				if ($goodRating) {
					$goodRating.innerHTML = $goodRating.innerHTML.replace(
						"好评",
						'<span class="rating-icon rating-icon-good">好评</span>'
					);
				}
			} else if (GreasyforkRouter.isScriptAdmin()) {
				if (
					!document.querySelector('input[type="submit"][name="update-only"]')
				) {
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
			let $fileInputList =
				document.querySelectorAll<HTMLInputElement>('input[type="file"]');

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
		let result = [];
		result.push(addStyle(beautifyTopNavigationBarCSS));
		if (window.outerWidth > 550) {
			result.push(CommonUtil.addBlockCSS(".with-submenu"));
			DOMUtils.ready(() => {
				let $siteNav = document.querySelector<HTMLElement>("#site-nav")!;
				let $siteNavNav = $siteNav.querySelector<HTMLElement>("nav")!;
				document
					.querySelectorAll<HTMLLIElement>(".with-submenu nav li")
					.forEach(($ele) => {
						$siteNavNav.appendChild($ele);
					});
			});
		}

		return result;
	},
};
