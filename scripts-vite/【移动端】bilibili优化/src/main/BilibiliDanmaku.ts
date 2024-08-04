import { BilibiliPlayer } from "./BilibiliPlayer";
import { PopsPanel } from "@/setting/setting";
import { log, utils } from "@/env";
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { BilibiliRouter } from "@/router/BilibiliRouter";

/** 弹幕过滤器 */
export const BilibiliDanmakuFilter = {
	key: "bili-danmaku-filter",
	/** 弹幕类型 */
	mode: {
		6: "从左往右",
		5: "顶部",
		4: "底部",
		1: "从右往左",
	},
	$player: {
		async danmakuArray() {
			await utils.waitPropertyByInterval(
				unsafeWindow,
				() => {
					return (
						typeof BilibiliPlayer.player === "object" &&
						typeof BilibiliPlayer.player?.playerPromise === "object"
					);
				},
				250,
				10000
			);
			let playerPromise = await BilibiliPlayer.$player.playerPromise();
			await utils.waitPropertyByInterval(
				async () => {
					playerPromise = await BilibiliPlayer.$player.playerPromise();
				},
				() => {
					return (
						typeof playerPromise?.danmaku?.danmakuCore?.danmakuArray ===
							"object" &&
						playerPromise?.danmaku?.danmakuCore?.danmakuArray != null &&
						Array.isArray(playerPromise?.danmaku?.danmakuCore?.danmakuArray)
					);
				},
				250,
				10000
			);
			let danmakuArray = playerPromise?.danmaku?.danmakuCore?.danmakuArray;
			// log.info(`获取当前弹幕列表数量: ${danmakuArray.length}`);
			return danmakuArray;
		},
		async danmakuFilter() {
			await utils.waitPropertyByInterval(
				unsafeWindow,
				() => {
					return (
						typeof BilibiliPlayer.player === "object" &&
						typeof BilibiliPlayer.player?.playerPromise === "object"
					);
				},
				250,
				10000
			);
			let playerPromise = await BilibiliPlayer.$player.playerPromise();
			await utils.waitPropertyByInterval(
				async () => {
					playerPromise = await BilibiliPlayer.$player.playerPromise();
				},
				() => {
					return (
						typeof playerPromise?.danmaku?.danmakuCore?.config
							?.danmakuFilter === "function"
					);
				},
				250,
				10000
			);
			let danmakuFilter =
				playerPromise?.danmaku?.danmakuCore?.config?.danmakuFilter;
			return danmakuFilter;
		},
	},
	$data: {
		danmakuArray: <DanmaConfig[]>[],
	},
	$fn: {
		updateDanmakuArray: new utils.LockFunction(async () => {
			BilibiliDanmakuFilter.$data.danmakuArray =
				await BilibiliDanmakuFilter.$player.danmakuArray();
		}, 250),
	},
	async init() {
		let totalRule = this.parseRule();

		let danmakuFilter = await this.$player.danmakuFilter();
		let that = this;
		if (typeof danmakuFilter == "function") {
			let playerPromise = await BilibiliPlayer.$player.playerPromise();
			await utils.waitPropertyByInterval(
				async () => {
					playerPromise = await BilibiliPlayer.$player.playerPromise();
				},
				() => {
					return (
						typeof playerPromise?.danmaku?.danmakuCore?.config
							?.danmakuFilter === "function"
					);
				},
				250,
				10000
			);
			let isBangumi = BilibiliRouter.isBangumi();
			let ownFilter = function (
				danmaConfig: DanmaConfig | BangumiDanmaConfig
			): boolean {
				let isFilter = false;
				isFilter = that.filter(danmaConfig as DanmaConfig, totalRule);
				if (isBangumi) {
					// 番剧页面中，true是不过滤，false是过滤
					isFilter = !isFilter;
				}
				return isFilter;
			};
			(playerPromise.danmaku.danmakuCore.config.danmakuFilter as any) =
				ownFilter;
			log.success(`成功覆盖danmakuFilter`);
		}
	},
	/** 更新弹幕列表 */
	updateDanmakuArray() {
		this.$fn.updateDanmakuArray.run();
	},
	/**
	 * 判断是否需要过滤
	 * @param danmaConfig
	 * @param totalRule
	 * @param danmakuArray
	 * @returns
	 */
	filter(danmaConfig: DanmaConfig, totalRule: RegExp[]): boolean {
		this.updateDanmakuArray();
		let filterFlag = false;
		if (!filterFlag) {
			if (PopsPanel.getValue("bili-danmaku-filter-type-roll")) {
				// 滚动
				if (danmaConfig.mode === 1 || danmaConfig.mode === 6) {
					filterFlag = true;
				}
			}
		}
		if (!filterFlag) {
			if (PopsPanel.getValue("bili-danmaku-filter-type-top")) {
				// 顶部
				if (
					danmaConfig.mode === 5 ||
					danmaConfig.mode === 1 ||
					danmaConfig.mode === 6
				) {
					filterFlag = true;
				}
			}
		}
		if (!filterFlag) {
			if (PopsPanel.getValue("bili-danmaku-filter-type-bottom")) {
				// 底部
				if (danmaConfig.mode === 4) {
					filterFlag = true;
				}
			}
		}
		if (!filterFlag) {
			if (PopsPanel.getValue("bili-danmaku-filter-type-colour")) {
				// 彩色
				if (danmaConfig.color !== 16777215) {
					filterFlag = true;
				}
			}
		}
		if (!filterFlag) {
			if (PopsPanel.getValue("bili-danmaku-filter-type-repeat")) {
				// 重复
				let findIndex = this.$data.danmakuArray.findIndex(
					(__danmaConfig__, __index__) => {
						return (
							danmaConfig.text === __danmaConfig__.text &&
							danmaConfig != __danmaConfig__
						);
					}
				);
				if (findIndex != -1) {
					filterFlag = true;
					console.log("重复：" + findIndex);
				}
			}
		}
		if (!filterFlag) {
			// if (PopsPanel.getValue("bili-danmaku-filter-type-senior")) {
			// 	// 高级
			// }
		}

		if (!filterFlag) {
			if (PopsPanel.getValue<boolean>("bili-danmaku-filter")) {
				// 自定义规则
				for (let ruleIndex = 0; ruleIndex < totalRule.length; ruleIndex++) {
					const rule = totalRule[ruleIndex];
					if (
						typeof danmaConfig.text === "string" &&
						danmaConfig.text.match(rule)
					) {
						filterFlag = true;
						break;
					}
				}
			}
		}
		return filterFlag;
	},
	parseRule() {
		let localRule = this.getValue();
		let rule: RegExp[] = [];
		localRule.split("\n").forEach((ruleItemStr) => {
			// 去除左右空格
			let ruleItem = ruleItemStr.trim();
			// 把规则转换为正则
			let regExpRule = new RegExp(
				utils.parseStringToRegExpString(ruleItem),
				"ig"
			);
			rule.push(regExpRule);
		});
		return rule;
	},
	getValue(): string {
		return GM_getValue(this.key, "");
	},
	setValue(value: string = "") {
		GM_setValue(this.key, value);
	},
};

/** 弹幕库 */
export const BilibiliDanmaku = {
	/** 弹幕字体 */
	fontFamily: [
		{
			text: "黑体",
			value: "SimHei, 'Microsoft JhengHei'",
		},
		{
			text: "宋体",
			value: "SimSun",
		},
		{
			text: "新宋体",
			value: "NSimSun",
		},
		{
			text: "仿宋",
			value: "FangSong",
		},
		{
			text: "微软雅黑",
			value: "'Microsoft YaHei'",
		},
		{
			text: "微软雅黑 Light",
			value: "'Microsoft Yahei UI Light'",
		},
		{
			text: "Noto Sans DemiLight",
			value: "'Noto Sans CJK SC DemiLight'",
		},
		{
			text: "'Noto Sans CJK SC Regular'",
			value: "'Noto Sans CJK SC Regular'",
		},
	],
	init() {
		BilibiliDanmakuFilter.init();

		let opacity = PopsPanel.getValue<number>("bili-danmaku-opacity");
		let area = PopsPanel.getValue<number>("bili-danmaku-area");
		let fontSize = PopsPanel.getValue<number>("bili-danmaku-fontSize");
		let duration = PopsPanel.getValue<number>("bili-danmaku-duration");
		let bold = PopsPanel.getValue<boolean>("bili-danmaku-bold");
		let fullScreenSync = PopsPanel.getValue<boolean>(
			"bili-danmaku-fullScreenSync"
		);
		let speedSync = PopsPanel.getValue<boolean>("bili-danmaku-speedSync");
		let fontFamily = PopsPanel.getValue<string>("bili-danmaku-fontFamily");

		this.setOpacity(opacity);
		this.setArea(area);
		this.setFontSize(fontSize);
		this.setDuration(duration);
		this.setBold(bold);
		this.setFullScreenSync(fullScreenSync);
		this.setSpeedSync(speedSync);
		this.setFontFamily(fontFamily);
	},
	async DanmakuCoreConfig() {
		let playerPromise = await BilibiliPlayer.$player.playerPromise();
		await utils.waitPropertyByInterval(
			async () => {
				playerPromise = await BilibiliPlayer.$player.playerPromise();
				return playerPromise;
			},
			() => {
				return (
					typeof playerPromise?.danmaku?.danmakuCore?.config === "object" &&
					playerPromise?.danmaku?.danmakuCore?.config != null
				);
			},
			250,
			10000
		);
		return playerPromise.danmaku.danmakuCore.config;
	},
	/**
	 * 设置 不透明度
	 * @param value
	 */
	setOpacity(value: number) {
		this.DanmakuCoreConfig().then((config) => {
			if ("opacity" in config) {
				config.opacity = value;
				log.success(`设置-弹幕不透明度: ${value}`);
			} else {
				log.error("设置-弹幕不透明度失败, 不存在 opacity 属性");
			}
		});
	},
	/**
	 * 设置 显示区域
	 * @param value
	 */
	setArea(value: number) {
		let areaMapping = {
			25: "1/4屏",
			50: "半屏",
			75: "3/4屏",
			100: "全屏",
		} as {
			[key: string]: string;
		};
		this.DanmakuCoreConfig().then((config) => {
			if ("danmakuArea" in config) {
				config.danmakuArea = value;
				log.success(`设置-显示区域: ${value} => ${areaMapping[value]}`);
			} else {
				log.error("设置-显示区域失败, 不存在 danmakuArea 属性");
			}
		});
	},
	/**
	 * 设置 字体大小
	 * @param value
	 */
	setFontSize(value: number) {
		this.DanmakuCoreConfig().then((config) => {
			if ("fontSize" in config) {
				config.fontSize = value;
				log.success(`设置-字体大小: ${value}`);
			} else {
				log.error("设置-字体大小失败, 不存在 fontSize 属性");
			}
		});
	},
	/**
	 * 设置 持续时间（弹幕速度）
	 * @param value
	 */
	setDuration(value: number) {
		this.DanmakuCoreConfig().then((config) => {
			if ("duration" in config) {
				config.duration = value;
				log.success(`设置-持续时间（弹幕速度）: ${value}`);
			} else {
				log.error("设置-持续时间（弹幕速度）失败, 不存在 duration 属性");
			}
		});
	},
	/**
	 * 设置 粗体
	 * @param value
	 */
	setBold(value: boolean) {
		this.DanmakuCoreConfig().then((config) => {
			if ("bold" in config) {
				config.bold = value;
				log.success(`设置-粗体: ${value}`);
			} else {
				log.error("设置-粗体失败, 不存在 bold 属性");
			}
		});
	},
	/**
	 * 弹幕随屏幕缩放
	 * @param value
	 */
	setFullScreenSync(value: boolean) {
		this.DanmakuCoreConfig().then((config) => {
			if ("fullScreenSync" in config) {
				config.fullScreenSync = value;
				log.success(`设置-弹幕随屏幕缩放: ${value}`);
			} else {
				log.error("设置-弹幕随屏幕缩放失败, 不存在 fullScreenSync 属性");
			}
		});
	},
	/**
	 * 弹幕字体
	 * @param value
	 */
	setFontFamily(value: string) {
		this.DanmakuCoreConfig().then((config) => {
			if ("fontFamily" in config) {
				config.fontFamily = value;
				log.success(`设置-弹幕字体: ${value}`);
			} else {
				log.error("设置-弹幕字体失败, 不存在 fontFamily 属性");
			}
		});
	},
	/**
	 * 弹幕速度同步播放倍数
	 * @param value
	 */
	setSpeedSync(value: boolean) {
		this.DanmakuCoreConfig().then(async (config) => {
			let playerPromise = await BilibiliPlayer.$player.playerPromise();
			await utils.waitPropertyByInterval(
				async () => {
					playerPromise = await BilibiliPlayer.$player.playerPromise();
					return playerPromise;
				},
				() => {
					return (
						typeof playerPromise.video === "object" &&
						playerPromise.video != null &&
						playerPromise.video instanceof HTMLVideoElement
					);
				},
				250,
				10000
			);
			let videoSpeed = playerPromise.video.playbackRate;
			if ("videoSpeed" in config) {
				config.videoSpeed = videoSpeed;
				log.success(`设置-当前视频播放倍速: ${videoSpeed}`);
			} else {
				log.error("设置-弹幕速度同步播放倍数失败, 不存在 videoSpeed 属性");
			}
			if ("speedSync" in config) {
				config.speedSync = value;
				log.success(`设置-弹幕速度同步播放倍数: ${value}`);
			} else {
				log.error("设置-弹幕速度同步播放倍数失败, 不存在 speedSync 属性");
			}
		});
	},
};
