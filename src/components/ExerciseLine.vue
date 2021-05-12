<template>
    <v-row class="align-center justify-space-between justify-center mb-2">
      <v-col cols="12" class="grey lighten-2 pt-1 pb-0 mb-0 d-flex justify-center">
        <h3 class="text-start mt-2 font-weight-regular">
          {{ this.exercise.exercise.name }}
        </h3>
      </v-col>

      <v-col cols="12" class="grey lighten-2 mb-2 pl-14 pr-14 d-flex align-start justify-center">
        <v-row>
          <h3 class="text-start font-weight-light">{{this.exercise.repetitions}} reps</h3>
          <v-spacer></v-spacer>
          <h3 class="text-start font-weight-light">{{this.exercise.duration}} segs</h3>
        </v-row>

      </v-col>
    </v-row>

</template>

<script>
export default {
  name: "ExerciseLine",
  props: ["exercise"],
  data() {
    return {
    }
  },
  computed: {
  }

}
</script>

<style scoped>
</style>
