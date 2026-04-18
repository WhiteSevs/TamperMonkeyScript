import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";
import { UISwitch } from "@components/setting/components/ui-switch";
import { AutoOpenOrClose } from "../all-open-or-close";

export const PanelUserConfig: PopsPanelContentConfig = {
  id: "panel-config-user",
  title: "用户",
  views: [
    {
      type: "container",
      text: "",
      views: [
        {
          type: "deepMenu",
          text: "功能",
          views: [
            {
              text: "功能",
              type: "container",
              views: [
                UISwitch("显示UID", "dy-user-addShowUserUID", true, void 0, "在用户信息区域下方显示当前用户的uid"),
              ],
            },
          ],
        },
      ],
    },
    {
      type: "container",
      text: "",
      views: [
        {
          type: "deepMenu",
          text: "布局屏蔽-用户信息",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          views: [
            {
              type: "container",
              text: AutoOpenOrClose.text,
              views: [
                UISwitch("【屏蔽】用户名", "dy-user-block-name"),
                UISwitch("【屏蔽】关注", "dy-user-block-follow"),
                UISwitch("【屏蔽】粉丝", "dy-user-block-fans"),
                UISwitch("【屏蔽】获赞", "dy-user-block-likes"),
                UISwitch("【屏蔽】抖音号", "dy-user-block-id"),
                UISwitch("【屏蔽】IP属地", "dy-user-block-ip"),
                UISwitch("【屏蔽】年龄", "dy-user-block-age"),
                UISwitch("【屏蔽】介绍", "dy-user-block-intro"),
              ],
            },
            {
              type: "container",
              text: "",
              views: [
                UISwitch("【屏蔽】分享主页", "dy-user-block-shareHomeButton"),
                UISwitch("【屏蔽】...", "dy-user-block-moreButton"),
                UISwitch("【屏蔽】关注", "dy-user-block-followButton"),
                UISwitch("【屏蔽】私信", "dy-user-block-messageButton"),
              ],
            },
          ],
        },
        {
          type: "deepMenu",
          text: "布局屏蔽-作品",
          afterEnterDeepMenuCallBack: AutoOpenOrClose.afterEnterDeepMenuCallBack,
          views: [
            {
              type: "container",
              text: AutoOpenOrClose.text,
              views: [
                UISwitch("【屏蔽】作品", "dy-user-works-block-works"),
                UISwitch("【屏蔽】推荐", "dy-user-works-block-recommend"),
                UISwitch("【屏蔽】喜欢", "dy-user-works-block-likes"),
              ],
            },
          ],
        },
      ],
    },
  ],
};
