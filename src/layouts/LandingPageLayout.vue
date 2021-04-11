<template>
  <v-app>
    <!-- Must have the app property -->

<!--    <v-app-bar app></v-app-bar>-->
    <v-main>
          <router-view></router-view>

    </v-main>
  </v-app>
<!--  <v-app>-->
<!--    <router-view></router-view>-->
<!--  </v-app>-->
</template>

<script>

export default {
  name: "LandingPageLayout",
  components:{
  }
}
</script>

<style scoped>

</style>