import { RouterUtil } from "@components/utils/RouterUtil";

export const SearchEngineRouter = {
  /**
   * baidu
   */
  isBaidu() {
    return RouterUtil.builder()
      .hostNameMatch(/^(ipv6|www|www1|m).baidu.com$/)
      .r();
  },
  /**
   * 百度首页
   */
  isBaiduHome() {
    return this.isBaidu() && RouterUtil.builder().pathname("/").r();
  },
  /**
   * 百度搜索
   */
  isBaiduSearch() {
    return this.isBaidu() && RouterUtil.builder().pathname("/s").r();
  },
  /**
   * google
   */
  isGoogle() {
    return RouterUtil.builder().hostNameIncludes("google.com").r();
  },
  /**
   * google首页
   */
  isGoogleHome() {
    return this.isGoogle() && RouterUtil.builder().pathname("/").or().pathname("/webhp").r();
  },
  /**
   * 谷歌搜索
   */
  isGoogleSearch() {
    return this.isGoogle() && RouterUtil.builder().pathname("/search").r();
  },
  /**
   * bing
   */
  isBing() {
    return RouterUtil.builder()
      .hostNameMatch(/.*.bing.(com|net)$/)
      .r();
  },
  /**
   * 必应搜索
   */
  isBingSearch() {
    return this.isBing() && RouterUtil.builder().pathname("/search").r();
  },
};
