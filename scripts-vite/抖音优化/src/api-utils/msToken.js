export function generate_msToken(randomLength = 107) {
  /**
   * 根据传入长度产生随机字符串
   */
  let randomStr = "";
  const baseStr = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789=";
  const length = baseStr.length - 1;
  for (let i = 0; i < randomLength; i++) {
    randomStr += baseStr.charAt(Math.floor(Math.random() * (length + 1)));
  }
  return randomStr;
}
