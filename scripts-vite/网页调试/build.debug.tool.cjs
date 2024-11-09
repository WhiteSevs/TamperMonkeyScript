const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

const util = {
	dirName: __dirname,
	getAbsolutePath(pathName) {
		let realPath = path.resolve(this.dirName, pathName);
		return realPath;
	},
	/**
	 * 获取npm上发布的包的版本号
	 * @param libName
	 * @returns {string}
	 */
	getNpmLibVersion(libName) {
		let version = execSync(`npm view ${libName.trim()} version`)
			.toString()
			.trim();
		console.log(`npm库: ${libName}\n版 本: ${version}\n`);
		return version;
	},
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
	 */ formatTime(
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
		function checkTime(timeNum) {
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
		function timeSystemChange(hourNum) {
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
	writeFileText(path, text) {
		fs.writeFileSync(path, text, { encoding: "utf-8" });
		console.log("写入文件: " + path);
	},
};

class Tool {
	path;
	npmName;

	filePath;
	READMEPath;
	version;
	constructor(path, npmName) {
		this.path = util.getAbsolutePath(path);
		this.npmName = npmName;
		this.filePath = util.getAbsolutePath(`${this.path}/index.js`);
		this.READMEPath = util.getAbsolutePath(`${this.path}/README.md`);
		this.version = util.getNpmLibVersion(this.npmName);
	}
	/** 获取npm库的代码文本 */
	async getNpmText() {
		let toolText = await (
			await fetch(`https://cdn.jsdelivr.net/npm/${this.npmName}`)
		).text();
		return toolText;
	}
	/** 写入README文件 */
	writeREADME(text) {
		util.writeFileText(this.READMEPath, text);
	}
	/** 写入JS文件 */
	writeJS(text) {
		util.writeFileText(this.filePath, text);
	}
}

let updateTime = util.formatTime(Date.now(), "yyyy-MM-dd");

let update_eruda = async () => {
	let tool = new Tool("./../../lib/Eruda", "eruda");
	tool.writeREADME(`
# 可自定义Eruda的对象名，用于适配一些网页上重复的对象名

- 最新版本：[![npm version](https://img.shields.io/npm/v/eruda/latest.svg)](https://www.npmjs.com/package/eruda)
- 当前版本：\`${tool.version}\`
- 项目主页
[https://github.com/liriliri/eruda](https://github.com/liriliri/eruda)
- 项目最新地址
[https://cdn.jsdelivr.net/npm/eruda](https://cdn.jsdelivr.net/npm/eruda)
[https://fastly.jsdelivr.net/npm/eruda](https://fastly.jsdelivr.net/npm/eruda)
[https://testingcf.jsdelivr.net/npm/eruda](https://testingcf.jsdelivr.net/npm/eruda)
`);

	let eruda_text = await tool.getNpmText();
	eruda_text = eruda_text.replace(
		`!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.eruda=t():e.eruda=t()}(self`,
		"!function(e,t){e[erudaName] = t();}(currentWindow"
	);
	eruda_text = `
/**
 * 初始化eruda
 * @time ${updateTime}
 * @version ${tool.version}
 * @link https://fastly.jsdelivr.net/npm/eruda
 * @param {string} [erudaName="Eruda"] 自定义的window.Eruda对象名
 * @param {Window} currentWindow 当前的全局对象
 */
let initEruda = function (
	erudaName = "Eruda",
	currentWindow = globalThis || self
) {
	/**
	 * 修复console的覆盖问题，因为油猴中的window是Proxy的window
	 */
	var window = currentWindow;
	var globalThis = currentWindow;
	var console = currentWindow.console;
	// !function(e,t){e[erudaName] = t();}(currentWindow
	// 替换
	// !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.eruda=t():e.eruda=t()}(self
	
${eruda_text}

}
	`;
	tool.writeJS(eruda_text);
};

let update_vconsole = async () => {
	let tool = new Tool("./../../lib/VConsole", "vconsole");
	tool.writeREADME(`
# 可自定义VConsole的对象名，用于适配一些网页上重复的对象名

- 最新版本：[![npm version](https://img.shields.io/npm/v/vconsole/latest.svg)](https://www.npmjs.com/package/vconsole)
- 当前版本：\`${tool.version}\`
- 项目主页
[https://github.com/Tencent/vConsole](https://github.com/Tencent/vConsole)
- 项目最新地址
[https://cdn.jsdelivr.net/npm/vconsole](https://cdn.jsdelivr.net/npm/vconsole)
[https://fastly.jsdelivr.net/npm/vconsole](https://fastly.jsdelivr.net/npm/vconsole)
[https://testingcf.jsdelivr.net/npm/vconsole](https://testingcf.jsdelivr.net/npm/vconsole)
`);

	let vconsole_text = await tool.getNpmText();
	vconsole_text = vconsole_text.replace(
		`!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("VConsole",[],n):"object"==typeof exports?exports.VConsole=n():t.VConsole=n()}(this||self,(function()`,
		`
!((function (global, factory) {
    global[vConsoleName] = factory(global, global.console);
  })(currentWindow, function (window, console)
`
	);

	vconsole_text = `
/**
 * 初始化vConsole
 * @time ${updateTime}
 * @version ${tool.version}
 * @link https://fastly.jsdelivr.net/npm/vconsole
 * @param {string} [erudaName="VConsole"] 自定义的window.VConsole对象名
 * @param {Window} currentWindow 当前的全局对象
 */
let initVConsole = function (
  vConsoleName = "VConsole",
  currentWindow = globalThis || self
) {

${vconsole_text}

}
	`;
	tool.writeJS(vconsole_text);
};

let update_pagespy = async () => {
	let tool = new Tool("./../../lib/PageSpy", "@huolala-tech/page-spy-browser");
	tool.writeREADME(`
# 介绍

可自定义PageSpy的对象名，用于适配一些网页上重复的对象名

## 🎈注意

接入调试端的注意隐私，默认的\`test.jikejishu.com\`是测试使用，别人也可以看得到你的调试信息，如果可以请自己部署一个调试服务器

官方文档：[https://github.com/HuolalaTech/page-spy-web/blob/main/README_ZH.md](https://github.com/HuolalaTech/page-spy-web/blob/main/README_ZH.md)

1. docker部署

    \`\`\`js
    docker run -d --restart=always -p 6752:6752 --name="pageSpy" ghcr.io/huolalatech/page-spy-web:release
    \`\`\`

2. Node部署

    \`\`\`js
    yarn global add @huolala-tech/page-spy-api

    # 如果你使用 npm

    npm install -g @huolala-tech/page-spy-api
    \`\`\`

## 信息

- 最新版本：[![npm version](https://img.shields.io/npm/v/@huolala-tech/page-spy-browser?label=page-spy-browser)](https://www.npmjs.com/package/@huolala-tech/page-spy-browser)
- 当前版本：\`${tool.version}\`
- 项目主页
[https://github.com/HuolalaTech/page-spy-web](https://github.com/HuolalaTech/page-spy-web)
- SDK地址
[https://github.com/HuolalaTech/page-spy/tree/main/packages/page-spy-browser](https://github.com/HuolalaTech/page-spy/tree/main/packages/page-spy-browser)
- 项目最新地址
[https://cdn.jsdelivr.net/npm/@huolala-tech/page-spy-browser](https://cdn.jsdelivr.net/npm/@huolala-tech/page-spy-browser)<br>[https://fastly.jsdelivr.net/npm/@huolala-tech/page-spy-browser](https://fastly.jsdelivr.net/npm/@huolala-tech/page-spy-browser)<br>[https://testingcf.jsdelivr.net/npm/@huolala-tech/page-spy-browser](https://testingcf.jsdelivr.net/npm/@huolala-tech/page-spy-browser)
`);

	let pagespy_text = await tool.getNpmText();
	pagespy_text = pagespy_text.replace(`var PageSpy=`, `return `);
	pagespy_text = `
/**
 * 初始化PageSpy
 * @time ${updateTime}
 * @version ${tool.version}
 * @link https://fastly.jsdelivr.net/npm/@huolala-tech/page-spy-browser
 */
/* prettier-ignore */
class initPageSpy {
  constructor(window = globalThis || self) {

    ${pagespy_text}

  }
}
`;
	tool.writeJS(pagespy_text);
};

(async () => {
	await update_eruda();
	console.log("")
	await update_vconsole();
	console.log("")
	await update_pagespy();
})();
