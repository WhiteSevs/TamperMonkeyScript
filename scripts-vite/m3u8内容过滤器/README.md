# m3u8内容过滤器

> 注：并非所有功能都是默认开启，有些功能需要到油猴菜单中打开【设置】，手动开启功能。
>

一个用于过滤m3u8内容的油猴脚本。

## 自定义js的参数格式

```js
/**
 * @param {string} m3u8Text m3u8文本
 * @param {Object} M3U8Filter 过滤类
 * @param {Object} M3U8Parser 解析类
 */
let ownFilterCodeFunction = function(m3u8Text,M3U8Filter,M3U8Parser){
   // 自定义的规则的代码code
   ...
   // 必须返回处理后的m3u8Text
   // 例如：
   let handlerM3U8Text = M3U8Filter.filterAdsWithFilePathSimilar(m3u8Text, {
      similarCompareValue: 0.2,
      includePercent: 0.5,
      handleFilePath(filePath){
         return filePath.replace(/^http(s|):\/\/.*.com\/video\//,"")
      }
   });
   return handlerM3U8Text;
}
```

## 安装

> 注：建议使用浏览器扩展执行本脚本。
>
> - 浏览器扩展的功能和Api更完整
> - 非浏览器扩展使用脚本会遇到更多使用上的问题（跨域问题、脚本冲突等）
>

- [x] 浏览器扩展
  - [x] Chrome/Edge [TamperMonkey](https://microsoftedge.microsoft.com/addons/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN)、[ViolentMonkey](https://microsoftedge.microsoft.com/addons/detail/%E6%9A%B4%E5%8A%9B%E7%8C%B4/eeagobfjdenkkddmbclomhiblgggliao?hl=zh-CN)、[ScriptCat](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB/liilgpjgabokdklappibcjfablkpcekh?hl=zh-CN)
  - [x] Firefox [TamperMonkey](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/)、[ViolentMonkey](https://addons.mozilla.org/zh-CN/firefox/addon/violentmonkey/)、[ScriptCat](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/)
  - [x] Safari [Stay](https://apps.apple.com/cn/app/stay-for-safari-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%B4%E4%BE%A3/id1591620171)

## 赞赏支持

<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/wx_zsm.png" alt="微信赞赏" width="250" height="250">
<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/zfb_skm.png" alt="支付宝赞赏" width="250" height="250">
