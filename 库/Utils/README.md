# 部分注释文件

```javascript
https://raw.githubusercontent.com/WhiteSevs/TamperMonkeyScript/master/%E5%BA%93.ts/Utils.d.ts
```

使用方式

```javascript
/// <reference path="本地路径/Utils.d.ts" />
```

## 使用文档

- `Utils.isNull` 判断对象是否为空

```javascript
Utils.isNull(0);
结果：false

Utils.isNull("");
结果：false

Utils.isNull(" ");
结果：false

Utils.isNull(undefined);
结果：false
```

- `Utils.assign` 代替 `Object.assign`

```javascript
Utils.assign({1:1},{1:2,2:3})
结果：{1:2}
```

- `Utils.waitNode` 等待元素出现在页面中，非使用`setInterval`实现，性能损耗较少

```javascript
/* 等待a元素出现，返回Promise对象，在then中或使用await获取结果，统一返回数组格式的元素，如[...a] */
Utils.waitNode("a").then((element => {
  console.log(element );
});

/* 同时满足多个选择器的结果，都满足了才会触发回调 */
let moreDOM = await Utils.waitNode("#page", "a[href]");
console.log(moreDOM);
```

- `Utils.isVisible` 判断元素是否是可见的
- `Utils.isPhone` 判断当前的`User-Agent`是否是`移动端`
- `Utils.toJSON` 代替`JSON.parse`，满足更多格式的转换对象

```javascript
Utils.toJSON("{123:123}");
结果：{123:123}
```

- `Utils.Httpx` 代替油猴的`GM_xmlhttpRequest`，统一管理请求状态

```javascript
let httpx = new Utils.Httpx();
/* 修改配置 */
httpx.config({
  timeout: 5000,
  onabort: function () {
    console.log("请求取消");
  },
  ontimeout: function () {
    console.log("请求超时");
  },
  onerror: function (response) {
    console.log("httpx-onerror 请求异常");
    console.log(response);
  },
});
/* 发送post请求 */
let postResp = await httpx.post({
  url: url,
  data: JSON.stringify({
    test: 1,
  }),
});
```

- `Utils.GM_Menu` 代替油猴的`GM_registerMenuCommand`和`GM_unregisterMenuCommand`，管理油猴菜单

```javascript
let GM_Menu = new Utils.GM_Menu({
data: [
    {
    menu_key: "menu_key",
    text: "测试按钮",
    enable: true,
    accessKey: "a",
    autoClose: false,
    showText(text, enable) {
        return "[" + (enable ? "√" : "×") + "]" + text;
    },
    callback(data) {
        console.log("点击菜单，值修改为", data.enable);
    },
    },
],
autoReload: false,
GM_getValue,
GM_setValue,
GM_registerMenuCommand,
GM_unregisterMenuCommand,
});


// 获取某个菜单项的值
GM_Menu.get("menu_key");
> true

// 获取某个菜单项的开启/关闭后显示的文本
GM_Menu.getShowTextValue("menu_key");
> √测试按钮

// 添加键为menu_key2的菜单项
GM_Menu.add({
key:"menu_key2",
text: "测试按钮2",
enable: false,
showText(text,enable){
    return "[" + (enable ? "√" : "×") + "]" + text;
},
callback(data){
    console.log("点击菜单，值修改为",data.enable);
}
});
// 使用数组的方式添加多个菜单，如menu_key3、menu_key4
GM_Menu.add([
{
    key:"menu_key3",
    text: "测试按钮3",
    enable: false,
    showText(text,enable){
    return "[" + (enable ? "√" : "×") + "]" + text;
    },
    callback(data){
    console.log("点击菜单，值修改为",data.enable);
    }
},
{
    key:"menu_key4",
    text: "测试按钮4",
    enable: false,
    showText(text,enable){
    return "[" + (enable ? "√" : "×") + "]" + text;
    },
    callback(data){
    console.log("点击菜单，值修改为",data.enable);
    }
}
]);

// 更新键为menu_key的显示文字和点击回调
GM_Menu.update({
menu_key:{
    text: "更新后的测试按钮",
    enable: true,
    showText(text,enable){
    return "[" + (enable ? "√" : "×") + "]" + text;
    },
    callback(data){
    console.log("点击菜单更新后的测试按钮，新值修改为",data.enable);
    }
}
});

// 删除键为menu_key的菜单
GM_Menu.delete("menu_key");
```

等...API请看代码
