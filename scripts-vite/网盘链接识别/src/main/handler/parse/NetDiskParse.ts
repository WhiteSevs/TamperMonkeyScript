import { NetDiskParse_123pan } from "@/main/rule/default-rule/123pan/parse";
import { NetDiskParse_Aliyun } from "@/main/rule/default-rule/aliyun/parse";
import { NetDiskParse_Baidu } from "@/main/rule/default-rule/baidu/parse";
import { NetDiskParse_Chengtong } from "@/main/rule/default-rule/chengtong/parse";
import { NetDiskParse_ed2k } from "@/main/rule/default-rule/ed2k/parse";
import { NetDiskParse_feijipan } from "@/main/rule/default-rule/feijipan/parse";
import { NetDiskParse_Jianguoyun } from "@/main/rule/default-rule/jianguoyun/parse";
import { NetDiskParse_Lanzou } from "@/main/rule/default-rule/lanzou/parse";
import { NetDiskParse_Lanzouyx } from "@/main/rule/default-rule/lanzouyx/parse";
import { NetDiskParse_magnet } from "@/main/rule/default-rule/magnet/parse";
import { NetDiskParse_Tianyiyun } from "@/main/rule/default-rule/tianyiyun/parse";
import { NetDiskParse_UC } from "@/main/rule/default-rule/uc/parse";
import { NetDiskParse_Wenshushu } from "@/main/rule/default-rule/wenshushu/parse";

/**
 * 规则配置
 */
export const NetDiskParseRule = {
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
  /**
   * 小飞机网盘
   */
  feijipan: NetDiskParse_feijipan,
};
