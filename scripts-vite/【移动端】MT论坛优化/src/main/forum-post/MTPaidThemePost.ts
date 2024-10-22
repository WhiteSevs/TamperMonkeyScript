import { DOMUtils, log, pops, utils } from "@/env";
import { Router } from "@/router/router";
import { ElementUtils } from "@/utils/ElementUtils";
import Qmsg from "qmsg";
import { GM_getValue, GM_setValue } from "ViteGM";

type DataOption = {
	expirationTimeStamp: number;
	expirationTime: string;
	isVisited: boolean;
	url: string;
	title: string;
};
/**
 * 付费主题白嫖提醒
 */
export const MTPaidThemePost = {
	$key: {
		tipData: "tipToFreeSubjectForumPost",
	},
	init() {
		this.registerMenu();

		let setTipForumPostList = this.getTipData();

		if (Router.isPost()) {
			/* 帖子内部-添加进提醒的按钮或者已添加进提醒的按钮点击移出 */
			/* 购买主题的元素 */
			let $kmren = document.querySelector<HTMLSpanElement>("span.kmren");

			if ($kmren) {
				log.info("当前帖子存在需要购买主题");
				let isAddTip = false;
				let $tipBtn;
				setTipForumPostList.forEach((item, index) => {
					if (window.location.href.match(item["url"])) {
						isAddTip = true;
						return;
					}
				});
				if (isAddTip) {
					log.warn("已设置提醒");
					$tipBtn = DOMUtils.createElement("a", {
						href: "javascript:;",
						className: "styli_tit f_c",
						innerHTML: /*html*/ `
                        <i class="comiis_font" style="color: #ffffff;"></i>
                        `,
					});
					DOMUtils.on($tipBtn, "click", function () {
						pops.confirm({
							title: {
								text: "提示",
								position: "center",
							},
							content: {
								text: "<p>确定移出付费主题白嫖列表？</p>",
								html: true,
							},
							btn: {
								ok: {
									callback: function () {
										let isRemove = false;
										let findIndex = setTipForumPostList.findIndex(
											(item, index) => {
												return window.location.href.match(item["url"]);
											}
										);
										if (findIndex !== -1) {
											setTipForumPostList.splice(findIndex, 1);
											MTPaidThemePost.setTipData(setTipForumPostList);
											Qmsg.success("移除成功");
										} else {
											Qmsg.error("移除失败");
										}
									},
								},
							},
							mask: {
								enable: true,
							},
							width: "88vw",
							height: "300px",
						});
					});
				} else {
					log.info("未设置提醒");
					$tipBtn = DOMUtils.createElement("a", {
						href: "javascript:;",
						className: "styli_tit f_c",
						innerHTML: /*html*/ `
                        <i class="comiis_font" style="color: #FF9900;"></i>
                        `,
					});
					DOMUtils.on($tipBtn, "click", () => {
						let $_kmren = document.querySelector<HTMLDivElement>(".kmren")!;
						let $_kmren_parent = DOMUtils.parent($_kmren);
						let expirationTimeMatch = DOMUtils.text($_kmren_parent)
							.replace(/\t|\n/g, "")
							.match(
								/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]{1}[0-9]{1,2}:[0-9]{1,2}/
							);
						if (!expirationTimeMatch || expirationTimeMatch.length == 0) {
							Qmsg.error("获取付费主题到期时间失败");
							return;
						}
						let expirationTime = expirationTimeMatch[0];
						let expirationTimeStamp = utils.formatToTimeStamp(expirationTime);
						setTipForumPostList.push({
							url: window.location.href,
							title: document.title.replace(" - MT论坛", ""),
							expirationTime: expirationTime,
							expirationTimeStamp: expirationTimeStamp,
							isVisited: false,
						});
						GM_setValue("tipToFreeSubjectForumPost", setTipForumPostList);
						Qmsg.success("添加成功");
						setTimeout(function () {
							window.location.reload();
						}, 1500);
					});
				}
				let $header_y = document.querySelector<HTMLDivElement>(
					".comiis_head.f_top .header_y"
				)!;
				DOMUtils.append($header_y, $tipBtn);
			}
		}
		/* 设置提醒小红点 */
		function getTipNums() {
			let needTipNums = 0;
			Array.from(MTPaidThemePost.getTipData()).forEach((item, index) => {
				if (
					new Date().getTime() > item["expirationTimeStamp"] &&
					item["isVisited"] == false
				) {
					needTipNums += 1;
				}
			});
			return needTipNums;
		}

		if (
			Router.isMySpace() ||
			Router.isGuide() ||
			Router.isForumList() ||
			Router.isPlate()
		) {
			/* 当前网页为，底部导航-我的 */
			/* 底部导航-我的-右上角小红点 */
			let redBtn = document.querySelector<HTMLDivElement>(
				".icon_msgs.bg_del.f_f"
			);
			let tipNums = 0;
			if (redBtn) {
				tipNums = parseInt(DOMUtils.text(redBtn));
				DOMUtils.html(redBtn, (tipNums + getTipNums()).toString());
				DOMUtils.append(
					".comiis_head .header_z .kmuser em",
					`<span class="icon_msgs bg_del"></span>`
				);
			} else {
				let tipnums = getTipNums();
				if (tipnums) {
					DOMUtils.append(
						".comiis_head .header_z .kmuser em",
						`<span class="icon_msgs bg_del"></span>`
					);
				}
			}
		}

		/* 当前网页为，全部 */
		let redBtn = document.querySelector<HTMLElement>(
			".sidenv_num.bg_del.f_f"
		); /* 侧边栏-头像-右上角小红点 */
		let tipNums = 0;
		if (redBtn) {
			tipNums = parseInt(DOMUtils.text(redBtn));
			DOMUtils.html(
				".sidenv_num.bg_del.f_f",
				(tipNums + getTipNums()).toString()
			);
		} else {
			let tipnums = getTipNums();
			if (tipnums) {
				DOMUtils.before(
					".sidenv_user em",
					`<span class="sidenv_num bg_del f_f">${tipnums}</span>`
				);
			}
		}
		if (getTipNums()) {
			/* 当前网页为，侧边slider，付费白嫖列表 */
			DOMUtils.append(
				".comiis_left_Touch .paymentsubjectreminder div.flex",
				/*html*/ `
                <span class="sidenv_num bg_del f_f" style="
                    position: relative;
                    border-radius: 18px;
                    height: 6px;
                    width: 6px;
                    left: 3px;
                    display: inline-flex;
                    bottom: 8px;
                "></span>`
			);
		}
	},
	registerMenu() {
		ElementUtils.registerLeftMenu({
			name: "付费主题白嫖提醒",
			icon: "",
			iconColor: "#ec0000",
			callback: () => {
				this.showView();
			},
		});
	},
	/**
	 * 显示白嫖列表
	 */
	showView() {
		log.info(`显示白嫖列表`);
		let data = MTPaidThemePost.getTipData();
		pops.alert({
			title: {
				text: "付费主题白嫖列表",
				position: "center",
			},
			content: {
				text: "",
				html: true,
			},
			btn: {
				ok: {
					text: "关闭",
					type: "default",
				},
			},
			mask: {
				enable: true,
			},
			width: "88vw",
			height: "88vh",
		});
		/* 可白嫖且未访问 */
		let notVisitedTipContent = "";
		/* 可白嫖且未访问的数量 */
		let notVisitedNums = 0;
		/* 可白嫖帖子-未读的加左上边红点 */
		let isFreeContent = "";
		/* 需付费帖子 */
		let isPaidContent = "";
		// 已免费但是未访问的帖子
		let isFreeNotVisitedContentList: any[] = [];
		// 已免费的帖子
		let isFreeContentList: any[] = [];
		// 已订阅的帖子
		let isPaidContentList: any[] = [];
		data.forEach((item, index) => {
			let timeColor = "#f91212";
			let leftRedBtn = "";
			if (new Date().getTime() > item["expirationTimeStamp"]) {
				/* 可白嫖 */
				timeColor = "#1e90ff";
				if (item["isVisited"]) {
					// 该帖子已经访问过
				} else {
					leftRedBtn = /*html*/ `
                        <span class="icon_msgs bg_del" style="position: fixed;width: 10px;height: 10px;border-radius: 50%;margin: 10px 0px 0px -15px;"></span>
                    `;
					notVisitedNums = notVisitedNums + 1;
				}
			}
			let contentInfo = {
				content: /*html*/ `
                <tbody id="autolist">
                    <tr>
                        <td style="width: 100%;">
                            <div style="display: inline-flex;">
                            ${leftRedBtn}
                            <div style="width: 240px;">                 
                                <a href="javascript:void(0);" t-href="${item["url"]}" t-index="${index}" style="color: #1e90ff;">${item["title"]}</a>
                                <li style="margin: 5px 15px;color: ${timeColor};">${item["expirationTime"]}</li>
                            </div>
                            <div style="align-self: center;margin-left: 10px;" t-index="${index}" class="delsubjecttip">
                                <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr style="height:15px;"></tr>
                </tbody>`,
				timestamp: item["expirationTimeStamp"],
			};
			if (new Date().getTime() > item["expirationTimeStamp"]) {
				/* 可白嫖 */
				if (leftRedBtn != "") {
					isFreeNotVisitedContentList.push(contentInfo);
				} else {
					isFreeContentList.push(contentInfo);
				}
			} else {
				isPaidContentList.push(contentInfo);
			}
		});
		log.info("可白嫖但未访问：", isFreeNotVisitedContentList);
		log.info("可白嫖：", isFreeContentList);
		log.info("未到白嫖时间：", isPaidContentList);
		utils.sortListByProperty(
			isFreeNotVisitedContentList,
			"expirationTimeStamp",
			false
		);
		utils.sortListByProperty(isFreeContentList, "timestamp", false);
		utils.sortListByProperty(isPaidContentList, "timestamp", false);

		log.info("排序后——可白嫖但未访问：", isFreeNotVisitedContentList);
		log.info("排序后——可白嫖：", isFreeContentList);
		log.info("排序后——未到白嫖时间：", isPaidContentList);
		isFreeContent =
			utils.mergeArrayToString(isFreeNotVisitedContentList, "content") +
			utils.mergeArrayToString(isFreeContentList, "content");
		isPaidContent = utils.mergeArrayToString(isPaidContentList, "content");
		if (notVisitedNums > 0) {
			notVisitedTipContent = /*html*/ `
            <span class="icon_msgs bg_del f_f" style="
                display: inline-block;
                position: absolute;
                width: 16px;
                height: 16px;
                line-height: 16px;
                border-radius: 50%;
                font-size: 14px;
                text-align: center;
                margin: 3px 0px 0px 10px;
            ">${notVisitedNums}</span>`;
		}
		let dialogIsFreeContent = /*html*/ `
            <details class="subjectcanvisit" open="">
                <summary>可白嫖${notVisitedTipContent}</summary>
                <table id="paymentSubjectReminderIsFreeList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${isFreeContent}    
                </table>
            </details>
        `;
		let dialogIsPaidContent = /*html*/ `
            <details class="subjectnotvisit">
                <summary>需付费</summary>
                <table id="paymentSubjectReminderIsPaidList" style="overflow: auto;height: inherit;margin: 15px 0px;">
                    ${isPaidContent}
                </table>
            </details>
        `;
		let $msgcon = document.querySelector<HTMLElement>(".msgcon")!;
		DOMUtils.html($msgcon, "");
		DOMUtils.append($msgcon, dialogIsFreeContent);
		DOMUtils.append($msgcon, dialogIsPaidContent);
		DOMUtils.css($msgcon, "height", "400px");

		DOMUtils.on(
			document.querySelector(".delsubjecttip i.comiis_font")!,
			"click",
			(event) => {
				let $click = event.target! as HTMLElement;
				let $parent = DOMUtils.parent($click);
				var t_index = parseInt($parent.getAttribute("t-index")!);
				pops.confirm({
					title: {
						text: "提示",
						position: "center",
					},
					content: {
						text: "<p>确定移出付费主题白嫖列表？</p>",
						html: true,
					},
					mask: {
						enable: true,
					},
					btn: {
						ok: {
							callback: (details) => {
								data.splice(t_index, 1);
								MTPaidThemePost.setTipData(data);
								utils.deleteParentNode($click, "tr");
								details.close();
							},
						},
					},
					width: "80vw",
					height: "300px",
				});
			}
		);

		let $paymentSubjectReminderIsFreeList = document.querySelector<HTMLElement>(
			"#paymentSubjectReminderIsFreeList"
		)!;
		DOMUtils.on($paymentSubjectReminderIsFreeList, "click", "a", (event) => {
			let $click = event.target as HTMLAnchorElement;
			var tIndex = parseInt($click.getAttribute("t-index")!);
			var tHref = $click.getAttribute("t-href")!;
			data[tIndex]["isVisited"] = true;
			MTPaidThemePost.setTipData(data);
			window.open(tHref, "_blank");
			$click.setAttribute("style", "color: #000000;");
			if (
				$click?.parentElement?.parentElement?.children[0].className !=
				"icon_msgs bg_del"
			) {
				return;
			}
			$click.parentElement.parentElement.children[0].remove();
			DOMUtils.append(
				$paymentSubjectReminderIsFreeList,
				$click?.parentElement?.parentElement?.parentElement?.parentElement
					?.parentElement!
			);
			let $del = document.querySelector<HTMLDivElement>(
				".subjectcanvisit summary span.icon_msgs.bg_del.f_f"
			)!;
			let notVisitedNumsStr = DOMUtils.text($del);
			let notVisitedNums = parseInt(notVisitedNumsStr) - 1;
			if (notVisitedNums > 0) {
				DOMUtils.html($del, notVisitedNums.toString());
			} else {
				$del.remove();
			}
		});
		let $paymentSubjectReminderIsPaidList =
			document.querySelector<HTMLDivElement>(
				"paymentSubjectReminderIsPaidList"
			)!;
		DOMUtils.on($paymentSubjectReminderIsPaidList, "click", "a", (event) => {
			let $click = event.target as HTMLAnchorElement;
			var t_index = $click.getAttribute("t-index")!;
			var t_href = $click.getAttribute("t-href")!;
			window.open(t_href, "_blank");
			$click.setAttribute("style", "color: #000000;");
		});
	},
	getTipData() {
		return GM_getValue<DataOption[]>(this.$key.tipData, []);
	},
	setTipData(data: any[]) {
		GM_setValue(this.$key.tipData, data);
	},
};
