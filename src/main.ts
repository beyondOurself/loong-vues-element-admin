
import { createApp } from 'vue'
import App from './App.vue'
// ---> S pinia <---
import { createPinia } from "pinia";
// ---> E pinia <---

import './style.css'
// ---> S SVG 图标 <---
import 'virtual:svg-icons-register';
// ---> E SVG 图标 <---
// ---> S unocss <---
import 'uno.css'
// ---> E unocss <---
// ---> S 暗黑模式 <---
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/dark.scss';
// ---> E 暗黑模式 <---

// ---> S router 路由 <---
import router from "@/router";
// ---> E router 路由 <---
// ---> S 指令 <---
import { setupDirective } from '@/directive';

// ---> E 指令 <---
// ---> S 国际化 <---
import i18n from '@/lang/index';
// ---> E 国际化 <---



const app = createApp(App)
// 全局注册 自定义指令(directive)
setupDirective(app);

app.use(router).use(createPinia()).use(i18n).mount('#app')
