<template>
  <div class="rounded-lg p-2 mb-4 border border-yellow-200 text-yellow-200">
    {{ label }}
    <button
      v-show="showPasswordReset"
      class="font-bold no-underline hover:underline"
      @click.prevent="reset"
    >Passwort vergessen?</button>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    errorMsg: {
      type: String,
      required: true
    }
  },
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
      }
    },
    showPasswordReset() {
      return ['auth/email-already-in-use', 'auth/wrong-password'].includes(
        this.errorMsg
      )
    }
  }
}
</script>
