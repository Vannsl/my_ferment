<template>
  <div>
    <error-message :errorMsg="errorMsg" @reset="reset" />
    <form class="text-black" @submit.prevent="loginOrRegisterOrReset">
      <label class="block mt-1">
        <div class="text-white">E-Mail-Adresse</div>
        <input
          type="email"
          v-model="email"
          :class="{ 'bg-yellow-300': markEmail }"
          class="form-input mt-1 block w-full"
          placeholder="Deine E-Mail-Adresse"
        />
      </label>

      <label v-if="!needsResetting" class="block mt-2">
        <div class="text-white">
          Passwort
          <span v-if="needsAccount" class="text-xs">(min. 6 Stellen)</span>
        </div>
        <input
          type="password"
          v-model="password"
          :class="{ 'bg-yellow-300': markPassword }"
          class="form-input mt-1 block w-full"
          placeholder="Dein Passwort"
        />
      </label>

      <label v-if="!needsResetting && needsAccount" class="block mt-2">
        <div class="text-white">Passwort Wiederholung</div>
        <input
          type="password"
          v-model="registrationPassword"
          :class="{ 'bg-yellow-300': markPassword }"
          class="form-input mt-1 block w-full"
          placeholder="Passwort Wiederholung"
        />
      </label>
      <button
        :class="{ 'opacity-50 cursor-not-allowed' : loading}"
        :disabled="loading"
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        type="submit"
        v-text="buttonText"
      />
    </form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

import ErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'Registration',
  data() {
    return {
      email: '',
      password: '',
      registrationPassword: '',
      needsResetting: false
    }
  },
  components: {
    'error-message': ErrorMessage
  },
  props: {
    errorMsg: {
      type: String,
      default: ''
    },
    needsAccount: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    buttonText() {
      let text = 'Login'
      if (!this.needsResetting && this.needsAccount) {
        text = 'Registrieren'
      }
      if (this.needsResetting) {
        text = 'Passwort zurücksetzen'
      }
      return text
    },
    ...mapGetters({
      hasError: 'auth/hasError',
      markEmail: 'auth/emailError',
      markPassword: 'auth/passwordError'
    })
  },
  methods: {
    register() {
      if (this.password === this.registrationPassword) {
        this.$emit('sign', this.email, this.password)
      } else {
        window.setTimeout(() => this.setError('auth/password-mismatch'), 100)
      }
    },
    loginOrRegisterOrReset() {
      this.setError()
      if (!this.needsResetting && this.needsAccount) {
        this.register()
      } else if (this.needsResetting) {
        this.$emit('reset', this.email)
      } else {
        this.$emit('sign', this.email, this.password)
      }
    },
    reset(email) {
      this.setError()
      this.needsResetting = true
    },
    resetPassword() {
      this.$emit('reset', this.email)
    },
    ...mapMutations({
      setError: 'auth/SET_ERROR'
    })
  }
}
</script>
