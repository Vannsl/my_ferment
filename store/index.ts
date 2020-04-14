import { MutationTree } from 'vuex'

export const state = () => ({
  locales: ['en', 'de'],
  locale: 'de'
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
