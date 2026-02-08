# 抖音优化

> 注：并非所有功能都是默认开启，有些功能需要到油猴菜单中打开【设置】，手动开启功能。

一个对抖音进行优化的油猴脚本。

## 特性

> 注：建议给抖音单独设置`电脑UA`，这样的`网页全屏`后且开启`手机模式`后的底部的工具栏某些按钮不会被隐藏

- [x] 伪装登录
- [x] 移除页面禁止缩放
- [x] 沉浸模式
- [x] 手机模式
- [x] 记住选择画质
- [x] 自定义快捷键
- [x] 自定义视频过滤器
- [x] 自定义视频区域背景颜色
- [x] 禁用快捷键
- [x] 禁止自动播放
- [x] 禁止点击视频区域进入全屏
- [x] 禁用双击点赞
- [x] 屏蔽元素，如顶部导航栏、左侧导航栏、搜索、悬浮提示
- [x] 自动隐藏视频标签信息
- [x] 修复移动端视频播放器进度条拖拽
- [x] 等其它功能...

## 安装

> 注：建议使用浏览器扩展执行本脚本。
>
> - 浏览器扩展的功能和 Api 更完整
> - 非浏览器扩展使用脚本会遇到更多使用上的问题（跨域问题、脚本冲突等）

- [x] 浏览器扩展
  - [x] Chrome/Edge [TamperMonkey](https://microsoftedge.microsoft.com/addons/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN)、[ViolentMonkey](https://microsoftedge.microsoft.com/addons/detail/%E6%9A%B4%E5%8A%9B%E7%8C%B4/eeagobfjdenkkddmbclomhiblgggliao?hl=zh-CN)、[ScriptCat](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB/liilgpjgabokdklappibcjfablkpcekh?hl=zh-CN)
  - [x] Firefox [TamperMonkey](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/)、[ViolentMonkey](https://addons.mozilla.org/zh-CN/firefox/addon/violentmonkey/)、[ScriptCat](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/)
  - [x] Safari [Stay](https://apps.apple.com/cn/app/stay-for-safari-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%B4%E4%BE%A3/id1591620171)

## 屏蔽规则

| 属性名                           | 类型     | 描述                                           | 备注                                 |
| -------------------------------- | -------- | ---------------------------------------------- | ------------------------------------ |
| awemeId                          | string   | 视频 id                                        |                                      |
| nickname                         | string   | 作者名称                                       | 发布的视频的作者                     |
| uid                              | string   | 作者的 uid                                     | 发布的视频的作者的 uid               |
| desc                             | string   | 视频文案                                       | 发布的视频的文案                     |
| textExtra                        | string   | 话题                                           | 发布的视频的话题，类似`#话题`这种    |
| videoTag                         | string   | 视频标签                                       |                                      |
| videoTagId                       | string   | 视频标签的 id                                  |                                      |
| suggestWord                      | string   | 建议关键词                                     |                                      |
| musicAlbum                       | string   | 视频的背景音乐专辑名                           |                                      |
| musicAuthor                      | string   | 视频的背景音乐作者                             |                                      |
| musicDuration                    | string   | 视频的背景音乐的播放时长                       |                                      |
| musicTitle                       | string   | 视频的背景音乐标题名称                         | 例如：`@xxx创作的原声`               |
| musicUrl                         | string   | 视频的背景音乐的播放地址                       |                                      |
| musicBackUrlList                 | string[] | 视频的背景音乐的播放地址（备用）               |                                      |
| authorAccountCertInfo            | string   | 作者的认证信息                                 | 例如：`剧情创作者、娱乐视频自媒体`   |
| authorCustomVerify               | string   |                                                |                                      |
| authorEnterpriseVerifyReason     | string   | 作者的企业认证信息                             | 例如：`腾讯视频动漫官方账号`         |
| riskInfoContent                  | string   | 风险提示内容                                   | 例如：`作者声明：虚构演绎，仅供娱乐` |
| seriesName                       | string   | 系列信息的名称                                 | 例如：`短剧 · 当xxxx`                |
| seriesContentTypes               | string   | 系列信息的内容类型                             | 例如：`搞笑`、`喜剧`                 |
| mixInfoName                      | string   | 混合信息的名称                                 | 例如：`当xxxx`                       |
| mixInfoDesc                      | string   | 混合信息的描述                                 |                                      |
| collectCount                     | number   | 收藏数量                                       | 比较方式`>`、`>=`、`=`、`<=`、`<`    |
| commentCount                     | number   | 评论数量                                       | 比较方式`>`、`>=`、`=`、`<=`、`<`    |
| diggCount                        | number   | 点赞数量                                       | 比较方式`>`、`>=`、`=`、`<=`、`<`    |
| shareCount                       | number   | 分享数量                                       | 比较方式`>`、`>=`、`=`、`<=`、`<`    |
| duration                         | number   | 视频时长(ms)                                   | 比较方式`>`、`>=`、`=`、`<=`、`<`    |
| liveStreamRoomId                 | string   | 直播间房间号                                   |                                      |
| liveStreamRoomTitle              | string   | 直播间标题                                     |                                      |
| liveStreamNickName               | string   | 直播间的主播昵称                               |                                      |
| liveStreamRoomUserCount          | number   | 直播间人数                                     | 比较方式`>`、`>=`、`=`、`<=`、`<`    |
| liveStreamRoomDynamicSpliceLabel | string   | 直播间标签？                                   |                                      |
| videoBitRateList                 | object[] | 视频码率列表                                   | 建议使用`自定义函数`进行比较处理     |
| pictureList                      | object[] | 图片列表                                       | 建议使用`自定义函数`进行比较处理     |
| productId                        | string   | 产品id（付费视频存在id，专属会员视频不存在id） |                                      |
| productTitle                     | string   | 产品标题                                       |                                      |
| isFollow                         | boolean  | 是否已关注该用户                               | 填入的值为`true`或`false`            |
| isLive                           | boolean  | 是否是直播                                     | 填入的值为`true`或`false`            |
| isAds                            | boolean  | 是否是广告                                     | 填入的值为`true`或`false`            |
| isSeriesInfo                     | boolean  | 是否是系列信息，例如：`短剧`                   | 填入的值为`true`或`false`            |
| isMixInfo                        | boolean  | 是否是混合信息，例如：`合集`、`短剧`           | 填入的值为`true`或`false`            |
| isPicture                        | boolean  | 是否是图文                                     | 填入的值为`true`或`false`            |
| isProduct                        | boolean  | 是否是产品                                     | 填入的值为`true`或`false`            |

**注意某些字符需要进行转义，如`_`、`+`等**

### 是否使用自定义函数处理

开启后`属性值`会变成`自定义函数`，当执行判断是否屏蔽该视频时，将由该函数来进行判断处理，要求该函数的返回值必须为`true`或`false`，即`boolean`类型

> 注意：开启该选项后会解除许多限制，例如可以通过网络请求发送Cookie等信息，如果是使用别人的规则，请自行判断该规则是否存在恶意行为。

自定义函数的返回值描述：

- `true`：屏蔽该视频
- `false`：不屏蔽该视频

1. 例如：屏蔽掉广告视频

```js
return data.transformAwemeInfo.isAds;
```

2. 例如：屏蔽掉不包含1080p清晰度的视频

```js
if (!data.transformAwemeInfo.videoBitRateList.length) return false;
const findIndex = data.transformAwemeInfo.videoBitRateList.findIndex((item) => item?.gearName?.includes?.("1080"));
return findIndex === -1;
```

3. 例如：通过网络请求Api来自动判断是否屏蔽视频

```js
const response = await this.httpx.post("https://xxx.xxx.xxx", {
  data: {
    transformAwemeInfo: JSON.stringify(data.transformAwemeInfo),
  },
});
if (!response.data.status) {
  this.log.error("请求失败");
  return false;
}
const data = this.utils.toJSON(response.data.data);
return Boolean(data.isFilter);
```

## 赞赏支持

<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/wx_zsm.png" alt="微信赞赏" width="250" height="250">
<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/zfb_skm.png" alt="支付宝赞赏" width="250" height="250">
