<template>
  <div class="signin">
    <form>
      <img class="logo" src="../assets/logo-default.svg" />
      <div class="mb-3">
        <input v-model="username" type="text" class="form-control" placeholder="Username" required>
      </div>
      <div class="mb-3">
        <input v-model="password" type="password" class="form-control" placeholder="Password" required>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="rememberUser">
        <label class="form-check-label" for="rememberUser">Remember me</label>
      </div>
      <div class="mb-3 social-redirect">
        <a href="#">Login using social account</a>
      </div>
      <div class="mb-3 d-flex justify-content-between actions">
        <button
          type="button"
          class="btn btn-outline-primary btn-sm"
          @click="goToRegister"
        >Register</button>
        <button
          type="submit"
          class="btn btn-primary btn-sm"
          @click="login"
        >Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SigninView',
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    goToRegister () {
      this.$router.push('/signup')
    },
    login () {
      if (this.username != null && this.password != null) {
        this.$router.push({ name: 'todos', params: { username: this.username } })
      }
    }
  }
})
</script>

<style lang="stylus">
.signin
  min-width 22rem
  max-width 26rem
  margin auto
  display flex
  align-items center
  padding 0.3rem 1.5rem 0.5rem 1.5rem
  background-color #fafafa
  form
    width 100%
    .logo
      display block
      height 3rem
      margin 2rem auto
    input
      &::placeholder
        font-size 0.8rem
        color #7b7b7b
    .social-redirect
      text-align center
      padding 0.5rem 0 1rem 0
    .actions
      .btn
        min-width 8rem
</style>
