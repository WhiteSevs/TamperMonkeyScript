import { defineConfig } from "vite";
import monkey, { cdn, util } from "vite-plugin-monkey";
import { ViteUtils, GetLib } from "./vite.utils";

const SCRIPT_NAME = "Demo Script Name";
const Utils = new ViteUtils(__dirname);
let FILE_NAME = SCRIPT_NAME + ".user.js";

/* 是否压缩代码 */
let isMinify = false;
if (process.argv.includes("--minify")) {
	isMinify = true;
	FILE_NAME = SCRIPT_NAME + ".min.user.js";
}

let isEmptyOutDir = true;
if (process.argv.includes("--no-empty-outDir")) {
	isEmptyOutDir = false;
}

let VERSION =
	process.env.NODE_ENV === "development"
		? "0.0.1"
		: Utils.getScriptVersion(!isEmptyOutDir);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		monkey({
			entry: "src/main.ts",
			userscript: {
				name: SCRIPT_NAME,
				namespace: "https://github.com/WhiteSevs/TamperMonkeyScript",
				supportURL: "https://github.com/WhiteSevs/TamperMonkeyScript/issues",
				version: VERSION,
				author: "WhiteSevs",
				"run-at": "document-start",
				license: "GPL-3.0-only",
				require: await GetLib(["CoverUMD", "pops"]),
				resource: {
					ElementPlusResourceCSS:
						"https://cdn.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css",
				},

				icon: "",
				description: "demo desc",
				match: ["*://*/*"],
				connect: ["*"],
				grant: [
					"GM_addStyle",
					"GM_registerMenuCommand",
					"GM_unregisterMenuCommand",
					"GM_getValue",
					"GM_setValue",
					"GM_deleteValue",
					"GM_xmlhttpRequest",
					"GM_info",
					"unsafeWindow",
					"GM_getResourceText",
				],
			},
			clientAlias: "ViteGM",
			server: {
				mountGmApi: false,
				open: true,
			},
			build: {
				autoGrant: true,
				fileName: FILE_NAME,
				externalGlobals: {
					qmsg: cdn.jsdelivr("Qmsg", "dist/index.umd.js"),
					"@whitesev/utils": cdn.jsdelivr("Utils", "dist/index.umd.js"),
					"@whitesev/domutils": cdn.jsdelivr("DOMUtils", "dist/index.umd.js"),
				},
				cssSideEffects: () => {
					return (cssText: string) => {
						function addStyle(cssText: string) {
							if (typeof cssText !== "string") {
								throw new TypeError("cssText must be a string");
							}
							let cssNode = document.createElement("style");
							cssNode.setAttribute("type", "text/css");
							cssNode.innerHTML = cssText;
							if (document.head) {
								/* 插入head最后 */
								document.head.appendChild(cssNode);
							} else if (document.body) {
								/* 插入body后 */
								document.body.appendChild(cssNode);
							} else if (document.documentElement.childNodes.length === 0) {
								/* 插入#html第一个元素后 */
								document.documentElement.appendChild(cssNode);
							} else {
								/* 插入head前面 */
								document.documentElement.insertBefore(
									cssNode,
									document.documentElement.childNodes[0]
								);
							}
							return cssNode;
						}
						// @ts-ignore
						if (typeof GM_addStyle == "function") {
							// @ts-ignore
							GM_addStyle(cssText);
							return;
						}
						addStyle(cssText);
					};
				},
			},
		}),
	],
	resolve: {
		alias: {
			"@": Utils.getAbsolutePath("./src"),
			"@pops": Utils.getAbsolutePath("./../../库/pops"),
		},
	},
	build: {
		/* 构建的.user.js是否压缩 */
		minify: isMinify,
		emptyOutDir: isEmptyOutDir,
	},
});
