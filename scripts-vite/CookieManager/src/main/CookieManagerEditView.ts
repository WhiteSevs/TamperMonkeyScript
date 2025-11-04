import { DOMUtils, pops, utils } from "@/env";
import type { PopsPanelInputConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-input";
import type { PopsPanelSelectConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-select";
import { CookieManager } from "./CookieManager";
import Qmsg from "qmsg";
import { CookieInfoTransform } from "@/main/CookieInfoTransform";
import { PanelUISize } from "@components/setting/panel-ui-size";
import type { PopsPanelTextAreaConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-textarea";
import { UIOwn } from "@components/setting/components/ui-own";

/**
 * 编辑UI-输入框
 */
let edit_ui_input = (text: string, getValue: () => string, setValue: (value: string) => void, disabled?: boolean) => {
  let config: PopsPanelInputConfig = {
    text: text,
    type: "input",
    isNumber: false,
    isPassword: false,
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
let edit_ui_textarea = (
  text: string,
  getValue: () => string,
  setValue: (value: string) => void,
  disabled?: boolean
) => {
  let config: PopsPanelTextAreaConfig = {
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
let edit_ui_select = <T>(
  text: string,
  data: PopsPanelSelectConfig<T>["data"] | (() => PopsPanelSelectConfig<T>["data"]),
  getValue: () => T,
  setValue: (selectedValue: T) => void,
  disabled?: boolean
) => {
  let config: PopsPanelSelectConfig<T> = {
    text: text,
    type: "select",
    description: "",
    attributes: {},
    props: {},
    getValue() {
      return getValue();
    },
    callback(event, isSelectedValue, isSelectedText) {
      let value = isSelectedValue;
      setValue(value);
    },
    data: typeof data === "function" ? data() : data,
    disabled: Boolean(disabled),
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
          async callback(eventDetails, event) {
            let valid = CookieManagerEditView.validCookieInfo(cookieInfo);
            if (!valid) {
              return;
            }
            // 把值进行编码
            cookieInfo.value = encodeURIComponent(cookieInfo.value);
            cookieInfo = CookieInfoTransform.afterEdit(cookieInfo);
            if (isEdit) {
              // 编辑
              let result = await CookieManager.updateCookie(cookieInfo);
              if (result) {
                Qmsg.error(result.toString());
              } else {
                Qmsg.success("修改成功");
                eventDetails.close();
              }
            } else {
              // 添加
              let result = await CookieManager.addCookie(cookieInfo);
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
				#cookie-item-property-expires{
					border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
					border-radius: 4px;
					background-color: #ffffff;
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
    );
    const $value = panelHandlerComponents.createSectionContainerItem_textarea(
      edit_ui_textarea(
        "value",
        () => cookieInfo.value,
        (value) => (cookieInfo.value = value)
      )
    );
    const $domain = panelHandlerComponents.createSectionContainerItem_input(
      edit_ui_input(
        "domain",
        () => cookieInfo.domain,
        (value) => (cookieInfo.domain = value)
      )
    );
    const $path = panelHandlerComponents.createSectionContainerItem_input(
      edit_ui_input(
        "path",
        () => cookieInfo.path,
        (value) => (cookieInfo.path = value)
      )
    );
    let $expires: HTMLLIElement;
    if (cookieInfo.session) {
      // session的话就是 没有过期时间，变成输出框
      $expires = panelHandlerComponents.createSectionContainerItem_input(
        edit_ui_input(
          "expires",
          () => "会话",
          (value) => {},
          true
        )
      );
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
      $expires = panelHandlerComponents.createSectionContainerItem_own(expiresTemplate);
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
    );
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
    );
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
    );
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
  validCookieInfo(cookieInfo: GMCookieInstance): boolean {
    if (cookieInfo.name == null || cookieInfo.name == "") {
      Qmsg.error("name不能为空");
      return false;
    }
    if (cookieInfo.domain == null || cookieInfo.domain == "") {
      Qmsg.error("domain不能为空");
      return false;
    }
    if (cookieInfo.path == null || cookieInfo.path == "") {
      Qmsg.error("path不能为空");
      return false;
    }
    return true;
  },
};
