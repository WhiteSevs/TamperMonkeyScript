<template>
    <div class="post-list">
        <div class="post-list-item" v-for="item in postList">
            <div class="user-info" @click="gotoUserHome(item.agreeer.portrait)">
                <div class="user-avatar">
                    <img :src="TiebaUrlApi.getUserAvatar(item.agreeer.portrait)" alt="" />
                </div>
                <div class="user-info-text">
                    <div class="user-name">{{ item.agreeer.show_nickname || item.agreeer.name_show || item.agreeer.name
                        }}
                    </div>
                    <div class="user-time">{{ utils.formatTime(Number(item.time || item.op_time) * 1000) }}</div>
                </div>
            </div>
            <div class="user-content">赞了你的回复</div>
            <div class="reply-content" v-if="item.post_info">{{ item.post_info.author.name_show ||
                item.post_info.author.name }}：{{
                    item.post_info.content.map(it => it.text).join("") }}</div>
            <div class="post-info" @click="gotoPost(item.thread_info.id)">
                <div class="post-info__inner">
                    <div class="post-image" v-if="item?.thread_info?.media?.[0]?.type == 3">
                        <img :src="item?.thread_info?.media?.[0]?.small_pic" alt=""></img>
                    </div>
                    <div class="post-content">{{ item.thread_content.title }}</div>
                </div>
            </div>
            <div class="fname-text" @click="gotoForum(item.thread_info.fname)">{{
                item.thread_info.fname }}</div>
        </div>
        <el-empty description="暂无更多数据" v-if="postList.length === 0" />
        <div id="load-more" class="bottom-msg" v-show="hasMore && postList.length != 0">正在加载...</div>
        <div class="bottom-msg" v-show="!hasMore && postList.length != 0">已无更多</div>
    </div>
</template>

<script lang="ts" setup>
import { $, log, utils } from "@/env"
import { TiebaUrlApi } from '../api/TiebaApi';
import { TiebaSmallAppApi } from '../api/TiebaSmallAppApi';
let id = ref('')
let isFirstLoad = ref(false);
let isLoading = ref(false);
let hasMore = ref(true);
let postList = ref<Exclude<Awaited<ReturnType<typeof TiebaSmallAppApi.agreeme>>, undefined>["agree_list"][0][]>([])



let observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            loadMore();
        }
    });
}, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
})
const cancleScrollListener = () => {
    observe?.disconnect();
    isLoading.value = false;
    log.info("移除滚动监听");
}
let loadMore = async () => {
    let data = await TiebaSmallAppApi.agreeme(id.value)
    log.info(data);
    hasMore.value = Boolean(data?.has_more)
    if (!hasMore.value) {
        cancleScrollListener()
    }
    if (data) {
        if (Array.isArray(data.agree_list)) {
            id.value = data.agree_list[data.agree_list.length - 1].id
            postList.value = postList.value.concat(data.agree_list)
        }
        if (!isFirstLoad.value) {
            isFirstLoad.value = true;
            if (hasMore.value) {
                log.success(`设置监听滚动加载`);
                observe.observe($("#load-more")!)
            }
        }
    }
}
let gotoUserHome = function (portrait: string) {
    window.open(TiebaUrlApi.getUserHome(portrait), "_blank")
}
let gotoPost = function (postId: string | number) {
    window.open(TiebaUrlApi.getPost(postId), "_blank")
}
let gotoForum = function (fName: string) {
    window.open(TiebaUrlApi.getForum(fName), "_blank")
}
onMounted(async () => {
    postList.value = [];
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    await loadMore()
    loading.close()
})
</script>

<style scoped>
.post-list-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 15px;
    border-bottom: 5px solid #efefef;
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
	height: 100px;
    width: 100%;
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
    width: 100px;
    height: 100px;
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
</style>