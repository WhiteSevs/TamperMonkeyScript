import { PanelSizeUtil } from "./panel-size-util";

export const PanelUISize = {
	/**
	 * 一般设置界面的尺寸
	 */
	setting: {
		get width() {
			if (PanelSizeUtil.width < 550) {
				return "88vw";
			} else if (PanelSizeUtil.width < 700) {
				return "550px";
			} else {
				return "700px";
			}
		},
		get height() {
			if (PanelSizeUtil.height < 450) {
				return "70vh";
			} else if (PanelSizeUtil.height < 550) {
				return "450px";
			} else {
				return "550px";
			}
		},
	},
	/**
	 * 中等的设置界面
	 */
	settingMiddle: {
		get width() {
			return PanelSizeUtil.width < 350 ? "88vw" : "350px";
		},
		get height() {
			return PanelSizeUtil.height < 450 ? "88vh" : "450px";
		},
	},
	/**
	 * 功能丰富，aside铺满了的设置界面，要稍微大一点
	 */
	settingBig: {
		get width() {
			return PanelSizeUtil.width < 800 ? "92vw" : "800px";
		},
		get height() {
			return PanelSizeUtil.height < 600 ? "80vh" : "600px";
		},
	},
	/**
	 * 信息界面，一般用于提示信息之类
	 */
	info: {
		get width() {
			return PanelSizeUtil.width < 350 ? "88vw" : "350px";
		},
		get height() {
			return PanelSizeUtil.height < 250 ? "88vh" : "250px";
		},
	},
};
