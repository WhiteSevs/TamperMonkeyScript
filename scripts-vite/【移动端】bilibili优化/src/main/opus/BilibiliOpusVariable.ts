import { BilibiliData } from "@/data/BlibiliData";
import { log } from "@/env";
import { VueUtils } from "@components/utils/VueUtils";
import type { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { BilibiliOpus } from "./BilibiliOpus";
import { Panel } from "@components/setting/panel";

/**
 * 变量设置
 */
export const BilibiliOpusVariable = {
	$data: {
		dispatchCallBackList: <Function[]>[],
	},
	init() {
		Panel.execMenu("bili-opus-variable-autoOpenApp", () => {
			this.autoOpenApp();
		});
		Panel.execMenu("bili-opus-variable-go404", () => {
			this.go404();
		});
		Panel.execMenu("bili-opus-variable-handleFallback", () => {
			this.dispatch((vueInstance, fnName) => {
				if (
					typeof fnName === "string" &&
					fnName === "opus/handleFallback" &&
					![1, 2].includes(vueInstance.fallback.type)
				) {
					// handleFallback
					log.success(`禁止调用handleFallback函数前往404`);
					if (
						typeof vueInstance?.showComment === "boolean" &&
						vueInstance.showComment &&
						typeof vueInstance?.initFullComment === "function"
					) {
						// 这时候评论区也需要重载
						vueInstance.initFullComment();
					}
					return false;
				}
			});
		});
	},
	/**
	 * isLimit=false
	 *
	 * 作用：自动展开全文
	 */
	isLimit() {
		log.info(`等待 观察并覆盖变量isLimit`);
		VueUtils.watchVuePropChange(
			BilibiliData.className.opus,
			(vueInstance) => vueInstance.isLimit,
			(vueInstance) => {
				// isLimit
				vueInstance.isLimit = false;
				log.success(`观察者：覆盖变量isLimit=false`);
			}
		);
	},
	/**
	 * 覆盖函数autoOpenApp
	 */
	autoOpenApp() {
		VueUtils.waitVuePropToSet(BilibiliData.className.opus, {
			msg: "等待 覆盖函数autoOpenApp",
			check(vueInstance) {
				return typeof vueInstance?.autoOpenApp === "function";
			},
			set(vueInstance) {
				log.success(`成功 覆盖函数autoOpenApp`);
				vueInstance.autoOpenApp = function () {
					log.success(`禁止调用autoOpenApp函数`);
				};
			},
		});
	},
	/**
	 * 覆盖函数go404
	 */
	go404() {
		VueUtils.waitVuePropToSet(BilibiliData.className.opus, {
			msg: "等待 覆盖函数go404",
			check(vueInstance) {
				return typeof vueInstance?.go404 === "function";
			},
			set(vueInstance) {
				log.success(`成功 覆盖函数go404`);
				vueInstance.go404 = function () {
					log.success(`禁止调用go404函数`);
				};
			},
		});
	},
	/**
	 * 覆盖对象fallback
	 *
	 */
	fallback() {
		VueUtils.waitVuePropToSet(BilibiliData.className.opus, {
			msg: "等待 覆盖对象fallback",
			check(vueInstance) {
				return typeof vueInstance?.fallback?.type === "number";
			},
			set(vueInstance) {
				log.success(`成功 覆盖对象fallback`);
				vueInstance.$watch(
					() => vueInstance?.fallback,
					() => {
						vueInstance.fallback = null;
						log.success(`覆盖对象fallback`);
					},
					{
						deep: true,
						immediate: true,
					}
				);
			},
		});
	},
	/**
	 * 覆盖函数dispatch
	 */
	dispatch(
		callback: (vueInstance: Vue2Instance, fnName: string) => void | false
	) {
		let callbackStr = callback.toString();
		for (
			let index = 0;
			index < this.$data.dispatchCallBackList.length;
			index++
		) {
			const fn = this.$data.dispatchCallBackList[index];
			if (fn.toString() === callbackStr) {
				// 排除掉重复的
				return;
			}
		}
		log.info(`添加dispatch回调判断`);
		this.$data.dispatchCallBackList.push(callback);
		if (this.$data.dispatchCallBackList.length > 1) {
			return;
		}
		const that = this;
		VueUtils.waitVuePropToSet(BilibiliData.className.opus, {
			msg: "等待 覆盖函数dispatch",
			check(vueInstance) {
				return typeof vueInstance?.$store?.dispatch === "function";
			},
			set(vueInstance) {
				log.success(`成功 覆盖函数dispatch`);
				let originDispatch = vueInstance.$store.dispatch;
				vueInstance.$store.dispatch = function (...args: any[]) {
					let fnName = args[0];
					for (
						let index = 0;
						index < that.$data.dispatchCallBackList.length;
						index++
					) {
						const fn = that.$data.dispatchCallBackList[index];
						if (typeof fn === "function") {
							let result = fn(vueInstance, fnName);
							if (typeof result === "boolean" && !result) {
								return;
							}
						}
					}
					return Reflect.apply(originDispatch, this, args);
				};
			},
		});
	},
};
