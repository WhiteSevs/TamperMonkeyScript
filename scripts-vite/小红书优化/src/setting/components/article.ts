import { log } from "@/env";
import { UISlider } from "../common-components/ui-slider";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";

const SettingUI_Article: PopsPanelContentConfig = {
	id: "xhs-panel-config-article",
	title: "笔记",
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: "笔记宽屏",
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									"启用",
									"pc-xhs-article-fullWidth",
									false,
									void 0,
									`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`
								),
								UISlider(
									"占据范围",
									"pc-xhs-article-fullWidth-widthSize",
									90,
									30,
									100,
									(event, value) => {
										let $noteContainer =
											document.querySelector<HTMLDivElement>("#noteContainer");
										if (!$noteContainer) {
											log.error("未找到笔记容器");
											return;
										}
										$noteContainer.style.width = `${value}dvw`;
									},
									(value) => {
										return `${value}%，默认：90%`;
									},
									"调整笔记页面占据的页面范围"
								),
							],
						},
					],
				},
			],
		},
	],
};

export { SettingUI_Article };
