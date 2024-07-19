import {
	HomePostsInfo,
	PanelUserInfo,
	TieBaApi,
	UserJSON,
} from "../../api/TiebaApi";
import { DOMUtils, httpx, log, utils } from "@/env";
import Qmsg from "qmsg";

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
		PCUserInfo?: PCUserInfo;
		UserJSON?: UserJSON;
		PanelUserInfo?: PanelUserInfo;
	};
}
type PCUserInfo = {
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
	/** 用户留下的印记图片数组（历史记录、足迹等） */
	imprint: string[];
	/** 是否关注 */
	is_like: boolean;
	/** 是否在线 */
	is_online: boolean;
};
const TiebaHomeData = {
	async getUserData(): Promise<UserInfo | undefined> {
		let $name = document.querySelector<HTMLAnchorElement>(
			".home_card_uname_link"
		)!;
		// 获取显示的用户名
		let $showName = document.querySelector<HTMLAnchorElement>(
			".home_card_uname_link"
		)!;
		let showName = $showName.innerText;
		// 获取用户头像
		let $avatar = document.querySelector<HTMLImageElement>(
			"a.home_card_portrait_link img"
		)!;
		let avatar = $avatar.src;
		// 获取关注按钮
		let $followBtn = document.querySelector<HTMLDivElement>(
			".home_card_operate_icon_follow"
		);
		let isLike = false;
		if ($followBtn) {
			isLike = $followBtn.classList.contains("icon_hide");
		}

		// 获取用户发帖数量
		let $posts = document.querySelector<HTMLSpanElement>(
			".home_tab .home_tab_item:nth-child(1) .home_tab_item_num"
		)!;
		let postsNum = parseInt($posts.innerText);
		// 获取用户关注吧的数量
		let $forum = document.querySelector<HTMLSpanElement>(
			".home_tab .home_tab_item:nth-child(2) .home_tab_item_num"
		)!;
		let forumNum = parseInt($forum.innerText);
		// 获取用户关注的数量
		let $follow = document.querySelector<HTMLSpanElement>(
			".home_tab .home_tab_item:nth-child(3) .home_tab_item_num"
		)!;
		let followNum = parseInt($follow.innerText);
		// 获取用户粉丝的数量
		let $fans = document.querySelector<HTMLSpanElement>(
			".home_tab .home_tab_item:nth-child(4) .home_tab_item_num"
		)!;
		let fansNum = parseInt($fans.innerText);

		// 请求PC端的数据
		log.info("请求PC端的数据");
		let pcUserInfo = await TiebaHomeData.getUserDataWithPCDoc();
		if (!pcUserInfo) {
			return;
		}
		log.info(["请求PC端的数据 => ", pcUserInfo]);
		let userName =
			new URL($name.href).searchParams.get("un") || pcUserInfo.userName;
		/* un可能为空，例如?un= */
		if (utils.isNull(userName)) {
			log.error("获取用户un为空");
			// Qmsg.error("获取用户un为空");
			return;
		}
		// 获取主页JSON数据
		log.info("获取主页JSON数据");
		let panelUserInfo = await TieBaApi.getUserHomeInfo({
			un: userName,
		});
		if (!panelUserInfo) {
			return;
		}
		log.info(["获取主页JSON数据 => ", panelUserInfo]);
		// 获取用户JSON数据
		log.info("获取用户JSON数据");
		let userJson = await TieBaApi.getUserJSON(userName);
		if (!userJson) {
			return;
		}
		log.info(["获取用户JSON数据 => ", userJson]);
		let portrait = panelUserInfo.portrait.replace(/\?t=(.+)/, "");
		// 判断用户性别
		let sex: keyof UserSex = 0;
		if (panelUserInfo.sex === "male") {
			sex = 1;
		} else if (panelUserInfo.sex == "female") {
			sex = 2;
		}
		// 印记图标
		let imprint: string[] = [];
		if (panelUserInfo.new_iconinfo) {
			Object.values(panelUserInfo.new_iconinfo).forEach((iconItem: any) => {
				if (iconItem.icon) {
					imprint.push(iconItem.icon);
				}
			});
		}
		return {
			id: userJson?.id,
			tbs: userJson?.tbs,
			name: userName,
			showName: panelUserInfo.show_nickname || panelUserInfo.name_show,
			sex: sex,
			ip: {
				location: pcUserInfo.ip?.location,
			},
			avatar: avatar,
			portrait: portrait,
			imprint: imprint,
			is_vip: panelUserInfo.tb_vip,
			is_like: isLike,
			is_online: userJson?.creator?.is_online ?? false,
			level: panelUserInfo.tb_age,
			postInfo: {
				fans: fansNum,
				follow: followNum,
				forum: forumNum || pcUserInfo?.postInfo?.forum || 0,
				receivedLikes: fansNum,
				post: postsNum,
			},
			otherData: {
				PanelUserInfo: panelUserInfo,
				UserJSON: userJson,
				PCUserInfo: pcUserInfo,
			},
		};
	},
	/**
	 * 获取PC网页中的用户数据
	 */
	async getUserDataWithPCDoc(): Promise<PCUserInfo | undefined> {
		let getResp = await httpx.get(window.location.href, {
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
		if (!getResp.status) {
			return;
		}
		let pcDoc = DOMUtils.parseHTML(getResp.data.responseText, true, true);
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
			pcDoc.querySelector<HTMLSpanElement>(".userinfo_username")!.textContent!;

		// 他的主页|他的成就 按钮
		let $navIcon = pcDoc.querySelector<HTMLAnchorElement>("a.nav_icon");
		if ($navIcon) {
			let un = new URL($navIcon.href).searchParams.get("un");
			if (un == null || un == "") {
				userName = showUserName;
			} else {
				userName = un;
			}
		}
		// 解析吧龄、IP地址、发帖数量
		pcDoc
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
		pcDoc
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
		let $sex = pcDoc.querySelector<HTMLSpanElement>(".userinfo_sex");
		if ($sex) {
			if ($sex.className.includes("male")) {
				sex = 1;
			} else if ($sex.className.includes("female")) {
				sex = 2;
			}
		}

		// 用户头像
		let avatar = "";
		let $avatar = pcDoc.querySelector<HTMLImageElement>("#j_userhead img");
		if ($avatar) {
			avatar = $avatar.src;
		}

		// 暂无 个性签名
		let personalSignature = "暂无";
		// 暂无 收到的点赞数
		let receivedLikes = 0;
		// 暂无 关注数量
		let follow = 0;
		// 暂无 关注的贴吧数
		let forum = pcDoc.querySelectorAll<HTMLAnchorElement>(
			"#forum_group_wrap .u-f-item"
		).length;
		// 暂无 粉丝数量
		let fans = 0;
		// 暂无 是否关注
		let is_like = false;
		// 暂无 是否在线
		let is_online = false;

		// 用户留下的印记图片数组（历史记录、足迹等）
		let imprint: string[] = [];
		pcDoc
			.querySelectorAll<HTMLAnchorElement>(".userinfo_honor a")
			.forEach(($honorIcon) => {
				let bgStyle = $honorIcon.style.background;
				let url = bgStyle.match(/url\((.*)\)/)?.[1] || "";
				if (utils.isNotNull(url)) {
					imprint.push(url);
				}
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
		};
	},
};

export { TiebaHomeData };
export type { UserInfo };
