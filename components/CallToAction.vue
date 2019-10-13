
<template>
  <div>
    <call-to-action-wave-svg />
    <call-to-action-content />
  </div>
</template>

<script>
import CallToActionContent from '@/components/CallToActionContent'
import CallToActionWaveSvg from '@/components/svg/CallToActionWave'

export default {
  name: 'CallToAction',
  components: {
    'call-to-action-content': CallToActionContent,
    'call-to-action-wave-svg': CallToActionWaveSvg
  }
}
</script>