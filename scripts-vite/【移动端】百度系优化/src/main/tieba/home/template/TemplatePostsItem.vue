<template>
  <el-skeleton class="posts-container-item" animated>
    <template #template>
      <div class="posts-item-avatar-container">
        <el-row style="align-items: center">
          <div class="posts-item-avatar">
            <el-skeleton-item variant="image" style="width: 35px; height: 35px; border-radius: 50%" />
          </div>
          <div class="posts-item-right-user-info">
            <div class="posts-item-user-name">
              <el-skeleton-item variant="text" style="width: 80px; height: 1rem" />
            </div>
            <div class="posts-item-user-other-info">
              <el-skeleton-item variant="text" style="width: 120px; height: 0.8rem" />
            </div>
          </div>
        </el-row>
      </div>
      <div class="posts-item-title"><el-skeleton-item variant="text" style="width: 80%; height: 1rem" /></div>
      <div class="posts-item-content"><el-skeleton-item variant="text" style="width: 100%; height: 50px" /></div>
      <div class="posts-item-forum">
        <el-skeleton-item variant="text" style="width: 100px; height: 30px; border-radius: 20px" />
      </div>
      <div class="posts-item-footer">
        <el-row justify="space-between">
          <el-col :span="6" class="posts-item-footer-icon-container">
            <el-skeleton-item variant="text" style="width: 1rem; height: 1rem; border-radius: 50%" />
          </el-col>
          <el-col :span="6" class="posts-item-footer-icon-container">
            <el-icon>
              <el-skeleton-item variant="text" style="width: 1rem; height: 1rem; border-radius: 50%" />
            </el-icon>
          </el-col>
          <el-col :span="6" class="posts-item-footer-icon-container">
            <el-icon>
              <el-skeleton-item variant="text" style="width: 1rem; height: 1rem; border-radius: 50%" />
            </el-icon>
          </el-col>
        </el-row>
      </div>
    </template>
  </el-skeleton>
</template>

<style scoped>
  .posts-container-item {
    width: -webkit-fill-available;
    width: -moz-available;
  }

  .posts-item-title {
    font-weight: 700;
  }

  .posts-item-title,
  .posts-item-content,
  .posts-item-media-container {
    margin: 10px 0px;
  }

  .posts-item-footer {
    margin: 15px 0px 5px 0px;
  }

  .posts-item-footer .el-col {
    text-align: center;
  }

  .posts-item-footer-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px 6px;
  }

  .posts-item-right-user-info {
    padding: 0px 10px;
  }
</style>
