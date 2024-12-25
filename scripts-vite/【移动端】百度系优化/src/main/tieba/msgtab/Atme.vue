<template>
    <div class="post-list">
        <el-empty description="暂无测试用例，无法适配" v-if="postList.length === 0" />
        <div id="load-more" class="bottom-msg" v-show="hasMore && postList.length != 0">
            正在加载...
        </div>
        <div class="bottom-msg" v-show="!hasMore && postList.length != 0">已无更多</div>
    </div>
</template>

<script lang="ts" setup>
import { $, log, utils } from "@/env";
import { TiebaUrlApi } from "../api/TiebaApi";
import { TiebaSmallAppApi } from "../api/TiebaSmallAppApi";

let pn = ref(1);
let isFirstLoad = ref(false);
let isLoading = ref(false);
let hasMore = ref(true);
let postList = ref<Exclude<
    Awaited<ReturnType<typeof TiebaSmallAppApi.atme>>,
    undefined
>["at_list"][0][]>([])




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
    let data = await TiebaSmallAppApi.atme(pn.value);
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
};
let gotoUserHome = function (portrait: string) {
    window.open(TiebaUrlApi.getUserHome(portrait), "_blank");
};
let gotoPost = function (postId: string | number) {
    window.open(TiebaUrlApi.getPost(postId), "_blank");
};
let gotoForum = function (fName: string) {
    window.open(TiebaUrlApi.getForum(fName), "_blank");
};


onMounted(async () => {
    postList.value = [];
    const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
    });
    try {
        await loadMore()
    } catch (error) {
        log.error(error)
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