<template>
  <v-app-bar app color="rgb(0,0,0,0)" elevation="0" hide-on-scroll>
    <v-flex text-xs-left>
      <v-btn text color="transparent" to="/home">
        <v-img
            position="top"
            max-height="80"
            max-width="250"
            src="../assets/images/logo.png"
        ></v-img>
      </v-btn>
    </v-flex>
    <v-flex xs10 sm9 md8 lg5>
      <template>
        <v-tabs append background-color="rgb(0,0,0,0)" dark color="#4DFF00">
          <v-tab to="/home" exact>Inicio</v-tab>
          <v-tab to="/home/exploreRoutines">Explorar rutinas</v-tab>
          <v-tab to="/home/myRoutines">Mis rutinas</v-tab>
          <v-tab to="/home/myProfile">Mi perfil</v-tab>
        </v-tabs>
      </template>
    </v-flex>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style scoped>

</style>