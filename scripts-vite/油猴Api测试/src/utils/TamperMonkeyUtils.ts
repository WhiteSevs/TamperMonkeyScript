export const TamperMonkeyUtils = {
  /**
   * 获取文档的超链接文本
   * @param navName 链接导航锚点名
   * @param text 超链接显示的文本
   */
  getApiDocUrl(navName: string, text?: string) {
    text = text ?? navName;
    return `<a href="https://www.tampermonkey.net/documentation.php?ext=gcal&version=#api:${navName}" target="_blank">${text}</a>`;
  },
};
