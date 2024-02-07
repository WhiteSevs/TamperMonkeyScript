# 🎈 简介

测试环境：`Tampermonkey BETA`版本`5.0.6192`
脚本使用方式，[点击前往查看](https://greasyfork.org/#home-step-1)

注：

1. `Via浏览器`和`X浏览器`不支持`iframe`注入，某些网站功能会缺失。
2. `Via浏览器`的网络请求不会携带cookie，某些需要登录账号的功能不会生效。

对以下👇网站进行了【优化】

|     网站     | 菜单按钮 |  其它功能 |
| ------------ |   :--:  |  :------------------  |
|     [![https://favicon.yandex.net/favicon/v2/https://m.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://m.baidu.com/?size=16)](https://m.baidu.com/)百度搜索 | 自动展开下一页、简单UA-自动点击下一页、显示已重定向图标、控制台输出日志、同步下一页地址、【禁止】自动播放视频、【屏蔽】大家还在搜、【重构】大家还在搜、精简百度搜索主页、劫持OpenBox、劫持Scheme、劫持Copy、劫持_onClick、劫持-setTimeout |   去除广告、自动处理链接为真实链接、拦截输入框的点击建议弹出的弹窗 |
|     [![https://favicon.yandex.net/favicon/v2/https://baijiahao.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://baijiahao.baidu.com/?size=16)](https://baijiahao.baidu.com/)百家号   | 【屏蔽】推荐文章、【屏蔽】用户评论、【屏蔽】底部悬浮工具栏、劫持唤醒、劫持iframe、劫持OpenBox | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://tieba.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://tieba.baidu.com/?size=16)](https://tieba.baidu.com/)百度贴吧 | 回退关闭楼中楼回复、新增贴内搜索功能（当在主页时是搜索吧、在帖子或吧内时是搜索帖子）、优化查看评论、优化图片预览、新增贴内滚动到顶部按钮、强制查看被屏蔽的帖子、劫持唤醒、【beta】请求携带Cookie、过滤重复帖子、记住当前选择的看帖排序、签到所有关注的吧、解除签到限制 | 去除广告、伪装已调用唤醒百度贴吧App |
|     [![https://favicon.yandex.net/favicon/v2/https://wenku.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://wenku.baidu.com/?size=16)](https://wenku.baidu.com/)百度文库 | 【屏蔽】会员精选、【屏蔽】APP精选、【屏蔽】相关文档、【屏蔽】底部工具栏、【屏蔽】下一篇按钮 | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://jingyan.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://jingyan.baidu.com/?size=16)](https://jingyan.baidu.com/)百度经验 |             | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://baike.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://baike.baidu.com/?size=16)](https://baike.baidu.com/)百度百科 | 同步下一页地址 | 去除广告、自动加载更多下一页内容、修复图片显示错位问题 |
|     [![https://favicon.yandex.net/favicon/v2/https://baike.baidu.com/tashuo/home/?size=16](https://favicon.yandex.net/favicon/v2/https://baike.baidu.com/tashuo/home/?size=16)](https://baike.baidu.com/tashuo/home/)百度百科-他说 |             | 去除底部广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://zhidao.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://zhidao.baidu.com/?size=16)](https://zhidao.baidu.com/)百度知道 | 【屏蔽】推荐更多精彩内容、【屏蔽】相关问题、【屏蔽】其他回答、自动点击-展开更多回答 | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://fanyi.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://fanyi.baidu.com/?size=16)](https://fanyi.baidu.com/)百度翻译 | 【屏蔽】底部推荐、【屏蔽】底部其它、自动聚焦输入框 | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://fanyi-app.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://fanyi-app.baidu.com/?size=16)](https://fanyi-app.baidu.com/)百度翻译-APP | 【屏蔽】专栏信息、【屏蔽】为你推荐、【屏蔽】我要跟读 | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://image.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://image.baidu.com/?size=16)](https://image.baidu.com/)百度图片  |             | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://map.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://map.baidu.com/?size=16)](https://map.baidu.com/)百度地图 |    劫持唤醒         | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://mbd.baidu.com/ma/tips?appKey=eot71qyZ0ino8W34o3XG6aQ9YdAn4R1m/?size=16](https://favicon.yandex.net/favicon/v2/https://mbd.baidu.com/ma/tips?appKey=eot71qyZ0ino8W34o3XG6aQ9YdAn4R1m/?size=16)](https://mbd.baidu.com/ma/tips?appKey=eot71qyZ0ino8W34o3XG6aQ9YdAn4R1m/)百度知道(mbd) | 【屏蔽】精彩评论、【屏蔽】精彩推荐、【屏蔽】底部工具栏、劫持唤醒、劫持BoxJSBefore、劫持iframe | 去除广告、自动展开全文 |
|     [![https://favicon.yandex.net/favicon/v2/https://xue.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://xue.baidu.com/?size=16)](https://xue.baidu.com/)百度知了好学 |             | 去除广告 |
|  [![https://favicon.yandex.net/favicon/v2/https://aiqicha.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://aiqicha.baidu.com/?size=16)](https://aiqicha.baidu.com/)百度-爱企查 | 【屏蔽】轮播图、【屏蔽】行业热点新闻 | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://pos.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://pos.baidu.com/?size=16)](https://pos.baidu.com/)百度网盟推广 |             | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://haokan.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://haokan.baidu.com/?size=16)](https://haokan.baidu.com/)百度好看视频 | 【屏蔽】猜你喜欢、【屏蔽】今日热播榜单、【屏蔽】右侧工具栏、播放视频自动进入全屏、劫持唤醒 | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://shitu.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://shitu.baidu.com/?size=16)](https://shitu.baidu.com/)百度识图 |             | 去除广告、重构页面的上传图片搜索功能 |
|     [![https://favicon.yandex.net/favicon/v2/https://pan.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://pan.baidu.com/?size=16)](https://pan.baidu.com/)百度网盘 |             | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://yiyan.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://yiyan.baidu.com/?size=16)](https://yiyan.baidu.com/)文心一言 | 【屏蔽】水印 |  |
|     [![https://favicon.yandex.net/favicon/v2/https://chat.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://chat.baidu.com/?size=16)](https://chat.baidu.com/)搜索AI伙伴 | 【屏蔽】水印 |  |
|     [![https://favicon.yandex.net/favicon/v2/https://uf9kyh.smartapps.cn/?size=16](https://favicon.yandex.net/favicon/v2/https://uf9kyh.smartapps.cn/?size=16)](https://uf9kyh.smartapps.cn/)百度小程序-百度教育| 【屏蔽】底部下拉菜单 | |
|     [![https://favicon.yandex.net/favicon/v2/https://easylearn.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://easylearn.baidu.com/?size=16)](https://easylearn.baidu.com/)百度教育| 【屏蔽】本题试卷、【屏蔽】本卷好题、【屏蔽】相关试卷、【屏蔽】视频讲解、【屏蔽】学霸笔记、【屏蔽】底部工具栏 | 去除广告、允许使用顶部输入框进行搜索、自动展开答案 |
|     [![https://favicon.yandex.net/favicon/v2/https://aistudy.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://aistudy.baidu.com/?size=16)](https://aistudy.baidu.com/site/wjzsorv8/ee4a82b3-2cf6-4d04-8962-c21a75040e9e)知了好学| 【屏蔽】底部工具栏、自动展开全文 | 去除广告 |
|     [![https://favicon.yandex.net/favicon/v2/https://aistudy.baidu.com/?size=16](https://favicon.yandex.net/favicon/v2/https://aistudy.baidu.com/?size=16)](https://aistudy.baidu.com/site/wjzsorv8/ee4a82b3-2cf6-4d04-8962-c21a75040e9e)知了好学-百度基木鱼 | 【屏蔽】底部免费在线咨询、【屏蔽】右侧悬浮按钮-查看更多、【屏蔽】大家还在看、自动展开全文 | 去除广告 |

对`百度搜索`、`百度贴吧`、`百度识图`添加了新功能

## 🎃 百度搜索

### 1.点击`TamperMonkey`->`【百度系】优化`->开启`自动展开下一页`功能，即可在搜索时滑动到最底部自动加载下一页

![7E012FBE-61B3-40a5-BB49-696FCD9C3031.png](https://www.z4a.net/images/2023/08/23/7E012FBE-61B3-40a5-BB49-696FCD9C3031.png)

![https://picshack.net/ib/a3U0vmFVrj.gif](https://picshack.net/ib/a3U0vmFVrj.gif)

### 2.点击`TamperMonkey`->`【百度系】优化`->开启`显示已重定向图标`功能，即可在搜索结果中左边显示已进行过处理，不会出现需要下载百度 APP 的提示的图标且免去了百度对该链接进行中转，如果没有出现`重`图标，可能该结果就是该网站地址，不需要处理

![image7467a28d084664d7.png](https://www.z4a.net/images/2022/11/16/image7467a28d084664d7.png)

### 3.自动标识`CSDN资源下载`

![image8c9419b80e31e98e.png](https://www.z4a.net/images/2022/11/16/image8c9419b80e31e98e.png)

## 🎃 百度贴吧

### 1.功能演示，包括：自动加载下一页、正序/倒序浏览评论、只看楼主、搜索帖子、搜索贴吧功能

![https://picshack.net/ib/FUFzuk8nt5.gif](https://picshack.net/ib/FUFzuk8nt5.gif)

### 2. 点击楼中楼回复区域可查看更多回复

![https://picshack.net/ib/vlaPTLvwGs.gif](https://picshack.net/ib/vlaPTLvwGs.gif)

## 🎃 百度识图

1. 修复[百度识图](https://graph.baidu.com/view/home)的`识图一下`点击会跳转到让下载百度APP的问题，可直接上传图片，原理：调用PC端的上传接口。

### Q&A

#### 一. 如何自定义百度搜索拦截规则？

1. `match-href`##`需要匹配的字符串`
    作用：匹配当前结果项的真实链接（可正则，不需要转义），如果匹配成功，删除该项
    示例：匹配链接`expert.baidu.com`

    ```rule
    match-href##expert.baidu.com
    ```

2. `match-attr`##`属性名`##`需要匹配的字符串`
    作用：匹配当前结果项的属性（可正则，不需要转义），如果匹配成功，删除该项
    示例：匹配属性`srcid`为`sigma`或者`vid_fourfold`

    ```rule
    match-attr##srcid##(sigma|vid_fourfold)
    ```

3. `contains-child`##`选择器`
    作用：匹配当前结果项的子元素，如果包含该子元素，删除该项
    示例：匹配子元素`#abcdefg`

    ```rule
    contains-child###abcdefg
    ```

4. `remove-child`##`选择器`

    作用：将当前结果项的子元素进行删除
    示例：删除子元素`[class*='-video-player']`，用于禁止视频自动播放

    ```rule
    remove-child##[class*='-video-player']
    ```

5. `规则1`&&&&`规则2`...

    示例：删除推荐的项，其中真实链接包含`recommend_list.baidu.com`且属性`tpl`包含`recommend_list`

    ```rule
    match-href##recommend_list.baidu.com&&&&match-attr##tpl##recommend_list
    ```

## 👓 末尾

如果有不能屏蔽的东西，请反馈链接
