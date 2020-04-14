<template>
  <article class="mx-4 pt-24 flex items-center justify-center sm:h-screen">
    <div class="w-md sm:bg-indigo-800 text-white sm:rounded-lg sm:border sm:shadow-lg">
      <tabs class="w-full">
        <tab
          v-for="(content, index) in tabList"
          :key="`tab_${index}_${content}`"
          :content="content"
          :index="index"
          :length="tabList.length"
          :selectedTabIndex="selectedTabIndex"
          @select="selectTab(index)"
        />
      </tabs>
      <div class="sm:px-10 sm:pb-10">
        <div class="relative my-6">
          <keyhole-svg :class="{ shake: hasError }" />
        </div>
        <div v-if="wasResetted">
          Eine E-Mail zum Zurücksetzen des Passworts wurde an die Adresse
          <strong>{{ this.email }}</strong> geschickt.
          <button
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            @click.prevent="back"
            v-text="'Zurück zum Login'"
          />
        </div>
        <registration
          v-else
          :needsAccount="needsAccount"
          :loading="loading"
          @sign="signUpOrIn"
          @reset="reset"
        />
      </div>
    </div>
  </article>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapMutations, mapState } from 'vuex'
import KeyholeSvg from '@/components/svg/Keyhole'
import Tabs from '@/components/Tabs'
import Tab from '@/components/Tab'
import Registration from '@/components/Registration'
import ErrorMessage from '@/components/ErrorMessage'

export default {
  name: 'Login',
  components: {
    registration: Registration,
    'error-message': ErrorMessage,
    'keyhole-svg': KeyholeSvg,
    tabs: Tabs,
    tab: Tab
  },
  data() {
    return {
      firebaseError: null,
      tabList: ['Anmelden', 'Registrieren'],
      selectedTabIndex: 0,
      loading: false,
      wasResetted: false,
      email: ''
    }
  },
  watch: {
    firebaseError(val) {
      this.SET_ERROR(val.code)
    },
    selectedTabIndex() {
      this.SET_ERROR()
    },
    authenticatedUser(newVal) {
      if (newVal !== null) {
        this.$router.push({ path: 'ferments' })
      }
    }
  },
  computed: {
    needsAccount() {
      return this.selectedTabIndex === 1
    },
    ...mapGetters('auth', ['hasError']),
    ...mapState('auth', ['authenticatedUser'])
  },
  methods: {
    signUpOrIn(email, password) {
      const type = this.needsAccount ? 'createUser' : 'signIn'
      const methodName = `${type}WithEmailAndPassword`

      this.loading = true

      firebase
        .auth()
        [methodName](email, password)
        .catch(error => (this.firebaseError = error))
        .finally(() => (this.loading = false))
    },
    reset(email) {
      this.loading = true
      this.email = email
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .finally(() => {
          this.loading = false
          this.wasResetted = true
        })
    },
    selectTab(index) {
      this.selectedTabIndex = index
    },
    back() {
      this.selectedTabIndex = 0
      this.wasResetted = false
    },
    ...mapMutations('auth', ['SET_ERROR', 'SET_AUTHENTICATED_USER'])
  },
  created() {
    firebase.auth().onAuthStateChanged(this.SET_AUTHENTICATED_USER)
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
