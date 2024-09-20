import { log, utils } from "@/env";
import { GM_getValue, GM_setValue } from "ViteGM";
import { NetDiskAutoFillAccessCode_baidu } from "../rule/netdisk/baidu/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_lanzou } from "../rule/netdisk/lanzou/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_tianyiyun } from "../rule/netdisk/tianyiyun/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_hecaiyun } from "../rule/netdisk/hecaiyun/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_aliyun } from "../rule/netdisk/aliyun/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_123pan } from "../rule/netdisk/123pan/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_weiyun } from "../rule/netdisk/weiyun/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_xunlei } from "../rule/netdisk/xunlei/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_kuake } from "../rule/netdisk/kuake/autoFillAccessCode";
import { NetDiskAutoFillAccessCode_chengtong } from "../rule/netdisk/chengtong/autoFillAccessCode";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { NetDiskAutoFillAccessCode_115pan } from "../rule/netdisk/115pan/autoFillAccessCode";

/** 网盘-自动填入访问码 */
export const NetDiskAutoFillAccessCode = {
	key: "tempNetDiskInfo",
	$data: {
		/**
		 * 当前的网盘数据
		 * @type {?NetDiskAutoFillAccessCodeOption}
		 */
		netDiskInfo: null as any as NetDiskAutoFillAccessCodeOption,
		/**
		 * 自动输入访问码是否开启
		 */
		enable: NetDiskGlobalData.function.autoFillAccessCode.value,
	},
	/**
	 * 初始化
	 */
	init() {
		this.$data.netDiskInfo = this.getValue();
		if (!this.$data.netDiskInfo) {
			return;
		}
		if (!this.$data.enable) {
			return;
		}
		/* 访问码为空的话就不填 */
		if (utils.isNull(this.$data.netDiskInfo.accessCode)) {
			return;
		}
		/* 百度如果shareCode第一位是1的话，新版本会在href中去除这个1 */
		if (
			this.$data.netDiskInfo.netDiskName === "baidu" &&
			this.$data.netDiskInfo.shareCode.startsWith("1")
		) {
			if (
				!window.location.href.includes(
					this.$data.netDiskInfo.shareCode.slice(
						1,
						this.$data.netDiskInfo.shareCode.length
					)
				)
			) {
				return;
			}
		} else if (
			// 网址路径中不包含shareCode的话，就跳过
			!window.location.href.includes(this.$data.netDiskInfo.shareCode)
		) {
			return;
		}
		// 判断当前执行的自动填写网盘名是否是已有的
		if (
			this.$data.netDiskInfo.netDiskName in NetDiskAutoFillAccessCode.netDisk
		) {
			let autoFillFn =
				NetDiskAutoFillAccessCode.netDisk[this.$data.netDiskInfo.netDiskName];
			if (typeof autoFillFn === "function") {
				autoFillFn(this.$data.netDiskInfo);
			} else {
				log.warn(
					"自动填写访问码失败：" +
						this.$data.netDiskInfo.netDiskName +
						"，原因：该网盘未适配"
				);
			}
		} else {
			log.error("网盘名未找到，跳过自动填写：" + this.$data.netDiskInfo);
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
	},
	/**
	 * 设置值
	 * @param {NetDiskAutoFillAccessCodeOption} value
	 */
	setValue(value: NetDiskAutoFillAccessCodeOption) {
		GM_setValue(this.key, value);
	},
	/**
	 * 获取值
	 */
	getValue() {
		return GM_getValue<NetDiskAutoFillAccessCodeOption>(this.key);
	},
};
