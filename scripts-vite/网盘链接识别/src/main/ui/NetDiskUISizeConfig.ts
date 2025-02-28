import { NetDiskGlobalData } from "../data/NetDiskGlobalData";

export const NetDiskUISizeConfig = {
	/**
	 * 天翼云需要登录的提示
	 */
	tianYiYunLoginTip: {
		PC: {
			width: "30vw",
			height: "280px",
		},
		Mobile: {
			width: "80vw",
			height: "250px",
		},
	},
	/**
	 * 坚果云需要登录的提示
	 */
	jianGuoYunLoginTip: {
		PC: {
			width: "350px",
			height: "200px",
		},
		Mobile: {
			width: "350px",
			height: "200px",
		},
	},
	/**
	 * 设置
	 */
	settingView: {
		PC: {
			width: "800px",
			height: "600px",
		},
		Mobile: {
			width: "92vw",
			height: "80vh",
		},
	},
	/**
	 * 设置默认值的界面
	 */
	setDefaultValueView: {
		PC: {
			width: "350px",
			height: "200px",
		},
		Mobile: {
			width: "350px",
			height: "200px",
		},
	},
	/**
	 * (主)网盘链接界面
	 */
	mainView: {
		PC: {
			width: "500px",
			height: "100%",
		},
		Mobile: {
			width: "88vw",
			height: "50vh",
		},
	},
	/**
	 * (主)网盘链接界面-小窗
	 */
	mainViewSmallWindow: {
		PC: {
			get width() {
				return (
					NetDiskGlobalData.smallWindow["netdisk-ui-small-window-width"].value +
					"px"
				);
			},
			height: "auto",
		},
		Mobile: {
			get width() {
				return (
					NetDiskGlobalData.smallWindow["netdisk-ui-small-window-width"].value +
					"px"
				);
			},
			height: "auto",
		},
	},
	/**
	 * 单文件直链弹窗
	 */
	oneFileStaticView: {
		PC: {
			width: "550px",
			height: "350px",
		},
		Mobile: {
			width: "88vw",
			height: "300px",
		},
	},
	/**
	 * 多文件直链弹窗
	 */
	moreFileStaticView: {
		PC: {
			width: "700px",
			height: "600px",
		},
		Mobile: {
			width: "88vw",
			height: "500px",
		},
	},
	/**
	 * 新密码、错误密码输入弹窗
	 */
	inputNewAccessCodeView: {
		PC: {
			width: "400px",
			height: "200px",
		},
		Mobile: {
			width: "88vw",
			height: "160px",
		},
	},
	/**
	 * 历史存储记录弹窗
	 */
	historyMatchView: {
		PC: {
			width: "50vw",
			height: "65vh",
		},
		Mobile: {
			width: "88vw",
			height: "60vh",
		},
	},
	/**
	 * 链接识别规则的弹窗
	 */
	customRulesView: {
		PC: {
			width: "50vw",
			height: "65vh",
		},
		Mobile: {
			width: "88vw",
			height: "60vh",
		},
	},
	/**
	 * 链接识别规则的调试视图
	 */
	customRuleDebugView: {
		PC: {
			width: "55vw",
			height: "70vh",
		},
		Mobile: {
			width: "88vw",
			height: "70vh",
		},
	},
	/**
	 * 主动识别的弹窗
	 */
	matchPasteTextView: {
		PC: {
			width: "50vw",
			height: "65vh",
		},
		Mobile: {
			width: "88vw",
			height: "60vh",
		},
	},
	/**
	 * 访问码规则弹窗
	 */
	accessCodeRuleView: {
		PC: {
			width: "50vw",
			height: "65vh",
		},
		Mobile: {
			width: "88vw",
			height: "60vh",
		},
	},
	/**
	 * 访问码规则添加/修改/删除
	 */
	accessCodeRuleEditView: {
		PC: {
			width: "44vw",
			height: "50vh",
		},
		Mobile: {
			width: "70vw",
			height: "45vh",
		},
	},
	/**
	 * 网站规则弹窗
	 */
	websiteRuleView: {
		PC: {
			width: "45vw",
			height: "65vh",
		},
		Mobile: {
			width: "88vw",
			height: "60vh",
		},
	},
	/**
	 * 添加|编辑网站规则弹窗
	 */
	websiteEditRuleView: {
		PC: {
			width: "45vw",
			height: "65vh",
		},
		Mobile: {
			width: "88vw",
			height: "60vh",
		},
	},
};
