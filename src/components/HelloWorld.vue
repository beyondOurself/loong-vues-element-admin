<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

import variables from "@/styles/variables.module.scss";
  console.log(variables.bgColor)  

</script>

<template>
  <div class="text-red"> 愚蠢的地球人 </div>
  <div class="box">
     111
  </div>

   <div style="width:100px;height:100px" :style="{ 'background-color': variables.bgColor }" />

  <div>
    <el-button type="success"><svg-icon icon-class="message"/>Success</el-button>
    <el-button type="info"><i-ep-InfoFilled />Info</el-button>
    <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
    <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
  </div>
</template>

<style scoped lang="scss">
.box {  

   width: 100px;
   height: 100px;
   background-color: $bg-color;

}

</style>
