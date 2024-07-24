import { BilibiliData } from "@/data/BlibiliData";
import { DOMUtils, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { BilibiliRecommend } from "./BilibiliRecommend";

export const BilibiliHead = {
	init() {
		PopsPanel.execMenuOnce(
			"bili-head-supplementaryVideoStreamingInformation",
			() => {
				this.addVideoListUPInfo();
			}
		);
		PopsPanel.execMenu("bili-head-recommend-enable", () => {
			BilibiliRecommend.init();
		});
	},
	/**
	 * 添加视频列表UP主信息
	 */
	addVideoListUPInfo() {
		log.info("添加视频列表UP主信息");
		addStyle(/*css*/ `
		${BilibiliData.className.head} .video-list .card-box .gm-up-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: var(--pd-width);
		}
		${BilibiliData.className.head} .video-list .card-box .gm-up-info .gm-up-name {
			display: flex;
			align-items: center;
			font-size: 2.4vmin;
			color: #999A9E;
		}
		${BilibiliData.className.head} .video-list .card-box .gm-up-info .gm-up-name svg {
			margin-right: calc(var(--pd-width) / 2);
		}
		${BilibiliData.className.head} .gm-video-duration{
			margin: 0 auto;
		}
        `);
		utils
			.waitNode<HTMLDivElement>(
				BilibiliData.className.head + " .video-list .card-box"
			)
			.then(() => {
				let lockFunc = new utils.LockFunction(() => {
					document
						.querySelectorAll<HTMLDivElement>(
							BilibiliData.className.head + " .video-list .card-box .v-card"
						)
						.forEach(($vcard) => {
							let vueObj = BilibiliUtils.getVue($vcard);
							let upName = (vueObj?.info?.author?.name ||
								vueObj?.info?.owner?.name) as string | undefined;
							let duration = vueObj?.info?.duration as
								| string
								| number
								| undefined;

							if (upName && !$vcard.querySelector(".gm-up-info")) {
								/* up主名 */
								let $upInfo = document.createElement("div");
								$upInfo.innerHTML = /*html*/ `
                                    <div class="gm-up-name">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
                                            </path>
                                        </svg>
                                        ${upName}
                                    </div>
                                    <div class="gm-video-handle">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                                            </path>
                                        </svg>
                                    </div>`;
								$upInfo.className = "gm-up-info";
								$vcard.appendChild($upInfo);
							}
							if (duration) {
								/* 成功获取到播放时长，可能是数字，可能是已转化好的字符串 */
								let $count = $vcard.querySelector(".count");
								if ($count && !$count.querySelector(".gm-video-duration")) {
									/* 视频共计时间 */
									/* 转换时间 */
									let showDuration =
										typeof duration === "string"
											? duration
											: BilibiliUtils.parseDuration(duration);
									let $duration = document.createElement("span");
									$duration.className = "gm-video-duration";
									$duration.innerHTML = showDuration;
									$count.appendChild($duration);
								}
							}
						});
				}, 25);
				utils.mutationObserver(document.body, {
					config: {
						subtree: true,
						childList: true,
						attributes: true,
					},
					callback() {
						lockFunc.run();
					},
				});
			});
	},
};
