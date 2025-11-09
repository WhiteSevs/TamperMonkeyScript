<script lang="ts" setup>
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import Posts from "./components/Posts.vue";
  import FollowForum from "./components/FollowForum.vue";
  import { ArrowLeft, QuestionFilled, Plus, Message, CopyDocument, ArrowRight, Check } from "@element-plus/icons-vue";
  import { $, DOMUtils, log, utils } from "@/env";
  import { onBeforeMount, onMounted, reactive, ref, watch } from "vue";
  import { TiebaHomeData, UserInfo } from "./data/TiebaHomeData";
  import { ElMessage, ElMessageBox } from "element-plus";
  import { TiebaRouter } from "./router";
  import Qmsg from "qmsg";

  const props = defineProps<{
    UserData: UserInfo;
  }>();

  let loadStatus = ref(false);
  let activeName = ref("帖子");

  /**
   * 复制id的点击事件
   */
  const copyIdEvent = () => {
    utils.copy(props.UserData.id).then((result) => {
      if (result) {
        Qmsg.success("复制成功");
      } else {
        Qmsg.error("复制失败");
      }
    });
  };

  const changeFollowBtnStatus = new utils.LockFunction(async (maxTime: number = 5000) => {
    let is_like = Boolean(props.UserData.is_like);
    log.info(`关注状态检测：` + is_like);
    await new Promise<boolean>((resolve) => {
      let intervalId = setInterval(() => {
        let current_is_like = false;
        if ($(".j_home_card_request_card:has(.icon_hide)") || $(".userinfo_relation .btn_concern_done")) {
          current_is_like = true;
        }
        props.UserData.is_like = current_is_like;
        if (is_like !== current_is_like) {
          // 状态发生改变
          log.info(`关注状态发生改变，检测完毕：` + current_is_like);
          clearInterval(intervalId);
          clearTimeout(timeId);
          resolve(current_is_like);
        }
      }, 200);
      let timeId = setTimeout(() => {
        // 检测超时
        log.warn(`关注状态检测超时，取消检测`);
        clearInterval(intervalId);
        resolve(is_like);
      }, maxTime);
    });
  });

  const followBtnEvent = () => {
    let $btn =
      $<HTMLAnchorElement>(".j_home_card_request_card:not(:has(.icon_hide))") ||
      $<HTMLAnchorElement>(".userinfo_relation .btn-attention");
    if ($btn) {
      log.info("点击关注按钮");
      $btn.click();
    } else {
      Qmsg.error("未找到页面原始的关注按钮");
      return;
    }
    changeFollowBtnStatus.run();
  };
  const cancelFollowBtnEvent = () => {
    let $btn =
      $<HTMLAnchorElement>(".j_home_card_request_card:has(.icon_hide)") ||
      $<HTMLAnchorElement>(".userinfo_relation .btn_concern_done");
    if ($btn) {
      log.info("点击取消关注按钮");
      $btn.click();
    } else {
      Qmsg.error("未找到页面原始的取消关注按钮");
      return;
    }
    DOMUtils.waitNode<HTMLDivElement>(".dia_wrapper", 10000).then(($ele) => {
      if (!$ele) {
        return;
      }
      DOMUtils.on(
        $ele,
        "click",
        ".dia_btnwrapper a",
        function () {
          changeFollowBtnStatus.run();
        },
        {
          capture: true,
        }
      );
    });
    DOMUtils.waitNode<HTMLDivElement>(".userinfo_relation .btn-attention", 10000).then(($ele) => {
      if (!$ele) {
        return;
      }
      changeFollowBtnStatus.run();
    });
  };

  const messageBtnEvent = () => {
    let $chat = $<HTMLAnchorElement>(".j_home_card_chat") || $<HTMLAnchorElement>(".userinfo_relation .btn_sendmsg");
    if ($chat) {
      log.info("点击私信按钮");
      $chat.click();
    } else {
      Qmsg.error("未找到页面原始的私信按钮页面");
      return;
    }
  };

  const ipHelpEvent = () => {
    ElMessage({
      // @ts-ignore
      showClose: false,
      message: "IP属地以运营商信息为准，如有问题可咨询客服",
      center: true,
      plain: true,
      offset: 0,
      duration: 3500,
      type: "",
      customClass: "pops-ip-location-help",
    });
  };

  const receivedLikesEvent = () => {
    ElMessageBox.confirm(`${props.UserData.showName}共获得吧友${props.UserData.postInfo?.receivedLikes}次点赞`, "", {
      showClose: false,
      showCancelButton: false,
      center: true,
      roundButton: true,
      confirmButtonText: "知道了",
    });
  };

  const aboutUserEvent = function () {
    TiebaRouter.router.push({
      path: "/about",
    });
  };

  const clickFollowEvent = () => {
    TiebaRouter.router.push({
      path: "/follow",
    });
  };
  const clickFansEvent = () => {
    TiebaRouter.router.push({
      path: "/fans",
    });
  };
  watch(
    props.UserData,
    () => {
      if (props.UserData.postInfo?.post) {
        loadStatus.value = true;
      }
    },
    {
      deep: true,
      immediate: true,
    }
  );
</script>

<template>
  <el-container id="main">
    <el-main style="padding: 0">
      <div class="user-info-bg">
        <div class="user-info-bg-main"></div>
      </div>
      <el-row :justify="'center'">
        <el-col>
          <div class="user-avatar-top-background"></div>
          <el-row class="user-info-container" :gutter="20" :align="'bottom'" style="margin: 0px 0px">
            <el-col :span="12" style="padding: 0">
              <el-avatar :src="props.UserData.avatar" :size="90" />
            </el-col>
            <el-col :span="12" style="padding: 0">
              <el-row :justify="'end'" style="flex-wrap: nowrap">
                <el-button
                  class="user-handler-follow-btn"
                  color="#7558FE"
                  round
                  :icon="Plus"
                  v-if="!props.UserData.is_like"
                  @click="followBtnEvent"
                  >关注</el-button
                >
                <el-button
                  color="#7558FE"
                  class="user-handler-cancel-follow-btn"
                  plain
                  round
                  :icon="Check"
                  v-if="props.UserData.is_like"
                  @click="cancelFollowBtnEvent"
                  >取消关注</el-button
                >
                <el-button
                  color="#7558FE"
                  class="user-handler-private-message-btn"
                  :plain="!props.UserData.is_like"
                  round
                  :icon="Message"
                  @click="messageBtnEvent"
                  >私信</el-button
                >
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-space class="top-container" :size="10" direction="vertical" alignment="stretch">
        <!-- 头像 关注 私信 -->
        <!-- 用户名 等级 -->
        <el-row>
          <el-text :size="'large'" :class="'big-text'" style="display: flex; align-items: center">
            {{ props.UserData.showName }}
            <el-avatar
              :size="14"
              v-if="props.UserData.otherData?.PanelUserInfo?.vipInfo?.icon_url"
              :src="props.UserData.otherData?.PanelUserInfo?.vipInfo.icon_url"
              shape="square"
              style="margin: 0px 5px" />
          </el-text>
        </el-row>
        <!-- id 吧龄 IP地址 -->
        <el-row style="color: #909399">
          <span :data-sex="props.UserData.sex">
            {{ props.UserData.sex == 0 ? "保密" : props.UserData.sex == 1 ? "♂" : "♀" }}
          </span>
          <el-divider direction="vertical" border-style="dashed" />
          <el-link :underline="'never'" @click="copyIdEvent">
            ID {{ props.UserData.id }}
            <el-icon>
              <CopyDocument />
            </el-icon>
          </el-link>
          <el-divider direction="vertical" border-style="dashed" />
          <span> 吧龄{{ props.UserData.level }}年 </span>
          <el-divider v-if="utils.isNotNull(props.UserData.ip)" direction="vertical" border-style="dashed" />
          <span v-if="utils.isNotNull(props.UserData.ip)" style="display: flex; align-items: center; text-wrap: nowrap">
            {{ props.UserData.ip?.location }}
            <el-icon @click="ipHelpEvent">
              <QuestionFilled />
            </el-icon>
          </span>
        </el-row>
        <!-- 个性签名 -->
        <el-row :justify="'space-between'" style="color: #909399" @click="aboutUserEvent">
          <div>
            {{
              utils.isNull(props.UserData.personalSignature) ? "该用户还没有填写签名" : props.UserData.personalSignature
            }}
          </div>
          <el-text :type="'info'">
            关于Ta
            <el-icon>
              <ArrowRight />
            </el-icon>
          </el-text>
        </el-row>
        <!-- 获赞 关注 粉丝 -->
        <el-row>
          <el-space :size="25">
            <el-col @click="receivedLikesEvent">
              <el-text :size="'large'" :class="'big-text'" style="margin-right: 0.5rem">{{
                props.UserData.postInfo?.receivedLikes
              }}</el-text>
              <el-text :type="'info'">获赞</el-text>
            </el-col>
            <el-col @click="clickFollowEvent">
              <el-text :size="'large'" :class="'big-text'" style="margin-right: 0.5rem">{{
                props.UserData.postInfo?.follow
              }}</el-text>
              <el-text :type="'info'">关注</el-text>
            </el-col>
            <el-col @click="clickFansEvent">
              <el-text :size="'large'" :class="'big-text'" style="margin-right: 0.5rem">{{
                props.UserData.postInfo?.fans
              }}</el-text>
              <el-text :type="'info'">粉丝</el-text>
            </el-col>
          </el-space>
        </el-row>
        <el-divider style="margin: 0" />
        <!-- 印记 -->
        <el-row :justify="'space-between'" style="align-items: center">
          <div>Ta的印记</div>
          <div>
            <el-avatar :size="20" :src="imprintSrc" v-for="imprintSrc in props.UserData.imprint" />
            <el-icon>
              <ArrowRight />
            </el-icon>
          </div>
        </el-row>
        <el-divider style="margin: 0" />
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
</template>

<style scoped>
  #main {
    z-index: 1000;
    width: 100%;
    height: 100%;
  }

  .big-text {
    font-weight: 700;
  }

  .top-container {
    width: -webkit-fill-available;
    width: -moz-available;
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

  .user-info-container {
    padding: 0px 10px;
  }
</style>
