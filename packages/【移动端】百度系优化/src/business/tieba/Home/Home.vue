<script lang="ts" setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Posts from "./components/Posts.vue"
import FollowForum from "./components/FollowForum.vue"
import { ArrowLeft, QuestionFilled, Plus, Message, CopyDocument, ArrowRight, Check } from '@element-plus/icons-vue'
import { DOMUtils, Qmsg, utils } from "@/env";
import { onBeforeMount, onMounted, reactive, ref, watch } from 'vue';
import { TiebaHomeData, UserInfo } from "./data/TiebaHomeData";
import { ElMessage, ElMessageBox, ElRow, TabsPaneContext } from "element-plus";
import { router } from "./router"

const props = defineProps<{
  UserData: UserInfo
}>()

let loadStatus = ref(false);
let activeName = ref("帖子");

/**
 * 复制id的点击事件
 */
const copyIdEvent = () => {
  utils.setClip(props.UserData.id).then(result => {
    if (result) {
      Qmsg.success("复制成功")
    } else {
      Qmsg.error("复制失败")
    }
  })
}

const changeFollowBtnStatus = (time: number = 5000) => {
  let interval = setInterval(() => {
    if (document.querySelector(".j_home_card_request_card:has(.icon_hide)")) {
      props.UserData.is_like = true;
    } else {
      props.UserData.is_like = false;
    }
  }, 200);
  setTimeout(() => {
    clearInterval(interval)
  }, time);
}

const clickFollowBtnEvent = () => {
  let selector = ".j_home_card_request_card:not(:has(.icon_hide))";
  let $btn = document.querySelector(selector) as HTMLAnchorElement;
  $btn.click();
  changeFollowBtnStatus();
}
const clickCancelFollowBtnEvent = () => {
  let selector = ".j_home_card_request_card:has(.icon_hide)"
  let $btn = document.querySelector(selector) as HTMLAnchorElement;
  $btn.click();
  utils.waitNode(".dia_wrapper").then($ele => {
    DOMUtils.on($ele, "click", ".dia_btnwrapper a", function () {
      changeFollowBtnStatus();
    }, {
      capture: true,
    })
  })
}

const clickMessageBtnEvent = () => {
  (document.querySelector(".j_home_card_chat ") as HTMLAnchorElement).click();
}

const clickIpHelpEvent = () => {
  ElMessage({
    // @ts-ignore
    showClose: false,
    message: 'IP属地以运营商信息为准，如有问题可咨询客服',
    center: true,
    plain: true,
    offset: 0,
    duration: 3500,
    type: "",
    customClass: "pops-ip-location-help",
  })
}


const clickReceivedLikesEvent = () => {
  ElMessageBox.confirm(`${props.UserData.showName}共获得吧友${props.UserData.postInfo?.receivedLikes}次点赞`, "", {
    showClose: false,
    showCancelButton: false,
    center: true,
    roundButton: true,
    confirmButtonText: "知道了"
  })
}

const aboutUserEvent = function () {
  router.push({
    path: "/about",
  })
}

const clickFollowEvent = () => {
  router.push({
    path: "/follow",
  })
}
const clickFansEvent = () => {
  router.push({
    path: "/fans",
  })
}
watch(props.UserData, () => {
  if (props.UserData.postInfo?.post) {
    loadStatus.value = true;
  }
}, {
  deep: true,
  immediate: true,
})



</script>

<template>
  <el-container id="main">
    <!--<el-header>
      <el-page-header :icon="ArrowLeft">
        <template #content>
          <span class="text-large font-600 mr-3"> Title </span>
        </template>
</el-page-header>
</el-header>-->
    <el-main style="padding: 0;">
      <div class="user-info-bg">
        <div class="user-info-bg-main"></div>
      </div>
      <el-row :justify="'center'">
        <el-col>
          <div class="user-avatar-top-background"></div>
          <el-row :gutter="20" :align="'bottom'" style="margin: 0px 0px;">
            <el-col :span="12">
              <el-avatar :src="props.UserData.avatar" :size="90" />
            </el-col>
            <el-col :span="12">
              <el-row :justify="'end'" style="flex-wrap: nowrap;">
                <el-button color="#7558FE" round :icon="Plus" v-if="!props.UserData.is_like"
                  @click="clickFollowBtnEvent">关注</el-button>
                <el-button color="#7558FE" plain round :icon="Check" v-if="props.UserData.is_like"
                  @click="clickCancelFollowBtnEvent">取消关注</el-button>
                <el-button color="#7558FE" :plain="!props.UserData.is_like" round :icon="Message"
                  @click="clickMessageBtnEvent">私信</el-button>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-space class="top-container" :size="10" direction="vertical" alignment="stretch">
        <!-- 头像 关注 私信 -->
        <!-- 用户名 等级 -->
        <el-row>
          <el-text :size='"large"' :class="'big-text'" style="display:flex;align-items: center;">
            {{ props.UserData.showName }}
            <el-avatar :size="14" v-if="props.UserData.otherData?.PanelUserInfo?.vipInfo?.icon_url"
              :src="props.UserData.otherData?.PanelUserInfo?.vipInfo.icon_url" shape="square"
              style="margin: 0px 5px;" />
          </el-text>
        </el-row>
        <!-- id 吧龄 IP地址 -->
        <el-row style="color: #909399;">
          <span :data-sex="props.UserData.sex">
            {{ props.UserData.sex == 0 ? "保密" : (props.UserData.sex == 1 ? "♂" : "♀") }}
          </span>
          <el-divider direction="vertical" border-style="dashed" />
          <el-link :underline="false" @click="copyIdEvent">
            ID {{ props.UserData.id }}
            <el-icon>
              <CopyDocument />
            </el-icon>
          </el-link>
          <el-divider direction="vertical" border-style="dashed" />
          <span>
            吧龄{{ props.UserData.level }}年
          </span>
          <el-divider v-if="utils.isNotNull(props.UserData.ip)" direction="vertical" border-style="dashed" />
          <span v-if="utils.isNotNull(props.UserData.ip)" style="display: flex;align-items: center;text-wrap: nowrap;">
            {{ props.UserData.ip?.location }}
            <el-icon @click="clickIpHelpEvent">
              <QuestionFilled />
            </el-icon>
          </span>
        </el-row>
        <!-- 个性签名 -->
        <el-row :justify='"space-between"' style="color: #909399;" @click="aboutUserEvent">
          <div>{{ utils.isNull(props.UserData.personalSignature) ? "该用户还没有填写签名" : props.UserData.personalSignature }}
          </div>
          <el-text :type='"info"'>
            关于Ta
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-text>
        </el-row>
        <!-- 获赞 关注 粉丝 -->
        <el-row>
          <el-space :size="25">
            <el-col @click="clickReceivedLikesEvent">
              <el-text :size="'large'" :class="'big-text'" style="margin-right: 0.5rem;">{{
                props.UserData.postInfo?.receivedLikes
              }}</el-text>
              <el-text :type='"info"'>获赞</el-text>
            </el-col>
            <el-col @click="clickFollowEvent">
              <el-text :size="'large'" :class="'big-text'" style="margin-right: 0.5rem;">{{
                props.UserData.postInfo?.follow
              }}</el-text>
              <el-text :type='"info"'>关注</el-text>
            </el-col>
            <el-col @click="clickFansEvent">
              <el-text :size="'large'" :class="'big-text'" style="margin-right: 0.5rem;">{{
                props.UserData.postInfo?.fans
              }}</el-text>
              <el-text :type='"info"'>粉丝</el-text>
            </el-col>
          </el-space>
        </el-row>
        <el-divider style="margin: 0;" />
        <!-- 印记 -->
        <el-row :justify="'space-between'" style="align-items: center">
          <div>
            Ta的印记
          </div>
          <div>
            <el-avatar :size="20" :src="imprintSrc" v-for=" imprintSrc in props.UserData.imprint" />
            <el-icon>
              <ArrowRight />
            </el-icon>
          </div>
        </el-row>
        <el-divider style="margin: 0;" />
        <el-row>
          <el-tabs v-model="activeName" class="user-info-tabs">
            <el-tab-pane
              :label="'帖子' + (props.UserData.postInfo?.post != null ? ' ' + props.UserData.postInfo?.post : '')"
              name="帖子"></el-tab-pane>
            <el-tab-pane
              :label="'关注的吧' + (props.UserData.postInfo?.forum != null ? ' ' + props.UserData.postInfo?.forum : '')"
              name="关注的吧"></el-tab-pane>
          </el-tabs>
        </el-row>
      </el-space>
      <Posts v-if="activeName === '帖子' && loadStatus" :UserData="props.UserData" />
      <FollowForum v-if="activeName === '关注的吧' && loadStatus" :UserData="props.UserData" />
    </el-main>
  </el-container>
  <!--<HelloWorld msg="Vite + Vue" />-->
</template>

<style scoped>
#main {
  z-index: 1000;
  width: 100%;
  height: 100%;
}

.big-text {
  font-weight: 700
}

.top-container {
  width: -webkit-fill-available;
  padding: 15px;
  padding-bottom: 0;
}

.user-info-bg {
  width: 100%;
  height: 100px;
}

.user-info-bg-main {
  width: 100%;
  height: 160px;
  position: absolute;
  background: url(https://tb2.bdstatic.com/tb/mobile/suser/img/home_card_back_6cdfca5.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}

.user-avatar-top-background {
  position: absolute;
  width: 100%;
  height: 40%;
  padding: 0;
  margin: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: #ffffff;
  transform: translateY(100%);
}
</style>

<style>
.user-info-tabs>.el-tabs__header {
  margin: 0 0 5px;
}

.pops-ip-location-help {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  text-align: center;
  color: #7558FE;
}

span[data-sex="1"] {
  color: #37B8D5;
}

span[data-sex="2"] {
  color: #FF8787;
}
</style>
