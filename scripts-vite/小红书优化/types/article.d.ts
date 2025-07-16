/**
 * 笔记的信息
 */
declare interface XHSArticleInfo {
	id: string;
	model_type: "note";
	note_card: {
		type: "normal" | "video";
		display_title: string;
		user: {
			nick_name: string;
			avatar: string;
			user_id: string;
			nickname: string;
			xsec_token: string;
		};
		interact_info: {
			liked: boolean;
			liked_count: string;
		};
		cover: {
			file_id: string;
			height: number;
			width: number;
			url: string;
			info_list: {
				image_scene: string;
				url: string;
			}[];
			url_pre: string;
			url_default: string;
		};
		video?: {
			capa: {
				duration: number;
			};
		};
	};
	track_id: string;
	ignore: boolean;
	xsec_token: string;
}

/**
 * 处理后的笔记信息
 *
 * 用于过滤器
 */
declare interface XHSArticleHandlerInfo {
	/**
	 * 笔记id
	 */
	articleId: string;
	/**
	 * 标题
	 */
	display_title: string;
	/**
	 * 是否已点赞该笔记
	 */
	isLike: boolean;
	/**
	 * 点赞数量
	 */
	liked_count: number;
	/**
	 * 作者名
	 */
	nick_name: string;
	/**
	 * 作者id
	 */
	user_id: string;
	/**
	 * 是否是视频笔记
	 */
	isVideo: boolean;
	/**
	 * 视频笔记时长
	 */
	videoDuration: number;
}
