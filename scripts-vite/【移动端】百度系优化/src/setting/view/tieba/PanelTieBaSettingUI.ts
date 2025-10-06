import { TieBaApi } from "@/main/tieba/api/TiebaApi";
import { log, utils } from "@/env";
import { BaiduRouter } from "@/router/BaiduRouter";
import { UIButton } from "@components/setting/components/ui-button";
import { UISwitch } from "@components/setting/components/ui-switch";
import Qmsg from "qmsg";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { TiebaPCApi } from "@/main/tieba/api/TiebaPCApi";
import { TiebaUniAppCommentFilter } from "@/main/tieba/uni-app-post/TiebaUniAppCommentFilter";
import { TiebaUniAppComponentDetectionRule } from "@/main/tieba/uni-app-post/TiebaUniAppComponentDetectionRule";
import { UIInput } from "@components/setting/components/ui-input";

const PanelTieBaSettingUI: PopsPanelContentConfig = {
  id: "baidu-panel-config-tieba",
  title: "贴吧",
  headerTitle: "百度贴吧<br />tieba.baidu.com",
  isDefault() {
    return BaiduRouter.isTieBa();
  },
  scrollToDefaultView: true,
  forms: [
    {
      text: "",
      type: "forms",
      forms: [
        {
          text: "首页",
          type: "deepMenu",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [UISwitch("新标签页打开", "baidu_tieba_index_openANewTab", false, void 0, "新标签页打开帖子")],
            },
            {
              text: "消息",
              type: "forms",
              forms: [
                UISwitch(
                  "启用",
                  "baidu_tieba_index_add_msgtab",
                  true,
                  void 0,
                  "新增【消息】按钮入口，可查看当前已登录账号的点赞、回复、@用户"
                ),
                UIInput("MAWEBCUID", "baidu_tieba_index_msg_cuid", "", "必填，可在Cookie中看到具体的值"),
              ],
            },
          ],
        },
        {
          text: "话题热议",
          type: "deepMenu",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                UISwitch("重定向xx吧跳转", "baidu_tieba_topic_redirect_jump", true, void 0, "点击帖子直接跳转"),
                UISwitch("新标签页打开", "baidu_tieba_topic_openANewTab", false, void 0, "新标签页打开帖子"),
              ],
            },
          ],
        },
        {
          type: "deepMenu",
          text: "热搜榜单",
          forms: [
            {
              type: "forms",
              text: "功能",
              forms: [
                UISwitch("覆盖openApp函数", "tieba-hot-topic-coverOpenApp", true, void 0, "用于阻止唤醒App"),
                UISwitch("设置isTiebaApp为true", "tieba-hot-topic-isTiebaApp", true, void 0),
                UISwitch("设置isHarmony为true", "tieba-hot-topic-isHarmony", true, void 0),
                UISwitch("新标签页打开", "tieba-hot-topic-openBlank", false, void 0, "新标签页打开帖子"),
              ],
            },
          ],
        },
        {
          text: "搜索综合",
          type: "deepMenu",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                UISwitch("新标签页打开", "baidu_tieba_hybrid_search_openANewTab", false, void 0, "新标签页打开帖子"),
              ],
            },
          ],
        },
        {
          type: "deepMenu",
          text: "合辑",
          forms: [
            {
              type: "forms",
              text: "功能",
              forms: [
                UISwitch(
                  "修复卡片点击跳转",
                  "tieba_collection_center_repair_card_click_jump",
                  true,
                  void 0,
                  "修复帖子点击不跳转的问题"
                ),
                UISwitch(
                  "新标签页打开",
                  "tieba_collection_center_repair_card_click_jump_open_new_tab",
                  false,
                  void 0,
                  "新标签页打开帖子（需开启->修复卡片点击跳转）"
                ),
              ],
            },
          ],
        },
        {
          text: "吧内",
          description: "新版的uni-app",
          type: "deepMenu",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                // UISwitch(
                // 	"记住当前选择的看帖排序",
                // 	"baidu_tieba_remember_user_post_sort",
                // 	true,
                // 	void 0,
                // 	"记住选择的发布/回复"
                // ),
                // UISwitch(
                // 	"过滤重复帖子",
                // 	"baidu_tieba_filterDuplicatePosts",
                // 	false,
                // 	void 0,
                // 	"过滤掉重复id的帖"
                // ),
                UISwitch("解除签到限制", "baidu_tieba_removeForumSignInLimit", true, void 0, "在登录情况下可点击签到"),
                UISwitch(
                  "修复卡片点击跳转",
                  "baidu_tieba_banei_repair_card_click_jump",
                  true,
                  void 0,
                  "修复帖子点击不跳转的问题"
                ),
                UISwitch(
                  "新标签页打开",
                  "baidu_tieba_banei_openANewTab",
                  false,
                  void 0,
                  "新标签页打开帖子（需开启->修复卡片点击跳转）"
                ),
              ],
            },
            {
              type: "forms",
              text: "劫持",
              forms: [
                UISwitch("劫持.wake-up", "baidu_tieba_banei_hookWakeUp", true, void 0, "阻止点击唤醒App"),
                UISwitch(
                  "劫持iframe call App",
                  "baidu_tieba_banei_hook_iframe_call_app",
                  true,
                  void 0,
                  "阻止点击唤醒App或下载App"
                ),
              ],
            },
          ],
        },
        {
          text: "帖内",
          description: "新版的uni-app",
          type: "deepMenu",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                UISwitch(
                  "阻止.wake-up的点击事件",
                  "baidu-tieba-uni-app-post-preventWakeApp",
                  true,
                  void 0,
                  "阻止点击唤醒App"
                ),
                UISwitch(
                  "覆盖【打开App查看更多评论】",
                  "baidu-tieba-uni-app-post-overloadLoadMore",
                  true,
                  void 0,
                  "该文字可直接点击并加载更多评论且新增滚动自动加载更多评论"
                ),
                UISwitch(
                  "修复帖内主内容的图片列表中的推荐帖子跳转",
                  "baidu-tieba-uni-app-post-repairPicGuideThreadWrapper",
                  true,
                  void 0,
                  "帖内主内容的图片右滑到最后一个时会出现推荐帖子，点击会正常跳转到该帖"
                ),
                UISwitch(
                  "修复点击进入用户主页",
                  "baidu-tieba-uni-app-post-repairClickToUserHome",
                  true,
                  void 0,
                  "包括用户头像、用户名"
                ),
                UISwitch(
                  "记住评论排序",
                  "baidu-tieba-uni-app-post-rememberChooseSeeCommentSort",
                  true,
                  void 0,
                  "记住当前选择评论的排序，如热门、正序、倒序"
                ),
                UISwitch(
                  "评论去重",
                  "baidu-tieba-uni-app-post-filterDuplicateComments",
                  true,
                  void 0,
                  "加载评论时会有重复的评论出现，启用该功能可过滤掉"
                ),
                UISwitch(
                  "楼中楼回复弹窗手势返回",
                  "baidu-tieba-uni-app-post-optimizationLzlPostBackGestureReturn",
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
                UISwitch("优化图片点击预览", "baidu_tieba_optimize_image_preview", true, void 0, "使用Viewer查看图片"),
                UISwitch(
                  "图片预览手势返回",
                  "baidu-tieba-uni-app-post-optimizationImagePreviewBackGestureReturn",
                  false,
                  void 0,
                  "使浏览器后退变成退出图片预览模式"
                ),
                UISwitch(
                  "新增滚动到顶部按钮",
                  "baidu-tieba-uni-app-post-addScrollTopButtonInForum",
                  true,
                  void 0,
                  "向下滚动的距离>页面高度*2就会出现按钮"
                ),
                UISwitch(
                  "屏蔽机器人",
                  "baidu-tieba-uni-app-post-blockTieBaRobot",
                  true,
                  void 0,
                  "屏蔽【贴吧包打听】机器人，回答的评论都是牛头不对马嘴的"
                ),
                UISwitch(
                  "修复超链接跳转",
                  "baidu-tieba-uni-app-post-repairAnchorLink",
                  true,
                  void 0,
                  "可修复蓝色的超链接点击不能跳转网页的问题"
                ),
                UISwitch(
                  "解除长按选中文字的限制",
                  "baidu-tieba-uni-app-post-allow-user-select",
                  true,
                  void 0,
                  "允许长按选择文字"
                ),
                UISwitch(
                  "修改pb-rich-text字体大小",
                  "baidu-tieba-uni-app-comment-item-font-size",
                  false,
                  void 0,
                  "大小同步为内容的大小"
                ),
                UIButton("评论过滤规则", "可过滤评论", "自定义", void 0, false, false, "primary", () => {
                  TiebaUniAppCommentFilter.showView();
                }),
              ],
            },
            // {
            // 	type: "forms",
            // 	text: "网络请求拦截",
            // 	forms: [
            // 		UISwitch(
            // 			"/mo/q/getUpConfigData",
            // 			"baidu-tieba-uni-app-post-intercept-getUpConfigData",
            // 			true,
            // 			void 0,
            // 			"该请求类似于广告配置，建议拦截"
            // 		),
            // 	],
            // },
          ],
        },
        {
          text: "用户主页",
          type: "deepMenu",
          forms: [
            {
              type: "forms",
              text: "功能",
              forms: [UISwitch("美化页面", "baidu-tieba-beautify-home-page", true, void 0, "重构页面样式，美化页面")],
            },
          ],
        },
        // {
        // 	text: "帖内",
        // 	description: "旧版本设置项，大部分功能已失效",
        // 	type: "deepMenu",
        // 	forms: [
        // 		{
        // 			text: "功能",
        // 			type: "forms",
        // 			forms: [
        // 				UISwitch(
        // 					"楼中楼回复弹窗手势返回",
        // 					"baidu_tieba_lzl_ban_global_back",
        // 					false,
        // 					function (event, enable) {
        // 						if (enable) {
        // 							alert(
        // 								"开启后，当在手机浏览器中使用屏幕左滑回退网页操作或者点击浏览器的回退到上一页按钮，不会触发回退上一页操作，而是会关闭当前查看的楼中楼的弹窗。注：某些浏览器不适用"
        // 							);
        // 						}
        // 					},
        // 					"使浏览器后退变成关闭楼中楼弹窗"
        // 				),
        // 				UISwitch(
        // 					"新增滚动到顶部按钮",
        // 					"baidu_tieba_add_scroll_top_button_in_forum",
        // 					true,
        // 					void 0,
        // 					"向下滚动的距离>页面高度*2就会出现按钮"
        // 				),
        // 				UISwitch(
        // 					"优化查看评论",
        // 					"baidu_tieba_optimize_see_comments",
        // 					true,
        // 					void 0,
        // 					"可以查看更多的评论"
        // 				),
        // 				UISwitch(
        // 					"优化评论工具栏",
        // 					"baidu_tieba_optimize_comments_toolbar",
        // 					true,
        // 					void 0,
        // 					"可以进行评论区回复/楼中楼回复，需开启【优化查看评论】"
        // 				),
        // 				UISwitch(
        // 					"优化图片点击预览",
        // 					"baidu_tieba_optimize_image_preview",
        // 					true,
        // 					void 0,
        // 					"使用Viewer查看图片"
        // 				),
        // 				UISwitch(
        // 					"强制查看被屏蔽的帖子",
        // 					"baidu_tieba_repairErrorThread",
        // 					false,
        // 					function (event, enable) {
        // 						if (enable) {
        // 							window.alert(
        // 								"开启后，如果查看的帖子显示【贴子不存在或者已被删除】或【该帖子需要去app内查看哦】，且该帖子在PC端可以查看，那么该修复可以生效。"
        // 							);
        // 						}
        // 					},
        // 					"PC端可以查看帖子该功能才能正确生效"
        // 				),
        // 				UISwitch(
        // 					"点击楼主头像正确跳转主页",
        // 					"baidu_tieba_clickOnTheOwnerSAvatarToCorrectlyRedirectToTheHomepage",
        // 					true,
        // 					void 0,
        // 					"点击头像正确跳转至用户主页"
        // 				),
        // 				UISwitch(
        // 					"屏蔽机器人",
        // 					"baidu_tieba_shield_commnets_baodating",
        // 					true,
        // 					void 0,
        // 					"屏蔽【贴吧包打听】机器人，回答的评论都是牛头不对马嘴的"
        // 				),
        // 				UISwitch(
        // 					"显示用户当前吧的等级头衔",
        // 					"baidu_tieba_show_forum_level",
        // 					true,
        // 					void 0,
        // 					"只对评论和楼中楼的用户进行显示处理"
        // 				),
        // 			],
        // 		},
        // 	],
        // },
      ],
    },
    {
      text: "",
      type: "forms",
      forms: [
        {
          text: "通用",
          type: "deepMenu",
          forms: [
            {
              text: "",
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
                UISwitch(
                  "自动跳转链接",
                  "baidu-tieba-checkUrl-autoJumpUrl",
                  true,
                  void 0,
                  "在链接验证页面自动跳转链接"
                ),
              ],
            },
          ],
        },
        {
          text: "账号功能",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UIButton("签到所有关注的吧", void 0, "签到", void 0, void 0, false, "default", async () => {
                  /**
                   * 获取提示内容
                   * @param index
                   * @param maxIndex
                   * @param forumName
                   * @param text
                   * @param signText
                   */
                  function getSignInfoHTML(
                    index: number,
                    maxIndex: number,
                    forumName: string,
                    text?: string,
                    signText?: string
                  ) {
                    return `
											<div class="tieba-sign-info-text">进度：${index}/${maxIndex}</div>
											<div class="tieba-sign-info-text">吧名：${forumName}</div>
											<div class="tieba-sign-info-text">信息：${text}</div>
											${signText ? `签到：${signText}` : ""}
											`;
                  }
                  Qmsg.info("正在获取所有关注吧");
                  let likeForumList = await TiebaPCApi.getUserAllLinkForum();
                  if (!likeForumList) {
                    return;
                  }
                  if (!likeForumList.length) {
                    Qmsg.error("该账号尚未关注帖子");
                    return;
                  }
                  let isStop = false;
                  let loading = Qmsg.loading(
                    getSignInfoHTML(1, likeForumList.length, likeForumList[0].forumName, "正在执行签到"),
                    {
                      showClose: true,
                      isHTML: true,
                      style: /*css*/ `
												.qmsg-content-loading > span{
													text-align: left;
												}
												.qmsg-content-loading .tieba-sign-info-text{
													overflow: hidden;
													white-space: nowrap;
													text-overflow: ellipsis;
													max-width: 65vw;
												}
												`,
                      onClose() {
                        isStop = true;
                      },
                    }
                  );
                  for (let index = 0; index < likeForumList.length; index++) {
                    if (isStop) {
                      Qmsg.info("中止执行签到");
                      return;
                    }
                    let linkForumInfo = likeForumList[index];
                    loading.setHTML(
                      getSignInfoHTML(index + 1, likeForumList.length, linkForumInfo.forumName, "发送签到请求...")
                    );
                    let signResult = await TieBaApi.forumSign(linkForumInfo.forumName, linkForumInfo.tbs);
                    if (!signResult) {
                      Qmsg.warning("执行签到异常");
                      log.error(signResult);
                    } else {
                      if (typeof signResult["data"] === "object") {
                        loading.setHTML(
                          getSignInfoHTML(
                            index + 1,
                            likeForumList.length,
                            linkForumInfo.forumName,
                            `今日本吧第${signResult["data"]["finfo"]["current_rank_info"]["sign_count"]}个签到`
                          )
                        );
                      } else {
                        Qmsg.error(signResult["error"] as string);
                      }
                    }
                    Qmsg.info("2秒后切换至下一个");
                    await utils.sleep(2000);
                  }
                  Qmsg.success(`执行签到 ${likeForumList.length} 个贴吧完毕`);
                  loading.close();
                }),
              ],
            },
          ],
        },
        {
          type: "deepMenu",
          text: "成分检测",
          forms: [
            {
              type: "forms",
              text: "",
              forms: [
                UISwitch("启用", "baidu-tieba-componentDetection", true, void 0, "启用后可检测用户的成分信息"),
                UIButton("自定义规则", "检测用户成分的规则", "管理", void 0, false, false, "primary", () => {
                  TiebaUniAppComponentDetectionRule.showView();
                }),
              ],
            },
            {
              type: "forms",
              text: "",
              forms: [
                UIButton("数据导入", "导入自定义规则数据", "导入", void 0, false, false, "primary", () => {
                  TiebaUniAppComponentDetectionRule.importRule();
                }),
                UIButton("数据导出", "导出自定义规则数据", "导出", void 0, false, false, "primary", () => {
                  TiebaUniAppComponentDetectionRule.exportRule("成分检测.json");
                }),
              ],
            },
          ],
        },
        {
          text: "搜索功能",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UISwitch("启用", "baidu_tieba_add_search", true, void 0, "在贴内和吧内右上角添加搜索按钮"),
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
                UISwitch(
                  "地址参数识别",
                  "baidu_tieba-execByUrlSearchParams",
                  false,
                  (event, value) => {
                    if (!value) {
                      return;
                    }
                    let url =
                      "https://greasyfork.org/zh-CN/scripts/418349-%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E7%99%BE%E5%BA%A6%E7%B3%BB%E4%BC%98%E5%8C%96/discussions/252534";
                    let isOk = globalThis.confirm("帮助文档↓ 点击确定自动打开文档地址↓\n" + url);
                    if (isOk) {
                      window.open(url, "_blank");
                    }
                  },
                  "开启后可在特定Url执行搜索功能"
                ),
              ],
            },
          ],
        },
        {
          text: "布局屏蔽",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [UISwitch("【屏蔽】评论输入框", "baidu-tieba-blockCommentInput", false, void 0, "屏蔽元素")],
            },
          ],
        },
        {
          text: "劫持/拦截",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UISwitch("劫持-唤醒App", "baidu_tieba_hijack_wake_up", false, void 0, "阻止唤醒调用App"),
                UISwitch("伪装客户端已调用", "baidu_tieba_clientCallMasquerade", true, void 0, "阻止弹窗"),
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { PanelTieBaSettingUI };
