import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const PanelGraphSettingUI: PopsPanelContentConfig = {
  id: "baidu-panel-config-graph",
  title: "识图",
  headerTitle: "百度识图<br />graph.baidu.com",
  isDefault() {
    return BaiduRouter.isGraph();
  },
  scrollToDefaultView: true,
  forms: [
    {
      text: "功能",
      type: "forms",
      forms: [
        UISwitch(
          "【重构】识图一下",
          "baidu-graph-repairHomeRecognitionPicture",
          true,
          void 0,
          "重构主页的识图一下，就可以直接点击上传图片进行搜索（Api已失效）"
        ),
        UISwitch(
          "【重构】搜索按钮",
          "baidu-graph-repairSearchButton",
          true,
          void 0,
          "重构主页的往下滑动右下角出现的搜索图标按钮"
        ),
        UISwitch(
          "【重构】重拍",
          "baidu-graph-repairRetakeButton",
          true,
          void 0,
          "在已搜索出相关结果的界面中的重构【重拍】按钮"
        ),
        UISwitch(
          "修复搜索无结果",
          "baidu-graph-repairSearchNoResult",
          true,
          void 0,
          "如果出现识图没结果，重新识别，可能是因为后面参数多了tpl_from=pc的问题"
        ),
      ],
    },
  ],
};

export { PanelGraphSettingUI };
