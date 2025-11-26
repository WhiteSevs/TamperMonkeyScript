import { $, $$, addStyle, DOMUtils, httpx, log, pops, utils } from "@/env";
import optimizationCSS from "./css/editor-optimization.css?raw";
import { MTEditorSmilies } from "./MTEditorSmilies";
import { unsafeWindow } from "ViteGM";
import Qmsg from "qmsg";
import { MTRegExp } from "@/utils/MTRegExp";
import { MTUtils } from "@/utils/MTUtils";
import { MTEditorImageBed_Hello } from "./MTEditorImageBed_Hello";
import { Panel } from "@components/setting/panel";
import { MTEditorImageBed_MT } from "./MTEditorImageBed_MT";
import { MTQuickUBB, MTUBB_Rainbow } from "./MTQuickUBB";
import Utils from "@whitesev/utils";

export type EditorNormalStorageOption = {
  /** 帖子id */
  forumId: string;
  /** 回复的url */
  repquote: undefined | string;
  /** 内容 */
  text: string;
  /** 帖子链接 */
  url: string;
};

let error_code = {
  1: {
    error_match: "抱歉，您填写的内容包含敏感词而无法提交",
    popup_text: "抱歉，您填写的内容包含敏感词而无法提交",
  },
  2: {
    error_match: "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",
    popup_text: "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",
  },
  3: {
    error_match: "抱歉，本主题已关闭，不再接受新内容",
    popup_text: "抱歉，本主题已关闭，不再接受新内容",
  },
  4: {
    error_match: "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",
    popup_text: "抱歉，管理员设置了本版块发表于 30 天以前的主题自动关闭，不再接受新回复",
  },
  5: {
    error_match: "抱歉，您的帖子小于 10 个字符的限制",
    popup_text: "抱歉，您的帖子小于 10 个字符的限制",
  },
};

let tempReplyBtnNode: HTMLElement | null = null;

export const MTEditorOptimizationNormal = {
  $data: {
    /**
     * 是否是ubb代码插入的点击
     */
    isUBBCodeInsertClick: false,
    /**
     * 当前是否正在回复|发表中
     */
    isPosting: false,
    db: new Utils.indexedDB("mt_reply_record", "input_text"),
    forum_action: null as any as string,
    get tid() {
      return MTUtils.getThreadId(window.location.href);
    },
  },
  $el: {
    /** 点赞按钮 */
    $like: null as any as HTMLAnchorElement,
    /** 发表按钮 */
    $btn_submit: null as any as HTMLInputElement,
    /** 输入框 */
    $input: null as any as HTMLTextAreaElement,
    /** 表单元素 */
    $form: null as any as HTMLFormElement,
    /** 发表|回复按钮 */
    $fastpostsubmit: null as any as HTMLInputElement,
  },
  init() {
    log.info(`编辑器优化-简略版`);
    addStyle(optimizationCSS);
    this.overridePageEditor();
  },
  /**
   * 覆盖页面的编辑器
   */
  overridePageEditor() {
    // 评论图标
    let $old_commentIcon = $<HTMLElement>("#comiis_foot_memu .comiis_flex li:nth-child(2)")!;
    // 点赞图标
    let $old_linkIcon = $<HTMLElement>("#comiis_foot_memu .comiis_flex li:nth-child(3)")!;
    // 收藏图标
    let $old_collectIcon = $<HTMLElement>("#comiis_foot_memu .comiis_flex li:nth-child(4)")!;
    this.$el.$form = $<HTMLFormElement>("#fastpostform")!;
    this.$data.forum_action = this.$el.$form.getAttribute("action")!;
    let forum_serialize = DOMUtils.serialize(this.$el.$form);
    let forum_url = $<HTMLAnchorElement>("#fastpostform .header_y a")!.href;
    // 移除页面原来的输入框
    DOMUtils.remove("#needmessage[name='message']");
    // 移除表情列表
    DOMUtils.remove("#imglist");
    // 移除回复按钮
    DOMUtils.remove("#fastpostsubmitline");
    DOMUtils.remove("#fastpostsubmit");

    let $footMenu = $<HTMLElement>("#comiis_foot_memu")!;
    DOMUtils.hide($footMenu, false);

    let smiliesList = MTEditorSmilies();
    let first_smilies = Object.keys(smiliesList[0]).map((key) => {
      let smilies_url: string = (smiliesList as any)[0][key];
      return /*html*/ `<li><a href="javascript:;" onclick="comiis_addsmilies('${key}');"><img loading="lazy" data-src="${smilies_url}" class="vm"></a></li>`;
    });
    let second_smilies = Object.keys(smiliesList[1]).map((key) => {
      let smilies_url: string = (smiliesList as any)[1][key];
      return /*html*/ `<li><a href="javascript:;" onclick="comiis_addsmilies('${key}');"><img loading="lazy" data-src="${smilies_url}" class="vm"></a></li>`;
    });
    let third_smilies = Object.keys(smiliesList[2]).map((key) => {
      let smilies_url: string = (smiliesList as any)[2][key];
      return /*html*/ `<li><a href="javascript:;" onclick="comiis_addsmilies('${key}');"><img loading="lazy" data-src="${smilies_url}" class="vm"></a></li>`;
    });

    DOMUtils.after(
      $footMenu,
      /*html*/ `
            <div id="comiis_foot_menu_beautify" class="bg_f b_t">
                <div class="reply_area">
                    <ul>
                        <li data-attr="回帖"><input type="text" class="bg_e f_c" placeholder="发帖千百度，文明第一步" readonly="readonly"></li>
                        <li data-attr="评论数量">${$old_commentIcon.innerHTML}</li>
                        <li data-attr="点赞">${$old_linkIcon.innerHTML}</li>
                        <li data-attr="收藏">${$old_collectIcon.innerHTML}</li>
                    </ul>
                </div>
            </div>
            <div id="comiis_foot_menu_beautify_big" data-model="comment" class="bg_f b_t" style="display:none;">
                <div class="reply_area">
                    <div class="reply_user_content" style="display:none;"></div>
                    <ul>
                        <li data-attr="回帖"><textarea id="needmessage" placeholder="发帖千百度，文明第一步"></textarea></li>
                        <li data-attr="发表">
                            <div class="fastpostform_new"><a href="${forum_url}" data-comment-url="${forum_url}" target="_blank"><i class="comiis_font f_d"></i></a></div>
                            <div id="fastpostsubmitline"><input data-comment-url="${forum_url}" data-comment-action="${
                              this.$data.forum_action
                            }" data-comment-serialize="${forum_serialize}" data-text="false" type="button" value="发表" name="replysubmit" id="fastpostsubmit" comiis="handle"></div>
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
                            <!-- 列表项 -->
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
                             <!-- 菜单项 -->
                             <div class="bqbox_t">
                                <ul id="comiis_pictitle_key">
                                    <li class="bg_f" id="comiis_pictitle_tab_n_1"><a href="javascript:;" class="">论坛</a></li>
                                </ul>
                            </div>
                        </div>
                        <div id="comiis_post_tab" class="comiis_bqbox">
                            <div class="comiis_smiley_box swiper-container-horizontal swiper-container-android">
                                <div class="swiper-wrapper bqbox_c comiis_optimization">
                                    <div class="swiper-slide">
                                        ${first_smilies.join("\n")}
                                    </div>
    
                                    <div class="swiper-slide" style="display: none;">
                                        ${second_smilies.join("\n")}
                                    </div>
                                    
                                    <div class="swiper-slide" style="display: none;">
                                        ${third_smilies.join("\n")}    
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
                                    <ul id="comiis_insert_ubb_tab_list">
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
    );
    // 新-评论按钮
    let $comment = $<HTMLAnchorElement>("#comiis_foot_menu_beautify .comiis_position_key")!;
    // 新-点赞按钮
    this.$el.$like = $<HTMLAnchorElement>("#comiis_foot_menu_beautify .comiis_recommend_addkey")!;
    // 新-收藏按钮
    let $collect = $<HTMLAnchorElement>("#comiis_foot_menu_beautify #comiis_favorite_a")!;
    // 图片选择器
    let $picture = $<HTMLLIElement>("#comiis_pictitle_key");
    this.$el.$btn_submit = $<HTMLInputElement>('#comiis_foot_menu_beautify_big li[data-attr="发表"] input')!;
    this.$el.$input = $<HTMLTextAreaElement>("#comiis_foot_menu_beautify_big textarea")!;
    this.$el.$fastpostsubmit = $<HTMLInputElement>("#fastpostsubmit")!;

    // 覆盖输入框滚动事件
    unsafeWindow.textarea_scrollHeight = () => {};
    // 覆盖添加表情文字的函数
    if (typeof unsafeWindow.comiis_addsmilies == "function") {
      /* 替换全局函数添加图片到里面触发input */
      unsafeWindow.comiis_addsmilies = (smilies_text: any) => {
        unsafeWindow.$("#needmessage").comiis_insert(smilies_text);
        unsafeWindow.$("#needmessage")[0].dispatchEvent(new Event("propertychange"));
      };
    }

    // 修复原本的网页自带的图片上传功能
    unsafeWindow.$("#imglist .up_btn").append(unsafeWindow.$("#filedata"));
    unsafeWindow.$(document).on("click", "#imglist .up_btn a", function (this: any) {
      unsafeWindow.$(this).next().click();
    });
    unsafeWindow.$(document).on("click", "#imglist .p_img a", function (this: any) {
      let obj = unsafeWindow.$(this);
      if (obj.attr("onclick") == null) {
        let img_id = obj.find("img").attr("id").replace("aimg_", "");
        unsafeWindow.comiis_addsmilies!(`[attachimg]${img_id}[/attachimg]`);
      }
    });

    // 隐藏菜单
    DOMUtils.hide("#comiis_foot_menu_beautify_big .menu_body", false);

    this.setInputChangeEvent();
    this.setLikeBtnClickEvent();
    this.setSubmitBtnClickEvent();
    this.setGlobalReplyBtnClickEvent();
    this.setGlobalClickCheckEvent();
    this.setMenuIconToggleEvent();
    this.setMenuImageClickEvent();
    this.setMenuImageToggleEvent();
    this.setMenuSmileClickEvent();
    this.setMenuSmileTabClickEvent();
    this.setMenuInsertClickEvent();
    this.setMenuQuickUBB();
    Panel.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText", async () => {
      this.setInputChangeSaveEvent();
      await this.initReplyText();
    });
    Panel.execMenuOnce("mt-image-bed-hello-enable", () => {
      MTEditorImageBed_Hello.init();
    });
    Panel.execMenuOnce("mt-image-bed-mt-enable", () => {
      MTEditorImageBed_MT.init();
    });
  },
  /**
   * 处理错误的响应
   * @param text
   */
  handle_error(text: string) {
    let return_status = false;
    let messagetext: string = DOMUtils.text(
      DOMUtils.toElement(text, false, false).querySelector<HTMLElement>("#messagetext")!
    );
    if (!messagetext || (typeof messagetext === "string" && messagetext.trim() == "")) {
      return return_status;
    }
    Object.keys(error_code).forEach((item) => {
      let value = error_code[item as any as keyof typeof error_code];
      if (messagetext.indexOf(value.error_match) != -1) {
        if (messagetext.indexOf(`typeof errorhandle_=='function'`) != -1) {
          /* 奇怪的返回值，在该帖子是关闭状态，点击回复会出现抱歉，本主题已关闭，不再接受新内容，正常是errorhandle_fastpost */
          Qmsg.error(value.popup_text);
        }
        return_status = true;
        return;
      }
    });
    return return_status;
  },
  /**
   * 监听输入框内容改变
   */
  setInputChangeEvent() {
    const that = this;
    DOMUtils.on(that.$el.$input, ["input", "propertychange"], function (event) {
      /* 输入框内容改变，高度也改变事件 */
      let inputText = that.$el.$input.value;
      if (inputText === "") {
        // 空
        that.$el.$btn_submit.setAttribute("data-text", "false");
        $("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.setAttribute(
          "placeholder",
          "发帖千百度，文明第一步"
        );
      } else {
        // 有数据
        that.$el.$btn_submit.setAttribute("data-text", "true");
        $("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.setAttribute("placeholder", "[草稿待发送]");
      }
      DOMUtils.css(that.$el.$input, "height", "70px");
      DOMUtils.css(that.$el.$input, "height", that.$el.$input.scrollHeight - 20 + "px");
    });
  },
  /**
   * 监听输入框内容改变并保存到indexDB
   */
  setInputChangeSaveEvent() {
    const that = this;

    DOMUtils.on(this.$el.$input, ["input", "propertychange"], async (event) => {
      const inputText = that.$el.$input.value;
      const $reply = that.$el.$input.closest(".reply_area")!.querySelector<HTMLElement>(".reply_user_content")!;
      const replyUrl = $reply.getAttribute("data-reply-url")!;
      const data: EditorNormalStorageOption = {
        url: window.location.href,
        text: inputText,
        repquote: replyUrl ? MTUtils.getRepquote(replyUrl) : undefined,
        forumId: that.$data.tid!,
      };

      const result = await that.$data.db.get<EditorNormalStorageOption[]>("data");
      if (!result.success || result.code === 201) {
        console.warn(result);
        return;
      }
      let localDataIndex = result.data.findIndex((item) => {
        return item.forumId === data.forumId && item.repquote === data.repquote;
      });
      let statusStr = "";
      if (localDataIndex !== -1) {
        if (inputText == null || inputText === "") {
          // 空数据，清理indexedDB数据
          statusStr = "删除数据";
          result.data.splice(localDataIndex, 1);
        } else {
          statusStr = "更新数据";
          result.data[localDataIndex] = utils.assign(result.data[localDataIndex], {
            text: data.text,
          } as EditorNormalStorageOption);
        }
      } else {
        statusStr = "添加数据";
        result.data.push(data);
      }

      const saveData = await that.$data.db.save<EditorNormalStorageOption[]>("data", result.data);
      if (import.meta.env.DEV) {
        console.info(`存储更新-${statusStr}：`, saveData);
      }
    });
  },
  /**
   * 把存储回复框的内容设置到输入框中
   * @param isUserReply 是否是来自点击回复的
   * @param replyUrl 回复的url
   */
  async initReplyText(isUserReply: boolean = false, replyUrl: string | null | undefined = undefined) {
    const that = this;
    let initResult = await this.$data.db.get<EditorNormalStorageOption[]>("data");
    if (initResult.code === 201) {
      // 初始化
      await this.$data.db.save("data", []);
    }
    let queryResult = await this.$data.db.get<EditorNormalStorageOption[]>("data");
    if (!queryResult.success || queryResult.code === 201) {
      console.warn(queryResult);
      return;
    }
    let repquote: string | undefined = void 0;
    if (replyUrl) {
      repquote = MTUtils.getRepquote(replyUrl)!;
    }
    let localReplyData = queryResult.data.find((item) => {
      if (isUserReply) {
        return item.forumId === that.$data.tid && item.repquote == repquote;
      } else {
        return item.forumId === that.$data.tid && item.repquote == null;
      }
    });
    if (localReplyData) {
      DOMUtils.val(this.$el.$input, localReplyData.text);
      DOMUtils.emit(this.$el.$input, "input");
    }
  },
  /**
   * 设置点赞按钮点击事件
   */
  setLikeBtnClickEvent() {
    DOMUtils.on(this.$el.$like, "click", async (event) => {
      /* 点赞按钮事件 */
      DOMUtils.preventEvent(event);
      if (unsafeWindow.comiis_recommend_key == 0) {
        unsafeWindow.comiis_recommend_key = 1;
        let response = await httpx.get(this.$el.$like.href + "&inajax=1", {
          headers: {
            Accept: "application/xml, text/xml, */*; q=0.01",
          },
          fetch: true,
          allowInterceptConfig: false,
        });
        if (!response.status) {
          window.location.href = this.$el.$like.href;
          setTimeout(function () {
            unsafeWindow.comiis_recommend_key = 0;
          }, 500);
          return;
        }
        let xmlDoc = utils.parseFromString(response.data.responseText, "text/xml")!;
        let resultText = xmlDoc.lastChild?.firstChild?.nodeValue!;
        if (resultText.includes("您已评价过本主题")) {
          // 取消点赞
          let tid = this.$el.$like.href.match(MTRegExp.tid)![1];
          let response2 = await httpx.get(`plugin.php?id=comiis_app&comiis=re_recommend&tid=${tid}&inajax=1`, {
            headers: {
              Accept: "application/xml, text/xml, */*; q=0.01",
            },
            fetch: true,
            allowInterceptConfig: false,
          });
          if (!response2.status) {
            Qmsg.error("取消点赞失败，网络异常");
            return;
          }
          var recommend_num = Number(DOMUtils.text("#comiis_recommend_num"));
          if (document.querySelectorAll(".comiis_recommend_list_a").length > 0) {
            DOMUtils.remove("#comiis_recommend_list_a" + unsafeWindow.uid);
          }
          if (document.querySelectorAll(".comiis_recommend_list_s").length > 0) {
            DOMUtils.remove("#comiis_recommend_list_s" + unsafeWindow.uid);
          }
          if (document.querySelectorAll(".comiis_recommend_list_t").length > 0) {
            DOMUtils.remove("#comiis_recommend_list_t" + unsafeWindow.uid);
          }
          if (recommend_num > 1) {
            DOMUtils.text(".comiis_recommend_num", recommend_num - Number(unsafeWindow.allowrecommend));
            DOMUtils.text(".comiis_recommend_nums", "+" + (recommend_num - Number(unsafeWindow.allowrecommend)));
          } else {
            DOMUtils.remove("#comiis_recommend_num");
            DOMUtils.text(".comiis_recommend_nums", "");

            if (document.querySelectorAll(".comiis_recommend_list_a").length > 0) {
              DOMUtils.empty(".comiis_recommend_list_a");
              DOMUtils.removeClass(".comiis_recommend_list_a", "comiis_recommend_list_on");
            }
            if (document.querySelectorAll(".comiis_recommend_list_t").length > 0) {
              DOMUtils.removeClass(".comiis_recommend_list_t", "comiis_recommend_list_on");
            }
          }
          DOMUtils.html(".comiis_recommend_addkey i", "&#xe63b;");
          DOMUtils.removeClass(".comiis_recommend_color", "f_a");
          DOMUtils.addClass(".comiis_recommend_color", "f_b");
          if (document.querySelectorAll(".comiis_recommend_list_s").length > 0) {
            if (document.querySelectorAll(".comiis_recommend_list_s li").length < 7) {
              DOMUtils.hide(".txshow_more", false);
            } else {
              DOMUtils.show(".txshow_more", false);
            }
          }
          Qmsg.success("已取消点赞");
        } else if (resultText.includes("您不能评价自己的帖子")) {
          Qmsg.error("不能点赞自己的帖子");
        } else if (resultText.includes("今日评价机会已用完")) {
          Qmsg.warning("您今日的点赞机会已用完");
        } else if (resultText.includes("'recommendv':'+" + unsafeWindow.allowrecommend + "'")) {
          var recommendcList = {
              recommendc: 0,
              daycount: 0,
            },
            recommendc;
          recommendc = resultText.match(/\'recommendc\':\'(.*?)\'/);
          if (recommendc != null) {
            recommendcList["recommendc"] = parseInt(recommendc[1]);
          } else {
            recommendcList["recommendc"] = 0;
          }
          recommendc = resultText.match(/\'daycount\':\'(.*?)\'/);
          if (recommendc != null) {
            recommendcList["daycount"] = parseInt(recommendc[1]);
          } else {
            recommendcList["daycount"] = 0;
          }
          if (document.querySelectorAll(".comiis_recommend_new span").length < 1) {
            DOMUtils.append(
              ".comiis_recommend_new",
              '<span class="bg_del f_f comiis_kmvnum comiis_recommend_num" id="comiis_recommend_num">0</span>'
            );
          }
          var comiis_recommend_num = Number(DOMUtils.text("#comiis_recommend_num"));
          if ($$(".comiis_recommend_list_a").length > 0) {
            let $list_a = $$<HTMLElement>(".comiis_recommend_list_a");
            DOMUtils.removeClass($list_a, "comiis_recommend_list_on");
            DOMUtils.addClass($list_a, "comiis_recommend_list_on");
            DOMUtils.prepend(
              $list_a,
              ($$(".comiis_recommend_list_a li").length > 0
                ? ""
                : '<li style="float:right;margin-right:0;"><a href="misc.php?op=recommend&tid= ' +
                  unsafeWindow.tid +
                  '&mod=faq&mobile=2"><span class="bg_b f_c"><em class="comiis_recommend_num">' +
                  comiis_recommend_num +
                  "</em>赞</span></a></li>") +
                '<li id="comiis_recommend_list_a' +
                unsafeWindow.uid +
                '"><a href="home.php?mod=space&uid=' +
                unsafeWindow.uid +
                '"><img src="' +
                MTUtils.getAvatar(unsafeWindow.uid, "small") +
                '"></a></li>'
            );
          }
          if ($$(".comiis_recommend_list_t").length > 0) {
            let $list_t = $$<HTMLElement>(".comiis_recommend_list_t");
            DOMUtils.removeClass($list_t, "comiis_recommend_list_on");
            DOMUtils.addClass($list_t, "comiis_recommend_list_on");
            DOMUtils.prepend(
              $list_t,
              `<span id="comiis_recommend_list_t${unsafeWindow.uid}">
                          							<a href="home.php?mod=space&uid=${unsafeWindow.uid}" class="f_c">${unsafeWindow.username}</a>
													${$$(".comiis_recommend_list_t a").length > 0 ? '<span class="f_d"> , </span>' : ""}
                        						</span>`
            );
          }
          if ($$(".comiis_recommend_list_s").length > 0) {
            let $list_s = $$<HTMLElement>(".comiis_recommend_list_s");
            DOMUtils.removeClass($list_s, "comiis_recommend_list_on");
            DOMUtils.addClass($list_s, "comiis_recommend_list_on");
            DOMUtils.prepend(
              $list_s,
              ($$(".comiis_recommend_list_s li").length > 0 ? "" : "") +
                '<li id="comiis_recommend_list_s' +
                unsafeWindow.uid +
                '"><a href="home.php?mod=space&uid=' +
                unsafeWindow.uid +
                '"><img loading="lazy" src="' +
                MTUtils.getAvatar(unsafeWindow.uid, "small") +
                '"></a></li>'
            );
          }
          DOMUtils.text(".comiis_recommend_num", comiis_recommend_num + Number(unsafeWindow.allowrecommend));
          DOMUtils.text(".comiis_recommend_nums", "+" + (comiis_recommend_num + Number(unsafeWindow.allowrecommend)));
          DOMUtils.html(".comiis_recommend_addkey i", "&#xe654;");
          DOMUtils.removeClass(".comiis_recommend_color", "f_b");
          DOMUtils.addClass(".comiis_recommend_color", "f_a");
          if ($$(".comiis_recommend_list_s").length > 0) {
            if ($$(".comiis_recommend_list_s li").length < 7) {
              DOMUtils.hide(".txshow_more", false);
            } else {
              DOMUtils.show(".txshow_more", false);
            }
          }
          Qmsg.success(
            "点赞成功" + (recommendcList["daycount"] ? `, 您今天还能点赞 ${recommendcList["daycount"] - 1} 次` : "")
          );
        } else if (resultText.indexOf("window.location.href = 'member.php?mod=logging&action=login&mobile=2'") >= 0) {
          window.location.href = "member.php?mod=logging&action=login&mobile=2";
        } else {
          Qmsg.error("没有点赞权限或帖子不存在");
        }
        setTimeout(function () {
          unsafeWindow.comiis_recommend_key = 0;
        }, 500);
      }
      return false;
    });
  },
  /**
   * 发表按钮|回复按钮点击事件
   */
  setSubmitBtnClickEvent() {
    const that = this;
    DOMUtils.on(this.$el.$fastpostsubmit, "click", async (event) => {
      DOMUtils.preventEvent(event);
      that.$data.isPosting = true;
      const $message = $<HTMLTextAreaElement>("#needmessage")!;
      let message = DOMUtils.val($message);
      message = encodeURIComponent(message);
      if (message == null || message === "") {
        return;
      }
      try {
        if (DOMUtils.val(that.$el.$fastpostsubmit) == "发表") {
          let $loading = Qmsg.loading("发表中，请稍后...");
          // 请求数据
          let data = "message=" + message;
          // 遍历图片数据，添加到请求数据中
          $$<HTMLInputElement>("#imglist input[type='hidden']").forEach(($ele) => {
            let key = $ele.getAttribute("name");
            data += `&${key}=`;
          });
          data = DOMUtils.serialize(that.$el.$form) + "&" + data;
          let url = that.$data.forum_action + "reply&handlekey=fastpost&loc=1&inajax=1";
          let response = await httpx.post(url, {
            data: data,
            fetch: true,
            allowInterceptConfig: false,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
          $loading.close();
          if (!response.status) {
            Qmsg.error("发表失败，网络异常");
            return;
          }
          let xmlDoc = utils.parseFromString(response.data.responseText, "text/xml");
          let xmlText = xmlDoc.lastChild?.firstChild?.nodeValue!;
          unsafeWindow.evalscript(xmlText);
          if (this.handle_error(xmlText)) {
            return;
          }
          window.scrollTo({
            top: DOMUtils.height(document),
          });

          DOMUtils.val("#needmessage", "");
          $<HTMLElement>("#comiis_head")?.click();
          DOMUtils.hide("#comiis_foot_menu_beautify_big .reply_user_content", false);
          DOMUtils.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input', "data-text", "false");
          DOMUtils.attr(
            "#comiis_foot_menu_beautify li[data-attr='回帖'] input",
            "placeholder",
            "发帖千百度，文明第一步"
          );
          await this.deleteReplyTextStorage();
        } else {
          /* 回复 */
          let data =
            DOMUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content", "data-reply-serialize") + message;

          $$<HTMLInputElement>("#imglist input[type='hidden']").forEach((item) => {
            data = `${data}&${item.getAttribute("name")}=`;
          });
          let replyUrl = DOMUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content", "data-reply-action");
          let response = await httpx.post(replyUrl + "&handlekey=fastposts&loc=1&inajax=1", {
            allowInterceptConfig: false,
            fetch: true,
            data: data,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
          if (!response.status) {
            Qmsg.error("回复失败，网络异常");
            return;
          }
          let xmlDoc = utils.parseFromString(response.data.responseText, "text/xml");
          let xmlText = xmlDoc.lastChild?.firstChild?.nodeValue!;
          log.info(xmlText);
          unsafeWindow.evalscript(xmlText);
          if (this.handle_error(xmlText)) {
            return;
          }
          $<HTMLElement>(xmlText)?.click();

          DOMUtils.val("#needmessage", "");
          $<HTMLElement>("#comiis_head")!.click();
          DOMUtils.val('#comiis_foot_menu_beautify_big li[data-attr="发表"] input', "发表");
          DOMUtils.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input', "data-text", "false");
          DOMUtils.attr(
            "#comiis_foot_menu_beautify li[data-attr='回帖'] input",
            "placeholder",
            "发帖千百度，文明第一步"
          );
          window.scrollTo({
            top: DOMUtils.height(document),
          });
          await this.deleteReplyTextStorage(true, replyUrl);
        }
      } catch (error) {
        console.error(error);
      } finally {
        that.$data.isPosting = false;
      }

      return false;
    });
  },
  /**
   * 全局回复按钮点击事件
   */
  setGlobalReplyBtnClickEvent() {
    DOMUtils.on(
      document,
      "click",
      '.comiis_postli_times .dialog[href*="reply"]',
      async (event) => {
        DOMUtils.preventEvent(event);
        let $reply = event.target as HTMLAnchorElement;
        DOMUtils.attr("#comiis_foot_menu_beautify_big", "data-model", "reply");

        let response = await httpx.get(DOMUtils.attr($reply, "datahref") || $reply.href + "&inajax=1", {
          fetch: true,
          allowInterceptConfig: false,
        });
        if (!response.status) {
          Qmsg.error("网络异常，获取回复参数失败");
          return;
        }
        let xmlDoc = utils.parseFromString(response.data.responseText, "text/xml");
        let xmlText = xmlDoc.lastChild?.firstChild?.nodeValue!;
        if (this.handle_error(xmlText)) {
          return;
        }
        let requestDOM = DOMUtils.toElement(`<div>${xmlText}</div>`, true, false);
        let reply_url = requestDOM.querySelector<HTMLAnchorElement>(".comiis_tip .tip_tit a")?.getAttribute("href")!;
        let reply_user = DOMUtils.text(requestDOM.querySelector<HTMLSpanElement>(".comiis_tip span.f_0")!);
        let reply_content = DOMUtils.val(requestDOM.querySelector<HTMLInputElement>("input[name='noticeauthormsg']")!);

        let reply_action = DOMUtils.attr(requestDOM.querySelector<HTMLFormElement>("#postforms")!, "action");
        let reply_serialize = DOMUtils.serialize(requestDOM.querySelector<HTMLFormElement>("#postforms")!);
        DOMUtils.text("#comiis_foot_menu_beautify_big .reply_user_content", `回复 ${reply_user}: ${reply_content}`);
        DOMUtils.show("#comiis_foot_menu_beautify_big .reply_user_content", false);
        $<HTMLInputElement>("#comiis_foot_menu_beautify li[data-attr='回帖'] input")?.click();
        DOMUtils.focus("#comiis_foot_menu_beautify li[data-attr='回帖'] input");
        DOMUtils.val("#fastpostsubmitline input", "回复");
        DOMUtils.attr("#comiis_foot_menu_beautify_big .fastpostform_new a", "href", reply_url);
        DOMUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content", "data-reply-url", reply_url);
        DOMUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content", "data-reply-action", reply_action);
        DOMUtils.attr("#comiis_foot_menu_beautify_big .reply_user_content", "data-reply-serialize", reply_serialize);
        tempReplyBtnNode = $reply;
        DOMUtils.val("#needmessage", DOMUtils.attr($reply, "data-text") || "");
        Panel.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText", async () => {
          await this.initReplyText(true, reply_url);
        });
      },
      {
        capture: true,
      }
    );
  },
  /**
   * 全局点击检测事件
   */
  setGlobalClickCheckEvent() {
    const that = this;
    let forum_url = $<HTMLAnchorElement>("#fastpostform .header_y a")!.href;
    DOMUtils.on(document, "click", function (this: HTMLElement, event) {
      let $click = event.target as HTMLElement;
      if ($(".popups-popmenu") || MTEditorOptimizationNormal.$data.isUBBCodeInsertClick) {
        /* 当前存在弹出层，不做处理 */
        log.info(`点击的是弹出层，不做处理`);
        MTEditorOptimizationNormal.$data.isUBBCodeInsertClick = false;
        return;
      } else if (
        ($click?.classList && $click?.classList?.contains(".dialog_reply")) ||
        ($click?.closest && $click?.closest(".dialog_reply")) ||
        $click === $('li[data-attr="回帖"] input')
      ) {
        /* 当前点击的回复图标按钮，显示回帖xx内容 */
        log.info(`点击回复按钮或者是编辑器，显示编辑器`);
        DOMUtils.hide("#comiis_foot_menu_beautify", false);
        DOMUtils.show("#comiis_foot_menu_beautify_big", false);
        DOMUtils.focus("#needmessage");
      } else if (window.event && !DOMUtils.checkUserClickInNode($("#comiis_foot_menu_beautify_big")!)) {
        /* 当前点击的不在底部编辑框区域内 */
        log.info(`点击的其它区域，隐藏大编辑器，显示小编辑器`);
        DOMUtils.show("#comiis_foot_menu_beautify", false);
        DOMUtils.hide("#comiis_foot_menu_beautify_big", false);
        if (DOMUtils.attr("#comiis_foot_menu_beautify_big", "data-model") == "reply") {
          /* 当前编辑框模式为回复某人评论 */
          DOMUtils.attr("#comiis_foot_menu_beautify_big", "data-model", "comment");
          DOMUtils.val("#fastpostsubmitline input", "发表");
          DOMUtils.attr("#comiis_foot_menu_beautify_big .fastpostform_new a", "href", forum_url);
          DOMUtils.text("#comiis_foot_menu_beautify_big .reply_area .reply_user_content");
          DOMUtils.hide("#comiis_foot_menu_beautify_big .reply_area .reply_user_content", false);
          DOMUtils.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content", "data-reply-url", "");
          DOMUtils.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content", "data-reply-action", "");
          DOMUtils.attr("#comiis_foot_menu_beautify_big .reply_area .reply_user_content", "data-reply-serialize", "");
          if (tempReplyBtnNode) {
            DOMUtils.attr(tempReplyBtnNode, "data-text", DOMUtils.val("#needmessage"));
            DOMUtils.val("#needmessage", "");
            DOMUtils.attr('#comiis_foot_menu_beautify_big li[data-attr="发表"] input', "data-text", "false");
            DOMUtils.attr(
              "#comiis_foot_menu_beautify li[data-attr='回帖'] input",
              "placeholder",
              "发帖千百度，文明第一步"
            );
          }
        }

        if (DOMUtils.val(that.$el.$input) === "" && !that.$data.isPosting) {
          // 空的且非回复|发表中
          Panel.execMenu("mt-forum-post-editorOptimizationNormal-recordInputText", async () => {
            await that.initReplyText();
          });
        }
      }
    });
  },
  /**
   * 菜单-图标切换事件
   */
  setMenuIconToggleEvent() {
    DOMUtils.on("#comiis_foot_menu_beautify_big .menu_icon a i", "click", function (this: HTMLElement, event) {
      let $click = this;
      if ($click.classList.contains("f_0")) {
        // 已显示、隐藏
        DOMUtils.hide("#comiis_foot_menu_beautify_big .menu_body", false);
        DOMUtils.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i", "f_0");
      } else {
        // 已隐藏、显示
        DOMUtils.show("#comiis_foot_menu_beautify_big .menu_body", false);
        DOMUtils.removeClass("#comiis_foot_menu_beautify_big .menu_icon a i", "f_0");
        DOMUtils.addClass($click, "f_0");
      }
    });
  },
  /**
   * 菜单-图片点击事件
   */
  setMenuImageClickEvent() {
    DOMUtils.on(
      "#comiis_foot_menu_beautify_big .menu_icon a.comiis_pictitle",
      "click",
      function (this: HTMLElement, event) {
        let $click = this;
        DOMUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab", false);
        DOMUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab", false);

        DOMUtils.show("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab", false);
      }
    );
  },
  /**
   * 菜单-图标-切换图片组的事件
   */
  setMenuImageToggleEvent() {
    DOMUtils.on(
      "#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key",
      "click",
      "li",
      function (this: HTMLElement, event) {
        let $click = event.target as HTMLLIElement;
        DOMUtils.removeClass("#comiis_foot_menu_beautify_big #comiis_pictitle_tab #comiis_pictitle_key li", "bg_f");
        DOMUtils.addClass($click, "bg_f");
        unsafeWindow
          .$("#comiis_foot_menu_beautify_big #comiis_pictitle_tab div.comiis_upbox")
          .hide()
          .eq(unsafeWindow.$($click).index())
          .fadeIn();
      }
    );
  },
  /**
   * 菜单-表情点击事件
   */
  setMenuSmileClickEvent() {
    DOMUtils.on(
      "#comiis_foot_menu_beautify_big .menu_icon a.comiis_smile",
      "click",
      function (this: HTMLElement, event) {
        let $click = this;
        DOMUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab", false);
        DOMUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab", false);

        DOMUtils.show("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab", false);
        let smileDOM = $<HTMLElement>("#comiis_foot_menu_beautify_big .menu_body .comiis_bqbox")!;
        if ((DOMUtils.attr(smileDOM, "data-isLoaded") as any) != 1) {
          DOMUtils.attr(smileDOM, "data-isLoaded", 1);
          smileDOM.querySelectorAll("img").forEach((item) => {
            let data_src = item.getAttribute("data-src");
            if (data_src) {
              item.setAttribute("src", data_src);
            }
          });
        }
      }
    );
  },
  /**
   * 菜单-表情-切换表情组的点击事件
   */
  setMenuSmileTabClickEvent() {
    DOMUtils.on("#comiis_foot_menu_beautify_big #comiis_smilies_key li", "click", function (this: HTMLElement, event) {
      let $click = this;
      DOMUtils.removeClass("#comiis_foot_menu_beautify_big #comiis_smilies_key li a");

      DOMUtils.addClass($click.querySelector("a")!, "bg_f b_l b_r");
      unsafeWindow
        .$("#comiis_post_tab div.swiper-wrapper.bqbox_c.comiis_optimization .swiper-slide")
        .hide()
        .eq(unsafeWindow.$($click).index())
        .fadeIn();
    });
  },
  /**
   * 菜单-插入点击事件
   */
  setMenuInsertClickEvent() {
    DOMUtils.on("#comiis_foot_menu_beautify_big .menu_icon a.commis_insert_bbs", "click", (event) => {
      DOMUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_post_tab", false);
      DOMUtils.hide("#comiis_foot_menu_beautify_big .menu_body #comiis_pictitle_tab", false);
      DOMUtils.show("#comiis_foot_menu_beautify_big .menu_body #comiis_insert_ubb_tab", false);
    });
  },
  /**
   * 获取回复记录的占用空间
   */
  async getReplyRecordSize() {
    let result = await this.$data.db.get<EditorNormalStorageOption[]>("data");
    if (result.success) {
      let size = utils.getTextStorageSize(result?.data?.length ? JSON.stringify(result.data) : "");
      return size;
    } else {
      return utils.formatByteToSize(0);
    }
  },
  /**
   * 清空所有的回复记录
   */
  async clearAllReplyRecord() {
    return await this.$data.db.deleteAll();
  },
  /**
   * 删除存储的回复框的内容到indexedDB
   * @param isUserReply 是否是来自点击回复的
   * @param replyUrl 回复的url
   */
  async deleteReplyTextStorage(isUserReply: boolean = false, replyUrl: string | undefined | null = undefined) {
    const that = this;
    const removeData = async () => {
      const queryData = await this.$data.db.get<EditorNormalStorageOption[]>("data");
      if (!queryData.success || queryData.code === 201) {
        console.warn(queryData);
        listener.off();
        return false;
      }
      let localDataIndex = queryData.data.findIndex((item) => {
        if (isUserReply) {
          return item.forumId === that.$data.tid && replyUrl && item.repquote === MTUtils.getRepquote(replyUrl);
        } else {
          return item.forumId === that.$data.tid && utils.isNull(item.repquote);
        }
      });
      let flag = false;
      if (localDataIndex !== -1) {
        queryData.data.splice(localDataIndex, 1);
        const saveData = await this.$data.db.save<EditorNormalStorageOption[]>("data", queryData.data);
        if (import.meta.env.DEV) {
          console.log("存储更新-删除发布|回复的数据：", saveData);
        }
        flag = true;
      }
      listener.off();
      return flag;
    };
    const listener = DOMUtils.on(
      window,
      "beforeunload",
      async () => {
        await removeData();
      },
      { capture: true }
    );
    await removeData();
  },
  /**
   * 注入UBB代码
   */
  setMenuQuickUBB() {
    let $tab_list = $<HTMLUListElement>("#comiis_insert_ubb_tab_list")!;
    let ubbCodeMap = MTQuickUBB();
    Reflect.set(ubbCodeMap, "code", {
      key: "代码",
      value: "[code][/code]",
      tagL: "]",
      tagR: "[",
      L: "[code]",
      R: "[/code]",
      cursorL: "[code]",
      cursorLength: 7,
      quickUBBReplace: "[code]replace[/code]",
    });
    Reflect.set(ubbCodeMap, "password", {
      key: "密码",
      value: "[password][/password]",
      tagL: "]",
      tagR: "[",
      L: "[password]",
      R: "[/password]",
      cursorL: "[password]",
      cursorLength: 10,
      quickUBBReplace: "[password]replace[/password]",
    });

    Object.keys(ubbCodeMap).forEach((keyName) => {
      let value = (ubbCodeMap as any)[keyName];
      let $ubbs = DOMUtils.createElement("li", {
        className: "quickUBBs",
        innerHTML: /*html*/ `
                    <a href="javascript:;" class="comiis_xifont f_d">
                        <i class="comiis_font"></i>${value["key"]}
                    </a>
                `,
      });
      DOMUtils.on($ubbs, "click", (event) => {
        DOMUtils.removeClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont", "f_0");
        DOMUtils.addClass("#comiis_insert_ubb_tab div.comiis_post_urlico ul li.quickUBBs a.comiis_xifont", "f_d");
        let $font = $ubbs.querySelector<HTMLAnchorElement>(".comiis_xifont")!;
        DOMUtils.removeClass($font, "f_d");
        DOMUtils.removeClass($font, "f_d");

        let $prompt = pops.prompt({
          title: {
            text: "UBB代码",
            position: "center",
          },
          content: {
            text: "",
            placeholder: `请输入需要${value["key"]}的文字`,
            focus: true,
          },
          btn: {
            ok: {
              text: "插入",
              type: "primary",
              callback: (details) => {
                if (details.text.trim() === "") {
                  Qmsg.error("输入框不能为空或纯空格");
                  return;
                }
                if (value["isFunc"]) {
                  unsafeWindow.comiis_addsmilies!(MTUBB_Rainbow(value["num"], details.text)); /* 插入贴内 */
                } else if (value["quickUBBReplace"]) {
                  unsafeWindow.comiis_addsmilies!(
                    value["quickUBBReplace"].replaceAll("replace", details.text)
                  ); /* 插入贴内 */
                } else {
                  unsafeWindow.comiis_addsmilies!(details.text); /* 插入贴内 */
                }
                $prompt.close();
              },
            },
            cancel: {
              text: "关闭",
              callback: () => {
                $prompt.close();
              },
            },
          },
          width: "300px",
          height: "200px",
        });
      });
      $tab_list.append($ubbs);
    });
  },
};
