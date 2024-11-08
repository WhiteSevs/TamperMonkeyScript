import { DOMUtils, pops, utils } from "@/env";

/**
 * 过滤视图配置
 */
export type RuleFilterViewOption<T> = {
	/** 标题 */
	title: string;
	/** 所有的配置项信息 */
	getAllRuleInfo: () => {
		data: T;
		$el: HTMLElement;
	}[];
	/** 执行过滤的回调 */
	execFilterCallBack?: () => void;
	/** 过滤配置 */
	filterOption: {
		/** 过滤类型名 */
		name: string;
		/**
		 * 当前的数据
		 * @returns
		 * + true 需要的
		 * + false 不需要的
		 */
		filterCallBack: (data: T) => boolean;
		/**
		 * 点击项回调
		 * @returns
		 * + false 不关闭弹窗、不执行过滤
		 * + true 执行过滤并关闭弹窗
		 */
		callback?: (
			event: MouseEvent | PointerEvent,
			/** 执行过滤并关闭弹窗 */
			closeDialog: () => void
		) => boolean;
	}[];
};

export class RuleFilterView<T> {
	option: RuleFilterViewOption<T>;
	constructor(option: RuleFilterViewOption<T>) {
		this.option = option;
	}
	showView() {
		let $alert = pops.alert({
			title: {
				text: this.option.title,
				position: "center",
			},
			content: {
				text: /*html*/ `
                <div class="filter-container"></div>
                `,
			},
			btn: {
				ok: {
					text: "关闭",
					type: "default",
				},
			},
			mask: {
				enable: true,
			},
			width: window.innerWidth > 500 ? "350px" : "80vw",
			height: window.innerHeight > 500 ? "300px" : "70vh",
			style: /*css*/ `
            .filter-container{
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .filter-container button{
                text-wrap: wrap;
                padding: 8px;
                height: auto;
                text-align: left;
            }
            `,
		});
		let $filterContainer =
			$alert.$shadowRoot.querySelector<HTMLDivElement>(".filter-container")!;
		let $fragment = document.createDocumentFragment();
		this.option.filterOption.forEach((filterOption) => {
			let $button = document.createElement("button");
			$button.innerText = filterOption.name;
			let execFilterAndCloseDialog = () => {
				this.option.getAllRuleInfo().forEach((ruleInfo) => {
					if (!filterOption.filterCallBack(ruleInfo.data)) {
						// 不需要
						DOMUtils.hide(ruleInfo.$el, false);
					} else {
						DOMUtils.show(ruleInfo.$el, false);
					}
				});
				if (typeof this.option.execFilterCallBack === "function") {
					this.option.execFilterCallBack();
				}
				$alert.close();
			};
			DOMUtils.on($button, "click", (event) => {
				utils.preventEvent(event);
				if (typeof filterOption.callback === "function") {
					let result = filterOption.callback(event, execFilterAndCloseDialog);
					if (!result) {
						return;
					}
				}
				execFilterAndCloseDialog();
			});
			$fragment.appendChild($button);
		});

		$filterContainer.appendChild($fragment);
	}
}
