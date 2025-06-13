import { GreasyforkApi } from "@/api/GreasyForkApi";
import { $, addStyle, DOMUtils, httpx, log, pops, utils } from "@/env";
import { GreasyforkMenu } from "@/main/GreasyforkMenu";
import { GreasyforkRouter } from "@/router/GreasyforkRouter";
import { Panel } from "@components/setting/panel";
import i18next from "i18next";
import Qmsg from "qmsg";
import { GreasyforkScriptsCode } from "./code/GreasyforkScriptsCode";
import { unsafeWindow } from "ViteGM";
import { GreasyforkVersions } from "./versions/GreasyforkVersions";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import { PanelUISize } from "@components/setting/panel-ui-size";

let userCollection: {
	id: string;
	name: string;
}[] = [];
export const GreasyforkScriptsCollectEvent = async function (
	scriptId: string | number
) {
	log.info("当前脚本id：" + scriptId);
	if (!GreasyforkMenu.isLogin) {
		log.error("请先登录账号");
		Qmsg.error(i18next.t("请先登录账号"));
		return;
	}
	let userId = GreasyforkUrlUtils.getUserId(
		GreasyforkMenu.getUserLinkElement()!.href
	);
	if (userId == null) {
		log.error("获取用户id失败");
		Qmsg.error(i18next.t("获取用户id失败"));
		return;
	}
	if (!userCollection.length) {
		let loading = Qmsg.loading(i18next.t("获取收藏夹中..."));
		userCollection = (await GreasyforkApi.getUserCollection(userId)) || [];
		loading.close();
		if (!userCollection.length) {
			return;
		}
	}
	let alertHTML = "";

	/**
	 * 检测收藏夹表单数据中是否包含某个脚本
	 */
	const checkFavoriteFormInfo = (form: FormData, scriptId: string | number) => {
		let flag = false;
		scriptId = scriptId.toString().trim();
		// @ts-ignore
		for (const [key, value] of form.entries()) {
			if (
				key === "scripts-included[]" &&
				value.toString().trim() === scriptId
			) {
				flag = true;
				break;
			}
		}
		return flag;
	};
	userCollection.forEach((userCollectInfo) => {
		alertHTML += /*html*/ `
		<li class="user-collect-item" data-id="${userCollectInfo.id}" data-name="${
			userCollectInfo.name
		}">
			<div class="user-collect-name">${userCollectInfo.name}</div>
			<div class="user-collect-btn-container">
			<div class="pops-panel-button collect-add-script-id">
				<button type="primary" data-icon="" data-righticon="">
				<span>${i18next.t("添加")}</span>
				</button>
			</div>
			<div class="pops-panel-button collect-delete-script-id">
				<button type="danger" data-icon="" data-righticon="">
				<span>${i18next.t("刪除")}</span>
				</button>
			</div>
			</div>
		</li>
		  `;
	});
	let collectionDialog = pops.alert({
		title: {
			text: i18next.t("收藏集"),
			position: "center",
		},
		content: {
			html: true,
			text: /*html*/ `<ul>${alertHTML}</ul>`,
		},
		mask: {
			enable: true,
			clickEvent: {
				toClose: true,
			},
		},
		btn: {
			ok: {
				enable: false,
			},
		},
		width: pops.isPhone() ? "92vw" : "500px",
		height: "auto",
		drag: true,
		only: true,
		style: /*css*/ `
		.pops{
			--content-max-height: 400px;
			max-height: var(--content-max-height);
		}
		.pops[type-value=alert] .pops-alert-content {
			max-height: calc(var(--content-max-height) - var(--container-title-height) - var(--container-bottom-btn-height));
		}
		.user-collect-item{
			-webkit-user-select: none;
			user-select: none;
			padding: 5px 10px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px dotted #c9c9c9;
		}
		.user-collect-name{

		}
		.user-collect-item:hover{
			
		}
		.user-collect-btn-container{
			margin-left: 10px;
			display: flex;
		}
		`,
	});
	/* 添加事件 */
	DOMUtils.on<PointerEvent | MouseEvent>(
		collectionDialog.$shadowRoot as any,
		"click",
		".collect-add-script-id",
		async function (event) {
			let $userCollectItem = (event.target as HTMLLIElement).closest(
				".user-collect-item"
			) as HTMLElement;
			let setsId = $userCollectItem.dataset.id as string;
			let setsName = $userCollectItem.dataset.name;
			let loading = Qmsg.loading(i18next.t("添加中..."));
			try {
				let formData = await GreasyforkApi.getUserCollectionInfo(
					userId,
					setsId
				);
				if (!formData) {
					return;
				}
				if (checkFavoriteFormInfo(formData, scriptId)) {
					Qmsg.warning(i18next.t("该脚本已经在该收藏集中"));
					return;
				}
				let editForm = utils.cloneFormData(formData);
				let saveEditForm = utils.cloneFormData(formData);
				editForm.set("add-script", scriptId.toString());
				editForm.set("script-action", "i");
				saveEditForm.append("scripts-included[]", scriptId.toString());
				saveEditForm.set("save", "1");
				let addFormDataSearchParams = new URLSearchParams(editForm as any);
				let saveFormDataSearchParams = new URLSearchParams(saveEditForm as any);
				let addData = Array.from(addFormDataSearchParams as any)
					.map(
						// @ts-ignore
						([key, value]) =>
							`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
					)
					.join("&");
				let saveData = Array.from(saveFormDataSearchParams as any)
					.map(
						// @ts-ignore
						([key, value]) =>
							`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
					)
					.join("&");
				log.info("添加的数据", addData);
				log.info("保存的数据", saveData);
				let changeResultDoc = await GreasyforkApi.updateUserSetsInfo(
					userId,
					setsId,
					addData
				);
				if (!changeResultDoc) {
					return;
				}
				let $changeScriptSet =
					changeResultDoc.querySelector<HTMLFormElement>(".change-script-set");
				if (!$changeScriptSet) {
					Qmsg.error(
						i18next.t("添加失败，{{selector}}元素不存在", {
							selector: ".change-script-set",
						})
					);
					return;
				}
				let $section = $changeScriptSet.querySelector<HTMLElement>("section");
				if (!$section) {
					Qmsg.error(
						i18next.t("添加失败，{{selector}}元素不存在", {
							selector: "section",
						})
					);
					return;
				}
				let $alertElement = $section.querySelector(".alert");
				if ($alertElement) {
					pops.alert({
						title: {
							text: i18next.t("添加失败"),
							position: "center",
						},
						content: {
							text: $alertElement.innerHTML,
							html: true,
						},
						mask: {
							enable: true,
							clickEvent: {
								toClose: true,
							},
						},
						style: /*css*/ `
						.pops-alert-content{
							font-style: italic;
							background-color: #ffc;
							border: none;
							border-left: 6px solid #FFEB3B;
							padding: .5em;
						}
						`,
						drag: true,
						dragLimit: true,
						width: PanelUISize.info.width,
						height: PanelUISize.info.height,
					});
					return;
				}
				let changeScriptForm = new FormData($changeScriptSet);
				let changeFlag = checkFavoriteFormInfo(changeScriptForm, scriptId);
				if (!changeFlag) {
					log.error("添加失败，提交的添加请求中不包含该脚本id");
					Qmsg.error(i18next.t("添加失败，表单数据中不包含该脚本"));
					return;
				}
				await GreasyforkApi.updateUserSetsInfo(userId, setsId, saveData);
				Qmsg.success(i18next.t("添加成功"));
			} catch (error) {
				console.error(error);
			} finally {
				loading.close();
			}
		}
	);
	/* 删除事件 */
	DOMUtils.on<MouseEvent | PointerEvent>(
		collectionDialog.$shadowRoot as any,
		"click",
		".collect-delete-script-id",
		async function (event) {
			let $collectItem = (event.target as HTMLElement).closest(
				".user-collect-item"
			) as HTMLLIElement;
			let setsId = $collectItem.dataset.id as string;
			let setsName = $collectItem.dataset.name;
			let loading = Qmsg.loading(i18next.t("删除中..."));
			try {
				let formData = await GreasyforkApi.getUserCollectionInfo(
					userId,
					setsId
				);
				if (!formData) {
					return;
				}
				if (!checkFavoriteFormInfo(formData, scriptId)) {
					Qmsg.info(
						i18next.t("已删除：{{scriptId}}", {
							scriptId: scriptId,
						})
					);
					return;
				}

				let editForm = utils.cloneFormData(formData, (key, value) => {
					return (
						key === "scripts-included[]" &&
						typeof value === "string" &&
						value.toString().trim() === scriptId.toString().trim()
					);
				});
				let saveEditForm = utils.cloneFormData(editForm);
				editForm.set("remove-scripts-included[]", scriptId.toString());
				editForm.set("remove-selected-scripts", "i");
				editForm.delete("script-action");
				saveEditForm.set("save", "1");
				let deleteFormDataSearchParams = new URLSearchParams(editForm as any);
				let saveFormDataSearchParams = new URLSearchParams(saveEditForm as any);
				let removeData = Array.from(deleteFormDataSearchParams as any)
					.map(
						// @ts-ignore
						([key, value]) =>
							`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
					)
					.join("&");
				let saveData = Array.from(saveFormDataSearchParams as any)
					.map(
						// @ts-ignore
						([key, value]) =>
							`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
					)
					.join("&");
				log.info("删除的数据", removeData);
				log.info("保存的数据", saveData);
				let changeResultDoc = await GreasyforkApi.updateUserSetsInfo(
					userId,
					setsId,
					removeData
				);
				if (!changeResultDoc) {
					return;
				}
				let $changeScriptSet =
					changeResultDoc.querySelector<HTMLFormElement>(".change-script-set");

				if (!$changeScriptSet) {
					Qmsg.error(
						i18next.t("删除失败，{{selector}}元素不存在", {
							selector: ".change-script-set",
						})
					);
					return;
				}
				let changeScriptForm = new FormData($changeScriptSet);
				let changeFlag = checkFavoriteFormInfo(changeScriptForm, scriptId);
				if (changeFlag) {
					log.error("删除失败，提交的删除请求中包含该脚本id");
					Qmsg.error(i18next.t("删除失败，表单数据中仍包含该脚本"));
					return;
				}
				await GreasyforkApi.updateUserSetsInfo(userId, setsId, saveData);
				Qmsg.success(i18next.t("删除成功"));
			} catch (error) {
				console.error(error);
			} finally {
				loading.close();
			}
		}
	);
};

export const GreasyforkScripts = {
	init() {
		if (GreasyforkRouter.isCode()) {
			GreasyforkScriptsCode.init();
		} else if (GreasyforkRouter.isVersion()) {
			GreasyforkVersions.init();
		}
		if (GreasyforkRouter.isCodeStrict()) {
			Panel.execMenuOnce("fullScreenOptimization", () => {
				this.fullScreenOptimization();
			});
			Panel.execMenuOnce("addCopyCodeButton", () => {
				this.addCopyCodeButton();
			});
		}
		Panel.execMenuOnce("addCollectionButton", () => {
			this.addCollectionButton();
		});
		Panel.execMenuOnce("addFindReferenceButton", () => {
			this.setFindCodeSearchBtn();
		});
		DOMUtils.ready(() => {
			Panel.execMenuOnce("scriptHomepageAddedTodaySUpdate", () => {
				this.scriptHomepageAddedTodaySUpdate();
			});
		});
	},
	/**
	 * 添加【收藏】按钮
	 */
	addCollectionButton() {
		log.info("添加收藏按钮");
		utils
			.waitNode<HTMLSpanElement>("ul#script-links li.current span")
			.then(() => {
				let $collectBtn = DOMUtils.createElement("li", {
					innerHTML: `
					<a href="javascript:;">
						<span>${i18next.t("收藏")}</span>
					</a>`,
				});
				DOMUtils.append($<HTMLUListElement>("ul#script-links")!, $collectBtn);
				DOMUtils.on($collectBtn, "click", () => {
					let scriptIdMatch =
						window.location.pathname.match(/scripts\/([\d]+)/i);
					if (!scriptIdMatch) {
						log.error(scriptIdMatch, window.location.pathname);
						Qmsg.error(i18next.t("获取脚本id失败"));
						return;
					}
					let scriptId = scriptIdMatch[scriptIdMatch.length - 1];
					GreasyforkScriptsCollectEvent(scriptId);
				});
			});
	},
	/**
	 * F11全屏，F键代码全屏
	 */
	fullScreenOptimization() {
		log.info("F11全屏，F键代码全屏");
		addStyle(/*css*/ `
		.code-container:has(.code-wide-screen){
			height: auto !important;
		}
        .code-wide-screen{
			position: absolute !important;
			top: 0 !important;
			left: 0 !important;
			right: 0 !important;
			bottom: 0 !important;
			margin: 0 !important;
			padding: 0 !important;
			width: 100% !important;
			height: 100% !important;
			min-width: 100% !important;
			min-height: 100% !important;
			max-width: 100% !important;
			max-height: 100% !important;
			z-index: 1000000 !important;
        }
        `);
		let isFullScreen = false;
		DOMUtils.keydown(
			unsafeWindow,
			function (event) {
				if (event.key.toLowerCase() === "f") {
					let $code =
						$<HTMLElement>(".monaco-editor") ||
						$<HTMLElement>("#script-content div.code-container code");
					if (event.altKey && event.shiftKey) {
						log.info(`宽屏`);
						utils.preventEvent(event);
						if ($code!.classList.contains("code-wide-screen")) {
							/* 当前处于宽屏状态，退出宽屏 */
							$code!.classList.remove("code-wide-screen");
						} else {
							/* 进入宽屏 */
							$code!.classList.add("code-wide-screen");
						}
					} else if (
						!event.altKey &&
						!event.ctrlKey &&
						!event.shiftKey &&
						!event.metaKey
					) {
						log.info(`全屏`);
						utils.preventEvent(event);
						if (isFullScreen) {
							/* 退出全屏 */
							utils.exitFullScreen($code as HTMLElement);
							isFullScreen = false;
						} else {
							/* 进入全屏 */
							utils.enterFullScreen($code as HTMLElement);
							isFullScreen = true;
						}
					}
				}
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 设置代码搜索按钮(对于库)
	 */
	setFindCodeSearchBtn() {
		log.info("设置代码搜索按钮(对于库)");
		utils
			.waitNode<HTMLSpanElement>("ul#script-links li.current span")
			.then(() => {
				let searchBtn = DOMUtils.createElement("li", {
					innerHTML: `
					<a href="javascript:;">
						<span>${i18next.t("寻找引用")}</span>
					</a>`,
				});
				DOMUtils.append(
					$<HTMLUListElement>("ul#script-links") as HTMLUListElement,
					searchBtn
				);
				DOMUtils.on(searchBtn, "click", async function () {
					let scriptIdMatch =
						window.location.pathname.match(/scripts\/([\d]+)/i);
					if (!scriptIdMatch) {
						log.error(scriptIdMatch, window.location.pathname);
						Qmsg.error(i18next.t("获取脚本id失败"));
						return;
					}
					let scriptId = scriptIdMatch[scriptIdMatch.length - 1];
					window.location.href = GreasyforkUrlUtils.getCodeSearchUrl(
						`/scripts/${scriptId}`
					);
				});
			});
	},
	/**
	 * 脚本首页新增【今日检查】
	 */
	async scriptHomepageAddedTodaySUpdate() {
		if (!$("#install-area")) {
			return;
		}
		log.info("脚本首页新增【今日检查】");
		let scriptStatsJSON = await GreasyforkApi.getScriptStats(
			GreasyforkUrlUtils.getScriptId() as string
		);
		if (!scriptStatsJSON) {
			return;
		}
		log.info("统计信息", scriptStatsJSON);
		let todayStatsJSON =
			scriptStatsJSON[utils.formatTime(void 0, "yyyy-MM-dd")];
		if (!todayStatsJSON) {
			log.error("今日份的统计信息不存在");
			return;
		}
		let update_checks = todayStatsJSON["update_checks"];
		log.info("今日统计信息", todayStatsJSON);
		DOMUtils.after(
			"dd.script-show-daily-installs",
			DOMUtils.createElement("dt", {
				className: "script-show-daily-update_checks",
				innerHTML: `<span>${i18next.t("今日检查")}</span>`,
			})
		);
		DOMUtils.after(
			"dt.script-show-daily-update_checks",
			DOMUtils.createElement("dd", {
				className: "script-show-daily-update_checks",
				innerHTML: "<span>" + update_checks + "</span>",
			})
		);
	},
	/**
	 * 添加复制代码按钮
	 */
	addCopyCodeButton() {
		log.info("添加复制代码按钮");
		utils
			.waitNode<HTMLDivElement>("div#script-content div.code-container")
			.then(($codeContainer) => {
				let copyButton = DOMUtils.createElement(
					"button",
					{
						textContent: i18next.t("复制代码"),
					},
					{
						style: "margin-bottom: 1em;",
					}
				);
				DOMUtils.on(copyButton, "click", async function () {
					let loading = Qmsg.loading(i18next.t("加载文件中..."));
					let scriptId = GreasyforkUrlUtils.getScriptId();
					let scriptInfo = await GreasyforkApi.getScriptInfo(scriptId!);
					if (!scriptInfo) {
						loading.close();
						return;
					}
					let code_url = scriptInfo["code_url"];
					log.success("代码地址：", code_url);
					let scriptJS = await httpx.get(code_url);
					if (!scriptJS.status) {
						loading.close();
						return;
					}
					loading.close();
					utils.setClip(scriptJS.data.responseText);
					Qmsg.success(i18next.t("复制成功"));
				});
				DOMUtils.before($codeContainer, copyButton);
			});
	},
};
