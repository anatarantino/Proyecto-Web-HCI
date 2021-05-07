<template>
  <v-card
      class="pa-5 rounded-xl"
      color="rgb(0, 0, 0, 0.8)"
      max-width="90%"
      elevation="2"
  >
    <v-row class="d-flex ma-0 pa-0">
      <v-col cols="12" class="d-flex ma-0 pa-0">
        <h3 class="subt">Mis trofeos</h3>
      </v-col>
    </v-row>
    <v-row align="center" class="d-flex ma-0 pa-0">
      <v-col cols="4" align="center" v-for="trophie in trophies" :key="trophie">
        <v-card
            class="pa-2 rounded-xl "
            outlined
            elevation="2"
            max-width="200"
        >
          <img :src=trophie.tImage>
          <div>
            <h3> {{ trophie.tTitle }} </h3>
          </div>
          <div>
            {{ trophie.tText }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

export default {
  name: "ProfileTrophies",
  data() {
    return {
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
.subt {
  color: #02ff00;
}
</style>