import Qmsg from "qmsg";
import {
	DouYinVideoFilterBase,
	type DouYinVideoHandlerInfo,
	type DouYinVideoAwemeInfo,
} from "./DouYinVideoFilterBase";
import { DOMUtils, log, pops, utils } from "@/env";
import { DouYinVideoFilter } from "./DouYinVideoFilter";

export const DouYinVideoFilterDebug = {
	init() {
		this.show();
	},
	/**
	 * 显示调试面板
	 */
	show() {
		const KEY = "temp-debug-recommend-video-filter-rule";
		let videoFilter = new DouYinVideoFilterBase({
			key: KEY,
		});
		videoFilter.clear();
		let choose = window.prompt(
			`请输入需要执行的操作：
1. 获取当前视频的信息字典
2. 获取所有视频的信息字典
3. 调试自定义规则`,
			"1"
		);
		let awemeInfo: DouYinVideoAwemeInfo | undefined = void 0;
		if (choose === "1" || choose === "3") {
			awemeInfo = DouYinVideoFilter.getCurrentActiveVideoInfo();
			if (awemeInfo == null) {
				Qmsg.error("获取当前播放的视频信息失败，详情请看控制台");
				return;
			}
			log.info(["当前视频awemeInfo信息：", awemeInfo]);
		}
		if (choose === "1" || choose === "2") {
			let videoInfoJSON = "";
			if (choose === "1") {
				videoInfoJSON = JSON.stringify(
					videoFilter.getAwemeInfoDictData(awemeInfo!),
					null,
					4
				);
			} else if (choose === "2") {
				let allAwemeInfoList = DouYinVideoFilter.getAllFeedVideoAwemeInfo();
				let allAwemeDictInfoList: DouYinVideoHandlerInfo[] = [];
				allAwemeInfoList.forEach((awemeInfo) => {
					allAwemeDictInfoList.push(
						videoFilter.getAwemeInfoDictData(awemeInfo)
					);
				});
				log.info(["全部的awemeInfo信息↓", allAwemeInfoList]);
				log.info(["解析出全部的awemeInfo的字典信息↓", allAwemeDictInfoList]);
				videoInfoJSON = JSON.stringify(allAwemeDictInfoList, null, 4);
			}
			let $confirm = pops.confirm({
				title: {
					text: "视频信息",
					position: "center",
				},
				content: {
					text: /*html*/ `
                    <div class="video-info">
                        <p class="copy-video-info-tip">是否复制以下信息到剪贴板？</p>
                        <textarea class="video-info-json" disabled="true"></textarea>
                    </div>
                    `,
					html: true,
				},
				btn: {
					ok: {
						text: "复制",
						callback: function () {
							utils.setClip(videoInfoJSON);
						},
					},
				},
				mask: {
					enable: true,
					clickEvent: {
						toClose: true,
					},
				},
				width: window.innerWidth > 500 ? "50vw" : "400px",
				height: window.innerHeight > 500 ? "60vh" : "400px",
				drag: true,
				dragLimit: true,
				style: /*css*/ `
                .video-info-json{
                    width: 100%;
                    height: ${window.innerHeight > 500 ? "55vh" : "300px"};
                }
                `,
			});
			let $videoInfoTag = $confirm.$shadowRoot.querySelector<HTMLElement>(
				".copy-video-info-tip"
			)!;
			let $videoInfoJSON =
				$confirm.$shadowRoot.querySelector<HTMLTextAreaElement>(
					".video-info-json"
				)!;
			$videoInfoJSON.value = videoInfoJSON;
			$videoInfoJSON.readOnly = true;
		} else if (choose === "3") {
			let rule = window.prompt("请输入要调试的规则(单条规则)");
			if (utils.isNotNull(rule)) {
				videoFilter.updateRule(rule);
				log.info([
					"过滤器-视频信息tag字典：",
					videoFilter.getAwemeInfoDictData(awemeInfo!),
				]);
				let flag = videoFilter.checkAwemeInfoIsFilter(awemeInfo!);
				if (flag) {
					let $qmsg = Qmsg.success(
						/*html*/ `
						<div class="dy-tip-text">当前视频符合该屏蔽规则，是否复制该规则？</div>
						<a class="dy-tip-copy" href="javascript:;">复制</a>
						`,
						{
							timeout: 5000,
							isHTML: true,
							customClass: "dy-video-filter-debug-rule-tip",
							style: /*css*/ `
							.dy-video-filter-debug-rule-tip{
								display: flex;
							}
							`,
						}
					);
					let $copy = $qmsg.$Qmsg.querySelector<HTMLAnchorElement>(
						".dy-video-filter-debug-rule-tip .dy-tip-copy"
					);
					DOMUtils.on($copy, "click", (event) => {
						utils.preventEvent(event);
						utils.setClip(rule);
					});
				} else {
					Qmsg.error("当前视频不符合该屏蔽规则");
				}
			}
		} else {
			log.error("输入有误：" + choose);
		}
		videoFilter.destory();
	},
};
