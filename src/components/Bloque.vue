<template>
  <v-container v-if="loaded">
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel class="rounded-xl">
        <v-expansion-panel-header
            fluid
            class="rounded-1"
            color="grey darken-3"
            dark
        >
          <template v-slot:actions>
            <v-icon color="white">
              mdi-chevron-down
            </v-icon>
          </template>
          <h3 class="white--text text-start"> {{ title }} </h3>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-col class="d-flex align-content-lg-space-between">
            <v-col cols="8" class="d-flex align-center justify-start">
              <h4 class="font-weight-regular">Marque los ejercicios que desea agregar al bloque.</h4>
            </v-col>
            <v-col cols="4" class="d-flex align-center">
              <v-text-field
                  label="Vueltas a completar"
                  placeholder="Vueltas a completar"
                  v-model="rounds"
                  class="mt-0 pt-0 ml-6 sm2"
                  light
                  hide-details
                  type="number"
                  min="1"
                  color="black"
                  @change="updateRounds"
              ></v-text-field>
            </v-col>
          </v-col>
          <v-divider></v-divider>
          <v-list flat>
            <v-list-item-group multiple>
              <v-col v-for="(ex,index) in currentExercises" :key="index" class="ma-0 pa-0">
                <v-list-item>
                  <v-col cols="12">
                    <add-exercise-to-block :exercise="ex" :section="section"
                                           v-on:exMarked="checkboxUpdated"></add-exercise-to-block>
                  </v-col>
                </v-list-item>
                <v-divider
                    v-if="index < totalExercises - 1"
                ></v-divider>
              </v-col>
            </v-list-item-group>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
  <v-container v-else></v-container>
</template>

<script>
import AddExerciseToBlock from "@/components/AddExerciseToBlock";

export default {
  name: "Bloque",
  components: {AddExerciseToBlock},
  props: {
    title: {
      type: String
    },
    section: {
      type: String
    },
    reps: {
      type: Number
    },
    exercisesData: {
      type: Array
    },
    editMode: {
      type: Boolean
    }
  },
  data: () => ({
    panel: [0, 1],
    currentExercises: [],
    totalExercises: 0,
    deleteExc: "",
    rounds: 1,
    state: '',
    loadedEx: false,
    loadedData: false
  }),
  created() {
    this.loadData();
  },
  methods: {

    async exercises() {
      try {
        const exercises = await this.$store.dispatch('getExercises');
        this.totalExercises = exercises.totalCount;
        this.currentExercises = exercises.content;
        this.loadedEx = true;
      } catch (e) {
        console.log(e);
      }
    },
    async loadData(){
      const loaded = await this.exercises();
      if(this.editMode){
        this.rounds = this.reps;
        for (let ex of this.exercisesData) {
          let index = 0;
          for(let aux of this.currentExercises){
            if(aux.id === ex.exercise.id){
              this.currentExercises[index].changed = true;
              this.currentExercises[index].repetitions = ex.repetitions;
              this.currentExercises[index].duration = ex.duration;
              this.addToBlock(aux);
            }
            index++;
          }
        }
      }
      this.loadedData = true;
    },
    checkboxUpdated(value, exercise) {
      if (value) {
        this.addToBlock(exercise);
      } else {
        this.removeFromBlock(exercise);
      }
    },
    addToBlock(exercise) {
      this.$store.commit(`routines/add${this.section}`, exercise);
    },
    removeFromBlock(exercise) {
      this.$store.commit(`routines/delete${this.section}`, exercise);
    },
    updateRounds() {
      this.$store.commit(`routines/updateRounds${this.section}`, this.rounds);
    }
  },
  computed: {
    loaded(){
      return this.loadedEx && this.loadedData
    }
  }

}

</script>
