<template>
  <v-container>
    <v-row class="d-flex ma-0 pa-0 justify-center">
      <!--      <v-col class="d-flex justify-start align-center" cols="12">-->
      <!--        &lt;!&ndash;        <FilterRout></FilterRout>&ndash;&gt;-->
      <!--      </v-col>-->
      <div v-if="myRoutines.length!==0">
        <v-col cols="12" class="d-flex ma-0 pa-0">
          <v-container fluid>
            <v-row class="d-flex ma-0 pa-0">
              <v-col cols="4" v-for="rout in myRoutines" :key="rout.id">
                <RoutineCard :routine="rout"></RoutineCard>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" class="d-flex ma-0 pa-0">
          <v-container fluid>
            <v-row class="d-flex ma-0 pa-0">
              <!--            <v-col cols="4" v-for="fav in favorites" :key="fav">-->
              <!--              <RoutineCard :routine="fav"></RoutineCard>-->
              <!--            </v-col>-->
            </v-row>
          </v-container>
        </v-col>
        <v-btn
            v-show="!hidden"
            color="#4DFF00"
            depressed
            absolute
            bottom
            rounded
            elevation="10"
            class="text-capitalize"
            width="150"
            to="/home/createroutine"
        >Crear rutinas
        </v-btn>
      </div>
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
</template>
<script>

import RoutineCard from "@/components/RoutineCard";
import FilterRout from "@/components/Filter";

export default {
  name: 'Home',
  components: {RoutineCard, FilterRout},
  data() {
    return {
      drawer: false,
      group: null,
      hidden: false,
      myRoutines: []
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  created() {
    this.getMyRoutines();
  },
  methods: {
    async getMyRoutines() {
      try {
        const aux = await this.$store.dispatch('getCurrentUserRoutines');
        this.myRoutines = aux.content;
      } catch (e) {
        console.log(e);
      }
    }
  },
  computed: {
    // categoryImg() {
    //   return require(`../assets/images/${this.routine.category}.jpg`)
    // }
  }
}
</script>

<style scoped>

a[v-btn]::first-letter {
  text-transform: uppercase !important;
}

.let {
  color: white;
}

.subt {
  color: #02ff00;
}

</style>
