import { DOMUtils, log, pops, utils } from "@/env";
import { ElementUtils } from "@/utils/ElementUtils";
import smallWindowCSS from "./css/small-window.css?raw";
import Qmsg from "qmsg";
import Viewer from "viewerjs";
import { GestureBack } from "@/utils/GestureBack";
import { unsafeWindow } from "ViteGM";

const MTSmallWindowIcon = {
	/** 锁图标 */
	https: /*html*/ `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" style="margin: 0px 6px 0px 2px;">
			<path fill="#000000" d="M842.666667 384h-74.666667V277.333333a234.666667 234.666667 0 1 0-469.333333 0v106.666667H224a53.393333 53.393333 0 0 0-53.333333 53.333333v490.666667a53.393333 53.393333 0 0 0 53.333333 53.333333h618.666667a53.393333 53.393333 0 0 0 53.333333-53.333333V437.333333a53.393333 53.393333 0 0 0-53.333333-53.333333zM341.333333 277.333333c0-105.866667 86.133333-192 192-192s192 86.133333 192 192v106.666667H341.333333z"></path>
		</svg>`,
	/** 开锁图标 */
	http: /*html*/ `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
		<path fill="#2c2c2c" d="M770.423989 451.309956H368.89432V284.246158c0-80.739434 65.689748-146.429182 146.429182-146.429182S661.738235 203.506724 661.738235 284.246158a43.350032 43.350032 0 0 0 86.700063 0c0-128.547294-104.581952-233.129246-233.122021-233.129246-128.547294 0-233.129246 104.581952-233.129245 233.129246v167.063798h-21.978466a43.350032 43.350032 0 0 0-43.350032 43.350031v437.965371a43.350032 43.350032 0 0 0 43.350032 43.350032h510.215423a43.350032 43.350032 0 0 0 43.350032-43.350032V494.659987a43.350032 43.350032 0 0 0-43.350032-43.350031z"></path>
		</svg>`,
	/** 新标签页打开 */
	openBlank: /*html*/ `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M192 288A96 96 0 0 1 288 192h128a32 32 0 0 0 0-64h-128A160 160 0 0 0 128 288v448A160 160 0 0 0 288 896h448a160 160 0 0 0 160-160v-128a32 32 0 0 0-64 0v128a96 96 0 0 1-96 96h-448A96 96 0 0 1 192 736v-448z" fill="#000000" fill-opacity=".85"></path>
			<path d="M608 128a32 32 0 0 0 0 64h178.752L521.344 457.344a32 32 0 1 0 45.312 45.312L832 237.248V416a32 32 0 0 0 64 0v-256a32 32 0 0 0-32-32h-256z" fill="#000000" fill-opacity=".85" p-id="2334"></path>
		</svg>`,
	/** 关闭 */
	close: /*html*/ `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 0h1024v1024H0z" fill="#FF0033" fill-opacity="0" p-id="3329"></path><path d="M240.448 168l2.346667 2.154667 289.92 289.941333 279.253333-279.253333a42.666667 42.666667 0 0 1 62.506667 58.026666l-2.133334 2.346667-279.296 279.210667 279.274667 279.253333a42.666667 42.666667 0 0 1-58.005333 62.528l-2.346667-2.176-279.253333-279.253333-289.92 289.962666a42.666667 42.666667 0 0 1-62.506667-58.005333l2.154667-2.346667 289.941333-289.962666-289.92-289.92a42.666667 42.666667 0 0 1 57.984-62.506667z" fill="#111111" p-id="3330"></path>
		</svg>`,
	/** 图片预览 */
	image: /*html*/ `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<path d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z" fill="#000000"></path>
		</svg>`,
	/** 坐标的网站图标 */
	mt: /*html*/ `
		<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
			<path d="M979.622067 257.689317c22.828607 10.592474 32.873194 37.804173 22.280721 60.63278l-166.009631 359.778848c-10.592474 22.828607-37.804173 32.873194-60.63278 22.280721l-292.3888-134.780097c-22.828607-10.592474-32.873194-37.804173-22.280721-60.63278l166.009631-359.778848c10.592474-22.828607 37.804173-32.873194 60.632781-22.28072l292.388799 134.780096z" fill="#FFBA02" p-id="1715"></path><path d="M658.743166 46.205101v467.529873c0 25.202782-20.637061 45.657214-45.657214 45.657214H145.556078c-25.202782 0-45.657214-20.637061-45.657214-45.657214v-467.529873c0-25.202782 20.637061-45.657214 45.657214-45.657214h467.529874c25.202782 0 45.657214 20.454432 45.657214 45.657214z" fill="#E2E0E2" p-id="1716"></path><path d="M204.910457 236.50437a177.149991 175.871589 0 1 0 354.299982 0 177.149991 175.871589 0 1 0-354.299982 0Z" fill="#3D82FF" p-id="1717"></path><path d="M245.636692 42.369895a9.861958 9.679329 0 1 0 19.723916 0 9.861958 9.679329 0 1 0-19.723916 0Z" fill="#3D82FF" p-id="1718"></path><path d="M501.864978 43.10041a10.409845 10.409845 0 1 0 20.81969 0 10.409845 10.409845 0 1 0-20.81969 0Z" fill="#3D82FF" p-id="1719"></path><path d="M454.774127 104.071054l48.495267-66.347237 16.807334 12.285443-48.495267 66.347237zM248.102182 48.730858l15.77548-11.220717 50.279551 70.691978-15.775481 11.21889zM204.910457 231.390762h354.299982v193.586588h-354.299982z" fill="#3D82FF" p-id="1720"></path><path d="M280.701432 171.853754a26.115927 25.202782 0 1 0 52.231854 0 26.115927 25.202782 0 1 0-52.231854 0Z" fill="#FFFFFF" p-id="1721"></path><path d="M434.109672 171.671125a25.385411 25.202782 0 1 0 50.770822 0 25.385411 25.202782 0 1 0-50.770822 0Z" fill="#FFFFFF" p-id="1722"></path><path d="M394.844468 1023.817371H50.589073c-25.202782 0-45.657214-20.637061-45.657214-45.657214v-686.684502c0-25.202782 20.637061-45.657214 45.657214-45.657214h344.255395c25.202782 0 45.657214 20.637061 45.657214 45.657214v686.684502c0 25.202782-20.454432 45.657214-45.657214 45.657214z" fill="#303030" p-id="1723"></path><path d="M973.230057 342.976993H50.589073c-25.202782 0-45.657214 20.637061-45.657214 45.657214v589.708579c0 25.202782 20.637061 45.657214 45.657214 45.657214h922.640984c25.202782 0 45.657214-20.637061 45.657215-45.657214V388.634207c0-25.202782-20.637061-45.657214-45.657215-45.657214z" fill="#303030" p-id="1724"></path><path d="M392.287664 488.89745L295.311741 394.843588c-18.080257-17.53237-18.445515-46.570358-1.095773-64.650615l68.303192-70.677368c17.53237-18.080257 46.570358-18.445515 64.650616-1.095773l97.158551 94.053862c18.080257 17.53237 18.445515 46.570358 1.095774 64.650615l-68.303193 70.677367c-17.714999 18.080257-46.752987 18.628143-64.833244 1.095774z" fill="#303030" p-id="1725"></path><path d="M266.273753 628.060638v-13.331906l-54.240771-77.434635v316.495808c0 7.305154-2.556804 13.514535-7.670412 18.628144-5.113608 5.113608-11.322989 7.670412-18.628143 7.670412-7.305154 0-13.514535-2.556804-18.628143-7.853041-5.113608-5.113608-7.670412-11.322989-7.670412-18.445515V465.155698h67.755305l64.467987 94.053861 66.476904-94.053861H424.978229v388.634207c0 7.305154-2.739433 13.514535-8.035669 18.628144-5.296237 5.113608-11.688247 7.670412-18.810773 7.670412-7.122525 0-13.149278-2.556804-18.445514-7.853041-5.113608-5.113608-7.853041-11.322989-7.853041-18.445515V538.572499l-53.144997 74.877831v14.610308c0 7.122525-2.556804 13.149278-7.853041 18.445515-5.113608 5.113608-11.322989 7.853041-18.445515 7.853041-7.305154 0-13.514535-2.556804-18.628143-7.853041-4.930979-5.296237-7.487783-11.322989-7.487783-18.445515z" fill="#FFFFFF" p-id="1726"></path><path d="M600.301932 536.563581V465.703585h264.811842v71.407883c0 7.305154-2.556804 13.514535-7.853041 18.628143-5.113608 5.113608-11.322989 7.670412-18.445514 7.670412-7.305154 0-13.514535-2.556804-18.810772-7.853041-5.296237-5.113608-8.03567-11.322989-8.03567-18.445514v-18.993401h-53.144997v335.48921c0 7.305154-2.556804 13.514535-7.853041 18.628143-5.113608 5.113608-11.322989 7.670412-18.445515 7.670412-7.487783 0-13.879793-2.556804-18.993401-7.670412-5.113608-5.113608-7.853041-11.322989-7.853041-18.628143V518.300696h-53.144997v18.445514c0 7.305154-2.556804 13.514535-7.670412 18.628143-5.113608 5.113608-11.322989 7.670412-18.628143 7.670412-7.305154 0-13.514535-2.556804-18.628144-7.670412-4.74835-5.296237-7.305154-11.505618-7.305154-18.810772z" fill="#FFFFFF"></path>
		</svg>`,
};

export const MTSmallWindow = {
	$key: {
		smallWindow: "smallWindow",
	},
	$el: {
		$refreshIcon: null as any as HTMLElement,
		$webSiteIcon: null as any as HTMLElement,
	},
	init() {
		let lockFn = new utils.LockFunction(() => {
			let forumlist = this.getForumList();
			if (forumlist.length) {
				this.handleForumPost(forumlist);
			}
		});
		let mutation = utils.mutationObserver(document.documentElement, {
			callback: (mutations, observer) => {
				lockFn.run();
			},
			config: { subtree: true, childList: true },
		});
	},
	/**
	 * 获取页面所有的帖子
	 */
	getForumList() {
		return utils.getNodeListValue(
			ElementUtils.comiisForumList(),
			ElementUtils.comiisPostli(),
			ElementUtils.comiisMmlist()
		);
	},
	/**
	 * 显示小窗
	 * @param title 标题
	 * @param url 链接
	 * @param imagesList 图片
	 */
	showSmallWindow(title: string, url: string, imagesList: string[] = []) {
		let constructURL = new URL(url);
		let isHTTPS = constructURL.protocol.includes("https:");
		let websiteTitle = /*html*/ `
        <div class="small-window-drag">
            <!-- 这里是拖拽区域 -->
            <div></div>
        </div>
        <div class="small-window-title-container">
            <i class="small-window-website-icon" style="display: none;">
                ${MTSmallWindowIcon.mt}
            </i>
            <div class="refresh-icon">
                <div class="refresh-icon-out"></div>
                <div class="refresh-icon-in"></div>
            </div>
            <div class="small-window-title-text-container">
                <p class="small-window-title-text">${title}</p>
                <div class="small-window-protocol-info">
                    <i class="small-window-protocol-icon">
                        ${
													isHTTPS
														? MTSmallWindowIcon.https
														: MTSmallWindowIcon.http
												}
                    </i>
                    <p class="small-window-website-host">${
											constructURL.host
										}</p>
                </div>
            </div>
            <div class="small-window-control">
                ${
									imagesList.length
										? /*html*/ `
                    <i class="small-window-control-image-view">
                        ${MTSmallWindowIcon.image}
                    </i>
                    `
										: ""
								}
                <i class="small-window-control-open-blank">
                    ${MTSmallWindowIcon.openBlank}
                </i>
                <i class="small-window-control-close">
                    ${MTSmallWindowIcon.close}
                </i>
            </div>
        </div>`;

		let $drawer = pops.drawer({
			title: {
				enable: true,
				text: websiteTitle,
				html: true,
				style: "height: auto;line-height: normal;",
			},
			content: {
				text: /*html*/ `
                <iframe scrolling="auto" allowtransparency="true" frameborder="0" src="${url}" style="width:100%; height:100%;">
                </iframe>
                `,
				html: true,
			},
			mask: {
				enable: true,
				clickEvent: {
					toClose: true,
				},
				clickCallBack(originalRun, config) {
					getureBack.quitGestureBackMode();
				},
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
			direction: "bottom",
			size: "92%",
			borderRadius: 18,
			style: smallWindowCSS,
		});
		let $webSiteIcon = $drawer.$shadowRoot.querySelector<HTMLElement>(
			".small-window-website-icon"
		)!;
		let $refreshIcon =
			$drawer.$shadowRoot.querySelector<HTMLElement>(".refresh-icon")!;

		let $imageIcon = $drawer.$shadowRoot.querySelector<HTMLElement>(
			".small-window-control-image-view"
		)!;
		let $openBlankIcon = $drawer.$shadowRoot.querySelector<HTMLElement>(
			".small-window-control-open-blank"
		)!;
		let $closeIcon = $drawer.$shadowRoot.querySelector<HTMLElement>(
			".small-window-control-close"
		)!;

		let $titleText = $drawer.$shadowRoot.querySelector<HTMLElement>(
			".small-window-title-text"
		)!;

		this.$el.$refreshIcon = $refreshIcon;
		this.$el.$webSiteIcon = $webSiteIcon;
		let $iframe =
			$drawer.$shadowRoot.querySelector<HTMLIFrameElement>("iframe")!;

		let $drag =
			$drawer.$shadowRoot.querySelector<HTMLElement>(".small-window-drag")!;
		let AnyTouch = pops.config.Utils.AnyTouch();
		let dragNode = new AnyTouch($drag);
		let smallWidowNode = $drawer.popsElement;
		/* 小窗原始高度 */
		let smallWidowNormalHeight = DOMUtils.height(smallWidowNode);
		dragNode.on("pan", (event) => {
			if (event.phase == "move" && event.displacementY > 0) {
				/* 当前为向下移动 */
				smallWidowNode.style["transition"] = "none";
				smallWidowNode.style["height"] =
					Math.abs(smallWidowNormalHeight - event.distanceY) + "px";
			}
			if (event.isEnd) {
				/* 当前为停止移动，松开手指，判断在哪个区域，一半以上回归上面，一般以下，关闭 */
				smallWidowNode.style["transition"] = "0.2s ease-in";
				if (parseInt(smallWidowNode.style["height"]) > window.innerHeight / 2) {
					smallWidowNode.style["height"] = smallWidowNormalHeight + "px";
				} else {
					// 关闭
					$drawer.close();
				}
			}
		});
		let getureBack = new GestureBack({
			hash: this.$key.smallWindow,
			useUrl: true,
			win: unsafeWindow,
			beforeHistoryBackCallBack: (isUrlChange) => {
				$drawer.close();
			},
		});

		getureBack.enterGestureBackMode();
		DOMUtils.on($titleText, "click", (event) => {
			utils.preventEvent(event);
			utils.setClip(`『${title}』 - ${url}`);
			Qmsg.success("已复制链接");
		});

		DOMUtils.on($imageIcon, "click", (event) => {
			utils.preventEvent(event);
			log.info(`查看图片`, imagesList);
			var viewerULNodeHTML = "";
			imagesList.forEach((item) => {
				viewerULNodeHTML += `<li><img data-src="${item}"></li>`;
			});
			var viewerULNode = DOMUtils.parseHTML(
				`<ul>${viewerULNodeHTML}</ul>`,
				false,
				false
			);
			let viewer = new Viewer(viewerULNode, {
				inline: false,
				url: "data-src",
				zIndex: (() => {
					let maxZIndex = utils.getMaxZIndex();
					let popsMaxZIndex =
						pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
					return utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
				})(),
				hidden: () => {
					viewer.destroy();
				},
			});
			viewer.zoomTo(1);
			viewer.show();
		});

		DOMUtils.on($closeIcon, "click", (event) => {
			utils.preventEvent(event);
			getureBack.quitGestureBackMode();
		});

		DOMUtils.on($openBlankIcon, "click", (event) => {
			utils.preventEvent(event);
			window.open(url, "_blank");
		});

		DOMUtils.on($webSiteIcon, "click", (event) => {
			utils.preventEvent(event);
			$iframe.contentWindow!.location.reload();
			this.checkIframeReadyState($iframe);
		});

		this.checkIframeReadyState($iframe);
	},
	/**
	 * 对帖子进行处理，实现点击某个区域打开小窗
	 * @param forumlist
	 */
	async handleForumPost(forumlist: HTMLElement[]) {
		forumlist.forEach(($forum) => {
			if ($forum.getAttribute("data-injection-small-window")) {
				return;
			}
			/* 帖子标题 */
			let title = DOMUtils.text(
				$forum.querySelector<HTMLAnchorElement>(".mmlist_li_box h2 a")!
			);
			// 防止获取的标题是空的
			if (title == "" || title == null) {
				title = DOMUtils.text(
					$forum.querySelector<HTMLAnchorElement>(".mmlist_li_box a")!
				);
			}
			title = title.trim();
			/* 帖子地址 */
			let url =
				$forum.querySelector<HTMLAnchorElement>(".mmlist_li_box a")!.href;
			/* 帖子内图片列表 */
			var imagesList: string[] = [];
			$forum.setAttribute("data-injection-small-window", "true");
			$forum.setAttribute("data-injection-small-window-url", url);
			$forum.setAttribute("data-injection-small-window-title", title);
			$forum
				.querySelectorAll<HTMLImageElement>(".comiis_pyqlist_img img")
				.forEach(($img) => {
					imagesList.push($img.getAttribute("src")!);
				});
			$forum
				.querySelectorAll<HTMLImageElement>(".comiis_pyqlist_imgs img")
				.forEach(($img) => {
					imagesList.push($img.getAttribute("src")!);
				});
			$forum
				.querySelectorAll<HTMLAnchorElement>(".mmlist_li_box a")
				.forEach(($anchor) => {
					$anchor.removeAttribute("href");
					$anchor.setAttribute("data-href", url);
				});
			let $mmlist_li_box =
				$forum.querySelector<HTMLDivElement>(".mmlist_li_box");
			DOMUtils.on($mmlist_li_box, "click", function (event) {
				/* 鼠标相对屏幕横坐标 */
				var mouseClickPosX = Number(event.clientX);
				if (document.body.offsetWidth / 2 > mouseClickPosX) {
					window.location.href = url;
				} else {
					MTSmallWindow.showSmallWindow(title, url, imagesList);
				}
			});
		});
	},
	/**
	 * 检测 iframe是否加载完毕
	 * @param iframe
	 */
	checkIframeReadyState(iframe: HTMLIFrameElement) {
		this.showRefreshIcon();
		let intervalId = setInterval(() => {
			if (iframe.contentWindow) {
				clearInterval(intervalId);
				let iframeDOMUtils = DOMUtils.createDOMUtils({
					document: iframe.contentWindow!.document,
					// @ts-ignore
					window: iframe.contentWindow!,
					globalThis: iframe.contentWindow!,
					// @ts-ignore
					self: iframe.contentWindow!,
					top: top!,
				});
				iframeDOMUtils.ready(() => {
					log.success("小窗内容已加载完毕");
					this.hideRefreshIcon();
				});
			}
		}, 400);
	},
	hideRefreshIcon() {
		this.$el.$refreshIcon.style.display = "none";
		this.$el.$webSiteIcon.style.display = "";
	},
	showRefreshIcon() {
		this.$el.$refreshIcon.style.display = "";
		this.$el.$webSiteIcon.style.display = "none";
	},
};
