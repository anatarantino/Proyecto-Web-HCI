<template>
  <v-card class="rounded-xl">
    <v-container fluid>
      <v-row>
        <v-col class="grey darken-3 d-flex justify-space-between align-center rounded-t-xl pa-0 ma-0" cols="12">
          <v-col class="d-flex justify-start" cols="9">
          <h3 class="text-start white--text"> {{ excard.cTitle }} </h3>

          </v-col>
          <v-col class="d-flex justify-end" cols="3">

          <v-btn icon to="/home/editexercise">
            <v-icon color="white">mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deleteExercise">
            <v-icon color="white">mdi-delete-outline</v-icon>
          </v-btn>

          </v-col>

        </v-col>
        <v-col cols="8">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <v-text class="d-flex">{{ excard.cText }}</v-text>
              </v-col>
              <v-col cols="12" class="d-flex align-center pa-0">
                <v-card
                    class="align-center rounded-xl pl-2 pr-2 mt-3"
                    color="#4DFF00"
                >
                  {{ excard.cType }}
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="4">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="d-flex justify-end align-center pa-0">
                <v-img
                    position="top"
                    max-height="150"
                    max-width="100"
                    class="d-flex rounded-lg"
                    :src="excard.cImage"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>

  </v-card>
</template>

<script>
export default {
  name: "ExerciseCard",
  props: ["excard"]
}
</script>

<style scoped>
</style>