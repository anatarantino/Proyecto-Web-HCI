<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="11" md="8">
        <v-card light color="transparent" class="pa-5" elevation="0">
          <v-img src="../assets/images/logo.png"
                 :max-height="this.$vuetify.breakpoint.smAndDown ? '120':'180'" contain/>
          <h1 class="white--text text-center text-h5 text-md-h3 font-weight-bold mb-5">Error 404</h1>
          <h2 class="white--text text-center text-h6 text-md-h4 font-weight-medium my-5">Oops! La dirección que quieres
            buscar no es válida.</h2>
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-btn color="black" dark depressed rounded elevation="10" width="150" class="text-capitalize" to="/home/main">Volver al inicio</v-btn>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NotFound",
}
</script>

<style scoped>

</style>
