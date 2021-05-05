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
        <v-row align="right">
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

                  <v-col class="d-flex justify-center align-center">
                    <v-btn
                        color="black"
                        elevation="3"
                        rounded
                        class="white--text text-capitalize"
                        width="150"
                        @click="processData"
                    >Verificar
                    </v-btn>
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
import {required, email, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'SignIn',
  components: {Footer},
  data() {
    return {
      show: false,
      email: '',
      code: '',
      loading: false,
      message: "",
      error: false,
      verified: false
    }
  },
  methods: {
    async processData() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        console.log("Por favor complete todos los datos");
        return;
      }
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
      try {
        this.loading = true;
        await sleep(1000);
        await this.$store.dispatch('signIn', {
          email: this.email,
          code: this.code
        })
        await sleep(1000);
        this.loading = false;
        //await this.$router.replace('/home');
      } catch (e) {
        if (e.message === "verificado") {
          this.verified = true;
          this.message = e;
        } else {
          this.error = true;
          this.message = e;
          await setTimeout(() => {
            this.message = "";
            this.loading = false;
            this.error = false;
            this.resetForm();
          }, 4000);
        }
      }
    },
    resetForm() {
      this.$v.$reset();
      this.email = "";
      this.code = "";
    }
  },
  validations: {
    email: {
      email,
      required
    },
    code: {
      required
    }
  },
  computed: {
    emailError() {
      const errors = []
      if (!this.$v.email.$dirty) {
        return errors
      }
      !this.$v.email.email && errors.push('Mail inválido.')
      !this.$v.email.required && errors.push('Ingrese un Mail.')
      return errors
    },
    codeError() {
      const errors = []
      if (!this.$v.code.$dirty){
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
