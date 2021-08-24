<template>
  <div class="page-content">
    <sky-table :tableData="dataList" :tablePropConfig="tablePropConfig">
      <template #header>
        <div class="table-header">
          <el-button v-if="isCreate" size="small" type="primary" @click="handleBtnCreate"
            >新建用户</el-button
          >
        </div>
      </template>
      <template #createAt="row">
        {{ $filters.format(row.row.createAt) }}
      </template>
      <template #updateAt="row">
        {{ $filters.format(row.row.updateAt) }}
      </template>
      <template #operate="row">
        <el-button v-if="isUpdate" size="small" type="text" @click="handleBtnEdit(row)"
          >编辑</el-button
        >
        <el-button v-if="isDelete" size="small" type="text" @click="handleBtnDel(row)"
          >删除</el-button
        >
      </template>
      <template v-for="item in customPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope"></slot>
        </template>
      </template>
      <template #footer>
        <slot name="footer">
          <div class="footer">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page.currentPage"
              :page-sizes="[10, 20, 30]"
              :page-size="page.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="dataListCount"
            >
            </el-pagination>
          </div>
        </slot>
      </template>
    </sky-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue"
import { useStore } from "@/store"
import { usePermisstions } from "@/hooks/usePermisstions"

import SkyTable from "@/base-ui/table"

export default defineComponent({
  components: {
    SkyTable
  },
  props: {
    tablePropConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ["createBtnClick", "editBtnClick", "delBtnClick"],
  setup(props, { emit }) {
    const store = useStore()
    const page = ref({ pageSize: 10, currentPage: 1 })

    const isCreate = usePermisstions(props.pageName, "create")
    const isUpdate = usePermisstions(props.pageName, "update")
    const isDelete = usePermisstions(props.pageName, "delete")
    const isQuery = usePermisstions(props.pageName, "query")

    // 获取父组件动态插槽名称
    const customPropSlots = props.tablePropConfig?.ITableProps.filter((item: any) => {
      if (item.slotName === "createAt") return false
      if (item.slotName === "updateAt") return false
      if (item.slotName === "operate") return false
      return true
    })

    // 获取页面数据
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (page.value.currentPage - 1) * page.value.pageSize,
          size: page.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()

    // 分页控制处理
    const dataList = computed(() => store.getters["system/pageList"](props.pageName))
    const dataListCount = computed(() => store.getters["system/pageListCount"](props.pageName))

    const handleSizeChange = (val: any) => {
      page.value.pageSize = val
    }
    const handleCurrentChange = (val: any) => {
      page.value.currentPage = val
    }

    watch(page, () => getPageData(), {
      deep: true
    })

    // 操作
    const handleBtnCreate = () => {
      emit("createBtnClick")
    }

    const handleBtnEdit = (row: any) => {
      emit("editBtnClick", row.row)
    }

    const handleBtnDel = (row: any) => {
      store.dispatch("system/delDataAction", {
        pageName: props.pageName,
        id: row.row.id
      })
    }

    return {
      getPageData,
      dataList,
      dataListCount,
      page,
      customPropSlots,
      handleSizeChange,
      handleCurrentChange,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      handleBtnCreate,
      handleBtnEdit,
      handleBtnDel
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  .table-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
  }
}
</style>
