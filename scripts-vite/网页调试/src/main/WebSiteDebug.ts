import { Panel } from "@components/setting/panel";
import { DebugTool } from "./DebugTool";
import { GlobalSettingConfig } from "@/setting/config";

export const WebSiteDebug = {
  init() {
    if (DebugTool.handleToolWithIframe()) {
      if (Panel.getValue(GlobalSettingConfig.autoLoadDebugTool.key)) {
        DebugTool.execDebugTool();
      } else {
        DebugTool.registerDebugToolMenuControls();
      }
    }
  },
};
