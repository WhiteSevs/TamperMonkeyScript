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
	email_verified: 1 | 0;
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
	mobile_verified: 1 | 0;
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
	vip_label: {
		/**
		 * 标签路径。
		 */
		path: string;

		/**
		 * 标签文本。
		 */
		text: string;

		/**
		 * 标签主题。
		 */
		label_theme: string;

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
	vip: {
		/**
		 * VIP 类型。
		 */
		type: number;

		/**
		 * VIP 状态。
		 */
		status: number;

		/**
		 * VIP 过期时间戳。
		 */
		due_date: number;

		/**
		 * VIP 支付类型。
		 */
		vip_pay_type: number;

		/**
		 * VIP 主题类型。
		 */
		theme_type: number;

		/**
		 * VIP 标签信息。
		 */
		label: {
			/**
			 * 标签路径。
			 */
			path: string;

			/**
			 * 标签文本。
			 */
			text: string;

			/**
			 * 标签主题。
			 */
			label_theme: string;

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
		 * VIP 头像子脚本。
		 */
		avatar_subscript: number;

		/**
		 * VIP 昵称颜色。
		 */
		nickname_color: string;

		/**
		 * VIP 角色。
		 */
		role: number;

		/**
		 * VIP 头像子脚本 URL。
		 */
		avatar_subscript_url: string;

		/**
		 * TV VIP 状态。
		 */
		tv_vip_status: number;

		/**
		 * TV VIP 支付类型。
		 */
		tv_vip_pay_type: number;

		/**
		 * TV VIP 过期时间戳。
		 */
		tv_due_date: number;

		/**
		 * VIP 头像图标信息。
		 */
		avatar_icon: {
			/**
			 * 图标类型。
			 */
			icon_type: number;

			/**
			 * 图标资源。
			 */
			icon_resource: {};
		};
	};
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
