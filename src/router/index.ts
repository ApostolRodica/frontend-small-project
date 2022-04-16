import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SigninView from '../views/SigninView.vue'
import SignupView from '../views/SignupView.vue'
import TodosView from '../views/TodosView.vue'
import AddTodoView from '../views/AddTodoView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
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
