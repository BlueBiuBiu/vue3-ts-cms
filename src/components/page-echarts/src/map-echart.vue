<template>
  <div class="pie-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "@/store"
import BaseEchart from "@/base-ui/echart"
import { convertData } from "@/base-ui/echart/utils/convert-data"

const store = useStore()

const data = store.state.dashboardModule.addressGoodsSale
const addressGoodsSale = data.map((item) => {
  return { name: item.address, value: item.count }
})

const option = computed(() => {
  return {
    backgroundColor: "#fff",
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        return params.name + " : " + params.value[2]
      }
    },
    legend: {
      orient: "vertical",
      right: 20,
      top: 10,
      textStyle: {
        color: "#fff"
      }
    },
    visualMap: {
      min: 0,
      max: 200,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ["高", "低"],
      inRange: {
        color: ["rgb(70, 240, 252)", "rgb(250, 220, 46)", "rgb(245, 38, 186)"]
      },
      textStyle: {
        color: "#fff"
      }
    },
    geo: {
      map: "china",
      roam: "scale",
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: "rgb(19, 91, 153)",
          borderColor: "rgb(9, 54, 95)"
        },
        emphasis: {
          areaColor: "rgb(10, 105, 187)"
        }
      }
    },
    series: [
      {
        name: "泵机数",
        type: "scatter",
        coordinateSystem: "geo",
        data: convertData(addressGoodsSale),
        symbolSize: 12,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            borderColor: "#fff",
            borderWidth: 1
          }
        }
      },
      {
        type: "map",
        map: "china",
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  }
})
</script>

<style scoped></style>
