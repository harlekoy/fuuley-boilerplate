<template>
<div>
  <input
    :type="type"
    :class="inputClass"
    v-bind="$attrs"
    @input="$emit('update', $event.target.value)"
    v-on="$listeners"
  />
  <span
    class="text-red-500 text-sm mx-4"
    v-show="error"
    v-text="error"
  />
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
    type: {
      type: String,
      default: 'text',
      // Only allow types that essentially just render text boxes.
      validator(value) {
        return [
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'url',
        ].includes(value)
      },
    },

    inputClass: {
      type: String,
      default : null,
    },

    error: {
      type: String,
      default: null
    },
  },
}
</script>

<style lang="scss" module>

</style>