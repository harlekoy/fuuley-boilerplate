<template>
<Layout>
    <div class="block bg-white w-full max-w-xl mx-2 px-2 py-4 sm:mx-24 sm:px-8 sm:py-3 lg:mx-64 lg:px-24 lg:py-10 rounded">
        <p class="text-base font-bold mb-5 lg:text-3xl lg:font-normal lg:mb-10 text-center">Create account</p>
        <div>
            <label class="block mb-3 text-sm" for="password">Password</label>
            <BasePassword
              class="mb-10"
              input-class="border border-gray-300 w-full rounded p-4 text-xs font-medium"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
        </div>
        <div>
            <button class="w-full text-white text-sm rounded p-3 bg-blue-800 mb-10">SIGN UP</button>
        </div>
        <div class="text-center text-sm">
            <span class="text-gray-600">Already have an account?</span>
            <router-link :to="{ name: 'login' }" class="text-blue-600 font-medium" href="#"> Login here</router-link>
        </div>
    </div>
</Layout>
</template>

<script>
import Layout from '@/layouts/Onboarding'

export default {
  components: {
    Layout,
  },
}
</script>