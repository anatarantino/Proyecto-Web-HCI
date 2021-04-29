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
          <v-container fluid ma-5>
            <v-row align="center" class="d-flex ma-0 pa-0">
              <v-col cols="6" v-for="card in cards">
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
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyProfileBase from "../components/MyProfileBase";
import ExerciseCard from "../components/ExerciseCard";
export default {
  name: "MyProfileEjs",
  components: {MyProfileBase, ExerciseCard},
  data(){
    return{
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

</style>