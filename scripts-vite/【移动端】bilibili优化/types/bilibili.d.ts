declare type BilibiliNumberStatus = 0 | 1;
/**
 * vip 标签
 */
declare type BilibiliVipLabel = {
	/**
	 * 标签路径。
	 */
	path: string;
	/**
	 * 标签文本。
	 */
	text: string;
	/**
	 * 会员标签
	 *
	 * + vip: 大会员
	 * + annual_vip: 年度大会员
	 * + en_annual_vip: 十年大会员
	 * + hundred_annual_vip: 百年大会员
	 */
	label_theme: "vip" | "annual_vip" | "en_annual_vip" | "hundred_annual_vip";
	/**
	 * 文本颜色。
	 */
	text_color: string;
	/**
	 * 背景样式。
	 */
	bg_style: number;
	/**
	 * 背景颜色。
	 */
	bg_color: string;
	/**
	 * 边框颜色。
	 */
	border_color: string;
	/**
	 * 是否使用图片标签。
	 */
	use_img_label: boolean;
	/**
	 * 简体中文图片标签 URL。
	 */
	img_label_uri_hans: string;
	/**
	 * 繁体中文图片标签 URL。
	 */
	img_label_uri_hant: string;
	/**
	 * 简体中文静态图片标签 URL。
	 */
	img_label_uri_hans_static: string;
	/**
	 * 繁体中文静态图片标签 URL。
	 */
	img_label_uri_hant_static: string;
};
/**
 * Bilibili 用户信息类型定义。
 */
declare interface BilibiliUserInfoType {
	/**
	 * 是否已登录。
	 */
	isLogin: boolean;
	/**
	 * 邮箱是否已验证。
	 */
	email_verified: BilibiliNumberStatus;
	/**
	 * 用户头像 URL。
	 */
	face: string;
	/**
	 * 头像 NFT 标识。
	 */
	face_nft: number;
	/**
	 * 头像 NFT 类型。
	 */
	face_nft_type: number;
	/**
	 * 等级信息。
	 */
	level_info: {
		/**
		 * 当前等级。
		 */
		current_level: number;

		/**
		 * 当前等级所需最小经验值。
		 */
		current_min: number;

		/**
		 * 当前经验值。
		 */
		current_exp: number;

		/**
		 * 下一等级所需经验值。
		 */
		next_exp: number;
	};
	/**
	 * 用户 ID。
	 */
	mid: number;
	/**
	 * 手机是否已验证。
	 */
	mobile_verified: BilibiliNumberStatus;
	/**
	 * 用户余额。
	 */
	money: number;
	/**
	 * 用户信誉值。
	 */
	moral: number;
	/**
	 * 官方认证信息。
	 */
	official: {
		/**
		 * 角色标识。
		 */
		role: number;

		/**
		 * 认证标题。
		 */
		title: string;

		/**
		 * 认证描述。
		 */
		desc: string;

		/**
		 * 认证类型。
		 */
		type: -1;
	};
	/**
	 * 官方认证标识。
	 */
	officialVerify: {
		/**
		 * 认证类型。
		 */
		type: -1;

		/**
		 * 认证描述。
		 */
		desc: string;
	};
	/**
	 * 挂件信息。
	 */
	pendant: {
		/**
		 * 挂件 ID。
		 */
		pid: number;

		/**
		 * 挂件名称。
		 */
		name: string;

		/**
		 * 挂件图片 URL。
		 */
		image: string;

		/**
		 * 挂件过期时间。
		 */
		expire: number;

		/**
		 * 增强挂件图片 URL。
		 */
		image_enhance: string;

		/**
		 * 增强挂件图片边框 URL。
		 */
		image_enhance_frame: string;

		/**
		 * 新挂件 ID。
		 */
		n_pid: number;
	};
	/**
	 * 用户积分。
	 */
	scores: number;
	/**
	 * 用户昵称。
	 */
	uname: string;
	/**
	 * VIP 过期时间戳。
	 */
	vipDueDate: number;
	/**
	 * VIP 状态。
	 */
	vipStatus: number;
	/**
	 * VIP 类型。
	 */
	vipType: number;
	/**
	 * VIP 支付类型。
	 */
	vip_pay_type: number;
	/**
	 * VIP 主题类型。
	 */
	vip_theme_type: number;
	/**
	 * VIP 标签信息。
	 */
	vip_label: BilibiliVipLabel;
	/**
	 * VIP 头像子脚本。
	 */
	vip_avatar_subscript: number;
	/**
	 * VIP 昵称颜色。
	 */
	vip_nickname_color: string;
	/**
	 * VIP 详细信息。
	 */
	vip: BilibiliVipLabel;
	/**
	 * 钱包信息。
	 */
	wallet: {
		/**
		 * 用户 ID。
		 */
		mid: number;

		/**
		 * B 币余额。
		 */
		bcoin_balance: number;

		/**
		 * 优惠券余额。
		 */
		coupon_balance: number;

		/**
		 * 优惠券过期时间。
		 */
		coupon_due_time: number;
	};
	/**
	 * 是否有店铺。
	 */
	has_shop: boolean;
	/**
	 * 店铺 URL。
	 */
	shop_url: string;
	/**
	 * 允许数量。
	 */
	allowance_count: number;
	/**
	 * 回答状态。
	 */
	answer_status: number;
	/**
	 * 是否高级会员。
	 */
	is_senior_member: number;
	/**
	 * WBI 图片信息。
	 */
	wbi_img: {
		/**
		 * 图片 URL。
		 */
		img_url: string;

		/**
		 * 子图片 URL。
		 */
		sub_url: string;
	};
	/**
	 * 是否陪审团成员。
	 */
	is_jury: boolean;
	/**
	 * 名字渲染信息。
	 */
	name_render: null;
}

declare interface BilibiliUserSpaceInfoType {
	/** 是否还有数据 */
	has_more: boolean;
	items: {
		basic: {
			comment_id_str: string;
			comment_type: number;
			like_icon: {
				action_url: string;
				end_url: string;
				id: number;
				start_url: string;
			};
			rid_str: string;
			[key: string]: any;
		};
		id_str: string;
		modules: {
			module_author: {
				/** 用户名 */
				name: string;
				/** 投稿的时间 */
				pub_ts: number;
				mid: number;
				[key: string]: any;
			};
			module_dynamic: {
				additional: null | string;
				desc: null | {
					text: string;
					rich_text_nodes?: {
						/**
						 * + RICH_TEXT_NODE_TYPE_AT \@用户
						 * + RICH_TEXT_NODE_TYPE_TEXT
						 * + RICH_TEXT_NODE_TYPE_TOPIC 话题
						 * + RICH_TEXT_NODE_TYPE_LOTTERY 抽奖之类的
						 * + RICH_TEXT_NODE_TYPE_EMOJI 表情
						 */
						type: string;
						text: string;
						[key: string]: any;
					}[];
				};
				major: {
					type: string;
					archive?: {
						aid: string;
						bvid: string;
						cover: string;
						desc: string;
						title: string;
						jump_url: string;
						[key: string]: any;
					};
					draw?: any;
				} | null;
				topic: null | string;
				[key: string]: any;
			};
			[key: string]: any;
		};
		/**
		 * 有这个属性就是转发的内容
		 *
		 * 没有的话就是自己投稿的内容
		 */
		orig?: BilibiliUserSpaceInfoType["items"][0];
		type: string;
		visible: boolean;
		[key: string]: any;
	}[];
	/** 用于请求下一页的偏移量 */
	offset: string;
	update_baseline: string;
	update_num: number;
}

declare interface BilibiliUserFollowingInfoType {
	face: string;
	follow_time: string;
	mid: number;
	mtime: number;
	/** 个性签名 */
	sign: string;
	/** 用户名 */
	uname: string;
	official_verify: {
		type: number;
		desc: string;
	};
	[key: string]: any;
}

declare interface BilibiliUserNavInfoType {
	/**
	 * 是否已登录
	 * + true 已登录
	 * + false 未登录
	 */
	isLogin: boolean;
	/**
	 * 是否验证邮箱地址
	 * + 0 未验证
	 * + 1 已验证
	 */
	email_verified: BilibiliNumberStatus;
	/**
	 * 用户头像 url
	 */
	face: string;
	/**
	 * 等级信息
	 */
	level_info: {
		/**
		 * 等级
		 */
		current_level: number;
		current_min: number;
		current_exp: number;
		next_exp: number;
	};
	/**
	 * 用户mid
	 */
	mid: number;
	/**
	 * 是否验证手机号
	 * + 0 未验证
	 * + 1 已验证
	 */
	mobile_verified: BilibiliNumberStatus;
	/**
	 * 硬币数量
	 */
	money: number;
	/**
	 * 当前节操值（上限为70）
	 */
	moral: number;
	/**
	 * 认证信息
	 */
	official: {
		role: number;
		title: string;
		desc: string;
		type: number;
	};
	/**
	 * 认证信息2
	 */
	officialVerify: {
		type: number;
		desc: string;
	};
	/**
	 * 头像框信息
	 */
	pendant: {
		pid: number;
		name: string;
		image: string;
		expire: number;
		image_enhance: string;
		image_enhance_frame: string;
		n_pid: number;
	};
	scores: number;
	/**
	 * 用户昵称
	 */
	uname: string;
	/**
	 * 会员到期时间（毫秒 时间戳）
	 */
	vipDueDate: number;
	/**
	 * 会员开通状态
	 * + 0 无
	 * + 1 有
	 */
	vipStatus: BilibiliNumberStatus;
	/**
	 * 会员类型
	 * + 0 无
	 * + 1 月度大会员
	 * + 2 年度及以上大会员
	 */
	vipType: 0 | 1 | 2;
	/**
	 * 会员开通状态
	 * + 0 无
	 * + 1 有
	 */
	vip_pay_type: BilibiliNumberStatus;
	vip_theme_type: number;
	/**
	 * 会员标签
	 */
	vip_label: BilibiliVipLabel;
	/**
	 * 是否显示会员图标
	 * + 0: 不显示
	 * + 1: 显示
	 */
	vip_avatar_subscript: BilibiliNumberStatus;
	/**
	 * 会员昵称颜色
	 */
	vip_nickname_color: string;
	vip: {
		type: number;
		status: BilibiliNumberStatus;
		due_date: number;
		vip_pay_type: number;
		theme_type: number;
		label: BilibiliUserNavInfoType["vip_label"];
		avatar_subscript: number;
		nickname_color: string;
		role: number;
		avatar_subscript_url: string;
		tv_vip_status: number;
		tv_vip_pay_type: number;
		tv_due_date: number;
		avatar_icon: {
			icon_type: number;
			icon_resource: {};
		};
	};
	/**
	 * B币钱包信息
	 */
	wallet: {
		/**
		 * 登录用户mid
		 */
		mid: number;
		/**
		 * 拥有B币数
		 */
		bcoin_balance: number;
		/**
		 * 每月奖励B币数
		 */
		coupon_balance: number;
		coupon_due_time: number;
	};
	/**
	 * 是否拥有推广商品
	 * + true 有
	 * + false 无
	 */
	has_shop: boolean;
	/**
	 * 商品推广页面 url
	 */
	shop_url: string;
	answer_status: number;
	/**
	 * 是否硬核会员
	 * + 0 非硬核会员
	 * + 1 硬核会员
	 */
	is_senior_member: BilibiliNumberStatus;
	/**
	 * Wbi 签名实时口令
	 *
	 * 该字段即使用户未登录也存在
	 */
	wbi_img: {
		img_url: string;
		sub_url: string;
	};
	/**
	 * 是否是风纪委员
	 * + true 风纪委员
	 * + false 非风纪委员
	 */
	is_jury: boolean;
}
