export const M3U8Parser = {
	/**
	 * 解析播放信息
	 * @param EXTINF_Text EXTINF行的文本
	 * @param EXTINF_Next_Line_Text  EXTINF行的下一行的文本，一般是文件路径
	 * @param currentDuration 当前已统计的时长
	 */
	parse_EXTINF(
		EXTINF_Text: string,
		EXTINF_Next_Line_Text: string,
		currentDuration: number
	) {
		// 解析片段时长
		let duration = Number(EXTINF_Text.replace(/(^#EXTINF:\s*|,)/g, ""));
		// 开始的时长
		let startDuration = currentDuration;
		// 结束的时长
		let endDuration = currentDuration + duration;
		// ts名称
		let filePath = EXTINF_Next_Line_Text.trim();

		return {
			/** filePath文件路径 */
			filePath: filePath,
			/** 该片段的开始的时间 */
			startDuration: startDuration,
			/** 该片段的结束的时间 */
			endDuration: endDuration,
			/** 该片段的时长 */
			duration: duration,
		};
	},
};
