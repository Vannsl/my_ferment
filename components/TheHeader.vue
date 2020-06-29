<template>
  <nav :class="{ 'bg-white shadow': isSticky }" class="fixed w-full z-30 top-0">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="pl-4 flex items-center">
        <logo :isStickable="true" :isSticky="isSticky" />
      </div>
      <div class="block lg:hidden pr-4">
        <button
          :class="{ 'bg-primary': isSticky }"
          class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-800 hover:border-gray-800 appearance-none focus:outline-none"
          @click.prevent.stop="onToggleClick"
        >
          <hamburger-svg />
        </button>
      </div>

      <div
        :class="[isSticky ? 'bg-white' : 'bg-gray-100', isOpen ? 'hidden' : '']"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <!-- <li class="mr-3">
            <a href="#howto">Test</a>
           <nuxt-link
              class="link hover:text-gray-800 hover:text-underline"
              :to="{ path: '/', hash:'howto'}"
            >
              {{ $t('navigation.new') }}
            </nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link
              class="link hover:text-gray-800 hover:text-underline"
              to="/"
            >{{ $t('navigation.recipes') }}</nuxt-link>
          </li> -->
          <li class="mr-3">
            <a
              class="link hover:text-gray-800 hover:text-underline"
              href="#"
            >{{ $t('navigation.seasonalCalendar') }}</a>
          </li>
        </ul>
        <nuxt-link
          :class="[ isSticky ? 'bg-primary text-white' : 'bg-white text-gray-800' ]"
          class="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
          to="/login"
        >{{ $t('navigation.myFerments') }}</nuxt-link>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '@/components/Logo'
import HamburgerSvg from '@/components/svg/Hamburger'

export default {
  name: 'TheHeader',
  components: {
    logo: Logo,
    'hamburger-svg': HamburgerSvg
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false
    }
  },
  computed: {
    ...mapState('auth', ['authenticatedUser']),
    isSticky() {
      return this.scrollY > 10
    }
  },
  methods: {
    onClick() {
      this.isOpen = false
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
    onToggleClick() {
      this.isOpen = !this.isOpen
    }
  },
  mounted() {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  }
}
</script>

<style scoped>
.link {
  @apply inline-block text-black no-underline py-2 px-4;
}
</style>
