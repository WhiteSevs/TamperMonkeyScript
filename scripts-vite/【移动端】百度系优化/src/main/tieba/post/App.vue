<template>
  <SmallToolbar v-show="toolbarStateStore.isShowSmallToolbar" @showFullToolbar="Main.showFullToolbar" />

  <FullToolbar
    v-show="toolbarStateStore.isShowFullToolbar"
    @showSmallToolbar="Main.showSmallToolbar"
    @updateContentState="Main.updateContentState"
    ref="FullToolbarRef" />
</template>

<script setup lang="ts">
  // emoji图片映射示例
  // 教程：https://blog.csdn.net/m0_65519288/article/details/133968826
  // [emotion pic_type=1 width=宽度数字 height=高度数字]图片链接[/emotion]
  // [emotion pic_type=1 width=30 height=30]//tb2.bdstatic.com/tb/editor/images/face/i_f22.png?t=20140803[/emotion]

  // App端高清图片，扒下来做成图片链接列表
  // https://tieba.baidu.com/p/1897057939
  // https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK/tb/editor/images/client/image_emoticon1.png

  // 如果回复某人，则在上面加回复 用户名：该用户发的内容
  // 示例：回复 test用户：test用户回复的内容
  import { onMounted, ref, shallowRef, watch } from "vue";
  import { TiebaComment } from "./TiebaComment";
  import { DOMUtils, log, utils } from "@/env";
  import SmallToolbar from "./toolbar/SmallToolbar.vue";
  import FullToolbar from "./toolbar/FullToolbar.vue";
  import { TiebaReply } from "./TiebaReply";
  import useToolbarStore from "./stores/ToolbarStore";
  import usePlaceHolder from "./stores/PlaceHolderStore";
  import useToolbarStateStore from "./stores/ToolbarStateStore";
  import useAccountStore from "./stores/AccoutStore";

  // 初始化数据
  const accountStore = useAccountStore();
  const toolbarStore = useToolbarStore();
  const toolbarStateStore = useToolbarStateStore();
  const placeHolderStore = usePlaceHolder();

  // 子组件FullToolbar暴露的数据
  const FullToolbarRef = ref<{
    handleBottomPanelVisible: any;
    resetReplyUser: () => void;
  }>();
  // 根组件
  const $viteApp = shallowRef<HTMLDivElement>();

  /**
   * 元素检测工具
   */
  const ElementCheckIn = {
    /**
     * 判断该元素是否是在小工具栏中
     * @param $ele
     */
    isContainsInSmallToolbar($ele: Node | null) {
      if ($ele == null) {
        return false;
      }
      let $smallToolbar = document.querySelector<HTMLDivElement>("#small-toolbar");
      if ($smallToolbar && $smallToolbar.contains($ele)) {
        return true;
      }
      return false;
    },
    /**
     * 判断该元素是否是在vue根元素内
     * @param $ele
     */
    isContainsInRootApp($ele: Node | null) {
      if ($ele == null) {
        return false;
      }
      return Boolean($viteApp.value?.contains($ele));
    },
  };

  const GlobalEvent = {
    /**
     * 设置全局点击事件，点击其它地方，隐藏工具栏
     */
    setGlobalTouchClickCheck() {
      DOMUtils.on(document, "touchstart", function (event) {
        let $click = event.target as HTMLElement;
        if (ElementCheckIn.isContainsInSmallToolbar($click)) {
          return;
        }
        if (ElementCheckIn.isContainsInRootApp($click)) {
          return;
        }
        /* 其它地方的，显示小的工具栏 */
        //log.info("其它地方的，显示小的工具栏");
        Main.showSmallToolbar();
      });
    },
  };

  const Main = {
    /**
     * 初始化
     */
    init() {
      // 先设置全局点击判定
      GlobalEvent.setGlobalTouchClickCheck();
      onMounted(() => {
        // 初始化挂载的根元素
        $viteApp.value = document.querySelector<HTMLDivElement>("#vite-app")!;
      });
    },
    /**
     * 显示完整的工具栏，并隐藏小的工具栏
     * @param isShowEmoji 是否显示emoji组件，默认false
     */
    showFullToolbar(isShowEmoji: boolean = false) {
      //log.info("显示完整的工具栏");
      if (!accountStore.isLogin) {
        TiebaReply.checkLogin();
        return;
      }
      toolbarStateStore.isShowSmallToolbar = false;
      toolbarStateStore.isShowFullToolbar = true;

      if (isShowEmoji) {
        /* 重置显示emoji面板 */
        FullToolbarRef.value!.handleBottomPanelVisible("emoji", true);
      }
    },
    /**
     * 显示隐藏小的工具栏，并完整的工具栏
     */
    showSmallToolbar() {
      //log.info("显示小的的工具栏");
      toolbarStateStore.isShowFullToolbar = false;
      toolbarStateStore.isShowSmallToolbar = true;
      // 通知reply那边的显示
      TiebaReply.$data.isShowFullEditor.value = false;
    },
    /**
     * 更新编辑器状态
     * @param state 更新编辑器状态，判断是否输入框为空
     */
    updateContentState(state: boolean) {
      toolbarStateStore.isEmpty = state;
    },
  };

  Main.init();
  /* 处理评论数量，限制最高显示999 */
  watch(
    () => TiebaComment.reply_num,
    (newValue) => {
      log.success(["update reply_num", newValue.value]);
      toolbarStore.showCommentCount = newValue.value > 999 ? "999+" : newValue.value.toString();
    },
    {
      deep: true,
      immediate: true,
    }
  );
  /* 处理点赞数量，限制最高显示999 */
  watch(
    () => TiebaComment.agree_num,
    (newValue) => {
      log.success(["update agree_num", newValue.value]);
      toolbarStore.showGoodCount = newValue.value > 999 ? "999+" : newValue.value.toString();
    },
    {
      deep: true,
      immediate: true,
    }
  );
  /* 监听编辑器内容是否为空，显示不同的placeholder */
  watch(
    () => toolbarStateStore.isEmpty,
    (newValue) => {
      if (newValue) {
        toolbarStore.placeholder = placeHolderStore.empty;
      } else {
        toolbarStore.placeholder = placeHolderStore.hasContent;
      }
    }
  );
  /* 监听回复编辑器是否显示，显示完整的工具栏 */
  watch(
    () => TiebaReply.$data.isShowFullEditor.value,
    (newValue) => {
      if (newValue) {
        Main.showFullToolbar();
      }
    },
    {
      deep: true,
      immediate: true,
    }
  );
  /* 监听回复编辑器是否登录，从而触发登录框 */
  watch(
    () => TiebaReply.$data.isLogin.value,
    (newValue) => {
      accountStore.isLogin = newValue;
    },
    {
      immediate: true,
      deep: true,
    }
  );
</script>
