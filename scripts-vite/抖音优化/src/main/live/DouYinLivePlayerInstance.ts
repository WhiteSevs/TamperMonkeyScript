import { GM_Menu, log, pops, utils } from "@/env";
import Qmsg from "qmsg";

type DouYinLivePlayerInstance = {
	config: {
		/** 推流地址 */
		url: string;
	};
	danmu: any;
	isActive: boolean;
	isBufferControlPaused: boolean;
	isCanplay: boolean;
	isCssfullScreen: boolean;
	isError: boolean;
	isInPicture: boolean;
	isInstNext: boolean;
	isPlaying: boolean;
	isReady: boolean;
	isSeeking: boolean;
	isUserActive: boolean;
	video: HTMLVideoElement;
	videoConfig: {
		controls: boolean;
		autoplay: boolean;
		playsinline: boolean;
		"x5-playsinline": boolean;
		"webkit-playsinline": boolean;
		tabindex: number;
		mediaType: string;
		"data-index": number;
	};
	/** blob播放地址 */
	url: string;
	/** blob播放地址 */
	src: string;
	/** 播放器版本 */
	version: string;
};

export const DouYinLivePlayerInstance = {
	$data: {
		playerInstance: null as DouYinLivePlayerInstance | null,
	},
	$el: {
		$playerIns: null as HTMLElement | null,
	},
	/**
	 * 添加油猴菜单
	 */
	initMenu() {
		GM_Menu.add({
			key: "live-parsePlayerInstance",
			text: "⚙ PlayerInstance",
			autoReload: false,
			showText(text, enable) {
				return text;
			},
			callback: () => {
				let $playerIns = document.querySelector<HTMLDivElement>(
					`[id^="living_room_player_container"]`
				);
				if (!$playerIns) {
					log.error("获取playerInstance所在的元素失败");
					Qmsg.error("获取playerInstance所在的元素失败");
					return;
				}
				this.$el.$playerIns = $playerIns;
				let playerInstance = this.parseElementPlayerIns(this.$el.$playerIns);
				if (playerInstance == null) {
					log.error("获取playerInstance失败");
					log.error("获取playerInstance失败");
					return;
				}
				this.$data.playerInstance = playerInstance;
				this.showParseDialog();
			},
		});
	},
	/**
	 * 解析元素上的播放器实例
	 */
	parseElementPlayerIns($ele: HTMLElement) {
		let react = utils.getReactObj($ele);
		return react?.reactFiber?.child?.child?.memoizedProps
			?.playerInstance as null | DouYinLivePlayerInstance;
	},
	/**
	 * 显示解析的信息弹窗
	 */
	showParseDialog() {
		log.info(["解析的信息：", this.$data.playerInstance]);
		/** blob播放地址 */
		let blobSrc =
			this.$data.playerInstance?.url || this.$data.playerInstance?.src;
		/** 推流地址 */
		let pushSrc = this.$data.playerInstance?.config.url;
		let $alert = pops.alert({
			title: {
				text: "解析信息",
				position: "center",
			},
			content: {
				text: /*html*/ `
                <div class="live-dy-parse-container">
                    <div class="live-dy-parse-item">
                        <div class="live-dy-parse-item-name">推流地址：</div>
                        <a class="live-dy-parse-item-value" href="${pushSrc}" target="_blank">${pushSrc}
                        </a>
                    </div>
                    <div class="live-dy-parse-item">
                        <div class="live-dy-parse-item-name">blob地址：</div>
                        <a class="live-dy-parse-item-value" href="${blobSrc}" target="_blank">${blobSrc}
                        </a>
                    </div>
                    <div class="live-dy-parse-item">
                        <div class="live-dy-parse-item-name">播放器版本：</div>
                        <div class="live-dy-parse-item-value">${this.$data.playerInstance?.version}
                        </div>
                    </div>
                </div>
                `,
				html: true,
			},
			mask: {
				enable: false,
			},
			width: window.innerWidth > 550 ? "550px" : "88wv",
			height: window.innerHeight > 550 ? "550px" : "70vh",
			style: /*css*/ `
            .live-dy-parse-container{
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .live-dy-parse-item{
                display: flex;
                flex-wrap: wrap;
                border: 1px solid #919191;
                border-left: 0px;
                border-right: 0px;
                width: 100%;
                background: #0af9ee;
                padding: 5px 5px;
            }
            `,
		});
	},
};
