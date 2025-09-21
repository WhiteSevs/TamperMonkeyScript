# 弹窗库

- 最新版本：[![npm version](https://img.shields.io/npm/v/@whitesev/pops)](https://www.npmjs.com/package/@whitesev/pops)

````js

## pops.isPhone

判断是否是手机访问

```js
pops.iPhone()
-> true
````

## pops.alert

普通信息框

```js
pops.alert({
  content: {
    text: "普通信息框",
  },
  mask: {
    enable: true,
    clickEvent: {
      toClose: true,
    },
  },
});
```

![pi72wJ1.png](https://s11.ax1x.com/2023/12/23/pi72wJ1.png)

## pops.confirm

询问框

```js
pops.confirm({
  content: {
    text: "询问框",
  },
  mask: {
    enable: true,
    clickEvent: {
      toClose: true,
    },
  },
});
```

![pi720Rx.png](https://s11.ax1x.com/2023/12/23/pi720Rx.png)

## pops.drawer

抽屉层

```js
pops.drawer({
  content: {
    text: "抽屉层",
  },
  mask: {
    enable: true,
    clickEvent: {
      toClose: true,
    },
  },
});
```

![pi72rQK.png](https://s11.ax1x.com/2023/12/23/pi72rQK.png)

## pops.folder

文件夹层

```js
pops.folder({
  title: {
    text: "文件夹层",
  },
  folder: [
    {
      fileName: "测试文件.apk",
      fileSize: 30125682,
      fileType: "apk",
      createTime: 1702036410440,
      latestTime: 1702039410440,
      isFolder: false,
      index: 1,
      clickEvent() {
        console.log("下载文件：", this.fileName);
        return "https://update.greasyfork.org/scripts/456485/pops.js";
      },
    },
  ],
  mask: {
    enable: true,
    clickEvent: {
      toClose: true,
    },
  },
});
```

![pi72ssO.png](https://s11.ax1x.com/2023/12/23/pi72ssO.png)

## pops.iframe

iframe层

```js
pops.iframe({
  url: window.location.href,
  title: {
    text: "iframe层",
  },
  mask: {
    enable: true,
    clickEvent: {
      toClose: true,
    },
  },
});
```

![pi722od.png](https://s11.ax1x.com/2023/12/23/pi722od.png)
![pi72cee.png](https://s11.ax1x.com/2023/12/23/pi72cee.png)
![pi72gdH.png](https://s11.ax1x.com/2023/12/23/pi72gdH.png)

## pops.loading

加载层

```js
pops.loading({
  parent: document.body,
  content: {
    text: "加载中...",
    icon: "loading",
  },
  mask: {
    enable: true,
    clickEvent: {
      toClose: true,
    },
  },
});
```

![pi72IQf.png](https://s11.ax1x.com/2023/12/23/pi72IQf.png)

## pops.panel

面板层

```js
pops.panel({
  title: {
    text: "面板层",
  },
  content: [
    {
      id: "whitesev-panel-config",
      title: "菜单配置",
      headerTitle: "菜单配置",
      isDefault: true,
      forms: [],
    },
  ],
  mask: {
    enable: true,
    clickEvent: {
      toClose: true,
    },
  },
});
```

![o7kyTc.png](https://vip.helloimg.com/i/2024/03/17/65f68c239ece4.png)

## pops.prompt

输入框

```js
pops.prompt({
  content: {
    text: "输入框的内容",
  },
  mask: {
    enable: true,
    clickEvent: {
      toClose: true,
    },
  },
});
```

![o7rGnT.png](https://vip.helloimg.com/i/2024/03/17/65f68c25cf459.png)

## pops.rightClickMenu

右键菜单层

```js
pops.rightClickMenu({
  target: document.documentElement,
  data: [
    {
      icon: pops.config.iconSVG.search,
      iconIsLoading: false,
      text: "右键菜单",
      callback(event) {
        console.log("点击：" + this.text, event);
      },
    },
  ],
});
```

![o7r5Uq.png](https://vip.helloimg.com/i/2024/03/17/65f68c281dcb0.png)

## pops.tooltip

提示框

```js
pops.tooltip({
  target: document.querySelector("#user-container"),
  content: "鼠标悬浮提示内容",
});
```

![o7rCFr.png](https://vip.helloimg.com/i/2024/03/17/65f68c299c729.png)

## pops.searchSuggestion

```js
let suggestion = pops.searchSuggestion({
  target: document.querySelector("input"),
});
suggestion.init();
```

## 详情参数请看代码
