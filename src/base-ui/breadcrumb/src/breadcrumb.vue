<template>
  <div class="">
    <el-breadcrumb separator="/">
      <template v-for="breadcrumbMenu in breadcrumbMenus" :key="breadcrumbMenu.path">
        <el-breadcrumb-item :to="{ path: breadcrumbMenus.path }">
          {{ breadcrumbMenu.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { IBreadcrumb } from "../types"

export default defineComponent({
  props: {
    breadcrumbMenus: {
      type: Array as PropType<IBreadcrumb>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>
