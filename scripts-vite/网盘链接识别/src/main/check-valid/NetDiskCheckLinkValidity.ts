import { DOMUtils, log, pops, utils } from "@/env";
import { NetDiskCheckLinkValidity_baidu } from "../rule/default-rule/baidu/checkLinkValidity";
import { NetDiskCheckLinkValidity_lanzou } from "../rule/default-rule/lanzou/checkLinkValidity";
import { NetDiskCheckLinkValidity_lanzouyx } from "../rule/default-rule/lanzouyx/checkLinkValidity";
import { NetDiskCheckLinkValidity_tianyiyun } from "../rule/default-rule/tianyiyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_aliyun } from "../rule/default-rule/aliyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_wenshushu } from "../rule/default-rule/wenshushu/checkLinkValidity";
import { NetDiskCheckLinkValidity_nainiu } from "../rule/default-rule/nainiu/checkLinkValidity";
import { NetDiskCheckLinkValidity_123pan } from "../rule/default-rule/123pan/checkLinkValidity";
import { NetDiskCheckLinkValidity_weiyun } from "../rule/default-rule/weiyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_xunlei } from "../rule/default-rule/xunlei/checkLinkValidity";
import { NetDiskCheckLinkValidity_chengtong } from "../rule/default-rule/chengtong/checkLinkValidity";
import { NetDiskCheckLinkValidity_kuake } from "../rule/default-rule/kuake/checkLinkValidity";
import { NetDiskCheckLinkValidity_jianguoyun } from "../rule/default-rule/jianguoyun/checkLinkValidity";
import { NetDiskCheckLinkValidity_onedrive } from "../rule/default-rule/onedrive/checkLinkValidity";
import { NetDiskCheckLinkValidity_uc } from "../rule/default-rule/uc/checkLinkValidity";
import { NetDiskView } from "../view/NetDiskView";
import { NetDiskCheckLinkValidity_115pan } from "../rule/default-rule/115pan/checkLinkValidity";
import { NetDiskRuleData } from "../data/NetDiskRuleData";
import type { HttpxRequestOption } from "@whitesev/utils/dist/types/src/types/Httpx";
import { NetDiskCheckLinkValidity_360yunpan } from "../rule/default-rule/360yunpan/checkLinkValidity";

/**
 * 校验码状态
 */
export const NetDiskCheckLinkValidityStatus = {
	/**
	 * 验证中
	 */
	loading: <NetDiskCheckLinkValidityStatusInstance>{
		code: 1,
		msg: "验证中...",
		setIcon($el) {
			DOMUtils.html($el, pops.config.iconSVG.loading);
		},
		setView($el, checkInfo, msg?: string) {
			NetDiskCheckLinkValidity.setViewCheckValid(
				$el,
				"loading",
				msg ?? this.msg
			);
			this.setIcon($el);
		},
	},
	/**
	 * 验证成功
	 */
	success: <NetDiskCheckLinkValidityStatusInstance>{
		code: 200,
		msg: "有效",
		setIcon($el) {
			DOMUtils.html(
				$el,
				/*html*/ `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M874.119618 149.859922A510.816461 510.816461 0 0 0 511.997 0.00208a509.910462 509.910462 0 0 0-362.119618 149.857842c-199.817789 199.679789-199.817789 524.581447 0 724.260236a509.969462 509.969462 0 0 0 362.119618 149.857842A508.872463 508.872463 0 0 0 874.119618 874.120158c199.836789-199.679789 199.836789-524.581447 0-724.260236zM814.94268 378.210681L470.999043 744.132295a15.359984 15.359984 0 0 1-5.887994 4.095996c-1.751998 1.180999-2.913997 2.362998-5.276994 2.913997a34.499964 34.499964 0 0 1-13.469986 2.914997 45.547952 45.547952 0 0 1-12.897986-2.303998l-4.095996-2.363997a45.291952 45.291952 0 0 1-7.009992-4.095996l-196.902793-193.789796a34.126964 34.126964 0 0 1-10.555989-25.186973c0-9.37399 3.583996-18.74698 9.98399-25.186974a36.429962 36.429962 0 0 1 50.372947 0l169.98382 167.423824L763.389735 330.220732a37.059961 37.059961 0 0 1 50.371947-1.732998 33.647965 33.647965 0 0 1 11.165988 25.186973 35.544963 35.544963 0 0 1-9.98399 24.575974v-0.04z m0 0"></path>
				</svg>
				`
			);
		},
		setView($el, checkInfo, msg?: string) {
			NetDiskCheckLinkValidity.setViewCheckValid(
				$el,
				"success",
				msg ?? this.msg
			);
			this.setIcon($el);
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
		},
	},
	/**
	 * 网络异常
	 */
	networkError: <NetDiskCheckLinkValidityStatusInstance>{
		code: -404,
		msg: "网络异常",
		setIcon($el) {
			DOMUtils.html(
				$el,
				/*html*/ `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M511.808 692.224c-18.048 0-35.136 3.968-50.432 11.392-25.472 12.416-46.528 33.92-57.792 60.032-5.632 14.144-9.024 29.504-9.024 45.952 0 65.152 52.672 117.824 117.248 117.824 65.28 0 117.952-52.672 117.952-117.824 0-64.64-52.672-117.376-117.952-117.376z m0 178.496c-33.408 0-60.608-27.712-60.608-61.12 0-33.472 27.2-60.672 60.608-60.672s61.248 27.2 61.248 60.672c0 33.472-27.776 61.12-61.248 61.12zM286.784 661.632c3.968 3.392 8.512 5.632 12.992 5.632L438.08 523.328c-60.032 14.72-114.432 49.344-155.328 98.624-9.536 11.84-7.872 30.08 4.032 39.68zM622.912 534.656l-43.008 45.312c45.312 13.056 86.72 40.256 117.376 78.208 5.632 6.784 13.568 10.24 22.08 10.24 6.272 0 12.416-2.24 18.176-6.784 11.904-9.6 13.568-27.84 3.392-39.68-31.808-39.104-72.704-69.12-118.016-87.296zM511.808 391.168c17.024 0 33.408 1.216 49.856 3.456l47.68-49.856c-31.744-6.848-64.064-10.24-97.536-10.24-142.784 0-277.12 63.488-367.232 174.656-10.24 11.904-8.576 30.08 3.904 39.68 5.12 4.48 11.328 6.784 18.176 6.784 7.936 0 15.872-3.968 21.568-10.816 79.872-97.536 197.76-153.664 323.584-153.664zM751.616 400.32l-40.256 41.92c47.04 24.96 89.536 60.032 124.096 102.592 10.24 12.48 27.84 14.208 40.256 3.968 11.968-9.6 13.632-27.84 3.968-39.68-36.16-44.8-79.872-81.088-128.064-108.8zM705.152 244.928l42.56-44.672c-73.664-28.992-153.6-44.224-235.904-44.224-196.672 0-380.864 87.872-505.6 239.744-9.6 12.48-7.872 30.08 3.968 40.256 5.632 3.968 11.904 6.208 18.112 6.208 7.936 0 16.448-3.392 22.144-10.176C163.84 292.608 332.096 212.672 511.808 212.672c66.944 0 132.16 10.752 193.344 32.256zM1017.472 395.776c-40.192-49.92-87.296-92.416-139.456-126.976l-39.68 41.344C889.408 343.04 935.36 383.808 973.888 432c9.6 11.904 27.776 13.568 39.68 3.968 11.84-10.176 14.144-27.712 3.904-40.192zM937.408 104.512c-11.328-10.944-29.312-10.496-40.064 0.832L179.008 854.72c-10.816 11.328-10.496 29.248 0.896 40.064 5.44 5.312 12.48 7.872 19.584 7.872 7.488 0 14.848-2.88 20.416-8.704L938.24 144.576c10.88-11.328 10.496-29.248-0.832-40.064z"></path>
				</svg>
				`
			);
		},
		setView($el, checkInfo, msg?: string) {
			NetDiskCheckLinkValidity.setViewCheckValid($el, "error", msg ?? this.msg);
			this.setIcon($el);
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
		},
	},
	/**
	 * 触发安全验证
	 */
	verify: <NetDiskCheckLinkValidityStatusInstance>{
		code: -405,
		msg: "触发安全验证",
		setIcon($el) {
			DOMUtils.html(
				$el,
				/*html*/ `
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<path 
						fill="currentColor"
						d="M514.389 1005.60899999c-269.967 0-489.59499999-219.642-489.595-489.59499999S244.42199999 26.405 514.389 26.405 1003.984 246.047 1003.984 516s-219.62800001 489.60899999-489.595 489.60900001z m0-938.24399999C267.00400001 67.365 65.754 268.615 65.754 516s201.264 448.63499999 448.635 448.635S963.024 763.385 963.024 516 761.774 67.365 514.389 67.365z" p-id="9895"></path><path d="M245.993 621.56800001c41.014-8.138 86.112-18.03600001 135.264-29.71000001-0.355 14.145-0.177 26.69199999 0.532 37.65499999-40.318 8.493-82.93 18.92400001-127.836 31.29400001l-7.959-39.23900001z m78.506-261.50200001l-12.206 145.872h53.57500001l13.78999998-178.763H259.249v-36.073h160.727l-16.438 214.821h33.423c-2.471 74.61499999-4.779 135.973-6.895 184.06100002-1.065 53.754-24.399 80.623-70.01399999 80.62299998-19.101 0-41.547-0.53200001-67.36500001-1.598-1.775-13.079-4.06799999-27.047-6.895-41.902 25.46300001 3.181 48.087 4.779 67.898 4.779 24.753 0 37.834-15.033 39.253-45.084 2.11599999-38.898 3.891-87.163 5.31099998-144.807H270.951l16.971-181.945h36.577z m309.248-98.659l-10.076 16.971c42.789 76.03500001 95.833 131.373 159.13 166.025-11.318 14.145-20.685 26.528-28.112 37.13699999-62.231-45.971-112.981-101.30799999-152.235-166.02499998-36.073 64.006-86.466 121.474-151.17000001 172.38699999-6.363-9.18799999-15.21-20.33-26.52799998-33.423 70.369-48.797 124.30000001-113.158 161.77799999-193.086h47.213zM441.194 718.111h191.488c25.46300001-62.942 48.087-128.723 67.89800001-197.318l40.31799999 12.725c-20.862 63.297-42.96699999 124.832-66.301 184.593h93.361v36.60499999H441.19300001v-36.60499999z m27.047-169.73900001l37.137-11.67399999c17.32599998 50.217 31.82600002 94.945 43.5 134.198l-39.253 13.258c-11.674-45.261-25.46300001-90.522-41.383-135.78200001z m27.06099999-91.76399999h218.53500001v36.605H495.30200001v-36.605z m64.17100001 67.885l37.655-10.076c14.854 53.043 27.047 99.369 36.605 138.977l-38.72099999 11.141c-10.254-48.797-22.091-95.477-35.53900001-140.04300001z">
					</path>
				</svg>
				`
			);
		},
		setView($el, checkInfo, msg) {
			NetDiskCheckLinkValidity.setViewCheckValid(
				$el,
				"verify",
				msg ?? this.msg
			);
			this.setIcon($el);
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
		},
	},
	/**
	 * 该链接已失效
	 */
	failed: <NetDiskCheckLinkValidityStatusInstance>{
		code: 0,
		msg: "已失效",
		setIcon($el) {
			DOMUtils.html(
				$el,
				/*html*/ `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="currentColor"
						d="M549.044706 512l166.189176-166.249412a26.383059 26.383059 0 0 0 0-36.98447 26.383059 26.383059 0 0 0-37.044706 0L512 475.015529l-166.249412-166.249411a26.383059 26.383059 0 0 0-36.98447 0 26.383059 26.383059 0 0 0 0 37.044706L475.015529 512l-166.249411 166.249412a26.383059 26.383059 0 0 0 0 36.98447 26.383059 26.383059 0 0 0 37.044706 0L512 548.984471l166.249412 166.249411a26.383059 26.383059 0 0 0 36.98447 0 26.383059 26.383059 0 0 0 0-37.044706L548.984471 512zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z"></path>
				</svg>
				`
			);
		},
		setView($el, checkInfo, msg?: string) {
			NetDiskCheckLinkValidity.setViewCheckValid(
				$el,
				"failed",
				msg ?? this.msg
			);
			this.setIcon($el);
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
		},
	},
	/**
	 * 该链接需要密码
	 */
	needAccessCode: <NetDiskCheckLinkValidityStatusInstance>{
		code: 201,
		msg: "需要提取码",
		setIcon($el) {
			DOMUtils.html(
				$el,
				/*html*/ `
				<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M757.810429 373.751333 325.645708 373.751333l0-83.895759c0-103.694687 81.507362-184.922686 185.559183-184.922686 78.121242 0 146.053424 46.74565 173.062568 119.090329 3.865028 10.352789 15.384385 15.609513 25.742291 11.746532 10.351766-3.866051 15.609513-15.390525 11.744485-25.742291C688.844707 121.877815 606.198405 64.918545 511.204891 64.918545c-61.918211 0-119.246895 23.662933-161.423483 66.63156-41.3692 42.142819-64.151066 98.363262-64.151066 158.305469l0 83.895759-20.007683 0c-60.774155 0-110.042255 49.267077-110.042255 110.042255l0 366.139981c0 60.774155 49.267077 110.042255 110.042255 110.042255l492.187769 0c60.775178 0 110.042255-49.267077 110.042255-110.042255L867.852684 483.793588C867.852684 423.01841 818.585607 373.751333 757.810429 373.751333zM827.837318 849.933569c0 38.674834-31.352055 70.02689-70.02689 70.02689L265.62266 919.960459c-38.674834 0-70.02689-31.352055-70.02689-70.02689L195.59577 483.793588c0-38.674834 31.352055-70.02689 70.02689-70.02689l492.187769 0c38.674834 0 70.02689 31.352055 70.02689 70.02689L827.837318 849.933569z"></path>
					<path
					fill="currentColor"
					d="M509.715981 583.832002c-11.048637 0-20.007683 8.959046-20.007683 20.007683l0 110.042255c0 11.048637 8.958022 20.007683 20.007683 20.007683s20.007683-8.958022 20.007683-20.007683L529.723663 603.839685C529.723663 592.790024 520.765641 583.832002 509.715981 583.832002z"></path>
				</svg>
				`
			);
		},
		setView($el, checkInfo, msg?: string) {
			NetDiskCheckLinkValidity.setViewCheckValid(
				$el,
				"needAccessCode",
				msg ?? this.msg
			);
			this.setIcon($el);
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
		},
	},
	/**
	 * 存在部分违规文件
	 */
	partialViolation: <NetDiskCheckLinkValidityStatusInstance>{
		code: 202,
		msg: "存在部分违规文件",
		setIcon($el) {
			DOMUtils.html(
				$el,
				/*html*/ `
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<path 
					fill="currentColor"
					d="M954.963 810.267L543.112 96.919c-14.07-24.37-49.245-24.37-63.315 0L67.945 810.267c-14.07 24.37 3.518 54.832 31.657 54.832h823.703c28.141 0 45.728-30.463 31.658-54.832zM476.699 306.55c0-19.115 15.64-34.755 34.755-34.755 19.115 0 34.755 15.64 34.755 34.755v281.817c0 19.115-15.64 34.755-34.755 34.755-19.115 0-34.755-15.64-34.755-34.755V306.55z m34.755 445.293c-23.198 0-42.004-18.806-42.004-42.004s18.806-42.004 42.004-42.004c23.198 0 42.004 18.806 42.004 42.004s-18.806 42.004-42.004 42.004z"></path>
				</svg>`
			);
		},
		setView($el, checkInfo, msg?: string) {
			NetDiskCheckLinkValidity.setViewCheckValid(
				$el,
				"partial-violation",
				msg ?? this.msg
			);
			this.setIcon($el);
		},
	},
	/**
	 * 未知状态
	 */
	unknown: <NetDiskCheckLinkValidityStatusInstance>{
		code: -200,
		msg: "未知检查情况",
		setIcon($el) {
			DOMUtils.html(
				$el,
				/*html*/ `
				<svg viewBox="0 0 1025 1024" xmlns="http://www.w3.org/2000/svg">
					<path
					fill="currentColor"
					d="M512.473172 1023.995242A511.814852 511.814852 0 0 1 313.545134 40.351073a512.244696 512.244696 0 0 1 398.855715 943.658633 508.815937 508.815937 0 0 1-199.927677 39.985536z m0-943.658634C274.559237 80.336608 80.629391 274.266455 80.629391 512.18039s193.929846 431.843781 431.843781 431.843781 431.843781-193.929846 431.843781-431.843781S751.386745 80.336608 512.473172 80.336608z"></path>
					<path
					fill="currentColor"
					d="M506.475342 716.10662a39.985535 39.985535 0 0 1-39.985536-39.985535v-76.972156c0-79.971071 64.976495-144.947566 144.947566-144.947565a77.971794 77.971794 0 0 0 0-155.943588H445.4974a56.979388 56.979388 0 0 0-56.979387 56.979388 39.985535 39.985535 0 0 1-79.971071 0c0-74.972879 60.977941-136.950458 136.950458-136.950459h164.940333c86.968539 0 157.942864 70.974325 157.942865 157.942865s-69.974687 157.942864-157.942865 157.942864a64.976495 64.976495 0 0 0-64.976494 64.976495v76.972156a39.985535 39.985535 0 0 1-38.985897 39.985535zM505.475703 742.097218a48.982281 48.982281 0 1 0 48.982281 48.982281 48.982281 48.982281 0 0 0-48.982281-48.982281z"></path>
				</svg>
				`
			);
		},
		setView($el, checkInfo, msg?: string) {
			NetDiskCheckLinkValidity.setViewCheckValid(
				$el,
				"unknown",
				msg ?? this.msg
			);
			this.setIcon($el);
			NetDiskCheckLinkValidity.setViewAgainCheckClickEvent($el, checkInfo);
		},
	},
};

// 配置的需要校验的网盘
const AllCheckLinkValidityFunction: NetDiskCheckLinkValidityEntrance = {
	baidu: NetDiskCheckLinkValidity_baidu,
	lanzou: NetDiskCheckLinkValidity_lanzou,
	lanzouyx: NetDiskCheckLinkValidity_lanzouyx,
	tianyiyun: NetDiskCheckLinkValidity_tianyiyun,
	// 和彩云校验已失效，需要验证参数
	// hecaiyun: NetDiskCheckLinkValidity_hecaiyun,
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
	"360yunpan": NetDiskCheckLinkValidity_360yunpan,
};

/**
 * 校验链接有效性的通用配置
 */
export const NetDiskCheckLinkValidityRequestOption: Partial<HttpxRequestOption> =
	{
		// 有效性校验时，如果请求错误，禁止Qmsg弹出
		allowInterceptConfig: false,
		// 有效性校验时，如果请求错误，禁止Qmsg弹出
		onerror() {},
		// 有效性校验时，如果请求错误，禁止Qmsg弹出
		ontimeout() {},
	};

/** 网盘-校验链接有效性 */
export const NetDiskCheckLinkValidity = {
	$data: {
		/** 是否正在消费中（验证有效性中） */
		isConsuming: false,
		/** 待检测有有效性的列表 */
		subscribe: <NetDiskCheckLinkValidityOption[]>[],
	},
	/**
	 * 网盘检查的状态码
	 */
	status: NetDiskCheckLinkValidityStatus,
	/**
	 * 所有的规则的校验函数
	 */
	ruleCheckValidFunction: AllCheckLinkValidityFunction,
	/**
	 * 校验链接的有效性，这里是用于订阅-消费
	 * @param $urlBox
	 * @param ruleKeyName
	 * @param ruleIndex
	 * @param shareCode
	 * @param accessCode
	 */
	async check(
		$urlBox: HTMLElement,
		ruleKeyName: string,
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeType
	) {
		this.$data.subscribe.push({
			$urlBox,
			ruleKeyName,
			ruleIndex,
			shareCode,
			accessCode,
		});

		if (this.$data.isConsuming) {
			return;
		}
		this.$data.isConsuming = true;
		for (let index = 0; index < this.$data.subscribe.length; index++) {
			const checkInfo = this.$data.subscribe[index];
			await this.checkLinkValidity(checkInfo, true);
			await utils.sleep(250);
			this.$data.subscribe.splice(index, 1);
			index--;
		}
		this.$data.isConsuming = false;
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
		const { $checkValidStatus } = NetDiskView.parseViewBoxElementInfo(
			checkInfo.$urlBox
		);
		if (this.isViewCheckValid($checkValidStatus) && !isForceCheck) {
			return;
		}
		this.setCheckStatusElementToolTip(checkInfo);
		// 网盘键
		let ruleKeyName = checkInfo.ruleKeyName;
		if (!NetDiskRuleData.function.checkLinkValidity(ruleKeyName)) {
			log.error("未开启checkLinkValidity功能", checkInfo);
			return;
		}
		let netDiskCheck = this.ruleCheckValidFunction[checkInfo.ruleKeyName];
		if (
			!netDiskCheck ||
			(netDiskCheck && typeof netDiskCheck.init !== "function")
		) {
			/* 没有配置该网盘的校验有效性 */
			log.error("没有配置该网盘的校验有效性", checkInfo);
			return;
		}
		this.status.loading.setView($checkValidStatus, checkInfo);

		let checkStatusResult = await netDiskCheck.init({
			ruleIndex: checkInfo.ruleIndex,
			shareCode: checkInfo.shareCode,
			accessCode: checkInfo.accessCode,
		});
		if (!checkStatusResult) {
			log.error("该验证函数的返回值不是有效值", [checkStatusResult, checkInfo]);
			return;
		}
		checkStatusResult.setView(
			$checkValidStatus,
			checkInfo,
			checkStatusResult.tipMsg
		);
		if (checkStatusResult.data) {
			// 设置属性
			Reflect.set(
				$checkValidStatus,
				"data-httpx-response",
				checkStatusResult.data
			);
		}
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
				const { $urlBox, $link } = NetDiskView.parseViewBoxElementInfo($ele);
				// 解析出元素上的数据
				const ruleInfo = NetDiskView.praseElementAttributeRuleInfo($link);
				// 设置新的检测数据
				let newCheckInfo: NetDiskCheckLinkValidityOption = {
					$urlBox: $urlBox,
					ruleKeyName: ruleInfo.ruleKeyName,
					ruleIndex: ruleInfo.ruleIndex,
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
	 *
	 * 简而言之。验证成功的图标点击后将不触发验证请求
	 * + true 已验证(成功/需要密码)
	 * + false 尚未验证/验证超时/验证网络异常
	 * @param $ele
	 */
	isViewCheckValid($ele: HTMLElement) {
		if (!$ele.hasAttribute("data-check-valid")) {
			return false;
		}
		if ($ele.getAttribute("data-check-valid") === "error") {
			return false;
		}
		return true;
	},
	/**
	 * 设置当前的验证状态
	 * @param $ele
	 * @param value
	 * @param msg
	 */
	setViewCheckValid($ele: HTMLElement, value: string, msg: string) {
		$ele.setAttribute("data-check-valid", value);
		$ele.setAttribute("data-msg", msg);
		// Reflect.set($ele, "data-check-valid", value);
		Reflect.set($ele, "data-msg", msg);
	},
	/**
	 * 取消设置当前的验证状态
	 * @param $ele
	 */
	removeViewCheckValid($ele: HTMLElement) {
		$ele.removeAttribute("data-check-valid");
		$ele.removeAttribute("data-msg");
		// Reflect.deleteProperty($ele, "data-check-valid");
		Reflect.deleteProperty($ele, "data-msg");
	},
	/**
	 * 判断状态码是成功的
	 * @param statusInfo
	 */
	isStatusSuccess(statusInfo: NetDiskCheckLinkValidityStatusInstance) {
		if (Math.floor(statusInfo.code / 100) === 2) {
			return true;
		}
		return false;
	},
	/**
	 * 根据code获取code的名字
	 * @param statusInfo
	 */
	getStatusName(statusInfo: NetDiskCheckLinkValidityStatusInstance) {
		for (const statusName of Object.keys(NetDiskCheckLinkValidity.status)) {
			let statusNewInfo =
				this.status[statusName as keyof typeof NetDiskCheckLinkValidityStatus];
			if (statusInfo.code === statusNewInfo.code) {
				return statusName;
			}
		}
	},
	/**
	 * 设置鼠标悬浮事件
	 */
	setCheckStatusElementToolTip(checkInfo: NetDiskCheckLinkValidityOption) {
		if (
			!NetDiskRuleData.function.checkLinlValidityHoverTip(checkInfo.ruleKeyName)
		) {
			return;
		}
		/**
		 * 获取网盘校验状态
		 */
		function getNetDiskStatus() {
			const { $checkValidStatus } = NetDiskView.parseViewBoxElementInfo(
				checkInfo.$urlBox
			);
			return $checkValidStatus;
		}
		let $netDiskStatus = getNetDiskStatus();

		if ($netDiskStatus.hasAttribute("data-pops-tooltip")) {
			return;
		}
		$netDiskStatus.setAttribute("data-pops-tooltip", "true");

		/**
		 * 获取提示的信息
		 */
		let queryMsg = ($el: HTMLElement) => {
			let msgProp: string = Reflect.get($el, "data-msg");
			let msg = $el.getAttribute("data-msg");
			return msgProp ?? msg;
		};
		pops.tooltip({
			target: $netDiskStatus,
			className: "github-tooltip",
			isFixed: true,
			content() {
				let msg = queryMsg($netDiskStatus);
				return msg;
			},
			showBeforeCallBack() {
				let msg = queryMsg($netDiskStatus);
				if (msg == null || (typeof msg === "string" && msg.trim() === "")) {
					return false;
				}
			},
			zIndex() {
				let maxZIndex = utils.getMaxZIndex(10);
				let popsMaxZIndex =
					pops.config.InstanceUtils.getPopsMaxZIndex(10).zIndex;
				return utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
			},
		});
	},
};
