import { PopsPanel } from "@/setting/panel";
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
PopsPanel.init();
// 初始化配置数据
NetDisk.init();
NetDiskShortcut.init();
DOMUtils.ready(() => {
	// 初始化自动填写访问码
	NetDiskAutoFillAccessCode.init();
	// 初始化鉴权处理
	NetDiskAuthorization.init();
	// 初始化匹配处理
	NetDiskWorker.init();
});
