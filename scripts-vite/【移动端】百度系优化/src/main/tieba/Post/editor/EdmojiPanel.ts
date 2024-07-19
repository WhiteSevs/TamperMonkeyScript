export const EmojiPanel = {
	$data: {
		imageUrlList: <string[]>[],
	},
	init() {
		if (this.$data.imageUrlList.length === 0) {
			this.createImageList();
		}
	},
	getImageList() {
		return this.$data.imageUrlList;
	},
	createImageList() {
		/* 图片地址 */
		let imageTemplateUrl = "//tb2.bdstatic.com/tb/editor/images/face/i_f";
		/* 起始数字 */
		let startImageId = 1;
		/* 结尾数字 */
		let endImageId = 55;
		/* 图片类型 */
		let imageMineType = "png";

		for (let index = startImageId; index <= endImageId; index++) {
			this.$data.imageUrlList.push(
				`${imageTemplateUrl}${
					index < 10 ? "0" + index : index
				}.${imageMineType}`
			);
		}
	},
};
