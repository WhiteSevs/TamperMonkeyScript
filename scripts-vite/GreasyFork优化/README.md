# GreasyFork优化

> 注：并非所有功能都是默认开启，有些功能需要到油猴菜单中打开【设置】，手动开启功能。
>

一个对桌面端和移动端Greasyfork进行优化的油猴脚本。

## 特性

- [x] 在菜单按钮中增加录入登录账号/密码
- [x] 自动登录账号
- [x] 清空已录入的账号/密码
- [x] 添加【寻找引用】按钮，用于查询该脚本/库是否被其它的脚本调用
- [x] 添加【收藏】按钮，一般用于快捷收藏该脚本/库
- [x] 添加【今日检查】信息块
- [x] 在脚本页面中的`今日安装`下面添加`今日检查`
- [x] 美化页面（Markdown/Button/Radio/TextArea）
- [x] 添加复制代码按钮
- [x] 源代码同步【脚本列表】
- [x] 源代码同步【未上架的脚本】
- [x] 源代码同步【库】
- [x] 修复图片宽度显示问题
- [x] 优化图片浏览
- [x] 覆盖图床图片跳转
- [x] 添加【操作面板】按钮
- [x] 给Markdown添加【复制】按钮
- [x] 检测Greasyfork页面是否正常加载，如加载失败则自动刷新页面
- [x] 快捷键
- [x] 修复代码行号显示
- [x] 添加额外的标签按钮
- [x] 美化历史版本页面
- [x] 美化脚本列表
- [x] 过滤脚本
- [x] 论坛-过滤用户
- [x] 自定义已读颜色
- [x] 添加快捷操作按钮
- [x] 过滤重复的评论
- [x] 迁移【控制台】到顶部导航栏
- [x] 等其它功能...

## 脚本过滤规则

| 规则名            | 含义         | 备注               |
| :---------------- | :----------- | :----------------- |
| codeUrl           | 脚本代码链接 | 字符串，可正则匹配 |
| scriptId          | 脚本id       | 字符串，可正则匹配 |
| scriptName        | 脚本名       | 字符串，可正则匹配 |
| scriptDescription | 脚本描述     | 字符串，可正则匹配 |
| scriptAuthorId    | 脚本作者id   | 字符串，可正则匹配 |
| scriptAuthorName  | 脚本作者名   | 字符串，可正则匹配 |
| scriptRatingScore | 脚本评分     | 只支持`>`和`<`     |

- 屏蔽脚本名包含`网盘`、`网课`、`视频`、`网购`、`优惠券`

```text
scriptName##网盘|网课|视频|网购|优惠券
```

- 屏蔽脚本评分>`50`或者<`80`的脚本

```text
scriptRatingScore##>50
scriptRatingScore##<80
```

## 论坛过滤规则

| 规则名      | 含义           | 备注               |
| :---------- | :------------- | :----------------- |
| scriptId    | 脚本id         | 字符串，可正则匹配 |
| scriptName  | 脚本名         | 字符串，可正则匹配 |
| postUserId  | 发布的用户id   | 字符串，可正则匹配 |
| snippet     | 发布的内容片段 | 字符串，可正则匹配 |
| replyUserId | 回复的用户id   | 字符串，可正则匹配 |

## 安装

> 注：建议使用浏览器扩展执行本脚本。
>
> - 浏览器扩展的功能和Api更完整
> - 非浏览器扩展使用脚本会遇到更多使用上的问题（跨域问题、脚本冲突等）
>

- [x] 浏览器扩展
  - [x] Chrome/Edge [TamperMonkey](https://microsoftedge.microsoft.com/addons/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN)、[ViolentMonkey](https://microsoftedge.microsoft.com/addons/detail/%E6%9A%B4%E5%8A%9B%E7%8C%B4/eeagobfjdenkkddmbclomhiblgggliao?hl=zh-CN)、[ScriptCat](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB/liilgpjgabokdklappibcjfablkpcekh?hl=zh-CN)
  - [x] Firefox [TamperMonkey](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/)、[ViolentMonkey](https://addons.mozilla.org/zh-CN/firefox/addon/violentmonkey/)、[ScriptCat](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/)
  - [x] Safari [Stay](https://apps.apple.com/cn/app/stay-for-safari-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%B4%E4%BE%A3/id1591620171)

## 赞赏支持

<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/wx_zsm.png" alt="微信赞赏" width="250" height="250">
<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/zfb_skm.png" alt="支付宝赞赏" width="250" height="250">
