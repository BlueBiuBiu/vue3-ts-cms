<template>
  <div class="base-echart">
    <div ref="echartRef" :style="{ width, height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue"
import * as echarts from "echarts"

import chinaMapData from "../data/china.json"
echarts.registerMap("china", chinaMapData)

const echartRef = ref<HTMLElement>()

const props = withDefaults(
  defineProps<{
    option: echarts.EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: "100%",
    height: "360px"
  }
)

onMounted(() => {
  const myChart = echarts.init(echartRef.value!)
  window.addEventListener("resize", () => {
    myChart.resize()
  })
  watchEffect(() => {
    myChart.setOption(props.option)
  })
})
</script>

<style scoped></style>
