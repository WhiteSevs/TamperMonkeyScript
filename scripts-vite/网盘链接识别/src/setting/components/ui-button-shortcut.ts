import type { PopsButtonStyleType } from "@whitesev/pops/dist/types/src/types/button";
import type {
	ShortCut,
	ShortCutKeyboardOption,
} from "@components/utils/ShortCut";
import { UIButtonShortCut as BaseUIButtonShortCut } from "@components/setting/components/ui-button-shortcut";

/**
 * 获取录入快捷键配置
 * @param text 左边的文字
 * @param description 左边的文字下面的描述
 * @param key 存储该快捷键的键名
 * @param defaultValue 快捷键的默认值
 * @param defaultButtonText 按钮的文字
 * @param buttonType （可选）按钮的样式类型，默认为"default"
 * @param shortCut ShortCut的实例，用于纪录快捷键
 * @example
 * UIButtonShortCut(
 *   "左边的文字",
 *   "左边的文字下面的描述",
 *   "gf-quickReply",
 *   void 0,
 *   "点击录入快捷键",
 *   void 0,
 *   shortCut
 * )
 */
export const UIButtonShortCut = function (
	this: any,
	text: string,
	description: string | undefined,
	key: string,
	defaultValue: ShortCutKeyboardOption | undefined,
	defaultButtonText: string | (() => string),
	buttonType: PopsButtonStyleType = "default",
	shortCut: ShortCut
) {
	let result = BaseUIButtonShortCut.apply(
		this,
		// @ts-ignore
		arguments
	);
	return result;
};
