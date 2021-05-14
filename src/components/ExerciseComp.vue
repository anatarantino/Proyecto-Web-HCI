<template>
  <v-container v-if="loaded">
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
                @blur="$v.name.$touch()"
                :error-messages="errorName"
                v-model="name"
            ></v-text-field>
            <v-textarea
                dense
                filled
                clearable
                dark
                label="Descripción"
                solo
                auto-grow
                @blur="$v.detail.$touch()"
                :error-messages="errorDetail"
                v-model="detail"
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
            @click="exit"
        >Cancelar
        </v-btn>
        <v-btn
            large
            color="#4DFF00"
            depressed
            rounded
            width="150"
            class="text-capitalize ma-1 pt-1 pb-1"
            @click="publish"
        >Publicar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {required, maxLength, minLength} from 'vuelidate/lib/validators'
export default {
  name: "ExerciseComp",
  props: ["title","exercise"],
  data() {
    return {
      name: '',
      detail: '',
      loaded: false,
      editMode: false,
      fromProfilePage: false
    }
  },
  created(){
    this.loadData();
  },
  methods: {
    loadData(){

      if(this.exercise.id >= 0 ){
        this.name = this.exercise.name;
        this.detail = this.exercise.detail;
        this.editMode = true;
      }else if(this.exercise.id === "-2"){
        this.fromProfilePage = true;
      }
      this.loaded = true;
    },
    publish() {
      this.editMode ? this.update() : this.processData()
    },
    async update() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      try{
        const aux = await this.$store.dispatch('modifyExercise', {
          exerciseId: this.exercise.id,
          name: this.name.toUpperCase(),
          detail: this.detail
        })
      }catch (e) {
        console.log(e);
      }
      await this.$router.replace('/home/myProfile');
    },
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
          name: this.name.toUpperCase(),
          detail: this.detail
        });
        this.message = "Ejercicio creado exitosamente";
        await sleep(2000);
        this.loading = false;
        this.message = "";
        if(this.fromProfilePage){
          await this.$router.push('/home/myProfile');
        }else{
          await this.$router.push('/home/createroutine');
        }
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
    async exit() {
      if(this.fromProfilePage || this.editMode){
        await this.$router.push('/home/myProfile');
      }else{
        await this.$router.push('/home/createroutine');
      }
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(100)
    },
    detail: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(200)
    }
  },
  computed: {
    errorName(){
      const errors = []
      if (!this.$v.name.$dirty) {
        return errors
      }
      !this.$v.name.required && errors.push('Ingrese un nombre');
      !this.$v.name.minLength && errors.push('Máximo 100 caracteres');
      !this.$v.name.maxLength && errors.push('Máximo 100 caracteres');
      return errors
    },
    errorDetail(){
      const errors = []
      if (!this.$v.detail.$dirty) {
        return errors
      }
      !this.$v.detail.required && errors.push('Ingrese una descripción');
      !this.$v.detail.minLength && errors.push('Máximo 100 caracteres');
      !this.$v.detail.maxLength && errors.push('Máximo 100 caracteres');
      return errors
    }
  }
}
</script>

<style scoped>

</style>
