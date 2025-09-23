export const PagingUtils = {
  /**
   * 设置安全的html
   */
  setSafeHTML($el: Element, text: string) {
    // 创建 TrustedHTML 策略（需 CSP 允许）
    try {
      $el.innerHTML = text;
    } catch {
      // @ts-ignore
      if (globalThis.trustedTypes) {
        // @ts-ignore
        const policy = globalThis.trustedTypes.createPolicy("safe-innerHTML", {
          createHTML: (html: string) => html,
        });
        $el.innerHTML = policy.createHTML(text);
      } else {
        throw new Error("PagingUtils trustedTypes is not defined");
      }
    }
  },
};
