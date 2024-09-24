import { DOMUtils, log, pops, utils } from "@/env";
import { NetDisk } from "../NetDisk";
import { NetDiskCheckLinkValidity_baidu } from "../rule/netdisk/baidu/checkLinkValidity";
import { NetDiskCheckLinkValidity_lanzou } from "../rule/netdisk/lanzou/checkLinkValidity";
import { NetDiskCheckLinkValidity_lanzouyx } from "../rule/netdisk/lanzouyx/checkLinkValidity";
import { NetDiskCheckLinkValidity_tianyiyun } from "../rule/netdisk/tianyiyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_hecaiyun } from "../rule/netdisk/hecaiyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_aliyun } from "../rule/netdisk/aliyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_wenshushu } from "../rule/netdisk/wenshushu/checkLinkValidity";
import { NetDiskCheckLinkValidity_nainiu } from "../rule/netdisk/nainiu/checkLinkValidity";
import { NetDiskCheckLinkValidity_123pan } from "../rule/netdisk/123pan/checkLinkValidity";
import { NetDiskCheckLinkValidity_weiyun } from "../rule/netdisk/weiyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_xunlei } from "../rule/netdisk/xunlei/checkLinkValidity";
import { NetDiskCheckLinkValidity_chengtong } from "../rule/netdisk/chengtong/checkLinkValidity";
import { NetDiskCheckLinkValidity_kuake } from "../rule/netdisk/kuake/checkLinkValidity";
import { NetDiskCheckLinkValidity_jianguoyun } from "../rule/netdisk/jianguoyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_onedrive } from "../rule/netdisk/onedrive/checkLinkValidity";
import { NetDiskCheckLinkValidity_uc } from "../rule/netdisk/uc/checkLinkValidity";
import { NetDiskView } from "../view/index/NetDiskView";
import { NetDiskCheckLinkValidity_115pan } from "../rule/netdisk/115pan/checkLinkValidity";
import { NetDiskRuleData } from "../data/NetDiskRuleData";
import { NetDiskRuleDataKEY } from "../data/NetDiskRuleDataKey";

/**
 * 校验码状态
 */
export const NetDiskCheckLinkValidityStatus = {
	loading: <NetDiskCheckLinkValidityStatusObj>{
		code: 1,
		msg: "验证中",
		setView(ele, checkInfo) {
			NetDiskCheckLinkValidity.setViewCheckValid(ele, "loading");
			ele.innerHTML = pops.config.iconSVG.loading;
		},
	},
	success: <NetDiskCheckLinkValidityStatusObj>{
		code: 200,
		msg: "该链接有效",
		setView(ele, checkInfo) {
			NetDiskCheckLinkValidity.setViewCheckValid(ele, "success");
			ele.innerHTML = /*html*/ `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M874.119618 149.859922A510.816461 510.816461 0 0 0 511.997 0.00208a509.910462 509.910462 0 0 0-362.119618 149.857842c-199.817789 199.679789-199.817789 524.581447 0 724.260236a509.969462 509.969462 0 0 0 362.119618 149.857842A508.872463 508.872463 0 0 0 874.119618 874.120158c199.836789-199.679789 199.836789-524.581447 0-724.260236zM814.94268 378.210681L470.999043 744.132295a15.359984 15.359984 0 0 1-5.887994 4.095996c-1.751998 1.180999-2.913997 2.362998-5.276994 2.913997a34.499964 34.499964 0 0 1-13.469986 2.914997 45.547952 45.547952 0 0 1-12.897986-2.303998l-4.095996-2.363997a45.291952 45.291952 0 0 1-7.009992-4.095996l-196.902793-193.789796a34.126964 34.126964 0 0 1-10.555989-25.186973c0-9.37399 3.583996-18.74698 9.98399-25.186974a36.429962 36.429962 0 0 1 50.372947 0l169.98382 167.423824L763.389735 330.220732a37.059961 37.059961 0 0 1 50.371947-1.732998 33.647965 33.647965 0 0 1 11.165988 25.186973 35.544963 35.544963 0 0 1-9.98399 24.575974v-0.04z m0 0"></path>
			</svg>
			`;
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent(ele, checkInfo);
		},
	},
	error: <NetDiskCheckLinkValidityStatusObj>{
		code: -404,
		msg: "网络异常",
		setView(ele, checkInfo) {
			NetDiskCheckLinkValidity.setViewCheckValid(ele, "error");
			ele.innerHTML = /*html*/ `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M511.808 692.224c-18.048 0-35.136 3.968-50.432 11.392-25.472 12.416-46.528 33.92-57.792 60.032-5.632 14.144-9.024 29.504-9.024 45.952 0 65.152 52.672 117.824 117.248 117.824 65.28 0 117.952-52.672 117.952-117.824 0-64.64-52.672-117.376-117.952-117.376z m0 178.496c-33.408 0-60.608-27.712-60.608-61.12 0-33.472 27.2-60.672 60.608-60.672s61.248 27.2 61.248 60.672c0 33.472-27.776 61.12-61.248 61.12zM286.784 661.632c3.968 3.392 8.512 5.632 12.992 5.632L438.08 523.328c-60.032 14.72-114.432 49.344-155.328 98.624-9.536 11.84-7.872 30.08 4.032 39.68zM622.912 534.656l-43.008 45.312c45.312 13.056 86.72 40.256 117.376 78.208 5.632 6.784 13.568 10.24 22.08 10.24 6.272 0 12.416-2.24 18.176-6.784 11.904-9.6 13.568-27.84 3.392-39.68-31.808-39.104-72.704-69.12-118.016-87.296zM511.808 391.168c17.024 0 33.408 1.216 49.856 3.456l47.68-49.856c-31.744-6.848-64.064-10.24-97.536-10.24-142.784 0-277.12 63.488-367.232 174.656-10.24 11.904-8.576 30.08 3.904 39.68 5.12 4.48 11.328 6.784 18.176 6.784 7.936 0 15.872-3.968 21.568-10.816 79.872-97.536 197.76-153.664 323.584-153.664zM751.616 400.32l-40.256 41.92c47.04 24.96 89.536 60.032 124.096 102.592 10.24 12.48 27.84 14.208 40.256 3.968 11.968-9.6 13.632-27.84 3.968-39.68-36.16-44.8-79.872-81.088-128.064-108.8zM705.152 244.928l42.56-44.672c-73.664-28.992-153.6-44.224-235.904-44.224-196.672 0-380.864 87.872-505.6 239.744-9.6 12.48-7.872 30.08 3.968 40.256 5.632 3.968 11.904 6.208 18.112 6.208 7.936 0 16.448-3.392 22.144-10.176C163.84 292.608 332.096 212.672 511.808 212.672c66.944 0 132.16 10.752 193.344 32.256zM1017.472 395.776c-40.192-49.92-87.296-92.416-139.456-126.976l-39.68 41.344C889.408 343.04 935.36 383.808 973.888 432c9.6 11.904 27.776 13.568 39.68 3.968 11.84-10.176 14.144-27.712 3.904-40.192zM937.408 104.512c-11.328-10.944-29.312-10.496-40.064 0.832L179.008 854.72c-10.816 11.328-10.496 29.248 0.896 40.064 5.44 5.312 12.48 7.872 19.584 7.872 7.488 0 14.848-2.88 20.416-8.704L938.24 144.576c10.88-11.328 10.496-29.248-0.832-40.064z"></path>
			</svg>
			`;
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent(ele, checkInfo);
		},
	},
	/** 该链接已失效 */
	failed: <NetDiskCheckLinkValidityStatusObj>{
		code: 0,
		msg: "该链接已失效",
		setView(ele, checkInfo) {
			NetDiskCheckLinkValidity.setViewCheckValid(ele, "failed");
			ele.innerHTML = /*html*/ `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="currentColor"
					d="M549.044706 512l166.189176-166.249412a26.383059 26.383059 0 0 0 0-36.98447 26.383059 26.383059 0 0 0-37.044706 0L512 475.015529l-166.249412-166.249411a26.383059 26.383059 0 0 0-36.98447 0 26.383059 26.383059 0 0 0 0 37.044706L475.015529 512l-166.249411 166.249412a26.383059 26.383059 0 0 0 0 36.98447 26.383059 26.383059 0 0 0 37.044706 0L512 548.984471l166.249412 166.249411a26.383059 26.383059 0 0 0 36.98447 0 26.383059 26.383059 0 0 0 0-37.044706L548.984471 512zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z"></path>
			</svg>
			`;
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent(ele, checkInfo);
		},
	},
	needAccessCode: <NetDiskCheckLinkValidityStatusObj>{
		code: 201,
		msg: "该链接缺失提取码",
		setView(ele, checkInfo) {
			NetDiskCheckLinkValidity.setViewCheckValid(ele, "needAccessCode");
			ele.innerHTML = /*html*/ `
			<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M757.810429 373.751333 325.645708 373.751333l0-83.895759c0-103.694687 81.507362-184.922686 185.559183-184.922686 78.121242 0 146.053424 46.74565 173.062568 119.090329 3.865028 10.352789 15.384385 15.609513 25.742291 11.746532 10.351766-3.866051 15.609513-15.390525 11.744485-25.742291C688.844707 121.877815 606.198405 64.918545 511.204891 64.918545c-61.918211 0-119.246895 23.662933-161.423483 66.63156-41.3692 42.142819-64.151066 98.363262-64.151066 158.305469l0 83.895759-20.007683 0c-60.774155 0-110.042255 49.267077-110.042255 110.042255l0 366.139981c0 60.774155 49.267077 110.042255 110.042255 110.042255l492.187769 0c60.775178 0 110.042255-49.267077 110.042255-110.042255L867.852684 483.793588C867.852684 423.01841 818.585607 373.751333 757.810429 373.751333zM827.837318 849.933569c0 38.674834-31.352055 70.02689-70.02689 70.02689L265.62266 919.960459c-38.674834 0-70.02689-31.352055-70.02689-70.02689L195.59577 483.793588c0-38.674834 31.352055-70.02689 70.02689-70.02689l492.187769 0c38.674834 0 70.02689 31.352055 70.02689 70.02689L827.837318 849.933569z"></path>
				<path
				fill="currentColor"
				d="M509.715981 583.832002c-11.048637 0-20.007683 8.959046-20.007683 20.007683l0 110.042255c0 11.048637 8.958022 20.007683 20.007683 20.007683s20.007683-8.958022 20.007683-20.007683L529.723663 603.839685C529.723663 592.790024 520.765641 583.832002 509.715981 583.832002z"></path>
			</svg>
			`;
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent(ele, checkInfo);
		},
	},
	unknown: <NetDiskCheckLinkValidityStatusObj>{
		code: -200,
		msg: "未知检查情况",
		setView(ele, checkInfo) {
			NetDiskCheckLinkValidity.setViewCheckValid(ele, "unknown");
			ele.innerHTML = /*html*/ `
			<svg viewBox="0 0 1025 1024" xmlns="http://www.w3.org/2000/svg">
				<path
				fill="currentColor"
				d="M512.473172 1023.995242A511.814852 511.814852 0 0 1 313.545134 40.351073a512.244696 512.244696 0 0 1 398.855715 943.658633 508.815937 508.815937 0 0 1-199.927677 39.985536z m0-943.658634C274.559237 80.336608 80.629391 274.266455 80.629391 512.18039s193.929846 431.843781 431.843781 431.843781 431.843781-193.929846 431.843781-431.843781S751.386745 80.336608 512.473172 80.336608z"></path>
				<path
				fill="currentColor"
				d="M506.475342 716.10662a39.985535 39.985535 0 0 1-39.985536-39.985535v-76.972156c0-79.971071 64.976495-144.947566 144.947566-144.947565a77.971794 77.971794 0 0 0 0-155.943588H445.4974a56.979388 56.979388 0 0 0-56.979387 56.979388 39.985535 39.985535 0 0 1-79.971071 0c0-74.972879 60.977941-136.950458 136.950458-136.950459h164.940333c86.968539 0 157.942864 70.974325 157.942865 157.942865s-69.974687 157.942864-157.942865 157.942864a64.976495 64.976495 0 0 0-64.976494 64.976495v76.972156a39.985535 39.985535 0 0 1-38.985897 39.985535zM505.475703 742.097218a48.982281 48.982281 0 1 0 48.982281 48.982281 48.982281 48.982281 0 0 0-48.982281-48.982281z"></path>
			</svg>
			`;
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent(ele, checkInfo);
		},
	},
};

const NetDiskCheckLinkValidityNetDisk: NetDiskCheckLinkValidityEntrance = {
	baidu: NetDiskCheckLinkValidity_baidu,
	lanzou: NetDiskCheckLinkValidity_lanzou,
	lanzouyx: NetDiskCheckLinkValidity_lanzouyx,
	tianyiyun: NetDiskCheckLinkValidity_tianyiyun,
	hecaiyun: NetDiskCheckLinkValidity_hecaiyun,
	aliyun: NetDiskCheckLinkValidity_aliyun,
	wenshushu: NetDiskCheckLinkValidity_wenshushu,
	nainiu: NetDiskCheckLinkValidity_nainiu,
	_123pan: NetDiskCheckLinkValidity_123pan,
	weiyun: NetDiskCheckLinkValidity_weiyun,
	xunlei: NetDiskCheckLinkValidity_xunlei,
	_115pan: NetDiskCheckLinkValidity_115pan,
	chengtong: NetDiskCheckLinkValidity_chengtong,
	kuake: NetDiskCheckLinkValidity_kuake,
	jianguoyun: NetDiskCheckLinkValidity_jianguoyun,
	onedrive: NetDiskCheckLinkValidity_onedrive,
	uc: NetDiskCheckLinkValidity_uc,
};

/** 网盘-校验链接有效性 */
export const NetDiskCheckLinkValidity = {
	$data: {
		isSubscribing: false,
		subscribe: <NetDiskCheckLinkValidityOption[]>[],
	},
	/**
	 * 网盘检查的状态码
	 */
	status: NetDiskCheckLinkValidityStatus,
	/**
	 * 所有的规则的校验函数
	 */
	netDisk: NetDiskCheckLinkValidityNetDisk,
	/**
	 * 校验链接的有效性，这里是用于订阅-消费
	 * @param netDiskViewBox
	 * @param netDiskName
	 * @param netDiskIndex
	 * @param shareCode
	 * @param accessCode
	 */
	async check(
		netDiskViewBox: HTMLElement,
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string
	) {
		this.$data.subscribe.push({
			netDiskViewBox,
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode,
		});

		if (this.$data.isSubscribing) {
			return;
		}
		this.$data.isSubscribing = true;
		for (let index = 0; index < this.$data.subscribe.length; index++) {
			const checkInfo = this.$data.subscribe[index];
			await this.checkLinkValidity(checkInfo, true);
			await utils.sleep(250);
			this.$data.subscribe.splice(index, 1);
			index--;
		}
		this.$data.isSubscribing = false;
	},
	/**
	 * 开始校验链接的有效性
	 * @param checkInfo
	 * @param isForceCheck 是否强制检测
	 */
	async checkLinkValidity(
		checkInfo: NetDiskCheckLinkValidityOption,
		isForceCheck: boolean
	) {
		let $netDiskStatus =
			checkInfo.netDiskViewBox.querySelector<HTMLDivElement>(
				".netdisk-status"
			)!;
		if (this.isViewCheckValid($netDiskStatus) && !isForceCheck) {
			return;
		}
		// 网盘键
		let netDiskName = checkInfo.netDiskName;
		if (!NetDiskRuleData.function.checkLinkValidity(netDiskName)) {
			log.error(["未开启checkLinkValidity功能", checkInfo]);
			return;
		}
		let netDiskCheck = this.netDisk[checkInfo.netDiskName];
		if (
			!netDiskCheck ||
			(netDiskCheck && typeof netDiskCheck.init !== "function")
		) {
			/* 没有配置该网盘的校验有效性 */
			log.error(["没有配置该网盘的校验有效性", checkInfo]);
			return;
		}
		this.status.loading.setView($netDiskStatus, checkInfo);

		let result = await netDiskCheck.init(
			checkInfo.netDiskIndex,
			checkInfo.shareCode,
			checkInfo.accessCode
		);
		if (!result) {
			log.error(["该验证函数的返回值不是有效值", [result, checkInfo]]);
			return;
		}
		result.setView($netDiskStatus, checkInfo);
	},
	/**
	 * 添加重复检查的点击事件（只触发一次）
	 * @param $ele 目标元素
	 * @param checkInfo 检查信息
	 */
	setViewAgainCheckClickEvent(
		$ele: HTMLElement,
		checkInfo: NetDiskCheckLinkValidityOption
	) {
		DOMUtils.on(
			$ele,
			"click",
			void 0,
			() => {
				const $netDiskUrlDiv = $ele.closest<HTMLElement>(".netdisk-url-div")!;
				const $netDiskLink =
					$netDiskUrlDiv.querySelector<HTMLElement>(".netdisk-link")!;
				// 解析出元素上的数据
				const ruleInfo =
					NetDiskView.praseElementAttributeRuleInfo($netDiskLink);
				// 设置新的检测数据
				let newCheckInfo: NetDiskCheckLinkValidityOption = {
					netDiskViewBox: $netDiskUrlDiv,
					netDiskName: ruleInfo.netDiskName,
					netDiskIndex: ruleInfo.netDiskIndex,
					shareCode: ruleInfo.shareCode,
					accessCode: ruleInfo.accessCode,
				};
				this.checkLinkValidity(newCheckInfo, true);
			},
			{ once: true }
		);
	},
	/**
	 * 判断元素当前是否处于验证状态且验证是error或未验证状态
	 * + true 已验证(成功/需要密码)
	 * + false 尚未验证/验证超时/验证网络异常
	 * @param ele
	 */
	isViewCheckValid(ele: HTMLElement) {
		if (!ele.hasAttribute("data-check-valid")) {
			return false;
		}
		if (ele.getAttribute("data-check-valid") === "error") {
			return false;
		}
		return true;
	},
	/**
	 * 设置当前的验证状态
	 * @param ele
	 * @param value
	 */
	setViewCheckValid(ele: HTMLElement, value: string) {
		ele.setAttribute("data-check-valid", value);
	},
	/**
	 * 取消设置当前的验证状态
	 * @param ele
	 */
	removeViewCheckValid(ele: HTMLElement) {
		ele.removeAttribute("data-check-valid");
	},
	/**
	 * 判断状态码是成功的
	 * @param statusInfo
	 */
	isStatusSuccess(statusInfo: NetDiskCheckLinkValidityStatusObj) {
		if (Math.floor(statusInfo.code / 100) === 2) {
			return true;
		}
		return false;
	},
	/**
	 * 根据code获取code的名字
	 * @param statusInfo
	 */
	getStatusName(statusInfo: NetDiskCheckLinkValidityStatusObj) {
		for (const statusName of Object.keys(NetDiskCheckLinkValidity.status)) {
			let _statusInfo_ =
				this.status[statusName as keyof typeof NetDiskCheckLinkValidityStatus];
			if (statusInfo.code === _statusInfo_.code) {
				return statusName;
			}
		}
	},
};
