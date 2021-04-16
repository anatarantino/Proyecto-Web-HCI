<template>
  <v-container fluid mt-8>
    <v-row align="center" justify="space-around">
      <MyProfileBase></MyProfileBase>
      <v-col md="8">
        <v-card
          class="pa-2 rounded-xl "
          outlined
          max-width="80%"
          height="600"
          elevation="2"
        >
          <div>
            <h3> Notificaciones </h3>
            <p> Logros y progreso semanal </p>
            <p> Novedades y nuevas rutinas </p>
            <p> Recordatorios para entrenar </p>
          </div>
          <div>
            <h3> Idioma </h3>
          </div>
          <div>
            <h3> Ayuda </h3>
          </div>
          <div>
            <h3> Acerca de </h3>
          </div>
          <v-btn
            color="#0C773A"
            elevation="2"
            rounded
            class="text-capitalize white--text ma-5 mt-10"
            width="150"
          >
            Cerrar sesión
          </v-btn>
          <v-btn
            color="#E22828"
            elevation="2"
            rounded
            class="text-capitalize white--text ma-5 mt-10"
            width="150"
          >
            Eliminar cuenta
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyProfileBase from "../components/MyProfileBase";
export default {
  name: "MyProfileConfig",
  components: {MyProfileBase}
}
</script>

<style scoped>

</style>