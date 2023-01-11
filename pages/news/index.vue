<template>
  <div class="section__news">
    <div class="news__header">
      <div class="header__block--1">
        <h3>Заголовок примерного блока в две строки 1</h3>
        <p class="block__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          consectetur incididunt ut labore et eiusmod tempor Lorem ipsum dolor
          sit amet, consectetur incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do consectetur incididunt ut labore
          et eiusmod tempor Lorem ipsum dolor sit amet, consectetur incididunt
          ut labore et dolore magna consectetur incididunt ut labore et dolore
          Lorem ipsum dolor incididunt ut labore et dolore magna (....)
        </p>
        <p class="block__info">
          <span> Сегодня </span><a href="#"> Что нового </a>
        </p>
      </div>
      <div class="header__block--2">
        <div class="block__content">
          <img src="korona__logo.svg" alt="" />
          <h3>KoronaPay</h3>
        </div>
        <p>Денежные переводы Золотая Корона</p>
      </div>
      <div class="header__block--3">
        <img src="/news/korona__with__person.png" alt="" />
      </div>
    </div>

    <div class="more__news">
      <div class="news__list container">
        <div class="news__path">
          <a href="#"> Главная </a>
          <a href="#"> / блог </a>
          <a href="#"> / Что нового </a>
        </div>
        <card-group :items="news"></card-group>

        <v-btn class="view__more"> Посмотреть еще </v-btn>
      </div>

      <app-card class="card__app"></app-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNews',
  components: {
    cardGroup: () => import('@/components/card/CardGroup'),
    appCard: () => import('@/components/card/CardApp'),
  },
  data: () => ({
    loading: true,
    news: [
      {
        id: 1,
        title: 'Заголовок примерного блока в две строки 2',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/news__pic.png',
        category: 'Что нового',
        text: 'Lorem ipsum texts. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
      },
      {
        id: 2,
        title: 'Заголовок примерного блока в две строки 2',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/news__pic.png',
        category: 'Что нового',
        text: 'Lorem ipsum texts. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
      },
      {
        id: 3,
        title: 'Заголовок примерного блока в две строки 2',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/news__pic.png',
        category: 'Что нового',
        text: 'Lorem ipsum texts. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
      },
      {
        id: 4,
        title: 'Заголовок примерного блока в две строки 2',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/learn.png',
        category: 'Обучения',
        text: 'Lorem ipsum texts. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
      },
      {
        id: 5,
        title: 'Заголовок примерного блока в две строки 2',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/learn.png',
        category: 'Обучения',
        text: 'Lorem ipsum texts. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
      },
      {
        id: 6,
        title: 'Заголовок примерного блока в две строки 2',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/learn.png',
        category: 'Обучения',
        text: 'Lorem ipsum texts. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
      },
      {
        id: 7,
        title: 'Заголовок примерного блока в две строки 2',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/sale.png',
        category: 'Акции',
        text: 'Lorem ipsum texts. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
      },
      {
        id: 8,
        title: 'Заголовок примерного блока в две строки 2',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/sale.png',
        category: 'Акции',
        text: 'Lorem ipsum texts. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
      },
      {
        id: 9,
        title: 'Заголовок примерного блока в две строки 2',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/sale.png',
        category: 'Акции',
        text: 'Lorem ipsum texts. amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
      },
    ],
  }),

  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },
}
</script>

<style lang="scss" src="~/assets/scss/_news.scss"></style>
