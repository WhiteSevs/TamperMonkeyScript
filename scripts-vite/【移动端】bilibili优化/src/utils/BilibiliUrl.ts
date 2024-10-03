export const BilibiliUrl = {
	/**
	 * 获取用户个人空间链接
	 * @param userId 用户id
	 */
	getUserSpaceUrl(userId: string | number) {
		return `https://m.bilibili.com/space/${userId}`;
	},
	/**
	 * 获取用户个人空间动态链接-dynamic
	 * @param id 该动态的id
	 */
	getUserSpaceDynamicUrl(id: string | number) {
		return `https://m.bilibili.com/dynamic/${id}`;
	},
	/**
	 * 获取用户个人空间动态链接-opus
	 * @param id 该动态的id
	 */
	getUserSpaceOpusUrl(id: string | number) {
		return `https://m.bilibili.com/opus/${id}`;
	},
	/**
	 * 获取视频链接
	 * @param id bv/av号
	 */
	getVideoUrl(id: string) {
		return `https://m.bilibili.com/video/${id}`;
	},
};
