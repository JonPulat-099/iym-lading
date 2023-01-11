<template>
  <section class="main">
    <!-- <loader/> -->
    <div class="section__header">
      <v-layout row justify-space-between align-center class="container">
        <v-flex lg6>
          <p class="font-weight-bold">
            Управлять своими финансами так просто!
          </p>
          <p class="title">
            Ipak Yo’li Mobile - это новый способ безопасно управлять своими
            деньгами, оплатить необходимые платежи, обменивать деньги без
            скрытых комиссий.
          </p>
          <p class="title mb-6">
            Отсканируйте QR-код что-бы скачать приложения или нажмите на иконку
            магазина
          </p>
          <article>
            <v-layout row wrap class=" my-3">
              <v-flex>
                <img src="/icons/qr_code.png" alt="" />
              </v-flex>
              <v-flex align-center justify-center>
                <app-store></app-store>
                <play-market></play-market>
              </v-flex>
            </v-layout>
          </article>
        </v-flex>
        <v-flex lg5 text-center>
          <img
            src="/app/with__cards.png"
            alt=""
            class="app_with--cards"
          />
        </v-flex>
      </v-layout>
    </div>
    <div class="container how__to--start">
      <header class="text-center">Как начать пользоваться?</header>
      <v-layout row wrap justify-space-around>
        <v-flex lg3 class="text-center" data-aos="fade-up">
          <div class="block text-center">
            <img src="/icons/download.svg" alt="" class="block__icon" />
            <span class="number text-center font-weight-bold">1</span>
          </div>
          <p>Загрузите приложение с App Store или Google Play</p>
        </v-flex>
        <v-flex lg3 class="text-center" data-aos="fade-up">
          <div class="block text-center">
            <img src="/icons/login.svg" alt="" class="block__icon" />
            <span class="number text-center font-weight-bold">2</span>
          </div>
          <p>
            Войдите, используя логин и пароль. Нет учетки?
            <a href="#">Зарегистрируйтесь</a> легко и быстро
          </p>
        </v-flex>
        <v-flex lg3 class="text-center" data-aos="fade-up">
          <div class="block text-center">
            <img src="/icons/smile.svg" alt="" class="block__icon" />
            <span class="number text-center font-weight-bold">3</span>
          </div>
          <p>
            Пользуйтесь приложением с комфортом, переводы, платежи, конверсия и
            многое другое в Вашем телефоне
          </p>
        </v-flex>
        <v-flex lg3 class="text-center" data-aos="fade-up">
          <div class="block text-center">
            <img src="/icons/eyes.svg" alt="" class="block__icon" />
            <span class="number text-center font-weight-bold">4</span>
          </div>
          <p>Следите за обновлениями, мы продолжаем работать над улучшениями</p>
        </v-flex>
      </v-layout>
    </div>
    <app-slider ></app-slider>
    <app-services
      :services="services_bank"
      component-img="/app/bank__service.png"
    ></app-services>
    <div class="mobile__transfer">
      <v-layout row wrap class="container" justify-space-between align-center>
        <v-flex lg6 xs6 data-aos="fade-up-right">
          <div class="transfer">
            <h2 class="transfer__title">
              С Ipak Yo’li Mobile, экономьте на переводах !
            </h2>
            <ul>
              <li v-for="t in transfer" :key="t.protsent">
                <p class="protsent">{{ t.protsent }} <span>%</span></p>
                <p class="subtitle">{{ t.definition }}</p>
              </li>
            </ul>
            <a href="#" class="more">
              Перейти ко всем возможностям <span class="router__icon"></span>
            </a>
          </div>
        </v-flex>
        <v-flex lg4 xs4 data-aos="fade-up-left">
          <v-img
            src="/app/transfer.png"
            max-width="365"
            max-height="560"
            class="app__transfer mb-6"
          />
        </v-flex>
      </v-layout>
    </div>
    <app-services
      :services="services_order"
      component-img="/app/useful__services.png"
    ></app-services>
    <topServices />
    <div class="container facilities">
      <h1 font-weigt-bold>У нас выгодно и удобно!</h1>
      <v-layout row wrap justify-space-between>
        <v-flex v-for="i in servises" :key="i.title" data-aos="flip-up">
            <p class="title">{{ i.title }}</p>
            <p class="definition">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              consectetur. Voluptate reprehenderit asperiores repellat nisi
              inventore! Corporis, fugiat.
            </p>
            <div>
              <a href=""> Подробнее <span></span> </a>
              <img :src="i.img_url" alt="" />
            </div>
        </v-flex>
      </v-layout>
    </div>
    <div class="container download__apps">
      <h2>
        Скачайте приложения Ipak Yo’li Mobile и получите больше возможностей
      </h2>
      <v-layout row wrap justify-center>
        <app-store></app-store>
        <play-market></play-market>
      </v-layout>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    appSlider: () => import('@/components/main/Slider'),
    appServices: () => import('@/components/main/Services'),
    appStore: () => import('@/components/markets/AppStore'),
    playMarket: () => import('@/components/markets/PlayMarket'),
    topServices: () => import('@/components/main/TopServices'),
    // loader: () => import("@/components/Loader")
  },
  data() {
    return {
      rating: 4.5,
      loading: true,
      transfer: [
        {
          protsent: 0,
          definition: 'Между картамиIpak Yo’li Banki',
        },
        {
          protsent: 0.5,
          definition: 'На карту других банков',
        },
      ],
      servises: [
        {
          title: 'QR оплата',
          img_url: '/icons/qr__payment.svg',
        },
        {
          title: 'NFC оплата',
          img_url: '/icons/nfc__payment.svg',
        },
        {
          title: 'Cбор средств',
          img_url: '/icons/fundraiser.svg',
        },
        {
          title: 'Мониторинг платежей',
          img_url: '/icons/monitoring.svg',
        },
        {
          title: 'Мультисессионность',
          img_url: '/icons/multi__sessions.svg',
        },
        {
          title: 'Заблокировать карту',
          img_url: '/icons/block__card.svg',
        },
      ],
      services_bank: {
        title: 'Все банковские услуги всегда под рукой!',
        list: [
          'NFC оплата',
          'Заказать карту',
          'Открыть виртуальную карту',
          'Получить кредит',
          'Открыть вклад',
          'Открыть счет',
          'Кошелёк',
          'Банк на карте',
          'Калькулятор кредита',
          'Мониторинг платежа',
        ],
      },

      services_order: {
        title: 'Закажите карту прямо к себе домой',
        list: [
          'Uzcard',
          'Humo',
          'Humo Virtual',
          'Visa Exchange',
          'Visa Start',
          'Visa Virtual',
          'Visa Infinity',
          'Visa Platinum Light',
          'Visa Platinum Black',
          'UnionPay Classic',
          'UnionPay Gold',
          'UnionPay Exchange',
          'Master card Platinum Light',
          'Master card Platinum Black',
        ],
      },
    }
  },

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
}
</script>

<style lang="scss" src="@/assets/scss/_main.scss"></style>
