export type PageComment = {
	/** 楼中楼评论的数据 */
	commentList: {
		[postId: string]: {
			/** 评论数据，键是发帖id */
			comment_info: {
				show_nickname: string;
				username: string;
				content: string;
				comment_id: number;
				post_id: number;
				user_id: number;
				thread_id: number;
				now_time: number;
				location?: {
					name: string;
				};
				// [key: string]: any;
			}[];
			comment_list_num: number;
			comment_num: number;
		};
	};
	/** 楼中楼评论的用户的数据 */
	userList: {
		[postId: string]: {
			show_nickname: string;
			user_name: string;
			user_nickname: string;
			user_nickname_v2: string;
			nickname: string;
			display_name: string;
			user_sex: 0 | 1 | 2;
			user_id: number;
			portrait: string;
			card: {
				/** 点赞数 */
				good_num: number;
				is_novice: number;
				op_time: number;
				/** 发帖数 */
				post_num: number;
				/** 关注的吧 */
				like_forum?: {
					[forumLevel: string]: {
						count: number;
						/** 吧名列表 */
						forum_list: string[];
					};
				};
			};
		};
	};
};

/** 某一楼的数据 */
export type FloorCommentData = {
	/** 层主id */
	userId: number;
	/** 发帖id */
	userPostId: number;
	/**  */
	userPortrait: string;
	/** 当前楼层 */
	userFloor: number;
	/** 层主评论的内容 */
	userComment: string;
	/** 层主主页url */
	userHomeUrl: string;
	/** 用户在本吧的等级 */
	userForumLevel: number;
	/** 用户在本吧的等级的名字 */
	userForumLevelName: string;
	/** 层主头像 */
	userAvatar: string;
	/** 层主的un */
	userName: string;
	/** 层主显示的名字 */
	userShowName: string;
	/** 层主评论的时间，例如：xxx小时前 */
	userCommentTime: string;
	/** 层主的ip地址 */
	userIpPosition: string;
	/** 楼中楼评论的数据 */
	pageCommentList: PageComment;
};

export type LzlItemData = {
	data: PageComment["commentList"][""]["comment_info"][0];
	userInfo: PageComment["userList"][""];
	portrait: string;
};