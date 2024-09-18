import { log, utils } from "@/env";
import Qmsg from "qmsg";

export const NetDiskAutoFillAccessCode_tianyiyun = function (
	netDiskInfo: NetDiskAutoFillAccessCodeOption
) {
	/**
	 * 循环等待元素出现
	 * @param {HTMLElement} targetElement
	 * @param {Function} callback
	 */
	function loopWaitElementShow(targetElement: HTMLElement, callback: Function) {
		let loopCount = 0;
		let maxLoopCount = 30;
		let interval = setInterval(() => {
			loopCount++;
			if (loopCount > maxLoopCount) {
				log.error("结束循环检查，退出。");
				clearInterval(interval);
				return;
			}
			if (!utils.isVisible(targetElement)) {
				log.warn(`第 ${loopCount} 次：输入框不可见，不输入密码`);
				return;
			}
			callback();
			clearInterval(interval);
		}, 500);
	}
	if (window.location.hostname === "cloud.189.cn") {
		/* 桌面端 */
		log.success(["自动填写链接", netDiskInfo]);

		utils
			.waitNode<HTMLInputElement>("input#code_txt")
			.then((codeTxtElement) => {
				loopWaitElementShow(codeTxtElement, () => {
					Qmsg.success("自动填入访问码");
					let visitBtn = document.querySelector<HTMLElement>(
						".btn.btn-primary.visit"
					)!;
					codeTxtElement.value = netDiskInfo.accessCode;
					// @ts-ignore
					codeTxtElement._value = netDiskInfo.accessCode;
					utils.dispatchEvent(codeTxtElement, "input");
					utils.dispatchEvent(visitBtn, "click");
				});
			});
	}
	if (window.location.hostname === "h5.cloud.189.cn") {
		/* 移动端 */
		log.success(["自动填写链接", netDiskInfo]);
		utils
			.waitNode<HTMLInputElement>("input.access-code-input")
			.then((accessInputElement) => {
				loopWaitElementShow(accessInputElement, () => {
					Qmsg.success("自动填入访问码");
					accessInputElement.value = netDiskInfo.accessCode;
					// @ts-ignore
					accessInputElement._value = netDiskInfo.accessCode;
					utils.dispatchEvent(accessInputElement, "input");
					utils.dispatchEvent(
						document.querySelector<HTMLElement>("div.button")!,
						"click"
					);
				});
			});
	}
};
