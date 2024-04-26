import { GM_getValue, GM_setValue } from "$";
import { log, utils } from "@/api/env";
import { PopsPanel } from "@/ui";
import { DouYinElement } from "@/core/Element/element";
const DouYinVideoShield = {
    key: "douyin-shield-rule",
    $data: {
        /**
         * @type {UtilsDictionaryConstructor<string,string>}
         */
        rule: new utils.Dictionary(),
    },
    /**
     * authorInfo.nickname:string    作者
     * authorInfo.uid:string         作者id
     * desc:string                   视频描述
     * shareInfo.shareLinkDesc:string       xxx复制链接到抖音App的识别码
     * shareInfo.shareUrl:string            网页直接看的视频链接
     * textExtra[{hashtagName: ""},...]     话题
     * videoTag[{tagName: ""},...]          视频标签
     */
    init() {
        this.parseRule();
        DouYinElement.watch_slidelist((osElement) => {
            let slideListChild = document.querySelector(
                '#slidelist div[data-e2e="slideList"]'
            ) as HTMLDivElement;
            let reactFiber = utils.getReactObj(slideListChild)?.reactFiber;
            if (reactFiber == null) {
                log.error(["元素上不存在reactFiber属性", slideListChild]);
                return;
            }
            let videoData = reactFiber?.return.memoizedProps.data;
            let shieldTagMap = [
                {
                    key: "nickname",
                    get(data: { [x: string]: { [x: string]: { toString: () => any; }; }; }) {
                        return data?.["authorInfo"]?.["nickname"]?.toString();
                    },
                },
                {
                    key: "uid",
                    get(data: { [x: string]: { [x: string]: { toString: () => any; }; }; }) {
                        return data?.["authorInfo"]?.["uid"]?.toString();
                    },
                },
                {
                    key: "desc",
                    get(data: { [x: string]: { toString: () => any; }; }) {
                        return data?.["desc"]?.toString();
                    },
                },
                {
                    key: "textExtra",
                    get(data: { [x: string]: any[]; }) {
                        if (
                            typeof data?.["textExtra"] === "object" &&
                            Array.isArray(data?.["textExtra"])
                        ) {
                            let result: any[] = [];
                            data?.["textExtra"].forEach((item) => {
                                result.push(item["hashtagName"]);
                            });
                            return result;
                        }
                    },
                },
                {
                    key: "videoTag",
                    get(data: { [x: string]: any[]; }) {
                        if (
                            typeof data?.["videoTag"] === "object" &&
                            Array.isArray(data?.["videoTag"])
                        ) {
                            let result: any[] = [];
                            data?.["videoTag"].forEach((item) => {
                                result.push(item["tagName"]);
                            });
                            return result;
                        }
                    },
                },
            ];
            for (let index = 0; index < videoData.length; index++) {
                let videoItem = videoData[index];
                let flag = false;
                if (
                    typeof videoItem["cellRoom"] === "object" &&
                    PopsPanel.getValue("shieldVideo-live")
                ) {
                    log.success(["屏蔽直播", videoItem["cellRoom"]]);
                    flag = true;
                }
                if (videoItem["isAds"] && PopsPanel.getValue("shieldVideo-ads")) {
                    log.success(["屏蔽广告", videoItem["isAds"]]);
                    flag = true;
                }
                this.$data.rule.forEach((ruleValue, ruleKey) => {
                    let ruleRegExpValue = new RegExp(ruleValue, "g");
                    for (const shieldTag of shieldTagMap) {
                        if (ruleKey === shieldTag["key"]) {
                            let value = shieldTag.get(videoItem);
                            if (typeof value === "string") {
                                flag = Boolean(value.match(ruleRegExpValue));
                                if (flag) {
                                    log.success([
                                        "自定义屏蔽: " + ruleKey + " " + videoItem["desc"],
                                    ]);
                                }
                            } else if (typeof value === "object" && Array.isArray(value)) {
                                for (const valueIterator of value) {
                                    if (valueIterator.match(ruleRegExpValue)) {
                                        flag = true;
                                        log.success([
                                            "自定义屏蔽: " + ruleKey + " " + videoItem["desc"],
                                        ]);
                                        break;
                                    }
                                }
                            }
                        }
                        if (flag) {
                            break;
                        }
                    }
                });
                if (flag) {
                    videoData.splice(index, 1);
                    index--;
                }
            }
        });
    },
    /**
     * 解析规则
     */
    parseRule() {
        let localRule = this.get().trim();
        let localRuleSplit = localRule.split("\n");
        localRuleSplit.forEach((item: string) => {
            let itemSplit = item.split("##");
            if (itemSplit.length < 2) {
                return;
            }
            let keyName = itemSplit[0];
            let keyValue = itemSplit[1];
            this.$data.rule.set(keyName, keyValue);
        });
    },
    set(value: string) {
        GM_setValue(this.key, value);
    },
    get() {
        return GM_getValue(this.key, "");
    },
};

export {
    DouYinVideoShield
}