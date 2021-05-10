<template>
  <v-container>
    <v-row class="d-flex ma-0 pa-0">
      <v-col cols="12" class="d-flex justify-start align-center">
        <h1 class="let">¡Bienvenido!</h1>
      </v-col>
      <v-col cols="12" class="d-flex ma-0 pa-0">
        <v-container fluid>
          <v-row class="d-flex ma-0 pa-0">
            <v-col cols="12" class="d-flex ma-0 pa-0">
              <h3 class="subt">Tus últimas rutinas creadas</h3>
            </v-col>
            <v-col cols="4" v-for="rout in lastCreatedRoutines" :key="rout.id">
              <RoutineCard :routine="rout"></RoutineCard>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
<!--      <v-col cols="12" class="d-flex ma-0 pa-0">-->
<!--        <v-container fluid>-->
<!--          <v-row class="d-flex ma-0 pa-0">-->
<!--            <v-col cols="12" class="d-flex ma-0 pa-0">-->
<!--              <h3 class="subt">Tus rutinas favoritas</h3>-->
<!--            </v-col>-->
<!--            <v-col cols="4" v-for="fav in favorites" :key="fav.id">-->
<!--              <RoutineCard :routine="fav"></RoutineCard>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-container>-->
<!--      </v-col>-->
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
      favouriteRoutine: []

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
        const aux = await this.$store.dispatch('getCurrentUserRoutines',data);
        console.log("entre a lo de las ultimas");
        console.log(aux.content);
        this.lastCreatedRoutines = aux.content;
      }catch (e){
        console.log(e);
      }
    },
    async getFavourites() {
      try {
        const aux = await this.$store.dispatch('getFavourites');
        this.favouriteRoutine = aux.content;
      }catch (e){
        console.log(e);
      }

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

