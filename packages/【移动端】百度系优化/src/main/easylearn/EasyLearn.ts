import { unsafeWindow } from "ViteGM";
import { DOMUtils, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtils } from "@/utils/CommonUtils";
import EasyLearnShieldCSS from "./shield.css?raw";
import type { Vue2Context } from "@whitesev/utils/dist/src/Utils";
import { VueUtils } from "@/utils/VueUtils";

const BaiduEasyLearn = {
	init() {
		addStyle(EasyLearnShieldCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenuOnce("baidu_easylearn_shield_this_question_paper", () => {
			return this.shieldQuestionPaper();
		});
		PopsPanel.execMenuOnce(
			"baidu_easylearn_shield_good_questions_in_this_volume",
			() => {
				return this.shieldGoodQuestionsInThisVolume();
			}
		);
		PopsPanel.execMenuOnce("baidu_easylearn_shield_related_test_papers", () => {
			return this.shieldRelatedTestPapers();
		});
		PopsPanel.execMenuOnce("baidu_easylearn_shield_video_explanation", () => {
			return this.shieldVideoExplanation();
		});
		PopsPanel.execMenuOnce("baidu_easylearn_shield_xueba_notes", () => {
			return this.shieldXuebaNotes();
		});
		PopsPanel.execMenuOnce("baidu_easylearn_shield_bottom_toolbar", () => {
			return this.shieldBottomToolbar();
		});
		PopsPanel.execMenuOnce(
			"baidu_easylearn_unlocking_the_upper_limit_of_search_questions",
			() => {
				this.hijackUserSearchQuestCount();
			}
		);
		PopsPanel.execMenuOnce("baidu_easylearn_auto_show_answer", () => {
			this.showAnswerContent();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce(
				"baidu_easylearn_unlocking_top_search_input",
				() => {
					this.allowUserSearchInput();
				}
			);
		});
	},
	/**
	 * 屏蔽题卷
	 */
	shieldQuestionPaper() {
		log.info("屏蔽题卷");
		return CommonUtils.addBlockCSS(
			".question-shijuan-wrap",
			/* PC端 */
			".question-cont .timu-wrap .doc-cont-v2 .left"
		);
	},
	/**
	 * 屏蔽本卷好题
	 */
	shieldGoodQuestionsInThisVolume() {
		log.info("屏蔽本卷好题");
		return CommonUtils.addBlockCSS(".exercise-questions-wrap");
	},
	/**
	 * 屏蔽本卷相关试卷
	 */
	shieldRelatedTestPapers() {
		log.info("屏蔽本卷相关试卷");
		return CommonUtils.addBlockCSS(
			".related-papers-wrap",
			/* PC端 */
			".question-cont .timu-wrap .doc-cont-v2 .right"
		);
	},
	/**
	 * 屏蔽视频解析
	 */
	shieldVideoExplanation() {
		log.info("屏蔽视频解析");
		return CommonUtils.addBlockCSS(
			".video-doc-compo",
			/* PC端 */
			".container #questionVideo"
		);
	},
	/**
	 * 屏蔽学霸
	 */
	shieldXuebaNotes() {
		log.info("屏蔽学霸");
		return CommonUtils.addBlockCSS(".note-list");
	},
	/**
	 * 屏蔽底部工具栏
	 */
	shieldBottomToolbar() {
		log.info("屏蔽底部工具栏");
		return CommonUtils.addBlockCSS(
			".question-bottom-bar",
			"#app .bgk-question-detail .float-btm"
		);
	},
	/**
	 * 显示答案内容
	 */
	showAnswerContent() {
		utils
			.waitNode<HTMLDivElement>("div.question-swiper")
			.then(async ($questionSwiper) => {
				log.info("显示答案内容");
				await utils.waitVueByInterval(
					$questionSwiper,
					function (vueObj) {
						return "$watch" in vueObj;
					},
					100,
					10000
				);
				let vueObj = VueUtils.getVue($questionSwiper);
				if (!vueObj) {
					log.error("获取vue属性失败 => div.question-swiper");
					return;
				}
				vueObj.$watch(
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
				vueObj.$parent.$watch(
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
				vueObj.$parent.$watch(
					"userChangeQuestionCount",
					function () {
						log.success("滑动改变题目");
						vueObj.isShowAnswer = true;
						vueObj.isShowAnswerContent = true;
					},
					{
						deep: true,
						immediate: true,
					}
				);
				/* 阻止调用App Scheme */
				vueObj.$parent.openBgkApp = function (...args: any[]) {
					log.success(["openBgkApp：阻止调用App Scheme", args]);
				};
				vueObj.openApp = function (...args: any[]) {
					log.success(["openApp：阻止调用App Scheme", args]);
				};
				vueObj.$parent.goToApp = function (...args: any[]) {
					log.success(["goToApp：阻止调用App Scheme", args]);
				};
			});
	},
	/**
	 * 劫持-今日搜题次数已达上限
	 */
	hijackUserSearchQuestCount() {
		log.info("移除-【今日搜题次数已达上限】的本次存储的记录");
		unsafeWindow.localStorage.removeItem("user_search_quest_count");
	},
	/**
	 * 允许使用顶部的输入框
	 */
	allowUserSearchInput() {
		utils
			.waitNode<HTMLDivElement>(
				".search-input .search-box-wrap.search-box",
				10000
			)
			.then(async ($searchBox) => {
				if (!$searchBox) {
					log.error("元素.search-input .search-box-wrap.search-box未出现");
					return;
				}
				log.success("允许使用顶部的输入框");
				await utils.waitVueByInterval(
					$searchBox,
					function (vueObj: Vue2Context) {
						return "$watch" in vueObj;
					},
					250,
					10000
				);
				let vueObj = VueUtils.getVue($searchBox);
				if (vueObj == null) {
					log.error(
						"获取vue属性失败 => .search-input .search-box-wrap.search-box"
					);
					return;
				}
				vueObj.$watch(
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
