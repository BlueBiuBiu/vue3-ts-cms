<template>
  <div class="user-info">
    <sky-breamcrumb :breadcrumbMenus="breadcrumbMenus" />
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import SkyBreamcrumb from "@/base-ui/breadcrumb"
import { PathToBreadcrumbMenus } from "@/utils/map-menus"

export default defineComponent({
  components: {
    SkyBreamcrumb
  },
  setup() {
    const store = useStore()
    const route = useRoute()

    const breadcrumbMenus = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return PathToBreadcrumbMenus(userMenus, currentPath)
    })

    return {
      breadcrumbMenus
    }
  }
})
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-left: 5px;

  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
