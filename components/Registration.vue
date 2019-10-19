<template>
  <div>
    <div class="mb-4">
      <div>
        <label class="inline-flex items-center sm:pr-20">
          <input type="radio" id="hasAccount" :value="false" v-model="needsAccount" />
          <span class="ml-2">Ich bin bereits registriert</span>
        </label>
      </div>
      <div>
        <label class="inline-flex items-center sm:pr-20">
          <input type="radio" id="needsAcctouns" :value="true" v-model="needsAccount" />
          <span class="ml-2">Ich brauche einen Account</span>
        </label>
      </div>
    </div>
    <form class="text-black" @submit.prevent="loginOrRegister">
      <label class="block mt-2">
        <span class="text-white">E-Mail-Adresse</span>
        <input
          type="email"
          v-model="email"
          class="form-input mt-1 block w-full"
          placeholder="Deine E-Mail-Adresse"
        />
      </label>

      <label class="block mt-2">
        <span class="text-white">Passwort</span>
        <input
          type="password"
          v-model="password"
          class="form-input mt-1 block w-full"
          placeholder="Dein Passwort"
        />
      </label>

      <label v-if="needsAccount" class="block mt-2">
        <span class="text-white">Passwort Wiederholung</span>
        <input
          type="password"
          v-model="registrationPassword"
          class="form-input mt-1 block w-full"
          placeholder="Passwort Wiederholung"
        />
      </label>
      <button
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        v-text="needsAccount ? 'Registrieren' : 'Login'"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      email: '',
      password: '',
      registrationPassword: '',
      needsAccount: true
    }
  },
  methods: {
    register() {
      if (this.password === this.registrationPassword) {
        this.$emit('register', this.email, this.password)
      } else {
        // display error message
      }
    },
    login() {
      this.$emit('login', this.email, this.password)
    },
    loginOrRegister() {
      if (this.needsAccount) {
        this.register()
      } else {
        this.login()
      }
    }
  }
}
</script>
