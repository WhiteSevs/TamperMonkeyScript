(function () {
  let cssResource = `@charset "utf-8";
  .xtiper{position:relative;}
  .xtiper_msg{transition-timing-function:ease-out;transition-duration:.2s;transition-property:transform,opacity;}
  .xtiper_msg{position:fixed;left:50%;z-index:99999;overflow:hidden;max-width:752px;min-height:50px;border-radius:3px;box-shadow:0 0 10px rgba(0,0,0,.2);font-size:14px;line-height:50px;opacity:0;}
  .xtiper_msg_black{background-color:rgba(0,0,0,.75);color:#fff;}
  .xtiper_msg_white{background-color:rgba(255,255,255,.95);color:#222;}
  .xtiper_msg_middle{top:50%;margin-top:-25px;transform:scale(0,0);}
  .xtiper_msg_top{top:0;transform:translate(0,-100%) scale(1,1);}
  .xtiper_msg_bottom{bottom:0;transform:translate(0,100%) scale(1,1);}
  .xtiper_msg.xon{opacity:1;}
  .xtiper_msg_middle.xon{transform:scale(1,1);}
  .xtiper_msg_top.xon{transform:translate(0,0) scale(1,1);}
  .xtiper_msg_bottom.xon{transform:translate(0,0) scale(1,1);}
  .xtiper_msg p{padding:0 24px;word-spacing:nowrap;}
  .xtiper_danmu{left:0;border:3px solid transparent;background-origin:content-box;font-weight:700;font-size:16px;opacity:1;transition-property:none;}
  .xtiper_danmu_animate{animation:danmu_animate 6s 1 linear;-webkit-animation:danmu_animate 6s 1 linear;}
  .xtiper_danmu_light{border:3px solid red;}
  @keyframes danmu_animate{100%{transform:translateX(-102%);}
  }
  .xtiper_tips{position:absolute;z-index:99999;max-width:200px;box-shadow:0 0 5px rgba(0,0,0,.3);opacity:0;transition-timing-function:ease-in;transition-duration:.1s;transition-property:opacity,transform;transform:scale(0,0);}
  .xtiper_tips.xon{opacity:1;transition-duration:.2s;transform:scale(1,1);}
  .xtiper_tips p{position:relative;z-index:2;padding:10px 16px;border-radius:3px;background-color:#000;color:#fff;font-size:12px;line-height:18px;}
  .xtiper_tips em{position:absolute;z-index:1;display:block;width:10px;height:10px;background-color:#000;box-shadow:0 0 5px rgba(0,0,0,.3);transform:rotate(45deg);}
  .xtiper_tips_left em{top:12px;right:-4px;}
  .xtiper_tips_right em{top:12px;left:-4px;}
  .xtiper_tips_top em{bottom:-4px;left:12px;}
  .xtiper_tips_bottom em{top:-4px;left:12px;}
  .xtiper_win{z-index:99999;}
  .xtiper_win_fixed{position:fixed;top:0;left:0;z-index:99999;width:100%;height:100%;}
  .xtiper_bg{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background-color:rgba(0,0,0,0);transition-timing-function:ease-in;transition-duration:.1s;transition-property:background-color,opacity;}
  .xtiper_bg.xmin{display:none;}
  .xtiper_bg_white{background-color:rgba(255,255,255,0);transition:50ms ease-in;}
  .xtiper_win.xon .xtiper_bg{background-color:rgba(0,0,0,.5);}
  .xtiper_win.xon .xtiper_bg_white{background-color:rgba(255,255,255,.5);transition:50ms ease-in;}
  .xtiper_main{position:absolute;z-index:2;width:300px;background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.2);opacity:0;transition-timing-function:ease-in;transition-duration:.15s;transition-property:opacity,transform;transform:scale(0,0);}
  .xtiper_main.xapp{background-color:transparent;}
  .xtiper_main_photo{transition-property:opacity,transform,height,top;}
  .xtiper_main_photo.xon{transition-property:opacity,transform,height;}
  .xtiper_win.xon .xtiper_main{opacity:1;transform:scale(1,1);}
  .xtiper_win.xon .xtiper_bg,.xtiper_win.xon .xtiper_main{transition-timing-function:ease-in;transition-duration:.2s;}
  .xtiper_win.xoff .xtiper_bg{opacity:0;}
  .xtiper_win.xoff .xtiper_main{opacity:0;transform:scale(0,0);}
  .xtiper_tit{position:relative;padding:0 18px;height:40px;background-color:#f8f8f8;color:#222;font-size:14px;line-height:40px;cursor:move;user-select:none;}
  .xtiper_tit:after{position:absolute;bottom:0;left:0;display:block;width:100%;height:1px;background-color:#eee;content:"";}
  .xtiper_tit_none{height:8px;background-color:#f0f0f0;}
  .xtiper_tit.xminmax{cursor:default;}
  .xtiper_tit p{overflow:hidden;margin-right:28px;text-overflow:ellipsis;white-space:nowrap;}
  .xtiper_tit.xmcss1 p{margin-right:62px;}
  .xtiper_tit.xmcss2 p{margin-right:96px;}
  .xtiper_tit.xmin p{margin-right:62px;}
  .xtiper_minmax{position:absolute;top:5px;right:6px;}
  .xtiper_close{z-index:10;}
  .xtiper_close,.xtiper_max,.xtiper_min{position:relative;float:left;box-sizing:border-box;margin-right:4px;width:30px;height:30px;background-position:center center;background-size:18px;background-repeat:no-repeat;cursor:pointer;}
  .xtiper_minmax div:last-child{margin-right:0;}
  .xtiper_close:after,.xtiper_close:before{position:absolute;top:14px;left:8px;display:block;width:14px;height:2px;background-color:#2d2c3b;content:"";}
  .xtiper_close:before{transform:rotate(45deg);}
  .xtiper_close:after{transform:rotate(-45deg);}
  .xtiper_close:hover,.xtiper_max:hover,.xtiper_min:hover{opacity:.8;}
  .xtiper_close:after,.xtiper_close:before{transition-timing-function:ease-in;transition-duration:.2s;transition-property:transform;}
  .xtiper_close:hover:before{transform:rotate(135deg);}
  .xtiper_close:hover:after{transform:rotate(45deg);}
  .xtiper_close_notit{position:absolute;top:-10px;right:-10px;margin-right:0;border:3px solid #fff;border-radius:50%;background-color:#333;transition-timing-function:ease-in;transition-duration:.2s;transition-property:background-color;}
  .xtiper_close_notit:after,.xtiper_close_notit:before{top:11px;left:5px;background-color:#fff;}
  .xtiper_close_notit:hover{background-color:#2b84d0;opacity:1;}
  .xtiper_close_notitmin:after,.xtiper_close_notitmin:before{top:7px;left:3px;width:10px;}
  .xtiper_close_notitmin{width:20px;height:20px;border-width:2px;}
  .xtiper_close_photoapp{top:6px;right:6px;background-color:transparent;}
  .xtiper_close_photoapp:hover{background-color:transparent;}
  .xtiper_close_photoapp:hover:before{transform:rotate(45deg);}
  .xtiper_close_photoapp:hover:after{transform:rotate(-45deg);}
  .xtiper_close_load{position:absolute;top:0;right:0;}
  .xtiper_photo{position:relative;overflow:hidden;transition-property:transform,opacity;}
  .xtiper_photo_ul{padding:0 60px;height:100%;}
  .xtiper_photo_ul ul{position:relative;overflow:hidden;height:calc(100% - 26px);}
  .xtiper_photo_li{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;opacity:0;transition-timing-function:ease-out;transition-duration:.3s;transition-property:transform,opacity;transform:scale(0,0);}
  .xtiper_photo_li.xon{opacity:1;transform:scale(1,1);}
  .xtiper_photo_li.xold_prev{transform:scale(1,1) translate(100%,0);}
  .xtiper_photo_li.xold_next{transform:scale(1,1) translate(-100%,0);}
  .xtiper_sheet{position:absolute;bottom:0;left:0;z-index:2;width:100%;background-color:#fff;transition:.1s ease-in;transition-property:transform;transform:translate(0,100%);}
  .xtiper_sheet_tit,.xtiper_sheet_ul{background-color:#efeff4;}
  .xtiper_win.xon .xtiper_sheet{transition:.2s ease-in;transform:translate(0,0);}
  .xtiper_win.xoff .xtiper_sheet{transform:translateY(100%);}
  .xtiper_sheet_left{text-align:left;}
  .xtiper_sheet_right{text-align:right;}
  .xtiper_sheet_center{text-align:center;}
  .xtiper_sheet_tit{padding:15px;color:#222;font-weight:700;font-size:15px;line-height:20px;}
  .xtiper_sheet_li{height:48px;border-top:1px solid #d9d9d9;background-color:#fff;color:#222;font-size:14px;line-height:48px;cursor:pointer;user-select:none;-ms-user-select:none;}
  .xtiper_sheet_li a{display:block;width:100%;color:#222;text-decoration:none;}
  .xtiper_sheet_li a:hover{color:#222;text-decoration:none;}
  .xtiper_sheet_li p{padding:0 15px;}
  .xtiper_sheet_li.xlast{margin-top:8px;border-top:0;}
  .xtiper_min{background-image:url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M949.2 560.2H74.8c-26.6 0-48.2-21.6-48.2-48.2 0-26.6 21.6-48.2 48.2-48.2H949.2c26.6 0 48.2 21.6 48.2 48.2 0 26.6-21.6 48.2-48.2 48.2z' fill='%232d2c3b'/%3E%3C/svg%3E");}
  .xtiper_min.xon{margin-right:0;background-image:url("data:image/svg+xml,%3Csvg width='2000' height='2000' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M879.1 783.6h-60.4a34.3 34.3 0 0 1 0-68.6h60.4c14.3 0 26.6-11.8 26.6-26.6V142.6c0-14.3-11.8-26.6-26.6-26.6H332.8c-14.3 0-26.6 11.8-26.6 26.6v60.4a34.3 34.3 0 0 1-68.6 0V142.6c0-52.2 42.5-94.72 94.72-94.7h546.3c52.2 0 94.72 42.5 94.72 94.7v546.3c0.5 52.2-42.5 94.72-94.2 94.7z' fill='%232c2c2c'/%3E%3Cpath d='M708.1 964.3H162.3c-57.9 0-103.9-47.1-103.9-103.9V312.6c0-57.9 47.1-103.9 103.9-103.9h546.3c57.9 0 103.9 47.1 103.9 103.9v546.8c0.5 58.4-46.08 104.96-104.4 104.96zM162.3 276.72c-19.5 0-35.84 16.4-35.84 35.8v546.8c0 19.5 16.4 35.84 35.84 35.84h546.3c19.5 0 35.84-16.4 35.84-35.84V312.6c0-19.5-16.4-35.84-35.84-35.8H162.3z' fill='%232d2c3b'/%3E%3C/svg%3E");}
  .xtiper_max{background-image:url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M944.0 0.8H79.1C35.8 0.8 0.3 36.2 0.3 79.4v864.5c0 43.2 35.4 78.6 78.7 78.6h865.9c43.3 0 78.7-35.4 78.7-78.6V79.4C1023.7 36.2 988.3 0.8 944.0 0.8z m0 943.1H79.1V79.4h865.9v864.5z m0 0' fill='%23231814'/%3E%3Cpath d='M342.8 735.7l137.8-137.5c15.7-15.7 15.7-39.3 0-55.0-15.7-15.7-39.4-15.7-55.1 0l-137.8 137.5-90.5-90.4V826.0h236.2l-90.5-90.4z m228.3-243.6c11.8 0 19.7-3.9 27.6-11.8l137.8-137.5 90.5 90.4V197.3H590.7l90.5 90.4-137.8 137.5c-15.7 15.7-15.7 39.3 0 55.0 7.9 7.9 19.7 11.8 27.5 11.8z m0 0' fill='%232d2c3b'/%3E%3C/svg%3E");}
  .xtiper_max.xon{background-image:url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M944.0 0.8H79.1C35.8 0.8 0.3 36.2 0.3 79.4v864.5c0 43.2 35.4 78.6 78.7 78.6h865.9c43.3 0 78.7-35.4 78.7-78.6V79.4C1023.7 36.2 988.3 0.8 944.0 0.8z m0 943.1H79.1V79.4h865.9v864.5z m0 0' fill='%23231814'/%3E%3Cpath d='M346.7 621.7l-137.8 137.5c-15.7 15.7-15.7 39.3 0 55.0 15.7 15.7 39.4 15.7 55.1 0l137.8-137.5 90.5 90.4V531.3H256.2l90.5 90.4zM787.5 197.3c-11.8 0-19.7 3.9-27.6 11.8l-137.8 137.5-90.5-90.4v235.8h236.2l-90.5-90.4 137.8-137.5c15.7-15.7 15.7-39.3 0-55.0-7.9-7.9-19.7-11.8-27.5-11.8z' fill='%232d2c3b'/%3E%3C/svg%3E");}
  .xtiper_times{color:#e85445;}
  .xtiper_pad{padding:15px;}
  .xtiper_tip{overflow:hidden;min-height:60px;font-size:14px;line-height:20px;}
  .xtiper_btn ul{display:flex;overflow:hidden;border-top:1px solid #eaeaea;background-color:#fff;text-align:center;}
  .xtiper_btn ul:after{clear:both;display:block;content:"";}
  .xtiper_btn li{position:relative;float:left;overflow:hidden;}
  .xtiper_btn li:after{position:absolute;top:0;right:0;display:block;overflow:hidden;width:1px;height:40px;background-color:#eaeaea;content:"";}
  .xtiper_btn li.xactive:after{background-color:rgba(255,255,255,.2);}
  .xtiper_btn1 li{float:none;width:100%;}
  .xtiper_btn2 li{width:50%;}
  .xtiper_btn3 li{width:33.3%;-webkit-box-flex:1;-ms-flex:1;flex:1;}
  .xtiper_btn4 li{width:25%;-webkit-box-flex:1;-ms-flex:1;flex:1;}
  .xtiper_btn li button{width:100%;height:40px;border:0;background-color:#fff;color:#222;font-size:14px;cursor:pointer;}
  .xtiper_btn li.xactive button{color:#fff;}
  .xtiper_btn li.xactive button{background-color:#a8a8a8;}
  .xtiper_btn_hello .xtiper_btnbor,.xtiper_btn_hello li.xactive button,.xtiper_btn_success .xtiper_btnbor,.xtiper_btn_success li.xactive button{background-color:#37b72c;}
  .xtiper_btn_error .xtiper_btnbor,.xtiper_btn_error li.xactive button{background-color:#e75445;}
  .xtiper_btn_ask .xtiper_btnbor,.xtiper_btn_ask li.xactive button,.xtiper_btn_warning .xtiper_btnbor,.xtiper_btn_warning li.xactive button{background-color:#f89310;}
  .xtiper_btn1 li.xactive button{background-color:#fff;color:#222;}
  .xtiper_btn li:last-child:after{display:none;}
  .xtiper_btn li button:hover{opacity:.9;}
  .xtiper_btnbor{position:relative;overflow:hidden;width:100%;height:4px;background-color:#c3c3c3;}
  .xtiper_btnbor:after{position:absolute;top:0;left:0;display:block;width:100%;height:4px;background-color:rgba(0,0,0,.1);content:"";}
  .xtiper_btn1 .xtiper_btnbor:after{display:none;}
  .xtiper_btn2 li:nth-child(2){opacity:.92;}
  .xtiper_btn3 li:nth-child(1){opacity:.84;}
  .xtiper_btn3 li:nth-child(2){opacity:.92;}
  .xtiper_btn4 li:nth-child(1){opacity:.76;}
  .xtiper_btn4 li:nth-child(2){opacity:.84;}
  .xtiper_btn4 li:nth-child(3){opacity:.92;}
  .xtiper_pr{position:relative;}
  .xtiper_content{position:relative;overflow:auto;height:100%;}
  .xtiper_content.xtit{height:calc(100% - 40px);}
  .xtiper_content.xmin{height:calc(100% - 8px);}
  .xtiper_over{overflow:hidden;}
  .xtiper_content .zw{position:absolute;top:0;left:0;display:none;overflow:hidden;width:100%;height:100%;}
  .xtiper_main.xon .xtiper_content .zw{display:block;}
  .xtiper_con{padding-top:8px;padding-bottom:12px;}
  .xtiper_con_icon{padding-left:42px;}
  .xtiper_conin{overflow-x:hidden;overflow-y:auto;max-height:400px;}
  .xtiper_conin::-webkit-scrollbar{width:5px;}
  .xtiper_conin::-webkit-scrollbar-track{border-radius:3px;background-color:#f1f1f1;}
  .xtiper_conin::-webkit-scrollbar-thumb{border-radius:3px;background-color:#c1c1c1;}
  .xtiper_loadin{position:absolute;top:50%;left:50%;z-index:2;display:block;margin-top:-17px;margin-left:-17px;width:34px;height:34px;opacity:0;transition:.1s ease-in;transition-property:opacity;}
  .xtiper_loadin span{position:absolute;top:36px;left:50%;margin-left:-140px;width:280px;height:24px;color:#222;text-align:center;white-space:nowrap;font-size:14px;line-height:24px;}
  .xtiper_win.xon .xtiper_loadin{opacity:1;transition:.2s ease-in;}
  .xtiper_icon{position:absolute;top:0;left:0;display:inline-block;width:34px;height:34px;background-size:100% 100%;background-repeat:no-repeat;vertical-align:middle;}
  .xtiper_icon img{width:34px;height:34px;}
  .xtiper_icon_min{position:static;top:auto;left:auto;margin-right:5px;width:20px;height:20px;transform:translateY(-1px);}
  .xtiper_icon_min img{width:20px;height:20px;}
  .xtiper_icon_success{background-image:url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M512.7 0.1C230.4 0.1 0.8 229.8 0.8 512.1c0 282.3 229.6 511.9 511.0 511.9 282.3 0 511.9-229.6 511.9-511.9C1024.6 229.8 795.0 0.1 512.7 0.1z m0 950.5c-241.8 0-438.5-196.7-438.5-438.5 0-241.8 196.7-438.5 438.5-438.5 241.7 0 438.5 196.6 438.5 438.5-0.0 241.7-196.8 438.5-438.5 438.5z' fill='%2337b72c'/%3E%3Cpath d='M754.8 337.0L470.1 630.1l-178.5-155.2c-15.8-13.7-39.7-12.0-53.4 3.7-13.7 15.8-12.0 39.7 3.7 53.4l205.2 178.4a37.7 37.7 0 0 0 10.9 6.7 37.8 37.8 0 0 0 15.9 2.7 37.9 37.9 0 0 0 15.2-3.0c0.0-0.0 0.0 0.0 0.0-0.0a37.7 37.7 0 0 0 10.4-7.7l309.4-317.5c14.6-14.0 14.3-38.9-0.7-53.5-14.0-14.6-38.9-14.3-53.5 0.7z' fill='%2337b72c'/%3E%3C/svg%3E");}
  .xtiper_icon_error{background-image:url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M512.7 1023.0C230.4 1023.0 0.7 794.4 0.7 512.1 0.8 229.8 230.4 0.1 512.7 0.1c282.3 0 511.9 229.6 511.9 511.0 0 282.2-229.6 511.9-511.9 511.9z m0-950.4c-241.8 0-438.5 196.6-438.5 438.5 0 241.7 196.7 438.5 438.5 438.5 241.7 0 438.5-196.7 438.5-438.5 0-241.8-196.8-438.5-438.5-438.5z m51.4 439.0l158.1-156.3c14.4-14.2 14.5-37.4 0.3-51.7-14.2-15.4-37.4-14.5-52.6-0.3l-157.4 156.5-155.9-156.4c-15.3-15.2-37.4-14.3-51.7 0-14.3 14.2-14.3 37.4 0 51.7l155.7 156.1-157.0 155.3c-14.4 14.2-14.5 37.3-0.3 51.7 7.2 7.2 16.6 10.9 25.0 10.9 9.3 0 18.6-3.6 25.8-10.6l157.2-155.5 158.4 159.0c7.2 6.2 16.6 10.7 25.0 10.7 9.3 0 18.7-4.5 25.8-10.6 14.3-14.3 14.4-37.4 0.1-51.7l-158.3-158.8z' fill='%23e75445'/%3E%3C/svg%3E");}
  .xtiper_icon_warning{background-image:url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M512.7 0.1C230.4 0.1 0.8 229.8 0.8 512.1c0 282.3 229.6 511.9 511.0 511.9 282.3 0 511.9-229.6 511.9-511.9C1024.6 229.8 795.0 0.1 512.7 0.1z m0 950.5c-241.8 0-438.5-196.7-438.5-438.5 0-241.8 196.7-438.5 438.5-438.5 241.7 0 438.5 196.6 438.5 438.5 0 241.7-196.8 438.5-438.5 438.5z' fill='%23f89310'/%3E%3Cpath d='M511.6 681.4c-15.5 0-28.6 5.4-39.4 16.1s-16.1 23.7-16.1 38.0c0 17.5 5.6 31.1 16.8 40.8 11.2 9.7 24.3 14.6 39.4 14.6 14.8 0 27.7-4.9 38.8-14.8 11.1-9.9 16.6-23.4 16.6-40.6 0-15.3-5.5-28.3-16.4-38.0-10.0-10.7-24.2-16.1-39.7-16.1zM514.5 232.4c-17.5 0-31.6 5.7-42.3 17.2s-16.1 27.4-16.1 47.9c0 15.0 1.1 39.8 3.3 74.3l11.8 177.0c2.2 22.9 5.9 39.0 11.1 51.2 5.2 11.2 14.4 16.8 27.7 16.8 13.1 0 22.4-5.8 28.1-17.4 5.7-11.6 9.4-28.2 11.1-49.9l15.9-182.2c1.7-16.7 2.6-33.3 2.6-49.5 0-27.6-3.6-48.7-10.7-63.4-7.2-14.7-21.3-21.0-42.5-21.0z' fill='%23f89310'/%3E%3C/svg%3E");}
  .xtiper_icon_ask{background-image:url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M512.7 0.1C230.4 0.1 0.8 229.8 0.8 512.1c0 282.3 229.6 511.9 511.0 511.9 282.3 0 511.9-229.6 511.9-511.9C1024.6 229.8 795.0 0.1 512.7 0.1z m0 950.5c-241.8 0-438.5-196.7-438.5-438.5 0-241.8 196.7-438.5 438.5-438.5 241.7 0 438.5 196.6 438.5 438.5 0 241.7-196.8 438.5-438.5 438.5z' fill='%23f89310'/%3E%3Cpath d='M513.9 681.3c-15.8 0-29.1 5.3-39.9 15.9-10.8 10.6-16.3 23.7-16.3 39.2 0 17.5 5.6 31.1 16.8 40.8 11.2 9.7 24.3 14.6 39.4 14.6 14.5 0 27.3-4.9 38.4-14.8 11.1-9.9 16.6-23.4 16.6-40.6 0-15.5-5.3-28.6-15.9-39.2-10.6-10.6-23.7-15.9-39.2-15.9zM617.4 252.0c-27.3-13.2-58.9-19.8-94.6-19.8-38.4 0-72.1 7.9-100.9 23.7-28.8 15.8-50.8 35.7-65.8 59.7-15.0 24.0-22.5 47.7-22.5 71.1 0 11.3 4.7 21.9 14.2 31.6 9.5 9.7 21.1 14.6 34.9 14.6 23.4 0 39.3-13.9 47.7-41.8 8.9-26.6 19.7-46.7 32.5-60.4 12.8-13.7 32.8-20.5 59.9-20.5 23.2 0 42.1 6.8 56.7 20.3 14.7 13.6 21.0 30.2 21.0 49.9 0 10.1-2.4 19.5-7.2 28.1-4.8 8.6-10.7 16.4-17.7 23.5s-18.4 17.4-34.2 31.2c-17.0 15.8-32.3 29.4-42.9 40.8-10.6 11.5-19.1 24.8-25.5 39.9-6.4 15.2-9.6 33.1-9.6 53.8 0 16.5 4.4 28.0 13.1 37.3 8.7 8.4 19.5 12.6 32.3 12.6 24.6 0 39.3-12.8 43.0-38.4 2.7-12.1 4.7-20.5 6.1-25.3 1.4-4.8 3.3-9.6 5.7-14.4 2.5-4.8 6.2-10.1 11.3-15.9 5.0-5.8 11.8-12.5 20.1-20.1 30.3-27.1 51.3-46.4 63.0-57.8 11.7-11.5 21.8-25.1 30.3-40.8 8.5-15.8 12.7-34.1 12.7-55.1 0-26.6-7.5-51.2-22.4-73.9-14.9-22.7-36.0-40.6-63.4-53.8z' fill='%23f89310'/%3E%3C/svg%3E");}
  .xtiper_icon_hello{background-image:url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M512.7 0.1C230.4 0.1 0.8 229.8 0.8 512.1c0 282.3 229.6 511.9 511.0 511.9 282.3 0 511.9-229.6 511.9-511.9C1024.6 229.8 795.0 0.1 512.7 0.1z m0 950.5c-241.8 0-438.5-196.7-438.5-438.5 0-241.8 196.7-438.5 438.5-438.5 241.7 0 438.5 196.6 438.5 438.5-0.0 241.7-196.8 438.5-438.5 438.5z' fill='%2337b72c'/%3E%3Cpath d='M355.5 478.0c9.8-9.7 15.2-22.5 15.2-36.2v-72.1c0-27.0-22.8-50.8-50.7-50.8-28.0 0-50.8 22.8-50.8 50.8v72.1c0 27.0 22.8 50.8 50.8 50.8 13.3 0 25.9-5.1 35.5-14.6zM706.5 615.4c-13.7-11.8-37.6-8.9-49.4 4.9-41.6 46.3-84.9 65.0-145.1 65.0-62.8 0-100.7-17.2-144.8-65.7-12.2-14.2-35.0-17.0-49.7-5.2-15.1 13.1-17.4 35.3-5.0 49.9 59.1 66.8 114.9 92.8 199.5 92.8 82.0 0 145.4-29.5 199.6-92.9 12.1-13.0 9.8-36.7-5.1-49.6zM704.0 319.8c-28.0 0-50.7 22.8-50.7 50.8v72.1c0 28.1 22.8 50.8 50.7 50.8 28.0 0 50.7-22.8 50.7-50.8v-72.1c0-27.0-22.8-50.8-50.7-50.8z' fill='%2337b72c'/%3E%3C/svg%3E");}
  .xtiper_icon_load{background-image:url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M979.73 513.01c-0.96-1.70-2.66-2.65-4.46-2.65h-69.90c0-84.45-26.02-162.63-70.11-227.32-0.53-0.85-0.95-1.91-1.52-2.76-4.57-6.59-9.67-11.69-14.55-19.02-1.81-2.37-3.51-4.78-5.42-7.12-7.22-8.92-14.87-17.20-22.73-25.38-0.74-0.85-1.49-1.59-2.23-2.34-25.50-26.88-56.41-49.50-89.13-67.56-0.83-0.53-1.70 0-2.55-1.49-9.35-5.10-19.02-9.77-28.89-14.13-2.44 0-4.78-2.23-7.22-3.29-8.39-3.51-15.94-6.59-25.6-8.50-4.15-1.38-8.18-2.86-12.32-4.15-7.54-2.23-15.30-4.16-23.05-6.05-5.21-1.17-10.31-2.55-15.62-3.51-2.12-0.42-3.18-1.17-6.37-1.49-7.33-1.28-14.77-2.02-22.10-2.98-2.65-0.30-4.25-0.74-7.91 0-13.28-1.27-26.45-2.23-39.63-2.23-80.51 0-159.12 24.96-226.58 72.76-21.46 15.30-26.77 45.25-11.68 67.02 15.09 21.78 44.72 27.09 66.28 11.79l3.31-0.71c52.37-36.11 112.60-55.77 176.33-54.92a329.67 329.67 0 0 1 24.64 1.24c3.29 0.32 6.59 0.85 9.99 1.27 6.37 0.85 12.75 1.70 18.00 2.97 3.83 0.75 7.65 1.70 11.37 2.66 6.16 1.48 12.20 2.92 18.16 4.68 2.87 0.85 5.64 1.91 8.50 2.86 6.90 2.34 13.70 4.78 20.39 7.54 1.49 0.64 2.98 1.38 4.46 2.02 7.86 3.47 15.51 7.11 22.94 11.15 0.32 0.21 0.64 0.32 0 0.53 25.18 14.02 48.23 31.55 68.52 51.95 0.32 0.32 0.63 0.74 0.96 0 6.27 5.31 12.32 13.06 17.95 19.97 1.17 1.48 2.34 3.08 3.51 4.56 41.22 52.16 66.07 118.12 66.07 189.93h-69.89c-1.81 0-3.51 0.96-4.46 2.65-0.96 1.70-0.74 3.72 0.21 5.21l117.38 178.24c0.96 1.38 2.44 2.33 3.19 2.33 1.70 0 3.29-0.95 3.19-2.33l117.38-178.24c0.96-1.52 1.17-3.51 0.21-5.21zM687.56 761.37l-3.30 0.71c-52.37 36.11-112.60 55.77-176.33 54.92a329.29 329.29 0 0 1-24.64-1.25c-3.29-0.32-6.59-0.85-9.99-1.27-6.37-0.85-12.75-1.70-19.00-2.97-3.83-0.74-7.65-1.70-11.36-2.66-6.17-1.48-12.20-2.92-18.16-4.67-2.87-0.85-5.64-1.91-8.50-2.87-6.90-2.33-13.70-4.78-20.39-7.54-1.49-0.64-2.98-1.38-4.46-2.02-7.86-3.47-15.51-7.11-22.94-11.15-0.32-0.21-0.64-0.32 0-0.53-25.18-14.02-48.22-31.55-68.52-51.95-0.32-0.32-0.63-0.74-0.95 0-6.27-5.31-12.32-13.06-17.95-19.97-1.17-1.49-2.35-3.08-3.51-4.56-41.21-52.16-66.07-118.12-66.07-189.93h69.89c1.81 0 3.51-0.96 4.46-2.65 0.96-1.70 0.74-3.72-0.21-5.21L168.24 327.54c-0.96-1.38-2.45-2.34-3.19-2.34-1.70 0-3.29 0.95-3.19 2.34L44.48 505.79c-0.95 1.52-1.17 3.50-0.22 5.21 0.96 1.70 2.66 2.65 4.46 2.65h69.90c0 84.45 26.02 162.63 70.11 227.32 0.53 0.85 0.95 1.91 1.52 2.76 4.57 6.59 9.67 11.69 14.55 19.02 1.81 2.37 3.51 4.78 5.42 7.12 7.22 8.92 14.87 17.20 22.73 25.38 0.74 0.85 1.49 1.59 2.23 2.34 25.50 26.87 56.41 49.50 89.13 67.55 0.83 0.53 1.70 0 2.55 1.49 9.35 5.10 19.02 9.77 28.90 14.13 2.44 0 4.78 2.23 7.22 3.29 8.39 3.51 15.94 6.59 25.60 8.50 4.14 1.38 8.18 2.87 12.32 4.15 7.54 2.23 15.30 4.16 23.05 6.05 5.21 1.17 10.30 2.55 15.62 3.50 2.12 0.42 3.19 1.17 6.37 1.49 7.33 1.28 14.77 2.02 22.10 2.97 2.66 0.30 4.25 0.75 7.91 0 13.28 1.28 26.45 2.23 39.63 2.23 80.51 0 159.12-24.96 226.58-72.76 21.45-15.30 26.77-45.26 11.68-67.02-15.08-21.78-44.72-27.09-66.28-11.79z' fill='%23333333'/%3E%3C/svg%3E");}
  .xtiper_icon_load{animation:revolve 1.5s infinite linear;-webkit-animation:revolve 1.5s infinite linear;}
  @keyframes revolve{0%{transform:rotate(0);}
  100%{transform:rotate(360deg);}
  }
  @media (max-width:760px){.xtiper_msg{max-width:80%;}
  }
  @media (max-width:480px){.xtiper_msg{max-width:300px;}
  .xtiper_photo_ul{padding:0;}
  .xtiper_photo_btn{display:none;}
  }
  .xtiper_photo_li p{position:absolute;top:50%;width:100%;max-height:100%;min-height:100px;background-color:#fff;background-position:center center;background-size:contain;background-repeat:no-repeat;transform:translate(0,-50%);}
  .xtiper_photo_li a{position:relative;z-index:2;display:block;width:100%;height:100%;}
  .xtiper_photo_load{position:absolute;top:50%;left:50%;z-index:1;margin-top:-17px;margin-left:-17px;}
  .xtiper_photo_li img{visibility:hidden;max-width:100%;}
  .xtiper_photo_li.xapp img{position:relative;z-index:2;visibility:visible;width:100%;}
  .xtiper_photo_btn{position:absolute;top:50%;z-index:2;overflow:hidden;width:32px;height:46px;cursor:pointer;transform:translate(0,-50%);}
  .xtiper_photo_prev{left:16px;}
  .xtiper_photo_next{right:16px;}
  .xtiper_photo_btn:after,.xtiper_photo_btn:before{position:absolute;z-index:1;display:block;width:26px;height:4px;border-radius:4px;background-color:#666;content:"";}
  .xtiper_photo_btn:hover{opacity:.7;}
  .xtiper_photo_prev:before{top:13px;left:3px;transform:rotate(-45deg);}
  .xtiper_photo_prev:after{top:29px;left:3px;transform:rotate(45deg);}
  .xtiper_photo_next:before{top:13px;right:3px;transform:rotate(45deg);}
  .xtiper_photo_next:after{top:29px;right:3px;transform:rotate(-45deg);}
  .xtiper_photo_num{position:absolute;bottom:5px;left:50%;z-index:10;overflow:hidden;height:26px;text-align:center;font-size:13px;line-height:26px;transform:translate(-50%,0);user-select:none;-ms-user-select:none;}
  .xtiper_nummax{padding-left:8px;}
  .xtiper_nummax,.xtiper_photo_num{display:none;}
  .xtiper_nummax.xon,.xtiper_photo_num.xon{display:inline-block;}
  `;
  let cssResourceNode = document.createElement("style");
  cssResourceNode.setAttribute("type", "text/css");
  cssResourceNode.setAttribute("data-insert-from", "xtiper");
  cssResourceNode.innerHTML = cssResource;
  if (document.head) {
    document.head.append(cssResourceNode);
  } else if (document.documentElement) {
    if (document.documentElement.childNodes.length === 0) {
      document.documentElement.appendChild(cssResourceNode);
    } else {
      document.documentElement.insertBefore(
        cssResourceNode,
        document.documentElement.childNodes[
          document.documentElement.childNodes.length - 1
        ]
      );
    }
  } else {
    throw new Error("未找到可以插入到页面中的元素");
  }
})();

/*
 * author: ovsexia
 * version: 2.7.1
 * name: Xtiper
 * describe: 弹层弹窗解决方案
 * License: Mozilla Public License Version 2.0
 */

(function (global, factory) {
  /**
   * 不使用define
   * typeof define === "function" && define.amd
   * define(factory)
   */
  if (typeof exports === "object" && typeof module !== "undefined") {
    /* 适用于NodeJs或typeScript */
    module.exports = factory();
  } else {
    global = typeof globalThis !== "undefined" ? globalThis : global || self;
    /* 适用于浏览器中，且this对象是window，如果this是其它，那么会在其它对象下注册对象 */
    global.xtip = factory(global.xtip);
  }
})(typeof window !== "undefined" ? window : this, function (AnotherXtip) {
  let xtip = {};
  xtip.ver = "2.7.1";
  xtip.msg = function (tip, config) {
    if (!tip) {
      return false;
    }
    config = config || {};
    let o = {};
    o.model = "msg";
    o.tip = tip;
    o.times = config.times || 2;
    o.type = config.type || "black";
    o.pos = config.pos || "middle";
    o.icon = config.icon || "";
    o.zindex = config.zindex || 99999;

    return this.run(o);
  };
  xtip.danmu = function (tip, config) {
    if (!tip) {
      return false;
    }
    config = config || {};
    let o = {};
    o.model = "danmu";
    o.tip = tip;
    o.type = config.type || "black";
    o.icon = config.icon || "";
    o.light = config.light != null ? config.light : false;
    o.zindex = config.zindex || 99999;

    return this.run(o);
  };
  xtip.tips = function (tip, element, config) {
    if (!tip || !element) {
      return false;
    }
    config = config || {};
    let o = {};
    o.model = "tips";
    o.tip = tip;
    if (typeof element == "string") {
      let fir = element.substr(0, 1);
      if (fir == "#") {
        element = element.substr(1, element.length);
      }
    }
    o.element = element;
    o.bgcolor = config.bgcolor || "#000000";
    if (config.color) {
      o.color = config.color;
    } else {
      let reg = /rgba\((255\,){3}[0-9.]+/;
      let rgba = reg.test(o.bgcolor);
      if (
        o.bgcolor == "#fff" ||
        o.bgcolor == "#ffffff" ||
        o.bgcolor == "white" ||
        o.bgcolor == "rgb(255, 255, 255)" ||
        o.bgcolor == "rgba(255, 255, 255)" ||
        rgba === true
      ) {
        o.color = "#333333";
      } else {
        o.color = "#ffffff";
      }
    }
    o.times = config.times || 2;
    o.pos = config.pos || "right";
    o.closeBtn = config.closeBtn || false;
    o.zindex = config.zindex || 99999;

    return this.run(o);
  };
  xtip.alert = function (tip, config) {
    config = config || {};
    let o = {};
    o.type = "alert";
    o.tip = tip || "";
    o.icon = config.icon || "";
    o.title = config.title || "提示";
    if (config.btn) {
      o.btn = typeof config.btn == "string" ? [config.btn] : [config.btn[0]];
    } else {
      o.btn = ["确定"];
    }
    o.btn1 = config.btn1 != null ? config.btn1 : null;
    o.btnbg = [];
    o.times = config.times || 0;
    o.shade = config.shade != null ? config.shade : true;
    if (o.shade === true) {
      o.shadeClose = config.shadeClose != null ? config.shadeClose : true;
    } else {
      o.shadeClose = false;
    }

    return this.win(o);
  };
  xtip.confirm = function (tip, config) {
    config = config || {};
    let o = {};
    o.type = "confirm";
    o.tip = tip || "";
    o.icon = config.icon || "warning";
    o.title = config.title || "警告";
    o.btn = config.btn || ["确定", "取消"];
    if (o.btn && o.btn.length > 2) {
      let newbtn = [];
      for (let i = 0; i < 2; i++) {
        newbtn.push(o.btn[i]);
      }
      o.btn = newbtn;
    }
    o.btn1 = config.btn1 != null ? config.btn1 : null;
    o.btn2 = config.btn2 != null ? config.btn2 : null;
    o.btnbg = [true, false];
    o.shade = config.shade != null ? config.shade : true;
    if (o.shade === true) {
      o.shadeClose = config.shadeClose != null ? config.shadeClose : true;
    } else {
      o.shadeClose = false;
    }

    return this.win(o);
  };
  xtip.win = function (config) {
    if (!config) {
      return false;
    }
    let o = {};
    o.model = "win";
    o.tip = config.tip || "";
    o.times = config.times || 0;
    o.type = config.type || "confirm";
    o.icon = config.icon || "";
    o.title = config.title || "提示";
    o.shade = config.shade != null ? config.shade : true;
    if (o.shade === true) {
      o.shadeClose = config.shadeClose != null ? config.shadeClose : true;
    } else {
      o.shadeClose = false;
    }
    o.lock = config.lock || false;
    o.btn = config.btn || null;
    if (o.btn && o.btn.length > 4) {
      let newbtn = [];
      for (let i = 0; i < 4; i++) {
        newbtn.push(o.btn[i]);
      }
      o.btn = newbtn;
    }
    o.btn1 = config.btn1 != null ? config.btn1 : null;
    o.btn2 = config.btn2 != null ? config.btn2 : null;
    o.btn3 = config.btn3 != null ? config.btn3 : null;
    o.btn4 = config.btn4 != null ? config.btn4 : null;
    o.btnbg = config.btnbg || [];
    o.width = config.width || "";
    o.maxWidth = config.maxWidth || "";
    o.end = typeof config.end == "function" ? config.end : null;
    o.min = config.min != null ? config.min : false;
    o.move = true;
    o.app = false;
    o.zindex = config.zindex || 99999;
    o.success = config.success || null;

    return this.run(o);
  };
  xtip.photo = function (content, config) {
    if (!content) {
      return false;
    }
    config = config || {};
    let o = {};
    o.type = "photo";
    o.title = config.title || "";
    o.autoHeight = config.height ? false : true;
    o.width = config.width || "600px";
    o.height = config.height || "400px";
    o.content = content;
    o.app = config.app != null ? config.app : false;
    o.lock = true;
    o.reset = true;
    o.index = config.index || 1;
    o.iftitle = config.iftitle != null ? config.iftitle : true;
    o.iforder = config.iforder != null ? config.iforder : true;

    return this.open(o);
  };
  xtip.photoApp = function (content, config) {
    if (!content) {
      return false;
    }
    config = config || {};
    let o = {};
    o.type = "photo";
    o.width = "100%";
    o.height = "100%";
    o.bgcolor = "rgba(0, 0, 0, 1)";
    o.title = false;
    o.move = false;
    o.shade = true;
    o.shadeClose = false;
    o.closeBtn = true;
    o.content = content;
    o.photoapp = true;
    o.lock = true;
    o.reset = true;
    o.index = config.index || 1;
    o.iftitle = config.iftitle != null ? config.iftitle : true;
    o.iforder = config.iforder != null ? config.iforder : true;

    return this.open(o);
  };
  xtip.open = function (config) {
    if (!config == null || !config.type || !config.content) {
      return false;
    }
    let o = {};
    o.model = "open";
    o.type = config.type;
    o.content = config.content;
    o.id = config.id || "";
    o.title = config.title || "";
    if (config.autoHeight) {
      o.autoHeight = config.autoHeight;
    } else {
      o.autoHeight = config.height ? false : true;
    }
    o.width = config.width || "600px";
    o.height = config.height || "400px";
    o.maxWidth = config.maxWidth || "";
    o.maxHeight = config.maxHeight || "";
    o.x = config.x || "";
    o.y = config.y || "";
    o.x = sizef(o.x);
    o.y = sizef(o.y);
    function sizef(str) {
      if (str) {
        if (!isNaN(str)) {
          return Number(str);
        } else {
          let reg = /\-?[0-9\.]*(px|%)*/,
            match,
            num;
          if (str) {
            match = str.match(reg);
            if (!match[1] || (match[1] && match[1] == "px")) {
              match[0] = match[0].replace(/px/g, "");
              num = Number(match[0]);
            } else {
              num = "";
            }
            return num;
          }
        }
      } else {
        return "";
      }
    }

    o.bgcolor = config.bgcolor || "";
    let reg = /rgba\((0\,){3}[0-9.]+/;
    let rgba = reg.test(o.bgcolor);
    if (
      o.bgcolor == "#000" ||
      o.bgcolor == "#000000" ||
      o.bgcolor == "black" ||
      o.bgcolor == "rgb(0, 0, 0)" ||
      o.bgcolor == "rgba(0, 0, 0)" ||
      rgba === true
    ) {
      o.color = "#ffffff";
    } else {
      o.color = "";
    }
    o.shade = config.shade != null ? config.shade : true;
    if (o.shade === true) {
      o.shadeClose = config.shadeClose != null ? config.shadeClose : true;
    } else {
      o.shadeClose = false;
    }
    o.end = typeof config.end == "function" ? config.end : null;
    o.min = config.min != null ? config.min : false;
    o.max = config.max != null ? config.max : false;
    o.closeBtn = config.closeBtn != null ? config.closeBtn : true;
    o.move = config.move != null ? config.move : true;
    o.lock = config.lock != null ? config.lock : false;
    o.over = config.over != null ? config.over : true;
    o.index = config.index || 1;
    o.app = config.app != null ? config.app : false;
    if (o.app === true) {
      if (o.type == "photo") {
        return this.photoApp(o.content, o.index);
      } else {
        o.height = config.height || "";
        o.lock = true;
        o.shade = true;
        o.shadeClose = true;
      }
    }
    o.reset = config.reset != null ? config.reset : true;
    o.zindex = config.zindex || 99999;
    o.photoapp = config.photoapp || false;
    o.iftitle = config.iftitle != null ? config.iftitle : true;
    o.iforder = config.iforder != null ? config.iforder : true;
    o.success = config.success || null;

    return this.run(o);
  };
  xtip.load = function (tip, config) {
    config = config || {};
    let o = {};
    o.model = "load";
    o.tip = tip || "";
    o.times = config.times || 0;
    o.lock = config.lock != null ? config.lock : false;
    o.zindex = config.zindex || 99999;
    o.closeBtn = config.closeBtn != null ? config.closeBtn : false;

    return this.run(o);
  };
  xtip.sheet = function (config) {
    if (!config || !config.btn) {
      return false;
    }
    let o = {};
    o.model = "sheet";
    o.title = config.title || "";
    o.align = config.align || "center";
    let btn = new Array();
    for (let i = 0; i < 8; i++) {
      if (config.btn[i]) {
        btn[i] = config.btn[i];
      }
    }
    o.btn = btn;
    o.btn1 = config.btn1 || null;
    o.btn2 = config.btn2 || null;
    o.btn3 = config.btn3 || null;
    o.btn4 = config.btn4 || null;
    o.btn5 = config.btn5 || null;
    o.btn6 = config.btn6 || null;
    o.btn7 = config.btn7 || null;
    o.btn8 = config.btn8 || null;

    o.force = config.force || "";
    o.btnClose = config.btnClose || "取消";
    o.lock = true;
    o.shadeClose = true;
    o.end = typeof config.end == "function" ? config.end : null;
    o.zindex = config.zindex || 99999;

    return this.run(o);
  };
  //核心方法
  xtip.run = function (options) {
    let x = new Xclass(options);
    return x.mainid;
  };
  xtip.close = function (closeid) {
    let o = {};
    o.model = "close";
    o.closeid = closeid;

    return this.run(o);
  };
  xtip.closeAll = function () {
    let o = {};
    o.model = "closeAll";

    return this.run(o);
  };
  xtip.noConflict = function () {
    if (window.xtip) {
      delete window.xtip;
    }
    if (AnotherXtip) {
      window.xtip = AnotherXtip;
    }
    return xtip;
  };
  let Xclass = function (config) {
    let that = this;

    //按钮失焦
    that.loseblur();

    //客户端
    that.ifmob = /Android|webOS|iPhone|iPod|BlackBerry/i.test(
      navigator.userAgent
    );

    //主id
    let rand = Math.random().toString().split(".")[1];
    let mainid = "xtiper_" + rand;
    that.mainid = mainid;

    //参数配置
    config = that.namefix(config);
    that.c = config;
    let xcstr = "";
    if (
      typeof config.reset != "undefined" &&
      config.reset !== null &&
      config.reset === false
    ) {
      for (let key in config) {
        if (config[key] != null) {
          xcstr += config[key].toString();
        }
      }
      that.xcstr = that.xcstrRep(xcstr);
    } else {
      that.xcstr = xcstr;
    }

    //关闭
    if (config.model == "close") {
      that.close(config.closeid);
      return false;
    }

    //关闭
    if (config.model == "closeAll") {
      that.closeAll();
      return false;
    }

    //入口
    that.creat();
  };

  Xclass.pt = Xclass.prototype;

  //让所有按钮失去焦点
  Xclass.pt.loseblur = function () {
    let button = document.getElementsByTagName("button");
    if (button.length > 0) {
      for (let i = 0; i < button.length; i++) {
        button[i].blur();
      }
    }
    let input = document.getElementsByTagName("input");
    if (input.length > 0) {
      for (let i = 0; i < input.length; i++) {
        let input_type = input[i].getAttribute("type");
        if (input_type && (input_type == "button" || input_type == "submit")) {
          input[i].blur();
        }
      }
    }
  };

  Xclass.pt.creat = function () {
    let that = this;
    let c = that.c;

    //1.构造内部html
    let html = that.html();
    if (!html) {
      return false;
    }

    //2.输出html代码到body
    let body = document.body;
    let div = document.createElement("div");
    div.setAttribute("id", that.mainid);
    div.setAttribute("class", "xtiper");
    div.innerHTML = html;
    body.appendChild(div);
    let xtipdiv = document.getElementById(that.mainid);
    that.xtipdiv = xtipdiv;

    //3.添加classname、属性
    that.attr();

    //4.添加动画效果
    that.on();

    //5.后续处理
    that.after();
  };

  //参数名称补全
  Xclass.pt.namefix = function (c) {
    //方位
    if (c.pos) {
      c.pos = c.pos.toLowerCase();
      if (c.pos == "t") {
        c.pos = "top";
      } else if (c.pos == "b") {
        c.pos = "bottom";
      } else if (c.pos == "l") {
        c.pos = "left";
      } else if (c.pos == "r") {
        c.pos = "right";
      } else if (c.pos == "m") {
        c.pos = "middle";
      }
    }

    //类型
    if (c.type) {
      c.type = c.type.toLowerCase();
      if (c.type == "r") {
        c.type = "ready";
      } else if (c.type == "n") {
        c.type = "noready";
      } else if (c.type == "notready") {
        c.type = "noready";
      } else if (c.type == "u") {
        c.type = "url";
      } else if (c.type == "h") {
        c.type = "html";
      } else if (c.type == "p") {
        c.type = "photo";
      } else if (c.type == "w") {
        c.type = "white";
      } else if (c.type == "b") {
        c.type = "black";
      } else if (c.type == "a") {
        c.type = "alert";
      } else if (c.type == "c") {
        c.type = "confirm";
      }
    }

    c.iconColor = "";
    //图标
    if (c.icon) {
      if (typeof c.icon == "object") {
        c.iconColor = c.icon[1];
        c.icon = c.icon[0];
      }
      c.icon = c.icon.toLowerCase();
      c.iconFlag = true;
      if (c.icon == "s") {
        c.icon = "success";
      } else if (c.icon == "e") {
        c.icon = "error";
      } else if (c.icon == "w") {
        c.icon = "warning";
      } else if (c.icon == "a") {
        c.icon = "ask";
      } else if (c.icon == "h") {
        c.icon = "hello";
      }
      if (
        c.icon !== "success" &&
        c.icon !== "error" &&
        c.icon !== "warning" &&
        c.icon !== "ask" &&
        c.icon !== "hello"
      ) {
        c.iconFlag = false;
      }
    }

    //文字对齐
    if (c.align) {
      c.align = c.align.toLowerCase();
      if (c.align == "l") {
        c.align = "left";
      } else if (c.align == "c") {
        c.align = "center";
      } else if (c.align == "r") {
        c.align = "right";
      }
    }
    return c;
  };

  //构造内部html
  Xclass.pt.html = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    let html = "";
    //短消息
    if (c.model == "msg") {
      html += "<p>";
      if (c.icon) {
        html +=
          c.iconFlag === true
            ? '<i class="xtiper_icon xtiper_icon_' +
              c.icon +
              ' xtiper_icon_min"></i>'
            : '<img class="xtiper_icon xtiper_icon_min" src="' +
              c.icon +
              '" />';
      }
      html += c.tip + "</p>";
    }
    //弹幕
    else if (c.model == "danmu") {
      let danmuli = document.getElementsByClassName("xtiper_danmu");
      if (danmuli.length > 300 || document.hidden) {
        return false;
      }

      html += "<p>";
      if (c.icon) {
        html +=
          c.iconFlag === true
            ? '<i class="xtiper_icon xtiper_icon_' +
              c.icon +
              ' xtiper_icon_min"></i>'
            : '<img class="xtiper_icon xtiper_icon_min" src="' +
              c.icon +
              '" />';
      }
      html += c.tip + "</p>";
    }
    //气泡层
    else if (c.model == "tips") {
      that.newelement = document.getElementById(c.element) || c.element;
      if (c.bgcolor) {
        html +=
          '<p style="background-color:' +
          c.bgcolor +
          ";" +
          (c.color ? " color:" + c.color + ';"' : "") +
          '">' +
          c.tip +
          "</p>";
      } else {
        html += "<p>" + c.tip + "</p>";
      }
      html += '<em style="background-color:' + c.bgcolor + ';"></em>';
      if (c.closeBtn === true) {
        html +=
          '<div class="xtiper_close xtiper_close_notit xtiper_close_notitmin"></div>';
      }
    }
    //弹窗层
    else if (c.model == "win") {
      if (c.type == "alert") {
        c.btn = c.btn != null ? c.btn : ["确定"];
        c.btn1 = c.btn1 != null ? c.btn1 : null;
        c.btn2 = null;
        c.btn3 = null;
        c.btn4 = null;
      } else if (c.type == "confirm") {
        c.btn = c.btn != null ? c.btn : ["确定", "取消"];
        c.btn1 = c.btn1 != null ? c.btn1 : null;
        c.btn2 = c.btn2 != null ? c.btn2 : null;
        c.btn3 = c.btn3 != null ? c.btn3 : null;
        c.btn4 = c.btn4 != null ? c.btn4 : null;
      }

      xtiper_con_icon = c.icon ? " xtiper_con_icon" : "";
      let btnclass = new Array();
      btnclass[0] = c.btn1 != null ? ' class="xactive"' : "";
      btnclass[1] = c.btn2 != null ? ' class="xactive"' : "";
      btnclass[2] = c.btn3 != null ? ' class="xactive"' : "";
      btnclass[3] = c.btn4 != null ? ' class="xactive"' : "";
      if (c.btnbg && c.btnbg.length) {
        //自定义按钮颜色
        for (let i = 0; i < c.btnbg.length; i++) {
          btnclass[i] = c.btnbg[i] === true ? ' class="xactive"' : "";
        }
      }

      let btnfun = new Array();
      btnfun[0] = c.btn1 || null;
      btnfun[1] = c.btn2 || null;
      btnfun[2] = c.btn3 || null;
      btnfun[3] = c.btn4 || null;
      that.btnfun = btnfun;

      if (c.maxWidth) {
        c.width = that.maxSize(c.width, c.maxWidth);
      }

      if (c.shade === true) {
        html += '<div class="xtiper_bg"></div>';
      }
      html +=
        '<div class="xtiper_main"' +
        (c.width ? 'style="width:' + c.width + ';"' : "") +
        ">";
      html +=
        '<div class="xtiper_tit"><p>' +
        c.title +
        '</p><div class="xtiper_minmax">';
      if (c.min === true) {
        html += '<div class="xtiper_min"></div>';
      }
      html += '<div class="xtiper_close"></div>';
      html += "</div></div>";
      let iconer = that.iconer();
      html +=
        '<div class="xtiper_pad"><div class="xtiper_pr"><div class="xtiper_tip">' +
        iconer +
        '<div class="xtiper_con' +
        xtiper_con_icon +
        '"><div class="xtiper_conin">' +
        c.tip;
      if (c.type == "alert" && c.times > 0) {
        c.times++;
        html += '(<span class="xtiper_times">' + c.times + "</span>)";
      }
      html += "</div></div></div></div></div>";
      html +=
        '<div class="xtiper_btn' +
        (c.icon && c.iconFlag === true ? " xtiper_btn_" + c.icon : "") +
        " xtiper_btn" +
        c.btn.length +
        '"><ul>';

      for (let i = 0; i < 4; i++) {
        if (c.btn[i]) {
          html +=
            "<li" +
            btnclass[i] +
            "><button" +
            (btnclass[i] && c.iconColor && c.type == "confirm"
              ? ' style="background-color:' + c.iconColor + '"'
              : "") +
            ">" +
            c.btn[i] +
            "</button></li>";
        }
      }

      html +=
        '</ul><div class="xtiper_btnbor"' +
        (c.iconColor ? ' style="background-color:' + c.iconColor + '"' : "") +
        "></div></div></div>";
    }
    //页面层
    else if (c.model == "open") {
      //是否已经触发过
      let ifxoff = that.findxoff();
      if (ifxoff === true) {
        return false;
      }

      if (c.maxWidth) {
        c.width = that.maxSize(c.width, c.maxWidth);
      }
      if (c.maxHeight) {
        c.height = that.maxSize(c.height, c.maxHeight);
      }

      //满屏页面不能最大化
      if (c.width == "100%" && c.height == "100%") {
        c.max = false;
      }
      let width = that.getsize(c.width);
      let height = that.getsize(c.height) || ["", ""];
      if (height[1] == "%") {
        let bheight = (window.innerHeight * height[0]) / 100;
        height[0] = Math.round(bheight);
        height[1] = "px";
      }
      let height_css = "";
      if (c.title) {
        height_css = " xtit";
      } else {
        if (c.move === true) {
          height_css = " xmin";
        }
      }

      let newcontent;
      let xtiper_over = "";
      if (c.over === false) {
        xtiper_over = " xtiper_over";
      }
      if (c.type == "ready" || c.type == "noready") {
        //内容
        let fir = c.content.substr(0, 1),
          element,
          content,
          reg;
        if (fir == "#") {
          element = document.getElementById(
            c.content.substr(1, c.content.length)
          );
        } else if (fir == ".") {
          element = document.getElementsByClassName(
            c.content.substr(1, c.content.length)
          )[0];
        } else {
          return false;
        }
        if (!element) {
          return false;
        }
        if (c.type == "ready") {
          content = element.outerHTML;
          //过滤主div标签的id
          regid = /\#([A-z0-9_-]*)/;
          content_id = c.content.match(regid);
          if (content_id && content_id[1]) {
            //reg = /\s+(id\=["']idname["'])/g;
            reg = new RegExp("\\s+(id\\=[\"']" + content_id[1] + "[\"'])", "g");
            content = content.replace(reg, "");
          }
        } else {
          content = element.innerHTML;
          reg = /\<\!\-{2}[\s\n]*([\S\s]*)[\s\n]*\-{2}\>/;
          let match = content.match(reg);
          if (!match || !match[1]) {
            return false;
          }
          content = match[1];
        }
        newcontent =
          '<div class="xtiper_content' +
          xtiper_over +
          "" +
          height_css +
          '"' +
          (c.bgcolor ? ' style="background-color:' + c.bgcolor + '"' : "") +
          ">" +
          content +
          "</div>";
      } else if (c.type == "url") {
        //页面
        let scrolling = "auto";
        if (c.over === false) {
          scrolling = "no";
        }
        newcontent =
          '<div class="xtiper_content' +
          height_css +
          ' xtiper_over"' +
          (c.bgcolor ? ' style="background-color:' + c.bgcolor + '"' : "") +
          '><div class="zw"></div><iframe parentid="' +
          that.mainid +
          '" id="' +
          that.mainid +
          '_id" name="' +
          that.mainid +
          '_name" scrolling="' +
          scrolling +
          '" allowtransparency="true" frameborder="0" src="' +
          c.content +
          '" style="width:100%; height:100%;"></iframe></div>';
      } else if (c.type == "html") {
        //html代码
        newcontent =
          '<div class="xtiper_content' +
          xtiper_over +
          "" +
          height_css +
          '"' +
          (c.bgcolor ? ' style="background-color:' + c.bgcolor + '"' : "") +
          ">" +
          c.content +
          "</div>";
      } else if (c.type == "photo") {
        //相册
        let img = document.getElementsByTagName("img");
        if (img.length == 0) {
          return false;
        }
        let photo = new Array();
        for (let i = 0; i < img.length; i++) {
          if (that.dataset(img[i], "xphoto") == c.content) {
            photo.push(img[i]);
          }
        }
        if (!photo || photo.length == 0) {
          return false;
        }
        let li =
          '<div class="xtiper_photo_num' +
          (c.iftitle === true ? " xon" : "") +
          '"' +
          (c.color ? 'style="color:' + c.color + ';"' : "") +
          '><span class="xtiper_words"></span><span class="xtiper_nummax' +
          (c.iforder === true ? " xon" : "") +
          '"><span class="xtiper_num">' +
          c.index +
          "</span> / " +
          photo.length +
          "</span></div>";
        if (photo.length > 1) {
          li +=
            '<div class="xtiper_photo_btn xtiper_photo_prev"></div><div class="xtiper_photo_btn xtiper_photo_next"></div>';
        }
        li += '<div class="xtiper_photo_ul"><ul>';
        let xhref, xsrc;
        let xindex = c.index - 1;
        for (let i = 0; i < photo.length; i++) {
          xhref = that.dataset(photo[i], "xhref")
            ? that.dataset(photo[i], "xhref")
            : "";
          xsrc = that.dataset(photo[i], "xsrc")
            ? that.dataset(photo[i], "xsrc")
            : photo[i].src;
          li +=
            '<li class="xtiper_photo_li' +
            (i == xindex ? " xon" : "") +
            (that.ifmob === true ? " xapp" : "") +
            '" data-xtitle="' +
            photo[i].title +
            '"><p style="background-image:url(\'' +
            xsrc +
            "');\">" +
            (xhref ? '<a href="' + xhref + '" target="_blank">' : "") +
            '<img src="' +
            xsrc +
            '">' +
            (xhref ? "</a>" : "") +
            (i == xindex && that.ifmob === true
              ? '<span class="xtiper_icon xtiper_icon_load xtiper_photo_load"></span>'
              : "") +
            "</p></li>";
        }
        li += "</ul></div>";
        newcontent =
          '<div class="xtiper_content' +
          xtiper_over +
          "" +
          height_css +
          '"' +
          (c.bgcolor ? ' style="background-color:' + c.bgcolor + '"' : "") +
          ">" +
          li +
          "</div>";
      }

      if (c.shade === true) {
        html += '<div class="xtiper_bg"></div>';
      }
      if (c.app === true) {
        html +=
          '<div class="xtiper_sheet' +
          (that.ifmob === true && c.type == "photo" ? " xapp" : "") +
          '" style="height:' +
          height[0] +
          "" +
          height[1] +
          ';">';
        if (c.title) {
          html +=
            '<div class="xtiper_sheet_tit xtiper_sheet_left">' +
            c.title +
            "</div>";
        }
      } else {
        html +=
          '<div class="xtiper_main' +
          (that.ifmob === true && c.type == "photo" ? " xapp" : "") +
          '" style="width:' +
          width[0] +
          "" +
          width[1] +
          "; height:" +
          height[0] +
          "" +
          height[1] +
          ';">';
        if (c.title) {
          html +=
            '<div class="xtiper_tit' +
            (c.move === true ? "" : " xminmax") +
            '"><p>' +
            c.title +
            '</p><div class="xtiper_minmax">';
          if (c.min === true) {
            html += '<div class="xtiper_min"></div>';
          }
          if (c.max === true) {
            html += '<div class="xtiper_max"></div>';
          }
          if (c.closeBtn === true) {
            html += '<div class="xtiper_close"></div>';
          }
          html += "</div></div>";
        } else {
          if (c.move === true) {
            html += '<div class="xtiper_tit xtiper_tit_none"></div>';
          }
          if (c.closeBtn === true) {
            html +=
              '<div class="xtiper_close xtiper_close_notit' +
              (c.photoapp === true ? " xtiper_close_photoapp" : "") +
              '"></div>';
          }
        }
      }
      html += newcontent;
      html += "</div>";
    }
    //加载层
    else if (c.model == "load") {
      html =
        '<div class="xtiper_bg xtiper_bg_white"></div><div class="xtiper_loadin"><div class="xtiper_icon xtiper_icon_load"></div>';
      if (c.tip) {
        html += "<span>" + c.tip + "</span>";
      }
      html += "</div>";
      if (c.closeBtn === true) {
        html += '<div class="xtiper_close xtiper_close_load"></div>';
      }
    }
    //面板菜单
    else if (c.model == "sheet") {
      let btnfun = new Array();
      btnfun[0] = c.btn1 ? c.btn1 : null;
      btnfun[1] = c.btn2 ? c.btn2 : null;
      btnfun[2] = c.btn3 ? c.btn3 : null;
      btnfun[3] = c.btn4 ? c.btn4 : null;
      btnfun[4] = c.btn5 ? c.btn5 : null;
      btnfun[5] = c.btn6 ? c.btn6 : null;
      btnfun[6] = c.btn7 ? c.btn7 : null;
      btnfun[7] = c.btn8 ? c.btn8 : null;
      that.btnfun = btnfun;

      let align = "xtiper_sheet_" + c.align;

      html += '<div class="xtiper_bg"></div><div class="xtiper_sheet">';
      if (c.title) {
        html +=
          '<div class="xtiper_sheet_tit ' + align + '">' + c.title + "</div>";
      }
      html += '<ul class="xtiper_sheet_ul ' + align + '">';
      let licon, href, target;
      for (let i = 0; i < c.btn.length; i++) {
        if (btnfun[i]) {
          if (typeof btnfun[i] == "function") {
            licon = "<p>" + c.btn[i] + "</p>";
          } else {
            if (typeof btnfun[i] == "object") {
              href = btnfun[i][0];
              target = btnfun[i][1] ? btnfun[i][1] : "";
              if (target && target.substr(0, 1) != "_") {
                target = "_" + target;
              }
              target = ' target="' + target + '"';
            } else {
              href = btnfun[i];
              target = "";
            }
            licon =
              '<a href="' +
              href +
              '"' +
              target +
              "><p>" +
              c.btn[i] +
              "</p></a>";
          }
        } else {
          licon = "<p>" + c.btn[i] + "</p>";
        }
        html += '<li class="xtiper_sheet_li">' + licon + "</li>";
      }
      if (!c.force) {
        html +=
          '<li class="xtiper_sheet_li xlast"><p>' + c.btnClose + "</p></li>";
      }
      html += "</ul></div>";
    }
    return html;
  };

  Xclass.pt.iconer = function () {
    let that = this;
    let c = that.c;

    let html = "";
    if (c.icon) {
      if (c.iconFlag === true) {
        html = '<i class="xtiper_icon xtiper_icon_' + c.icon + '"></i>';
      } else {
        html = '<img class="xtiper_icon" src="' + c.icon + '" />';
      }
    }
    return html;
  };

  Xclass.pt.findxoff = function () {
    let that = this;
    let c = that.c;

    let xoff = document.getElementsByClassName("xtiper");
    let xoffdiv;
    for (let i = 0; i < xoff.length; i++) {
      let xcstr = that.dataset(xoff[i], "xcstr");
      if (xcstr && xcstr == that.xcstr) {
        xoffdiv = xoff[i];
      }
    }

    if (xoffdiv) {
      that.xtipdiv = xoffdiv;
      that.mainid = xoffdiv.getAttribute("id");
      xoffdiv.style.zIndex = c.zindex;
      setTimeout(function () {
        let maincss = c.app === true ? "xtiper_sheet" : "xtiper_main";
        let xtiper_main = xoffdiv.getElementsByClassName(maincss)[0];
        let data_width = that.dataset(xoffdiv, "xwidth");
        let data_height = that.dataset(xoffdiv, "xheight");
        let xleft = (window.innerWidth - data_width) / 2;
        let xtop = (window.innerHeight - data_height) / 2;
        if (maincss == "xtiper_main") {
          xtiper_main.style.width = data_width + "px";
          xtiper_main.style.height = data_height + "px";
          xtiper_main.style.left = xleft + "px";
          xtiper_main.style.top = xtop + "px";
          let xtiper_min = xoffdiv.getElementsByClassName("xtiper_min")[0];
          let xtiper_max = xoffdiv.getElementsByClassName("xtiper_max")[0];
          if (xtiper_min) {
            xtiper_min.style.display = "";
            xtiper_min.classList.remove("xon");
          }
          if (xtiper_max) {
            xtiper_max.style.display = "";
            xtiper_max.classList.remove("xon");
          }
        }
        if (c.lock === true) {
          that.lock();
        }
        xoffdiv.classList.remove("xoff");
      }, 1);
      return true;
    } else {
      return false;
    }
  };

  //设置data
  Xclass.pt.dataset = function (element, datakey, dataval) {
    //读取
    if (dataval == null) {
      if (element) {
        return element.getAttribute("data-" + datakey);
      }
    }
    //设置
    else {
      element.setAttribute("data-" + datakey, dataval);
    }
  };

  //添加classname、属性
  Xclass.pt.attr = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    //短消息
    if (c.model == "msg") {
      xtipdiv.classList.add("xtiper_msg");
      xtipdiv.classList.add("xtiper_msg_" + c.pos);
      xtipdiv.classList.add("xtiper_msg_" + c.type);
      xtipdiv.style.whiteSpace = "nowrap";

      let xwidth = xtipdiv.offsetWidth;
      xwidth = xwidth / 2;
      xtipdiv.style.marginLeft = "-" + xwidth + "px";
      xtipdiv.style.whiteSpace = "";
    }
    //弹幕
    else if (c.model == "danmu") {
      xtipdiv.classList.add("xtiper_msg");
      xtipdiv.classList.add("xtiper_msg_" + c.type);
      xtipdiv.classList.add("xtiper_danmu");

      function randomNum(n, m) {
        return Math.round(Math.random() * (m - n)) + n;
      }

      let bheight = Math.round(window.innerHeight * 0.65);
      let danmuTop = randomNum(10, bheight);
      let bwidth = document.body.offsetWidth + 22;
      xtipdiv.style.transform = "translateX(" + bwidth + "px)";
      xtipdiv.style.top = danmuTop + "px";

      let danmuli = document.getElementsByClassName("xtiper_danmu");
      if (danmuli.length > 1) {
        if (c.light === true) {
          xtipdiv.classList.add("xtiper_danmu_light");
        }
      }
    }
    //气泡层
    else if (c.model == "tips") {
      xtipdiv.classList.add("xtiper_tips");
      xtipdiv.classList.add("xtiper_tips_" + c.pos);
      xtipdiv.style.width = xtipdiv.offsetWidth + "px";

      //定位
      let newelement = document.getElementById(c.element) || c.element;
      let S = document.documentElement.scrollTop || document.body.scrollTop;
      let C = newelement.getBoundingClientRect();
      let W = newelement.offsetWidth;
      let H = newelement.offsetHeight;
      let dtop = S + C.top;
      let dleft = C.left;
      let B = 10;

      if (c.pos == "left") {
        let selfWidth = xtipdiv.offsetWidth;
        dleft = dleft - selfWidth - B;
      } else if (c.pos == "right") {
        dleft = dleft + W + B;
      } else if (c.pos == "top") {
        let selfHeight = xtipdiv.offsetHeight;
        dtop = dtop - selfHeight - B;
      } else if (c.pos == "bottom") {
        dtop = dtop + H + B;
      }
      xtipdiv.style.left = dleft + "px";
      xtipdiv.style.top = dtop + "px";
    }
    //弹窗层
    else if (c.model == "win" || c.model == "open") {
      xtipdiv.classList.add("xtiper_win");
      if (c.shade === true) {
        xtipdiv.classList.add("xtiper_win_fixed");
      }
      let maincss = c.app === true ? "xtiper_sheet" : "xtiper_main";
      let xtiper_main = xtipdiv.getElementsByClassName(maincss)[0];
      let xtiper_tit = xtipdiv.getElementsByClassName("xtiper_tit")[0];
      //原始窗口大小
      that.dataset(xtipdiv, "xwidth", xtiper_main.offsetWidth);
      that.dataset(xtipdiv, "xheight", xtiper_main.offsetHeight);
      if (c.reset === false) {
        that.dataset(xtipdiv, "xreset", 1);
      }

      if (c.model == "open" && that.xcstr) {
        that.dataset(xtipdiv, "xcstr", that.xcstr);
      }

      if (c.min === true || c.max === true) {
        let xmcss = "xmcss";
        let y = 0;
        if (c.min === true) {
          y++;
        }
        if (c.max === true) {
          y++;
        }
        xmcss = xmcss + y;
        if (xtiper_tit) {
          xtiper_tit.classList.add(xmcss);
        }
      }

      let xleft, xtop;
      if (c.model == "win") {
        let width = that.getsize(c.width);
        if (width && width[1] == "%") {
          xleft = (100 - width[0]) / 2 + "%";
        } else {
          xleft = (window.innerWidth - xtiper_main.offsetWidth) / 2 + "px";
        }
        xtop = (window.innerHeight - xtiper_main.offsetHeight) / 2 + "px";
        xtiper_main.style.height = xtiper_main.offsetHeight + "px";
        xtiper_main.style.left = xleft;
        xtiper_main.style.top = xtop;
      } else if (c.model == "open") {
        if (c.type == "ready") {
          xtiper_main.getElementsByClassName(
            "xtiper_content"
          )[0].firstChild.style.display = "";
        }

        if (c.app === false) {
          let width = that.getsize(c.width);

          if (c.type == "photo" && c.autoHeight === true) {
            let xindex = c.index - 1;
            let imgdiv = xtipdiv
              .getElementsByClassName("xtiper_photo_li")
              [xindex].getElementsByTagName("img")[0];
            imgdiv.onload = function () {
              let img = imgdiv.offsetHeight;
              img = img + 100;
              if (img > window.innerHeight) {
                if (c.title) {
                  img = window.innerHeight;
                } else {
                  img = window.innerHeight - 26;
                }
              }
              xtop = (window.innerHeight - img) / 2;
              xtop = c.y ? xtop + c.y : xtop;
              xtop = xtop + "px";
              xtiper_main.style.height = img + "px";

              if (width[1] == "%") {
                xleft = (100 - width[0]) / 2;
                xleft = c.x ? xleft + c.x : xleft;
                xleft = xleft + width[1];
              } else {
                xleft = (window.innerWidth - xtiper_main.offsetWidth) / 2;
                xleft = c.x ? xleft + c.x : xleft;
                xleft = xleft + "px";
              }
              xtiper_main.style.left = xleft;
              xtiper_main.style.top = xtop;
            };
          } else {
            xtiper_main.style.height = xtiper_main.offsetHeight + "px";
            xtop = (window.innerHeight - xtiper_main.offsetHeight) / 2;
            xtop = c.y ? xtop + c.y : xtop;
            xtop = xtop + "px";
          }

          if (width[1] == "%") {
            xleft = (100 - width[0]) / 2;
            xleft = c.x ? xleft + c.x : xleft;
            xleft = xleft + width[1];
          } else {
            xleft = (window.innerWidth - xtiper_main.offsetWidth) / 2;
            xleft = c.x ? xleft + c.x : xleft;
            xleft = xleft + "px";
          }

          xtiper_main.style.left = xleft;
          xtiper_main.style.top = xtop;
        }
      }

      if (c.shade === false) {
        xtiper_main.style.position = "fixed";
      }
    }
    //加载层
    else if (c.model == "load") {
      xtipdiv.classList.add("xtiper_win");
      xtipdiv.classList.add("xtiper_win_fixed");
    }
    //面板菜单
    else if (c.model == "sheet") {
      xtipdiv.classList.add("xtiper_win");
      xtipdiv.classList.add("xtiper_win_fixed");
    }

    if (c.zindex) {
      xtipdiv.style.zIndex = c.zindex;
    }
  };

  //添加动画效果
  Xclass.pt.on = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    setTimeout(function () {
      xtipdiv.classList.add("xon");
    }, 1);
  };

  //后续处理
  Xclass.pt.after = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    //短消息、气泡层
    if (c.model == "msg" || c.model == "tips") {
      //自动关闭
      that.autoClose();

      if (c.model == "tips") {
        //绑定关闭按钮及遮罩点击关闭
        that.shade();
      }
    }
    //弹幕
    else if (c.model == "danmu") {
      that.danmuStar();
      xtipdiv.addEventListener("mouseenter", function () {
        that.danmuStop();
      });
      xtipdiv.addEventListener("mouseleave", function () {
        that.danmuStar();
      });
    }
    //弹窗层、页面层
    else if (c.model == "win" || c.model == "open") {
      if (c.model == "win") {
        //绑定按钮事件
        let button = xtipdiv.getElementsByTagName("button");
        let btnfun = that.btnfun;
        for (let i = 0; i < 4; i++) {
          that.bclick(button[i], btnfun[i], true);
        }
      }

      //绑定最小化
      if (c.min) {
        let minbtn = xtipdiv.getElementsByClassName("xtiper_min")[0];
        if (minbtn) {
          minbtn.addEventListener("click", function () {
            that.minmax("min");
          });
        }
      }

      //绑定最大化
      if (c.max) {
        let maxbtn = xtipdiv.getElementsByClassName("xtiper_max")[0];
        if (maxbtn) {
          maxbtn.addEventListener("click", function () {
            that.minmax("max");
          });
        }
      }

      //绑定鼠标拖动
      if (c.move === true) {
        that.drag(true);
      }

      //绑定关闭按钮及遮罩点击关闭
      that.shade();

      //绑定键盘事件
      if (c.model == "win" || c.model == "open") {
        that.key();
      }

      //自动关闭
      if (c.model == "win" && c.type == "alert" && c.times > 0) {
        that.autoClose();
      }

      //相册按钮
      if (c.type == "photo") {
        that.photo();

        let xindex = c.index - 1;
        let li = xtipdiv.getElementsByClassName("xtiper_photo_li")[xindex];
        let xtiper_words = xtipdiv.getElementsByClassName("xtiper_words")[0];
        xtiper_words.innerHTML = that.dataset(li, "xtitle");
      }

      //回调函数
      if (c.success && typeof c.success == "function") {
        c.success(that);
      }
    }
    //加载层
    else if (c.model == "load") {
      //自动关闭
      that.autoClose();

      //绑定关闭按钮
      that.shade();
    }
    //面板菜单
    else if (c.model == "sheet") {
      //绑定关闭按钮及遮罩点击关闭
      that.shade();
      let btnfun = that.btnfun;

      let xtipdiv_appli = xtipdiv.getElementsByClassName("xtiper_sheet_li");
      let btnlen = xtipdiv_appli.length;
      if (!c.force) {
        btnlen = btnlen - 1;
      }

      //绑定按钮事件
      for (let i = 0; i < btnlen; i++) {
        that.bclick(xtipdiv_appli[i], btnfun[i]);
      }

      if (!c.force) {
        xtipdiv_appli[btnlen].addEventListener("click", function () {
          that.close();
          if (c.end) {
            c.end();
          }
        });
      }
    }

    //锁定滚动条
    that.lock();
  };

  Xclass.pt.ulli = function (li, aa, xx, yy, close) {
    let that = this;
    let xtipdiv = that.xtipdiv;
    let xtiper_content = xtipdiv.getElementsByClassName("xtiper_content")[0];
    let opacity;

    for (let i = 0; i < li.length; i++) {
      if (li[i].classList.contains("xon") === true) {
        if (aa == "left") {
          if (xx) {
            li[i].style.left = xx + "px";
          } else {
            li[i].style.left = "";
          }
        } else {
          li[i].style.left = xx + "px";
          li[i].style.top = yy + "px";
          opacity = 1 - ((yy / 4) * 3) / 120;
          if (opacity < 0) {
            opacity = 0;
          }
          xtiper_content.style.backgroundColor =
            "rgba(0, 0, 0, " + opacity + ")";
          if (close === true) {
            if (yy > 120) {
              that.close();
            } else {
              li[i].style.left = "";
              li[i].style.top = "";
              xtiper_content.style.backgroundColor = "rgba(0, 0, 0, 1)";
            }
          }
        }
      }
    }
  };

  Xclass.pt.photo = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    let ul = xtipdiv.getElementsByClassName("xtiper_photo_ul")[0];
    let li = xtipdiv.getElementsByClassName("xtiper_photo_li");
    let prev = xtipdiv.getElementsByClassName("xtiper_photo_prev")[0];
    let next = xtipdiv.getElementsByClassName("xtiper_photo_next")[0];

    if (prev && li.length > 1) {
      prev.addEventListener("click", function () {
        that.photoBtn("prev");
      });
    }
    if (next && li.length > 1) {
      next.addEventListener("click", function () {
        that.photoBtn("next");
      });
    }

    //移动端
    if (that.ifmob === true && li.length > 1) {
      let aa = null;
      let moveX1, moveX2, moveY1, moveY2, xx, yy;
      ul.addEventListener("touchstart", function (e) {
        moveX1 = e.changedTouches[0].pageX;
        moveY1 = e.changedTouches[0].pageY;
        that.touchmove(false);
      });

      ul.addEventListener("touchmove", function (e) {
        moveX2 = e.changedTouches[0].pageX;
        moveY2 = e.changedTouches[0].pageY;
        xx = moveX2 - moveX1;
        yy = moveY2 - moveY1;
        if (Math.abs(xx) > Math.abs(yy)) {
          aa = aa ? aa : "left";
        } else {
          aa = aa ? aa : "top";
        }
        that.ulli(li, aa, xx, yy);
      });

      ul.addEventListener("touchend", function (e) {
        if (moveX1 > moveX2) {
          if (moveX1 - moveX2 > 40 && aa == "left") {
            that.photoBtn("next");
          }
        } else {
          if (moveX2 - moveX1 > 40 && aa == "left") {
            that.photoBtn("prev");
          }
        }
        that.ulli(li, aa, "", yy, true);
        aa = null;
      });

      ul.addEventListener("click", function (e) {
        that.close();
      });
    } else {
      ul.addEventListener("touchstart", function (e) {
        return false;
      });

      ul.addEventListener("touchend", function (e) {
        return false;
      });

      ul.addEventListener("click", function (e) {
        return false;
      });
    }
  };

  Xclass.pt.photoBtn = function (type) {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    let li = xtipdiv.getElementsByClassName("xtiper_photo_li");
    let xtiper_main = xtipdiv.getElementsByClassName("xtiper_main")[0];
    if (xtiper_main.classList.contains("xtiper_main_photo") === true) {
      return false;
    }
    xtiper_main.classList.add("xtiper_main_photo");
    let index = 0,
      old = 0;
    for (let i = 0; i < li.length; i++) {
      if (li[i].classList.contains("xon") === true) {
        index = old = i;
      }
    }
    if (type == "prev") {
      index--;
      if (index < 0) {
        index = li.length - 1;
      }
    } else if (type == "next") {
      index++;
      if (index > li.length - 1) {
        index = 0;
      }
    }

    that.now = index;

    let xnum = index + 1;
    let xtiper_num = xtiper_main.getElementsByClassName("xtiper_num")[0];
    xtiper_num.innerHTML = xnum;
    let xtiper_words = xtiper_main.getElementsByClassName("xtiper_words")[0];

    let img;
    for (let i = 0; i < li.length; i++) {
      if (i == index) {
        li[i].classList.add("xon");
        xtiper_words.innerHTML = that.dataset(li[i], "xtitle");
        xtiper_num.innerHTML = xnum;
        if (c.autoHeight === true) {
          img = li[i].getElementsByTagName("img")[0].offsetHeight;
          img = img + 100;
          if (img > window.innerHeight) {
            if (c.title) {
              img = window.innerHeight;
            } else {
              img = window.innerHeight - 26;
            }
          }
          xtiper_main.style.height = img + "px";
          xtiper_main.style.top = (window.innerHeight - img) / 2 + "px";
        }
      } else {
        li[i].classList.remove("xon");
      }
      if (i == old) {
        li[i].classList.add("xold_" + type);
      } else {
        li[i].classList.remove("xold_prev");
        li[i].classList.remove("xold_next");
      }
    }
    setTimeout(function () {
      li[old].classList.remove("xold_" + type);
      xtiper_main.classList.remove("xtiper_main_photo");
    }, 401);
  };

  Xclass.pt.appScroll = function (e) {
    e.preventDefault();
  };

  Xclass.pt.touchmove = function (type) {
    let that = this;

    if (type === false) {
      document.body.addEventListener("touchmove", that.appScroll, {
        passive: false,
      });
    } else {
      document.body.removeEventListener("touchmove", that.appScroll, {
        passive: false,
      });
    }
  };

  Xclass.pt.xcstrRep = function (str) {
    str = str.replace(/[\s\n\r]/g, ""); //空格换行回车
    str = encodeURIComponent(str).toLowerCase();

    let reparr = [
      [/true/g, "1"],
      [/false/g, "0"],
      [/%/g, ""],
      [/\(/g, ""],
      [/\)/g, ""],
      [/open/g, "o"],
      [/ready/g, "r"],
      [/noready/g, "n"],
      [/url/g, "u"],
      [/html/g, "h"],
      [/photo/g, "p"],
      [/function/g, "f"],
      [/99999/g, "9"],
    ];
    for (let i = 0; i < reparr.length; i++) {
      str = str.replace(reparr[i][0], reparr[i][1]);
    }

    return str;
  };

  Xclass.pt.maxSize = function (oldval, newval) {
    let that = this;

    let oldsize = that.getsize(oldval) || "";
    let newsize = that.getsize(newval);
    if (oldsize && oldsize[1] == "px" && newsize[1] == "%") {
      if (oldsize[0] > window.innerWidth) {
        return (newsize[0] > 100 ? 100 : newsize[0]) + "%";
      } else {
        return oldval;
      }
    } else {
      return oldval;
    }
  };

  //弹幕开始
  Xclass.pt.danmuStar = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    xtipdiv.classList.add("xtiper_danmu_animate");
    if (xtipdiv.style.animationDuration == "") {
      xtipdiv.style.animationDuration = "6s";
    }

    let danmutime = Number(xtipdiv.style.animationDuration.replace(/s/, ""));
    that.dataset(xtipdiv, "xdanmu", danmutime);

    that.outtime = setTimeout(function () {
      that.close();
    }, danmutime * 1000 + 1);
  };

  //弹幕停止
  Xclass.pt.danmuStop = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    let bwidth = document.body.offsetWidth + 22;
    let newtranslate = xtipdiv.getBoundingClientRect().left;
    xtipdiv.style.transform = "translateX(" + newtranslate + "px)";

    if (that.outtime) {
      clearInterval(that.outtime);
      that.outtime = null;
    }

    let progress = newtranslate / bwidth;
    let lesstime = 6 * progress;
    if (lesstime < 0.4) {
      lesstime = 0.4;
    }
    that.dataset(xtipdiv, "xdanmu", lesstime);
    xtipdiv.style.animationDuration = lesstime + "s";
    xtipdiv.classList.remove("xtiper_danmu_animate");
  };

  //绑定按钮事件
  Xclass.pt.bclick = function (btn, fun, ifclose) {
    let that = this;

    if (btn) {
      if (fun && typeof fun == "function") {
        btn.addEventListener("click", function () {
          fun();
          that.close();
        });
      } else {
        if (ifclose === true) {
          btn.addEventListener("click", function () {
            that.close();
          });
        }
      }
    }
  };

  //自动关闭
  Xclass.pt.autoClose = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    //倒计时
    if (xtipdiv.getElementsByClassName("xtiper_times")[0]) {
      let times = c.times - 1;
      let i = times;
      let fn = function () {
        xtiper_times = xtipdiv.getElementsByClassName("xtiper_times")[0];
        xtiper_times.innerHTML = i;
        if (i <= 0) {
          that.close();
          clearInterval(that.timer);
          that.timer = null;
        }
        i--;
      };
      that.timer = setInterval(fn, 1000);
      fn();
    } else {
      let times = c.times;
      if (times && times != 0) {
        setTimeout(function () {
          that.close();
        }, times * 1000);
      }
    }
  };

  //锁定滚动条
  Xclass.pt.lock = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    if (c.lock === true) {
      that.dataset(xtipdiv, "xlock", 1);
      document.documentElement.style.overflowY = "hidden";
      that.touchmove(false);
    }
  };

  //解除锁定滚动条
  Xclass.pt.unlock = function () {
    let that = this;
    let flag = 0;
    let winli = document.getElementsByClassName("xtiper_win");

    for (let i = 0; i < winli.length; i++) {
      if (
        that.dataset(winli[i], "xlock") == 1 &&
        winli[i].classList.contains("xoff") === false
      ) {
        flag++;
      }
      if (
        winli[i].classList.contains("xoff") === true &&
        winli[i].getAttribute("id") == that.mainid
      ) {
        flag++;
      }
    }
    if (flag <= 1) {
      document.documentElement.style.overflowY = "";
    }
    that.touchmove(true);
  };

  //绑定最大化、最小化
  Xclass.pt.minmax = function (mtype, act) {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    let iftype, setwidth, setheight;
    if (mtype == "min") {
      iftype = that.dataset(xtipdiv, "xmin");
      setwidth = "190px";
      setheight = "40px";
    } else if (mtype == "max") {
      iftype = that.dataset(xtipdiv, "xmax");
      setwidth = "100%";
      setheight = "100%";
    }

    let xtiper_tit = xtipdiv.getElementsByClassName("xtiper_tit")[0];
    let xtiper_main = xtipdiv.getElementsByClassName("xtiper_main")[0];
    let xtiper_content = xtipdiv.getElementsByClassName("xtiper_content")[0];
    let minbtn = xtipdiv.getElementsByClassName("xtiper_min")[0];
    let maxbtn = xtipdiv.getElementsByClassName("xtiper_max")[0];
    let xtiper_bg = xtipdiv.getElementsByClassName("xtiper_bg")[0];

    if (iftype == 1 || act == 1) {
      //还原
      xtiper_main.style.width = that.dataset(xtipdiv, "xwidth") + "px";
      xtiper_main.style.height = that.dataset(xtipdiv, "xheight") + "px";
      let data_width = xtiper_main.offsetWidth;
      let data_height = xtiper_main.offsetHeight;
      let xleft = (window.innerWidth - data_width) / 2;
      let xtop = (window.innerHeight - data_height) / 2;
      xtiper_main.style.left = xleft + "px";
      xtiper_main.style.top = xtop + "px";
      xtiper_tit.classList.remove("xminmax");
      xtiper_tit.classList.remove("xmin");
      xtiper_tit.getElementsByTagName("p")[0].setAttribute("title", "");
      that.dataset(xtipdiv, "xmin", "");
      that.dataset(xtipdiv, "xmax", "");
      if (minbtn) {
        minbtn.classList.remove("xon");
        minbtn.style.display = "";
      }
      if (maxbtn) {
        maxbtn.classList.remove("xon");
        maxbtn.style.display = "";
      }
      that.drag(true);

      //最小化还原遮罩
      if (
        (c.model == "win" || c.model == "open") &&
        c.shade === true &&
        c.min === true
      ) {
        xtipdiv.classList.add("xtiper_win_fixed");
        xtiper_bg.classList.remove("xmin");
        xtiper_main.style.position = "";
      }
    } else {
      //变形
      xtiper_main.style.width = setwidth;
      xtiper_main.style.height = setheight;
      xtiper_tit.classList.add("xminmax");

      if (mtype == "min") {
        xtiper_tit.classList.add("xmin");
        xtiper_tit
          .getElementsByTagName("p")[0]
          .setAttribute(
            "title",
            xtiper_tit.getElementsByTagName("p")[0].innerHTML
          );
        that.dataset(xtipdiv, "xmin", 1);
        xtiper_main.style.top = "auto";
        xtiper_main.style.bottom = "0";
        xtiper_main.style.left = "0";
        minbtn.classList.add("xon");
        if (maxbtn) {
          maxbtn.style.display = "none";
        }

        //最小化关闭遮罩
        if (
          (c.model == "win" || c.model == "open") &&
          c.shade === true &&
          c.min === true
        ) {
          xtipdiv.classList.remove("xtiper_win_fixed");
          xtiper_bg.classList.add("xmin");
          xtiper_main.style.position = "fixed";
        }
      } else if (mtype == "max") {
        that.dataset(xtipdiv, "xmax", 1);
        xtiper_main.style.top = "0";
        xtiper_main.style.left = "0";
        maxbtn.classList.add("xon");
        if (minbtn) {
          minbtn.style.display = "none";
        }
      }
      that.drag(false);
    }
  };

  //绑定鼠标拖动
  Xclass.pt.drag = function (open) {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    let drag = xtipdiv.getElementsByClassName("xtiper_tit")[0];
    if (!drag) {
      return false;
    }
    let drag_main = xtipdiv.getElementsByClassName("xtiper_main")[0];

    if (open === true) {
      drag.onmousedown = function (event) {
        //允许3/4的区域拖动到页面外
        let overX = (drag_main.offsetWidth / 4) * 3;
        let overY = (drag_main.offsetHeight / 4) * 3;

        drag_main.classList.add("xon");
        event = event || window.event;
        let diffX = event.clientX - drag_main.offsetLeft;
        let diffY = event.clientY - drag_main.offsetTop;
        if (typeof drag_main.setCapture !== "undefined") {
          drag_main.setCapture();
        }
        document.onmousemove = function (event) {
          event = event || window.event;
          let moveX = event.clientX - diffX;
          let moveY = event.clientY - diffY;
          if (moveX < -overX) {
            moveX = -overX;
          } else if (
            moveX >
            document.body.offsetWidth - drag_main.offsetWidth + overX
          ) {
            moveX = document.body.offsetWidth - drag_main.offsetWidth + overX;
          }
          if (moveY < 0) {
            moveY = 0;
          } else if (
            moveY >
            window.innerHeight - drag_main.offsetHeight + overY
          ) {
            moveY = window.innerHeight - drag_main.offsetHeight + overY;
          }
          drag_main.style.left = moveX + "px";
          drag_main.style.top = moveY + "px";
        };
        document.onmouseup = function (event) {
          drag_main.classList.remove("xon");
          this.onmousemove = null;
          this.onmouseup = null;
          //修复低版本ie bug
          if (typeof drag_main.releaseCapture != "undefined") {
            drag_main.releaseCapture();
          }
        };
      };
    } else {
      drag.onmousedown = function (event) {
        return false;
        document.onmousemove = function (event) {
          return false;
        };
        document.onmouseup = function (event) {
          return false;
        };
      };
    }
  };

  //绑定关闭按钮及遮罩点击关闭
  Xclass.pt.shade = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    let close = xtipdiv.getElementsByClassName("xtiper_close")[0];
    if (close) {
      close.addEventListener("click", function () {
        that.close();
        if (c.end && typeof c.end == "function") {
          c.end();
        }
      });
    }

    if (c.shadeClose) {
      let bg = xtipdiv.getElementsByClassName("xtiper_bg")[0];
      bg.addEventListener("click", function () {
        if (c.model == "sheet" && c.force) {
          xtip.msg(c.force);
          return false;
        } else {
          that.close();
          if (c.end && typeof c.end == "function") {
            c.end();
          }
        }
      });
    }
  };

  //键盘事件
  Xclass.pt.key = function () {
    let that = this;
    let c = that.c;
    let xtipdiv = that.xtipdiv;

    document.onkeydown = function (event) {
      let e = event || window.event || arguments.callee.caller.arguments[0];
      if (e) {
        if (e.keyCode == 27) {
          //按 Esc
          that.close();
        } else if (e.keyCode == 13) {
          //按 Enter
          if (c.model == "win") {
            //多按钮取消回车事件
            if (c.btn2 || c.btn3) {
              return false;
            }
            that.close();
            if (c.btn1 && typeof c.btn1 == "function") {
              c.btn1();
              c.btn1 = null;
            }
            return false;
          }
        } else {
          return e;
        }
      }
    };
  };

  /*
   * 关闭层
   * 关闭层id
   * 是否检查锁定层 checkLock
   */
  Xclass.pt.close = function (closeid) {
    let that = this;
    let c = that.c;
    let checkLock = false;
    let xtipdiv = null;

    if (closeid) {
      xtipdiv = document.getElementById(closeid);
      if (!xtipdiv) {
        return false;
      }
      if (that.dataset(xtipdiv, "xlock") == 1) {
        checkLock = true;
      }
    } else {
      xtipdiv = that.xtipdiv;
      if (c.lock === true) {
        checkLock = true;
      }
    }

    if (!xtipdiv) {
      return false;
    }

    //弹幕类型不用延时
    let closenow = false;
    if (xtipdiv.classList.contains("xtiper_danmu") === true) {
      closenow = true;
    } else {
      closenow = false;
    }

    //不用延时关闭
    if (closenow === true) {
      let parent_xtipdiv = xtipdiv.parentNode;
      if (parent_xtipdiv) {
        parent_xtipdiv.removeChild(xtipdiv);
      }
    } else {
      if (that.dataset(xtipdiv, "xreset") == 1) {
        xtipdiv.classList.add("xoff");
        if (c.lock === true) {
          that.unlock();
        }
        setTimeout(function () {
          xtipdiv.style.zIndex = "-99999";
          if (c.min === true) {
            that.minmax("min", 1);
          }
          if (c.max === true) {
            that.minmax("max", 1);
          }
          if (c.model == "open" && c.type == "photo") {
            if (that.ifmob === true) {
              let xtiper_content =
                xtipdiv.getElementsByClassName("xtiper_content")[0];
              xtiper_content.style.backgroundColor = "rgba(0, 0, 0, 1)";
            }
            let li = xtipdiv.getElementsByClassName("xtiper_photo_li");
            if (li.length > 0) {
              for (let i = 0; i < li.length; i++) {
                li[i].style.left = "";
                li[i].style.top = "";
              }
            }
          }
        }, 201);
      } else {
        xtipdiv.classList.remove("xon");
        setTimeout(function () {
          let parent_xtipdiv = xtipdiv.parentNode;
          if (parent_xtipdiv) {
            parent_xtipdiv.removeChild(xtipdiv);
          }
        }, 201);
      }
    }

    //关闭层有锁定属性的才执行解除锁定
    if (checkLock === true) {
      that.unlock();
    }
  };

  /*
   * 关闭所有层
   */
  Xclass.pt.closeAll = function () {
    let that = this;

    let msgall = document.getElementsByClassName("xtiper");
    if (msgall.length <= 0) {
      return false;
    }
    for (let i = 0; i < msgall.length; i++) {
      that.close(msgall[i].getAttribute("id"));
    }
    document.documentElement.style.overflowY = "";
    that.touchmove(true);
  };

  //单位处理
  Xclass.pt.getsize = function (size) {
    if (size) {
      let reg = /([0-9]+)(px|\%)/;
      let size_arr = size.match(reg);
      let arr = new Array();
      arr[0] = Number(size_arr[1]);
      arr[1] = size_arr[2];
      return arr;
    }
  };

  //设置高度
  Xclass.pt.setSize = function (type, px) {
    let that = this;
    let c = that.c;
    if (c.model == "open") {
      let xtipdiv = that.xtipdiv;
      let xtiper_main = xtipdiv.getElementsByClassName("xtiper_main")[0];
      px = parseInt(px);
      if (type == "height") {
        let xtop = (window.innerHeight - px) / 2;
        xtiper_main.style.height = px + "px";
        xtiper_main.style.top = xtop + "px";
      }
    }
  };

  //设置高度
  Xclass.pt.setHeight = function (px) {
    let that = this;
    that.setSize("height", px);
  };

  return xtip;
});
