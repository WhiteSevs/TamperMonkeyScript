import { DOMUtils, pops, utils } from "@/env";
import { CookieInfoTransform } from "@/main/CookieInfoTransform";
import { UIOwn } from "@components/setting/components/ui-own";
import { PanelUISize } from "@components/setting/panel-ui-size";
import type { PopsPanelInputConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-input";
import type { PopsPanelSelectConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-select";
import type { PopsPanelTextAreaConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-textarea";
import Qmsg from "qmsg";
import { CookieManager } from "./CookieManager";

/**
 * 编辑UI-输入框
 */
const edit_ui_input = (text: string, getValue: () => string, setValue: (value: string) => void, disabled?: boolean) => {
  const config: PopsPanelInputConfig = {
    text: text,
    type: "input",
    props: {},
    attributes: {},
    description: "",
    getValue() {
      return getValue();
    },
    callback(event: any, value: string) {
      setValue(value);
    },
    placeholder: "",
    disabled: Boolean(disabled),
  };
  return config;
};
/**
 * 编辑UI-多行文本框
 */
const edit_ui_textarea = (
  text: string,
  getValue: () => string,
  setValue: (value: string) => void,
  disabled?: boolean
) => {
  const config: PopsPanelTextAreaConfig = {
    text: text,
    type: "textarea",
    props: {},
    attributes: {},
    description: "",
    placeholder: "",
    getValue() {
      return getValue();
    },
    disabled,
    callback: function (event: InputEvent & { target: HTMLTextAreaElement }, value: string): void {
      setValue(value);
    },
  };

  return config;
};
/**
 * 编辑UI-选择框
 */
const edit_ui_select = <T>(
  text: string,
  data: PopsPanelSelectConfig<T>["data"] | (() => PopsPanelSelectConfig<T>["data"]),
  getValue: () => T,
  setValue: (selectedValue: T) => void,
  disabled?: boolean
) => {
  const config: PopsPanelSelectConfig<T> = {
    text: text,
    type: "select",
    description: "",
    attributes: {},
    props: {},
    getValue() {
      return getValue();
    },
    callback(isSelectedInfo) {
      const value = isSelectedInfo!.value;
      setValue(value);
    },
    data: typeof data === "function" ? data() : data,
    disabled: Boolean(disabled),
    width: "100%",
  };
  return config;
};

export const CookieManagerEditView = {
  init() {},
  /**
   * 显示视图
   * @param cookieInfo 需要编辑的cookie，为空的话是添加
   * @param dialogCloseCallBack 弹窗关闭的回调
   */
  showView(
    __cookieInfo__?: GMCookieInstance | CookieStoreData,
    dialogCloseCallBack?: (cookieInfo: GMCookieInstance) => void
  ) {
    /**
     * 当前是否是编辑
     */
    let isEdit = !!__cookieInfo__;
    let defaultCookieInfo: GMCookieInstance = {
      name: "",
      value: "",
      domain: window.location.hostname,
      path: "/",
      secure: false,
      session: false,
      hostOnly: false,
      httpOnly: false,
      sameSite: "lax",
      // 一个月后过期
      // 单位：毫秒
      expirationDate: Date.now() + 60 * 60 * 24 * 30 * 1000,
    };
    let cookieInfo: GMCookieInstance = utils.assign({} as GMCookieInstance, defaultCookieInfo, true);
    utils.assign(cookieInfo, __cookieInfo__ ?? {}, true);
    cookieInfo = CookieInfoTransform.beforeEdit(cookieInfo, isEdit);
    const $dialog = pops.confirm({
      title: {
        text: isEdit ? "编辑Cookie" : "添加Cookie",
        position: "center",
      },
      content: {
        text: "",
        html: true,
      },
      drag: true,
      btn: {
        position: "center",
        ok: {
          text: isEdit ? "编辑" : "添加",
          async callback(eventDetails) {
            const valid = CookieManagerEditView.validCookieInfo(cookieInfo);
            if (!valid.status) {
              if (typeof valid.msg === "string") {
                Qmsg.error(valid.msg);
              }
              return;
            }
            // 把值进行编码
            cookieInfo.value = encodeURIComponent(cookieInfo.value);
            cookieInfo = CookieInfoTransform.afterEdit(cookieInfo);
            if (isEdit) {
              // 编辑
              const result = await CookieManager.updateCookie(cookieInfo);
              if (result) {
                Qmsg.error(result.toString());
              } else {
                Qmsg.success("修改成功");
                eventDetails.close();
              }
            } else {
              // 添加
              const result = await CookieManager.addCookie(cookieInfo);
              if (result) {
                Qmsg.error(result.toString());
              } else {
                Qmsg.success("添加成功");
                eventDetails.close();
              }
            }
            if (typeof dialogCloseCallBack === "function") {
              dialogCloseCallBack(cookieInfo);
            }
          },
        },
        cancel: {
          text: "取消",
        },
      },
      mask: {
        enable: true,
      },
      width: PanelUISize.settingMiddle.width,
      height: "auto",
      style: /*css*/ `
      ${pops.config.cssText.panelCSS}

      .pops-panel-input input:disabled{
          color: #b4b4b4;
      }
      .pops-confirm-content{
          padding: 10px;
      }
      .pops-confirm-content li{
          display: flex;
          flex-direction: column;
      }
      .pops-panel-item-left-text{
          margin-bottom: 5px;
      }
      .pops-panel-input.pops-input-disabled{
          border: 1px solid #dcdfe6;
      }
      .pops-panel-textarea textarea{
        resize: auto;
        border-radius: 4px;
      }
      .pops-panel-input{
        width: 100%;
      }
      #cookie-item-property-expires{
        border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
        border-radius: 4px;
        background: #ffffff;
        width: 100%;
        height: 32px;
        padding: 0px 8px;
      }
      #cookie-item-property-expires:hover{
        border: 1px solid #c0c4cc
      }
      #cookie-item-property-expires:focus,
      #cookie-item-property-expires:focus-within{
        outline: 0;
        border: 1px solid #409eff;
        border-radius: 4px;
        box-shadow: none;
      }
      `,
      darkStyle: /*css*/ `
      #cookie-item-property-expires,
      .export-example-code-text-container,
      .cookir-format-encode-pwd-container input{
        background: #232323;
      }
      #cookie-item-property-expires{
        color: #ffffff;
        border: 1px solid #414141;
      }
      .cookir-format-encode-pwd-container input{
        color: #ffffff;
      }
      `,
    });
    const $editContent = $dialog.$shadowRoot.querySelector<HTMLElement>(".pops-confirm-content")!;

    const panelHandlerComponents = pops.config.PanelHandlerComponents();
    const $name = panelHandlerComponents.createSectionContainerItem_input(
      edit_ui_input(
        "name",
        () => cookieInfo.name,
        (value) => (cookieInfo.name = value),
        isEdit
      )
    ).$el;
    const $value = panelHandlerComponents.createSectionContainerItem_textarea(
      edit_ui_textarea(
        "value",
        () => cookieInfo.value,
        (value) => (cookieInfo.value = value)
      )
    ).$el;
    const $domain = panelHandlerComponents.createSectionContainerItem_input(
      edit_ui_input(
        "domain",
        () => cookieInfo.domain,
        (value) => (cookieInfo.domain = value)
      )
    ).$el;
    const $path = panelHandlerComponents.createSectionContainerItem_input(
      edit_ui_input(
        "path",
        () => cookieInfo.path,
        (value) => (cookieInfo.path = value)
      )
    ).$el;
    let $expires: HTMLLIElement;
    if (cookieInfo.session) {
      // session的话就是 没有过期时间，变成输出框
      $expires = panelHandlerComponents.createSectionContainerItem_input(
        edit_ui_input(
          "expires",
          () => "会话",
          () => {},
          true
        )
      ).$el;
    } else {
      const expiresTemplate = UIOwn(() => {
        const $li = DOMUtils.createElement("li", {
          innerHTML: /*html*/ `
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`,
        });
        const $dateTime = $li.querySelector<HTMLInputElement>("#cookie-item-property-expires")!;
        $dateTime.valueAsNumber = cookieInfo.expirationDate!;
        DOMUtils.on($dateTime, ["change", "input", "propertychange"], (event) => {
          DOMUtils.preventEvent(event);
          cookieInfo.expirationDate = $dateTime.valueAsNumber;
        });
        return $li;
      });
      $expires = panelHandlerComponents.createSectionContainerItem_own(expiresTemplate).$el;
    }
    const $httpOnly = panelHandlerComponents.createSectionContainerItem_select(
      edit_ui_select(
        "httpOnly",
        [
          {
            text: "true",
            value: true,
          },
          {
            text: "false",
            value: false,
          },
        ],
        () => cookieInfo.httpOnly,
        (value) => (cookieInfo.httpOnly = value)
      )
    ).$el;
    const $secure = panelHandlerComponents.createSectionContainerItem_select(
      edit_ui_select(
        "secure",
        [
          {
            text: "true",
            value: true,
          },
          {
            text: "false",
            value: false,
          },
        ],
        () => cookieInfo.secure,
        (value) => (cookieInfo.secure = value)
      )
    ).$el;
    let sameSiteData = [
      {
        text: "no_restriction",
        value: "no_restriction",
      },
      {
        text: "lax",
        value: "lax",
      },
      {
        text: "strict",
        value: "strict",
      },
      {
        text: "unspecified",
        value: "unspecified",
      },
    ];
    if (CookieManager.cookieManagerApiName === "cookieStore") {
      // cookieStore只能是三个值
      sameSiteData = [
        {
          text: "lax",
          value: "lax",
        },
        {
          text: "strict",
          value: "strict",
        },
        {
          text: "none",
          value: "none",
        },
      ];
    }
    const $sameSite = panelHandlerComponents.createSectionContainerItem_select(
      edit_ui_select(
        "sameSite",
        sameSiteData,
        () => cookieInfo.sameSite,
        (value) => (cookieInfo.sameSite = value)
      )
    ).$el;
    DOMUtils.append($editContent, [$name, $value]);
    if (CookieManager.cookieManagerApiName === "GM_cookie" || CookieManager.cookieManagerApiName === "GM.cookie") {
      DOMUtils.append($editContent, [$domain, $path, $expires, $httpOnly, $secure, $sameSite]);
    } else if (CookieManager.cookieManagerApiName === "cookieStore") {
      DOMUtils.append($editContent, [$domain, $path, $expires, $sameSite]);
    }
  },
  /**
   * Cookie信息校验
   */
  validCookieInfo(cookieInfo: GMCookieInstance): {
    status: boolean;
    msg?: string;
  } {
    if (cookieInfo.name == null || cookieInfo.name == "") {
      return {
        status: false,
        msg: "name不能为空",
      };
    }
    if (cookieInfo.domain == null || cookieInfo.domain == "") {
      return {
        status: false,
        msg: "domain不能为空",
      };
    }
    if (cookieInfo.path == null || cookieInfo.path == "") {
      return {
        status: false,
        msg: "path不能为空",
      };
    }
    return {
      status: true,
    };
  },
};
