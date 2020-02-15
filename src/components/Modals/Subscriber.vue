<template>
<Modal v-model="show">
  <template v-slot:header >Create User</template>
  <div class="flex bg-gray-200 w-full text-sm text-gray-600 font-medium">
      <div v-for="tab in tabs"
        class="py-6 mr-4 ml-6 cursor-pointer"
        :class="{ 'selected-modal-item': currentTab == tab }"
        :key="'modal-tab-'+tab"
        @click="currentTab = tab"
      >
          <span class="uppercase">{{ tab }}</span>
      </div>
  </div>

  <component v-bind:is="currentTab"></component>
</Modal>
</template>

<script>
import Billing from '@/components/SubscriberBilling'
import General from '@/components/SubscriberGeneral'
import Modal from '@/components/Modal'
import Notifications from '@/components/SubscriberNotifications'
import Security from '@/components/SubscriberSecurity'
import Subscriptions from '@/components/SubscriberSubscriptions'


export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    value (current) {
      this.show = current
    },

    show (current) {
      this.$emit('input', current)
    }
  },

  components: {
    Billing,
    General,
    Modal,
    Notifications,
    Security,
    Subscriptions,
  },

  data () {
    return {
      show: false,
      currentTab: 'General',
      tabs: [
        'General',
        'Security',
        'Subscriptions',
        'Billing',
        'Notifications',
      ],
    }
  }
}
</script>