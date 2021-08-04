<template>
  <div class="login-pane">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user"></i> 账号登录</span>
        </template>
        <login-account ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane label="消息中心">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="operate">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="info">忘记密码</el-link>
    </div>
    <el-button class="submit" size="small" type="primary" @click="sumbit">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()

    const sumbit = () => {
      loginAccountRef.value?.validate(isKeepPassword.value)
    }

    return {
      isKeepPassword,
      loginAccountRef,
      sumbit
    }
  }
})
</script>

<style lang="less" scoped>
.login-pane {
  width: 320px;
  text-align: center;

  .title {
    font-size: 25px;
  }

  .operate {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .submit {
    width: 100%;
    margin-top: 8px;
  }
}
</style>
