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
              ¿Ya tienes una cuenta?
            </h4>
          </v-col>
          <v-col cols="5" class="d-flex justify-center align-center">
            <v-btn
                color="black"
                elevation="3"
                rounded
                width="150"
                class="white--text text-capitalize"
                to="/signin"
            >Ingresar
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
                <h3 class="let headline mb-0">Crea tu cuenta</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <v-row align="center" justify="center" class="mt-2">
                <v-col cols="12" sm="6" md="6" class="justify-center">
                  <v-text-field
                      label="Nombre"
                      :error-messages=nameError
                      filled
                      clearable
                      dark
                      @blur="$v.name.$touch()"
                      v-model="name"
                  ></v-text-field>
                  <v-text-field
                      label="Apellido"
                      :error-messages=lastNameError
                      filled
                      clearable
                      dark
                      @blur="$v.lastName.$touch()"
                      v-model="lastName"
                  ></v-text-field>
                  <v-text-field
                      label="Mail"
                      :error-messages=emailError
                      filled
                      clearable
                      dark
                      @blur="$v.email.$touch()"
                      v-model="email"
                  ></v-text-field>
                  <!--                  <p v-if="$v.email.$error">Por favor ingrese un mail correcto.</p>-->
                  <v-text-field
                      type="password"
                      label="Contraseña"
                      hint="Mínimo 8 caracteres"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      :error-messages=passwordError
                      filled
                      clearable
                      dark
                      @click:append="show1=!show1"
                      @blur="$v.password.$touch()"
                      v-model="password"
                  ></v-text-field>
                  <v-text-field
                      type="password"
                      label="Repite la contraseña"
                      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show2 ? 'text' : 'password'"
                      filled
                      clearable
                      dark
                      @blur="$v.confirmPassword.$touch()"
                      v-model="confirmPassword"
                      @click:append="show2=!show2"
                  ></v-text-field>
                  <v-col class="d-flex justify-center align-center">
                    <v-btn
                        color="#4DFF00"
                        elevation="3"
                        rounded
                        class="text-capitalize"
                        width="150"
                        @click="processData"
                    >Registrarme
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
import {required, maxLength, minLength, email, sameAs} from 'vuelidate/lib/validators'

export default {
  name: 'SignUp',
  data() {
    return {
      show1: false,
      show2: false,
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      lastName: '',
      loading: false,
      message: "",
      error: false
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
        await this.$store.dispatch('signUp', {
          email: this.email,
          password: this.password,
          name: this.name,
          lastName: this.lastName
        })
        this.message = "Cuenta creada exitosamente";
        await sleep(2000);
        this.loading = false;
        this.message = "";
        //await this.$router.push('/verifyAccount');
      } catch (e) {
        this.error = true;
        this.message = e;
        await setTimeout(() => {
          this.message = "";
          this.loading = false;
          this.error = false;
          this.resetForm();
        }, 3500);
      }
    },

    resetForm() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.name = "";
      this.lastName = "";
    }
  },
  validations: {
    email: {
      email,
      required
    },
    name: {
      minLength: minLength(2),
      maxLength: maxLength(15),
      required
    },
    lastName: {
      minLength: minLength(2),
      maxLength: maxLength(15),
      required
    },
    password: {
      required,
      minLength: minLength(8)
    },
    confirmPassword: {
      sameAs: sameAs('password')
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
    nameError() {
      const errors = []
      if (!this.$v.name.$dirty) {
        return errors
      }
      !this.$v.name.minLength && errors.push('Mínimo 2 caracteres.')
      !this.$v.name.maxLength && errors.push('Máximo 15 caracteres.')
      !this.$v.name.required && errors.push('Ingrese un nombre.')
      return errors
    },
    lastNameError() {
      const errors = []
      if (!this.$v.lastName.$dirty) {
        return errors
      }
      !this.$v.lastName.minLength && errors.push('Mínimo 2 caracteres.')
      !this.$v.lastName.maxLength && errors.push('Máximo 15 caracteres.')
      !this.$v.lastName.required && errors.push('Ingrese un apellido.')
      return errors
    },
    passwordError() {
      const errors = []
      if (!this.$v.password.$dirty){
        return errors
      }
      !this.$v.password.minLength && errors.push('Mínimo 8 caracteres.')
      !this.$v.password.required && errors.push('Ingrese una contraseña.')
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