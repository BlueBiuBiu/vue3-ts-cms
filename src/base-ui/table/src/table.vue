<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%">
      <template v-for="config in tablePropConfig" :key="config">
        <el-table-column v-bind="config">
          <template #default="scope">
            <slot :name="config.slotName" :row="scope.row">
              {{ scope.row[config.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
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
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.table {
}
</style>
