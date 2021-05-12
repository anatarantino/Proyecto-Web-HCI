<template>
  <div v-if="loaded">
  <v-container>
    <v-row align="center">
      <v-col cols="4" class="d-flex justify-start align-center pr-0 mr-0">
        <h1 class="font-weight-light font-italic text-start white--text"> {{name}}</h1>
      </v-col>
      <v-col cols="4" class="d-flex justify-start align-center pl-0 ml-0">
        <h3 class="white--text font-weight-light">por {{username}}</h3>
      </v-col>
      <v-col cols="4" class="d-flex justify-end align-center">
        <v-btn icon @click="markFav" >
          <v-icon icon :color="fav ? '#4DFF00' : 'white'">
            mdi-heart
          </v-icon>
        </v-btn>
        <v-btn color="transparent" x-small to="/home/editroutine">
          <v-icon color="white">
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn color="transparent" x-small>
          <v-icon color="white">
            mdi-delete-outline
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="align-center mt-5">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-col cols="6" >
          <v-card
              dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                    class="text-h5 white--text"
                >Descripción de la rutina</v-card-title>
                <v-card-text class="white--text" >{{ detail }}
                </v-card-text>
                <v-row>
                  <v-col cols="6" class="ml-16 pl-16">
                    <v-col cols="3" class="pa-0 ma-0">
                      <v-rating
                          size="30"
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
                          size="30"
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

              <v-avatar
                  class="ma-3"
                  size="125"
              >
                <v-img :src="avatarUrl" lazy-src="../assets/images/emptyUser.png"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
    <v-container>
      <v-row class="mt-8">
        <v-col cols="12" class="d-flex ma-0 pa-0 justify-space-between align-start justify-center">
          <v-row class="d-flex align-start justify-center mb-2">
            <v-col cols="4" v-for="(cycle,indexC) in cycles" :key="indexC">
              <div class="justify-center align-center rounded-xl grey darken-4 white--text">
                <v-col class="d-flex align-center justify-center mb-4">
                  <h2 class="white--text">{{cycle.name}}</h2>
                  <v-spacer></v-spacer>
                  <h3 class="green--text">{{cycle.repetitions}} vueltas</h3>
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

export default {
  name: "InfoRoutine",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {ExerciseLine},
  data() {
    return {
      apiDifficulties: ["rookie", "beginner", "intermediate", "advanced", "expert"],
      difficultyNum: 0,
      name: '',
      username: '',
      avatarUrl: '',
      date: 0,
      detail: '',
      difficulty: '',
      averageRating: 0,
      ispublic: false,
      cycles: [],
      exercises: [],
      fav: false,
      loaded: false,
      progress: 0
    }
  },

  created() {
    this.getRoutine();
  },
  methods: {
    async getRoutine(){
      this.progress=20;
      if(this.id !== "undefined") {
        try {
          const aux1 = await this.$store.dispatch('getRoutineById', {routineId: this.id});
          this.name = aux1.name;
          this.detail = aux1.detail;
          this.difficulty = aux1.difficulty;
          let index = 0;
          for (let d of this.apiDifficulties) {
            if (this.difficulty === this.apiDifficulties[index]) {
              this.difficultyNum = index+1
            }
            index++;
          }
          this.averageRating = aux1.averageRating;
          this.date = aux1.date;
          this.ispublic = aux1.isPublic;
          this.username = aux1.user.username;
          this.avatarUrl = aux1.user.avatarUrl;
          this.progress = 50;
          try {
            const aux = await this.$store.dispatch('getRoutineCycles', {routineId: this.id});
            this.cycles = aux.content;
            try{
              const aux2  = await this.$store.dispatch('getCycleExercises',{cycleId: this.cycles[0].id});
              this.exercises[0] = aux2.content
              this.progress = 60;
            }catch (e) {
              console.log(e);
            }
            try{
              const aux3  = await this.$store.dispatch('getCycleExercises',{cycleId: this.cycles[1].id});
              this.exercises[1] = aux3.content
              this.progress = 70;
            }catch(e){
              console.log(e);
            }
            try{
              const aux4  = await this.$store.dispatch('getCycleExercises',{cycleId: this.cycles[2].id});
              this.exercises[2] = aux4.content
              this.progress = 80;
            }catch(e){
              console.log(e);
            }
          }catch (e) {
            console.log(e);
          }
          this.progress = 100;
          this.loaded = true;
        }catch (e){
          console.log(e);
        }
        console.log("this.exercises")
        console.log(this.exercises)
        console.log("this.exercises[0]")
        console.log(this.exercises[0])
      }
    },
    async markFav(){
      if (this.fav) {
        this.fav = false;
        // try {
        //   await this.$store.dispatch('removeFromFavourite',{routineId: this.routine.id});
        //   this.fav = false;
        // }catch (e) {
        //   this.fav = true;
        //   console.log(e);
        // }
      }else {
        this.fav = true;
        // try {
        //   await this.$store.dispatch('addToFavourite',{routineId: this.id});
        //   this.fav = true;
        // } catch(e) {
        //   this.fav = false;
        //   console.log(e);
        // }
      }
    },

  },
  computed: {
    dataLoaded(){
      return this.exercises === undefined
    }

  },
}
</script>

<style scoped>

</style>
