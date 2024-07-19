<template>
	<div id="small-toolbar">
		<div class="small-editor-toolbar">
			<input readonly class="small-editor-toolbar-input" :placeholder="toolbarStore.placeholder"
				@click="ToolbarHandler.handleShowFullToolbar" />
			<div class="small-editor-toolbar-emoji-btn" @click="ToolbarHandler.handleShowFullToolbar">
				<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2299"
					width="16" height="16">
					<path
						d="M511 954.86c-119.3 0-231.4-46.1-315.8-129.9-84.3-83.8-130.8-195.3-130.8-313.8 0-118.5 46.5-230 130.8-313.8 84.3-83.8 196.5-129.9 315.8-129.9 119.3 0 231.5 46.1 315.8 129.9 174.1 173.1 174.1 454.6 0 627.6C742.5 908.66 630.3 954.86 511 954.86L511 954.86 511 954.86 511 954.86 511 954.86zM511.1 125.26c-103.8 0-201.3 40.1-274.6 113-73.4 72.9-113.8 169.8-113.8 272.9 0 103.1 40.4 200.1 113.7 272.9 73.3 72.8 170.9 113 274.6 113 103.8 0 201.4-40.2 274.8-113.1 151.4-150.4 151.4-395.3 0-545.8C712.4 165.36 614.8 125.26 511.1 125.26L511.1 125.26 511.1 125.26 511.1 125.26 511.1 125.26zM352.4 632.26c0 0 52.3 83.1 158.6 83.1 106.3 0 176-83.1 176-83.1s39.5-0.1 39.5 41.5c0 0-68.5 97-215.5 97s-194.8-97-194.8-97S314.7 632.26 352.4 632.26L352.4 632.26 352.4 632.26 352.4 632.26zM381.2 368.46c-30.1 0-54.7 24.3-54.7 54.3 0 30 24.6 54.3 54.7 54.3 30.3 0 54.7-24.3 54.7-54.3C435.9 392.76 411.5 368.46 381.2 368.46L381.2 368.46 381.2 368.46 381.2 368.46 381.2 368.46zM661.4 368.46c-30.2 0-54.7 24.3-54.7 54.3 0 30 24.5 54.3 54.7 54.3 30.2 0 54.7-24.3 54.7-54.3C716.1 392.76 691.7 368.46 661.4 368.46L661.4 368.46 661.4 368.46 661.4 368.46 661.4 368.46z"
						p-id="2300"></path>
				</svg>
			</div>
		</div>

		<div class="full-editor-toolbar"></div>

		<div class="gm-reply-other-toolbar">
			<div class="reply-comment-count" @click="Toolbar.goToReplyArea">
				<svg class="icon icoon-comment">
					<use xlink:href="#icon_pure_pb_bottom_comment28"></use>
				</svg>
				<p class="text">{{ toolbarStore.showCommentCount }}</p>
			</div>
			<div class="reply-good-count" @click="Toolbar.goodClickEvent">
				<svg class="icon icoon-good">
					<use v-bind:xlink:href="TiebaComment.has_agree.value
						? '#icon_agree_after_26'
						: '#icon_agree_before_26'
						"></use>
				</svg>
				<p class="text">{{ toolbarStore.showGoodCount }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Toolbar } from "../Toolbar";
import { TiebaComment } from "../TiebaComment";
import { utils } from "@/env";
import { TiebaReply } from "../TiebaReply";
import useToolbarStore from "../stores/ToolbarStore";
import useToolbarStateStore from "../stores/ToolbarStateStore";
import useAccountStore from "../stores/AccoutStore";

// 全局数据管理
const toolbarStore = useToolbarStore();
const accountStore = useAccountStore();
const toolbarStateStore = useToolbarStateStore();
// 父组件传递的事件
const emits = defineEmits(["showFullToolbar"]);

const ToolbarHandler = {
	/**
	 * 点击工具栏触发显示完整的工具栏
	 * @param event 
	 */
	handleShowFullToolbar(event: MouseEvent) {
		// 阻止事件冒泡/默认行为
		utils.preventEvent(event);
		if (!accountStore.isLogin) {
			TiebaReply.checkLogin();
			return;
		}
		emits("showFullToolbar", true);
	},
}
</script>

<style scoped>
@charset "UTF-8";

#small-toolbar {
	position: fixed;
	bottom: 0;
	width: 100%;
	background: #fff;
	height: 0.56rem;
	display: flex;
	align-items: center;
	z-index: 1000;
	/* 小的工具栏 */
}

#small-toolbar .icon {
	width: 0.2rem;
	height: 0.2rem;
}

#small-toolbar #reply-editor {
	flex: 1;
}

#small-toolbar .small-editor-toolbar {
	flex: 1;
	margin: 10px 15px;
	width: 100%;
	font-size: 0.16rem;
	line-height: 0.16rem;
	display: flex;
	align-items: center;
	position: relative;
}

#small-toolbar .small-editor-toolbar .small-editor-toolbar-input {
	width: 100%;
	background: #e9e9e9;
	border-radius: 0.06rem;
	padding: 0.06rem 0.06rem;
	border: 0;
	outline: none;
	font-size: 0.14rem;
	line-height: 0.14rem;
	cursor: default;
}

#small-toolbar .small-editor-toolbar .small-editor-toolbar-emoji-btn {
	position: absolute;
	top: 50%;
	right: 0.06rem;
	transform: translateY(-50%);
}

#small-toolbar .small-editor-toolbar .small-editor-toolbar-input:focus,
#small-toolbar .small-editor-toolbar .small-editor-toolbar-input:visited,
#small-toolbar .small-editor-toolbar .small-editor-toolbar-input:focus-within,
#small-toolbar .small-editor-toolbar .small-editor-toolbar-input:focus-visible {
	border: 0;
	outline: none;
}

#small-toolbar .gm-reply-other-toolbar {
	flex: 0 auto;
	display: flex;
	align-items: safe center;
}

#small-toolbar .gm-reply-other-toolbar .reply-comment-count,
#small-toolbar .gm-reply-other-toolbar .reply-good-count {
	padding: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

#small-toolbar .gm-reply-other-toolbar .reply-comment-count p.text,
#small-toolbar .gm-reply-other-toolbar .reply-good-count p.text {
	font-size: 0.1rem;
}
</style>
