<template>
  <div class="sky-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle" :label-width="itemLabelWidth">
              <template v-if="item.type === 'input'">
                <el-input
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleChange($event, item.field)"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-else-if="item.type === 'password'">
                <el-input
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleChange($event, item.field)"
                  :placeholder="item.placeholder"
                  show-password
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option"
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datePicker'">
                <el-date-picker
                  style="width: 100%"
                  type="daterange"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, ref, defineComponent, watch } from "vue"
import { IFormItem } from "../types"

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "60px"
    },
    itemLabelWidth: {
      type: String,
      default: "60px"
    },
    colLayout: {
      type: Object,
      default: () => {
        return {
          sm: 24,
          xs: 24,
          md: 12,
          lg: 8,
          xl: 6
        }
      }
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: "0 30px"
      })
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const handleChange = (value: any, field: string) => {
      emit("update:modelValue", { ...props.modelValue, [field]: value })
    }

    return {
      handleChange
    }
  }
})
</script>

<style lang="less" scoped>
.sky-form {
  background: #fff;
  padding: 20px;
}
</style>
