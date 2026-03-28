<template>
  <div class="post-list">
    <el-empty description="暂无测试用例，无法适配" v-if="postList.length === 0" />
    <div id="load-more" class="bottom-msg" v-show="hasMore && postList.length != 0">正在加载...</div>
    <div class="bottom-msg" v-show="!hasMore && postList.length != 0">已无更多</div>
  </div>
</template>

<script lang="ts" setup>
  import { $, log, utils } from "@/env";
  import { TiebaSmallAppApi } from "../api/TiebaSmallAppApi";
  import { TiebaUrlHandler } from "../handler/TiebaUrlHandler";

  const pn = ref(1);
  const isFirstLoad = ref(false);
  const isLoading = ref(false);
  const hasMore = ref(true);
  const postList = ref<Required<Exclude<Awaited<ReturnType<typeof TiebaSmallAppApi.atme>>, undefined>>["at_list"][0][]>(
    []
  );

  const observe = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMore.run();
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.2,
    }
  );
  const cancleScrollListener = () => {
    observe?.disconnect();
    isLoading.value = false;
    log.info("移除滚动监听");
  };

  const loadMore = new utils.LockFunction(async () => {
    const data = await TiebaSmallAppApi.atme(pn.value);
    log.info(data);
    hasMore.value = Boolean(data?.has_more);
    if (!hasMore.value) {
      cancleScrollListener();
    }
    if (data) {
      pn.value++;
      if (Array.isArray(data.at_list)) {
        postList.value = postList.value.concat(data.at_list);
      }
      if (!isFirstLoad.value) {
        isFirstLoad.value = true;
        if (hasMore.value) {
          log.success(`设置监听滚动加载`);
          observe.observe($("#load-more")!);
        }
      }
    }
  });
  const gotoUserHome = function (portrait: string) {
    window.open(TiebaUrlHandler.getUserHome(portrait), "_blank");
  };
  const gotoPost = function (postId: string | number) {
    window.open(TiebaUrlHandler.getThread(postId), "_blank");
  };
  const gotoForum = function (fName: string) {
    window.open(TiebaUrlHandler.getForum(fName), "_blank");
  };

  onMounted(async () => {
    postList.value.length = 0;
    const loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    try {
      await loadMore.run();
    } catch (error) {
      log.error(error);
    }
    loading.close();
  });
</script>

<style scoped>
  .bottom-msg {
    text-align: center;
    color: #999;
    padding: 10px 0;
  }
</style>
