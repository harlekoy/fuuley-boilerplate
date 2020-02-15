<template>
<div>
  <portal-target name="modal" @change="showModal = $event">
    <!--
    This component can be located anywhere in your App.
    The slot content of the above portal component will be rendered here.
    -->
  </portal-target>
  <!-- style="-webkit-filter: blur(8px);" -->
  <div class="flex flex-row font-main text-base" :style="showModal ? '-webkit-filter: blur(8px);' : ''">
      <!-- SIDEBAR -->
      <Sidebar />
      <div class="min-h-screen bg-gray-200 w-full flex flex-col">
          <!-- COLLAPSE MENU, SEARCH, NOTIFICATION BELL, AND USER DROPDOWN OPTION -->
          <Navbar />
          <div class="flex-1">
            <slot />
          </div>
          <AppFooter />
      </div>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import AppFooter from '@/components/AppFooter'

export default {
  components: {
    Navbar,
    Sidebar,
    AppFooter,
  },

  watch: {
    showModal (show) {
      document.body.style.overflow = show ? 'hidden' : '';
    }
  },

  data () {
    return {
      showModal: false
    }
  }
}
</script>