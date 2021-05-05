<template>
  <v-container>
    <v-col cols="12">
      <exerciseComp :exercise="types[0]"></exerciseComp>
    </v-col>
  </v-container>

</template>

<script>

import exerciseComp from "@/components/ExerciseComp";

export default {
  name: "CreateExercise",
  components: {exerciseComp},
  data() {
    return {
      types: [
        {
          title: "Creá tu ejecicio"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>