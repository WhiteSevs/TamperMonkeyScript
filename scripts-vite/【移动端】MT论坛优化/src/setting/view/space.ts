import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const Component_Space: PopsPanelContentConfig = {
	id: "component-space",
	title: "空间",
	forms: [
		{
			type: "forms",
			text: "",
			forms: [
				UISwitch(
					"修复无法进入空间",
					"mt-space-repairEnterSpace",
					true,
					void 0,
					"修复链接错误导致不能进入空间的问题"
				),
				UISwitch(
					"显示帖子回复内容",
					"mt-space-showCommentContent",
					true,
					void 0,
					"在帖子-回复下面显示具体评论的内容"
				),
			],
		},
	],
};
