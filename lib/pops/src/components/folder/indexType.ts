import type {
	PopsTitleConfig,
	PopsDragConfig,
	PopsCommonConfig,
	PopsMoreButtonConfig,
} from "../../types/components";

/**
 * pops.folder的folder配置信息
 */
export interface PopsFolderDataConfig {
	/**
	 * 文件/文件夹名
	 */
	fileName: string;
	/**
	 * 文件大小，如果是文件夹的话，为0
	 */
	fileSize: number | string;
	/**
	 * 文件类型，如果是文件夹，填入空字符串
	 */
	fileType: string;
	/**
	 * 创建时间
	 */
	createTime: number;
	/**
	 * 修改时间(最新时间)
	 */
	latestTime: number;
	/**
	 * 是否是文件夹
	 */
	isFolder: boolean;
	/**
	 * 层级
	 */
	index: number;
	/**
	 * 点击事件
	 */
	clickEvent?: (
		event: MouseEvent | PointerEvent,
		config: PopsFolderDataConfig
	) =>
		| Promise<
				| {
						autoDownload: boolean;
						url: string;
						mode: "a" | "aBlank" | "iframe" | "open" | "openBlank";
				  }
				| null
				| undefined
				| void
				| PopsFolderDataConfig[]
		  >
		| null
		| undefined
		| void
		| PopsFolderDataConfig[];
}

/**
 * pops.folder
 */
export interface PopsFolderDetails
	extends PopsTitleConfig,
		PopsDragConfig,
		PopsMoreButtonConfig,
		PopsCommonConfig {
	/**
	 * 排序
	 */
	sort: {
		/**
		 * 比较的名字，默认为fileName
		 */
		name: "fileName" | "fileSize" | "latestTime";
		/**
		 * 是否降序，默认false（升序）
		 */
		isDesc: boolean;
		/**
		 * 触发排序的回调，如果返回true，则中止内部的排序
		 */
		callback?: (
			targert: HTMLElement,
			event: PointerEvent | MouseEvent,
			sortName: "fileName" | "fileSize" | "latestTime",
			sortDesc: boolean
		) => boolean | undefined | void;
	};
	/**
	 * 文件夹信息
	 */
	folder: PopsFolderDataConfig[];
}
