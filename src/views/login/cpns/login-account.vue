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
import { useStore } from "vuex"

import { defineComponent, reactive, ref } from "vue"
import { ElForm } from "element-plus"
import { rules } from "../config/login-account"
import LocalCache from "@/utils/cache"

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: LocalCache.getCache("name") ?? "",
      password: LocalCache.getCache("password") ?? ""
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const validate = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码
          if (isKeepPassword) {
            //本地缓存
            LocalCache.setCache("name", account.name)
            LocalCache.setCache("password", account.password)
          } else {
            LocalCache.deleteCache("name")
            LocalCache.deleteCache("password")
          }

          // 2.开始进行登录验证
          store.dispatch("login/accountLoginAction", { ...account })
        }
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
