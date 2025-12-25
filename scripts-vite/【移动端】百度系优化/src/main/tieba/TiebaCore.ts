import { unsafeWindow } from "ViteGM";
import { $, DOMUtils, log, utils } from "@/env";
import { CommonUtil } from "@components/utils/CommonUtil";
import Qmsg from "qmsg";
import { VueUtils } from "@components/utils/VueUtils";

interface LandlordInfo {
  id: number;
  name: string | number;
  name_show: string | number;
  portrait: string | number;
  show_nickname: string | number;
  type: number;
  userhide: number;
}
export const TiebaCore = {
  /**
   * 伪装客户端已调用
   */
  clientCallMasquerade() {
    let originGetItem = unsafeWindow.localStorage.getItem;
    /* 劫持localStorage */
    unsafeWindow.localStorage.getItem = function (key) {
      if (key === "p_w_app_call" || key === "p_w_launchappcall" || key === "loginWakeModal") {
        log.info("伪装客户端已调用 " + key);
        return JSON.stringify({
          value: 1,
          date: utils.formatTime(void 0, "yyyyMMdd"),
        });
      } else if (
        key.startsWith("p_w_new_slient") ||
        key.startsWith("f_w_slient") ||
        key.startsWith("f_w_pop_slient") ||
        key.startsWith("f_w_floor") ||
        key.startsWith("t_w_slient") ||
        key.startsWith("t_w_pop_slient") ||
        key.startsWith("auto_slient_wakeup") ||
        key.startsWith("index_home_thread_guide-") ||
        key.startsWith("search_w_pop_slient-")
      ) {
        log.info("伪装客户端已调用 " + key);
        return "1";
      } else {
        return originGetItem.call(window.localStorage, key);
      }
    };
    /* localStorage赋值 1 */
    let masqueradeParamsList = [
      "p_w_new_slient_",
      "f_w_slient_",
      "f_w_pop_slient_",
      "f_w_floor_",
      "t_w_slient_",
      "t_w_pop_slient_",
      "auto_slient_wakeup_",
      "index_home_thread_guide-",
      "search_w_pop_slient-",
      "q_w_pop_slient_",
      "q_w_slient_",
      "undefined_",
    ];
    masqueradeParamsList.forEach((masqueradeParam) => {
      window.localStorage.setItem(masqueradeParam + utils.formatTime(void 0, "yyyy-MM-dd"), "1");
    });
    let masqueradeParamsList2 = ["auto_slient_wake_", "f_w_silencePopup_", "f_w_silence_"];
    masqueradeParamsList2.forEach((masqueradeParam) => {
      window.localStorage.setItem(
        masqueradeParam + utils.formatTime(void 0, "yyyy-MM-dd"),
        JSON.stringify({
          type: "number",
          data: 1,
        })
      );
    });
    for (let index = 0; index < window.localStorage.length; index++) {
      let keyName = window.localStorage.key(index) as string;
      [...masqueradeParamsList, ...masqueradeParamsList2].forEach((item) => {
        if (keyName.startsWith(item) && !keyName.endsWith(utils.formatTime(void 0, "yyyy-MM-dd"))) {
          log.success("删除过期键 ===> " + keyName);
          window.localStorage.removeItem(keyName);
        }
      });
    }
  },
  /**
   * 获取本帖楼主的信息
   */
  getLandlordInfo() {
    return ($(".main-page-wrap .user-line-wrapper.thread-user-line") as NestedObjectWithToString)?.__vue__?.$props
      ?.author as LandlordInfo;
  },
  /**
   * 获取当前的贴吧名字
   */
  getCurrentForumName(): string {
    let tbMobileViewport = VueUtils.getVue($<HTMLElement>(".tb-mobile-viewport")!)?.forum?.name;
    let mainPageWrap = VueUtils.getVue($<HTMLElement>(".main-page-wrap")!)?.$children[0]?.$children[0]?.forum?.name;
    let tbForum = VueUtils.getVue($<HTMLElement>(".tb-mobile-viewport .tb-forum")!)?.forum?.name;
    let appView = VueUtils.getVue($<HTMLElement>(".app-view")!)?.forum?.name;
    let $uniAppPostNavBarForumName =
      $<HTMLDivElement>("uni-app .nav-bar .forum-name") || $<HTMLElement>("uni-app .forum-name");

    let uniAppPostNavBarForumName = $uniAppPostNavBarForumName?.textContent || "";
    uniAppPostNavBarForumName = uniAppPostNavBarForumName.replace(/吧$/g, "");
    return tbMobileViewport || mainPageWrap || tbForum || appView || uniAppPostNavBarForumName;
  },
  /**
   * 获取当前的贴吧的id
   */
  getCurrentForumId(): number {
    let tbMobileViewport = VueUtils.getVue($<HTMLElement>(".tb-mobile-viewport")!)?.forum?.id;
    let appView = VueUtils.getVue($<HTMLElement>(".app-view")!)?.forum?.id;
    return tbMobileViewport || appView;
  },
  /**
   * 获取当前帖子的tid
   */
  getCurrentForumPostTid(): string {
    let tid = null;
    let appViewVue = VueUtils.getVue($<HTMLElement>(".app-view")!);
    if (appViewVue?.thread?.id !== "" && appViewVue?.thread?.id != null) {
      tid = appViewVue.thread.id.toString();
    } else {
      tid = window.location.pathname.match(/([0-9]+)/g)?.[0];
    }
    return tid;
  },
  /**
   * 添加滚动到顶部按钮
   */
  addScrollTopButton() {
    log.success("添加滚动到顶部按钮");
    let isInsertButton = false;
    let showScrollTopButton = function () {
      isInsertButton = true;
      let buttonElement = DOMUtils.toElement(
        /*html*/ `
				<div class="tb-totop whitesev-tb-totop">
				<style>
					.whitesev-tb-totop{
						position: fixed;
						right: .09rem;
						bottom: 1rem;
						z-index: 1000;
					}
					.whitesev-tb-totop .tb-totop__span{
						display: inline-block;
						width: .51rem;
						height: .51rem;
					}
					.whitesev-tb-totop .tb-totop__svg{
						width: 100%;
						height: 100%;
					}
					</style>
					<span class="tb-totop__span">
						<svg class="tb-totop__svg">
							<g id="icon_frs_top_50_页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
								<g id="icon_frs_top_50_编组" transform="translate(-1.000000, -1.000000)">
									<rect id="icon_frs_top_50_矩形" stroke="#979797" stroke-width="0.5" fill="#FFFFFF" opacity="0.384175037" transform="translate(26.000000, 26.000000) rotate(45.000000) translate(-26.000000, -26.000000) " x="8.25" y="8.25" width="35.5" height="35.5" rx="8"></rect>
									<polyline id="icon_frs_top_50_路径" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(26.000000, 28.000000) rotate(-45.000000) translate(-26.000000, -28.000000) " points="21 23 30.2928932 23.7071068 31 33"></polyline>
								</g>
							</g>
						</svg>
					</span>
				</div>`,
        true,
        false
      ) as HTMLButtonElement;
      DOMUtils.on(buttonElement, "click", function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
      document.body.appendChild(buttonElement);
    };
    let hideScrollTopButton = function () {
      isInsertButton = false;
      $(".whitesev-tb-totop")?.remove();
    };
    let checkScroll = new utils.LockFunction(
      function () {
        let scrollTop = window.document.documentElement.scrollTop || window.document.body.scrollTop;
        let scrollHeight =
          window.innerHeight || document.documentElement.clientHeight || window.document.body.clientHeight;
        if (scrollTop > scrollHeight * 2) {
          /* 页面中不存在该按钮元素才显示 */
          if (!isInsertButton) {
            showScrollTopButton();
          }
        } else {
          /* 隐藏 */
          hideScrollTopButton();
        }
      },
      this,
      50
    );
    window.addEventListener("scroll", checkScroll.run);
  },
  /**
   * 添加顶部的楼主头像/名字的点击事件-直接进入楼主的个人主页
   */
  addAuthorClickEvent() {
    DOMUtils.waitNode<HTMLDivElement>("div.main-page-wrap .main-thread-content .user-line").then((element) => {
      log.info("添加顶部的楼主头像/名字的点击事件-直接进入楼主的个人主页");
      DOMUtils.on(element, "click", function () {
        let vueInfo = VueUtils.getVue(element.parentElement) || VueUtils.getVue(element.closest(".user-line-wrapper"));
        let authorInfo = vueInfo?.author;
        if (!authorInfo) {
          log.error("获取贴主信息失败", vueInfo);
          return;
        }
        log.success("贴主信息", authorInfo);
        window.open(`/home/main?id=${authorInfo.portrait}`);
      });
    });
  },
  /**
   * 检测骨架屏
   * @time 900
   */
  checkSkeleton() {
    setTimeout(() => {
      let appElement = $("#app");
      if (appElement && appElement.innerHTML === "") {
        Qmsg.warning("检测到骨架屏，异常加载，刷新页面", {
          timeout: 1200,
          onClose() {
            window.location.reload();
          },
        });
      }
    }, 900);
  },
  /**
   * 自动重定向至主域名
   */
  autoJumpToMainHost() {
    if (unsafeWindow.top !== unsafeWindow.window) {
      return;
    }
    if (window.location.hostname === "tieba.baidu.com") {
      return;
    }
    let replacePattern = new RegExp(`^${window.location.origin}`);
    window.location.href = window.location.href.replace(replacePattern, "https://tieba.baidu.com");
  },
};
