<template>
  <div class="posts-container">
    <el-empty description="帖子还在酝酿中" v-if="showPostEmpty && postsInfoList.length === 0" />
    <div class="posts-container-item" v-for="postItem in postsInfoList" @click="handlePostItemClick(postItem)">
      <div class="posts-item-avatar-container">
        <el-row style="align-items: center">
          <div class="posts-item-avatar"><el-avatar :size="35" :src="UserData.avatar" /></div>
          <div class="posts-item-right-user-info">
            <div class="posts-item-user-name">{{ UserData.showName }}</div>
            <div class="posts-item-user-other-info">
              <el-text type="info" size="small">
                {{ CommonUtil.formatTimeStamp(postItem.thread_info.create_time) }}</el-text
              >
            </div>
          </div>
        </el-row>
      </div>
      <div class="posts-item-title" v-html="postItem.thread_info.title"></div>
      <div class="posts-item-content">
        {{ postItem.thread_info.abstract.map((it) => (typeof it.text === "string" ? it.text : "")).join("\n") }}
      </div>
      <div
        class="posts-item-media-container"
        v-if="postItem.thread_info.media && postItem.thread_info.media.length > 0">
        <el-row @click.stop>
          <el-image
            style="width: 100px; height: 100px"
            :src="media.origin_pic"
            :zoom-rate="1"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="postItem.thread_info.media.map((it) => it.origin_pic)"
            :initial-index="index"
            fit="cover"
            v-for="(media, index) in postItem.thread_info.media" />
        </el-row>
      </div>
      <div class="posts-item-forum">
        <!--<el-button plain>Plain</el-button>-->
        <el-button
          :icon="ChromeFilled"
          :size="'small'"
          style="color: #614fc0; border-color: #614fc0"
          plain
          round
          @click="handlePostForumButtonClick(postItem)"
          @click.stop
          >{{ postItem.thread_info.fname }}吧</el-button
        >
      </div>
      <div class="posts-item-footer">
        <el-row justify="space-between">
          <el-col :span="6" class="posts-item-footer-icon-container">
            <el-icon>
              <svg t="1714663858490" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M422.5536 27.0336zM431.8208 25.6a25.6 25.6 0 0 1 4.096 50.8928c-1.024 0.2048-2.56 0.4096-7.5264 1.024H165.4272c-48.64 0-88.6272 42.0864-88.6272 94.6176v680.448c0 52.5312 39.9872 94.6176 88.6272 94.6176H858.624c48.64 0 88.6272-42.0864 88.6272-94.6176V451.584a25.6 25.6 0 0 1 51.2 0v400.9984c0 80.2304-62.3104 145.8176-139.8272 145.8176H165.376C87.9104 998.4 25.6 932.864 25.6 852.5824V172.1344C25.6 91.904 87.9104 26.3168 165.4272 26.3168l259.1744 0.1536A30.4128 30.4128 0 0 1 431.8208 25.6z m531.456 68.5568a24.832 24.832 0 0 1 18.432 29.3376 25.9072 25.9072 0 0 1-6.144 12.8L814.4896 363.008a25.6 25.6 0 0 1-41.7792-29.696l128.256-180.5312C634.5216 204.3904 409.088 423.6288 387.2768 688.128a25.6 25.6 0 0 1-51.0464-4.1984c22.528-273.7152 242.3808-500.8384 510.4128-571.2384l-156.0576-46.6432a25.6 25.6 0 0 1 14.6944-49.0496l257.9968 77.1584zM437.248 76.0832l-0.5632 0.2048a2.816 2.816 0 0 0 0.5632-0.2048z"
                  p-id="6004"></path>
              </svg>
            </el-icon>
          </el-col>
          <el-col :span="6" class="posts-item-footer-icon-container">
            <el-icon>
              <svg t="1714663974353" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M157.568 751.296c-11.008-18.688-18.219-31.221-21.803-37.91A424.885 424.885 0 0 1 85.333 512c0-235.637 191.03-426.667 426.667-426.667S938.667 276.363 938.667 512 747.637 938.667 512 938.667a424.779 424.779 0 0 1-219.125-60.502A2786.56 2786.56 0 0 0 272.82 866.4l-104.405 28.48c-23.893 6.507-45.803-15.413-39.285-39.296l28.437-104.288z m65.301 3.787l-17.258 63.306 63.306-17.258a32 32 0 0 1 24.523 3.21 4515.84 4515.84 0 0 1 32.352 18.944A360.79 360.79 0 0 0 512 874.667c200.299 0 362.667-162.368 362.667-362.667S712.299 149.333 512 149.333 149.333 311.701 149.333 512c0 60.587 14.848 118.955 42.827 171.136 3.712 6.912 12.928 22.827 27.37 47.232a32 32 0 0 1 3.34 24.715z m145.995-70.774a32 32 0 1 1 40.917-49.205A159.19 159.19 0 0 0 512 672c37.888 0 73.675-13.173 102.187-36.885a32 32 0 0 1 40.917 49.216A223.179 223.179 0 0 1 512 736a223.179 223.179 0 0 1-143.136-51.69z"
                  p-id="10588"></path>
              </svg>
            </el-icon>
            {{ postItem.thread_info.reply_num }}
          </el-col>
          <el-col :span="6" class="posts-item-footer-icon-container">
            <el-icon>
              <svg t="1714664014034" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
                  p-id="11599"></path>
              </svg>
            </el-icon>
            {{ postItem.thread_info.agree_num }}
          </el-col>
        </el-row>
      </div>
    </div>
    <TemplatePostsItem v-if="showSkeletonScreen" ref="$loading" />
    <div v-if="bottomLoadingEnd" style="text-align: center">已加载全部~</div>
  </div>
  <el-backtop :right="10" :bottom="50" />
</template>

<script setup lang="ts">
  import { log, utils } from "@/env";
  import { CommonUtil } from "@components/utils/CommonUtil";
  import { ChromeFilled } from "@element-plus/icons-vue";
  import { VNodeRef, ref, watch } from "vue";
  import { TiebaNewPCApi } from "../../api/TiebaNewPCApi";
  import { TiebaUrlHandler } from "../../handler/TiebaUrlHandler";
  import { UserInfo } from "../data/TiebaHomeData";
  import TemplatePostsItem from "../template/TemplatePostsItem.vue";

  type HomePostsInfo = NonNullable<NonNullable<Awaited<ReturnType<typeof TiebaNewPCApi.myThread>>>["list"]>["0"];

  const props = defineProps<{
    UserData: UserInfo;
  }>();
  const postsInfoList = ref<HomePostsInfo[]>([]);
  /** 显示骨架屏（也用于滚动触发加载） */
  const showSkeletonScreen = ref(true);
  /** 没有帖子时显示 */
  const showPostEmpty = ref(false);
  //const isLoadingNext = ref(false);
  /** 底部的显示加载完毕的提示 */
  const bottomLoadingEnd = ref(false);
  const $loading = ref<VNodeRef | null>(null);
  const pageNumber = ref(1);

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
  const stopWatchLoading = watch($loading, () => {
    if ($loading.value) {
      observe.observe($loading.value.$el);
    }
  });
  const cancleLoadMoreObserve = () => {
    stopWatchLoading();
    observe.disconnect();
    showSkeletonScreen.value = false;
    bottomLoadingEnd.value = true;
    log.success("移除滚动监听");
  };

  const handlePostItemClick = (postsItem: HomePostsInfo) => {
    window.open(postsItem.thread_info.thread_share_link, "_blank");
  };
  const handlePostForumButtonClick = function (postsItem: HomePostsInfo) {
    const url = TiebaUrlHandler.getForum(postsItem.thread_info.fname);
    window.open(url, "_blank");
  };
  const loadMore = new utils.LockFunction(async () => {
    showSkeletonScreen.value = false;
    const isFirstLoad = pageNumber.value === 1;
    if (isFirstLoad) {
      showPostEmpty.value = false;
      postsInfoList.value.length = 0;
    }
    const userPostsList = await TiebaNewPCApi.myThread(props.UserData.portrait!, pageNumber.value);
    log.info("获取到的帖子", userPostsList);
    if (userPostsList) {
      if (userPostsList.list) {
        postsInfoList.value = postsInfoList.value.concat(userPostsList.list);
        pageNumber.value++;
        if (userPostsList.has_more) {
          showSkeletonScreen.value = true;
        } else {
          cancleLoadMoreObserve();
        }
      } else {
        cancleLoadMoreObserve();
      }
    } else {
      cancleLoadMoreObserve();
    }
    if (isFirstLoad) {
      showPostEmpty.value = false;
    }
  });
</script>

<style scoped>
  .posts-container {
    background: #f2f2f4;
    padding: 10px;
  }

  .posts-container-item {
    background: #ffffff;
    border-radius: 12px;
    margin: 10px 0px 10px 0px;
    padding: 10px;
  }

  .posts-item-title {
    font-weight: 700;
  }

  .posts-item-title,
  .posts-item-content,
  .posts-item-media-container {
    margin: 10px 0px;
  }

  .posts-item-footer {
    margin: 15px 0px 5px 0px;
  }

  .posts-item-footer .el-col {
    text-align: center;
  }

  .posts-item-footer-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px 6px;
  }

  .posts-item-right-user-info {
    padding: 0px 10px;
  }
</style>
