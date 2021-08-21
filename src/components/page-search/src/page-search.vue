<template>
  <div class="page-search">
    <sky-form v-bind="searchFormConfig" v-model="searchData">
      <template #header>
        <slot name="header"></slot>
      </template>
      <template #footer>
        <div class="operate">
          <el-button size="small" @click="reset">重置</el-button>
          <el-button size="small" type="primary" icon="el-icon-search" @click="search"
            >搜索</el-button
          >
        </div>
      </template>
    </sky-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import SkyForm from "@/base-ui/form"

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    SkyForm
  },
  emits: ["handleReset", "handleQuery"],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig.formItems ?? []
    const formOriginItems: any = {}
    for (const formItem of formItems) {
      formOriginItems[formItem.field] = ""
    }

    const searchData = ref(formOriginItems)

    const reset = () => {
      searchData.value = formOriginItems
      emit("handleReset")
    }

    const search = () => {
      emit("handleQuery", searchData.value)
    }

    return {
      formOriginItems,
      searchData,
      reset,
      search
    }
  }
})
</script>

<style lang="less" scoped>
.page-search {
  text-align: right;
}
</style>
