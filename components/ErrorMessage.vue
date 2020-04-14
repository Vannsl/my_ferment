<template>
  <transition name="fade">
    <div
      v-if="hasError"
      class="arrow-box relative -mt-2 rounded-lg p-2 mb-4 border-4 border-yellow-300 bg-yellow-100 text-black"
    >
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
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'ErrorMessage',
  computed: {
    label() {
      switch (this.code) {
        case 'auth/email-already-in-use':
          return this.$t('registration.emailAlreadyInUse')
        case 'auth/password-mismatch':
          return this.$t('registration.passwordMismatch')
        case 'auth/too-many-requests':
          return this.$t('registration.tooManyRequests')
        case 'auth/user-not-found':
          return this.$t('registration.userNotFound')
        case 'auth/weak-password':
          return this.$t('registration.weakPassword')
        case 'auth/wrong-password':
          return this.$t('registration.wrongPassword')
        default:
          return this.$t('registration.customError')
      }
    },
    showPasswordReset() {
      return ['auth/email-already-in-use', 'auth/wrong-password'].includes(
        this.errorMsg
      )
    },
    ...mapGetters('auth', ['hasError']),
    ...mapState('auth', ['code'])
  },
  methods: {
    reset() {
      this.$emit('reset')
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  max-height: 500px;
  transition: max-height 0.25s ease-in;
}

.fade-enter,
.fade-leave-to {
  max-height: 0;
  overflow: hidden;
}

.arrow-box:after,
.arrow-box:before {
  bottom: 100%;
  left: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.arrow-box:after {
  border-color: rgba(255, 255, 240, 0);
  border-bottom-color: #fffff0;
  border-width: 10px;
  margin-left: -10px;
}

.arrow-box:before {
  border-color: rgba(250, 240, 137, 0);
  border-bottom-color: #faf089;
  border-width: 16px;
  margin-left: -16px;
}
</style>
