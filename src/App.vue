<!-- src/App.vue -->
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import { useAppStore } from '@/store/modules/app';
const appStore = useAppStore();
</script>

<template>
  <el-config-provider :locale="appStore.locale" >
    <router-view />
  </el-config-provider>
</template>

