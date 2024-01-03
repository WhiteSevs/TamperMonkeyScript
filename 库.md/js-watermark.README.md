# js-watermark

JavaScript 图片文字水印、图片图片水印生成工具，生成 base64 编码图片，可以传入file对象或者base64图片。

# 项目

Github地址:[https://github.com/WhiteSevs/js-watermark](https://github.com/WhiteSevs/js-watermark)
因无法使用jsdelivr引用本项目，所以在`greasyfork`上新建一个库

# 使用示意

① tampermonkey引入

```JavaScript
//@require    https://greasyfork.org/scripts/452322-js-watermark/code/js-watermark.js
```

② 调用（通过`base64`传入的用法）

```JavaScript
async function addWater(bgBase64Src){
    var watermark = new Watermark();
    watermark.clearMark(); // 清空之前的水印信息，如果new方法在外面的话使用它
    await watermark.setImage(bgBase64Src); // 该方法是异步
    watermark.addText( {
        text: ['Call By waterMark.addText','你需要添加水印的文字，至少放一个'],
        fontSize: '5vw',
        ...参数很多就不举例了
    });
    return watermark;
}
var waterObj = addWater();
var waterBase64Src = waterObj.render('png');
var waterBlobUrl = '';
waterObj.renderBlob().then( (blobUrl)=>{
    waterBlobUrl = blobUrl;
});
```

③ 调用（通过`file`传入的用法）

```JavaScript
async function addWater(fileObj){
    var watermark = new Watermark();
    watermark.clearMark(); // 清空之前的水印信息，如果new方法在外面的话使用它
    await watermark.setFile(fileObj); // 该方法是异步
    watermark.addText( {
        text: ['Call By waterMark.addText','你需要添加水印的文字，至少放一个'],
        fontSize: '5vw',
        ...参数很多就不举例了
    });
    return watermark.render('png');
}
let uploadFile = document.querySelector("input[type='file']#filedata").files[0]; // 页面中file控件中的files对象数组中的一个文件
addWater(uploadFile);

```

④ 调用（通过`base64`传入的用法且添加`图片`水印）

```JavaScript
async function addWater(bgBase64Src){
    var watermark = new Watermark();
    watermark.clearMark(); // 清空之前的水印信息，如果new方法在外面的话使用它
    await watermark.setImage(bgBase64Src); // 该方法是异步
    watermark.addImage( {
        imageArray: [new Image(),new Image(),...],
        width: 50,
        height: 50,
        ...参数很多就不举例了
    });
    return watermark.render('png');
}
addWater();

```
  
# 实例方法

## .setFile(file)

```js
@param file File对象
@return {Boolean} 是否载入成功 
```

通过 file 对象载入图片文件时使用。

## .setImage(src)

```js
@param src {String} 带有 data:image/... 前缀的图片 base64 编码字符串
```

通过 base64 载入图片文件时使用，每次调用此方法时将图片更新到实例中，参数值为带有`image`前缀的图片 base64 编码字符串。

## .hasImage()

```js
@return {Boolean} 当前实例中是否包含图片
```

判断当前实例是否包含图片（调用`setFile`或`setImage`成功后将会包含）。

## .getSize()

```js
@return {Object} 当前图片尺寸 
```

用以获取当前图片尺寸，返回格式`{ width: 0, height: 0 }`。

## .getPreview()

```js
@return {String} 当前实例原图 base64 编码的字符串
```

返回原图。

## .addText(opts)

```js
@param opts {Object} 水印文字样式配置
```

参数详解:

* `text`全局水印文字，在添加水印时若不指定水印文字，则会默认使用全局水印文字，默认值为`[Call By waterMark.addText]`，可以有多个文字，随机设置到图片中。
* `fontSize`全局水印字体大小，单位`px`或`vw`，其中`px`为绝对值，`vw`为相对值，`100vw`等于当前图片宽度，默认值为`6vw`。
* `fontFamily`全局字体类型，默认值为`Microsoft Yahei`。
* `color`全局字体颜色，默认值为`#000000`。
* `textAlign`文字对齐方式, 参数有`left`|`center`|`right`，默认值`center`。
* `stroke`文字描边，默认值为`false`。
* `globalAlpha` 透明度，取值范围 0.00 ~ 1.00，默认值`0.7`。
* `rotateAngle` 旋转角度，取值范围 -360 ~ 360，默认值`50`。
* `maxWidth` 文字最大宽度，超过宽度会换行，默认值`100`px。
* `xMoveDistance` 每个文字的左右间距，取值范围 不限，默认值`30`，最好是`测量出文字占据宽度`+`文字间距`。
* `yMoveDistance` 每个文字的上下间距，取值范围 不限，默认值`30`，最好是`测量出文字占据高度`+`文字间距`。

## .addPixelText(opts)

```js
@param opts {Object} 像素水印文字样式配置
```

* `text`全局水印文字，在添加水印时若不指定水印文字，则会默认使用全局水印文字，默认值为`像素文字水印`。
* `big`要绘制的文字像素配置信息。
* `fontSize`要绘制的文字像素 文字大小，默认值为`150`。
* `fontFamily`要绘制的文字像素 字体类型，默认值为`微软雅黑`。
* `textAlign`要绘制的文字像素 文字对齐方式，参数有`left`|`center`|`right`，默认值`center`。
* `rotateAngle`要绘制的文字像素 旋转角度，取值范围 -360 ~ 360，默认值`0`。
* `stroke`要绘制的文字像素 描边，默认值为`false`。
* `small`组成绘制的文字像素配置信息。
* `fontSize`组成绘制的文字像素配置信息 文字大小，默认值为`10`。
* `fontFamily`组成绘制的文字像素配置信息 字体类型，默认值为`微软雅黑`。
* `color`组成绘制的文字像素配置信息 字体颜色，默认值为`#000`。
* `textAlign`组成绘制的文字像素配置信息 文字对齐方式，参数有`left`|`center`|`right`，默认值`center`。
* `color`组成绘制的文字像素配置信息 透明度，默认值为`0.7`。

## .addImage(opts)

```js
@param opts {Object} 水印图片样式配置
```

参数详解:

* `imageArray` 必须设置，水印Image对象，可以有多个图片，随机设置到图片中。
* `width` 参数`imageArray`中图片占据的宽度，默认值`50`。
* `height`参数`imageArray`中图片占据的高度，默认值`50`。
* `globalAlpha` 透明度，取值范围 0.00 ~ 1.00，默认值`0.5`。
* `rotateAngle` 旋转角度，取值范围 -360 ~ 360，默认值`0`。
* `xMoveDistance` 每个图片的左右间距，取值范围 不限，默认值`70`，最好是`参数width`+`图片间距`。
* `yMoveDistance` 每个图片的上下间距，取值范围 不限，默认值`70`，最好是`参数height`+`图片间距`。

## .render(type)

```js
@param type {String} 图片类型，可传入`jpeg`（不支持透明）或`png`（支持透明），默认为`jpeg`。
@return {String} 原图添加水印后的 base64 编码的字符串
```

绘制结果图片，返回`base64`编码字符串。

## .renderBlob()

```js
@return {String} 原图添加水印后的  blob格式的URL，可以直接访问该链接，该方法为`异步`，需要同步请用`await`或者`then`
```

绘制结果图片，返回`base64`编码字符串。

## .clearMark()

清空水印信息，下一次调用`addText`方法时会在原图基础上进行绘制。

# 在线预览

方式1 - 传入 file 对象，通过主动调用实例方法生成水印图：[在线demo](https://WhiteSevs.github.io/js-watermark/demo/example1.html)

方式2 - 传入 file 对象，通过主动调用实例方法生成水印像素文字图：[在线demo](https://WhiteSevs.github.io/js-watermark/demo/example2.html)
