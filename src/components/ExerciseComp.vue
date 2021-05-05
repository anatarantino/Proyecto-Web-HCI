<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card color="transparent" elevation="0">
          <v-card-title>
            <h1 class="font-weight-light font-italic text-start white--text">{{ exercise.title }}</h1>
          </v-card-title>

          <v-text-field
              clearable
              dark
              dense
              filled
              label="Nombre"

          ></v-text-field>
          <v-textarea
              dense
              filled
              clearable
              dark
              label="Descripción"
              solo
              auto-grow
          ></v-textarea>

          <v-flex justify-center xs4>
            <v-select
                :items="items"
                label="Categoría"
                solo
                dark
            ></v-select>
          </v-flex>

        </v-card>
      </v-col>
      <v-col cols="6" class="d-flex align-content-center">
        <v-card elevation="0" class="mx-auto" color="transparent">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="pt-16 pb-0 d-flex justify-center">
                <v-btn
                    height="150"
                    width="200"
                    elevation="2"
                    dark>
                  <v-icon
                      size="70"
                      light
                      right
                      align="center"
                      justify="center"
                  >mdi-image-plus
                  </v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <v-btn large
                       depressed
                       rounded
                       dark
                       width="150" class="text-capitalize ma-2 pt-6 pb-6">
                  Agregar video
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn
            large
            depressed
            rounded
            width="150"
            light
            class="text-capitalize ma-1 pt-1 pb-1"
            to="/home/createroutine"
        >Cancelar
        </v-btn>
        <v-btn
            large
            color="#4DFF00"
            depressed
            rounded
            width="150"
            class="text-capitalize ma-1 pt-1 pb-1"
            to="/home/createroutine"
        >Terminar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ExerciseComp",
  props: ["exercise"]
}
</script>

<style scoped>

</style>