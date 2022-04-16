<template>
  <div class="todos">
    <app-header
      :username="username"
    />
    <div class="container page-content">
      <div class='section-title'>
        <h6>/ Tasks</h6>
        <button class="btn btn-sm btn-primary"
          @click="goToCreateTask">
          <span>+ </span>
          <span>Add a new Todo</span>
        </button>
      </div>
      <div class="todos-data">
        <ul class="nav nav-tabs" id="myTodos" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="todos" data-bs-toggle="tab" data-bs-target="#nav-todos" type="button" role="tab" aria-controls="nav-todos" aria-selected="true">
              <span class="d-none d-sm-block">My Todos</span>
              <span class="d-sm-none">Todos</span>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="incompleted" data-bs-toggle="tab" data-bs-target="#nav-incompleted" type="button" role="tab" aria-controls="nav-incompleted" aria-selected="false">
              <span class="d-none d-sm-block">My Incompleted Todos</span>
              <span class="d-sm-none">Incompleted</span>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="completed" data-bs-toggle="tab" data-bs-target="#nav-completed" type="button" role="tab" aria-controls="nav-completed" aria-selected="false">
               <span class="d-none d-sm-block">My Completed Todos</span>
               <span class="d-sm-none">Completed</span>
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTodosContent">
          <div class="tab-pane fade show active" id="nav-todos" role="tabpanel" aria-labelledby="todos">
            <todos-tasks
              v-if="todos?.length"
              :todos="todos"
            />
          </div>
          <div class="tab-pane fade" id="nav-incompleted" role="tabpanel" aria-labelledby="incompleted">
            <todos-tasks
              v-if="getIncompleteTasks(todos)?.length"
              :todos="getIncompleteTasks(todos)"
            />
          </div>
          <div class="tab-pane fade" id="nav-completed" role="tabpanel" aria-labelledby="completed">
            <todos-tasks
              v-if="getCompletedTasks(todos)?.length"
              :todos="getCompletedTasks(todos)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import TodosTasks from '@/components/TodosTasks.vue'
import moment from 'moment'

export default defineComponent({
  name: 'TodosView',
  components: {
    AppHeader,
    TodosTasks
  },
  props: { username: String },
  data () {
    return {
      todos: [
        {
          title: 'First task',
          status: 'pending',
          due: '07/15/2022'
        },
        {
          title: 'Second task',
          status: 'completed',
          due: '08/06/2022'
        },
        {
          title: 'Third task',
          status: 'incomplete',
          due: '06/21/2022'
        },
        {
          title: '4th task',
          status: 'ready',
          due: '05/18/2022'
        },
        {
          title: '5th task',
          status: 'cancelled',
          due: '05/27/2022'
        },
        {
          title: 'Latest task',
          status: 'completed',
          due: '05/11/2022'
        }
      ]
    }
  },
  mounted () {
    const storedTodos = JSON.parse(localStorage.getItem('storedTodos') || '[]')
    if (storedTodos?.length) {
      storedTodos.map(todo => {
        todo.due = moment(new Date(todo.due)).format('L')
        return this.todos.push(todo)
      })
    }
  },
  methods: {
    goToCreateTask () {
      this.$router.push({ name: 'addTodos', params: { username: this.username } })
    },
    getIncompleteTasks (tasks) {
      return tasks.filter(t => t.status !== 'completed')
    },
    getCompletedTasks (tasks) {
      return tasks.filter(t => t.status === 'completed')
    }
  }
})
</script>

<style lang="stylus">
main-color = #7244d8
.todos
  .page-content
    padding 0 1rem 1rem 1rem
    background-color #fafafa
    margin-top 1rem
    .section-title
      padding 0.3rem
      display flex
      align-items center
      justify-content space-between
      h6
        margin-bottom 0
        font-weight 600
      .btn-primary
        display flex
        align-items center
        margin 0.5rem 0
        span
            margin-right 0.3rem
  .todos-data
    background-color #fff
    padding 1rem
    .nav-tabs
      border-bottom 1px solid rgba(160, 199, 75, 0.5)
      display flex
      justify-content flex-end
      li
        border none
        button
          color #90918f
          border none
          border-radius 0
          &.active, &:hover
            color #000
            border-bottom 2px solid #a0c74b
    .tab-content
      display block
      .tab-pane
        padding 0.5rem
@media (max-width: 768px)
  .todos
    .page-content
      padding 1.5rem
      margin-top 0
</style>
