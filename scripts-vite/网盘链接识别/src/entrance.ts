import { Panel } from "@components/setting/panel";
import { NetDisk } from "@/main/NetDisk";
import { NetDiskRule } from "./main/rule/NetDiskRule";
import { NetDiskUI } from "./main/ui/NetDiskUI";
import { NetDiskShortcut } from "./main/shortcut/NetDiskShortcut";
import { DOMUtils } from "./env";
import { NetDiskAutoFillAccessCode } from "./main/auto-fill-accesscode/NetDiskAutoFillAccessCode";
import { NetDiskAuthorization } from "./main/authorization/NetDiskAuthorization";
import { NetDiskWorker } from "./main/worker/NetDiskWorker";
import { NetDiskUserRule } from "./main/rule/user-rule/NetDiskUserRule";
import { WebsiteRule } from "./main/website-rule/WebsiteRule";
import { NetDiskRuleManager } from "./main/NetDiskRuleManager";
import { PanelContent } from "@components/setting/panel-content";
import { PanelUI_allSetting } from "./setting/view/all-setting";
import { PanelMenu } from "@components/setting/panel-menu";
import { NetDiskUserRuleUI } from "./main/rule/user-rule/NetDiskUserRuleUI";

Object.assign(
	NetDiskUI.src.icon,
	// @ts-ignore
	typeof RESOURCE_ICON === "undefined" ? {} : RESOURCE_ICON
);
// 初始化网站规则
WebsiteRule.init();
// 初始化用户规则
NetDiskUserRule.init();
// 初始化规则
NetDiskRule.init();
// 初始化配置默认
// 注册油猴菜单
PanelContent.addContentConfig([PanelUI_allSetting]);
PanelMenu.addMenuOption([
	{
		key: "showNetDiskHistoryMatch",
		text: "⚙ 历史匹配记录",
		autoReload: false,
		isStoreValue: false,
		showText(text) {
			return text;
		},
		callback() {
			NetDiskUI.netDiskHistoryMatch.show();
		},
	},
	{
		key: "ruleManager",
		text: "⚙ 规则管理器",
		autoReload: false,
		isStoreValue: false,
		showText(text) {
			return text;
		},
		callback() {
			NetDiskRuleManager.showView();
		},
	},
	{
		key: "showUserRule",
		text: "⚙ 添加链接识别规则",
		autoReload: false,
		isStoreValue: false,
		showText(text) {
			return text;
		},
		callback() {
			NetDiskUserRuleUI.show(false);
		},
	},
	{
		key: "showMatchPasteText",
		text: "⚙ 识别文本",
		autoReload: false,
		isStoreValue: false,
		showText(text) {
			return text;
		},
		callback() {
			NetDiskUI.matchPasteText.show();
		},
	},
]);
Panel.init();
// 初始化配置数据
NetDisk.init();
NetDiskShortcut.init();
DOMUtils.ready(() => {
	// 初始化自动填充访问码
	NetDiskAutoFillAccessCode.init();
	// 初始化鉴权处理
	NetDiskAuthorization.init();
	// 初始化匹配处理
	NetDiskWorker.init();
	// 规则管理器初始化处理
	NetDiskRuleManager.init();
});
