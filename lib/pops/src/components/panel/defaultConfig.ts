import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import type { PopsPanelConfig } from "./types";

export const PopsPanelDefaultConfig = (): DeepRequired<PopsPanelConfig> => {
  return {
    title: {
      text: "默认标题",
      position: "center",
      html: false,
      style: "",
    },
    content: [
      {
        id: "whitesev-panel-config-1",
        title: "菜单配置1",
        headerTitle: "菜单配置1",
        isDefault: true,
        attributes: {
          "data-test": "test",
          "data-test-2": "test2",
        },
        views: [
          {
            className: "forms-1",
            text: "区域设置",
            type: "container",
            views: [
              {
                className: "panel-switch",
                text: "switch",
                type: "switch",
                disabled: false,
                description: "",
                getValue() {
                  return true;
                },
                callback(event, value) {
                  console.log("按钮开启状态：", value);
                },
              },
              {
                className: "panel-slider",
                text: "slider",
                type: "slider",
                description: "",
                disabled: false,
                getToolTipContent(value) {
                  return String(value);
                },
                isShowHoverTip: true,
                step: 1,
                getValue() {
                  return 50;
                },
                callback(event, value) {
                  console.log("滑块当前数值：", value);
                },
                min: 1,
                max: 100,
              },
              {
                className: "panel-button",
                text: "button",
                type: "button",
                description: "",
                disable: false,
                buttonIsRightIcon: false,
                buttonIcon: "view",
                buttonIconIsLoading: true,
                buttonType: "default",
                buttonText: "default按钮",
                callback(event) {
                  console.log("点击按钮", event);
                },
              },
              {
                className: "panel-button",
                text: "button",
                type: "button",
                buttonIcon: "eleme",
                buttonIconIsLoading: true,
                buttonType: "warning",
                buttonText: "warning按钮",
                callback(event) {
                  console.log("点击按钮", event);
                },
              },
              {
                className: "panel-button",
                text: "button",
                type: "button",
                buttonIcon: "chromeFilled",
                buttonIconIsLoading: true,
                buttonType: "danger",
                buttonText: "danger按钮",
                callback(event) {
                  console.log("点击按钮", event);
                },
              },
              {
                className: "panel-button",
                text: "button",
                type: "button",
                buttonIcon: "upload",
                buttonIconIsLoading: false,
                buttonType: "info",
                buttonText: "info按钮",
                callback(event) {
                  console.log("点击按钮", event);
                },
              },
            ],
          },
        ],
      },
      {
        id: "whitesev-panel-config-2",
        title: "菜单配置2",
        headerTitle: "菜单配置2",
        isDefault: false,
        attributes: {
          "data-value": "value",
          "data-value-2": "value2",
        },
        views: [
          {
            className: "panel-input",
            text: "input",
            type: "input",
            getValue() {
              return "50";
            },
            callback(event, value) {
              popsDOMUtils.preventEvent(event);
              console.log("输入框内容改变：", value);
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-input-number",
            text: "input-number",
            type: "input",
            inputType: "number",
            getValue() {
              return "50";
            },
            callback(event, value, valueAsNumber) {
              popsDOMUtils.preventEvent(event);
              console.log("输入框内容改变：", valueAsNumber);
              if (valueAsNumber! > 60) {
                return {
                  valid: false,
                  message: "输入值不能大于60，当前：" + value,
                };
              }
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-input-password",
            text: "input-password",
            type: "input",
            inputType: "password",
            placeholder: "请输入密码",
            getValue() {
              return "123456";
            },
            callback(event, value) {
              popsDOMUtils.preventEvent(event);
              console.log("密码输入框内容改变：", value);
            },
          },
          {
            className: "panel-input-file",
            text: "input-file",
            type: "input",
            inputType: "file",
            getValue() {
              return "";
            },
            callback(event, value) {
              popsDOMUtils.preventEvent(event);
              console.log("内容改变：", value);
            },
            placeholder: "请输入密码",
          },
          {
            className: "panel-input-date",
            text: "input-date",
            type: "input",
            inputType: "date",
            placeholder: "请输入内容",
            getValue() {
              const date = new Date();
              let hour = date.getHours().toString();
              let minutes = date.getMinutes().toString();
              if (hour.length === 1) {
                hour = `0${hour}`;
              }
              if (minutes.length === 1) {
                minutes = `0${minutes}`;
              }
              return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            },
            callback(event, value, valueAsNumber, valueAsDate) {
              popsDOMUtils.preventEvent(event);
              console.log("输入框内容改变：", value, valueAsNumber, valueAsDate);
            },
          },
          {
            className: "panel-input-datetime-local",
            text: "input-datetime-local",
            type: "input",
            inputType: "datetime-local",
            getValue() {
              const date = new Date();
              let hour = date.getHours().toString();
              let minutes = date.getMinutes().toString();
              if (hour.length === 1) {
                hour = `0${hour}`;
              }
              if (minutes.length === 1) {
                minutes = `0${minutes}`;
              }
              return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${hour}:${minutes}`;
            },
            callback(event, value, valueAsNumber, valueAsDate) {
              popsDOMUtils.preventEvent(event);
              console.log("输入框内容改变：", value, valueAsNumber, valueAsDate);
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-input-time",
            text: "input-time",
            type: "input",
            inputType: "time",
            getValue() {
              return "11:30";
            },
            callback(event, value, valueAsNumber, valueAsDate) {
              popsDOMUtils.preventEvent(event);
              console.log("输入框内容改变：", value, valueAsNumber, valueAsDate);
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-input-month",
            text: "input-month",
            type: "input",
            inputType: "month",
            getValue() {
              const date = new Date();
              return `${date.getFullYear()}-${date.getMonth() + 1}`;
            },
            callback(event, value, valueAsNumber, valueAsDate) {
              popsDOMUtils.preventEvent(event);
              console.log("输入框内容改变：", value, valueAsNumber, valueAsDate);
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-input-week",
            text: "input-week",
            type: "input",
            inputType: "week",
            getValue() {
              const date = new Date();
              return `${date.getFullYear()}-W01`;
            },
            callback(event, value, valueAsNumber, valueAsDate) {
              popsDOMUtils.preventEvent(event);
              console.log("输入框内容改变：", value, valueAsNumber, valueAsDate);
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-input-search",
            text: "input-search",
            type: "input",
            inputType: "search",
            getValue() {
              return "search test";
            },
            callback(event, value) {
              popsDOMUtils.preventEvent(event);
              console.log("输入框内容改变：", value);
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-input-color",
            text: "input-color",
            type: "input",
            inputType: "color",
            getValue() {
              return "#ff0000";
            },
            callback(event, value) {
              popsDOMUtils.preventEvent(event);
              console.log("输入框内容改变：", value);
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-input-email",
            text: "input-email",
            type: "input",
            inputType: "email",
            getValue() {
              return "test@gmail.com";
            },
            callback(event, value) {
              popsDOMUtils.preventEvent(event);
              const $input = event.target as HTMLInputElement;
              console.log("输入框内容改变：", value, $input.validity);
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-input-tel",
            text: "input-tel",
            type: "input",
            inputType: "tel",
            getValue() {
              return "11111111111";
            },
            callback(event, value) {
              popsDOMUtils.preventEvent(event);
              const $input = event.target as HTMLInputElement;
              console.log("输入框内容改变：", value, $input.validity);
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-input-url",
            text: "input-url",
            type: "input",
            inputType: "url",
            getValue() {
              return "https://github.com/";
            },
            callback(event, value) {
              popsDOMUtils.preventEvent(event);
              const $input = event.target as HTMLInputElement;
              console.log("输入框内容改变：", value, $input.validity);
            },
            placeholder: "请输入内容",
          },
          {
            className: "panel-textarea",
            text: "textarea",
            type: "textarea",
            getValue() {
              return "50";
            },
            callback(event, value) {
              popsDOMUtils.preventEvent(event);
              console.log("textarea输入框内容改变：", value);
            },
            placeholder: "请输入内容",
          },
          {
            type: "container",
            text: "",
            views: [
              {
                className: "panel-select-disabled",
                text: "select-disabled",
                type: "select",
                disabled: true,
                getValue() {
                  return "text";
                },
                callback(isSelectedInfo) {
                  if (isSelectedInfo == null) return;
                  console.log(`select当前选项：${isSelectedInfo.value}，当前选项文本：${isSelectedInfo.text}`);
                },
                data: [
                  {
                    value: "all",
                    text: "所有",
                    disable() {
                      return false;
                    },
                  },
                  {
                    value: "text",
                    text: "文本",
                    disable() {
                      return false;
                    },
                  },
                  {
                    value: "html",
                    text: "超文本",
                    disable() {
                      return false;
                    },
                  },
                ],
              },
              {
                className: "panel-select-multiple-disabled",
                type: "select-multiple",
                text: "select-multiple-disabled",
                disabled: true,
                placeholder: "请至少选择一个选项",
                getValue() {
                  return ["select-1", "select-2"];
                },
                callback(selectInfo) {
                  console.log(`select值改变，多选信息`, selectInfo);
                },
                clickCallBack(event, isSelectedInfo) {
                  console.log("点击", event, isSelectedInfo);
                },
                closeIconClickCallBack(event, data) {
                  console.log("点击关闭图标的事件", data);
                },
                data: [
                  {
                    value: "select-1",
                    text: "单选1",
                    isHTML: false,
                  },
                  {
                    value: "select-2",
                    text: "单选2",
                    isHTML: false,
                  },
                  {
                    value: "select-3",
                    text: "单选3",
                    isHTML: false,
                  },
                  {
                    value: "select-4",
                    text: "单选4",
                    isHTML: false,
                  },
                ],
              },
              {
                className: "panel-select-native",
                text: "select-native",
                type: "select",
                mode: "native",
                getValue() {
                  return "all";
                },
                callback(isSelectedInfo) {
                  if (isSelectedInfo == null) return;
                  console.log(`select当前选项：${isSelectedInfo.value}，当前选项文本：${isSelectedInfo.text}`);
                },
                data: [
                  {
                    value: "all",
                    text: "所有",
                    disable() {
                      return false;
                    },
                  },
                  {
                    value: "text",
                    text: "文本",
                    disable() {
                      return false;
                    },
                  },
                  {
                    value: "html",
                    text: "超文本",
                    disable() {
                      return false;
                    },
                  },
                ],
              },
              {
                className: "panel-select-dialog",
                text: "select-dialog",
                type: "select",
                mode: "dialog",
                getValue() {
                  return window.localStorage.getItem("select-dialog-customInput") || "";
                },
                callback(isSelectedInfo) {
                  if (isSelectedInfo == null) {
                    console.warn(`select当前选项为空`);
                    return;
                  }
                  if (isSelectedInfo.addCustomInput) {
                    if (isSelectedInfo.value === "") {
                      // 空值，不存储
                      if (isSelectedInfo.customInputStoreKey) {
                        console.log(`select删除自定义输入的值`);
                        window.localStorage.removeItem(isSelectedInfo.customInputStoreKey);
                      }
                    } else {
                      console.log(
                        `select当前自定义输入框内容：${isSelectedInfo.value}，当前选项显示文本：${isSelectedInfo.text}`
                      );
                      if (isSelectedInfo.customInputStoreKey) {
                        window.localStorage.setItem(isSelectedInfo.customInputStoreKey!, isSelectedInfo.value);
                      }
                    }
                  } else {
                    console.log(`select当前选项：${isSelectedInfo.value}，当前选项显示文本：${isSelectedInfo.text}`);
                  }
                },
                data: [
                  {
                    value: "all",
                    text: "所有",
                    disable() {
                      return false;
                    },
                  },
                  {
                    value: "text",
                    text: "文本",
                    disable(value, selectInfo) {
                      if (selectInfo?.value === "all") return true;
                      return false;
                    },
                  },
                  {
                    value: "html",
                    text: "超文本",
                    disable(value, selectInfo) {
                      if (selectInfo?.value === "all") return true;
                      return false;
                    },
                  },
                  {
                    value: "own",
                    text: "自定义",
                    disable(value, selectInfo) {
                      if (selectInfo?.value === "all") return true;
                      return false;
                    },
                  },
                  {
                    value: window.localStorage.getItem("select-dialog-customInput") || "",
                    text: window.localStorage.getItem("select-dialog-customInput") || "",
                    addCustomInput: true,
                    customInputStoreKey: "select-dialog-customInput",
                    onValid(dataOption) {
                      if (dataOption.value === "123") {
                        console.error("非规范值");
                        return {
                          valid: false,
                          message: "非规范值",
                        };
                      }
                      return {
                        valid: true,
                      };
                    },
                  },
                ],
              },
              {
                className: "panel-select-horizontal",
                text: "select-horizontal",
                type: "select",
                mode: "horizontal",
                getValue() {
                  return "text";
                },
                callback(isSelectedInfo) {
                  if (isSelectedInfo == null) return;
                  console.log(`select当前选项：${isSelectedInfo.value}，当前选项文本：${isSelectedInfo.text}`);
                },
                data: [
                  {
                    value: "all",
                    text: "所有",
                    disable() {
                      return false;
                    },
                  },
                  {
                    value: "text",
                    text: "文本",
                    disable() {
                      return false;
                    },
                  },
                  {
                    value: "html",
                    text: "超文本",
                    disable() {
                      return false;
                    },
                  },
                  {
                    value: "own",
                    text: "自定义",
                    disable() {
                      return true;
                    },
                  },
                ],
              },
              {
                className: "panel-select-multiple",
                type: "select-multiple",
                text: "select-multiple",
                placeholder: "请至少选择一个选项",
                getValue() {
                  return ["select-1", "select-2"];
                },
                callback(selectInfo) {
                  console.log(`select值改变，多选信息`, selectInfo);
                },
                clickCallBack(event, isSelectedInfo) {
                  console.log("点击", event, isSelectedInfo);
                },
                closeIconClickCallBack(event, data) {
                  console.log("点击关闭图标的事件", data);
                },
                data: [
                  {
                    value: "select-1",
                    text: "单选1",
                    isHTML: false,
                    disable(value, allSelectedInfo) {
                      return allSelectedInfo.findIndex((it) => ["select-5"].includes(it.value)) !== -1;
                    },
                  },
                  {
                    value: "select-2",
                    text: "单选2",
                    isHTML: false,
                    disable(value, allSelectedInfo) {
                      return allSelectedInfo.findIndex((it) => ["select-5"].includes(it.value)) !== -1;
                    },
                  },
                  {
                    value: "select-3",
                    text: "单选3",
                    isHTML: false,
                    disable(value, allSelectedInfo) {
                      return allSelectedInfo.findIndex((it) => ["select-2", "select-5"].includes(it.value)) !== -1;
                    },
                  },
                  {
                    value: "select-4",
                    text: "单选4",
                    isHTML: false,
                    disable(value, allSelectedInfo) {
                      return allSelectedInfo.findIndex((it) => ["select-3", "select-5"].includes(it.value)) !== -1;
                    },
                  },
                  {
                    value: "select-5",
                    text(value, allSelectedInfo) {
                      return allSelectedInfo.findIndex((it) => ["select-4"].includes(it.value)) !== -1
                        ? "单选5-禁用"
                        : "单选5";
                    },
                    isHTML: false,
                    disable(value, allSelectedInfo) {
                      return allSelectedInfo.findIndex((it) => ["select-4"].includes(it.value)) !== -1;
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "container",
            text: "deep菜单",
            views: [
              {
                type: "deepMenu",
                className: "panel-deepMenu",
                text: "deepMenu",
                description: "二级菜单",
                rightText: "自定义配置",
                arrowRightIcon: true,
                afterAddToUListCallBack(viewConfig, container) {
                  console.log(viewConfig, container);
                },
                clickCallBack(event, viewConfig) {
                  console.log("进入子配置", event, viewConfig);
                },
                views: [
                  {
                    className: "forms-1",
                    text: "区域设置",
                    type: "container",
                    views: [
                      {
                        className: "panel-switch",
                        text: "switch",
                        type: "switch",
                        getValue() {
                          return true;
                        },
                        callback(event, value) {
                          console.log("按钮开启状态：", value);
                        },
                      },
                      {
                        className: "panel-slider",
                        text: "slider",
                        type: "slider",
                        getValue() {
                          return 50;
                        },
                        callback(event, value) {
                          console.log("滑块当前数值：", value);
                        },
                        min: 1,
                        max: 100,
                      },
                      {
                        className: "panel-button",
                        text: "button",
                        type: "button",
                        buttonIcon: "eleme",
                        buttonIconIsLoading: true,
                        buttonType: "warning",
                        buttonText: "warning按钮",
                        callback(event) {
                          console.log("点击按钮", event);
                        },
                      },
                      {
                        className: "panel-button",
                        text: "button",
                        type: "button",
                        buttonIcon: "chromeFilled",
                        buttonIconIsLoading: true,
                        buttonType: "danger",
                        buttonText: "danger按钮",
                        callback(event) {
                          console.log("点击按钮", event);
                        },
                      },
                      {
                        className: "panel-button",
                        text: "button",
                        type: "button",
                        buttonIcon: "upload",
                        buttonIconIsLoading: false,
                        buttonType: "info",
                        buttonText: "info按钮",
                        callback(event) {
                          console.log("点击按钮", event);
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: "deepMenu",
                className: "panel-deepMenu2",
                //@ts-ignore
                text: "deepMenu2",
                description: "二级菜单",
                rightText: "自定义配置",
                arrowRightIcon: true,
                afterAddToUListCallBack(viewConfig, container) {
                  console.log(viewConfig, container);
                },
                clickCallBack(event, viewConfig) {
                  console.log("进入子配置", event, viewConfig);
                },
                views: [],
              },
            ],
          },
          {
            type: "container",
            isFold: true,
            text: "折叠菜单",
            afterAddToUListCallBack(viewConfig, container) {
              console.log(viewConfig, container);
            },
            views: [
              {
                className: "panel-switch",
                text: "switch",
                type: "switch",
                getValue() {
                  return true;
                },
                callback(event, value) {
                  console.log("按钮开启状态：", value);
                },
              },
            ],
          },
        ],
      },
      {
        id: "whitesev-panel-bottom-config-1",
        title: /*html*/ `
					<a rel="nofollow" href="https://www.npmjs.com/package/@whitesev/pops" target="_blank"><img src="https://img.shields.io/npm/v/@whitesev/pops?label=pops" alt="npm pops version"></a>
				`,
        isBottom: true,
        disableAsideItemHoverCSS: true,
        attributes: {
          "data-value": "value",
          "data-value-2": "value2",
        },
        views: [],
        clickFirstCallback: function () {
          return false;
        },
      },
      {
        id: "whitesev-panel-bottom-config-2",
        title: "版本：xxx.xx.xx",
        isBottom: true,
        attributes: {
          "data-value": "value",
          "data-value-2": "value2",
        },
        views: [],
        clickFirstCallback: function () {
          return false;
        },
      },
    ],
    bottomContentConfig: [],
    btn: {
      close: {
        enable: true,
        callback(event) {
          event.close();
        },
      },
    },
    mask: {
      enable: false,
      clickEvent: {
        toClose: false,
        toHide: false,
      },
      clickCallBack: null,
    },
    useShadowRoot: true,
    class: "",
    mobileClassName: "pops-panel-is-mobile",
    isMobile: false,
    only: false,
    width: window.innerWidth < 550 ? "88vw" : "700px",
    height: window.innerHeight < 450 ? "70vh" : "500px",
    position: "center",
    animation: "pops-anim-fadein-zoom",
    useDeepMenuSwtichAnimation: true,
    zIndex: 10000,
    drag: false,
    dragLimit: true,
    dragExtraDistance: 3,
    dragMoveCallBack() {},
    dragEndCallBack() {},
    forbiddenScroll: false,
    style: null,
    beforeAppendToPageCallBack() {},
  };
};
