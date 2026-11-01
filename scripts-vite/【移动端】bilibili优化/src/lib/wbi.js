import { BilibiliUserApi } from "@/api/BilibiliUserApi";
import { utils } from "@components/env.base";
import md5 from "md5";

/**
 * @param {string|object|URLSearchParams|URL} params
 */
export const searchParamsToWbiStr = async (params) => {
  // ref: https://socialsisteryi.github.io/bilibili-API-collect/docs/misc/sign/wbi.html
  /**
   * @param {string|object|URLSearchParams|URL} params
   */
  async function getWbiQueryString(params) {
    if(params instanceof URL){
      params = utils.searchParamStrToObj(params.searchParams);
    }else if(params instanceof URLSearchParams){
      params = utils.searchParamStrToObj(params);
    }else if(typeof params === "string"){
      params = utils.searchParamStrToObj(new URLSearchParams(params));
    }
    // get origin key
    const response = await BilibiliUserApi.nav(false);
    if (!response) {
      return;
    }
    const { img_url, sub_url } = response.wbi_img;
    const imgKey = img_url.slice(img_url.lastIndexOf("/") + 1, img_url.lastIndexOf("."));
    const subKey = sub_url.slice(sub_url.lastIndexOf("/") + 1, sub_url.lastIndexOf("."));
    const originKey = imgKey + subKey;

    // get mixin key
    const mixinKeyEncryptTable = [
      46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38,
      41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36,
      20, 34, 44, 52,
    ];
    const mixinKey = mixinKeyEncryptTable
      .map((n) => originKey[n])
      .join("")
      .slice(0, 32);

    // generate basic query string
    const query = Object.keys(params)
      .sort() // sort properties by key
      .map((key) => {
        // @ts-ignore
        const value = params[key].toString().replace(/[!'()*]/g, ""); // remove characters !'()* in value
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join("&");

    // calculate wbi sign
    const wbiSign = md5(query + mixinKey);

    return query + "&w_rid=" + wbiSign;
  }
  return await getWbiQueryString(params);
};
