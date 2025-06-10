import { DOMUtils, pops, utils } from "../base.env";

/**
 * 过滤视图配置
 */
export type RuleFilterViewOption<T> = {
	/** 标题 */
	title: string;
	/** 所有的配置项信息 */
	getAllRuleInfo: () => IPromise<
		{
			data: T;
			$el: HTMLElement;
		}[]
	>;
	/** 执行过滤的回调 */
	execFilterCallBack?: () => IPromise<void>;
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
		filterCallBack: (data: T) => IPromise<boolean>;
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
		) => IPromise<boolean>;
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
			drag: true,
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
			let execFilterAndCloseDialog = async () => {
				let allRuleInfo = await this.option.getAllRuleInfo();
				allRuleInfo.forEach(async (ruleInfo) => {
					let filterResult = await filterOption.filterCallBack(ruleInfo.data);
					if (!filterResult) {
						// 不需要
						DOMUtils.hide(ruleInfo.$el, false);
					} else {
						DOMUtils.show(ruleInfo.$el, false);
					}
				});
				if (typeof this.option.execFilterCallBack === "function") {
					await this.option.execFilterCallBack();
				}
				$alert.close();
			};
			DOMUtils.on($button, "click", async (event) => {
				utils.preventEvent(event);
				if (typeof filterOption.callback === "function") {
					let result = await filterOption.callback(
						event,
						execFilterAndCloseDialog
					);
					if (!result) {
						return;
					}
				}
				await execFilterAndCloseDialog();
			});
			$fragment.appendChild($button);
		});

		$filterContainer.appendChild($fragment);
	}
}
