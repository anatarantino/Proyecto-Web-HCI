<template>
  <v-container>
    <v-row align="center">
      <v-col cols="4" class="d-flex justify-start align-center pr-0 mr-0">
        <h1 class="font-weight-light font-italic text-start white--text"> {{this.routine.name}}</h1>
      </v-col>
      <v-col cols="4" class="d-flex justify-start align-center pl-0 ml-0">
        <h3 class="white--text font-weight-light">por {{this.routine.user.username}}</h3>
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
                <v-card-text class="white--text" >Esta seria una descripcion un poco mas larga para la rutina hola anita mirame. Que largo este texto!!! todo sea por ver que quede lindo!!! Bueno creo que con esta frase ya esta.
                </v-card-text>
                <v-row>
                  <v-col cols="6" class="ml-16 pl-16">
                    <v-col cols="3" class="pa-0 ma-0">
                      <v-rating
                          size="30"
                          color="#4DFF00"
                          background-color="white"
                          readonly
                          v-model="getDifficulties"
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
                          v-model="this.routine.averageRating + 3"
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
                <v-img :src="this.routine.user.avatarUrl" lazy-src="../assets/images/emptyUser.png"></v-img>
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
            <v-col cols="4">
              <div class="justify-center align-center rounded-xl grey darken-4 white--text">
                <v-col class="d-flex align-center justify-center ">
                  <h2 class="white--text">{{this.cycles[0].name}}</h2>
                </v-col>
              </div>
              <v-col cols="12" class="mt-3 mb-3">
                <v-col v-for="ex in this.ejsPrueba1" :key="ex.id">
                  <exercise-line :exercise="ex"></exercise-line>
                </v-col>
              </v-col>
              <!--                            <exercise-line :exercises="this.exercises[0].content"></exercise-line>-->
            </v-col>
            <v-col cols="4">
              <div class="align-center rounded-xl grey darken-4 white--text">
                <v-col class="d-flex align-center justify-center">
                  <h2 class="white--text">{{this.cycles[1].name}}</h2>
                </v-col>
              </div>
              <v-col cols="12" class="mt-3 mb-3">
                <v-col v-for="ex in this.ejsPrueba2" :key="ex.id">
                  <exercise-line :exercise="ex"></exercise-line>
                </v-col>
              </v-col>

              <!--              <exercise-line :exercises="this.exercises[1].content"></exercise-line>-->
            </v-col>
            <v-col cols="4">
              <div class="align-center rounded-xl grey darken-4 white--text">
                <v-col class="d-flex align-center justify-center ">
                  <h2 class="white--text">{{this.cycles[2].name}}</h2>
                </v-col>
              </div>
              <v-col cols="12" class="mt-3 mb-3">
                <v-col v-for="ex in this.ejsPrueba1" :key="ex.id">
                  <exercise-line :exercise="ex"></exercise-line>
                </v-col>
              </v-col>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
    </v-container>
  </v-container>
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
      prueba: 'hola',
      apiDifficulties: ["rookie", "beginner", "intermediate", "advanced", "expert"],
      difficultyNum: 0,
      routine: '',
      cycles: [],
      exercises: [],
      currentCycle: 0,
      exercisesPrueba: [],
      fav: false,
      ejsPrueba1: {
        ex1:{
          id:1,
          name:'un nombre medio largo',
          detail: "breve descripcion listo",
          repetitions: 3,
          duration: 20,
        },
        ex2:{
          id:2,
          name:'uno corto',
          detail: "larga descripcion listo aaaa dklajda lkadjla klajdk lkad klas lka  akldj lkajdlakd jadlk",
          repetitions: 3,
          duration: 20,
        }
      },
      ejsPrueba2: {
        ex1:{
          id:1,
          name:'un nombre medio largo',
          detail: "breve descripcion listo",
          repetitions: 3,
          duration: 20,
        },
        ex2:{
          id:2,
          name:'uno corto',
          detail: "larga descripcion listo aaaa dklajda lkadjla klajdk lkad klas lka  akldj lkajdlakd jadlk",
          repetitions: 3,
          duration: 20,
        },
        ex3:{
          id:3,
          name:'un nombre medio largo',
          detail: "breve descripcion listo",
          repetitions: 3,
          duration: 20,
        },
      }
    }
  },
  created() {
    this.getRoutine();
  },
  mounted() {
    this.getRoutine();
  },
  beforeMount() {
    this.getRoutine();
  },
  methods: {
    async getRoutine(){
      try {
        this.routine = await this.$store.dispatch('getRoutineById', {routineId: this.id});
        try {
          const aux = await this.$store.dispatch('getRoutineCycles', {routineId: this.id});
          this.cycles = aux.content;
          try{
            this.exercises[0]  = await this.$store.dispatch('getCycleExercises',{cycleId: this.cycles[0].id});
          }catch (e) {
            console.log(e);
          }
          try{
            this.exercises[1]  = await this.$store.dispatch('getCycleExercises',{cycleId: this.cycles[1].id});
          }catch(e){
            console.log(e);
          }
          try{
            this.exercises[2]  = await this.$store.dispatch('getCycleExercises',{cycleId: this.cycles[2].id});
          }catch(e){
            console.log(e);
          }
        }catch (e) {
          console.log(e);
        }
      }catch (e){
        console.log(e);
      }
      console.log("this.cycles")
      console.log(this.cycles)
      console.log("this.exercises")
      console.log(this.exercises)
      console.log("this.exercises[0].content")
      console.log(this.exercises[0].content)
      console.log("this.exercises[0].content[0]")
      console.log(this.exercises[0].content[0])
      console.log("this.exercises[0].content[0].exercise")
      console.log(this.exercises[0].content[0].exercise.id)
      this.exercisePrueba[0] = this.exercises[0].content[0]
      this.exercisePrueba[1] = this.exercises[0].content[0]

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
    getDifficulties() {
      let index = 0;
      for (let d of this.apiDifficulties) {
        if (this.routine.difficulty === this.apiDifficulties[index]) {
          this.difficultyNum = index
          return index+1;
        }
        index++;
      }
      return index;
    }
  },
}
</script>

<style scoped>

</style>
