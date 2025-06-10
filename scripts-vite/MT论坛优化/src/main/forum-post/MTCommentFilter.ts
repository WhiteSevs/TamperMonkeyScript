import { $$, GM_Menu, log, pops, utils } from "@/env";
import { MTRouter } from "@/router/MTRouter";
import { UIInput } from "@components/setting/components/ui-input";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UITextArea } from "@components/setting/components/ui-textarea";
import { PROPS_STORAGE_API } from "@components/setting/panel-config";
import { MTRegExp } from "@/utils/MTRegExp";
import { RuleEditView } from "@components/utils/RuleEditView";
import { GM_getValue, GM_setValue } from "ViteGM";

type FilterOption = {
	/**
	 * 是否启用
	 * @default true
	 */
	enable: boolean;
	/**
	 * 是否处理回复引用
	 * @default false
	 */
	replyFlag: boolean;
	/**
	 * 是否处理作者评论
	 * @default false
	 */
	avatarFlag: boolean;
	/**
	 * 是否处理从"搜索页面"或"我的帖子提醒页面"进入的网站
	 * @default false
	 */
	viewthreadFlag: boolean;
	/**
	 * 排除小于此长度的评论
	 * @default 5
	 */
	minLength: number;
	/**
	 * 大于此长度的评论就算关键字匹配成功了也不会被排除
	 * @default 8
	 */
	keywordLength: number;
	/**
	 * 带有指定关键字的评论将被排除
	 */
	keywords: string[];
	/**
	 * 黑名单用户
	 */
	userBlackList: string[];
	/**
	 * 白名单用户
	 */
	userWhiteList: string[];
};

type PostInfo = {
	userName: string;
	userUID: string;
	content: string;
	isAuthor: boolean;
};
/**
 * 评论过滤器
 */
export const MTCommentFilter = {
	$el: {
		isFilterElementHTML: <string[]>[],
	},
	$key: {
		STORAGE_KEY: "mt-post-comment-filter-rule",
	},
	init() {
		this.registerMenu();
		if (MTRouter.isPost()) {
			let allData = this.getData();
			if (!allData.enable) {
				return;
			}
			let lockFn = new utils.LockFunction(() => {
				this.runFilter(allData);
			});

			utils.mutationObserver(document, {
				config: {
					subtree: true,
					childList: true,
				},
				callback: () => {
					lockFn.run();
				},
			});
		}
	},
	/**
	 * 注册菜单
	 */
	registerMenu() {
		GM_Menu.add({
			key: "comment-filter",
			text: "⚙ 评论过滤器",
			autoReload: false,
			isStoreValue: false,
			showText(text) {
				return text;
			},
			callback: () => {
				this.showView();
			},
		});
	},
	/**
	 * 执行过滤
	 */
	runFilter(filterData: FilterOption) {
		/**
		 * 判断是否是黑名单用户
		 */
		let isBlackListUser = function (postForumInfo: PostInfo) {
			for (const userName of filterData["userBlackList"]) {
				if (
					userName == postForumInfo.userName ||
					userName == postForumInfo.userUID
				) {
					log.success("评论过滤器：黑名单用户", postForumInfo);
					return true;
				}
			}
			return false;
		};
		/**
		 * 判断是否是白名单用户
		 */
		let isWhiteListUser = function (postForumInfo: PostInfo) {
			for (const userName of filterData["userWhiteList"]) {
				/* 白名单用户 */
				if (
					userName === postForumInfo.userName ||
					userName === postForumInfo.userUID
				) {
					log.success("评论过滤器：白名单用户", postForumInfo);
					return true;
				}
			}
			return false;
		};
		$$<HTMLElement>(".comiis_vrx").forEach((item) => {
			if (item.querySelector(".plc .pti .authi .show")) {
				/* 是主内容 */
				return;
			}
			let $name = item.querySelector<HTMLAnchorElement>(".pls .authi a");
			let postForumInfo: PostInfo = {
				userName: $name?.innerText || "",
				userUID: $name?.href?.match(MTRegExp.uid)?.[2]?.trim() || "",
				content:
					item.querySelector<HTMLElement>(".plc td.t_f")?.innerText?.trim() ||
					"",
				// PC端无法实现
				isAuthor: false,
			};
			/* 判断是否是白名单用户 */
			if (isWhiteListUser(postForumInfo)) {
				return;
			}
			/* 如果是回复评论则去除别人的回复 */
			if (filterData["replyFlag"] && item.querySelector(".quote")) {
				let comiis_quote_Element = item.querySelector<HTMLElement>(".quote")!;
				this.$el.isFilterElementHTML.push(comiis_quote_Element.outerHTML);
				comiis_quote_Element.remove();
			}
			if (postForumInfo.isAuthor && !filterData["avatarFlag"]) {
				/* 当前内容是楼主发的但是不处理楼主 */
				return;
			}

			/* 判断是否是黑名单用户 */
			if (isBlackListUser(postForumInfo)) {
				this.$el.isFilterElementHTML.push(item.outerHTML);
				item.remove();
				return;
			}

			/* 排除小于此长度的评论 */
			if (
				typeof filterData["minLength"] === "number" &&
				filterData["minLength"] > postForumInfo.content.length
			) {
				return;
			}

			/* 排除大于此长度的评论 */
			if (
				typeof filterData["keywordLength"] === "number" &&
				filterData["keywordLength"] < postForumInfo.content.length
			) {
				return;
			}

			/* 关键字判断 */
			for (const keywordItem of filterData["keywords"]) {
				if (typeof keywordItem !== "string") {
					/* ？关键字不是字符串 */
					continue;
				}
				let keywordPattern = new RegExp(keywordItem);
				if (postForumInfo.content.match(keywordPattern)) {
					/* 成功匹配关键字 */
					console.log("评论过滤器：", postForumInfo);
					this.$el.isFilterElementHTML.push(item.outerHTML);
					item.remove();
					return;
				}
			}
		});
	},
	/**
	 * 显示视图
	 */
	showView() {
		const that = this;
		/**
		 * 自定义存储api的配置
		 * @param uuid
		 */
		function generateStorageApi(data: any) {
			return {
				get(key: string, defaultValue: any) {
					let localData = that.getData();
					let value = Reflect.get(localData, key, defaultValue);
					if (
						key === "keywords" ||
						key === "userWhiteList" ||
						key === "userBlackList"
					) {
						// 字符串转数组
						value = value.join("\n");
					}
					return value;
				},
				set(key: string, value: any) {
					if (
						key === "keywords" ||
						key === "userWhiteList" ||
						key === "userBlackList"
					) {
						// 字符串转数组
						value = value
							.split("\n")
							.filter((item: string) => item.trim() != "");
					}
					Reflect.set(data, key, value);
					that.setData(data);
				},
			};
		}
		let popsPanelContentUtils = pops.config.panelHandleContentUtils();
		let view = new RuleEditView({
			title: "评论过滤器",
			data: () => {
				return this.getData();
			},
			getView: (data) => {
				let $fragment = document.createDocumentFragment();

				// 启用
				let enable_template = UISwitch("启用", "enable", true);
				Reflect.set(
					enable_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(data)
				);
				let $enable =
					popsPanelContentUtils.createSectionContainerItem_switch(
						enable_template
					);

				// 是否处理回复引用
				let replyFlag_template = UISwitch(
					"处理回复引用",
					"replyFlag",
					false,
					void 0,
					"移除引用"
				);
				Reflect.set(
					replyFlag_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(data)
				);
				let $replyFlag =
					popsPanelContentUtils.createSectionContainerItem_switch(
						replyFlag_template
					);

				// 是否处理作者评论
				let avatarFlag_template = UISwitch("处理作者评论", "avatarFlag", false);
				Reflect.set(
					avatarFlag_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(data)
				);
				let $avatarFlag =
					popsPanelContentUtils.createSectionContainerItem_switch(
						avatarFlag_template
					);
				// 是否处理从"搜索页面"或"我的帖子提醒页面"进入的网站
				let viewthreadFlag_template = UISwitch(
					'处理从"搜索页面"或"我的帖子提醒页面"进入的网站',
					"viewthreadFlag",
					false
				);
				Reflect.set(
					viewthreadFlag_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(data)
				);
				let $viewthreadFlag =
					popsPanelContentUtils.createSectionContainerItem_switch(
						viewthreadFlag_template
					);

				let minLength_template = UIInput(
					"匹配的评论内容长度最小值",
					"minLength",
					5,
					"小于此长度的评论就算关键字匹配成功了也不会被排除",
					void 0,
					"",
					true
				);
				Reflect.set(
					minLength_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(data)
				);
				let $minLength =
					popsPanelContentUtils.createSectionContainerItem_input(
						minLength_template
					);

				let keywordLength = UIInput(
					"匹配的评论内容长度最大值",
					"keywordLength",
					8,
					"大于此长度的评论就算关键字匹配成功了也不会被排除",
					void 0,
					"",
					true
				);
				Reflect.set(
					keywordLength.props!,
					PROPS_STORAGE_API,
					generateStorageApi(data)
				);
				let $keywordLength =
					popsPanelContentUtils.createSectionContainerItem_input(keywordLength);

				let keywords_template = UITextArea(
					"评论关键字",
					"keywords",
					"",
					"多个评论关键字换行分割",
					void 0
				);

				Reflect.set(
					keywords_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(data)
				);
				let $keywords =
					popsPanelContentUtils.createSectionContainerItem_textarea(
						keywords_template
					);

				let userBlackList_template = UITextArea(
					"黑名单用户",
					"userBlackList",
					"",
					"多个用户换行分割",
					void 0
				);
				Reflect.set(
					userBlackList_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(data)
				);
				let $userBlackList =
					popsPanelContentUtils.createSectionContainerItem_textarea(
						userBlackList_template
					);
				let userWhiteList_template = UITextArea(
					"白名单用户",
					"userWhiteList",
					"",
					"多个用户换行分割",
					void 0
				);
				Reflect.set(
					userWhiteList_template.props!,
					PROPS_STORAGE_API,
					generateStorageApi(data)
				);
				let $userWhiteList =
					popsPanelContentUtils.createSectionContainerItem_textarea(
						userWhiteList_template
					);

				$fragment.append(
					$enable,
					$replyFlag,
					$avatarFlag,
					$viewthreadFlag,
					$minLength,
					$keywordLength,
					$keywords,
					$userBlackList,
					$userWhiteList
				);

				return $fragment;
			},
			btn: {
				merge: true,
				position: "space-between",
				ok: {
					enable: false,
				},
				cancel: {
					enable: true,
					text: "关闭",
				},
				other: {
					enable: true,
					text: `查看已过滤（${this.$el.isFilterElementHTML.length}）`,
					type: "primary",
					callback: (details, event) => {
						let $alert = pops.alert({
							title: {
								text: "评论过滤器-已过滤",
								position: "center",
							},
							content: {
								text: /*html*/ `
                                ${Array.from(
																	document.querySelectorAll(
																		'link[rel="stylesheet"]'
																	)
																)
																	.map((item) => item.outerHTML)
																	.join("\n")}

                                ${this.$el.isFilterElementHTML.join("\n")}
                                `,
								html: true,
							},
							mask: {
								enable: true,
							},
							style: /*css*/ `
							.plhin{
								width: 100%;
							}
							td.plc .pi{
								height: auto;
							}
							`,
							width: "88vw",
							height: "80vh",
						});
					},
				},
			},
			dialogCloseCallBack(isSubmit) {},
			onsubmit: ($form, data) => {
				return {
					success: true,
					data: data,
				};
			},
			style: /*css*/ `
            .pops-panel-item-left-desc-text{
                line-height: normal;
                margin-top: 6px;
                font-size: 0.8em;
                color: rgb(108, 108, 108);
            }
            .pops-panel-item-left-main-text{
                max-width: unset;
            }
            .pops-panel-textarea textarea{
                height: 150px;
            }
            `,
		});
		view.showView();
	},
	/**
	 * 获取模板数据
	 */
	getTemplateData(): FilterOption {
		return {
			enable: true,
			avatarFlag: false,
			replyFlag: false,
			viewthreadFlag: false,
			minLength: 5,
			keywordLength: 8,
			keywords: [],
			userBlackList: [],
			userWhiteList: [],
		};
	},
	/**
	 * 获取数据
	 */
	getData() {
		return GM_getValue<FilterOption>(
			this.$key.STORAGE_KEY,
			this.getTemplateData()
		);
	},
	/**
	 * 设置数据
	 */
	setData(data: FilterOption) {
		GM_setValue(this.$key.STORAGE_KEY, data);
	},
};
