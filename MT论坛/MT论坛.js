// ==UserScript==
// @name         MT论坛
// @icon         https://bbs.binmt.cc/favicon.ico
// @namespace    https://greasyfork.org/zh-CN/scripts/401359-mt论坛
// @supportURL   https://greasyfork.org/zh-CN/scripts/401359-mt论坛/feedback
// @description  MT论坛效果增强，如自动签到、自动展开帖子、滚动加载评论、显示UID、屏蔽用户、手机版小黑屋、编辑器优化、在线用户查看、便捷式图床等
// @description  更新日志: 新增桌面端|移动端的附件点击拦截提示功能，可在脚本设置中开启，开启后若访问帖子内存在附件，会在附件前面加上【已拦截】;更新NZMsgBox库版本为5.1.1;调整小黑屋的显示样式;优化拦截附件的方式;
// @version      2.9.8.4
// @author       WhiteSevs
// @match        http*://bbs.binmt.cc/*
// @license      GPL-3.0-only
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_info
// @grant        GM_cookie
// @run-at       document-start
// @connect      helloimg.com
// @connect      z4a.net
// @connect      kggzs.cn
// @connect      woozooo.com
// @exclude      /^http(s|):\/\/bbs\.binmt\.cc\/uc_server.*$/
// @require      https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @require      https://unpkg.com/any-touch/dist/any-touch.umd.min.js
// @require      https://greasyfork.org/scripts/449471-viewer/code/Viewer.js
// @require      https://greasyfork.org/scripts/449512-xtiper/code/Xtiper.js
// @require      https://greasyfork.org/scripts/449562-nzmsgbox/code/NZMsgBox.js
// @require      https://greasyfork.org/scripts/452322-js-watermark/code/js-watermark.js
// @require      https://greasyfork.org/scripts/456607-gm-html2canvas/code/GM_html2canvas.js
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js
// ==/UserScript==

(function () {
  "use strict";
  /**
   * 自定义新的popup
   */
  const popup2 = {
    config: {
      mask: {
        zIndex: 1000000,
        style: `#force-mask{
                  width: 100%;
                  height: 100%;
                  position: fixed;
                  top: 0px;
                  left: 0px;
                  background: black;
                  opacity: 0.6;
                  z-index: 1000000;
                  display: flex;
                  align-content: center;
                  justify-content: center;
                  align-items: center;
              }`,
      },
      confirm: {
        zIndex: 1000100,
        style: `
                #popup2-confirm .popup2-confirm-cancel,
                #popup2-confirm .popup2-confirm-ok{
                    user-select: none;
                    width: 100% !important;
                    background: transparent !important;
                    border-radius: unset;
                }`,
      },
      toast: {
        zIndex: 1100000,
        style: `.popup2-toast{
                    width: fit-content;
                    padding: 10px 16px;
                    color: #fff;
                    background: rgba(0,0,0,0.65);
                    position: fixed;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: 4px;
                    font-size: 14px;
                    z-index: 1100000;
                    max-width: 80vw;
                    opacity: 1;
                    -webkit-box-sizing: content-box;
                    -moz-box-sizing: content-box;
                    box-sizing: content-box;
                    -webkit-backface-visibility: hidden;
                    -webkit-font-smoothing: antialiased/subpixel-antialiased;
                    touch-action: pan-y;
                    -webkit-user-select: none;
                    transform: translateY(160px);
                
                }
                .popup2-toast-show{
                    transform: translateY(-80px) !important;
                    transition: all 0.2s ease 0s;
                    -webkit-transition: all 0.2s ease 0s;
                }`,
      },
    },
    init: () => {
      Object.keys(popup2.config).forEach((key) => {
        let style = popup2.config[key].style;
        if (style != "") {
          GM_addStyle(style);
        }
      });
    },
    force_mask_init: function (zIndex) {
      document.documentElement.style.overflow = "hidden";
      if (!$jq("#force-mask").length) {
        $jq("body").append($jq('<div id="force-mask"></div>'));
      } else {
        $jq("#force-mask").html("");
      }
      if (!zIndex) {
        $jq("#force-mask").css("z-index", Utils.getMaxZIndex() + 10);
      }
    },
    confirm: function (param_options) {
      let options = {
        text: "Call By popup2.confirm",
        reverse: false /* 底部按钮倒序 */,
        mask: true,
        only: true,
        ok: {
          enable: true,
          text: "确定",
          callback: () => {
            popup2.closeConfirm();
          },
        },
        cancel: {
          enable: true,
          text: "取消",
          callback: () => {
            popup2.closeConfirm();
          },
        },
        other: {
          enable: false,
          text: "另一个按钮",
          callback: () => {
            popup2.closeConfirm();
          },
        },
      };
      if (typeof param_options == "string") {
        options.text = param_options;
      } else {
        options = Utils.assignJSON(options, param_options);
      }
      let bottomBtnHTML = "";
      let confirmHTML = "";
      let maxZIndex = Utils.getMaxZIndex() + 10;
      let confirmZIndex =
        popup2.config.confirm.zIndex > maxZIndex
          ? popup2.config.confirm.zIndex
          : maxZIndex + 100;
      if (!options.reverse) {
        bottomBtnHTML = `<a href="javascript:;" class="tip_btn bg_f f_b popup2-confirm-cancel">${options.cancel.text}</a>
                <a href="javascript:;" class="tip_btn bg_f f_0 popup2-confirm-ok">
                    <span class="tip_lx">${options.ok.text}</span>
                </a>`;
      } else {
        bottomBtnHTML = `<a href="javascript:;" class="tip_btn bg_f f_0 popup2-confirm-ok">${options.ok.text}</a>
                <a href="javascript:;" class="tip_btn bg_f f_b popup2-confirm-cancel">
                    <span class="tip_lx">${options.cancel.text}</span>
                </a>`;
      }

      confirmHTML = `
            <div class="dialogbox popup2-popmenu" style="position: fixed;left: 50%;top: 50%;transform: translate(-50%, -50%);z-index: ${confirmZIndex};">
                <div id="popup2-confirm">
                    <div class="comiis_tip bg_f cl">
                        <dt class="f_b">${options.text}</dt>
                        <dd class="b_t cl">
                            <div class="popup2-confirm-bottom-btn" style="display: flex;border-radius: 0px 0px 6px 6px;">${bottomBtnHTML}</div>
                        </dd>
                    </div>
                </div>
            </div>
            `;
      if (options.only) {
        this.closeConfirm();
      }
      let jqConfirmHTML = $jq(confirmHTML);
      let setBottomBtn =
        options.ok.enable ||
        options.cancel.enable ||
        options.other.enable; /* 如果所有按钮都不存在的话 */
      if (!setBottomBtn) {
        jqConfirmHTML.find("dd.b_t").remove();
      }
      if (options.other.enable) {
        jqConfirmHTML.find("dd.b_t .popup2-confirm-bottom-btn").after(
          $jq(`
                <div>
                    <a href="javascript:;" class="tip_btn bg_f f_0 popup2-confirm-other" style="width: 100%;color: #f00000 !important;border-top: 1px solid #efefef !important;">${options.other.text}</a>
                </div>
                `)
        );
        jqConfirmHTML.find(".popup2-confirm-other").on("click", function () {
          Utils.tryCatch().run(options.other.callback);
        });
      }
      $jq("body").append(jqConfirmHTML);
      jqConfirmHTML
        .find(`.popup2-confirm-bottom-btn a:contains('${options.ok.text}')`)
        .on("click", () => {
          Utils.tryCatch().run(options.ok.callback);
        });
      jqConfirmHTML
        .find(`.popup2-confirm-bottom-btn a:contains('${options.cancel.text}')`)
        .on("click", () => {
          Utils.tryCatch().run(options.cancel.callback);
        });
      jqConfirmHTML
        .find(`.popup2-confirm-bottom-btn a:contains('${options.other.text}')`)
        .on("click", () => {
          Utils.tryCatch().run(options.other.callback);
        });
      if (options.mask) {
        this.showMask(maxZIndex);
      } else {
        this.closeMask();
      }
      return jqConfirmHTML;
    },
    toast: (param_options) => {
      let options = {
        text: "Call By popup2.toast",
        only: true,
        delayTime: 2000,
      };
      if (typeof param_options == "string") {
        options.text = param_options;
      } else {
        for (var key in options) {
          if (typeof param_options[key] !== "undefined") {
            options[key] = param_options[key];
          }
        }
      }

      if (options.only) {
        popup2.closeToast();
      }
      let toastobj = $jq(
        `<div class="popup2-toast" style="z-index:${
          Utils.getMaxZIndex() + 10
        };">${options.text}</div>`
      );
      $jq("body").append(toastobj);
      toastobj.css(
        "transform",
        `matrix(1, 0, 0, 1, 0, ${
          toastobj.outerHeight() > 80 ? toastobj.outerHeight() + 80 : 80
        })`
      );

      setTimeout(() => {
        toastobj.addClass("popup2-toast-show");
        setTimeout(() => {
          popup2.closeToast(toastobj);
        }, options.delayTime);
      }, 150);
    },
    showMask: function (zIndex = 0) {
      this.force_mask_init();
      $jq("#force-mask").show();
      if (zIndex !== 0) {
        $jq("#force-mask").css("z-index", zIndex);
      }
    },
    showLoadingMask: function () {
      this.force_mask_init();
      $jq("#force-mask")
        .html(
          `<img src="data:image/gif;base64,R0lGODlhPAA8AOZSAIuLi0xMTHNzcyYmJkFBQXBwcJ+fn0hISGNjY5iYmISEhH19fVVVVSsrK2VlZQ8PD4GBgUdHR1xcXJKSkmlpaUBAQHd3d0ZGRjAwMENDQ2pqaldXVx0dHTY2Nl5eXm9vbzs7Oz4+Pjk5OUtLSwQEBCcnJ5OTkzIyMiQkJDMzMzc3N09PTzw8PHt7e42NjQcHB2FhYSkpKU5OTmxsbD8/P0pKSiwsLFJSUkVFRRISEhYWFi4uLjU1NXV1dVhYWGhoaElJSUJCQlNTU4eHhygoKCoqKiEhIWRkZAsLCzExMTQ0NFpaWi8vLxkZGURERKamppmZmQAAADo6OgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAABSACwAAAAAPAA8AAAH/4BSgoOEhYaGBABPTwAEh4+QkZKQFIuLFJOZmpuKlgqboJIIBQeQnYsAkAcFCKGTE5YSj6eMjxKWE66QDJZPBo6GtKmIBr0MuocIvU8Fh8KHBcutyIUHxb2lhc/VywbZ1ITRvZ/avcOECsvN4IUECcvHhNuDvL0JwOyEyr258uaFsHpNy1euF6ZB86RU+kfQUD1LvxAylELgmqV4uhgg+GZowTILEi2ds7BsgSoEGA0FNFAAH6GKy7J59CToQDeXgwgUuNav0D5LCQaGKyno55NpMy2t8/lOoCFxywCkFNQU1aACCRIspZXAIS2lhmwus7TA5S2wkKA+kZUz6ViOg/8kWOy2VMrOJwpwtvPIMtzcXgbYHtI5FqhgahKqjm056UC6wszAqV2mAK4kBgG7gfu7aMLUTRQ4gxtr4CA1AiTJgnu8yIJeZAcWAGB8ugCABZYb6t7N21UHIzkeCB9O/EEOFLsRyAbAvLlzABQIPIhCvbr16xwaToaM6rr36y8aKuZu6bv5KOEJjif/ZPp57NrZm/tdvP4DHch1I1DwvL+C6L0FKOCAj6hgQwMYiACOTrflposITAwg4QA2rNaLa+wkUcKEE47WjWmh8FAEhxOWsFlhnoFiIIkcYiAZd5VNIgIGLE4YgxL5JMYdbYcosWGNJbg4SAYjBHABCJFU0AL/FCZo4BdkgR2iQo0S7qDgIBUEoGUAGUSiARRgQuHDS27FZAiNLDbAgyE1bBlABINsMMMMGwwCQZhQuGCIDF8tUpcgJ5AYwwmHZOBmADgIsoIAjAqwgiA94AmFk4YgMJ5Qg4w4QJBXFgJCkW6yIAgMjQrggSAXSGpCBYPd9URPhvBwggqQ4HCoE4M4UKoDg3wgaQ8nfbYJDYeOgKQgujbKqyAVmCDpDQJGcGgQhCTL6LKCHCEpBAEScCgQhVgrALaCDCHpqbuB0KabNIS7ayE3SOoCq7oZ6uYFhohLriBL4kkpQSyAuqWo7iprSKp4moAvQd662WW+7xryJZ7o5kPsOJbGHqLvIc3iCW1DQGxJL8QGH+JDmEPwRkAGBGsc8SEXaFAxgYWQWjLNoQhRqhA4uxJCsg6EoFsgACH5BAUAAFIALAAABQA8ADcAAAf/gFKCg4SDEoWIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+aMpcNKCmgnEhRUSQcHaeYKKqyLyivlhyyuQ8NtpMpucA6rr2QRCTAsqyWCp4duMiqL0TEkCk50Koc1JANqcgk25FGx8DhkR1NuTrmkik6D63s8vPhIkk2Dfn6+w02J/RSGgwYSLCgQQzzFBhcaDAGJwOSGEoc4HCewIkHE9rjx7HBjn8AQ4qcx+JChAwgMln4BMJJgJcBLowsFGQETJgzBdEAchPmiJkle97MIBJEBqEwa1QQWcEm0hFEB234IABGCEYEFDwxUCATC6QvcaQcFECAWQEbGBV4wvbJoUtH8IVGoIFoxlkBDgZpcOFCwyAAbZ8kQMQgEoGeNQgk2nBXgAdBHqBIhvJYyoLAT7pe4hkA6thCIajeVSylxWQoPQQdwGyAtCUaBFgs8tB4ySAIpyEMsoB5ga0DjT9cFYR7sm5BBAxgFnXKQWMhhIpLPi6IAmYAp1Y0/lFIOhTqgiZgRvAphN27B7rnLsQAcwLXmxjfhYHIO3hBWgNr3kRA9Fn4xK1XyGqBGZDeJtrdlVZ9AhayVmDkbQLcWcIlYl8iyQVWGCc/nBWAIhcmIkFbE3yywgYARtcgIgcUECE7phmXUyFHnHbEjIRUUBwES3ESCAAh+QQFAABSACwAAAMAPAA5AAAH/4BSgoOEhSgcKYWKi4yNjo9IUZJEj5WWl4QNkpIkHZiKCZ+YKJuSHKKoqCkkpVGJqbCWHK05sbaOHS+tDbe9iqSlSL7Dgw+tRsTDmqWdqQyxPCcqjTqtTcmVRQMDJRgiix2spa/Yiyfb6DEni7OlOuWMGOjzDTyKupsPtjKYKvP/O74NIlLqFLxFSkr8Q9eNEAdWOTw5WpBMhLyF22IoOShKhQ2M2zBwFMVD28ISI1ElUfgvJSoRTObtcJlKxY4G3mjq3MlzEYggFyIIHUo0wgUCPQdFCMC0qdOnGZICeEr1aY1hoTBV3RrgatKlXKFK/Vm0bAQcSJOqXct2EAEPDvg2hLhVAFuIJQLyCoDRVpGQD3r19h104EdgvR8GE4BxOPCGtiE2NNY7I0DbAIAnf3g8SIMJKC0q6CQwOa+HuYN8QFkNRYNOyY0dHFDkgjUUCIMKJEhQ9xK/SysOz1ixSINtKD0EIXjC/AkCeIYFbEZdqMJn2xcEKWj+hCK8AyvSLupxPLEgANwBqL1x3ITo8+kdPYMH4fgRQuibq+/p4fiQQvkxt99OFdRm2w0AxseTcba1oEiATwxI0wXXsZZdgvrx1J9trj2ooE7ssebeIhBKSEhW5QzBmg+MlJiUBxpcSOKHgw2yXYY1EkIBdxTkSAgB+QEgXi+BAAAh+QQFAABSACwAAAAAMAA5AAAH/4BSgoOEhYaGHQ9RUQ8dh4+QkY9Gi4tGkpiZhoqVOZqfUicYKpCciw+gmUUDrEqPpoypkjysrCUih7CospAntawYuZWxvI8qJb8DpIW6xZAYyTabw7vOhiIxyTzM1NaPvr9F3JXV3oUNyUmEzeaIybeD7LI0BCyQO8lM8d2yQAEBIzKAOCQC2a9lOoZ5SkXgn8MaBA5B+7VDEIphKGRlcMgxAg1D2Wo1GMThxQsOvFhwXIlj4CAlv4K1k1JhxEqHAQlhQGYDVyQFoEBsvPmvRoWZklhcIPovA1JJNPzdHPEUUxCbK6tiAuGEIw6tmVjgiCAQrNmzVUMIgeGgrdu3DtZgrDDrQIDdu3jzbgCbt2/eGXz9Cgasta7gvnu1qoXL2IGHuWgjS5Z8oQUEDUcnD6rwAYpnKC00Czpi4vNnzTeGmP5sgnKL1aY1oK2gAfZnFz7Q+iht24TsQQUMPFEQsd0F2557ZBYk4YnzJwVm1oYN4YahBM+fALDGYJCH1S48HCqQ/ckCpKqh+F5OiIDw7Aee3vBwAdKC8hZES5FR3kBxzQCUR4F+CJQ3gX4EYJddd6KRlx1Qoh3w3nPxiVZgdtHpx0B2/jljQDETPCeBfoQgUECFTwUCACH5BAUAAFIALAAAAAAwAC8AAAf/gFKCg4SFhoYiDQMDDSKHj5CRj0mLi0mSmJmGipU2mp9SBBkskJyLDZApHCigUkABsBWPpoyPRFG4SJ80sLAjIIe0qIYdL7i4w5gEvbAZwZW1hhzHuKyZLCPMAaSFwoYp1FEkKZ8Z2heb0MmDOeEcoCA12jTd6t3hLx2ty8xA9ZXrpCAJZ61VBG1BCHkbZCTcg1aDeDH7NWihlA4kwgUkdGAFAUg4tDmpaE9Qk3A6IP0QIODDhhCHQGRjxm0HNE9SwFEjoe/QCpZAZ6w4ZI4ZDkEnoJ0QpMMdpA1Aozo4YEherwiDMMSIgWHQA2ovIhGIStYDzEEVmDmDNO0YEUkBzT6QBeqSUIZsF4BB6tCUxDtMIaDOZTkjAMTDBGAMZrnh8OEDK+d+cOxYiFyylB2HWBIVRmbKBDw4ePm5tOnTqCscaQGhtevXEFp4QF0IApTbuHPr1kB7kO7ful30FgS8OBThw20b3z1cimrY0CH0mN28uvXrkg4oAFDgI/ZCBCw8Gf9EwXdCFAyQJ39eCoMJ68kb+K49/voC1wkUsE8+gYTrEqjHnwH4XXcAf+Mt4N11+9kHgAzXQSgIAvElgEB7g8D3BIELYugeAlRhGAgAIfkEBQAAUgAsAAAAADkALAAAB/+AUoKDhIWGhiARAQERIIePkJGShkGLi0GTmZqTipYXm6CPKxsEkJ2LEZAqGCehkD8CsQGPp4yPSgO5Ra6GB7GxHyGHtamGIjG5uTy8hCu/sRvDlraGGMm5rcyCBB/PAqWFxIYq1wMlKtqDG94whuKFNuUY6YMhM94H4dPFgzzlMSLoDXL27Ic+S/wEFSmXTaAgB96EEHonKEm5Bg4J4fAWbBBFESXKLQt1w8OnRx68LfG4bxCTcjsgpUCBsdAQKFBMaKhwKES3Z+BwTDtJ7lqJgIY6cCARJQoSQh5wSnXh4dC6Z1WlEJgGboe8QyheNB2LYpAGqWgh3DB075eDQRncatTIMKjBtRiGGjwYy5fDoAtoA/fgOSjAs2iQrCVTQqiDDr6QUxDy4SKwVJ2ENnSDIQySiHgl5g1aCnksCSKGKpy1jNOFD4FExJZuyqEDpAstWOPUkI7D7KY5JE+6cdOyiXRMSyOpuemICcvpSpMwwqzCB7Qt0uXg28R2ugs9IOxMp/SBDuEZ06tfn4kABQUA4sufD0ABAvaSADzZz7+//wL4QeLfgP4lEOAjBCb4hIEHGqKfgv81aIh79FUIwAL3Sajhhhx26OGHIIYo4ogklmjihwyEYgAoKT4SCAAh+QQFAABSACwDAAAAOQAwAAAH/4BSgoOEhYaDIQ4CAg4hh4+QkZKGQouLQpOZmpOKljCboI8eGheQnYsOkCwZBKGQQ1CxPo+njI8VAblAroY3sbEmFYe1qYYgI7m5NLyEHr+xGsOWtoYZybmtzIIXJs9QpYXEhizXASMs2oMa3i2G4oUX5RnpgxUu3jfh08WDNOU1IOgNcvZsiD5L/AQBKZdNoCAI3o4QeicoSLkIDgn5ehZsEMVj5ZaFYoDgAKQe3j543DfISTkckFSc4GFowpMnBgo0JFSh2zNwHqZ9kkLu2oiAhkRgKDFgQBFCCG5KTYDg0LpnPQStmLZCEA55h07EaEr2xKACUtMCkGHo3i8Ig+Y2zJixYVCEazUMdWhAti+GQQfSCl6w08ezaJCsJRM2SMSOvpBVEJJgQLDUnIQ0dGvB+BGIeCPmDVoKmWwJJYYIoLV8M4EEgUrGlm6KQQSkAwpY3yyQDsPspjYkT2Jg07KBdExLF6EJikJlwelKl0jCjICFtAvS2ejLxHa6AwsA6EyntMEO4RnTq1/PPj0KHQ/iy58f30iH9pA4RNnPv7//B/g9QoJ/BPoX4CEvFKhgFAcaot+C/zVoCAo50GdhDvZJqOGGHA5iQYcghijiiCSWaOKJ67EFSgKgqIjiizCOyEBGLmYSCAAh+QQFAABSACwMAAAAMAAwAAAH/4BSgoOEhRUQUFAQFYWNjo+QjkeJiUeRl5iQiJQtmZ6DCAUHmpSKkAQbK5+CE0+uEo+biRCPAQK3P58Srq4GBI6ypo0hH7e3o5kIvK4FwKW0jRvGt6qZBwbLT8iEwdCEBNMCH7+eBdkKjd2NMOEbqwQJ2QyF6oQH4TMhq1LKyxP0zwr9CFdtH4BsFLgFHCQknIN9gxhk8zWonhRi4XBAHLQgm4WKC6UsCecBEgsCNCIRwLYMWY9SnaSAm/ZBXyMQGUYECAAkkrllCwR5KFVSiod2jgjU2MmU3KN4vAAM0uDChYZBDqbNaEQjAtOvGSLt4tUMkjRjAQiBwPG1LYtLBdKwKXDqKAS7D+4G5WzLdASjjZ4qLOW7MwMIwJ4yEN554S1iTzr5Akn5+BPfEUEq77vw1clhzatwRsDhGLTp06hTFzqxo4Hr17BdJxGhWgqGAbhz697doHaJ3cB3144RvPiA2reN864t5YSN2NBtzGZOvXpQzR2aPNCRojqkHFHCR2nSwXsj8eJJGDFPiAR68Uh6s+fwHn2O7uaJvKgvnkN58xy4xx8JRLDXgQ78hYefFPNQx8QD/HHA3iAo7IceChMO0kGA4SGRYSEpoCBfdQ16EggAIfkEBQAAUgAsDAAAADAAOQAAB/+AUoKDhIUEAE9PAASFjY6PkI4UiYkUkZeYkIiUCpmen5uJAJAXGh6foJSKjz5QrkOfDJmhq40VLq6uN6iYtKONGrmup7yRvo0XwlAmF8XGqr+ELcoazs+U0YI3yi4V1prQhUPKxN+Ox4NHyhDWMteigxUmyrvmj+hSH8o9kAQrB9YWqOokJZkwE94ahdjwQYCAH84QqEIgqAc1RytmONy4YpAsTwUSJCgwCIIwF40OONjIcoO9QcFy+SAUwgPLm4xeSqkwzUS1QQxvbvwQQCekABqFOtwQwuijDUodwsjp1FFDoT8AVoUk9IMQXgStwWC5pOnWSwsdeKB6tq3bt5ndCOCIQLeuXbpBQLTNEKCv37+AI7StAbgw4MGGExc9y1dxYLcELtydfCEv3Mtnw5oTgaHBDhWYHdkYQHoAExGhCZUuXSJJakElVpcuwiM1BtmrbYDGrCQG7tIYUDvtkCMKCQ6EMMT+XUKJUw5RokchQkjEjt+kd798ID3Ki0YdGvzGYFRH9yjIG53wvfqE0RTnSXRwxHl5kapNzuuApOJE7aodkHBeA68JYsR5DxQoCBLnoaBgA+e9MF+BxXWX3mvwdUdCCgpC152DBXbwQncEKkiEdEgoOEgKHICYSSAAIfkEBQAAUgAsDAADADAAOQAAB/+AUoKDhIWGh4IHBQiIjY6PhhJPkxOQlpeDBAaTkwyYn44FnJOMoKaEB6NPBgenrlIKqgWvpwyqCQS0phOqpbqYFKoAv5+aqp7ElxaqC40XHjfJiaoGuYYVGiZQUEPSC7KHHi7b5B6DMrQAowmGNxDk8BrJopwShBU98PoXyQTfBrMGZdNHzoQPaYd8jCO4TUMFhIY0MNzWgh9EQ9oIDol28RBBE0dANXvVAt6Hhx0bYYPQw2LKlzBjGloBw4HNmzhtCgnRcYOAn0CDCnXQcYbQo0KLIl0qoCfTo0Q70sxJFcZOmViTjdQFwkkEHCyyFroQoGwAJyDECjJrdkQQtSPY2JoFQiNrBrlsL4SVWaEGXrMZ0koTYWNACQyEMsT9OwIlMQwDIg9QQggEjr9l94Li8OIFh0ENJA+IYYhGhL8ZTKGIwjoKCkE7RA9AbIiAX7bWPuVoHUWHIBWyS4g4BEJxWSCnHvB+MIiJ7B2NWBCoiwhdI+WtmQsSUUI2j47YWWsXlER2A/DLCxWRfeJi+CjjBfGQHWM4wvfxBRUWTVsafkPAiVaCCvelZwhkorXnn4GFcCfadwtmh4gSkhUB0X+IqICBggjtJqFaUhjBmxEgStEBdg90IE0gACH5BAUAAFIALAwADQAwAC8AAAf/gFKCg4SFhoeIhAcIEomOj5BSBAUGT08TkZmZCAmWngiDDJqjoQCepwWkqpILp64Hq6OUrp4GjbGREp20lgUEuJEFvJYKsMCRlbQToseZtAYUzaMKpxa/0pqTAAvG2N7f4OEeLRDl5uflRxXhUhpQ7/Dx8hDsLvL38vX4+1Ds7vzz2EkZh65gC3UCEypUIC3EEgcerik8BEOARQFLQkw0dPHiByEbCX3oePFHt4kbSHaEIVFhgBkqL27QCIkDiSg5OjgCcSHAiAyENoyM+SHAIyJRkkbh4ChDgKcB1g0K4SGmxZaGXiiN8mAQhhgxMAyKADVADUM4HMTckIjD1ig60QSdGEB3wAlBOMoGAGpoBcyOKxB1uLk1hSAbdQfsEMRC7wgQh0IItfgjkY63TQY1SNxgkBO9OBIRWHGyUIO3JHQK2ly3syAQI/TSiPXgrRFCrOm6FhREb4RVKN4iMc25EBC9WCF10Lp19+rihGjorQFZk9utOQzlHuBcUM+yfCOlIKzUMPHWhhqXHcEiU/CtTLVDL+S0bHJEp5WmPrS9++vYUM2WCRJKEYHffIVUABUQpKDAgXn8IVgICxncdwxi6IVESBKJJaEhISKw1oAI3gQCACH5BAUAAFIALAMADAA5ADAAAAf/gFKCg4SDDIWIiYoyio2Oj5CRhIeSlZaXmJmam5yMnJ+gmQuhpKWmp6ipqqusra6vsLGykQgLALe4ubcUBLIFT8DBwsMAsgnDyMPGycxPvs3IxbIICrrWCryz2topOQ8cHZwVHxA9F58dTVHrUTmcLVDxUB8VmkYk7Oyc8vImR5cNkORjR4KTCX7yhtyI1G1gPg6cNCDk1+Kcog4cHLJ7QQSUDxcT5WmoV4gIPo0kIA7CUGKADRGOQsAQ8GEDIQ0HQ5rwQSiFxnU6wg1SMqDoAAyONghYKiAAoQo9QsazKCWjwwcNEMUwOiCroAw1amQY5ICpgBmIbkAIqWEQioEv4lAkwsB1wA5BBALoDdBLigezAmwi8gCSnwdCAqOkFFpIREuuKgRd2BsAB17AH0IkqoAz3hBEDVCkaLSjLpNBEShHGLQE8GFFFzwsvNShbgmYglLvXS0oxAfAB041qJuEkG69vAUJAezA1Im6RQodD5Bc0A/AK0iJ2MqVh3TVhQ4AnqEZFF2uNhBNry5oplnBnFQ8Nhr5+25EBDD33fScK1L14CGilFnZccIDVzHgZh9yifhmVnCfFGGUEoqsp0gATP1AygkY1JeIhYoQsEGBr0x23zaJBEFZECgmAoJuF4BQSiAAOw==" class="comiis_loading comiis_noloadimage">`
        )
        .show();
    },
    closeMask: function () {
      $jq("#force-mask").html("").hide();
      document.documentElement.style.overflow = "auto";
    },
    closeToast: (toastobj) => {
      if (toastobj) {
        toastobj.remove();
      } else {
        $jq(".popup2-toast").remove();
      }
    },
    closeConfirm: function () {
      this.closeMask();
      $jq.each($jq(".popup2-popmenu"), function (index, obj) {
        $jq(obj).remove();
      });
    },
  };

  /**
   * 检测dz论坛使用的模板id，从而判断是桌面端还是移动端
   * @returns true || false
   */
  const envIsMobile = () => {
    var _unsafeWindow_ = window;
    if (typeof unsafeWindow !== "undefined") {
      _unsafeWindow_ = unsafeWindow;
    }
    return !(_unsafeWindow_.STYLEID === "4");
  };
  /**
   * 对于xtip的toast优化，只能仅且出现一个toast
   */
  let xtips = {
    value: [],
    toast: (text, options) => {
      xtips.value.forEach((item) => {
        xtip.close(item);
      });
      xtips.value = [];
      let xtip_toast_id = null;
      if (options == null) {
        xtip_toast_id = xtip.msg(text);
      } else {
        xtip_toast_id = xtip.msg(text, options);
      }
      xtips.value = xtips.value.concat(xtip_toast_id);
    },
  };

  /**
   * 对于MT论坛的一些可能会产生变化的window对象或者url或者DOM的定义，方便修改
   */
  let MT_CONFIG = {
    /**
     * 页面元素的一些获取
     * @returns Node
     */
    element: {
      selectBeauty: function () {
        /* 下拉列表对象 */
        return document.querySelector(
          MT_CONFIG.elementQuerySelector.selectBeauty
        );
      },
      comboxSwitch: function () {
        /* 复选框对象 */
        return document.querySelector(
          MT_CONFIG.elementQuerySelector.comboxSwitch
        );
      },
      comiisVerify: function () {
        /* 帖子内各个人的信息节点【list】 */
        return document.querySelectorAll(
          MT_CONFIG.elementQuerySelectorAll.comiisVerify
        );
      },
      comiisFormlist: function () {
        /* 导读中最新、热门、精华、恢复、抢沙发的各个帖子【list】 */
        return document.querySelectorAll(
          MT_CONFIG.elementQuerySelectorAll.comiisFormlist
        );
      },
      comiisMmlist: function () {
        /* 帖子内评论，包括帖子内容主体，第一个就是主体【list】 */
        return document.querySelectorAll(
          MT_CONFIG.elementQuerySelectorAll.comiisMmlist
        );
      },
      comiisPostli: function () {
        /* 帖子内评论，包括帖子内容主体，第一个就是主体【list】 */
        return document.querySelectorAll(
          MT_CONFIG.elementQuerySelectorAll.comiisPostli
        );
      },
      postBottomControls: function () {
        /* 帖子底部一栏控件 */
        return document.querySelectorAll(
          MT_CONFIG.elementQuerySelectorAll.postBottomControls
        );
      },
      postListOfComments: function () {
        /* 帖子内评论列表 */
        return document.querySelectorAll(
          MT_CONFIG.elementQuerySelectorAll.postListOfComments
        );
      },
      postNextCommect: function () {
        /* 帖子内评论下一页的按钮 */
        return document.querySelectorAll(
          MT_CONFIG.elementQuerySelectorAll.postNextCommect
        );
      },
    },
    elementQuerySelector: {
      selectBeauty: "select.beauty-select" /* 本脚本的选择器下拉列表 */,
      comboxSwitch: "code.whitesevcheckbox" /* 本脚本的开关选择器 */,
    },
    /**
     * 页面的元素的选择器
     * @returns "div....."
     */
    elementQuerySelectorAll: {
      comiisVerify: "span.comiis_verify" /* 帖子内各个人的信息节点【list】 */,
      comiisFormlist:
        "li.forumlist_li" /* 导读中最新、热门、精华、恢复、抢沙发的各个帖子【list】 */,
      comiisMmlist:
        ".comiis_mmlist" /* 帖子内评论，包括帖子内容主体，第一个就是主体【list】 */,
      comiisPostli:
        "div.comiis_postli.comiis_list_readimgs.nfqsqi" /* 帖子内评论，包括帖子内容主体，第一个就是主体【list】 */,
      postBottomControls:
        ".comiis_znalist_bottom.b_t.cl" /* 帖子底部一栏控件 */,
      postListOfComments: "div.comiis_postlist.kqide" /* 帖子内评论列表(总) */,
      postNextCommect:
        "div.comiis_page.bg_f>a:nth-child(3)" /* 帖子内评论下一页的按钮 */,
    },
    /**
     * 网页地址的正则匹配规则
     */
    urlRegexp: {
      bbs: /bbs.binmt.cc/ /* 论坛 */,
      searchUrl: /bbs.binmt.cc\/search.php/g /* 搜索页 */,
      chatUrl: /home.php\?mod=space&do=pm&subop=view/g /* 聊天页 */,
      homeUrl: /home.php\?mod=spacecp&ac=profile&op=info/g /* 个人空间页 */,
      homeUrlBrief: /home.php\?mod=space/g /* 个人空间页简略url */,
      homeUrlWithAt: /bbs.binmt.cc\/space-uid-/g /* 个人空间页的@点进去 */,
      homeKmisignUrl:
        /bbs.binmt.cc\/(forum.php\?mod=guide&view=hot(|&mobile=2)|k_misign-sign.html)/g /* 主页和签到页链接 */,
      homeSpaceUrl:
        /bbs\.binmt\.cc\/home\.php\?mod=space&do=profile&mycenter/g /* 【我的】 个人信息页链接 */,
      homeSpacePCUidUrl: /space-uid-(.*?).html/ /* PC 个人空间链接uid */,
      replyForum:
        /bbs.binmt.cc\/forum.php\?mod=post&action=reply/g /* 回复的界面url */,
      signUrl: "" /* 签到url */,
      navigationUrl:
        /forum.php\?mod=guide(&index=1|)&view=(newthread|hot|digest|new|sofa)(&index=1|)/g /* 导读链接，包括最新、热门、精华、回复、抢沙发 */,
      communityUrl: /forum.php\?forumlist/ /* 社区 */,
      forumPost:
        /(bbs.binmt.cc\/thread-|bbs.binmt.cc\/forum.php\?mod=viewthread)/g /* 帖子链接 */,
      forumPostPC: /.*:\/\/bbs.binmt.cc\/thread.*/ /* 资料设置 */,
      dataSettingUrl:
        /mod=space&do=profile&set=comiis&mycenter=1/ /* 帖子链接-PC */,
      forumGuideUrl: /bbs.binmt.cc\/forum.php\?mod=guide/g /* 导读链接 */,
      forumPostReply:
        /forum.php\?mod=post&action=reply/g /* 帖子中回复的链接 */,
      forumPostPage: "&page=(.*)" /* 帖子链接的当前所在页 page */,
      forumPostPCPage:
        /thread-([\w]+)-|&tid=([\w]+)/i /* PC帖子链接的当前所在页 page */,
      forumPlateText:
        /休闲灌水|求助问答|逆向教程|资源共享|综合交流|编程开发|玩机教程|建议反馈/g /* 各版块名称 */,
      plateUrl:
        /bbs.binmt.cc\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g /* 板块链接 */,
      formhash: /formhash=(.+)&/ /* 论坛账号的凭证 */,
      hash: /hash=(.+)&/ /* 论坛账号的凭证 */,
      fontSpecial:
        /<font.*?>|<\/font>|<strike>|<strong>|<i>|<u>|align=".*?"|<br>[\s]*<br>[\s]*<br>/g /* 帖子内特殊字体格式 */,
      forumPostGuideUrl:
        /bbs.binmt.cc\/page-[1-5].html|bbs.binmt.cc\/forum.php\?mod=guide/g /* 帖子链接和导读链接 */,
      MTUid: /uid=(\d+)/ /* discuz uid */,
      nologin: /member.php\?mod=logging&action=login(|&mobile=2)/g /* 未登录 */,
      kMiSignSign: "bbs.binmt.cc/k_misign-sign.html" /* 签到url */,
      postForum: /forum.php\?mod=post&action=newthread/ /* 发布帖子 */,
      editForum: /forum.php\?mod=post&action=edit/ /* 编辑帖子 */,
      spacePost: /home.php\?mod=space.*?type=reply/ /* 个人空间-帖子 */,
      formPostParam_ptid: /&ptid=([\d]+)/i /* 帖子链接的ptid参数 */,
      formPostParam_pid: /&pid=([\d]+)/i /* 帖子链接的pid参数 */,
    },
    /**
     * 脚本开始执行的时间
     */
    gmRunStartTime: Date.now(),
    /**
     * dz论坛在cookie中保存的键所使用的的前缀
     * @returns
     */
    getCookiePre: () => {
      return unsafeWindow.cookiepre;
    },
    /**
     * 当前账号的uid
     * @returns 666666
     */
    getUID: () => {
      return unsafeWindow.discuz_uid;
    },
    /**
     * 当前账号的formhash(有延迟仅移动端)
     * @returns xxxxxx
     */
    getFormHash: () => {
      return unsafeWindow.formhash;
    },
    /**
     * 根据UID获取小|中|大头像
     * @param {String} uid
     * @param {String} size small|middle|big
     * @returns
     */
    getAvatar: (uid, size = "") => {
      return `https://bbs.binmt.cc/uc_server/avatar.php?uid=${uid}&size=${size}&ts=1`;
    },
    /**
     * 方法执行的一些环境判断，如当前所在URL判断和GM_getValue值判断
     */
    methodRunCheck: (matchURL = [], localGMKey = "") => {
      let urlMatchResult = false;
      let localResult = false;
      let currentURL = window.location.href;
      if (localGMKey === "") {
        localResult = true;
      } else {
        localResult = GM_getValue(localGMKey) ? true : false;
      }
      if (matchURL.length == 0) {
        urlMatchResult = true;
      }
      matchURL.forEach((item) => {
        if (currentURL.match(new RegExp(item), "ig")) {
          urlMatchResult = true;
        }
      });
      return localResult && urlMatchResult;
    },
    /**
     * 图片预览黑名单
     * 当前图片链接的主机名，匹配方式为 indexOf
     * 当前图片链接的路径名，匹配方式为 match
     */
    blackListNoViewIMG: [
      {
        hostName: "avatar-bbs.mt2.cn",
        pathName: "*",
      },
      {
        hostName: "cdn-bbs.mt2.cn",
        pathName: "^(/static(/|//)image|/template)",
      },
      {
        hostName: "bbs.binmt.cc",
        pathName: "^(/static(/|//)image|/template)",
      },
      {
        hostName: "bbs.binmt.cc",
        pathName: "/uc_server/avatar.php",
      },
    ],
  };

  /**
   * 检测引用库是否正确加载
   * @example	https://unpkg.com/any-touch/dist/any-touch.umd.min.js
   * @example https://greasyfork.org/scripts/449471-viewer/code/Viewer.js
   * @example https://greasyfork.org/scripts/449512-xtiper/code/Xtiper.js
   * @example https://greasyfork.org/scripts/449562-nzmsgbox/code/NZMsgBox.js
   * @example https://greasyfork.org/scripts/452322-js-watermark/code/js-watermark.js
   * @example https://greasyfork.org/scripts/456607-gm-html2canvas/code/GM_html2canvas.js
   * @example https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js
   */
  function checkResource() {
    function _checkResouce_(
      checkObj,
      name = "",
      url = "",
      replaceJQueryNewName = ""
    ) {
      if (typeof checkObj === "undefined") {
        GM_referenceJavascriptResource(url, replaceJQueryNewName).then(
          (resolve) => {
            if (resolve) {
              console.log(
                `check: %c ${name} %c √ 修复`,
                "background:#24272A; color:#ffffff",
                "color:#00a5ff"
              );
            } else {
              console.log(
                `check: %c ${name} %c ×`,
                "background:#24272A; color:#ffffff",
                "color:#f90000"
              );
            }
          }
        );
      } else {
        console.log(
          `check: %c ${name} %c √`,
          "background:#24272A; color:#ffffff",
          "color:#00a5ff"
        );
      }
    }
    _checkResouce_(
      AnyTouch,
      "AnyTouch",
      "https://unpkg.com/any-touch/dist/any-touch.umd.min.js"
    );
    _checkResouce_(
      Viewer,
      "Viewer",
      "https://greasyfork.org/scripts/449471-viewer/code/Viewer.js"
    );
    _checkResouce_(
      xtip,
      "xtip",
      "https://greasyfork.org/scripts/449512-xtiper/code/Xtiper.js"
    );
    _checkResouce_(
      $jq.NZ_MsgBox,
      "NZ_MsgBox",
      "https://greasyfork.org/scripts/449562-nzmsgbox/code/NZMsgBox.js",
      "$jq"
    );
    _checkResouce_(
      Watermark,
      "Watermark",
      "https://greasyfork.org/scripts/452322-js-watermark/code/js-watermark.js"
    );
    _checkResouce_(
      html2canvas,
      "html2canvas",
      "https://greasyfork.org/scripts/456607-gm-html2canvas/code/GM_html2canvas.js"
    );
    _checkResouce_(
      Utils,
      "Utils",
      "https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js"
    );
  }

  /**
   * 脚本环境的一些兼容，比如X浏览器
   * @returns true || false
   */
  function envCheck() {
    let checkStatus = true;
    let isFailedFunction = [];
    console.log("正在检测脚本环境...");
    if (typeof $ != "undefined") {
      window.$jq =
        $.noConflict(
          true
        ); /* 为什么这么写，非油猴管理器使用该脚本没有容器环境，会修改页面的jQuery */
      console.log(
        `check: %c $jq %c √ jQuery版本:${$jq.fn.jquery}`,
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
      if ($jq.fn.jquery != "3.4.1") {
        console.log(
          "jQuery加载错误,如果是非油猴加载本脚本方式,请放到网页加载完毕后执行"
        );

        return false;
      }
      if (typeof jQuery != "undefined") {
        if (jQuery.fn.jquery === "3.4.1") {
          /* 恢复页面的jQuery失败，再试一次 */
          window.$jq = $.noConflict(true);
        }
        console.log(
          `check: %c $ %c √ 网站的jQuery版本:${
            $.fn ? $.fn.jquery : jQuery.fn.jquery
          }`,
          "background:#24272A; color:#ffffff",
          "color:#00a5ff"
        );
      }
    } else {
      checkStatus = false;
      isFailedFunction = isFailedFunction.concat("jQuery");
      console.log(
        "check: %c $ %c ×",
        "background:#24272A; color:#ffffff",
        "color:#f90000"
      );
    }
    /* x浏览器，知不知道GM_xmlhttpRequest是跨域用的，还判断cors？多此一举 */
    if (typeof mbrowser != "undefined") {
      window.GM_xmlhttpRequest_isRepair = false;
      let trans_id = uuid();
      let mbrowserUserScriptId = user_script_id;
      GM_xmlhttpRequest = (req) => {
        _XJSAPI_.g_gm_callback_map[
          `_${mbrowserUserScriptId}_${trans_id}_GM_xmlhttpRequest`
        ] = req;
        if (req.url && !req.url.startsWith("http")) {
          req.url = `${window.location.origin}/${req.url.replace(/^\//, "")}`;
        }
        if (req.data) {
          if (req.headers) {
            if (!req.headers["Content-type"]) {
              req.headers["Content-type"] = "application/x-www-form-urlencoded";
            }
          } else {
            req.headers = {
              "Content-type": "application/x-www-form-urlencoded",
            };
          }
          if (typeof req.data == "object") {
            var _formData = null;
            for (key of req.data.keys()) {
              if (!_formData) {
                _formData = `${key}=${req.data.get(key)}`;
              } else {
                _formData += `&${key}=${req.data.get(key)}`;
              }
            }
            req.data = _formData;
          }
        }
        mbrowser.GM_xmlhttpRequest(
          mbrowserUserScriptId,
          trans_id,
          JSON.stringify(req)
        );
      };
      console.log(
        "check: %c GM_xmlhttpRequest %c √ 替换成X浏览器的GM.xmlHttpRequest",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    } else if (typeof GM_xmlhttpRequest === "undefined") {
      window.GM_xmlhttpRequest_isRepair = true;
      isFailedFunction = isFailedFunction.concat("GM_xmlhttpRequest");
      console.log(
        `check: %c GM_xmlhttpRequest %c 修复,该函数不存在,替换成ajax`,
        "background:#24272A; color:#ffffff",
        "background:#fff;"
      );
      window.GM_xmlhttpRequest = (requestData) => {
        console.log(`$jq.ajax请求 url: ${requestData.url}`);
        console.log("jq.ajax请求的数据: ", requestData);
        let headers_options = {};
        let headers_options_key = [
          "Accept-Charset",
          "Accept-Encoding",
          "Access-Control-Request-Headers",
          "Access-Control-Request-Method",
          "Connection",
          "Content-Length",
          "Cookie",
          "Cookie2",
          "Date",
          "DNT",
          "Expect",
          "Host",
          "Keep-Alive",
          "Origin",
          "Referer",
          "TE",
          "Trailer",
          "Transfer-Encoding",
          "Upgrade",
          "User-Agent",
          "Via",
        ];
        if (requestData.headers != null) {
          Array.from(headers_options_key).forEach((item) => {
            delete requestData.headers[item];
          });
        } else {
          requestData.headers = {};
        }
        $jq.ajax({
          url: requestData.url,
          type: requestData.method,
          data: requestData.data,
          timeout: requestData.timeout,
          dataType: requestData.responseType,
          headers: headers_options,
          success: (response) => {
            if (typeof response === "string") {
              requestData.onload({ responseText: response, type: "ajax" });
            } else {
              requestData.onload(response);
            }
          },
          error: (response) => {
            if (response.status == 200) {
              if (typeof response === "string") {
                requestData.onload({ responseText: response, type: "ajax" });
              } else {
                requestData.onload(response);
              }
            } else {
              if (typeof response === "string") {
                requestData.onerror({ responseText: response, type: "ajax" });
              } else {
                requestData.onerror(response);
              }
            }
          },
        });
      };
    } else {
      window.GM_xmlhttpRequest_isRepair = false;
      console.log(
        "check: %c GM_xmlhttpRequest %c √",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    }

    var loadNetworkResource = [];
    window.GM_referenceJavascriptResource = (url, newJQuery = "") => {
      /* 重新引用JavaScript文件，并且可自定义jQuery引用名 */
      return new Promise((resolve) => {
        if (loadNetworkResource.indexOf(url) != -1) {
          console.log("已加载该js:", url);
          resolve(true);
        }
        GM_xmlhttpRequest({
          url: url,
          method: "GET",
          async: false,
          timeout: 10000,
          onload: (response) => {
            let execStatus = false;
            let scriptText = response.responseText;
            if (newJQuery != "") {
              scriptText = `let $ = ${newJQuery};let jQuery = ${newJQuery};\n${scriptText}`;
            }
            try {
              eval(scriptText);
              execStatus = true;
              loadNetworkResource = [...loadNetworkResource, url];
            } catch (error) {
              console.log(`eval执行失败`, error);
              execStatus = false;
            }
            resolve(execStatus);
          },
          onerror: () => {
            console.log("网络异常,加载JS失败", url);
            resolve(false);
          },
        });
      });
    };
    window.GM_asyncLoadScriptNode = (url) => {
      /* 异步加载JS文件 */
      return new Promise((resolve) => {
        let tempNode = document.createElement("script");
        tempNode.setAttribute("src", url);
        document.head.append(tempNode);
        tempNode.onload = () => {
          resolve();
        };
      });
    };
    window.GM_asyncLoadStyleSheet = (url) => {
      /* 异步加载CSS文件 */
      if (loadNetworkResource.indexOf(url) != -1) {
        console.log("已加载该css:", url);
        return;
      }
      loadNetworkResource = loadNetworkResource.concat(url);
      let cssNode = document.createElement("link");
      cssNode.setAttribute("rel", "stylesheet");
      cssNode.setAttribute("href", url);
      cssNode.setAttribute("type", "text/css");
      document.head.append(cssNode);
    };
    if (typeof GM_getValue === "undefined") {
      window.GM_getValue = (key, defaultValue) => {
        let value = window.localStorage.getItem(key);
        if (typeof value == "string" && value.trim() != String()) {
          value = JSON.parse(value);
        } else if (defaultValue != null) {
          value = defaultValue;
        }
        return value;
      };
      console.log(
        "check: %c GM_getValue %c √ 修复",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    } else {
      console.log(
        "check: %c GM_getValue %c √",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    }
    if (typeof GM_setValue === "undefined") {
      window.GM_setValue = (key, value) => {
        if (value == undefined) {
          value = null;
        }
        window.localStorage.setItem(key, JSON.stringify(value));
      };
      console.log(
        "check: %c GM_setValue %c √ 修复",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    } else {
      console.log(
        "check: %c GM_setValue %c √",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    }
    if (typeof GM_deleteValue === "undefined") {
      window.GM_deleteValue = (key) => {
        window.localStorage.removeItem(key);
      };
      console.log(
        "check: %c GM_deleteValue %c √ 修复",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    } else {
      console.log(
        "check: %c GM_deleteValue %c √",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    }
    if (typeof GM_addStyle === "undefined") {
      window.GM_addStyle = (styleText) => {
        let cssDOM = document.createElement("style");
        cssDOM.setAttribute("type", "text/css");
        cssDOM.innerHTML = styleText;
        document.documentElement.insertBefore(
          cssDOM,
          document.documentElement.children[0]
        );
        return cssDOM;
      };
      console.log(
        "check: %c GM_addStyle %c √ 修复",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    } else {
      console.log(
        "check: %c GM_addStyle %c √",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    }
    if (typeof GM_setClipboard === "undefined") {
      window.GM_setClipboard = (text) => {
        Utils.setClip(text);
      };
      console.log(
        "check: %c GM_setClipboard %c √ 修复",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    } else {
      console.log(
        "check: %c GM_setClipboard %c √",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    }
    if (typeof unsafeWindow === "undefined") {
      window.unsafeWindow = window;
      console.log(
        "check: %c unsafeWindow %c √ 修复",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    } else {
      console.log(
        "check: %c unsafeWindow %c √",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    }
    if (typeof GM_cookie === "undefined") {
      unsafeWindow.GM_cookie = new Utils.GM_Cookie();
      console.log(
        "check: %c GM_cookie %c √ 修复",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    } else {
      console.log(
        "check: %c GM_cookie %c √",
        "background:#24272A; color:#ffffff",
        "color:#00a5ff"
      );
    }
    checkResource();
    if (checkStatus) {
      console.log(`脚本环境检测结果: 通过`);
    } else {
      let isFailedStr = "";
      Array.from(isFailedFunction).forEach((item) => {
        isFailedStr += item + "、";
      });
      isFailedStr = isFailedStr.replace(/、$/, "");
      console.log(`脚本环境检测结果: ${isFailedStr}失败`);
    }

    return checkStatus;
  }

  /**
   * PC端的方法
   */
  const pc = {
    main() {
      /* 电脑版函数按顺序加载 */
      /* 禁止自动执行的函数(这些函数在其它地方调用) */
      const notRunFunc = ["main"];
      Object.keys(pc).forEach((key) => {
        if (typeof pc[key] !== "function" || notRunFunc.indexOf(key) != -1) {
          return;
        }
        Utils.tryCatch().run(pc[key], this);
      });
    },
    initPopup2() {
      /* 兼容PC端 popup2的toast */
      popup2.toast = (text) => {
        if (typeof text == "string") {
          xtips.toast(text);
        } else {
          xtips.toast(text.text, {
            times: text.delayTime ? text.delayTime / 1000 : 2,
          });
        }
      };
    },
    /**
     * 附件点击提醒
     */
    attachmentClickReminder() {
      if (!window.location.href.match(MT_CONFIG.urlRegexp.forumPost)) {
        return;
      }
      /**
       * 处理元素内的a标签的点击
       * @param {HTMLElement} item
       */
      function handleClick(item) {
        if (item.hasAttribute("href")) {
          console.log("发现附件", item);
          item.setAttribute("data-href", item.getAttribute("href"));
          item.removeAttribute("href");
          let attachmentName = item.innerText;
          item.innerText = "【已拦截】" + attachmentName;
          item.onclick = function () {
            $jq.NZ_MsgBox.confirm({
              title: "提示",
              showIcon: true,
              content: `<br />确定下载附件 <a style="color: #507daf !important;">${attachmentName}</a> ？<br /><br />`,
              type: "warning",
              callback: function (resu) {
                console.log(resu);
              },
            });
          };
        }
      }
      Utils.mutationObserver(document.documentElement, {
        callback: () => {
          document.querySelectorAll(".attnm a").forEach((item) => {
            handleClick(item);
          });
          document.querySelectorAll(".comiis_attach a").forEach((item) => {
            handleClick(item);
          });
          document.querySelectorAll("span[id*=attach_] a").forEach((item) => {
            handleClick(item);
          });
        },
        config: { childList: true, subtree: true },
      });
      Utils.waitNode(".attnm a").then(() => {
        document.querySelectorAll(".attnm a").forEach((item) => {
          handleClick(item);
        });
      });
      Utils.waitNode(".comiis_attach a").then(() => {
        document.querySelectorAll(".comiis_attach a").forEach((item) => {
          handleClick(item);
        });
      });
      Utils.waitNode("span[id*=attach_] a").then(() => {
        document.querySelectorAll("span[id*=attach_] a").forEach((item) => {
          handleClick(item);
        });
      });
    },
    collectionForumPost() {
      /* 悬浮按钮-添加收藏帖子功能 */
      if (!window.location.href.match(MT_CONFIG.urlRegexp.forumPost)) {
        return;
      }
      var own_formhash = document.querySelector(
        "#scform > input[type=hidden]:nth-child(1)"
      ).value;
      var collect_href_id = window.location.href
        .match(MT_CONFIG.urlRegexp.forumPostPCPage)
        .filter(Boolean);
      collect_href_id = collect_href_id[collect_href_id.length - 1];
      var collect_href = `https://bbs.binmt.cc/home.php?mod=spacecp&ac=favorite&type=thread&id=${collect_href_id}&formhash=${own_formhash}`;
      var new_collect = document.createElement("span");
      var old_Suspended = document.querySelector("#scrolltop");
      new_collect.innerHTML = `
			<a href="${collect_href}" 
				id="k_favorite"
				onclick="showWindow(this.id, this.href, 'get', 0);"
				onmouseover="this.title = $('favoritenumber').innerHTML + ' 人收藏'">
				<img src="https://s1.ax1x.com/2020/04/29/JTk3lD.gif"
						 height="26" 
						 width="26" 
						 style="position:absolute;top:10px;left:11px">
			</a>
			`;
      old_Suspended.insertBefore(new_collect, old_Suspended.children[0]);
    },
    detectUserOnlineStatus() {
      /* 探测用户在线状态 */
      if (
        !window.location.href.match(MT_CONFIG.urlRegexp.forumPostPC) ||
        !GM_getValue("detectUserOnlineStatus", false)
      ) {
        return;
      }
      console.log("探测用户在线状态");
      var quanju = [];
      var cishu = 0;
      for (
        var favatar = document.getElementsByClassName("pls favatar"), index = 0;
        index < favatar.length;
        index++
      ) {
        var sendMessage = favatar[index].getElementsByClassName("comiis_o cl");
        if (sendMessage.length !== 0) {
          var sendmessageurl = sendMessage[0].getElementsByTagName("a")[1].href;

          let xhr = new XMLHttpRequest();
          xhr.open("GET", sendmessageurl, false);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              let pattern = /正在.*]/g;
              let str = xhr.responseText;
              let newstr = str.match(pattern)[0];
              quanju.push(newstr);
            }
          };
          xhr.send();
          let offLineStaus = quanju[cishu].match("离线") ? true : false;
          cishu = cishu + 1;
          var onlineStatusImage = document.createElement("img");
          onlineStatusImage.src = offLineStaus
            ? "https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png"
            : "https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png";
          onlineStatusImage.smilied = offLineStaus ? "1353" : "1384";
          onlineStatusImage.border = "0";
          onlineStatusImage.style = "float:right";
          favatar[index].insertAdjacentElement("afterbegin", onlineStatusImage);
        }
      }
    },
    guideOptimization() {
      /* 导读浏览优化 */
      if (!window.location.href.match(MT_CONFIG.urlRegexp.forumGuideUrl)) {
        return;
      }
      if (!GM_getValue("guideOptimization", false)) {
        return;
      }
      GM_addStyle(`
      table > tbody[id^=normal] >tr{
        display: none;
      }
      .xst{
        font-size: 15px;
      }
      td.author_img{
        width: 50px;
        padding: 15px 0;
      }
      td.author_img img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .list_author{
        margin-top: 2px;
        color: #999;
        font-size: 12px;
      }
      .bankuai_tu_by a{
        color: #999 !important;
      }
      .bankuai_tu_by img{
        height: 16px;
        margin: 1px 1px 0 0;
        vertical-align: top;
      }
      tbody a:hover{
        text-decoration: none;
        color: #3498db;
      }
      .byg_th_align em + a{
        margin-right: 5px;
      }
      `);
      let formList = $jq(".bm_c table tbody");
      formList.each((index, item) => {
        let tableNode = $jq(item);
        let formListTr = tableNode.find("tr");
        let commonHTML = tableNode.find("th.common").html();
        let formUrl = tableNode
          .find("th.common")[0]
          .querySelectorAll("a")[0]
          .getAttribute("href");
        let mid = null;
        let uid = tableNode
          .find("td.by>cite>a")[0]
          .getAttribute("href")
          .match(/uid-(\d+)/)[1];
        let newHTML = `
        <td class="author_img">
          <a href="space-uid-${uid}.html" c="1" mid="${mid}">
          <img src="${MT_CONFIG.getAvatar(uid, "middle")}"></a>
        </td>
        <th colspan="3" class="new byg_th">
          <div class="byg_th_align">
             ${commonHTML}
          </div>
          <div class="list_author cl">
              <span class="z">作者:&nbsp;
                  ${tableNode.find("td.by>cite>a")[0].innerHTML}
                  ${tableNode.find("td.by>em>span")[0].innerHTML}
              </span>
              <span class="z pipe">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <span class="z">最后发表:&nbsp;
                  ${
                    tableNode.find("td.by>cite>a")[1].innerHTML
                  }&nbsp;&nbsp;&nbsp;
                  ${tableNode.find("td.by>em>a")[0].innerHTML}
              </span>
              <span class="y bankuai_tu_by">
                <a href="${formUrl}">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACOUlEQVRYR+1X0XETMRDdtfRP0gFUgG9O+iZUAKmApAJMBZgKMBUQKohTQcy3dHOmApIOzL/lZTbc3eh0ki/kfMkww37Zlkbv7e7bJxnhiQOfGB/+HQJlWR45594AwAkAvAWAo6B6GwBYAsBKCHGVZRl/743eCjDwbrd7T0SzCGgKYIOIi8lk8qWPyF4C1lrO9OtfAIeEuArnSimuTDSSBIqiOCMiBh8ciPghz/NF7KAogUOC16CIeJ7n+UVIokPAGHOCiNeD044cQESvtdYrf6lDwFq7BoCXIxFYa62zJIFKdJdjgHtnnvqibFXAWss9ejcygW9KqbNGGz6YtZbH5tnIBDZKqeMUAQrBieiT1noemYwfQgj2CXDO8Zw3uqkVb4yZI+LH8EylVFP55kNZllPnXLlvszFmhYiveI8/20VRzIjoM/9ORN+11mzXd2Gt7SQlhMiyLGOxty+j2OZ6dKq74Kfnikul1GkFwhXge4JjI4R4wRacGuloBVJsq0N5dqehJRPRnywQec0P1hKvNZXwF5ME/BKPKMQrpdSddjotGMOCw0RCS275QNXnmxFH8VYIMfWv6I4V+4oeoQ0tF+y0wBsdX9WH4tFywKgG6h+rVrDyD3UpRcGTFfAqMfhuqJ00Vca9T7IhbwN2RCnlrHa8xyJwyy9jIlqGD4+DEOCsAGAupbzZbrfP/UOllOu+F3CMxN4WeMb0CxFnsTfd0BHp08CcAaSUi4dkdx9yvX9M7nPIkD3/CfwGBboJMIftEqkAAAAASUVORK5CYII=" />${
                    tableNode.find("td.num>a")[0].innerText
                  }
                </a>&nbsp;
              </span>
              <span class="y bankuai_tu_by" style="margin-right: 20px">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACVElEQVRYR+1W3W3bQAwmTb83GzSdoDnr7rn2BukETSeoO0HtCdpO0GSCeoPYzzrhnA3sDZJ3yywYSIIk352sOIBRIHwTxCM/kh9/EM4seGb/8Abg/8mAc+4yz/NPAHANAFcAcNnizwYA1gCwIKKVUkq+O6UzA4XjHwBw02mtqXBLRPMuIFEAaZrOEFGcv1gQcZYkyTxkwAvAOXex2+3uEVFSfbIw83o4HE6UUo9tYwcAnHNXeZ7/9dS4/nYrtUbE5zozs/BBuPE+gnZDRAKiwY0GgCMif0LEaZIktz5HWZbdMPMvAHjn++/LRAOAtVZY/DEQxRMRjZVSohOUIoPLGAhjjCoNVACstYL8W5AsiF/bkadpOiYiHo1Gq/q7IhN/Ijh/a62n8v8ZgBhCxPvIg63Wuup7D0+kvp/r2bHWSq2DnGDmiTFmWQJYIqIMmZBUiEUhYHyjtf5QGujKKAAstdYTtNYKe4X1QUHE70mSSImi2SqjEr0sy6bM/DNmV/TPD6CI6jVK0OBJVwmYeWWMGR9LwkZ9CxIuaiTbEtF1HxISkRL9k9tQMihs7tOGzDw3xsyqNqwxNzaIHotReswgkpa+CBDwQWtd7ZiDUZznuUQTmoayTKZa6zuf8WIACfODzotpWi0l3zKSw0NARBcLMzeWESJKO7ePlDrOh7bzgxKU2rKUOjIRa2/fP6/zIIDSwmscJHXC+ZAde5IJY7/0DPuOiGYnnWR1h3Ib7vf7MTOXR2mbI3KkrBFxMRgMFr7r50UZ6Bl1b/XOEvS22PPBG4CzZ+AfrntRcuAjU2wAAAAASUVORK5CYII=" />${
                  tableNode.find("td.num>em")[0].innerText
                }
              </span>
          </div>
        </th>
        `;
        let newListNode = $jq(newHTML);
        $jq(newListNode.find(".byg_th_align")[0].children[0]).before(
          `<em>[${tableNode.find("tr>td.by>a")[0].outerHTML}]</em>`
        );
        tableNode.html(newListNode);
      });
    },
    imageViewingOptimizationInThePost() {
      /* 贴内图片查看优化 */
      if (!window.location.href.match(MT_CONFIG.urlRegexp.forumPost)) {
        return;
      }
      let handling = false;
      function viewIMG(imgList = [], _index_ = 0) {
        /* 查看图片 */
        let viewerULNodeHTML = "";
        imgList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}"></li>`;
        });
        let viewerULNode = $jq(`<ul>${viewerULNodeHTML}</ul>`)[0];
        let viewer = new Viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: Utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          },
        });
        viewer.view(_index_);
        viewer.zoomTo(1);
        viewer.show();
      }
      function run() {
        document.querySelectorAll("#postlist .comiis_vrx").forEach((item) => {
          let clickShowIMGList = []; /* 点击显示的图片组 */
          item.querySelectorAll("img").forEach((_item_) => {
            let IMG_URL =
              _item_.src || _item_.getAttribute("file"); /* 图片链接 */
            let IMG_URL_HOSTNAME = new URL(IMG_URL).hostname; /* 主机名 */
            let IMG_URL_PATHNAME = new URL(IMG_URL).pathname; /* 路径 */
            let imgParentNode = _item_.parentElement; /* img标签的父元素 */
            if (
              imgParentNode.nodeName.toLowerCase() === "a" &&
              imgParentNode.getAttribute("href") === IMG_URL
            ) {
              imgParentNode.setAttribute("href", "javascript:;");
              imgParentNode.removeAttribute("target");
            }
            let isMatching = false;
            for (let item of MT_CONFIG.blackListNoViewIMG) {
              /* 图片黑名单 */
              if (
                IMG_URL_HOSTNAME.indexOf(item["hostName"]) != -1 &&
                IMG_URL_PATHNAME.match(item["pathName"])
              ) {
                isMatching = true;
                break;
              }
            }
            if (isMatching) {
              return;
            }
            clickShowIMGList = [...clickShowIMGList, IMG_URL];
            _item_.removeAttribute("onclick");
            _item_.setAttribute("onclick", "");
            $jq(_item_).off("click");
            $jq(_item_).on("click", function (event) {
              event.preventDefault();
              let _index_ = clickShowIMGList.findIndex((_img_) => {
                return _img_ == IMG_URL;
              });
              viewIMG(clickShowIMGList, _index_);
            });
          });
        });
      }
      run();
      Utils.waitNode("#postlist").then((nodeList) => {
        Utils.mutationObserver(nodeList[0], {
          callback: () => {
            if (handling) {
              return;
            }
            handling = true;
            run();
            handling = false;
          },
          config: {
            subtree: true,
            childList: true,
          },
        });
      });
    },
    latestReleaseForumPost() {
      /* 最新发表 */
      var latestReleaseNode = $jq(
        `<li id="latest_publication"><a href="https://bbs.binmt.cc/forum.php?mod=guide&view=newthread" hidefocus="true" title="最新发表">最新发表</a></li>`
      );
      $jq("#comiis_nv .wp.comiis_nvbox.cl ul").append(latestReleaseNode);
      if (
        window.location.href ==
        "https://bbs.binmt.cc/forum.php?mod=guide&view=newthread"
      ) {
        $jq("#mn_forum_10").removeClass("a");
        latestReleaseNode
          .find("a")
          .css(
            "background",
            'url("https://cdn-bbs.mt2.cn/template/comiis_mi/img/nv_a.png") repeat-x 50% -50px'
          );
      }
    },
    /**
     * 加载下一页评论
     */
    loadNextComments() {
      if (!window.location.href.match(MT_CONFIG.urlRegexp.forumPost)) {
        return;
      }
      if ($jq(".pgbtn").length == 0) {
        console.warn("没有找到下一页按钮");
        return;
      }

      var getPageInfo = function (url) {
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: url,
            method: "get",
            timeout: 5000,
            headers: {
              "User-Agent": Utils.getRandomPCUA(),
            },
            responseType: "html",
            onload: function (response) {
              console.log(response);
              var pageHTML = $jq(response.responseText);
              var nextPageBtn = pageHTML.find(".pgbtn a");
              pageHTML.find("#postlistreply")?.remove();
              pageHTML.find(".bm_h.comiis_snvbt")?.remove();
              resolve({
                url: nextPageBtn ? $jq(nextPageBtn).attr("href") : null,
                postlist: pageHTML.find("#postlist"),
                pgbtn: pageHTML.find(".pgbtn"),
                pgs: pageHTML.find(".pgs.mtm"),
              });
            },
            onerror: function (response) {
              console.error(response);
              popup2.toast("请求异常");
              resolve(false);
            },
            ontimeout: function () {
              popup2.toast("请求超时");
              resolve(false);
            },
          });
        });
      };
      var isElementInViewport = function (el) {
        // 获取元素是否在可视区域
        var doc = document.documentElement;
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || doc.clientHeight)
        );
      };
      var isHandling = false;
      var scrollEvent = async function () {
        if (isHandling == true) {
          return;
        }
        isHandling = true;
        var isElementInViewportStatus = isElementInViewport($jq(".pgbtn")[0]);
        if (isElementInViewportStatus) {
          var nextURL = $jq(".pgbtn a").attr("href");
          if (nextURL) {
            let pageInfo = await getPageInfo(nextURL);
            console.log(pageInfo);
            if (pageInfo) {
              if (!pageInfo["url"]) {
                console.log("最后一页，取消监听");
                $jq(document).off("scroll", scrollEvent);
                $jq(".pgbtn")?.remove();
              }
              if (pageInfo["postlist"]) {
                $jq("#postlist")?.html(
                  $jq("#postlist")?.html() + $jq(pageInfo["postlist"]).html()
                );
              }
              if (pageInfo["pgbtn"]) {
                $jq(".pgbtn")?.html($jq(pageInfo["pgbtn"]).html());
              }
              if (pageInfo["pgs"]) {
                $jq(".pgs.mtm")?.html($jq(pageInfo["pgs"]).html());
              }
              pc.postBrowsingOptimization();
            }
          } else {
            console.error("获取下一页失败");
          }
        }
        await Utils.sleep(50);
        isHandling = false;
      };
      $jq(document).on("scroll", scrollEvent);
    },
    loadPCMenu() {
      /* 注册PC端油猴菜单 */
      new Utils.GM_Menu(
        {
          detectUserOnlineStatus: {
            text: "探测用户在线状态",
            enable: false,
            showText: (_text_, _enable_) => {
              return `${_enable_ ? "✅" : "❌"} ${_text_}`;
            },
          },
          postBrowsingOptimization: {
            text: "帖子浏览优化",
            enable: false,
            showText: (_text_, _enable_) => {
              return `${_enable_ ? "✅" : "❌"} ${_text_}`;
            },
          },
          guideOptimization: {
            text: "导读浏览优化",
            enable: false,
            showText: (_text_, _enable_) => {
              return `${_enable_ ? "✅" : "❌"} ${_text_}`;
            },
          },
        },
        true,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
    },
    /**
     * 帖子浏览优化
     */
    postBrowsingOptimization() {
      if (!window.location.href.match(MT_CONFIG.urlRegexp.forumPost)) {
        return;
      }
      if (!GM_getValue("postBrowsingOptimization", false)) {
        return;
      }
      let optimizationCSS = `
          .pls .avatar img,
          .avtm img{
            border-radius: 10%;
          }
          .pls .avatar img{
            width: 90px;
          }
          `; /* 优化的CSS */
      GM_addStyle(optimizationCSS);
      document.querySelectorAll("#postlist .comiis_vrx").forEach((item) => {
        let leftTdNode = item.querySelector(
          "table.plhin tr:first-child td.pls"
        );
        let rightTdNode = item.querySelector(
          "table.plhin tr:first-child td.plc"
        );
        let leftInfoMeta =
          leftTdNode.querySelector(".tns.xg2"); /* 左边的信息块 */
        let leftInfoMetaNextElement =
          leftInfoMeta.nextElementSibling; /* 下一个元素 */
        while (1) {
          if (leftInfoMetaNextElement == null) {
            break;
          }
          leftInfoMetaNextElement.style.display = "none";
          leftInfoMetaNextElement = leftInfoMetaNextElement.nextElementSibling;
        }
      });
    },
    quickReply() {
      /* 快捷回复 */
      if (!window.location.href.match(MT_CONFIG.urlRegexp.forumPost)) {
        return;
      }
      document.querySelector("#scrolltop > span:nth-child(2) > a").onclick =
        function () {
          showWindow("reply", this.href);
          setTimeout(
            'document.querySelector("#moreconf").innerHTML=document.querySelector("#moreconf").innerHTML+\'<button type="button" id = "insertspace2" style="float: left;">一键空格</button>\';document.querySelector("#insertspace2").onclick=function(){document.querySelector("#postmessage").value=document.querySelector("#postmessage").value+"           ";}',
            200
          );
        };
    },
    async repairPCNoLoadResource() {
      /* 修复电脑版未加载的js资源 */
      await GM_asyncLoadScriptNode(
        "https://cdn-bbs.mt2.cn/static/js/smilies.js?x6L",
        false
      );
      await GM_asyncLoadScriptNode(
        "https://cdn-bbs.mt2.cn/static/js/common.js?hsy",
        false
      );
    },
    showUserLevel() {
      /* 显示用户具体等级 */
      var user_avatar = document.querySelectorAll(".pls.favatar");
      var i = 0;
      var user_level = "0级";
      for (i = 0; i < user_avatar.length; i++) {
        var user_current_level =
          user_avatar[i].getElementsByTagName("em")[1].outerText;
        var user_info = user_avatar[i].getElementsByTagName("tr")[0];
        var user_level_node = document.createElement("td");
        user_level_node.setAttribute(
          "style",
          "border-left: 1px solid #e3e3e3;"
        );
        switch (user_current_level) {
          case "幼儿园":
            user_level = "1级";
            break;
          case "小学生":
            user_level = "2级";
            break;
          case "初中生":
            user_level = "3级";
            break;
          case "高中生":
            user_level = "4级";
            break;
          case "大学生":
            user_level = "5级";
            break;
          case "硕士生":
            user_level = "6级";
            break;
          case "博士生":
          case "实习版主":
          case "版主":
          case "审核员":
            user_level = "7级";
            break;
          case "博士后":
          case "超级版主":
          case "网站编辑":
            user_level = "8级";
            break;
          case "管理员":
          case "信息监察员":
            user_level = "9级";
            break;
        }
        user_level_node.innerHTML =
          '<p><a class="dj">' + user_level + "</a></p>Lv";
        user_info.appendChild(user_level_node);
      }
    },
    runMobileFunc() {
      /* 执行手机端函数 */
      Utils.tryCatch().run(mobileRepeatFunc.identifyLinks, mobileRepeatFunc);
      Utils.tryCatch().run(mobile.autoSignIn, mobile);
    },
  };

  /**
   * 移动端需要重复执行的函数
   */
  const mobileRepeatFunc = {
    main() {
      Object.keys(mobileRepeatFunc).forEach((key) => {
        if (key === "main" || typeof mobileRepeatFunc[key] !== "function") {
          return;
        }
        Utils.tryCatch().run(mobileRepeatFunc[key], this);
      });
      unsafeWindow?.popup?.init();
    },
    /**
     * 屏蔽用户
     */
    shieldUser() {
      if (
        window.location.href.match(MT_CONFIG.urlRegexp.forumGuideUrl) ||
        window.location.href.match(MT_CONFIG.urlRegexp.plateUrl) ||
        window.location.href.match(MT_CONFIG.urlRegexp.forumPost)
      ) {
        let infos = document.querySelectorAll(
          ".comiis_forumlist .forumlist_li"
        ); /* 帖子外 */
        if (!infos.length) {
          /* 帖子内 */
          infos = document.querySelectorAll(".comiis_postlist .comiis_postli");
          if (!infos.length) {
            return;
          }
        }
        let shieldUserList = GM_getValue("shieldUser", []);
        let needRemoveList = [];
        shieldUserList.forEach((item) => {
          needRemoveList = [...needRemoveList, item["uid"]];
        });
        Array.from(infos).forEach((info) => {
          let usr = info.getElementsByClassName("wblist_tximg");
          if (!usr.length) {
            usr = info.getElementsByClassName("postli_top_tximg");
            if (!usr.length) {
              return;
            }
          }
          let url = usr[0].href;
          let userUID = url.match(
            MT_CONFIG.urlRegexp.MTUid
          )[1]; /* 获取帖子链接的uid */
          if (needRemoveList.indexOf(userUID) != -1) {
            console.log(`屏蔽用户：${userUID}`);
            info.setAttribute("style", "display:none !important;");
          }
        });
      }
    },
    /**
     * 屏蔽板块
     */
    shieldPlate() {
      if (window.location.href.match(MT_CONFIG.urlRegexp.forumGuideUrl)) {
        let infos = document.querySelectorAll(
          ".comiis_forumlist .forumlist_li"
        );
        let shieldPlateList = GM_getValue("shieldPlate", []);
        let needRemoveList = [];
        shieldPlateList.forEach((item) => {
          needRemoveList = [...needRemoveList, item];
        });
        Array.from(infos).forEach((info) => {
          let from_plate = (
            info.querySelector(".forumlist_li_time a.f_d") ||
            info.querySelector(".comiis_xznalist_bk.cl")
          ).outerText;
          from_plate = from_plate.replace(//g, "");
          from_plate = from_plate.replace(/\s*/g, "");
          from_plate = from_plate.replace("来自", "");
          if (needRemoveList.indexOf(from_plate) != -1) {
            console.log("屏蔽目标板块：" + from_plate);
            info.setAttribute("style", "display:none !important;");
          }
        });
      }
    },
    /**
     * 评论区添加点评功能
     */
    commentsAddReviews() {
      if (
        GM_getValue("v6") &&
        window.location.href.match(MT_CONFIG.urlRegexp.forumPost)
      ) {
        Utils.waitNode(".bottom_zhan.y").then((nodeList) => {
          nodeList.forEach((item) => {
            var bottomZhanNode = item;
            if (bottomZhanNode.getAttribute("data-isaddreviews")) {
              return;
            }
            bottomZhanNode.setAttribute("data-isaddreviews", true);
            var replyNode = bottomZhanNode.querySelector("a");
            var replyUrl = replyNode.getAttribute("datahref") || replyNode.href;
            var rewardUrl = replyUrl
              .replace("mod=post&", "mod=misc&")
              .replace("action=reply&", "action=comment&");
            var reviewPage = replyUrl.match(/&page=([\w]+)/i)[1];
            var reviewsUrl = `${rewardUrl}&extra=page%3D1&page=${reviewPage}`;
            var reviewsPID = bottomZhanNode
              .closest(".comiis_postli[id]")
              .getAttribute("id")
              .replace("pid", "&pid=");
            reviewsUrl = reviewsUrl + reviewsPID;
            var reviewsUserName = bottomZhanNode
              .closest(".comiis_postli[id]")
              .querySelector(".top_user.f_b").text;
            var reviewsNode = $jq(`
            <a href="${reviewsUrl}" class="f_c dialog">
              <i class="comiis_font mt_review" style="content: url(&quot;https://s1.ax1x.com/2020/04/26/Jcq8VU.png&quot;); height: 15px;"></i>
            </a>
            `);
            reviewsNode.on("click", function () {
              Utils.waitNode("div[id=ntcmsg_popmenu]>div>span.f_c").then(
                (nodeList2) => {
                  try {
                    nodeList2[0].innerText = "点评 " + reviewsUserName;
                  } catch (err) {
                    console.log("修改点评失败", err);
                  }
                }
              );
            });
            $jq(bottomZhanNode).prepend(reviewsNode);
          });
        });
      }
    },
    /**
     * 识别链接
     * @returns
     */
    identifyLinks() {
      if (!GM_getValue("v2", false)) {
        return;
      }
      /*TEXT link to Clickable Hyperlink*/
      var clearLink,
        excludedTags,
        filter,
        linkMixInit,
        linkPack,
        linkify,
        observePage,
        observer,
        setLink,
        url_regexp,
        xpath;
      url_regexp =
        /((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi;
      clearLink = function (a) {
        var b;
        a = null != (b = a.originalTarget) ? b : a.target;
        if (
          null != a &&
          "a" === a.localName &&
          -1 !== a.className.indexOf("texttolink") &&
          ((b = a.getAttribute("href")),
          0 !== b.indexOf("http") &&
            0 !== b.indexOf("ed2k://") &&
            0 !== b.indexOf("thunder://"))
        )
          return a.setAttribute("href", "http://" + b);
      };
      document.addEventListener("mouseover", clearLink);
      setLink = function (a) {
        /* Uncaught TypeError: a.parentNode.className.indexOf is not a function */
        if (typeof a != "object") {
          return;
        } /* 看不得报错，增加判断 */
        if (
          null != a &&
          typeof a.parentNode !== "undefined" &&
          typeof a.parentNode.className !== "undefined" &&
          typeof a.parentNode.className.indexOf === "function" &&
          -1 === a.parentNode.className.indexOf("texttolink") &&
          "#cdata-section" !== a.nodeName
        ) {
          var b = a.textContent.replace(
            url_regexp,
            '<a href="$1" target="_blank" class="texttolink">$1</a>'
          );
          if (a.textContent.length !== b.length) {
            var c = document.createElement("span");
            c.innerHTML = b;
            console.log(`识别: ${c.querySelector("a")}`);
            return a.parentNode.replaceChild(c, a);
          }
        }
      };
      excludedTags =
        "a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(
          " "
        );
      xpath = `//text()[not(ancestor::${excludedTags.join(
        ") and not(ancestor::"
      )})]`;
      filter = new RegExp(`^(${excludedTags.join("|")})$`, "i");
      linkPack = function (a, b) {
        var c, d;
        if (b + 1e4 < a.snapshotLength) {
          var e = (c = b);
          for (d = b + 1e4; b <= d ? c <= d : c >= d; e = b <= d ? ++c : --c)
            setLink(a.snapshotItem(e));
          setTimeout(function () {
            return linkPack(a, b + 1e4);
          }, 15);
        } else
          for (
            e = c = b, d = a.snapshotLength;
            b <= d ? c <= d : c >= d;
            e = b <= d ? ++c : --c
          )
            setLink(a.snapshotItem(e));
      };
      linkify = function (a) {
        a = document.evaluate(
          xpath,
          a,
          null,
          XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
          null
        );
        return linkPack(a, 0);
      };
      observePage = function (a) {
        for (
          a = document.createTreeWalker(
            a,
            NodeFilter.SHOW_TEXT,
            {
              acceptNode: function (a) {
                if (!filter.test(a.parentNode.localName))
                  return NodeFilter.FILTER_ACCEPT;
              },
            },
            !1
          );
          a.nextNode();

        )
          setLink(a.currentNode);
      };
      observer = new window.MutationObserver(function (a) {
        var b, c;
        var d = 0;
        for (b = a.length; d < b; d++) {
          var e = a[d];
          if ("childList" === e.type) {
            var g = e.addedNodes;
            var f = 0;
            for (c = g.length; f < c; f++) (e = g[f]), observePage(e);
          }
        }
      });
      linkMixInit = function () {
        /* if (window === window.top && "" !== window.document.title) return linkify(document.body), observer.observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
                修改为可在iframe内执行 */
        return (
          linkify(document.body),
          observer.observe(document.body, {
            childList: !0,
            subtree: !0,
          })
        );
      };
      var clearlinkF = function (a) {
          var url = a.getAttribute("href");
          if (
            0 !== url.indexOf("http") &&
            0 !== url.indexOf("ed2k://") &&
            0 !== url.indexOf("thunder://")
          )
            return a.setAttribute("href", "http://" + url);
        },
        clearlinkE = function () {
          for (
            var a = document.getElementsByClassName("texttolink"), b = 0;
            b < a.length;
            b++
          )
            clearlinkF(a[b]);
        };
      setTimeout(clearlinkE, 1500);
      setTimeout(linkMixInit, 100);
    },
    /**
     * 显示用户的uid
     */
    showUserUID() {
      if (
        GM_getValue("v15") &&
        (window.location.href.match(MT_CONFIG.urlRegexp.forumPostGuideUrl) ||
          window.location.href.match(MT_CONFIG.urlRegexp.forumPost) ||
          window.location.href.match(MT_CONFIG.urlRegexp.plateUrl) ||
          window.location.href.match(MT_CONFIG.urlRegexp.searchUrl) ||
          window.location.href.match(
            /bbs.binmt.cc\/home.php\?mod=space&do=thread&view=me/
          ) ||
          window.location.href.match(
            /home.php\?mod=space&uid=.+&do=thread&view=me/
          ))
      ) {
        if (!window.GM_isaddShowUidCss) {
          window.GM_isaddShowUidCss = true;
          GM_addStyle(`
            .postli_top_tximg + h2{
                height: auto;
            }
          `);
        }
        let findUserFormList = false;
        let findUserFormListNums = 0;
        let findSetInval = setInterval(function () {
          let formList = Utils.getNodeListValue(
            MT_CONFIG.element.comiisFormlist,
            MT_CONFIG.element.comiisPostli,
            MT_CONFIG.element.comiisMmlist
          );
          findUserFormList = formList.length ? true : false;
          if (findUserFormListNums >= 40) {
            console.log("已循环40次，未找到帖子");
            clearInterval(findSetInval);
          }
          if (findUserFormList) {
            GM_addStyle(`
                        .comiis_postli_top.bg_f.b_t h2{
                            height: auto;
                        }`);

            function matchUIDByArray(data) {
              for (let i = 0; i < data.length; i++) {
                let url = data[i].href;
                let uid = url.match(MT_CONFIG.urlRegexp.MTUid);
                if (uid) {
                  return uid[1];
                }
              }
              return null;
            }
            $jq.each(formList, (index, value) => {
              let mtUIDOM = value.getElementsByClassName("mt_uid_set");
              if (!mtUIDOM.length) {
                let childrenByATagetElement = value.getElementsByTagName("a");
                let mt_uid = null;
                mt_uid = matchUIDByArray(childrenByATagetElement);
                if (mt_uid != null) {
                  let uid_control = document.createElement("a");
                  let mtUidDomInsertElement =
                    value.getElementsByClassName("top_lev")[0];
                  let uid_control_height = getComputedStyle(
                    mtUidDomInsertElement,
                    null
                  )["height"];
                  let uid_control_margin = getComputedStyle(
                    mtUidDomInsertElement,
                    null
                  )["margin"];
                  let uid_control_padding = getComputedStyle(
                    mtUidDomInsertElement,
                    null
                  )["padding"];
                  let uid_control_line_height = getComputedStyle(
                    mtUidDomInsertElement,
                    null
                  )["line-height"];
                  let uid_control_font = getComputedStyle(
                    mtUidDomInsertElement,
                    null
                  )["font"];
                  let uid_control_bg_color = "#FF7600";
                  uid_control.className = "mt_uid_set";
                  uid_control.style = `
                                        font: ${uid_control_font};
                                        background: ${uid_control_bg_color};
                                        color: white;
                                        float: left;
                                        margin: ${uid_control_margin};
                                        padding: ${uid_control_padding};
                                        height: ${uid_control_height};
                                        line-height: ${uid_control_line_height};
                                        border-radius: 1.5px;`;
                  uid_control.innerHTML = "UID:" + mt_uid;
                  uid_control.onclick = function () {
                    try {
                      GM_setClipboard(mt_uid);
                      popup2.toast(`${mt_uid}已复制`);
                      console.log("复制:", mt_uid);
                    } catch (err) {
                      popup2.toast(`${mt_uid}复制失败`);
                      console.log("复制失败:" + mt_uid, err);
                    }
                  };

                  mtUidDomInsertElement.parentElement.append(uid_control);
                }
              }
            });
            console.log("成功找到帖子DOM");
            clearInterval(findSetInval);
          } else {
            findUserFormListNums += 1;
          }
        }, 200);
      }
    },
    /**
     * 页面小窗浏览帖子
     */
    pageSmallWindowBrowsingForumPost() {
      if (
        !GM_getValue("v45", false) &&
        (!window.location.href.match(MT_CONFIG.urlRegexp.forumGuideUrl) ||
          !window.location.href.match(MT_CONFIG.urlRegexp.searchUrl))
      ) {
        return;
      }

      let small_icon_width = 24;
      let small_right_btn_width = 115;
      let small_title_width = `calc(100% - ${
        small_icon_width + small_right_btn_width
      }px)`;
      GM_addStyle(`
				.xtiper_sheet,
				.xtiper_sheet .xtiper_sheet_tit{
						border-radius: 18px 18px 0px 0px;
				}
				/* title自定义美化 */
				.xtiper_sheet_tit.xtiper_sheet_left{
						display: block;
						background: #fff;
						width: 100%;
						box-sizing: border-box;
				}
				.xtiper_sheet_tit.xtiper_sheet_left img.xtiper_tit_ico{
						background: #fff;
						filter: invert(100%);
						width: ${small_icon_width}px;
						height: ${small_icon_width}px;
						align-self: center;
						border-radius: 3px;
				}
				.xtiper_sheet_tit.xtiper_sheet_left .xtiper_tit_content{
						margin-left: 22px;
						width: ${small_title_width};
				}
				.xtiper_sheet_tit.xtiper_sheet_left .xtiper_tit_content p{
						word-wrap: break-word;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
				}
				.xtiper_sheet_tit.xtiper_sheet_left .xtiper_tit_content .xtiper_tit_svg_lock{
						display: flex;
						align-items: center;
				}
				.xtiper_sheet_tit.xtiper_sheet_left .xtiper_tit_content .xtiper_tit_svg_lock svg{
						margin: 0px 6px 0px 2px;
				}
				.xtiper_sheet_tit.xtiper_sheet_left .xtiper_tit_right {
						display: inline-flex;
						align-items: center;
						align-content: center;
						width: ${small_right_btn_width}px;
						justify-content: center;
				}
				.xtiper_sheet_tit.xtiper_sheet_left .xtiper_tit_right_picture,
				.xtiper_sheet_tit.xtiper_sheet_left .xtiper_tit_right_windowopen,
				.xtiper_sheet_tit.xtiper_sheet_left .xtiper_tit_right_windowclose{
						width: 100%;
						text-align: center;
						margin: 0px 0px;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;

				}
				/* 底部高度不对等问题*/
				.xtiper_content.xtit{
						height: calc(100% - 80px) !important; 
				}
				/* 底部消息距离底部30px*/
				.xtiper.xtiper_msg.xtiper_msg_bottom.xtiper_msg_black.xon{
						margin-bottom: 30px;
				}

				/* 标题顶部拖拽*/
				.xtiper_sheet_tit_top_drag{
						width: 100%;
						position: relative;
						height: 10px;
				}
				.xtiper_sheet_tit_top_drag div{
						width: 50px;
						margin: 0 auto;
						height: 4px;
						background: #d9d9d9;
						border-radius: 15px;
						bottom: 3px;
						position: relative;
					}
			`);

      function getFormList() {
        /* 获取当前页面所有帖子 */
        return Utils.getNodeListValue(
          MT_CONFIG.element.comiisFormlist,
          MT_CONFIG.element.comiisPostli,
          MT_CONFIG.element.comiisMmlist
        );
      }
      let formlist = null; /* 帖子列表 */
      let isFindFormList = false; /* 是否找到帖子 */
      let findFormListNums = 0; /* 找到帖子的数量 */
      let smallWindowId = null; /* 小窗对象 */
      let waitFormListAppear = setInterval(function () {
        /* 等待页面加载出现帖子 */
        if (isFindFormList) {
          formlist = getFormList();
          main();
          console.log("成功注入小窗");
          clearInterval(waitFormListAppear);
        } else {
          if (findFormListNums >= 40) {
            console.log("未出现帖子或寻找贴子超时，清理定时器");
            clearInterval(waitFormListAppear);
          }
          isFindFormList = getFormList().length ? true : false;
          findFormListNums += 1;
        }
      }, 200);

      function popstateFunction() {
        window.history.pushState("forward", null, "#");
        window.history.forward(1);
        resumeBack();
      }

      function banBack() {
        /* 禁止浏览器后退按钮 */
        if (window.history && window.history.pushState) {
          $jq(window).on("popstate", popstateFunction);
        }
        window.history.pushState(
          "forward",
          null,
          "#"
        ); /* 在IE中必须得有这两行 */
        window.history.forward(1);
      }

      async function resumeBack() {
        /* 允许浏览器后退并关闭小窗 */
        xtip.close(smallWindowId);
        smallWindowId = null;
        $jq(window).off("popstate", popstateFunction);
        while (1) {
          if (window.location.href == "https://bbs.binmt.cc/#") {
            console.log("back！");
            await Utils.asyncSetTimeOut("window.history.back();", 100);
            await Utils.sleep(100);
          } else {
            return;
          }
        }
      }

      function showSmallWindow(title, url, imagesList = []) {
        /* 显示小窗 */
        let constructURL = new URL(url);
        let isHTTPS =
          constructURL.protocol.indexOf("https:") != -1 ? true : false;
        let icon_safe = `<svg t="1660458686317" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2383"
                width="12" height="12" style="margin: 0px 6px 0px 2px;">
                <path
                    d="M842.666667 384h-74.666667V277.333333a234.666667 234.666667 0 1 0-469.333333 0v106.666667H224a53.393333 53.393333 0 0 0-53.333333 53.333333v490.666667a53.393333 53.393333 0 0 0 53.333333 53.333333h618.666667a53.393333 53.393333 0 0 0 53.333333-53.333333V437.333333a53.393333 53.393333 0 0 0-53.333333-53.333333zM341.333333 277.333333c0-105.866667 86.133333-192 192-192s192 86.133333 192 192v106.666667H341.333333z"
                    fill="#000000" p-id="2384"></path>
            </svg>`; /* 安全的图标 */
        let icon_unsafe = `<svg t="1663899632280"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3360"
                width="12"
                height="12">
               <path d="M770.423989 451.309956H368.89432V284.246158c0-80.739434 65.689748-146.429182 146.429182-146.429182S661.738235 203.506724 661.738235 284.246158a43.350032 43.350032 0 0 0 86.700063 0c0-128.547294-104.581952-233.129246-233.122021-233.129246-128.547294 0-233.129246 104.581952-233.129245 233.129246v167.063798h-21.978466a43.350032 43.350032 0 0 0-43.350032 43.350031v437.965371a43.350032 43.350032 0 0 0 43.350032 43.350032h510.215423a43.350032 43.350032 0 0 0 43.350032-43.350032V494.659987a43.350032 43.350032 0 0 0-43.350032-43.350031z"
                     fill="#2c2c2c"
                     p-id="3361"></path>
           </svg>`; /* 不安全的图标 */
        let icon_openBlank = `<svg t="1660459294973" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3580"
                width="17" height="17">
                <path
                    d="M5.064339 94.782119l0-74.338917 494.595401 0c17.302383 0 31.352438 16.614748 31.352438 37.206628 0 20.517541-14.050055 37.132289-31.352438 37.132289L5.064339 94.782119"
                    p-id="3581" fill="#2c2c2c"></path>
                <path
                    d="M1008.639721 1024l-74.338917 0L934.300804 529.404599c0-17.302383 16.614748-31.352438 37.206628-31.352438 20.517541 0 37.132289 14.050055 37.132289 31.352438L1008.639721 1024"
                    p-id="3582" fill="#2c2c2c"></path>
                <path d="M1008.639721 20.443202 945.972014 20.443202 1008.639721 20.443202Z" p-id="3583" fill="#2c2c2c"></path>
                <path d="M1008.639721 83.129494 1008.639721 20.443202 1008.639721 83.129494Z" p-id="3584" fill="#2c2c2c"></path>
                <path d="M5.064339 83.129494 5.064339 20.443202 67.750631 20.443202 5.064339 20.443202 5.064339 83.129494Z"
                    p-id="3585" fill="#2c2c2c"></path>
                <path d="M5.064339 1024 5.064339 961.332293 5.064339 1024Z" p-id="3586" fill="#2c2c2c"></path>
                <path d="M67.750631 1024 5.064339 1024 67.750631 1024Z" p-id="3587" fill="#2c2c2c"></path>
                <path d="M1008.639721 1024 945.972014 1024 1008.639721 1024Z" p-id="3588" fill="#2c2c2c"></path>
                <path d="M1008.639721 1024 1008.639721 961.332293 1008.639721 1024Z" p-id="3589" fill="#2c2c2c"></path>
                <path
                    d="M934.300804 20.443202l74.338917 0 0 263.438538c0 17.302383-16.614748 31.371023-37.132289 31.371023-20.610465 0-37.206628-14.06864-37.206628-31.371023L934.300804 20.443202"
                    p-id="3590" fill="#2c2c2c"></path>
                <path
                    d="M726.393437 94.782119c-17.339552 0-31.371023-16.614748-31.371023-37.132289 0-20.573295 14.031471-37.206628 31.371023-37.206628l282.227699 0 0 74.338917L726.393437 94.782119"
                    p-id="3591" fill="#2c2c2c"></path>
                <path d="M79.403256 1024 5.064339 1024 5.064339 20.443202 79.403256 20.443202 79.403256 1024Z" p-id="3592"
                    fill="#2c2c2c"></path>
                <path d="M1008.639721 949.661083 1008.639721 1024 5.064339 1024 5.064339 949.661083 1008.639721 949.661083Z"
                    p-id="3593" fill="#2c2c2c"></path>
                <path
                    d="M947.941995 28.564729c12.210167-12.265921 33.935716-10.426033 48.431805 4.107225 14.551843 14.477504 16.391731 36.221637 4.107225 48.431805L288.425706 793.214831c-12.265921 12.321676-33.9543 10.481787-48.506143-4.12581-14.533258-14.458919-16.373147-36.221637-4.107225-48.394635L947.941995 28.564729"
                    p-id="3594" fill="#2c2c2c"></path>
            </svg>`; /* 新标签页打开的按钮 */
        let icon_close = `<svg t="1660459530654"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5064"
                width="17"
                height="17">
               <path d="M579.392 511.296l429.376 428.544a48.128 48.128 0 0 1-34.176 82.304c-12.8 0-25.088-5.12-34.112-14.208L511.168 579.392 81.792 1008a48.32 48.32 0 0 1-67.648-0.576 48.128 48.128 0 0 1-0.64-67.52L442.88 511.296 13.568 82.752A48.128 48.128 0 0 1 14.08 15.168 48.32 48.32 0 0 1 81.792 14.592l429.376 428.544L940.48 14.592a48.32 48.32 0 0 1 67.648 0.64c18.624 18.56 18.88 48.64 0.64 67.52L579.392 511.296z"
                     fill="#2c2c2c"
                     p-id="5065"></path>
           </svg>`; /* 关闭的按钮 */
        let icon_picture_html =
          imagesList.length !== 0
            ? `
				<div class="xtiper_tit_right_picture">
					<i class="comiis_font" style="font-size: 22px;"></i>
				</div>`
            : ""; /* 图片按钮 */
        let showWebsiteSafeIcon = isHTTPS ? icon_safe : icon_unsafe;
        let websiteTitle = `
					<div class="xtiper_sheet_tit_top_drag"><div></div></div>
					<div style="display:flex;justify-content: space-between;">
							<img src="https://cdn-bbs.mt2.cn/template/comiis_app/comiis/img/favicon.ico" loading="lazy" class="xtiper_tit_ico">
							<div class="xtiper_tit_content">
									<p>${title}</p>
									<div class="xtiper_tit_svg_lock">
											${showWebsiteSafeIcon}
											<p>${constructURL.host}</p>
									</div>
							</div>
							<div class="xtiper_tit_right">
									${icon_picture_html}
									<div class="xtiper_tit_right_windowopen">
											${icon_openBlank}
									</div>
									<div class="xtiper_tit_right_windowclose">
											${icon_close}
									</div>
							</div>
					</div>`;

        let smallWindowIframeId = xtip.open({
          type: "url",
          content: url,
          title: websiteTitle,
          height: "92%",
          app: true,
          success: () => {
            banBack();
          },
          end: () => {
            console.log("点击其它区域关闭小窗");
            resumeBack();
          },
        });

        if (typeof top.window.tampermonkeyByMT != "undefined") {
          console.log("当前执行为非油猴调用");
          let smallWindowNode = document.getElementById(
            `${smallWindowIframeId}_id`
          );
          smallWindowNode.onload = () => {
            console.log(`子窗口: ${smallWindowIframeId}_id 加载完毕`);
            let scriptNode = document.createElement("script");
            scriptNode.setAttribute("type", "text/javascript");
            scriptNode.innerHTML = top.window.tampermonkeyByMT;
            smallWindowNode.contentWindow.document.head.append(scriptNode);
          };
        }
        smallWindowId = smallWindowIframeId;

        console.log(smallWindowId);
        let dragNode = new AnyTouch(
          document.getElementById(smallWindowIframeId)
        );
        let smallWidowNode = document
          .getElementById(smallWindowIframeId)
          .querySelector("div.xtiper_sheet");
        let smallWidowNormalHeight = parseInt(
          smallWidowNode.style["height"]
        ); /* 小窗原始高度 */
        console.log("小窗原始高度", smallWidowNormalHeight);
        dragNode.on("pan", (event) => {
          if (event.phase == "move" && event.displacementY > 0) {
            /* 当前为向下移动 */
            smallWidowNode.style["transition"] = "none";
            smallWidowNode.style["height"] =
              Math.abs(smallWidowNormalHeight - event.distanceY) + "px";
          }
          if (event.isEnd) {
            /* 当前为停止移动，松开手指，判断在哪个区域，一半以上回归上面，一般以下，关闭 */
            smallWidowNode.style["transition"] = "0.2s ease-in";
            if (
              parseInt(smallWidowNode.style["height"]) >
              window.innerHeight / 2
            ) {
              smallWidowNode.style["height"] = smallWidowNormalHeight + "px";
            } else {
              resumeBack();
            }
          }
        });
        dragNode.on("tap", (event) => {
          if (
            document
              .getElementById(smallWindowIframeId)
              .querySelector(".xtiper_bg")
              .outerHTML.indexOf(event.target.outerHTML) != -1
          ) {
            /* 点击背景关闭小窗 */
            console.log("点击背景关闭小窗");
            resumeBack();
            dragNode.off("tap");
            dragNode.off("pan");
            return;
          }
          if (
            document
              .getElementById(smallWindowIframeId)
              .querySelector(".xtiper_tit_content")
              .outerHTML.indexOf(event.target.outerHTML) != -1
          ) {
            if (title !== "") {
              GM_setClipboard(`『${title}』 - ${url}`);
            } else {
              GM_setClipboard(url);
            }
            xtips.toast("已复制链接", {
              icon: "success",
              pos: "bottom",
            });
            return;
          }
          if (
            document
              .querySelector("#" + smallWindowId)
              .querySelector(".xtiper_tit_right_picture") &&
            document
              .querySelector("#" + smallWindowId)
              .querySelector(".xtiper_tit_right_picture i")
              .outerHTML.indexOf(event.target.outerHTML) != -1
          ) {
            /* 点击查看图片 */
            console.log("点击查看图片", imagesList);
            var viewerULNodeHTML = "";
            imagesList.forEach((item) => {
              viewerULNodeHTML += `<li><img data-src="${item}"></li>`;
            });
            var viewerULNode = $jq(`<ul>${viewerULNodeHTML}</ul>`)[0];
            let viewer = new Viewer(viewerULNode, {
              inline: false,
              url: "data-src",
              zIndex: Utils.getMaxZIndex() + 100,
              hidden: () => {
                viewer.destroy();
              },
            });
            viewer.zoomTo(1);
            viewer.show();
          }
          if (
            document
              .getElementById(smallWindowIframeId)
              .querySelector(".xtiper_tit_right_windowopen svg")
              .outerHTML.indexOf(event.target.outerHTML) != -1
          ) {
            /* 点击 新标签页打开 */
            window.open(url, "_blank");
            return;
          }
          if (
            document
              .getElementById(smallWindowIframeId)
              .querySelector(".xtiper_tit_right_windowclose svg")
              .outerHTML.indexOf(event.target.outerHTML) != -1
          ) {
            /* 点击 关闭小窗 */
            console.log("点击 关闭小窗");
            resumeBack();
            dragNode.off("tap");
            dragNode.off("pan");
            return;
          }
          if (
            document
              .querySelector(".xtiper_tit_ico")
              .outerHTML.indexOf(event.target.outerHTML) != -1
          ) {
            /* 点击 刷新iframe */
            console.log("点击 刷新iframe");
            document
              .querySelector("#" + smallWindowIframeId)
              ?.querySelector("iframe")
              ?.contentWindow?.location?.reload();
          }
        });
      }
      async function main() {
        $jq.each(formlist, function (index, value) {
          value = $jq(value);
          if (value.attr("data-injection-small-window")) {
            return;
          }

          let title = value
            .find(".mmlist_li_box h2 a")
            .text()
            .trim(); /* 帖子标题 */
          title =
            title == "" ? value.find(".mmlist_li_box a").text().trim() : title; // 防止获取的标题是空的
          let url = value.find(".mmlist_li_box a").attr("href"); /* 帖子地址 */
          var imagesList = []; /* 帖子内图片列表 */
          value.attr("data-injection-small-window", true);
          value.attr("data-injection-small-window-url", url);
          value.attr("data-injection-small-window-title", title);
          value.find(".comiis_pyqlist_img img").each((imgIndex, ImgNode) => {
            imagesList = [...imagesList, ImgNode.getAttribute("src")];
          });
          value.find(".comiis_pyqlist_imgs img").each((imgIndex, ImgNode) => {
            imagesList = [...imagesList, ImgNode.getAttribute("src")];
          });
          value.find(".mmlist_li_box a").each((aIndex, aNode) => {
            aNode.href = "javascript:;";
          });
          value.find(".mmlist_li_box").on("click", function (event) {
            var mouseClickPosX = Number(
              window.event.clientX
            ); /* 鼠标相对屏幕横坐标 */
            if (document.body.offsetWidth / 2 > mouseClickPosX) {
              window.location.href = url;
            } else {
              showSmallWindow(title, url, imagesList);
            }
          });
        });
      }
    },
    /**
     * 代码块复制按钮
     */
    codeQuoteCopyBtn() {
      if (
        !GM_getValue("v46") &&
        !window.location.href.match(MT_CONFIG.urlRegexp.forumPost)
      ) {
        return;
      }
      let comiis_blockcode = $jq(".comiis_blockcode.comiis_bodybg");
      $jq.each(comiis_blockcode, (index, value) => {
        if (!value.getAttribute("data-copy")) {
          value.setAttribute("data-copy", true);
          let tempDivNode = document.createElement("div");
          tempDivNode.setAttribute("style", "height: 34px;margin: 14px 0px;");
          let btnSpanNode = document.createElement("span");
          btnSpanNode.className = "reader-copy-button";
          btnSpanNode.setAttribute(
            "style",
            "background: #000;background-size: cover;background-repeat: no-repeat;background-position: 0;color: #fff;line-height: 40px;display: block;position: absolute;text-align: center;border-radius: 5px;cursor: pointer;right: auto!important;font-size: 15px;width: 70px;user-select: none;"
          );
          btnSpanNode.innerHTML = `
                    <i style="display: inline-block;margin-right: 6px;width: 16px;height: 16px;background-size: cover;vertical-align: sub;user-select: none;">
                    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>复制按钮</title>
                        <defs>
                            <rect id="path-1" x="0" y="0" width="16" height="16"></rect>
                        </defs>
                        <g id="阅读页复制-拦截" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g>
                                <mask id="mask-2" fill="white">
                                    <use xlink:href="#path-1"></use>
                                </mask>
                                <g id="矩形"></g>
                                <path d="M4.11794319,3.55555556 L9.51168644,3.55555556 C10.4768443,3.55555556 11.2592593,4.33797056 11.2592593,5.30312837 L11.2592593,13.067242 C11.2592593,14.0323998 10.4768443,14.8148148 9.51168644,14.8148148 L4.11794319,14.8148148 C3.15278537,14.8148148 2.37037037,14.0323998 2.37037037,13.067242 L2.37037037,5.30312837 C2.37037037,4.33797056 3.15278537,3.55555556 4.11794319,3.55555556 Z" id="矩形" stroke="#DFDFDF" stroke-width="1.45631068" mask="url(#mask-2)"></path>
                                <path d="M5.03703704,0.888888889 L12.1481481,0.888888889 C13.1299877,0.888888889 13.9259259,1.68482711 13.9259259,2.66666667 L13.9259259,12.7407407" id="形状" stroke="#DFDFDF" stroke-width="1.45631068" mask="url(#mask-2)"></path>
                            </g>
                        </g>
                    </svg>
                    </i>复制`;
          tempDivNode.append(btnSpanNode);
          tempDivNode.querySelector(".reader-copy-button").onclick = () => {
            GM_setClipboard(value.outerText || value.innerText);
            popup2.toast("已复制代码");
          };
          value.before(tempDivNode);
        } else {
          console.log("已创建复制按钮");
        }
      });
    },
    /**
     * 取消绑定回复底部回复按钮的默认事件
     */
    editorOptimizationOffDefaultBottomReplyBtnClickEvent() {
      if (!GM_getValue("v49", false)) {
        return;
      }
      $jq.each(
        $jq(".comiis_postli_times .dialog[href*=reply]"),
        (index, item) => {
          /* 把回复按钮的href改成JavaScript:; */
          let href = item.getAttribute("href");
          if (href != "javascript:;") {
            item.setAttribute("class", "f_c dialog_reply");
            item.setAttribute("datahref", href);
            item.setAttribute("href", "javascript:;");
          }
        }
      );
    },
    /**
     * 移除评论区字体效果
     */
    removeForumPostCommentFontStyle() {
      if (
        GM_getValue("v3") &&
        window.location.href.match(MT_CONFIG.urlRegexp.forumPost)
      ) {
        var hide = document.getElementsByTagName("font");
        var postForumMain = document.querySelector(".comiis_ordertype")
          ? document.querySelector(".comiis_postlist.kqide .comiis_postli")
              .innerHTML
          : "";
        for (let i = 0; i < hide.length; i++) {
          if (postForumMain.indexOf(hide[i].innerHTML) == -1) {
            console.log(hide[i].innerHTML);
            hide[i].removeAttribute("color");
            hide[i].removeAttribute("style");
            hide[i].removeAttribute("size");
          }
        }
        var content = document.getElementsByClassName(
          "comiis_message bg_f view_all cl message"
        );
        for (let i = 0; i < content.length; i++) {
          if (postForumMain.indexOf(content[i].innerHTML) == -1) {
            content[i].innerHTML = content[i].innerHTML.replace(
              MT_CONFIG.urlRegexp.fontSpecial,
              ""
            );
            if (content[i].nextElementSibling.localName === "strike") {
              console.log("影响后面出现下划线的罪魁祸首", content[i]);
              content[i].nextElementSibling.outerHTML = content[
                i
              ].nextElementSibling.outerHTML
                .replace(/^<strike>(\n|)/g, "")
                .replace(/<\/strike>$/g, "");
            }
          }
        }
        document
          .querySelectorAll(".comiis_postli.comiis_list_readimgs.nfqsqi")
          .forEach((item) => {
            if (item.parentElement.localName === "strike") {
              try {
                item.parentElement.outerHTML = item.parentElement.outerHTML
                  .replace(/^<strike>(\n|)/g, "")
                  .replace(/<\/strike>$/g, "");
              } catch (error) {}
            }
          });
      }
    },
    /**
     * 贴内图片查看优化
     * @returns
     */
    imageViewingOptimizationInThePost() {
      if (
        !GM_getValue("v55", false) ||
        !window.location.href.match(MT_CONFIG.urlRegexp.forumPost)
      ) {
        return;
      }
      function viewIMG(imgList = [], index = 0) {
        /* 查看图片 */
        let viewerULNodeHTML = "";
        imgList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}"></li>`;
        });
        let viewerULNode = $jq(`<ul>${viewerULNodeHTML}</ul>`)[0];
        let viewer = new Viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: Utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          },
        });
        console.log("查看的图片的下标", index);
        viewer.view(index);
        viewer.zoomTo(1);
        viewer.show();
      }
      Utils.waitNode("div.comiis_postlist.kqide .comiis_postli").then(
        (nodeList) => {
          nodeList.forEach((item) => {
            if (item.getAttribute("isHandlingViewIMG")) {
              /* 已处理过 */
              return;
            }

            let clickShowIMGList = []; /* 点击显示的图片组 */
            item.querySelectorAll("img").forEach((_item_) => {
              let IMG_URL = _item_.src; /* 图片链接 */
              let IMG_URL_HOSTNAME = new URL(IMG_URL).hostname; /* 主机名 */
              let IMG_URL_PATHNAME = new URL(IMG_URL).pathname; /* 路径 */
              let imgParentNode = _item_.parentElement; /* img标签的父元素 */
              if (imgParentNode.nodeName.toLowerCase() === "span") {
                imgParentNode.removeAttribute("onclick");
              }
              if (
                imgParentNode.nodeName.toLowerCase() === "a" &&
                imgParentNode.getAttribute("href") === IMG_URL
              ) {
                imgParentNode.setAttribute("href", "javascript:;");
                imgParentNode.removeAttribute("target");
              }
              let isMatching = false;
              for (let item of MT_CONFIG.blackListNoViewIMG) {
                /* 图片黑名单 */
                if (
                  IMG_URL_HOSTNAME.indexOf(item["hostName"]) != -1 &&
                  IMG_URL_PATHNAME.match(item["pathName"])
                ) {
                  isMatching = true;
                  break;
                }
              }
              if (isMatching) {
                return;
              }
              clickShowIMGList = [...clickShowIMGList, IMG_URL];

              $jq(_item_).on("click", function () {
                console.log("点击图片", _item_);
                let _index_ = clickShowIMGList.findIndex((_img_) => {
                  return _img_ == IMG_URL;
                });
                viewIMG(clickShowIMGList, _index_);
              });
            });
            if (clickShowIMGList.length) {
              console.log(item);
              console.log("处理的图片", clickShowIMGList);
            }
            item.setAttribute("isHandlingViewIMG", true);
          });
        }
      );
    },
  };
  /**
   * 手机端执行的函数
   */
  const mobile = {
    /**
     * 主运行方法
     */
    main() {
      /* 手机版按顺序加载的函数 */
      /* 禁止自动执行的函数(这些函数在其它地方调用) */
      const notRunFunc = [
        "main",
        "registerSettingView",
        "editorChartBed",
        "previewPostForum",
        "selectPostingSection",
      ];
      Object.keys(mobile).forEach((key) => {
        if (
          typeof mobile[key] !== "function" ||
          notRunFunc.indexOf(key) != -1
        ) {
          return;
        }
        if (key === "loadNextComments") {
          Utils.tryCatch()
            .error(() => {
              $jq("#loading-comment-tip").text("加载评论失败");
            })
            .run(mobile.loadNextComments, this);
          return;
        }
        if (key === "loadPrevComments") {
          Utils.tryCatch()
            .error(() => {
              $jq("#loading-comment-tip-prev").text("加载评论失败");
            })
            .run(mobile.loadPrevComments, this);
          return;
        }

        Utils.tryCatch().run(mobile[key], this);
        mobileRepeatFunc.main();
      });
      unsafeWindow.popup2 = popup2;
      popup2.init();
    },
    /**
     * 自动展开帖子内容
     */
    autoExpendFullTextByForumPost() {
      if (
        GM_getValue("v18") &&
        location.href.match(MT_CONFIG.urlRegexp.forumPost)
      ) {
        GM_addStyle(`
                div.comiis_message.bg_f.view_one.b_b.cl.message > div.comiis_messages.comiis_aimg_show.cl{
                    max-height: inherit !important;
                    overflow-y: inherit !important;
                    position: inherit !important;
                }
                .comiis_lookfulltext_key,
                .comiis_lookfulltext_bg{
                    display: none !important;
                }`);
      }
    },
    /**
     * 每请求一页，自动签到
     * @returns
     */
    autoSignIn() {
      /**
       * 检测是否登录
       * @returns
       */
      async function checkLogin() {
        /* 桌面端登录 */
        let pc_login = document.querySelector("#comiis_key");
        /* 移动端的退出按钮，不登录是不会出现的 */
        let mobile_login_exitBtn = document.querySelector(
          ".sidenv_exit a[href*='member.php?mod=logging&action=logout']"
        );
        /* 登录Cookie，通过移动端登录，该Cookie不会HttpOnly，但是通过桌面端和调用QQ登录会 */
        let mobile_login_cookie = await getCookie("cQWy_2132_auth");
        /* 最后访问Cookie */
        let mobile_lastvisit_cookie = await getCookie("cQWy_2132_lastvisit");
        console.log("桌面端登录: ", pc_login);
        console.log("移动端登录: ", mobile_login_exitBtn);
        console.log(
          "账号cQWy_2132_auth: ",
          mobile_login_cookie
            ? mobile_login_cookie.slice(0, 8) + "..."
            : mobile_login_cookie
        );
        console.log(
          "账号cQWy_2132_lastvisit: ",
          mobile_lastvisit_cookie
            ? Utils.getFormatTime(
                "yyyy-MM-dd HH:mm:ss",
                parseInt(mobile_lastvisit_cookie) * 1000
              )
            : mobile_login_cookie
        );
        return pc_login || mobile_login_cookie || mobile_login_exitBtn;
      }
      /**
       * 获取Cookie，使用了GM_cookie，可能在某些油猴管理器上不兼容
       * @param {String} cookieName 需要获取的Cookie名字
       * @returns {String|undefined}
       */
      function getCookie(cookieName) {
        return new Promise((resolve) => {
          GM_cookie.list({ name: cookieName }, function (cookies, error) {
            if (error) {
              resolve(null);
            } else {
              if (cookies.length == 0) {
                resolve(null);
              } else {
                resolve(cookies[0].value);
              }
            }
          });
        });
      }
      function getFormHash() {
        /* 获取账号的formhash */
        let inputFormHash = top.document.querySelector("input[name=formhash]");
        let sidenv_exit = top.document.querySelector(
          "div[class=sidenv_exit]>a"
        ); /* 退出按钮(登录状态才有)，电脑版的 */
        let sidenv_exit_match = null;
        let comiis_recommend_addkey = top.document.querySelector(
          "a.comiis_recommend_addkey"
        ); /* 论坛浏览图片下的点赞按钮，获取formhash */
        let comiis_recommend_addkey_match = null;
        inputFormHash = inputFormHash ? inputFormHash.value : null;
        if (sidenv_exit) {
          sidenv_exit_match = sidenv_exit.href.match(
            MT_CONFIG.urlRegexp.formhash
          );
          sidenv_exit_match = sidenv_exit_match
            ? sidenv_exit_match[sidenv_exit_match.length - 1]
            : null;
        }
        if (comiis_recommend_addkey) {
          comiis_recommend_addkey_match = comiis_recommend_addkey.href.match(
            MT_CONFIG.urlRegexp.hash
          );
          comiis_recommend_addkey_match = comiis_recommend_addkey_match
            ? comiis_recommend_addkey_match[
                comiis_recommend_addkey_match.length - 1
              ]
            : null;
        }

        return (
          inputFormHash || sidenv_exit_match || comiis_recommend_addkey_match
        );
      }

      function signIn(_formhash_) {
        /* 签到 */
        console.log("发送签到请求");
        GM_xmlhttpRequest({
          method: "get",
          url: `/k_misign-sign.html?operation=qiandao&format=button&formhash=${_formhash_}&inajax=1&ajaxtarget=midaben_sign`,
          headers: {
            "User-Agent": Utils.getRandomPCUA(),
          },
          timeout: 5000,
          onload: (response) => {
            console.log(response);
            GM_setValue("mt_sign", parseInt(Utils.getFormatTime("yyyyMMdd")));
            if (response.lastChild || response.type == "ajax") {
              /* ajax函数版本 */
              if (response.responseText == "") {
                popup2.toast({
                  text: "签到: 成功",
                  delayTime: 4000,
                });
                return;
              }

              let signInContent = response.lastChild.firstChild.nodeValue;
              if (signInContent.indexOf("您已经被列入黑名单") != -1) {
                popup2.toast({
                  text: "签到: 您已经被列入黑名单",
                  delayTime: 4000,
                });
                return;
              }
              if (signInContent.indexOf("今日已签" != -1)) {
                popup2.toast({
                  text: "签到: 今日已签",
                  delayTime: 4000,
                });
                return;
              }
            } else {
              /* GM_xmlhttpRequest版本 */
              let CDATA = response.responseText.match(
                /<\!\[CDATA\[([\s\S]*)\]\]>/
              );
              CDATA = CDATA[CDATA.length - 1];
              let CDATA_Node = $jq(`<div>${CDATA}</div>`);
              let content = CDATA_Node.text();
              console.log(content);
              if (content.indexOf("您已经被列入黑名单") != -1) {
                popup2.toast({
                  text: "签到: 您已经被列入黑名单",
                  delayTime: 4000,
                });
                return;
              }
              if (content.indexOf("今日已签") != -1) {
                popup2.toast({
                  text: "签到: 今日已签",
                  delayTime: 4000,
                });
                return;
              }
              let signIn_con = CDATA_Node.find(".con"); /* 签到奖励 */
              let signIn_line = CDATA_Node.find(".line"); /* 签到排名 */
              if (signIn_con.length && signIn_line.length) {
                let con = signIn_con.text().match(/([0-9]+)金币/);
                let line = signIn_line.text().match(/([0-9]+)/);
                con = con[con.length - 1];
                line = line[line.length - 1];
                console.log(`金币${con}，排名${line}`);
                popup2.toast({
                  text: `<div style="display: flex;${
                    !envIsMobile() ? "padding: 20px;" : ""
                  }"><div style="align-self: center;margin-right: 20px;">签到</div><div>排名 ${line}<br>金币 ${con}</div></div>`,
                  delayTime: 4000,
                });

                return;
              }
              popup2.toast({
                text: "签到: 未知结果,请查看控制台信息",
                delayTime: 4000,
              });
            }
            if (typeof response == "string") {
              /* 无油猴函数的版本的签到成功是没有返回值的 */
              popup2.toast({
                text: "签到: 成功",
                delayTime: 4000,
              });
              return;
            }
          },
          onerror: (response) => {
            console.log(response);
            console.log("签到: 网络异常");
            popup2.toast({
              text: "签到: 网络异常",
              delayTime: 4000,
            });
          },
          ontimeout: () => {
            console.log("签到: 网络超时");
            popup2.toast({
              text: "签到: 网络超时",
              delayTime: 4000,
            });
          },
        });
      }

      if (!GM_getValue("v17")) {
        return;
      }

      if (
        envIsMobile() &&
        window.location.href.match(MT_CONFIG.urlRegexp.kMiSignSign)
      ) {
        var deleteLocalStorageSignInfo = $jq(`
                <div style="
									display: flex;
									align-items: center;
									justify-content: flex-end;
									margin-right: 8px;">
									<i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                </div>
                `);
        deleteLocalStorageSignInfo.on("click", "i", () => {
          popup2.confirm({
            text: "<p>是否清空脚本签到记录的时间?</p>",
            ok: {
              callback: () => {
                GM_deleteValue("mt_sign");
                if (GM_getValue("mt_sign", null) != null) {
                  popup2.toast("删除失败");
                } else {
                  popup2.toast("删除成功");
                  popup2.closeMask();
                  popup2.closeConfirm();
                }
              },
            },
            mask: true,
          });
        });
        $jq(".comiis_head.f_top")?.append(deleteLocalStorageSignInfo);
      }

      if (!checkLogin()) {
        popup2.toast("当前尚未登录账号");
        return;
      }

      let formhash = getFormHash();
      if (formhash == null) {
        if (document.querySelector("#comiis_picshowbox")) {
          /* 当前为评论区的看图模式 */
          console.log("当前为评论区的看图模式 ");
          return;
        }
        console.log("获取账号formhash失败");
        popup2.toast({
          text: "获取账号formhash失败",
        });
        return;
      }

      if (
        Utils.getFormatTime("HH") == "23" &&
        parseInt(Utils.getFormatTime("mm")) >= 55
      ) {
        /* 倒计时开启 */
        console.log("开启倒计时自动签到");
        let intervalId = setInterval(() => {
          let current_time = Utils.getFormatTime("HH:mm:ss");
          if (Utils.getFormatTime("hh:mm") == "00:00") {
            signIn(formhash);
            clearInterval(intervalId);
          } else {
            popup2.toast(`倒计时: ${current_time}`);
          }
        }, 1000);
        return;
      }
      if (GM_getValue("mt_sign") == parseInt(Utils.getFormatTime("yyyyMMdd"))) {
        return;
      } else {
        signIn(formhash);
      }
    },
    /**
     * 附件点击提醒
     */
    attachmentClickReminder() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.forumPost], "v57")) {
        return;
      }
      /**
       * 处理元素内的a标签的点击
       * @param {HTMLElement} item
       */
      function handleClick(item) {
        if (item.hasAttribute("href")) {
          console.log("发现附件", item);
          item.setAttribute("data-href", item.getAttribute("href"));
          item.removeAttribute("href");
          let attachmentNameNode = item.querySelector("span.f_ok");
          let attachmentName = attachmentNameNode.innerText;
          attachmentNameNode.innerText = "【已拦截】" + attachmentName;
          item.onclick = function () {
            popup2.confirm({
              text: `<br />确定下载附件 <a style="color: #507daf !important;">${attachmentName}</a> ？<br /><br />`,
              ok: {
                callback: () => {
                  console.log(item.getAttribute("data-href"));
                  window.open(item.getAttribute("data-href"), "_blank");
                  popup2.closeConfirm();
                },
              },
            });
          };
        }
      }
      Utils.mutationObserver(document.documentElement, {
        callback: () => {
          document.querySelectorAll(".attnm a").forEach((item) => {
            handleClick(item);
          });
          document.querySelectorAll(".comiis_attach a").forEach((item) => {
            handleClick(item);
          });
        },
        config: { childList: true, subtree: true },
      });
      Utils.waitNode(".attnm a").then(() => {
        document.querySelectorAll(".attnm a").forEach((item) => {
          handleClick(item);
        });
      });
      Utils.waitNode(".comiis_attach a").then(() => {
        document.querySelectorAll(".comiis_attach a").forEach((item) => {
          handleClick(item);
        });
      });
    },
    /**
     * 自动点击同意-用户协议
     */
    autoClickUserAgreement() {
      if (
        !MT_CONFIG.methodRunCheck([
          /http(s?):\/\/bbs.binmt.cc\/member.php\?mod=logging/gi,
        ])
      ) {
        return;
      }
      document.querySelector("#agreebbrules")?.click();
    },
    /**
     * 小黑屋
     */
    blackHome() {
      let nextCid = ""; /* 下一个cid，用于获取下一页黑名单 */
      /**
       * 小黑屋点击事件
       */
      async function blackHomeNodeClickEvent() {
        popup2.showLoadingMask();
        popup2.toast("正在获取小黑屋名单中...");
        let blackList = await getBlackList();
        if (blackList.length === 0) {
          popup2.toast("获取小黑屋名单失败");
          popup2.closeMask();
          return;
        }
        popup2.closeMask();
        popup2.closeToast();
        let blackCSSNode = GM_addStyle(`
				.blackhome-user-filter input{
					width: -webkit-fill-available;
					height: 30px;
					margin: 8px 20px;
					border: 0px;
					border-bottom: 1px solid;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
				}

				.blackhome-user-list{
					height: 350px;
          overflow-y: auto;
				}
				.blackhome-user-list .blackhome-user-item{
          margin: 15px 10px;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0rem 0rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
				}

        
				.blackhome-user{
          display: flex;
        }
				.blackhome-user img{
					width: 45px;
          height: 45px;
          border-radius: 45px;
				}
        .blackhome-user-info{
          margin-left: 10px;
        }
        .blackhome-user-info p:nth-child(1){
          margin-bottom: 5px;
        }
        .blackhome-user-info p:nth-child(2){
          font-size: 14px;
        }
				.blackhome-user-action{
          display: flex;
          margin: 10px 0px;
        }
        .blackhome-user-action p:nth-child(1),
        .blackhome-user-action p:nth-child(2){
          border: 1px solid #ff0000;
          color: #ff0000;
          border-radius: 4px;
          padding: 2px 4px;
          font-weight: 500;
          font-size: 14px;
          place-self: center;
        }
        .blackhome-user-action p:nth-child(2){
          border: 1px solid #ff4b4b;
          color: #ff4b4b;
          margin-left: 8px;
        }

        .blackhome-user-uuid{
          border: 1px solid #ff7600;
          color: #ff7600;
          border-radius: 4px;
          padding: 2px 4px;
          font-weight: 500;
          font-size: 14px;
          width: fit-content;
          width: -moz-fit-content;
          margin: 10px 0px;
        }

        .blackhome-operator{
          padding: 10px;
          background-color: #efefef;
          border-radius: 6px;
        }
        .blackhome-operator-user{
          display: flex;
        }
        .blackhome-operator-user img{
          width: 35px;
          height: 35px;
          border-radius: 35px;
        }
        .blackhome-operator-user p{
          align-self: center;
          margin-left: 10px;
        }
        .blackhome-operator-user-info{
          margin: 10px 0px;
          font-weight: 500;
        }
				`);
        $jq.NZ_MsgBox.confirm({
          title: "小黑屋名单",
          content: `
					<div class="blackhome-user-filter"><input placeholder="搜索用户名/操作人员/UID(可正则)"></div>
					<div class="blackhome-user-list"></div>`,
          type: "",
          location: "center",
          buttons: {
            autoClose: false,
            reverse: true,
            confirm: {
              text: "下一页",
            },
            cancel: {
              text: "关闭",
            },
          },
          callback: function (status, closeCallBack) {
            if (status) {
              blackHomeNextPageEvent();
            } else {
              closeCallBack();
            }
          },
        });
        let blackViewHTML = "";
        blackList.forEach((item) => {
          blackViewHTML += getBlackListViewHTML(item);
        });
        let blackViewNode = $jq(blackViewHTML);
        $jq(".blackhome-user-list").append(blackViewNode);
        setSearchPropertyChangeEvent();
      }
      /**
       * 获取下一页小黑屋名单
       */
      async function blackHomeNextPageEvent() {
        popup2.showLoadingMask();
        popup2.toast("正在获取小黑屋名单中...");
        console.log("下一页的cid: ", nextCid);
        let blackList = await getBlackList(nextCid);
        if (blackList.length === 0) {
          popup2.toast("获取下一页小黑屋名单失败");
          popup2.closeMask();
          return;
        }
        popup2.closeMask();
        popup2.closeToast();
        let blackViewHTML = "";
        blackList.forEach((item) => {
          blackViewHTML += getBlackListViewHTML(item);
        });
        popup2.toast(`成功获取 ${blackList.length}条数据`);
        $jq(".blackhome-user-list").append($jq(blackViewHTML));
        $jq(".blackhome-user-filter input")[0].dispatchEvent(
          new Event("propertychange")
        );
      }
      /**
       * 设置搜索-过滤的值变化事件
       */
      function setSearchPropertyChangeEvent() {
        let isSeaching = false;
        $jq(".blackhome-user-filter input").on(
          "propertychange input",
          function () {
            let inputText = this.value.trim();
            if (isSeaching) {
              return;
            }
            isSeaching = true;
            if (inputText == "") {
              $jq(".blackhome-user-item").each((index, item) => {
                item.removeAttribute("style");
              });
              isSeaching = false;
              return;
            }
            $jq(".NZ-MsgBox-alert .msgcon center").text("过滤中...");
            $jq(".NZ-MsgBox-alert .msgcon center").show();
            let isFind = false;
            $jq(".blackhome-user-item").each((index, item) => {
              if (
                item
                  .getAttribute("data-name")
                  .match(new RegExp(inputText, "ig")) ||
                item
                  .getAttribute("data-uid")
                  .trim()
                  .match(new RegExp(inputText, "ig")) ||
                item
                  .getAttribute("data-operator")
                  .match(new RegExp(inputText, "ig"))
              ) {
                /* 匹配到 */
                isFind = true;
                item.removeAttribute("style");
              } else {
                item.setAttribute("style", "display:none;");
              }
            });
            if (!isFind) {
              $jq(".NZ-MsgBox-alert .msgcon center").text("空");
              $jq(".NZ-MsgBox-alert .msgcon center").show();
            } else {
              $jq(".NZ-MsgBox-alert .msgcon center").hide();
            }
            isSeaching = false;
          }
        );
      }

      /**
       * 插入手机版查看小黑屋的按钮
       */
      async function insertMobileBlackHomeButton() {
        if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.bbs], "v30")) {
          return;
        }
        let blackHomeNode = $jq(`
        <li class="comiis_left_Touch">
          <a href="javascript:;" class="blacklist">
          <div class="styli_tit f_c">
            <i class="comiis_font" style="color: #000;"></i>
            </div>
          <div class="flex">小黑屋</div>
          </a>
        </li>
        `);
        GM_addStyle(`
          .NZ-MsgBox-alert .msgcontainer .msgtitle {
              text-align: center !important;
          }`);
        blackHomeNode.on("click", function () {
          blackHomeNodeClickEvent();
        });

        $jq(".comiis_sidenv_box .sidenv_li .comiis_left_Touch.bdew").append(
          blackHomeNode
        );
      }
      /**
       * 获取黑名单html
       * @param {String} cid 下一个人的cid
       * @returns {String}
       */
      function getBlackListPageInfoHTML(cid = "") {
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: `https://bbs.binmt.cc/forum.php?mod=misc&action=showdarkroom&cid=${cid}&t=&ajaxdata=json`,
            timeout: 5000,
            method: "GET",
            async: false,
            headers: {
              "User-Agent": Utils.getRandomPCUA(),
            },
            onload: (response) => {
              console.log(response);
              resolve(response.responseText);
            },
            onerror: (response) => {
              console.log(response);
              popup2.toast("网络异常,请重新获取");
              resolve("");
            },
            ontimeout: () => {
              popup2.toast("请求超时,请重新获取");
              resolve("");
            },
          });
        });
      }
      /**
       * 获取小黑屋显示出的html
       * @param {Object} value
       * @returns
       */
      function getBlackListViewHTML(value) {
        return `<div class="blackhome-user-item" 
                    data-name="${value["username"]}"
                    data-uid="${value["uid"]}" 
                    data-operator="${value["operator"]}"
                    data-operator-uid="${value["operatorid"]}">
                  <div class="blackhome-user-avatar">
                    <div class="blackhome-user">
                      <a data-href="home.php?mod=space&uid=${
                        value["uid"]
                      }&do=profile" onclick="window.open(this.getAttribute('data-href'),'_blank');return false;">
                        <img src="${MT_CONFIG.getAvatar(
                          value["uid"],
                          "big"
                        )}" loading="lazy">
                      </a>
                      <div class="blackhome-user-info">
                        <p>${value["username"]}</p>
                        <p>${value["dateline"]}</p>
                      </div>
                    </div>
                    <div class="blackhome-user-action">
                      <p>${value["action"]}</p>
                      <p>到期: ${value["groupexpiry"]}</p>
                    </div>
                    <div class="blackhome-user-uuid">UID: ${value["uid"]}</div>
                    <div class="blackhome-operator">
                      <div class="blackhome-operator-user">
                        <a data-href="home.php?mod=space&uid=${
                          value["operatorid"]
                        }&do=profile" onclick="window.open(this.getAttribute('data-href'),'_blank');return false;">
                          <img loading="lazy" src="${MT_CONFIG.getAvatar(
                            value["operatorid"],
                            "big"
                          )}">
                        </a>
                        <p>${value["operator"]}</p>
                      </div>
                      <div class="blackhome-operator-user-info">
                      ${value["reason"]}
                      </div>
                    </div>
                  </div>
                </div>`;
      }
      /**
       * 获取小黑屋名单列表
       * @param {String} cid 下一页的cid
       */
      function getBlackList(cid = "") {
        return new Promise(async (resolve) => {
          popup2.toast("正在获取小黑屋名单中...");
          let result = await getBlackListPageInfoHTML(cid);
          if (result === "") {
            resolve([]);
            return;
          }
          let data = parseBlackListHTML(result);
          console.log("准备排序的数据: ", data);
          let newData = blackListOrderByTime(data);
          console.log("排序完毕的结果: ", newData);
          resolve(newData);
        });
      }

      /**
       * 对小黑屋名单数组进行排序，并添加time属性
       * @param {Array} data
       * @returns {Array}
       */
      function blackListOrderByTime(data) {
        let blackList = [];
        let blackListWithNoTime = [];
        $jq.each(data, function (index, value) {
          let date = value["dateline"].match(
            /([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]*[0-9]{1,2}:[0-9]{1,2})/g
          );
          if (date == null) {
            let _time_ = parseInt(Date.now() / 1000);
            let _time_after_count_ = 0;
            let sec_data =
              value["dateline"].match(/([0-9]+|半)[\s\S]*秒前/); /* xx|半秒前 */
            let min_data =
              value["dateline"].match(
                /([0-9]+|半)[\s\S]*分钟前/
              ); /* xx|半分钟前 */
            let hour_data =
              value["dateline"].match(
                /([0-9]+|半)[\s\S]*小时前/
              ); /* xx|半小时前 */
            let yesterday_time_data = value["dateline"].match(
              /昨天[\s\S]*(\d{2}):(\d{2})/
            ); /* 昨天 xx:xx */
            let before_yesterday_time_data = value["dateline"].match(
              /前天[\s\S]*(\d{2}):(\d{2})/
            ); /* 前天 xx:xx */
            let day_data =
              value["dateline"].match(/([0-9]+|半)[\s\S]*天前/); /* xx天前 */
            if (sec_data) {
              sec_data = sec_data[sec_data.length - 1];
              sec_data = sec_data.replace(/半/g, 0.5);
              sec_data = parseFloat(sec_data);
              _time_after_count_ = _time_ - sec_data;
            } else if (min_data) {
              min_data = min_data[min_data.length - 1];
              min_data = min_data.replace(/半/g, 0.5);
              min_data = parseFloat(min_data);
              _time_after_count_ = _time_ - min_data * 60;
            } else if (hour_data) {
              hour_data = hour_data[hour_data.length - 1];
              hour_data = hour_data.replace(/半/g, 0.5);
              hour_data = parseFloat(hour_data);
              _time_after_count_ = _time_ - hour_data * 60 * 60;
            } else if (yesterday_time_data) {
              let yesterday_hour_data = yesterday_time_data[1];
              let yesterday_min_data = yesterday_time_data[2];
              _time_after_count_ =
                _time_ -
                86400 -
                parseInt(yesterday_hour_data) * 3600 -
                parseInt(yesterday_min_data) * 60;
            } else if (before_yesterday_time_data) {
              let before_yesterday_hour_data = before_yesterday_time_data[1];
              let before_yesterday_min_data = before_yesterday_time_data[2];
              _time_after_count_ =
                _time_ -
                86400 * 2 -
                parseInt(before_yesterday_hour_data) * 3600 -
                parseInt(before_yesterday_min_data) * 60;
            } else if (day_data) {
              day_data = day_data[day_data.length - 1];
              day_data = day_data.replace(/半/g, 0.5);
              day_data = parseFloat(day_data);
              _time_after_count_ = _time_ - day_data * 60 * 60 * 24;
            }
            value["time"] = parseInt(_time_after_count_) * 1000;
            blackList = blackList.concat(value);
            return;
          } else {
            date = date[0];
          }
          value["time"] = Utils.formatTextToTimeStamp(date);
          blackList = blackList.concat(value);
        });

        blackList.sort(
          Utils.sortListByProperty((item) => {
            return item["time"];
          })
        );

        blackListWithNoTime.sort(
          Utils.sortListByProperty((item) => {
            return item["time"];
          }, false)
        );
        blackList = [...blackList, ...blackListWithNoTime];
        return blackList;
      }

      /**
       * 解析黑名单html
       * @param {string} blackListHTML
       * @returns {Array}
       */
      function parseBlackListHTML(blackListHTML) {
        let parseResult = Utils.jsonStrToObject(blackListHTML);
        let data = parseResult["data"]; /* 黑名单列表 */
        let cid = parseResult["message"].split("|"); /* cid */
        cid = cid[cid.length - 1];
        nextCid = cid;
        data = Utils.jsonAllValueToArray(data);
        return data;
      }
      insertMobileBlackHomeButton();
    },
    /**
     * 黑名单-屏蔽用户或板块
     * @returns
     */
    blacklistShieldUsersOrBlocks() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.homeSpaceUrl])) {
        return;
      }
      const blackListCSS = `
			#shieldUser .styli_tit i,
			#shieldPlate .styli_tit i{
				color: #ff0019 !important;
			}
			.popup2-popmenu input[placeholder='请输入需要屏蔽的用户的UID'],
			.popup2-popmenu input[placeholder='请输入需要屏蔽的板块'],
			.popup2-popmenu input[placeholder='备注']{
				border: 0px;
				border-bottom: 1px solid #000;
				font-size: 16px;
				width: 100%;
				outline: 0;
				padding-top: 22px;
			}
			.NZ-MsgBox-alert .msgcontainer .msgcon{
				max-height: 400px !important;
			}
			.NZ-MsgBox-alert .msgdivflex{
				display: flex;
    		align-items: center;
				margin: 16px 10px;
				width:100%;
			}
			.NZ-MsgBox-alert .msgdivflex a{
				margin-right: 10px;
			}
			.NZ-MsgBox-alert .msgdivflex p[data-remark]:before{
				content:"备注：";
				font-weight: bold;
			}
			.NZ-MsgBox-alert .msgdivflex p[data-uid]:before{
				content:"UID：";
				font-weight: bold;
    		margin-right: 1.64px;
			}
			.NZ-MsgBox-alert .msgdivmain{
				display: flex;
    		align-items: center;
			}
			.NZ-MsgBox-alert .msgdivmain i.comiis_font{
				font-size: 24px;
				padding: 0px 6px;
			}
			`;
      const blankLinesHTML = '<div class="styli_h cl"></div>';
      const shieldUserOrPlateHTML = `
			<div id="blackList" class="comiis_myinfo_list bg_f cl">
				<a href="javascript:;" id="shieldUser" class="comiis_flex comiis_styli bg_f b_t cl">
					<div class="styli_tit f_c"><i class="comiis_font f_e"></i></div>
					<div class="flex">屏蔽用户</div>
					<div class="styli_ico">
						<i class="comiis_font f_e"></i>
					</div>
				</a>
				<a href="javascript:;" id="shieldPlate" class="comiis_flex comiis_styli bg_f b_t cl">
					<div class="styli_tit f_c"><i class="comiis_font f_e"></i></div>
					<div class="flex">屏蔽板块</div>
					<div class="styli_ico">
						<i class="comiis_font f_e"></i>
					</div>
				</a>
			</div>
			`;
      function setShieldViewData(alertTitle, storageKey) {
        /* 页面加载数据 */
        let shieldList = GM_getValue(storageKey, []);
        console.log(shieldList);
        if (shieldList.length === 0) {
          $jq(".NZ-MsgBox-alert .msgcon").html("<center>暂无数据</center>");
          return;
        }
        let shieldHTML = "";
        if (alertTitle.indexOf("用户") != -1) {
          /* 显示的屏蔽的用户 */
          shieldList.forEach((item) => {
            shieldHTML += `
						<div class="msgdivmain" data="shieldUser">
							<div class="msgdivflex">
								<a href="home.php?mod=space&uid=${item["uid"]}&do=profile">
									<img src="${MT_CONFIG.getAvatar(item["uid"], "small")}" loading="lazy">
								</a>
								<div>
									<p data-uid>${item["uid"]}</p>
									<p data-remark>${item["remark"]}</p>
								</div>
							</div>
							<i class="comiis_font f14 z" data-flag="edit" data-uid="${item["uid"]}"></i>
							<i class="comiis_font" data-flag="delete" data-uid="${item["uid"]}"></i>
						</div>
				`;
          });
        } else {
          /* 显示的屏蔽的板块 */
          shieldList.forEach((item) => {
            shieldHTML += `
						<div class="msgdivmain" data="shieldPlate">
							<div class="msgdivflex">
								<a href="javascript:;">
									${item}
								</a>
								<p></p>
							</div>
							<i class="comiis_font" data-name="${item}" data-flag='delete'></i>
						</div>
				`;
          });
        }

        $jq(".NZ-MsgBox-alert .msgcon").html($jq(`<li>${shieldHTML}</li>`));
      }
      function setTitleClickEvent(text, callback) {
        /* 设置点击标题事件 */
        $jq(".NZ-MsgBox-alert .msgtitle").on("click", function () {
          popup2.confirm({
            text: text,
            ok: {
              callback: () => {
                callback();
              },
            },
          });
        });
      }
      function setClickEvent() {
        /* 设置点击事件 */
        $jq(document).on("click", "#shieldUser", function () {
          var storageKeyUser = "shieldUser"; /* 本地存储键值 */
          $jq.NZ_MsgBox.alert({
            title: "屏蔽用户",
            content: "<center>检索中...</center>",
            type: "",
            location: "center",
            buttons: {
              confirm: {
                text: "确定",
              },
            },
          });
          setShieldViewData("屏蔽用户", storageKeyUser);
          const inputHTML = `
					<input name="text" placeholder="请输入需要屏蔽的用户的UID" autofocus autocomplete="off">
					<input name="text" placeholder="备注" autocomplete="off">`;
          setTitleClickEvent(inputHTML, () => {
            let userInputUID = $jq(
              ".popup2-popmenu input[placeholder='请输入需要屏蔽的用户的UID']"
            )
              .val()
              .trim();
            let userInputRemark = $jq(
              ".popup2-popmenu input[placeholder='备注']"
            ).val();
            let storageValue = {
              uid: userInputUID,
              remark: userInputRemark,
            };
            if (storageValue.uid == "") {
              popup2.toast("请输入需要屏蔽的用户的UID");
              return;
            }
            if (isNaN(storageValue.uid)) {
              popup2.toast("请输入正确的用户的UID");
              return;
            }
            let storageData = GM_getValue(storageKeyUser, []).filter((item) => {
              return item["uid"].toString() === storageValue.uid ? true : false;
            });
            if (storageData.length != 0) {
              popup2.toast("已添加过该用户");
              return;
            }
            console.log("添加", storageValue);
            GM_setValue(storageKeyUser, [
              ...GM_getValue(storageKeyUser, []),
              storageValue,
            ]);

            popup2.closeMask();
            popup2.closeConfirm();
            popup2.toast("添加成功");
            setShieldViewData("屏蔽用户", storageKeyUser);
          });
          $jq(document).on(
            "click",
            ".NZ-MsgBox-alert .msgdivmain[data='shieldUser'] i.comiis_font[data-flag='edit']",
            function () {
              let uid = this.getAttribute("data-uid").toString();
              let storageItem = GM_getValue(storageKeyUser, []);
              let storageData = storageItem.filter((item) => {
                return item["uid"].toString() === uid ? true : false;
              })[0];

              let remark = storageData["remark"];
              popup2.confirm({
                text: `<input name="text" placeholder="请输入需要屏蔽的用户的UID" autofocus autocomplete="off">
								<input name="text" placeholder="备注" autocomplete="off">`,
                ok: {
                  callback: () => {
                    let userInputUID = $jq(
                      ".popup2-popmenu input[placeholder='请输入需要屏蔽的用户的UID']"
                    ).val();
                    let userInputRemark = $jq(
                      ".popup2-popmenu input[placeholder='备注']"
                    ).val();
                    if (userInputUID == "") {
                      popup2.toast("请输入需要屏蔽的用户的UID");
                      return;
                    }
                    if (isNaN(userInputUID)) {
                      popup2.toast("请输入正确的用户的UID");
                      return;
                    }
                    storageData.uid = userInputUID.trim();
                    storageData.remark = userInputRemark;
                    console.log("修改", storageData);
                    storageItem.forEach((item, index) => {
                      if (item["uid"].toString() === userInputUID.toString()) {
                        item = storageData;
                        return;
                      }
                    });
                    GM_setValue(storageKeyUser, storageItem);

                    popup2.closeMask();
                    popup2.closeConfirm();
                    popup2.toast("修改成功");
                    setShieldViewData("屏蔽用户", storageKeyUser);
                  },
                  text: "修改",
                },
              });
              $jq(
                ".popup2-popmenu input[placeholder='请输入需要屏蔽的用户的UID']"
              ).val(uid);
              console.log(remark);
              $jq(".popup2-popmenu input[placeholder='备注']").val(remark);
            }
          );
          $jq(document).on(
            "click",
            ".NZ-MsgBox-alert .msgdivmain[data='shieldUser'] i.comiis_font[data-flag='delete']",
            function () {
              let parentNode = this.parentElement;
              let uid = this.getAttribute("data-uid").toString();
              popup2.confirm({
                text: "确定删除该条数据？",
                ok: {
                  callback: () => {
                    let storageItem = GM_getValue(storageKeyUser, []);
                    storageItem.forEach((item, index) => {
                      if (item["uid"].toString() === uid) {
                        console.log("找到");
                        storageItem.splice(index, 1);
                        return;
                      }
                    });
                    console.log("删除", uid);
                    GM_setValue(storageKeyUser, storageItem);
                    parentNode.remove();
                    popup2.closeMask();
                    popup2.closeConfirm();
                    popup2.toast("删除成功");
                  },
                },
              });
            }
          );
          $jq(
            ".popup2-popmenu input[placeholder='请输入需要屏蔽的用户的UID']"
          ).focus();
        });

        $jq(document).on("click", "#shieldPlate", function () {
          var storageKeyPlate = "shieldPlate"; /* 本地存储键值 */
          $jq.NZ_MsgBox.alert({
            title: "屏蔽板块",
            content: "<center>检索中...</center>",
            type: "",
            location: "center",
            buttons: {
              confirm: {
                text: "确定",
              },
            },
          });
          setShieldViewData("屏蔽板块", storageKeyPlate);
          const inputHTML = `
					<input name="text" placeholder="请输入需要屏蔽的板块" autofocus autocomplete="off">`;
          setTitleClickEvent(inputHTML, () => {
            let storageValue = $jq(
              ".popup2-popmenu input[placeholder='请输入需要屏蔽的板块']"
            )
              .val()
              .trim();
            if (storageValue == "") {
              popup2.toast("不能为空");
              return;
            }
            console.log("添加", storageValue);
            GM_setValue(storageKeyPlate, [
              ...GM_getValue(storageKeyPlate, []),
              storageValue,
            ]);
            popup2.closeMask();
            popup2.closeConfirm();
            popup2.toast("添加成功");
            setShieldViewData("屏蔽板块", storageKeyPlate);
          });
          $jq(document).on(
            "click",
            ".NZ-MsgBox-alert .msgdivmain[data='shieldPlate'] i.comiis_font[data-flag='delete']",
            function () {
              let parentNode = this.parentElement;
              let name = this.getAttribute("data-name").toString();
              popup2.confirm({
                text: "确定删除该条数据？",
                ok: {
                  callback: () => {
                    let storageItem = GM_getValue(storageKeyPlate, []);
                    storageItem.forEach((item, index) => {
                      if (item.toString() === name) {
                        console.log("找到");
                        storageItem.splice(index, 1);
                        return;
                      }
                    });
                    console.log("删除", name);
                    GM_setValue(storageKeyPlate, storageItem);
                    parentNode.remove();
                    popup2.closeMask();
                    popup2.closeConfirm();
                    popup2.toast("删除成功");
                  },
                },
              });
            }
          );
          $jq(
            ".popup2-popmenu input[placeholder='请输入需要屏蔽的板块']"
          ).focus();
        });
      }
      GM_addStyle(blackListCSS);
      $jq(".comiis_myinfo").append($jq(blankLinesHTML));
      $jq(".comiis_myinfo").append($jq(shieldUserOrPlateHTML));
      $jq(".comiis_myinfo").append($jq(blankLinesHTML));
      setClickEvent();
      GM_addStyle(`
				#blacklistallmain{
						height: 232px;
				}
				#blacklistallmain li.comiis_styli{
						height: 180px;
				}
				#blacklistallmain #blacklistuid{
						width: 90%; 
						resize: none; 
						opacity: 0.7; 
						height: 70% !important; 
						line-height: inherit;
						-webkit-appearance: none;
						border: none !important;
						font-size: 14px;
						vertical-align: middle;
						background-color: transparent;
						border-bottom: 3px solid #efefef !important;
				}
				#blacklistallmain #blacklistplate{
						width: 90%; 
						resize: none; 
						opacity: 0.7; 
						height: 30% !important;
						line-height: inherit;
						-webkit-appearance: none;
						border: none !important;
						font-size: 14px;
						vertical-align: middle;
						background-color: transparent;
				}
				#blacklistsave{
						text-align: center;
						background: transparent !important;
						border-color: transparent !important;
				}
				`);
    },
    /**
     * 在聊天的插入的图片图床接口API
     */
    chartBed: {
      ret_code: {
        200: {
          200: "删除成功",
        },
        500: {
          101: "重复上传",
          400: "请求被拒绝,token错误",
          401: "请求被拒绝",
        },
        400: {
          100: "删除失败,图片已删除",
          101: "重复上传",
        },
      },
      storage: {
        /**
         * 对已上传图片添加上传记录到本地存储
         * @param {*} web
         * @param {*} id_encoded
         * @param {*} url
         * @param {*} thumb_url
         * @param {*} name
         */
        add: function (web, id_encoded, url, thumb_url, name) {
          let localData = GM_getValue("chartBedsImagesHistory", []);
          let saveData = localData.concat({
            web: web,
            id_encoded: id_encoded,
            url: url,
            thumb_url: thumb_url,
            name: name,
          });
          GM_setValue("chartBedsImagesHistory", saveData);
        },
        /**
         * 删除本地存储中已上传图片的记录
         * @param {*} _web_
         * @param {*} id_encoded
         * @returns
         */
        delete: function (_web_, id_encoded) {
          let localData = GM_getValue("chartBedsImagesHistory", []);
          let successDelete = false;
          Array.from(localData).forEach((item, index) => {
            if (item["web"] == _web_ && item["id_encoded"] == id_encoded) {
              successDelete = true;
              localData.splice(index, 1);
              GM_setValue("chartBedsImagesHistory", localData);
              return;
            }
          });
          console.log("删除数据:", successDelete);
          if (!successDelete) {
            popup2.toast("删除数据失败");
          }

          return successDelete;
        },
        /**
         * 获取本地存储中已上传的图片信息
         * @returns
         */
        get: function () {
          return GM_getValue("chartBedsImagesHistory", []);
        },
      },
      /**
       * 获取图床的auth_token，这里是想imgtu或hello图床这些通用api接口
       * @param {*} url
       * @returns
       */
      getAuthToken(url) {
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: url,
            method: "GET",
            timeout: 15000,
            responseType: "html",
            headers: {
              "user-agent": Utils.getRandomPCUA(),
            },
            onload: (response) => {
              let token = response.responseText.match(
                /PF.obj.config.auth_token[\s]*=[\s]*"(.+)";/i
              );
              if (token != null && token.length == 2) {
                popup2.toast("auth_token成功获取");
                resolve(token[1]);
              } else {
                console.log(response);
                popup2.toast("auth_token获取失败");
                resolve(null);
              }
            },
            onerror: () => {
              popup2.toast("网络异常");
              resolve(null);
            },
            ontimeout: () => {
              popup2.toast("请求超时");
              resolve(null);
            },
          });
        });
      },
      /**
       * 图床登录
       * @param {*} url
       * @param {*} user
       * @param {*} pwd
       * @param {*} auth_token
       * @returns
       */
      login(url, user, pwd, auth_token) {
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: `${url}/login`,
            method: "POST",
            timeout: 15000,
            data: `login-subject=${user}&password=${pwd}&auth_token=${auth_token}`,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "User-Agent": Utils.getRandomPCUA(),
            },
            onload: (response) => {
              console.log(response);
              if (
                response.status == 200 &&
                response.responseText.match("注销")
              ) {
                popup2.toast("登陆成功");
                resolve(true);
              } else {
                popup2.toast("登录失败");
                resolve(false);
              }
            },
            onerror: () => {
              popup2.toast("网络异常");
              resolve(false);
            },
            ontimeout: () => {
              popup2.toast("请求超时");
              resolve(false);
            },
          });
        });
      },
      /**
       * 上传图片
       * @param {*} url
       * @param {*} auth_token
       * @param {*} imageFile
       * @returns
       */
      uploadImage(url, auth_token, imageFile) {
        let res_data = {
          imageUri: null,
          json_data: null,
        };
        console.log(imageFile);
        let form = new FormData();
        form.append("type", "file");
        form.append("action", "upload");
        form.append("timestamp", new Date().getTime());
        form.append("auth_token", auth_token);
        form.append("nsfw", 0);
        form.append("source", imageFile);
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: `${url}/json`,
            method: "POST",
            data: form,
            async: false,
            responseType: "json",
            headers: {
              Accept: "application/json",
              "User-Agent": Utils.getRandomPCUA(),
              Referer: `${url}/`,
              Origin: url,
            },
            onload: (response) => {
              console.log(response);
              let json_data = JSON.parse(response.responseText);
              console.log(json_data);
              let status_code = json_data["status_code"];
              if (status_code == 200) {
                popup2.toast("上传成功");
                let file_reader = new FileReader();
                /* FileReader主要用于将文件内容读入内存，通过一系列异步接口，可以在主线程中访问本地文件 */
                file_reader.readAsDataURL(
                  imageFile
                ); /* 读取图片的内容生成的base64编码的图 */
                /* 读取完成后，执行该回调函数，它会返回读取的结果result		 */
                file_reader.onload = function () {
                  let imageUri =
                    this.result; /* 此时的图片已经存储到了result中	 */
                  res_data["imageUri"] = imageUri;
                  res_data["json_data"] = json_data;
                  resolve(res_data);
                };
              } else if (
                mobile.chartBed.ret_code[status_code] != null &&
                mobile.chartBed.ret_code[status_code][
                  json_data["error"]["code"]
                ] != null
              ) {
                popup2.toast(
                  mobile.chartBed.ret_code[status_code][
                    json_data["error"]["code"]
                  ]
                );
                resolve(res_data);
              } else {
                console.log(json_data);
                resolve(res_data);
              }
            },
            onerror: (response) => {
              console.log(response.responseText);
              popup2.toast("网络异常");
              resolve(res_data);
            },
          });
        });
      },
      /**
       * 删除已上传图片
       * @param {*} url
       * @param {*} auth_token
       * @param {*} id_encoded
       * @returns
       */
      deleteImage(url, auth_token, id_encoded) {
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: `${url}/json`,
            method: "POST",
            timeout: 15000,
            data: `auth_token=${auth_token}&action=delete&single=true&delete=image&deleting[id]=${id_encoded}`,
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
              "User-Agent": Utils.getRandomPCUA(),
            },
            onload: (response) => {
              try {
                let json_data = JSON.parse(response.responseText);
                let status_code = json_data["status_code"];

                if (status_code == 200 && json_data["success"]["code"] == 200) {
                  popup2.toast(mobile.chartBed.ret_code["200"]["200"]);
                  resolve(true);
                } else if (
                  status_code == 400 &&
                  json_data["error"]["code"] == 100
                ) {
                  popup2.toast(mobile.chartBed.ret_code["400"]["100"]);
                  resolve(true);
                } else if (
                  mobile.chartBed.ret_code[status_code] != null &&
                  mobile.chartBed.ret_code[status_code][
                    json_data["error"]["code"]
                  ] != null
                ) {
                  popup2.toast(
                    mobile.chartBed.ret_code[status_code][
                      json_data["error"]["code"]
                    ]
                  );
                  resolve(false);
                } else {
                  console.log(json_data);
                  popup2.toast(json_data["error"]["message"]);
                  resolve(false);
                }
              } catch (error) {
                popup2.toast("删除失败");
                console.log(error);
                resolve(false);
              }
            },
            onerror: () => {
              popup2.toast("网络异常");
              resolve(false);
            },
            ontimeout: () => {
              popup2.toast("请求超时");
              resolve(false);
            },
          });
        });
      },
      /**
       * 图片账号密码的弹窗
       * @param {*} chartbedname
       * @param {*} register_url
       * @param {*} callbackfun
       */
      popupUserPwd(chartbedname, register_url, callbackfun) {
        popup2.confirm({
          text: `
            <p style="padding: 10px 0px;">${chartbedname}</p>
            <div>
                <div style="display: flex;">
                    <p style="width: 60px;padding: 0;align-self: center;">账号</p>
                    <input type="text" placeholder="请输入图床的账号" style="
                        -webkit-appearance: none;
                        width: 100%;
                        height: 2.5em;
                        line-height: 1.4;
                        font-size: inherit;
                        border: none;
                        outline: none;
                        background-color: transparent;
                        border-bottom: 1px solid #000000;
                    " id="chartbed_user">
                </div>
                <div style="display: flex;">
                    <p style="width: 60px;padding: 0;align-self: center;">密码</p>
                    <input type="password" placeholder="请输入图床的密码" style="
                        -webkit-appearance: none;
                        width: 100%;
                        height: 2.5em;
                        line-height: 1.4;
                        font-size: inherit;
                        border: none;
                        outline: none;
                        background-color: transparent;
                        border-bottom: 1px solid #000000;
                    " id="chartbed_pwd">
                </div>
                <p><a style="color: #003ffa !important;" href="${register_url}" target="_blank">没有账号？点我去注册！</a></p>
            </div>`,
          mask: true,
          only: true,
          ok: {
            callback: () => {
              let inputUser = document
                .querySelector("#chartbed_user")
                .value.trim();
              let inputPwd = document
                .querySelector("#chartbed_pwd")
                .value.trim();
              callbackfun(inputUser, inputPwd);
            },
          },
        });
      },
    },
    /**
     * 聊天的图床
     */
    chatChartBed() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.chatUrl], "v40")) {
        return;
      }
      GM_addStyle(`
            .comiis_post_imglist li.up_btn_kggzs a,
            .comiis_post_imglist li.up_btn_hello a,
            .comiis_post_imglist li.up_btn_z4a a{
                display: block;
                width: 50px;
                height: 50px;
                line-height: 50px;
                padding: 4px;
                border-radius: 2px;
                border-style: dashed;
            }
            .comiis_post_imglist li.up_btn_kggzs a i,
            .comiis_post_imglist li.up_btn_hello a i,
            .comiis_post_imglist li.up_btn_z4a a i  {
                position: absolute;
                top: 11px;
                left: 5px;
                z-index: 8;
                font-size: 26px;
                width: 50px;
                height: 50px;
                line-height: 50px;
                text-align: center;
            }
            .comiis_post_imglist li.up_btn_kggzs a input,
            .comiis_post_imglist li.up_btn_hello a input,
            .comiis_post_imglist li.up_btn_z4a a input {
                position:absolute;
                top:11px;
                left:5px;
                height:50px;
                width:50px;
                z-index:10;
                opacity:0;
            }
            .comiis_post_imglist li .delImg {
                position:absolute;
                top:-5px;
                left:-5px
            }
            .comiis_post_imglist li .delImg i {
                font-size:24px;
                background:#fff;
                border-radius:50%
            }
            .imgboxlist{
                height: 170px;
                overflow-y: auto;
            }
            .menuclicked{
                background: #fff;
            }
            #filedata_kggzs,
            #filedata_hello,
            #filedata_z4a{
                display: none;
            }
            `);

      function chatKGChartBed() {
        /* 聊天快捷图片上传康哥图床 */
        let chartBedUrl = "https://img.kggzs.cn/api/v1";
        let chartBedUser = GM_getValue("KggzsChartBedUser");
        let chartBedPwd = GM_getValue("KggzsChartBedPwd");
        let chartBedToken = null;
        let loginStatus = false; /* 登录状态 */
        let tokenStatus = false; /* token状态 */
        let code = {
          401: "未登录或授权失败",
          403: "管理员关闭了接口功能",
          429: "超出请求配额，请求受限",
          500: "服务端出现异常",
        };

        function getToken() {
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: `${chartBedUrl}/tokens`,
              method: "POST",
              timeout: 5000,
              data: `email=${chartBedUser}&password=${chartBedPwd}`,
              headers: {
                Accept: "application/json",
                "User-Agent": Utils.getRandomPCUA(),
              },
              onload: (response) => {
                if (code[response.status] != null) {
                  popup2.toast(code[response.status]);
                  resolve(null);
                  return;
                }
                let json_data = JSON.parse(response.responseText);
                if (json_data["status"]) {
                  popup2.toast("token成功获取");
                  resolve(json_data["data"]["token"]);
                } else {
                  popup2.toast(json_data["message"]);
                  resolve(null);
                }
              },
              onerror: () => {
                popup2.toast("网络异常");
                resolve(null);
              },
              ontimeout: () => {
                popup2.toast("请求超时");
                resolve(null);
              },
            });
          });
        }

        function uploadImage(imageFile) {
          let res_data = {
            imageUri: null,
            json_data: null,
          };
          let form = new FormData();
          form.append("strategy_id", 2); /* 存储策略 */
          form.append("file", imageFile);
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: `${chartBedUrl}/upload`,
              method: "POST",
              data: form,
              async: false,
              responseType: "json",
              headers: {
                Accept: "application/json",
                "User-Agent": Utils.getRandomPCUA(),
                Authorization: `Bearer ${chartBedToken}`,
              },
              onload: (response) => {
                if (code[response.status] != null) {
                  popup2.toast(code[response.status]);
                  resolve(res_data);
                  return;
                }
                let json_data = JSON.parse(response.responseText);
                console.log(json_data);

                if (json_data["status"]) {
                  popup2.toast("上传成功");
                  let file_reader = new FileReader();
                  /* FileReader主要用于将文件内容读入内存，通过一系列异步接口，可以在主线程中访问本地文件 */
                  file_reader.readAsDataURL(
                    imageFile
                  ); /* 读取图片的内容生成的base64编码的图 */
                  /* 读取完成后，执行该回调函数，它会返回读取的结果result		 */
                  file_reader.onload = function () {
                    let imageUri =
                      this.result; /* 此时的图片已经存储到了result中	 */
                    res_data["imageUri"] = imageUri;
                    res_data["json_data"] = json_data;
                    resolve(res_data);
                  };
                } else {
                  console.log(json_data);
                  popup2.toast(json_data["message"]);
                  resolve(res_data);
                }
              },
              onerror: () => {
                popup2.toast("网络异常");
                resolve(res_data);
              },
            });
          });
        }

        function deleteImage(imageKey) {
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: `${chartBedUrl}/images/:${imageKey}`,
              method: "DELETE",
              async: false,
              timeout: 5000,
              data: JSON.stringify({
                key: "",
              }),
              responseType: "json",
              headers: {
                Accept: "application/json",
                "User-Agent": Utils.getRandomPCUA(),
                Referer: `${chartBedUrl}/`,
                Authorization: `Bearer ${chartBedToken}`,
                Origin: chartBedUrl,
              },
              onload: (response) => {
                if (code[response.status] != null) {
                  popup2.toast(code[response.status]);
                  resolve(res_data);
                  return;
                }
                let json_data = JSON.parse(response.responseText);
                console.log(json_data);
              },
              onerror: () => {
                popup2.toast("网络异常");
                resolve(res_data);
              },
              ontimeout: () => {
                popup2.toast("请求超时");
                resolve(res_data);
              },
            });
          });
        }

        function clearData() {
          chartBedUser = "";
          chartBedPwd = "";
          chartBedToken = null;
          loginStatus = false;
          tokenStatus = false;
          GM_deleteValue("KggzsChartBedUser");
          GM_deleteValue("KggzsChartBedPwd");
        }

        $jq(document).on(
          "click",
          "#imglist_kggzs .up_btn_kggzs a",
          async function () {
            if (tokenStatus) {
              popup2.toast("正在配置中...");
              return;
            }
            if (!chartBedUser || !chartBedPwd) {
              let loginCallBack = () => {
                let user = $jq("#chartbed_user").val().trim();
                let pwd = $jq("#chartbed_pwd").val().trim();
                if (user && pwd) {
                  GM_setValue("KggzsChartBedUser", user);
                  GM_setValue("KggzsChartBedPwd", pwd);
                  chartBedUser = user;
                  chartBedPwd = pwd;
                  popup2.closeConfirm();
                  setTimeout(() => {
                    $jq("#imglist_kggzs .up_btn_kggzs a").click();
                  }, 500);
                } else {
                  popup2.toast("账号或密码不能为空");
                }
              };
              mobile.chartBed.popupUserPwd(
                "康哥图床",
                "https://img.kggzs.cn/register",
                loginCallBack
              );
            } else if (chartBedToken == null || !loginStatus) {
              popup2.showLoadingMask();
              tokenStatus = true;
              popup2.toast("正在配置token");
              chartBedToken = await getToken();
              popup2.closeMask();
              console.log("token:" + chartBedToken);
              if (chartBedToken != null) {
                $jq("#filedata_kggzs").click();
              } else {
                clearData();
              }
              tokenStatus = false;
            } else {
              $jq("#filedata_kggzs").click();
            }
          }
        );
        $jq(document).on("change", "#filedata_kggzs", (e) => {
          let chooseImageFiles = e.currentTarget.files;
          if (chooseImageFiles.length == 0) {
            return;
          }
          popup2.showLoadingMask();
          popup2.toast("上传图片中...请稍后");
          console.log(`图片数量:${chooseImageFiles.length}`);
          let uploadFileAwaitFunction = async (params) => {
            let imageFile = chooseImageFiles[params[0]];
            let uploadImageReturn = await uploadImage(imageFile);
            if (uploadImageReturn["json_data"] != null) {
              console.log(uploadImageReturn);
              let image_id_encoded =
                uploadImageReturn["json_data"]["data"]["key"];
              let image_url =
                uploadImageReturn["json_data"]["data"]["links"]["url"];
              let image_thumb_url =
                uploadImageReturn["json_data"]["data"]["links"][
                  "thumbnail_url"
                ];
              let image_name =
                uploadImageReturn["json_data"]["data"]["origin_name"];
              let image_uri = uploadImageReturn["imageUri"];
              let uploadImageHTML = `<li>
                                <span class="delImg" id-encode="${image_id_encoded}">
                                    <a href="javascript:;">
                                        <i class="comiis_font f_g"></i>
                                    </a>
                                </span>
                                <span class="charu f_f">插入</span>
                                <span class="p_img">
                                    <a href="javascript:;" onclick="comiis_addsmilies('[img]${image_url}[/img]')">
                                        <img style="height:54px;width:54px;" 
																						 title="${image_name}" 
																						 loading="lazy"
																						 src="${image_uri}" 
																						 class="vm b_ok">
																		</a>
                                </span>
                                <input type="hidden" name="">
                            </li>`;
              $jq("#imglist_kggzs").append($jq(uploadImageHTML));
              mobile.chartBed.storage.add(
                "kggzs",
                image_id_encoded,
                image_url,
                image_thumb_url,
                image_name
              );
            }
          };
          let completeFunction = () => {
            popup2.closeMask();
            $jq("#filedata_kggzs").val("");
          };
          Utils.asyncArrayForEach(
            chooseImageFiles,
            uploadFileAwaitFunction
          ).then(() => {
            Utils.tryCatch().run(completeFunction);
          });
        });
        $jq(document).on(
          "click",
          "#imglist_kggzs .delImg",
          async function (event) {
            event.preventDefault();
            event.currentTarget.parentElement.remove();
            /* popup2.toast('删除中，请稍后');
                    let id_encoded = e.currentTarget.getAttribute("id-encode");
                    if(!id_encoded){
                        popup2.toast('获取id_encoded失败，请自行去Hello图床删除');
                        return;
                    }
                    let deleteStatus = await deleteImage(key);
                    if(deleteStatus){
                        e.currentTarget.parentElement.remove();
                        mobile.chartBed.storage.delete("kggzs",id_encoded);
                    } */
          }
        );
      }

      function chatHelloChartBed() {
        /* 聊天快捷图片上传Hello图床 */
        let chartBedUrl = "https://www.helloimg.com";
        let chartBedUser = GM_getValue("HelloChartBedUser");
        let chartBedPwd = GM_getValue("HelloChartBedPwd");
        let chartBedAuthToken = null;
        let loginStatus = false; /* 登录状态 */
        let authTokenStatus = false; /* authToken状态 */

        let clearData = () => {
          GM_deleteValue("HelloChartBedUser");
          GM_deleteValue("HelloChartBedPwd");
          loginStatus = false;
          authTokenStatus = false;
          chartBedUser = "";
          chartBedPwd = "";
          chartBedAuthToken = null;
        };
        $jq(document).on(
          "click",
          "#imglist_hello .up_btn_hello a",
          async function () {
            if (authTokenStatus) {
              popup2.toast("正在配置中...");
              return;
            }
            if (!chartBedUser || !chartBedPwd) {
              let loginCallBack = () => {
                let user = $jq("#chartbed_user").val().trim();
                let pwd = $jq("#chartbed_pwd").val().trim();
                if (user && pwd) {
                  GM_setValue("HelloChartBedUser", user);
                  GM_setValue("HelloChartBedPwd", pwd);
                  chartBedUser = user;
                  chartBedPwd = pwd;
                  popup2.closeConfirm();
                  setTimeout(() => {
                    $jq("#imglist_hello .up_btn_hello a").click();
                  }, 500);
                } else {
                  popup2.toast("账号或密码不能为空");
                }
              };
              mobile.chartBed.popupUserPwd(
                "Hello图床",
                "https://www.helloimg.com/signup",
                loginCallBack
              );
            } else if (chartBedAuthToken == null || !loginStatus) {
              authTokenStatus = true;
              popup2.showLoadingMask();
              popup2.toast("正在配置auth_token");
              chartBedAuthToken = await mobile.chartBed.getAuthToken(
                chartBedUrl
              );
              console.log("auth_token:", chartBedAuthToken);
              if (chartBedAuthToken != null) {
                popup2.toast("正在登录Hello图床");
                let retloginStatus = await mobile.chartBed.login(
                  chartBedUrl,
                  chartBedUser,
                  chartBedPwd,
                  chartBedAuthToken
                );
                popup2.closeMask();
                if (retloginStatus) {
                  loginStatus = true;
                  $jq("#filedata_hello").click();
                } else if (retloginStatus == false) {
                  clearData();
                }
              }
              popup2.closeMask();
              authTokenStatus = false;
            } else {
              $jq("#filedata_hello").click();
            }
          }
        );
        $jq(document).on("change", "#filedata_hello", (e) => {
          let chooseImageFiles = e.currentTarget.files;
          if (chooseImageFiles.length == 0) {
            return;
          }
          popup2.showLoadingMask();
          popup2.toast("上传图片中...请稍后");
          let uploadFileAwaitFunction = async (params) => {
            let imageFile = chooseImageFiles[params[0]];
            let uploadImageReturn = await mobile.chartBed.uploadImage(
              chartBedUrl,
              chartBedAuthToken,
              imageFile
            );
            if (uploadImageReturn["json_data"] != null) {
              let image_id_encoded =
                uploadImageReturn["json_data"]["image"]["id_encoded"];
              let image_url = uploadImageReturn["json_data"]["image"]["url"];
              let image_thumb_url =
                uploadImageReturn["json_data"]["image"]["thumb"]["url"];
              let image_name =
                uploadImageReturn["json_data"]["image"]["filename"];
              let image_uri = uploadImageReturn["imageUri"];
              let uploadImageHTML = `<li>
                                <span class="delImg" id-encode="${image_id_encoded}">
                                    <a href="javascript:;">
                                        <i class="comiis_font f_g"></i>
                                    </a>
                                </span>
                                <span class="charu f_f">插入</span>
                                <span class="p_img">
                                    <a href="javascript:;" onclick="comiis_addsmilies('[img]${image_url}[/img]')">
                                        <img style="height:54px;width:54px;" 
																						 title="${image_name}" 
																						 src="${image_uri}" 
																						 loading="lazy"
																						 class="vm b_ok">
																		</a>
                                </span>
                                <input type="hidden" name="">
                            </li>`;
              $jq("#imglist_hello").append($jq(uploadImageHTML));
              mobile.chartBed.storage.add(
                "hello",
                image_id_encoded,
                image_url,
                image_thumb_url,
                image_name
              );
            }
          };

          let completeFunction = () => {
            popup2.closeMask();
            $jq("#filedata_hello").val("");
          };
          Utils.asyncArrayForEach(
            chooseImageFiles,
            uploadFileAwaitFunction
          ).then(() => {
            Utils.tryCatch().run(completeFunction);
          });
        });
        $jq(document).on("click", "#imglist_hello .delImg", async function (e) {
          e.preventDefault();
          popup2.showLoadingMask();
          popup2.toast("删除中，请稍后");
          let id_encoded = e.currentTarget.getAttribute("id-encode");
          if (!id_encoded) {
            popup2.closeMask();
            popup2.toast("获取id_encoded失败，请自行去Hello图床删除");
            return;
          }
          let deleteStatus = await mobile.chartBed.deleteImage(
            chartBedUrl,
            chartBedAuthToken,
            id_encoded
          );
          popup2.closeMask();
          if (deleteStatus) {
            $jq(this).parent().remove();
            mobile.chartBed.storage.delete("hello", id_encoded);
          }
        });
      }

      function chatZ4AChartBed() {
        /* 聊天快捷图片上传Z4A图床 */
        let chartBedUrl = "https://www.z4a.net";
        let chartBedUser = GM_getValue("Z4AChartBedUser");
        let chartBedPwd = GM_getValue("Z4AChartBedPwd");
        let chartBedAuthToken = null;
        let loginStatus = false; /* 登录状态 */
        let authTokenStatus = false; /* authToken状态 */

        let clearData = () => {
          GM_deleteValue("Z4AChartBedUser");
          GM_deleteValue("Z4AChartBedPwd");
          loginStatus = false;
          authTokenStatus = false;
          chartBedUser = "";
          chartBedPwd = "";
          chartBedAuthToken = null;
        };
        $jq(document).on(
          "click",
          "#imglist_z4a .up_btn_z4a a",
          async function () {
            if (authTokenStatus) {
              popup2.toast("正在配置中...");
              return;
            }
            if (!chartBedUser || !chartBedPwd) {
              let loginCallBack = () => {
                let user = $jq("#chartbed_user").val().trim();
                let pwd = $jq("#chartbed_pwd").val().trim();
                if (user && pwd) {
                  GM_setValue("Z4AChartBedUser", user);
                  GM_setValue("Z4AChartBedPwd", pwd);
                  chartBedUser = user;
                  chartBedPwd = pwd;
                  popup2.closeConfirm();
                  setTimeout(() => {
                    $jq("#imglist_z4a .up_btn_z4a a").click();
                  }, 500);
                } else {
                  popup2.toast("账号或密码不能为空");
                }
              };
              mobile.chartBed.popupUserPwd(
                "Z4A图床",
                "https://www.z4a.net/signup",
                loginCallBack
              );
            } else if (chartBedAuthToken == null || !loginStatus) {
              popup2.showLoadingMask();
              authTokenStatus = true;
              popup2.toast("正在配置auth_token");
              chartBedAuthToken = await mobile.chartBed.getAuthToken(
                chartBedUrl
              );
              console.log("auth_token:", chartBedAuthToken);
              if (chartBedAuthToken != null) {
                popup2.toast("正在登录Z4A图床");
                let retloginStatus = await mobile.chartBed.login(
                  chartBedUrl,
                  chartBedUser,
                  chartBedPwd,
                  chartBedAuthToken
                );
                popup2.closeMask();
                if (retloginStatus) {
                  loginStatus = true;
                  $jq("#filedata_z4a").click();
                } else if (retloginStatus == false) {
                  clearData();
                }
              }
              popup2.closeMask();
              authTokenStatus = false;
            } else {
              $jq("#filedata_z4a").click();
            }
          }
        );
        $jq(document).on("change", "#filedata_z4a", async (e) => {
          let chooseImageFiles = e.currentTarget.files;
          if (chooseImageFiles.length == 0) {
            return;
          }
          popup2.showLoadingMask();
          popup2.toast("上传图片中...请稍后");
          let uploadFileAwaitFunction = async (params) => {
            console.log("上传图片：" + chooseImageFiles[params[0]]);
            let uploadImageReturn = await mobile.chartBed.uploadImage(
              chartBedUrl,
              chartBedAuthToken,
              chooseImageFiles[params[0]]
            );
            if (uploadImageReturn["json_data"] != null) {
              let image_id_encoded =
                uploadImageReturn["json_data"]["image"]["id_encoded"];
              let image_url = uploadImageReturn["json_data"]["image"]["url"];
              let image_thumb_url =
                uploadImageReturn["json_data"]["image"]["thumb"]["url"];
              let image_name =
                uploadImageReturn["json_data"]["image"]["filename"];
              let image_uri = uploadImageReturn["imageUri"];
              let uploadImageHTML = `<li>
                                <span class="delImg" id-encode="${image_id_encoded}">
                                    <a href="javascript:;">
                                        <i class="comiis_font f_g"></i>
                                    </a>
                                </span>
                                <span class="charu f_f">插入</span>
                                <span class="p_img">
                                    <a href="javascript:;" onclick="comiis_addsmilies('[img]${image_url}[/img]')">
                                        <img style="height:54px;width:54px;" 
																						 title="${image_name}" 
																						 src="${image_uri}" 
																						 class="vm b_ok"
																						 loading="lazy">
																		</a>
                                </span>
                                <input type="hidden" name="">
                            </li>`;
              $jq("#imglist_z4a").append($jq(uploadImageHTML));
              mobile.chartBed.storage.add(
                "z4a",
                image_id_encoded,
                image_url,
                image_thumb_url,
                image_name
              );
            }
          };

          let completeFunction = () => {
            popup2.closeMask();
            $jq("#filedata_z4a").val("");
          };
          Utils.asyncArrayForEach(
            chooseImageFiles,
            uploadFileAwaitFunction
          ).then(() => {
            Utils.tryCatch().run(completeFunction);
          });
        });
        $jq(document).on("click", "#imglist_z4a .delImg", async function (e) {
          e.preventDefault();
          popup2.showLoadingMask();
          popup2.toast("删除中，请稍后");
          let id_encoded = e.currentTarget.getAttribute("id-encode");
          if (!id_encoded) {
            popup2.closeMask();
            popup2.toast("获取id_encoded失败，请自行去Z4A图床删除");
            return;
          }
          let deleteStatus = await mobile.chartBed.deleteImage(
            chartBedUrl,
            chartBedAuthToken,
            id_encoded
          );
          popup2.closeMask();
          if (deleteStatus) {
            $jq(this).parent().remove();
            mobile.chartBed.storage.delete("z4a", id_encoded);
          }
        });
      }

      function chatHistoryChartBedImages() {
        /* 所有图床历史上传过的图片 */
        let historyImages = mobile.chartBed.storage.get();

        $jq.each(historyImages, (i) => {
          let _web = historyImages[i]["web"];
          let _url = historyImages[i]["url"];
          let _thumb_url = historyImages[i]["thumb_url"];
          let _name = historyImages[i]["name"];

          let _imageHTML = `
                    <li>
                        <span class="delImg" t-index="${i}">
                            <a href="javascript:;">
                                <i class="comiis_font f_g"></i>
                            </a>
                        </span>
                        <span class="charu f_f">${_web}</span>
                        <span class="p_img">
                            <a href="javascript:;" onclick="comiis_addsmilies('[img]${_url}[/img]')">
                                <img style="height:54px;width:54px;" 
																title="${_name}" 
																data-src="${_thumb_url}" 
																loading="lazy"
																class="vm b_ok"></a>
                        </span>
                        <input type="hidden" name="${_name}">
                    </li>
                    `;
          $jq("#imglist_history").append($jq(_imageHTML));
        });

        $jq("#menu_chartbed_history").on("click", function () {
          $jq.each($jq("#imglist_history li img"), (i, v) => {
            if (!v.getAttribute("src")) {
              v.setAttribute("src", v.getAttribute("data-src"));
            }
          });
        });
        $jq("#imglist_history").on("click", ".delImg", async (e) => {
          e.preventDefault();
          let _t_index = e.currentTarget.getAttribute("t-index");
          let imageItem = historyImages[_t_index];
          let web = imageItem["web"];
          let id_encoded = imageItem["id_encoded"];
          e.currentTarget.parentElement.remove();
          mobile.chartBed.storage.delete(web, id_encoded);
        });
      }
      let imgBtn = `<a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"></i></a>`;
      let menu = `<div class="comiis_minibq bg_f cl" style="display: none;"><div class="imgboxlist"></div><div class="bqbox_t bg_e cl"><ul id="comiis_img_chartbed_key"></ul></div></div>`;
      $jq(".styli_tit.comiis_post_ico.f_c.cl").append($jq(imgBtn));
      $jq("#comiis_post_tab").append($jq(menu));

      let imgUploadBtn = `
            <div class="comiis_upbox kggzschartbed" style="">
                <ul id="imglist_kggzs" class="comiis_post_imglist cl">
                    <li class="up_btn_kggzs">
                        <a href="javascript:;" class="bg_e b_ok f_d">
                            <i class="comiis_font"></i>
                        </a>
                        <input type="file" name="Filedata" id="filedata_kggzs" accept="image/*"">
                    </li>				
                </ul>
            </div>
            <div class="comiis_upbox hellochartbed" style="display:none;">
                <ul id="imglist_hello" class="comiis_post_imglist cl">
                    <li class="up_btn_hello">
                        <a href="javascript:;" class="bg_e b_ok f_d">
                            <i class="comiis_font"></i>
                        </a>
                        <input type="file" name="Filedata" id="filedata_hello" accept="image/*"">
                    </li>				
                </ul>
            </div>
            <div class="comiis_upbox z4achartbed" style="display:none;">
                <ul id="imglist_z4a" class="comiis_post_imglist cl">
                    <li class="up_btn_z4a">
                        <a href="javascript:;" class="bg_e b_ok f_d">
                            <i class="comiis_font"></i>
                        </a>
                        <input type="file" name="Filedata" id="filedata_z4a" accept="image/*"">
                    </li>				
                </ul>
            </div>
            <div class="comiis_upbox chartbedhistory" style="display:none;">
                <ul id="imglist_history" class="comiis_post_imglist cl">
                
                </ul>
            </div>
            `;
      let imgMenu = `
            <li class="bg_f"><a href="javascript:;" id="menu_kggzs" class="">康哥图床</a></li>
            <li><a href="javascript:;" id="menu_hello" class="">hello图床</a></li>
            <li><a href="javascript:;" id="menu_z4a" class="">z4a图床</a></li>
            <li><a href="javascript:;" id="menu_chartbed_history" class="">历史图片</a></li>
            `;
      $jq("#comiis_img_chartbed_key").append($jq(imgMenu));
      $jq(".comiis_minibq .imgboxlist").append($jq(imgUploadBtn));

      $jq("#comiis_img_chartbed_key li").on("click", function () {
        $jq("#comiis_img_chartbed_key li").removeClass("bg_f");
        $jq(this).addClass("bg_f");
        $jq("#comiis_post_tab .imgboxlist .comiis_upbox")
          .hide()
          .eq($jq(this).index())
          .fadeIn();
      });

      if (GM_getValue("chartBedsImagesHistory") == undefined) {
        GM_setValue("chartBedsImagesHistory", []);
      }
      Utils.tryCatch().run(chatKGChartBed);
      Utils.tryCatch().run(chatHelloChartBed);
      Utils.tryCatch().run(chatZ4AChartBed);
      Utils.tryCatch().run(chatHistoryChartBedImages);
    },
    /**
     * 帖子快照
     */
    customCollection() {
      if (
        !MT_CONFIG.methodRunCheck(
          [MT_CONFIG.urlRegexp.bbs, MT_CONFIG.urlRegexp.forumPost],
          "v54"
        )
      ) {
        return;
      }
      const urlBBSMatchStatus = window.location.href.match(
        MT_CONFIG.urlRegexp.bbs
      );
      const forumPostMatchStatus = window.location.href.match(
        MT_CONFIG.urlRegexp.forumPost
      );
      const collectTime = Date.now();
      const DB_NAME = "mt_db",
        DB_STORE_NAME = "custom_collection",
        DB_STORE_KEY_NAME =
          "forum_post_" +
          Utils.getFormatTime("yyyy_MM_dd_HH_mm_ss", collectTime);
      var db = new Utils.indexedDB(DB_NAME, DB_STORE_NAME);

      async function showView() {
        /* 显示-快照列表(dialog) */
        $jq.NZ_MsgBox.alert({
          title: "快照",
          content: "<center>获取中...</center>",
          type: "",
          location: "center",
          buttons: {
            confirm: {
              text: "确定",
            },
          },
        });
        var matchRegexp = new RegExp("forum_post_", "gi");
        db.regexpGet(matchRegexp).then((resolve) => {
          if (resolve["code"] !== 200) {
            popup2.toast({
              text: resolve["msg"],
            });
            return;
          }
          var customCollectionData = resolve["data"];
          if (customCollectionData.length) {
            console.log(customCollectionData);
            customCollectionData.sort(
              Utils.sortListByProperty((item) => {
                return item["timestamp"];
              }, true)
            );
            console.log("排序后——快照：", customCollectionData);
            $jq(".msgcon").html("");
            $jq(".msgcon").append(
              '<table id="misign_list" style="overflow: auto;margin: 15px 0px;width: 100%;"><table>'
            );
            var customTableTdWidth = $jq(".msgcon").width()
              ? $jq(".msgcon").width() - 50
              : 240;
            customCollectionData.forEach((item, index) => {
              var itemElement = $jq(`
              <tbody id="autolist">
                <tr>
                    <td style="width: 100%;">
                        <div style="display: inline-flex;">
                            <div style="min-width: ${customTableTdWidth}px;">
                              <p style="margin-bottom: 15px;">网址：<a href="javascript:void(0)" t-blank style="color: #ff1e6f;">${item["title"]}</a></p>
                              <p style="margin-bottom: 15px;">类型：
                                <a href="javascript:void(0)" t-blank style="height: 28px;line-height: 28px;display: inline-block;font-size: 16px;padding: 0 12px;box-sizing: border-box;background: #F1F2F3;border-radius: 6px;font-weight: 400;color: #00AEEC;fill: #00AEEC;">
                                  ${item["type"]}
                                </a>
                              </p>
                              <p>快照：<a href="javascript:void(0)" t-dialog style="color: #1e90ff;">${item["time"]}</a></p>
                            </div>
                            <div style="align-self: center;margin-left: 10px;" class="delsubjecttip">
                                <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr style="height:35px;"></tr>
              </tbody>`);
              itemElement.find("a[t-blank]").on("click", function () {
                window.open(item["url"], "_blank");
              });
              itemElement.find("a[t-dialog]").on("click", function () {
                if (item["type"] === "html") {
                  var pageBlob = new Blob([item["data"]], {
                    type: "text/html",
                  });
                  xtip.open({
                    type: "html",
                    width: document.documentElement.clientWidth + "px",
                    height: document.documentElement.clientHeight + "px",
                    content: `<iframe src="${window.URL.createObjectURL(
                      pageBlob
                    )}" style="width:100%;height: 100%;overflow: hidden;"></iframe>`,
                    title: "查看帖子快照",
                    lock: false,
                    zindex:
                      parseInt($jq(".NZ-MsgBox-alert").css("z-index")) + 100,
                  });
                } else {
                  xtip.open({
                    type: "html",
                    width: document.documentElement.clientWidth + "px",
                    height: document.documentElement.clientHeight + "px",
                    content: `<img src="${item["data"]}" style="width:100%;" loading="lazy"></img>`,
                    title: "查看帖子快照",
                    lock: false,
                    zindex:
                      parseInt($jq(".NZ-MsgBox-alert").css("z-index")) + 100,
                  });
                }
              });
              itemElement.find(".delsubjecttip").on("click", function () {
                var _this = this;
                popup2.confirm({
                  text: "<p>确定删除该快照？</p>",
                  mask: true,
                  ok: {
                    callback: () => {
                      console.log("删除：", item["key"]);
                      db.delete(item["key"]).then(
                        (resolve) => {
                          if (resolve["code"] !== 200) {
                            popup2.toast({
                              text: resolve["msg"],
                            });
                            popup2.closeConfirm();
                            return;
                          }
                          customCollectionData.forEach((_item_, _index_) => {
                            if (_item_["key"] === item["key"]) {
                              customCollectionData.splice(_index_, 1);
                            }
                          });
                          console.log("移出后：", customCollectionData);
                          popup2.toast({
                            text: "删除成功",
                          });
                          Utils.deleteParentNode(_this, (dom) => {
                            return dom.id === "autolist" ? true : false;
                          });
                          popup2.closeConfirm();
                        },
                        (err) => {
                          console.log(err);
                          popup2.closeConfirm();
                          popup2.toast({
                            text: "删除失败，原因请看控制台",
                          });
                        }
                      );
                    },
                  },
                  only: true,
                });
              });
              $jq(".msgcon").css("height", "400px");
              $jq(".msgcon #misign_list").append(itemElement);
            });
          } else {
            $jq(".msgcon").html("<center>暂无快照</center>");
          }
        }),
          (err) => {
            console.log(err);
          };
      }
      function insertLeftButton() {
        /* 插入左边按钮 */
        var collectLeftBtnElement = $jq(`
        <li class="comiis_left_Touch">
          <a href="javascript:;" class="customcollectlist">
            <div class="styli_tit f_c">
                <i class="comiis_font" style="color: #007ac0;"></i>
            </div>
            <div class="flex">查看快照</div>
          </a>
        </li>
        `);
        collectLeftBtnElement.find("a").on("click", function () {
          showView();
        });
        $jq(".comiis_sidenv_box .sidenv_li .comiis_left_Touch.bdew").append(
          collectLeftBtnElement
        );
      }
      function insertTopButton() {
        /* 插入帖子内部快照按钮 */
        var collectPageBtnElement = $jq(
          `
          <li class="swiper-slide kmshoucang">
            <a href="javascript:;">
              <span class="kmico bg_f f_c">
                <i class="comiis_font"></i>
              </span>
              <em class="f_b">快照</em>
            </a>
          </li>`
        );
        collectPageBtnElement.find("a").on("click", function () {
          $jq(".comiis_share_box_close")?.click();
          xtip.sheet({
            btn: ["快照为图片", "快照为源码"],
            btn1: function () {
              popup2.showLoadingMask();
              popup2.toast({
                text: "正在处理网页转图片中",
              });
              var pageHTML = document.documentElement;
              var html2canvasOptions = {
                allowTaint: true,
                logging: true,
                useCORS: true,
                ignoreElements: (element) => {
                  /*遍历每个节点*/
                  if (
                    element.id ===
                      "comiis_bgbox" /* 点击右上角三个按钮的背景遮罩层 */ ||
                    element.id ===
                      "comiis_foot_more" /* 点击右上角三个按钮后出现的菜单栏 */ ||
                    element.id === "force-mask" /* popup2的遮罩层 */ ||
                    element.className === "popup2-toast" /* toast弹窗 */ ||
                    element.id ===
                      "comiis_foot_menu_beautify" /* 底部回复框 */ ||
                    element.id === "comiis_head" /* 顶部一栏 */ ||
                    element.className.indexOf("xtiper_win_fixed ") != -1
                  )
                    return true;
                },
              };
              html2canvas(pageHTML, html2canvasOptions).then((canvas) => {
                var base64Image = canvas.toDataURL("image/png");
                popup2.toast({
                  text: "转换完毕，正在保存数据",
                });
                var data = {
                  type: "image",
                  url: window.location.href,
                  title: document.title.replace(" - MT论坛", ""),
                  data: base64Image,
                  time: Utils.getFormatTime("yyyy-MM-dd HH:mm:ss", collectTime),
                  timestamp: collectTime,
                };
                db.save(DB_STORE_KEY_NAME, data).then((resolve) => {
                  console.log(resolve);
                  if (resolve["code"] !== 200) {
                    console.log(resolve);
                    popup2.closeMask();
                    popup2.toast({
                      text: resolve["msg"],
                    });
                    return;
                  }
                  popup2.closeMask();
                  popup2.toast({
                    text: "保存成功",
                  });
                }),
                  (err) => {
                    console.log(err);
                    popup2.closeMask();
                    popup2.toast({
                      text: "保存数据失败",
                    });
                  };
              });
            },
            btn2: function () {
              popup2.showLoadingMask();
              popup2.toast({
                text: "正在保存数据中",
              });
              var jqHTML = $jq("html");
              jqHTML.find("#force-mask")?.remove();
              jqHTML.find(".xtiper_win_fixed")?.remove();
              jqHTML.css("overflow", "auto");
              var pageHTML = jqHTML.prop("outerHTML");
              var data = {
                type: "html",
                url: window.location.href,
                title: document.title.replace(" - MT论坛", ""),
                data: pageHTML,
                time: Utils.getFormatTime("yyyy-MM-dd HH:mm:ss", collectTime),
                timestamp: collectTime,
              };
              db.save(DB_STORE_KEY_NAME, data).then((resolve) => {
                console.log(resolve);
                if (resolve["code"] !== 200) {
                  console.log(resolve);
                  popup2.closeMask();
                  popup2.toast({
                    text: resolve["msg"],
                  });
                  return;
                }
                popup2.closeMask();
                popup2.toast({
                  text: "保存成功",
                });
              }),
                (err) => {
                  console.log(err);
                  popup2.closeMask();
                  popup2.toast({
                    text: "保存数据失败",
                  });
                };
            },
          });
        });

        $jq("#comiis_foot_gobtn .comiis_shareul.swiper-wrapper").append(
          collectPageBtnElement
        );
      }
      if (urlBBSMatchStatus) {
        console.log("插入查看快照按钮");
        insertLeftButton();
      }
      if (forumPostMatchStatus) {
        insertTopButton();
      }
    },
    /**
     * 编辑器的图床
     */
    editorChartBed() {
      /**
       * 论坛图床-修复点击上传和点击插入功能
       */
      function chartbedByBBSMT() {
        GM_addStyle(
          `
            #imglist .p_img a{
                float: left;
                height: 36px;
            }
            #imglist .del a{
                padding: 0;
            }  
          `
        );
        $jq("#imglist .up_btn").append($jq("#filedata"));
        $jq(document).on("click", "#imglist .up_btn a", function (e) {
          $jq(this).next().click();
        });
        $jq(document).on("click", "#imglist .p_img a", function (e) {
          let obj = $jq(this);
          if (obj.attr("onclick") == null) {
            let img_id = obj.find("img").attr("id").replace("aimg_", "");
            comiis_addsmilies(`[attachimg]${img_id}[/attachimg]`);
          }
        });
      }

      function chartbedByKggzs() {
        /* 编辑器图片上传 康哥图床 */
        GM_addStyle(
          `
            #imglist_kggzs .delImg{
                position: absolute;
                top: -5px;
                left: -5px;
            }
        `
        );
        let chartBedUrl = "https://img.kggzs.cn/api/v1";
        let chartBedUser = GM_getValue("KggzsChartBedUser");
        let chartBedPwd = GM_getValue("KggzsChartBedPwd");
        let chartBedToken = null;
        let code = {
          401: "未登录或授权失败",
          403: "管理员关闭了接口功能",
          429: "超出请求配额，请求受限",
          500: "服务端出现异常",
        };

        function getToken() {
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: `${chartBedUrl}/tokens`,
              method: "POST",
              timeout: 5000,
              data: `email=${chartBedUser}&password=${chartBedPwd}`,
              headers: {
                Accept: "application/json",
                "User-Agent": Utils.getRandomPCUA(),
                "Content-Type": "application/x-www-form-urlencoded",
              },
              onload: (response) => {
                if (code[response.status] != null) {
                  popup2.toast(code[response.status]);
                  resolve(null);
                  return;
                }
                let json_data = JSON.parse(response.responseText);
                if (json_data["status"]) {
                  popup2.toast("token成功获取");
                  resolve(json_data["data"]["token"]);
                } else {
                  popup2.toast(json_data["message"]);
                  resolve(null);
                }
              },
              onerror: () => {
                popup2.toast("网络异常");
                resolve(null);
              },
              ontimeout: () => {
                popup2.toast("请求超时");
                resolve(null);
              },
            });
          });
        }

        function uploadImage(imageFile) {
          let res_data = {
            imageUri: null,
            json_data: null,
          };
          let form = new FormData();
          form.append("strategy_id", 2); /* 存储策略 */
          form.append("file", imageFile);
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: `${chartBedUrl}/upload`,
              method: "POST",
              data: form,
              async: false,
              responseType: "json",
              headers: {
                Accept: "application/json",
                "User-Agent": Utils.getRandomPCUA(),
                Authorization: `Bearer ${chartBedToken}`,
              },
              onload: (response) => {
                if (code[response.status] != null) {
                  popup2.toast(code[response.status]);
                  resolve(res_data);
                  return;
                }
                if (response.responseText.match("502 Bad Gateway")) {
                  popup2.toast("获取返回结果502失败");
                  resolve(res_data);
                  return;
                }
                let json_data = JSON.parse(response.responseText);
                console.log(json_data);

                if (json_data["status"]) {
                  popup2.toast("上传成功");
                  let file_reader = new FileReader();
                  /* FileReader主要用于将文件内容读入内存，通过一系列异步接口，可以在主线程中访问本地文件 */
                  file_reader.readAsDataURL(
                    imageFile
                  ); /* 读取图片的内容生成的base64编码的图 */
                  /* 读取完成后，执行该回调函数，它会返回读取的结果result		 */
                  file_reader.onload = function () {
                    let imageUri =
                      this.result; /* 此时的图片已经存储到了result中	 */
                    res_data["imageUri"] = imageUri;
                    res_data["json_data"] = json_data;
                    resolve(res_data);
                  };
                } else {
                  console.log(json_data);
                  popup2.toast(json_data["message"]);
                  resolve(res_data);
                }
              },
              onerror: () => {
                popup2.toast("网络异常");
                resolve(res_data);
              },
            });
          });
        }

        function deleteImage(imageKey) {
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: `${chartBedUrl}/images/:${imageKey}`,
              method: "DELETE",
              async: false,
              timeout: 5000,
              data: JSON.stringify({
                key: "",
              }),
              responseType: "json",
              headers: {
                Accept: "application/json",
                "User-Agent": Utils.getRandomPCUA(),
                Authorization: `Bearer ${chartBedToken}`,
              },
              onload: (response) => {
                if (code[response.status] != null) {
                  popup2.toast(code[response.status]);
                  resolve(res_data);
                  return;
                }
                let json_data = JSON.parse(response.responseText);
                console.log(json_data);
              },
              onerror: () => {
                popup2.toast("网络异常");
                resolve(res_data);
              },
              ontimeout: () => {
                popup2.toast("请求超时");
                resolve(res_data);
              },
            });
          });
        }

        function clearData() {
          chartBedUser = "";
          chartBedPwd = "";
          chartBedToken = null;

          GM_deleteValue("KggzsChartBedUser");
          GM_deleteValue("KggzsChartBedPwd");
        }

        function checkLogin() {
          return new Promise(async (resolve) => {
            if (!chartBedUser || !chartBedPwd) {
              let loginCallBack = () => {
                let user = $jq("#chartbed_user").val().trim();
                let pwd = $jq("#chartbed_pwd").val().trim();
                if (user && pwd) {
                  GM_setValue("KggzsChartBedUser", user);
                  GM_setValue("KggzsChartBedPwd", pwd);
                  chartBedUser = user;
                  chartBedPwd = pwd;
                  popup2.closeConfirm();
                  checkLogin().then((status) => {
                    resolve(status);
                  });
                } else {
                  popup2.toast("账号或密码不能为空");
                }
              };
              mobile.chartBed.popupUserPwd(
                "康哥图床",
                "https://img.kggzs.cn/register",
                loginCallBack
              );
            } else if (chartBedToken == null) {
              popup2.showLoadingMask();
              popup2.toast("正在配置token");
              chartBedToken = await getToken();
              popup2.closeMask();
              console.log("token:" + chartBedToken);
              if (chartBedToken != null) {
                resolve(true);
              } else {
                clearData();
                resolve(false);
              }
            } else {
              resolve(true);
            }
          });
        }
        $jq(document).on(
          "click",
          "#imglist_kggzs .up_btn a",
          async function () {
            $jq("#filedata_kggzs").val("");
            $jq("#filedata_kggzs").click();
          }
        );
        $jq(document).on("change", "#filedata_kggzs", async (e) => {
          let chooseImageFiles = e.currentTarget.files;
          if (chooseImageFiles.length == 0) {
            return;
          }

          let needUploadImageArray = [];
          let needUploadImageFileArray = [];

          let uploadFileAwaitFunction = async (params) => {
            let imageFile = chooseImageFiles[params[0]];
            let uploadImageReturn = await uploadImage(imageFile);
            if (uploadImageReturn["json_data"] != null) {
              console.log(uploadImageReturn);
              let image_id_encoded =
                uploadImageReturn["json_data"]["data"]["key"];
              let image_url =
                uploadImageReturn["json_data"]["data"]["links"]["url"];
              let image_thumb_url =
                uploadImageReturn["json_data"]["data"]["links"][
                  "thumbnail_url"
                ];
              let image_name =
                uploadImageReturn["json_data"]["data"]["origin_name"];
              let image_uri = uploadImageReturn["imageUri"];
              let uploadImageHTML = `<li>
                                        <span class="delImg" id-encode="${image_id_encoded}">
                                            <a href="javascript:;">
                                                <i class="comiis_font f_g"></i>
                                            </a>
                                        </span>
                                        <span class="charu f_f">插入</span>
                                        <span class="p_img">
                                            <a href="javascript:;" onclick="comiis_addsmilies('[img]${image_url}[/img]')">
                                                <img style="height:54px;width:54px;" 
																								title="${image_name}" 
																								src="${image_uri}" 
																								loading="lazy"
																								class="vm b_ok"></a>
                                        </span>
                                        <input type="hidden" name="">
                                    </li>`;
              $jq("#imglist_kggzs").append($jq(uploadImageHTML));
              mobile.chartBed.storage.add(
                "kggzs",
                image_id_encoded,
                image_url,
                image_thumb_url,
                image_name
              );
            }
          };
          let completeFunction = () => {
            popup2.closeMask();
            $jq("#filedata_kggzs").val("");
          };

          let waterMarkAwaitFunction = async () => {
            popup2.showLoadingMask();
            Promise.all(
              Array.from(chooseImageFiles).map(async (item, index) => {
                if (item.type === "image/gif") {
                  /* 不支持对GIF添加水印 */
                  let image_base64 = await Utils.asyncFileToBase64(item);
                  needUploadImageArray =
                    needUploadImageArray.concat(image_base64);
                  needUploadImageFileArray =
                    needUploadImageFileArray.concat(item);
                } else {
                  popup2.toast(
                    `添加水印 ${index + 1}/${chooseImageFiles.length}`
                  );
                  var watermark = new Watermark();
                  await watermark.setFile(item);
                  watermark.addText({
                    text: [GM_getValue("chartBedWaterMarkText", "MT论坛")],
                    fontSize: GM_getValue("chartBedWaterMarkFontSize"),
                    color: GM_getValue("chartBedWaterMarkFontColor"),
                    globalAlpha: GM_getValue("chartBedWaterGlobalAlpha"),
                    rotateAngle: GM_getValue("chartBedWaterMarkRotationAngle"),
                    xMoveDistance: GM_getValue("chartBedWaterXMoveDistance"),
                    yMoveDistance: GM_getValue("chartBedWaterYMoveDistance"),
                  });
                  needUploadImageArray = needUploadImageArray.concat(
                    watermark.render("png")
                  );
                  needUploadImageFileArray = needUploadImageFileArray.concat(
                    Utils.base64ToFile(
                      watermark.render("png"),
                      "WaterMark_" + item.name
                    )
                  );
                }
              })
            ).then(async () => {
              chooseImageFiles = needUploadImageFileArray;
              popup2.closeMask();
              if (GM_getValue("chartBedWaterMarkAutoDefault")) {
                checkLogin().then((loginStatus) => {
                  if (!loginStatus) {
                    return;
                  }
                  popup2.showLoadingMask();
                  popup2.toast("上传水印图片中...请稍后");

                  console.log(`图片数量:${needUploadImageFileArray.length}`);
                  Utils.asyncArrayForEach(
                    needUploadImageFileArray,
                    uploadFileAwaitFunction
                  ).then(() => {
                    Utils.tryCatch().run(completeFunction);
                  });
                  return null;
                });
              } else {
                let renderHTML = "";
                Array.from(needUploadImageArray).forEach((item) => {
                  renderHTML =
                    renderHTML +
                    '<img src="' +
                    item +
                    '" crossoriginNew="anonymous" loading="lazy">';
                });
                popup2.confirm({
                  text: `<style>
                                  .dialogbox.popup2-popmenu {
                                      width: 80vw;
                                      height: 55vh;
                                  }
                                  #popup2-confirm,
                                  #popup2-confirm .comiis_tip.bg_f{ 
                                      width: inherit;
                                      height: inherit;
                                  }
                                  #popup2-confirm .comiis_tip.bg_f dt.f_b{
                                      height: calc(100% - 115px);
                                  }
                                  .upload-image-water{
                                      height: 100%;
                                  }
                                  </style><div class="upload-image-water">${renderHTML}<div>`,
                  mask: true,
                  only: true,
                  ok: {
                    text: "继续上传",
                    callback: async () => {
                      popup2.closeConfirm();
                      checkLogin().then((loginStatus) => {
                        if (!loginStatus) {
                          return;
                        }
                        popup2.showLoadingMask();
                        popup2.toast("上传水印图片中...请稍后");

                        console.log(
                          `图片数量:${needUploadImageFileArray.length}`
                        );
                        Utils.asyncArrayForEach(
                          needUploadImageFileArray,
                          uploadFileAwaitFunction
                        ).then(() => {
                          Utils.tryCatch().run(completeFunction);
                        });
                      });
                    },
                  },
                  other: {
                    enable: true,
                    text: "保存至本地",
                    callback: () => {
                      Array.from(needUploadImageFileArray).forEach(
                        async (item, index) => {
                          let base64Image = await Utils.asyncFileToBase64(item);
                          Utils.downloadBase64(item.name, base64Image);
                        }
                      );
                    },
                  },
                });
              }
            });
          };
          if (GM_getValue("chartBedAddWaterMark")) {
            Utils.tryCatch().run(waterMarkAwaitFunction);
          } else {
            checkLogin().then((loginStatus) => {
              if (!loginStatus) {
                return;
              }
              popup2.showLoadingMask();
              popup2.toast("上传图片中...请稍后");

              console.log(`图片数量:${chooseImageFiles.length}`);
              Utils.asyncArrayForEach(
                chooseImageFiles,
                uploadFileAwaitFunction
              ).then(() => {
                Utils.tryCatch().run(completeFunction);
              });
            });
          }
        });
        $jq(document).on("click", "#imglist_kggzs .delImg", async (e) => {
          e.preventDefault();
          e.currentTarget.parentElement.remove();
          /* popup2.toast('删除中，请稍后');
                    let id_encoded = e.currentTarget.getAttribute("id-encode");
                    if(!id_encoded){
                        popup2.toast('获取id_encoded失败，请自行去Hello图床删除');
                        return;
                    }
                    let deleteStatus = await deleteImage(key);
                    if(deleteStatus){
                        e.currentTarget.parentElement.remove();
                        mobile.chartBed.storage.delete("kggzs",id_encoded);
                    } */
        });
      }

      function chartbedByHello() {
        /* 编辑器图片上传Hello图床 */
        GM_addStyle(`
                    #imglist_hello .delImg{
                        position: absolute;
                        top: -5px;
                        left: -5px;
                    }
                    `);
        let chartBedUrl = "https://www.helloimg.com";
        let chartBedUser = GM_getValue("HelloChartBedUser");
        let chartBedPwd = GM_getValue("HelloChartBedPwd");
        let chartBedAuthToken = null;
        let loginStatus = false; /* 登录状态 */

        let clearData = () => {
          GM_deleteValue("HelloChartBedUser");
          GM_deleteValue("HelloChartBedPwd");
          loginStatus = false;
          chartBedUser = "";
          chartBedPwd = "";
          chartBedAuthToken = null;
        };

        function checkLogin() {
          return new Promise(async (resolve) => {
            if (!chartBedUser || !chartBedPwd) {
              let loginCallBack = () => {
                let user = $jq("#chartbed_user").val().trim();
                let pwd = $jq("#chartbed_pwd").val().trim();
                if (user && pwd) {
                  GM_setValue("HelloChartBedUser", user);
                  GM_setValue("HelloChartBedPwd", pwd);
                  chartBedUser = user;
                  chartBedPwd = pwd;
                  popup2.closeConfirm();
                  checkLogin().then((status) => {
                    resolve(status);
                  });
                } else {
                  popup2.toast("账号或密码不能为空");
                }
              };
              mobile.chartBed.popupUserPwd(
                "Hello图床",
                "https://www.helloimg.com/signup",
                loginCallBack
              );
            } else if (chartBedAuthToken == null && !loginStatus) {
              popup2.showLoadingMask();
              popup2.toast("正在配置auth_token");
              chartBedAuthToken = await mobile.chartBed.getAuthToken(
                chartBedUrl
              );
              console.log("auth_token:", chartBedAuthToken);
              if (chartBedAuthToken != null) {
                popup2.toast("正在登录Hello图床");
                let retloginStatus = await mobile.chartBed.login(
                  chartBedUrl,
                  chartBedUser,
                  chartBedPwd,
                  chartBedAuthToken
                );
                popup2.closeMask();
                if (retloginStatus) {
                  loginStatus = true;
                  resolve(true);
                  return;
                } else {
                  clearData();
                  resolve(false);
                  return;
                }
              }
              popup2.closeMask();
              resolve(false);
            } else {
              resolve(true);
            }
          });
        }
        $jq(document).on(
          "click",
          "#imglist_hello .up_btn a",
          async function () {
            $jq("#filedata_hello").val("");
            $jq("#filedata_hello").click();
          }
        );
        $jq(document).on("change", "#filedata_hello", async (e) => {
          let chooseImageFiles = e.currentTarget.files;
          if (chooseImageFiles.length == 0) {
            return;
          }
          let needUploadImageArray = [];
          let needUploadImageFileArray = [];

          let uploadFileAwaitFunction = async (params) => {
            let imageFile = chooseImageFiles[params[0]];
            let uploadImageReturn = await mobile.chartBed.uploadImage(
              chartBedUrl,
              chartBedAuthToken,
              imageFile
            );
            if (uploadImageReturn["json_data"] != null) {
              let image_id_encoded =
                uploadImageReturn["json_data"]["image"]["id_encoded"];
              let image_url = uploadImageReturn["json_data"]["image"]["url"];
              let image_thumb_url =
                uploadImageReturn["json_data"]["image"]["thumb"]["url"];
              let image_name =
                uploadImageReturn["json_data"]["image"]["filename"];
              let image_uri = uploadImageReturn["imageUri"];
              let uploadImageHTML = `<li>
                                            <span class="delImg" id-encode="${image_id_encoded}">
                                                <a href="javascript:;">
                                                    <i class="comiis_font f_g"></i>
                                                </a>
                                            </span>
                                            <span class="charu f_f">插入</span>
                                            <span class="p_img">
                                                <a href="javascript:;" onclick="comiis_addsmilies('[img]${image_url}[/img]')">
                                                    <img style="height:54px;width:54px;" 
																										title="${image_name}" 
																										src="${image_uri}" 
																										loading="lazy"
																										class="vm b_ok"></a>
                                            </span>
                                            <input type="hidden" name="">
                                        </li>`;
              $jq("#imglist_hello").append($jq(uploadImageHTML));
              mobile.chartBed.storage.add(
                "hello",
                image_id_encoded,
                image_url,
                image_thumb_url,
                image_name
              );
            }
          };
          let completeFunction = () => {
            popup2.closeMask();
            $jq("#filedata_hello").val("");
          };

          let waterMarkAwaitFunction = async () => {
            popup2.showLoadingMask();
            Promise.all(
              Array.from(chooseImageFiles).map(async (item, index) => {
                if (item.type === "image/gif") {
                  /* 不支持对GIF添加水印 */
                  let image_base64 = await Utils.asyncFileToBase64(item);
                  needUploadImageArray =
                    needUploadImageArray.concat(image_base64);
                  needUploadImageFileArray =
                    needUploadImageFileArray.concat(item);
                } else {
                  popup2.toast(
                    `添加水印 ${index + 1}/${chooseImageFiles.length}`
                  );
                  var watermark = new Watermark();
                  await watermark.setFile(item);
                  watermark.addText({
                    text: [GM_getValue("chartBedWaterMarkText", "MT论坛")],
                    fontSize: GM_getValue("chartBedWaterMarkFontSize"),
                    color: GM_getValue("chartBedWaterMarkFontColor"),
                    globalAlpha: GM_getValue("chartBedWaterGlobalAlpha"),
                    rotateAngle: GM_getValue("chartBedWaterMarkRotationAngle"),
                    xMoveDistance: GM_getValue("chartBedWaterXMoveDistance"),
                    yMoveDistance: GM_getValue("chartBedWaterYMoveDistance"),
                  });
                  needUploadImageArray = needUploadImageArray.concat(
                    watermark.render("png")
                  );
                  needUploadImageFileArray = needUploadImageFileArray.concat(
                    Utils.base64ToFile(
                      watermark.render("png"),
                      "WaterMark_" + item.name
                    )
                  );
                }
              })
            ).then(async () => {
              chooseImageFiles = needUploadImageFileArray;
              popup2.closeMask();
              if (GM_getValue("chartBedWaterMarkAutoDefault", false)) {
                checkLogin().then((loginStatus) => {
                  if (!loginStatus) {
                    return;
                  }
                  popup2.showLoadingMask();
                  popup2.toast("上传水印图片中...请稍后");

                  console.log(`图片数量:${needUploadImageFileArray.length}`);
                  Utils.asyncArrayForEach(
                    needUploadImageFileArray,
                    uploadFileAwaitFunction
                  ).then(() => {
                    Utils.tryCatch().run(completeFunction);
                  });
                });
              } else {
                let renderHTML = "";
                Array.from(needUploadImageArray).forEach((item) => {
                  renderHTML =
                    renderHTML +
                    '<img src="' +
                    item +
                    '" crossoriginNew="anonymous" loading="lazy">';
                });
                popup2.confirm({
                  text: `<style>
                                  .dialogbox.popup2-popmenu {
                                      width: 80vw;
                                      height: 55vh;
                                  }
                                  #popup2-confirm,
                                  #popup2-confirm .comiis_tip.bg_f{ 
                                      width: inherit;
                                      height: inherit;
                                  }
                                  #popup2-confirm .comiis_tip.bg_f dt.f_b{
                                      height: calc(100% - 115px);
                                  }
                                  .upload-image-water{
                                      height: 100%;
                                  }
                                  </style><div class="upload-image-water">${renderHTML}<div>`,
                  mask: true,
                  only: true,
                  ok: {
                    text: "继续上传",
                    callback: async () => {
                      popup2.closeConfirm();
                      checkLogin().then((loginStatus) => {
                        if (loginStatus) {
                          popup2.showLoadingMask();
                          popup2.toast("上传水印图片中...请稍后");

                          console.log(
                            `图片数量:${needUploadImageFileArray.length}`
                          );
                          Utils.asyncArrayForEach(
                            needUploadImageFileArray,
                            uploadFileAwaitFunction
                          ).then(() => {
                            Utils.tryCatch().run(completeFunction);
                          });
                        } else {
                          console.log("登录失败");
                        }
                      });
                    },
                  },
                  other: {
                    enable: true,
                    text: "保存至本地",
                    callback: () => {
                      Array.from(needUploadImageFileArray).forEach(
                        async (item, index) => {
                          let base64Image = await Utils.asyncFileToBase64(item);
                          Utils.downloadBase64(item.name, base64Image);
                        }
                      );
                    },
                  },
                });
              }
            });
          };
          if (GM_getValue("chartBedAddWaterMark", false)) {
            Utils.tryCatch().run(waterMarkAwaitFunction);
          } else {
            checkLogin().then((loginStatus) => {
              if (!loginStatus) {
                return;
              }
              popup2.showLoadingMask();
              popup2.toast("上传图片中...请稍后");

              console.log(`图片数量:${chooseImageFiles.length}`);
              Utils.asyncArrayForEach(
                chooseImageFiles,
                uploadFileAwaitFunction
              ).then(() => {
                Utils.tryCatch().run(completeFunction);
              });
            });
          }
        });
        $jq(document).on("click", "#imglist_hello .delImg", async function (e) {
          e.preventDefault();
          popup2.showLoadingMask();
          popup2.toast("删除中，请稍后");
          let id_encoded = e.currentTarget.getAttribute("id-encode");
          if (!id_encoded) {
            popup2.closeMask();
            popup2.toast("获取id_encoded失败，请自行去Hello图床删除");
            return;
          }
          let deleteStatus = await mobile.chartBed.deleteImage(
            chartBedUrl,
            chartBedAuthToken,
            id_encoded
          );
          popup2.closeMask();
          if (deleteStatus) {
            $jq(this).parent().remove();
            mobile.chartBed.storage.delete("hello", id_encoded);
          }
        });
      }

      function chartbedByZ4a() {
        /* 编辑器图片上传z4a图床 */
        GM_addStyle(`
                    #imglist_z4a .delImg{
                        position: absolute;
                        top: -5px;
                        left: -5px;
                    }
                    `);
        let chartBedUrl = "https://www.z4a.net";
        let chartBedUser = GM_getValue("Z4AChartBedUser");
        let chartBedPwd = GM_getValue("Z4AChartBedPwd");
        let chartBedAuthToken = null;
        let loginStatus = false; /* 登录状态 */
        let clearData = () => {
          GM_deleteValue("Z4AChartBedUser");
          GM_deleteValue("Z4AChartBedPwd");
          loginStatus = false;
          chartBedUser = "";
          chartBedPwd = "";
          chartBedAuthToken = null;
        };

        function checkLogin() {
          return new Promise(async (resolve) => {
            if (!chartBedUser || !chartBedPwd) {
              let loginCallBack = () => {
                let user = $jq("#chartbed_user").val().trim();
                let pwd = $jq("#chartbed_pwd").val().trim();
                if (user && pwd) {
                  GM_setValue("Z4AChartBedUser", user);
                  GM_setValue("Z4AChartBedPwd", pwd);
                  chartBedUser = user;
                  chartBedPwd = pwd;
                  popup2.closeConfirm();
                  checkLogin().then((status) => {
                    resolve(status);
                  });
                } else {
                  popup2.toast("账号或密码不能为空");
                }
              };
              mobile.chartBed.popupUserPwd(
                "Z4A图床",
                "https://www.z4a.net/signup",
                loginCallBack
              );
            } else if (chartBedAuthToken == null && !loginStatus) {
              popup2.showLoadingMask();
              popup2.toast("正在配置auth_token");
              chartBedAuthToken = await mobile.chartBed.getAuthToken(
                chartBedUrl
              );
              console.log("auth_token:", chartBedAuthToken);
              if (chartBedAuthToken != null) {
                popup2.toast("正在登录Z4A图床");
                let retloginStatus = await mobile.chartBed.login(
                  chartBedUrl,
                  chartBedUser,
                  chartBedPwd,
                  chartBedAuthToken
                );
                popup2.closeMask();
                if (retloginStatus) {
                  console.log("登录成功");
                  loginStatus = true;
                  resolve(true);
                  return;
                } else {
                  clearData();
                  resolve(false);
                  return;
                }
              }
              popup2.closeMask();
              resolve(false);
            } else {
              resolve(true);
            }
          });
        }
        $jq(document).on("click", "#imglist_z4a .up_btn a", async function (e) {
          $jq("#filedata_z4a").val("");
          $jq("#filedata_z4a").click();
        });
        $jq(document).on("change", "#filedata_z4a", async (e) => {
          let chooseImageFiles = e.currentTarget.files;
          if (chooseImageFiles.length == 0) {
            return;
          }
          let needUploadImageArray = [];
          let needUploadImageFileArray = [];

          let uploadFileAwaitFunction = async (params) => {
            let imageFile = chooseImageFiles[params[0]];
            let uploadImageReturn = await mobile.chartBed.uploadImage(
              chartBedUrl,
              chartBedAuthToken,
              imageFile
            );
            if (uploadImageReturn["json_data"] != null) {
              let image_id_encoded =
                uploadImageReturn["json_data"]["image"]["id_encoded"];
              let image_url = uploadImageReturn["json_data"]["image"]["url"];
              let image_thumb_url =
                uploadImageReturn["json_data"]["image"]["thumb"]["url"];
              let image_name =
                uploadImageReturn["json_data"]["image"]["filename"];
              let image_uri = uploadImageReturn["imageUri"];
              let uploadImageHTML = `<li>
                  <span class="delImg" id-encode="${image_id_encoded}">
                      <a href="javascript:;">
                          <i class="comiis_font f_g"></i>
                      </a>
                  </span>
                  <span class="charu f_f">插入</span>
                  <span class="p_img">
                      <a href="javascript:;" onclick="comiis_addsmilies('[img]${image_url}[/img]')">
                          <img style="height:54px;width:54px;" 
                          title="${image_name}" 
                          src="${image_uri}" 
                          loading="lazy"
                          class="vm b_ok"></a>
                  </span>
                  <input type="hidden" name="">
              </li>`;
              $jq("#imglist_z4a").append($jq(uploadImageHTML));
              mobile.chartBed.storage.add(
                "z4a",
                image_id_encoded,
                image_url,
                image_thumb_url,
                image_name
              );
            }
          };
          let completeFunction = () => {
            popup2.closeMask();
            $jq("#filedata_z4a").val("");
          };
          let waterMarkAwaitFunction = async () => {
            popup2.showLoadingMask();
            Promise.all(
              Array.from(chooseImageFiles).map(async (item, index) => {
                if (item.type === "image/gif") {
                  /* 不支持对GIF添加水印 */
                  let image_base64 = await Utils.asyncFileToBase64(item);
                  needUploadImageArray =
                    needUploadImageArray.concat(image_base64);
                  needUploadImageFileArray =
                    needUploadImageFileArray.concat(item);
                } else {
                  popup2.toast(
                    `添加水印 ${index + 1}/${chooseImageFiles.length}`
                  );
                  var watermark = new Watermark();
                  await watermark.setFile(item);
                  watermark.addText({
                    text: [GM_getValue("chartBedWaterMarkText", "MT论坛")],
                    fontSize: GM_getValue("chartBedWaterMarkFontSize"),
                    color: GM_getValue("chartBedWaterMarkFontColor"),
                    globalAlpha: GM_getValue("chartBedWaterGlobalAlpha"),
                    rotateAngle: GM_getValue("chartBedWaterMarkRotationAngle"),
                    xMoveDistance: GM_getValue("chartBedWaterXMoveDistance"),
                    yMoveDistance: GM_getValue("chartBedWaterYMoveDistance"),
                  });
                  needUploadImageArray = needUploadImageArray.concat(
                    watermark.render("png")
                  );
                  needUploadImageFileArray = needUploadImageFileArray.concat(
                    Utils.base64ToFile(
                      watermark.render("png"),
                      "WaterMark_" + item.name
                    )
                  );
                }
              })
            ).then(async () => {
              chooseImageFiles = needUploadImageFileArray;
              popup2.closeMask();
              if (GM_getValue("chartBedWaterMarkAutoDefault")) {
                checkLogin().then((loginStatus) => {
                  if (!loginStatus) {
                    return;
                  }
                  popup2.showLoadingMask();
                  popup2.toast("上传水印图片中...请稍后");

                  console.log(`图片数量:${needUploadImageFileArray.length}`);
                  Utils.asyncArrayForEach(
                    needUploadImageFileArray,
                    uploadFileAwaitFunction
                  ).then(() => {
                    Utils.tryCatch().run(completeFunction);
                  });
                });
              } else {
                let renderHTML = "";
                Array.from(needUploadImageArray).forEach((item) => {
                  renderHTML =
                    renderHTML +
                    '<img src="' +
                    item +
                    '" crossoriginNew="anonymous" loading="lazy">';
                });
                popup2.confirm({
                  text: `<style>
                          .dialogbox.popup2-popmenu {
                              width: 80vw;
                              height: 55vh;
                          }
                          #popup2-confirm,
                          #popup2-confirm .comiis_tip.bg_f{ 
                              width: inherit;
                              height: inherit;
                          }
                          #popup2-confirm .comiis_tip.bg_f dt.f_b{
                              height: calc(100% - 115px);
                          }
                          .upload-image-water{
                              height: 100%;
                          }
                        </style>
                        <div class="upload-image-water">${renderHTML}<div>`,
                  mask: true,
                  only: true,
                  ok: {
                    text: "继续上传",
                    callback: async () => {
                      popup2.closeConfirm();
                      let login_status = await checkLogin();
                      if (login_status) {
                        popup2.showLoadingMask();
                        popup2.toast("上传水印图片中...请稍后");

                        console.log(
                          `图片数量:${needUploadImageFileArray.length}`
                        );
                        Utils.asyncArrayForEach(
                          needUploadImageFileArray,
                          uploadFileAwaitFunction
                        ).then(() => {
                          Utils.tryCatch().run(completeFunction);
                        });
                      }
                    },
                  },
                  other: {
                    enable: true,
                    text: "保存至本地",
                    callback: () => {
                      Array.from(needUploadImageFileArray).forEach(
                        async (item, index) => {
                          let base64Image = await Utils.asyncFileToBase64(item);
                          Utils.downloadBase64(item.name, base64Image);
                        }
                      );
                    },
                  },
                });
              }
            });
          };
          if (GM_getValue("chartBedAddWaterMark")) {
            Utils.tryCatch().run(waterMarkAwaitFunction);
          } else {
            checkLogin().then((loginStatus) => {
              if (!loginStatus) {
                return;
              }
              popup2.showLoadingMask();
              popup2.toast("上传图片中...请稍后");

              console.log(`图片数量:${chooseImageFiles.length}`);
              Utils.asyncArrayForEach(
                chooseImageFiles,
                uploadFileAwaitFunction
              ).then(() => {
                Utils.tryCatch().run(completeFunction);
              });
            });
          }
        });
        $jq(document).on("click", "#imglist_z4a .delImg", async function (e) {
          e.preventDefault();
          popup2.showLoadingMask();
          popup2.toast("删除中，请稍后");
          let id_encoded = e.currentTarget.getAttribute("id-encode");
          if (!id_encoded) {
            popup2.closeMask();
            popup2.toast("获取id_encoded失败，请自行去Z4A图床删除");
            return;
          }
          let deleteStatus = await mobile.chartBed.deleteImage(
            chartBedUrl,
            chartBedAuthToken,
            id_encoded
          );
          popup2.closeMask();
          if (deleteStatus) {
            $jq(this).parent().remove();
            mobile.chartBed.storage.delete("z4a", id_encoded);
          }
        });
      }

      function chartbedByMT() {
        /* MT图床(限制了referer) */
        $jq(document).on("click", "#imglist_mt .up_btn a", async function (e) {
          /* 点击上传图标 */
          $jq("#filedata_mt").val("");
          $jq("#filedata_mt").click();
        });
        $jq(document).on("change", "#filedata_mt", async (e) => {
          /* 监听file控件内数据改变 */
          let chooseImageFiles = e.currentTarget.files;
          if (chooseImageFiles.length == 0) {
            return;
          }
          let needUploadImageArray = [];
          let needUploadImageFileArray = [];

          function getCSRFToken() {
            /* 获取MT图床的CSRF参数 */
            return new Promise((resolve) => {
              GM_xmlhttpRequest({
                url: "https://img.binmt.cc/",
                method: "get",
                async: false,
                timeout: 5000,
                headers: {
                  "User-Agent": Utils.getRandomPCUA(),
                  referer: "https://img.binmt.cc/",
                  origin: "https://img.binmt.cc",
                },
                onload: (response) => {
                  console.log(response);
                  let obj = $jq(response.responseText);
                  let metaCSRFToken = obj
                    ?.filter('meta[name="csrf-token"]')
                    ?.attr("content");
                  console.log("获取的CSRF token：", metaCSRFToken);
                  metaCSRFToken = metaCSRFToken == null ? null : metaCSRFToken;
                  resolve(metaCSRFToken);
                },
                onerror: (response) => {
                  console.log(response);
                  popup2.toast("网络异常");
                  resolve(null);
                },
                ontimeout: () => {
                  popup2.toast("请求超时");
                  resolve(null);
                },
              });
            });
          }
          function uploadImage(csrfToken, imageFile) {
            let res_data = {
              imageUri: null,
              json_data: null,
            };
            let form = new FormData();
            form.append("strategy_id", 2); /* 存储策略 */
            form.append("file", imageFile);
            return new Promise((resolve) => {
              GM_xmlhttpRequest({
                url: `https://img.binmt.cc/upload`,
                method: "POST",
                data: form,
                async: false,
                responseType: "json",
                headers: {
                  Accept: "application/json",
                  "User-Agent": Utils.getRandomPCUA(),
                  origin: "https://img.binmt.cc",
                  pragma: "no-cache",
                  referer: "https://img.binmt.cc/",
                  "x-csrf-token": csrfToken,
                },
                onload: (response) => {
                  let json_data = JSON.parse(response.responseText);
                  console.log(json_data);

                  if (json_data["status"]) {
                    popup2.toast("上传成功");
                    let file_reader = new FileReader();
                    /* FileReader主要用于将文件内容读入内存，通过一系列异步接口，可以在主线程中访问本地文件 */
                    file_reader.readAsDataURL(
                      imageFile
                    ); /* 读取图片的内容生成的base64编码的图 */
                    /* 读取完成后，执行该回调函数，它会返回读取的结果result		 */
                    file_reader.onload = function () {
                      let imageUri =
                        this.result; /* 此时的图片已经存储到了result中	 */
                      res_data["imageUri"] = imageUri;
                      res_data["json_data"] = json_data;
                      resolve(res_data);
                    };
                  } else {
                    console.log(json_data);
                    popup2.toast(json_data["message"]);
                    resolve(res_data);
                  }
                },
                onerror: (response) => {
                  console.log(response);
                  popup2.toast("网络异常");
                  resolve(res_data);
                },
              });
            });
          }
          function completeFunction() {
            popup2.closeMask();
            $jq("#filedata_mt").val("");
          }
          async function uploadFileAwaitFunction(params) {
            let imageFile = chooseImageFiles[params[0]];
            let csrfToken = await getCSRFToken();
            if (csrfToken == null) {
              popup2.toast({
                text: "获取CSRF Token失败",
              });
              return;
            }
            let uploadImageReturn = await uploadImage(csrfToken, imageFile);
            if (uploadImageReturn["json_data"] != null) {
              let image_id_encoded =
                uploadImageReturn["json_data"]["data"]["id"]; /* 图片id */
              let image_url =
                uploadImageReturn["json_data"]["data"]["links"][
                  "url"
                ]; /* 图片url */
              let image_thumb_url =
                uploadImageReturn["json_data"]["data"]["links"][
                  "thumbnail_url"
                ]; /* 图片缩略图 */
              let image_name =
                uploadImageReturn["json_data"]["data"][
                  "origin_name"
                ]; /* 图片文件名 */
              let image_uri =
                uploadImageReturn["imageUri"]; /* 图片base64编码数据 */
              let uploadImageHTML = `<li>
                                        <span class="delImg" id-encode="${image_id_encoded}">
                                            <a href="javascript:;">
                                                <i class="comiis_font f_g"></i>
                                            </a>
                                        </span>
                                        <span class="charu f_f">插入</span>
                                        <span class="p_img">
                                            <a href="javascript:;" onclick="comiis_addsmilies('[img]${image_url}[/img]')">
                                                <img style="height:54px;width:54px;" 
																								title="${image_name}" 
																								src="${image_uri}" 
																								loading="lazy"
																								class="vm b_ok"></a>
                                        </span>
                                        <input type="hidden" name="">
                                    </li>`;
              $jq("#imglist_mt").append($jq(uploadImageHTML));
              mobile.chartBed.storage.add(
                "mt",
                image_id_encoded,
                image_url,
                image_thumb_url,
                image_name
              );
            }
          }
          async function waterMarkAwaitFunction() {
            popup2.showLoadingMask();
            Promise.all(
              Array.from(chooseImageFiles).map(async (item, index) => {
                if (item.type === "image/gif") {
                  /* 不支持对GIF添加水印 */
                  let image_base64 = await Utils.asyncFileToBase64(item);
                  needUploadImageArray =
                    needUploadImageArray.concat(image_base64);
                  needUploadImageFileArray =
                    needUploadImageFileArray.concat(item);
                } else {
                  popup2.toast(
                    `添加水印 ${index + 1}/${chooseImageFiles.length}`
                  );
                  var watermark = new Watermark();
                  await watermark.setFile(item);
                  watermark.addText({
                    text: [GM_getValue("chartBedWaterMarkText", "MT论坛")],
                    fontSize: GM_getValue("chartBedWaterMarkFontSize"),
                    color: GM_getValue("chartBedWaterMarkFontColor"),
                    globalAlpha: GM_getValue("chartBedWaterGlobalAlpha"),
                    rotateAngle: GM_getValue("chartBedWaterMarkRotationAngle"),
                    xMoveDistance: GM_getValue("chartBedWaterXMoveDistance"),
                    yMoveDistance: GM_getValue("chartBedWaterYMoveDistance"),
                  });
                  needUploadImageArray = needUploadImageArray.concat(
                    watermark.render("png")
                  );
                  needUploadImageFileArray = needUploadImageFileArray.concat(
                    Utils.base64ToFile(
                      watermark.render("png"),
                      "WaterMark_" + item.name
                    )
                  );
                }
              })
            ).then(async () => {
              chooseImageFiles = needUploadImageFileArray;
              popup2.closeMask();
              if (GM_getValue("chartBedWaterMarkAutoDefault")) {
                popup2.showLoadingMask();
                popup2.toast("上传水印图片中...请稍后");

                console.log(`图片数量:${needUploadImageFileArray.length}`);
                Utils.asyncArrayForEach(
                  needUploadImageFileArray,
                  uploadFileAwaitFunction
                ).then(() => {
                  Utils.tryCatch().run(completeFunction);
                });
                return null;
              }
              let renderHTML = "";
              Array.from(needUploadImageArray).forEach((item) => {
                renderHTML =
                  renderHTML +
                  '<img src="' +
                  item +
                  '" crossoriginNew="anonymous" loading="lazy">';
              });
              popup2.confirm({
                text: `<style>
                                .dialogbox.popup2-popmenu {
                                    width: 80vw;
                                    height: 55vh;
                                }
                                #popup2-confirm,
                                #popup2-confirm .comiis_tip.bg_f{ 
                                    width: inherit;
                                    height: inherit;
                                }
                                #popup2-confirm .comiis_tip.bg_f dt.f_b{
                                    height: calc(100% - 115px);
                                }
                                .upload-image-water{
                                    height: 100%;
                                }
                                </style><div class="upload-image-water">${renderHTML}<div>`,
                mask: true,
                only: true,
                ok: {
                  text: "继续上传",
                  callback: async () => {
                    popup2.closeConfirm();
                    popup2.showLoadingMask();
                    popup2.toast("上传水印图片中...请稍后");

                    console.log(`图片数量:${needUploadImageFileArray.length}`);
                    Utils.asyncArrayForEach(
                      needUploadImageFileArray,
                      uploadFileAwaitFunction
                    ).then(() => {
                      Utils.tryCatch().run(completeFunction);
                    });
                  },
                },
                other: {
                  enable: true,
                  text: "保存至本地",
                  callback: () => {
                    Array.from(needUploadImageFileArray).forEach(
                      async (item, index) => {
                        let base64Image = await Utils.asyncFileToBase64(item);
                        Utils.downloadBase64(item.name, base64Image);
                      }
                    );
                  },
                },
              });
            });
          }
          if (GM_getValue("chartBedAddWaterMark")) {
            Utils.tryCatch().run(waterMarkAwaitFunction);
          } else {
            popup2.showLoadingMask();
            popup2.toast("上传图片中...请稍后");

            console.log(`图片数量:${chooseImageFiles.length}`);
            Utils.asyncArrayForEach(
              chooseImageFiles,
              uploadFileAwaitFunction
            ).then(() => {
              Utils.tryCatch().run(completeFunction);
            });
          }
        });
        $jq(document).on("click", "#imglist_mt .delImg", async function (e) {
          /* 删除上传的图片-目前无法删除 */
          e.preventDefault();
          const id_encoded = $jq(this).attr("id-encode");
          $jq(this).parent().remove();
          mobile.chartBed.storage.delete("mt", id_encoded);
        });
      }
      function chartbedByHistory() {
        /* 所有图床历史上传过的图片 */
        GM_addStyle(`
                .comiis_post_imglist li .delImg {
                    position: absolute;
                    top: -5px;
                    left: -5px;
                }
                `);

        $jq(document).on(
          "click",
          "li[id*='comiis_pictitle_tab_n_'][data-history]",
          function (e) {
            if (GM_getValue("chartBedsImagesHistory") == undefined) {
              GM_setValue("chartBedsImagesHistory", []);
            }
            let historyImages = mobile.chartBed.storage.get();
            if (historyImages == []) {
              return;
            }
            let isAddHistoryImages = $jq("#imglist_history").children();
            if (isAddHistoryImages.length === historyImages.length) {
              /* 没有新图片 */
              console.log("没有新图片");
              return;
            } else if (isAddHistoryImages.length === 0) {
              /* 无图片-全部加进去 */
              console.log("无图片-全部加进去");
              $jq.each(historyImages, (i) => {
                let _id = historyImages[i]["id_encoded"];
                let _web = historyImages[i]["web"];
                let _url = historyImages[i]["url"];
                let _thumb_url = historyImages[i]["thumb_url"];
                let _name = historyImages[i]["name"];

                let _imageHTML = `
                    <li>
                      <span class="delImg" t-id="${_id}" t-web="${_web}">
                          <a href="javascript:;">
                              <i class="comiis_font f_g"></i>
                          </a>
                      </span>
                      <span class="charu f_f">${_web}</span>
                      <span class="p_img">
                          <a href="javascript:;" onclick="comiis_addsmilies('[img]${_url}[/img]')">
                              <img style="height:54px;width:54px;" 
                              title="${_name}" 
                              src="${_thumb_url}" 
                              class="vm b_ok" 
                              loading="lazy"
                              crossoriginNew="anonymous"></a>
                      </span>
                      <input type="hidden" name="${_name}">
                  </li>`;
                $jq("#imglist_history").append($jq(_imageHTML));
              });
            } else if (isAddHistoryImages.length < historyImages.length) {
              /* 其它地方增加了数据-更新结构 */
              console.log("其它地方增加了数据-更新结构");
              var needAddData = Utils.uniqueArray(
                historyImages,
                isAddHistoryImages,
                (item, item2) => {
                  let obj = $jq(item2);
                  let spanElement = obj.find("span.delImg");
                  let _id = spanElement.attr("t-id");
                  let _web = spanElement.attr("t-web");
                  if (!isNaN(parseInt(_id))) {
                    _id = parseInt(_id);
                  }
                  return item["web"] === _web && item["id_encoded"] === _id
                    ? true
                    : false;
                }
              );
              console.log("新增数组:", needAddData);
              Array.from(needAddData).forEach((item, index) => {
                let _id = item["id_encoded"];
                let _web = item["web"];
                let _url = item["url"];
                let _thumb_url = item["thumb_url"];
                let _name = item["name"];
                let _imageHTML = `
                  <li>
                      <span class="delImg" t-id="${_id}" t-web="${_web}">
                          <a href="javascript:;">
                              <i class="comiis_font f_g"></i>
                          </a>
                      </span>
                      <span class="charu f_f">${_web}</span>
                      <span class="p_img">
                          <a href="javascript:;" onclick="comiis_addsmilies('[img]${_url}[/img]')">
                              <img style="height:54px;width:54px;" 
                              title="${_name}" 
                              src="${_thumb_url}" 
                              class="vm b_ok" 
                              crossoriginNew="anonymous"
                              loading="lazy"
                              ></a>
                      </span>
                      <input type="hidden" name="${_name}">
                  </li>`;
                $jq("#imglist_history").append($jq(_imageHTML));
              });
            } else if (isAddHistoryImages.length > historyImages.length) {
              /* 其它地方删除了数据，更新结构 */
              console.log("其它地方删除了数据，更新结构");
              var needRemoveData = Utils.uniqueArray(
                isAddHistoryImages,
                historyImages,
                (item, item2) => {
                  let obj = $jq(item);
                  let spanElement = obj.find("span.delImg");
                  let _id = spanElement.attr("t-id");
                  let _web = spanElement.attr("t-web");
                  if (!isNaN(parseInt(_id))) {
                    _id = parseInt(_id);
                  }
                  return item2["web"] === _web && item2["id_encoded"] === _id
                    ? true
                    : false;
                }
              );
              console.log("需去除的数组:", needRemoveData);
              needRemoveData.forEach((item) => {
                item.remove();
              });
            }
          }
        );

        $jq(document).on("click", "#imglist_history .delImg", function (e) {
          e.preventDefault();
          let obj = $jq(this);
          let _t_web = obj.attr("t-web");
          let _t_id = obj.attr("t-id");
          console.log(_t_web, _t_id);
          let deleteStatus = mobile.chartBed.storage.delete(_t_web, _t_id);
          if (deleteStatus) {
            obj.parent()?.remove();
          }
        });
      }
      let imgBtn = `<a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"><em>图片</em></i></a>`;
      let menu = `
            <div class="bg_f b_b cl gm_plugin_chartbed" style="display: none;">
                <div class="comiis_over_box comiis_input_style">
                    <div class="comiis_upbox comiis_allowpostimg bg_f cl">
                    </div>
                </div> 
            </div>
            `;
      GM_addStyle(`
            #filedata,
            #filedata_kggzs,
            #filedata_hello,
            #filedata_z4a{
                display: none;
            }
            .comiis_tip dt p{
                padding: 10px 0px;
            }
            .upload-image-water{
                overflow-y: auto;
            }
            .upload-image-water img{
                width: 100%;
                margin: 10px 0px;
            }
            `);
      let jqMenu = $jq(menu);
      jqMenu
        .find(".comiis_upbox.comiis_allowpostimg")
        .append(
          $jq(
            ".comiis_wzpost.comiis_input_style .comiis_upbox.comiis_allowpostimg"
          ).children()
        );

      $jq(".swiper-wrapper.comiis_post_ico").append(imgBtn);
      $jq("#comiis_post_tab").append(jqMenu);
      Utils.tryCatch().run(chartbedByBBSMT);
      Utils.tryCatch().run(chartbedByKggzs);
      Utils.tryCatch().run(chartbedByHello);
      Utils.tryCatch().run(chartbedByZ4a);
      Utils.tryCatch().run(chartbedByMT);
      Utils.tryCatch().run(chartbedByHistory);
    },
    /**
     * 编辑器优化-简略
     */
    editorOptimization() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.forumPost], "v49")) {
        return;
      }
      GM_addStyle(`
        #comiis_foot_menu_beautify{
            position: fixed;
            display: inline-flex;
            z-index: 90;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 48px;
            overflow: hidden;
            align-content: center;
            justify-content: center;
            align-items: center;
        }
        #comiis_foot_menu_beautify_big{
            position: fixed;
            display: inline-flex;
            flex-direction: column;
            z-index: 92;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            min-height: 120px;
            overflow: hidden;
            align-content: center;
            justify-content: center;
            align-items: center;
        }
        #comiis_foot_menu_beautify input.bg_e.f_c::-webkit-input-placeholder {
            padding-left:10px;
            color:#999999;
        }
        #comiis_foot_menu_beautify .reply_area ul li a{
            display: block;
            width: 22px;
            height: 22px;
            padding: 4px 8px;
            margin: 8px 0;
            position: relative;
        }
        #comiis_foot_menu_beautify .reply_area ul{
            display: inline-flex;
            align-content: center;
            align-items: center;
            justify-content: center;
        }
        #comiis_foot_menu_beautify .reply_area,
        #comiis_foot_menu_beautify .reply_area ul{
            width: 100%;
        }
        
        #comiis_foot_menu_beautify .reply_area li a i {
            width: 22px;
            height: 22px;
            line-height: 22px;
            font-size: 22px;
        }
        #comiis_foot_menu_beautify .reply_area li a span {
            position: absolute;
            display: block;
            font-size: 10px;
            height: 14px;
            line-height: 14px;
            padding: 0 6px;
            right: -8px;
            top: 4px;
            overflow: hidden;
            border-radius: 20px;
        }
        #comiis_foot_menu_beautify li[data-attr="回帖"] input{
            border: transparent;
            border-radius: 15px;
            height: 30px;
            width: 100%;
        }
        #comiis_foot_menu_beautify_big .comiis_smiley_box{
          padding: 6px 6px 0px;
        }
        #comiis_foot_menu_beautify_big .reply_area{
            margin: 10px 0px 5px 0px;
        }
        #comiis_foot_menu_beautify_big .reply_area ul{
            display: inline-flex;
            align-content: center;
            justify-content: center;
            align-items: flex-end;
        }
        #comiis_foot_menu_beautify_big li[data-attr="回帖"]{
            width: 75vw;
            margin-right: 15px;
        }
        #comiis_foot_menu_beautify_big .reply_user_content{
            width: 75vw;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 8px 10px;
        }
        #comiis_foot_menu_beautify_big li[data-attr="发表"]{

        }
        #comiis_foot_menu_beautify_big li[data-attr="发表"] .fastpostform_new{
            text-align: center;
            margin-bottom: 28px;
        }
        #comiis_foot_menu_beautify_big li[data-attr="发表"] .fastpostform_new i{
            font-size: 22px;
        }
        #comiis_foot_menu_beautify_big li[data-attr="发表"] input{
            width: 60px;
            height: 30px;
            border: transparent;
            color: #ffffff;
            background: #d1c9fc;
            border-radius: 30px;
            margin-bottom: 6px;
        }
        #comiis_foot_menu_beautify_big li[data-attr="发表"] input[data-text='true']{
            background: #7a61fb;
        }
        #comiis_foot_menu_beautify_big li[data-attr="回帖"] textarea{
            padding: 10px 10px 10px 10px;
            border: transparent;
            border-radius: 6px;
            min-height: 70px;
            max-height: 180px;
            background: #e9e8ec;
            overflow-y: auto;
            width: -webkit-fill-available;
        }
        #comiis_foot_menu_beautify .reply_area li[data-attr="回帖"]{
            width: 65%;
            margin: 0px 3%;
            text-align: center;
        }
        #comiis_foot_menu_beautify .reply_area li:not(first-child){
            width: 7%;
            text-align: -webkit-center;
            text-align: center;
        }
        #comiis_foot_menu_beautify_big .other_area{
            width: 100%;
            text-align: center;
        }
        #comiis_foot_menu_beautify_big .other_area .menu_icon a{
            margin: 0px 20px;
        }
        #comiis_foot_menu_beautify_big .other_area i{
            font-size: 24px;
        }
        #comiis_foot_menu_beautify_big .other_area #comiis_insert_ubb_tab i{
            font-size: 16px;
        }
        #comiis_foot_menu_beautify_big .other_area .menu_body{
            background: #f4f4f4;

        }
        #comiis_foot_menu_beautify_big .other_area .menu_body .comiis_smiley_box .comiis_optimization{
            max-height: 140px;
            overflow-y: auto;
            flex-direction: column;
        }
        #comiis_foot_menu_beautify_big .other_area .menu_body .comiis_smiley_box .bqbox_t{
            background: #fff;
            
        }
        #comiis_foot_menu_beautify_big .other_area .menu_body .comiis_smiley_box .bqbox_t ul#comiis_smilies_key li a.bg_f.b_l.b_r{
            background: #f4f4f4 !important;
        }
        #comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #comiis_pictitle_key{
            display: -webkit-box;
            top: 0px;
            left: 0px;
            height: 42px;
            line-height: 42px;
            overflow: hidden;
            overflow-x: auto;        
        }
        #comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #comiis_pictitle_key li{
            padding: 0px 10px;
        }
        #comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab .comiis_upbox,
        #comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab .comiis_input_style{
            height: 140px;
            overflow-y: auto;
            flex-direction: column;
        }
        #comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_kggzs,
        #comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_hello,
        #comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_z4a,
        #comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab #filedata_mt{
            display:none;
        }
        @media screen and (max-width: 350px) {
          .comiis_bqbox .bqbox_c li {
            width: 14.5%;
          }
        }
        @media screen and (min-width: 350px) and (max-width: 400px) {
          .comiis_bqbox .bqbox_c li {
            width: 12.5%;
          }
        }
        @media screen and (min-width: 400px) and (max-width: 450px) {
          .comiis_bqbox .bqbox_c li {
            width: 11%;
          }
        }
        @media screen and (min-width: 450px) and (max-width: 500px) {
          .comiis_bqbox .bqbox_c li {
            width: 10%;
          }
        }
        @media screen and (min-width: 500px) and (max-width: 550px) {
          .comiis_bqbox .bqbox_c li {
            width: 9.5%;
          }
        }
        @media screen and (min-width: 550px) and (max-width: 600px) {
          .comiis_bqbox .bqbox_c li {
            width: 9%;
          }
        }
        @media screen and (min-width: 600px) and (max-width: 650px) {
          .comiis_bqbox .bqbox_c li {
            width: 8.5%;
          }
        }
        @media screen and (min-width: 650px) and (max-width: 700px) {
          .comiis_bqbox .bqbox_c li {
            width: 8%;
          }
        }
        @media screen and (min-width: 700px) and (max-width: 750px) {
          .comiis_bqbox .bqbox_c li {
            width: 7.5%;
          }
        }
        @media screen and (min-width: 750px) and (max-width: 800px) {
          .comiis_bqbox .bqbox_c li {
            width: 7%;
          }
        }
        @media screen and (min-width: 800px) and (max-width: 850px) {
          .comiis_bqbox .bqbox_c li {
            width: 6.5%;
          }
        }
        @media screen and (min-width: 850px) and (max-width: 1200px) {
          .comiis_bqbox .bqbox_c li {
            width: 6%;
          }
        }
        @media screen and (min-width: 1200px){
          .comiis_bqbox .bqbox_c li {
            width: 4.5%;
          }
        }
        #imglist_settings button{
          font-size: 13.333px;
          color: #9baacf;
          outline: none;
          border: none;
          height: 35px;
          width: 80px;
          border-radius: 10px;
          box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
          font-weight: 800;
          line-height: 40px;
          background: #efefef;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #imglist_settings button:active{
          box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff !important;
          color: #638ffb !important;
        }
        `);
      let pl = $jq("#comiis_foot_memu .comiis_flex li")[1];
      let dz = $jq("#comiis_foot_memu .comiis_flex li")[2];
      let sc = $jq("#comiis_foot_memu .comiis_flex li")[3];
      let form_action = $jq("#fastpostform").attr("action");
      let form_serialize = $jq("#fastpostform").serialize();
      let form_url = $jq("#fastpostform .header_y a").attr("href");
      $jq("#needmessage[name='message']").remove();
      $jq("#imglist").remove();
      $jq("#fastpostsubmitline").remove();
      $jq("#fastpostsubmit").remove();
      $jq("#comiis_foot_memu").hide();
      $jq("#comiis_foot_memu").after(
        $jq(`
            <div id="comiis_foot_menu_beautify" class="bg_f b_t">
                <div class="reply_area">
                    <ul>
                        <li data-attr="回帖"><input type="text" class="bg_e f_c" placeholder="发帖千百度，文明第一步" readonly="readonly"></li>
                        <li data-attr="评论数量">${pl.innerHTML}</li>
                        <li data-attr="点赞">${dz.innerHTML}</li>
                        <li data-attr="收藏">${sc.innerHTML}</li>
                    </ul>
                </div>
            </div>
            <div id="comiis_foot_menu_beautify_big" data-model="comment" class="bg_f b_t" style="display:none;">
                <div class="reply_area">
                    <div class="reply_user_content" style="display:none;"></div>
                    <ul>
                        <li data-attr="回帖"><textarea id="needmessage" placeholder="发帖千百度，文明第一步"></textarea></li>
                        <li data-attr="发表">
                            <div class="fastpostform_new"><a href="${form_url}" data-comment-url="${form_url}" target="_blank"><i class="comiis_font f_d"></i></a></div>
                            <div id="fastpostsubmitline"><input data-comment-url="${form_url}" data-comment-action="${form_action}" data-comment-serialize="${form_serialize}" data-text="false" type="button" value="发表" name="replysubmit" id="fastpostsubmit" comiis="handle"></div>
                        </li>
                    </ul>
                </div>
                <div class="other_area">
                    <div class="menu_icon">
                        <a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"></i></a>
                        <a href="javascript:;" class="comiis_smile"><i class="comiis_font"></i></a>
                        <a href="javascript:;" class="commis_insert_bbs"><i class="comiis_font"></i></a>
                    </div>
                    <div class="menu_body">
                        <div id="comiis_pictitle_tab">
                            <div class="comiis_upbox bg_f cl">
                                <ul id="imglist" class="comiis_post_imglist cl">
                                    <li class="up_btn">
                                        <a href="javascript:;" class="bg_e b_ok f_d">
                                            <i class="comiis_font"></i>
                                        </a>
                                        <input type="file" name="Filedata" id="filedata" accept="image/*" multiple>
                                    </li>				
                                </ul>
                             </div>
                             <div class="comiis_upbox bg_f cl" style="display: none;">
                                <ul id="imglist_kggzs" class="comiis_post_imglist cl">
                                    <li class="up_btn">
                                        <a href="javascript:;" class="bg_e b_ok f_d">
                                            <i class="comiis_font"></i>
                                            
                                        </a>
                                        <input type="file" name="Filedata" id="filedata_kggzs" accept="image/*" multiple>
                                    </li>				
                                </ul>
                             </div>
                             <div class="comiis_upbox bg_f cl" style="display: none;">
                                <ul id="imglist_hello" class="comiis_post_imglist cl">
                                    <li class="up_btn">
                                        <a href="javascript:;" class="bg_e b_ok f_d">
                                            <i class="comiis_font"></i>
                                            
                                        </a>
                                        <input type="file" name="Filedata" id="filedata_hello" accept="image/*" multiple>
                                    </li>				
                                </ul>
                             </div>
                             <div class="comiis_upbox bg_f cl" style="display: none;">
                                <ul id="imglist_z4a" class="comiis_post_imglist cl">
                                    <li class="up_btn">
                                        <a href="javascript:;" class="bg_e b_ok f_d">
                                            <i class="comiis_font"></i>
                                            
                                        </a>
                                        <input type="file" name="Filedata" id="filedata_z4a" accept="image/*" multiple>
                                    </li>				
                                </ul>
                             </div>
                             <div class="comiis_upbox bg_f cl" style="display: none;">
                                <ul id="imglist_mt" class="comiis_post_imglist cl">
                                    <li class="up_btn">
                                        <a href="javascript:;" class="bg_e b_ok f_d">
                                            <i class="comiis_font"></i>
                                            
                                        </a>
                                        <input type="file" name="Filedata" id="filedata_mt" accept="image/*">
                                    </li>				
                                </ul>
                             </div>
                             <div class='comiis_upbox bg_f cl' style='display: none;'>
                                <ul id="imglist_history" class="comiis_post_imglist cl">
                                        
                                </ul>
                             </div>
                             <div class='comiis_upbox comiis_chartbed_settings' style='display: none;height: 170px;overflow-y: auto;background: #fff;'>
                                <ul id="imglist_settings" class="cl">
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">删除已保存的康哥图床的账号</div>
                                        <div class="styli_r">
                                            <button class="removeChartBedAccount" data-key="['KggzsChartBedUser','KggzsChartBedPwd']">点我删除</button>
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">删除已保存的Hello图床的账号</div>
                                        <div class="styli_r">
                                          <button class="removeChartBedAccount" data-key="['HelloChartBedUser','HelloChartBedPwd']">点我删除</button>
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">删除已保存的Z4A图床的账号</div>
                                        <div class="styli_r">
                                          <button class="removeChartBedAccount" data-key="['Z4AChartBedUser','Z4AChartBedPwd']">点我删除</button>
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">水印</div>
                                        <div class="styli_r">
                                            <input type="checkbox" name="addwatermark" id="addwatermark" value="1" class="comiis_checkbox_key" checked="checked" style="display: none;">
                                            <label for="addwatermark" class="wauto"><code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code></label>
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">自动添加水印并上传</div>
                                        <div class="styli_r">
                                            <input type="checkbox" name="autowatermarkdefault" id="autowatermarkdefault" value="1" class="comiis_checkbox_key" checked="checked" style="display: none;">
                                            <label for="autowatermarkdefault" class="wauto"><code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code></label>
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">文字</div>
                                        <div class="styli_r">
                                            <input type="text" style="
                                            height: 32px;
                                            line-height: 32px;
                                            padding: 0 20px;
                                            margin-top: 1px;
                                            margin-right: 12px;
                                            border: none !important;
                                            font-size: 15px;
                                            border-radius: 20px;
                                        " name="watermarktext" id="watermarktext" placeholder="请输入需要添加水印的文字">
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">颜色</div>
                                        <div class="styli_r">
                                            <input type="color" style="width: 60px;
                                            border-radius: unset;
                                            padding: unset;
                                            margin-right: 32px;
                                            height: 32px;
                                            line-height: 32px;
                                            margin-top: 1px;
                                            font-size: 15px;
                                            border: none;" name="watermarkfontcolor" id="watermarkfontcolor">
                                            
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">大小</div>
                                        <div class="styli_r">
                                            <input type="number" style="
                                            height: 32px;
                                            line-height: 32px;
                                            padding: 0 20px;
                                            margin-top: 1px;
                                            margin-right: 12px;
                                            border: none !important;
                                            font-size: 15px;
                                            border-radius: 20px;
                                            width:60px;
                                        " name="watermarkfontsize" id="watermarkfontsize" placeholder="单位px" value="" min="0" max="300" step="1">
                                            
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">透明度</div>
                                        <div class="styli_r">
                                            <input type="number" style="
                                            height: 32px;
                                            line-height: 32px;
                                            padding: 0 20px;
                                            margin-top: 1px;
                                            margin-right: 12px;
                                            border: none !important;
                                            font-size: 15px;
                                            border-radius: 20px;
                                            width:60px;
                                        " name="watermarkglobalalpha" id="watermarkglobalalpha" placeholder="0~1" value="" min="0" max="1" step="0.01">
                                            
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">左右间距</div>
                                        <div class="styli_r">
                                            <input type="number" style="
                                            height: 32px;
                                            line-height: 32px;
                                            padding: 0 20px;
                                            margin-top: 1px;
                                            margin-right: 12px;
                                            border: none !important;
                                            font-size: 15px;
                                            border-radius: 20px;
                                            width:60px;
                                        " name="watermarkxmovedistance" id="watermarkxmovedistance" placeholder="1~200" value="" min="1" max="200" step="1">
                                            
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">上下间距</div>
                                        <div class="styli_r">
                                            <input type="number" style="
                                            height: 32px;
                                            line-height: 32px;
                                            padding: 0 20px;
                                            margin-top: 1px;
                                            margin-right: 12px;
                                            border: none !important;
                                            font-size: 15px;
                                            border-radius: 20px;
                                            width:60px;
                                        " name="watermarkymovedistance" id="watermarkymovedistance" placeholder="1~200" value="" min="1" max="200" step="1">
                                            
                                        </div>	
                                    </li>
                                    <li class="comiis_styli_m f15 comiis_flex b_b">
                                        <div class="flex" style="text-align: left;">旋转角度</div>
                                        <div class="styli_r">
                                            <input type="number" style="
                                            height: 32px;
                                            line-height: 32px;
                                            padding: 0 20px;
                                            margin-top: 1px;
                                            margin-right: 12px;
                                            border: none !important;
                                            font-size: 15px;
                                            border-radius: 20px;
                                            width:60px;
                                        " name="watermarkrotationangle" id="watermarkrotationangle" placeholder="-360~360" value="" min="-360" max="360" step="1">
                                            
                                        </div>	
                                    </li>
                                </ul>
                            </div>
                             <div class="bqbox_t">
                                <ul id="comiis_pictitle_key">
                                    <li class="bg_f" id="comiis_pictitle_tab_n_1"><a href="javascript:;" class="">论坛</a></li>
                                    <li class="" id="comiis_pictitle_tab_n_2"><a href="javascript:;" class="">康哥图床</a></li>
                                    <li class="" id="comiis_pictitle_tab_n_3"><a href="javascript:;" class="">Hello图床</a></li>
                                    <li class="" id="comiis_pictitle_tab_n_4"><a href="javascript:;" class="">Z4A图床</a></li>
                                    <li class="" id="comiis_pictitle_tab_n_5"><a href="javascript:;" class="">MT图床</a></li>
                                    <li class="" id="comiis_pictitle_tab_n_6" data-history><a href="javascript:;" class="">历史图片</a></li>
                                    <li class="" id="comiis_pictitle_tab_n_7" data-setting><a href="javascript:;" class="">设置</a></li>
                                </ul>
                            </div>
                        </div>
                        <div id="comiis_post_tab" class="comiis_bqbox">
                            <div class="comiis_smiley_box swiper-container-horizontal swiper-container-android">
                                <div class="swiper-wrapper bqbox_c comiis_optimization">
                                    <div class="swiper-slide">
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[呵呵]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[撇嘴]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[色]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[发呆]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[得意]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[流泪]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[害羞]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[闭嘴]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[睡]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[大哭]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[尴尬]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[发怒]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[调皮]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[呲牙]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[惊讶]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[难过]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[酷]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[冷汗]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[抓狂]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[吐]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[偷笑]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[可爱]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[白眼]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[傲慢]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[饥饿]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[困]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[惊恐]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[流汗]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[憨笑]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[装逼]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[奋斗]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[咒骂]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[疑问]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[嘘]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[晕]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[折磨]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[衰]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[骷髅]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[敲打]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[再见]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[擦汗]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[抠鼻]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[鼓掌]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[糗大了]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[坏笑]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[左哼哼]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[右哼哼]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[哈欠]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[鄙视]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[委屈]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[快哭了]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[阴脸]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[亲亲]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[吓]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[可怜]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[眨眼睛]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[笑哭]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[dogeQQ]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[泪奔]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[无奈]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[托腮]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[卖萌]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[斜眼笑]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[喷血]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[惊喜]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[骚扰]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[小纠结]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[我最美]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[菜刀]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[西瓜]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[啤酒]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[篮球]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[乒乓]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[咖啡]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[饭]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[猪]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[玫瑰]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[凋谢]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[示爱]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[爱心]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[心碎]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[蛋糕]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[闪电]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[炸弹]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[刀]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[足球]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[瓢虫]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[便便]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[月亮]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[太阳]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[礼物]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[抱抱]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[喝彩]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[祈祷]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[棒棒糖]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[药]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[赞]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[差劲]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[握手]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[胜利]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[抱拳]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[勾引]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[拳头]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[差劲]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq104.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[爱你]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[NO]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[OK]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif" class="vm"></a></li>
                                    
                                    </div>
    
                                    <div class="swiper-slide" style="display: none;">
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#呵呵]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#滑稽]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#吐舌]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#哈哈]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#啊]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#酷]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#怒]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#开心]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#汗]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#泪]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#黑线]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#鄙视]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#不高兴]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#真棒]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#钱]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#疑问]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#阴险]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#吐]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#咦]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#委屈]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#花心]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#呼～]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#激动]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#冷]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#可爱]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#What？]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#勉强]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#狂汗]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#酸爽]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#乖]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#雅美蝶]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#睡觉]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#惊哭]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#哼]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#笑尿]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#惊讶]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#小乖]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#喷]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#抠鼻]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#捂嘴笑]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#你懂的]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#犀利]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#小红脸]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#懒得理]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#爱心]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#心碎]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#玫瑰]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#礼物]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#彩虹]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#太阳]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#月亮]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#钱币]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#咖啡]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#蛋糕]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#大拇指]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#胜利]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#爱你]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#OK]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#弱]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#沙发]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#纸巾]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#香蕉]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#便便]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#药丸]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#红领巾]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#蜡烛]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#三道杠]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#音乐]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[#灯泡]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png" class="vm"></a></li>
                                    </div>
                                    
                                    <div class="swiper-slide" style="display: none;">
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[doge]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[doge思考]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[doge再见]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[doge生气]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[doge气哭]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[doge笑哭]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[doge调皮]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[doge啊哈]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[doge原谅TA]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[miao]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[miao思考]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[miao拜拜]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[miao生气]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[miao气哭]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[二哈]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[摊手]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w并不简单]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w滑稽]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w色]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w爱你]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w拜拜]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w悲伤]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w鄙视]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w馋嘴]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w冷汗]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w打哈欠]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w打脸]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w敲打]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w生病]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w闭嘴]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w鼓掌]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w哈哈]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w害羞]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w呵呵]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w黑线]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w哼哼]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w调皮]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w可爱]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w可怜]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w酷]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w困]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w懒得理你]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w流泪]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w怒]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w怒骂]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w钱]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w亲亲]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w傻眼]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w便秘]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w失望]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w衰]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w睡觉]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w思考]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w开心]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w色舔]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w偷笑]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w吐]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w抠鼻]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w委屈]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w笑哭]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w嘻嘻]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w嘘]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w阴险]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w疑问]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w抓狂]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w晕]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w右哼哼]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w左哼哼]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w肥皂]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w奥特曼]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w草泥马]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w兔子]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w熊猫]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w猪头]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w→_→]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w给力]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w囧]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w萌]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w神马]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png" class="vm"></a></li>
                                        <li><a href="javascript:;" onclick="comiis_addsmilies('[w威武]');"><img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png" class="vm"></a></li>
                                    </div>
                                </div>
                                <div class="bqbox_t">
                                    <ul id="comiis_smilies_key">
                                        <li>
                                            <a href="javascript:;" id="comiis_smilies_tab_n_1" class="bg_f b_l b_r">
                                                <img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif" class="vm">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" id="comiis_smilies_tab_n_2" class="">
                                                <img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png" class="vm">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" id="comiis_smilies_tab_n_3" class="">
                                                <img loading="lazy" data-src="https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png" class="vm">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="comiis_insert_ubb_tab" style="display: none;">
                            <div class="bg_f comiis_input_style">
                                <div class="comiis_post_urlico b_b">
                                    <ul>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `)
      );
      $jq("#comiis_foot_menu_beautify .comiis_recommend_addkey").on(
        "click",
        function () {
          /* 点赞按钮事件 */
          if (comiis_recommend_key == 0) {
            comiis_recommend_key = 1;
            $jq.ajax({
              type: "GET",
              url: $jq(this).attr("href") + "&inajax=1",
              dataType: "xml",
              success: (s) => {
                var s = s.lastChild.firstChild.nodeValue;
                if (s.indexOf("您已评价过本主题") >= 0) {
                  $jq.ajax({
                    type: "GET",
                    url: `plugin.php?id=comiis_app&comiis=re_recommend&tid=${tid}&inajax=1`,
                    dataType: "xml",
                    success: (response) => {
                      var recommend_num = Number(
                        $jq("#comiis_recommend_num").text()
                      );
                      if ($jq(".comiis_recommend_list_a").length > 0) {
                        $jq("#comiis_recommend_list_a" + uid).remove();
                      }
                      if ($jq(".comiis_recommend_list_s").length > 0) {
                        $jq("#comiis_recommend_list_s" + uid).remove();
                      }
                      if ($jq(".comiis_recommend_list_t").length > 0) {
                        $jq("#comiis_recommend_list_t" + uid).remove();
                      }
                      if (recommend_num > 1) {
                        $jq(".comiis_recommend_num").text(
                          recommend_num - Number(allowrecommend)
                        );
                        $jq(".comiis_recommend_nums").text(
                          "+" + (recommend_num - Number(allowrecommend))
                        );
                      } else {
                        $jq("#comiis_recommend_num").remove();
                        $jq(".comiis_recommend_nums").text("");

                        if ($jq(".comiis_recommend_list_a").length > 0) {
                          $jq(".comiis_recommend_list_a")
                            .empty()
                            .removeClass("comiis_recommend_list_on");
                        }
                        if ($jq(".comiis_recommend_list_t").length > 0) {
                          $jq(".comiis_recommend_list_t").removeClass(
                            "comiis_recommend_list_on"
                          );
                        }
                      }
                      $jq(".comiis_recommend_addkey i").html("&#xe63b;");
                      $jq(".comiis_recommend_color")
                        .removeClass("f_a")
                        .addClass("f_b");
                      if ($jq(".comiis_recommend_list_s").length > 0) {
                        if ($jq(".comiis_recommend_list_s li").length < 7) {
                          $jq(".txshow_more").hide();
                        } else {
                          $jq(".txshow_more").show();
                        }
                      }
                      popup2.toast("已取消点赞");
                    },
                  });
                } else if (s.indexOf("您不能评价自己的帖子") >= 0) {
                  popup2.toast("不能点赞自己的帖子");
                } else if (s.indexOf("今日评价机会已用完") >= 0) {
                  popup2.toast("您今日的点赞机会已用完");
                } else if (
                  s.indexOf(`'recommendv':${allowrecommend}''+`) >= 0
                ) {
                  var b = [],
                    r;
                  r = s.match(/\'recommendc\':\'(.*?)\'/);
                  if (r != null) {
                    b["recommendc"] = r[1];
                  } else {
                    b["recommendc"] = 0;
                  }
                  r = s.match(/\'daycount\':\'(.*?)\'/);
                  if (r != null) {
                    b["daycount"] = r[1];
                  } else {
                    b["daycount"] = 0;
                  }
                  if ($jq(".comiis_recommend_new span").length < 1) {
                    $jq(".comiis_recommend_new").append(
                      '<span class="bg_del f_f comiis_kmvnum comiis_recommend_num" id="comiis_recommend_num">0</span>'
                    );
                  }
                  var comiis_recommend_num = Number(
                    $jq("#comiis_recommend_num").text()
                  );
                  if ($jq(".comiis_recommend_list_a").length > 0) {
                    $jq(".comiis_recommend_list_a")
                      .removeClass("comiis_recommend_list_on")
                      .addClass("comiis_recommend_list_on")
                      .prepend(
                        ($jq(".comiis_recommend_list_a li").length > 0
                          ? ""
                          : '<li style="float:right;margin-right:0;"><a href="misc.php?op=recommend&tid= ' +
                            tid +
                            '&mod=faq&mobile=2"><span class="bg_b f_c"><em class="comiis_recommend_num">' +
                            comiis_recommend_num +
                            "</em>赞</span></a></li>") +
                          '<li id="comiis_recommend_list_a' +
                          uid +
                          '"><a href="home.php?mod=space&uid=' +
                          uid +
                          '"><img src="' +
                          MT_CONFIG.getAvatar(uid, "small") +
                          '"></a></li>'
                      );
                  }
                  if ($jq(".comiis_recommend_list_t").length > 0) {
                    $jq(".comiis_recommend_list_t")
                      .removeClass("comiis_recommend_list_on")
                      .addClass("comiis_recommend_list_on")
                      .prepend(
                        `<span id="comiis_recommend_list_t${uid}">
                          <a href="home.php?mod=space&uid=${uid}" class="f_c">${username}</a>
                          ${
                            $jq(".comiis_recommend_list_t a").length > 0
                              ? '<span class="f_d"> , </span>'
                              : ""
                          }
                        </span>`
                      );
                  }
                  if ($jq(".comiis_recommend_list_s").length > 0) {
                    $jq(".comiis_recommend_list_s")
                      .removeClass("comiis_recommend_list_on")
                      .addClass("comiis_recommend_list_on")
                      .prepend(
                        ($jq(".comiis_recommend_list_s li").length > 0
                          ? ""
                          : "") +
                          '<li id="comiis_recommend_list_s' +
                          uid +
                          '"><a href="home.php?mod=space&uid=' +
                          uid +
                          '"><img loading="lazy" src="' +
                          MT_CONFIG.getAvatar(uid, "small") +
                          '"></a></li>'
                      );
                  }
                  $jq(".comiis_recommend_num").text(
                    comiis_recommend_num + Number(allowrecommend)
                  );
                  $jq(".comiis_recommend_nums").text(
                    "+" + (comiis_recommend_num + Number(allowrecommend))
                  );
                  $jq(".comiis_recommend_addkey i").html("&#xe654;");
                  $jq(".comiis_recommend_color")
                    .removeClass("f_b")
                    .addClass("f_a");
                  if ($jq(".comiis_recommend_list_s").length > 0) {
                    if ($jq(".comiis_recommend_list_s li").length < 7) {
                      $jq(".txshow_more").hide();
                    } else {
                      $jq(".txshow_more").show();
                    }
                  }
                  popup2.toast(
                    "点赞成功" +
                      (b["daycount"]
                        ? `, 您今天还能点赞 ${b["daycount"] - 1} 次`
                        : "")
                  );
                } else if (
                  s.indexOf(
                    "window.location.href = 'member.php?mod=logging&action=login&mobile=2'"
                  ) >= 0
                ) {
                  window.location.href =
                    "member.php?mod=logging&action=login&mobile=2";
                } else {
                  popup2.toast("没有点赞权限或帖子不存在");
                }
                setTimeout(function () {
                  comiis_recommend_key = 0;
                }, 500);
              },
              error: () => {
                window.location.href = obj.attr("href");

                setTimeout(function () {
                  comiis_recommend_key = 0;
                }, 500);
              },
            });
          }
          return false;
        }
      );
      unsafeWindow.textarea_scrollHeight = () => {};
      let btn_fabiao = $jq(
        '#comiis_foot_menu_beautify_big li[data-attr="发表"] input'
      );
      if (typeof unsafeWindow.comiis_addsmilies == "function") {
        /* 替换全局函数添加图片到里面触发input */
        unsafeWindow.comiis_addsmilies = (a) => {
          unsafeWindow.$("#needmessage").comiis_insert(a);
          unsafeWindow
            .$("#needmessage")[0]
            .dispatchEvent(new Event("propertychange"));
        };
      }
      $jq("#comiis_foot_menu_beautify_big textarea").on(
        "input propertychange",
        function (event) {
          /* 输入框内容改变，高度也改变事件 */
          event.preventDefault();
          let inputValue = event.target.value;
          if (inputValue != "") {
            btn_fabiao.attr("data-text", "true");
            $jq("#comiis_foot_menu_beautify li[data-attr='回帖'] input").attr(
              "placeholder",
              "[草稿待发送]"
            );
          } else {
            btn_fabiao.attr("data-text", "false");
            $jq("#comiis_foot_menu_beautify li[data-attr='回帖'] input").attr(
              "placeholder",
              "发帖千百度，文明第一步"
            );
          }
          $jq(this).css("height", "70px");
          $jq(this).css("height", event.target.scrollHeight - 20 + "px");
        }
      );

      let error_code = {
        1: {
          error_match: "抱歉，您填写的内容包含敏感词而无法提交",
          popup_text: "抱歉，您填写的内容包含敏感词而无法提交",
        },
        2: {
          error_match:
            "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",
          popup_text:
            "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",
        },
        3: {
          error_match: "抱歉，本主题已关闭，不再接受新内容",
          popup_text: "抱歉，本主题已关闭，不再接受新内容",
        },
        4: {
          error_match:
            "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",
          popup_text:
            "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",
        },
        5: {
          error_match: "抱歉，您的帖子小于 10 个字符的限制",
          popup_text: "抱歉，您的帖子小于 10 个字符的限制",
        },
      };

      function handle_error(response) {
        let return_status = false;
        let messagetext = $jq(response.lastChild.firstChild.nodeValue)
          .find("#messagetext")
          .text();
        if (messagetext.trim() == "") {
          return return_status;
        }
        console.log(messagetext);
        $jq.each(error_code, (index, item) => {
          if (messagetext.indexOf(item["error_match"]) != -1) {
            if (messagetext.indexOf(`typeof errorhandle_=='function'`) != -1) {
              /* 奇怪的返回值，在该帖子是关闭状态，点击回复会出现抱歉，本主题已关闭，不再接受新内容，正常是errorhandle_fastpost */
              popup2.toast(item["popup_text"]);
            }
            return_status = true;
            return;
          }
        });
        return return_status;
      }
      $jq("#fastpostsubmit").on("click", function () {
        /* 发表按钮|回复按钮点击事件 */
        var msgobj = $jq("#needmessage");
        var msgData = msgobj.val();
        msgData = encodeURIComponent(msgData);
        if (msgData == null || msgData === "") {
          return;
        }
        popup2.showLoadingMask();
        if ($jq("#fastpostsubmit").val() == "发表") {
          /* 发表 */
          let url = form_action + "reply&handlekey=fastpost&loc=1&inajax=1";
          let data = form_serialize + msgData;
          $jq.each($jq("#imglist input[type='hidden']"), (index, item) => {
            data = `${data}&${item.getAttribute("name")}=`;
          });
          console.log(data);
          $jq.ajax({
            type: "POST",
            url: url,
            data: data,
            timeout: 5000,
            dataType: "xml",
            success: function (response) {
              popup2.closeMask();
              console.log(response.lastChild.firstChild.nodeValue);
              evalscript(response.lastChild.firstChild.nodeValue);
              if (handle_error(response)) {
                return;
              }
              $jq(document).scrollTop($jq(document).height());
              $jq("#needmessage").val("");
              $jq("#comiis_head").click();
              $jq("#comiis_foot_menu_beautify_big .reply_user_content").hide();
              $jq(
                '#comiis_foot_menu_beautify_big li[data-attr="发表"] input'
              ).attr("data-text", "false");
              $jq("#comiis_foot_menu_beautify li[data-attr='回帖'] input").attr(
                "placeholder",
                "发帖千百度，文明第一步"
              );
            },
            error: function (response) {
              popup2.closeMask();
              console.log(response);
              /* window.location.href = form_action; */
              popup2.toast("连接超时,网络异常");
            },
          });
        } else {
          /* 回复 */
          let data =
            $jq("#comiis_foot_menu_beautify_big .reply_user_content").attr(
              "data-reply-serialize"
            ) + msgData;
          $jq.each($jq("#imglist input[type='hidden']"), (index, item) => {
            data = `${data}&${item.getAttribute("name")}=`;
          });
          $jq.ajax({
            type: "POST",
            url:
              $jq("#comiis_foot_menu_beautify_big .reply_user_content").attr(
                "data-reply-action"
              ) + "&handlekey=fastposts&loc=1&inajax=1",
            data: data,
            timeout: 5000,
            dataType: "xml",
            success: function (response) {
              popup2.closeMask();
              console.log(response.lastChild.firstChild.nodeValue);
              evalscript(response.lastChild.firstChild.nodeValue);
              if (handle_error(response)) {
                return;
              }
              $jq(response.lastChild.firstChild.nodeValue).click();
              $jq("#needmessage").val("");
              $jq("#comiis_head").click();
              $jq(
                '#comiis_foot_menu_beautify_big li[data-attr="发表"] input'
              ).val("发表");
              $jq(
                '#comiis_foot_menu_beautify_big li[data-attr="发表"] input'
              ).attr("data-text", "false");
              $jq("#comiis_foot_menu_beautify li[data-attr='回帖'] input").attr(
                "placeholder",
                "发帖千百度，文明第一步"
              );
              $jq(document).scrollTop($jq(document).height());
            },
            error: (response) => {
              popup2.closeMask();
              console.log(response);
              /*  window.location.href = $jq('#comiis_foot_menu_beautify_big .reply_user_content').attr('data-reply-action'); */

              popup2.toast("连接超时,网络异常");
            },
          });
        }

        return false;
      });

      $jq(document).on(
        "click",
        ".comiis_postli_times .dialog_reply[datahref*=reply]",
        function (event) {
          /* 回复按钮新事件 */
          var obj = $jq(this);
          $jq("#comiis_foot_menu_beautify_big").attr("data-model", "reply");
          popup2.showLoadingMask();
          console.log($jq(this));
          $jq.ajax({
            type: "GET",
            url: obj.attr("datahref") + "&inajax=1",
            dataType: "xml",
            timeout: 5000,
            success: function (response) {
              popup2.closeMask();
              console.log(response.lastChild.firstChild.nodeValue);
              if (handle_error(response)) {
                return;
              }
              let requestDOM = $jq(
                `<div>${response.lastChild.firstChild.nodeValue}</div>`
              );
              let reply_url = requestDOM
                .find(".comiis_tip .tip_tit a")
                .attr("href");
              let reply_user = requestDOM.find(".comiis_tip span.f_0").text();
              let reply_content = requestDOM
                .find("input[name='noticeauthormsg']")
                .val();
              let reply_action = requestDOM.find("#postforms").attr("action");
              let reply_serialize = requestDOM.find("#postforms").serialize();
              $jq("#comiis_foot_menu_beautify_big .reply_user_content").text(
                `回复 ${reply_user}: ${reply_content}`
              );
              $jq("#comiis_foot_menu_beautify_big .reply_user_content").show();
              $jq(
                "#comiis_foot_menu_beautify li[data-attr='回帖'] input"
              ).click();
              $jq(
                "#comiis_foot_menu_beautify li[data-attr='回帖'] input"
              ).focus();
              $jq("#fastpostsubmitline input").val("回复");
              $jq("#comiis_foot_menu_beautify_big .fastpostform_new a").attr(
                "href",
                reply_url
              );
              $jq("#comiis_foot_menu_beautify_big .reply_user_content").attr(
                "data-reply-url",
                reply_url
              );
              $jq("#comiis_foot_menu_beautify_big .reply_user_content").attr(
                "data-reply-action",
                reply_action
              );
              $jq("#comiis_foot_menu_beautify_big .reply_user_content").attr(
                "data-reply-serialize",
                reply_serialize
              );
              window.tempReplyBtnNode = obj;
              $jq("#needmessage").val(
                obj.attr("data-text") ? obj.attr("data-text") : ""
              );
            },
            error: (response) => {
              popup2.closeMask();
              console.log(response);
              /* window.location.href = obj.attr('datahref'); */
              popup2.toast("连接超时,网络异常");
            },
          });

          return false;
        }
      );

      $jq(document).on("click", function (event) {
        /* 全局点击事件 */
        if (
          document
            .querySelector("#comiis_foot_menu_beautify li[data-attr='回帖']")
            .outerHTML.indexOf(event.target.outerHTML) != -1
        ) {
          /* 显示回帖内容 */
          $jq("#comiis_foot_menu_beautify").hide();
          $jq("#comiis_foot_menu_beautify_big").show();
          $jq("#needmessage").focus();
        } else if (document.querySelector("#popup2-popmenu")) {
          /* 当前存在弹出层 */
          return;
        } else if (
          window.event &&
          !Utils.checkUserClickInNode(
            document.querySelector("#comiis_foot_menu_beautify_big")
          )
        ) {
          /* 不在区域内 */
          $jq("#comiis_foot_menu_beautify").show();
          $jq("#comiis_foot_menu_beautify_big").hide();
          if (
            $jq("#comiis_foot_menu_beautify_big").attr("data-model") == "reply"
          ) {
            /* 当前编辑框模式为回复某人评论 */
            $jq("#comiis_foot_menu_beautify_big").attr("data-model", "comment");
            $jq("#fastpostsubmitline input").val("发表");
            $jq("#comiis_foot_menu_beautify_big .fastpostform_new a").attr(
              "href",
              form_url
            );
            $jq(
              "#comiis_foot_menu_beautify_big .reply_area .reply_user_content"
            ).text("");
            $jq(
              "#comiis_foot_menu_beautify_big .reply_area .reply_user_content"
            ).hide();
            $jq(
              "#comiis_foot_menu_beautify_big .reply_area .reply_user_content"
            ).attr("data-reply-url", "");
            $jq(
              "#comiis_foot_menu_beautify_big .reply_area .reply_user_content"
            ).attr("data-reply-action", "");
            $jq(
              "#comiis_foot_menu_beautify_big .reply_area .reply_user_content"
            ).attr("data-reply-serialize", "");
            if (window.tempReplyBtnNode) {
              window.tempReplyBtnNode.attr(
                "data-text",
                $jq("#needmessage").val()
              );
              $jq("#needmessage").val("");
              $jq(
                '#comiis_foot_menu_beautify_big li[data-attr="发表"] input'
              ).attr("data-text", "false");
              $jq("#comiis_foot_menu_beautify li[data-attr='回帖'] input").attr(
                "placeholder",
                "发帖千百度，文明第一步"
              );
            }
          }
        }
      });
      $jq("#comiis_foot_menu_beautify_big .menu_body").hide();
      $jq("#comiis_foot_menu_beautify_big .menu_icon a").on(
        "click",
        function (event) {
          /* 菜单图标点击事件 */
          if (
            $jq(this).attr("class") &&
            $jq(this).attr("class").indexOf("f_0") != -1
          ) {
            $jq("#comiis_foot_menu_beautify_big .menu_body").hide();
            $jq("#comiis_foot_menu_beautify_big .menu_icon a").removeClass(
              "f_0"
            );
          } else {
            $jq("#comiis_foot_menu_beautify_big .menu_body").show();
            $jq("#comiis_foot_menu_beautify_big .menu_icon a").removeClass(
              "f_0"
            );
            $jq(this).addClass("f_0");
          }
        }
      );

      $jq("#comiis_foot_menu_beautify_big .menu_icon a.comiis_pictitle").on(
        "click",
        function (event) {
          /* 菜单-图片点击事件 */
          $jq(
            "#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab"
          ).hide();
          $jq(
            "#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab"
          ).hide();

          $jq(
            "#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab"
          ).show();
        }
      );
      $jq("#comiis_foot_menu_beautify_big .menu_icon a.comiis_smile").on(
        "click",
        function (event) {
          /* 菜单-表情点击事件 */
          $jq(
            "#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab"
          ).hide();
          $jq(
            "#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab"
          ).hide();

          $jq(
            "#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab"
          ).show();
          let smileDOM = $jq(
            "#comiis_foot_menu_beautify_big .menu_body .comiis_bqbox"
          );
          if (smileDOM.attr("data-isLoaded") != 1) {
            smileDOM.attr("data-isLoaded", 1);
            $jq.each(smileDOM.find("img"), (index, item) => {
              let data_src = item.getAttribute("data-src");
              if (data_src) {
                item.setAttribute("src", data_src);
              }
            });
          }
        }
      );
      $jq("#comiis_foot_menu_beautify_big .menu_icon a.commis_insert_bbs").on(
        "click",
        function (event) {
          /* 菜单-插入点击事件 */
          $jq(
            "#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab"
          ).hide();
          $jq(
            "#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab"
          ).hide();

          $jq(
            "#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab"
          ).show();
          let insertBBSDOM = $jq(
            "#comiis_foot_menu_beautify_big .menu_body #comiis_bbs_tab"
          );
        }
      );
      $jq("#comiis_foot_menu_beautify_big #comiis_smilies_key li").on(
        "click",
        function (event) {
          /* 菜单-表情-点击事件 */
          $jq(
            "#comiis_foot_menu_beautify_big #comiis_smilies_key li a"
          ).removeClass();
          $jq(this).find("a").addClass("bg_f b_l b_r");
          $jq(
            "#comiis_post_tab div.swiper-wrapper.bqbox_c.comiis_optimization .swiper-slide"
          )
            .hide()
            .eq($jq(this).index())
            .fadeIn();
        }
      );

      $jq(
        "#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key li"
      ).on("click", function (event) {
        /* 菜单-图片-点击事件 */
        /* let currentDOM = $jq(this); */
        $jq(
          "#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key li"
        ).removeClass("bg_f");
        $jq(this).addClass("bg_f");
        $jq(
          "#comiis_foot_menu_beautify_big #comiis_pictitle_tab div.comiis_upbox"
        )
          .hide()
          .eq($jq(this).index())
          .fadeIn();
      });

      $jq(".removeChartBedAccount").on("click", function (event) {
        /* 删除 点击事件 */
        event.preventDefault();
        let node = $jq(this);
        popup2.confirm({
          text: "<p>确定删除保存的账号和密码？</p>",
          ok: {
            callback: () => {
              eval(node.attr("data-key")).forEach((item) => {
                console.log("删除");
                GM_deleteValue(item);
              });
              popup2.closeConfirm();
              popup2.toast("删除成功");
            },
          },

          mask: true,
          only: true,
        });
      });

      function chartbedWaterMarkEvent() {
        /* 图床-水印-设置的各种事件 */

        $jq("label[for='autowatermarkdefault']").on("click", function () {
          let obj = $jq(this);
          let code_obj = obj.find("code");
          if (code_obj.hasClass("comiis_checkbox_close")) {
            /* 开 */
            code_obj.removeClass("comiis_checkbox_close");
            GM_setValue("chartBedWaterMarkAutoDefault", true);
          } else {
            /* 关 */
            code_obj.addClass("comiis_checkbox_close");
            GM_setValue("chartBedWaterMarkAutoDefault", false);
          }
        });
        $jq("label[for='addwatermark']").on("click", function () {
          let obj = $jq(this);
          let code_obj = obj.find("code");
          if (code_obj.hasClass("comiis_checkbox_close")) {
            /* 开 */
            code_obj.removeClass("comiis_checkbox_close");
            GM_setValue("chartBedAddWaterMark", true);
          } else {
            /* 关 */
            code_obj.addClass("comiis_checkbox_close");
            GM_setValue("chartBedAddWaterMark", false);
          }
        });
        $jq("#watermarktext").on("input propertychange", function () {
          GM_setValue("chartBedWaterMarkText", $jq(this).val());
        });
        $jq("#watermarkfontcolor").on("input propertychange", function () {
          let value = $jq(this).val();
          GM_setValue("chartBedWaterMarkFontColor", value);
        });
        $jq("#watermarkglobalalpha").on("input propertychange", function () {
          let value = parseFloat($jq(this).val());
          let max = parseFloat($jq(this).attr("max"));
          let min = parseFloat($jq(this).attr("min"));
          if (isNaN(value)) {
            value = 0.7;
          } else if (value > max) {
            value = 1;
          } else if (value < min) {
            value = 0;
          }
          GM_setValue("chartBedWaterGlobalAlpha", value);
        });
        $jq("#watermarkfontsize").on("input propertychange", function () {
          let value = parseFloat($jq(this).val());
          let max = parseFloat($jq(this).attr("max"));
          let min = parseFloat($jq(this).attr("min"));
          if (isNaN(value)) {
            value = 16;
          } else if (value > max) {
            value = 100;
          } else if (value < min) {
            value = 1;
          }
          GM_setValue("chartBedWaterMarkFontSize", value);
        });
        $jq("#watermarkxmovedistance").on("input propertychange", function () {
          let value = parseFloat($jq(this).val());
          let max = parseFloat($jq(this).attr("max"));
          let min = parseFloat($jq(this).attr("min"));
          if (isNaN(value)) {
            value = 30;
          } else if (value > max) {
            value = 300;
          } else if (value < min) {
            value = 1;
          }
          GM_setValue("chartBedWaterXMoveDistance", value);
        });
        $jq("#watermarkymovedistance").on("input propertychange", function () {
          let value = parseFloat($jq(this).val());
          let max = parseFloat($jq(this).attr("max"));
          let min = parseFloat($jq(this).attr("min"));
          if (isNaN(value)) {
            value = 30;
          } else if (value > max) {
            value = 300;
          } else if (value < min) {
            value = 30;
          }
          GM_setValue("chartBedWaterYMoveDistance", value);
        });
        $jq("#watermarkrotationangle").on("input propertychange", function () {
          let value = parseInt($jq(this).val());
          let max = parseInt($jq(this).attr("max"));
          let min = parseInt($jq(this).attr("min"));
          if (isNaN(value)) {
            value = 45;
          } else if (value > max) {
            value = 360;
          } else if (value < min) {
            value = -360;
          }
          GM_setValue("chartBedWaterMarkRotationAngle", value);
        });
        if (GM_getValue("chartBedAddWaterMark")) {
          /* 初始化默认值 */
          $jq("label[for='addwatermark'] code").removeClass(
            "comiis_checkbox_close"
          );
        }
        if (GM_getValue("chartBedWaterMarkAutoDefault")) {
          /* 初始化默认值 */
          $jq("label[for='autowatermarkdefault'] code").removeClass(
            "comiis_checkbox_close"
          );
        }
        $jq("#watermarktext")
          .val(GM_getValue("chartBedWaterMarkText", "MT论坛"))
          .trigger("propertychange");
        $jq("#watermarkfontsize")
          .val(GM_getValue("chartBedWaterMarkFontSize", 16))
          .trigger("propertychange");
        $jq("#watermarkfontcolor")
          .val(GM_getValue("chartBedWaterMarkFontColor", "#000000"))
          .trigger("propertychange");
        $jq("#watermarkglobalalpha")
          .val(GM_getValue("chartBedWaterGlobalAlpha", 0.7))
          .trigger("propertychange");
        $jq("#watermarkxmovedistance")
          .val(GM_getValue("chartBedWaterXMoveDistance", 30))
          .trigger("propertychange");
        $jq("#watermarkymovedistance")
          .val(GM_getValue("chartBedWaterYMoveDistance", 30))
          .trigger("propertychange");
        $jq("#watermarkrotationangle")
          .val(GM_getValue("chartBedWaterMarkRotationAngle", 45))
          .trigger("propertychange");
      }

      Utils.tryCatch().run(mobile.editorChartBed);
      Utils.tryCatch().run(mobile.quickUBB.insertQuickReplyUBB);
      Utils.tryCatch().run(
        mobileRepeatFunc.editorOptimizationOffDefaultBottomReplyBtnClickEvent
      );
      Utils.tryCatch().run(chartbedWaterMarkEvent);
    },
    /**
     * 编辑器优化-完整版
     */
    editorOptimizationFull() {
      if (
        !MT_CONFIG.methodRunCheck(
          [
            MT_CONFIG.urlRegexp.postForum,
            MT_CONFIG.urlRegexp.editForum,
            MT_CONFIG.urlRegexp.replyForum,
          ],
          "v50"
        )
      ) {
        return;
      }
      Utils.tryCatch().run(mobile.editorChartBed);
      Utils.tryCatch().run(mobile.previewPostForum);
      Utils.tryCatch().run(mobile.quickUBB.insertReplayUBB);
      GM_addStyle(`
      .f_c, .f_c a, .ntc_body{
          color: #000000 !important;
      }
      input::placeholder,
      textarea::placeholder {
          color: #cfcfcf;
      }
      #needsubject::placeholder{
          font-weight: bold;
      }
      #needmessage::placeholder{

      }
      #postform #comiis_mh_sub{
          height: 60px;
          display: flex;
          align-items: center;
      }
      #postform #comiis_post_tab{
          display: inherit;
          width: 100%;
      }
      #postform .comiis_sendbtn{
          padding:0 12px;
          display: flex !important;
          -webkit-box-align: center;
          align-items: center;
      }
      #postform .f_f{
          color: #ffffff !important;
      }
      #postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:link, 
      #postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:visited,
      #postform #comiis_post_tab .bg_f.b_b.cl:nth-child(2) .comiis_atlist a:hover{
          color: #333333 !important;
      }
      #postform .comiis_post_from .comiis_post_ico.comiis_minipost_icot{
          position: fixed;
          display: inline-table;
          z-index: 90;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          overflow: hidden;
          padding: 0;
      }
      #postform .comiis_post_from #comiis_post_tab .comiis_bqbox{
          height:200px;
      }
      #postform .comiis_post_from #comiis_post_tab .comiis_smiley_box{
          height:150px;
      }
      /* #postform .comiis_post_from #comiis_post_tab .comiis_input_style.cl:nth-child(1){
          height:345px;
      } */
      #postform .comiis_post_from #comiis_post_tab .comiis_input_style .comiis_post_urlico{
          overflow-y: auto;
          height: 110px;
      }
      #postform .comiis_post_from #comiis_post_tab .comiis_smiley_box .comiis_optimization{
          display: block;
          overflow-y: auto;
          height: 100%;
      }
      #postform #comiis_post_tab .comiis_input_style .comiis_xifont{   
          width: -webkit-fill-available;
      }
      #postform #comiis_post_tab .comiis_input_style .comiis_xifont i.comiis_font{   
          font-size: 16px;
          line-height: inherit;
          padding-top: 0px;
      }
      #postform #comiis_post_tab .comiis_input_style .styli_h10{
          display:none;
      }
      .gm_plugin_chartbed .comiis_chartbed_luntan,
      .gm_plugin_chartbed .comiis_chartbed_kggzs,
      .gm_plugin_chartbed .comiis_chartbed_hello,
      .gm_plugin_chartbed .comiis_chartbed_z4a,
      .gm_plugin_chartbed .comiis_chartbed_mt,
      .gm_plugin_chartbed .comiis_chartbed_history{
          height: 140px;
          overflow-y: auto;
          flex-direction: column;
      }
      #comiis_pictitle_key {
          display: -webkit-box;
          top: 0px;
          left: 0px;
          height: 42px;
          line-height: 42px;
          overflow: hidden;
          overflow-x: auto;
          background: #f8f8f8;
      }
      #comiis_pictitle_key a {
          color: #333 !important;
          padding: 0px 10px;
      }
      #comiis_mh_sub{
          height: auto !important;
      }
      #comiis_mh_sub .swiper-wrapper.comiis_post_ico{
          flex-flow: wrap;
      }
      #comiis_mh_sub a{
          margin:5px 0px;
      }
      #comiis_post_tab .comiis_over_box{
          max-height: 225px;
      }
      @media screen and (max-width: 350px) {
        .comiis_bqbox .bqbox_c li {
          width: 14.5%;
        }
      }
      @media screen and (min-width: 350px) and (max-width: 400px) {
        .comiis_bqbox .bqbox_c li {
          width: 12.5%;
        }
      }
      @media screen and (min-width: 400px) and (max-width: 450px) {
        .comiis_bqbox .bqbox_c li {
          width: 11%;
        }
      }
      @media screen and (min-width: 450px) and (max-width: 500px) {
        .comiis_bqbox .bqbox_c li {
          width: 10%;
        }
      }
      @media screen and (min-width: 500px) and (max-width: 550px) {
        .comiis_bqbox .bqbox_c li {
          width: 9.5%;
        }
      }
      @media screen and (min-width: 550px) and (max-width: 600px) {
        .comiis_bqbox .bqbox_c li {
          width: 9%;
        }
      }
      @media screen and (min-width: 600px) and (max-width: 650px) {
        .comiis_bqbox .bqbox_c li {
          width: 8.5%;
        }
      }
      @media screen and (min-width: 650px) and (max-width: 700px) {
        .comiis_bqbox .bqbox_c li {
          width: 8%;
        }
      }
      @media screen and (min-width: 700px) and (max-width: 750px) {
        .comiis_bqbox .bqbox_c li {
          width: 7.5%;
        }
      }
      @media screen and (min-width: 750px) and (max-width: 800px) {
        .comiis_bqbox .bqbox_c li {
          width: 7%;
        }
      }
      @media screen and (min-width: 800px) and (max-width: 850px) {
        .comiis_bqbox .bqbox_c li {
          width: 6.5%;
        }
      }
      @media screen and (min-width: 850px) and (max-width: 1200px) {
        .comiis_bqbox .bqbox_c li {
          width: 6%;
        }
      }
      @media screen and (min-width: 1200px){
        .comiis_bqbox .bqbox_c li {
          width: 4.5%;
        }
      }
      `);
      $jq(".comiis_scrollTop_box").parent().hide();
      $jq("#postform .comiis_post_from.mt15").css(
        "cssText",
        "margin-top:0px !important"
      );
      let comiis_post_tab = $jq("#postform .comiis_post_from #comiis_post_tab");
      $jq("#postform .comiis_post_from .comiis_post_ico").append(
        comiis_post_tab
      );
      comiis_post_tab.remove();
      unsafeWindow.textarea_scrollHeight = () => {};
      $jq(".comiis_btnbox").hide();

      if ($jq(".comiis_scrollTop_box").length) {
        $jq("#htmlon").parent().append(`
                <li class="comiis_styli_m f15 comiis_flex b_b">
                    <div class="flex">发表帖子</div>
                    <div class="styli_r">
                        <input type="checkbox" name="usesig" value="1" class="comiis_checkbox_key">
                        <label for="" class="wauto">
                            <code class="bg_f b_ok comiis_checkbox comiis_choose_post comiis_checkbox_close"></code>
                        </label>
                    </div>	
                </li>
                <li class="comiis_styli_m f15 comiis_flex b_b">
                    <div class="flex">发投票</div>
                    <div class="styli_r">
                        <input type="checkbox" name="usesig" value="1" class="comiis_checkbox_key">
                        <label for="" class="wauto">
                            <code class="bg_f b_ok comiis_checkbox comiis_choose_vote comiis_checkbox_close"></code>
                        </label>
                    </div>	
                </li>
                `);
        if (
          $jq(
            ".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')"
          ).attr("class") != "f_c"
        ) {
          $jq(".comiis_checkbox.comiis_choose_post").removeClass(
            "comiis_checkbox_close"
          );
        } else {
          $jq(".comiis_checkbox.comiis_choose_vote").removeClass(
            "comiis_checkbox_close"
          );
        }
        $jq(".comiis_checkbox.comiis_choose_post").on("click", function () {
          let obj = $jq(this);
          obj.addClass("comiis_checkbox_close");
          $jq(".comiis_checkbox.comiis_choose_vote").addClass(
            "comiis_checkbox_close"
          );
          obj.removeClass("comiis_checkbox_close");
          window.location.href = window.location.href.replace("&special=1", "");
        });
        $jq(".comiis_checkbox.comiis_choose_vote").on("click", function () {
          let obj = $jq(this);
          obj.addClass("comiis_checkbox_close");
          $jq(".comiis_checkbox.comiis_choose_post").addClass(
            "comiis_checkbox_close"
          );
          obj.removeClass("comiis_checkbox_close");
          window.location.href = window.location.href + "&special=1";
        });
      }

      let btn_del = $jq(".comiis_btnbox .comiis_btn.bg_del");
      let btn_save = $jq(".comiis_btnbox button#postsubmit:contains('保存')");
      let btn_post = $jq(".comiis_btnbox button#postsubmit:contains('发表')");
      let btn_save_caogao = $jq(
        ".comiis_btnbox button#postsubmit em:contains('保存草稿')"
      );
      let btn_reply = $jq(".comiis_btnbox button#postsubmit:contains('回复')");
      GM_addStyle(`
          #comiis_head .header_y{
              display: flex;
              align-content: center;
              align-items: center;
              justify-content: flex-end;
              height: 100%;
          }
          #comiis_head .header_y input{
              border: transparent;
              background: transparent;
              text-align: center;
              margin: 0px 5px;
          }
          #comiis_head .header_y input[value="删除"]{
              color: #dd0000;
          }
          #comiis_head .header_y input[value="保存"]{
              color: #b0ff6a;
          }
          #comiis_head .header_y input[value="保存草稿"]{
              color: #FF9900;
          }
          #comiis_head .header_y input[value="发表"]{
              color: #b0ff6a;
          }
          #comiis_head .header_y input[value="回复"]{
              color: #b0ff6a;
          }
          #comiis_post_tab{
              color:rgb(0,0,0);
          }
          .gm_plugin_chartbed .delImg a,
          .gm_plugin_chartbed .p_img a{
              padding: 0;
          }
          .gm_plugin_chartbed .delImg a i{
              line-height: inherit;
          }
          #filedata,
          #filedata_kggzs,
          #filedata_hello,
          #filedata_kggzs,
          #filedata_mt{
              display:none;
          }
      `);
      if (btn_del.length) {
        $jq("#comiis_head .header_y").append(
          $jq(`<input class="new_btn_del" type="button" value="删除">`)
        );
        $jq("#comiis_head .header_y .new_btn_del").on("click", function () {
          popup2.confirm({
            text: "<p>是否删除帖子?</p>",
            mask: true,
            ok: {
              callback: () => {
                popup2.closeMask();
                popup2.closeConfirm();
                comiis_delthread();
              },
            },
          });
        });
      }
      if (btn_save_caogao.length) {
        $jq("#comiis_head .header_y").append(
          $jq(
            `<input class="new_btn_save_temp" type="button" value="保存草稿">`
          )
        );
        var editHistoryText = GM_getValue("editHistoryText", "");
        var editHistorySubjectText = GM_getValue("editHistorySubjectText", "");
        $jq("#needmessage")?.on("input propertychange", function () {
          GM_setValue("editHistoryText", $jq(this)?.val());
        });
        $jq("#needsubject")?.on("input propertychange", function () {
          GM_setValue("editHistorySubjectText", $jq(this)?.val());
        });
        if (
          (editHistoryText || editHistorySubjectText) &&
          (editHistoryText !== "" || editHistorySubjectText !== "") &&
          $jq(
            ".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')"
          ).attr("class") != "f_c" &&
          editHistoryText !== $jq("#needmessage").text() &&
          editHistorySubjectText !== $jq("#needmessage")
        ) {
          popup2.confirm({
            text: "<p>存在历史写入的数据，是否恢复到编辑器里？</p>",
            ok: {
              text: "恢复",
              callback: () => {
                if (
                  $jq("#needmessage")?.val() === "" ||
                  $jq("#needsubject")?.val() === ""
                ) {
                  $jq("#needmessage")?.val(editHistoryText);
                  $jq("#needsubject")?.val(editHistorySubjectText);
                  popup2.closeConfirm();
                  popup2.toast("恢复成功");
                } else {
                  popup2.confirm({
                    text: "<p>当前编辑器里存在数据，是否覆盖？</p>",
                    callback: () => {
                      $jq("#needmessage")?.val(editHistoryText);
                      $jq("#needsubject")?.val(editHistorySubjectText);
                      popup2.closeConfirm();
                      popup2.toast("覆盖成功");
                    },
                    mask: true,
                    only: true,
                  });
                }
              },
            },
            mask: true,
            only: true,
            other: {
              enable: true,
              text: "删除该数据",
              callback: () => {
                GM_deleteValue("editHistoryText");
                GM_deleteValue("editHistorySubjectText");
                popup2.closeConfirm();
                popup2.toast("删除成功");
              },
            },
          });
        }

        $jq("#comiis_head .header_y .new_btn_save_temp").on(
          "click",
          function () {
            btn_save_caogao.click();
          }
        );
      }
      if (btn_save.length) {
        $jq("#comiis_head .header_y").append(
          $jq(`<input class="new_btn_save" type="button" value="保存">`)
        );
        $jq("#comiis_head .header_y .new_btn_save").on("click", function () {
          btn_save.click();
        });
      }
      if (btn_post.length) {
        $jq("#comiis_head .header_y").append(
          $jq(`<input class="new_btn_post" type="button" value="发表">`)
        );
        $jq("#comiis_head .header_y .new_btn_post").on("click", function () {
          $jq("#postsave").val(0);
          btn_post.click();
        });
      }
      if (btn_reply.length) {
        $jq("#comiis_head .header_y").append(
          $jq(`<input class="new_btn_reply" type="button" value="回复">`)
        );
        $jq("#comiis_head .header_y .new_btn_reply").on("click", function () {
          btn_reply.click();
        });
      }

      var recordHeight = 0;
      Utils.waitNode(
        "#postform > div > div.comiis_post_ico.comiis_minipost_icot"
      ).then((nodeList) => {
        Utils.mutationObserver(nodeList[0], {
          callback: (mutations) => {
            var $tar = document.querySelector(
              "#postform > div > div.comiis_post_ico.comiis_minipost_icot"
            );
            let height = window
              .getComputedStyle($tar)
              .getPropertyValue("height");
            if (height === recordHeight) {
              return;
            }
            recordHeight = height;

            let needMessageSeeHeight =
              document.documentElement.clientHeight -
              document
                .querySelector(
                  "#postform > div > div.comiis_post_ico.comiis_minipost_icot"
                )
                .getBoundingClientRect().height -
              document.querySelector("#needmessage").getBoundingClientRect()
                .top;
            if (needMessageSeeHeight - 5 < 100) {
              $jq("#needmessage").css("height", "100px");
              $jq(
                ".gm_plugin_previewpostforum_html.double-preview .comiis_over_box"
              ).css("height", "100px");
            } else {
              console.log(
                "监测到底部菜单高度改变，修改输入框和预览框高度 ",
                needMessageSeeHeight - 5
              );
              $jq("#needmessage").css(
                "height",
                needMessageSeeHeight - 5 + "px"
              );
              $jq(
                ".gm_plugin_previewpostforum_html.double-preview .comiis_over_box"
              ).css("height", needMessageSeeHeight - 5 + "px");
            }
          },
          config: {
            childList: true,
            /* 属性的变动 */
            attributes: true,
            /* 节点内容或节点文本的变动 */
            characterData: true,
            /* 是否将观察器应用于该节点的所有后代节点 */
            subtree: true,
          },
        });
      });

      $jq(window).on("resize", function (e) {
        let needMessageSeeHeight =
          document.documentElement.clientHeight -
          document
            .querySelector(
              "#postform > div > div.comiis_post_ico.comiis_minipost_icot"
            )
            .getBoundingClientRect().height -
          document.querySelector("#needmessage").getBoundingClientRect().top;
        if (needMessageSeeHeight - 5 < 100) {
          $jq("#needmessage").css("height", "100px");
          $jq(
            ".gm_plugin_previewpostforum_html.double-preview .comiis_over_box"
          ).css("height", "100px");
        } else {
          console.log("设置输入框、预览高度", needMessageSeeHeight - 5);
          $jq("#needmessage").css("height", needMessageSeeHeight - 5 + "px");
          $jq(
            ".gm_plugin_previewpostforum_html.double-preview .comiis_over_box"
          ).css("height", needMessageSeeHeight - 5 + "px");
        }
      });
      let before_image_luntan = $jq(
        ".gm_plugin_chartbed .comiis_over_box.comiis_input_style #imglist"
      );
      GM_addStyle(`
      #imglist_settings button{
        font-size: 13.333px;
        color: #9baacf;
        outline: none;
        border: none;
        height: 35px;
        width: 80px;
        border-radius: 10px;
        box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
        font-weight: 800;
        line-height: 40px;
        background: #efefef;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      #imglist_settings button:active{
        box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #ffffff !important;
        color: #638ffb !important;
      }
      `);
      $jq(".gm_plugin_chartbed").append(
        $jq(`
                <div class='comiis_upbox comiis_chartbed_luntan'></div>
                <div class='comiis_upbox comiis_chartbed_kggzs' style='display: none;'>
                    <ul id="imglist_kggzs" class="comiis_post_imglist cl">
                        <li class="up_btn">
                            <a href="javascript:;" class="bg_e b_ok f_d">
                                <i class="comiis_font"></i>
                            </a>
                            <input type="file" name="Filedata" id="filedata_kggzs" accept="image/*" multiple>
                        </li>				
                    </ul>
                </div>
                <div class='comiis_upbox comiis_chartbed_hello' style='display: none;'>
                    <ul id="imglist_hello" class="comiis_post_imglist cl">
                        <li class="up_btn">
                            <a href="javascript:;" class="bg_e b_ok f_d">
                                <i class="comiis_font"></i>
                                
                            </a>
                            <input type="file" name="Filedata" id="filedata_hello" accept="image/*" multiple>
                        </li>				
                    </ul>
                </div>
                <div class='comiis_upbox comiis_chartbed_z4a' style='display: none;'>
                    <ul id="imglist_z4a" class="comiis_post_imglist cl">
                        <li class="up_btn">
                            <a href="javascript:;" class="bg_e b_ok f_d">
                                <i class="comiis_font"></i>
                                
                            </a>
                            <input type="file" name="Filedata" id="filedata_z4a" accept="image/*" multiple>
                        </li>				
                    </ul>
                </div>
                <div class="comiis_upbox comiis_chartbed_mt" style="display: none;">
                  <ul id="imglist_mt" class="comiis_post_imglist cl">
                      <li class="up_btn">
                          <a href="javascript:;" class="bg_e b_ok f_d">
                              <i class="comiis_font"></i>
                              
                          </a>
                          <input type="file" name="Filedata" id="filedata_mt" accept="image/*">
                      </li>				
                  </ul>
                </div>
                <div class='comiis_upbox comiis_chartbed_history' style='display: none;'>
                    <ul id="imglist_history" class="comiis_post_imglist cl">
                               
                    </ul>
                </div>
                <div class='comiis_upbox comiis_chartbed_settings' style='display: none;height: 170px;overflow-y: auto;'>
                    <ul id="imglist_settings" class="cl">
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex" style="text-align: left;">删除已保存的康哥图床的账号</div>
                            <div class="styli_r">
                                <button class="removeChartBedAccount" data-key="['KggzsChartBedUser','KggzsChartBedPwd']">点我删除</button>
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex" style="text-align: left;">删除已保存的Hello图床的账号</div>
                            <div class="styli_r">
                              <button class="removeChartBedAccount" data-key="['HelloChartBedUser','HelloChartBedPwd']">点我删除</button>
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex" style="text-align: left;">删除已保存的Z4A图床的账号</div>
                            <div class="styli_r">
                              <button class="removeChartBedAccount" data-key="['Z4AChartBedUser','Z4AChartBedPwd']">点我删除</button>
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex">水印</div>
                            <div class="styli_r">
                                <input type="checkbox" name="addwatermark" id="addwatermark" value="1" class="comiis_checkbox_key" checked="checked" style="display: none;">
                                <label for="addwatermark" class="wauto"><code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code></label>
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex">自动添加水印并上传</div>
                            <div class="styli_r">
                                <input type="checkbox" name="autowatermarkdefault" id="autowatermarkdefault" value="1" class="comiis_checkbox_key" checked="checked" style="display: none;">
                                <label for="autowatermarkdefault" class="wauto"><code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code></label>
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex">文字</div>
                            <div class="styli_r">
                                <input type="text" name="watermarktext" id="watermarktext" placeholder="请输入需要添加水印的文字">
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex">颜色</div>
                            <div class="styli_r">
                                <input type="color" style="width: 60px;border-radius: unset;padding: unset;margin-right: 32px;" name="watermarkfontcolor" id="watermarkfontcolor">
                                
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex">大小</div>
                            <div class="styli_r">
                                <input type="number" style="width:60px;" name="watermarkfontsize" id="watermarkfontsize" placeholder="单位px" value="" min="1" max="300" step="1">
                                
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex">透明度</div>
                            <div class="styli_r">
                                <input type="number" style="width:60px;" name="watermarkglobalalpha" id="watermarkglobalalpha" placeholder="0~1" value="" min="0" max="1" step="0.01">
                                
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex">左右间距</div>
                            <div class="styli_r">
                                <input type="number" style="width:60px;" name="watermarkxmovedistance" id="watermarkxmovedistance" placeholder="1~200" value="" min="1" max="200" step="1">
                                
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex">上下间距</div>
                            <div class="styli_r">
                                <input type="number" style="width:60px;" name="watermarkymovedistance" id="watermarkymovedistance" placeholder="1~200" value="" min="1" max="200" step="1">
                                
                            </div>	
                        </li>
                        <li class="comiis_styli_m f15 comiis_flex b_b">
                            <div class="flex">旋转角度</div>
                            <div class="styli_r">
                                <input type="number" style="width:60px;" name="watermarkrotationangle" id="watermarkrotationangle" placeholder="-360~360" value="" min="-360" max="360" step="1">
                                
                            </div>	
                        </li>
                    </ul>
                </div>
                <div class="bqbox_t">
                    <ul id="comiis_pictitle_key">
                        <li class="bg_f" id="comiis_pictitle_tab_n_1"><a href="javascript:;" class="">论坛</a></li>
                        <li class="" id="comiis_pictitle_tab_n_2"><a href="javascript:;" class="">康哥图床</a></li>
                        <li class="" id="comiis_pictitle_tab_n_3"><a href="javascript:;" class="">Hello图床</a></li>
                        <li class="" id="comiis_pictitle_tab_n_4"><a href="javascript:;" class="">Z4A图床</a></li>
                        <li class="" id="comiis_pictitle_tab_n_5"><a href="javascript:;" class="">MT图床</a></li>
                        <li class="" id="comiis_pictitle_tab_n_6" data-history><a href="javascript:;" class="">历史图片</a></li>
                        <li class="" id="comiis_pictitle_tab_n_7" data-setting><a href="javascript:;" class="">设置</a></li>
                    </ul>
                </div>`)
      );
      $jq(".gm_plugin_chartbed .comiis_chartbed_luntan").append(
        before_image_luntan
      );

      $jq("#filedata").attr("multiple", true); /* 添加上传多个文件功能 */
      $jq(".gm_plugin_chartbed .comiis_over_box.comiis_input_style").remove();
      $jq("#comiis_pictitle_key li").on("click", function () {
        /* 图床-各个菜单点击事件 */
        $jq("#comiis_pictitle_key li").removeClass("bg_f");
        $jq(this).addClass("bg_f");
        $jq(".gm_plugin_chartbed .comiis_upbox")
          .hide()
          .eq($jq(this).index())
          .fadeIn();
      });

      function setSettingViewEvent() {
        /* 图床-设置的各种事件 */
        $jq(".removeChartBedAccount").on("click", function (event) {
          event.preventDefault();
          let node = $jq(this);
          popup2.confirm({
            text: "<p>确定删除保存的账号和密码？</p>",
            ok: {
              callback: () => {
                eval(node.attr("data-key")).forEach((item) => {
                  console.log("删除");
                  GM_deleteValue(item);
                });
                popup2.closeConfirm();
                popup2.toast("删除成功");
              },
            },

            mask: true,
            only: true,
          });
        });
        $jq("label[for='autowatermarkdefault']").on("click", function () {
          let obj = $jq(this);
          let code_obj = obj.find("code");
          if (code_obj.hasClass("comiis_checkbox_close")) {
            /* 开 */
            code_obj.removeClass("comiis_checkbox_close");
            GM_setValue("chartBedWaterMarkAutoDefault", true);
          } else {
            /* 关 */
            code_obj.addClass("comiis_checkbox_close");
            GM_setValue("chartBedWaterMarkAutoDefault", false);
          }
        });
        $jq("label[for='addwatermark']").on("click", function () {
          let obj = $jq(this);
          let code_obj = obj.find("code");
          if (code_obj.hasClass("comiis_checkbox_close")) {
            /* 开 */
            code_obj.removeClass("comiis_checkbox_close");
            GM_setValue("chartBedAddWaterMark", true);
          } else {
            /* 关 */
            code_obj.addClass("comiis_checkbox_close");
            GM_setValue("chartBedAddWaterMark", false);
          }
        });
        $jq("#watermarktext").on("input propertychange", function () {
          GM_setValue("chartBedWaterMarkText", $jq(this).val());
        });
        $jq("#watermarkfontcolor").on("input propertychange", function () {
          let value = $jq(this).val();
          GM_setValue("chartBedWaterMarkFontColor", value);
        });
        $jq("#watermarkglobalalpha").on("input propertychange", function () {
          let value = parseFloat($jq(this).val());
          let max = parseFloat($jq(this).attr("max"));
          let min = parseFloat($jq(this).attr("min"));
          if (isNaN(value)) {
            value = 0.7;
          } else if (value > max) {
            value = 1;
          } else if (value < min) {
            value = 0;
          }
          GM_setValue("chartBedWaterGlobalAlpha", value);
        });
        $jq("#watermarkfontsize").on("input propertychange", function () {
          let value = parseFloat($jq(this).val());
          let max = parseFloat($jq(this).attr("max"));
          let min = parseFloat($jq(this).attr("min"));
          if (isNaN(value)) {
            value = 16;
          } else if (value > max) {
            value = 100;
          } else if (value < min) {
            value = 1;
          }
          GM_setValue("chartBedWaterMarkFontSize", value);
        });
        $jq("#watermarkxmovedistance").on("input propertychange", function () {
          let value = parseFloat($jq(this).val());
          let max = parseFloat($jq(this).attr("max"));
          let min = parseFloat($jq(this).attr("min"));
          if (isNaN(value)) {
            value = 30;
          } else if (value > max) {
            value = 300;
          } else if (value < min) {
            value = 1;
          }
          GM_setValue("chartBedWaterXMoveDistance", value);
        });
        $jq("#watermarkymovedistance").on("input propertychange", function () {
          let value = parseFloat($jq(this).val());
          let max = parseFloat($jq(this).attr("max"));
          let min = parseFloat($jq(this).attr("min"));
          if (isNaN(value)) {
            value = 30;
          } else if (value > max) {
            value = 300;
          } else if (value < min) {
            value = 30;
          }
          GM_setValue("chartBedWaterYMoveDistance", value);
        });
        $jq("#watermarkrotationangle").on("input propertychange", function () {
          let value = parseInt($jq(this).val());
          let max = parseInt($jq(this).attr("max"));
          let min = parseInt($jq(this).attr("min"));
          if (isNaN(value)) {
            value = 45;
          } else if (value > max) {
            value = 360;
          } else if (value < min) {
            value = -360;
          }
          GM_setValue("chartBedWaterMarkRotationAngle", value);
        });
        if (GM_getValue("chartBedAddWaterMark")) {
          /* 初始化默认值 */
          $jq("label[for='addwatermark'] code").removeClass(
            "comiis_checkbox_close"
          );
        }
        if (GM_getValue("chartBedWaterMarkAutoDefault")) {
          /* 初始化默认值 */
          $jq("label[for='autowatermarkdefault'] code").removeClass(
            "comiis_checkbox_close"
          );
        }
        $jq("#watermarktext")
          .val(GM_getValue("chartBedWaterMarkText", "MT论坛"))
          .trigger("propertychange");
        $jq("#watermarkfontsize")
          .val(GM_getValue("chartBedWaterMarkFontSize", 16))
          .trigger("propertychange");
        $jq("#watermarkfontcolor")
          .val(GM_getValue("chartBedWaterMarkFontColor", "#000000"))
          .trigger("propertychange");
        $jq("#watermarkglobalalpha")
          .val(GM_getValue("chartBedWaterGlobalAlpha", 0.7))
          .trigger("propertychange");
        $jq("#watermarkxmovedistance")
          .val(GM_getValue("chartBedWaterXMoveDistance", 30))
          .trigger("propertychange");
        $jq("#watermarkymovedistance")
          .val(GM_getValue("chartBedWaterYMoveDistance", 30))
          .trigger("propertychange");
        $jq("#watermarkrotationangle")
          .val(GM_getValue("chartBedWaterMarkRotationAngle", 45))
          .trigger("propertychange");
      }

      let top_height = $jq("#comiis_head").length
        ? parseInt($jq("#comiis_head").css("height"))
        : 0;
      let fatie_toupiao = $jq("#comiis_sub").length
        ? parseInt($jq("#comiis_sub").css("height"))
        : 0;
      let extra_margin_bottom = $jq("#pollm_c_1").length ? 60 : 0;
      let title_height = $jq(".comiis_styli.comiis_flex").length
        ? parseInt($jq(".comiis_styli.comiis_flex").css("height"))
        : 0;
      let nav_bottom_height = $jq(".comiis_post_ico.comiis_minipost_icot")
        .length
        ? parseInt($jq(".comiis_post_ico.comiis_minipost_icot").css("height"))
        : 0;
      $jq("#needmessage").css(
        "height",
        `${
          window.screen.height -
          top_height -
          fatie_toupiao -
          48 -
          title_height -
          nav_bottom_height -
          10
        }px`
      );
      $jq("#needmessage").css("margin-bottom", extra_margin_bottom + "px");
      if ($jq("#imglist li").length != 1) {
        $jq(".comiis_pictitle i").before(
          $jq(
            `<span class="icon_msgs bg_del" style="border-radius: 15px;display:block;">${
              $jq("#imglist li").length - 1
            }</span>`
          )
        );
      }
      if (
        window.location.href.match(MT_CONFIG.urlRegexp.editForum) &&
        $jq("#needsubject").val() === ""
      ) {
        $jq(".comiis_styli.comiis_flex").hide();
      } else {
        $jq("#needsubject").attr(
          "placeholder",
          "请输入完整的帖子标题 (1-80个字)"
        );
      }
      $jq("#needmessage").attr("placeholder", "来吧，尽情发挥吧...");
      Utils.tryCatch().run(mobile.selectPostingSection);
      Utils.tryCatch().run(setSettingViewEvent);
    },
    /**
     * 蓝奏功能(登录、上传、查看历史上传、删除)
     * @returns
     */
    lanzouFunction() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.bbs], "v47")) {
        return;
      }
      var lanZouViewShowLock = false;
      GM_addStyle(`
      .xtiper_content.xmin .loginbox{
          padding: 15px;
          font-size: 14px;
      }
      .xtiper_content.xmin .loginbox div{
          padding-bottom: 10px;
      }
      .xtiper_content.xmin .loginbox .xinput.xful{
          width: 100%;
          resize: none;
          -webkit-appearance: none;
          border-radius: 0;
          height: 34px;
          padding: 0 8px;
          transition-property: box-shadow,border-color;
          -webkit-transition: 0.2s ease-in;
          transition: 0.2s ease-in;
          border: 1px solid #bebebe;
          box-sizing: border-box;
          font-size: 14px;
          color: #333;
      }
      .xtiper_content.xmin .loginbox .xbutton.xful.xblue{
          background-image: none;
          color: #fff;
          border: 1px solid #0e73e9;
          background-color: #0e73e9;
          width: 100%;
          box-shadow: inset 0px 0px 2px #fff;
          -webkit-box-shadow: inset 0px 0px 2px #fff;
          -moz-box-shadow: inset 0px 0px 2px #fff;
          padding: 0 18px;
          height: 38px;
          cursor: pointer;
          font-size: 14px;
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 0;
      }
      .xtiper_content.xmin .loginbox .xinput.xful:focus,
      .xtiper_content.xmin .loginbox .xinput.xful:hover{
          border-color: #7a9cd3;
          box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(122 156 211 / 60%);
      }
      .xtiper_content.xmin .loginbox .xbutton.xful.xblue,
      .xtiper_content.xmin .loginbox .xbutton.xful.xblue:hover{
          background-color: #005ecd;
      }
      .xtiper_content.xmin .loginbox .xbutton.xful.xblue:active {
          box-shadow: inset 0px 0px 3px rgb(0 0 0 / 30%);
          -o-box-shadow: inset 0px 0px 3px rgba(0,0,0,0.3);
          -webkit-box-shadow: inset 0px 0px 3px rgb(0 0 0 / 30%);
          -moz-box-shadow: inset 0px 0px 3px rgba(0,0,0,0.3);
      }
      `);
      const lanzou = {
        storage: {
          getUser() {
            return GM_getValue("lanzouFunctionUser")
              ? GM_getValue("lanzouFunctionUser")
              : "";
          },
          getPwd() {
            return GM_getValue("lanzouFunctionPwd")
              ? GM_getValue("lanzouFunctionPwd")
              : "";
          },
          getFormhash() {
            return GM_getValue("lanzouFunctionFormhash")
              ? GM_getValue("lanzouFunctionFormhash")
              : undefined;
          },
          getUploadFiles() {
            return GM_getValue("lanzouFunctionUploadFiles")
              ? GM_getValue("lanzouFunctionUploadFiles")
              : [];
          },
          setUser(user) {
            GM_setValue("lanzouFunctionUser", user);
          },
          setPwd(pwd) {
            GM_setValue("lanzouFunctionPwd", pwd);
          },
          setFormhash(formhash) {
            GM_setValue("lanzouFunctionFormhash", formhash);
          },
          setUploadFiles(fileInfo) {
            GM_setValue("lanzouFunctionUploadFiles", fileInfo);
          },
          delUser() {
            GM_deleteValue("lanzouFunctionUser");
          },
          delPwd() {
            GM_deleteValue("lanzouFunctionPwd");
          },
          delFormhash() {
            GM_deleteValue("lanzouFunctionFormhash");
          },
          delUploadFiles(f_id) {
            let _data_ = lanzou.storage.getUploadFiles();
            Array.from(_data_).forEach((item, index) => {
              if (item["f_id"] == f_id) {
                _data_.splice(index, 1);
                lanzou.storage.setUploadFiles(_data_);
                return;
              }
            });
          },
        },
        login_getFormHash(user, pwd) {
          /* 获取账号的formhash */
          popup2.showLoadingMask();
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: "https://up.woozooo.com/mlogin.php",
              timeout: 5000,
              method: "get",
              data: `task=3&uid=${encodeURI(
                user
              )}&pwd=${pwd}&setSessionId=&setSig=&setScene=&setToken=`,
              /* headers不设置，使用手机headers */
              headers: {
                "User-Agent": Utils.getRandomPCUA(),
              },
              onload: (response) => {
                popup2.closeMask();
                let formhash = response.responseText.match(/formhash':'(.+?)'/);
                if (formhash && formhash.length == 2) {
                  xtips.toast("获取formhash成功");
                  resolve(formhash[1]);
                } else if (!response.responseText.match("登录")) {
                  resolve(4);
                } else {
                  console.log(response);
                  xtips.toast("获取formhash失败");
                  resolve(null);
                }
              },
              onerror: () => {
                popup2.closeMask();
                xtips.toast("网络异常,获取formhash失败");
                resolve(null);
              },
              ontimeout: () => {
                popup2.closeMask();
                popup2.toast("请求超时");
                resolve(null);
              },
            });
          });
        },
        login(user, pwd, formhash) {
          /* 登录 */
          popup2.showLoadingMask();
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: "https://up.woozooo.com/mlogin.php",
              timeout: 5000,
              method: "post",
              headers: {
                "content-type": "application/x-www-form-urlencoded",
                "User-Agent": Utils.getRandomPCUA(),
              },
              data: `task=3&uid=${encodeURI(
                user
              )}&pwd=${pwd}&setSessionId=&setSig=&setScene=&setToken=&formhash=${formhash}`,
              responseType: "json",
              onload: (response) => {
                popup2.closeMask();
                if (
                  (response.finalUrl.indexOf("woozooo.com/mlogin.php") != -1 &&
                    JSON.parse(response.responseText)["zt"] == 1) ||
                  response.finalUrl.indexOf("woozooo.com/myfile.php") != -1
                ) {
                  resolve(true);
                } else {
                  if (
                    response.responseHeaders.indexOf(
                      "content-type: text/json" != -1
                    )
                  ) {
                    xtips.toast(JSON.parse(response.responseText)["info"]);
                  } else {
                    xtips.toast("登录失败");
                    console.log(response);
                  }

                  resolve(false);
                }
              },
              onerror: () => {
                popup2.closeMask();
                xtips.toast("网络异常,登录失败");
                resolve(false);
              },
              ontimeout: () => {
                popup2.closeMask();
                xtips.toast("请求超时");
                resolve(false);
              },
            });
          });
        },
        uploadFile(file) {
          /* 上传文件 */
          popup2.showLoadingMask();
          let formData = new FormData();
          formData.append("task", 1);
          formData.append("ve", 2);
          formData.append("id", "WU_FILE_0");
          formData.append("folder_id_bb_n", -1);
          formData.append("upload_file", file);
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: "https://up.woozooo.com/fileup.php",
              method: "post",
              data: formData,
              headers: {
                Accept: "*/*",
                "User-Agent": Utils.getRandomPCUA(),
              },
              onload: (response) => {
                popup2.closeMask();
                let json_data = JSON.parse(response.responseText);
                if (json_data["zt"] == 1) {
                  xtips.toast(json_data["info"]);
                  resolve(json_data["text"][0]);
                } else {
                  xtips.toast(json_data["info"]);
                  console.log(response);
                  resolve(null);
                }
              },
              onerror: () => {
                popup2.closeMask();
                xtips.toast("网络异常,上传失败");
                resolve(null);
              },
              ontimeout: () => {
                popup2.closeMask();
                xtips.toast("请求超时");
                resolve(null);
              },
            });
          });
        },
        deleteFile(file_id) {
          /* 删除文件 */
          popup2.showLoadingMask();
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: `https://up.woozooo.com/doupload.php`,
              method: "post",
              timeout: 5000,
              data: `task=6&file_id=${file_id}`,
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
                "User-Agent": Utils.getRandomPCUA(),
              },
              onload: (response) => {
                popup2.closeMask();
                try {
                  let data = JSON.parse(response.responseText);
                  xtips.toast(data["info"]);
                  resolve(true);
                } catch (error) {
                  xtips.toast("删除失败");
                  console.log(response);
                  resolve(false);
                }
              },
              onerror: () => {
                popup2.closeMask();
                xtips.toast("网络异常,删除失败");
                resolve(false);
              },
              ontimeout: () => {
                popup2.closeMask();
                xtips.toast("请求超时");
                resolve(false);
              },
            });
          });
        },
        outLogin(user) {
          /* 退出登录 */
          popup2.showLoadingMask();
          return new Promise((resolve) => {
            GM_xmlhttpRequest({
              url: `https://up.woozooo.com/account.php?action=logout&${encodeURI(
                user
              )}`,
              timeout: 5000,
              method: "get",
              headers: {
                "User-Agent": Utils.getRandomPCUA(),
              },
              onload: (response) => {
                popup2.closeMask();
                resolve(response.responseText.match("成功") ? true : false);
              },
              onerror: () => {
                popup2.closeMask();
                xtips.toast("网络异常,退出失败");
                resolve(false);
              },
              ontimeout: () => {
                popup2.closeMask();
                xtips.toast("请求超时");
                resolve(false);
              },
            });
          });
        },
      };
      async function showUploadFiles() {
        /* 历史上传的文件们 */
        lanZouViewShowLock = false;
        let data = lanzou.storage.getUploadFiles();
        data.reverse();
        let content = "";
        $jq.NZ_MsgBox.alert({
          title: "蓝奏云已上传的文件",
          content: "<center>获取中...</center>",
          type: "",
          location: "center",
          buttons: {
            confirm: {
              text: "确定",
            },
          },
        });

        $jq.each(data, (index, value) => {
          let fileContent = `
                    <div style="display: flex;margin: 15px 5px;">
                        <a href="${value["is_newd"]}/${value["f_id"]}" target="_blank" style="color: #1e90ff;width: 80%;word-wrap: break-word;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height: 30px;">${value["name_all"]}</a>
                        <div style="margin-left: 10px;" class="dellanzoufile" t-id="${value["id"]}" t-f-id="${value["f_id"]}">
                            <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                        </div>
                    </div>`;
          content = content + fileContent;
        });

        $jq(".msgcon").html("");
        $jq(".msgcon").append(content);
        $jq(".msgcon").css("height", "400px");
        GM_addStyle(`
                #mask,
                #ntcmsg_popmenu{
                    z-index: 100000 !important;
                }
                `);
        let plugin_delete_lanzou_file = (t_id, t_f_id, index) => {
          lanzou.deleteFile(t_id);
          console.log("删除文件", t_f_id);
          lanzou.storage.delUploadFiles(t_f_id);
          $jq(".msgcontainer .msgcon div").eq(index).remove();
          xtips.toast("删除成功");
        };
        $jq(".dellanzoufile i.comiis_font").on("click", function (e) {
          var t_id = e.target.parentElement.getAttribute("t-id");
          var t_f_id = e.target.parentElement.getAttribute("t-f-id");
          var index = $jq(this).parent().parent().index();
          popup2.confirm({
            text: "<p>确定删除该文件？</p>",
            ok: {
              callback: () => {
                plugin_delete_lanzou_file(t_id, t_f_id, index);
                popup2.closeConfirm();
              },
            },

            mask: true,
            only: true,
          });
        });
      }
      async function showLoginView() {
        lanZouViewShowLock = false;
        xtip.open({
          type: "html",
          content: `<div class="loginbox">
                    <strong>蓝奏云</strong><br><br>
                    <div><input type="text" class="xinput xful" placeholder="账号" /></div>
                    <div><input type="password" class="xinput xful" placeholder="密码" /></div>
                    <div><button class="xbutton xful xblue">登录</button></div>
                    </div>
                    </div>`,
          app: true,
          success: async (x) => {
            let localDataUser = lanzou.storage.getUser();
            let localDataPwd = lanzou.storage.getPwd();
            if (localDataUser != "" && localDataPwd != "") {
              x.xtipdiv.querySelector(".xinput.xful[type='text']").value =
                localDataUser;
              x.xtipdiv.querySelector(".xinput.xful[type='password']").value =
                localDataPwd;
            }
            x.xtipdiv.querySelector(".xbutton.xful.xblue").onclick =
              async () => {
                let inputUser = x.xtipdiv
                  .querySelector(".xinput.xful[type='text']")
                  .value.trim();
                let inputPwd = x.xtipdiv
                  .querySelector(".xinput.xful[type='password']")
                  .value.trim();
                if (inputUser != "" && inputPwd != "") {
                  xtips.toast("登录中请稍后...");
                  let _formhash_ = await lanzou.login_getFormHash(
                    inputUser,
                    inputPwd
                  );
                  console.log(_formhash_);
                  if (_formhash_ == 4) {
                    console.log("已登录");
                    lanzou.storage.setUser(inputUser);
                    lanzou.storage.setPwd(inputPwd);
                    if (lanzou.storage.getFormhash() == null) {
                      console.log(
                        "未知原因，已登录但本地未保存formhash，建立临时值"
                      );
                      lanzou.storage.setFormhash(_formhash_);
                    }
                    xtip.close(x.mainid);
                    showView();
                    return;
                  }
                  if (_formhash_ == null) {
                    return;
                  }

                  let loginStatus = await lanzou.login(
                    inputUser,
                    inputPwd,
                    _formhash_
                  );
                  if (loginStatus) {
                    console.log("登录成功");
                    console.log(inputUser, inputPwd, _formhash_);
                    lanzou.storage.setUser(inputUser);
                    lanzou.storage.setPwd(inputPwd);
                    lanzou.storage.setFormhash(_formhash_);
                    xtip.close(x.mainid);
                    showView();
                  }
                } else {
                  xtips.toast("账号或密码不能为空");
                }
              };
          },
        });
        console.log(document.querySelector(".xinput.xful[type='password']"));
        Utils.listenKeyPress(
          document.querySelector(".xinput.xful[type='password']"),
          (keyName, otherKey) => {
            if (keyName === "Enter") {
              console.log("回车按键");
              $jq("button.xbutton.xful.xblue").click();
            }
          }
        );
      }
      async function showLanZouView(user, pwd) {
        popup2.toast("校验登录信息中...");
        lanZouViewShowLock = false;
        let sheet = null;
        let _formhash_ = lanzou.storage.getFormhash();
        let loginStatus = await lanzou.login(user, pwd, _formhash_);
        if (!loginStatus) {
          xtips.toast("登录过期");
          lanzou.storage.delFormhash();
          showLoginView();
          return;
        }
        popup2.closeToast();
        sheet = xtip.sheet({
          btn: [
            `欢迎! ${user}`,
            '上传<input type="file" name="Filedata" accept="doc,docx,zip,rar,apk,ipa,txt,exe,7z,e,z,ct,ke,cetrainer,db,tar,pdf,w3x,epub,mobi,azw,azw3,osk,osz,xpa,cpk,lua,jar,dmg,ppt,pptx,xls,xlsx,mp3,ipa,iso,img,gho,ttf,ttc,txf,dwg,bat,imazingapp,dll,crx,xapk,conf,deb,rp,rpm,rplib,mobileconfig,appimage,lolgezi,flac,cad,hwt,accdb,ce,xmind,enc,bds,bdi,ssf,it,pkg,cfg" id="lanzouuploadfilebtn" style="display:none;">',
            "查看历史上传",
          ],
        });

        $jq("#lanzouuploadfilebtn")
          .off("change")
          .change(async (e) => {
            let lanzouChooseFile = e.currentTarget.files[0];
            console.log(lanzouChooseFile);
            let uploadFileInfo = await lanzou.uploadFile(lanzouChooseFile);
            if (uploadFileInfo) {
              let tempData = lanzou.storage.getUploadFiles();
              tempData = tempData.concat(uploadFileInfo);
              GM_setClipboard(
                `${uploadFileInfo["is_newd"]}/${uploadFileInfo["f_id"]}`
              );
              xtips.toast("已复制到剪贴板");
              console.log(tempData);
              lanzou.storage.setUploadFiles(tempData);
            }
          });

        let anyTouchNode = new AnyTouch(document.getElementById(sheet));

        anyTouchNode.on("tap", (e) => {
          if (
            document
              .getElementById(sheet)
              .querySelector(".xtiper_bg")
              .outerHTML.indexOf(e.target.outerHTML) != -1
          ) {
            /* 点击背景不关闭小窗 */
            return;
          }
          if (
            document
              .querySelectorAll(
                ".xtiper_sheet_ul.xtiper_sheet_center .xtiper_sheet_li"
              )[0]
              .outerHTML.indexOf(e.target.outerHTML) != -1
          ) {
            /* 用户 */
            xtip.confirm("确定退出登录吗？", {
              btn1: async function () {
                let logoutStatus = await lanzou.outLogin(
                  lanzou.storage.getUser()
                );
                if (logoutStatus) {
                  xtips.toast("退出登录成功");
                  lanzou.storage.delFormhash();
                  anyTouchNode.off("tap");
                  xtip.close(sheet);
                  lanZouViewShowLock = false;
                } else {
                  xtips.toast("退出登录失败");
                }
              },
            });
            return;
          }
          if (
            document
              .querySelectorAll(
                ".xtiper_sheet_ul.xtiper_sheet_center .xtiper_sheet_li"
              )[1]
              .outerHTML.indexOf(e.target.outerHTML) != -1
          ) {
            /* 上传 */
            $jq("#lanzouuploadfilebtn").val("");
            $jq("#lanzouuploadfilebtn").click();
            return;
          }
          if (
            document
              .querySelectorAll(
                ".xtiper_sheet_ul.xtiper_sheet_center .xtiper_sheet_li"
              )[2]
              .outerHTML.indexOf(e.target.outerHTML) != -1
          ) {
            /* 查看历史上传 */
            anyTouchNode.off("tap");
            xtip.close(sheet);
            showUploadFiles();
            return;
          }
          if (
            document
              .querySelectorAll(
                ".xtiper_sheet_ul.xtiper_sheet_center .xtiper_sheet_li"
              )[3]
              .outerHTML.indexOf(e.target.outerHTML) != -1
          ) {
            /* 取消 */
            anyTouchNode.off("tap");
            xtip.close(sheet);
            lanZouViewShowLock = false;
            return;
          }
        });
      }

      async function showView() {
        let user = lanzou.storage.getUser();
        let pwd = lanzou.storage.getPwd();
        let formhash = lanzou.storage.getFormhash();
        if (user == "" || pwd == "" || formhash == null) {
          showLoginView();
        } else {
          showLanZouView(user, pwd);
        }
      }

      function insertBtn() {
        let comiis_left_Touch = document.createElement("li");
        comiis_left_Touch.className = "comiis_left_Touch";
        let ANode = document.createElement("a");
        ANode.setAttribute("href", "javascript:;");
        ANode.className = "blacklist";
        ANode.innerHTML = `
                    <div class="styli_tit f_c">
                        <img loading="lazy" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEAAQADASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAECAwUGBAcI/8QAQRAAAgEDAAYDDgQFAwUAAAAAAAECAwQRBQYhMUFRElJxExQVMjM0YXJzgZGSscEiI6HRB2Lh8PEWJEI1Q1OTsv/EABsBAQACAwEBAAAAAAAAAAAAAAAEBgECBQMH/8QAMREBAAEDAgIIBQQDAQAAAAAAAAECAwQRMQUyEhUhM1FxkeEGE0GxwRQiYaFCgdHw/9oADAMBAAIRAxEAPwD7+ANyywBilXSbjBOclvS4e8p0pXGHFuNHmtjl/QyxpxhFRSSS4LcBidKrV8pVcVnxaWz4v/BdUILhn125P9TKQAAAAAAAAAAAAAAAAAAAAAAAAAJIAFJUYy4Y9MW4v4oxqlVp+TquS6tTb8H/AJM5OQMMa6clGcXCT3J7n7zMVlTjOLjJJxfB7jFmVv40nKlze+P9AM4AAHnl/uJuLX5UXt/mf7FriclGNOD/ABzeF6FxZkhFQgklsSwgJSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAayvuABgT73mo/9qTwl1H+x6Cs4qcWmtjWGY7eT6LpyeZQeG+a4MCtPFW4qVNuz8te7f/foPQzFQTVKOVta6T7XtZkAAAAAAAAAAAAAAAAAAAAAHhbW8IADFK6oQeJVYp9pTv6241YrtZ41ZFqmdJqjXzhnozpro9AMUbmjN4jUi/eZU01s3HrFUVbSwAAyAAAAAAAAJPPU/KuKdTb+L8uWznu/v0mcxXMXKhPG9Ryu1bUBlAAAAAAAAAAAAACTw3WlrS02Sn0pdWG1mrqayyz+XbpetIiXc7HtTpVV2+v2e9vGu3O2mHREHNrWSv8A+Cn8WeyhrDb1MKpCUJPe96NKOJYtc6RV66w2qw71Ma6NwJSUIuUmklvbMcrmjGn3Tui6PoNLd3k7ieW2ocI/ueedxK1i0a71TtH/AL6NLVmq5L2XGlEsxoLPDpS3e411W4q1fHqSl79hiyCo5OfkZM611dnhGyfRZoo2gbyVqbixSp4pFt80NMvuK/JjTw8o9FG9uKLXQqPC4Pajzg6FFyuidaZ0VSKpp7Ylv7TStOu1Cqu5z5t7GbDsOQNlYaTlRap1m5U+De+J3MLiszMUX/X/AKmWcnXsrb0CLUopp5T3MHeTQAAAAAAHEAAAAAAAAAASBEmoxcm8JLLbOZ0npqdeTpW0ujSWxyW+X9DPrBftYs6bwntqNfQ54r3FM+rpTZtzppvP4dXCxY0+ZX/pLbb37WQSDhOogtS8rDtKlqflodpidmJ2bZPAAISCEEgAUn4pcpU8U3o5oR8vuK/JjABNVMAAG40RevKtqj9R/Y3ByMJypzjOLxKLyjprK7he2kK9POJLc+DLNwjIqu2poq/xdDGu9KOjO8M4AOslAAADiAAAAAAkCCdxotYda7DV6n0arda6kswoQe3tfJHzDTOuGldMylGpW7jQe6jS2L3veyFkZ1qz2bz4Org8IyMuOlH7afGfx4vsNbSVlQyp3EMrgnl/oeOprDaRi+5qc5cNmEz5zqvUlOxq9KTeJ4WeGw3hxrvGL8zMUxEJNzhVu1XNFUzOjJXqyr1p1ZbZSeWYwDjzMzOspURERpCQQDDKSaflYdpBNPysO0TsxOzbAAhIKCQABSp4pcpU8U2o5oR8vuK/JjABOVMAAAy6lXXdKN7bvOadXpLbwf8AgxGn1W0vQ0Zpm5hcz6FKs3HpvdFp7Mlp+G7U3Ld+IjWdKfvJRci3eomZ7O19HBEJwqRUoSjKL3NPJbB03aQAAAAAAEgQcnrlrbHQdHvS1alfVI/+tc36Tdaf0vT0Joitezw5RWKcetJ7j4beXde/u6lzc1HUq1JZlJs5vEMubUdCjef6d7gnDIya/m3I/bH9ypXr1bmvOvXqSqVZvpSlJ7WzGAV+Z1XeIiI0h1uqvmNb2n2N8aHVTzGt7T7I3xFr5pVzM7+oABojBJAAkmn5WHaVLU/Kw7ROzE7NsACEgoJAAFKnilylTxTejmhGy+4r8mMAE1VAAADhLjzmr67+p3Zwlfzmr67+pdvgvnveUflDy9oejR+lr3RlVTta8oLO2Odj9x9C0DrVb6XkrerHuN1jZFvZPsPmBaMpU5qUW1JbU0XLKwrd+O3snxaY2ZcsT2dseD7cQczqprG9J0+87mX+5hHMZddfudOVi9Zqs1zRXustm7TdoiunZAAPJ6BJBE5KEHKW5LLA+WfxI0tK50tT0bCX5VtFSmk982s/osfFnEHq0ndzv9KXV3N/irVZT7MvceUqV+7N25Nfi+l4WPGPj0Wo+kf39QAHilOt1U8xre0+yN8aHVTzGt7T7I3xGr5pVzM7+pJABojBJBIEFqflYdpBNPysO0TsxOzbAAhIIQSQBJSp4pcrU8U2o5oR8vuK/JiABOVMAAA4Sv5zV9Z/U7s4Sv5zV9Z/Uu3wXz3vKPyh5e0MYA4F+QWW0uatnd0rijJxqU5dJM+v6OvaekbCjdU3sqRy1yfFHxs7zUG9cre5sn/waqR7HsZyuK2IqtfMjePs6nC7003PlztP3dkOIBXFgDzaR/6Zd+xn/wDLPSYbyDq2NemtjlTlHdzRrVyy3onSqJfnp72CZJqTT3pkFOfUgAAdbqp5jW9p9jfmg1V8xre0+xvyNXzSrmZ39QQAaIwASBBan5WHaVLU/Kw7ROzE7NsQSCEggIJAFKnilyk/FN6OaEbL7ivyYwATVUAAAOEr+c1fWf1O7OEr+c1fWf1Lt8F897yj8oeXtDGBwBfkEOj1JrOnrFCC3Vacov4Z+xzZv9TYdPWa2ePFU5dn4WvuRsuImxXr4SkYszF+jTxh9QABUFsCWQSB8J1lsPBmsd9bYxFVHKHqy2r9Gak+lfxL0O6lKhpalHLpruVXHLOx/qz5qVXKtfKvTS+j8NyYycamv67T5wAAjJzrdVPMa3tPsb40OqnmNb2n2RviNXzSrmZ39QADRGASQALU/Kx7Span5WHaJ2YnZtgCCEgpAAApU8UuUqeKb0c0I+X3FfkxgAmqmAAAcJX85q+s/qd2cJX85q+s/qXb4L573lH5Q8vaGPgCCS/IKDsdQbXp3tzdNbIQ6Cfpf+Djj6tqvo16M0LShNYq1PzJp8G+BzuJ3YosTT9ZdDhtqa78VfSG6IA4orCyAAAxXVrRvLWpbV4KdKpFxlF8UfEdY9AV9X9JSt6mZ0ZbaVXGyS/c+5mu01oW005YytrmPqTW+D5ohZuJF+ns5odXhXEpw7n7uSd/+vgoNxp/Vy90BdOnXi50W33OtFbJL7M05W66KqJ6NUaSvtq7RdoiuidYl1uqvmNb2n2RvjQ6q+Y1vafY3xEr5pV/M7+oABojAAAFqflYdpUtT8rDtE7MTs2wAISCgkAAUqeKXKT3G1HNCPmdxX5MYAJypgAAHCV/OavrP6ndnCXHnNX1n9S7fBfPe8o/KHl7QxkA6PV/VWvpSca9ynStE85e+foRebt6i1T0q50hGtWq7tXRojtZNUdAPSN2ryvFq2ovKXXly7D6QY6FCla0IUaMFCnBYjFcDIVXLyasi50p2+izYuNTYo6Mb/UHEAjJIAABJAAx17ajdUZUq9KFSnLfGSymcPpn+GtvXk6uiq6t5Pa6VTLi+x71+p3gPG9j270aVwlY2bfxatbVWn29HB6F1N0jo20nCpKlKcpdJqMtm42HgC+6kfnR1pBAng+PM66z6+z3r4nfrqmqrTWXJ+AL7qR+dDwBfdSPzo6wGOpsfxn19mnWF3+HJ+AL7qR+dDwBfdSPzo6wDqbH8Z9fY6wu/wAOT8AX3Uj86LQ0DeqpFuEUk+sjqgY6lx/GfX2OsLv8NJ4LuOUfmHgy46sfmN2Dz6gxfGfX2eX6q40ngy46sfmHgu46sfmN2B1Bi+M+vsfqrjSeC7jqx+JWeirl7FGPxN6DMcBxYnXWfX2aV36q6Zpq2lz3gm76sfiPBN31I/E6LIyevU+P4z6+yB+ltud8E3fUj8R4Ju+pH5josjI6nx/GfX2P0ltz0dEXTlhqKXPJzv8AobSNa8qdOrRp0nJtTznK7D6EDp8Oojh/S+R/l49uzSvBs16dJoNF6oaO0d0alSLuay/5VFsXYjfpJJJLCW5IA9rl2u7PSrnVIt2qLcaURoAA83oDiAAAAAAAAAAIbwSVkBWVTBR11zMVTJ55N7d4HsdwV74S25R4ZdLgY25LiwNi7lZI76RrJOTK5kBtO+ljeO+1zNVmWeJDcuYG2779I76XM1OZc2TmXNgbZXS4MlXK5mpzL0ll0sgbXvlcyVcGsTlzZddLO0DZKuXjVTNcnL0/Ez085A9uUSY4cDIAAAAAAABuAx0G3Rjl5aXRfatjMhgpRdKvVhh4k+6J9u9f3zPQBAAAAAAQ1nsJAGKUM8Cjoo9AA8ve65Ir3suR7AB4u9U+BHeiPcAPA7Rch3ouR7sLGCcAa/vRciVaLke/AwB4O9FyRZWqXBHtwEgPH3siVbr0HrwhgDzKgkXVJLgZgBVR5lgAAAAAACTFcNqjLDw2uinyb2L6mU81Vd0uKdLbhPukvdu/v0AXuINxU4rMoPKXPmXpzjOCcXmLWV2Fzzv/AG03LdRk8v8AlfPsAzgJ57QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJDeO3kBWpOMIOUnhJZZS3g1F1JrE5vLXJcEVS75nGefyYvK/nfPsPQAG9YYAHnxK2x0YuVHktrj/QyxnGcU001zW4uYpUI5coPoSe9pbwMgMEqtSk306MpRzsdP8T96MirQeMvo+unF/qBcBNPkPcAAAAAAACQIAGQAHuAAAAAAABJAAAOSS2tL3gAY3WgtqfSX8icvoUVWrVX5dJxWdsquz4L/AABlnUjCLk2klxe4xYnctqUXCjye+f7IvGhHKlUbqSW5tbvcZQG5YQAA/9k=">
                    </div>
                    <div class="flex">蓝奏云</div>`;
        ANode.onclick = () => {
          if (!lanZouViewShowLock) {
            lanZouViewShowLock = true;
            showView();
          } else {
            console.log("重复点击");
          }
        };
        comiis_left_Touch.append(ANode);
        $jq(".comiis_sidenv_box .sidenv_li .comiis_left_Touch.bdew").append(
          comiis_left_Touch
        );
      }
      insertBtn();
    },
    /**
     * 加载下一页的评论
     */
    loadNextComments() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.forumPost], "v21")) {
        return;
      }
      if (document.title.indexOf("提示信息 - MT论坛") != -1) {
        return;
      }
      function autoLoadNextPageComments(post_comments_list) {
        /* 自动加载下一页的评论 */
        $jq("#loading-comment-tip").parent().css("display", "");
        let next_page_url = post_comments_list.children[2].href;
        console.log("预设，获取下一页url：", next_page_url);
        if (next_page_url.indexOf("javascript:;") != -1) {
          console.log(post_comments_list);
          console.log("无多页评论");
          $jq("#loading-comment-tip").parent()?.remove();
          return;
        }

        function _loadNextComments_() {
          return new Promise((resolve) => {
            $jq("#loading-comment-tip").text("正在加载评论中...");
            $jq("#loading-comment-tip").parent().css("display", "");
            let _url_ = next_page_url;
            $jq.get(_url_, function (data, status, xhr) {
              console.log("正在请求的下一页url", _url_);
              let postlist = $jq(data);
              let kqideSourceNode = $jq(".comiis_postlist.kqide");
              let postDOM = postlist.find(".comiis_postlist.kqide").html();
              let get_next_page_url = postlist.find(".nxt");
              if (get_next_page_url.length != 0) {
                console.log("成功获取到下一页-评论");
                next_page_url = get_next_page_url.attr("href");
                let newURL = new URL(_url_);
                let setLocationUrl = `${newURL.pathname}${newURL.search}`;
                console.log(
                  "设置当前的url为请求的下一页url",
                  window.location.origin + setLocationUrl
                );
                if (window === top.window) {
                  window.history.pushState("forward", null, setLocationUrl);
                }
              } else {
                console.log("评论全部加载完毕，关闭监听事件");
                let newURL = new URL(next_page_url);
                let setLocationUrl = `${newURL.pathname}${newURL.search}`;
                console.log("设置当前的url为请求的最后一页url", setLocationUrl);
                if (window === top.window) {
                  window.history.pushState("forward", null, setLocationUrl);
                }
                $jq(".comiis_page.bg_f").remove();
                $jq("#loading-comment-tip").text("已加载完所有评论");
                $jq("#loading-comment-tip").parent()?.remove();
                $jq("#loading-comment-tip").off("click", _loadNextComments_);
                $jq(window).off("scroll", scroll_loadNextComments);
              }
              kqideSourceNode.append(postDOM);
              mobileRepeatFunc.main();
              resolve();
            });
          });
        }
        var lock = new Utils.lockFunction(_loadNextComments_);
        function scroll_loadNextComments() {
          if (
            Math.ceil($jq(window).scrollTop() + $jq(window).height() + 150) >=
            $jq(document).height()
          ) {
            /* load data */
            lock.run();
          }
        }
        $jq(window).on("scroll", scroll_loadNextComments);
        $jq("#loading-comment-tip").text("请上下滑动或点击加载");
        $jq("#loading-comment-tip").on("click", _loadNextComments_);
      }

      let tip_html = `
      <div class="comiis_multi_box bg_f b_t"><label class="comiis_loadbtn bg_e f_d" id="loading-comment-tip">正在等待页面加载完毕</label></div>`;
      $jq(".comiis_bodybox").append($jq(tip_html));
      let commentsEle =
        document.querySelector(".comiis_pltit span.f_d") ||
        document.querySelector("#comiis_foot_memu .comiis_kmvnum");
      if (
        document.querySelector(".comiis_pltit h2") &&
        document
          .querySelector(".comiis_pltit h2")
          .textContent.indexOf("暂无评论") != -1
      ) {
        $jq("#loading-comment-tip").parent()?.remove();
        console.log("暂无评论");
        return;
      }
      let commentsNum = parseInt(commentsEle.textContent);
      if (commentsNum >= 10) {
        Utils.waitNode(".comiis_page.bg_f").then((next_page_dom) => {
          console.log("找到下一页元素！");
          autoLoadNextPageComments(next_page_dom[0]);
        });
      } else {
        $jq("#loading-comment-tip").parent()?.remove();
        console.log("无多页评论");
      }
    },
    /**
     * 加载上一页的评论
     */
    loadPrevComments() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.forumPost], "v32")) {
        return;
      }
      if (document.title.indexOf("提示信息 - MT论坛") != -1) {
        return;
      }
      if (document.querySelector(".comiis_pltit span.f_d")) {
        return;
      }
      function autoLoadPrevPageComments() {
        /* 自动加载上一页的评论 */
        let post_comments_list = document.querySelector(".comiis_page.bg_f");
        let prev_page_url = post_comments_list.children[0].href;
        console.log("预设，获取上一页url：", prev_page_url);
        $jq("#loading-comment-tip-prev").text("请上下滑动或点击加载");
        $jq("#loading-comment-tip-prev").on("click", _loadPrevComments_);

        function _loadPrevComments_() {
          return new Promise((resolve) => {
            $jq("#loading-comment-tip-prev").text("正在加载评论中...");
            $jq("#loading-comment-tip-prev").parent()?.css("display", "");
            let _url_ = prev_page_url;
            $jq.get(_url_, function (data, status, xhr) {
              console.log("正在请求的上一页评论：", prev_page_url);
              let postlist = $jq(data);
              let kqideSourceNode = $jq(".comiis_postlist.kqide");
              let postDOM = postlist.find(".comiis_postlist.kqide").html();
              let get_pregv_page_url = postlist.find(".prev");
              if (get_pregv_page_url.length != 0) {
                console.log("成功获取到上一页-评论");
                prev_page_url = get_pregv_page_url.attr("href");
                let newURL = new URL(_url_);
                let setLocationUrl = `${newURL.pathname}${newURL.search}`;
                console.log(
                  "设置当前的url为请求的上一页url",
                  window.location.origin + setLocationUrl
                );
                if (window === top.window) {
                  window.history.pushState("forward", null, setLocationUrl);
                }
                kqideSourceNode.prepend(postDOM);
              } else {
                kqideSourceNode.prepend(postDOM);
                let newURL = new URL(prev_page_url);
                let setLocationUrl = `${newURL.pathname}${newURL.search}`;
                console.log(
                  "已到顶页，设置当前的url第一页url",
                  window.location.origin + setLocationUrl
                );
                if (window === top.window) {
                  window.history.pushState("forward", null, setLocationUrl);
                }
                console.log("上一页评论全部加载完毕，关闭监听事件");
                let page_title = postlist.find(".comiis_viewtit")[0].outerHTML;
                console.log($jq(page_title));
                kqideSourceNode.prepend($jq(page_title)[0]);

                /* $jq(".comiis_page.bg_f").remove(); */
                $jq("#loading-comment-tip-prev").parent().remove();
                $jq("#loading-comment-tip-prev").off(
                  "click",
                  _loadPrevComments_
                );
                $jq(window).off("scroll");
              }
              mobileRepeatFunc.main();
              resolve();
            });
          });
        }

        function scroll_loadPrevComments() {
          if ($jq(window).scrollTop() <= 50) {
            lock.run();
          }
        }
        var lock = new Utils.lockFunction(_loadPrevComments_);
        $jq(window).on("scroll", scroll_loadPrevComments);
      }

      console.log("当前不在第一页，加载上一页评论");
      let tip_html = `
      <div class="comiis_multi_box bg_f b_t"><label class="comiis_loadbtn bg_e f_d" id="loading-comment-tip-prev">正在等待页面加载完毕</label></div>`;
      $jq(".comiis_bodybox script")[0].after($jq(tip_html)[0]);
      if (
        document.querySelector(".comiis_pltit h2") &&
        document
          .querySelector(".comiis_pltit h2")
          .textContent.indexOf("暂无评论") != -1
      ) {
        console.log("暂无上一页评论");
        $jq("#loading-comment-tip-prev").parent()?.remove();
        return;
      }
      autoLoadPrevPageComments();
    },
    /**
     * 在线用户查看
     */
    onlineUserView() {
      if (!MT_CONFIG.methodRunCheck([], "v56")) {
        return;
      }

      function handleFilterInfo(userListNode) {
        /* 过滤用户/UID */
        let inputNode = $jq(".online-user-filter input");
        let isSeaching = false;
        inputNode.on("propertychange input", function () {
          let inputText = this.value.trim();
          if (isSeaching) {
            return;
          }
          isSeaching = true;
          if (inputText == "") {
            $jq(".NZ-MsgBox-alert .msgcon center").hide();
            $jq(".online-user-list li.online-item").each((index, item) => {
              item.removeAttribute("style");
            });
            isSeaching = false;
            return;
          }

          $jq(".NZ-MsgBox-alert .msgcon center").text("搜索中...");
          $jq(".NZ-MsgBox-alert .msgcon center").show();
          let isFind = false;
          $jq(".online-user-list li.online-item").each((index, item) => {
            if (
              item
                .getAttribute("data-name")
                .match(new RegExp(inputText, "ig")) ||
              item.getAttribute("data-sf").match(new RegExp(inputText, "ig")) ||
              item.getAttribute("data-uid").match(new RegExp(inputText, "ig"))
            ) {
              isFind = true;
              $jq(".NZ-MsgBox-alert .msgcon center").hide();
              item.removeAttribute("style");
            } else {
              item.setAttribute("style", "display:none;");
            }
          });
          if (!isFind) {
            $jq(".NZ-MsgBox-alert .msgcon center").text("空");
            $jq(".NZ-MsgBox-alert .msgcon center").show();
          }
          isSeaching = false;
        });
      }
      function showView(data) {
        console.log(data);
        let totalOnline = data["totalOnline"]; /* 全部在线用户 */
        let onlineUser = data["onlineUser"]; /* 在线会员用户(已注册账号的) */
        let noRegisterUser = data["noRegisterUser"]; /* 游客 */
        let invisibleUser = data["invisibleUser"]; /* 隐身的用户 */
        let userList = data["data"]; /* 用户列表 */
        /* 显示列表 */
        let dialogCSSNode = GM_addStyle(`
				.online-user-filter input{
					width: -webkit-fill-available;
					height: 30px;
					margin: 8px 20px;
					border: 0px;
					border-bottom: 1px solid;
				}
				.online-user-list{
					height: 300px;
				}
				.online-user-list li{
					display: flex;
					margin: 18px 0px;
					align-items: center;
				}
				.online-user-avatar{
					margin-left: 30px;
					margin-right: 30px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.online-user-avatar img{
					width: 80px;
    			height: 80px;
					border-radius: 8px;
				}
				.online-user-info{
					text-align: center;
				}
				.online-user-list{
					overflow-y: auto;
				}
				.online-user-list div.online-user-name p::before,
				.online-user-list div.online-user-sf p::before,
				.online-user-list div.online-user-uid p::before{
					display: flex;
					width: 70px;
					float: left;
				}
				.online-user-list div.online-user-name p::before{
					content: "用户名：";
				}
				.online-user-list div.online-user-sf p::before{
					content: "身份：";
				}
				.online-user-list div.online-user-uid p::before{
					content: "UID：";
				}
				.online-user-list div.online-user-sf p[data-sf="会员"]{
					color: #88b500;
				}
				.online-user-list div.online-user-sf p[data-sf="版主"]{
					color: #2db5e3;
				}
				.online-user-list div.online-user-sf p[data-sf="超级版主"]{
					color: #e89e38;
				}
				.online-user-list div.online-user-sf p[data-sf="管理员"]{
					color: #ff5416;
				}
				`);
        $jq.NZ_MsgBox.alert({
          title: "在线用户查看",
          content: `
					<div class="online-user-info">${totalOnline} 人在线 - ${onlineUser} 会员${
            invisibleUser == 0 ? "" : `(${invisibleUser}隐身)`
          } - ${noRegisterUser} 位游客</div>
					<div class="online-user-filter"><input placeholder="搜索用户名/身份/UID(可正则)"></div>
					<center>处理数据中...</center>
					<div class="online-user-list"></div>`,
          type: "",
          location: "center",
          buttons: {
            confirm: {
              text: "确定",
            },
          },
          callback: () => {
            dialogCSSNode?.remove();
          },
        });

        let userListHTML = "";
        let userListNode = null;
        userList.forEach((item) => {
          userListHTML += `
					<li class="online-item" data-name="${item["name"]}" data-uid="${item["uid"]}" data-sf="${item["sf"]}">
							<div class="online-user-avatar">
								<img src="${item["avatar"]}" loading="lazy">
							</div>
							<div class="online-user-text">
								<div class="online-user-name">
									<p>${item["name"]}</p>
								</div>
								<div class="online-user-sf">
									<p data-sf="${item["sf"]}">${item["sf"]}</p>
								</div>
								<div class="online-user-uid">
									<p>${item["uid"]}</p>
								</div>
							</div>
					</li>
					`;
        });
        popup2.closeMask();
        $jq(".NZ-MsgBox-alert .msgcon center").hide();
        userListNode = $jq(userListHTML);
        handleFilterInfo();
        $jq(".online-user-list").append(userListNode);
        userListNode.on("click", ".online-user-avatar", function () {
          window.open(
            `home.php?mod=space&uid=${this.parentElement.getAttribute(
              "data-uid"
            )}&do=profile`,
            "_blank"
          );
        });
      }
      function getOnlineUsers() {
        /* 获取在线用户列表 */
        let result = {
          status: false,
          totalOnline: 0,
          onlineUser: 0,
          noRegisterUser: 0,
          invisibleUser: 0,
          data: [],
        };
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: "https://bbs.binmt.cc/forum.php?showoldetails=yes",
            method: "GET",
            timeout: 5000,
            headers: {
              "User-Agent": Utils.getRandomPCUA(),
            },
            onload: function (response) {
              console.log(response);
              let pageHTML = $jq(response.responseText);
              let onlineList = pageHTML.find("#onlinelist ul li");
              onlineList.each((index, item) => {
                let uid = item
                  .querySelector("a")
                  .getAttribute("href")
                  .match("uid-(.+?).html")[1]; /* uid */
                let avatar = MT_CONFIG.getAvatar(uid, "middle"); /* 头像 */
                let name = item.querySelector("a").innerText; /* 名字 */
                let sf = ""; /* 身份 */
                let space = item
                  .querySelector("a")
                  .getAttribute("href"); /* 个人空间页 */
                let memberSrc = item.querySelector("img").src;
                if (memberSrc.indexOf("online_member") != -1) {
                  sf = "会员";
                } else if (memberSrc.indexOf("online_moderator") != -1) {
                  sf = "版主";
                } else if (memberSrc.indexOf("online_supermod") != -1) {
                  sf = "超级版主";
                } else if (memberSrc.indexOf("online_admin") != -1) {
                  sf = "管理员";
                } else {
                  sf = "未知身份";
                }
                result.data = [
                  ...result.data,
                  {
                    uid: uid,
                    avatar: avatar,
                    name: name,
                    sf: sf,
                    space: space,
                  },
                ];
              });

              let onlineInfo = pageHTML
                .find("#online div.bm_h span.xs1")
                .text();
              console.log(onlineInfo);
              result.totalOnline = Utils.parseInt(
                onlineInfo.match(/([0-9]*)\s*人在线/i),
                0
              );
              result.onlineUser = Utils.parseInt(
                onlineInfo.match(/([0-9]*)\s*会员/i),
                0
              );
              result.noRegisterUser = Utils.parseInt(
                onlineInfo.match(/([0-9]*)\s*位游客/i),
                0
              );
              result.invisibleUser = Utils.parseInt(
                onlineInfo.match(/([0-9]*)\s*隐身/i),
                0
              );
              result.status = true;
              resolve(result);
            },
            onerror: function () {
              popup2.toast("网络异常，请重新获取");
              resolve(result);
            },
            ontimeout: function () {
              popup2.toast("请求超时");
              resolve(result);
            },
          });
        });
      }
      function insertLeftButton() {
        /* 插入左边按钮 */
        let btnNode = `
				<li class="comiis_left_Touch">
					<a href="javascript:;" class="online-user-view">
						<div class="styli_tit f_c">
							<i class="comiis_font" style="color: #2d92ff"></i>
						</div>
						<div class="flex">在线用户查看</div></a
					>
				</li>
				`;
        btnNode = $jq(btnNode);
        btnNode.on("click", function () {
          popup2.showLoadingMask();
          popup2.toast("获取在线用户列表中");
          getOnlineUsers().then((resolve) => {
            if (resolve.status) {
              popup2.closeToast();
              showView(resolve);
            } else {
              popup2.toast("获取在线用户列表失败");
              popup2.closeMask();
            }
          });
        });
        $jq(".comiis_sidenv_box .sidenv_li .comiis_left_Touch.bdew").append(
          btnNode
        );
      }
      insertLeftButton();
    },
    /**
     * 当本页面动态加载帖子需要重复加载的东西
     */
    pageAfterDOMChangeRunFunction() {
      if (
        !MT_CONFIG.methodRunCheck([
          /bbs.binmt.cc\/forum/,
          /bbs.binmt.cc\/home.php\?mod=space&do=thread&view=me/,
          /home.php\?mod=space&uid=.+&do=thread&view=me/,
        ])
      ) {
        return;
      }
      function beforeHookRun() {
        Utils.tryCatch().run(mobileRepeatFunc.showUserUID);
        Utils.tryCatch().run(mobileRepeatFunc.shieldUser);
        Utils.tryCatch().run(mobileRepeatFunc.shieldPlate);
        Utils.tryCatch().run(mobileRepeatFunc.pageSmallWindowBrowsingForumPost);
        Utils.tryCatch().run(mobileRepeatFunc.codeQuoteCopyBtn);
      }
      document.body.addEventListener("DOMNodeInserted", (event) => {
        let ele = event.target;
        if (
          ele.className != null &&
          ele.className.indexOf("comiis_forumlist") != -1
        ) {
          beforeHookRun();
        }
      });
    },
    /**
     * 付费主题白嫖提醒
     */
    paymentSubjectReminder() {
      let urlForumPostMatchStatus = window.location.href.match(
        MT_CONFIG.urlRegexp.forumPost
      );
      let urlHomeSpaceMatchStatus = window.location.href.match(
        MT_CONFIG.urlRegexp.homeSpaceUrl
      );
      let urlGuideMatchStatus = window.location.href.match(
        MT_CONFIG.urlRegexp.forumGuideUrl
      );
      let urlCommunityMatchStatus =
        window.location.href.match(MT_CONFIG.urlRegexp.communityUrl) ||
        window.location.href.match(MT_CONFIG.urlRegexp.plateUrl);
      let urlBBSMatchStatus = window.location.href.match(
        MT_CONFIG.urlRegexp.bbs
      );

      let storageMatchStatus = GM_getValue("v44") != null;
      let setTipForumPostList = GM_getValue("tipToFreeSubjectForumPost", []);
      const paymentSubjectReminderHome = {
        getData() {
          /* 获取数据 */
          return GM_getValue("tipToFreeSubjectForumPost") == null
            ? []
            : GM_getValue("tipToFreeSubjectForumPost");
        },
        setData(data) {
          /* 设置数据 */
          GM_setValue("tipToFreeSubjectForumPost", data);
        },
        async insertButtonView() {
          /* 插入-底部导航-我的-付费主题白嫖列表(按钮) */
          let comiis_left_Touch = document.createElement("li");
          comiis_left_Touch.className = "comiis_left_Touch";
          let paymentSubjectReminderHomeBtn = document.createElement("a");
          paymentSubjectReminderHomeBtn.setAttribute("href", "javascript:;");
          paymentSubjectReminderHomeBtn.className = "paymentsubjectreminder";
          paymentSubjectReminderHomeBtn.innerHTML = `
                        <div class="styli_tit f_c">
                            <i class="comiis_font" style="color:#ec0000;"></i>
                        </div>
                        <div class="flex">付费主题白嫖列表</div>`;
          GM_addStyle(`
                    .NZ-MsgBox-alert .msgcontainer .msgtitle {
                        text-align: center !important;
                    }
                    #autolist .k_misign_lu img {
                        width: 40px;
                        height: 40px;
                        -moz-border-radius: 20px;
                        -webkit-border-radius: 20px;
                        border-radius: 20px;
                    }
                    .k_misign_lc .f_c{
                        margin: 5px 0px;
                    }
                    details.subjectnotvisit,
                    details.subjectcanvisit{
                        margin-left: 20px;
                    }
                    `);
          paymentSubjectReminderHomeBtn.onclick = () => {
            paymentSubjectReminderHome.showView();
          };
          comiis_left_Touch.append(paymentSubjectReminderHomeBtn);
          $jq(".comiis_sidenv_box .sidenv_li .comiis_left_Touch.bdew").append(
            comiis_left_Touch
          );

          /* Array.from(document.querySelectorAll(".comiis_myinfo_list.bg_f.cl")).forEach((ele) => {
                        if (ele.innerText.match(/消息提醒|资料设置|我的积分|我的勋章|我的道具/)) {
                            ele.append(paymentSubjectReminderHomeBtn);
                            return;
                        }
                    }) */
        },
        async showView() {
          /* 显示-付费主题白嫖列表(dialog) */
          let data = paymentSubjectReminderHome.getData();
          console.log("准备排序的数据: ", data);
          $jq.NZ_MsgBox.alert({
            title: "付费主题白嫖列表",
            content: "<center>获取中...</center>",
            type: "",
            location: "center",
            buttons: {
              confirm: {
                text: "确定",
              },
            },
          });

          let notVisitedTipContent = ""; /* 可白嫖且未访问 */
          let notVisitedNums = 0; /* 可白嫖且未访问的数量 */
          let isFreeContent = ""; /* 可白嫖帖子-未读的加左上边红点 */
          let isPaidContent = ""; /* 需付费帖子 */
          let isFreeNotVisitedContentList = [];
          let isFreeContentList = [];
          let isPaidContentList = [];
          $jq.each(data, (i, v) => {
            let timeColor = "#f91212";
            let leftRedBtn = "";
            if (new Date().getTime() > v["expirationTimeStamp"]) {
              /* 可白嫖 */
              timeColor = "#1e90ff";
              if (v["isVisited"] == false) {
                leftRedBtn =
                  '<span class="icon_msgs bg_del" style="position: fixed;width: 10px;height: 10px;border-radius: 50%;margin: 10px 0px 0px -15px;"></span>';
                notVisitedNums = notVisitedNums + 1;
              } else {
                console.log(v);
                console.log("该帖子已经访问过");
              }
            }
            let concatList = {
              content: `
                            <tbody id="autolist">
                                <tr>
                                    <td style="width: 100%;">
                                        <div style="display: inline-flex;">
                                            ${leftRedBtn}
                                            <div style="width: 240px;">                 
                                                <a href="javascript:void(0);" t-href="${v["url"]}" t-index="${i}" style="color: #1e90ff;">${v["title"]}</a>
                                                <li style="margin: 5px 15px;color: ${timeColor};">${v["expirationTime"]}</li>
                                            </div>
                                            <div style="align-self: center;margin-left: 10px;" t-index="${i}" class="delsubjecttip">
                                                <i class="comiis_font" style="font-size: 24px;padding: 0px 6px;"></i>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr style="height:15px;"></tr>
                            </tbody>
                            `,
              timestamp: v["expirationTimeStamp"],
            };
            if (new Date().getTime() > v["expirationTimeStamp"]) {
              /* 可白嫖 */
              if (leftRedBtn != "") {
                isFreeNotVisitedContentList = [
                  ...isFreeNotVisitedContentList,
                  concatList,
                ];
              } else {
                isFreeContentList = [...isFreeContentList, concatList];
              }
            } else {
              isPaidContentList = [...isPaidContentList, concatList];
            }
          });
          console.log("可白嫖但未访问：", isFreeNotVisitedContentList);
          console.log("可白嫖：", isFreeContentList);
          console.log("未到白嫖时间：", isPaidContentList);
          isFreeNotVisitedContentList.sort(
            Utils.sortListByProperty((item) => {
              return item["expirationTimeStamp"];
            }, false)
          );
          isFreeContentList.sort(
            Utils.sortListByProperty((item) => {
              return item["timestamp"];
            }, false)
          );
          isPaidContentList.sort(
            Utils.sortListByProperty((item) => {
              return item["timestamp"];
            }, false)
          );
          console.log("排序后——可白嫖但未访问：", isFreeNotVisitedContentList);
          console.log("排序后——可白嫖：", isFreeContentList);
          console.log("排序后——未到白嫖时间：", isPaidContentList);
          isFreeContent =
            Utils.mergeArrayToString(isFreeNotVisitedContentList, (item) => {
              return item["content"];
            }) +
            Utils.mergeArrayToString(isFreeContentList, (item) => {
              return item["content"];
            });
          isPaidContent = Utils.mergeArrayToString(
            isPaidContentList,
            (item) => {
              return item["content"];
            }
          );
          if (notVisitedNums > 0) {
            notVisitedTipContent = `<span class="icon_msgs bg_del f_f" style="
                                display: inline-block;
                                position: absolute;
                                width: 16px;
                                height: 16px;
                                line-height: 16px;
                                border-radius: 50%;
                                font-size: 14px;
                                text-align: center;
                                margin: 3px 0px 0px 10px;
                            ">${notVisitedNums}</span>`;
          }
          let dialogIsFreeContent =
            '<details class="subjectcanvisit" open=""><summary>可白嫖' +
            notVisitedTipContent +
            '</summary><table id="paymentSubjectReminderIsFreeList" style="overflow: auto;height: inherit;margin: 15px 0px;">' +
            isFreeContent +
            "</table></details>";
          let dialogIsPaidContent =
            '<details class="subjectnotvisit"><summary>需付费</summary><table id="paymentSubjectReminderIsPaidList" style="overflow: auto;height: inherit;margin: 15px 0px;">' +
            isPaidContent +
            "</table></details>";
          $jq(".msgcon").html("");
          $jq(".msgcon").append(dialogIsFreeContent);
          $jq(".msgcon").append(dialogIsPaidContent);
          $jq(".msgcon").css("height", "400px");
          $jq(".delsubjecttip i.comiis_font").on("click", (e) => {
            var t_index = e.target.parentElement.getAttribute("t-index");
            popup2.confirm({
              text: "<p>确定移出付费主题白嫖列表？</p>",
              mask: true,
              ok: {
                callback: () => {
                  data.splice(t_index, 1);
                  console.log(data);
                  paymentSubjectReminderHome.setData(data);
                  Utils.deleteParentNode(e.target, (dom) => {
                    return dom.localName === "tr" ? true : false;
                  });
                  popup2.closeConfirm();
                },
              },
              only: true,
            });
          });
          $jq("#paymentSubjectReminderIsFreeList").on("click", "a", (e) => {
            var t_index = e.target.getAttribute("t-index");
            var t_href = e.target.getAttribute("t-href");
            console.log(t_index, t_href);
            data[t_index]["isVisited"] = true;
            paymentSubjectReminderHome.setData(data);
            window.open(t_href, "_blank");
            e.target.setAttribute("style", "color: #000000;");
            if (
              e.target.parentElement.parentElement.children[0].className !=
              "icon_msgs bg_del"
            ) {
              return;
            }
            e.target.parentElement.parentElement.children[0].remove();
            $jq("#paymentSubjectReminderIsFreeList").append(
              e.target.parentElement.parentElement.parentElement.parentElement
                .parentElement
            );
            let notVisitedNums = $jq(
              ".subjectcanvisit summary span.icon_msgs.bg_del.f_f"
            ).text();
            notVisitedNums = parseInt(notVisitedNums) - 1;
            if (notVisitedNums > 0) {
              $jq(".subjectcanvisit summary span.icon_msgs.bg_del.f_f").html(
                notVisitedNums
              );
            } else {
              $jq(
                ".subjectcanvisit summary span.icon_msgs.bg_del.f_f"
              ).remove();
            }
          });
          $jq("#paymentSubjectReminderIsPaidList").on("click", "a", (e) => {
            var t_index = e.target.getAttribute("t-index");
            var t_href = e.target.getAttribute("t-href");
            console.log(t_index, t_href);
            window.open(t_href, "_blank");
            e.target.setAttribute("style", "color: #000000;");
          });
        },
      };

      if (storageMatchStatus && urlForumPostMatchStatus) {
        /* 帖子内部-添加进提醒的按钮或者已添加进提醒的按钮点击移出 */
        let paySubjectTip = $jq("span.kmren"); /* 购买主题的元素 */

        if (paySubjectTip.length != 0) {
          console.log("当前帖子存在需要购买主题");
          let isAddTip = false;
          let tipBtnHTML = "";
          Array.from(setTipForumPostList).forEach((item, index) => {
            if (window.location.href.match(item["url"])) {
              isAddTip = true;
              return;
            }
          });
          if (isAddTip) {
            console.log("已设置提醒");
            tipBtnHTML = $jq(
              `<a href="javascript:;" class="styli_tit f_c"><i class="comiis_font" style="color: #ffffff;"></i></a>`
            );
            tipBtnHTML.on("click", function () {
              popup2.confirm({
                text: "<p>确定移出付费主题白嫖列表？</p>",
                ok: {
                  callback: function () {
                    let isRemove = false;
                    Array.from(setTipForumPostList).forEach((item, index) => {
                      if (window.location.href.match(item["url"])) {
                        setTipForumPostList.splice(index, 1);
                        GM_setValue(
                          "tipToFreeSubjectForumPost",
                          setTipForumPostList
                        );
                        isRemove = true;
                        Utils.asyncSetTimeOut("window.location.reload()", 1500);
                        return;
                      }
                    });
                    if (!isRemove) {
                      popup2.toast("移出失败");
                    } else {
                      popup2.closeConfirm();
                      popup2.toast({
                        text: "移出成功",
                      });
                    }
                  },
                },
                mask: true,
              });
            });
          } else {
            console.log("未设置提醒");
            tipBtnHTML = $jq(
              `<a href="javascript:;" class="styli_tit f_c"><i class="comiis_font" style="color: #FF9900;"></i></a>`
            );
            tipBtnHTML.on("click", () => {
              let expirationTimeMatch = $jq(".kmren")
                .parent()
                .text()
                .replace(/\t|\n/g, "")
                .match(
                  /[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}[\s]{1}[0-9]{1,2}:[0-9]{1,2}/
                );
              if (expirationTimeMatch.length == 0) {
                popup2.toast({
                  text: "获取付费主题到期时间失败",
                });
                return;
              }
              let expirationTime = expirationTimeMatch[0];
              let expirationTimeStamp =
                Utils.formatTextToTimeStamp(expirationTime);
              setTipForumPostList = setTipForumPostList.concat({
                url: window.location.href,
                title: document.title.replace(" - MT论坛", ""),
                expirationTime: expirationTime,
                expirationTimeStamp: expirationTimeStamp,
                isVisited: false,
              });
              GM_setValue("tipToFreeSubjectForumPost", setTipForumPostList);
              popup2.toast({
                text: "添加成功",
              });
              setTimeout(function () {
                window.location.reload();
              }, 1500);
            });
          }

          $jq(".comiis_head.f_top .header_y").append(tipBtnHTML);
        }
      }

      if (storageMatchStatus && urlBBSMatchStatus) {
        /* 底部导航-我的-提供类似小黑屋这种可查看设置提醒的帖子 */
        paymentSubjectReminderHome.insertButtonView();
      }

      if (storageMatchStatus) {
        /* 设置提醒小红点 */
        function getTipNums() {
          let needTipNums = 0;
          Array.from(paymentSubjectReminderHome.getData()).forEach(
            (item, index) => {
              if (
                new Date().getTime() > item["expirationTimeStamp"] &&
                item["isVisited"] == false
              ) {
                needTipNums += 1;
              }
            }
          );
          return needTipNums;
        }

        if (
          urlHomeSpaceMatchStatus ||
          urlGuideMatchStatus ||
          urlCommunityMatchStatus
        ) {
          /* 当前网页为，底部导航-我的 */
          let redBtn = $jq(
            ".icon_msgs.bg_del.f_f"
          ); /* 底部导航-我的-右上角小红点 */
          let tipNums = 0;
          if (redBtn.length) {
            tipNums = parseInt(redBtn.text());
            $jq(".icon_msgs.bg_del.f_f").html(tipNums + getTipNums());
            $jq(".comiis_head .header_z .kmuser em").append(
              $jq(`<span class="icon_msgs bg_del"></span>`)
            );
          } else {
            let tipnums = getTipNums();
            if (tipnums) {
              /* $jq("ul.comiis_flex li.flex a[title='我的'] i.comiis_font").append($jq(`<span class="icon_msgs bg_del f_f">${tipnums}</span>`)); */
              $jq(".comiis_head .header_z .kmuser em").append(
                $jq(`<span class="icon_msgs bg_del"></span>`)
              );
            }
          }
        }

        if (urlBBSMatchStatus) {
          /* 当前网页为，全部 */
          let redBtn = $jq(
            ".sidenv_num.bg_del.f_f"
          ); /* 侧边栏-头像-右上角小红点 */
          let tipNums = 0;
          if (redBtn.length) {
            tipNums = parseInt(redBtn.text());
            $jq(".sidenv_num.bg_del.f_f").html(tipNums + getTipNums());
          } else {
            let tipnums = getTipNums();
            if (tipnums) {
              $jq(".sidenv_user em").before(
                $jq(`<span class="sidenv_num bg_del f_f">${tipnums}</span>`)
              );
            }
          }
          if (getTipNums()) {
            /* 当前网页为，侧边slider，付费白嫖列表 */
            /*     $jq(".comiis_left_Touch .paymentsubjectreminder div.flex").append($jq(`<span class="sidenv_num bg_del f_f" style="
                            position: absolute;
                            height: 6px;
                            line-height: 6px;
                            padding: 1px 4px;
                            border-radius: 18px;
                            z-index: 30;
                            margin: 10px 4px 0px 0px;
                        "></span>`)); */
            $jq(".comiis_left_Touch .paymentsubjectreminder div.flex").append(
              $jq(`<span class="sidenv_num bg_del f_f" style="
                    position: relative;
                    border-radius: 18px;
                    height: 6px;
                    width: 6px;
                    left: 3px;
                    display: inline-flex;
                    bottom: 8px;
                "></span>`)
            );
          }
        }
      }
    },
    /**
     * 发帖、回复、编辑预览功能
     */
    previewPostForum() {
      GM_addStyle(`
            #comiis_mh_sub{
                height:40px;
            }
            .gm_plugin_previewpostforum svg{
    
            }
            .gm_plugin_previewpostforum_html .comiis_message_table{
                margin-top: 10px;
                font-weight: initial;
                line-height: 24px;
            }
            .gm_plugin_previewpostforum_html .comiis_message_table a{
                height: auto;
                float: unset;
                color: #507daf !important;
            }
            .gm_plugin_previewpostforum_html .comiis_message_table i{
                text-align: unset;
                font-size: unset;
                line-height: unset;
                padding-top: unset;
                display: unset;

            }
            .comiis_postli.comiis_list_readimgs.nfqsqi{
                width: 100vw;
            }
            .gm_plugin_previewpostforum_html.double-preview{
                width: 50vw;
            }
            .gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style{
                border-left: 1px solid;
            }
            `);
      let open_double = GM_getValue(
        "preview_post_forum_by_double",
        "comiis_checkbox_close"
      );

      function addMenu_preview() {
        /* 添加底部菜单-预览 */
        $jq("#comiis_mh_sub .swiper-wrapper.comiis_post_ico").append(
          $jq(
            `<a href="javascript:;" class="swiper-slide gm_plugin_previewpostforum"><i class="comiis_font" style="display: flex;flex-direction: column;padding-top: 1px;"><svg t="1661243615511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="22" height="22" fill="currentColor"><path d="M470.1 885.3H208.8V138.7h597.3v336c0 20.6 16.7 37.3 37.3 37.3 20.6 0 37.3-16.7 37.3-37.3v-336c0-41.2-33.4-74.7-74.7-74.7H208.8c-41.2 0-74.7 33.4-74.7 74.7v746.7c0 41.2 33.4 74.7 74.7 74.7h261.3c20.6 0 37.3-16.7 37.3-37.3 0.1-20.8-16.6-37.5-37.3-37.5z" p-id="2400"></path><path d="M641.3 496.5c-54.3 0-108.5 23.5-146.2 70.5-54.7 68.3-53.4 168.6 2.8 235.6 37.5 44.8 90.5 67.2 143.4 67.2 35.9 0 71.8-10.3 103-30.9l81.8 81.8c7.3 7.3 16.8 10.9 26.4 10.9 9.6 0 19.1-3.6 26.4-10.9 14.6-14.6 14.6-38.2 0-52.8l-81.8-81.8c48-72.5 40.1-171.1-23.7-234.9-36.5-36.4-84.3-54.7-132.1-54.7z m0 298.7c-36.5 0-72.9-17.6-95.3-52.9-22.6-35.6-22.6-82.5 0-118.1 22.4-35.3 58.9-52.9 95.3-52.9 36.5 0 72.9 17.6 95.3 52.9 22.6 35.6 22.6 82.5 0 118.1-22.4 35.2-58.8 52.9-95.3 52.9z" p-id="2401"></path></svg><em style="bottom: 1px;position: relative;">预览</em></i></a>`
          )
        );
      }

      function addMenu_doubleColumnPreview() {
        /* 添加底部菜单-高级-使用双列预览 */
        $jq("#htmlon")
          .parent()
          .append(
            $jq(`
                <li class="comiis_styli_m f15 comiis_flex b_b">
                    <div class="flex">使用双列预览</div>
                    <div class="styli_r">
                        <input type="checkbox" name="postformdouble" id="postformdouble" value="" class="comiis_checkbox_key">
                        <label for="postformdouble" class="wauto">
                            <code class="bg_f b_ok comiis_checkbox ${open_double}"></code>
                        </label>
                    </div>	
                </li>
                `)
          );
        $jq("#postformdouble").on("click", function () {
          let obj = $jq(this);
          let code_obj = obj.parent().find(".comiis_checkbox");
          if (code_obj.hasClass("comiis_checkbox_close")) {
            GM_setValue("preview_post_forum_by_double", true);
          } else {
            GM_setValue("preview_post_forum_by_double", false);
          }
        });
      }

      function addMenu_immersiveInput() {
        /* 添加底部菜单-高级-使用沉浸输入 */
        $jq("#htmlon")
          .parent()
          .append(
            $jq(`
                <li class="comiis_styli_m f15 comiis_flex b_b">
                    <div class="flex">使用沉浸输入</div>
                    <div class="styli_r">
                        <input type="checkbox" name="immersiveinput" id="immersiveinput" value="" class="comiis_checkbox_key">
                        <label for="immersiveinput" class="wauto">
                            <code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code>
                        </label>
                    </div>	
                </li>
                `)
          );
        $jq("#immersiveinput").on("click", function () {
          let obj = $jq(this);
          let code_obj = obj.parent().find(".comiis_checkbox");
          console.log(code_obj.attr("class"));
          if (code_obj.hasClass("comiis_checkbox_close")) {
            $jq(".comiis_wzpost ul li.comiis_flex").hide(); /* 板块、标题 */
            $jq(
              ".comiis_wzpost ul li.comiis_styli.kmquote"
            ).hide(); /* 回复别人的quote */
            $jq("#pollchecked")
              .parent()
              .parent()
              .hide(); /* 投票,最多可填写 20 个选项 */
            $jq("#pollm_c_1").hide(); /* 投票,增加一项 */
            $jq(
              ".comiis_polloption_add+div.f_0"
            ).hide(); /* 投票,增加一项(编辑状态下) */
            $jq(
              ".comiis_wzpost ul li.comiis_thread_content:contains('内容')"
            ).hide(); /* 投票,内容 */
          } else {
            $jq(".comiis_wzpost ul li.comiis_flex").show();
            $jq(".comiis_wzpost ul li.comiis_styli.kmquote").show();
            $jq("#pollchecked").parent().parent().show();
            $jq("#pollm_c_1").show();
            $jq(".comiis_polloption_add+div.f_0").show();
            $jq(
              ".comiis_wzpost ul li.comiis_thread_content:contains('内容')"
            ).show();
          }
          window.dispatchEvent(new Event("resize"));
        });
      }

      const smiliesDictionaries = {
        /* 表情字典 */
        "[呵呵]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq001.gif",
        "[撇嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq002.gif",
        "[色]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq003.gif",
        "[发呆]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq004.gif",
        "[得意]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq005.gif",
        "[流泪]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq006.gif",
        "[害羞]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq007.gif",
        "[闭嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq008.gif",
        "[睡]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq009.gif",
        "[大哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq010.gif",
        "[尴尬]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq011.gif",
        "[发怒]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq012.gif",
        "[调皮]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq013.gif",
        "[呲牙]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq014.gif",
        "[惊讶]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq015.gif",
        "[难过]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq016.gif",
        "[酷]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq017.gif",
        "[冷汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq018.gif",
        "[抓狂]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq019.gif",
        "[吐]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq020.gif",
        "[偷笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq021.gif",
        "[可爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq022.gif",
        "[白眼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq023.gif",
        "[傲慢]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq024.gif",
        "[饥饿]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq025.gif",
        "[困]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq026.gif",
        "[惊恐]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq027.gif",
        "[流汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq028.gif",
        "[憨笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq029.gif",
        "[装逼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq030.gif",
        "[奋斗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq031.gif",
        "[咒骂]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq032.gif",
        "[疑问]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq033.gif",
        "[嘘]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq034.gif",
        "[晕]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq035.gif",
        "[折磨]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq036.gif",
        "[衰]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq037.gif",
        "[骷髅]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq038.gif",
        "[敲打]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq039.gif",
        "[再见]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq040.gif",
        "[擦汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq041.gif",
        "[抠鼻]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq042.gif",
        "[鼓掌]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq043.gif",
        "[糗大了]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq044.gif",
        "[坏笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq045.gif",
        "[左哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq046.gif",
        "[右哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq047.gif",
        "[哈欠]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq048.gif",
        "[鄙视]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq049.gif",
        "[委屈]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq050.gif",
        "[快哭了]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq051.gif",
        "[阴脸]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq052.gif",
        "[亲亲]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq053.gif",
        "[吓]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq054.gif",
        "[可怜]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq055.gif",
        "[眨眼睛]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq056.gif",
        "[笑哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq057.gif",
        "[dogeQQ]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq058.gif",
        "[泪奔]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq059.gif",
        "[无奈]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq060.gif",
        "[托腮]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq061.gif",
        "[卖萌]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq062.png",
        "[斜眼笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq063.gif",
        "[喷血]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq064.gif",
        "[惊喜]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq065.gif",
        "[骚扰]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq066.gif",
        "[小纠结]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq067.gif",
        "[我最美]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq068.gif",
        "[菜刀]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq069.gif",
        "[西瓜]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq070.gif",
        "[啤酒]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq071.gif",
        "[篮球]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq072.gif",
        "[乒乓]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq073.gif",
        "[咖啡]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq074.gif",
        "[饭]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq075.gif",
        "[猪]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq076.gif",
        "[玫瑰]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq077.gif",
        "[凋谢]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq078.gif",
        "[示爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq079.gif",
        "[爱心]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq080.gif",
        "[心碎]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq081.gif",
        "[蛋糕]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq082.gif",
        "[闪电]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq083.gif",
        "[炸弹]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq084.gif",
        "[刀]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq085.gif",
        "[足球]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq086.gif",
        "[瓢虫]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq087.gif",
        "[便便]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq088.gif",
        "[月亮]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq089.gif",
        "[太阳]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq090.gif",
        "[礼物]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq091.gif",
        "[抱抱]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq092.gif",
        "[喝彩]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq93.gif",
        "[祈祷]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq94.gif",
        "[棒棒糖]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq95.gif",
        "[药]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq96.gif",
        "[赞]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq097.gif",
        "[差劲]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq098.gif",
        "[握手]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq099.gif",
        "[胜利]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq100.gif",
        "[抱拳]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq101.gif",
        "[勾引]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq102.gif",
        "[拳头]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq103.gif",
        "[差劲]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq104.gif",
        "[爱你]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq105.gif",
        "[NO]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq106.gif",
        "[OK]": "https://cdn-bbs.mt2.cn/static/image/smiley/qq/qq107.gif",
        "[#呵呵]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_1.png",
        "[#滑稽]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_10.png",
        "[#吐舌]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_3.png",
        "[#哈哈]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_2.png",
        "[#啊]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_23.png",
        "[#酷]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_22.png",
        "[#怒]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_13.png",
        "[#开心]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_39.png",
        "[#汗]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_14.png",
        "[#泪]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_16.png",
        "[#黑线]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_15.png",
        "[#鄙视]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_21.png",
        "[#不高兴]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_12.png",
        "[#真棒]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_17.png",
        "[#钱]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_40.png",
        "[#疑问]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_26.png",
        "[#阴险]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_20.png",
        "[#吐]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_34.png",
        "[#咦]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_41.png",
        "[#委屈]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_29.png",
        "[#花心]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_6.png",
        "[#呼～]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_42.png",
        "[#激动]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_5.png",
        "[#冷]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_43.png",
        "[#可爱]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_4.png",
        "[#What？]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_25.png",
        "[#勉强]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_38.png",
        "[#狂汗]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_24.png",
        "[#酸爽]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_27.png",
        "[#乖]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_8.png",
        "[#雅美蝶]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_28.png",
        "[#睡觉]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_31.png",
        "[#惊哭]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_19.png",
        "[#哼]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_44.png",
        "[#笑尿]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_32.png",
        "[#惊讶]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_30.png",
        "[#小乖]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_7.png",
        "[#喷]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_18.png",
        "[#抠鼻]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_33.png",
        "[#捂嘴笑]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_9.png",
        "[#你懂的]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_11.png",
        "[#犀利]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_35.png",
        "[#小红脸]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_36.png",
        "[#懒得理]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_37.png",
        "[#爱心]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_45.png",
        "[#心碎]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_46.png",
        "[#玫瑰]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_47.png",
        "[#礼物]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_48.png",
        "[#彩虹]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_49.png",
        "[#太阳]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_50.png",
        "[#月亮]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_51.png",
        "[#钱币]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_52.png",
        "[#咖啡]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_53.png",
        "[#蛋糕]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_54.png",
        "[#大拇指]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_55.png",
        "[#胜利]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_56.png",
        "[#爱你]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_57.png",
        "[#OK]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_58.png",
        "[#弱]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_59.png",
        "[#沙发]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_60.png",
        "[#纸巾]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_61.png",
        "[#香蕉]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_62.png",
        "[#便便]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_63.png",
        "[#药丸]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_64.png",
        "[#红领巾]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_65.png",
        "[#蜡烛]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_66.png",
        "[#三道杠]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_67.png",
        "[#音乐]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_68.png",
        "[#灯泡]":
          "https://cdn-bbs.mt2.cn/static/image/smiley/comiis_tb/tb_69.png",
        "[doge]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/1.png",
        "[doge思考]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/2.png",
        "[doge再见]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/3.png",
        "[doge生气]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/4.png",
        "[doge气哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/5.png",
        "[doge笑哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/7.png",
        "[doge调皮]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/6.png",
        "[doge啊哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/8.png",
        "[doge原谅TA]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/9.png",
        "[miao]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/10.png",
        "[miao思考]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/11.png",
        "[miao拜拜]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/12.png",
        "[miao生气]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/13.png",
        "[miao气哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/14.png",
        "[二哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/15.png",
        "[摊手]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/19.png",
        "[w并不简单]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/20.png",
        "[w滑稽]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/21.png",
        "[w色]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/22.png",
        "[w爱你]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/23.png",
        "[w拜拜]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/24.png",
        "[w悲伤]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/25.png",
        "[w鄙视]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/26.png",
        "[w馋嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/27.png",
        "[w冷汗]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/28.png",
        "[w打哈欠]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/29.png",
        "[w打脸]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/30.png",
        "[w敲打]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/31.png",
        "[w生病]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/32.png",
        "[w闭嘴]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/33.png",
        "[w鼓掌]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/34.png",
        "[w哈哈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/35.png",
        "[w害羞]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/36.png",
        "[w呵呵]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/37.png",
        "[w黑线]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/38.png",
        "[w哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/39.png",
        "[w调皮]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/40.png",
        "[w可爱]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/41.png",
        "[w可怜]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/42.png",
        "[w酷]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/43.png",
        "[w困]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/44.png",
        "[w懒得理你]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/45.png",
        "[w流泪]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/46.png",
        "[w怒]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/47.png",
        "[w怒骂]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/48.png",
        "[w钱]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/49.png",
        "[w亲亲]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/50.png",
        "[w傻眼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/51.png",
        "[w便秘]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/52.png",
        "[w失望]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/53.png",
        "[w衰]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/54.png",
        "[w睡觉]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/55.png",
        "[w思考]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/56.png",
        "[w开心]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/57.png",
        "[w色舔]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/58.png",
        "[w偷笑]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/59.png",
        "[w吐]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/60.png",
        "[w抠鼻]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/61.png",
        "[w委屈]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/62.png",
        "[w笑哭]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/63.png",
        "[w嘻嘻]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/64.png",
        "[w嘘]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/65.png",
        "[w阴险]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/66.png",
        "[w疑问]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/67.png",
        "[w抓狂]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/70.png",
        "[w晕]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/69.png",
        "[w右哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/68.png",
        "[w左哼哼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/71.png",
        "[w肥皂]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/77.png",
        "[w奥特曼]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/78.png",
        "[w草泥马]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/79.png",
        "[w兔子]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/80.png",
        "[w熊猫]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/81.png",
        "[w猪头]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/82.png",
        "[w→_→]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/83.png",
        "[w给力]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/84.png",
        "[w囧]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/85.png",
        "[w萌]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/86.png",
        "[w神马]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/87.png",
        "[w威武]": "https://cdn-bbs.mt2.cn/static/image/smiley/doge/88.png",
      };

      function clickEvent(e) {
        /* 预览按钮点击事件 */
        if ($jq("#polldatas").length) {
          /* 当前是投票帖子 */
          replaceVote();
        }
        if (!$jq(this).find("i.comiis_font").hasClass("f_0")) {
          $jq(".gm_plugin_previewpostforum_html").css("display", "block");
          let replaecdText = replaceText($jq("#needmessage").val());
          $jq(
            ".gm_plugin_previewpostforum_html .comiis_message_table"
          )[0].innerHTML = replaecdText;
          if (open_double) {
            $jq(
              ".gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style"
            ).css("height", $jq("#needmessage").css("height"));
          }
        } else {
          $jq(".gm_plugin_previewpostforum_html").hide();
        }
      }

      function replaceText(text) {
        /* 替换内容 */
        let attachimgmatch = text.match(
          /\[attachimg\]([\s\S]+?)\[\/attachimg\]/g
        );
        if (attachimgmatch) {
          attachimgmatch.forEach((item) => {
            let aimgidMatch = item.match(
              /\[attachimg\]([\s\S]+?)\[\/attachimg\]/
            );
            let aimg_id = aimgidMatch
              ? aimgidMatch[aimgidMatch.length - 1]
              : "";
            let imgtitle = $jq(`#aimg_${aimg_id}`).attr("title");
            let imgsrc = $jq(`#aimg_${aimg_id}`).attr("src");
            if (!imgsrc) {
              imgtitle = "该图片不存在";
            }
            text = text.replace(
              item,
              `<span class="comiis_postimg vm"><img loading="lazy" id="aimg_${aimg_id}" src="${imgsrc}" alt="${imgtitle}" title="${imgtitle}"></span>`
            );
          });
        }

        let code = text.match(/\[code\]([\s\S]*?)\[\/code\]/g);
        if (code) {
          code.forEach((item) => {
            let match_content = item.match(/\[code\]([\s\S]*?)\[\/code\]/);
            let contentAll = match_content
              ? match_content[match_content.length - 1]
              : "";
            let content = "";
            let brSplit = contentAll.split("\n");
            if (brSplit.length == 1) {
              content = `<li>${contentAll}</li>`;
            } else {
              Array.from(brSplit).forEach((item, index) => {
                if (index == brSplit.length - 1) {
                  content = `${content}<li>${item}</li>`;
                } else {
                  content = `${content}<li>${item}<br></li>`;
                }
              });
            }
            text = text.replace(
              item,
              `
                        <div class="comiis_blockcode comiis_bodybg b_ok f_b"><div class="bg_f b_l"><ol>${content}</ol></div></div>`
            );
          });
        }

        let url = text.match(/\[url\=[\s\S]*?\]([\s\S]*?)\[\/url\]/g);
        if (url) {
          url.forEach((item) => {
            let urlMatch = item.match(/\[url=([\s\S]*?)\][\s\S]*\[\/url\]/);
            let urlNameMatch = item.match(
              /\[url=[\s\S]*?\]([\s\S]*?)\[\/url\]/
            );
            let _url_ = urlMatch ? urlMatch[urlMatch.length - 1] : "";
            let _url_name_ = urlNameMatch
              ? urlNameMatch[urlNameMatch.length - 1]
              : "";
            text = text.replace(
              item,
              `<a href="${_url_}" target="_blank">${_url_name_}</a>`
            );
          });
        }
        let color = text.match(/\[color\=[\s\S]*?\]([\s\S]*?)\[\/color\]/g);
        if (color) {
          color.forEach((item) => {
            let colorValueMatch = item.match(
              /\[color=([\s\S]*?)\][\s\S]*\[\/color\]/
            );
            let colorTextMatch = item.match(
              /\[color=[\s\S]*?\]([\s\S]*?)\[\/color\]/
            );
            let colorValue = colorValueMatch
              ? colorValueMatch[colorValueMatch.length - 1]
              : "";
            let colorText = colorTextMatch
              ? colorTextMatch[colorTextMatch.length - 1]
              : "";
            text = text.replace(
              item,
              `<font color="${colorValue}">${colorText}</font>`
            );
          });
        }

        let size = text.match(/\[size\=[\s\S]*?\]([\s\S]*?)\[\/size\]/g);
        if (size) {
          console.log(size);
          size.forEach((item) => {
            let sizeValueMatch = item.match(
              /\[size=([\s\S]*?)\][\s\S]*\[\/size\]/
            );
            let sizeTextMatch = item.match(
              /\[size=[\s\S]*?\]([\s\S]*?)\[\/size\]/
            );
            let sizeValue = sizeValueMatch
              ? sizeValueMatch[sizeValueMatch.length - 1]
              : "";
            let sizeText = sizeTextMatch
              ? sizeTextMatch[sizeTextMatch.length - 1]
              : "";
            text = text.replace(
              item,
              `<font size="${sizeValue}">${sizeText}</font>`
            );
          });
        }

        let img = text.match(/\[img(|\=[\s\S]+?)\]([\s\S]*?)\[\/img\]/g);
        if (img) {
          img.forEach((item) => {
            let widthInfo = null;
            let heightInfo = null;
            let img_size_match = item.match(
              /\[img\=([\s\S]+?)\][\s\S]*?\[\/img\]/
            );
            if (img_size_match) {
              img_size_match =
                img_size_match[img_size_match.length - 1].split(",");
              widthInfo = img_size_match[0];
              heightInfo = img_size_match[1];
            }
            widthInfo = widthInfo ? widthInfo : "";
            heightInfo = heightInfo ? heightInfo : "";
            let match_content = item.match(
              /\[img\]([\s\S]*?)\[\/img\]|\[img=[\s\S]*?\]([\s\S]*?)\[\/img\]/
            );
            let content = "";
            if (match_content) {
              if (match_content[match_content.length - 1] == null) {
                content = match_content[match_content.length - 2];
              } else {
                content = match_content[match_content.length - 1];
              }
            }
            text = text.replace(
              item,
              `<img loading="lazy" src="${content}" border="0" alt="" width="${widthInfo}" height="${heightInfo}" crossoriginNew="anonymous">`
            );
          });
        }

        let hide = text.match(/\[hide\]([\s\S]*?)\[\/hide\]/g);
        if (hide) {
          hide.forEach((item) => {
            let match_content = item.match(/\[hide\]([\s\S]*?)\[\/hide\]/);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            text = text.replace(
              item,
              `<div class="comiis_quote bg_h f_c"><h2 class="f_a">本帖隐藏的内容: </h2>${content}</div>`
            );
          });
        }

        let hide2 = text.match(/\[hide=[\s\S]*?\]([\s\S]*?)\[\/hide\]/g);
        if (hide2) {
          hide2.forEach((item) => {
            let match_content = item.match(
              /\[hide=([\s\S]*?)\]([\s\S]*?)\[\/hide\]/
            );
            let other_info = match_content
              ? match_content[match_content.length - 2]
              : "";
            other_info = other_info.split(",");
            let integral_big_can_see =
              other_info.length == 2 ? other_info[1] : "";

            text = text.replace(
              item,
              `<div class="comiis_quote bg_h f_c">以下内容需要积分高于 ${integral_big_can_see} 才可浏览</div>`
            );
          });
        }

        let quote = text.match(/\[quote\]([\s\S]*?)\[\/quote\]/g);
        if (quote) {
          quote.forEach((item) => {
            let match_content = item.match(/\[quote\]([\s\S]*?)\[\/quote\]/);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            text = text.replace(
              item,
              `<div class="comiis_quote bg_h b_dashed f_c"><blockquote><font>回复</font> ${content}</blockquote></div>`
            );
          });
        }

        let free = text.match(/\[free\]([\s\S]*?)\[\/free\]/g);
        if (free) {
          free.forEach((item) => {
            let match_content = item.match(/\[free\]([\s\S]*?)\[\/free\]/);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            text = text.replace(
              item,
              `<div class="comiis_quote bg_h f_c"><blockquote>${content}</blockquote></div>`
            );
          });
        }

        let strong = text.match(/\[b\]([\s\S]*?)\[\/b\]/g);
        if (strong) {
          strong.forEach((item) => {
            let match_content = item.match(/\[b\]([\s\S]*?)\[\/b\]/i);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            text = text.replace(item, `<strong>${content}</strong>`);
          });
        }

        let xhx = text.match(/\[u\]([\s\S]*?)\[\/u\]/g);
        if (xhx) {
          xhx.forEach((item) => {
            let match_content = item.match(/\[u\]([\s\S]*?)\[\/u\]/);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            text = text.replace(item, `<u>${content}</u>`);
          });
        }

        let qx = text.match(/\[i\]([\s\S]*?)\[\/i\]/g);
        if (qx) {
          qx.forEach((item) => {
            let match_content = item.match(/\[i\]([\s\S]*?)\[\/i\]/);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            text = text.replace(item, `<i>${content}</i>`);
          });
        }

        let strike = text.match(/\[s\]([\s\S]*?)\[\/s\]/g);
        if (strike) {
          strike.forEach((item) => {
            let match_content = item.match(/\[s\]([\s\S]*?)\[\/s\]/);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            text = text.replace(item, `<strike>${content}</strike>`);
          });
        }

        let smilies = text.match(/\[([\s\S]+?)\]/g);
        if (smilies) {
          smilies.forEach((item) => {
            console.log(item);
            let smiliesMatchSrc = smiliesDictionaries[item];
            if (smiliesMatchSrc) {
              text = text.replace(
                item,
                `<img loading="lazy" src="${smiliesMatchSrc}" border="0" alt="" smilieid="">`
              );
            }
          });
        }

        let media = text.match(/\[media=[\s\S]+?\][\s\S]+?\[\/media\]/g);
        if (media) {
          media.forEach((item) => {
            console.log(item);
            let match_content = item.match(
              /\[media=[\s\S]*?\]([\s\S]*?)\[\/media\]/
            );
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            if (content) {
              text = text.replace(
                item,
                `<ignore_js_op><span><iframe src="${content}" border="0" scrolling="no" framespacing="0" allowfullscreen="true" style="max-width: 100%" width="100%" height="auto" frameborder="no"></iframe></span></ignore_js_op>`
              );
            }
          });
        }

        let email = text.match(/\[email=[\s\S]+?\][\s\S]+?\[\/email\]/g);
        if (email) {
          email.forEach((item) => {
            console.log(item);
            let email_match = item.match(
              /\[email=([\s\S]*?)\][\s\S]*?\[\/email\]/
            );
            let content_match = item.match(
              /\[email=[\s\S]*?\]([\s\S]*?)\[\/email\]/
            );
            let _email_ = email_match.length
              ? email_match[email_match.length - 1]
              : "";
            let _content_ = content_match.length
              ? content_match[content_match.length - 1]
              : "";
            if (_email_ || _content_) {
              text = text.replace(
                item,
                `<a href="mailto:${_email_}">${_content_}</a>`
              );
            }
          });
        }

        let align = text.match(/\[align=[\s\S]+?\][\s\S]+?\[\/align\]/g);
        if (align) {
          align.forEach((item) => {
            console.log(item);
            let align_match = item.match(
              /\[align=([\s\S]*?)\][\s\S]+?\[\/align\]/
            );
            let content_match = item.match(
              /\[align=[\s\S]*?\]([\s\S]+?)\[\/align\]/
            );
            let _align_ = align_match.length
              ? align_match[align_match.length - 1]
              : "";
            let _content_ = content_match.length
              ? content_match[content_match.length - 1]
              : "";
            if (_align_ || _content_) {
              text = text.replace(
                item,
                `<div align="${_align_}">${_content_}</div>`
              );
            }
          });
        }
        let qq = text.match(/\[qq\][\s\S]*?\[\/qq\]/g);
        if (qq) {
          qq.forEach((item) => {
            console.log(item);
            let match_content = item.match(/\[qq\]([\s\S]*?)\[\/qq\]/);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            /* 这个是以前的wpa协议，现在是tencent协议，mt的discuz没有更新，如：tencent://message/?uin=xxx&site=bbs.binmt.cc&menu=yes  */
            text = text.replace(
              item,
              `<a href="http://wpa.qq.com/msgrd?v=3&uin=${content}&site=[Discuz!]&from=discuz&menu=yes" target="_blank"><img loading="lazy" src="static/image/common/qq_big.gif" border="0"></a>`
            );
          });
        }

        let td = text.match(/\[td\][\s\S]+?\[\/td\]/g);
        if (td) {
          td.forEach((item) => {
            console.log(item);
            let match_content = item.match(/\[td\]([\s\S]*?)\[\/td\]/);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            text = text.replace(item, `<td>${content}</td>`);
          });
        }
        let tr = text.match(/\[tr\][\s\S]+?\[\/tr\]/g);
        if (tr) {
          tr.forEach((item) => {
            console.log(item);
            let match_content = item.match(/\[tr\]([\s\S]*?)\[\/tr\]/);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            text = text.replace(item, `<tr>${content}</tr>`);
          });
        }
        let table = text.match(/\[table\][\s\S]+?\[\/table\]/g);
        if (table) {
          table.forEach((item) => {
            console.log(item);
            let match_content = item.match(/\[table\]([\s\S]*?)\[\/table\]/);
            let content = match_content
              ? match_content[match_content.length - 1]
              : "";
            content = content.replace(/\n/g, "");
            text = text.replace(item, `<table>${content}</table>`);
          });
        }
        let list = text.match(/\[list=[\s\S]+?\][\s\S]+?\[\/list\]/g);
        if (list) {
          list.forEach((item) => {
            console.log(item);
            let list_model_match = item.match(
              /\[list=([\s\S]*?)\][\s\S]*?\[\/list\]/
            );
            let list_content_match = item.match(
              /\[list=[\s\S]*?\]([\s\S]*?)\[\/list\]/
            );
            let list_model = list_model_match
              ? list_model_match[list_model_match.length - 1]
              : "";
            let list_type = "";
            if (list_model === "a") {
              list_type = "litype_2";
            } else if (list_model === "A") {
              list_type = "litype_3";
            } else if (
              list_model.length === 1 &&
              list_model.match(/[0-9]{1}/)
            ) {
              list_type = "litype_1";
            }
            let content = list_content_match
              ? list_content_match[list_content_match.length - 1]
              : "";
            let li_split = content.split("[*]");
            if (li_split.length > 1) {
              let newContent = "";
              if (li_split[0].replace(/[\s]*/, "") == "") {
                li_split = li_split.slice(1);
              }
              Array.from(li_split).forEach((item) => {
                newContent = `${newContent}<li>${item}</li>`;
              });
              content = newContent;
            }
            content = content.replace(/\n/g, "");
            text = text.replace(
              item,
              `<ul type="${list_model}" class="${list_type}">${content}</ul>`
            );
          });
        }

        $jq(
          ".gm_plugin_previewpostforum_html .comiis_quote.comiis_qianglou"
        ).remove();
        let password = text.match(/\[password\](.*?)\[\/password\]/gi);
        if (password) {
          password.forEach((item) => {
            console.log(item);
            text = item.replace(/\[password\](.*?)\[\/password\]/gi, "");

            $jq(
              ".gm_plugin_previewpostforum_html .comiis_message_table"
            ).before(
              $jq(`
                            <div class="comiis_quote comiis_qianglou bg_h" style="display: flex;">
                                <i class="comiis_font f_a" style="font-size: 16px;"></i>&nbsp;付费主题, 价格: <strong>${$jq(
                                  "#price"
                                ).val()} 金币</strong>
                                <a href="javascript:;" class="y f_a" style="height: auto;color: #FF9900 !important;right: 5px;position: absolute;">记录</a></div>`)
            );
          });
        }

        let every_reward = parseInt($jq("#replycredit_extcredits").val());
        let total_reward = parseInt($jq("#replycredit_times").val());
        let getreward_menbertimes = parseInt(
          $jq("#replycredit_membertimes").val()
        );
        let getreward_random = parseInt($jq("#replycredit_random").val());
        $jq(".gm_plugin_previewpostforum_html .comiis_htjl").remove();
        if (
          !isNaN(every_reward) &&
          !isNaN(total_reward) &&
          every_reward > 0 &&
          total_reward > 0
        ) {
          $jq(".gm_plugin_previewpostforum_html .comiis_message_table").before(
            $jq(`
                    <div class="comiis_htjl bg_h f_a">
                        <i class="comiis_font"></i>
                        总共奖励 ${total_reward} 金币<br>回复本帖可获得 ${every_reward} 金币奖励! 每人限 ${getreward_menbertimes} 次 ${
              getreward_random != 100 ? `(中奖概率 ${getreward_random}%)` : ""
            }
                    </div>
                    `)
          );
        }

        text = text.replace(/\[hr\]/g, '<hr class="l">');
        text = text.replace(/\[\*\]/g, "<li></li>");
        text = text.replace(/\n/g, "<br>");
        return text;
      }

      function replaceVote() {
        /* 替换预览投票 */
        let chooseColor = [
          "rgb(233, 39, 37)",
          "rgb(242, 123, 33)",
          "rgb(242, 166, 31)",
          "rgb(90, 175, 74)",
          "rgb(66, 196, 245)",
          "rgb(0, 153, 204)",
          "rgb(51, 101, 174)",
          "rgb(42, 53, 145)",
          "rgb(89, 45, 142)",
          "rgb(219, 49, 145)",
          "rgb(233, 39, 37)",
          "rgb(242, 123, 33)",
          "rgb(242, 166, 31)",
          "rgb(90, 175, 74)",
          "rgb(66, 196, 245)",
          "rgb(0, 153, 204)",
          "rgb(51, 101, 174)",
          "rgb(42, 53, 145)",
          "rgb(89, 45, 142)",
          "rgb(219, 49, 145)",
        ]; /* 选择的背景 */
        let chooseContent = $jq(
          ".comiis_polloption_add ul li:first-child div.flex .comiis_input.kmshow[type='text']"
        ); /* 选项，最多20个 */
        let maxchoices = parseInt($jq("input#maxchoices").val()); /* 最多可选 */
        maxchoices = isNaN(maxchoices) ? 0 : maxchoices;
        maxchoices = maxchoices > 0 ? maxchoices : 0;
        maxchoices =
          maxchoices > chooseContent.length
            ? chooseContent.length
            : maxchoices; /* 大于当前选项数量的话为当前最大选项数量 */
        let polldatas = parseInt($jq("input#polldatas").val()); /* 记票天数 */
        polldatas = isNaN(polldatas) ? 0 : polldatas;

        let visibilitypoll = $jq("input#visibilitypoll")
          .parent()
          .find(".comiis_checkbox")
          .hasClass("comiis_checkbox_close")
          ? false
          : true; /* 投票后结果可见 */
        let overt = $jq("input#overt")
          .parent()
          .find(".comiis_checkbox")
          .hasClass("comiis_checkbox_close")
          ? false
          : true; /* 公开投票参与人 */
        let html = "";
        let choosehtml = "";
        console.log(chooseContent);
        chooseContent.each((i, v) => {
          if (i >= 20) {
            /* 最多20个 */
            return;
          }
          choosehtml =
            choosehtml +
            `
                    <li class="kmnop">
                        <input type="${maxchoices > 1 ? "checkbox" : "radio"}">
                        <label><i class="comiis_font f_d"></i>${
                          v.value
                        }</label>
                    </li>
                    <li class="poll_ok cl">
                        <span class="bg_b">
                            <em style="width:2%;background-color:${
                              chooseColor[i]
                            }"></em>
                        </span>
                        <em style="color:${chooseColor[i]}">0% (0)</em>
                    </li>`;
        });
        html = `
                    <div class="comiis_poll cl comiis_input_style b_t postforum_vote">
                            <div class="comiis_poll_top">
                                <i class="comiis_font bg_a f_f"></i>
                                <h2>${
                                  maxchoices > 1
                                    ? "多选投票" +
                                      '<em class="f_c"> 最多可选 ' +
                                      maxchoices +
                                      " 项</em>"
                                    : "单选投票"
                                }</h2>
                                <p class="f_c">共有 0 人参与投票</p>
                                ${
                                  polldatas > 0
                                    ? ` <p class="kmbtn">
                                <span class="bg_e">距结束还有:
                                ${
                                  polldatas > 1
                                    ? '<em class="f_a">' +
                                      (polldatas - 1) +
                                      "</em> 天 "
                                    : ""
                                }<em class="f_a">23</em> 小时 <em class="f_a">59</em> 分钟</span>
                            </p>`
                                    : ""
                                }
                               
                            </div>
                            <div class="comiis_poll_list comiis_input_style cl">
                                <ul>
                                    ${choosehtml}
                                </ul>
                            </div>
                            <div class="comiis_poll_bottom cl">
                                <input type="submit" value="提交" class="formdialog comiis_btn kmshow bg_c f_f" disabled>
                                ${
                                  overt
                                    ? '<div class="comiis_quote bg_h b_dashed f_a"><i class="comiis_font"></i>此为公开投票，其他人可看到您的投票项目</div>'
                                    : ""
                                }
                            </div>
                    </div>
                `;
        $jq(".gm_plugin_previewpostforum_html .postforum_vote").remove();
        $jq(
          ".gm_plugin_previewpostforum_html .comiis_messages.comiis_aimg_show"
        )
          .children()
          .eq(0)
          .before($jq(html));
      }

      function keyUpEvent(e) {
        /* 内容输入事件 */
        let userInputText = e.target.value;
        let replaecdText = replaceText(userInputText);
        $jq(
          ".gm_plugin_previewpostforum_html .comiis_message_table"
        )[0].innerHTML = replaecdText;
      }

      if (typeof unsafeWindow.comiis_addsmilies == "function") {
        /* 替换全局函数添加图片到里面触发input */
        unsafeWindow.comiis_addsmilies = (_str_) => {
          unsafeWindow.$("#needmessage").comiis_insert(_str_);
          unsafeWindow.$("#needmessage")[0].dispatchEvent(new Event("input"));
        };
      }
      addMenu_doubleColumnPreview();
      addMenu_preview();
      addMenu_immersiveInput();
      if (open_double) {
        /* box-shadow: -1px 0px 8px; */
        $jq("#needmessage").parent().css("display", "flex");
        $jq("#needmessage").after(
          $jq(`
                <div class="bg_f cl gm_plugin_previewpostforum_html double-preview" style="display: none;">
                    <div class="comiis_over_box comiis_input_style">
                        <div class="comiis_postli comiis_list_readimgs nfqsqi" style="width: 50vw;">
                            <div class="comiis_message bg_f view_one cl message" style="margin-bottom: auto;padding: 0px 12px 0px 12px;">
                                <div class="comiis_messages comiis_aimg_show cl" style="overflow-y: auto;position: relative;">
                                    <div class="comiis_a comiis_message_table cl" style="margin: 0;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`)
        );
      } else {
        $jq("#comiis_post_tab").append(
          $jq(`
                <div class="bg_f cl gm_plugin_previewpostforum_html" style="display: none;">
                    <div class="comiis_over_box comiis_input_style">
                        <div class="comiis_postli comiis_list_readimgs nfqsqi">
                            <div class="comiis_message bg_f view_one cl message" style="margin-bottom: auto;padding: 0px 12px 0px 12px;">
                                <div class="comiis_messages comiis_aimg_show cl" style="overflow-y: auto;position: relative;">
                                    <div class="comiis_a comiis_message_table cl">
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`)
        );
      }

      $jq("#needmessage").on("propertychange input", keyUpEvent);
      $jq(".gm_plugin_previewpostforum").on("click", clickEvent);
    },
    /**
     * 编辑器中的ubb代码
     */
    quickUBB: {
      code: {
        rainbow1: {
          key: "转普通彩虹",
          value: "",
          isFunc: true,
          num: 1,
        },
        rainbow2: {
          key: "转黑白彩虹",
          value: "",
          isFunc: true,
          num: 2,
        },
        rainbow3: {
          key: "转黑红彩虹",
          value: "",
          isFunc: true,
          num: 3,
        },
        rainbow4: {
          key: "转蓝绿彩虹",
          value: "",
          isFunc: true,
          num: 4,
        },
        size: {
          key: "size",
          value: "[size=][/size]",
          tagL: "=",
          tagR: "]",
          L: "[size=]",
          R: "[/size]",
          cursorL: "[size=",
          cursorLength: 6,
          quickUBBReplace: "[size=14]replace[/size]",
        },
        color: {
          key: "color",
          value: "[color=][/color]",
          tagL: "=",
          tagR: "]",
          L: "[color=]",
          R: "[/color]",
          cursorL: "[color=",
          cursorLength: 7,
          quickUBBReplace: "[color=#000]replace[/color]",
        },
        b: {
          key: "加粗",
          value: "[b][/b]",
          tagL: "]",
          tagR: "[",
          L: "[b]",
          R: "[/b]",
          cursorR: "[/b]",
          cursorLength: 4,
          quickUBBReplace: "[b]replace[/b]",
        },
        u: {
          key: "下划线",
          value: "[u][/u]",
          tagL: "]",
          tagR: "[",
          L: "[u]",
          R: "[/u]",
          cursorR: "[/u]",
          cursorLength: 4,
          quickUBBReplace: "[u]replace[/u]",
        },
        i: {
          key: "倾斜",
          value: "[i][/i]",
          tagL: "]",
          tagR: "[",
          L: "[i]",
          R: "[/i]",
          cursorR: "[/i]",
          cursorLength: 4,
          quickUBBReplace: "[i]replace[/i]",
        },
        s: {
          key: "中划线",
          value: "[s][/s]",
          tagL: "]",
          tagR: "[",
          L: "[s]",
          R: "[/s]",
          cursorR: "[/s]",
          cursorLength: 4,
          quickUBBReplace: "[s]replace[/s]",
        },
        lineFeed: {
          key: "换行",
          value: "[*]",
          L: "",
          R: "[*]",
          cursorL: "[*]",
          cursorLength: 3,
          quickUBBReplace: "replace[*]",
        },
        longHorizontalLine: {
          key: "水平线",
          value: "[hr]",
          L: "",
          R: "[hr]",
          cursorL: "[hr]",
          cursorLength: 4,
          quickUBBReplace: "replace[hr]",
        },
        link: {
          key: "链接",
          value: "[url=][/url]",
          tagL: "=",
          tagR: "]",
          L: "[url=]",
          R: "[/url]",
          cursorL: "[url=",
          cursorLength: 5,
          quickUBBReplace: "[url=replace]replace[/url]",
        },
        hide: {
          key: "隐藏",
          value: "[hide]\n[/hide]",
          tagL: "]",
          tagR: "[",
          L: "[hide]",
          R: "[/hide]",
          cursorR: "[/hide]",
          cursorLength: 7,
          quickUBBReplace: "[hide]replace\n[/hide]",
        },
        quote: {
          key: "引用",
          value: "[quote][/quote]",
          tagL: "]",
          tagR: "[",
          L: "[quote]",
          R: "[/quote]",
          cursorR: "[/quote]",
          cursorLength: 8,
          quickUBBReplace: "[quote]replace[/quote]",
        },
        email: {
          key: "邮件",
          value: "[email=][/email]",
          tagL: "=",
          tagR: "]",
          L: "[email=]",
          R: "[/email]",
          cursorL: "[email=",
          cursorLength: 7,
          quickUBBReplace: "[email=replace]replace[/email]",
        },
      },
      insertQuickReplyUBB: () => {
        /* 快捷回复 */
        $jq.each(mobile.quickUBB.code, function (index, value) {
          let ubbs = $jq(
            `<li class="quickUBBs"><a href="javascript:;" class="comiis_xifont f_d"><i class="comiis_font"></i>${value["key"]}</a></li>`
          );
          ubbs.on("click", function () {
            $jq(
              "#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont"
            )
              .removeClass("f_0")
              .addClass("f_d");
            $jq(this).find(".comiis_xifont").removeClass("f_d").addClass("f_0");

            popup2.confirm({
              text: `<input type="text" placeholder="请输入需要${value["key"]}的文字" class="quickinsertbbsdialog">
                            <style>
                            .quickinsertbbsdialog::-webkit-input-placeholder{
                                overflow:hidden;
                                text-overflow:ellipsis;
                                white-space:nowrap;
                                color: #cfcfcf;
                            }
                            .quickinsertbbsdialog{
                                height: 32px;
                                line-height: 32px;
                                border: none;
                                font-size: 15px;
                                border-bottom: 1px solid #000;
                                margin: 30px 12px 10px 12px;
                                width: -webkit-fill-available;
                            }</style>`,
              mask: true,
              only: true,
              ok: {
                callback: () => {
                  let userInput = $jq(".quickinsertbbsdialog").val();
                  if (userInput.trim() == "") {
                    popup2.toast({
                      text: "输入框不能为空或纯空格",
                    });
                    return;
                  }
                  if (value["isFunc"]) {
                    comiis_addsmilies(
                      mobile.quickUBB.set_rainbow(value["num"], userInput)
                    ); /* 插入贴内 */
                  } else if (value["quickUBBReplace"]) {
                    comiis_addsmilies(
                      value["quickUBBReplace"].replaceAll("replace", userInput)
                    ); /* 插入贴内 */
                  } else {
                    comiis_addsmilies(userInput); /* 插入贴内 */
                  }
                  popup2.closeConfirm();
                },
              },
            });
          });
          $jq("#comiis_insert_ubb_tab div.comiis_post_urlico ul").append(
            ubbs[0]
          );
        });
      },
      insertReplayUBB: () => {
        /* 具体回复 */
        let insertDOM = $jq(".comiis_post_urlico");
        if (!insertDOM) {
          console.log("未找到插入元素");
          return;
        }
        GM_addStyle(`
                #comiis_post_tab .comiis_input_style .comiis_post_urlico li a.f_0{
                    color: #53bcf5 !important;
                }
                `);
        let parentEle = $jq(".comiis_post_urlico > ul")[0];
        let contentEle = $jq("#comiis_post_qydiv > ul");
        let childNums = $jq("#comiis_post_qydiv ul li").length;
        mobile.quickUBB.jqueryExtraFunction();

        $jq("#comiis_post_tab .comiis_input_style .comiis_post_urlico li").on(
          "click",
          function () {
            $jq(
              "#comiis_post_tab .comiis_input_style .comiis_post_urlico li a"
            ).removeClass("f_0");
            $jq(
              "#comiis_post_tab .comiis_input_style .comiis_post_urlico li a"
            ).addClass("f_d");
            $jq(this).find("a").attr("class", "comiis_xifont f_0");
            $jq("#comiis_post_qydiv ul li")
              .hide()
              .eq($jq(this).index())
              .fadeIn();
          }
        );
        $jq.each(mobile.quickUBB.code, function (key, value) {
          let ubbs = $jq(
            `<li class="quickUBBs"><a href="javascript:;" class="comiis_xifont f_d"><i class="comiis_font"></i>${value["key"]}</a></li>`
          );
          ubbs.on("click", (e) => {
            let bottomEle = $jq(
              `#comiis_post_qydiv li[data-key='${value.key}']`
            );
            if (!bottomEle.length) {
              console.log("未找到该元素");
              return;
            }
            let contentIndex =
              childNums + Object.keys(mobile.quickUBB.code).indexOf(key);
            console.log(contentIndex);
            $jq("#comiis_post_qydiv ul li").hide().eq(contentIndex).fadeIn();
            $jq.each(
              $jq(
                "#comiis_post_tab div.comiis_post_urlico ul li a.comiis_xifont"
              ),
              (i, v) => {
                v.className = "comiis_xifont f_d";
                if (v == e.target) {
                  v.className = "comiis_xifont f_0";
                }
              }
            );
          });
          parentEle.append(ubbs[0]);

          let ubbs_content = document.createElement("li");
          ubbs_content.setAttribute("style", "display: none;");
          ubbs_content.setAttribute("data-key", value["key"]);
          ubbs_content.innerHTML = `
                        <div class="comiis_styli_m f15" style="padding-top:12px;">
                            <div class="bg_e comiis_p5" style="border-radius:4px"><textarea class="comiis_pt kmshow f_c" id="comiis_input_${key}" style="font-size:15px" placeholder="请输入需要${value["key"]}的文字"></textarea></div>
                        </div>
                        <div class="comiis_styli_m f15 comiis_flex" style="padding-top:0;">
                            <div class="styli_tit"><button class="comiis_sendbtn bg_0 f_f" data-keyI="${key}" type="button">插入</button></div>
                            <div class="flex"></div>
                        </div>`;

          contentEle.append(ubbs_content);
          $jq(`.comiis_sendbtn[data-keyI="${key}"]`).on("click", () => {
            let text = $jq(`#comiis_input_${key}`).val();
            if (text == "") {
              popup2.toast("请输入需要插入的内容");
              return;
            }
            if (mobile.quickUBB.code[key]["isFunc"]) {
              text = mobile.quickUBB.set_rainbow(
                mobile.quickUBB.code[key]["num"],
                text
              );
            }
            if (mobile.quickUBB.code[key].hasOwnProperty("L")) {
              text =
                mobile.quickUBB.code[key]["L"] +
                text +
                mobile.quickUBB.code[key]["R"];
            }
            $jq("#needmessage").insertAtCaret(text);
            /*
                        if (mobile.quickUBB.code[key]["tagL"] != undefined || mobile.quickUBB.code[key]["tagR"] != undefined) {
                            $jq("#needmessage").moveCursorInCenterByText(mobile.quickUBB.code[key]["tagL"], mobile.quickUBB.code[key]["tagR"]);
                        }*/
            if (mobile.quickUBB.code[key].hasOwnProperty("cursorL")) {
              $jq("#needmessage").moveCursorToCenterByTextWithLeft(
                mobile.quickUBB.code[key]["cursorL"],
                mobile.quickUBB.code[key]["cursorLength"]
              );
            }
            if (mobile.quickUBB.code[key].hasOwnProperty("cursorR")) {
              $jq("#needmessage").moveCursorToCenterByTextWithRight(
                mobile.quickUBB.code[key]["cursorR"],
                mobile.quickUBB.code[key]["cursorLength"]
              );
            }
          });
        });
      },
      set_rainbow: (num, text) => {
        if (text == "") {
          return "";
        }
        var wr_text = text;
        var wr_code, wr_rgb, r, g, b, i, j, istep;
        var wr_rgb1, wr_rgb2, r1, g1, b1, r2, g2, b2;

        r1 = g1 = b1 = r2 = g2 = b2 = 0;
        r = 0;
        g = 0;
        b = 0;
        istep = 0;
        wr_code = "";

        if (num == 1) {
          istep = 40;
          r = 255;
          i = 1;
          j = 0;
          do {
            if (wr_text.charCodeAt(j) != 32) {
              if (g + istep < 256) {
                if (i == 1) g += istep;
              } else if (i == 1) {
                i = 2;
                g = 255;
              }
              if (r - istep > -1) {
                if (i == 2) r -= istep;
              } else if (i == 2) {
                i = 3;
                r = 0;
              }
              if (b + istep < 256) {
                if (i == 3) b += istep;
              } else if (i == 3) {
                i = 4;
                b = 255;
              }
              if (g - istep > -1) {
                if (i == 4) g -= istep;
              } else if (i == 4) {
                i = 5;
                g = 0;
              }
              if (r + istep < 256) {
                if (i == 5) r += istep;
              } else if (i == 5) {
                i = 6;
                r = 255;
              }
              if (b - istep > -1) {
                if (i == 6) b -= istep;
              } else if (i == 6) {
                i = 1;
                b = 0;
              }
              wr_rgb = "";
              wr_rgb +=
                parseInt(r).toString(16).length == 1
                  ? 0 + parseInt(r).toString(16)
                  : parseInt(r).toString(16);
              wr_rgb +=
                parseInt(g).toString(16).length == 1
                  ? 0 + parseInt(g).toString(16)
                  : parseInt(g).toString(16);
              wr_rgb +=
                parseInt(b).toString(16).length == 1
                  ? 0 + parseInt(b).toString(16)
                  : parseInt(b).toString(16);
              wr_rgb = wr_rgb.toUpperCase();
              wr_code += `[color=#${wr_rgb}]${wr_text.charAt(j)}[/color]`;
            } else {
              wr_code += wr_text.charAt(j);
            }
            j++;
          } while (j < wr_text.length);
        } else if (num == 2) {
          istep = 255 / wr_text.length;
          for (i = 1; i < wr_text.length + 1; i++) {
            if (wr_text.charCodeAt(i - 1) != 32) {
              r += istep;
              g += istep;
              b += istep;
              if (r > 255) r = 255;
              if (g > 255) g = 255;
              if (b > 255) b = 255;
              wr_rgb = "";
              wr_rgb +=
                parseInt(r).toString(16).length == 1
                  ? 0 + parseInt(r).toString(16)
                  : parseInt(r).toString(16);
              wr_rgb +=
                parseInt(g).toString(16).length == 1
                  ? 0 + parseInt(g).toString(16)
                  : parseInt(g).toString(16);
              wr_rgb +=
                parseInt(b).toString(16).length == 1
                  ? 0 + parseInt(b).toString(16)
                  : parseInt(b).toString(16);
              wr_rgb = wr_rgb.toUpperCase();
              wr_code += `"[color=#${wr_rgb}]${wr_text.charAt(i - 1)}[/color]`;
            } else {
              wr_code += wr_text.charAt(i - 1);
            }
          }
        } else if (num == 3) {
          istep = 255 / wr_text.length;
          for (i = 1; i < wr_text.length + 1; i++) {
            if (wr_text.charCodeAt(i - 1) != 32) {
              r += istep;
              g = 29;
              b = 36;
              if (r > 255) r = 255;
              if (g > 255) g = 255;
              if (b > 255) b = 255;
              wr_rgb = "";
              wr_rgb +=
                parseInt(r).toString(16).length == 1
                  ? 0 + parseInt(r).toString(16)
                  : parseInt(r).toString(16);
              wr_rgb +=
                parseInt(g).toString(16).length == 1
                  ? 0 + parseInt(g).toString(16)
                  : parseInt(g).toString(16);
              wr_rgb +=
                parseInt(b).toString(16).length == 1
                  ? 0 + parseInt(b).toString(16)
                  : parseInt(b).toString(16);
              wr_rgb = wr_rgb.toUpperCase();
              wr_code += `[color=#${wr_rgb}]${wr_text.charAt(i - 1)}[/color]`;
            } else {
              wr_code += wr_text.charAt(i - 1);
            }
          }
        } else if (num == 4) {
          istep = 255 / wr_text.length;
          for (i = 1; i < wr_text.length + 1; i++) {
            if (wr_text.charCodeAt(i - 1) != 32) {
              r = 0;
              g = 174;
              b += istep;
              if (r > 255) r = 255;
              if (g > 255) g = 255;
              if (b > 255) b = 255;
              wr_rgb = "";
              wr_rgb +=
                parseInt(r).toString(16).length == 1
                  ? 0 + parseInt(r).toString(16)
                  : parseInt(r).toString(16);
              wr_rgb +=
                parseInt(g).toString(16).length == 1
                  ? 0 + parseInt(g).toString(16)
                  : parseInt(g).toString(16);
              wr_rgb +=
                parseInt(255 - b).toString(16).length == 1
                  ? 0 + parseInt(255 - b).toString(16)
                  : parseInt(255 - b).toString(16);
              wr_rgb = wr_rgb.toUpperCase();
              wr_code += `[color=#${wr_rgb}]${wr_text.charAt(i - 1)}[/color]`;
            } else {
              wr_code += wr_text.charAt(i - 1);
            }
          }
        }
        return wr_code;
      },
      jqueryExtraFunction: () => {
        $jq.fn.extend({
          insertAtCaret: function (myValue) {
            var $t = $jq(this)[0];
            if (document.selection) {
              this.focus();
              var sel = document.selection.createRange();
              sel.text = myValue;
              this.focus();
            } else if ($t.selectionStart || $t.selectionStart == "0") {
              var startPos = $t.selectionStart;
              var endPos = $t.selectionEnd;
              var scrollTop = $t.scrollTop;
              $t.value =
                $t.value.substring(0, startPos) +
                myValue +
                $t.value.substring(endPos, $t.value.length);
              this.focus();
              $t.selectionStart = startPos + myValue.length;
              $t.selectionEnd = startPos + myValue.length;
              $t.scrollTop = scrollTop;
            } else {
              this.value += myValue;
              this.focus();
            }
          },
          selectRange: function (start, end) {
            if (end === undefined) {
              end = start;
            }
            return this.each(function () {
              if ("selectionStart" in this) {
                this.selectionStart = start;
                this.selectionEnd = end;
              } else if (this.setSelectionRange) {
                this.setSelectionRange(start, end);
              } else if (this.createTextRange) {
                var range = this.createTextRange();
                range.collapse(true);
                range.moveEnd("character", end);
                range.moveStart("character", start);
                range.select();
              }
            });
          },
          getCursorPosition: function () {
            var el = $jq(this)[0];
            var pos = 0;
            if ("selectionStart" in el) {
              pos = el.selectionStart;
            } else if ("selection" in document) {
              el.focus();
              var Sel = document.selection.createRange();
              var SelLength = document.selection.createRange().text.length;
              Sel.moveStart("character", -el.value.length);
              pos = Sel.text.length - SelLength;
            }
            return pos;
          },
          moveCursorInCenterByText: function (leftTextFlag, rightTextFlag) {
            var el = $jq(this)[0];
            var el_text = el.value;
            for (let i = el.selectionStart - 1; i > 0; i--) {
              let LText = el_text[i - 1];
              let currentText = el_text[i];
              if (LText == leftTextFlag && currentText == rightTextFlag) {
                this.selectRange(i);
                break;
              }
            }
          },
          moveCursorToCenterByTextWithLeft: function (leftMatchText, _length_) {
            var el = $jq(this)[0];
            var el_text = el.value;
            for (let i = el.selectionStart - 1; i > 0; i--) {
              let lTexts = el_text.substring(i - _length_, i);
              if (lTexts == leftMatchText) {
                this.selectRange(i);
                break;
              }
            }
          },
          moveCursorToCenterByTextWithRight: function (
            rightMatchText,
            _length_
          ) {
            var el = $jq(this)[0];
            var el_text = el.value;
            for (let i = el.selectionStart - 1; i > 0; i--) {
              let rTexts = el_text.substring(i, i + _length_);
              if (rTexts == rightMatchText) {
                this.selectRange(i + _length_);
                break;
              }
            }
          },
        });
      },
    },
    /**
     * 修复图片宽度
     */
    recoveryIMGWidth() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.forumPost], "v16")) {
        return;
      }

      GM_addStyle(`
                .comiis_messages img{
                    max-width: 100% !important;
                }
                `);
    },
    /**
     * 移除帖子内的字体style
     */
    removeForumPostFontStyle() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.forumPost], "v1")) {
        return;
      }

      if ($jq(".comiis_a.comiis_message_table").eq(0).html()) {
        $jq(".comiis_a.comiis_message_table")
          .eq(0)
          .html(
            $jq(".comiis_a.comiis_message_table")
              .eq(0)
              .html()
              .replace(MT_CONFIG.urlRegexp.fontSpecial, "")
          );
      }
    },
    /**
     * 修复搜索的清空按钮
     */
    repairClearSearchInput() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.searchUrl], "v36")) {
        return;
      }

      let $search_input = $jq(".ssclose.bg_e.f_e");
      if ($search_input) {
        $search_input.click(function (e) {
          e.preventDefault();
          $jq("#scform_srchtxt").val("");
        });
      } else {
        console.log("搜索界面: 获取清空按钮失败");
      }
    },
    /**
     * 修复评论区打赏评论因为文字或打赏人数评论太多导致高度显示不出来问题
     */
    repairRecommendRewardHeight() {
      if (window.location.href.match(MT_CONFIG.urlRegexp.forumPost)) {
        GM_addStyle(`
        .comiis_view_lcrate li p{
          height: auto !important;
        }
        `);
      }
    },
    /**
     * 修复无法正确进入别人的空间
     */
    repairUnableToEnterOtherSpaceCorrectly() {
      if (!GM_getValue("v37")) {
        return;
      }

      if (window.location.href.match(MT_CONFIG.urlRegexp.homeUrlBrief)) {
        let href_params = window.location.href.match(/home.php\?(.+)/gi);
        href_params = href_params[href_params.length - 1];
        let params_split = href_params.split("&");
        if (
          params_split.length == 2 &&
          href_params.indexOf("uid=") != -1 &&
          href_params.indexOf("mod=space") != -1
        ) {
          window.location.href = window.location.href + "&do=profile";
        }
      }
      if (window.location.href.match(MT_CONFIG.urlRegexp.homeUrlWithAt)) {
        let href_params = window.location.href.match(/space-uid-(.+).html/i);
        href_params = href_params[href_params.length - 1];
        window.location.href = `https://bbs.binmt.cc/home.php?mod=space&uid=${href_params}&do=profile`;
      }
    },
    /**
     * 搜索历史
     */
    async searchHistory() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.searchUrl], "v19")) {
        return;
      }
      class searchSelect {
        constructor(config) {
          this.parentDOM = config.parentDOM ? config.parentDOM : null;
          this.list = this.arrayDistinct(
            config.list ? config.list : []
          ); /* 用于搜索的数组 */
          this.showList = this.list.length
            ? this.list
            : []; /* 用于显示在界面上的数组 */
          this.inputValueChangeEvent = config.inputValueChangeEvent
            ? config.inputValueChangeEvent
            : () => {
                return [];
              };
          this.css = {
            falInDuration: config?.css?.falInDuration
              ? config?.css?.falInDuration
              : 0.5,
            falInTiming: config?.css?.falInTiming
              ? config?.css?.falInTiming
              : "linear",
            falOutDuration: config?.css?.falOutDuration
              ? config?.css?.falOutDuration
              : 0.5,
            falOutTiming: config?.css?.falOutTiming
              ? config?.css?.falOutTiming
              : "linear",
            PaddingTop: config?.css?.PaddingTop
              ? config?.css?.PaddingTop
              : 8 /* 选择框距离输入框距离 */,
          };
          this.searchSelectClassName = config.searchSelectClassName
            ? config.searchSelectClassName
            : "WhiteSevsSearchSelect"; /* 可修改div */
          this.searchSelectHintClassName = config.searchSelectHintClassName
            ? config.searchSelectHintClassName
            : "whiteSevSearchHint"; /* 可修改ul */
          this.searchSelectHTMLNoData = config.searchSelectHTMLNoData
            ? `<li class="none">${config.searchSelectHTMLNoData}</li>`
            : '<li class="none">暂无其它数据</li>';
          this.searchSelectHTML = `<div class="${this.searchSelectClassName}" style="display: none;">
                        <ul class="${this.searchSelectHintClassName}">
                            ${this.searchSelectHTMLNoData}
                        </ul>
                    </div>`;
          this.searchSelectDeleteItemHTML = `
                    <svg t="1669172591973" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2719" width="16" height="16" style="
                        position: absolute;
                        right: 8px;
                    "><path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z" p-id="2720" fill="#e3dfdd"></path><path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z" p-id="2721" fill="#e3dfdd"></path></svg>
                    `;
          this.searchSelectDeleteItemClicked = false;
          this.searchSelectCss = `<style>
                        div.${this.searchSelectClassName}{
                            position: absolute;
                            z-index: ${
                              this.parentDOM.style.zIndex === ""
                                ? "auto"
                                : parseInt(this.parentDOM.style.zIndex) + 100
                            };
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            height: 0;
                            margin-top: ${
                              this.parentDOM.getBoundingClientRect().bottom +
                              this.css.PaddingTop
                            }px;
                        }
                        div.${this.searchSelectClassNameHide}{
                            display: none;
                        }
                        div.${this.searchSelectClassName} ul.${
            this.searchSelectHintClassName
          }{
                            width: ${
                              this.parentDOM.getBoundingClientRect().width
                            }px;
                            left: ${
                              this.parentDOM.getBoundingClientRect().left
                            }px;
                            max-height: 200px;
                            overflow-x: hidden;
                            overflow-y: auto;
                            padding: 5px 0;
                            background-color: #fff;
                            box-sizing: border-box;
                            border-radius: 4px;
                            box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
                            position: absolute;
                            z-index: inherit;
                        }
                        div.${this.searchSelectClassName} ul.${
            this.searchSelectHintClassName
          } li{
                            margin: 0;
                            line-height: normal;
                            padding: 7px 16px;
                            clear: both;
                            color: #515a6e;
                            font-size: 14px!important;
                            list-style: none;
                            cursor: pointer;
                            transition: background .2s ease-in-out;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            padding-right: 32px;
                        }
                        div.${this.searchSelectClassName} ul.${
            this.searchSelectHintClassName
          } li:hover{
                            background-color: rgba(0, 0, 0, .1);
                        }
                        div.${this.searchSelectClassName} ul.${
            this.searchSelectHintClassName
          } .none{
                            padding: 0 16px;
                            text-align: center;
                            color: #ccc;
                        }
                        div.${this.searchSelectClassName} ul.${
            this.searchSelectHintClassName
          } .active{
                            color: #57a3f3;
                        }
                        /*定义滚动条高宽及背景
                        高宽分别对应横竖滚动条的尺寸*/
                        div.${this.searchSelectClassName} ul.${
            this.searchSelectHintClassName
          }::-webkit-scrollbar {
                            width: 5px;
                            height: 5px;
                            background-color: #fff;
                        }
                        /*定义滚动条轨道
                        内阴影+圆角*/
                        div.${this.searchSelectClassName} ul.${
            this.searchSelectHintClassName
          }::-webkit-scrollbar-track {
                            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
                            border-radius: 2px;
                            background-color: #fff;
                        }
                        /*定义滑块
                        内阴影+圆角*/
                        div.${this.searchSelectClassName} ul.${
            this.searchSelectHintClassName
          }::-webkit-scrollbar-thumb {
                            border-radius: 2px;
                            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
                            background-color: #ccc;
                        }
                        @keyframes searchSelectFalIn {
                            from {
                                opacity: 0;
                                display:none;
                            }
                            to {
                                display:block;
                                opacity: 1;
                            }
                        }
                        @keyframes searchSelectFalOut {
                            from {
                                display:block;
                                opacity: 1;
                            }
                            to {
                                opacity: 0;
                                display:none;
                            }
                        }
                    </style>`;
          if (
            document.querySelector(`.${this.searchSelectClassName}`) == null
          ) {
            document.body.appendChild(
              this.parseTextToDOM(this.searchSelectHTML)
            );
            document.body.appendChild(
              this.parseTextToDOM(this.searchSelectCss)
            );
          }
          this.setParentEvent();
          this.setItemEvent();
          if (this.showList.length !== 0) {
            this.update(this.showList);
          }
        }
        parseTextToDOM(arg) {
          arg = arg
            .replace(/^[\n|\s]*/g, "")
            .replace(/[\n|\s]*$/g, ""); /* 去除前后的换行和空格 */
          var objE = document.createElement("div");
          objE.innerHTML = arg;
          var result =
            objE.children.length == 1 ? objE.children[0] : objE.children;
          return result;
        }
        addSearching() {
          document
            .querySelector(`ul.${this.searchSelectHintClassName}`)
            .appendChild(
              this.parseTextToDOM(`<li class="searching">正在搜索中...</li>`)
            );
        }
        removeSearching() {
          document
            .querySelector(`ul.${this.searchSelectHintClassName} .searching`)
            ?.remove();
        }
        update(data) {
          /* 更新页面显示的搜索结果 */
          if (!(data instanceof Array)) {
            console.log(data);
            throw "传入的数据不是数组";
          }
          this.showList = this.arrayDistinct(data);
          document
            .querySelectorAll(`ul.${this.searchSelectHintClassName} li`)
            .forEach((item) => {
              item?.remove();
            });
          let that = this;
          var parentUlDOM = document.querySelector(
            `ul.${this.searchSelectHintClassName}`
          );
          if (this.showList.length === 0) {
            this.clear();
            if (this.parentDOM.value === "") {
              document
                .querySelectorAll(`ul.${this.searchSelectHintClassName} li`)
                .forEach((item) => {
                  item?.remove();
                });
              this.list.forEach((item, index) => {
                parentUlDOM.appendChild(
                  this.parseTextToDOM(
                    `<li class="item" data-id="${index}">${item}${that.searchSelectDeleteItemHTML}</li>`
                  )
                );
              });
              this.setItemEvent();
            } else {
              this.parentDOM.dispatchEvent(new Event("focus"));
            }
          } else {
            this.showList.forEach((item, index) => {
              parentUlDOM.appendChild(
                this.parseTextToDOM(
                  `<li class="item" data-id="${index}">${item}${that.searchSelectDeleteItemHTML}</li>`
                )
              );
            });
            this.setItemEvent();
          }
        }
        arrayDistinct(data) {
          /* 数组去重 */
          var result = [];
          data = new Set(data);
          for (let item of data.values()) {
            result = [item, ...result];
          }
          return result;
        }
        clear() {
          this.showList = [];
          document
            .querySelectorAll(`ul.${this.searchSelectHintClassName} li`)
            .forEach((item) => {
              item?.remove();
            });
          document
            .querySelector(`ul.${this.searchSelectHintClassName}`)
            ?.appendChild(this.parseTextToDOM(this.searchSelectHTMLNoData));
        }
        hide() {
          document
            .querySelector(`div.${this.searchSelectClassName}`)
            ?.setAttribute("style", "display: none;");
        }
        show() {
          document
            .querySelector(`div.${this.searchSelectClassName}`)
            ?.removeAttribute("style");
        }
        setParentValue(value) {
          this.parentDOM.value = value;
        }
        setParentEvent() {
          let that = this;
          function _focus_event_(event) {
            document
              .querySelector(`div.${that.searchSelectClassName}`)
              .setAttribute(
                "style",
                `
                        -moz-animation: searchSelectFalIn ${that.css.falInDuration}s 1 ${that.css.falInTiming};
                        -webkit-animation: searchSelectFalIn ${that.css.falInDuration}s 1 ${that.css.falInTiming};
                        -o-animation: searchSelectFalIn ${that.css.falInDuration}s 1 ${that.css.falInTiming};
                        -ms-animation: searchSelectFalIn ${that.css.falInDuration}s 1 ${that.css.falInTiming};
                        `
              );
          }
          function _blur_event_(event) {
            setTimeout(() => {
              if (that.searchSelectDeleteItemClicked) {
                return;
              }
              if (
                getComputedStyle(
                  document.querySelector(`div.${that.searchSelectClassName}`)
                ).display === "none"
              ) {
                return;
              }
              document
                .querySelector(`div.${that.searchSelectClassName}`)
                .setAttribute(
                  "style",
                  `
                            -moz-animation: searchSelectFalOut ${that.falOutDuration}s 1 ${that.falOutTiming};
                            -webkit-animation: searchSelectFalOut ${that.falOutDuration}s 1 ${that.falOutTiming};
                            -o-animation: searchSelectFalOut ${that.falOutDuration}s 1 ${that.falOutTiming};
                            -ms-animation: searchSelectFalOut ${that.falOutDuration}s 1 ${that.falOutTiming};
                            `
                );
              setTimeout(() => {
                document
                  .querySelector(`div.${that.searchSelectClassName}`)
                  .setAttribute("style", "display:none;");
              }, that.falOutDuration * 1000);
            }, 100);
          }
          async function _propertychange_event_(event) {
            that.parentDOM.dispatchEvent(new Event("focus"));
            var getListResult = await that.getList(event.target.value);
            that.update(getListResult);
          }
          this.parentDOM?.setAttribute(
            "autocomplete",
            "off"
          ); /* 禁用输入框自动提示 */
          this.parentDOM.addEventListener(
            "focus",
            function (event) {
              _focus_event_(event);
            },
            true
          );

          this.parentDOM.addEventListener(
            "click",
            function (event) {
              event.target.dispatchEvent(new Event("focus"));
            },
            true
          );

          this.parentDOM.addEventListener(
            "blur",
            function (event) {
              _blur_event_(event);
            },
            false
          );

          this.parentDOM.addEventListener(
            "input",
            function (event) {
              _propertychange_event_(event);
            },
            true
          );
          document.addEventListener("click", function () {
            var checkDOM = document.querySelector(
              "ul." + that.searchSelectHintClassName
            );
            var mouseClickPosX = Number(
              window.event.clientX
            ); /* 鼠标相对屏幕横坐标 */
            var mouseClickPosY = Number(
              window.event.clientY
            ); /* 鼠标相对屏幕纵坐标 */
            var elementPosXLeft = Number(
              checkDOM.getBoundingClientRect().left
            ); /* 要检测的元素的相对屏幕的横坐标最左边 */
            var elementPosXRight = Number(
              checkDOM.getBoundingClientRect().right
            ); /* 要检测的元素的相对屏幕的横坐标最右边 */
            var elementPosYTop = Number(
              checkDOM.getBoundingClientRect().top
            ); /* 要检测的元素的相对屏幕的纵坐标最上边 */
            var elementPosYBottom = Number(
              checkDOM.getBoundingClientRect().bottom
            ); /* 要检测的元素的相对屏幕的纵坐标最下边 */
            if (
              !(
                mouseClickPosX >= elementPosXLeft &&
                mouseClickPosX <= elementPosXRight &&
                mouseClickPosY >= elementPosYTop &&
                mouseClickPosY <= elementPosYBottom
              ) &&
              !(
                checkDOM.innerHTML.indexOf(window.event.target.innerHTML) !== -1
              )
            ) {
              that.searchSelectDeleteItemClicked = false;
              that.parentDOM.dispatchEvent(new Event("blur"));
            }
          });
        }
        setItemEvent() {
          let that = this;
          document
            .querySelectorAll(
              `div.${this.searchSelectClassName} ul.${this.searchSelectHintClassName} li`
            )
            .forEach((item, index) => {
              ((v, i) => {
                v.addEventListener(
                  "click",
                  function (event) {
                    event.stopPropagation();
                    that.searchSelectDeleteItemClicked = false;
                    that.parentDOM.dispatchEvent(new Event("focus"));
                    if (event.target.localName === "li") {
                      that.parentDOM.value = this.innerText;
                      that.parentDOM.dispatchEvent(new Event("blur"));
                    } else {
                      that.searchSelectDeleteItemClicked = true;
                      var dataId = parseInt(v.getAttribute("data-id"));
                      console.log("删除 " + that.showList[dataId]);
                      that.list.forEach((item, index) => {
                        if (item === this.innerText) {
                          that.list.splice(index, 1);
                          return;
                        }
                      });

                      that.showList.splice(dataId, 1);
                      v.remove();
                      document
                        .querySelectorAll(
                          `ul.${that.searchSelectHintClassName} li`
                        )
                        .forEach((item, index) => {
                          item.setAttribute("data-id", index);
                        });
                      that.list = that.list;
                      that.showList = that.showList;
                      GM_setValue("search_history", that.list);
                      if (that.list.length === 0) {
                        that.clear();
                      }
                    }
                  },
                  true
                );
              })(item, index);
            });
        }
        getList(text) {
          var event = {};
          var that = this;
          event.userInputText = text;
          event.target = this.parentDOM;
          event.list = this.list;
          event.showList = this.showList;
          this.addSearching();
          return new Promise((resolve) => {
            var result = that.inputValueChangeEvent(event);
            if (this.parentDOM.value !== "" && result.length == 0) {
              this.parentDOM.dispatchEvent(new Event("focus"));
            }
            that.removeSearching();
            resolve(result);
          });
        }
      }

      GM_addStyle(`
                #comiis_search_noe{
                    display: none !important;
                }
                #comiis_search_two{
                    display: block !important;
                }
                `);
      var searchHistoryList = await GM_getValue("search_history", []);
      new searchSelect({
        parentDOM: document.querySelector("#scform_srchtxt"),
        list: searchHistoryList,
        inputValueChangeEvent: (event) => {
          var result = [];
          event.userInputText = event.userInputText.trim();
          if (event.userInputText == "") {
            return result;
          }
          event.list.forEach((item) => {
            if (
              item.match(
                event.userInputText.replace(
                  /[\-\/\\\^\$\*\+\?\.\(\)\|\[\]\{\}]/g,
                  "\\$&"
                )
              )
            ) {
              result = [item, ...result];
            }
          });
          return result;
        },
      });

      function search_event() {
        /* 搜索历史事件 */
        /* 搜索界面增加关闭按钮事件，清空input内容 */
        /* 点击搜索保存搜索记录 */
        $jq("#scform_submit").click(function () {
          let getsearchtext = $jq("#scform_srchtxt").val();
          if (getsearchtext != null && getsearchtext != "") {
            let search_history_array = new Array(getsearchtext);
            let has_history = GM_getValue("search_history");
            if (has_history != null) {
              if ($jq.inArray(getsearchtext, has_history) != -1) {
                console.log("已有该搜索历史记录");
                search_history_array = has_history;
              } else {
                console.log("无该记录，追加");
                search_history_array = search_history_array.concat(has_history);
              }
            } else {
              console.log("空记录，添加");
            }
            GM_setValue("search_history", search_history_array);
          }
        });
      }

      function add_clear_history() {
        /* 搜索界面添加清理历史记录和历史记录个数 */
        let search_history_list = GM_getValue("search_history");
        let search_history_nums = 0;
        if (search_history_list != null) {
          search_history_nums = search_history_list.length;
        }
        let clear_history_innerHTML =
          `<div class="comiis_p12 f14 bg_f f_c b_b cl" style="padding-bottom:10px">搜索记录个数: ` +
          search_history_nums +
          `<button class="btn_clear_search_history" style="
                        border: none;
                        float: right;
                        background: red;
                        color: #fff;
                        border-radius: 3px;
                        font-weight: 600;
                        min-width: 20vw;
                        width: 20vw;
                    ">清理记录</button></div>`;
        let insertdom = $jq(
          ".comiis_p12.f14.bg_f.f_c.b_b.cl,.comiis_tagtit.b_b.f_c"
        );
        insertdom.before(clear_history_innerHTML);
        $jq(".btn_clear_search_history").click(function () {
          GM_deleteValue("search_history");
          window.location.reload();
        });
      }

      search_event();
      add_clear_history();
    },
    /**
     * 在发帖|编辑帖子时选择发帖板块
     */
    selectPostingSection() {
      if (
        !MT_CONFIG.methodRunCheck([
          MT_CONFIG.urlRegexp.postForum,
          MT_CONFIG.urlRegexp.editForum,
        ])
      ) {
        return;
      }
      GM_addStyle(`
            #select-post-section{
                height: 28px;
                width: 160px;
                line-height: 28px;
                border: 1px solid #ececec;
                background: url(w.png) no-repeat;
                background-position: 95% 50%;
                -webkit-appearance: none;
                appearance: none;
                -moz-appearance: none;
            }
            `);
      let section_dict = {
        2: "版本发布",
        37: "插件交流",
        38: "建议反馈",
        41: "逆向交流",
        39: "玩机交流",
        42: "编程开发",
        40: "求助问答",
        44: "综合交流",
        50: "休闲灌水",
        46: "官方公告",
        53: "申诉举报",
        92: "站务专区",
      };
      $jq(
        ".comiis_post_from .comiis_wzpost.comiis_input_style .comiis_styli:contains('标题')"
      ).before(
        $jq(`
            <li class="comiis_styli_section comiis_flex b_b" style="padding: 10px 12px;font-size: 16px;">
                <div class="styli_section f_c" style="padding-right: 8px;vertical-align: top;">板块</div>
                <div class="flex">
                    <select id="select-post-section" style="vertical-align:top;border-color:transparent;font-size: 17px;font-weight: 300;text-overflow:ellipsis;white-space:nowrap;">
                        <option value="2">版本发布</option>
                        <option value="37">插件交流</option>
                        <option value="38">建议反馈</option>
                        <option value="39">玩机交流</option>
                        <option value="40">求助问答</option>
                        <option value="41">逆向交流</option>
                        <option value="42">编程开发</option>
                        <option value="44">综合交流</option>
                        <option value="46">官方公告</option>
                        <option value="50">休闲灌水</option>
                        <option value="53">申诉举报</option>
                        <option value="92">站务专区</option>
                    </select>
                </div>
            </li>
            `)
      );
      let selectNode = $jq(`#select-post-section`);
      let currentSection = window.location.search.match(/fid=([0-9]+)/);
      currentSection = currentSection[currentSection.length - 1];

      if (window.location.href.match(MT_CONFIG.urlRegexp.postForum)) {
        /* 发帖 */
        console.log("发帖");
        selectNode.on("change", function () {
          let obj = $jq(this);
          let fid = obj.val();
          let postSection = `forum.php?mod=post&action=newthread&fid=${fid}&extra=&topicsubmit=yes&mobile=2`;
          console.log(`修改发帖板块: ${section_dict[fid]} ${postSection}`);
          let classifyClassNameDict = {
            求助问答: {
              className: "gm_user_select_help",
              optionHTML: `<option value="0" selected="selected">请选择</option>
                            <option value="59">求助问答</option>
                            <option value="58">已解决</option>`,
            },
            建议反馈: {
              className: "gm_user_select_feedback",
              optionHTML: `<option value="0" selected="selected">请选择</option>
                            <option value="62">BUG反馈</option>
                            <option value="63">意见反馈</option>
                            <option value="65">论坛问题</option>
                            <option value="64">已解决</option>`,
            },
            站务专区: {
              className: "gm_user_select_depot",
              optionHTML: `<option value="0" selected="selected">请选择</option>
                            <option value="42">版主申请</option>
                            <option value="43">职位调整</option>`,
            },
          };
          if (classifyClassNameDict[section_dict[fid]]) {
            if ($jq(".comiis_post_from .styli_tit:contains('分类')").length) {
              $jq(".comiis_post_from .styli_tit:contains('分类')")
                .parent()
                .remove();
            }
            $jq(".comiis_stylino.comiis_needmessage").before(
              $jq(`
                        <li class="comiis_styli comiis_flex b_b ${
                          classifyClassNameDict[section_dict[fid]]["className"]
                        }">
                            <div class="styli_tit f_c">分类</div>
                                <div class="flex comiis_input_style">
                                    <div class="comiis_login_select">
                                    <span class="inner">
                                        <i class="comiis_font f_d"></i>
                                        <span class="z">
                                            <span class="comiis_question" id="typeid_name">请选择</span>
                                        </span>					
                                    </span>
                                    <select id="typeid" name="typeid">
                                        ${
                                          classifyClassNameDict[
                                            section_dict[fid]
                                          ]["optionHTML"]
                                        }
                                    </select>
                                </div>	
                            </div>
                        </li>
                        `)
            );
          } else {
            Object.keys(classifyClassNameDict).forEach((key) => {
              $jq(
                ".comiis_post_from ." + classifyClassNameDict[key]["className"]
              ).remove();
            });
          }
          $jq("#postform").attr("action", postSection);
        });
      } else {
        selectNode.attr("disabled", true);
      }
      selectNode.val(currentSection).trigger("change");
    },
    /**
     * 设置动态头像
     * 感谢提供思路 https://greasyfork.org/zh-CN/scripts/11969-discuz论坛头像上传助手
     */
    setDynamicAvatar() {
      if (
        !MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.dataSettingUrl], "v51")
      ) {
        return;
      }
      let formhash = $jq(".sidenv_exit a:nth-child(1)")
        .attr("href")
        .match(/formhash=([0-9a-zA-Z]+)/);
      let uid = $jq(".sidenv_exit a:nth-child(2)")
        .attr("href")
        .match(/uid=([0-9]+)/); /* 获取UID */
      let avatarInfo = {
        maxSize: 2097152 /* 图片文件最大大小 */,
        big: {
          width: 200,
          height: 250,
          status: false,
        },
        medium: {
          width: 120,
          height: 120,
          status: false,
        },
        small: {
          width: 48,
          height: 48,
          status: false,
        },
      };
      formhash = formhash[formhash.length - 1];
      uid = uid[uid.length - 1];
      let dynamicAvater = $jq(`
            <a href="javascript:;" class="comiis_flex comiis_edit_dynamic_avatar comiis_styli bg_f b_t cl">
                <div class="flex">修改动态头像</div>
            <img loading="lazy" style="
                float: right;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                overflow: hidden;
            " src="${MT_CONFIG.getAvatar(uid, "big")}" class="kmtximg">
            <img loading="lazy" style="
                float: right;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                overflow: hidden;
                margin-left: 10px;
                margin-right: 10px;
            " src="${MT_CONFIG.getAvatar(uid, "middle")}" class="kmtximg">
            <img loading="lazy" style="
                float: right;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                overflow: hidden;
            " src="${MT_CONFIG.getAvatar(uid, "small")}" class="kmtximg">
            <div class="styli_ico"><i class="comiis_font f_e"></i></div>
            </a>
            `);

      function getStatus() {
        /* 获取变量状态 */
        return (
          avatarInfo.big.status &&
          avatarInfo.medium.status &&
          avatarInfo.small.status
        );
      }
      function setStatus(key, value) {
        /* 设置变量状态 */
        if (key === "comiis_file_dynamic_avater_big") {
          avatarInfo.big.status = value;
        } else if (key === "comiis_file_dynamic_avater_medium") {
          avatarInfo.medium.status = value;
        } else {
          avatarInfo.small.status = value;
        }
      }
      function getPCUploadNewAvater() {
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: "https://bbs.binmt.cc/home.php?mod=spacecp&ac=avatar",
            method: "GET",
            timeout: 5000,
            headers: {
              "User-Agent": Utils.getRandomPCUA(),
            },
            onload: function (response) {
              resolve(response.responseText);
            },
            onerror: function () {
              popup2.toast("网络异常,请重新获取");
              resolve("");
            },
            ontimeout: () => {
              popup2.toast("请求超时");
              resolve("");
            },
          });
        });
      }

      function changeCheckFileEvent(
        elementQuery,
        maxWidth,
        maxHeight,
        maxSize
      ) {
        /* 检查上传的文件是否符合，大小，尺寸 */
        $jq(elementQuery).on("change", function () {
          let uploadImageFile = this.files[0];
          let fileSize = uploadImageFile.size;
          let tmpImage = new Image();
          let reader = new FileReader();
          reader.readAsDataURL(uploadImageFile);
          reader.onload = function (response) {
            tmpImage.src = response.target.result;
            tmpImage.onload = function () {
              if (this.width > maxWidth || this.height > maxHeight) {
                $jq(elementQuery).val("");
                popup2.toast({
                  text: `图片尺寸超出，当前宽:${this.width} 高:${this.height}`,
                  delayTime: 4000,
                });
                return;
              }
              if (fileSize > maxSize) {
                $jq(elementQuery).val("");
                popup2.toast({
                  text: `图片大小(最大${maxSize})超出，当前大小:${fileSize}`,
                  delayTime: 4000,
                });
                return;
              }
            };
          };
        });
      }

      $jq(".comiis_edit_avatar").after(dynamicAvater);
      dynamicAvater.on("click", () => {
        popup2.confirm({
          text: `
            <style>.comiis_tip{width: 80vw;}</style>
            <p style="padding: 10px 0px;">修改动态头像</p>
            <div style="height: 45vh;overflow-y: auto;overflow-x: hidden;">
                <div style="display: inline-grid;justify-items: start;width: -webkit-fill-available;">
                    <p style="float: left;font-weight: bold;">1. 桌面端头像: ${avatarInfo.big.width}×${avatarInfo.big.height} </p>
                    <p class="status" style="padding: 0px;padding-left: 10px;font-weight: bold;width: -webkit-fill-available;text-align: left;">🤡请先上传图片</p>
                    <input type="file" id="comiis_file_dynamic_avater_big" data-maxwidth=${avatarInfo.big.width} data-maxheight=${avatarInfo.big.height} style="margin: 20px 0px;" accept="image/*">
                </div>
                <div style="display: inline-grid;justify-items: start;width: -webkit-fill-available;">
                    <p style="float: left;font-weight: bold;">2. 移动端头像: ${avatarInfo.medium.width}×${avatarInfo.medium.height} </p>
                    <p class="status" style="padding: 0px;padding-left: 10px;font-weight: bold;width: -webkit-fill-available;text-align: left;">🤡请先上传图片</p>
                    <input type="file" id="comiis_file_dynamic_avater_medium" data-maxwidth=${avatarInfo.medium.width} data-maxheight=${avatarInfo.medium.width} style="margin: 20px 0px;" accept="image/*"></div>
                <div style="display: inline-grid;justify-items: start;width: -webkit-fill-available;">
                    <p style="float: left;font-weight: bold;">3. 桌面端右上角小头像: ${avatarInfo.small.width}×${avatarInfo.small.height} </p>
                    <p class="status" style="padding: 0px;padding-left: 10px;font-weight: bold;width: -webkit-fill-available;text-align: left;">🤡请先上传图片</p>
                    <input type="file" id="comiis_file_dynamic_avater_small" data-maxwidth=${avatarInfo.small.width} data-maxheight=${avatarInfo.small.width} style="margin: 20px 0px;" accept="image/*"></div>
            </div>`,
          mask: true,
          only: true,
          ok: {
            text: "上传",
            callback: async () => {
              if (!getStatus()) {
                popup2.toast("图片校验不通过");
                return;
              }
              popup2.showLoadingMask();
              popup2.toast("正在处理数据中...");
              let baseBig = await Utils.asyncFileToBase64(
                $jq("#comiis_file_dynamic_avater_big").prop("files")[0]
              );
              let baseMedium = await Utils.asyncFileToBase64(
                $jq("#comiis_file_dynamic_avater_medium").prop("files")[0]
              );
              let baseSmall = await Utils.asyncFileToBase64(
                $jq("#comiis_file_dynamic_avater_small").prop("files")[0]
              );
              let base64Arr = [baseBig, baseMedium, baseSmall];
              const dataArr = base64Arr.map((str) =>
                str.substr(str.indexOf(",") + 1)
              ); /* 拿到3个头像的Base64字符串 */
              let data_resp = await getPCUploadNewAvater();
              if (data_resp == "") {
                popup2.toast("获取PC数据失败");
                popup2.closeMask();
                return;
              }
              let data = data_resp.match(/var[\s]*data[\s]*=[\s]*"(.+?)"/);
              if (data == null || data.length != 2) {
                popup2.toast("获取变量-data失败");
                popup2.closeMask();
                return;
              }
              data = data[data.length - 1];
              let data_split = data.split(",");
              let uploadUrl = data_split[data_split.indexOf("src") + 1].replace(
                "images/camera.swf?inajax=1",
                "index.php?m=user&a=rectavatar&base64=yes"
              );
              let formData = new FormData();
              formData.append("Filedata", "");
              formData.append("avatar1", dataArr[0]);
              formData.append("avatar2", dataArr[1]);
              formData.append("avatar3", dataArr[2]);
              formData.append("formhash", formhash);
              GM_xmlhttpRequest({
                url: uploadUrl,
                method: "POST",
                data: formData,
                headers: {
                  origin: "https://bbs.binmt.cc",
                  referer:
                    "https://bbs.binmt.cc/home.php?mod=spacecp&ac=avatar",
                  accept:
                    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "User-Agent": Utils.getRandomPCUA(),
                },
                onload: function (response) {
                  let text = response.responseText;
                  if (
                    text.indexOf("window.parent.postMessage('success','*')") !=
                    -1
                  ) {
                    popup2.toast("上传成功");
                    popup2.closeConfirm();
                    setTimeout(() => {
                      window.location.reload();
                    }, 1500);
                  } else {
                    popup2.toast(text);
                  }
                },
                onerror: function () {
                  popup2.toast("网络异常,请重新获取");
                },
              });
            },
          },
        });
      });

      $jq(document).on(
        "change",
        "#popup2-confirm input[type='file']",
        function () {
          let fileObj = $jq(this);
          if (fileObj.prop("files").length == 0) {
            return;
          }
          let statusObj = fileObj.parent().find(".status");
          let maxWidth = parseInt(fileObj.attr("data-maxwidth"));
          let maxHeight = parseInt(fileObj.attr("data-maxheight"));
          statusObj.text("🤡获取文件信息中...");
          let uploadImageFile = fileObj.prop("files")[0];
          let fileSize = uploadImageFile.size;
          let tmpImage = new Image();
          let reader = new FileReader();
          reader.readAsDataURL(uploadImageFile);
          reader.onload = function (response) {
            tmpImage.src = response.target.result;
            tmpImage.onload = function () {
              if (this.width > maxWidth || this.height > maxHeight) {
                /* 判断尺寸大小 */
                setStatus(fileObj.attr("id"), false);
                fileObj.val("");
                statusObj.text(
                  `🤡校验失败，图片尺寸不符合 宽:${this.width} 高:${this.height}`
                );
                return;
              }

              if (fileSize > avatarInfo.maxSize) {
                setStatus(fileObj.attr("id"), false);
                fileObj.val("");
                statusObj.text("🤡校验失败，图片大小不符合 " + fileSize);
                return;
              }
              setStatus(fileObj.attr("id"), true);
              statusObj.text(
                `🤣 通过 宽:${this.width} 高:${this.height} 大小(byte):${fileSize}`
              );
            };
          };
        }
      );
      changeCheckFileEvent(
        "#comiis_file_dynamic_avater_big",
        avatarInfo.big.width,
        avatarInfo.big.height,
        avatarInfo.maxSize
      );
      changeCheckFileEvent(
        "#comiis_file_dynamic_avater_medium",
        avatarInfo.medium.width,
        avatarInfo.medium.height,
        avatarInfo.maxSize
      );
      changeCheckFileEvent(
        "#comiis_file_dynamic_avater_small",
        avatarInfo.small.width,
        avatarInfo.small.height,
        avatarInfo.maxSize
      );
    },
    /**
     * 导读新增显示最新帖子
     */
    showLatestPostForm() {
      if (
        !MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.navigationUrl], "v53")
      ) {
        return;
      }
      if (
        window.location.href.match(
          /bbs.binmt.cc\/forum.php\?mod=guide&view=hot/g
        )
      ) {
        return;
      }
      function getLatestPostForm() {
        /* 获取轮播的最新的帖子 */
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: "https://bbs.binmt.cc/forum.php?mod=guide&view=hot",
            method: "GET",
            timeout: 8000,
            async: false,
            responseType: "html",
            headers: {
              accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "User-Agent": Utils.getRandomAndroidUA(),
            },
            onload: function (response) {
              console.log(response);
              var respHTML = $jq(response.responseText);
              var postFormList = respHTML.find(
                'div.comiis_mh_kxtxt div[id*="comiis_mh_kxtxt"] ul'
              );
              if (postFormList.length === 0) {
                popup2.toast("获取轮播失败");
                resolve([]);
              } else {
                var result = [];
                postFormList[postFormList.length - 1]
                  .querySelectorAll("a")
                  .forEach((item) => {
                    result = [
                      {
                        href: item.getAttribute("href"),
                        title: item.getAttribute("title"),
                      },
                      ...result,
                    ];
                  });
                resolve(result);
              }
            },
            onerror: function (response) {
              console.log(response);
              popup2.toast("网络异常,获取轮播失败");
              resolve([]);
            },
            ontimeout: () => {
              popup2.toast("请求超时");
              resolve([]);
            },
          });
        });
      }
      getLatestPostForm().then((result) => {
        if (result.length) {
          GM_addStyle(`
						div.comiis_mh_kxtxt_owm{
								margin-top: 10px;
						}
						div.comiis_mh_kxtxt_owm li{ 
								height: 30px;
								width: 100%;
								display: flex;
								align-items: center;
						}
						div.comiis_mh_kxtxt_owm span{
								background: #FF705E;
								color: #fff;
								float: left;
								height: 18px;
								line-height: 18px;
								padding: 0 3px;
								margin-top: 2px;
								margin-right: 10px;
								overflow: hidden;
								border-radius: 2px;
                margin-left: 10px;
						}
						div.comiis_mh_kxtxt_owm a{
								display: block;
								font-size: 14px;
								font-weight: 400;
								height: 22px;
								line-height: 22px;
								overflow: hidden;
								min-width: 100px;
								max-width: 80%;
								text-overflow: ellipsis;
								white-space: nowrap;
                margin-right: 10px;
						}
						`);
          var latestPostFormHTML = "";
          result.sort(
            Utils.sortListByProperty((item) => {
              var forumPostNum = item["href"].match(/thread-(.+?)-/i);
              forumPostNum = forumPostNum[forumPostNum.length - 1];
              forumPostNum = parseInt(forumPostNum);
              return forumPostNum;
            }, true)
          );
          console.log("导读内容", result);
          result.forEach((item) => {
            latestPostFormHTML += `
            <li>
                <span>新帖</span>
                <a href="${item.href}" title="${item.title}" target="_blank">${item.title}</a>
            </li>`;
          });
          $jq(".comiis_forumlist.comiis_xznlist").before(
            $jq(
              `<div class="comiis_mh_kxtxt bg_f comiis_mh_kxtxt_owm"><ul>${latestPostFormHTML}</ul></div>`
            )
          );
        }
      });
    },
    /**
     * 显示签到的最先几个人，最多10个，和顶部的今日签到之星
     */
    showSignInRanking() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.kMiSignSign])) {
        return;
      }

      let today_ranking_ele = document.querySelector(
        ".comiis_topnv .comiis_flex .flex"
      );
      today_ranking_ele.after(
        $jq(
          `<li class="flex"><a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');">今日最先</a></li>`
        )[0]
      );
      let getMaxPage = (urlextra) => {
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: `https://bbs.binmt.cc/k_misign-sign.html?operation=${urlextra}`,
            async: false,
            responseType: "html",
            timeout: 5000,
            headers: {
              "User-Agent": Utils.getRandomPCUA(),
            },
            onload: function (response) {
              let last_page = $jq(response.responseText).find(
                "#J_list_detail .pg span"
              );
              if (
                last_page.length &&
                typeof last_page[0].title != "undefined"
              ) {
                let last_page_match = last_page[0].title.match(/([0-9]+)/);
                if (last_page_match.length == 2) {
                  resolve(last_page_match[last_page_match.length - 1]);
                } else {
                  popup2.toast("获取页失败");
                  resolve(0);
                }
              } else {
                popup2.toast("请求最先签到的页失败");
                resolve(0);
              }
            },
            onerror: function (response) {
              console.log(response);
              popup2.toast("网络异常,请重新获取");
              resolve(0);
            },
            ontimeout: () => {
              popup2.toast("请求超时");
              resolve(0);
            },
          });
        });
      };

      let getPagePeople = (page) => {
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: `https://bbs.binmt.cc/k_misign-sign.html?operation=list&op=&page=${page}`,
            async: false,
            timeout: 5000,
            responseType: "html",
            headers: {
              "User-Agent": Utils.getRandomPCUA(),
            },
            onload: function (response) {
              let peoples = $jq(response.responseText).find(
                "#J_list_detail tbody tr"
              );
              let ret_array = [];
              if (
                peoples.length == 2 &&
                peoples[0].textContent.indexOf("暂无内容") != -1
              ) {
                resolve(ret_array);
                return;
              }
              for (let i = 1; i <= peoples.length - 2; i++) {
                let people = peoples[i];
                let ret_json = {};
                let user_name =
                  people.children[0].getElementsByTagName("a")[0].textContent;
                let space_url =
                  people.children[0].getElementsByTagName("a")[0].href;
                let uid = space_url.match(/space-uid-([0-9]*)/)[1];
                let sign_all_days = people.children[1].textContent;
                let sign_month_days = people.children[2].textContent;
                let sign_time = people.children[3].textContent;
                let sign_reward = people.children[5].textContent;
                ret_json["user"] = user_name;
                ret_json["uid"] = uid;
                ret_json["avatar"] = MT_CONFIG.getAvatar(uid, "small");
                ret_json["days"] = sign_all_days;
                ret_json["monthDays"] = sign_month_days;
                ret_json["time"] = sign_time;
                ret_json["reward"] = sign_reward;
                ret_array = ret_array.concat(ret_json);
              }
              resolve(ret_array);
            },
            onerror: function (response) {
              console.log(response);
              resolve({});
            },
            ontimeout: () => {
              popup2.toast("请求超时");
              resolve({});
            },
          });
        });
      };

      function changeRankList(data, listtype) {
        $jq("#ranklist").html(data);
        $jq("#ranklist").attr("listtype", listtype);
      }

      ajaxlist = async (listtype) => {
        listtype = listtype;
        if (listtype == "today") {
          loadingdelay = false;
          urlextra = "list&op=today";
        } else if (listtype == "month") {
          loadingdelay = false;
          urlextra = "list&op=month";
        } else if (listtype == "zong") {
          loadingdelay = false;
          urlextra = "list&op=zong";
        } else if (listtype == "calendar") {
          loadingdelay = true;
          urlextra = "calendar";
        } else {
          loadingdelay = false;
          urlextra = "list";
        }
        /* alert(loadingdelay); */
        if (listtype == "todayLatest") {
          loadingdelay = false;
          urlextra = "list&op=&page=0";
          let maxPage = await getMaxPage(urlextra);
          if (maxPage == 0) {
            return;
          }
          let latestPeople = await getPagePeople(maxPage);

          latestPeople.reverse();
          if (latestPeople.length < 10) {
            let latestPeople_2 = await getPagePeople(maxPage - 1);
            latestPeople_2.reverse();
            latestPeople = latestPeople.concat(latestPeople_2);
            latestPeople.reverse();
          }

          let peopleHTML = "";
          latestPeople.reverse();
          console.log(latestPeople);
          latestPeople.forEach((people) => {
            peopleHTML =
              peopleHTML +
              `<tbody id="autolist_${people["uid"]}">
                  <tr>
                		<td class="k_misign_lu">
                    	<a href="home.php?mod=space&amp;uid=${people["uid"]}">
												<img src="${people["avatar"]}" loading="lazy">
											</a>
                  	</td>
                  	<td class="k_misign_ll"><span></span></td>
                  	<td class="k_misign_lc">
                    	<h4 class="f_c">
												<a href="home.php?mod=space&amp;uid=${people["uid"]}">${people["user"]}</a>
												<span>${people["time"]}</span>
												<span class="y">总天数 ${people["days"]}天</span>
											</h4>
                    	<p class="f_0">月天数 ${people["monthDays"]} 天，次奖励 ${people["reward"]}</p>
                  	</td>
                	</tr>
              	</tbody>`;
          });
          let latestHTML =
            `<li class="styli_h bg_e"></li>
                        <div class="comiis_topnv bg_f b_t b_b">
                            <ul class="comiis_flex">
                                <li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>
                                <li class="flex f_0"><em class="bg_0"></em><a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');">今日最先</a>
                                </li>
                                <li class="flex"><a href="javascript:;" id="k_misignlist_month" onclick="ajaxlist('month');" class="f_c">本月排行</a>
                                </li>
                                <li class="flex"><a href="javascript:;" id="k_misignlist_zong" onclick="ajaxlist('zong');" class="f_c">总排行</a></li>
                            </ul>
                        </div>
                        <div class="k_misign_wp">
                            <div class="k_misign_list bg_f">
                                <table id="misign_list">
                                ` +
            peopleHTML +
            `
                                </table>
                            </div>
                        </div>`;
          changeRankList(latestHTML, listtype);
        } else {
          $jq.ajax({
            type: "GET",
            url: `plugin.php?id=k_misign:sign&operation=${urlextra}`,
            async: false,
            dataType: "html",
            success: function (response) {
              /* console.log(data); */
              response = response.replace(
                `今日排行</a></li>`,
                `今日排行</a></li><li class="flex"><a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');">今日最先</a></li>`
              );
              changeRankList(response, listtype);
            },
            complete: function (XHR, TS) {
              XHR = null;
            },
          });
        }
      };
    },
    /**
     * 显示今日之星，在签到页上
     */
    showTodayStar() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.kMiSignSign], "v33")) {
        return;
      }

      let todayStarParent = $jq(".pg_k_misign .comiis_qdinfo");
      let todayStar = document.createElement("ul");
      GM_xmlhttpRequest({
        url: "/k_misign-sign.html",
        method: "get",
        async: false,
        timeout: 5000,
        headers: {
          "User-Agent": Utils.getRandomPCUA(),
        },
        onload: (response) => {
          let html = $jq(response.responseText);
          let todatastarele = html.find("#pt span.xg1");
          if (!todatastarele.length) {
            return;
          }
          let todaypeople = todatastarele[0].textContent.replace(
            "今日签到之星：",
            ""
          );
          todayStar.innerHTML =
            '<li class="f_f" style="display: flex;flex-direction: column;width: 100%;"><span class="comiis_tm">今日签到之星</span>' +
            todaypeople +
            "</li>";
          let comiis_space_box_height = getComputedStyle(
            $jq(".comiis_space_box")[0],
            null
          )["height"].replace("px", "");
          let comiis_space_box_padding_bottom = getComputedStyle(
            $jq(".comiis_space_box")[0],
            null
          )["padding-bottom"].replace("px", "");
          comiis_space_box_height = parseInt(comiis_space_box_height);
          comiis_space_box_padding_bottom = parseInt(
            comiis_space_box_padding_bottom
          );
          let total_height =
            comiis_space_box_height + comiis_space_box_padding_bottom + 50;
          GM_addStyle(`
                        .comiis_space_box{
                            height: ${total_height}px;
                            background-size: 100% 100%;
                        }
                        .pg_k_misign .comiis_qdinfo{
                            height: 110px !important;
                        }`);
          todayStarParent.append(todayStar);
        },
        onerror: (response) => {
          console.log(response);
          console.log("请求今日之星失败");
          popup2.toast("请求今日之星失败");
        },
        ontimeout: () => {
          popup2.toast("请求今日之星超时");
          console.log("请求超时");
        },
      });
    },
    /**
     * 显示空间-帖子-具体回复
     */
    async showSpaceContreteReply() {
      if (!MT_CONFIG.methodRunCheck([MT_CONFIG.urlRegexp.spacePost], "v52")) {
        return;
      }
      GM_addStyle(`
      div.contrete-reply{
          padding: 5px 10px;
          border-top: 1px solid #f3f3f3;
      }
      div.contrete-reply a{
          margin: 0px 10px;
      }`);
      /**
       * 获取PC端的回复内容
       * @returns {[Array]}
       */
      function getPCReply() {
        return new Promise((resolve) => {
          GM_xmlhttpRequest({
            url: window.location.href,
            method: "get",
            async: false,
            timeout: 5000,
            headers: {
              "User-Agent": Utils.getRandomPCUA(),
            },
            onload: (response) => {
              let pageHTML = $jq(response.responseText);
              let form = pageHTML.find("#delform tr.bw0_all+tr");
              let resultList = [];
              Array.from(form).forEach((item) => {
                let replyData = [];
                let tagTDNode = $jq($jq(item).find("td"));
                let tagTDValue = tagTDNode.html().replace(/^&nbsp;/, "");
                replyData = replyData.concat(tagTDValue);

                let nextHTML = $jq(item).next();
                /* bw0_all是每个帖子的标志位 */
                for (
                  let index = 0;
                  index < pageHTML.find("#delform tr").length;
                  index++
                ) {
                  if (
                    nextHTML.attr("class") === "bw0_all" ||
                    nextHTML.length === 0
                  ) {
                    break;
                  }
                  let nextTdHTML = nextHTML.find("td");
                  let nextValue = nextTdHTML.html().replace(/^&nbsp;/, "");
                  replyData = replyData.concat(nextValue);
                  nextHTML = nextHTML.next();
                }
                resultList.push(replyData);
              });
              resolve(resultList);
            },
            onerror: () => {
              console.error("网络异常,获取PC回复失败");
              popup2.toast("网络异常,获取PC回复失败");
              resolve(null);
            },
            ontimeout: () => {
              console.error("网络异常,获取PC回复失败");
              popup2.toast("请求超时,获取PC回复失败");
              resolve(null);
            },
          });
        });
      }

      /**
       * 获取当前页面所有帖子
       * @returns {NodeList}
       */
      function getFormList() {
        return Utils.getNodeListValue(
          MT_CONFIG.element.comiisFormlist,
          MT_CONFIG.element.comiisPostli,
          MT_CONFIG.element.comiisMmlist
        );
      }
      /**
       * 格式化一下获取的PC端的回复的内容
       * @param {Array} dataList
       */
      function formatPCReply(dataList) {
        let resultJSON = {};
        dataList.forEach((item) => {
          let divItem = $jq(`<div>${item[0]}</div>`);
          let url = divItem.find("a").prop("href");
          let paramPtid = url.match(MT_CONFIG.urlRegexp.formPostParam_ptid);
          let paramPid = url.match(MT_CONFIG.urlRegexp.formPostParam_pid);
          if (!paramPtid) {
            popup2.toast("获取ptid失败");
            return;
          }
          if (!paramPid) {
            popup2.toast("获取pid失败");
            return;
          }
          paramPtid = paramPtid[paramPtid.length - 1];
          paramPid = paramPid[paramPid.length - 1];
          if (resultJSON[paramPtid]) {
            resultJSON[paramPtid]["data"] = [
              ...resultJSON[paramPtid]["data"],
              ...item,
            ];
          } else {
            resultJSON[paramPtid] = {
              ptid: paramPtid,
              pid: paramPid,
              data: item,
            };
          }
        });
        return resultJSON;
      }
      var pcReplyArray = await getPCReply();
      if (pcReplyArray == null) {
        return;
      }
      var pcReplyJSON = formatPCReply(pcReplyArray);
      console.log(pcReplyJSON);
      let formList = getFormList();
      formList.forEach((formListItem, formListItemIndex) => {
        /* 点赞按钮 */
        let praiseNode = formListItem.querySelector(
          ".comiis_xznalist_bottom a"
        );
        let formTid = praiseNode.getAttribute("tid");
        if (!formTid) {
          popup2.toast("获取帖子tid失败");
          console.error(formListItem);
          return;
        }
        if (!pcReplyJSON[formTid]) {
          return;
        }
        pcReplyJSON[formTid]["data"].forEach((formListReplyHTMLItem) => {
          $jq(formListItem).append(
            $jq(`<div class="contrete-reply">${formListReplyHTMLItem}</div>`)
          );
        });
      });
    },
    /**
     * 注册设置菜单项
     */
    registerSettingView() {
      /**
       * 设置 脚本设置界面的事件
       */
      function setPageSettingViewEvent() {
        $jq(".whitesev-mt-setting-item input[type='checkbox']").each(
          (index, item) => {
            item = $jq(item);
            let dataKey = item.attr("data-key");
            item.prop("checked", GM_getValue(dataKey, false));
          }
        );
        $jq(".whitesev-mt-setting-item input[type='checkbox']").on(
          "click",
          function () {
            let dataKey = $jq(this).attr("data-key");
            GM_setValue(dataKey, this.checked);
          }
        );
      }
      /**
       * 设置 脚本设置界面的CSS
       */
      function setPageSettingViewCSS() {
        /* checkbox美化 */
        GM_addStyle(`
        .whitesev-mt-setting-checkbox .knobs, 
				.whitesev-mt-setting-checkbox .layer{
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
				}
				.whitesev-mt-setting-checkbox{
					/* position: relative;
					top: 50%;
					width: 56px;
					height: 28px;
					margin: 0px auto 0 auto;
					overflow: hidden;
					transform: translateY(-50%); */
          position: relative;
          width: 56px;
          height: 28px;
          overflow: hidden;
				}
				.whitesev-mt-setting-checkbox input[type="checkbox"]{
						position: relative;
						width: 100%;
						height: 100%;
						padding: 0;
						margin: 0;
						opacity: 0;
						cursor: pointer;
						z-index: 3;
				}
				.whitesev-mt-setting-checkbox .knobs{
						z-index: 2;
				}
				.whitesev-mt-setting-checkbox .layer{
						width: 100%;
						background-color: #fcebeb;
						transition: 0.3s ease all;
						z-index: 1;
				}
				.whitesev-mt-setting-checkbox .knobs:before,
				.whitesev-mt-setting-checkbox .knobs span{
					position: relative;
					display: block;
					top: 50%;
					left: 30%;
					/* width: 35%;
    			height: 65%; */
          width: 20%;
          height: auto;
					color: #fff;
					font-size: 10px;
					font-weight: bold;
					text-align: center;
					line-height: 1;
					padding: 9px 4px;
					transform: translate(-50%,-50%);
				}			
				.whitesev-mt-setting-checkbox .knobs span{
						background-color: #F44336;
						border-radius: 2px;
						transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
						z-index: 1;
				}
				.whitesev-mt-setting-checkbox .knobs:before{
					transition: 0.3s ease all, left 0.5s cubic-bezier(0.18, 0.89, 0.35, 1.15);
					z-index: 2;
			  }
				.whitesev-mt-setting-checkbox input[type="checkbox"]:checked + .knobs span{
					left: 70%;
					background-color: #03A9F4;
			  }
				.whitesev-mt-setting-checkbox input[type="checkbox"]:checked ~ .layer{
						background-color: #ebf7fc;
				}`);
        GM_addStyle(`
        .whitesev-mt-setting{
          height: 400px;
          overflow-y: auto;
        }
        .whitesev-mt-setting-item{
          width: 100%;
          display: inline-flex;
          margin: 15px 0px;
          align-items: center;
          justify-content: space-between;
        }
        .whitesev-mt-setting-name{
          margin-left: 10px;
          max-width: 70%;
        }
        .whitesev-mt-setting-checkbox{
          margin-right: 10px;
        }
        `);
      }
      /**
       * 设置 脚本设置界面
       */
      function setPageSettingView() {
        let settingView = $jq(`
        <li class="comiis_left_Touch" _mstvisible="3">
          <a href="javascript:;" class="comiis_left_Touch">
            <i class="comiis_font" style="color: #ff0505;font-size: 23px;" _msttexthash="5385744" _msthash="25" _mstvisible="5"></i>
            MT论坛脚本设置
          </a>
        </li>
        `);
        settingView.on("click", function () {
          $jq.NZ_MsgBox.alert({
            title: "MT论坛脚本设置",
            content: `
            <div class="whitesev-mt-setting">
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">识别链接</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v2">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">自动签到</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v17">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">自动展开帖子</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v18">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">自适应帖子内图片的宽度</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v16">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">显示用户的UID</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v15">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">显示搜索历史</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v19">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">移除帖子字体效果</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v1">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">移除评论区字体效果</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v3">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">评论区点评按钮</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v6">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">自动加载上一页评论</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v32">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">自动加载下一页评论</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v21">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">小黑屋</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v30">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">今日签到之星</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v33">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">修复搜索的清空按钮</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v36">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">修复无法正确进入别人的空间</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v37">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">聊天内图床</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v40">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">付费主题白嫖提醒</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v44">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">页面小窗浏览帖子</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v45">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">代码块上方新增复制按钮</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v46">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">蓝奏云功能</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v47">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">编辑器优化-快捷</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v49">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">编辑器优化-完整</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v50">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">上传动态头像</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v51">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">空间-帖子-显示具体回复内容</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v52">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">导读新增显示最新帖子</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v53">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">帖子快照</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v54">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">贴内图片查看优化</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v55">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">在线用户查看</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v56">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
              <div class="whitesev-mt-setting-item">
                <p class="whitesev-mt-setting-name">附件点击提醒</p>
                <div class="whitesev-mt-setting-checkbox">
                  <input type="checkbox" data-key="v57">
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            `,
            type: "",
            buttons: {
              confirm: { text: "好的" },
            },
          });
          setPageSettingViewEvent();
        });
        $jq(".comiis_sidenv_box .sidenv_li .comiis_left_Touch.bdew").append(
          settingView
        );
      }

      if (window.location.href.match(MT_CONFIG.urlRegexp.bbs)) {
        setPageSettingView();
        setPageSettingViewCSS();
      }
    },
  };

  function entrance() {
    /* 这是入口 */
    if (!envIsMobile()) {
      console.log("PC端显示");
      Utils.tryCatch().run(pc.repairPCNoLoadResource);
      $jq(document).ready(function () {
        pc.main();
      });
    } else {
      console.log("移动端显示");
      $jq(document).ready(function () {
        Utils.tryCatch().run(mobile.registerSettingView);
        mobile.main();
      });
    }
  }

  /**
   * 第一次使用该脚本的提示
   */
  function firstUseTip() {
    if (GM_getValue("firstUse", true) && envIsMobile()) {
      var tipImage = "https://www.helloimg.com/images/2023/01/04/oCgy7o.gif";
      popup2.confirm({
        text: `<p>如果您是第一次使用，请看演示GIF</p><image src="${tipImage}" alt="演示图-48MB" loading="eager" crossoriginNew="anonymous" height="400"></image>`,
        cancel: {
          text: "不再提醒",
          callback: () => {
            GM_setValue("firstUse", false);
            popup2.closeConfirm();
            popup2.closeMask();
          },
        },
      });
    }
  }
  if (envCheck()) {
    $jq(document).ready(function () {
      entrance();
      console.log(`执行完毕,耗时${Date.now() - MT_CONFIG.gmRunStartTime}ms`);
      firstUseTip();
    });
  }
})();
