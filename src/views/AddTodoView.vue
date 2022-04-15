<template>
  <div class="add-todo">
    <app-header
      :username="username"
    />
    <div class="container page-content">
      <div class='section-title'>
        <h6>/ Add a new Todo</h6>
        <button type="submit" @click="saveTodo" class="btn btn-primary btn-sm">Save</button>
      </div>
      <form>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <label for="title">Title</label>
            <input v-model="todo.title" type="text" class="form-control" placeholder="My Todo" required>
          </div>
          <div class="w-100"></div>
          <div class="col-md-3 col-sm-12">
            <label for="date">Due on</label>
            <datepicker v-model="todo.due" />
          </div>
          <div class="col-md-3 col-sm-12">
            <label for="status">Status</label>
            <select v-model="todo.status">
              <option value="pending" selected>Pending</option>
              <option value="ready">Ready</option>
            </select>
          </div>
        </div>
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
  props: ['username'],
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
      this.$router.push({ name: 'todos', params: { username: this.username } })
    }
  }
})
</script>

<style lang="stylus">
.add-todo
  .page-content
    padding 1rem
    background-color #fafafa
    margin-top 1rem
    .section-title
      padding 0.3rem
      display flex
      justify-content space-between
      align-items center
      h6
        margin-bottom 0
        font-weight 600
      button
        min-width 6rem
        text-align center
        margin-bottom 0.5rem
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
        min-height 2.4rem
        border-color #ddd
        border-radius 4px
        padding-left 0.5rem
        padding-right 0.5rem
@media (max-width: 767.98px)
  .add-todo
    form
      select
        min-height 2rem
</style>
