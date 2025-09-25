<script lang="ts" setup>
  import { VNodeRef, ref, watch } from "vue";
  import TemplateFollowUser from "./template/TemplateFollowUser.vue";
  import { TiebaHomeData, UserInfo } from "./data/TiebaHomeData";
  import { TiebaHomeApi, UserFollowInfo } from "../api/TiebaHomeApi";
  import { TiebaRouter } from "./router";
  import { log } from "@/env";

  const props = defineProps<{
    UserData: UserInfo;
  }>();
  let showIsLoading = ref(true);
  let isEmpty = ref(false);
  let isAsyncLoadEnd = ref(false);
  let isLoadingEnd = ref(false);
  let $loading = ref<VNodeRef | null>(null);
  const pageSize = 12;
  let pageOffset = ref(12);
  let followInfoList = ref<UserFollowInfo[]>([]);

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
  const stopWatchLoading = watch(
    $loading,
    () => {
      if ($loading.value && Array.isArray($loading.value) && $loading.value.length) {
        observe.observe($loading.value[0].$el);
      }
    },
    {
      deep: true,
      immediate: true,
    }
  );
  const cancleLoadMoreObserve = () => {
    stopWatchLoading();
    observe.disconnect();
    showIsLoading.value = false;
    isLoadingEnd.value = true;
    log.info(["移除滚动监听"]);
  };

  const loadMore = async () => {
    showIsLoading.value = false;
    let isFirstLoad = pageOffset.value === pageSize;
    if (isFirstLoad) {
      isAsyncLoadEnd.value = false;
      followInfoList.value = [];
    }
    let isCanceled = false;
    let getFollowInfoList = await TiebaHomeApi.getFollow(props.UserData.name as string, pageOffset.value, pageSize);
    showIsLoading.value = true;
    if (getFollowInfoList) {
      if (getFollowInfoList.data) {
        followInfoList.value = followInfoList.value.concat(getFollowInfoList.data);
        pageOffset.value += pageSize;
      }
      if (!getFollowInfoList.has_next) {
        isCanceled = true;
        cancleLoadMoreObserve();
      }
    } else {
      log.info(["获取关注的吧数据失败"]);
      if (isFirstLoad) {
        isAsyncLoadEnd.value = true;
        isCanceled = true;
        isEmpty.value = true;
        cancleLoadMoreObserve();
        isLoadingEnd.value = false;
      }
    }
    showIsLoading.value = !isCanceled;
    log.info(["获取到的Ta关注的人", getFollowInfoList]);
  };
  /**
   * 箭头点击事件
   */
  const arrowLeftClickEvent = () => {
    TiebaRouter.router.back();
  };
  const jumpToUserHome = (url: string) => {
    window.open(url, "_blank");
  };
</script>
<template>
  <el-container class="disable-html-body-scroll">
    <el-header class="user-top">
      <el-row :gutter="24" class="top-nav-container">
        <el-col :span="4" class="top-left-arrow-icon" @click="arrowLeftClickEvent">
          <el-icon :size="20">
            <ArrowLeft />
          </el-icon>
        </el-col>
        <el-col :span="16" class="top-title-name">他关注的人</el-col>
        <el-col :span="4" class="top-right-space"></el-col>
      </el-row>
    </el-header>
    <el-main class="user-main">
      <el-scrollbar class="user-container">
        <div class="user-item" v-for="followInfo in followInfoList" @click="jumpToUserHome(followInfo.url)">
          <div class="user-item-row">
            <div class="user-item-row-left">
              <div class="user-avatar"><el-avatar :src="followInfo.avatar" :size="35" /></div>
              <div class="user-item-row-center">
                <div class="user-info">
                  <el-text class="user-name" truncated>{{ followInfo.userName }}</el-text>
                  <el-text class="user-sign-text" :size="'small'" truncated
                    >来自贴吧关注 暂未实现获取签名信息接口</el-text
                  >
                </div>
              </div>
            </div>
            <div class="user-item-row-right">
              <el-button type="info" size="small" plain color="#626aef" round class="user-follow-btn">关注</el-button>
            </div>
          </div>
        </div>
        <TemplateFollowUser v-for="i in 3" :key="i" v-if="showIsLoading" ref="$loading" />
        <el-empty description="未获取到数据" v-if="isEmpty" />
        <div v-if="isLoadingEnd" style="text-align: center">已经到底了~</div>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>
<style scoped>
  .user-top {
    height: 40px;
    width: 100%;
    position: relative;
  }

  .top-left-arrow-icon {
    align-content: center;
    padding-left: 0 !important;
  }

  .top-title-name {
    text-align: center;
    padding: 10px;
  }

  .user-main {
    padding: 0;
    position: absolute;
    top: 40px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 40px);
  }

  .user-container {
    padding: 0px 10px 0px 10px;
  }

  .user-container .el-scrollbar__view {
    height: 100%;
  }

  .user-item {
    margin: 10px 0px;
  }

  .user-item-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-item-row-center {
    padding: 0px 10px;
  }

  .user-name,
  .user-sign-text {
    text-align: left;
  }

  .user-sign-text {
    color: #a2a2a2;
  }

  .user-follow-btn {
    float: right;
  }

  .user-info {
    display: grid;
  }

  .user-item-row-left {
    display: flex;
  }

  .user-item-row-right {
    float: right;
  }
</style>
