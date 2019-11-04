const FIREBASE_ERROR_CODES = {
  eMailAlreadyInUse: 'auth/email-already-in-use',
  weakPassword: 'auth/weak-password',
  wrongCredentials: 'auth/wrong-password'
}

const CUSTOM_ERROR_CODES = {
  passwordMismatch: 'auth/password-mismatch'
}

export const state = () => ({
  code: ''
})

export const getters = {
  errorMsg: state => state.code,
  hasError: state => state.code !== '',
  emailError: state =>
    [
      FIREBASE_ERROR_CODES.eMailAlreadyInUse,
      FIREBASE_ERROR_CODES.wrongCredentials
    ].includes(state.code),
  passwordError: state =>
    [
      FIREBASE_ERROR_CODES.weakPassword,
      FIREBASE_ERROR_CODES.wrongCredentials,
      CUSTOM_ERROR_CODES.passwordMismatch
    ].includes(state.code)
}

export const mutations = {
  SET_ERROR(state, code = '') {
    state.code = code
  }
}
