<template>
  <div class="add-todo">
    <app-header
      :username="username"
    />
    <div class="container page-content">
      <div class='section-title'>
        <h6>/ Add a new Todo</h6>
      </div>
      <form>
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <label for="title">Title</label>
            <input v-model="todo.title" type="text" class="form-control" placeholder="My Todo" required>
          </div>
          <div class="w-100"></div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <label for="date">Due on</label>
            <datepicker v-model="todo.due" />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <label for="status">Status</label>
            <select v-model="todo.status" class="form-control">
              <option value="pending" selected>Pending</option>
              <option value="ready">Ready</option>
            </select>
          </div>
        </div>
        <button type="submit" @click="saveTodo" class="btn btn-primary btn-sm save">Save</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default defineComponent({
  name: 'AddTodoView',
  components: {
    AppHeader,
    Datepicker
  },
  props: { username: String },
  data () {
    return {
      todo: {
        title: null,
        status: 'pending',
        due: ref(new Date())
      }
    }
  },
  methods: {
    saveTodo () {
      if (this.todo.title) {
        const localItems = localStorage.getItem('storedTodos')
        const todos = localItems !== null ? JSON.parse(localItems) : []
        todos.push(this.todo)
        localStorage.setItem('storedTodos', JSON.stringify(todos))
        this.$router.push({ name: 'todos', params: { username: this.username } })
      }
    }
  }
})
</script>

<style lang="stylus">
.add-todo
  .page-content
    position relative
    padding 1rem
    background-color #fafafa
    margin-top 1rem
    .section-title
      padding 0.3rem
      display flex
      justify-content space-between
      align-items center
      h6
        margin-bottom 1rem
        font-weight 600
    button
      min-width 6rem
      text-align center
      margin-bottom 0.5rem
      position absolute
      top 1rem
      right 1rem
    form
      background-color #fff
      padding 1rem
      .col-sm-12
        margin-bottom 1rem
      label
        font-size 0.8rem
        font-weight 600
        color #718c35
      input
        &::placeholder
          font-size 0.8rem
          opacity 0.8
      select
        width 100%
        border-color #ddd
        border-radius 4px
        padding-left 0.5rem
        padding-right 0.5rem
</style>
