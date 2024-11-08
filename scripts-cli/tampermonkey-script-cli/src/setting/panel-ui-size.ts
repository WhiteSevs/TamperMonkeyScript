export const PanelUISize = {
	/**
	 * 一般设置界面的尺寸
	 */
	setting: {
		width: window.innerWidth < 550 ? "88vw" : "550px",
		height: window.innerHeight < 450 ? "70vh" : "450px",
	},
	/**
	 * 功能丰富，aside铺满了的设置界面，要稍微大一点
	 */
	settingBig: {
		width: window.innerWidth < 800 ? "92vw" : "800px",
		height: window.innerHeight < 600 ? "80vh" : "600px",
	},
	/**
	 * 信息界面，一般用于提示信息之类
	 */
	info: {
		width: window.innerWidth < 350 ? "350px" : "350px",
		height: window.innerHeight < 250 ? "250px" : "250px",
	},
};
