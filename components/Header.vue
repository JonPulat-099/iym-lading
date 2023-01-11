<template>
  <nav>
    <v-toolbar class="pt-2" color="#FFFFFF">
      <img id="logo" src="/iym_logo.svg" alt="" @click="goToMain" />
      <ul class="dropdawn__menu pt-15">
        <li
          v-for="(l, i) in links"
          :key="i"
          :class="`menu__item--${i + 1}`"
          @mouseover="test(`menu__item--${i + 1}`)"
          @mouseout="uptest(`menu__item--${i + 1}`)"
        >
          <p v-if="l.links && Array.isArray(l.links)">
            {{ l.name }}
            <i class="v-icon notranslate mdi mdi-chevron-down theme--light"></i>
          </p>
          <a v-else :href="l.url"> {{ l.name }} </a>
          <ul v-if="l.links">
            <li v-for="link in l.links" :key="link.name">
              <a :href="link.url">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <v-spacer></v-spacer>

      <div class="actions pt-15">
        <div class="locales">
          <v-menu offset-y open-on-hover>
            <template #activator="{ on, attrs }">
              <v-btn
                class="curr__lang"
                depressed
                dense
                v-bind="attrs"
                v-on="on"
              >
                <img src="/icons/ethernet.svg" alt="" class="mr-2" />
                <p>{{ currentLocale }}</p>
                <i
                  class="v-icon notranslate mdi mdi-chevron-down theme--light"
                ></i>
              </v-btn>
            </template>
            <p>{{ $t('say_hi') }}</p>
            <v-list>
              <v-list-item
                v-for="(item, index) in availableLocales"
                :key="index"
                @click="changeLocales(item.code)"
              >
                <v-list-item-title
                  :class="[
                    item.code == currentLocale ? 'isActive' : 'noActive',
                  ]"
                  >{{ item.name }}
                  <v-icon
                    size="20"
                    :color="item.code == currentLocale ? '#3D9A73' : ''"
                  >
                    {{
                      item.code == currentLocale
                        ? 'mdi-check'
                        : 'mdi-arrow-right-thin'
                    }}
                  </v-icon>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <v-btn
          class="signin ma-2"
          depressed
          width="110"
          height="50"
          @click="openSignIn"
        >
          Войти
        </v-btn>
        <v-btn
          class="signup ma-2"
          outlined
          width="165"
          height="50"
          @click="openSignIn"
        >
          Регистрация
        </v-btn>
        <v-btn
          v-if="!dialog"
          icon
          color="#3D9A73"
          class="burger__menu ma-2"
          @click="dialog = true"
        ></v-btn>
        <v-btn
          v-else
          icon
          color="#F0F0F0"
          class="clome__menu ma-2"
          @click="dialog = false"
        ></v-btn>
      </div>
    </v-toolbar>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="pa-10">
        <div class="mobile__menu">
          <ul>
            <li v-for="l in links" :key="l.name">
              <p
                v-if="l.links && Array.isArray(l.links)"
                class="primary__router"
              >
                {{ l.name }}
                <i
                  class="v-icon notranslate mdi mdi-chevron-down theme--light"
                ></i>
              </p>
              <a v-else :href="l.url" class="primary__router"> {{ l.name }} </a>
              <ul v-if="l.links">
                <li v-for="link in l.links" :key="link.name">
                  <a :href="link.url" class="secondary__router">
                    {{ link.name }}
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <p class="primary__router current__locale">
                <img src="/icons/ethernet.svg" alt="" class="mr-2" />
                {{ currentLocale }}
                <i
                  class="v-icon notranslate mdi mdi-chevron-down theme--light"
                ></i>
              </p>
              <ul>
                <li v-for="(item, index) in items" :key="index">
                  <button :class="item.isActive ? 'active' : 'noActive'">
                    {{ item.title }}
                    <v-icon size="20">
                      {{ item.isActive ? 'mdi-check' : 'mdi-arrow-right-thin' }}
                    </v-icon>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="gateway">
          <v-btn
            class="signin ma-2"
            depressed
            width="110"
            height="50"
            @click="$router.push('https://ipakyulibank.uz/cabinet/login')"
          >
            Войти
          </v-btn>
          <v-btn
            class="signup ma-2"
            outlined
            width="165"
            height="50"
            @click="$router.push('https://ipakyulibank.uz/cabinet/login')"
          >
            Регистрация
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      dialog: false,
      items: [
        { title: 'Russian', isActive: true },
        { title: 'English', isActive: false },
        { title: 'Uzbek', isActive: false },
      ],

      links: [
        {
          name: 'Возможности',
          url: '#',
        },
        {
          name: 'Команда',
          url: '#',
          links: [
            {
              name: 'О нас',
              url: '/about',
            },
            {
              name: 'Пример меню 1',
              url: '#',
            },
            {
              name: 'Ваканции',
              url: '/vacancy',
            },
            {
              name: 'Пример меню 2',
              url: '#',
            },
            {
              name: 'Блог',
              url: '/blogs',
            },
            {
              name: 'Пример меню 3',
              url: '#',
            },
            {
              name: 'Новости',
              url: '/news',
            },
          ],
        },
        {
          name: 'Помощь',
          url: '#',
          links: [
            { name: 'Руководства пользователя', url: '#' },
            { name: 'Поддержка', url: '#' },
            { name: 'Сообщить об ошибке', url: '#' },
            { name: 'Обратная связь', url: '#' },
          ],
        },
      ],
    }
  },

  computed: {
    availableLocales() {
      return this.$store.state.locales
    },

    currentLocale() {
      return this.$i18n.locale
    },
  },

  methods: {
    openSignIn() {
      window.location.href = 'https:/ipakyulibank.uz/cabinet/login'
    },
    test(e) {
      const allMenuItems = document.querySelectorAll('[class^=menu__item--]')
      allMenuItems.forEach((el) => {
        if (e !== el.className) {
          el.classList.add('noActive')
        }
      })
    },
    uptest(e) {
      const allMenuItems = document.querySelectorAll('[class^=menu__item--]')
      allMenuItems.forEach((el) => {
        if (e !== el.className) {
          el.classList.remove('noActive')
        }
      })
    },

    changeLocales(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('changeLanguage', lang)
      // this.$i18n.i18next.changeLanguage(lang)
      // console.log(lang);
      // this.$router.push(this.switchLocalePath(lang));
    },
    goToMain() {
      if(this.$route.path !== '/') {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss">
nav {
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
}

.v-toolbar,
.v-toolbar__content {
  height: $header__height !important;
}

.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none !important;
  z-index: 99;
}

.dropdawn__menu {
  position: relative;
  display: flex;
  flex: 1 1 auto;
  padding: 0 10px 0 45px !important;
  list-style-type: none;

  li:not(:last-child) {
    margin-right: 30px;
    @include respond(lt) {
      margin-right: 15px;
    }
  }

  li {
    z-index: 100;
    p,
    a {
      margin: 0;
      font-family: $font_sf_bold;
      font-size: 18px;
      line-height: 21px;
      color: #666666;
      text-decoration: none;
      transition: 0.3s;
      i {
        color: #666666 !important;
      }

      @include respond(md) {
        font-size: 16px;
        line-height: 18px;
      }

      @include respond(lt) {
        font-size: 14px;
        line-height: 1;
      }
    }

    p {
      cursor: default;
    }

    ul {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      margin: 24px 0 0 0;
      padding: 10px;
      list-style-type: none;
      display: grid;
      grid-template-columns: auto auto;
      background: #ffffff;
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
      border-radius: 20px;

      transition: opacity 0.2s, visibility 0.2s;
      li {
        margin: 0 !important;
        a {
          display: block;
          border-radius: 10px;
          padding: 12px 22px;
          font-family: $font_sf_regular;
          color: #000000;
          white-space: nowrap;
          transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:hover {
            background-color: #f7f7f7;
            color: $primary_color;
          }
        }
      }
    }

    &:hover {
      ul {
        visibility: visible;
        opacity: 1;
      }
      a,
      p {
        color: #000000;
        i {
          color: #000000 !important;
        }
      }
    }

    &.noActive {
      a,
      p {
        color: rgba($color: #000000, $alpha: 0.2);
        i {
          color: rgba($color: #000000, $alpha: 0.2) !important;
        }
      }
    }
  }
  @media screen and (max-width: 885px) {
    display: none;
  }
}

.actions {
  display: flex;
  .locales {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 99;

    .curr__lang {
      // margin-bottom: -20px;
      &::before {
        display: none !important;
      }
      .theme--light.v-btn {
        color: none !important;
      }
      background: none;
      .v-btn__content {
        p {
          margin: 0;
          @include respond(lt) {
            font-size: 14px !important;
          }
        }
      }
    }

    @media screen and (max-width: 885px) {
      display: none;
    }
  }
  .signin,
  .signup {
    @media screen and (max-width: 885px) {
      display: none;
    }
  }
}

.signin,
.signup {
  text-transform: capitalize;
  font-size: 16px !important;
  line-height: 19px !important;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 15px;
  &:hover,
  &:focus {
    color: #ffffff;
  }

  @include respond(lt) {
    font-size: 14px !important;
    line-height: 1;
    height: 40px !important;
  }
}

.signin {
  @include respond(lt) {
    width: 90px !important;
  }

  &:hover {
    background: #333333 !important;
  }
}

.signup {
  border: 1px solid $primary_color;

  &:hover {
    background: $primary_color;
  }
  @include respond(lt) {
    width: 130px !important;
  }
}

.v-menu__content {
  width: 250px;
  border-radius: 15px;
  top: 130px !important;

  p {
    background: $primary_color;
    padding: 22px;
    margin: 0;
    font-size: 30px;
    font-family: $font_sf_bold;
    color: #ffffff;
  }

  .v-list-item.theme--light {
    border-radius: 10px;
    overflow: hidden;
    margin: 0 10px;
    cursor: pointer;
    .v-list-item__title {
      position: relative;

      i {
        position: absolute;
        right: 10px;
        color: #000;
      }
      &.isActive {
        color: $primary_color;
      }

      &.noActive {
        i {
          opacity: 0;
        }
      }
    }

    &:hover {
      background-color: rgba(#f0f0f0, 0.5);
      .noActive {
        font-family: $font_sf_bold !important;
        i {
          opacity: 1;
        }
      }
    }
  }
}
/**======================= Menu for Tablets ======================= */

.burger__menu {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: url('~/static/icons/burger.svg');
  display: none;
  // opacity: 0;1
  // visibility: hidden;

  @media screen and (max-width: 885px) {
    // opacity: 1;
    // visibility: visible;
    display: unset;
  }
}

.clome__menu {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: url('~/static/icons/close.svg'), #f0f0f0;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-color: $primary_color;
  }
}

.v-dialog--fullscreen {
  top: $header__height !important;
}

.v-dialog {
  box-shadow: none !important;
}

.v-card {
  position: relative !important;
}

.mobile__menu {
  padding: 0 35px;

  ul {
    list-style-type: none;
    padding: 0;
    display: inline-block;
    li {
      padding: 0 0 20px;

      a {
        text-decoration: none;
        color: #000000;
      }
      .primary__router {
        display: flex;
        align-items: center;
        margin: 0 0 12px 0;
        font-family: $font_sf_bold;
        font-size: 20px;
        line-height: 24px;

        .v-icon {
          color: #000000 !important;
        }

        @include respond(xs) {
          font-size: 16px;
          line-height: 18px;
        }
      }

      .current__locale {
        text-transform: uppercase;
      }

      ul {
        display: none;
        height: 0;
        transition: display 0.25s linear, height 3s linear;
        li {
          margin: 0 0 10px 15px;
          padding: 0;
          a {
            transition: all 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
            color: #666666;
            &:hover {
              color: $primary_color;
            }
          }

          button {
            min-width: 150px;
            text-align: left;
            padding: 5px 5px 5px 15px;
            border-radius: 5px;
            position: relative;

            &:hover {
              background-color: rgba(#f0f0f0, 0.5);
            }

            &.active {
              color: $primary_color;
              .v-icon {
                color: $primary_color;
              }
            }

            &.noActive {
              .v-icon {
                opacity: 0;
              }

              &:hover {
                font-family: $font_sf_bold;
                .v-icon {
                  opacity: 1;
                }
              }
            }

            .v-icon {
              position: absolute;
              top: 50%;
              right: 15px;
              transform: translateY(-50%);
              color: #000;
            }
          }
        }
      }

      &:hover {
        ul {
          display: unset;
          height: 100%;
        }
      }
    }
  }
}

.gateway {
  position: absolute;
  width: 100%;
  bottom: 148px;
  display: flex;
  justify-content: center;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
}

#logo {
  cursor: pointer;
}
</style>
