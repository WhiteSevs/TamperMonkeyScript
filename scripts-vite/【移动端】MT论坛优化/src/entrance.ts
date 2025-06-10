import { Panel } from "@components/setting/panel";
import { MT } from "@/main/MT";
import { PanelContent } from "@components/setting/panel-content";
import { Component_Common } from "./setting/view/common";
import { Component_ForumPost } from "./setting/view/post";
import { Component_Search } from "./setting/view/search";
import { Component_Sign } from "./setting/view/sign";
import { Component_Space } from "./setting/view/space";
import { Component_Guide } from "./setting/view/guide";
import { ElementUtils } from "./utils/ElementUtils";

PanelContent.addContentConfig([
	Component_Common,
	Component_ForumPost,
	Component_Search,
	Component_Sign,
	Component_Space,
	Component_Guide,
]);
Panel.init();
ElementUtils.registerLeftMenu({
	name: "MT论坛脚本设置",
	icon: "",
	iconColor: "#ff0505",
	iconSize: "23px",
	callback: () => {
		Panel.showPanel(PanelContent.getConfig(0));
	},
});
MT.init();
