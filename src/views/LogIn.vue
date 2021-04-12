<template>
  <v-container fluid>
    <v-app-bar app color="rgb(0, 0, 0, 0)" elevation="0">
    <v-flex text-xs-left>
      <v-img
          position="top"
          max-height="48"
          max-width="163"
          src="../assets/images/logo.png"
      ></v-img>
    </v-flex>
    <v-flex text-xs-right xs8 sm7 md5 lg4>
      <v-row align="right">
        <v-col cols="5" class="d-flex justify-center align-center">
          <h4 class="let">
            ¿No tienes una cuenta?
          </h4>
        </v-col>
        <v-col cols="5" class="d-flex justify-center align-center">
        <v-btn
              color="#4DFF00"
              elevation="3"
              rounded
          ><h5 class="font-bold">Registrarme</h5></v-btn>
        </v-col>
      </v-row>
    </v-flex>
  </v-app-bar>
    <template>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card color="rgb(0, 0, 0, 0)" elevation="0">
            <v-card-title primary-title>
              <div>
                <h3 class="let headline mb-0">Bienvenido nuevamente!</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <v-row >
              <v-col cols="12" sm="6" md="6">
              <v-text-field
                  label="Mail"
                  filled
                  rounded
                  dense
                  solo
              ></v-text-field>
                  <v-text-field type="password"
                                label="Contraseña"
                                solo
                                filled
                                rounded
                                dense
                  ></v-text-field>
                <v-col class="d-flex justify-center align-center">

                  <v-btn
                      color="#4DFF00"
                      elevation="3"
                      rounded
                  ><h5 class="font-bold">Ingresar</h5></v-btn>

                </v-col>
              </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </template>

  </v-container>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: 'LogIn',
  components: {Footer},
}
</script>

<style scoped>


  .let{
    color: #ffffff;
  }

</style>
