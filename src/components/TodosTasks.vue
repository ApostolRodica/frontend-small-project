<template>
  <div class="todos-tasks">
    <div v-for="task in todos" :key="task" class="task">
      <div class="task-info">
        <span>{{ task.title }}</span>
        <span
          class="badge"
          v-bind:class="{
            'bg-success' : task.status == 'ready',
            'bg-secondary' : task.status == 'completed',
            'bg-warning text-dark' : task.status == 'pending',
            'bg-danger' : task.status == 'incompleted'
          }"
        >{{ task.status }}</span>
      </div>
      <div class="due-date">{{ task.due }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodosTasks',
  props: ['todos']
})
</script>

<style lang="stylus">
.todos-tasks
  .task
    border-bottom 1px solid #d2d2d2
    padding 0.5rem 0
    display flex
    justify-content space-between
    align-items center
    &:last-of-type
      border-bottom none
    span
      &:first-of-type
        font-size 1rem
        margin-right 0.5rem
    .due-date
      margin-left 12rem
@media (max-width: 767.98px)
  .todos-tasks
    .task
      .due-date
        margin-left 2rem
</style>
