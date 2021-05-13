<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <!--      <v-row>-->
      <!--        <v-col class="d-flex justify-space-between align-center" cols="12">-->
      <!--          <v-col cols="3" class="d-flex justify-start align-self-start ml-3 pl-3">-->
      <!--            <v-text-field-->
      <!--                label="Buscar"-->
      <!--                prepend-inner-icon="mdi-magnify"-->
      <!--                filled-->
      <!--                clearable-->
      <!--                dark-->
      <!--                hide-details-->
      <!--            ></v-text-field>-->
      <!--          </v-col>-->
      <!--          <v-col class="d-flex justify-start">-->
      <!--            <FilterRout></FilterRout>-->
      <!--          </v-col>-->
      <!--        </v-col>-->
      <!--      </v-row>-->
      <v-container v-if="!isEmpty" fluid>
        <v-col cols="12" class="d-flex ma-0 pa-0">
          <v-container fluid>
            <v-row class="d-flex ma-0 pa-0">
              <v-col cols="4" v-for="rout in publicRoutines" :key="rout.id">
                <RoutineCard :routine="rout"></RoutineCard>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-container>
      <v-container fluid v-else>
        <v-col cols="12">
          <v-col cols="12" class="d-flex justify-center align-center">
            <h1 class="white--text text-center font-weight-regular">Ups..aún no hay rutinas en la comunidad<br>
              se el primero en crear una!</h1>
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
      <!--      <v-col cols="12" class="d-flex ma-0 pa-0">-->
      <!--        <v-container fluid>-->
      <!--          <v-row class="d-flex ma-0 pa-0">-->
      <!--            <v-col cols="4" v-for="fav in favorites" :key="fav">-->
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
import FilterRout from "@/components/Filter";

export default {
  name: 'Home',
  components: {FilterRout, RoutineCard},
  data() {
    return {
      hidden: false,
      publicRoutines: [],
      isEmpty: true
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
        for (let r of aux.content) {
          if (r.isPublic) {
            this.publicRoutines.push(r);
          }
          index++;
        }
        if (this.publicRoutines.length === 0) {
          this.isEmpty = true
        } else {
          this.isEmpty = false
        }
        console.log(this.publicRoutines);
      } catch (e) {
        console.log(e);
      }
    }
  },
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
