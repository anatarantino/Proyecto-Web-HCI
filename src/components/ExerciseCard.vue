<template>
  <v-card class="rounded-xl">
    <v-container fluid>
      <v-row>
        <v-col class="grey darken-3 d-flex justify-space-between align-center rounded-t-xl pa-0 ma-0" cols="12">
          <v-col class="d-flex justify-start" cols="9">
            <h3 class="text-start white--text text-truncate"> {{ excard.name }} </h3>
          </v-col>
          <v-col class="d-flex justify-end" cols="3">
            <v-btn icon to="/home/editexercise">
              <v-icon color="white">mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deleteExercise(excard.id)">
              <v-icon color="white">mdi-delete-outline</v-icon>
            </v-btn>
          </v-col>
        </v-col>
        <v-col cols="12">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="d-flex justify-center align-center pa-0">
                <h4 class=" font-weight-regular">{{ excard.detail }}</h4>
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
  props: ["excard"],
  methods: {
    async deleteExercise(id) {
      try {
        await this.$store.dispatch('deleteExercise', {exerciseId: id});
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
</style>