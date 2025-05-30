export type QmsgAnimationState = {
	/** 显示中 */
	opening: string;
	/** 显示完成 */
	done: string;
	/** 关闭中 */
	closing: string;
};

export const QmsgAnimation = {
	/** 状态 & 动画 */
	$state: <QmsgAnimationState>{
		opening: "MessageMoveIn",
		done: "",
		closing: "MessageMoveOut",
	},
	$name: {
		startNameList: [
			"animationName",
			"WebkitAnimationName",
			"MozAnimationName",
			"msAnimationName",
			"OAnimationName",
		],
		endNameList: [
			"animationend",
			"webkitAnimationEnd",
			"mozAnimationEnd",
			"MSAnimationEnd",
			"oanimationend",
		],
	},
	/**
	 * 是否支持动画属性
	 * @private
	 */
	__CAN_ANIMATION__: void 0 as Boolean | undefined,
	/**
	 * 是否支持动画属性
	 */
	get CAN_ANIMATION() {
		this.__CAN_ANIMATION__ =
			this.__CAN_ANIMATION__ ??
			this.getStyleAnimationNameValue(document.createElement("div")) != null;
		return this.__CAN_ANIMATION__;
	},
	/**
	 * 获取元素上的animationName属性
	 * @param element
	 */
	getStyleAnimationNameValue(element: HTMLElement) {
		for (let index = 0; index < this.$name.startNameList.length; index++) {
			let animationName = this.$name.startNameList[index];
			let animationNameValue = (element.style as any)[animationName];
			if (animationNameValue != null) {
				return animationNameValue;
			}
		}
	},
	/**
	 * 设置元素上的animationName属性
	 * @param element
	 * @param animationNameValue
	 */
	setStyleAnimationName(
		element: HTMLElement,
		animationNameValue: QmsgAnimationState[keyof QmsgAnimationState] = ""
	) {
		this.$name.startNameList.forEach((animationName) => {
			if (animationName in element.style) {
				(element.style as any)[animationName] = animationNameValue;
			}
		});
	},
};
