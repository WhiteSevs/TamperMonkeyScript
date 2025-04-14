import { GreasyforkApi } from "@/api/GreasyForkApi";
import { addStyle, DOMUtils, httpx, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtil } from "@/utils/CommonUtil";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import { GreasyforkUtils } from "@/utils/GreasyforkUtils";
import Qmsg from "qmsg";

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
			.monaco-editor{
				height: calc(100vh - 54px);
			}
			#script-info{
				padding-bottom: 0px !important;
			}
		`);
		CommonUtil.addBlockCSS("#script-content .code-container > pre");

		GreasyforkUtils.monacoEditor().then(async (monaco) => {
			let scriptId = GreasyforkUrlUtils.getScriptId(window.location.href);
			if (!scriptId) {
				Qmsg.error("未解析出当前脚本ID", { consoleLogContent: true });
				return;
			}
			let scriptInfo = await GreasyforkApi.getScriptInfo(scriptId);
			let code_url = scriptInfo?.code_url;
			if (!code_url) {
				Qmsg.error("请求结果中未解析出脚本代码URL", {
					consoleLogContent: true,
				});
				return;
			}
			let searchParams = new URLSearchParams(window.location.search);
			if (searchParams.has("version")) {
				//  历史代码页面
				let version = searchParams.get("version")!;
				code_url = code_url.replace(
					new RegExp(`/${scriptId}(/[\\d]+|)`),
					`/${scriptId}/${version}`
				);
				log.info(`当前是历史代码页面，请求的脚本代码URL为${code_url}`);
			}
			let code_text_response = await httpx.get(code_url, {
				timeout: 20000,
			});
			if (!code_text_response.status) {
				return;
			}
			let code_text = code_text_response.data.responseText;
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
					value: code_text,
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
		});
	},
};
