<template>
  <div class="signup">
    <form>
      <a href="/"><img class="logo" src="../assets/logo-default.svg"></a>
      <div class="row">
        <div class="col-12 col-md-6">
          <input type="text" class="form-control" placeholder="Username" required>
        </div>
        <div class="col-12 col-md-6">
          <input type="email" class="form-control" placeholder="Email" required>
        </div>
        <div class="w-100"></div>
        <div class="col-12 col-md-6">
          <input type="password" class="form-control" placeholder="Password" required>
        </div>
        <div class="col-12 col-md-6">
          <input type="password" class="form-control" placeholder="Re-type Password" required>
        </div>
        <div class="w-100"></div>
        <div class="col-12 col-md-6">
          <input type="text" class="form-control" placeholder="Website">
        </div>
        <div class="col-12 col-md-6">
          <input type="phone" class="form-control" placeholder="Phone">
        </div>
      </div>
      <div class="d-flex justify-content-between actions">
        <button
          type="button"
          class="btn btn-outline-primary btn-sm"
          @click="goToSignin"
        >Back</button>
        <button type="submit" class="btn btn-primary btn-sm">Create new Account</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SignupView',
  methods: {
    goToSignin () {
      this.$router.push('/signin')
    }
  }
})
</script>

<style lang="stylus">
.signup
  max-width 32rem
  margin auto
  display flex
  align-items center
  padding 0.5rem 1.5rem 1.5rem 1.5rem
  background-color #fafafa
  form
    width 100%
    .logo
      display block
      height 3rem
      margin 2rem auto
    .row
      .col-12
        margin-bottom 1.5rem
    input
      &::placeholder
        font-size 0.8rem
        color #7b7b7b
      &:required
        background-image url('../assets/required-field.png')
        background-size 10%
        background-position-x right
        background-position-y top
        background-repeat no-repeat
    .actions
      padding-top 2rem
      .btn
        min-width 6rem
        &:last-of-type
          min-width 12rem
</style>
