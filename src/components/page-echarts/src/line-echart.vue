<template>
  <div class="pie-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store"
import BaseEchart from "@/base-ui/echart"

const store = useStore()
const data = store.state.dashboardModule.categoryGoodsSale
const categoryGoodsSale = data.map((item) => {
  return { name: item.name, value: item.goodsCount }
})

const option = computed(() => {
  return {
    xAxis: {
      type: "category",
      boundaryGap: false
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: categoryGoodsSale,
        type: "line",
        areaStyle: {}
      }
    ]
  }
})
</script>

<style scoped></style>
