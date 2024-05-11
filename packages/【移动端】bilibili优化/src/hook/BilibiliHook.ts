import { OriginPrototype, log, utils } from "@/env"
import { unsafeWindow } from "ViteGM"

const BilibiliHook = {
    /**
     * window.PlayerAgent
     */
    hookPlayerAgent() {
        let PlayerAgent: any = void 0;
        OriginPrototype.Object.defineProperty(unsafeWindow, "PlayerAgent", {
            get() {
                return new Proxy({}, {
                    get(target, key) {
                        if (key === "openApp") {
                            return function (this: any, ...args: any) {
                                let data: any = args[0];
                                log.info(["调用PlayerAgent.openApp", data])
                            }
                        } else {
                            return PlayerAgent[key];
                        }
                    }
                })
            },
            set(v) {
                PlayerAgent = v;
            }
        })
    }
}


export {
    BilibiliHook
}