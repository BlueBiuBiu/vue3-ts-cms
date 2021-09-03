<template>
  <div class="base-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <div class="text item">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps<{
  title?: string
}>()
</script>

<style lang="less" scoped>
.base-card {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 100%;
  }
}
</style>
