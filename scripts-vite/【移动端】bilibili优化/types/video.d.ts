declare type BilibliPlayUrlCommonConfig = {
	cid: string | number;
	/** 画质 */
	qn?: number;
	/** 视频清晰度选择 */
	high_quality?: number;
	fnval?: number;
	/** 固定0 */
	fnver?: number;
	/** 是否允许 4K 视频 */
	fourk?: number;
	/** 该值用于移动端html5播放，如果删除，虽然通过其它办法可以获取到，但是无法播放，因为源会鉴权referer为www.bilibili.com */
	setPlatformHTML5?: boolean;
};
declare type TypeBilibiliVideoInfo = {
	accept_description: string[];
	accept_format: string;
	/** 允许的清晰度 */
	accept_quality: number[];
	/** 画质 */
	quality: number;
	/** 支持解锁的画质列表 */
	support_formats: {
		codecs: null;
		/** 描述 */
		display_desc: string;
		/** 类型如flv */
		format: string;
		/** 文字，一般用这个显示 */
		new_description: string;
		/** 画质值 */
		quality: number;
		superscript: string;
	}[];
};

declare type TypeBilibiliVideoInfo_mp4 = TypeBilibiliVideoInfo & {
	format: string;
	from: string;
	/** 播放地址信息列表 */
	durl: {
		ahead: string;
		/** 备用url */
		backup_url: string[] | null;
		length: number;
		order: number;
		/** 视频大小 */
		size: number;
		/** 链接 */
		url: string;
		vhead: string;
	}[];
	/**  */
	timelength: number;
	/** 视频编码 */
	video_codecid: number;
	[key: string]: any;
};

declare type TypeBilibiliVideoInfo_m4s = TypeBilibiliVideoInfo & {
	dash: {
		audio: {
			SegmentBase: {
				Initialization: string;
				indexRange: string;
			};
			/** 链接信息 */
			backupUrl: string[];
			/** 链接信息 */
			backup_url: string[];
			/** 带宽 */
			bandwidth: number;
			/** 链接信息 */
			baseUrl: string;
			/** 链接信息 */
			base_url: TypeBilibiliVideoInfo_m4s["dash"]["audio"][0]["baseUrl"];
			/** 编码格式，一般是0 */
			codecid: number;
			/** 编码格式描述 */
			codecs: string;
			/** 帧率信息 */
			frameRate: "";
			/** 帧率信息 */
			frame_rate: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["frameRate"];
			height: 0;
			/** 音质代码 */
			id: number;
			/** 类型，一般是audio/mp4 */
			mimeType: string;
			/** 类型，一般是audio/mp4 */
			mime_type: string;
			/** 文件大小（视频没有） */
			// size: number;
			sar: "";
			segment_base: TypeBilibiliVideoInfo_m4s["dash"]["audio"][0]["SegmentBase"];
			startWithSap: 0;
			start_with_sap: TypeBilibiliVideoInfo_m4s["dash"]["audio"][0]["startWithSap"];
			width: 0;
		}[];
		dolby: {
			audio: null;
			type: number;
		};
		duration: number;
		minBufferTime: number;
		min_buffer_time: number;
		video: {
			SegmentBase: {
				Initialization: string;
				indexRange: string;
			};
			/** 链接信息 */
			backupUrl: string[];
			/** 链接信息 */
			backup_url: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["backupUrl"];
			/** 带宽 */
			bandwidth: number;
			/** 链接信息 */
			baseUrl: string;
			/** 链接信息 */
			base_url: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["baseUrl"];
			/** 编码格式 */
			codecid: number;
			/** 编码格式描述 */
			codecs: string;
			/** 帧率信息 */
			frameRate: string;
			/** 帧率信息 */
			frame_rate: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["frameRate"];
			/** 视频高度 */
			height: number;
			/** 画质代码 */
			id: number;
			/** 类型，一般是video/mp4 */
			mimeType: string;
			/** 类型，一般是video/mp4 */
			mime_type: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["mimeType"];
			/** 文件大小 */
			// size: number;
			/** 1:1 */
			sar: string;
			segment_base: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["SegmentBase"];
			/** @default 1 */
			startWithSap: number;
			/** @default 1 */
			start_with_sap: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["startWithSap"];
			/** 视频宽度 */
			width: number;
		}[];
	};
	format: "flv";
	from: "local";
	last_play_cid: number;
	last_play_time: number;
	timelength: number;
	/** 视频编码 */
	video_codecid: number;
	[key: string]: any;
};
