import { DOMUtils, addStyle, utils } from "@/env";
import blockCSS from "./block.css?raw";
import Qmsg from "qmsg";
import { DouYinUrlUtils } from "@/utils/DouYinUrlUtils";
import { PopsPanel } from "@/setting/setting";

export const MDouYinShareUser = {
	init() {
		addStyle(blockCSS);
		PopsPanel.execMenuOnce("m-dy-share-user-coverPlayletList", () => {
			this.coverPlayletList();
		});
		PopsPanel.execMenuOnce("m-dy-share-user-coverPostListContainer", () => {
			this.coverPostListContainer();
		});
	},
	/**
	 * 覆盖视频合集点击事件
	 */
	coverPlayletList() {
		DOMUtils.on(
			document,
			"click",
			".user-playlet-list .playlet-item",
			(event) => {
				utils.preventEvent(event);

				let $click = event.target as HTMLDivElement;
				let reactFiber = utils.getReactObj($click)?.reactFiber;
				let key = reactFiber?.key;
				if (key == null) {
					Qmsg.error("获取视频合集key失败");
					return;
				}
				let index = reactFiber?.index;
				if (index == null) {
					Qmsg.error("获取视频合集index失败");
					return;
				}
				let playletList = reactFiber?.return?.return?.pendingProps?.playletList;
				if (playletList == null) {
					Qmsg.error("获取视频合集playletList失败");
					return;
				}
				let currentPlaylet = playletList[index];
				let url = DouYinUrlUtils.getCollectionUrl(currentPlaylet["mix_id"]);
				window.open(url, "_blank");
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 覆盖视频列表点击事件
	 */
	coverPostListContainer() {
		DOMUtils.on(
			document,
			"click",
			".post-list-container .user-post-cover",
			(event) => {
				utils.preventEvent(event);
				let $click = event.target as HTMLDivElement;
				let reactFiber = utils.getReactObj($click)?.reactFiber;
				if (reactFiber?.return?.memoizedProps?.productionUrl) {
					let url = reactFiber?.return?.memoizedProps?.productionUrl;
					window.open(url, "_blank");
				} else {
					Qmsg.error("获取视频链接失败");
				}
			},
			{
				capture: true,
			}
		);
	},
};
