# 全局变量

```js
GM_bridge
```

## 暴露GM Api

```js
unsafeWindow
GM_addElement
GM_addStyle
GM_download
GM_getResourceText
GM_getResourceURL
GM_info
GM_log
GM_notification
GM_registerMenuCommand
GM_unregisterMenuCommand
GM_setClipboard
GM_getTab
GM_saveTab
GM_getTabs
GM_setValue
GM_getValue
GM_deleteValue
GM_listValues
GM_addValueChangeListener
GM_removeValueChangeListener
GM_xmlhttpRequest
GM_cookie
```

## 暴露ChromXt Api

```js
ChromeXt
```

## 暴露ScriptCat Api

```js
CAT_userConfig
CAT_fileStorage
CAT_setProxy
CAT_clearProxy
CAT_click
```

## 暴露其它Api

```js
win: window
doc: document
globalThis: globalThis
self: self
topWindow: top.window
log: new utils.Log(GM_info)
httpx: new utils.Httpx(GM_xmlhttpRequest)
Utils: utils
utils: utils
DOMUtils: window.DOMUtils
```
