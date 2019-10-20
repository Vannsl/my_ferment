<template>
  <div class="mx-4 pt-24 flex items-center justify-center sm:h-screen" :class="{ shake: hasError }">
    <div class="w-md sm:bg-indigo-800 text-white sm:rounded-lg sm:border sm:shadow-lg sm:p-10">
      <error-message v-show="hasError" :errorMsg="errorMsg" @reset="resetPassword" />
      <registration
        v-if="!authenticatedUser"
        @login="login"
        @register="register"
        @mismatch="passwordMismatch"
        :markEmail="markEmail"
        :markPasswords="markPasswords"
      />
      <logout v-else :email="authenticatedUser.email" @logout="logout()" />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Logout from '@/components/Logout'
import Registration from '@/components/Registration'
import ErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'Login',
  components: {
    logout: Logout,
    registration: Registration,
    'error-message': ErrorMessage
  },
  data() {
    return {
      authenticatedUser: null,
      firebaseError: null,
      hasError: false,
      errorMsg: '',
      markEmail: false,
      markPasswords: false
    }
  },
  watch: {
    hasError(val) {
      if (!val) {
        this.errorMsg = ''
      }
    },
    firebaseError(val) {
      this.hasError = true
      this.errorMsg = val.code
      switch (val.code) {
        case 'auth/email-already-in-use':
          this.markEmail = true
          break
        case 'auth/weak-password':
          this.markPasswords = true
          break
        case 'auth/wrong-password':
          this.markPasswords = true
          this.markEmail = true
          break
      }
    }
  },
  methods: {
    register(email, password) {
      this.resetError()
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => (this.firebaseError = error))
    },
    login(email, password) {
      this.resetError()
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => (this.firebaseError = error))
    },
    logout() {
      this.resetError()
      firebase.auth().signOut()
    },
    passwordMismatch() {
      this.resetError()
      this.hasError = true
      this.errorMsg = 'auth/password-mismatch'
      this.markPasswords = true
    },
    resetError() {
      this.hasError = false
      this.markEmail = false
      this.markPasswords = false
    },
    resetPassword() {
      // todo firebase.auth().sendPasswordResetEmail
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => (this.authenticatedUser = user))
  }
}
</script>


<style lang="scss" scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.w-md {
  width: 28rem;
  max-width: 28rem;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
