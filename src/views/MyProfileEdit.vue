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
          <v-card-text class="mt-5">
            <v-row justify="center">
              <v-col cols="12" sm="5">
                <v-text-field
                  value="Natalia"
                  label="Nombre"
                  readonly
                  class="ma-5"
                ></v-text-field>
                <v-text-field
                  append-icon=mdi-pencil
                  value="NatiNat"
                  label="Usuario"
                  class="ma-5 mt-10"
                ></v-text-field>
                <v-text-field
                  append-icon=mdi-pencil
                  value="abcdefghijklmno"
                  label="Contraseña"
                  :type="show1 ? 'text' : 'password'"
                  class="ma-5 mt-10"
                  @click="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  value="Natalia"
                  label="Apellido"
                  readonly
                  class="ma-5"
                ></v-text-field>
                <v-text-field
                  value="natalian@gmail.com"
                  label="Mail"
                  readonly
                  class="ma-5  mt-10"
                ></v-text-field>
                <v-row>
                  <v-col>
                    <v-btn
                      color="#00B14A"
                      elevation="2"
                      rounded
                      class="text-capitalize white--text ml-5 mt-10"
                      width="100"
                      to="/home/myprofile"
                    >
                      Guardar
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn
                      color="#EF4343"
                      elevation="2"
                      rounded
                      class="text-capitalize white--text mt-10"
                      width="100"
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
  name: "MyProfileEdit",
  components: {MyProfileBase},
  data () {
      return {
        show1: false,
      }
  }
}
</script>

<style scoped>

</style>