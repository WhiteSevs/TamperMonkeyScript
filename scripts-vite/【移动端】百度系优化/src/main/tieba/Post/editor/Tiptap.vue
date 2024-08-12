<template>
	<!--<editor-content :editor="editor" id="reply-editor" />-->
	<div id="reply-editor"></div>
</template>

<script setup lang="ts">
//import { useEditor, EditorContent } from "@tiptap/vue-3";
//import StarterKit from "@tiptap/starter-kit";
//import Placeholder from "@tiptap/extension-placeholder";
//import Image from "@tiptap/extension-image";

import { DOMUtils, log } from "@/env";
import { onMounted, ref } from "vue";
import { useTiptapStore } from "../stores/tiptapStore";
import { unsafeWindow } from "ViteGM";

//const editor = useEditor({
//	content: "",
//	extensions: [
//		StarterKit,
//		Placeholder.configure({
//			placeholder: "发帖千百度 文明第一步",
//		}),
//		Image.configure({
//			allowBase64: true,
//			HTMLAttributes: {
//				class: "tiptap-input-image",
//			},
//			inline: true,
//		}),
//	],
//});

const tiptapStore = useTiptapStore();
let editor = null as any;
// 貌似只有2.2.0通过esm引入才会正常，不然无法换行，会报错
// RangeError: Can not convert <> to a Fragment (looks like multiple versions of prosemirror-model were loaded)
// https://github.com/ueberdosis/tiptap/issues/3800
// https://github.com/ueberdosis/tiptap/issues/4873
let $tiptap = DOMUtils.createElement(
	"script",
	{
		innerHTML: `
                import { Editor } from 'https://fastly.jsdelivr.net/npm/@tiptap/core@2.2.0/+esm'
                import StarterKit from 'https://fastly.jsdelivr.net/npm/@tiptap/starter-kit@2.2.0/+esm'
                import Placeholder from 'https://fastly.jsdelivr.net/npm/@tiptap/extension-placeholder@2.2.0/+esm'
                import Image from "https://fastly.jsdelivr.net/npm/@tiptap/extension-image@2.2.0/+esm";
                const editor = new Editor({
                element: document.querySelector('#reply-editor'),
                extensions: [
                    StarterKit,
                    Placeholder.configure({
                        placeholder: "发帖千百度 文明第一步",
                    }),
                    Image.configure({
                        allowBase64: true,
                        HTMLAttributes: {
                            class: "tiptap-input-image",
                        },
                        inline: true,
                    }),
                ],
                content: '',
                });
                window.tiptapEditor = editor;
				window.dispatchEvent(new Event("tiptap-ready"));
                `,
	},
	{
		type: "module",
	}
);
onMounted(() => {
	DOMUtils.append(document.head, $tiptap);
})
window.addEventListener("tiptap-ready", () => {
	log.success("Editor: Tiptap is success loaded", "green");
	tiptapStore.isLoaded = true;
	editor = (unsafeWindow as any).tiptapEditor;
}, {
	once: true
})
const EditorTools = {
	/**
	 * 插入图片
	 * @param url 图片链接
	 */
	insertImage(url: string) {
		log.info("Editor: 插入图片 => " + url);
		let tipEditor = editor;
		tipEditor.commands.setImage({
			src: url,
		});
	},
	/**
	 * 获取输入的内容
	 * （内部进行字符串转换。比如表情转换）
	 */
	getReplyContentInfo() {
		log.info("Editor: 获取并解析内容");
		let tipEditor = editor;
		let contentHTML = tipEditor.getHTML();
		let $parseNode = document.createElement("div");
		$parseNode.innerHTML = contentHTML;
		let $parseContent = $parseNode.firstChild?.cloneNode(true) as HTMLElement;
		let contentList: string[] = [];
		/* 遍历每一行 */
		let $parseList = Array.from($parseNode.querySelectorAll<HTMLElement>("& > *"))
		$parseList.forEach(($line, index) => {
			if ($line.className === "is-empty") {
				/* 末尾的placeholder */
				return;
			}
			$line
				.querySelectorAll<HTMLImageElement>("img.tiptap-input-image")
				.forEach(($img) => {
					$img.outerHTML = `[emotion pic_type=1 width=30 height=30]${$img.src.replace(/^http(s|):/g, "")}[/emotion]`;
				});
			contentList.push($line.innerText)
		});
		// 数组转字符串
		let content = contentList.join("\n");
		let parseData = {
			text: content,
			html: $parseContent.innerHTML,
		};
		log.info(["Editor: 解析的内容 => ", parseData])
		return parseData
	},
	/**
	 * 清空内容
	 */
	clearContent() {
		log.info('Editor: 清空');
		let tipEditor = editor;
		tipEditor.commands.clearContent();
	},
	/**
	 * 监听编辑器内容改变时，是否为空
	 * @param callback 监听回调
	 */
	listenEditorContentChangeEmptyState(callback: (isEmpty: boolean) => void) {
		log.info("Editor: 设置监听编辑器内容改变时，是否为空");
		let tipEditor = editor;
		tipEditor.on("update", () => {
			callback(tipEditor.isEmpty);
			tipEditor.commands.scrollIntoView()
		});
	},
	/**
	 * 编辑器获取焦点（移动端唤醒键盘）
	 * @param [timeout=0] 延迟时间
	 */
	setEditorFocus(timeout = 0) {
		log.info("Editor: 获取焦点");
		if (timeout < 0) {
			let tipEditor = editor;
			tipEditor.commands.focus();
		} else {
			setTimeout(() => {
				let tipEditor = editor;
				tipEditor.commands.focus();
			}, timeout);
		}

	}
}
// 暴露接口
defineExpose(EditorTools);
</script>

<style>
.tiptap p.is-editor-empty:first-child::before {
	content: attr(data-placeholder);
	float: left;
	color: #adb5bd;
	pointer-events: none;
	height: 0;
}
</style>
<style>
#reply-editor .tiptap {
	width: 100%;
	height: 100%;
	outline: 0 !important;
	font-size: 0.16rem;
}

.tiptap-input-image {
	width: 0.18rem;
	height: 0.18rem;
}
</style>
<style scoped>
#reply-editor {
	/*width: 100%;*/
	/*flex: 1;*/
	overflow: auto;
	background-color: #e5e5e5;
	/*margin: 0px 0.1rem;*/
	padding: 0.06rem;
	/*height: 0.6rem;*/
	height: 100%;
	border-radius: 5px;
}
</style>
