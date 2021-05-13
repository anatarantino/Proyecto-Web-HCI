<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-col cols="12" class="d-flex align-center justify-center">
          <h1 class="font-italic white--text font-weight-regular">{{ title.title }}</h1>
        </v-col>
        <v-col cols="12" class="d-flex mx-auto" sm="4">
          <v-text-field
              label="Ingresa un nombre para tu rutina"
              filled
              clearable
              dark
              required
              hide-details
              v-model="routines.name"
              color="#4DFF00"
          >
          </v-text-field>
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <v-btn to="/home/createexercise"
                 class="mx-2 text-capitalize"
                 rounded
                 width="150"
                 color="#4DFF00"
          >Crear ejercicio
          </v-btn>
        </v-col>
        <v-row>
          <v-col cols="12" md="8" class="d-flex mx-auto align-center justify-center">
            <bloque title="Entrada en calor" section="EntradaEnCalor"></bloque>
          </v-col>
          <v-col cols="12" md="8" class="d-flex mx-auto align-center justify-center">
            <bloque title="Ejercitación" section="Ejercitacion"></bloque>
          </v-col>
          <v-col cols="12" md="8" class="d-flex mx-auto align-center justify-center">
            <bloque title="Enfriamiento" section="Enfriamiento" ></bloque>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="d-flex align-center justify-center">
        <v-col cols="6">
          <v-card dark dense>
            <v-container fluid>
              <v-row>
                <v-col cols="12" class="d-flex justify-center align-center pa-0 ma-0">
                  <v-card-title><h3 class="font-weight-regular">Elija el enfoque de su rutina</h3></v-card-title>
                </v-col>
                <div class="pl-2 pr-2 pb-1">
                  <v-chip-group
                      v-model="chosenCategory"
                      active-class="light-green accent-3 black--text "
                      column
                      class="pl-6 pr-2 "
                  >
                    <v-chip v-for="cat in this.categories" :key="cat.id" :value="cat">{{ cat.name }}</v-chip>
                  </v-chip-group>
                </div>
              </v-row>
            </v-container>
          </v-card>
          <v-container>
            <v-card
                class="mx-auto elevation-4 rounded-l"
                dark
                color="black"
                outlined
            >
              <v-card-actions class="align-center justify-center">
                <h3 class="font-weight-regular">Dificultad</h3>
                <v-rating
                    v-model="routines.difficultyNum"
                    color="#4DFF00"
                    empty-icon="mdi-fire"
                    full-icon="mdi-fire"
                    hover
                    length="5"
                    size="30"
                    background-color="white"
                ></v-rating>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>
      </v-col>
      <v-row>
        <v-col cols="12" class="d-flex mx-auto" sm="4">
          <v-row>
            <v-textarea
                dark
                prepend-inner-icon="mdi-comment"
                class="mx-2"
                label="Describe tu rutina"
                rows="1"
                auto-grow
                v-model="routines.detail"
            >
            </v-textarea>
            <v-switch
                v-model="routines.isPublic"
                dark
                color="#4DFF00"
                :label=this.state
                @click="changeStatus"
            ></v-switch>
          </v-row>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn
              large
              color="black"
              depressed
              rounded
              width="150"
              class="text-capitalize white--text ma-1 pt-1 pb-1"
              to="/home/myroutiness"
          >Cancelar
          </v-btn>
          <v-btn
              large
              color="#4DFF00"
              class="text-capitalize ma-1 pt-1 pb-1"
              depressed
              rounded
              width="150"
              @click="createRoutine"
          >Publicar rutina
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>

import bloque from "@/components/Bloque";

export default {
  name: "routineComp",
  props: ["title","routine"],
  components: {bloque},
  data() {
    return {
      routines: {
        bloquesName: ["Entrada en calor", "Ejercitación", "Enfriamiento"],
        difficulty: '',
        name: '',
        detail: '',
        isPublic: false,
        category: ''
      },
      categories: '',
      difficultyNum: 1,
      state: 'Privada',
      apiDifficulties: [ "rookie", "beginner", "intermediate", "advanced", "expert" ],
      chosenCategory: ''
    }
  },
  created() {
    this.getCategories();
  },
  methods: {
    resetRoutine(){
      this.resetForm();
    },
    async getCategories() {
      try {
        const aux = await this.$store.dispatch('getCategories');
        this.categories = aux.content;
      } catch (e) {
        console.log(e);
      }
    },
    changeStatus() {
      if (this.routines.isPublic) {
        this.state = 'Pública';
      } else {
        this.state = 'Privada';
      }
    },
    async createRoutine() {

      try {
        this.routines.name = this.routines.name.toUpperCase();
        this.routines.category = this.chosenCategory;
        this.routines.date = Date.now();
        this.routines.difficulty = this.apiDifficulties[this.routines.difficultyNum-1];
        let routine = await this.$store.dispatch('createRoutine',this.routines);
        let exercises = this.$store.getters['routines/getCycles'];
        let entradaEnCalor = await this.$store.dispatch('createCycle', {
          routineId: routine.id,
          name: "Entrada en calor",
          type: "warmup",
          order: 1,
          repetitions: parseInt(exercises.roundsEntradaEnCalor)
        });

        let index=1;
        for (let ex of exercises.EntradaEnCalor) {
          let aux = await this.$store.dispatch('addExerciseToCycle', {
            cycleId: entradaEnCalor.id,
            exerciseId: ex.id,
            order: index,
            duration: parseInt(ex.duration),
            repetitions: parseInt(ex.repetitions)
          })
          index++
        }

        let ejercitacion = await this.$store.dispatch('createCycle', {
          routineId: routine.id,
          name: "Ejercitacion",
          type: "exercise",
          order: 2,
          repetitions: parseInt(exercises.roundsEjercitacion)
        });

        index=1
        for (const ex of exercises.Ejercitacion) {
          let aux = await this.$store.dispatch('addExerciseToCycle', {
            cycleId: ejercitacion.id,
            exerciseId: ex.id,
            order: index,
            duration: parseInt(ex.duration),
            repetitions: parseInt(ex.repetitions)
          })
          index++
        }

        let enfriamiento = await this.$store.dispatch('createCycle', {
          routineId: routine.id,
          name: "Enfriamiento",
          type: "cooldown",
          order: 3,
          repetitions: parseInt(exercises.roundsEnfriamiento)
        });

        index=1
        for (const ex of exercises.Enfriamiento) {
          let aux = await this.$store.dispatch('addExerciseToCycle', {
            cycleId: enfriamiento.id,
            exerciseId: ex.id,
            order: index,
            duration: parseInt(ex.duration),
            repetitions: parseInt(ex.repetitions)
          })
          index++
        }
        this.$emit('resetRoutine');
        this.$store.commit('routines/resetEjercicios');
        await this.$router.replace('/home/myRoutines');
      } catch(e){
        console.log(e);
      }

    },
    resetForm() {
      this.$v.$reset();
      this.difficulty= 0;
      this.category= '';
      this.name= '';
      this.detail= '';
      this.isPublic= false;
    },


  },
}
</script>

<style scoped>

</style>
