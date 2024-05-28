import { GM_addStyle, unsafeWindow } from "ViteGM";
import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtil } from "@/util/CommonUtil";
import EasyLearnShieldCSS from "./shield.css?raw";
import type { Vue2Context } from "@whitesev/utils/dist/src/Utils";

const BaiduEasyLearn = {
	init() {
		GM_addStyle(EasyLearnShieldCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenu("baidu_easylearn_shield_this_question_paper", () => {
			this.shieldQuestionPaper();
		});
		PopsPanel.execMenu(
			"baidu_easylearn_shield_good_questions_in_this_volume",
			() => {
				this.shieldGoodQuestionsInThisVolume();
			}
		);
		PopsPanel.execMenu("baidu_easylearn_shield_related_test_papers", () => {
			this.shieldRelatedTestPapers();
		});
		PopsPanel.execMenu("baidu_easylearn_shield_video_explanation", () => {
			this.shieldVideoExplanation();
		});
		PopsPanel.execMenu("baidu_easylearn_shield_xueba_notes", () => {
			this.shieldXuebaNotes();
		});
		PopsPanel.execMenu("baidu_easylearn_shield_bottom_toolbar", () => {
			this.shieldBottomToolbar();
		});
		PopsPanel.execMenu(
			"baidu_easylearn_unlocking_the_upper_limit_of_search_questions",
			() => {
				this.hijackUserSearchQuestCount();
			}
		);
		PopsPanel.execMenu("baidu_easylearn_auto_show_answer", () => {
			this.showAnswerContent();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenu("baidu_easylearn_unlocking_top_search_input", () => {
				this.allowUserSearchInput();
			});
		});
	},
	/**
	 * 屏蔽题卷
	 */
	shieldQuestionPaper() {
		log.success("屏蔽题卷");
		GM_addStyle(`
        .question-shijuan-wrap,
        /* PC端 */
        .question-cont .timu-wrap .doc-cont-v2 .left{
            display: none !important;
        }
        `);
	},
	/**
	 * 屏蔽本卷好题
	 */
	shieldGoodQuestionsInThisVolume() {
		log.success("屏蔽本卷好题");
		GM_addStyle(`
        .exercise-questions-wrap{
            display: none !important;
        }
        `);
	},
	/**
	 * 屏蔽本卷相关试卷
	 */
	shieldRelatedTestPapers() {
		log.success("屏蔽本卷相关试卷");
		GM_addStyle(`
        .related-papers-wrap,
        /* PC端 */
        .question-cont .timu-wrap .doc-cont-v2 .right{
            display: none !important;
        }{
            display: none !important;
        }
        `);
	},
	/**
	 * 屏蔽视频解析
	 */
	shieldVideoExplanation() {
		log.success("屏蔽视频解析");
		GM_addStyle(`
        .video-doc-compo,
        /* PC端 */
        .container #questionVideo{
            display: none !important;
        }
        `);
	},
	/**
	 * 屏蔽学霸
	 */
	shieldXuebaNotes() {
		log.success("屏蔽学霸");
		GM_addStyle(`
        .note-list{
            display: none !important;
        }
        `);
	},
	/**
	 * 屏蔽底部工具栏
	 */
	shieldBottomToolbar() {
		log.success("屏蔽底部工具栏");
		GM_addStyle(`
        .question-bottom-bar,
        #app .bgk-question-detail .float-btm{
            display: none !important;
        }
        `);
	},
	/**
	 * 显示答案内容
	 */
	showAnswerContent() {
		utils.waitNode("div.question-swiper").then(async () => {
			log.success("显示答案内容");
			await utils.waitVueByInterval(
				function () {
					return document.querySelector(
						"div.question-swiper"
					) as HTMLDivElement;
				},
				function (__vue__) {
					return "$watch" in __vue__;
				},
				100,
				10000
			);
			CommonUtil.getVue(
				document.querySelector("div.question-swiper") as any
			)?.$watch(
				["isShowAnswer", "isShowAnswerContent"],
				function (newVal: any, oldVal: any) {
					log.success("显示答案");
					this.isShowAnswer = true;
					this.isShowAnswerContent = true;
				},
				{
					deep: true,
					immediate: true,
				}
			);
			CommonUtil.getVue(
				document.querySelector("div.question-swiper") as any
			)?.$parent.$watch(
				"isOnAlternativeDialog",
				function (newVal: any, oldVal: any) {
					log.success("禁止显示弹窗");
					this.isOnAlternativeDialog = false;
				},
				{
					deep: true,
					immediate: true,
				}
			);
			CommonUtil.getVue(
				document.querySelector("div.question-swiper") as any
			)?.$parent.$watch(
				"userChangeQuestionCount",
				function () {
					log.success("滑动改变题目");
					CommonUtil.getVue(
						document.querySelector("div.question-swiper") as any
					)!.isShowAnswer = true;
					CommonUtil.getVue(
						document.querySelector("div.question-swiper") as any
					)!.isShowAnswerContent = true;
				},
				{
					deep: true,
					immediate: true,
				}
			);
			/* 阻止调用App Scheme */
			CommonUtil.getVue(
				document.querySelector("div.question-swiper") as any
			)!.$parent.openBgkApp = function () {
				log.success(["openBgkApp：阻止调用App Scheme", arguments]);
			};
			CommonUtil.getVue(
				document.querySelector("div.question-swiper") as any
			)!.openApp = function () {
				log.success(["openApp：阻止调用App Scheme", arguments]);
			};
			CommonUtil.getVue(
				document.querySelector("div.question-swiper") as any
			)!.$parent.goToApp = function () {
				log.success(["goToApp：阻止调用App Scheme", arguments]);
			};
		});
	},
	/**
	 * 劫持-今日搜题次数已达上限
	 */
	hijackUserSearchQuestCount() {
		log.success("劫持-今日搜题次数已达上限");
		unsafeWindow.localStorage.removeItem("user_search_quest_count");
	},
	/**
	 * 允许使用顶部的输入框
	 */
	allowUserSearchInput() {
		utils
			.waitNodeWithInterval(".search-input .search-box-wrap.search-box", 10000)
			.then(async () => {
				log.success("允许使用顶部的输入框");
				await utils.waitVueByInterval(
					function () {
						return document.querySelector(
							".search-input .search-box-wrap.search-box"
						) as HTMLDivElement;
					},
					function (__vue__: Vue2Context) {
						return "$watch" in __vue__;
					},
					250,
					10000
				);
				CommonUtil.getVue(
					document.querySelector(".search-input .search-box-wrap.search-box")
				)!.$watch(
					"isFake",
					function (newVal, oldVal) {
						log.success("允许使用顶部搜索输入框");
						this.isFake = false;
					},
					{
						deep: true,
						immediate: true,
					}
				);
			});
	},
};

export { BaiduEasyLearn };
