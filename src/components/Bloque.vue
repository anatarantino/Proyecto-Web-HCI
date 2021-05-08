<template>
  <v-expansion-panels v-model="panel" multiple>
    <v-expansion-panel class="rounded-xl">
      <v-expansion-panel-header
          fluid
          class="rounded-1"
          color="grey darken-3"
      >
        <h3 class="white--text text-start"> {{ bloque.name }} </h3>

        <v-spacer></v-spacer>
        <v-col cols="3">
          <v-text-field
              label="Vueltas"
              class="mt-0 pt-0 ml-6 sm2"
              dark
              hide-details
              single-line
              type="number"
              min="1"

          ></v-text-field>
        </v-col>

      </v-expansion-panel-header>

      <v-expansion-panel-content>

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
          <v-col class="d-flex align-center justify-center">
            <v-btn to="/home/createexercise"
                   fab
                   class="mx-2"
                   color="grey darken-3"
            >
              <v-icon color="white">
                mdi-plus
              </v-icon>
            </v-btn>
          </v-col>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "Bloque",
  props: ["bloque"],
  data: () => ({
    panel: [0, 1],
    currentExercises: [],
    totalExercises: 0,
    deleteExc:"",
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
    }
  }
}

</script>