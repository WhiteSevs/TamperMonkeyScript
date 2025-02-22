<template>
    <el-skeleton v-for="i in 3" style="background-color: #ffffff;" animated>
        <template #template>
            <div style=" padding: 10px;">
                <div
                    style="display: flex;align-items: center;justify-items: space-between;justify-content: space-between;">
                    <el-skeleton-item variant="text" style="width: calc( 50% - 5px );height: 35px" />
                    <el-skeleton-item variant="text" style="width: calc( 50% - 5px );height: 35px" />
                </div>
            </div>
        </template>
    </el-skeleton>
</template>

<style scoped></style>