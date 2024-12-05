export type VIDEO_EP_LIST = {
	season_id: number;
	section_id: number;
	id: number;
	/** 视频aid */
	aid: number;
	/** 视频bvid */
	bvid: string;
	/** 视频cid */
	cid: number;
	/** 视频标题 */
	title: string;
	attribute: number;
	arc: {
		/** 视频aid */
		aid: number;
		/** 视频分p的数量 */
		videos: number;
		type_id: number;
		type_name: string;
		copyright: number;
		/** 视频封面链接 */
		pic: string;
		/** 视频标题 */
		title: string;
		/** 视频上传时间 */
		pubdate: number;
		/** 视频修改时间 */
		ctime: number;
		/** 描述 */
		desc: string;
		state: string;
		/** 视频时长（s） */
		duration: number;
		rights: {
			bp: number;
			elec: number;
			download: number;
			movie: number;
			pay: number;
			hd5: number;
			no_reprint: number;
			autoplay: number;
			ugc_pay: number;
			is_cooperation: number;
			ugc_pay_preview: number;
			arc_pay: number;
			free_watch: number;
		};
		author: {
			mid: number;
			name: string;
			face: string;
		};
		/** 视频的一些的数据 */
		stat: {
			/** 视频aiv */
			aid: number;
			/** 视频播放次数 */
			view: number;
			/** 视频弹幕数量 */
			danmaku: number;
			/** 视频评论的数量 */
			reply: number;
			/** 视频收藏量 */
			fav: number;
			/** 视频被投币的数量 */
			coin: number;
			/** 视频被分享的数量 */
			share: number;
			/** 视频被踩的数量 */
			now_rank: number;
			/**  */
			his_rank: number;
			/** 视频的点赞量 */
			like: number;
			/** 不喜欢该视频的数量 */
			dislike: number;
			/**  */
			evaluation: string;
			/**  */
			argue_msg: string;
			/**  */
			vt: number;
			/**  */
			vv: number;
		};
		dynamic: string;
		dimension: {
			width: number;
			height: number;
			rotate: number;
		};
		desc_v2: null;
		is_chargeable_season: boolean;
		is_blooper: boolean;
		enable_vt: number;
		vt_display: string;
	};
	/** 当前p信息 */
	page: VIDEO_PART;
	/** 所有分p信息 */
	pages: VIDEO_EP_LIST["page"][];
};

/**
 * 分p信息
 */
export type VIDEO_PART = {
	/** 视频cid */
	cid: number;
	/** 视频分页所属页码*/
	page: number;
	/** 视频来源，一般是 @default "vupload"  */
	from: string;
	/** 标题 */
	part: string;
	/** 视频时长（s） */
	duration: number;
	vid: string;
	weblink: string;
	dimension: {
		width: number;
		height: number;
		rotate: number;
	};
	/** 视频封面 */
	first_frame?: string;
};
