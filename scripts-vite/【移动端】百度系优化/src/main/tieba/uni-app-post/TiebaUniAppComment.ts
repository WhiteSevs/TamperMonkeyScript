import { $$, DOMUtils, utils } from "@/env";
import { VueUtils } from "@components/utils/VueUtils";

type TiebaPostUniAppCommentData = {
  /** 帖子的唯一标识符 */
  id: number;
  /** 帖子的创建时间（时间戳） */
  time: number;
  /** 帖子的楼层 */
  floor: number;
  /** 帖子的内容数组 */
  content: {
    /** 内容文本 */
    text: string;
    /**
     * 内容类型
     * + 0 文本
     * + 2 表情
     */
    type: number;
    /** 当type为2时有改值，是贴吧表情 */
    c?: string;
  }[];
  /** 折叠提示文本 */
  fold_tip?: string;
  /** 动态 URL */
  dynamic_url?: string;
  /** 是否为标题，0 表示否 */
  is_ntitle?: number;
  /** 子帖子数量 */
  sub_post_number?: number;
  /** iOS 图片格式 */
  ios_bimg_format?: string;
  /** 赞同信息 */
  agree: {
    /** 是否已赞同，0 表示否 */
    has_agree: number;
    /** 赞同类型 */
    agree_type: number;
    /** 反对数量 */
    disagree_num: number;
    /** 不同赞同数量 */
    diff_agree_num: number;
    /** LZ 是否赞同，0 表示否 */
    lz_agree: number;
    /** 赞同数量 */
    agree_num: number;
  };
  /** 帖子是否可见，0 表示不可见 */
  is_post_visible?: number;
  /** 是否为置顶赞同帖子，0 表示否 */
  is_top_agree_post?: number;
  /** 是否显示方形图标，0 表示否 */
  show_squared?: number;
  /** 日志参数数组 */
  log_param?: {
    /** 日志参数值 */
    value: string;
    /** 日志参数键 */
    key: string;
  }[];
  /** 帖子标题 */
  title: string;
  /** 子帖子列表 */
  sub_post_list?: {
    /** 子帖子的唯一标识符 */
    pid: number;
    /** 子帖子数组 */
    sub_post_list: {
      /** 子帖子的唯一标识符 */
      id: number;
      /** 子帖子的内容数组 */
      content: {
        /** 内容类型，0 表示文本，其他值可能表示其他类型 */
        type: number;
        /** 内容文本 */
        text: string;
        /** 可选字段，表示表情符号 */
        c?: string;
      }[];
      /** 子帖子的创建时间（时间戳） */
      time: number;
      /** 子帖子的作者 ID */
      author_id: number;
      /** 子帖子的标题 */
      title: string;
      /** 子帖子的楼层 */
      floor: number;
      /** 子帖子的作者信息 */
      author: {
        /** 作者的唯一标识符 */
        id: number;
        /** 作者显示名称 */
        name_show: string;
      };
    }[];
  };
  /** 帖子的图片 URL */
  bimg_url?: string;
  /** 帖子作者的唯一标识符 */
  author_id?: number;
  /** 是否折叠，0 表示否 */
  is_fold?: number;
  /** 气泡信息 */
  bubble_info?: {
    /** 属性 ID */
    props_id: number;
    /** 跳转 URL */
    jump_url: string;
  };
  /** 帖子的作者信息 */
  author: {
    /** 作者的唯一标识符 */
    id: number;
    /** 作者名 */
    name: string;
    /** 作者显示名称 */
    name_show: string;
    /** 贴吧等级 */
    level_id: number;
    /** 贴吧等级对应的名称 */
    level_name: string;
    portrait: string;
    /** 作者 IP 地址 */
    ip_address?: string;
    /** 作者的主要数据数组 */
    mainData?: {
      /** 数据类型 */
      type: number;
      /** 可选字段，表示文本信息 */
      text?: {
        /** 文本内容 */
        text: string;
        /** 优先级 */
        priority: number;
        /** 是否可降级，1 表示是 */
        can_degrade: number;
        /** 降级长度 */
        degrade_len: number;
        /** 降级优先级 */
        degrade_priority: number;
        /** 后缀 */
        suffix: string;
      };
      /** 可选字段，表示 schema URL */
      schema?: string;
      /** 可选字段，日志信息数组 */
      log_info?: {
        /** 日志值 */
        value: string;
        /** 日志键 */
        key: string;
      }[];
      /** 可选字段，图标信息 */
      icon?: {
        /** 图标优先级 */
        priority: number;
        /** 是否可降级，1 表示是 */
        can_degrade: number;
        /** 图标 URL */
        url: string;
        /** 图标宽度 */
        width: number;
        /** 图标高度 */
        height: number;
      };
    }[];
  };
};

export const TiebaUniAppComment = {
  $data: {
    watchCommentCallBack: <Function[]>[],
  },
  init() {},
  /**
   * 观察评论动态加载（包含楼中楼评论）
   * @param callback 回调
   */
  watchComment(
    callback: (
      /** 评论信息元素 */
      commentContainerInfoList: {
        /** 楼层评论的数据 */
        data: TiebaPostUniAppCommentData;
        /** 移除该评论元素 */
        remove: () => void;
      }[],
      /** 停止观察器 */
      disconnect: () => void
    ) => void
  ) {
    this.$data.watchCommentCallBack.push(callback);
    if (this.$data.watchCommentCallBack.length > 1) {
      return;
    }
    DOMUtils.waitNode("uni-view#tab-list", 10000).then(($tabList) => {
      if (!$tabList) {
        return;
      }
      utils.mutationObserver($tabList, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: (mutations, observer) => {
          let commentContainerInfoList: {
            data: TiebaPostUniAppCommentData;
            remove: () => void;
          }[] = [];

          // const $pbCommentItemContainerList = Array.from(
          // 	document.querySelectorAll<HTMLDivElement>(
          // 		".pb-comment-item-container"
          // 	)
          // );
          // for (
          // 	let index = 0;
          // 	index < $pbCommentItemContainerList.length;
          // 	index++
          // ) {
          // 	const $pbCommentItemContainer = $pbCommentItemContainerList[index];
          // 	// vue实例
          // 	const $vueIns = VueUtils.getVue3($pbCommentItemContainer);
          // 	commentContainerInfoList.push({
          // 		data: $vueIns?.props?.commentData,
          // 		remove() {
          // 			$pbCommentItemContainer.remove();
          // 			index--;
          // 		},
          // 	});
          // }
          const $commentGroup = $$<HTMLElement>(".comment-group");
          $commentGroup.forEach(($commentGroupItem) => {
            let vueIns = VueUtils.getVue($commentGroupItem);
            if (!vueIns) {
              return;
            }
            let sectionData = vueIns?.sectionData;
            sectionData.forEach((item: any) => {
              commentContainerInfoList.push({
                data: item,
                remove() {
                  let findIndex = sectionData.findIndex((item2: any) => item2 === item);
                  if (findIndex !== -1) {
                    sectionData.splice(findIndex, 1);
                  }
                },
              });
            });
          });

          for (let index = 0; index < this.$data.watchCommentCallBack.length; index++) {
            const watchCommentCallBack = this.$data.watchCommentCallBack[index];
            if (typeof watchCommentCallBack === "function") {
              watchCommentCallBack(commentContainerInfoList, () => {
                this.$data.watchCommentCallBack.splice(index, 1);
                index--;
                observer.disconnect();
              });
            }
          }
        },
      });
    });
  },
};
