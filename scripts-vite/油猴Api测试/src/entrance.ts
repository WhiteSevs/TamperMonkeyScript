import { Panel } from "@components/setting/panel";
import { PanelContent } from "@components/setting/panel-content";
import { PanelMenu } from "@components/setting/panel-menu";
import { CommonUtil } from "@components/utils/CommonUtil";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { GMTotal } from "./main/GMTotal";
import { GrantTest_close } from "./main/grant/close";
import { GrantTest_focus } from "./main/grant/focus";
import { GrantTest_onurlchange } from "./main/grant/onurlchange";
import { Component_Common } from "./setting/view/common";

if (CommonUtil.isTopWindow()) {
  let showPanel = () => {
    Panel.showPanel(PanelContent.getConfig(0), void 0, void 0, true);
  };
  let defaultMenuOption = PanelMenu.getMenuOption(0);
  defaultMenuOption.callback = () => {
    showPanel();
  };
  PanelMenu.updateMenuOption(defaultMenuOption);
  let configList: PopsPanelContentConfig[] = [Component_Common()];
  Object.keys(GMTotal).forEach((keyName) => {
    let value = GMTotal[keyName as keyof typeof GMTotal];
    let option = value.getUIOption();
    if (option) {
      configList.push(option);
    }
  });
  configList.push(new GrantTest_onurlchange().getUIOption());
  configList.push(new GrantTest_close().getUIOption());
  configList.push(new GrantTest_focus().getUIOption());
  PanelContent.addContentConfig(configList);
  Panel.$data.panelConfig = {
    style: /*css*/ `
		.success{
			color: green;
		}
		.error{
			color: red;
		}
		.warn,.warning{
			color: orange;
		}
		.info{
			color: #909090;
		}
		.support-info{
			font-weight: bold;
		}


		.gm-api-features-not-support,
		.gm-api-features-support{
			display: flex;
			gap: 8px;
			flex-wrap: wrap;
		}
		.gm-api-features-item{
			display: flex;
			align-items: center;
			width: 200px;
			max-width: 200px !important;
			justify-content: space-between;
			cursor: pointer;
			transition: all ease-out .1s;
			padding: 8px 16px;
			border-radius: 4px;
			font-size: 14px;
		}
		.gm-api-features-item:hover{
			box-shadow: 0 2px 5px 3px #0000001a;
		}
		.gm-api-features-item__label{
		}
		.gm-api-features-item__value span{
			display: flex;
			align-items: center;
		}
	`,
  };
  Panel.init();
  // 直接自动显示面板
  showPanel();
}
