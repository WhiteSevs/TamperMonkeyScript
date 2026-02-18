import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { PopsCSS } from "../../PopsCSS";
import type { PopsType } from "../../types/main";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../../utils/PopsInstanceUtils";
import { PopsSafeUtils } from "../../utils/PopsSafeUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsLoading } from "../loading";
import { PopsFolderDefaultConfig } from "./defaultConfig";
import { Folder_ICON } from "./folderIcon";
import type { PopsFolderDataConfig, PopsFolderConfig, PopsFolderDownloadOption } from "./types";

export const PopsFolder = {
  init(__config__: PopsFolderConfig) {
    const guid = popsUtils.getRandomGUID();
    // 设置当前类型
    const popsType: PopsType = "folder";

    let config = PopsFolderDefaultConfig();
    config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
    config = popsUtils.assign(config, __config__);
    config = PopsHandler.handleOnly(popsType, config);

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

    // 办公几件套
    Reflect.set(Folder_ICON, "docx", Folder_ICON.doc);
    Reflect.set(Folder_ICON, "rtf", Folder_ICON.doc);
    Reflect.set(Folder_ICON, "xlsx", Folder_ICON.xls);
    Reflect.set(Folder_ICON, "pptx", Folder_ICON.ppt);
    Reflect.set(Folder_ICON, "dmg", Folder_ICON.ipa);
    Reflect.set(Folder_ICON, "json", Folder_ICON.js);

    // 压缩包
    const zipIconList = [
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

    // 图片
    const imageIconList = ["jpg", "jpeg", "ico", "webp"];

    // 代码语言
    const codeLanguageIconList = ["htm", "py", "vue", "bat", "sh", "vbs", "java", "kt"];

    // Android安装包
    const androidIconList = ["apk", "apkm", "xapk"];

    zipIconList.forEach((keyName) => {
      Folder_ICON[keyName as keyof typeof Folder_ICON] = Folder_ICON.zip;
    });
    imageIconList.forEach((keyName) => {
      Folder_ICON[keyName as keyof typeof Folder_ICON] = Folder_ICON.png;
    });
    codeLanguageIconList.forEach((keyName) => {
      Folder_ICON[keyName as keyof typeof Folder_ICON] = Folder_ICON.html;
    });
    androidIconList.forEach((keyName) => {
      Folder_ICON[keyName as keyof typeof Folder_ICON] = Folder_ICON.apk;
    });

    if (config?.folder) {
      Reflect.set(config, "folder", config.folder);
    }

    // 先把z-index提取出来
    const zIndex = PopsHandler.handleZIndex(config.zIndex);
    const maskHTML = PopsElementHandler.createMask(guid, zIndex);

    const headerBtnHTML = PopsElementHandler.createHeader(popsType, config);
    const bottomBtnHTML = PopsElementHandler.createBottom(popsType, config);
    const { headerStyle, headerPStyle } = PopsElementHandler.createHeaderStyle(popsType, config);
    const animHTML = PopsElementHandler.createAnim(
      guid,
      popsType,
      config,
      /*html*/ `
            <div class="pops-title pops-${popsType}-title" style="text-align: ${
              config.title.position
            };${headerStyle}">${
              config.title.html
                ? config.title.text
                : `<p pops class="pops-${popsType}-title-text" style="${headerPStyle}">${config.title.text}</p>`
            }${headerBtnHTML}</div>
			<div class="pops-content pops-${popsType}-content ${popsUtils.isPhone() ? "pops-mobile-folder-content" : ""}">
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
							<tbody></tbody>
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
    const $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);
    const {
      $pops: $pops,
      $title: $title,
      $content: $content,
      // folderListElement,
      // folderListHeaderElement,
      // folderListHeaderRowElement,
      $folderTbody: folderListBodyElement,
      $folderHeaderBreadcrumbPrimary: folderFileListBreadcrumbPrimaryElement,
      $headerBtnClose: $btnCloseBtn,
      $btnOk: btnOkElement,
      $btnCancel: btnCancelElement,
      $btnOther: btnOtherElement,
      $folderSortFileName: folderListSortFileNameElement,
      $folderSortLatestTime: folderListSortLatestTimeElement,
      $folderSortFileSize: folderListSortFileSizeElement,
    } = PopsHandler.handleQueryElement($anim, popsType);

    /**
     * 遮罩层元素
     */
    let $mask: HTMLDivElement | undefined = void 0;
    /**
     * 已创建的元素列表
     */
    const $elList: HTMLElement[] = [$anim];

    if (config.mask.enable) {
      const handleMask = PopsHandler.handleMask({
        type: popsType,
        guid: guid,
        config: config,
        animElement: $anim,
        maskHTML: maskHTML,
      });
      $mask = handleMask.maskElement;
      $elList.push($mask);
    }
    // 事件
    const evtConfig = PopsHandler.handleEventConfig(
      config,
      guid,
      $shadowContainer,
      $shadowRoot,
      popsType,
      $anim,
      $pops,
      $mask
    );
    const result = PopsHandler.handleResultConfig(evtConfig);
    PopsHandler.handleClickEvent("close", $btnCloseBtn, evtConfig, config.btn.close.callback);
    PopsHandler.handleClickEvent("ok", btnOkElement, evtConfig, config.btn.ok.callback);
    PopsHandler.handleClickEvent("cancel", btnCancelElement, evtConfig, config.btn.cancel.callback);
    PopsHandler.handleClickEvent("other", btnOtherElement, evtConfig, config.btn.other.callback);
    // 创建到页面中

    popsDOMUtils.append($shadowRoot, $elList);
    if (typeof config.beforeAppendToPageCallBack === "function") {
      config.beforeAppendToPageCallBack($shadowRoot, $shadowContainer);
    }

    popsDOMUtils.appendBody($shadowContainer);
    if ($mask != null) {
      $anim.after($mask);
    }
    class PopsFolder {
      init() {
        config.folder.sort();
        this.initFolderView(config.folder);
        // 将数据存到全部文件的属性_config_中

        const $allFiles = folderFileListBreadcrumbPrimaryElement.querySelector<HTMLDivElement>(
          ".pops-folder-list .pops-folder-file-list-breadcrumb-allFiles:first-child"
        )!;

        Reflect.set($allFiles, "data-config", config.folder);
        // 设置点击顶部的全部文件事件
        popsDOMUtils.on<MouseEvent | PointerEvent>($allFiles, "click", (event) => {
          this.setBreadcrumbClickEvent(event, true, config.folder);
        });
        // 文件名的点击排序
        popsDOMUtils.on<MouseEvent | PointerEvent>(
          folderListSortFileNameElement.closest("th"),
          "click",
          (event) => {
            this.arrowToSortFolderInfoView(folderListSortFileNameElement, event, "fileName");
          },
          {
            capture: true,
          }
        );
        // 修改事件的点击排序
        popsDOMUtils.on(
          folderListSortLatestTimeElement.closest("th"),
          "click",
          (event) => {
            this.arrowToSortFolderInfoView(folderListSortLatestTimeElement, event, "latestTime");
          },
          {
            capture: true,
          }
        );
        // 文件大小的点击排序
        popsDOMUtils.on(
          folderListSortFileSizeElement.closest("th"),
          "click",
          (event) => {
            this.arrowToSortFolderInfoView(folderListSortFileSizeElement, event, "fileSize");
          },
          {
            capture: true,
          }
        );
        // 设置默认触发的arrow
        if (config.sort.name === "fileName") {
          popsDOMUtils.emit(folderListSortFileNameElement, "click", {
            notChangeSortRule: true,
          });
        } else if (config.sort.name === "latestTime") {
          popsDOMUtils.emit(folderListSortLatestTimeElement, "click", {
            notChangeSortRule: true,
          });
        } else if (config.sort.name === "fileSize") {
          popsDOMUtils.emit(folderListSortFileSizeElement, "click", {
            notChangeSortRule: true,
          });
        }
      }
      /**
       * 在创建文件|文件夹创建元素前处理东西
       */
      handlerWithBeforeCreateFileOrFolderInfoNode(folderData: PopsFolderDataConfig) {
        let { fileSize } = folderData;
        const { fileName, latestTime, isFolder = false } = folderData;
        folderData.latestTime = folderData.latestTime ?? "-";
        folderData.fileSize = folderData.fileSize ?? "-";
        const $folder = popsDOMUtils.createElement("tr");

        const $fileName = popsDOMUtils.createElement("td");
        const $fileTime = popsDOMUtils.createElement("td");
        const $fileFormatSize = popsDOMUtils.createElement("td");

        let show_latestTime = "";
        let show_fileSize = "";
        let fileType = "";
        let fileIcon = "";
        if (isFolder) {
          // 文件夹
          fileType = "";
          fileIcon = Folder_ICON.folder;
          show_latestTime = "";
          fileSize = "";
          show_fileSize = "";
        } else {
          // 文件
          if (typeof latestTime === "function") {
            const timeRet = latestTime();
            show_latestTime = timeRet.showText;
          } else if (typeof latestTime === "number") {
            show_latestTime = popsUtils.formatTime(latestTime);
          } else if (typeof latestTime === "string") {
            show_latestTime = latestTime;
          }
          if (typeof fileSize === "number") {
            show_fileSize = popsUtils.formatByteToSize(fileSize, true);
          } else if (typeof fileSize === "string") {
            show_fileSize = fileSize;
          }
          // 找到对应的图标
          const findIconKeyName = Object.keys(Folder_ICON).find((keyName) => {
            if (fileName.toLowerCase().endsWith("." + keyName)) {
              fileType = keyName;
              fileIcon = Reflect.get(Folder_ICON, keyName);
              return true;
            }
          });
          if (findIconKeyName) {
            fileIcon = Reflect.get(Folder_ICON, findIconKeyName);
            fileType = findIconKeyName;
          } else {
            fileType = "Null";
            fileIcon = Folder_ICON.Null;
          }
        }

        if (typeof folderData.fileIcon === "string") {
          // 强制使用自定义
          fileIcon = folderData.fileIcon;
        }
        $folder.className = "pops-folder-list-table__body-row";
        $fileName.className = "pops-folder-list-table__body-td";
        $fileTime.className = "pops-folder-list-table__body-td";
        $fileFormatSize.className = "pops-folder-list-table__body-td";

        return {
          $folder,
          $fileName,
          $fileTime,
          $fileFormatSize,
          /** 经过处理后的数据 */
          data: {
            fileType,
            fileIcon,
            show_latestTime,
            show_fileSize,
          },
        };
      }
      /**
       * 创建文件夹元素
       * @param fileName 文件名
       * @param latestTime 修改时间
       * @param [fileSize="-"] 文件大小
       * @param isFolder 是否是文件夹
       */
      createFolderRowElement(folderData: PopsFolderDataConfig) {
        const { $folder, $fileName, $fileTime, $fileFormatSize, data } =
          this.handlerWithBeforeCreateFileOrFolderInfoNode(folderData);

        const { fileName } = folderData;

        PopsSafeUtils.setSafeHTML(
          $fileName,
          /*html*/ `
          <div class="pops-folder-list-file-name cursor-p">
            <div>
              <img src="${data.fileIcon}" alt="${data.fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
              <a href="javascript:;" title="${fileName}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${fileName}</a>
            </div>
          </div>`
        );
        PopsSafeUtils.setSafeHTML(
          $fileTime,
          /*html*/ `
          <div class="pops-folder-list__time">
            <span>${data.show_latestTime}</span>
          </div>`
        );
        PopsSafeUtils.setSafeHTML(
          $fileFormatSize,
          /*html*/ `
          <div class="pops-folder-list-format-size">
            <span>${data.show_fileSize}</span>
          </div>`
        );

        Reflect.set($fileName, "__value__", folderData);
        Reflect.set($fileTime, "__value__", folderData);
        Reflect.set($fileFormatSize, "__value__", folderData);
        Reflect.set($folder, "__value__", folderData);

        $folder.appendChild($fileName);
        $folder.appendChild($fileTime);
        $folder.appendChild($fileFormatSize);
        return {
          folderElement: $folder,
          fileNameElement: $fileName,
          fileTimeElement: $fileTime,
          fileFormatSize: $fileFormatSize,
        };
      }
      /**
       * 创建移动端文件夹元素
       * @param fileName 文件名
       * @param latestTime 创建时间
       * @param [fileSize="-"] 文件大小
       * @param isFolder 是否是文件夹
       */
      createFolderRowElementByMobile(folderData: PopsFolderDataConfig) {
        const { $folder, $fileName, data } = this.handlerWithBeforeCreateFileOrFolderInfoNode(folderData);

        const { fileName } = folderData;

        PopsSafeUtils.setSafeHTML(
          $fileName,
          /*html*/ `
          <div class="pops-folder-list-file-name pops-mobile-folder-list-file-name cursor-p">
            <img src="${data.fileIcon}" alt="${data.fileType}" class="pops-folder-list-file-icon u-file-icon u-file-icon--list">
            <div>
              <a title="${fileName}" class="pops-folder-list-file-name-title-text inline-block-v-middle text-ellip list-name-text">${fileName}</a>
              <span>${data.show_latestTime} ${data.show_fileSize}</span>
            </div>
          </div>`
        );
        // 存储原来的值
        Reflect.set($fileName, "__value__", folderData);
        Reflect.set($folder, "folderData", folderData);
        $folder.appendChild($fileName);
        return {
          folderElement: $folder,
          fileNameElement: $fileName,
        };
      }
      /**
       * 清空文件夹信息页面
       */
      clearFolderInfoView() {
        PopsSafeUtils.setSafeHTML(folderListBodyElement, "");
      }
      /**
       * 创建顶部导航的箭头图标
       */
      createHeaderArrowIcon() {
        const $arrowIcon = popsDOMUtils.createElement("div", {
          className: "iconArrow",
        });
        return $arrowIcon;
      }
      /**
       * 添加顶部导航元素
       * @param folderName 文件夹名
       * @param folderDataConfig 文件夹配置
       */
      createBreadcrumb(
        folderName: string,
        folderDataConfig: PopsFolderDownloadOption | PopsFolderDataConfig[] | null | undefined | void
      ) {
        const $breadcrumb = popsDOMUtils.createElement(
          "span",
          {
            className: "pops-folder-file-list-breadcrumb-allFiles cursor-p",
            innerHTML: `<a>${folderName}</a>`,
            "data-config": folderDataConfig,
          },
          {
            title: folderName,
          }
        );
        return $breadcrumb;
      }
      /**
       * 顶部导航的点击事件
       * @param clickEvent
       * @param isTop 是否是全部文件按钮
       * @param dataConfigList 配置
       */
      setBreadcrumbClickEvent(
        clickEvent: MouseEvent | PointerEvent,
        isTop: boolean,
        dataConfigList: PopsFolderDataConfig[]
      ) {
        this.clearFolderInfoView();
        // 获取当前的导航元素
        const $click = clickEvent.target as HTMLElement;
        const currentBreadcrumb = $click.closest<HTMLSpanElement>("span.pops-folder-file-list-breadcrumb-allFiles");
        if (currentBreadcrumb) {
          while (currentBreadcrumb.nextElementSibling) {
            currentBreadcrumb.nextElementSibling.remove();
          }
        } else {
          console.error("获取导航按钮失败");
        }
        const loadingMask = PopsLoading.init({
          $parent: $content,
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
        this.initFolderView(dataConfigList);
        loadingMask.close();
      }
      /**
       * 文件夹的点击事件 - 进入文件夹
       *
       * 先情况页面元素
       * @param clickEvent
       * @param dataConfig
       */
      async enterFolder(clickEvent: MouseEvent | PointerEvent, dataConfig: PopsFolderDataConfig) {
        this.clearFolderInfoView();
        const loadingMask = PopsLoading.init({
          $parent: $content,
          content: {
            text: "获取文件列表中...",
          },
          mask: {
            enable: true,
          },
          addIndexCSS: false,
        });
        if (typeof dataConfig.clickEvent === "function") {
          const childConfig = await dataConfig.clickEvent(clickEvent, dataConfig);
          // 添加顶部导航的箭头
          folderFileListBreadcrumbPrimaryElement.appendChild(this.createHeaderArrowIcon());
          // 添加顶部导航的链接文字
          const $breadcrumbAllFiles = this.createBreadcrumb(dataConfig.fileName, childConfig);

          folderFileListBreadcrumbPrimaryElement.appendChild($breadcrumbAllFiles);
          // 设置顶部导航点击事件

          popsDOMUtils.on<MouseEvent | PointerEvent>($breadcrumbAllFiles, "click", (event) => {
            this.setBreadcrumbClickEvent(event, false, childConfig as PopsFolderDataConfig[]);
          });

          this.initFolderView(childConfig as PopsFolderDataConfig[]);
        }
        loadingMask.close();
      }
      /**
       * 文件的点击事件 - 下载文件
       * @param $target
       * @param dataConfig
       */
      async downloadFile(clickEvent: MouseEvent | PointerEvent, $row: HTMLElement, dataConfig: PopsFolderDataConfig) {
        popsDOMUtils.preventEvent(clickEvent);

        const $link = $row.querySelector("a")!;
        if (typeof dataConfig.clickEvent === "function") {
          const downloadInfo = await dataConfig.clickEvent(clickEvent, dataConfig)!;
          if (
            downloadInfo != null &&
            typeof downloadInfo === "object" &&
            !Array.isArray(downloadInfo) &&
            typeof downloadInfo.url === "string" &&
            downloadInfo.url.trim() !== ""
          ) {
            $link.setAttribute("href", downloadInfo.url);
            $link.setAttribute("target", "_blank");
            if (downloadInfo.autoDownload) {
              if (downloadInfo.mode == null || String(downloadInfo.mode) === "") {
                // 未设置mode的话默认为aBlank
                downloadInfo.mode = "aBlank";
              }
              if (downloadInfo.mode === "a" || downloadInfo.mode === "aBlank") {
                // a标签下载
                const $anchor = popsDOMUtils.createElement("a");

                if (downloadInfo.mode === "aBlank") {
                  $anchor.setAttribute("target", "_blank");
                }

                $anchor.href = downloadInfo.url;
                $anchor.click();
              } else if (downloadInfo.mode === "open" || downloadInfo.mode === "openBlank") {
                // window.open下载

                if (downloadInfo.mode === "openBlank") {
                  globalThis.open(downloadInfo.url, "_blank");
                } else {
                  globalThis.open(downloadInfo.url);
                }
              } else if (downloadInfo.mode === "iframe") {
                // iframe下载
                const $downloadIframe = popsDOMUtils.createElement("iframe");

                $downloadIframe.src = downloadInfo.url;
                $downloadIframe.onload = function () {
                  popsUtils.setTimeout(() => {
                    $downloadIframe.remove();
                  }, 1000);
                };
                $shadowRoot.appendChild($downloadIframe);
                popsUtils.setTimeout(
                  () => {
                    $downloadIframe.remove();
                  },
                  3 * 60 * 1000
                );
              } else {
                console.error("未知的下载模式", downloadInfo);
              }
            }
          }
        }
      }
      /**
       * 对配置进行排序
       * @param folderDataConfigList
       * @param sortName 比较的属性，默认fileName
       * @param isDesc 是否降序，默认false（升序）
       */
      sortFolderConfig(
        folderDataConfigList: PopsFolderDataConfig[],
        sortName: "fileName" | "fileSize" | "latestTime" = "fileName",
        isDesc = false
      ) {
        // 文件夹
        const onlyFolderDataConfigList = folderDataConfigList.filter((value) => {
          return value.isFolder;
        });
        // 文件
        const onlyFileDataConfigList = folderDataConfigList.filter((value) => {
          return !value.isFolder;
        });
        if (sortName === "fileName") {
          // 文件夹排序
          onlyFolderDataConfigList.sort((leftConfig, rightConfig) => {
            const beforeVal = leftConfig[sortName].toString();
            const afterVal = rightConfig[sortName].toString();
            let compareVal = beforeVal.localeCompare(afterVal);
            if (isDesc) {
              // 降序
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
            const beforeVal = leftConfig[sortName].toString();
            const afterVal = rightConfig[sortName].toString();
            let compareVal = beforeVal.localeCompare(afterVal);
            if (isDesc) {
              // 降序
              if (compareVal > 0) {
                compareVal = -1;
              } else if (compareVal < 0) {
                compareVal = 1;
              }
            }
            return compareVal;
          });
        } else {
          // 文件夹排序
          onlyFolderDataConfigList.sort((beforeConfig, afterConfig) => {
            let beforeVal = beforeConfig[sortName];
            let afterVal = afterConfig[sortName];
            if (typeof beforeVal === "function") {
              beforeVal = beforeVal().timeStamp;
            }
            if (typeof afterVal === "function") {
              afterVal = afterVal().timeStamp;
            }
            if (sortName === "fileSize") {
              // 文件大小，进行Float转换
              beforeVal = parseFloat(beforeVal.toString());
              afterVal = parseFloat(afterVal.toString());
            } else if (sortName === "latestTime") {
              // 文件时间
              beforeVal = new Date(beforeVal || "").getTime();
              afterVal = new Date(afterVal || "").getTime();
            }
            if (beforeVal > afterVal) {
              if (isDesc) {
                // 降序
                return -1;
              } else {
                return 1;
              }
            } else if (beforeVal < afterVal) {
              if (isDesc) {
                // 降序
                return 1;
              } else {
                return -1;
              }
            } else {
              return 0;
            }
          });
          // 文件排序
          onlyFileDataConfigList.sort((beforeConfig, afterConfig) => {
            let beforeVal = beforeConfig[sortName];
            let afterVal = afterConfig[sortName];
            if (typeof beforeVal === "function") {
              beforeVal = beforeVal().timeStamp;
            }
            if (typeof afterVal === "function") {
              afterVal = afterVal().timeStamp;
            }
            if (sortName === "fileSize") {
              // 文件大小，进行Float转换
              beforeVal = parseFloat(beforeVal.toString());
              afterVal = parseFloat(afterVal.toString());
            } else if (sortName === "latestTime") {
              // 文件时间
              beforeVal = new Date(beforeVal).getTime();
              afterVal = new Date(afterVal).getTime();
            }
            if (beforeVal > afterVal) {
              if (isDesc) {
                // 降序
                return -1;
              } else {
                return 1;
              }
            } else if (beforeVal < afterVal) {
              if (isDesc) {
                // 降序
                return 1;
              } else {
                return -1;
              }
            } else {
              return 0;
            }
          });
        }

        // 文件夹始终优先放前面
        return [...onlyFolderDataConfigList, ...onlyFileDataConfigList];
      }
      /**
       * 添加文件夹/文件行元素
       * @param dataConfig 配置
       */
      initFolderView(dataConfig: PopsFolderDataConfig[]) {
        // 先对文件夹、文件进行排序
        const sortedConfigList = this.sortFolderConfig(dataConfig, config.sort.name, config.sort.isDesc);
        sortedConfigList.forEach((item) => {
          if (item.isFolder) {
            const { folderElement, fileNameElement } = popsUtils.isPhone()
              ? this.createFolderRowElementByMobile(item)
              : this.createFolderRowElement(item);
            // 文件夹 - 点击事件
            popsDOMUtils.on<MouseEvent | PointerEvent>(fileNameElement, "click", (event) => {
              // 进入文件夹
              this.enterFolder(event, item);
            });

            folderListBodyElement.appendChild(folderElement);
          } else {
            const { folderElement, fileNameElement } = popsUtils.isPhone()
              ? this.createFolderRowElementByMobile(item)
              : this.createFolderRowElement(item);
            // 文件 - 点击事件
            popsDOMUtils.on<MouseEvent | PointerEvent>(fileNameElement, "click", (event) => {
              // 下载文件
              this.downloadFile(event, fileNameElement, item);
            });

            folderListBodyElement.appendChild(folderElement);
          }
        });
      }
      /**
       * 移除所有箭头的被访问状态
       */
      removeArrowActiveStatus() {
        [
          ...Array.from(folderListSortFileNameElement.querySelectorAll<HTMLElement>(".pops-folder-icon-active")),
          ...Array.from(folderListSortLatestTimeElement.querySelectorAll<HTMLElement>(".pops-folder-icon-active")),
          ...Array.from(folderListSortFileSizeElement.querySelectorAll<HTMLElement>(".pops-folder-icon-active")),
        ].forEach((ele) => ele.classList.remove("pops-folder-icon-active"));
      }
      /**
       * 修改导航箭头的状态
       */
      changeArrowActive(arrowUp: HTMLElement, arrowDown: HTMLElement, isDesc: boolean) {
        this.removeArrowActiveStatus();
        if (isDesc) {
          arrowDown.classList.add("pops-folder-icon-active");
        } else {
          arrowUp.classList.add("pops-folder-icon-active");
        }
      }
      /**
       * 排序按钮的点击事件
       * @param $target
       * @param event
       * @param sortName
       */
      arrowToSortFolderInfoView($target: HTMLDivElement, event: MouseEvent | PointerEvent, sortName: string) {
        const notChangeSortRule = Reflect.get(event, "notChangeSortRule");
        if (!notChangeSortRule) {
          config.sort.name = sortName as PopsFolderConfig["sort"]["name"];
          config.sort.isDesc = !config.sort.isDesc;
        }

        const $arrowUp = $target.querySelector<HTMLDivElement>(".pops-folder-icon-arrow-up")!;
        const $arrowDown = $target.querySelector<HTMLDivElement>(".pops-folder-icon-arrow-down")!;
        this.changeArrowActive($arrowUp, $arrowDown, config.sort.isDesc);
        if (
          typeof config.sort.callback === "function" &&
          config.sort.callback($target, event, config.sort.name, config.sort.isDesc)
        ) {
          return;
        }

        const childrenList: PopsFolderDataConfig[] = [];

        Array.from(folderListBodyElement.children).forEach(($tr) => {
          const __value__ = Reflect.get($tr, "__value__");
          Reflect.set(__value__, "target", $tr);
          childrenList.push(__value__);
        });
        const sortedConfigList = this.sortFolderConfig(childrenList, config.sort.name, config.sort.isDesc);
        sortedConfigList.forEach((item) => {
          folderListBodyElement.appendChild((item as any).target);
        });
      }
    }

    const popsFolder = new PopsFolder();
    popsFolder.init();
    Reflect.set($pops, "data-pops-folder", popsFolder);
    // 拖拽
    if (config.drag) {
      PopsInstanceUtils.drag($pops, {
        dragElement: $title,
        limit: config.dragLimit,
        extraDistance: config.dragExtraDistance,
        moveCallBack: config.dragMoveCallBack,
        endCallBack: config.dragEndCallBack,
      });
    }
    PopsHandler.handlePush(popsType, {
      guid: guid,
      $anim: $anim,
      $pops: $pops,
      $mask: $mask!,
      $shadowContainer: $shadowContainer,
      $shadowRoot: $shadowRoot,
      config: config,
      destory: result.close,
    });
    return result;
  },
};
