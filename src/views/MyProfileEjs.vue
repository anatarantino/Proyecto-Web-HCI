<template>
  <v-container fluid mt-8>
    <v-row align="center" justify="space-around">
      <MyProfileBase></MyProfileBase>
      <v-col md="8">
        <v-card
          class="pa-2 rounded-xl "
          outlined
          max-width="80%"
          height="600"
          elevation="2"
        >
          <v-container ma-5>
            <v-row align="center">
              <v-col cols="6">
                <v-row>
                  <v-col cols="11">
                    <ExerciseCard></ExerciseCard>
                  </v-col>
                  <v-col cols="1">
                    <v-icon>
                      mdi-pencil
                    </v-icon>
                  </v-col>
                </v-row>  
              </v-col>
              <v-col>
                <v-btn
                  color="#00B14A"
                  elevation="2"
                  class="mx-2"
                  fab
                  dark
                >
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyProfileBase from "../components/MyProfileBase";
import ExerciseCard from "../components/ExerciseCard";
export default {
  name: "MyProfileEjs",
  components: {MyProfileBase, ExerciseCard}
}
</script>

<style scoped>

</style>