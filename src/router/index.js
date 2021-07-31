import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/transactions/Index.vue'
import Dashboard from '../views/Dashboard.vue'
import Createtransactions from '../views/transactions/Createtransactions.vue'
import Edittransactions from '../views/transactions/Edittransactions.vue'
import Detailtransactions from '../views/transactions/Detailtransactions.vue'
import Notes from '../views/notes/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/createtransactions',
    name: 'Createtransactions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createtransactions
  },
  {
    path: '/edittransactions/:id',
    name: 'Edittransactions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edittransactions
  },
  {
    path: '/detailtransactions/:id',
    name: 'Detailtransactions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailtransactions
  },
  {
    path: '/notes',
    name: 'notes.edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Notes
    
  }
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router