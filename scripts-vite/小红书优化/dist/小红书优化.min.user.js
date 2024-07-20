// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.20
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/449471/1413235/Viewer.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.9.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.4.0/dist/index.umd.js
// @connect      edith.xiaohongshu.com
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (g, W, ae, Y) {
  'use strict';

  var v=typeof GM_addStyle<"u"?GM_addStyle:void 0,ee=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,T=typeof GM_getValue<"u"?GM_getValue:void 0,U=typeof GM_info<"u"?GM_info:void 0,ce=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,j=typeof GM_setValue<"u"?GM_setValue:void 0,ue=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,de=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,x=typeof unsafeWindow<"u"?unsafeWindow:void 0,te=window;const me="小红书优化",m=W.noConflict(),h=ae.noConflict(),Q=Y,pe=te.Viewer||x.Viewer,r=new m.Log(U,x.console||te.console);var J;const z=((J=U==null?void 0:U.script)==null?void 0:J.name)||me,oe=!1;r.config({debug:oe,logMaxCount:1e3,autoClearConsole:!0,tag:!0});g.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return c.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return c.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return c.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=W.getMaxZIndex(),t=Y.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return W.getMaxValue(e,t)+100}}}));const ne=new m.GM_Menu({GM_getValue:T,GM_setValue:j,GM_registerMenuCommand:ce,GM_unregisterMenuCommand:ue}),$=new m.Httpx(de);$.interceptors.response.use(void 0,e=>(r.error(["拦截器-请求错误",e]),e.type==="onabort"?g.warning("请求取消"):e.type==="onerror"?g.error("请求异常"):e.type==="ontimeout"?g.error("请求超时"):g.error("其它错误"),e));$.config({logDetails:oe});x.Object.defineProperty,x.Function.prototype.apply,x.Function.prototype.call,x.Element.prototype.appendChild,x.setTimeout;const y="GM_Panel",D="data-key",L="data-default-value",f=function(e,t,o,s,i){let n={text:e,type:"switch",description:i,attributes:{},getValue(){return !!c.getValue(t,o)},callback(l,a){r.success(`${a?"开启":"关闭"} ${e}`),c.setValue(t,!!a);},afterAddToUListCallBack:void 0};return n.attributes&&(n.attributes[D]=t,n.attributes[L]=!!o),n},fe={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"",type:"forms",forms:[{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("劫持点击事件","little-red-book-repariClick",!0,void 0,"可阻止点击跳转至下载页面")]}]}]}]},he={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"视频笔记",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("优化视频描述","little-red-book-optimizeVideoNoteDesc",!0,void 0,"让视频描述可以滚动显示更多"),f("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",!0,void 0,"建议开启"),f("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",!0,void 0,"建议开启")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("优化评论浏览","little-red-book-optimizeCommentBrowsing",!0,void 0,"加载评论，未登录最多查看1页评论(注：楼中楼评论已失效，api无法获取楼中楼评论，需要请求头X-T、X-S、X-B3-Traceid)"),f("优化图片浏览","little-red-book-optimizeImageBrowsing",!0,void 0,"更方便的浏览图片"),f("允许复制","little-red-book-allowCopy",!0,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",!0,void 0,"如：打开App弹窗、登录弹窗"),f("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",!0,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]},B=function(e,t,o,s,i,n){let l=[];typeof s=="function"?l=s():l=s;let a={text:e,type:"select",description:n,attributes:{},getValue(){return c.getValue(t,o)},callback(u,d,p){c.setValue(t,d),typeof i=="function"&&i(u,d,p);},data:l};return a.attributes&&(a.attributes[D]=t,a.attributes[L]=o),a},ge={id:"xhs-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("允许复制","pc-xhs-allowCopy",!0,void 0,"可以选择文字并复制"),f("新标签页打开文章","pc-xhs-open-blank-article",!1,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",!1,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),f("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",!1,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("【屏蔽】广告","pc-xhs-shieldAd",!0,void 0,"屏蔽元素"),f("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",!0,void 0,"屏蔽会自动弹出的登录弹窗"),f("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",!1,void 0,"屏蔽元素"),f("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",!1,void 0,"屏蔽元素")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("劫持Vue","pc-xhs-hook-vue",!1,void 0,"恢复__vue__属性")]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[B("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{r.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),B("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),f("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]}]},xe=function(e,t,o,s,i,n,l,a){let u={text:e,type:"slider",description:a,attributes:{},getValue(){return c.getValue(t,o)},getToolTipContent(d){return typeof l=="function"?l(d):`${d}`},callback(d,p){typeof n=="function"&&n(d,p)||c.setValue(t,p);},min:s,max:i};return u.attributes&&(u.attributes[D]=t,u.attributes[L]=o),u},be={id:"xhs-panel-config-article",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"笔记宽屏",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("启用","pc-xhs-article-fullWidth",!1,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),xe("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(e,t)=>{let o=document.querySelector("#noteContainer");if(!o){r.error("未找到笔记容器");return}o.style.width=`${t}vw`;},e=>`${e}%，默认：90%`,"调整笔记页面占据的页面范围")]}]}]}]},ve={id:"little-red-book-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[B("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{r.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),B("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),f("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("【屏蔽】广告","little-red-book-shieldAd",!0,void 0,"如：App内打开"),f("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",!0,void 0,"建议开启"),f("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",!0,void 0,"建议开启")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[f("劫持Vue","little-red-book-hijack-vue",!1,void 0,"恢复__vue__属性")]}]}]}]},w={data:null,oneSuccessExecMenu:null,onceExec:null,listenData:null},c={$data:{get data(){return w.data==null&&(w.data=new m.Dictionary),w.data},get oneSuccessExecMenu(){return w.oneSuccessExecMenu==null&&(w.oneSuccessExecMenu=new m.Dictionary),w.oneSuccessExecMenu},get onceExec(){return w.onceExec==null&&(w.onceExec=new m.Dictionary),w.onceExec},get scriptName(){return z},key:y,attributeKeyName:D,attributeDefaultValueName:L},$listener:{get listenData(){return w.listenData==null&&(w.listenData=new m.Dictionary),w.listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},initExtensionsMenu(){x.top===x.self&&ne.add([{key:"show_pops_panel_setting",text:"⚙ 移动端-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"show_pops_panel_setting",text:"⚙ PC-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPCPanel();}}]);},initPanelDefaultValue(){let e=this;function t(i){if(!i.attributes)return;let n=i.attributes[D],l=i.attributes[L];if(n==null){r.warn(["请先配置键",i]);return}e.$data.data.has(n)&&r.warn("请检查该key(已存在): "+n),e.$data.data.set(n,l);}function o(i){for(let n=0;n<i.length;n++){let l=i[n];t(l);let a=l.forms;a&&Array.isArray(a)&&o(a);}}let s=this.getPanelContentConfig().concat(this.getPCPanelContentConfig());for(let i=0;i<s.length;i++){let n=s[i];if(!n.forms)continue;let l=n.forms;l&&Array.isArray(l)&&o(l);}},setValue(e,t){let o=T(y,{}),s=o[e];o[e]=t,j(y,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,s,t);},getValue(e,t){let s=T(y,{})[e];return s??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=T(y,{}),o=t[e];Reflect.deleteProperty(t,e),j(y,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,t){let o=Math.random();return this.$listener.listenData.set(e,{id:o,key:e,callback:t}),o},removeValueChangeListener(e){let t=null;for(const[o,s]of this.$listener.listenData.entries())if(s.id===e){t=o;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},hasKey(e){let t=T(y,{});return e in t},execMenu(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){r.warn(`${e} 键不存在`);return}let o=c.getValue(e);o&&t(o);},execMenuOnce(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){r.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let o=[],s=l=>{let a=c.getValue(e);i(a,l);},i=(l,a)=>{let u=[];if(l){let d=a??t(l,s);d instanceof HTMLStyleElement?u=[d]:Array.isArray(d)&&(u=[...d.filter(p=>p!=null&&p instanceof HTMLStyleElement)]);}for(let d=0;d<o.length;d++)o[d].remove(),o.splice(d,1),d--;o=[...u];};this.addValueChangeListener(e,(l,a,u)=>{i(u);});let n=c.getValue(e);n&&i(n);},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){let{UIWidth:e,UIHeight:t}=this.getUISizeInfo();Q.panel({title:{text:`${z}-移动端设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:e,height:t,drag:!0,only:!0});},showPCPanel(){let{UIWidth:e,UIHeight:t}=this.getUISizeInfo();Q.panel({title:{text:`${z}-设置`,position:"center",html:!1,style:""},content:this.getPCPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:e,height:t,drag:!0,only:!0});},getUISizeInfo(){let e="92vw",t="80vh";return window.outerWidth>800&&(e="650px"),window.outerHeight>600&&(t="500px"),{UIWidth:e,UIHeight:t}},getPanelContentConfig(){return [ve,fe,he]},getPCPanelContentConfig(){return [ge,be]}},X={webpackChunkranchi(){let e;Object.defineProperty(x,"webpackChunkranchi",{get(){return e},set(o){e=o;const s=e.push;e.push=function(...i){return i[0][0],typeof i[0][1]=="object"&&Object.keys(i[0][1]).forEach((n,l)=>{if(typeof i[0][1][n]=="function"&&i[0][1][n].toString().includes("是否打开小红书App?")&&c.getValue("little-red-book-hijack-webpack-mask"))r.success(["成功劫持各种弹窗/遮罩层："+n]),i[0][1][n]=function(){};else if(typeof i[0][1][n]=="function"&&i[0][1][n].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&i[0][1][n].toString().includes("jumpToApp")&&c.getValue("little-red-book-hijack-webpack-scheme")){let a=i[0][1][n];i[0][1][n]=function(...u){r.success(["成功劫持scheme唤醒",u]);let d=u[2].d;u[2].d=function(...p){var E;if(p.length===2&&typeof((E=p[1])==null?void 0:E.Z)=="function"){let H=p[1].Z;H.toString()==="function(){return y}"&&(p[1].Z=function(...V){let M=H.call(this,...V);return typeof M=="function"&&M.toString().includes("jumpToApp")?function(){return {jumpToApp(C){var b;if(r.success(["拦截唤醒",C]),(b=C.deeplink)!=null&&b.startsWith("xhsdiscover://user/")){let _=`https://www.xiaohongshu.com/user/profile/${C.deeplink.replace(/^xhsdiscover:\/\/user\//,"")}`;window.open(_,"_blank");}}}}:M});}d.call(this,...p);},a.call(this,...u);};}}),s.call(this,...i)};}});},webPackVue(){let e=x.Function.prototype.apply,t=!1;x.Function.prototype.apply=function(...o){var i,n,l,a,u,d;const s=e.call(this,...o);if(!t&&o.length===2&&((i=o[0])!=null&&i.addRoute)&&((n=o[0])!=null&&n.currentRoute)&&((l=o[0])!=null&&l.getRoutes)&&((a=o[0])!=null&&a.hasRoute)&&((u=o[0])!=null&&u.install)&&((d=o[0])!=null&&d.removeRoute)){t=!0;let p=o[1][0];r.success(["成功劫持vue，version版本：",p.version]),p.mixin({mounted:function(){this.$el.__Ivue__=this;}});}return s};}},we=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box,\r
/* 首页-顶部的打开看看 */\r
.launch-app-container {\r
  display: none !important;\r
}\r
`,Z={isNotePage(){return globalThis.location.pathname.startsWith("/discovery/item/")},isUserHomePage(){return globalThis.location.pathname.startsWith("/user/profile/")},isHomePage(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearchPage(){return globalThis.location.pathname.startsWith("/search_result/")}},K="https://edith.xiaohongshu.com",R={async getPageInfo(e,t="",o="",s="jpg,webp"){const i="/api/sns/web/v2/comment/page",n={note_id:e,cursor:t,top_comment_id:o,image_formats:s},l=i+"?"+m.toSearchParamsStr(n);let a=await $.get(`${K}${l}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":m.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!a.status)return;let u=m.toJSON(a.data.responseText);if(r.info(["获取页信息",u]),u.code===0||u.success)return u.data;if(u.code===-101)return;g.error(u.msg);},async getLzlPageInfo(e="",t="",o=10,s="",i="jpg,webp,avif",n=""){const l="/api/sns/web/v2/comment/sub/page";let a={note_id:e,root_comment_id:t,num:o,cursor:s,image_formats:i,top_comment_id:n};l+""+m.toSearchParamsStr(a);let u=`${K}${l}?${m.toSearchParamsStr(a)}`,d=await $.get(u,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!d.status){d.data.status===406&&m.isNotNull(d.data.responseText)?m.toJSON(d.data.responseText).code==-1?g.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):g.error("获取楼中楼信息失败"):g.error("请求异常"),r.error(["获取楼中楼信息失败",d]);return}let p=m.toJSON(d.data.responseText);if(r.info(["获取楼中楼页信息",p]),p.code===0||p.success)return p.data;g.error(p.msg);},async getSearchRecommend(e){let t=await $.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${e}`,{fetch:!0});if(!t.status)return;let o=m.toJSON(t.data.responseText);if(o.success||o.code===1e3)return o.data.sug_items}},N={allowCopy(){r.info("允许复制"),v(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);},shieldBottomSearchFind(){r.info("屏蔽底部搜索发现"),v(`
        .hotlist-container,
        /* 一大块空白区域 */
        .safe-area-bottom.margin-placeholder{
            display: none !important;
        }
        `);},shieldBottomToorBar(){r.info("屏蔽底部工具栏"),v(`
        .engage-bar-container{
            display: none !important;
        }`);},shieldAuthorHotNote(){r.info("屏蔽视频笔记的作者热门笔记"),v(`
        .user-notes-box.user-notes-clo-layout-container{
            display: none !important;
        }`);},shieldHotRecommendNote(){r.info("屏蔽视频笔记的热门推荐"),v(`
        #new-note-view-container .recommend-box{
            display: none !important;
        }`);}},_e={init(){},optimizeVideoNoteDesc(){r.info("优化视频笔记的描述（可滚动）"),v(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`);}},q={init(){(c.getValue("little-red-book-hijack-webpack-mask")||c.getValue("little-red-book-hijack-webpack-scheme"))&&(r.info("劫持webpack"),X.webpackChunkranchi()),c.execMenu("little-red-book-shieldBottomSearchFind",()=>{N.shieldBottomSearchFind();}),c.execMenu("little-red-book-shieldBottomToorBar",()=>{N.shieldBottomToorBar();}),c.execMenu("little-red-book-optimizeImageBrowsing",()=>{q.optimizeImageBrowsing();}),c.execMenu("little-red-book-optimizeVideoNoteDesc",()=>{_e.optimizeVideoNoteDesc();}),c.execMenu("little-red-book-shieldAuthorHotNote",()=>{N.shieldAuthorHotNote();}),c.execMenu("little-red-book-shieldHotRecommendNote",()=>{N.shieldHotRecommendNote();}),h.ready(function(){c.execMenu("little-red-book-optimizeCommentBrowsing",()=>{q.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){r.info("优化评论浏览");const e={QmsgLoading:void 0,scrollFunc:void 0,noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){var t;this.emojiMap=((t=m.toJSON(x.localStorage.getItem("redmoji")))==null?void 0:t.redmojiMap)||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new m.LockFunction(this.scrollEvent,this),e.noteData=x.__INITIAL_STATE__.noteData.data.noteData,e.commentData=x.__INITIAL_STATE__.noteData.data.commentData,r.info(["笔记数据",e.noteData]),r.info(["评论数据",e.commentData]);},getCommentHTML(t){return `
            <div class="little-red-book-comments-avatar">
                    <a target="_blank" href="/user/profile/${t.user_id}">
                        <img src="${t.user_avatar}" crossorigin="anonymous">
                    </a>
              </div>
              <div class="little-red-book-comments-content-wrapper">
                <div class="little-red-book-comments-author-wrapper">
                    <div class="little-red-book-comments-author">
                        <a href="/user/profile/${t.user_id}" class="little-red-book-comments-author-name" target="_blank">
                            ${t.user_nickname}
                        </a>
                    </div>
                    <div class="little-red-book-comments-content">
                        ${t.content}
                    </div>
                    <div class="little-red-book-comments-info">
                        <div class="little-red-book-comments-info-date">
                            <span class="little-red-book-comments-create-time">${m.formatTime(t.create_time)}</span>
                            <span class="little-red-book-comments-location">${t.ip_location}</span>
                        </div>
                    </div>
                </div>
              </div>
            `},getCommentElement(t){var M,C;let o=t.content,s=t.create_time||parseInt(t.time),i=t.id,n=t.ip_location||t.ipLocation,l=t.sub_comment_has_more,a=parseInt(t.sub_comment_count)||0,u=t.sub_comment_cursor,d=t.sub_comments||t.subComments,p=(t.user_info||t.user).image,E=(t.user_info||t.user).nickname,H=((M=t==null?void 0:t.user_info)==null?void 0:M.user_id)||((C=t==null?void 0:t.user)==null?void 0:C.userId);o=e.converContent(o);let V=h.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
            <div class="little-red-book-comments-parent">
              ${e.getCommentHTML({user_id:H,user_avatar:p,user_nickname:E,content:o,create_time:s,ip_location:n})}
            </div>
              `});if(l&&Array.isArray(d)&&(d.forEach(b=>{let A=h.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:b.user_info.user_id,user_avatar:b.user_info.image,user_nickname:b.user_info.nickname,content:e.converContent(b.content),create_time:b.create_time,ip_location:b.ip_location})});V.appendChild(A);}),a!==d.length)){let b=a-d.length,A=u,_=h.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${b} 条回复`});async function F(){let se=g.loading("加载中，请稍后..."),P=await R.getLzlPageInfo(e.noteData.id,i,10,A,void 0);se.close(),P&&(A=P.cursor,b=b-P.comments.length,_.innerText=`展开 ${b} 条回复`,P.comments.forEach(S=>{let le=h.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:S.user_info.user_id,user_avatar:S.user_info.image,user_nickname:S.user_info.nickname,content:e.converContent(S.content),create_time:S.create_time,ip_location:S.ip_location})});h.before(_,le);}),P.has_more||(h.off(_,"click",void 0,F,{capture:!0}),_.remove()));}h.on(_,"click",void 0,F,{capture:!0}),V.appendChild(_);}return V},converContent(t){return e.emojiNameList.forEach(o=>{t.includes(o)&&(t=t.replaceAll(o,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${e.emojiMap[o]}">`));}),t},async scrollEvent(){if(!m.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=g.loading("加载中，请稍后..."));let t=await R.getPageInfo(e.noteData.id,e.currentCursor);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!t&&(e.currentCursor=t.cursor,t.comments.forEach(o=>{let s=e.getCommentElement(o);e.commentContainer.appendChild(s);}),!t.has_more)){g.info("已加载全部评论"),e.removeScrollEventListener();return}},addSrollEventListener(){r.success("添加滚动监听事件"),h.on(document,"scroll",void 0,e.scrollFunc.run,{capture:!0,once:!1,passive:!0});},removeScrollEventListener(){r.success("移除滚动监听事件"),h.off(document,"scroll",void 0,e.scrollFunc.run,{capture:!0});}};m.waitNode(".narmal-note-container").then(async()=>{r.info("优化评论浏览-笔记元素出现");let t=document.querySelector(".note-view-container"),o=g.loading("获取评论中，请稍后..."),s=h.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
                <style>
                    .little-red-book-comments-parent {
                        position: relative;
                        display: flex;
                        padding: 8px;
                        width: 100%;
                    }
                    
                    .little-red-book-comments-reply-container {
                        position: relative;
                        display: flex;
                        padding: 8px;
                        width: 100%;
                        padding-left: 52px;
                    }
                    .little-red-book-comments-container {
                        background: #fff;
                        position: relative;
                        padding: 8px 8px;
                    }
                    
                    .little-red-book-comments-item {
                        position: relative;
                    }
                    
                    .little-red-book-comments-avatar {
                        flex: 0 0 auto;
                    }
                    
                    .little-red-book-comments-avatar img {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border-radius: 100%;
                        border: 1px solid rgba(0,0,0,0.08);
                        object-fit: cover;
                        width: 40px;
                        height: 40px;
                    }
                    .little-red-book-comments-content-wrapper {
                        margin-left: 12px;
                        display: flex;
                        flex-direction: column;
                        font-size: 14px;
                        flex-grow: 1;
                    }
                    
                    .little-red-book-comments-author {display: flex;justify-content: space-between;align-items: center;}
                    
                    a.little-red-book-comments-author-name {
                        line-height: 18px;
                        color: rgba(51,51,51,0.6);
                    }
                    
                    .little-red-book-comments-content {
                        margin-top: 4px;
                        line-height: 140%;
                        color: #333;
                    }
                    
                    .little-red-book-comments-info {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        font-size: 12px;
                        line-height: 16px;
                        color: rgba(51,51,51,0.6);
                    }
                    
                    .little-red-book-comments-info-date {
                        margin: 8px 0;
                    }
                    
                    span.little-red-book-comments-location {
                        margin-left: 4px;
                        line-height: 120%;
                    }
                    img.little-red-book-note-content-emoji {
                        margin: 0 1px;
                        height: 16px;
                        transform: translateY(2px);
                        position: relative;
                    }
                    .little-red-book-comments-reply-container .little-red-book-comments-avatar img {
                        width: 24px;
                        height: 24px;
                    }
                    .little-red-book-comments-total{
                        font-size: 14px;
                        color: rgba(51,51,51,0.6);
                        margin-left: 8px;
                        margin-bottom: 12px;
                    }
                    .little-red-book-comments-reply-show-more {
                    padding-left: calc(52px + 24px + 12px);
                    height: 32px;
                    line-height: 32px;
                    color: #13386c;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 14px;
                    }
                </style>
          `});e.commentContainer=s,e.init();let i=h.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${e.noteData.comments} 条评论`});s.appendChild(i);let n=await R.getPageInfo(e.noteData.id);await m.sleep(800),n?(e.currentCursor=n.cursor,n.comments.forEach(l=>{let a=e.getCommentElement(l);s.appendChild(a);}),n.has_more&&e.addSrollEventListener()):e.commentData&&e.commentData.comments&&(r.info("从固定的评论中加载"),e.commentData.comments.forEach(l=>{let a=e.getCommentElement(l);s.appendChild(a);})),o.close(),h.append(t,s);});},optimizeImageBrowsing(){r.info("优化图片浏览");function e(t=[],o=0){let s="";t.forEach(l=>{s+=`<li><img data-src="${l}" loading="lazy"></li>`;});let i=h.createElement("ul",{innerHTML:s}),n=new pe(i,{inline:!1,url:"data-src",zIndex:m.getMaxZIndex()+100,hidden:()=>{n.destroy();}});o=o<0?0:o,n.view(o),n.zoomTo(1),n.show();}h.on(document,"click",".note-image-box",function(t){let o=t.target,s=o.querySelector("img"),i=[],n=[];o.closest(".onix-carousel-item")?n=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):n=[s];let l=n.findIndex(a=>a==s);n.forEach(a=>{let u=a.getAttribute("src")||a.getAttribute("data-src")||a.getAttribute("alt");u&&i.push(u);}),r.success(["点击浏览图片👉",i[l]]),e(i,l);});}},ie={init(){h.ready(()=>{c.execMenu("little-red-book-repariClick",()=>{ie.repariClick();});});},repariClick(){r.info("修复正确的点击跳转"),h.on(document,"click",void 0,function(e){var o,s,i,n,l;let t=e.target;if(r.info(["点击的按钮元素",t]),(o=t==null?void 0:t.className)!=null&&o.includes("follow-btn"))r.success("点击-关注按钮");else if(t!=null&&t.closest("button.reds-button.message-btn"))r.success("点击-私信按钮");else if(t!=null&&t.closest("div.reds-tab-item"))r.success("点击-笔记/收藏按钮");else if(t!=null&&t.closest("section.reds-note-card")){r.success("点击-笔记卡片");let a=t==null?void 0:t.closest("section.reds-note-card");a.getAttribute("id")||((n=(i=(s=m.toJSON(a.getAttribute("impression")))==null?void 0:s.noteTarget)==null?void 0:i.value)==null?void 0:n.noteId)?window.open(`https://www.xiaohongshu.com/discovery/item/${(l=t==null?void 0:t.closest("section.reds-note-card"))==null?void 0:l.getAttribute("id")}`,"_blank"):g.error("获取笔记note_id失败");}return m.preventEvent(e),!1},{capture:!0});}},O={init(){c.execMenu("little-red-book-hijack-vue",()=>{r.info("劫持页面的Vue"),X.webPackVue();}),c.execMenu("little-red-book-shieldAd",()=>{r.info("注入默认屏蔽CSS"),v(we);}),c.execMenu("little-red-book-allowCopy",()=>{O.allowCopy();}),Z.isNotePage()?q.init():Z.isUserHomePage()&&ie.init();},allowCopy(){r.info("允许复制文字"),v(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);}},ye="",ke={init(){c.execMenu("pc-xhs-shieldAd",()=>{v(ye);}),c.execMenu("pc-xhs-shield-select-text-search-position",()=>{this.shieldSelectTextVisibleSearchPosition();}),c.execMenu("pc-xhs-shield-topToolbar",()=>{this.shieldTopToolbar();}),h.ready(()=>{c.execMenu("pc-xhs-shield-login-dialog",()=>{this.shieldLoginContainer();});});},shieldLoginContainer(){r.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),v(`
        /* 登录弹窗 */
        .login-container{
            display: none !important;
        }
        `),m.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:()=>{let e=document.querySelector(".login-container .icon-btn-wrapper");e&&(e.click(),r.success("登录弹窗出现，关闭"));}});},shieldSelectTextVisibleSearchPosition(){r.info("屏蔽选择文字弹出的搜索提示"),v(`
        .search-position{
            display: none !important;
        }
        `);},shieldTopToolbar(){r.info("【屏蔽】顶部工具栏"),v(`
        #headerContainer{
            display: none !important;
        }
        /* 主内容去除padding */
        #mfContainer{
            padding-top: 0 !important;
        }
        .outer-link-container{
            margin-top: 0 !important;
            height: 100vh !important;
            padding: 30px 0;
        }
        #noteContainer{
            height: 100%;
        }
        `);}},Me={getSearchUrl(e){return `https://www.xiaohongshu.com/search_result?keyword=${e}&source=web_explore_feed`}},Ce={init(){(c.getValue("pc-xhs-search-open-blank-btn")||c.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),c.execMenu("pc-xhs-article-fullWidth",()=>{this.fullWidth();});},optimizationSearch(){function e(t,o=!0){{let s=document.querySelector("#search-input");if(s){let i=s.value,n=Me.getSearchUrl(i);r.info("搜索内容: "+i),window.open(n,o?"_blank":"_self");}else g.error("未找到搜索的输入框");}}m.waitNode("#search-input").then(t=>{t.placeholder="搜索小红书",c.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{m.listenKeyboard(t,"keydown",(o,s,i,n)=>{o==="Enter"&&!i.length&&(r.info("按下回车键"),m.preventEvent(n),t.blur(),e());});});}),m.waitNode("#search-input + .input-button .search-icon").then(t=>{c.execMenu("pc-xhs-search-open-blank-btn",()=>{h.on(t,"click",o=>{m.preventEvent(o),r.info("点击搜索按钮"),e();},{capture:!0});});});},fullWidth(){r.info("笔记宽屏");let e=c.getValue("pc-xhs-article-fullWidth-widthSize",90);v(`
		.main-container .main-content{
			padding-left: 0 !important;
		}
		.outer-link-container{
			width: 100vw !important;
		}
		/* 隐藏左侧工具栏 */
		.main-container .side-bar{
			display: none !important;
		}
		#noteContainer{
			width: ${e}vw;
		}
		`);}},G={init(){c.execMenu("pc-xhs-hook-vue",()=>{X.webPackVue();}),c.execMenu("pc-xhs-allowCopy",()=>{G.allowPCCopy();}),c.execMenu("pc-xhs-open-blank-article",()=>{G.openBlankArticle();}),ke.init(),Ce.init();},allowPCCopy(){r.success("允许复制文字"),h.on(x,"copy",void 0,function(e){m.preventEvent(e);let t=x.getSelection();return t?m.setClip(t.toString()):r.error("未选中任何内容"),!1},{capture:!0});},openBlankArticle(){r.success("新标签页打开文章"),h.on(document,"click",".feeds-container .note-item",function(e){m.preventEvent(e);let o=e.target.querySelector("a[href]");o&&o.href?(r.info("跳转文章: "+o.href),window.open(o.href,"_blank")):g.error("未找到文章链接");},{capture:!0});}};v(`
.qmsg svg.animate-turn {
    fill: none;
}
`);c.init();let re=m.isPhone(),I="change_env_set",k=T(I);ne.add({key:I,text:`⚙ 自动: ${re?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return k==null?e:e+` 手动: ${k==1?"移动端":k==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let o=parseInt(t);if(isNaN(o)){g.error("输入的不是规范的数字");return}if(!e.includes(o)){g.error("输入的值必须是0或1或2");return}o==0?ee(I):j(I,o);}});k!=null?(r.info(`手动判定为${k===1?"移动端":"PC端"}`),k==1?O.init():k==2?G.init():(g.error("意外，手动判定的值不在范围内"),ee(I))):re?(r.info("自动判定为移动端"),O.init()):(r.info("自动判定为PC端"),G.init());

})(Qmsg, Utils, DOMUtils, pops);