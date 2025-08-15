import { log } from "@/env";
import { GM_getValue, GM_setValue } from "ViteGM";
import { NetDiskAutoFillAccessCode_baidu } from "../rule/default-rule/baidu/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_lanzou } from "../rule/default-rule/lanzou/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_tianyiyun } from "../rule/default-rule/tianyiyun/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_hecaiyun } from "../rule/default-rule/hecaiyun/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_aliyun } from "../rule/default-rule/aliyun/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_123pan } from "../rule/default-rule/123pan/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_weiyun } from "../rule/default-rule/weiyun/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_xunlei } from "../rule/default-rule/xunlei/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_kuake } from "../rule/default-rule/kuake/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_chengtong } from "../rule/default-rule/chengtong/autoFillAccessCode";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { NetDiskAutoFillAccessCode_115pan } from "../rule/default-rule/115pan/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_360yunpan } from "../rule/default-rule/360yunpan/autoFillAccessCode";
import { NetDiskRuleData } from "../data/NetDiskRuleData";

/** 网盘-自动填充访问码 */
export const NetDiskAutoFillAccessCode = {
	key: "tempNetDiskInfo",
	$data: {
		/**
		 * 当前的网盘数据
		 */
		netDiskInfo: null as any as NetDiskAutoFillAccessCodeOption[],
		/**
		 * 自动填充访问码是否开启
		 */
		get enable() {
			return NetDiskGlobalData.features.autoFillAccessCode.value;
		},
	},
	/**
	 * 初始化
	 */
	init() {
		// 判定是否开启了自动填充访问码
		if (!this.$data.enable) {
			return;
		}
		// 获取存储的访问码信息
		this.$data.netDiskInfo = this.getValue();
		let flag = false;
		for (let index = 0; index < this.$data.netDiskInfo.length; index++) {
			const fillAccessCodeNetDiskInfo = this.$data.netDiskInfo[index];
			let autoFillAccessCodeEnable = NetDiskRuleData.linkClickMode_openBlank.openBlankAutoFilleAccessCode(
				fillAccessCodeNetDiskInfo.ruleKeyName
			);
			if (!autoFillAccessCodeEnable) {
				continue;
			}
			let accessCode = fillAccessCodeNetDiskInfo.accessCode;
			if (accessCode == null || (typeof accessCode === "string" && accessCode.trim() === "")) {
				// 访问码为空
				continue;
			}
			let shareCode = fillAccessCodeNetDiskInfo.shareCode;
			// 百度如果shareCode第一位是1的话，新版本会在href中去除这个1
			// 那么这里需要把这个1处理掉，再进行分享码匹配
			if (fillAccessCodeNetDiskInfo.ruleKeyName === "baidu" && shareCode.startsWith("1")) {
				shareCode = shareCode.slice(1, shareCode.length);
			}
			/** 链接地址是否匹配到分享码，从而触发自动填充 */
			let isMatchedFillShareCode = window.location.href.includes(shareCode);
			if (isMatchedFillShareCode) {
				let autoFillFn = NetDiskAutoFillAccessCode.netDisk[fillAccessCodeNetDiskInfo.ruleKeyName];
				if (typeof autoFillFn === "function") {
					log.success(`成功匹配到对应的自动填充访问码的网盘信息：`, fillAccessCodeNetDiskInfo);
					autoFillFn(fillAccessCodeNetDiskInfo);
				} else {
					log.warn("自动填充访问码失败：" + fillAccessCodeNetDiskInfo.ruleKeyName + "，原因：该网盘未适配");
				}
				flag = true;
				break;
			}
		}
		if (!flag) {
			log.error("未触发自动填充访问码，原因：未找到对应的网盘信息：👇", this.$data.netDiskInfo);
		}
	},
	netDisk: <
		{
			[key: string]: (netDiskInfo: NetDiskAutoFillAccessCodeOption) => void;
		}
	>{
		/**
		 * 百度网盘
		 */
		baidu: NetDiskAutoFillAccessCode_baidu,
		/**
		 * 蓝奏云
		 */
		lanzou: NetDiskAutoFillAccessCode_lanzou,
		/**
		 * 天翼云
		 */
		tianyiyun: NetDiskAutoFillAccessCode_tianyiyun,
		/**
		 * 中国移动云盘
		 */
		hecaiyun: NetDiskAutoFillAccessCode_hecaiyun,
		/**
		 * 阿里云盘
		 */
		aliyun: NetDiskAutoFillAccessCode_aliyun,
		/**
		 * 文叔叔
		 * 暂时没找到有密码的链接
		 */
		wenshushu: () => {},
		/**
		 * 奶牛
		 * 暂时没找到有密码的链接
		 */
		nainiu: () => {},
		/**
		 * 123云盘
		 */
		_123pan: NetDiskAutoFillAccessCode_123pan,
		/**
		 * 腾讯微云
		 */
		weiyun: NetDiskAutoFillAccessCode_weiyun,
		/**
		 * 迅雷
		 */
		xunlei: NetDiskAutoFillAccessCode_xunlei,
		/**
		 * 115网盘
		 */
		_115pan: NetDiskAutoFillAccessCode_115pan,
		/**
		 * 城通网盘
		 */
		chengtong: NetDiskAutoFillAccessCode_chengtong,
		/**
		 * 夸克网盘
		 */
		kuake: NetDiskAutoFillAccessCode_kuake,
		/**
		 * 坚果云
		 * 暂时没找到有密码的链接
		 */
		jianguoyun: () => {},
		/**
		 * OneDrive
		 * 暂时没找到有密码的链接
		 */
		onedrive: () => {},
		/**
		 * 360云盘
		 */
		"360yunpan": NetDiskAutoFillAccessCode_360yunpan,
	},
	/**
	 * 设置值
	 * @param value
	 */
	setValue(value: NetDiskAutoFillAccessCodeOption[]) {
		GM_setValue(this.key, value);
	},
	/**
	 * 添加值
	 * @param netDiskFillOption
	 */
	addValue(netDiskFillOption: NetDiskAutoFillAccessCodeOption) {
		let accessCode = netDiskFillOption.accessCode;
		// 空值不需要填入
		if (accessCode == null || (typeof accessCode === "string" && accessCode.trim() === "")) {
			return;
		}
		let localValue = this.getValue();
		localValue = localValue.filter((it) => {
			// 排除掉相同的链接
			if (it.ruleKeyName === netDiskFillOption.ruleKeyName && it.shareCode === netDiskFillOption.shareCode) {
				return false;
			} else {
				return true;
			}
		});
		localValue.push(netDiskFillOption);
		this.setValue(localValue);
	},
	/**
	 * 获取值
	 */
	getValue() {
		let localValue = GM_getValue<NetDiskAutoFillAccessCodeOption[]>(this.key, []);
		if (!Array.isArray(localValue)) {
			localValue = [localValue];
		}
		localValue = localValue.filter((it) => Date.now() - it.time < 24 * 60 * 60 * 1000);
		// 更新值
		this.setValue(localValue);
		return localValue;
	},
};
