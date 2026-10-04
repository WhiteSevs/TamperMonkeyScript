import Qmsg from "qmsg";
import { DOMUtils, pops, SCRIPT_NAME, utils } from "../../env.base";
import { CommonUtil } from "../../utils/CommonUtil";
import { PanelSizeUtil } from "../panel-size-util";
import { PanelUISize } from "../panel-ui-size";

export const UIDialogCode = (config?: {
  /**
   *
   * 获取配置数据
   */
  getConfigData: () => object | string;
  /**
   *
   *
   * 获取显示的配置文本
   */
  getConfigShowData?: () => string;
  /**
   * 标题文本
   */
  titleText?: string;
  /**
   * 翻译函数
   */
  translateCallback?: (text: string, translateMap?: Record<string, any>) => string;
  /**
   * 是否开启导出
   * @default true
   */
  isEnableExport?: boolean;
  /**
   * 是否开启导入
   * @default false
   */
  isEnableImport?: boolean;
  /**
   * 导出配置的文件名
   */
  exportFileName?: string | (() => IPromise<string>);
  /**
   * 导入回调
   * @param data
   */
  importCallback?: () => IPromise<void>;
}) => {
  /**
   * 翻译函数的回调
   * @param text 文本
   */
  const translateCallback = (text: string, translateMap?: Record<string, any>) => {
    if (config && typeof config.translateCallback === "function") {
      return config.translateCallback(text, translateMap);
    } else {
      if (typeof translateMap === "object" && translateMap) {
        for (const key in translateMap) {
          text = text.replaceAll(`{{${key}}}`, translateMap[key]);
        }
      }
      return text;
    }
  };

  /**
   * 导出配置
   */
  const exportConfig = (
    fileName: string = `${SCRIPT_NAME}_data-${utils.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`,
    fileData: any
  ) => {
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

    const $alert = pops.alert({
      title: {
        text: translateCallback("请选择导出方式"),
        position: "center",
      },
      content: {
        text: /*html*/ `
            <div class="btn-control" data-mode="export-to-file">${translateCallback("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${translateCallback("导出至剪贴板")}</div>
            `,
        html: true,
      },
      btn: {
        ok: { enable: false },
        close: {
          enable: true,
          callback(details) {
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
          .pops{
            max-height: 90dvh;
          }
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
    const $exportToFile = $alert.$shadowRoot.querySelector<HTMLElement>(".btn-control[data-mode='export-to-file']")!;
    const $exportToClipboard = $alert.$shadowRoot.querySelector<HTMLElement>(
      ".btn-control[data-mode='export-to-clipboard']"
    )!;
    DOMUtils.on($exportToFile, "click", async (event) => {
      DOMUtils.preventEvent(event);
      try {
        if (typeof config?.exportFileName === "function") {
          fileName = await config.exportFileName();
        } else if (typeof config?.exportFileName === "string") {
          fileName = config.exportFileName;
        }
        exportToFile(fileName, fileData);
        $alert.close();
      } catch (error: any) {
        Qmsg.error(error.toString(), { consoleLogContent: true });
      }
    });
    DOMUtils.on($exportToClipboard, "click", async () => {
      const result = await utils.copy(fileData);
      if (result) {
        Qmsg.success(translateCallback("复制成功"));
        $alert.close();
      } else {
        Qmsg.error(translateCallback("复制失败"));
      }
    });
  };
  const $dialog = pops.confirm({
    title: {
      text: translateCallback(config?.titleText ?? "配置"),
      position: "center",
    },
    content: {
      text: /*html*/ `<textarea name="config-value" id="config" readonly></textarea>`,
      html: true,
    },
    btn: {
      ok: {
        enable: config?.isEnableImport ?? false,
        type: "primary",
        text: translateCallback("导入"),
        callback() {
          config?.importCallback?.();
        },
      },
      cancel: {
        enable: config?.isEnableExport ?? true,
        text: translateCallback("导出"),
        callback() {
          exportConfig(void 0, config?.getConfigData());
        },
      },
    },
    width: PanelSizeUtil.width < 450 ? "90vw" : "450px",
    height: "auto",
    style: /*css*/ `
    .pops{
        max-height: 90dvh;
    }
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

  const data = config?.getConfigShowData ? config.getConfigShowData() : config?.getConfigData();
  $textarea.value = CommonUtil.toStr(data);

  return {
    $textarea,
  };
};
