<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="7">
        <base-card title="分类商品数量(饼图)">
          <pie-echart></pie-echart>
        </base-card>
      </el-col>
      <el-col :span="10">
        <base-card title="不同城市商品销量">
          <map-echart></map-echart>
        </base-card>
      </el-col>
      <el-col :span="7">
        <base-card title="不同城市商品销量">
          <rose-echart></rose-echart>
        </base-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <base-card title="分类商品的销量">
          <line-echart></line-echart>
        </base-card>
      </el-col>
      <el-col :span="12">
        <base-card title="分类商品的收藏">
          <bar-echart></bar-echart>
        </base-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import BaseCard from "@/base-ui/card"
import { PieEchart, BarEchart, LineEchart, MapEchart, RoseEchart } from "@/components/page-echarts"
import { useStore } from "vuex"

export default defineComponent({
  name: "dashboard",
  components: {
    BaseCard,
    PieEchart,
    BarEchart,
    LineEchart,
    MapEchart,
    RoseEchart
  },
  setup() {
    const store = useStore()
    store.dispatch("dashboardModule/getDashboardDataAction")
    return {}
  }
})
</script>

<style scoped></style>
