export interface CookieStoreData {
  /**
   * 记录 cookie 域名的字符串。
   */
  domain: string;
  /**
   * Unix 时间戳（以毫秒为单位表示），记录 cookie 的到期日期。
   */
  expires: number;
  /**
   * 记录 cookie 名称的字符串。
   */
  name: string;
  /**
   * 一个布尔值，默认为 false。将其设置为 true 指定要删除的 cookie 将是分区 cookie。
   */
  partitioned: boolean;
  /**
   * 记录 cookie 路径的字符串。
   */
  path: string;
  sameSite: string;
  /**
   * 一个布尔值，表示 cookie 是否仅在安全上下文中使用（true）或（false）。
   */
  secure: boolean;
  /**
   * 记录 cookie 的值的字符串。
   */
  value: string;
}
