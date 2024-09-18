import { DOMUtils, log, pops, utils, DataPaging } from "@/env";
import { GM_getValue, GM_setValue } from "ViteGM";
import { NetDiskUI } from "../NetDiskUI";
import { NetDisk } from "@/main/NetDisk";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskConfig } from "@/main/data/NetDiskData";
import { NetDiskView } from "./NetDiskView";

export const NetDiskView_historyMatch = {
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
				style: this.getCSS(),
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
	getCSS() {
		return /*css*/ `
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content ul{

        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 10px;
            box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
            margin: 20px 10px;
            padding: 10px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search{
            height: 11%;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-table{
            height: calc( 85% - 40px);
            overflow: auto;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-page{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search input{
            border: none;
            border-bottom: 1px solid #000000;
            padding: 0px 5px;
            line-height: 28px;
            width: -moz-available;
            width: -webkit-fill-available;
            width: fill-available;
            margin: 5px 5px 0px 5px;
            background: none;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search input:focus-visible{
            outline: none;
            border-bottom: 1px solid #0009ff;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link{
        
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a{
            color: #ff4848;
            font-size: 0.8em;
            border: none;
            word-break: break-word;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a[isvisited=true]{
            color: #8b8888;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon{
        
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon .netdisk-icon-img{
            width: 28px;
            height: 28px;
            min-width: 28px;
            min-height: 28px;
            font-size: 0.8em;
            border-radius: 10px;
            box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url{
            color: #000;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url{
            color: #000;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete{
            background: #263cf3;
            color: #fff;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete:active{
            background: #6e7be8;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-update-time,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions{
            display: flex;
            margin: 5px 0px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-update-time p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions p{
            min-width: 80px;
            max-width: 80px;
            align-self: center;
        }
        `;
	},
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
			NetDiskConfig.historyMatch["netdisk-history-match-ordering-rule"].value;
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
		if (!NetDiskConfig.historyMatch.saveMatchNetDisk.value) {
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
