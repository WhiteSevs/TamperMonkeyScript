import { GM, GM_registerMenuCommand, GM_unregisterMenuCommand } from "ViteGM";
import { ApiTestBase } from "../base/ApiTestBase";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import { DOMUtils, setTimeoutLog, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import { TagUtil } from "@/setting/tag";
import Qmsg from "qmsg";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";

export class ApiTest_unregisterMenuCommand extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_unregisterMenuCommand === "function";
  }
  public getApiName() {
    return "GM_unregisterMenuCommand";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.unregisterMenuCommand",
      isSupport: this.isSupportGM() && typeof GM.unregisterMenuCommand === "function",
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
              const ret = GM_unregisterMenuCommand(...args);
              resolve(ret);
            });
          },
          formList: (<PopsPanelContainerConfig>result["views"][1]).views,
        },
        {
          name: apiAsyncInfo.name,
          fn: GM.unregisterMenuCommand,
          formList: (<PopsPanelContainerConfig>result["views"][2]).views,
        },
      ].forEach((data) => {
        data.formList.push(
          UIInfo(() => {
            try {
              return {
                text: "注册并卸载菜单 ==> Test UnRegister Menu",
                description: "请自行验证是否成功卸载菜单",
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
                  let timeId: number;
                  DOMUtils.on($button, "click", (event) => {
                    try {
                      DOMUtils.preventEvent(event);
                      clearTimeout(timeId);

                      const menuCommandId = GM_registerMenuCommand("Test UnRegister Menu", (event) => {});
                      Qmsg.info("已注册菜单，10s后自动执行卸载", {
                        timeout: 10 * 1000,
                      });
                      clearTimeout(timeId);
                      timeId = setTimeoutLog(async () => {
                        await data.fn(menuCommandId);
                        Qmsg.success("已执行卸载菜单命令，请自行验证");
                      }, 10 * 1000);
                    } catch (error: any) {
                      Qmsg.error(error.toString());
                    }
                  });
                },
              };
            } catch (error) {
              console.error(error);
              return {
                text: "执行错误 " + error,
                tag: "error",
              };
            } finally {
            }
          })
        );
      });
    }
    return result;
  }
}
