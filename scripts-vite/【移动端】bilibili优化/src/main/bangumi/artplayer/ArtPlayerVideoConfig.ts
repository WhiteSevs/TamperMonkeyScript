import { BilibiliVideoCodingCode } from "@/api/BilibiliApiConfig";
import { log } from "@/env";
import { PopsPanel } from "@/setting/setting";

/**
 * 播放器内的一些配置
 */
export const ArtPlayerVideoConfig = {
	/**
	 * 获取用户选择的视频编码
	 */
	getUserChooseVideoCodingCode() {
		// 遍历视频
		let userChooseVideoCodingCode = PopsPanel.getValue(
			"bili-bangumi-videoCodingCode",
			BilibiliVideoCodingCode.AV1
		);

		if (
			!Object.values(BilibiliVideoCodingCode).includes(
				userChooseVideoCodingCode
			)
		) {
			log.error(
				"意外情况，选择的编码格式不是允许的编码，将强制使用默认，防止过滤掉的视频链接为空：" +
					userChooseVideoCodingCode
			);
			userChooseVideoCodingCode = BilibiliVideoCodingCode.AV1;
		}

		return userChooseVideoCodingCode;
	},
};
