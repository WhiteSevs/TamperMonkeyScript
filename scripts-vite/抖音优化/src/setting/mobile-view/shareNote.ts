import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const MPanelShareNoteConfig: PopsPanelContentConfig = {
  id: "m-panel-config-share-note",
  title: "笔记",
  headerTitle: "/share/note<br />笔记",
  views: [
    {
      text: "",
      type: "container",
      views: [
        {
          text: "覆盖点击事件",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch("精彩图文", "m-dy-share-note-coverExcitingGraphicsAndText", true, void 0, "正确跳转笔记页面"),
                UISwitch("用户", "m-dy-share-note-coverUser", true, void 0, "正确跳转用户主页"),
                UISwitch("话题", "m-dy-share-note-coverHashTag", true, void 0, "正确跳转相关话题"),
                UISwitch("音乐", "m-dy-share-note-coverMusic", true, void 0, "正确跳转相关音乐"),
                UISwitch("相关推荐", "m-dy-share-note-coverRecommend", true, void 0, "正确跳转笔记页面"),
              ],
            },
          ],
        },
        {
          text: "屏蔽元素",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch("【屏蔽】评论", "m-dy-share-note-blockComment", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】相关推荐", "m-dy-share-note-blockRecommend", false, void 0, "屏蔽元素"),
                UISwitch("【屏蔽】底部工具栏", "m-dy-share-note-blockFooterToobar", false, void 0, "屏蔽元素"),
              ],
            },
          ],
        },
      ],
    },
  ],
};
