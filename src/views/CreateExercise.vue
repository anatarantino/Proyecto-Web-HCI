<template>
  <v-container>
    <v-col cols="12">
      <exerciseComp :title="title" :exercise="exerciseInfo"></exerciseComp>
    </v-col>
  </v-container>
</template>

<script>

import exerciseComp from "@/components/ExerciseComp";

export default {
  name: "CreateExercise",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {exerciseComp},
  data() {
    return {
      title: "Creá tu ejecicio",
      exerciseInfo: {
        id: this.id,
        fromCreate: true
      }
    }
  }
}
</script>

<style scoped>

</style>
