import { log } from "@/env";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UITextArea } from "@components/setting/components/ui-textarea";
import { UISelect } from "@components/setting/components/ui-select";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

export const MSettingUICommon: PopsPanelContentConfig = {
  id: "component-common",
  title: "通用",
  views: [
    {
      text: "Toast配置",
      type: "container",
      views: [
        UISelect(
          "Toast位置",
          "qmsg-config-position",
          "bottom",
          [
            {
              value: "topleft",
              text: "左上角",
            },
            {
              value: "top",
              text: "顶部",
            },
            {
              value: "topright",
              text: "右上角",
            },
            {
              value: "left",
              text: "左边",
            },
            {
              value: "center",
              text: "中间",
            },
            {
              value: "right",
              text: "右边",
            },
            {
              value: "bottomleft",
              text: "左下角",
            },
            {
              value: "bottom",
              text: "底部",
            },
            {
              value: "bottomright",
              text: "右下角",
            },
          ],
          (event, isSelectValue, isSelectText) => {
            log.info("设置当前Qmsg弹出位置" + isSelectText);
          },
          "Toast显示在页面九宫格的位置"
        ),
        UISelect(
          "最多显示的数量",
          "qmsg-config-maxnums",
          3,
          [
            {
              value: 1,
              text: "1",
            },
            {
              value: 2,
              text: "2",
            },
            {
              value: 3,
              text: "3",
            },
            {
              value: 4,
              text: "4",
            },
            {
              value: 5,
              text: "5",
            },
          ],
          void 0,
          "限制Toast显示的数量"
        ),
        UISwitch("逆序弹出", "qmsg-config-showreverse", false, void 0, "修改Toast弹出的顺序"),
      ],
    },
    // {
    // 	text: "Cookie配置",
    // 	type: "container",
    // 	views: [
    // 		UISwitch(
    // 			"启用",
    // 			"httpx-use-cookie-enable",
    // 			false,
    // 			void 0,
    // 			"启用后，将根据下面的配置进行添加cookie"
    // 		),
    // 		UISwitch(
    // 			"使用document.cookie",
    // 			"httpx-use-document-cookie",
    // 			false,
    // 			void 0,
    // 			"自动根据请求的域名来设置对应的cookie"
    // 		),
    // 		UITextArea(
    // 			"tieba.baidu.com",
    // 			"httpx-cookie-tieba.baidu.com",
    // 			"",
    // 			void 0,
    // 			void 0,
    // 			"Cookie格式：xxx=xxxx;xxx=xxxx"
    // 		),
    // 	],
    // },
  ],
};
