export type EP_INFO = {
	/** 视频aid */
	aid: number;
	/** 视频bvid */
	bvid: string;
	/** 视频cid */
	cid: number;
	/** 封面 */
	cover: string;
	/** 时长 */
	duration: number;
	/** 视频ep_id */
	ep_id: number;
	/** 一般是bangumi */
	from: string;
	/** 同ep_id */
	id: number;
	/** 视频链接 */
	link: string;
	/** 视频标题，没有第xx话 */
	long_title: string;
	/**  */
	pub_time: number;
	/**  */
	share_copy: string;
	/** 番剧名+第xx话+视频名 */
	share_url: string;
	/** 同link */
	short_link: string;
	/** 状态 */
	status: number;
	/** 已观看xx次 */
	subtitle: string;
	/** 第几话的几字，阿拉伯数字 */
	title: string;
	/**  */
	vid: string;
};

export type EP_LIST = EP_INFO[];

export type CURRENT_EP_INFO = {
	epid: number;
	aid: number;
	season_id: number;
	season_type: number;
};

export type MEDIA_INFO = {
	activity: {
		head_bg_url: string;
		id: number;
		title: string;
	};
	actors: string;
	alias: string;
	areas: {
		id: number;
		name: string;
	}[];
	bkg_cover: string;
	/** 封面 */
	cover: string;
	delivery_fragment_video: boolean;
	enable_vt: boolean;
	/** 介绍 */
	evaluate: string;
	freya: {
		bubble_show_cnt: number;
		icon_show: number;
	};
	hide_ep_vv_vt_dm: number;
	icon_font: {
		name: string;
		text: string;
	};
	jp_title: string;
	/** 链接 */
	link: string;
	media_id: number;
	mode: number;
	payment: {
		discount: number;
		pay_type: {
			allow_discount: number;
			allow_pack: number;
			allow_ticket: number;
			allow_time_limit: number;
			allow_vip_discount: number;
			forbid_bb: number;
		};
		price: string;
		promotion: string;
		tip: string;
		view_start_time: number;
		vip_discount: number;
		vip_first_promotion: string;
		vip_price: string;
		vip_promotion: string;
	};
	positive: {
		id: number;
		title: string;
	};
	/** 登记号 */
	record: string;
	season_id: number;
	season_title: string;
	series: {
		display_type: number;
		series_id: number;
		series_title: string;
	};
	share_copy: string;
	share_sub_title: string;
	share_url: string;
	show: {
		wide_screen: number;
	};
	show_season_type: number;
	square_cover: string;
	staff: string;
	status: number;
	styles: string[];
	subtitle: string;
	title: string;
	total: number;
	type: number;
	user_status: {
		area_limit: number;
		ban_area_show: number;
		follow: number;
		follow_status: number;
		login: number;
		pay: number;
		pay_pack_paid: number;
		sponsor: number;
		vip_info: {
			due_date: number;
			status: number;
			type: number;
		};
	};
};
