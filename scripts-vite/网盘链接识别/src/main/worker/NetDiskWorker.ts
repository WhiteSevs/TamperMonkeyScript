import { isDebug, log, utils } from "@/env";
import { NetDisk } from "../NetDisk";
import { GM_getValue } from "ViteGM";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { NetDiskUI } from "../ui/NetDiskUI";
import { NetDiskSuspensionConfig } from "../ui/NetDiskSuspension";
import { CommonUtils } from "@/utils/CommonUtils";
import { NetDiskRuleUtils } from "../rule/NetDiskRuleUtils";
import { NetDiskWorkerUtils } from "./NetDiskWorkerUtils";

/** Woker */
export const NetDiskWorker = {
	/** 是否正在匹配中 */
	isHandleMatch: false,
	/** 触发匹配，但是处于匹配中，计数器保存匹配数，等待完成匹配后再执行一次匹配 */
	delayNotMatchCount: 0,
	/** 主动触发监听DOM变化的事件 */
	dispatchMonitorDOMChange: false,
	/** worker的Blob链接 */
	blobUrl: "",
	/** worker对象 */
	GM_matchWorker: void 0 as any as Worker,
	init() {
		this.initWorkerBlobLink();
		this.initWorker();
		this.monitorDOMChange();
	},
	/** 初始化Worker的Blob链接 */
	initWorkerBlobLink() {
		/* 需要注意的是Worker内是不能访问全局document的 */
		const handleMatch = /*js*/ `
        (() => {
            function ${NetDiskWorker.handleRegularMatch.toString()}

            function ${NetDiskWorker.uniqueArr}
            
            this.addEventListener(
            "message",
            function (event) {
                const data = event.data;
                let matchedList = [];
                ${NetDiskWorker.handleRegularMatch.name}(data,(matchData)=>{
                	matchedList.push(matchData);
                })
                matchedList = ${NetDiskWorker.uniqueArr.name}(matchedList);
                this.postMessage({
					options: data,
					msg: "Match End",
					data: matchedList,
					startTime: data.startTime,
					endTime: Date.now(),
                });
            },
            {
                capture: true,
            }
            );
        })();
  		`;
		let blob = new Blob([handleMatch]);
		NetDiskWorker.blobUrl = window.URL.createObjectURL(blob);
		log.info(`Worker Blob Link ===> ${NetDiskWorker.blobUrl}`);
	},
	/**
	 * 处理规则匹配
	 *
	 * 传入的规则肯定是允许执行匹配的规则
	 * @param workerOptionData 数据
	 * @param callback 成功匹配到的回调
	 */
	handleRegularMatch(
		workerOptionData: NetDiskWorkerOptions,
		callback: (matchData: NetDiskWorkerMatchOption) => void
	) {
		const NetDiskRegularNameList = Object.keys(workerOptionData.regular);
		for (const netDiskName of NetDiskRegularNameList) {
			const netDiskRegular = workerOptionData.regular[netDiskName];
			for (let index = 0; index < netDiskRegular.length; index++) {
				/* 判断该规则是否已启用 */
				const netDiskRegularItem = netDiskRegular[index];
				// if (
				// 	netDiskRegularItem["enable"] != null &&
				// 	!netDiskRegularItem["enable"]
				// ) {
				// 	continue;
				// }
				/* 匹配规则数组 */
				let matchRegExpList = [];
				if (workerOptionData.matchTextRange.includes("innerText")) {
					matchRegExpList.push(
						new RegExp(netDiskRegularItem["link_innerText"], "gi")
					);
				}
				if (workerOptionData.matchTextRange.includes("innerHTML")) {
					matchRegExpList.push(
						new RegExp(netDiskRegularItem["link_innerHTML"], "gi")
					);
				}
				if (!workerOptionData.matchTextRange.length) {
					console.error(workerOptionData);
					throw new TypeError("未设置匹配范围");
				}
				if (!matchRegExpList.length) {
					throw new TypeError(
						"未知的匹配范围: " + workerOptionData.matchTextRange
					);
				}
				for (
					let matchRegExpIndex = 0;
					matchRegExpIndex < matchRegExpList.length;
					matchRegExpIndex++
				) {
					const matchRegExp = matchRegExpList[matchRegExpIndex];
					for (
						let textIndex = 0;
						textIndex < workerOptionData.textList.length;
						textIndex++
					) {
						const text = workerOptionData.textList[textIndex];
						let matchData = text.match(matchRegExp);
						if (matchData && matchData.length) {
							callback({
								netDiskName: netDiskName,
								netDiskIndex: index,
								data: matchData,
							});
						}
					}
				}
			}
		}
	},
	/**
	 * 数组去重
	 * @param arr 待去重的数组
	 */
	uniqueArr(arr: Array<any>) {
		return arr.filter((obj, index, selfArray) => {
			return (
				index ===
				selfArray.findIndex((item) => {
					return JSON.stringify(item) === JSON.stringify(obj);
				})
			);
		});
	},
	/**
	 * 初始化Worker对象
	 */
	initWorker() {
		try {
			NetDiskWorker.GM_matchWorker = new Worker(NetDiskWorker.blobUrl);
			NetDiskWorker.GM_matchWorker.onmessage = NetDiskWorker.onMessage;
			NetDiskWorker.GM_matchWorker.onerror = NetDiskWorker.onError;
		} catch (error: any) {
			log.error([
				"初始化Worker失败，可能页面使用了Content-Security-Policy策略，使用另类方法",
				error.message,
			]);
			// @ts-ignore
			NetDiskWorker.GM_matchWorker = {
				postMessage(data: NetDiskWorkerOptions) {
					return new Promise((resolve, reject) => {
						let matchedList: NetDiskWorkerMatchOption[] = [];
						try {
							NetDiskWorker.handleRegularMatch(data, (matchData) => {
								matchedList.push(matchData);
							});
						} catch (error: any) {
							NetDiskWorker.onError(error);
						} finally {
							matchedList = NetDiskWorker.uniqueArr(matchedList);
							NetDiskWorker.onMessage(
								new MessageEvent("message", {
									data: {
										options: data,
										msg: "Match End",
										data: matchedList,
										startTime: data.startTime,
										endTime: Date.now(),
									},
								})
							);
							resolve(null);
						}
					});
				},
			};
		}
	},
	/**
	 * 传递数据给worker内进行处理匹配
	 * @param message 数据
	 * @param options 配置
	 */
	postMessage(
		message: NetDiskWorkerOptions,
		options?: StructuredSerializeOptions
	) {
		if (isDebug) {
			log.info(["Debug-传递数据给worker内进行处理匹配: ", message]);
		}
		NetDiskWorker.GM_matchWorker.postMessage(message, options);
	},
	/**
	 * Worker的onmessage
	 * 这里的this指向会被修改
	 * @param event
	 */
	onMessage(event: MessageEvent<NetDiskWorkerCallBackOptions>) {
		const data = event.data;
		if (isDebug) {
			log.info([`Debug-匹配结束,用时${Date.now() - data.startTime}ms: `, data]);
		}
		if (data.data.length) {
			log.success(
				`成功匹配${data.data.length}个，用时${Date.now() - data.startTime}ms`
			);
		}
		if (data.options.from === "PasteText") {
			NetDiskUI.matchPasteText.workerMatchEndCallBack(data);
		}
		if (data.options.from.startsWith("FirstLoad")) {
			// 依次执行所有的首次加载
			NetDiskWorker.delayNotMatchCount++;
		}
		NetDiskWorker.successCallBack(data);
	},
	/**
	 * Worker的onerror
	 * @param error
	 */
	onError(error: ErrorEvent) {
		NetDiskWorker.errorCallBack(error);
	},
	/**
	 * worker处理文件匹配后的回调
	 * @param options
	 */
	successCallBack(options: NetDiskWorkerCallBackOptions) {
		/* 匹配为空，释放锁 */
		if (!options.data.length) {
			NetDiskWorker.matchingEndCallBack();
			return;
		}
		/** @type {NetiDiskHandleObject[]} */
		const handleNetDiskList: NetiDiskHandleObject[] = [];
		for (const matchData of options.data) {
			/* 已匹配到的网盘，用于显示图标 */
			NetDisk.matchLink.add(matchData.netDiskName!);
			/**
			 * 匹配到的可能很多，使用集合去重
			 * @type {Set<string>}
			 */
			let matchLinkSet = new Set<string>();
			matchData.data.forEach((item) => {
				matchLinkSet.add(item);
			});

			matchLinkSet.forEach((item) => {
				let handleLink = NetDisk.handleLink(
					matchData.netDiskName!,
					matchData.netDiskIndex!,
					item
				);
				if (handleLink) {
					handleNetDiskList.push({
						shareCode: handleLink.shareCode!,
						accessCode: handleLink.accessCode!,
						netDiskName: matchData.netDiskName!,
						netDiskIndex: matchData.netDiskIndex!,
						matchText: item,
					});
				}
			});
		}
		/* 过滤掉重复的 */
		let filterHandleNetDiskList = handleNetDiskList.filter(
			(value, index, selfArray) => {
				let isFind =
					selfArray.findIndex((obj) => {
						/* 过滤掉同样配置的 */
						/* 或者是netDiskName、netDiskIndex相同，且shareCode前面存在重复的 */
						return (
							//JSON.stringify(obj) === JSON.stringify(value)
							obj.accessCode === value.accessCode &&
							obj.netDiskIndex === value.netDiskIndex &&
							obj.netDiskName === value.netDiskName &&
							obj.shareCode === value.shareCode
							//(obj.netDiskName === value.netDiskName &&
							//  obj.netDiskIndex === value.netDiskIndex &&
							//  obj.shareCode.startsWith(value.shareCode)) ||
							//value.shareCode.startsWith(obj.shareCode)
						);
					}) === index;
				return isFind;
			}
		);
		filterHandleNetDiskList.forEach((item) => {
			if (NetDisk.tempLinkDict.has(item.netDiskName)) {
				let currentTempDict = NetDisk.tempLinkDict.get(item.netDiskName);
				currentTempDict.set(item.shareCode, item);
			}
		});
		/** 过滤掉匹配的分享码 */
		filterHandleNetDiskList.forEach((item) => {
			const { shareCode, accessCode, netDiskName, netDiskIndex, matchText } =
				item;
			const currentRule = NetDisk.rule.find(
				(item) => item.setting.key === netDiskName
			);
			const currentRegular = currentRule!.rule[netDiskIndex];
			if (
				currentRegular.shareCodeExcludeRegular &&
				Array.isArray(currentRegular.shareCodeExcludeRegular)
			) {
				/* 排除掉在目标规则已匹配到的shareCode */
				for (const excludeRegularName of currentRegular.shareCodeExcludeRegular) {
					let excludeDict = NetDisk.linkDict.get(excludeRegularName);
					let currentTempDict = NetDisk.tempLinkDict.get(excludeRegularName);
					if (
						excludeDict.startsWith(shareCode) ||
						currentTempDict.startsWith(shareCode)
					) {
						log.warn(
							`${netDiskName}：该分享码【${shareCode}】与已匹配到该分享码的规则【${excludeRegularName}】冲突`
						);
						return;
					}
				}
			}

			/** 当前存储的 */
			const currentDict = NetDisk.linkDict.get(netDiskName);
			NetDisk.hasMatchLink = true;
			if (currentDict.startsWith(shareCode)) {
				/* 存在该访问码 */
				/* 根据shareCode获取accessCode和netDiskIndex信息 */
				let shareCodeDict = currentDict.getStartsWith(shareCode)!;
				if (
					typeof shareCodeDict.isForceAccessCode === "boolean" &&
					shareCodeDict.isForceAccessCode
				) {
					/* 该访问码已被锁定，禁止修改 */
					return;
				}
				if (utils.isNotNull(shareCodeDict.accessCode)) {
					/* 已匹配到的访问码不为空，不设置新的 */
					return;
				}
				if (utils.isNull(accessCode)) {
					/* 访问码为空，不设置新的 */
					return;
				}

				currentDict.set(
					shareCode,
					NetDisk.getLinkDickObj(accessCode, netDiskIndex, false, matchText)
				);
				NetDiskUI.view.changeLinkView(
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode,
					matchText
				);
				log.info(
					`该匹配项无密码，设置密码 ${netDiskName} ${netDiskIndex}: ${shareCode}  ===> ${accessCode}`
				);
			} else {
				/* 不存在该访问码，添加新的进去 */
				currentDict.set(
					shareCode,
					NetDisk.getLinkDickObj(accessCode, netDiskIndex, false, matchText)
				);
				NetDiskUI.isMatchedNetDiskIconMap.add(netDiskName);
				NetDiskUI.view.addLinkView(
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode,
					matchText
				);
				log.success(
					`添加链接 ${netDiskName} ${netDiskIndex}: ${shareCode}  ===> ${accessCode}`
				);
			}
		});

		/* 清空临时的 */
		Object.keys(NetDisk.tempLinkDict.getItems()).forEach((keyName) => {
			NetDisk.tempLinkDict.get(keyName).clear();
		});
		if (NetDisk.hasMatchLink) {
			switch (NetDiskGlobalData.function["netdisk-behavior-mode"].value) {
				case "suspension_smallwindow".toLowerCase():
					if (
						NetDiskSuspensionConfig.mode.current_suspension_smallwindow_mode
							.value === "suspension"
					) {
						NetDiskUI.suspension.show();
					} else {
						NetDiskUI.view.show();
					}
					break;
				case "suspension_window".toLowerCase():
					NetDiskUI.suspension.show();
					break;
				case "smallwindow".toLowerCase():
					NetDiskUI.view.show();
					break;
				default:
					log.error([
						"未知的行为模式：" +
							NetDiskGlobalData.function["netdisk-behavior-mode"].value,
					]);
			}
		}
		NetDiskWorker.matchingEndCallBack();
	},
	/**
	 * Worker失败回调
	 * @param error
	 */
	errorCallBack(error: any) {
		NetDiskWorker.matchingEndCallBack(true);
		log.error(["Worker Error", error]);
	},
	/**
	 * 匹配结束回调
	 * @param isNow 是否立刻释放锁
	 */
	matchingEndCallBack(isNow?: boolean) {
		if (isNow) {
			NetDiskWorker.isHandleMatch = false;
			if (NetDiskWorker.delayNotMatchCount > 0) {
				NetDiskWorker.delayNotMatchCount = 0;
				NetDiskWorker.dispatchMonitorDOMChange = true;
			}
		} else {
			const delaytime =
				parseFloat(NetDiskGlobalData.match.delaytime.value.toString()) * 1000;
			setTimeout(() => {
				NetDiskWorker.matchingEndCallBack(true);
			}, delaytime);
		}
	},
	/**
	 * 监听页面节点内容或节点文本的变动，从而进行匹配网盘链接
	 */
	monitorDOMChange() {
		/** 设置-判定为添加元素才进行匹配 */
		const isAddedNodeToMatch =
			NetDiskGlobalData.match.isAddedNodesToMatch.value;
		/** 读取剪贴板内容 */
		const readClipboard = NetDiskGlobalData.match.readClipboard.value;
		/** 匹配文本范围 */
		const matchRange = NetDiskGlobalData.match.pageMatchRange.value;
		/** 是否是首次加载，首次加载时，优先进行当前网址和剪贴板的匹配，然后才是页面内容匹配，防止页面内容匹配时间过长影响体验 */
		let isFirstLoad = true;
		/** 是否是首次加载页面文本，该项需要匹配范围为all，那么会分批次匹配，优先innerText，然后innerHTML */
		let isFirstLoadPageText = true;
		/** 是否是首次加载页面文本，该项需要匹配范围为all，那么会分批次匹配，优先innerText，然后innerHTML */
		let isFirstLoadPageHTML = true;
		/** 是否深度遍历shadowRoot */
		let depthAcquisitionWithShadowRoot =
			NetDiskGlobalData.match.depthQueryWithShadowRoot.value;

		/** 执行匹配的规则 */
		const matchRegular = {} as NetDiskMatchRule;
		NetDisk.rule.forEach((item) => {
			// 网盘键
			let netDiskName = item.setting.key;
			// 启用状态
			let netDiskRuleEnable =
				item.setting.configurationInterface?.function?.enable;
			if (netDiskRuleEnable) {
				if (matchRegular[netDiskName]) {
					matchRegular[netDiskName] = [
						...matchRegular[netDiskName],
						...item.rule,
					];
				} else {
					matchRegular[netDiskName] = item.rule;
				}
			}
		});
		/**
		 * 观察者的事件
		 * @param mutations 改变的节点集合
		 */
		async function observeEvent(mutations?: MutationRecord[]) {
			if (NetDiskWorker.isHandleMatch) {
				/* 判断当前是否正在处理规则匹配字符串中 */
				NetDiskWorker.delayNotMatchCount++;
				return;
			}
			if (isAddedNodeToMatch && mutations && mutations.length) {
				// 设定为添加元素才匹配且观察器检测到改变的元素
				/** 判断是否存在添加的元素 */
				let hasAddedNode = false;
				for (let index = 0; index < mutations.length; index++) {
					const mutation = mutations[index];
					if (mutation.addedNodes && mutation.addedNodes instanceof NodeList) {
						if (mutation.addedNodes.length) {
							hasAddedNode = true;
							break;
						}
					}
				}
				if (!hasAddedNode) {
					return;
				}
			}
			NetDiskWorker.isHandleMatch = true;
			/** 开始时间 */
			const startTime = Date.now();
			if (readClipboard) {
				try {
					NetDisk.clipboardText = await CommonUtils.getClipboardText();
				} catch (error) {
					// 获取剪贴板内容失败
				}
			}
			if (typeof NetDisk.clipboardText !== "string") {
				NetDisk.clipboardText = "";
			}
			/** 待匹配的文字列表 */
			const textListToBeMatched: string[] = [];

			/* 剪贴板内容 */
			if (NetDisk.clipboardText.trim() !== "") {
				textListToBeMatched.push(NetDisk.clipboardText);
			}
			/* 当前的网页链接 */
			if (NetDiskGlobalData.match.allowMatchLocationHref) {
				textListToBeMatched.push(NetDiskRuleUtils.getDecodeComponentUrl());
			}
			/* 匹配input标签的内容 */
			if (NetDiskGlobalData.match.toBeMatchedWithInputElementValue) {
				textListToBeMatched.push(
					...NetDiskWorkerUtils.getInputElementValue(
						document.documentElement,
						depthAcquisitionWithShadowRoot
					)
				);
			}
			/* 匹配textarea标签的内容 */
			if (NetDiskGlobalData.match.toBeMatchedTextAreaElementValue) {
				textListToBeMatched.push(
					...NetDiskWorkerUtils.getTextAreaElementValue(
						document.documentElement,
						depthAcquisitionWithShadowRoot
					)
				);
			}
			if (isFirstLoad) {
				// 首次加载
				isFirstLoad = false;
				/* 发送给worker执行匹配的通知 */
				if (textListToBeMatched.length) {
					NetDiskWorker.postMessage({
						textList: textListToBeMatched,
						matchTextRange: matchRange,
						regular: matchRegular,
						startTime: startTime,
						from: "FirstLoad-DOMChange",
					});
					return;
				}
			}
			if (matchRange.includes("innerText")) {
				/* innerText */
				let pageText = NetDiskWorkerUtils.getPageHTML(
					document.documentElement,
					depthAcquisitionWithShadowRoot
				);
				textListToBeMatched.push(...pageText);
				if (isFirstLoadPageText) {
					// 首次加载text
					isFirstLoadPageText = false;
					NetDiskWorker.postMessage({
						textList: textListToBeMatched,
						matchTextRange: matchRange,
						regular: matchRegular,
						startTime: startTime,
						from: "FirstLoad-Text-DOMChange",
					});
					return;
				}
			}
			if (matchRange.includes("innerHTML")) {
				/* innerHTML */
				let pageHTML = NetDiskWorkerUtils.getPageHTML(
					document.documentElement,
					depthAcquisitionWithShadowRoot
				);
				textListToBeMatched.push(...pageHTML);
				if (isFirstLoadPageHTML) {
					// 首次加载html
					isFirstLoadPageHTML = false;
					NetDiskWorker.postMessage({
						textList: textListToBeMatched,
						matchTextRange: matchRange,
						regular: matchRegular,
						startTime: startTime,
						from: "FirstLoad-HTML-DOMChange",
					});
					return;
				}
			}
			/* 发送执行匹配的消息 */
			NetDiskWorker.postMessage({
				textList: textListToBeMatched,
				matchTextRange: matchRange,
				regular: matchRegular,
				startTime: startTime,
				from: "DOMChange",
			});
		}
		utils.mutationObserver(document.documentElement, {
			callback: observeEvent,
			config: {
				/* 子节点的变动（新增、删除或者更改） */
				childList: NetDiskGlobalData.match["mutationObserver-childList"].value,
				/* 节点内容或节点文本的变动 */
				characterData:
					NetDiskGlobalData.match["mutationObserver-characterData"].value,
				/* 是否将观察器应用于该节点的所有后代节点 */
				subtree: NetDiskGlobalData.match["mutationObserver-subtree"].value,
			},
		});

		/* 动态监听是否主动触发监听器 */
		let dispatchMonitorDOMChange = NetDiskWorker.dispatchMonitorDOMChange;
		Object.defineProperty(NetDiskWorker, "dispatchMonitorDOMChange", {
			set: function (value) {
				dispatchMonitorDOMChange = value;
				if (value) {
					let addedNodes = document.querySelectorAll<HTMLElement>(
						"html"
					) as any as NodeList;
					observeEvent([
						{
							addedNodes: addedNodes,
							attributeName: null,
							attributeNamespace: null,
							nextSibling: null,
							oldValue: null,
							previousSibling: null,
							removedNodes: addedNodes,
							target: addedNodes[0],
							type: "attributes",
						},
					]);
				}
			},
			get: function () {
				return dispatchMonitorDOMChange;
			},
		});
		this.dispatchMonitorDOMChange = true;
	},
};
