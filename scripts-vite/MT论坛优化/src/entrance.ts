import { Panel } from "@components/setting/panel";
import { MT } from "@/main/MT";
import { PanelContent } from "@components/setting/panel-content";
import { Component_Common } from "./setting/view/common";
import { Component_ForumPost } from "./setting/view/post";
import { Component_Guide } from "./setting/view/guide";

PanelContent.addContentConfig([
	Component_Common,
	Component_ForumPost,
	Component_Guide,
]);
Panel.init();
MT.init();
