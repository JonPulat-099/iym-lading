<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer>
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    appHeader: () => import('@/components/Header'),
    appFooter: () => import('@/components/Footer'),
  },
}
</script>

<style>
.theme--light.v-footer {
  background-color: #ffffff !important;
}

.v-footer {
  margin: 0 !important;
  padding: 0 !important;
  box-shadow: none;
}

.v-application  {
  position: relative;
}
</style>
