import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import Sreamsview from '../views/StreamsView.vue'
import Detailview from '../views/DetailView.vue'
import Profileview from '../views/ProfileView.vue'
import Browseview from '../views/BrowseView.vue'

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView
  },
  {
    path: '/Browse',
    name: 'Browseview',
     component:Browseview
  },
  {
    path: '/Detail',
    name: 'Profileview',
     component:Profileview
  }, {
    path: '/Profile',
    name: 'Detailview',
     component:Detailview
  }, {
    path: '/Streams',
    name: 'Sreamsview ',
     component:Sreamsview 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
