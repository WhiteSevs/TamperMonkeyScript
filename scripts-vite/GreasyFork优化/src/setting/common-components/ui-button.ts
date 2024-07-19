import { PopsPanelButtonDetails } from "@whitesev/pops/dist/types/src/components/panel/buttonType";
import { PopsButtonStyleType } from "@whitesev/pops/dist/types/src/types/button";
import { PopsIcon } from "@whitesev/pops/dist/types/src/types/icon";

/**
 * 获取button按钮配置
 * @param text 左边的文字
 * @param description 左边的文字下面的描述
 * @param buttonText 按钮的文字
 * @param buttonIcon 按钮图标
 * @param buttonIsRightIcon 按钮是否在右边
 * @param buttonIconIsLoading 按钮图标是否旋转
 * @param buttonType 按钮类型
 * @param clickCallBack 点击回调
 * @returns
 */
const UIButton = function (
	text: string,
	description: string | undefined,
	buttonText: string,
	buttonIcon: PopsIcon | undefined,
	buttonIsRightIcon: boolean | undefined,
	buttonIconIsLoading: boolean | undefined,
	buttonType: PopsButtonStyleType,
	clickCallBack?: ((event: MouseEvent | PointerEvent) => void) | undefined
): PopsPanelButtonDetails {
	let result: PopsPanelButtonDetails = {
		text: text,
		type: "button",
		description: description,
		buttonIcon: buttonIcon,
		buttonIsRightIcon: buttonIsRightIcon,
		buttonIconIsLoading: buttonIconIsLoading,
		buttonType: buttonType,
		buttonText: buttonText,
		callback(event: MouseEvent | PointerEvent) {
			if (typeof clickCallBack === "function") {
				clickCallBack(event);
			}
		},
		afterAddToUListCallBack: void 0,
	};
	return result;
};

export { UIButton };
