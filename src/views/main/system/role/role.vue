<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :tablePropConfig="tablePropConfig"
      pageName="role"
      class="page-content"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import { searchFormConfig, tablePropConfig } from "./config"

export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    PageContent
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
.role {
  .page-content {
    border-top: 20px solid #f0f2f5;
  }
}
</style>
