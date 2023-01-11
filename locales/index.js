module.exports = {
  useCookie: false,
  alwaysRedirect: true,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js',
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Русский',
      file: 'ru.js',
    },
    {
      code: 'uz',
      iso: 'uz-Uz',
      name: 'O`zbek',
      file: 'uz.js',
    },
  ],
  lazy: true,
  seo: false,
  langDir: 'locales/',
  defaultLocale: 'uz',
  parsePages: false,
}
