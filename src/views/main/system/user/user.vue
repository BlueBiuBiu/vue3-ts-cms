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
      @createBtnClick="createBtnClick"
      @editBtnClick="editBtnClick"
    >
    </page-content>
    <form-modal
      ref="formModalRef"
      pageName="users"
      :formModalConfig="newFormModalConfig"
      :defaultFormValue="defaultFormValue"
    >
    </form-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"
import { searchFormConfig, tablePropConfig, formModalConfig } from "./config"
import PageSearch from "@/components/page-search"
import pageContent from "@/components/page-content"
import formModal from "@/components/form-modal"
import { usePageSearch } from "@/hooks/usePageSearch"
import { useFormModal } from "@/hooks/useFormModal"

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    pageContent,
    formModal
  },
  setup() {
    const store = useStore()

    const [pageContentRef, handleReset, handleQuery] = usePageSearch()
    const [formModalRef, defaultFormValue, createBtnClick, editBtnClick] = useFormModal()

    const newFormModalConfig = computed(() => {
      const departmentItem = formModalConfig.formItems.find(
        (item: any) => item.field === "departmentId"
      )
      departmentItem!.options = store.state.entireDepartment.map((item: any) => ({
        label: item.name,
        value: item.id
      }))
      const roleItem = formModalConfig.formItems.find((item: any) => item.field === "roleId")
      roleItem!.options = store.state.entireRole.map((item: any) => ({
        label: item.name,
        value: item.id
      }))

      return formModalConfig
    })

    return {
      searchFormConfig,
      tablePropConfig,
      newFormModalConfig,
      pageContentRef,
      handleReset,
      handleQuery,
      formModalRef,
      defaultFormValue,
      createBtnClick,
      editBtnClick
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
