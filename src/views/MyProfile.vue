<template>
  <v-container fluid mt-8>
    <v-row align="center" justify="space-around">
      <MyProfileBase :username=name></MyProfileBase>
      <v-col md="8">
        <v-card
          class="pa-2 rounded-xl "
          outlined
          max-width="80%"
          height="600"
          elevation="2"
        >
          <v-card-text class="mt-5">
            <v-row justify="center">
              <v-col cols="12" sm="5">
                <v-text-field
                  append-icon=mdi-pencil
                  :value=name
                  label="Nombre"
                  readonly
                  class="ma-5"
                ></v-text-field>
                <v-text-field
                  append-icon=mdi-pencil
                  :value=lastName
                  label="Apellido"
                  readonly
                  class="ma-5"
                ></v-text-field>
                <v-text-field
                  :value=email
                  label="Mail"
                  readonly
                  class="ma-5  mt-10"
                ></v-text-field>
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
                  <v-col cols="6">
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
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
  import MyProfileBase from "../components/MyProfileBase";
  export default {
    name: "MyProfile",
    components: {MyProfileBase},
    data () {
      return {
        name: "Natalia",
        lastName: "Natalia",
        email: "natalian@gmail.com",
      }
  }
  }
</script>

<style scoped>

</style>