import { GM, GM_deleteValues, GM_getValues, GM_setValues } from "ViteGM";
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

export class ApiTest_deleteValues extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_deleteValues === "function";
  }
  public getApiName() {
    return "GM_deleteValues";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.deleteValues",
      isSupport: this.isSupportGM() && typeof GM.deleteValues === "function",
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
              const ret = GM_deleteValues(...args);
              resolve(ret);
            });
          },
          formList: (<PopsPanelContainerConfig>result["views"][1]).views,
        },
        {
          name: apiAsyncInfo.name,
          fn: GM.deleteValues,
          formList: (<PopsPanelContainerConfig>result["views"][2]).views,
        },
      ].forEach((data) => {
        let apiNameTag = data.name;

        data.formList.push(
          (() => {
            let localStorageDataValue = {
              GM_deleteValues_key_1: 555,
              "GM.deleteValues_key_2": 666,
            };
            return UIInfo(() => {
              return {
                text: "测试存储对象然后删除再读取",
                description: `${JSON.stringify(localStorageDataValue)}`,
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
                      let localKeys = Object.keys(localStorageDataValue);
                      let values = GM_getValues(localKeys);
                      if (JSON.stringify(values) !== JSON.stringify(localStorageDataValue)) {
                        Qmsg.error("写入失败，写入的数据和读取的数据不相同");
                        return;
                      }
                      await data.fn(localKeys);
                      let values2 = GM_getValues(localKeys);
                      if (values2 == null) {
                        Qmsg.warning("删除情况未知，因为读取到的数据为null");
                      } else if (typeof values2 === "object" && JSON.stringify(values2) === "{}") {
                        Qmsg.success("删除成功，读取的数据为{}");
                      } else {
                        Qmsg.error("删除情况未知，因为读取到的数据类型不是object");
                        console.log(values2);
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
