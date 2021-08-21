<template>
  <div class="goods">
    <page-content :tablePropConfig="tablePropConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.row.imgUrl"
          :preview-src-list="[scope.row.row.imgUrl]"
        >
        </el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageContent from "@/components/page-content"
import { tablePropConfig } from "./config"

export default defineComponent({
  name: "goods",
  components: {
    PageContent
  },
  setup() {
    return {
      tablePropConfig
    }
  }
})
</script>

<style scoped></style>
