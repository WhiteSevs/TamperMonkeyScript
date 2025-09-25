<template>
  <el-skeleton style="background-color: #ffffff" animated>
    <template #template>
      <div style="padding: 10px">
        <el-row style="display: flex; align-items: center">
          <el-col :span="4">
            <el-skeleton-item variant="image" style="width: 35px; height: 35px; border-radius: 50%" />
          </el-col>
          <el-col :span="16">
            <div>
              <el-skeleton-item variant="text" style="width: 100px; height: 16px" />
              <el-skeleton-item variant="text" style="width: 100%; height: 12px" />
            </div>
          </el-col>
          <el-col :span="4">
            <el-skeleton-item variant="text" style="width: 35px; height: 20px; border-radius: 16px; float: right" />
          </el-col>
        </el-row>
      </div>
    </template>
  </el-skeleton>
</template>

<script setup lang="ts"></script>

<style scoped></style>
