import { log, utils } from "@/env";
import { BilibiliApiConfig } from "./BilibiliApiConfig";
import { BilibiliQrCodeLogin } from "@/account/BilibiliQrCodeLogin";
import { Panel } from "@components/setting/panel";
import { BilibiliCDNServerList } from "./BilibiliCDNServerList";

/**
 * 请求接口代理
 */
export const BilibiliApiProxy = {
  /**
   * 获取番剧代理服务器
   *
   * 轮询查询播放地址
   */
  getBangumiProxyHost() {
    let serverHost: {
      name: string;
      area: "hk" | "tw" | "th" | "";
      host: string;
    }[] = [
      {
        name: "中国大陆",
        area: "",
        host: Panel.getValue<string>("bili-bangumi-proxyApiServer-default", "").trim() || BilibiliApiConfig.web_host,
      },
    ];
    if (!Panel.getValue("bili-bangumi-unlockAreaLimit")) {
      // 不启用
      return serverHost;
    }
    // 如果启用代理服务器，返回代理服务器
    // 否则使用bilibili的api
    /** 香港 */
    let hk_host = Panel.getValue<string>("bili-bangumi-proxyApiServer-hk");
    if (utils.isNotNull(hk_host)) {
      serverHost.push({
        name: "香港",
        area: "hk",
        host: hk_host,
      });
    }
    /** 台湾 */
    let tw_host = Panel.getValue<string>("bili-bangumi-proxyApiServer-tw");
    if (utils.isNotNull(tw_host)) {
      serverHost.push({
        name: "台湾",
        area: "tw",
        host: tw_host,
      });
    }
    /** 泰国/东南亚 */
    let tha_host = Panel.getValue<string>("bili-bangumi-proxyApiServer-tha-or-sea");
    if (utils.isNotNull(tha_host)) {
      serverHost.push({
        name: "泰国/东南亚",
        area: "th",
        host: tha_host,
      });
    }

    return serverHost;
  },
  /**
   * 获取搜索代理服务器
   *
   * 因为有些代理服务器虽然能拉取播放地址，但是不能使用搜索功能
   *
   * 特地区分开
   *
   * 如果没有填入服务器，则从番剧代理服务器中获取
   *
   * 搜索番剧结果
   */
  getSearchProxyHost() {
    let bangumiProxyHost = this.getBangumiProxyHost();
    let serverHost: {
      name: string;
      area: "hk" | "tw" | "th" | "";
      host: string;
    }[] = [];
    /** 香港 */
    let hk_host = Panel.getValue<string>("bili-search-proxyApiServer-hk");
    if (utils.isNotNull(hk_host)) {
      serverHost.push({
        name: "香港",
        area: "hk",
        host: hk_host,
      });
    } else {
      let bangumi_hk_host = bangumiProxyHost.find((item) => item.area === "hk");
      if (bangumi_hk_host) {
        serverHost.push(bangumi_hk_host);
      }
    }
    /** 台湾 */
    let tw_host = Panel.getValue<string>("bili-search-proxyApiServer-tw");
    if (utils.isNotNull(tw_host)) {
      serverHost.push({
        name: "台湾",
        area: "tw",
        host: tw_host,
      });
    } else {
      let bangumi_tw_host = bangumiProxyHost.find((item) => item.area === "tw");
      if (bangumi_tw_host) {
        serverHost.push(bangumi_tw_host);
      }
    }
    /** 泰国/东南亚 */
    let tha_host = Panel.getValue<string>("bili-search-proxyApiServer-tha-or-sea");
    if (utils.isNotNull(tha_host)) {
      serverHost.push({
        name: "泰国/东南亚",
        area: "th",
        host: tha_host,
      });
    } else {
      let bangumi_tha_host = bangumiProxyHost.find((item) => item.area === "th");
      if (bangumi_tha_host) {
        serverHost.push;
      }
    }
    return serverHost;
  },
  /**
   * 获取番剧代理参数
   */
  getBangumiProxySearchParam(option: { area?: string } = {}) {
    /**
     * 代理服务器需要的数据
     */
    let proxyData = {
      from_client: "BROWSER",
      drm_tech_type: 2,
      module: "bangumi",
      area: option?.area || "",
      access_key: BilibiliQrCodeLogin.getAccessToken(),
    };

    return proxyData;
  },
};

/**
 * 视频播放接口代理(upos)
 */
export const BilibiliCDNProxy = {
  /**
   * 筛选出更好的cdn
   *
   * 通过playurl获取到的url信息默认的base_url|baseUrl可能是辣鸡的mcdn节点，而upos节点在backupUrl|backup_url中
   *
   * 筛选最好的节点
   *
   * 传入参数顺序base_url=>baseUrl=>backup_url=>backupUrl，即好的在后面
   */
  findBetterCDN(...args: (string | string[])[]) {
    /** 节点信息 */
    let urlList: string[] = [];
    args.forEach((arg) => {
      if (Array.isArray(arg)) {
        urlList = urlList.concat(arg.filter((item) => typeof item === "string"));
      } else {
        if (typeof arg === "string") {
          urlList.push(arg);
        }
      }
    });

    let betterCDN = urlList.find((url) => {
      let urlInst = new URL(url);
      if (urlInst.host.startsWith("upos")) {
        return url;
      }
    });

    if (betterCDN) {
      return betterCDN;
    } else {
      // 没有？那直接用第一个
      return urlList[0];
    }
  },
  /**
   * 视频/音频CDN替换host
   * @param url 视频url
   * @param isAudio 是否是音频
   */
  replaceVideoCDN(url: string, isAudio: boolean = false) {
    const userChooseCDN = isAudio
      ? Panel.getValue<string>("bili-video-uposServerSelect-audio")
      : Panel.getValue<string>("bili-video-uposServerSelect");
    let ownCDN = isAudio
      ? Panel.getValue<string>("bili-video-uposServerSelect-audio-own")
      : Panel.getValue<string>("bili-video-uposServerSelect-own");
    ownCDN = (ownCDN ?? "").trim();
    return this.replaceVideoCDNHost(url, userChooseCDN, ownCDN);
  },
  /**
   * 番剧视频CDN替换
   * @param url 视频url
   * @param isAudio 是否是音频
   */
  replaceBangumiVideoCDN(url: string, isAudio: boolean = false) {
    const userChooseCDN = isAudio
      ? Panel.getValue<string>("bili-bangumi-uposServerSelect-audio")
      : Panel.getValue<string>("bili-bangumi-uposServerSelect");
    let ownCDN = isAudio
      ? Panel.getValue<string>("bili-bangumi-uposServerSelect-audio-own")
      : Panel.getValue<string>("bili-bangumi-uposServerSelect-own");
    ownCDN = (ownCDN ?? "").trim();
    return this.replaceVideoCDNHost(url, userChooseCDN, ownCDN);
  },
  /**
   * 直播视频CDN替换
   * @param url 直播url
   */
  replaceLiveVideoCDN(url: string) {
    const isAudio = false;
    const userChooseCDN = isAudio
      ? Panel.getValue<string>("bili-live-uposServerSelect-audio")
      : Panel.getValue<string>("bili-live-uposServerSelect");
    let ownCDN = isAudio
      ? Panel.getValue<string>("bili-live-uposServerSelect-audio-own")
      : Panel.getValue<string>("bili-live-uposServerSelect-own");
    ownCDN = (ownCDN ?? "").trim();
    return this.replaceVideoCDNHost(url, userChooseCDN, ownCDN);
  },
  /**
   * 视频CDN替换host
   *
   * 有以下类型
   * .mcdn.bilivideo 辣鸡路线
   * @param url 视频url
   * @param userChooseCDNHost 需要替换的host
   * @param ownCDNHost 自定义的host
   *
   */
  replaceVideoCDNHost(url: string, userChooseCDNHost: string, ownCDNHost?: string) {
    try {
      const urlInst = new URL(url);
      const originHost = urlInst.host;
      if (utils.isNotNull(ownCDNHost)) {
        // 使用自定义的服务器host
        if (originHost !== ownCDNHost) {
          // 该url和自定义的host一致 不替换
          return url;
        }
        urlInst.host = ownCDNHost;
        log.info(`原Host为：${originHost}，替换CDN为自定义：${ownCDNHost}`);
        return urlInst.toString();
      }
      // 选择的upos信息
      const chooseUposCDNInfo = BilibiliCDNServerList.find((item) => {
        return item.host === userChooseCDNHost;
      });
      if (utils.isNull(chooseUposCDNInfo) || utils.isNull(chooseUposCDNInfo.host)) {
        // 空host，即不存在选择的host 不替换
        return url;
      }
      // 选择的upos host
      const chooseUposCDNHost = chooseUposCDNInfo.host;
      if (chooseUposCDNHost === urlInst.host) {
        // host未变 不替换
        return url;
      }
      urlInst.host = chooseUposCDNHost;
      log.info(`原Host为：${originHost}，替换CDN为：${JSON.stringify(chooseUposCDNInfo)}`);
      return urlInst.toString();
    } catch (error) {
      log.error("视频upos替换失败", error);
      return url;
    }
  },
};
