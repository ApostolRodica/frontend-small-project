<template>
  <header>
    <div class="container">
      <a href="/"><img class="logo" src="../assets/logo-white.svg"></a>
      <div class="user">
          <img src="../assets/avatar.png">
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="userMenu" data-bs-toggle="dropdown" aria-expanded="false">
            Welcome {{ username }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="userMenu">
              <li><a class="dropdown-item" href="/">Logout</a></li>
            </ul>
          </div>
        </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  props: { username: String }
})
</script>

<style lang="stylus">
light-text = #f1f1f1
header
  background-color #7244d8
  .container
    display flex
    justify-content space-between
    align-items center
    padding 0.5rem 1rem
    .logo
      height 1.8rem
.user
  display flex
  align-items center
  img
    height 1.8rem
    border 1px solid rgba(241, 241, 241, 50%)
    border-radius 50%
    margin-right 0.3rem
  button
    font-size 0.8rem
    padding 0.5rem 0
    color light-text
    &:hover
      color light-text
  .dropdown-menu
    li
      text-align right
      a
        font-size 0.9rem
@media (max-width: 767.98px)
  header
    .container
      .logo
        height 1.3rem
</style>
