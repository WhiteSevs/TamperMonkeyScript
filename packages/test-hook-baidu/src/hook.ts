import { unsafeWindow } from "ViteGM";

const BaiduHook = {
    init() {
        console.log("hook start");
        let oldSetTimeout = unsafeWindow.setTimeout;
        (unsafeWindow as any).setTimeout = function (...args: any) {
            let callBackString = args[0].toString();
            if (callBackString.match("getGeoLocation|loopPlay()")) {
                console.log("劫持延迟函数", callBackString);
                return;
            }
            return oldSetTimeout.apply(this, args);
        };
    }
}

export {
    BaiduHook
}