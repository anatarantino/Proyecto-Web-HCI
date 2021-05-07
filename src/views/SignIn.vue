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
                <h3 class="let headline mb-0">Bienvenido nuevamente!</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <v-row justify="center" class="mt-2">
                <v-col cols="12" sm="6" md="6" class="justify-center">
                  <v-text-field
                      label="Usuario"
                      :error-messages=usernameError
                      filled
                      clearable
                      dark
                      v-model="username"
                      @blur="$v.username.$touch()"
                  ></v-text-field>
                  <v-text-field
                      type="password"
                      label="Contraseña"
                      :error-messages=passwordError
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show ? 'text' : 'password'"
                      filled
                      clearable
                      dark
                      @click:append="show=!show"
                      @blur="$v.password.$touch()"
                      v-model="password"
                  ></v-text-field>
                  <v-col class="d-flex justify-center align-center">
                    <v-btn
                        color="black"
                        elevation="3"
                        rounded
                        class="white--text text-capitalize"
                        width="150"
                        @click="processData"
                    >Ingresar
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
import {required, minLength, maxLength} from 'vuelidate/lib/validators'

export default {
  name: 'SignIn',
  components: {Footer},
  data() {
    return {
      show: false,
      username: '',
      password: '',
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
        console.log("Por favor complete todos los datos.");
        return;
      }
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
      try {
        this.loading = true;
        await sleep(1000);
        await this.$store.dispatch('signIn', {
          username: this.username,
          password: this.password
        })
        await sleep(1000);
        this.loading = false;
        await this.$router.replace('/home');
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
      this.username = "";
      this.password = "";
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(50)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(50)
    }
  },
  computed: {
    usernameError() {
      const errors = []
      if (!this.$v.username.$dirty) {
        return errors
      }
      !this.$v.username.required && errors.push('Ingrese un usuario.')
      !this.$v.username.minLength && errors.push('Mínimo 2 caracteres.')
      !this.$v.username.maxLength && errors.push('Máximo 50 caracteres.')
      return errors
    },
    passwordError() {
      const errors = []
      if (!this.$v.password.$dirty) {
        return errors
      }
      !this.$v.password.minLength && errors.push('Mínimo 8 caracteres.')
      !this.$v.password.required && errors.push('Ingrese una contraseña.')
      !this.$v.password.maxLength && errors.push('Máximo 50 caracteres.')
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
