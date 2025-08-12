<script setup lang="ts">
defineOptions({
  name: "",
});
const props = defineProps({});

import { useCounterStore } from "@/store/counter";
const counterStore = useCounterStore();
</script>
<template>
  <div class="">
    <h1 class="text-3xl">vue3-element-admin-父组件</h1>
    <el-button type="primary" @click="counterStore.increment">count++</el-button>
  </div>
</template>
<style lang="scss" scoped></style>
