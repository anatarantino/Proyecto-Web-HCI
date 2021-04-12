<template>
  <v-app>
    <!-- Must have the app property -->
<!--    <v-app-bar app></v-app-bar>-->
    <v-main>
          <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
<!--  <v-app>-->
<!--    <router-view></router-view>-->
<!--  </v-app>-->
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: "LandingPageLayout",
  components:{
    Footer
  }
}
</script>

<style scoped>

 #app{
  height: 100%;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
  ), url("../assets/images/main.jpg") no-repeat center;
  background-size: cover;
}

</style>