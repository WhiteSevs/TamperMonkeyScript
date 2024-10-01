export const NetDiskWorkerUtils = {
	/**
	 * 检索目标元素内所有可访问的ShadowRoot的所有节点的信息
	 */
	depthQueryShadowRootAllNode($target: HTMLElement | ShadowRoot) {
		let result: {
			/** 所有shadowRoot节点 */
			shadowRoot: ShadowRoot;
			/** 所有shadowRoot内的子节点 */
			childNode: Element[];
		}[] = [];

		/**
		 * 查询ShadowRoot信息
		 * @param $ele
		 */
		function queryShadowRoot($ele: Element | ShadowRoot) {
			let $queryChildNodeList = Array.from($ele.querySelectorAll("*"));
			$queryChildNodeList.forEach(($childNode) => {
				if (
					$childNode.classList &&
					$childNode.classList.contains("pops-shadow-container")
				) {
					// 忽略pops库的ShadowRoot
					return;
				}
				let $childNodeShadowRoot = $childNode.shadowRoot;
				if (
					$childNodeShadowRoot &&
					$childNodeShadowRoot instanceof ShadowRoot
				) {
					// 存在ShadowRoot
					// 添加ShadowRoot节点和子节点信息
					result.push({
						shadowRoot: $childNodeShadowRoot,
						childNode: queryShadowRoot($childNodeShadowRoot),
					});
				}
			});

			return $queryChildNodeList;
		}

		queryShadowRoot($target);

		return result;
	},
	/**
	 * 删除某些需要忽略的text或html，如：设置、直链弹窗
	 * @param text 需要进行处理的字符串
	 * @param isHTML 是否是html属性
	 */
	ignoreStrRemove(text: string, isHTML: boolean = false): string {
		let ignoreNodeList: HTMLElement[] = [];
		if (ignoreNodeList.length) {
			ignoreNodeList.forEach(($ignore) => {
				if ($ignore == void 0) {
					return;
				}
				if (isHTML) {
					if ($ignore.innerHTML != void 0) {
						text = text.replaceAll($ignore.innerHTML, "");
					}
				} else {
					let text = $ignore.innerText || $ignore.textContent;
					if (text != void 0) {
						text = text.replaceAll(text, "");
					}
				}
			});
		}
		return text;
	},
	/**
	 * 获取页面上所有文本
	 * @param target 目标元素
	 * @param isCheckShadowRoot 是否检索ShadowRoot
	 */
	getPageText(
		target: HTMLElement = document.documentElement,
		isCheckShadowRoot: boolean
	): string[] {
		let strList: string[] = [];
		// 先把页面的内容添加进去
		strList.push(target?.textContent || target?.innerText || "");

		if (isCheckShadowRoot) {
			// 检索ShadowRoot
			let queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
			if (queryShadowRootAllNodeInfo.length) {
				// 遍历ShadowRoot并把textContent添加进去
				queryShadowRootAllNodeInfo.forEach((queryShadowRootInfo) => {
					let shadowRootText = queryShadowRootInfo.shadowRoot.textContent;
					if (shadowRootText) {
						strList.push(shadowRootText);
					}
				});
			}
		}
		strList = strList.filter((item) => item !== "");
		return strList;
	},
	/**
	 * 获取页面上所有超文本
	 * @param target 目标元素
	 * @param isCheckShadowRoot 是否检索ShadowRoot
	 */
	getPageHTML(
		target: HTMLElement = document.documentElement,
		isCheckShadowRoot: boolean
	): string[] {
		let strList: string[] = [];
		// 先把页面的超文本内容添加进去
		strList.push(target.innerHTML);

		if (isCheckShadowRoot) {
			// 检索ShadowRoot
			let queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
			if (queryShadowRootAllNodeInfo.length) {
				// 遍历ShadowRoot并把innerHTML添加进去
				queryShadowRootAllNodeInfo.forEach((queryShadowRootInfo) => {
					let shadowRootHTML = queryShadowRootInfo.shadowRoot.innerHTML;
					if (shadowRootHTML) {
						strList.push(shadowRootHTML);
					}
				});
			}
		}
		strList = strList.filter((item) => item !== "");
		return strList;
	},
	/**
	 * 获取页面上所有input的值
	 * @param target 目标元素
	 * @param isCheckShadowRoot 是否检索ShadowRoot
	 */
	getInputElementValue(
		target: HTMLElement = document.documentElement,
		isCheckShadowRoot: boolean
	): string[] {
		let result: string[] = [];

		Array.from(target.querySelectorAll("input")).forEach(($input) => {
			result.push($input.value);
		});

		if (isCheckShadowRoot) {
			// 检索ShadowRoot
			let queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
			if (queryShadowRootAllNodeInfo.length) {
				// 遍历ShadowRoot并把textContent添加进去
				queryShadowRootAllNodeInfo.forEach((queryShadowRootInfo) => {
					for (
						let index = 0;
						index < queryShadowRootInfo.childNode.length;
						index++
					) {
						const $childNode = queryShadowRootInfo.childNode[index];
						if ($childNode instanceof HTMLInputElement && $childNode.value) {
							result.push($childNode.value);
						}
					}
				});
			}
		}
		return result;
	},
	/**
	 * 获取页面上所有textarea的值
	 * @param target 目标元素
	 * @param isCheckShadowRoot 是否检索ShadowRoot
	 */
	getTextAreaElementValue(
		target: HTMLElement = document.documentElement,
		isCheckShadowRoot: boolean
	): string[] {
		let result: string[] = [];

		Array.from(target.querySelectorAll("textarea")).forEach(($textarea) => {
			result.push($textarea.value);
		});

		if (isCheckShadowRoot) {
			// 检索ShadowRoot
			let queryShadowRootAllNodeInfo = this.depthQueryShadowRootAllNode(target);
			if (queryShadowRootAllNodeInfo.length) {
				// 遍历ShadowRoot并把textContent添加进去
				queryShadowRootAllNodeInfo.forEach((queryShadowRootInfo) => {
					for (
						let index = 0;
						index < queryShadowRootInfo.childNode.length;
						index++
					) {
						const $childNode = queryShadowRootInfo.childNode[index];
						if ($childNode instanceof HTMLTextAreaElement && $childNode.value) {
							result.push($childNode.value);
						}
					}
				});
			}
		}
		return result;
	},
};
