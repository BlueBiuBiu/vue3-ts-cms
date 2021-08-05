<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="changeFold"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  emits: ["collapse"],
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
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
