<template>
  <v-layout row wrap class="app__slider">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div
          v-for="s in sliders"
          :key="s.id"
          class="swiper-slide"
          :style="`background: ${s.bg_color}`"
        >
          <v-flex lg4>
            <img :src="s.img_url" alt="" />
          </v-flex>
          <v-flex lg7>
            <div class="slider__title">
              {{ s.title }}
            </div>
            <div class="slider__subtitle">
              {{ s.subtitle }}
            </div>
            <a :href="s.link">Подробнее <span></span> </a>
          </v-flex>
        </div>
      </div>
      <div class="slider__tools">
        <button class="prev__button"></button>
        <div class="swiper-pagination"></div>
        <button class="next__button"></button>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'AppSlider',
  data: () => ({
    swiper: null,
    sliders: [
      {
        id: 1,
        img_url: '/app/app-1.png',
        title: 'Онлайн Микрозайм в ipak yo’li mobile',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '#',
        bg_color: 'linear-gradient(165.85deg, #F6F6F6 3.26%, #E9FFEA 99.39%);',
      },
      {
        id: 2,
        img_url: '/app/cards.png',
        title: 'Онлайн Микрозайм в ipak yo’li mobile',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '#',
        bg_color: 'linear-gradient(260.91deg, #F6F6F6 1.44%, #F5E6FF 99.3%);',
      },
      {
        id: 3,
        img_url: '/app/online__loans.png',
        title: 'Онлайн Микрозайм в ipak yo’li mobile',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '#',
        bg_color: 'linear-gradient(81.9deg, #F6F6F6 4.08%, #F4FBFF 96.3%);',
      },
    ],
  }),

  mounted() {
    this.swiper = new this.$swiper('.mySwiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
      },
      navigation: {
        nextEl: '.next__button',
        prevEl: '.prev__button',
      },
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
    })
  },
}
</script>

<style lang="scss">
.app__slider {
  margin: 95px 0 60px;
}
.swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 300px;
  height: 300px;
  object-fit: cover;
  transition: all 0.25s linear;
}

.swiper-slide {
  width: 70%;
  height: 500px;
  border-radius: 40px;
  padding: 90px 50px;
  display: flex;
  justify-content: space-around;

  .slider__title {
    @include titles;
    font-weight: 800;
    text-transform: uppercase;
  }

  .slider__subtitle {
    margin-top: 40px;
    font-size: 22px;
    line-height: 26px;
  }

  .flex {
    position: relative;
  }

  a {
    position: relative;
    display: inline-block;
    bottom: 0;
    font-size: 22px;
    line-height: 24px;
    text-decoration: none;
    color: #000;
    padding: 12px 50px;
    border-radius: 10px;
    margin: 80px 0 0 -50px;
    transition: all 0.25s linear;

    span {
      display: inline-block;
      margin-left: 10px;
      width: 17px;
      height: 15px;
      mask: url('~/static/icons/arrow__right.svg');
      mask-size: 100%;
      mask-repeat: no-repeat;
      background: #000;
      transition: all 0.25s linear;
    }

    @include respond(xs) {
      margin-bottom: 20px !important;
    }
  }

  &:hover {
    img {
      transform: scale(1.2);
    }

    a {
      background: #000;
      color: #ffffff;
      span {
        background: #ffffff;
        transform: translateX(10px);
      }
    }
  }

  @include respond(md) {
    height: 400px;
    border-radius: 30px;
    padding: 30px 25px;

    &:hover {
      a {
        transform: translateX(35px);
      }
    }

    img {
      width: 220px;
      height: 220px;
    }

    .slider__title {
      font-size: 30px;
      line-height: 1.1;
    }

    .slider__subtitle {
      font-size: 18px;
      line-height: 18px;
    }

    a {
      font-size: 18px;
      line-height: 1;
      padding: 10px 35px;
      margin-left: -35px;
    }

    .flex:first-child {
      margin-right: 20px;
    }
  }

  @include respond(tb) {
    padding: 60px 50px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &:hover a {
      transform: translateX(0);
    }

    .slider__title {
      margin-top: 40px;
    }

    .slider__subtitle {
      margin-top: 25px;
    }
    a {
      margin: 50px 0 0 0px;
    }
  }

  @include respond(xs) {
    width: 60%;

    img {
      margin: 0 0 -20px 0;
    }
  }
}

.slider__tools {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  .prev__button,
  .next__button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #ededee;
    transition: all 0.25s linear;

    &:hover {
      background: $primary_color;
    }
  }

  .next__button {
    mask: url('~/static/icons/next.svg');
    mask-size: cover;
  }

  .prev__button {
    mask: url('~/static/icons/prev.svg');
    mask-size: cover;
  }

  .swiper-pagination {
    display: block;
    position: relative;
    margin: 0 25px;

    .swiper-pagination-bullet {
      margin: 0 10px;
      width: 12px;
      height: 12px;
    }

    .swiper-pagination-bullet-active {
      background: $primary_color;
    }
  }
}
</style>
