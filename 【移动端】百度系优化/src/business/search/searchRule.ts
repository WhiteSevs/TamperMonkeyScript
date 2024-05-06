import { log } from "@/env";
import { PopsPanel } from "@/ui";

type BaiDuSearchRuleMode = "match-href" | "match-attr" | "contains-child" | "remove-child"
interface BaiDuSearchRuleDetail {
    mode: BaiDuSearchRuleMode,
    matchText?: string | RegExp,
    attr?: string;
}
interface BaiduSearchRuleConfig extends BaiDuSearchRuleDetail {
    moreRule?: BaiDuSearchRuleDetail[]
}


/** 百度搜索自定义拦截规则 */
const BaiduSearchRule = {
    defaultRule: `
// 百度健康
match-href##expert.baidu.com
// 大家还在搜
match-href##recommend_list.baidu.com&&&&match-attr##tpl##recommend_list
// 大家还在搜:隐藏的(点击后，跳出来的)
remove-child##.c-atom-afterclick-recomm-wrap
// 百家号聚合
match-href##author.baidu.com/home/
// xxx 相关 xxx
match-attr##srcid##(sigma|vid_fourfold)
// 问一问
match-attr##data-log##wenda_inquiry
// 自动播放视频
remove-child##[class*='-video-player']
// 百度游戏
match-attr##srcid##yx_entity_san
// 大家还在看
match-attr##srcid##yl_recommend_list
// 百度-智能小程序
match-attr##srcid##xcx_multi
// 百度 xx精选商品问答
match-attr##srcid##b2b_wenda_wise
// 百度爱采购
match-attr##srcid##b2b_straight_wise_vertical
// ↓会误杀有些情况下是百度知道的回答链接
// match-attr##srcid##lego_tpl
match-href##^http(s|)://b2b.baidu.com
// 百度优选
match-attr##srcid##sp_purc_san
// 全网热卖
match-attr##srcid##sp_purc_atom


// 搜索聚合
// match-attr##srcid##note_lead
// 资讯
// match-attr##srcid##realtime
// 百度有驾
// match-attr##srcid##(car_kg2_san|car_view_point_san)
// 动态(微博、百度动态...等)
// match-attr##srcid##rel_ugc_san
`,
    /**
     * 搜索规则
     */
    rule: [] as BaiduSearchRuleConfig[],
    init() {
        let localRule = this.getLocalRule();
        if (PopsPanel.getValue("baidu-search-enable-default-interception-rules")) {
            localRule = this.defaultRule + "\n\n" + localRule;
        }
        this.rule = this.parseRule(localRule);
    },
    /** 获取本地存储的自定义拦截规则 */
    getLocalRule() {
        let localRule = PopsPanel.getValue(
            "baidu-search-interception-rules",
            "",
        );
        localRule = localRule.trim();
        return localRule;
    },
    /** 设置本地存储的自定义拦截规则 */
    setLocalRule(rule: string) {
        PopsPanel.setValue("baidu-search-interception-rules", rule);
    },
    /** 清空规则 */
    clearLocalRule() {
        PopsPanel.deleteValue("baidu-search-interception-rules");
    },
    /**
     * 把规则进行转换
     * @param localRule
     */
    parseRule(localRule: string) {
        let result: BaiduSearchRuleConfig[] = []
        function parseOneRule(ruleItem: string) {
            let cRuleItemSplit = ruleItem.split("##");
            if (!cRuleItemSplit.length) {
                log.error(["无效规则", ruleItem]);
                return;
            }
            let ruleName = cRuleItemSplit[0];
            let ruleNameLowerCase = ruleName.toLowerCase();
            let endRule = ruleItem.replace(ruleName + "##", "");
            if (ruleNameLowerCase === "match-href") {
                return {
                    rule: ruleItem,
                    mode: ruleNameLowerCase as BaiDuSearchRuleMode,
                    matchText: new RegExp(endRule),
                };
            } else if (ruleNameLowerCase === "match-attr") {
                let otherRuleSplit = endRule.split("##");
                if (otherRuleSplit.length === 1) {
                    log.error(["无效规则", ruleItem]);
                    return;
                }
                let attrName = otherRuleSplit[0];
                let attrValueMatch = endRule.replace(attrName + "##", "");
                return {
                    rule: ruleItem,
                    mode: ruleNameLowerCase as BaiDuSearchRuleMode,
                    attr: attrName,
                    matchText: new RegExp(attrValueMatch),
                };
            } else if (
                ruleNameLowerCase === "contains-child" ||
                ruleNameLowerCase === "remove-child"
            ) {
                return {
                    rule: ruleItem,
                    mode: ruleNameLowerCase as BaiDuSearchRuleMode,
                    matchText: endRule,
                };
            } else {
                log.error(["无效规则", ruleItem]);
            }
        }

        localRule.split("\n").forEach((ruleItem) => {
            ruleItem = ruleItem.trim();
            if (ruleItem === "") {
                return;
            }
            if (ruleItem.startsWith("//")) {
                return;
            }
            let moreRule = ruleItem.split("&&&&");
            if (moreRule.length === 1) {
                let parsedRule = parseOneRule(ruleItem);
                if (parsedRule) {
                    result.push(parsedRule);
                }
            } else {
                let resultRule: BaiduSearchRuleConfig[] = [];
                moreRule.forEach((oneRule) => {
                    oneRule = oneRule.trim();
                    let parsedRule = parseOneRule(oneRule);
                    if (parsedRule) {
                        resultRule.push(parsedRule);
                    }
                });
                result.push({
                    mode: "more-rule" as BaiDuSearchRuleMode,
                    moreRule: resultRule,
                });
            }
        });
        return result;
    },
    /**
     * 执行自定义规则，拦截返回true
     * @param element
     * @param url 真实链接
     */
    handleCustomRule(element: HTMLDivElement, url?: string) {
        function handleOneRule(ruleItem: BaiduSearchRuleConfig) {
            if (ruleItem.mode === "match-href") {
                if (typeof url === "string" && url.match(ruleItem.matchText as RegExp)) {
                    return true;
                }
            } else if (ruleItem.mode === "match-attr") {
                if (
                    element.hasAttribute(ruleItem.attr as string) &&
                    element.getAttribute(ruleItem.attr as string)?.match(ruleItem.matchText as RegExp)
                ) {
                    return true;
                }
            } else if (ruleItem.mode === "contains-child") {
                if (element.querySelector(ruleItem.matchText as string)) {
                    return true;
                }
            } else if (ruleItem.mode === "remove-child") {
                element.querySelector(ruleItem["matchText"] as string)?.remove();
            }
        }
        for (const ruleItem of this.rule) {
            if (ruleItem.moreRule) {
                for (const oneRule of ruleItem.moreRule) {
                    if (handleOneRule(oneRule)) {
                        return true;
                    }
                }
            } else {
                if (handleOneRule(ruleItem)) {
                    return true;
                }
            }
        }
    },
};

export {
    BaiduSearchRule
}