<template>
    <Modal v-model="show">
        <template v-slot:header >Create Category</template>
    </Modal>
</template>

<script>
import Modal from '@/components/Modal'

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
    Modal,
  },

  data () {
    return {
      show: false,
    }
  }
}
</script>