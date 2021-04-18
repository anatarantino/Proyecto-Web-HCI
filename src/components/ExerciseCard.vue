<template>
  <v-card class="rounded-xl">
    <v-container fluid>
      <v-row>
        <v-col class="grey d-flex justify-space-between align-center rounded-t-xl" cols="12">
          <h3 class="text-start white--text"> Puente de la mujer versión Nat  </h3>
        </v-col>
        <v-col cols="8">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <v-text class="d-flex">Puente con la pierna estirada</v-text>
              </v-col>
              <v-col cols="12" class="d-flex align-center pa-0">
                <div
                  class="align-center rounded-xl green pl-2 pr-2 white--text"
                >
                  Cardio
                </div>
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
                    :src="categoryImg"
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
  computed:{
    categoryImg(){
      return require(`../assets/images/crear\ ejercicio.jpg`)
    }
  }
}
</script>

<style scoped>

</style>