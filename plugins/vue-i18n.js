import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ru from '../locales/ru'
import uz from '../locales/uz'
import en from '../locales/en'
const languages = {
  uz,
  ru,
  en
}

const messages = Object.assign(languages)

Vue.use(VueI18n)
export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: 'ru',
    messages,
  })
}
