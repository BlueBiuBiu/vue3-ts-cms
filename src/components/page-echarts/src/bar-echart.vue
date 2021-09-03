<template>
  <div class="pie-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store"
import BaseEchart from "@/base-ui/echart"
import * as echarts from "echarts"

const store = useStore()

const data = store.state.dashboardModule.categoryGoodsFavor
const xLabel: string[] = []
const values: any[] = []
for (const item of data) {
  xLabel.push(item.name)
  values.push(item.goodsFavor)
}

const option = computed(() => {
  return {
    xAxis: {
      data: xLabel,
      axisLabel: {
        inside: true,
        textStyle: {
          color: "#fff"
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: "#999"
        }
      }
    },
    dataZoom: [
      {
        type: "inside"
      }
    ],
    series: [
      {
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" }
            ])
          }
        },
        data: values
      }
    ]
  }
})
</script>

<style scoped></style>
