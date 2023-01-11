<template>
  <div class="app__card">
    <section>
      <aside class="left">
        <p class="text">
          Скачайте приложения Ipak Yo’li Mobile и получите больше возможностей
        </p>
        <!-- <div class="platforms">
            
        </div> -->
        <v-layout row>
          <app-store></app-store>
          <play-market></play-market>
        </v-layout>
      </aside>
      <aside class="right">
        <img src="/app/card__img.png" alt="" />
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  components: {
    appStore: () => import('@/components/markets/AppStore'),
    playMarket: () => import('@/components/markets/PlayMarket'),
  },
}
</script>

<style lang="scss">
.app__card {
  max-width: 1160px;
  width: 95%;
  height: 376px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  section {
    display: inline-flex;
    background: #ffffff;
    box-shadow: 0px 10px 30px 1px #ebebeb;
    border-radius: 30px;

    .left {
      padding: 60px 0 0 60px;
      .text {
        font-size: 35px;
        line-height: 42px;
        letter-spacing: -0.02em;
      }
    }

    .right {
      padding: 0 45px 0 0;
      img {
        position: relative;
        top: -36px;
      }
    }
  }

  //   @media only screen and (max-width: 1160px) {
  @include respond(md) {
    height: 318px;
    section {
      .left {
        padding: 30px 0 0 30px;
        .text {
          font-size: 28px;
          line-height: 1.6;
        }
      }

      .right {
        padding: 0 15px 0 0;
        img {
          width: 400px;
        }
      }
    }
  }

  @include respond(lt) {
    height: auto;
    section {
      flex-direction: column-reverse;
      align-items: center;

      .left {
        padding: 10px 0 0 0;
        width: 80%;
        text-align: center;

        .layout {
          justify-content: center;
        }
      }

      .right {
        padding: 0;
        img {
          width: 350px;
        }
      }
    }
  }

  @include respond(tb) {
    width: 90%;
  }

  @include respond(sm) {
    section {
      .left {
        .text {
          font-size: 22px;
          line-height: 1.4;
        }
      }

      .right {
        img {
          width: 280px;
        }
      }
    }
  }
}
</style>
