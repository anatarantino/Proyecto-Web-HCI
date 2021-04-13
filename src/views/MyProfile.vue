<template>
  <v-container>
    <v-row>
      <v-avatar color="#D6F2D8" size="150">
        <v-icon color="black" size="80">
          mdi-account
        </v-icon>
      </v-avatar>
    </v-row>
    <v-row>
      <v-btn
        class="custom-transform-class text-none white--text font-weight-medium"
        color="#757575"
      >
        Mis ejercicios
      </v-btn>
    </v-row>
    <v-row>
      <v-btn
        class="custom-transform-class text-none white--text font-weight-medium"
        color="#757575"
      >
        Mis logros
      </v-btn>
    </v-row>
    <v-row>
      <v-btn
        class="custom-transform-class text-none white--text font-weight-medium"
        color="#757575"
      >
        Editar perfil
      </v-btn>
    </v-row>
    <v-row>
      <v-btn
        class="custom-transform-class text-none white--text font-weight-medium"
        color="#757575"
      >
        Configuración
      </v-btn>
    </v-row>
  </v-container>
  
</template>

<script>
export default {
  name: "MyProfile"
}
</script>

<style scoped>

</style>