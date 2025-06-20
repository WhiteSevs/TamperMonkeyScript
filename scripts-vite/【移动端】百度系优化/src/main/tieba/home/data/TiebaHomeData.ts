import {
	HomePostsInfo,
	PanelUserInfo,
	TieBaApi,
	UserJSON,
} from "../../api/TiebaApi";
import { $, DOMUtils, httpx, log, utils } from "@/env";
import type { UserConcernInfo } from "../../api/TiebaHomeApi";

type UserSex = {
	0: "保密";
	1: "男";
	2: "女";
};

interface UserInfo {
	/** 用户唯一标识 */
	id?: string | number;
	tbs?: string;
	/** 用户名 */
	name?: string;
	/** 显示名称 */
	showName?: string;
	/**
	 * 性别
	 *
	 * 0: 保密
	 * 1: 男
	 * 2: 女
	 */
	sex?: keyof UserSex;
	/** 等级 */
	level?: number | string;
	/** 头像地址 */
	avatar?: string;
	portrait?: string;
	/** 是否为VIP */
	is_vip?: boolean;
	ip?: {
		/** 用户IP所在位置 */
		location?: string;
	};
	/** 个人签名 */
	personalSignature?: string;
	postInfo?: {
		/** 收到的点赞数 */
		receivedLikes?: number;
		/** 关注数 */
		follow?: number;
		/** 关注的贴吧数 */
		forum?: number;
		/** 粉丝数 */
		fans?: number;
		/** 帖子数 */
		post?: number;
	};
	/** 用户留下的印记图片数组（历史记录、足迹等） */
	imprint?: string[];
	/** 是否关注 */
	is_like?: boolean;
	/** 是否在线 */
	is_online?: boolean;
	/** 其它数据 */
	otherData?: {
		PCUserInfo?: UserPCHomeInfo;
		UserJSON?: UserJSON;
		PanelUserInfo?: PanelUserInfo;
	};
}
type UserPCHomeInfo = {
	/** 用户名，简写是un */
	userName: string;
	/** 显示的用户名 */
	showUserName: string;
	/**
	 * 性别
	 *
	 * 0: 保密
	 * 1: 男
	 * 2: 女
	 */
	sex?: keyof UserSex;
	/** 等级（吧龄） */
	level: string;
	/** 头像地址 */
	avatar: string;
	ip: {
		/** 用户IP所在位置 */
		location?: string;
	};
	/** 个人签名 */
	personalSignature: string;
	/** 帖子信息 */
	postInfo: {
		/** 收到的点赞数 */
		receivedLikes: number;
		/** 关注数 */
		follow: number;
		/** 关注的贴吧数 */
		forum: number;
		/** 粉丝数 */
		fans: number;
		/** 发帖数量 */
		post: number;
		/** 帖子数据 */
		data: HomePostsInfo[];
	};
	/** 关注的吧的信息列表 */
	forumInfoList: UserConcernInfo[];
	/** 用户留下的印记图片数组（历史记录、足迹等） */
	imprint: string[];
	/** 是否关注 */
	is_like: boolean;
	/** 是否在线 */
	is_online: boolean;
};
const TiebaHomeData = {
	/**
	 * 获取移动端用户主页的数据
	 */
	async getUserData(): Promise<UserInfo | undefined> {
		// 请求PC端的数据
		let userPCHomeInfo = await TiebaHomeData.getUserDataWithPCDoc();
		if (!userPCHomeInfo) {
			return;
		}
		log.info(["成功获取PC端的数据", userPCHomeInfo]);
		let $name = $<HTMLAnchorElement>(".home_card_uname_link");
		let userName =
			($name && new URL($name.href).searchParams.get("un")) ||
			userPCHomeInfo.userName;
		/* un可能为空，例如?un= */
		if (utils.isNull(userName)) {
			log.error("获取用户un为空");
			// Qmsg.error("获取用户un为空");
			return;
		}
		// 获取主页JSON数据
		let userHomeInfo = await TieBaApi.getUserHomeInfo({
			un: userName,
		});
		if (!userHomeInfo) {
			return;
		}
		log.info(["成功获取主页JSON数据 => ", userHomeInfo]);
		let userInfo = await TieBaApi.getUserInfo(userName);
		if (!userInfo) {
			return;
		}
		log.info(["成功获取用户JSON数据 => ", userInfo]);
		// 获取显示的用户名
		let $showName = $<HTMLAnchorElement>(".home_card_uname_link");
		let showName =
			$showName?.innerText ||
			userHomeInfo.name_show ||
			userHomeInfo.show_nickname;
		// 获取用户头像
		let $avatar = $<HTMLImageElement>("a.home_card_portrait_link img");
		let avatar = $avatar?.src || userPCHomeInfo.avatar;
		// 获取关注按钮
		let $followBtn = $<HTMLDivElement>(".home_card_operate_icon_follow");
		let isLike = false;
		if ($followBtn) {
			isLike = $followBtn.classList.contains("icon_hide");
		} else {
			isLike = userPCHomeInfo.is_like;
		}

		// 获取用户发帖数量
		let $posts = $<HTMLSpanElement>(
			".home_tab .home_tab_item:nth-child(1) .home_tab_item_num"
		);
		let postsNum = Number($posts?.innerText || userPCHomeInfo.postInfo.post);
		// 获取用户关注吧的数量
		let $forum = $<HTMLSpanElement>(
			".home_tab .home_tab_item:nth-child(2) .home_tab_item_num"
		);
		let forumNum = Number($forum?.innerText || userPCHomeInfo.postInfo.forum);
		// 获取用户关注的数量
		let $follow = $<HTMLSpanElement>(
			".home_tab .home_tab_item:nth-child(3) .home_tab_item_num"
		);
		let followNum = Number(
			$follow?.innerText || userPCHomeInfo.postInfo.follow
		);
		// 获取用户粉丝的数量
		let $fans = $<HTMLSpanElement>(
			".home_tab .home_tab_item:nth-child(4) .home_tab_item_num"
		);
		let fansNum = Number($fans?.innerText || userPCHomeInfo.postInfo.fans);

		// 获赞的数量
		let receivedLikes = userPCHomeInfo.postInfo.receivedLikes || 0;

		log.info(["请求PC端的数据 => ", userPCHomeInfo]);
		let portrait = userHomeInfo.portrait.replace(/\?t=(.+)/, "");
		// 判断用户性别
		let sex: keyof UserSex = 0;
		if (userHomeInfo.sex === "male") {
			sex = 1;
		} else if (userHomeInfo.sex == "female") {
			sex = 2;
		}
		// 印记图标
		let imprint: string[] = [];
		if (userHomeInfo.new_iconinfo) {
			Object.values(userHomeInfo.new_iconinfo).forEach((iconItem: any) => {
				if (iconItem.icon) {
					imprint.push(iconItem.icon);
				}
			});
		}
		return {
			id: userInfo?.id,
			tbs: userInfo?.tbs,
			name: userName,
			showName: userHomeInfo.show_nickname || userHomeInfo.name_show,
			sex: sex,
			ip: {
				location: userPCHomeInfo.ip?.location,
			},
			avatar: avatar,
			portrait: portrait,
			imprint: imprint,
			is_vip: userHomeInfo.tb_vip,
			is_like: isLike,
			is_online: userInfo?.creator?.is_online ?? false,
			level: userHomeInfo.tb_age,
			postInfo: {
				fans: fansNum,
				follow: followNum,
				forum: forumNum || userPCHomeInfo?.postInfo?.forum || 0,
				receivedLikes: receivedLikes,
				post: postsNum,
			},
			otherData: {
				PanelUserInfo: userHomeInfo,
				UserJSON: userInfo,
				PCUserInfo: userPCHomeInfo,
			},
		};
	},
	/**
	 * 获取PC网页中的用户数据
	 */
	async getUserDataWithPCDoc(
		url: string = window.location.href
	): Promise<UserPCHomeInfo | undefined> {
		let response = await httpx.get(url, {
			headers: {
				Accept:
					"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
				"Sec-Ch-Ua-Mobile": "?0",
				"Sec-Ch-Ua-Platform": "Windows",
				"Sec-Fetch-Dest": "document",
				"Sec-Fetch-Mode": "navigate",
				"Sec-Fetch-Site": "none",
				"User-Agent": utils.getRandomPCUA(),
			},
		});
		if (!response.status) {
			return;
		}
		let $doc = DOMUtils.parseHTML(response.data.responseText, true, true);
		// let $personalSignature = pcDoc.querySelector("")
		// 吧龄
		let level = "0";
		// 发帖数量
		let postNum = 0;
		// IP地址
		let ipLocation = "未知";
		// 用户名
		let userName = "";
		// 显示的用户名
		let showUserName =
			$doc.querySelector<HTMLSpanElement>(".userinfo_username")!.textContent!;

		// 他的主页|他的成就 按钮
		let $navIcon = $doc.querySelector<HTMLAnchorElement>("a.nav_icon");
		if ($navIcon) {
			let un = new URL($navIcon.href).searchParams.get("un");
			if (un == null || un == "") {
				userName = showUserName;
			} else {
				userName = un;
			}
		}
		// 解析吧龄、IP地址、发帖数量
		$doc
			.querySelectorAll<HTMLSpanElement>(".userinfo_userdata span")
			.forEach((spanItem: HTMLSpanElement) => {
				let spanText = spanItem.innerText.trim();
				if (spanText.includes("吧龄")) {
					level = spanText.replace(/(吧龄|年|:|：)/g, "");
				} else if (spanText.includes("IP属地")) {
					ipLocation = spanText.replace(/(IP属地|:|：)/g, "");
				} else if (spanText.includes("发贴")) {
					postNum = parseInt(spanText.replace(/(发贴|:|：)/g, ""));
				}
			});
		// 发帖数据列表
		let postsList: HomePostsInfo[] = [];
		$doc
			.querySelectorAll<HTMLDivElement>("ul.new_list > div")
			.forEach((listItem) => {
				let postInfo: HomePostsInfo = {
					url: listItem.querySelector<HTMLAnchorElement>(
						"ul.new_list > div .title"
					)!.href,
					title:
						listItem
							.querySelector<HTMLSpanElement>("ul.new_list > div .title")!
							.getAttribute("title") ||
						listItem.querySelector<HTMLSpanElement>("ul.new_list > div .title")!
							.innerText,
					content: listItem.querySelector<HTMLDivElement>(
						"ul.new_list > div .n_txt"
					)!.innerHTML,
					forumName: listItem
						.querySelector<HTMLSpanElement>("ul.new_list > div .n_name")!
						.getAttribute("title")!,
					createTime: listItem.querySelector<HTMLSpanElement>(
						"ul.new_list > div .n_post_time"
					)!.innerText,
					/* 暂时获取不到 */
					replyNum: 0,
					// 媒体数据，一般是图片
					mediaList: [],
				};
				if (listItem.querySelector<HTMLElement>("ul.new_list > div .n_media")) {
					listItem
						.querySelectorAll<HTMLImageElement>(
							"ul.new_list > div .n_media img"
						)
						.forEach(($img) => {
							let imgSrc = $img.getAttribute("original") || $img.src;
							if (imgSrc) {
								postInfo.mediaList.push(imgSrc);
							}
						});
				}
				postsList.push(postInfo);
			});

		// 性别
		let sex: keyof UserSex = 0 as const;
		let $sex = $doc.querySelector<HTMLSpanElement>(".userinfo_sex");
		if ($sex) {
			if ($sex.className.includes("male")) {
				sex = 1;
			} else if ($sex.className.includes("female")) {
				sex = 2;
			}
		}

		// 用户头像
		let avatar = "";
		let $avatar = $doc.querySelector<HTMLImageElement>("#j_userhead img");
		if ($avatar) {
			avatar = $avatar.src;
		}

		// 暂无 个性签名
		let personalSignature = "暂无";
		// 暂无 收到的点赞数
		let receivedLikes = 0;
		// 关注数量
		let follow =
			parseInt(
				$doc.querySelector(
					".ihome_aside_section:has(#concern_wrap_concern) .ihome_aside_title .concern_num a"
				)?.textContent || ""
			) || 0;
		// 关注的贴吧数
		let forum = $doc.querySelectorAll<HTMLAnchorElement>(
			"#forum_group_wrap .u-f-item"
		).length;
		// 粉丝数量
		let fans =
			parseInt(
				$doc.querySelector(
					".ihome_aside_section:has(#concern_wrap_fans) .ihome_aside_title .concern_num a"
				)?.textContent || ""
			) || 0;
		// 暂无 是否关注
		let is_like = false;
		// 暂无 是否在线
		let is_online = false;

		// 用户留下的印记图片数组（历史记录、足迹等）
		let imprint: string[] = [];
		$doc
			.querySelectorAll<HTMLAnchorElement>(".userinfo_honor a")
			.forEach(($honorIcon) => {
				let bgStyle = $honorIcon.style.background;
				let url = bgStyle.match(/url\((.*)\)/)?.[1] || "";
				if (utils.isNotNull(url)) {
					imprint.push(url);
				}
			});

		// 关注的吧的信息
		let forumInfoList: UserPCHomeInfo["forumInfoList"] = [];
		$doc
			.querySelectorAll<HTMLAnchorElement>("#forum_group_wrap .u-f-item ")
			.forEach(($el) => {
				let forumName =
					$el.querySelector("span:first-child")?.textContent || "";
				let fid = Number($el.getAttribute("data-fid") || "");
				let level = "0";
				let $level = $el.querySelector<HTMLSpanElement>(".forum_level");
				if ($level) {
					let levelClassList = Array.from($level.classList);
					for (const levelNodeClassName of levelClassList) {
						let levelMatch = levelNodeClassName.match(/^lv([\d]+)/);
						if (levelMatch) {
							level = levelMatch[levelMatch.length - 1];
							break;
						}
					}
				}
				let url = $el.href;
				// 没有简介
				let intro = "";
				forumInfoList.push({
					url: url,
					forumName: forumName,
					level: level,
					intro: intro,
				});
			});
		return {
			userName: userName,
			showUserName: showUserName,
			sex: sex,
			ip: {
				location: ipLocation,
			},
			avatar: avatar,
			level: level,
			personalSignature: personalSignature,
			postInfo: {
				post: postNum,
				data: postsList,
				receivedLikes: receivedLikes,
				follow: follow,
				forum: forum,
				fans: fans,
			},
			imprint: imprint,
			is_like: is_like,
			is_online: is_online,
			forumInfoList: forumInfoList,
		};
	},
};

export { TiebaHomeData };
export type { UserInfo };
