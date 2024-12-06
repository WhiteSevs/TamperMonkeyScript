// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.12.6
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.5.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.6/dist/viewer.min.css
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

(function (b, F, me, ie, pe) {
  'use strict';

  var re=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,Y=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,$=typeof GM_getValue<"u"?GM_getValue:void 0,N=typeof GM_info<"u"?GM_info:void 0,fe=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,U=typeof GM_setValue<"u"?GM_setValue:void 0,he=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,ge=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,_=typeof unsafeWindow<"u"?unsafeWindow:void 0,be=window;const xe={ElementPlus:{keyName:"ElementPlusResourceCSS",url:"https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css"},Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}},y={addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(o=>{Array.isArray(o)?t=t.concat(o):t.push(o);}),v(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof Y=="function"?Y(e.keyName):"";typeof t=="string"&&t?v(t):y.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,h.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(o=>{t.onload=()=>{o(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()}},_e="小红书优化",p=F.noConflict(),h=me.noConflict(),ee=ie,we=pe,l=new p.Log(N,_.console||be.console);var ne;const W=((ne=N==null?void 0:N.script)==null?void 0:ne.name)||_e,le=!1;l.config({debug:le,logMaxCount:1e3,autoClearConsole:!0,tag:!0});b.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return u.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return u.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return u.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=F.getMaxZIndex(),t=ie.config.InstanceUtils.getPopsMaxZIndex().zIndex;return F.getMaxValue(e,t)+100}}}));const se=new p.GM_Menu({GM_getValue:$,GM_setValue:U,GM_registerMenuCommand:fe,GM_unregisterMenuCommand:he}),R=new p.Httpx(ge);R.interceptors.response.use(void 0,e=>(l.error("拦截器-请求错误",e),e.type==="onabort"?b.warning("请求取消"):e.type==="onerror"?b.error("请求异常"):e.type==="ontimeout"?b.error("请求超时"):b.error("其它错误"),e));R.config({logDetails:le});_.Object.defineProperty,_.Function.prototype.apply,_.Function.prototype.call,_.Element.prototype.appendChild,_.setTimeout;const v=p.addStyle.bind(p);document.querySelector.bind(document);const ve=document.querySelectorAll.bind(document),M="GM_Panel",ye="data-init",H="data-key",j="data-default-value",ke="data-init-more-value",k="data-storage-api",g=function(e,t,o,i,r,n){let s={text:e,type:"switch",description:r,attributes:{},props:{},getValue(){return !!this.props[k].get(t,o)},callback(a,d){let c=!!d;l.success(`${c?"开启":"关闭"} ${e}`),this.props[k].set(t,c);},afterAddToUListCallBack:n};return Reflect.set(s.attributes,H,t),Reflect.set(s.attributes,j,o),Reflect.set(s.props,k,{get(a,d){return u.getValue(a,d)},set(a,d){u.setValue(a,d);}}),s},Se={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"",type:"forms",forms:[{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[g("劫持点击事件","little-red-book-repariClick",!0,void 0,"可阻止点击跳转至下载页面")]}]}]}]},Me={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"视频笔记",type:"deepMenu",forms:[{text:"",type:"forms",forms:[g("优化视频描述","little-red-book-optimizeVideoNoteDesc",!0,void 0,"让视频描述可以滚动显示更多"),g("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",!0,void 0,"建议开启"),g("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",!0,void 0,"建议开启")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[g("优化评论浏览","little-red-book-optimizeCommentBrowsing",!0,void 0,"加载评论，未登录最多查看1页评论(注：楼中楼评论已失效，api无法获取楼中楼评论，需要请求头X-T、X-S、X-B3-Traceid)"),g("优化图片浏览","little-red-book-optimizeImageBrowsing",!0,void 0,"更方便的浏览图片"),g("允许复制","little-red-book-allowCopy",!0,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[g("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",!0,void 0,"如：打开App弹窗、登录弹窗"),g("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",!0,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]},G=function(e,t,o,i,r,n){let s=[];typeof i=="function"?s=i():s=i;let a={text:e,type:"select",description:n,attributes:{},props:{},getValue(){return this.props[k].get(t,o)},callback(d,c,m){let f=c;l.info(`选择：${m}`),this.props[k].set(t,f),typeof r=="function"&&r(d,f,m);},data:s};return Reflect.set(a.attributes,H,t),Reflect.set(a.attributes,j,o),Reflect.set(a.props,k,{get(d,c){return u.getValue(d,c)},set(d,c){u.setValue(d,c);}}),a},Ce={id:"xhs-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[g("允许复制","pc-xhs-allowCopy",!0,void 0,"可以选择文字并复制"),g("新标签页打开文章","pc-xhs-open-blank-article",!1,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",forms:[{text:"",type:"forms",forms:[g("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",!1,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),g("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",!1,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[g("【屏蔽】广告","pc-xhs-shieldAd",!0,void 0,"屏蔽元素"),g("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",!0,void 0,"屏蔽会自动弹出的登录弹窗"),g("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",!1,void 0,"屏蔽元素"),g("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",!1,void 0,"屏蔽元素")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[g("劫持Vue","pc-xhs-hook-vue",!0,void 0,"恢复__vue__属性")]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[G("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{l.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),G("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),g("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]}]},Te=function(e,t,o,i,r,n,s,a,d){let c={text:e,type:"slider",description:a,attributes:{},props:{},getValue(){return this.props[k].get(t,o)},getToolTipContent(m){return typeof s=="function"?s(m):`${m}`},callback(m,f){typeof n=="function"&&n(m,f)||this.props[k].set(t,f);},min:i,max:r,step:d};return Reflect.set(c.attributes,H,t),Reflect.set(c.attributes,j,o),Reflect.set(c.props,k,{get(m,f){return u.getValue(m,f)},set(m,f){u.setValue(m,f);}}),c},Ee={id:"xhs-panel-config-article",title:"笔记",forms:[{type:"forms",text:"功能",forms:[g("显示发布、修改的绝对时间","pc-xhs-article-showPubsliushTime",!1,void 0,"")]},{text:"笔记宽屏",type:"forms",forms:[g("启用","pc-xhs-article-fullWidth",!1,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),Te("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(e,t)=>{let o=document.querySelector("#noteContainer");if(!o){l.error("未找到笔记容器");return}o.style.width=`${t}vw`;},e=>`${e}%，默认：90%`,"调整笔记页面占据的页面范围")]}]},Ve={id:"little-red-book-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[G("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{l.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),G("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),g("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[g("【屏蔽】广告","little-red-book-shieldAd",!0,void 0,"如：App内打开"),g("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",!0,void 0,"建议开启"),g("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",!0,void 0,"建议开启")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[g("劫持Vue","little-red-book-hijack-vue",!1,void 0,"恢复__vue__属性")]}]}]}]},B={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}},info:{get width(){return "350px"},get height(){return "250px"}}},u={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return u.$data.__data==null&&(u.$data.__data=new p.Dictionary),u.$data.__data},get oneSuccessExecMenu(){return u.$data.__oneSuccessExecMenu==null&&(u.$data.__oneSuccessExecMenu=new p.Dictionary),u.$data.__oneSuccessExecMenu},get onceExec(){return u.$data.__onceExec==null&&(u.$data.__onceExec=new p.Dictionary),u.$data.__onceExec},get scriptName(){return W},key:M,attributeKeyName:H,attributeDefaultValueName:j},$listener:{get listenData(){return u.$data.__listenData==null&&(u.$data.__listenData=new p.Dictionary),u.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return _.top===_.self},initExtensionsMenu(){_.top===_.self&&se.add([{key:"show_pops_panel_setting",text:"⚙ 移动端-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"show_pops_panel_setting",text:"⚙ PC-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPCPanel();}}]);},initPanelDefaultValue(){let e=this;function t(r){if(!r.attributes)return;let n={},s=r.attributes[H];s!=null&&(n[s]=r.attributes[j]);let a=r.attributes[ye];if(typeof a=="function"){let m=a();if(typeof m=="boolean"&&!m)return}let d=r.attributes[ke];d&&typeof d=="object"&&Object.assign(n,d);let c=Object.keys(n);if(!c.length){l.warn(["请先配置键",r]);return}c.forEach(m=>{let f=n[m];e.$data.data.has(m)&&l.warn("请检查该key(已存在): "+m),e.$data.data.set(m,f);});}function o(r){for(let n=0;n<r.length;n++){let s=r[n];t(s);let a=s.forms;a&&Array.isArray(a)&&o(a);}}let i=this.getPanelContentConfig().concat(this.getPCPanelContentConfig());for(let r=0;r<i.length;r++){let n=i[r];if(!n.forms)continue;let s=n.forms;s&&Array.isArray(s)&&o(s);}},setValue(e,t){let o=$(M,{}),i=o[e];o[e]=t,U(M,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,i,t);},getValue(e,t){let i=$(M,{})[e];return i??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=$(M,{}),o=t[e];Reflect.deleteProperty(t,e),U(M,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,t){let o=Math.random();return this.$listener.listenData.set(e,{id:o,key:e,callback:t}),o},removeValueChangeListener(e){let t=null;for(const[o,i]of this.$listener.listenData.entries())if(i.id===e){t=o;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},triggerMenuValueChange(e,t,o){if(this.$listener.listenData.has(e)){let i=this.$listener.listenData.get(e);if(typeof i.callback=="function"){let r=this.getValue(e),n=r,s=r;typeof t<"u"&&arguments.length>1&&(n=t),typeof o<"u"&&arguments.length>2&&(s=o),i.callback(e,s,n);}}},hasKey(e){let t=$(M,{});return e in t},execMenu(e,t,o=!1){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let i=[];typeof e=="object"&&Array.isArray(e)?i=[...e]:i.push(e);let r;for(let n=0;n<i.length;n++){const s=i[n];if(!this.$data.data.has(s)){l.warn(`${e} 键不存在`);return}let a=u.getValue(s);if(o&&(a=!a),!a)break;r=a;}r&&t(r);},execMenuOnce(e,t,o,i){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){l.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let r=()=>{let c=u.getValue(e);return typeof o=="function"?o(e,c):c},n=[],s=c=>{let m=r(),f=[];if(c instanceof HTMLStyleElement?f=[c]:Array.isArray(c)&&(f=[...c.filter(x=>x!=null&&x instanceof HTMLStyleElement)]),m)n=n.concat(f);else for(let x=0;x<f.length;x++)f[x].remove(),f.splice(x,1),x--;},a=c=>{let m=[];if(c){let f=t(c,s);f instanceof HTMLStyleElement?m=[f]:Array.isArray(f)&&(m=[...f.filter(x=>x!=null&&x instanceof HTMLStyleElement)]);}for(let f=0;f<n.length;f++)n[f].remove(),n.splice(f,1),f--;n=[...m];};this.addValueChangeListener(e,(c,m,f)=>{let x=f;typeof i=="function"&&(x=i(c,f,m)),a(x);});let d=r();d&&a(d);},execInheritMenuOnce(e,t,o,i){let r=this;const n=(s,a)=>{let d=r.getValue(s),c=r.getValue(a);if(typeof i=="function"){let m=i(d,c);if(m!==void 0)return m}return d};this.execMenuOnce(e,o,()=>n(e,t),()=>n(e,t)),this.execMenuOnce(t,()=>{},()=>!1,()=>(this.triggerMenuValueChange(e),!1));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){ee.panel({title:{text:`${W}-移动端设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:B.setting.width,height:B.setting.height,drag:!0,only:!0});},showPCPanel(){ee.panel({title:{text:`${W}-设置`,position:"center",html:!1,style:""},content:this.getPCPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:B.setting.width,height:B.setting.height,drag:!0,only:!0});},getPanelContentConfig(){return [Ve,Se,Me]},getPCPanelContentConfig(){return [Ce,Ee]}},K={webpackChunkranchi(){let e;Object.defineProperty(_,"webpackChunkranchi",{get(){return e},set(o){e=o;const i=e.push;e.push=function(...r){return r[0][0],typeof r[0][1]=="object"&&Object.keys(r[0][1]).forEach((n,s)=>{if(typeof r[0][1][n]=="function"&&r[0][1][n].toString().includes("是否打开小红书App?")&&u.getValue("little-red-book-hijack-webpack-mask"))l.success(["成功劫持各种弹窗/遮罩层："+n]),r[0][1][n]=function(){};else if(typeof r[0][1][n]=="function"&&r[0][1][n].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&r[0][1][n].toString().includes("jumpToApp")&&u.getValue("little-red-book-hijack-webpack-scheme")){let a=r[0][1][n];r[0][1][n]=function(...d){l.success(["成功劫持scheme唤醒",d]);let c=d[2].d;d[2].d=function(...m){var f;if(m.length===2&&typeof((f=m[1])==null?void 0:f.Z)=="function"){let x=m[1].Z;x.toString()==="function(){return y}"&&(m[1].Z=function(...T){let E=x.call(this,...T);return typeof E=="function"&&E.toString().includes("jumpToApp")?function(){return {jumpToApp(V){var w;if(l.success(["拦截唤醒",V]),(w=V.deeplink)!=null&&w.startsWith("xhsdiscover://user/")){let S=`https://www.xiaohongshu.com/user/profile/${V.deeplink.replace(/^xhsdiscover:\/\/user\//,"")}`;window.open(S,"_blank");}}}}:E});}c.call(this,...m);},a.call(this,...d);};}}),i.call(this,...r)};}});},webPackVue(){let e=_.Function.prototype.apply,t=!1;_.Function.prototype.apply=function(...o){var r,n,s,a,d,c;const i=e.call(this,...o);if(!t&&o.length===2&&((r=o[0])!=null&&r.addRoute)&&((n=o[0])!=null&&n.currentRoute)&&((s=o[0])!=null&&s.getRoutes)&&((a=o[0])!=null&&a.hasRoute)&&((d=o[0])!=null&&d.install)&&((c=o[0])!=null&&c.removeRoute)){t=!0;let m=o[1][0];l.success(["成功劫持vue，version版本：",m.version]),m.mixin({mounted:function(){this.$el.__Ivue__=this;}});}return i};}},Ae=`/* 用户主页 */\r
/* 底部的-App内打开 */\r
.launch-app-container.bottom-bar,\r
/* 顶部的-打开看看 */\r
.main-container > .scroll-view-container > .launch-app-container:first-child,\r
/* 底部的-打开小红书看更多精彩内容 */\r
.bottom-launch-app-tip.show-bottom-bar {\r
  display: none !important;\r
}\r
`,X={isArticle(){return globalThis.location.pathname.startsWith("/discovery/item/")||globalThis.location.pathname.startsWith("/explore/")},isUserHome(){return globalThis.location.pathname.startsWith("/user/profile/")},isHome(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearch(){return globalThis.location.pathname.startsWith("/search_result/")}},te="https://edith.xiaohongshu.com",q={async getPageInfo(e,t="",o="",i="jpg,webp"){const r="/api/sns/web/v2/comment/page",n={note_id:e,cursor:t,top_comment_id:o,image_formats:i},s=r+"?"+p.toSearchParamsStr(n);let a=await R.get(`${te}${s}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":p.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!a.status)return;let d=p.toJSON(a.data.responseText);if(l.info(["获取页信息",d]),d.code===0||d.success)return d.data;if(d.code===-101)return;b.error(d.msg);},async getLzlPageInfo(e="",t="",o=10,i="",r="jpg,webp,avif",n=""){const s="/api/sns/web/v2/comment/sub/page";let a={note_id:e,root_comment_id:t,num:o,cursor:i,image_formats:r,top_comment_id:n};s+""+p.toSearchParamsStr(a);let d=`${te}${s}?${p.toSearchParamsStr(a)}`,c=await R.get(d,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!c.status){c.data.status===406&&p.isNotNull(c.data.responseText)?p.toJSON(c.data.responseText).code==-1?b.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):b.error("获取楼中楼信息失败"):b.error("请求异常"),l.error(["获取楼中楼信息失败",c]);return}let m=p.toJSON(c.data.responseText);if(l.info(["获取楼中楼页信息",m]),m.code===0||m.success)return m.data;b.error(m.msg);},async getSearchRecommend(e){let t=await R.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${e}`,{fetch:!0});if(!t.status)return;let o=p.toJSON(t.data.responseText);if(o.success||o.code===1e3)return o.data.sug_items}},O={allowCopy(){return l.info("允许复制"),v(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},blockBottomSearchFind(){return l.info("屏蔽底部搜索发现"),y.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},blockBottomToorBar(){return l.info("屏蔽底部工具栏"),y.addBlockCSS(".engage-bar-container")},blockAuthorHotNote(){return l.info("屏蔽视频笔记的作者热门笔记"),y.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},blockHotRecommendNote(){return l.info("屏蔽视频笔记的热门推荐"),y.addBlockCSS("#new-note-view-container .recommend-box")}},$e={optimizeVideoNoteDesc(){return l.info("优化视频笔记的描述（可滚动）"),v(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},Le=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box {\r
  display: none !important;\r
}\r
`,Q={init(){v(Le),(u.getValue("little-red-book-hijack-webpack-mask")||u.getValue("little-red-book-hijack-webpack-scheme"))&&(l.info("劫持webpack"),K.webpackChunkranchi()),u.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>O.blockBottomSearchFind()),u.execMenuOnce("little-red-book-shieldBottomToorBar",()=>O.blockBottomToorBar()),u.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>{Q.optimizeImageBrowsing();}),u.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>$e.optimizeVideoNoteDesc()),u.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>O.blockAuthorHotNote()),u.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>O.blockHotRecommendNote()),h.ready(function(){u.execMenu("little-red-book-optimizeCommentBrowsing",()=>{Q.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){l.info("优化评论浏览");const e={QmsgLoading:void 0,scrollFunc:void 0,noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){var t;this.emojiMap=((t=p.toJSON(_.localStorage.getItem("redmoji")))==null?void 0:t.redmojiMap)||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new p.LockFunction(this.scrollEvent,this),e.noteData=_.__INITIAL_STATE__.noteData.data.noteData,e.commentData=_.__INITIAL_STATE__.noteData.data.commentData,l.info(["笔记数据",e.noteData]),l.info(["评论数据",e.commentData]);},getCommentHTML(t){return `
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
								<span class="little-red-book-comments-create-time">${p.formatTime(t.create_time)}</span>
								<span class="little-red-book-comments-location">${t.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `},getCommentElement(t){var E,V;let o=t.content,i=t.create_time||parseInt(t.time),r=t.id,n=t.ip_location||t.ipLocation,s=t.sub_comment_has_more,a=parseInt(t.sub_comment_count)||0,d=t.sub_comment_cursor,c=t.sub_comments||t.subComments,m=(t.user_info||t.user).image,f=(t.user_info||t.user).nickname,x=((E=t==null?void 0:t.user_info)==null?void 0:E.user_id)||((V=t==null?void 0:t.user)==null?void 0:V.userId);o=e.converContent(o);let T=h.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${e.getCommentHTML({user_id:x,user_avatar:m,user_nickname:f,content:o,create_time:i,ip_location:n})}
					</div>
					`});if(s&&Array.isArray(c)&&(c.forEach(w=>{let L=h.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:w.user_info.user_id,user_avatar:w.user_info.image,user_nickname:w.user_info.nickname,content:e.converContent(w.content),create_time:w.create_time,ip_location:w.ip_location})});T.appendChild(L);}),a!==c.length)){let w=a-c.length,L=d,S=h.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${w} 条回复`});async function J(){let ue=b.loading("加载中，请稍后..."),P=await q.getLzlPageInfo(e.noteData.id,r,10,L,void 0);ue.close(),P&&(L=P.cursor,w=w-P.comments.length,S.innerText=`展开 ${w} 条回复`,P.comments.forEach(A=>{let de=h.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:A.user_info.user_id,user_avatar:A.user_info.image,user_nickname:A.user_info.nickname,content:e.converContent(A.content),create_time:A.create_time,ip_location:A.ip_location})});h.before(S,de);}),P.has_more||(h.off(S,"click",void 0,J,{capture:!0}),S.remove()));}h.on(S,"click",void 0,J,{capture:!0}),T.appendChild(S);}return T},converContent(t){return e.emojiNameList.forEach(o=>{t.includes(o)&&(t=t.replaceAll(o,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${e.emojiMap[o]}">`));}),t},async scrollEvent(){if(!p.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=b.loading("加载中，请稍后..."));let t=await q.getPageInfo(e.noteData.id,e.currentCursor);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!t&&(e.currentCursor=t.cursor,t.comments.forEach(o=>{let i=e.getCommentElement(o);e.commentContainer.appendChild(i);}),!t.has_more)){b.info("已加载全部评论"),e.removeScrollEventListener();return}},addSrollEventListener(){l.success("添加滚动监听事件"),h.on(document,"scroll",void 0,e.scrollFunc.run,{capture:!0,once:!1,passive:!0});},removeScrollEventListener(){l.success("移除滚动监听事件"),h.off(document,"scroll",void 0,e.scrollFunc.run,{capture:!0});}};p.waitNode(".narmal-note-container").then(async()=>{l.info("优化评论浏览-笔记元素出现");let t=document.querySelector(".note-view-container"),o=b.loading("获取评论中，请稍后..."),i=h.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
          `});e.commentContainer=i,e.init();let r=h.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${e.noteData.comments} 条评论`});i.appendChild(r);let n=await q.getPageInfo(e.noteData.id);await p.sleep(800),n?(e.currentCursor=n.cursor,n.comments.forEach(s=>{let a=e.getCommentElement(s);i.appendChild(a);}),n.has_more&&e.addSrollEventListener()):e.commentData&&e.commentData.comments&&(l.info("从固定的评论中加载"),e.commentData.comments.forEach(s=>{let a=e.getCommentElement(s);i.appendChild(a);})),o.close(),h.append(t,i);});},optimizeImageBrowsing(){l.info("优化图片浏览"),y.setGMResourceCSS(xe.Viewer);function e(t=[],o=0){let i="";t.forEach(s=>{i+=`<li><img data-src="${s}" loading="lazy"></li>`;});let r=h.createElement("ul",{innerHTML:i}),n=new we(r,{inline:!1,url:"data-src",zIndex:p.getMaxZIndex()+100,hidden:()=>{n.destroy();}});o=o<0?0:o,n.view(o),n.zoomTo(1),n.show();}h.on(document,"click",".note-image-box",function(t){let o=t.target,i=o.querySelector("img"),r=[],n=[];o.closest(".onix-carousel-item")?n=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):n=[i];let s=n.findIndex(a=>a==i);n.forEach(a=>{let d=a.getAttribute("src")||a.getAttribute("data-src")||a.getAttribute("alt");d&&r.push(d);}),l.success(["点击浏览图片👉",r[s]]),e(r,s);});}},ae={init(){h.ready(()=>{u.execMenuOnce("little-red-book-repariClick",()=>{ae.repariClick();});});},repariClick(){l.info("修复正确的点击跳转"),h.on(document,"click",void 0,function(e){var o,i,r,n,s;let t=e.target;if(l.info(["点击的按钮元素",t]),(o=t==null?void 0:t.className)!=null&&o.includes("follow-btn"))l.success("点击-关注按钮");else if(t!=null&&t.closest("button.reds-button.message-btn"))l.success("点击-私信按钮");else if(t!=null&&t.closest("div.reds-tab-item"))l.success("点击-笔记/收藏按钮");else if(t!=null&&t.closest("section.reds-note-card")){l.success("点击-笔记卡片");let a=t==null?void 0:t.closest("section.reds-note-card");a.getAttribute("id")||((n=(r=(i=p.toJSON(a.getAttribute("impression")))==null?void 0:i.noteTarget)==null?void 0:r.value)==null?void 0:n.noteId)?window.open(`https://www.xiaohongshu.com/discovery/item/${(s=t==null?void 0:t.closest("section.reds-note-card"))==null?void 0:s.getAttribute("id")}`,"_blank"):b.error("获取笔记note_id失败");}return p.preventEvent(e),!1},{capture:!0});}},Z={init(){u.execMenu("little-red-book-hijack-vue",()=>{l.info("劫持页面的Vue"),K.webPackVue();}),u.execMenuOnce("little-red-book-shieldAd",()=>(l.info("注入默认屏蔽CSS"),v(Ae))),u.execMenuOnce("little-red-book-allowCopy",()=>Z.allowCopy()),X.isArticle()?Q.init():X.isUserHome()&&ae.init();},allowCopy(){return l.info("允许复制文字"),v(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)}},Pe="",Ie={init(){u.execMenuOnce("pc-xhs-shieldAd",()=>v(Pe)),u.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.blockSelectTextVisibleSearchPosition()),u.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.blockTopToolbar()),h.ready(()=>{u.execMenuOnce("pc-xhs-shield-login-dialog",()=>{this.blockLoginContainer();});});},blockLoginContainer(){l.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),y.addBlockCSS(".login-container"),p.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:()=>{let e=document.querySelector(".login-container .icon-btn-wrapper");e&&(e.click(),l.success("登录弹窗出现，关闭"));}});},blockSelectTextVisibleSearchPosition(){return l.info("屏蔽选择文字弹出的搜索提示"),y.addBlockCSS(".search-position")},blockTopToolbar(){return l.info("【屏蔽】顶部工具栏"),[y.addBlockCSS("#headerContainer"),v(`
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
			`)]}},Re={getSearchUrl(e){return `https://www.xiaohongshu.com/search_result?keyword=${e}&source=web_explore_feed`}},I={getVue(e){if(e!=null)return e.__vue__||e.__Ivue__||e.__IVue__},getVue3(e){if(e!=null)return e.__vueParentComponent},waitVuePropToSet(e,t){if(!Array.isArray(t)){I.waitVuePropToSet(e,[t]);return}function o(){let i=null;return typeof e=="string"?i=document.querySelector(e):typeof e=="function"?i=e():e instanceof HTMLElement&&(i=e),i}t.forEach(i=>{typeof i.msg=="string"&&l.info(i.msg);function r(){let n=o();if(n==null)return !1;let s=I.getVue(n);return s==null?!1:!!i.check(s)}p.waitVueByInterval(()=>o(),r,250,1e4).then(n=>{if(!n)return;let s=o(),a=I.getVue(s);a!=null&&i.set(a);});});},goToUrl(e,t,o=!1){if(e==null){b.error("跳转Url: 获取根元素#app失败"),l.error("跳转Url: 获取根元素#app失败："+t);return}let i=I.getVue(e);if(i==null){l.error("获取vue属性失败"),b.error("获取vue属性失败");return}let r=i.$router,n=!0;if(l.info("即将跳转URL："+t),o&&(n=!1),n)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let s=new URL(t);if(s.origin===window.location.origin)t=s.pathname+s.search+s.hash;else {l.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}l.info("$router push跳转Url："+t),r.push(t);}},hookGestureReturnByVueRouter(e){function t(){l.success("触发popstate事件"),i(!0);}function o(){l.success("监听地址改变"),e.vueInstance.$router.history.push(e.hash),h.on(window,"popstate",t);}async function i(r=!1){if(h.off(window,"popstate",t),!e.callback(r))for(;;)if(e.vueInstance.$router.history.current.hash===e.hash)l.info("后退！"),e.vueInstance.$router.back(),await p.sleep(250);else return}return o(),{resumeBack:i}}},oe={init(){(u.getValue("pc-xhs-search-open-blank-btn")||u.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),u.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){function e(t,o=!0){{let i=document.querySelector("#search-input");if(i){let r=i.value,n=Re.getSearchUrl(r);l.info("搜索内容: "+r),window.open(n,o?"_blank":"_self");}else b.error("未找到搜索的输入框");}}p.waitNode("#search-input").then(t=>{t.placeholder="搜索小红书",u.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{h.listenKeyboard(t,"keydown",(o,i,r,n)=>{o==="Enter"&&!r.length&&(l.info("按下回车键"),p.preventEvent(n),t.blur(),e());});});}),p.waitNode("#search-input + .input-button .search-icon").then(t=>{u.execMenu("pc-xhs-search-open-blank-btn",()=>{h.on(t,"click",o=>{p.preventEvent(o),l.info("点击搜索按钮"),e();},{capture:!0});});});},fullWidth(){l.info("笔记宽屏");let e=u.getValue("pc-xhs-article-fullWidth-widthSize",90);return v(`
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
		`)},transformPublishTime(){l.info("转换笔记发布时间");let e=new p.LockFunction(()=>{ve(".note-content:not([data-edit-date])").forEach(t=>{var a,d;let o=I.getVue(t);if(!o)return;let i=(d=(a=o==null?void 0:o._)==null?void 0:a.props)==null?void 0:d.note;if(i==null)return;let r=i.time,n=i.lastUpdateTime,s=i.ipLocation;if(typeof r=="number"){let c=[];c.push(`发布：${p.formatTime(r)}`),typeof n=="number"&&c.push(`修改：${p.formatTime(n)}`),typeof s=="string"&&p.isNotNull(s)&&c.push(s);let m=t.querySelector(".date");h.html(m,c.join("<br>")),t.setAttribute("data-edit-date","");}});});p.mutationObserver(document,{config:{subtree:!0,childList:!0},callback:()=>{e.run();}});}},z={init(){u.execMenuOnce("pc-xhs-hook-vue",()=>{K.webPackVue();}),u.execMenuOnce("pc-xhs-allowCopy",()=>{z.allowPCCopy();}),u.execMenuOnce("pc-xhs-open-blank-article",()=>{z.openBlankArticle();}),Ie.init(),u.execMenuOnce("pc-xhs-article-showPubsliushTime",()=>{oe.transformPublishTime();}),X.isArticle()&&(l.info("Router: 笔记页面"),oe.init());},allowPCCopy(){l.success("允许复制文字"),h.on(_,"copy",void 0,function(e){p.preventEvent(e);let t=_.getSelection();return t?p.setClip(t.toString()):l.error("未选中任何内容"),!1},{capture:!0});},openBlankArticle(){l.success("新标签页打开文章"),h.on(document,"click",".feeds-container .note-item",function(e){p.preventEvent(e);let o=e.target.querySelector("a.cover[href]");o&&o.href?(l.info("跳转文章: "+o.href),window.open(o.href,"_blank")):b.error("未找到文章链接");},{capture:!0});}};v(`
.qmsg svg.animate-turn {
    fill: none;
}
`);u.init();let ce=p.isPhone(),D="change_env_set",C=$(D);se.add({key:D,text:`⚙ 自动: ${ce?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return C==null?e:e+` 手动: ${C==1?"移动端":C==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let o=parseInt(t);if(isNaN(o)){b.error("输入的不是规范的数字");return}if(!e.includes(o)){b.error("输入的值必须是0或1或2");return}o==0?re(D):U(D,o);}});C!=null?(l.info(`手动判定为${C===1?"移动端":"PC端"}`),C==1?Z.init():C==2?z.init():(b.error("意外，手动判定的值不在范围内"),re(D))):ce?(l.info("自动判定为移动端"),Z.init()):(l.info("自动判定为PC端"),z.init());

})(Qmsg, Utils, DOMUtils, pops, Viewer);