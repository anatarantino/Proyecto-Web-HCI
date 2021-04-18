<template>
  <v-container>
    <v-col cols="12" >
      <exerciseComp :exercise="types[0]"></exerciseComp>
    </v-col>
  </v-container>

</template>

<script>

import exerciseComp from "@/components/exerciseComp";

export default {
  name: "EditExercise",
  components: {exerciseComp},
  data(){
    return{
      types: [
        {
          title: "Editá tu ejecicio"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>