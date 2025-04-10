import { DOMUtils, GM_Menu, log, pops, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import { CookieManager, type CookieManagerApiName } from "./CookieManager";
import { PopsPanel } from "@/setting/panel";
import { PanelUISize } from "@/setting/panel-ui-size";
import Qmsg from "qmsg";
import { UISwitch } from "@/setting/components/ui-switch";
import { CookieManagerEditView } from "./CookieManagerEditView";
import { UISelect } from "@/setting/components/ui-select";
import { CookieRule } from "./CookieRule";

export const CookieManagerView = {
	init() {
		this.registerMenu();
	},
	/**
	 * 显示视图
	 */
	async showView() {
		const $alert = pops.alert({
			title: {
				text: "Cookie编辑器",
				html: false,
				position: "center",
			},
			content: {
				text: /*html*/ `
                    <div class="cookie-wrapper">
                        <div class="cookie-search-wrapper">
                            <div class="cookie-search-inner">
                                <input type="text" placeholder="搜索Cookie名称">
                            </div>
                            <div class="cookie-search-setting">
                                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                                    <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="cookie-control-wrapper">
                            <button class="cookie-control-refresh" type="default">刷新</button>
                            <button class="cookie-control-add" type="default">添加</button>
                            <button class="cookie-control-copy-all" type="default">复制全部</button>
                            <button class="cookie-control-clear-all" type="default">清除全部</button>
                            <button class="cookie-control-rule-manager" type="default">规则管理</button>
                            <div class="cookie-setting"> 
                                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                                    <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="cookie-list-wrapper">
                        </div>
                    </div>
                `,
				html: true,
			},
			btn: {
				ok: {
					enable: false,
				},
			},
			mask: {
				enable: true,
			},
			drag: true,
			width: PanelUISize.setting.width,
			height: PanelUISize.setting.height,
			style: /*css*/ `
                ${pops.config.cssText.panelCSS}
                .cookie-wrapper{
                    display: flex;
                    flex-direction: column;
                    padding: 10px;
                    gap: 10px;
                }
                .cookie-control-wrapper{
                    display: flex;
					flex-wrap: wrap;
                    padding: 0px 10px;
                    gap: 5px;
                    --button-margin-left: 0px;
                }
                .cookie-search-wrapper{
                    display: flex;
                    align-items: center;
                }
                .cookie-search-inner{
                    width: 100%;
                    padding: 0px 10px;
                }
                .cookie-search-inner input{
                    height: 30px;
                    padding: 5px;
                    width: 100%;
                }
                .cookie-search-inner input:focus-visible{
                    outline: none;
                }
                .cookie-setting,
                .cookie-search-setting{
                    display: flex;
                    align-items: center;
                }
                .cookie-setting svg,
                .cookie-search-setting svg{
                    cursor: pointer;
                }
                .cookie-list-wrapper{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .cookie-item{
                    display: flex;
                    flex-direction: column;
                    padding: 10px 10px;
                    margin: 0px 10px;
                    background: #f1efef;
                    border-radius: 10px;
                    gap: 5px;
                    box-sizing: border-box;
                    width: 100%;
                }
                .cookie-item-group{
                    display: flex;
                    align-items: center;
                }
                .cookie-item-group-left{
                    width: 100px;
                    min-width: 100px;
                    max-width: 100px;
                    text-transform: capitalize
                }
                .cookie-item-group-control .cookie-item-group-right{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .cookie-item-group-control .cookie-item-group-control-copy,
                .cookie-item-group-control .cookie-item-group-control-edit,
                .cookie-item-group-control .cookie-item-group-control-delete{
                    display: flex;
                    align-items: center;
                }
                .cookie-item-group-control .cookie-item-group-control-delete svg{
                    width: 16px;
                    height: 16px;
                }
                .cookie-item-group-control svg{
                    cursor: pointer;
                }
            `,
		});
		const $search = $alert.$shadowRoot.querySelector<HTMLInputElement>(
			".cookie-search-inner input"
		)!;
		const $searchSetting = $alert.$shadowRoot.querySelector<HTMLDivElement>(
			".cookie-search-setting"
		)!;
		const $refresh = $alert.$shadowRoot.querySelector<HTMLButtonElement>(
			".cookie-control-refresh"
		)!;
		const $add = $alert.$shadowRoot.querySelector<HTMLButtonElement>(
			".cookie-control-add"
		)!;
		const $copyAll = $alert.$shadowRoot.querySelector<HTMLButtonElement>(
			".cookie-control-copy-all"
		)!;
		const $clearAll = $alert.$shadowRoot.querySelector<HTMLButtonElement>(
			".cookie-control-clear-all"
		)!;
		const $ruleManager = $alert.$shadowRoot.querySelector<HTMLButtonElement>(
			".cookie-control-rule-manager"
		)!;
		const $setting =
			$alert.$shadowRoot.querySelector<HTMLDivElement>(".cookie-setting")!;
		const $cookieListWrapper = $alert.$shadowRoot.querySelector<HTMLDivElement>(
			".cookie-list-wrapper"
		)!;

		/**
		 * 生成单个cookie的元素
		 */
		let createCookieItemElement = (
			cookieInfo: GMCookieInstance | CookieStoreData
		) => {
			const $cookieItem = DOMUtils.createElement("div", {
				className: "cookie-item",
				innerHTML: /*html*/ `
                `,
				"data-cookie-info": cookieInfo,
			});
			const cookieProperty: {
				leftText: string;
				rightText: string;
			}[] = [
				{
					leftText: "name",
					rightText: cookieInfo.name,
				},
				{
					leftText: "value",
					// 解码值
					rightText: PopsPanel.getValue("decode-cookie-value")
						? decodeURIComponent(cookieInfo.value)
						: encodeURIComponent(cookieInfo.value),
				},
			];
			if (CookieManager.cookieManagerApiName === "GM_cookie") {
				cookieInfo = cookieInfo as GMCookieInstance;
				cookieProperty.push(
					{
						leftText: "domain",
						rightText: cookieInfo.domain,
					},
					{
						leftText: "path",
						rightText: cookieInfo.path,
					},
					{
						leftText: "session",
						rightText: JSON.stringify(cookieInfo.session),
					},
					{
						leftText: "expires",
						rightText: cookieInfo.session
							? "会话"
							: cookieInfo.expirationDate
							? new Date(cookieInfo.expirationDate * 1000).toISOString()
							: "未知",
					},
					{
						leftText: "httpOnly",
						rightText: JSON.stringify(cookieInfo.httpOnly),
					},
					{
						leftText: "hostOnly",
						rightText: JSON.stringify(cookieInfo.hostOnly),
					},
					{
						leftText: "secure",
						rightText: JSON.stringify(cookieInfo.secure),
					},
					{
						leftText: "sameSite",
						rightText: cookieInfo.sameSite,
					}
				);
			} else if (CookieManager.cookieManagerApiName === "cookieStore") {
				cookieInfo = cookieInfo as CookieStoreData;
				cookieProperty.push(
					{
						leftText: "domain",
						rightText: cookieInfo.domain,
					},
					{
						leftText: "path",
						rightText: cookieInfo.path,
					},
					{
						leftText: "expires",
						rightText: cookieInfo.expires
							? new Date(cookieInfo.expires).toISOString()
							: "会话",
					},
					{
						leftText: "secure",
						rightText: JSON.stringify(cookieInfo.secure),
					},
					{
						leftText: "sameSite",
						rightText: cookieInfo.sameSite,
					}
				);
			}
			cookieProperty.forEach((it) => {
				const $cookieItemGroup = DOMUtils.createElement("div", {
					className: "cookie-item-group",
					innerHTML: /*html*/ `
                        <div class="cookie-item-group-left">
                            <p>${it.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${it.rightText}</p>
                        </div>
                    `,
				});
				DOMUtils.append($cookieItem, $cookieItemGroup);
			});

			let $cookieItemGroupControl = DOMUtils.createElement("div", {
				className: "cookie-item-group cookie-item-group-control",
				innerHTML: /*html*/ `
                    <div class="cookie-item-group-left">操作</div>
                    <div class="cookie-item-group-right">
                        <div class="cookie-item-group-control-copy">
                            <svg t="1742795616339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M880 247.008l-162.016-166.016Q700.992 64 677.984 64h-316.992q-26.016 0-46.016 18.016-16.992 15.008-23.008 36.992H231.968q-43.008 0-73.504 31.008t-30.496 76v627.008q0 44 30.496 75.488T231.968 960h508q43.008 0 73.504-31.488t30.496-75.488v-63.008q23.008-6.016 37.504-25.504t14.496-44.512V287.008q0-24-16-40z m-168-160.992l-3.008-3.008z m98.016 177.984L744 196z m-126.016-116.992l108 110.016h-108V147.008zM676.992 128zM204.992 948q4 0.992 4.992 2.016-2.016-0.992-4.992-2.016z m27.008 4q-6.016 0-12-0.992 4.992 0.992 12 0.992z m543.008-99.008q0 15.008-10.016 25.504t-24.992 10.496H232q-14.016 0-24.512-10.496t-10.496-25.504V225.984q0-15.008 10.496-25.504t24.512-10.496h58.016v531.008q0 30.016 20.992 51.008t50.016 20.992H775.04v60z m52-132.992q0 2.016-2.016 2.016h-464q-2.016 0-2.016-2.016V136.992q0-2.016 2.016-2.016h251.008v156.992q0 15.008 10.016 24.992t24 10.016h180.992v392.992z m9.984 64q4-0.992 8.992-2.016-4.992 0.992-8.992 2.016z m-244-168.992h-107.008q-15.008 0-24.992 10.496t-10.016 24.992 10.016 24.992 24.992 10.496h107.008q14.016 0 24.512-10.496t10.496-24.992-10.496-24.992-24.512-10.496z m107.008-111.008h-214.016q-14.016 0-24.512 10.496t-10.496 24.992 10.496 24.992 24.512 10.496h214.016q14.016 0 24-10.496t10.016-24.992-10.016-24.992-24-10.496z m-240.992 36q0 4 0.992 8-0.992-4-0.992-8zM700 512z m12 52l4-2.016z m-260.992-135.488q0 14.496 10.496 24.992t24.512 10.496h214.016q14.016 0 24-10.496t10.016-24.992-10.016-24.992-24-10.496h-214.016q-14.016 0-24.512 10.496t-10.496 24.992z m8 1.504z"></path>
                            </svg>
                        </div>
                        <div class="cookie-item-group-control-edit">
                            <svg t="1742795710451" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960zM612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448zM480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448zM672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z"></path>
                            </svg>
                        </div>
                        <div class="cookie-item-group-control-delete">
                            ${pops.config.iconSVG.delete}
                        </div>
                    </div>
                `,
			});
			let $cookieItemCopy =
				$cookieItemGroupControl.querySelector<HTMLDivElement>(
					".cookie-item-group-control-copy"
				)!;
			let $cookieItemEdit =
				$cookieItemGroupControl.querySelector<HTMLDivElement>(
					".cookie-item-group-control-edit"
				)!;
			let $cookieItemDelete =
				$cookieItemGroupControl.querySelector<HTMLDivElement>(
					".cookie-item-group-control-delete"
				)!;
			// 单个cookie的复制事件
			DOMUtils.on($cookieItemCopy, "click", (event) => {
				utils.preventEvent(event);
				let cookieText = cookieInfo.value;
				utils.setClip(cookieText).then((status) => {
					if (status) {
						Qmsg.success("复制成功");
					} else {
						Qmsg.error("复制失败");
					}
				});
			});
			// 单个cookie的编辑事件
			DOMUtils.on($cookieItemEdit, "click", (event) => {
				utils.preventEvent(event);
				CookieManagerEditView.showView(cookieInfo, (__cookieInfo__) => {
					// 添加新的
					let $newCookieItem = createCookieItemElement(__cookieInfo__);
					DOMUtils.after($cookieItem, $newCookieItem);
					// 删除旧的
					$cookieItem.parentElement?.removeChild($cookieItem);
				});
			});
			// 单个cookie的删除事件
			DOMUtils.on($cookieItemDelete, "click", (event) => {
				utils.preventEvent(event);
				let result = confirm("确定删除该Cookie？");
				if (!result) {
					return;
				}
				CookieManager.deleteCookie(cookieInfo).then((status) => {
					if (!status) {
						Qmsg.success("删除成功");
						$cookieItem.parentElement?.removeChild($cookieItem);
					} else {
						log.error(status);
						Qmsg.error("删除失败");
					}
				});
			});

			DOMUtils.append($cookieItem, [$cookieItemGroupControl]);

			return $cookieItem;
		};
		/**
		 * 更新cookie列表
		 */
		let updateCookieListGroup = async (
			/**
			 * + true 过滤出需要的
			 */
			filterCallBack?: (
				cookieInfo: GMCookieInstance | CookieStoreData
			) => boolean
		) => {
			let cookieList = await CookieManager.queryAllCookie();
			if (typeof filterCallBack === "function") {
				cookieList = cookieList.filter(filterCallBack);
			}
			DOMUtils.empty($cookieListWrapper);
			let $fragment = document.createDocumentFragment();
			cookieList.forEach((cookieItem) => {
				if (PopsPanel.getValue("exclude-session-cookie")) {
					// 屏蔽session的cookie
					// @ts-ignore
					if (cookieItem.session) {
						return;
					}
					if (
						CookieManager.cookieManagerApiName === "cookieStore" &&
						// @ts-ignore
						cookieItem.expires == null
					) {
						// 如果Api是cookieStore的话,expires的值为空时就是session的cookie
						return;
					}
				}
				const $cookieItem = createCookieItemElement(cookieItem);
				// @ts-ignore
				DOMUtils.append($fragment, $cookieItem);
			});
			// @ts-ignore
			DOMUtils.append($cookieListWrapper, $fragment);
		};
		updateCookieListGroup();
		// 设置搜索事件
		DOMUtils.on(
			$search,
			["input", "propertychange"],
			utils.debounce((event) => {
				updateCookieListGroup((cookieItem) => {
					let searchText = DOMUtils.val($search);
					let enableRegExp = PopsPanel.getValue<boolean>(
						"search-config-use-regexp"
					);
					return enableRegExp
						? Boolean(cookieItem.name.match(new RegExp(searchText)))
						: cookieItem.name.includes(searchText);
				});
			})
		);
		DOMUtils.listenKeyboard(
			$search,
			"keypress",
			(keyName, keyValue, otherCodeList) => {
				if (keyName === "Enter" && otherCodeList.length === 0) {
					utils.dispatchEvent($search, "input");
				}
			}
		);
		// 设置搜索设置的点击事件
		DOMUtils.on($searchSetting, "click", (event) => {
			utils.preventEvent(event);
			let $settingAlert = pops.alert({
				title: {
					text: "搜索配置",
					position: "center",
				},
				content: {
					text: "",
					html: true,
				},
				btn: {
					ok: {
						enable: false,
					},
				},
				drag: true,
				mask: {
					clickEvent: {
						toClose: true,
					},
				},
				width: PanelUISize.info.width,
				height: PanelUISize.info.height,
				style: /*css*/ `
                    ${pops.config.cssText.panelCSS}

                    .pops-alert-content li{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px;
                    }
                    .pops-panel-item-left-desc-text{
                        line-height: normal;
                        margin-top: 6px;
                        font-size: 0.8em;
                        color: rgb(108, 108, 108);
                    }
                `,
			});
			let $content = $settingAlert.$shadowRoot.querySelector<HTMLDivElement>(
				".pops-alert-content"
			)!;
			let panelHandleContentUtils = pops.config.panelHandleContentUtils();
			let $useRegExp =
				panelHandleContentUtils.createSectionContainerItem_switch(
					UISwitch(
						"启用正则表达式",
						"search-config-use-regexp",
						false,
						void 0,
						"使用正则表达式搜索Cookie名称"
					)
				);

			DOMUtils.append($content, $useRegExp);
		});
		// 设置点击事件
		DOMUtils.on($refresh, "click", (event) => {
			utils.preventEvent(event);
			let searchText = DOMUtils.val($search);
			if (searchText == "") {
				// 没有搜索内容，刷新列表
				updateCookieListGroup();
			} else {
				// 存在搜索内容
				utils.dispatchEvent($search, "input");
			}
		});
		DOMUtils.on($add, "click", (event) => {
			utils.preventEvent(event);
			CookieManagerEditView.showView(void 0, (__cookieInfo__) => {
				updateCookieListGroup();
			});
		});
		DOMUtils.on($copyAll, "click", (event) => {
			utils.preventEvent(event);
			CookieManager.queryAllCookie().then((cookieList) => {
				cookieList = cookieList.filter((it) => {
					// @ts-ignore
					return !(it.session && PopsPanel.getValue("exclude-session-cookie"));
				});
				if (cookieList.length === 0) {
					Qmsg.warning("没有Cookie可以复制");
					return;
				}
				let cookieText = cookieList
					.map((it) => {
						let cookieItemValueText = it.value;
						return `${it.name}=${cookieItemValueText}; `;
					})
					.join("");
				utils.setClip(cookieText).then((status) => {
					if (status) {
						Qmsg.success("复制成功");
					} else {
						Qmsg.error("复制失败");
					}
				});
			});
		});
		DOMUtils.on($clearAll, "click", (event) => {
			utils.preventEvent(event);
			let result = window.confirm("确定清除全部Cookie？");
			if (!result) {
				return;
			}
			CookieManager.deleteAllCookie().then((deleteInfo) => {
				if (deleteInfo.error) {
					Qmsg.warning(
						`清除成功：${deleteInfo.success} 失败：${deleteInfo.error}`
					);
				} else {
					Qmsg.success("清除成功");
				}
				updateCookieListGroup();
			});
		});
		DOMUtils.on($ruleManager, "click", (event) => {
			utils.preventEvent(event);
			CookieRule.showView();
		});
		DOMUtils.on($setting, "click", (event) => {
			utils.preventEvent(event);
			let $settingAlert = pops.alert({
				title: {
					text: "设置",
					position: "center",
				},
				content: {
					text: "",
					html: true,
				},
				btn: {
					ok: {
						enable: false,
					},
				},
				drag: true,
				mask: {
					clickEvent: {
						toClose: true,
					},
				},
				width: PanelUISize.info.width,
				height: PanelUISize.info.height,
				style: /*css*/ `
                    ${pops.config.cssText.panelCSS}

                    .pops-alert-content li{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px;
                    }
                    .pops-panel-item-left-desc-text{
                        line-height: normal;
                        margin-top: 6px;
                        font-size: 0.8em;
                        color: rgb(108, 108, 108);
                    }
                `,
			});
			let $content = $settingAlert.$shadowRoot.querySelector<HTMLDivElement>(
				".pops-alert-content"
			)!;
			let panelHandleContentUtils = pops.config.panelHandleContentUtils();
			let $useGM_cookie =
				panelHandleContentUtils.createSectionContainerItem_select(
					UISelect(
						"CookieManager Api",
						"cookie-manager-api",
						"document.cookie" as CookieManagerApiName,
						[
							{
								text: "document.cookie",
								value: "document.cookie",
							},
							{
								text: "cookieStore",
								value: "cookieStore",
							},
							{
								text: "GM_cookie",
								value: "GM_cookie",
							},
						],
						() => {
							updateCookieListGroup();
						},
						"操作Cookie的Api函数"
					)
				);
			let $decodeValue =
				panelHandleContentUtils.createSectionContainerItem_switch(
					UISwitch(
						"解码Cookie值",
						"decode-cookie-value",
						false,
						() => {
							updateCookieListGroup();
						},
						"对Cookie值进行解码"
					)
				);
			let $excludeSessionCookie =
				panelHandleContentUtils.createSectionContainerItem_switch(
					UISwitch(
						"排除Session Cookie",
						"exclude-session-cookie",
						false,
						() => {
							updateCookieListGroup();
						},
						"过滤掉浏览器会话Cookie"
					)
				);
			DOMUtils.append($content, [
				$useGM_cookie,
				$decodeValue,
				$excludeSessionCookie,
			]);
		});
	},
	/**
	 * 注册脚本菜单
	 */
	registerMenu() {
		const that = this;
		GM_Menu.add({
			key: "cookie_manager_view",
			text: "⚙ Cookie管理",
			autoReload: false,
			isStoreValue: false,
			showText(text, enable) {
				return text;
			},
			callback(data) {
				that.showView();
			},
		});
	},
};
