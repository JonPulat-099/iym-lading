<template>
  <div class="market">
    <a href="#" class="link__download">
      <img src="/icons/app__store.svg" alt="" class="link__download--icon">
      <div class="link__download--texts">
        <p>Загрузите в</p>
        <p class="market_name">App Store</p>
      </div>
    </a>
    <div class="ratings">
      <v-rating
        v-model="rating"
        color="#333333"
        background-color="none"
        size="10"
        small
        readonly
        half-increments
      ></v-rating>
      <span class="rating__value ml-1 mr-3">4.8</span>
      +3,4K ratings
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.5,
    }
  },
}
</script>

<style lang="scss" src="~/assets/scss/_markets.scss"></style>
