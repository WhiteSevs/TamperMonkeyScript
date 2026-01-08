import { PopsIcon } from "../../PopsIcon";
import type { PopsRightClickMenuConfig } from "./types";

export const PopsRightClickMenuDefaultConfig = (): DeepRequired<PopsRightClickMenuConfig> => {
  return {
    $target: document.documentElement,
    targetSelector: null,
    position: "fixed",
    data: [
      {
        icon: PopsIcon.getIcon("search")!,
        iconIsLoading: false,
        text: "搜索",
        item: [],
        callback(clickEvent, contextMenuEvent, $li) {
          console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
        },
      },
      {
        icon: PopsIcon.getIcon("documentCopy")!,
        iconIsLoading: false,
        text: "复制",
        item: [],
        callback(clickEvent, contextMenuEvent, $li) {
          console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
        },
      },
      {
        icon: PopsIcon.getIcon("delete")!,
        text: "删除",
        iconIsLoading: false,
        item: [],
        callback(clickEvent, contextMenuEvent, $li) {
          console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
        },
      },
      {
        icon: PopsIcon.getIcon("loading")!,
        iconIsLoading: true,
        text: "加载",
        item: [],
        callback(clickEvent, contextMenuEvent, $li) {
          console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
          return false;
        },
      },
      {
        icon: PopsIcon.getIcon("elemePlus")!,
        iconIsLoading: true,
        text: "饿了么",
        callback(clickEvent, contextMenuEvent, $li) {
          console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
          return false;
        },
        item: [
          {
            icon: "",
            iconIsLoading: false,
            text: "处理文件",
            item: [],
            callback(clickEvent, contextMenuEvent, $li) {
              console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
            },
          },
          {
            icon: "",
            iconIsLoading: false,
            text: "其它处理",
            callback(clickEvent, contextMenuEvent, $li) {
              console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
              return false;
            },
            item: [
              {
                icon: PopsIcon.getIcon("view")!,
                iconIsLoading: false,
                text: "查看",
                item: [],
                callback(clickEvent, contextMenuEvent, $li) {
                  console.log("点击：" + this.text, [clickEvent, contextMenuEvent, $li]);
                },
              },
            ],
          },
        ],
      },
    ],
    chileMenuLeftOrRightDistance: 0,
    childMenuTopOrBottomDistance: 0,
    useShadowRoot: true,
    className: "",
    isAnimation: false,
    useScaleAnimation: true,
    only: false,
    zIndex: 10000,
    preventDefault: true,
    style: null,
    beforeAppendToPageCallBack() {},
    limitPositionXInView: true,
    limitPositionYInView: true,
    beforeShowCallBack() {},
  };
};
