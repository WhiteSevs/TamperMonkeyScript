# 【移动端】百度系优化

> 注：并非所有功能都是默认开启，有些功能需要到油猴菜单中打开【设置】，手动开启功能。

一个对百度系网站进行优化的油猴脚本。

## 特性

- [x] 百度搜索
  - [x] 优化搜索结果
  - [x] 重定向链接
  - [x] 新标签页打开
  - [x] 禁止自动播放视频
  - [x] 自动加载下一页
  - [x] 全局悬浮快捷搜索按钮
  - [x] 阻止自动唤醒App
  - [x] 自定义搜索结果拦截规则
  - [x] 等...
- [x] 百度贴吧
  - [x] 新标签页打开
  - [x] 搜索帖子/吧
  - [x] 签到所有关注的吧
  - [x] 签到全部吧
  - [x] 记住看帖排序
  - [x] 查看帖子更多评论内容
  - [x] 弹窗手势优化
  - [x] 图片优化预览
  - [x] 阻止自动唤醒App
  - [x] 自定义评论过滤规则
  - [x] 等...
- [x] 百家号
  - [x] 阻止自动唤醒App
  - [x] 屏蔽元素
  - [x] 等...
- [x] 等其它百度系网站

## 安装

> 注：建议使用浏览器扩展执行本脚本。
>
> - 浏览器扩展的功能和Api更完整
> - 非浏览器扩展使用脚本会遇到更多使用上的问题（跨域问题、脚本冲突等）

- [x] 浏览器扩展
  - [x] Chrome/Edge [TamperMonkey](https://microsoftedge.microsoft.com/addons/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN)、[ViolentMonkey](https://microsoftedge.microsoft.com/addons/detail/%E6%9A%B4%E5%8A%9B%E7%8C%B4/eeagobfjdenkkddmbclomhiblgggliao?hl=zh-CN)、[ScriptCat](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB/liilgpjgabokdklappibcjfablkpcekh?hl=zh-CN)
  - [x] Firefox [TamperMonkey](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/)、[ViolentMonkey](https://addons.mozilla.org/zh-CN/firefox/addon/violentmonkey/)、[ScriptCat](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/)
  - [x] Safari [Stay](https://apps.apple.com/cn/app/stay-for-safari-%E6%B5%8F%E8%A7%88%E5%99%A8%E4%BC%B4%E4%BE%A3/id1591620171)

## Q&A

### 一. 如何自定义百度搜索拦截规则？

注：规则只会作用在每一个`.c-result.result`元素上

1. `match-href`##`需要匹配的字符串`
   作用：匹配当前结果项的真实链接（可正则，不需要转义），如果匹配成功，删除该项
   示例：匹配链接`expert.baidu.com`

   ```js
   match-href##expert.baidu.com
   ```

2. `match-attr`##`属性名`##`需要匹配的字符串`
   作用：匹配当前结果项的属性（可正则，不需要转义），如果匹配成功，删除该项
   示例：匹配属性`srcid`为`sigma`或者`vid_fourfold`

   ```js
   match-attr##srcid##(sigma|vid_fourfold)
   ```

3. `contains-child`##`选择器`
   作用：匹配当前结果项的子元素，如果包含该子元素，删除该项
   示例：匹配子元素`#abcdefg`

   ```js
   contains-child###abcdefg
   ```

4. `remove-child`##`选择器`

   作用：将当前结果项的子元素进行删除
   示例：删除子元素`[class*='-video-player']`，用于禁止视频自动播放

   ```js
   remove-child##[class*='-video-player']
   ```

5. `规则1`&&&&`规则2`...

   示例：删除推荐的项，其中真实链接包含`recommend_list.baidu.com`且属性`tpl`包含`recommend_list`

   ```js
   match-href##recommend_list.baidu.com&&&&match-attr##tpl##recommend_list
   ```

6. `添加注释`

   示例：注释：屏蔽xxx

   ```js
   // xxxxx
   ```

## 赞赏支持

<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/wx_zsm.png" alt="微信赞赏" width="250" height="250">
<img src="https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript/asset/img/zfb_skm.png" alt="支付宝赞赏" width="250" height="250">
