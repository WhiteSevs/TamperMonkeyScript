import { log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { unsafeWindow } from "ViteGM";

export const DouYinNetWorkHook = {
  __ajaxHooker: null as null | ReturnType<typeof utils.ajaxHooker>,
  get ajaxHooker(): ReturnType<typeof utils.ajaxHooker> {
    if (this.__ajaxHooker == null) {
      this.__ajaxHooker = utils.ajaxHooker();
    }
    return this.__ajaxHooker;
  },
  init() {
    Panel.execMenuOnce("dy-hook-higher-quality", () => {
      return this.hookVideoQuality();
    });
  },
  /**
   * 篡改未登录时的响应结果
   */
  hookUserNoLoginResponse() {
    this.ajaxHooker.hook((request) => {
      // const url = CommonUtil.fixUrl(request.url);
      // const urlIns = new URL(url);
      // if (
      // 	(true &&
      // 		urlIns.pathname.startsWith("/aweme/v1/web/user/profile/self/")) ||
      // 	urlIns.pathname.startsWith(
      // 		"/aweme/v1/web/im/resource/list/aggregation"
      // 	) ||
      // 	urlIns.pathname.startsWith("/aweme/v1/web/im/user/active/update/") ||
      // 	urlIns.pathname.startsWith("/aweme/v1/web/im/user/active/config/get")
      // ) {
      // }
      // 其它hook的参数会被覆盖
      const originResponse = request.response;
      request.response = (response) => {
        originResponse && originResponse(response);
        const data = utils.toJSON(response.responseText);
        if (typeof data["status_code"] === "number" && data["status_code"] !== 0) {
          data["status_code"] = 0;
          if (typeof data["status_msg"] === "string") {
            data["status_msg"] = "";
          }
        }
        if (
          typeof data?.["user_collect_count"]?.["status_code"] === "number" &&
          data?.["user_collect_count"]?.["status_code"] !== 0
        ) {
          data["user_collect_count"]["status_code"] = 0;
          if (typeof data?.["user_collect_count"]?.["status_msg"] === "string") {
            data["user_collect_count"]["status_msg"] = "";
          }
        }
        response.responseText = JSON.stringify(data);
      };
    });
  },
  /**
   * 篡改显示视频清晰度，让其显示最高清晰度
   */
  hookVideoQuality() {
    log.info(`篡改显示视频清晰度，让其显示最高清晰度`);

    const FAKE_RENDERER = "NVIDIA GeForce RTX 4080/PCIe/SSE2";
    const FAKE_VENDOR = "NVIDIA Corporation";

    // ---------------------------------------------------------------------------
    // 1) MediaCapabilities.decodingInfo —— 播放器最常用：问"这分辨率+编码能流畅解吗"
    //    我们让所有带 video 的查询都返回 supported/smooth/powerEfficient = true
    // ---------------------------------------------------------------------------
    if (unsafeWindow.MediaCapabilities && unsafeWindow.MediaCapabilities.prototype.decodingInfo) {
      const orig = unsafeWindow.MediaCapabilities.prototype.decodingInfo;
      // @ts-expect-error
      unsafeWindow.MediaCapabilities.prototype.decodingInfo = function (cfg) {
        if (cfg && cfg.video) {
          return Promise.resolve({ supported: true, smooth: true, powerEfficient: true });
        }
        return orig.call(this, cfg);
      };
    }

    // ---------------------------------------------------------------------------
    // 2) 硬件画像：CPU 核数 / 内存 —— 部分播放器据此打"设备档位"
    // ---------------------------------------------------------------------------
    try {
      Object.defineProperty(unsafeWindow.navigator, "hardwareConcurrency", {
        configurable: true,
        get() {
          return 16;
        },
      });
    } catch (e) {
      log.error("hardwareConcurrency 伪装失败", (<Error>e).message);
    }

    try {
      Object.defineProperty(unsafeWindow.navigator, "deviceMemory", {
        configurable: true,
        get() {
          return 64;
        },
      });
    } catch (e) {
      log.error("deviceMemory 伪装失败", (<Error>e).message);
    }

    // ---------------------------------------------------------------------------
    // 3) WebGL 显卡型号 —— 播放器可能读 GPU 字符串做黑名单/白名单判断
    //    覆盖标准 RENDERER(0x1F01)/VENDOR(0x1F00) 与 debug_renderer_info 两种取法
    // ---------------------------------------------------------------------------
    function wrapGetParameter(proto: WebGLRenderingContext | WebGL2RenderingContext) {
      if (!proto || !proto.getParameter) return;
      const orig = proto.getParameter;
      proto.getParameter = function (pname) {
        try {
          const ext = this.getExtension && this.getExtension("WEBGL_debug_renderer_info");
          if (ext) {
            if (pname === ext.UNMASKED_RENDERER_WEBGL) {
              return FAKE_RENDERER;
            }
            if (pname === ext.UNMASKED_VENDOR_WEBGL) {
              return FAKE_VENDOR;
            }
          }
          if (pname === 0x1f01) {
            return FAKE_RENDERER;
          }
          if (pname === 0x1f00) {
            return FAKE_VENDOR;
          }
        } catch {
          /* ignore */
        }
        return orig.call(this, pname);
      };
    }
    if (unsafeWindow.WebGLRenderingContext) wrapGetParameter(unsafeWindow.WebGLRenderingContext.prototype);
    if (unsafeWindow.WebGL2RenderingContext) wrapGetParameter(unsafeWindow.WebGL2RenderingContext.prototype);

    // ---------------------------------------------------------------------------
    // 4) canPlayType / MediaSource.isTypeSupported —— 播放器可能先问"这编码能不能播"
    // ---------------------------------------------------------------------------
    function patchCanPlay(proto: HTMLMediaElement) {
      if (!proto || !proto.canPlayType) return;
      const orig = proto.canPlayType;
      proto.canPlayType = function (type) {
        if (/hev|hvc|av0|av1|vp0|mp4/i.test(type)) {
          return "probably";
        }
        return orig.call(this, type);
      };
    }
    patchCanPlay(unsafeWindow.HTMLMediaElement && unsafeWindow.HTMLMediaElement.prototype);

    if (unsafeWindow.MediaSource && unsafeWindow.MediaSource.isTypeSupported) {
      const orig = unsafeWindow.MediaSource.isTypeSupported;
      unsafeWindow.MediaSource.isTypeSupported = function (type) {
        if (/hev|hvc|av0|av1|vp0|mp4/i.test(type)) {
          return true;
        }
        return orig.call(this, type);
      };
    }
    const localAbTestKey = Object.keys(unsafeWindow.localStorage).find((it) => {
      return it.startsWith("__tea_sdk_ab_version_");
    });
    if (localAbTestKey) {
      const abTestDataStr = unsafeWindow.localStorage.getItem(localAbTestKey);
      const abTestData = utils.toJSON(abTestDataStr);
      if (abTestData["data"]) {
        abTestData["data"]["exposure_defination"] = {
          val: 1,
          vid: "",
        };
        abTestData["data"]["has_2k"] = {
          val: 1,
          vid: "",
        };
        abTestData["data"]["has_hdr"] = {
          val: 1,
          vid: "",
        };
        unsafeWindow.localStorage.setItem(localAbTestKey, JSON.stringify(abTestData));
      }
    }
    this.ajaxHooker.hook((request) => {
      const url = CommonUtil.fixUrl(request.url);
      const urlInst = new URL(url);
      if (urlInst.pathname.startsWith("/service/2/abtest_config/")) {
        // 这个是 ab test的配置
        request.response = (response) => {
          const data = utils.toJSON(response.responseText);
          if (data["data"]) {
            // 2k
            data["data"]["has_2k"] = {
              val: 1,
              vid: "",
            };
            // 4k 应该是
            data["data"]["has_hdr"] = {
              val: 1,
              vid: "",
            };
          }
          response.responseText = JSON.stringify(data);
        };
      }
    });
  },
};
