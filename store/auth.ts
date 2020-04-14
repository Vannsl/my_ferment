import { GetterTree, MutationTree } from 'vuex'
import firebase, { FirebaseError } from 'firebase';
import { RootState } from '~/store'

const FIREBASE_ERROR_CODES = {
  eMailAlreadyInUse: 'auth/email-already-in-use',
  weakPassword: 'auth/weak-password',
  wrongCredentials: 'auth/wrong-password',
  userNotFound: 'auth/user-not-found',
  tooManyRequests: 'auth/too-many-requests'
}

const CUSTOM_ERROR_CODES = {
  passwordMismatch: 'auth/password-mismatch'
}

export const state = () => ({
  code: '',
  authenticatedUser: {}
})

export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, RootState> = {
  hasError: state => state.code !== '',
  emailError: state =>
    [
      FIREBASE_ERROR_CODES.eMailAlreadyInUse,
      FIREBASE_ERROR_CODES.wrongCredentials,
      FIREBASE_ERROR_CODES.tooManyRequests,
      FIREBASE_ERROR_CODES.userNotFound
    ].includes(state.code),
  passwordError: state =>
    [
      FIREBASE_ERROR_CODES.weakPassword,
      FIREBASE_ERROR_CODES.wrongCredentials,
      CUSTOM_ERROR_CODES.passwordMismatch,
      FIREBASE_ERROR_CODES.tooManyRequests,
      FIREBASE_ERROR_CODES.userNotFound
    ].includes(state.code)
}

export const mutations: MutationTree<AuthState> = {
  SET_ERROR(state, code: string = '') {
    state.code = code
  },
  SET_AUTHENTICATED_USER(state, user: firebase.User) {
    state.authenticatedUser = user
  }
}
