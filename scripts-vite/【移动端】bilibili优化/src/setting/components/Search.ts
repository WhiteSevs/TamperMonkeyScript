import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIInput } from "../common-components/ui-input";

const SettingUISearch: PopsPanelContentConfig = {
	id: "panel-search",
	title: "搜索",
	isDefault() {
		return BilibiliRouter.isSearch();
	},
	forms: [
		{
			type: "forms",
			text: "",
			forms: [
				{
					type: "deepMenu",
					text: "功能",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"搜索框自动获取焦点",
									"bili-search-inputAutoFocus",
									false,
									void 0,
									""
								),
								UISwitch(
									"美化搜索结果",
									"bili-search-beautifySearchResult",
									true,
									void 0,
									"重构搜索结果的样式"
								),
								UISwitch(
									"开启其它地区番剧搜索",
									"bili-search-enableOtherAreaSearchBangumi",
									false,
									void 0,
									"在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持"
								),
							],
						},
						{
							text: "<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>搜索服务器</a>",
							type: "forms",
							forms: [
								UIInput(
									"香港",
									"bili-search-proxyApiServer-hk",
									"",
									"用于搜索番剧结果的代理",
									void 0,
									"bilibili优化.example.com"
								),
								UIInput(
									"台湾",
									"bili-search-proxyApiServer-tw",
									"",
									"用于搜索番剧结果的代理",
									void 0,
									"bilibili优化.example.com"
								),
								UIInput(
									"泰国/东南亚",
									"bili-search-proxyApiServer-tha-or-sea",
									"",
									"用于搜索番剧结果的代理",
									void 0,
									"bilibili优化.example.com"
								),
							],
						},
					],
				},
				{
					type: "deepMenu",
					text: "覆盖点击事件",
					forms: [
						{
							type: "forms",
							text: "",
							forms: [
								UISwitch(
									"取消",
									"bili-search-cover-cancel",
									false,
									void 0,
									"点击取消按钮回退至上一页"
								),
							],
						},
					],
				},
			],
		},
	],
};

export { SettingUISearch };
