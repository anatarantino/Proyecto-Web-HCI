<template>
  <v-card
      class="pa-2 rounded-xl "
      outlined
      max-width="80%"
      height="600"
      elevation="2"
  >
    <v-card-text class="mt-5">
      <v-row justify="center">
        <v-col cols="12" sm="6"><!--append-icon=mdi-pencil-->
          <v-text-field
              readonly
              label="Usuario"
              class="ma-5"
              v-model=user
          >
          </v-text-field>
          <v-text-field
              label="Mail"
              readonly
              class="ma-5"
              v-model=email
          >
          </v-text-field>
          <v-row class="mt-10">
            <v-col cols="6">
              <v-btn
                  color="#4DFF00"
                  elevation="2"
                  rounded
                  class="text-capitalize mr-5 mt-10"
                  width="130"
                  to="/home/myprofile"
              >
                Guardar
              </v-btn>
            </v-col>
            <v-col mt-10 cols="6">
              <v-btn
                  color="#000000"
                  elevation="2"
                  rounded
                  class="text-capitalize white--text mt-10"
                  width="130"
                  to="/home/myprofile"
              >
                Cancelar
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ProfileMain",
  data() {
    return {
       user: "",
      email: ""
    }
  }
}
</script>

<style scoped>
</style>