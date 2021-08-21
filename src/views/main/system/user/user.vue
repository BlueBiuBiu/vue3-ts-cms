<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @handleReset="handleReset"
      @handleQuery="handleQuery"
    >
      <template #header>
        <div class="title">
          <h1>高级检索</h1>
        </div>
      </template>
    </page-search>
    <page-content
      ref="pageContentRef"
      :tablePropConfig="tablePropConfig"
      pageName="users"
      class="page-content"
    >
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { searchFormConfig, tablePropConfig } from "./config"
import PageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"
import { usePageSearch } from "@/hooks/usePageSearch"

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    pageContent
  },
  setup() {
    const [pageContentRef, handleReset, handleQuery] = usePageSearch()

    return {
      searchFormConfig,
      tablePropConfig,
      pageContentRef,
      handleReset,
      handleQuery
    }
  }
})
</script>

<style scoped lang="less">
.user {
  .title {
    text-align: center;
  }
  .page-content {
    border-top: 20px solid #f0f2f5;
  }
}
</style>
