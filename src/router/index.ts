import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SigninView from '../views/SigninView.vue'
import TodosView from '../views/TodosView.vue'
import AddTodoView from '../views/AddTodoView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: ['/', '/signin'],
    name: 'signin',
    component: SigninView
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (signup.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignupView.vue')
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodosView,
    props: true
  },
  {
    path: '/todos/add',
    name: 'addTodos',
    component: AddTodoView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
