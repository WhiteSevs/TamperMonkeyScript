import { GM, GM_getValues, GM_setValues } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { DOMUtils, utils } from "@/env";
import Qmsg from "qmsg";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";

export class ApiTest_getValues extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_getValues === "function";
  }
  public getApiName() {
    return "GM_getValues";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.getValues",
      isSupport: this.isSupportGM() && typeof GM.getValues === "function",
    };
  }
  public getUIOption() {
    const that = this;
    let apiName = this.getApiName();
    let apiAsyncInfo = this.getAsyncApiOption();

    let result: PopsPanelContentConfig = {
      id: "aside-" + apiName,
      title: "" + apiName,
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
              const ret = GM_getValues(...args);
              resolve(ret);
            });
          },
          formList: (<PopsPanelContainerConfig>result["views"][1]).views,
        },
        {
          name: apiAsyncInfo.name,
          fn: GM.getValues,
          formList: (<PopsPanelContainerConfig>result["views"][2]).views,
        },
      ].forEach((data) => {
        let apiNameTag = data.name;

        data.formList.push(
          (() => {
            return UIInfo(() => {
              return {
                text: "测试直接读取",
                description: "没有入参",
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
                  DOMUtils.on($button, "click", async (event) => {
                    DOMUtils.preventEvent(event);
                    try {
                      let value = await data.fn();
                      Qmsg.info("请在控制台查看读取的数据");
                      console.log(value);
                    } catch (error: any) {
                      Qmsg.error(error.toString(), { consoleLogContent: true });
                    }
                  });
                },
              };
            });
          })(),
          (() => {
            return UIInfo(() => {
              let localStorageDataValue = utils.toJSON(`{
								"${apiNameTag}-test-key-non-exists-1": 1111,
								"${apiNameTag}-test-key-non-exists-2": 2222,
							}`);
              return {
                text: "测试读取不存在的数据",
                description: "数据默认值：" + JSON.stringify(localStorageDataValue),
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
                  DOMUtils.on($button, "click", async (event) => {
                    DOMUtils.preventEvent(event);
                    try {
                      let value = await data.fn(localStorageDataValue);
                      console.log(value);
                      if (value == null) {
                        Qmsg.error("读取失败，读取的数据为null");
                      } else if (JSON.stringify(value) === JSON.stringify(localStorageDataValue)) {
                        Qmsg.success("读取成功，读取的数据和默认值相同");
                      } else {
                        Qmsg.error("读取成功，但读取的数据和默认值不同");
                      }
                    } catch (error: any) {
                      Qmsg.error(error.toString(), { consoleLogContent: true });
                    }
                  });
                },
              };
            });
          })(),
          (() => {
            let localStorageDataValue = utils.toJSON(`{
							"${apiNameTag}-test-key-1": 1,
							"${apiNameTag}-test-key-2": 2,
						}`);
            return UIInfo(() => {
              return {
                text: "测试存储对象并读取",
                description: JSON.stringify(localStorageDataValue),
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
                  DOMUtils.on($button, "click", async (event) => {
                    DOMUtils.preventEvent(event);
                    try {
                      GM_setValues(localStorageDataValue);
                      let keys = Object.keys(localStorageDataValue);
                      let value = await data.fn(keys);
                      console.log(value);
                      if (value == null) {
                        Qmsg.error("读取失败，读取的数据为null");
                      } else if (JSON.stringify(value) === JSON.stringify(localStorageDataValue)) {
                        Qmsg.success("读取成功，写入的数据和读取的数据相同");
                      } else {
                        Qmsg.error("读取成功，但写入的数据和读取的数据不同");
                      }
                    } catch (error: any) {
                      Qmsg.error(error.toString(), { consoleLogContent: true });
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
