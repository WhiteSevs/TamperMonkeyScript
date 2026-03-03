import { NetDiskAuthorization_baidu } from "@/main/rule/default-rule/baidu/authorization";
import { NetDiskAuthorization_123pan } from "./../../rule/default-rule/123pan/authorization";
import { NetDiskAuthorization_feijipan } from "./../../rule/default-rule/feijipan/authorization";
import { NetDiskAuthorization_Lanzouyx } from "./../../rule/default-rule/lanzouyx/authorization";

/**
 * 规则配置
 */
export const NetDiskAuthorizationRule: Record<string, () => void> = {
  /**
   * 123网盘，一般用于>100MB的文件直链获取
   */
  _123pan: NetDiskAuthorization_123pan,
  /**
   * 蓝奏优选
   */
  lanzouyx: NetDiskAuthorization_Lanzouyx,
  /**
   * 小飞机网盘
   */
  feijipan: NetDiskAuthorization_feijipan,
  /**
   * 百度网盘
   */
  baidu: NetDiskAuthorization_baidu,
};

/** 网盘-解析的部分参数（鉴权）或者分享码获取处理 */
export const NetDiskAuthorization = {
  /**
   * 运行于ready
   */
  init() {
    Object.keys(NetDiskAuthorizationRule).forEach((keyName) => {
      NetDiskAuthorizationRule[keyName]();
    });
  },
};
