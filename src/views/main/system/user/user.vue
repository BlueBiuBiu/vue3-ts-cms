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
          <el-button>重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </page-search>
    <sky-table :tableData="userList" :tablePropConfig="tablePropConfig">
      <template #enable="row">
        <el-tag v-if="row.row.enable" type="success">启用</el-tag>
        <el-tag v-else type="danger">禁用</el-tag>
      </template>
    </sky-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { searchFormConfig, tablePropConfig } from "./config"
import { useStore } from "@/store"
import PageSearch from "@/components/page-search"
import SkyTable from "@/base-ui/table"

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    SkyTable
  },
  setup() {
    const store = useStore()
    store.dispatch("system/getUserListAction", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = store.state.system.userList
    const userListCount = store.state.system.userListCount
    return {
      searchFormConfig,
      tablePropConfig,
      userList
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
}
</style>
