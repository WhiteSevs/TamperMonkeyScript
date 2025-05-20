import { DOMUtils, log, pops, utils } from "@/env";
import { PanelUISize } from "@/setting/panel-ui-size";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { RuleFilterView, type RuleFilterViewOption } from "./RuleFilterView";
import Qmsg from "qmsg";
import { RuleEditView } from "./RuleEditView";

/**
 * 规则订阅配置
 */
export type RuleSubscribeOption<T> = {
	/** 唯一id */
	uuid: string;
	/** 订阅内的数据 */
	subscribeData: {
		/** 订阅标题 */
		title: string;
		/** 版本 */
		version: number;
		/** 订阅的最后更新时间 */
		lastModified: number;
		/** 订阅的主页地址 */
		homePage?: string;
		/** 规则数据 */
		ruleData: T[];
	};
	/** 操作这个订阅的数据 */
	data: {
		/** 是否启用 */
		enable: boolean;
		/** 订阅地址 */
		url: string;
		/** 订阅标题 */
		title?: string;
		/** 最后更新该订阅的时间 */
		latestUpdateTime: number;
		/** 最后更新该订阅失败的时间 */
		updateFailedTime: number | null;
	};
};

/**
 * 规则视图按钮配置
 */
type RulePanelBtnControlsOption<T> = {
	/**
	 * 添加按钮
	 */
	add?: {
		enable: boolean;
		/**
		 * 点击回调
		 */
		callback?: () => void;
	};
	/**
	 * 过滤按钮
	 */
	filter?: {
		enable: boolean;
		/**
		 * 标题
		 */
		title?: RulePanelOption<T>["title"];
		/**
		 * 自定义的过滤类型
		 */
		option: RuleFilterViewOption<T>["filterOption"];
		/**
		 * 点击回调
		 */
		callback?: () => void;
	};
	/**
	 * 清空所有按钮
	 */
	clearAll?: {
		enable: boolean;
		/**
		 * 点击清空按钮弹出弹窗后点击确定的回调函数
		 *
		 * 在里面执行清空操作
		 */
		callback?: () => void;
	};
	/**
	 * 导入按钮
	 */
	import?: {
		enable: boolean;
		/**
		 * 点击按钮的回调函数
		 */
		callback?: (
			/** 更新视图 */
			updateView: () => void
		) => IPromise<void>;
	};
	/**
	 * 导出按钮
	 */
	export?: {
		enable: boolean;
		/**
		 * 点击按钮的回调函数
		 */
		callback?: () => void;
	};
	/**
	 * 规则的开启/关闭按钮
	 */
	ruleEnable?: {
		enable: boolean;
		/**
		 * 获取单条规则的启用状态
		 * @param data
		 */
		getEnable: (data: T) => IPromise<boolean>;
		/**
		 * 启用状态回调
		 * @param enable
		 */
		callback: (data: T, enable: boolean) => IPromise<void>;
	};
	/**
	 * 规则的编辑按钮
	 */
	ruleEdit?: {
		enable: boolean;
		/**
		 * 点击编辑按钮的回调
		 * @returns
		 * + false 不执行显示编辑弹窗
		 */
		callback?: (option: {
			event: MouseEvent | PointerEvent;
			option: RulePanelAnyOption<T>;
			subscribeOption: RulePanelSubscribeOption<T> | undefined;
			ruleData: T & RuleSubscribeOption<T>;
			$section: HTMLElement;
			enterDeepMenu: <T2>(option: {
				/**
				 * 标题文字
				 */
				headerTitle?: string;
				/**
				 * 获取所有数据
				 */
				data: () => IPromise<T2[]>;
				/**
				 * 获取单个规则当前的数据
				 */
				getData: (data: T2) => IPromise<T2>;
				/**
				 * 获取单个数据的名字，用户显示在列表中，可是html
				 */
				getDataItemName: (data: T2) => IPromise<string>;
				/**
				 * 新增单个规则
				 */
				addData?: (data: T2) => IPromise<boolean>;
				/**
				 * 更新单个规则
				 */
				updateData: (data: T2) => IPromise<boolean>;
				/**
				 * 删除单个规则，用于删除getAddData创建时的数据
				 */
				deleteData: (data: T2) => IPromise<boolean>;
				/**
				 * 按钮控制
				 */
				btnControls?: RulePanelBtnControlsOption<T2>;
			}) => IPromise<void>;
		}) => boolean | void;
	} & {
		enable: boolean;
		/**
		 * 编辑/添加视图的宽度（注意带单位，px或%）
		 */
		viewWidth?: () => string;
		/**
		 * 编辑/添加视图的高度（注意带单位，px或%）
		 */
		viewHeight?: () => string;
		/**
		 * 获取编辑/添加视图的html
		 */
		getView?: (data: T, isEdit: boolean) => IPromise<DocumentFragment>;
		/**
		 * 当编辑/添加视图的提交表单时触发的回调函数
		 */
		onsubmit?: /**
		 * @returns
		 * + true 校验通过
		 * + false 校验失败
		 */
		(
			/**  */
			$form: HTMLFormElement,
			/** 是否是编辑状态 */
			isEdit: boolean,
			/** 如果isEdit为true，该data存在 */
			data?: T
		) => IPromise<{
			success: boolean;
			data: T;
		}>;
		/**
		 * 自定义的style
		 */
		style?: string;
	};
	/**
	 * 规则的删除按钮
	 */
	ruleDelete?: {
		enable: boolean;
		/**
		 * 删除的回调函数
		 * @param data
		 */
		deleteCallBack: (data: T) => IPromise<boolean>;
	};
};

/**
 * 规则视图的内容配置
 */
export type RulePanelContentOption<T> = Omit<
	PopsPanelContentConfig,
	"forms"
> & {
	/**
	 * 订阅配置
	 */
	subscribe?: RulePanelSubscribeOption<T>;
	/**
	 * 规则配置
	 */
	ruleOption: RulePanelRuleOption<T>;
};
/**
 * 规则视图配置
 */
export type RulePanelOption<T> = {
	/** 面版标题 */
	title: string | (() => string);
	/** 面版内容配置 */
	contentConfig: RulePanelContentOption<T>[];
	/** 面版的className */
	className?: string;
	/** 自定义样式 */
	style?: string;
};

/**
 * 规则面版的各种订阅的配置
 */
type RulePanelSubscribeOption<T> = {
	/**
	 * 是否启用
	 */
	enable: boolean;
	/**
	 * 按钮/标题的文字
	 * @default "订阅"
	 */
	title?: string;
	/**
	 * 标题的文字
	 * @default "订阅"
	 */
	headerTitle?: string;
	/**
	 * 点击订阅按钮的点击事件
	 */
	callback?: () => IPromise<void>;
	/**
	 * 获取订阅的所有数据
	 */
	data: () => IPromise<RuleSubscribeOption<T>[]>;
	/**
	 * 获取单个规则当前的数据
	 */
	getData: (data: RuleSubscribeOption<T>) => IPromise<RuleSubscribeOption<T>>;
	/**
	 * 获取单个数据的名字，用户显示在列表中，可是html
	 */
	getDataItemName: (data: RuleSubscribeOption<T>) => IPromise<string>;
	/**
	 * 新增单个规则
	 */
	addData: (data: RuleSubscribeOption<T>) => IPromise<boolean>;
	/**
	 * 更新单个规则
	 */
	updateData: (data: RuleSubscribeOption<T>) => IPromise<boolean>;
	/**
	 * 删除单个规则，用于删除getAddData创建时的数据
	 */
	deleteData: (data: RuleSubscribeOption<T>) => IPromise<boolean>;
	/**
	 * 按钮控制
	 */
	btnControls?: RulePanelBtnControlsOption<RuleSubscribeOption<T>>;
	/**
	 * 获取订阅链接的数据信息
	 */
	getSubscribeInfo: (url: string) => Promise<{
		/**
		 * 订阅的数据
		 */
		data: RuleSubscribeOption<T> | null;
		/**
		 * 错误信息，如果data为空，则msg有错误信息
		 */
		msg: string;
	}>;
};
/**
 * 规则面版的配置
 */
type RulePanelRuleOption<T> = {
	/**
	 * 获取所有数据
	 */
	data: () => IPromise<T[]>;
	/**
	 * 获取添加的数据
	 */
	getAddData: () => IPromise<T>;
	/**
	 * 获取单个规则当前的数据
	 * @param data
	 */
	getData: (data: T) => IPromise<T>;
	/**
	 * 获取单个数据的名字，用户显示在列表中
	 * @param data
	 */
	getDataItemName: (data: T) => IPromise<string>;
	/**
	 * 更新单个规则
	 * @param data
	 */
	updateData: (data: T) => IPromise<boolean>;
	/**
	 * 删除单个规则，用于删除getAddData创建时的数据
	 * @param data
	 */
	deleteData: (data: T) => IPromise<boolean>;
	/**
	 * 按钮控制
	 */
	btnControls?: RulePanelBtnControlsOption<T>;
};
/**
 * 规则面版的各种规则配置
 */
type RulePanelAnyOption<T> =
	| RulePanelRuleOption<T>
	| RulePanelSubscribeOption<T>;

export class RulePanelView<T> {
	option: RulePanelOption<T>;
	constructor(option: RulePanelOption<T>) {
		this.option = option;
	}
	/**
	 * 显示视图
	 * @param filterCallBack 返回值为false隐藏，true则不隐藏（不处理）
	 */
	async showView(
		filterCallBack?: (data: T | RuleSubscribeOption<T>) => boolean
	) {
		const that = this;
		let contentConfigList = this.option.contentConfig;
		contentConfigList.forEach((config) => {
			// @ts-ignore
			config.forms = [];
			config.headerTitle = config.headerTitle || config.title;
			if (config.subscribe?.enable) {
				// 存在订阅按钮
				config.headerTitle =
					config.headerTitle +
					/*html*/ `
                <div class="subscribe-container">
                    <button class="subscribe-btn" type="subscribe" data-has-icon="false" data-righticon="false">
                        <span>${config.subscribe?.title || "订阅"}</span>
                    </button>
                </div>
            `;
			}
			let originCallBack = config.callback;
			config.callback = async (
				event,
				$panelRightHeader,
				$panelRightContainer
			) => {
				if (typeof originCallBack === "function") {
					originCallBack(event, $panelRightContainer, $panelRightContainer);
				}
				if (config.subscribe && config.subscribe.enable) {
					// 存在订阅按钮
					let $subscribe =
						$panelRightHeader.querySelector<HTMLElement>(".subscribe-btn")!;
					const subscribeOption = config.subscribe!;
					DOMUtils.on($subscribe, "click", async (event) => {
						utils.preventEvent(event);
						// 订阅
						await subscribeOption?.callback?.();
						let deepMenuElementInfo = this.enterDeepMenu(
							$panelRightContainer,
							subscribeOption?.headerTitle || subscribeOption?.title || "订阅",
							() => {
								// 触发渲染更新
								this.updateRuleContaienrElement(
									config.ruleOption,
									subscribeOption,
									$panelRightContainer
								);
							}
						);
						/** 订阅容器 */
						let $subscribeRightContainer =
							deepMenuElementInfo.$rightRuleContainer;
						let subscribeCreateViewElementInfo = this.createButtonControls(
							$subscribeRightContainer,
							deepMenuElementInfo.$section,
							subscribeOption,
							async () => {
								let $prompt = pops.prompt({
									title: {
										text: "添加订阅",
										position: "center",
									},
									content: {
										text: "",
										focus: true,
										placeholder: "输入URL",
									},
									btn: {
										cancel: {
											enable: false,
										},
										ok: {
											enable: true,
											text: "下一步",
											async callback(eventDetails, event) {
												let subscribeUrl = DOMUtils.val($promptInput).trim();
												if (subscribeUrl === "") {
													return;
												}
												log.info(`订阅：` + subscribeUrl);
												let $loading = Qmsg.loading("正在获取订阅信息...");
												try {
													let subscribeInfoResult =
														await subscribeOption?.getSubscribeInfo(
															subscribeUrl
														)!;
													if (subscribeInfoResult.data) {
														eventDetails.close();
														let subscribeInfo = subscribeInfoResult.data;
														let title =
															subscribeInfo.data.title ||
															subscribeInfo.subscribeData.title ||
															subscribeInfo.data.url;
														let $subscribeNetworkAddDialog = pops.alert({
															title: {
																text: "添加订阅",
																position: "center",
															},
															content: {
																text: /*html*/ `
																	<div class="subscribe-network-title">
																		<span>订阅链接名称：</span>
																		<input type="text" placeholder="输入订阅链接的名称">
																	</div>
																	<div class="subscribe-network-data-count"></div>
																	<div class="subscribe-network-home-url"></div>
																	<div class="subscribe-network-url"></div>
																	<div class="subscribe-network-version"></div>
																	<div class="subscribe-network-last-modified"></div>
																`,
																html: true,
															},
															btn: {
																ok: {
																	text: "添加",
																	type: "subscribe",
																	callback: async (eventDetails, event) => {
																		let addFlag = await subscribeOption.addData(
																			subscribeInfo
																		);
																		if (!addFlag) {
																			Qmsg.error("该订阅已存在", {
																				consoleLogContent: true,
																			});
																		}
																		that.updateRuleContaienrElement(
																			subscribeOption,
																			subscribeOption,
																			deepMenuElementInfo.$section
																		);
																		eventDetails.close();
																	},
																},
															},
															width: PanelUISize.setting.width,
															height: "auto",
															style: /*css*/ `
																.pops button[type="subscribe"]{
																	--button-color: #ffffff;
																	--button-bd-color: #67b279;
																	--button-bg-color: #67b279;
																}
																.pops button[type="subscribe"]:hover{
																	--button-color: #ffffff;
																	--button-bd-color:rgb(91, 159, 107);;
																	--button-bg-color:rgb(91, 159, 107);;
																}

																.pops-alert-content{
																	display: flex;
																	flex-direction: column;
																	gap: 4px;
																	padding: 20px;
																}
																.pops-alert-content a {
																	color: #3d3d3d;
																}
																.pops-alert-content > div{
																	display: flex;
																}
																.pops-alert-content > div > span:first-child{
																	white-space: nowrap;
																}
																.subscribe-network-title input{
																	width: 100%;
																	flex: 1 1 auto;
																	line-height: 1.3;
																	outline: none;
																	text-overflow: ellipsis;
																	border-radius: 8px;
																	border: 1px solid #e4e4e4;
																	background-color: #f6f6f6;
																	padding: 16px 16px 16px 16px;
																	font-size: 16px;
																}
																.subscribe-network-title input:focus{

																}
															`,
														});
														let $subscribeNetworkAddDialog_title_input =
															$subscribeNetworkAddDialog.$shadowRoot.querySelector<HTMLInputElement>(
																".subscribe-network-title input"
															)!;
														let $subscribeNetworkAddDialog_count =
															$subscribeNetworkAddDialog.$shadowRoot.querySelector<HTMLElement>(
																".subscribe-network-data-count"
															)!;
														let $subscribeNetworkAddDialog_homeUrl =
															$subscribeNetworkAddDialog.$shadowRoot.querySelector<HTMLInputElement>(
																".subscribe-network-home-url"
															)!;
														let $subscribeNetworkAddDialog_url =
															$subscribeNetworkAddDialog.$shadowRoot.querySelector<HTMLElement>(
																".subscribe-network-url"
															)!;
														let $subscribeNetworkAddDialog_version =
															$subscribeNetworkAddDialog.$shadowRoot.querySelector<HTMLInputElement>(
																".subscribe-network-version"
															)!;
														let $subscribeNetworkAddDialog_lastModified =
															$subscribeNetworkAddDialog.$shadowRoot.querySelector<HTMLInputElement>(
																".subscribe-network-last-modified"
															)!;

														DOMUtils.val(
															$subscribeNetworkAddDialog_title_input,
															title
														);
														DOMUtils.on(
															$subscribeNetworkAddDialog_title_input,
															["input", "propertychange"],
															(event) => {
																let inputValue = DOMUtils.val(
																	$subscribeNetworkAddDialog_title_input
																);
																subscribeInfo.data.title =
																	inputValue === "" ? void 0 : inputValue;
															}
														);
														DOMUtils.html(
															$subscribeNetworkAddDialog_count,
															/*html*/ `
																<span>规则数量：</span>
																<span>${subscribeInfo.subscribeData.ruleData.length}</span>
															`
														);
														// 主页地址
														if (
															typeof subscribeInfo.subscribeData.homePage ===
															"string"
														) {
															DOMUtils.html(
																$subscribeNetworkAddDialog_homeUrl,
																/*html*/ `
																<span>主页：</span>
																<a href="${subscribeInfo.subscribeData.homePage}" target="_blank">${subscribeInfo.subscribeData.homePage}</a>
															`
															);
														} else {
															$subscribeNetworkAddDialog_homeUrl.remove();
														}
														// 链接
														DOMUtils.html(
															$subscribeNetworkAddDialog_url,
															/*html*/ `
																<span>URL：</span>
																<a href="${subscribeInfo.data.url}" target="_blank">${subscribeInfo.data.url}</a>
															`
														);
														// 版本
														if (subscribeInfo.subscribeData.version != null) {
															DOMUtils.html(
																$subscribeNetworkAddDialog_version,
																/*html*/ `
																	<span>版本：</span>
																	<span>${subscribeInfo.subscribeData.version}</span>
																`
															);
														} else {
															$subscribeNetworkAddDialog_version.remove();
														}
														if (
															subscribeInfo.subscribeData.lastModified != null
														) {
															DOMUtils.html(
																$subscribeNetworkAddDialog_lastModified,
																/*html*/ `
																	<span>更新时间：</span>
																	<span>${utils.formatTime(subscribeInfo.subscribeData.lastModified)}</span>
																`
															);
														} else {
															$subscribeNetworkAddDialog_lastModified.remove();
														}
													} else {
														Qmsg.error(subscribeInfoResult.msg, {
															consoleLogContent: true,
														});
													}
												} catch (error: any) {
													Qmsg.error(error.toString(), {
														consoleLogContent: true,
													});
												} finally {
													$loading.close();
												}
											},
										},
									},
									width: PanelUISize.info.width,
									height: "auto",
								});
								let $promptInput =
									$prompt.$shadowRoot.querySelector<HTMLInputElement>("input")!;
								let $promptOk = $prompt.$shadowRoot.querySelector<HTMLElement>(
									".pops-prompt-btn-ok "
								)!;
								// 添加输入监听
								DOMUtils.on(
									$promptInput,
									["input", "propertychange"],
									(event) => {
										let promptValue = DOMUtils.val($promptInput);
										if (promptValue === "") {
											DOMUtils.attr($promptOk, "disabled", "true");
										} else {
											DOMUtils.removeAttr($promptOk, "disabled");
										}
									}
								);
								DOMUtils.listenKeyboard(
									$promptInput,
									"keydown",
									(keyName, keyValue, otherCodeList, event) => {
										if (keyName === "Enter" && otherCodeList.length === 0) {
											utils.preventEvent(event);
											// 添加
											utils.dispatchEvent($promptOk, "click");
										}
									}
								);
								// 触发input事件
								utils.dispatchEvent($promptInput, "input");
							}
						);

						// 渲染订阅列表
						let allSubscribeData = await subscribeOption.data();
						await this.addRuleElement(
							subscribeOption,
							subscribeOption,
							deepMenuElementInfo.$section,
							allSubscribeData
						);
					});
				}

				let ruleCreateViewElementInfo = this.createButtonControls(
					$panelRightContainer,
					$panelRightContainer,
					config.ruleOption,
					async () => {
						this.showEditView(
							config.ruleOption,
							void 0,
							false,
							await config.ruleOption.getAddData(),
							$panelRightContainer
						);
					}
				);
				// 渲染规则列表
				let allData = await config.ruleOption.data();
				let changeButtonText = false;
				await this.addRuleElement(
					config.ruleOption,
					void 0,
					$panelRightContainer,
					allData,
					(ruleItemData, $rule) => {
						let flag =
							typeof filterCallBack === "function"
								? filterCallBack(ruleItemData)
								: true;
						if (!flag) {
							// 隐藏元素
							changeButtonText = true;
							DOMUtils.hide($rule, false);
						}
					}
				);
				if (changeButtonText && ruleCreateViewElementInfo.$ruleControlFilter) {
					DOMUtils.text(
						ruleCreateViewElementInfo.$ruleControlFilter,
						"取消过滤"
					);
				}
			};
		});
		let $panel = pops.panel({
			title: {
				text:
					typeof this.option.title === "function"
						? this.option.title()
						: this.option.title,
				position: "center",
			},
			// @ts-ignore
			content: contentConfigList,
			btn: {
				close: {
					enable: true,
					callback(details, event) {
						details.close();
					},
				},
			},
			mask: { clickEvent: { toClose: false } },
			class: this.option.className || "rule-panel-view",
			width: PanelUISize.settingBig.width,
			height: PanelUISize.settingBig.height,
			style: /*css*/ `
                ${this.option.style || ""}
                .pops button[type="subscribe"]{
                    --button-color: #ffffff;
                    --button-bd-color: #67b279;
                    --button-bg-color: #67b279;
                }
                .pops button[type="subscribe"]:hover{
                    --button-color: #ffffff;
                    --button-bd-color:rgb(91, 159, 107);;
                    --button-bg-color:rgb(91, 159, 107);;
                }
                section.pops-panel-container .pops-panel-container-header-ul li:has(.subscribe-btn){
                    justify-content: space-between !important;
                }
				section.pops-panel-container ul li.rule-controls{
					justify-content: flex-start;
					overflow-x: auto;
				}

				section.pops-panel-container ul:has(>.rule-view-container){
					overflow: hidden;
					display: flex;
					flex-direction: column;
				}

				.rule-view-container{
					margin: var(--pops-panel-forms-margin-top-bottom) calc(var(--pops-panel-forms-margin-left-right) + var(--pops-panel-forms-margin-left-right));
					margin-top: 0;
					overflow: auto;
					background: #ffffff;
					border-radius: var(--pops-panel-forms-container-item-border-radius);
					padding: 5px 10px;
					position: relative;
				}
				.rule-view-container:empty{
					display: none;
				}
				.rule-item{
					display: flex;
					align-items: center;
					line-height: normal;
					font-size: 16px;
					padding: 4px 8px;
					gap: 8px;
				}
				.rule-name{
					flex: 1;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.rule-controls{
					display: flex;
					align-items: center;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					gap: 8px;
					padding: 0px;
				}
				.rule-controls-enable{
					
				}
				.rule-controls-edit{
					
				}
				.rule-controls-delete{
					
				}
				.rule-controls-edit,
				.rule-controls-delete{
					width: 16px;
					height: 16px;
					cursor: pointer;
				}
            `,
		});
	}
	/**
	 * 进入深层菜单
	 *
	 * 隐藏上一层的<section>，添加本层的<section>
	 * @param $el 当前菜单的元素或<section>
	 * @param headerTitle 标题
	 * @param quiteDeepMenuCallBack 返回上一层回调，一般用于触发外部的渲染更新
	 */
	enterDeepMenu(
		$el: HTMLElement,
		headerTitle: string,
		quiteDeepMenuCallBack: () => void
	) {
		/** 前一个菜单元素 */
		let $prevSection = $el.matches("section") ? $el : $el.closest("section")!;
		// 二级菜单，先隐藏旧的
		DOMUtils.addClass($prevSection, "pops-hide-important");
		let $section = DOMUtils.createElement("section", {
			className: "pops-panel-container pops-panel-deepMenu-container",
			innerHTML: /*html*/ `
				<ul class="pops-panel-deepMenu-container-header-ul">
					<div class="pops-panel-deepMenu-container-header">
						<i class="pops-panel-deepMenu-container-left-arrow-icon">${pops.config.iconSVG.arrowLeft}</i>
						<p>${headerTitle}</p>
					</div>
				</ul>
				<ul class="pops-panel-ulist-container"></ul>
			`,
		});

		DOMUtils.after($prevSection, $section);
		/** 标题容器 */
		let $headerContainer = $section.querySelector<HTMLElement>(
			".pops-panel-deepMenu-container-header-ul"
		)!;
		/** 返回上一层按钮 */
		let $arrowLeft = $section.querySelector<HTMLElement>(
			".pops-panel-deepMenu-container-left-arrow-icon"
		)!;
		/** 右侧规则容器 */
		let $rightRuleContainer = $section.querySelector<HTMLElement>(
			".pops-panel-ulist-container"
		)!;

		DOMUtils.on($arrowLeft, "click", (event) => {
			utils.preventEvent(event);
			// 回退
			// 获取元素的前一个元素
			let $before = DOMUtils.prev($section);

			DOMUtils.remove($section);
			if ($before) {
				DOMUtils.removeClass($before, "pops-hide-important");
			}
			quiteDeepMenuCallBack();
		});
		return {
			$section,
			$headerContainer,
			$arrowLeft,
			$rightRuleContainer,
			/**
			 * 退出菜单
			 */
			quiteDeepMenu: () => {
				$arrowLeft.click();
			},
		};
	}
	/**
	 * 创建各个按钮元素
	 * @param $controlsParent 控制按钮的父元素
	 * @param $rightContainer 右侧容器
	 * @param option 配置
	 * @param addButtonCallBack 添加按钮的回调
	 */
	createButtonControls(
		$controlsParent: HTMLElement,
		$rightContainer: HTMLElement,
		option: RulePanelAnyOption<T>,
		addButtonCallBack?: () => IPromise<void>
	) {
		let btnControlsOption = option.btnControls;
		/** 控制按钮 */
		let $ruleControls = DOMUtils.createElement("li", {
			className: "rule-controls",
		});
		DOMUtils.append($controlsParent, $ruleControls);

		/** 添加按钮 */
		let $ruleControlAdd: HTMLElement | null = null;
		if (btnControlsOption?.add?.enable) {
			$ruleControlAdd = DOMUtils.createElement(
				"button",
				{
					className: "rule-control-add",
					innerHTML: /*html*/ `<span>添加</span>`,
				},
				{
					type: "primary",
					"data-has-icon": "false",
					"data-righticon": "false",
				}
			);
			DOMUtils.on($ruleControlAdd, "click", async (event) => {
				utils.preventEvent(event);
				// 添加
				option.btnControls?.add?.callback?.();
				await addButtonCallBack?.();
			});
			DOMUtils.append($ruleControls, $ruleControlAdd);
		}
		/** 过滤按钮 */
		let $ruleControlFilter: HTMLElement | null = null;
		if (btnControlsOption?.filter?.enable) {
			$ruleControlFilter = DOMUtils.createElement(
				"button",
				{
					className: "rule-control-filter",
					innerHTML: /*html*/ `<span>过滤</span>`,
				},
				{
					type: "default",
					"data-has-icon": "false",
					"data-righticon": "false",
				}
			);
			DOMUtils.on($ruleControlFilter, "click", (event) => {
				utils.preventEvent(event);
				// 过滤

				btnControlsOption?.filter?.callback?.();
				/**
				 * 获取所有的规则元素
				 */
				let getAllRuleElement = () => {
					return Array.from(
						$rightContainer.querySelectorAll<HTMLDivElement>(
							".rule-view-container .rule-item"
						)
					);
				};
				let $button = $ruleControlFilter;
				if ($button) {
					if (DOMUtils.text($button).includes("取消")) {
						getAllRuleElement().forEach(($el) => {
							DOMUtils.show($el, false);
						});
						DOMUtils.text($button, "过滤");
					} else {
						let filterTitle = "过滤规则";
						if (typeof btnControlsOption?.filter?.title === "function") {
							filterTitle = btnControlsOption?.filter?.title();
						} else if (typeof btnControlsOption?.filter?.title === "string") {
							filterTitle = btnControlsOption?.filter?.title;
						}
						let ruleFilterView = new RuleFilterView<T | RuleSubscribeOption<T>>(
							{
								title: filterTitle,
								// @ts-ignore
								filterOption: btnControlsOption?.filter?.option || [],
								execFilterCallBack() {
									DOMUtils.text($button, "取消过滤");
								},
								getAllRuleInfo: () => {
									return getAllRuleElement().map(($el) => {
										return {
											data: this.parseRuleElement<T | RuleSubscribeOption<T>>(
												$el
											).data,
											$el: $el,
										};
									});
								},
							}
						);
						ruleFilterView.showView();
					}
				}
			});
			DOMUtils.append($ruleControls, $ruleControlFilter);
		}

		/** 清空所有按钮 */
		let $ruleControlClearAll: HTMLElement | null = null;
		if (btnControlsOption?.clearAll?.enable) {
			$ruleControlClearAll = DOMUtils.createElement(
				"button",
				{
					className: "rule-control-clear-all",
					innerHTML: /*html*/ `<span>清空所有</span>`,
				},
				{
					type: "xiaomi-primary",
					"data-has-icon": "false",
					"data-righticon": "false",
				}
			);
			DOMUtils.on($ruleControlClearAll, "click", (event) => {
				utils.preventEvent(event);
				// 清空所有
				let $askDialog = pops.confirm({
					title: {
						text: "提示",
						position: "center",
					},
					content: {
						text: "确定清空所有的数据？",
						html: false,
					},
					btn: {
						ok: {
							enable: true,
							callback: async (popsEvent) => {
								log.success("清空所有");
								btnControlsOption?.clearAll?.callback?.();

								let data = await option?.data();
								if (!data || data.length) {
									Qmsg.error("清理失败");
									return;
								} else {
									Qmsg.success("清理成功");
								}
								await this.updateDeleteAllBtnText(option, $ruleControls);
								this.clearContent($rightContainer);
								$askDialog.close();
							},
						},
						cancel: {
							text: "取消",
							enable: true,
						},
					},
					mask: { enable: true },
					width: "300px",
					height: "200px",
				});
			});
			DOMUtils.append($ruleControls, $ruleControlClearAll);
		}

		/** 导入按钮 */
		let $ruleControlImport: HTMLElement | null = null;
		if (btnControlsOption?.import?.enable) {
			$ruleControlImport = DOMUtils.createElement(
				"button",
				{
					className: "rule-control-import",
					innerHTML: /*html*/ `<span>导入</span>`,
				},
				{
					type: "default",
					"data-has-icon": "false",
					"data-righticon": "false",
				}
			);

			DOMUtils.on($ruleControlImport, "click", async (event) => {
				utils.preventEvent(event);
				// 导入
				btnControlsOption?.import?.callback?.(() => {
					this.updateRuleContaienrElement(option, void 0, $rightContainer);
				});
			});
			DOMUtils.append($ruleControls, $ruleControlImport);
		}

		/** 导出按钮 */
		let $ruleControlExport: HTMLElement | null = null;
		if (btnControlsOption?.export?.enable) {
			$ruleControlExport = DOMUtils.createElement(
				"button",
				{
					className: "rule-control-export",
					innerHTML: /*html*/ `<span>导出</span>`,
				},
				{
					type: "default",
					"data-has-icon": "false",
					"data-righticon": "false",
				}
			);
			DOMUtils.on($ruleControlExport, "click", (event) => {
				utils.preventEvent(event);
				// 导出
				btnControlsOption?.export?.callback?.();
			});
			DOMUtils.append($ruleControls, $ruleControlExport);
		}

		/** 规则容器 */
		let $ruleContainer = DOMUtils.createElement("div", {
			className: "rule-view-container",
			innerHTML: /*html*/ ``,
		});
		DOMUtils.append($rightContainer, $ruleContainer);

		return {
			$ruleContainer: $ruleContainer,
			$ruleControls: $ruleControls,
			$ruleControlAdd: $ruleControlAdd,
			$ruleControlFilter: $ruleControlFilter,
			$ruleControlClearAll: $ruleControlClearAll,
			$ruleControlImport: $ruleControlImport,
			$ruleControlExport: $ruleControlExport,
		};
	}
	/**
	 * 解析弹窗内的各个元素
	 * @param $el
	 */
	parseViewElement($el: ShadowRoot | HTMLElement) {
		let $container = $el.querySelector<HTMLElement>(".rule-view-container")!;
		let $deleteBtn = $el.querySelector<HTMLButtonElement>(
			".rule-control-clear-all"
		)!;
		return {
			/** 容器 */
			$container: $container,
			/** 左下角的清空按钮 */
			$deleteBtn: $deleteBtn,
		};
	}
	/**
	 * 解析规则元素
	 * @param $ruleItem 规则元素
	 */
	parseRuleElement<T>($ruleItem: ShadowRoot | HTMLElement) {
		let $enable = $ruleItem.querySelector<HTMLElement>(
			".rule-controls-enable"
		)!;
		let $enableSwitch =
			$enable.querySelector<HTMLElement>(".pops-panel-switch")!;
		let $enableSwitchInput = $enable.querySelector<HTMLInputElement>(
			".pops-panel-switch__input"
		)!;
		let $enableSwitchCore = $enable.querySelector<HTMLElement>(
			".pops-panel-switch__core"
		);
		/** 编辑按钮 */
		let $edit = $ruleItem.querySelector<HTMLElement>(".rule-controls-edit")!;
		/** 删除按钮 */
		let $delete = $ruleItem.querySelector<HTMLElement>(
			".rule-controls-delete"
		)!;

		return {
			/** 启用开关 */
			$enable,
			/** 启用开关的container */
			$enableSwitch: $enableSwitch,
			/** 启用开关的input */
			$enableSwitchInput: $enableSwitchInput,
			/** 启用开关的core */
			$enableSwitchCore: $enableSwitchCore,
			/** 编辑按钮 */
			$edit: $edit,
			/** 删除按钮 */
			$delete: $delete,
			/** 存储在元素上的数据 */
			data: Reflect.get($ruleItem, "data-rule") as T,
		};
	}
	/**
	 * 创建规则元素
	 * @param option 规则配置
	 * @param subscribeOption 订阅配置
	 * @param data 规则数据
	 * @param $el 元素
	 */
	async createRuleElement(
		option: RulePanelAnyOption<T>,
		subscribeOption: RulePanelSubscribeOption<T> | undefined,
		data: T | RuleSubscribeOption<T>,
		$el: ShadowRoot | HTMLElement
	) {
		let ruleData = data as T & RuleSubscribeOption<T>;
		let name = await option.getDataItemName(ruleData);
		let $ruleItem = DOMUtils.createElement("div", {
			className: "rule-item",
			innerHTML: /*html*/ `
			<div class="rule-name">${name}</div>
			<div class="rule-controls">
				<div class="rule-controls-enable">
					<div class="pops-panel-switch">
						<input class="pops-panel-switch__input" type="checkbox">
						<span class="pops-panel-switch__core">
							<div class="pops-panel-switch__action">
							</div>
						</span>
					</div>
				</div>
				<div class="rule-controls-edit">
					${pops.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${pops.config.iconSVG.delete}
				</div>
			</div>
			`,
		});
		Reflect.set($ruleItem, "data-rule", ruleData);
		/** 开关切换的className */
		let switchCheckedClassName = "pops-panel-switch-is-checked";

		const {
			$enable,
			$enableSwitch,
			$enableSwitchCore,
			$enableSwitchInput,
			$delete,
			$edit,
		} = this.parseRuleElement($ruleItem);
		if (option.btnControls?.ruleEnable?.enable) {
			// 给switch添加点击事件
			DOMUtils.on($enableSwitchCore, "click", async (event) => {
				let isChecked = false;
				if ($enableSwitch.classList.contains(switchCheckedClassName)) {
					// 关
					$enableSwitch.classList.remove(switchCheckedClassName);
					isChecked = false;
				} else {
					// 开
					$enableSwitch.classList.add(switchCheckedClassName);
					isChecked = true;
				}
				$enableSwitchInput.checked = isChecked;
				await option?.btnControls?.ruleEnable?.callback(ruleData, isChecked);

				// 开启按钮自动执行更新订阅
				if (isChecked && subscribeOption) {
					// 更新订阅
					let subscribeData = data as RuleSubscribeOption<T>;
					let subscribeInfo = await subscribeOption.getSubscribeInfo(
						subscribeData.data.url
					)!;
					if (subscribeInfo.data) {
						let subscribeNewItem = subscribeInfo.data;
						// 同步uuid
						subscribeNewItem.uuid = subscribeData.uuid;
						// 同步data
						subscribeNewItem.data = subscribeData.data;
						// 同步更新时间
						subscribeNewItem.data.latestUpdateTime = Date.now();
						// 更新规则
						await subscribeOption.updateData(subscribeNewItem);
					} else {
						subscribeData.data.updateFailedTime = Date.now();
						// 更新规则
						await subscribeOption.updateData(subscribeData);
						log.error(subscribeData);
						Qmsg.error(subscribeInfo.msg, { consoleLogContent: true });
					}
					// 更新容器信息
					await this.updateRuleContaienrElement(option, subscribeOption, $el);
				}
			});
			if (await option?.btnControls?.ruleEnable?.getEnable(ruleData)) {
				// 开
				$enableSwitch.classList.add(switchCheckedClassName);
			}
		} else {
			$enable.remove();
		}
		if (option?.btnControls?.ruleEdit?.enable) {
			// 给编辑按钮添加点击事件
			DOMUtils.on($edit, "click", (event) => {
				utils.preventEvent(event);
				if (typeof option.btnControls?.ruleEdit?.callback === "function") {
					let result = option.btnControls?.ruleEdit?.callback({
						event,
						// @ts-ignore
						option,
						// @ts-ignore
						subscribeOption,
						// @ts-ignore
						ruleData,
						$section: $el as HTMLElement,
						enterDeepMenu: async (deepMenuOption) => {
							let deepMenuElementInfo = this.enterDeepMenu(
								$el as HTMLElement,
								deepMenuOption.headerTitle || "",
								() => {
									// 触发渲染更新
									this.updateRuleContaienrElement(option, subscribeOption, $el);
								}
							);
							/** 二级菜单容器 */
							let $deepMenuRightContainer =
								deepMenuElementInfo.$rightRuleContainer;
							let deepMenuCreateViewElementInfo = this.createButtonControls(
								$deepMenuRightContainer,
								deepMenuElementInfo.$section,
								// @ts-ignore
								deepMenuOption,
								void 0
							);

							/** 渲染规则列表 */
							let allRuleData = await deepMenuOption.data();
							await this.addRuleElement(
								// @ts-ignore
								deepMenuOption,
								void 0,
								deepMenuElementInfo.$section,
								allRuleData
							);
						},
					});
					if (typeof result === "boolean" && !result) {
						return;
					}
				}
				this.showEditView(
					option,
					subscribeOption,
					true,
					ruleData,
					$el,
					$ruleItem,
					(newData) => {
						// @ts-ignore
						ruleData = null;
						// @ts-ignore
						ruleData = newData;
					}
				);
			});
		} else {
			$edit.remove();
		}
		if (option?.btnControls?.ruleDelete?.enable) {
			// 给删除按钮添加点击事件
			DOMUtils.on($delete, "click", (event) => {
				utils.preventEvent(event);
				let $askDialog = pops.confirm({
					title: {
						text: "提示",
						position: "center",
					},
					content: {
						text: "确定删除该条数据？",
						html: false,
					},
					btn: {
						ok: {
							enable: true,
							callback: async (popsEvent) => {
								log.success("删除数据");
								let flag =
									await option?.btnControls?.ruleDelete?.deleteCallBack(
										ruleData
									);
								if (flag) {
									Qmsg.success("成功删除该数据");
									// 移除该条元素
									$ruleItem.remove();
									// 更新左下角的删除按钮文字
									await this.updateDeleteAllBtnText(option, $el);
									$askDialog.close();
								} else {
									Qmsg.error("删除该数据失败");
								}
							},
						},
						cancel: {
							text: "取消",
							enable: true,
						},
					},
					mask: {
						enable: true,
					},
					width: "300px",
					height: "200px",
				});
			});
		} else {
			$delete.remove();
		}
		return $ruleItem;
	}
	/**
	 * 添加一个规则元素
	 * @param option 配置
	 * @param subscribeOption 订阅的配置
	 * @param $el 弹窗的元素
	 * @param data 规则的数据
	 * @param addCallBack 添加元素后的回调
	 * @returns 返回添加的元素
	 */
	async addRuleElement(
		option: RulePanelAnyOption<T>,
		subscribeOption: RulePanelSubscribeOption<T> | undefined,
		$el: ShadowRoot | HTMLElement,
		data: T | T[] | RuleSubscribeOption<T> | RuleSubscribeOption<T>[],
		addCallBack?: (data: T | RuleSubscribeOption<T>, $rule: HTMLElement) => void
	) {
		let { $container } = this.parseViewElement($el);
		let $ruleItem: HTMLElement[] = [];
		// 添加到页面中
		let iteratorData = Array.isArray(data) ? data : [data];
		let documentFragment = document.createDocumentFragment();
		for (let index = 0; index < iteratorData.length; index++) {
			let item = iteratorData[index];
			let $item = await this.createRuleElement(
				option,
				subscribeOption,
				item,
				$el
			);
			documentFragment.appendChild($item);
			addCallBack?.(item, $item);
			$ruleItem.push($item);
		}
		$container.appendChild(documentFragment);
		await this.updateDeleteAllBtnText(option, $el);
		return $ruleItem;
	}
	/**
	 * 更新弹窗内容的元素
	 * @param option 规则的配置
	 * @param subscribeOption 订阅的配置
	 * @param $el 弹窗的元素
	 */
	async updateRuleContaienrElement(
		option: RulePanelAnyOption<T>,
		subscribeOption: RulePanelSubscribeOption<T> | undefined,
		$el: ShadowRoot | HTMLElement
	) {
		this.clearContent($el);
		const { $container } = this.parseViewElement($el);
		let data = await option.data();
		await this.addRuleElement(option, subscribeOption, $el, data);
		await this.updateDeleteAllBtnText(option, $el);
	}
	/**
	 * 更新规则元素
	 * @param option 规则的配置
	 * @param subscribeOption 订阅的配置
	 * @param data 规则的数据
	 * @param $oldRule 旧的规则元素
	 * @param $el 弹窗的元素
	 */
	async updateRuleItemElement(
		option: RulePanelAnyOption<T>,
		subscribeOption: RulePanelSubscribeOption<T> | undefined,
		data: T | RuleSubscribeOption<T>,
		$oldRule: HTMLDivElement,
		$el: ShadowRoot | HTMLElement
	) {
		let $newRule = await this.createRuleElement(
			option,
			subscribeOption,
			data,
			$el
		);
		$oldRule.after($newRule);
		$oldRule.remove();
	}
	/**
	 * 清空内容
	 * @param $el 弹窗的元素
	 */
	clearContent($el: ShadowRoot | HTMLElement) {
		const { $container } = this.parseViewElement($el);
		DOMUtils.html($container, "");
	}
	/**
	 * 设置删除按钮的文字
	 * @param $el 弹窗的元素
	 * @param text 按钮的文字
	 * @param [isHTML=false] 是否是html
	 */
	setDeleteBtnText(
		$el: ShadowRoot | HTMLElement,
		text: string,
		isHTML: boolean = false
	) {
		const { $deleteBtn } = this.parseViewElement($el);
		if (isHTML) {
			DOMUtils.html($deleteBtn, text);
		} else {
			DOMUtils.text($deleteBtn, text);
		}
	}
	/**
	 * 更新【清空所有】的按钮的文字
	 * @param option 规则的配置
	 * @param $el 弹窗的元素
	 */
	async updateDeleteAllBtnText(
		option: RulePanelAnyOption<T>,
		$el: ShadowRoot | HTMLElement
	) {
		let data = await option.data();
		let dataCount = data.length;
		let text = `清空所有`;
		if (dataCount !== 0) {
			text += `(${dataCount})`;
		}
		this.setDeleteBtnText($el, text);
	}
	/**
	 * 显示编辑视图
	 * @param option 规则的配置
	 * @param subscribeOption 订阅的配置
	 * @param isEdit 是否是编辑状态
	 * @param editData 编辑的数据
	 * @param $parent 关闭弹窗后对ShadowRoot进行操作
	 * @param $ruleItem 关闭弹窗后对规则行进行更新数据
	 * @param updateDataCallBack 关闭添加/编辑弹窗的回调（不更新数据）
	 * @param submitCallBack 添加/修改提交的回调
	 */
	showEditView(
		option: RulePanelAnyOption<T>,
		subscribeOption: RulePanelSubscribeOption<T> | undefined,
		isEdit: boolean,
		editData: T | RuleSubscribeOption<T>,
		$parent?: ShadowRoot | HTMLElement,
		$ruleItem?: HTMLDivElement,
		updateDataCallBack?: (data: T | RuleSubscribeOption<T>) => void,
		submitCallBack?: (data: T | RuleSubscribeOption<T>) => void
	) {
		/**
		 * 弹窗关闭的回调函数
		 * @param isSubmit 是否是提交
		 */
		let dialogCloseCallBack = async (isSubmit: boolean) => {
			if (isSubmit) {
				if (typeof submitCallBack === "function") {
					let newData = await option.getData(
						editData as T & RuleSubscribeOption<T>
					);
					submitCallBack(newData);
				}
			} else {
				if (!isEdit) {
					// 添加规则，关闭时清理掉规则
					await option.deleteData(editData as T & RuleSubscribeOption<T>);
				}
				if (typeof updateDataCallBack === "function") {
					let newData = await option.getData(
						editData as T & RuleSubscribeOption<T>
					);
					updateDataCallBack(newData);
				}
			}
		};
		let editView = new RuleEditView<T | RuleSubscribeOption<T>>({
			title: isEdit ? "编辑" : "添加",
			data: () => {
				return editData!;
			},
			dialogCloseCallBack: dialogCloseCallBack,
			getView: async (data) => {
				return await option.btnControls?.ruleEdit?.getView?.(
					data as T & RuleSubscribeOption<T>,
					isEdit
				)!;
			},
			btn: {
				ok: {
					enable: true,
					text: isEdit ? "修改" : "添加",
				},
				cancel: {
					callback: async (detail, event) => {
						detail.close();
						await dialogCloseCallBack(false);
					},
				},
				close: {
					callback: async (detail, event) => {
						detail.close();
						await dialogCloseCallBack(false);
					},
				},
			},
			onsubmit: async ($form, data) => {
				let result = await option?.btnControls?.ruleEdit?.onsubmit?.(
					$form,
					isEdit,
					data as T & RuleSubscribeOption<T>
				)!;
				if (result.success) {
					if (isEdit) {
						Qmsg.success("修改成功");
						// 当前是编辑规则
						// 给外面的弹窗更新元素
						$parent &&
							(await this.updateRuleItemElement(
								option,
								subscribeOption,
								result.data,
								$ruleItem!,
								$parent
							));
					} else {
						// 当前是添加规则
						// 给外面的弹窗添加元素
						$parent &&
							(await this.addRuleElement(
								option,
								subscribeOption,
								$parent,
								result.data
							));
					}
				} else {
					if (isEdit) {
						Qmsg.error("修改失败");
					}
				}
				return result;
			},
			style: option?.btnControls?.ruleEdit?.style,
			width: option?.btnControls?.ruleEdit?.viewWidth,
			height: option?.btnControls?.ruleEdit?.viewHeight,
		});
		editView.showView();
	}
}
