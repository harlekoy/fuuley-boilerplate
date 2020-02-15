<template>
<div class="relative bg-gray-400">
  <input
    :type="type"
    :class="inputClass"
    v-bind="$attrs"
    @input="$emit('update', $event.target.value)"
    v-on="$listeners"
  />
  <div class="absolute inset-y-0 right-0 flex">
    <a class="text-xl w-12 h-auto flex items-center justify-center" @click="toggle" href="#">
      <i class="text-gray-500" :class="'icon-'+icon"></i>
    </a>
  </div>
</div>
</template>

<script>
export default {
  /**
   * Disable automatic attribute inheritance, so that $attrs are
   * passed to the <input>, even if it's not the root element.
   * https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
   */
  inheritAttrs: false,

  /**
   * Change the v-model event name to `update` to avoid changing
   * the behavior of the native `input` event.
   * https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
   */
  model: {
    event: 'update',
  },


  props: {
    inputClass: {
      type: String,
      default : null,
    },

    error: {
      type: String,
      default: null
    },
  },

  data () {
    return {
      icon: 'eye-slash',
      type: 'password',
    }
  },

  methods: {
    toggle () {
      this.icon = this.icon.includes('slash') ? 'eye' : 'eye-slash'
      this.type = this.type === 'password' ? 'text' : 'password'
    }
  }
}
</script>
