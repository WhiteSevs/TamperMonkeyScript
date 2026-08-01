
# 介绍

可自定义PageSpy的对象名，用于适配一些网页上重复的对象名

## 🎈注意

接入调试端的注意隐私，默认的`test.jikejishu.com`是测试使用，别人也可以看得到你的调试信息，如果可以请自己部署一个调试服务器

官方文档：[https://github.com/HuolalaTech/page-spy-web/blob/main/README_ZH.md](https://github.com/HuolalaTech/page-spy-web/blob/main/README_ZH.md)

1. docker部署

    ```js
    docker run -d --restart=always -p 6752:6752 --name="pageSpy" ghcr.io/huolalatech/page-spy-web:release
    ```

2. Node部署

    ```js
    yarn global add @huolala-tech/page-spy-api

    # 如果你使用 npm

    npm install -g @huolala-tech/page-spy-api
    ```

## 信息

- 最新版本：[![npm version](https://img.shields.io/npm/v/@huolala-tech/page-spy-browser?label=page-spy-browser)](https://www.npmjs.com/package/@huolala-tech/page-spy-browser)
- 当前版本：`2.2.11`
- 项目主页
[https://github.com/HuolalaTech/page-spy-web](https://github.com/HuolalaTech/page-spy-web)
- SDK地址
[https://github.com/HuolalaTech/page-spy/tree/main/packages/page-spy-browser](https://github.com/HuolalaTech/page-spy/tree/main/packages/page-spy-browser)
- 项目最新地址
[https://cdn.jsdelivr.net/npm/@huolala-tech/page-spy-browser](https://cdn.jsdelivr.net/npm/@huolala-tech/page-spy-browser)<br>[https://fastly.jsdelivr.net/npm/@huolala-tech/page-spy-browser](https://fastly.jsdelivr.net/npm/@huolala-tech/page-spy-browser)<br>[https://testingcf.jsdelivr.net/npm/@huolala-tech/page-spy-browser](https://testingcf.jsdelivr.net/npm/@huolala-tech/page-spy-browser)
