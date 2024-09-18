import { NetDiskParse_Baidu } from "./NetDiskParse_Baidu";
import { NetDiskParse_Lanzou } from "./NetDiskParse_Lanzou";
import { NetDiskParse_Lanzouyx } from "./NetDiskParse_Lanzouyx";
import { NetDiskParse_Tianyiyun } from "./NetDiskParse_Tianyiyun";
import { NetDiskParse_Wenshushu } from "./NetDiskParse_Wenshushu";
import { NetDiskParse_123pan } from "./NetDiskParse_123pan";
import { NetDiskParse_Jianguoyun } from "./NetDiskParse_Jianguoyun";
import { NetDiskParse_nainiu } from "./NetDiskParse_nainiu";
import { NetDiskParse_UC } from "./NetDiskParse_UC";
import { NetDiskParse_Aliyun } from "./NetDiskParse_Aliyun";

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
