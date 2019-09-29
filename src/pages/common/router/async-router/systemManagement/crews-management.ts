export default {
  path: 'crewsManagement',
  name: 'crewsManagement',
  component: () => import('@/pages/views/systemManagement/crewsManagement/index.vue'),
  redirect: { name: 'crews' },
  roleId: 1,
  meta: { title: 'systemManagement.crewsManagement', icon: 'icon-setting' },
  children: [
    {
      path: 'crews',
      name: 'crews',
      component: () => import('@/pages/views/systemManagement/crewsManagement/view/list.vue'),
      roleId: 1,
      meta: { title: 'systemManagement.crewsManagement', icon: 'icon-setting' },
    }
  ]
}