import { BilibiliVideoApi } from "@/api/BilibiliVideoApi";
import { utils } from "@/env";
import Artplayer from "artplayer";
import type { Events } from "artplayer/types/events";

type TopToolBarUpdateWrapOption = {
	/** 是否显示容器 @default false */
	showWrap?: boolean;
};

type TopToolBarUpdateTitleOption = {
	/** 视频标题文字 */
	title?: string;
	/** 是否显示标题 @default false */
	showTitle?: boolean;
};

type TopToolBarUpdateOnlineTitleOption =
	| {
			/** 视频的aid */
			aid: number | string;
			/** 视频的cid */
			cid: number | string;
			/** 是否显示在线观看人数 @default false */
			showOnlineTotal?: boolean;
	  } & {
			/** 视频的bvid */
			bvid: string;
			/** 视频的cid */
			cid: number | string;
			/** 是否显示在线观看人数 @default false */
			showOnlineTotal?: boolean;
	  };

type TopToolBarUpdateRightOption = {
	/** 是否显示右侧视图 */
	showRight?: boolean;
	/** 是否显示右侧下面的follow */
	showRightFollow?: boolean;
};

type TopToolBarOption = TopToolBarUpdateWrapOption &
	TopToolBarUpdateTitleOption &
	TopToolBarUpdateOnlineTitleOption &
	TopToolBarUpdateRightOption;

const TopToolBarUtils = {
	show($el: HTMLElement) {
		$el.style.display = "";
	},
	hide($el: HTMLElement) {
		$el.style.display = "none";
	},
};

const TopToolBarEvent = {
	events: {
		control: (state) => {
			if (!state) {
				return;
			}
			TopToolBar.updateOnlineTotal(TopToolBar.option);
		},
	} as {
		[key in keyof Events]?: (...args: Events[key]) => unknown;
	},
	/**
	 * 绑定事件
	 */
	bind() {
		Object.keys(this.events).forEach((eventName) => {
			TopToolBar.art.on(
				eventName as keyof Events,
				(this.events as any)[eventName as keyof Events]
			);
		});
	},
	/**
	 * 取消绑定事件
	 */
	unbind() {
		Object.keys(this.events).forEach((eventName) => {
			TopToolBar.art.off(
				eventName as keyof Events,
				(this.events as any)[eventName as keyof Events]
			);
		});
	},
};

const TopToolBar = {
	art: null as any as Artplayer,
	$el: {
		/** 容器 */
		$topWrap: null as any as HTMLElement,
		$topTitle: null as any as HTMLElement,
		/** 视频标题 */
		$topTitleText: null as any as HTMLDivElement,
		/** 视频标题的下面的容器 */
		$topTitleFollow: null as any as HTMLDivElement,
		/** 视频标题下面的在线观看人数 */
		$topTitleFollowText: null as any as HTMLDivElement,
		/** 右侧容器 */
		$topRight: null as any as HTMLDivElement,
		/** 右侧容器的下面的容器 */
		$topRightFollow: null as any as HTMLDivElement,
	},
	option: {} as TopToolBarOption,
	/**
	 * 初始化
	 */
	init(option: TopToolBarOption) {
		// @ts-ignore
		this.option = null;
		this.option = option;
		this.art.layers.add({
			name: "top-wrap",
			html: /*html*/ `
            <div class="art-player-top-wrap">
                <div class="art-player-top-title">
                    <!-- 番剧名，第xx集 -->
                    <div class="art-player-top-title-text"></div></div>
                <div class="art-player-top-follow">
                    <svg class="art-player-top-follow-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13306"><path d="M641.522424 590.30953c-29.470195-20.878516-61.574381-37.341466-95.630011-49.183166C617.699855 497.470075 661.783887 419.876859 661.783887 335.542102c0-132.611274-108.021226-240.529145-240.581334-240.529145-132.62867 0-240.545518 107.916848-240.545518 240.529145 0 45.162596 12.561084 89.143273 36.623106 127.426181 20.159132 32.190143 47.677882 59.195194 80.124875 78.789461-34.56933 11.740392-67.220984 28.493961-97.135294 49.663096-32.652677 23.136953-61.334927 51.117215-85.361133 83.051531-49.937342 66.587558-76.393901 145.737222-76.393901 228.959645 0 15.624862 12.561084 28.237111 28.066219 28.237111 15.607466 0 28.27088-12.612249 28.27088-28.237111 0-86.747713 33.850969-168.516018 95.252411-230.277664 61.266365-61.488423 142.486178-95.40693 228.532927-95.491865 2.806929 0.274246 5.749958 0 8.556886-0.685615l2.326998-0.445138c83.650165 1.678222 162.338319 35.528168 222.268246 95.544053 61.403488 61.675688 95.185896 143.478785 95.185896 230.311433 0 15.45397 12.629645 28.134781 28.16855 28.134781 15.538905 0 28.133757-12.681834 28.133757-28.134781 0-83.307358-26.355251-162.457022-76.393901-228.925876C702.958658 641.376603 674.174078 613.412714 641.522424 590.30953zM421.203576 519.768941c-101.550861 0-184.242188-82.588997-184.242188-184.225815 0-101.550861 82.692351-184.173626 184.242188-184.173626 101.483322 0 184.17465 82.622766 184.17465 184.173626C605.378226 437.178921 522.686898 519.768941 421.203576 519.768941z" p-id="13307"></path><path d="M932.277484 638.022205c-36.074613-52.05968-84.915995-91.249237-141.595902-113.821325 24.986067-17.661242 46.070268-41.141002 61.231573-68.505233 17.627473-31.642674 27.006074-67.820642 27.006074-104.699574 0-114.745371-88.956008-208.082152-198.10594-208.082152-15.607466 0-28.167526 12.595876-28.167526 28.134781s12.56006 28.082592 28.167526 28.082592c78.175477 0 141.700279 68.197218 141.700279 151.86478 0 83.804684-63.524802 151.932318-141.700279 151.932318-15.607466 0-28.167526 12.594853-28.167526 28.134781l0 0.171915c0 15.538905 12.56006 28.184923 28.167526 28.184923 140.569526 0 254.990508 121.899304 254.990508 271.76045 0 15.539928 12.664438 28.219715 28.203342 28.219715 15.504112 0 28.203342-12.68081 28.203342-28.219715C992.209458 761.28967 971.399503 694.427866 932.277484 638.022205z" p-id="13308"></path></svg>
                    <span class="art-player-top-follow-text"></span>
                </div>
                <!-- 右侧的图标 -->
                <div class="art-player-top-right">
                    <div class="art-player-top-right-follow"></div>
                </div>
            </div>
            `,
			mounted: async function ($topWrap) {
				TopToolBar.$el.$topWrap = $topWrap;
				TopToolBar.$el.$topTitle = $topWrap.querySelector(
					".art-player-top-title"
				)!;
				TopToolBar.$el.$topTitleText = $topWrap.querySelector(
					".art-player-top-title-text"
				)!;
				TopToolBar.$el.$topTitleFollow = $topWrap.querySelector(
					".art-player-top-follow"
				)!;
				TopToolBar.$el.$topTitleFollowText = $topWrap.querySelector(
					".art-player-top-follow-text"
				)!;
				TopToolBar.$el.$topRight = $topWrap.querySelector(
					".art-player-top-right"
				)!;
				TopToolBar.$el.$topRightFollow = $topWrap.querySelector(
					".art-player-top-right-follow"
				)!;
				// 先隐藏视频标题
				TopToolBarUtils.hide(TopToolBar.$el.$topTitleFollow);

				// 更新总视图
				TopToolBar.update(option);
				// 绑定事件
				TopToolBarEvent.bind();
			},
		});
	},
	/**
	 * 更新配置
	 */
	update(option: TopToolBarOption) {
		// 更新总视图
		TopToolBar.updateWrap(option);
		// 更新标题
		TopToolBar.updateTitle(option);
		// 更新在线观看人数
		TopToolBar.updateOnlineTotal(option);
		// 更新右侧信息
		TopToolBar.updateRight(option);
	},
	/**
	 * 更新标题
	 * @param option
	 * @returns
	 */
	updateTitle(option: TopToolBarUpdateTitleOption) {
		console.log(
			`[artplayer-plugin-TopToolBar]: 更新标题 ==> ${JSON.stringify(option)}`
		);
		if (typeof option.title === "string") {
			TopToolBar.$el.$topTitleText.innerText = option.title;
		}
		if (option.showTitle) {
			TopToolBarUtils.show(TopToolBar.$el.$topTitle);
		} else {
			TopToolBarUtils.hide(TopToolBar.$el.$topTitle);
		}
	},
	/**
	 * 更新在线观看人数
	 */
	async updateOnlineTotal(option: TopToolBarUpdateOnlineTitleOption) {
		console.log(
			`[artplayer-plugin-TopToolBar]: 更新在线观看人数 ==> ${JSON.stringify(
				option
			)}`
		);
		// 请求在线观看人数
		let onlineTotalInfo = await BilibiliVideoApi.onlineTotal({
			aid: option.aid,
			bvid: option.bvid,
			cid: option.cid,
		});
		if (!onlineTotalInfo) {
			return;
		}
		// 更新在线观看人数
		TopToolBar.$el.$topTitleFollowText.innerText = `${
			onlineTotalInfo["total"] || onlineTotalInfo["count"] || 0
		}人正在看`;
		if (option.showOnlineTotal) {
			TopToolBarUtils.show(TopToolBar.$el.$topTitleFollow);
		} else {
			TopToolBarUtils.hide(TopToolBar.$el.$topTitleFollow);
		}
		console.log(
			`[artplayer-plugin-TopToolBar]: 更新在线观看人数，请求的数据 ==> ${JSON.stringify(
				onlineTotalInfo
			)}`
		);
	},
	/**
	 * 更新视图
	 * @param option
	 */
	updateWrap(option: TopToolBarUpdateWrapOption) {
		console.log(
			`[artplayer-plugin-TopToolBar]: 更新总视图 ==> ${JSON.stringify(option)}`
		);
		if (option.showWrap) {
			TopToolBarUtils.show(this.$el.$topWrap);
		} else {
			TopToolBarUtils.hide(this.$el.$topWrap);
		}
	},
	/**
	 * 更新右侧视图
	 */
	updateRight(option: TopToolBarUpdateRightOption) {
		console.log(
			`[artplayer-plugin-TopToolBar]: 更新右侧视图 ==> ${JSON.stringify(
				option
			)}`
		);
		if (option.showRight) {
			TopToolBarUtils.show(this.$el.$topRight);
		} else {
			TopToolBarUtils.hide(this.$el.$topRight);
		}
		if (option.showRightFollow) {
			TopToolBarUtils.show(this.$el.$topRightFollow);
		} else {
			TopToolBarUtils.hide(this.$el.$topRightFollow);
		}
	},
};

export const artplayerPluginTopToolBar = (option: TopToolBarOption) => {
	return (art: Artplayer) => {
		TopToolBar.art = art;
		TopToolBar.init(option);
		return {
			name: "plugin-bilibili-topToolBar",
			update(option: TopToolBarOption) {
				TopToolBar.update(option);
			},
			updateWrap(option: TopToolBarUpdateWrapOption) {
				utils.assign(TopToolBar.option, option);
				TopToolBar.updateWrap(option);
			},
			updateTitle(option: TopToolBarOption) {
				utils.assign(TopToolBar.option, option);
				TopToolBar.updateTitle(option);
			},
			updateOnlineTotal(option: TopToolBarUpdateOnlineTitleOption) {
				utils.assign(TopToolBar.option, option);
				TopToolBar.updateOnlineTotal(option);
			},
			updateRight(option: TopToolBarUpdateRightOption) {
				utils.assign(TopToolBar.option, option);
				TopToolBar.updateRight(option);
			},
		};
	};
};
