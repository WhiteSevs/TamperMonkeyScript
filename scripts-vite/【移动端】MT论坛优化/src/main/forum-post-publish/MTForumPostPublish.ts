import { DOMUtils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { MTEditorOptimization } from "./MTEditorOptimization";

export const MTForumPostPublish = {
	init() {
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("mt-forum-post-publish-editorOptimization", () => {
				MTEditorOptimization.init();
			});
		});
	},
};
