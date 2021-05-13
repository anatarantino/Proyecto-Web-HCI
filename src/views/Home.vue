<template>
  <v-container v-if="loaded">
      <v-row class="d-flex ma-0 pa-0">
        <v-col cols="12" class="d-flex ma-0 pa-0 pe-0 me-0">
          <v-container>
            <v-row class="d-flex ma-0 pa-0">
              <v-col cols="12" class="d-flex ma-0 pa-0 ml-3 pl-3">
                <h3 class="subt">Tus últimas rutinas creadas</h3>
              </v-col>
              <v-container v-if="lastCreatedRoutines.length!==0">
                <v-col cols="4" v-for="rout in lastCreatedRoutines" :key="rout.id">
                  <RoutineCard :routine="rout"></RoutineCard>
                </v-col>
              </v-container>
              <v-container fluid v-else>
                <v-col cols="12">
                  <v-col cols="12" class="d-flex justify-center align-center">
                    <h1 class="white--text font-weight-regular">Aún no tienes rutinas creadas</h1>
                  </v-col>
                  <v-col cols="12" class="d-flex justify-center align-center">
                    <v-btn
                        color="#4DFF00"
                        depressed
                        absolute
                        rounded
                        elevation="10"
                        class="text-capitalize"
                        width="150"
                        to="/home/createroutine"
                    >Crear rutina
                    </v-btn>
                  </v-col>
                </v-col>
              </v-container>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" class="d-flex ma-0 pa-0">
          <v-container fluid>
            <v-row class="d-flex ma-0 pa-0">
              <v-col cols="12" class="d-flex ma-0 pa-0 ml-3 pl-3">
                <h3 class="subt">Tus rutinas favoritas</h3>
              </v-col>
              <v-container v-if="favouriteRoutine.length!==0">
                <v-col cols="4" v-for="fav in favouriteRoutine" :key="fav.id">
                  <RoutineCard :routine="fav"></RoutineCard>
                </v-col>
              </v-container>
              <v-container fluid v-else>
                <v-col cols="12" class="d-flex justify-center align-center">
                  <h1 class="white--text text-center font-weight-regular">Aún no tienes rutinas favoritas..<br>
                    explora las rutinas de la comunidad</h1>
                </v-col>
                <v-col cols="12" class="d-flex justify-center align-center">
                  <v-btn
                      color="#4DFF00"
                      depressed
                      absolute
                      rounded
                      elevation="10"
                      class="text-capitalize"
                      width="150"
                      to="/home/exploreroutines"
                  >Explorar rutinas
                  </v-btn>
                </v-col>
              </v-container>
            </v-row>
          </v-container>
        </v-col>

      </v-row>
    </v-container>
</template>


<script>

import RoutineCard from "@/components/RoutineCard";

export default {
  name: 'Home',
  components: {RoutineCard},
  data() {
    return {
      lastCreatedRoutines: [],
      favouriteRoutine: [],
      loadedFav: false,
      loadedLast: false
    }
  },
  created() {
    this.getFavourites();
    this.getLastRoutines();
  },
  methods: {
    async getLastRoutines() {
      const data = {
        orderBy: "date",
        size: 3,
        direction: "desc"
      }
      try {
        const aux = await this.$store.dispatch('getCurrentUserRoutines', data);
        this.lastCreatedRoutines = aux.content;
        this.loadedLast = true;
      } catch (e) {
        console.log(e);
      }
    },
    async getFavourites() {
      try {
        const aux = await this.$store.dispatch('getFavourites');
        this.favouriteRoutine = aux.content;
        this.loadedFav = true;
      } catch (e) {
        console.log(e);
      }

    }
  },
  computed: {
    loaded() {
      return this.loadedFav && this.loadedLast;
    }
  }
}
</script>

<style scoped>

.let {
  color: white;
}

.subt {
  color: #02ff00;
}

</style>

