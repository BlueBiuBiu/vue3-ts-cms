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

const option = computed(() => {
  return {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "面积模式",
        type: "pie",
        radius: [20, 100],
        labelLine: {
          length: 1
        },
        center: ["55%", "50%"],
        roseType: "area",
        data: categoryGoodsCount
      }
    ]
  }
})
</script>

<style scoped></style>
