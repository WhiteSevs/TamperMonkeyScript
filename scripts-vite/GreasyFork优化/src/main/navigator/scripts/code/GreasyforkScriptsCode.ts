import { $, addStyle, DOMUtils, httpx, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtil } from "@/utils/CommonUtil";
// @ts-ignore
import * as monaco from "https://fastly.jsdelivr.net/npm/monaco-editor@0.52.0/+esm";
import { unsafeWindow } from "ViteGM";

export const GreasyforkScriptsCode = {
	init() {
		PopsPanel.execMenuOnce("code-repairCodeLineNumber", () => {
			this.repairCodeLineNumber();
		});
		PopsPanel.execMenuOnce("code-use-monaco-editor", () => {
			this.coverEditorWithMonaco();
		});
	},
	/**
	 * 修复代码的行号显示不够问题
	 * 超过1w行不会高亮代码
	 */
	repairCodeLineNumber() {
		log.info("修复代码的行号显示不够问题");
		PopsPanel.execMenuOnce("beautifyGreasyforkBeautify", () => {
			/* 修复Greasyfork Beautify美化后的代码块 */
			addStyle(/*css*/ `
				.code-container pre code .marker{
					padding-left: 6px;
				}	
				`);
		});

		utils
			.waitNode<HTMLOListElement>(
				"#script-content div.code-container pre.prettyprint ol"
			)
			.then(($prettyPrintOL) => {
				if ($prettyPrintOL.childElementCount >= 1000) {
					log.success(
						`当前代码行数${$prettyPrintOL.childElementCount}行，超过1000行，优化行号显示问题`
					);
					addStyle(/*css*/ `
                    pre.prettyprint{
                        padding-left: 26px;
                    }
					`);
				}
			});
	},
	/**
	 * 使用monacoEditor替换编辑器
	 */
	coverEditorWithMonaco() {
		log.info(`使用monacoEditor替换编辑器`);
		addStyle(/*css*/ `
			@font-face {
				font-family: 'codicon';
				src: url('https://fastly.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs/base/browser/ui/codicons/codicon/codicon.ttf') format('truetype');
			}
			`);
		addStyle(/*css*/ `
			.monaco-editor{
				height: calc(100vh - 54px);
			}
			#script-info{
				padding-bottom: 0px !important;
			}
		`);
		CommonUtil.addBlockCSS("#script-content .code-container > pre");

		let $monacoScript = DOMUtils.createElement("script", {
			type: "module",
			innerHTML: `
			import * as monaco from "https://fastly.jsdelivr.net/npm/monaco-editor@0.52.0/+esm";
			window.monaco = monaco;
			window.dispatchEvent(new CustomEvent("monaco-editor-ready"));
			`,
		});
		DOMUtils.append(document.head || document.documentElement, $monacoScript);
		DOMUtils.append(document.head || document.documentElement, $monacoScript);
		DOMUtils.on(
			window,
			"monaco-editor-ready",
			async () => {
				// @ts-ignore
				let monaco = unsafeWindow.monaco;
				let response = await httpx.get(window.location.href, { fetch: true });
				if (!response.status) {
					return;
				}
				let doc = DOMUtils.parseHTML(response.data.responseText, true, true);
				let $originCodeContainer = doc.querySelector<HTMLElement>(
					"#script-content .code-container > pre"
				);
				if (!$originCodeContainer) {
					return;
				}
				let codeText = DOMUtils.text($originCodeContainer);
				DOMUtils.ready(async () => {
					let $codeContainer = await utils.waitNode<HTMLElement>(
						"#script-content .code-container > pre",
						10000
					);
					if (!$codeContainer) {
						return;
					}
					let $monacoEditor = DOMUtils.createElement("div", {
						className: "monaco-editor",
					});
					DOMUtils.after($codeContainer, $monacoEditor);
					monaco.editor.create($monacoEditor, {
						value: codeText,
						minimap: { enabled: true }, // 小地图
						automaticLayout: true, // 自动布局,
						codeLens: true,
						colorDecorators: true,
						contextmenu: true,
						readOnly: true, //是否只读
						formatOnPaste: true,
						overviewRulerBorder: true, // 滚动条的边框
						scrollBeyondLastLine: true,
						theme: "vs-dark", // 主题
						fontSize: window.innerWidth > 600 ? 14 : 12, // 字体
						wordWrap: "off", // 换行
						language: "javascript", // 语言
						folding: true, // 是否启用代码折叠
						foldingStrategy: "indentation", // 代码可分小段折叠
					});
				});
			},
			{ once: true }
		);
	},
};
