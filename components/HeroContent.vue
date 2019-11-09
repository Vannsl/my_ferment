<template>
  <div class="pt-24">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">Digitaler Fermentationsplaner</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">Behalte den Überblick über deine Fermente</h1>
        <p
          class="leading-normal text-2xl mb-8"
        >Nie wieder Etiketten, ungewollter Kombucha-Essig oder vergessene, verschimmelte Gläser.</p>

        <nuxt-link
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          to="/login"
        >Fermente anlegen</nuxt-link>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 py-6 text-center">
        <hero-svg class="w-full md:w-4/5 md:p-10 z-50" />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSvg from '@/components/svg/Hero'

export default {
  name: 'HeroContent',
  components: {
    'hero-svg': HeroSvg
  }
}
</script>
