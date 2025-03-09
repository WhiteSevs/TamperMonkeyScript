import { log, utils } from "@/env";
import { BilibiliApiConfig } from "./BilibiliApiConfig";
import { PopsPanel } from "@/setting/panel";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { BilibiliQrCodeLogin } from "@/account/BilibiliQrCodeLogin";

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
				host:
					PopsPanel.getValue<string>(
						"bili-bangumi-proxyApiServer-default",
						""
					).trim() || BilibiliApiConfig.web_host,
			},
		];
		if (!PopsPanel.getValue("bili-bangumi-unlockAreaLimit")) {
			// 不启用
			return serverHost;
		}
		// 如果启用代理服务器，返回代理服务器
		// 否则使用bilibili的api
		/** 香港 */
		let hk_host = PopsPanel.getValue<string>("bili-bangumi-proxyApiServer-hk");
		if (utils.isNotNull(hk_host)) {
			serverHost.push({
				name: "香港",
				area: "hk",
				host: hk_host,
			});
		}
		/** 台湾 */
		let tw_host = PopsPanel.getValue<string>("bili-bangumi-proxyApiServer-tw");
		if (utils.isNotNull(tw_host)) {
			serverHost.push({
				name: "台湾",
				area: "tw",
				host: tw_host,
			});
		}
		/** 泰国/东南亚 */
		let tha_host = PopsPanel.getValue<string>(
			"bili-bangumi-proxyApiServer-tha-or-sea"
		);
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
		let hk_host = PopsPanel.getValue<string>("bili-search-proxyApiServer-hk");
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
		let tw_host = PopsPanel.getValue<string>("bili-search-proxyApiServer-tw");
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
		let tha_host = PopsPanel.getValue<string>(
			"bili-search-proxyApiServer-tha-or-sea"
		);
		if (utils.isNotNull(tha_host)) {
			serverHost.push({
				name: "泰国/东南亚",
				area: "th",
				host: tha_host,
			});
		} else {
			let bangumi_tha_host = bangumiProxyHost.find(
				(item) => item.area === "th"
			);
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
				urlList = urlList.concat(
					arg.filter((item) => typeof item === "string")
				);
			} else {
				if (typeof arg === "string") {
					urlList.push(arg);
				}
			}
		});

		let betterCDN = urlList.find((url) => {
			let urlObj = new URL(url);
			if (urlObj.host.startsWith("upos")) {
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
	 * 番剧视频CDN替换
	 * @param url 视频url
	 */
	replaceBangumiVideoCDN(url: string) {
		let userChooseCDN = PopsPanel.getValue<string>(
			"bili-bangumi-uposServerSelect"
		);
		return this.replaceVideoCDNHost(url, userChooseCDN);
	},
	/**
	 * 视频CDN替换host
	 * @param url 视频url
	 *
	 */
	replaceVideoCDN(url: string) {
		let userChooseCDN = PopsPanel.getValue<string>(
			"bili-video-uposServerSelect"
		);
		return this.replaceVideoCDNHost(url, userChooseCDN);
	},
	/**
	 * 视频CDN替换host
	 *
	 * 有以下类型
	 * .mcdn.bilivideo 辣鸡路线
	 * @param url 视频url
	 * @param userChooseCDNHost 需要替换的host
	 *
	 */
	replaceVideoCDNHost(url: string, userChooseCDNHost: string) {
		try {
			let urlObj = new URL(url);
			// 自定义替换upos
			let chooseUposCDN = this.getUposCDNServerList().find((item) => {
				return item.host === userChooseCDNHost;
			});
			// 判空
			if (utils.isNull(chooseUposCDN) || utils.isNull(chooseUposCDN.host)) {
				// 不替换
				return url;
			}
			let chooseUposCDNHost = chooseUposCDN.host;
			let originHost = urlObj.host;
			// 只处理upos的mirror的cdn
			if (originHost.includes("mirror")) {
				log.info(`原Host为：${originHost}`);
				log.info(`替换CDN为：${JSON.stringify(chooseUposCDN)}`);
				urlObj.host = chooseUposCDNHost;
			}
			return urlObj.toString();
		} catch (error) {
			log.error("视频upos替换失败", error);
			log.error(error);
			return url;
		}
	},
	/**
	 * 获取upos服务器列表
	 * @link https://github.com/the1812/Bilibili-Evolved/issues/3234#issuecomment-1504764774
	 */
	getUposCDNServerList() {
		const serverList = [
			{
				name: "不替换",
				host: "",
			},
			{
				name: "ali（阿里云）",
				host: "upos-sz-mirrorali.bilivideo.com",
			},
			{
				name: "alib（阿里云）",
				host: "upos-sz-mirroralib.bilivideo.com",
			},
			{
				name: "alio1（阿里云）",
				host: "upos-sz-mirroralio1.bilivideo.com",
			},
			{
				name: "cos（腾讯云）",
				host: "upos-sz-mirrorcos.bilivideo.com",
			},
			{
				name: "cosb（腾讯云，VOD加速类型）",
				host: "upos-sz-mirrorcosb.bilivideo.com",
			},
			{
				name: "coso1（腾讯云）",
				host: "upos-sz-mirrorcoso1.bilivideo.com",
			},
			{
				name: "hw（华为云，融合CDN）",
				host: "upos-sz-mirrorhw.bilivideo.com",
			},
			{
				name: "hwb（华为云，融合CDN）",
				host: "upos-sz-mirrorhwb.bilivideo.com",
			},
			{
				name: "hwo1（华为云，融合CDN）",
				host: "upos-sz-mirrorhwo1.bilivideo.com",
			},
			{
				name: "08c（华为云，融合CDN）",
				host: "upos-sz-mirror08c.bilivideo.com",
			},
			{
				name: "08h（华为云，融合CDN）",
				host: "upos-sz-mirror08h.bilivideo.com",
			},
			{
				name: "08ct（华为云，融合CDN）",
				host: "upos-sz-mirror08ct.bilivideo.com",
			},
			{
				name: "tf_hw（华为云）",
				host: "upos-tf-all-hw.bilivideo.com",
			},
			{
				name: "tf_tx（腾讯云）",
				host: "upos-tf-all-tx.bilivideo.com",
			},
			{
				name: "akamai（Akamai海外）",
				host: "upos-hz-mirrorakam.akamaized.net",
			},
			{
				name: "aliov（阿里云海外）",
				host: "upos-sz-mirroraliov.bilivideo.com",
			},
			{
				name: "cosov（腾讯云海外）",
				host: "upos-sz-mirrorcosov.bilivideo.com",
			},
			{
				name: "hwov（华为云海外）",
				host: "upos-sz-mirrorhwov.bilivideo.com",
			},
			{
				name: "hk_bcache（Bilibili海外）",
				host: "cn-hk-eq-bcache-01.bilivideo.com",
			},
			{
				name: "alibstar1（阿里云海外-东南亚）",
				host: "upos-sz-mirroralibstar1.bilivideo.com",
			},
			{
				name: "cosbstar1（腾讯云海外-东南亚）",
				host: "upos-sz-mirrorcosbstar1.bilivideo.com",
			},
			{
				name: "hwbstar1（华为云海外-东南亚）",
				host: "upos-sz-mirrorhwbstar1.bilivideo.com",
			},
			{
				name: "akamai（Akamai海外-东南亚）",
				host: "upos-bstar1-mirrorakam.akamaized.net",
			},
		];

		return serverList;
	},
};
