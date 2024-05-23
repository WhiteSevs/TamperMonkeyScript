<script lang="ts" setup>
import { onBeforeMount, onMounted, reactive, ref, watch } from "vue";
import { TiebaHomeData, UserInfo } from "./data/TiebaHomeData";
import Qmsg from "qmsg";

let UserData = ref<UserInfo>({});

onMounted(async () => {
	let userData = await TiebaHomeData.getUserData();
	if (userData) {
		console.log("用户信息", userData);
		Object.assign(UserData.value, userData);
	} else {
		Qmsg.error("加载用户信息失败");
	}
});
</script>
<template>
	<!--<router-link to="/">Go to Home</router-link>
    <router-link to="/follow">Go to follow</router-link>
    <router-link to="/fans">Go to fans</router-link>-->
	<router-view :UserData="UserData"></router-view>
</template>
