<template>
  <v-container fluid class="ml-10 mt-8">
    <v-row align="center">
      <h1 class="font-weight-light font-italic white--text"> {{ routName }} </h1>
      <v-btn icon @click="markFav" >
        <v-icon icon :color="fav ? 'red' : 'white'">
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
    </v-row>
    <v-row class="mt-8">
      <v-col cols="6">
        <v-row class="align-center justify-center  mb-2">
          <v-col cols="6">
            <div
                class="align-center rounded-xl grey darken-1 white--text"
                centered
            >
              <p class="text-center">
                Entrada en calor
              </p>
            </div>
          </v-col>
        </v-row>
        <v-col v-for="line in lines" :key="line">
          <ExerciseLine :exline="line"></ExerciseLine>
        </v-col>
        <v-row class="align-center  justify-center">
          <v-col cols="6">
            <div
                class="align-center rounded-xl grey darken-1 white--text"
                centered
            >
              <p class="text-center">
                Primer bloque de entrenamiento
              </p>
            </div>
          </v-col>
        </v-row>
        <v-col v-for="block in block1" :key="block">
          <ExerciseLine :exline="block"></ExerciseLine>
        </v-col>
      </v-col>
      <v-col cols="6" class="justify-center">
        <v-row class="align-center">
          <v-col cols="8">
            <v-carousel
                cycle
                height="300"
                hide-delimiter-background
                show-arrows-on-hover
            >
              <v-carousel-item
                  v-for="(pic,i) in pics"
                  :key="i"
                  :src="pic.src"
              >
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row class="align-center">
          <v-col cols="4">
            <v-row align="center" class="white pa-0 rounded-l">
              <h2 class="ml-2"> Dificultad </h2>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <v-icon color="#4DFF00" v-for="dif in 2" :key="dif">
                      mdi-fire
                    </v-icon>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row align="center" class="white pa-0 rounded-r">
              <h2> Puntaje </h2>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <v-icon color="black" v-for="dif in 5" :key="dif">
                      mdi-star
                    </v-icon>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="align-center mt-5">
          <v-col cols="2">
            <v-avatar size="150" class="ml-n8">
              <img
                  src="../assets/images/Martin.png"
                  alt="Martin"
              >
            </v-avatar>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-card-title>
                Descripción de la rutina
              </v-card-title>
              <v-card-text>
                <p> Con el entrenamiento con cuerdas durante
                  una sesión de duro trabajo se pueden
                  llegar a quemar entre 300 y 500 calorías
                  en tan solo 30 minutos.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExerciseLine from "../components/ExerciseLine";

export default {
  name: "InfoRoutine",
  components: {ExerciseLine},
  data() {
    return {
      fav: false,
      routine: '',
      routName: "Fuerza de Martin Quito",
      lines: [
        {
          exvalue: "30''",
          exname: "Skipping en el lugar"
        },
        {
          exvalue: "30''",
          exname: "Zancadas con salto"
        },
        {
          exvalue: "60''",
          exname: "Jumping Jacks"
        },
        {
          exvalue: "60''",
          exname: "Salto con soga"
        },
      ],
      block1: [
        {
          exvalue: "40 reps",
          exname: "Olas en el lugar"
        },
        {
          exvalue: "40 reps",
          exname: "Látigo con soga"
        },
        {
          exvalue: "40''",
          exname: "Plancha"
        },
      ],
      pics: [
        {
          src: require('../assets/images/ejercicioSoga.png'),
        },
        {
          src: require('../assets/images/crear\ ejercicio.jpg'),
        },
        {
          src: require('../assets/images/3.jpeg'),
        },
      ],
    }
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>

</style>