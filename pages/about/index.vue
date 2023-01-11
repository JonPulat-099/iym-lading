<template>
  <section class="about__us">
    <div class="about__us--header container text-center">
      <h2 class="header__title">О нас</h2>
      <p class="header__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        itaque reiciendis praesentium dicta doloremque, laboriosam molestias
        doloribus hic eligendi ipsa quo maxime et assumenda corrupti illo
        deleniti. Eaque recusandae nesciunt a officia, cumque veniam quod quam
        temporibus laboriosam ex voluptates!
      </p>
    </div>
    <div class="our__mission">
      <div class="mission container text-center">
        <div class="photos">
          <div class="photo--1" data-aos="fade-down-right">
            <img src="/about_us/about_us-1.png" alt="" />
          </div>
          <div class="photo--2" data-aos="fade-down-left">
            <img src="/about_us/about_us-2.png" alt="" width="196" height="196" />
          </div>
          <div class="photo--3" data-aos="fade-up-right">
            <img src="/about_us/about_us-3.png" alt="" width="196" height="196" />
          </div>
          <div class="photo--4" data-aos="fade-up-left">
            <img src="/about_us/about_us-4.png" alt="" />
          </div>
        </div>
        <h2 class="mission--title" data-aos="fade-up">
          Наша миссия - предоставить каждому доступ к простым и действенным
          финансовым операциям.
        </h2>
        <p class="mission--subtitle" data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <div class="about_us--content">
      <v-layout row wrap class="container" justify-space-between align-center>
        <v-flex lg4 xs4 class="text-center" data-aos="fade-up-right">
          <img src="/app/app-1.png" alt="" />
        </v-flex>
        <v-flex lg7 xs7 data-aos="fade-up-left">
          <h2 class="content__title">Не выходя из дома</h2>
          <p class="content__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-flex>

        <v-flex lg7 xs7 data-aos="fade-up-right">
          <h2 class="content__title">Выгодная конверсия</h2>
          <p class="content__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-flex>
        <v-flex lg4 xs4 class="text-center" data-aos="fade-up-left">
          <img src="/app/app-2.png" alt="" />
        </v-flex>

        <v-flex lg4 xs4 class="text-center" data-aos="fade-up-right">
          <img src="/app/app-3.png" alt="" />
        </v-flex>
        <v-flex lg7 xs7 data-aos="fade-up-left">
          <h2 class="content__title">Выдача наличных</h2>
          <p class="content__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-flex>
      </v-layout>
    </div>

    <div class="join__us container">
      <h2 class="join__us--title text-center">
        Присоединяйтесь к нашей команде
      </h2>
      <v-layout row wrap justify-space-around class="text-center">
        <v-flex v-for="(p,i) in team" :key="i" lg4 xs4 data-aos="flip-left">
          <img :src="p.img_url" alt="" class="avatar" />
          <p class="fullname"> {{ p.fullname }} </p>
          <p class="job__title"> {{ p.job_title }} </p>
        </v-flex>
      </v-layout>

      <button class="more__vacancy" @click="$router.push('/vacancy')"> Показать открытые ваканции </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
      return {
          team: [
              {
                  fullname: 'Abdusalamov Abduvoris',
                  job_title: 'Председатель IT отдела',
                  img_url: '/about_us/team/head_it_department.png'
              },
              {
                  fullname: 'Turkmenov Zafar',
                  job_title: 'Team lead, Senior developer',
                  img_url: '/about_us/team/team_lead.png'
              },
              {
                  fullname: 'Kayumov Abdulfotikh',
                  job_title: 'Project Manager',
                  img_url: '/about_us/team/project_manager.png'
              },
              {
                  fullname: 'Sadikov Saidakbar',
                  job_title: 'Senior back-end developer',
                  img_url: '/about_us/team/backend_developer-01.png'
              },
              {
                  fullname: 'Usmonov G`ayrat',
                  job_title: 'Senior back-end developer',
                  img_url: '/about_us/team/backend_developer-02.png'
              },
              {
                  fullname: 'Salimov Islombek',
                  job_title: 'Senior back-end developer',
                  img_url: '/about_us/team/backend_developer-03.png'
              },
              {
                  fullname: 'Ibodillayev Ilhom',
                  job_title: 'Senior front-end developer',
                  img_url: '/about_us/team/frontend_developer-01.png'
              },
              {
                  fullname: 'Abdusamatovov Shokhrukhbek',
                  job_title: 'Android Developer',
                  img_url: '/about_us/team/android_developer.png'
              },
              {
                  fullname: 'Avazov Abror',
                  job_title: 'Software tester',
                  img_url: '/about_us/team/software__tester.png'
              },
              {
                  fullname: 'Aminjonov Saydakram',
                  job_title: 'Junior back-end developer',
                  img_url: '/about_us/team/backend_developer-04.png'
              },
              {
                  fullname: 'Chanishev Iskander',
                  job_title: 'DevOps engineer',
                  img_url: '/about_us/team/devops__engineer-01.png'
              },
              {
                  fullname: 'Tursunov Jamshid',
                  job_title: 'DevOps engineer',
                  img_url: '/about_us/team/devops__engineer-02.png'
              },
              {
                  fullname: 'Qobilov Furqat',
                  job_title: 'UX / UI designer',
                  img_url: '/about_us/team/designer.png'
              }
          ]
      }
  }
}
</script>

<style lang="scss" src="~/assets/scss/_about.scss"></style>
