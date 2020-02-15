<template>
<portal to="modal" :disabled="!value" v-click-outside="onClickOutside">
<div id="modal" class="flex pt-24 fixed h-full w-full pin z-50 overflow-auto flex justify-center my-auto font-main" style="background-color: rgba(3, 30, 51, 0.62);">
    <div class="flex flex-shrink flex-col rounded mx-3">
        <div class="flex bg-white w-full p-4 pl-6 items-center rounded-t">
            <span class="text-xl text-black">
              <slot name="header" />
            </span>
            <a
              href="#"
              @click.prevent="hide"
              class="ml-auto text-2xl text-gray-600"
            ><i class="icon-times-circle"></i></a>
        </div>
        <slot />
        <div class="flex bg-white p-6 rounded-b font-main mb-20">
            <div>
                <button class="bg-blue-800 text-gray-100 font-medium tracking-wide text-sm py-3 px-12 rounded hover:bg-blue-700">SAVE</button>
            </div>
            <div class="ml-auto">
                <button
                    class="bg-gray-200 text-gray-600 font-medium tracking-wide text-sm py-3 px-12 rounded hover:bg-gray-300"
                    @click="hide"
                >CANCEL</button>
            </div>
        </div>
    </div>
</div>
</portal>
</template>

<script>
import { directive } from 'v-click-outside'

export default {
  props: {
    width: String,
    value: {
      type: Boolean,
      default: false,
    }
  },

  directives: {
    ClickOutside: directive
  },

  mounted () {
  },

  methods: {
    hide () {
      this.$emit('input', false)
    },

    onClickOutside (event) {
      if (event.target.id === 'modal') {
        this.hide()
      }
    }
  }
}
</script>