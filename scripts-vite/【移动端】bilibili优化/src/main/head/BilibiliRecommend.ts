import { BilibiliQrCodeLogin } from "@/account/BilibiliQrCodeLogin";
import { TVKeyInfo } from "@/common/config";
import { BilibiliData } from "@/data/BlibiliData";
import { DOMUtils, Qmsg, addStyle, httpx, log, utils } from "@/env";
import { BilibiliUtils, isWebApiSuccess } from "@/utils/BilibiliUtils";
import BilibiliRecommendCSS from "./BilibiliRecommend.css?raw";
import { android } from "@/define/BilibiliRecommendDefine";
import { av2bv } from "@mgdn/bvid";
import { PopsPanel } from "@/setting/setting";

/**
 * 修复图片（http转换为https）
 * @param url
 * @returns
 */
const fixCover = (url: string) => {
	if (url.startsWith("http://")) {
		url = url.replace(/^http/, "https");
	}
	return url;
};

export const BilibiliRecommend = {
	$flag: {
		/** 是否已初始化CSS */
		isInitCSS: false,
		/** 是否正在加载下一页 */
		isLoadingNextPage: false,
	},
	$data: {
		/** 监听滚动的观察器 */
		intersectionObserver: null as IntersectionObserver | null,
	},
	$ele: {
		$listView: null as any as HTMLDivElement,
		$videoListBox: null as any as HTMLDivElement,
		$videoList: null as any as HTMLDivElement,
		$cardBox: null as any as HTMLDivElement,
		$listViewShim: null as any as HTMLDivElement,
	},
	$cardGoto: {
		av: "av",
		picture: "picture",
	},
	init() {
		this.setCSS();
		// this.reset();
		DOMUtils.ready(() => {
			this.addRecommendTag();
		});
	},
	setCSS() {
		if (this.$flag.isInitCSS) {
			return;
		}
		this.$flag.isInitCSS = true;
		addStyle(BilibiliRecommendCSS);
	},
	/**
	 * 重置状态
	 */
	reset() {
		log.info("重置状态");
		this.$flag.isLoadingNextPage = false;
		this.removeScrollEvent();
		Object.keys(this.$ele).forEach((key) => {
			(this.$ele as any)[key] = null;
		});
	},
	/**
	 * 添加推荐标签
	 */
	addRecommendTag() {
		if (document.querySelector(".channel-menu a.recommend-tag")) {
			return;
		}
		let $vSwitcher = document.querySelector<HTMLUListElement>(
			".channel-menu .v-switcher"
		);
		if (!$vSwitcher) {
			log.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");
			return;
		}
		let $recommendTag = DOMUtils.createElement(
			"a",
			{
				className: "v-switcher__header__tabs__item recommend-tag",
				innerHTML: "<span>推荐</span>",
			},
			{
				href: "javascript:;",
			}
		);
		let $recommendView = DOMUtils.createElement("div", {
			className: "m-recommend-view",
			innerHTML: `
            <div class="list-view">
                <div class="video-list-box">
                    <div class="video-list">
                        <div class="card-box">

                        </div>
                    </div>
                </div>
                <div class="list-view__shim" style="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;"></div>
            </div>
            `,
		});
		this.$ele.$listView = $recommendView.querySelector(
			".list-view"
		) as HTMLDivElement;
		this.$ele.$videoListBox = $recommendView.querySelector(
			".video-list-box"
		) as HTMLDivElement;
		this.$ele.$videoList = $recommendView.querySelector(
			".video-list"
		) as HTMLDivElement;
		this.$ele.$cardBox = $recommendView.querySelector(
			".card-box"
		) as HTMLDivElement;
		this.$ele.$listViewShim = $recommendView.querySelector(
			".list-view__shim"
		) as HTMLDivElement;

		let $myHead = document.querySelector<HTMLDivElement>("#app .m-head");
		if ($myHead) {
			$myHead.appendChild($recommendView);
		}
		DOMUtils.on($recommendTag, "click", (event) => {
			utils.preventEvent(event);
			$recommendTag.classList.add("is-avtive");
			this.recommendClickEvent();
		});
		DOMUtils.on(
			$vSwitcher,
			"click",
			() => {
				$recommendTag.classList.remove("is-avtive");
			},
			{
				capture: true,
			}
		);
		DOMUtils.on(this.$ele.$cardBox, "click", ".v-card", (event) => {
			utils.preventEvent(event);
			let $click = event.target as HTMLAnchorElement;
			// BilibiliUtils.goToUrl($click.href, true);
			window.open($click.href, "_blank");
		});
		DOMUtils.before($vSwitcher, $recommendTag);
		// DOMUtils.before($parent.firstChild as HTMLAnchorElement, $recommendTag);
		this.setScrollEvent();
		// 如果hash值正好是设定的，那么，主动触发一下，因为可能是刷新的
		if (window.location.hash === "#/recommend/") {
			log.info("当前hash为推荐视频，出动触发");
			$recommendTag.click();
		}
	},
	/**
	 * 推荐标签的点击事件（切换router）
	 */
	async recommendClickEvent() {
		BilibiliUtils.goToUrl("#/recommend/", true);
	},
	/**
	 * 设置滚动观察事件
	 */
	setScrollEvent() {
		log.success("监听滚动: IntersectionObserver");
		this.$data.intersectionObserver = new IntersectionObserver(
			async (entries) => {
				if (!this.$flag.isLoadingNextPage && entries[0].isIntersecting) {
					this.$flag.isLoadingNextPage = true;
					await this.scrollEvent();
					this.$flag.isLoadingNextPage = false;
				}
			},
			{ threshold: 0 }
		);
		this.$data.intersectionObserver.observe(this.$ele.$listViewShim);
	},
	/**
	 * 移除滚动观察事件
	 */
	removeScrollEvent() {
		this.$data.intersectionObserver?.disconnect();
		this.$data.intersectionObserver = null;
	},
	/**
	 * 滚动事件
	 */
	async scrollEvent() {
		let videoInfo = await this.getRecommendVideoInfo();
		if (!videoInfo) {
			return;
		}
		log.success(["获取推荐视频信息", videoInfo]);
		let $fragment = document.createDocumentFragment();
		let allowLoadPictureCard = PopsPanel.getValue(
			"bili-head-recommend-push-graphic"
		);
		videoInfo.forEach((videoInfoItem) => {
			let $ele = null;
			if (videoInfoItem.goto === this.$cardGoto.av) {
				$ele = this.getRecommendItemAVElement(
					videoInfoItem as Required<android.AppRecItem>
				);
			} else if (
				allowLoadPictureCard &&
				videoInfoItem.goto === this.$cardGoto.picture
			) {
				/* 应该是专栏/动态 */
				/* 图文 */
				$ele = this.getRecommendItemPictureElement(
					videoInfoItem as Required<android.AppRecItem>
				);
			} else {
				log.error(["该goto暂未适配", videoInfoItem]);
				return;
			}
			$fragment.appendChild($ele);
		});
		this.$ele.$cardBox.appendChild($fragment);
	},
	/**
	 * 获取推荐视频信息
	 */
	async getRecommendVideoInfo() {
		let getData = {
			appkey: TVKeyInfo.appkey,
			access_key: BilibiliQrCodeLogin.getAccessTokenInfo()?.access_token || "",
		};
		let Api = "https://app.bilibili.com/x/v2/feed/index";
		let getResp = await httpx.get(
			Api + "?" + utils.toSearchParamsStr(getData),
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		);
		if (!getResp.status) {
			return;
		}
		let data = utils.toJSON<android.AppRecommendJson>(
			getResp.data.responseText
		);
		if (!isWebApiSuccess(data)) {
			Qmsg.error(data["message"]);
			return;
		}
		return data.data.items;
	},
	/**
	 * 获取推荐视频的每一个元素 图文
	 * + picture
	 */
	getRecommendItemPictureElement(data: Required<android.AppRecItem>) {
		let goto = data.goto;
		let param = data.param;
		let url = "/opus/" + param;
		let upName = data.args.up_name;
		let title = data.title;
		let cover = fixCover(data.cover);
		let likeCount = data.cover_left_text_1;
		let $vCard = DOMUtils.createElement(
			"a",
			{
				className: "v-card",
				href: url,
				innerHTML: `
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${cover}">
                                <img src="${cover}" alt="${title}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont like2"></i>
                            ${likeCount}
                        </span>
                    </div>
                </div>
                <p class="title">${title}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <p class="gm-picture-text">图文</p>
                        ${upName}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `,
			},
			{
				"data-param": param,
				"data-title": title,
				"data-goto": goto,
			}
		);
		($vCard as any)["data-picture"] = data;

		return $vCard;
	},
	/**
	 * 获取推荐视频的每一个元素
	 * + av
	 */
	getRecommendItemAVElement(data: Required<android.AppRecItem>) {
		let goto = data.goto;
		let aid = data?.player_args?.aid || data.args.aid;
		let bvid = av2bv(aid!);
		let url = "/video/" + bvid;
		let upName = data.args.up_name;
		let title = data.title;
		let cover = fixCover(data.cover);
		let playCount = data.cover_left_text_1;
		let commentCount = data.cover_left_text_2;
		let videoTime = data.cover_right_text;
		let $vCard = DOMUtils.createElement(
			"a",
			{
				className: "v-card",
				href: url,
				innerHTML: `
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${cover}">
                                <img src="${cover}" alt="${title}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont icon_shipin_bofangshu"></i>
                            ${playCount}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu"></i>
                            ${commentCount}
                        </span>
                        <span class="gm-video-duration">${videoTime}</span>
                    </div>
                </div>
                <p class="title">${title}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
                            </path>
                        </svg>
                        ${upName}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `,
			},
			{
				"data-aid": aid,
				"data-title": title,
				"data-goto": goto,
			}
		);
		($vCard as any)["data-video"] = data;

		return $vCard;
	},
};
