import { BilibiliQrCodeLogin } from "@/account/BilibiliQrCodeLogin";
import { DOMUtils, addStyle, httpx, log, utils } from "@/env";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import BilibiliRecommendCSS from "./BilibiliRecommend.css?raw";
import { android } from "@/define/BilibiliRecommendDefine";
import { av2bv } from "@mgdn/bvid";
import { BilibiliApiResponseCheck } from "@/api/BilibiliApiResponseCheck";
import { AppKeyInfo } from "@/common/config";
import Qmsg from "qmsg";
import { Panel } from "@components/setting/panel";

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
    /** 加载推荐视频次数 */
    loadNums: 0,
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
    DOMUtils.onReady(() => {
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
    let $vSwitcher = document.querySelector<HTMLUListElement>(".channel-menu .v-switcher");
    if (!$vSwitcher) {
      log.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");
      Qmsg.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");
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
      innerHTML: /*html*/ `
            <div class="list-view">
                <div class="video-list-box">
                    <div class="video-list">
                        <div class="card-box">

                        </div>
                    </div>
                </div>
                <div class="list-view__shim">

				</div>
            </div>
            `,
    });
    this.$ele.$listView = $recommendView.querySelector(".list-view") as HTMLDivElement;
    this.$ele.$videoListBox = $recommendView.querySelector(".video-list-box") as HTMLDivElement;
    this.$ele.$videoList = $recommendView.querySelector(".video-list") as HTMLDivElement;
    this.$ele.$cardBox = $recommendView.querySelector(".card-box") as HTMLDivElement;
    this.$ele.$listViewShim = $recommendView.querySelector(".list-view__shim") as HTMLDivElement;

    this.$ele.$listViewShim.style.cssText = `z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;`;
    let $myHead = document.querySelector<HTMLDivElement>("#app .m-head");
    if ($myHead) {
      $myHead.appendChild($recommendView);
    }
    DOMUtils.on($recommendTag, "click", (event) => {
      DOMUtils.preventEvent(event);
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
      DOMUtils.preventEvent(event);
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
    log.success("推荐视频监听滚动: IntersectionObserver");
    this.$data.intersectionObserver = new IntersectionObserver(
      async (entries) => {
        if (!this.$flag.isLoadingNextPage && entries[0].isIntersecting) {
          this.$flag.isLoadingNextPage = true;
          let flag = await this.scrollEvent();
          this.$flag.isLoadingNextPage = false;
          if (this.$data.loadNums <= 1 && flag) {
            DOMUtils.hide(this.$ele.$listViewShim, false);
            await utils.sleep(500);
            DOMUtils.show(this.$ele.$listViewShim, false);
          } else {
            DOMUtils.show(this.$ele.$listViewShim, false);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
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
      return false;
    }
    log.success("获取推荐视频信息", videoInfo);
    let $fragment = document.createDocumentFragment();
    let allowLoadPictureCard = Panel.getValue("bili-head-recommend-push-graphic");
    videoInfo.forEach((videoInfoItem) => {
      let $ele = null;
      if (videoInfoItem.goto === this.$cardGoto.av) {
        $ele = this.getRecommendItemAVElement(videoInfoItem as Required<android.AppRecItem>);
      } else if (videoInfoItem.goto === this.$cardGoto.picture) {
        /* 应该是专栏/动态 */
        /* 图文 */
        if (allowLoadPictureCard) {
          $ele = this.getRecommendItemPictureElement(videoInfoItem as Required<android.AppRecItem>);
        } else {
          return;
        }
      } else {
        log.error("该goto暂未适配", videoInfoItem);
        return;
      }
      $fragment.appendChild($ele);
    });
    this.$ele.$cardBox.appendChild($fragment);
    this.$data.loadNums++;
    return true;
  },
  /**
   * 获取推荐视频信息
   */
  async getRecommendVideoInfo() {
    let getData = {
      appkey: AppKeyInfo.ios.appkey,
      access_key: BilibiliQrCodeLogin.getAccessTokenInfo()?.access_token || "",
    };
    let Api = "https://app.bilibili.com/x/v2/feed/index";
    let getResp = await httpx.get(Api + "?" + utils.toSearchParamsStr(getData), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (!getResp.status) {
      return;
    }
    let data = utils.toJSON<android.AppRecommendJson>(getResp.data.responseText);
    if (!BilibiliApiResponseCheck.isWebApiSuccess(data)) {
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
        innerHTML: /*html*/ `
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
                            <i class="iconfont icon_shipin_bofangshu">
								<svg class="stats-item__icon" style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16"><path d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z" fill="currentColor"></path><path d="M9.8092 7.3125C10.338433333333333 7.618066666666666 10.338433333333333 8.382 9.809166666666666 8.687533333333333L7.690799999999999 9.910599999999999C7.161566666666666 10.216133333333332 6.5 9.8342 6.500006666666666 9.223066666666666L6.500006666666666 6.776999999999999C6.500006666666666 6.165873333333334 7.161566666666666 5.783913333333333 7.690799999999999 6.089479999999999L9.8092 7.3125z" fill="currentColor"></path></svg>
							</i>
                            ${playCount}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu">
								<svg class="stats-item__icon" style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16"><path d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z" fill="currentColor"></path><path d="M10.583333333333332 7.166666666666666L6.583333333333333 7.166666666666666C6.307193333333332 7.166666666666666 6.083333333333333 6.942799999999999 6.083333333333333 6.666666666666666C6.083333333333333 6.390526666666666 6.307193333333332 6.166666666666666 6.583333333333333 6.166666666666666L10.583333333333332 6.166666666666666C10.859466666666666 6.166666666666666 11.083333333333332 6.390526666666666 11.083333333333332 6.666666666666666C11.083333333333332 6.942799999999999 10.859466666666666 7.166666666666666 10.583333333333332 7.166666666666666z" fill="currentColor"></path><path d="M11.583333333333332 9.833333333333332L7.583333333333333 9.833333333333332C7.3072 9.833333333333332 7.083333333333333 9.609466666666666 7.083333333333333 9.333333333333332C7.083333333333333 9.0572 7.3072 8.833333333333332 7.583333333333333 8.833333333333332L11.583333333333332 8.833333333333332C11.859466666666666 8.833333333333332 12.083333333333332 9.0572 12.083333333333332 9.333333333333332C12.083333333333332 9.609466666666666 11.859466666666666 9.833333333333332 11.583333333333332 9.833333333333332z" fill="currentColor"></path><path d="M5.25 6.666666666666666C5.25 6.942799999999999 5.02614 7.166666666666666 4.75 7.166666666666666L4.416666666666666 7.166666666666666C4.140526666666666 7.166666666666666 3.9166666666666665 6.942799999999999 3.9166666666666665 6.666666666666666C3.9166666666666665 6.390526666666666 4.140526666666666 6.166666666666666 4.416666666666666 6.166666666666666L4.75 6.166666666666666C5.02614 6.166666666666666 5.25 6.390526666666666 5.25 6.666666666666666z" fill="currentColor"></path><path d="M6.25 9.333333333333332C6.25 9.609466666666666 6.02614 9.833333333333332 5.75 9.833333333333332L5.416666666666666 9.833333333333332C5.140526666666666 9.833333333333332 4.916666666666666 9.609466666666666 4.916666666666666 9.333333333333332C4.916666666666666 9.0572 5.140526666666666 8.833333333333332 5.416666666666666 8.833333333333332L5.75 8.833333333333332C6.02614 8.833333333333332 6.25 9.0572 6.25 9.333333333333332z" fill="currentColor"></path></svg>
							</i>
                            ${commentCount}
                        </span>
                        <span class="gm-video-duration">${videoTime}</span>
                    </div>
                </div>
                <p class="title">${title}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
