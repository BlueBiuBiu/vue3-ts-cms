<template>
  <div class="login-phone">
    <el-form :model="phone" status-icon ref="ruleForm" :rules="rules" label-width="70px">
      <el-form-item label="手机号" prop="num">
        <el-input v-model.number="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from "element-plus"
import { defineComponent, reactive, ref } from "vue"
import { rules } from "../config/login-phone"

export default defineComponent({
  setup() {
    const phone = reactive({
      num: null,
      code: ""
    })

    const ruleForm = ref<InstanceType<typeof ElForm>>()

    const validate = () => {
      ruleForm.value?.validate((valid) => {
        console.log(valid)
      })
    }

    return {
      phone,
      rules,
      ruleForm,
      validate
    }
  }
})
</script>

<style lang="less" scoped>
.login-phone {
  .code {
    display: flex;

    .code-btn {
      margin-left: 8px;
    }
  }
}
</style>
