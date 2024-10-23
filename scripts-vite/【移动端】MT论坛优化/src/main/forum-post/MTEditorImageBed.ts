import { $, $$, DOMUtils } from "@/env";
import { GM_getValue, GM_setValue } from "ViteGM";
type WaterMarkOption = {
	/**
	 * 是否添加图片水印
	 */
	enable: boolean;
	/**
	 * 是否自动添加水印
	 * + true
	 * + false 会显示预览弹窗
	 */
	autoAddWaterMark: boolean;
	/**
	 * 水印文字
	 */
	text: string;
	/**
	 * 水印文字大小
	 */
	textSize: number;
	/**
	 * 水印颜色
	 */
	color: string;
	/**
	 * 文字透明度
	 */
	opacity: number;
	/**
	 * 左右间距
	 */
	leftRightDistance: number;
	/**
	 * 上下间距
	 */
	topBottomDistance: number;
	/**
	 * 旋转角度
	 */
	rotat: number;
};

export type ImageBedUploadImageReusltInfo<T> = {
	/** 图片链接 */
	url: string;
	/** 图片信息，用于删除使用 */
	data: T;
};

type ImageBedOption<T> = {
	/** 唯一id，请勿重复，用于存储记录 */
	id: string;
	/** 图床名称，用于底部选项显示 */
	name: string;
	/** 图床标签的名称，用于缩略图显示 */
	labelName: string;
	/**
	 * 图片上传按钮点击事件
	 * @param event
	 * @returns
	 * + true 允许触发上传事件
	 * + false 不允许触发上传事件
	 */
	uploadBtnClickEvent: (
		event: PointerEvent | MouseEvent
	) => boolean | Promise<boolean>;
	/**
	 * 图片上传的事件
	 * @param event
	 * @returns
	 * + true 成功上传，清空file对象，新增上传的图片元素
	 * + false 失败上传，清空file对象
	 */
	fileChangeEvent: (
		event: InputEvent,
		fileList: FileList
	) => Promise<{
		/** 是否成功上传 */
		success: boolean;
		/** 上传的数据 */
		data: ImageBedUploadImageReusltInfo<T>[];
	}>;
	/**
	 * 存储的回调
	 * @param data fileChangeEvent调用后的上传的信息
	 */
	storageSaveCallBack: (data: ImageBedUploadImageReusltInfo<T>) => T;
	/**
	 * 删除图片的点击事件
	 * @param event
	 * @param id 图片id
	 * @returns
	 * + true 成功删除，会删除图片元素
	 * + false 失败删除，不会删除图片元素
	 */
	delImageEvent: (
		event: PointerEvent | MouseEvent,
		data: ImageBedUploadImageReusltInfo<T>
	) => boolean | Promise<boolean>;
	/**
	 * 图片水印
	 */
	waterMark?: WaterMarkOption;
};

type StorageOption<T> = {
	/** 图床唯一id */
	id: string;
	/** 图床名称 */
	name: string;
	/** 图床标签名 */
	labelName: string;
	/** 图片数据 */
	data: ImageBedUploadImageReusltInfo<T>;
};

const GlobalImageDelete: {
	id: string;
	callback: ImageBedOption<any>["delImageEvent"];
}[] = [];

/**
 * 图床
 */
export class MTEditorImageBed<T> {
	option: ImageBedOption<T>;
	$data = {
		STORAGE_KEY: "mt-image-bed-upload-history",
	};
	constructor(option: ImageBedOption<T>) {
		this.option = option;
		GlobalImageDelete.push({
			id: this.option.id,
			callback: this.option.delImageEvent.bind(this),
		});
		this.addTab();

		DOMUtils.on(
			`.comiis_post_imglist[data-chartbed="${this.option.name}"] .up_btn a`,
			"click",
			async (event) => {
				let result = await this.option.uploadBtnClickEvent(event);
				if (result) {
					// 允许上传
					$<HTMLInputElement>(
						`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`
					)!.click();
				} else {
					// 禁止上传
				}
			}
		);

		DOMUtils.on<InputEvent>(
			`.comiis_post_imglist[data-chartbed="${this.option.name}"] input[type="file"]`,
			"change",
			async (event) => {
				let $file = event.target as HTMLInputElement;
				if ($file.files && $file.files.length) {
					let uploadInfo = await this.option.fileChangeEvent(
						event,
						$file.files
					);
					$file.value = "";
					if (uploadInfo.success) {
						// 上传成功
						uploadInfo.data.forEach((imageInfo) => {
							this.addImage(imageInfo);
							let $thumbImage = this.createImageBtnElement(
								"插入",
								imageInfo.url
							);
							this.setImageBtnDeleteEvent($thumbImage, imageInfo);
							DOMUtils.append(
								`.comiis_post_imglist[data-chartbed="${this.option.name}"]`,
								$thumbImage
							);
						});
					} else {
						// 上传失败
					}
				}
			}
		);
	}
	/**
	 * 添加图床标签
	 */
	addTab() {
		let $picture_key = $<HTMLElement>("#comiis_pictitle_key")!;

		// 历史图片
		let $history = $picture_key.querySelector<HTMLAnchorElement>(
			"a[data-type='history']"
		);
		let tabHTML = /*html*/ `
            <li>
                <a href="javascript:;" class="comiis-picture-tab" data-type="image-bed">${this.option.name}</a>
            </li>
        `;

		// 添加底部标签
		if (!$history) {
			let $history_parent = DOMUtils.createElement("li");
			$history = DOMUtils.createElement(
				"a",
				{
					href: "javascript:;",
					className: "comiis-picture-tab",
					innerHTML: `历史图片`,
				},
				{ "data-type": "history" }
			);
			DOMUtils.on($history, "click", () => {
				this.initHistoryUploadImageList();
			});
			DOMUtils.append($history_parent, $history!);
			DOMUtils.append($picture_key, $history_parent!);
		}
		DOMUtils.before($history!.parentElement!, tabHTML);
		// 添加标签对应的内容
		let $box = $<HTMLElement>("#comiis_pictitle_tab .bqbox_t")!;
		let $historyBox = Array.from(
			$$<HTMLElement>("#comiis_pictitle_tab .comiis_upbox")
		).find((item) => Boolean(item.querySelector("#imglist_history")));
		if (!$historyBox) {
			// 不存在历史图片内容，添加对应内容先
			$historyBox = DOMUtils.createElement(
				"div",
				{
					className: "comiis_upbox bg_f cl",
					innerHTML: /*html*/ `
					<ul class="comiis_post_imglist cl" id="imglist_history">	
                    </ul>
				`,
				},
				{
					style: "display: none;",
				}
			);
			DOMUtils.before($box, $historyBox);
			$historyBox = Array.from(
				$$<HTMLElement>("#comiis_pictitle_tab .comiis_upbox")
			).find((item) => Boolean(item.querySelector("#imglist_history")));
		}
		DOMUtils.before(
			$historyBox!,
			/*html*/ `
            <div class="comiis_upbox bg_f cl" style="display: none;">
                <ul class="comiis_post_imglist cl" data-chartbed="${this.option.name}">
                    <li class="up_btn">
                        <a href="javascript:;" class="bg_e b_ok f_d">
                            <i class="comiis_font"></i>
                            
                        </a>
                        <input type="file" name="Filedata" accept="image/*" multiple="" style="display: none;">
                    </li>				
                </ul>
            </div>
            `
		);
	}
	/**
	 * 创建图片缩略图，用于插入
	 */
	createImageBtnElement(labelName: string, url: string) {
		let $li = DOMUtils.createElement("li", {
			innerHTML: /*html*/ `
            <span class="delImg" data-id="${this.option.id}" data-name="${this.option.name}">
                <a href="javascript:;">
                    <i class="comiis_font f_g"></i>
                </a>
            </span>
            <span class="charu f_f">${labelName}</span>
            <span class="p_img">
                <a href="javascript:;"
                onclick="comiis_addsmilies('[img]${url}[/img]')">
                    <img style="height:54px;width:54px;" 
                        title="${url}" 
                        src="${url}" 
                        loading="lazy"
                        class="vm b_ok"></a>
            </span>
            `,
		});
		return $li;
	}
	/**
	 * 初始化历史上传图片列表
	 */
	initHistoryUploadImageList() {
		let $imglist_history = $<HTMLUListElement>(
			"#comiis_pictitle_tab #imglist_history"
		)!;
		$imglist_history.innerHTML = "";
		let $fragment = document.createDocumentFragment();
		this.getAllImage().forEach((item) => {
			let $thumbImage = this.createImageBtnElement(
				item.labelName,
				item.data.url
			);
			this.setHistoryImageBtnDeleteEvent($thumbImage, item);
			$fragment.appendChild($thumbImage);
		});
		$imglist_history.appendChild($fragment);
	}
	/**
	 * 设置图片缩略图的删除事件
	 */
	setImageBtnDeleteEvent(
		$ele: HTMLElement,
		data: ImageBedUploadImageReusltInfo<T>
	) {
		let $delImg = $ele.querySelector<HTMLAnchorElement>(".delImg");
		DOMUtils.on($delImg, "click", async (event) => {
			let result = await this.option.delImageEvent(event, data);
			if (result) {
				// 成功删除
				let deleteStorageStatus = this.deleteImage(this.option.id, data);
				if (deleteStorageStatus) {
					DOMUtils.remove($ele);
				}
			} else {
				// 删除失败
			}
		});
	}
	/**
	 * 设置历史图片图片缩略图的删除事件
	 */
	setHistoryImageBtnDeleteEvent($ele: HTMLElement, data: StorageOption<T>) {
		let $delImg = $ele.querySelector<HTMLAnchorElement>(".delImg");
		DOMUtils.on($delImg, "click", async (event) => {
			let findValue = GlobalImageDelete.find((item) => item.id === data.id);
			if (!findValue) {
				return;
			}
			let result = await findValue.callback(event, data.data);
			if (result) {
				// 成功删除
				let deleteStorageStatus = this.deleteImage(data.id, data.data);
				if (deleteStorageStatus) {
					DOMUtils.remove($ele);
				}
			} else {
				// 删除失败
			}
		});
	}
	/**
	 * 存储历史记录图片
	 */
	addImage(info: ImageBedUploadImageReusltInfo<T>) {
		let allData = GM_getValue<StorageOption<T>[]>(this.$data.STORAGE_KEY, []);
		allData.push({
			id: this.option.id,
			name: this.option.name,
			labelName: this.option.labelName,
			data: info,
		});
		GM_setValue(this.$data.STORAGE_KEY, allData);
	}
	/**
	 * 查询所有上传的历史图片
	 */
	getAllImage() {
		let allData = GM_getValue<StorageOption<T>[]>(this.$data.STORAGE_KEY, []);
		return allData;
	}
	/**
	 * 删除历史记录图片
	 */
	deleteImage(id: string, data: ImageBedUploadImageReusltInfo<T>) {
		let allData = this.getAllImage();
		let findIndex = allData.findIndex(
			(item) =>
				item.id === id && JSON.stringify(item.data) === JSON.stringify(data)
		);
		if (findIndex != -1) {
			allData.splice(findIndex, 1);
			GM_setValue(this.$data.STORAGE_KEY, allData);
			return true;
		} else {
			return false;
		}
	}
}
