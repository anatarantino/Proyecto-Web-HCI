<template>
  <v-card
      class="pa-4 rounded-xl "
      color="rgb(0, 0, 0, 0.8)"
      max-width="90%"
      elevation="2"
  >
    <v-row class="d-flex ma-0 pa-0">
      <v-col cols="12" class="d-flex ma-0 pa-0">
        <h3 class="subt">Mis ejercicios</h3>
      </v-col>
    </v-row>
    <v-row align="center" class="d-flex ma-0 pa-0">
      <v-col cols="4" v-for="card in cards" :key="card">
        <ExerciseCard :excard="card"></ExerciseCard>
      </v-col>
      <v-col>
        <v-btn
            color="#4DFF00"
            elevation="2"
            class="mx-2"
            fab
            to="/home/createexercise"
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ExerciseCard from "../components/ExerciseCard";

export default {
  name: "ProfileEjs",
  components: {ExerciseCard},
  data() {
    return {
      name: "Natalia",
      cards: [
        {
          cTitle: "Puente de la mujer versión Nat",
          cText: "Puente con la pierna estirada",
          cType: "Cardio",
          cImage: require('../assets/images/crear\ ejercicio.jpg')
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