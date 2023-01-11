<template>
  <div class="vacancies">
    <div class="vacancies__header container">
      <v-layout row wrap justify-space-between align-center>
        <v-flex lg6 xs6>
          <h2 class="header__title">Добро пожаловать в команду</h2>
          <p class="header__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-flex>
        <v-flex lg6 xs6 class="text-center">
          <img src="/vacancy/employee.png" alt="" class="employee" />
        </v-flex>
      </v-layout>
    </div>
    <div class="vacancies__content text-center">
      <div class="content container">
        <div class="header__title">Мы гарантируем Вам</div>
        <v-layout row justify-space-around align-center>
          <v-flex lg4 xs4 data-aos="fade-up-right">
            <img src="/about_us/career.png" alt="" />
            <h2 class="header">Карьерный рост</h2>
            <p class="definition">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </v-flex>
          <v-flex lg4 xs4 data-aos="fade-up">
            <img src="/about_us/experience.png" alt="" />
            <h2 class="header">Безграничный опыт</h2>
            <p class="definition">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </v-flex>
          <v-flex lg4 xs4 data-aos="fade-up-left">
            <img src="/about_us/wage.png" alt="" />
            <h2 class="header">Высокая заработная плата</h2>
            <p class="definition">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <vacancy-slider></vacancy-slider>
    <div class="steps" data-aos="fade-up">
      <div class="container steps__content">
        <div class="step">
          <h2 class="step__title">Step 1</h2>
          <p class="step__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit
            nobis ut neque magnam, dolorum odit quas amet voluptates! Magni
            cupiditate sed quod corporis voluptatem, accusamus iusto doloribus
            alias temporibus!
          </p>
        </div>
        <div class="step">
          <h2 class="step__title">Step 2</h2>
          <p class="step__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit
            nobis ut neque magnam, dolorum odit quas amet voluptates! Magni
            cupiditate sed quod corporis voluptatem, accusamus iusto doloribus
            alias temporibus!
          </p>
        </div>
        <div class="step">
          <h2 class="step__title">Step 3</h2>
          <p class="step__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit
            nobis ut neque magnam, dolorum odit quas amet voluptates! Magni
            cupiditate sed quod corporis voluptatem, accusamus iusto doloribus
            alias temporibus!
          </p>
        </div>
        <div class="step">
          <h2 class="step__title">Step 4</h2>
          <p class="step__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit
            nobis ut neque magnam, dolorum odit quas amet voluptates! Magni
            cupiditate sed quod corporis voluptatem, accusamus iusto doloribus
            alias temporibus!
          </p>
        </div>
      </div>
    </div>

    <div class="vacancies__list container">
      <h2 class="list__title text-center" data-aos="flip-up">Открытые вакансии</h2>

      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in vacancies" :key="i" data-aos="fade-up">
          <v-expansion-panel-header> {{ item.name }}  <span class="count"> {{ item.count }} ваканции </span>  </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ul>
              <li v-for="(v, k) in item.list" :key="k"><a href="#"> {{ v }} </a></li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppVacancy',
  components: {
    vacancySlider: () => import('@/components/vacancy/Slider'),
  },
  data: () => ({
    vacancies: [
      {
        name: 'HR Manager',
        count: 6,
        list: [
          'Примерная ваканция 1',
          'Примерная ваканция 2',
          'Примерная ваканция 3',
          'Примерная ваканция 4',
          'Примерная ваканция 5',
          'Примерная ваканция 6'
        ]
      },
      {
        name: 'Frontend Developer',
        count: 6,
        list: [
          'Примерная ваканция 1',
          'Примерная ваканция 2',
          'Примерная ваканция 3',
          'Примерная ваканция 4',
          'Примерная ваканция 5',
          'Примерная ваканция 6'
        ]
      },
      {
        name: 'Product Manager',
        count: 1,
        list: [
          'Примерная ваканция 1',
        ]
      },
      {
        name: 'Copywriter',
        count: 1,
        list: [
          'Примерная ваканция 1',
          'Примерная ваканция 2',
          'Примерная ваканция 3',
          'Примерная ваканция 4',
        ]
      },
      {
        name: 'SMM',
        count: 1,
        list: [
          'Примерная ваканция 1',
          'Примерная ваканция 2',
          'Примерная ваканция 3',
          'Примерная ваканция 4',
          'Примерная ваканция 5',
        ]
      }
    ]
  })
}
</script>

<style lang="scss" src="~/assets/scss/_vacancies.scss"></style>
