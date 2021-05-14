<template>
  <v-container v-if="loaded">
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
              v-model="name"
              color="#4DFF00"
              :error-messages=errorName
              @blur="$v.name.$touch()"
          >
          </v-text-field>
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <v-btn to="/home/createexercise/-1"
                 class="mx-2 text-capitalize"
                 rounded
                 width="150"
                 color="#4DFF00"
          >Crear ejercicio
          </v-btn>
        </v-col>
        <v-row>
          <v-col cols="12" md="8" class="d-flex mx-auto align-center justify-center">
            <bloque title="Entrada en calor" section="EntradaEnCalor" :reps="cycles[0].repetitions" :exercisesData="exercises[0]" :editMode="editMode"></bloque>
          </v-col>
          <v-col cols="12" md="8" class="d-flex mx-auto align-center justify-center">
            <bloque title="Ejercitación" section="Ejercitacion" :reps="cycles[1].repetitions" :exercisesData="exercises[1]" :editMode="editMode"></bloque>
          </v-col>
          <v-col cols="12" md="8" class="d-flex mx-auto align-center justify-center">
            <bloque title="Enfriamiento" section="Enfriamiento" :reps="cycles[2].repetitions" :exercisesData="exercises[2]" :editMode="editMode"></bloque>
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
                <v-row align="center">
                  <v-col cols="12" class="d-flex align-center justify-center">
                    <v-col cols="6" class="d-flex align-center justify-center">
                      <v-select
                          color="#4DFF00"
                          :items="categories"
                          v-model="chosenCategory"
                          item-text="name"
                          label="Categorias"
                          return-object
                          outlined
                          item-color="#4DFF00"
                          @blur="$v.chosenCategory.$touch()"
                          :error-messages=errorCat
                      >
                      </v-select>
                    </v-col>
                  </v-col>
                </v-row>
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
                    v-model="difficultyNum"
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
              to="/home/myroutines"
          >Cancelar
          </v-btn>
          <v-btn
              large
              color="#4DFF00"
              class="text-capitalize ma-1 pt-1 pb-1"
              depressed
              rounded
              width="150"
              @click="publish"
          >Publicar
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
  <v-container v-else></v-container>
</template>
<script>

import bloque from "@/components/Bloque";
import {required,minLength,maxLength,minValue,maxValue} from 'vuelidate/lib/validators';

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
        category: {
          name: '',
          id: '',
          detail: null
        }
      },
      name: '',
      categories: [],
      difficultyNum: 1,
      state: 'Privada',
      apiDifficulties: [ "rookie", "beginner", "intermediate", "advanced", "expert" ],
      chosenCategory: {},
      cycles: [
        {reps: 0},
        {reps: 0},
        {reps:0}
      ],
      exercises: [],
      editMode: false,
      loadedCat: false,
      loadedData: false
    }
  },
  created() {
    this.getCategories();
    this.loadData();
  },
  methods: {

    loadData(){
      if(this.routine.id !== 0) {
        this.editMode = true;
        this.name = this.routine.name;
        this.routines.name = this.routine.name;
        this.routines.id = this.id;
        this.routines.detail = this.routine.detail;
        this.routines.isPublic = this.routine.isPublic;
        this.changeStatus();
        this.difficultyNum = this.routine.difficultyNum;
        this.routines.difficulty = this.routine.difficulty;
        this.chosenCategory = this.routine.category;
        this.cycles = this.routine.cycles;
        this.exercises = this.routine.exercises;
      }
      this.loadedData = true;
    },
    resetRoutine(){
      this.resetForm();
    },
    async getCategories() {

      try {
        const aux = await this.$store.dispatch('getCategories');
        this.categories = aux.content;
        this.loadedCat = true;
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
    publish() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        console.log("Por favor complete todos los datos");
        return;
      }
      this.routines.name = this.name;
      if(this.editMode){
        this.updateRoutine();
      }else{
        this.createRoutine();
      }
    },
    async updateRoutine(){
      try {
        await this.removeExercisesFromCycles();
        this.routines.name = this.routines.name.toUpperCase();
        this.routines.category = this.chosenCategory;
        this.routines.date = Date.now();
        this.routines.difficulty = this.apiDifficulties[this.difficultyNum-1];
        let routine = await this.$store.dispatch('modifyRoutine',{
          routineId: this.routine.id,
          name: this.routines.name,
          detail: this.routines.detail,
          isPublic: this.routines.isPublic,
          difficulty: this.routines.difficulty,
          category: this.routines.category
        });
        const cyclesData = await this.$store.dispatch('getRoutineCycles', {
          routineId: this.routine.id
        })
        let storeData = this.$store.getters[`routines/getCycles`];
        let index=1;
        for (const ex of storeData.EntradaEnCalor) {
          await this.$store.dispatch('addExerciseToCycle', {
            routineId: this.routine.id,
            cycleId: cyclesData.content[0].id,
            exerciseId: ex.id,
            order: index,
            repetitions: ex.repetitions,
            duration: ex.duration
          });
          index++;
        }

        index=1;
        for (const ex of storeData.Ejercitacion) {
          await this.$store.dispatch('addExerciseToCycle', {
            routineId: this.routine.id,
            cycleId: cyclesData.content[1].id,
            exerciseId: ex.id,
            order: index,
            repetitions: ex.repetitions,
            duration: ex.duration
          });
          index++;
        }

        index=1;
        for (const ex of storeData.Enfriamiento) {
          await this.$store.dispatch('addExerciseToCycle', {
            routineId: this.routineId,
            cycleId: cyclesData.content[2].id,
            exerciseId: ex.id,
            order: index,
            repetitions: ex.repetitions,
            duration: ex.duration
          });
          index++;
        }
      } catch(e){
        console.log(e);
      }
      this.$store.commit('routines/resetEjercicios');
      await this.$router.replace('/home/myRoutines');
    },

    async createRoutine() {

      try {
        this.routines.name = this.routines.name.toUpperCase();
        this.routines.category = this.chosenCategory;
        this.routines.date = Date.now();
        this.routines.difficulty = this.apiDifficulties[this.difficultyNum-1];
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
    async removeExercisesFromCycles(){
      try {
        const cyclesData = await this.$store.dispatch('getRoutineCycles', {
          routineId: this.routine.id
        });
        for (const cycle of cyclesData.content) {
          let exercises = await this.$store.dispatch('getCycleExercises', {
            routineId: this.routine.id,
            cycleId: cycle.id
          });
          for (const ex of exercises.content) {
            await this.$store.dispatch('removeExerciseFromCycle', {
              cycleId: cycle.id,
              exerciseId: ex.exercise.id
            });
          }
        }
      } catch(e) {
        console.log(e);
      }
    },
    chooseCat(cat) {
      this.chosenCategory = cat;
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
  validations: {
    name: {
      required,
      maxLength: maxLength(100)
    },
    chosenCategory: {
      required
    }
  },
  computed: {
    loaded(){
      return this.loadedCat && this.loadedData;
    },
    errorName(){
      const errors = []
      if (!this.$v.name.$dirty) {
        return errors
      }
      !this.$v.name.required && errors.push('');
      !this.$v.name.maxLength && errors.push('Máximo 100 caracteres');
      return errors
    },
    errorCat(){
      const errors = []
      if (!this.$v.chosenCategory.$dirty) {
        return errors
      }
      !this.$v.chosenCategory.required && errors.push('Seleccione una categoria');
    }

  }
}
</script>

<style scoped>

</style>
