<template>
	<div id="full-toolbar" :data-show-bottom-panel="currentPanelMenu.state" :data-show-reply-content="ReplyUser !== ''">
		<div class="full-toolbar-top-reply-user" v-show="ReplyUser !== ''">
			{{ ReplyUser }} {{ ReplyUserContent }}
		</div>
		<div class="full-toolbar-top-container" v-bind:data-full="isEnlarge">
			<div class="full-toolbar-top-nav-container" v-if="isEnlarge">
				<el-icon :size="'0.18rem'" @click="ToolbarHandler.handleEditorHeight">
					<Close />
				</el-icon>

				<el-button class="btn-publish" :color="BtnColor" :size="'small'" round
					@touchstart="ToolbarHandler.recordOnSubmitTouchStart"
					@touchend="ToolbarHandler.handlePostMsgClickEvent"
					:disabled="toolbarStateStore.isEmpty">发表</el-button>
			</div>
			<div class="full-toolbar-top-left-container">
				<Tiptap ref="EditorRef" />
			</div>

			<div class="full-toolbar-top-right-container">
				<el-icon class="btn-enlarge" v-if="!isEnlarge" @click="ToolbarHandler.handleEditorHeight">
					<ArrowUp />
				</el-icon>
				<el-icon class="btn-narrow" v-if="isEnlarge" @click="ToolbarHandler.handleEditorHeight">
					<ArrowDown />
				</el-icon>
				<el-button class="btn-publish" :color="BtnColor" :size="'small'" round
					@touchstart="ToolbarHandler.recordOnSubmitTouchStart"
					@touchend="ToolbarHandler.handlePostMsgClickEvent"
					:disabled="toolbarStateStore.isEmpty">发表</el-button>
			</div>
		</div>

		<el-row class="full-toolbar-bottom-container" justify="space-evenly">
			<el-col :span="8">
				<div class="full-toolbar-emoji-btn" @click="ToolbarHandler.handleEmojiIconClick">
					<svg :fill="currentPanelMenu.state && currentPanelMenu.name === 'emoji'
						? BtnColor
						: ''
						" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2299" width="20"
						height="20">
						<path
							d="M511 954.86c-119.3 0-231.4-46.1-315.8-129.9-84.3-83.8-130.8-195.3-130.8-313.8 0-118.5 46.5-230 130.8-313.8 84.3-83.8 196.5-129.9 315.8-129.9 119.3 0 231.5 46.1 315.8 129.9 174.1 173.1 174.1 454.6 0 627.6C742.5 908.66 630.3 954.86 511 954.86L511 954.86 511 954.86 511 954.86 511 954.86zM511.1 125.26c-103.8 0-201.3 40.1-274.6 113-73.4 72.9-113.8 169.8-113.8 272.9 0 103.1 40.4 200.1 113.7 272.9 73.3 72.8 170.9 113 274.6 113 103.8 0 201.4-40.2 274.8-113.1 151.4-150.4 151.4-395.3 0-545.8C712.4 165.36 614.8 125.26 511.1 125.26L511.1 125.26 511.1 125.26 511.1 125.26 511.1 125.26zM352.4 632.26c0 0 52.3 83.1 158.6 83.1 106.3 0 176-83.1 176-83.1s39.5-0.1 39.5 41.5c0 0-68.5 97-215.5 97s-194.8-97-194.8-97S314.7 632.26 352.4 632.26L352.4 632.26 352.4 632.26 352.4 632.26zM381.2 368.46c-30.1 0-54.7 24.3-54.7 54.3 0 30 24.6 54.3 54.7 54.3 30.3 0 54.7-24.3 54.7-54.3C435.9 392.76 411.5 368.46 381.2 368.46L381.2 368.46 381.2 368.46 381.2 368.46 381.2 368.46zM661.4 368.46c-30.2 0-54.7 24.3-54.7 54.3 0 30 24.5 54.3 54.7 54.3 30.2 0 54.7-24.3 54.7-54.3C716.1 392.76 691.7 368.46 661.4 368.46L661.4 368.46 661.4 368.46 661.4 368.46 661.4 368.46z"
							p-id="2300"></path>
					</svg>
				</div>
			</el-col>
			<el-col :span="8" v-if="false">
				<div class="full-toolbar-panel-at-btn" @click="ToolbarHandler.handleAtIconClick">
					<svg :fill="currentPanelMenu.state && currentPanelMenu.name === 'at'
						? BtnColor
						: ''
						" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
						<path
							d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512c0 25.6-17.066667 42.666667-42.666667 42.666667s-42.666667-17.066667-42.666667-42.666667c0-234.666667-192-426.666667-426.666667-426.666667S85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667c115.2 0 221.866667-42.666667 302.933333-123.733333 17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733333C776.533333 972.8 648.533333 1024 512 1024z"
							p-id="2304"></path>
						<path
							d="M853.333333 682.666667c-93.866667 0-170.666667-76.8-170.666667-170.666667 0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667c0 46.933333 38.4 85.333333 85.333333 85.333333s85.333333-38.4 85.333333-85.333333c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667C1024 605.866667 947.2 682.666667 853.333333 682.666667z"
							p-id="2305"></path>
						<path
							d="M512 768c-140.8 0-256-115.2-256-256s115.2-256 256-256 256 115.2 256 256S652.8 768 512 768zM512 341.333333c-93.866667 0-170.666667 76.8-170.666667 170.666667s76.8 170.666667 170.666667 170.666667 170.666667-76.8 170.666667-170.666667S605.866667 341.333333 512 341.333333z"
							p-id="2306"></path>
						<path
							d="M725.333333 554.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667L682.666667 298.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667l0 213.333333C768 537.6 750.933333 554.666667 725.333333 554.666667z"
							p-id="2307"></path>
					</svg>
				</div>
			</el-col>
		</el-row>
		<div class="full-toolbar-bottom-panel">
			<div class="emoji-panel" v-if="currentPanelMenu.state && currentPanelMenu.name === 'emoji'">
				<div class="emoji-panel-huaji">
					<el-avatar @click="ToolbarHandler.handleEmojiImageClick($event, url)"
						style="background: transparent" shape="square" :size="35" :fit="'fill'" :src="url"
						v-for="url in EmojiPanel.getImageList()" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ArrowUp, ArrowDown, Close } from "@element-plus/icons-vue";
import { onMounted, ref, watch } from "vue";
import { EmojiPanel } from "../editor/EdmojiPanel";
import { TiebaReply } from "../TiebaReply";
import { log, utils } from "@/env";
import Qmsg from "qmsg";
import Tiptap from "../editor/Tiptap.vue";
import useToolbarStore from "../stores/ToolbarStore";
import useToolbarStateStore from "../stores/ToolbarStateStore";
import { useTiptapStore } from "../stores/tiptapStore";

// 全局数据管理
const toolbarStore = useToolbarStore();
const toolbarStateStore = useToolbarStateStore();
const tiptapStore = useTiptapStore();
// 父组件传递的事件
const emits = defineEmits(["updateContentState", "showSmallToolbar"]);
/* 子组件Editor暴露的数据 */
const EditorRef = ref<{
	insertImage: (url: string) => void;
	getReplyContentInfo: () => {
		text: string;
		html: string;
	};
	setEditorFocus: () => void;
	clearContent: () => void;
	listenEditorContentChangeEmptyState: any,
}>();

// 按钮/图标颜色
const BtnColor = ref("#7557FF");
// 当前面板状态
const currentPanelMenu = ref({
	name: "emoji",
	state: true,
});
// 当前回复的用户
const ReplyUser = ref("");
// 当前回复的用户（的内容）
const ReplyUserContent = ref("");
// 当前放大/缩小状态
const isEnlarge = ref(false);

const updateContentState = (state: boolean) => {
	emits("updateContentState", state);
};
EmojiPanel.init();

const ToolbarHandler = {
	/** 处理底部panel显示/隐藏 */
	handleBottomPanelVisible(menuName: string, state = !currentPanelMenu.value.state) {
		currentPanelMenu.value.state = state;
		currentPanelMenu.value.name = menuName;
	},
	/** 放大、缩小按钮图标的点击事件 */
	handleEditorHeight() {
		isEnlarge.value = !isEnlarge.value;
	},
	/** 工具栏 表情 => 表情图片 点击事件 */
	handleEmojiImageClick(event: MouseEvent, url: string) {
		if (EditorRef.value) {
			EditorRef.value.insertImage(url);
		}
	},
	/** 工具栏 表情 点击事件 */
	handleEmojiIconClick(event: MouseEvent) {
		ToolbarHandler.handleBottomPanelVisible("emoji");
	},
	/** 工具栏 @ 点击事件 */
	handleAtIconClick(event: MouseEvent) {
		ToolbarHandler.handleBottomPanelVisible("at");
	},

	/** 发表 点击事件 */
	handlePostMsgClickEvent(event: TouchEvent) {
		log.info("点击发表按钮");
		TiebaReply.$data.isSending.value = true;
		TiebaReply.sendMsg(event);
		/* 给源box设置内容，并主动触发发表按钮点击事件，触发发送 */
		//resetToolbar();
		//TiebaReply.handlerCommentSuccess();
	},
	/** 按下 发表按钮 */
	recordOnSubmitTouchStart(event: TouchEvent) {
		let contentInfo = EditorRef.value!.getReplyContentInfo();
		TiebaReply.setInputValue(contentInfo.text);
		TiebaReply.sendMsgBefore(event);
	},
	/** 重置回复的用户，使当前为回复本帖楼主 */
	resetReplyUser() {
		ReplyUser.value = "";
		ReplyUserContent.value = "";
		if (TiebaReply.$data.type.value !== "main") {
			TiebaReply.$data.type.value = "main";
			TiebaReply.setCurrentReplyMainUser();
		}
	},
	/** 重置编辑器，一般是发表后进行清空操作 */
	resetToolbar(showSmallToolbar = true) {
		ToolbarHandler.resetReplyUser();
		isEnlarge.value = false;
		EditorRef.value!.clearContent();
		updateContentState(true);
		if (showSmallToolbar) {
			emits("showSmallToolbar")
		}
		TiebaReply.$data.isSending.value = false;
	}
}

/** 赋予函数 */
TiebaReply.$vue.handlerCommentSuccess = (pid: number, content: string, no: number) => {
	log.success(["回复成功的回调", {
		no,
		pid,
		content,
	}])
	if (no === 0) {
		// 成功
		// 添加对应的元素到页面中
		if (TiebaReply.$data.type.value === "lzl-comment") {
			// 楼中楼回复
			// 添加在最顶部

		} else {
			// 主内容或者评论区的回复
			// 直接添加到最顶部

		}
		// ↑暂不做
		Qmsg.success("回复成功，请刷新查看~")
		ToolbarHandler.resetToolbar();
	} else {
		// 失败
		Qmsg.error("发表失败，请检查网络后重试", {
			zIndex: utils.getMaxZIndex() + 10
		});
	}
}

watch(
	() => toolbarStateStore.isShowFullToolbar,
	(newValue, oldValue) => {
		if (newValue) {
			if (TiebaReply.$data.type.value != null) {
				if (TiebaReply.$data.type.value === "comment") {
					ReplyUser.value = `回复 ：${TiebaReply.$data.replyCommentData.value!.data.authorName
						}`;
					ReplyUserContent.value =
						TiebaReply.$data.replyCommentData.value!.data.content;
				} else if (TiebaReply.$data.type.value === "lzl-comment") {
					ReplyUser.value = `回复 ：${TiebaReply.$data.replyLzlCommentData.value!.data.authorName
						}`;
					ReplyUserContent.value =
						TiebaReply.$data.replyLzlCommentData.value!.data.content;
				} else {
					/* main */
					ReplyUser.value = "";
				}
			}
			setTimeout(() => {
				EditorRef.value?.setEditorFocus();
			}, 200);
		} else {
			ToolbarHandler.resetReplyUser();
			isEnlarge.value = false;
		}
	},
	{
		deep: true,
		immediate: true,
	}
);

watch(() => tiptapStore.isLoaded, (newValue) => {
	log.success("tiptap加载完毕，监听内容！")
	EditorRef.value?.listenEditorContentChangeEmptyState(updateContentState)
}, {
	immediate: true,
	deep: true
})

defineExpose({
	handleBottomPanelVisible: ToolbarHandler.handleBottomPanelVisible,
	resetReplyUser: ToolbarHandler.resetReplyUser
})
</script>

<style scoped>
.icon-active {
	fill: #7557ff;
}

#full-toolbar {
	position: fixed;
	bottom: 0;
	width: 100%;
	background: #fff;
	display: flex;
	align-items: center;
	z-index: 100099;
	flex-flow: column;
}

#full-toolbar .full-toolbar-top-reply-user {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #adb5bd;
	width: -webkit-fill-available;
	width: -moz-available;
	padding-left: 0.2rem;
	padding-top: 0.06rem;
}

#full-toolbar .full-toolbar-top-container {
	display: flex;
	align-items: end;
	width: -moz-available;
	width: -webkit-fill-available;
	padding: 0.06rem 0.1rem;
	height: 0.6rem;
}

#full-toolbar .full-toolbar-top-container .full-toolbar-top-left-container {
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow: hidden;
	margin: 0px 0.1rem;
	height: 100%;
}

#full-toolbar .full-toolbar-top-container .full-toolbar-top-right-container {
	flex: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
}

#full-toolbar .full-toolbar-bottom-container {
	margin: 0.06rem 0;
	padding: 0px 0px 0.06rem 0px;
	margin-right: auto;
}

#full-toolbar .full-toolbar-bottom-container .full-toolbar-emoji-btn,
#full-toolbar .full-toolbar-bottom-container .full-toolbar-panel-at-btn {
	margin: 0px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

#full-toolbar .emoji-panel {
	width: 100%;
	height: 30vh;
	background-color: #efefef;
	overflow: auto;
}

.emoji-panel-huaji {
	padding: 0.03rem;
	overflow-y: auto;
}

.emoji-panel-huaji .el-avatar {
	margin: 16px;
}
</style>

<style scoped>
#full-toolbar:has(.full-toolbar-top-container[data-full=true]) {
	height: -moz-available;
	height: 100%;
	height: -webkit-fill-available;
}

#full-toolbar:has(.full-toolbar-top-container[data-full=true]) .full-toolbar-top-container,
#full-toolbar:has(.full-toolbar-top-container[data-full=true]) #reply-editor {
	height: -moz-available;
	height: 100%;
	height: -webkit-fill-available;
}

#full-toolbar:has(.full-toolbar-top-container[data-full=true]) .full-toolbar-top-reply-user,
#full-toolbar:has(.full-toolbar-top-container[data-full=true]) .full-toolbar-top-right-container {
	display: none;
}

#full-toolbar:has(.full-toolbar-top-container[data-full=true]) .full-toolbar-top-container {
	flex-direction: column;
}

#full-toolbar:has(.full-toolbar-top-container[data-full=true]) .full-toolbar-top-left-container {
	width: -webkit-fill-available;
	width: -moz-available;
}

.full-toolbar-top-nav-container {
	display: flex;
	width: -webkit-fill-available;
	width: -moz-available;
	align-items: center;
	justify-content: space-between;
	padding: 0.16rem;
}
</style>
<style>
#full-toolbar .full-toolbar-top-container {
	max-height: calc(100vh - 0.12rem - 40px);
}

#full-toolbar[data-show-bottom-panel="true"] .full-toolbar-top-container {
	max-height: calc(100vh - 30vh - 0.12rem - 40px);
}
</style>
