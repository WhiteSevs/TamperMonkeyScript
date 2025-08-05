import { log, utils } from "@/env";
import { BilibiliApiConfig } from "./BilibiliApiConfig";
import { BilibiliQrCodeLogin } from "@/account/BilibiliQrCodeLogin";
import { Panel } from "@components/setting/panel";

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
					Panel.getValue<string>("bili-bangumi-proxyApiServer-default", "").trim() ||
					BilibiliApiConfig.web_host,
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
		let userChooseCDN = isAudio
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
		let userChooseCDN = isAudio
			? Panel.getValue<string>("bili-bangumi-uposServerSelect-audio")
			: Panel.getValue<string>("bili-bangumi-uposServerSelect");
		let ownCDN = isAudio
			? Panel.getValue<string>("bili-bangumi-uposServerSelect-audio-own")
			: Panel.getValue<string>("bili-bangumi-uposServerSelect-own");
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
			let urlInst = new URL(url);
			let originHost = urlInst.host;
			if (utils.isNotNull(ownCDNHost)) {
				urlInst.host = ownCDNHost;
				// 使用自定义的服务器host
				log.info(`原Host为：${originHost}，替换CDN为自定义：${ownCDNHost}`);
				return urlInst.toString();
			}
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
			urlInst.host = chooseUposCDNHost;
			log.info(`原Host为：${originHost}，替换CDN为：${JSON.stringify(chooseUposCDN)}`);
			return urlInst.toString();
		} catch (error) {
			log.error("视频upos替换失败", error);
			return url;
		}
	},
	/**
	 * 获取upos服务器列表
	 * @link https://github.com/the1812/Bilibili-Evolved/issues/3234#issuecomment-1504764774
	 * @link https://github.com/Kanda-Akihito-Kun/ccb/blob/main/data/cdn.json
	 */
	getUposCDNServerList() {
		const serverAreaList = {
			上海: [
				"cn-sh-ct-01-13.bilivideo.com",
				"cn-sh-ct-01-24.bilivideo.com",
				"cn-sh-ct-01-36.bilivideo.com",
				"cn-sh-fx-01-04.bilivideo.com",
				"cn-sh-office-bcache-01.bilivideo.com",
			],
			北京: [
				"cn-bj-cc-03-14.bilivideo.com",
				"cn-bj-cc-03-17.bilivideo.com",
				"cn-bj-fx-01-01.bilivideo.com",
				"cn-bj-fx-01-04.bilivideo.com",
				"cn-bj-fx-01-05.bilivideo.com",
				"cn-bj-se-01-05.bilivideo.com",
			],
			南京: [
				"cn-jsnj-fx-02-05.bilivideo.com",
				"cn-jsnj-fx-02-07.bilivideo.com",
				"cn-jsnj-fx-02-10.bilivideo.com",
			],
			呼市: [
				"cn-nmghhht-cm-01-11.bilivideo.com",
				"cn-nmghhht-cu-01-01.bilivideo.com",
				"cn-nmghhht-cu-01-08.bilivideo.com",
				"cn-nmghhht-cu-01-09.bilivideo.com",
				"cn-nmghhht-cu-01-12.bilivideo.com",
				"cn-nmghhht-cu-01-15.bilivideo.com",
			],
			哈市: [
				"cn-hljheb-cm-01-01.bilivideo.com",
				"cn-hljheb-cm-01-03.bilivideo.com",
				"cn-hljheb-ct-01-02.bilivideo.com",
				"cn-hljheb-ct-01-03.bilivideo.com",
				"cn-hljheb-ct-01-04.bilivideo.com",
				"cn-hljheb-ct-01-07.bilivideo.com",
			],
			外建: [
				"c0--cn-gotcha01.bilivideo.com",
				"d0--cn-gotcha09.bilivideo.com",
				"d1--cn-gotcha101.bilivideo.com",
				"d1--cn-gotcha102.bilivideo.com",
				"d1--cn-gotcha204-1.bilivideo.com",
				"d1--cn-gotcha204-2.bilivideo.com",
				"d1--cn-gotcha204-3.bilivideo.com",
				"d1--cn-gotcha204-4.bilivideo.com",
				"d1--cn-gotcha207.bilivideo.com",
				"d1--cn-gotcha211.bilivideo.com",
				"d1--cn-gotcha308.bilivideo.com",
				"d1--ov-gotcha01.bilivideo.com",
				"d1--ov-gotcha03.bilivideo.com",
				"d1--ov-gotcha207.bilivideo.com",
				"d1--ov-gotcha208.bilivideo.com",
				"d1--ov-gotcha209.bilivideo.com",
				"d1--ov-gotcha210.bilivideo.com",
				"d1--p1--cn-gotcha04.bilivideo.com",
				"d1--tf-gotcha04.bilivideo.com",
			],
			天津: [
				"cn-tj-cm-02-01.bilivideo.com",
				"cn-tj-cm-02-02.bilivideo.com",
				"cn-tj-cm-02-04.bilivideo.com",
				"cn-tj-cm-02-05.bilivideo.com",
				"cn-tj-cm-02-06.bilivideo.com",
				"cn-tj-cm-02-07.bilivideo.com",
				"cn-tj-cu-01-02.bilivideo.com",
				"cn-tj-cu-01-03.bilivideo.com",
				"cn-tj-cu-01-04.bilivideo.com",
				"cn-tj-cu-01-06.bilivideo.com",
				"cn-tj-cu-01-07.bilivideo.com",
				"cn-tj-cu-01-09.bilivideo.com",
				"cn-tj-cu-01-10.bilivideo.com",
				"cn-tj-cu-01-11.bilivideo.com",
				"cn-tj-cu-01-12.bilivideo.com",
				"cn-tj-cu-01-13.bilivideo.com",
			],
			广州: [
				"cn-gdgz-cm-01-02.bilivideo.com",
				"cn-gdgz-cm-01-10.bilivideo.com",
				"cn-gdgz-fx-01-01.bilivideo.com",
				"cn-gdgz-fx-01-02.bilivideo.com",
				"cn-gdgz-fx-01-03.bilivideo.com",
				"cn-gdgz-fx-01-04.bilivideo.com",
				"cn-gdgz-fx-01-06.bilivideo.com",
				"cn-gdgz-fx-01-08.bilivideo.com",
				"cn-gdgz-fx-01-09.bilivideo.com",
				"cn-gdgz-fx-01-10.bilivideo.com",
				"cn-gdgz-gd-01-01.bilivideo.com",
			],
			成都: [
				"cn-sccd-cm-03-01.bilivideo.com",
				"cn-sccd-cm-03-02.bilivideo.com",
				"cn-sccd-cm-03-05.bilivideo.com",
				"cn-sccd-ct-01-02.bilivideo.com",
				"cn-sccd-ct-01-08.bilivideo.com",
				"cn-sccd-ct-01-10.bilivideo.com",
				"cn-sccd-ct-01-17.bilivideo.com",
				"cn-sccd-ct-01-18.bilivideo.com",
				"cn-sccd-ct-01-19.bilivideo.com",
				"cn-sccd-ct-01-20.bilivideo.com",
				"cn-sccd-ct-01-21.bilivideo.com",
				"cn-sccd-ct-01-22.bilivideo.com",
				"cn-sccd-ct-01-23.bilivideo.com",
				"cn-sccd-ct-01-24.bilivideo.com",
				"cn-sccd-ct-01-25.bilivideo.com",
				"cn-sccd-ct-01-26.bilivideo.com",
				"cn-sccd-ct-01-27.bilivideo.com",
				"cn-sccd-ct-01-29.bilivideo.com",
				"cn-sccd-cu-01-02.bilivideo.com",
				"cn-sccd-cu-01-03.bilivideo.com",
				"cn-sccd-cu-01-04.bilivideo.com",
				"cn-sccd-cu-01-05.bilivideo.com",
				"cn-sccd-cu-01-06.bilivideo.com",
				"cn-sccd-cu-01-07.bilivideo.com",
				"cn-sccd-cu-01-09.bilivideo.com",
				"cn-sccd-fx-01-01.bilivideo.com",
				"cn-sccd-fx-01-06.bilivideo.com",
			],
			新疆: [
				"cn-xj-cm-02-01.bilivideo.com",
				"cn-xj-cm-02-04.bilivideo.com",
				"cn-xj-cm-02-06.bilivideo.com",
				"cn-xj-ct-01-01.bilivideo.com",
				"cn-xj-ct-01-02.bilivideo.com",
				"cn-xj-ct-01-03.bilivideo.com",
				"cn-xj-ct-01-04.bilivideo.com",
				"cn-xj-ct-01-05.bilivideo.com",
				"cn-xj-ct-02-02.bilivideo.com",
			],
			杭州: [
				"cn-zjhz-cm-01-01.bilivideo.com",
				"cn-zjhz-cm-01-04.bilivideo.com",
				"cn-zjhz-cm-01-07.bilivideo.com",
				"cn-zjhz-cm-01-12.bilivideo.com",
				"cn-zjhz-cm-01-17.bilivideo.com",
				"cn-zjhz-cu-01-01.bilivideo.com",
				"cn-zjhz-cu-01-02.bilivideo.com",
				"cn-zjhz-cu-01-05.bilivideo.com",
				"cn-zjhz-cu-v-02.bilivideo.com",
			],
			武汉: [
				"cn-hbwh-cm-01-01.bilivideo.com",
				"cn-hbwh-cm-01-02.bilivideo.com",
				"cn-hbwh-cm-01-04.bilivideo.com",
				"cn-hbwh-cm-01-05.bilivideo.com",
				"cn-hbwh-cm-01-06.bilivideo.com",
				"cn-hbwh-cm-01-08.bilivideo.com",
				"cn-hbwh-cm-01-09.bilivideo.com",
				"cn-hbwh-cm-01-10.bilivideo.com",
				"cn-hbwh-cm-01-12.bilivideo.com",
				"cn-hbwh-cm-01-17.bilivideo.com",
				"cn-hbwh-cm-01-18.bilivideo.com",
				"cn-hbwh-cm-01-19.bilivideo.com",
				"cn-hbwh-fx-01-02.bilivideo.com",
				"cn-hbwh-fx-01-12.bilivideo.com",
			],
			沈阳: [
				"cn-lnsy-cm-01-01.bilivideo.com",
				"cn-lnsy-cm-01-03.bilivideo.com",
				"cn-lnsy-cm-01-04.bilivideo.com",
				"cn-lnsy-cm-01-05.bilivideo.com",
				"cn-lnsy-cm-01-06.bilivideo.com",
				"cn-lnsy-cu-01-03.bilivideo.com",
				"cn-lnsy-cu-01-04.bilivideo.com",
				"cn-lnsy-cu-01-06.bilivideo.com",
			],
			泉州: [
				"cn-fjqz-cm-01-01.bilivideo.com",
				"cn-fjqz-cm-01-02.bilivideo.com",
				"cn-fjqz-cm-01-03.bilivideo.com",
				"cn-fjqz-cm-01-04.bilivideo.com",
				"cn-fjqz-cm-01-05.bilivideo.com",
				"cn-fjqz-cm-01-06.bilivideo.com",
				"cn-fjqz-cm-01-08.bilivideo.com",
				"cn-fjqz-cmcc-live-01.bilivideo.com",
			],
			深圳: [
				"upos-sz-dynqn.bilivideo.com",
				"upos-sz-estgcos.bilivideo.com",
				"upos-sz-estghw.bilivideo.com",
				"upos-sz-estgoss.bilivideo.com",
				"upos-sz-estgoss02.bilivideo.com",
				"upos-sz-mirror08c.bilivideo.com",
				"upos-sz-mirror08ct.bilivideo.com",
				"upos-sz-mirror08h.bilivideo.com",
				"upos-sz-mirrorali.bilivideo.com",
				"upos-sz-mirroralib.bilivideo.com",
				"upos-sz-mirroralio1.bilivideo.com",
				"upos-sz-mirrorali02.bilivideo.com",
				"upos-sz-mirroralibstar1.bilivideo.com",
				"upos-sz-mirroraliov.bilivideo.com",
				"upos-sz-mirrorbd.bilivideo.com",
				"upos-sz-mirrorcf1ov.bilivideo.com",
				"upos-sz-mirrorcos.bilivideo.com",
				"upos-sz-mirrorcosb.bilivideo.com",
				"upos-sz-mirrorcoso1.bilivideo.com",
				"upos-sz-mirrorcosdisp.bilivideo.com",
				"upos-sz-mirrorctos.bilivideo.com",
				"upos-sz-mirrorhw.bilivideo.com",
				"upos-sz-mirrorhwb.bilivideo.com",
				"upos-sz-mirrorhwo1.bilivideo.com",
				"upos-sz-mirrorhwdisp.bilivideo.com",
				"upos-sz-originbstar.bilivideo.com",
				"upos-sz-origincosv.bilivideo.com",
			],
			西安: [
				"cn-sxxa-cm-01-01.bilivideo.com",
				"cn-sxxa-cm-01-02.bilivideo.com",
				"cn-sxxa-cm-01-04.bilivideo.com",
				"cn-sxxa-cm-01-09.bilivideo.com",
				"cn-sxxa-cm-01-12.bilivideo.com",
				"cn-sxxa-ct-03-02.bilivideo.com",
				"cn-sxxa-ct-03-03.bilivideo.com",
				"cn-sxxa-ct-03-04.bilivideo.com",
				"cn-sxxa-cu-02-01.bilivideo.com",
				"cn-sxxa-cu-02-02.bilivideo.com",
			],
			郑州: [
				"cn-hnzz-cm-01-01.bilivideo.com",
				"cn-hnzz-cm-01-02.bilivideo.com",
				"cn-hnzz-cm-01-03.bilivideo.com",
				"cn-hnzz-cm-01-04.bilivideo.com",
				"cn-hnzz-cm-01-05.bilivideo.com",
				"cn-hnzz-cm-01-06.bilivideo.com",
				"cn-hnzz-cm-01-09.bilivideo.com",
				"cn-hnzz-cm-01-11.bilivideo.com",
				"cn-hnzz-fx-01-01.bilivideo.com",
				"cn-hnzz-fx-01-08.bilivideo.com",
			],
			香港: [
				"cn-hk-eq-01-03.bilivideo.com",
				"cn-hk-eq-01-09.bilivideo.com",
				"cn-hk-eq-01-10.bilivideo.com",
				"cn-hk-eq-01-12.bilivideo.com",
				"cn-hk-eq-01-13.bilivideo.com",
				"cn-hk-eq-01-14.bilivideo.com",
				"cn-hk-eq-bcache-13.bilivideo.com",
				"cn-hk-eq-bcache-16.bilivideo.com",
			],
			海外: [
				// akamai（Akamai海外）
				"upos-hz-mirrorakam.akamaized.net",
				// 阿里云
				"upos-sz-mirroraliov.bilivideo.com",
				// 腾讯云
				"upos-sz-mirrorcosov.bilivideo.com",
				// 华为云
				"upos-sz-mirrorhwov.bilivideo.com",
				// bilibili
				"cn-hk-eq-bcache-01.bilivideo.com",
			],
			"海外（东南亚）": [
				// 阿里云
				"upos-sz-mirroralibstar1.bilivideo.com",
				// 腾讯云
				"upos-sz-mirrorcosbstar1.bilivideo.com",
				// 华为云
				"upos-sz-mirrorhwbstar1.bilivideo.com",
				// Akamai
				"upos-bstar1-mirrorakam.akamaized.net",
			],
			其它: [
				// tf_hw（华为云）
				"upos-tf-all-hw.bilivideo.com",
				//  tf_tx（腾讯云）
				"upos-tf-all-tx.bilivideo.com",
			],
		};
		const serverList: {
			name: string;
			host: string;
		}[] = [
			{
				name: "不替换",
				host: "",
			},
		];
		Object.keys(serverAreaList).map((key) => {
			const hostList = serverAreaList[key as keyof typeof serverAreaList];
			hostList.forEach((host) => {
				serverList.push({
					name: `${key} - ${host.trim().replace(/\.bilivideo\.com$/gi, "")}`,
					host,
				});
			});
		});
		return serverList;
	},
};
