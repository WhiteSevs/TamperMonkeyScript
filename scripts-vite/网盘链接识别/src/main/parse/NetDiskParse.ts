import { NetDiskParse_123pan } from "../rule/default-rule/123pan/parse";
import { NetDiskParse_Aliyun } from "../rule/default-rule/aliyun/parse";
import { NetDiskParse_Baidu } from "../rule/default-rule/baidu/parse";
import { NetDiskParse_Chengtong } from "../rule/default-rule/chengtong/parse";
import { NetDiskParse_ed2k } from "../rule/default-rule/ed2k/parse";
import { NetDiskParse_Jianguoyun } from "../rule/default-rule/jianguoyun/parse";
import { NetDiskParse_Lanzou } from "../rule/default-rule/lanzou/parse";
import { NetDiskParse_Lanzouyx } from "../rule/default-rule/lanzouyx/parse";
import { NetDiskParse_magnet } from "../rule/default-rule/magnet/parse";
import { NetDiskParse_nainiu } from "../rule/default-rule/nainiu/parse";
import { NetDiskParse_Tianyiyun } from "../rule/default-rule/tianyiyun/parse";
import { NetDiskParse_UC } from "../rule/default-rule/uc/parse";
import { NetDiskParse_Wenshushu } from "../rule/default-rule/wenshushu/parse";

/** 网盘-直链解析 */
export const NetDiskParse = {
	rule: {
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
		/**
		 * 城通网盘
		 *
		 * + https://github.com/qinlili23333/ctfileGet
		 */
		chengtong: NetDiskParse_Chengtong,
		/**
		 * BT磁力
		 *
		 * @link https://whatslink.info/
		 */
		magnet: NetDiskParse_magnet,
		/**
		 * ed2k
		 *
		 * @link https://whatslink.info/
		 */
		ed2k: NetDiskParse_ed2k,
	},
};
