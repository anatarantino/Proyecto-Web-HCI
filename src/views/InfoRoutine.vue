<template>
  <div v-if="loaded">
    <v-container>
      <v-row align="center">
        <v-col class="d-flex justify-space-between align-center" cols="12">
          <h1 class="font-weight-light font-italic text-start white--text"> {{ name }}</h1>
          <v-col cols="4" class="d-flex justify-end align-center">
            <v-col cols="5">
              <v-btn
                  color="white"
                  depressed
                  class="text-capitalize"
                  @click="ratingPopUp=true"
                  v-if="!hasPermission"
              >
                Puntuar
              </v-btn>
            </v-col>
            <v-dialog v-model="ratingPopUp" width="350" persistent>
              <v-card class="pa-6">
                <v-row>
                  <v-container fluid>
                    <v-row justify="end">
                      <v-col cols="12" class="d-flex justify-end align-start">
                        <v-btn @click="ratingPopUp=false" icon color="transparent">
                          <v-icon color="black">
                            mdi-window-close
                          </v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-col class="d-flex justify-center align-center">
                      <v-rating
                          v-model="rating"
                          color="black"
                          background-color="black"
                          hover
                          empty-icon="mdi-star-outline"
                          large
                          full-icon="mdi-star"
                      ></v-rating>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-center align-center">
                      <v-btn @click="addRating" rounded color="white" elevation="5" width="150"
                             class="text-capitalize">
                        Confirmar
                      </v-btn>
                    </v-col>
                  </v-container>
                </v-row>
              </v-card>
            </v-dialog>
            <v-btn icon @click="markFav">
              <v-icon icon :color="fav ? '#4DFF00' : 'white'">
                mdi-heart
              </v-icon>
            </v-btn>
            <v-btn color="transparent" x-small v-if="hasPermission" :to="`/home/editroutine/${id}`">
              <v-icon color="white">
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn color="transparent" x-small v-if="hasPermission" @click="deleteDialog=true">
              <v-icon color="white">
                mdi-delete-outline
              </v-icon>
            </v-btn>
          </v-col>
          <v-dialog v-model="deleteDialog" width="550" persistent>
            <v-card class="pa-6">
              <v-row>
                <v-container fluid>
                  <v-card-title class="justify-center">¿Seguro deseas borrar esta rutina?</v-card-title>
                  <v-card-actions class="justify-center">
                    <v-btn @click="deleteDialog=false" rounded color="black" elevation="5" width="150"
                           class="white--text text-capitalize">
                      Cancelar
                    </v-btn>
                    <v-btn @click="deleteRoutine" rounded color="white" elevation="5" width="150"
                           class="text-capitalize">
                      Confirmar
                    </v-btn>
                  </v-card-actions>
                </v-container>
              </v-row>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row class="align-center mt-5">
        <v-col cols="12" class="d-flex justify-center align-center">
          <v-col cols="6">
            <v-card
                dark
            >
              <v-container class="d-flex flex-no-wrap justify-space-between" fluid>
                <div>
                  <v-col class="pr-0 pt-0">
                    <v-card-title
                        class="text-h5 white--text text-start px-0"
                    >Descripción de la rutina
                    </v-card-title>
                    <v-card-subtitle class="font-italic px-0">por {{ username }}</v-card-subtitle>
                    <v-card-text class="white--text px-0 py-0">{{ detail }}
                    </v-card-text>
                  </v-col>
                  <v-row>
                    <v-col class="d-flex justify-space-between align-center" cols="12">
                      <v-col cols="3" class="pa-0 ma-0">
                        <v-rating
                            size="20"
                            color="#4DFF00"
                            background-color="white"
                            readonly
                            v-model="difficultyNum"
                            empty-icon="mdi-fire"
                            full-icon="mdi-fire"
                            length="5"
                        ></v-rating>
                      </v-col>
                      <v-col cols="3" class="ma-0 pa-0">
                        <v-rating
                            size="20"
                            color="white"
                            background-color="white"
                            readonly
                            v-model="averageRating"
                            empty-icon="mdi-star-outline"
                            full-icon="mdi-star"
                            length="5"
                        ></v-rating>
                      </v-col>
                    </v-col>
                  </v-row>
                </div>
                <v-col class="d-flex px-0 py-0">
                  <v-avatar
                      size="125"
                  >
                    <v-img :src="avatarUrl" lazy-src="../assets/images/emptyUser.png"></v-img>
                  </v-avatar>
                </v-col>
              </v-container>
            </v-card>
          </v-col>
        </v-col>
      </v-row>
      <v-container>
        <v-row class="mt-8">
          <v-col cols="12" class="d-flex ma-0 pa-0 justify-space-between align-start justify-center">
            <v-row class="d-flex align-start justify-center mb-2">
              <v-col cols="4" v-for="(cycle,indexC) in cycles" :key="indexC">
                <div class="justify-center align-center rounded-xl grey darken-3 white--text">
                  <v-col class="d-flex align-center justify-center mb-4">
                    <h2 class="white--text">{{ cycle.name }}</h2>
                    <v-spacer></v-spacer>
                    <h3 class="green--text">{{ cycle.repetitions }} vueltas</h3>
                  </v-col>
                </div>
                <v-col v-for="(ex,indexE) in exercises[indexC]" :key="indexE">
                  <exercise-line :exercise="ex"></exercise-line>
                </v-col>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
  <div v-else>
    <v-col cols="12" class="d-flex justify-center align-center">
      <v-progress-circular size="30" :rotate="360" :value="progress" color="#4DFF00"></v-progress-circular>
    </v-col>
  </div>
</template>
<script>
import ExerciseLine from "../components/ExerciseLine";
import EditRoutine from "@/views/EditRoutine";

export default {
  name: "InfoRoutine",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {ExerciseLine, EditRoutine},
  data() {
    return {
      apiDifficulties: ["rookie", "beginner", "intermediate", "advanced", "expert"],
      ratingPopUp: false,
      difficultyNum: 0,
      rating: 0,
      name: '',
      username: '',
      avatarUrl: '',
      date: 0,
      detail: '',
      difficulty: '',
      averageRating: 0,
      isPublic: false,
      cycles: [],
      exercises: [],
      fav: false,
      loaded: false,
      progress: 0,
      deleteDialog: false,
      hasPermission: false
    }
  },

  created() {
    this.getRoutine();
  },
  methods: {
    async getRoutine() {
      this.progress = 20;
      if (this.id !== "undefined") {
        try {
          const aux1 = await this.$store.dispatch('getRoutineById', {routineId: this.id});
          this.name = aux1.name;
          this.detail = aux1.detail;
          this.difficulty = aux1.difficulty;
          let index = 0;
          for (let d of this.apiDifficulties) {
            if (this.difficulty === this.apiDifficulties[index]) {
              this.difficultyNum = index + 1
            }
            index++;
          }
          this.averageRating = aux1.averageRating;
          this.date = aux1.date;
          this.isPublic = aux1.isPublic;
          this.username = aux1.user.username;
          this.avatarUrl = aux1.user.avatarUrl;
          if (this.username === this.currentUser) {
            this.hasPermission = true;
          }
          this.progress = 50;
          try {
            const aux = await this.$store.dispatch('getRoutineCycles', {routineId: this.id});
            this.cycles = aux.content;
            try {
              const aux2 = await this.$store.dispatch('getCycleExercises', {cycleId: this.cycles[0].id});
              this.exercises[0] = aux2.content
              this.progress = 60;
            } catch (e) {
              console.log(e);
            }
            try {
              const aux3 = await this.$store.dispatch('getCycleExercises', {cycleId: this.cycles[1].id});
              this.exercises[1] = aux3.content
              this.progress = 70;
            } catch (e) {
              console.log(e);
            }
            try {
              const aux4 = await this.$store.dispatch('getCycleExercises', {cycleId: this.cycles[2].id});
              this.exercises[2] = aux4.content
              this.progress = 80;
            } catch (e) {
              console.log(e);
            }
          } catch (e) {
            console.log(e);
          }
          this.progress = 100;
          this.loaded = true;
        } catch (e) {
          console.log(e);
        }
      }
    },
    async markFav() {
      if (this.fav) {
        try {
          await this.$store.dispatch('removeFromFavourite', {routineId: this.id});
          this.fav = false;
        } catch (e) {
          this.fav = true;
          console.log(e);
        }
      } else {
        try {
          await this.$store.dispatch('addToFavourite', {routineId: this.id});
          this.fav = true;
        } catch (e) {
          this.fav = false;
          console.log(e);
        }
      }
    },
    async addRating() {
      try {
        await this.$store.dispatch('rateRoutine', {
          routineId: this.id,
          score: this.rating
        });
      } catch(e){
        console.log(e);
      }
      this.ratingPopUp = false;

    },
    async deleteRoutine() {
      await this.deleteExercises();
      await this.deleteCycles();
      try {
        await this.$store.dispatch('removeRoutine', {routineId: this.id});
      } catch (e) {
        console.log(e);
      }
      await this.$router.replace("/home/myRoutines");
    },
    async deleteExercises() {
      try {
        for (const cycle of this.cycles) {
          if(this.exercises[cycle.order-1].length !== 0){
            for (const ex of this.exercises[cycle.order-1]) {
            await this.$store.dispatch('removeExerciseFromCycle', {
              routineId: this.id,
              cycleId: cycle.id,
              exerciseId: ex.exercise.id,
            });
          }
          }

        }
      } catch (e) {
        console.log(e);
      }
    },
    async deleteCycles() {
      try {
        for (const cycle of this.cycles) {
          await this.$store.dispatch('removeCycle', {
            routineId: this.id,
            cycleId: cycle.id
          });
        }
      } catch (e) {
        console.log(e);
      }
    },


  },
  computed: {
    currentUser() {
      return this.$store.getters["user/userData"].username;
    },
  }
}
</script>

<style scoped>

</style>
