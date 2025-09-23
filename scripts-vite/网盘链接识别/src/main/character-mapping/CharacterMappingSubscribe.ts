import { RuleSubscribe } from "@components/utils/RuleSubscribe";

export const CharacterMappingSubscribe = new RuleSubscribe<CharacterMappingOption>({
  STORAGE_API_KEY: "character-mapping-rule",
  STORAGE_KEY: "character-mapping-subscribe-rule",
});
