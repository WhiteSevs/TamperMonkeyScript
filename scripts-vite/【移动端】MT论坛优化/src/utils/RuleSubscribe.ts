import { DOMUtils, httpx, log, pops, utils } from "@/env";
import type { RuleSubscribeOption } from "./RulePanelView";
import { StorageUtils } from "./StorageUtils";
import { PanelUISize } from "@/setting/panel-ui-size";
import Qmsg from "qmsg";

type RuleSubscribeConstructOption = {
	/**
	 * 存储的主键名
	 */
	STORAGE_API_KEY: string;
	/**
	 * 存储的键名
	 */
	STORAGE_KEY: string;
};

export class RuleSubscribe<
	T extends {
		/** 唯一键 */
		uuid: string;
		/** 订阅的uuid */
		subscribeUUID: string | null;
		/** 是否启用 */
		enable: boolean;
	}
> {
	option;
	storageApi;
	constructor(option: RuleSubscribeConstructOption) {
		this.option = option;
		this.storageApi = new StorageUtils(option.STORAGE_API_KEY);
	}
	/**
	 * 获取所有订阅
	 */
	getAllSubscribe() {
		let allSubscribe = this.storageApi.get<RuleSubscribeOption<T>[]>(
			this.option.STORAGE_KEY,
			[]
		);
		return allSubscribe;
	}
	/**
	 * 获取所有订阅内的所有的规则
	 * @param [filterUnEnable=false] 是否过滤掉未启用的规则（包括订阅）
	 */
	getAllSubscribeRule(filterUnEnable = false) {
		let allSubscribe = this.getAllSubscribe();
		let allSubscribeRule: T[] = [];
		for (let index = 0; index < allSubscribe.length; index++) {
			const subscribeItem = allSubscribe[index];
			if (filterUnEnable && !subscribeItem.data.enable) {
				// 未启用
				continue;
			}
			for (
				let subscribeIndex = 0;
				subscribeIndex < subscribeItem.subscribeData.ruleData.length;
				subscribeIndex++
			) {
				const subscribeRuleData =
					subscribeItem.subscribeData.ruleData[subscribeIndex];
				if (filterUnEnable && !subscribeRuleData.enable) {
					// 未启用
					continue;
				}
				// 赋值订阅的uuid
				subscribeRuleData.subscribeUUID = subscribeItem.uuid;
				allSubscribeRule.push(subscribeRuleData);
			}
		}
		return allSubscribeRule;
	}
	/**
	 * 获取某个订阅
	 * @param subscribeUUID 订阅的uuid
	 */
	getSubscribe(subscribeUUID: string) {
		let findValue = this.getAllSubscribe().find(
			(rule) => rule.uuid == subscribeUUID
		);
		return findValue;
	}
	/**
	 * 获取某个订阅的规则
	 * @param subscribeUUID 订阅的uuid
	 * @param uuid 规则的uuid
	 */
	getSubscribeRule(subscribeUUID: string, uuid: string) {
		let findSubscribe = this.getSubscribe(subscribeUUID);
		if (findSubscribe) {
			let findRule = findSubscribe.subscribeData.ruleData.find(
				(rule) => rule.uuid === uuid
			);
			return findRule;
		}
	}
	/**
	 * 删除所有订阅
	 */
	deleteAllSubscribe() {
		this.storageApi.delete(this.option.STORAGE_KEY);
	}
	/**
	 * 删除某个订阅
	 * @param config 配置/uuid
	 */
	deleteSubscribe(config: RuleSubscribeOption<T> | string) {
		let uuid = typeof config === "string" ? config : config.uuid;
		let allSubscribe = this.getAllSubscribe();
		let findIndex = allSubscribe.findIndex(
			(subscribeItem) => subscribeItem.uuid === uuid
		);
		if (findIndex !== -1) {
			allSubscribe.splice(findIndex, 1);
			this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
		}
		return findIndex !== -1;
	}
	/**
	 * 清空某个订阅内的规则
	 */
	clearSubscribe(config: RuleSubscribeOption<T> | string) {
		let uuid = typeof config === "string" ? config : config.uuid;
		let allSubscribe = this.getAllSubscribe();
		let findIndex = allSubscribe.findIndex(
			(subscribeItem) => subscribeItem.uuid === uuid
		);
		if (findIndex !== -1) {
			allSubscribe[findIndex].subscribeData.ruleData = [];
			this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
			return true;
		} else {
			return false;
		}
	}
	/**
	 * 新增某个订阅
	 */
	addSubscribe(subscribe: RuleSubscribeOption<T>) {
		let flag = false;
		let allSubscribe = this.getAllSubscribe();
		let findIndex = allSubscribe.findIndex(
			(subscribeItem) => subscribeItem.uuid === subscribe.uuid
		);
		if (findIndex === -1) {
			// 不存在
			allSubscribe.push(subscribe);
			flag = true;
		} else {
			// 存在相同uuid
		}
		if (flag) {
			this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
		}
		return flag;
	}
	/**
	 * 更新某个订阅
	 */
	updateSubscribe(subscribe: RuleSubscribeOption<T>) {
		let flag = false;
		let allSubscribe = this.getAllSubscribe();
		let findIndex = allSubscribe.findIndex(
			(subscribeItem) => subscribeItem.uuid === subscribe.uuid
		);
		if (findIndex !== -1) {
			// 存在相同uuid，更新数据
			allSubscribe[findIndex] = subscribe;
			flag = true;
		} else {
			// 不存在
		}
		if (flag) {
			this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
		}
		return flag;
	}
	/**
	 * 更新某个订阅内的某个规则
	 */
	updateSubscribeRule(
		subscribeUUID: string,
		rule: RuleSubscribeOption<T>["subscribeData"]["ruleData"]["0"]
	) {
		let flag = false;
		let allSubscribe = this.getAllSubscribe();
		let targetSubscribe = allSubscribe.find(
			(subscribeItem) => subscribeItem.uuid === subscribeUUID
		);
		if (targetSubscribe) {
			// 找到目标订阅
			let findRuleIndex = targetSubscribe.subscribeData.ruleData.findIndex(
				(ruleItem) => ruleItem.uuid === rule.uuid
			);
			if (findRuleIndex !== -1) {
				// 找到目标规则
				targetSubscribe.subscribeData.ruleData[findRuleIndex] = rule;
				flag = true;
			}
		}
		if (flag) {
			this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
		}
		return true;
	}
	/**
	 * 删除某个订阅内的某个规则
	 * @param  subscribeUUID 订阅的uuid
	 * @param  rule 规则
	 */
	deleteSubscribeRule(
		subscribeUUID: string,
		rule: RuleSubscribeOption<T>["subscribeData"]["ruleData"]["0"]
	) {
		let flag = false;
		let allSubscribe = this.getAllSubscribe();
		let findIndex = allSubscribe.findIndex(
			(subscribeItem) => subscribeItem.uuid === subscribeUUID
		);
		if (findIndex !== -1) {
			let targetSubscribe = allSubscribe[findIndex];
			let findRuleIndex = targetSubscribe.subscribeData.ruleData.findIndex(
				(ruleItem) => ruleItem.uuid === rule.uuid
			);
			if (findRuleIndex !== -1) {
				allSubscribe[findIndex].subscribeData.ruleData.splice(findRuleIndex, 1);
				this.storageApi.set(this.option.STORAGE_KEY, allSubscribe);
				flag = true;
			}
		}

		return flag;
	}
	/**
	 * 获取订阅链接的数据信息
	 * @param url 订阅链接
	 */
	async getSubscribeInfo(url: string) {
		let response = await httpx.get(url, {
			allowInterceptConfig: false,
			timeout: 10000,
			headers: {
				"User-Agent": utils.getRandomPCUA(),
			},
		});
		if (!response.status) {
			log.error(response);
			return {
				data: null,
				msg: "获取订阅信息失败",
			};
		}
		let subscribeText = response.data.responseText;
		let subscribeParsedData =
			utils.toJSON<RuleSubscribeOption<T>["subscribeData"]>(subscribeText);
		if (
			typeof subscribeParsedData.title === "string" &&
			typeof subscribeParsedData.version === "number" &&
			typeof subscribeParsedData.lastModified === "number" &&
			Array.isArray(subscribeParsedData.ruleData)
		) {
			/** 用于存储的数据 */
			let subscribeInfo: RuleSubscribeOption<T> = {
				uuid: utils.generateUUID(),
				subscribeData: subscribeParsedData,
				data: {
					enable: true,
					url: url,
					latestUpdateTime: Date.now(),
					updateFailedTime: null,
				},
			};
			return {
				data: subscribeInfo,
				msg: "",
			};
		} else {
			log.error(subscribeParsedData);
			return {
				data: null,
				msg: "订阅链接的内容格式不正确",
			};
		}
	}
	/**
	 * 更新所有订阅
	 */
	async updateAllSubscribe() {
		let allSubscribe = this.getAllSubscribe();
		for (let index = 0; index < allSubscribe.length; index++) {
			const subscribeItem = allSubscribe[index];
			if (!subscribeItem.data.enable) {
				// 未启用，不更新
				continue;
			}
			if (
				typeof subscribeItem.data.updateFailedTime === "number" &&
				utils.formatTime(subscribeItem.data.updateFailedTime, "yyyyMMdd") ===
					utils.formatTime(Date.now(), "yyyyMMdd")
			) {
				// 今天更新失败，今天不再更新
				continue;
			}
			if (
				typeof subscribeItem.data.latestUpdateTime === "number" &&
				utils.formatTime(Date.now(), "yyyyMMdd") ===
					utils.formatTime(subscribeItem.data.latestUpdateTime, "yyyyMMdd")
			) {
				// 今天已更新
				continue;
			}
			let requestSubscribeInfo = await this.getSubscribeInfo(
				subscribeItem.data.url
			);
			let updateFlag = false;
			if (requestSubscribeInfo.data) {
				let subscribeNewItem = requestSubscribeInfo.data;
				subscribeNewItem.uuid = subscribeItem.uuid;
				subscribeNewItem.data = subscribeItem.data;
				subscribeNewItem.data.latestUpdateTime = Date.now();
				let title =
					subscribeNewItem.data.title ||
					subscribeNewItem.subscribeData.title ||
					subscribeNewItem.data.url;
				subscribeItem.data.updateFailedTime = null;
				updateFlag = this.updateSubscribe(subscribeNewItem);
				if (updateFlag) {
					log.success(`更新订阅成功：${title}`);
				} else {
					log.error(`更新订阅失败：${title}`, subscribeItem);
				}
			} else {
				log.error("更新订阅失败：" + requestSubscribeInfo.msg, subscribeItem);
			}
			if (!updateFlag) {
				subscribeItem.data.updateFailedTime = Date.now();
				// 更新失败，设置失败时间
				this.updateSubscribe(subscribeItem);
			}
		}
	}
	/**
	 * 导入订阅
	 * @param importEndCallBack 导入完毕后的回调
	 */
	importSubscribe(importEndCallBack?: () => void) {
		let $alert = pops.alert({
			title: {
				text: "请选择导入方式",
				position: "center",
			},
			content: {
				text: /*html*/ `
                    <div class="btn-control" data-mode="local">本地导入</div>
                    <div class="btn-control" data-mode="network">网络导入</div>
                    <div class="btn-control" data-mode="clipboard">剪贴板导入</div>
                `,
				html: true,
			},
			btn: {
				ok: { enable: false },
				close: {
					enable: true,
					callback(details, event) {
						details.close();
					},
				},
			},
			drag: true,
			mask: {
				enable: true,
			},
			width: PanelUISize.info.width,
			height: PanelUISize.info.height,
			style: /*css*/ `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `,
		});
		/** 本地导入 */
		let $local = $alert.$shadowRoot.querySelector<HTMLElement>(
			".btn-control[data-mode='local']"
		)!;
		/** 网络导入 */
		let $network = $alert.$shadowRoot.querySelector<HTMLElement>(
			".btn-control[data-mode='network']"
		)!;
		/** 剪贴板导入 */
		let $clipboard = $alert.$shadowRoot.querySelector<HTMLElement>(
			".btn-control[data-mode='clipboard']"
		)!;
		/**
		 * 将获取到的规则更新至存储
		 */
		let updateRuleToStorage = (data: any[]) => {
			let allData = this.getAllSubscribe();
			let addNewData: typeof allData = [];
			for (let index = 0; index < data.length; index++) {
				const dataItem = data[index];
				let findIndex = allData.findIndex((it) => it.uuid === dataItem.uuid);
				if (findIndex !== -1) {
					// 存在相同的uuid的规则
					// 不做处理
				} else {
					// 追加
					addNewData.push(dataItem);
				}
			}
			allData = allData.concat(addNewData);
			this.storageApi.set(this.option.STORAGE_KEY, allData);

			Qmsg.success(`共 ${data.length} 条订阅，新增 ${addNewData.length} 条`);
			importEndCallBack?.();
		};
		/**
		 * @param subscribeText 订阅文件文本
		 */
		let importFile = (subscribeText: string) => {
			return new Promise<boolean>((resolve) => {
				let data = utils.toJSON<RuleSubscribeOption<T>>(subscribeText);
				if (!Array.isArray(data)) {
					log.error(data);
					Qmsg.error("导入失败，格式不符合（不是数组）", {
						consoleLogContent: true,
					});
					resolve(false);
					return;
				}
				if (!data.length) {
					Qmsg.error("导入失败，解析出的数据为空", {
						consoleLogContent: true,
					});
					resolve(false);
					return;
				}
				let demoFirst = data[0] as RuleSubscribeOption<T>;
				if (
					!(
						typeof demoFirst.data === "object" &&
						demoFirst.data != null &&
						typeof demoFirst.subscribeData === "object" &&
						demoFirst.subscribeData != null &&
						typeof demoFirst.uuid === "string"
					)
				) {
					Qmsg.error("导入失败，解析的格式不符合", {
						consoleLogContent: true,
					});
					resolve(false);
					return;
				}

				updateRuleToStorage(data);
				resolve(true);
			});
		};
		// 本地导入
		DOMUtils.on($local, "click", (event) => {
			utils.preventEvent(event);
			$alert.close();
			let $input = DOMUtils.createElement("input", {
				type: "file",
				accept: ".json",
			});
			DOMUtils.on($input, ["propertychange", "input"], (event) => {
				if (!$input.files?.length) {
					return;
				}
				let uploadFile = $input.files![0];
				let fileReader = new FileReader();
				fileReader.onload = () => {
					importFile(fileReader.result as string);
				};
				fileReader.readAsText(uploadFile, "UTF-8");
			});
			$input.click();
		});
		// 网络导入
		DOMUtils.on($network, "click", (event) => {
			utils.preventEvent(event);
			$alert.close();
			let $prompt = pops.prompt({
				title: {
					text: "网络导入",
					position: "center",
				},
				content: {
					text: "",
					placeholder: "请填写URL",
					focus: true,
				},
				btn: {
					close: {
						enable: true,
						callback(details, event) {
							details.close();
						},
					},
					ok: {
						text: "导入",
						callback: async (eventDetails, event) => {
							let url = eventDetails.text;
							if (utils.isNull(url)) {
								Qmsg.error("请填入完整的url");
								return;
							}
							let $loading = Qmsg.loading("正在获取配置...");
							let response = await httpx.get(url, {
								allowInterceptConfig: false,
							});
							$loading.close();
							if (!response.status) {
								log.error(response);
								Qmsg.error("获取配置失败", { consoleLogContent: true });
								return;
							}
							let flag = await importFile(response.data.responseText);
							if (!flag) {
								return;
							}
							eventDetails.close();
						},
					},
					cancel: {
						enable: false,
					},
				},
				drag: true,
				mask: {
					enable: true,
				},
				width: PanelUISize.info.width,
				height: "auto",
			});
			let $promptInput =
				$prompt.$shadowRoot.querySelector<HTMLInputElement>("input")!;
			let $promptOk = $prompt.$shadowRoot.querySelector<HTMLElement>(
				".pops-prompt-btn-ok"
			)!;
			DOMUtils.on($promptInput, ["input", "propertychange"], (event) => {
				let value = DOMUtils.val($promptInput);
				if (value === "") {
					DOMUtils.attr($promptOk, "disabled", "true");
				} else {
					DOMUtils.removeAttr($promptOk, "disabled");
				}
			});
			DOMUtils.listenKeyboard(
				$promptInput,
				"keydown",
				(keyName, keyValue, otherCodeList) => {
					if (keyName === "Enter" && otherCodeList.length === 0) {
						let value = DOMUtils.val($promptInput);
						if (value !== "") {
							utils.dispatchEvent($promptOk, "click");
						}
					}
				}
			);
			utils.dispatchEvent($promptInput, "input");
		});
		// 剪贴板导入
		DOMUtils.on($clipboard, "click", async (event) => {
			utils.preventEvent(event);
			$alert.close();
			let clipboardInfo = await utils.getClipboardInfo();
			if (clipboardInfo.error != null) {
				Qmsg.error(clipboardInfo.error.toString());
				return;
			}
			if (clipboardInfo.content.trim() === "") {
				Qmsg.warning("获取到的剪贴板内容为空");
				return;
			}
			let flag = await importFile(clipboardInfo.content);
			if (!flag) {
				return;
			}
		});
	}
	/**
	 * 导出订阅
	 */
	exportSubscribe(fileName = "rule.json") {
		let $alert = pops.alert({
			title: {
				text: "请选择导出方式",
				position: "center",
			},
			content: {
				text: /*html*/ `
                    <div class="btn-control" data-mode="only-export-rule-list">导出订阅</div>
                `,
				html: true,
			},
			btn: {
				ok: { enable: false },
				close: {
					enable: true,
					callback(details, event) {
						details.close();
					},
				},
			},
			drag: true,
			mask: {
				enable: true,
			},
			width: PanelUISize.info.width,
			height: PanelUISize.info.height,
			style: /*css*/ `
                .btn-control{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
				.btn-control:hover{
					color: #409eff;
					border-color: #c6e2ff;
					background-color: #ecf5ff;
				}
            `,
		});
		/** 仅导出规则 */
		let $onlyExportRuleList = $alert.$shadowRoot.querySelector<HTMLElement>(
			".btn-control[data-mode='only-export-rule-list']"
		)!;
		/**
		 * 导出文件
		 */
		let exportFile = (__fileName__: string, __data__: any) => {
			let blob = new Blob([JSON.stringify(__data__, null, 4)]);
			let blobUrl = window.URL.createObjectURL(blob);
			let $a = document.createElement("a");
			$a.href = blobUrl;
			$a.download = __fileName__;
			$a.click();
			setTimeout(() => {
				window.URL.revokeObjectURL(blobUrl);
			}, 1500);
		};
		// 仅导出订阅
		DOMUtils.on($onlyExportRuleList, "click", (event) => {
			utils.preventEvent(event);
			try {
				let allRule = this.getAllSubscribe();
				if (allRule.length === 0) {
					Qmsg.warning("订阅为空，无需导出");
					return;
				}
				exportFile(fileName, allRule);
				$alert.close();
			} catch (error: any) {
				Qmsg.error(error.toString(), { consoleLogContent: true });
			}
		});
	}
}
