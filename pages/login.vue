<template>
  <div class="pt-24 flex items-center justify-center sm:h-screen">
    <div class="sm:bg-indigo-800 text-white font-bold sm:rounded-lg sm:border sm:shadow-lg sm:p-10">
      <registration v-if="!authenticatedUser" @login="login" @register="register" />
      <logout v-else :email="authenticatedUser.email" @logout="logout()" />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Logout from '@/components/Logout'
import Registration from '@/components/Registration'

export default {
  name: 'Login',
  components: {
    logout: Logout,
    registration: Registration
  },
  data() {
    return {
      authenticatedUser: null,
      firebaseError: null
    }
  },
  watch: {
    firebaseError(val) {
      switch (val.code) {
        case 'auth/email-already-in-use': {
          this.errMessage =
            'Für diese E-Mail-Adresse ist bereits ein Account hinterlegt.'
          break
        }
      }
    }
  },
  methods: {
    register(email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => (this.firebaseError = error))
    },
    login(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password)
    },
    logout() {
      firebase.auth().signOut()
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => (this.authenticatedUser = user))
  }
}
</script>
