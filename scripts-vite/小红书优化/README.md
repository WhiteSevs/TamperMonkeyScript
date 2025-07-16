# 小红书优化

> 注：并非所有功能都是默认开启，有些功能需要到油猴菜单中打开【设置】，手动开启功能。

一个对桌面端和移动端小红书进行优化的油猴脚本。

## 特性

- [x] 允许复制内容
- [x] 新标签页打开文章
- [x] 屏蔽广告、登录弹窗
- [x] 笔记宽屏
- [x] 劫持点击跳转
- [x] 劫持唤醒 App
- [x] 优化图片浏览
- [x] 等其它功能...

## 帮助

1. 在未登录账号的情况下只能最多加载第一页的评论，包括楼中楼的评论也是
2. 目前测试的链接如下：
   - `https://www.xiaohongshu.com/discovery/item/`
   - `https://www.xiaohongshu.com/user/profile/`
   - `https://www.xiaohongshu.com/`
   - `https://www.xiaohongshu.com/search_result/`
3. 视频笔记的评论不做优化处理

## 屏蔽规则

| 属性名        | 类型    | 描述              | 备注                              |
| ------------- | ------- | ----------------- | --------------------------------- |
| articleId     | String  | 笔记 id id        |                                   |
| display_title | String  | 笔记标题          |                                   |
| isLike        | Boolean | 是否已点赞该笔记  | 填入的值为`true`或`false`         |
| liked_count   | Number  | 笔记的点赞数量    | 比较方式`>`、`>=`、`=`、`<=`、`<` |
| nick_name     | String  | 笔记的作者名      |                                   |
| user_id       | String  | 笔记的作者 id     |                                   |
| isVideo       | Boolean | 是否是视频笔记 id | 填入的值为`true`或`false`         |
| videoDuration | Number  | 视频笔记时长      | 比较方式`>`、`>=`、`=`、`<=`、`<` |

**注意某些字符需要进行转义，如`_`、`+`等**

## 赞赏支持

<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/wx_zsm.png" alt="微信赞赏" width="250" height="250">
<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/zfb_skm.png" alt="支付宝赞赏" width="250" height="250">
