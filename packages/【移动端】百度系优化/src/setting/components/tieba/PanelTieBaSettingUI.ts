import { TieBaApi } from "@/main/tieba/api/TiebaApi";
import { utils } from "@/env";
import { BaiduRouter } from "@/router/BaiduRouter";
import { UIButton } from "@/setting/common-components/ui-button";
import { UISwitch } from "@/setting/common-components/ui-switch";
import Qmsg from "qmsg";

const PanelTieBaSettingUI: PopsPanelContentConfig = {
	id: "baidu-panel-config-tieba",
	title: "贴吧",
	headerTitle: "百度贴吧<br />tieba.baidu.com<br />www.tieba.com<br />...等",
	isDefault() {
		return BaiduRouter.isTieBa();
	},
	scrollToDefaultView: true,
	forms: [
		{
			text: "账号功能",
			type: "forms",
			forms: [
				UIButton(
					"签到所有关注的吧",
					void 0,
					"签到",
					void 0,
					void 0,
					false,
					"default",
					async () => {
						/**
						 * 获取提示内容
						 * @param {number} index
						 * @param {number} maxIndex
						 * @param {string} forumName
						 * @param {string} text
						 * @param {?string} signText
						 * @returns
						 */
						function getLoadingHTML(
							index: number,
							maxIndex: number,
							forumName: string,
							text?: string,
							signText?: string
						) {
							return `
                        <div>进度：${index}/${maxIndex}</div>
                        <div>吧名：${forumName}</div>
                        <div>信息：${text}</div>
                        ${signText ? `签到：${signText}` : ""}
                        `;
						}
						Qmsg.info("正在获取所有关注吧");
						let likeForumList = await TieBaApi.getUserAllLikeForum();
						if (!likeForumList) {
							return;
						}
						if (!likeForumList.length) {
							Qmsg.error("该账号尚未关注帖子");
							return;
						}
						let isStop = false;
						let loading = Qmsg.loading(
							getLoadingHTML(
								1,
								likeForumList.length,
								likeForumList[0].forum_name,
								"正在获取tbs"
							),
							{
								showClose: true,
								onClose() {
									isStop = true;
								},
							}
						);
						for (let index = 0; index < likeForumList.length; index++) {
							if (isStop) {
								Qmsg.info("中断");
								return;
							}
							let likeForum = likeForumList[index];
							loading.setHTML(
								getLoadingHTML(
									index + 1,
									likeForumList.length,
									likeForum.forum_name,
									"正在获取tbs"
								)
							);
							let tbs = await TieBaApi.getForumTbs(likeForum.forum_name);
							if (!tbs) {
								Qmsg.info("2秒后切换至下一个");
								await utils.sleep(2000);
								continue;
							}
							Qmsg.success(`tbs ===> ${tbs}`);
							loading.setHTML(
								getLoadingHTML(
									index + 1,
									likeForumList.length,
									likeForum.forum_name,
									"发送签到请求..."
								)
							);
							let signResult = await TieBaApi.forumSign(
								likeForum.forum_name,
								tbs
							);
							if (!signResult) {
								Qmsg.info("2秒后切换至下一个");
								await utils.sleep(2000);
								continue;
							}
							if (typeof signResult["data"] === "object") {
								loading.setHTML(
									getLoadingHTML(
										index + 1,
										likeForumList.length,
										likeForum.forum_name,
										`今日本吧第${signResult["data"]["finfo"]["current_rank_info"]["sign_count"]}个签到`
									)
								);
							} else {
								Qmsg.error(signResult["error"] as string);
							}
							Qmsg.info("2秒后切换至下一个");
							await utils.sleep(2000);
						}
						Qmsg.success(`执行签到 ${likeForumList.length} 个贴吧完毕`);
						loading.close();
					}
				),
			],
		},
		{
			text: "通用",
			type: "forms",
			forms: [
				UISwitch(
					"检测骨架屏",
					"baidu_tieba_checkSkeleton",
					true,
					void 0,
					"当页面加载完毕后检测到还是骨架屏，将会自动刷新页面"
				),
				UISwitch(
					"自动重定向至主域名",
					"baidu_tieba_autoJumpToMainHost",
					false,
					void 0,
					"域名为nba.baidu.com、static.tieba.baidu.com...等时自动重定向至tieba.baidu.com"
				),
			],
		},
		{
			text: "搜索功能",
			type: "forms",
			forms: [
				UISwitch(
					"启用",
					"baidu_tieba_add_search",
					true,
					void 0,
					"在贴内和吧内右上角添加搜索按钮"
				),
				UISwitch(
					"获取详细信息",
					"baidu_tieba_search_opt_user_info",
					true,
					void 0,
					"将搜索结果的【用户名/头像】替换成请求获取的【用户名/头像】"
				),
				UISwitch(
					"使用【搜索综合】",
					"baidu_tieba_use_hybrid_search",
					false,
					void 0,
					"使用贴吧移动端的搜索功能"
				),
			],
		},
		{
			text: "首页",
			type: "forms",
			forms: [
				UISwitch(
					"新标签页打开",
					"baidu_tieba_index_openANewTab",
					false,
					void 0,
					"新标签页打开帖子"
				),
			],
		},
		{
			text: "话题热议",
			type: "forms",
			forms: [
				UISwitch(
					"重定向xx吧跳转",
					"baidu_tieba_topic_redirect_jump",
					true,
					void 0,
					"点击帖子直接跳转"
				),
				UISwitch(
					"新标签页打开",
					"baidu_tieba_topic_openANewTab",
					false,
					void 0,
					"新标签页打开帖子"
				),
			],
		},
		{
			text: "搜索综合",
			type: "forms",
			forms: [
				UISwitch(
					"新标签页打开",
					"baidu_tieba_hybrid_search_openANewTab",
					false,
					void 0,
					"新标签页打开帖子"
				),
			],
		},
		{
			text: "吧内功能",
			type: "forms",
			forms: [
				UISwitch(
					"记住当前选择的看帖排序",
					"baidu_tieba_remember_user_post_sort",
					true,
					void 0,
					"记住选择的发布/回复"
				),
				UISwitch(
					"过滤重复帖子",
					"baidu_tieba_filterDuplicatePosts",
					false,
					void 0,
					"过滤掉重复id的帖"
				),
				UISwitch(
					"解除签到限制",
					"baidu_tieba_removeForumSignInLimit",
					true,
					void 0,
					"在登录情况下可点击签到"
				),
				UISwitch(
					"新标签页打开",
					"baidu_tieba_openANewTab",
					false,
					void 0,
					"新标签页打开帖子"
				),
			],
		},
		{
			text: "帖内功能",
			type: "forms",
			forms: [
				UISwitch(
					"楼中楼回复弹窗后退手势优化",
					"baidu_tieba_lzl_ban_global_back",
					false,
					function (event, enable) {
						if (enable) {
							alert(
								"开启后，当在手机浏览器中使用屏幕左滑回退网页操作或者点击浏览器的回退到上一页按钮，不会触发回退上一页操作，而是会关闭当前查看的楼中楼的弹窗。注：某些浏览器不适用"
							);
						}
					},
					"使浏览器后退变成关闭楼中楼弹窗"
				),
				UISwitch(
					"新增滚动到顶部按钮",
					"baidu_tieba_add_scroll_top_button_in_forum",
					true,
					void 0,
					"向下滚动的距离>页面高度*2就会出现按钮"
				),
				UISwitch(
					"优化查看评论",
					"baidu_tieba_optimize_see_comments",
					true,
					void 0,
					"可以查看更多的评论"
				),
				UISwitch(
					"优化图片点击预览",
					"baidu_tieba_optimize_image_preview",
					true,
					void 0,
					"使用Viewer查看图片"
				),
				UISwitch(
					"强制查看被屏蔽的帖子",
					"baidu_tieba_repairErrorThread",
					false,
					function (event, enable) {
						if (enable) {
							window.alert(
								"开启后，如果查看的帖子显示【贴子不存在或者已被删除】或【该帖子需要去app内查看哦】，且该帖子在PC端可以查看，那么该修复可以生效。"
							);
						}
					},
					"PC端可以查看帖子该功能才能正确生效"
				),
				UISwitch(
					"点击楼主头像正确跳转主页",
					"baidu_tieba_clickOnTheOwnerSAvatarToCorrectlyRedirectToTheHomepage",
					true,
					void 0,
					"点击头像正确跳转至用户主页"
				),
				UISwitch(
					"屏蔽机器人",
					"baidu_tieba_shield_commnets_baodating",
					true,
					void 0,
					"屏蔽【贴吧包打听】机器人，回答的评论都是牛头不对马嘴的"
				),
				UISwitch(
					"显示用户当前吧的等级头衔",
					"baidu_tieba_show_forum_level",
					true,
					void 0,
					"只对评论和楼中楼的用户进行显示处理"
				),
				UISwitch(
					"实验性-请求携带Cookie",
					"baidu_tieba_request_with_cookie",
					false,
					void 0,
					"非浏览器插件使用"
				),
			],
		},
		{
			text: "劫持/拦截",
			type: "forms",
			forms: [
				UISwitch(
					"劫持-唤醒App",
					"baidu_tieba_hijack_wake_up",
					false,
					void 0,
					"阻止唤醒调用App"
				),
				UISwitch(
					"伪装客户端已调用",
					"baidu_tieba_clientCallMasquerade",
					true,
					void 0,
					"阻止弹窗"
				),
			],
		},
	],
};

export { PanelTieBaSettingUI };
