<template> 
  <v-col md="4">
    <v-row justify="center">
      <v-avatar color="#D6F2D8" size="150">
        <v-icon color="black" size="80">
          mdi-account
        </v-icon>
      </v-avatar>
    </v-row>
    <v-row justify="center">
      <h2 class="white--text ma-2">
        NatiNat
      </h2>
    </v-row>
    <v-row justify="center">
      <v-btn
          @click="activeEx = !activeEx"
          :color="activeEx ? '#4DFF00' : '#757575'"
          class="ma-2 pt-6 pb-6"
      >
        <h2 class="custom-transform-class text-none white--text">
          Mis ejercicios
        </h2>
      </v-btn>
    </v-row>
    <v-row justify="center">
      <v-btn
          @click="activeTr = !activeTr"
          :color="activeTr ? '#4DFF00' : '#757575'"
          class="ma-2 pt-6 pb-6"
          width="180"
      >
        <h2 class="custom-transform-class text-none white--text">
          Mis logros
        </h2>
      </v-btn>
    </v-row>
    <v-row justify="center">
      <v-btn
          @click="activeEd = !activeEd"
          :color="activeEd ? '#4DFF00' : '#757575'"
          class="ma-2 pt-6 pb-6"
          width="180"
      >
        <h2 class="custom-transform-class text-none white--text">
          Editar Perfil
        </h2>
      </v-btn>
    </v-row>
    <v-row justify="center">
      <v-btn
          class="ma-2 pt-6 pb-6"
          @click="activeCo = !activeCo"
          :color="activeCo ? '#4DFF00' : '#757575'"
      >
        <h2 class="custom-transform-class text-none white--text">
          Configuración
        </h2>
      </v-btn>
    </v-row>
  </v-col> 
</template>

<script>
export default {
  name: "MyProfileBase",
  data: () => ({
    activeCo: false,
    activeEd: false,
    activeEx: false,
    activeTr: false,
  }),
}
</script>

<style scoped>

</style>