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
          <v-container mt-3>
            <v-row>
              <v-col align="center">
                <v-card
                  class="pa-2 rounded-xl "
                  outlined
                  elevation="2"
                  max-width="200"
                >
                  <img src="../assets/images/Deracha.png"> </v-img>
                  <div>
                    <h3> De racha </h3>
                  </div>
                  <div>
                    Completaste 3 rutinas en una semana
                  </div>
                </v-card>
              </v-col>
              <v-col align="center">
                <v-card
                  class="pa-2 rounded-xl "
                  outlined
                  elevation="2"
                  max-width="200"
                >
                  <img src="../assets/images/Enllamas.png"> </v-img>
                  <div>
                    <h3> En llamas </h3>
                  </div>
                  <div>
                    Entrenaste por 6 días seguidos
                  </div>
                </v-card>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyProfileBase from "../components/MyProfileBase";
export default {
  name: "MyProfileTrophies",
  components: {MyProfileBase}
}
</script>

<style scoped>

</style>