<template>
  <v-container fluid class="pa-0 bg" style="height: 100vh">
    <v-row class="align-item-start">
      <v-col cols="6" align="left">
        <v-img
            position="top"
            max-height="48"
            max-width="163"
            src="../assets/images/logo.png"
        ></v-img>
      </v-col>
      <v-col cols="2" lg="4" align="right">
        <v-btn
            color="#4DFF00"
            elevation="3"
            rounded
        ><p class="font-weight-bold">Registrarme</p></v-btn>
      </v-col>
      <v-col cols="2" lg="1"align="right">
        <v-btn
            color="#FFFFFF"
            text
            rounded
        >Ingresar</v-btn>
      </v-col>
      <v-col cols="2" lg="1" align="right">
        <v-btn
            color="#FFFFFF"
            text
        ><v-icon> mdi-translate </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" align="center">
        <h1 class="title">Encuentre su balance</h1>
      </v-col>
    </v-row>
    <v-footer app color="rgba(0,0,0,0)" >
    <v-row align="center" justify="center" class="justify-md-start">
      <v-col cols="12" class="d-flex justify-space-around" align="right">
        <v-btn
            color="#FFFFFF"
            text
        ><v-icon> mdi-youtube </v-icon>
        </v-btn>
        <v-btn
            color="#FFFFFF"
            text
        ><v-icon> mdi-instagram </v-icon>
        </v-btn>
        <v-btn
            color="#FFFFFF"
            text
        ><v-icon> mdi-twitter </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    </v-footer>
  </v-container>
</template>

<script>


export default {
  name: 'Home',

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
  color:white;
}


</style>
