<template>
  <v-card class="rounded-xl">
    <v-container fluid>
      <v-row>
        <v-col class="grey darken-3 d-flex justify-space-between align-center rounded-t-xl" cols="12">
          <h3 class="white--text text-start"> {{ routine.name }}  </h3>
          <v-btn icon to="/home/info">
            <v-icon color="white">mdi-plus</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="7">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <h4 class="font-weight-light text-start">Calentamiento: {{ routine.entradaEnCalor }} min</h4>
              </v-col>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <h4 class="font-weight-light text-start">Ejercitación: {{ routine.ejercitacion }} min</h4>
              </v-col>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <h4 class="font-weight-light text-start">Enfriamiento: {{ routine.enfriamiento }} min</h4>
              </v-col>
              <v-col cols="4" class="d-flex justify-start align-center pa-0">
                <v-icon color="#4DFF00" v-for="dificultad in routine.dificultad" :key="dificultad">mdi-fire</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="5">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="d-flex justify-end align-center pa-0">
                <v-img
                    position="top"
                    max-height="150"
                    max-width="150"
                    :src="categoryImg"
                ></v-img>
              </v-col>
              <v-col cols="12" class="d-flex justify-end align-center pa-0">
                <v-icon color="black" v-for="rating in routine.rating" :key="rating">mdi-star</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

  </v-card>
</template>

<script>
export default {
  name: "RoutineCard",
  props:["routine"],
  computed:{
    categoryImg(){
      return require(`../assets/images/${this.routine.category}.jpg`)
    }
  }
}
</script>

<style scoped>

</style>