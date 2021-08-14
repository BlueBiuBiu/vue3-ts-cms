<template>
  <div class="page-search">
    <sky-form v-bind="searchFormConfig" v-model="formOriginItems">
      <template #header>
        <slot name="header"></slot>
      </template>
      <template #footer>
        <slot name="footer"></slot>
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
  setup(props) {
    const formItems = props.searchFormConfig.formItems ?? []
    const formOriginItems: any = {}
    for (const formItem of formItems) {
      formOriginItems[formItem.field] = ""
    }

    return {
      formOriginItems
    }
  }
})
</script>

<style lang="less" scoped></style>
