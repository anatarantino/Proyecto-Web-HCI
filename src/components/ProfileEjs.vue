<template>
  <v-card
      class="pa-4 rounded-xl "
      color="transparent"
      max-width="90%"
      elevation="0"
  >
    <v-row class="d-flex ma-0 pa-0">
      <v-col cols="12" class="d-flex ma-0 pa-0">
        <h3 class="subt">Mis ejercicios</h3>
      </v-col>
    </v-row>
    <v-row align="center" class="d-flex ma-0 pa-0">
      <v-col cols="6" v-for="card in cards" :key="card.id">
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
      cards: []
    }
  },
  created() {
    this.getExercises();
  },
  methods: {
    async getExercises() {
      try {
        const aux = await this.$store.dispatch('getExercises');
        this.cards = aux.content;
        console.log(aux.totalCount);
        for(let i of aux.content){
          console.log(i.name);
        }
        // for(let i of this.currentExercises){
        //   console.log(i.name);
        // }
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
.subt {
  color: #02ff00;
}
</style>