<template>
  <v-container>
    <v-row class="d-flex ma-0 pa-0 justify-center">
      <v-row>
        <v-col class="d-flex justify-space-between align-center" cols="12">
          <v-col cols="2">
            <v-text-field
                label="Buscar"
                prepend-inner-icon="mdi-magnify"
                filled
                dense
                solo
                hide-details
            ></v-text-field>
          </v-col>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="white"
                  depressed
                  v-bind="attrs"
                  v-on="on"
                  class="text-capitalize"
              >
                <v-icon>mdi-chevron-down</v-icon>
                Puntuación
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                  v-for="item in items"
                  :key="item"
                  link
              >
                <v-list-item-title><v-icon color="rgb(255,254,0)" v-for="rating in item.it" :key="rating">mdi-star</v-icon></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <v-col cols="12" class="d-flex ma-0 pa-0">
        <v-container fluid>
          <v-row class="d-flex ma-0 pa-0">
            <v-col cols="4" v-for="rout in routines" :key="rout">
              <RoutineCard :routine="rout"></RoutineCard>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="d-flex ma-0 pa-0">
        <v-container fluid>
          <v-row class="d-flex ma-0 pa-0">
            <v-col cols="4" v-for="fav in favorites" :key="fav">
              <RoutineCard :routine="fav"></RoutineCard>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-btn
          color="#4DFF00"
          depressed
          rounded
          class="text-capitalize"
          width="150"
      >Más rutinas
      </v-btn>
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
      ],
      items: [
        {
          it: 1
        },
        {
          it: 2
        },
        {
          it: 3
        },
        {
          it: 4
        },
        {
          it: 5
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