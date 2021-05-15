<template>
  <v-container fluid>
    <v-app-bar app color="rgb(0, 0, 0, 0)" elevation="0">
      <v-flex text-xs-left>
        <v-btn text to="/">
          <v-img
              position="top"
              max-height="80"
              max-width="250"
              src="../assets/images/logo.png"
          ></v-img>
        </v-btn>
      </v-flex>
      <v-flex text-xs-right xs8 sm7 md5 lg4>
        <v-row align="center">
          <v-col cols="5" sm="6" class="d-flex justify-center align-center">
            <h4 class="let">
              ¿No tienes una cuenta?
            </h4>
          </v-col>
          <v-col cols="5" class="d-flex justify-center align-center">
            <v-btn
                color="#4DFF00"
                elevation="3"
                rounded
                width="150"
                class="text-capitalize"
                to="/signup"
            >Registrarme
            </v-btn>
          </v-col>
        </v-row>
      </v-flex>
    </v-app-bar>
    <template>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card color="rgb(0, 0, 0, 0)" elevation="0">
            <v-card-title primary-title class="justify-center">
              <div>
                <h3 class="let headline mb-0">Verifica tu cuenta</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <v-row justify="center" class="mt-2">
                <v-col cols="12" sm="6" md="6" class="justify-center">
                  <v-text-field
                      label="Mail"
                      :error-messages=emailError
                      filled
                      clearable
                      dark
                      v-model="email"
                      @blur="$v.email.$touch()"
                  ></v-text-field>
                  <v-text-field
                      label="Código"
                      :error-messages=codeError
                      filled
                      clearable
                      dark
                      v-model="code"
                      @blur="$v.code.$touch()"
                  ></v-text-field>
                  <v-row>
                    <v-col cols="12" class="d-flex justify-center align-center">
                      <v-btn
                          color="black"
                          elevation="3"
                          rounded
                          class="white--text text-capitalize"
                          width="150"
                          @click="verifyUser"
                      >Verificar
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-dialog v-model="processed" max-width="550">
          <v-card class="pa-6">
            <v-row align="center" justify="center">
              <v-col cols="6" >
                <h3 class="text-h5 text-center black--text">{{message}}</h3>
              </v-col>
            </v-row>
          </v-card>
        </v-dialog>
      </v-layout>
    </template>
  </v-container>
</template>

<script>
import Footer from "../components/Footer";
import {required, email} from 'vuelidate/lib/validators'

export default {
  name: 'VerifyAccount',
  components: {Footer},
  data() {
    return {
      show: false,
      email: '',
      code: '',
      verified: false,
      processed: false,
      message: ''
    }
  },
  async mounted() {
    const email = this.$route.query.email;
    const code = this.$route.query.code;
    if (email && code) {
      try {
        await this.$store.dispatch('verifyAccount', {
          email: email,
          code: code.toUpperCase()
        });
        await this.$router.replace('/');
      } catch (e) {
        console.log(e);
      }
    }
  }
  ,
  methods: {
    async verifyUser() {
      if (this.$v.code.$invalid) {
        this.$v.code.$touch();
        console.log("inválido");
        return;
      }
      try {
        const userData = this.$store.getters["user/userData"];
        await this.$store.dispatch('verifyAccount', {
          email: userData.email,
          code: this.code
        });
        await this.$router.replace('/signIn');
      } catch (e) {
        this.message = "Oops..hubo un problema, verifica los datos.";
      }
      this.processed = true;
    }

  }
  ,
  validations: {
    email: {
      email,
      required
    }
    ,
    code: {
      required
    }
  }
  ,
  computed: {
    emailError() {
      const errors = []
      if (!this.$v.email.$dirty) {
        return errors
      }
      !this.$v.email.email && errors.push('Mail inválido.')
      !this.$v.email.required && errors.push('Ingrese un Mail.')
      return errors
    }
    ,
    codeError() {
      const errors = []
      if (!this.$v.code.$dirty) {
        return errors
      }
      !this.$v.code.required && errors.push('Ingrese el código.')
      return errors
    }
  }
}
</script>

<style scoped>


.let {
  color: #ffffff;
}

</style>
