<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig">
      <template #header>
        <div class="title">
          <h1>高级检索</h1>
        </div>
      </template>
      <template #footer>
        <div class="operate">
          <el-button size="small">重置</el-button>
          <el-button size="small" type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </page-search>
    <page-content :tablePropConfig="tablePropConfig" pageName="users" class="page-content">
      <template #header>
        <div class="table-header">
          <h3>用户数据</h3>
          <el-button size="small" type="primary">新建用户</el-button>
        </div>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { searchFormConfig, tablePropConfig } from "./config"
import { useStore } from "@/store"
import PageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    pageContent
  },
  setup() {
    return {
      searchFormConfig,
      tablePropConfig
    }
  }
})
</script>

<style scoped lang="less">
.user {
  .title {
    text-align: center;
  }
  .operate {
    text-align: right;
  }
  .page-content {
    border-top: 20px solid #f0f2f5;
  }
  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
}
</style>
