import { DOMUtils } from "@/env";
import { Panel } from "@/setting/panel";
import { MTEditorOptimization } from "./MTEditorOptimization";

export const MTForumPostPublish = {
	init() {
		DOMUtils.ready(() => {
			Panel.execMenuOnce("mt-forum-post-publish-editorOptimization", () => {
				MTEditorOptimization.init();
			});
		});
	},
};
