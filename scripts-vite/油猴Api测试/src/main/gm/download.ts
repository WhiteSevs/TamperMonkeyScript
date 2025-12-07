import { DOMUtils } from "@/env";
import { UIInfo } from "@/setting/components/ui-info";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import Qmsg from "qmsg";
import { GM, GM_download } from "ViteGM";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { StorageApi } from "../StorageApi";

export class ApiTest_download extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_download === "function";
  }
  public getApiName() {
    return "GM_download";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.download",
      isSupport: this.isSupportGM() && typeof GM.download === "function",
    };
  }
  public getUIOption() {
    const that = this;
    let apiName = this.getApiName();
    let apiAsyncInfo = this.getAsyncApiOption();

    let result: PopsPanelContentConfig = {
      id: "aside-" + apiName,
      title: apiName,
      headerTitle: `${TamperMonkeyUtils.getApiDocUrl(apiName, `${apiName} & ${apiAsyncInfo.name}`)}`,
      scrollToDefaultView: true,
      isDefault() {
        return StorageApi.get(PanelKeyConfig.asideLastVisit) === apiName;
      },
      clickCallback(data) {
        StorageApi.set(PanelKeyConfig.asideLastVisit, apiName);
      },
      views: [
        {
          type: "container",
          text: "函数测试",
          views: [
            UIInfo(() =>
              this.isSupport()
                ? {
                    text: "支持 " + apiName,
                    tag: "success",
                  }
                : {
                    text: "不支持 " + apiName,
                    tag: "error",
                  }
            ),
            UIInfo(() =>
              apiAsyncInfo.isSupport
                ? {
                    text: "支持 " + apiAsyncInfo.name,
                    tag: "success",
                  }
                : {
                    text: "不支持 " + apiAsyncInfo.name,
                    tag: "error",
                  }
            ),
          ],
        },
        {
          type: "container",
          text: "功能测试",
          views: [],
        },
        {
          type: "container",
          text: "功能测试（异步）",
          views: [],
        },
      ],
    };
    if (this.isSupport()) {
      [
        {
          name: apiName,
          fn: async (...args: any[]) => {
            return new Promise<any>((resolve) => {
              // @ts-ignore
              let options = args[0];
              if (typeof args[0] === "string") {
                const name = args[1];
                options = {
                  url: args[0],
                };
                if (typeof name === "string") {
                  options.name = name;
                }
              }
              if (typeof options.onload === "function") {
                const oldOnLoad = options.onload;
                options.onload = (...args2: any[]) => {
                  oldOnLoad(...args2);
                  resolve(ret);
                };
              }
              if (typeof options.onerror === "function") {
                const oldOnError = options.onerror;
                options.onerror = (...args2: any[]) => {
                  oldOnError(...args2);
                  resolve(ret);
                };
              }
              if (typeof options.onprogress === "function") {
                const oldOnProgress = options.onprogress;
                options.onprogress = (...args2: any[]) => {
                  oldOnProgress(...args2);
                };
              }
              if (typeof options.ontimeout === "function") {
                const oldOnTimeout = options.ontimeout;
                options.ontimeout = (...args2: any[]) => {
                  oldOnTimeout(...args2);
                  resolve(ret);
                };
              }
              const ret = GM_download(options);
              return ret;
            });
          },
          formList: (<PopsPanelContainerConfig>result["views"][1]).views,
        },
        {
          name: apiAsyncInfo.name,
          fn: GM.download,
          formList: (<PopsPanelContainerConfig>result["views"][2]).views,
        },
      ].forEach((data) => {
        const apiNameTag = data.name;

        data.formList.push(
          (() => {
            const downloadUrl = "https://httpbin.org/image/png";
            const fileName = "test.png";

            return UIInfo(() => {
              return {
                text: "下载图片：" + downloadUrl,
                description: ``,
                tag: "info",
                afterRender(container) {
                  let $button = DOMUtils.toElement(
                    /*html*/ `
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,
                    false,
                    false
                  );
                  DOMUtils.after(container.$leftContainer, $button);
                  // 点击事件

                  /** 取消下载函数 */
                  let abortDownloadFn: null | Function = null;
                  /** 是否成功下载 */
                  let isSuccessDownload = false;
                  /** 是否下载完成 */
                  let isDownloadEnd = false;
                  DOMUtils.on($button, "click", async (event) => {
                    DOMUtils.preventEvent(event);
                    try {
                      let $loading = Qmsg.loading("下载中...", {
                        showClose: true,
                        onClose() {
                          if (!isSuccessDownload && typeof abortDownloadFn === "function") {
                            abortDownloadFn();
                          }
                        },
                      });
                      const result = await data.fn({
                        url: downloadUrl,
                        name: fileName,
                        onload() {
                          isSuccessDownload = true;
                          $loading.close();
                          Qmsg.success(`下载 ${fileName} 已完成`);
                        },
                        onprogress(details) {
                          if (
                            typeof details === "object" &&
                            "loaded" in details &&
                            "total" in details &&
                            !isDownloadEnd
                          ) {
                            let progressNum = details.loaded / details.total;
                            let formatProgressNum = (progressNum * 100).toFixed(2);
                            $loading.setText(`下载中...${formatProgressNum}%`);
                            if (details.loaded === details.total) {
                              isDownloadEnd = true;
                            }
                          }
                        },
                        onerror(error) {
                          $loading.close();
                          console.error("下载失败error👉", error);
                          if (typeof error === "object" && error["error"]) {
                            Qmsg.error(`下载 ${fileName} 失败或已取消 原因：${error["error"]}`, {
                              timeout: 6000,
                            });
                          } else {
                            Qmsg.error(`下载 ${fileName} 失败或已取消`);
                          }
                        },
                        ontimeout() {
                          $loading.close();
                          Qmsg.error(`下载 ${fileName} 请求超时`);
                        },
                      });

                      if (typeof result === "object" && result != null && "abort" in result) {
                        abortDownloadFn = result.abort;
                      }
                    } catch (error: any) {
                      Qmsg.error(error.toString());
                    }
                  });
                },
              };
            });
          })(),
          (() => {
            const downloadUrl = "https://media.w3.org/2010/05/sintel/trailer.mp4";
            const fileName = "test.mp4";

            return UIInfo(() => {
              return {
                text: "下载视频：" + downloadUrl,
                description: ``,
                tag: "info",
                afterRender(container) {
                  let $button = DOMUtils.toElement(
                    /*html*/ `
										<div class="pops-panel-button pops-panel-button-no-icon">
											<button class="pops-panel-button_inner" type="button" data-type="default">
												<i class="pops-bottom-icon" is-loading="false"></i>
												<span class="pops-panel-button-text">点击测试</span>
											</button>
										</div>
									`,
                    false,
                    false
                  );
                  DOMUtils.after(container.$leftContainer, $button);
                  // 点击事件

                  /** 取消下载函数 */
                  let abortDownloadFn: null | Function = null;
                  /** 是否成功下载 */
                  let isSuccessDownload = false;
                  /** 是否下载完成 */
                  let isDownloadEnd = false;
                  DOMUtils.on($button, "click", async (event) => {
                    DOMUtils.preventEvent(event);
                    try {
                      let $loading = Qmsg.loading("下载中...", {
                        showClose: true,
                        onClose() {
                          if (!isSuccessDownload && typeof abortDownloadFn === "function") {
                            abortDownloadFn();
                          }
                        },
                      });
                      const result = await data.fn({
                        url: downloadUrl,
                        name: fileName,
                        onload() {
                          isSuccessDownload = true;
                          $loading.close();
                          Qmsg.success(`下载 ${fileName} 已完成`);
                        },
                        onprogress(details) {
                          if (
                            typeof details === "object" &&
                            "loaded" in details &&
                            "total" in details &&
                            !isDownloadEnd
                          ) {
                            let progressNum = details.loaded / details.total;
                            let formatProgressNum = (progressNum * 100).toFixed(2);
                            $loading.setText(`下载中...${formatProgressNum}%`);
                            if (details.loaded === details.total) {
                              isDownloadEnd = true;
                            }
                          }
                        },
                        onerror(error) {
                          $loading.close();
                          console.error("下载失败error👉", error);
                          if (typeof error === "object" && error["error"]) {
                            Qmsg.error(`下载 ${fileName} 失败或已取消 原因：${error["error"]}`, {
                              timeout: 6000,
                            });
                          } else {
                            Qmsg.error(`下载 ${fileName} 失败或已取消`);
                          }
                        },
                        ontimeout() {
                          $loading.close();
                          Qmsg.error(`下载 ${fileName} 请求超时`);
                        },
                      });

                      if (typeof result === "object" && result != null && "abort" in result) {
                        abortDownloadFn = result.abort;
                      }
                    } catch (error: any) {
                      Qmsg.error(error.toString());
                    }
                  });
                },
              };
            });
          })()
        );
      });
    }
    return result;
  }
}
