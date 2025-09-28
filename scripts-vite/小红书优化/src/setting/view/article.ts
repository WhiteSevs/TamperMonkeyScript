import { log } from "@/env";
import { UISlider } from "@components/setting/components/ui-slider";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const SettingUI_Article: PopsPanelContentConfig = {
  id: "xhs-panel-config-article",
  title: "笔记",
  forms: [
    {
      type: "forms",
      text: "功能",
      forms: [
        UISwitch(
          "显示发布、修改的绝对时间",
          "pc-xhs-article-showPubsliushTime",
          false,
          void 0,
          "注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>"
        ),
      ],
    },
    {
      text: "笔记宽屏",
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
            let $noteContainer = document.querySelector<HTMLDivElement>("#noteContainer");
            if (!$noteContainer) {
              log.error("未找到笔记容器");
              return;
            }
            $noteContainer.style.width = `${value}vw`;
          },
          (value) => {
            return `${value}%，默认：90%`;
          },
          "调整笔记页面占据的页面范围"
        ),
      ],
    },
  ],
};

export { SettingUI_Article };
