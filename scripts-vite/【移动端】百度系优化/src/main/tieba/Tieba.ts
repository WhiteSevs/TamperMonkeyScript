import { $, DOMUtils, addStyle, log, pops, utils } from "@/env";
import TieBaShieldCSS from "./shield.css?raw";
import UniTieBaShieldCSS from "./uni-app-shield.css?raw";
import { Panel } from "@components/setting/panel";
import { BaiduRouter } from "@/router/BaiduRouter";
import { BaiduHook } from "@/hook/BaiduHook";
import { TiebaTopicTemplate } from "./topic-template/TiebaTopicTemplate";
import { TiebaHybrid } from "./hybrid/TiebaHybrid";
import { TiebaBaNei } from "./ba-nei/TiebaBaNei";
import { TiebaSearch } from "./TiebaSearch";
import { TiebaData } from "./home/data";
import { TiebaCore } from "./TiebaCore";
import { TiebaPost } from "./post/TiebaPost";
import { TiebaHome } from "./home/TiebaHome";
import Qmsg from "qmsg";
import { VueUtils } from "@components/utils/VueUtils";
import { TiebaUniAppPost } from "./uni-app-post/TiebaUniAppPost";
import { TiebaCheckUrl } from "./utils/TiebaCheckUrl";
import { TiebaHotTopic } from "./hot-topic/TiebaHotTopic";
import { TiebaMsgTab } from "./msgtab/TiebaMsgTab";
import { TiebaUrlHandler } from "./handler/TiebaUrlHandler";
import { TiebaCollectionCenter } from "./collection-center/TiebaCollectionCenter";
import { TiebaSmallAppApi } from "./api/TiebaSmallAppApi";
import { TiebaHybridUsergrowBaseCommentFocus } from "./hybrid-usergrow-base/TiebaHybridUsergrowBaseCommentFocus";

/**
 * 百度贴吧
 * document.querySelector("div.app-view").__vue__
 * + disablePbGuide 是否隐藏顶部导航栏
 * + loading 是否隐藏整个页面的内容（清空）
 * + isVideoThread 该帖子是否是个视频，是的话把帖子变成视频样式
 * + isErrorThread 该帖子是否发生错误(被禁用)，是的话全屏变成显示【贴子不存在或者已被删除】
 * + isNoForumThread 该帖子是否是来自动态
 * + isShowLoginWakeModal 是否显示需要登录的弹窗【继续操作需要登录贴吧账号】
 * + isHitMedicalPost 是否是精选回复的帖子，是的话隐藏顶部的工具栏，且修改帖子主内容的背景（淡蓝色），修改回复的标识为【精选回复】
 * + isPornographicComment 是否隐藏评论
 * + isGreyPage 页面是否变成灰色，包括文字
 * + isFromFengchaoAd 是否是点击广告进的帖子，是的话整个页面被广告提示覆盖【打开贴吧APP，继续浏览】
 * + isAutoInvoke 猜测是自动调用各种唤醒
 * + isShowResourceFixedCard 是否显示底部悬浮的工具栏【资源合集】卡片
 * + slientUpNewConfig 里面应该是各种静默弹窗的配置，存储自localStorage
 *
 *
 * document.querySelector("div.tb-mobile-viewport").__vue_
 * + isShowModal 是否显示需要登录的弹窗【继续操作需要登录贴吧账号】
 */
export const BaiduTieBa = {
  init() {
    addStyle(TieBaShieldCSS);
    addStyle(UniTieBaShieldCSS);
    addStyle(/*css*/ `
		/* 由于lzl弹窗的z-index是99999，所以，回复框、toast、登录弹窗的z-index要大于99999 */
		/* 底部回复框 */
        .comment-box-wrap-lzl{
            z-index: calc(99999 + 10) !important;
        }
		/* 登录弹窗 */
		.login-wake-modal-mask{
			z-index: calc(99999 + 20) !important;
		}
		/* 消息toast */
		.tb-toast{
			z-index: calc(99999 + 100) !important;
		}
        `);
    log.info("插入CSS规则");
    // Panel.execMenu(
    // 	"baidu_tieba_clickOnTheOwnerSAvatarToCorrectlyRedirectToTheHomepage",
    // 	() => {
    // 		TiebaCore.addAuthorClickEvent();
    // 	}
    // );
    Panel.execMenu("baidu_tieba_autoJumpToMainHost", () => {
      TiebaCore.autoJumpToMainHost();
    });
    Panel.execMenu("baidu_tieba_clientCallMasquerade", () => {
      TiebaCore.clientCallMasquerade();
    });
    BaiduHook.elementAppendChild();
    Panel.execMenuOnce("baidu_tieba_hijack_wake_up", () => {
      BaiduHook.windowWebpackJsonp_tieba();
    });
    if (BaiduRouter.isTieBaIndex()) {
      /* 首页 */
      log.success("Router: 首页");
      Panel.execMenu("baidu_tieba_index_openANewTab", () => {
        TiebaBaNei.repairCardClickJump();
      });
      Panel.execMenu("baidu_tieba_index_add_msgtab", () => {
        if (window.location.pathname.startsWith(TiebaMsgTab.pathname)) {
          log.info(`Router: 魔改自定义的消息页面`);
          TiebaMsgTab.init();
        } else {
          utils.waitNode<HTMLElement>(".tb-index-navbar .navbar-box li:nth-child(2)", 10000).then(($navbarBox) => {
            if (!$navbarBox) {
              return;
            }
            if ($navbarBox.nextElementSibling && $navbarBox.nextElementSibling.matches(".navbar-item-msgtab")) {
              return;
            }
            DOMUtils.after(
              $navbarBox,
              /*html*/ `
								<li class="navbar-item navbar-item-msgtab" style="margin-right: .24rem;">
									<a href="${TiebaMsgTab.pathname}">消息</a>
								</li>
							`
            );
          });
        }
      });
    } else if (BaiduRouter.isTieBaPost()) {
      /* 帖子 */
      log.success("Router: 帖子");
      // TiebaPost.init();
      TiebaUniAppPost.init();
    } else if (BaiduRouter.isTieBaNewTopic()) {
      /* 话题热议 */
      log.success("Router: 话题热议");
      TiebaTopicTemplate.init();
    } else if (BaiduRouter.isTieBaHottopic()) {
      /* 热搜榜 */
      log.success("Router: 热搜榜");
      TiebaHotTopic.init();
    } else if (BaiduRouter.isTieBaHybrid()) {
      /* 搜索综合 */
      log.success("Router: 搜索综合");
      TiebaHybrid.init();
    } else if (BaiduRouter.isTieBaCollectionCenter()) {
      /* 合辑 */
      log.success("Router: 合辑");
      TiebaCollectionCenter.init();
    } else if (BaiduRouter.isTieBaNei()) {
      /* 吧内 */
      log.success("Router: 吧内");
      TiebaBaNei.init();
    } else if (BaiduRouter.isTieBaHybridUserGrowBase()) {
      log.success(`Router: 评论聚合页`);
      TiebaHybridUsergrowBaseCommentFocus.init();
    } else if (BaiduRouter.isTieBaHome()) {
      /* 主页 */
      log.success("Router: 用户主页");
      TiebaHome.init();
      return;
    } else if (BaiduRouter.isTieBaCheckUrl()) {
      /* 验证链接中间页 */
      log.success(`Router: 验证链接中间页`);
      TiebaCheckUrl.init();
      return;
    } else {
      log.error("Router: 未知");
    }
    // Panel.execMenu("baidu_tieba_add_scroll_top_button_in_forum", () => {
    // 	TiebaCore.addScrollTopButton();
    // });
    Panel.execMenu("baidu_tieba_add_search", () => {
      TiebaSearch.init();
    });
    DOMUtils.ready(() => {
      Panel.execMenu("baidu_tieba_checkSkeleton", () => {
        TiebaCore.checkSkeleton();
      });
      this.initTiebaData();
      this.addTopLeftMenu();
    });
  },
  /**
   * 初始化贴吧数据
   *
   * 例如：吧名，高清图片
   */
  initTiebaData() {
    utils
      .waitAnyNode<HTMLDivElement>([".tb-mobile-viewport", ".main-page-wrap", ".forum-name .name"])
      .then(async () => {
        let interval = setInterval(() => {
          TiebaData.forumName = TiebaCore.getCurrentForumName();
          TiebaData.forumId = TiebaCore.getCurrentForumId();
          if (TiebaData.forumName) {
            log.info("当前吧：" + TiebaData.forumName);
            if (Panel.getValue("baidu_tieba_optimize_image_preview")) {
              TiebaPost.initPostImageInfo();
            }
            clearInterval(interval);
          }
        }, 250);
      });
  },
  /**
   * 替换顶部左侧贴吧按钮为菜单按钮
   */
  addTopLeftMenu() {
    addStyle(/*css*/ `
		.logo-wrapper{
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			margin: 0px 0.13rem;
		}	
		`);
    utils
      .waitAnyNode<HTMLDivElement>(
        [".nav-bar-top .logo-wrapper", "uni-app .frs-wise-nav-bar .logo-wrapper", ".tbm-status .left-area"],
        10000
      )
      .then(($ele) => {
        if (!$ele) {
          return;
        }
        let $parent = DOMUtils.parent($ele);
        $ele.outerHTML = /*html*/ `
				<div class="logo-wrapper">
					<svg t="1718595396255" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3147" width="24" height="24"><path d="M128 298.666667h768a42.666667 42.666667 0 0 0 0-85.333334H128a42.666667 42.666667 0 0 0 0 85.333334z m768 170.666666H128a42.666667 42.666667 0 0 0 0 85.333334h768a42.666667 42.666667 0 0 0 0-85.333334z m0 256H128a42.666667 42.666667 0 0 0 0 85.333334h768a42.666667 42.666667 0 0 0 0-85.333334z" p-id="3148"></path></svg>
				</div>
				`;
        let $logoWrapper = $parent.querySelector<HTMLElement>(".logo-wrapper")!;
        function getHelloText() {
          var myDate = new Date();
          var i = myDate.getHours();
          if (i < 12) return "早上好!";
          else if (i >= 12 && i < 14) return "中午好!";
          else if (i >= 14 && i < 18) return "下午好!";
          else if (i >= 18) return "晚上好!";
        }
        let menuListInfo = [
          {
            "data-to": "home",
            icon: '<svg fill="#3EBBFD" t="1718598127655" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2362"><path d="M459.704448 833.996598" fill="#DA2017" p-id="2363"></path><path d="M947.859367 456.556247 589.952908 156.258856c-21.905916-18.380626-49.721425-28.515451-78.323856-28.52466l-0.044002 0c-28.585035 0-56.395428 10.110265-78.305437 28.467355l-358.517373 300.340369c-12.852726 10.767228-14.544251 29.912263-3.777023 42.764989 6.007831 7.16519 14.616906 10.859325 23.288402 10.859325 6.875594 0 13.793144-2.322905 19.47761-7.082302l18.520819-15.519462 0 325.160661c0 21.898753 8.527211 42.488697 24.01188 57.973366 15.484669 15.482623 36.071543 24.010857 57.974389 24.010857l184.665837 0 0-0.019443c66.174142 0 60.780295-60.693314 60.780295-60.693314L459.704448 629.535927c0-4.14746 1.616824-8.048303 4.552689-10.983145 2.930749-2.934842 6.833639-4.547573 10.985192-4.547573l72.124667 0c4.15053 0 8.04728 1.612731 10.984169 4.547573 2.934842 2.934842 4.551666 6.836709 4.551666 10.983145l0 204.460672-0.010233 0c0 0-5.393847 60.693314 60.780295 60.693314l0 0.019443 184.678116 0c21.895683 0 42.484603-8.528234 57.969273-24.010857 15.488763-15.485693 24.015973-36.074613 24.015973-57.973366L890.336256 487.539912l18.501376 15.527648c12.844539 10.772344 31.993668 9.101285 42.770106-3.746324C962.379059 486.47772 960.702883 467.333708 947.859367 456.556247zM829.619406 812.724109c0 5.681396-2.210341 11.026124-6.226818 15.043624-4.0175 4.0175-9.357112 6.228865-15.040555 6.228865L623.614565 833.996598 623.614565 629.535927c0-20.364817-7.931646-39.513946-22.330588-53.91391-14.400988-14.402011-33.55114-22.334681-53.915957-22.334681l-72.124667 0c-20.369933 0-39.521109 7.93267-53.918004 22.334681-14.397918 14.398942-22.330588 33.54807-22.330588 53.91391l0 204.460672L214.257294 833.996598c-5.683443 0-11.023054-2.211365-15.040555-6.228865-4.022617-4.0175-6.232958-9.362228-6.232958-15.040555l0-376.024096 279.278681-233.966683c11.003612-9.216919 24.966625-14.292518 39.321564-14.292518l0.020466 0c14.359033 0.005117 28.328185 5.094018 39.326681 14.32117l278.688233 233.836723L829.619406 812.724109z" p-id="2364"></path></svg>',
            text: "首页",
            clickCallBack(event: MouseEvent | PointerEvent) {
              window.location.href = window.location.origin;
            },
          },
          {
            "data-to": "posting",
            icon: '<svg fill="#FF9900" t="1718599526156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3362"><path d="M783.530667 910.961778l-252.017778-123.448889a38.001778 38.001778 0 0 1 33.28-68.266667l206.620444 101.319111 89.144889-610.247111-401.635555 481.678222v223.857778a37.944889 37.944889 0 0 1-75.832889 0v-236.316444c0-1.991111 0.113778-3.868444 0.455111-5.859556a38.968889 38.968889 0 0 1 8.533333-20.024889l378.424889-453.859555L163.84 514.389333l143.018667 74.126223c18.773333 9.898667 26.225778 32.824889 17.066666 51.768888a36.864 36.864 0 0 1-49.322666 17.066667L67.754667 549.717333a38.912 38.912 0 0 1-17.692445-18.887111 37.546667 37.546667 0 0 1 15.587556-50.744889L899.185778 47.786667a39.139556 39.139556 0 0 1 17.976889-4.323556 37.831111 37.831111 0 0 1 37.944889 31.004445 39.310222 39.310222 0 0 1-0.682667 18.318222L839.111111 882.062222a38.115556 38.115556 0 0 1-32.142222 32.199111 37.148444 37.148444 0 0 1-23.438222-3.299555z" p-id="3363"></path></svg>',
            text: "发帖",
            clickCallBack(event: MouseEvent | PointerEvent) {
              Qmsg.warning("暂未实现该功能");
            },
          },
          {
            "data-to": "search",
            icon: '<svg fill="#9DCA08" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"></path></svg>',
            text: "搜索",
            clickCallBack(event: MouseEvent | PointerEvent) {
              let userInput = prompt("请输入需要搜索的内容");
              if (userInput) {
                window.location.href = TiebaUrlHandler.getHybridSearch(userInput);
              }
            },
          },
          {
            "data-to": "got-to-forum",
            icon: '<svg fill="#F37D7D" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4247"><path d="M840.937 780.573h-173.721l-140.376 151.009-44.542-151.009c-100.088 0-181.253-82.372-181.253-184.022l-0-76.793c0-101.649 81.165-184.022 181.253-184.022h358.639c100.108 0 181.252 82.373 181.252 184.022v76.792c0 101.65-81.144 184.023-181.252 184.023zM469.343 303.194c-100.089 0-201.581 79.641-201.581 181.271v81.846c0 99.892 28.075 153.273 65.339 178.753l-72.147 77.614-51.45-174.46c-115.657 0-209.404-95.173-209.404-212.587v-90.157c0-117.414 93.747-212.604 209.404-212.604h419.318c99.383 0 182.421 70.374 203.843 164.667-6.4 3.336-13.54 5.677-22.319 5.677l-341.002-0.019z" p-id="4248"></path></svg>',
            text: "进吧",
            clickCallBack(event: MouseEvent | PointerEvent) {
              window.location.href = TiebaUrlHandler.getGoToForum();
            },
          },
          {
            "data-to": "mine",
            icon: '<svg fill="#DA99DB" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4291" width="128" height="128"><path d="M678.4 537.6c76.8-51.2 128-140.8 128-243.2 0-162.133333-132.266667-294.4-294.4-294.4s-294.4 132.266667-294.4 294.4c0 102.4 51.2 192 128 243.2-179.2 68.266667-302.933333 238.933333-302.933333 439.466667 0 25.6 17.066667 42.666667 42.666666 42.666666s42.666667-17.066667 42.666667-42.666666c0-209.066667 174.933333-384 384-384s384 170.666667 384 384c0 25.6 17.066667 42.666667 42.666667 42.666666s42.666667-21.333333 42.666666-42.666666c0-200.533333-128-371.2-302.933333-439.466667z m-375.466667-238.933333c0-115.2 93.866667-209.066667 209.066667-209.066667s209.066667 93.866667 209.066667 209.066667-93.866667 209.066667-209.066667 209.066666-209.066667-93.866667-209.066667-209.066666z" p-id="4292"></path></svg>',
            text: "我的",
            clickCallBack(event: MouseEvent | PointerEvent) {
              window.location.href = TiebaUrlHandler.getMine();
            },
          },
        ];
        if (Panel.getValue("baidu_tieba_index_add_msgtab")) {
          menuListInfo.splice(4, 0, {
            "data-to": "msgtab",
            icon: '<svg t="1735104902045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4127"><path d="M896 806.976v-320A384.32 384.32 0 0 0 544.128 104.64V5.056h-64v99.52A384.32 384.32 0 0 0 128 487.008v320H16v64h322.464a175.744 175.744 0 0 0 347.072 0H1008v-64z m-384 147.968a111.904 111.904 0 0 1-108-83.968h216A111.904 111.904 0 0 1 512 954.944zM192 806.976v-320a320 320 0 0 1 640 0v320z" fill="#191D2B" p-id="4128"></path><path d="M436.576 244.8a257.984 257.984 0 0 0-149.248 124.864 32 32 0 0 0 56.64 29.824 193.408 193.408 0 0 1 111.872-93.664 32 32 0 0 0-19.264-61.024z" fill="#191D2B" p-id="4129"></path></svg>',
            text: "消息",
            clickCallBack(event: MouseEvent | PointerEvent) {
              window.location.href = TiebaMsgTab.pathname;
            },
          });
        }
        DOMUtils.on(
          $logoWrapper!,
          "click",
          (evt) => {
            utils.preventEvent(evt);
            let $drawer = pops.drawer({
              title: {
                enable: true,
                text: /*html*/ `
							<div class="tieba_account_exit">
								<a href="javascript:;">
									<span>
										退出登录
									</span>
								</a>
							</div>
							<a href="javascript:;" class="tieba_user">
								<em>
									<img class="tieba_account_avatar" src="">
								</em>
								<p class="tieba-user-info">
									<span class="tieba_user_nologin_tip_center">
									${getHelloText()} 请登录或注册
									</span>
								</p>
                                <p class="tieba_user_nologin_tip_bottom">登录后更精彩...</p>
                            </a>
							`,
                html: true,
                style: "",
              },
              content: {
                text: '<ul class="tieba-menu-list"></ul>',
                html: true,
                style: "",
              },
              btn: {
                ok: {
                  enable: false,
                },
                cancel: {
                  enable: false,
                },
                close: {
                  enable: false,
                },
              },
              only: true,
              size: "66%",
              direction: "left",
              mask: {
                enable: true,
                clickEvent: {
                  toClose: true,
                },
              },
              style: /*css*/ `
						.pops{
							--avatar-size: 60px;
							--user-info-font-color: #ffffff;
							--container-title-height: auto;
						}
						.pops-drawer-title{
							background: url(https://imgapi.xl0408.top/index.php);
							// background-size: cover;
							background-size: 100% 100%;
							background-position: center;
							background-repeat: no-repeat;
						}
						.tieba_account_exit{
							display: none;
						}
						.tieba_user{
							position: relative;
							display: block;
							padding: 18px 15px 12px;
							overflow: hidden;
							width: 100%;
							height: 175px;
							text-decoration: none;
						}
						.tieba_user em{
							display: block;
							width: 64px;
							height: 64px;
							margin-bottom: 23px;
							background: rgba(255, 255, 255, 0.4);
							border-radius: 50%;
							position: relative;
						}
						.tieba_account_avatar{
							width: var(--avatar-size);
							height: var(--avatar-size);
							margin: 2px;
							border-radius: 50%;
						}
						.tieba_user_nologin_tip_center{
							font-size: 20px;
							float: left;
							font-weight: 400;
							margin-right: 6px;
							text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
							color: var(--user-info-font-color);
						}
						.tieba_user_nologin_tip_bottom{
							display: block;
							width: 100%;
							height: 24px;
							line-height: 24px;
							overflow: hidden;
							color: var(--user-info-font-color);
							text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
							font-size: 13px;
							margin-top: 5px;
						}


						.pops-drawer-content{
							padding: 10px;
						}
						.tieba-menu-list{
						
						}
						.tieba-menu-item{
							display: flex;
							align-items: center;
							height: 38px;
    						line-height: 38px;
							font-size: 17px;
							margin: 3px 0px;
						}
						.tieba-menu-item:first-child{
							margin-top: 0px;
						}
						.tieba-menu-icon{
							display: flex;
    						align-items: center;
							font-size: 22px;
    						margin-right: 8px;
						}
						.tieba-menu-icon svg{
							width: 20px;
							height: 20px;
						}
						.teba-menu-text{
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						`,
            });
            let isLogin = false;
            let $tieba_user = $drawer.$shadowRoot.querySelector<HTMLDivElement>(".tieba_user");
            let $menuList = $drawer.$shadowRoot.querySelector<HTMLDivElement>(".tieba-menu-list")!;
            let $avatar = $drawer.$shadowRoot.querySelector<HTMLImageElement>(".tieba_account_avatar")!;
            let $userInfo = $drawer.$shadowRoot.querySelector<HTMLDivElement>(".tieba-user-info")!;
            let $tieba_user_nologin_tip_center = $drawer.$shadowRoot.querySelector<HTMLDivElement>(
              ".tieba_user_nologin_tip_center"
            )!;
            let $tieba_user_nologin_tip_bottom = $drawer.$shadowRoot.querySelector<HTMLDivElement>(
              ".tieba_user_nologin_tip_bottom"
            )!;

            menuListInfo.forEach((menuItemInfo) => {
              let $menuItem = document.createElement("li");
              $menuItem.classList.add("tieba-menu-item");
              $menuItem.setAttribute("data-to", menuItemInfo["data-to"]);
              $menuItem.innerHTML = `
						<i class="tieba-menu-icon">
							${menuItemInfo.icon}
						</i>
						<p class="teba-menu-text">${menuItemInfo.text}</p>
						`;
              DOMUtils.on($menuItem, "click", (event) => {
                menuItemInfo.clickCallBack(event);
              });
              $menuList.appendChild($menuItem);
            });

            // 填充当前已登录的用户的信息
            TiebaSmallAppApi.userInfo(false).then((userInfo) => {
              if (!userInfo) {
                return;
              }
              $avatar.src = TiebaUrlHandler.getUserAvatar("null");
              if (typeof userInfo.user?.is_login === "boolean" && !userInfo.user?.is_login) {
                // 未登录
              } else {
                isLogin = true;
                // 已登录
                let showName =
                  userInfo.user.show_nickname ||
                  userInfo.user.name_show ||
                  userInfo.user.user_nickname ||
                  userInfo.user.user_name;
                let portrait = userInfo.user.portrait;
                $avatar.src = TiebaUrlHandler.getUserAvatar(portrait);
                $tieba_user_nologin_tip_center.innerText = showName;
                DOMUtils.hide($tieba_user_nologin_tip_bottom);
              }
            });

            DOMUtils.on($tieba_user, "click", () => {
              if (isLogin) {
                return;
              }
              window.open(TiebaUrlHandler.getLoginUrl(), "_blank");
            });
          },
          { capture: true }
        );
      });
  },
};
