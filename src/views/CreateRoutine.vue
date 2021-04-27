<template>
  <v-container>
    <v-col cols="12">
      <routine-comp :routine="types[0]"></routine-comp>
    </v-col>
  </v-container>

</template>



<script>

import routineComp from "@/components/RoutineComp";

export default {
  name: "CreateRoutine",
  components: {routineComp},
  data(){
    return{
      types: [
        {
          title: "Creá tu rutina"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>