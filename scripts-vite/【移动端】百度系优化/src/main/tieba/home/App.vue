<script lang="ts" setup>
  import { log } from "@/env";
  import Qmsg from "qmsg";
  import { onMounted, ref } from "vue";
  import { TiebaHomeData, type UserInfo } from "./data/TiebaHomeData";

  const UserData = ref<UserInfo>({});

  onMounted(async () => {
    const $loading = ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    const userData = await TiebaHomeData.getUserData();
    $loading.close();
    if (userData) {
      log.info("用户信息", userData);
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
