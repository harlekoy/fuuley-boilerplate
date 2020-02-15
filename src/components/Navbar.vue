<template>
<div class="flex bg-gray-200 h-16 w-full">
  <div class="w-24">
    <div class="flex h-full items-center justify-center">
      <img class="w-4 h-4" src="../icons/icon-menu.svg" alt="">
    </div>
  </div>
  <div class="w-16">
    <div class="flex h-full items-center justify-center">
      <img src="../icons/icon-search.svg" alt="">
    </div>
  </div>
  <div class="w-full bg-gray-200">
    <div class="flex h-full items-center">
      <input class="bg-gray-200 font-light ml-3 outline-none text-sm w-full text-blue-800" type="text" name="search_bar" id="search_bar" placeholder="Search for customers, orders, tasks, etc.">
    </div>
  </div>
  <!-- Notifications -->
  <div class="flex flex-row justify-around items-center w-40 bg-gray-200">
    <!-- <div class="relative text-lg">
        <i class="fa fa-bell text-gray-600"></i>
        <div class="w-2 h-2 rounded-full bg-red-600 border-gray-200 border absolute top-0 right-0"></div>
    </div> -->
    <NotificationCard v-if="show"/>
    <img src="../icons/icon-notification.svg" alt="" @click="toggleNotifications">
    <div class="pr-5">
      <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
    </div>
  </div>
</div>
</template>
<script>

export default {
  data () {
    return {
      show: false,
    }
  },

  methods: {
    async toggleNotifications () {
      this.show = !this.show
    } 
  }
}
</script>