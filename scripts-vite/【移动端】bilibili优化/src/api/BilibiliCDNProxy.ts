import { BilibiliQrCodeLogin } from "@/account/BilibiliQrCodeLogin";
import { log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { BilibiliApiConfig } from "./BilibiliApiConfig";
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
    const serverHost: {
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
    const hk_host = Panel.getValue<string>("bili-bangumi-proxyApiServer-hk");
    if (utils.isNotNull(hk_host)) {
      serverHost.push({
        name: "香港",
        area: "hk",
        host: hk_host,
      });
    }
    /** 台湾 */
    const tw_host = Panel.getValue<string>("bili-bangumi-proxyApiServer-tw");
    if (utils.isNotNull(tw_host)) {
      serverHost.push({
        name: "台湾",
        area: "tw",
        host: tw_host,
      });
    }
    /** 泰国/东南亚 */
    const tha_host = Panel.getValue<string>("bili-bangumi-proxyApiServer-tha-or-sea");
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
    const bangumiProxyHost = this.getBangumiProxyHost();
    const serverHost: {
      name: string;
      area: "hk" | "tw" | "th" | "";
      host: string;
    }[] = [];
    /** 香港 */
    const hk_host = Panel.getValue<string>("bili-search-proxyApiServer-hk");
    if (utils.isNotNull(hk_host)) {
      serverHost.push({
        name: "香港",
        area: "hk",
        host: hk_host,
      });
    } else {
      const bangumi_hk_host = bangumiProxyHost.find((item) => item.area === "hk");
      if (bangumi_hk_host) {
        serverHost.push(bangumi_hk_host);
      }
    }
    /** 台湾 */
    const tw_host = Panel.getValue<string>("bili-search-proxyApiServer-tw");
    if (utils.isNotNull(tw_host)) {
      serverHost.push({
        name: "台湾",
        area: "tw",
        host: tw_host,
      });
    } else {
      const bangumi_tw_host = bangumiProxyHost.find((item) => item.area === "tw");
      if (bangumi_tw_host) {
        serverHost.push(bangumi_tw_host);
      }
    }
    /** 泰国/东南亚 */
    const tha_host = Panel.getValue<string>("bili-search-proxyApiServer-tha-or-sea");
    if (utils.isNotNull(tha_host)) {
      serverHost.push({
        name: "泰国/东南亚",
        area: "th",
        host: tha_host,
      });
    } else {
      const bangumi_tha_host = bangumiProxyHost.find((item) => item.area === "th");
      if (bangumi_tha_host) {
        serverHost.push(bangumi_tha_host);
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
    const proxyData = {
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
   * @param enable 是否启用
   * @param urlList url列表
   */
  findBetterCDN(enable: boolean, urlList: (string | string[])[]) {
    /** 节点信息 */
    let totalUrlList: string[] = [];
    urlList.forEach((url) => {
      if (Array.isArray(url)) {
        totalUrlList = totalUrlList.concat(url.filter((item) => typeof item === "string"));
      } else {
        if (typeof url === "string") {
          totalUrlList.push(url);
        }
      }
    });

    const betterUrl = totalUrlList.find((url) => {
      const urlInst = new URL(url);
      if (urlInst.host.startsWith("upos")) {
        return url;
      }
    });

    if (enable && betterUrl) {
      return betterUrl;
    } else {
      // 没有？那直接用第一个
      return totalUrlList[0];
    }
  },
  /**
   * 视频/音频CDN替换host
   * @param url 视频url
   * @param isAudio 是否是音频
   */
  replaceVideoOrAudioCDN(url: string, isAudio: boolean = false) {
    const userChooseCDN = isAudio
      ? Panel.getValue<string>("bili-video-uposServerSelect-audio")
      : Panel.getValue<string>("bili-video-uposServerSelect");
    let ownCDN = isAudio
      ? Panel.getValue<string>("bili-video-uposServerSelect-audio-own")
      : Panel.getValue<string>("bili-video-uposServerSelect-own");
    ownCDN = (ownCDN ?? "").trim();
    return this.replaceVideoCDNHost(url, userChooseCDN, isAudio, ownCDN);
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
    return this.replaceVideoCDNHost(url, userChooseCDN, isAudio, ownCDN);
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
    return this.replaceVideoCDNHost(url, userChooseCDN, false, ownCDN);
  },
  /**
   * 视频CDN替换host
   *
   * 有以下类型
   * .mcdn.bilivideo 辣鸡路线
   * @param url 视频url
   * @param chooseHost 需要替换的host
   * @param ownHost 自定义的host 如果传入，则使用该参数来替换
   * @param isAudio 是否是音频
   *
   */
  replaceVideoCDNHost(url: string, chooseHost: string, isAudio: boolean, ownHost?: string) {
    try {
      const urlInst = new URL(url);
      const host = urlInst.host;
      // 使用自定义的服务器host
      if (utils.isNotNull(ownHost)) {
        if (host === ownHost) {
          // 已相同 不替换
          return url;
        }
        urlInst.host = ownHost;
        log.info(`${isAudio ? "音频" : "视频"}原Host为：${host}，替换为自定义：${ownHost}`);
        return urlInst.toString();
      }
      // 使用选择的upos信息
      const chooseUposCDNInfo = BilibiliCDNServerList.find((item) => {
        return item.host === chooseHost;
      });
      if (utils.isNull(chooseUposCDNInfo) || utils.isNull(chooseUposCDNInfo.host)) {
        // 空host，即不存在选择的host 不替换
        return url;
      }
      // 选择的upos host
      let chooseUposCDNHost = chooseUposCDNInfo.host;
      if (host === chooseUposCDNHost) {
        // host相同 不替换
        return url;
      }
      urlInst.host = chooseUposCDNHost;
      log.info(`${isAudio ? "音频" : "视频"}原Host为：${host}，替换为选择的：${JSON.stringify(chooseUposCDNInfo)}`);
      return urlInst.toString();
    } catch (error) {
      log.error(`${isAudio ? "音频" : "视频"}cdn host替换失败`, error);
      return url;
    }
  },
};
