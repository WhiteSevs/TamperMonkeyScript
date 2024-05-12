/**
 * 获取button按钮配置
 */
const UIButton = function (
  text: string,
  description: string | undefined,
  buttonText: string | (() => string),
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
