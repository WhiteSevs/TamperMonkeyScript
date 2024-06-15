import path from "path";
import fs from "fs";

class ViteUtils {
	dirName: string = __dirname;
	constructor(dirName?: string) {
		if (dirName) {
			this.dirName = dirName;
		}
	}
	/**
	 * 获取vite.utils.ts的绝对路径
	 */
	getViteUtilsPath() {
		return path.resolve(__dirname);
	}
	/**
	 * 获取绝对路径
	 * @param pathName
	 * @returns
	 */
	getAbsolutePath(pathName: string) {
		let realPath = path.resolve(this.dirName, pathName);
		return realPath;
	}
	/**
	 * 时间格式化
	 *
	 * + `yyyy` 年
	 * + `MM` 月
	 * + `dd` 日
	 * + `HH` 时(24小时制)
	 * + `hh` 时(12小时制)
	 * + `mm` 分
	 * + `ss` 秒
	 * @param text
	 * @param formatType
	 * @param withZero
	 * @returns
	 */
	formatTime(
		text = new Date(),
		formatType = "yyyy-MM-dd HH:mm:ss",
		withZero = true
	) {
		let time = text == null ? new Date() : new Date(text);
		/**
		 * 校验时间补0
		 * @param timeNum
		 * @returns
		 */
		function checkTime(timeNum: number) {
			if (!withZero) {
				return timeNum;
			}
			if (timeNum < 10) return "0" + timeNum;
			return timeNum;
		}
		/**
		 * 时间制修改 24小时制转12小时制
		 * @param hourNum 小时
		 * @returns
		 */
		function timeSystemChange(hourNum: number) {
			return hourNum > 12 ? hourNum - 12 : hourNum;
		}

		let timeRegexp = {
			yyyy: time.getFullYear(),
			/* 年 */
			MM: checkTime(time.getMonth() + 1),
			/* 月 */
			dd: checkTime(time.getDate()),
			/* 日 */
			HH: checkTime(time.getHours()),
			/* 时 (24小时制) */
			hh: checkTime(timeSystemChange(time.getHours())),
			/* 时 (12小时制) */
			mm: checkTime(time.getMinutes()),
			/* 分 */
			ss: checkTime(time.getSeconds()),
			/* 秒 */
		};
		Object.keys(timeRegexp).forEach(function (key) {
			let replaecRegexp = new RegExp(key, "g");
			formatType = formatType.replace(replaecRegexp, timeRegexp[key]);
		});
		return formatType;
	}
	/**
	 * 获取GreasyFork库的最新版本的链接
	 * @param libId
	 */
	async getGreasyForkLibLatestVersionUrl(libId: string | number) {
		let scriptInfo = await fetch(
			`https://update.greasyfork.org/scripts/${libId}.json`
		).then((res) => res.json());
		console.log(`获取库: ${scriptInfo?.name}`);
		return scriptInfo?.code_url as string;
	}
	/**
	 * 获取脚本版本号
	 * @param useFileVersion 直接使用Version文件的版本号
	 */
	getScriptVersion(useFileVersion: boolean = false) {
		let SCRIPT_VERSION_PATH = this.getAbsolutePath("./SCRIPT_VERSION.json");
		let currentTime = new Date();
		let versionInfo = {
			time: currentTime.getTime(),
			version: `${this.formatTime(currentTime, "yyyy.MM.dd", false)}`,
		};
		try {
			ViteUtils;
			/* 版本号文件存在 */
			let fileInfo = fs.readFileSync(SCRIPT_VERSION_PATH, {
				encoding: "utf-8",
			});
			let fileVersionInfo = JSON.parse(fileInfo);
			let fileVersionTime = new Date(fileVersionInfo["time"]);
			let fileVersionTimeNumber = fileVersionTime.getTime();
			if (useFileVersion) {
				console.log("直接使用文件的版本号: " + fileVersionInfo["version"]);
				return fileVersionInfo["version"];
			}
			if (fileVersionTimeNumber <= versionInfo.time) {
				/* 过去 */
				if (
					fileVersionTime.getFullYear() === currentTime.getFullYear() &&
					fileVersionTime.getMonth() === currentTime.getMonth() &&
					fileVersionTime.getDate() === currentTime.getDate()
				) {
					/* 今天 */
					versionInfo.version = `${this.formatTime(
						currentTime,
						"yyyy.MM.dd.HH",
						false
					)}`;
				} else {
					/* 昨天、前天... */ ViteUtils;
				}
			} else {
				/* 未来？啊？怎么可能 */
			}
		} catch (error) {
			/* 版本号文件不存在 */
		}
		fs.writeFileSync(
			SCRIPT_VERSION_PATH,
			JSON.stringify(versionInfo, null, 2),
			{
				encoding: "utf-8",
			}
		);
		console.log("版本号: " + versionInfo.version);
		return versionInfo.version;
	}
}

const viteUtils = new ViteUtils();

const LIB_MAP = {
	CoverUMD: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/CoverUMD/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(494167);
		},
	},
	Viewer: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/Viewer/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(449471);
		},
	},
	Qmsg: {
		localPath:
			"file://" +
			viteUtils.getAbsolutePath("./../../库/Qmsg/dist/index.umd.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(462234);
		},
	},
	pops: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/pops/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(456485);
		},
	},
	Utils: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/Utils/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(455186);
		},
	},
	DOMUtils: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/DOMUtils/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(465772);
		},
	},
	showdown: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/showdown/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(488179);
		},
	},
	Xtiper: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/Xtiper/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(449512);
		},
	},
	NZMsgBox: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/NZMsgBox/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(449562);
		},
	},
	"js-watermark": {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/js-watermark/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(452322);
		},
	},
	GM_html2canvas: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/html2canvas/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(456607);
		},
	},
	"JS-分页插件": {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/DataPaging/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(465550);
		},
	},
	Eruda: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/Eruda/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(483694);
		},
	},
	vConsole: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/VConsole/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(483695);
		},
	},
	PageSpy: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/PageSpy/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(483696);
		},
	},
	Leaflet: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/leaflet/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(483765);
		},
	},
	"Crypto-JS": {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/CryptoJS/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(486152);
		},
	},
	"Element-Plus": {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/Element-Plus/index.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(495227);
		},
	},
	QRCode: {
		localPath:
			"file://" + viteUtils.getAbsolutePath("./../../库/QRCode/index.umd.js"),
		url: async () => {
			return await viteUtils.getGreasyForkLibLatestVersionUrl(497907);
		},
	},
};

async function GetLib(libName: keyof typeof LIB_MAP): Promise<string>;
async function GetLib(libName: (keyof typeof LIB_MAP)[]): Promise<string[]>;
async function GetLib(
	libName: (keyof typeof LIB_MAP)[] | keyof typeof LIB_MAP
): Promise<string | string[]> {
	let needLib: (keyof typeof LIB_MAP)[] = [];
	if (typeof libName == "string") {
		needLib = [libName];
	} else if (Array.isArray(libName)) {
		needLib = [...libName];
	} else {
		throw new TypeError("libName must be string or string[]");
	}
	const ResourceList: string[] = [];
	if (process.env.NODE_ENV === "development") {
		for (const needLibName of needLib) {
			let item = LIB_MAP[needLibName];
			if (item) {
				ResourceList.push(item.localPath);
			} else {
				console.warn(`${needLibName} is not found in LIB_MAP`);
			}
		}
	} else {
		for (const needLibName of needLib) {
			let item = LIB_MAP[needLibName];
			if (item) {
				if (typeof item.url === "function") {
					let url = await item.url();
					ResourceList.push(url);
				} else {
					ResourceList.push(item.url);
				}
			} else {
				console.warn(`${needLibName} is not found in LIB_MAP`);
			}
		}
	}
	if (typeof libName == "string") {
		return ResourceList[0];
	} else {
		return ResourceList;
	}
}

export { ViteUtils, GetLib };
