var DataPaging = (function () {
    'use strict';

    const PagingDefaultConfig = () => {
        return {
            data: [],
            pageShowDataMaxCount: 5,
            pageMaxStep: 3,
            currentPage: 1,
            pageChangeCallBack: function () { },
            prevBtn: {
                enable: true,
                callBack: function () { },
            },
            nextBtn: {
                enable: true,
                callBack: function () { },
            },
            firstBtn: {
                enable: true,
                callBack: function () { },
            },
            lastBtn: {
                enable: true,
                callBack: function () { },
            },
        };
    };

    const PagingUtils = {
        /**
         * 设置安全的html
         */
        setSafeHTML($el, text) {
            // 创建 TrustedHTML 策略（需 CSP 允许）
            try {
                $el.innerHTML = text;
            }
            catch {
                // @ts-ignore
                if (globalThis.trustedTypes) {
                    // @ts-ignore
                    const policy = globalThis.trustedTypes.createPolicy("safe-innerHTML", {
                        createHTML: (html) => html,
                    });
                    $el.innerHTML = policy.createHTML(text);
                }
                else {
                    throw new Error("PagingUtils trustedTypes is not defined");
                }
            }
        },
    };

    const version = "0.0.1";

    class Paging {
        version = version;
        CONFIG;
        PAGE_CONFIG = {
            /**
             * 获取当前所在页
             */
            currentPage: () => {
                return this.DOM_CONFIG.getAttributeWithPageId(this.DOM_CONFIG.getAttributeWithCurrentPage());
            },
            /** 最大页码 */
            maxPage: 1,
        };
        DOM_CONFIG = {
            /* 整个分页元素 */
            $pageWrapper: {
                localName: "div",
                id: "data-paging-wrapper",
                dom: null,
            },
            /* 第一页按钮 */
            firstBtnNode: {
                localName: "a",
                className: "pg-first",
                svgHTML: `<svg t="1694497357294" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4758" width="20"><path d="M730.639277 211.376748l60.943177 60.943176-301.698894 301.698893L428.940384 513.075641z" p-id="4759"></path><path d="M730.496772 814.924547l60.943176-60.943176-301.698893-301.698893L428.797879 513.225654z" p-id="4760"></path><path d="M298.666667 213.333333h85.333333v597.333334H298.666667z" p-id="4761"></path></svg>`,
                get: () => {
                    return this.DOM_CONFIG.$pageWrapper.dom.querySelector(`${this.DOM_CONFIG.firstBtnNode.localName}.${this.DOM_CONFIG.firstBtnNode.className}`);
                },
            },
            /* 上一页按钮 */
            prevBtnNode: {
                localName: "a",
                className: "pg-prev",
                svgHTML: `<svg t="1694497840770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5272" width="20"><path d="M620.322607 151.04875l60.943176 60.943176-362.038672 362.038672L258.283935 513.087422z" p-id="5273"></path><path d="M620.180101 875.252545l60.943177-60.943176-362.038672-362.038672L258.141429 513.213873z" p-id="5274"></path></svg>`,
                get: () => {
                    return this.DOM_CONFIG.$pageWrapper.dom.querySelector(`${this.DOM_CONFIG.prevBtnNode.localName}.${this.DOM_CONFIG.prevBtnNode.className}`);
                },
            },
            /* 下一页按钮 */
            nextBtnNode: {
                localName: "a",
                className: "pg-next",
                svgHTML: `<svg t="1694497949481" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5465" width="20"><path d="M403.399239 151.02258l-60.943177 60.943177 362.038672 362.038672L765.437911 513.061252z" p-id="5466"></path><path d="M403.576858 875.263008l-60.943176-60.943176 362.038672-362.038672L765.61553 513.224336z" p-id="5467"></path></svg>`,
                get: () => {
                    return this.DOM_CONFIG.$pageWrapper.dom.querySelector(`${this.DOM_CONFIG.nextBtnNode.localName}.${this.DOM_CONFIG.nextBtnNode.className}`);
                },
            },
            /* 最后一页按钮 */
            lastBtnNode: {
                localName: "a",
                className: "pg-last",
                svgHTML: `<svg t="1694498035538" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2299" width="20"><path d="M516.266667 490.666667L256 230.4 315.733333 170.666667l320 320L315.733333 810.666667 256 750.933333l260.266667-260.266666zM678.4 170.666667h85.333333v640h-85.333333V170.666667z" p-id="2300"></path></svg>`,
                get: () => {
                    return this.DOM_CONFIG.$pageWrapper.dom.querySelector(`${this.DOM_CONFIG.lastBtnNode.localName}.${this.DOM_CONFIG.lastBtnNode.className}`);
                },
            },
            /**
             * 设置 元素的 页码 值
             * @param $el
             * @param page
             */
            setAttributeWithPageId: ($el, page) => {
                $el.setAttribute("page-id", String(page));
            },
            /**
             * 获取 元素 的页码属性
             * @param $el
             */
            getAttributeWithPageId: ($el) => {
                const pageId = $el?.getAttribute("page-id");
                return pageId ? parseInt(pageId) : null;
            },
            /**
             * 判断 元素 是否存在页码属性
             * @param $el
             */
            hasAttributeWithPageId: ($el) => {
                return $el.hasAttribute("page-id");
            },
            /**
             * 设置 元素的属性 为当前所在页码
             * @param $el
             */
            setAttributeWithCurrentPage: ($el) => {
                $el.setAttribute("data-current-page", "");
            },
            /**
             * 获取当前页码的元素
             * @param $pageWrapper
             */
            getAttributeWithCurrentPage: ($pageWrapper) => {
                return ($pageWrapper || this.DOM_CONFIG.$pageWrapper.dom).querySelector("a[data-current-page]");
            },
            /**
             * 判断 元素 是否存在 当前页的属性
             * @param $el
             */
            hasAttributeWithCurrentPage: ($el) => {
                return $el.hasAttribute("data-current-page");
            },
            /**
             * 移除 当前页码的属性
             * @param $el
             */
            removeAttributeWithCurrentPage: ($el) => {
                $el.removeAttribute("data-current-page");
            },
            /**
             * 设置 元素 禁用
             * @param $el
             */
            setAttributeWithDisabled: ($el) => {
                $el.setAttribute("disabled", "true");
            },
            /**
             * 移除当前页面的禁用的元素
             * @param $pageWrapper
             */
            removeAllAttributeWithDisabled: ($pageWrapper) => {
                ($pageWrapper || this.DOM_CONFIG.$pageWrapper.dom)
                    ?.querySelectorAll("a[class][disabled]")
                    .forEach((item) => {
                    item.removeAttribute("disabled");
                });
            },
            /**
             * 获取 第一页 元素节点
             * @param $pageWrapper
             */
            getFirstPageNode: ($pageWrapper) => {
                return ($pageWrapper || this.DOM_CONFIG.$pageWrapper.dom).querySelector("a[page-id='1']");
            },
            /**
             * 获取 最后一页 元素节点
             * @param {$pageWrapper
             */
            getLastPageNode: ($pageWrapper) => {
                return ($pageWrapper || this.DOM_CONFIG.$pageWrapper.dom).querySelector(`a[page-id='${this.PAGE_CONFIG.maxPage}']`);
            },
            /**
             * 获取当前所有的页码元素节点
             * @param $pageWrapper
             */
            getAllPageNode: ($pageWrapper) => {
                return Array.from(($pageWrapper || this.DOM_CONFIG.$pageWrapper.dom).querySelectorAll("a[page-id]"));
            },
        };
        /**
         * @param config
         */
        constructor(config) {
            this.CONFIG = PagingDefaultConfig();
            this.changeConfig(config);
        }
        /**
         * 隐藏分页容器
         * @param $wrapper 分页容器
         */
        hide($wrapper = this.DOM_CONFIG.$pageWrapper.dom) {
            if (!$wrapper)
                return;
            $wrapper.style.display = "none";
        }
        /**
         * 显示分页容器
         * @param $wrapper 分页容器
         */
        show($wrapper = this.DOM_CONFIG.$pageWrapper.dom) {
            if (!$wrapper)
                return;
            $wrapper.style.display = "";
        }
        /**
         * 判断分页容器是否隐藏
         * @param $wrapper 分页容器
         */
        isHide($wrapper = this.DOM_CONFIG.$pageWrapper.dom) {
            if (!$wrapper)
                return;
            return $wrapper.style.display.includes("none");
        }
        /**
         * 销毁分页容器
         */
        destory() {
            const $wrapper = this.DOM_CONFIG.$pageWrapper.dom;
            if (!$wrapper)
                return;
            const $parent = $wrapper.parentElement;
            $parent?.removeChild?.($wrapper);
            this.DOM_CONFIG.$pageWrapper.dom = null;
        }
        /**
         * 添加CSS
         * @param $parent 添加到目标元素
         */
        addCSS($parent = document.head) {
            const $style = document.createElement("style");
            $style.setAttribute("type", "text/css");
            const cssText = /*css*/ `@charset "utf-8";
		#${this.DOM_CONFIG.$pageWrapper.id} {
			text-align: center;
			display: inline-block;
		}
		#${this.DOM_CONFIG.$pageWrapper.id} .${this.DOM_CONFIG.firstBtnNode.className},
		#${this.DOM_CONFIG.$pageWrapper.id} .${this.DOM_CONFIG.prevBtnNode.className},
		#${this.DOM_CONFIG.$pageWrapper.id} .${this.DOM_CONFIG.nextBtnNode.className},
		#${this.DOM_CONFIG.$pageWrapper.id} .${this.DOM_CONFIG.lastBtnNode.className} {
			font-family: Arial, sans-serif;
			color: #333;
			font-size: 22px;
			fill: currentColor;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
		}
		#${this.DOM_CONFIG.$pageWrapper.id} a,
		#${this.DOM_CONFIG.$pageWrapper.id} span {
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
		#${this.DOM_CONFIG.$pageWrapper.id} a:hover,
		#${this.DOM_CONFIG.$pageWrapper.id} span:hover {
			border-color: #3897cd;
			color: #3897cd;
			position: relative;
			z-index: 1;
		}
		#${this.DOM_CONFIG.$pageWrapper.id} a {
			cursor: pointer;
			user-select: none;
		}
		#${this.DOM_CONFIG.$pageWrapper.id} a[data-current-page] {
			background-color: #222a35;
			color: #fff;
			border-color: #ebebeb;
			position: relative;
			z-index: 1;
		}
		#${this.DOM_CONFIG.$pageWrapper.id} a.${this.DOM_CONFIG.firstBtnNode.className}[disabled="true"],
		#${this.DOM_CONFIG.$pageWrapper.id} a.${this.DOM_CONFIG.prevBtnNode.className}[disabled="true"],
		#${this.DOM_CONFIG.$pageWrapper.id} a.${this.DOM_CONFIG.nextBtnNode.className}[disabled="true"],
		#${this.DOM_CONFIG.$pageWrapper.id} a.${this.DOM_CONFIG.lastBtnNode.className}[disabled="true"]{
			cursor: not-allowed;
			border: 1px solid transparent;
			color: #c9c9c9;
		}
		`;
            PagingUtils.setSafeHTML($style, cssText);
            $parent.appendChild($style);
        }
        /**
         * 创建分页元素
         */
        createDataPagingWrapper() {
            const $pageWrapper = document.createElement(this.DOM_CONFIG.$pageWrapper.localName);
            this.DOM_CONFIG.$pageWrapper.dom = $pageWrapper;
            $pageWrapper.id = this.DOM_CONFIG.$pageWrapper.id;
            /* 第一页 */
            const $firstPage = document.createElement(this.DOM_CONFIG.firstBtnNode.localName);
            PagingUtils.setSafeHTML($firstPage, this.DOM_CONFIG.firstBtnNode.svgHTML);
            /* 上一页 */
            const $prevPage = document.createElement(this.DOM_CONFIG.prevBtnNode.localName);
            PagingUtils.setSafeHTML($prevPage, this.DOM_CONFIG.prevBtnNode.svgHTML);
            /* 下一页 */
            const $nextPage = document.createElement(this.DOM_CONFIG.nextBtnNode.localName);
            PagingUtils.setSafeHTML($nextPage, this.DOM_CONFIG.nextBtnNode.svgHTML);
            /* 最后一页 */
            const $lastPage = document.createElement(this.DOM_CONFIG.lastBtnNode.localName);
            PagingUtils.setSafeHTML($lastPage, this.DOM_CONFIG.lastBtnNode.svgHTML);
            $firstPage.className = this.DOM_CONFIG.firstBtnNode.className;
            $prevPage.className = this.DOM_CONFIG.prevBtnNode.className;
            $nextPage.className = this.DOM_CONFIG.nextBtnNode.className;
            $lastPage.className = this.DOM_CONFIG.lastBtnNode.className;
            /* 计算总数据量除以显示的数据量 得出分页的数量 */
            this.PAGE_CONFIG.maxPage = Math.ceil(this.CONFIG.data.length / this.CONFIG.pageShowDataMaxCount);
            /* 校正超出或小于的当前页码 */
            if (this.CONFIG.currentPage < 1) {
                this.CONFIG.currentPage = 1;
            }
            else if (this.CONFIG.currentPage > this.PAGE_CONFIG.maxPage) {
                this.CONFIG.currentPage = this.PAGE_CONFIG.maxPage;
            }
            /* 超过1 才开启分页 */
            if (this.PAGE_CONFIG.maxPage < 2) {
                return $pageWrapper;
            }
            /* 判断第一页按钮 是否开启 */
            if (this.CONFIG.firstBtn.enable) {
                this.setFirstBtnClickEvent($firstPage, $pageWrapper);
                $pageWrapper.appendChild($firstPage);
            }
            /* 判断上一页按钮 是否开启 */
            if (this.CONFIG.prevBtn.enable) {
                this.setPrevBtnClickEvent($prevPage, $pageWrapper);
                $pageWrapper.appendChild($prevPage);
            }
            let currentPage = this.CONFIG.currentPage;
            /* 计算出的最大页码在限制的显示页码数量内 */
            /* 比如计算出的页码总共有5个，设置中当前能显示出的页码按钮元素为3个 */
            if (this.CONFIG.pageMaxStep > this.PAGE_CONFIG.maxPage) {
                for (let index = currentPage; index <= this.PAGE_CONFIG.maxPage; index++) {
                    const $page = document.createElement("a");
                    this.DOM_CONFIG.setAttributeWithPageId($page, index);
                    $page.innerText = String(index);
                    if (this.CONFIG.currentPage === index) {
                        this.DOM_CONFIG.setAttributeWithCurrentPage($page);
                    }
                    this.setPageBtnClickEvent($page, $pageWrapper);
                    $pageWrapper.appendChild($page);
                }
            }
            else {
                /* 如果 当前页 + 限制显示的页码 大于等于 最大页，那么 从最后一页倒序着添加 */
                if (currentPage + this.CONFIG.pageMaxStep > this.PAGE_CONFIG.maxPage) {
                    currentPage = this.PAGE_CONFIG.maxPage;
                    const needAppendNodeList = [];
                    for (let index = 0; index < this.CONFIG.pageMaxStep; index++) {
                        const $page = document.createElement("a");
                        this.DOM_CONFIG.setAttributeWithPageId($page, currentPage);
                        $page.innerText = String(currentPage);
                        if (this.CONFIG.currentPage === currentPage) {
                            this.DOM_CONFIG.setAttributeWithCurrentPage($page);
                        }
                        this.setPageBtnClickEvent($page, $pageWrapper);
                        needAppendNodeList.push($page);
                        currentPage--;
                    }
                    needAppendNodeList.reverse();
                    needAppendNodeList.forEach((item) => {
                        $pageWrapper.appendChild(item);
                    });
                }
                else {
                    /* 当前页 在计算出的页码内 */
                    for (let index = 0; index < this.CONFIG.pageMaxStep; index++) {
                        const $page = document.createElement("a");
                        this.DOM_CONFIG.setAttributeWithPageId($page, currentPage);
                        $page.innerText = String(currentPage);
                        if (this.CONFIG.currentPage === currentPage) {
                            this.DOM_CONFIG.setAttributeWithCurrentPage($page);
                        }
                        this.setPageBtnClickEvent($page, $pageWrapper);
                        $pageWrapper.appendChild($page);
                        currentPage++;
                    }
                }
            }
            /* 判断下一页按钮 是否开启 */
            if (this.CONFIG.nextBtn.enable) {
                this.setNextBtnClickEvent($nextPage, $pageWrapper);
                $pageWrapper.appendChild($nextPage);
            }
            /* 判断最后一页按钮 是否开启 */
            if (this.CONFIG.lastBtn.enable) {
                this.setLastBtnClickEvent($lastPage, $pageWrapper);
                $pageWrapper.appendChild($lastPage);
            }
            /* 配置中的当前页码为1时 设置 第一页、上一页按钮禁用 */
            if (this.CONFIG.currentPage === 1) {
                this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.firstBtnNode.get());
                this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.prevBtnNode.get());
            }
            else if (this.CONFIG.currentPage === this.PAGE_CONFIG.maxPage) {
                /* 如果为最大的页码 下一页、最后一页禁用 */
                this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.nextBtnNode.get());
                this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.lastBtnNode.get());
            }
            return $pageWrapper;
        }
        /**
         * 设置 第一页 点击事件
         * @param $page 分页元素
         * @param $pageWrapper 分页按钮的容器元素
         */
        setFirstBtnClickEvent($page, $pageWrapper) {
            $page.addEventListener("click", async (event) => {
                const $currentPage = this.DOM_CONFIG.getAttributeWithCurrentPage();
                /* 当前页为第一页时无效 */
                if (this.DOM_CONFIG.getAttributeWithPageId($currentPage) === 1) {
                    return;
                }
                await this.CONFIG.firstBtn?.callBack?.(event);
                const $allPage = this.DOM_CONFIG.getAllPageNode($pageWrapper);
                for (let index = 0; index < this.CONFIG.pageMaxStep; index++) {
                    const $page = $allPage[index];
                    if ($page == null) {
                        continue;
                    }
                    /* 设置当前页码为第一页 */
                    if (index === 0) {
                        this.DOM_CONFIG.setAttributeWithCurrentPage($page);
                    }
                    else {
                        /* 移除其它设置的第一页 */
                        this.DOM_CONFIG.removeAttributeWithCurrentPage($page);
                    }
                    this.DOM_CONFIG.setAttributeWithPageId($page, index + 1);
                    $page.innerText = String(index + 1);
                }
                this.DOM_CONFIG.removeAllAttributeWithDisabled($pageWrapper);
                /* 可视区域存在第一页的页码时，禁用第一页、上一页按钮 */
                if (this.DOM_CONFIG.getFirstPageNode($pageWrapper)) {
                    this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.firstBtnNode.get());
                    this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.prevBtnNode.get());
                }
                this.CONFIG.pageChangeCallBack(1);
            });
        }
        /**
         * 设置 上一页 点击事件
         * @param $page 分页元素
         * @param $pageWrapper 分页按钮的容器元素
         */
        setPrevBtnClickEvent($page, $pageWrapper) {
            $page.addEventListener("click", async (event) => {
                const $currentPage = this.DOM_CONFIG.getAttributeWithCurrentPage();
                /* 当前页为第一页时无效 */
                if (this.DOM_CONFIG.getAttributeWithPageId($currentPage) === 1) {
                    return;
                }
                await this.CONFIG.prevBtn?.callBack?.(event);
                const $prev = $currentPage.previousElementSibling;
                if ($prev && this.DOM_CONFIG.hasAttributeWithPageId($prev)) {
                    $prev.click();
                }
                else {
                    const $allPage = this.DOM_CONFIG.getAllPageNode($pageWrapper);
                    $allPage.forEach((item) => {
                        let page = this.DOM_CONFIG.getAttributeWithPageId(item);
                        page--;
                        this.DOM_CONFIG.setAttributeWithPageId(item, page);
                        item.innerText = String(page);
                    });
                    this.CONFIG.pageChangeCallBack(this.PAGE_CONFIG.currentPage());
                }
                this.DOM_CONFIG.removeAllAttributeWithDisabled($pageWrapper);
                /* 如果当前第1页可见，且当前所在页不是第1页，则禁用上一页按钮和第一页按钮 */
                if (this.DOM_CONFIG.getFirstPageNode($pageWrapper) && this.PAGE_CONFIG.currentPage() == 1) {
                    this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.firstBtnNode.get());
                    this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.prevBtnNode.get());
                }
            });
        }
        /**
         * 设置 下一页 点击事件
         * @param $page 分页元素
         * @param $pageWrapper 分页按钮的容器元素
         */
        setNextBtnClickEvent($page, $pageWrapper) {
            $page.addEventListener("click", async (event) => {
                const $currentPage = this.DOM_CONFIG.getAttributeWithCurrentPage();
                /* 当前页出于最后一页时 无效点击 */
                if (this.DOM_CONFIG.getAttributeWithPageId($currentPage) === this.PAGE_CONFIG.maxPage) {
                    return;
                }
                await this.CONFIG.nextBtn?.callBack?.(event);
                /* 如果后面的按钮存在页码属性 点击 */
                const $next = $currentPage.nextElementSibling;
                if ($next && this.DOM_CONFIG.hasAttributeWithPageId($next)) {
                    $next.click();
                }
                else {
                    const allPageNode = this.DOM_CONFIG.getAllPageNode($pageWrapper);
                    allPageNode.forEach((item) => {
                        let page = this.DOM_CONFIG.getAttributeWithPageId(item);
                        page++;
                        if (page > this.PAGE_CONFIG.maxPage) {
                            return;
                        }
                        this.DOM_CONFIG.setAttributeWithPageId(item, page);
                        item.innerText = String(page);
                    });
                    this.CONFIG.pageChangeCallBack(this.PAGE_CONFIG.currentPage());
                }
                this.DOM_CONFIG.removeAllAttributeWithDisabled($pageWrapper);
                if (this.DOM_CONFIG.getLastPageNode() && this.PAGE_CONFIG.currentPage() == this.PAGE_CONFIG.maxPage) {
                    this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.nextBtnNode.get());
                    this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.lastBtnNode.get());
                }
            });
        }
        /**
         * 设置 最后一页 点击事件
         * @param $page 分页元素
         * @param $pageWrapper 分页按钮的容器元素
         */
        setLastBtnClickEvent($page, $pageWrapper) {
            $page.addEventListener("click", async (event) => {
                const $currentPage = this.DOM_CONFIG.getAttributeWithCurrentPage();
                if (this.DOM_CONFIG.getAttributeWithPageId($currentPage) === this.PAGE_CONFIG.maxPage) {
                    return;
                }
                await this.CONFIG.lastBtn?.callBack?.(event);
                const $allPage = Array.from(this.DOM_CONFIG.getAllPageNode($pageWrapper));
                $allPage.reverse();
                let pageCount = this.PAGE_CONFIG.maxPage;
                let index = 0;
                while (true) {
                    if (this.PAGE_CONFIG.maxPage - pageCount > 3) {
                        break;
                    }
                    const $page = $allPage[index];
                    if ($page == null) {
                        break;
                    }
                    if (index === 0) {
                        this.DOM_CONFIG.setAttributeWithCurrentPage($page);
                    }
                    else {
                        this.DOM_CONFIG.removeAttributeWithCurrentPage($page);
                    }
                    this.DOM_CONFIG.setAttributeWithPageId($page, pageCount);
                    $page.innerText = String(pageCount);
                    pageCount--;
                    index++;
                }
                this.DOM_CONFIG.removeAllAttributeWithDisabled($pageWrapper);
                this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.nextBtnNode.get());
                this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.lastBtnNode.get());
                this.CONFIG.pageChangeCallBack(this.PAGE_CONFIG.maxPage);
            });
        }
        /**
         * 设置 页 点击事件
         * @param $page 分页元素
         * @param $pageWrapper 分页按钮的容器元素
         */
        setPageBtnClickEvent($page, $pageWrapper) {
            $page.addEventListener("click", async () => {
                const $clickButton = $page;
                const $allPageList = this.DOM_CONFIG.getAllPageNode($pageWrapper);
                for (const item of $allPageList) {
                    /* 是当前点击的页码 */
                    if (item == $clickButton) {
                        /* 如果 当前点击的页码不是current */
                        if (!this.DOM_CONFIG.hasAttributeWithCurrentPage($clickButton)) {
                            this.DOM_CONFIG.setAttributeWithCurrentPage($clickButton);
                            const currentPage = this.PAGE_CONFIG.currentPage();
                            await this.CONFIG?.pageChangeCallBack?.(currentPage);
                        }
                    }
                    else {
                        this.DOM_CONFIG.removeAttributeWithCurrentPage(item);
                    }
                }
                this.DOM_CONFIG.removeAllAttributeWithDisabled($pageWrapper);
                /* 如果当前第1页可见，且当前所在页不是第1页，则禁用上一页按钮和第一页按钮 */
                if (this.DOM_CONFIG.getFirstPageNode($pageWrapper) && this.PAGE_CONFIG.currentPage() == 1) {
                    this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.firstBtnNode.get());
                    this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.prevBtnNode.get());
                }
                /* 如果当前最后一页可见，且当前所在页不是最后一页，则禁用下一页按钮和最后一页按钮 */
                if (this.DOM_CONFIG.getLastPageNode() && this.PAGE_CONFIG.currentPage() == this.PAGE_CONFIG.maxPage) {
                    this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.nextBtnNode.get());
                    this.DOM_CONFIG.setAttributeWithDisabled(this.DOM_CONFIG.lastBtnNode.get());
                }
            });
        }
        /**
         * 把分页添加到某个父元素下
         * @param $parent
         */
        append($parent) {
            const isHide = this.isHide();
            // 销毁旧的
            this.destory();
            const $pageWrapper = this.createDataPagingWrapper();
            if (isHide) {
                // 旧的是隐藏状态
                // 继承该状态
                this.hide($pageWrapper);
            }
            $parent.appendChild($pageWrapper);
        }
        /**
         * 把分页添加到某个元素之后
         */
        after($el) {
            const isHide = this.isHide();
            const $parent = $el.parentElement;
            const $nextSlibling = $el.nextSibling;
            // 销毁旧的
            this.destory();
            const $pageWrapper = this.createDataPagingWrapper();
            if (isHide) {
                // 旧的是隐藏状态
                // 继承该状态
                this.hide($pageWrapper);
            }
            if (!$parent || $nextSlibling) {
                // 任意一个不行
                $el.after($pageWrapper);
            }
            else {
                $parent.insertBefore($pageWrapper, $nextSlibling);
            }
        }
        /**
         * 动态修改配置，注意，修改后需要.append修改原来的元素
         * @param config 配置
         */
        changeConfig(config) {
            Object.assign(this.CONFIG, config);
        }
        /**
         * 刷新页面，重新渲染分页元素
         * @param data 新的数据
         * @example
         * 当总页数5页，当前在第3页，把第3页的数据删完，后面2页的数据会自动往前，需要重新计算数据
         * 且重新计算的数据的页数大于当前页（第3页）时，当前页不变，若小于当前页（第3页），则当前页为计算好的最大页
         */
        refresh(data) {
            this.CONFIG.data = [];
            this.CONFIG.data = data;
            let currentPage = this.PAGE_CONFIG.currentPage();
            const maxPage = Math.ceil(data.length / this.CONFIG.pageShowDataMaxCount);
            if (currentPage > maxPage) {
                currentPage = maxPage;
            }
            this.CONFIG.currentPage = currentPage;
            const $pageWrapper = this.DOM_CONFIG.$pageWrapper.dom;
            if ($pageWrapper) {
                this.after($pageWrapper);
            }
        }
    }

    const DataPaging = Paging;

    return DataPaging;

})();
//# sourceMappingURL=index.iife.js.map
