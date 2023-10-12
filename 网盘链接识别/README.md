# 🏆声明

本脚本没有`百度网盘`、`夸克`、`城通`的`直链解析`功能，主体是`识别链接`，其中`百度网盘`只有跳转第三方解析百度网盘链接，第三方网站需自行填写！此功能只为方便跳转而已！

**本脚本名称是 `网盘链接识别`，不是`解析`!!!**
**本脚本名称是 `网盘链接识别`，不是`解析`!!!**
**本脚本名称是 `网盘链接识别`，不是`解析`!!!**

## 🎁演示GIF

[![网盘链接识别演示.gif](https://www.helloimg.com/images/2023/03/16/o1qyfv.gif)](https://www.helloimg.com/images/2023/03/16/o1qyfv.gif)

## 🌈 使用方式

识别出链接时，页面侧边栏会出现一个悬浮按钮。

| 功能 | 设备 | 操作 |
| --- | :--: | ---  |
| 显示链接界面 | PC   | `点击` |
|             | 手机 | `点击` |
| 显示设置界面 | PC  | `双击/右击`后点击设置 |
|             | 手机 |  `双击` |
| 显示历史匹配记录 | PC | 油猴菜单中打开/悬浮按钮右击菜单中选择打开 |
|                 | 手机 | 油猴菜单中打开 |
| 显示访问码规则 | PC | 油猴菜单中打开/悬浮按钮右击菜单中选择打开 |
|               | 手机 | 油猴菜单中打开 |
| 显示自定义规则 | PC | 油猴菜单中打开/悬浮按钮右击菜单中选择打开 |
|               | 手机 | 油猴菜单中打开 |
| 显示主动识别文本 | PC | 油猴菜单中打开/悬浮按钮右击菜单中选择打开 |
|                 | 手机 | 油猴菜单中打开 |
| 复制链接 | PC | 链接界面/历史匹配记录界面`右击链接`  |
| | 手机 | 链接界面/历史匹配记录界面`长按链接` |
| 访问链接 | PC | 链接界面/历史匹配记录界面`右击链接`  |
| | 手机 | 链接界面/历史匹配记录界面`长按链接` |
| 修改访问码 | PC | 链接界面/历史匹配记录界面`右击链接`  |
| | 手机 | 链接界面/历史匹配记录界面`长按链接` |

## 🌍 介绍

- `手机，电脑均可使用`
- 识别到网盘链接会屏幕侧边栏出现悬浮按钮
- 可拖动悬浮按钮到任意位置，它会自动吸附到侧边栏，还可以设置透明度和大小，让它不影响浏览网页(手机)【提示：有默认最大值和最小值】
- 可点击网盘图标小按钮，可定位该链接在网页中出现的位置
- 可自行设置弹窗动画，内含 `15` 种动画
- 可自行设置页面文本延时检测时间(`0.6`秒~`5`秒,默认`0.8`秒)，建议如果是视频网站比如`bilibili`，加入黑名单，播放视频会卡
- 可点击间隔的字符(`innerText`)或间隔的字符(`innerHTML`)，恢复默认值
- 可设置打开`存储匹配记录`，开启后所有匹配到的网盘链接都可以在设置中`打开历史匹配记录`打开，可以查看到匹配的`网盘链接`、`网站`、`搜索过滤`等
- 可菜单中打开`访问码规则`，可自定义规则在`xxx`网站下的`xxx`网盘的访问码固定为`xxx`

## 📢 总设置

- 悬浮按钮大小
- 悬浮按钮透明度
- 匹配类型可选择普通文本`innerText`(默认)、超文本`innerHTML`和全部(包括`innerText`和`innerHTML`)
- 设置弹窗动画
- 读取剪贴板内容，识别网盘链接`（注意：只有在使用chromuim内核中且当前网址为https中才会生效，使用Gecko内核的浏览器不生效，Safari中未测试）`
- 设置 PC 端可拖拽窗口
- 设置`自动输入访问码`，可通过`右击`或`长按`出现的菜单选项`访问链接`，如果存在访问码，将自动填入访问码，目前存在部分网盘未实现自动填入(没找到这个网盘的存在链接的)
- 设置`获取重定向后的直链`，可对某些网盘直链解析链接进行重定向后的链接获取

| 网盘  | 新标签页打开 | 单文件解析| 多文件解析 | Scheme转发直链 | 提取码间隔前(Text/HTML) | 提取码间隔后(Text/HTML) | 其它功能|
|---|:---:|:---:|:---:|:---:|:---:|:---:| --- |
| [![https://favicon.yandex.net/favicon/v2/https://pan.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://pan.baidu.com/?size=16)](https://pan.baidu.com/) 百度网盘 | √ | | | | 20/300 | 10/15 | 自行配置第三方网站解析 |
| [![https://favicon.yandex.net/favicon/v2/https://www.lanzoux.com/?size=16](https://favicon.yandex.net/favicon/v2/https://www.lanzoux.com/?size=16)](https://www.lanzoux.com/) 蓝奏云 | √ | √ | √ | √ | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://cloud.189.cn/?size=16](https://favicon.yandex.net/favicon/v2/https://cloud.189.cn/?size=16)](https://cloud.189.cn/) 天翼云 | √ | √(需登录) | | √ | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://yun.139.com/?size=16](https://favicon.yandex.net/favicon/v2/https://yun.139.com/?size=16)](https://yun.139.com/) 中国移动云盘(原:和彩云) | √ | | |  | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://www.aliyundrive.com/?size=16](https://favicon.yandex.net/favicon/v2/https://www.aliyundrive.com/?size=16)](https://www.aliyundrive.com/) 阿里云 | √ | | |  | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://www.wenshushu.cn/?size=16](https://favicon.yandex.net/favicon/v2/https://www.wenshushu.cn/?size=16)](https://www.wenshushu.cn/) 文叔叔 | √ | √ | | √ | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://cowtransfer.com/?size=16](https://favicon.yandex.net/favicon/v2/https://cowtransfer.com/?size=16)](https://cowtransfer.com/) 奶牛快传 | √ | √ | | √ | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://www.123pan.com/?size=16](https://favicon.yandex.net/favicon/v2/https://www.123pan.com/?size=16)](https://www.123pan.com/) 123云盘 | √ | √(文件>100MB则需登录) | √(文件>100MB则需登录) | √ | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://www.weiyun.com/?size=16](https://favicon.yandex.net/favicon/v2/https://www.weiyun.com/?size=16)](https://www.weiyun.com/) 腾讯微云 | √ |  |  |  | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://pan.xunlei.com/?size=16](https://favicon.yandex.net/favicon/v2/https://pan.xunlei.com/?size=16)](https://pan.xunlei.com/) 迅雷网盘 | √ |  |  |  | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/http://www.115.com/?size=16](https://favicon.yandex.net/favicon/v2/http://www.115.com/?size=16)](http://www.115.com/) 115网盘 | √ |  |  |  | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://www.ctfile.com/?size=16](https://favicon.yandex.net/favicon/v2/https://www.ctfile.com/?size=16)](https://www.ctfile.com/) 城通网盘 | √ |  |  |  | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://pan.quark.cn/?size=16](https://favicon.yandex.net/favicon/v2/https://pan.quark.cn/?size=16)](https://pan.quark.cn/) 夸克网盘 | √ |  |  | | 20/300 | 10/15 |
| 🚖BT磁力 | √ |  |  | √ | | | 支持Scheme转发 |
| [![https://favicon.yandex.net/favicon/v2/https://www.jianguoyun.com/?size=16](https://favicon.yandex.net/favicon/v2/https://www.jianguoyun.com/?size=16)](https://www.jianguoyun.com/) 坚果云(需登录) | √ | √ |  | √ | 20/300 | 10/15 |
| [![https://favicon.yandex.net/favicon/v2/https://onedrive.live.com/?size=16](https://favicon.yandex.net/favicon/v2/https://onedrive.live.com/?size=16)](https://onedrive.live.com/) OneDrive | √ |  |  | √ | 20/300 | 10/15 |

## 🔧 帮助

### 1. 百度网盘配置

百度网盘链接解析的配置，主要是使用了开源项目[https://github.com/yuantuo666/baiduwp-php](https://github.com/yuantuo666/baiduwp-php)的网站

|       参数       |                               值                               |
| :--------------: | :------------------------------------------------------------: |
|     网址         |       网站的 url，末尾带/，如：<https://www.example.com/>        |
|     表单参数     |       POST请求的表单参数，例如：`surl={#shareCode#}&pwd={#accessCode#}&Password=xxxxx`，其中参数中存在`{#shareCode#}`或者`{#accessCode#}`时，会自动把它们转换成`提取码`和`分享码` |

[![ZPJRUv.png](https://www.helloimg.com/images/2022/05/26/ZPJRUv.png)](https://www.helloimg.com/image/ZPJRUv)

### 2. Scheme 调用方式

首先开启该设置后，需要在手机上装特定的 app
<https://baiqi.lanzoul.com/b066di6gb>
密码:bzyb

该链接格式为`jumpwsv://go?package={#package#}&activity={#activity#}&intentAction={#intentAction#}&intentData=网盘链接&intentExtra={#intentExtra#}`

| 参数 | 值 |
| :---: | :---: |
| {#package#} | App包名 |
| {#activity#} | App的Activity入口 |
| {#intentAction#} | Activity Action Intent常量，一般是android.intent.action.VIEW |
| {#intentExtra#} | 可以为空，若使用，则为`{"参数1":"值1","参数2":"值2"}`，注意`&`换成`{-and-}`，`#`换成`{-number-}` |

下面几个是示例 scheme 链接，可以直接复制粘贴到里面去

- 使用IDM+下载该链接

```text
jumpwsv://go?package=idm.internet.download.manager.plus&activity=idm.internet.download.manager.UrlHandlerDownloader&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=
```

- 使用IDM+内部浏览器访问该链接

```text
jumpwsv://go?package=idm.internet.download.manager.plus&activity=acr.browser.lightning.activity.BrowserLauncher&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=
```

- 使用IDM+内部浏览器隐身访问该链接

```text
jumpwsv://go?package=idm.internet.download.manager.plus&activity=acr.browser.lightning.activity.IncognitoActivity&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=
```

- 使用ADM下载该链接

```text
jumpwsv://go?package=com.dv.adm&activity=com.dv.get.AEditor&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=
```

- 使用ADM内部浏览器访问该链接

```text
jumpwsv://go?package=com.dv.adm&activity=com.dv.get.WebBrow&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=
```

- 使用手机版迅雷下载该链接(可以是magnet格式)

```text
jumpwsv://go?package=com.xunlei.downloadprovider
&activity=com.xunlei.downloadprovider.launch.dispatch.mocklink.LinkDLBtFileExplorerActivity&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=
```

### 3. 什么是提取码间隔前`Text/HTML`？

网盘链接分为两块，`分享码`和`提取码`，其中，由于网站的网盘链接的多样性，`分享码`和`提取码关键字`之间可能存在很长的干扰的字符串，比如：👇

```js
https://pan.baidu.com/s/xxxxxxxxxx
这个是干扰字符串
提取码：
本贴隐藏内容
abcd
```

那么这个`这个是干扰字符串`中文就是干扰的字符串，设置间隔长度即为设置`分享码`和`提取码关键字`之间的最大干扰字符串长度。
`Text`是对应`匹配类型`为`普通文本`
`HTML`是对应`匹配类型`为`超文本`

### 4. 什么是提取码间隔后`Text/HTML`？

当匹配提取码关键字时，如`密码`、`提取码`、`访问码`时，它们后面的字母就是访问码，但是有些时候存在干扰字符串，比如：👇

```js
https://pan.baidu.com/s/xxxxxxxxxx
提取码：
本贴隐藏内容
abcd
```

那么这个`本贴隐藏内容`中文就是干扰的字符串，设置间隔长度即为设置`提取码关键字`和`提取码`之间的最大干扰字符串长度。
`Text`是对应`匹配类型`为`普通文本`
`HTML`是对应`匹配类型`为`超文本`

### 5. 为什么在设置中开启`读取剪贴板`且剪贴板中存在网盘链接，但是并没有成功识别？

1. 可能是设置中需要识别的网盘自定义的`提取码间隔前/后(Text/HTML)`不够准确。
2. 该功能只能在`Chromeium内核`中生效，如Edge、Chrome、Kiwi中、Via、X浏览器，且当前网址必须是https安全网站，http不可以，使用`Gecko内核`的浏览器的话，API不会生效，如fireFox、可拓，Safari无法测试。

### 6. 如何配置自定义规则

```js
[
    { // 只有分享码的
        "key": "test1", // （必须）这是需要识别的网盘的唯一key，如果和脚本里的key重复的话会覆盖，如果用户自定义中存在相同的key，将会合并，即一个key匹配多种网盘链接
        "icon": "", // 用于显示的网盘图标，可以是data:image格式，或者是url图片，如果没有，会是空白图标
        "regexp": { // （必须）匹配规则
            "link_innerText": "www.test.com/file/\\?surl=([0-9a-zA-Z])+", // （必须）当设置中匹配类型为文本/全部，使用该规则
            "link_innerHTML": "www.test.com/file/\\?surl=([0-9a-zA-Z])+", // （必须）当设置中匹配类型为超文本/全部，使用该规则
            "shareCode": "www.test.com/file/\\?surl=([0-9a-zA-Z])+", // （必须）用于提取出shareCode
            "shareCodeNeedRemoveStr": "^www.test.com/file/\\?surl=", // （必须）用于删除提取出的shareCode前面的域名、路径字符串
            "acceesCodeNotMatch": "^(font|div|xxxx)", // 用于排除肯定不是提取码的关键字
            "uiLinkShow": "https://www.test.com/file/?surl={#shareCode#}", // （必须）显示出的链接
            "blank": "https://www.test.com/file/?surl={#shareCode#}", // （必须）用于超链接打开
            "copyUrl": "https://www.test.com/file/?surl={#shareCode#}", // （必须）用于复制到剪贴板

        },
        "setting": { // 设置
            "name": "wangpantest1", // 在设置中显示的网盘名
            "isBlank": true // 是否让识别到的网盘链接改为新标签页打开
        }
    },
    { // 存在提取码的
        "key": "test2", // （必须）这是需要识别的网盘的唯一key，如果和脚本里的key重复的话会覆盖，如果用户自定义中存在相同的key，将会合并，即一个key匹配多种网盘链接
        "icon": "https://www.test2.com/favicon.ico", // 用于显示的网盘图标，可以是data:image格式，或者是url图片，如果没有，会是空白图标
        "regexp": { // （必须）匹配规则
            "link_innerText": "www.test2.com/file/\\?surl=([0-9a-zA-Z])+[\\s\\S]{0,20}(密码|访问码|提取码)[\\s\\S]{0,10}[0-9a-zA-Z]{4}|)", // （必须）当设置中匹配类型为文本/全部，使用该规则
            "link_innerHTML": "www.test2.com/file/\\?surl=([0-9a-zA-Z])+[\\s\\S]{0,100}(密码|访问码|提取码)[\\s\\S]{0,15}[0-9a-zA-Z]{4}|)", // （必须）当设置中匹配类型为超文本/全部，使用该规则
            "shareCode": "www.test2.com/file/\\?surl=([0-9a-zA-Z])+", // （必须）用于提取出shareCode
            "shareCodeNeedRemoveStr": "^www.test2.com/file/\\?surl=", // （必须）用于删除提取出的shareCode前面的域名、路径字符串
            "checkAccessCode": "(密码|访问码|提取码)[\\s\\S]+", // 用于判断提取码是否存在
            "accessCode": "([0-9a-zA-Z]{4})", // 匹配提取码
            "acceesCodeNotMatch": "^(font|div|xxxx)", // 用于排除肯定不是提取码的关键字
            "uiLinkShow": "https://www.test2.com/file/?surl={#shareCode#} 提取码：{#accessCode#}", // （必须）显示出的链接
            "blank": "https://www.test2.com/file/?surl={#shareCode#}", // （必须）用于超链接打开，提取码会自动复制到剪贴板
            "copyUrl": "链接：https://www.test2.com/file/?surl={#shareCode#}\n密码：{#accessCode#}", // （必须）用于复制到剪贴板

        },
        "setting": { // 设置
            "name": "wangpantest2", // 在设置中显示的网盘名
            "isBlank": true // 是否让识别到的网盘链接改为新标签页打开
        }
    },
    ...
]

```
