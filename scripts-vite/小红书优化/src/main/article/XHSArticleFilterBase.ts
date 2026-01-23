import { log } from "@/env";
import type { XHSArticleFilterOption } from "./XHSArticleFilter";

type CheckRuleDetail = {
  /** 笔记信息的键 */
  infoKey: string;
  /** 笔记信息的值 */
  infoValue: any;
  /** 自定义规则的键 */
  ruleKey: string;
  /** 自定义规则的值 */
  ruleValue: RegExp | string | undefined | null;
};
export class XHSArticleFilterBase {
  /**
   * 解析信息转为规则过滤的字典
   * @param info 数据信息
   * @param showLog 是否显示日志输出
   */
  parseInfoDictData(info: XHSArticleInfo, showLog: boolean = false): XHSArticleHandlerInfo {
    const note_card = info?.note_card;
    /** 笔记id */
    let articleId = info.id;
    /**
     * 笔记标题
     */
    let display_title = note_card.display_title;
    /** 是否已点赞该笔记 */
    let isLike = Boolean(note_card?.interact_info?.liked);
    /** 点赞数量 */
    let liked_count = 0;
    let liked_count_str = info?.note_card?.interact_info?.liked_count;
    if (typeof liked_count_str === "string") {
      liked_count = parseInt(liked_count_str);
      if (isNaN(liked_count)) {
        liked_count = 0;
      }
    }

    /**
     * 作者名
     */
    let nick_name = note_card?.user?.nick_name || note_card?.user?.nickname;
    /**
     * 作者id
     */
    let user_id = note_card?.user?.user_id;
    /**
     * 是否是视频笔记
     */
    let isVideo: boolean = note_card?.type === "video";
    /**
     * 视频笔记时长
     */
    let videoDuration: number = note_card?.video?.capa?.duration || 0;

    return {
      articleId,
      display_title,
      isLike,
      liked_count,
      nick_name,
      user_id,
      isVideo,
      videoDuration,
    };
  }
  /**
   * 根据视频信息，判断是否需要屏蔽
   */
  checkFilterWithRule(details: CheckRuleDetail): boolean {
    if (details.infoValue == null) {
      // info的值为空
      return false;
    }
    if (details.ruleValue == null) {
      // 自定义规则的值为空
      return false;
    }
    if (typeof details.infoValue === "string") {
      /* info的值是字符串 */
      /* 使用自定义规则的值进行匹配 */
      if (Boolean(details.infoValue.match(details.ruleValue))) {
        return true;
      }
    } else if (typeof details.infoValue === "object") {
      if (Array.isArray(details.infoValue)) {
        /* info的值是字符串数组 */
        /* 使用自定义规则的值进行遍历匹配 */
        let findValue = details.infoValue.find((infoDictValue) => {
          if (typeof infoDictValue === "string" && details.ruleValue != null) {
            return Boolean(infoDictValue.match(details.ruleValue));
          } else {
            return false;
          }
        });
        if (findValue) {
          return true;
        }
      }
    } else if (typeof details.infoValue === "number") {
      if (typeof details.ruleValue === "string") {
        /* info的值是数字，用于比较 */
        /* 自定义规则的值是数字，用于比较 */
        let ruleValue = details.ruleValue.trim();
        let compareNumberMatch = ruleValue.match(/(\d+)/);
        if (!compareNumberMatch) {
          log.warn("过滤器-解析比较大小的数字失败: ", details);
          return false;
        }
        let compareNumber = Number(compareNumberMatch[1]);
        // tag的值是数字，用于比较
        if (ruleValue.startsWith(">")) {
          if (ruleValue.startsWith(">=")) {
            // >=
            if (details.infoValue >= compareNumber) {
              return true;
            }
          } else {
            // >
            if (details.infoValue > compareNumber) {
              return true;
            }
          }
        } else if (ruleValue.startsWith("<")) {
          if (ruleValue.startsWith("<=")) {
            // <=
            if (details.infoValue <= compareNumber) {
              return true;
            }
          } else {
            // <
            if (details.infoValue < compareNumber) {
              return true;
            }
          }
        } else if (ruleValue.startsWith("=")) {
          // =
          if (details.infoValue === compareNumber) {
            return true;
          }
        } else {
          // 未经允许的比较符号
          log.warn("视频过滤器-未经允许的比较符号: ", details);
          return false;
        }
      }
    } else if (typeof details.infoValue === "boolean") {
      if (typeof details.ruleValue === "string") {
        /* info的值是boolean */
        let trimRuleValue = details.ruleValue.trim();
        return details.infoValue.toString() === trimRuleValue;
      }
    }
    return false;
  }
  /**
   * 检测视频是否可以屏蔽，可以屏蔽返回true
   * @param rule 规则
   * @param info 视频信息结构
   */
  checkInfoIsFilter(rule: XHSArticleFilterOption[], info: XHSArticleInfo) {
    /** 对视频信息进行解析出需要的字典信息 */
    let transformInfo = this.parseInfoDictData(info);
    let flag = false;
    let matchedFilterOption: XHSArticleFilterOption | null = null;
    outerLoop: for (let index = 0; index < rule.length; index++) {
      const filterOption = rule[index];
      const ruleNameList = Array.isArray(filterOption.data.ruleName)
        ? filterOption.data.ruleName
        : [filterOption.data.ruleName];
      for (let ruleNameIndex = 0; ruleNameIndex < ruleNameList.length; ruleNameIndex++) {
        // 属性名
        const ruleName = ruleNameList[ruleNameIndex];
        if (!Reflect.has(transformInfo, ruleName)) {
          continue;
        }
        /** 解析出的标签的名字 */
        let tagKey = ruleName;
        /** 解析出的标签的值 */
        let tagValue = transformInfo[tagKey as keyof typeof transformInfo];
        /** 配置 */
        let details = {
          infoKey: tagKey,
          infoValue: tagValue,
          ruleKey: filterOption.data.ruleName,
          ruleValue: filterOption.data.ruleValue,
        } as CheckRuleDetail;
        flag = this.checkFilterWithRule(details);
        if (flag) {
          if (Array.isArray(filterOption.dynamicData) && filterOption.dynamicData.length) {
            // & 动态规则
            let dynamicDetailsList: CheckRuleDetail[] = [];
            for (let dynamicIndex = 0; dynamicIndex < filterOption.dynamicData.length; dynamicIndex++) {
              const dynamicOption = filterOption.dynamicData[dynamicIndex];
              /** 解析出的标签的名字 */
              let dynamicTagKey = dynamicOption.ruleName;
              /** 解析出的标签的值 */
              let dynamicTagValue = transformInfo[dynamicTagKey as keyof typeof transformInfo];
              /** 配置 */
              let dynamicDetails = {
                infoKey: dynamicTagKey,
                infoValue: dynamicTagValue,
                ruleKey: dynamicOption.ruleName,
                ruleValue: dynamicOption.ruleValue,
              } as CheckRuleDetail;
              dynamicDetailsList.push(dynamicDetails);
              let dynamicCheckFlag = this.checkFilterWithRule(dynamicDetails);
              flag = flag && dynamicCheckFlag;
              if (!flag) {
                // 多组的话有一个不成立就退出
                break;
              }
            }
            if (flag) {
              log.success([
                `视频过滤器-多组 ==> ${filterOption.name}`,
                transformInfo,
                details,
                dynamicDetailsList,
                info,
                filterOption,
              ]);
            }
          } else {
            log.success([`视频过滤器 ==> ${filterOption.name}`, transformInfo, details, info, filterOption]);
          }
        }
        if (flag) {
          // 存在命中屏蔽规则
          // 推出循环
          matchedFilterOption = filterOption;
          break outerLoop;
        }
      }
    }

    return {
      /** 是否允许过滤 */
      isFilter: flag,
      /** 命中的过滤规则 */
      matchedFilterOption: matchedFilterOption,
      /** 解析出的视频信息 */
      transformInfo: transformInfo,
      /** 原始视频信息 */
      info: info,
    };
  }
  /**
   * 移除笔记
   */
  removeArticle(videoList: any[], deleteIndex: number): void;
  removeArticle($video: HTMLElement): void;
  removeArticle(...args: any[]) {
    if (args.length === 1) {
      let $el = args[0];
      if ($el != null && $el instanceof Element) {
        $el.remove();
      }
    } else if (args.length === 2) {
      let infoList = args[0];
      let deleteIndex = args[1];
      if (typeof deleteIndex === "number") {
        let item = infoList[deleteIndex];
        if (item != null && item instanceof Element) {
          item.remove();
        }
        infoList.splice(deleteIndex, 1);
      }
    }
  }
}
