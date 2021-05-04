<template>
  <v-card
          class="pa-2 rounded-xl"
          outlined
          max-width="80%"
          height="600"
          elevation="2"
        >
          <v-container ma-5>
            <div>
              <h3> Notificaciones </h3>
              <v-row align="center">
                <v-col cols="5">
                  <v-text> Logros y progreso semanal </v-text>
                </v-col>
                <v-col cols="1">
                  <v-switch
                    v-model="offset1"
                    color="#4DFF00"
                  ></v-switch>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="5">
                  <v-text> Novedades y nuevas rutinas </v-text>
                </v-col>
                <v-col cols="1">
                  <v-switch
                    v-model="offset2"
                    color="#4DFF00"
                  ></v-switch>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="5">
                  <v-text> Recordatorios para entrenar </v-text>
                </v-col>
                <v-col cols="1">
                  <v-switch
                    v-model="offset3"
                    color="#4DFF00"
                  ></v-switch>
                </v-col>
              </v-row>
            </div>
            <v-row class="mt-5">
              <v-col>
                <div>
                  <v-row align="center">
                    <v-col cols="3">
                      <h3> Ayuda </h3>
                    </v-col>
                    <v-col cols="1">
                      <v-icon color="black">
                        mdi-help-circle-outline
                      </v-icon>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <v-col>
                <div>
                  <v-row align="center">
                    <v-col cols="4">
                      <h3> Acerca de </h3>
                    </v-col>
                    <v-col cols="1">
                      <v-icon color="black">
                        mdi-information-outline
                      </v-icon>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
</template>

<script>
export default {
  name: "ProfileConfig",
  data() {
    return {
      name: "Natalia",
      offset1: true,
      offset2: false,
      offset3: true,
    }
  }
}
</script>

<style scoped>
</style>