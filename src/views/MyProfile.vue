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
                  readonly
                  value="NatiNat"
                  label="Usuario"
                  class="ma-5 mt-10"
                ></v-text-field>
                <v-text-field
                  value="abcdefghijklmno"
                  type="password"
                  readonly
                  label="Contraseña"
                  class="ma-5 mt-10"
                ></v-text-field>
                <v-btn
                  color="#4DFF00"
                  elevation="2"
                  rounded
                  class="text-capitalize white--text ma-5 mt-10"
                  width="150"
                >
                  Cerrar sesión
                </v-btn>
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
    components: {MyProfileBase}
  }
</script>

<style scoped>

</style>