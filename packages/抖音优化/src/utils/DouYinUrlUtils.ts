export const DouYinUrlUtils = {
	/**
	 * 获取视频链接
	 * @param videoId 视频id
	 */
	getVideoUrl(videoId: string) {
		return "https://www.douyin.com/video/" + videoId;
	},
	/**
	 * 获取视频合集链接
	 * @param collectionId 合集id
	 */
	getCollectionUrl(collectionId: string) {
		return "https://www.douyin.com/collection/" + collectionId;
	},
};
