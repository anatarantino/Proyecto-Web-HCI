<template>
  <v-container fluid class="pa-0 bg" style="height: 100vh">
    <v-app-bar app color="rgb(0,0,0,100000)" elevation="0">
<!--      <v-col cols="6" class="d-flex justify-center align-center">-->
      <v-flex text-xs-left>
        <v-img
            position="top"
            max-height="48"
            max-width="163"
            src="../assets/images/logo.png"
        ></v-img>
<!--      </v-col>-->
      </v-flex>
<!--      <v-spacer></v-spacer>-->
      <v-flex text-xs-right xs8 sm7 md5 lg3>
<!--        <v-col cols="2"  class="d-flex justify-center align-center">-->
          <v-btn
              color="#4DFF00"
              elevation="3"
              rounded
          ><span class="font-weight-bold">Registrarme</span></v-btn>
<!--        </v-col>-->
<!--        <v-col cols="2" class="d-flex justify-center align-center">-->
          <v-btn
              color="#FFFFFF"
              text
              rounded
          >Ingresar</v-btn>
<!--        </v-col>-->
<!--        <v-col cols="2" class="d-flex justify-center align-center">-->
          <v-btn
              color="#FFFFFF"
              text
          ><v-icon> mdi-translate </v-icon>
          </v-btn>
<!--        </v-col>-->
      </v-flex>
    </v-app-bar>
    <v-col cols="12" class="d-flex justify-center align-self-center">
        <h1 class="title text-center text-h5 text-sm-h3 text-md-h1 font-italic whiteCS--text shadow">Encuentra tu balance</h1>
      </v-col>
    <Footer></Footer>
  </v-container>
</template>

<script>


import Footer from "../components/Footer";
export default {
  name: 'Home',
  components: {Footer},
}
</script>

<style scoped>

.bg{
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
  ), url("../assets/images/main.jpg") no-repeat center;
  background-size: cover;
}

.title{
  color: #5a5151;
}


</style>
