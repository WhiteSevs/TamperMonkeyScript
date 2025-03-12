/// <reference path="./DataPaging.d.ts"/>
/* 
数据分页导航
例子

let dataPaging = new DataPaging({
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    pageCount: 3,
    currentPage: 1,
    pageChangeCallBack:function(page){
        console.log(page);
    }
});
dataPaging.append(document.querySelector("body > div"));
*/
(function (global, factory) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = factory();
		// @ts-ignore
	} else if (typeof define === "function" && define.amd) {
		// @ts-ignore
		define(factory);
	} else {
		// @ts-ignore
		global = typeof globalThis !== "undefined" ? globalThis : global || self;
		// @ts-ignore
		global.DataPaging = factory();
	}
})(this, function () {
	"use strict";

	class Paging {
		/**
		 * @type {DeepRequired<PagingConfig>}
		 */
		CONFIG = {
			data: [],
			pageCount: 5,
			pageStep: 3,
			currentPage: 1,
			pageChangeCallBack: function (page) {},
			prevBtn: {
				enable: true,
				callBack: function () {},
			},
			nextBtn: {
				enable: true,
				callBack: function () {},
			},
			firstBtn: {
				enable: true,
				callBack: function () {},
			},
			lastBtn: {
				enable: true,
				callBack: function () {},
			},
		};
		PAGE_CONFIG = {
			/**
			 * 获取当前所在页
			 * @returns {Number}
			 */
			getCurrentPage: () => {
				// @ts-ignore
				return this.DOM_CONFIG.getAttributeWithPageId(
					// @ts-ignore
					this.DOM_CONFIG.getAttributeWithCurrentPage()
				);
			},
			/** 最大页码 */
			maxPage: 1,
		};
		DOM_CONFIG = {
			/* 整个分页元素 */
			dataPagingNode: {
				localName: "div",
				id: "whitesev-datapaging",
				dom: null,
			},
			/* 第一页按钮 */
			firstBtnNode: {
				localName: "a",
				className: "pg-first",
				svgHTML: `<svg t="1694497357294" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4758" width="20"><path d="M730.639277 211.376748l60.943177 60.943176-301.698894 301.698893L428.940384 513.075641z" p-id="4759"></path><path d="M730.496772 814.924547l60.943176-60.943176-301.698893-301.698893L428.797879 513.225654z" p-id="4760"></path><path d="M298.666667 213.333333h85.333333v597.333334H298.666667z" p-id="4761"></path></svg>`,
				get: () => {
					// @ts-ignore
					return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
						`${this.DOM_CONFIG.firstBtnNode.localName}.${this.DOM_CONFIG.firstBtnNode.className}`
					);
				},
			},
			/* 上一页按钮 */
			prevBtnNode: {
				localName: "a",
				className: "pg-prev",
				svgHTML: `<svg t="1694497840770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5272" width="20"><path d="M620.322607 151.04875l60.943176 60.943176-362.038672 362.038672L258.283935 513.087422z" p-id="5273"></path><path d="M620.180101 875.252545l60.943177-60.943176-362.038672-362.038672L258.141429 513.213873z" p-id="5274"></path></svg>`,
				get: () => {
					// @ts-ignore
					return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
						`${this.DOM_CONFIG.prevBtnNode.localName}.${this.DOM_CONFIG.prevBtnNode.className}`
					);
				},
			},
			/* 下一页按钮 */
			nextBtnNode: {
				localName: "a",
				className: "pg-next",
				svgHTML: `<svg t="1694497949481" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5465" width="20"><path d="M403.399239 151.02258l-60.943177 60.943177 362.038672 362.038672L765.437911 513.061252z" p-id="5466"></path><path d="M403.576858 875.263008l-60.943176-60.943176 362.038672-362.038672L765.61553 513.224336z" p-id="5467"></path></svg>`,
				get: () => {
					// @ts-ignore
					return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
						`${this.DOM_CONFIG.nextBtnNode.localName}.${this.DOM_CONFIG.nextBtnNode.className}`
					);
				},
			},
			/* 最后一页按钮 */
			lastBtnNode: {
				localName: "a",
				className: "pg-last",
				svgHTML: `<svg t="1694498035538" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2299" width="20"><path d="M516.266667 490.666667L256 230.4 315.733333 170.666667l320 320L315.733333 810.666667 256 750.933333l260.266667-260.266666zM678.4 170.666667h85.333333v640h-85.333333V170.666667z" p-id="2300"></path></svg>`,
				get: () => {
					// @ts-ignore
					return this.DOM_CONFIG.dataPagingNode.dom.querySelector(
						`${this.DOM_CONFIG.lastBtnNode.localName}.${this.DOM_CONFIG.lastBtnNode.className}`
					);
				},
			},
			/**
			 * 设置 元素的 页码 值
			 * @param {HTMLElement} node
			 */
			// @ts-ignore
			setAttributeWithPageId: (node, page) => {
				node.setAttribute("page-id", page);
			},
			/**
			 * 获取 元素 的页码属性
			 * @param {HTMLElement} node
			 * @returns {number|null}
			 */
			getAttributeWithPageId: (node) => {
				return node?.getAttribute("page-id")
					? // @ts-ignore
					  parseInt(node.getAttribute("page-id"))
					: null;
			},
			/**
			 * 判断 元素 是否存在页码属性
			 * @param {HTMLElement} node
			 * @returns {Boolean}
			 */
			hasAttributeWithPageId: (node) => {
				return node.hasAttribute("page-id");
			},
			/**
			 * 设置 元素的属性 为当前所在页码
			 * @param {HTMLElement} node
			 */
			setAttributeWithCurrentPage: (node) => {
				node.setAttribute("data-current-page", "");
			},
			/**
			 * 获取当前页码的元素
			 * @param {HTMLElement?} dataPagingNode
			 * @returns {HTMLElement|null}
			 */
			getAttributeWithCurrentPage: (dataPagingNode) => {
				return (
					// @ts-ignore
					(dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom).querySelector(
						"a[data-current-page]"
					)
				);
			},
			/**
			 * 判断 元素 是否存在 当前页的属性
			 * @param {HTMLElement} node
			 * @returns
			 */
			hasAttributeWithCurrentPage: (node) => {
				return node.hasAttribute("data-current-page");
			},
			/**
			 * 移除 当前页码的属性
			 * @param {HTMLElement} node
			 */
			removeAttributeWithCurrentPage: (node) => {
				node.removeAttribute("data-current-page");
			},
			/**
			 * 设置 元素 禁用
			 * @param {HTMLElement} node
			 */
			setAttributeWithDisabled: (node) => {
				node.setAttribute("disabled", "true");
			},
			/**
			 * 移除当前页面的禁用的元素
			 * @param {HTMLElement|null} dataPagingNode
			 */
			removeAllAttributeWithDisabled: (dataPagingNode) => {
				// @ts-ignore
				(dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom)
					.querySelectorAll("a[class][disabled]")
					.forEach((item) => {
						item.removeAttribute("disabled");
					});
			},
			/**
			 * 获取 第一页 元素节点
			 * @param {HTMLElement?} dataPagingNode
			 * @returns {HTMLElement|null}
			 */
			getFirstPageNode: (dataPagingNode) => {
				return (
					// @ts-ignore
					(dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom).querySelector(
						"a[page-id='1']"
					)
				);
			},
			/**
			 * 获取 最后一页 元素节点
			 * @param {HTMLElement?} dataPagingNode
			 * @returns {HTMLElement|null}
			 */
			getLastPageNode: (dataPagingNode) => {
				return (
					// @ts-ignore
					(dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom).querySelector(
						`a[page-id='${this.PAGE_CONFIG.maxPage}']`
					)
				);
			},
			/**
			 * 获取当前所有的页码元素节点
			 * @param {HTMLElement?} dataPagingNode
			 * @returns {NodeList}
			 */
			getAllPageNode: (dataPagingNode) => {
				return (
					// @ts-ignore
					(
						dataPagingNode || this.DOM_CONFIG.dataPagingNode.dom
					).querySelectorAll("a[page-id]")
				);
			},
		};
		/**
		 * @param {PagingConfig} details
		 */
		constructor(details) {
			this.changeConfig(details);
		}
		/**
		 * 添加CSS
		 * @param {Node} target 添加到目标元素
		 */
		addCSS(target = document.head) {
			let cssNode = document.createElement("style");
			cssNode.setAttribute("type", "text/css");
			cssNode.innerHTML = /*css*/ `@charset "utf-8";
			#${this.DOM_CONFIG.dataPagingNode.id} {
				text-align: center;
				display: inline-block;
			}
			#${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.firstBtnNode.className},
			#${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.prevBtnNode.className},
			#${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.nextBtnNode.className},
			#${this.DOM_CONFIG.dataPagingNode.id} .${this.DOM_CONFIG.lastBtnNode.className} {
				font-family: Arial, sans-serif;
				color: #333;
				font-size: 22px;
				fill: currentColor;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				text-decoration: none;
			}
			#${this.DOM_CONFIG.dataPagingNode.id} a,
			#${this.DOM_CONFIG.dataPagingNode.id} span {
				width: 45px;
				height: 40px;
				border: 1px solid #ebebeb;
				margin-left: -1px;
				color: #000000;
				line-height: 40px;
				float: left;
				font-size: 15px;
				text-decoration: none;
				margin: 0 2px;
				border-radius: 6px;
			}
			#${this.DOM_CONFIG.dataPagingNode.id} a:hover,
			#${this.DOM_CONFIG.dataPagingNode.id} span:hover {
				border-color: #3897cd;
				color: #3897cd;
				position: relative;
				z-index: 1;
			}
			#${this.DOM_CONFIG.dataPagingNode.id} a {
				cursor: pointer;
				user-select: none;
			}
			#${this.DOM_CONFIG.dataPagingNode.id} a[data-current-page] {
				background-color: #222a35;
				color: #fff;
				border-color: #ebebeb;
				position: relative;
				z-index: 1;
			}
			#${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.firstBtnNode.className}[disabled="true"],
			#${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.prevBtnNode.className}[disabled="true"],
			#${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.nextBtnNode.className}[disabled="true"],
			#${this.DOM_CONFIG.dataPagingNode.id} a.${this.DOM_CONFIG.lastBtnNode.className}[disabled="true"]{
				cursor: not-allowed;
				border: 1px solid transparent;
				color: #c9c9c9;
			}
			`;
			target.appendChild(cssNode);
		}
		/**
		 * 获取分页元素
		 * @returns {Element}
		 */
		getDataPagingNode() {
			let that = this;
			let dataPagingNode = document.createElement(
				that.DOM_CONFIG.dataPagingNode.localName
			);
			// @ts-ignore
			that.DOM_CONFIG.dataPagingNode.dom = dataPagingNode;
			dataPagingNode.id = that.DOM_CONFIG.dataPagingNode.id;
			/* 第一页 */
			let firstBtnNode = document.createElement(
				that.DOM_CONFIG.firstBtnNode.localName
			);
			firstBtnNode.innerHTML = that.DOM_CONFIG.firstBtnNode.svgHTML;
			/* 上一页 */
			let prevBtnNode = document.createElement(
				that.DOM_CONFIG.prevBtnNode.localName
			);
			prevBtnNode.innerHTML = that.DOM_CONFIG.prevBtnNode.svgHTML;
			/* 下一页 */
			let nextBtnNode = document.createElement(
				that.DOM_CONFIG.nextBtnNode.localName
			);
			nextBtnNode.innerHTML = that.DOM_CONFIG.nextBtnNode.svgHTML;
			/* 最后一页 */
			let lastBtnNode = document.createElement(
				that.DOM_CONFIG.lastBtnNode.localName
			);
			lastBtnNode.innerHTML = that.DOM_CONFIG.lastBtnNode.svgHTML;
			firstBtnNode.className = that.DOM_CONFIG.firstBtnNode.className;
			prevBtnNode.className = that.DOM_CONFIG.prevBtnNode.className;
			nextBtnNode.className = that.DOM_CONFIG.nextBtnNode.className;
			lastBtnNode.className = that.DOM_CONFIG.lastBtnNode.className;
			/* 计算总数据量除以显示的数据量 得出分页的数量 */
			that.PAGE_CONFIG.maxPage = Math.ceil(
				that.CONFIG.data.length / that.CONFIG.pageCount
			);
			/* 校正超出或小于的当前页码 */
			if (that.CONFIG.currentPage < 1) {
				that.CONFIG.currentPage = 1;
			} else if (that.CONFIG.currentPage > that.PAGE_CONFIG.maxPage) {
				that.CONFIG.currentPage = that.PAGE_CONFIG.maxPage;
			}
			/* 超过1 才开启分页 */
			if (that.PAGE_CONFIG.maxPage < 2) {
				return dataPagingNode;
			}
			/* 判断第一页按钮 是否开启 */
			if (that.CONFIG.firstBtn.enable) {
				this.setFirstBtnClickEvent(firstBtnNode, dataPagingNode);
				dataPagingNode.appendChild(firstBtnNode);
			}
			/* 判断上一页按钮 是否开启 */
			if (that.CONFIG.prevBtn.enable) {
				this.setPrevBtnClickEvent(prevBtnNode, dataPagingNode);
				dataPagingNode.appendChild(prevBtnNode);
			}
			let currentPage = that.CONFIG.currentPage;
			/* 计算出的最大页码在限制的显示页码数量内 */
			/* 比如计算出的页码总共有5个，设置中当前能显示出的页码按钮元素为3个 */
			if (that.CONFIG.pageStep > that.PAGE_CONFIG.maxPage) {
				for (
					let _currentPage = currentPage;
					_currentPage <= that.PAGE_CONFIG.maxPage;
					_currentPage++
				) {
					let pageBtnNode = document.createElement("a");
					that.DOM_CONFIG.setAttributeWithPageId(pageBtnNode, _currentPage);
					// @ts-ignore
					pageBtnNode.innerText = _currentPage;
					if (that.CONFIG.currentPage === _currentPage) {
						that.DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
					}
					this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
					dataPagingNode.appendChild(pageBtnNode);
				}
			} else {
				/* 如果 当前页 + 限制显示的页码 大于等于 最大页，那么 从最后一页倒序着添加 */
				if (currentPage + that.CONFIG.pageStep > that.PAGE_CONFIG.maxPage) {
					currentPage = that.PAGE_CONFIG.maxPage;
					/** @type {Node[]} */
					let needAppendNodeList = [];
					for (let index = 0; index < that.CONFIG.pageStep; index++) {
						let pageBtnNode = document.createElement("a");
						that.DOM_CONFIG.setAttributeWithPageId(pageBtnNode, currentPage);
						// @ts-ignore
						pageBtnNode.innerText = currentPage;
						if (that.CONFIG.currentPage === currentPage) {
							that.DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
						}
						this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
						needAppendNodeList = [...needAppendNodeList, pageBtnNode];
						currentPage--;
					}
					needAppendNodeList.reverse();
					needAppendNodeList.forEach((item) => {
						dataPagingNode.appendChild(item);
					});
				} else {
					/* 当前页 在计算出的页码内 */
					for (let index = 0; index < that.CONFIG.pageStep; index++) {
						let pageBtnNode = document.createElement("a");
						that.DOM_CONFIG.setAttributeWithPageId(pageBtnNode, currentPage);
						// @ts-ignore
						pageBtnNode.innerText = currentPage;
						if (that.CONFIG.currentPage === currentPage) {
							that.DOM_CONFIG.setAttributeWithCurrentPage(pageBtnNode);
						}
						this.setPageBtnClickEvent(pageBtnNode, dataPagingNode);
						dataPagingNode.appendChild(pageBtnNode);
						currentPage++;
					}
				}
			}
			/* 判断下一页按钮 是否开启 */
			if (that.CONFIG.nextBtn.enable) {
				this.setNextBtnClickEvent(nextBtnNode, dataPagingNode);
				dataPagingNode.appendChild(nextBtnNode);
			}
			/* 判断最后一页按钮 是否开启 */
			if (that.CONFIG.lastBtn.enable) {
				this.setLastBtnClickEvent(lastBtnNode, dataPagingNode);
				dataPagingNode.appendChild(lastBtnNode);
			}
			/* 配置中的当前页码为1时 设置 第一页、上一页按钮禁用 */
			if (that.CONFIG.currentPage === 1) {
				that.DOM_CONFIG.setAttributeWithDisabled(
					that.DOM_CONFIG.firstBtnNode.get()
				);
				that.DOM_CONFIG.setAttributeWithDisabled(
					that.DOM_CONFIG.prevBtnNode.get()
				);
			} else if (that.CONFIG.currentPage === that.PAGE_CONFIG.maxPage) {
				/* 如果为最大的页码 下一页、最后一页禁用 */
				that.DOM_CONFIG.setAttributeWithDisabled(
					that.DOM_CONFIG.nextBtnNode.get()
				);
				that.DOM_CONFIG.setAttributeWithDisabled(
					that.DOM_CONFIG.lastBtnNode.get()
				);
			}
			return dataPagingNode;
		}
		/**
		 * 设置 第一页 点击事件
		 * @param {HTMLElement} btnNode 元素
		 * @param {HTMLElement} dataPagingNode 分页元素(主)
		 */
		setFirstBtnClickEvent(btnNode, dataPagingNode) {
			let that = this;
			btnNode.onclick = function () {
				// @ts-ignore
				let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
				/* 当前页为第一页时无效 */
				// @ts-ignore
				if (that.DOM_CONFIG.getAttributeWithPageId(currentNode) === 1) {
					return;
				}
				that.CONFIG.firstBtn.callBack();
				let allPageNode = that.DOM_CONFIG.getAllPageNode(dataPagingNode);
				for (let i = 0; i < that.CONFIG.pageStep; i++) {
					let item = allPageNode[i];
					/* 设置当前页码为第一页 */
					if (i === 0) {
						// @ts-ignore
						that.DOM_CONFIG.setAttributeWithCurrentPage(item);
					} else {
						/* 移除其它设置的第一页 */
						// @ts-ignore
						that.DOM_CONFIG.removeAttributeWithCurrentPage(item);
					}
					// @ts-ignore
					that.DOM_CONFIG.setAttributeWithPageId(item, i + 1);
					// @ts-ignore
					item.innerText = i + 1;
				}
				that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
				/* 可视区域存在第一页的页码时，禁用第一页、上一页按钮 */
				if (that.DOM_CONFIG.getFirstPageNode(dataPagingNode)) {
					that.DOM_CONFIG.setAttributeWithDisabled(
						that.DOM_CONFIG.firstBtnNode.get()
					);
					that.DOM_CONFIG.setAttributeWithDisabled(
						that.DOM_CONFIG.prevBtnNode.get()
					);
				}
				that.CONFIG.pageChangeCallBack(1);
			};
		}
		/**
		 * 设置 上一页 点击事件
		 * @param {HTMLElement} btnNode 元素
		 * @param {HTMLElement} dataPagingNode 分页元素(主)
		 */
		setPrevBtnClickEvent(btnNode, dataPagingNode) {
			let that = this;
			btnNode.onclick = function () {
				// @ts-ignore
				let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
				/* 当前页为第一页时无效 */
				// @ts-ignore
				if (that.DOM_CONFIG.getAttributeWithPageId(currentNode) === 1) {
					return;
				}
				that.CONFIG.prevBtn.callBack();
				if (
					that.DOM_CONFIG.hasAttributeWithPageId(
						// @ts-ignore
						currentNode.previousElementSibling
					)
				) {
					// @ts-ignore
					currentNode.previousElementSibling.click();
				} else {
					let allPageNode = that.DOM_CONFIG.getAllPageNode(dataPagingNode);
					allPageNode.forEach((item, index) => {
						// @ts-ignore
						let page = that.DOM_CONFIG.getAttributeWithPageId(item);
						// @ts-ignore
						page--;
						// @ts-ignore
						that.DOM_CONFIG.setAttributeWithPageId(item, page);
						// @ts-ignore
						item.innerText = page;
					});
					that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.getCurrentPage());
				}
				that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
				/* 如果当前第1页可见，且当前所在页不是第1页，则禁用上一页按钮和第一页按钮 */
				if (
					that.DOM_CONFIG.getFirstPageNode(dataPagingNode) &&
					that.PAGE_CONFIG.getCurrentPage() == 1
				) {
					that.DOM_CONFIG.setAttributeWithDisabled(
						that.DOM_CONFIG.firstBtnNode.get()
					);
					that.DOM_CONFIG.setAttributeWithDisabled(
						that.DOM_CONFIG.prevBtnNode.get()
					);
				}
			};
		}
		/**
		 * 设置 下一页 点击事件
		 * @param {HTMLElement} btnNode 元素
		 * @param {HTMLElement} dataPagingNode 分页元素(主)
		 */
		setNextBtnClickEvent(btnNode, dataPagingNode) {
			let that = this;
			btnNode.onclick = function () {
				// @ts-ignore
				let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
				/* 当前页出于最后一页时 无效点击 */
				if (
					// @ts-ignore
					that.DOM_CONFIG.getAttributeWithPageId(currentNode) ===
					that.PAGE_CONFIG.maxPage
				) {
					return;
				}
				that.CONFIG.nextBtn.callBack();
				/* 如果后面的按钮存在页码属性 点击 */
				if (
					// @ts-ignore
					that.DOM_CONFIG.hasAttributeWithPageId(currentNode.nextElementSibling)
				) {
					// @ts-ignore
					currentNode.nextElementSibling.click();
				} else {
					let allPageNode = that.DOM_CONFIG.getAllPageNode(dataPagingNode);
					allPageNode.forEach((item, index) => {
						// @ts-ignore
						let page = that.DOM_CONFIG.getAttributeWithPageId(item);
						// @ts-ignore
						page++;
						// @ts-ignore
						if (page > that.PAGE_CONFIG.maxPage) {
							return;
						}
						// @ts-ignore
						that.DOM_CONFIG.setAttributeWithPageId(item, page);
						// @ts-ignore
						item.innerText = page;
					});
					that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.getCurrentPage());
				}
				that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
				if (
					// @ts-ignore
					that.DOM_CONFIG.getLastPageNode() &&
					that.PAGE_CONFIG.getCurrentPage() == that.PAGE_CONFIG.maxPage
				) {
					that.DOM_CONFIG.setAttributeWithDisabled(
						that.DOM_CONFIG.nextBtnNode.get()
					);
					that.DOM_CONFIG.setAttributeWithDisabled(
						that.DOM_CONFIG.lastBtnNode.get()
					);
				}
			};
		}
		/**
		 * 设置 最后一页 点击事件
		 * @param {HTMLElement} btnNode 元素
		 * @param {HTMLElement} dataPagingNode 分页元素(主)
		 */
		setLastBtnClickEvent(btnNode, dataPagingNode) {
			let that = this;
			btnNode.onclick = function () {
				// @ts-ignore
				let currentNode = that.DOM_CONFIG.getAttributeWithCurrentPage();
				if (
					// @ts-ignore
					that.DOM_CONFIG.getAttributeWithPageId(currentNode) ===
					that.PAGE_CONFIG.maxPage
				) {
					return;
				}
				that.CONFIG.lastBtn.callBack();
				let allPageNode = Array.from(
					that.DOM_CONFIG.getAllPageNode(dataPagingNode)
				);
				allPageNode.reverse();
				let pageCount = that.PAGE_CONFIG.maxPage;
				let index = 0;
				while (true) {
					if (that.PAGE_CONFIG.maxPage - pageCount > 3) {
						break;
					}
					let item = allPageNode[index];
					if (item == null) {
						break;
					}
					if (index === 0) {
						// @ts-ignore
						that.DOM_CONFIG.setAttributeWithCurrentPage(item);
					} else {
						// @ts-ignore
						that.DOM_CONFIG.removeAttributeWithCurrentPage(item);
					}

					// @ts-ignore
					that.DOM_CONFIG.setAttributeWithPageId(item, pageCount);
					// @ts-ignore
					item.innerText = pageCount;
					pageCount--;
					index++;
				}
				that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
				that.DOM_CONFIG.setAttributeWithDisabled(
					that.DOM_CONFIG.nextBtnNode.get()
				);
				that.DOM_CONFIG.setAttributeWithDisabled(
					that.DOM_CONFIG.lastBtnNode.get()
				);
				that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.maxPage);
			};
		}
		/**
		 * 设置 页 点击事件
		 * @param {HTMLElement} btnNode 元素
		 * @param {HTMLElement} dataPagingNode 分页元素(主)
		 * @this {Paging}
		 */
		setPageBtnClickEvent(btnNode, dataPagingNode) {
			let that = this;
			btnNode.onclick = function (event) {
				let eventBtnNode = event.target;
				that.DOM_CONFIG.getAllPageNode(dataPagingNode).forEach((item) => {
					/* 是当前点击的页码 */
					if (item == eventBtnNode) {
						/* 如果 当前点击的页码不是current */
						// @ts-ignore
						if (!that.DOM_CONFIG.hasAttributeWithCurrentPage(eventBtnNode)) {
							// @ts-ignore
							that.DOM_CONFIG.setAttributeWithCurrentPage(eventBtnNode);
							that.CONFIG.pageChangeCallBack(that.PAGE_CONFIG.getCurrentPage());
						}
					} else {
						// @ts-ignore
						that.DOM_CONFIG.removeAttributeWithCurrentPage(item);
					}
				});
				that.DOM_CONFIG.removeAllAttributeWithDisabled(dataPagingNode);
				/* 如果当前第1页可见，且当前所在页不是第1页，则禁用上一页按钮和第一页按钮 */
				if (
					that.DOM_CONFIG.getFirstPageNode(dataPagingNode) &&
					that.PAGE_CONFIG.getCurrentPage() == 1
				) {
					that.DOM_CONFIG.setAttributeWithDisabled(
						that.DOM_CONFIG.firstBtnNode.get()
					);
					that.DOM_CONFIG.setAttributeWithDisabled(
						that.DOM_CONFIG.prevBtnNode.get()
					);
				}
				/* 如果当前最后一页可见，且当前所在页不是最后一页，则禁用下一页按钮和最后一页按钮 */
				if (
					// @ts-ignore
					that.DOM_CONFIG.getLastPageNode() &&
					that.PAGE_CONFIG.getCurrentPage() == that.PAGE_CONFIG.maxPage
				) {
					that.DOM_CONFIG.setAttributeWithDisabled(
						that.DOM_CONFIG.nextBtnNode.get()
					);
					that.DOM_CONFIG.setAttributeWithDisabled(
						that.DOM_CONFIG.lastBtnNode.get()
					);
				}
			};
		}
		/**
		 * 把分页添加到某个父元素下
		 * @param {Node} parentNode
		 */
		append(parentNode) {
			let that = this;
			// @ts-ignore
			that.DOM_CONFIG.dataPagingNode.dom?.remove();
			that.DOM_CONFIG.dataPagingNode.dom = null;
			parentNode.appendChild(that.getDataPagingNode());
		}

		/**
		 * 动态修改配置，注意，修改后需要.append修改原来的元素
		 * @param {PagingConfig} details 配置
		 */
		changeConfig(details) {
			Object.assign(this.CONFIG, details);
		}

		/**
		 * 刷新页面
		 * 当总页数5页，当前在第3页，把第3页的数据删完，后面2页的数据会自动往前，需要重新计算数据
		 * 且重新计算的数据的页数大于当前页（第3页）时，当前页不变，若小于当前页（第3页），则当前页为计算好的最大页
		 * @param {PagingConfig["data"]} data 新的数据
		 */
		refresh(data) {
			if (data.length === this.CONFIG.data.length) {
				return;
			}
			this.CONFIG.data = [];
			// @ts-ignore
			this.CONFIG.data = data;
			let currentPage = this.PAGE_CONFIG.getCurrentPage();
			let maxPage = Math.ceil(data.length / this.CONFIG.pageCount);
			if (currentPage > maxPage) {
				currentPage = maxPage;
			}
			this.CONFIG.currentPage = currentPage;
			// @ts-ignore
			let parentElement = this.DOM_CONFIG.dataPagingNode.dom.parentElement;
			this.append(parentElement);
		}
	}
	return Paging;
});
