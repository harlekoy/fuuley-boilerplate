<template>
<Layout>
  <div class="block bg-white w-full max-w-xl mx-2 px-2 py-4 sm:mx-24 sm:px-8 sm:py-3 lg:mx-64 lg:px-24 lg:py-10 rounded">
    <p class="text-base font-bold mb-5 lg:text-3xl lg:font-normal lg:mb-10 text-center">Sign In</p>
    <div>
      <label class="block mb-3 text-sm" for="username">Your Email</label>
      <BaseInput
        class="mb-10"
        input-class="border border-gray-300 w-full rounded p-4 text-xs font-medium"
        type="text"
        name="username"
        id="username"
        placeholder="Enter your email"
      />
    </div>
    <div>
      <label class="block mb-3 text-sm" for="password">Password</label>
      <BasePassword
        class="mb-6 xs:mb-3"
        input-class="border border-gray-300 w-full rounded p-4 text-xs font-medium"
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
      />
    </div>
    <div class="mb-6 xs:mb-3 text-sm">
      <input class="leading-tight" type="checkbox">
      <span class="ml-1 text-gray-500">Remember me</span>
      <router-link :to="{ name: 'recovery' }" class="text-blue-600 font-medium float-right" href="#">Recover Password</router-link>
    </div>
    <div>
      <button
        @click="login"
        class="w-full text-white text-sm rounded p-3 bg-blue-800 mb-10"
      >SIGN IN</button>
    </div>

    <div class="text-center text-sm">
      <span class="text-gray-600">Don't have an account?</span>
      <router-link :to="{ name: 'register' }" class="text-blue-600 font-medium" href="#"> Sign up here</router-link>
    </div>
  </div>
</Layout>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import Layout from '@/layouts/Onboarding'

export default {
  name: 'Login',

  components: {
    Layout,
  },

  data () {
    return {
      form: {
        email: '',
        password: '',
        remember: false
      },
      loginError: false,
      loading: false,
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    ...mapActions({
      authenticate: 'auth/login',
      logout: 'auth/logout',
    }),

    async login () {
      const { data } = await this.authenticate(this.form)
    },
  }
}
</script>
