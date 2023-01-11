<template>
  <section class="app__footer">
    <div class="footer__top tex__support text-center">
      <h1 class="support__title px-2">У вас есть вопросы?</h1>
      <p class="subtitle px-3">Круглосуточная информационная служба 24/7</p>
      <v-layout row wrap class="container" justify-space-around>
        <v-flex lg3>
          <img src="/icons/phone.svg" alt="" />
          <p>78 140 69 00</p>
        </v-flex>
        <v-flex lg3>
          <img src="/icons/phone.svg" alt="" />
          <p>78 140 78 00</p>
        </v-flex>
        <v-flex lg3>
          <img src="/icons/telegram.svg" alt="" />
          <p><a href="https://t.me/ipaksupport"> @ipaksupport </a></p>
        </v-flex>
      </v-layout>
    </div>
    <div class="footer__middle container">
      <article v-if="windowWidth > 1024" class="left__side">
        <div class="services">
          <h2>О сервисе</h2>
          <ul>
            <li v-for="(s, i) in services" :key="i">
              <a :href="s.url"> {{ s.name }} </a>
            </li>
          </ul>
        </div>
        <div class="team">
          <h2>Команда</h2>
          <ul>
            <li v-for="(t, i) in team" :key="i">
              <a href="#"> {{ t }} </a>
            </li>
          </ul>
        </div>
        <div class="support">
          <h2>Помощь</h2>
          <ul>
            <li v-for="(s, i) in support" :key="i">
              <a href="#"> {{ s }} </a>
            </li>
          </ul>
        </div>
      </article>
      <article v-else class="left__side--mobile">
        <v-expansion-panels accordion popout flat>
          <v-expansion-panel>
            <v-expansion-panel-header> О сервисе </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul>
                <li v-for="(s, i) in services" :key="i">
                  <a :href="s.url"> {{ s.name }} </a>
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Команда </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul>
                <li v-for="(t, i) in team" :key="i">
                  <a href="#"> {{ t }} </a>
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Помощь </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul>
                <li v-for="(s, i) in support" :key="i">
                  <a href="#"> {{ s }} </a>
                </li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </article>
      <article class="right__side">
        <h2>Мы в соц сетях</h2>
        <ul>
          <li v-for="(l, i) in social_networks" :key="i">
            <a :class="`${l}`" href="#"></a>
          </li>
        </ul>
      </article>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <p class="font-weight-bold">
          © 1990–2021 Акционерный инновационный коммерческий банк «Ипак Йули»
          Все права защищены.
        </p>
        <p>
          *При использовании материалов сайта ссылка на www.ipakyulibank.uz
          обязательна
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      services: [
        { name: 'Все возможности', url: '#' },
        { name: 'Новости', url: '/news' },
        { name: 'Акции', url: '#' },
        { name: 'Блог', url: '#' },
        { name: 'Безопасность', url: '#' },
        { name: 'Ваши идеи и предложения', url: '#' },
      ],
      team: ['О нас', 'Ваканции', 'Блог'],
      support: [
        'Руководства пользователя',
        'Поддержка',
        'Сообщить об ошибке',
        'Обратная связь',
      ],
      social_networks: [
        'facebook',
        'instagram',
        'telegram',
        'tiktok',
        'linkedin',
      ],
      windowWidth: 0,
    }
  },

  mounted() {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss">
.app__footer {
  width: 100%;
  margin: 60px 0 0 0;
}

.tex__support {
  padding: 60px 0;
  background: $primary_gradient;
  margin: 0 0 40px 0;

  h1.support__title {
    @include titles;
    margin: 0 0 20px 0;
  }

  .subtitle {
    @include subtitle;
    margin: 0 0 26px 0;
  }

  .flex {
    display: flex;
    align-items: center;
    p,
    a {
      font-family: $font_sf_bold;
      font-weight: 800;
      font-size: 30px;
      line-height: 36px;
      letter-spacing: -0.02em;
      margin: 0;
      transition: all 0.3s linear;
      cursor: default;
      text-decoration: none;

      &:hover {
        color: $primary_color;
        text-decoration: underline;
      }
    }
    a {
      color: rgba(0, 0, 0, 0.87);
      cursor: pointer;
    }

    img {
      margin: 0 10px 0 0;
    }
  }

  .layout {
    @include respond(tb) {
      flex-direction: column !important;
      align-items: center !important;

      .flex {
        flex-direction: column;
        margin: 0 0 20px 0;
      }
    }
  }
}

.footer__middle {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 50px !important;

  @media screen and (max-width: 834px) {
    flex-direction: column;
    .left__side--mobile {
      margin-bottom: 40px;
    }

    .right__side {
      margin-bottom: 40px;
      padding: 0 0 0 16px;
    }
  }

  h2 {
    margin: 0 0 30px 0;
    font-family: $font_sf_bold;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }

  .left__side {
    display: flex;

    div {
      width: 215px;
    }

    .team {
      margin: 0 30px;
    }

    @include respond(sm) {
      .team {
        margin: 0;
      }
    }
  }

  [class^='left__side'] {
    ul {
      padding: 0;

      li {
        list-style-type: none;
        display: block;
        a {
          text-decoration: none;
          font-family: $font_sf_regular;
          font-size: 16px;
          line-height: 30px;
          color: #000000;
          transition: all 0.3s linear;
          &:hover {
            font-family: $font_sf_bold;
          }
        }
      }
    }
  }

  .right__side {
    ul {
      padding: 0;
      li {
        list-style-type: none;
        display: inline-block;
        a {
          width: 40px;
          height: 40px;
          display: block;
          background: #000;
          margin: 0 5px;
          transition: all 0.3s linear;

          &:hover {
            transform: translateY(-10px);
          }

          &.facebook {
            background: url('~/static/sc_networks/facebook.svg');
          }

          &.instagram {
            background: url('~/static/sc_networks/instagram.svg');
          }

          &.tiktok {
            background: url('~/static/sc_networks/tiktok.svg');
          }

          &.telegram {
            background: url('~/static/sc_networks/tg.svg');
          }

          &.linkedin {
            background: url('~/static/sc_networks/linkedin.svg');
          }
        }

        &:first-child a {
          margin: 0 5px 0 0;
        }
      }
    }
  }
}

.left__side--mobile {
  .v-expansion-panel-header__icon {
    margin: 0 !important;
  }

  .v-expansion-panel-header {
    font-family: $font_sf_bold !important;
    font-size: 18px !important;
    padding: 14px 0 !important;
    width: auto !important;
  }

  .v-icon {
    color: #000000 !important;
  }

  .v-expansion-panel-content {
    width: auto !important;
  }
}

.footer__bottom {
  margin: 40px 0 0 !important;
  background-color: #f6f6f6 !important;
  padding: 20px 0;

  p {
    margin: 0;
  }
}
</style>
