import { DOMUtils, GM_cookie, log, pops, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import CryptoJS from "crypto-js";
import Qmsg from "qmsg";
import { CookieManagerView } from "../CookieManagerView";
import { CookieManager } from "../CookieManager";
import { CookieManagerService, type CookieManagerApiName } from "../CookieManagerService";

/**
 * Cookie备份类型
 */
type CookieFormatType = "header_string" | "json";
/**
 * Cookie导入类型
 */
type CookieImportType = "import_from_text" | "import_from_file";
/**
 * Cookie导出的类型
 */
type CookieExportObject = {
	api: CookieManagerApiName;
	data: (CookieStoreData | GMCookieInstance)[];
};

export const CookieBackUpManager = {
	/**
	 * 加密
	 * @param text 要加密的文本
	 * @param secretKey 密钥
	 */
	encrypt(text: string, secretKey: string) {
		return CryptoJS.AES.encrypt(text, secretKey).toString();
	},
	/**
	 * 解密
	 * @param text 要解密的文本
	 * @param secretKey 密钥
	 */
	decrypt(text: string, secretKey: string) {
		const bytes = CryptoJS.AES.decrypt(text, secretKey);
		return bytes.toString(CryptoJS.enc.Utf8);
	},
	/**
	 * 格式化导出的cookie
	 */
	formatCookie(cookie: (CookieStoreData | GMCookieInstance)[], type: CookieFormatType, encodePwd?: string) {
		let cookieText = "";
		if (type === "header_string") {
			cookieText = cookie
				.map((it) => {
					let cookieValue = it.value;
					return `${it.name}=${cookieValue}; `;
				})
				.join("");
		} else if (type === "json") {
			cookieText = JSON.stringify(
				{
					api: CookieManager.cookieManagerApiName,
					hostname: window.location.hostname,
					data: cookie,
				},
				null,
				2
			);
		} else {
			throw new Error("不支持的格式化类型：" + type);
		}
		if (encodePwd) {
			cookieText = this.encrypt(cookieText, encodePwd);
		}
		return cookieText;
	},
	/**
	 * 显示导出弹窗
	 */
	showExportDialog() {
		let $confirm = pops.confirm({
			title: {
				text: "导出 Cookie",
				position: "center",
			},
			content: {
				text: /*html*/ `
						<p class="tip-text cookie-format-type-tip-text">您希望以哪种格式导出 Cookie？</p>
						<div class="cookie-format-type-container">
							<div class="cookie-format-type-item">
								<input id="cookie-format-header_string" type="radio" name="format" value="header_string">
								<label for="cookie-format-header_string">Header String</label>
							</div>
							<div class="cookie-format-type-item">
								<input id="cookie-format-json" type="radio" name="format" value="json">
								<label for="cookie-format-json">JSON</label>
							</div>
						</div>
						<p class="tip-text export-example-code-tip-text">示例</p>
						<div class="export-example-code-text-container">
							<pre></pre>
						</div>
						<div class="cookir-format-encode-pwd-container">
							<label for="hostOnly">用于加密 Cookie 的密码</label>
							<input id="encode-pwd" type="password" placeholder="用于加密 Cookie 的密码" value="">
							<p>如果您希望在导出前加密 Cookie，请输入密码（可选）。</p>
						</div>
					`,
				html: true,
			},
			width: window.innerWidth < 400 ? "88vw" : "400px",
			height: "auto",
			btn: {
				merge: true,
				position: "space-between",
				ok: {
					text: "导出",
					async callback(eventDetails, event) {
						let cookieList = CookieManagerView.$data.cookieList;
						if (cookieList.length === 0) {
							Qmsg.warning("Cookie为空");
							return;
						}
						let cookieText = CookieBackUpManager.formatCookie(
							cookieList,
							dialogConfig.exportType,
							dialogConfig.encodePwd
						);
						const blob = new Blob([cookieText], { type: "text/plain" });
						const url = URL.createObjectURL(blob);
						let $anchor = DOMUtils.createElement("a", {
							download: `${window.location.hostname}_${dialogConfig.exportType}_${
								CookieManager.cookieManagerApiName
							}_${Date.now()}.txt`,
							href: url,
							target: "_blank",
						});
						$anchor.click();
						setTimeout(() => {
							URL.revokeObjectURL(url);
						}, 500);
						eventDetails.close();
					},
				},
				other: {
					enable: true,
					text: "导出至剪贴板",
					type: "xiaomi-primary",
					async callback(eventDetails, event) {
						let cookieList = CookieManagerView.$data.cookieList;
						if (cookieList.length === 0) {
							Qmsg.warning("Cookie为空");
							return;
						}
						let cookieText = CookieBackUpManager.formatCookie(
							cookieList,
							dialogConfig.exportType,
							dialogConfig.encodePwd
						);
						const status = await utils.setClip(cookieText);
						if (status) {
							Qmsg.success("复制成功");
						} else {
							Qmsg.error("复制失败");
						}
						eventDetails.close();
					},
				},
			},
			style: /*css*/ `
					${pops.config.cssText.panelCSS}

					.pops-content{
						padding: 20px;
					}
					.cookie-format-type-container{
						display: flex;
						gap: 10px;
						margin: 10px 0px;
						align-items: center;
						flex-wrap: wrap;
						justify-content: space-between;
					}
					.cookie-format-type-item input[type="radio"]{
						width: 1rem;
						height: 1rem;
					}
					.export-example-code-text-container{
						padding: 10px;
						background-color: rgb(209 213 219 / 1);
						border-radius: 10px;
						width: 100%;
						margin: 1rem 0px;
					}
					.export-example-code-text-container pre{
						font-feature-settings: normal;
						font-variation-settings: normal;
						font-size: 1em;
						margin: 0;
						white-space: break-spaces;
					}
					.cookie-format-type-container label{
						color: rgb(17 24 39 / 1);
					}
					.cookir-format-encode-pwd-container label{
						color: #111827;
					}
					.cookie-format-type-tip-text,
					.export-example-code-tip-text,
					.cookir-format-encode-pwd-container label{
						font-weight: 600;
					}
					.cookir-format-encode-pwd-container input{
						border-radius: 0.5rem;
						width: 100%;
						border: 1px solid #d1d5db;
						background-color: #f9fafb;
						padding: 0.625rem;
						margin: 0.65rem 0px;
						font-size: 12px;
						color: #111827;
					}
					.cookir-format-encode-pwd-container p{
    					color: #6b7280;
						font-size: 12px;
					}
				`,
		});
		let $exampleCodeText = $confirm.$shadowRoot.querySelector(
			".export-example-code-text-container pre"
		) as HTMLParagraphElement;
		let $format_header_string = $confirm.$shadowRoot.querySelector(
			"#cookie-format-header_string"
		) as HTMLInputElement;
		let $format_json = $confirm.$shadowRoot.querySelector("#cookie-format-json") as HTMLInputElement;
		let $encodePwd = $confirm.$shadowRoot.querySelector("#encode-pwd") as HTMLInputElement;

		const DialogConfigManager = {
			key: "cookie-backup-export-dialog-config",
			getConfig() {
				return Panel.getValue(this.key, {
					exportType: "header_string" as CookieFormatType,
					encodePwd: "",
				});
			},
			saveConfig() {
				let exportType: CookieFormatType = "header_string";
				if ($format_json.checked) {
					exportType = "json";
				}
				Panel.setValue(this.key, {
					exportType: exportType,
					encodePwd: DOMUtils.val($encodePwd),
				});
				dialogConfig = this.getConfig();
			},
		};

		let dialogConfig = DialogConfigManager.getConfig();
		// 导出格式 - header_string
		DOMUtils.on($format_header_string, "input", () => {
			const exampleCooikieList: CookieStoreData[] = [
				{
					name: "_ga",
					value: "GA1.2.123456789.987654321",
					domain: window.location.hostname,
					expires: Date.now() + 1000 * 60 * 60 * 24 * 30,
					partitioned: false,
					path: "/",
					sameSite: "unspecified",
					secure: false,
				},
				{
					name: "PHPSESSID",
					value: "28f2d88ee9322cfd2e4f1e",
					domain: window.location.hostname,
					expires: Date.now() + 1000 * 60 * 60 * 24 * 30,
					partitioned: false,
					path: "/",
					sameSite: "unspecified",
					secure: false,
				},
				{
					name: "csrftoken",
					value: "abcdef123456",
					domain: window.location.hostname,
					expires: Date.now() + 1000 * 60 * 60 * 24 * 30,
					partitioned: false,
					path: "/",
					sameSite: "unspecified",
					secure: false,
				},
				{
					name: "logged_in",
					value: "true",
					domain: window.location.hostname,
					expires: Date.now() + 1000 * 60 * 60 * 24 * 30,
					partitioned: false,
					path: "/",
					sameSite: "unspecified",
					secure: false,
				},
			];
			let exampleText = this.formatCookie(exampleCooikieList, "header_string");
			DOMUtils.text($exampleCodeText, exampleText);
			DialogConfigManager.saveConfig();
		});
		// 导出格式 - json
		DOMUtils.on($format_json, "input", () => {
			const exampleCooikieList: GMCookieInstance[] = [
				{
					name: "sessionId",
					value: "abc123xyz456",
					domain: ".example.com",
					path: "/",
					secure: true,
					httpOnly: true,
					sameSite: "lax",
					expirationDate: 1713543600,
					hostOnly: false,
					session: false,
				},
			];
			let exampleText = this.formatCookie(exampleCooikieList, "json");
			DOMUtils.text($exampleCodeText, exampleText);
			DialogConfigManager.saveConfig();
		});
		// 加密密码
		DOMUtils.on($encodePwd, ["input", "propertychange"], () => {
			DialogConfigManager.saveConfig();
		});

		// 初始化操作
		if (dialogConfig.exportType === "header_string") {
			$format_header_string.click();
		} else if (dialogConfig.exportType === "json") {
			$format_json.click();
		}
		DOMUtils.val($encodePwd, dialogConfig.encodePwd);
	},
	/**
	 * 显示导入弹窗
	 */
	showImportDialog() {
		let $confirm = pops.confirm({
			title: {
				text: "导入 Cookie",
				position: "center",
			},
			content: {
				text: /*html*/ `
						<p class="tip-text cookie-format-type-tip-text">您希望如何导入？</p>
						<div class="import-cookie-type-container">
							<div class="import-cookie-type-item">
								<input id="import-cookie-import_from_text" type="radio" name="format" value="import_from_text">
								<label for="import-cookie-import_from_text">Use text</label>
							</div>
							<div class="import-cookie-type-item">
								<input id="import-cookie-import_from_file" type="radio" name="format" value="import_from_file">
								<label for="import-cookie-import_from_file">Use a file</label>
							</div>
						</div>
						<div class="import-cookie-value-container">
							<div class="import-cookie-value-text">
								<label>Cookie value</label>
								<textarea rows="5" placeholder="Header string/JSON"></textarea>
							</div>
							<div class="import-cookie-value-file">
								<label>选择要导入的文件</label>
								<input accept=".txt, .json" type="file">
							</div>
						</div>
						<div class="cookie-format-decode-pwd-container">
							<label for="hostOnly">用于解密 Cookie 的密码</label>
							<input id="decode-pwd" type="password" placeholder="用于解密 Cookie 的密码" value="">
							<p>如果 Cookie 受加密保护，请输入解密密码（可选）。</p>
						</div>
					`,
				html: true,
			},
			width: window.innerWidth < 400 ? "88vw" : "400px",
			height: "auto",
			btn: {
				ok: {
					text: "导入",
					async callback(eventDetails, event) {
						try {
							const decodePwd = dialogConfig.decodePwd;
							let cookieListStr = dialogConfig.value;
							if (decodePwd.trim() === "") {
								// 无密码
							} else {
								cookieListStr = CookieBackUpManager.decrypt(cookieListStr, decodePwd);
							}
							const cookie: CookieExportObject | CookieExportObject["data"] = utils.toJSON(cookieListStr);
							if (Array.isArray(cookie)) {
								// 纯数组格式
								// 以当前的apiName为准
								// [{...},{...},...]
								log.info(`使用${CookieManager.cookieManagerApiName}导入cookie数据`);
								for (const cookieInfo of cookie) {
									await CookieManager.updateCookie(cookieInfo);
								}
							} else if (
								typeof cookie === "object" &&
								Object.keys(cookie).length &&
								Array.isArray(cookie["data"])
							) {
								// 对象格式
								// {api:"",data: [{...},{...},...]}
								const cookieManager = new CookieManagerService(cookie.api);
								log.info(`使用${cookieManager.cookieManagerApiName}导入cookie数据`);
								for (const cookieInfo of cookie.data) {
									await cookieManager.updateCookie(cookieInfo);
								}
							} else if (typeof cookie === "object" && !Object.keys(cookie).length) {
								// header_string类型
								let utilsCookieManager = new utils.GM_Cookie();
								log.info(`使用${CookieManager.cookieManagerApiName}导入cookie数据`);
								let cookieObj = utilsCookieManager.parseCookie(cookieListStr);
								for (const cookieInfo of cookieObj) {
									await CookieManager.updateCookie({
										name: cookieInfo.key,
										value: cookieInfo.value,
										domain: window.location.hostname,
										path: "/",
										sameSite: "unspecified",
										secure: false,
										session: false,
										hostOnly: true,
										httpOnly: false,
									});
								}
							} else {
								log.error(cookieListStr, cookie);
								Qmsg.error("cookie格式不符合");
								return;
							}
							eventDetails.close();
						} catch (error: any) {
							Qmsg.error(error.toString());
						}
					},
				},
			},
			style: /*css*/ `
					${pops.config.cssText.panelCSS}

					.pops-content{
						padding: 20px;
					}
					.import-cookie-type-container{
						display: flex;
						gap: 10px;
						margin: 10px 0px;
						align-items: center;
						flex-wrap: wrap;
						justify-content: space-between;
					}
					.import-cookie-type-item input[type="radio"]{
						width: 1rem;
						height: 1rem;
					}
					.export-example-code-text-container{
						padding: 10px;
						background-color: rgb(209 213 219 / 1);
						border-radius: 10px;
						width: 100%;
						margin: 1rem 0px;
					}
					.export-example-code-text-container pre{
						font-feature-settings: normal;
						font-variation-settings: normal;
						font-size: 1em;
						margin: 0;
						white-space: break-spaces;
					}
					.import-cookie-type-container label{
						color: rgb(17 24 39 / 1);
					}
					.cookie-format-decode-pwd-container label{
						color: #111827;
					}
					.import-cookie-value-text label,
					.import-cookie-value-file label,
					.cookie-format-type-tip-text,
					.cookie-format-decode-pwd-container label{
						font-weight: 600;
					}
					.cookie-format-decode-pwd-container input{
						border-radius: 0.5rem;
						width: 100%;
						border: 1px solid #d1d5db;
						background-color: #f9fafb;
						padding: 0.625rem;
						margin: 0.65rem 0px;
						font-size: 12px;
						color: #111827;
					}
					.cookie-format-decode-pwd-container p{
    					color: #6b7280;
						font-size: 12px;
					}

					.import-cookie-value-text{
						display: flex;
						flex-direction: column;
					}
					.import-cookie-value-text label{

					}
					.import-cookie-value-text textarea{
						font-size: 0.875rem;
						line-height: 1.25rem;
						padding: 0.625rem;
						color: rgb(17 24 39 / 1);
						background-color: rgb(249 250 251 / 1);
						border: 1px solid rgb(209 213 219 / 1);
						border-radius: 0.5rem;
						width: 100%;
						margin: 10px 0px;
					}
					.import-cookie-value-file{
						display: flex;
						flex-direction: column;
					}
					.import-cookie-value-file label{

					}
					.import-cookie-value-file input{
						border: 1px solid #d1d5db;
						border-radius: 0.5rem;
						height: 2.25rem;
						width: 100%;
						margin: 1rem 0px;
					}
					.import-cookie-value-file input:hover,					
					.import-cookie-value-file input::file-selector-button:hover{
						cursor: pointer;
					}
					.import-cookie-value-file input::file-selector-button{
						background-color: #1E2939;
						color: #ffffff;
						height: 100%;
						box-sizing: border-box;
					}
					.import-cookie-value-file input::file-selector-button:hover{
						background-color: #364153;
					}
				`,
		});
		let import_file_text = "";
		let $import_cookie_from_text = $confirm.$shadowRoot.querySelector(
			"#import-cookie-import_from_text"
		) as HTMLInputElement;
		let $import_cookie_from_file = $confirm.$shadowRoot.querySelector(
			"#import-cookie-import_from_file"
		) as HTMLInputElement;
		let $importContainer = $confirm.$shadowRoot.querySelector(
			".import-cookie-value-container"
		) as HTMLDivElement;
		let $importContainer_text = $confirm.$shadowRoot.querySelector(
			".import-cookie-value-text"
		) as HTMLDivElement;
		let $import_text = $importContainer_text.querySelector("textarea") as HTMLTextAreaElement;
		let $importContainer_file = $confirm.$shadowRoot.querySelector(
			".import-cookie-value-file"
		) as HTMLDivElement;
		let $import_file = $importContainer_file.querySelector("input") as HTMLInputElement;
		let $decodePwd = $confirm.$shadowRoot.querySelector("#decode-pwd") as HTMLInputElement;

		const DialogConfigManager = {
			key: "cookie-backup-import-dialog-config",
			getConfig() {
				let config = Panel.getValue(this.key, {
					importType: "import_from_text" as CookieImportType,
					decodePwd: "",
					value: "",
				});
				if (config.importType === "import_from_text") {
					config.value = $import_text.value;
				} else if (config.importType === "import_from_file") {
					config.value = import_file_text;
				}
				return config;
			},
			saveConfig() {
				let importType: CookieImportType = "import_from_text";
				if ($import_cookie_from_file.checked) {
					importType = "import_from_file";
				}
				Panel.setValue(this.key, {
					importType,
					decodePwd: DOMUtils.val($decodePwd),
				});
				dialogConfig = this.getConfig();
			},
		};

		let dialogConfig = DialogConfigManager.getConfig();

		// 导入格式 - header_string
		DOMUtils.on($import_cookie_from_text, "input", () => {
			DialogConfigManager.saveConfig();
			$import_file.value = "";
			import_file_text = "";
			DOMUtils.hide($importContainer_file, false);
			DOMUtils.show($importContainer_text, false);
		});
		// 导入格式 - json
		DOMUtils.on($import_cookie_from_file, "input", () => {
			DialogConfigManager.saveConfig();
			$import_text.value = "";
			DOMUtils.hide($importContainer_text, false);
			DOMUtils.show($importContainer_file, false);
		});
		// 值输入框
		DOMUtils.on(
			$import_text,
			["input", "propertychange"],
			utils.debounce(() => {
				DialogConfigManager.saveConfig();
			})
		);
		// 文件选择框
		DOMUtils.on($import_file, ["change", "input"], (evt) => {
			const file = $import_file.files?.[0];
			if (file) {
				const reader = new FileReader();
				reader.onload = function (e) {
					const content = e!.target!.result;
					if (typeof content === "string") {
						import_file_text = content;
						DialogConfigManager.saveConfig();
					}
				};
				reader.readAsText(file);
			}
		});
		// 加密密码
		DOMUtils.on($decodePwd, ["input", "propertychange"], async (evt) => {
			DialogConfigManager.saveConfig();
		});

		// 初始化操作
		if (dialogConfig.importType === "import_from_text") {
			$import_cookie_from_text.click();
		} else if (dialogConfig.importType === "import_from_file") {
			$import_cookie_from_file.click();
		}
		DOMUtils.val($decodePwd, dialogConfig.decodePwd);
	},
};
