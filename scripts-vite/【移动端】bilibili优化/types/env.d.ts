/**
 * 空对象
 *
 * 类似
 * {
 *  "xxx": string,
 * }
 */
type NestedObjectWithToString = {
	[key: string]: any | NestedObjectWithToString;
	toString(): any;
};

/**
 * Promise的兼容类型
 *
 * 它是返回提供的类型或Promise包裹的类型
 */
declare type IPromise<T> = T | Promise<T>;

/**
 * 提取数组中的元素类型
 */
declare type ArrayElementType<T> = T extends Array<infer U> ? U : never;

/**
 * 让对象的某个属性必选
 */
declare type RequiredProperty<T, K extends keyof T> = Omit<T, K> &
	Required<Pick<T, K>>;

/**
 * 修复无法识别.vue文件的问题
 */
declare module "*.vue" {
	import { defineComponent } from "vue";
	const Component: ReturnType<typeof defineComponent>;
	export default Component;
}

interface Player {
	buvid: string;
	config: {
		aid: number;
		bvid: string;
		cid: number;
		[key: string]: any;
	};
	container: HTMLDivElement;
	controller: any;
	createdTime: number;
	danmaku: {
		danmakuCore: {
			animate: number;
			animateRange: number;
			animateTime: number;
			config: DanmakuCoreConfig;
			container: HTMLDivElement;
			danmakuArray: DanmaConfig[];
			densityList: any;
			deviceFps: number;
			deviceFpsList: any[];
			dmTrack: any;
			fps: number;
			fpsCount: number;
			fpsList: any[];
			fpsStart: boolean;
			fpsTimer: number;
			lastTime: number;
			manager: any;
			outDmidList: any[];
			pauseTime: number;
			paused: boolean;
			startTime: number;
			time: number;
			timeLine: DanmaConfig[];
			timeZero: number;
			visualArray: any[];
			wordReseted: boolean;
			wordTimer: number;
		};
		loadPb: any;
		player: Window.player;
		realsocket: any;
	};
	destroyed: boolean;
	events: {
		events: { [key: string]: Function[] }[];
	};
	firstClickArea: string;
	forcePanel: any;
	freezePause: boolean;
	iframe: null;
	initialized: boolean;
	isPlayed: boolean;
	metadataloadedTimer: number;
	observer: MutationObserver;
	perf: any;
	postered: true;
	prefix: string;
	reloadTime: number;
	retryTime: number;
	savedCurrentTime: number;
	seekLoad: boolean;
	session: string;
	size: number;
	state: {
		video_state: number;
		danmaku: boolean;
		mode: number;
		video_type: number;
	};
	subtitle: null;
	template: {
		[key: string]: HTMLElement;
	};
	timerChecker: number;
	track: any;
	user: any;
	video: HTMLVideoElement;
	videoQuality: number;
	videoSeeking: number;
	videoSeekingRelay: boolean;
	VideoInfo: {
		video_type: "ugc" | string;
		avid: number;
		cid: number;
		bvid: string;
		epid: null;
		ssid: null;
	};
	[key: string]: any;
}

interface Window {
	player?: {
		destroy: () => void;
		dmInfo: Function;
		/** 退出全屏 */
		exitFullScreen: () => void;
		/** 获取缓冲进度 */
		getBufferRate: () => number;
		/** 获取当前播放时间 */
		getCurrentTime: () => number;
		/** 获取视频时长 */
		getDuration: () => number;
		/** 获取当前播放状态 */
		getPlayerState: () => any;
		/** 获取会话id */
		getSession: () => string;
		/** 是否全屏 */
		isFullScreen: () => Promise<boolean>;
		/** 是否静音 */
		isMute: () => Promise<boolean>;
		loadSubtitle: () => void;
		off: (key: string) => void;
		on: () => void;
		/** 暂停 */
		pause: () => void;
		/** 播放 */
		play: () => void;
		playerPromise: Promise<Player>;
		/** 重载 */
		reload: () => void;
		resetTest: () => void;
		seek: () => void;
		/** 设置静音状态 */
		setMute: (mute?: boolean) => void;
	};
}
