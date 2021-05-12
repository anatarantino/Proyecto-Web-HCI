<template>
  <v-container>
    <v-row align="center">
      <v-col cols="4" class="d-flex justify-start align-center pr-0 mr-0">
        <h1 class="font-weight-light font-italic text-start white--text"> {{this.routine.name}}</h1>
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
      <v-col cols="6">
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
            </div>

            <v-avatar
                class="ma-3"
                size="125"
            >
              <v-img :src="profilePic" lazy-src="../assets/images/emptyUser.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-icon color="#4DFF00" size="30" v-for="index in getDifficulties" :key="index">mdi-fire</v-icon>
        </v-row>
        <v-row>
          <!--          <v-icon color="black" size="30" v-for="dif in this.routine.averageRating +4" :key="dif">-->
          <!--            mdi-star-->
          <!--          </v-icon>-->
          <v-card
              class="mx-auto elevation-4 rounded-l"
              dark
              color="white"
              outlined>
            <v-rating
                size="30"
                color="black"
                background-color="black"
                readonly
                v-model="this.routine.averageRating + 3"
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                length="5"
            ></v-rating>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" >
        <v-col>
        </v-col>
        <v-col>

        </v-col>
      </v-col>
    </v-row>
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
      apiDifficulties: ["rookie", "beginner", "intermediate", "advanced", "expert"],
      difficultyNum: 0,
      routine: '',
      cyclos: [],
      ejercicios: [],
      fav: false,
      currentUser: '' //esto lo ponemos para ver como queda pero seria con el dueño de la rutina (falta en la API)
    }
  },
  created() {
    this.getRoutine();
  },
  methods: {
    async getRoutine(){
      console.log(this.id);
      try {
        this.routine = await this.$store.dispatch('getRoutineById', {routineId: this.id});
        console.log(this.routine.user);
        try {
          const cycles = await this.$store.dispatch('getRoutineCycles', {routineId: this.id});
          this.cycles = cycles.content;
          try{
            this.ejercicios[0]  = await this.$store.dispatch('getCycleExercises',{cycleId: this.cycles[0].id});
          }catch (e) {
            console.log(e);
          }
          try{
            this.ejercicios[1]  = await this.$store.dispatch('getCycleExercises',{cycleId: this.cycles[1].id});
          }catch(e){
            console.log(e);
          }
          try{
            this.ejercicios[2]  = await this.$store.dispatch('getCycleExercises',{cycleId: this.cycles[2].id});
            console.log(this.ejercicios);
          }catch(e){
            console.log(e);
          }
        }catch (e) {
          console.log(e);
        }
      }catch (e){
        console.log(e);
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
    username() {
      return this.$store.getters["user/userData"].username;
    },
    profilePic(){
      return this.$store.getters["user/userData"].avatarUrl;
    },
    getDifficulties() {
      console.log("hola")
      console.log(this.routine)
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
