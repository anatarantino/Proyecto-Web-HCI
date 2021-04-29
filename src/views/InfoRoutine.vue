<template>
  <v-container fluid class="ml-10 mt-8">
    <v-row align="center">
      <h1 class="font-weight-light font-italic white--text"> Fuerza de Martin Quito </h1>
      <v-btn color="transparent" x-small>
        <v-icon color="white">
          mdi-share-variant
        </v-icon>
      </v-btn>
      <v-btn color="transparent" x-small>
        <v-icon color="white">
          mdi-heart-outline
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
        <v-row class="align-center  justify-center  mb-2">
          <v-col cols="6">
            <v-row class="align-center justify-center">
              <v-col cols="3" class=" grey lighten-1 pa-0">
                <p class="text-center mt-4">
                  30"
                </p>
              </v-col>
              <v-col cols="8" class="grey lighten-1 pa-0 ml-1">
                <p class="text-center  mt-4">
                  Skipping en el lugar
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="align-center  justify-center  mb-2">
          <v-col cols="6">
            <v-row class="align-center justify-center">
              <v-col cols="3" class=" grey lighten-1 pa-0">
                <p class="text-center mt-4">
                  30"
                </p>
              </v-col>
              <v-col cols="8" class="grey lighten-1 pa-0 ml-1">
                <p class="text-center  mt-4">
                  Zancadas con salto
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="align-center  justify-center  mb-2">
          <v-col cols="6">
            <v-row class="align-center justify-center">
              <v-col cols="3" class=" grey lighten-1 pa-0">
                <p class="text-center mt-4">
                  60"
                </p>
              </v-col>
              <v-col cols="8" class="grey lighten-1 pa-0 ml-1">
                <p class="text-center  mt-4">
                  Jumping jacks
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="align-center  justify-center">
          <v-col cols="6">
            <v-row class="align-center justify-center mb-2">
              <v-col cols="3" class=" grey lighten-1 pa-0">
                <p class="text-center mt-4">
                  60"
                </p>
              </v-col>
              <v-col cols="8" class="grey lighten-1 pa-0 ml-1">
                <p class="text-center  mt-4">
                  Salto con soga
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
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
        <v-row class="align-center  justify-center  mb-2">
          <v-col cols="6">
            <v-row class="align-center justify-center">
              <v-col cols="3" class=" grey lighten-1 pa-0">
                <p class="text-center mt-4">
                  40 reps
                </p>
              </v-col>
              <v-col cols="8" class="grey lighten-1 pa-0 ml-1">
                <p class="text-center  mt-4">
                  Olas con soga
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="align-center  justify-center  mb-2">
          <v-col cols="6">
            <v-row class="align-center justify-center">
              <v-col cols="3" class=" grey lighten-1 pa-0">
                <p class="text-center mt-4">
                  40 reps
                </p>
              </v-col>
              <v-col cols="8" class="grey lighten-1 pa-0 ml-1">
                <p class="text-center  mt-4">
                  Látigo con soga
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="align-center  justify-center  mb-2">
          <v-col cols="6">
            <v-row class="align-center justify-center">
              <v-col cols="3" class=" grey lighten-1 pa-0">
                <p class="text-center mt-4">
                  40"
                </p>
              </v-col>
              <v-col cols="8" class="grey lighten-1 pa-0 ml-1">
                <p class="text-center  mt-4">
                  Plancha
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
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
            <v-row align="center" class="white pa-0  rounded-r">
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
                  alt="John"
              >
            </v-avatar>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-card-title>
                Comentarios del creador
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
export default {
  name: "InfoRoutine",
  data() {
    return {
      pics: [
        {
          src: require('../assets/images/ejercicioSoga.png'),
        },
        {
          src: require('../assets/images/crear\ ejercicio.jpg'),
        },
        {
          src: require('../assets/images/3.jpg'),
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>