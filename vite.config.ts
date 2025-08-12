import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { ConfigEnv, UserConfig, loadEnv } from 'vite';

// ---> S 自动导入 <---
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// ---> E 自动导入 <---

// ---> S element plus <---
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// ---> E element plus <---

// ---> S 整合图标 <---
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// ---> E 整合图标 <---

// ---> S unocss <---
import UnoCSS from 'unocss/vite'
// ---> E unocss <---



const pathSrc = path.resolve(__dirname, 'src')

// https://vite.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());

  return {

    resolve: {
      // ---> S 别名 <---

      alias: {
        "@": pathSrc
      },
      // ---> E 别名 <---
      // ---> S element plus  <---


    },
    // ---> S 配置SCSS <---

    css: {
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`,
        },
      },
    },
    // ---> E 配置SCSS <---

    // ---> S 反向代理 <---

    server: {

      host: '0.0.0.0',
      port: +env.VITE_APP_PORT,
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]:{
          target: 'http://vapi.youlai.tech',
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        }
      }
    },

    // ---> E 反向代理 <---

    plugins: [vue(),
    // ---> S unocss <---
    UnoCSS({ /* options */ }),
    // ---> E unocss <--- 
    // ---> S 自动导入 <---
    AutoImport({

      // ---> S element plus   <---
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({}),
      ],
      vueTemplate: true, // 是否在 vue 模板中自动导入

      // ---> E element plus   <---

      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"],
      eslintrc: {
        enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false 
        filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
      },
      dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径
    }),
    Components({

      // ---> S element plus   <---
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"] // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
        }),
      ],

      // ---> E element plus   <---

      dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
    }),
    // ---> E 自动导入 <---  
    // ---> S element plus  <---
    Icons({
      // 自动安装图标库
      autoInstall: true,
    }),
    // ---> E element plus  <---
    // ---> S 整合SVG图标 <---
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    })
      // ---> E 整合SVG图标 <---

    ],


  }

}
