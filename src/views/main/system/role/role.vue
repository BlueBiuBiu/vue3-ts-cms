<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :tablePropConfig="tablePropConfig"
      pageName="role"
      class="page-content"
      @createBtnClick="createBtnClick"
      @editBtnClick="editBtnClick"
    ></page-content>
    <form-modal
      ref="formModalRef"
      pageName="role"
      :otherInfo="otherInfo"
      :formModalConfig="newFormModalConfig"
      :defaultFormValue="defaultFormValue"
    >
      <el-tree
        ref="elTreeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        @check="check"
        :props="{ children: 'children', label: 'name' }"
      >
      </el-tree>
    </form-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue"
import { useStore } from "vuex"
import { menuMapLeafKeys } from "@/utils/map-menus"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import formModal from "@/components/form-modal"
import { searchFormConfig, tablePropConfig, formModalConfig } from "./config"
import { useFormModal } from "@/hooks/useFormModal"
import { ElTree } from "element-plus"

export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    PageContent,
    formModal
  },
  setup() {
    const store = useStore()
    const elTreeRef = ref<InstanceType<typeof ElTree>>()

    const editCb = (item: any) => {
      const leftKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leftKeys, false)
      })
    }
    const [formModalRef, defaultFormValue, createBtnClick, editBtnClick] = useFormModal(
      undefined,
      editCb
    )
    const otherInfo = ref({})

    const newFormModalConfig = computed(() => formModalConfig)
    const menus = computed(() => store.state.entireMenus)
    const check = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
      console.log(otherInfo.value)
    }

    return {
      searchFormConfig,
      tablePropConfig,
      formModalRef,
      defaultFormValue,
      createBtnClick,
      editBtnClick,
      newFormModalConfig,
      menus,
      check,
      otherInfo,
      elTreeRef
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
