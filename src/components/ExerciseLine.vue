<template>
  <v-row class="align-center  justify-center  mb-2">
    <v-col cols="6">
      <v-row class="align-center justify-center">
        <v-col cols="3" class=" grey lighten-1 pa-0">
          <p class="text-center mt-4">
            {{ exline.exvalue }}
          </p>
        </v-col>
        <v-col cols="8" class="grey lighten-1 pa-0 ml-1">
          <p class="text-center  mt-4">
            {{ exline.exname }}
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ExerciseLine",
  props: ["exline"]
}
</script>

<style scoped>
</style>
