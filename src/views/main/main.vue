<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <div class="logo">
          <img src="~@/assets/img/logo.svg" alt="" />
          <span v-if="!isFold" class="title">Vue3+TS</span>
        </div>
        <nav-menu :collapse="isFold" />
      </el-aside>
      <el-container class="content">
        <el-header>
          <nav-header @collapse="collapse" />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import NavMenu from "@/components/nav-menu"
import NavHeader from "@/components/nav-header"

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isFold = ref(false)
    const collapse = (isCollapse: boolean) => {
      isFold.value = isCollapse
    }
    return {
      isFold,
      collapse
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    align-items: center;

    img {
      width: 48px;
      height: 100%;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }

  .main-content,
  content {
    height: 100%;
  }
  .el-header {
    color: #333;
    height: 48px;
    line-height: 60px;
    z-index: 9;
  }

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
    color: #333;
    height: calc(100% - 48px);
  }
}
</style>
