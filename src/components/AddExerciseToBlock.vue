<template>
  <v-row>
    <v-col cols="12">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ exercise.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ exercise.detail }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-row pa-3>
          <v-col cols="12" class="d-flex align-center justify-center ma-0 pa-0">
            <v-col cols="5" class="d-flex justify-end align-center">
              <v-text-field
                  label="Repeticiones"
                  v-model="reps"
                  class="mt-0 pt-3 ml-6 mb-4"
                  hide-details
                  type="number"
                  min="1"
                  style="width: 50px"
                  color="black"
                  :error-messages="errorReps"
              ></v-text-field>
            </v-col>
            <v-col cols="7" class="d-flex justify-end align-center">
              <v-text-field
                  label="Duración (en segundos)"
                  v-model="duration"
                  class="mt-0 pt-3 ml-6 mb-4"
                  hide-details
                  type="number"
                  min="1"
                  style="width: 50px"
                  color="black"
                  :error-messages="errorDur"
              ></v-text-field>
            </v-col>
          </v-col>
        </v-row>
        <v-list-item-action>
          <v-checkbox
              @blur="$v.reps.$touch()"
              v-model="checkbox"
              v-on:change="emitState"
              color="#4DFF00"
          ></v-checkbox>
        </v-list-item-action>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
  name: "AddExerciseToBlock",
  props: ["exercise", "section"],
  data() {
    return {
      checkbox: false,
      prueba: 1,
      reps: '',
      duration: ''
    }
  },
  methods: {
    emitState(event) {
      if (this.$v.$invalid) {
        this.$v.$touch();
        console.log("Por favor complete todos los datos");
        this.checkbox = false;
        return;
      }
      this.exercise.repetitions = parseInt(this.reps);
      this.exercise.duration = parseInt(this.duration);
      this.$emit('exMarked', this.checkbox, this.exercise);
    },
  },
  validations: {
    reps: {
      required
    },
    duration: {
      required
    }
  },
  computed: {
    errorReps() {
      const errors = []
      if (!this.$v.reps.$dirty) {
        return errors
      }
      !this.$v.reps.required && errors.push('Ingrese una cantidad')
      return errors
    },
    errorDur() {
      const errors = []
      if (!this.$v.duration.$dirty) {
        return errors
      }
      !this.$v.duration.required && errors.push('Ingrese una cantidad')
      return errors
    }
  }
}
</script>

<style scoped>

</style>