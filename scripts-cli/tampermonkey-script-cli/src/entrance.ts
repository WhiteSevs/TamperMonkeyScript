import { DemoWebSite } from "@/main/demo";
import { Panel } from "@components/setting/panel";
import { PanelContent } from "@components/setting/panel-content";
import { Component_Common } from "./setting/view/general";

PanelContent.addContentConfig([Component_Common]);

Panel.init();
DemoWebSite.init();
