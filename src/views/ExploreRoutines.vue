<template>
  <v-container>
    <v-row class="d-flex ma-0 pa-0 justify-center">
      <v-row>
        <v-col class="d-flex justify-space-between align-center" cols="12">
          <v-col cols="3" class="d-flex justify-start align-self-start ml-3 pl-3">
            <v-text-field
                label="Buscar"
                prepend-inner-icon="mdi-magnify"
                filled
                clearable
                dark
                hide-details
            ></v-text-field>
          </v-col>
<!--          <v-col class="d-flex justify-start">-->
<!--            <FilterRout></FilterRout>-->
<!--          </v-col>-->
        </v-col>
      </v-row>
      <v-col cols="12" class="d-flex ma-0 pa-0">
        <v-container fluid>
          <v-row class="d-flex ma-0 pa-0">
            <v-col cols="4" v-for="rout in publicRoutines" :key="rout.id">
              <RoutineCard :routine="rout"></RoutineCard>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
<!--      <v-col cols="12" class="d-flex ma-0 pa-0">-->
<!--        <v-container fluid>-->
<!--          <v-row class="d-flex ma-0 pa-0">-->
<!--            <v-col cols="4" v-for="fav in favorites" :key="fav">-->
<!--              <RoutineCard :routine="fav"></RoutineCard>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-container>-->
<!--      </v-col>-->
      <v-btn
          v-show="!hidden"
          color="#4DFF00"
          depressed
          rounded
          bottom
          elevation="5"
          class="text-capitalize"
          width="150"
      >Más rutinas
      </v-btn>
    </v-row>
  </v-container>
</template>


<script>

import RoutineCard from "@/components/RoutineCard";
import FilterRout from "@/components/Filter";

export default {
  name: 'Home',
  components: {FilterRout, RoutineCard},
  data() {
    return {
      hidden: false,
      publicRoutines: []
    }
  },
  created() {
    this.getPublicRoutines();
  },
  methods: {
    async getPublicRoutines() {
      try {
        const aux = await this.$store.dispatch('getRoutines');
        let index = 0;
        for(let r of aux.content){
          if(r.isPublic){
            this.publicRoutines.push(r);
          }
          index++;
        }
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
