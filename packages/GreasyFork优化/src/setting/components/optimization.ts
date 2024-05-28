import { UISelect } from "../common-components/ui-select";
import { UISwitch } from "../common-components/ui-switch";

const SettingUIOptimization: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-optimization",
	title: "优化",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISelect(
					"固定当前语言",
					"language-selector-locale",
					"zh-CN",
					(function () {
						let result = [
							{
								value: "",
								text: "无",
							},
						];
						document
							.querySelectorAll<HTMLOptionElement>(
								"select#language-selector-locale option"
							)
							.forEach((element) => {
								let value = element.getAttribute("value") as string;
								if (value === "help") {
									return;
								}
								let text = (element.innerText || element.textContent)!.trim();
								result.push({
									value: value,
									text: text,
								});
							});
						return result;
					})()
				),
				UISwitch(
					"美化页面元素",
					"beautifyPage",
					true,
					void 0,
					"如button、input、textarea"
				),
				UISwitch(
					"美化历史版本页面",
					"beautifyHistoryVersionPage",
					true,
					void 0,
					"更直观的查看版本迭代"
				),
				UISwitch(
					"美化上传图片按钮",
					"beautifyUploadImage",
					true,
					void 0,
					"放大上传区域"
				),
				UISwitch(
					"优化图片浏览",
					"optimizeImageBrowsing",
					true,
					void 0,
					"使用Viewer浏览图片"
				),
				UISwitch(
					"覆盖图床图片跳转",
					"overlayBedImageClickEvent",
					true,
					void 0,
					"配合上面的【优化图片浏览】更优雅浏览图片"
				),
				UISwitch(
					"美化Greasyfork Beautify脚本",
					"beautifyGreasyforkBeautify",
					true,
					void 0,
					'需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>'
				),
			],
		},
		{
			text: "代码",
			type: "forms",
			forms: [
				UISwitch(
					"添加复制代码按钮",
					"addCopyCodeButton",
					true,
					void 0,
					"更优雅的复制"
				),
				UISwitch(
					"快捷键",
					"fullScreenOptimization",
					true,
					void 0,
					"【F】键全屏、【Alt+Shift+F】键宽屏"
				),
			],
		},
	],
};

export { SettingUIOptimization };
