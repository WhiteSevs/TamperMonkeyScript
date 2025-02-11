import { DOMUtils, injectDocumentTime, log, utils } from "@/env";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIInfo } from "../common-components/ui-info";
import { CommonUtil } from "@/utils/CommonUtil";
import { StorageApi } from "@/main/StorageApi";
import { PanelKeyConfig } from "../panel-key-config";
import { GMTotal } from "@/main/GMTotal";

type ApiSupportUIConfig = {
	name: string;
	isSupport: boolean;
	leftTargetSelector?: string;
};
export const Component_Common = (): PopsPanelContentConfig => {
	/** 支持的api名称列表 */
	let supportApiNameList: ApiSupportUIConfig[] = [];
	/** 不支持的api名称列表 */
	let notSupportApiNameList: ApiSupportUIConfig[] = [];
	Object.keys(GMTotal).forEach((keyName) => {
		let value = GMTotal[keyName as keyof typeof GMTotal];
		let apiName = value.getApiName();
		let isSupport = value.isSupport();
		let apiAsyncInfo = value.getAsyncApiOption();
		if (isSupport) {
			supportApiNameList.push({
				name: apiName,
				isSupport: isSupport,
			});
		} else {
			notSupportApiNameList.push({
				name: apiName,
				isSupport: isSupport,
			});
		}
		if (apiAsyncInfo) {
			if (apiAsyncInfo.isSupport) {
				supportApiNameList.push({
					name: apiAsyncInfo.name,
					isSupport: apiAsyncInfo.isSupport,
					leftTargetSelector: "#aside-" + apiName,
				});
			} else {
				notSupportApiNameList.push({
					name: apiAsyncInfo.name,
					isSupport: apiAsyncInfo.isSupport,
					leftTargetSelector: "#aside-" + apiName,
				});
			}
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
			let shadowRoot = $item.getRootNode() as ShadowRoot;
			let selector = utils.isNotNull(config.leftTargetSelector)
				? config.leftTargetSelector
				: "#aside-" + config.name;
			let $left = shadowRoot.querySelector<HTMLElement>(selector);
			if ($left) {
				$left.click();
				$left.scrollIntoView({ behavior: "smooth" });
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
				text: "@run-at document-start<br>注：注入速度等级越低，注入的速度越快",
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
