import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import beautifyMarkdownCSS from "./css/beautifyMarkdown.css?raw";
import beautifyButtonCSS from "./css/beautifyButton.css?raw";
import beautifyRadioCSS from "./css/beautifyRadio.css?raw";
import beautifyInputCSS from "./css/beautifyInput.css?raw";
import beautifyTextAreaCSS from "./css/beautifyTextArea.css?raw";
import beautifyUploadImageCSS from "./css/beautifyUploadImage.css?raw";
import compatibleBeautifyCSS from "./css/compatibleBeautify.css?raw";
import beautifyTopNavigationBarCSS from "./css/beautifyTopNavigationBar.css?raw";
import { DOMUtils, log, utils } from "@/env";
import i18next from "i18next";
import { CommonUtil } from "@/utils/CommonUtil";

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
		result.push(GM_addStyle(beautifyMarkdownCSS));
		result.push(GM_addStyle(beautifyButtonCSS));
		result.push(GM_addStyle(beautifyRadioCSS));
		result.push(GM_addStyle(beautifyInputCSS));
		result.push(GM_addStyle(beautifyTextAreaCSS));
		result.push(
			GM_addStyle(/*css*/ `
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

			if (
				globalThis.location.pathname.endsWith("/admin") &&
				!document.querySelector('input[type="submit"][name="update-only"]')
			) {
				result.push(
					GM_addStyle(/*css*/ `
					.indented{
						padding-left: unset;
					}
					`)
				);
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
		result.push(GM_addStyle(compatibleBeautifyCSS));
		if (utils.isPhone()) {
			/* 移动端 */
			result.push(
				GM_addStyle(/*css*/ `
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
				GM_addStyle(/*css*/ `
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
		result.push(GM_addStyle(beautifyUploadImageCSS));
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
					log.info(["选择的图片", chooseImageFiles]);
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
					log.info(["触发粘贴事件", event]);
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
		result.push(GM_addStyle(beautifyTopNavigationBarCSS));
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
