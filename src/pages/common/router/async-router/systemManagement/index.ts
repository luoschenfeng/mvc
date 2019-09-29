import LayoutPage from '@/pages/views/layout/layout-page.vue'
import crewsManagement from './crews-management'

export default {
  path: '/systemManagement',
  name: 'systemManagement',
  component: LayoutPage,
  redirect: '/systemManagement/crewsManagement',
  roleId: 1,
  meta: { title: 'systemManagement.index', icon: 'icon-setting', noCache: true },
  children: [
    crewsManagement
  ]
}