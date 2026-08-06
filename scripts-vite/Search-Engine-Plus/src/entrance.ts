import { SearchEngine } from "@/main/SearchEngine";
import { Panel } from "@components/setting/panel";
import { PanelContent } from "@components/setting/panel-content";
import { Component_Baidu } from "./setting/view/baidu";
import { Component_Bing } from "./setting/view/bing";
import { Component_Common } from "./setting/view/general";
import { Component_Google } from "./setting/view/google";

PanelContent.addContentConfig([Component_Common, Component_Baidu, Component_Google, Component_Bing]);

Panel.init();
SearchEngine.init();
