import { RuleSubscribe } from "@/utils/RuleSubscribe";

export const WebsiteSubscribeRule = new RuleSubscribe<WebsiteRuleOption>({
	STORAGE_API_KEY: "websiteRule",
	STORAGE_KEY: "rule-subscribe",
});
