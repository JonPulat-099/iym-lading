<template>
  <v-layout
    row
    wrap
    justify-space-between
    align-center
    class="services container"
  >
    <v-flex lg4 class="text-center" data-aos="fade-up-right">
      <img
        :src="componentImg"
        min-width="320"
        min-height="560"
        alt=""
        class="mb-8"
      />
    </v-flex>
    <v-flex lg6 data-aos="fade-up-left">
      <h2 class="service__headers font-weight-bold">{{ services.title }}</h2>
      <ul class="services__list">
        <li v-for="s in services.list" :key="s" class="title">
          <img src="/icons/check.svg" alt="" /> {{ s }}
        </li>
      </ul>
      <a href="#" class="more"
        >Перейти ко всем возможностям <span class="router__icon"></span>
      </a>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'AppServices',
  props: {
    componentImg: {
      type: String,
      default: '/app/bank__service.png',
    },
    services: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/default/mixins.scss';

.services {
  .service__headers {
    @include titles;
  }

  .services__list {
    list-style-type: none;
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    list-style-position: inside;
    padding: 0;
    margin: 50px 0 0 0;

    @include respond(sm) {
      -webkit-columns: 1;
      -moz-columns: 1;
      columns: 1;
    }

    li {
      line-height: 1 !important;
      margin: 0 0 20px 0;
      font-weight: normal;

      @include respond(xs) {
        font-size: 16px !important;
      }
    }
  }

  .more {
    @include more__info;
  }

  .v-image {
    margin: 0 auto;
  }

  @include respond(sm) {
    .lg3 .v-image {
      width: 218px;
    }
  }
}
</style>
