const GM_download = function (paramDetails = {}, name = "下载的文件名") {
  /* android是java注册在WebView的本地函数，这个是自己命名的 */
  let nativeObj = android;
  let details = {
    /**
     * 要下载的文件的 URL。这必须是有效的 URL，并且必须指向用户可访问的文件
     * @type {string}
     */
    url: "",
    /**
     * 用于下载文件的名称。 这应包括文件的扩展名，例如.txt或.pdf。 出于安全原因，文件扩展名需要在Tampermonkey的选项页面上列入白名单
     * @type {string}
     */
    name: "",
    /**
     * 发送请求的请求头，可自定义
     * @type {object}
     */
    headers: {},
    /**
     *  一个布尔值，指示是使用用户的默认下载位置，还是提示用户选择其他位置。 此选项仅适用于浏览器 API 模式
     * @type {boolean}
     */
    saveAS: false,
    /**
     * 一个字符串，用于控制具有此名称的文件已存在时发生的情况。此选项仅适用于浏览器 API 模式。
     * @type {string}
     * + uniquify 浏览器将修改文件名以使其唯一。
     * + overwrite 浏览器将用新下载的文件覆盖旧文件。
     * + prompt 浏览器将提示用户，要求他们选择是单化还是覆盖。
     */
    conflictAction: "overwrite",
    /**
     * 下载成功完成时要调用的函数。
     * @type {Function}
     */
    onload: () => {},
    /**
     * 下载失败或取消时要调用的函数。
     * @type {Function}
     */
    onerror: () => {},
    /**
     * 如果此下载取得了一些进展，则执行的回调。
     * @type {Function}
     */
    onprogress: () => {},
    /**
     * 此下载因超时而失败时要执行的回调。
     * @type {Function}
     */
    ontimeout: () => {},
  };
  if (typeof paramDetails === "string") {
    /* 如果该参数是字符串，那么可能是url */
    details.url = paramDetails;
    details.name = name;
  } else if (typeof paramDetails === "object") {
    /* 合并默认的配置 */
    Object.assign(details, paramDetails);
  }
  /* 当前请求的id字符串，用于与Java通信的回调使用，这里暂用xxxxxx代替 */
  let requestId = "xxxxxx";
  /* 这时候要在window下挂载一个用于存储回调的对象 */
  if (!("tamperMonkey_GM_download_callBack" in top.window)) {
    /* 这个对象应该在开始时就已经注册了，这里只是用于测试单例的时候判断一下 */
    top.window["tamperMonkey_GM_download_callBack"] = {};
  }
  /**
   * 处理从Java调用回调后的扫尾，也就是删除保存在top.window["tamperMonkey_GM_download_callBack"][requestId]下的函数
   * 它们不会再触发了
   */
  let deleteWindowGMDownloadCallBack = function () {
    delete top.window["tamperMonkey_GM_download_callBack"][requestId];
  };
  top.window["tamperMonkey_GM_download_callBack"][requestId] = {
    onload: () => {
      details.onload();
      deleteWindowGMDownloadCallBack();
    },
    onerror: () => {
      details.onerror();
      deleteWindowGMDownloadCallBack();
    },
    onprogress: () => {
      details.onprogress();
    },
    ontimeout: () => {
      details.ontimeout();
      deleteWindowGMDownloadCallBack();
    },
  };
  /* nativeObj.GM_download，这个GM_download是自己在Java里定义的，可修改，传递的参数是字符串 */
  nativeObj.GM_download(JSON.stringify(details));
  return {
    abort: () => {
      /* 用于取消请求，如果调用这个，则会向Java发送一个请求，携带刚刚的requestId，Java如果用的OkHttp，则中断该请求
           并且调用全局函数的回调函数top.window.tamperMonkey_GM_download_callBack[requestId].onerror()
         */
      /* nativeObj.abortGMDownload，这个abortGMDownload是自己在Java里定义的，可修改，requestId是字符串 */
      nativeObj.abortGMDownload(requestId);
    },
  };
};
