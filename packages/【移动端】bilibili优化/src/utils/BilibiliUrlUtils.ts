export const BilibiliUrlUtils = {
	/**
	 * 获取用户个人空间链接
	 * @param userId 用户id
	 */
	getUserSpaceUrl(userId: string) {
		return `https://space.bilibili.com/${userId}`;
	},
	/**
	 * 获取用户个人空间动态链接
	 * @param userId 用户id
	 */
	getUserSpaceDynamicUrl(userId: string) {
		return this.getUserSpaceUrl(userId) + "/dynamic";
	},
	/**
	 * 获取视频链接
	 * @param id bv/av号
	 */
	getVideoUrl(id: string) {
		return `https://www.bilibili.com/video/${id}`;
	},
};
