<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from '../components/Footer'
import AppBar from "../components/AppBar";

export default {
  name: 'LayoutDefault',
  components: {
    AppBar,
    Footer
  },
}
</script>

<style scoped>

#app{
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
  ), url("../assets/images/explorar rutinas.jpeg") no-repeat center;
  background-size: cover;
}

</style>