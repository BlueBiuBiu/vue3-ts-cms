<template>
  <div class="table">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-if="tablePropConfig.showSelection"
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="tablePropConfig.showIndex"
        type="index"
        label="序号"
        align="center"
      ></el-table-column>
      <template v-for="config in tablePropConfig.ITableProps" :key="config">
        <el-table-column v-bind="config">
          <template #default="scope">
            <slot :name="config.slotName" :row="scope.row">
              {{ scope.row[config.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tablePropConfig: {
      type: Object,
      require: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.table {
  background: #fff;
}
</style>
