import path from "path";
import fs from "fs";
import { execSync } from "child_process";

const originDirName = __dirname;
export class ViteUtils {
  /** 文件夹的路径（调用者） */
  dirName: string = originDirName;
  /** vite.utils.ts所在的路径 */
  originDirName: string = originDirName;
  /**
   * 初始化
   * @param dirName 可以设置当前的路径
   */
  constructor(dirName?: string) {
    if (dirName) {
      this.dirName = dirName;
    }
  }
  /**
     * JSON数据从源端替换到目标端中，如果目标端存在该数据则替换，不添加，返回结果为目标端替换完毕的结果
     * @param target 目标数据
     * @param source 源数据
     * @param isAdd 是否可以追加键，默认false
     * @example
     * Utils.assign({"1":1,"2":{"3":3}}, {"2":{"3":4}});
     * > 
     * {
            "1": 1,
            "2": {
                "3": 4
            }
        }
     */
  assign<T, U>(target1: T, target2: U, isAdd: boolean): T & U {
    if (target2 == null) {
      return target1 as T & U;
    }
    const that = this;
    const result: any = { ...target1 };

    for (const key in target2) {
      if (target2.hasOwnProperty(key)) {
        const value = target2[key];
        const targetValue = result[key];

        if (Array.isArray(value) && Array.isArray(targetValue)) {
          // [...]
          // [...]
          if (isAdd) {
            result[key].push(...value); // 数组合并
          } else {
            result[key] = value; // 数组替换
          }
        } else if (typeof value === "object" && typeof targetValue === "object") {
          // {...}
          // {...}
          result[key] = that.assign(targetValue, value, isAdd); // 递归处理对象
        } else {
          // ""
          // ""|0|false|true
          if (isAdd || result.hasOwnProperty(key)) {
            result[key] = value; // 覆盖或新增属性
          }
        }
      }
    }

    return result as T & U;
  }
  /** 获取vite.utils.ts的绝对路径 */
  getViteUtilsPath() {
    return path.resolve(this.originDirName);
  }
  /** 获取package.json的信息 */
  getPackageJSON() {
    let pkgInfo = fs.readFileSync(path.resolve(this.originDirName, "./package.json"), "utf-8");
    let packageInfo = JSON.parse(pkgInfo) as {
      /** 项目名 */
      name: string;
      /** 项目版本号 */
      version: string;
      /** npm脚本命令 */
      scripts: {
        [key: string]: string;
      };
      /** 依赖包 */
      dependencies: {
        "@element-plus/icons-vue": string;
        "@mgdn/bvid": string;
        "@types/md5": string;
        "@whitesev/domutils": string;
        "@whitesev/pops": string;
        "@whitesev/utils": string;
        i18next: string;
        md5: string;
        pinia: string;
        qmsg: string;
        viewerjs: string;
        vue: string;
        "vue-demi": string;
        "vue-router": string;
        [key: string]: string;
      };
      /** dev 依赖包 */
      devDependencies: {
        "@types/node": string;
        "@vitejs/plugin-vue": string;
        "element-plus": string;
        typescript: string;
        "unplugin-auto-import": string;
        "unplugin-element-plus": string;
        "unplugin-icons": string;
        "unplugin-vue-components": string;
        vite: string;
        "vite-plugin-monkey": string;
        "vue-tsc": string;
        [key: string]: string;
      };
    };
    // 替换掉依赖版本前面的^
    let replaceVersionList = [packageInfo.dependencies, packageInfo.devDependencies];
    replaceVersionList.forEach((item) => {
      Object.keys(item).forEach((key) => {
        let version = item[key];
        item[key] = version.replace(/^(\^|~|>|<|=|~|!)/, "");
      });
    });
    return packageInfo;
  }
  /**
   * 获取文件的绝对路径
   * @param pathName
   */
  getAbsolutePath(pathName: string) {
    let realPath = path.resolve(this.dirName, pathName);
    return realPath;
  }
  /**
   * 获取文件的绝对路径(根据vite.utils.ts的路径)
   * @param pathName
   */
  getOriginAbsolutePath(pathName: string) {
    let realPath = path.resolve(this.originDirName, pathName);
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
  formatTime(text = new Date(), formatType = "yyyy-MM-dd HH:mm:ss", withZero = true) {
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
      /** 年 */
      MM: checkTime(time.getMonth() + 1),
      /** 月 */
      dd: checkTime(time.getDate()),
      /** 日 */
      HH: checkTime(time.getHours()),
      /** 时 (24小时制) */
      hh: checkTime(timeSystemChange(time.getHours())),
      /** 时 (12小时制) */
      mm: checkTime(time.getMinutes()),
      /** 分 */
      ss: checkTime(time.getSeconds()),
      /** 秒 */
    };
    Object.keys(timeRegexp).forEach(function (key) {
      let replaecRegexp = new RegExp(key, "g");
      formatType = formatType.replace(replaecRegexp, (timeRegexp as any)[key]);
    });
    return formatType;
  }
  /**
   * 获取GreasyFork库的最新版本的链接
   * @param libId 库id
   * @param [reTry=true] 是否重试，默认true
   */
  async getGreasyForkLibLatestVersionUrl(libId: string | number, reTry: boolean = true): Promise<string> {
    try {
      let scriptInfo = await fetch(`https://update.greasyfork.org/scripts/${libId}.json`).then((res) => res.json());
      let name: string = scriptInfo?.name;
      let code_url: string = scriptInfo?.code_url;
      let codeUrlInstance = new URL(code_url);
      if (codeUrlInstance.hostname == "update.greasyfork.org") {
        // 官方域名已被污染
        // cn-greasyfork.org再次被污染
        // codeUrlInstance.hostname = "update.cn-greasyfork.org";
        // code_url = codeUrlInstance.toString();
      }
      let code_url_split = code_url.split("/");
      let findIndex = code_url_split.findIndex((item) => item == libId.toString());
      console.log(`gf库: ${name}`);
      if (findIndex != -1) {
        console.log(`版本: ${code_url_split[findIndex + 1]}`);
      } else {
        console.log(`版本: 解析失败`);
      }
      console.log("");
      return code_url;
    } catch (error) {
      if (reTry) {
        return await this.getGreasyForkLibLatestVersionUrl(libId, false);
      }
    }
  }
  /**
   * 获取github上文件的最新的链接
   */
  async getGitHubLibLatestVersionUrl(
    repoName: string,
    branchName: string,
    pathName: string,
    reTry: boolean = true
  ): Promise<string> {
    try {
      // 去掉开头的/
      pathName = pathName.replace(/^\//i, "");
      // 去掉开头的/
      repoName = repoName.replace(/^\//i, "");
      // 去掉末尾的/
      repoName = repoName.replace(/\/$/i, "");
      let scriptInfo = await fetch(`https://github.com/${repoName}/latest-commit/${branchName}/${pathName}`, {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      }).then((res) => res.json());
      let oid = scriptInfo?.oid;
      if (oid == null) {
        throw new TypeError("获取github文件sha值失败", scriptInfo);
      }
      // console.log(`github文件路径：https://github.com/${repoName}/tree/${branchName}/${pathName}`);
      // console.log(`github文件sha值：${oid}`);
      // console.log("");
      return github_jsdelivr(repoName, oid, pathName);
    } catch (error) {
      if (reTry) {
        return await this.getGitHubLibLatestVersionUrl(repoName, branchName, pathName, false);
      }
    }
  }
  /**
   * 获取脚本版本号
   * @param useFileVersion 是否直接使用Version文件的版本号
   */
  getScriptVersion(useFileVersion: boolean = false) {
    let SCRIPT_VERSION_PATH = this.getAbsolutePath("./SCRIPT_VERSION.json");
    let currentTime = new Date();
    let versionInfo = {
      time: currentTime.getTime(),
      version: `${this.formatTime(currentTime, "yyyy.MM.dd", false)}`,
    };
    try {
      // 版本号文件存在
      let fileInfo = fs.readFileSync(SCRIPT_VERSION_PATH, {
        encoding: "utf-8",
      });
      let fileVersionInfo = JSON.parse(fileInfo);
      let historyTime = new Date(fileVersionInfo["time"]);
      let historyTimeNumber = historyTime.getTime();
      if (useFileVersion) {
        console.log("use local version json: " + fileVersionInfo["version"]);
        return fileVersionInfo["version"];
      }
      if (historyTimeNumber <= versionInfo.time) {
        // 过去
        if (
          historyTime.getFullYear() === currentTime.getFullYear() &&
          historyTime.getMonth() === currentTime.getMonth() &&
          historyTime.getDate() === currentTime.getDate()
        ) {
          // 今天
          versionInfo.version = `${this.formatTime(currentTime, "yyyy.MM.dd.HH", false)}`;
        } else {
          // 昨天、前天...
        }
      } else {
        // 未来？啊？怎么可能
      }
    } catch (error) {
      // 版本号文件不存在
    }
    fs.writeFileSync(SCRIPT_VERSION_PATH, JSON.stringify(versionInfo, null, 2) + "\n", {
      encoding: "utf-8",
    });
    console.log("script build version: " + versionInfo.version);
    return versionInfo.version;
  }
  /**
   * 获取最新的版本号
   */
  getLatestScriptVersion(version: string): string {
    version = version.trim();
    const currentTime = new Date();
    const versionInfo = {
      version: `${this.formatTime(currentTime, "yyyy.MM.dd", false)}`,
      time: currentTime.getTime(),
    };
    if (version === "") {
      return versionInfo.version;
    }
    const yearMonthDayMatcher = version.match(/^([\d]+)\.([\d]+)\.([\d]+)$/);
    const yearMonthDayHourMatcher = version.match(/^([\d]+)\.([\d]+)\.([\d]+)\.([\d]+)$/);
    const historyTime = new Date();
    let versionLength = 0;
    if (yearMonthDayHourMatcher) {
      // 时间格式为 年.月.日.时
      versionLength = 4;
      const year = parseInt(yearMonthDayHourMatcher[1]);
      const month = parseInt(yearMonthDayHourMatcher[2]);
      const day = parseInt(yearMonthDayHourMatcher[3]);
      const hour = parseInt(yearMonthDayHourMatcher[4]);
      historyTime.setFullYear(year, month - 1, day);
      historyTime.setHours(hour);
    } else if (yearMonthDayMatcher) {
      // 时间格式为 年.月.日
      versionLength = 3;
      const year = parseInt(yearMonthDayMatcher[1]);
      const month = parseInt(yearMonthDayMatcher[2]);
      const day = parseInt(yearMonthDayMatcher[3]);
      historyTime.setFullYear(year, month - 1, day);
    }
    if (versionLength) {
      const historyTimeNumber = historyTime.getTime();
      if (historyTimeNumber <= versionInfo.time) {
        // 过去
        if (
          historyTime.getFullYear() === currentTime.getFullYear() &&
          historyTime.getMonth() === currentTime.getMonth() &&
          historyTime.getDate() === currentTime.getDate()
        ) {
          // 今天
          // 年.月.日.时
          versionInfo.version = `${this.formatTime(currentTime, "yyyy.MM.dd.HH", false)}`;
        } else {
          // 昨天、前天..
        }
      } else {
        // 未来？啊？怎么可能
      }
    }
    return versionInfo.version;
  }
  /**
   * 获取npm上发布的包的版本号
   * @param libName
   */
  getNpmLibVersion(libName: string) {
    let version: string = execSync(`npm view ${libName.trim()} version`).toString().trim();
    console.log(`npm库: ${libName}\n版 本: ${version}\n`);
    return version;
  }
}

export const viteUtils = new ViteUtils();

const jsdelivrHost = "fastly.jsdelivr.net";

/**
 * github的链接
 */
const github_jsdelivr = (repoName: string, sha_hash: string, file_path: string) => {
  file_path = file_path.replace(/^\//i, "");
  file_path = encodeURI(file_path);
  return `https://${jsdelivrHost}/gh/${repoName}@${sha_hash}/${file_path}`;
};

/** 库映射信息 */
const LIB_MAP = {
  CoverUMD: {
    localPath: "file:///" + viteUtils.getOriginAbsolutePath("./lib/CoverUMD/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(494167);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/CoverUMD/index.js"
      );
    },
  },
  Viewer: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/Viewer/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(449471);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/Viewer/index.js"
      );
    },
  },
  Qmsg: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/Qmsg/dist/index.umd.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(462234);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/Qmsg/dist/index.umd.js"
      );
    },
  },
  pops: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/pops/dist/index.umd.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(456485);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/pops/dist/index.umd.js"
      );
    },
  },
  Utils: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/Utils/dist/index.umd.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(455186);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/Utils/dist/index.umd.js"
      );
    },
  },
  DOMUtils: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/DOMUtils/dist/index.umd.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(465772);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/DOMUtils/dist/index.umd.js"
      );
    },
  },
  showdown: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/showdown/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibatestVersionUrl(488179);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/showdown/index.js"
      );
    },
  },
  Xtiper: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/Xtiper/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(449512);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/Xtiper/index.js"
      );
    },
  },
  NZMsgBox: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/NZMsgBox/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(449562);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/NZMsgBox/index.js"
      );
    },
  },
  "js-watermark": {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/js-watermark/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(452322);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/js-watermark/index.js"
      );
    },
  },
  GM_html2canvas: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/html2canvas/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(456607);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/html2canvas/index.js"
      );
    },
  },
  DataPaging: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/DataPaging/dist/index.umd.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(465550);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/DataPaging/dist/index.umd.js"
      );
    },
  },
  Eruda: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/Eruda/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(483694);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/Eruda/index.js"
      );
    },
  },
  vConsole: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/VConsole/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(483695);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/VConsole/index.js"
      );
    },
  },
  PageSpy: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/PageSpy/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(483696);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/PageSpy/index.js"
      );
    },
  },
  Leaflet: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/leaflet/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(483765);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/leaflet/index.js"
      );
    },
  },
  "Crypto-JS": {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/CryptoJS/index.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(486152);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/CryptoJS/index.js"
      );
    },
  },
  QRCode: {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/QRCode/index.umd.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(497907);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/QRCode/index.umd.js"
      );
    },
  },
  "网盘链接识别-图标": {
    localPath: "file:///" + viteUtils.getAbsolutePath("./scripts-vite/网盘链接识别/网盘链接识别-图标.js"),
    url: async () => {
      // return await viteUtils.getGreasyForkLibLatestVersionUrl(456470);
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/scripts-vite/网盘链接识别/网盘链接识别-图标.js"
      );
    },
  },
  "bilibili-comment-style": {
    localPath: async () => {
      return await viteUtils.getGreasyForkLibLatestVersionUrl(512574);
    },
    url: async () => {
      return await viteUtils.getGreasyForkLibLatestVersionUrl(512574);
    },
  },
  "element-plus": {
    localPath: "file:///" + viteUtils.getAbsolutePath("./lib/Element-Plus/index.full.min.js"),
    url: async () => {
      return await viteUtils.getGitHubLibLatestVersionUrl(
        "WhiteSevs/TamperMonkeyScript",
        "master",
        "/lib/Element-Plus/index.full.min.js"
      );
    },
  },
};

/**
 * 获取库的链接信息，server下是file://...，build下是https://...
 * @param libName 库名|库名数组
 * @param isLocal 是否指定获取本地的
 *
 * `true`：强制本地
 * `false`：（默认）强制cdn
 */
export async function GetLib(libName: keyof typeof LIB_MAP, isLocal?: boolean): Promise<string>;
export async function GetLib(libName: (keyof typeof LIB_MAP)[], isLocal?: boolean): Promise<string[]>;
export async function GetLib(
  libName: (keyof typeof LIB_MAP)[] | keyof typeof LIB_MAP,
  isLocal?: boolean
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
  // if (process.env.NODE_ENV === "development") {
  if (isLocal) {
    for (const needLibName of needLib) {
      const item = LIB_MAP[needLibName];
      if (item) {
        if (typeof item.localPath === "function") {
          const url = await item.localPath();
          ResourceList.push(url);
        } else if (typeof item.localPath === "string") {
          ResourceList.push(item.localPath);
        } else {
          console.warn(`${needLibName} localPath must be string or function`);
        }
      } else {
        console.warn(`${needLibName} is not found in LIB_MAP`);
      }
    }
  } else {
    for (const needLibName of needLib) {
      const item = LIB_MAP[needLibName];
      if (item) {
        if (typeof item.url === "function") {
          const url = await item.url();
          ResourceList.push(url);
        } else if (typeof item.url === "string") {
          ResourceList.push(item.url);
        } else {
          console.warn(`${needLibName} url must be string or function`);
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
