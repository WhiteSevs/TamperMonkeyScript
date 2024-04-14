/**
 * 判断是否存在formhash
 */
export function hasFormHash(text: string) {
    return Boolean(text.match(/formhash=(.+)&/))
}
/**
 * 获取formhash
 */
export function getFormHash(text: string) {
    let regMatch = text.match(/formhash=(.+)&/);
    return regMatch?.[regMatch?.length - 1];
}
/**
 * 判断是否存在hash
 */
export function hasHash(text: string) {
    return Boolean(text.match(/hash=(.+)&/))
}
/**
 * 获取hash
 */
export function getHash(text: string) {
    let regMatch = text.match(/hash=(.+)&/);
    return regMatch?.[regMatch?.length - 1];
}