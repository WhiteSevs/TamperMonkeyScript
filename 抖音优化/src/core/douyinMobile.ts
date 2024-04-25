import { GM_addStyle } from "$";
import { DOMUtils, log } from "@/api/env";
import { DouYinElement } from "./Element/element";

const DouYinMobile = {
    init() {
        log.success("启用手机模式");
        let meta = DOMUtils.createElement(
            "meta",
            {},
            {
                // @ts-ignore
                name: "viewport",
                content:
                    "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover",
            }
        );
        document
            .querySelectorAll("meta[name='viewport']")
            .forEach((ele) => ele.remove());
        document.head.appendChild(meta);
        /* 屏蔽底部视频工具栏右侧的?帮助反馈按钮 */
        DouYinElement.addShieldStyle(
            "img#douyin-temp-sidebar"
        )
        GM_addStyle(`
      /* 右侧工具栏放大 */
      .basePlayerContainer .positionBox{
        scale: 1.25;
        bottom: 110px !important;
      }
      `)
    }
}

export {
    DouYinMobile
}