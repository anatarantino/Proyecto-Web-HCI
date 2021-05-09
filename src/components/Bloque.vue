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
                v-model="vueltas"
                class="mt-0 pt-0 ml-6 sm2"
                light
                hide-details
                single-line
                type="number"
                min="1"
                color="black"
            ></v-text-field>
          </v-col>
        </v-col>
        <v-divider></v-divider>
        <v-list two-line light>
          <v-list-item-group
              multiple
          >
            <v-col v-for="(ex,index) in currentExercises" :key="index">
              <v-list-item active-class="green--text text--accent-6">
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title v-text="ex.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="ex.detail"></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-checkbox
                        @change="checkboxUpdated(active,ex)"
                        :input-value="active"
                        color="#4DFF00"
                    ></v-checkbox>
                  </v-list-item-action>
                </template>
              </v-list-item>
              <v-row pa-3>
                <v-col cols="3" class="d-flex justify-end align-center">
                  <v-text-field
                      label="Cantidad"
                      class="mt-0 pt-3 ml-6 mb-4 text-center"
                      hide-details
                      single-line
                      type="number"
                      min="1"
                      style="width: 50px"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-radio-group
                      row
                      mandatory
                  >
                    <v-radio
                        label="Segundos"
                        color="#4DFF00"
                        value="seg"
                    ></v-radio>
                    <v-radio
                        label="Repeticiones"
                        color="#4DFF00"
                        value="reps"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
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
    },
  },
  data: () => ({
    panel: [0, 1],
    currentExercises: [],
    totalExercises: 0,
    deleteExc: "",
    vueltas: 1
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
      let aux = this.$store.getters[`routines/getCycles`];
    },
    removeFromBlock(exercise) {
      this.$store.commit(`routines/delete${this.section}`, exercise);
    },
  }
}

</script>