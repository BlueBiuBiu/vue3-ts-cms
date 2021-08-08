<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="changeFold"
    ></i>
    <user-info />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import UserInfo from "./cpns/user-info.vue"

export default defineComponent({
  emits: ["collapse"],
  components: {
    UserInfo
  },
  setup(props, { emit }) {
    const isCollapse = ref(false)

    const changeFold = () => {
      isCollapse.value = !isCollapse.value
      emit("collapse", isCollapse.value)
    }

    return {
      isCollapse,
      changeFold
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  height: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
