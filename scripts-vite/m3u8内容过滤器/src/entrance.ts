import { PanelContent } from "@components/setting/panel-content";
import { M3U8Rule } from "./main/M3U8Rule";
import { Component_Common } from "./setting/view/common";
import { Panel } from "@components/setting/panel";
import { PanelMenu } from "@components/setting/panel-menu";

PanelContent.addContentConfig([Component_Common]);
PanelMenu.deleteMenuOption();
Panel.init();
M3U8Rule.init();
