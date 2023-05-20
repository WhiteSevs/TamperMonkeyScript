## 🏆声明

本脚本没有`百度网盘`、`夸克`、`城通`的`直链解析`功能，主体是`识别链接`，其中`百度网盘`只有跳转第三方解析百度网盘链接，第三方网站需自行填写！此功能只为方便跳转而已！

**本脚本名称是 `网盘链接识别`，不是`解析`!!!**
**本脚本名称是 `网盘链接识别`，不是`解析`!!!**
**本脚本名称是 `网盘链接识别`，不是`解析`!!!**

## 🎁演示GIF
[![网盘链接识别演示.gif](https://www.helloimg.com/images/2023/03/16/o1qyfv.gif)](https://www.helloimg.com/images/2023/03/16/o1qyfv.gif)

## 🌈 使用方式

识别出链接时，页面侧边栏会出现一个悬浮按钮。

| 功能                        | 设备             |  操作                 |
| ------------                | :--:             | ------------------:  |
| 显示链接界面                 |  PC              | 点击                 |
|                             | 手机             |  点击                 |
| 显示设置界面                 |  PC              | 双击/右击后点击设置   |
|                             | 手机             |  双击                 |
| 显示历史匹配记录             |  PC/手机         | 设置中打开            |
| 访问链接                     |  PC             | 链接界面/历史匹配记录界面右击链接  |
 
## 🌍 介绍

- `手机，电脑均可使用`
- 识别到网盘链接会屏幕侧边栏出现悬浮按钮
- 可拖动悬浮按钮到任意位置，它会自动吸附到侧边栏，还可以设置透明度和大小，让它不影响浏览网页(手机)【提示：有默认最大值和最小值】
- 可点击网盘图标小按钮，可定位该链接在网页中出现的位置
- 可自行设置弹窗动画，内含 `15` 种动画
- 可自行设置页面文本延时检测时间(`0.6`秒~`5`秒,默认`0.8`秒)，建议如果是视频网站比如`bilibili`，加入黑名单，播放视频会卡
- 可点击间隔的字符(`innerText`)或间隔的字符(`innerHTML`)，恢复默认值
- 可设置打开`存储匹配记录`，开启后所有匹配到的网盘链接都可以在设置中`打开历史匹配记录`打开，可以查看到匹配的`网盘链接`、`网站`、`搜索过滤`等


## 📢 总设置

- 悬浮按钮大小
- 悬浮按钮透明度
- 匹配类型可选择普通文本`innerText`(默认)、超文本`innerHTML`和全部(包括`innerText`和`innerHTML`)
- 设置弹窗动画
- 读取剪贴板内容，识别网盘链接
- 设置 PC 端可拖拽窗口

## ![https://favicon.yandex.net/favicon/v2/https://pan.baidu.com/?size=32](https://favicon.yandex.net/favicon/v2/https://pan.baidu.com/?size=32) 百度网盘

- 功能：配置了解析网站可以直接跳转到已解析界面
- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://www.lanzoux.com/?size=32](https://favicon.yandex.net/favicon/v2/https://www.lanzoux.com/?size=32) 蓝奏云

- 功能：单/多文件直链解析
- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：直链调用 scheme，开启后需要在下方填 scheme 链接，默认为 IDM+调用下载，并且需要装特定的 app，直链不通过浏览器下载，而是通过 scheme 方式传递给安卓 app，由 scheme 链接决定它的作用，详情请看后面的帮助
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://www.ctwork.com.cn/?size=32](https://favicon.yandex.net/favicon/v2/https://www.ctwork.com.cn/?size=32) 天翼云

- 功能：单文件直链解析（需要登录）
- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：直链调用 scheme，开启后需要在下方填 scheme 链接，默认为 IDM+调用下载，并且需要装特定的 app，直链不通过浏览器下载，而是通过 scheme 方式传递给安卓 app，由 scheme 链接决定它的作用，详情请看后面的帮助
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://caiyun.feixin.10086.cn/?size=32](https://favicon.yandex.net/favicon/v2/https://caiyun.feixin.10086.cn/?size=32) 中国移动云盘(原:和彩云)

- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://www.aliyundrive.com/?size=32](https://favicon.yandex.net/favicon/v2/https://www.aliyundrive.com/?size=32) 阿里云

- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://www.wenshushu.cn/?size=32](https://favicon.yandex.net/favicon/v2/https://www.wenshushu.cn/?size=32) 文叔叔

- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：文叔叔单文件直链解析，多文件暂不支持（太多了，还不如打开自己选择下载的）
- 功能：直链调用 scheme，开启后需要在下方填 scheme 链接，默认为 IDM+调用下载，并且需要装特定的 app，直链不通过浏览器下载，而是通过 scheme 方式传递给安卓 app，由 scheme 链接决定它的作用，详情请看后面的帮助
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://cowtransfer.com/?size=32](https://favicon.yandex.net/favicon/v2/https://cowtransfer.com/?size=32) 奶牛快传

- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：直链调用 scheme，开启后需要在下方填 scheme 链接，默认为 IDM+调用下载，并且需要装特定的 app，直链不通过浏览器下载，而是通过 scheme 方式传递给安卓 app，由 scheme 链接决定它的作用，详情请看后面的帮助
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://www.123pan.com/?size=32](https://favicon.yandex.net/favicon/v2/https://www.123pan.com/?size=32) 123云盘

- 功能：设置里有启用蓝奏云直链解析，含多文件
- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：直链调用 scheme，开启后需要在下方填 scheme 链接，默认为 IDM+调用下载，并且需要装特定的 app，直链不通过浏览器下载，而是通过 scheme 方式传递给安卓 app，由 scheme 链接决定它的作用，详情请看后面的帮助
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://www.weiyun.com/?size=32](https://favicon.yandex.net/favicon/v2/https://www.weiyun.com/?size=32) 腾讯微云

- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/http://yun.xunlei.com/?size=32](https://favicon.yandex.net/favicon/v2/http://yun.xunlei.com/?size=32) 迅雷网盘

- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/http://www.115.com/?size=32](https://favicon.yandex.net/favicon/v2/http://www.115.com/?size=32) 115网盘

- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://www.400gb.com/?size=32](https://favicon.yandex.net/favicon/v2/https://www.400gb.com/?size=32) 城通网盘（部分 1）

- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://www.400gb.com/?size=32](https://favicon.yandex.net/favicon/v2/https://www.400gb.com/?size=32) 城通网盘（部分 2）

- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## ![https://favicon.yandex.net/favicon/v2/https://pan.quark.cn/?size=32](https://favicon.yandex.net/favicon/v2/https://pan.quark.cn/?size=32) 夸克网盘

- 功能：新标签页打开，如果有密码，复制到剪贴板
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerText`)，默认值`20`
- 功能：可设置匹配提取码与网盘链接直接间隔的字符(`innerHTML`)，默认值`300`

## 磁力链接(magnet)

- 功能：调用 scheme 打开，如果开启，在下方 scheme 转发设置 scheme 链接，具体请看后面的帮助

## 🔧 帮助

#### 1.百度云直链获取的网站配置，主要是使用了开源项目`https://github.com/yuantuo666/baiduwp-php`的网站

|       参数       |                               值                               |
| :--------------: | :------------------------------------------------------------: |
|     网址-Url     |       网站的 url，末尾带/，如：https://www.example.com/        |
|     参数-Key     |                       该项目一般是 surl                        |
|     密码-Key     |                        该项目一般是 pwd                        |
|     密钥-Key     |                     该项目一般是 Password                      |
|    密钥-Value    |                   如果站长启用的话，输入密钥                   |
| 网站存在密钥访问 | 如果站长启用的话，请开启，上面的密钥-Key 和密钥-Value 才会生效 |

[![ZPJRUv.png](https://www.helloimg.com/images/2022/05/26/ZPJRUv.png)](https://www.helloimg.com/image/ZPJRUv)

#### 2.scheme 调用方式

首先开启该设置后，需要在手机上装特定的 app
https://baiqi.lanzoul.com/b066di6gb
密码:bzyb

该链接格式为`jumpwsv://go?package={#package#}&activity={#activity#}&intentAction={#intentAction#}&intentData={#intentAction#}&intentExtra={#intentExtra#}`
其中`{#intentExtra#}`可以为空，若使用，则为`{"参数1":"值1","参数2":"值2"}`，`{#intentAction#}`会自动替换成 url
下面几个是示例 scheme 链接，可以直接复制粘贴到里面去

```
# 使用IDM+下载该链接
jumpwsv://go?package=idm.internet.download.manager.plus&activity=idm.internet.download.manager.UrlHandlerDownloader&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=

# 使用IDM+内部浏览器访问该链接
jumpwsv://go?package=idm.internet.download.manager.plus&activity=acr.browser.lightning.activity.BrowserLauncher&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=

# 使用IDM+内部浏览器隐身访问该链接
jumpwsv://go?package=idm.internet.download.manager.plus&activity=acr.browser.lightning.activity.IncognitoActivity&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=

# 使用ADM下载该链接
jumpwsv://go?package=com.dv.adm&activity=com.dv.get.AEditor&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=

# 使用ADM内部浏览器访问该链接
jumpwsv://go?package=com.dv.adm&activity=com.dv.get.WebBrow&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=

# 使用手机版迅雷下载该链接(可以是magnet格式)
jumpwsv://go?package=com.xunlei.downloadprovider
&activity=com.xunlei.downloadprovider.launch.dispatch.mocklink.LinkDLBtFileExplorerActivity&intentAction=android.intent.action.VIEW&intentData={#intentAction#}&intentExtra=


```
