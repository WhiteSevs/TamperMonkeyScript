## 将跨域改为通过GM_xmlhttpRequest获取

## 介绍

+ 版本：`1.4.1`
+ 文件地址：[https://html2canvas.hertzen.com/dist/html2canvas.js](https://html2canvas.hertzen.com/dist/html2canvas.js)
+ 项目地址：[https://html2canvas.hertzen.com/](https://html2canvas.hertzen.com/)

```js
# 我的设置如下
let options = {
    allowTaint: true,
    logging: true,
    useCORS: true,

}
html2canvas(document.documentElement, options ).then( canvas =>{
  var base64Image = canvas.toDataURL("image/png");

})
```

# 如果是自己使用webview定义的GM_xmlhttpRequest，可在onload回调参数中新增一个`responseBase64`用于图片的base64获取
