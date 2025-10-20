import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { AnyTouch, DOMUtils, httpx, log, pops, SCRIPT_NAME, utils } from "../base.env";
import { GM_deleteValue, GM_getValue, GM_info, GM_listValues, GM_setValue, GM_setValues } from "ViteGM";
import { PanelUISize } from "./panel-ui-size";
import Qmsg from "qmsg";
import { KEY } from "./panel-config";
import { PanelSizeUtil } from "./panel-size-util";
import { CommonUtil } from "../utils/CommonUtil";

/**
 * 油猴菜单内容配置
 */
export const PanelContent = {
  $data: {
    /**
     * @private
     */
    __contentConfig: null as null | UtilsDictionary<number, PopsPanelContentConfig[]>,
    get contentConfig() {
      if (this.__contentConfig == null) {
        this.__contentConfig = new utils.Dictionary<number, PopsPanelContentConfig[]>();
      }
      return this.__contentConfig;
    },
    /**
     * @private
     */
    __defaultBottomContentConfig: [] as PopsPanelContentConfig[],
  },
  /**
   * 设置所有配置项，用于初始化默认的值
   *
   * 如果是第一组添加的话，那么它默认就是设置菜单打开的配置
   * @param configList 配置项
   */
  addContentConfig(configList: PopsPanelContentConfig | PopsPanelContentConfig[]) {
    if (!Array.isArray(configList)) {
      configList = [configList];
    }
    let index = this.$data.contentConfig.keys().length;
    this.$data.contentConfig.set(index, configList);
  },
  /**
   * 获取所有的配置内容，用于初始化默认的值
   */
  getAllContentConfig(): PopsPanelContentConfig[] {
    return this.$data.contentConfig.values().flat();
  },
  /**
   * 获取配置内容
   * @param index 配置索引
   */
  getConfig(index: number = 0): PopsPanelContentConfig[] {
    return this.$data.contentConfig.get(index) ?? [];
  },
  /**
   * 获取左侧底部默认的配置项
   */
  getDefaultBottomContentConfig(): PopsPanelContentConfig[] {
    if (this.$data.__defaultBottomContentConfig.length) {
      return this.$data.__defaultBottomContentConfig;
    }
    let isDoubleClick = false;
    let timer: number | undefined = void 0;

    /**
     * 导出至文件
     */
    const exportToFile = (fileName: string, fileData: any) => {
      if (typeof fileData !== "string") {
        fileData = CommonUtil.toStr(fileData);
      }
      const blob = new Blob([fileData]);
      const blobUrl = globalThis.URL.createObjectURL(blob);
      const $anchor = DOMUtils.createElement("a", {
        href: blobUrl,
        download: fileName,
      });
      $anchor.click();
      utils.workerSetTimeout(() => {
        globalThis.URL.revokeObjectURL(blobUrl);
      }, 500);
    };
    /**
     * 双击 - 打开脚本配置
     */
    const dbclick_callback = () => {
      /**
       * 导入配置
       * @param importEndCallBack 导入完毕后的回调
       */
      const importConfig = (importEndCallBack?: () => void) => {
        const $alert = pops.alert({
          title: {
            text: "请选择导入方式",
            position: "center",
          },
          content: {
            text: /*html*/ `
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,
            html: true,
          },
          btn: {
            ok: { enable: false },
            close: {
              enable: true,
              callback(details, event) {
                details.close();
              },
            },
          },
          drag: true,
          mask: {
            enable: true,
          },
          width: PanelUISize.info.width,
          height: PanelUISize.info.height,
          style: /*css*/ `
          .btn-control{
              display: inline-block;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`,
        });
        /** 本地导入 */
        const $local = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='local']")!;
        /** 网络导入 */
        const $network = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='network']")!;
        /** 剪贴板导入 */
        const $clipboard = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='clipboard']")!;
        /**
         * 将获取到的配置更新至存储
         */
        const updateConfigToStorage = async (data: any) => {
          const clearLocalStorage = confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）");
          if (clearLocalStorage) {
            if (typeof GM_listValues === "function") {
              if (typeof GM_deleteValue === "function") {
                const localStorageKeys = GM_listValues();
                localStorageKeys.forEach((key) => {
                  GM_deleteValue(key);
                });
                Qmsg.success("已清空脚本存储的配置");
              } else {
                Qmsg.error("不支持GM_deleteValue函数，无法执行删除脚本配置");
              }
            } else {
              Qmsg.error("不支持GM_listValues函数，无法清空脚本存储的配置");
            }
          }
          if (typeof GM_setValues === "function") {
            GM_setValues(data);
          } else {
            const keys = Object.keys(data);
            keys.forEach((key) => {
              const value = data[key];
              GM_setValue(key, value);
            });
          }
          Qmsg.success("配置导入完毕");
          importEndCallBack?.();
        };
        /**
         * @param configText 订阅文件文本
         */
        const importFile = (configText: string) => {
          return new Promise<boolean>(async (resolve) => {
            const data = utils.toJSON(configText);
            if (Object.keys(data).length === 0) {
              Qmsg.warning("解析为空配置，不导入");
            } else {
              await updateConfigToStorage(data);
            }
            resolve(true);
          });
        };
        // 本地导入
        DOMUtils.on($local, "click", (event) => {
          DOMUtils.preventEvent(event);
          $alert.close();
          const $input = DOMUtils.createElement("input", {
            type: "file",
            accept: ".json",
          });
          DOMUtils.on($input, ["propertychange", "input"], (event) => {
            if (!$input.files?.length) {
              return;
            }
            const uploadFile = $input.files![0];
            const fileReader = new FileReader();
            fileReader.onload = () => {
              importFile(fileReader.result as string);
            };
            fileReader.readAsText(uploadFile, "UTF-8");
          });
          $input.click();
        });
        // 网络导入
        DOMUtils.on($network, "click", (event) => {
          DOMUtils.preventEvent(event);
          $alert.close();
          const $prompt = pops.prompt({
            title: {
              text: "网络导入",
              position: "center",
            },
            content: {
              text: "",
              placeholder: "请填写URL",
              focus: true,
            },
            btn: {
              close: {
                enable: true,
                callback(details, event) {
                  details.close();
                },
              },
              ok: {
                text: "导入",
                callback: async (details, event) => {
                  const url = details.text;
                  if (utils.isNull(url)) {
                    Qmsg.error("请填入完整的url");
                    return;
                  }
                  const $loading = Qmsg.loading("正在获取配置...");
                  const response = await httpx.get(url, {
                    allowInterceptConfig: false,
                  });
                  $loading.close();
                  if (!response.status) {
                    log.error(response);
                    Qmsg.error("获取配置失败", { consoleLogContent: true });
                    return;
                  }
                  const flag = await importFile(response.data.responseText);
                  if (!flag) {
                    return;
                  }
                  details.close();
                },
              },
              cancel: {
                enable: false,
              },
            },
            drag: true,
            mask: {
              enable: true,
            },
            width: PanelUISize.info.width,
            height: "auto",
          });
          const $promptInput = $prompt.$shadowRoot.querySelector<HTMLInputElement>("input")!;
          const $promptOk = $prompt.$shadowRoot.querySelector<HTMLElement>(".pops-prompt-btn-ok")!;
          DOMUtils.on($promptInput, ["input", "propertychange"], (event) => {
            const value = DOMUtils.val($promptInput);
            if (value === "") {
              DOMUtils.attr($promptOk, "disabled", "true");
            } else {
              DOMUtils.removeAttr($promptOk, "disabled");
            }
          });
          DOMUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
            if (keyName === "Enter" && otherCodeList.length === 0) {
              const value = DOMUtils.val($promptInput);
              if (value !== "") {
                DOMUtils.trigger($promptOk, "click");
              }
            }
          });
          DOMUtils.trigger($promptInput, "input");
        });
        // 剪贴板导入
        DOMUtils.on($clipboard, "click", async (event) => {
          DOMUtils.preventEvent(event);
          $alert.close();
          let clipboardText = await CommonUtil.getClipboardText();
          if (clipboardText.trim() === "") {
            Qmsg.warning("获取到的剪贴板内容为空");
            return;
          }
          const flag = await importFile(clipboardText);
          if (!flag) {
            return;
          }
        });
      };
      /**
       * 导出配置
       */
      const exportConfig = (
        fileName: string = `${SCRIPT_NAME}_panel-setting-${utils.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`,
        fileData: any
      ) => {
        const $alert = pops.alert({
          title: {
            text: "请选择导出方式",
            position: "center",
          },
          content: {
            text: /*html*/ `
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
            `,
            html: true,
          },
          btn: {
            ok: { enable: false },
            close: {
              enable: true,
              callback(details, event) {
                details.close();
              },
            },
          },
          drag: true,
          mask: {
            enable: true,
          },
          width: PanelUISize.info.width,
          height: PanelUISize.info.height,
          style: /*css*/ `
          .btn-control{
              display: inline-block;
              margin: 10px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
              cursor: pointer;
          }
          .btn-control:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }`,
        });
        const $exportToFile = $alert.$shadowRoot.querySelector<HTMLElement>(
          ".btn-control[data-mode='export-to-file']"
        )!;
        const $exportToClipboard = $alert.$shadowRoot.querySelector<HTMLElement>(
          ".btn-control[data-mode='export-to-clipboard']"
        )!;
        DOMUtils.on($exportToFile, "click", (event) => {
          DOMUtils.preventEvent(event);
          try {
            exportToFile(fileName, fileData);
            $alert.close();
          } catch (error: any) {
            Qmsg.error(error.toString(), { consoleLogContent: true });
          }
        });
        DOMUtils.on($exportToClipboard, "click", async (event) => {
          const result = await utils.copy(fileData);
          if (result) {
            Qmsg.success("复制成功");
            $alert.close();
          } else {
            Qmsg.error("复制失败");
          }
        });
      };
      const $dialog = pops.confirm({
        title: {
          text: "配置",
          position: "center",
        },
        content: {
          text: /*html*/ `
            <textarea name="config-value" id="config" readonly></textarea>
          `,
          html: true,
        },
        btn: {
          ok: {
            enable: true,
            type: "primary",
            text: "导入",
            callback(eventDetails, event) {
              importConfig();
            },
          },
          cancel: {
            enable: true,
            text: "导出",
            callback(eventDetails, event) {
              exportConfig(void 0, configDataStr);
            },
          },
        },
        width: PanelSizeUtil.width < 450 ? "90vw" : "450px",
        height: "auto",
        style: /*css*/ `
          .pops-content textarea {
            --textarea-bd-color: #dcdfe6;
            display: inline-block;
            resize: vertical;
            padding: 5px 15px;
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            color: #606266;
            border: 0;
            border-radius: 0;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            width: 100%;
            height: 100%;
            appearance: none;
            resize: none;
          }
          .pops-content textarea{
            height: 500px;
          }
          .pops-content textarea:focus {
            --textarea-bd-color: #3677f0;
          }
          .pops-content textarea:hover {
            --textarea-bd-color: #c0c4cc;
          }
        `,
      });
      const $textarea = $dialog.$shadowRoot.querySelector<HTMLTextAreaElement>("textarea")!;
      const configData = {};
      if (typeof GM_listValues === "function") {
        const LocalKeys = GM_listValues();
        LocalKeys.forEach((key) => {
          const value = GM_getValue(key);
          Reflect.set(configData, key, value);
        });
      } else {
        Qmsg.warning("不支持函数GM_listValues，仅导出菜单配置");
        const panelLocalValue = GM_getValue(KEY);
        Reflect.set(configData, KEY, panelLocalValue);
      }
      const configDataStr = CommonUtil.toStr(configData);
      $textarea.value = configDataStr;
    };
    /**
     * 单击 - 打开脚本反馈页面
     */
    const click_callback = () => {
      let supportURL = GM_info?.script?.supportURL || GM_info?.script?.namespace;
      if (typeof supportURL === "string" && utils.isNotNull(supportURL)) {
        window.open(supportURL, "_blank");
      }
    };
    return [
      {
        id: "script-version",
        title: `版本：${GM_info?.script?.version || "未知"}`,
        isBottom: true,
        forms: [],
        clickFirstCallback() {
          return false;
        },
        afterRender(config) {
          /* 是否是双击 */
          const anyTouch = new AnyTouch(config.$asideLiElement);
          anyTouch.on("tap", function (event) {
            clearTimeout(timer);
            timer = void 0;
            if (isDoubleClick) {
              isDoubleClick = false;
              /* 判定为双击 */
              dbclick_callback();
            } else {
              timer = setTimeout(() => {
                isDoubleClick = false;
                // 判断为单击
                click_callback();
              }, 200);
              isDoubleClick = true;
            }
          });
        },
      },
    ];
  },
  /**
   * 设置左侧底部默认的配置项
   */
  setDefaultBottomContentConfig(config: PopsPanelContentConfig[]) {
    this.$data.__defaultBottomContentConfig = config;
  },
};
