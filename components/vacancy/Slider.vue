<template>
  <section class="slider">
    <div class="swiper vacancy_slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="slider__photos" src="/vacancy/slider-3.png" alt="" />
          <p class="slider__text">Lorem, ipsum dolor.</p>
        </div>

        <div class="swiper-slide">
          <img class="slider__photos" src="/vacancy/slider-2.png" alt="" />
          <p class="slider__text">Lorem, ipsum dolor.</p>
        </div>

        <div class="swiper-slide">
          <img class="slider__photos" src="/vacancy/slider-1.png" alt="" />
          <p class="slider__text">Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div class="actions">
        <button class="slider__prev">
          <v-icon color="#000000"> mdi-arrow-left </v-icon>
        </button>
        <button class="slider__next">
          <v-icon color="#000000"> mdi-arrow-right </v-icon>
        </button>
      </div>
      <!-- <div class="slider__navigation"> -->
      <div class="swiper-pagination"></div>
      <!-- </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'VacancySlider',
  data: () => ({
    windowWidth: 0,
  }),
  mounted() {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })

    this.swiper = new this.$swiper('.vacancy_slider', {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 180,
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
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
.slider {
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  .actions {
    position: absolute;
    width: 100%;
    max-width: 1600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15;
    display: flex;
    justify-content: space-between;
    padding: 0 130px 0 140px;

    @include respond(md) {
      padding: 0 80px;
    }

    @include respond(lt) {
      padding: 0 30px;
    }

    @include respond(tb) {
      padding: 0;
    }

    .slider__prev,
    .slider__next {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #ffffff;

      @include respond(tb) {
        width: 40px;
        height: 40px;
      }
    }
  }
}

.vacancy_slider {
  width: 100vw;
  max-width: 1600px;
  height: 500px;
  margin: 0 auto;

  @include respond(tb) {
    height: 400px;
  }

  @include respond(sm) {
    height: 300px;
  }

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide img,
  .swiper-slide {
    width: 100%;
    height: 400px;
    object-fit: fill;
    // overflow: hidden;
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    @include respond(tb) {
      height: 300px;
    }

    @include respond(sm) {
      height: 250px;
    }

    @include respond(sm) {
      height: 220px;
    }
  }

  .swiper-slide-active img {
    transition: 0.4s;
    transform: scaleY(1.2) scaleX(1.4);

    @include respond(lg) {
      transform: scaleX(1.5) scaleY(1.2);
    }

    @include respond(lt) {
      transform: scaleX(1.8) scaleY(1.2);
    }

    @include respond(tb) {
      transform: scaleX(2.2) scaleY(1.2);
    }

    @include respond(sm) {
      transform: scaleX(2.5) scaleY(1.2);
    }

    @include respond(xs) {
      transform: scaleX(3.1) scaleY(1.2);
    }

    @media screen and (max-width: 400px) {
      transform: scaleX(3.5) scaleY(1.2);
    }
  }

  .slider__text {
    position: relative;
    bottom: -89px;
    text-align: center;
    color: rgba(#000000, 0.8);
    @include subtitle;

    @include respond(tb) {
      width: 200%;
      left: 50%;
      transform: translate(-50%);
      // padding: 0 -60px !important;
    }
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    .slider__text {
      display: none;
    }
  }
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 60px !important;
  font-family: $font_sf_bold;
  font-weight: 800;
}
</style>
