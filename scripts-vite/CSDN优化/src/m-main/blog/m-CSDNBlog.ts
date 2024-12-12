import ShieldCSS from "./css/shield.css?raw";
import MBlogCSS from "./css/blog.css?raw";
import { addStyle } from "@/env";

export const M_CSDNBlog = {
	init() {
		this.addCSS();
	},
	/**
	 * 添加屏蔽CSS
	 */
	addCSS() {
		return [addStyle(ShieldCSS), addStyle(MBlogCSS)];
	},
};
