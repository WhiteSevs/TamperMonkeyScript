export const PanelUISize = {
	/**
	 * 一般设置界面的尺寸
	 */
	setting: {
		get width() {
			if (window.innerWidth < 550) {
				return "88vw";
			} else if (window.innerWidth < 700) {
				return "550px";
			} else {
				return "700px";
			}
		},
		get height() {
			if (window.innerHeight < 450) {
				return "70vh";
			} else if (window.innerHeight < 550) {
				return "450px";
			} else {
				return "550px";
			}
		},
	},
	/**
	 * 功能丰富，aside铺满了的设置界面，要稍微大一点
	 */
	settingBig: {
		get width() {
			return window.innerWidth < 800 ? "92vw" : "800px";
		},
		get height() {
			return window.innerHeight < 600 ? "80vh" : "600px";
		},
	},
	/**
	 * 信息界面，一般用于提示信息之类
	 */
	info: {
		get width() {
			return window.innerWidth < 350 ? "350px" : "350px";
		},
		get height() {
			return window.innerHeight < 250 ? "250px" : "250px";
		},
	},
};
