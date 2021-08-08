<template>
  <div class="user">
    <sky-form v-bind="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { searchFormConfig } from "./config"
import SkyForm from "@/base-ui/form"

export default defineComponent({
  name: "user",
  components: {
    SkyForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
