// // src/store/modules/permission.ts 
// import { listRoutes } from '@/api/menu';

// export const usePermissionStore = defineStore('permission', () => {
//   const routes = ref<RouteRecordRaw[]>([]);

//   function setRoutes(newRoutes: RouteRecordRaw[]) {
//     routes.value = constantRoutes.concat(newRoutes);
//   }
//   /**
//    * 生成动态路由
//    *
//    * @param roles 用户角色集合
//    * @returns
//    */
//   function generateRoutes(roles: string[]) {
//     return new Promise<RouteRecordRaw[]>((resolve, reject) => {
//       // 接口获取所有路由
//       listRoutes()
//         .then(({ data: asyncRoutes }) => {
//           // 根据角色获取有访问权限的路由
//           const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
//           setRoutes(accessedRoutes);
//           resolve(accessedRoutes);
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
//   }
//   // 导出 store 的动态路由数据 routes 
//   return { routes, setRoutes, generateRoutes };
// });

