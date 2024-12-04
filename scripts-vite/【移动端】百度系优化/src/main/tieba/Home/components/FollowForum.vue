<script setup lang="ts">
import { VNodeRef, reactive, ref, watch } from "vue";
import { UserInfo } from "../data/TiebaHomeData";
import TemplateFollowForum from "../Template/TemplateFollowForum.vue";
import { TiebaHomeApi, UserConcernInfo } from "../../api/TiebaHomeApi";
import { log, utils } from "@/env";

const props = defineProps<{
	UserData: UserInfo;
}>();
let showIsLoading = ref(true);
let isAsyncLoadEnd = ref(false);
let isLoadingEnd = ref(false);
let $loading = ref<VNodeRef | null>(null);
let pageNumber = ref(1);
let followForum = ref<UserConcernInfo[]>([]);
let isEmpty = ref(false);

let colorConversion = new utils.ColorConversion();
let colorLightLevel = 0.7;
let levelColor = ref("#ffffff");
let levelColor0_3 = ref("#5dc7a0");
let levelColor4_9 = ref("#6BA7FF");
let levelColor10_15 = ref("#F9B341");
let levelColor16_18 = ref("#FBA71A");
let levelBgColor = ref("#000000");
let levelBgColor0_3 = ref(
	colorConversion.getLightColor(levelColor0_3.value, colorLightLevel)
);
let levelBgColor4_9 = ref(
	colorConversion.getLightColor(levelColor4_9.value, colorLightLevel)
);
let levelBgColor10_15 = ref(
	colorConversion.getLightColor(levelColor10_15.value, colorLightLevel)
);
let levelBgColor16_18 = ref(
	colorConversion.getLightColor(levelColor16_18.value, colorLightLevel)
);

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
const stopWatchLoading = watch($loading, () => {
	if ($loading.value) {
		if ($loading.value.$el instanceof Element) {
			observe.observe($loading.value.$el);
		} else if ($loading.value.$el.nextElementSibling instanceof Element) {
			observe.observe($loading.value.$el.nextElementSibling);
		}
	}
});
const cancleLoadMoreObserve = () => {
	stopWatchLoading();
	observe.disconnect();
	showIsLoading.value = false;
	isLoadingEnd.value = true;
	log.info(["移除滚动监听"]);
};
const handleForumItemClick = (forumItem: UserConcernInfo) => {
	window.open(forumItem.url, "_blank");
};
const loadMore = async () => {
	showIsLoading.value = false;
	let isFirstLoad = pageNumber.value === 1;
	if (isFirstLoad) {
		isAsyncLoadEnd.value = false;
		followForum.value = [];
	}
	let concernData = await TiebaHomeApi.getConcern(
		props.UserData.name as string,
		pageNumber.value
	);
	showIsLoading.value = true;
	if (concernData) {
		if (concernData.data) {
			followForum.value = followForum.value.concat(concernData.data);
			pageNumber.value++;
		}
		if (!concernData.has_more) {
			cancleLoadMoreObserve();
		}
	} else {
		log.info(["获取关注的吧数据失败"]);
		if (isFirstLoad) {
			isAsyncLoadEnd.value = true;
			cancleLoadMoreObserve();
			isEmpty.value = true;
			isLoadingEnd.value = false;
		}
	}
	log.info(["获取到的关注的吧", concernData]);
};
</script>

<template>
	<div class="follow-forum-container">
		<el-empty
			description="这位老铁已将关注的吧设为隐藏"
			v-if="isAsyncLoadEnd && followForum.length === 0" />
		<el-row class="follow-forum-list-container" v-if="!isEmpty">
			<div
				class="follow-forum-item"
				:span="24"
				v-for="(item, index) in followForum"
				:key="index"
				@click="handleForumItemClick(item)">
				<el-avatar
					class="follow-forum-avatar"
					:size="35"
					:src="'//tb2.bdstatic.com/tb/mobile/sglobal/layout/classic/icon/apple-touch-icon-144x144-precomposed_08a91b3.png'" />
				<div class="follow-forum-item-right-container">
					<div class="follow-forum-item-name">{{ item.forumName }}</div>
					<el-text
						class="follow-forum-item-info"
						type="info"
						size="small"
						truncated
						>{{ item.intro }}</el-text
					>
				</div>
				<span class="follow-forum-item-level" :data-level="item.level">{{
					item.level
				}}</span>
			</div>
			<TemplateFollowForum v-if="showIsLoading" ref="$loading" />
		</el-row>
		<div v-if="isLoadingEnd" style="text-align: center">已经到底了~</div>
		<el-backtop :right="10" :bottom="50" />
	</div>
</template>

<style scoped>
.follow-forum-container {
	background: #f2f2f4;
	padding: 10px;
}

.follow-forum-list-container {
	background: #ffffff;
	border-radius: 12px;
	margin: 10px 0px 10px 0px;
	padding: 10px;
}

.follow-forum-item {
	width: 50%;
	max-width: 50%;
	display: flex;
	align-items: flex-start;
	margin: 10px 0px 10px 0px;
}

.follow-forum-avatar {
	border-radius: 12px;
}

.follow-forum-item-right-container {
	margin: 0px 10px;
	width: inherit;
	display: flex;
	flex-direction: column;
}

.follow-forum-item-name {
	display: flex;
	align-items: center;
	width: -webkit-fill-available;
	width: -moz-available;
}

.follow-forum-item-level[data-level] {
	margin: 5px;
	padding: 2px;
	border-radius: 3px;
	font-size: 0.6rem;
	line-height: 0.6rem;
	font-weight: 700;
	text-align: center;
	background: v-bind("levelBgColor");
	color: v-bind("levelColor");
}

.follow-forum-item-level[data-level="0"],
.follow-forum-item-level[data-level="1"],
.follow-forum-item-level[data-level="2"],
.follow-forum-item-level[data-level="3"] {
	background: v-bind("levelColor0_3");
	/*color: v-bind("levelColor0_3");*/
}

.follow-forum-item-level[data-level="4"],
.follow-forum-item-level[data-level="5"],
.follow-forum-item-level[data-level="6"],
.follow-forum-item-level[data-level="7"],
.follow-forum-item-level[data-level="8"],
.follow-forum-item-level[data-level="9"] {
	background: v-bind("levelColor4_9");
	/*color: v-bind("levelColor4_9");*/
}

.follow-forum-item-level[data-level="10"],
.follow-forum-item-level[data-level="11"],
.follow-forum-item-level[data-level="12"],
.follow-forum-item-level[data-level="13"],
.follow-forum-item-level[data-level="14"],
.follow-forum-item-level[data-level="15"] {
	background: v-bind("levelColor10_15");
	/*color: v-bind("levelColor10_15");*/
}

.follow-forum-item-level[data-level="16"],
.follow-forum-item-level[data-level="17"],
.follow-forum-item-level[data-level="18"] {
	background: v-bind(levelColor16_18);
	/*color: v-bind(levelColor16_18);*/
}

.follow-forum-item-info {
	word-wrap: break-word;
}
</style>
