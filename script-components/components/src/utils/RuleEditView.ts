import type { PopsConfirmConfig } from "@whitesev/pops/dist/types/src/components/confirm/types/index";
import { DOMUtils, pops, utils } from "../base.env";

type RuleEditViewOption<T> = {
  /**
   * 标题
   */
  title: string;
  /**
   * 获取当前的数据
   */
  data: () => IPromise<T>;
  /**
   * 弹窗关闭的回调
   */
  dialogCloseCallBack?: (
    /**
     * 当前是否是提交表单内容时触发的回调
     */
    isSubmit: boolean
  ) => IPromise<void>;
  /**
   * \<form\>内渲染的元素
   */
  getView: (
    /**
     * 数据
     */
    data: T
  ) => IPromise<DocumentFragment | HTMLElement | (HTMLElement | DocumentFragment)[]>;
  /**
   * 自定义的style
   */
  style?: string;
  /**
   * 当提交表单时触发的回调函数
   */
  onsubmit /**
   * @param event
   * @returns
   * + true 校验通过
   * + false 校验失败
   */: (
    /**
     * 表单元素
     */
    $form: HTMLFormElement,
    /**
     * 数据
     */
    data: T
  ) => IPromise<{
    success: boolean;
    data: T;
  }>;
  /**
   * 按钮配置
   */
  btn?: PopsConfirmConfig["btn"];
  /**
   * 添加/编辑框的宽度，注意带单位，px或%
   */
  width?: () => string;
  /**
   * 添加/编辑框的高度，注意带单位，px或%
   */
  height?: () => string;
};

class RuleEditView<T> {
  option: RuleEditViewOption<T>;
  constructor(option: RuleEditViewOption<T>) {
    this.option = option;
  }
  /**
   * 显示视图
   */
  async showView() {
    const $dialog = pops.confirm({
      title: {
        text: this.option.title,
        position: "center",
      },
      content: {
        text: /*html*/ `
        <form class="rule-form-container" onsubmit="return false">
            <ul class="rule-form-ulist"></ul>
            <input type="submit" style="display: none;" />
        </form>
        `,
        html: true,
      },
      btn: utils.assign(
        {
          ok: {
            callback: async () => {
              await submitSaveOption();
            },
          },
        },
        this.option.btn || {},
        true
      ),
      drag: true,
      mask: {
        enable: true,
      },
      style: /*css*/ `
      ${pops.config.cssText.panelCSS}
      
      .rule-form-container {
          
      }
      .rule-form-container li{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 20px;
          gap: 10px;
      }
      .rule-form-ulist-dynamic{
        --button-margin-top: 0px;
        --button-margin-right: 0px;
        --button-margin-bottom: 0px;
        --button-margin-left: 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 0px 5px 20px;
      }
      .rule-form-ulist-dynamic__inner{
        width: 100%;
      }
      .rule-form-ulist-dynamic__inner-container{
        display: flex;
        align-items: center;
      }
      .dynamic-forms{
        width: 100%;
      }
      .pops-panel-item-left-main-text{
          max-width: 150px;
      }
      .pops-panel-item-right-text{
          padding-left: 30px;
      }
      .pops-panel-item-right-text,
      .pops-panel-item-right-main-text{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
      }
      .pops-panel-item-left-desc-text{
        line-height: normal;
        margin-top: 6px;
        font-size: 0.8em;
        color: rgb(108, 108, 108);
      }

      ${this.option?.style ?? ""}
      `,
      width: typeof this.option.width === "function" ? this.option.width() : window.innerWidth > 500 ? "500px" : "88vw",
      height:
        typeof this.option.height === "function" ? this.option.height() : window.innerHeight > 500 ? "500px" : "80vh",
    });

    const $form = $dialog.$shadowRoot.querySelector<HTMLFormElement>(".rule-form-container")!;
    const $submitInput = $dialog.$shadowRoot.querySelector<HTMLInputElement>("input[type=submit]")!;
    const $ulist = $dialog.$shadowRoot.querySelector<HTMLUListElement>(".rule-form-ulist")!;
    const view = await this.option.getView(await this.option.data());
    DOMUtils.append($ulist, view);
    /**
     * 保存配置的回调
     */
    const submitSaveOption = async () => {
      const result = await this.option.onsubmit($form, await this.option.data());
      if (!result.success) {
        return;
      }
      $dialog.close();
      if (typeof this.option.dialogCloseCallBack === "function") {
        await this.option.dialogCloseCallBack(true);
      }
    };
    return $dialog;
  }
}

export { RuleEditView, type RuleEditViewOption };
