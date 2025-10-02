import { Panel } from "@components/setting/panel";
import { PanelContent } from "@components/setting/panel-content";
import { Component_Common } from "./setting/view/general";
import { WebSiteRule } from "./main/rule/WebSiteRule";
import DOMUtils from "@whitesev/domutils";

PanelContent.addContentConfig([Component_Common]);

Panel.init();
DOMUtils.ready(() => {
  WebSiteRule.execRule();
});
