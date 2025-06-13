import { DOMUtils, log } from "@/env";
import { Panel } from "@components/setting/panel";

export const M_CSDNBlogArticleRightToolBar = {
	init() {
		DOMUtils.ready(() => {
			let $toolbar = this.createRightToolBar();
			Panel.execMenuOnce("m-csdn-blog-right-toolbar-like", () => {
				this.addLike($toolbar);
			});
			Panel.execMenuOnce("m-csdn-blog-right-toolbar-bury", () => {
				this.addBury($toolbar);
			});
		});
	},
	/**
	 * 创建右侧悬浮工具栏
	 */
	createRightToolBar() {
		let $toolbar = DOMUtils.createElement("div", {
			className: "gm-right-toolbar",
		});

		let shadowRoot = $toolbar.attachShadow({ mode: "closed" });
		let $style = DOMUtils.createElement("style", {
			innerHTML: /*css*/ `
                .gm-right-toolbar-container{
                    position: fixed;
                    top: 0;
                    right: 0;
                    z-index: 20000;
                }
                .gm-right-toolbar-container .toolbar-item{

                }
            `,
		});
		let $toolbarContainer = DOMUtils.createElement("div", {
			className: "gm-right-toolbar-container",
		});
		shadowRoot.appendChild($style);
		shadowRoot.appendChild($toolbarContainer);

		document.body.appendChild($toolbar);
		console.log($toolbar);
		return $toolbarContainer;
	},
	/**
	 * 添加点赞按钮
	 */
	addLike($toolbar: HTMLElement) {
		log.info(`添加点赞按钮`);
		let $item = DOMUtils.createElement("div", {
			className: "toolbar-item",
			innerHTML: /*html*/ `
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04zM857.28 344.992l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824z">
                </path>
            </svg>
            `,
		});
		$toolbar.appendChild($item);
	},
	/**
	 * 添加点踩按钮
	 */
	addBury($toolbar: HTMLElement) {
		log.info(`添加点踩按钮`);
		let $item = DOMUtils.createElement("div", {
			className: "toolbar-item",
			innerHTML: /*html*/ `
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M723.2 77.5c0-7.3-5.9-13.3-13.3-13.3H288.7c-1.5 0-3 0.1-4.5 0.5-38.3 1.6-73.4 22.5-92.4 55.5-0.5 0.9-1 1.9-1.4 2.9C186.3 133.4 89.6 376.9 70.2 449 47.8 532.4 97.5 618.5 181 640.9c12.3 3.3 25.1 4.8 40.4 4.8l104.8 0.4c-13 59.4-15.2 148.5-15.2 201.6 0 61.7 50.2 111.9 111.9 111.9S535 909.4 535 847.6v-22.4c0-107.3 75.9-197.1 176.7-218.8 6.7-1.4 11.5-7.4 11.5-14.3V77.5z m147.5-13.3h-81.5c-7.3 0-13.3 5.9-13.3 13.3v514.6c0 5.1 4.2 9.3 9.3 9.3h85.6c49.4 0 89.5-40.1 89.5-89.5V153.8c-0.1-49.4-40.2-89.6-89.6-89.6z" fill="">
                </path>
            </svg>
            `,
		});
		$toolbar.appendChild($item);
	},
};
