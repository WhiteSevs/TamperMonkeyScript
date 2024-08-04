// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.8.4.23
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/449471/1413235/Viewer.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.1.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.5.0/dist/index.umd.js
// @connect      edith.xiaohongshu.com
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (b, z, ce, ee) {
  'use strict';

  var te=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Q=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,$=typeof GM_getValue<"u"?GM_getValue:void 0,B=typeof GM_info<"u"?GM_info:void 0,ue=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,j=typeof GM_setValue<"u"?GM_setValue:void 0,de=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,me=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,_=typeof unsafeWindow<"u"?unsafeWindow:void 0,oe=window;const pe="小红书优化",m=z.noConflict(),g=ce.noConflict(),Z=ee,fe=oe.Viewer||_.Viewer,l=new m.Log(B,_.console||oe.console);var Y;const U=((Y=B==null?void 0:B.script)==null?void 0:Y.name)||pe,ne=!1;l.config({debug:ne,logMaxCount:1e3,autoClearConsole:!0,tag:!0});b.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return s.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return s.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return s.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=z.getMaxZIndex(),t=ee.config.InstanceUtils.getPopsMaxZIndex(e).zIndex;return z.getMaxValue(e,t)+100}}}));const ie=new m.GM_Menu({GM_getValue:$,GM_setValue:j,GM_registerMenuCommand:ue,GM_unregisterMenuCommand:de}),P=new m.Httpx(me);P.interceptors.response.use(void 0,e=>(l.error(["拦截器-请求错误",e]),e.type==="onabort"?b.warning("请求取消"):e.type==="onerror"?b.error("请求异常"):e.type==="ontimeout"?b.error("请求超时"):b.error("其它错误"),e));P.config({logDetails:ne});_.Object.defineProperty,_.Function.prototype.apply,_.Function.prototype.call,_.Element.prototype.appendChild,_.setTimeout;const w=m.addStyle.bind(m),M="GM_Panel",he="data-init",I="data-key",H="data-default-value",ge="data-init-more-value",h=function(e,t,o,r,i){let n={text:e,type:"switch",description:i,attributes:{},getValue(){return !!s.getValue(t,o)},callback(c,a){l.success(`${a?"开启":"关闭"} ${e}`),s.setValue(t,!!a);},afterAddToUListCallBack:void 0};return n.attributes&&(n.attributes[I]=t,n.attributes[H]=!!o),n},xe={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"",type:"forms",forms:[{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("劫持点击事件","little-red-book-repariClick",!0,void 0,"可阻止点击跳转至下载页面")]}]}]}]},be={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"视频笔记",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("优化视频描述","little-red-book-optimizeVideoNoteDesc",!0,void 0,"让视频描述可以滚动显示更多"),h("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",!0,void 0,"建议开启"),h("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",!0,void 0,"建议开启")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("优化评论浏览","little-red-book-optimizeCommentBrowsing",!0,void 0,"加载评论，未登录最多查看1页评论(注：楼中楼评论已失效，api无法获取楼中楼评论，需要请求头X-T、X-S、X-B3-Traceid)"),h("优化图片浏览","little-red-book-optimizeImageBrowsing",!0,void 0,"更方便的浏览图片"),h("允许复制","little-red-book-allowCopy",!0,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",!0,void 0,"如：打开App弹窗、登录弹窗"),h("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",!0,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]},O=function(e,t,o,r,i,n){let c=[];typeof r=="function"?c=r():c=r;let a={text:e,type:"select",description:n,attributes:{},getValue(){return s.getValue(t,o)},callback(p,u,d){s.setValue(t,u),typeof i=="function"&&i(p,u,d);},data:c};return a.attributes&&(a.attributes[I]=t,a.attributes[H]=o),a},_e={id:"xhs-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("允许复制","pc-xhs-allowCopy",!0,void 0,"可以选择文字并复制"),h("新标签页打开文章","pc-xhs-open-blank-article",!1,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",!1,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),h("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",!1,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("【屏蔽】广告","pc-xhs-shieldAd",!0,void 0,"屏蔽元素"),h("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",!0,void 0,"屏蔽会自动弹出的登录弹窗"),h("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",!1,void 0,"屏蔽元素"),h("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",!1,void 0,"屏蔽元素")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("劫持Vue","pc-xhs-hook-vue",!1,void 0,"恢复__vue__属性")]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[O("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{l.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),O("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),h("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]}]},ve=function(e,t,o,r,i,n,c,a,p){let u={text:e,type:"slider",description:a,attributes:{},getValue(){return s.getValue(t,o)},getToolTipContent(d){return typeof c=="function"?c(d):`${d}`},callback(d,f){typeof n=="function"&&n(d,f)||s.setValue(t,f);},min:r,max:i,step:p};return u.attributes&&(u.attributes[I]=t,u.attributes[H]=o),u},we={id:"xhs-panel-config-article",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"笔记宽屏",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("启用","pc-xhs-article-fullWidth",!1,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),ve("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(e,t)=>{let o=document.querySelector("#noteContainer");if(!o){l.error("未找到笔记容器");return}o.style.width=`${t}vw`;},e=>`${e}%，默认：90%`,"调整笔记页面占据的页面范围")]}]}]}]},ye={id:"little-red-book-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[O("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{l.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),O("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),h("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("【屏蔽】广告","little-red-book-shieldAd",!0,void 0,"如：App内打开"),h("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",!0,void 0,"建议开启"),h("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",!0,void 0,"建议开启")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("劫持Vue","little-red-book-hijack-vue",!1,void 0,"恢复__vue__属性")]}]}]}]},s={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return s.$data.__data==null&&(s.$data.__data=new m.Dictionary),s.$data.__data},get oneSuccessExecMenu(){return s.$data.__oneSuccessExecMenu==null&&(s.$data.__oneSuccessExecMenu=new m.Dictionary),s.$data.__oneSuccessExecMenu},get onceExec(){return s.$data.__onceExec==null&&(s.$data.__onceExec=new m.Dictionary),s.$data.__onceExec},get scriptName(){return U},key:M,attributeKeyName:I,attributeDefaultValueName:H},$listener:{get listenData(){return s.$data.__listenData==null&&(s.$data.__listenData=new m.Dictionary),s.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return _.top===_.self},initExtensionsMenu(){_.top===_.self&&ie.add([{key:"show_pops_panel_setting",text:"⚙ 移动端-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"show_pops_panel_setting",text:"⚙ PC-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPCPanel();}}]);},initPanelDefaultValue(){let e=this;function t(i){if(!i.attributes)return;let n={},c=i.attributes[I];c!=null&&(n[c]=i.attributes[H]);let a=i.attributes[he];if(typeof a=="function"){let d=a();if(typeof d=="boolean"&&!d)return}let p=i.attributes[ge];p&&typeof p=="object"&&Object.assign(n,p);let u=Object.keys(n);if(!u.length){l.warn(["请先配置键",i]);return}u.forEach(d=>{let f=n[d];e.$data.data.has(d)&&l.warn("请检查该key(已存在): "+d),e.$data.data.set(d,f);});}function o(i){for(let n=0;n<i.length;n++){let c=i[n];t(c);let a=c.forms;a&&Array.isArray(a)&&o(a);}}let r=this.getPanelContentConfig().concat(this.getPCPanelContentConfig());for(let i=0;i<r.length;i++){let n=r[i];if(!n.forms)continue;let c=n.forms;c&&Array.isArray(c)&&o(c);}},setValue(e,t){let o=$(M,{}),r=o[e];o[e]=t,j(M,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,r,t);},getValue(e,t){let r=$(M,{})[e];return r??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=$(M,{}),o=t[e];Reflect.deleteProperty(t,e),j(M,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,t){let o=Math.random();return this.$listener.listenData.set(e,{id:o,key:e,callback:t}),o},removeValueChangeListener(e){let t=null;for(const[o,r]of this.$listener.listenData.entries())if(r.id===e){t=o;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},triggerMenuValueChange(e,t,o){if(this.$listener.listenData.has(e)){let r=this.$listener.listenData.get(e);if(typeof r.callback=="function"){let i=this.getValue(e),n=i,c=i;typeof t<"u"&&arguments.length>1&&(n=t),typeof o<"u"&&arguments.length>2&&(c=o),r.callback(e,c,n);}}},hasKey(e){let t=$(M,{});return e in t},execMenu(e,t,o=!1){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){l.warn(`${e} 键不存在`);return}let r=s.getValue(e);o&&(r=!r),r&&t(r);},execMenuOnce(e,t,o,r){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){l.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let i=()=>{let u=s.getValue(e);return typeof o=="function"?o(e,u):u},n=[],c=u=>{let d=i(),f=[];if(u instanceof HTMLStyleElement?f=[u]:Array.isArray(u)&&(f=[...u.filter(x=>x!=null&&x instanceof HTMLStyleElement)]),d)n=n.concat(f);else for(let x=0;x<f.length;x++)f[x].remove(),f.splice(x,1),x--;},a=u=>{let d=[];if(u){let f=t(u,c);f instanceof HTMLStyleElement?d=[f]:Array.isArray(f)&&(d=[...f.filter(x=>x!=null&&x instanceof HTMLStyleElement)]);}for(let f=0;f<n.length;f++)n[f].remove(),n.splice(f,1),f--;n=[...d];};this.addValueChangeListener(e,(u,d,f)=>{let x=f;typeof r=="function"&&(x=r(u,f,d)),a(x);});let p=i();p&&a(p);},execInheritMenuOnce(e,t,o,r){let i=this;const n=(c,a)=>{let p=i.getValue(c),u=i.getValue(a);if(typeof r=="function"){let d=r(p,u);if(d!==void 0)return d}return p};this.execMenuOnce(e,o,()=>n(e,t),()=>n(e,t)),this.execMenuOnce(t,()=>{},()=>!1,()=>(this.triggerMenuValueChange(e),!1));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){Z.panel({title:{text:`${U}-移动端设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},showPCPanel(){Z.panel({title:{text:`${U}-设置`,position:"center",html:!1,style:""},content:this.getPCPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},isMobile:this.isMobile(),width:this.getWidth(),height:this.getHeight(),drag:!0,only:!0});},isMobile(){return window.innerWidth<550},getWidth(){return window.innerWidth<550?"92vw":"550px"},getHeight(){return window.innerHeight>450?"80vh":"450px"},getPanelContentConfig(){return [ye,xe,be]},getPCPanelContentConfig(){return [_e,we]}},X={webpackChunkranchi(){let e;Object.defineProperty(_,"webpackChunkranchi",{get(){return e},set(o){e=o;const r=e.push;e.push=function(...i){return i[0][0],typeof i[0][1]=="object"&&Object.keys(i[0][1]).forEach((n,c)=>{if(typeof i[0][1][n]=="function"&&i[0][1][n].toString().includes("是否打开小红书App?")&&s.getValue("little-red-book-hijack-webpack-mask"))l.success(["成功劫持各种弹窗/遮罩层："+n]),i[0][1][n]=function(){};else if(typeof i[0][1][n]=="function"&&i[0][1][n].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&i[0][1][n].toString().includes("jumpToApp")&&s.getValue("little-red-book-hijack-webpack-scheme")){let a=i[0][1][n];i[0][1][n]=function(...p){l.success(["成功劫持scheme唤醒",p]);let u=p[2].d;p[2].d=function(...d){var f;if(d.length===2&&typeof((f=d[1])==null?void 0:f.Z)=="function"){let x=d[1].Z;x.toString()==="function(){return y}"&&(d[1].Z=function(...S){let T=x.call(this,...S);return typeof T=="function"&&T.toString().includes("jumpToApp")?function(){return {jumpToApp(E){var v;if(l.success(["拦截唤醒",E]),(v=E.deeplink)!=null&&v.startsWith("xhsdiscover://user/")){let y=`https://www.xiaohongshu.com/user/profile/${E.deeplink.replace(/^xhsdiscover:\/\/user\//,"")}`;window.open(y,"_blank");}}}}:T});}u.call(this,...d);},a.call(this,...p);};}}),r.call(this,...i)};}});},webPackVue(){let e=_.Function.prototype.apply,t=!1;_.Function.prototype.apply=function(...o){var i,n,c,a,p,u;const r=e.call(this,...o);if(!t&&o.length===2&&((i=o[0])!=null&&i.addRoute)&&((n=o[0])!=null&&n.currentRoute)&&((c=o[0])!=null&&c.getRoutes)&&((a=o[0])!=null&&a.hasRoute)&&((p=o[0])!=null&&p.install)&&((u=o[0])!=null&&u.removeRoute)){t=!0;let d=o[1][0];l.success(["成功劫持vue，version版本：",d.version]),d.mixin({mounted:function(){this.$el.__Ivue__=this;}});}return r};}},ke=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box,\r
/* 首页-顶部的打开看看 */\r
.launch-app-container {\r
  display: none !important;\r
}\r
`,K={isNotePage(){return globalThis.location.pathname.startsWith("/discovery/item/")},isUserHomePage(){return globalThis.location.pathname.startsWith("/user/profile/")},isHomePage(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearchPage(){return globalThis.location.pathname.startsWith("/search_result/")}},J="https://edith.xiaohongshu.com",G={async getPageInfo(e,t="",o="",r="jpg,webp"){const i="/api/sns/web/v2/comment/page",n={note_id:e,cursor:t,top_comment_id:o,image_formats:r},c=i+"?"+m.toSearchParamsStr(n);let a=await P.get(`${J}${c}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":m.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!a.status)return;let p=m.toJSON(a.data.responseText);if(l.info(["获取页信息",p]),p.code===0||p.success)return p.data;if(p.code===-101)return;b.error(p.msg);},async getLzlPageInfo(e="",t="",o=10,r="",i="jpg,webp,avif",n=""){const c="/api/sns/web/v2/comment/sub/page";let a={note_id:e,root_comment_id:t,num:o,cursor:r,image_formats:i,top_comment_id:n};c+""+m.toSearchParamsStr(a);let p=`${J}${c}?${m.toSearchParamsStr(a)}`,u=await P.get(p,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!u.status){u.data.status===406&&m.isNotNull(u.data.responseText)?m.toJSON(u.data.responseText).code==-1?b.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):b.error("获取楼中楼信息失败"):b.error("请求异常"),l.error(["获取楼中楼信息失败",u]);return}let d=m.toJSON(u.data.responseText);if(l.info(["获取楼中楼页信息",d]),d.code===0||d.success)return d.data;b.error(d.msg);},async getSearchRecommend(e){let t=await P.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${e}`,{fetch:!0});if(!t.status)return;let o=m.toJSON(t.data.responseText);if(o.success||o.code===1e3)return o.data.sug_items}},k={addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(o=>{Array.isArray(o)?t=t.concat(o):t.push(o);}),w(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof Q=="function"?Q(e.keyName):"";typeof t=="string"&&t?w(t):k.addLinkNode(e.url);},async addLinkNode(e){let t=document.createElement("link");return t.rel="stylesheet",t.type="text/css",t.href=e,g.ready(()=>{document.head.appendChild(t);}),t},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e}},N={allowCopy(){return l.info("允许复制"),w(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},shieldBottomSearchFind(){return l.info("屏蔽底部搜索发现"),k.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},shieldBottomToorBar(){return l.info("屏蔽底部工具栏"),k.addBlockCSS(".engage-bar-container")},shieldAuthorHotNote(){return l.info("屏蔽视频笔记的作者热门笔记"),k.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},shieldHotRecommendNote(){return l.info("屏蔽视频笔记的热门推荐"),k.addBlockCSS("#new-note-view-container .recommend-box")}},Me={init(){},optimizeVideoNoteDesc(){return l.info("优化视频笔记的描述（可滚动）"),w(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},W={init(){(s.getValue("little-red-book-hijack-webpack-mask")||s.getValue("little-red-book-hijack-webpack-scheme"))&&(l.info("劫持webpack"),X.webpackChunkranchi()),s.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>N.shieldBottomSearchFind()),s.execMenuOnce("little-red-book-shieldBottomToorBar",()=>N.shieldBottomToorBar()),s.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>{W.optimizeImageBrowsing();}),s.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>Me.optimizeVideoNoteDesc()),s.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>N.shieldAuthorHotNote()),s.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>N.shieldHotRecommendNote()),g.ready(function(){s.execMenu("little-red-book-optimizeCommentBrowsing",()=>{W.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){l.info("优化评论浏览");const e={QmsgLoading:void 0,scrollFunc:void 0,noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){var t;this.emojiMap=((t=m.toJSON(_.localStorage.getItem("redmoji")))==null?void 0:t.redmojiMap)||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new m.LockFunction(this.scrollEvent,this),e.noteData=_.__INITIAL_STATE__.noteData.data.noteData,e.commentData=_.__INITIAL_STATE__.noteData.data.commentData,l.info(["笔记数据",e.noteData]),l.info(["评论数据",e.commentData]);},getCommentHTML(t){return `
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
            `},getCommentElement(t){var T,E;let o=t.content,r=t.create_time||parseInt(t.time),i=t.id,n=t.ip_location||t.ipLocation,c=t.sub_comment_has_more,a=parseInt(t.sub_comment_count)||0,p=t.sub_comment_cursor,u=t.sub_comments||t.subComments,d=(t.user_info||t.user).image,f=(t.user_info||t.user).nickname,x=((T=t==null?void 0:t.user_info)==null?void 0:T.user_id)||((E=t==null?void 0:t.user)==null?void 0:E.userId);o=e.converContent(o);let S=g.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${e.getCommentHTML({user_id:x,user_avatar:d,user_nickname:f,content:o,create_time:r,ip_location:n})}
					</div>
					`});if(c&&Array.isArray(u)&&(u.forEach(v=>{let A=g.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:v.user_info.user_id,user_avatar:v.user_info.image,user_nickname:v.user_info.nickname,content:e.converContent(v.content),create_time:v.create_time,ip_location:v.ip_location})});S.appendChild(A);}),a!==u.length)){let v=a-u.length,A=p,y=g.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${v} 条回复`});async function F(){let se=b.loading("加载中，请稍后..."),L=await G.getLzlPageInfo(e.noteData.id,i,10,A,void 0);se.close(),L&&(A=L.cursor,v=v-L.comments.length,y.innerText=`展开 ${v} 条回复`,L.comments.forEach(V=>{let ae=g.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:V.user_info.user_id,user_avatar:V.user_info.image,user_nickname:V.user_info.nickname,content:e.converContent(V.content),create_time:V.create_time,ip_location:V.ip_location})});g.before(y,ae);}),L.has_more||(g.off(y,"click",void 0,F,{capture:!0}),y.remove()));}g.on(y,"click",void 0,F,{capture:!0}),S.appendChild(y);}return S},converContent(t){return e.emojiNameList.forEach(o=>{t.includes(o)&&(t=t.replaceAll(o,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${e.emojiMap[o]}">`));}),t},async scrollEvent(){if(!m.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=b.loading("加载中，请稍后..."));let t=await G.getPageInfo(e.noteData.id,e.currentCursor);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!t&&(e.currentCursor=t.cursor,t.comments.forEach(o=>{let r=e.getCommentElement(o);e.commentContainer.appendChild(r);}),!t.has_more)){b.info("已加载全部评论"),e.removeScrollEventListener();return}},addSrollEventListener(){l.success("添加滚动监听事件"),g.on(document,"scroll",void 0,e.scrollFunc.run,{capture:!0,once:!1,passive:!0});},removeScrollEventListener(){l.success("移除滚动监听事件"),g.off(document,"scroll",void 0,e.scrollFunc.run,{capture:!0});}};m.waitNode(".narmal-note-container").then(async()=>{l.info("优化评论浏览-笔记元素出现");let t=document.querySelector(".note-view-container"),o=b.loading("获取评论中，请稍后..."),r=g.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
          `});e.commentContainer=r,e.init();let i=g.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${e.noteData.comments} 条评论`});r.appendChild(i);let n=await G.getPageInfo(e.noteData.id);await m.sleep(800),n?(e.currentCursor=n.cursor,n.comments.forEach(c=>{let a=e.getCommentElement(c);r.appendChild(a);}),n.has_more&&e.addSrollEventListener()):e.commentData&&e.commentData.comments&&(l.info("从固定的评论中加载"),e.commentData.comments.forEach(c=>{let a=e.getCommentElement(c);r.appendChild(a);})),o.close(),g.append(t,r);});},optimizeImageBrowsing(){l.info("优化图片浏览");function e(t=[],o=0){let r="";t.forEach(c=>{r+=`<li><img data-src="${c}" loading="lazy"></li>`;});let i=g.createElement("ul",{innerHTML:r}),n=new fe(i,{inline:!1,url:"data-src",zIndex:m.getMaxZIndex()+100,hidden:()=>{n.destroy();}});o=o<0?0:o,n.view(o),n.zoomTo(1),n.show();}g.on(document,"click",".note-image-box",function(t){let o=t.target,r=o.querySelector("img"),i=[],n=[];o.closest(".onix-carousel-item")?n=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):n=[r];let c=n.findIndex(a=>a==r);n.forEach(a=>{let p=a.getAttribute("src")||a.getAttribute("data-src")||a.getAttribute("alt");p&&i.push(p);}),l.success(["点击浏览图片👉",i[c]]),e(i,c);});}},re={init(){g.ready(()=>{s.execMenuOnce("little-red-book-repariClick",()=>{re.repariClick();});});},repariClick(){l.info("修复正确的点击跳转"),g.on(document,"click",void 0,function(e){var o,r,i,n,c;let t=e.target;if(l.info(["点击的按钮元素",t]),(o=t==null?void 0:t.className)!=null&&o.includes("follow-btn"))l.success("点击-关注按钮");else if(t!=null&&t.closest("button.reds-button.message-btn"))l.success("点击-私信按钮");else if(t!=null&&t.closest("div.reds-tab-item"))l.success("点击-笔记/收藏按钮");else if(t!=null&&t.closest("section.reds-note-card")){l.success("点击-笔记卡片");let a=t==null?void 0:t.closest("section.reds-note-card");a.getAttribute("id")||((n=(i=(r=m.toJSON(a.getAttribute("impression")))==null?void 0:r.noteTarget)==null?void 0:i.value)==null?void 0:n.noteId)?window.open(`https://www.xiaohongshu.com/discovery/item/${(c=t==null?void 0:t.closest("section.reds-note-card"))==null?void 0:c.getAttribute("id")}`,"_blank"):b.error("获取笔记note_id失败");}return m.preventEvent(e),!1},{capture:!0});}},q={init(){s.execMenu("little-red-book-hijack-vue",()=>{l.info("劫持页面的Vue"),X.webPackVue();}),s.execMenuOnce("little-red-book-shieldAd",()=>(l.info("注入默认屏蔽CSS"),w(ke))),s.execMenuOnce("little-red-book-allowCopy",()=>q.allowCopy()),K.isNotePage()?W.init():K.isUserHomePage()&&re.init();},allowCopy(){return l.info("允许复制文字"),w(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)}},Ce="",Se={init(){s.execMenuOnce("pc-xhs-shieldAd",()=>w(Ce)),s.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.shieldSelectTextVisibleSearchPosition()),s.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.shieldTopToolbar()),g.ready(()=>{s.execMenuOnce("pc-xhs-shield-login-dialog",()=>{this.shieldLoginContainer();});});},shieldLoginContainer(){l.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),k.addBlockCSS(".login-container"),m.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:()=>{let e=document.querySelector(".login-container .icon-btn-wrapper");e&&(e.click(),l.success("登录弹窗出现，关闭"));}});},shieldSelectTextVisibleSearchPosition(){return l.info("屏蔽选择文字弹出的搜索提示"),k.addBlockCSS(".search-position")},shieldTopToolbar(){return l.info("【屏蔽】顶部工具栏"),[k.addBlockCSS("#headerContainer"),w(`
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
			`)]}},Te={getSearchUrl(e){return `https://www.xiaohongshu.com/search_result?keyword=${e}&source=web_explore_feed`}},Ee={init(){(s.getValue("pc-xhs-search-open-blank-btn")||s.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),s.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){function e(t,o=!0){{let r=document.querySelector("#search-input");if(r){let i=r.value,n=Te.getSearchUrl(i);l.info("搜索内容: "+i),window.open(n,o?"_blank":"_self");}else b.error("未找到搜索的输入框");}}m.waitNode("#search-input").then(t=>{t.placeholder="搜索小红书",s.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{m.listenKeyboard(t,"keydown",(o,r,i,n)=>{o==="Enter"&&!i.length&&(l.info("按下回车键"),m.preventEvent(n),t.blur(),e());});});}),m.waitNode("#search-input + .input-button .search-icon").then(t=>{s.execMenu("pc-xhs-search-open-blank-btn",()=>{g.on(t,"click",o=>{m.preventEvent(o),l.info("点击搜索按钮"),e();},{capture:!0});});});},fullWidth(){l.info("笔记宽屏");let e=s.getValue("pc-xhs-article-fullWidth-widthSize",90);return w(`
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
		`)}},R={init(){s.execMenu("pc-xhs-hook-vue",()=>{X.webPackVue();}),s.execMenu("pc-xhs-allowCopy",()=>{R.allowPCCopy();}),s.execMenu("pc-xhs-open-blank-article",()=>{R.openBlankArticle();}),Se.init(),Ee.init();},allowPCCopy(){l.success("允许复制文字"),g.on(_,"copy",void 0,function(e){m.preventEvent(e);let t=_.getSelection();return t?m.setClip(t.toString()):l.error("未选中任何内容"),!1},{capture:!0});},openBlankArticle(){l.success("新标签页打开文章"),g.on(document,"click",".feeds-container .note-item",function(e){m.preventEvent(e);let o=e.target.querySelector("a[href]");o&&o.href?(l.info("跳转文章: "+o.href),window.open(o.href,"_blank")):b.error("未找到文章链接");},{capture:!0});}};w(`
.qmsg svg.animate-turn {
    fill: none;
}
`);s.init();let le=m.isPhone(),D="change_env_set",C=$(D);ie.add({key:D,text:`⚙ 自动: ${le?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return C==null?e:e+` 手动: ${C==1?"移动端":C==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let o=parseInt(t);if(isNaN(o)){b.error("输入的不是规范的数字");return}if(!e.includes(o)){b.error("输入的值必须是0或1或2");return}o==0?te(D):j(D,o);}});C!=null?(l.info(`手动判定为${C===1?"移动端":"PC端"}`),C==1?q.init():C==2?R.init():(b.error("意外，手动判定的值不在范围内"),te(D))):le?(l.info("自动判定为移动端"),q.init()):(l.info("自动判定为PC端"),R.init());

})(Qmsg, Utils, DOMUtils, pops);