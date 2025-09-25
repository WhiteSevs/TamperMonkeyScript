import { defineStore } from "pinia";

const usePlaceHolder = defineStore("placeholder", {
  state: () => ({
    /**
     * 内容为空时的placeholder
     */
    empty: "发帖千百度 文明第一步",
    /**
     * 存在内容时的placeholder
     */
    hasContent: "[草稿待发送]",
  }),
});

export default usePlaceHolder;
