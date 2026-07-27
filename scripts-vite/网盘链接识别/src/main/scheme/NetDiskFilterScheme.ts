import { utils } from "@/env";
import { NetDiskRuleData } from "@/main/data/NetDiskRuleData";
import { NetDiskRuleUtils } from "@/main/rule/NetDiskRuleUtils";

type UriOption = {
  /** 包名 @example "idm.internet.download.manager.plus" */
  package: string;
  /** activity名 @example "idm.internet.download.manager.UrlHandlerDownloader" */
  activity: string;
  /** @example "android.intent.action.VIEW" */
  intentAction: string;
  /** 传递的数据 @example "https://www.baidu.com" */
  intentData: string;
  intentExtra: string;
};

const JumpWSV = {
  protocol: "jumpwsv",
  pathname: "go",
  /**
   * 获取转发的uri链接
   * @param option
   */
  getSchemeUri(option: UriOption) {
    return `${JumpWSV.protocol}://${JumpWSV.pathname}?${utils.toSearchParamsStr(option)}`;
  },
  /**
   * 替换链接中部分参数
   * @param uri scheme的uri链接
   * @param data 网盘链接url
   */
  replaceData(uri: string, data: string) {
    if (uri.trim().startsWith(JumpWSV.protocol)) {
      // 如果以默认的协议开头，则替换掉&和#
      data = data.replace(/&/g, "{-and-}");
      data = data.replace(/#/g, "{-number-}");
    }
    return data;
  },
};

/** 网盘-直链进行Scheme过滤 */
export const NetDiskFilterScheme = {
  /**
   * 把链接转为scheme的uri链接
   * @param key 规则名
   * @param intentData 需要处理的数据（网盘链接url）
   */
  parseDataToSchemeUri(key: string, intentData: string): string {
    /** 是否启用 */
    let isEnable = NetDiskFilterScheme.isEnableForward(key);
    if (!isEnable) {
      return intentData;
    }
    /** 转发的scheme */
    let schemeUri = NetDiskRuleData.schemeUri.uri(key);
    if (utils.isNull(schemeUri)) {
      // 如果为空，则用默认的
      schemeUri = JumpWSV.getSchemeUri(NetDiskFilterScheme.get1DMSchemeUriOption(intentData));
    }
    schemeUri = schemeUri.trim();
    intentData = JumpWSV.replaceData(schemeUri, intentData);
    schemeUri = NetDiskRuleUtils.replacePlaceholder(schemeUri, {
      intentData: intentData,
    });
    return schemeUri;
  },
  /**
   * 是否启用转发
   * @param key
   * @returns
   */
  isEnableForward(key: string) {
    return NetDiskRuleData.schemeUri.enable(key);
  },
  /**
   * 是否转发下载链接
   * @param key
   */
  isForwardDownloadLink(key: string) {
    return NetDiskFilterScheme.isEnableForward(key) && NetDiskRuleData.schemeUri.isForwardLinearChain(key);
  },
  /**
   * 是否转发新标签页的链接
   * @param key
   */
  isForwardBlankLink(key: string) {
    return NetDiskFilterScheme.isEnableForward(key) && NetDiskRuleData.schemeUri.isForwardBlankLink(key);
  },
  /**
   * 获取1dm的intent的配置
   * @param intentData
   */
  get1DMSchemeUriOption(intentData = ""): UriOption {
    return {
      package: "idm.internet.download.manager.plus",
      activity: "idm.internet.download.manager.UrlHandlerDownloader",
      intentAction: "android.intent.action.VIEW",
      intentData: intentData,
      intentExtra: "",
    };
  },
};
