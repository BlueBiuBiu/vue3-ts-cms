<template>
  <div class="form-modal">
    <el-dialog title="提示" v-model="dialogVisible" width="30%" center destroy-on-close>
      <sky-form v-bind="formModalConfig" v-model="formModalData"></sky-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleOkClick">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { useStore } from "vuex"
import SkyForm from "@/base-ui/form/src/form.vue"

export default defineComponent({
  props: {
    formModalConfig: {
      type: Object,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    defaultFormValue: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      default: ""
    }
  },
  components: {
    SkyForm
  },
  setup(props) {
    const store = useStore()
    const dialogVisible = ref(false)
    const formModalData = ref<any>({})

    watch(
      () => props.defaultFormValue,
      (newVal) => {
        for (const item of props.formModalConfig.formItems) {
          if (item.field === "password") {
            if (Object.keys(newVal).length) {
              item.isHidden = true
            } else {
              item.isHidden = false
            }
          }
          formModalData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )

    const handleOkClick = () => {
      if (Object.keys(props.defaultFormValue).length) {
        dialogVisible.value = false
        store.dispatch("system/editDataAction", {
          pageName: props.pageName,
          newData: { ...formModalData.value, ...props.otherInfo },
          id: props.defaultFormValue.id
        })
      } else {
        dialogVisible.value = false
        store.dispatch("system/createDataAction", {
          pageName: props.pageName,
          newData: { ...formModalData.value, ...props.otherInfo }
        })
      }
    }

    return {
      dialogVisible,
      formModalData,
      handleOkClick
    }
  }
})
</script>

<style lang="less" scoped></style>
