# 抖音优化

> 注：并非所有功能都是默认开启，有些功能需要到油猴菜单中打开【设置】，手动开启功能。
>

一个对抖音进行优化的油猴脚本。

## 特性

> 注：建议给抖音单独设置`电脑UA`，这样的`网页全屏`后且开启`手机模式`后的底部的工具栏某些按钮不会被隐藏
>

- [x] 伪装登录
- [x] 移除页面禁止缩放
- [x] 禁用快捷键
- [x] 自定义快捷键
- [x] 屏蔽元素
- [x] 沉浸模式
- [x] 手机模式
- [x] 禁用双击点赞
- [x] 自定义视频区域背景颜色
- [x] 自动隐藏视频标签信息
- [x] 自定义规则过滤推荐视频
- [x] 禁止点击视频区域进入全屏
- [x] 记住选择画质
- [x] 禁止自动播放
- [x] 等其它功能...

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

## 屏蔽规则

| 规则名       | 类型    | 描述         | 备注                                                        |
| ------------ | ------- | ------------ | ----------------------------------------------------------- |
| nickname     | String  | 作者         | 本视频的发布作者                                            |
| uid          | String  | 作者的uid    | 本视频的发布作者的uid                                       |
| desc         | String  | 视频文案     | 本视频的发布的文案                                          |
| textExtra    | String  | 话题         | 本视频的选择的话题，类似`#话题`这种                         |
| videoTag     | String  | 视频标签     |                                                             |
| collectCount | Number  | 收藏数量     | 本视频的收藏数量，比较方式`>`、`>=`、`=`、`<=`、`<`         |
| commentCount | Number  | 评论数量     | 本视频的评论数量，比较方式`>`、`>=`、`=`、`<=`、`<`         |
| diggCount    | Number  | 点赞数量     | 本视频的点赞数量，比较方式`>`、`>=`、`=`、`<=`、`<`         |
| shareCount   | Number  | 分享数量     | 本视频的分享数量，比较方式`>`、`>=`、`=`、`<=`、`<`         |
| duration     | Number  | 视频时长(ms) | 本视频的播放时长，单位ms，比较方式`>`、`>=`、`=`、`<=`、`<` |
| isLive       | Boolean | 是否是直播   | 本视频是否是直播，true为是直播，false为不是直播             |
| isAds        | Boolean | 是否是广告   | 本视频是否是广告，true为是广告，false为不是广告             |

***注意某些字符需要进行转义，如`*`，单独使用需要`\*`***

下面是示例屏蔽规则：

- 屏蔽用户名为`解说|电影|教程|搞笑`的用户

```text
nickname##解说|电影|教程|搞笑
```

- 屏蔽用户名为`解说|电影|教程|搞笑`的用户且该视频的点赞数量`<=`1000

```text
more##nickname##解说|电影|教程|搞笑##diggCount##<=1000
```

## 赞赏支持

<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/wx_zsm.png" alt="微信赞赏" width="250" height="250">
<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/zfb_skm.png" alt="支付宝赞赏" width="250" height="250">
