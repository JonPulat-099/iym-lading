<template>
  <section class="blogs">
    <h2 class="blogs__title text-center">Наш блог</h2>
    <p class="blogs__subtitle text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit.
    </p>

    <div class="blogs__tabs">
      <button class="ma-2">Что нового?</button>
      <button class="ma-2">Обучения</button>
      <button class="ma-2">Акции</button>
    </div>

    <div class="last__blogs">
      <div class="last__blogs--container">
        <img src="/blogs/blog_header.png" alt="" class="blog__background" />
        <div class="blog__cards container">
          <div
            v-for="(n, i) in top__blogs"
            :key="i"
            class="blog__card--1"
            @mouseover="openTextOfBlog(i)"
          >
            <h3 class="card__title" @click="$router.push('/news/123')">Заголовок примерного блока в две строки</h3>
            <div class="card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna (....)
            </div>
            <div class="card__bottom">
              <span class="date"> 12 Август 2021 </span>
              <a href=""> {{ n.category }} </a>
            </div>
          </div>
        </div>
      </div>

      <div class="child__blogs container">
        <div class="child__blog--header">
          <h3>Что нового?</h3>
          <a href="#"> Посмотреть все <span></span> </a>
        </div>

        <div class="child__blog--content">
          <card-group :items="news"></card-group>
        </div>
      </div>

      <div class="child__blogs container">
        <div class="child__blog--header">
          <h3>Обучения</h3>
          <a href="#"> Посмотреть все <span></span> </a>
        </div>

        <div class="child__blog--content">
          <card-group :items="learn"></card-group>
        </div>
      </div>

      <div class="child__blogs container">
        <div class="child__blog--header">
          <h3>Акции</h3>
          <a href="#"> Посмотреть все <span></span> </a>
        </div>

        <div class="child__blog--content">
          <card-group :items="promotion"></card-group>
        </div>
      </div>

      <div class="reklama__blog">
        <img src="/blogs/img_reklama.png" alt="" />
        <p class="reklama__text--1">
          Не пропустите обновления, посмотрите все посты в подборке
        </p>
        <p class="reklama__text--2">Августа 2021</p>
        <button>Посмотреть</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppBlog',
  components: {
    cardGroup: () => import('@/components/card/CardGroup'),
  },
  filters: {
    truncateWord: (val) => {
      let res
      if (val.length > 120) {
        res = val.substr(0, 120) + '...'
        return res
      }
      return val
    },
  },
  data: () => ({
    news: [
      {
        id: 1,
        title: 'Заголовок примерного блока в две строки 2',
        text: 'Lorem impsum test test test lorem lorem lorem aut set, map.',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/news__pic.png',
        category: 'Что нового',
      },
      {
        id: 2,
        title: 'Заголовок примерного блока в две строки 2',
        text: 'Lorem impsum test test test lorem lorem lorem aut set, map.',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/news__pic.png',
        category: 'Что нового',
      },
      {
        id: 3,
        title: 'Заголовок примерного блока в две строки 2',
        text: 'Lorem impsum test test test lorem lorem lorem aut set, map.',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/news__pic.png',
        category: 'Что нового',
      },
    ],
    learn: [
      {
        id: 1,
        title: 'Заголовок примерного блока в две строки 2',
        text: 'Lorem impsum test test test lorem lorem lorem aut set, map.',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/learn.png',
        category: 'Обучения',
      },
      {
        id: 2,
        title: 'Заголовок примерного блока в две строки 2',
        text: 'Lorem impsum test test test lorem lorem lorem aut set, map.',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/learn.png',
        category: 'Обучения',
      },
      {
        id: 3,
        title: 'Заголовок примерного блока в две строки 2',
        text: 'Lorem impsum test test test lorem lorem lorem aut set, map.',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/learn.png',
        category: 'Обучения',
      },
    ],
    promotion: [
      {
        id: 1,
        title: 'Заголовок примерного блока в две строки 2',
        text: 'Lorem impsum test test test lorem lorem lorem aut set, map.',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/sale.png',
        category: 'Акции',
      },
      {
        id: 2,
        title: 'Заголовок примерного блока в две строки 2',
        text: 'Lorem impsum test test test lorem lorem lorem aut set, map.',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/sale.png',
        category: 'Акции',
      },
      {
        id: 3,
        title: 'Заголовок примерного блока в две строки 2',
        text: 'Lorem impsum test test test lorem lorem lorem aut set, map.',
        date: '20 Ноябрь 2021',
        url: '#',
        img_url: '/news/sale.png',
        category: 'Акции',
      },
    ],

    top__blogs: [
      {
        id: 1,
        title: 'Заголовок примерного блока в две строки',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
        date: ' 09 Август 2021',
        category: 'Что нового',
        img_url: '/blogs/blog_header.png',
      },
      {
        id: 2,
        title: 'Заголовок примерного блока в две строки',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
        date: ' 12 Август 2021',
        category: 'Обучения',
        img_url: '/blogs/learn.png',
      },
      {
        id: 3,
        title: 'Примерный заголовок 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna (....)',
        date: ' 21 Август 2021',
        category: 'Акция ',
        img_url: '/blogs/promotion.png',
      },
    ],
  }),

  methods: {
    openTextOfBlog(id) {
      const topBlogs = document.querySelectorAll('.blog__card--1')
      const bgImageHeader = document.querySelector('.blog__background')
      if (this.top__blogs[id].img_url)
        bgImageHeader.src = this.top__blogs[id].img_url
      topBlogs.forEach((el, i) => {
        if (i === id) {
          el.classList.add('isActive')
        } else {
          el.classList.remove('isActive')
        }
      })
    },
  },
}
</script>

<style lang="scss" src="~/assets/scss/_blogs.scss"></style>
