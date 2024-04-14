## NZMsgBox的解混淆并且合并了两个涉及的js，包括css内容

### NZMsgBox简介

* 项目文档地址: [https://www.jq22.com/demo/NZ-Plugin-MsgBox202201130154/index.html](https://www.jq22.com/demo/NZ-Plugin-MsgBox202201130154/index.html)
* 项目简介地址: [https://www.jq22.com/jquery-info24191](https://www.jq22.com/jquery-info24191)
* 项目演示图: ![https://www.jq22.com/plugin/2022-01-13-01-53-47.png](https://www.jq22.com/plugin/2022-01-13-01-53-47.png)

### 涉及的js和css资源

* [https://www.jq22.com/demo/NZ-Plugin-MsgBox202201130154/Js/NZ-Plugin/Js/NZ-MsgBox.min.js](https://www.jq22.com/demo/NZ-Plugin-MsgBox202201130154/Js/NZ-Plugin/Js/NZ-MsgBox.min.js)
* [https://www.jq22.com/demo/NZ-Plugin-MsgBox202201130154/Js/NZ-Plugin/Js/NZ-Drag.min.js](https://www.jq22.com/demo/NZ-Plugin-MsgBox202201130154/Js/NZ-Plugin/Js/NZ-Drag.min.js)
* [https://www.jq22.com/demo/NZ-Plugin-MsgBox202201130154/Js/NZ-Plugin/Css/NZ-MsgBox.min.css](https://www.jq22.com/demo/NZ-Plugin-MsgBox202201130154/Js/NZ-Plugin/Css/NZ-MsgBox.min.css)

### 部分调用方式

```js
//不带图标
$.NZ_MsgBox.alert({ 
    title: "yes!成功！"
    , content: "耶耶耶！成功！well done!"
    , type: ""
    , buttons: { 
        reverse: true, // 如果是confirm，底部按钮置反
        autoClose: false, // 禁止自动关闭
        confirm: { text: "好的" } 
    } 
});
//不带图标
$.NZ_MsgBox.alert({ 
    title: ""
    , content: "耶耶耶！成功！well done!"
    , type: ""
    , buttons: { 
        confirm: {text: "好的"} 
    } 
});
//成功
$.NZ_MsgBox.alert({ 
    title: "yes!成功！"
    , content: "耶耶耶！成功！well done!"
    , type: "success"
});
//警告
$.NZ_MsgBox.alert({
    title: "Warning!警告！"
    , content: "Warning！警告！well done!"
    , type: "warning"
});
//错误
$.NZ_MsgBox.alert({ 
    title: "Error!错误！"
    , content: "Error！错误！"
    , type: "error"
});
//超长内容
$.NZ_MsgBox.alert({
    title: "yes!成功！"
    , content: "他自己，自从到城里来，......"
});
```
