import { DOMUtils, log, pops, utils } from "@/env";
import i18next from "i18next";
import Qmsg from "qmsg";
import { GreasyforkMenu } from "./GreasyforkMenu";
import { GreasyforkApi } from "@/api/GreasyForkApi";

export const GreasyforkCollection = {
	init() {
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
				DOMUtils.append(
					document.querySelector<HTMLUListElement>("ul#script-links")!,
					$collectBtn
				);
				DOMUtils.on($collectBtn, "click", () => {
					this.clickEvent();
				});
			});
	},
	async clickEvent() {
		let scriptIdMatch = window.location.pathname.match(/scripts\/([\d]+)/i);
		if (!scriptIdMatch) {
			log.error([scriptIdMatch, window.location.pathname]);
			Qmsg.error(i18next.t("获取脚本id失败"));
			return;
		}
		let scriptId = scriptIdMatch[scriptIdMatch.length - 1];
		log.info("当前脚本id：" + scriptId);
		if (!GreasyforkMenu.isLogin) {
			log.error("请先登录账号");
			Qmsg.error(i18next.t("请先登录账号"));
			return;
		}
		let userId = GreasyforkApi.getUserId(
			GreasyforkMenu.getUserLinkElement()!.href
		);
		if (userId == null) {
			log.error("获取用户id失败");
			Qmsg.error(i18next.t("获取用户id失败"));
			return;
		}
		let loading = Qmsg.loading(i18next.t("获取收藏夹中..."));
		let userCollection = await GreasyforkApi.getUserCollection(userId);
		loading.close();
		if (!userCollection) {
			return;
		}
		let alertHTML = "";
		userCollection.forEach((userCollectInfo) => {
			alertHTML += `
            <li class="user-collect-item" data-id="${
							userCollectInfo.id
						}" data-name="${userCollectInfo.name}">
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
				text: `<ul>${alertHTML}</ul>`,
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
			width: pops.isPhone() ? "92dvw" : "500px",
			height: "auto",
			drag: true,
			only: true,
			style: `
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
				let formData = await GreasyforkApi.getUserCollectionInfo(
					userId,
					setsId
				);
				if (!formData) {
					loading.close();
					return;
				}
				let editForm = utils.cloneFormData(formData);
				let saveEditForm = utils.cloneFormData(formData);
				editForm.set("add-script", scriptId);
				editForm.set("script-action", "i");
				saveEditForm.append("scripts-included[]", scriptId);
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
				log.info(["添加的数据", addData]);
				log.info(["保存的数据", saveData]);
				let addResult = await GreasyforkApi.updateUserSetsInfo(
					userId,
					setsId,
					addData
				);
				if (!addResult) {
					loading.close();
					return;
				}
				let changeScriptSet =
					addResult.querySelector<HTMLElement>(".change-script-set");
				if (!changeScriptSet) { 
					Qmsg.error(
						i18next.t("添加失败，{{selector}}元素不存在", {
							selector: ".change-script-set",
						})
					);
					loading.close();
					return;
				}
				let section = changeScriptSet.querySelector<HTMLElement>("section");
				if (!section) {
					Qmsg.error(
						i18next.t("添加失败，{{selector}}元素不存在", {
							selector: "section",
						})
					);
					loading.close();
					return;
				}
				let alertElement = section.querySelector(".alert");
				if (alertElement) {
					pops.alert({
						title: {
							text: i18next.t("添加失败"),
							position: "center",
						},
						content: {
							text: alertElement.innerHTML,
							html: true,
						},
						mask: {
							enable: true,
							clickEvent: {
								toClose: true,
							},
						},
						style: `
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
						width: pops.isPhone() ? "88vw" : "400px",
						height: pops.isPhone() ? "50vh" : "300px",
					});
				} else {
					await GreasyforkApi.updateUserSetsInfo(userId, setsId, saveData);
					Qmsg.success(i18next.t("添加成功"));
				}
				loading.close();
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
				let formData = await GreasyforkApi.getUserCollectionInfo(
					userId,
					setsId
				);
				if (!formData) {
					loading.close();
					return;
				}
				let editForm = new FormData();
				let saveEditForm = new FormData();
				for (const [key, value] of (formData as any).entries()) {
					if (
						key === "scripts-included[]" &&
						JSON.stringify(value) == JSON.stringify(scriptId)
					) {
						continue;
					} else {
						saveEditForm.append(key, value);
						editForm.append(key, value);
					}
				}
				editForm.set("remove-scripts-included[]", scriptId);
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
				log.info(["删除的数据", removeData]);
				log.info(["保存的数据", saveData]);
				let removeResult = await GreasyforkApi.updateUserSetsInfo(
					userId,
					setsId,
					removeData
				);
				if (!removeResult) {
					loading.close();
					return;
				}
				await GreasyforkApi.updateUserSetsInfo(userId, setsId, saveData);
				Qmsg.success(i18next.t("删除成功"));
				loading.close();
			}
		);
	},
};
