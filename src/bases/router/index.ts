import Vue from 'vue'
import Router from 'vue-router'
import constantRouter from '@/pages/common/router/constant-router'
import asyncRouter from '@/pages/common/router/async-router/'

Vue.use(Router)
export const asyncRouterMap = asyncRouter
export const constantRouterMap = constantRouter

export default new Router({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: constantRouter
})
