<font size="6">Qmsg</font>

- 最新版本：[![npm version](https://img.shields.io/npm/v/qmsg)](https://www.npmjs.com/package/qmsg)

**插件描述：**
一款优雅的原生 JS 页面消息提示插件，兼容性良好，无任何依赖。

**使用**

```npm
npm install qmsg
// 或者
pnpm add qmsg
```

**声明：**
此插件非笔者原创，笔者对原项目使用`ts`进行重构，让开发者可以使用代码提示。以下为原插件来源信息：

- 原作者：或许吧（jesseqin）
- 转载地址：[https://www.jq22.com/jquery-info23550](https://www.jq22.com/jquery-info23550)

![Qmsg](https://raw.githubusercontent.com/WhiteSevs/Message.js/master/assets/intro-zh.jpg)

**使用：**

**html 引入：**

```html
<!-- your html -->
<script src="https://fastly.jsdelivr.net/npm/qmsg@latest/dist/index.umd.min.js"></script>
<script>
	var configs = {};
	// configs 为配置参数，可省略
	Qmsg.info("这是提示消息", configs);
</script>
```

**油猴引入**

```html
// @require https://fastly.jsdelivr.net/npm/qmsg@1.3.3/dist/index.umd.min.js
```

**全局配置**

通过`Qmsg.config({})`来动态修改全局配置

```js
Qmsg.config({
	showClose: true,
	timeout: 5000,
});
```

所有支持的配置信息如下:

| 参数名                      | 类型                                                | 描述                                                                                                       | 默认                                        |
| --------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| parent                      | HTMLElement \| Document \| DocumentFragment \| Node | 实例插入到页面的父元素                                                                                     | document.body \|\| document.documentElement |
| useShadowRoot               | Boolean                                             | 是否使用 shadowRoot（内部插入实例元素）                                                                    | true                                        |
| shadowRootMode              | "open" \| "closed"                                  | shadowRoot 的模式                                                                                          | "open"                                      |
| animation                   | Boolean                                             | 是否使用弹出动画                                                                                           | true                                        |
| autoClose                   | Boolean                                             | 是否自动关闭                                                                                               | true                                        |
| listenEventToPauseAutoClose | Boolean                                             | 通过监听事件来判断是否(鼠标悬停\|触摸进入)时暂停自动关闭，当(鼠标离开\|触摸离开)时会自动重启自动关闭定时器 | true                                        |
| content                     | Number                                              | 提示的消息内容                                                                                             | 空                                          |
| isHTML                      | Boolean                                             | （同上）是否将内容作为 html 渲染                                                                           | false                                       |
| position                    | String                                              | 弹出位置 topleft、top、topright、left、center、right、bottomleft、bottom、bottomright，不区分大小写        | top                                         |
| maxNums                     | Number                                              | 页面中最多显示消息(autoClose: true)的数量                                                                  | 5                                           |
| onClose                     | Function                                            | 关闭时的回调函数                                                                                           | null                                        |
| showClose                   | Boolean                                             | 是否显示关闭图标                                                                                           | false                                       |
| showIcon                    | Boolean                                             | 是否显示左边的图标                                                                                         | true                                        |
| showMoreContent             | Boolean                                             | 是否显示更多内容(换行)                                                                                     | false                                       |
| showReverse                 | Boolean                                             | 是否使弹出方式逆反                                                                                         | false                                       |
| timeout                     | Number                                              | 自动关闭时，消息的持续显示时间，单位（ms）                                                                 | 2500                                        |
| type                        | String                                              | 弹出类型                                                                                                   | info                                        |
| zIndex                      | Number                                              | z-index 的层级                                                                                             | 50000                                       |
| style                       | String                                              | 由于 Qmsg 在 ShadowRoot 内，需要更改 CSS 时，在这里设置即可级                                              |                                             |
| customClass                 | String                                              | 自定义的 className                                                                                         |                                             |
| isLimitWidth                | Boolean                                             | 是否限制宽度                                                                                               | false                                       |
| limitWidthNum               | Number                                              | 限制宽度的数值                                                                                             | 200                                         |
| limitWidthWrap              | "no-wrap" \| "wrap"\| "ellipsis"                    | 当超出限制宽度时，是否换行还是显示为省略号                                                                 | "no-wrap"                                   |
| consoleLogContent           | Boolean \| Function                                 | 是否在控制台打印信息                                                                                       | false                                       |
| afterRender                 | Funtion                                             | 在实例初始化完毕后自动调用该函数                                                                           | null                                        |

**Qmsg 支持的方法**

```js
// 配置
Qmsg.config();
// 信息
Qmsg.info();
// 警告
Qmsg.warning();
// 错误
Qmsg.error();
// 成功
Qmsg.success();
// 加载中
Qmsg.loading();
```

以上方法均可传递 1-2 个参数，如下：

```js
Qmsg.loading("我是加载条");
Qmsg.info("给你个眼神，你懂得", {
	showClose: true,
	onClose: function () {
		console.log("我懂了");
	},
});
Qmsg.error({
	content: "1+1=3",
	timeout: 5000,
});
```

**注意：**`Qmsg.loading()`默认设置`autoClose = false`，一般来说需要手动关闭：

```js
var loadingMsg = Qmsg.loading("我是加载条");
// do something
loadingMsg.close();
```

如需要自动关闭则需要如下调用:

```js
Qmsg.loading("我是加载条", {
	autoClose: true,
});
// 或者
Qmsg.loading({
	autoClose: true,
	content: "我是加载条",
});
```

**Qmsg.closeAll()**

关闭所有消息，包括`autoClose = false`的消息

```js
var aMsg = Qmsg.info("这是个info消息");
```

**close()**

关闭当前消息，会触发`onClose`回调函数。

```js
aMsg.close();
```

**destroy()**

销毁消息，不会触发`onClose`回调函数。

```js
aMsg.destroy();
```

**setText(text:String)**

对已弹出的内容进行修改

```js
aMsg.setText("这是进行修改的info消息");
```

**setHTML(html:String)**

对已弹出的内容进行修改

```js
aMsg.setHTML(
	"<a href='javascript:;' target='_blank'>这是进行修改的info消息超链接</a>"
);
```

**关闭左边的图标显示**

```js
Qmsg.config({
	showIcon: false,
});
Qmsg.info("这个没有图标");
// 或者
Qmsg.info("这个没有图标", {
	showIcon: false,
});
```

**设置九宫格位置弹出**

```js
Qmsg.info("左上角", {
	position: "topleft",
});

Qmsg.info("顶部", {
	position: "top",
});

Qmsg.info("右上角", {
	position: "topright",
});

Qmsg.info("左边", {
	position: "left",
});

Qmsg.info("中间", {
	position: "center",
});

Qmsg.info("右边", {
	position: "right",
});

Qmsg.info("左下角", {
	position: "bottomleft",
});

Qmsg.info("底部", {
	position: "bottom",
});

Qmsg.info("右下角", {
	position: "bottomright",
});
```
