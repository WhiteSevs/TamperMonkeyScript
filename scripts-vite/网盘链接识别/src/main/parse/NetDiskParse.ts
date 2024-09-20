import { NetDiskParse_123pan } from "../rule/netdisk/123pan/parse";
import { NetDiskParse_Aliyun } from "../rule/netdisk/aliyun/parse";
import { NetDiskParse_Baidu } from "../rule/netdisk/baidu/parse";
import { NetDiskParse_Jianguoyun } from "../rule/netdisk/jianguoyun/parse";
import { NetDiskParse_Lanzou } from "../rule/netdisk/lanzou/parse";
import { NetDiskParse_Lanzouyx } from "../rule/netdisk/lanzouyx/parse";
import { NetDiskParse_nainiu } from "../rule/netdisk/nainiu/parse";
import { NetDiskParse_Tianyiyun } from "../rule/netdisk/tianyiyun/parse";
import { NetDiskParse_UC } from "../rule/netdisk/uc/parse";
import { NetDiskParse_Wenshushu } from "../rule/netdisk/wenshushu/parse";

/** 网盘-直链解析 */
export const NetDiskParse = {
	netDisk: {
		/**
		 * 百度网盘
		 */
		baidu: NetDiskParse_Baidu,
		/**
		 * 蓝奏云
		 */
		lanzou: NetDiskParse_Lanzou,
		/**
		 * 蓝奏云优享
		 */
		lanzouyx: NetDiskParse_Lanzouyx,
		/**
		 * 天翼云
		 * + 开发文档：https://id.dlife.cn/html/api_detail_696.html
		 */
		tianyiyun: NetDiskParse_Tianyiyun,
		/**
		 * 文叔叔
		 */
		wenshushu: NetDiskParse_Wenshushu,
		/**
		 * 123盘
		 */
		_123pan: NetDiskParse_123pan,
		/**
		 * 坚果云
		 */
		jianguoyun: NetDiskParse_Jianguoyun,
		/**
		 * 奶牛快传
		 * 感谢：https://github.com/qaiu/netdisk-fast-download
		 */
		nainiu: NetDiskParse_nainiu,
		/**
		 * UC网盘
		 */
		uc: NetDiskParse_UC,
		/**
		 * 阿里云盘
		 */
		aliyun: NetDiskParse_Aliyun,
	},
};
