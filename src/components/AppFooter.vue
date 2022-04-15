<template>
  <footer>
    <div class="container">
      <p>Copyright &copy; {{ year }} </p>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>

<style lang="stylus">
footer
  padding-bottom 1rem
  text-align left
  width 100%
  .container
    border-top 1px solid #d2d2d2
    padding-top 1rem
  p
    margin-bottom 0
    color #a2a2a2
    font-size 0.9rem
</style>
