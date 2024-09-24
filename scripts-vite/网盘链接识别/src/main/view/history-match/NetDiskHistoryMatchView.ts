import { DOMUtils, log, pops, utils, DataPaging } from "@/env";
import { GM_getValue, GM_setValue } from "ViteGM";
import { NetDisk } from "@/main/NetDisk";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskGlobalData } from "@/main/data/NetDiskGlobalData";
import { NetDiskUI } from "../../ui/NetDiskUI";
import { NetDiskView } from "../index/NetDiskView";
import indexCSS from "./index.css?raw";

export const NetDiskHistoryMatchView = {
	/**
	 * 本地存储的keyName
	 */
	storageKey: "netDiskHistoryMatch",
	/**
	 * 是否已设置其它DOM事件
	 */
	isSetOtherEvent: false,
	/**
	 * 分页
	 */
	dataPaging: void 0 as any,
	/**
	 * 显示弹窗
	 */
	show() {
		let data = this.getNetDiskHistoryMatchData();
		let dataHTML = "";
		let that = this;
		data = this.orderNetDiskHistoryMatchData(data);
		for (let index = 0; index < 10; index++) {
			if (data[index]) {
				dataHTML += that.getTableHTML(data[index]);
			}
		}
		dataHTML = /*html*/ `
        <div class="netdiskrecord-search">
            <input type="text" placeholder="搜索链接/网址/网址标题，可正则搜索">
        </div>
        <div class="netdiskrecord-table"><ul>${dataHTML}</ul></div>
        <div class="netdiskrecord-page">

        </div>`;
		NetDiskUI.Alias.historyAlias = NetDiskPops.confirm(
			{
				title: {
					text: "历史匹配记录",
					position: "center",
				},
				content: {
					text: dataHTML,
					html: true,
				},
				btn: {
					reverse: true,
					position: "space-between",
					ok: {
						enable: true,
						callback(event) {
							event.close();
							// @ts-ignore
							NetDiskUI.Alias.historyAlias = void 0;
						},
					},
					close: {
						callback(event) {
							event.close();
							// @ts-ignore
							NetDiskUI.Alias.historyAlias = void 0;
						},
					},
					cancel: {
						enable: false,
					},
					other: {
						enable: true,
						text: `清空所有(${data.length})`,
						type: "xiaomi-primary",
						callback: (event) => {
							NetDiskPops.confirm({
								title: {
									text: "删除",
									position: "center",
								},
								content: {
									text: "确定清空所有的记录？",
									html: false,
								},
								btn: {
									ok: {
										enable: true,
										callback(okEvent) {
											that.clearNetDiskHistoryMatchData();
											DOMUtils.remove(
												NetDiskUI.Alias.historyAlias.$shadowRoot.querySelectorAll(
													".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul li"
												)
											);
											okEvent.close();
											DOMUtils.html(
												NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector<HTMLElement>(
													".whitesevPopNetDiskHistoryMatch .netdiskrecord-page"
												)!,
												""
											);
											DOMUtils.text(
												NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector<HTMLElement>(
													".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
												)!,
												DOMUtils.text(
													NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector<HTMLElement>(
														".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
													)!
												).replace(/[\d]+/gi, "0")
											);
										},
									},
									cancel: {
										text: "取消",
										enable: true,
									},
								},
							});
						},
					},
				},
				mask: {
					clickCallBack(originalRun) {
						originalRun();
						// @ts-ignore
						NetDiskUI.Alias.historyAlias = null;
					},
				},
				class: "whitesevPopNetDiskHistoryMatch",
				style: indexCSS,
			},
			NetDiskUI.popsStyle.historyMatchView
		);
		this.setDataPaging(data);
		this.setEvent(NetDiskUI.Alias.historyAlias.$shadowRoot);
		this.setSearchEvent();
		NetDiskUI.setRightClickMenu(
			NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector<HTMLElement>(
				".whitesevPopNetDiskHistoryMatch"
			)!,
			".netdiskrecord-link a",
			true
		);
	},
	/**
	 * 获取CSS
	 */
	getCSS() {},
	/**
	 * 获取显示出的每一项的html
	 * @param data
	 */
	getTableHTML(data: NetDiskHistoryDataOption) {
		let netDiskURL = NetDisk.handleLinkShow(
			data.netDiskName,
			data.netDiskIndex,
			data.shareCode,
			data.accessCode,
			data.matchText
		);
		return /*html*/ `
		<li>
			<div class="netdiskrecord-link">
				<p>链接</p>
				<a  href="javascript:;"
					isvisited="false"
					${NetDiskView.createElementAttributeRuleInfo({
						netDisk: data.netDiskName,
						netDiskIndex: data.netDiskIndex,
						shareCode: data.shareCode,
						accessCode: data.accessCode,
					})}>${netDiskURL}</a>
			</div>
			<div class="netdiskrecord-icon">
				<p>网盘</p>
				<div class="netdisk-icon-img" style="background: url(${
					NetDiskUI.src.icon[data.netDiskName]
				}) no-repeat;background-size:100%"></div>
			</div>
			${
				data.url === data.topURL
					? /*html*/ `
			<div class="netdiskrecord-url">
				<p>网址</p>
				<a href="${data.url}" target="_blank">${data.url}</a>
			</div>
			`
					: /*html*/ `
			<div class="netdiskrecord-url">
				<p>网址</p>
				<a href="${data.url}" target="_blank">${data.url}</a>
			</div>
			<div class="netdiskrecord-top-url">
				<p>TOP网址</p>
				<a href="${data.topURL}" target="_blank">${data.topURL}</a>
			</div>
			`
			}
			<div class="netdiskrecord-url-title">
				<p>网址标题</p>
				${data.title}
			</div>
			<div class="netdiskrecord-add-time">
				<p>记录时间</p>
				${utils.formatTime(data.addTime)}
			</div>
			<div class="netdiskrecord-update-time">
				<p>更新时间</p>
				${utils.formatTime(data.updateTime)}
			</div>
			<div class="netdiskrecord-functions">
				<p>功能</p>
				<button class="btn-delete" data-json='${JSON.stringify(data)}'>删除</button>
			</div>
		</li>`;
	},
	/**
	 * 设置只执行一次的事件
	 * @param target
	 */
	setEvent(target: HTMLElement | ShadowRoot) {
		let that = this;
		NetDiskUI.view.setNetDiskUrlClickEvent(
			target,
			".whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a"
		);

		/**
		 * 设置删除按钮点击事件
		 */
		DOMUtils.on(
			target,
			"click",
			".whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete",
			function (event) {
				/* 删除中的遮罩层 */
				let deleteLoading = NetDiskPops.loading({
					parent: target.querySelector<HTMLUListElement>(
						".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul"
					)!,
					content: {
						text: "删除中...",
					},
					only: true,
					addIndexCSS: false,
				});
				let clickNode = event.target as HTMLElement;
				let dataJSON = clickNode.getAttribute("data-json")!;
				clickNode.closest("li")?.remove();
				that.deleteNetDiskHistoryMatchData(dataJSON);
				deleteLoading?.close();
				let totalNumberText = DOMUtils.text(
					target.querySelector<HTMLElement>(
						".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
					)!
				);
				let totalNumberMatch = totalNumberText.match(/[\d]+/gi)!;
				let totalNumber = parseInt(
					totalNumberMatch[totalNumberMatch.length - 1]
				);
				totalNumber--;
				totalNumberText = totalNumberText.replace(
					/[\d]+/gi,
					totalNumber.toString()
				);
				DOMUtils.text(
					target.querySelector<HTMLElement>(
						".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
					)!,
					totalNumberText
				);
				let data = that.getNetDiskHistoryMatchData();
				data = that.orderNetDiskHistoryMatchData(data);
				that.dataPaging.refresh(data);
				that.pageChangeCallBack(data, that.dataPaging.CONFIG.currentPage);
			}
		);
	},
	/**
	 * 页码改变的回调
	 * @param data
	 * @param page
	 */
	pageChangeCallBack(data: any[], page: number) {
		let startIndex = (page - 1) * 10;
		let dataHTML = "";
		for (let index = 0; index < 10; index++) {
			if (data[startIndex]) {
				dataHTML += this.getTableHTML(data[startIndex]);
			} else {
				break;
			}
			startIndex++;
		}
		NetDiskUI.Alias.historyAlias.$shadowRoot
			.querySelectorAll(
				".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
			)
			.forEach((ele) => ele.remove());
		DOMUtils.append(
			NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector<HTMLUListElement>(
				".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul"
			)!,
			dataHTML
		);
	},
	/**
	 * 设置分页
	 * @param data
	 */
	setDataPaging(data: NetDiskHistoryDataOption[]) {
		let that = this;
		let dataPaging = new DataPaging({
			data: data,
			pageCount: 10,
			pageStep: pops.isPhone() ? 2 : 4,
			currentPage: 1,
			pageChangeCallBack: function (page) {
				that.pageChangeCallBack(data, page);
			},
		});
		this.dataPaging = dataPaging;

		dataPaging.addCSS(NetDiskUI.Alias.historyAlias.$shadowRoot);
		dataPaging.append(
			NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector<HTMLElement>(
				".whitesevPopNetDiskHistoryMatch .netdiskrecord-page"
			)!
		);
	},
	/**
	 * 设置搜索框的回车事件
	 */
	setSearchEvent() {
		let isSeaching = false; /* 当前搜索的状态 */
		let searchLoading = void 0 as any; /* 搜索中的遮罩层 */
		let that = this;
		function searchEvent() {
			if (isSeaching) {
				return;
			}
			isSeaching = true;
			searchLoading = NetDiskPops.loading({
				parent:
					NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector<HTMLUListElement>(
						".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul"
					)!,
				content: {
					text: "搜索中...",
				},
				only: true,
				addIndexCSS: false,
			});
			let inputText = NetDiskUI.Alias.historyAlias.$shadowRoot
				.querySelector<HTMLInputElement>(
					".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input"
				)!
				.value.trim();
			let data = that.getNetDiskHistoryMatchData();
			data = that.orderNetDiskHistoryMatchData(data);
			if (inputText === "") {
				/* 输入空就关闭遮罩层且恢复style */
				let historyDataHTML = "";
				data.forEach((item, index) => {
					if (index > 9) {
						return;
					}
					historyDataHTML += that.getTableHTML(item);
				});
				NetDiskUI.Alias.historyAlias.$shadowRoot
					.querySelectorAll<HTMLLIElement>(
						".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
					)
					.forEach((ele) => ele.remove());
				DOMUtils.append(
					NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector<HTMLUListElement>(
						".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul"
					)!,
					historyDataHTML
				);
				searchLoading?.close();
				isSeaching = false;
				that.setDataPaging(data);
				return;
			}
			let isFind = false; /* 找到的状态 */

			let isFindHTML = ""; /* 找到的链接文本 */
			data.forEach((item) => {
				let netDiskURL = NetDisk.handleLinkShow(
					item.netDiskName,
					item.netDiskIndex,
					item.shareCode,
					item.accessCode,
					item.matchText
				);
				if (
					netDiskURL.match(new RegExp(inputText, "ig")) ||
					item.url.match(new RegExp(inputText, "ig")) ||
					item.topURL.match(new RegExp(inputText, "ig")) ||
					item.title.match(new RegExp(inputText, "ig"))
				) {
					/* 匹配到 */
					isFind = true;
					isFindHTML += that.getTableHTML(item);
				}
			});
			DOMUtils.remove(
				NetDiskUI.Alias.historyAlias.$shadowRoot.querySelectorAll<HTMLLIElement>(
					".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
				)
			);
			DOMUtils.append(
				NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector<HTMLUListElement>(
					".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul"
				)!,
				isFindHTML
			);
			DOMUtils.remove(
				NetDiskUI.Alias.historyAlias.$shadowRoot.querySelectorAll<HTMLElement>(
					".whitesevPopNetDiskHistoryMatch .netdiskrecord-page > *"
				)
			);
			searchLoading?.close();
			searchLoading = void 0;
			isSeaching = false;
		}

		DOMUtils.listenKeyboard(
			NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector<HTMLInputElement>(
				".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input"
			)!,
			"keypress",
			(keyName) => {
				if (keyName === "Enter") {
					searchEvent();
				}
			}
		);
	},
	/**
	 * 排序数据
	 * @param data
	 */
	orderNetDiskHistoryMatchData(data: NetDiskHistoryDataOption[]) {
		let localOrder =
			NetDiskGlobalData.historyMatch["netdisk-history-match-ordering-rule"]
				.value;
		let isDesc = localOrder.indexOf("降序") !== -1 ? true : false; /* 降序 */
		let orderField =
			localOrder.indexOf("记录时间") !== -1
				? "addTime"
				: "updateTime"; /* 排序字段 */

		utils.sortListByProperty(
			data,
			(item) => {
				return item[orderField as keyof NetDiskHistoryDataOption];
			},
			isDesc
		);
		return data;
	},
	/**
	 * 存储匹配到的链接
	 * @param netDiskName 网盘名称
	 * @param netDiskIndex 网盘名称索引下标
	 * @param shareCode 分享码
	 * @param accessCode 访问码
	 * @param matchText 匹配到的文本
	 */
	setNetDiskHistoryMatchData(
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string,
		matchText: string
	) {
		if (!NetDiskGlobalData.historyMatch.saveMatchNetDisk.value) {
			return;
		}
		let localData = this.getNetDiskHistoryMatchData();
		for (let index = 0; index < localData.length; index++) {
			const data = localData[index];
			if (
				data.url === window.location.href &&
				data.topURL === top!.window.location.href &&
				data.netDiskName === netDiskName &&
				shareCode.startsWith(data.shareCode) &&
				data.netDiskIndex === netDiskIndex
			) {
				if (data.matchText !== matchText) {
					/* 修改/设置新的matchText */
					log.success(["匹配历史记录 -> 设置新的matchText", [matchText]]);
					localData[index].matchText = matchText;
					localData[index].updateTime = Date.now();
					if (localData[index].title) {
						localData[index].title = document.title;
					}
					GM_setValue(this.storageKey, localData);
					return;
				}
				if (data.accessCode !== accessCode) {
					/* 修改accessCode */
					log.success("匹配历史记录 -> 修改accessCode");
					localData[index].accessCode = accessCode;
					localData[index].updateTime = Date.now();
					if (localData[index].title) {
						localData[index].title = document.title;
					}
					GM_setValue(this.storageKey, localData);
					return;
				}
				if (data.accessCode === accessCode) {
					/* 已存在一模一样的 */
					return;
				}
			}
		}
		log.success("匹配历史记录 -> 增加新的");
		let time = Date.now();
		localData = [
			...localData,
			{
				url: window.location.href,
				topURL: top!.window.location.href,
				netDiskName: netDiskName,
				netDiskIndex: netDiskIndex,
				shareCode: shareCode,
				accessCode,
				addTime: time,
				updateTime: time,
				title: document.title || top!.document.title,
				matchText: matchText,
			},
		];
		GM_setValue(this.storageKey, localData);
	},
	/**
	 * 获取历史匹配到的链接
	 */
	getNetDiskHistoryMatchData(): NetDiskHistoryDataOption[] {
		let data = GM_getValue<NetDiskHistoryDataOption[]>(this.storageKey);
		if (data == null) {
			data = [];
			GM_setValue(this.storageKey, data);
		}
		return data;
	},
	/**
	 * 检测并尝试修复本地的数据
	 */
	checkAndRepairLocalData() {
		let repairCount = 0;
		let data = GM_getValue<NetDiskHistoryDataOption[]>(this.storageKey);
		if (Array.isArray(data)) {
			for (let index = 0; index < data.length; index++) {
				const itemData = data[index];
				if (typeof itemData["matchText"] !== "string") {
					itemData["matchText"] = "";
					repairCount++;
				}
			}
		} else {
			data = [];
		}
		GM_setValue(this.storageKey, data);
		return {
			count: data.length,
			repairCount: repairCount,
		};
	},
	/**
	 * 删除存储的某个项
	 * @param dataJSONText
	 */
	deleteNetDiskHistoryMatchData(dataJSONText: string) {
		let isSuccess = false;
		let data = this.getNetDiskHistoryMatchData();
		for (let index = 0; index < data.length; index++) {
			if (JSON.stringify(data[index]) === dataJSONText) {
				log.success(["删除 ===> ", data[index]]);
				data.splice(index, 1);
				isSuccess = true;
				break;
			}
		}
		if (isSuccess) {
			GM_setValue(this.storageKey, data);
		}
		return isSuccess;
	},
	/**
	 * 清空所有配置
	 */
	clearNetDiskHistoryMatchData() {
		GM_setValue(this.storageKey, []);
	},
};
