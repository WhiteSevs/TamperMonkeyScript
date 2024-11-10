/**
 * 添加CSS标签到页面中
 * @param {string} cssText
 */
const GM_addStyle = function (cssText = "") {
  /* 创建<style>标签 */
  let cssElement = document.createElement("style");
  /* 设置标签元素的内容 */
  cssElement.innerHTML = cssText;
  /* 追加到<head>标签里 */
  document.head.appendChild(cssElement);
  /* 返回被添加的CSS元素 */
  return cssElement;
};
