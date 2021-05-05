<template>
  <v-container fill-height>
    <v-app-bar app color="rgb(0,0,0,0)" elevation="0">
      <v-flex text-xs-left>
        <v-btn text color="transparent" to="/">
          <v-img
              position="top"
              max-height="80"
              max-width="250"
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
            to="/signup"
        >Registrarme
        </v-btn>
        <v-btn
            @click="signupButt=true"
            color="black"
            rounded
            class="text-capitalize white--text"
            width="150"
            to="/signin"
        >Ingresar
        </v-btn>
      </v-flex>
    </v-app-bar>
    <v-row align="center" justify="center">
      <v-col cols="12" class="d-flex justify-center align-self-center">
        <h1 class="title text-center text-h5 text-sm-h3 text-md-h1 font-italic whiteCS--text shadow">Encuentra tu
          balance</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import signupButt from "./SignIn";

export default {
  name: 'MainPage',
  components: {
    signupButt,
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
  color: rgb(227, 245, 188);
}


</style>
