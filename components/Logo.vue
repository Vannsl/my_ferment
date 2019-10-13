<template>
  <a
    :class="classList"
    class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
    href="#"
  >
    <logo-svg />&nbsp;MyFerments
  </a>
</template>

<script>
import LogoSvg from '@/components/svg/logo'

export default {
  name: 'Logo',
  components: {
    'logo-svg': LogoSvg
  },
  props: {
    isStickable: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      let classList = ''
      if (this.isStickable) {
        classList = this.isSticky ? 'text-gray-800' : 'text-white'
      } else {
        classList = 'text-primary'
      }
      return classList
    }
  }
}
</script>