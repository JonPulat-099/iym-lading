<template>
  <div class="top__services container">
    <v-layout row wrap>
      <v-flex class="text-center" data-aos="fade-up">
        <img src="/top_services/korona.png" alt="" />
        <div class="service__title">Денежные переводы “Золотая корона”</div>
        <div class="service__subtitle">
          Ваши переводы долетят без остановок Отправьте свой первый перевод
          вместе с Ipak Yo’li Mobile
        </div>
        <a href="#" class="more"> Подробнее </a>

        <span class="fly--4"></span>
        <span class="fly--3"></span>
        <span class="fly--2"></span>
        <span class="fly--1"></span>
      </v-flex>

      <v-flex class="text-center" data-aos="fade-up">
        <div class="images">
          <img src="/top_services/globus.svg" alt="" class="globus--image" />
          <img src="/top_services/visa.svg" alt="" class="visa--image" />
        </div>
        <div class="service__title">денежные Переводы visa direct</div>
        <div class="service__subtitle">
          Отправлять деньги черезе Visa карту теперь стало на много удобнее
        </div>
        <a href="#" class="more"> Подробнее </a>
      </v-flex>

      <v-flex class="text-center" data-aos="fade-up">
        <div class="images">
          <img src="/top_services/globus.svg" alt="" class="globus--image" />
          <img
            src="/top_services/unionpay.svg"
            alt=""
            class="unionpay--image"
          />
        </div>
        <div class="service__title">
          денежные Переводы Money Express Unionpay
        </div>
        <div class="service__subtitle">
          Отправлять деньги черезе Money Express Unionpay теперь стало на много
          удобнее
        </div>
        <a href="#" class="more"> Подробнее </a>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'TopServices',
  data: () => ({}),
}
</script>

<style lang="scss">
.top__services {
  padding-top: 50px !important;
  .layout {
    gap: 50px;

    @include respond(lt) {
      flex-direction: column !important;
    }

    .flex {
      border-radius: 40px;
      position: relative;

      &:hover {
        a {
          color: #ffffff;
          background: #000000;
        }

        .images {
          .globus--image {
            filter: blur(1.5px);
            transform: scale(0.99);
          }

          .visa--image,
          .unionpay--image {
            transform: scale(1.2);
          }
        }

        .fly--1 {
          transform: translateY(-15px) scale(1.2);
        }

        .fly--4 {
          transform: translateY(15px) scale(1.3);
        }

        .fly--2,
        .fly--3 {
          transform: translate(10%, -15%) scale(0.8);
        }
      }

      .images {
        position: relative;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        .globus--image {
          position: absolute;
          z-index: 1;
          top: 0;
          transition: all 0.3s linear;
        }

        .visa--image,
        .unionpay--image {
          position: relative;
          z-index: 2;
          transition: all 0.3s linear;
        }
      }

      .fly--1,
      .fly--2,
      .fly--3,
      .fly--4 {
        position: absolute;
        width: 40px;
        height: 40px;
        z-index: 0;
        transition: all 0.3s linear;
      }

      .fly--1 {
        top: 35%;
        right: 10%;
        width: 140px;
        height: 133px;
        background: url('~/static/top_services/fly_01.svg');
        background-repeat: no-repeat;
        background-size: 100%;
      }

      .fly--2 {
        top: 13%;
        right: 26%;
        width: 62px;
        height: 48px;
        background: url('~/static/top_services/fly_02.svg');
        background-repeat: no-repeat;
        background-size: 100%;
      }

      .fly--3 {
        top: 13%;
        left: 28%;
        width: 54px;
        height: 43px;
        background: url('~/static/top_services/fly_03.svg');
        background-repeat: no-repeat;
        background-size: 100%;
      }

      .fly--4 {
        top: 43%;
        left: 13%;
        width: 98px;
        height: 77px;
        background: url('~/static/top_services/fly_04.svg');
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }

    .flex:not(:nth-child(1)) {
      flex: 1 1 calc((100% / 2) - 2rem);
      padding: 55px 70px;

      .service__title {
        font-size: 35px;
      }

      .service__subtitle {
        line-height: 30px;
      }

      @include respond(sm) {
        padding: 60px 15px;
      }
    }

    .flex:nth-child(2) {
      background: linear-gradient(163.99deg, #f6f6f6 2.98%, #f4fbff 100%);
    }
    .flex:nth-child(3) {
      background: linear-gradient(165.85deg, #f6f6f6 3.26%, #e9ffea 99.39%);
    }

    .flex:nth-child(1) {
      width: 100% !important;
      padding: 93px 310px 62px;
      background: linear-gradient(260.91deg, #f6f6f6 1.44%, #f5e6ff 99.3%);
      transition: all 0.3s linear;

      &:hover {
        background: linear-gradient(260.91deg, #f6f6f6 1.44%, #f5e6ff 99.3%);
      }

      .service__title {
        font-size: 40px;
      }

      @include respond(md) {
        padding: 93px 120px 62px;
        background-size: 100% 100%;

        &:hover {
          background-size: 100% 100%;
        }
      }

      @media only screen and (max-width: 1200px) {
        background: linear-gradient(260.91deg, #f6f6f6 1.44%, #f5e6ff 99.3%);
        &:hover {
          background: linear-gradient(260.91deg, #f6f6f6 1.44%, #f5e6ff 99.3%);
        }
      }

      @include respond(tb) {
        padding: 93px 18px 62px;
      }

      @include respond(xs) {
        padding: 60px 15px;
      }
    }

    .service__title {
      position: relative;
      z-index: 2;
      margin: 50px 0 18px;
      text-transform: uppercase;
      @include titles;
    }

    .service__subtitle {
      position: relative;
      z-index: 2;
      font-size: 26px;
      line-height: 30px;
      margin-bottom: 50px;
      @include respond(tb) {
        font-size: 16px;
        line-height: 19px !important;
      }
    }

    a {
      display: inline-block;
      text-decoration: none;
      font-size: 22px;
      line-height: 24px;
      color: #000000;
      transition: all 0.25s all;
      padding: 16px 40px;
      transition: all 0.3s linear;
      border-radius: 10px;
    }
  }
}
</style>
