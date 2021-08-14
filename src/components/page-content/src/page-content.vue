<template>
  <div class="page-content">
    <sky-table :tableData="userList" :tablePropConfig="tablePropConfig">
      <template #header>
        <slot name="header"></slot>
      </template>
      <template #enable="row">
        <el-tag v-if="row.row.enable" type="success">启用</el-tag>
        <el-tag v-else type="danger">禁用</el-tag>
      </template>
      <template #createAt="row">
        {{ $filters.format(row.row.createAt) }}
      </template>
      <template #updateAt="row">
        {{ $filters.format(row.row.updateAt) }}
      </template>
      <template #operate>
        <el-button size="small" type="text">编辑</el-button>
        <el-button size="small" type="text">删除</el-button>
      </template>
      <template #footer>
        <slot name="footer">
          <div class="footer">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            >
            </el-pagination>
          </div>
        </slot>
      </template>
    </sky-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useStore } from "@/store"

import SkyTable from "@/base-ui/table"

export default defineComponent({
  components: {
    SkyTable
  },
  props: {
    tablePropConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch("system/getPageListAction", {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = store.state.system.userList
    const userListCount = store.state.system.userListCount
    return {
      userList
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
  }
}
</style>
