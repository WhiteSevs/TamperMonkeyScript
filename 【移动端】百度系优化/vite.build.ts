
import path from "path";

const Utils = {
    /**
     * 获取绝对路径
     * @param pathName 
     * @returns 
     */
    getAbsolutePath: (pathName: string) => {
        return path.resolve(__dirname, pathName);
    },
    /**
     * 时间格式化
     * @param text 
     * @param formatType 
     * @param withZero 
     * @returns 
     */
    formatTime: (
        text = new Date(),
        formatType = "yyyy-MM-dd HH:mm:ss",
        withZero = true,
    ) => {
        let time = text == null ? new Date() : new Date(text);
        /**
         * 校验时间补0
         * @param timeNum
         * @returns
         */
        function checkTime(timeNum: number) {
            if (!withZero) {
                return timeNum
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
    },
    /**
     * 获取GreasyFork库的最新版本的链接
     * @param libId 
     */
    async getGreasyForkLibLatestVersionUrl(libId: string | number) {
        let scriptInfo = await fetch(`https://update.greasyfork.org/scripts/${libId}.json`).then((res) => res.json())
        console.log(`获取库: ${scriptInfo?.name}`)
        return scriptInfo?.code_url as string;
    },
}

const LIB_MAP = {
    "CoverUMD": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/CoverUMD/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(494167)
        },
    },
    "Viewer": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/Viewer/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(449471)
        },
    },
    "Qmsg": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/Qmsg/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(462234)
        },
    },
    "pops": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/pops/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(456485)
        },
    },
    "Utils": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/Utils/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(455186)
        },
    },
    "DOMUtils": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/DOMUtils/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(465772)
        }
    },
    "showdown": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/showdown/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(488179)
        },
    },
    "Xtiper": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/Xtiper/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(449512)
        },
    },
    "NZMsgBox": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/NZMsgBox/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(449562)
        },
    },
    "js-watermark": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/js-watermark/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(452322)
        },
    },
    "GM_html2canvas": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/html2canvas/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(456607)
        },
    },
    "JS-分页插件": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/DataPaging/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(465550)
        },
    },
    "Eruda": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/Eruda/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(483694)
        },
    },
    "vConsole": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/VConsole/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(483695)
        },
    },
    "PageSpy": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/PageSpy/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(483696)
        },
    },
    "Leaflet": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/leaflet/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(483765)
        },
    },
    "Crypto-JS": {
        localPath: "file://" + Utils.getAbsolutePath("./../库/CryptoJS/index.js"),
        url: async () => {
            return await Utils.getGreasyForkLibLatestVersionUrl(486152)
        },
    },
}

const SCRIPT_NAME = "【移动端】百度系优化"

const GetLib = async (libName: (keyof typeof LIB_MAP)[] | keyof typeof LIB_MAP) => {
    let needLib: (keyof typeof LIB_MAP)[] = [];
    if (typeof libName === "string") {
        needLib = [libName];
    } else if (Array.isArray(libName)) {
        needLib = [...libName]
    } else {
        throw new TypeError("libName must be string or string[]")
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
                    ResourceList.push(url)
                } else {
                    ResourceList.push(item.url)
                }
            } else {
                console.warn(`${needLibName} is not found in LIB_MAP`);
            }
        }
    }
    return ResourceList;
}

export {
    Utils,
    SCRIPT_NAME,
    GetLib
}