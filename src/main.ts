
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


createApp(App).use(createPinia()).mount('#app')
