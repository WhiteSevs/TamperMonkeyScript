import { unsafeWindow } from "ViteGM";
import { BaiDuData } from "@/business/data";
import { DOMUtils, OriginPrototype, log, utils } from "@/env";
import { PopsPanel } from "@/ui";

/**
 * 百度劫持
 */
const BaiduHijack = {
    /**
     * 统一管理apply的劫持，防止套娃
     * @param mode copy scheme
     */
    hijackFunctionApply(mode: string) {
        mode = mode.toLowerCase();
        unsafeWindow.Function.prototype.apply = function (...args) {
            /**
             * 劫持剪贴板写入
             * + 百度搜索
             */
            if (mode.includes("copy")) {
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
                        log.success(["劫持复制到剪贴板函数", ...firstParam]);
                        return new Promise(function (resolve) {
                            log.success(["修改参数并劫持复制到剪贴板返回true"]);
                            resolve({
                                status: true,
                            });
                        });
                    }
                } catch (error) {
                    /*log.error(error);*/
                }
            } else if (mode.includes("scheme")) {
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
                        log.success(["劫持Scheme", ...firstParam]);
                        return;
                    }
                } catch (error) {
                    /*log.error(error);*/
                }
            }
            return OriginPrototype.Function.apply.call(this, ...args);
        };
    },
    /**
     * 劫持百度搜索某些项的点击事件
     * + 百度搜索
     *
     * Object.defineProperty
     * @param menuKeyName
     */
    hijack_onClick(menuKeyName: string) {
        (unsafeWindow as any).Object.defineProperty = function (
            target: HTMLElement,
            propertyKey: string,
            _attributes: NestedObjectWithToString
        ) {
            if (propertyKey === "_onClick") {
                BaiDuData.search.isHijack_onClick = true;
                log.info(["成功劫持_onClick", arguments]);
                let oldFn = _attributes["value"];
                _attributes["value"] = function (event: Event) {
                    let eventNode = this._getNode(event.target);
                    let eventNodeName = this._getType(eventNode);
                    if (eventNodeName === "link") {
                        let linkProps = this._getLinkProps(eventNode);
                        log.success(["点击事件-linkProps信息", linkProps]);
                        if (!linkProps.href) {
                            DOMUtils.trigger(document, "click", event, false);
                            return;
                        }
                        utils.preventEvent(event);
                        if (PopsPanel.getValue("baidu_search_hijack__onClick_to_blank")) {
                            log.success("新标签页打开: " + linkProps.href);
                            window.open(linkProps.href, "_blank");
                        } else {
                            window.location.href = linkProps.href;
                        }
                    } else {
                        log.success([
                            "点击事件-this._getType(eventNode)不为link",
                            eventNodeName,
                            event,
                        ]);
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
    hijackElementAppendChild(handleCallBack?: (element: HTMLElement) => boolean | void) {
        (unsafeWindow as any).Element.prototype.appendChild = function (element: HTMLElement) {
            if (element instanceof HTMLIFrameElement) {
                if (!element?.src?.startsWith("http")) {
                    log.success(["劫持iframe唤醒：" + element.src, element]);
                    return;
                }
            }
            if (typeof handleCallBack === "function") {
                let handleResult = handleCallBack(element);
                if (handleResult) {
                    return;
                }
            }
            return OriginPrototype.Element.appendChild.call(this, element);
        };
    },
    /**
     * 劫持jQuery的append的iframe
     * + 百度地图(map.baidu.com)
     *
     * $().append();
     */
    hijackJQueryAppend() {
        let originAppend = (unsafeWindow as any).$.fn.append;
        (unsafeWindow as any).$.fn.append = function (params: any) {
            if (typeof params === "string") {
                params = params.trim();
                if (
                    params.startsWith('<iframe src="') &&
                    !params.startsWith('<iframe src="http')
                ) {
                    log.success(["劫持jQuery的iframe", params]);
                    return;
                }
            }
            originAppend.apply(this, arguments);
        };
    },
    /**
     * 劫持OpenBox
     * + 百度搜索
     *
     * window.OpenBox
     */
    hijackOpenBox() {
        let OpenBox = function () {
            return {
                open(...args: any[]) {
                    log.info(["劫持OpenBox-open传入参数👇", args]);
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
                    log.info(["劫持OpenBox-ready传入参数👇", args]);
                },
                version: 20170811,
            };
        };
        OpenBox.prototype.getIdmData = function () {
            return {};
        };
        let OpenBox_u = {
            open(...args: any[]) {
                log.info(["劫持OpenBox-open传入参数👇", args]);
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
                log.info(["OpenBox ==> ", v]);
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
    hijackSetTimeout(matchStr: string | RegExp = "") {
        (unsafeWindow as any).setTimeout = function (...args: any) {
            let callBackString = args[0].toString();
            if (callBackString.match(matchStr)) {
                log.success(["劫持延迟函数", callBackString]);
                return;
            }
            return OriginPrototype.setTimeout.apply(this, args);
        };
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
    hijackFunctionCall_WebPack_TieBa() {
        this.hijackWebpack("webpackJsonp", ["core:0"], function (webpackExports: { [x: string]: any; exports: { [x: string]: any; getSchema: (...args: any[]) => void; getToken: (...args: any[]) => void; init: (...args: any[]) => void; initDiffer: (...args: any[]) => void; }; }) {
            if (
                typeof webpackExports?.exports === "object" &&
                typeof webpackExports.exports["getSchema"] === "function" &&
                typeof webpackExports.exports["getToken"] === "function" &&
                typeof webpackExports.exports["init"] === "function" &&
                typeof webpackExports.exports["initDiffer"] === "function"
            ) {
                log.success(["成功劫持webpack调用函数", webpackExports]);
                let codeId = webpackExports?.["i"];
                webpackExports.exports.getSchema = function (...args: any) {
                    // log.info(["阻止调用getSchema", ...arguments]);
                };
                webpackExports.exports.getToken = function (...args: any) {
                    log.info(["阻止调用getToken", ...args]);
                };
                webpackExports.exports.init = function (...args) {
                    log.info(["阻止初始化", ...args]);
                    if (args?.[0]?.["page"] === "usercenter") {
                        /* 跳转至用户空间 */
                        let homeUrl = "/home/main?id=" + args[0]["param"]["portrait"];
                        log.info(["跳转至用户空间", homeUrl]);
                        window.open(homeUrl);
                    }
                    return;
                };
                webpackExports.exports.initDiffer = function (...args: any) {
                    log.info(["阻止初始化差异", ...args]);
                    return;
                };
            }
            return webpackExports;
        });
    },
    /**
     * 劫持webpack
     * @param {string} webpackName 当前全局变量的webpack名
     * @param {string|any[]} mainCoreData 需要劫持的webpack的顶部core，例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
     * @param {(webpackExports: object|undefined)=>{}} checkCallBack 如果mainCoreData匹配上，则调用此回调函数
     */
    hijackWebpack(webpackName = "webpackJsonp", mainCoreData: string[] | number[], checkCallBack: { (webpackExports: any): any; (webpackExports: any): any; (arg0: any): any; }) {
        let originObject = void 0;
        OriginPrototype.Object.defineProperty(unsafeWindow, webpackName, {
            get() {
                return originObject;
            },
            set(newValue) {
                log.success("成功劫持webpack，当前webpack名：" + webpackName);
                originObject = newValue;
                const originPush = (originObject as any).push;
                (originObject as any).push = function (...args: { [x: string]: (..._args: any[]) => any; }[][]) {
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
     * 劫持百度好看视频的window.webpackJsonp
     * + 百度好看视频(haokan.baidu.com)
     *
     */
    hijackFunctionCall_WebPack_HaoKan() {
        this.hijackWebpack("webpackJsonp", [40, 1], function (webpackExports: { [x: string]: any; exports: { [x: string]: () => { launch(): Promise<unknown>; }; }; }) {
            if (
                typeof webpackExports?.exports === "object" &&
                typeof webpackExports.exports["LaunchScheme"] === "function" &&
                typeof webpackExports.exports["__esModule"] === "boolean"
            ) {
                log.success(["成功劫持webpack调用函数", webpackExports]);
                let codeId = webpackExports?.["i"];
                webpackExports.exports["LaunchScheme"] = function () {
                    log.success(["修改参数：LaunchScheme"]);
                    return {
                        launch() {
                            return new Promise(function (resolve) {
                                log.success(["修改参数：launch"]);
                                resolve(void 0);
                            });
                        },
                    };
                };
            }
            return webpackExports;
        });
    },
    /**
     * 劫持百家号和百度地图的Function的call
     * + 百家号(baijiahao.baidu.com)
     * + 百度地图(map.baidu.com)
     * Function.property.call
     */
    hijackFunctionCall_BaiJiaHao_Map() {
        unsafeWindow.Function.prototype.call = function (...args) {
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
                log.success(["修改参数", args[1]]);
                args[1]["method"] = "return";
                args[1]["next"] = "end";
                args[1]["prev"] = 24;
            }
            let result = OriginPrototype.Function.call.apply(this, args);
            return result;
        };
    },
    /**
     * 劫持window下的BoxJSBefore对象调用，它的所有的属性都是函数
     * + 百家号(mbd.baidu.com)
     *
     * window.BoxJSBefore
     */
    hijackBoxJSBefore() {
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
};

export {
    BaiduHijack
}