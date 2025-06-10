import { DouYin } from "@/main/DouYin";
import { MDouYinRouter } from "./router/MDouYinRouter";
import { MDouYin } from "./m-main/MDouYin";
import { Panel } from "@components/setting/panel";
import { PanelContent } from "@components/setting/panel-content";
import { PanelCommonConfig } from "./setting/view/common";
import { PanelVideoConfig } from "./setting/view/video";
import { PanelSearchConfig } from "./setting/view/search";
import { PanelLiveConfig } from "./setting/view/live";
import { PanelUserConfig } from "./setting/view/user";
import { MPanelShareUserConfig } from "./setting/mobile-view/shareUser";
import { MPanelShareNoteConfig } from "./setting/mobile-view/shareNote";
import { MPanelShareChallengeConfig } from "./setting/mobile-view/shareChallenge";
import { MPanelShareVideoConfig } from "./setting/mobile-view/shareVideo";
import { MPanelShareMusicConfig } from "./setting/mobile-view/shareMusic";
import { PanelMenu } from "@components/setting/panel-menu";

PanelContent.addContentConfig([
	PanelCommonConfig,
	PanelVideoConfig,
	PanelSearchConfig,
	PanelLiveConfig,
	PanelUserConfig,
]);
PanelContent.addContentConfig([
	MPanelShareUserConfig,
	MPanelShareNoteConfig,
	MPanelShareChallengeConfig,
	MPanelShareVideoConfig,
	MPanelShareMusicConfig,
]);
PanelMenu.addMenuOption({
	key: "show_pops_m_panel_setting",
	text: "⚙ 移动端设置",
	autoReload: false,
	isStoreValue: false,
	showText(text: string) {
		return text;
	},
	callback: () => {
		Panel.showPanel(
			PanelContent.getConfig(1),
			`${Panel.$data.scriptName}-移动端设置`
		);
	},
});
Panel.init();
if (MDouYinRouter.isMDouYin()) {
	MDouYin.init();
} else {
	DouYin.init();
}
