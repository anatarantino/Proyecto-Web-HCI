<template>
  <v-container fluid mt-8>
    <v-row align="center" justify="space-around">
      <MyProfileBase :username=name></MyProfileBase>
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
              <v-col cols="4" align="center" v-for="trophie in trophies">
                <v-card
                  class="pa-2 rounded-xl "
                  outlined
                  elevation="2"
                  max-width="200"
                >
                  <img :src=trophie.tImage> </v-img>
                  <div>
                    <h3> {{trophie.tTitle}} </h3>
                  </div>
                  <div>
                    {{trophie.tText}}
                  </div>
                </v-card>
              </v-col>
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
  components: {MyProfileBase},
  data(){
    return{
      name: "Natalia",
      trophies: [
        {
          tImage: require('../assets/images/Deracha.png'),
          tTitle: "De racha",
          tText: "Completaste 3 rutinas en una semana"
        },
        {
          tImage: require('../assets/images/Enllamas.png'),
          tTitle: "En llamas",
          tText: "Entrenaste por 6 días seguidos"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>