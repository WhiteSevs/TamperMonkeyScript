<script setup lang="ts">
import { ref } from 'vue';
import { UserInfo } from './data/TiebaHomeData';
import { TiebaRouter } from './router';

const props = defineProps<{
    UserData: UserInfo;
}>();
let sexStr = ref("保密")
if (props.UserData.sex != null) {
    if (props.UserData.sex === 1) {
        sexStr.value = "男";
    } else if (props.UserData.sex === 2) {
        sexStr.value = "女";
    }
}
/**
 * 箭头点击事件
 */
const arrowLeftClickEvent = () => {
    TiebaRouter.router.back();
}
</script>
<template>
    <el-container>
        <el-header class="user-nav">
            <el-row :gutter="24" class="nav-container">
                <el-col :span="4" class="nav-left-arrow-icon">
                    <el-icon :size="20" @click="arrowLeftClickEvent">
                        <ArrowLeft />
                    </el-icon>
                </el-col>
                <el-col :span="16" class="nav-title">基本资料</el-col>
                <el-col :span="4" class="nav-right-space"></el-col>
            </el-row>
        </el-header>
        <el-main>
            <div class="user-avatar">
                <el-avatar :size="100" :src="$props.UserData.avatar" />
            </div>
            <div class="user-info">
                <div class="user-info-item">
                    <el-text type="info" class="user-desc-key">用户名</el-text>
                    <el-text type="info" class="user-end-text">{{ props.UserData.name }}</el-text>
                </div>
                <div class="user-info-item">
                    <el-text type="info" class="user-desc-key">昵称</el-text>
                    <el-text type="info" class="user-end-text">{{ props.UserData.showName }}</el-text>
                </div>
                <div class="user-info-item">
                    <el-text type="info" class="user-desc-key">性别</el-text>
                    <el-text type="info" class="user-end-text">{{ sexStr }}</el-text>
                </div>
                <div class="user-info-item">
                    <el-text type="info" class="user-desc-key">吧龄</el-text>
                    <el-text type="info" class="user-end-text">{{ props.UserData.level }}年</el-text>
                </div>
                <div class="user-info-item">
                    <el-text type="info" class="user-desc-key">id</el-text>
                    <el-text type="info" class="user-end-text">{{ props.UserData.id }}</el-text>
                </div>
                <div class="user-info-item">
                    <el-text type="info" class="user-desc-key">portrait</el-text>
                    <el-text type="info" class="user-end-text">{{ props.UserData.portrait }}</el-text>
                </div>
                <div class="user-info-item">
                    <el-text type="info" class="user-desc-key">tbs</el-text>
                    <el-text type="info" class="user-end-text">{{ props.UserData.tbs }}</el-text>
                </div>
            </div>
        </el-main>
    </el-container>
</template>
<style scoped>
.nav-left-arrow-icon {
    align-content: center;
    padding-left: 0 !important;
}

.nav-title {
    font-weight: 700;
    text-align: center;
    padding: 10px;
}

.user-avatar {
    text-align: center;
    padding-bottom: 20px;
}

.user-info-item {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
}

.user-desc-key {
    width: 60px;
    display: block;
}

.user-end-text {
    padding: 0px 20px;
}
</style>