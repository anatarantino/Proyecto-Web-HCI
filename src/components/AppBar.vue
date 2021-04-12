<template>
  <v-app-bar app color="rgb(0,0,0,0)" elevation="0">
    <v-flex text-xs-left>
      <v-img
          position="top"
          max-height="48"
          max-width="163"
          src="../assets/images/logo.png"
      ></v-img>
    </v-flex>
    <v-flex text-xs-right xs8 sm7 md5 lg5>
      <template>
        <v-tabs background-color="rgb(0,0,0,0)" color="green">
          <v-tab >Inicio</v-tab>
          <v-tab>Explorar rutinas</v-tab>
          <v-tab>Mis rutinas</v-tab>
          <v-tab>Mi perfil</v-tab>
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