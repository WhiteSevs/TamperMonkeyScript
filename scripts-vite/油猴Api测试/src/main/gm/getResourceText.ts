import { GM, GM_getResourceText } from "ViteGM";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { StorageApi } from "../StorageApi";
import { PanelKeyConfig } from "@/setting/panel-key-config";
import { UIInfo } from "@/setting/components/ui-info";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/types/main";
import { CommonUtil } from "@components/utils/CommonUtil";
import { ApiAsyncTestBase } from "../base/ApiAsyncTestBase";
import { TamperMonkeyUtils } from "@/utils/TamperMonkeyUtils";
import type { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-forms";

export class ApiTest_getResourceText extends ApiAsyncTestBase {
  public isSupport() {
    return typeof GM_getResourceText === "function";
  }
  public getApiName() {
    return "GM_getResourceText";
  }
  public getAsyncApiOption() {
    return {
      name: "GM.getResourceText",
      isSupport: this.isSupportGM() && typeof GM.getResourceText === "function",
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
      forms: [
        {
          type: "forms",
          text: "函数测试",
          forms: [
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
          type: "forms",
          text: "功能测试",
          forms: [],
        },
        {
          type: "forms",
          text: "功能测试（异步）",
          forms: [],
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
              const ret = GM_getResourceText(...args);
              resolve(ret);
            });
          },
          formList: (<PopsPanelFormsDetails>result["forms"][1]).forms,
        },
        {
          name: apiAsyncInfo.name,
          fn: GM.getResourceText,
          formList: (<PopsPanelFormsDetails>result["forms"][2]).forms,
        },
      ].forEach((data) => {
        let apiNameTag = data.name.replace(".", "__async__");
        data.formList.push(
          UIInfo(async () => {
            try {
              let resourceText = await data.fn("ViewerCSS");
              if (typeof resourceText === "string") {
                return {
                  text: CommonUtil.escapeHtml("支持通过@resource引用资源字符串"),
                  tag: "success",
                };
              } else {
                return {
                  text: CommonUtil.escapeHtml(data.name + " return is not string"),
                  tag: "error",
                };
              }
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
