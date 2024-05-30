import { log, utils } from "@/env";
import { BilibiliVideoHook } from "./BilibiliVideoHook";
import { PopsPanel } from "@/setting/setting";

const BilibiliVideo = {
	init() {
		BilibiliVideoHook.init();
		PopsPanel.execMenu("bili-video-setVideoPlayer", () => {
			this.setVideoPlayer();
		});
	},
	/**
	 * 修改视频播放器设置参数
	 *
	 * + __vue__.playBtnNoOpenApp: `true`
	 * + __vue__.playBtnOpenApp: `false`
	 * + __vue__.coverOpenApp: `false`
	 */
	setVideoPlayer() {
		utils.waitNode<HTMLDivElement>(".m-video-player").then(($app: any) => {
			let check = function (__vue__: any) {
				return (
					__vue__ != null &&
					typeof __vue__.playBtnNoOpenApp === "boolean" &&
					typeof __vue__.playBtnOpenApp === "boolean" &&
					typeof __vue__.coverOpenApp === "boolean"
				);
			};
			utils
				.waitVueByInterval(
					() => {
						return document.querySelector(".m-video-player") as HTMLElement;
					},
					check,
					250,
					10000
				)
				.then(() => {
					$app = document.querySelector(".m-video-player") as any;
					if (check($app.__vue__)) {
						log.success(
							"成功设置参数 playBtnNoOpenApp、playBtnOpenApp、coverOpenApp"
						);
						$app.__vue__.playBtnNoOpenApp = true;
						$app.__vue__.playBtnOpenApp = false;
						$app.__vue__.coverOpenApp = false;
					}
				});
		});
	},
};

export { BilibiliVideo };
