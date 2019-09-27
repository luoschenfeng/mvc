import Layout from '@/pages/views/layout/layout-page.vue'
import crewsManagement from './crews-management'

export default {
  path: 'systemManagement',
  name: 'systemManagement',
  component: Layout,
  redirect: 'crewsManagement',
  meta: { title: 'systemManagement.index', icon: 'icon-systemManagement' },
  children: [
    crewsManagement
  ]
}