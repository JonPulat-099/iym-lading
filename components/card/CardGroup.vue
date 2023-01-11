<template>
  <v-layout row wrap justify-space-between>
    <v-flex v-for="n in items" :key="n.id" class="card" lg4>
      <v-card max-width="350px" class="rounded-xl ma-2" elevation="0">
        <v-img class="align-end" height="350px" :src="n.img_url">
          <v-card-title>
            <h4 @click="$router.push(`/news/${n.id}`)">{{ n.title }}</h4>
            <div class="text">{{ n.text }}</div>
            <p>
              <span class="date"> {{ n.date }} </span
              ><a href="#"> {{ n.category }} </a>
            </p>
          </v-card-title>
        </v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'CardGroup',
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
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.flex.card {
  display: flex;
  justify-content: center;
}

.v-card {

  .v-responsive__content {
    background: #ffffff;
    color: #000;

    h4 {
      @include card__titles;
      margin: 0 0 20px 0;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        color: $primary_color;
      }
    }

    p {
      @include card__bottom;
    }

    .text {
      font-family: $font_sf_light;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.02em;
      margin-bottom: 10px;
      opacity: 0;
      height: 0;
      overflow: hidden;
      transition: all 0.3s linear;
    }
  }

  &:hover {
    .v-image__image {
      filter: blur(2px);
    }

    .text {
      opacity: 1;
      height: 75px;
      overflow: auto;
    }
  }
}
</style>
