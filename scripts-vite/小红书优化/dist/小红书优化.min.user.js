// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.2.12
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
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

(function (x, q, de, re, me) {
  'use strict';

  var le=typeof GM_deleteValue<"u"?GM_deleteValue:void 0,K=typeof GM_getResourceText<"u"?GM_getResourceText:void 0,P=typeof GM_getValue<"u"?GM_getValue:void 0,U=typeof GM_info<"u"?GM_info:void 0,he=typeof GM_registerMenuCommand<"u"?GM_registerMenuCommand:void 0,G=typeof GM_setValue<"u"?GM_setValue:void 0,ge=typeof GM_unregisterMenuCommand<"u"?GM_unregisterMenuCommand:void 0,be=typeof GM_xmlhttpRequest<"u"?GM_xmlhttpRequest:void 0,g=typeof unsafeWindow<"u"?unsafeWindow:void 0,_e=window;const xe={Viewer:{keyName:"ViewerCSS",url:"https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"}},w={addBlockCSS(...e){let t=[];if(e.length!==0&&!(e.length===1&&typeof e[0]=="string"&&e[0].trim()===""))return e.forEach(o=>{Array.isArray(o)?t=t.concat(o):t.push(o);}),y(`${t.join(`,
`)}{display: none !important;}`)},setGMResourceCSS(e){let t=typeof K=="function"?K(e.keyName):"";typeof t=="string"&&t?y(t):w.loadStyleLink(e.url);},async loadStyleLink(e){let t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href=e,b.ready(()=>{document.head.appendChild(t);});},async loadScript(e){let t=document.createElement("script");return t.src=e,new Promise(o=>{t.onload=()=>{o(null);},(document.head||document.documentElement).appendChild(t);})},fixUrl(e){return e=e.trim(),e.match(/^http(s|):\/\//i)||(e.startsWith("/")||(e+="/"),e=window.location.origin+e),e},fixHttps(e){if(e.startsWith("https://")||!e.startsWith("http://"))return e;let t=new URL(e);return t.protocol="https:",t.toString()}},ve="小红书优化",m=q.noConflict(),b=de.noConflict(),Y=re,ye=me,u=new m.Log(U,g.console||_e.console);var ie;const F=((ie=U==null?void 0:U.script)==null?void 0:ie.name)||ve,se=false;u.config({debug:se,logMaxCount:1e3,autoClearConsole:true,tag:true});x.config(Object.defineProperties({html:true,autoClose:true,showClose:false},{position:{get(){return d.getValue("qmsg-config-position","bottom")}},maxNums:{get(){return d.getValue("qmsg-config-maxnums",5)}},showReverse:{get(){return d.getValue("qmsg-config-showreverse",true)}},zIndex:{get(){let e=q.getMaxZIndex(),t=re.config.InstanceUtils.getPopsMaxZIndex().zIndex;return q.getMaxValue(e,t)+100}}}));const ae=new m.GM_Menu({GM_getValue:P,GM_setValue:G,GM_registerMenuCommand:he,GM_unregisterMenuCommand:ge}),I=new m.Httpx(be);I.interceptors.response.use(void 0,e=>(u.error("拦截器-请求错误",e),e.type==="onabort"?x.warning("请求取消"):e.type==="onerror"?x.error("请求异常"):e.type==="ontimeout"?x.error("请求超时"):x.error("其它错误"),e));I.config({logDetails:se});g.Object.defineProperty,g.Function.prototype.apply,g.Function.prototype.call,g.Element.prototype.appendChild,g.setTimeout;const y=m.addStyle.bind(m);document.querySelector.bind(document);const we=document.querySelectorAll.bind(document),S="GM_Panel",ke="data-init",j="data-key",H="data-default-value",Me="data-init-more-value",k="data-storage-api",_=function(e,t,o,n,s,i){let r={text:e,type:"switch",description:s,attributes:{},props:{},getValue(){return !!this.props[k].get(t,o)},callback(l,c){let a=!!c;u.success(`${a?"开启":"关闭"} ${e}`),this.props[k].set(t,a);},afterAddToUListCallBack:i};return Reflect.set(r.attributes,j,t),Reflect.set(r.attributes,H,o),Reflect.set(r.props,k,{get(l,c){return d.getValue(l,c)},set(l,c){d.setValue(l,c);}}),r},Se={id:"little-red-book-panel-config-home",title:"主页",forms:[{text:"",type:"forms",forms:[{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_("劫持点击事件","little-red-book-repariClick",true,void 0,"可阻止点击跳转至下载页面")]}]}]}]},Ce={id:"little-red-book-panel-config-note",title:"笔记",forms:[{text:"",type:"forms",forms:[{text:"视频笔记",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_("优化视频描述","little-red-book-optimizeVideoNoteDesc",true,void 0,"让视频描述可以滚动显示更多"),_("【屏蔽】作者热门笔记","little-red-book-shieldAuthorHotNote",true,void 0,"建议开启"),_("【屏蔽】热门推荐","little-red-book-shieldHotRecommendNote",true,void 0,"建议开启")]}]}]},{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_("优化评论浏览","little-red-book-optimizeCommentBrowsing",true,void 0,"目前仅可加载部分评论"),_("优化图片浏览","little-red-book-optimizeImageBrowsing",true,void 0,"更方便的浏览图片"),_("允许复制","little-red-book-allowCopy",true,void 0,"可以复制笔记的内容")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_("劫持webpack-弹窗","little-red-book-hijack-webpack-mask",true,void 0,"如：打开App弹窗、登录弹窗"),_("劫持webpack-唤醒App","little-red-book-hijack-webpack-scheme",true,void 0,"禁止跳转商店小红书详情页/小红书")]}]}]}]},W=function(e,t,o,n,s,i){let r=[];typeof n=="function"?r=n():r=n;let l={text:e,type:"select",description:i,attributes:{},props:{},getValue(){return this.props[k].get(t,o)},callback(c,a,f){let p=a;u.info(`选择：${f}`),this.props[k].set(t,p),typeof s=="function"&&s(c,p,f);},data:r};return Reflect.set(l.attributes,j,t),Reflect.set(l.attributes,H,o),Reflect.set(l.props,k,{get(c,a){return d.getValue(c,a)},set(c,a){d.setValue(c,a);}}),l},Te={id:"xhs-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"功能",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_("允许复制","pc-xhs-allowCopy",true,void 0,"可以选择文字并复制"),_("新标签页打开文章","pc-xhs-open-blank-article",false,void 0,"点击文章不会在本页展开，会打开新标签页")]}]},{text:"搜索",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_("新标签页打开-搜索按钮","pc-xhs-search-open-blank-btn",false,void 0,"点击右边的搜索按钮直接新标签页打开搜索内容"),_("新标签页打开-回车键","pc-xhs-search-open-blank-keyboard-enter",false,void 0,"按下回车键直接新标签页打开搜索内容")]}]},{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_("【屏蔽】广告","pc-xhs-shieldAd",true,void 0,"屏蔽元素"),_("【屏蔽】登录弹窗","pc-xhs-shield-login-dialog",true,void 0,"屏蔽会自动弹出的登录弹窗"),_("【屏蔽】选择文字弹出的搜索提示","pc-xhs-shield-select-text-search-position",false,void 0,"屏蔽元素"),_("【屏蔽】顶部工具栏","pc-xhs-shield-topToolbar",false,void 0,"屏蔽元素")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_("劫持Vue","pc-xhs-hook-vue",true,void 0,"恢复__vue__属性")]}]},{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[W("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{u.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),W("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),_("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]}]},Ee=function(e,t,o,n,s,i,r,l,c){let a={text:e,type:"slider",description:l,attributes:{},props:{},getValue(){return this.props[k].get(t,o)},getToolTipContent(f){return typeof r=="function"?r(f):`${f}`},callback(f,p){typeof i=="function"&&i(f,p)||this.props[k].set(t,p);},min:n,max:s,step:c};return Reflect.set(a.attributes,j,t),Reflect.set(a.attributes,H,o),Reflect.set(a.props,k,{get(f,p){return d.getValue(f,p)},set(f,p){d.setValue(f,p);}}),a},$e={id:"xhs-panel-config-article",title:"笔记",forms:[{type:"forms",text:"功能",forms:[_("显示发布、修改的绝对时间","pc-xhs-article-showPubsliushTime",false,void 0,"")]},{text:"笔记宽屏",type:"forms",forms:[_("启用","pc-xhs-article-fullWidth",false,void 0,`让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`),Ee("占据范围","pc-xhs-article-fullWidth-widthSize",90,30,100,(e,t)=>{let o=document.querySelector("#noteContainer");if(!o){u.error("未找到笔记容器");return}o.style.width=`${t}vw`;},e=>`${e}%，默认：90%`,"调整笔记页面占据的页面范围")]}]},Ae={id:"little-red-book-panel-config-common",title:"通用",forms:[{text:"",type:"forms",forms:[{text:"Toast配置",type:"deepMenu",forms:[{text:"",type:"forms",forms:[W("Toast位置","qmsg-config-position","bottom",[{value:"topleft",text:"左上角"},{value:"top",text:"顶部"},{value:"topright",text:"右上角"},{value:"left",text:"左边"},{value:"center",text:"中间"},{value:"right",text:"右边"},{value:"bottomleft",text:"左下角"},{value:"bottom",text:"底部"},{value:"bottomright",text:"右下角"}],(e,t,o)=>{u.info("设置当前Qmsg弹出位置"+o);},"Toast显示在页面九宫格的位置"),W("最多显示的数量","qmsg-config-maxnums",3,[{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],void 0,"限制Toast显示的数量"),_("逆序弹出","qmsg-config-showreverse",false,void 0,"修改Toast弹出的顺序")]}]}]},{text:"",type:"forms",forms:[{text:"屏蔽",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_("【屏蔽】广告","little-red-book-shieldAd",true,void 0,"如：App内打开"),_("【屏蔽】底部搜索发现","little-red-book-shieldBottomSearchFind",true,void 0,"建议开启"),_("【屏蔽】底部工具栏","little-red-book-shieldBottomToorBar",true,void 0,"建议开启")]}]},{text:"劫持/拦截",type:"deepMenu",forms:[{text:"",type:"forms",forms:[_("劫持Vue","little-red-book-hijack-vue",true,void 0,"恢复__vue__属性")]}]}]}]},O={setting:{get width(){return window.innerWidth<550?"88vw":"550px"},get height(){return window.innerHeight<450?"70vh":"450px"}}},d={$data:{__data:null,__oneSuccessExecMenu:null,__onceExec:null,__listenData:null,get data(){return d.$data.__data==null&&(d.$data.__data=new m.Dictionary),d.$data.__data},get oneSuccessExecMenu(){return d.$data.__oneSuccessExecMenu==null&&(d.$data.__oneSuccessExecMenu=new m.Dictionary),d.$data.__oneSuccessExecMenu},get onceExec(){return d.$data.__onceExec==null&&(d.$data.__onceExec=new m.Dictionary),d.$data.__onceExec},get scriptName(){return F},key:S,attributeKeyName:j,attributeDefaultValueName:H},$listener:{get listenData(){return d.$data.__listenData==null&&(d.$data.__listenData=new m.Dictionary),d.$data.__listenData}},init(){this.initPanelDefaultValue(),this.initExtensionsMenu();},isTopWindow(){return g.top===g.self},initExtensionsMenu(){g.top===g.self&&ae.add([{key:"show_pops_panel_setting",text:"⚙ 移动端-设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showPanel();}},{key:"show_pops_panel_setting",text:"⚙ PC-设置",autoReload:false,isStoreValue:false,showText(e){return e},callback:()=>{this.showPCPanel();}}]);},initPanelDefaultValue(){let e=this;function t(s){if(!s.attributes)return;let i={},r=s.attributes[j];r!=null&&(i[r]=s.attributes[H]);let l=s.attributes[ke];if(typeof l=="function"){let f=l();if(typeof f=="boolean"&&!f)return}let c=s.attributes[Me];c&&typeof c=="object"&&Object.assign(i,c);let a=Object.keys(i);if(!a.length){u.warn(["请先配置键",s]);return}a.forEach(f=>{let p=i[f];e.$data.data.has(f)&&u.warn("请检查该key(已存在): "+f),e.$data.data.set(f,p);});}function o(s){for(let i=0;i<s.length;i++){let r=s[i];t(r);let l=r.forms;l&&Array.isArray(l)&&o(l);}}let n=this.getPanelContentConfig().concat(this.getPCPanelContentConfig());for(let s=0;s<n.length;s++){let i=n[s];if(!i.forms)continue;let r=i.forms;r&&Array.isArray(r)&&o(r);}},setValue(e,t){let o=P(S,{}),n=o[e];o[e]=t,G(S,o),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,n,t);},getValue(e,t){let n=P(S,{})[e];return n??(this.$data.data.has(e)?this.$data.data.get(e):t)},deleteValue(e){let t=P(S,{}),o=t[e];Reflect.deleteProperty(t,e),G(S,t),this.$listener.listenData.has(e)&&this.$listener.listenData.get(e).callback(e,o,void 0);},addValueChangeListener(e,t){let o=Math.random();return this.$listener.listenData.set(e,{id:o,key:e,callback:t}),o},removeValueChangeListener(e){let t=null;for(const[o,n]of this.$listener.listenData.entries())if(n.id===e){t=o;break}typeof t=="string"?this.$listener.listenData.delete(t):console.warn("没有找到对应的监听器");},triggerMenuValueChange(e,t,o){if(this.$listener.listenData.has(e)){let n=this.$listener.listenData.get(e);if(typeof n.callback=="function"){let s=this.getValue(e),i=s,r=s;typeof t<"u"&&arguments.length>1&&(i=t),typeof o<"u"&&arguments.length>2&&(r=o),n.callback(e,r,i);}}},hasKey(e){let t=P(S,{});return e in t},execMenu(e,t,o=false){if(!(typeof e=="string"||typeof e=="object"&&Array.isArray(e)))throw new TypeError("key 必须是字符串或者字符串数组");let n=[];typeof e=="object"&&Array.isArray(e)?n=[...e]:n.push(e);let s;for(let i=0;i<n.length;i++){const r=n[i];if(!this.$data.data.has(r)){u.warn(`${e} 键不存在`);return}let l=d.getValue(r);if(o&&(l=!l),!l)break;s=l;}s&&t(s);},execMenuOnce(e,t,o,n){if(typeof e!="string")throw new TypeError("key 必须是字符串");if(!this.$data.data.has(e)){u.warn(`${e} 键不存在`);return}if(this.$data.oneSuccessExecMenu.has(e))return;this.$data.oneSuccessExecMenu.set(e,1);let s=()=>{let a=d.getValue(e);return typeof o=="function"?o(e,a):a},i=[],r=a=>{let f=s(),p=[];if(a instanceof HTMLStyleElement?p=[a]:Array.isArray(a)&&(p=[...a.filter(h=>h!=null&&h instanceof HTMLStyleElement)]),f)i=i.concat(p);else for(let h=0;h<p.length;h++)p[h].remove(),p.splice(h,1),h--;},l=a=>{let f=[];if(a){let p=t(a,r);p instanceof HTMLStyleElement?f=[p]:Array.isArray(p)&&(f=[...p.filter(h=>h!=null&&h instanceof HTMLStyleElement)]);}for(let p=0;p<i.length;p++)i[p].remove(),i.splice(p,1),p--;i=[...f];};this.addValueChangeListener(e,(a,f,p)=>{let h=p;typeof n=="function"&&(h=n(a,p,f)),l(h);});let c=s();c&&l(c);},execInheritMenuOnce(e,t,o,n){let s=this;const i=(r,l)=>{let c=s.getValue(r),a=s.getValue(l);if(typeof n=="function"){let f=n(c,a);if(f!==void 0)return f}return c};this.execMenuOnce(e,o,()=>i(e,t),()=>i(e,t)),this.execMenuOnce(t,()=>{},()=>false,()=>(this.triggerMenuValueChange(e),false));},onceExec(e,t){if(typeof e!="string")throw new TypeError("key 必须是字符串");this.$data.onceExec.has(e)||(t(),this.$data.onceExec.set(e,1));},showPanel(){Y.panel({title:{text:`${F}-移动端设置`,position:"center",html:false,style:""},content:this.getPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},width:O.setting.width,height:O.setting.height,drag:true,only:true});},showPCPanel(){Y.panel({title:{text:`${F}-设置`,position:"center",html:false,style:""},content:this.getPCPanelContentConfig(),mask:{enable:true,clickEvent:{toClose:true,toHide:false}},width:O.setting.width,height:O.setting.height,drag:true,only:true});},getPanelContentConfig(){return [Ae,Se,Ce]},getPCPanelContentConfig(){return [Te,$e]}},ee={$data:{document_addEventListener:[],element_addEventListener:[],setTimeout:[],setInterval:[],function_apply:[],function_call:[],defineProperty:[]},document_addEventListener(e){if(this.$data.document_addEventListener.push(e),u.info("document.addEventListener hook新增劫持判断回调"),this.$data.document_addEventListener.length>1)return;const t=this;let o=new WeakMap;const n=g.document.addEventListener,s=g.document.removeEventListener;g.document.addEventListener=function(...i){let r=this,l=i[0],c=i[1],a=i[2];for(let f=0;f<t.$data.document_addEventListener.length;f++){const p=t.$data.document_addEventListener[f],h=Reflect.apply(p,this,[r,l,c,a]);if(typeof h=="function"){i[1]=h,o.set(c,{eventName:l,fn:h,options:a});break}else if(typeof h=="boolean"&&!h)return}return Reflect.apply(n,this,i)},g.document.removeEventListener=function(...i){let r=i[0],l=i[1],c=i[2];if(o.has(l)){const{eventName:a,fn:f,options:p}=o.get(l);let h=false;r===a&&(typeof c=="boolean"&&c===p||typeof c=="object"&&typeof p=="object"&&c.capture===p.capture||c==c)&&(h=true),h&&(i[1]=f);}return Reflect.apply(s,this,i)};},element_addEventListener(e){if(this.$data.element_addEventListener.push(e),u.info("Element.prototype.addEventListener hook新增劫持判断回调"),this.$data.element_addEventListener.length>1)return;const t=this;let o=new WeakMap;const n=g.Element.prototype.addEventListener,s=g.Element.prototype.removeEventListener;g.Element.prototype.addEventListener=function(...i){let r=this,l=i[0],c=i[1],a=i[2];for(let f=0;f<t.$data.element_addEventListener.length;f++){const p=t.$data.element_addEventListener[f],h=Reflect.apply(p,this,[r,l,c,a]);if(typeof h=="function"){i[1]=h,o.set(c,{eventName:l,fn:h,options:a});break}else if(typeof h=="boolean"&&!h)return}return Reflect.apply(n,this,i)},g.Element.prototype.removeEventListener=function(...i){let r=i[0],l=i[1],c=i[2];if(o.has(l)){const{eventName:a,fn:f,options:p}=o.get(l);let h=false;a===r&&(typeof c=="boolean"&&c===p||typeof c=="object"&&typeof p=="object"&&c.capture===p.capture||c==p)&&(h=true),h&&(i[1]=f);}return Reflect.apply(s,this,i)};},setTimeout(e){if(this.$data.setTimeout.push(e),u.info("window.setTimeout hook新增劫持"),this.$data.setTimeout.length>1)return;const t=this;let o=g.setTimeout;g.setTimeout=function(...n){let s=n[0],i=n[1];for(let r=0;r<t.$data.setTimeout.length;r++){const l=t.$data.setTimeout[r],c=l(s,i);if(typeof c=="boolean"&&!c)return}return Reflect.apply(o,this,n)};},setInterval(e){if(this.$data.setInterval.push(e),u.info("window.setInterval hook新增劫持"),this.$data.setInterval.length>1)return;const t=this;let o=g.setInterval;g.setInterval=function(...n){let s=n[0],i=n[1];for(let r=0;r<t.$data.setInterval.length;r++){const l=t.$data.setInterval[r],c=l(s,i);if(typeof c=="boolean"&&!c)return}return Reflect.apply(o,this,n)};},function_apply(e){if(this.$data.function_apply.push(e),u.info("Function.prototype.apply hook新增劫持"),this.$data.function_apply.length>1)return;const t=this;let o=g.Function.prototype.apply;g.Function.prototype.apply=function(...n){let s=n[0],i=n[1],r=this;for(let l=0;l<t.$data.function_apply.length;l++){const c=t.$data.function_apply[l],a=c(r,s,i);if(a!=null){n[0]=a.thisArg,n[1]=a.argArray,r=a.context;break}}return Reflect.apply(o,r,n)};},function_call(e){if(this.$data.function_call.push(e),u.info("Function.prototype.call hook新增劫持"),this.$data.function_call.length>1)return;const t=this;let o=g.Function.prototype.call;g.Function.prototype.call=function(...n){let s=n[0],i=n.slice(1),r=this;for(let l=0;l<t.$data.function_call.length;l++){const c=t.$data.function_call[l],a=c(r,s,i);if(a!=null){n[0]=a.thisArg,n.splice(1,i.length,...a.argArray),r=a.context;break}}return Reflect.apply(o,r,n)};},defineProperty(e){if(this.$data.defineProperty.push(e),u.info("Object.defineProperty hook新增劫持"),this.$data.defineProperty.length>1)return;const t=this;let o=g.Object.defineProperty;g.Object.defineProperty=function(...n){let s=n[0],i=n[1],r=n[2];for(let l=0;l<t.$data.defineProperty.length;l++){const c=t.$data.defineProperty[l],a=c(s,i,r);if(a!=null){n[0]=a.target,n[1]=a.key,n[2]=a.attributes;break}}return Reflect.apply(o,this,n)};},window_webpack(e="webpackJsonp",t,o){let n;g.Object.defineProperty(g,e,{get(){return n},set(s){u.success("成功劫持webpack，当前webpack名："+e),n=s;const i=n.push;n.push=function(...r){let l=r[0][0];return (t==l||Array.isArray(t)&&Array.isArray(l)&&JSON.stringify(t)===JSON.stringify(l))&&Object.keys(r[0][1]).forEach(c=>{let a=r[0][1][c];r[0][1][c]=function(...f){let p=a.call(this,...f);return f[0]=o(f[0]),p};}),Reflect.apply(i,this,r)};}});}},N={webpackChunkranchi(){let e;Object.defineProperty(g,"webpackChunkranchi",{get(){return e},set(o){e=o;const n=e.push;e.push=function(...s){return s[0][0],typeof s[0][1]=="object"&&Object.keys(s[0][1]).forEach((i,r)=>{if(typeof s[0][1][i]=="function"&&s[0][1][i].toString().startsWith("function(e,n,t){t.d(n,{Z:function(){return y}});")&&s[0][1][i].toString().includes("jumpToApp")&&d.getValue("little-red-book-hijack-webpack-scheme")){let l=s[0][1][i];s[0][1][i]=function(...c){u.success(["成功劫持scheme唤醒",c]);let a=c[2].d;return c[2].d=function(...f){var p;if(f.length===2&&typeof((p=f[1])==null?void 0:p.Z)=="function"){let h=f[1].Z;h.toString()==="function(){return y}"&&(f[1].Z=function(...T){let E=h.call(this,...T);return typeof E=="function"&&E.toString().includes("jumpToApp")?function(){return {jumpToApp($){var v;if(u.success(["拦截唤醒",$]),(v=$.deeplink)!=null&&v.startsWith("xhsdiscover://user/")){let A=$.deeplink.replace(/^xhsdiscover:\/\/user\//,""),M=window.location.origin+`/user/profile/${A}`;window.open(M,"_blank");}}}}:E});}return a.call(this,...f)},l.call(this,...c)};}}),n.call(this,...s)};}});},webPackVue(){let e=g.Function.prototype.apply,t=false;g.Function.prototype.apply=function(...o){var s,i,r,l,c,a;const n=e.call(this,...o);if(!t&&o.length===2&&((s=o[0])!=null&&s.addRoute)&&((i=o[0])!=null&&i.currentRoute)&&((r=o[0])!=null&&r.getRoutes)&&((l=o[0])!=null&&l.hasRoute)&&((c=o[0])!=null&&c.install)&&((a=o[0])!=null&&a.removeRoute)){t=true;let f=o[1][0];u.success(["成功劫持vue，version版本：",f.version]),f.mixin({mounted:function(){this.$el.__Ivue__=this;}});}return n};},setTimeout(){ee.setTimeout(e=>{if(e.toString()==="function(){r()}")return u.success("成功劫持setTimeout唤醒"),false});},call(){ee.function_call((e,t,o)=>{var n,s,i,r;if(((n=o[0])==null?void 0:n.label)===0&&Array.isArray((s=o[0])==null?void 0:s.ops)&&Array.isArray((i=o[0])==null?void 0:i.trys)&&typeof((r=o[0])==null?void 0:r.sent)=="function")return u.success("成功劫持call唤醒"),{argArray:[],context:e,thisArg:t}});}},Le=`/* 用户主页 */\r
/* 底部的-App内打开 */\r
.launch-app-container.bottom-bar,\r
/* 顶部的-打开看看 */\r
.main-container > .scroll-view-container > .launch-app-container:first-child,\r
/* 底部的-打开小红书看更多精彩内容 */\r
.bottom-launch-app-tip.show-bottom-bar,\r
/* 首页-顶部横幅 */\r
#app .launch-app-container[spm="NewNavBar"],\r
/* 笔记-顶部横幅 */\r
.note-view-container .nav-bar-box-expand ,\r
.note-view-container .nav-bar-box-expand+.placeholder-expand {\r
	display: none !important;\r
}\r
`,X={isArticle(){return globalThis.location.pathname.startsWith("/discovery/item/")||globalThis.location.pathname.startsWith("/explore/")},isUserHome(){return globalThis.location.pathname.startsWith("/user/profile/")},isHome(){return globalThis.location.href==="https://www.xiaohongshu.com/"||globalThis.location.href==="https://www.xiaohongshu.com"},isSearch(){return globalThis.location.pathname.startsWith("/search_result/")}},te="https://edith.xiaohongshu.com",oe={async getPageInfo(e,t="",o="",n="",s="jpg,webp"){const i="/api/sns/web/v2/comment/page",r={note_id:e,cursor:t,top_comment_id:n,image_formats:s,xsec_token:o},l=i+"?"+m.toSearchParamsStr(r);let c=await I.get(`${te}${l}`,{headers:{Accept:"application/json, text/plain, */*","User-Agent":m.getRandomPCUA(),Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"}});if(!c.status)return;let a=m.toJSON(c.data.responseText);if(u.info(["获取页信息",a]),a.code===0||a.success)return a.data;if(a.code===-101)return;x.error(a.msg);},async getLzlPageInfo(e="",t="",o=10,n="",s="jpg,webp,avif",i=""){const r="/api/sns/web/v2/comment/sub/page";let l={note_id:e,root_comment_id:t,num:o,cursor:n,image_formats:s,top_comment_id:i};r+""+m.toSearchParamsStr(l);let c=`${te}${r}?${m.toSearchParamsStr(l)}`,a=await I.get(c,{headers:{Accept:"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",Host:"edith.xiaohongshu.com",Origin:"https://www.xiaohongshu.com",Referer:"https://www.xiaohongshu.com/"},onerror(){}});if(!a.status){a.data.status===406&&m.isNotNull(a.data.responseText)?m.toJSON(a.data.responseText).code==-1?x.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败"):x.error("获取楼中楼信息失败"):x.error("请求异常"),u.error(["获取楼中楼信息失败",a]);return}let f=m.toJSON(a.data.responseText);if(u.info(["获取楼中楼页信息",f]),f.code===0||f.success)return f.data;x.error(f.msg);},async getSearchRecommend(e){let t=await I.get(`https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${e}`,{fetch:true});if(!t.status)return;let o=m.toJSON(t.data.responseText);if(o.success||o.code===1e3)return o.data.sug_items}},B={allowCopy(){return u.info("允许复制"),y(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)},blockBottomSearchFind(){return u.info("屏蔽底部搜索发现"),w.addBlockCSS(".hotlist-container",".safe-area-bottom.margin-placeholder")},blockBottomToorBar(){return u.info("屏蔽底部工具栏"),w.addBlockCSS(".engage-bar-container")},blockAuthorHotNote(){return u.info("屏蔽视频笔记的作者热门笔记"),w.addBlockCSS(".user-notes-box.user-notes-clo-layout-container")},blockHotRecommendNote(){return u.info("屏蔽视频笔记的热门推荐"),w.addBlockCSS("#new-note-view-container .recommend-box")}},Ve={optimizeVideoNoteDesc(){return u.info("优化视频笔记的描述（可滚动）"),y(`
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`)}},Pe=`/* 底部的App内打开 */\r
.bottom-button-box,\r
/* 顶部的打开看看 */\r
.nav-bar-box {\r
  display: none !important;\r
}\r
`,Q={init(){y(Pe),(d.getValue("little-red-book-hijack-webpack-mask")||d.getValue("little-red-book-hijack-webpack-scheme"))&&(u.info("劫持webpack"),N.webpackChunkranchi(),N.setTimeout(),N.call()),d.execMenuOnce("little-red-book-shieldBottomSearchFind",()=>B.blockBottomSearchFind()),d.execMenuOnce("little-red-book-shieldBottomToorBar",()=>B.blockBottomToorBar()),d.execMenuOnce("little-red-book-optimizeImageBrowsing",()=>{Q.optimizeImageBrowsing();}),d.execMenuOnce("little-red-book-optimizeVideoNoteDesc",()=>Ve.optimizeVideoNoteDesc()),d.execMenuOnce("little-red-book-shieldAuthorHotNote",()=>B.blockAuthorHotNote()),d.execMenuOnce("little-red-book-shieldHotRecommendNote",()=>B.blockHotRecommendNote()),b.ready(function(){d.execMenu("little-red-book-optimizeCommentBrowsing",()=>{Q.optimizeCommentBrowsing();});});},optimizeCommentBrowsing(){u.info("优化评论浏览");const e={QmsgLoading:void 0,scrollFunc:void 0,noteId:"",xsec_token:"",noteData:{},commentData:{},emojiMap:{},emojiNameList:[],currentCursor:void 0,commentContainer:void 0,init(){var n;this.emojiMap=((n=m.toJSON(g.localStorage.getItem("redmoji")))==null?void 0:n.redmojiMap)||{},this.emojiNameList=Object.keys(this.emojiMap),this.scrollFunc=new m.LockFunction(this.scrollEvent,this);const t=g.__INITIAL_STATE__,o=t.noteData??t.data.noteData;e.noteData=o.data.noteData,e.commentData=o.data.commentData,e.noteId=e.noteData.noteId,e.xsec_token=t.noteData.routeQuery.xsec_token,u.info(["笔记数据",e.noteData]),u.info(["评论数据",e.commentData]);},getCommentHTML(t){return `
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
            `},getCommentElement(t){var E,$;let o=t.content,n=t.create_time||parseInt(t.time),s=t.id,i=t.ip_location||t.ipLocation,r=t.sub_comment_has_more,l=parseInt(t.sub_comment_count)||0,c=t.sub_comment_cursor,a=t.sub_comments||t.subComments,f=(t.user_info||t.user).image,p=(t.user_info||t.user).nickname,h=((E=t==null?void 0:t.user_info)==null?void 0:E.user_id)||(($=t==null?void 0:t.user)==null?void 0:$.userId);o=e.converContent(o);let T=b.createElement("div",{className:"little-red-book-comments-item",innerHTML:`
					<div class="little-red-book-comments-parent">
					${e.getCommentHTML({user_id:h,user_avatar:f,user_nickname:p,content:o,create_time:n,ip_location:i})}
					</div>
					`});if(r&&Array.isArray(a)&&(a.forEach(v=>{let A=b.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:v.user_info.user_id,user_avatar:v.user_info.image,user_nickname:v.user_info.nickname,content:e.converContent(v.content),create_time:v.create_time,ip_location:v.ip_location})});T.appendChild(A);}),l!==a.length)){let v=l-a.length,A=c,M=b.createElement("div",{className:"little-red-book-comments-reply-show-more",innerText:`展开 ${v} 条回复`});async function J(){let fe=x.loading("加载中，请稍后..."),R=await oe.getLzlPageInfo(e.noteId,s,10,A,void 0);fe.close(),R&&(A=R.cursor,v=v-R.comments.length,M.innerText=`展开 ${v} 条回复`,R.comments.forEach(L=>{let pe=b.createElement("div",{className:"little-red-book-comments-reply-container",innerHTML:e.getCommentHTML({user_id:L.user_info.user_id,user_avatar:L.user_info.image,user_nickname:L.user_info.nickname,content:e.converContent(L.content),create_time:L.create_time,ip_location:L.ip_location})});b.before(M,pe);}),R.has_more||(b.off(M,"click",void 0,J,{capture:true}),M.remove()));}b.on(M,"click",void 0,J,{capture:true}),T.appendChild(M);}return T},converContent(t){return e.emojiNameList.forEach(o=>{t.includes(o)&&(t=t.replaceAll(o,`<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${e.emojiMap[o]}">`));}),t},async scrollEvent(){if(!m.isNearBottom(window.innerHeight/3))return;this.QmsgLoading==null&&(this.QmsgLoading=x.loading("加载中，请稍后..."));let t=await oe.getPageInfo(e.noteId,e.currentCursor,e.xsec_token);if(this.QmsgLoading&&(this.QmsgLoading.close(),this.QmsgLoading=void 0),!!t&&(e.currentCursor=t.cursor,t.comments.forEach(o=>{let n=e.getCommentElement(o);e.commentContainer.appendChild(n);}),!t.has_more)){x.info("已加载全部评论"),e.removeScrollEventListener();return}},addSrollEventListener(){u.success("添加滚动监听事件"),b.on(document,"scroll",void 0,e.scrollFunc.run,{capture:true,once:false,passive:true});},removeScrollEventListener(){u.success("移除滚动监听事件"),b.off(document,"scroll",void 0,e.scrollFunc.run,{capture:true});}};m.waitNode(".narmal-note-container").then(async()=>{u.info("优化评论浏览-笔记元素出现");let t=document.querySelector(".note-view-container"),o=b.createElement("div",{className:"little-red-book-comments-container",innerHTML:`
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
          `});e.commentContainer=o,e.init();let n=b.createElement("div",{className:"little-red-book-comments-total",innerHTML:`共 ${e.commentData.commentCount??e.noteData.comments} 条评论`});o.appendChild(n),e.commentData&&e.commentData.comments&&(u.info("从固定的评论中加载"),e.commentData.comments.forEach(s=>{let i=e.getCommentElement(s);o.appendChild(i);})),b.append(t,o);});},optimizeImageBrowsing(){u.info("优化图片浏览"),w.setGMResourceCSS(xe.Viewer);function e(t=[],o=0){let n="";t.forEach(r=>{n+=`<li><img data-src="${r}" loading="lazy"></li>`;});let s=b.createElement("ul",{innerHTML:n}),i=new ye(s,{inline:false,url:"data-src",zIndex:m.getMaxZIndex()+100,hidden:()=>{i.destroy();}});o=o<0?0:o,i.view(o),i.zoomTo(1),i.show();}b.on(document,"click",".note-image-box",function(t){let o=t.target,n=o.querySelector("img"),s=[],i=[];o.closest(".onix-carousel-item")?i=Array.from(o.closest(".onix-carousel-item").parentElement.querySelectorAll("img")):i=[n];let r=i.findIndex(l=>l==n);i.forEach(l=>{let c=l.getAttribute("src")||l.getAttribute("data-src")||l.getAttribute("alt");c&&s.push(c);}),u.success(["点击浏览图片👉",s[r]]),e(s,r);});}},ce={init(){b.ready(()=>{d.execMenuOnce("little-red-book-repariClick",()=>{ce.repariClick();});});},repariClick(){u.info("修复正确的点击跳转"),b.on(document,"click",void 0,function(e){var o,n,s,i,r;let t=e.target;if(u.info(["点击的按钮元素",t]),(o=t==null?void 0:t.className)!=null&&o.includes("follow-btn"))u.success("点击-关注按钮");else if(t!=null&&t.closest("button.reds-button.message-btn"))u.success("点击-私信按钮");else if(t!=null&&t.closest("div.reds-tab-item"))u.success("点击-笔记/收藏按钮");else if(t!=null&&t.closest("section.reds-note-card")){u.success("点击-笔记卡片");let l=t==null?void 0:t.closest("section.reds-note-card");l.getAttribute("id")||((i=(s=(n=m.toJSON(l.getAttribute("impression")))==null?void 0:n.noteTarget)==null?void 0:s.value)==null?void 0:i.noteId)?window.open(`https://www.xiaohongshu.com/discovery/item/${(r=t==null?void 0:t.closest("section.reds-note-card"))==null?void 0:r.getAttribute("id")}`,"_blank"):x.error("获取笔记note_id失败");}return m.preventEvent(e),false},{capture:true});}},Z={init(){d.execMenu("little-red-book-hijack-vue",()=>{u.info("劫持页面的Vue"),N.webPackVue();}),d.execMenuOnce("little-red-book-shieldAd",()=>(u.info("注入默认屏蔽CSS"),y(Le))),d.execMenuOnce("little-red-book-allowCopy",()=>Z.allowCopy()),X.isArticle()?Q.init():X.isUserHome()&&ce.init();},allowCopy(){return u.info("允许复制文字"),y(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `)}},Re="",Ie={init(){d.execMenuOnce("pc-xhs-shieldAd",()=>y(Re)),d.execMenuOnce("pc-xhs-shield-select-text-search-position",()=>this.blockSelectTextVisibleSearchPosition()),d.execMenuOnce("pc-xhs-shield-topToolbar",()=>this.blockTopToolbar()),b.ready(()=>{d.execMenuOnce("pc-xhs-shield-login-dialog",()=>{this.blockLoginContainer();});});},blockLoginContainer(){u.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现"),w.addBlockCSS(".login-container"),m.mutationObserver(document.body,{config:{subtree:true,childList:true},callback:()=>{let e=document.querySelector(".login-container .icon-btn-wrapper");e&&(e.click(),u.success("登录弹窗出现，关闭"));}});},blockSelectTextVisibleSearchPosition(){return u.info("屏蔽选择文字弹出的搜索提示"),w.addBlockCSS(".search-position")},blockTopToolbar(){return u.info("【屏蔽】顶部工具栏"),[w.addBlockCSS("#headerContainer"),y(`
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
			`)]}},Ne={getSearchUrl(e){return `https://www.xiaohongshu.com/search_result?keyword=${e}&source=web_explore_feed`}},V={getVue(e){if(e!=null)return e.__vue__||e.__Ivue__||e.__IVue__},getVue3(e){if(e!=null)return e.__vueParentComponent},waitVuePropToSet(e,t){if(!Array.isArray(t)){V.waitVuePropToSet(e,[t]);return}function o(){let n=null;return typeof e=="string"?n=document.querySelector(e):typeof e=="function"?n=e():e instanceof HTMLElement&&(n=e),n}t.forEach(n=>{typeof n.msg=="string"&&u.info(n.msg);function s(){let i=o();if(i==null)return  false;let r=V.getVue(i);return r==null?false:!!n.check(r)}m.waitVueByInterval(()=>o(),s,250,1e4).then(i=>{if(!i){typeof n.failWait=="function"&&n.failWait(true);return}let r=o(),l=V.getVue(r);if(l==null){typeof n.failWait=="function"&&n.failWait(false);return}n.set(l);});});},watchVuePropChange(e,t,o,n,s){let i=m.assign({immediate:true,deep:false},n||{});return new Promise(r=>{V.waitVuePropToSet(e,{check(l){return typeof(l==null?void 0:l.$watch)=="function"},set(l){let c=null;typeof t=="function"?c=l.$watch(()=>t(l),(a,f)=>{o(l,a,f);},i):c=l.$watch(t,(a,f)=>{o(l,a,f);},i),r(c);},failWait:s});})},goToUrl(e,t,o=false){if(e==null){x.error("跳转Url: $vueNode为空"),u.error("跳转Url: $vueNode为空："+t);return}let n=V.getVue(e);if(n==null){x.error("获取vue属性失败",{consoleLogContent:true});return}let s=n.$router,i=true;if(u.info("即将跳转URL："+t),o&&(i=false),i)window.open(t,"_blank");else {if(t.startsWith("http")||t.startsWith("//")){t.startsWith("//")&&(t=window.location.protocol+t);let r=new URL(t);if(r.origin===window.location.origin)t=r.pathname+r.search+r.hash;else {u.info("不同域名，直接本页打开，不用Router："+t),window.location.href=t;return}}u.info("$router push跳转Url："+t),s.push(t);}},hookGestureReturnByVueRouter(e){function t(){u.success("触发popstate事件"),n(true);}function o(){u.success("监听地址改变"),e.vueInstance.$router.history.push(e.hash),b.on(g,"popstate",t);}async function n(s=false){if(b.off(g,"popstate",t),!e.callback(s))for(;;)if(e.vueInstance.$router.history.current.hash===e.hash)u.info("后退！"),e.vueInstance.$router.back(),await m.sleep(250);else return}return o(),{resumeBack:n}}},ne={init(){(d.getValue("pc-xhs-search-open-blank-btn")||d.getValue("pc-xhs-search-open-blank-keyboard-enter"))&&this.optimizationSearch(),d.execMenuOnce("pc-xhs-article-fullWidth",()=>this.fullWidth());},optimizationSearch(){function e(t,o=true){{let n=document.querySelector("#search-input");if(n){let s=n.value,i=Ne.getSearchUrl(s);u.info("搜索内容: "+s),window.open(i,o?"_blank":"_self");}else x.error("未找到搜索的输入框");}}m.waitNode("#search-input").then(t=>{t.placeholder="搜索小红书",d.execMenu("pc-xhs-search-open-blank-keyboard-enter",()=>{b.listenKeyboard(t,"keydown",(o,n,s,i)=>{o==="Enter"&&!s.length&&(u.info("按下回车键"),m.preventEvent(i),t.blur(),e());});});}),m.waitNode("#search-input + .input-button .search-icon").then(t=>{d.execMenu("pc-xhs-search-open-blank-btn",()=>{b.on(t,"click",o=>{m.preventEvent(o),u.info("点击搜索按钮"),e();},{capture:true});});});},fullWidth(){u.info("笔记宽屏");let e=d.getValue("pc-xhs-article-fullWidth-widthSize",90);return y(`
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
		`)},transformPublishTime(){u.info("转换笔记发布时间");let e=new m.LockFunction(()=>{we(".note-content:not([data-edit-date])").forEach(t=>{var l,c;let o=V.getVue(t);if(!o)return;let n=(c=(l=o==null?void 0:o._)==null?void 0:l.props)==null?void 0:c.note;if(n==null)return;let s=n.time,i=n.lastUpdateTime,r=n.ipLocation;if(typeof s=="number"){let a=[];a.push(`发布：${m.formatTime(s)}`),typeof i=="number"&&a.push(`修改：${m.formatTime(i)}`),typeof r=="string"&&m.isNotNull(r)&&a.push(r);let f=t.querySelector(".date");b.html(f,a.join("<br>")),t.setAttribute("data-edit-date","");}});});m.mutationObserver(document,{config:{subtree:true,childList:true},callback:()=>{e.run();}});}},z={init(){d.execMenuOnce("pc-xhs-hook-vue",()=>{N.webPackVue();}),d.execMenuOnce("pc-xhs-allowCopy",()=>{z.allowPCCopy();}),d.execMenuOnce("pc-xhs-open-blank-article",()=>{z.openBlankArticle();}),Ie.init(),d.execMenuOnce("pc-xhs-article-showPubsliushTime",()=>{ne.transformPublishTime();}),X.isArticle()&&(u.info("Router: 笔记页面"),ne.init());},allowPCCopy(){u.success("允许复制文字"),b.on(g,"copy",void 0,function(e){m.preventEvent(e);let t=g.getSelection();return t?m.setClip(t.toString()):u.error("未选中任何内容"),false},{capture:true});},openBlankArticle(){u.success("新标签页打开文章"),b.on(document,"click",".feeds-container .note-item",function(e){m.preventEvent(e);let o=e.target.querySelector("a.cover[href]");o&&o.href?(u.info("跳转文章: "+o.href),window.open(o.href,"_blank")):x.error("未找到文章链接");},{capture:true});}};y(`
.qmsg svg.animate-turn {
    fill: none;
}
`);d.init();let ue=m.isPhone(),D="change_env_set",C=P(D);ae.add({key:D,text:`⚙ 自动: ${ue?"移动端":"PC端"}`,autoReload:false,isStoreValue:false,showText(e){return C==null?e:e+` 手动: ${C==1?"移动端":C==2?"PC端":"未知"}`},callback:()=>{let e=[0,1,2],t=window.prompt(`请输入当前脚本环境判定

自动判断: 0
移动端: 1
PC端: 2`,"0");if(!t)return;let o=parseInt(t);if(isNaN(o)){x.error("输入的不是规范的数字");return}if(!e.includes(o)){x.error("输入的值必须是0或1或2");return}o==0?le(D):G(D,o);}});C!=null?(u.info(`手动判定为${C===1?"移动端":"PC端"}`),C==1?Z.init():C==2?z.init():(x.error("意外，手动判定的值不在范围内"),le(D))):ue?(u.info("自动判定为移动端"),Z.init()):(u.info("自动判定为PC端"),z.init());

})(Qmsg, Utils, DOMUtils, pops, Viewer);