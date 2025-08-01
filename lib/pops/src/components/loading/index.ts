import { GlobalConfig } from "../../config/GlobalConfig";
import { PopsElementHandler } from "../../handler/PopsElementHandler";
import { PopsHandler } from "../../handler/PopsHandler";
import { PopsCSS } from "../../PopsCSS";
import { popsDOMUtils } from "../../utils/PopsDOMUtils";
import { popsUtils } from "../../utils/PopsUtils";
import { PopsLoadingConfig } from "./config";
import type { PopsLoadingDetails } from "./types";

export const PopsLoading = {
	init(details: PopsLoadingDetails) {
		let config = PopsLoadingConfig();
		config = popsUtils.assign(config, GlobalConfig.getGlobalConfig());
		config = popsUtils.assign(config, details);
		let guid = popsUtils.getRandomGUID();
		const PopsType = "loading";

		config = PopsHandler.handleOnly(PopsType, config);

		// 先把z-index提取出来
		let zIndex = PopsHandler.handleZIndex(config.zIndex);
		let maskHTML = PopsElementHandler.createMask(guid, zIndex);

		let { contentPStyle } = PopsElementHandler.createContentStyle("loading", config);
		let animHTML = PopsElementHandler.createAnim(
			guid,
			PopsType,
			config,
			/*html*/ `
            <div class="pops-content pops-${PopsType}-content">${
							config.addIndexCSS
								? /*html*/ `
                <style data-model-name="index">${PopsCSS.index}</style>
                <style data-model-name="anim">${PopsCSS.anim}</style>
                <style data-model-name="common">${PopsCSS.common}</style>
                `
								: ""
						}
                <style data-model-name="loadingCSS">
                    ${PopsCSS.loadingCSS}
                </style>
            ${config.style != null ? `<style>${config.style}</style>` : ""}
            	<p pops class="pops-${PopsType}-content-text" style="${contentPStyle}">${config.content.text}</p>
            </div>`,
			"",
			zIndex
		);

		/**
		 * 弹窗的主元素，包括动画层
		 */

		let $anim = PopsElementHandler.parseElement<HTMLDivElement>(animHTML);

		let { popsElement: $pops } = PopsHandler.handleQueryElement($anim, PopsType);
		/**
		 * 遮罩层元素
		 */
		let $mask: HTMLDivElement | null = null;
		/**
		 * 已创建的元素列表
		 */
		let elementList: HTMLElement[] = [$anim];

		if (config.mask.enable) {
			// 创建遮罩层
			let _handleMask_ = PopsHandler.handleMask({
				type: PopsType,
				guid: guid,

				config: config,
				animElement: $anim,
				maskHTML: maskHTML,
			});
			$mask = _handleMask_.maskElement;
			elementList.push($mask);
		}
		let eventDetails = PopsHandler.handleLoadingEventDetails(guid, PopsType, $anim, $pops!, $mask!, config);
		popsDOMUtils.append(config.parent, elementList);
		if ($mask != null) {
			$anim.after($mask);
		}
		PopsHandler.handlePush(PopsType, {
			guid: guid,
			animElement: $anim,
			popsElement: $pops!,
			maskElement: $mask!,
		} as any);

		if (config.isAbsolute) {
			// 遮罩层必须是跟随主内容
			// 即设置主内容position: relative，mask：position: absolute
			popsDOMUtils.css($anim, "position", "absolute !important");
			$mask && popsDOMUtils.css($mask, "position", "absolute !important");
		}
		let result = PopsHandler.handleResultDetails(eventDetails);
		return result;
	},
};
