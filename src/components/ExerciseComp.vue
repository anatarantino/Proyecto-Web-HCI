<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex align-center justify-center">
        <v-col cols="6" >
          <v-card color="transparent" elevation="0">
            <v-card-title class="align-center justify-center">
              <h1 class="font-weight-light font-italic text-start white--text">{{ exercise.title }}</h1>
            </v-card-title>
            <v-text-field
                clearable
                dark
                dense
                filled
                label="Nombre"
                @blur="$v.nombre.$touch()"
                v-model="nombre"
            ></v-text-field>
            <v-textarea
                dense
                filled
                clearable
                dark
                label="Descripción"
                solo
                auto-grow
                @blur="$v.desc.$touch()"
                v-model="desc"
            ></v-textarea>
          </v-card>
        </v-col>
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
            color="black"
            class="text-capitalize white--text ma-1 pt-1 pb-1"
            to="/home/createRoutine"
        >Cancelar
        </v-btn>
        <v-btn
            large
            color="#4DFF00"
            depressed
            rounded
            width="150"
            class="text-capitalize ma-1 pt-1 pb-1"
            @click="processData"
        >Crear
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {required, maxLength, minLength} from 'vuelidate/lib/validators'
export default {
  name: "ExerciseComp",
  props: ["exercise"],
  data() {
    return {
      nombre: '',
      desc: ''
    }
  },
  methods: {
    async processData() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
      try {
        this.loading = true;
        await sleep(1000);
        await this.$store.dispatch('addExercise', {
          name: this.nombre.toUpperCase(),
          detail: this.desc
        });
        this.message = "Ejercicio creado exitosamente";
        await sleep(2000);
        this.loading = false;
        this.message = "";
        await this.$router.push('/home/createroutine');
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
    }
  },
  validations: {
    nombre: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(100)
    },
    desc: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(200)
    }
  }
}
</script>

<style scoped>

</style>
