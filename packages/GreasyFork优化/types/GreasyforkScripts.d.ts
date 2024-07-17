/** 元素上存储的脚本信息 */
declare interface GreasyforkScriptListInfoDataset {
	/** 脚本id */
	scriptId: string;
	/** 脚本名 */
	scriptName: string;
	/** 脚本发布作者也可能是联合作者 */
	scriptAuthors: string;
	/** 脚本日安装量 */
	scriptDailyInstalls: string;
	/** 脚本总安装量 */
	scriptTotalInstalls: string;
	/** 脚本评分 */
	scriptRatingScore: string;
	/** 脚本创建日期，例如：2024-1-1，只有年月日 */
	scriptCreatedDate: string;
	/** 脚本更新日期，例如：2024-1-1，只有年月日 */
	scriptUpdatedDate: string;
	/** 脚本类型 */
	scriptType: "public" | "library" | "unlisted";
	/** 脚本版本号 */
	scriptVersion: string;
	/**  */
	sensitive: "true" | "false";
	/** 脚本语言，js脚本或者css脚本 */
	scriptLanguage: "js" | "css";
	/**  */
	cssAvailableAsJs: "true" | "false";
	/** 脚本代码链接 */
	codeUrl: string;
	/** 脚本描述 */
	scriptDescription: string;
	/** 脚本作者id */
	scriptAuthorId: string;
	/** 脚本作者名 */
	scriptAuthorName: string;
}

/** 对元素上存储的信息转换后的数据 */
declare interface GreasyforkScriptListInfo {
	/** 脚本id */
	scriptId: number;
	/** 脚本名 */
	scriptName: string;
	/** 脚本发布作者也可能是联合作者 */
	scriptAuthors: {
		authorId: number;
		authorName: string;
	}[];
	/** 脚本日安装量 */
	scriptDailyInstalls: number;
	/** 脚本总安装量 */
	scriptTotalInstalls: number;
	/** 脚本评分 */
	scriptRatingScore: number;
	/** 脚本创建日期，例如：2024-1-1，只有年月日 */
	scriptCreatedDate: Date;
	/** 脚本更新日期，例如：2024-1-1，只有年月日 */
	scriptUpdatedDate: Date;
	/** 脚本类型 */
	scriptType: GreasyforkScriptListInfoDataset["scriptType"];
	/** 脚本版本号 */
	scriptVersion: string;
	/**  */
	sensitive: boolean;
	/** 脚本语言，js脚本或者css脚本 */
	scriptLanguage: GreasyforkScriptListInfoDataset["scriptLanguage"];
	/**  */
	cssAvailableAsJs: boolean;
	/** 脚本代码链接 */
	codeUrl: string;
	/** 脚本描述 */
	scriptDescription: string;
	/** 脚本作者id */
	scriptAuthorId: number;
	/** 脚本作者名 */
	scriptAuthorName: string;
}

/** 通过请求url获取到的脚本json信息 */
declare interface GreasyforkScriptUrlInfo {
	/** 脚本id */
	id: number;
	/** 创建时间 */
	created_at: string;
	/** 日安装量 */
	daily_installs: number;
	/** 总安装量 */
	total_installs: number;
	/** 最新更新时间 */
	code_updated_at: string;
	/** 脚本的支持URL，用于反馈和问题解决。 */
	support_url: string;
	/** 脚本的评分，反映用户满意度。 */
	fan_score: string;
	/** 脚本的命名空间，通常指向源代码的存储库。 */
	namespace: string;
	/** 脚本的贡献URL，用于用户贡献和协作。 */
	contribution_url: null | string;
	/** 脚本的贡献金额，如果接受捐赠。 */
	contribution_amount: null | string | number;
	/** 脚本的好评数量。 */
	good_ratings: number;
	/** 脚本的中评数量。 */
	ok_ratings: number;
	bad_ratings: number;
	users: {
		/** 用户的唯一标识ID。 */
		id: number;
		/** 用户的显示名称。 */
		name: string;
		/** 用户的个人主页URL。 */
		url: string;
	}[];
	/** 脚本的名称，用于标识和搜索。 */
	name: string;
	/** 脚本的描述，详细说明其功能和用途。 */
	description: string;
	/** 脚本的主页URL，用于获取更多信息。 */
	url: string;
	/** 脚本代码的直接下载URL。 */
	code_url: string;
	/** 脚本的许可协议，规定使用和修改的条件。 */
	license: string | null;
	/** 脚本的当前版本号。 */
	version: string;
	/** 脚本的语言地区设置，如中文（中国）。 */
	locale: string;
	/** 指示脚本是否已被删除的标志。 */
	deleted: boolean;
}
