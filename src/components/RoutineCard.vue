<template>
  <v-card rounded>
    <v-container fluid>
      <v-row>
        <v-col class="grey d-flex justify-space-between align-center" cols="12">
          <h3 class="text-start"> {{ routine.name }}  </h3>
          <v-btn icon>
            <v-icon color="white">mdi-plus</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <h4 class="text-caption text-start">Entrada en calor: {{ routine.entradaEnCalor }} min</h4>
              </v-col>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <h4 class="text-caption text-start">Ejercitación: {{ routine.ejercitacion }} min</h4>
              </v-col>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <h4 class="text-caption text-start">Enfriamiento: {{ routine.enfriamiento }} min</h4>
              </v-col>
              <v-col cols="4" class="d-flex justify-start align-center pa-0">
                <v-icon color="orange" v-for="dificultad in routine.dificultad">mdi-fire</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="6">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="d-flex justify-end align-center pa-0">
                <v-img
                    position="top"
                    max-height="150"
                    max-width="100"
                    :src="categoryImg"
                ></v-img>
              </v-col>
              <v-col cols="12" class="d-flex justify-end align-center pa-0">
                <v-icon color="gold" v-for="rating in routine.rating">mdi-star</v-icon>
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