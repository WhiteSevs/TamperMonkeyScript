import { DOMUtils } from "@/env";
import { Panel } from "@components/setting/panel";
import { MTEditorOptimization } from "./MTEditorOptimization";

export const MTForumPostPublish = {
  init() {
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("mt-forum-post-publish-editorOptimization", () => {
        MTEditorOptimization.init();
      });
    });
  },
};
