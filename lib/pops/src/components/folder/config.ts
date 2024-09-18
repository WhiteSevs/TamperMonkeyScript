import type { PopsFolderDetails } from "./indexType";

export const PopsFolderConfig: Required<PopsFolderDetails> = {
	title: {
		text: "pops.Folder",
		position: "center",
		html: false,
		style: "",
	},
	sort: {
		name: "latestTime",
		isDesc: false,
		// @ts-ignore
		callback() {},
	},
	folder: [
		{
			fileName: "测试文件夹",
			fileSize: 0,
			fileType: "",
			createTime: 0,
			latestTime: 0,
			isFolder: true,
			index: 0,
			// @ts-ignore
			clickEvent() {
				return [
					{
						fileName: "内部-测试文件.zip",
						fileSize: 1025000,
						fileType: "zip",
						createTime: 1702038410440,
						latestTime: 1702039602126,
						isFolder: false,
						index: 1,
						clickEvent() {
							console.log("下载文件：", this.fileName);
							return "https://update.greasyfork.org/scripts/456485/pops.js";
						},
					},
				];
			},
		},
		{
			fileName: "测试文件.apk",
			fileSize: 30125682,
			fileType: "apk",
			createTime: 1702036410440,
			latestTime: 1702039410440,
			isFolder: false,
			index: 1,
			// @ts-ignore
			clickEvent() {
				console.log("下载文件：", this.fileName);
				return "https://update.greasyfork.org/scripts/456485/pops.js";
			},
		},
	],
	btn: {
		merge: false,
		mergeReverse: false,
		reverse: false,
		position: "flex-end",
		ok: {
			enable: true,
			size: void 0,
			icon: void 0,
			rightIcon: false,
			iconIsLoading: false,
			text: "确定",
			type: "primary",
			callback(event) {
				event.close();
			},
		},
		cancel: {
			enable: true,
			size: void 0,
			icon: void 0,
			rightIcon: false,
			iconIsLoading: false,
			text: "关闭",
			type: "default",
			callback(event) {
				event.close();
			},
		},
		other: {
			enable: false,
			size: void 0,
			icon: void 0,
			rightIcon: false,
			iconIsLoading: false,
			text: "其它按钮",
			type: "default",
			callback(event) {
				event.close();
			},
		},
		close: {
			enable: true,
			callback(event) {
				event.close();
			},
		},
	},
	class: "",
	only: false,
	width: "500px",
	height: "400px",
	position: "center",
	animation: "pops-anim-fadein-zoom",
	zIndex: 10000,
	mask: {
		enable: false,
		clickEvent: {
			toClose: false,
			toHide: false,
		},
		clickCallBack: void 0,
	},
	drag: false,
	dragLimit: true,
	dragExtraDistance: 3,
	dragMoveCallBack() {},
	dragEndCallBack() {},
	forbiddenScroll: false,
	style: null,
	beforeAppendToPageCallBack() {},
};