import { log } from "@/api/env";
import { PopsPanel } from "@/ui";
import { ShieldHeader } from "./UIFrameShield/ShieldHeader";
import { ShieldSearch } from "./UIFrameShield/ShieldSearch";
import { DouYinHook } from "./Hook/hook";
import { DouYinAccount } from "./Account/account";
import { DouYinVideo } from "./Video/video";
import { DouYinRouter } from "@/router";
import { DouYinLive } from "./Live/live";

const DouYin = {
    init() {
        PopsPanel.execMenu("debug", () => {
            DouYinHook.removeEnvCheck();
        });
        PopsPanel.execMenu("disguiseLogin", () => {
            DouYinAccount.disguiseLogin();
        });
        PopsPanel.execMenu("watchLoginDialogToClose", () => {
            DouYinAccount.watchLoginDialogToClose();
        });
        ShieldHeader.init();
        ShieldSearch.init();

        if (DouYinRouter.isLive()) {
            log.info("Router: 直播");
            DouYinLive.init();
        } else if (DouYinRouter.isVideo()) {
            log.info("Router: 推荐视频");
            DouYinVideo.init();
        } else {
            log.error("未知router: " + window.location.hostname);
        }
    },
};


export {
    DouYin
}
