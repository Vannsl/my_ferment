<template>
  <transition name="fade">
    <div class="text-xs text-yellow-300 leading-normal">
      {{ label }}
      <button
        v-show="showPasswordReset"
        class="font-bold no-underline hover:underline"
        @click.prevent="reset"
      >Passwort vergessen?</button>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ErrorSmallMessage',
  computed: {
    label() {
      switch (this.errorMsg) {
        case 'auth/email-already-in-use':
          return this.$t('registration.emailAlreadyInUse')
        case 'auth/password-mismatch':
          return this.$t('registration.passwordMismatch')
        case 'auth/weak-password':
          return this.$t('registration.weakPassword')
        case 'auth/wrong-password':
          return this.$t('registration.wrongPasswword')
        default:
          return 'test'
      }
    },
    showPasswordReset() {
      return ['auth/email-already-in-use', 'auth/wrong-password'].includes(
        this.errorMsg
      )
    },
    ...mapGetters({
      errorMsg: 'auth/errorMsg'
    })
  },
  methods: {
    reset() {
      // TODO
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-delay: 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
