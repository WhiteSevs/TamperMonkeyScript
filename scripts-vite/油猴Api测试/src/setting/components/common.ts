import { DOMUtils, injectDocumentTime, log, utils } from "@/env";
import { UISwitch } from "../common-components/ui-switch";
import { UITextArea } from "../common-components/ui-textarea";
import { UISelect } from "../common-components/ui-select";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { ApiSupportTest } from "@/main/ApiSupportTest";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";

type ApiSupportUIConfig = {
	name: string;
	isSupport: boolean;
	leftAsideSelector: string;
};
export const Component_Common = (): PopsPanelContentConfig => {
	/** 支持的api名称列表 */
	let supportApiNameList: ApiSupportUIConfig[] = [];
	/** 不支持的api名称列表 */
	let notSupportApiNameList: ApiSupportUIConfig[] = [];
	let apiList: ApiSupportUIConfig[] = [
		{
			name: "unsafeWindow",
			isSupport: ApiSupportTest.unsafeWindow(),
			leftAsideSelector: "#aside-unsafewindow",
		},
		{
			name: "GM",
			isSupport: ApiSupportTest.GM(),
			leftAsideSelector: "",
		},
		{
			name: "GM_addElement",
			isSupport: ApiSupportTest.addElement(),
			leftAsideSelector: "#aside-GM_addElement",
		},
		{
			name: "GM.addElement",
			isSupport: ApiSupportTest.addElement_async(),
			leftAsideSelector: "#aside-GM_addElement",
		},
		{
			name: "GM_addStyle",
			isSupport: ApiSupportTest.addStyle(),
			leftAsideSelector: "#aside-GM_addStyle",
		},
		{
			name: "GM.addStyle",
			isSupport: ApiSupportTest.addStyle_async(),
			leftAsideSelector: "#aside-GM_addStyle",
		},
		{
			name: "GM_download",
			isSupport: ApiSupportTest.download(),
			leftAsideSelector: "#aside-GM_download",
		},
		{
			name: "GM.download",
			isSupport: ApiSupportTest.download_async(),
			leftAsideSelector: "#aside-GM_download",
		},
		{
			name: "GM_getResourceText",
			isSupport: ApiSupportTest.getResourceText(),
			leftAsideSelector: "#aside-GM_getResourceText",
		},
		{
			name: "GM.getResourceText",
			isSupport: ApiSupportTest.getResourceText_async(),
			leftAsideSelector: "#aside-GM_getResourceText",
		},
		{
			name: "GM_getResourceURL",
			isSupport: ApiSupportTest.getResourceUrl(),
			leftAsideSelector: "#aside-GM_getResourceURL",
		},
		{
			name: "GM.getResourceUrl",
			isSupport: ApiSupportTest.getResourceUrl_async(),
			leftAsideSelector: "#aside-GM_getResourceURL",
		},
		{
			name: "GM_info",
			isSupport: ApiSupportTest.info(),
			leftAsideSelector: "#aside-GM_info",
		},
		{
			name: "GM.info",
			isSupport: ApiSupportTest.info_async(),
			leftAsideSelector: "#aside-GM_info",
		},
		{
			name: "GM_log",
			isSupport: ApiSupportTest.log(),
			leftAsideSelector: "#aside-GM_log",
		},
		{
			name: "GM.log",
			isSupport: ApiSupportTest.log_async(),
			leftAsideSelector: "#aside-GM_log",
		},
		{
			name: "GM_notification",
			isSupport: ApiSupportTest.notification(),
			leftAsideSelector: "#aside-GM_notification",
		},
		{
			name: "GM.notification",
			isSupport: ApiSupportTest.notification_async(),
			leftAsideSelector: "#aside-GM_notification",
		},
		{
			name: "GM_openInTab",
			isSupport: ApiSupportTest.openInTab(),
			leftAsideSelector: "#aside-GM_openInTab",
		},
		{
			name: "GM.openInTab",
			isSupport: ApiSupportTest.openInTab_async(),
			leftAsideSelector: "#aside-GM_openInTab",
		},
		{
			name: "GM_registerMenuCommand",
			isSupport: ApiSupportTest.registerMenuCommand(),
			leftAsideSelector: "#aside-GM_registerMenuCommand",
		},
		{
			name: "GM.registerMenuCommand",
			isSupport: ApiSupportTest.registerMenuCommand_async(),
			leftAsideSelector: "#aside-GM_registerMenuCommand",
		},
		{
			name: "GM_unregisterMenuCommand",
			isSupport: ApiSupportTest.unregisterMenuCommand(),
			leftAsideSelector: "#aside-GM_unregisterMenuCommand",
		},
		{
			name: "GM.unregisterMenuCommand",
			isSupport: ApiSupportTest.unregisterMenuCommand_async(),
			leftAsideSelector: "#aside-GM_unregisterMenuCommand",
		},
		{
			name: "GM_setClipboard",
			isSupport: ApiSupportTest.setClipboard(),
			leftAsideSelector: "#aside-GM_setClipboard",
		},
		{
			name: "GM.setClipboard",
			isSupport: ApiSupportTest.setClipboard_async(),
			leftAsideSelector: "#aside-GM_setClipboard",
		},
		{
			name: "GM_getTab",
			isSupport: ApiSupportTest.getTab(),
			leftAsideSelector: "#aside-GM_getTab",
		},
		{
			name: "GM.getTab",
			isSupport: ApiSupportTest.getTab_async(),
			leftAsideSelector: "#aside-GM_getTab",
		},
		{
			name: "GM_saveTab",
			isSupport: ApiSupportTest.saveTab(),
			leftAsideSelector: "#aside-GM_saveTab",
		},
		{
			name: "GM.saveTab",
			isSupport: ApiSupportTest.saveTab_async(),
			leftAsideSelector: "#aside-GM_saveTab",
		},
		{
			name: "GM_getTabs",
			isSupport: ApiSupportTest.getTabs(),
			leftAsideSelector: "#aside-GM_getTabs",
		},
		{
			name: "GM.getTabs",
			isSupport: ApiSupportTest.getTabs_async(),
			leftAsideSelector: "#aside-GM_getTabs",
		},
		{
			name: "GM_setValue",
			isSupport: ApiSupportTest.setValue(),
			leftAsideSelector: "#aside-GM_setValue",
		},
		{
			name: "GM.setValue",
			isSupport: ApiSupportTest.setValue_async(),
			leftAsideSelector: "#aside-GM_setValue",
		},
		{
			name: "GM_getValue",
			isSupport: ApiSupportTest.getValue(),
			leftAsideSelector: "#aside-GM_getValue",
		},
		{
			name: "GM.getValue",
			isSupport: ApiSupportTest.getValue_async(),
			leftAsideSelector: "#aside-GM_getValue",
		},
		{
			name: "GM_deleteValue",
			isSupport: ApiSupportTest.deleteValue(),
			leftAsideSelector: "#aside-GM_deleteValue",
		},
		{
			name: "GM.deleteValue",
			isSupport: ApiSupportTest.deleteValue_async(),
			leftAsideSelector: "#aside-GM_deleteValue",
		},
		{
			name: "GM_listValues",
			isSupport: ApiSupportTest.listValues(),
			leftAsideSelector: "#aside-GM_listValues",
		},
		{
			name: "GM.listValues",
			isSupport: ApiSupportTest.listValues_async(),
			leftAsideSelector: "#aside-GM_listValues",
		},
		{
			name: "GM_setValues",
			isSupport: ApiSupportTest.setValues(),
			leftAsideSelector: "#aside-GM_setValues",
		},
		{
			name: "GM.setValues",
			isSupport: ApiSupportTest.setValues_async(),
			leftAsideSelector: "#aside-GM_setValues",
		},
		{
			name: "GM_getValues",
			isSupport: ApiSupportTest.getValues(),
			leftAsideSelector: "#aside-GM_getValues",
		},
		{
			name: "GM.getValues",
			isSupport: ApiSupportTest.getValues_async(),
			leftAsideSelector: "#aside-GM_getValues",
		},
		{
			name: "GM_deleteValues",
			isSupport: ApiSupportTest.deleteValues(),
			leftAsideSelector: "#aside-GM_deleteValues",
		},
		{
			name: "GM.deleteValues",
			isSupport: ApiSupportTest.deleteValues_async(),
			leftAsideSelector: "#aside-GM_deleteValues",
		},
		{
			name: "GM_addValueChangeListener",
			isSupport: ApiSupportTest.addValueChangeListener(),
			leftAsideSelector: "#aside-GM_addValueChangeListener",
		},
		{
			name: "GM.addValueChangeListener",
			isSupport: ApiSupportTest.addValueChangeListener_async(),
			leftAsideSelector: "#aside-GM_addValueChangeListener",
		},
		{
			name: "GM_removeValueChangeListener",
			isSupport: ApiSupportTest.removeValueChangeListener(),
			leftAsideSelector: "#aside-GM_removeValueChangeListener",
		},
		{
			name: "GM.removeValueChangeListener",
			isSupport: ApiSupportTest.removeValueChangeListener_async(),
			leftAsideSelector: "#aside-GM_removeValueChangeListener",
		},
		{
			name: "GM_xmlhttpRequest",
			isSupport: ApiSupportTest.xmlHttpRequest(),
			leftAsideSelector: "#aside-GM_xmlhttpRequest",
		},
		{
			name: "GM.xmlHttpRequest",
			isSupport: ApiSupportTest.xmlHttpRequest_async(),
			leftAsideSelector: "#aside-GM_xmlhttpRequest",
		},
		{
			name: "GM_webRequest",
			isSupport: ApiSupportTest.webRequest(),
			leftAsideSelector: "#aside-GM_webRequest",
		},
		{
			name: "GM.webRequest",
			isSupport: ApiSupportTest.webRequest_async(),
			leftAsideSelector: "#aside-GM_webRequest",
		},
		{
			name: "GM_cookie",
			isSupport: ApiSupportTest.cookie(),
			leftAsideSelector: "#aside-GM_cookie",
		},
		{
			name: "GM.cookie",
			isSupport: ApiSupportTest.cookie_async(),
			leftAsideSelector: "#aside-GM_cookie",
		},
	];
	apiList.forEach((api) => {
		if (api.isSupport) {
			supportApiNameList.push(api);
		} else {
			notSupportApiNameList.push(api);
		}
	});
	/**
	 * create element
	 */
	let createFeatureItem = (config: ApiSupportUIConfig) => {
		let $item = DOMUtils.createElement("div", {
			className: "gm-api-features-item",
			innerHTML: /*html*/ `
				<div class="gm-api-features-item__label">${config.name}</div>
				<div class="gm-api-features-item__value">
					<span style="font-size: 16px; font-weight: 700;">
						${
							config.isSupport
								? /*html*/ `
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor">
								<path d="M448 71.9c-17.3-13.4-41.5-9.3-54.1 9.1L214 344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8-15.6 15.5-16.4 41.6-1.7 58.1 0 0 120.4 133.6 137.7 147 17.3 13.4 41.5 9.3 54.1-9.1l206.3-301.7c12.6-18.5 8.7-44.2-8.6-57.5z" fill="#3b9f04"></path>
							</svg>
						`
								: /*html*/ `
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor">
								<path fill="#FF473E" d="m330.443 256l136.765-136.765c14.058-14.058 14.058-36.85 0-50.908l-23.535-23.535c-14.058-14.058-36.85-14.058-50.908 0L256 181.557L119.235 44.792c-14.058-14.058-36.85-14.058-50.908 0L44.792 68.327c-14.058 14.058-14.058 36.85 0 50.908L181.557 256L44.792 392.765c-14.058 14.058-14.058 36.85 0 50.908l23.535 23.535c14.058 14.058 36.85 14.058 50.908 0L256 330.443l136.765 136.765c14.058 14.058 36.85 14.058 50.908 0l23.535-23.535c14.058-14.058 14.058-36.85 0-50.908L330.443 256z"></path>
							</svg>
						`
						}
						
					</span>
				</div>
			`,
		});
		DOMUtils.on($item, "click", (event) => {
			utils.preventEvent(event);
			if (utils.isNotNull(config.leftAsideSelector)) {
				let shadowRoot = $item.getRootNode() as ShadowRoot;
				let $left = shadowRoot.querySelector<HTMLElement>(
					config.leftAsideSelector
				);
				if ($left) {
					$left.click();
					$left.scrollIntoView({ behavior: "smooth" });
				}
			}
		});
		return $item;
	};
	return {
		id: "component-common",
		title: "通用",
		scrollToDefaultView: true,
		isDefault() {
			return (
				StorageApi.get(PanelKeyConfig.asideLastVisit) === "component-common"
			);
		},
		callback(data) {
			StorageApi.set(PanelKeyConfig.asideLastVisit, "component-common");
		},
		forms: [
			{
				type: "forms",
				text: "@run-at document-start",
				forms: [
					UIInfo(() => {
						return {
							text: CommonUtil.escapeHtml(injectDocumentTime),
							tag: "info",
						};
					}),
				],
			},
			{
				type: "forms",
				text: "特性",
				afterAddToUListCallBack(formConfig, container) {
					container.formHeaderDivElement!.style.fontSize = "1.2em";
					container.formHeaderDivElement!.style.fontWeight = "700";
				},
				forms: [],
			},
			{
				type: "forms",
				text: "不支持列表",
				afterAddToUListCallBack(formConfig, container) {
					container.formHeaderDivElement!.style.color = "rgb(216, 30, 6)";
					container.formHeaderDivElement!.style.fontWeight = "600";
					if (notSupportApiNameList.length === 0) {
						container.formContainerListElement?.remove();
					}
				},
				forms: [
					{
						type: "own",
						getLiElementCallBack(liElement) {
							let $container = DOMUtils.createElement("div", {
								className: "gm-api-features-not-support",
							});
							let $fragment = document.createDocumentFragment();
							notSupportApiNameList.forEach((config) => {
								$fragment.append(createFeatureItem(config));
							});
							$container.appendChild($fragment);
							liElement.appendChild($container);
							return liElement;
						},
					},
				],
			},
			{
				type: "forms",
				text: "支持列表",
				afterAddToUListCallBack(formConfig, container) {
					container.formHeaderDivElement!.style.fontWeight = "600";
					if (supportApiNameList.length === 0) {
						container.formContainerListElement?.remove();
					}
				},
				forms: [
					{
						type: "own",
						getLiElementCallBack(liElement) {
							let $container = DOMUtils.createElement("div", {
								className: "gm-api-features-support",
							});
							let $fragment = document.createDocumentFragment();
							supportApiNameList.forEach((config) => {
								$fragment.append(createFeatureItem(config));
							});
							$container.appendChild($fragment);
							liElement.appendChild($container);
							return liElement;
						},
					},
				],
			},
		],
	} as PopsPanelContentConfig;
};
