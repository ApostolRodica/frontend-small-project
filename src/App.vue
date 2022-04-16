<template>
  <router-view/>
  <app-footer/>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppFooter
  }
}
</script>

<style lang="stylus">
main-color = #7244d8
body
  margin 0
  height 100vh
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  min-height 100vh
  font-size 0.9rem
  display flex
  flex-direction column
  justify-content space-between
  .btn
    &.btn-primary
      background-color main-color
      border-color main-color
    &.btn-outline-primary
      border-color main-color
      color main-color
      &:hover
        background-color main-color
        color #fff
</style>
