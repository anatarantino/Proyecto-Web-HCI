<template>
  <v-container>
    <v-col cols="12">
      <routine-comp :title="title" :routine="routine"></routine-comp>
    </v-col>
  </v-container>
</template>


<script>

import routineComp from "@/components/RoutineComp";

export default {
  name: "CreateRoutine",
  components: {routineComp},
  data() {
    return {
      title: "Creá tu rutina",
      routine: {
        id: 0
      }

    }
  }
}
</script>

<style scoped>

</style>
