import { GlobalConfig } from "../../GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { PopsCSS } from "../../PopsCSS";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsLoading } from "../loading";
import { PopsFolderConfig } from "./config";
import { Folder_ICON } from "./folderIcon";
import type { PopsFolderDataConfig, PopsFolderDetails } from "./types";

export const PopsFolder = {
	init(details: PopsFolderDetails) {
		const guid = popsUtils.getRandomGUID();
		// 设置当前类型
		const PopsType = "folder";

		let config = PopsFolderConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		config = PopsHandler.handleOnly(PopsType, config);

		const { $shadowContainer, $shadowRoot } = PopsHandler.handlerShadow(config);
		PopsHandler.handleInit($shadowRoot, [
			{
				name: "index",
				css: PopsCSS.index,
			},
			{
				name: "ninePalaceGridPosition",
				css: PopsCSS.ninePalaceGridPosition,
			},
			{
				name: "scrollbar",
				css: PopsCSS.scrollbar,
			},
			{
				name: "button",
				css: PopsCSS.button,
			},
			{
				name: "anim",
				css: PopsCSS.anim,
			},
			{
				name: "common",
				css: PopsCSS.common,
			},
			{
				name: "folderCSS",
				css: PopsCSS.folderCSS,
			},
		]);

		/* 办公几件套 */
		// @ts-ignore
		Folder_ICON.docx = Folder_ICON.doc;
		// @ts-ignore;
		Folder_ICON.rtf = Folder_ICON.doc;
		// @ts-ignore
		Folder_ICON.xlsx = Folder_ICON.xls;
		// @ts-ignore
		Folder_ICON.pptx = Folder_ICON.ppt;
		// @ts-ignore;
		Folder_ICON.dmg = Folder_ICON.ipa;
		// @ts-ignore
		Folder_ICON.json = Folder_ICON.js;

		/* 压缩包 */
		let zipIconList = [
			"rar",
			"7z",
			"arj",
			"bz2",
			"cab",
			"iso",
			"jar",
			"lz",
			"lzh",
			"tar",
			"uue",
			"xz",
			"z",
			"zipx",
			"zst",
			"001",
		];

		/* 图片 */
		let imageIconList = ["jpg", "jpeg", "ico", "webp"];

		/* 代码语言 */
		let codeLanguageIconList = [
			"htm",
			"py",
			"vue",
			"bat",
			"sh",
			"vbs",
			"java",
			"kt",
		];

		/* Android安装包 */
		let androidIconList = ["apk", "apkm", "xapk"];

		zipIconList.forEach((keyName) => {
			// @ts-ignore
			Folder_ICON[keyName] = Folder_ICON.zip;
		});
		imageIconList.forEach((keyName) => {
			// @ts-ignore
			Folder_ICON[keyName] = Folder_ICON.png;
		});
		codeLanguageIconList.forEach((keyName) => {
			// @ts-ignore
			Folder_ICON[keyName] = Folder_ICON.html;
		});
		androidIconList.forEach((keyName) => {
			// @ts-ignore
			Folder_ICON[keyName] = Folder_ICON.apk;
		});

		if (details?.folder) {
			// @ts-ignore
			config.folder = details.folder;
		}

		// 先把z-index提取出来
		let zIndex = PopsHandler.handleZIndex(config.zIndex);
		let maskHTML = PopsElementHandler.getMaskHTML(guid, zIndex);

		let headerBtnHTML = PopsElementHandler.getHeaderBtnHTML(PopsType, config);
		let bottomBtnHTML = PopsElementHandler.getBottomBtnHTML(PopsType, config);
		let { headerStyle, headerPStyle } = PopsElementHandler.getHeaderStyle(
			PopsType,
			config
		);
		let animHTML = PopsElementHandler.getAnimHTML(
			guid,
			PopsType,
			config,
			/*html*/ `
            <div class="pops-title pops-${PopsType}-title" style="text-align: ${
				config.title.position
			};${headerStyle}">${
				config.title.html
					? config.title.text
					: `<p pops class="pops-${PopsType}-title-text" style="${headerPStyle}">${config.title.text}</p>`
			}${headerBtnHTML}</div>
			<div class="pops-content pops-${PopsType}-content ${
				popsUtils.isPhone() ? "pops-mobile-folder-content" : ""
			}">
                <div class="pops-folder-list">
                    <div class="pops-folder-file-list-breadcrumb">
                    <div class="pops-folder-file-list-breadcrumb-primary">
                        <span class="pops-folder-file-list-breadcrumb-allFiles cursor-p" title="全部文件">
                        <a>全部文件</a>
                        </span>
                    </div>
                    </div>
                    <div class="pops-folder-list-table__header-div">
                    <table class="pops-folder-list-table__header">
                        <colgroup>
                        <col width="52%">
                        <col width="24%">
                        <col width="16%">
                        </colgroup>
                        <thead>
                        <tr class="pops-folder-list-table__header-row">
                            <th class="pops-folder-list-table__header-th cursor-p">
                            <div class="text-ellip content flex-a-i-center">
                                <span>文件名</span>
                                <div class="pops-folder-list-table__sort" data-sort="fileName">
                                <div class="pops-folder-icon-arrow" data-sort="按文件名排序">
                                    <svg
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                        class="pops-folder-icon-arrow-up"></path>
                                    <path
                                        d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                        class="pops-folder-icon-arrow-down"></path>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </th>
                            <th class="pops-folder-list-table__header-th cursor-p">
                            <div class="text-ellip content flex-a-i-center">
                                <span>修改时间</span>
                                <div class="pops-folder-list-table__sort" data-sort="latestTime">
                                <div class="pops-folder-icon-arrow" title="按修改时间排序">
                                    <svg
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                        class="pops-folder-icon-arrow-up"></path>
                                    <path
                                        d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                        class="pops-folder-icon-arrow-down"></path>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </th>
                            <th class="pops-folder-list-table__header-th cursor-p">
                            <div class="text-ellip content flex-a-i-center">
                                <span>大小</span>
                                <div class="pops-folder-list-table__sort" data-sort="fileSize">
                                <div class="pops-folder-icon-arrow" title="按大小排序">
                                    <svg
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M509.624392 5.882457 57.127707 458.379143 962.121078 458.379143Z"
                                        class="pops-folder-icon-arrow-up"></path>
                                    <path
                                        d="M509.624392 1024 962.121078 571.503314 57.127707 571.503314Z"
                                        class="pops-folder-icon-arrow-down"></path>
                                    </svg>
                                </div>
                                </div>
                            </div>
                            </th>
                        </tr>
                        </thead>
                    </table>
                    </div>
                    <div class="pops-folder-list-table__body-div">
                    <table class="pops-folder-list-table__body">
                        <colgroup>
                        ${
													popsUtils.isPhone()
														? `<col width="100%">`
														: `
                            <col width="52%">
                            <col width="24%">
                            <col width="16%">`
												}
                        
                        </colgroup>
                        <tbody>
                        
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>${bottomBtnHTML}`,
			bottomBtnHTML,
			zIndex
		);
		/**
		 * 弹窗的主元素，包括动画层
		 */
		let $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);
		let {
			popsElement: $pops,
			titleElement: $title,
			contentElement: $content,

			// folderListElement,

			// folderListHeaderElement,

			// folderListHeaderRowElement,
			folderListBodyElement,
			folderFileListBreadcrumbPrimaryElement,
			headerCloseBtnElement: $btnCloseBtn,
			btnOkElement,
			btnCancelElement,
			btnOtherElement,
			folderListSortFileNameElement,
			folderListSortLatestTimeElement,
			folderListSortFileSizeElement,
		} = PopsHandler.handleQueryElement($anim, PopsType);

		/**
		 * 遮罩层元素
		 */
		let $mask: HTMLDivElement | null = null;
		/**
		 * 已创建的元素列表
		 */
		let elementList: HTMLElement[] = [$anim];

		if (config.mask.enable) {
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,
				config: config,
				animElement: $anim,
				maskHTML: maskHTML,
			});
			$mask = _handleMask_.maskElement;
			elementList.push($mask);
		}
		/* 事件 */
		let eventDetails = PopsHandler.handleEventDetails(
			guid,
			$shadowContainer,
			$shadowRoot,
			PopsType,
			$anim,
			$pops,
			$mask!,
			config
		);
		PopsHandler.handleClickEvent(
			"close",
			$btnCloseBtn,
			eventDetails,
			config.btn.close!.callback!
		);
		PopsHandler.handleClickEvent(
			"ok",
			btnOkElement,
			eventDetails,
			config.btn.ok!.callback!
		);
		PopsHandler.handleClickEvent(
			"cancel",
			btnCancelElement,
			eventDetails,
			config.btn.cancel!.callback!
		);
		PopsHandler.handleClickEvent(
			"other",
			btnOtherElement,
			eventDetails,
			config.btn.other!.callback!
		);
		/* 创建到页面中 */

		popsDOMUtils.append($shadowRoot, elementList);
		if (typeof config.beforeAppendToPageCallBack === "function") {
			config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
		}

		popsDOMUtils.appendBody($shadowContainer);
		if ($mask != null) {
			$anim.after($mask);
		}
		/* 添加文件信息 */
		config.folder.sort();
		/**
		 * 创建文件夹元素
		 * @param fileName
		 * @param latestTime
		 * @param [fileSize="-"]
		 * @param isFolder
		 */
		function createFolderRowElement(
			fileName: string,
			latestTime: string | number = "-",
			fileSize: string | number = "-",
			isFolder: boolean = false
		) {
			let origin_fileName = fileName;
			let origin_latestTime = latestTime;
			let origin_fileSize = fileSize;

			let folderELement = popsDOMUtils.createElement("tr");

			let fileNameElement = popsDOMUtils.createElement("td");

			let fileTimeElement = popsDOMUtils.createElement("td");

			let fileFormatSize = popsDOMUtils.createElement("td");
			let fileType = "";
			let fileIcon = Folder_ICON.folder;
			if (isFolder) {
				/* 文件夹 */
				latestTime = "";
				fileSize = "";
			} else {
				/* 文件 */
				fileIcon = "";
				if (typeof latestTime === "number") {
					latestTime = popsUtils.formatTime(latestTime);
				}
				if (typeof fileSize === "number") {
					fileSize = popsUtils.formatByteToSize(fileSize) as string;
				}
				for (let keyName in Folder_ICON) {
					if (fileName.toLowerCase().endsWith("." + keyName)) {
						fileType = keyName;

						fileIcon = (Folder_ICON as any)[keyName];
						break;
					}
				}
				if (!Boolean(fileIcon)) {
					fileType = "Null";
					fileIcon = Folder_ICON.Null;
				}
			}
			folderELement.className = "pops-folder-list-table__body-row";
			fileNameElement.className = "pops-folder-list-table__body-td";
			fileTimeElement.className = "pops-folder-list-table__body-td";
			fileFormatSize.className = "pops-folder-list-table__body-td";
			PopsSafeUtils.setSafeHTML(
				fileNameElement,
				/*html*/ `
				<div class="pops-folder-list-file-name cursor-p">
					<div>
						<img src="${fileIcon}" alt="${fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
						<a title="${fileName}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">
						${fileName}
						</a>
					</div>
				</div>
            `
			);
			PopsSafeUtils.setSafeHTML(
				fileTimeElement,
				/*html*/ `
				<div class="pops-folder-list__time">
					<span>${latestTime}</span>
				</div>
				`
			);
			PopsSafeUtils.setSafeHTML(
				fileFormatSize,
				/*html*/ `
				<div class="pops-folder-list-format-size">
					<span>${fileSize}</span>
				</div>
				`
			);

			/* 存储原来的值 */
			let __value__ = {
				fileName: origin_fileName,
				latestTime: origin_latestTime,
				fileSize: origin_fileSize,
				isFolder: isFolder,
			};

			(fileNameElement as any)["__value__"] = __value__;

			(fileTimeElement as any)["__value__"] = __value__;

			(fileFormatSize as any)["__value__"] = __value__;

			(folderELement as any)["__value__"] = __value__;
			folderELement.appendChild(fileNameElement);
			folderELement.appendChild(fileTimeElement);
			folderELement.appendChild(fileFormatSize);
			return {
				folderELement,
				fileNameElement,
				fileTimeElement,
				fileFormatSize,
			};
		}
		/**
		 * 创建移动端文件夹元素
		 */
		function createMobileFolderRowElement(
			fileName: string,
			latestTime: number | string = "-",
			fileSize: number | string = "-",
			isFolder: boolean = false
		) {
			let origin_fileName = fileName;
			let origin_latestTime = latestTime;
			let origin_fileSize = fileSize;

			let folderELement = popsDOMUtils.createElement("tr");

			let fileNameElement = popsDOMUtils.createElement("td");
			let fileType = "";
			let fileIcon = Folder_ICON.folder;
			if (isFolder) {
				/* 文件夹 */
				latestTime = "";
				fileSize = "";
			} else {
				/* 文件 */
				fileIcon = "";
				if (typeof latestTime === "number") {
					latestTime = popsUtils.formatTime(latestTime);
				}
				if (typeof fileSize === "number") {
					fileSize = popsUtils.formatByteToSize(fileSize) as string;
				}
				for (let keyName in Folder_ICON) {
					if (fileName.toLowerCase().endsWith("." + keyName)) {
						fileType = keyName;

						fileIcon = (Folder_ICON as any)[keyName];
						break;
					}
				}
				if (!Boolean(fileIcon)) {
					fileType = "Null";
					fileIcon = Folder_ICON.Null;
				}
			}
			folderELement.className = "pops-folder-list-table__body-row";
			fileNameElement.className = "pops-folder-list-table__body-td";
			PopsSafeUtils.setSafeHTML(
				fileNameElement,
				/*html*/ `
				<div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
					<img src="${fileIcon}" alt="${fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
					<div>
						<a title="${fileName}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${fileName}</a>
						<span>${latestTime} ${fileSize}</span>
					</div>
				</div>
			`
			);
			/* 存储原来的值 */
			let __value__ = {
				fileName: origin_fileName,
				latestTime: origin_latestTime,
				fileSize: origin_fileSize,
				isFolder: isFolder,
			};

			(fileNameElement as any)["__value__"] = __value__;

			(folderELement as any)["__value__"] = __value__;
			folderELement.appendChild(fileNameElement);
			return {
				folderELement,
				fileNameElement,
			};
		}
		/**
		 * 清空每行的元素
		 */
		function clearFolerRow() {
			PopsSafeUtils.setSafeHTML(folderListBodyElement, "");
		}
		function getArrowIconElement() {
			let iconArrowElement = popsDOMUtils.createElement("div", {
				className: "iconArrow",
			});
			return iconArrowElement;
		}
		/**
		 * 添加顶部导航
		 * @param name
		 * @param _config_
		 * @returns
		 */
		function getBreadcrumbAllFilesElement(
			name: string,
			_config_: PopsFolderDataConfig
		) {
			let spanElement = popsDOMUtils.createElement(
				"span",
				{
					className: "pops-folder-file-list-breadcrumb-allFiles cursor-p",
					innerHTML: `<a>${name}</a>`,

					_config_: _config_,
				},
				{
					title: "name",
				}
			);
			return spanElement;
		}
		/**
		 * 顶部导航的点击事件
		 * @param event
		 * @param isTop 是否是全部文件按钮
		 * @param _config_ 配置
		 */

		function breadcrumbAllFilesElementClickEvent(
			event: Event,
			isTop: boolean,
			_config_: PopsFolderDataConfig[]
		) {
			clearFolerRow();
			/* 获取当前的导航元素 */
			let $click = event.target as HTMLElement;
			let currentBreadcrumb = $click.closest<HTMLSpanElement>(
				"span.pops-folder-file-list-breadcrumb-allFiles"
			);
			if (currentBreadcrumb) {
				while (currentBreadcrumb.nextElementSibling) {
					currentBreadcrumb.nextElementSibling.remove();
				}
			} else {
				console.error("获取导航按钮失败");
			}
			let loadingMask = PopsLoading.init({
				parent: $content,
				content: {
					text: "获取文件列表中...",
				},
				mask: {
					enable: true,
					clickEvent: {
						toClose: false,
						toHide: false,
					},
				},
				addIndexCSS: false,
			});
			addFolderElement(_config_);
			loadingMask.close();
		}
		/**
		 * 刷新文件列表界面信息
		 * @param event
		 * @param _config_
		 */
		async function refreshFolderInfoClickEvent(
			event: MouseEvent | PointerEvent,
			_config_: PopsFolderDataConfig
		) {
			clearFolerRow();
			let loadingMask = PopsLoading.init({
				parent: $content,

				content: {
					text: "获取文件列表中...",
				},

				mask: {
					enable: true,
				},
				addIndexCSS: false,
			});
			if (typeof _config_.clickEvent === "function") {
				let childConfig = await _config_.clickEvent(event, _config_);
				/* 添加顶部导航的箭头 */

				folderFileListBreadcrumbPrimaryElement.appendChild(
					getArrowIconElement()
				);
				/* 获取顶部导航 */
				let breadcrumbAllFilesElement = getBreadcrumbAllFilesElement(
					_config_["fileName"],
					childConfig as any
				);

				folderFileListBreadcrumbPrimaryElement.appendChild(
					breadcrumbAllFilesElement
				);
				/* 设置顶部导航点击事件 */

				popsDOMUtils.on<MouseEvent | PointerEvent>(
					breadcrumbAllFilesElement,
					"click",
					function (event) {
						breadcrumbAllFilesElementClickEvent(
							event,
							false,
							childConfig as any
						);
					}
				);

				addFolderElement(childConfig as any);
			}
			loadingMask.close();
		}
		/**
		 * 设置文件点击事件
		 * @param targetElement
		 * @param _config_
		 */
		function setFileClickEvent(
			targetElement: HTMLElement,
			_config_: PopsFolderDataConfig
		) {
			popsDOMUtils.on<MouseEvent | PointerEvent>(
				targetElement,
				"click",
				async function (event) {
					event?.preventDefault();
					event?.stopPropagation();
					event?.stopImmediatePropagation();
					let linkElement = targetElement.querySelector("a")!;
					if (typeof _config_.clickEvent === "function") {
						let downloadInfo = await _config_.clickEvent(event, _config_)!;
						if (
							downloadInfo != null &&
							typeof downloadInfo === "object" &&
							!Array.isArray(downloadInfo) &&
							typeof downloadInfo.url === "string" &&
							downloadInfo.url.trim() !== ""
						) {
							linkElement.setAttribute("href", downloadInfo.url);
							linkElement.setAttribute("target", "_blank");
							if (downloadInfo.autoDownload) {
								if (
									downloadInfo.mode == null ||
									(downloadInfo as any).mode === ""
								) {
									/* 未设置mode的话默认为aBlank */
									downloadInfo.mode = "aBlank";
								}
								if (
									downloadInfo.mode === "a" ||
									downloadInfo.mode === "aBlank"
								) {
									/* a标签下载 */
									let downloadLinkElement = document.createElement("a");

									if (downloadInfo.mode === "aBlank") {
										downloadLinkElement.setAttribute("target", "_blank");
									}

									downloadLinkElement.href = downloadInfo.url;
									downloadLinkElement.click();
								} else if (
									downloadInfo.mode === "open" ||
									downloadInfo.mode === "openBlank"
								) {
									/* window.open下载 */

									if (downloadInfo.mode === "openBlank") {
										globalThis.open(downloadInfo.url, "_blank");
									} else {
										globalThis.open(downloadInfo.url);
									}
								} else if (downloadInfo.mode === "iframe") {
									/* iframe下载 */
									let downloadIframeLinkElement =
										document.createElement("iframe");

									downloadIframeLinkElement.src = downloadInfo.url;
									downloadIframeLinkElement.onload = function () {
										popsUtils.setTimeout(() => {
											downloadIframeLinkElement.remove();
										}, 1000);
									};
									$shadowRoot.appendChild(downloadIframeLinkElement);
									popsUtils.setTimeout(() => {
										downloadIframeLinkElement.remove();
									}, 3 * 60 * 1000);
								} else {
									console.error("未知的下载模式", downloadInfo);
								}
							}
						}
					}
				}
			);
		}
		/**
		 * 对配置进行排序
		 * @param folderDataConfigList
		 * @param sortName 比较的属性，默认fileName
		 * @param isDesc 是否降序，默认false（升序）
		 */
		function sortFolderConfig(
			folderDataConfigList: PopsFolderDataConfig[],
			sortName: "fileName" | "fileSize" | "latestTime" = "fileName",
			isDesc = false
		) {
			if (sortName === "fileName") {
				// 如果是以文件名排序，文件夹优先放前面
				let onlyFolderDataConfigList = folderDataConfigList.filter((value) => {
					return value.isFolder;
				});
				let onlyFileDataConfigList = folderDataConfigList.filter((value) => {
					return !value.isFolder;
				});
				// 文件夹排序
				onlyFolderDataConfigList.sort((leftConfig, rightConfig) => {
					let beforeVal = leftConfig[sortName].toString();
					let afterVal = rightConfig[sortName].toString();
					let compareVal = beforeVal.localeCompare(afterVal);
					if (isDesc) {
						/* 降序 */
						if (compareVal > 0) {
							compareVal = -1;
						} else if (compareVal < 0) {
							compareVal = 1;
						}
					}
					return compareVal;
				});
				// 文件名排序
				onlyFileDataConfigList.sort((leftConfig, rightConfig) => {
					let beforeVal = leftConfig[sortName].toString();
					let afterVal = rightConfig[sortName].toString();
					let compareVal = beforeVal.localeCompare(afterVal);
					if (isDesc) {
						/* 降序 */
						if (compareVal > 0) {
							compareVal = -1;
						} else if (compareVal < 0) {
							compareVal = 1;
						}
					}
					return compareVal;
				});
				if (isDesc) {
					// 降序，文件夹在下面
					return [...onlyFileDataConfigList, ...onlyFolderDataConfigList];
				} else {
					// 升序，文件夹在上面
					return [...onlyFolderDataConfigList, ...onlyFileDataConfigList];
				}
			} else {
				folderDataConfigList.sort((beforeConfig, afterConfig) => {
					let beforeVal = beforeConfig[sortName];
					let afterVal = afterConfig[sortName];
					if (sortName === "fileSize") {
						/* 文件大小，进行Float转换 */
						beforeVal = parseFloat(beforeVal.toString());
						afterVal = parseFloat(afterVal.toString());
					} else if (sortName === "latestTime") {
						/* 文件时间 */
						beforeVal = new Date(beforeVal).getTime();
						afterVal = new Date(afterVal).getTime();
					}
					if (beforeVal > afterVal) {
						if (isDesc) {
							/* 降序 */
							return -1;
						} else {
							return 1;
						}
					} else if (beforeVal < afterVal) {
						if (isDesc) {
							/* 降序 */
							return 1;
						} else {
							return -1;
						}
					} else {
						return 0;
					}
				});
				return folderDataConfigList;
			}
		}
		/**
		 * 添加元素
		 * @param _config_
		 */
		function addFolderElement(_config_: PopsFolderDataConfig[]) {
			sortFolderConfig(_config_, config.sort.name, config.sort.isDesc);
			_config_.forEach((item) => {
				if (item["isFolder"]) {
					let { folderELement, fileNameElement } = popsUtils.isPhone()
						? createMobileFolderRowElement(item["fileName"], "", "", true)
						: createFolderRowElement(item["fileName"], "", "", true);

					popsDOMUtils.on<MouseEvent | PointerEvent>(
						fileNameElement,
						"click",
						(event) => {
							refreshFolderInfoClickEvent(event, item);
						}
					);

					folderListBodyElement.appendChild(folderELement);
				} else {
					let { folderELement, fileNameElement } = popsUtils.isPhone()
						? createMobileFolderRowElement(
								item["fileName"],
								item.latestTime,
								item.fileSize,
								false
						  )
						: createFolderRowElement(
								item["fileName"],
								item.latestTime,
								item.fileSize,
								false
						  );
					setFileClickEvent(fileNameElement, item);

					folderListBodyElement.appendChild(folderELement);
				}
			});
		}
		addFolderElement(config.folder);
		/* 将数据存到全部文件的属性_config_中 */

		let allFilesElement =
			folderFileListBreadcrumbPrimaryElement.querySelector<HTMLDivElement>(
				".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child"
			)!;

		(allFilesElement as any)._config_ = config.folder;
		/* 设置点击顶部的全部文件事件 */

		popsDOMUtils.on<MouseEvent | PointerEvent>(
			allFilesElement,
			"click",
			(event) => {
				breadcrumbAllFilesElementClickEvent(event, true, config.folder);
			}
		);

		/* 移除所有的当前排序的arrow */
		function removeAllArrowActive() {
			[
				...Array.from(
					folderListSortFileNameElement.querySelectorAll<HTMLElement>(
						".pops-folder-icon-active"
					)
				),
				...Array.from(
					folderListSortLatestTimeElement.querySelectorAll<HTMLElement>(
						".pops-folder-icon-active"
					)
				),
				...Array.from(
					folderListSortFileSizeElement.querySelectorAll<HTMLElement>(
						".pops-folder-icon-active"
					)
				),
			].forEach((ele) => ele.classList.remove("pops-folder-icon-active"));
		}
		/* 设置当前的排序的arrow */

		function changeArrowActive(
			arrowUp: HTMLElement,
			arrowDown: HTMLElement,
			isDesc: boolean
		) {
			removeAllArrowActive();
			if (isDesc) {
				arrowDown.classList.add("pops-folder-icon-active");
			} else {
				arrowUp.classList.add("pops-folder-icon-active");
			}
		}
		/**
		 * 排序按钮的点击事件
		 * @param {PointerEvent} target
		 * @param {HTMLElement} event
		 * @param {string} sortName
		 */
		function arrowSortClickEvent(
			target: HTMLDivElement,
			event: MouseEvent | PointerEvent,
			sortName: string
		) {
			if (!(event as any)["notChangeSortRule"]) {
				(config as any).sort.name = sortName;
				config.sort.isDesc = !config.sort.isDesc;
			}

			let arrowUp = target.querySelector<HTMLDivElement>(
				".pops-folder-icon-arrow-up"
			)!;
			let arrowDown = target.querySelector<HTMLDivElement>(
				".pops-folder-icon-arrow-down"
			)!;
			changeArrowActive(arrowUp, arrowDown, config.sort.isDesc);
			if (
				typeof config.sort.callback === "function" &&
				config.sort.callback(
					target,
					event,
					config.sort.name,
					config.sort.isDesc
				)
			) {
				return;
			}

			let childrenList: PopsFolderDataConfig[] = [];

			Array.from(folderListBodyElement.children).forEach((trElement) => {
				let __value__ = (trElement as any)["__value__"];
				__value__["target"] = trElement;
				childrenList.push(__value__);
			});
			let sortedConfigList = sortFolderConfig(
				childrenList,
				config.sort.name,
				config.sort.isDesc
			);
			sortedConfigList.forEach((item) => {
				folderListBodyElement.appendChild((item as any).target);
			});
		}
		/* 设置当前排序的图标按钮 */
		popsDOMUtils.on<MouseEvent | PointerEvent>(
			folderListSortFileNameElement.closest("th"),
			"click",
			function (event) {
				arrowSortClickEvent(folderListSortFileNameElement, event, "fileName");
			},
			{
				capture: true,
			}
		);
		popsDOMUtils.on(
			folderListSortLatestTimeElement.closest("th"),
			"click",
			void 0,
			function (event) {
				arrowSortClickEvent(
					folderListSortLatestTimeElement,
					event,
					"latestTime"
				);
			},
			{
				capture: true,
			}
		);
		popsDOMUtils.on(
			folderListSortFileSizeElement.closest("th"),
			"click",
			void 0,
			function (event) {
				arrowSortClickEvent(folderListSortFileSizeElement, event, "fileSize");
			},
			{
				capture: true,
			}
		);
		/* 设置默认触发的arrow */
		if (config.sort.name === "fileName") {
			popsDOMUtils.trigger(folderListSortFileNameElement, "click", {
				notChangeSortRule: true,
			});
		} else if (config.sort.name === "latestTime") {
			popsDOMUtils.trigger(folderListSortLatestTimeElement, "click", {
				notChangeSortRule: true,
			});
		} else if (config.sort.name === "fileSize") {
			popsDOMUtils.trigger(folderListSortFileSizeElement, "click", {
				notChangeSortRule: true,
			});
		}
		/* 拖拽 */
		if (config.drag) {
			PopsInstanceUtils.drag($pops, {
				dragElement: $title,
				limit: config.dragLimit,
				extraDistance: config.dragExtraDistance,
				moveCallBack: config.dragMoveCallBack,
				endCallBack: config.dragEndCallBack,
			});
		}
		PopsHandler.handlePush(PopsType, {
			guid: guid,
			animElement: $anim,
			popsElement: $pops,
			maskElement: $mask!,
			$shadowContainer: $shadowContainer,
			$shadowRoot: $shadowRoot,
		});
		let result = PopsHandler.handleResultDetails(eventDetails);
		return result;
	},
};
