# 无法使用油猴函数的使用 如下代码，其中，via 的油猴跨域函数有问题，无法使用

```
// ==UserScript==
// @name         MT论坛-无油猴版
// @namespace    http://tampermonkey.net/
// @description  MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示uid、屏蔽用户、手机版小黑屋、编辑器优化等
// @version      0.1
// @author       WhiteSevs
// @match        *://bbs.binmt.cc/*
// @license      GPL-3.0-only
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    window.tampermonkeyByMT = `
    (function() {
        'use strict';
        const JSResource = ["https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js",
                            "https://greasyfork.org/scripts/449562-nzmsgbox/code/NZMsgBox.js",
                            "https://unpkg.com/any-touch/dist/any-touch.umd.min.js",
                            "https://greasyfork.org/scripts/449471-viewer/code/Viewer.js",
                            "https://greasyfork.org/scripts/449512-xtiper/code/Xtiper.js",
                            "https://greasyfork.org/scripts/452322-js-watermark/code/js-watermark.js",
                            "https://greasyfork.org/scripts/456607-gm-html2canvas/code/GM_html2canvas.js",
                            "https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js"];

        const url = "https://greasyfork.org/scripts/401359-mt%E8%AE%BA%E5%9D%9B/code/MT%E8%AE%BA%E5%9D%9B.user.js";

        function loadJS(url){
            return new Promise( (res) => {
                let tempNode = document.createElement("script");
                tempNode.setAttribute("src", url);
                document.head.append(tempNode);
                tempNode.onload = () => {
                    res();
                }
            })
        }
        async function asyncLoadAllScript() {
            for(var item of JSResource){
                console.log("引入js: "+item);
                await loadJS(item);
                console.log("完毕");
            }
            console.log("引入油猴主js: "+url);
            loadJS(url);
            console.log("完毕");
        }
        asyncLoadAllScript();
    })();`;
    let tempNode = document.createElement("script");
    tempNode.innerHTML = window.tampermonkeyByMT;
    document.head.append(tempNode);
})();
```

# 😡😡（重要）开启本脚本具体功能设置-本功能都是自己按需开启

[![pSPOwXF.jpg](https://s1.ax1x.com/2023/01/03/pSPOwXF.jpg)](https://imgse.com/i/pSPOwXF)

# 电脑版(需要开启显示在线状态在代码末尾有注释处，取消注释即可)

- 针对于布局在主页中添加了一个“最新发表”的标签
- 识别帖子和评论中的网页链接，可以直接点击访问，无需右键进行跳
- 探测评论中的用户的在线状态，并以表情的方式显示评论里的用户的头像上面（可在设置里开启/关闭）
- 增加了一个收藏按钮，鼠标滚轮往下时会自动跳出来
- 图片查看模式优化
- 帖子浏览优化（自动加载下一页的评论）（可在设置里开启/关闭）
- 导读浏览优化（可在设置里开启/关闭）

# 手机版

- 在回复区域的添加了一个点评功能
- 识别帖子和评论中的网页链接，可以直接点击访问
- 将评论区别人使用的代码改变别人评论颜色恢复为黑色
- 访问主页面自动签到功能
- 搜索区域的历史记录功能
- 屏蔽功能(屏蔽用户或者板块)
- 帖子内图片大小自适应
- 显示用户 uid，点击可复制
- 自动展开帖子
- 自动加载所有评论
- 纠正文章字体效果
- 小黑屋（点击标题可选择显示小黑屋列表的数量）
- 签到页面的今日最先
- 签到页面的今日之星
- 帖外预览图片
- 搜索框清空按钮修复
- 个人空间正确进入
- 康哥图床-帖子内|聊天内(20MB) 图床地址:[https://img.kggzs.cn/](https://img.kggzs.cn/)
- Hello 图床-帖子内|聊天内(20MB) 图床地址:[https://www.helloimg.com/](https://www.helloimg.com/)
- Z4A 图床-帖子内|聊天内(50MB) 图床地址:[https://www.z4a.net/](https://www.z4a.net/)
- MT 图床-帖子内(6MB) 图床地址:[https://img.binmt.cc/](https://img.binmt.cc/)
- 付费主题白嫖提醒
- 页面小窗浏览帖子
- 蓝奏云快捷功能
- 代码块上方新增复制按钮
- 编辑器优化-快捷
- 编辑器优化-完整
- 上传动态头像
- 空间-帖子-显示具体回复内容
- 导读显示最新发布的帖子
- 可对帖子进行快照(html|image)
- 图片查看模式优化
- 贴内图片查看优化

## 屏蔽用户/板块

[![ZF407K.png](https://www.helloimg.com/images/2022/05/24/ZF407K.png)](https://www.helloimg.com/image/ZF407K)

## 自动加载评论

[![Co0DAX.gif](https://www.helloimg.com/images/2021/06/25/Co0DAX.gif)](https://www.helloimg.com/image/Co0DAX)

## 手机版小黑屋

[![ZNu5At.gif](https://www.helloimg.com/images/2022/08/14/ZNu5At.gif)]

## 付费主题白嫖列表

[![ZNuB0u.gif](https://www.helloimg.com/images/2022/08/14/ZNuB0u.gif)](https://www.helloimg.com/image/ZNuB0u)

## 帖外图片预览

[![ZNjyGQ.gif](https://www.helloimg.com/images/2022/08/14/ZNjyGQ.gif)](https://www.helloimg.com/image/ZNjyGQ)

## 小窗口浏览

[![ZNjjIC.gif](https://www.helloimg.com/images/2022/08/14/ZNjjIC.gif)](https://www.helloimg.com/image/ZNjjIC)

## 快捷 UBB 代码插入

[![ZajgN9.png](https://www.helloimg.com/images/2022/05/27/ZajgN9.png)](https://www.helloimg.com/image/ZajgN9)

## 发帖、编辑、回复预览

[![20220824_171420.gif](http://cdn.img.kggzs.cn/uploads/img/2022/46/20226306394c5bb50.gif)](http://cdn.img.kggzs.cn/uploads/img/2022/46/20226306394c5bb50.gif)
