export const state = () => ({
  lang: 'uz',
  locales: [
    {
      code: 'uz',
      name: 'Uzbek',
    },
    {
      code: 'ru',
      name: 'Russian',
    },
    {
      code: 'en',
      name: 'English',
    },
  ],
})

export const mutations = {
  changeLang(state, lang) {
    state.lang = lang
  },
}

export const actions = {
  changeLanguage({ commit }, lang) {
    commit('changeLang', lang)
  },
}
