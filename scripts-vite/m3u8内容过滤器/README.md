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
