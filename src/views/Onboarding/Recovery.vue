<template>
<Layout>
  <div class="block bg-white w-full max-w-xl mx-2 px-2 py-4 sm:mx-24 sm:px-8 sm:py-3 lg:mx-64 lg:px-24 lg:py-10 rounded">
    <p class="text-base font-bold mb-5 lg:text-3xl lg:font-normal lg:mb-10 text-center">Password recovery</p>
    <div>
      <label class="block mb-3 text-sm" for="email">Your email</label>
      <input class="border border-gray-300 w-full rounded p-4 text-xs font-medium mb-10" type="email"name="email" id="email" placeholder="Enter your email">
    </div>
    <div>
      <button class="w-full text-white text-sm rounded p-3 bg-blue-800 mb-10">SEND CONFIRMATION</button>
    </div>
    <div class="text-center text-sm">
      <span class="text-gray-600">Don't have an account? <router-link :to="{ name: 'register' }" class="text-blue-600 font-medium" href="#"> Sign up here</router-link></span>
    </div>
  </div>
</Layout>
</template>

<script>
import Layout from '@/layouts/Onboarding'

export default {
  components: {
    Layout,
  }
}
</script>