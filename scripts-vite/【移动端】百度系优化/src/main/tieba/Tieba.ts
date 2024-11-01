import { DOMUtils, addStyle, log, pops, utils } from "@/env";
import TieBaShieldCSS from "./shield.css?raw";
import UniTieBaShieldCSS from "./uni-app-shield.css?raw";
import { PopsPanel } from "@/setting/setting";
import { BaiduRouter } from "@/router/BaiduRouter";
import { BaiduHook } from "@/hook/BaiduHook";
import { TiebaTopic } from "./Topic/TiebaTopic";
import { TiebaHybrid } from "./Hybrid/TiebaHybrid";
import { TiebaBaNei } from "./BaNei/TiebaBaNei";
import { TiebaSearch } from "./TiebaSearch";
import { TiebaData } from "./Home/data";
import { TiebaCore } from "./TiebaCore";
import { TiebaPost } from "./Post/TiebaPost";
import { TiebaHome } from "./Home/TiebaHome";
import { TiebaUrlApi } from "./api/TiebaApi";
import Qmsg from "qmsg";
import { VueUtils } from "@/utils/VueUtils";
import { TiebaUniAppPost } from "./uni-app-post/TiebaUniAppPost";
import { TiebaCheckUrl } from "./CheckUrl/TiebaCheckUrl";

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
const BaiduTieBa = {
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
		PopsPanel.execMenu(
			"baidu_tieba_clickOnTheOwnerSAvatarToCorrectlyRedirectToTheHomepage",
			() => {
				TiebaCore.addAuthorClickEvent();
			}
		);
		PopsPanel.execMenu("baidu_tieba_autoJumpToMainHost", () => {
			TiebaCore.autoJumpToMainHost();
		});
		PopsPanel.execMenu("baidu_tieba_clientCallMasquerade", () => {
			TiebaCore.clientCallMasquerade();
		});
		BaiduHook.elementAppendChild();
		PopsPanel.execMenuOnce("baidu_tieba_hijack_wake_up", () => {
			BaiduHook.windowWebpackJsonp_tieba();
		});
		if (BaiduRouter.isTieBaIndex()) {
			/* 首页 */
			log.success("Router: 首页");
			PopsPanel.execMenu("baidu_tieba_index_openANewTab", () => {
				TiebaBaNei.openANewTab();
			});
		} else if (BaiduRouter.isTieBaPost()) {
			/* 帖子 */
			log.success("Router: 帖子");
			// TiebaPost.init();
			TiebaUniAppPost.init();
		} else if (BaiduRouter.isTieBaNewTopic()) {
			/* 话题热议 */
			log.success("Router: 话题热议");
			TiebaTopic.init();
		} else if (BaiduRouter.isTieBaHybrid()) {
			/* 搜索综合 */
			log.success("Router: 搜索综合");
			TiebaHybrid.init();
		} else if (BaiduRouter.isTieBaNei()) {
			/* 吧内 */
			log.success("Router: 吧内");
			TiebaBaNei.init();
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
		PopsPanel.execMenu("baidu_tieba_add_scroll_top_button_in_forum", () => {
			TiebaCore.addScrollTopButton();
		});
		PopsPanel.execMenu("baidu_tieba_add_search", () => {
			TiebaSearch.init();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenu("baidu_tieba_checkSkeleton", () => {
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
			.waitAnyNode<HTMLDivElement>([".tb-mobile-viewport", ".main-page-wrap"])
			.then(async () => {
				let interval = setInterval(() => {
					TiebaData.forumName = TiebaCore.getCurrentForumName();
					TiebaData.forumId = TiebaCore.getCurrentForumId();
					if (TiebaData.forumName) {
						log.info("当前吧：" + TiebaData.forumName);
						if (PopsPanel.getValue("baidu_tieba_optimize_image_preview")) {
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
			margin-left: 0.13rem;
		}	
		`);
		utils
			.waitNode<HTMLDivElement>(".nav-bar-top .logo-wrapper", 10000)
			.then(($ele) => {
				if (!$ele) {
					return;
				}
				$ele.outerHTML = /*html*/ `
				<div class="logo-wrapper">
					<svg t="1718595396255" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3147" width="24" height="24"><path d="M128 298.666667h768a42.666667 42.666667 0 0 0 0-85.333334H128a42.666667 42.666667 0 0 0 0 85.333334z m768 170.666666H128a42.666667 42.666667 0 0 0 0 85.333334h768a42.666667 42.666667 0 0 0 0-85.333334z m0 256H128a42.666667 42.666667 0 0 0 0 85.333334h768a42.666667 42.666667 0 0 0 0-85.333334z" p-id="3148"></path></svg>
				</div>
				`;
				let $logoWrapper = document.querySelector<HTMLDivElement>(
					".nav-bar-top .logo-wrapper"
				);
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
							if (BaiduRouter.isTieBaPost() || BaiduRouter.isTieBaNei()) {
								// let fname = TiebaData.forumName!;
								// let fid = TiebaData.forumId!;
								// let tbs = "";
								// TiebaUrlApi.getPostPage(fname, fid, tbs);
								let $mobileViewport = document.querySelector<HTMLDivElement>(
									".tb-mobile-viewport"
								);
								if ($mobileViewport) {
									let vueObj = VueUtils.getVue($mobileViewport);
									if (vueObj) {
										let goPost = vueObj?.goPost || vueObj?.$parent?.goPost;
										if (typeof goPost === "function") {
											goPost();
											return;
										}
									}
								}

								let $appView =
									document.querySelector<HTMLDivElement>(".app-view");
								if ($appView) {
									let appViewVueObj = VueUtils.getVue($appView);
									if (
										appViewVueObj &&
										typeof appViewVueObj.gotoPostPage === "function"
									) {
										appViewVueObj.gotoPostPage();
										return;
									}
								}
								log.error("未找到发帖函数");
								Qmsg.error("未找到发帖函数");
							} else {
								log.error("请在吧内|帖子内使用");
								Qmsg.error("请在吧内|帖子内使用");
							}
						},
					},
					{
						"data-to": "search",
						icon: '<svg fill="#9DCA08" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"></path></svg>',
						text: "搜索",
						clickCallBack(event: MouseEvent | PointerEvent) {
							let userInput = prompt("请输入需要搜索的内容");
							if (userInput) {
								window.location.href = TiebaUrlApi.getHybridSearch(userInput);
							}
						},
					},
					{
						"data-to": "got-to-forum",
						icon: '<svg fill="#F37D7D" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4247"><path d="M840.937 780.573h-173.721l-140.376 151.009-44.542-151.009c-100.088 0-181.253-82.372-181.253-184.022l-0-76.793c0-101.649 81.165-184.022 181.253-184.022h358.639c100.108 0 181.252 82.373 181.252 184.022v76.792c0 101.65-81.144 184.023-181.252 184.023zM469.343 303.194c-100.089 0-201.581 79.641-201.581 181.271v81.846c0 99.892 28.075 153.273 65.339 178.753l-72.147 77.614-51.45-174.46c-115.657 0-209.404-95.173-209.404-212.587v-90.157c0-117.414 93.747-212.604 209.404-212.604h419.318c99.383 0 182.421 70.374 203.843 164.667-6.4 3.336-13.54 5.677-22.319 5.677l-341.002-0.019z" p-id="4248"></path></svg>',
						text: "进吧",
						clickCallBack(event: MouseEvent | PointerEvent) {
							window.location.href = TiebaUrlApi.getGoToForum();
						},
					},
					{
						"data-to": "mine",
						icon: '<svg fill="#DA99DB" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4291" width="128" height="128"><path d="M678.4 537.6c76.8-51.2 128-140.8 128-243.2 0-162.133333-132.266667-294.4-294.4-294.4s-294.4 132.266667-294.4 294.4c0 102.4 51.2 192 128 243.2-179.2 68.266667-302.933333 238.933333-302.933333 439.466667 0 25.6 17.066667 42.666667 42.666666 42.666666s42.666667-17.066667 42.666667-42.666666c0-209.066667 174.933333-384 384-384s384 170.666667 384 384c0 25.6 17.066667 42.666667 42.666667 42.666666s42.666667-21.333333 42.666666-42.666666c0-200.533333-128-371.2-302.933333-439.466667z m-375.466667-238.933333c0-115.2 93.866667-209.066667 209.066667-209.066667s209.066667 93.866667 209.066667 209.066667-93.866667 209.066667-209.066667 209.066666-209.066667-93.866667-209.066667-209.066666z" p-id="4292"></path></svg>',
						text: "我的",
						clickCallBack(event: MouseEvent | PointerEvent) {
							window.location.href = TiebaUrlApi.getMine();
						},
					},
				];
				DOMUtils.on($logoWrapper, "click", () => {
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
						}
						.pops-drawer-title{
							background: url(https://api.chongss.com/pc.php?category=bing);
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
					let $tieba_user =
						$drawer.$shadowRoot.querySelector<HTMLDivElement>(".tieba_user");
					let $menuList =
						$drawer.$shadowRoot.querySelector<HTMLDivElement>(
							".tieba-menu-list"
						)!;
					let $avatar = $drawer.$shadowRoot.querySelector<HTMLImageElement>(
						".tieba_account_avatar"
					)!;
					let $userInfo =
						$drawer.$shadowRoot.querySelector<HTMLDivElement>(
							".tieba-user-info"
						)!;
					let $tieba_user_nologin_tip_center =
						$drawer.$shadowRoot.querySelector<HTMLDivElement>(
							".tieba_user_nologin_tip_center"
						)!;
					let $tieba_user_nologin_tip_bottom =
						$drawer.$shadowRoot.querySelector<HTMLDivElement>(
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
					$avatar.src = TiebaUrlApi.getUserAvatar("null");
					let $ele =
						document.querySelector<HTMLDivElement>(".app-view") ||
						document.querySelector<HTMLDivElement>(".tb-mobile-viewport");
					if ($ele) {
						let eleVueObj = VueUtils.getVue($ele);
						if (eleVueObj) {
							if (eleVueObj?.user?.is_login) {
								isLogin = true;
								// 已登录
								let portrait = eleVueObj.user.portrait;
								let showName =
									eleVueObj.user.show_nickname ||
									eleVueObj.user.name_show ||
									eleVueObj.user.name;
								$avatar.src = TiebaUrlApi.getUserAvatar(portrait);
								$tieba_user_nologin_tip_center.innerText = showName;
								DOMUtils.hide($tieba_user_nologin_tip_bottom);
							} else if (eleVueObj?.$store?.state?.common?.isLogin) {
								// 在首页的时候
								isLogin = true;
								DOMUtils.hide($tieba_user_nologin_tip_bottom);
								$tieba_user_nologin_tip_center.innerText = "未知";
								$avatar.src = TiebaUrlApi.getUserAvatar(
									eleVueObj?.$store?.state?.common?.portrait
								);
							}
						}
					}

					DOMUtils.on($tieba_user, "click", () => {
						if (isLogin) {
							return;
						}
						window.open(TiebaUrlApi.getLoginUrl(), "_blank");
					});
				});
			});
	},
};

export { BaiduTieBa };
