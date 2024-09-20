import Qmsg from "qmsg";
import { DouYinRecommendVideo } from "./DouYinRecommendVideo";
import {
	DouYinVideoFilter,
	type DouYinVideoAwemeInfo,
} from "../DouYinVideoFilter";
import { log, pops, utils } from "@/env";

export const DouYinRecommendVideoFilterDebug = {
	init() {
		let currentActiveVideoInfo =
			DouYinRecommendVideo.getCurrentActiveVideoInfo();
		if (currentActiveVideoInfo == null) {
			Qmsg.error("获取当前播放的视频信息失败，详情请看控制台");
			return;
		}
		this.show(currentActiveVideoInfo);
	},
	/**
	 * 显示调试面板
	 */
	show(awemeInfo: DouYinVideoAwemeInfo) {
		log.info(awemeInfo);
		const KEY = "temp-debug-recommend-video-filter-rule";
		let videoFilter = new DouYinVideoFilter({
			key: KEY,
		});
		videoFilter.clear();
		let choose = window.prompt(
			`请输入需要执行的操作：
1. 获取当前视频的信息字典
2. 调试自定义规则`,
			"1"
		);
		if (choose === "1") {
			let videoInfoJSON = JSON.stringify(
				videoFilter.getVideoInfoTagMap(awemeInfo),
				null,
				4
			);
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
				width: "300px",
				height: "400px",
				drag: true,
				dragLimit: true,
				style: /*css*/ `
                .video-info-json{
                    width: 100%;
                    height: 200px;
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
		} else if (choose === "2") {
			let rule = window.prompt("请输入要调试的规则(单条规则)");
			if (utils.isNotNull(rule)) {
				videoFilter.updateRule(rule);
				log.info([
					"过滤器-视频信息tag字典：",
					videoFilter.getVideoInfoTagMap(awemeInfo),
				]);
				let flag = videoFilter.checkAwemeInfoIsFilter(awemeInfo);
				if (flag) {
					Qmsg.success("当前视频符合该屏蔽规则");
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
