<template>
  <v-container>
    <v-row class="d-flex ma-0 pa-0">
      <v-col cols="12" class="d-flex justify-start align-center">
        <h1 class="let">¡Bienvenido!</h1>
      </v-col>
      <v-col cols="12" class="d-flex ma-0 pa-0">
        <v-container fluid>
          <v-row class="d-flex ma-0 pa-0">
            <v-col cols="12" class="d-flex ma-0 pa-0">
              <h3 class="subt">Tus últimos entrenamientos</h3>
            </v-col>
            <v-col cols="4" v-for="rout in routines" :key="rout">
              <RoutineCard :routine="rout"></RoutineCard>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="d-flex ma-0 pa-0">
        <v-container fluid>
          <v-row class="d-flex ma-0 pa-0">
            <v-col cols="12" class="d-flex ma-0 pa-0">
              <h3 class="subt">Tus rutinas favoritas</h3>
            </v-col>
            <v-col cols="4" v-for="fav in favorites" :key="fav">
              <RoutineCard :routine="fav"></RoutineCard>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

import RoutineCard from "@/components/RoutineCard";

export default {
  name: 'Home',
  components: {RoutineCard},
  data() {
    return {
      categoryOptions: [
        {option: "Cardio", value: 1},
        {option: "Fuerza", value: 2},
        {option: "Abdominales", value: 3}
      ],
      routines: [
        {
          name: "Cardio",
          entradaEnCalor: 15,
          ejercitacion: 35,
          enfriamiento: 10,
          dificultad: 4,
          rating: 3,
          category: 1
        },
        {
          name: "Cardio",
          entradaEnCalor: 10,
          ejercitacion: 15,
          enfriamiento: 5,
          dificultad: 1,
          rating: 3,
          category: 1
        },
      ],
      favorites: [
        {
          name: "Fuerza",
          entradaEnCalor: 10,
          ejercitacion: 40,
          enfriamiento: 10,
          dificultad: 2,
          rating: 5,
          category: 2
        },
        {
          name: "Abdominales",
          entradaEnCalor: 15,
          ejercitacion: 30,
          enfriamiento: 15,
          dificultad: 3,
          rating: 5,
          category: 3
        },
        {
          name: "Cardio",
          entradaEnCalor: 15,
          ejercitacion: 35,
          enfriamiento: 10,
          dificultad: 3,
          rating: 4,
          category: 1
        }
      ]
    }
  }
}
</script>

<style scoped>

.let {
  color: white;
}

.subt {
  color: #02ff00;
}

</style>

