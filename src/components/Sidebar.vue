<template>
<div class="bg-white flex-wrap pr-8 relative" style="width: 18rem">
    <div class="w-full h-20 items-center mb-8">
        <div @click="handleClickOutside('main')" class="w-full flex h-20 items-center pl-5 cursor-pointer">
            <div>
                <img class="bg-green-500 h-10 w-10 rounded-full" src="" alt="">
            </div>
            <div class="flex items-center justify-center pl-2 w-full text-xs lg:text-sm">
                <span class="font-medium text-blue-900">Downtown LA</span>
                <i class="icon-chevron-down text-xxs text-gray-500 ml-auto" aria-hidden="true"></i>
            </div>
        </div>
        <div v-show="open === 'main'" class="w-full p-5 pt-4 absolute bg-white shadow-lg h-64 border-t">
            <vue-custom-scrollbar class="h-56">
                <div class="flex w-full p-3">
                    <div class="flex items-center pl-2 w-full text-xs lg:text-sm">
                        <span class="font-medium text-blue-900">Whileshire Blvd</span>
                    </div>
                </div>
                <div class="flex w-full p-3">
                    <div class="flex items-center pl-2 w-full text-xs lg:text-sm">
                        <span class="font-medium text-blue-900">Washington Blvd</span>
                    </div>
                </div>
                <div class="flex w-full p-3">
                    <div class="flex items-center pl-2 w-full text-xs lg:text-sm">
                        <span class="font-medium text-blue-900">Whileshire Blvd</span>
                    </div>
                </div>
                <div class="flex w-full p-3">
                    <div class="flex items-center pl-2 w-full text-xs lg:text-sm">
                        <span class="font-medium text-blue-900">Washington Blvd</span>
                    </div>
                </div>
                <div class="flex w-full p-3">
                    <div class="flex items-center pl-2 w-full text-xs lg:text-sm">
                        <span class="font-medium text-blue-900">Whileshire Blvd</span>
                    </div>
                </div>
                <div class="flex w-full p-3">
                    <div class="flex items-center pl-2 w-full text-xs lg:text-sm">
                        <span class="font-medium text-blue-900">Washington Blvd</span>
                    </div>
                </div>
                <div class="flex w-full p-3">
                    <div class="flex items-center pl-2 w-full text-xs lg:text-sm">
                        <span class="font-medium text-blue-900">Downtown USA</span>
                    </div>
                </div>
                <div class="flex w-full p-3">
                    <div class="flex items-center pl-2 w-full text-xs lg:text-sm">
                        <span class="font-medium text-blue-900">Downtown AU</span>
                    </div>
                </div>
            </vue-custom-scrollbar>
        </div>
    </div>
    <div class="ml-5">
        <span class="text-sm font-medium text-blue-800">MANAGE</span>
    </div>
    <router-link
      class="w-full"
      :to="{ name: 'users' }"
      v-slot="{ isExactActive }"
    >
        <router-link class="w-full" :to="{ name: 'users' }">
          <div
            class="flex items-center pl-10 h-10 mt-6 hover:font-medium"
            :class="{ 'selected-menu': isExactActive }"
          >
            <img src="../icons/icon-dashboard.svg" alt="">
            <span :class="{ 'font-medium': isExactActive }" class="text-sm pl-5 text-blue-800">Users</span>
          </div>
        </router-link>
    </router-link>
</div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
  name: 'Sidebar',
  components: {
     vueCustomScrollbar
  },
  data() {
    return {
      isExactActive: false,
      open: null
    };
  },
  methods: {
    handleClickOutside(active) {
      this.open = (this.open === active) ? null : active
    }
  }
}
</script>
