<template>
  <v-container>
    <v-row class="d-flex ma-0 pa-0 justify-center">
      <v-col class="d-flex justify-start align-center" cols="12">
        <!--        <FilterRout></FilterRout>-->
      </v-col>
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
          elevation="5"
          class="first-letter-capitalized"
          width="150"
          to="/home/createroutine"

      >crear rutinas
      </v-btn>
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
