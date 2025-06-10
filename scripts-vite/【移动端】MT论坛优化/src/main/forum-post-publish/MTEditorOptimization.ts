import { $, $$, addStyle, DOMUtils, log, pops, utils } from "@/env";
import optimizationCSS from "./css/editor-optimization.css?raw";
import { GM_deleteValue, GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import Qmsg from "qmsg";
import Utils from "@whitesev/utils";
import { MTUtils } from "@/utils/MTUtils";
import { Router } from "@/router/router";
import { Panel } from "@components/setting/panel";
import { MTSmiliesDict } from "./MTSmiliesDict";
import {
	ExtendJQueryFn,
	MTQuickUBB,
	MTUBB_Rainbow,
} from "../forum-post/MTQuickUBB";
import { MTEditorImageBed_Hello } from "../forum-post/MTEditorImageBed_Hello";
import { MTEditorImageBed_MT } from "../forum-post/MTEditorImageBed_MT";
import {
	MTEditorOptimizationNormal,
	type EditorNormalStorageOption,
} from "../forum-post/MTEditorOptimization-normal";

type EditorStorageOption = {
	/** 数据类型 */
	type: "post" | "post-vote";
	/**  */
	url: string;
	tid: string;
	pid: string;
	/** 数据 */
	data: VotingContentOption | PostContentOption;
};

type VotingContentOption = {
	/** 标题 */
	title: string;
	/** 最多可选xx项 */
	maxchoices: string;
	/** 记票天数 */
	expiration: string;
	/** 投票后结果可见 */
	visibilitypoll: boolean;
	/** 公开投票参与人 */
	overt: boolean;
	/** 内容 */
	content: string;
};

type PostContentOption = {
	/** 标题 */
	title: string;
	/** 内容 */
	content: string;
};

/**
 * 预览
 */
const MTEditorPreview = {
	/**
	 * 内容转换
	 */
	parseText(text: string) {
		const smiliesDictionaries = MTSmiliesDict();
		let attachimgmatch = text.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/g);
		if (attachimgmatch) {
			attachimgmatch.forEach((item) => {
				let aimgidMatch = item.match(/\[attachimg\]([\s\S]+?)\[\/attachimg\]/);
				let aimg_id = aimgidMatch ? aimgidMatch[aimgidMatch.length - 1] : "";
				let imgtitle = DOMUtils.attr(`#aimg_${aimg_id}`, "title");
				let imgsrc = DOMUtils.attr(`#aimg_${aimg_id}`, "src");
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
				let urlNameMatch = item.match(/\[url=[\s\S]*?\]([\s\S]*?)\[\/url\]/);
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
			size.forEach((item) => {
				let sizeValueMatch = item.match(/\[size=([\s\S]*?)\][\s\S]*\[\/size\]/);
				let sizeTextMatch = item.match(/\[size=[\s\S]*?\]([\s\S]*?)\[\/size\]/);
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
				let img_size_match = item.match(/\[img\=([\s\S]+?)\][\s\S]*?\[\/img\]/);
				if (img_size_match) {
					// @ts-ignore
					img_size_match = img_size_match[img_size_match.length - 1].split(",");
					// @ts-ignore
					widthInfo = img_size_match[0];
					// @ts-ignore
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
				// @ts-ignore
				other_info = other_info.split(",");
				let integral_big_can_see = other_info.length == 2 ? other_info[1] : "";

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
				// @ts-ignore
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
				let email_match = item.match(/\[email=([\s\S]*?)\][\s\S]*?\[\/email\]/);
				let content_match = item.match(
					/\[email=[\s\S]*?\]([\s\S]*?)\[\/email\]/
				);
				// @ts-ignore
				let _email_ = email_match.length
					? // @ts-ignore
					  email_match[email_match.length - 1]
					: "";
				// @ts-ignore
				let _content_ = content_match.length
					? // @ts-ignore
					  content_match[content_match.length - 1]
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
				let align_match = item.match(/\[align=([\s\S]*?)\][\s\S]+?\[\/align\]/);
				let content_match = item.match(
					/\[align=[\s\S]*?\]([\s\S]+?)\[\/align\]/
				);
				// @ts-ignore
				let _align_ = align_match.length
					? // @ts-ignore
					  align_match[align_match.length - 1]
					: "";
				// @ts-ignore
				let _content_ = content_match.length
					? // @ts-ignore
					  content_match[content_match.length - 1]
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
				} else if (list_model.length === 1 && list_model.match(/[0-9]{1}/)) {
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
		return text;
	},
	/**
	 * 投票的内容转换
	 */
	parseVoteText() {
		/* 选择的背景 */
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
		];
		/* 选项，最多20个 */
		let chooseContent = $$<HTMLInputElement>(
			".comiis_polloption_add ul li:first-child div.flex .comiis_input.kmshow[type='text']"
		);
		/* 最多可选 */
		let maxchoices = parseInt(DOMUtils.val("input#maxchoices"));
		maxchoices = isNaN(maxchoices) ? 0 : maxchoices;
		maxchoices = maxchoices > 0 ? maxchoices : 0;
		/* 大于当前选项数量的话为当前最大选项数量 */
		maxchoices =
			maxchoices > chooseContent.length ? chooseContent.length : maxchoices;
		/* 记票天数 */
		let polldatas = parseInt(DOMUtils.val("input#polldatas"));
		polldatas = isNaN(polldatas) ? 0 : polldatas;
		/* 投票后结果可见 */
		let visibilitypoll = unsafeWindow
			.$("input#visibilitypoll")
			.parent()
			.find(".comiis_checkbox")
			.hasClass("comiis_checkbox_close")
			? false
			: true;
		/* 公开投票参与人 */
		let overt = unsafeWindow
			.$("input#overt")
			.parent()
			.find(".comiis_checkbox")
			.hasClass("comiis_checkbox_close")
			? false
			: true;
		let html = "";
		let choosehtml = "";
		chooseContent.forEach((item, index) => {
			if (index >= 20) {
				/* 最多20个 */
				return;
			}
			choosehtml =
				choosehtml +
				`
                    <li class="kmnop">
                        <input type="${maxchoices > 1 ? "checkbox" : "radio"}">
                        <label><i class="comiis_font f_d"></i>${
													item.value
												}</label>
                    </li>
                    <li class="poll_ok cl">
                        <span class="bg_b">
                            <em style="width:2%;background-color:${
															chooseColor[index]
														}"></em>
                        </span>
                        <em style="color:${chooseColor[index]}">0% (0)</em>
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
		unsafeWindow.$(".gm_plugin_previewpostforum_html .postforum_vote").remove();
		unsafeWindow
			.$(".gm_plugin_previewpostforum_html .comiis_messages.comiis_aimg_show")
			.children()
			.eq(0)
			.before(unsafeWindow.$(html));
	},
};

export const MTEditorOptimization = {
	$data: {
		db: new Utils.indexedDB("mt_full_reply_record", "input_text"),
		get type(): EditorStorageOption["type"] {
			return Router.isPostPublish_voting() ? "post-vote" : "post";
		},
		get tid() {
			return MTUtils.getThreadId(window.location.href)!;
		},
		get pid() {
			return MTUtils.getPostId(window.location.href)!;
		},
	},
	$key: {
		/** 尚未发布、尚未存入草稿的序列化内容 */
		noPublishSerializeText: "mt-editor-no-publish-serialize-text",
		/** 尚未发布、尚未存入草稿的序列化投票内容 */
		noPublishVotingSerializeText: "mt-editor-no-publish-voting-serialize-text",
	},
	$el: {
		/** 标题框 */
		$title: null as any as HTMLElement,
		/** 输入框 */
		$input: null as any as HTMLTextAreaElement,
		/** 表单元素 */
		$form: null as any as HTMLFormElement,
	},
	init() {
		log.info(`编辑器优化`);
		addStyle(optimizationCSS);
		this.overridePageEditor();
	},
	/**
	 * 覆盖页面的编辑器
	 */
	overridePageEditor() {
		const that = this;
		this.$el.$title = $<HTMLElement>("#needsubject")!;
		this.$el.$form = $<HTMLFormElement>("#postform")!;
		this.$el.$input = $<HTMLTextAreaElement>("#needmessage")!;

		DOMUtils.hide(DOMUtils.parent(".comiis_scrollTop_box"), false);
		DOMUtils.css("#postform .comiis_post_from.mt15", {
			"margin-top": "0px !important",
		});
		let comiis_post_tab = unsafeWindow.$(
			"#postform .comiis_post_from #comiis_post_tab"
		);
		unsafeWindow
			.$("#postform .comiis_post_from .comiis_post_ico")
			.append(comiis_post_tab);
		comiis_post_tab.remove();
		// 覆盖事件
		unsafeWindow.textarea_scrollHeight = () => {};
		// 覆盖comiis删除的函数
		let comiis_delete: Function = unsafeWindow.$.fn.comiis_delete;
		unsafeWindow.$.fn.extend({
			comiis_delete: function (this: any, ...args: any[]) {
				let result = comiis_delete.call(this, ...args);
				utils.dispatchEvent(that.$el.$input, "input");
				return result;
			},
		});

		DOMUtils.hide(".comiis_btnbox", false);

		this.initVotePage();

		let before_image_luntan = unsafeWindow.$(
			".gm_plugin_chartbed .comiis_over_box.comiis_input_style #imglist"
		);
		addStyle(/*css*/ `
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
        #imglist_settings button:active{box-shadow:inset .2rem .2rem .5rem #c8d0e7,inset -.2rem -.2rem .5rem #fff!important;color:#638ffb!important}
        `);
		/* 添加上传多个文件功能 */
		DOMUtils.attr("#filedata", "multiple", true);
		DOMUtils.remove(".gm_plugin_chartbed .comiis_over_box.comiis_input_style");
		DOMUtils.on(document, "#comiis_pictitle_key li", "click", function () {
			/* 图床-各个菜单点击事件 */
			DOMUtils.removeClass("#comiis_pictitle_key li", "bg_f");
			DOMUtils.addClass(this, "bg_f");
			unsafeWindow
				.$(".gm_plugin_chartbed .comiis_upbox")
				.hide()
				.eq(unsafeWindow.$(this).index())
				.fadeIn();
		});

		let top_height = parseInt(DOMUtils.css("#comiis_head", "height")) || 0;
		let fatie_toupiao = parseInt(DOMUtils.css("#comiis_sub", "height")) || 0;
		let extra_margin_bottom = $("#pollm_c_1") ? 60 : 0;
		let title_height =
			parseInt(DOMUtils.css(".comiis_styli.comiis_flex", "height")) || 0;
		let nav_bottom_height =
			parseInt(
				DOMUtils.css(".comiis_post_ico.comiis_minipost_icot", "height")
			) || 0;
		DOMUtils.css(
			"#needmessage",
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
		DOMUtils.css("#needmessage", "marginBottom", extra_margin_bottom + "px");

		if (Router.isPostPublish_edit() && DOMUtils.val("#needsubject") === "") {
			DOMUtils.hide(".comiis_styli.comiis_flex", false);
		} else {
			DOMUtils.attr(
				"#needsubject",
				"placeholder",
				"请输入完整的帖子标题 (1-80个字)"
			);
		}
		DOMUtils.attr("#needmessage", "placeholder", "来吧，尽情发挥吧...");

		if (typeof unsafeWindow.comiis_addsmilies == "function") {
			/* 替换全局函数添加图片到里面触发input */
			unsafeWindow.comiis_addsmilies = (_str_: any) => {
				unsafeWindow.$("#needmessage").comiis_insert(_str_);
				unsafeWindow.$("#needmessage")[0].dispatchEvent(new Event("input"));
			};
		}
		if (
			Panel.getValue(
				"mt-forum-post-editorOptimizationNormal-recordInputText"
			) ||
			Panel.getValue("mt-forum-post-editorOptimization-recordInputText")
		) {
			this.setInputChangeEvent();
			this.initReplyText();
		}
		this.initDeleteBtn();
		this.initSaveDraftBtn();
		this.initSaveBtn();
		this.initPostBtn();
		this.initReplyBtn();
		this.observerChangeEditorHeight();
		this.listenResize();
		this.initSelectPostingSection();
		this.initUBB();
		this.initImage();
		this.initPreview();
		this.initCharacterCount();
		this.initSettingImmersionMode();
	},
	/**
	 * 把存储回复框的内容设置到输入框中
	 */
	async initReplyText() {
		const that = this;

		let data = null as any as
			| EditorStorageOption["data"]
			| EditorNormalStorageOption;
		let save_callback = null as any as
			| null
			| (() => boolean | Promise<boolean>);
		let delete_callback = null as any as null | (() => void | Promise<void>);
		if (Router.isPostPublish_newthread()) {
			// 新发布帖子的页面
			log.info(`新发布帖子的页面`);
			if (Router.isPostPublish_voting()) {
				// 投票页面
				log.info(`投票页面`);
				data = GM_getValue<VotingContentOption>(
					this.$key.noPublishVotingSerializeText
				);
				delete_callback = () => {
					GM_deleteValue(that.$key.noPublishVotingSerializeText);
				};
			} else {
				// 普通帖子页面
				log.info(`普通帖子页面`);
				data = GM_getValue<PostContentOption>(this.$key.noPublishSerializeText);
				delete_callback = () => {
					GM_deleteValue(this.$key.noPublishSerializeText);
				};
			}
		} else if (Router.isPostPublish_edit()) {
			// 草稿的页面
			log.info(`草稿的页面`);
			log.info(
				`type：${this.$data.type} tid：${this.$data.tid} pid：${this.$data.pid}`
			);
			let initResult = await this.$data.db.get<EditorStorageOption[]>("data");
			if (initResult.code === 201) {
				// 初始化
				await this.$data.db.save("data", []);
			}
			let queryResult = await this.$data.db.get<EditorStorageOption[]>("data");
			if (queryResult.data) {
				let findValue = queryResult.data.find((item) => {
					if (item.type !== that.$data.type) {
						return;
					}
					if (item.tid !== that.$data.tid || item.pid !== that.$data.pid) {
						return;
					}
					return true;
				});
				if (findValue) {
					data = findValue.data;
					delete_callback = async () => {
						let deleteQuery = await this.$data.db.get<EditorStorageOption[]>(
							"data"
						);
						if (deleteQuery.data) {
							let deleteFindIndex = deleteQuery.data.findIndex((item) => {
								if (item.type !== that.$data.type) {
									return;
								}
								if (
									item.tid !== that.$data.tid ||
									item.pid !== that.$data.pid
								) {
									return;
								}
								return true;
							});
							if (deleteFindIndex != -1) {
								deleteQuery.data.splice(deleteFindIndex, 1);
								await this.$data.db.save<EditorStorageOption[]>(
									"data",
									deleteQuery.data
								);
							}
						}
					};
				}
			}
		} else if (Router.isPostPublish_reply()) {
			log.info(`回复页面`);
			if (
				Panel.getValue(
					"mt-forum-post-editorOptimizationNormal-recordInputText"
				)
			) {
				let initResult = await MTEditorOptimizationNormal.$data.db.get<
					EditorNormalStorageOption[]
				>("data");
				if (initResult.code === 201) {
					// 初始化
					await this.$data.db.save("data", []);
				}
				let queryResult = await MTEditorOptimizationNormal.$data.db.get<
					EditorNormalStorageOption[]
				>("data");
				if (queryResult.data) {
					let findValue = queryResult.data.find((item) => {
						return (
							item.forumId === that.$data.tid &&
							item.repquote === MTUtils.getRepquote(window.location.href)
						);
					});
					if (findValue) {
						data = findValue;
					}
				}
			}
		}

		if (!data) {
			return;
		}

		if (Router.isPostPublish_voting()) {
			// 投票页面
			save_callback = () => {
				let $title = that.$el.$form.querySelector<HTMLInputElement>(
					"input[name='subject']"
				)!;
				// 内容
				let $content = that.$el.$form.querySelector<HTMLTextAreaElement>(
					"textarea[name='message']"
				)!;
				// 最多可选xx项
				let $maxchoices = that.$el.$form.querySelector<HTMLInputElement>(
					"input[name='maxchoices']"
				)!;
				// 记票天数
				let $expiration = that.$el.$form.querySelector<HTMLInputElement>(
					"input[name='expiration']"
				)!;
				// 投票后结果可见
				let $visibilitypoll = that.$el.$form.querySelector<HTMLInputElement>(
					"input[name='visibilitypoll']"
				)!;
				// 公开投票参与人
				let $overt = that.$el.$form.querySelector<HTMLInputElement>(
					"input[name='overt']"
				)!;
				DOMUtils.val($title, (data as VotingContentOption).title);
				DOMUtils.val($content, (data as VotingContentOption).content);
				DOMUtils.val($maxchoices, (data as VotingContentOption).maxchoices);
				DOMUtils.val($expiration, (data as VotingContentOption).expiration);
				DOMUtils.val(
					$visibilitypoll,
					(data as VotingContentOption).visibilitypoll
				);
				DOMUtils.val($overt, (data as VotingContentOption).overt);

				utils.dispatchEvent($title, "input");
				utils.dispatchEvent($content, "input");
				utils.dispatchEvent($maxchoices, "input");
				utils.dispatchEvent($expiration, "input");
				utils.dispatchEvent($visibilitypoll, "input");
				utils.dispatchEvent($overt, "input");

				return true;
			};
		} else {
			// 普通帖子页面
			if (Router.isPostPublish_reply()) {
				// 回复页面
				save_callback = () => {
					// 内容
					let $content = that.$el.$form.querySelector<HTMLTextAreaElement>(
						"textarea[name='message']"
					)!;

					DOMUtils.val($content, (data as EditorNormalStorageOption).text);

					utils.dispatchEvent($content, "input");
					return true;
				};
			} else {
				save_callback = () => {
					let $title = that.$el.$form.querySelector<HTMLInputElement>(
						"input[name='subject']"
					)!;
					// 内容
					let $content = that.$el.$form.querySelector<HTMLTextAreaElement>(
						"textarea[name='message']"
					)!;

					DOMUtils.val($title, (data as PostContentOption).title);
					DOMUtils.val($content, (data as PostContentOption).content);

					utils.dispatchEvent($title, "input");
					utils.dispatchEvent($content, "input");
					return true;
				};
			}
		}
		if (Router.isPostPublish_newthread()) {
			log.info(`新发布帖子的页面`);
			// 新发布帖子的页面
			// 直接覆盖，因为本来就是空的
			if (typeof save_callback === "function") {
				save_callback();
			}
		} else if (Router.isPostPublish_edit()) {
			// 草稿的页面
			log.info(`草稿的页面`);
			if (
				typeof save_callback === "function" &&
				typeof delete_callback === "function"
			) {
				pops.confirm({
					title: {
						text: "提示",
						position: "center",
					},
					content: {
						text: "<p>存在历史写入的数据，是否恢复到编辑器里？</p>",
						html: true,
					},
					btn: {
						merge: true,
						position: "space-between",
						ok: {
							text: "恢复",
							callback: async (details) => {
								if (await save_callback()) {
									Qmsg.success("恢复成功");
									details.close();
								}
							},
						},
						other: {
							enable: true,
							type: "danger",
							text: "删除该数据",
							callback: async (details) => {
								await delete_callback();
								details.close();
								Qmsg.success("删除成功");
							},
						},
					},
					width: "300px",
					height: "200px",
				});
			}
		} else if (Router.isPostPublish_reply()) {
			log.info(`回复页面`);
			// 直接覆盖，因为本来就是空的
			if (typeof save_callback === "function") {
				save_callback();
			}
		}
	},
	/**
	 * 获取回复记录的占用空间
	 */
	async getReplyRecordSize() {
		let result = await this.$data.db.get<EditorStorageOption[]>("data");
		if (result.success) {
			let size = utils.getTextStorageSize(
				result?.data?.length ? JSON.stringify(result.data) : ""
			);
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
	 * 删除存储的数据
	 */
	deleteReplyTextStorage() {
		const that = this;
		this.$data.db.get<EditorStorageOption[]>("data").then((result) => {
			if (!result.success) {
				console.warn(result);
				return;
			}
			let type: EditorStorageOption["type"] = Router.isPostPublish_voting()
				? "post-vote"
				: "post";
			let tid = MTUtils.getThreadId(window.location.href)!;
			let pid = MTUtils.getPostId(window.location.href)!;
			let localDataIndex = result.data.findIndex((item) => {
				if (item.type !== type) {
					return;
				}
				if (item.tid !== tid || item.pid !== pid) {
					return;
				}
				return true;
			});
			if (localDataIndex !== -1) {
				result.data.splice(localDataIndex, 1);
				that.$data.db
					.save<EditorStorageOption[]>("data", result.data)
					.then((result2) => {});
			}
		});
	},
	/**
	 * 监听输入框内容改变
	 */
	setInputChangeEvent() {
		const that = this;
		DOMUtils.on(
			[this.$el.$input, this.$el.$title].filter(Boolean),
			["input", "propertychange"],
			function (event) {
				/* 记录输入的文本保存到indexDB中 */
				let data = null as any as EditorStorageOption["data"];
				if (Router.isPostPublish_voting()) {
					// 投票页面
					// 标题
					let $title = that.$el.$form.querySelector<HTMLInputElement>(
						"input[name='subject']"
					)!;
					// 内容
					let $content = that.$el.$form.querySelector<HTMLTextAreaElement>(
						"textarea[name='message']"
					)!;
					// 最多可选xx项
					let $maxchoices = that.$el.$form.querySelector<HTMLInputElement>(
						"input[name='maxchoices']"
					)!;
					// 记票天数
					let $expiration = that.$el.$form.querySelector<HTMLInputElement>(
						"input[name='expiration']"
					)!;
					// 投票后结果可见
					let $visibilitypoll = that.$el.$form.querySelector<HTMLInputElement>(
						"input[name='visibilitypoll']"
					)!;
					// 公开投票参与人
					let $overt = that.$el.$form.querySelector<HTMLInputElement>(
						"input[name='overt']"
					)!;
					data = {
						title: $title.value,
						maxchoices: $maxchoices.value,
						expiration: $expiration.value,
						visibilitypoll: $visibilitypoll.checked,
						overt: $overt.checked,
						content: $content.value,
					} as VotingContentOption;
				} else {
					// 普通帖子页面
					// 标题
					let $title = that.$el.$form.querySelector<HTMLInputElement>(
						"input[name='subject']"
					);
					// 内容
					let $content = that.$el.$form.querySelector<HTMLTextAreaElement>(
						"textarea[name='message']"
					)!;
					data = {
						title: $title?.value,
						content: $content.value,
					} as PostContentOption;
				}
				if (Router.isPostPublish_newthread()) {
					// 新发布帖子的页面
					log.info(`内容改变 ==> 新发布帖子的页面`);
					if (Router.isPostPublish_voting()) {
						GM_setValue(that.$key.noPublishVotingSerializeText, data);
					} else {
						GM_setValue(that.$key.noPublishSerializeText, data);
					}
				} else if (Router.isPostPublish_edit()) {
					// 草稿的页面
					log.info(`内容改变 ==> 草稿的页面`);
					that.$data.db.get<EditorStorageOption[]>("data").then((result) => {
						if (!result.success) {
							console.warn(result);
							return;
						}
						let localDataIndex = result.data.findIndex((item) => {
							if (item.type !== that.$data.type) {
								return;
							}
							if (item.tid !== that.$data.tid || item.pid !== that.$data.pid) {
								return;
							}
							return true;
						});
						if (localDataIndex !== -1) {
							// 删掉旧的
							result.data.splice(localDataIndex, 1);
						}
						// 添加新的
						result.data.push({
							url: window.location.href,
							data: data,
							pid: that.$data.pid,
							tid: that.$data.tid,
							type: that.$data.type,
						});
						that.$data.db.save("data", result.data).then((result2) => {});
					});
				} else if (Router.isPostPublish_reply()) {
					// 回复页面
					log.info(`内容改变 ==> 回复页面`);
					Panel.execMenu(
						"mt-forum-post-editorOptimizationNormal-recordInputText",
						() => {
							MTEditorOptimizationNormal.$data.db
								.get<EditorNormalStorageOption[]>("data")
								.then((result) => {
									if (!result.success || result.code === 201) {
										console.warn(result);
										return;
									}
									let localDataIndex = result.data.findIndex((item) => {
										return (
											item.forumId === that.$data.tid &&
											item.repquote ===
												MTUtils.getRepquote(window.location.href)
										);
									});
									if (localDataIndex !== -1) {
										if (data.content == null || data.content === "") {
											// 空数据，清理indexedDB数据
											result.data.splice(localDataIndex, 1);
										} else {
											result.data[localDataIndex] = utils.assign(
												result.data[localDataIndex],
												{
													text: data.content,
												}
											);
										}
									} else {
										result.data.push({
											forumId: that.$data.tid,
											url: window.location.href,
											repquote: MTUtils.getRepquote(window.location.href),
											text: data.content,
										});
									}

									MTEditorOptimizationNormal.$data.db
										.save<EditorNormalStorageOption[]>("data", result.data)
										.then((result2) => {
											// console.info(result2);
										});
								});
						}
					);
				}
			}
		);
	},
	/**
	 * 初始化删除按钮
	 */
	initDeleteBtn() {
		let btn_del = $<HTMLElement>(".comiis_btnbox .comiis_btn.bg_del")!;
		if (!btn_del) {
			return;
		}
		let $header = $<HTMLElement>("#comiis_head .header_y")!;
		let $btn = DOMUtils.createElement(
			"input",
			{
				className: "new_btn_del",
			},
			{
				type: "button",
				value: "删除",
			}
		);
		DOMUtils.append($header, $btn);
		DOMUtils.on($btn, "click", function () {
			pops.confirm({
				title: {
					text: "提示",
					position: "center",
				},
				content: {
					text: "<p>是否删除帖子?</p>",
					html: true,
				},
				btn: {
					ok: {
						callback: (details) => {
							details.close();
							unsafeWindow.comiis_delthread();
						},
					},
				},
				width: "300px",
				height: "200px",
			});
		});
	},
	/**
	 * 初始化保存按钮
	 */
	initSaveBtn() {
		let $save = DOMUtils.selector<HTMLButtonElement>(
			".comiis_btnbox button#postsubmit:contains('保存')"
		)!;
		if (!$save) {
			return;
		}
		if (DOMUtils.text($save).includes("草稿")) {
			return;
		}
		let $header = $<HTMLElement>("#comiis_head .header_y")!;
		let $btn = DOMUtils.createElement(
			"input",
			{
				className: "new_btn_save",
			},
			{
				type: "button",
				value: "保存",
			}
		);
		DOMUtils.append($header, $btn);
		DOMUtils.on($btn, "click", function () {
			$save.click();
		});
	},
	/**
	 * 初始化发表按钮
	 */
	initPostBtn() {
		let $post = DOMUtils.selector<HTMLButtonElement>(
			".comiis_btnbox button#postsubmit:contains('发表')"
		);
		if (!$post) {
			return;
		}
		let $header = $<HTMLElement>("#comiis_head .header_y")!;
		let $btn = DOMUtils.createElement(
			"input",
			{
				className: "new_btn_post",
			},
			{
				type: "button",
				value: "发表",
			}
		);
		DOMUtils.append($header, $btn);
		DOMUtils.on($btn, "click", function () {
			DOMUtils.val("#postsave", 0);
			$post.click();
		});
	},
	/**
	 * 初始化回复按钮
	 */
	initReplyBtn() {
		const that = this;
		let $reply = DOMUtils.selector<HTMLButtonElement>(
			".comiis_btnbox button#postsubmit:contains('回复')"
		);
		if (!$reply) {
			return;
		}
		let $header = $<HTMLElement>("#comiis_head .header_y")!;
		let $btn = DOMUtils.createElement(
			"input",
			{
				className: "new_btn_reply",
			},
			{
				type: "button",
				value: "回复",
			}
		);
		DOMUtils.append($header, $btn);
		DOMUtils.on($btn, "click", function () {
			$reply.click();
			that.deleteReplyTextStorage();
		});
	},
	/**
	 * 初始化投票页面
	 */
	initVotePage() {
		if (!$$(".comiis_scrollTop_box").length) {
			return;
		}
		unsafeWindow.$("#htmlon").parent().append(/*html*/ `
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
			unsafeWindow
				.$(".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')")
				.attr("class") != "f_c"
		) {
			unsafeWindow
				.$(".comiis_checkbox.comiis_choose_post")
				.removeClass("comiis_checkbox_close");
		} else {
			unsafeWindow
				.$(".comiis_checkbox.comiis_choose_vote")
				.removeClass("comiis_checkbox_close");
		}
		unsafeWindow
			.$(".comiis_checkbox.comiis_choose_post")
			.on("click", function (this: any) {
				let obj = unsafeWindow.$(this);
				obj.addClass("comiis_checkbox_close");
				unsafeWindow
					.$(".comiis_checkbox.comiis_choose_vote")
					.addClass("comiis_checkbox_close");
				obj.removeClass("comiis_checkbox_close");
				window.location.href = window.location.href.replace("&special=1", "");
			});
		unsafeWindow
			.$(".comiis_checkbox.comiis_choose_vote")
			.on("click", function (this: any) {
				let obj = unsafeWindow.$(this);
				obj.addClass("comiis_checkbox_close");
				unsafeWindow
					.$(".comiis_checkbox.comiis_choose_post")
					.addClass("comiis_checkbox_close");
				obj.removeClass("comiis_checkbox_close");
				window.location.href = window.location.href + "&special=1";
			});
	},
	/**
	 * 初始化保存草稿按钮
	 */
	initSaveDraftBtn() {
		const that = this;
		let $saveDraft = DOMUtils.selector<HTMLEmbedElement>(
			".comiis_btnbox button#postsubmit em:contains('保存草稿')"
		);
		if (!$saveDraft) {
			return;
		}
		let $header = $<HTMLElement>("#comiis_head .header_y")!;
		let $btn = DOMUtils.createElement(
			"input",
			{
				className: "new_btn_save_temp",
			},
			{
				type: "button",
				value: "保存草稿",
			}
		);
		let $neesSubject = $<HTMLTextAreaElement>("#needsubject")!;
		DOMUtils.append($header, $btn);
		let $submitPost = DOMUtils.selector<HTMLElement>(
			".comiis_scrollTop_box .swiper-slide a:contains('发表帖子')"
		);

		DOMUtils.on($btn, "click", function () {
			$saveDraft.click();
		});
	},
	/**
	 * 动态修改编辑器的高度
	 */
	observerChangeEditorHeight() {
		var recordHeight = 0;
		utils
			.waitNode("#postform > div > div.comiis_post_ico.comiis_minipost_icot")
			.then((element) => {
				utils.mutationObserver(element, {
					callback: (mutations) => {
						var $tar = $<HTMLElement>(
							"#postform > div > div.comiis_post_ico.comiis_minipost_icot"
						)!;
						let height = window
							.getComputedStyle($tar)
							.getPropertyValue("height");
						if (height.toString() === recordHeight.toString()) {
							return;
						}
						recordHeight = parseInt(height);

						let needMessageSeeHeight =
							document.documentElement.clientHeight -
							$<HTMLElement>(
								"#postform > div > div.comiis_post_ico.comiis_minipost_icot"
							)!.getBoundingClientRect().height -
							$<HTMLTextAreaElement>("#needmessage")!.getBoundingClientRect()
								.top;
						if (needMessageSeeHeight - 5 < 100) {
							unsafeWindow.$("#needmessage").css("height", "100px");
							unsafeWindow
								.$(
									".gm_plugin_previewpostforum_html.double-preview .comiis_over_box"
								)
								.css("height", "100px");
						} else {
							unsafeWindow
								.$("#needmessage")
								.css("height", needMessageSeeHeight - 5 + "px");
							unsafeWindow
								.$(
									".gm_plugin_previewpostforum_html.double-preview .comiis_over_box"
								)
								.css("height", needMessageSeeHeight - 5 + "px");
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
	},
	/**
	 * 监听窗口大小变化
	 */
	listenResize() {
		DOMUtils.on(window, "resize", function () {
			let needMessageSeeHeight =
				document.documentElement.clientHeight -
				$<HTMLElement>(
					"#postform > div > div.comiis_post_ico.comiis_minipost_icot"
				)!.getBoundingClientRect().height -
				$<HTMLTextAreaElement>("#needmessage")!.getBoundingClientRect().top;
			if (needMessageSeeHeight - 5 < 100) {
				DOMUtils.css("#needmessage", "height", "100px");
				DOMUtils.css(
					".gm_plugin_previewpostforum_html.double-preview .comiis_over_box",
					"height",
					"100px"
				);
			} else {
				log.info("设置输入框、预览高度", needMessageSeeHeight - 5);
				DOMUtils.css("#needmessage", "height", needMessageSeeHeight - 5 + "px");
				DOMUtils.css(
					".gm_plugin_previewpostforum_html.double-preview .comiis_over_box",
					"height",
					needMessageSeeHeight - 5 + "px"
				);
			}
		});
	},
	/**
	 * 注入选择板块功能
	 */
	initSelectPostingSection() {
		addStyle(/*css*/ `
            #select-post-section {
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
		DOMUtils.before(
			".comiis_post_from .comiis_wzpost.comiis_input_style .comiis_styli:contains('标题')",
			/*html*/ `
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
        `
		);
		let $select = $<HTMLSelectElement>(`#select-post-section`)!;
		let currentSection = MTUtils.getForumId(window.location.href)!;

		if (Router.isPostPublish_newthread()) {
			/* 发帖 */
			log.info(`发帖`);
			DOMUtils.on($select, "change", function () {
				let fid = DOMUtils.val($select);
				let postSection = `forum.php?mod=post&action=newthread&fid=${fid}&extra=&topicsubmit=yes&mobile=2`;
				log.info(`修改发帖板块: ${(section_dict as any)[fid]} ${postSection}`);
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
				let otherSelect = (classifyClassNameDict as any)[
					(section_dict as any)[fid]
				] as {
					className: string;
					optionHTML: string;
				} | null;
				if (otherSelect) {
					DOMUtils.remove(
						DOMUtils.parent(".comiis_post_from .styli_tit:contains('分类')")
					);
					DOMUtils.before(
						".comiis_stylino.comiis_needmessage",
						/*html*/ `
                        <li class="comiis_styli comiis_flex b_b ${otherSelect["className"]}">
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
                                        ${otherSelect["optionHTML"]}
                                    </select>
                                </div>	
                            </div>
                        </li>
                        `
					);
				} else {
					Object.keys(classifyClassNameDict).forEach((key) => {
						DOMUtils.remove(
							".comiis_post_from ." +
								(classifyClassNameDict as any)[key]["className"]
						);
					});
				}
				DOMUtils.attr("#postform", "action", postSection);
			});
		} else {
			DOMUtils.attr($select, "disabled", true);
		}
		DOMUtils.val($select, currentSection);
		DOMUtils.trigger($select, "change");
	},
	/**
	 * 字符计数
	 */
	initCharacterCount() {
		log.info(`添加功能：字符计数`);
		addStyle(/*css*/ `
        .gm_plugin_word_count{display:flex}
        .gm_plugin_word_count::after{content:"/20000"}
        `);
		DOMUtils.append(
			"#comiis_mh_sub .swiper-wrapper.comiis_post_ico",
			/*html*/ `
            <a href="javascript:;" class="swiper-slide gm_plugin_word_count">
                <p>0</p>
            </a>`
		);
		DOMUtils.on(this.$el.$input, ["input", "propertychange"], (event) => {
			let userInputText = this.$el.$input.value;
			let userInputTextLength = utils.getTextLength(userInputText);
			let parsedText = MTEditorPreview.parseText(userInputText);
			DOMUtils.html(
				".gm_plugin_previewpostforum_html .comiis_message_table",
				parsedText
			);
			let wordCountDom = $<HTMLElement>(".gm_plugin_word_count p")!;
			DOMUtils.text(wordCountDom, userInputTextLength);
			if (userInputTextLength > 20000 || userInputTextLength < 10) {
				DOMUtils.attr(wordCountDom, "style", "color: red;");
			} else {
				DOMUtils.attr(wordCountDom, "style", "");
			}
		});
	},
	/**
	 * 自定义的其它ubb
	 */
	initUBB() {
		if (!$(".comiis_post_urlico")) {
			log.error("未找到插入元素");
			return;
		}
		addStyle(/*css*/ `
        #comiis_post_tab .comiis_input_style .comiis_post_urlico li a.f_0{
            color: #53bcf5 !important;
        }
        `);
		let ubbCode = MTQuickUBB();
		let parentEle = $<HTMLUListElement>(".comiis_post_urlico > ul")!;
		let contentEle = $<HTMLUListElement>("#comiis_post_qydiv > ul")!;
		let childNums = $$<HTMLLIElement>("#comiis_post_qydiv ul li").length;
		ExtendJQueryFn();

		DOMUtils.on(
			"#comiis_post_tab .comiis_input_style .comiis_post_urlico li",
			"click",
			function () {
				DOMUtils.removeClass(
					"#comiis_post_tab .comiis_input_style .comiis_post_urlico li a",
					"f_0"
				);
				DOMUtils.addClass(
					"#comiis_post_tab .comiis_input_style .comiis_post_urlico li a",
					"f_d"
				);
				DOMUtils.attr(this.querySelector("a")!, "class", "comiis_xifont f_0");
				unsafeWindow
					.$("#comiis_post_qydiv ul li")
					.hide()
					.eq(unsafeWindow.$(this).index())
					.fadeIn();
			}
		);
		unsafeWindow.$.each(ubbCode, function (key: any, value: any) {
			let $ubbs = DOMUtils.createElement("li", {
				className: "quickUBBs",
				innerHTML: /*html*/ `
                <a href="javascript:;" class="comiis_xifont f_d"><i class="comiis_font"></i>${value["key"]}</a>
                `,
			});
			DOMUtils.on($ubbs, "click", (event) => {
				let bottomEle = $<HTMLLIElement>(
					`#comiis_post_qydiv li[data-key='${value.key}']`
				)!;
				if (!bottomEle) {
					log.error("未找到该元素");
					return;
				}
				$$(
					"#comiis_post_tab div.comiis_post_urlico ul li a.comiis_xifont"
				).forEach(($ele) => {
					$ele.className = "comiis_xifont f_d";
				});
				let $childAnchor = $ubbs.querySelector("a")!;
				$childAnchor.className = "comiis_xifont f_0";
				let contentIndex = childNums + Object.keys(ubbCode).indexOf(key);
				unsafeWindow
					.$("#comiis_post_qydiv ul li")
					.hide()
					.eq(contentIndex)
					.fadeIn();
			});
			DOMUtils.append(parentEle, $ubbs);

			let ubbs_content = document.createElement("li");
			ubbs_content.setAttribute("style", "display: none;");
			ubbs_content.setAttribute("data-key", value["key"]);
			ubbs_content.innerHTML = /*html*/ `
            <div class="comiis_styli_m f15" style="padding-top:12px;">
                <div class="bg_e comiis_p5" style="border-radius:4px">
                    <textarea class="comiis_pt kmshow f_c" id="comiis_input_${key}" style="font-size:15px" placeholder="请输入需要${value["key"]}的文字"></textarea>
                </div>
            </div>
            <div class="comiis_styli_m f15 comiis_flex" style="padding-top:0;">
                <div class="styli_tit">
                    <button class="comiis_sendbtn bg_0 f_f" data-keyI="${key}" type="button">插入</button>
                </div>
                <div class="flex"></div>
            </div>`;

			DOMUtils.append(contentEle, ubbs_content);
			DOMUtils.on(`.comiis_sendbtn[data-keyI="${key}"]`, "click", () => {
				let text = unsafeWindow.$(`#comiis_input_${key}`).val();
				if (text == "") {
					Qmsg.warning("请输入需要插入的内容");
					return;
				}
				let currentUBBObj = (ubbCode as any)[key];
				if (currentUBBObj["isFunc"]) {
					text = MTUBB_Rainbow(currentUBBObj["num"], text);
				}
				if (currentUBBObj.hasOwnProperty("L")) {
					text = currentUBBObj["L"] + text + currentUBBObj["R"];
				}
				unsafeWindow.$("#needmessage").insertAtCaret(text);
				/*
                        if (mobile.quickUBB.code[key]["tagL"] != undefined || mobile.quickUBB.code[key]["tagR"] != undefined) {
                            unsafeWindow.$("#needmessage").moveCursorInCenterByText(mobile.quickUBB.code[key]["tagL"], mobile.quickUBB.code[key]["tagR"]);
                        }*/
				if (currentUBBObj.hasOwnProperty("cursorL")) {
					unsafeWindow
						.$("#needmessage")
						.moveCursorToCenterByTextWithLeft(
							currentUBBObj["cursorL"],
							currentUBBObj["cursorLength"]
						);
				}
				if (currentUBBObj.hasOwnProperty("cursorR")) {
					unsafeWindow
						.$("#needmessage")
						.moveCursorToCenterByTextWithRight(
							currentUBBObj["cursorR"],
							currentUBBObj["cursorLength"]
						);
				}
			});
		});
	},
	/**
	 * 图片功能
	 */
	initImage() {
		log.info(`添加功能：图片`);
		addStyle(/*css*/ `
            #comiis_pictitle_tab .comiis_upbox{
                height: 140px;
                overflow-y: auto;
            }
            `);
		let imageBtnHTML = /*html*/ `
        <a href="javascript:;" class="comiis_pictitle"><i class="comiis_font"><em>图片</em></i></a>`;
		DOMUtils.append(
			"#comiis_mh_sub .swiper-wrapper.comiis_post_ico",
			imageBtnHTML
		);

		DOMUtils.on(".comiis_pictitle", "click", function () {
			let $click = this;
			let $font = $click.querySelector("i.comiis_font")!;
			if (!$font.classList.contains("f_0")) {
				// 显示
				DOMUtils.show(".gm_plugin_chartbed", false);
			} else {
				// 隐藏
				DOMUtils.hide(".gm_plugin_chartbed", false);
			}
		});
		DOMUtils.append(
			"#comiis_post_tab",
			/*html*/ `
            <div id="comiis_pictitle_tab" class="gm_plugin_chartbed" style="display: none">
                <!-- <div class="comiis_upbox bg_f cl">
                    <ul id="mt-imglist" class="comiis_post_imglist cl">
                        <li class="up_btn">
                            <a href="javascript:;" class="bg_e b_ok f_d">
                                <i class="comiis_font"></i>
                            </a>
                        </li>				
                    </ul>
                </div> -->
                <div class="bqbox_t">
                    <ul id="comiis_pictitle_key">
                        <li class="bg_f" id="comiis_pictitle_tab_n_1"><a href="javascript:;" class="">论坛</a></li>
                    </ul>
                </div>
            </div>
            `
		);
		let originImageList = $<HTMLElement>("#imglist")!;
		let originImageListParent = DOMUtils.parent(originImageList);
		DOMUtils.before(".gm_plugin_chartbed .bqbox_t", originImageListParent);
		// 修复自带图片的点击上传功能
		DOMUtils.on("#imglist .comiis_font", "click", (event) => {
			$<HTMLInputElement>("#filedata")!.click();
		});
		DOMUtils.on(
			"#comiis_pictitle_tab #comiis_pictitle_key",
			"click",
			"li",
			function (this: HTMLElement, event) {
				let $click = event.target as HTMLLIElement;
				DOMUtils.removeClass(
					"#comiis_pictitle_tab #comiis_pictitle_key li",
					"bg_f"
				);
				DOMUtils.addClass($click, "bg_f");
				unsafeWindow
					.$("#comiis_pictitle_tab div.comiis_upbox")
					.hide()
					.eq(unsafeWindow.$($click).index())
					.fadeIn();
			}
		);
		Panel.execMenuOnce("mt-image-bed-hello-enable", () => {
			MTEditorImageBed_Hello.init();
		});
		Panel.execMenuOnce("mt-image-bed-mt-enable", () => {
			MTEditorImageBed_MT.init();
		});
	},
	/**
	 * 双列预览
	 */
	initPreview() {
		const that = this;
		log.info(`添加功能：双列预览`);
		addStyle(/*css*/ `
        .gm_plugin_previewpostforum_html .comiis_message_table{margin-top:10px;font-weight:initial;line-height:24px}
        .gm_plugin_previewpostforum_html .comiis_message_table a{height:auto;float:unset;color:#507daf!important}
        .gm_plugin_previewpostforum_html .comiis_message_table i{text-align:unset;font-size:unset;line-height:unset;padding-top:unset;display:unset}
        .comiis_postli.comiis_list_readimgs.nfqsqi{width:100vw}
        .gm_plugin_previewpostforum_html.double-preview{width:50vw}
        .gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style{border-left:1px solid}
        `);
		let previewBtnHTML = /*html*/ `
        <a href="javascript:;" class="swiper-slide gm_plugin_previewpostforum">
            <i class="comiis_font" style="display: flex;flex-direction: column;padding-top: 1px;">
                <svg t="1661243615511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2399" width="22" height="22" fill="currentColor">
                    <path d="M470.1 885.3H208.8V138.7h597.3v336c0 20.6 16.7 37.3 37.3 37.3 20.6 0 37.3-16.7 37.3-37.3v-336c0-41.2-33.4-74.7-74.7-74.7H208.8c-41.2 0-74.7 33.4-74.7 74.7v746.7c0 41.2 33.4 74.7 74.7 74.7h261.3c20.6 0 37.3-16.7 37.3-37.3 0.1-20.8-16.6-37.5-37.3-37.5z" p-id="2400"></path>
                    <path d="M641.3 496.5c-54.3 0-108.5 23.5-146.2 70.5-54.7 68.3-53.4 168.6 2.8 235.6 37.5 44.8 90.5 67.2 143.4 67.2 35.9 0 71.8-10.3 103-30.9l81.8 81.8c7.3 7.3 16.8 10.9 26.4 10.9 9.6 0 19.1-3.6 26.4-10.9 14.6-14.6 14.6-38.2 0-52.8l-81.8-81.8c48-72.5 40.1-171.1-23.7-234.9-36.5-36.4-84.3-54.7-132.1-54.7z m0 298.7c-36.5 0-72.9-17.6-95.3-52.9-22.6-35.6-22.6-82.5 0-118.1 22.4-35.3 58.9-52.9 95.3-52.9 36.5 0 72.9 17.6 95.3 52.9 22.6 35.6 22.6 82.5 0 118.1-22.4 35.2-58.8 52.9-95.3 52.9z" p-id="2401"></path>
                </svg>
                <em style="bottom: 1px;position: relative;">预览</em>
            </i>
        </a>`;
		DOMUtils.append(
			"#comiis_mh_sub .swiper-wrapper.comiis_post_ico",
			previewBtnHTML
		);

		/* box-shadow: -1px 0px 8px; */
		DOMUtils.css(DOMUtils.parent(this.$el.$input), "display", "flex");
		DOMUtils.after(
			this.$el.$input,
			/*html*/ `
            <div class="bg_f cl gm_plugin_previewpostforum_html double-preview" style="display: none;">
              <div class="comiis_over_box comiis_input_style">
                <div class="comiis_postli comiis_list_readimgs nfqsqi" style="width: 50vw;">
                  <div class="comiis_message bg_f view_one cl message" style="margin-bottom: auto;padding: 0px 12px 0px 12px;">
                    <div class="comiis_messages comiis_aimg_show cl" style="overflow-y: auto;position: relative;">
                      <div class="comiis_a comiis_message_table cl" style="margin: 0;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
		);

		DOMUtils.on(
			".gm_plugin_previewpostforum",
			"click",
			function (this: HTMLElement, event) {
				let $click = this;
				if ($$("#polldatas").length) {
					/* 当前是投票帖子 */
					MTEditorPreview.parseVoteText();
				}
				let $font = $click.querySelector("i.comiis_font")!;
				if (!$font.classList.contains("f_0")) {
					DOMUtils.show(".gm_plugin_previewpostforum_html", false);
					let parsedText = MTEditorPreview.parseText(
						DOMUtils.val(that.$el.$input)
					);
					DOMUtils.html(
						".gm_plugin_previewpostforum_html .comiis_message_table",
						parsedText
					);
					DOMUtils.css(
						".gm_plugin_previewpostforum_html.double-preview .comiis_over_box.comiis_input_style",
						"height",
						DOMUtils.css(that.$el.$input, "height")
					);
				} else {
					DOMUtils.hide(".gm_plugin_previewpostforum_html", false);
				}
			}
		);
	},
	/**
	 * 初始化设置功能-使用沉浸模式
	 */
	initSettingImmersionMode() {
		log.info(`初始化设置功能-使用沉浸模式`);
		DOMUtils.append(
			DOMUtils.parent("#htmlon"),
			/*html*/ `
            <li class="comiis_styli_m f15 comiis_flex b_b">
                <div class="flex">使用沉浸输入</div>
                <div class="styli_r">
                    <input type="checkbox" name="immersiveinput" id="immersiveinput" value="" class="comiis_checkbox_key">
                    <label for="immersiveinput" class="wauto">
                        <code class="bg_f b_ok comiis_checkbox comiis_checkbox_close"></code>
                    </label>
                </div>	
            </li>
            `
		);
		DOMUtils.on("#immersiveinput", "click", function () {
			let $click = this;
			let code_obj =
				DOMUtils.parent($click).querySelector<HTMLElement>(".comiis_checkbox")!;
			let elementList = [
				/* 板块、标题 */
				".comiis_wzpost ul li.comiis_flex",
				/* 回复别人的quote */
				".comiis_wzpost ul li.comiis_styli.kmquote",
				/* 投票,最多可填写 20 个选项 */
				DOMUtils.parent(DOMUtils.parent("#pollchecked")),
				/* 投票,增加一项 */
				"#pollm_c_1",
				/* 投票,增加一项(编辑状态下) */
				".comiis_polloption_add+div.f_0",
				/* 投票,内容 */
				".comiis_wzpost ul li.comiis_thread_content:contains('内容')",
				/* 顶部header */
				"div#comiis_head",
				/* 后面的 */
				"div#comiis_head+*:not([class])",
			];
			if (DOMUtils.hasClass(code_obj, "comiis_checkbox_close")) {
				elementList.forEach(($ele) => {
					$ele && DOMUtils.hide($ele, false);
				});
			} else {
				elementList.forEach(($ele) => {
					$ele && DOMUtils.show($ele, false);
				});
			}
			window.dispatchEvent(new Event("resize"));
		});
	},
};
