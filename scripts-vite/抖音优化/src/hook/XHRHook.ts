import { unsafeWindow } from "ViteGM";

class XHRHook {
	$win;
	$originalXHROpen;
	$originalXHRSend;
	$originalFetch;
	$data = {};
	constructor() {
		this.$win = unsafeWindow;
		this.$originalXHROpen = this.$win.XMLHttpRequest.prototype.open;
		this.$originalXHRSend = this.$win.XMLHttpRequest.prototype.send;
		this.$originalFetch = this.$win.fetch;

		this.overrideXHR();
		this.overrideFetch();
	}
	/**
	 * 覆盖 XMLHttpRequest
	 */
	private overrideXHR() {
		const that = this;
		// @ts-ignore
		unsafeWindow.XMLHttpRequest.prototype.open = function (...args) {
			Reflect.apply(that.$originalXHROpen, this, args);
		};
		unsafeWindow.XMLHttpRequest.prototype.send = function (...args) {
			Reflect.apply(that.$originalXHRSend, this, args);
		};
	}
	/**
	 * 覆盖 fetch
	 */
	private overrideFetch() {
		const that = this;
		unsafeWindow.fetch = function (...args) {
			return new Promise((resolve, reject) => {
				Reflect.apply(that.$originalFetch, this, args);
			});
		};
	}
	hook() {}
}
