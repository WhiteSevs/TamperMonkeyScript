export const UploadPhotosPanel = {
	$data: {
		uploadPhotos: <File[]>[],
	},
	init() {},
	/**
	 * 获取图片链接转为富文本的代码
	 * @param url 上传的图片的链接
	 */
	getUploadPhotoRichTextCode(data: {
		url: string;
		/** 图片类型，不过很奇怪上传的返回的是4，但是这里却是0 */
		pic_type?: number | string;
		width: string | number;
		height: string | number;
	}) {
		return `[img pic_type=${data.pic_type ?? 0} width=${data.width} height=${
			data.height
		}]${data.url}[/img]`;
	},
};
