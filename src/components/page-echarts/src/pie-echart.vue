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

const data = store.state.dashboardModule.categoryGoodsCount
const categoryGoodsCount = data.map((item) => {
  return { name: item.name, value: item.goodsCount }
})
// console.log(categoryGoodsCount)

const option = computed(() => {
  return {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "horizontal",
      left: "left"
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        data: categoryGoodsCount,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
