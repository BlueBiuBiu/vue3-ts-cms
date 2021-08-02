<template>
  <div class="login-phone">
    <el-form :model="phone" status-icon ref="ruleForm" label-width="70px" class="demo-ruleForm">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
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
import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
    const phone = reactive({
      num: "",
      code: ""
    })

    return {
      phone
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
