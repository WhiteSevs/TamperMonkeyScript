import { BilibiliHook } from "@/hook/BilibiliHook";
import { PopsPanel } from "@/setting/setting"

const BilibiliVideoHook = {
    init() {
        PopsPanel.execMenuOnce("bili-video-hook-callApp", () => {
            BilibiliHook.hookPlayerAgent();
        })
    }
}

export {
    BilibiliVideoHook
}