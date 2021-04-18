<template>
  <v-container>
    <v-app-bar app color="rgb(0,0,0,0)" elevation="0">
      <v-flex text-xs-left>
       <v-btn text color="transparent" to="/">
        <v-img
            position="top"
            max-height="48"
            max-width="163"
            src="../assets/images/logo.png"
        ></v-img>
        </v-btn>
      </v-flex>
      <v-flex text-xs-right xs8 sm7 md5 lg3>
        <v-btn
            color="#4DFF00"
            elevation="3"
            rounded
            class="text-capitalize"
            width="150"
            to="/login"
        ><h5 class="font-weight-bold">Registrarme</h5></v-btn>
        <v-btn
            @click="loginButt=true"
            color="#FFFFFF"
            text
            rounded
            class="text-capitalize"
            width="150"
            to="/signin"
        ><h5 class="font-weight-bold">Ingresar</h5></v-btn>
      </v-flex>
    </v-app-bar>
    <v-col cols="12" class="d-flex justify-center align-self-center">
      <h1 class="title text-center text-h5 text-sm-h3 text-md-h1 font-italic whiteCS--text shadow">Encuentra tu
        balance</h1>
    </v-col>
  </v-container>
</template>

<script>

import loginButt from "./SignIn";

export default {
  name: 'MainPage',
  components: {
    loginButt,
  }
}
</script>

<style scoped>

.bg {
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
  ), url("../assets/images/main.jpg") no-repeat center;
  background-size: cover;
}

.title {
  color: rgb(174, 181, 158);
}


</style>
