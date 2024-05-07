/**
 * 判断是否是论坛
 * @param url 
 * @returns 
 */
export function isBBS(url: string = window.location.href) {
    return url.match(/bbs.binmt.cc/)
}