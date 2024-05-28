import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import beautifyMarkdownCSS from "./css/beautifyMarkdown.css?raw";
import beautifyButtonCSS from "./css/beautifyButton.css?raw";
import beautifyRadioCSS from "./css/beautifyRadio.css?raw";
import beautifyTextAreaCSS from "./css/beautifyTextArea.css?raw";
import notUseBeautifyCSS from "./css/notUseBeautify.css?raw";
import beautifyVersionsPageCSS from "./css/beautifyVersionsPage.css?raw";
import beautifyUploadImageCSS from "./css/beautifyUploadImage.css?raw";
import compatibleBeautifyCSS from "./css/compatibleBeautify.css?raw";
import { DOMUtils, log, utils } from "@/env";
import Qmsg from "qmsg";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";

const GreasyforkBeautify = {
	init() {
		console.log(PopsPanel);
		PopsPanel.execMenuOnce("beautifyPage", () => {
			this.beautifyPageElement();
		});
		if (GreasyforkRouter.isVersion()) {
			PopsPanel.execMenuOnce("beautifyHistoryVersionPage", () => {
				this.beautifyHistoryVersionPage();
			});
		}
		PopsPanel.execMenuOnce("beautifyGreasyforkBeautify", () => {
			this.beautifyGreasyforkBeautify();
		});
		PopsPanel.execMenuOnce("beautifyUploadImage", () => {
			this.beautifyUploadImage();
		});
	},

	/**
	 * 美化页面元素
	 */
	beautifyPageElement() {
		log.info("美化页面元素");
		GM_addStyle(beautifyMarkdownCSS);
		GM_addStyle(beautifyButtonCSS);
		GM_addStyle(beautifyRadioCSS);
		GM_addStyle(beautifyTextAreaCSS);
		GM_addStyle(`
        p:has(input[type="submit"][name="update-and-sync"]){
          margin-top: 10px;
        }
        `);
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
				GM_addStyle(`
                .indented{
                    padding-left: unset;
                }
                `);
			}
		});
	},
	/**
	 * 美化 历史版本 页面
	 */
	beautifyHistoryVersionPage() {
		log.info("美化 历史版本 页面");
		let displayCSS = `
        .version-number,
        .version-date,
        .version-changelog{
          display: none;
        }
        `;
		/* 美化version页面 */
		GM_addStyle(beautifyVersionsPageCSS);
		GM_addStyle(displayCSS);
		DOMUtils.ready(function () {
			let historyVersionsULElement = document.querySelector(
				"ul.history_versions"
			);
			if (!historyVersionsULElement) {
				Qmsg.error("未找到history_versions元素列表");
				return;
			}
			/* 遍历每一个版本块 */
			Array.from(historyVersionsULElement.children).forEach((liElement) => {
				/* 版本链接 */
				let versionUrl =
					liElement.querySelector<HTMLAnchorElement>(".version-number a")!.href;
				/* 版本号 */
				let versionNumber =
					liElement.querySelector<HTMLAnchorElement>(
						".version-number a"
					)!.innerText;
				/* 更新日期 */
				let versionDate = liElement
					.querySelector(".version-date")
					?.getAttribute("datetime") as string;
				/* 更新日志 */
				let updateNote =
					liElement.querySelector(".version-changelog")?.innerHTML || "";

				let versionDateElement = DOMUtils.createElement("span", {
					className: "script-version-date",
					innerHTML: utils.formatTime(versionDate, "yyyy年MM月dd日 HH:mm:ss"),
				});
				let tagElement = DOMUtils.createElement("div", {
					className: "script-tag",
					innerHTML: `
                    <div class="script-tag-version">
                        <a href="${versionUrl}}" class="flex-align-item-center">
                        <svg aria-label="Tag" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                        </svg>
                        <span>${versionNumber}</span>
                        </a>
                    </div>`,
				});
				let boxBodyElement = DOMUtils.createElement("div", {
					className: "script-note-box-body",
					innerHTML: updateNote,
				});
				liElement.appendChild(versionDateElement);
				liElement.appendChild(tagElement);
				liElement.appendChild(boxBodyElement);
			});
		});
	},

	/**
	 * 美化 Greasyfork Beautify脚本
	 */
	beautifyGreasyforkBeautify() {
		log.info("美化 Greasyfork Beautify脚本");
		GM_addStyle(compatibleBeautifyCSS);
		if (utils.isPhone()) {
			/* 移动端 */
			GM_addStyle(`
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
            }`);
		} else {
			GM_addStyle(`
            section#script-info{
                margin-top: 10px;
            }`);
		}
	},
	/**
	 * 美化上传图片
	 */
	beautifyUploadImage() {
		GM_addStyle(beautifyUploadImageCSS);
		DOMUtils.ready(function () {
			/**
			 * 清空错误的提示
			 * @param element
			 */
			function clearErrorTip(element: HTMLElement) {
				while (element.nextElementSibling) {
					element.parentElement!.removeChild(element.nextElementSibling);
				}
			}
			let fileElementList =
				document.querySelectorAll<HTMLInputElement>('input[type="file"]');
			fileElementList.forEach((fileElement) => {
				if (fileElement.getAttribute("name") === "code_upload") {
					return;
				}
				if (
					fileElement.hasAttribute("accept") &&
					fileElement.getAttribute("accept")!.includes("javascript")
				) {
					return;
				}
				DOMUtils.on<InputEvent>(fileElement, "change", function (event) {
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
							fileElement,
							DOMUtils.createElement("p", {
								textContent: `❌ 最多同时长传5张图片`,
							})
						);
					}
					let notAllowImage: File[] = [];
					Array.from(chooseImageFiles).forEach((imageFile) => {
						if (
							imageFile.size > 204800 ||
							!imageFile.type.match(/png|gif|jpeg|webp/i)
						) {
							notAllowImage.push(imageFile);
						}
					});
					if (notAllowImage.length === 0) {
						return;
					}
					notAllowImage.forEach((imageFile) => {
						DOMUtils.after(
							fileElement,
							DOMUtils.createElement("p", {
								textContent: `❌ 图片：${
									imageFile.name
								} 大小：${utils.formatByteToSize(imageFile.size)}`,
							})
						);
					});
				});
			});
		});
	},
};

export { GreasyforkBeautify };
