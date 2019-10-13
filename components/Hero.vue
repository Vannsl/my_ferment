<template>
  <div>
    <hero-content />
    <div class="relative -mt-12 lg:-mt-24">
      <hero-wave-svg />
    </div>
  </div>
</template>

<script>
import HeroContent from '@/components/HeroContent'
import HeroWaveSvg from '@/components/svg/HeroWave'

export default {
  name: 'Hero',
  components: {
    'hero-content': HeroContent,
    'hero-wave-svg': HeroWaveSvg
  }
}
</script>
