<template>
  <div class="post-list">
    <div class="post-list-item" v-for="item in postList">
      <div class="user-info" @click="gotoUserHome(item.agreeer.portrait)">
        <div class="user-avatar">
          <img :src="TiebaUrlHandler.getUserAvatar(item.agreeer.portrait)" alt="" />
        </div>
        <div class="user-info-text">
          <div class="user-name">{{ item.agreeer.show_nickname || item.agreeer.name_show || item.agreeer.name }}</div>
          <div class="user-time">赞了你的回复 {{ utils.formatTime(Number(item.time || item.op_time) * 1000) }}</div>
        </div>
      </div>
      <div class="reply-content" v-if="item.post_info != null">
        {{
          Array.isArray(item?.post_info?.content)
            ? item?.post_info?.content.map((it) => it.text).join("")
            : formatHTMLToText(item?.post_info?.content)
        }}
      </div>
      <div class="post-info" @click="gotoPost(item.thread_info.id)">
        <div class="post-info__inner">
          <div class="post-image">
            <img :src="item?.thread_info?.media?.[0]?.small_pic || TiebaIcon.nopc" alt="" />
          </div>
          <div class="post-content">
            <p>{{ item.thread_content.title }}</p>
            <p class="forum-name">{{ item.thread_info.fname }}吧</p>
          </div>
        </div>
      </div>
    </div>
    <el-empty description="暂无更多数据" v-if="postList.length === 0" />
    <div id="load-more" class="bottom-msg" v-show="hasMore && postList.length != 0">正在加载...</div>
    <div class="bottom-msg" v-show="!hasMore && postList.length != 0">已无更多</div>
  </div>
</template>

<script lang="ts" setup>
  import { $, DOMUtils, log, utils } from "@/env";
  import { TiebaSmallAppApi } from "../api/TiebaSmallAppApi";
  import { TiebaUrlHandler } from "../handler/TiebaUrlHandler";
  import { TiebaIcon } from "../data/Icon";
  let id = ref("");
  let isFirstLoad = ref(false);
  let isLoading = ref(false);
  let hasMore = ref(true);
  let postList = ref<
    Required<Exclude<Awaited<ReturnType<typeof TiebaSmallAppApi.agreeme>>, undefined>>["agree_list"][0][]
  >([]);

  const formatHTMLToText = (html: string | string[] | null | undefined) => {
    if (html == null) return "";
    if (Array.isArray(html)) {
      return formatHTMLToText(html.join(""));
    }
    const $el = DOMUtils.toElement(html, false, true);
    return DOMUtils.text($el);
  };

  let observe = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMore();
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
  let loadMore = async () => {
    let data = await TiebaSmallAppApi.agreeme(id.value);
    log.info(data);
    hasMore.value = Boolean(data?.has_more);
    if (!hasMore.value) {
      cancleScrollListener();
    }
    if (data) {
      if (Array.isArray(data.agree_list)) {
        id.value = data.agree_list[data.agree_list.length - 1].id;
        postList.value = postList.value.concat(data.agree_list);
      }
      if (!isFirstLoad.value) {
        isFirstLoad.value = true;
        if (hasMore.value) {
          log.success(`设置监听滚动加载`);
          observe.observe($("#load-more")!);
        }
      }
    }
  };
  let gotoUserHome = function (portrait: string) {
    window.open(TiebaUrlHandler.getUserHome(portrait), "_blank");
  };
  let gotoPost = function (postId: string | number) {
    window.open(TiebaUrlHandler.getPost(postId), "_blank");
  };
  let gotoForum = function (fName: string) {
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
      await loadMore();
    } catch (error) {
      log.error(error);
    }
    loading.close();
  });
</script>

<style scoped>
  .post-list-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 15px;
    border-bottom: 5px solid #efefef;
    --forum-icon-size: 56px;
  }

  .post-list-item:last-child {
    border-bottom: 0;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .user-time {
    font-size: 0.8em;
    color: #999;
  }

  .user-avatar img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .reply-content {
    font-size: 0.9em;
    color: #4a4a4a;
  }

  .post-info {
    display: flex;
    align-items: center;
    background-color: #efefef;
    color: #434343;
    border-radius: 6px;
  }

  .post-info__inner {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px;
  }

  .post-content {
    overflow: hidden;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    color: #545454;
    margin-left: 5px;
  }

  .post-image {
    width: var(--forum-icon-size);
    height: var(--forum-icon-size);
  }

  .post-image img {
    width: inherit;
    height: inherit;
    border-radius: 6px;
  }

  .fname-text {
    color: #999;
  }

  .bottom-msg {
    text-align: center;
    color: #999;
    padding: 10px 0;
  }

  .forum-name {
    color: #848691;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    overflow: hidden;
  }
</style>
