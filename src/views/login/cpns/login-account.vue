<template>
  <div class="login-acount">
    <el-form
      :model="account"
      status-icon
      :rules="rules"
      ref="formRef"
      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { ElForm } from "element-plus"
import { rules } from "../config/login-account"

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: ""
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const validate = () => {
      formRef.value?.validate((valid) => {
        console.log(valid)
      })
    }

    return {
      account,
      rules,
      formRef,
      validate
    }
  }
})
</script>

<style lang="less" scoped>
.login-acount {
}
</style>
