<template>
  <v-expansion-panels v-model="panel" multiple>
    <v-expansion-panel class="rounded-xl">
      <v-expansion-panel-header
          fluid
          class="rounded-1"
          color="grey darken-4"
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
                single-line
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
                <template>
                  <v-list-item-content>
                    <v-list-item-title v-text="ex.name" ></v-list-item-title>
                    <v-list-item-subtitle v-text="ex.detail"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-row pa-3>
                    <v-col cols="12" class="d-flex align-center justify-center ma-0 pa-0">
                      <v-col cols="5" class="d-flex justify-end align-center">
                        <v-text-field
                            label="Repeticiones"
                            placeholder="Repeticiones"
                            v-model="ex.repetitions"
                            class="mt-0 pt-3 ml-6 mb-4 text-center"
                            hide-details
                            type="number"
                            single-line
                            min="1"
                            style="width: 50px"
                            color="black"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="7" class="d-flex justify-end align-center">
                        <v-text-field
                            label="Duración (en segundos)"
                            placeholder="Duración (en segundos)"
                            v-model="ex.duration"
                            class="mt-0 pt-3 ml-6 mb-4 text-center"
                            hide-details
                            single-line
                            type="number"
                            min="1"
                            style="width: 50px"
                            color="black"
                        ></v-text-field>
                      </v-col>
                    </v-col>
                  </v-row>
                  <v-list-item-action>
                    <v-checkbox
                        @click="checkboxUpdated(active,ex)"
                        :input-value="active"
                        color="#4DFF00"
                    ></v-checkbox>
                  </v-list-item-action>
                </template>
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
</template>

<script>
export default {
  name: "Bloque",
  props: {
    title: {
      type: String
    },
    section: {
      type: String
    }
  },
  data: () => ({
    panel: [0, 1],
    currentExercises: [],
    totalExercises: 0,
    deleteExc: "",
    rounds: 1,
  }),
  created() {
    this.exercises();
  },
  methods: {
    async exercises() {
      try {
        const exercises = await this.$store.dispatch('getExercises');
        this.totalExercises = exercises.totalCount;
        this.currentExercises = exercises.content;
        // console.log(this.totalExercises);
        // // for(let i of exercises.content){
        // //   console.log(i.name);
        // // }
        // for(let i of this.currentExercises){
        //   console.log(i.name);
        // }
      } catch (e) {
        console.log(e);
      }
    },
    checkboxUpdated(newValue, exercise) {
      if (!newValue) {
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
    updateRounds(){
      this.$store.commit(`routines/updateRounds${this.section}`,this.rounds);
    }
  },

}

</script>