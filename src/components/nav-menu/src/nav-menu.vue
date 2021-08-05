<template>
  <div class="nav-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="menu in userMenus" :key="menu.id">
        <el-submenu v-if="menu.type === 1" :index="menu.id + ''">
          <template #title>
            <i :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </template>
          <template v-for="submenu in menu.children" :key="submenu.id">
            <template v-if="submenu.type === 2">
              <el-menu-item :index="submenu.id + ''">
                <i :class="submenu.icon"></i>
                <span>{{ submenu.name }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-submenu>
        <el-submenu v-else>
          <el-menu-item :index="menu.id + ''">
            <i :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
// import { useStore } from "vuex"
import { useStore } from "@/store"

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    return {
      userMenus
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  .el-menu {
    border-right: none;
  }
  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
  .el-submenu {
    background-color: #001529;

    .el-menu.item {
      background-color: #0c2135;

      &:hover {
        color: #fff;
      }
    }
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
</style>
