import { unsafeWindow } from "ViteGM";
import { BaiduData } from "@/main/BaiduData";
import { DOMUtils, OriginPrototype, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";

type BaiduHookFunctionApplyMode = "copy" | "scheme";
type BaiduHookFunctionCallMode = "baijiahao_invoke" | "map";

interface BaiduHookDefine {
  path: string;
  requirePathList: string[];
  callback: (...args: any[]) => boolean | void;
}
/**
 * 百度劫持
 */
export const BaiduHook = {
  $isHook: {
    windowBoxJSBefore: false,
    objectDefineProperty_search: false,
    windowJQueryAppend: false,
    windowOpenBox: false,
    windowWebpackJsonp_tieba: false,
    windowWebpackJsonp_haokan: false,
    window_openContentBox: false,
    functionCall_baijiahao_map: false,
  },
  $data: {
    functionApply: <BaiduHookFunctionApplyMode[]>[],
    functionCall: <BaiduHookFunctionCallMode[]>[],
    elementAppendChild: <((element: HTMLElement) => boolean | void)[]>[],
    setTimeout: <(string | RegExp)[]>[],
    windowDefine: <BaiduHookDefine[]>[],
  },
  /**
   * 统一管理apply的劫持，防止套娃
   * @param mode 劫持的类型
   */
  functionApply(mode: BaiduHookFunctionApplyMode) {
    this.$data.functionApply.push(mode);
    if (this.$data.functionApply.length > 1) {
      log.info("Function.property.apply hook新增劫持参数：" + mode);
      return;
    }

    let that = this;
    //  初始化调用
    log.info("初始化Function.property.apply hook");
    unsafeWindow.Function.prototype.apply = function (...args) {
      /**
       * 劫持剪贴板写入
       * + 百度搜索
       */
      if (that.$data.functionApply.includes("copy")) {
        try {
          let firstParam = args[1];
          if (
            args.length === 2 &&
            typeof firstParam === "object" &&
            "" + firstParam === "[object Arguments]" &&
            firstParam.length === 1 &&
            typeof firstParam[0] === "object" &&
            firstParam[0] != null &&
            "appName" in firstParam[0] &&
            "checkTokenCopied" in firstParam[0] &&
            "deeplink" in firstParam[0] &&
            "scheme" in firstParam[0] &&
            "token" in firstParam[0] &&
            "useDeeplink" in firstParam[0]
          ) {
            log.success("劫持复制到剪贴板函数", ...firstParam);
            return new Promise(function (resolve) {
              log.success("修改参数并劫持复制到剪贴板返回true");
              resolve({
                status: true,
              });
            });
          }
        } catch (error) {
          // log.error(error);
        }
      }
      if (that.$data.functionApply.includes("scheme")) {
        /**
         * 劫持apply的Scheme调用
         * + 百度搜索
         */
        try {
          let firstParam = args[1];
          if (
            args.length === 2 &&
            typeof firstParam === "object" &&
            "" + firstParam === "[object Arguments]" &&
            firstParam.length === 2 &&
            firstParam[1] === "scheme"
          ) {
            log.success("劫持Scheme", ...firstParam);
            return;
          }
        } catch (error) {
          // log.error(error);
        }
      }
      return OriginPrototype.Function.apply.call(this, ...args);
    };
  },
  /**
   * 统一管理call的劫持，防止套娃
   * + 百家号(baijiahao.baidu.com)
   * + 百度地图(map.baidu.com)
   * @param mode 劫持的类型
   */
  functionCall(mode: BaiduHookFunctionCallMode) {
    this.$data.functionCall.push(mode);
    if (this.$data.functionCall.length > 1) {
      log.info("Function.property.call hook新增劫持参数：" + mode);
      return;
    }

    let that = this;
    //  初始化调用
    log.info("初始化Function.property.call hook");
    let originCall = unsafeWindow.Function.prototype.call;
    unsafeWindow.Function.prototype.call = function (...args) {
      let result = originCall.apply(this, args);

      if (mode === "baijiahao_invoke") {
        // 百家号
        if (
          args.length === 4 &&
          typeof args[1]?.["exports"] === "object" &&
          "execCopy" in args[1]?.["exports"] &&
          "invokeApp" in args[1]?.["exports"] &&
          "invokeMarket" in args[1]?.["exports"] &&
          "invokeTpApp" in args[1]?.["exports"]
        ) {
          args[1]["exports"]["execCopy"] = function (...args: any[]) {
            return new Promise((resolve) => {
              log.success("阻止调用execCopy", args);
              resolve(null);
            });
          };
          args[1]["exports"]["invokeApp"] = function (...args: any[]) {
            return new Promise((resolve) => {
              log.success("阻止调用invokeApp", args);
              resolve(null);
            });
          };
          args[1]["exports"]["invokeMarket"] = function (...args: any[]) {
            return new Promise((resolve) => {
              log.success("阻止调用invokeMarket", args);
              resolve(null);
            });
          };
          args[1]["exports"]["invokeTpApp"] = function (...args: any[]) {
            return new Promise((resolve) => {
              log.success("阻止调用invokeTpApp", args);
              resolve(null);
            });
          };
        } else if (
          args.length === 2 &&
          args[0] === void 0 &&
          args[1] != null &&
          "arg" in args[1] &&
          "delegate" in args[1] &&
          "done" in args[1] &&
          "method" in args[1] &&
          "next" in args[1] &&
          "prev" in args[1]
        ) {
          log.success("修改参数", args[1]);
          args[1]["method"] = "return";
          args[1]["next"] = "end";
          args[1]["prev"] = 24;
        }
      } else if (mode === "map") {
        // 百度地图
        if (
          args.length === 2 &&
          args[0] === void 0 &&
          args[1] != null &&
          "arg" in args[1] &&
          "delegate" in args[1] &&
          "done" in args[1] &&
          "method" in args[1] &&
          "next" in args[1] &&
          "prev" in args[1]
        ) {
          log.success("修改参数", args[1]);
          args[1]["method"] = "return";
          args[1]["next"] = "end";
          args[1]["prev"] = 24;
        }
      }
      return result;
    };
  },
  /**
   * 劫持全局define
   */
  windowDefine(path: string, requirePathList: string[], callback: (...args: any[]) => boolean | void) {
    this.$data.windowDefine.push({
      path: path,
      requirePathList: requirePathList,
      callback: callback,
    });
    if (this.$data.windowDefine.length > 1) {
      log.info("define hook新增劫持参数：" + path);
      return;
    }
    let that = this;
    let safeDefine = void 0;
    let unsafeDefine = function (...args: any) {
      let define_path = args[0];
      let define_requrePathList = args[1];
      let define_callback = args[2];
      for (let index = 0; index < that.$data.windowDefine.length; index++) {
        let hookConfig = that.$data.windowDefine[index];
        if (
          hookConfig.path === define_path &&
          JSON.stringify(hookConfig.requirePathList) === JSON.stringify(define_requrePathList)
        ) {
          args[2] = hookConfig.callback;
          break;
        }
      }
      (safeDefine as any)(...args);
    };
    unsafeDefine.prototype.amd = {};
    OriginPrototype.Object.defineProperty(unsafeWindow, "define", {
      get() {
        if (safeDefine == null) {
          return;
        }
        return unsafeDefine;
      },
      set(v) {
        log.success("define ==> ", v);
        safeDefine = v;
      },
    });
  },
  /**
   * 劫持百度搜索某些项的点击事件
   * + 百度搜索
   *
   * Object.defineProperty
   * @param menuKeyName
   */
  objectDefineProperty_search(menuKeyName: string) {
    if (this.$isHook.objectDefineProperty_search) {
      return;
    }
    this.$isHook.objectDefineProperty_search = true;
    unsafeWindow.Object.defineProperty = function <T>(
      this: any,
      target: T,
      propertyKey: PropertyKey,
      _attributes: PropertyDescriptor & ThisType<any>
    ): T {
      if (propertyKey === "_onClick") {
        BaiduData.search.isHijack_onClick = true;
        log.info("成功劫持_onClick", arguments);
        let oldFn = _attributes["value"];
        _attributes["value"] = function (this: any, event: Event) {
          let eventNode = this._getNode(event.target);
          let eventNodeName = this._getType(eventNode);
          if (eventNodeName === "link") {
            let linkProps = this._getLinkProps(eventNode);
            log.success("点击事件-linkProps信息", linkProps);
            if (!linkProps.href) {
              DOMUtils.emit(document, "click", event, false);
              return;
            }
            DOMUtils.preventEvent(event);
            if (Panel.getValue("baidu_search_hijack__onClick_to_blank")) {
              log.success("新标签页打开: " + linkProps.href);
              window.open(linkProps.href, "_blank");
            } else {
              window.location.href = linkProps.href;
            }
          } else {
            log.success("点击事件-this._getType(eventNode)不为link", eventNodeName, event);
            oldFn.call(this, ...arguments);
          }
        };
      }
      // @ts-ignore
      return OriginPrototype.Object.defineProperty.call(this, ...arguments);
    };
  },
  /**
   * 劫持添加元素，包括script标签、iframe标签，默认劫持iframe的非http链接
   * + 百度贴吧(tieba.baidu.com)
   * + 百度地图(map.baidu.com)
   * Element.prototype.appendChild
   * @param handleCallBack 处理的回调函数，如果劫持请返回true
   */
  elementAppendChild(
    handleCallBack: (element: HTMLElement) => boolean | void = function (element) {
      if (element instanceof HTMLIFrameElement) {
        if (typeof element?.src === "string" && !element.src.startsWith("http")) {
          log.success("劫持iframe唤醒：" + element.src, element);
          // @ts-ignore
          return true;
        }
      }
    }
  ) {
    this.$data.elementAppendChild.push(handleCallBack);
    if (this.$data.elementAppendChild.length > 1) {
      log.info("Element.prototype.appendChild hook新增劫持判断回调");
      return;
    }
    unsafeWindow.Element.prototype.appendChild = function <T>(element: Node): T {
      if (typeof handleCallBack === "function") {
        let handleResult = handleCallBack(element as any);
        if (handleResult) {
          // @ts-ignore
          return;
        }
      }
      // @ts-ignore
      return OriginPrototype.Element.appendChild.call(this, ...arguments);
    };
  },
  /**
   * 劫持jQuery的append的iframe
   * + 百度地图(map.baidu.com)
   *
   * $().append();
   */
  windowJQueryAppend() {
    if (this.$isHook.windowJQueryAppend) {
      return;
    }
    this.$isHook.windowJQueryAppend = true;
    let originAppend = (unsafeWindow as any).$.fn.append;
    (unsafeWindow as any).$.fn.append = function (params: any) {
      if (typeof params === "string") {
        params = params.trim();
        if (params.startsWith('<iframe src="') && !params.startsWith('<iframe src="http')) {
          log.success("劫持jQuery的iframe", params);
          return;
        }
      }
      return originAppend.apply(this, arguments);
    };
  },
  /**
   * 劫持OpenBox
   * + 百度搜索
   *
   * window.OpenBox
   */
  windowOpenBox() {
    if (this.$isHook.windowOpenBox) {
      return;
    }
    this.$isHook.windowOpenBox = true;
    let OpenBox = function () {
      return {
        open(...args: any[]) {
          log.info("劫持OpenBox-open传入参数👇", args);
          if (!args.length) {
            return;
          }
          let invokeUrl = args[0]["invokeURL"] || args[0]["invoke_url"];
          if (typeof args[0] === "object" && typeof invokeUrl === "string") {
            log.success("直接跳转Url：" + invokeUrl);
            window.location.href = invokeUrl;
          }
        },
        ready(...args: any[]) {
          log.info("劫持OpenBox-ready传入参数👇", args);
        },
        version: 20170811,
      };
    };
    OpenBox.prototype.getIdmData = function () {
      return {};
    };
    let OpenBox_u = {
      open(...args: any[]) {
        log.info("劫持OpenBox-open传入参数👇", args);
        if (!args.length) {
          return;
        }
        let invokeUrl = args[0]["invokeURL"] || args[0]["invoke_url"];
        if (typeof args[0] === "object" && typeof invokeUrl === "string") {
          log.success("直接跳转Url：" + invokeUrl);
          window.location.href = invokeUrl;
        }
      },
    };
    let isObjectOpenBox = false;
    OriginPrototype.Object.defineProperty(unsafeWindow, "OpenBox", {
      get() {
        return isObjectOpenBox ? OpenBox_u : OpenBox;
      },
      set(v) {
        log.info("OpenBox ==> ", v);
        isObjectOpenBox = typeof v === "object";
      },
    });
  },
  /**
   * 劫持全局setTimeout
   * + 百度地图
   * + 百度搜索
   *
   * window.setTimeout
   * @param matchStr 需要进行匹配的函数字符串
   */
  setTimeout(matchStr: string | RegExp) {
    this.$data.setTimeout.push(matchStr);
    if (this.$data.setTimeout.length > 1) {
      log.info("window.setTimeout hook新增劫持判断参数：" + matchStr);
      return;
    }
    unsafeWindow.setTimeout = function (...args: any[]): any {
      let callback = args[0];
      if (typeof callback === "function") {
        let callBackString = callback.toString();
        if (callBackString.match(matchStr)) {
          log.success("劫持延迟函数", callBackString);
          return;
        }
      }
      // @ts-ignore
      return OriginPrototype.setTimeout.apply(this, args);
    };
  },
  /**
   * 劫持webpack
   * @param webpackName 当前全局变量的webpack名
   * @param mainCoreData 需要劫持的webpack的顶部core，例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
   * @param checkCallBack 如果mainCoreData匹配上，则调用此回调函数
   */
  windowWebPack(webpackName = "webpackJsonp", mainCoreData: string[] | number[], checkCallBack: (arg: any) => any) {
    let originObject = void 0;
    OriginPrototype.Object.defineProperty(unsafeWindow, webpackName, {
      get() {
        return originObject;
      },
      set(newValue) {
        log.success("成功劫持webpack，当前webpack名：" + webpackName);
        originObject = newValue;
        const originPush = (originObject as any).push;
        (originObject as any).push = function (...args: { [x: string]: (..._args: any[]) => any }[][]) {
          let _mainCoreData = args[0][0] as any;
          if (
            mainCoreData == _mainCoreData ||
            (Array.isArray(mainCoreData) &&
              Array.isArray(_mainCoreData) &&
              JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData))
          ) {
            Object.keys(args[0][1]).forEach((keyName) => {
              let originSwitchFunc = args[0][1][keyName];
              args[0][1][keyName] = function (..._args: any[]) {
                let result = originSwitchFunc.call(this, ..._args);
                _args[0] = checkCallBack(_args[0]);
                return result;
              };
            });
          }
          return originPush.call(this, ...args);
        };
      },
    });
  },
  /**
   * 劫持百度贴吧的window.webpackJsonp
   * 当前 "core:67"
   * + 百度贴吧(tieba.baidu.com)
   *
   * https://tb3.bdstatic.com/tb/wise/wise-main-core/static/js/collect~download~frs~gaokao~index~pb~userpost.e5a81d45.js
   * tiebaNewWakeup.js v3.0.3
   * (c) 2018-2023 liugui01
   * Released under the BaiDuTieBa License.
   */
  windowWebpackJsonp_tieba() {
    if (this.$isHook.windowWebpackJsonp_tieba) {
      return;
    }
    this.$isHook.windowWebpackJsonp_tieba = true;
    this.windowWebPack(
      "webpackJsonp",
      ["core:0"],
      function (webpackExports: {
        [x: string]: any;
        exports: {
          [x: string]: any;
          getSchema: (...args: any[]) => void;
          getToken: (...args: any[]) => void;
          init: (...args: any[]) => void;
          initDiffer: (...args: any[]) => void;
        };
      }) {
        if (
          typeof webpackExports?.exports === "object" &&
          typeof webpackExports.exports["getSchema"] === "function" &&
          typeof webpackExports.exports["getToken"] === "function" &&
          typeof webpackExports.exports["init"] === "function" &&
          typeof webpackExports.exports["initDiffer"] === "function"
        ) {
          log.success("成功劫持webpack调用函数", webpackExports);
          let codeId = webpackExports?.["i"];
          webpackExports.exports.getSchema = function (...args: any) {
            // log.info("阻止调用getSchema", ...arguments);
          };
          webpackExports.exports.getToken = function (...args: any) {
            log.info("阻止调用getToken", ...args);
          };
          webpackExports.exports.init = function (...args) {
            log.info("阻止初始化", ...args);
            if (args?.[0]?.["page"] === "usercenter") {
              //  跳转至用户空间
              let homeUrl = "/home/main?id=" + args[0]["param"]["portrait"];
              log.info("跳转至用户空间", homeUrl);
              window.open(homeUrl);
            }
            return;
          };
          webpackExports.exports.initDiffer = function (...args: any) {
            log.info("阻止初始化差异", ...args);
            return;
          };
        }
        return webpackExports;
      }
    );
    // https://tb3.bdstatic.com/tb/wise/wise-main-core/static/uni/static/js/pages-uni-pb-uni-pb.a7cc87d6.js
    // 78006
    // 会出现 连接服务器超时，点击屏幕重试这个问题
    // this.windowWebPack(
    // 	"webpackChunktb_smallapp",
    // 	[573],
    // 	function (webpackExports: {
    // 		[x: string]: any;
    // 		id: number;
    // 		exports: any;
    // 	}) {
    // 		if (
    // 			typeof webpackExports?.exports === "object" &&
    // 			typeof webpackExports?.exports?.A?.setup === "function" &&
    // 			webpackExports?.exports?.A?.setup
    // 				?.toString()
    // 				?.includes("wappass.baidu.com")
    // 		) {
    // 			let originSetup: Function = webpackExports.exports.A.setup;
    // 			log.success("成功劫持A.setup函数");
    // 			webpackExports.exports.A.setup = function (...args: any[]) {
    // 				let result = originSetup.apply(this, args);
    // 				if (
    // 					typeof result === "object" &&
    // 					result != null &&
    // 					typeof result?.toLogin === "function"
    // 				) {
    // 					result.toLogin = function (...args2: any[]) {
    // 						log.error(`阻止跳转登录组件的初始化`, args2);
    // 					};
    // 				}
    // 				return result;
    // 			};
    // 		}
    // 		return webpackExports;
    // 	}
    // );
  },
  /**
   * 劫持百度好看视频的window.webpackJsonp
   * + 百度好看视频(haokan.baidu.com)
   *
   */
  windowWebpackJsonp_haokan() {
    if (this.$isHook.windowWebpackJsonp_haokan) {
      return;
    }
    this.$isHook.windowWebpackJsonp_haokan = true;
    this.windowWebPack(
      "webpackJsonp",
      [40, 1],
      function (webpackExports: { [x: string]: any; exports: { [x: string]: () => { launch(): Promise<unknown> } } }) {
        if (
          typeof webpackExports?.exports === "object" &&
          typeof webpackExports.exports["LaunchScheme"] === "function" &&
          typeof webpackExports.exports["__esModule"] === "boolean"
        ) {
          log.success("成功劫持webpack调用函数", webpackExports);
          let codeId = webpackExports?.["i"];
          webpackExports.exports["LaunchScheme"] = function () {
            log.success("修改参数：LaunchScheme");
            return {
              launch() {
                return new Promise(function (resolve) {
                  log.success("修改参数：launch");
                  resolve(void 0);
                });
              },
            };
          };
        }
        return webpackExports;
      }
    );
  },
  /**
   * 劫持window下的BoxJSBefore对象调用，它的所有的属性都是函数
   * + 百家号(mbd.baidu.com)
   *
   * window.BoxJSBefore
   */
  windowBoxJSBefore() {
    if (this.$isHook.windowBoxJSBefore) {
      return;
    }
    this.$isHook.windowBoxJSBefore = true;
    OriginPrototype.Object.defineProperty(unsafeWindow, "BoxJSBefore", {
      get() {
        return new Proxy(
          {},
          {
            get(target, name: string, receiver) {
              log.success("劫持BoxJSBefore调用：" + name);
            },
          }
        );
      },
    });
  },
  /**
   * 劫持window下的openContentBox对象调用，它的所有的属性都是函数
   * + 百家号(baijiahao.baidu.com)
   *
   * window.openContentBox
   */
  window_openContentBox() {
    if (this.$isHook.window_openContentBox) {
      return;
    }
    this.$isHook.window_openContentBox = true;
    OriginPrototype.Object.defineProperty(unsafeWindow, "BoxJSBefore", {
      get() {
        return new Proxy(
          {},
          {
            get(target, name: string, receiver) {
              log.success("劫持openContentBox调用：" + name);
            },
          }
        );
      },
    });
  },
};
