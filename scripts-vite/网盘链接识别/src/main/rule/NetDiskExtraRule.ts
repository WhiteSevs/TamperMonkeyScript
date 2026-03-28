export const NetDiskExtraRule = {
  /**
   * 使用该正则判断提取到的shareCode是否正确
   *
   * 匹配命中，则是不正常的shareCode
   */
  shareCodeBlackList: [
    /vipstyle|notexist|ajax|file|download|ptqrshow|xy-privacy/g,
    /comp|web|undefined|1125|unproved|console|account|favicon|setc/g,
  ] as (RegExp | string)[],
  /**
   * 前提：根据规则执行的`checkAccessCode`后对它提取的字符串进行判断
   *
   * 访问码匹配字符串的黑名单
   *
   * 如果命中，则该匹配的字符串不符合条件，则不获取访问码
   */
  checkAccessCodeBlackList: [
    // /解压密码/gi
  ] as (RegExp | string)[],
  /**
   * accessCode黑名单
   *
   * 命中的都是不符合的accessCode
   */
  accessCodeBlackList: [/^(font|http)/gi] as (RegExp | string)[],
  /**
   * 访问码需要去除的字符串
   */
  removeNotNeedStrByAccessCode: [
    " ",
    "：",
    ":",
    "\n",
    /(解压|)密码/gi,
    "提取码",
    "访问码",
    "?password=",
    "?pwd=",
    "&pwd=",
    "?p=",
  ] as (RegExp | string)[],
  /**
   * 当没有accessCode时，使用该正则去除不需要的字符串
   */
  removeNotNeedStrByNoAccessCode: [
    /(\n| )/gi,
    /(解压|)密码(:|：)/gi,
    /提取码(:|：)/gi,
    /访问码(:|：)/gi,
    /(\?password=|\?pwd=|&pwd=|\?p=)/gi,
    /{#(encodeURI-|encodeURIComponent-|decodeURI-|decodeURIComponent-|)accessCode#}/gi,
  ] as (RegExp | string)[],
};
