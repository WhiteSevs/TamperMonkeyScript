## 数据分页导航

* 基本使用

```javascript
let dataPaging = new DataPaging({
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9], // 数组，里面具体什么值无所谓，需要的是它的长度用来分页
    pageCount: 5, // 每一页显示的数据条数，如上面的数组共有9个，每页显示5个，会有2页
    pageStep: 3, // 显示出来的按钮数量
    currentPage: 1, // 当前处于的第几个页码
    pageChangeCallBack:function(page){ // 当页码切换时发生的回调
        console.log(page);
    },
    /* 上一页按钮 */
    prevBtn: {
      enable: true /* 是否启用 */,
      callBack: function () {} /* 点击事件回调 */,
    },
    /* 下一页按钮 */
    nextBtn: {
      enable: true /* 是否启用 */,
      callBack: function () {},
    },
    /* 第一页按钮 */
    firstBtn: {
      enable: true /* 是否启用 */,
      callBack: function () {},
    },
    /* 最后一页按钮 */
    lastBtn: {
      enable: true /* 是否启用 */,
      callBack: function () {},
    },
});
```

* 将分页视图追加到某个元素里

```javascript
dataPaging.append(element:HTMLElement);
```

* 动态修改上面的`init`的配置，如果当前数据长度改变的话可以使用它

```javascript
dataPaging.changeConfig(details:Object);
```
