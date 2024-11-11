// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.11.11
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.5.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.8.9/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.7/dist/index.umd.js
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

(function (b, q, ue, oe, de) {
  'use strict';

  var ne=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,J=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,$=typeof GM_getValue<"u"?GM_getValue:void 0,B=typeof GM_info<"u"?GM_info:void 0,me=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,O=typeof GM_setValue<"u"?GM_setValue:void 0,pe=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,fe=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,_=typeof unsafeWindow<"u"?unsafeWindow:void 0,he=window;const ge={ElementPlus:{keyName:"ElementPlusResourceCSS",url:"https://fastly.jsdelivr.net/npm/element-plus@latest/dist/index.min.css"},Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"},Hljs:{keyName:"HljsCSS",url:"https://fastly.jsdelivr.net/npm/highlight.js@latest/styles/github-dark.min.css"}},y={addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(o=>{Array.isArray(o)?t=t.concat(o):t.push(o);}),w(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof J=="function"?J(e.keyName):"";typeof t=="string"&&t?w(t):y.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,g.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(o=>{t.onload=()=>{o(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()}},xe="小红书优化",f=q.noConflict(),g=ue.noConflict(),Y=oe,be=de,s=new f.Log(B,_.console||he.console);var te;const z=((te=B==null?void 0:B.script)==null?void 0:te.name)||xe,ie=!1;s.config({debug:ie,logMaxCount:1e3,autoClearConsole:!0,tag:!0});b.config(Object.defineProperties({html:!0,autoClose:!0,showClose:!1},{position:{get(){return c.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return c.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return c.getValue("qmsg-config-showreverse",!0)}},zIndex:{get(){let e=q.getMaxZIndex(),t=oe.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(e,t)+100}}}));const re=new f.GM_Menu({GM_getValue:$,GM_setValue:O,GM_registerMenuCommand:me,GM_unregisterMenuCommand:pe}),I=new f.Httpx(fe);I.interceptors.response.use(void 0,e=>(s.error("拦截器-请求错误",e),e.type==="onabort"?b.warning("请求取消"):e.type==="onerror"?b.error("请求异常"):e.type==="ontimeout"?b.error("请求超时"):b.error("其它错误"),e));I.config({logDetails:ie});_.Object.defineProperty,_.Function.prototype.apply,_.Function.prototype.call,_.Element.prototype.appendChild,_.setTimeout;const w=f.addStyle.bind(f);document.querySelector.bind(document);document.querySelectorAll.bind(document);const M="GM_Panel",_e="data-init",H="data-key",R="data-default-value",ve="data-init-more-value",S="data-storage-api",h=function(e,t,o,r,i,n){let a={text:e,type:"switch",description:i,attributes:{},props:{},getValue(){return !!this.props[S].get(t,o)},callback(l,m){let u=!!m;s.success(`${u?"开启":"关闭"} ${e}`),this.props[S].set(t,u);},afterAddToUListCallBack:n};return Reflect.set(a.attributes,H,t),Reflect.set(a.attributes,R,o),Reflect.set(a.props,S,{get(l,m){return c.getValue(l,m)},set(l,m){c.setValue(l,m);}}),a},we={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"",type:"forms",forms:[{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("劫持点击事件","little-red-book-repariClick",!0,void 0,"可阻止点击跳转至下载页面")]}]}]}]},ye={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"视频笔记",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("优化视频描述","little-red-book-optimizeVideoNoteDesc",!0,void 0,"让视频描述可以滚动显示更多"),h("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",!0,void 0,"建议开启"),h("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",!0,void 0,"建议开启")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("优化评论浏览","little-red-book-optimizeCommentBrowsing",!0,void 0,"加载评论，未登录最多查看1页评论(注：楼中楼评论已失效，api无法获取楼中楼评论，需要请求头X-T、X-S、X-B3-Traceid)"),h("优化图片浏览","little-red-book-optimizeImageBrowsing",!0,void 0,"更方便的浏览图片"),h("允许复制","little-red-book-allowCopy",!0,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",!0,void 0,"如：打开App弹窗、登录弹窗"),h("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",!0,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]},G=function(e,t,o,r,i,n){let a=[];typeof r=="function"?a=r():a=r;let l={text:e,type:"select",description:n,attributes:{},props:{},getValue(){return this.props[S].get(t,o)},callback(m,u,d){let p=u;s.info(`选择：${d}`),this.props[S].set(t,p),typeof i=="function"&&i(m,p,d);},data:a};return Reflect.set(l.attributes,H,t),Reflect.set(l.attributes,R,o),Reflect.set(l.props,S,{get(m,u){return c.getValue(m,u)},set(m,u){c.setValue(m,u);}}),l},Se={id:"xhs-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("允许复制","pc-xhs-allowCopy",!0,void 0,"可以选择文字并复制"),h("新标签页打开文章","pc-xhs-open-blank-article",!1,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",!1,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),h("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",!1,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("【屏蔽】广告","pc-xhs-shieldAd",!0,void 0,"屏蔽元素"),h("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",!0,void 0,"屏蔽会自动弹出的登录弹窗"),h("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",!1,void 0,"屏蔽元素"),h("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",!1,void 0,"屏蔽元素")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("劫持Vue","pc-xhs-hook-vue",!1,void 0,"恢复__vue__属性")]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[G("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{s.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),G("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),h("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]}]},ke=function(e,t,o,r,i,n,a,l,m){let u={text:e,type:"slider",description:l,attributes:{},props:{},getValue(){return this.props[S].get(t,o)},getToolTipContent(d){return typeof a=="function"?a(d):`${d}`},callback(d,p){typeof n=="function"&&n(d,p)||this.props[S].set(t,p);},min:r,max:i,step:m};return Reflect.set(u.attributes,H,t),Reflect.set(u.attributes,R,o),Reflect.set(u.props,S,{get(d,p){return c.getValue(d,p)},set(d,p){c.setValue(d,p);}}),u},Me={id:"xhs-panel-config-article",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"笔记宽屏",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("启用","pc-xhs-article-fullWidth",!1,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),ke("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(e,t)=>{let o=document.querySelector("#noteContainer");if(!o){s.error("未找到笔记容器");return}o.style.width=`${t}vw`;},e=>`${e}%，默认：90%`,"调整笔记页面占据的页面范围")]}]}]}]},Ce={id:"little-red-book-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[G("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{s.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),G("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),h("逆序弹出","qmsg-config-showreverse",!1,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("【屏蔽】广告","little-red-book-shieldAd",!0,void 0,"如：App内打开"),h("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",!0,void 0,"建议开启"),h("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",!0,void 0,"建议开启")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[h("劫持Vue","little-red-book-hijack-vue",!1,void 0,"恢复__vue__属性")]}]}]}]},j={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}},settingBig:{get width(){return window.innerWidth<800?"92vw":"800px"},get height(){return window.innerHeight<600?"80vh":"600px"}},info:{get width(){return "350px"},get height(){return "250px"}}},c={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return c.$data.__data==null&&(c.$data.__data=new f.Dictionary),c.$data.__data},get oneSuccessExecMenu(){return c.$data.__oneSuccessExecMenu==null&&(c.$data.__oneSuccessExecMenu=new f.Dictionary),c.$data.__oneSuccessExecMenu},get onceExec(){return c.$data.__onceExec==null&&(c.$data.__onceExec=new f.Dictionary),c.$data.__onceExec},get scriptName(){return z},key:M,attributeKeyName:H,attributeDefaultValueName:R},$listener:{get listenData(){return c.$data.__listenData==null&&(c.$data.__listenData=new f.Dictionary),c.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return _.top===_.self},initExtensionsMenu(){_.top===_.self&&re.add([{key:"show_pops_panel_setting",text:"⚙ 移动端-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPanel();}},{key:"show_pops_panel_setting",text:"⚙ PC-设置",autoReload:!1,isStoreValue:!1,showText(e){return e},callback:()=>{this.showPCPanel();}}]);},initPanelDefaultValue(){let e=this;function t(i){if(!i.attributes)return;let n={},a=i.attributes[H];a!=null&&(n[a]=i.attributes[R]);let l=i.attributes[_e];if(typeof l=="function"){let d=l();if(typeof d=="boolean"&&!d)return}let m=i.attributes[ve];m&&typeof m=="object"&&Object.assign(n,m);let u=Object.keys(n);if(!u.length){s.warn(["请先配置键",i]);return}u.forEach(d=>{let p=n[d];e.$data.data.has(d)&&s.warn("请检查该key(已存在): "+d),e.$data.data.set(d,p);});}function o(i){for(let n=0;n<i.length;n++){let a=i[n];t(a);let l=a.forms;l&&Array.isArray(l)&&o(l);}}let r=this.getPanelContentConfig().concat(this.getPCPanelContentConfig());for(let i=0;i<r.length;i++){let n=r[i];if(!n.forms)continue;let a=n.forms;a&&Array.isArray(a)&&o(a);}},setValue(e,t){let o=$(M,{}),r=o[e];o[e]=t,O(M,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,r,t);},getValue(e,t){let r=$(M,{})[e];return r??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=$(M,{}),o=t[e];Reflect.deleteProperty(t,e),O(M,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,t){let o=Math.random();return this.$listener.listenData.set(e,{id:o,key:e,callback:t}),o},removeValueChangeListener(e){let t=null;for(const[o,r]of this.$listener.listenData.entries())if(r.id===e){t=o;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},triggerMenuValueChange(e,t,o){if(this.$listener.listenData.has(e)){let r=this.$listener.listenData.get(e);if(typeof r.callback=="function"){let i=this.getValue(e),n=i,a=i;typeof t<"u"&&arguments.length>1&&(n=t),typeof o<"u"&&arguments.length>2&&(a=o),r.callback(e,a,n);}}},hasKey(e){let t=$(M,{});return e in t},execMenu(e,t,o=!1){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let r=[];typeof e=="object"&&Array.isArray(e)?r=[...e]:r.push(e);let i;for(let n=0;n<r.length;n++){const a=r[n];if(!this.$data.data.has(a)){s.warn(`${e} 键不存在`);return}let l=c.getValue(a);if(o&&(l=!l),!l)break;i=l;}i&&t(i);},execMenuOnce(e,t,o,r){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){s.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let i=()=>{let u=c.getValue(e);return typeof o=="function"?o(e,u):u},n=[],a=u=>{let d=i(),p=[];if(u instanceof HTMLStyleElement?p=[u]:Array.isArray(u)&&(p=[...u.filter(x=>x!=null&&x instanceof HTMLStyleElement)]),d)n=n.concat(p);else for(let x=0;x<p.length;x++)p[x].remove(),p.splice(x,1),x--;},l=u=>{let d=[];if(u){let p=t(u,a);p instanceof HTMLStyleElement?d=[p]:Array.isArray(p)&&(d=[...p.filter(x=>x!=null&&x instanceof HTMLStyleElement)]);}for(let p=0;p<n.length;p++)n[p].remove(),n.splice(p,1),p--;n=[...d];};this.addValueChangeListener(e,(u,d,p)=>{let x=p;typeof r=="function"&&(x=r(u,p,d)),l(x);});let m=i();m&&l(m);},execInheritMenuOnce(e,t,o,r){let i=this;const n=(a,l)=>{let m=i.getValue(a),u=i.getValue(l);if(typeof r=="function"){let d=r(m,u);if(d!==void 0)return d}return m};this.execMenuOnce(e,o,()=>n(e,t),()=>n(e,t)),this.execMenuOnce(t,()=>{},()=>!1,()=>(this.triggerMenuValueChange(e),!1));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){Y.panel({title:{text:`${z}-移动端设置`,position:"center",html:!1,style:""},content:this.getPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:j.setting.width,height:j.setting.height,drag:!0,only:!0});},showPCPanel(){Y.panel({title:{text:`${z}-设置`,position:"center",html:!1,style:""},content:this.getPCPanelContentConfig(),mask:{enable:!0,clickEvent:{toClose:!0,toHide:!1}},width:j.setting.width,height:j.setting.height,drag:!0,only:!0});},getPanelContentConfig(){return [Ce,we,ye]},getPCPanelContentConfig(){return [Se,Me]}},Z={webpackChunkranchi(){let e;Object.defineProperty(_,"webpackChunkranchi",{get(){return e},set(o){e=o;const r=e.push;e.push=function(...i){return i[0][0],typeof i[0][1]=="object"&&Object.keys(i[0][1]).forEach((n,a)=>{if(typeof i[0][1][n]=="function"&&i[0][1][n].toString().includes("是否打开小红书App?")&&c.getValue("little-red-book-hijack-webpack-mask"))s.success(["成功劫持各种弹窗/遮罩层："+n]),i[0][1][n]=function(){};else if(typeof i[0][1][n]=="function"&&i[0][1][n].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&i[0][1][n].toString().includes("jumpToApp")&&c.getValue("little-red-book-hijack-webpack-scheme")){let l=i[0][1][n];i[0][1][n]=function(...m){s.success(["成功劫持scheme唤醒",m]);let u=m[2].d;m[2].d=function(...d){var p;if(d.length===2&&typeof((p=d[1])==null?void 0:p.Z)=="function"){let x=d[1].Z;x.toString()==="function(){return y}"&&(d[1].Z=function(...T){let E=x.call(this,...T);return typeof E=="function"&&E.toString().includes("jumpToApp")?function(){return {jumpToApp(A){var v;if(s.success(["拦截唤醒",A]),(v=A.deeplink)!=null&&v.startsWith("xhsdiscover://user/")){let k=`https://www.xiaohongshu.com/user/profile/${A.deeplink.replace(/^xhsdiscover:\/\/user\//,"")}`;window.open(k,"_blank");}}}}:E});}u.call(this,...d);},l.call(this,...m);};}}),r.call(this,...i)};}});},webPackVue(){let e=_.Function.prototype.apply,t=!1;_.Function.prototype.apply=function(...o){var i,n,a,l,m,u;const r=e.call(this,...o);if(!t&&o.length===2&&((i=o[0])!=null&&i.addRoute)&&((n=o[0])!=null&&n.currentRoute)&&((a=o[0])!=null&&a.getRoutes)&&((l=o[0])!=null&&l.hasRoute)&&((m=o[0])!=null&&m.install)&&((u=o[0])!=null&&u.removeRoute)){t=!0;let d=o[1][0];s.success(["成功劫持vue，version版本：",d.version]),d.mixin({mounted:function(){this.$el.__Ivue__=this;}});}return r};}},Te=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box,\r
/* 首页-顶部的打开看看 */\r
.launch-app-container {\r
  display: none !important;\r
}\r
`,X={isArticle(){return globalThis.location.pathname.startsWith("/discovery/item/")||globalThis.location.pathname.startsWith("/explore/")},isUserHome(){return globalThis.location.pathname.startsWith("/user/profile/")},isHome(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearch(){return globalThis.location.pathname.startsWith("/search_result/")}},ee="https://edith.xiaohongshu.com",W={async getPageInfo(e,t="",o="",r="jpg,webp"){const i="/api/sns/web/v2/comment/page",n={note_id:e,cursor:t,top_comment_id:o,image_formats:r},a=i+"?"+f.toSearchParamsStr(n);let l=await I.get(`${ee}${a}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":f.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!l.status)return;let m=f.toJSON(l.data.responseText);if(s.info(["获取页信息",m]),m.code===0||m.success)return m.data;if(m.code===-101)return;b.error(m.msg);},async getLzlPageInfo(e="",t="",o=10,r="",i="jpg,webp,avif",n=""){const a="/api/sns/web/v2/comment/sub/page";let l={note_id:e,root_comment_id:t,num:o,cursor:r,image_formats:i,top_comment_id:n};a+""+f.toSearchParamsStr(l);let m=`${ee}${a}?${f.toSearchParamsStr(l)}`,u=await I.get(m,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!u.status){u.data.status===406&&f.isNotNull(u.data.responseText)?f.toJSON(u.data.responseText).code==-1?b.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):b.error("获取楼中楼信息失败"):b.error("请求异常"),s.error(["获取楼中楼信息失败",u]);return}let d=f.toJSON(u.data.responseText);if(s.info(["获取楼中楼页信息",d]),d.code===0||d.success)return d.data;b.error(d.msg);},async getSearchRecommend(e){let t=await I.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${e}`,{fetch:!0});if(!t.status)return;let o=f.toJSON(t.data.responseText);if(o.success||o.code===1e3)return o.data.sug_items}},N={allowCopy(){return s.info("允许复制"),w(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},shieldBottomSearchFind(){return s.info("屏蔽底部搜索发现"),y.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},shieldBottomToorBar(){return s.info("屏蔽底部工具栏"),y.addBlockCSS(".engage-bar-container")},shieldAuthorHotNote(){return s.info("屏蔽视频笔记的作者热门笔记"),y.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},shieldHotRecommendNote(){return s.info("屏蔽视频笔记的热门推荐"),y.addBlockCSS("#new-note-view-container .recommend-box")}},Ee={init(){},optimizeVideoNoteDesc(){return s.info("优化视频笔记的描述（可滚动）"),w(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},F={init(){(c.getValue("little-red-book-hijack-webpack-mask")||c.getValue("little-red-book-hijack-webpack-scheme"))&&(s.info("劫持webpack"),Z.webpackChunkranchi()),c.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>N.shieldBottomSearchFind()),c.execMenuOnce("little-red-book-shieldBottomToorBar",()=>N.shieldBottomToorBar()),c.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>{F.optimizeImageBrowsing();}),c.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>Ee.optimizeVideoNoteDesc()),c.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>N.shieldAuthorHotNote()),c.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>N.shieldHotRecommendNote()),g.ready(function(){c.execMenu("little-red-book-optimizeCommentBrowsing",()=>{F.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){s.info("优化评论浏览");const e={QmsgLoading:void 0,scrollFunc:void 0,noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){var t;this.emojiMap=((t=f.toJSON(_.localStorage.getItem("redmoji")))==null?void 0:t.redmojiMap)||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new f.LockFunction(this.scrollEvent,this),e.noteData=_.__INITIAL_STATE__.noteData.data.noteData,e.commentData=_.__INITIAL_STATE__.noteData.data.commentData,s.info(["笔记数据",e.noteData]),s.info(["评论数据",e.commentData]);},getCommentHTML(t){return `
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
								<span class="little-red-book-comments-create-time">${f.formatTime(t.create_time)}</span>
								<span class="little-red-book-comments-location">${t.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `},getCommentElement(t){var E,A;let o=t.content,r=t.create_time||parseInt(t.time),i=t.id,n=t.ip_location||t.ipLocation,a=t.sub_comment_has_more,l=parseInt(t.sub_comment_count)||0,m=t.sub_comment_cursor,u=t.sub_comments||t.subComments,d=(t.user_info||t.user).image,p=(t.user_info||t.user).nickname,x=((E=t==null?void 0:t.user_info)==null?void 0:E.user_id)||((A=t==null?void 0:t.user)==null?void 0:A.userId);o=e.converContent(o);let T=g.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${e.getCommentHTML({user_id:x,user_avatar:d,user_nickname:p,content:o,create_time:r,ip_location:n})}
					</div>
					`});if(a&&Array.isArray(u)&&(u.forEach(v=>{let L=g.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:v.user_info.user_id,user_avatar:v.user_info.image,user_nickname:v.user_info.nickname,content:e.converContent(v.content),create_time:v.create_time,ip_location:v.ip_location})});T.appendChild(L);}),l!==u.length)){let v=l-u.length,L=m,k=g.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${v} 条回复`});async function K(){let ae=b.loading("加载中，请稍后..."),P=await W.getLzlPageInfo(e.noteData.id,i,10,L,void 0);ae.close(),P&&(L=P.cursor,v=v-P.comments.length,k.innerText=`展开 ${v} 条回复`,P.comments.forEach(V=>{let ce=g.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:V.user_info.user_id,user_avatar:V.user_info.image,user_nickname:V.user_info.nickname,content:e.converContent(V.content),create_time:V.create_time,ip_location:V.ip_location})});g.before(k,ce);}),P.has_more||(g.off(k,"click",void 0,K,{capture:!0}),k.remove()));}g.on(k,"click",void 0,K,{capture:!0}),T.appendChild(k);}return T},converContent(t){return e.emojiNameList.forEach(o=>{t.includes(o)&&(t=t.replaceAll(o,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${e.emojiMap[o]}">`));}),t},async scrollEvent(){if(!f.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=b.loading("加载中，请稍后..."));let t=await W.getPageInfo(e.noteData.id,e.currentCursor);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!t&&(e.currentCursor=t.cursor,t.comments.forEach(o=>{let r=e.getCommentElement(o);e.commentContainer.appendChild(r);}),!t.has_more)){b.info("已加载全部评论"),e.removeScrollEventListener();return}},addSrollEventListener(){s.success("添加滚动监听事件"),g.on(document,"scroll",void 0,e.scrollFunc.run,{capture:!0,once:!1,passive:!0});},removeScrollEventListener(){s.success("移除滚动监听事件"),g.off(document,"scroll",void 0,e.scrollFunc.run,{capture:!0});}};f.waitNode(".narmal-note-container").then(async()=>{s.info("优化评论浏览-笔记元素出现");let t=document.querySelector(".note-view-container"),o=b.loading("获取评论中，请稍后..."),r=g.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
          `});e.commentContainer=r,e.init();let i=g.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${e.noteData.comments} 条评论`});r.appendChild(i);let n=await W.getPageInfo(e.noteData.id);await f.sleep(800),n?(e.currentCursor=n.cursor,n.comments.forEach(a=>{let l=e.getCommentElement(a);r.appendChild(l);}),n.has_more&&e.addSrollEventListener()):e.commentData&&e.commentData.comments&&(s.info("从固定的评论中加载"),e.commentData.comments.forEach(a=>{let l=e.getCommentElement(a);r.appendChild(l);})),o.close(),g.append(t,r);});},optimizeImageBrowsing(){s.info("优化图片浏览"),y.setGMResourceCSS(ge.Viewer);function e(t=[],o=0){let r="";t.forEach(a=>{r+=`<li><img data-src="${a}" loading="lazy"></li>`;});let i=g.createElement("ul",{innerHTML:r}),n=new be(i,{inline:!1,url:"data-src",zIndex:f.getMaxZIndex()+100,hidden:()=>{n.destroy();}});o=o<0?0:o,n.view(o),n.zoomTo(1),n.show();}g.on(document,"click",".note-image-box",function(t){let o=t.target,r=o.querySelector("img"),i=[],n=[];o.closest(".onix-carousel-item")?n=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):n=[r];let a=n.findIndex(l=>l==r);n.forEach(l=>{let m=l.getAttribute("src")||l.getAttribute("data-src")||l.getAttribute("alt");m&&i.push(m);}),s.success(["点击浏览图片👉",i[a]]),e(i,a);});}},se={init(){g.ready(()=>{c.execMenuOnce("little-red-book-repariClick",()=>{se.repariClick();});});},repariClick(){s.info("修复正确的点击跳转"),g.on(document,"click",void 0,function(e){var o,r,i,n,a;let t=e.target;if(s.info(["点击的按钮元素",t]),(o=t==null?void 0:t.className)!=null&&o.includes("follow-btn"))s.success("点击-关注按钮");else if(t!=null&&t.closest("button.reds-button.message-btn"))s.success("点击-私信按钮");else if(t!=null&&t.closest("div.reds-tab-item"))s.success("点击-笔记/收藏按钮");else if(t!=null&&t.closest("section.reds-note-card")){s.success("点击-笔记卡片");let l=t==null?void 0:t.closest("section.reds-note-card");l.getAttribute("id")||((n=(i=(r=f.toJSON(l.getAttribute("impression")))==null?void 0:r.noteTarget)==null?void 0:i.value)==null?void 0:n.noteId)?window.open(`https://www.xiaohongshu.com/discovery/item/${(a=t==null?void 0:t.closest("section.reds-note-card"))==null?void 0:a.getAttribute("id")}`,"_blank"):b.error("获取笔记note_id失败");}return f.preventEvent(e),!1},{capture:!0});}},Q={init(){c.execMenu("little-red-book-hijack-vue",()=>{s.info("劫持页面的Vue"),Z.webPackVue();}),c.execMenuOnce("little-red-book-shieldAd",()=>(s.info("注入默认屏蔽CSS"),w(Te))),c.execMenuOnce("little-red-book-allowCopy",()=>Q.allowCopy()),X.isArticle()?F.init():X.isUserHome()&&se.init();},allowCopy(){return s.info("允许复制文字"),w(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)}},Ae="",Ve={init(){c.execMenuOnce("pc-xhs-shieldAd",()=>w(Ae)),c.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.shieldSelectTextVisibleSearchPosition()),c.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.shieldTopToolbar()),g.ready(()=>{c.execMenuOnce("pc-xhs-shield-login-dialog",()=>{this.shieldLoginContainer();});});},shieldLoginContainer(){s.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),y.addBlockCSS(".login-container"),f.mutationObserver(document.body,{config:{subtree:!0,childList:!0},callback:()=>{let e=document.querySelector(".login-container .icon-btn-wrapper");e&&(e.click(),s.success("登录弹窗出现，关闭"));}});},shieldSelectTextVisibleSearchPosition(){return s.info("屏蔽选择文字弹出的搜索提示"),y.addBlockCSS(".search-position")},shieldTopToolbar(){return s.info("【屏蔽】顶部工具栏"),[y.addBlockCSS("#headerContainer"),w(`
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
			`)]}},$e={getSearchUrl(e){return `https://www.xiaohongshu.com/search_result?keyword=${e}&source=web_explore_feed`}},Le={init(){(c.getValue("pc-xhs-search-open-blank-btn")||c.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),c.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){function e(t,o=!0){{let r=document.querySelector("#search-input");if(r){let i=r.value,n=$e.getSearchUrl(i);s.info("搜索内容: "+i),window.open(n,o?"_blank":"_self");}else b.error("未找到搜索的输入框");}}f.waitNode("#search-input").then(t=>{t.placeholder="搜索小红书",c.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{g.listenKeyboard(t,"keydown",(o,r,i,n)=>{o==="Enter"&&!i.length&&(s.info("按下回车键"),f.preventEvent(n),t.blur(),e());});});}),f.waitNode("#search-input + .input-button .search-icon").then(t=>{c.execMenu("pc-xhs-search-open-blank-btn",()=>{g.on(t,"click",o=>{f.preventEvent(o),s.info("点击搜索按钮"),e();},{capture:!0});});});},fullWidth(){s.info("笔记宽屏");let e=c.getValue("pc-xhs-article-fullWidth-widthSize",90);return w(`
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
		`)}},U={init(){c.execMenu("pc-xhs-hook-vue",()=>{Z.webPackVue();}),c.execMenu("pc-xhs-allowCopy",()=>{U.allowPCCopy();}),c.execMenu("pc-xhs-open-blank-article",()=>{U.openBlankArticle();}),Ve.init(),X.isArticle()&&(s.info("Router: 笔记页面"),Le.init());},allowPCCopy(){s.success("允许复制文字"),g.on(_,"copy",void 0,function(e){f.preventEvent(e);let t=_.getSelection();return t?f.setClip(t.toString()):s.error("未选中任何内容"),!1},{capture:!0});},openBlankArticle(){s.success("新标签页打开文章"),g.on(document,"click",".feeds-container .note-item",function(e){f.preventEvent(e);let o=e.target.querySelector("a[href]");o&&o.href?(s.info("跳转文章: "+o.href),window.open(o.href,"_blank")):b.error("未找到文章链接");},{capture:!0});}};w(`
.qmsg svg.animate-turn {
    fill: none;
}
`);c.init();let le=f.isPhone(),D="change_env_set",C=$(D);re.add({key:D,text:`⚙ 自动: ${le?"移动端":"PC端"}`,autoReload:!1,isStoreValue:!1,showText(e){return C==null?e:e+` 手动: ${C==1?"移动端":C==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let o=parseInt(t);if(isNaN(o)){b.error("输入的不是规范的数字");return}if(!e.includes(o)){b.error("输入的值必须是0或1或2");return}o==0?ne(D):O(D,o);}});C!=null?(s.info(`手动判定为${C===1?"移动端":"PC端"}`),C==1?Q.init():C==2?U.init():(b.error("意外，手动判定的值不在范围内"),ne(D))):le?(s.info("自动判定为移动端"),Q.init()):(s.info("自动判定为PC端"),U.init());

})(Qmsg, Utils, DOMUtils, pops, Viewer);